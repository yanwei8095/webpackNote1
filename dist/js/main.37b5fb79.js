!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/",t(t.s=15)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),a=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([r]).join("\n")}var i,c,u;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);o&&r[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),e.push(u))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function c(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function u(n,e){for(var t={},o=[],r=0;r<n.length;r++){var a=n[r],u=e.base?a[0]+e.base:a[0],A=t[u]||0,s="".concat(u," ").concat(A);t[u]=A+1;var f=c(s),l={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(l)):i.push({identifier:s,updater:m(l,e),references:1}),o.push(s)}return o}function A(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var s,f=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function l(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=f(e,r);else{var a=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function d(n,e,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var p=null,g=0;function m(n,e){var t,o,r;if(e.singleton){var a=g++;t=p||(p=A(e)),o=l.bind(null,t,a,!1),r=l.bind(null,t,a,!0)}else t=A(e),o=d.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=c(t[o]);i[r].references--}for(var a=u(n,e),A=0;A<t.length;A++){var s=c(t[A]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=a}}}},function(n){n.exports=JSON.parse('{"name":"jack","age":18}')},function(n,e,t){var o=t(2),r=t(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);n.exports=r.locals||{}},function(n,e,t){var o=t(0),r=t(6),a=t(1),i=t(11);(e=o(!1)).i(r);var c=a(i);e.push([n.i,"* {\n  padding: 0;\n  margin: 0;\n}\n.box {\n  width: 500px;\n  height: 400px;\n  background: orange;\n  background-image: url("+c+");\n  background-repeat: no-repeat;\n  background-position: 20% 20%;\n}\n.box .inner {\n  width: 300px;\n  height: 300px;\n  border: 1px solid;\n}\n",""]),n.exports=e},function(n,e,t){var o=t(0),r=t(1),a=t(7),i=t(8),c=t(9),u=t(10);e=o(!1);var A=r(a),s=r(a,{hash:"#iefix"}),f=r(i),l=r(c),d=r(u,{hash:"#iconfont"});e.push([n.i,'@font-face {\n  font-family: "iconfont";\n  src: url('+A+");\n  /* IE9 */\n  src: url("+s+") format('embedded-opentype'),\n    \n    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),\n    url("+f+") format('woff'),\n    url("+l+") format('truetype'),\n    \n    url("+d+') format(\'svg\');\n  /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family: "iconfont" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-OAxitong:before {\n  content: "\\e6ba";\n}\n\n.icon-kaoqinguanli:before {\n  content: "\\e6bb";\n}\n\n.icon-xiangmuguanli:before {\n  content: "\\e6bd";\n}\n\n.icon-gongzuohuibao:before {\n  content: "\\e6bf";\n}',""]),n.exports=e},function(n,e,t){"use strict";t.r(e),e.default=t.p+"media/iconfont.7e2d0784.eot"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"media/iconfont.ae5f4b04.woff"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"media/iconfont.c3be8cb3.ttf"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"media/iconfont.6740a656.svg"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"image/1.5960bf19.jpg"},function(n,e,t){var o=t(2),r=t(13);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);n.exports=r.locals||{}},function(n,e,t){var o=t(0),r=t(1),a=t(14);e=o(!1);var i=r(a);e.push([n.i,"* {\n  padding: 0;\n  margin: 0;\n}\nbody {\n  width: 800px;\n  height: 800px;\n  background: rgba(212, 119, 119, 0.411);\n  display: flex;\n}\nbody .inner {\n  border: 1px solid;\n  background-image: url("+i+");\n  background-repeat: no-repeat;\n  background-position: 30% 20%;\n}\n",""]),n.exports=e},function(n,e,t){"use strict";t.r(e),e.default="data:image/jpeg;base64,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"},function(n,e,t){"use strict";t.r(e);var o=function(n,e){return n+e};var r=t(3);t(4),t(12);console.log(o(5,4)),console.log(function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.reduce((function(n,e){return n+e}),0)}(1,2,3,4,5)),console.log(2*3),console.log("yanwei",18),console.log(r)}]);