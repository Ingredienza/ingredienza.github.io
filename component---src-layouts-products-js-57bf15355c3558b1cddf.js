webpackJsonp([0xa550611d67e2],{135:function(e,t){e.exports={data:{backgroundImage:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAC4jAAAuIwF4pT92AAABz0lEQVQ4y2P4TwFgGBya/wEhKvj379/fv3+BJFE241JHQPOfP3+ePn0KtOc/2H4w4/+uXTtrqqtev34NMvfvn/+oRjMgW1hdXdXb2wcxCAiAjDNnzigrK0ybMQUiiN3mv39BEkdOHNTSV7x0+TzEZqBf7z+5U1SVnZ6VdPXK8e+vt354dgAaOBDNEDu/fH1z4PCO7skd3gHOSenhq9es+PXrz/MPT6bPm5acnB4aFbB/XfTTQx7PrkwD6/2LovnTl48btm7qmzBx1579kRGePp6W165dBYq/+/Dy8KGtnRNyalt9Lu9L+v7xDNiPqJqfv3y5ePnyiVMmTZwyJTk5PC/d58i+zX9+Pvn5euf/bwcun58RkW0aG6eze3UXzNp/CD9///Hj8rWrS5Ytbetor6zO6+/Kv3/78o9Pp399OLp9X0dlm8+atXUrZmavmxLw5jHCcpR4BobQ958/33189/rN099//n7/dPH3+01H9xUd2FhzflfDhtmpO5cV3T6/Fd1mrMnj799fPz8ceH21e8+yjDUz4pZNytq7Yd6b54/hirGnbSSD/jy5u+/k3kUnD2y4d+vKr1+/SMsYwOj+9fs3VgcSm6v+gcHgzM+kAgDxQk3NNrg77wAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/productNavBg-6ecdc93193c3da7bec1a58cc936e40b3-61c3e.png",srcSet:"/static/productNavBg-6ecdc93193c3da7bec1a58cc936e40b3-1b3d7.png 575w,\n/static/productNavBg-6ecdc93193c3da7bec1a58cc936e40b3-22834.png 1150w,\n/static/productNavBg-6ecdc93193c3da7bec1a58cc936e40b3-61c3e.png 2300w,\n/static/productNavBg-6ecdc93193c3da7bec1a58cc936e40b3-d1780.png 2362w",sizes:"(max-width: 2300px) 100vw, 2300px"}}},layoutContext:{}}},276:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),u=o(r),i=n(283),c=o(i),l=n(135),s=o(l);t.default=function(e){return u.default.createElement(c.default,a({},e,s.default))},e.exports=t.default},23:function(e,t,n){var o,a;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===a)for(var u in o)r.call(o,u)&&o[u]&&e.push(u)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(o=[],a=function(){return n}.apply(t,o),!(void 0!==a&&(e.exports=a)))}()},100:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),r=o(a),u=n(17),i=(o(u),n(69)),c=o(i),l=n(126),s=o(l),d=function(){return r.default.createElement("footer",{className:s.default.footer},r.default.createElement("img",{src:c.default,alt:"Ingredienza Logo"}))};t.default=d,e.exports=t.default},101:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),r=o(a),u=n(17),i=(o(u),n(127)),c=o(i),l=n(30),s=n(23),d=o(s),f=n(52),p=(o(f),function(e){var t,n,o,a,u=e.toggleNav,i=e.showNav;return r.default.createElement("header",null,r.default.createElement("div",{className:(0,d.default)((t={},t[""+c.default.toggle]=!0,t)),onClick:u},r.default.createElement("div",{className:(0,d.default)((n={},n[""+c.default.bar]=!0,n[""+c.default.active]=i,n))}),r.default.createElement("div",{className:(0,d.default)((o={},o[""+c.default.bar]=!0,o[""+c.default.active]=i,o))}),r.default.createElement("div",{className:(0,d.default)((a={},a[""+c.default.bar]=!0,a[""+c.default.active]=i,a))})))}),m=function(e){return{toggleNav:function(){return e({type:"TOGGLE_NAV"})}}},g=function(e){var t=e.showNav;return{showNav:t}},v=(0,l.connect)(g,m)(p);t.default=v,e.exports=t.default},52:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),r=o(a),u=n(17),i=o(u),c=n(30),l=n(23),s=o(l),d=n(9),f=o(d),p=n(69),m=o(p),g=n(128),v=o(g),w=function(e){return r.default.createElement("li",null,r.default.createElement(i.default,{to:e.to,onClick:e.toggleNav},e.children))},h=function(e){var t,n=e.showNav,o=e.toggleNav,a=e.links,u=e.backgroundImage;return r.default.createElement("nav",{className:(0,s.default)((t={},t[""+v.default.active]=n,t))},r.default.createElement(f.default,{className:v.default.background,style:{zIndex:-1,position:"fixed",right:0,bottom:0,width:"100%",height:"100%"},sizes:u.sizes}),r.default.createElement("ul",null,a.map(function(e){return r.default.createElement(w,{key:e.to,to:e.to,toggleNav:o},e.text)}),r.default.createElement(w,{className:v.default.impressum,to:"/impressum",toglleNav:o},"Impressum")),r.default.createElement("img",{className:v.default.logo,src:m.default,alt:"Ingredienza Logo"}))},y=function(e){var t=e.showNav;return{showNav:t}},b=function(e){return{toggleNav:function(){return e({type:"TOGGLE_NAV"})}}},N=(0,c.connect)(y,b)(h);t.default=N,e.exports=t.default},281:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),r=o(a),u=n(17),i=o(u),c=n(396),l=(o(c),n(30),function(e){return r.default.createElement("li",{style:{fontSize:"20px",fontWeight:"300"}},r.default.createElement(i.default,{to:e.to},e.children))}),s=function(e){return r.default.createElement("aside",{lang:"de"},r.default.createElement("ul",null,e.links.map(function(e){return r.default.createElement(l,{key:e.to,to:e.to},e.text)})))};t.default=s,e.exports=t.default},69:function(e,t,n){e.exports=n.p+"static/logo.14f3c744.png"},283:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(1),l=o(c),s=n(7),d=o(s),f=n(10),p=(o(f),n(30)),m=n(23),g=o(m),v=n(101),w=o(v),h=n(100),y=o(h),b=n(52),N=o(b),x=n(281),E=o(x),A=n(129),k=o(A),z=function(e){function t(n){a(this,t);var o=r(this,e.call(this,n));return o.state={},o.onResize=o.onResize.bind(o),o.updateDimensions=o.updateDimensions.bind(o),o}return u(t,e),t.prototype.updateDimensions=function(){var e=this.state.windowHeight-window.innerHeight,t=this.state.windowWidth-window.innerWidth,n=Math.sqrt(e*e+t*t);(Number.isNaN(n)||100<n)&&this.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})},t.prototype.onResize=function(){var e=this;this.rqf||"undefined"!=typeof window&&(this.rqf=window.requestAnimationFrame(function(){e.rqf=null,e.updateDimensions()}))},t.prototype.componentDidMount=function(){this.updateDimensions(),"undefined"!=typeof window&&window.addEventListener("resize",this.onResize,!1)},t.prototype.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.onResize)},t.prototype.render=function(){var e,t=this.props,n=t.children,o=t.lockScreen,a=this.state,r=a.windowWidth,u=a.windowHeight;a.windowTop;return l.default.createElement("div",{className:(0,g.default)((e={},e[""+k.default.container]=!0,e[""+k.default.locked]=o,e))},l.default.createElement(w.default,null),l.default.createElement(N.default,{links:[{to:"/",text:"Home"},{to:"/places/",text:"Standorte"},{to:"/products/",text:"Produkte"},{to:"/pricelist/",text:"Preisliste"},{to:"/terms/",text:"Konditionen"},{to:"/contact/",text:"Kontakt"},{to:"/Links/",text:"Links"}],backgroundImage:this.props.data.backgroundImage}),l.default.createElement(E.default,{links:[{to:"/products/gnocchi/",text:"Gnocchi"},{to:"/products/ravioli/",text:"Ravioli"},{to:"/products/noodle/",text:"Nudeln"},{to:"/products/season/",text:"Saisonprodukte & Spezialitäten"},{to:"/products/special/",text:"Teigwaren mit Spezialfüllung"},{to:"/products/vegan/",text:"Ingredienza goes vegan"},{to:"/products/fatto/",text:"Fatto a mano"}]}),l.default.createElement("main",{className:k.default.content,lang:"de"},n(i({},this.props,{windowWidth:r,windowHeight:u}))),l.default.createElement(y.default,null))},t}(l.default.Component);z.propTypes={children:d.default.func,lockScreen:d.default.bool};var _=function(e){var t=e.showNav;return{lockScreen:t}},O=(0,p.connect)(_,{})(z);t.query="** extracted graphql fragment **";t.default=O},126:function(e,t){e.exports={footer:"src-styles----footer-module---footer---cs6wc"}},127:function(e,t){e.exports={toggle:"src-styles----header-module---toggle---Cp8FO",bar:"src-styles----header-module---bar---3eI5X",active:"src-styles----header-module---active---glDgB"}},128:function(e,t){e.exports={active:"src-styles----navigation-module---active---2my2e","current-menu-item":"src-styles----navigation-module---current-menu-item---39E0b",impressum:"src-styles----navigation-module---impressum---5rX8N",logo:"src-styles----navigation-module---logo---1T4ej",background:"src-styles----navigation-module---background---3xqUN"}},129:function(e,t){e.exports={container:"src-styles----products-module---container---iQbYa",content:"src-styles----products-module---content---Ni8UQ",locked:"src-styles----products-module---locked---2-vvy"}},396:function(e,t){e.exports={"current-menu-item":"src-styles----sidebar-module---current-menu-item---3XTdA"}}});
//# sourceMappingURL=component---src-layouts-products-js-57bf15355c3558b1cddf.js.map