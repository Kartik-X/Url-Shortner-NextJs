import { UrlShortnerService } from "@/services/UrlShortnerService";
import { NextResponse } from "next/server";

export async function GET() {
  const shortnerService = new UrlShortnerService();
  let response = await shortnerService.getAllUrls();
  response = NextResponse.json({ response });
  response.headers.set(
    "Cache-control",
    "public,max-age=30 s-maxage=30,stale-while-revalidate-25"
  );
  return response;
}
