(this.webpackJsonplab31=this.webpackJsonplab31||[]).push([[0],{104:function(e,t){},106:function(e,t){},143:function(e,t){},144:function(e,t){},200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(93),r=n.n(c),u=n(9),o=n(29),i=n.n(o),m=n(94),s=n.n(m),E=l.a.createContext();var b=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)({}),m=Object(u.a)(o,2),b=m[0],f=m[1],g=function(e,t){try{var n=s.a.verify(e,"Shushhhhh");i.a.save("auth",e),r(n),f(t)}catch(a){r(!1),console.error("token Invalid!!!")}};Object(a.useEffect)((function(){var e=i.a.load("auth"),t=new URLSearchParams(window.location.search).get("token")||e||null;g(t)}),[]);var v={logState:c,logIn:function(e,t){console.log("in logIn",e,t),fetch("".concat("http://localhost:3333","/signin"),{method:"POST",mode:"cors",cache:"no-cache",headers:new Headers({Authorization:"Basic ".concat(btoa("".concat(e,":").concat(t)))})}).then((function(e){return e.text()})).then((function(t){return g(t,e)})).catch(console.error)},logOut:function(){r(!1),f({}),i.a.save("auth",null)},user:b};return l.a.createElement(E.Provider,{value:v},e.children)},f=function(){var e=Object(a.useContext)(E);console.log("aha",e);var t;return t=e.logState?l.a.createElement("button",{onClick:e.logOut},"Log Out!"):l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.logIn(t.target.name.value,t.target.password.value),t.target.reset()}},l.a.createElement("label",null,"UserName: ",l.a.createElement("input",{name:"name"})),l.a.createElement("label",null,"Password: ",l.a.createElement("input",{type:"password",name:"password"})),l.a.createElement("button",{type:"submit"}," LogIn ")),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null," Death Note !"),t)},g=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"DanTe!! Peace Out !!"))},v=l.a.createContext();var h=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(1),i=Object(u.a)(o,2),m=i[0],s=i[1],E=Object(a.useState)(0),b=Object(u.a)(E,2),f=b[0],g=b[1],h=Object(a.useState)(1),d=Object(u.a)(h,2),p=d[0],O=d[1],j={changePre:function(){var e=f-m;g(e),O(e=p-m)},limit:p,changeNext:function(){var e=p;g(e),O(e=p+m)},next:f,viewNumber:c,changeViewNumber:r,changeFun:function(e){r(e)},increaseSize:function(){var e=m+1;s(e),O(e)},decreaseSize:function(){if(m>1){var e=m-1;s(e),O(e)}},inPage:m};return l.a.createElement(v.Provider,{value:j},e.children)},d=function(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useContext)(v),o=Object(a.useContext)(E);Object(a.useEffect)((function(){var e=Object.keys(n).length.toString();e>0&&(document.title="".concat(e," Todo left")),r.changeFun(Object.keys(n).length)}));var i,m;return r.next>=1&&(i=l.a.createElement("button",{onClick:r.changePre}," Previous Page ")),Object.keys(n).length>r.inPage&&Object.keys(n).length!==r.limit&&(m=l.a.createElement("button",{onClick:r.changeNext}," Next Page ")),o.logState?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h2",null," Total: ",r.viewNumber," -=- Show Per Page ",r.inPage," "),l.a.createElement("button",{onClick:r.increaseSize},"+"),l.a.createElement("button",{onClick:r.decreaseSize},"-"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.name.value,a=e.target.note.value,l=e.target.status.value,r=e.target.difficulty.value,u=Object.keys(n).length.toString(),o=Object.assign({},n);o[u]={id:u,name:t,note:a,status:l,diff:r},c(o),e.target.reset()}},l.a.createElement("label",null,"Name :",l.a.createElement("input",{name:"name"})),l.a.createElement("br",null),l.a.createElement("label",null,"Note :",l.a.createElement("textarea",{name:"note"})),l.a.createElement("br",null),l.a.createElement("label",null,"complete",l.a.createElement("input",{type:"radio",name:"status",value:"complete"})),l.a.createElement("label",null,"Incomplete",l.a.createElement("input",{type:"radio",name:"status",value:"Incomplete"})),l.a.createElement("br",null),l.a.createElement("label",null,"difficulty:",l.a.createElement("select",{name:"difficulty"},l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5"},"5"))),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",id:"sub"},"Submit"))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("h2",null,"ToDo List:"),i,m,l.a.createElement("ul",null,Object.keys(n).map((function(e,t){if(t>=r.next&&t<r.limit)return l.a.createElement("fieldset",{key:n[e].id}," ",l.a.createElement("legend",null,"Name: ",n[e].name),l.a.createElement("p",null," ToDo: ",n[e].note," "),l.a.createElement("li",{onClick:function(){return function(e){e=e.toString();var t=Object.assign({},n);"complete"===t[e].status?t[e].status="incomplete":t[e].status="complete",c(t)}(t)},className:n[e].status}," Status: ",n[e].status," "),l.a.createElement("li",null," Difficulty: ",n[e].diff," "),l.a.createElement("button",{onClick:function(){return function(e){e=e.toString();var t=Object.assign({},n);delete t[e],c(t)}(n[e].id)}},"DeleTe!"))}))))):null},p=(n(200),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null,l.a.createElement(h,null,l.a.createElement(f,null),l.a.createElement(d,null),l.a.createElement(g,null))))});n(201);r.a.render(l.a.createElement((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null))}),null),document.getElementById("root"))},95:function(e,t,n){e.exports=n(202)}},[[95,1,2]]]);
//# sourceMappingURL=main.c2287a44.chunk.js.map