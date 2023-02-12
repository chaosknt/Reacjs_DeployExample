(this["webpackJsonpgh-pages-list-comparer"]=this["webpackJsonpgh-pages-list-comparer"]||[]).push([[0],{10:function(e,t){},12:function(e,t){["xlsx","xlsb","xlsm","xls","xml","csv","txt","ods","fods","uos","sylk","dif","dbf","prn","qpw","123","wb*","wq*","html","htm"].map((function(e){return"."+e})).join(",")},22:function(e,t){},23:function(e,t){},25:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(11),r=c.n(n),l=c(5),i=c(1),a=c(3),j=c(4),o=c.n(j),d=function(e){for(var t=[],c=o.a.utils.decode_range(e).e.c+1,s=0;s<c;++s)t[s]={name:o.a.utils.encode_col(s),key:s};return t},b=c(12),O=c(0),h=function(){var e=Object(s.useState)({listOneKey:"listOne",listTwoKey:"listTwo"}),t=Object(a.a)(e,2),c=t[0],n=t[1],r=c.listOneKey,j=c.listTwoKey,h=Object(s.useState)({display:!1,message:"Display"}),u=Object(a.a)(h,2),x=u[0],m=u[1],f=Object(s.useState)({file:{},data:[],cols:[]}),p=Object(a.a)(f,2),g=p[0],y=p[1],N=Object(s.useState)({listOne:[],listTwo:[]}),v=Object(a.a)(N,2),w=v[0],L=v[1],T=w.listOne,S=w.listTwo,k=Object(s.useState)({equal:{},notEqual:{},missingInListTwoFromListOne:{},missingInListOneFromListTwo:{}}),K=Object(a.a)(k,2),E=K[0],F=K[1],q=E.equal,I=E.notEqual,A=E.missingInListTwoFromListOne,B=E.missingInListOneFromListTwo;Object(s.useEffect)((function(){C()}),[g]);var C=function(e){try{var t=new FileReader,c=!!t.readAsBinaryString;t.onload=function(e){var t=e.target.result,s=o.a.read(t,{type:c?"binary":"array",bookVBA:!0}),n=s.SheetNames[0],r=s.Sheets[n],l=o.a.utils.sheet_to_json(r);y(Object(i.a)(Object(i.a)({},g),{},{data:l,cols:d(r["!ref"])})),_()},c?t.readAsBinaryString(g.file):t.readAsArrayBuffer(g.file)}catch(s){console.log(s)}},_=function(){var e=[],t=[];g.data.forEach((function(c){e.push(c[r]),t.push(c[j])})),L(Object(i.a)(Object(i.a)({},w),{},{listOne:e,listTwo:t})),e=e.filter((function(e){return void 0!=e})),t=t.filter((function(e){return void 0!=e})),e=e.reduce((function(e,t){return e[t]=e[t]+1||1,e}),{}),t=t.reduce((function(e,t){return e[t]=e[t]+1||1,e}),{}),e=Object.entries(e).sort((function(e,t){return e[1]-t[1]})).reduce((function(e,t){var c=Object(a.a)(t,2),s=c[0],n=c[1];return Object(i.a)(Object(i.a)({},e),{},Object(l.a)({},s,n))}),{}),t=Object.entries(t).sort((function(e,t){return e[1]-t[1]})).reduce((function(e,t){var c=Object(a.a)(t,2),s=c[0],n=c[1];return Object(i.a)(Object(i.a)({},e),{},Object(l.a)({},s,n))}),{});var c=[],s=[],n=[],o=[],d=[],b=[];Object.keys(e).forEach((function(s){t[s]||c.push(s),e[s]&&t[s]&&e[s]!=t[s]&&n.push(s),e[s]&&t[s]&&e[s]==t[s]&&o.push(s)})),Object.keys(t).forEach((function(t){e[t]||s.push(t)})),n.forEach((function(c){d.push({key:c,amountListOne:e[c],amountListTwo:t[c]})})),o.forEach((function(c){b.push({key:c,amountListOne:e[c],amountListTwo:t[c]})})),F(Object(i.a)(Object(i.a)({},E),{},{equal:b,notEqual:d,missingInListTwoFromListOne:c,missingInListOneFromListTwo:s}))};return Object(O.jsxs)("div",{className:"ml-5",children:[Object(O.jsx)("h1",{className:"mt-5",children:"Count values between lists "}),Object(O.jsxs)("p",{children:["The file must cointains two lists named  ",Object(O.jsx)("strong",{children:"listOne"})," and ",Object(O.jsx)("strong",{children:"listTwo"})]}),Object(O.jsx)("div",{className:"d-flex ",children:Object(O.jsx)("div",{className:"col-lg-4",children:Object(O.jsx)("input",{type:"file",className:"form-control",id:"file",accept:b.SheetJSFT,onChange:function(e){var t=e.target.files;t&&t[0]&&y(Object(i.a)(Object(i.a)({},g),{},{file:t[0]}))}})})}),Object(O.jsxs)("div",{className:"mt-5 d-none",children:[Object(O.jsxs)("p",{className:"",children:[Object(O.jsx)("label",{children:"List one"}),Object(O.jsx)("input",{type:"text",className:"form-control col-lg-2",value:r,onChange:function(e){return n(Object(i.a)(Object(i.a)({},c),{},{listOneKey:e.target.value}))}})]}),Object(O.jsxs)("p",{className:"mt-2",children:[Object(O.jsx)("label",{children:"List one"}),Object(O.jsx)("input",{type:"text",className:"form-control col-lg-2",value:j,onChange:function(e){return n(Object(i.a)(Object(i.a)({},c),{},{listTwoKey:e.target.value}))}})]})]}),Object(O.jsxs)("div",{className:"col-lg-12 mt-5",children:[Object(O.jsx)("h3",{className:"mt-5 mb-3",children:"Uploaded Items"}),Object(O.jsx)("button",{className:"btn btn-info",onClick:function(){return m(Object(i.a)(Object(i.a)({},x),{},{display:!x.display,message:x.display?"Display":"Hide"}))},children:x.message}),x.display&&Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-lg-5  text-center",children:[Object(O.jsx)("h4",{children:"List One"}),Object(O.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{className:"text-center ",children:Object(O.jsx)("th",{scope:"col",children:"Key"})})}),Object(O.jsx)("tbody",{children:T.length>0?T.map((function(e,t){return Object(O.jsx)("tr",{className:"text-center",children:Object(O.jsx)("td",{children:e})})})):Object(O.jsx)("tr",{})})]})]}),Object(O.jsxs)("div",{className:"col-lg-5  text-center",children:[Object(O.jsx)("h4",{children:"List One"}),Object(O.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{className:"text-center ",children:Object(O.jsx)("th",{scope:"col",children:"Key"})})}),Object(O.jsx)("tbody",{children:S.length>0?S.map((function(e,t){return Object(O.jsx)("tr",{className:"text-center",children:Object(O.jsx)("td",{children:e})})})):Object(O.jsx)("tr",{})})]})]})]})]}),Object(O.jsxs)("div",{className:"col-lg-12  mt-5 mb-5",children:[Object(O.jsx)("h3",{children:"Summary"}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-lg-5 text-center",children:[Object(O.jsx)("h3",{children:"Result"}),Object(O.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{className:"text-center ",children:[Object(O.jsx)("th",{scope:"col",children:"Key"}),Object(O.jsx)("th",{scope:"col",children:"Amount List One"}),Object(O.jsx)("th",{scope:"col",children:"Amount List Two"})]})}),Object(O.jsxs)("tbody",{children:[I.length>0?I.map((function(e,t){return Object(O.jsxs)("tr",{className:"text-center text-danger",children:[Object(O.jsx)("td",{children:e.key}),Object(O.jsx)("td",{children:e.amountListOne}),Object(O.jsx)("td",{children:e.amountListTwo})]})})):Object(O.jsx)("tr",{children:Object(O.jsx)("td",{colSpan:3,children:"No data found"})}),q.length>0?q.map((function(e,t){return Object(O.jsxs)("tr",{className:"text-center  text-success",children:[Object(O.jsx)("td",{children:e.key}),Object(O.jsx)("td",{children:e.amountListOne}),Object(O.jsx)("td",{children:e.amountListTwo})]})})):""]})]})]}),Object(O.jsxs)("div",{className:"col-lg-3  text-center",children:[Object(O.jsx)("h3",{children:"Missing in List Two (from List one)"}),Object(O.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{className:"text-center ",children:Object(O.jsx)("th",{scope:"col",children:"Key"})})}),Object(O.jsx)("tbody",{children:A.length>0?A.map((function(e,t){return Object(O.jsx)("tr",{className:"text-center text-danger",children:Object(O.jsx)("td",{children:e})})})):Object(O.jsx)("tr",{children:Object(O.jsx)("td",{children:"no data found"})})})]})]}),Object(O.jsxs)("div",{className:"col-lg-3  text-center ml-3",children:[Object(O.jsx)("h3",{children:"Missing in List One (From list Two)"}),Object(O.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{className:"text-center ",children:Object(O.jsx)("th",{scope:"col",children:"Key"})})}),Object(O.jsx)("tbody",{children:B.length>0?B.map((function(e,t){return Object(O.jsx)("tr",{className:"text-center text-danger",children:Object(O.jsx)("td",{children:e})})})):Object(O.jsx)("tr",{children:Object(O.jsx)("td",{children:"No data found"})})})]})]})]})]})]})},u=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(h,{})})};var x=function(){return Object(O.jsx)(u,{})};r.a.render(Object(O.jsx)(x,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.1ceebd33.chunk.js.map