import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({
    todos: ["todo1", "todo2"],
  });
}
export async function POST() {
  return NextResponse.json(
    {
      todos: "Todo3",
    },
    { status: 201 }
  );
}
export async function DELETE() {
  return NextResponse.json(
    {
      todos: "Todo3",
    },
    { status: 201 }
  );
}
