webpackJsonp([0x67ef26645b2a],{134:function(e,t){e.exports={data:{backgroundImage:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAC4jAAAuIwF4pT92AAACdUlEQVQ4y2P49+8/CP0nBzD8pwDQQPM/GPgLBkAGAc0QFXB1uDRg0YysFGjVnbu3N23esGXrph27th89fuTJk8eYjkJo/vvv78vXr798+fL4yaMlSxdOmzm1s7u9sqq0oakmLz+zorLkz58/P3/+/PXrJ7rNX79927Rl46IlC6ZNn1RYmFNUnN/QVFtVXVZRVZqekRIWHtQ/offuvTsHDx/YvHXTgUP7T505+fDRQ5BmYBzPmTcnNS2puqY8JSU+ONg/KiosJiYCqC07OyMzK7WmrnLGrKndfV0zZ8+YNXdmV19nUkpCdEzEs+fPQDYDrS0pLYqNi66qrujo7pgxa8bMWdM6OlsaGmuys9MSEqKDgvwys9JSUhO9fTw8vdwdnOxr62u+f/8O0vzr96+Pnz49e/H889cvQO7LVy/mzJtZUlKQmZlaWJTb0FBTVJxXXlkMdE5GVvrc+fO27dz56u1b9ND+8vXLtetXps+YkpaWVFZWXFFRCjSit7dz3oLZkyb3l5cX5+Rmfvn6Fa6eAc66ceNGfX11cXF+ZHhIZERYbHRESFBAXGx0Xl5WQnxMoL9PSHCAu7vLqVOngIp///kD1QyMWCC5devmmOiwxMQ4oAYvTzdvTzcnRztnR3sLcxNHBztTE0MTY6PEpASg74CK/wCTHSi0wdY+e/68oCDXztbaytLM1cXR3887KDgwOSWpubVl9tw5S5ct27Rly/adO+/cvwfRCUyxf/79g2r+8PHD+QvnV61euWbNqpMnT9y4deP1m9ffvn//i5FIgVELdOcfiGaCCfgfKgDrB6G/cM3IeQiSjUjIGKgOIys//8NA+AEArUrfSxh6vkEAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/navBg-184692bd7937900aa77c4cccc64be307-61c3e.png",srcSet:"/static/navBg-184692bd7937900aa77c4cccc64be307-1b3d7.png 575w,\n/static/navBg-184692bd7937900aa77c4cccc64be307-22834.png 1150w,\n/static/navBg-184692bd7937900aa77c4cccc64be307-61c3e.png 2300w,\n/static/navBg-184692bd7937900aa77c4cccc64be307-d1780.png 2362w",sizes:"(max-width: 2300px) 100vw, 2300px"}}},layoutContext:{}}},275:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),i=o(r),u=n(282),l=o(u),c=n(134),s=o(c);t.default=function(e){return i.default.createElement(l.default,a({},e,s.default))},e.exports=t.default},23:function(e,t,n){var o,a;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===a)for(var i in o)r.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(o=[],a=function(){return n}.apply(t,o),!(void 0!==a&&(e.exports=a)))}()},100:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),r=o(a),i=n(17),u=(o(i),n(69)),l=o(u),c=n(126),s=o(c),d=function(){return r.default.createElement("footer",{className:s.default.footer},r.default.createElement("img",{src:l.default,alt:"Ingredienza Logo"}))};t.default=d,e.exports=t.default},101:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),r=o(a),i=n(17),u=(o(i),n(127)),l=o(u),c=n(30),s=n(23),d=o(s),f=n(52),p=(o(f),function(e){var t,n,o,a,i=e.toggleNav,u=e.showNav;return r.default.createElement("header",null,r.default.createElement("div",{className:(0,d.default)((t={},t[""+l.default.toggle]=!0,t)),onClick:i},r.default.createElement("div",{className:(0,d.default)((n={},n[""+l.default.bar]=!0,n[""+l.default.active]=u,n))}),r.default.createElement("div",{className:(0,d.default)((o={},o[""+l.default.bar]=!0,o[""+l.default.active]=u,o))}),r.default.createElement("div",{className:(0,d.default)((a={},a[""+l.default.bar]=!0,a[""+l.default.active]=u,a))})))}),m=function(e){return{toggleNav:function(){return e({type:"TOGGLE_NAV"})}}},v=function(e){var t=e.showNav;return{showNav:t}},g=(0,c.connect)(v,m)(p);t.default=g,e.exports=t.default},52:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),r=o(a),i=n(17),u=o(i),l=n(30),c=n(23),s=o(c),d=n(9),f=o(d),p=n(69),m=o(p),v=n(128),g=o(v),w=function(e){return r.default.createElement("li",null,r.default.createElement(u.default,{to:e.to,onClick:e.toggleNav},e.children))},h=function(e){var t,n=e.showNav,o=e.toggleNav,a=e.links,i=e.backgroundImage;return r.default.createElement("nav",{className:(0,s.default)((t={},t[""+g.default.active]=n,t))},r.default.createElement(f.default,{style:{zIndex:-1,position:"fixed",right:0,bottom:0,width:"100%",height:"100%"},sizes:i.sizes}),r.default.createElement("ul",null,a.map(function(e){return r.default.createElement(w,{key:e.to,to:e.to,toggleNav:o},e.text)})),r.default.createElement("img",{className:g.default.logo,src:m.default,alt:"Ingredienza Logo"}))},y=function(e){var t=e.showNav;return{showNav:t}},b=function(e){return{toggleNav:function(){return e({type:"TOGGLE_NAV"})}}},A=(0,l.connect)(y,b)(h);t.default=A,e.exports=t.default},69:function(e,t,n){e.exports=n.p+"static/logo.14f3c744.png"},282:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(1),c=o(l),s=n(7),d=o(s),f=n(10),p=(o(f),n(30)),m=n(23),v=o(m),g=n(101),w=o(g),h=n(100),y=o(h),b=n(52),A=o(b),N=n(392),x=o(N),E=function(e){function t(n){a(this,t);var o=r(this,e.call(this,n));return o.state={},o.onResize=o.onResize.bind(o),o.updateDimensions=o.updateDimensions.bind(o),o}return i(t,e),t.prototype.updateDimensions=function(){var e=this.state.windowHeight-window.innerHeight,t=this.state.windowWidth-window.innerWidth,n=Math.sqrt(e*e+t*t);(Number.isNaN(n)||100<n)&&this.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})},t.prototype.onResize=function(){var e=this;this.rqf||"undefined"!=typeof window&&(this.rqf=window.requestAnimationFrame(function(){e.rqf=null,e.updateDimensions()}))},t.prototype.componentDidMount=function(){this.updateDimensions(),"undefined"!=typeof window&&window.addEventListener("resize",this.onResize,!1)},t.prototype.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.onResize)},t.prototype.render=function(){var e,t=this.props,n=t.children,o=t.lockScreen,a=this.state,r=a.windowWidth,i=a.windowHeight;return c.default.createElement("div",{className:(0,v.default)((e={},e[""+x.default.container]=!0,e[""+x.default.locked]=o,e))},c.default.createElement(w.default,null),c.default.createElement(A.default,{links:[{to:"/",text:"Home"},{to:"/places",text:"Standorte"},{to:"/products/",text:"Produkte"},{to:"/pricelist/",text:"Preisliste"},{to:"/terms",text:"Konditionen"},{to:"/contact",text:"Kontakt"},{to:"/links",text:"Links"}],backgroundImage:this.props.data.backgroundImage}),c.default.createElement("main",{className:x.default.content,lang:"de"},n(u({},this.props,{windowWidth:r,windowHeight:i}))),c.default.createElement(y.default,null))},t}(c.default.Component);E.propTypes={children:d.default.func,lockScreen:d.default.bool};var z=function(e){var t=e.showNav;return{lockScreen:t}},k=(0,p.connect)(z,{})(E);t.query="** extracted graphql fragment **";t.default=k},126:function(e,t){e.exports={footer:"src-styles----footer-module---footer---cs6wc"}},127:function(e,t){e.exports={toggle:"src-styles----header-module---toggle---Cp8FO",bar:"src-styles----header-module---bar---3eI5X",active:"src-styles----header-module---active---glDgB"}},392:function(e,t){e.exports={container:"src-styles----layout-module---container---1sCSw",content:"src-styles----layout-module---content---3B0uJ",splash:"src-styles----layout-module---splash---2KPyG",locked:"src-styles----layout-module---locked---2B56H"}},128:function(e,t){e.exports={active:"src-styles----navigation-module---active---2my2e","current-menu-item":"src-styles----navigation-module---current-menu-item---39E0b",logo:"src-styles----navigation-module---logo---1T4ej"}}});
//# sourceMappingURL=component---src-layouts-index-js-a2687cf68d6162c6ddb1.js.map