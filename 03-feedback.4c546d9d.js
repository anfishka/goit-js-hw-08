!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var o=e(n("eaxEB"))((function(){var e={email:document.querySelector('input[name="email"]').value,message:document.querySelector('textarea[name="message"]').value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);window.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e),a=t.email,r=t.message;document.querySelector('input[name="email"]').value=a,document.querySelector('textarea[name="message"]').value=r}})),document.querySelectorAll(".feedback-form input, .feedback-form textarea").forEach((function(e){e.addEventListener("input",(function(){o()}))})),document.querySelector(".feedback-form").addEventListener("submit",(function(e){e.preventDefault();var t={email:document.querySelector('input[name="email"]').value,message:document.querySelector('textarea[name="message"]').value};console.log(t),document.querySelector(".feedback-form").reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.4c546d9d.js.map