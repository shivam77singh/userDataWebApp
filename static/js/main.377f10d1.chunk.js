(this["webpackJsonpuser-app"]=this["webpackJsonpuser-app"]||[]).push([[0],{59:function(e,t,s){},60:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(25),r=s.n(n),i=s(14),l=s.n(i),j=s(26),o=s(4),b=s(9),u=s(2),O=s(27),h=s.n(O),d=s(0);var m,f=function(e){var t=e.data,s=t.first_name,a=t.last_name,c=t.age,n=t.web,r=t.email,i=t.id;return Object(d.jsxs)("tr",{style:{cursor:"pointer"},children:[Object(d.jsx)("td",{children:Object(d.jsx)(b.b,{to:"/userDataWebApp/".concat(i),children:s})}),Object(d.jsx)("td",{children:a}),Object(d.jsx)("td",{children:c}),Object(d.jsx)("td",{children:r}),Object(d.jsx)("td",{children:Object(d.jsx)("a",{target:"_blank",href:n,children:n})})]})},p=1;var x=function(e){var t=e.setPageNumber,s=e.totalUsers,c=e.currentPage,n=Object(a.useState)([]),r=Object(o.a)(n,2),i=r[0],l=r[1],j=Object(a.useState)(!0),b=Object(o.a)(j,2),u=b[0],O=b[1],h=Object(a.useState)(!1),f=Object(o.a)(h,2),x=f[0],N=f[1],g=Math.ceil(s/10),y=function(){for(var e=[],t=p;t<=m;t++)e.push(t);O(1==p),N(m==g),l(e)};return Object(a.useEffect)((function(){m=Math.min(10,g),p=1,y()}),[s]),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"pagination",children:[Object(d.jsx)("li",{className:"page-item",onClick:function(){m=p-1,p=Math.max(1,m-9),y()},style:u?{pointerEvents:"none",cursor:"pointer"}:{cursor:"pointer"},children:Object(d.jsx)("a",{className:"page-link",children:Object(d.jsx)("i",{className:"fas fa-chevron-left"})})}),i.map((function(e){return Object(d.jsx)("li",{className:"page-item",onClick:function(){t(e)},children:Object(d.jsx)("a",{href:"#",className:"page-link",style:c==e?{backgroundColor:"#ceceff"}:{},children:e})},e)})),Object(d.jsx)("li",{className:"page-item",onClick:function(){p=m+1,m=Math.min(g,p+9),y()},style:x?{pointerEvents:"none",cursor:"pointer"}:{cursor:"pointer"},children:Object(d.jsx)("a",{className:"page-link",children:Object(d.jsx)("i",{className:"fas fa-chevron-right"})})})]})})};var N=function(e){var t=e.currentUsers,s=e.setPageNumber,c=e.totalUsers,n=e.currentPage,r=e.handleInputChange,i=Object(a.useState)({}),l=Object(o.a)(i,2),j=l[0],b=l[1],u=Object(a.useState)(""),O=Object(o.a)(u,2),h=O[0],m=O[1],p=Object(a.useState)([]),N=Object(o.a)(p,2),g=N[0],y=N[1];Object(a.useEffect)((function(){b({id:1,first_name:0,last_name:0,age:0,email:0,web:0})}),[c]);var v=function(e){var t=e.type,s=Object.assign({},j);for(var a in 0==s[t]?s[t]=1:1==s[t]?s[t]=-1:s[t]=1,s)a!=t&&(s[a]=0);b(s)};return Object(a.useEffect)((function(){!function(){var e=Object.assign([],g),t=function(t){1==j[t]?e.sort((function(e,s){return e[t]<s[t]?-1:e[t]>s[t]?1:0})):-1==j[t]&&e.sort((function(e,s){return e[t]<s[t]?1:e[t]>s[t]?-1:0}))};for(var s in j)t(s);y(e)}()}),[j,t]),Object(a.useEffect)((function(){!function(){var e=t.filter((function(e){return e.first_name.toLowerCase().startsWith(h)||e.last_name.toLowerCase().startsWith(h)}));y(e)}(),r(h)}),[h,t]),Object(d.jsxs)("div",{className:"container mt-5",children:[Object(d.jsx)("h2",{children:"Users"}),Object(d.jsxs)("div",{className:"input-group",style:{width:"40%",minWidth:"400px"},children:[Object(d.jsx)("input",{type:"search",className:"form-control rounded",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon",value:h,onChange:function(e){m(e.target.value.trim())}}),Object(d.jsx)("button",{type:"button",className:"btn btn-outline-primary",children:"search"})]}),Object(d.jsxs)("div",{className:"users",children:[Object(d.jsxs)("table",{className:"table table-striped table-hover",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{scope:"col",style:{minWidth:"120px"},children:["First Name"," ",Object(d.jsx)("span",{onClick:function(){return v({type:"first_name"})},children:0==j.first_name?Object(d.jsx)("i",{className:"fas fa-sort"}):1==j.first_name?Object(d.jsx)("i",{className:"fas fa-sort-up"}):Object(d.jsx)("i",{className:"fas fa-sort-down"})})]}),Object(d.jsxs)("th",{scope:"col",style:{minWidth:"120px"},children:["Last Name"," ",Object(d.jsx)("span",{onClick:function(){return v({type:"last_name"})},children:0==j.last_name?Object(d.jsx)("i",{className:"fas fa-sort"}):1==j.last_name?Object(d.jsx)("i",{className:"fas fa-sort-up"}):Object(d.jsx)("i",{className:"fas fa-sort-down"})})]}),Object(d.jsxs)("th",{scope:"col",style:{minWidth:"110px"},children:["Age"," ",Object(d.jsx)("span",{onClick:function(){return v({type:"age"})},children:0==j.age?Object(d.jsx)("i",{className:"fas fa-sort"}):1==j.age?Object(d.jsx)("i",{className:"fas fa-sort-up"}):Object(d.jsx)("i",{className:"fas fa-sort-down"})})]}),Object(d.jsxs)("th",{scope:"col",style:{minWidth:"110px"},children:["Email"," ",Object(d.jsx)("span",{onClick:function(){return v({type:"email"})},children:0==j.email?Object(d.jsx)("i",{className:"fas fa-sort"}):1==j.email?Object(d.jsx)("i",{className:"fas fa-sort-up"}):Object(d.jsx)("i",{className:"fas fa-sort-down"})})]}),Object(d.jsxs)("th",{scope:"col",style:{minWidth:"110px"},children:["Web"," ",Object(d.jsx)("span",{onClick:function(){return v({type:"web"})},children:0==j.web?Object(d.jsx)("i",{className:"fas fa-sort"}):1==j.web?Object(d.jsx)("i",{className:"fas fa-sort-up"}):Object(d.jsx)("i",{className:"fas fa-sort-down"})})]})]})}),Object(d.jsx)("tbody",{children:g.map((function(e){return Object(d.jsx)(f,{data:e},e.id)}))})]}),Object(d.jsx)(x,{setPageNumber:s,totalUsers:c,currentPage:n})]})]})};var g=function(e){var t=e.usersData,s=Object(u.f)().userId,a=t.find((function(e){return e.id==s})),c={fontWeight:"bold"};return Object(d.jsx)(d.Fragment,{children:a?Object(d.jsx)("div",{className:"container mt-5",children:Object(d.jsxs)("ul",{className:"list-group",children:[Object(d.jsxs)("li",{className:"list-group-item active",children:[Object(d.jsx)(b.b,{to:"/userDataWebApp/",children:Object(d.jsx)("span",{className:"mr-5",style:{color:"white"},children:Object(d.jsx)("i",{className:"fas fa-arrow-left"})})}),Object(d.jsxs)("span",{children:[" ","Details:"," ",Object(d.jsxs)("span",{style:c,children:[a.first_name," ",a.last_name]})]})]}),Object(d.jsxs)("li",{className:"list-group-item",children:["First Name: ",Object(d.jsx)("span",{style:c,children:a.first_name})]}),Object(d.jsxs)("li",{className:"list-group-item",children:["Last Name: ",Object(d.jsx)("span",{style:c,children:a.last_name})," "]}),Object(d.jsxs)("li",{className:"list-group-item",children:["Company Name:"," ",Object(d.jsx)("span",{style:c,children:a.company_name})]}),Object(d.jsxs)("li",{className:"list-group-item",children:["City: ",Object(d.jsx)("span",{style:c,children:a.city})]}),Object(d.jsxs)("li",{className:"list-group-item",children:["State: ",Object(d.jsx)("span",{style:c,children:a.state})]}),Object(d.jsxs)("li",{className:"list-group-item",children:["Zip: ",Object(d.jsx)("span",{style:c,children:a.zip})]}),Object(d.jsxs)("li",{className:"list-group-item",children:["Email: ",Object(d.jsx)("span",{style:c,children:a.email})," "]}),Object(d.jsxs)("li",{className:"list-group-item",children:["Web:"," ",Object(d.jsx)("span",{style:c,children:Object(d.jsxs)("a",{href:a.web,target:"_blank",children:[" ",a.web]})})]}),Object(d.jsxs)("li",{className:"list-group-item",children:["Age: ",Object(d.jsxs)("span",{style:c,children:[" ",a.age]})]})]})}):Object(d.jsx)("h1",{})})};s(59);var y=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)([]),r=Object(o.a)(n,2),i=r[0],O=r[1],m=Object(a.useState)(1),f=Object(o.a)(m,2),p=f[0],x=f[1],y=Object(a.useState)([]),v=Object(o.a)(y,2),w=v[0],_=v[1],C=Object(a.useState)(""),k=Object(o.a)(C,2),W=k[0],S=k[1];Object(a.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(!0),h.a.get("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json").then((function(e){O(e.data),c(!1),_(e.data)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var E=10*p,P=E-10,D=w.slice(P,E),L=w.length;return Object(a.useEffect)((function(){_(i.filter((function(e){return e.first_name.toLowerCase().startsWith(W)||e.last_name.toLowerCase().startsWith(W)}))),W&&x(1)}),[W]),Object(d.jsx)(b.a,{children:s?Object(d.jsx)("h3",{className:"text-center",children:"Loading..."}):Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/userDataWebApp/",exact:!0,children:Object(d.jsx)(N,{currentUsers:D,setPageNumber:function(e){x(e)},totalUsers:L,currentPage:p,handleInputChange:function(e){S(e)}})}),Object(d.jsx)(u.a,{path:"/userDataWebApp/:userId",children:Object(d.jsx)(g,{usersData:i})})]})})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.377f10d1.chunk.js.map