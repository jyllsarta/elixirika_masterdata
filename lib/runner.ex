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
    csv = fetch_csv(mock: true)
    [header | body] = NimbleCSV.RFC4180.parse_string(csv, skip_headers: false)
    json = reconstruct_to_map(header, body)
    encoded = Jason.encode!(json)
    File.write!("./js/challenge.js", "module.exports = " <> encoded)
  end

  def fetch_csv(mock: false) do
    # TODO: sheet_id を 環境変数、 sheet_name をスキーマ定義ファイルから取ってこれるようにする
    url = "https://docs.google.com/spreadsheets/d/1AC3XNLuCcmUG7iGHzb40zOj4b3_58cUuvA0fP9jtkxg/gviz/tq?tqx=out:csv&sheet=challenges"
    HTTPoison.start()
    %{body: body} = HTTPoison.get!(url)
  end

  def fetch_csv(mock: true) do
    """
"id","title","description","type","value1","value2","value3"
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
  defp do_reconstruct_to_map(header, []), do: []

  defp zip_one_row([index | header], [value | rest]) do
    Map.merge(zip_one_row(header, rest) , %{index => value})
  end
  defp zip_one_row([], []), do: %{}
end
