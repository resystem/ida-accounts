(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/GqU":function(e,t,n){var r=n("RK3t"),a=n("HYAF");e.exports=function(e){return r(a(e))}},"/b8u":function(e,t,n){var r=n("STAE");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"/qmn":function(e,t,n){var r=n("2oRo");e.exports=r.Promise},"0BK2":function(e,t){e.exports={}},"0Dky":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"0GbY":function(e,t,n){var r=n("Qo9l"),a=n("2oRo"),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e])||o(a[e]):r[e]&&r[e][t]||a[e]&&a[e][t]}},"0eef":function(e,t,n){"use strict";var r={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,o=a&&!r.call({1:2},1);t.f=o?function(e){var t=a(this,e);return!!t&&t.enumerable}:r},"2oRo":function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n("yLpj"))},"5/k9":function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return v}));var r=n("kD0k"),a=n.n(r),o=(n("ls82"),n("/S4K")),u=n("YwZP"),i=n("u661"),c={"user/wrong-password":"Senha incorreta","user/not-found":"Usuário não encontrado"},l="user/wrong-password",s="user/not-found";function f(e){var t=e.ida,n=e.token,r=e.user;window.localStorage.setItem("ida@id",t),window.localStorage.setItem("ida@token",n);var a=window.localStorage.getItem("ida@users")||"{}",o=JSON.parse(a).users||[],u=o.findIndex((function(e){return e.ida===t})),i={ida:t,token:n,user:r};-1!==u?o.splice(u,1,i):o.push(i),window.localStorage.setItem("ida@users",JSON.stringify({users:o}))}var p=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o,u,p,d,m,v,h,b,g,E,x,S;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,o=t.setErrors,u=t.setLoading,p=t.appSource,u(!0),o({}),e.prev=3,e.next=6,Object(i.f)({username:n,password:r});case 6:d=e.sent,e.next=23;break;case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0.response&&e.t0.response.data&&e.t0.response.data.error)){e.next=21;break}m=e.t0.response.data.error,e.t1=m,e.next=e.t1===l?16:e.t1===s?18:20;break;case 16:return o({password:c[m]}),e.abrupt("return");case 18:return o({username:c[m]}),e.abrupt("return");case 20:return e.abrupt("return");case 21:throw u(!1),e.t0;case 23:d.data&&(console.log(d),v=d.data,h=v.ida,b=v.token,g=v.username,E=v.phone,x=v.email,S=JSON.stringify({username:g,ida:h,token:b,phone:E,email:x}),f({ida:h,token:b,user:{username:g}}),p&&p.postMessage(S,"*")),o({}),u(!1);case 26:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o,c,l,s,f,p,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.ida,o=t.token,c=t.appSource,e.prev=1,e.next=4,Object(i.h)(o);case 4:l=e.sent,e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(1),Object(u.navigate)("/signin/auth",{state:{username:n}}),e.t0;case 11:s=l.data,f=s.email,p=s.phone,d=JSON.stringify({ida:r,token:o,username:n,email:f,phone:p}),console.log("has app source?",!!c),c&&c.postMessage(d,"*");case 15:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.email,r=t.setEmailError,/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n)){e.next=5;break}return r("Informe um e-mail válido"),e.abrupt("return");case 5:return r(""),e.prev=6,e.next=9,Object(i.a)(n);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(6),console.log(e.t0),e.t0;case 15:Object(u.navigate)("/forget-password/sent-email",{state:{email:n}});case 16:case"end":return e.stop()}}),e,null,[[6,11]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.phone,r=t.setValidPhone,a=void 0,a=n.replace(/\W/g,""),o=/^\+[0-9]{9,}$/.test("+55"+a),n){e.next=5;break}return r(o),e.abrupt("return");case 5:return r(o),e.prev=6,e.next=9,Object(i.a)(n);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(6),e.t0;case 14:case"end":return e.stop()}var a}),e,null,[[6,11]])})));return function(t){return e.apply(this,arguments)}}()},"6JNq":function(e,t,n){var r=n("UTVS"),a=n("Vu81"),o=n("Bs8V"),u=n("m/L8");e.exports=function(e,t){for(var n=a(t),i=u.f,c=o.f,l=0;l<n.length;l++){var s=n[l];r(e,s)||i(e,s,c(t,s))}}},"8GlL":function(e,t,n){"use strict";var r=n("HAuM"),a=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new a(e)}},"93I0":function(e,t,n){var r=n("VpIT"),a=n("kOOl"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=a(e))}},"99Av":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"h",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return m})),n.d(t,"l",(function(){return v})),n.d(t,"m",(function(){return h}));var r=n("vOnD"),a=r.default.div.withConfig({displayName:"styles__CheckboxWrapper",componentId:"sc-4l3s7h-0"})(["display:flex;align-items:center;justify-content:flex-start;"]),o=r.default.div.withConfig({displayName:"styles__Content",componentId:"sc-4l3s7h-1"})(["padding-top:",";"],(function(e){return e.theme.spacingStack.xs})),u=r.default.div.withConfig({displayName:"styles__ButtonContainer",componentId:"sc-4l3s7h-2"})(["width:100%;button{width:100%;}"]),i=r.default.footer.withConfig({displayName:"styles__Footer",componentId:"sc-4l3s7h-3"})(["display:flex;justify-content:flex-end;align-items:flex-end;"]),c=r.default.header.withConfig({displayName:"styles__Header",componentId:"sc-4l3s7h-4"})(["height:100%;width:100%;"]),l=r.default.div.withConfig({displayName:"styles__IconWrapper",componentId:"sc-4l3s7h-5"})(["display:flex;color:#fff;font-weight:700;align-items:center;justify-content:center;width:100px;height:100%;border:2px solid #fff;border-radius:12px;cursor:pointer;"]),s=r.default.div.withConfig({displayName:"styles__IconContainer",componentId:"sc-4l3s7h-6"})(["height:96px;display:flex;justify-content:space-between;"]),f=r.default.a.withConfig({displayName:"styles__LindDecoration",componentId:"sc-4l3s7h-7"})([":link,:visited,:hover,:active{text-decoration:underline;color:",";}"],(function(e){return e.theme.brandColor.secondary.medium})),p=r.default.p.withConfig({displayName:"styles__Paragraph",componentId:"sc-4l3s7h-8"})(["width:100%;color:#fff;font-size:16px;line-height:18px;"]),d=r.default.div.withConfig({displayName:"styles__Space",componentId:"sc-4l3s7h-9"})(["margin-bottom:",";"],(function(e){return e.theme.spacingStack.xs})),m=r.default.div.withConfig({displayName:"styles__SpaceXXS",componentId:"sc-4l3s7h-10"})(["margin-bottom:",";"],(function(e){return e.theme.spacingStack.xxxs})),v=r.default.div.withConfig({displayName:"styles__SpaceXXXS",componentId:"sc-4l3s7h-11"})(["margin-bottom:",";"],(function(e){return e.theme.spacingStack.xxxs})),h=r.default.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-4l3s7h-12"})(["display:grid;grid-template-rows:70px auto 70px;grid-auto-rows:min-content;min-height:100%;"])},Bs8V:function(e,t,n){var r=n("g6v/"),a=n("0eef"),o=n("XGwC"),u=n("/GqU"),i=n("wE6v"),c=n("UTVS"),l=n("DPsx"),s=Object.getOwnPropertyDescriptor;t.f=r?s:function(e,t){if(e=u(e),t=i(t,!0),l)try{return s(e,t)}catch(n){}if(c(e,t))return o(!a.f.call(e,t),e[t])}},DPsx:function(e,t,n){var r=n("g6v/"),a=n("0Dky"),o=n("zBJ4");e.exports=!r&&!a((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},HAuM:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},HYAF:function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},"I+eb":function(e,t,n){var r=n("2oRo"),a=n("Bs8V").f,o=n("kRJp"),u=n("busE"),i=n("zk60"),c=n("6JNq"),l=n("lMq5");e.exports=function(e,t){var n,s,f,p,d,m=e.target,v=e.global,h=e.stat;if(n=v?r:h?r[m]||i(m,{}):(r[m]||{}).prototype)for(s in t){if(p=t[s],f=e.noTargetGet?(d=a(n,s))&&d.value:n[s],!l(v?s:m+(h?".":"#")+s,e.forced)&&void 0!==f){if(typeof p==typeof f)continue;c(p,f)}(e.sham||f&&f.sham)&&o(p,"sham",!0),u(n,s,p,e)}}},I8vh:function(e,t,n){var r=n("ppGB"),a=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?a(n+t,0):o(n,t)}},JBy8:function(e,t,n){var r=n("yoRg"),a=n("eDl+").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},Qo9l:function(e,t,n){var r=n("2oRo");e.exports=r},RK3t:function(e,t,n){var r=n("0Dky"),a=n("xrYK"),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==a(e)?o.call(e,""):Object(e)}:Object},SEBh:function(e,t,n){var r=n("glrk"),a=n("HAuM"),o=n("tiKp")("species");e.exports=function(e,t){var n,u=r(e).constructor;return void 0===u||null==(n=r(u)[o])?t:a(n)}},STAE:function(e,t,n){var r=n("0Dky");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},TWQb:function(e,t,n){var r=n("/GqU"),a=n("UMSQ"),o=n("I8vh"),u=function(e){return function(t,n,u){var i,c=r(t),l=a(c.length),s=o(u,l);if(e&&n!=n){for(;l>s;)if((i=c[s++])!=i)return!0}else for(;l>s;s++)if((e||s in c)&&c[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:u(!0),indexOf:u(!1)}},UMSQ:function(e,t,n){var r=n("ppGB"),a=Math.min;e.exports=function(e){return e>0?a(r(e),9007199254740991):0}},UTVS:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},VpIT:function(e,t,n){var r=n("xDBR"),a=n("xs3f");(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},Vu81:function(e,t,n){var r=n("0GbY"),a=n("JBy8"),o=n("dBg+"),u=n("glrk");e.exports=r("Reflect","ownKeys")||function(e){var t=a.f(u(e)),n=o.f;return n?t.concat(n(e)):t}},XGwC:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},afO8:function(e,t,n){var r,a,o,u=n("f5p1"),i=n("2oRo"),c=n("hh1v"),l=n("kRJp"),s=n("UTVS"),f=n("93I0"),p=n("0BK2"),d=i.WeakMap;if(u){var m=new d,v=m.get,h=m.has,b=m.set;r=function(e,t){return b.call(m,e,t),t},a=function(e){return v.call(m,e)||{}},o=function(e){return h.call(m,e)}}else{var g=f("state");p[g]=!0,r=function(e,t){return l(e,g,t),t},a=function(e){return s(e,g)?e[g]:{}},o=function(e){return s(e,g)}}e.exports={set:r,get:a,has:o,enforce:function(e){return o(e)?a(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!c(t)||(n=a(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},busE:function(e,t,n){var r=n("2oRo"),a=n("kRJp"),o=n("UTVS"),u=n("zk60"),i=n("iSVu"),c=n("afO8"),l=c.get,s=c.enforce,f=String(String).split("String");(e.exports=function(e,t,n,i){var c=!!i&&!!i.unsafe,l=!!i&&!!i.enumerable,p=!!i&&!!i.noTargetGet;"function"==typeof n&&("string"!=typeof t||o(n,"name")||a(n,"name",t),s(n).source=f.join("string"==typeof t?t:"")),e!==r?(c?!p&&e[t]&&(l=!0):delete e[t],l?e[t]=n:a(e,t,n)):l?e[t]=n:u(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||i(this)}))},"dBg+":function(e,t){t.f=Object.getOwnPropertySymbols},"eDl+":function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},f5p1:function(e,t,n){var r=n("2oRo"),a=n("iSVu"),o=r.WeakMap;e.exports="function"==typeof o&&/native code/.test(a(o))},"g6v/":function(e,t,n){var r=n("0Dky");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},glrk:function(e,t,n){var r=n("hh1v");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},hh1v:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},iSVu:function(e,t,n){var r=n("xs3f"),a=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return a.call(e)}),e.exports=r.inspectSource},kOOl:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},kRJp:function(e,t,n){var r=n("g6v/"),a=n("m/L8"),o=n("XGwC");e.exports=r?function(e,t,n){return a.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},lMq5:function(e,t,n){var r=n("0Dky"),a=/#|\.prototype\./,o=function(e,t){var n=i[u(e)];return n==l||n!=c&&("function"==typeof t?r(t):!!t)},u=o.normalize=function(e){return String(e).replace(a,".").toLowerCase()},i=o.data={},c=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},"m/L8":function(e,t,n){var r=n("g6v/"),a=n("DPsx"),o=n("glrk"),u=n("wE6v"),i=Object.defineProperty;t.f=r?i:function(e,t,n){if(o(e),t=u(t,!0),o(n),a)try{return i(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},mG7a:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("1Jss"),u=n("H8eV"),i=n("E2os"),c=n("zbC1"),l=n("99Av"),s=function(e){var t=e.appName,n=e.nextStep,o=Object(r.useState)(!1),u=o[0],s=o[1];return a.a.createElement(l.m,null,a.a.createElement(l.e,null,a.a.createElement(c.a,null)),a.a.createElement(l.c,null,a.a.createElement(i.SmallText,null,"Inscreva-se no "+t+" através da IDa!"),a.a.createElement(l.k,null),a.a.createElement(i.ButtonText,{white:!0,small:!0,onClick:function(){return window.location.replace("/signin")}},"Já é cadastrado? Faça login"),a.a.createElement(l.j,null),a.a.createElement(i.Subtitle,{type:"h3"},"Criando sua IDa"),a.a.createElement(l.j,null),a.a.createElement(i.Text,null,"A IDa é um serviço de autenticação digital que conecta ativistas ao Banco de Tecnologias da Mídia NINJA."),a.a.createElement(l.k,null),a.a.createElement(i.ButtonText,{white:!0,small:!0},"Saiba mais sobre a IDa"),a.a.createElement(l.k,null),a.a.createElement(l.b,null,a.a.createElement(i.CheckboxInput,{checked:u,onChange:function(e){s((function(e){return!e}))}}),a.a.createElement(i.SmallText,null,"Li e concordo com os",a.a.createElement(l.h,{href:"#"},"Termos de uso e privacidade da IDA")))),a.a.createElement(l.d,null,a.a.createElement("div",null,a.a.createElement(i.Button,{onClick:n},"Proxímo"))))};n("p532");function f(e){return e.replace(/[^\w\s]/gi,"").replace(" ","")}function p(e){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)?"":"formato de e-mail inválido"}var d=n("z/sB"),m=function(e){return e.error.length>0||!(e.value.length>0)},v=function(e){var t=e.appName,n=e.username,o=e.setUsername,u=e.password,s=e.setPassword,f=e.nextStep,p=e.setIda,v=e.setToken,h=Object(r.useState)(m(n)||m(u)),b=h[0],g=h[1],E=Object(r.useState)(!1),x=E[0],S=E[1];return Object(r.useEffect)((function(){m(n)||m(u)?g(!0):g(!1)}),[n,u]),a.a.createElement(l.m,null,a.a.createElement(l.e,null,a.a.createElement(c.a,null)),a.a.createElement(l.c,null,a.a.createElement(i.SmallText,null,"Inscreva-se no "+t+" através da IDa!"),a.a.createElement(l.l,null),a.a.createElement(i.ButtonText,{white:!0,small:!0,onClick:function(){return window.location.replace("/signin")}},"Já é cadastrado? Faça login"),a.a.createElement(l.l,null),a.a.createElement(i.Subtitle,{type:"h3"},"Criando sua IDa"),a.a.createElement(l.l,null),a.a.createElement(i.ButtonText,{white:!0,small:!0},"Saiba mais sobre a IDa"),a.a.createElement(l.k,null),a.a.createElement(i.TextInput,{id:"nome",label:"Nome do usuário",value:n.value,error:n.error,onChange:function(e){return n=function(e){return/^[a-zA-Z0-9]*$/.test(e)?"":"Utilize apenas letras e números"}(t=e),void o((function(e){return Object.assign({},e,{value:t,error:n})}));var t,n},autoComplete:"off"}),a.a.createElement(l.l,null),a.a.createElement(i.TextInput,{id:"senha",label:"Senha",type:"password",value:u.value,error:u.error,onChange:function(e){return n=function(e){return function(e){var t=0,n=/[0-9]/;return n.test(e)&&(t+=10),(n=/[a-zA-Z]/).test(e)&&(t+=10),e.length>=8&&(t+=10),t}(e)<30?"A senha deve conter no mínimo 8 caracteres, com pelo menos uma letra e um número":""}(t=e),void s((function(e){return Object.assign({},e,{value:t,error:n})}));var t,n}})),a.a.createElement(l.d,null,a.a.createElement("div",null,a.a.createElement(i.Button,{disabled:b,isLoading:x,onClick:function(){return S(!0),void Object(d.e)(n.value,u.value).then((function(e){e.data?(console.log(e.data,"data from send username"),p(e.data.ida.toString()),v(e.data.token.toString()),f()):e.error&&o((function(t){var n;return Object.assign({},t,{error:null===(n=e.error)||void 0===n?void 0:n.username})}))})).finally((function(){return S(!1)}))}},"Proxímo"))))},h=function(e){var t=e.goToStep;return a.a.createElement(l.m,null,a.a.createElement(l.e,null,a.a.createElement("div",{onClick:function(){return t(1)}},a.a.createElement(i.Text,null,"Voltar"))),a.a.createElement(i.Animation,null,a.a.createElement(l.c,null,a.a.createElement(l.k,null),a.a.createElement(i.Subtitle,{type:"h3"},"Agora precisamos confirmar sua identidade"),a.a.createElement(l.j,null),a.a.createElement(l.i,null,"Confirmar via"),a.a.createElement(l.k,null),a.a.createElement(l.f,null,a.a.createElement(l.g,{onClick:function(){return t(3)}},"SMS"),a.a.createElement(l.g,{onClick:function(){return t(6)}},"E-mail")),a.a.createElement(l.j,null))))},b=function(e){var t=e.ida,n=e.goToStep,o=e.nextStep,u=e.phone,c=e.setPhone,s=Object(r.useState)(!0),p=s[0],m=s[1],v=Object(r.useState)(!1),h=v[0],b=v[1];return Object(r.useEffect)((function(){var e;console.log("ida ",t),m(!((e=u).error.length>0||!(e.value.length<15)))}),[t,u]),a.a.createElement(l.m,null,a.a.createElement(l.e,null,a.a.createElement("div",{onClick:function(){return n(2)}},a.a.createElement(i.Text,null,"Voltar"))),a.a.createElement(i.Animation,null,a.a.createElement(l.c,null,a.a.createElement(l.k,null),a.a.createElement(i.Subtitle,{type:"h3"},"Insira o seu celular para receber o SMS"),a.a.createElement(l.j,null),a.a.createElement(i.TextInput,{id:"celular",label:"Celular",value:u.value,error:u.error,onChange:function(e){return t=e,void c((function(e){return Object.assign({},e,{value:(n=t,r=n,r=(r=(r=(r=r.replace(/\D/g,"")).length>11?r.substring(0,11):r).replace(/^(\d\d)(\d)/g,"($1) $2")).replace(/(\d{5})(\d)/,"$1-$2")),error:""});var n,r}));var t}}))),a.a.createElement(l.d,null,a.a.createElement("div",null,a.a.createElement(i.Button,{disabled:p,isLoading:h,onClick:function(){b(!0),Object(d.c)(t,"+55"+f(u.value)).then((function(e){if(e.data)console.log("data ",e.data),c((function(e){return Object.assign({},e,{error:""})})),o();else if(e.error){var t=e.error.phone;c((function(e){return Object.assign({},e,{error:t})}))}})).finally((function(){return b(!1)}))}},"Enviar SMS"))))},g=function(e){var t=e.ida,n=e.phone,o=e.goToStep,u=e.nextStep,c=Object(r.useState)(0),s=c[0],p=c[1],m=Object(r.useState)({value:"",error:""}),v=m[0],h=m[1];return a.a.createElement(l.m,null,a.a.createElement(l.e,null,a.a.createElement("div",{onClick:function(){return o(2)}},a.a.createElement(i.Text,null,"Voltar"))),a.a.createElement(i.Animation,null,a.a.createElement(l.c,null,a.a.createElement(l.k,null),function(e){return e<1?a.a.createElement(i.Subtitle,{type:"h3"},"SMS enviado!"):a.a.createElement(i.Subtitle,{type:"h3",className:"text-success"},"SMS reenviado!")}(s),a.a.createElement(l.k,null),function(e,t){return e<2?a.a.createElement(a.a.Fragment,null,a.a.createElement(l.i,{className:"text-left"},"Insira o código enviado para"),a.a.createElement(l.i,{className:"text-left"},t)):a.a.createElement(a.a.Fragment,null,a.a.createElement(l.i,{className:"text-left"},"Seu nº é ",t," ?"),a.a.createElement(l.i,{className:"text-left"},"Se não for, volte p/ corrigir"))}(s,n.value),a.a.createElement(l.j,null),a.a.createElement(i.CodeInput,{onChange:function(e){6===e.length?Object(d.d)(t,e).then((function(t){if(console.log("response ",t),t.data)console.log("data ",t.data),h((function(){return{value:e,error:""}})),u();else if(t.error){var n;console.log("set code error ",t.error);var r=(null===(n=t.error)||void 0===n?void 0:n.code)||"";h((function(e){return Object.assign({},e,{error:r})}))}})):h((function(e){return Object.assign({},e,{error:""})}))},codeSize:6,error:v.error}),a.a.createElement(l.i,{className:"text-right"},"Não recebeu ?",a.a.createElement(l.h,{href:"#",onClick:function(e){e.preventDefault(),Object(d.c)(t,"+55"+f(n.value)).then((function(e){if(e.data)console.log("data ",e.data),p((function(e){return e+1}));else if(e.error){var t=e.error.phone;h((function(e){return Object.assign({},e,{error:t})}))}}))}},"Reenviar código")))))},E=function(e){var t=e.buttonEnable,n=e.email,r=e.handleEmailChange,o=e.handleSendCode,u=(e.ida,e.isLoadingButton),c=e.goToStep;return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.e,null,a.a.createElement("div",{onClick:function(){return c(2)}},a.a.createElement(i.Text,null,"Voltar"))),a.a.createElement(i.Animation,null,a.a.createElement(l.c,null,a.a.createElement(l.k,null),a.a.createElement(i.Subtitle,{type:"h3"},"Digite seu e-mail para confirmar sua identidade"),a.a.createElement(l.j,null),a.a.createElement(i.TextInput,{id:"email",label:"E-mail",type:"mail",value:n.value,error:n.error,onChange:function(e){r(e)}}),a.a.createElement(l.k,null))),a.a.createElement(l.d,null,a.a.createElement("div",null,a.a.createElement(i.Button,{disabled:t,isLoading:u,onClick:o},"Enviar e-mail"))))},x=function(e){var t=e.email,n=e.handleSendCode,r=e.previousInternalStep,o=e.sentTime,u=function(e){return e.sentParam>1?a.a.createElement(i.Subtitle,{type:"h3",className:"text-success"},"E-mail reenviado!"):a.a.createElement(i.Subtitle,{type:"h3"},"Enviamos um e-mail pra você!")},c=function(e){return e.sentParam>1?a.a.createElement(a.a.Fragment,null,a.a.createElement(l.i,{className:"text-right"},"Não recebeu ?"),a.a.createElement(l.i,{className:"text-right"},"Conferir o endereço digitado")):a.a.createElement(a.a.Fragment,null,a.a.createElement(l.i,{className:"text-right"},"Não recebeu ?",a.a.createElement(l.h,{href:"#",onClick:n},"Reenviar código")))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.e,null,a.a.createElement("div",{onClick:function(){return r()}},a.a.createElement(i.Text,null,"Voltar"))),a.a.createElement(i.Animation,null,a.a.createElement(l.c,null,a.a.createElement(l.k,null),a.a.createElement(u,{sentParam:o}),a.a.createElement(l.j,null),a.a.createElement(l.i,{className:"text-left"},"Acesse o e-mail enviado para ",t.value," e clique no link para confirmar o seu cadastro"),a.a.createElement(l.j,null))),a.a.createElement(l.d,null,a.a.createElement("div",null,a.a.createElement(c,{sentParam:o}))))},S=function(e){var t=e.goToStep,n=e.ida,o=(e.previousStep,Object(r.useState)(0)),u=o[0],i=o[1],c=Object(r.useState)(0),s=c[0],f=c[1],m=Object(r.useState)({value:"",error:""}),v=m[0],h=m[1],b=Object(r.useState)(!1),g=b[0],S=b[1],y=Object(r.useState)(!1),w=y[0],k=y[1],j=function(e){e.preventDefault(),S(!0),Object(d.a)(n,v.value).then((function(e){if(e.data)console.log(e.data," ida ",n),f((function(e){return e+1})),i((function(e){return e+1}));else{var t,r=(null==e||null===(t=e.error)||void 0===t?void 0:t.email)||"";console.log("handleSendCode data: ",e.data),console.log("handleSendCode error: ",r),console.log("handleSendCode ida ",n),h((function(e){return Object.assign({},e,{error:r})}))}})).finally((function(){return S(!1)}))};return Object(r.useEffect)((function(){var e;k((e=v).error.length>0||!(e.value.length>0))}),[v]),Object(r.useEffect)((function(){console.log("setTime mudou ",s)}),[s]),a.a.createElement(l.m,null,0===u&&a.a.createElement(E,{buttonEnable:w,email:v,goToStep:t,handleSendCode:j,handleEmailChange:function(e){var t=p(e);h((function(n){return Object.assign({},n,{value:e,error:t})}))},ida:n,isLoadingButton:g}),u>0&&a.a.createElement(x,{email:v,handleSendCode:j,previousInternalStep:function(){return i((function(e){return e-1}))},sentTime:s}))},y=n("wNa6"),w=n("5/k9"),k=function(e){var t=e.buttonEnable,n=e.email,r=e.handleEmailChange,o=e.nextStep;return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.Animation,null,a.a.createElement(i.Subtitle,{type:"h3"},"Quase pronto! Agora só precisamos do seu e-mail"),a.a.createElement(l.j,null),a.a.createElement(i.TextInput,{id:"email",label:"E-mail",type:"mail",value:n.value,error:n.error,onChange:function(e){r(e)}}),a.a.createElement(l.k,null),a.a.createElement(l.a,null,a.a.createElement(i.Button,{disabled:t,onClick:function(){return o()}},"Finalizar"))))},j=function(e){var t=e.appName,n=e.appSource,r=e.password,o=e.username;return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.Animation,null,a.a.createElement(i.Subtitle,{type:"h3"},"Seu cadastro foi confirmado!"),a.a.createElement(l.k,null),a.a.createElement(l.i,{className:"text-left"},"Você pode entrar no"," ",a.a.createElement(l.h,{href:"#"}," portal da IDa ")," a qualquer momento para conhecer outras iniciativas"),a.a.createElement(l.j,null),a.a.createElement(l.a,null,a.a.createElement(i.Button,{onClick:function(){Object(w.d)({username:o,password:r,setErrors:function(){},setLoading:function(){},appSource:n})}},"Continuar para o ",t))))},O=function(e){var t=e.username,n=e.password,o=Object(r.useContext)(y.a),u=o.appName,i=o.appSource,s=Object(r.useState)(0),f=s[0],d=s[1],m=Object(r.useState)({value:"",error:""}),v=m[0],h=m[1],b=Object(r.useState)(!1),g=b[0],E=b[1],x=Object(r.useState)(!1);x[0],x[1];return Object(r.useEffect)((function(){var e;E((e=v).error.length>0||!(e.value.length>0))}),[v]),a.a.createElement(l.m,null,a.a.createElement(l.e,null,a.a.createElement(c.a,null)),a.a.createElement(l.c,null,a.a.createElement(l.k,null),0===f&&a.a.createElement(k,{buttonEnable:g,email:v,handleEmailChange:function(e){var t=p(e);h((function(n){return Object.assign({},n,{value:e,error:t})}))},nextStep:function(){return d((function(e){return e+1}))}}),1===f&&a.a.createElement(j,{appName:u,appSource:i,password:n,username:t})))};t.default=function(){var e=Object(r.useState)(2),t=e[0],n=e[1],i=Object(r.useState)(""),c=i[0],l=i[1],f=Object(r.useState)({value:"",error:""}),p=f[0],d=f[1],m=Object(r.useState)({value:"",error:""}),E=m[0],x=m[1],y=Object(r.useState)({value:"",error:""}),w=y[0],k=y[1],j=Object(r.useState)("5f6cfb38e1815518d4e42f20"),C=j[0],I=j[1],T=Object(r.useState)("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hbGV0dGEiLCJpZGEiOiI1ZjZjZmIzOGUxODE1NTE4ZDRlNDJmMjAiLCJpYXQiOjE2MDA5Nzc3MjAsImV4cCI6MTYwMDk4MTMyMH0.u8YP3KVUvpZRH9RTY561Z1t6ukeal_8zext_EYmbPvY"),N=(T[0],T[1]),A=function(e){return n(e)},D=function(){return n((function(e){return e+1}))};return Object(r.useEffect)((function(){l("SOM")}),[]),a.a.createElement(o.a,null,a.a.createElement(u.a,{title:"Signup"}),0===t&&a.a.createElement(s,{appName:c,nextStep:D}),1===t&&a.a.createElement(v,{appName:c,username:p,setUsername:d,password:E,setPassword:x,nextStep:D,setIda:I,setToken:N}),2===t&&a.a.createElement(h,{goToStep:A}),3===t&&a.a.createElement(b,{ida:C,phone:w,setPhone:k,goToStep:A,nextStep:D}),4===t&&a.a.createElement(g,{ida:C,phone:w,goToStep:A,nextStep:D}),5===t&&a.a.createElement(O,{password:E.value,username:p.value}),6===t&&a.a.createElement(S,{goToStep:A,ida:C,previousStep:function(){return n((function(e){return e-1}))}}))}},p532:function(e,t,n){"use strict";var r=n("I+eb"),a=n("xDBR"),o=n("/qmn"),u=n("0Dky"),i=n("0GbY"),c=n("SEBh"),l=n("zfnd"),s=n("busE");r({target:"Promise",proto:!0,real:!0,forced:!!o&&u((function(){o.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=c(this,i("Promise")),n="function"==typeof e;return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),a||"function"!=typeof o||o.prototype.finally||s(o.prototype,"finally",i("Promise").prototype.finally)},ppGB:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},tiKp:function(e,t,n){var r=n("2oRo"),a=n("VpIT"),o=n("UTVS"),u=n("kOOl"),i=n("STAE"),c=n("/b8u"),l=a("wks"),s=r.Symbol,f=c?s:s&&s.withoutSetter||u;e.exports=function(e){return o(l,e)||(i&&o(s,e)?l[e]=s[e]:l[e]=f("Symbol."+e)),l[e]}},u661:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return v}));var r=n("kD0k"),a=n.n(r),o=(n("ls82"),n("/S4K")),u=n("vDqi"),i=n.n(u),c=function(e){var t=e.username,n=e.password;return i.a.post("http://localhost:3001/login",{username:t,password:n},{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}})},l=function(e){var t=e.username,n=e.password;return i.a.post("http://localhost:3001/signup",{username:t,password:n})},s=function(e){return i.a.post("http://localhost:3001/validate-token",{token:e},{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}})},f=function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.post("http://localhost:3001/request-reset-password",{input:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.post("http://localhost:3001/send-email-validation",{ida:t,email:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.post("http://localhost:3001/validate-email-token",{ida:t,token:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.post("http://localhost:3001/phone-generate-code",{ida:t,phone:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.post("http://localhost:3001/phone-validate-code",{ida:t,code:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},wE6v:function(e,t,n){var r=n("hh1v");e.exports=function(e,t){if(!r(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!r(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},xDBR:function(e,t){e.exports=!1},xrYK:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},xs3f:function(e,t,n){var r=n("2oRo"),a=n("zk60"),o=r["__core-js_shared__"]||a("__core-js_shared__",{});e.exports=o},yoRg:function(e,t,n){var r=n("UTVS"),a=n("/GqU"),o=n("TWQb").indexOf,u=n("0BK2");e.exports=function(e,t){var n,i=a(e),c=0,l=[];for(n in i)!r(u,n)&&r(i,n)&&l.push(n);for(;t.length>c;)r(i,n=t[c++])&&(~o(l,n)||l.push(n));return l}},"z/sB":function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return f}));var r=n("kD0k"),a=n.n(r),o=(n("ls82"),n("/S4K")),u=n("u661"),i=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,o,i,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={data:null,error:null},e.prev=1,e.next=4,Object(u.g)({username:t,password:n});case 4:r=e.sent,e.next=13;break;case 7:return e.prev=7,e.t0=e.catch(1),(i=e.t0.response.data.error)&&"auth/duplicated-user"===i&&(o.error={username:"Nome de usuário já em uso"}),e.abrupt("return",o);case 13:return c=r.data,o.data={ida:c.data.ida,token:c.data.token},e.abrupt("return",o);case 16:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),c=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={data:null,error:null},e.prev=1,e.next=4,Object(u.b)(t,n);case 4:e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),(o=e.t0.response.data.error)&&"email/invalid-email"===o?r.error={email:"Email inválido"}:o&&"email/invalid-ida"===o&&(r.error={email:"IDA inválido"}),e.abrupt("return",r);case 12:return r.data={send:!0},e.abrupt("return",r);case 14:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,o,i,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={data:null,error:null},e.prev=1,e.next=4,Object(u.c)(t,n);case 4:r=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),(i=e.t0.response.data.error)&&"email/invalid-email"===i?o.error={error:"Email inválido"}:i&&"email/invalid-ida"===i?o.error={error:"IDA inválido"}:i&&"email/invalid-token"===i?o.error={error:"Token inválido"}:i&&"email/expired-token"===i&&(o.error={error:"Token expirado"}),e.abrupt("return",o);case 12:return c=r.data,o.data=c,e.abrupt("return",o);case 15:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),s=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,o,i,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={data:null,error:null},e.prev=1,e.next=4,Object(u.d)(t,n);case 4:r=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),(i=e.t0.response.data.error)&&"phone/invalid-number"===i?o.error={phone:"Número inválido"}:i&&"phone/invalid-ida"===i&&(o.error={phone:"IDA inválido"}),e.abrupt("return",o);case 12:return c=r.data,o.data={ida:c.data.ida,phone:c.data.phone},e.abrupt("return",o);case 15:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,o,i,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={data:null,error:null},e.prev=1,e.next=4,Object(u.e)(t,n);case 4:r=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),(i=e.t0.response.data.error)&&"phone/invalid-number"===i?o.error={code:"Número inválido"}:i&&"phone/invalid-ida"===i?o.error={code:"IDA inválido"}:i&&"phone/invalid-code"===i&&(o.error={code:"Código inválido"}),e.abrupt("return",o);case 12:return c=r.data,o.data={ida:c.data.ida,phone:c.data.phone},e.abrupt("return",o);case 15:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()},zBJ4:function(e,t,n){var r=n("2oRo"),a=n("hh1v"),o=r.document,u=a(o)&&a(o.createElement);e.exports=function(e){return u?o.createElement(e):{}}},zfnd:function(e,t,n){var r=n("glrk"),a=n("hh1v"),o=n("8GlL");e.exports=function(e,t){if(r(e),a(t)&&t.constructor===e)return t;var n=o.f(e);return(0,n.resolve)(t),n.promise}},zk60:function(e,t,n){var r=n("2oRo"),a=n("kRJp");e.exports=function(e,t){try{a(r,e,t)}catch(n){r[e]=t}return t}}}]);
//# sourceMappingURL=component---src-pages-signup-index-tsx-52599c838442ff4fa75b.js.map