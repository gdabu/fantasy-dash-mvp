import { setCookie } from "./cookies";

export function injectScript(scriptUrl) {
  const scriptExists = document.querySelector(`script[src='${scriptUrl}']`);

  if (!scriptExists) {
    const script = document.createElement("script");
    script.src = scriptUrl;
    document.head.appendChild(script);
  }
}

export function reInjectScript(scriptUrl) {
  const scriptExists = document.querySelector(`script[src='${scriptUrl}']`);
  if (scriptExists) {
    scriptExists.remove();
  }

  injectScript(scriptUrl);
}

export function toggleVisibility(id, showDisplay = "block") {
  const e = document.getElementById(id);
  if (e.style.display === showDisplay) e.style.display = "none";
  else e.style.display = showDisplay;
}

const forEachInNodeList = function (array, callback, scope) {
  for (let i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

function notSignedInHandler() {
  forEachInNodeList(
    document.querySelectorAll(".u--show--signedIn"),
    (index, value) => {
      value.style.display = "none";
    }
  );
  setCookie("loggedIn", false, 1);
}

export function setSignedIn() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://app.later.com/api/v2/users/me.json");
  xhr.withCredentials = true;
  xhr.dataType = "json";
  xhr.onload = function () {
    // rewrite signed in logic for buttons. reusing legacy button logic and its way too confusing.
    if (xhr.status === 200) {
      forEachInNodeList(
        document.querySelectorAll(".u--hide--signedIn"),
        (index, value) => {
          value.style.display = "none";
        }
      );

      forEachInNodeList(
        document.querySelectorAll(".u--show--signedIn"),
        (index, value) => {
          value.style.display = "inline-block";
        }
      );

      forEachInNodeList(
        document.querySelectorAll(".eP--nav__displayname"),
        (index, value) => {
          value.innerHTML = JSON.parse(xhr.responseText).user.name;
        }
      );

      setCookie("loggedIn", true, 1);
    } else {
      notSignedInHandler();
    }
  };
  xhr.addEventListener("error", notSignedInHandler);
  xhr.send();
}
