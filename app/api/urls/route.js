import { UrlShortnerService } from "@/services/UrlShortnerService";
import { NextResponse } from "next/server";

export async function GET() {
  const shortnerService = new UrlShortnerService();
  let response = await shortnerService.getAllUrls();
  response = NextResponse.json({ response });
  response.headers.set(
    "Cache-control",
    "public,max-age=5 s-maxage=5,stale-while-revalidate-4"
  );
  return response;
}
