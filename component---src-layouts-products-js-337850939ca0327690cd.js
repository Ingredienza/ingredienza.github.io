webpackJsonp([0xa550611d67e2],{135:function(e,t){e.exports={data:{backgroundImage:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAC4jAAAuIwF4pT92AAABwElEQVQ4y82T3y/DUBTH+5eKRw/Ew3jDCzE/JuyXtZuYICR7mB+Rru3Wdm1vb2drx4aFEfthRoyJYA1rNx2yIExEIk5uTnJzzyfn3u+5X6T+i0D+NVxrRP01fQPX3lf8qHPtmde1x0r1QTVWuZQu5GH2mD09ke5vT1rADfK8EJfADImbacISh24IUF5AeeAC0KnIWPXhulmJvOEa+9wRIPEhPDDCMtYgOUxu9MchmlB8orTAS+5E3Kup5x9h455GvjxL4esDVHBS5DE5MrsZwSDEOM4WAbbEpicp2vOKS71MvgAf4Z2tlWWfiaGtAjcNJS8VsouiVxA8Yd4J2FFlrVvB+4qZWFNUpCmxkTIphlg1RTkHRVk4DqVpe4AYXV0fCrGOMDOxA+cz+7JaUT8RTK9qe7FQYL6XWOhJAixqiMTaQ/RUgBingpZtCbsv55ttPlFbvbstZtNJmaNXHPLGYE60HUKXRJm32LEDwVoq7GpV4336l3N+VCuZdMq/6HSPd/mdHbSnPTzXxi13Rkj06uKsrrf8Ybqm3d1cF3NHewqIsmsSuRRjfAcJWC5dGEd/bow/tKQxDl3/3l1IaxO3jic7Llg9OJ/3RQAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/productNavBg-73020edf2d3a60e899d352ed65e15289-61c3e.png",srcSet:"/static/productNavBg-73020edf2d3a60e899d352ed65e15289-1b3d7.png 575w,\n/static/productNavBg-73020edf2d3a60e899d352ed65e15289-22834.png 1150w,\n/static/productNavBg-73020edf2d3a60e899d352ed65e15289-61c3e.png 2300w,\n/static/productNavBg-73020edf2d3a60e899d352ed65e15289-d1780.png 2362w",sizes:"(max-width: 2300px) 100vw, 2300px"}}},layoutContext:{}}},276:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),u=o(r),i=n(283),l=o(i),d=n(135),s=o(d);t.default=function(e){return u.default.createElement(l.default,a({},e,s.default))},e.exports=t.default},23:function(e,t,n){var o,a;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===a)for(var u in o)r.call(o,u)&&o[u]&&e.push(u)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(o=[],a=function(){return n}.apply(t,o),!(void 0!==a&&(e.exports=a)))}()},100:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),r=o(a),u=n(17),i=(o(u),n(69)),l=o(i),d=n(126),s=o(d),c=function(){return r.default.createElement("footer",{className:s.default.footer},r.default.createElement("img",{src:l.default,alt:"Ingredienza Logo"}))};t.default=c,e.exports=t.default},101:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),r=o(a),u=n(17),i=(o(u),n(127)),l=o(i),d=n(30),s=n(23),c=o(s),f=n(52),p=(o(f),function(e){var t,n,o,a,u=e.toggleNav,i=e.showNav;return r.default.createElement("header",null,r.default.createElement("div",{className:(0,c.default)((t={},t[""+l.default.toggle]=!0,t)),onClick:u},r.default.createElement("div",{className:(0,c.default)((n={},n[""+l.default.bar]=!0,n[""+l.default.active]=i,n))}),r.default.createElement("div",{className:(0,c.default)((o={},o[""+l.default.bar]=!0,o[""+l.default.active]=i,o))}),r.default.createElement("div",{className:(0,c.default)((a={},a[""+l.default.bar]=!0,a[""+l.default.active]=i,a))})))}),m=function(e){return{toggleNav:function(){return e({type:"TOGGLE_NAV"})}}},g=function(e){var t=e.showNav;return{showNav:t}},v=(0,d.connect)(g,m)(p);t.default=v,e.exports=t.default},52:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),r=o(a),u=n(17),i=o(u),l=n(30),d=n(23),s=o(d),c=n(9),f=o(c),p=n(69),m=o(p),g=n(128),v=o(g),h=function(e){return r.default.createElement("li",null,r.default.createElement(i.default,{to:e.to,onClick:e.toggleNav},e.children))},w=function(e){var t,n=e.showNav,o=e.toggleNav,a=e.links,u=e.backgroundImage;return r.default.createElement("nav",{className:(0,s.default)((t={},t[""+v.default.active]=n,t))},r.default.createElement(f.default,{style:{zIndex:-1,position:"fixed",right:0,bottom:0,width:"100%",height:"100%"},sizes:u.sizes}),r.default.createElement("ul",null,a.map(function(e){return r.default.createElement(h,{key:e.to,to:e.to,toggleNav:o},e.text)})),r.default.createElement("img",{className:v.default.logo,src:m.default,alt:"Ingredienza Logo"}))},y=function(e){var t=e.showNav;return{showNav:t}},x=function(e){return{toggleNav:function(){return e({type:"TOGGLE_NAV"})}}},E=(0,l.connect)(y,x)(w);t.default=E,e.exports=t.default},281:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),r=o(a),u=n(17),i=o(u),l=n(396),d=(o(l),n(30),function(e){return r.default.createElement("li",{style:{fontSize:"20px",fontWeight:"300"}},r.default.createElement(i.default,{to:e.to},e.children))}),s=function(e){return r.default.createElement("aside",{lang:"de"},r.default.createElement("ul",null,e.links.map(function(e){return r.default.createElement(d,{key:e.to,to:e.to},e.text)})))};t.default=s,e.exports=t.default},69:function(e,t,n){e.exports=n.p+"static/logo.14f3c744.png"},283:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(1),d=o(l),s=n(7),c=o(s),f=n(10),p=(o(f),n(30)),m=n(23),g=o(m),v=n(101),h=o(v),w=n(100),y=o(w),x=n(52),E=o(x),A=n(281),b=o(A),N=n(129),k=o(N),_=function(e){function t(n){a(this,t);var o=r(this,e.call(this,n));return o.state={},o.onResize=o.onResize.bind(o),o.updateDimensions=o.updateDimensions.bind(o),o}return u(t,e),t.prototype.updateDimensions=function(){var e=this.state.windowHeight-window.innerHeight,t=this.state.windowWidth-window.innerWidth,n=Math.sqrt(e*e+t*t);(Number.isNaN(n)||100<n)&&this.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})},t.prototype.onResize=function(){var e=this;this.rqf||"undefined"!=typeof window&&(this.rqf=window.requestAnimationFrame(function(){e.rqf=null,e.updateDimensions()}))},t.prototype.componentDidMount=function(){this.updateDimensions(),"undefined"!=typeof window&&window.addEventListener("resize",this.onResize,!1)},t.prototype.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.onResize)},t.prototype.render=function(){var e,t=this.props,n=t.children,o=t.lockScreen,a=this.state,r=a.windowWidth,u=a.windowHeight;a.windowTop;return d.default.createElement("div",{className:(0,g.default)((e={},e[""+k.default.container]=!0,e[""+k.default.locked]=o,e))},d.default.createElement(h.default,null),d.default.createElement(E.default,{links:[{to:"/",text:"Home"},{to:"/places/",text:"Standorte"},{to:"/products/",text:"Produkte"},{to:"/pricelist/",text:"Preisliste"},{to:"/terms/",text:"Konditionen"},{to:"/contact/",text:"Kontakt"},{to:"/Links/",text:"Links"}],backgroundImage:this.props.data.backgroundImage}),d.default.createElement(b.default,{links:[{to:"/products/gnocchi/",text:"Gnocchi"},{to:"/products/ravioli/",text:"Ravioli"},{to:"/products/noodle/",text:"Nudeln"},{to:"/products/season/",text:"Saisonprodukte & Spezialitäten"},{to:"/products/special/",text:"Teigwaren mit Spezialfüllung"},{to:"/products/vegan/",text:"Ingredienza goes vegan"},{to:"/products/fatto/",text:"Fatto a mano"}]}),d.default.createElement("main",{className:k.default.content,lang:"de"},n(i({},this.props,{windowWidth:r,windowHeight:u}))),d.default.createElement(y.default,null))},t}(d.default.Component);_.propTypes={children:c.default.func,lockScreen:c.default.bool};var O=function(e){var t=e.showNav;return{lockScreen:t}},R=(0,p.connect)(O,{})(_);t.query="** extracted graphql fragment **";t.default=R},126:function(e,t){e.exports={footer:"src-styles----footer-module---footer---cs6wc"}},127:function(e,t){e.exports={toggle:"src-styles----header-module---toggle---Cp8FO",bar:"src-styles----header-module---bar---3eI5X",active:"src-styles----header-module---active---glDgB"}},128:function(e,t){e.exports={active:"src-styles----navigation-module---active---2my2e","current-menu-item":"src-styles----navigation-module---current-menu-item---39E0b",logo:"src-styles----navigation-module---logo---1T4ej"}},129:function(e,t){e.exports={container:"src-styles----products-module---container---iQbYa",content:"src-styles----products-module---content---Ni8UQ",locked:"src-styles----products-module---locked---2-vvy"}},396:function(e,t){e.exports={"current-menu-item":"src-styles----sidebar-module---current-menu-item---3XTdA"}}});
//# sourceMappingURL=component---src-layouts-products-js-337850939ca0327690cd.js.map