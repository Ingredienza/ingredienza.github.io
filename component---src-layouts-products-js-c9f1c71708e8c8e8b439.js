webpackJsonp([0xa550611d67e2],{134:function(e,t){e.exports={layoutContext:{}}},273:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(1),u=a(o),r=n(279),c=a(r),s=n(134),d=a(s);t.default=function(e){return u.default.createElement(c.default,l({},e,d.default))},e.exports=t.default},31:function(e,t,n){var a,l;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a))e.push(n.apply(null,a));else if("object"===l)for(var u in a)o.call(a,u)&&a[u]&&e.push(u)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(a=[],l=function(){return n}.apply(t,a),!(void 0!==l&&(e.exports=l)))}()},52:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),o=a(l),u=n(17),r=(a(u),n(169)),c=a(r),s=n(125),d=a(s),f=function(){return o.default.createElement("footer",{className:d.default.footer},o.default.createElement("img",{src:c.default,alt:"Ingredienza Logo"}))};t.default=f,e.exports=t.default},169:function(e,t,n){e.exports=n.p+"static/logo.14f3c744.png"},100:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),o=a(l),u=n(17),r=(a(u),n(126)),c=a(r),s=n(29),d=n(31),f=a(d),i=n(53),p=(a(i),function(e){var t,n,a,l,u=e.toggleNav,r=e.showNav;return o.default.createElement("header",null,o.default.createElement("div",{className:(0,f.default)((t={},t[""+c.default.toggle]=!0,t)),onClick:u},o.default.createElement("div",{className:(0,f.default)((n={},n[""+c.default.bar]=!0,n[""+c.default.active]=r,n))}),o.default.createElement("div",{className:(0,f.default)((a={},a[""+c.default.bar]=!0,a[""+c.default.active]=r,a))}),o.default.createElement("div",{className:(0,f.default)((l={},l[""+c.default.bar]=!0,l[""+c.default.active]=r,l))})))}),m=function(e){return{toggleNav:function(){return e({type:"TOGGLE_NAV"})}}},v=function(e){var t=e.showNav;return{showNav:t}},g=(0,s.connect)(v,m)(p);t.default=g,e.exports=t.default},53:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),o=a(l),u=n(17),r=a(u),c=n(29),s=n(31),d=a(s),f=n(52),i=(a(f),n(127)),p=a(i),m=function(e){return o.default.createElement("li",{style:{fontSize:"40px",fontWeight:"300"}},o.default.createElement(r.default,{to:e.to,onClick:e.toggleNav},e.children))},v=function(e){var t,n=e.showNav,a=e.toggleNav,l=e.links;return o.default.createElement("nav",{className:(0,d.default)((t={},t[""+p.default.active]=n,t))},o.default.createElement("ul",null,l.map(function(e){return o.default.createElement(m,{to:e.to,toggleNav:a},e.text)})))},g=function(e){var t=e.showNav;return{showNav:t}},x=function(e){return{toggleNav:function(){return e({type:"TOGGLE_NAV"})}}},y=(0,c.connect)(g,x)(v);t.default=y,e.exports=t.default},277:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),o=a(l),u=n(17),r=a(u),c=n(387),s=(a(c),n(29),function(e){return o.default.createElement("li",{style:{fontSize:"20px",fontWeight:"300"}},o.default.createElement(r.default,{to:e.to},e.children))}),d=function(e){return o.default.createElement("aside",{style:{maxWidth:300,float:"left",paddingTop:0}},o.default.createElement("ul",null,e.links.map(function(e){return o.default.createElement(s,{to:e.to},e.text)})))};t.default=d,e.exports=t.default},279:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),o=a(l),u=n(7),r=a(u),c=n(9),s=(a(c),n(29)),d=n(31),f=a(d),i=n(100),p=a(i),m=n(52),v=a(m),g=n(53),x=a(g),y=n(277),h=a(y),E=n(128),_=a(E),N=function(e){var t,n=e.children,a=e.lockScreen;return o.default.createElement("div",{className:(0,f.default)((t={},t[""+_.default.container]=!0,t[""+_.default.locked]=a,t))},o.default.createElement(p.default,null),o.default.createElement(x.default,{links:[{to:"/",text:"Home"},{to:"/places/",text:"Standorte"},{to:"/products/",text:"Produkte"},{to:"/pricelist/",text:"Preisliste"},{to:"/terms/",text:"Konditionen"},{to:"/contact/",text:"Kontakt"}]}),o.default.createElement(h.default,{links:[{to:"/products/gnocchi/",text:"Gnocchi"},{to:"/products/ravioli/",text:"Ravioli"},{to:"/products/noodle/",text:"Nudeln"},{to:"/products/season/",text:"Saisonprodukte & Spezialitäten"},{to:"/products/special/",text:"Teigwaren mit Spezialfüllung"},{to:"/products/vegan/",text:"Ingredienza goes vegan"},{to:"/products/fatto/",text:"Fatto a mano"}]}),o.default.createElement("main",{className:_.default.content},n()),o.default.createElement(v.default,null))};N.propTypes={children:r.default.func,lockScreen:r.default.bool};var k=function(e){var t=e.showNav;return{lockScreen:t}},b=(0,s.connect)(k,{})(N);t.default=b,e.exports=t.default},125:function(e,t){e.exports={footer:"src-styles----footer-module---footer---cs6wc"}},126:function(e,t){e.exports={toggle:"src-styles----header-module---toggle---Cp8FO",bar:"src-styles----header-module---bar---3eI5X",active:"src-styles----header-module---active---glDgB"}},127:function(e,t){e.exports={active:"src-styles----navigation-module---active---2my2e","current-menu-item":"src-styles----navigation-module---current-menu-item---39E0b"}},128:function(e,t){e.exports={container:"src-styles----products-module---container---iQbYa",content:"src-styles----products-module---content---Ni8UQ",locked:"src-styles----products-module---locked---2-vvy"}},387:function(e,t){e.exports={"current-menu-item":"src-styles----sidebar-module---current-menu-item---3XTdA"}}});
//# sourceMappingURL=component---src-layouts-products-js-c9f1c71708e8c8e8b439.js.map