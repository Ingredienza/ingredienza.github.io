webpackJsonp([0x67ef26645b2a],{132:function(e,t){e.exports={layoutContext:{}}},271:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=n(1),r=a(u),o=n(277),c=a(o),f=n(132),s=a(f);t.default=function(e){return r.default.createElement(c.default,l({},e,s.default))},e.exports=t.default},31:function(e,t,n){var a,l;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a))e.push(n.apply(null,a));else if("object"===l)for(var r in a)u.call(a,r)&&a[r]&&e.push(r)}}return e.join(" ")}var u={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(a=[],l=function(){return n}.apply(t,a),!(void 0!==l&&(e.exports=l)))}()},52:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),u=a(l),r=n(17),o=(a(r),n(168)),c=a(o),f=n(125),s=a(f),d=function(){return u.default.createElement("footer",{className:s.default.footer},u.default.createElement("img",{src:c.default,alt:"Ingredienza Logo"}))};t.default=d,e.exports=t.default},168:function(e,t,n){e.exports=n.p+"static/logo.14f3c744.png"},100:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),u=a(l),r=n(17),o=(a(r),n(126)),c=a(o),f=n(29),s=n(31),d=a(s),i=n(53),v=(a(i),function(e){var t,n,a,l,r=e.toggleNav,o=e.showNav;return u.default.createElement("header",null,u.default.createElement("div",{className:(0,d.default)((t={},t[""+c.default.toggle]=!0,t)),onClick:r},u.default.createElement("div",{className:(0,d.default)((n={},n[""+c.default.bar]=!0,n[""+c.default.active]=o,n))}),u.default.createElement("div",{className:(0,d.default)((a={},a[""+c.default.bar]=!0,a[""+c.default.active]=o,a))}),u.default.createElement("div",{className:(0,d.default)((l={},l[""+c.default.bar]=!0,l[""+c.default.active]=o,l))})))}),m=function(e){return{toggleNav:function(){return e({type:"TOGGLE_NAV"})}}},p=function(e){var t=e.showNav;return{showNav:t}},g=(0,f.connect)(p,m)(v);t.default=g,e.exports=t.default},53:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),u=a(l),r=n(17),o=a(r),c=n(29),f=n(31),s=a(f),d=n(52),i=(a(d),n(127)),v=a(i),m=function(e){return u.default.createElement("li",{style:{fontSize:"40px",fontWeight:"300"}},u.default.createElement(o.default,{to:e.to,onClick:e.toggleNav},e.children))},p=function(e){var t,n=e.showNav,a=e.toggleNav,l=e.links;return u.default.createElement("nav",{className:(0,s.default)((t={},t[""+v.default.active]=n,t))},u.default.createElement("ul",null,l.map(function(e){return u.default.createElement(m,{to:e.to,toggleNav:a},e.text)})))},g=function(e){var t=e.showNav;return{showNav:t}},y=function(e){return{toggleNav:function(){return e({type:"TOGGLE_NAV"})}}},x=(0,c.connect)(g,y)(p);t.default=x,e.exports=t.default},277:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),u=a(l),r=n(7),o=a(r),c=n(9),f=(a(c),n(29)),s=n(31),d=a(s),i=n(100),v=a(i),m=n(52),p=a(m),g=n(53),y=a(g),x=n(385),N=a(x),h=function(e){var t,n=e.children,a=e.lockScreen;return u.default.createElement("div",{className:(0,d.default)((t={},t[""+N.default.container]=!0,t[""+N.default.locked]=a,t))},u.default.createElement(v.default,null),u.default.createElement(y.default,{links:[{to:"/",text:"Home"},{to:"/places",text:"Standorte"},{to:"/products/",text:"Produkte"},{to:"/pricelist/",text:"Preisliste"},{to:"/terms",text:"Konditionen"},{to:"/contact",text:"Kontakt"}]}),u.default.createElement("main",{className:N.default.content},n()),u.default.createElement(p.default,null))};h.propTypes={children:o.default.func,lockScreen:o.default.bool};var _=function(e){var t=e.showNav;return{lockScreen:t}},E=(0,f.connect)(_,{})(h);t.default=E,e.exports=t.default},125:function(e,t){e.exports={footer:"src-styles----footer-module---footer---cs6wc"}},126:function(e,t){e.exports={toggle:"src-styles----header-module---toggle---Cp8FO",bar:"src-styles----header-module---bar---3eI5X",active:"src-styles----header-module---active---glDgB"}},385:function(e,t){e.exports={container:"src-styles----layout-module---container---1sCSw",content:"src-styles----layout-module---content---3B0uJ",locked:"src-styles----layout-module---locked---2B56H"}},127:function(e,t){e.exports={active:"src-styles----navigation-module---active---2my2e","current-menu-item":"src-styles----navigation-module---current-menu-item---39E0b"}}});
//# sourceMappingURL=component---src-layouts-index-js-8d361c6e7eab969eeb08.js.map