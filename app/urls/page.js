async function fetchUrls() {
  console.log("aaa", process.env.NEXT_PUBLIC_BASE_URL);
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/urls`, {
    cache: "force-cache",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch urls");
  }
  return response.json();
}

export default async function UrlList() {
  let urls;
  try {
    urls = await fetchUrls();
    console.log("urllss", urls);
  } catch (error) {
    console.log(error);
    return (
      // create a different UI component
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="p-xl-5 bg-white rounded-lg shadow-lg mw-50 w-50 rounded-2">
          <h1 className="fs-lg fw-bold mb-5 text-center text-muted">Error</h1>
          <p className="fs-4 fw-bold text-center text-danger">
            Failed to load urls
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-vh-100 d-flex flex-col align-items-center justify-content-center bg-light">
      <div className="p-lg-2 bg-white rounded-lg shadow-lg mw-40n w-100">
        <h1 className="fs-4 fw-bold mb-5 text-center text-muted">
          All short Urls
        </h1>
        <div className="overflow-auto">
          <table className="table table-striped w-100">
            <thead>
              <tr>
                <th>Original URL</th>
                <th>Short URL</th>
              </tr>
            </thead>
            <tbody>
              {urls.map((url) => {
                return (
                  <tr key={url._id}>
                    <td>{url.originalUrl}</td>
                    <td>
                      <a
                        href={`/${url.shortUrl}`}
                        target="_blank"
                        className="link link-primary"
                      >
                        `${process.env.NEXT_PUBLIC_BASE_URL}/${url.shortUrl}`
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
