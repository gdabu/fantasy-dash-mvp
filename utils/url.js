import { appendSingleChar } from "./string";

// adds a trailing slash to all internal links
export function addTrailingSlashToAllInternalLinks() {
  document.querySelectorAll(`a`).forEach(function (anchor) {
    if (!anchor.href) {
      return;
    }

    let url = new URL(anchor.href);

    if (url.search) {
      return;
    }

    const isInternal =
      url.host === window.location.host || url.host === "later.com";

    // exclude anchorlinks
    if (isInternal && anchor.href.split("/")?.slice(-1)[0]?.startsWith("#")) {
      return;
    }

    if (isInternal) {
      anchor.href = appendSingleChar(anchor.href, "/");
    }
  });
}
