/*
 * Toggle focusability of specified elements
 * -----------------------------------------
 * Note: attempt to copy functionality of inert attribute
 * Source: https://bit.ly/3paRHkt
 *
 * @param on [boolean]
 * @param items [array] of [HTMLElement]
 */

const toggleFocusability = (on = true, items = []) => {
  if (!items.length) return;

  const formTags = ["BUTTON", "INPUT", "SELECT", "TEXTAREA"];

  items.forEach((item) => {
    if (on) {
      if (item.hasAttribute("data-context-inert-aria-hidden")) {
        item.setAttribute(
          "aria-hidden",
          item.getAttribute("data-context-inert-aria-hidden")
        );
        item.removeAttribute("data-context-inert-aria-hidden");
      }

      if (item.hasAttribute("data-context-inert-tabindex")) {
        item.setAttribute(
          "tabindex",
          item.getAttribute("data-context-inert-tabindex")
        );
        item.removeAttribute("data-context-inert-tabindex");
      }

      if (item.hasAttribute("data-context-inert-href")) {
        item.setAttribute("href", item.getAttribute("data-context-inert-href"));
        item.removeAttribute("data-context-inert-href");
      }

      if (formTags.indexOf(item.tagName) !== -1) {
        if (item.hasAttribute("data-context-inert-disabled")) {
          const v = item.getAttribute("data-context-inert-disabled");
          item.disabled = v === "true";
        }
      }
    } else {
      let ariaHiddenValue = item.getAttribute("aria-hidden");

      if (!ariaHiddenValue) ariaHiddenValue = false;

      item.setAttribute("data-context-inert-aria-hidden", ariaHiddenValue);
      item.setAttribute("aria-hidden", true);

      if (item.hasAttribute("tabindex")) {
        item.setAttribute(
          "data-context-inert-tabindex",
          item.getAttribute("tabindex")
        );
        item.removeAttribute("tabindex");
      }

      if (item.hasAttribute("href")) {
        item.setAttribute("data-context-inert-href", item.getAttribute("href"));
        item.removeAttribute("href");
      }

      if (formTags.indexOf(item.tagName) !== -1) {
        item.setAttribute("data-context-inert-disabled", item.disabled);
        item.disabled = true;
      }
    }
  });
};

/*
 * Selector string to get focusable items
 */

const focusSelector = "a, area, input, select, textarea, button, [tabindex], [data-context-inert-tabindex], iframe";

/*
 * Get focusable elements outside of specified element
 * ---------------------------------------------------
 * @param el [HTMLElement]
 * @return array of [HTMLElement]
 */

const getFocusableItems = (el = null) => {
  let items = [];

  const focusableItems = Array.from(
    el.querySelectorAll(focusSelector)
  );

  const domFocusableItems = Array.from(
    document.querySelectorAll(focusSelector)
  );

  if (focusableItems.length) {
    items = domFocusableItems.filter((item) => {
      if (item.id === "gatsby-focus-wrapper") return false;
      if (!focusableItems.includes(item)) return true;

      return false;
    });
  } else {
    items = domFocusableItems;
  }

  return items;
};

export { toggleFocusability, focusSelector, getFocusableItems };
