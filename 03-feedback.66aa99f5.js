var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,f=a||u||Function("return this")(),l=Object.prototype.toString,c=Math.max,s=Math.min,v=function(){return f.Date.now()};function m(e,t,n){var o,r,i,a,u,f,l=0,m=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function j(e){return l=e,u=setTimeout(h,t),m?g(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||b&&e-l>=i}function h(){var e=v();if(S(e))return O(e);u=setTimeout(h,function(e){var n=t-(e-f);return b?s(n,i-(e-l)):n}(e))}function O(e){return u=void 0,y&&o?g(e):(o=r=void 0,a)}function T(){var e=v(),n=S(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(b)return u=setTimeout(h,t),g(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=p(t)||0,d(n)&&(m=!!n.leading,i=(b="maxWait"in n)?c(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},T.flush=function(){return void 0===u?a:O(v())},T}function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(d(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=d(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var u=o.test(e);return u||r.test(e)?i(e.slice(2),u?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form"),y=b.querySelector('[name="email"]'),g=b.querySelector('[name="message"]'),j=_.throttle((()=>{const e={email:y.value,message:g.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);b.addEventListener("input",j);const S=JSON.parse(localStorage.getItem("feedback-form-state"));S&&(y.value=S.email,g.value=S.message),b.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:y.value,message:g.value}),localStorage.removeItem("feedback-form-state"),y.value="",g.value=""}));
//# sourceMappingURL=03-feedback.66aa99f5.js.map