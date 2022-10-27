/*
 * Normally, one would use DOMContentLoaded, but I want to be sure both the css and my face have been loaded before the "animation" gets triggered.
 * */
addEventListener('load', (event) => {
  if (!document.body.classList.contains('js-disabled')) {
    document.body.classList.add('js-animate');
  }
});
