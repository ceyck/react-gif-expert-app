(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(7),c=n.n(r),i=n(2),u=n(9),s=n(0);var o=function(e){var t=e.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t((function(e){return[c].concat(Object(u.a)(e))})),o(""))},children:Object(s.jsx)("input",{type:"text",value:c,onChange:function(e){return function(e){o(e.target.value)}(e)}})})},j=n(10),d=n(6),l=n.n(d),f=n(8),b=function(){var e=Object(f.a)(l.a.mark((function e(t){var n,a,r,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=A4fQkAfigWA9yaSfJlAXgDO94gFZmo4w"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var m=function(e){var t=e.title,n=e.url;return Object(s.jsxs)("div",{className:"card animate__animated animate__bounce animate__fadeIn",children:[Object(s.jsx)("img",{src:n,alt:t}),Object(s.jsx)("p",{children:t})]})};var p=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){b(e).then((function(e){return c({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,c=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{className:"animate__animated animate__bounce animate__fadeIn",children:t}),c?Object(s.jsx)("p",{className:"animate__animated animate__bounce animate__flash",children:"Cargando"}):null,Object(s.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(s.jsx)(m,Object(j.a)({},e),e.id)}))})]})};var O=function(){var e=Object(a.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Gift Expert App"}),Object(s.jsx)(o,{setCategories:r}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:n.map((function(e){return Object(s.jsx)(p,{category:e},e)}))})]})};n(17);c.a.render(Object(s.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1816d2db.chunk.js.map