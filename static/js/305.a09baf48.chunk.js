"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[305],{9305:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r,o,a,i,d,s,c,u,p,l,x,f,m,h,b,g,Z,v=t(2791),j=t(9434),C=t(168),w=t(7691),k=w.ZP.div(r||(r=(0,C.Z)(["\n  margin: auto;\n  max-width: 600px;\n  padding: 20px;\n  margin-top: 30px;\n  border-radius: 20px;\n  background-color: rgb(181, 198, 236);\n  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.75);\n  text-align: center;\n  opacity: 0.9;\n"]))),P=w.ZP.h2(o||(o=(0,C.Z)(["\n  margin: 0;\n  padding-top: 20px;\n"]))),y=w.ZP.h2(a||(a=(0,C.Z)(["\n  margin: 0;\n  padding-bottom: 20px;\n"]))),L=w.ZP.h2(i||(i=(0,C.Z)(["\n  margin: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),F=w.ZP.div(d||(d=(0,C.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),N=t(885),S=w.ZP.form(s||(s=(0,C.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  border: 10px solid rgb(156, 182, 238);\n  padding: 20px;\n  border-radius: 50px;\n"]))),A=w.ZP.label(c||(c=(0,C.Z)(["\n  margin-bottom: 10px;\n  &:last-child {\n    margin-bottom: 0px;\n  }\n"]))),z=w.ZP.input(u||(u=(0,C.Z)(["\n  margin-left: 28px;\n  width: 350px;\n  height: 30px;\n  border-radius: 5px;\n  border: none;\n"]))),I=w.ZP.input(p||(p=(0,C.Z)(["\n  margin-left: 10px;\n  width: 350px;\n  height: 30px;\n  border-radius: 5px;\n  border: none;\n"]))),_=w.ZP.button(l||(l=(0,C.Z)(["\n  margin: auto;\n  cursor: pointer;\n  outline: none;\n  padding: 0 10px;\n  width: 150px;\n  height: 30px;\n  background-color: rgb(133, 180, 222);\n  border: none;\n  border-radius: 20px;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out;\n  cursor: pointer;\n  box-shadow: 0px 0px 4px 4px rgba(58, 132, 222, 0.75);\n  -webkit-box-shadow: 0px 0px 4px 4px rgba(58, 132, 222, 0.75);\n  -moz-box-shadow: 0px 0px 4px 4px rgba(58, 132, 222, 0.75);\n  &::first-letter {\n    text-transform: uppercase;\n  }\n  &:hover,\n  &:focus {\n    color: #fff;\n    background-color: rgb(100, 70, 192);\n    box-shadow: 0px 0px 7px #fff;\n  }\n"]))),D=t(5218),q=t(1312),E=function(){var n=(0,j.v9)((function(n){return n.contacts.items})),e=(0,j.v9)((function(n){return n.contacts.filter})),t=(0,j.v9)((function(n){return n.contacts.loader})),r=(0,j.v9)((function(n){return n.contacts.addLoader})),o=(0,j.v9)((function(n){return n.contacts.error})),a=(0,j.I0)();return{contacts:n,filter:e,loader:t,addLoader:r,error:o,getContacts:function(){a(q.mh.getContacts())},addContact:function(n){a(q.mh.addContact(n))},deleteContact:function(n){a(q.mh.deleteContact(n)),D.ZP.error("Contact was uninstalled from phonebook!",{duration:2e3,position:"top-center"})},editContact:function(n){var e=n.id,t=n.name,r=n.number;a(q.mh.editContact({id:e,name:t,number:r}))},setFilter:function(n){a((0,q.M6)(n))}}},M=t(8191),T=t(184),B=function(){var n=(0,v.useState)(""),e=(0,N.Z)(n,2),t=e[0],r=e[1],o=(0,v.useState)(""),a=(0,N.Z)(o,2),i=a[0],d=a[1],s=(0,v.useId)(),c=(0,v.useId)(),u=E(),p=u.contacts,l=u.addLoader,x=u.addContact,f=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":d(o);break;default:return}},m=function(){r(""),d("")};return(0,T.jsxs)(S,{onSubmit:function(n){if(n.preventDefault(),p.find((function(n){return n.name.toLowerCase()===t.toLowerCase()})))return D.ZP.error("This contact: '".concat(t,"' is already in phonebook"),{duration:2e3,position:"top-center"}),void m();x({name:t,number:(0,M._)("+".concat(i)).getURI()}),D.ZP.success("Contact is added successfully!",{duration:2e3,position:"top-center"}),m()},children:[(0,T.jsxs)(A,{htmlFor:s,children:["Name",(0,T.jsx)(z,{id:s,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:f,placeholder:"  full name"})]}),(0,T.jsxs)(A,{htmlFor:c,children:["Number",(0,T.jsx)(I,{id:c,type:"tel",name:"number",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:f,placeholder:"  phone number xxx-xx-xx"})]}),(0,T.jsxs)(_,{disabled:l,children:[" ",l?"Adding...":"Add contact"]})]})},J=w.ZP.li(x||(x=(0,C.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-bottom: 5px;\n  border-radius: 4px;\n  background-color: #fff;\n"]))),R=w.ZP.div(f||(f=(0,C.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 280px;\n  margin-left: 30px;\n"]))),U=w.ZP.button(m||(m=(0,C.Z)(["\n  margin: auto;\n  cursor: pointer;\n  outline: none;\n  padding: 0 10px;\n  width: 80px;\n  height: 30px;\n  background-color: rgb(133, 180, 222);\n  border: none;\n  border-radius: 20px;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out;\n  cursor: pointer;\n  box-shadow: 0px 0px 4px 4px rgba(58, 132, 222, 0.75);\n  -webkit-box-shadow: 0px 0px 4px 4px rgba(58, 132, 222, 0.75);\n  -moz-box-shadow: 0px 0px 4px 4px rgba(58, 132, 222, 0.75);\n  &::first-letter {\n    text-transform: uppercase;\n  }\n  &:hover,\n  &:focus {\n    color: #fff;\n    background-color: rgb(100, 70, 192);\n    box-shadow: 0px 0px 7px #fff;\n  }\n"]))),$=w.ZP.div(h||(h=(0,C.Z)(["\n  display: flex;\n  column-gap: 20px;\n  padding-right: 10px;\n  margin-left: 20px;\n"]))),G=function(n){var e=n.id,t=n.name,r=n.number,o=(0,v.useState)(null),a=(0,N.Z)(o,2),i=a[0],d=a[1],s=(0,v.useState)(t),c=(0,N.Z)(s,2),u=c[0],p=c[1],l=(0,v.useState)(r),x=(0,N.Z)(l,2),f=x[0],m=x[1],h=(0,v.useState)(!1),b=(0,N.Z)(h,2),g=b[0],Z=b[1],j=E(),C=j.contacts,w=j.loader,k=j.deleteContact,P=j.editContact,y=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"editedName":return p(r);case"editedNumber":return m(r);default:return}};return(0,T.jsxs)(J,{children:[g?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("input",{typeof:"text",name:"editedName",value:u,onChange:y}),(0,T.jsx)("input",{typeof:"text",name:"editedNumber",value:f,onChange:y})]}):(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)(R,{children:[(0,T.jsxs)("span",{children:[t,":"]}),(0,T.jsx)("span",{children:r})]})}),(0,T.jsxs)($,{children:[(0,T.jsx)(U,{onClick:function(){if(g){if(t===u&&r===f)return void Z((function(n){return!n}));if(C.find((function(n){return n.name.toLowerCase()===u.toLowerCase()&&n.id!==e})))return void D.ZP.error("Name ".concat(u," exist"));P({id:e,name:u,number:f}),D.ZP.success("Contact is edit successfully!",{duration:2e3,position:"top-center"})}Z((function(n){return!n}))},children:g?"Save":"Edit"}),(0,T.jsx)(U,{disabled:i,onClick:function(){k(e),d(e)},children:w&&i?"Deleting...":"Delete"})]})]})},H=w.ZP.ul(b||(b=(0,C.Z)([""]))),K=function(n){var e=n.contacts;return(0,T.jsx)(H,{children:e.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,T.jsx)(G,{id:e,name:t,number:r},e)}))})},O=w.ZP.label(g||(g=(0,C.Z)(["\n  display: block;\n"]))),Q=w.ZP.input(Z||(Z=(0,C.Z)(["\n  margin-left: 20px;\n  margin-top: 20px;\n  width: 350px;\n  height: 30px;\n  border-radius: 5px;\n  border: none;\n"]))),V=function(n){var e=n.value,t=n.onChange;return(0,T.jsxs)(O,{children:["Filter:",(0,T.jsx)(Q,{name:"filter",type:"text",value:e,onChange:t})]})},W=t(7635),X=function(){var n=(0,j.I0)(),e=E(),t=e.contacts,r=e.filter,o=e.loader,a=e.setFilter;(0,v.useEffect)((function(){n(q.mh.getContacts())}),[n]);var i=function(){if(0!==t.length&&"string"!==typeof t){var n=r.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}return[]}();return(0,T.jsxs)(k,{children:[(0,T.jsx)(y,{children:"Phonebook"}),(0,T.jsx)(B,{}),(0,T.jsx)(P,{children:"Contacts"}),(0,T.jsxs)("div",{children:[(0,T.jsx)(V,{value:r,onChange:function(n){var e=n.target.value;a(e)}}),(0,T.jsxs)(L,{children:["Total contacts: ",i.length]})]}),(0,T.jsx)(F,{children:o?(0,T.jsx)(W.Z,{color:"rgba(77, 52, 220, 1)"}):(0,T.jsx)(K,{contacts:i})})]})}}}]);
//# sourceMappingURL=305.a09baf48.chunk.js.map