defmodule ElixirikaMasterdata do
  @moduledoc """
  Documentation for `ElixirikaMasterdata`.
  """

  @doc """
  Hello world.

  ## Examples

      iex> ElixirikaMasterdata.hello()
      :world

  """

  def run do
    ElixirikaMasterdata.Runner.fetch_and_push!()
  end
end
