(this.webpackJsonpwallester=this.webpackJsonpwallester||[]).push([[0],{54:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(24),r=n.n(s),i=(n(54),n(14)),l=n(8),j=n(69),o=n(68),d=n(1),u=function(){return Object(d.jsxs)(j.a,{bg:"light",expand:"sm",className:"p-0 mb-4",children:[Object(d.jsx)(j.a.Brand,{className:"text-primary",children:"Wallester"}),Object(d.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(o.a,{className:"mr-auto",children:[Object(d.jsx)(i.b,{exact:!0,to:"/",className:"nav-link",children:"Home"}),Object(d.jsx)(i.b,{to:"/users/1",className:"nav-link",isActive:function(e,t){return-1!==t.pathname.indexOf("/users/")},children:"Users"}),Object(d.jsx)(i.b,{to:"/user/add",className:"nav-link",children:"Add user"})]})})]})},b=function(e){var t=e.className,n=e.children;return Object(d.jsxs)("div",{className:"page ".concat(t||""," p-3"),children:[Object(d.jsx)(u,{}),n]})},h=n(17),O=n(26),x=n.n(O),p=n(39),m="https://reqres.in/api/";function f(){return(f=Object(p.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"users?page=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(p.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"users/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(p.a)(x.a.mark((function e(t,n){var c,a,s,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=new Headers).append("Content-Type","application/json"),a=JSON.stringify({name:t,job:n}),s={method:"POST",headers:c,body:a},e.next=6,fetch("".concat(m,"users"),s);case 6:return r=e.sent,e.next=9,r.json();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N,y=n(48),C=n.n(y),S=n(64),k=function(e){var t=e.page,n=Object(c.useState)(null),a=Object(h.a)(n,2),s=a[0],r=a[1],j=Object(l.f)();return Object(c.useEffect)((function(){(function(e){return f.apply(this,arguments)})(t).then((function(e){return r(e)}))}),[t]),null!==s?Object(d.jsxs)("div",{className:"user-list",children:[Object(d.jsxs)(S.a,{responsive:!0,hover:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"#"}),Object(d.jsx)("th",{scope:"col",children:"First"}),Object(d.jsx)("th",{scope:"col",children:"Last"}),Object(d.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(d.jsx)("tbody",{children:function(){if(null!==s){var e=(t-1)*s.per_page+1;return s.data.map((function(t,n){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",children:e+n}),Object(d.jsx)("td",{children:t.first_name}),Object(d.jsx)("td",{children:t.last_name}),Object(d.jsx)("td",{children:Object(d.jsx)(i.b,{to:"/user/".concat(t.id),className:"btn-link",children:"Show"})})]},t.id)}))}return null}()})]}),Object(d.jsx)(C.a,{pageCount:s.total_pages,pageRangeDisplayed:3,marginPagesDisplayed:1,containerClassName:"pagination justify-content-center mt-3",pageClassName:"page-item",previousClassName:"d-none",nextClassName:"d-none",pageLinkClassName:"page-link",previousLinkClassName:"page-link",nextLinkClassName:"page-link",activeClassName:"active",initialPage:t-1,forcePage:t-1,disableInitialCallback:!0,onPageChange:function(e){j.push("/users/".concat(e.selected+1))}})]}):Object(d.jsx)("p",{children:"No users"})},w=function(e){var t=e.children,n=e.headerText;return Object(d.jsxs)("div",{className:"mb-4 d-flex align-items-baseline",children:[Object(d.jsx)("h1",{className:"h4",children:n}),t]})},E=function(){return Object(d.jsxs)(b,{className:"homepage",children:[Object(d.jsx)(w,{headerText:"Users",children:Object(d.jsx)(i.b,{to:"/user/add",className:"btn btn-primary ml-3",children:"Add"})}),Object(d.jsx)(k,{page:1})]})},T=function(){var e=+Object(l.g)().page;return Object(d.jsxs)(b,{children:[Object(d.jsx)(w,{headerText:"Users",children:Object(d.jsx)(i.b,{to:"/user/add",className:"btn btn-primary ml-3",children:"Add"})}),Object(d.jsx)(k,{page:e})]})},A=function(e){var t=e.id,n=Object(c.useState)(null),a=Object(h.a)(n,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){(function(e){return v.apply(this,arguments)})(t).then((function(e){return r(e)}))}),[t]),null!==s?Object(d.jsxs)("div",{className:"user",children:[Object(d.jsx)(w,{headerText:"".concat(s.data.first_name," ").concat(s.data.last_name)}),Object(d.jsxs)(S.a,{responsive:!0,hover:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"avatar"}),Object(d.jsx)("th",{scope:"col",children:"id"}),Object(d.jsx)("th",{scope:"col",children:"First"}),Object(d.jsx)("th",{scope:"col",children:"Last"}),Object(d.jsx)("th",{scope:"col",children:"email"})]})}),Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("img",{src:s.data.avatar,alt:"user avatar",className:"img-fluid user-avatar"})}),Object(d.jsx)("th",{scope:"row",children:s.data.id}),Object(d.jsx)("td",{children:s.data.first_name}),Object(d.jsx)("td",{children:s.data.last_name}),Object(d.jsx)("td",{children:s.data.email})]})})]})]}):Object(d.jsx)("p",{children:"No user"})},_=function(){var e=+Object(l.g)().id;return Object(d.jsx)(b,{className:"user-page",children:Object(d.jsx)(A,{id:e})})},I=n(67),R=n(65);!function(e){e.SOFTWARE_ENGINEER="Software Engineer",e.PAINTER="Painter",e.BUS_DRIVER="Bus driver"}(N||(N={}));var F=n(66),L=function(e){var t=e.children,n=e.showModal,c=e.setShowModal;return Object(d.jsxs)(F.a,{show:n,onHide:function(){return c(!1)},children:[Object(d.jsx)(F.a.Header,{closeButton:!0}),Object(d.jsx)(F.a.Body,{children:t}),Object(d.jsx)(F.a.Footer,{children:Object(d.jsx)(R.a,{variant:"primary",onClick:function(){return c(!1)},children:"Ok"})})]})},P=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(N.SOFTWARE_ENGINEER),r=Object(h.a)(s,2),i=r[0],l=r[1],j=Object(c.useState)(null),o=Object(h.a)(j,2),u=o[0],b=o[1],O=Object(c.useState)(null),x=Object(h.a)(O,2),p=x[0],m=x[1],f=Object(c.useState)(!1),v=Object(h.a)(f,2),y=v[0],C=v[1],S=Object(c.useState)(!1),k=Object(h.a)(S,2),w=k[0],E=k[1],T=Object(c.useRef)(null);return Object(d.jsxs)("div",{className:"form-container",children:[Object(d.jsxs)(I.a,{onSubmit:function(e){e.preventDefault();var t=new Date;if(null!==u){var c=Math.abs(t.getTime()-u.getTime());if(Math.floor(c/31104e6)<18)return void E(!0)}(function(e,t){return g.apply(this,arguments)})(n,i).then((function(e){m(e),a(""),l(N.SOFTWARE_ENGINEER),C(!0),null!==T.current&&T.current.reset()}))},className:"mb-3",ref:T,children:[Object(d.jsxs)(I.a.Group,{controlId:"name",children:[Object(d.jsx)(I.a.Label,{children:"Name"}),Object(d.jsx)(I.a.Control,{required:!0,type:"text",placeholder:"Enter name",pattern:"[a-zA-Z ]+",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(d.jsxs)(I.a.Group,{controlId:"job",children:[Object(d.jsx)(I.a.Label,{children:"Job"}),Object(d.jsx)(I.a.Control,{as:"select",value:i,onChange:function(e){return l(e.target.value)},children:Object.values(N).map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))})]}),Object(d.jsxs)(I.a.Group,{controlId:"dateOfBirth",children:[Object(d.jsx)(I.a.Label,{children:"Date of birth"}),Object(d.jsx)(I.a.Control,{required:!0,type:"date",placeholder:"Pick a date",onChange:function(e){return b(e.target.valueAsDate)}})]}),Object(d.jsx)(R.a,{variant:"primary",type:"submit",children:"Submit"})]}),y?Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"d-block text-danger mb-2",children:"User successfully created!"}),Object(d.jsx)("div",{className:"text-break",children:JSON.stringify(p)})]}):null,w?Object(d.jsx)(L,{showModal:w,setShowModal:E,children:"Account cannot be created! Age should be above 18 years old!"}):null]})},B=function(){return Object(d.jsxs)(b,{className:"add-user-page",children:[Object(d.jsx)(w,{headerText:"Add user"}),Object(d.jsx)(P,{})]})},D=function(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:E}),Object(d.jsx)(l.a,{path:"/user/add",component:B}),Object(d.jsx)(l.a,{path:"/users/:page",component:T}),Object(d.jsx)(l.a,{path:"/user/:id",component:_})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("container")),M()}},[[62,1,2]]]);
//# sourceMappingURL=main.9e5f12aa.chunk.js.map