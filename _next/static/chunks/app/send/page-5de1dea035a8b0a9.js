(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{9289:function(e,t,n){Promise.resolve().then(n.bind(n,3453))},6696:function(e){"use strict";let t="/StaticMessenger";e.exports={basePath:t,output:"export",reactStrictMode:!0,env:{basePath:t}}},3453:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(8754),s=n(6371),u=n(1860),i=n(7984),c=n.n(i),a=n(2123),o=n(9513);n(9254);var l=n(4838).Buffer;function f(){let e=(0,a.useRef)(),[t,n]=(0,u.K)("publicKey"),[i,f]=(0,a.useState)("");return t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.xv,{children:"Message"}),(0,r.jsx)(s.Kx,{ref:e}),(0,r.jsx)(s.xu,{height:"12px"}),(0,r.jsx)(s.zx,{variant:"outline",onClick:()=>{let n=new Uint8Array(32);crypto.getRandomValues(n);let r=l.from(n).toString("base64"),s=e.current.value,u=new(c()).ModeOfOperation.ctr(n),i=c().utils.hex.fromBytes(u.encrypt(c().utils.utf8.toBytes(s))),a=new o.Z;a.setKey(t),f(JSON.stringify([a.encrypt(r),i]))},children:"Encrypt"}),(0,r.jsx)(s.xu,{height:"12px"}),(0,r.jsx)(s.xv,{children:"Encrypted message"}),(0,r.jsx)(s.Kx,{disabled:!0,value:i})]}):null}},1860:function(e,t,n){"use strict";n.d(t,{B:function(){return c},K:function(){return i}});var r=n(2123),s=n(6696),u=n.n(s);function i(e,t,n){let[s,u]=(0,r.useState)(void 0===t?null:t),[i,c]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!i){let t=new URL(window.location.href).searchParams.get(e);if(null!=t)try{u(t),n&&n(t)}catch(e){}c(!0)}},[u,e,n,i]),[s,u]}function c(){return new URL(window.location.href).host+u().basePath}}},function(e){e.O(0,[999,513,782,254,146,672,744],function(){return e(e.s=9289)}),_N_E=e.O()}]);