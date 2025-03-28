// This bit of logic was being used in several places, and that's silly.
// Especially when it turns out it's a little more complex than I thought it
// was, and resulted in these issues:
//
// https://github.com/gsa-tts/handbook/issues/3615
// https://github.com/gsa-tts/handbook/issues/3623
// https://github.com/gsa-tts/handbook/issues/3630

if (!process.env.BASEURL) {
  // If the BASEURL set is falsey, then our actual baseurl is the root.
  module.exports = "/";
  // If the BASEURL is set but it's a string of just whitespace, we want to use
  // the root for that too.
} else if (process.env.BASEURL.trim().length === 0) {
  module.exports = "/";
} else {
  // But if the BASEURL is set to a real value, then that's our base.
  module.exports = process.env.BASEURL;
}
