webpackJsonp([1],{"5T+d":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},o,!1,function(e){n("mVEf")},null,null).exports,i=n("/ocq"),s=n("mtWM"),l=n.n(s),u=n("mw3O"),c=n.n(u);l.a.defaults.timeout=1e4,l.a.defaults.baseURL="",l.a.defaults.withCredentials=!1;const d=((f=new Object)._queryingURLs={},f.isQuerying=(e=>e in f._queryingURLs),f.add=(e=>{f._queryingURLs[e]=!0}),f.remove=(e=>{f.isQuerying(e)&&delete f._queryingURLs[e]}),f);var f;let p=null,_=null;function g(e,t){if(null==e)return t;if(null!=t)for(let n in t)e[n]=t[n];return e}function h(e){let t={};for(let n in e){let r=e[n];"object"==typeof r&&(r=JSON.stringify(r)),t[n]=r}return c.a.stringify(t)}const y=e=>{var t=new Object;return t._url=e,t.data=(e=>(t._data=e,t)),t.defResp=(e=>(t._defResp=e,t)),t.then=(e=>(t._then=e,t._send("post"),t)),t.catch=(e=>(t._catch=e,t)),t.config=(e=>(t._config=e,t)),t.loadingSilence=(()=>(t._loadingSilence=!0,t)),t.tipsSilence=(()=>(t._tipsSilence=!0,t)),t.post=(()=>(t._send("post"),t)),t.get=(()=>(t._send("get"),t)),t._alreadyQuery=!1,t._then=(e=>{}),t._catch=(e=>{}),t._data={},t._defResp=null,t._loadingSilence=!1,t._tipsSilence=!1,t._config={headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"}},t._send=(e=>{if(t._alreadyQuery)return;if(t._alreadyQuery=!0,d.isQuerying(t._url))return void console.log("重复请求了"+t._url);null!=p&&p(t),d.add(t._url);let n=null;(n="post"==e?l.a.post(t._url,h(t._data),t._config):l.a.get(t._url,h(t._data),t._config)).then(e=>{d.remove(t._url);let n=e.data;n=g(n,t._defResp),null!=_&&_(t,n),"success"==n.status?t._then(n.msg):t._catch(n)}).catch(e=>{let n=e.response,r=null;null==n?r={status:"error",code:"NetworkError",msg:e.message,now:new Date}:(r=n.data).hasOwnProperty("msg")||(r={status:"error",code:n.status,msg:n.data,header:n.headers,now:new Date}),r=g(r,t._defResp),null!=_&&_(t,r),d.remove(t._url),t._catch(r)})}),t};y.setPreQueryCallback=function(e){p=e},y.setEndQueryCallback=function(e){_=e},r.default.prototype.$echo=y;var m=y,v={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n    错误\n")])},staticRenderFns:[]},w=n("VU/8")({name:"Error"},v,!1,null,null,null).exports,b={name:"Home",data:()=>({radio:"1"}),methods:{init:function(){}},mounted(){this.init()}},R={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"v-body"},[this._v("\n    测试一个body\n")])},staticRenderFns:[]};var E=n("VU/8")(b,R,!1,function(e){n("5T+d")},"data-v-03df5e98",null).exports,N=n("zL8q"),Q=n.n(N);function S(e,t){let n={};return"string"==typeof e?(n.message=e,n.title=t):n=e,"duration"in n||(n.duration=2e3),n}const U={success:function(e,t="成功"){let n=S(e,t);Q.a.Notification.success(n)},error:function(e,t="错误"){let n=S(e,t);Q.a.Notification.error(n)},info:function(e,t="提示"){let n=S(e,t);Q.a.Notification.info(n)},warning:function(e,t="警告"){let n=S(e,t);Q.a.Notification.warning(n)},tip:function(e){Q.a.Notification(e)}};r.default.prototype.$tips=U;var q=U;n("vwbq");r.default.use(i.a);const k=i.a.prototype.push;i.a.prototype.push=function(e){return k.call(this,e).catch(e=>e)};const L=[{path:"/",component:E},{path:"*",component:w}],C=new i.a({mode:"history",routes:L});C.beforeEach(function(e,t,n){return n()});var O=C,x=n("NYxO");r.default.use(x.a);var T=new x.a.Store({state:{userInfo:""},mutations:{updateUser(e,t){e.userInfo=t}}}),j=(n("tvR6"),n("gJwn"),n("ppUw")),V=n.n(j);var $={clone:function e(t){let n;if("object"==typeof t)if(null===t)n=null;else if(t instanceof Array){n=[];for(let r=0,o=t.length;r<o;r++)n.push(e(t[r]))}else{n={};for(let r in t)n[r]=e(t[r])}else n=t;return n}};r.default.use(Q.a),r.default.use(V.a),window.Echo=m,window.Tips=q,window.Tools=$,r.default.config.productionTip=!1;let A=null;m.setPreQueryCallback(e=>{e._loadingSilence||null==A&&(A=Q.a.Loading.service({fullscreen:!0,lock:!0,text:"加载中...",background:"rgba(0, 0, 0, 0.5)"}))}),m.setEndQueryCallback((e,t)=>{null!=A&&(A.close(),A=null),"success"!=t.status&&(e._tipsSilence?console.log("请求结束静默，不提示："+t.msg):q.error(t.msg))}),new r.default({el:"#app",router:O,store:T,components:{App:a},template:"<App/>"})},gJwn:function(e,t){},mVEf:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b020e61fef164e96bc54.js.map