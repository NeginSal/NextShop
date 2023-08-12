 import { NextResponse } from 'next/server';
// import { NextApiResponse } from 'next';
import { games } from './data.json';

export async function GET(request) {
  return NextResponse.json(games);
  // return NextApiResponse.json(games)
}