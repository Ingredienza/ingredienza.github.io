webpackJsonp([0x67ef26645b2a],{133:function(e,t){e.exports={layoutContext:{}}},275:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(1),u=o(a),i=n(281),l=o(i),s=n(133),c=o(s);t.default=function(e){return u.default.createElement(l.default,r({},e,c.default))},e.exports=t.default},31:function(e,t,n){var o,r;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===r)for(var u in o)a.call(o,u)&&o[u]&&e.push(u)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(o=[],r=function(){return n}.apply(t,o),!(void 0!==r&&(e.exports=r)))}()},52:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),a=o(r),u=n(17),i=(o(u),n(169)),l=o(i),s=n(125),c=o(s),f=function(){return a.default.createElement("footer",{className:c.default.footer},a.default.createElement("img",{src:l.default,alt:"Ingredienza Logo"}))};t.default=f,e.exports=t.default},169:function(e,t,n){e.exports=n.p+"static/logo.14f3c744.png"},100:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),a=o(r),u=n(17),i=(o(u),n(126)),l=o(i),s=n(29),c=n(31),f=o(c),d=n(53),p=(o(d),function(e){var t,n,o,r,u=e.toggleNav,i=e.showNav;return a.default.createElement("header",null,a.default.createElement("div",{className:(0,f.default)((t={},t[""+l.default.toggle]=!0,t)),onClick:u},a.default.createElement("div",{className:(0,f.default)((n={},n[""+l.default.bar]=!0,n[""+l.default.active]=i,n))}),a.default.createElement("div",{className:(0,f.default)((o={},o[""+l.default.bar]=!0,o[""+l.default.active]=i,o))}),a.default.createElement("div",{className:(0,f.default)((r={},r[""+l.default.bar]=!0,r[""+l.default.active]=i,r))})))}),m=function(e){return{toggleNav:function(){return e({type:"TOGGLE_NAV"})}}},h=function(e){var t=e.showNav;return{showNav:t}},v=(0,s.connect)(h,m)(p);t.default=v,e.exports=t.default},53:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),a=o(r),u=n(17),i=o(u),l=n(29),s=n(31),c=o(s),f=n(52),d=(o(f),n(127)),p=o(d),m=function(e){return a.default.createElement("li",{style:{fontSize:"40px",fontWeight:"300"}},a.default.createElement(i.default,{to:e.to,onClick:e.toggleNav},e.children))},h=function(e){var t,n=e.showNav,o=e.toggleNav,r=e.links;return a.default.createElement("nav",{className:(0,c.default)((t={},t[""+p.default.active]=n,t))},a.default.createElement("ul",null,r.map(function(e){return a.default.createElement(m,{key:e.to,to:e.to,toggleNav:o},e.text)})))},v=function(e){var t=e.showNav;return{showNav:t}},w=function(e){return{toggleNav:function(){return e({type:"TOGGLE_NAV"})}}},y=(0,l.connect)(v,w)(h);t.default=y,e.exports=t.default},281:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(1),s=o(l),c=n(7),f=o(c),d=n(9),p=(o(d),n(29)),m=n(31),h=o(m),v=n(100),w=o(v),y=n(52),g=o(y),b=n(53),x=o(b),E=n(390),N=o(E),_=function(e){function t(n){r(this,t);var o=a(this,e.call(this,n));return o.state={},o.onResize=o.onResize.bind(o),o.updateDimensions=o.updateDimensions.bind(o),o}return u(t,e),t.prototype.updateDimensions=function(){var e=this.state.windowHeight-window.innerHeight,t=this.state.windowWidth-window.innerWidth,n=Math.sqrt(e*e+t*t);(Number.isNaN(n)||100<n||n<-100)&&this.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})},t.prototype.onResize=function(){var e=this;this.rqf||"undefined"!=typeof window&&(this.rqf=window.requestAnimationFrame(function(){e.rqf=null,e.updateDimensions()}))},t.prototype.componentDidMount=function(){this.updateDimensions(),"undefined"!=typeof window&&window.addEventListener("resize",this.onResize,!1)},t.prototype.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.onResize)},t.prototype.render=function(){var e,t=this.props,n=t.children,o=t.lockScreen,r=this.state,a=r.windowWidth,u=r.windowHeight;return s.default.createElement("div",{className:(0,h.default)((e={},e[""+N.default.container]=!0,e[""+N.default.locked]=o,e))},s.default.createElement(w.default,null),s.default.createElement(x.default,{links:[{to:"/",text:"Home"},{to:"/places",text:"Standorte"},{to:"/products/",text:"Produkte"},{to:"/pricelist/",text:"Preisliste"},{to:"/terms",text:"Konditionen"},{to:"/contact",text:"Kontakt"},{to:"/links",text:"Links"}]}),s.default.createElement("main",{className:N.default.content},n(i({},this.props,{windowWidth:a,windowHeight:u}))),s.default.createElement(g.default,null))},t}(s.default.Component);_.propTypes={children:f.default.func,lockScreen:f.default.bool};var k=function(e){var t=e.showNav;return{lockScreen:t}},O=(0,p.connect)(k,{})(_);t.default=O,e.exports=t.default},125:function(e,t){e.exports={footer:"src-styles----footer-module---footer---cs6wc"}},126:function(e,t){e.exports={toggle:"src-styles----header-module---toggle---Cp8FO",bar:"src-styles----header-module---bar---3eI5X",active:"src-styles----header-module---active---glDgB"}},390:function(e,t){e.exports={container:"src-styles----layout-module---container---1sCSw",content:"src-styles----layout-module---content---3B0uJ",splash:"src-styles----layout-module---splash---2KPyG",locked:"src-styles----layout-module---locked---2B56H"}},127:function(e,t){e.exports={active:"src-styles----navigation-module---active---2my2e","current-menu-item":"src-styles----navigation-module---current-menu-item---39E0b"}}});
//# sourceMappingURL=component---src-layouts-index-js-4e5c52a046fb6e98379d.js.map