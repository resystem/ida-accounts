(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"5/k9":function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return h}));var a=n("kD0k"),r=n.n(a),o=(n("ls82"),n("/S4K")),u=n("YwZP"),s=n("u661"),c={"user/wrong-password":"Senha incorreta","user/not-found":"Usuário não encontrado"},i="user/wrong-password",p="user/not-found";function l(e){var t=e.ida,n=e.token,a=e.user;window.localStorage.setItem("ida@id",t),window.localStorage.setItem("ida@token",n);var r=window.localStorage.getItem("ida@users")||"{}",o=JSON.parse(r).users||[],u=o.findIndex((function(e){return e.ida===t})),s={ida:t,token:n,user:a};-1!==u?o.splice(u,1,s):o.push(s),window.localStorage.setItem("ida@users",JSON.stringify({users:o}))}var d=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,u,d,f,m,h,w,b,g,v,k,x;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,o=t.setErrors,u=t.setLoading,d=t.appSource,u(!0),o({}),e.prev=3,e.next=6,Object(s.f)({username:n,password:a});case 6:f=e.sent,e.next=23;break;case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0.response&&e.t0.response.data&&e.t0.response.data.error)){e.next=21;break}m=e.t0.response.data.error,e.t1=m,e.next=e.t1===i?16:e.t1===p?18:20;break;case 16:return o({password:c[m]}),e.abrupt("return");case 18:return o({username:c[m]}),e.abrupt("return");case 20:return e.abrupt("return");case 21:throw u(!1),e.t0;case 23:f.data&&(console.log(f),h=f.data,w=h.ida,b=h.token,g=h.username,v=h.phone,k=h.email,x=JSON.stringify({username:g,ida:w,token:b,phone:v,email:k}),l({ida:w,token:b,user:{username:g}}),d&&d.postMessage(x,"*")),o({}),u(!1);case 26:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,c,i,p,l,d,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.ida,o=t.token,c=t.appSource,e.prev=1,e.next=4,Object(s.h)(o);case 4:i=e.sent,e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(1),Object(u.navigate)("/signin/auth",{state:{username:n}}),e.t0;case 11:p=i.data,l=p.email,d=p.phone,f=JSON.stringify({ida:a,token:o,username:n,email:l,phone:d}),console.log("has app source?",!!c),c&&c.postMessage(f,"*");case 15:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.email,a=t.setEmailError,/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n)){e.next=5;break}return a("Informe um e-mail válido"),e.abrupt("return");case 5:return a(""),e.prev=6,e.next=9,Object(s.a)(n);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(6),console.log(e.t0),e.t0;case 15:Object(u.navigate)("/forget-password/sent-email",{state:{email:n}});case 16:case"end":return e.stop()}}),e,null,[[6,11]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.phone,a=t.setValidPhone,r=void 0,r=n.replace(/\W/g,""),o=/^\+[0-9]{9,}$/.test("+55"+r),n){e.next=5;break}return a(o),e.abrupt("return");case 5:return a(o),e.prev=6,e.next=9,Object(s.a)(n);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(6),e.t0;case 14:case"end":return e.stop()}var r}),e,null,[[6,11]])})));return function(t){return e.apply(this,arguments)}}()},hcXQ:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("YwZP"),u=n("vOnD"),s=n("E2os"),c=n("1Jss"),i=n("H8eV"),p=n("zbC1"),l=n("wNa6"),d=n("5/k9"),f=u.default.header.withConfig({displayName:"auth__Header",componentId:"sc-1u9apbm-0"})(["margin-bottom:",";"],(function(e){return e.theme.spacingStack.xxs})),m=u.default.div.withConfig({displayName:"auth__Wrapper",componentId:"sc-1u9apbm-1"})(["display:grid;grid-template-rows:auto 70px;grid-auto-rows:min-content;min-height:100%;"]),h=u.default.div.withConfig({displayName:"auth__Content",componentId:"sc-1u9apbm-2"})([""]),w=u.default.div.withConfig({displayName:"auth__Space",componentId:"sc-1u9apbm-3"})(["margin-bottom:",";"],(function(e){return e.theme.spacingStack.xs})),b=u.default.div.withConfig({displayName:"auth__SmallSpace",componentId:"sc-1u9apbm-4"})(["margin-bottom:",";"],(function(e){return e.theme.spacingStack.xxs})),g=u.default.form.withConfig({displayName:"auth__Form",componentId:"sc-1u9apbm-5"})(["margin-top:",";margin-bottom:",";display:grid;grid-gap:",";"],(function(e){return e.theme.spacingStack.xs}),(function(e){return e.theme.spacingStack.xs}),(function(e){return e.theme.spacingStack.xxxs})),v=u.default.footer.withConfig({displayName:"auth__Footer",componentId:"sc-1u9apbm-6"})(["display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end;"]);t.default=function(e){var t=e.location,n=Object(a.useContext)(l.a),u=n.appName,k=n.appSource,x=Object(a.useState)(""),I=x[0],S=x[1],O=Object(a.useState)(""),E=O[0],j=O[1],y=Object(a.useState)(!1),_=(y[0],y[1]),A=Object(a.useState)({}),C=A[0],N=A[1];return Object(a.useEffect)((function(){t.state&&t.state.username&&(S(t.state.username),j(""))}),[]),r.a.createElement(c.a,null,r.a.createElement(i.a,{title:"Auth"}),r.a.createElement(m,null,r.a.createElement(h,null,r.a.createElement(f,null,r.a.createElement(p.a,null)),r.a.createElement(s.SmallText,null,"Entre no "+u+" através IDa!"),r.a.createElement(w,null),r.a.createElement(s.Subtitle,{type:"h3"},"Agora utilizamos a IDa para autenticar seu login"),r.a.createElement(g,{autoComplete:"off",onSubmit:function(e){e.preventDefault(),Object(d.d)({username:I,password:E,setErrors:N,setLoading:_,appSource:k})}},r.a.createElement(s.TextInput,{value:I,onChange:S,autoComplete:"off",error:C.username,label:"Usuário ou e-mail"}),r.a.createElement(s.TextInput,{type:"password",error:C.password,autoComplete:"off",value:E,onChange:j,label:"Senha"}))),r.a.createElement(v,null,r.a.createElement("div",null,r.a.createElement(s.ButtonText,{white:!0,small:!0,onClick:function(){Object(o.navigate)("/forget-password",{replace:!0})}},"Esqueceu sua senha?")),r.a.createElement(b,null),r.a.createElement("div",null,r.a.createElement(s.Button,{onClick:function(e){e.preventDefault(),console.log("here"),Object(d.d)({username:I,password:E,setErrors:N,setLoading:_,appSource:k})},disabled:!E||!I},"Entrar")))))}},u661:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"h",(function(){return p})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return h}));var a=n("kD0k"),r=n.n(a),o=(n("ls82"),n("/S4K")),u=n("vDqi"),s=n.n(u),c=function(e){var t=e.username,n=e.password;return s.a.post({}.API_URI+"/login",{username:t,password:n},{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}})},i=function(e){var t=e.username,n=e.password;return s.a.post({}.API_URI+"/signup",{username:t,password:n})},p=function(e){return s.a.post({}.API_URI+"/validate-token",{token:e},{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}})},l=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.a.post({}.API_URI+"/request-reset-password",{input:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.a.post({}.API_URI+"/send-email-validation",{ida:t,email:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.a.post({}.API_URI+"/validate-email-token",{ida:t,token:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.a.post({}.API_URI+"/phone-generate-code",{ida:t,phone:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.a.post({}.API_URI+"/phone-validate-code",{ida:t,code:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=component---src-pages-signin-auth-tsx-305c287f3f3807f47e73.js.map