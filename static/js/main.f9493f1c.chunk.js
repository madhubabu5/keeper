(this.webpackJsonpkeeper=this.webpackJsonpkeeper||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n(8),o=n.n(i),a=n(9),j=n(5);var u=function(){return Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"Keeper"})})};var l=function(){var e=(new Date).getFullYear();return Object(c.jsx)("footer",{children:Object(c.jsxs)("p",{children:["Copyright \xa9",e," "]})})};var s=function(e){return Object(c.jsxs)("div",{className:"note",children:[Object(c.jsx)("h1",{children:e.title}),Object(c.jsx)("p",{children:e.content}),Object(c.jsx)("button",{onClick:function(){e.onDelete(e.id)},children:"DELETE"})]})},b=n(4),d=n(7);var O=function(e){var t=Object(r.useState)({title:"",content:""}),n=Object(j.a)(t,2),i=n[0],o=n[1];function a(e){var t=e.target,n=t.name,c=t.value;o((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(b.a)({},n,c))}))}return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"create-note",children:[Object(c.jsx)("input",{name:"title",onChange:a,value:i.title,placeholder:"Title"}),Object(c.jsx)("textarea",{name:"content",onChange:a,value:i.content,placeholder:"Take a note...",rows:"3"}),Object(c.jsx)("button",{onClick:function(t){e.onAdd(i),o({title:"",content:""}),t.preventDefault()},children:"Add"})]})})};var h=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1];function o(e){i((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{}),Object(c.jsx)(O,{onAdd:function(e){i((function(t){return[].concat(Object(a.a)(t),[e])}))}}),n.map((function(e,t){return Object(c.jsx)(s,{id:t,title:e.title,content:e.content,onDelete:o},t)})),Object(c.jsx)(l,{})]})};o.a.render(Object(c.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f9493f1c.chunk.js.map