(function(){"use strict";var t={3921:function(t,e,n){var r=n(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header"),e("router-view")],1)},i=[],a=function(){var t=this,e=t._self._c;return e("div",[e("nav",[t._m(0),e("Navbar")],1)])},u=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title-wrapper"},[e("div",{staticClass:"title-quotes"},[e("div",{staticClass:"title"},[e("cite",{staticClass:"title-cite"},[t._v("Если я цитирую других, то лишь для того, чтобы лучше выразить свою собственную мысль")]),e("span",{staticClass:"autor"},[e("cite",[t._v("- Мишель Монтень")])])])])])}],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"links"},[e("router-link",{staticClass:"btn-left",attrs:{to:"/"}},[t._v("Главная")]),e("router-link",{staticClass:"btn-center",attrs:{to:"/Cite-generator"}},[t._v("Случайная цитата")]),e("router-link",{staticClass:"btn-right",attrs:{to:"/Authors-filter"}},[t._v("По авторам")])],1)},c=[],l=n(1001),f={},d=(0,l.Z)(f,s,c,!1,null,"1aea8832",null),v=d.exports,p={components:{Navbar:v}},h=p,m=(0,l.Z)(h,a,u,!1,null,"6d2810c4",null),b=m.exports,g={components:{Header:b}},y=g,_=(0,l.Z)(y,o,i,!1,null,"46547736",null),C=_.exports,w=n(2631),k=function(){var t=this;t._self._c;return t._m(0)},O=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{staticClass:"content-box"},[e("h3",[t._v("Это сайт с цитатами на каждый день")]),e("p",{staticClass:"text"},[t._v("Тут ты можешь искать вдохновение, мотивацию да и просто умные мысли, выраженные в лаконичной форме")]),e("p",[t._v("Приятного серфинга!")])])])}],P={},j=(0,l.Z)(P,k,O,!1,null,"e14c222c",null),A=j.exports;r.ZP.use(w.ZP);const Z=[{path:"/",name:"home",component:A},{path:"*",component:()=>n.e(52).then(n.bind(n,8493))},{path:"/Cite-generator",name:"Cite-generator",component:()=>n.e(53).then(n.bind(n,9053))},{path:"/Authors-filter",name:"Authors-filter",component:()=>n.e(405).then(n.bind(n,3405))}],x=new w.ZP({mode:"history",base:"/cite-for-every-day/",routes:Z});var E=x,S=n(3822);r.ZP.use(S.ZP);var T=new S.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});r.ZP.config.productionTip=!1,new r.ZP({router:E,store:T,render:t=>t(C)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{52:"8108ad35",53:"9e51fa73",405:"aa72ea97"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{53:"581cc8c7",405:"a6bebd20"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="cite-for-every-day:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+i),u.src=r),t[r]=[o];var d=function(e,n){u.onerror=u.onload=null,clearTimeout(v);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/cite-for-every-day/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=i,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(e(a,u))return o();t(r,u,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={53:1,405:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),u=new Error,s=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],u=r[1],s=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(e&&e(r);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkcite_for_every_day"]=self["webpackChunkcite_for_every_day"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3921)}));r=n.O(r)})();
//# sourceMappingURL=app.2e954434.js.map