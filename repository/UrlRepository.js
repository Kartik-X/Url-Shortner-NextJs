import Url from "@/models/Url";
import connectDB from "@/config/db";

export default class UrlRepository {
  constructor() {
    connectDB();
    this.urlModel = Url;
  }

  async getUrlById(id) {
    return await this.urlModel.findById(id).lean();
  }

  async getUrlByShortUrl(shortUrl) {
    return this.urlModel.findOne({ shortUrl }).lean();
  }

  async getUrlByOriginalUrl(originalUrl) {
    return this.urlModel.findOne({ originalUrl }).lean();
  }

  async getAllUrls() {
    return this.urlModel.find().lean();
  }

  async deleteUrl(id) {
    return await this.urlModel.findByIdAndDelete(id).lean();
  }

  async createUrl(originalUrl, shortUrl) {
    return await this.urlModel.create({ shortUrl, originalUrl });
  }
}
