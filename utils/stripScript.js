export function stripScript(text) {
  var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  while (SCRIPT_REGEX.test(text)) {
    text = text.replace(SCRIPT_REGEX, "");
  }
  return text;
}
