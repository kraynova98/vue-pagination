(function(e){function t(t){for(var r,u,i=t[0],l=t[1],s=t[2],c=0,f=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&f.push(a[u][0]),a[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f0f2bc7a"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var s=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("Pagination",{attrs:{items:e.items,perPage:10},scopedSlots:e._u([{key:"list",fn:function(t){var r=t.list;return[n("ul",e._l(r,(function(t){return n("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]}},{key:"paginator",fn:function(t){var r=t.perPage,a=t.current;return[n("p",[e._v(" "+e._s(r)+" ")]),n("p",[e._v(" "+e._s(a)+" ")])]}}])})],1)])},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"inputs"}),n("b-field",{attrs:{grouped:"","group-multiline":""}},[n("b-field",{attrs:{label:"Total"}},[n("b-input",{attrs:{type:"number"},model:{value:e.itemsTotal,callback:function(t){e.itemsTotal=t},expression:"itemsTotal"}})],1),n("b-field",{attrs:{label:"Items per page"}},[n("b-input",{attrs:{type:"number"},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1),e._t("list",null,{list:e.list}),n("hr"),n("b-pagination",{attrs:{total:e.itemsTotal,"per-page":e.perPage,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}})],2)},i=[],l=(n("fb6a"),{name:"Pagination",props:{items:{type:Array}},computed:{list:function(){return this.items.slice((this.current-1)*this.perPage,this.perPage*this.current)},itemsTotal:function(){return this.items.length}},data:function(){return{current:1,perPage:5}}}),s=l,c=(n("b939"),n("2877")),p=Object(c["a"])(s,u,i,!1,null,"a5b5401a",null),f=p.exports,b={name:"App",components:{Pagination:f},data:function(){return{users:["Tom","Ben","Alex"],items:["cat","dog","fox","bear","tuna","beaver","platypus"]}}},d=b,m=(n("5c0b"),Object(c["a"])(d,a,o,!1,null,null,null)),g=m.exports,v=(n("d3b7"),n("8c4f")),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},y=[],P={name:"Home",components:{HelloWorld:f}},_=P,x=Object(c["a"])(_,h,y,!1,null,null,null),j=x.exports;r["a"].use(v["a"]);var w=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],O=new v["a"]({routes:w}),T=O,k=n("289d");n("5abe"),n("5363");r["a"].use(k["a"]),r["a"].config.productionTip=!1,new r["a"]({router:T,render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){},b939:function(e,t,n){"use strict";var r=n("faee"),a=n.n(r);a.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},faee:function(e,t,n){}});
//# sourceMappingURL=app.fa1c60eb.js.map