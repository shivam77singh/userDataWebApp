(this["webpackJsonpuser-app"]=this["webpackJsonpuser-app"]||[]).push([[0],{59:function(e,t,s){},60:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(25),r=s.n(n),i=s(14),l=s.n(i),j=s(26),o=s(8),b=s(9),u=s(2),d=s(27),h=s.n(d),O=s(0);var p=function(e){var t=e.data,s=t.first_name,c=t.last_name,a=t.age,n=t.web,r=t.email,i=t.id;return Object(O.jsxs)("tr",{style:{cursor:"pointer"},children:[Object(O.jsx)("th",{scope:"row",children:i}),Object(O.jsx)("td",{children:Object(O.jsx)(b.b,{to:"/userDataWebApp/".concat(i),children:s})}),Object(O.jsx)("td",{children:c}),Object(O.jsx)("td",{children:a}),Object(O.jsx)("td",{children:r}),Object(O.jsx)("td",{children:Object(O.jsx)("a",{target:"_blank",href:n,children:n})})]})};var x=function(e){var t=e.setPageNumber,s=e.totalUsers,a=e.currentPage,n=Object(c.useState)([1,2,3,4,5,6,7,8,9,10]),r=Object(o.a)(n,2),i=r[0],l=r[1],j=Object(c.useState)(!0),b=Object(o.a)(j,2),u=b[0],d=b[1],h=Object(c.useState)(!1),p=Object(o.a)(h,2),x=p[0],f=p[1];Object(c.useEffect)((function(){1===i[0]?d(!0):d(!1),i[9]===s/10?f(!0):f(!1)}),[i]);for(var m=[],g=1;g<=s;g++)m.push(g);return Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{className:"pagination",children:[Object(O.jsx)("li",{className:"page-item",onClick:function(){var e=i[0]-1,t=e-10;l(m.slice(t,e))},style:u?{pointerEvents:"none",cursor:"pointer"}:{cursor:"pointer"},children:Object(O.jsx)("a",{className:"page-link",children:Object(O.jsx)("i",{className:"fas fa-chevron-left"})})}),i.map((function(e){return Object(O.jsx)("li",{className:"page-item",onClick:function(){t(e)},children:Object(O.jsx)("a",{href:"#",className:"page-link",style:a==e?{backgroundColor:"#ceceff"}:{},children:e})},e)})),Object(O.jsx)("li",{className:"page-item",onClick:function(){var e=Math.min(s,i[9]+10),t=e-10;l(m.slice(t,e))},style:x?{pointerEvents:"none",cursor:"pointer"}:{cursor:"pointer"},children:Object(O.jsx)("a",{className:"page-link",children:Object(O.jsx)("i",{className:"fas fa-chevron-right"})})})]})})};var f=function(e){var t=e.currentUsers,s=e.setPageNumber,a=e.totalUsers,n=e.currentPage,r=Object(c.useState)({id:0,first_name:0,last_name:0,age:0,email:0,web:0}),i=Object(o.a)(r,2),l=i[0],j=i[1],b=Object(c.useState)(""),u=Object(o.a)(b,2),d=u[0],h=u[1],f=Object(c.useState)([]),m=Object(o.a)(f,2),g=m[0],y=m[1],v=function(e){var t=e.type,s=Object.assign({},l);for(var c in 0==s[t]?s[t]=1:1==s[t]?s[t]=-1:s[t]=1,s)c!=t&&(s[c]=0);j(s)};return Object(c.useEffect)((function(){!function(){var e=Object.assign([],g),t=function(t){-1==l[t]?e.sort((function(e,s){return e[t]<s[t]?-1:e[t]>s[t]?1:0})):1==l[t]&&e.sort((function(e,s){return e[t]<s[t]?1:e[t]>s[t]?-1:0}))};for(var s in l)t(s);y(e)}()}),[l,t]),Object(c.useEffect)((function(){var e=t.filter((function(e){return e.first_name.toLowerCase().startsWith(d)||e.last_name.toLowerCase().startsWith(d)}));y(e)}),[d,t]),Object(O.jsxs)("div",{className:"container mt-5",children:[Object(O.jsx)("h2",{children:"Users"}),Object(O.jsxs)("div",{className:"input-group",style:{width:"40%",minWidth:"400px"},children:[Object(O.jsx)("input",{type:"search",className:"form-control rounded",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon",value:d,onChange:function(e){return h(e.target.value.trim())}}),Object(O.jsx)("button",{type:"button",className:"btn btn-outline-primary",children:"search"})]}),Object(O.jsxs)("div",{className:"users",children:[Object(O.jsxs)("table",{className:"table table-striped table-hover",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsxs)("th",{scope:"col",children:["#"," ",Object(O.jsx)("span",{onClick:function(){return v({type:"id"})},children:Object(O.jsx)("i",{className:"fas fa-sort"})})]}),Object(O.jsxs)("th",{scope:"col",children:["First Name"," ",Object(O.jsx)("span",{onClick:function(){return v({type:"first_name"})},children:Object(O.jsx)("i",{className:"fas fa-sort"})})]}),Object(O.jsxs)("th",{scope:"col",children:["Last Name"," ",Object(O.jsx)("span",{onClick:function(){return v({type:"last_name"})},children:Object(O.jsx)("i",{className:"fas fa-sort"})})]}),Object(O.jsxs)("th",{scope:"col",children:["Age"," ",Object(O.jsx)("span",{onClick:function(){return v({type:"age"})},children:Object(O.jsx)("i",{className:"fas fa-sort"})})]}),Object(O.jsxs)("th",{scope:"col",children:["Email"," ",Object(O.jsx)("span",{onClick:function(){return v({type:"email"})},children:Object(O.jsx)("i",{className:"fas fa-sort"})})]}),Object(O.jsxs)("th",{scope:"col",children:["Web"," ",Object(O.jsx)("span",{onClick:function(){return v({type:"web"})},children:Object(O.jsx)("i",{className:"fas fa-sort"})})]})]})}),Object(O.jsx)("tbody",{children:g.map((function(e){return Object(O.jsx)(p,{data:e},e.id)}))})]}),Object(O.jsx)(x,{setPageNumber:s,totalUsers:a,currentPage:n})]})]})};var m=function(e){var t=e.currentUsers,s=Object(u.f)().userId,c=t.find((function(e){return e.id==s})),a={fontWeight:"bold"};return Object(O.jsx)(O.Fragment,{children:c?Object(O.jsx)("div",{className:"container mt-5",children:Object(O.jsxs)("ul",{class:"list-group",children:[Object(O.jsxs)("li",{class:"list-group-item active",children:[Object(O.jsx)(b.b,{to:"userDataWebApp/",children:Object(O.jsx)("span",{className:"mr-5",style:{color:"white"},children:Object(O.jsx)("i",{class:"fas fa-arrow-left"})})}),Object(O.jsxs)("span",{children:[" ","Details:"," ",Object(O.jsxs)("span",{style:a,children:[c.first_name," ",c.last_name]})]})]}),Object(O.jsxs)("li",{class:"list-group-item",children:["id: ",Object(O.jsx)("span",{style:a,children:c.id})]}),Object(O.jsxs)("li",{class:"list-group-item",children:["first_name: ",Object(O.jsx)("span",{style:a,children:c.first_name})]}),Object(O.jsxs)("li",{class:"list-group-item",children:["last_name: ",Object(O.jsx)("span",{style:a,children:c.last_name})," "]}),Object(O.jsxs)("li",{class:"list-group-item",children:["age: ",Object(O.jsxs)("span",{style:a,children:[" ",c.age]})]}),Object(O.jsxs)("li",{class:"list-group-item",children:["email: ",Object(O.jsx)("span",{style:a,children:c.email})," "]}),Object(O.jsxs)("li",{class:"list-group-item",children:["web:"," ",Object(O.jsx)("span",{style:a,children:Object(O.jsxs)("a",{href:c.web,target:"_blank",children:[" ",c.web]})})]}),Object(O.jsxs)("li",{class:"list-group-item",children:["company_name:"," ",Object(O.jsx)("span",{style:a,children:c.company_name})]}),Object(O.jsxs)("li",{class:"list-group-item",children:["city: ",Object(O.jsx)("span",{style:a,children:c.city})]}),Object(O.jsxs)("li",{class:"list-group-item",children:["state: ",Object(O.jsx)("span",{style:a,children:c.state})]}),Object(O.jsxs)("li",{class:"list-group-item",children:["zip: ",Object(O.jsx)("span",{style:a,children:c.zip})]})]})}):Object(O.jsx)("h1",{})})};s(59);var g=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)([]),r=Object(o.a)(n,2),i=r[0],d=r[1],p=Object(c.useState)(1),x=Object(o.a)(p,2),g=x[0],y=x[1];Object(c.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(!0),h.a.get("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json").then((function(e){d(e.data),a(!1)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=10*g,N=v-10,_=i.slice(N,v),k=i.length;return Object(O.jsx)(b.a,{children:s?Object(O.jsx)("h3",{className:"text-center",children:"Loading..."}):Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"/userDataWebApp/",exact:!0,children:Object(O.jsx)(f,{currentUsers:_,setPageNumber:function(e){y(e)},totalUsers:k,currentPage:g})}),Object(O.jsx)(u.a,{path:"/userDataWebApp/:userId",children:Object(O.jsx)(m,{currentUsers:_})})]})})};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.53ac6d2d.chunk.js.map