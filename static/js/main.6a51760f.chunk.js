(this["webpackJsonpvertical-type-react-two"]=this["webpackJsonpvertical-type-react-two"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),s=n.n(a),r=n(4),i=n.n(r),o=(n(10),n(2));n(11);var l=function(t){var e=Object(a.useState)("black"),n=Object(o.a)(e,2),s=n[0],r=n[1];return Object(c.jsxs)("div",{className:"activate",children:[Object(c.jsx)("input",{type:"text",className:"input",id:"inputLetters",onKeyDown:t.onKeyDown,onFocus:function(){r(s="blue")},onBlur:function(){r(s="black")}}),Object(c.jsx)("label",{htmlFor:"inputLetters",className:s,children:"Click here to type"})]})};var u=function(t){return Object(c.jsx)("ul",{className:"list",children:t.letters.map((function(t,e){return Object(c.jsx)("li",{className:"item",children:t},e)}))})};var j=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),n=e[0],s=e[1];return Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)(u,{letters:n}),Object(c.jsx)(l,{onKeyDown:function(t){var e=t.key;!0===/[a-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u0401]/i.test(e)&&1===e.length&&s(n.concat([e])),console.log(n)}})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),b()}},[[12,1,2]]]);
//# sourceMappingURL=main.6a51760f.chunk.js.map