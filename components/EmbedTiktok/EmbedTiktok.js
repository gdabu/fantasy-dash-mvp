import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import { stripScript } from "../../utils/stripScript";

/**
 * EmbedTiktok
 *
 * Using @param url to render Tiktok embed is deprecated. Was inconsistent, and caused issues.
 * Use @param markup instead.
 *
 * TODO: go into contentful and update all Tiktok Embeds that are using url instead of markup
 *
 * @param url
 * @param markup
 * @returns
 */
export default function EmbedTiktok({ url, markup }) {
  /**
   * Logic needed to render tiktok using @param url
   *
   * TODO: once we update all tiktok embeds in contentful to use markup we can remove this url logic
   */
  const [tiktokHTMLFromUrl, setTiktokHTMLFromUrl] = useState("<span></span>");

  const ref = useRef();
  const isVisible = useOnScreen(ref, "500px");
  const [scriptExecutedOnVisible, setScriptExecutedOnVisible] = useState(false);
  const tiktokScript = "https://www.tiktok.com/embed.js";

  url = url && url.trim();

  useEffect(async () => {
    const response = await axios(
      `https://www.tiktok.com/oembed?url=${url}`
    ).catch((error) => {
      console.log(error);
    });

    setTiktokHTMLFromUrl(response.data.html || "<span/>");
  }, []);

  // Lazy load the script into the tiktok embed snippet
  // We lazy load this script instead of relying on tiktok
  // embed script in the snippet because the snippet doesnt
  // always load.
  useEffect(() => {
    // useOnScreen hook uses an Intersection Observer to monitor if this
    // element is on screen. return if its not.

    if (!isVisible) return;
    if (scriptExecutedOnVisible) return; // if script was already loaded return

    const url1Element = document.body.querySelector(
      `script[src='https://www.tiktok.com/embed.js']`
    );

    // return if element already contains tiktok script
    if (url1Element) return;

    const scriptTag = document.createElement("script");
    scriptTag.src = tiktokScript;
    scriptTag.async = true;
    scriptTag.addEventListener("load", () => {
      setScriptExecutedOnVisible(true);
    });
    document.body.appendChild(scriptTag);
  }, [isVisible]);

  // cleanMarkup is only used for rendering tiktok using @param markup
  const cleanMarkup = stripScript(markup);

  return (
    <div ref={ref}>
      <div
        className="embed--Tiktok"
        dangerouslySetInnerHTML={{
          __html: stripScript(markup || tiktokHTMLFromUrl),
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: `    <div style="max-width: 56vh;"><iframe
            src="https://www.tiktok.com/embed/6808679698583850246"
            style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;"
            allowfullscreen
            scrolling="no"
            allow="encrypted-media;"
          ></iframe></div>`,
        }}
      ></div>
    </div>
  );
}
{
  /* <div style={{ "max-width": "56vh" }}>
  <div
    style={{
      left: 0,
      width: "100%",
      height: 0,
      position: "relative",
      "padding-bottom": "177.7778%",
      "padding-top": "120px",
    }}
  >
    <iframe
      src={"https://www.tiktok.com/em/7065348976400157957"}
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        border: "0",
      }}
      allowfullscreen
      scrolling="no"
      allow="encrypted-media;"
    ></iframe>
  </div>
</div>; */
}
