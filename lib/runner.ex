defmodule ElixirikaMasterdata.Runner do
  @moduledoc """
  Documentation for `ElixirikaMasterdata`.
  """

  @doc """
  Hello world.

  ## Examples

      iex> ElixirikaMasterdata.hello()
      :world

  """

  def run_all! do
    for(table_name <- target_tables()) do
      :timer.sleep(1000)
      IO.puts("fetching #{table_name} ...")
      csv = fetch_csv(table_name, mock: false)
      [header | body] = NimbleCSV.RFC4180.parse_string(csv, skip_headers: false)
      json = reconstruct_to_map(header, body)
      encoded = Jason.encode!(json)
      File.write!("./js/#{table_name}.js", "module.exports = " <> encoded)
    end
  end

  def fetch_csv(table_name, mock: false) do
    # TODO: sheet_id を 環境変数、 sheet_name をスキーマ定義ファイルから取ってこれるようにする
    url = "https://docs.google.com/spreadsheets/d/1AC3XNLuCcmUG7iGHzb40zOj4b3_58cUuvA0fP9jtkxg/gviz/tq?tqx=out:csv&sheet=#{table_name}"
    HTTPoison.start()
    %{body: body} = HTTPoison.get!(url)
    body
  end

  def fetch_csv(mock: true) do
    """
"id:integer","title:string","description:string","type:string","value1:integer","value2:integer","value3:integer"
"1","200pt","200pt稼ごう","score","200","",""
"2","400pt","400pt稼ごう","score","400","",""
"3","600pt","600pt稼ごう","starPaletteKind","600","",""
"4","4kind","4種類提出しよう","starPaletteKind","4","",""
"5","6kind","6種類提出しよう","starPaletteKind","6","",""
    """
  end

  def reconstruct_to_map(header, body) do
    do_reconstruct_to_map(header, body)
  end

  defp do_reconstruct_to_map(header, [car | cdr]) do
    json = zip_one_row(header, car)
    [json] ++ do_reconstruct_to_map(header, cdr)
  end
  defp do_reconstruct_to_map(_header, []), do: []

  defp zip_one_row([index | header], [value | rest]) do
    # ハイパーズボラインデックスアノテーション
    # title:string みたいな感じに `カラム名:型名` を入力する
    [index_name, type] = String.split(index, ":")
    Map.merge(zip_one_row(header, rest) , %{index_name => parse_fn(value, type)})
  end
  defp zip_one_row([], []), do: %{}

  # integer はnull を許容する
  defp parse_fn("", "integer"), do: nil
  defp parse_fn(value, "integer"), do: String.to_integer(value)
  defp parse_fn(value, "intarray"), do: Jason.decode!(value)
  defp parse_fn(value, "string"), do: value
  defp parse_fn(value, _), do: value

  defp target_tables do
    [
      "challenges",
      "chapters",
    ]
  end
end
