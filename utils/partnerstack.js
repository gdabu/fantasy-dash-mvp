import { getCookie, setCookie } from "./cookies";

export function setPartnerStackLink() {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    // Script to pass PartnerStack url params to later web app sign up page.
    //  - Currently only works for desktop web sign up flow since mobile CTAs
    //    don't direct users to web app sign up page (instead are presented
    //    with convertflow email list signup).

    var search = window.location.search;

    // get param values from cookies
    let gspk = getCookie("gspk");
    let gsxid = getCookie("gsxid");

    if (search.indexOf("gspk=") !== -1 && search.indexOf("gsxid=") !== -1) {
      const urlParams = new URLSearchParams(search);

      // url param values for gspk and gsxid are prioritized over cookie values
      gspk = urlParams.get("gspk");
      gsxid = urlParams.get("gsxid");

      setCookie("gspk", gspk, 1);
      setCookie("gsxid", gsxid, 1);
    }

    if (gspk && gsxid) {
      document
        .querySelectorAll('a[href="https://app.later.com/user/signup"]')
        .forEach(function (anchor) {
          anchor.href += `?gspk=${gspk}&gsxid=${gsxid}`;
        });
    }
  }
}
