import { NextResponse } from "next/server";
import games from "../data.json"

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const filteredGames = games.filter((game) => {
    return game.title.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredGames);
}