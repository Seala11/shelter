(()=>{var e,t,n,r,a={463:(e,t,n)=>{"use strict";n.r(t)},214:()=>{document.querySelector(".donation__card").addEventListener("click",(e=>{e.preventDefault()}))},260:()=>{const e=document.querySelector(".navbar__toggle"),t=document.querySelector(".list"),n=document.querySelector(".logo"),r=document.querySelector(".header--pets"),a=document.querySelector(".overlay"),i=t.getAttribute("data-page"),s=()=>{const n=t.getAttribute("data-visible");"false"===n?(t.setAttribute("data-visible",!0),e.setAttribute("aria-expended",!0),o(n),l(),c(i),d(i)):(t.setAttribute("data-visible",!1),e.setAttribute("aria-expended",!1),o(n),l(),c(i),d(i))},o=t=>{"false"===t?(e.classList.contains("hamburger--toggle-right")&&e.classList.remove("hamburger--toggle-right"),e.classList.add("hamburger--toggle-left")):(e.classList.remove("hamburger--toggle-left"),e.classList.add("hamburger--toggle-right"))},l=()=>{n.classList.toggle("logo--transform")},c=()=>{document.documentElement.classList.toggle("prevent-scroll")},d=e=>{a.classList.toggle("overlay--darken"),"pets"===e&&r.classList.toggle("header--darken")};e.addEventListener("click",s),t.addEventListener("click",(t=>{let n=e.getAttribute("aria-expended"),r=t.target.classList.contains("link--active");return"main"===i&&r?(t.preventDefault(),void("true"===n&&s())):"main"!==i||r?"pets"===i&&r?(t.preventDefault(),"true"===n&&s(),document.body.scrollTop=0,void(document.documentElement.scrollTop=0)):void("pets"!==i||r||t.target.classList.contains("link")&&"true"===n&&(s(),document.body.scrollTop=0,document.documentElement.scrollTop=0)):void(t.target.classList.contains("link")&&"true"===n&&s())})),a.addEventListener("click",s),n.addEventListener("click",(t=>{if("main"!==i)return;let n=document.body.clientWidth,r=e.getAttribute("aria-expended");if(!("false"===r||n>766))return"true"===r?(t.preventDefault(),void s()):void 0;t.preventDefault()}))},58:(e,t,n)=>{const r=document.querySelector(".pets"),a=document.querySelector(".overlay-pets");let i,s;const o=async e=>{let t;return await n.e(405).then(n.t.bind(n,405,19)).then((({default:n})=>{for(let r=0;r<n.length;r++)if(n[r].name&&n[r].name===e){t=n[r];break}})),t},l=e=>{r.removeChild(e),c(),document.body.style.overflowY="scroll",e=null},c=()=>{a.classList.toggle("overlay--darken-card"),a.addEventListener("mouseenter",(()=>{s.classList.add("hover")})),a.addEventListener("mouseout",(()=>{s.classList.remove("hover")}))};r.addEventListener("click",(e=>{if(e.target.classList.contains("card")||e.target.parentElement.classList.contains("card")){(async e=>{let t=await o(e),n=document.createElement("div"),a=document.createElement("button"),d=document.createElement("div");n.className="modal",n.style.backgroundImage=`url('${t.img}')`,d.className="modal__content",d.innerHTML=`\n  <h3 class="modal__title">${t.name}</h3>\n  <h4 class="modal__subtitle">${t.type} - ${t.breed}</h4>\n  <h5 class="modal__desc">${t.description}</h5>\n  <ul class="modal__list">\n  <li class="modal__item"><h5 class="modal__item-desc"><span class="modal__desc--bold">Age: </span>${t.age}</h5></li>\n  <li class="modal__item"><h5 class="modal__item-desc"><span class="modal__desc--bold">Inoculations: </span>${t.inoculations}</h5></li>\n  <li class="modal__item"><h5 class="modal__item-desc"><span class="modal__desc--bold">Diseases: </span>${t.diseases}</h5></li>\n  <li class="modal__item"><h5 class="modal__item-desc"><span class="modal__desc--bold">Parasites: </span>${t.parasites}</h5></li>\n  </ul>\n  `,a.className="button button__round button__modal",a.addEventListener("click",(()=>l(i))),n.appendChild(d),n.appendChild(a),r.appendChild(n),i=n,s=a,c(),document.body.style.overflowY="hidden"})(e.target.id||e.target.parentElement.id)}})),a.addEventListener("click",(()=>l(i)))}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return a[e](n,n.exports,s),n.exports}s.m=a,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var a=Object.create(null);s.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var o=2&r&&n;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,s.d(a,i),a},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,n)=>(s.f[n](e,t),t)),[])),s.u=e=>e+".ba7b2c14318ba12d3ecd.js",s.miniCssF=e=>{},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},r="shelter:",s.l=(e,t,a,i)=>{if(n[e])n[e].push(t);else{var o,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+a){o=u;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",r+a),o.src=e),n[e]=[t];var m=(t,r)=>{o.onerror=o.onload=null,clearTimeout(p);var a=n[e];if(delete n[e],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(r))),t)return t(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),l&&document.head.appendChild(o)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={826:0};s.f.j=(t,n)=>{var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((n,a)=>r=e[t]=[n,a]));n.push(r[2]=a);var i=s.p+s.u(t),o=new Error;s.l(i,(n=>{if(s.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",o.name="ChunkLoadError",o.type=a,o.request=i,r[1](o)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,a,[i,o,l]=n,c=0;if(i.some((t=>0!==e[t]))){for(r in o)s.o(o,r)&&(s.m[r]=o[r]);l&&l(s)}for(t&&t(n);c<i.length;c++)a=i[c],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=self.webpackChunkshelter=self.webpackChunkshelter||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";s(214),s(260),s(58);const e=document.querySelector(".pets");let t;const n=()=>{let n=e.getAttribute("data-section"),r=document.body.clientWidth;return r>1278&&(t="slider"===n?3:8),r<=1278&&r>766&&(t="slider"===n?2:6),r<=766&&(t="slider"===n?1:3),t};n();const r=async(e=8)=>(await(async()=>{let e=await(async()=>{let e;return await s.e(405).then(s.t.bind(s,405,19)).then((({default:t})=>{e=t})),e})(),t=[];return e.forEach((e=>{let n=document.createElement("div");n.className="slider__cards card",n.id=e.name;let r=document.createElement("div");r.className="card__image",r.style.backgroundImage=`url(${e.img})`,n.appendChild(r);let a=document.createElement("span");a.className="card__name",a.innerHTML=`${e.name}`,n.appendChild(a);let i=document.createElement("button");i.className="button button__primary button__primary--card",i.innerHTML="Learn more",n.appendChild(i),t.push(n)})),t})()).sort((()=>Math.random()-.5)).slice(0,e),a=document.querySelector(".slider__items--active"),i=document.querySelector(".slider__items--left"),o=document.querySelector(".slider__items--right");let l=[];const c=async e=>{let t=await r(e);a.innerHTML="",l=[];for(let n=0;n<e;n++)l.push(t[n].id),a.appendChild(t[n]);d(e)},d=async e=>{let t=await r(),n=l;l=[];let a=[];for(let r=0;r<t.length&&(n.includes(t[r].id)||(a.push(t[r]),l.push(t[r].id)),a.length!==e);r++);i.innerHTML="",o.innerHTML="";for(let t=0;t<e;t++){let e=a[t],n=e.cloneNode(!0);i.appendChild(e),o.appendChild(n)}};c(t),window.addEventListener("resize",(()=>{let e=document.body.clientWidth;if(e>1278&&3!==t||e<=1278&&e>766&&2!==t||e<=766&&1!==t){let e=n();c(e)}}));const u=document.querySelector(".slider"),m=document.querySelector(".button__round--left"),p=document.querySelector(".button__round--right"),h=document.querySelector(".slider__items--left"),g=document.querySelector(".slider__items--right"),v=()=>{let e=window.innerWidth,t=b(e);u.classList.add(`transition-left-${t}`),m.removeEventListener("click",v),p.removeEventListener("click",f)},f=()=>{let e=window.innerWidth,t=b(e);u.classList.add(`transition-right-${t}`),m.removeEventListener("click",v),p.removeEventListener("click",f)},b=e=>{let t;return e>1278?t=3:e>766&&e<=1278?t=2:e<=766&&(t=1),t};m.addEventListener("click",v),p.addEventListener("click",f),u.addEventListener("animationend",(e=>{"transition-right-3"!==e.animationName&&"transition-right-2"!==e.animationName&&"transition-right-1"!==e.animationName||(u.classList.remove("transition-right-3"),u.classList.remove("transition-right-2"),u.classList.remove("transition-right-1"),document.querySelector(".slider__items--active").innerHTML=g.innerHTML),"transition-left-3"!==e.animationName&&"transition-left-2"!==e.animationName&&"transition-left-1"!==e.animationName||(u.classList.remove("transition-left-3"),u.classList.remove("transition-left-2"),u.classList.remove("transition-left-1"),document.querySelector(".slider__items--active").innerHTML=h.innerHTML),d(t),m.addEventListener("click",v),p.addEventListener("click",f)})),s(463)})()})();