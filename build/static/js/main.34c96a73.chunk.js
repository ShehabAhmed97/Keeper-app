(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{71:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(27),i=n.n(a),j=n(14),o=n(5),s=n(49),u=n.n(s),l=n(2);var b=function(){return Object(l.jsx)("header",{children:Object(l.jsxs)("h1",{children:[Object(l.jsx)(u.a,{}),"Keeper"]})})};var d=function(){var e=(new Date).getFullYear();return Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{children:["Copyright \u24d2 ",e]})})},O=n(52),h=n.n(O);var x=function(e){return Object(l.jsxs)("div",{className:"note",children:[Object(l.jsx)("h1",{children:e.title}),Object(l.jsx)("p",{children:e.content}),Object(l.jsx)("button",{onClick:function(){return e.onDelete(e.id)},children:Object(l.jsx)(h.a,{})})]})},f=n(87),p=n(53),v=n.n(p),m=n(88);var k=function(e){var t=r.a.useState(""),n=Object(o.a)(t,2),c=n[0],a=n[1],i=r.a.useState(""),j=Object(o.a)(i,2),s=j[0],u=j[1],b=r.a.useState(!1),d=Object(o.a)(b,2),O=d[0],h=d[1];function x(e){var t=e.target,n=t.name,c=t.value;"title"===n?a(c):u(c)}return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"create-note",children:[O&&Object(l.jsx)("input",{name:"title",placeholder:"Title",value:c,onChange:x}),Object(l.jsx)("textarea",{name:"content",placeholder:"Take a note...",rows:O?3:1,value:s,onChange:x,onClick:function(){h(!0)}}),Object(l.jsx)(m.a,{in:O&&!0,children:Object(l.jsx)(f.a,{onClick:function(t){t.preventDefault(),a(""),u(""),h(!1),e.onAdd({title:c,content:s})},children:Object(l.jsx)(v.a,{})})})]})})};var g=function(){var e=r.a.useState([]),t=Object(o.a)(e,2),n=t[0],c=t[1];function a(e){c((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{}),Object(l.jsx)(k,{onAdd:function(e){c((function(t){return[].concat(Object(j.a)(t),[e])}))}}),n.map((function(e,t){return Object(l.jsx)(x,{title:e.title,content:e.content,id:t,onDelete:a},t)})),Object(l.jsx)(d,{})]})};i.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.34c96a73.chunk.js.map