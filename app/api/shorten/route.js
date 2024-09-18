import { UrlShortnerService } from "@/services/UrlShortnerService";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { originalUrl } = await request.json();
  const shortnerService = new UrlShortnerService();
  const shortUrl = await shortnerService.shortenUrl(originalUrl);
  return NextResponse.json({ shortUrl }, { status: 201 });
}

export async function GET(request) {
  const shortnerService = new UrlShortnerService();
  const response = await shortnerService.getAllUrls();
  return NextResponse.json({ response });
}
