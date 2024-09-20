const shortId = require("shortid");

const { default: UrlRepository } = require("@/repository/UrlRepository");

export class UrlShortnerService {
  constructor() {
    this.urlRepository = new UrlRepository();
  }

  async shortenUrl(originalUrl) {
    let url = await this.urlRepository.getUrlByOriginalUrl(originalUrl);
    if (url) {
      return url.shortUrl;
    }
    let shortUrl = shortId();

    url = await this.urlRepository.getUrlByShortUrl(shortUrl);

    while (url) {
      let shortUrl = shortId();
      url = await this.urlRepository.getUrlByShortUrl(shortUrl);
    }

    await this.urlRepository.createUrl(originalUrl, `urls/${shortUrl}`);
    return shortUrl;
  }

  async getAllUrls() {
    return await this.urlRepository.getAllUrls();
  }

  async getUrlByShortUrl(shortUrl) {
    return await this.urlRepository.getUrlByShortUrl(shortUrl);
  }
}
