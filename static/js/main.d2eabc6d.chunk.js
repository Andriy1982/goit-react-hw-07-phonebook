(this["webpackJsonpreact-homework-template"]=this["webpackJsonpreact-homework-template"]||[]).push([[0],{47:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),a=n.n(r),o=n(14),u=n.n(o),s=n(3),i=(n(47),n(9)),b=n.n(i),d=n(17),l=n(13),f=n.n(l),j=n(2),p={fetchContactRequest:Object(j.b)("contact/fetchContactRequest"),fetchContactSuccess:Object(j.b)("contact/fetchContactSuccess"),fetchContactError:Object(j.b)("contact/fetchContactError"),addContactRequest:Object(j.b)("contact/addContactRequest"),addContactSuccess:Object(j.b)("contact/addContactSuccess"),addContactError:Object(j.b)("contact/addContactError"),deleteContactRequest:Object(j.b)("contact/deleteContactRequest"),deleteContactSuccess:Object(j.b)("contact/deleteContactSuccess"),deleteContactError:Object(j.b)("contact/deleteContactError"),changeFilter:Object(j.b)("contact/changeFilter")};f.a.defaults.baseURL="http://localhost:4040/";var O={addContact:function(t,e){return function(){var n=Object(d.a)(b.a.mark((function n(c){var r,a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={name:t,number:e},c(p.addContactRequest()),n.prev=2,n.next=5,f.a.post("/contacts",r);case 5:a=n.sent,c(p.addContactSuccess(a.data)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),c(p.addContactError(n.t0));case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(t){return n.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(d.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(p.deleteContactRequest()),e.prev=1,e.next=4,f.a.delete("/contacts/".concat(t));case 4:n(p.deleteContactSuccess(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(p.deleteContactError(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},fetchContacts:function(){return function(){var t=Object(d.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(p.fetchContactRequest()),t.prev=1,t.next=4,f.a.get("/contacts");case 4:n=t.sent,e(p.fetchContactSuccess(n.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(p.fetchContactError(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},h=n(15),C=function(t){return t.contacts},x=function(t){return t.filter},v={getContacts:C,getFilter:x,visibleContacts:Object(h.a)([C,x],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}))},m=n(7),g=n(8);function k(){var t=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]);return k=function(){return t},t}function y(){var t=Object(m.a)(["\n  padding: 0;\n"]);return y=function(){return t},t}var S=g.a.ul(y()),w=g.a.li(k());var q=function(){var t=Object(s.c)(v.visibleContacts),e=Object(s.b)();return Object(c.jsx)(S,{children:t.map((function(t){var n=t.id,r=t.name,a=t.number;return Object(c.jsxs)(w,{children:[Object(c.jsxs)("span",{children:[r,":"]}),Object(c.jsx)("span",{children:a}),Object(c.jsx)("button",{type:"button",onClick:function(){return e(O.deleteContact(n))},children:"Delete"})]},n)}))})},E=n(20);function R(){var t=Object(m.a)(["\n  width: 90px;\n  height: 28px;\n  border: 1px solid #ccc;\n  background: #fff;\n  color: #666;\n  border-radius: 5px;\n  box-shadow: inset 0 2px 2px #ccc;\n  background-color: lightgreen;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0 0 2px #ccc;\n  }\n\n  &:active {\n    margin-top: 1px;\n    margin-bottom: -1px;\n    zoom: 1;\n  }\n"]);return R=function(){return t},t}function F(){var t=Object(m.a)(["\n  display: block;\n  width: 200px;\n  font-size: 13px;\n  padding: 6px 0 4px 10px;\n  border: 1px solid #ccc;\n  background: #f6f6f6;\n  border-radius: 8px;\n\n  &:focus {\n    outline: none;\n  }\n"]);return F=function(){return t},t}function z(){var t=Object(m.a)(["\n  display: block;\n  font-size: 20px;\n  margin-bottom: 10px;\n"]);return z=function(){return t},t}function L(){var t=Object(m.a)(["\n  margin: 0 auto;\n"]);return L=function(){return t},t}var N=g.a.form(L()),D=g.a.label(z()),J=g.a.input(F()),A=g.a.button(R());var B=function(){var t=Object(r.useState)(""),e=Object(E.a)(t,2),n=e[0],a=e[1],o=Object(r.useState)(""),u=Object(E.a)(o,2),i=u[0],b=u[1],d=Object(s.c)(v.getContacts),l=Object(s.b)(),f=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":b(c);break;default:return}};return Object(c.jsxs)(N,{onSubmit:function(t){t.preventDefault(),(null===d||void 0===d?void 0:d.some((function(t){return t.name===n})))?alert("".concat(n," is already in contacts!")):(l(O.addContact(n,i)),a(""),b(""))},children:[Object(c.jsxs)(D,{children:["Name",Object(c.jsx)(J,{type:"text",value:n,name:"name",onChange:f,placeholder:"Name*",required:!0})]}),Object(c.jsxs)(D,{children:["Number",Object(c.jsx)(J,{type:"number",value:i,name:"number",onChange:f,placeholder:"111-11-11*",required:!0})]}),Object(c.jsx)(A,{type:"submit",children:"Add contact"})]})};function I(){var t=Object(m.a)(["\n  font-size: 18px;\n"]);return I=function(){return t},t}var M=g.a.label(I());var P=function(){var t=Object(s.c)(v.getFilter),e=Object(s.b)();return Object(c.jsxs)(M,{children:["Find contacts by name",Object(c.jsx)("input",{type:"text",value:t,onChange:function(t){return e(p.changeFilter(t.target.value))}})]})};function U(){var t=Object(s.c)(v.getContacts),e=Object(s.b)();return Object(r.useEffect)((function(){return e(O.fetchContacts())}),[e]),Object(c.jsxs)("section",{className:"section",children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(B,{}),Object(c.jsx)("h2",{children:"Contacts"}),(null===t||void 0===t?void 0:t.length)>0&&Object(c.jsx)(P,{}),(null===t||void 0===t?void 0:t.length)>0&&Object(c.jsx)(q,{})]})}var G,H,K=n(4),Q=n(35),T=Object(j.c)([],(G={},Object(K.a)(G,p.fetchContactSuccess,(function(t,e){return e.payload})),Object(K.a)(G,p.addContactSuccess,(function(t,e){var n=e.payload;return[].concat(Object(Q.a)(t),[n])})),Object(K.a)(G,p.deleteContactSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),G)),V=Object(j.c)(!1,(H={},Object(K.a)(H,p.fetchContactRequest,(function(){return!0})),Object(K.a)(H,p.fetchContactSuccess,(function(){return!1})),Object(K.a)(H,p.fetchContactError,(function(){return!1})),Object(K.a)(H,p.addContactRequest,(function(){return!0})),Object(K.a)(H,p.addContactSuccess,(function(){return!1})),Object(K.a)(H,p.addContactError,(function(){return!1})),Object(K.a)(H,p.deleteContactRequest,(function(){return!0})),Object(K.a)(H,p.deleteContactSuccess,(function(){return!1})),Object(K.a)(H,p.deleteContactError,(function(){return!1})),H)),W=Object(j.c)("",Object(K.a)({},p.changeFilter,(function(t,e){return e.payload}))),X=Object(j.a)({reducer:{contacts:T,filter:W,isLoading:V}});u.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(s.a,{store:X,children:Object(c.jsx)(U,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.d2eabc6d.chunk.js.map