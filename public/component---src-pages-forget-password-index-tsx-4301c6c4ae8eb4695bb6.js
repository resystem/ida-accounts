(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5/k9":function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return w}));var r=n("kD0k"),a=n.n(r),o=(n("ls82"),n("/S4K")),s=n("YwZP"),u=n("u661"),i={"user/wrong-password":"Senha incorreta","user/not-found":"Usuário não encontrado"},c="user/wrong-password",l="user/not-found";function p(e){var t=e.ida,n=e.token,r=e.user;window.localStorage.setItem("ida@id",t),window.localStorage.setItem("ida@token",n);var a=window.localStorage.getItem("ida@users")||"{}",o=JSON.parse(a).users||[],s=o.findIndex((function(e){return e.ida===t})),u={ida:t,token:n,user:r};-1!==s?o.splice(s,1,u):o.push(u),window.localStorage.setItem("ida@users",JSON.stringify({users:o}))}var d=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o,s,d,f,m,w,h,g,v,b,k,x;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,o=t.setErrors,s=t.setLoading,d=t.appSource,s(!0),o({}),e.prev=3,e.next=6,Object(u.f)({username:n,password:r});case 6:f=e.sent,e.next=23;break;case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0.response&&e.t0.response.data&&e.t0.response.data.error)){e.next=21;break}m=e.t0.response.data.error,e.t1=m,e.next=e.t1===c?16:e.t1===l?18:20;break;case 16:return o({password:i[m]}),e.abrupt("return");case 18:return o({username:i[m]}),e.abrupt("return");case 20:return e.abrupt("return");case 21:throw s(!1),e.t0;case 23:f.data&&(console.log(f),w=f.data,h=w.ida,g=w.token,v=w.username,b=w.phone,k=w.email,x=JSON.stringify({username:v,ida:h,token:g,phone:b,email:k}),p({ida:h,token:g,user:{username:v}}),d&&d.postMessage(x,"*")),o({}),s(!1);case 26:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o,i,c,l,p,d,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.ida,o=t.token,i=t.appSource,e.prev=1,e.next=4,Object(u.h)(o);case 4:c=e.sent,e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(1),Object(s.navigate)("/signin/auth",{state:{username:n}}),e.t0;case 11:l=c.data,p=l.email,d=l.phone,f=JSON.stringify({ida:r,token:o,username:n,email:p,phone:d}),console.log("has app source?",!!i),i&&i.postMessage(f,"*");case 15:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.email,r=t.setEmailError,/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n)){e.next=5;break}return r("Informe um e-mail válido"),e.abrupt("return");case 5:return r(""),e.prev=6,e.next=9,Object(u.a)(n);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(6),console.log(e.t0),e.t0;case 15:Object(s.navigate)("/forget-password/sent-email",{state:{email:n}});case 16:case"end":return e.stop()}}),e,null,[[6,11]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.phone,r=t.setValidPhone,a=void 0,a=n.replace(/\W/g,""),o=/^\+[0-9]{9,}$/.test("+55"+a),n){e.next=5;break}return r(o),e.abrupt("return");case 5:return r(o),e.prev=6,e.next=9,Object(u.a)(n);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(6),e.t0;case 14:case"end":return e.stop()}var a}),e,null,[[6,11]])})));return function(t){return e.apply(this,arguments)}}()},Mkhk:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("YwZP"),s=n("vOnD"),u=n("E2os"),i=n("1Jss"),c=n("H8eV"),l=n("zbC1"),p=n("5/k9"),d=s.default.header.withConfig({displayName:"forget-password__Header",componentId:"sc-1s04rti-0"})(["margin-bottom:",";"],(function(e){return e.theme.spacingStack.xxs})),f=s.default.div.withConfig({displayName:"forget-password__Wrapper",componentId:"sc-1s04rti-1"})(["display:grid;grid-template-rows:auto 70px;grid-auto-rows:min-content;min-height:100%;"]),m=s.default.div.withConfig({displayName:"forget-password__Content",componentId:"sc-1s04rti-2"})([""]),w=s.default.div.withConfig({displayName:"forget-password__Space",componentId:"sc-1s04rti-3"})(["margin-bottom:",";"],(function(e){return e.theme.spacingStack.xs})),h=s.default.div.withConfig({displayName:"forget-password__SmallSpace",componentId:"sc-1s04rti-4"})(["margin-bottom:",";"],(function(e){return e.theme.spacingStack.xxs})),g=s.default.form.withConfig({displayName:"forget-password__Form",componentId:"sc-1s04rti-5"})(["margin-top:",";margin-bottom:",";display:grid;grid-gap:",";"],(function(e){return e.theme.spacingStack.xs}),(function(e){return e.theme.spacingStack.xs}),(function(e){return e.theme.spacingStack.xxxs})),v=s.default.footer.withConfig({displayName:"forget-password__Footer",componentId:"sc-1s04rti-6"})(["display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end;"]);t.default=function(){var e=Object(r.useState)(""),t=e[0],n=e[1],s=Object(r.useState)(""),b=s[0],k=s[1],x=Object(r.useState)(!1),I=x[0],S=x[1],O=Object(r.useState)(""),y=O[0],E=O[1],j=Object(r.useState)(0),_=j[0],A=j[1];return a.a.createElement(i.a,null,a.a.createElement(c.a,{title:"Forget Password"}),a.a.createElement(f,null,a.a.createElement(m,null,a.a.createElement(d,null,a.a.createElement(l.a,null)),a.a.createElement(u.SmallText,null,"Esqueci minha senha"),a.a.createElement(w,null),a.a.createElement(u.Subtitle,{type:"h3"},"Insira o seu e-mail ou celular cadastrado na IDa"),a.a.createElement(g,null,a.a.createElement(u.SwitchButton,{small:!0,selectedIndex:_,onClick:function(e){var t=e.index;return A(t)}}),_?a.a.createElement(u.TextInput,{type:"text",label:"Celular",error:I&&"Informe um celular válido",value:b,onChange:k}):a.a.createElement(u.TextInput,{type:"email",label:"Email",error:y,value:t,onChange:n}))),a.a.createElement(v,null,a.a.createElement("div",null,a.a.createElement(u.SmallText,null,"Lembrei! "),a.a.createElement(u.ButtonText,{white:!0,small:!0,onClick:function(){Object(o.navigate)("/signin/auth")}},"Volta ao login")),a.a.createElement(h,null),a.a.createElement("div",null,a.a.createElement(u.Button,{small:!0,disabled:!t,onClick:function(){switch(_){case 0:Object(p.b)({setEmailError:E,email:t});break;default:Object(p.c)({setValidPhone:S,phone:b})}}},"Próximo")))))}},u661:function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return w}));var r=n("kD0k"),a=n.n(r),o=(n("ls82"),n("/S4K")),s=n("vDqi"),u=n.n(s),i=function(e){var t=e.username,n=e.password;return u.a.post({}.API_URI+"/login",{username:t,password:n},{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}})},c=function(e){var t=e.username,n=e.password;return u.a.post({}.API_URI+"/signup",{username:t,password:n})},l=function(e){return u.a.post({}.API_URI+"/validate-token",{token:e},{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}})},p=function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.post({}.API_URI+"/request-reset-password",{input:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.post({}.API_URI+"/send-email-validation",{ida:t,email:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.post({}.API_URI+"/validate-email-token",{ida:t,token:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.post({}.API_URI+"/phone-generate-code",{ida:t,phone:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.post({}.API_URI+"/phone-validate-code",{ida:t,code:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=component---src-pages-forget-password-index-tsx-4301c6c4ae8eb4695bb6.js.map