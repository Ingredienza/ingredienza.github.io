webpackJsonp([0x67ef26645b2a,60335399758886],{123:function(e,t){e.exports={layoutContext:{}}},258:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=n(1),r=a(u),o=n(265),c=a(o),d=n(123),s=a(d);t.default=function(e){return r.default.createElement(c.default,l({},e,s.default))},e.exports=t.default},262:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),u=a(l),r=n(41),o=a(r),c=function(){return u.default.createElement("footer",null,u.default.createElement("div",{style:{margin:"0 auto",width:"90%"}},u.default.createElement("p",null,"© 2018 ",u.default.createElement(o.default,{to:"https://www.ingredienza.ch"},"Ingredienza"))))};t.default=c,e.exports=t.default},263:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),u=a(l),r=n(41),o=(a(r),n(374)),c=a(o),d=n(90),s=n(264),f=a(s),i=function(e){var t=e.toggleNav,n=e.showNav,a=e.links;return u.default.createElement("div",null,u.default.createElement("header",{className:c.default.group},u.default.createElement("div",{className:n?c.default.navToggleActive:c.default.navToggle,onClick:t},u.default.createElement("div",{className:c.default.bar}),u.default.createElement("div",{className:c.default.bar}),u.default.createElement("div",{className:c.default.bar}))),u.default.createElement(f.default,{links:a}))},v=function(e){return{toggleNav:function(){return e({type:"TOGGLE_NAV"})}}},m=function(e){var t=e.showNav;return{showNav:t}},g=(0,d.connect)(m,v)(i);t.default=g,e.exports=t.default},264:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),u=a(l),r=n(41),o=a(r),c=n(375),d=a(c),s=n(90),f=n(262),i=a(f),v=function(e){return u.default.createElement("li",{style:{fontSize:"40px",fontWeight:"300"}},u.default.createElement(o.default,{to:e.to,onClick:e.toggleNav},e.children))},m=function(e){return u.default.createElement("nav",{className:e.showNav?d.default.active:""},u.default.createElement("div",{style:{margin:"0 auto",width:"90%"}},u.default.createElement("ul",null,e.links.map(function(t){return u.default.createElement(v,{to:t.to,toggleNav:e.toggleNav},t.text)}))),u.default.createElement(i.default,null))},g=function(e){var t=e.showNav;return{showNav:t}},p=function(e){return{toggleNav:function(){return e({type:"TOGGLE_NAV"})}}},h=(0,s.connect)(g,p)(m);t.default=h,e.exports=t.default},265:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),u=a(l),r=n(8),o=a(r),c=n(12),d=(a(c),n(90)),s=n(263),f=a(s),i=function(e){var t=e.children,n=e.lockScreen;return u.default.createElement("div",{style:n?{position:"fixed",height:"100%",width:"100%"}:{}},u.default.createElement(f.default,{links:[{to:"/",text:"Home"},{to:"places",text:"Standorte"},{to:"products/",text:"Produkte"},{to:"terms",text:"Konditionen"},{to:"contact",text:"Kontakt"}]}),u.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t()))};i.propTypes={children:o.default.func,lockScreen:o.default.bool};var v=function(e){var t=e.showNav;return{lockScreen:t}},m=(0,d.connect)(v,{})(i);t.default=m,e.exports=t.default},374:function(e,t){e.exports={navToggle:"src-styles----header-module---navToggle---3gOzF",bar:"src-styles----header-module---bar---3eI5X",navToggleActive:"src-styles----header-module---navToggleActive---3g6Xa src-styles----header-module---navToggle---3gOzF",group:"src-styles----header-module---group---1EL-P"}},375:function(e,t){e.exports={active:"src-styles----navigation-module---active---2my2e",menus:"src-styles----navigation-module---menus---2yn_Y","current-menu-item":"src-styles----navigation-module---current-menu-item---39E0b"}}});
//# sourceMappingURL=component---src-layouts-index-js-13ee408fc987d5ccf2b8.js.map