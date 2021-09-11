defmodule Mix.Tasks.Start do
  use Mix.Task

  @shortdoc "spreadsheet からデータを拾ってきてJSONに出力します。"
  def run(_) do
    ElixirikaMasterdata.run()
  end
end
