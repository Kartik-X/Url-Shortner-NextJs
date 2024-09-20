import Link from "next/link";
import { shortenUrl } from "./api/serverActions/shortenUrlAction";

export default function Home() {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-success-subtle">
        <div className="p-5 bg-body-secondary rounded-4 shadow-lg w-75">
          <h1 className="fs-6  p-3 rounded-2 fw-bolder text-center text-bg-primary">
            URL SHORTNER
          </h1>
          <form action={shortenUrl} className="">
            <input
              type="text"
              placeholder="Enter URL"
              name="originalUrl"
              className="form-control border border-2 border-primary"
            />
            <button type="submit" className="btn btn-success">
              Shorten
            </button>
          </form>
        </div>
        <div className="mt-4 text-center">
          <Link href="/urls">
            <span className="btn btn-danger w-100">
              View all Shortened URLS
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
