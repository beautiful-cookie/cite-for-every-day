(function(){"use strict";var t={7374:function(t,e,n){var r=n(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header"),e("router-view")],1)},i=[],u=function(){var t=this,e=t._self._c;return e("div",[e("nav",[t._m(0),e("Navbar")],1)])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title-wrapper"},[e("div",{staticClass:"title-quotes"},[e("div",{staticClass:"title"},[e("cite",{staticClass:"title-cite"},[t._v("Если я цитирую других, то лишь для того, чтобы лучше выразить свою собственную мысль")]),e("span",{staticClass:"autor"},[e("cite",[t._v("- Мишель Монтень")])])])])])}],c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"links"},[e("router-link",{attrs:{to:"/"}},[t._v("Главная")]),e("router-link",{attrs:{to:"/Cite-generator"}},[t._v("Случайная цитата")]),e("router-link",{attrs:{to:"/Authors-filter"}},[t._v("По авторам")])],1)},s=[],f=n(1001),l={},d=(0,f.Z)(l,c,s,!1,null,"7cec4820",null),v=d.exports,p={components:{Navbar:v}},h=p,m=(0,f.Z)(h,u,a,!1,null,"6d2810c4",null),b=m.exports,g={components:{Header:b}},y=g,_=(0,f.Z)(y,o,i,!1,null,"186e11da",null),C=_.exports,w=n(2631),k=function(){var t=this;t._self._c;return t._m(0)},O=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{staticClass:"content-box"},[e("h3",[t._v("Это сайт с цитатами на каждый день")]),e("p",{staticClass:"text"},[t._v("Тут ты можешь искать вдохновение, мотивацию да и просто умные мысли, выраженные в лаконичной форме")]),e("p",[t._v("Приятного серфинга!")])])])}],P={},j=(0,f.Z)(P,k,O,!1,null,"9bf1a288",null),A=j.exports;r.ZP.use(w.ZP);const Z=[{path:"/",name:"home",component:A},{path:"/Cite-generator",name:"Cite-generator",component:()=>n.e(404).then(n.bind(n,4404))},{path:"/Authors-filter",name:"Authors-filter",component:()=>n.e(526).then(n.bind(n,4526))}],x=new w.ZP({mode:"history",base:"/cite-for-every-day/",routes:Z});var E=x,S=n(3822);r.ZP.use(S.ZP);var T=new S.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});r.ZP.config.productionTip=!1,new r.ZP({router:E,store:T,render:t=>t(C)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var u=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],i=t[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){t.splice(f--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{404:"4a63f414",526:"3fcc7c35"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{404:"5c62e275",526:"b7adb988"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="cite-for-every-day:";n.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=r),t[r]=[o];var d=function(e,n){a.onerror=a.onload=null,clearTimeout(v);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/cite-for-every-day/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(e(u,a))return o();t(r,a,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={404:1,526:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(e),a=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var f=c(n)}for(e&&e(r);s<u.length;s++)i=u[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(f)},r=self["webpackChunkcite_for_every_day"]=self["webpackChunkcite_for_every_day"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7374)}));r=n.O(r)})();
//# sourceMappingURL=app.199bae47.js.map