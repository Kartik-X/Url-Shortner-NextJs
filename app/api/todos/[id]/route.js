import { NextResponse } from "next/server";
// export async function GET(request, { params }) {
//   const { id } = params;
//   return NextResponse.json({
//     todos: "Todo 1" + id,
//   });
// }
export async function GET(request, { params }) {
  const { id } = params;
  const { searchParams } = new URL(request.url);
  console.log(searchParams.get("title"));
  return NextResponse.json({
    todos: "Todo 1" + id,
  });
}
export async function DELETE() {
  return NextResponse.json({ response: true });
}
export async function POST(request) {
  console.log(await request.json());
  return NextResponse.json({ response: true });
}
