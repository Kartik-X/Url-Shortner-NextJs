import { revalidatePath } from "next/cache";

const { UrlShortnerService } = require("@/services/UrlShortnerService");

export const shortenUrl = async (formData) => {
  "use server"; //THIS BECOMES A SERVER ACTION

  const originalUrl = formData.get("originalUrl"); //name property from main page.js in form
  console.log("original url passed is ", originalUrl);
  const shortnerService = new UrlShortnerService();
  const shortUrl = await shortnerService.shortenUrl(originalUrl);
  revalidatePath("/urls");
};
