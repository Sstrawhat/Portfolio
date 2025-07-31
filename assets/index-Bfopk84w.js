(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function mE(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ip={exports:{}},Ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function AR(){if(ux)return Ll;ux=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:u,ref:s!==void 0?s:null,props:l}}return Ll.Fragment=t,Ll.jsx=n,Ll.jsxs=n,Ll}var fx;function RR(){return fx||(fx=1,ip.exports=AR()),ip.exports}var K=RR(),ap={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx;function CR(){if(hx)return oe;hx=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function _(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function S(P,tt,xt){this.props=P,this.context=tt,this.refs=b,this.updater=xt||x}S.prototype.isReactComponent={},S.prototype.setState=function(P,tt){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,tt,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function y(){}y.prototype=S.prototype;function L(P,tt,xt){this.props=P,this.context=tt,this.refs=b,this.updater=xt||x}var R=L.prototype=new y;R.constructor=L,M(R,S.prototype),R.isPureReactComponent=!0;var w=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function I(P,tt,xt,Et,$,gt){return xt=gt.ref,{$$typeof:e,type:P,key:tt,ref:xt!==void 0?xt:null,props:gt}}function V(P,tt){return I(P.type,tt,void 0,void 0,void 0,P.props)}function U(P){return typeof P=="object"&&P!==null&&P.$$typeof===e}function D(P){var tt={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(xt){return tt[xt]})}var G=/\/+/g;function ct(P,tt){return typeof P=="object"&&P!==null&&P.key!=null?D(""+P.key):tt.toString(36)}function lt(){}function mt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(lt,lt):(P.status="pending",P.then(function(tt){P.status==="pending"&&(P.status="fulfilled",P.value=tt)},function(tt){P.status==="pending"&&(P.status="rejected",P.reason=tt)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function dt(P,tt,xt,Et,$){var gt=typeof P;(gt==="undefined"||gt==="boolean")&&(P=null);var St=!1;if(P===null)St=!0;else switch(gt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(P.$$typeof){case e:case t:St=!0;break;case m:return St=P._init,dt(St(P._payload),tt,xt,Et,$)}}if(St)return $=$(P),St=Et===""?"."+ct(P,0):Et,w($)?(xt="",St!=null&&(xt=St.replace(G,"$&/")+"/"),dt($,tt,xt,"",function(ce){return ce})):$!=null&&(U($)&&($=V($,xt+($.key==null||P&&P.key===$.key?"":(""+$.key).replace(G,"$&/")+"/")+St)),tt.push($)),1;St=0;var Ct=Et===""?".":Et+":";if(w(P))for(var It=0;It<P.length;It++)Et=P[It],gt=Ct+ct(Et,It),St+=dt(Et,tt,xt,gt,$);else if(It=_(P),typeof It=="function")for(P=It.call(P),It=0;!(Et=P.next()).done;)Et=Et.value,gt=Ct+ct(Et,It++),St+=dt(Et,tt,xt,gt,$);else if(gt==="object"){if(typeof P.then=="function")return dt(mt(P),tt,xt,Et,$);throw tt=String(P),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return St}function B(P,tt,xt){if(P==null)return P;var Et=[],$=0;return dt(P,Et,"","",function(gt){return tt.call(xt,gt,$++)}),Et}function j(P){if(P._status===-1){var tt=P._result;tt=tt(),tt.then(function(xt){(P._status===0||P._status===-1)&&(P._status=1,P._result=xt)},function(xt){(P._status===0||P._status===-1)&&(P._status=2,P._result=xt)}),P._status===-1&&(P._status=0,P._result=tt)}if(P._status===1)return P._result.default;throw P._result}var W=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Mt(){}return oe.Children={map:B,forEach:function(P,tt,xt){B(P,function(){tt.apply(this,arguments)},xt)},count:function(P){var tt=0;return B(P,function(){tt++}),tt},toArray:function(P){return B(P,function(tt){return tt})||[]},only:function(P){if(!U(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},oe.Component=S,oe.Fragment=n,oe.Profiler=s,oe.PureComponent=L,oe.StrictMode=a,oe.Suspense=h,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,oe.__COMPILER_RUNTIME={__proto__:null,c:function(P){return N.H.useMemoCache(P)}},oe.cache=function(P){return function(){return P.apply(null,arguments)}},oe.cloneElement=function(P,tt,xt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Et=M({},P.props),$=P.key,gt=void 0;if(tt!=null)for(St in tt.ref!==void 0&&(gt=void 0),tt.key!==void 0&&($=""+tt.key),tt)!z.call(tt,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&tt.ref===void 0||(Et[St]=tt[St]);var St=arguments.length-2;if(St===1)Et.children=xt;else if(1<St){for(var Ct=Array(St),It=0;It<St;It++)Ct[It]=arguments[It+2];Et.children=Ct}return I(P.type,$,void 0,void 0,gt,Et)},oe.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:l,_context:P},P},oe.createElement=function(P,tt,xt){var Et,$={},gt=null;if(tt!=null)for(Et in tt.key!==void 0&&(gt=""+tt.key),tt)z.call(tt,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&($[Et]=tt[Et]);var St=arguments.length-2;if(St===1)$.children=xt;else if(1<St){for(var Ct=Array(St),It=0;It<St;It++)Ct[It]=arguments[It+2];$.children=Ct}if(P&&P.defaultProps)for(Et in St=P.defaultProps,St)$[Et]===void 0&&($[Et]=St[Et]);return I(P,gt,void 0,void 0,null,$)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(P){return{$$typeof:f,render:P}},oe.isValidElement=U,oe.lazy=function(P){return{$$typeof:m,_payload:{_status:-1,_result:P},_init:j}},oe.memo=function(P,tt){return{$$typeof:p,type:P,compare:tt===void 0?null:tt}},oe.startTransition=function(P){var tt=N.T,xt={};N.T=xt;try{var Et=P(),$=N.S;$!==null&&$(xt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(Mt,W)}catch(gt){W(gt)}finally{N.T=tt}},oe.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},oe.use=function(P){return N.H.use(P)},oe.useActionState=function(P,tt,xt){return N.H.useActionState(P,tt,xt)},oe.useCallback=function(P,tt){return N.H.useCallback(P,tt)},oe.useContext=function(P){return N.H.useContext(P)},oe.useDebugValue=function(){},oe.useDeferredValue=function(P,tt){return N.H.useDeferredValue(P,tt)},oe.useEffect=function(P,tt,xt){var Et=N.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Et.useEffect(P,tt)},oe.useId=function(){return N.H.useId()},oe.useImperativeHandle=function(P,tt,xt){return N.H.useImperativeHandle(P,tt,xt)},oe.useInsertionEffect=function(P,tt){return N.H.useInsertionEffect(P,tt)},oe.useLayoutEffect=function(P,tt){return N.H.useLayoutEffect(P,tt)},oe.useMemo=function(P,tt){return N.H.useMemo(P,tt)},oe.useOptimistic=function(P,tt){return N.H.useOptimistic(P,tt)},oe.useReducer=function(P,tt,xt){return N.H.useReducer(P,tt,xt)},oe.useRef=function(P){return N.H.useRef(P)},oe.useState=function(P){return N.H.useState(P)},oe.useSyncExternalStore=function(P,tt,xt){return N.H.useSyncExternalStore(P,tt,xt)},oe.useTransition=function(){return N.H.useTransition()},oe.version="19.1.0",oe}var dx;function Og(){return dx||(dx=1,ap.exports=CR()),ap.exports}var et=Og();const gE=mE(et);var rp={exports:{}},Ul={},sp={exports:{}},op={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px;function wR(){return px||(px=1,function(e){function t(B,j){var W=B.length;B.push(j);t:for(;0<W;){var Mt=W-1>>>1,P=B[Mt];if(0<s(P,j))B[Mt]=j,B[W]=P,W=Mt;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var j=B[0],W=B.pop();if(W!==j){B[0]=W;t:for(var Mt=0,P=B.length,tt=P>>>1;Mt<tt;){var xt=2*(Mt+1)-1,Et=B[xt],$=xt+1,gt=B[$];if(0>s(Et,W))$<P&&0>s(gt,Et)?(B[Mt]=gt,B[$]=W,Mt=$):(B[Mt]=Et,B[xt]=W,Mt=xt);else if($<P&&0>s(gt,W))B[Mt]=gt,B[$]=W,Mt=$;else break t}}return j}function s(B,j){var W=B.sortIndex-j.sortIndex;return W!==0?W:B.id-j.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var h=[],p=[],m=1,v=null,_=3,x=!1,M=!1,b=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var j=n(p);j!==null;){if(j.callback===null)a(p);else if(j.startTime<=B)a(p),j.sortIndex=j.expirationTime,t(h,j);else break;j=n(p)}}function N(B){if(b=!1,w(B),!M)if(n(h)!==null)M=!0,z||(z=!0,ct());else{var j=n(p);j!==null&&dt(N,j.startTime-B)}}var z=!1,I=-1,V=5,U=-1;function D(){return S?!0:!(e.unstable_now()-U<V)}function G(){if(S=!1,z){var B=e.unstable_now();U=B;var j=!0;try{t:{M=!1,b&&(b=!1,L(I),I=-1),x=!0;var W=_;try{e:{for(w(B),v=n(h);v!==null&&!(v.expirationTime>B&&D());){var Mt=v.callback;if(typeof Mt=="function"){v.callback=null,_=v.priorityLevel;var P=Mt(v.expirationTime<=B);if(B=e.unstable_now(),typeof P=="function"){v.callback=P,w(B),j=!0;break e}v===n(h)&&a(h),w(B)}else a(h);v=n(h)}if(v!==null)j=!0;else{var tt=n(p);tt!==null&&dt(N,tt.startTime-B),j=!1}}break t}finally{v=null,_=W,x=!1}j=void 0}}finally{j?ct():z=!1}}}var ct;if(typeof R=="function")ct=function(){R(G)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,mt=lt.port2;lt.port1.onmessage=G,ct=function(){mt.postMessage(null)}}else ct=function(){y(G,0)};function dt(B,j){I=y(function(){B(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_next=function(B){switch(_){case 1:case 2:case 3:var j=3;break;default:j=_}var W=_;_=j;try{return B()}finally{_=W}},e.unstable_requestPaint=function(){S=!0},e.unstable_runWithPriority=function(B,j){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=_;_=B;try{return j()}finally{_=W}},e.unstable_scheduleCallback=function(B,j,W){var Mt=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Mt+W:Mt):W=Mt,B){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=W+P,B={id:m++,callback:j,priorityLevel:B,startTime:W,expirationTime:P,sortIndex:-1},W>Mt?(B.sortIndex=W,t(p,B),n(h)===null&&B===n(p)&&(b?(L(I),I=-1):b=!0,dt(N,W-Mt))):(B.sortIndex=P,t(h,B),M||x||(M=!0,z||(z=!0,ct()))),B},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(B){var j=_;return function(){var W=_;_=j;try{return B.apply(this,arguments)}finally{_=W}}}}(op)),op}var mx;function DR(){return mx||(mx=1,sp.exports=wR()),sp.exports}var lp={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gx;function LR(){if(gx)return Fn;gx=1;var e=Og();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)p+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(h,p,m){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:h,containerInfo:p,implementation:m}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Fn.createPortal=function(h,p){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(h,p,null,m)},Fn.flushSync=function(h){var p=u.T,m=a.p;try{if(u.T=null,a.p=2,h)return h()}finally{u.T=p,a.p=m,a.d.f()}},Fn.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(h,p))},Fn.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},Fn.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var m=p.as,v=f(m,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;m==="style"?a.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):m==="script"&&a.d.X(h,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Fn.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var m=f(p.as,p.crossOrigin);a.d.M(h,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(h)},Fn.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var m=p.as,v=f(m,p.crossOrigin);a.d.L(h,m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Fn.preloadModule=function(h,p){if(typeof h=="string")if(p){var m=f(p.as,p.crossOrigin);a.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(h)},Fn.requestFormReset=function(h){a.d.r(h)},Fn.unstable_batchedUpdates=function(h,p){return h(p)},Fn.useFormState=function(h,p,m){return u.H.useFormState(h,p,m)},Fn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Fn.version="19.1.0",Fn}var vx;function UR(){if(vx)return lp.exports;vx=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),lp.exports=LR(),lp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x;function PR(){if(_x)return Ul;_x=1;var e=DR(),t=Og(),n=UR();function a(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function u(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function f(i){if(l(i)!==i)throw Error(a(188))}function h(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(a(188));return r!==i?null:i}for(var o=i,c=r;;){var d=o.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===o)return f(d),i;if(g===c)return f(d),r;g=g.sibling}throw Error(a(188))}if(o.return!==c.return)o=d,c=g;else{for(var E=!1,T=d.child;T;){if(T===o){E=!0,o=d,c=g;break}if(T===c){E=!0,c=d,o=g;break}T=T.sibling}if(!E){for(T=g.child;T;){if(T===o){E=!0,o=g,c=d;break}if(T===c){E=!0,c=g,o=d;break}T=T.sibling}if(!E)throw Error(a(189))}}if(o.alternate!==c)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?i:r}function p(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=p(i),r!==null)return r;i=i.sibling}return null}var m=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),R=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ct(i){return i===null||typeof i!="object"?null:(i=G&&i[G]||i["@@iterator"],typeof i=="function"?i:null)}var lt=Symbol.for("react.client.reference");function mt(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===lt?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case M:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case N:return"Suspense";case z:return"SuspenseList";case U:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case x:return"Portal";case R:return(i.displayName||"Context")+".Provider";case L:return(i._context.displayName||"Context")+".Consumer";case w:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case I:return r=i.displayName||null,r!==null?r:mt(i.type)||"Memo";case V:r=i._payload,i=i._init;try{return mt(i(r))}catch{}}return null}var dt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},Mt=[],P=-1;function tt(i){return{current:i}}function xt(i){0>P||(i.current=Mt[P],Mt[P]=null,P--)}function Et(i,r){P++,Mt[P]=i.current,i.current=r}var $=tt(null),gt=tt(null),St=tt(null),Ct=tt(null);function It(i,r){switch(Et(St,r),Et(gt,i),Et($,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?By(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=By(r),i=zy(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}xt($),Et($,i)}function ce(){xt($),xt(gt),xt(St)}function $t(i){i.memoizedState!==null&&Et(Ct,i);var r=$.current,o=zy(r,i.type);r!==o&&(Et(gt,i),Et($,o))}function Xe(i){gt.current===i&&(xt($),xt(gt)),Ct.current===i&&(xt(Ct),Al._currentValue=W)}var Ve=Object.prototype.hasOwnProperty,de=e.unstable_scheduleCallback,H=e.unstable_cancelCallback,Wn=e.unstable_shouldYield,ye=e.unstable_requestPaint,re=e.unstable_now,qt=e.unstable_getCurrentPriorityLevel,Ne=e.unstable_ImmediatePriority,Xt=e.unstable_UserBlockingPriority,O=e.unstable_NormalPriority,A=e.unstable_LowPriority,nt=e.unstable_IdlePriority,yt=e.log,bt=e.unstable_setDisableYieldValue,ht=null,zt=null;function wt(i){if(typeof yt=="function"&&bt(i),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(ht,i)}catch{}}var Dt=Math.clz32?Math.clz32:Ht,xe=Math.log,Rt=Math.LN2;function Ht(i){return i>>>=0,i===0?32:31-(xe(i)/Rt|0)|0}var Zt=256,Jt=4194304;function Ft(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function fe(i,r,o){var c=i.pendingLanes;if(c===0)return 0;var d=0,g=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var T=c&134217727;return T!==0?(c=T&~g,c!==0?d=Ft(c):(E&=T,E!==0?d=Ft(E):o||(o=T&~i,o!==0&&(d=Ft(o))))):(T=c&~g,T!==0?d=Ft(T):E!==0?d=Ft(E):o||(o=c&~i,o!==0&&(d=Ft(o)))),d===0?0:r!==0&&r!==d&&(r&g)===0&&(g=d&-d,o=r&-r,g>=o||g===32&&(o&4194048)!==0)?r:d}function ae(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Oe(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var i=Zt;return Zt<<=1,(Zt&4194048)===0&&(Zt=256),i}function Nt(){var i=Jt;return Jt<<=1,(Jt&62914560)===0&&(Jt=4194304),i}function ut(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function vt(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Bt(i,r,o,c,d,g){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var T=i.entanglements,F=i.expirationTimes,J=i.hiddenUpdates;for(o=E&~o;0<o;){var ft=31-Dt(o),_t=1<<ft;T[ft]=0,F[ft]=-1;var it=J[ft];if(it!==null)for(J[ft]=null,ft=0;ft<it.length;ft++){var at=it[ft];at!==null&&(at.lane&=-536870913)}o&=~_t}c!==0&&Ot(i,c,0),g!==0&&d===0&&i.tag!==0&&(i.suspendedLanes|=g&~(E&~r))}function Ot(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var c=31-Dt(r);i.entangledLanes|=r,i.entanglements[c]=i.entanglements[c]|1073741824|o&4194090}function se(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var c=31-Dt(o),d=1<<c;d&r|i[c]&r&&(i[c]|=r),o&=~d}}function je(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function un(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Ae(){var i=j.p;return i!==0?i:(i=window.event,i===void 0?32:ax(i.type))}function ii(i,r){var o=j.p;try{return j.p=i,r()}finally{j.p=o}}var Mn=Math.random().toString(36).slice(2),mn="__reactFiber$"+Mn,Cn="__reactProps$"+Mn,qn="__reactContainer$"+Mn,Ur="__reactEvents$"+Mn,Cc="__reactListeners$"+Mn,wc="__reactHandles$"+Mn,Pr="__reactResources$"+Mn,Ha="__reactMarker$"+Mn;function Ga(i){delete i[mn],delete i[Cn],delete i[Ur],delete i[Cc],delete i[wc]}function ta(i){var r=i[mn];if(r)return r;for(var o=i.parentNode;o;){if(r=o[qn]||o[mn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=ky(i);i!==null;){if(o=i[mn])return o;i=ky(i)}return r}i=o,o=i.parentNode}return null}function ea(i){if(i=i[mn]||i[qn]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Nr(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(a(33))}function ka(i){var r=i[Pr];return r||(r=i[Pr]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function fn(i){i[Ha]=!0}var Dc=new Set,Lc={};function na(i,r){C(i,r),C(i+"Capture",r)}function C(i,r){for(Lc[i]=r,i=0;i<r.length;i++)Dc.add(r[i])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},st={};function Z(i){return Ve.call(st,i)?!0:Ve.call(rt,i)?!1:Y.test(i)?st[i]=!0:(rt[i]=!0,!1)}function Tt(i,r,o){if(Z(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function Lt(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function Ut(i,r,o,c){if(c===null)i.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+c)}}var Vt,ee;function Yt(i){if(Vt===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Vt=r&&r[1]||"",ee=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vt+i+ee}var Wt=!1;function me(i,r){if(!i||Wt)return"";Wt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(at){var it=at}Reflect.construct(i,[],_t)}else{try{_t.call()}catch(at){it=at}i.call(_t.prototype)}}else{try{throw Error()}catch(at){it=at}(_t=i())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(at){if(at&&it&&typeof at.stack=="string")return[at.stack,it.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),E=g[0],T=g[1];if(E&&T){var F=E.split(`
`),J=T.split(`
`);for(d=c=0;c<F.length&&!F[c].includes("DetermineComponentFrameRoot");)c++;for(;d<J.length&&!J[d].includes("DetermineComponentFrameRoot");)d++;if(c===F.length||d===J.length)for(c=F.length-1,d=J.length-1;1<=c&&0<=d&&F[c]!==J[d];)d--;for(;1<=c&&0<=d;c--,d--)if(F[c]!==J[d]){if(c!==1||d!==1)do if(c--,d--,0>d||F[c]!==J[d]){var ft=`
`+F[c].replace(" at new "," at ");return i.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",i.displayName)),ft}while(1<=c&&0<=d);break}}}finally{Wt=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?Yt(o):""}function Re(i){switch(i.tag){case 26:case 27:case 5:return Yt(i.type);case 16:return Yt("Lazy");case 13:return Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return me(i.type,!1);case 11:return me(i.type.render,!1);case 1:return me(i.type,!0);case 31:return Yt("Activity");default:return""}}function Ze(i){try{var r="";do r+=Re(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Se(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Me(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Kt(i){var r=Me(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),c=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,g=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,g.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function tn(i){i._valueTracker||(i._valueTracker=Kt(i))}function Te(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return i&&(c=Me(i)?i.checked?"true":"false":i.value),i=c,i!==o?(r.setValue(i),!0):!1}function Nn(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Xa=/[\n"\\]/g;function We(i){return i.replace(Xa,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function ia(i,r,o,c,d,g,E,T){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+Se(r)):i.value!==""+Se(r)&&(i.value=""+Se(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?On(i,E,Se(r)):o!=null?On(i,E,Se(o)):c!=null&&i.removeAttribute("value"),d==null&&g!=null&&(i.defaultChecked=!!g),d!=null&&(i.checked=d&&typeof d!="function"&&typeof d!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?i.name=""+Se(T):i.removeAttribute("name")}function He(i,r,o,c,d,g,E,T){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(i.type=g),r!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||r!=null))return;o=o!=null?""+Se(o):"",r=r!=null?""+Se(r):o,T||r===i.value||(i.value=r),i.defaultValue=r}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=T?i.checked:!!c,i.defaultChecked=!!c,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function On(i,r,o){r==="number"&&Nn(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function gn(i,r,o,c){if(i=i.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<i.length;o++)d=r.hasOwnProperty("$"+i[o].value),i[o].selected!==d&&(i[o].selected=d),d&&c&&(i[o].defaultSelected=!0)}else{for(o=""+Se(o),r=null,d=0;d<i.length;d++){if(i[d].value===o){i[d].selected=!0,c&&(i[d].defaultSelected=!0);return}r!==null||i[d].disabled||(r=i[d])}r!==null&&(r.selected=!0)}}function En(i,r,o){if(r!=null&&(r=""+Se(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+Se(o):""}function wn(i,r,o,c){if(r==null){if(c!=null){if(o!=null)throw Error(a(92));if(dt(c)){if(1<c.length)throw Error(a(93));c=c[0]}o=c}o==null&&(o=""),r=o}o=Se(r),i.defaultValue=o,c=i.textContent,c===o&&c!==""&&c!==null&&(i.value=c)}function Bi(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var aa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bv(i,r,o){var c=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":c?i.setProperty(r,o):typeof o!="number"||o===0||aa.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function zv(i,r,o){if(r!=null&&typeof r!="object")throw Error(a(62));if(i=i.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var d in r)c=r[d],r.hasOwnProperty(d)&&o[d]!==c&&Bv(i,d,c)}else for(var g in r)r.hasOwnProperty(g)&&Bv(i,g,r[g])}function nh(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var b1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),T1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uc(i){return T1.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var ih=null;function ah(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ss=null,Ms=null;function Vv(i){var r=ea(i);if(r&&(i=r.stateNode)){var o=i[Cn]||null;t:switch(i=r.stateNode,r.type){case"input":if(ia(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+We(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==i&&c.form===i.form){var d=c[Cn]||null;if(!d)throw Error(a(90));ia(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(r=0;r<o.length;r++)c=o[r],c.form===i.form&&Te(c)}break t;case"textarea":En(i,o.value,o.defaultValue);break t;case"select":r=o.value,r!=null&&gn(i,!!o.multiple,r,!1)}}}var rh=!1;function Hv(i,r,o){if(rh)return i(r,o);rh=!0;try{var c=i(r);return c}finally{if(rh=!1,(Ss!==null||Ms!==null)&&(vu(),Ss&&(r=Ss,i=Ms,Ms=Ss=null,Vv(r),i)))for(r=0;r<i.length;r++)Vv(i[r])}}function zo(i,r){var o=i.stateNode;if(o===null)return null;var c=o[Cn]||null;if(c===null)return null;o=c[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break t;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(a(231,r,typeof o));return o}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sh=!1;if(ra)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){sh=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{sh=!1}var ja=null,oh=null,Pc=null;function Gv(){if(Pc)return Pc;var i,r=oh,o=r.length,c,d="value"in ja?ja.value:ja.textContent,g=d.length;for(i=0;i<o&&r[i]===d[i];i++);var E=o-i;for(c=1;c<=E&&r[o-c]===d[g-c];c++);return Pc=d.slice(i,1<c?1-c:void 0)}function Nc(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Oc(){return!0}function kv(){return!1}function Yn(i){function r(o,c,d,g,E){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var T in i)i.hasOwnProperty(T)&&(o=i[T],this[T]=o?o(g):g[T]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Oc:kv,this.isPropagationStopped=kv,this}return m(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Oc)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Oc)},persist:function(){},isPersistent:Oc}),r}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ic=Yn(Or),Ho=m({},Or,{view:0,detail:0}),A1=Yn(Ho),lh,ch,Go,Fc=m({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fh,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Go&&(Go&&i.type==="mousemove"?(lh=i.screenX-Go.screenX,ch=i.screenY-Go.screenY):ch=lh=0,Go=i),lh)},movementY:function(i){return"movementY"in i?i.movementY:ch}}),Xv=Yn(Fc),R1=m({},Fc,{dataTransfer:0}),C1=Yn(R1),w1=m({},Ho,{relatedTarget:0}),uh=Yn(w1),D1=m({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),L1=Yn(D1),U1=m({},Or,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),P1=Yn(U1),N1=m({},Or,{data:0}),jv=Yn(N1),O1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B1(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=F1[i])?!!r[i]:!1}function fh(){return B1}var z1=m({},Ho,{key:function(i){if(i.key){var r=O1[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Nc(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?I1[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fh,charCode:function(i){return i.type==="keypress"?Nc(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Nc(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),V1=Yn(z1),H1=m({},Fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wv=Yn(H1),G1=m({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fh}),k1=Yn(G1),X1=m({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),j1=Yn(X1),W1=m({},Fc,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),q1=Yn(W1),Y1=m({},Or,{newState:0,oldState:0}),K1=Yn(Y1),Z1=[9,13,27,32],hh=ra&&"CompositionEvent"in window,ko=null;ra&&"documentMode"in document&&(ko=document.documentMode);var Q1=ra&&"TextEvent"in window&&!ko,qv=ra&&(!hh||ko&&8<ko&&11>=ko),Yv=" ",Kv=!1;function Zv(i,r){switch(i){case"keyup":return Z1.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qv(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Es=!1;function $1(i,r){switch(i){case"compositionend":return Qv(r);case"keypress":return r.which!==32?null:(Kv=!0,Yv);case"textInput":return i=r.data,i===Yv&&Kv?null:i;default:return null}}function J1(i,r){if(Es)return i==="compositionend"||!hh&&Zv(i,r)?(i=Gv(),Pc=oh=ja=null,Es=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return qv&&r.locale!=="ko"?null:r.data;default:return null}}var tA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $v(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!tA[i.type]:r==="textarea"}function Jv(i,r,o,c){Ss?Ms?Ms.push(c):Ms=[c]:Ss=c,r=Eu(r,"onChange"),0<r.length&&(o=new Ic("onChange","change",null,o,c),i.push({event:o,listeners:r}))}var Xo=null,jo=null;function eA(i){Py(i,0)}function Bc(i){var r=Nr(i);if(Te(r))return i}function t0(i,r){if(i==="change")return r}var e0=!1;if(ra){var dh;if(ra){var ph="oninput"in document;if(!ph){var n0=document.createElement("div");n0.setAttribute("oninput","return;"),ph=typeof n0.oninput=="function"}dh=ph}else dh=!1;e0=dh&&(!document.documentMode||9<document.documentMode)}function i0(){Xo&&(Xo.detachEvent("onpropertychange",a0),jo=Xo=null)}function a0(i){if(i.propertyName==="value"&&Bc(jo)){var r=[];Jv(r,jo,i,ah(i)),Hv(eA,r)}}function nA(i,r,o){i==="focusin"?(i0(),Xo=r,jo=o,Xo.attachEvent("onpropertychange",a0)):i==="focusout"&&i0()}function iA(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Bc(jo)}function aA(i,r){if(i==="click")return Bc(r)}function rA(i,r){if(i==="input"||i==="change")return Bc(r)}function sA(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var ai=typeof Object.is=="function"?Object.is:sA;function Wo(i,r){if(ai(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!Ve.call(r,d)||!ai(i[d],r[d]))return!1}return!0}function r0(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function s0(i,r){var o=r0(i);i=0;for(var c;o;){if(o.nodeType===3){if(c=i+o.textContent.length,i<=r&&c>=r)return{node:o,offset:r-i};i=c}t:{for(;o;){if(o.nextSibling){o=o.nextSibling;break t}o=o.parentNode}o=void 0}o=r0(o)}}function o0(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?o0(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function l0(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Nn(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=Nn(i.document)}return r}function mh(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var oA=ra&&"documentMode"in document&&11>=document.documentMode,bs=null,gh=null,qo=null,vh=!1;function c0(i,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;vh||bs==null||bs!==Nn(c)||(c=bs,"selectionStart"in c&&mh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),qo&&Wo(qo,c)||(qo=c,c=Eu(gh,"onSelect"),0<c.length&&(r=new Ic("onSelect","select",null,r,o),i.push({event:r,listeners:c}),r.target=bs)))}function Ir(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var Ts={animationend:Ir("Animation","AnimationEnd"),animationiteration:Ir("Animation","AnimationIteration"),animationstart:Ir("Animation","AnimationStart"),transitionrun:Ir("Transition","TransitionRun"),transitionstart:Ir("Transition","TransitionStart"),transitioncancel:Ir("Transition","TransitionCancel"),transitionend:Ir("Transition","TransitionEnd")},_h={},u0={};ra&&(u0=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Fr(i){if(_h[i])return _h[i];if(!Ts[i])return i;var r=Ts[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in u0)return _h[i]=r[o];return i}var f0=Fr("animationend"),h0=Fr("animationiteration"),d0=Fr("animationstart"),lA=Fr("transitionrun"),cA=Fr("transitionstart"),uA=Fr("transitioncancel"),p0=Fr("transitionend"),m0=new Map,yh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yh.push("scrollEnd");function Ai(i,r){m0.set(i,r),na(r,[i])}var g0=new WeakMap;function pi(i,r){if(typeof i=="object"&&i!==null){var o=g0.get(i);return o!==void 0?o:(r={value:i,source:r,stack:Ze(r)},g0.set(i,r),r)}return{value:i,source:r,stack:Ze(r)}}var mi=[],As=0,xh=0;function zc(){for(var i=As,r=xh=As=0;r<i;){var o=mi[r];mi[r++]=null;var c=mi[r];mi[r++]=null;var d=mi[r];mi[r++]=null;var g=mi[r];if(mi[r++]=null,c!==null&&d!==null){var E=c.pending;E===null?d.next=d:(d.next=E.next,E.next=d),c.pending=d}g!==0&&v0(o,d,g)}}function Vc(i,r,o,c){mi[As++]=i,mi[As++]=r,mi[As++]=o,mi[As++]=c,xh|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function Sh(i,r,o,c){return Vc(i,r,o,c),Hc(i)}function Rs(i,r){return Vc(i,null,null,r),Hc(i)}function v0(i,r,o){i.lanes|=o;var c=i.alternate;c!==null&&(c.lanes|=o);for(var d=!1,g=i.return;g!==null;)g.childLanes|=o,c=g.alternate,c!==null&&(c.childLanes|=o),g.tag===22&&(i=g.stateNode,i===null||i._visibility&1||(d=!0)),i=g,g=g.return;return i.tag===3?(g=i.stateNode,d&&r!==null&&(d=31-Dt(o),i=g.hiddenUpdates,c=i[d],c===null?i[d]=[r]:c.push(r),r.lane=o|536870912),g):null}function Hc(i){if(50<_l)throw _l=0,Rd=null,Error(a(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var Cs={};function fA(i,r,o,c){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(i,r,o,c){return new fA(i,r,o,c)}function Mh(i){return i=i.prototype,!(!i||!i.isReactComponent)}function sa(i,r){var o=i.alternate;return o===null?(o=ri(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function _0(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function Gc(i,r,o,c,d,g){var E=0;if(c=i,typeof i=="function")Mh(i)&&(E=1);else if(typeof i=="string")E=dR(i,o,$.current)?26:i==="html"||i==="head"||i==="body"?27:5;else t:switch(i){case U:return i=ri(31,o,r,d),i.elementType=U,i.lanes=g,i;case M:return Br(o.children,d,g,r);case b:E=8,d|=24;break;case S:return i=ri(12,o,r,d|2),i.elementType=S,i.lanes=g,i;case N:return i=ri(13,o,r,d),i.elementType=N,i.lanes=g,i;case z:return i=ri(19,o,r,d),i.elementType=z,i.lanes=g,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case y:case R:E=10;break t;case L:E=9;break t;case w:E=11;break t;case I:E=14;break t;case V:E=16,c=null;break t}E=29,o=Error(a(130,i===null?"null":typeof i,"")),c=null}return r=ri(E,o,r,d),r.elementType=i,r.type=c,r.lanes=g,r}function Br(i,r,o,c){return i=ri(7,i,c,r),i.lanes=o,i}function Eh(i,r,o){return i=ri(6,i,null,r),i.lanes=o,i}function bh(i,r,o){return r=ri(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var ws=[],Ds=0,kc=null,Xc=0,gi=[],vi=0,zr=null,oa=1,la="";function Vr(i,r){ws[Ds++]=Xc,ws[Ds++]=kc,kc=i,Xc=r}function y0(i,r,o){gi[vi++]=oa,gi[vi++]=la,gi[vi++]=zr,zr=i;var c=oa;i=la;var d=32-Dt(c)-1;c&=~(1<<d),o+=1;var g=32-Dt(r)+d;if(30<g){var E=d-d%5;g=(c&(1<<E)-1).toString(32),c>>=E,d-=E,oa=1<<32-Dt(r)+d|o<<d|c,la=g+i}else oa=1<<g|o<<d|c,la=i}function Th(i){i.return!==null&&(Vr(i,1),y0(i,1,0))}function Ah(i){for(;i===kc;)kc=ws[--Ds],ws[Ds]=null,Xc=ws[--Ds],ws[Ds]=null;for(;i===zr;)zr=gi[--vi],gi[vi]=null,la=gi[--vi],gi[vi]=null,oa=gi[--vi],gi[vi]=null}var kn=null,en=null,De=!1,Hr=null,zi=!1,Rh=Error(a(519));function Gr(i){var r=Error(a(418,""));throw Zo(pi(r,i)),Rh}function x0(i){var r=i.stateNode,o=i.type,c=i.memoizedProps;switch(r[mn]=i,r[Cn]=c,o){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(o=0;o<xl.length;o++)ve(xl[o],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":ve("invalid",r),He(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),tn(r);break;case"select":ve("invalid",r);break;case"textarea":ve("invalid",r),wn(r,c.value,c.defaultValue,c.children),tn(r)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||c.suppressHydrationWarning===!0||Fy(r.textContent,o)?(c.popover!=null&&(ve("beforetoggle",r),ve("toggle",r)),c.onScroll!=null&&ve("scroll",r),c.onScrollEnd!=null&&ve("scrollend",r),c.onClick!=null&&(r.onclick=bu),r=!0):r=!1,r||Gr(i)}function S0(i){for(kn=i.return;kn;)switch(kn.tag){case 5:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:kn=kn.return}}function Yo(i){if(i!==kn)return!1;if(!De)return S0(i),De=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||kd(i.type,i.memoizedProps)),o=!o),o&&en&&Gr(i),S0(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));t:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){en=Ci(i.nextSibling);break t}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}en=null}}else r===27?(r=en,or(i.type)?(i=qd,qd=null,en=i):en=r):en=kn?Ci(i.stateNode.nextSibling):null;return!0}function Ko(){en=kn=null,De=!1}function M0(){var i=Hr;return i!==null&&(Qn===null?Qn=i:Qn.push.apply(Qn,i),Hr=null),i}function Zo(i){Hr===null?Hr=[i]:Hr.push(i)}var Ch=tt(null),kr=null,ca=null;function Wa(i,r,o){Et(Ch,r._currentValue),r._currentValue=o}function ua(i){i._currentValue=Ch.current,xt(Ch)}function wh(i,r,o){for(;i!==null;){var c=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),i===o)break;i=i.return}}function Dh(i,r,o,c){var d=i.child;for(d!==null&&(d.return=i);d!==null;){var g=d.dependencies;if(g!==null){var E=d.child;g=g.firstContext;t:for(;g!==null;){var T=g;g=d;for(var F=0;F<r.length;F++)if(T.context===r[F]){g.lanes|=o,T=g.alternate,T!==null&&(T.lanes|=o),wh(g.return,o,i),c||(E=null);break t}g=T.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(a(341));E.lanes|=o,g=E.alternate,g!==null&&(g.lanes|=o),wh(E,o,i),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===i){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function Qo(i,r,o,c){i=null;for(var d=r,g=!1;d!==null;){if(!g){if((d.flags&524288)!==0)g=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var T=d.type;ai(d.pendingProps.value,E.value)||(i!==null?i.push(T):i=[T])}}else if(d===Ct.current){if(E=d.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(i!==null?i.push(Al):i=[Al])}d=d.return}i!==null&&Dh(r,i,o,c),r.flags|=262144}function jc(i){for(i=i.firstContext;i!==null;){if(!ai(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Xr(i){kr=i,ca=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function In(i){return E0(kr,i)}function Wc(i,r){return kr===null&&Xr(i),E0(i,r)}function E0(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},ca===null){if(i===null)throw Error(a(308));ca=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else ca=ca.next=r;return o}var hA=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,c){i.push(c)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},dA=e.unstable_scheduleCallback,pA=e.unstable_NormalPriority,vn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lh(){return{controller:new hA,data:new Map,refCount:0}}function $o(i){i.refCount--,i.refCount===0&&dA(pA,function(){i.controller.abort()})}var Jo=null,Uh=0,Ls=0,Us=null;function mA(i,r){if(Jo===null){var o=Jo=[];Uh=0,Ls=Nd(),Us={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Uh++,r.then(b0,b0),r}function b0(){if(--Uh===0&&Jo!==null){Us!==null&&(Us.status="fulfilled");var i=Jo;Jo=null,Ls=0,Us=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function gA(i,r){var o=[],c={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return i.then(function(){c.status="fulfilled",c.value=r;for(var d=0;d<o.length;d++)(0,o[d])(r)},function(d){for(c.status="rejected",c.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),c}var T0=B.S;B.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&mA(i,r),T0!==null&&T0(i,r)};var jr=tt(null);function Ph(){var i=jr.current;return i!==null?i:qe.pooledCache}function qc(i,r){r===null?Et(jr,jr.current):Et(jr,r.pool)}function A0(){var i=Ph();return i===null?null:{parent:vn._currentValue,pool:i}}var tl=Error(a(460)),R0=Error(a(474)),Yc=Error(a(542)),Nh={then:function(){}};function C0(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Kc(){}function w0(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(Kc,Kc),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,L0(i),i;default:if(typeof r.status=="string")r.then(Kc,Kc);else{if(i=qe,i!==null&&100<i.shellSuspendCounter)throw Error(a(482));i=r,i.status="pending",i.then(function(c){if(r.status==="pending"){var d=r;d.status="fulfilled",d.value=c}},function(c){if(r.status==="pending"){var d=r;d.status="rejected",d.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,L0(i),i}throw el=r,tl}}var el=null;function D0(){if(el===null)throw Error(a(459));var i=el;return el=null,i}function L0(i){if(i===tl||i===Yc)throw Error(a(483))}var qa=!1;function Oh(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ih(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Ya(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Ka(i,r,o){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,r=Hc(i),v0(i,null,o),r}return Vc(i,c,r,o),Hc(i)}function nl(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var c=r.lanes;c&=i.pendingLanes,o|=c,r.lanes=o,se(i,o)}}function Fh(i,r){var o=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?d=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?d=g=r:g=g.next=r}else d=g=r;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Bh=!1;function il(){if(Bh){var i=Us;if(i!==null)throw i}}function al(i,r,o,c){Bh=!1;var d=i.updateQueue;qa=!1;var g=d.firstBaseUpdate,E=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var F=T,J=F.next;F.next=null,E===null?g=J:E.next=J,E=F;var ft=i.alternate;ft!==null&&(ft=ft.updateQueue,T=ft.lastBaseUpdate,T!==E&&(T===null?ft.firstBaseUpdate=J:T.next=J,ft.lastBaseUpdate=F))}if(g!==null){var _t=d.baseState;E=0,ft=J=F=null,T=g;do{var it=T.lane&-536870913,at=it!==T.lane;if(at?(be&it)===it:(c&it)===it){it!==0&&it===Ls&&(Bh=!0),ft!==null&&(ft=ft.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ne=i,Qt=T;it=r;var Be=o;switch(Qt.tag){case 1:if(ne=Qt.payload,typeof ne=="function"){_t=ne.call(Be,_t,it);break t}_t=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=Qt.payload,it=typeof ne=="function"?ne.call(Be,_t,it):ne,it==null)break t;_t=m({},_t,it);break t;case 2:qa=!0}}it=T.callback,it!==null&&(i.flags|=64,at&&(i.flags|=8192),at=d.callbacks,at===null?d.callbacks=[it]:at.push(it))}else at={lane:it,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ft===null?(J=ft=at,F=_t):ft=ft.next=at,E|=it;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;at=T,T=at.next,at.next=null,d.lastBaseUpdate=at,d.shared.pending=null}}while(!0);ft===null&&(F=_t),d.baseState=F,d.firstBaseUpdate=J,d.lastBaseUpdate=ft,g===null&&(d.shared.lanes=0),ir|=E,i.lanes=E,i.memoizedState=_t}}function U0(i,r){if(typeof i!="function")throw Error(a(191,i));i.call(r)}function P0(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)U0(o[i],r)}var Ps=tt(null),Zc=tt(0);function N0(i,r){i=va,Et(Zc,i),Et(Ps,r),va=i|r.baseLanes}function zh(){Et(Zc,va),Et(Ps,Ps.current)}function Vh(){va=Zc.current,xt(Ps),xt(Zc)}var Za=0,he=null,Ie=null,hn=null,Qc=!1,Ns=!1,Wr=!1,$c=0,rl=0,Os=null,vA=0;function rn(){throw Error(a(321))}function Hh(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!ai(i[o],r[o]))return!1;return!0}function Gh(i,r,o,c,d,g){return Za=g,he=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,B.H=i===null||i.memoizedState===null?v_:__,Wr=!1,g=o(c,d),Wr=!1,Ns&&(g=I0(r,o,c,d)),O0(i),g}function O0(i){B.H=au;var r=Ie!==null&&Ie.next!==null;if(Za=0,hn=Ie=he=null,Qc=!1,rl=0,Os=null,r)throw Error(a(300));i===null||bn||(i=i.dependencies,i!==null&&jc(i)&&(bn=!0))}function I0(i,r,o,c){he=i;var d=0;do{if(Ns&&(Os=null),rl=0,Ns=!1,25<=d)throw Error(a(301));if(d+=1,hn=Ie=null,i.updateQueue!=null){var g=i.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}B.H=bA,g=r(o,c)}while(Ns);return g}function _A(){var i=B.H,r=i.useState()[0];return r=typeof r.then=="function"?sl(r):r,i=i.useState()[0],(Ie!==null?Ie.memoizedState:null)!==i&&(he.flags|=1024),r}function kh(){var i=$c!==0;return $c=0,i}function Xh(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function jh(i){if(Qc){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Qc=!1}Za=0,hn=Ie=he=null,Ns=!1,rl=$c=0,Os=null}function Kn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?he.memoizedState=hn=i:hn=hn.next=i,hn}function dn(){if(Ie===null){var i=he.alternate;i=i!==null?i.memoizedState:null}else i=Ie.next;var r=hn===null?he.memoizedState:hn.next;if(r!==null)hn=r,Ie=i;else{if(i===null)throw he.alternate===null?Error(a(467)):Error(a(310));Ie=i,i={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},hn===null?he.memoizedState=hn=i:hn=hn.next=i}return hn}function Wh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sl(i){var r=rl;return rl+=1,Os===null&&(Os=[]),i=w0(Os,i,r),r=he,(hn===null?r.memoizedState:hn.next)===null&&(r=r.alternate,B.H=r===null||r.memoizedState===null?v_:__),i}function Jc(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return sl(i);if(i.$$typeof===R)return In(i)}throw Error(a(438,String(i)))}function qh(i){var r=null,o=he.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var c=he.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(d){return d.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Wh(),he.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),c=0;c<i;c++)o[c]=D;return r.index++,o}function fa(i,r){return typeof r=="function"?r(i):r}function tu(i){var r=dn();return Yh(r,Ie,i)}function Yh(i,r,o){var c=i.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=o;var d=i.baseQueue,g=c.pending;if(g!==null){if(d!==null){var E=d.next;d.next=g.next,g.next=E}r.baseQueue=d=g,c.pending=null}if(g=i.baseState,d===null)i.memoizedState=g;else{r=d.next;var T=E=null,F=null,J=r,ft=!1;do{var _t=J.lane&-536870913;if(_t!==J.lane?(be&_t)===_t:(Za&_t)===_t){var it=J.revertLane;if(it===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_t===Ls&&(ft=!0);else if((Za&it)===it){J=J.next,it===Ls&&(ft=!0);continue}else _t={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(T=F=_t,E=g):F=F.next=_t,he.lanes|=it,ir|=it;_t=J.action,Wr&&o(g,_t),g=J.hasEagerState?J.eagerState:o(g,_t)}else it={lane:_t,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(T=F=it,E=g):F=F.next=it,he.lanes|=_t,ir|=_t;J=J.next}while(J!==null&&J!==r);if(F===null?E=g:F.next=T,!ai(g,i.memoizedState)&&(bn=!0,ft&&(o=Us,o!==null)))throw o;i.memoizedState=g,i.baseState=E,i.baseQueue=F,c.lastRenderedState=g}return d===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Kh(i){var r=dn(),o=r.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=i;var c=o.dispatch,d=o.pending,g=r.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do g=i(g,E.action),E=E.next;while(E!==d);ai(g,r.memoizedState)||(bn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,c]}function F0(i,r,o){var c=he,d=dn(),g=De;if(g){if(o===void 0)throw Error(a(407));o=o()}else o=r();var E=!ai((Ie||d).memoizedState,o);E&&(d.memoizedState=o,bn=!0),d=d.queue;var T=V0.bind(null,c,d,i);if(ol(2048,8,T,[i]),d.getSnapshot!==r||E||hn!==null&&hn.memoizedState.tag&1){if(c.flags|=2048,Is(9,eu(),z0.bind(null,c,d,o,r),null),qe===null)throw Error(a(349));g||(Za&124)!==0||B0(c,r,o)}return o}function B0(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=he.updateQueue,r===null?(r=Wh(),he.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function z0(i,r,o,c){r.value=o,r.getSnapshot=c,H0(r)&&G0(i)}function V0(i,r,o){return o(function(){H0(r)&&G0(i)})}function H0(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!ai(i,o)}catch{return!0}}function G0(i){var r=Rs(i,2);r!==null&&ui(r,i,2)}function Zh(i){var r=Kn();if(typeof i=="function"){var o=i;if(i=o(),Wr){wt(!0);try{o()}finally{wt(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:i},r}function k0(i,r,o,c){return i.baseState=o,Yh(i,Ie,typeof c=="function"?c:fa)}function yA(i,r,o,c,d){if(iu(i))throw Error(a(485));if(i=r.action,i!==null){var g={payload:d,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){g.listeners.push(E)}};B.T!==null?o(!0):g.isTransition=!1,c(g),o=r.pending,o===null?(g.next=r.pending=g,X0(r,g)):(g.next=o.next,r.pending=o.next=g)}}function X0(i,r){var o=r.action,c=r.payload,d=i.state;if(r.isTransition){var g=B.T,E={};B.T=E;try{var T=o(d,c),F=B.S;F!==null&&F(E,T),j0(i,r,T)}catch(J){Qh(i,r,J)}finally{B.T=g}}else try{g=o(d,c),j0(i,r,g)}catch(J){Qh(i,r,J)}}function j0(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){W0(i,r,c)},function(c){return Qh(i,r,c)}):W0(i,r,o)}function W0(i,r,o){r.status="fulfilled",r.value=o,q0(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,X0(i,o)))}function Qh(i,r,o){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=o,q0(r),r=r.next;while(r!==c)}i.action=null}function q0(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function Y0(i,r){return r}function K0(i,r){if(De){var o=qe.formState;if(o!==null){t:{var c=he;if(De){if(en){e:{for(var d=en,g=zi;d.nodeType!==8;){if(!g){d=null;break e}if(d=Ci(d.nextSibling),d===null){d=null;break e}}g=d.data,d=g==="F!"||g==="F"?d:null}if(d){en=Ci(d.nextSibling),c=d.data==="F!";break t}}Gr(c)}c=!1}c&&(r=o[0])}}return o=Kn(),o.memoizedState=o.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y0,lastRenderedState:r},o.queue=c,o=p_.bind(null,he,c),c.dispatch=o,c=Zh(!1),g=nd.bind(null,he,!1,c.queue),c=Kn(),d={state:r,dispatch:null,action:i,pending:null},c.queue=d,o=yA.bind(null,he,d,g,o),d.dispatch=o,c.memoizedState=i,[r,o,!1]}function Z0(i){var r=dn();return Q0(r,Ie,i)}function Q0(i,r,o){if(r=Yh(i,r,Y0)[0],i=tu(fa)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=sl(r)}catch(E){throw E===tl?Yc:E}else c=r;r=dn();var d=r.queue,g=d.dispatch;return o!==r.memoizedState&&(he.flags|=2048,Is(9,eu(),xA.bind(null,d,o),null)),[c,g,i]}function xA(i,r){i.action=r}function $0(i){var r=dn(),o=Ie;if(o!==null)return Q0(r,o,i);dn(),r=r.memoizedState,o=dn();var c=o.queue.dispatch;return o.memoizedState=i,[r,c,!1]}function Is(i,r,o,c){return i={tag:i,create:o,deps:c,inst:r,next:null},r=he.updateQueue,r===null&&(r=Wh(),he.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(c=o.next,o.next=i,i.next=c,r.lastEffect=i),i}function eu(){return{destroy:void 0,resource:void 0}}function J0(){return dn().memoizedState}function nu(i,r,o,c){var d=Kn();c=c===void 0?null:c,he.flags|=i,d.memoizedState=Is(1|r,eu(),o,c)}function ol(i,r,o,c){var d=dn();c=c===void 0?null:c;var g=d.memoizedState.inst;Ie!==null&&c!==null&&Hh(c,Ie.memoizedState.deps)?d.memoizedState=Is(r,g,o,c):(he.flags|=i,d.memoizedState=Is(1|r,g,o,c))}function t_(i,r){nu(8390656,8,i,r)}function e_(i,r){ol(2048,8,i,r)}function n_(i,r){return ol(4,2,i,r)}function i_(i,r){return ol(4,4,i,r)}function a_(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function r_(i,r,o){o=o!=null?o.concat([i]):null,ol(4,4,a_.bind(null,r,i),o)}function $h(){}function s_(i,r){var o=dn();r=r===void 0?null:r;var c=o.memoizedState;return r!==null&&Hh(r,c[1])?c[0]:(o.memoizedState=[i,r],i)}function o_(i,r){var o=dn();r=r===void 0?null:r;var c=o.memoizedState;if(r!==null&&Hh(r,c[1]))return c[0];if(c=i(),Wr){wt(!0);try{i()}finally{wt(!1)}}return o.memoizedState=[c,r],c}function Jh(i,r,o){return o===void 0||(Za&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=uy(),he.lanes|=i,ir|=i,o)}function l_(i,r,o,c){return ai(o,r)?o:Ps.current!==null?(i=Jh(i,o,c),ai(i,r)||(bn=!0),i):(Za&42)===0?(bn=!0,i.memoizedState=o):(i=uy(),he.lanes|=i,ir|=i,r)}function c_(i,r,o,c,d){var g=j.p;j.p=g!==0&&8>g?g:8;var E=B.T,T={};B.T=T,nd(i,!1,r,o);try{var F=d(),J=B.S;if(J!==null&&J(T,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ft=gA(F,c);ll(i,r,ft,ci(i))}else ll(i,r,c,ci(i))}catch(_t){ll(i,r,{then:function(){},status:"rejected",reason:_t},ci())}finally{j.p=g,B.T=E}}function SA(){}function td(i,r,o,c){if(i.tag!==5)throw Error(a(476));var d=u_(i).queue;c_(i,d,r,W,o===null?SA:function(){return f_(i),o(c)})}function u_(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:W},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function f_(i){var r=u_(i).next.queue;ll(i,r,{},ci())}function ed(){return In(Al)}function h_(){return dn().memoizedState}function d_(){return dn().memoizedState}function MA(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=ci();i=Ya(o);var c=Ka(r,i,o);c!==null&&(ui(c,r,o),nl(c,r,o)),r={cache:Lh()},i.payload=r;return}r=r.return}}function EA(i,r,o){var c=ci();o={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},iu(i)?m_(r,o):(o=Sh(i,r,o,c),o!==null&&(ui(o,i,c),g_(o,r,c)))}function p_(i,r,o){var c=ci();ll(i,r,o,c)}function ll(i,r,o,c){var d={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(iu(i))m_(r,d);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var E=r.lastRenderedState,T=g(E,o);if(d.hasEagerState=!0,d.eagerState=T,ai(T,E))return Vc(i,r,d,0),qe===null&&zc(),!1}catch{}finally{}if(o=Sh(i,r,d,c),o!==null)return ui(o,i,c),g_(o,r,c),!0}return!1}function nd(i,r,o,c){if(c={lane:2,revertLane:Nd(),action:c,hasEagerState:!1,eagerState:null,next:null},iu(i)){if(r)throw Error(a(479))}else r=Sh(i,o,c,2),r!==null&&ui(r,i,2)}function iu(i){var r=i.alternate;return i===he||r!==null&&r===he}function m_(i,r){Ns=Qc=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function g_(i,r,o){if((o&4194048)!==0){var c=r.lanes;c&=i.pendingLanes,o|=c,r.lanes=o,se(i,o)}}var au={readContext:In,use:Jc,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn},v_={readContext:In,use:Jc,useCallback:function(i,r){return Kn().memoizedState=[i,r===void 0?null:r],i},useContext:In,useEffect:t_,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,nu(4194308,4,a_.bind(null,r,i),o)},useLayoutEffect:function(i,r){return nu(4194308,4,i,r)},useInsertionEffect:function(i,r){nu(4,2,i,r)},useMemo:function(i,r){var o=Kn();r=r===void 0?null:r;var c=i();if(Wr){wt(!0);try{i()}finally{wt(!1)}}return o.memoizedState=[c,r],c},useReducer:function(i,r,o){var c=Kn();if(o!==void 0){var d=o(r);if(Wr){wt(!0);try{o(r)}finally{wt(!1)}}}else d=r;return c.memoizedState=c.baseState=d,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:d},c.queue=i,i=i.dispatch=EA.bind(null,he,i),[c.memoizedState,i]},useRef:function(i){var r=Kn();return i={current:i},r.memoizedState=i},useState:function(i){i=Zh(i);var r=i.queue,o=p_.bind(null,he,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:$h,useDeferredValue:function(i,r){var o=Kn();return Jh(o,i,r)},useTransition:function(){var i=Zh(!1);return i=c_.bind(null,he,i.queue,!0,!1),Kn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var c=he,d=Kn();if(De){if(o===void 0)throw Error(a(407));o=o()}else{if(o=r(),qe===null)throw Error(a(349));(be&124)!==0||B0(c,r,o)}d.memoizedState=o;var g={value:o,getSnapshot:r};return d.queue=g,t_(V0.bind(null,c,g,i),[i]),c.flags|=2048,Is(9,eu(),z0.bind(null,c,g,o,r),null),o},useId:function(){var i=Kn(),r=qe.identifierPrefix;if(De){var o=la,c=oa;o=(c&~(1<<32-Dt(c)-1)).toString(32)+o,r="«"+r+"R"+o,o=$c++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=vA++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:ed,useFormState:K0,useActionState:K0,useOptimistic:function(i){var r=Kn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=nd.bind(null,he,!0,o),o.dispatch=r,[i,r]},useMemoCache:qh,useCacheRefresh:function(){return Kn().memoizedState=MA.bind(null,he)}},__={readContext:In,use:Jc,useCallback:s_,useContext:In,useEffect:e_,useImperativeHandle:r_,useInsertionEffect:n_,useLayoutEffect:i_,useMemo:o_,useReducer:tu,useRef:J0,useState:function(){return tu(fa)},useDebugValue:$h,useDeferredValue:function(i,r){var o=dn();return l_(o,Ie.memoizedState,i,r)},useTransition:function(){var i=tu(fa)[0],r=dn().memoizedState;return[typeof i=="boolean"?i:sl(i),r]},useSyncExternalStore:F0,useId:h_,useHostTransitionStatus:ed,useFormState:Z0,useActionState:Z0,useOptimistic:function(i,r){var o=dn();return k0(o,Ie,i,r)},useMemoCache:qh,useCacheRefresh:d_},bA={readContext:In,use:Jc,useCallback:s_,useContext:In,useEffect:e_,useImperativeHandle:r_,useInsertionEffect:n_,useLayoutEffect:i_,useMemo:o_,useReducer:Kh,useRef:J0,useState:function(){return Kh(fa)},useDebugValue:$h,useDeferredValue:function(i,r){var o=dn();return Ie===null?Jh(o,i,r):l_(o,Ie.memoizedState,i,r)},useTransition:function(){var i=Kh(fa)[0],r=dn().memoizedState;return[typeof i=="boolean"?i:sl(i),r]},useSyncExternalStore:F0,useId:h_,useHostTransitionStatus:ed,useFormState:$0,useActionState:$0,useOptimistic:function(i,r){var o=dn();return Ie!==null?k0(o,Ie,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:qh,useCacheRefresh:d_},Fs=null,cl=0;function ru(i){var r=cl;return cl+=1,Fs===null&&(Fs=[]),w0(Fs,i,r)}function ul(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function su(i,r){throw r.$$typeof===v?Error(a(525)):(i=Object.prototype.toString.call(r),Error(a(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function y_(i){var r=i._init;return r(i._payload)}function x_(i){function r(q,k){if(i){var Q=q.deletions;Q===null?(q.deletions=[k],q.flags|=16):Q.push(k)}}function o(q,k){if(!i)return null;for(;k!==null;)r(q,k),k=k.sibling;return null}function c(q){for(var k=new Map;q!==null;)q.key!==null?k.set(q.key,q):k.set(q.index,q),q=q.sibling;return k}function d(q,k){return q=sa(q,k),q.index=0,q.sibling=null,q}function g(q,k,Q){return q.index=Q,i?(Q=q.alternate,Q!==null?(Q=Q.index,Q<k?(q.flags|=67108866,k):Q):(q.flags|=67108866,k)):(q.flags|=1048576,k)}function E(q){return i&&q.alternate===null&&(q.flags|=67108866),q}function T(q,k,Q,pt){return k===null||k.tag!==6?(k=Eh(Q,q.mode,pt),k.return=q,k):(k=d(k,Q),k.return=q,k)}function F(q,k,Q,pt){var Gt=Q.type;return Gt===M?ft(q,k,Q.props.children,pt,Q.key):k!==null&&(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===V&&y_(Gt)===k.type)?(k=d(k,Q.props),ul(k,Q),k.return=q,k):(k=Gc(Q.type,Q.key,Q.props,null,q.mode,pt),ul(k,Q),k.return=q,k)}function J(q,k,Q,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=bh(Q,q.mode,pt),k.return=q,k):(k=d(k,Q.children||[]),k.return=q,k)}function ft(q,k,Q,pt,Gt){return k===null||k.tag!==7?(k=Br(Q,q.mode,pt,Gt),k.return=q,k):(k=d(k,Q),k.return=q,k)}function _t(q,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Eh(""+k,q.mode,Q),k.return=q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case _:return Q=Gc(k.type,k.key,k.props,null,q.mode,Q),ul(Q,k),Q.return=q,Q;case x:return k=bh(k,q.mode,Q),k.return=q,k;case V:var pt=k._init;return k=pt(k._payload),_t(q,k,Q)}if(dt(k)||ct(k))return k=Br(k,q.mode,Q,null),k.return=q,k;if(typeof k.then=="function")return _t(q,ru(k),Q);if(k.$$typeof===R)return _t(q,Wc(q,k),Q);su(q,k)}return null}function it(q,k,Q,pt){var Gt=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Gt!==null?null:T(q,k,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:return Q.key===Gt?F(q,k,Q,pt):null;case x:return Q.key===Gt?J(q,k,Q,pt):null;case V:return Gt=Q._init,Q=Gt(Q._payload),it(q,k,Q,pt)}if(dt(Q)||ct(Q))return Gt!==null?null:ft(q,k,Q,pt,null);if(typeof Q.then=="function")return it(q,k,ru(Q),pt);if(Q.$$typeof===R)return it(q,k,Wc(q,Q),pt);su(q,Q)}return null}function at(q,k,Q,pt,Gt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return q=q.get(Q)||null,T(k,q,""+pt,Gt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case _:return q=q.get(pt.key===null?Q:pt.key)||null,F(k,q,pt,Gt);case x:return q=q.get(pt.key===null?Q:pt.key)||null,J(k,q,pt,Gt);case V:var pe=pt._init;return pt=pe(pt._payload),at(q,k,Q,pt,Gt)}if(dt(pt)||ct(pt))return q=q.get(Q)||null,ft(k,q,pt,Gt,null);if(typeof pt.then=="function")return at(q,k,Q,ru(pt),Gt);if(pt.$$typeof===R)return at(q,k,Q,Wc(k,pt),Gt);su(k,pt)}return null}function ne(q,k,Q,pt){for(var Gt=null,pe=null,jt=k,te=k=0,An=null;jt!==null&&te<Q.length;te++){jt.index>te?(An=jt,jt=null):An=jt.sibling;var Ce=it(q,jt,Q[te],pt);if(Ce===null){jt===null&&(jt=An);break}i&&jt&&Ce.alternate===null&&r(q,jt),k=g(Ce,k,te),pe===null?Gt=Ce:pe.sibling=Ce,pe=Ce,jt=An}if(te===Q.length)return o(q,jt),De&&Vr(q,te),Gt;if(jt===null){for(;te<Q.length;te++)jt=_t(q,Q[te],pt),jt!==null&&(k=g(jt,k,te),pe===null?Gt=jt:pe.sibling=jt,pe=jt);return De&&Vr(q,te),Gt}for(jt=c(jt);te<Q.length;te++)An=at(jt,q,te,Q[te],pt),An!==null&&(i&&An.alternate!==null&&jt.delete(An.key===null?te:An.key),k=g(An,k,te),pe===null?Gt=An:pe.sibling=An,pe=An);return i&&jt.forEach(function(hr){return r(q,hr)}),De&&Vr(q,te),Gt}function Qt(q,k,Q,pt){if(Q==null)throw Error(a(151));for(var Gt=null,pe=null,jt=k,te=k=0,An=null,Ce=Q.next();jt!==null&&!Ce.done;te++,Ce=Q.next()){jt.index>te?(An=jt,jt=null):An=jt.sibling;var hr=it(q,jt,Ce.value,pt);if(hr===null){jt===null&&(jt=An);break}i&&jt&&hr.alternate===null&&r(q,jt),k=g(hr,k,te),pe===null?Gt=hr:pe.sibling=hr,pe=hr,jt=An}if(Ce.done)return o(q,jt),De&&Vr(q,te),Gt;if(jt===null){for(;!Ce.done;te++,Ce=Q.next())Ce=_t(q,Ce.value,pt),Ce!==null&&(k=g(Ce,k,te),pe===null?Gt=Ce:pe.sibling=Ce,pe=Ce);return De&&Vr(q,te),Gt}for(jt=c(jt);!Ce.done;te++,Ce=Q.next())Ce=at(jt,q,te,Ce.value,pt),Ce!==null&&(i&&Ce.alternate!==null&&jt.delete(Ce.key===null?te:Ce.key),k=g(Ce,k,te),pe===null?Gt=Ce:pe.sibling=Ce,pe=Ce);return i&&jt.forEach(function(TR){return r(q,TR)}),De&&Vr(q,te),Gt}function Be(q,k,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===M&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:t:{for(var Gt=Q.key;k!==null;){if(k.key===Gt){if(Gt=Q.type,Gt===M){if(k.tag===7){o(q,k.sibling),pt=d(k,Q.props.children),pt.return=q,q=pt;break t}}else if(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===V&&y_(Gt)===k.type){o(q,k.sibling),pt=d(k,Q.props),ul(pt,Q),pt.return=q,q=pt;break t}o(q,k);break}else r(q,k);k=k.sibling}Q.type===M?(pt=Br(Q.props.children,q.mode,pt,Q.key),pt.return=q,q=pt):(pt=Gc(Q.type,Q.key,Q.props,null,q.mode,pt),ul(pt,Q),pt.return=q,q=pt)}return E(q);case x:t:{for(Gt=Q.key;k!==null;){if(k.key===Gt)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){o(q,k.sibling),pt=d(k,Q.children||[]),pt.return=q,q=pt;break t}else{o(q,k);break}else r(q,k);k=k.sibling}pt=bh(Q,q.mode,pt),pt.return=q,q=pt}return E(q);case V:return Gt=Q._init,Q=Gt(Q._payload),Be(q,k,Q,pt)}if(dt(Q))return ne(q,k,Q,pt);if(ct(Q)){if(Gt=ct(Q),typeof Gt!="function")throw Error(a(150));return Q=Gt.call(Q),Qt(q,k,Q,pt)}if(typeof Q.then=="function")return Be(q,k,ru(Q),pt);if(Q.$$typeof===R)return Be(q,k,Wc(q,Q),pt);su(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(o(q,k.sibling),pt=d(k,Q),pt.return=q,q=pt):(o(q,k),pt=Eh(Q,q.mode,pt),pt.return=q,q=pt),E(q)):o(q,k)}return function(q,k,Q,pt){try{cl=0;var Gt=Be(q,k,Q,pt);return Fs=null,Gt}catch(jt){if(jt===tl||jt===Yc)throw jt;var pe=ri(29,jt,null,q.mode);return pe.lanes=pt,pe.return=q,pe}finally{}}}var Bs=x_(!0),S_=x_(!1),_i=tt(null),Vi=null;function Qa(i){var r=i.alternate;Et(_n,_n.current&1),Et(_i,i),Vi===null&&(r===null||Ps.current!==null||r.memoizedState!==null)&&(Vi=i)}function M_(i){if(i.tag===22){if(Et(_n,_n.current),Et(_i,i),Vi===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Vi=i)}}else $a()}function $a(){Et(_n,_n.current),Et(_i,_i.current)}function ha(i){xt(_i),Vi===i&&(Vi=null),xt(_n)}var _n=tt(0);function ou(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Wd(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function id(i,r,o,c){r=i.memoizedState,o=o(c,r),o=o==null?r:m({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var ad={enqueueSetState:function(i,r,o){i=i._reactInternals;var c=ci(),d=Ya(c);d.payload=r,o!=null&&(d.callback=o),r=Ka(i,d,c),r!==null&&(ui(r,i,c),nl(r,i,c))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var c=ci(),d=Ya(c);d.tag=1,d.payload=r,o!=null&&(d.callback=o),r=Ka(i,d,c),r!==null&&(ui(r,i,c),nl(r,i,c))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=ci(),c=Ya(o);c.tag=2,r!=null&&(c.callback=r),r=Ka(i,c,o),r!==null&&(ui(r,i,o),nl(r,i,o))}};function E_(i,r,o,c,d,g,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,g,E):r.prototype&&r.prototype.isPureReactComponent?!Wo(o,c)||!Wo(d,g):!0}function b_(i,r,o,c){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==i&&ad.enqueueReplaceState(r,r.state,null)}function qr(i,r){var o=r;if("ref"in r){o={};for(var c in r)c!=="ref"&&(o[c]=r[c])}if(i=i.defaultProps){o===r&&(o=m({},o));for(var d in i)o[d]===void 0&&(o[d]=i[d])}return o}var lu=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function T_(i){lu(i)}function A_(i){console.error(i)}function R_(i){lu(i)}function cu(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function C_(i,r,o){try{var c=i.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function rd(i,r,o){return o=Ya(o),o.tag=3,o.payload={element:null},o.callback=function(){cu(i,r)},o}function w_(i){return i=Ya(i),i.tag=3,i}function D_(i,r,o,c){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var g=c.value;i.payload=function(){return d(g)},i.callback=function(){C_(r,o,c)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){C_(r,o,c),typeof d!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var T=c.stack;this.componentDidCatch(c.value,{componentStack:T!==null?T:""})})}function TA(i,r,o,c,d){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=o.alternate,r!==null&&Qo(r,o,d,!0),o=_i.current,o!==null){switch(o.tag){case 13:return Vi===null?wd():o.alternate===null&&nn===0&&(nn=3),o.flags&=-257,o.flags|=65536,o.lanes=d,c===Nh?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([c]):r.add(c),Ld(i,c,d)),!1;case 22:return o.flags|=65536,c===Nh?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([c]):o.add(c)),Ld(i,c,d)),!1}throw Error(a(435,o.tag))}return Ld(i,c,d),wd(),!1}if(De)return r=_i.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=d,c!==Rh&&(i=Error(a(422),{cause:c}),Zo(pi(i,o)))):(c!==Rh&&(r=Error(a(423),{cause:c}),Zo(pi(r,o))),i=i.current.alternate,i.flags|=65536,d&=-d,i.lanes|=d,c=pi(c,o),d=rd(i.stateNode,c,d),Fh(i,d),nn!==4&&(nn=2)),!1;var g=Error(a(520),{cause:c});if(g=pi(g,o),vl===null?vl=[g]:vl.push(g),nn!==4&&(nn=2),r===null)return!0;c=pi(c,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=d&-d,o.lanes|=i,i=rd(o.stateNode,c,i),Fh(o,i),!1;case 1:if(r=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ar===null||!ar.has(g))))return o.flags|=65536,d&=-d,o.lanes|=d,d=w_(d),D_(d,i,o,c),Fh(o,d),!1}o=o.return}while(o!==null);return!1}var L_=Error(a(461)),bn=!1;function Dn(i,r,o,c){r.child=i===null?S_(r,null,o,c):Bs(r,i.child,o,c)}function U_(i,r,o,c,d){o=o.render;var g=r.ref;if("ref"in c){var E={};for(var T in c)T!=="ref"&&(E[T]=c[T])}else E=c;return Xr(r),c=Gh(i,r,o,E,g,d),T=kh(),i!==null&&!bn?(Xh(i,r,d),da(i,r,d)):(De&&T&&Th(r),r.flags|=1,Dn(i,r,c,d),r.child)}function P_(i,r,o,c,d){if(i===null){var g=o.type;return typeof g=="function"&&!Mh(g)&&g.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=g,N_(i,r,g,c,d)):(i=Gc(o.type,null,c,r,r.mode,d),i.ref=r.ref,i.return=r,r.child=i)}if(g=i.child,!dd(i,d)){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:Wo,o(E,c)&&i.ref===r.ref)return da(i,r,d)}return r.flags|=1,i=sa(g,c),i.ref=r.ref,i.return=r,r.child=i}function N_(i,r,o,c,d){if(i!==null){var g=i.memoizedProps;if(Wo(g,c)&&i.ref===r.ref)if(bn=!1,r.pendingProps=c=g,dd(i,d))(i.flags&131072)!==0&&(bn=!0);else return r.lanes=i.lanes,da(i,r,d)}return sd(i,r,o,c,d)}function O_(i,r,o){var c=r.pendingProps,d=c.children,g=i!==null?i.memoizedState:null;if(c.mode==="hidden"){if((r.flags&128)!==0){if(c=g!==null?g.baseLanes|o:o,i!==null){for(d=r.child=i.child,g=0;d!==null;)g=g|d.lanes|d.childLanes,d=d.sibling;r.childLanes=g&~c}else r.childLanes=0,r.child=null;return I_(i,r,c,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&qc(r,g!==null?g.cachePool:null),g!==null?N0(r,g):zh(),M_(r);else return r.lanes=r.childLanes=536870912,I_(i,r,g!==null?g.baseLanes|o:o,o)}else g!==null?(qc(r,g.cachePool),N0(r,g),$a(),r.memoizedState=null):(i!==null&&qc(r,null),zh(),$a());return Dn(i,r,d,o),r.child}function I_(i,r,o,c){var d=Ph();return d=d===null?null:{parent:vn._currentValue,pool:d},r.memoizedState={baseLanes:o,cachePool:d},i!==null&&qc(r,null),zh(),M_(r),i!==null&&Qo(i,r,c,!0),null}function uu(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function sd(i,r,o,c,d){return Xr(r),o=Gh(i,r,o,c,void 0,d),c=kh(),i!==null&&!bn?(Xh(i,r,d),da(i,r,d)):(De&&c&&Th(r),r.flags|=1,Dn(i,r,o,d),r.child)}function F_(i,r,o,c,d,g){return Xr(r),r.updateQueue=null,o=I0(r,c,o,d),O0(i),c=kh(),i!==null&&!bn?(Xh(i,r,g),da(i,r,g)):(De&&c&&Th(r),r.flags|=1,Dn(i,r,o,g),r.child)}function B_(i,r,o,c,d){if(Xr(r),r.stateNode===null){var g=Cs,E=o.contextType;typeof E=="object"&&E!==null&&(g=In(E)),g=new o(c,g),r.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=ad,r.stateNode=g,g._reactInternals=r,g=r.stateNode,g.props=c,g.state=r.memoizedState,g.refs={},Oh(r),E=o.contextType,g.context=typeof E=="object"&&E!==null?In(E):Cs,g.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(id(r,o,E,c),g.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(E=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),E!==g.state&&ad.enqueueReplaceState(g,g.state,null),al(r,c,g,d),il(),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(i===null){g=r.stateNode;var T=r.memoizedProps,F=qr(o,T);g.props=F;var J=g.context,ft=o.contextType;E=Cs,typeof ft=="object"&&ft!==null&&(E=In(ft));var _t=o.getDerivedStateFromProps;ft=typeof _t=="function"||typeof g.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,ft||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T||J!==E)&&b_(r,g,c,E),qa=!1;var it=r.memoizedState;g.state=it,al(r,c,g,d),il(),J=r.memoizedState,T||it!==J||qa?(typeof _t=="function"&&(id(r,o,_t,c),J=r.memoizedState),(F=qa||E_(r,o,F,c,it,J,E))?(ft||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=J),g.props=c,g.state=J,g.context=E,c=F):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{g=r.stateNode,Ih(i,r),E=r.memoizedProps,ft=qr(o,E),g.props=ft,_t=r.pendingProps,it=g.context,J=o.contextType,F=Cs,typeof J=="object"&&J!==null&&(F=In(J)),T=o.getDerivedStateFromProps,(J=typeof T=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==_t||it!==F)&&b_(r,g,c,F),qa=!1,it=r.memoizedState,g.state=it,al(r,c,g,d),il();var at=r.memoizedState;E!==_t||it!==at||qa||i!==null&&i.dependencies!==null&&jc(i.dependencies)?(typeof T=="function"&&(id(r,o,T,c),at=r.memoizedState),(ft=qa||E_(r,o,ft,c,it,at,F)||i!==null&&i.dependencies!==null&&jc(i.dependencies))?(J||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,at,F),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,at,F)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===i.memoizedProps&&it===i.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&it===i.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=at),g.props=c,g.state=at,g.context=F,c=ft):(typeof g.componentDidUpdate!="function"||E===i.memoizedProps&&it===i.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&it===i.memoizedState||(r.flags|=1024),c=!1)}return g=c,uu(i,r),c=(r.flags&128)!==0,g||c?(g=r.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:g.render(),r.flags|=1,i!==null&&c?(r.child=Bs(r,i.child,null,d),r.child=Bs(r,null,o,d)):Dn(i,r,o,d),r.memoizedState=g.state,i=r.child):i=da(i,r,d),i}function z_(i,r,o,c){return Ko(),r.flags|=256,Dn(i,r,o,c),r.child}var od={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ld(i){return{baseLanes:i,cachePool:A0()}}function cd(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=yi),i}function V_(i,r,o){var c=r.pendingProps,d=!1,g=(r.flags&128)!==0,E;if((E=g)||(E=i!==null&&i.memoizedState===null?!1:(_n.current&2)!==0),E&&(d=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(De){if(d?Qa(r):$a(),De){var T=en,F;if(F=T){t:{for(F=T,T=zi;F.nodeType!==8;){if(!T){T=null;break t}if(F=Ci(F.nextSibling),F===null){T=null;break t}}T=F}T!==null?(r.memoizedState={dehydrated:T,treeContext:zr!==null?{id:oa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},F=ri(18,null,null,0),F.stateNode=T,F.return=r,r.child=F,kn=r,en=null,F=!0):F=!1}F||Gr(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Wd(T)?r.lanes=32:r.lanes=536870912,null;ha(r)}return T=c.children,c=c.fallback,d?($a(),d=r.mode,T=fu({mode:"hidden",children:T},d),c=Br(c,d,o,null),T.return=r,c.return=r,T.sibling=c,r.child=T,d=r.child,d.memoizedState=ld(o),d.childLanes=cd(i,E,o),r.memoizedState=od,c):(Qa(r),ud(r,T))}if(F=i.memoizedState,F!==null&&(T=F.dehydrated,T!==null)){if(g)r.flags&256?(Qa(r),r.flags&=-257,r=fd(i,r,o)):r.memoizedState!==null?($a(),r.child=i.child,r.flags|=128,r=null):($a(),d=c.fallback,T=r.mode,c=fu({mode:"visible",children:c.children},T),d=Br(d,T,o,null),d.flags|=2,c.return=r,d.return=r,c.sibling=d,r.child=c,Bs(r,i.child,null,o),c=r.child,c.memoizedState=ld(o),c.childLanes=cd(i,E,o),r.memoizedState=od,r=d);else if(Qa(r),Wd(T)){if(E=T.nextSibling&&T.nextSibling.dataset,E)var J=E.dgst;E=J,c=Error(a(419)),c.stack="",c.digest=E,Zo({value:c,source:null,stack:null}),r=fd(i,r,o)}else if(bn||Qo(i,r,o,!1),E=(o&i.childLanes)!==0,bn||E){if(E=qe,E!==null&&(c=o&-o,c=(c&42)!==0?1:je(c),c=(c&(E.suspendedLanes|o))!==0?0:c,c!==0&&c!==F.retryLane))throw F.retryLane=c,Rs(i,c),ui(E,i,c),L_;T.data==="$?"||wd(),r=fd(i,r,o)}else T.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=F.treeContext,en=Ci(T.nextSibling),kn=r,De=!0,Hr=null,zi=!1,i!==null&&(gi[vi++]=oa,gi[vi++]=la,gi[vi++]=zr,oa=i.id,la=i.overflow,zr=r),r=ud(r,c.children),r.flags|=4096);return r}return d?($a(),d=c.fallback,T=r.mode,F=i.child,J=F.sibling,c=sa(F,{mode:"hidden",children:c.children}),c.subtreeFlags=F.subtreeFlags&65011712,J!==null?d=sa(J,d):(d=Br(d,T,o,null),d.flags|=2),d.return=r,c.return=r,c.sibling=d,r.child=c,c=d,d=r.child,T=i.child.memoizedState,T===null?T=ld(o):(F=T.cachePool,F!==null?(J=vn._currentValue,F=F.parent!==J?{parent:J,pool:J}:F):F=A0(),T={baseLanes:T.baseLanes|o,cachePool:F}),d.memoizedState=T,d.childLanes=cd(i,E,o),r.memoizedState=od,c):(Qa(r),o=i.child,i=o.sibling,o=sa(o,{mode:"visible",children:c.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function ud(i,r){return r=fu({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function fu(i,r){return i=ri(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function fd(i,r,o){return Bs(r,i.child,null,o),i=ud(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function H_(i,r,o){i.lanes|=r;var c=i.alternate;c!==null&&(c.lanes|=r),wh(i.return,r,o)}function hd(i,r,o,c,d){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=d)}function G_(i,r,o){var c=r.pendingProps,d=c.revealOrder,g=c.tail;if(Dn(i,r,c.children,o),c=_n.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)t:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&H_(i,o,r);else if(i.tag===19)H_(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break t;for(;i.sibling===null;){if(i.return===null||i.return===r)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(Et(_n,c),d){case"forwards":for(o=r.child,d=null;o!==null;)i=o.alternate,i!==null&&ou(i)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),hd(r,!1,d,o,g);break;case"backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(i=d.alternate,i!==null&&ou(i)===null){r.child=d;break}i=d.sibling,d.sibling=o,o=d,d=i}hd(r,!0,o,null,g);break;case"together":hd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function da(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),ir|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(Qo(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(a(153));if(r.child!==null){for(i=r.child,o=sa(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=sa(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function dd(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&jc(i)))}function AA(i,r,o){switch(r.tag){case 3:It(r,r.stateNode.containerInfo),Wa(r,vn,i.memoizedState.cache),Ko();break;case 27:case 5:$t(r);break;case 4:It(r,r.stateNode.containerInfo);break;case 10:Wa(r,r.type,r.memoizedProps.value);break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(Qa(r),r.flags|=128,null):(o&r.child.childLanes)!==0?V_(i,r,o):(Qa(r),i=da(i,r,o),i!==null?i.sibling:null);Qa(r);break;case 19:var d=(i.flags&128)!==0;if(c=(o&r.childLanes)!==0,c||(Qo(i,r,o,!1),c=(o&r.childLanes)!==0),d){if(c)return G_(i,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Et(_n,_n.current),c)break;return null;case 22:case 23:return r.lanes=0,O_(i,r,o);case 24:Wa(r,vn,i.memoizedState.cache)}return da(i,r,o)}function k_(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)bn=!0;else{if(!dd(i,o)&&(r.flags&128)===0)return bn=!1,AA(i,r,o);bn=(i.flags&131072)!==0}else bn=!1,De&&(r.flags&1048576)!==0&&y0(r,Xc,r.index);switch(r.lanes=0,r.tag){case 16:t:{i=r.pendingProps;var c=r.elementType,d=c._init;if(c=d(c._payload),r.type=c,typeof c=="function")Mh(c)?(i=qr(c,i),r.tag=1,r=B_(null,r,c,i,o)):(r.tag=0,r=sd(null,r,c,i,o));else{if(c!=null){if(d=c.$$typeof,d===w){r.tag=11,r=U_(null,r,c,i,o);break t}else if(d===I){r.tag=14,r=P_(null,r,c,i,o);break t}}throw r=mt(c)||c,Error(a(306,r,""))}}return r;case 0:return sd(i,r,r.type,r.pendingProps,o);case 1:return c=r.type,d=qr(c,r.pendingProps),B_(i,r,c,d,o);case 3:t:{if(It(r,r.stateNode.containerInfo),i===null)throw Error(a(387));c=r.pendingProps;var g=r.memoizedState;d=g.element,Ih(i,r),al(r,c,null,o);var E=r.memoizedState;if(c=E.cache,Wa(r,vn,c),c!==g.cache&&Dh(r,[vn],o,!0),il(),c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){r=z_(i,r,c,o);break t}else if(c!==d){d=pi(Error(a(424)),r),Zo(d),r=z_(i,r,c,o);break t}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(en=Ci(i.firstChild),kn=r,De=!0,Hr=null,zi=!0,o=S_(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Ko(),c===d){r=da(i,r,o);break t}Dn(i,r,c,o)}r=r.child}return r;case 26:return uu(i,r),i===null?(o=qy(r.type,null,r.pendingProps,null))?r.memoizedState=o:De||(o=r.type,i=r.pendingProps,c=Tu(St.current).createElement(o),c[mn]=r,c[Cn]=i,Un(c,o,i),fn(c),r.stateNode=c):r.memoizedState=qy(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return $t(r),i===null&&De&&(c=r.stateNode=Xy(r.type,r.pendingProps,St.current),kn=r,zi=!0,d=en,or(r.type)?(qd=d,en=Ci(c.firstChild)):en=d),Dn(i,r,r.pendingProps.children,o),uu(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&De&&((d=c=en)&&(c=tR(c,r.type,r.pendingProps,zi),c!==null?(r.stateNode=c,kn=r,en=Ci(c.firstChild),zi=!1,d=!0):d=!1),d||Gr(r)),$t(r),d=r.type,g=r.pendingProps,E=i!==null?i.memoizedProps:null,c=g.children,kd(d,g)?c=null:E!==null&&kd(d,E)&&(r.flags|=32),r.memoizedState!==null&&(d=Gh(i,r,_A,null,null,o),Al._currentValue=d),uu(i,r),Dn(i,r,c,o),r.child;case 6:return i===null&&De&&((i=o=en)&&(o=eR(o,r.pendingProps,zi),o!==null?(r.stateNode=o,kn=r,en=null,i=!0):i=!1),i||Gr(r)),null;case 13:return V_(i,r,o);case 4:return It(r,r.stateNode.containerInfo),c=r.pendingProps,i===null?r.child=Bs(r,null,c,o):Dn(i,r,c,o),r.child;case 11:return U_(i,r,r.type,r.pendingProps,o);case 7:return Dn(i,r,r.pendingProps,o),r.child;case 8:return Dn(i,r,r.pendingProps.children,o),r.child;case 12:return Dn(i,r,r.pendingProps.children,o),r.child;case 10:return c=r.pendingProps,Wa(r,r.type,c.value),Dn(i,r,c.children,o),r.child;case 9:return d=r.type._context,c=r.pendingProps.children,Xr(r),d=In(d),c=c(d),r.flags|=1,Dn(i,r,c,o),r.child;case 14:return P_(i,r,r.type,r.pendingProps,o);case 15:return N_(i,r,r.type,r.pendingProps,o);case 19:return G_(i,r,o);case 31:return c=r.pendingProps,o=r.mode,c={mode:c.mode,children:c.children},i===null?(o=fu(c,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=sa(i.child,c),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return O_(i,r,o);case 24:return Xr(r),c=In(vn),i===null?(d=Ph(),d===null&&(d=qe,g=Lh(),d.pooledCache=g,g.refCount++,g!==null&&(d.pooledCacheLanes|=o),d=g),r.memoizedState={parent:c,cache:d},Oh(r),Wa(r,vn,d)):((i.lanes&o)!==0&&(Ih(i,r),al(r,null,null,o),il()),d=i.memoizedState,g=r.memoizedState,d.parent!==c?(d={parent:c,cache:c},r.memoizedState=d,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=d),Wa(r,vn,c)):(c=g.cache,Wa(r,vn,c),c!==d.cache&&Dh(r,[vn],o,!0))),Dn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function pa(i){i.flags|=4}function X_(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!$y(r)){if(r=_i.current,r!==null&&((be&4194048)===be?Vi!==null:(be&62914560)!==be&&(be&536870912)===0||r!==Vi))throw el=Nh,R0;i.flags|=8192}}function hu(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Nt():536870912,i.lanes|=r,Gs|=r)}function fl(i,r){if(!De)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Qe(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,c=0;if(r)for(var d=i.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=i,d=d.sibling;else for(d=i.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=i,d=d.sibling;return i.subtreeFlags|=c,i.childLanes=o,r}function RA(i,r,o){var c=r.pendingProps;switch(Ah(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(r),null;case 1:return Qe(r),null;case 3:return o=r.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),ua(vn),ce(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Yo(r)?pa(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,M0())),Qe(r),null;case 26:return o=r.memoizedState,i===null?(pa(r),o!==null?(Qe(r),X_(r,o)):(Qe(r),r.flags&=-16777217)):o?o!==i.memoizedState?(pa(r),Qe(r),X_(r,o)):(Qe(r),r.flags&=-16777217):(i.memoizedProps!==c&&pa(r),Qe(r),r.flags&=-16777217),null;case 27:Xe(r),o=St.current;var d=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==c&&pa(r);else{if(!c){if(r.stateNode===null)throw Error(a(166));return Qe(r),null}i=$.current,Yo(r)?x0(r):(i=Xy(d,c,o),r.stateNode=i,pa(r))}return Qe(r),null;case 5:if(Xe(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==c&&pa(r);else{if(!c){if(r.stateNode===null)throw Error(a(166));return Qe(r),null}if(i=$.current,Yo(r))x0(r);else{switch(d=Tu(St.current),i){case 1:i=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=d.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?d.createElement(o,{is:c.is}):d.createElement(o)}}i[mn]=r,i[Cn]=c;t:for(d=r.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===r)break t;for(;d.sibling===null;){if(d.return===null||d.return===r)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}r.stateNode=i;t:switch(Un(i,o,c),o){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&pa(r)}}return Qe(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==c&&pa(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(a(166));if(i=St.current,Yo(r)){if(i=r.stateNode,o=r.memoizedProps,c=null,d=kn,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}i[mn]=r,i=!!(i.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||Fy(i.nodeValue,o)),i||Gr(r)}else i=Tu(i).createTextNode(c),i[mn]=r,r.stateNode=i}return Qe(r),null;case 13:if(c=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(d=Yo(r),c!==null&&c.dehydrated!==null){if(i===null){if(!d)throw Error(a(318));if(d=r.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[mn]=r}else Ko(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Qe(r),d=!1}else d=M0(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=d),d=!0;if(!d)return r.flags&256?(ha(r),r):(ha(r),null)}if(ha(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=c!==null,i=i!==null&&i.memoizedState!==null,o){c=r.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==d&&(c.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),hu(r,r.updateQueue),Qe(r),null;case 4:return ce(),i===null&&Bd(r.stateNode.containerInfo),Qe(r),null;case 10:return ua(r.type),Qe(r),null;case 19:if(xt(_n),d=r.memoizedState,d===null)return Qe(r),null;if(c=(r.flags&128)!==0,g=d.rendering,g===null)if(c)fl(d,!1);else{if(nn!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(g=ou(i),g!==null){for(r.flags|=128,fl(d,!1),i=g.updateQueue,r.updateQueue=i,hu(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)_0(o,i),o=o.sibling;return Et(_n,_n.current&1|2),r.child}i=i.sibling}d.tail!==null&&re()>mu&&(r.flags|=128,c=!0,fl(d,!1),r.lanes=4194304)}else{if(!c)if(i=ou(g),i!==null){if(r.flags|=128,c=!0,i=i.updateQueue,r.updateQueue=i,hu(r,i),fl(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!De)return Qe(r),null}else 2*re()-d.renderingStartTime>mu&&o!==536870912&&(r.flags|=128,c=!0,fl(d,!1),r.lanes=4194304);d.isBackwards?(g.sibling=r.child,r.child=g):(i=d.last,i!==null?i.sibling=g:r.child=g,d.last=g)}return d.tail!==null?(r=d.tail,d.rendering=r,d.tail=r.sibling,d.renderingStartTime=re(),r.sibling=null,i=_n.current,Et(_n,c?i&1|2:i&1),r):(Qe(r),null);case 22:case 23:return ha(r),Vh(),c=r.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(o&536870912)!==0&&(r.flags&128)===0&&(Qe(r),r.subtreeFlags&6&&(r.flags|=8192)):Qe(r),o=r.updateQueue,o!==null&&hu(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==o&&(r.flags|=2048),i!==null&&xt(jr),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),ua(vn),Qe(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function CA(i,r){switch(Ah(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return ua(vn),ce(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Xe(r),null;case 13:if(ha(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(a(340));Ko()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return xt(_n),null;case 4:return ce(),null;case 10:return ua(r.type),null;case 22:case 23:return ha(r),Vh(),i!==null&&xt(jr),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return ua(vn),null;case 25:return null;default:return null}}function j_(i,r){switch(Ah(r),r.tag){case 3:ua(vn),ce();break;case 26:case 27:case 5:Xe(r);break;case 4:ce();break;case 13:ha(r);break;case 19:xt(_n);break;case 10:ua(r.type);break;case 22:case 23:ha(r),Vh(),i!==null&&xt(jr);break;case 24:ua(vn)}}function hl(i,r){try{var o=r.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&i)===i){c=void 0;var g=o.create,E=o.inst;c=g(),E.destroy=c}o=o.next}while(o!==d)}}catch(T){Ge(r,r.return,T)}}function Ja(i,r,o){try{var c=r.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var g=d.next;c=g;do{if((c.tag&i)===i){var E=c.inst,T=E.destroy;if(T!==void 0){E.destroy=void 0,d=r;var F=o,J=T;try{J()}catch(ft){Ge(d,F,ft)}}}c=c.next}while(c!==g)}}catch(ft){Ge(r,r.return,ft)}}function W_(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{P0(r,o)}catch(c){Ge(i,i.return,c)}}}function q_(i,r,o){o.props=qr(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(c){Ge(i,r,c)}}function dl(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var c=i.stateNode;break;case 30:c=i.stateNode;break;default:c=i.stateNode}typeof o=="function"?i.refCleanup=o(c):o.current=c}}catch(d){Ge(i,r,d)}}function Hi(i,r){var o=i.ref,c=i.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(d){Ge(i,r,d)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){Ge(i,r,d)}else o.current=null}function Y_(i){var r=i.type,o=i.memoizedProps,c=i.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break t;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(d){Ge(i,i.return,d)}}function pd(i,r,o){try{var c=i.stateNode;KA(c,i.type,o,r),c[Cn]=r}catch(d){Ge(i,i.return,d)}}function K_(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&or(i.type)||i.tag===4}function md(i){t:for(;;){for(;i.sibling===null;){if(i.return===null||K_(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&or(i.type)||i.flags&2||i.child===null||i.tag===4)continue t;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function gd(i,r,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=bu));else if(c!==4&&(c===27&&or(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(gd(i,r,o),i=i.sibling;i!==null;)gd(i,r,o),i=i.sibling}function du(i,r,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(c!==4&&(c===27&&or(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(du(i,r,o),i=i.sibling;i!==null;)du(i,r,o),i=i.sibling}function Z_(i){var r=i.stateNode,o=i.memoizedProps;try{for(var c=i.type,d=r.attributes;d.length;)r.removeAttributeNode(d[0]);Un(r,c,o),r[mn]=i,r[Cn]=o}catch(g){Ge(i,i.return,g)}}var ma=!1,sn=!1,vd=!1,Q_=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function wA(i,r){if(i=i.containerInfo,Hd=Lu,i=l0(i),mh(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else t:{o=(o=i.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break t}var E=0,T=-1,F=-1,J=0,ft=0,_t=i,it=null;e:for(;;){for(var at;_t!==o||d!==0&&_t.nodeType!==3||(T=E+d),_t!==g||c!==0&&_t.nodeType!==3||(F=E+c),_t.nodeType===3&&(E+=_t.nodeValue.length),(at=_t.firstChild)!==null;)it=_t,_t=at;for(;;){if(_t===i)break e;if(it===o&&++J===d&&(T=E),it===g&&++ft===c&&(F=E),(at=_t.nextSibling)!==null)break;_t=it,it=_t.parentNode}_t=at}o=T===-1||F===-1?null:{start:T,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(Gd={focusedElem:i,selectionRange:o},Lu=!1,Tn=r;Tn!==null;)if(r=Tn,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,Tn=i;else for(;Tn!==null;){switch(r=Tn,g=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&g!==null){i=void 0,o=r,d=g.memoizedProps,g=g.memoizedState,c=o.stateNode;try{var ne=qr(o.type,d,o.elementType===o.type);i=c.getSnapshotBeforeUpdate(ne,g),c.__reactInternalSnapshotBeforeUpdate=i}catch(Qt){Ge(o,o.return,Qt)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)jd(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":jd(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(a(163))}if(i=r.sibling,i!==null){i.return=r.return,Tn=i;break}Tn=r.return}}function $_(i,r,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:tr(i,o),c&4&&hl(5,o);break;case 1:if(tr(i,o),c&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){Ge(o,o.return,E)}else{var d=qr(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(d,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){Ge(o,o.return,E)}}c&64&&W_(o),c&512&&dl(o,o.return);break;case 3:if(tr(i,o),c&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{P0(i,r)}catch(E){Ge(o,o.return,E)}}break;case 27:r===null&&c&4&&Z_(o);case 26:case 5:tr(i,o),r===null&&c&4&&Y_(o),c&512&&dl(o,o.return);break;case 12:tr(i,o);break;case 13:tr(i,o),c&4&&ey(i,o),c&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=BA.bind(null,o),nR(i,o))));break;case 22:if(c=o.memoizedState!==null||ma,!c){r=r!==null&&r.memoizedState!==null||sn,d=ma;var g=sn;ma=c,(sn=r)&&!g?er(i,o,(o.subtreeFlags&8772)!==0):tr(i,o),ma=d,sn=g}break;case 30:break;default:tr(i,o)}}function J_(i){var r=i.alternate;r!==null&&(i.alternate=null,J_(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Ga(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Ke=null,Zn=!1;function ga(i,r,o){for(o=o.child;o!==null;)ty(i,r,o),o=o.sibling}function ty(i,r,o){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(ht,o)}catch{}switch(o.tag){case 26:sn||Hi(o,r),ga(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:sn||Hi(o,r);var c=Ke,d=Zn;or(o.type)&&(Ke=o.stateNode,Zn=!1),ga(i,r,o),Ml(o.stateNode),Ke=c,Zn=d;break;case 5:sn||Hi(o,r);case 6:if(c=Ke,d=Zn,Ke=null,ga(i,r,o),Ke=c,Zn=d,Ke!==null)if(Zn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(o.stateNode)}catch(g){Ge(o,r,g)}else try{Ke.removeChild(o.stateNode)}catch(g){Ge(o,r,g)}break;case 18:Ke!==null&&(Zn?(i=Ke,Gy(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Dl(i)):Gy(Ke,o.stateNode));break;case 4:c=Ke,d=Zn,Ke=o.stateNode.containerInfo,Zn=!0,ga(i,r,o),Ke=c,Zn=d;break;case 0:case 11:case 14:case 15:sn||Ja(2,o,r),sn||Ja(4,o,r),ga(i,r,o);break;case 1:sn||(Hi(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"&&q_(o,r,c)),ga(i,r,o);break;case 21:ga(i,r,o);break;case 22:sn=(c=sn)||o.memoizedState!==null,ga(i,r,o),sn=c;break;default:ga(i,r,o)}}function ey(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Dl(i)}catch(o){Ge(r,r.return,o)}}function DA(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new Q_),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new Q_),r;default:throw Error(a(435,i.tag))}}function _d(i,r){var o=DA(i);r.forEach(function(c){var d=zA.bind(null,i,c);o.has(c)||(o.add(c),c.then(d,d))})}function si(i,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c],g=i,E=r,T=E;t:for(;T!==null;){switch(T.tag){case 27:if(or(T.type)){Ke=T.stateNode,Zn=!1;break t}break;case 5:Ke=T.stateNode,Zn=!1;break t;case 3:case 4:Ke=T.stateNode.containerInfo,Zn=!0;break t}T=T.return}if(Ke===null)throw Error(a(160));ty(g,E,d),Ke=null,Zn=!1,g=d.alternate,g!==null&&(g.return=null),d.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)ny(r,i),r=r.sibling}var Ri=null;function ny(i,r){var o=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:si(r,i),oi(i),c&4&&(Ja(3,i,i.return),hl(3,i),Ja(5,i,i.return));break;case 1:si(r,i),oi(i),c&512&&(sn||o===null||Hi(o,o.return)),c&64&&ma&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var d=Ri;if(si(r,i),oi(i),c&512&&(sn||o===null||Hi(o,o.return)),c&4){var g=o!==null?o.memoizedState:null;if(c=i.memoizedState,o===null)if(c===null)if(i.stateNode===null){t:{c=i.type,o=i.memoizedProps,d=d.ownerDocument||d;e:switch(c){case"title":g=d.getElementsByTagName("title")[0],(!g||g[Ha]||g[mn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=d.createElement(c),d.head.insertBefore(g,d.querySelector("head > title"))),Un(g,c,o),g[mn]=i,fn(g),c=g;break t;case"link":var E=Zy("link","href",d).get(c+(o.href||""));if(E){for(var T=0;T<E.length;T++)if(g=E[T],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(T,1);break e}}g=d.createElement(c),Un(g,c,o),d.head.appendChild(g);break;case"meta":if(E=Zy("meta","content",d).get(c+(o.content||""))){for(T=0;T<E.length;T++)if(g=E[T],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(T,1);break e}}g=d.createElement(c),Un(g,c,o),d.head.appendChild(g);break;default:throw Error(a(468,c))}g[mn]=i,fn(g),c=g}i.stateNode=c}else Qy(d,i.type,i.stateNode);else i.stateNode=Ky(d,c,i.memoizedProps);else g!==c?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,c===null?Qy(d,i.type,i.stateNode):Ky(d,c,i.memoizedProps)):c===null&&i.stateNode!==null&&pd(i,i.memoizedProps,o.memoizedProps)}break;case 27:si(r,i),oi(i),c&512&&(sn||o===null||Hi(o,o.return)),o!==null&&c&4&&pd(i,i.memoizedProps,o.memoizedProps);break;case 5:if(si(r,i),oi(i),c&512&&(sn||o===null||Hi(o,o.return)),i.flags&32){d=i.stateNode;try{Bi(d,"")}catch(at){Ge(i,i.return,at)}}c&4&&i.stateNode!=null&&(d=i.memoizedProps,pd(i,d,o!==null?o.memoizedProps:d)),c&1024&&(vd=!0);break;case 6:if(si(r,i),oi(i),c&4){if(i.stateNode===null)throw Error(a(162));c=i.memoizedProps,o=i.stateNode;try{o.nodeValue=c}catch(at){Ge(i,i.return,at)}}break;case 3:if(Cu=null,d=Ri,Ri=Au(r.containerInfo),si(r,i),Ri=d,oi(i),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Dl(r.containerInfo)}catch(at){Ge(i,i.return,at)}vd&&(vd=!1,iy(i));break;case 4:c=Ri,Ri=Au(i.stateNode.containerInfo),si(r,i),oi(i),Ri=c;break;case 12:si(r,i),oi(i);break;case 13:si(r,i),oi(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(bd=re()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,_d(i,c)));break;case 22:d=i.memoizedState!==null;var F=o!==null&&o.memoizedState!==null,J=ma,ft=sn;if(ma=J||d,sn=ft||F,si(r,i),sn=ft,ma=J,oi(i),c&8192)t:for(r=i.stateNode,r._visibility=d?r._visibility&-2:r._visibility|1,d&&(o===null||F||ma||sn||Yr(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){F=o=r;try{if(g=F.stateNode,d)E=g.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{T=F.stateNode;var _t=F.memoizedProps.style,it=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(at){Ge(F,F.return,at)}}}else if(r.tag===6){if(o===null){F=r;try{F.stateNode.nodeValue=d?"":F.memoizedProps}catch(at){Ge(F,F.return,at)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break t;for(;r.sibling===null;){if(r.return===null||r.return===i)break t;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=i.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,_d(i,o))));break;case 19:si(r,i),oi(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,_d(i,c)));break;case 30:break;case 21:break;default:si(r,i),oi(i)}}function oi(i){var r=i.flags;if(r&2){try{for(var o,c=i.return;c!==null;){if(K_(c)){o=c;break}c=c.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var d=o.stateNode,g=md(i);du(i,g,d);break;case 5:var E=o.stateNode;o.flags&32&&(Bi(E,""),o.flags&=-33);var T=md(i);du(i,T,E);break;case 3:case 4:var F=o.stateNode.containerInfo,J=md(i);gd(i,J,F);break;default:throw Error(a(161))}}catch(ft){Ge(i,i.return,ft)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function iy(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;iy(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function tr(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)$_(i,r.alternate,r),r=r.sibling}function Yr(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Ja(4,r,r.return),Yr(r);break;case 1:Hi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&q_(r,r.return,o),Yr(r);break;case 27:Ml(r.stateNode);case 26:case 5:Hi(r,r.return),Yr(r);break;case 22:r.memoizedState===null&&Yr(r);break;case 30:Yr(r);break;default:Yr(r)}i=i.sibling}}function er(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,d=i,g=r,E=g.flags;switch(g.tag){case 0:case 11:case 15:er(d,g,o),hl(4,g);break;case 1:if(er(d,g,o),c=g,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(J){Ge(c,c.return,J)}if(c=g,d=c.updateQueue,d!==null){var T=c.stateNode;try{var F=d.shared.hiddenCallbacks;if(F!==null)for(d.shared.hiddenCallbacks=null,d=0;d<F.length;d++)U0(F[d],T)}catch(J){Ge(c,c.return,J)}}o&&E&64&&W_(g),dl(g,g.return);break;case 27:Z_(g);case 26:case 5:er(d,g,o),o&&c===null&&E&4&&Y_(g),dl(g,g.return);break;case 12:er(d,g,o);break;case 13:er(d,g,o),o&&E&4&&ey(d,g);break;case 22:g.memoizedState===null&&er(d,g,o),dl(g,g.return);break;case 30:break;default:er(d,g,o)}r=r.sibling}}function yd(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&$o(o))}function xd(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&$o(i))}function Gi(i,r,o,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)ay(i,r,o,c),r=r.sibling}function ay(i,r,o,c){var d=r.flags;switch(r.tag){case 0:case 11:case 15:Gi(i,r,o,c),d&2048&&hl(9,r);break;case 1:Gi(i,r,o,c);break;case 3:Gi(i,r,o,c),d&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&$o(i)));break;case 12:if(d&2048){Gi(i,r,o,c),i=r.stateNode;try{var g=r.memoizedProps,E=g.id,T=g.onPostCommit;typeof T=="function"&&T(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(F){Ge(r,r.return,F)}}else Gi(i,r,o,c);break;case 13:Gi(i,r,o,c);break;case 23:break;case 22:g=r.stateNode,E=r.alternate,r.memoizedState!==null?g._visibility&2?Gi(i,r,o,c):pl(i,r):g._visibility&2?Gi(i,r,o,c):(g._visibility|=2,zs(i,r,o,c,(r.subtreeFlags&10256)!==0)),d&2048&&yd(E,r);break;case 24:Gi(i,r,o,c),d&2048&&xd(r.alternate,r);break;default:Gi(i,r,o,c)}}function zs(i,r,o,c,d){for(d=d&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var g=i,E=r,T=o,F=c,J=E.flags;switch(E.tag){case 0:case 11:case 15:zs(g,E,T,F,d),hl(8,E);break;case 23:break;case 22:var ft=E.stateNode;E.memoizedState!==null?ft._visibility&2?zs(g,E,T,F,d):pl(g,E):(ft._visibility|=2,zs(g,E,T,F,d)),d&&J&2048&&yd(E.alternate,E);break;case 24:zs(g,E,T,F,d),d&&J&2048&&xd(E.alternate,E);break;default:zs(g,E,T,F,d)}r=r.sibling}}function pl(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,c=r,d=c.flags;switch(c.tag){case 22:pl(o,c),d&2048&&yd(c.alternate,c);break;case 24:pl(o,c),d&2048&&xd(c.alternate,c);break;default:pl(o,c)}r=r.sibling}}var ml=8192;function Vs(i){if(i.subtreeFlags&ml)for(i=i.child;i!==null;)ry(i),i=i.sibling}function ry(i){switch(i.tag){case 26:Vs(i),i.flags&ml&&i.memoizedState!==null&&mR(Ri,i.memoizedState,i.memoizedProps);break;case 5:Vs(i);break;case 3:case 4:var r=Ri;Ri=Au(i.stateNode.containerInfo),Vs(i),Ri=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=ml,ml=16777216,Vs(i),ml=r):Vs(i));break;default:Vs(i)}}function sy(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function gl(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];Tn=c,ly(c,i)}sy(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)oy(i),i=i.sibling}function oy(i){switch(i.tag){case 0:case 11:case 15:gl(i),i.flags&2048&&Ja(9,i,i.return);break;case 3:gl(i);break;case 12:gl(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,pu(i)):gl(i);break;default:gl(i)}}function pu(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];Tn=c,ly(c,i)}sy(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Ja(8,r,r.return),pu(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,pu(r));break;default:pu(r)}i=i.sibling}}function ly(i,r){for(;Tn!==null;){var o=Tn;switch(o.tag){case 0:case 11:case 15:Ja(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:$o(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,Tn=c;else t:for(o=i;Tn!==null;){c=Tn;var d=c.sibling,g=c.return;if(J_(c),c===o){Tn=null;break t}if(d!==null){d.return=g,Tn=d;break t}Tn=g}}}var LA={getCacheForType:function(i){var r=In(vn),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},UA=typeof WeakMap=="function"?WeakMap:Map,Le=0,qe=null,ge=null,be=0,Ue=0,li=null,nr=!1,Hs=!1,Sd=!1,va=0,nn=0,ir=0,Kr=0,Md=0,yi=0,Gs=0,vl=null,Qn=null,Ed=!1,bd=0,mu=1/0,gu=null,ar=null,Ln=0,rr=null,ks=null,Xs=0,Td=0,Ad=null,cy=null,_l=0,Rd=null;function ci(){if((Le&2)!==0&&be!==0)return be&-be;if(B.T!==null){var i=Ls;return i!==0?i:Nd()}return Ae()}function uy(){yi===0&&(yi=(be&536870912)===0||De?X():536870912);var i=_i.current;return i!==null&&(i.flags|=32),yi}function ui(i,r,o){(i===qe&&(Ue===2||Ue===9)||i.cancelPendingCommit!==null)&&(js(i,0),sr(i,be,yi,!1)),vt(i,o),((Le&2)===0||i!==qe)&&(i===qe&&((Le&2)===0&&(Kr|=o),nn===4&&sr(i,be,yi,!1)),ki(i))}function fy(i,r,o){if((Le&6)!==0)throw Error(a(327));var c=!o&&(r&124)===0&&(r&i.expiredLanes)===0||ae(i,r),d=c?OA(i,r):Dd(i,r,!0),g=c;do{if(d===0){Hs&&!c&&sr(i,r,0,!1);break}else{if(o=i.current.alternate,g&&!PA(o)){d=Dd(i,r,!1),g=!1;continue}if(d===2){if(g=r,i.errorRecoveryDisabledLanes&g)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;t:{var T=i;d=vl;var F=T.current.memoizedState.isDehydrated;if(F&&(js(T,E).flags|=256),E=Dd(T,E,!1),E!==2){if(Sd&&!F){T.errorRecoveryDisabledLanes|=g,Kr|=g,d=4;break t}g=Qn,Qn=d,g!==null&&(Qn===null?Qn=g:Qn.push.apply(Qn,g))}d=E}if(g=!1,d!==2)continue}}if(d===1){js(i,0),sr(i,r,0,!0);break}t:{switch(c=i,g=d,g){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:sr(c,r,yi,!nr);break t;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(d=bd+300-re(),10<d)){if(sr(c,r,yi,!nr),fe(c,0,!0)!==0)break t;c.timeoutHandle=Vy(hy.bind(null,c,o,Qn,gu,Ed,r,yi,Kr,Gs,nr,g,2,-0,0),d);break t}hy(c,o,Qn,gu,Ed,r,yi,Kr,Gs,nr,g,0,-0,0)}}break}while(!0);ki(i)}function hy(i,r,o,c,d,g,E,T,F,J,ft,_t,it,at){if(i.timeoutHandle=-1,_t=r.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(Tl={stylesheets:null,count:0,unsuspend:pR},ry(r),_t=gR(),_t!==null)){i.cancelPendingCommit=_t(yy.bind(null,i,r,g,o,c,d,E,T,F,ft,1,it,at)),sr(i,g,E,!J);return}yy(i,r,g,o,c,d,E,T,F)}function PA(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var d=o[c],g=d.getSnapshot;d=d.value;try{if(!ai(g(),d))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function sr(i,r,o,c){r&=~Md,r&=~Kr,i.suspendedLanes|=r,i.pingedLanes&=~r,c&&(i.warmLanes|=r),c=i.expirationTimes;for(var d=r;0<d;){var g=31-Dt(d),E=1<<g;c[g]=-1,d&=~E}o!==0&&Ot(i,o,r)}function vu(){return(Le&6)===0?(yl(0),!1):!0}function Cd(){if(ge!==null){if(Ue===0)var i=ge.return;else i=ge,ca=kr=null,jh(i),Fs=null,cl=0,i=ge;for(;i!==null;)j_(i.alternate,i),i=i.return;ge=null}}function js(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,QA(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),Cd(),qe=i,ge=o=sa(i.current,null),be=r,Ue=0,li=null,nr=!1,Hs=ae(i,r),Sd=!1,Gs=yi=Md=Kr=ir=nn=0,Qn=vl=null,Ed=!1,(r&8)!==0&&(r|=r&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=r;0<c;){var d=31-Dt(c),g=1<<d;r|=i[d],c&=~g}return va=r,zc(),o}function dy(i,r){he=null,B.H=au,r===tl||r===Yc?(r=D0(),Ue=3):r===R0?(r=D0(),Ue=4):Ue=r===L_?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,li=r,ge===null&&(nn=1,cu(i,pi(r,i.current)))}function py(){var i=B.H;return B.H=au,i===null?au:i}function my(){var i=B.A;return B.A=LA,i}function wd(){nn=4,nr||(be&4194048)!==be&&_i.current!==null||(Hs=!0),(ir&134217727)===0&&(Kr&134217727)===0||qe===null||sr(qe,be,yi,!1)}function Dd(i,r,o){var c=Le;Le|=2;var d=py(),g=my();(qe!==i||be!==r)&&(gu=null,js(i,r)),r=!1;var E=nn;t:do try{if(Ue!==0&&ge!==null){var T=ge,F=li;switch(Ue){case 8:Cd(),E=6;break t;case 3:case 2:case 9:case 6:_i.current===null&&(r=!0);var J=Ue;if(Ue=0,li=null,Ws(i,T,F,J),o&&Hs){E=0;break t}break;default:J=Ue,Ue=0,li=null,Ws(i,T,F,J)}}NA(),E=nn;break}catch(ft){dy(i,ft)}while(!0);return r&&i.shellSuspendCounter++,ca=kr=null,Le=c,B.H=d,B.A=g,ge===null&&(qe=null,be=0,zc()),E}function NA(){for(;ge!==null;)gy(ge)}function OA(i,r){var o=Le;Le|=2;var c=py(),d=my();qe!==i||be!==r?(gu=null,mu=re()+500,js(i,r)):Hs=ae(i,r);t:do try{if(Ue!==0&&ge!==null){r=ge;var g=li;e:switch(Ue){case 1:Ue=0,li=null,Ws(i,r,g,1);break;case 2:case 9:if(C0(g)){Ue=0,li=null,vy(r);break}r=function(){Ue!==2&&Ue!==9||qe!==i||(Ue=7),ki(i)},g.then(r,r);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:C0(g)?(Ue=0,li=null,vy(r)):(Ue=0,li=null,Ws(i,r,g,7));break;case 5:var E=null;switch(ge.tag){case 26:E=ge.memoizedState;case 5:case 27:var T=ge;if(!E||$y(E)){Ue=0,li=null;var F=T.sibling;if(F!==null)ge=F;else{var J=T.return;J!==null?(ge=J,_u(J)):ge=null}break e}}Ue=0,li=null,Ws(i,r,g,5);break;case 6:Ue=0,li=null,Ws(i,r,g,6);break;case 8:Cd(),nn=6;break t;default:throw Error(a(462))}}IA();break}catch(ft){dy(i,ft)}while(!0);return ca=kr=null,B.H=c,B.A=d,Le=o,ge!==null?0:(qe=null,be=0,zc(),nn)}function IA(){for(;ge!==null&&!Wn();)gy(ge)}function gy(i){var r=k_(i.alternate,i,va);i.memoizedProps=i.pendingProps,r===null?_u(i):ge=r}function vy(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=F_(o,r,r.pendingProps,r.type,void 0,be);break;case 11:r=F_(o,r,r.pendingProps,r.type.render,r.ref,be);break;case 5:jh(r);default:j_(o,r),r=ge=_0(r,va),r=k_(o,r,va)}i.memoizedProps=i.pendingProps,r===null?_u(i):ge=r}function Ws(i,r,o,c){ca=kr=null,jh(r),Fs=null,cl=0;var d=r.return;try{if(TA(i,d,r,o,be)){nn=1,cu(i,pi(o,i.current)),ge=null;return}}catch(g){if(d!==null)throw ge=d,g;nn=1,cu(i,pi(o,i.current)),ge=null;return}r.flags&32768?(De||c===1?i=!0:Hs||(be&536870912)!==0?i=!1:(nr=i=!0,(c===2||c===9||c===3||c===6)&&(c=_i.current,c!==null&&c.tag===13&&(c.flags|=16384))),_y(r,i)):_u(r)}function _u(i){var r=i;do{if((r.flags&32768)!==0){_y(r,nr);return}i=r.return;var o=RA(r.alternate,r,va);if(o!==null){ge=o;return}if(r=r.sibling,r!==null){ge=r;return}ge=r=i}while(r!==null);nn===0&&(nn=5)}function _y(i,r){do{var o=CA(i.alternate,i);if(o!==null){o.flags&=32767,ge=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){ge=i;return}ge=i=o}while(i!==null);nn=6,ge=null}function yy(i,r,o,c,d,g,E,T,F){i.cancelPendingCommit=null;do yu();while(Ln!==0);if((Le&6)!==0)throw Error(a(327));if(r!==null){if(r===i.current)throw Error(a(177));if(g=r.lanes|r.childLanes,g|=xh,Bt(i,o,g,E,T,F),i===qe&&(ge=qe=null,be=0),ks=r,rr=i,Xs=o,Td=g,Ad=d,cy=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,VA(O,function(){return by(),null})):(i.callbackNode=null,i.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=B.T,B.T=null,d=j.p,j.p=2,E=Le,Le|=4;try{wA(i,r,o)}finally{Le=E,j.p=d,B.T=c}}Ln=1,xy(),Sy(),My()}}function xy(){if(Ln===1){Ln=0;var i=rr,r=ks,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=B.T,B.T=null;var c=j.p;j.p=2;var d=Le;Le|=4;try{ny(r,i);var g=Gd,E=l0(i.containerInfo),T=g.focusedElem,F=g.selectionRange;if(E!==T&&T&&T.ownerDocument&&o0(T.ownerDocument.documentElement,T)){if(F!==null&&mh(T)){var J=F.start,ft=F.end;if(ft===void 0&&(ft=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ft,T.value.length);else{var _t=T.ownerDocument||document,it=_t&&_t.defaultView||window;if(it.getSelection){var at=it.getSelection(),ne=T.textContent.length,Qt=Math.min(F.start,ne),Be=F.end===void 0?Qt:Math.min(F.end,ne);!at.extend&&Qt>Be&&(E=Be,Be=Qt,Qt=E);var q=s0(T,Qt),k=s0(T,Be);if(q&&k&&(at.rangeCount!==1||at.anchorNode!==q.node||at.anchorOffset!==q.offset||at.focusNode!==k.node||at.focusOffset!==k.offset)){var Q=_t.createRange();Q.setStart(q.node,q.offset),at.removeAllRanges(),Qt>Be?(at.addRange(Q),at.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),at.addRange(Q))}}}}for(_t=[],at=T;at=at.parentNode;)at.nodeType===1&&_t.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var pt=_t[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Lu=!!Hd,Gd=Hd=null}finally{Le=d,j.p=c,B.T=o}}i.current=r,Ln=2}}function Sy(){if(Ln===2){Ln=0;var i=rr,r=ks,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=B.T,B.T=null;var c=j.p;j.p=2;var d=Le;Le|=4;try{$_(i,r.alternate,r)}finally{Le=d,j.p=c,B.T=o}}Ln=3}}function My(){if(Ln===4||Ln===3){Ln=0,ye();var i=rr,r=ks,o=Xs,c=cy;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Ln=5:(Ln=0,ks=rr=null,Ey(i,i.pendingLanes));var d=i.pendingLanes;if(d===0&&(ar=null),un(o),r=r.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(ht,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=B.T,d=j.p,j.p=2,B.T=null;try{for(var g=i.onRecoverableError,E=0;E<c.length;E++){var T=c[E];g(T.value,{componentStack:T.stack})}}finally{B.T=r,j.p=d}}(Xs&3)!==0&&yu(),ki(i),d=i.pendingLanes,(o&4194090)!==0&&(d&42)!==0?i===Rd?_l++:(_l=0,Rd=i):_l=0,yl(0)}}function Ey(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,$o(r)))}function yu(i){return xy(),Sy(),My(),by()}function by(){if(Ln!==5)return!1;var i=rr,r=Td;Td=0;var o=un(Xs),c=B.T,d=j.p;try{j.p=32>o?32:o,B.T=null,o=Ad,Ad=null;var g=rr,E=Xs;if(Ln=0,ks=rr=null,Xs=0,(Le&6)!==0)throw Error(a(331));var T=Le;if(Le|=4,oy(g.current),ay(g,g.current,E,o),Le=T,yl(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(ht,g)}catch{}return!0}finally{j.p=d,B.T=c,Ey(i,r)}}function Ty(i,r,o){r=pi(o,r),r=rd(i.stateNode,r,2),i=Ka(i,r,2),i!==null&&(vt(i,2),ki(i))}function Ge(i,r,o){if(i.tag===3)Ty(i,i,o);else for(;r!==null;){if(r.tag===3){Ty(r,i,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ar===null||!ar.has(c))){i=pi(o,i),o=w_(2),c=Ka(r,o,2),c!==null&&(D_(o,c,r,i),vt(c,2),ki(c));break}}r=r.return}}function Ld(i,r,o){var c=i.pingCache;if(c===null){c=i.pingCache=new UA;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(o)||(Sd=!0,d.add(o),i=FA.bind(null,i,r,o),r.then(i,i))}function FA(i,r,o){var c=i.pingCache;c!==null&&c.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,qe===i&&(be&o)===o&&(nn===4||nn===3&&(be&62914560)===be&&300>re()-bd?(Le&2)===0&&js(i,0):Md|=o,Gs===be&&(Gs=0)),ki(i)}function Ay(i,r){r===0&&(r=Nt()),i=Rs(i,r),i!==null&&(vt(i,r),ki(i))}function BA(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),Ay(i,o)}function zA(i,r){var o=0;switch(i.tag){case 13:var c=i.stateNode,d=i.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(r),Ay(i,o)}function VA(i,r){return de(i,r)}var xu=null,qs=null,Ud=!1,Su=!1,Pd=!1,Zr=0;function ki(i){i!==qs&&i.next===null&&(qs===null?xu=qs=i:qs=qs.next=i),Su=!0,Ud||(Ud=!0,GA())}function yl(i,r){if(!Pd&&Su){Pd=!0;do for(var o=!1,c=xu;c!==null;){if(i!==0){var d=c.pendingLanes;if(d===0)var g=0;else{var E=c.suspendedLanes,T=c.pingedLanes;g=(1<<31-Dt(42|i)+1)-1,g&=d&~(E&~T),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,Dy(c,g))}else g=be,g=fe(c,c===qe?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||ae(c,g)||(o=!0,Dy(c,g));c=c.next}while(o);Pd=!1}}function HA(){Ry()}function Ry(){Su=Ud=!1;var i=0;Zr!==0&&(ZA()&&(i=Zr),Zr=0);for(var r=re(),o=null,c=xu;c!==null;){var d=c.next,g=Cy(c,r);g===0?(c.next=null,o===null?xu=d:o.next=d,d===null&&(qs=o)):(o=c,(i!==0||(g&3)!==0)&&(Su=!0)),c=d}yl(i)}function Cy(i,r){for(var o=i.suspendedLanes,c=i.pingedLanes,d=i.expirationTimes,g=i.pendingLanes&-62914561;0<g;){var E=31-Dt(g),T=1<<E,F=d[E];F===-1?((T&o)===0||(T&c)!==0)&&(d[E]=Oe(T,r)):F<=r&&(i.expiredLanes|=T),g&=~T}if(r=qe,o=be,o=fe(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c=i.callbackNode,o===0||i===r&&(Ue===2||Ue===9)||i.cancelPendingCommit!==null)return c!==null&&c!==null&&H(c),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||ae(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(c!==null&&H(c),un(o)){case 2:case 8:o=Xt;break;case 32:o=O;break;case 268435456:o=nt;break;default:o=O}return c=wy.bind(null,i),o=de(o,c),i.callbackPriority=r,i.callbackNode=o,r}return c!==null&&c!==null&&H(c),i.callbackPriority=2,i.callbackNode=null,2}function wy(i,r){if(Ln!==0&&Ln!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(yu()&&i.callbackNode!==o)return null;var c=be;return c=fe(i,i===qe?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c===0?null:(fy(i,c,r),Cy(i,re()),i.callbackNode!=null&&i.callbackNode===o?wy.bind(null,i):null)}function Dy(i,r){if(yu())return null;fy(i,r,!0)}function GA(){$A(function(){(Le&6)!==0?de(Ne,HA):Ry()})}function Nd(){return Zr===0&&(Zr=X()),Zr}function Ly(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Uc(""+i)}function Uy(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function kA(i,r,o,c,d){if(r==="submit"&&o&&o.stateNode===d){var g=Ly((d[Cn]||null).action),E=c.submitter;E&&(r=(r=E[Cn]||null)?Ly(r.formAction):E.getAttribute("formAction"),r!==null&&(g=r,E=null));var T=new Ic("action","action",null,c,d);i.push({event:T,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Zr!==0){var F=E?Uy(d,E):new FormData(d);td(o,{pending:!0,data:F,method:d.method,action:g},null,F)}}else typeof g=="function"&&(T.preventDefault(),F=E?Uy(d,E):new FormData(d),td(o,{pending:!0,data:F,method:d.method,action:g},g,F))},currentTarget:d}]})}}for(var Od=0;Od<yh.length;Od++){var Id=yh[Od],XA=Id.toLowerCase(),jA=Id[0].toUpperCase()+Id.slice(1);Ai(XA,"on"+jA)}Ai(f0,"onAnimationEnd"),Ai(h0,"onAnimationIteration"),Ai(d0,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(lA,"onTransitionRun"),Ai(cA,"onTransitionStart"),Ai(uA,"onTransitionCancel"),Ai(p0,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),na("onBeforeInput",["compositionend","keypress","textInput","paste"]),na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl));function Py(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var c=i[o],d=c.event;c=c.listeners;t:{var g=void 0;if(r)for(var E=c.length-1;0<=E;E--){var T=c[E],F=T.instance,J=T.currentTarget;if(T=T.listener,F!==g&&d.isPropagationStopped())break t;g=T,d.currentTarget=J;try{g(d)}catch(ft){lu(ft)}d.currentTarget=null,g=F}else for(E=0;E<c.length;E++){if(T=c[E],F=T.instance,J=T.currentTarget,T=T.listener,F!==g&&d.isPropagationStopped())break t;g=T,d.currentTarget=J;try{g(d)}catch(ft){lu(ft)}d.currentTarget=null,g=F}}}}function ve(i,r){var o=r[Ur];o===void 0&&(o=r[Ur]=new Set);var c=i+"__bubble";o.has(c)||(Ny(r,i,2,!1),o.add(c))}function Fd(i,r,o){var c=0;r&&(c|=4),Ny(o,i,c,r)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function Bd(i){if(!i[Mu]){i[Mu]=!0,Dc.forEach(function(o){o!=="selectionchange"&&(WA.has(o)||Fd(o,!1,i),Fd(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Mu]||(r[Mu]=!0,Fd("selectionchange",!1,r))}}function Ny(i,r,o,c){switch(ax(r)){case 2:var d=yR;break;case 8:d=xR;break;default:d=$d}o=d.bind(null,r,o,i),d=void 0,!sh||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?i.addEventListener(r,o,{capture:!0,passive:d}):i.addEventListener(r,o,!0):d!==void 0?i.addEventListener(r,o,{passive:d}):i.addEventListener(r,o,!1)}function zd(i,r,o,c,d){var g=c;if((r&1)===0&&(r&2)===0&&c!==null)t:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var T=c.stateNode.containerInfo;if(T===d)break;if(E===4)for(E=c.return;E!==null;){var F=E.tag;if((F===3||F===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;T!==null;){if(E=ta(T),E===null)return;if(F=E.tag,F===5||F===6||F===26||F===27){c=g=E;continue t}T=T.parentNode}}c=c.return}Hv(function(){var J=g,ft=ah(o),_t=[];t:{var it=m0.get(i);if(it!==void 0){var at=Ic,ne=i;switch(i){case"keypress":if(Nc(o)===0)break t;case"keydown":case"keyup":at=V1;break;case"focusin":ne="focus",at=uh;break;case"focusout":ne="blur",at=uh;break;case"beforeblur":case"afterblur":at=uh;break;case"click":if(o.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Xv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=C1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=k1;break;case f0:case h0:case d0:at=L1;break;case p0:at=j1;break;case"scroll":case"scrollend":at=A1;break;case"wheel":at=q1;break;case"copy":case"cut":case"paste":at=P1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Wv;break;case"toggle":case"beforetoggle":at=K1}var Qt=(r&4)!==0,Be=!Qt&&(i==="scroll"||i==="scrollend"),q=Qt?it!==null?it+"Capture":null:it;Qt=[];for(var k=J,Q;k!==null;){var pt=k;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||q===null||(pt=zo(k,q),pt!=null&&Qt.push(Sl(k,pt,Q))),Be)break;k=k.return}0<Qt.length&&(it=new at(it,ne,null,o,ft),_t.push({event:it,listeners:Qt}))}}if((r&7)===0){t:{if(it=i==="mouseover"||i==="pointerover",at=i==="mouseout"||i==="pointerout",it&&o!==ih&&(ne=o.relatedTarget||o.fromElement)&&(ta(ne)||ne[qn]))break t;if((at||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,at?(ne=o.relatedTarget||o.toElement,at=J,ne=ne?ta(ne):null,ne!==null&&(Be=l(ne),Qt=ne.tag,ne!==Be||Qt!==5&&Qt!==27&&Qt!==6)&&(ne=null)):(at=null,ne=J),at!==ne)){if(Qt=Xv,pt="onMouseLeave",q="onMouseEnter",k="mouse",(i==="pointerout"||i==="pointerover")&&(Qt=Wv,pt="onPointerLeave",q="onPointerEnter",k="pointer"),Be=at==null?it:Nr(at),Q=ne==null?it:Nr(ne),it=new Qt(pt,k+"leave",at,o,ft),it.target=Be,it.relatedTarget=Q,pt=null,ta(ft)===J&&(Qt=new Qt(q,k+"enter",ne,o,ft),Qt.target=Q,Qt.relatedTarget=Be,pt=Qt),Be=pt,at&&ne)e:{for(Qt=at,q=ne,k=0,Q=Qt;Q;Q=Ys(Q))k++;for(Q=0,pt=q;pt;pt=Ys(pt))Q++;for(;0<k-Q;)Qt=Ys(Qt),k--;for(;0<Q-k;)q=Ys(q),Q--;for(;k--;){if(Qt===q||q!==null&&Qt===q.alternate)break e;Qt=Ys(Qt),q=Ys(q)}Qt=null}else Qt=null;at!==null&&Oy(_t,it,at,Qt,!1),ne!==null&&Be!==null&&Oy(_t,Be,ne,Qt,!0)}}t:{if(it=J?Nr(J):window,at=it.nodeName&&it.nodeName.toLowerCase(),at==="select"||at==="input"&&it.type==="file")var Gt=t0;else if($v(it))if(e0)Gt=rA;else{Gt=iA;var pe=nA}else at=it.nodeName,!at||at.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?J&&nh(J.elementType)&&(Gt=t0):Gt=aA;if(Gt&&(Gt=Gt(i,J))){Jv(_t,Gt,o,ft);break t}pe&&pe(i,it,J),i==="focusout"&&J&&it.type==="number"&&J.memoizedProps.value!=null&&On(it,"number",it.value)}switch(pe=J?Nr(J):window,i){case"focusin":($v(pe)||pe.contentEditable==="true")&&(bs=pe,gh=J,qo=null);break;case"focusout":qo=gh=bs=null;break;case"mousedown":vh=!0;break;case"contextmenu":case"mouseup":case"dragend":vh=!1,c0(_t,o,ft);break;case"selectionchange":if(oA)break;case"keydown":case"keyup":c0(_t,o,ft)}var jt;if(hh)t:{switch(i){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Es?Zv(i,o)&&(te="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(te="onCompositionStart");te&&(qv&&o.locale!=="ko"&&(Es||te!=="onCompositionStart"?te==="onCompositionEnd"&&Es&&(jt=Gv()):(ja=ft,oh="value"in ja?ja.value:ja.textContent,Es=!0)),pe=Eu(J,te),0<pe.length&&(te=new jv(te,i,null,o,ft),_t.push({event:te,listeners:pe}),jt?te.data=jt:(jt=Qv(o),jt!==null&&(te.data=jt)))),(jt=Q1?$1(i,o):J1(i,o))&&(te=Eu(J,"onBeforeInput"),0<te.length&&(pe=new jv("onBeforeInput","beforeinput",null,o,ft),_t.push({event:pe,listeners:te}),pe.data=jt)),kA(_t,i,J,o,ft)}Py(_t,r)})}function Sl(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Eu(i,r){for(var o=r+"Capture",c=[];i!==null;){var d=i,g=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||g===null||(d=zo(i,o),d!=null&&c.unshift(Sl(i,d,g)),d=zo(i,r),d!=null&&c.push(Sl(i,d,g))),i.tag===3)return c;i=i.return}return[]}function Ys(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function Oy(i,r,o,c,d){for(var g=r._reactName,E=[];o!==null&&o!==c;){var T=o,F=T.alternate,J=T.stateNode;if(T=T.tag,F!==null&&F===c)break;T!==5&&T!==26&&T!==27||J===null||(F=J,d?(J=zo(o,g),J!=null&&E.unshift(Sl(o,J,F))):d||(J=zo(o,g),J!=null&&E.push(Sl(o,J,F)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var qA=/\r\n?/g,YA=/\u0000|\uFFFD/g;function Iy(i){return(typeof i=="string"?i:""+i).replace(qA,`
`).replace(YA,"")}function Fy(i,r){return r=Iy(r),Iy(i)===r}function bu(){}function Fe(i,r,o,c,d,g){switch(o){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||Bi(i,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&Bi(i,""+c);break;case"className":Lt(i,"class",c);break;case"tabIndex":Lt(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Lt(i,o,c);break;case"style":zv(i,c,g);break;case"data":if(r!=="object"){Lt(i,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(o);break}c=Uc(""+c),i.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(r!=="input"&&Fe(i,r,"name",d.name,d,null),Fe(i,r,"formEncType",d.formEncType,d,null),Fe(i,r,"formMethod",d.formMethod,d,null),Fe(i,r,"formTarget",d.formTarget,d,null)):(Fe(i,r,"encType",d.encType,d,null),Fe(i,r,"method",d.method,d,null),Fe(i,r,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(o);break}c=Uc(""+c),i.setAttribute(o,c);break;case"onClick":c!=null&&(i.onclick=bu);break;case"onScroll":c!=null&&ve("scroll",i);break;case"onScrollEnd":c!=null&&ve("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(a(60));i.innerHTML=o}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}o=Uc(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,""+c):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":c===!0?i.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,c):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(o,c):i.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(o):i.setAttribute(o,c);break;case"popover":ve("beforetoggle",i),ve("toggle",i),Tt(i,"popover",c);break;case"xlinkActuate":Ut(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Ut(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Ut(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Ut(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Ut(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Ut(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Ut(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Ut(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Ut(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Tt(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=b1.get(o)||o,Tt(i,o,c))}}function Vd(i,r,o,c,d,g){switch(o){case"style":zv(i,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(a(60));i.innerHTML=o}}break;case"children":typeof c=="string"?Bi(i,c):(typeof c=="number"||typeof c=="bigint")&&Bi(i,""+c);break;case"onScroll":c!=null&&ve("scroll",i);break;case"onScrollEnd":c!=null&&ve("scrollend",i);break;case"onClick":c!=null&&(i.onclick=bu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lc.hasOwnProperty(o))t:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),r=o.slice(2,d?o.length-7:void 0),g=i[Cn]||null,g=g!=null?g[o]:null,typeof g=="function"&&i.removeEventListener(r,g,d),typeof c=="function")){typeof g!="function"&&g!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,c,d);break t}o in i?i[o]=c:c===!0?i.setAttribute(o,""):Tt(i,o,c)}}}function Un(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",i),ve("load",i);var c=!1,d=!1,g;for(g in o)if(o.hasOwnProperty(g)){var E=o[g];if(E!=null)switch(g){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Fe(i,r,g,E,o,null)}}d&&Fe(i,r,"srcSet",o.srcSet,o,null),c&&Fe(i,r,"src",o.src,o,null);return;case"input":ve("invalid",i);var T=g=E=d=null,F=null,J=null;for(c in o)if(o.hasOwnProperty(c)){var ft=o[c];if(ft!=null)switch(c){case"name":d=ft;break;case"type":E=ft;break;case"checked":F=ft;break;case"defaultChecked":J=ft;break;case"value":g=ft;break;case"defaultValue":T=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(a(137,r));break;default:Fe(i,r,c,ft,o,null)}}He(i,g,T,F,J,E,d,!1),tn(i);return;case"select":ve("invalid",i),c=E=g=null;for(d in o)if(o.hasOwnProperty(d)&&(T=o[d],T!=null))switch(d){case"value":g=T;break;case"defaultValue":E=T;break;case"multiple":c=T;default:Fe(i,r,d,T,o,null)}r=g,o=E,i.multiple=!!c,r!=null?gn(i,!!c,r,!1):o!=null&&gn(i,!!c,o,!0);return;case"textarea":ve("invalid",i),g=d=c=null;for(E in o)if(o.hasOwnProperty(E)&&(T=o[E],T!=null))switch(E){case"value":c=T;break;case"defaultValue":d=T;break;case"children":g=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Fe(i,r,E,T,o,null)}wn(i,c,d,g),tn(i);return;case"option":for(F in o)if(o.hasOwnProperty(F)&&(c=o[F],c!=null))switch(F){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Fe(i,r,F,c,o,null)}return;case"dialog":ve("beforetoggle",i),ve("toggle",i),ve("cancel",i),ve("close",i);break;case"iframe":case"object":ve("load",i);break;case"video":case"audio":for(c=0;c<xl.length;c++)ve(xl[c],i);break;case"image":ve("error",i),ve("load",i);break;case"details":ve("toggle",i);break;case"embed":case"source":case"link":ve("error",i),ve("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in o)if(o.hasOwnProperty(J)&&(c=o[J],c!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Fe(i,r,J,c,o,null)}return;default:if(nh(r)){for(ft in o)o.hasOwnProperty(ft)&&(c=o[ft],c!==void 0&&Vd(i,r,ft,c,o,void 0));return}}for(T in o)o.hasOwnProperty(T)&&(c=o[T],c!=null&&Fe(i,r,T,c,o,null))}function KA(i,r,o,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,g=null,E=null,T=null,F=null,J=null,ft=null;for(at in o){var _t=o[at];if(o.hasOwnProperty(at)&&_t!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":F=_t;default:c.hasOwnProperty(at)||Fe(i,r,at,null,c,_t)}}for(var it in c){var at=c[it];if(_t=o[it],c.hasOwnProperty(it)&&(at!=null||_t!=null))switch(it){case"type":g=at;break;case"name":d=at;break;case"checked":J=at;break;case"defaultChecked":ft=at;break;case"value":E=at;break;case"defaultValue":T=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,r));break;default:at!==_t&&Fe(i,r,it,at,c,_t)}}ia(i,E,T,F,J,ft,g,d);return;case"select":at=E=T=it=null;for(g in o)if(F=o[g],o.hasOwnProperty(g)&&F!=null)switch(g){case"value":break;case"multiple":at=F;default:c.hasOwnProperty(g)||Fe(i,r,g,null,c,F)}for(d in c)if(g=c[d],F=o[d],c.hasOwnProperty(d)&&(g!=null||F!=null))switch(d){case"value":it=g;break;case"defaultValue":T=g;break;case"multiple":E=g;default:g!==F&&Fe(i,r,d,g,c,F)}r=T,o=E,c=at,it!=null?gn(i,!!o,it,!1):!!c!=!!o&&(r!=null?gn(i,!!o,r,!0):gn(i,!!o,o?[]:"",!1));return;case"textarea":at=it=null;for(T in o)if(d=o[T],o.hasOwnProperty(T)&&d!=null&&!c.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Fe(i,r,T,null,c,d)}for(E in c)if(d=c[E],g=o[E],c.hasOwnProperty(E)&&(d!=null||g!=null))switch(E){case"value":it=d;break;case"defaultValue":at=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==g&&Fe(i,r,E,d,c,g)}En(i,it,at);return;case"option":for(var ne in o)if(it=o[ne],o.hasOwnProperty(ne)&&it!=null&&!c.hasOwnProperty(ne))switch(ne){case"selected":i.selected=!1;break;default:Fe(i,r,ne,null,c,it)}for(F in c)if(it=c[F],at=o[F],c.hasOwnProperty(F)&&it!==at&&(it!=null||at!=null))switch(F){case"selected":i.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Fe(i,r,F,it,c,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in o)it=o[Qt],o.hasOwnProperty(Qt)&&it!=null&&!c.hasOwnProperty(Qt)&&Fe(i,r,Qt,null,c,it);for(J in c)if(it=c[J],at=o[J],c.hasOwnProperty(J)&&it!==at&&(it!=null||at!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(a(137,r));break;default:Fe(i,r,J,it,c,at)}return;default:if(nh(r)){for(var Be in o)it=o[Be],o.hasOwnProperty(Be)&&it!==void 0&&!c.hasOwnProperty(Be)&&Vd(i,r,Be,void 0,c,it);for(ft in c)it=c[ft],at=o[ft],!c.hasOwnProperty(ft)||it===at||it===void 0&&at===void 0||Vd(i,r,ft,it,c,at);return}}for(var q in o)it=o[q],o.hasOwnProperty(q)&&it!=null&&!c.hasOwnProperty(q)&&Fe(i,r,q,null,c,it);for(_t in c)it=c[_t],at=o[_t],!c.hasOwnProperty(_t)||it===at||it==null&&at==null||Fe(i,r,_t,it,c,at)}var Hd=null,Gd=null;function Tu(i){return i.nodeType===9?i:i.ownerDocument}function By(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zy(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function kd(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Xd=null;function ZA(){var i=window.event;return i&&i.type==="popstate"?i===Xd?!1:(Xd=i,!0):(Xd=null,!1)}var Vy=typeof setTimeout=="function"?setTimeout:void 0,QA=typeof clearTimeout=="function"?clearTimeout:void 0,Hy=typeof Promise=="function"?Promise:void 0,$A=typeof queueMicrotask=="function"?queueMicrotask:typeof Hy<"u"?function(i){return Hy.resolve(null).then(i).catch(JA)}:Vy;function JA(i){setTimeout(function(){throw i})}function or(i){return i==="head"}function Gy(i,r){var o=r,c=0,d=0;do{var g=o.nextSibling;if(i.removeChild(o),g&&g.nodeType===8)if(o=g.data,o==="/$"){if(0<c&&8>c){o=c;var E=i.ownerDocument;if(o&1&&Ml(E.documentElement),o&2&&Ml(E.body),o&4)for(o=E.head,Ml(o),E=o.firstChild;E;){var T=E.nextSibling,F=E.nodeName;E[Ha]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=T}}if(d===0){i.removeChild(g),Dl(r);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:c=o.charCodeAt(0)-48;else c=0;o=g}while(o);Dl(r)}function jd(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":jd(o),Ga(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function tR(i,r,o,c){for(;i.nodeType===1;){var d=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[Ha])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(g=i.getAttribute("rel"),g==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(g!==d.rel||i.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||i.getAttribute("title")!==(d.title==null?null:d.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(g=i.getAttribute("src"),(g!==(d.src==null?null:d.src)||i.getAttribute("type")!==(d.type==null?null:d.type)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&g&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var g=d.name==null?null:""+d.name;if(d.type==="hidden"&&i.getAttribute("name")===g)return i}else return i;if(i=Ci(i.nextSibling),i===null)break}return null}function eR(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=Ci(i.nextSibling),i===null))return null;return i}function Wd(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function nR(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var c=function(){r(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),i._reactRetry=c}}function Ci(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var qd=null;function ky(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function Xy(i,r,o){switch(r=Tu(o),i){case"html":if(i=r.documentElement,!i)throw Error(a(452));return i;case"head":if(i=r.head,!i)throw Error(a(453));return i;case"body":if(i=r.body,!i)throw Error(a(454));return i;default:throw Error(a(451))}}function Ml(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Ga(i)}var xi=new Map,jy=new Set;function Au(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var _a=j.d;j.d={f:iR,r:aR,D:rR,C:sR,L:oR,m:lR,X:uR,S:cR,M:fR};function iR(){var i=_a.f(),r=vu();return i||r}function aR(i){var r=ea(i);r!==null&&r.tag===5&&r.type==="form"?f_(r):_a.r(i)}var Ks=typeof document>"u"?null:document;function Wy(i,r,o){var c=Ks;if(c&&typeof r=="string"&&r){var d=We(r);d='link[rel="'+i+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),jy.has(d)||(jy.add(d),i={rel:i,crossOrigin:o,href:r},c.querySelector(d)===null&&(r=c.createElement("link"),Un(r,"link",i),fn(r),c.head.appendChild(r)))}}function rR(i){_a.D(i),Wy("dns-prefetch",i,null)}function sR(i,r){_a.C(i,r),Wy("preconnect",i,r)}function oR(i,r,o){_a.L(i,r,o);var c=Ks;if(c&&i&&r){var d='link[rel="preload"][as="'+We(r)+'"]';r==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+We(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+We(o.imageSizes)+'"]')):d+='[href="'+We(i)+'"]';var g=d;switch(r){case"style":g=Zs(i);break;case"script":g=Qs(i)}xi.has(g)||(i=m({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),xi.set(g,i),c.querySelector(d)!==null||r==="style"&&c.querySelector(El(g))||r==="script"&&c.querySelector(bl(g))||(r=c.createElement("link"),Un(r,"link",i),fn(r),c.head.appendChild(r)))}}function lR(i,r){_a.m(i,r);var o=Ks;if(o&&i){var c=r&&typeof r.as=="string"?r.as:"script",d='link[rel="modulepreload"][as="'+We(c)+'"][href="'+We(i)+'"]',g=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Qs(i)}if(!xi.has(g)&&(i=m({rel:"modulepreload",href:i},r),xi.set(g,i),o.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(bl(g)))return}c=o.createElement("link"),Un(c,"link",i),fn(c),o.head.appendChild(c)}}}function cR(i,r,o){_a.S(i,r,o);var c=Ks;if(c&&i){var d=ka(c).hoistableStyles,g=Zs(i);r=r||"default";var E=d.get(g);if(!E){var T={loading:0,preload:null};if(E=c.querySelector(El(g)))T.loading=5;else{i=m({rel:"stylesheet",href:i,"data-precedence":r},o),(o=xi.get(g))&&Yd(i,o);var F=E=c.createElement("link");fn(F),Un(F,"link",i),F._p=new Promise(function(J,ft){F.onload=J,F.onerror=ft}),F.addEventListener("load",function(){T.loading|=1}),F.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ru(E,r,c)}E={type:"stylesheet",instance:E,count:1,state:T},d.set(g,E)}}}function uR(i,r){_a.X(i,r);var o=Ks;if(o&&i){var c=ka(o).hoistableScripts,d=Qs(i),g=c.get(d);g||(g=o.querySelector(bl(d)),g||(i=m({src:i,async:!0},r),(r=xi.get(d))&&Kd(i,r),g=o.createElement("script"),fn(g),Un(g,"link",i),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(d,g))}}function fR(i,r){_a.M(i,r);var o=Ks;if(o&&i){var c=ka(o).hoistableScripts,d=Qs(i),g=c.get(d);g||(g=o.querySelector(bl(d)),g||(i=m({src:i,async:!0,type:"module"},r),(r=xi.get(d))&&Kd(i,r),g=o.createElement("script"),fn(g),Un(g,"link",i),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(d,g))}}function qy(i,r,o,c){var d=(d=St.current)?Au(d):null;if(!d)throw Error(a(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Zs(o.href),o=ka(d).hoistableStyles,c=o.get(r),c||(c={type:"style",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Zs(o.href);var g=ka(d).hoistableStyles,E=g.get(i);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(i,E),(g=d.querySelector(El(i)))&&!g._p&&(E.instance=g,E.state.loading=5),xi.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},xi.set(i,o),g||hR(d,i,o,E.state))),r&&c===null)throw Error(a(528,""));return E}if(r&&c!==null)throw Error(a(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Qs(o),o=ka(d).hoistableScripts,c=o.get(r),c||(c={type:"script",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,i))}}function Zs(i){return'href="'+We(i)+'"'}function El(i){return'link[rel="stylesheet"]['+i+"]"}function Yy(i){return m({},i,{"data-precedence":i.precedence,precedence:null})}function hR(i,r,o,c){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=i.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),Un(r,"link",o),fn(r),i.head.appendChild(r))}function Qs(i){return'[src="'+We(i)+'"]'}function bl(i){return"script[async]"+i}function Ky(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var c=i.querySelector('style[data-href~="'+We(o.href)+'"]');if(c)return r.instance=c,fn(c),c;var d=m({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),fn(c),Un(c,"style",d),Ru(c,o.precedence,i),r.instance=c;case"stylesheet":d=Zs(o.href);var g=i.querySelector(El(d));if(g)return r.state.loading|=4,r.instance=g,fn(g),g;c=Yy(o),(d=xi.get(d))&&Yd(c,d),g=(i.ownerDocument||i).createElement("link"),fn(g);var E=g;return E._p=new Promise(function(T,F){E.onload=T,E.onerror=F}),Un(g,"link",c),r.state.loading|=4,Ru(g,o.precedence,i),r.instance=g;case"script":return g=Qs(o.src),(d=i.querySelector(bl(g)))?(r.instance=d,fn(d),d):(c=o,(d=xi.get(g))&&(c=m({},o),Kd(c,d)),i=i.ownerDocument||i,d=i.createElement("script"),fn(d),Un(d,"link",c),i.head.appendChild(d),r.instance=d);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,Ru(c,o.precedence,i));return r.instance}function Ru(i,r,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,g=d,E=0;E<c.length;E++){var T=c[E];if(T.dataset.precedence===r)g=T;else if(g!==d)break}g?g.parentNode.insertBefore(i,g.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Yd(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Kd(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var Cu=null;function Zy(i,r,o){if(Cu===null){var c=new Map,d=Cu=new Map;d.set(o,c)}else d=Cu,c=d.get(o),c||(c=new Map,d.set(o,c));if(c.has(i))return c;for(c.set(i,null),o=o.getElementsByTagName(i),d=0;d<o.length;d++){var g=o[d];if(!(g[Ha]||g[mn]||i==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var E=g.getAttribute(r)||"";E=i+E;var T=c.get(E);T?T.push(g):c.set(E,[g])}}return c}function Qy(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function dR(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function $y(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Tl=null;function pR(){}function mR(i,r,o){if(Tl===null)throw Error(a(475));var c=Tl;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var d=Zs(o.href),g=i.querySelector(El(d));if(g){i=g._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=wu.bind(c),i.then(c,c)),r.state.loading|=4,r.instance=g,fn(g);return}g=i.ownerDocument||i,o=Yy(o),(d=xi.get(d))&&Yd(o,d),g=g.createElement("link"),fn(g);var E=g;E._p=new Promise(function(T,F){E.onload=T,E.onerror=F}),Un(g,"link",o),r.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(c.count++,r=wu.bind(c),i.addEventListener("load",r),i.addEventListener("error",r))}}function gR(){if(Tl===null)throw Error(a(475));var i=Tl;return i.stylesheets&&i.count===0&&Zd(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&Zd(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function wu(){if(this.count--,this.count===0){if(this.stylesheets)Zd(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Du=null;function Zd(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Du=new Map,r.forEach(vR,i),Du=null,wu.call(i))}function vR(i,r){if(!(r.state.loading&4)){var o=Du.get(i);if(o)var c=o.get(null);else{o=new Map,Du.set(i,o);for(var d=i.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<d.length;g++){var E=d[g];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),c=E)}c&&o.set(null,c)}d=r.instance,E=d.getAttribute("data-precedence"),g=o.get(E)||c,g===c&&o.set(null,d),o.set(E,d),this.count++,c=wu.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),g?g.parentNode.insertBefore(d,g.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(d,i.firstChild)),r.state.loading|=4}}var Al={$$typeof:R,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function _R(i,r,o,c,d,g,E,T){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ut(0),this.hiddenUpdates=ut(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=g,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Jy(i,r,o,c,d,g,E,T,F,J,ft,_t){return i=new _R(i,r,o,E,T,F,J,_t),r=1,g===!0&&(r|=24),g=ri(3,null,null,r),i.current=g,g.stateNode=i,r=Lh(),r.refCount++,i.pooledCache=r,r.refCount++,g.memoizedState={element:c,isDehydrated:o,cache:r},Oh(g),i}function tx(i){return i?(i=Cs,i):Cs}function ex(i,r,o,c,d,g){d=tx(d),c.context===null?c.context=d:c.pendingContext=d,c=Ya(r),c.payload={element:o},g=g===void 0?null:g,g!==null&&(c.callback=g),o=Ka(i,c,r),o!==null&&(ui(o,i,r),nl(o,i,r))}function nx(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Qd(i,r){nx(i,r),(i=i.alternate)&&nx(i,r)}function ix(i){if(i.tag===13){var r=Rs(i,67108864);r!==null&&ui(r,i,67108864),Qd(i,67108864)}}var Lu=!0;function yR(i,r,o,c){var d=B.T;B.T=null;var g=j.p;try{j.p=2,$d(i,r,o,c)}finally{j.p=g,B.T=d}}function xR(i,r,o,c){var d=B.T;B.T=null;var g=j.p;try{j.p=8,$d(i,r,o,c)}finally{j.p=g,B.T=d}}function $d(i,r,o,c){if(Lu){var d=Jd(c);if(d===null)zd(i,r,c,Uu,o),rx(i,c);else if(MR(d,i,r,o,c))c.stopPropagation();else if(rx(i,c),r&4&&-1<SR.indexOf(i)){for(;d!==null;){var g=ea(d);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var E=Ft(g.pendingLanes);if(E!==0){var T=g;for(T.pendingLanes|=2,T.entangledLanes|=2;E;){var F=1<<31-Dt(E);T.entanglements[1]|=F,E&=~F}ki(g),(Le&6)===0&&(mu=re()+500,yl(0))}}break;case 13:T=Rs(g,2),T!==null&&ui(T,g,2),vu(),Qd(g,2)}if(g=Jd(c),g===null&&zd(i,r,c,Uu,o),g===d)break;d=g}d!==null&&c.stopPropagation()}else zd(i,r,c,null,o)}}function Jd(i){return i=ah(i),tp(i)}var Uu=null;function tp(i){if(Uu=null,i=ta(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=u(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return Uu=i,null}function ax(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qt()){case Ne:return 2;case Xt:return 8;case O:case A:return 32;case nt:return 268435456;default:return 32}default:return 32}}var ep=!1,lr=null,cr=null,ur=null,Rl=new Map,Cl=new Map,fr=[],SR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rx(i,r){switch(i){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Rl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cl.delete(r.pointerId)}}function wl(i,r,o,c,d,g){return i===null||i.nativeEvent!==g?(i={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},r!==null&&(r=ea(r),r!==null&&ix(r)),i):(i.eventSystemFlags|=c,r=i.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),i)}function MR(i,r,o,c,d){switch(r){case"focusin":return lr=wl(lr,i,r,o,c,d),!0;case"dragenter":return cr=wl(cr,i,r,o,c,d),!0;case"mouseover":return ur=wl(ur,i,r,o,c,d),!0;case"pointerover":var g=d.pointerId;return Rl.set(g,wl(Rl.get(g)||null,i,r,o,c,d)),!0;case"gotpointercapture":return g=d.pointerId,Cl.set(g,wl(Cl.get(g)||null,i,r,o,c,d)),!0}return!1}function sx(i){var r=ta(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=u(o),r!==null){i.blockedOn=r,ii(i.priority,function(){if(o.tag===13){var c=ci();c=je(c);var d=Rs(o,c);d!==null&&ui(d,o,c),Qd(o,c)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Pu(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Jd(i.nativeEvent);if(o===null){o=i.nativeEvent;var c=new o.constructor(o.type,o);ih=c,o.target.dispatchEvent(c),ih=null}else return r=ea(o),r!==null&&ix(r),i.blockedOn=o,!1;r.shift()}return!0}function ox(i,r,o){Pu(i)&&o.delete(r)}function ER(){ep=!1,lr!==null&&Pu(lr)&&(lr=null),cr!==null&&Pu(cr)&&(cr=null),ur!==null&&Pu(ur)&&(ur=null),Rl.forEach(ox),Cl.forEach(ox)}function Nu(i,r){i.blockedOn===r&&(i.blockedOn=null,ep||(ep=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ER)))}var Ou=null;function lx(i){Ou!==i&&(Ou=i,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Ou===i&&(Ou=null);for(var r=0;r<i.length;r+=3){var o=i[r],c=i[r+1],d=i[r+2];if(typeof c!="function"){if(tp(c||o)===null)continue;break}var g=ea(o);g!==null&&(i.splice(r,3),r-=3,td(g,{pending:!0,data:d,method:o.method,action:c},c,d))}}))}function Dl(i){function r(F){return Nu(F,i)}lr!==null&&Nu(lr,i),cr!==null&&Nu(cr,i),ur!==null&&Nu(ur,i),Rl.forEach(r),Cl.forEach(r);for(var o=0;o<fr.length;o++){var c=fr[o];c.blockedOn===i&&(c.blockedOn=null)}for(;0<fr.length&&(o=fr[0],o.blockedOn===null);)sx(o),o.blockedOn===null&&fr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var d=o[c],g=o[c+1],E=d[Cn]||null;if(typeof g=="function")E||lx(o);else if(E){var T=null;if(g&&g.hasAttribute("formAction")){if(d=g,E=g[Cn]||null)T=E.formAction;else if(tp(d)!==null)continue}else T=E.action;typeof T=="function"?o[c+1]=T:(o.splice(c,3),c-=3),lx(o)}}}function np(i){this._internalRoot=i}Iu.prototype.render=np.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(a(409));var o=r.current,c=ci();ex(o,c,i,r,null,null)},Iu.prototype.unmount=np.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;ex(i.current,2,null,i,null,null),vu(),r[qn]=null}};function Iu(i){this._internalRoot=i}Iu.prototype.unstable_scheduleHydration=function(i){if(i){var r=Ae();i={blockedOn:null,target:i,priority:r};for(var o=0;o<fr.length&&r!==0&&r<fr[o].priority;o++);fr.splice(o,0,i),o===0&&sx(i)}};var cx=t.version;if(cx!=="19.1.0")throw Error(a(527,cx,"19.1.0"));j.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(a(188)):(i=Object.keys(i).join(","),Error(a(268,i)));return i=h(r),i=i!==null?p(i):null,i=i===null?null:i.stateNode,i};var bR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fu.isDisabled&&Fu.supportsFiber)try{ht=Fu.inject(bR),zt=Fu}catch{}}return Ul.createRoot=function(i,r){if(!s(i))throw Error(a(299));var o=!1,c="",d=T_,g=A_,E=R_,T=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(g=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=Jy(i,1,!1,null,null,o,c,d,g,E,T,null),i[qn]=r.current,Bd(i),new np(r)},Ul.hydrateRoot=function(i,r,o){if(!s(i))throw Error(a(299));var c=!1,d="",g=T_,E=A_,T=R_,F=null,J=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(T=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(F=o.unstable_transitionCallbacks),o.formState!==void 0&&(J=o.formState)),r=Jy(i,1,!0,r,o??null,c,d,g,E,T,F,J),r.context=tx(null),o=r.current,c=ci(),c=je(c),d=Ya(c),d.callback=null,Ka(o,d,c),o=c,r.current.lanes=o,vt(r,o),ki(r),i[qn]=r.current,Bd(i),new Iu(r)},Ul.version="19.1.0",Ul}var yx;function NR(){if(yx)return rp.exports;yx=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),rp.exports=PR(),rp.exports}var OR=NR();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ig="175",IR=0,xx=1,FR=2,vE=1,BR=2,ba=3,br=0,ti=1,Ta=2,Mr=0,So=1,Sx=2,Mx=3,Ex=4,zR=5,os=100,VR=101,HR=102,GR=103,kR=104,XR=200,jR=201,WR=202,qR=203,lm=204,cm=205,YR=206,KR=207,ZR=208,QR=209,$R=210,JR=211,tC=212,eC=213,nC=214,um=0,fm=1,hm=2,bo=3,dm=4,pm=5,mm=6,gm=7,_E=0,iC=1,aC=2,Er=0,rC=1,sC=2,oC=3,lC=4,cC=5,uC=6,fC=7,yE=300,To=301,Ao=302,vm=303,_m=304,Hf=306,ym=1e3,cs=1001,xm=1002,Ii=1003,hC=1004,Bu=1005,Wi=1006,cp=1007,us=1008,La=1009,xE=1010,SE=1011,$l=1012,Fg=1013,gs=1014,Aa=1015,dc=1016,Bg=1017,zg=1018,Jl=1020,ME=35902,EE=1021,bE=1022,Oi=1023,TE=1024,AE=1025,tc=1026,ec=1027,RE=1028,Vg=1029,CE=1030,Hg=1031,Gg=1033,mf=33776,gf=33777,vf=33778,_f=33779,Sm=35840,Mm=35841,Em=35842,bm=35843,Tm=36196,Am=37492,Rm=37496,Cm=37808,wm=37809,Dm=37810,Lm=37811,Um=37812,Pm=37813,Nm=37814,Om=37815,Im=37816,Fm=37817,Bm=37818,zm=37819,Vm=37820,Hm=37821,yf=36492,Gm=36494,km=36495,wE=36283,Xm=36284,jm=36285,Wm=36286,dC=3200,pC=3201,mC=0,gC=1,Sr="",bi="srgb",Ro="srgb-linear",wf="linear",ze="srgb",$s=7680,bx=519,vC=512,_C=513,yC=514,DE=515,xC=516,SC=517,MC=518,EC=519,Tx=35044,Ax="300 es",Ra=2e3,Df=2001;class Uo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,t);t.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],up=Math.PI/180,qm=180/Math.PI;function pc(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Bn[e&255]+Bn[e>>8&255]+Bn[e>>16&255]+Bn[e>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[n&63|128]+Bn[n>>8&255]+"-"+Bn[n>>16&255]+Bn[n>>24&255]+Bn[a&255]+Bn[a>>8&255]+Bn[a>>16&255]+Bn[a>>24&255]).toLowerCase()}function Ee(e,t,n){return Math.max(t,Math.min(n,e))}function bC(e,t){return(e%t+t)%t}function fp(e,t,n){return(1-n)*e+n*t}function Pl(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function $n(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class ke{constructor(t=0,n=0){ke.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ee(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ee(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),l=this.x-t.x,u=this.y-t.y;return this.x=l*a-u*s+t.x,this.y=l*s+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,n,a,s,l,u,f,h,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,u,f,h,p)}set(t,n,a,s,l,u,f,h,p){const m=this.elements;return m[0]=t,m[1]=s,m[2]=f,m[3]=n,m[4]=l,m[5]=h,m[6]=a,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,u=a[0],f=a[3],h=a[6],p=a[1],m=a[4],v=a[7],_=a[2],x=a[5],M=a[8],b=s[0],S=s[3],y=s[6],L=s[1],R=s[4],w=s[7],N=s[2],z=s[5],I=s[8];return l[0]=u*b+f*L+h*N,l[3]=u*S+f*R+h*z,l[6]=u*y+f*w+h*I,l[1]=p*b+m*L+v*N,l[4]=p*S+m*R+v*z,l[7]=p*y+m*w+v*I,l[2]=_*b+x*L+M*N,l[5]=_*S+x*R+M*z,l[8]=_*y+x*w+M*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],u=t[4],f=t[5],h=t[6],p=t[7],m=t[8];return n*u*m-n*f*p-a*l*m+a*f*h+s*l*p-s*u*h}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],u=t[4],f=t[5],h=t[6],p=t[7],m=t[8],v=m*u-f*p,_=f*h-m*l,x=p*l-u*h,M=n*v+a*_+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return t[0]=v*b,t[1]=(s*p-m*a)*b,t[2]=(f*a-s*u)*b,t[3]=_*b,t[4]=(m*n-s*h)*b,t[5]=(s*l-f*n)*b,t[6]=x*b,t[7]=(a*h-p*n)*b,t[8]=(u*n-a*l)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(a*h,a*p,-a*(h*u+p*f)+u+t,-s*p,s*h,-s*(-p*u+h*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(hp.makeScale(t,n)),this}rotate(t){return this.premultiply(hp.makeRotation(-t)),this}translate(t,n){return this.premultiply(hp.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hp=new le;function LE(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Lf(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function TC(){const e=Lf("canvas");return e.style.display="block",e}const Rx={};function xf(e){e in Rx||(Rx[e]=!0,console.warn(e))}function AC(e,t,n){return new Promise(function(a,s){function l(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}function RC(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function CC(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Cx=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wx=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wC(){const e={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===ze&&(s.r=wa(s.r),s.g=wa(s.g),s.b=wa(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===ze&&(s.r=Mo(s.r),s.g=Mo(s.g),s.b=Mo(s.b))),s},fromWorkingColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},toWorkingColorSpace:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sr?wf:this.spaces[s].transfer},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return e.define({[Ro]:{primaries:t,whitePoint:a,transfer:wf,toXYZ:Cx,fromXYZ:wx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:bi},outputColorSpaceConfig:{drawingBufferColorSpace:bi}},[bi]:{primaries:t,whitePoint:a,transfer:ze,toXYZ:Cx,fromXYZ:wx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:bi}}}),e}const we=wC();function wa(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Mo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Js;class DC{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Js===void 0&&(Js=Lf("canvas")),Js.width=t.width,Js.height=t.height;const s=Js.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),a=Js}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Lf("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=wa(l[u]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(wa(n[a]/255)*255):n[a]=wa(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let LC=0;class kg{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LC++}),this.uuid=pc(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,f=s.length;u<f;u++)s[u].isDataTexture?l.push(dp(s[u].image)):l.push(dp(s[u]))}else l=dp(s);a.url=l}return n||(t.images[this.uuid]=a),a}}function dp(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?DC.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UC=0;class ei extends Uo{constructor(t=ei.DEFAULT_IMAGE,n=ei.DEFAULT_MAPPING,a=cs,s=cs,l=Wi,u=us,f=Oi,h=La,p=ei.DEFAULT_ANISOTROPY,m=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UC++}),this.uuid=pc(),this.name="",this.source=new kg(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yE)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ym:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case xm:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ym:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case xm:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=yE;ei.DEFAULT_ANISOTROPY=1;class ln{constructor(t=0,n=0,a=0,s=1){ln.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*s+u[12]*l,this.y=u[1]*n+u[5]*a+u[9]*s+u[13]*l,this.z=u[2]*n+u[6]*a+u[10]*s+u[14]*l,this.w=u[3]*n+u[7]*a+u[11]*s+u[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,l;const h=t.elements,p=h[0],m=h[4],v=h[8],_=h[1],x=h[5],M=h[9],b=h[2],S=h[6],y=h[10];if(Math.abs(m-_)<.01&&Math.abs(v-b)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+b)<.1&&Math.abs(M+S)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(p+1)/2,w=(x+1)/2,N=(y+1)/2,z=(m+_)/4,I=(v+b)/4,V=(M+S)/4;return R>w&&R>N?R<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(R),s=z/a,l=I/a):w>N?w<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(w),a=z/s,l=V/s):N<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(N),a=I/l,s=V/l),this.set(a,s,l,n),this}let L=Math.sqrt((S-M)*(S-M)+(v-b)*(v-b)+(_-m)*(_-m));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(v-b)/L,this.z=(_-m)/L,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this.w=Ee(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this.w=Ee(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ee(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PC extends Uo{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new ln(0,0,t,n),this.scissorTest=!1,this.viewport=new ln(0,0,t,n);const s={width:t,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const l=new ei(s,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);l.flipY=!1,l.generateMipmaps=a.generateMipmaps,l.internalFormat=a.internalFormat,this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=a;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new kg(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends PC{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class UE extends ei{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class NC extends ei{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mc{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,l,u,f){let h=a[s+0],p=a[s+1],m=a[s+2],v=a[s+3];const _=l[u+0],x=l[u+1],M=l[u+2],b=l[u+3];if(f===0){t[n+0]=h,t[n+1]=p,t[n+2]=m,t[n+3]=v;return}if(f===1){t[n+0]=_,t[n+1]=x,t[n+2]=M,t[n+3]=b;return}if(v!==b||h!==_||p!==x||m!==M){let S=1-f;const y=h*_+p*x+m*M+v*b,L=y>=0?1:-1,R=1-y*y;if(R>Number.EPSILON){const N=Math.sqrt(R),z=Math.atan2(N,y*L);S=Math.sin(S*z)/N,f=Math.sin(f*z)/N}const w=f*L;if(h=h*S+_*w,p=p*S+x*w,m=m*S+M*w,v=v*S+b*w,S===1-f){const N=1/Math.sqrt(h*h+p*p+m*m+v*v);h*=N,p*=N,m*=N,v*=N}}t[n]=h,t[n+1]=p,t[n+2]=m,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,s,l,u){const f=a[s],h=a[s+1],p=a[s+2],m=a[s+3],v=l[u],_=l[u+1],x=l[u+2],M=l[u+3];return t[n]=f*M+m*v+h*x-p*_,t[n+1]=h*M+m*_+p*v-f*x,t[n+2]=p*M+m*x+f*_-h*v,t[n+3]=m*M-f*v-h*_-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,l=t._z,u=t._order,f=Math.cos,h=Math.sin,p=f(a/2),m=f(s/2),v=f(l/2),_=h(a/2),x=h(s/2),M=h(l/2);switch(u){case"XYZ":this._x=_*m*v+p*x*M,this._y=p*x*v-_*m*M,this._z=p*m*M+_*x*v,this._w=p*m*v-_*x*M;break;case"YXZ":this._x=_*m*v+p*x*M,this._y=p*x*v-_*m*M,this._z=p*m*M-_*x*v,this._w=p*m*v+_*x*M;break;case"ZXY":this._x=_*m*v-p*x*M,this._y=p*x*v+_*m*M,this._z=p*m*M+_*x*v,this._w=p*m*v-_*x*M;break;case"ZYX":this._x=_*m*v-p*x*M,this._y=p*x*v+_*m*M,this._z=p*m*M-_*x*v,this._w=p*m*v+_*x*M;break;case"YZX":this._x=_*m*v+p*x*M,this._y=p*x*v+_*m*M,this._z=p*m*M-_*x*v,this._w=p*m*v-_*x*M;break;case"XZY":this._x=_*m*v-p*x*M,this._y=p*x*v-_*m*M,this._z=p*m*M+_*x*v,this._w=p*m*v+_*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],l=n[8],u=n[1],f=n[5],h=n[9],p=n[2],m=n[6],v=n[10],_=a+f+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-h)*x,this._y=(l-p)*x,this._z=(u-s)*x}else if(a>f&&a>v){const x=2*Math.sqrt(1+a-f-v);this._w=(m-h)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(l+p)/x}else if(f>v){const x=2*Math.sqrt(1+f-a-v);this._w=(l-p)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(h+m)/x}else{const x=2*Math.sqrt(1+v-a-f);this._w=(u-s)/x,this._x=(l+p)/x,this._y=(h+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,l=t._z,u=t._w,f=n._x,h=n._y,p=n._z,m=n._w;return this._x=a*m+u*f+s*p-l*h,this._y=s*m+u*h+l*f-a*p,this._z=l*m+u*p+a*h-s*f,this._w=u*m-a*f-s*h-l*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,s=this._y,l=this._z,u=this._w;let f=u*t._w+a*t._x+s*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=u,this._x=a,this._y=s,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const x=1-n;return this._w=x*u+n*this._w,this._x=x*a+n*this._x,this._y=x*s+n*this._y,this._z=x*l+n*this._z,this.normalize(),this}const p=Math.sqrt(h),m=Math.atan2(p,f),v=Math.sin((1-n)*m)/p,_=Math.sin(n*m)/p;return this._w=u*v+this._w*_,this._x=a*v+this._x*_,this._y=s*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(t=0,n=0,a=0){ot.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Dx.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Dx.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*s,this.y=l[1]*n+l[4]*a+l[7]*s,this.z=l[2]*n+l[5]*a+l[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=t.elements,u=1/(l[3]*n+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*s+l[12])*u,this.y=(l[1]*n+l[5]*a+l[9]*s+l[13])*u,this.z=(l[2]*n+l[6]*a+l[10]*s+l[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,l=t.x,u=t.y,f=t.z,h=t.w,p=2*(u*s-f*a),m=2*(f*n-l*s),v=2*(l*a-u*n);return this.x=n+h*p+u*v-f*m,this.y=a+h*m+f*p-l*v,this.z=s+h*v+l*m-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*s,this.y=l[1]*n+l[5]*a+l[9]*s,this.z=l[2]*n+l[6]*a+l[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ee(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,l=t.z,u=n.x,f=n.y,h=n.z;return this.x=s*h-l*f,this.y=l*u-a*h,this.z=a*f-s*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return pp.copy(this).projectOnVector(t),this.sub(pp)}reflect(t){return this.sub(pp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ee(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pp=new ot,Dx=new mc;class gc{constructor(t=new ot(1/0,1/0,1/0),n=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(wi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(wi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=wi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,wi):wi.fromBufferAttribute(l,u),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),zu.copy(a.boundingBox)),zu.applyMatrix4(t.matrixWorld),this.union(zu)}const s=t.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Nl),Vu.subVectors(this.max,Nl),to.subVectors(t.a,Nl),eo.subVectors(t.b,Nl),no.subVectors(t.c,Nl),dr.subVectors(eo,to),pr.subVectors(no,eo),Qr.subVectors(to,no);let n=[0,-dr.z,dr.y,0,-pr.z,pr.y,0,-Qr.z,Qr.y,dr.z,0,-dr.x,pr.z,0,-pr.x,Qr.z,0,-Qr.x,-dr.y,dr.x,0,-pr.y,pr.x,0,-Qr.y,Qr.x,0];return!mp(n,to,eo,no,Vu)||(n=[1,0,0,0,1,0,0,0,1],!mp(n,to,eo,no,Vu))?!1:(Hu.crossVectors(dr,pr),n=[Hu.x,Hu.y,Hu.z],mp(n,to,eo,no,Vu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ya),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ya=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],wi=new ot,zu=new gc,to=new ot,eo=new ot,no=new ot,dr=new ot,pr=new ot,Qr=new ot,Nl=new ot,Vu=new ot,Hu=new ot,$r=new ot;function mp(e,t,n,a,s){for(let l=0,u=e.length-3;l<=u;l+=3){$r.fromArray(e,l);const f=s.x*Math.abs($r.x)+s.y*Math.abs($r.y)+s.z*Math.abs($r.z),h=t.dot($r),p=n.dot($r),m=a.dot($r);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>f)return!1}return!0}const OC=new gc,Ol=new ot,gp=new ot;class Gf{constructor(t=new ot,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):OC.setFromPoints(t).getCenter(a);let s=0;for(let l=0,u=t.length;l<u;l++)s=Math.max(s,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ol.subVectors(t,this.center);const n=Ol.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(Ol,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ol.copy(t.center).add(gp)),this.expandByPoint(Ol.copy(t.center).sub(gp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xa=new ot,vp=new ot,Gu=new ot,mr=new ot,_p=new ot,ku=new ot,yp=new ot;class PE{constructor(t=new ot,n=new ot(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=xa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(xa.copy(this.origin).addScaledVector(this.direction,n),xa.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){vp.copy(t).add(n).multiplyScalar(.5),Gu.copy(n).sub(t).normalize(),mr.copy(this.origin).sub(vp);const l=t.distanceTo(n)*.5,u=-this.direction.dot(Gu),f=mr.dot(this.direction),h=-mr.dot(Gu),p=mr.lengthSq(),m=Math.abs(1-u*u);let v,_,x,M;if(m>0)if(v=u*h-f,_=u*f-h,M=l*m,v>=0)if(_>=-M)if(_<=M){const b=1/m;v*=b,_*=b,x=v*(v+u*_+2*f)+_*(u*v+_+2*h)+p}else _=l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*h)+p;else _=-l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*h)+p;else _<=-M?(v=Math.max(0,-(-u*l+f)),_=v>0?-l:Math.min(Math.max(-l,-h),l),x=-v*v+_*(_+2*h)+p):_<=M?(v=0,_=Math.min(Math.max(-l,-h),l),x=_*(_+2*h)+p):(v=Math.max(0,-(u*l+f)),_=v>0?l:Math.min(Math.max(-l,-h),l),x=-v*v+_*(_+2*h)+p);else _=u>0?-l:l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*h)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(vp).addScaledVector(Gu,_),x}intersectSphere(t,n){xa.subVectors(t.center,this.origin);const a=xa.dot(this.direction),s=xa.dot(xa)-a*a,l=t.radius*t.radius;if(s>l)return null;const u=Math.sqrt(l-s),f=a-u,h=a+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,l,u,f,h;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(a=(t.min.x-_.x)*p,s=(t.max.x-_.x)*p):(a=(t.max.x-_.x)*p,s=(t.min.x-_.x)*p),m>=0?(l=(t.min.y-_.y)*m,u=(t.max.y-_.y)*m):(l=(t.max.y-_.y)*m,u=(t.min.y-_.y)*m),a>u||l>s||((l>a||isNaN(a))&&(a=l),(u<s||isNaN(s))&&(s=u),v>=0?(f=(t.min.z-_.z)*v,h=(t.max.z-_.z)*v):(f=(t.max.z-_.z)*v,h=(t.min.z-_.z)*v),a>h||f>s)||((f>a||a!==a)&&(a=f),(h<s||s!==s)&&(s=h),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,xa)!==null}intersectTriangle(t,n,a,s,l){_p.subVectors(n,t),ku.subVectors(a,t),yp.crossVectors(_p,ku);let u=this.direction.dot(yp),f;if(u>0){if(s)return null;f=1}else if(u<0)f=-1,u=-u;else return null;mr.subVectors(this.origin,t);const h=f*this.direction.dot(ku.crossVectors(mr,ku));if(h<0)return null;const p=f*this.direction.dot(_p.cross(mr));if(p<0||h+p>u)return null;const m=-f*mr.dot(yp);return m<0?null:this.at(m/u,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(t,n,a,s,l,u,f,h,p,m,v,_,x,M,b,S){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,u,f,h,p,m,v,_,x,M,b,S)}set(t,n,a,s,l,u,f,h,p,m,v,_,x,M,b,S){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=s,y[1]=l,y[5]=u,y[9]=f,y[13]=h,y[2]=p,y[6]=m,y[10]=v,y[14]=_,y[3]=x,y[7]=M,y[11]=b,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,s=1/io.setFromMatrixColumn(t,0).length(),l=1/io.setFromMatrixColumn(t,1).length(),u=1/io.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,l=t.z,u=Math.cos(a),f=Math.sin(a),h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),v=Math.sin(l);if(t.order==="XYZ"){const _=u*m,x=u*v,M=f*m,b=f*v;n[0]=h*m,n[4]=-h*v,n[8]=p,n[1]=x+M*p,n[5]=_-b*p,n[9]=-f*h,n[2]=b-_*p,n[6]=M+x*p,n[10]=u*h}else if(t.order==="YXZ"){const _=h*m,x=h*v,M=p*m,b=p*v;n[0]=_+b*f,n[4]=M*f-x,n[8]=u*p,n[1]=u*v,n[5]=u*m,n[9]=-f,n[2]=x*f-M,n[6]=b+_*f,n[10]=u*h}else if(t.order==="ZXY"){const _=h*m,x=h*v,M=p*m,b=p*v;n[0]=_-b*f,n[4]=-u*v,n[8]=M+x*f,n[1]=x+M*f,n[5]=u*m,n[9]=b-_*f,n[2]=-u*p,n[6]=f,n[10]=u*h}else if(t.order==="ZYX"){const _=u*m,x=u*v,M=f*m,b=f*v;n[0]=h*m,n[4]=M*p-x,n[8]=_*p+b,n[1]=h*v,n[5]=b*p+_,n[9]=x*p-M,n[2]=-p,n[6]=f*h,n[10]=u*h}else if(t.order==="YZX"){const _=u*h,x=u*p,M=f*h,b=f*p;n[0]=h*m,n[4]=b-_*v,n[8]=M*v+x,n[1]=v,n[5]=u*m,n[9]=-f*m,n[2]=-p*m,n[6]=x*v+M,n[10]=_-b*v}else if(t.order==="XZY"){const _=u*h,x=u*p,M=f*h,b=f*p;n[0]=h*m,n[4]=-v,n[8]=p*m,n[1]=_*v+b,n[5]=u*m,n[9]=x*v-M,n[2]=M*v-x,n[6]=f*m,n[10]=b*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(IC,t,FC)}lookAt(t,n,a){const s=this.elements;return fi.subVectors(t,n),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),gr.crossVectors(a,fi),gr.lengthSq()===0&&(Math.abs(a.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),gr.crossVectors(a,fi)),gr.normalize(),Xu.crossVectors(fi,gr),s[0]=gr.x,s[4]=Xu.x,s[8]=fi.x,s[1]=gr.y,s[5]=Xu.y,s[9]=fi.y,s[2]=gr.z,s[6]=Xu.z,s[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,u=a[0],f=a[4],h=a[8],p=a[12],m=a[1],v=a[5],_=a[9],x=a[13],M=a[2],b=a[6],S=a[10],y=a[14],L=a[3],R=a[7],w=a[11],N=a[15],z=s[0],I=s[4],V=s[8],U=s[12],D=s[1],G=s[5],ct=s[9],lt=s[13],mt=s[2],dt=s[6],B=s[10],j=s[14],W=s[3],Mt=s[7],P=s[11],tt=s[15];return l[0]=u*z+f*D+h*mt+p*W,l[4]=u*I+f*G+h*dt+p*Mt,l[8]=u*V+f*ct+h*B+p*P,l[12]=u*U+f*lt+h*j+p*tt,l[1]=m*z+v*D+_*mt+x*W,l[5]=m*I+v*G+_*dt+x*Mt,l[9]=m*V+v*ct+_*B+x*P,l[13]=m*U+v*lt+_*j+x*tt,l[2]=M*z+b*D+S*mt+y*W,l[6]=M*I+b*G+S*dt+y*Mt,l[10]=M*V+b*ct+S*B+y*P,l[14]=M*U+b*lt+S*j+y*tt,l[3]=L*z+R*D+w*mt+N*W,l[7]=L*I+R*G+w*dt+N*Mt,l[11]=L*V+R*ct+w*B+N*P,l[15]=L*U+R*lt+w*j+N*tt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],l=t[12],u=t[1],f=t[5],h=t[9],p=t[13],m=t[2],v=t[6],_=t[10],x=t[14],M=t[3],b=t[7],S=t[11],y=t[15];return M*(+l*h*v-s*p*v-l*f*_+a*p*_+s*f*x-a*h*x)+b*(+n*h*x-n*p*_+l*u*_-s*u*x+s*p*m-l*h*m)+S*(+n*p*v-n*f*x-l*u*v+a*u*x+l*f*m-a*p*m)+y*(-s*f*m-n*h*v+n*f*_+s*u*v-a*u*_+a*h*m)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],u=t[4],f=t[5],h=t[6],p=t[7],m=t[8],v=t[9],_=t[10],x=t[11],M=t[12],b=t[13],S=t[14],y=t[15],L=v*S*p-b*_*p+b*h*x-f*S*x-v*h*y+f*_*y,R=M*_*p-m*S*p-M*h*x+u*S*x+m*h*y-u*_*y,w=m*b*p-M*v*p+M*f*x-u*b*x-m*f*y+u*v*y,N=M*v*h-m*b*h-M*f*_+u*b*_+m*f*S-u*v*S,z=n*L+a*R+s*w+l*N;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/z;return t[0]=L*I,t[1]=(b*_*l-v*S*l-b*s*x+a*S*x+v*s*y-a*_*y)*I,t[2]=(f*S*l-b*h*l+b*s*p-a*S*p-f*s*y+a*h*y)*I,t[3]=(v*h*l-f*_*l-v*s*p+a*_*p+f*s*x-a*h*x)*I,t[4]=R*I,t[5]=(m*S*l-M*_*l+M*s*x-n*S*x-m*s*y+n*_*y)*I,t[6]=(M*h*l-u*S*l-M*s*p+n*S*p+u*s*y-n*h*y)*I,t[7]=(u*_*l-m*h*l+m*s*p-n*_*p-u*s*x+n*h*x)*I,t[8]=w*I,t[9]=(M*v*l-m*b*l-M*a*x+n*b*x+m*a*y-n*v*y)*I,t[10]=(u*b*l-M*f*l+M*a*p-n*b*p-u*a*y+n*f*y)*I,t[11]=(m*f*l-u*v*l-m*a*p+n*v*p+u*a*x-n*f*x)*I,t[12]=N*I,t[13]=(m*b*s-M*v*s+M*a*_-n*b*_-m*a*S+n*v*S)*I,t[14]=(M*f*s-u*b*s-M*a*h+n*b*h+u*a*S-n*f*S)*I,t[15]=(u*v*s-m*f*s+m*a*h-n*v*h-u*a*_+n*f*_)*I,this}scale(t){const n=this.elements,a=t.x,s=t.y,l=t.z;return n[0]*=a,n[4]*=s,n[8]*=l,n[1]*=a,n[5]*=s,n[9]*=l,n[2]*=a,n[6]*=s,n[10]*=l,n[3]*=a,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),l=1-a,u=t.x,f=t.y,h=t.z,p=l*u,m=l*f;return this.set(p*u+a,p*f-s*h,p*h+s*f,0,p*f+s*h,m*f+a,m*h-s*u,0,p*h-s*f,m*h+s*u,l*h*h+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,l,u){return this.set(1,a,l,0,t,1,u,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,l=n._x,u=n._y,f=n._z,h=n._w,p=l+l,m=u+u,v=f+f,_=l*p,x=l*m,M=l*v,b=u*m,S=u*v,y=f*v,L=h*p,R=h*m,w=h*v,N=a.x,z=a.y,I=a.z;return s[0]=(1-(b+y))*N,s[1]=(x+w)*N,s[2]=(M-R)*N,s[3]=0,s[4]=(x-w)*z,s[5]=(1-(_+y))*z,s[6]=(S+L)*z,s[7]=0,s[8]=(M+R)*I,s[9]=(S-L)*I,s[10]=(1-(_+b))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;let l=io.set(s[0],s[1],s[2]).length();const u=io.set(s[4],s[5],s[6]).length(),f=io.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),t.x=s[12],t.y=s[13],t.z=s[14],Di.copy(this);const p=1/l,m=1/u,v=1/f;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=m,Di.elements[5]*=m,Di.elements[6]*=m,Di.elements[8]*=v,Di.elements[9]*=v,Di.elements[10]*=v,n.setFromRotationMatrix(Di),a.x=l,a.y=u,a.z=f,this}makePerspective(t,n,a,s,l,u,f=Ra){const h=this.elements,p=2*l/(n-t),m=2*l/(a-s),v=(n+t)/(n-t),_=(a+s)/(a-s);let x,M;if(f===Ra)x=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(f===Df)x=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=m,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,n,a,s,l,u,f=Ra){const h=this.elements,p=1/(n-t),m=1/(a-s),v=1/(u-l),_=(n+t)*p,x=(a+s)*m;let M,b;if(f===Ra)M=(u+l)*v,b=-2*v;else if(f===Df)M=l*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=b,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const io=new ot,Di=new cn,IC=new ot(0,0,0),FC=new ot(1,1,1),gr=new ot,Xu=new ot,fi=new ot,Lx=new cn,Ux=new mc;class Ua{constructor(t=0,n=0,a=0,s=Ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,l=s[0],u=s[4],f=s[8],h=s[1],p=s[5],m=s[9],v=s[2],_=s[6],x=s[10];switch(n){case"XYZ":this._y=Math.asin(Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Lx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lx,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Ux.setFromEuler(this),this.setFromQuaternion(Ux,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ua.DEFAULT_ORDER="XYZ";let NE=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},BC=0;const Px=new ot,ao=new mc,Sa=new cn,ju=new ot,Il=new ot,zC=new ot,VC=new mc,Nx=new ot(1,0,0),Ox=new ot(0,1,0),Ix=new ot(0,0,1),Fx={type:"added"},HC={type:"removed"},ro={type:"childadded",child:null},xp={type:"childremoved",child:null};class ni extends Uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BC++}),this.uuid=pc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const t=new ot,n=new Ua,a=new mc,s=new ot(1,1,1);function l(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new cn},normalMatrix:{value:new le}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new NE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ao.setFromAxisAngle(t,n),this.quaternion.multiply(ao),this}rotateOnWorldAxis(t,n){return ao.setFromAxisAngle(t,n),this.quaternion.premultiply(ao),this}rotateX(t){return this.rotateOnAxis(Nx,t)}rotateY(t){return this.rotateOnAxis(Ox,t)}rotateZ(t){return this.rotateOnAxis(Ix,t)}translateOnAxis(t,n){return Px.copy(t).applyQuaternion(this.quaternion),this.position.add(Px.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Nx,t)}translateY(t){return this.translateOnAxis(Ox,t)}translateZ(t){return this.translateOnAxis(Ix,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?ju.copy(t):ju.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),Il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(Il,ju,this.up):Sa.lookAt(ju,Il,this.up),this.quaternion.setFromRotationMatrix(Sa),s&&(Sa.extractRotation(s.matrixWorld),ao.setFromRotationMatrix(Sa),this.quaternion.premultiply(ao.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fx),ro.child=t,this.dispatchEvent(ro),ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(HC),xp.child=t,this.dispatchEvent(xp),xp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fx),ro.child=t,this.dispatchEvent(ro),ro.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Il,t,zC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Il,VC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const v=h[p];l(t.shapes,v)}else l(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(t.materials,this.material[h]));s.material=f}else s.material=l(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];s.animations.push(l(t.animations,h))}}if(n){const f=u(t.geometries),h=u(t.materials),p=u(t.textures),m=u(t.images),v=u(t.shapes),_=u(t.skeletons),x=u(t.animations),M=u(t.nodes);f.length>0&&(a.geometries=f),h.length>0&&(a.materials=h),p.length>0&&(a.textures=p),m.length>0&&(a.images=m),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),M.length>0&&(a.nodes=M)}return a.object=s,a;function u(f){const h=[];for(const p in f){const m=f[p];delete m.metadata,h.push(m)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}ni.DEFAULT_UP=new ot(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new ot,Ma=new ot,Sp=new ot,Ea=new ot,so=new ot,oo=new ot,Bx=new ot,Mp=new ot,Ep=new ot,bp=new ot,Tp=new ln,Ap=new ln,Rp=new ln;class Ni{constructor(t=new ot,n=new ot,a=new ot){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),Li.subVectors(t,n),s.cross(Li);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(t,n,a,s,l){Li.subVectors(s,n),Ma.subVectors(a,n),Sp.subVectors(t,n);const u=Li.dot(Li),f=Li.dot(Ma),h=Li.dot(Sp),p=Ma.dot(Ma),m=Ma.dot(Sp),v=u*p-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,x=(p*h-f*m)*_,M=(u*m-f*h)*_;return l.set(1-x-M,M,x)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(t,n,a,s,l,u,f,h){return this.getBarycoord(t,n,a,s,Ea)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Ea.x),h.addScaledVector(u,Ea.y),h.addScaledVector(f,Ea.z),h)}static getInterpolatedAttribute(t,n,a,s,l,u){return Tp.setScalar(0),Ap.setScalar(0),Rp.setScalar(0),Tp.fromBufferAttribute(t,n),Ap.fromBufferAttribute(t,a),Rp.fromBufferAttribute(t,s),u.setScalar(0),u.addScaledVector(Tp,l.x),u.addScaledVector(Ap,l.y),u.addScaledVector(Rp,l.z),u}static isFrontFacing(t,n,a,s){return Li.subVectors(a,n),Ma.subVectors(t,n),Li.cross(Ma).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),Ma.subVectors(this.a,this.b),Li.cross(Ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ni.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,s,l){return Ni.getInterpolation(t,this.a,this.b,this.c,n,a,s,l)}containsPoint(t){return Ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,l=this.c;let u,f;so.subVectors(s,a),oo.subVectors(l,a),Mp.subVectors(t,a);const h=so.dot(Mp),p=oo.dot(Mp);if(h<=0&&p<=0)return n.copy(a);Ep.subVectors(t,s);const m=so.dot(Ep),v=oo.dot(Ep);if(m>=0&&v<=m)return n.copy(s);const _=h*v-m*p;if(_<=0&&h>=0&&m<=0)return u=h/(h-m),n.copy(a).addScaledVector(so,u);bp.subVectors(t,l);const x=so.dot(bp),M=oo.dot(bp);if(M>=0&&x<=M)return n.copy(l);const b=x*p-h*M;if(b<=0&&p>=0&&M<=0)return f=p/(p-M),n.copy(a).addScaledVector(oo,f);const S=m*M-x*v;if(S<=0&&v-m>=0&&x-M>=0)return Bx.subVectors(l,s),f=(v-m)/(v-m+(x-M)),n.copy(s).addScaledVector(Bx,f);const y=1/(S+b+_);return u=b*y,f=_*y,n.copy(a).addScaledVector(so,u).addScaledVector(oo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const OE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},Wu={h:0,s:0,l:0};function Cp(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Pe{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=bi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,n),this}setRGB(t,n,a,s=we.workingColorSpace){return this.r=t,this.g=n,this.b=a,we.toWorkingColorSpace(this,s),this}setHSL(t,n,a,s=we.workingColorSpace){if(t=bC(t,1),n=Ee(n,0,1),a=Ee(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,u=2*a-l;this.r=Cp(u,l,t+1/3),this.g=Cp(u,l,t),this.b=Cp(u,l,t-1/3)}return we.toWorkingColorSpace(this,s),this}setStyle(t,n=bi){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const u=s[1],f=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=bi){const a=OE[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wa(t.r),this.g=wa(t.g),this.b=wa(t.b),this}copyLinearToSRGB(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bi){return we.fromWorkingColorSpace(zn.copy(this),t),Math.round(Ee(zn.r*255,0,255))*65536+Math.round(Ee(zn.g*255,0,255))*256+Math.round(Ee(zn.b*255,0,255))}getHexString(t=bi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=we.workingColorSpace){we.fromWorkingColorSpace(zn.copy(this),n);const a=zn.r,s=zn.g,l=zn.b,u=Math.max(a,s,l),f=Math.min(a,s,l);let h,p;const m=(f+u)/2;if(f===u)h=0,p=0;else{const v=u-f;switch(p=m<=.5?v/(u+f):v/(2-u-f),u){case a:h=(s-l)/v+(s<l?6:0);break;case s:h=(l-a)/v+2;break;case l:h=(a-s)/v+4;break}h/=6}return t.h=h,t.s=p,t.l=m,t}getRGB(t,n=we.workingColorSpace){return we.fromWorkingColorSpace(zn.copy(this),n),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=bi){we.fromWorkingColorSpace(zn.copy(this),t);const n=zn.r,a=zn.g,s=zn.b;return t!==bi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(vr),this.setHSL(vr.h+t,vr.s+n,vr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(vr),t.getHSL(Wu);const a=fp(vr.h,Wu.h,n),s=fp(vr.s,Wu.s,n),l=fp(vr.l,Wu.l,n);return this.setHSL(a,s,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*s,this.g=l[1]*n+l[4]*a+l[7]*s,this.b=l[2]*n+l[5]*a+l[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Pe;Pe.NAMES=OE;let GC=0;class vc extends Uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GC++}),this.uuid=pc(),this.name="",this.type="Material",this.blending=So,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lm,this.blendDst=cm,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==So&&(a.blending=this.blending),this.side!==br&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==lm&&(a.blendSrc=this.blendSrc),this.blendDst!==cm&&(a.blendDst=this.blendDst),this.blendEquation!==os&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(a.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(n){const l=s(t.textures),u=s(t.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class IE extends vc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ua,this.combine=_E,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new ot,qu=new ke;let kC=0;class Fi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kC++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Tx,this.updateRanges=[],this.gpuType=Aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)qu.fromBufferAttribute(this,n),qu.applyMatrix3(t),this.setXY(n,qu.x,qu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix3(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix4(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyNormalMatrix(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.transformDirection(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Pl(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=$n(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Pl(n,this.array)),n}setX(t,n){return this.normalized&&(n=$n(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Pl(n,this.array)),n}setY(t,n){return this.normalized&&(n=$n(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Pl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=$n(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Pl(n,this.array)),n}setW(t,n){return this.normalized&&(n=$n(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=$n(n,this.array),a=$n(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=$n(n,this.array),a=$n(a,this.array),s=$n(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,l){return t*=this.itemSize,this.normalized&&(n=$n(n,this.array),a=$n(a,this.array),s=$n(s,this.array),l=$n(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tx&&(t.usage=this.usage),t}}class FE extends Fi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class BE extends Fi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class ps extends Fi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let XC=0;const Si=new cn,wp=new ni,lo=new ot,hi=new gc,Fl=new gc,Rn=new ot;class Ba extends Uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XC++}),this.uuid=pc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(LE(t)?BE:FE)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new le().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,n,a){return Si.makeTranslation(t,n,a),this.applyMatrix4(Si),this}scale(t,n,a){return Si.makeScale(t,n,a),this.applyMatrix4(Si),this}lookAt(t){return wp.lookAt(t),wp.updateMatrix(),this.applyMatrix4(wp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,l=t.length;s<l;s++){const u=t[s];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ps(a,3))}else{const a=Math.min(t.length,n.count);for(let s=0;s<a;s++){const l=t[s];n.setXYZ(s,l.x,l.y,l.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const l=n[a];hi.setFromBufferAttribute(l),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gf);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(t){const a=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Fl.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(hi.min,Fl.min),hi.expandByPoint(Rn),Rn.addVectors(hi.max,Fl.max),hi.expandByPoint(Rn)):(hi.expandByPoint(Fl.min),hi.expandByPoint(Fl.max))}hi.getCenter(a);let s=0;for(let l=0,u=t.count;l<u;l++)Rn.fromBufferAttribute(t,l),s=Math.max(s,a.distanceToSquared(Rn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],h=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)Rn.fromBufferAttribute(f,p),h&&(lo.fromBufferAttribute(t,p),Rn.add(lo)),s=Math.max(s,a.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let V=0;V<a.count;V++)f[V]=new ot,h[V]=new ot;const p=new ot,m=new ot,v=new ot,_=new ke,x=new ke,M=new ke,b=new ot,S=new ot;function y(V,U,D){p.fromBufferAttribute(a,V),m.fromBufferAttribute(a,U),v.fromBufferAttribute(a,D),_.fromBufferAttribute(l,V),x.fromBufferAttribute(l,U),M.fromBufferAttribute(l,D),m.sub(p),v.sub(p),x.sub(_),M.sub(_);const G=1/(x.x*M.y-M.x*x.y);isFinite(G)&&(b.copy(m).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(G),S.copy(v).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(G),f[V].add(b),f[U].add(b),f[D].add(b),h[V].add(S),h[U].add(S),h[D].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let V=0,U=L.length;V<U;++V){const D=L[V],G=D.start,ct=D.count;for(let lt=G,mt=G+ct;lt<mt;lt+=3)y(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const R=new ot,w=new ot,N=new ot,z=new ot;function I(V){N.fromBufferAttribute(s,V),z.copy(N);const U=f[V];R.copy(U),R.sub(N.multiplyScalar(N.dot(U))).normalize(),w.crossVectors(z,U);const G=w.dot(h[V])<0?-1:1;u.setXYZW(V,R.x,R.y,R.z,G)}for(let V=0,U=L.length;V<U;++V){const D=L[V],G=D.start,ct=D.count;for(let lt=G,mt=G+ct;lt<mt;lt+=3)I(t.getX(lt+0)),I(t.getX(lt+1)),I(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Fi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const s=new ot,l=new ot,u=new ot,f=new ot,h=new ot,p=new ot,m=new ot,v=new ot;if(t)for(let _=0,x=t.count;_<x;_+=3){const M=t.getX(_+0),b=t.getX(_+1),S=t.getX(_+2);s.fromBufferAttribute(n,M),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),m.subVectors(u,l),v.subVectors(s,l),m.cross(v),f.fromBufferAttribute(a,M),h.fromBufferAttribute(a,b),p.fromBufferAttribute(a,S),f.add(m),h.add(m),p.add(m),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let _=0,x=n.count;_<x;_+=3)s.fromBufferAttribute(n,_+0),l.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),m.subVectors(u,l),v.subVectors(s,l),m.cross(v),a.setXYZ(_+0,m.x,m.y,m.z),a.setXYZ(_+1,m.x,m.y,m.z),a.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Rn.fromBufferAttribute(t,n),Rn.normalize(),t.setXYZ(n,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(f,h){const p=f.array,m=f.itemSize,v=f.normalized,_=new p.constructor(h.length*m);let x=0,M=0;for(let b=0,S=h.length;b<S;b++){f.isInterleavedBufferAttribute?x=h[b]*f.data.stride+f.offset:x=h[b]*m;for(let y=0;y<m;y++)_[M++]=p[x++]}return new Fi(_,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ba,a=this.index.array,s=this.attributes;for(const f in s){const h=s[f],p=t(h,a);n.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let m=0,v=p.length;m<v;m++){const _=p[m],x=t(_,a);h.push(x)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(t[p]=h[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const h in a){const p=a[h];t.data.attributes[h]=p.toJSON(t.data)}const s={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let v=0,_=p.length;v<_;v++){const x=p[v];m.push(x.toJSON(t.data))}m.length>0&&(s[h]=m,l=!0)}l&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const s=t.attributes;for(const p in s){const m=s[p];this.setAttribute(p,m.clone(n))}const l=t.morphAttributes;for(const p in l){const m=[],v=l[p];for(let _=0,x=v.length;_<x;_++)m.push(v[_].clone(n));this.morphAttributes[p]=m}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,m=u.length;p<m;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zx=new cn,Jr=new PE,Yu=new Gf,Vx=new ot,Ku=new ot,Zu=new ot,Qu=new ot,Dp=new ot,$u=new ot,Hx=new ot,Ju=new ot;class Ca extends ni{constructor(t=new Ba,n=new IE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(l&&f){$u.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const m=f[h],v=l[h];m!==0&&(Dp.fromBufferAttribute(v,t),u?$u.addScaledVector(Dp,m):$u.addScaledVector(Dp.sub(n),m))}n.add($u)}return n}raycast(t,n){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Yu.copy(a.boundingSphere),Yu.applyMatrix4(l),Jr.copy(t.ray).recast(t.near),!(Yu.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Yu,Vx)===null||Jr.origin.distanceToSquared(Vx)>(t.far-t.near)**2))&&(zx.copy(l).invert(),Jr.copy(t.ray).applyMatrix4(zx),!(a.boundingBox!==null&&Jr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Jr)))}_computeIntersections(t,n,a){let s;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,_=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,b=_.length;M<b;M++){const S=_[M],y=u[S.materialIndex],L=Math.max(S.start,x.start),R=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let w=L,N=R;w<N;w+=3){const z=f.getX(w),I=f.getX(w+1),V=f.getX(w+2);s=tf(this,y,t,a,p,m,v,z,I,V),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const M=Math.max(0,x.start),b=Math.min(f.count,x.start+x.count);for(let S=M,y=b;S<y;S+=3){const L=f.getX(S),R=f.getX(S+1),w=f.getX(S+2);s=tf(this,u,t,a,p,m,v,L,R,w),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,b=_.length;M<b;M++){const S=_[M],y=u[S.materialIndex],L=Math.max(S.start,x.start),R=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let w=L,N=R;w<N;w+=3){const z=w,I=w+1,V=w+2;s=tf(this,y,t,a,p,m,v,z,I,V),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const M=Math.max(0,x.start),b=Math.min(h.count,x.start+x.count);for(let S=M,y=b;S<y;S+=3){const L=S,R=S+1,w=S+2;s=tf(this,u,t,a,p,m,v,L,R,w),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}}}function jC(e,t,n,a,s,l,u,f){let h;if(t.side===ti?h=a.intersectTriangle(u,l,s,!0,f):h=a.intersectTriangle(s,l,u,t.side===br,f),h===null)return null;Ju.copy(f),Ju.applyMatrix4(e.matrixWorld);const p=n.ray.origin.distanceTo(Ju);return p<n.near||p>n.far?null:{distance:p,point:Ju.clone(),object:e}}function tf(e,t,n,a,s,l,u,f,h,p){e.getVertexPosition(f,Ku),e.getVertexPosition(h,Zu),e.getVertexPosition(p,Qu);const m=jC(e,t,n,a,Ku,Zu,Qu,Hx);if(m){const v=new ot;Ni.getBarycoord(Hx,Ku,Zu,Qu,v),s&&(m.uv=Ni.getInterpolatedAttribute(s,f,h,p,v,new ke)),l&&(m.uv1=Ni.getInterpolatedAttribute(l,f,h,p,v,new ke)),u&&(m.normal=Ni.getInterpolatedAttribute(u,f,h,p,v,new ot),m.normal.dot(a.direction)>0&&m.normal.multiplyScalar(-1));const _={a:f,b:h,c:p,normal:new ot,materialIndex:0};Ni.getNormal(Ku,Zu,Qu,_.normal),m.face=_,m.barycoord=v}return m}class _c extends Ba{constructor(t=1,n=1,a=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:l,depthSegments:u};const f=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],m=[],v=[];let _=0,x=0;M("z","y","x",-1,-1,a,n,t,u,l,0),M("z","y","x",1,-1,a,n,-t,u,l,1),M("x","z","y",1,1,t,a,n,s,u,2),M("x","z","y",1,-1,t,a,-n,s,u,3),M("x","y","z",1,-1,t,n,a,s,l,4),M("x","y","z",-1,-1,t,n,-a,s,l,5),this.setIndex(h),this.setAttribute("position",new ps(p,3)),this.setAttribute("normal",new ps(m,3)),this.setAttribute("uv",new ps(v,2));function M(b,S,y,L,R,w,N,z,I,V,U){const D=w/I,G=N/V,ct=w/2,lt=N/2,mt=z/2,dt=I+1,B=V+1;let j=0,W=0;const Mt=new ot;for(let P=0;P<B;P++){const tt=P*G-lt;for(let xt=0;xt<dt;xt++){const Et=xt*D-ct;Mt[b]=Et*L,Mt[S]=tt*R,Mt[y]=mt,p.push(Mt.x,Mt.y,Mt.z),Mt[b]=0,Mt[S]=0,Mt[y]=z>0?1:-1,m.push(Mt.x,Mt.y,Mt.z),v.push(xt/I),v.push(1-P/V),j+=1}}for(let P=0;P<V;P++)for(let tt=0;tt<I;tt++){const xt=_+tt+dt*P,Et=_+tt+dt*(P+1),$=_+(tt+1)+dt*(P+1),gt=_+(tt+1)+dt*P;h.push(xt,Et,gt),h.push(Et,$,gt),W+=6}f.addGroup(x,W,U),x+=W,_+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _c(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Co(e){const t={};for(const n in e){t[n]={};for(const a in e[n]){const s=e[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone():Array.isArray(s)?t[n][a]=s.slice():t[n][a]=s}}return t}function Xn(e){const t={};for(let n=0;n<e.length;n++){const a=Co(e[n]);for(const s in a)t[s]=a[s]}return t}function WC(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function zE(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const qC={clone:Co,merge:Xn};var YC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends vc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YC,this.fragmentShader=KC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Co(t.uniforms),this.uniformsGroups=WC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?n.uniforms[s]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[s]={type:"m4",value:u.toArray()}:n.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class VE extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Ra}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new ot,Gx=new ke,kx=new ke;class Pi extends VE{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=qm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(up*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qm*2*Math.atan(Math.tan(up*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-t/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(_r.x,_r.y).multiplyScalar(-t/_r.z)}getViewSize(t,n){return this.getViewBounds(t,Gx,kx),n.subVectors(kx,Gx)}setViewOffset(t,n,a,s,l,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(up*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*s/h,n-=u.offsetY*a/p,s*=u.width/h,a*=u.height/p}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const co=-90,uo=1;class ZC extends ni{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pi(co,uo,t,n);s.layers=this.layers,this.add(s);const l=new Pi(co,uo,t,n);l.layers=this.layers,this.add(l);const u=new Pi(co,uo,t,n);u.layers=this.layers,this.add(u);const f=new Pi(co,uo,t,n);f.layers=this.layers,this.add(f);const h=new Pi(co,uo,t,n);h.layers=this.layers,this.add(h);const p=new Pi(co,uo,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,l,u,f,h]=n;for(const p of n)this.remove(p);if(t===Ra)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Df)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,m]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,s),t.render(n,l),t.setRenderTarget(a,1,s),t.render(n,u),t.setRenderTarget(a,2,s),t.render(n,f),t.setRenderTarget(a,3,s),t.render(n,h),t.setRenderTarget(a,4,s),t.render(n,p),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,s),t.render(n,m),t.setRenderTarget(v,_,x),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class HE extends ei{constructor(t=[],n=To,a,s,l,u,f,h,p,m){super(t,n,a,s,l,u,f,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class QC extends vs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new HE(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _c(5,5,5),l=new Tr({name:"CubemapFromEquirect",uniforms:Co(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ti,blending:Mr});l.uniforms.tEquirect.value=n;const u=new Ca(s,l),f=n.minFilter;return n.minFilter===us&&(n.minFilter=Wi),new ZC(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,s=!0){const l=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,s);t.setRenderTarget(l)}}class ef extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $C={type:"move"};class Lp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ef,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ef,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ef,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const b of t.hand.values()){const S=n.getJointPose(b,a),y=this._getHandJoint(p,b);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=m.position.distanceTo(v.position),x=.02,M=.005;p.inputState.pinching&&_>x+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=x-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent($C)))}return f!==null&&(f.visible=s!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new ef;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class JC extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ua,this.environmentIntensity=1,this.environmentRotation=new Ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Up=new ot,tw=new ot,ew=new le;class as{constructor(t=new ot(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=Up.subVectors(a,n).cross(tw.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Up),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:n.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||ew.getNormalMatrix(t),s=this.coplanarPoint(Up).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new Gf,nf=new ot;class GE{constructor(t=new as,n=new as,a=new as,s=new as,l=new as,u=new as){this.planes=[t,n,a,s,l,u]}set(t,n,a,s,l,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Ra){const a=this.planes,s=t.elements,l=s[0],u=s[1],f=s[2],h=s[3],p=s[4],m=s[5],v=s[6],_=s[7],x=s[8],M=s[9],b=s[10],S=s[11],y=s[12],L=s[13],R=s[14],w=s[15];if(a[0].setComponents(h-l,_-p,S-x,w-y).normalize(),a[1].setComponents(h+l,_+p,S+x,w+y).normalize(),a[2].setComponents(h+u,_+m,S+M,w+L).normalize(),a[3].setComponents(h-u,_-m,S-M,w-L).normalize(),a[4].setComponents(h-f,_-v,S-b,w-R).normalize(),n===Ra)a[5].setComponents(h+f,_+v,S+b,w+R).normalize();else if(n===Df)a[5].setComponents(f,v,b,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(nf.x=s.normal.x>0?t.max.x:t.min.x,nf.y=s.normal.y>0?t.max.y:t.min.y,nf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nf)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kE extends vc{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xx=new cn,Ym=new PE,af=new Gf,rf=new ot;class nw extends ni{constructor(t=new Ba,n=new kE){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,s=this.matrixWorld,l=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),af.copy(a.boundingSphere),af.applyMatrix4(s),af.radius+=l,t.ray.intersectsSphere(af)===!1)return;Xx.copy(s).invert(),Ym.copy(t.ray).applyMatrix4(Xx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=a.index,v=a.attributes.position;if(p!==null){const _=Math.max(0,u.start),x=Math.min(p.count,u.start+u.count);for(let M=_,b=x;M<b;M++){const S=p.getX(M);rf.fromBufferAttribute(v,S),jx(rf,S,h,s,t,n,this)}}else{const _=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let M=_,b=x;M<b;M++)rf.fromBufferAttribute(v,M),jx(rf,M,h,s,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function jx(e,t,n,a,s,l,u){const f=Ym.distanceSqToPoint(e);if(f<n){const h=new ot;Ym.closestPointToPoint(e,h),h.applyMatrix4(a);const p=s.ray.origin.distanceTo(h);if(p<s.near||p>s.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class XE extends ei{constructor(t,n,a=gs,s,l,u,f=Ii,h=Ii,p,m=tc){if(m!==tc&&m!==ec)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,l,u,f,h,m,a,p),this.isDepthTexture=!0,this.image={width:t,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kg(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class kf extends Ba{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const l=t/2,u=n/2,f=Math.floor(a),h=Math.floor(s),p=f+1,m=h+1,v=t/f,_=n/h,x=[],M=[],b=[],S=[];for(let y=0;y<m;y++){const L=y*_-u;for(let R=0;R<p;R++){const w=R*v-l;M.push(w,-L,0),b.push(0,0,1),S.push(R/f),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let L=0;L<f;L++){const R=L+p*y,w=L+p*(y+1),N=L+1+p*(y+1),z=L+1+p*y;x.push(R,w,z),x.push(w,N,z)}this.setIndex(x),this.setAttribute("position",new ps(M,3)),this.setAttribute("normal",new ps(b,3)),this.setAttribute("uv",new ps(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kf(t.width,t.height,t.widthSegments,t.heightSegments)}}class iw extends vc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class aw extends vc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class jE extends VE{constructor(t=-1,n=1,a=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-t,u=a+t,f=s+n,h=s-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=m*this.view.offsetY,h=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class rw extends Pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function Wx(e,t,n,a){const s=sw(a);switch(n){case EE:return e*t;case TE:return e*t;case AE:return e*t*2;case RE:return e*t/s.components*s.byteLength;case Vg:return e*t/s.components*s.byteLength;case CE:return e*t*2/s.components*s.byteLength;case Hg:return e*t*2/s.components*s.byteLength;case bE:return e*t*3/s.components*s.byteLength;case Oi:return e*t*4/s.components*s.byteLength;case Gg:return e*t*4/s.components*s.byteLength;case mf:case gf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case vf:case _f:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mm:case bm:return Math.max(e,16)*Math.max(t,8)/4;case Sm:case Em:return Math.max(e,8)*Math.max(t,8)/2;case Tm:case Am:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Rm:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Cm:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wm:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Dm:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Lm:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Um:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Pm:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Nm:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Om:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Im:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Fm:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Bm:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case zm:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Vm:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Hm:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case yf:case Gm:case km:return Math.ceil(e/4)*Math.ceil(t/4)*16;case wE:case Xm:return Math.ceil(e/4)*Math.ceil(t/4)*8;case jm:case Wm:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function sw(e){switch(e){case La:case xE:return{byteLength:1,components:1};case $l:case SE:case dc:return{byteLength:2,components:1};case Bg:case zg:return{byteLength:2,components:4};case gs:case Fg:case Aa:return{byteLength:4,components:1};case ME:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ig}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ig);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function WE(){let e=null,t=!1,n=null,a=null;function s(l,u){n(l,u),a=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(a=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){e=l}}}function ow(e){const t=new WeakMap;function n(f,h){const p=f.array,m=f.usage,v=p.byteLength,_=e.createBuffer();e.bindBuffer(h,_),e.bufferData(h,p,m),f.onUploadCallback();let x;if(p instanceof Float32Array)x=e.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?x=e.HALF_FLOAT:x=e.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=e.SHORT;else if(p instanceof Uint32Array)x=e.UNSIGNED_INT;else if(p instanceof Int32Array)x=e.INT;else if(p instanceof Int8Array)x=e.BYTE;else if(p instanceof Uint8Array)x=e.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,h,p){const m=h.array,v=h.updateRanges;if(e.bindBuffer(p,f),v.length===0)e.bufferSubData(p,0,m);else{v.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<v.length;x++){const M=v[_],b=v[x];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++_,v[_]=b)}v.length=_+1;for(let x=0,M=v.length;x<M;x++){const b=v[x];e.bufferSubData(p,b.start*m.BYTES_PER_ELEMENT,m,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=t.get(f);h&&(e.deleteBuffer(h.buffer),t.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=t.get(f);(!m||m.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,n(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,h),p.version=f.version}}return{get:s,remove:l,update:u}}var lw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_w=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ew=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Aw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ww=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ow=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bw="gl_FragColor = linearToOutputTexel( gl_FragColor );",zw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ww=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$w=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,t2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,e2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,s2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,v2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,R2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,L2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,X2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,W2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,q2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Q2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_D=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,MD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ED=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,UD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ND=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ID=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:lw,alphahash_pars_fragment:cw,alphamap_fragment:uw,alphamap_pars_fragment:fw,alphatest_fragment:hw,alphatest_pars_fragment:dw,aomap_fragment:pw,aomap_pars_fragment:mw,batching_pars_vertex:gw,batching_vertex:vw,begin_vertex:_w,beginnormal_vertex:yw,bsdfs:xw,iridescence_fragment:Sw,bumpmap_pars_fragment:Mw,clipping_planes_fragment:Ew,clipping_planes_pars_fragment:bw,clipping_planes_pars_vertex:Tw,clipping_planes_vertex:Aw,color_fragment:Rw,color_pars_fragment:Cw,color_pars_vertex:ww,color_vertex:Dw,common:Lw,cube_uv_reflection_fragment:Uw,defaultnormal_vertex:Pw,displacementmap_pars_vertex:Nw,displacementmap_vertex:Ow,emissivemap_fragment:Iw,emissivemap_pars_fragment:Fw,colorspace_fragment:Bw,colorspace_pars_fragment:zw,envmap_fragment:Vw,envmap_common_pars_fragment:Hw,envmap_pars_fragment:Gw,envmap_pars_vertex:kw,envmap_physical_pars_fragment:t2,envmap_vertex:Xw,fog_vertex:jw,fog_pars_vertex:Ww,fog_fragment:qw,fog_pars_fragment:Yw,gradientmap_pars_fragment:Kw,lightmap_pars_fragment:Zw,lights_lambert_fragment:Qw,lights_lambert_pars_fragment:$w,lights_pars_begin:Jw,lights_toon_fragment:e2,lights_toon_pars_fragment:n2,lights_phong_fragment:i2,lights_phong_pars_fragment:a2,lights_physical_fragment:r2,lights_physical_pars_fragment:s2,lights_fragment_begin:o2,lights_fragment_maps:l2,lights_fragment_end:c2,logdepthbuf_fragment:u2,logdepthbuf_pars_fragment:f2,logdepthbuf_pars_vertex:h2,logdepthbuf_vertex:d2,map_fragment:p2,map_pars_fragment:m2,map_particle_fragment:g2,map_particle_pars_fragment:v2,metalnessmap_fragment:_2,metalnessmap_pars_fragment:y2,morphinstance_vertex:x2,morphcolor_vertex:S2,morphnormal_vertex:M2,morphtarget_pars_vertex:E2,morphtarget_vertex:b2,normal_fragment_begin:T2,normal_fragment_maps:A2,normal_pars_fragment:R2,normal_pars_vertex:C2,normal_vertex:w2,normalmap_pars_fragment:D2,clearcoat_normal_fragment_begin:L2,clearcoat_normal_fragment_maps:U2,clearcoat_pars_fragment:P2,iridescence_pars_fragment:N2,opaque_fragment:O2,packing:I2,premultiplied_alpha_fragment:F2,project_vertex:B2,dithering_fragment:z2,dithering_pars_fragment:V2,roughnessmap_fragment:H2,roughnessmap_pars_fragment:G2,shadowmap_pars_fragment:k2,shadowmap_pars_vertex:X2,shadowmap_vertex:j2,shadowmask_pars_fragment:W2,skinbase_vertex:q2,skinning_pars_vertex:Y2,skinning_vertex:K2,skinnormal_vertex:Z2,specularmap_fragment:Q2,specularmap_pars_fragment:$2,tonemapping_fragment:J2,tonemapping_pars_fragment:tD,transmission_fragment:eD,transmission_pars_fragment:nD,uv_pars_fragment:iD,uv_pars_vertex:aD,uv_vertex:rD,worldpos_vertex:sD,background_vert:oD,background_frag:lD,backgroundCube_vert:cD,backgroundCube_frag:uD,cube_vert:fD,cube_frag:hD,depth_vert:dD,depth_frag:pD,distanceRGBA_vert:mD,distanceRGBA_frag:gD,equirect_vert:vD,equirect_frag:_D,linedashed_vert:yD,linedashed_frag:xD,meshbasic_vert:SD,meshbasic_frag:MD,meshlambert_vert:ED,meshlambert_frag:bD,meshmatcap_vert:TD,meshmatcap_frag:AD,meshnormal_vert:RD,meshnormal_frag:CD,meshphong_vert:wD,meshphong_frag:DD,meshphysical_vert:LD,meshphysical_frag:UD,meshtoon_vert:PD,meshtoon_frag:ND,points_vert:OD,points_frag:ID,shadow_vert:FD,shadow_frag:BD,sprite_vert:zD,sprite_frag:VD},Pt={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Xi={basic:{uniforms:Xn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Xn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Xn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Xn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Xn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Xn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Xn([Pt.points,Pt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Xn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Xn([Pt.common,Pt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Xn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Xn([Pt.sprite,Pt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Xn([Pt.common,Pt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Xn([Pt.lights,Pt.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Xi.physical={uniforms:Xn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const sf={r:0,b:0,g:0},es=new Ua,HD=new cn;function GD(e,t,n,a,s,l,u){const f=new Pe(0);let h=l===!0?0:1,p,m,v=null,_=0,x=null;function M(R){let w=R.isScene===!0?R.background:null;return w&&w.isTexture&&(w=(R.backgroundBlurriness>0?n:t).get(w)),w}function b(R){let w=!1;const N=M(R);N===null?y(f,h):N&&N.isColor&&(y(N,1),w=!0);const z=e.xr.getEnvironmentBlendMode();z==="additive"?a.buffers.color.setClear(0,0,0,1,u):z==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(e.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function S(R,w){const N=M(w);N&&(N.isCubeTexture||N.mapping===Hf)?(m===void 0&&(m=new Ca(new _c(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:Co(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,I,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),es.copy(w.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.material.uniforms.envMap.value=N,m.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(HD.makeRotationFromEuler(es)),m.material.toneMapped=we.getTransfer(N.colorSpace)!==ze,(v!==N||_!==N.version||x!==e.toneMapping)&&(m.material.needsUpdate=!0,v=N,_=N.version,x=e.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new Ca(new kf(2,2),new Tr({name:"BackgroundMaterial",uniforms:Co(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=we.getTransfer(N.colorSpace)!==ze,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||_!==N.version||x!==e.toneMapping)&&(p.material.needsUpdate=!0,v=N,_=N.version,x=e.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function y(R,w){R.getRGB(sf,zE(e)),a.buffers.color.setClear(sf.r,sf.g,sf.b,w,u)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,w=1){f.set(R),h=w,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,y(f,h)},render:b,addToRenderList:S,dispose:L}}function kD(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),a={},s=_(null);let l=s,u=!1;function f(D,G,ct,lt,mt){let dt=!1;const B=v(lt,ct,G);l!==B&&(l=B,p(l.object)),dt=x(D,lt,ct,mt),dt&&M(D,lt,ct,mt),mt!==null&&t.update(mt,e.ELEMENT_ARRAY_BUFFER),(dt||u)&&(u=!1,w(D,G,ct,lt),mt!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function h(){return e.createVertexArray()}function p(D){return e.bindVertexArray(D)}function m(D){return e.deleteVertexArray(D)}function v(D,G,ct){const lt=ct.wireframe===!0;let mt=a[D.id];mt===void 0&&(mt={},a[D.id]=mt);let dt=mt[G.id];dt===void 0&&(dt={},mt[G.id]=dt);let B=dt[lt];return B===void 0&&(B=_(h()),dt[lt]=B),B}function _(D){const G=[],ct=[],lt=[];for(let mt=0;mt<n;mt++)G[mt]=0,ct[mt]=0,lt[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ct,attributeDivisors:lt,object:D,attributes:{},index:null}}function x(D,G,ct,lt){const mt=l.attributes,dt=G.attributes;let B=0;const j=ct.getAttributes();for(const W in j)if(j[W].location>=0){const P=mt[W];let tt=dt[W];if(tt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),P===void 0||P.attribute!==tt||tt&&P.data!==tt.data)return!0;B++}return l.attributesNum!==B||l.index!==lt}function M(D,G,ct,lt){const mt={},dt=G.attributes;let B=0;const j=ct.getAttributes();for(const W in j)if(j[W].location>=0){let P=dt[W];P===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(P=D.instanceColor));const tt={};tt.attribute=P,P&&P.data&&(tt.data=P.data),mt[W]=tt,B++}l.attributes=mt,l.attributesNum=B,l.index=lt}function b(){const D=l.newAttributes;for(let G=0,ct=D.length;G<ct;G++)D[G]=0}function S(D){y(D,0)}function y(D,G){const ct=l.newAttributes,lt=l.enabledAttributes,mt=l.attributeDivisors;ct[D]=1,lt[D]===0&&(e.enableVertexAttribArray(D),lt[D]=1),mt[D]!==G&&(e.vertexAttribDivisor(D,G),mt[D]=G)}function L(){const D=l.newAttributes,G=l.enabledAttributes;for(let ct=0,lt=G.length;ct<lt;ct++)G[ct]!==D[ct]&&(e.disableVertexAttribArray(ct),G[ct]=0)}function R(D,G,ct,lt,mt,dt,B){B===!0?e.vertexAttribIPointer(D,G,ct,mt,dt):e.vertexAttribPointer(D,G,ct,lt,mt,dt)}function w(D,G,ct,lt){b();const mt=lt.attributes,dt=ct.getAttributes(),B=G.defaultAttributeValues;for(const j in dt){const W=dt[j];if(W.location>=0){let Mt=mt[j];if(Mt===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(Mt=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(Mt=D.instanceColor)),Mt!==void 0){const P=Mt.normalized,tt=Mt.itemSize,xt=t.get(Mt);if(xt===void 0)continue;const Et=xt.buffer,$=xt.type,gt=xt.bytesPerElement,St=$===e.INT||$===e.UNSIGNED_INT||Mt.gpuType===Fg;if(Mt.isInterleavedBufferAttribute){const Ct=Mt.data,It=Ct.stride,ce=Mt.offset;if(Ct.isInstancedInterleavedBuffer){for(let $t=0;$t<W.locationSize;$t++)y(W.location+$t,Ct.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let $t=0;$t<W.locationSize;$t++)S(W.location+$t);e.bindBuffer(e.ARRAY_BUFFER,Et);for(let $t=0;$t<W.locationSize;$t++)R(W.location+$t,tt/W.locationSize,$,P,It*gt,(ce+tt/W.locationSize*$t)*gt,St)}else{if(Mt.isInstancedBufferAttribute){for(let Ct=0;Ct<W.locationSize;Ct++)y(W.location+Ct,Mt.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Ct=0;Ct<W.locationSize;Ct++)S(W.location+Ct);e.bindBuffer(e.ARRAY_BUFFER,Et);for(let Ct=0;Ct<W.locationSize;Ct++)R(W.location+Ct,tt/W.locationSize,$,P,tt*gt,tt/W.locationSize*Ct*gt,St)}}else if(B!==void 0){const P=B[j];if(P!==void 0)switch(P.length){case 2:e.vertexAttrib2fv(W.location,P);break;case 3:e.vertexAttrib3fv(W.location,P);break;case 4:e.vertexAttrib4fv(W.location,P);break;default:e.vertexAttrib1fv(W.location,P)}}}}L()}function N(){V();for(const D in a){const G=a[D];for(const ct in G){const lt=G[ct];for(const mt in lt)m(lt[mt].object),delete lt[mt];delete G[ct]}delete a[D]}}function z(D){if(a[D.id]===void 0)return;const G=a[D.id];for(const ct in G){const lt=G[ct];for(const mt in lt)m(lt[mt].object),delete lt[mt];delete G[ct]}delete a[D.id]}function I(D){for(const G in a){const ct=a[G];if(ct[D.id]===void 0)continue;const lt=ct[D.id];for(const mt in lt)m(lt[mt].object),delete lt[mt];delete ct[D.id]}}function V(){U(),u=!0,l!==s&&(l=s,p(l.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:V,resetDefaultState:U,dispose:N,releaseStatesOfGeometry:z,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:S,disableUnusedAttributes:L}}function XD(e,t,n){let a;function s(p){a=p}function l(p,m){e.drawArrays(a,p,m),n.update(m,a,1)}function u(p,m,v){v!==0&&(e.drawArraysInstanced(a,p,m,v),n.update(m,a,v))}function f(p,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,m,0,v);let x=0;for(let M=0;M<v;M++)x+=m[M];n.update(x,a,1)}function h(p,m,v,_){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<p.length;M++)u(p[M],m[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(a,p,0,m,0,_,0,v);let M=0;for(let b=0;b<v;b++)M+=m[b]*_[b];n.update(M,a,1)}}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function jD(e,t,n,a){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(I){return!(I!==Oi&&a.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const V=I===dc&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==La&&a.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Aa&&!V)}function h(I){if(I==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const m=h(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const v=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),S=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),y=e.getParameter(e.MAX_VERTEX_ATTRIBS),L=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),R=e.getParameter(e.MAX_VARYING_VECTORS),w=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),N=M>0,z=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:R,maxFragmentUniforms:w,vertexTextures:N,maxSamples:z}}function WD(e){const t=this;let n=null,a=0,s=!1,l=!1;const u=new as,f=new le,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||s;return s=_,a=v.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){n=m(v,_,0)},this.setState=function(v,_,x){const M=v.clippingPlanes,b=v.clipIntersection,S=v.clipShadows,y=e.get(v);if(!s||M===null||M.length===0||l&&!S)l?m(null):p();else{const L=l?0:a,R=L*4;let w=y.clippingState||null;h.value=w,w=m(M,_,R,x);for(let N=0;N!==R;++N)w[N]=n[N];y.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==n&&(h.value=n,h.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function m(v,_,x,M){const b=v!==null?v.length:0;let S=null;if(b!==0){if(S=h.value,M!==!0||S===null){const y=x+b*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let R=0,w=x;R!==b;++R,w+=4)u.copy(v[R]).applyMatrix4(L,f),u.normal.toArray(S,w),S[w+3]=u.constant}h.value=S,h.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function qD(e){let t=new WeakMap;function n(u,f){return f===vm?u.mapping=To:f===_m&&(u.mapping=Ao),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===vm||f===_m)if(t.has(u)){const h=t.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new QC(h.height);return p.fromEquirectangularTexture(e,u),t.set(u,p),u.addEventListener("dispose",s),n(p.texture,u.mapping)}else return null}}return u}function s(u){const f=u.target;f.removeEventListener("dispose",s);const h=t.get(f);h!==void 0&&(t.delete(f),h.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}const ho=4,qx=[.125,.215,.35,.446,.526,.582],ls=20,Pp=new jE,Yx=new Pe;let Np=null,Op=0,Ip=0,Fp=!1;const rs=(1+Math.sqrt(5))/2,fo=1/rs,Kx=[new ot(-rs,fo,0),new ot(rs,fo,0),new ot(-fo,0,rs),new ot(fo,0,rs),new ot(0,rs,-fo),new ot(0,rs,fo),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)],YD=new ot;class Zx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,s=100,l={}){const{size:u=256,position:f=YD}=l;Np=this._renderer.getRenderTarget(),Op=this._renderer.getActiveCubeFace(),Ip=this._renderer.getActiveMipmapLevel(),Fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,a,s,h,f),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$x(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Np,Op,Ip),this._renderer.xr.enabled=Fp,t.scissorTest=!1,of(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===To||t.mapping===Ao?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Np=this._renderer.getRenderTarget(),Op=this._renderer.getActiveCubeFace(),Ip=this._renderer.getActiveMipmapLevel(),Fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Wi,minFilter:Wi,generateMipmaps:!1,type:dc,format:Oi,colorSpace:Ro,depthBuffer:!1},s=Qx(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qx(t,n,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KD(l)),this._blurMaterial=ZD(l,t,n)}return s}_compileMaterial(t){const n=new Ca(this._lodPlanes[0],t);this._renderer.compile(n,Pp)}_sceneToCubeUV(t,n,a,s,l){const h=new Pi(90,1,n,a),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(Yx),v.toneMapping=Er,v.autoClear=!1;const M=new IE({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),b=new Ca(new _c,M);let S=!1;const y=t.background;y?y.isColor&&(M.color.copy(y),t.background=null,S=!0):(M.color.copy(Yx),S=!0);for(let L=0;L<6;L++){const R=L%3;R===0?(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+m[L],l.y,l.z)):R===1?(h.up.set(0,0,p[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+m[L],l.z)):(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+m[L]));const w=this._cubeSize;of(s,R*w,L>2?w:0,w,w),v.setRenderTarget(s),S&&v.render(b,h),v.render(t,h)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=x,v.autoClear=_,t.background=y}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===To||t.mapping===Ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$x());const l=s?this._cubemapMaterial:this._equirectMaterial,u=new Ca(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const h=this._cubeSize;of(n,0,0,3*h,2*h),a.setRenderTarget(n),a.render(u,Pp)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Kx[(s-l-1)%Kx.length];this._blur(t,l-1,l,u,f)}n.autoClear=a}_blur(t,n,a,s,l){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,s,"latitudinal",l),this._halfBlur(u,t,a,a,s,"longitudinal",l)}_halfBlur(t,n,a,s,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Ca(this._lodPlanes[s],p),_=p.uniforms,x=this._sizeLods[a]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*ls-1),b=l/M,S=isFinite(l)?1+Math.floor(m*b):ls;S>ls&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ls}`);const y=[];let L=0;for(let I=0;I<ls;++I){const V=I/b,U=Math.exp(-V*V/2);y.push(U),I===0?L+=U:I<S&&(L+=2*U)}for(let I=0;I<y.length;I++)y[I]=y[I]/L;_.envMap.value=t.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:R}=this;_.dTheta.value=M,_.mipInt.value=R-a;const w=this._sizeLods[s],N=3*w*(s>R-ho?s-R+ho:0),z=4*(this._cubeSize-w);of(n,N,z,3*w,2*w),h.setRenderTarget(n),h.render(v,Pp)}}function KD(e){const t=[],n=[],a=[];let s=e;const l=e-ho+1+qx.length;for(let u=0;u<l;u++){const f=Math.pow(2,s);n.push(f);let h=1/f;u>e-ho?h=qx[u-e+ho-1]:u===0&&(h=0),a.push(h);const p=1/(f-2),m=-p,v=1+p,_=[m,m,v,m,v,v,m,m,v,v,m,v],x=6,M=6,b=3,S=2,y=1,L=new Float32Array(b*M*x),R=new Float32Array(S*M*x),w=new Float32Array(y*M*x);for(let z=0;z<x;z++){const I=z%3*2/3-1,V=z>2?0:-1,U=[I,V,0,I+2/3,V,0,I+2/3,V+1,0,I,V,0,I+2/3,V+1,0,I,V+1,0];L.set(U,b*M*z),R.set(_,S*M*z);const D=[z,z,z,z,z,z];w.set(D,y*M*z)}const N=new Ba;N.setAttribute("position",new Fi(L,b)),N.setAttribute("uv",new Fi(R,S)),N.setAttribute("faceIndex",new Fi(w,y)),t.push(N),s>ho&&s--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function Qx(e,t,n){const a=new vs(e,t,n);return a.texture.mapping=Hf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function of(e,t,n,a,s){e.viewport.set(t,n,a,s),e.scissor.set(t,n,a,s)}function ZD(e,t,n){const a=new Float32Array(ls),s=new ot(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function $x(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Jx(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Xg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function QD(e){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const h=f.mapping,p=h===vm||h===_m,m=h===To||h===Ao;if(p||m){let v=t.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new Zx(e)),v=p?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{const x=f.image;return p&&x&&x.height>0||m&&x&&s(x)?(n===null&&(n=new Zx(e)),v=p?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function s(f){let h=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function $D(e){const t={};function n(a){if(t[a]!==void 0)return t[a];let s;switch(a){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(a)}return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&xf("THREE.WebGLRenderer: "+a+" extension not supported."),s}}}function JD(e,t,n,a){const s={},l=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const M in _.attributes)t.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete s[_.id];const x=l.get(_);x&&(t.remove(x),l.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(v,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,n.memory.geometries++),_}function h(v){const _=v.attributes;for(const x in _)t.update(_[x],e.ARRAY_BUFFER)}function p(v){const _=[],x=v.index,M=v.attributes.position;let b=0;if(x!==null){const L=x.array;b=x.version;for(let R=0,w=L.length;R<w;R+=3){const N=L[R+0],z=L[R+1],I=L[R+2];_.push(N,z,z,I,I,N)}}else if(M!==void 0){const L=M.array;b=M.version;for(let R=0,w=L.length/3-1;R<w;R+=3){const N=R+0,z=R+1,I=R+2;_.push(N,z,z,I,I,N)}}else return;const S=new(LE(_)?BE:FE)(_,1);S.version=b;const y=l.get(v);y&&t.remove(y),l.set(v,S)}function m(v){const _=l.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:m}}function t3(e,t,n){let a;function s(_){a=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function h(_,x){e.drawElements(a,x,l,_*u),n.update(x,a,1)}function p(_,x,M){M!==0&&(e.drawElementsInstanced(a,x,l,_*u,M),n.update(x,a,M))}function m(_,x,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,_,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];n.update(S,a,1)}function v(_,x,M,b){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)p(_[y]/u,x[y],b[y]);else{S.multiDrawElementsInstancedWEBGL(a,x,0,l,_,0,b,0,M);let y=0;for(let L=0;L<M;L++)y+=x[L]*b[L];n.update(y,a,1)}}this.setMode=s,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function e3(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,f){switch(n.calls++,u){case e.TRIANGLES:n.triangles+=f*(l/3);break;case e.LINES:n.lines+=f*(l/2);break;case e.LINE_STRIP:n.lines+=f*(l-1);break;case e.LINE_LOOP:n.lines+=f*l;break;case e.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function n3(e,t,n){const a=new WeakMap,s=new ln;function l(u,f,h){const p=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let _=a.get(f);if(_===void 0||_.count!==v){let D=function(){V.dispose(),a.delete(f),f.removeEventListener("dispose",D)};var x=D;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let w=0;M===!0&&(w=1),b===!0&&(w=2),S===!0&&(w=3);let N=f.attributes.position.count*w,z=1;N>t.maxTextureSize&&(z=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const I=new Float32Array(N*z*4*v),V=new UE(I,N,z,v);V.type=Aa,V.needsUpdate=!0;const U=w*4;for(let G=0;G<v;G++){const ct=y[G],lt=L[G],mt=R[G],dt=N*z*4*G;for(let B=0;B<ct.count;B++){const j=B*U;M===!0&&(s.fromBufferAttribute(ct,B),I[dt+j+0]=s.x,I[dt+j+1]=s.y,I[dt+j+2]=s.z,I[dt+j+3]=0),b===!0&&(s.fromBufferAttribute(lt,B),I[dt+j+4]=s.x,I[dt+j+5]=s.y,I[dt+j+6]=s.z,I[dt+j+7]=0),S===!0&&(s.fromBufferAttribute(mt,B),I[dt+j+8]=s.x,I[dt+j+9]=s.y,I[dt+j+10]=s.z,I[dt+j+11]=mt.itemSize===4?s.w:1)}}_={count:v,texture:V,size:new ke(N,z)},a.set(f,_),f.addEventListener("dispose",D)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(e,"morphTexture",u.morphTexture,n);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const b=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(e,"morphTargetBaseInfluence",b),h.getUniforms().setValue(e,"morphTargetInfluences",p)}h.getUniforms().setValue(e,"morphTargetsTexture",_.texture,n),h.getUniforms().setValue(e,"morphTargetsTextureSize",_.size)}return{update:l}}function i3(e,t,n,a){let s=new WeakMap;function l(h){const p=a.render.frame,m=h.geometry,v=t.get(h,m);if(s.get(v)!==p&&(t.update(v),s.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),s.get(h)!==p&&(n.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,e.ARRAY_BUFFER),s.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;s.get(_)!==p&&(_.update(),s.set(_,p))}return v}function u(){s=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:u}}const qE=new ei,tS=new XE(1,1),YE=new UE,KE=new NC,ZE=new HE,eS=[],nS=[],iS=new Float32Array(16),aS=new Float32Array(9),rS=new Float32Array(4);function Po(e,t,n){const a=e[0];if(a<=0||a>0)return e;const s=t*n;let l=eS[s];if(l===void 0&&(l=new Float32Array(s),eS[s]=l),t!==0){a.toArray(l,0);for(let u=1,f=0;u!==t;++u)f+=n,e[u].toArray(l,f)}return l}function xn(e,t){if(e.length!==t.length)return!1;for(let n=0,a=e.length;n<a;n++)if(e[n]!==t[n])return!1;return!0}function Sn(e,t){for(let n=0,a=t.length;n<a;n++)e[n]=t[n]}function Xf(e,t){let n=nS[t];n===void 0&&(n=new Int32Array(t),nS[t]=n);for(let a=0;a!==t;++a)n[a]=e.allocateTextureUnit();return n}function a3(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function r3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;e.uniform2fv(this.addr,t),Sn(n,t)}}function s3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(xn(n,t))return;e.uniform3fv(this.addr,t),Sn(n,t)}}function o3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;e.uniform4fv(this.addr,t),Sn(n,t)}}function l3(e,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Sn(n,t)}else{if(xn(n,a))return;rS.set(a),e.uniformMatrix2fv(this.addr,!1,rS),Sn(n,a)}}function c3(e,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Sn(n,t)}else{if(xn(n,a))return;aS.set(a),e.uniformMatrix3fv(this.addr,!1,aS),Sn(n,a)}}function u3(e,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Sn(n,t)}else{if(xn(n,a))return;iS.set(a),e.uniformMatrix4fv(this.addr,!1,iS),Sn(n,a)}}function f3(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function h3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;e.uniform2iv(this.addr,t),Sn(n,t)}}function d3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xn(n,t))return;e.uniform3iv(this.addr,t),Sn(n,t)}}function p3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;e.uniform4iv(this.addr,t),Sn(n,t)}}function m3(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function g3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;e.uniform2uiv(this.addr,t),Sn(n,t)}}function v3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xn(n,t))return;e.uniform3uiv(this.addr,t),Sn(n,t)}}function _3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;e.uniform4uiv(this.addr,t),Sn(n,t)}}function y3(e,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(e.uniform1i(this.addr,s),a[0]=s);let l;this.type===e.SAMPLER_2D_SHADOW?(tS.compareFunction=DE,l=tS):l=qE,n.setTexture2D(t||l,s)}function x3(e,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(e.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||KE,s)}function S3(e,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(e.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||ZE,s)}function M3(e,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(e.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||YE,s)}function E3(e){switch(e){case 5126:return a3;case 35664:return r3;case 35665:return s3;case 35666:return o3;case 35674:return l3;case 35675:return c3;case 35676:return u3;case 5124:case 35670:return f3;case 35667:case 35671:return h3;case 35668:case 35672:return d3;case 35669:case 35673:return p3;case 5125:return m3;case 36294:return g3;case 36295:return v3;case 36296:return _3;case 35678:case 36198:case 36298:case 36306:case 35682:return y3;case 35679:case 36299:case 36307:return x3;case 35680:case 36300:case 36308:case 36293:return S3;case 36289:case 36303:case 36311:case 36292:return M3}}function b3(e,t){e.uniform1fv(this.addr,t)}function T3(e,t){const n=Po(t,this.size,2);e.uniform2fv(this.addr,n)}function A3(e,t){const n=Po(t,this.size,3);e.uniform3fv(this.addr,n)}function R3(e,t){const n=Po(t,this.size,4);e.uniform4fv(this.addr,n)}function C3(e,t){const n=Po(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function w3(e,t){const n=Po(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function D3(e,t){const n=Po(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function L3(e,t){e.uniform1iv(this.addr,t)}function U3(e,t){e.uniform2iv(this.addr,t)}function P3(e,t){e.uniform3iv(this.addr,t)}function N3(e,t){e.uniform4iv(this.addr,t)}function O3(e,t){e.uniform1uiv(this.addr,t)}function I3(e,t){e.uniform2uiv(this.addr,t)}function F3(e,t){e.uniform3uiv(this.addr,t)}function B3(e,t){e.uniform4uiv(this.addr,t)}function z3(e,t,n){const a=this.cache,s=t.length,l=Xf(n,s);xn(a,l)||(e.uniform1iv(this.addr,l),Sn(a,l));for(let u=0;u!==s;++u)n.setTexture2D(t[u]||qE,l[u])}function V3(e,t,n){const a=this.cache,s=t.length,l=Xf(n,s);xn(a,l)||(e.uniform1iv(this.addr,l),Sn(a,l));for(let u=0;u!==s;++u)n.setTexture3D(t[u]||KE,l[u])}function H3(e,t,n){const a=this.cache,s=t.length,l=Xf(n,s);xn(a,l)||(e.uniform1iv(this.addr,l),Sn(a,l));for(let u=0;u!==s;++u)n.setTextureCube(t[u]||ZE,l[u])}function G3(e,t,n){const a=this.cache,s=t.length,l=Xf(n,s);xn(a,l)||(e.uniform1iv(this.addr,l),Sn(a,l));for(let u=0;u!==s;++u)n.setTexture2DArray(t[u]||YE,l[u])}function k3(e){switch(e){case 5126:return b3;case 35664:return T3;case 35665:return A3;case 35666:return R3;case 35674:return C3;case 35675:return w3;case 35676:return D3;case 5124:case 35670:return L3;case 35667:case 35671:return U3;case 35668:case 35672:return P3;case 35669:case 35673:return N3;case 5125:return O3;case 36294:return I3;case 36295:return F3;case 36296:return B3;case 35678:case 36198:case 36298:case 36306:case 35682:return z3;case 35679:case 36299:case 36307:return V3;case 35680:case 36300:case 36308:case 36293:return H3;case 36289:case 36303:case 36311:case 36292:return G3}}class X3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=E3(n.type)}}class j3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=k3(n.type)}}class W3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const f=s[l];f.setValue(t,n[f.id],a)}}}const Bp=/(\w+)(\])?(\[|\.)?/g;function sS(e,t){e.seq.push(t),e.map[t.id]=t}function q3(e,t,n){const a=e.name,s=a.length;for(Bp.lastIndex=0;;){const l=Bp.exec(a),u=Bp.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===s){sS(n,p===void 0?new X3(f,e,t):new j3(f,e,t));break}else{let v=n.map[f];v===void 0&&(v=new W3(f),sS(n,v)),n=v}}}class Sf{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<a;++s){const l=t.getActiveUniform(n,s),u=t.getUniformLocation(n,l.name);q3(l,u,this)}}setValue(t,n,a,s){const l=this.map[n];l!==void 0&&l.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let l=0,u=n.length;l!==u;++l){const f=n[l],h=a[f.id];h.needsUpdate!==!1&&f.setValue(t,h.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,l=t.length;s!==l;++s){const u=t[s];u.id in n&&a.push(u)}return a}}function oS(e,t,n){const a=e.createShader(t);return e.shaderSource(a,n),e.compileShader(a),a}const Y3=37297;let K3=0;function Z3(e,t){const n=e.split(`
`),a=[],s=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let u=s;u<l;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const lS=new le;function Q3(e){we._getMatrix(lS,we.workingColorSpace,e);const t=`mat3( ${lS.elements.map(n=>n.toFixed(4))} )`;switch(we.getTransfer(e)){case wf:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function cS(e,t,n){const a=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(a&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+s+`

`+Z3(e.getShaderSource(t),u)}else return s}function $3(e,t){const n=Q3(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function J3(e,t){let n;switch(t){case rC:n="Linear";break;case sC:n="Reinhard";break;case oC:n="Cineon";break;case lC:n="ACESFilmic";break;case uC:n="AgX";break;case fC:n="Neutral";break;case cC:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const lf=new ot;function tL(){we.getLuminanceCoefficients(lf);const e=lf.x.toFixed(4),t=lf.y.toFixed(4),n=lf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eL(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vl).join(`
`)}function nL(e){const t=[];for(const n in e){const a=e[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function iL(e,t){const n={},a=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=e.getActiveAttrib(t,s),u=l.name;let f=1;l.type===e.FLOAT_MAT2&&(f=2),l.type===e.FLOAT_MAT3&&(f=3),l.type===e.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:e.getAttribLocation(t,u),locationSize:f}}return n}function Vl(e){return e!==""}function uS(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fS(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const aL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Km(e){return e.replace(aL,sL)}const rL=new Map;function sL(e,t){let n=ue[t];if(n===void 0){const a=rL.get(t);if(a!==void 0)n=ue[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Km(n)}const oL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hS(e){return e.replace(oL,lL)}function lL(e,t,n,a){let s="";for(let l=parseInt(t);l<parseInt(n);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function dS(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cL(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===vE?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===BR?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===ba&&(t="SHADOWMAP_TYPE_VSM"),t}function uL(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case To:case Ao:t="ENVMAP_TYPE_CUBE";break;case Hf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fL(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Ao:t="ENVMAP_MODE_REFRACTION";break}return t}function hL(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case _E:t="ENVMAP_BLENDING_MULTIPLY";break;case iC:t="ENVMAP_BLENDING_MIX";break;case aC:t="ENVMAP_BLENDING_ADD";break}return t}function dL(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function pL(e,t,n,a){const s=e.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=cL(n),p=uL(n),m=fL(n),v=hL(n),_=dL(n),x=eL(n),M=nL(l),b=s.createProgram();let S,y,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Vl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Vl).join(`
`),y.length>0&&(y+=`
`)):(S=[dS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vl).join(`
`),y=[dS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Er?"#define TONE_MAPPING":"",n.toneMapping!==Er?ue.tonemapping_pars_fragment:"",n.toneMapping!==Er?J3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,$3("linearToOutputTexel",n.outputColorSpace),tL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vl).join(`
`)),u=Km(u),u=uS(u,n),u=fS(u,n),f=Km(f),f=uS(f,n),f=fS(f,n),u=hS(u),f=hS(f),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===Ax?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ax?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=L+S+u,w=L+y+f,N=oS(s,s.VERTEX_SHADER,R),z=oS(s,s.FRAGMENT_SHADER,w);s.attachShader(b,N),s.attachShader(b,z),n.index0AttributeName!==void 0?s.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function I(G){if(e.debug.checkShaderErrors){const ct=s.getProgramInfoLog(b).trim(),lt=s.getShaderInfoLog(N).trim(),mt=s.getShaderInfoLog(z).trim();let dt=!0,B=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(dt=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,b,N,z);else{const j=cS(s,N,"vertex"),W=cS(s,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ct+`
`+j+`
`+W)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(lt===""||mt==="")&&(B=!1);B&&(G.diagnostics={runnable:dt,programLog:ct,vertexShader:{log:lt,prefix:S},fragmentShader:{log:mt,prefix:y}})}s.deleteShader(N),s.deleteShader(z),V=new Sf(s,b),U=iL(s,b)}let V;this.getUniforms=function(){return V===void 0&&I(this),V};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(b,Y3)),D},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=K3++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=z,this}let mL=0;class gL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new vL(t),n.set(t,a)),a}}class vL{constructor(t){this.id=mL++,this.code=t,this.usedTimes=0}}function _L(e,t,n,a,s,l,u){const f=new NE,h=new gL,p=new Set,m=[],v=s.logarithmicDepthBuffer,_=s.vertexTextures;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(U){return p.add(U),U===0?"uv":`uv${U}`}function S(U,D,G,ct,lt){const mt=ct.fog,dt=lt.geometry,B=U.isMeshStandardMaterial?ct.environment:null,j=(U.isMeshStandardMaterial?n:t).get(U.envMap||B),W=j&&j.mapping===Hf?j.image.height:null,Mt=M[U.type];U.precision!==null&&(x=s.getMaxPrecision(U.precision),x!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",x,"instead."));const P=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,tt=P!==void 0?P.length:0;let xt=0;dt.morphAttributes.position!==void 0&&(xt=1),dt.morphAttributes.normal!==void 0&&(xt=2),dt.morphAttributes.color!==void 0&&(xt=3);let Et,$,gt,St;if(Mt){const Ae=Xi[Mt];Et=Ae.vertexShader,$=Ae.fragmentShader}else Et=U.vertexShader,$=U.fragmentShader,h.update(U),gt=h.getVertexShaderID(U),St=h.getFragmentShaderID(U);const Ct=e.getRenderTarget(),It=e.state.buffers.depth.getReversed(),ce=lt.isInstancedMesh===!0,$t=lt.isBatchedMesh===!0,Xe=!!U.map,Ve=!!U.matcap,de=!!j,H=!!U.aoMap,Wn=!!U.lightMap,ye=!!U.bumpMap,re=!!U.normalMap,qt=!!U.displacementMap,Ne=!!U.emissiveMap,Xt=!!U.metalnessMap,O=!!U.roughnessMap,A=U.anisotropy>0,nt=U.clearcoat>0,yt=U.dispersion>0,bt=U.iridescence>0,ht=U.sheen>0,zt=U.transmission>0,wt=A&&!!U.anisotropyMap,Dt=nt&&!!U.clearcoatMap,xe=nt&&!!U.clearcoatNormalMap,Rt=nt&&!!U.clearcoatRoughnessMap,Ht=bt&&!!U.iridescenceMap,Zt=bt&&!!U.iridescenceThicknessMap,Jt=ht&&!!U.sheenColorMap,Ft=ht&&!!U.sheenRoughnessMap,fe=!!U.specularMap,ae=!!U.specularColorMap,Oe=!!U.specularIntensityMap,X=zt&&!!U.transmissionMap,Nt=zt&&!!U.thicknessMap,ut=!!U.gradientMap,vt=!!U.alphaMap,Bt=U.alphaTest>0,Ot=!!U.alphaHash,se=!!U.extensions;let je=Er;U.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(je=e.toneMapping);const un={shaderID:Mt,shaderType:U.type,shaderName:U.name,vertexShader:Et,fragmentShader:$,defines:U.defines,customVertexShaderID:gt,customFragmentShaderID:St,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:x,batching:$t,batchingColor:$t&&lt._colorsTexture!==null,instancing:ce,instancingColor:ce&&lt.instanceColor!==null,instancingMorph:ce&&lt.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Ct===null?e.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Ro,alphaToCoverage:!!U.alphaToCoverage,map:Xe,matcap:Ve,envMap:de,envMapMode:de&&j.mapping,envMapCubeUVHeight:W,aoMap:H,lightMap:Wn,bumpMap:ye,normalMap:re,displacementMap:_&&qt,emissiveMap:Ne,normalMapObjectSpace:re&&U.normalMapType===gC,normalMapTangentSpace:re&&U.normalMapType===mC,metalnessMap:Xt,roughnessMap:O,anisotropy:A,anisotropyMap:wt,clearcoat:nt,clearcoatMap:Dt,clearcoatNormalMap:xe,clearcoatRoughnessMap:Rt,dispersion:yt,iridescence:bt,iridescenceMap:Ht,iridescenceThicknessMap:Zt,sheen:ht,sheenColorMap:Jt,sheenRoughnessMap:Ft,specularMap:fe,specularColorMap:ae,specularIntensityMap:Oe,transmission:zt,transmissionMap:X,thicknessMap:Nt,gradientMap:ut,opaque:U.transparent===!1&&U.blending===So&&U.alphaToCoverage===!1,alphaMap:vt,alphaTest:Bt,alphaHash:Ot,combine:U.combine,mapUv:Xe&&b(U.map.channel),aoMapUv:H&&b(U.aoMap.channel),lightMapUv:Wn&&b(U.lightMap.channel),bumpMapUv:ye&&b(U.bumpMap.channel),normalMapUv:re&&b(U.normalMap.channel),displacementMapUv:qt&&b(U.displacementMap.channel),emissiveMapUv:Ne&&b(U.emissiveMap.channel),metalnessMapUv:Xt&&b(U.metalnessMap.channel),roughnessMapUv:O&&b(U.roughnessMap.channel),anisotropyMapUv:wt&&b(U.anisotropyMap.channel),clearcoatMapUv:Dt&&b(U.clearcoatMap.channel),clearcoatNormalMapUv:xe&&b(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&b(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&b(U.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&b(U.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&b(U.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&b(U.sheenRoughnessMap.channel),specularMapUv:fe&&b(U.specularMap.channel),specularColorMapUv:ae&&b(U.specularColorMap.channel),specularIntensityMapUv:Oe&&b(U.specularIntensityMap.channel),transmissionMapUv:X&&b(U.transmissionMap.channel),thicknessMapUv:Nt&&b(U.thicknessMap.channel),alphaMapUv:vt&&b(U.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(re||A),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!dt.attributes.uv&&(Xe||vt),fog:!!mt,useFog:U.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:It,skinning:lt.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:xt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:U.dithering,shadowMapEnabled:e.shadowMap.enabled&&G.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:Xe&&U.map.isVideoTexture===!0&&we.getTransfer(U.map.colorSpace)===ze,decodeVideoTextureEmissive:Ne&&U.emissiveMap.isVideoTexture===!0&&we.getTransfer(U.emissiveMap.colorSpace)===ze,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Ta,flipSided:U.side===ti,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:se&&U.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&U.extensions.multiDraw===!0||$t)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return un.vertexUv1s=p.has(1),un.vertexUv2s=p.has(2),un.vertexUv3s=p.has(3),p.clear(),un}function y(U){const D=[];if(U.shaderID?D.push(U.shaderID):(D.push(U.customVertexShaderID),D.push(U.customFragmentShaderID)),U.defines!==void 0)for(const G in U.defines)D.push(G),D.push(U.defines[G]);return U.isRawShaderMaterial===!1&&(L(D,U),R(D,U),D.push(e.outputColorSpace)),D.push(U.customProgramCacheKey),D.join()}function L(U,D){U.push(D.precision),U.push(D.outputColorSpace),U.push(D.envMapMode),U.push(D.envMapCubeUVHeight),U.push(D.mapUv),U.push(D.alphaMapUv),U.push(D.lightMapUv),U.push(D.aoMapUv),U.push(D.bumpMapUv),U.push(D.normalMapUv),U.push(D.displacementMapUv),U.push(D.emissiveMapUv),U.push(D.metalnessMapUv),U.push(D.roughnessMapUv),U.push(D.anisotropyMapUv),U.push(D.clearcoatMapUv),U.push(D.clearcoatNormalMapUv),U.push(D.clearcoatRoughnessMapUv),U.push(D.iridescenceMapUv),U.push(D.iridescenceThicknessMapUv),U.push(D.sheenColorMapUv),U.push(D.sheenRoughnessMapUv),U.push(D.specularMapUv),U.push(D.specularColorMapUv),U.push(D.specularIntensityMapUv),U.push(D.transmissionMapUv),U.push(D.thicknessMapUv),U.push(D.combine),U.push(D.fogExp2),U.push(D.sizeAttenuation),U.push(D.morphTargetsCount),U.push(D.morphAttributeCount),U.push(D.numDirLights),U.push(D.numPointLights),U.push(D.numSpotLights),U.push(D.numSpotLightMaps),U.push(D.numHemiLights),U.push(D.numRectAreaLights),U.push(D.numDirLightShadows),U.push(D.numPointLightShadows),U.push(D.numSpotLightShadows),U.push(D.numSpotLightShadowsWithMaps),U.push(D.numLightProbes),U.push(D.shadowMapType),U.push(D.toneMapping),U.push(D.numClippingPlanes),U.push(D.numClipIntersection),U.push(D.depthPacking)}function R(U,D){f.disableAll(),D.supportsVertexTextures&&f.enable(0),D.instancing&&f.enable(1),D.instancingColor&&f.enable(2),D.instancingMorph&&f.enable(3),D.matcap&&f.enable(4),D.envMap&&f.enable(5),D.normalMapObjectSpace&&f.enable(6),D.normalMapTangentSpace&&f.enable(7),D.clearcoat&&f.enable(8),D.iridescence&&f.enable(9),D.alphaTest&&f.enable(10),D.vertexColors&&f.enable(11),D.vertexAlphas&&f.enable(12),D.vertexUv1s&&f.enable(13),D.vertexUv2s&&f.enable(14),D.vertexUv3s&&f.enable(15),D.vertexTangents&&f.enable(16),D.anisotropy&&f.enable(17),D.alphaHash&&f.enable(18),D.batching&&f.enable(19),D.dispersion&&f.enable(20),D.batchingColor&&f.enable(21),U.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reverseDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),U.push(f.mask)}function w(U){const D=M[U.type];let G;if(D){const ct=Xi[D];G=qC.clone(ct.uniforms)}else G=U.uniforms;return G}function N(U,D){let G;for(let ct=0,lt=m.length;ct<lt;ct++){const mt=m[ct];if(mt.cacheKey===D){G=mt,++G.usedTimes;break}}return G===void 0&&(G=new pL(e,D,U,l),m.push(G)),G}function z(U){if(--U.usedTimes===0){const D=m.indexOf(U);m[D]=m[m.length-1],m.pop(),U.destroy()}}function I(U){h.remove(U)}function V(){h.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:w,acquireProgram:N,releaseProgram:z,releaseShaderCache:I,programs:m,dispose:V}}function yL(){let e=new WeakMap;function t(u){return e.has(u)}function n(u){let f=e.get(u);return f===void 0&&(f={},e.set(u,f)),f}function a(u){e.delete(u)}function s(u,f,h){e.get(u)[f]=h}function l(){e=new WeakMap}return{has:t,get:n,remove:a,update:s,dispose:l}}function xL(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function pS(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function mS(){const e=[];let t=0;const n=[],a=[],s=[];function l(){t=0,n.length=0,a.length=0,s.length=0}function u(v,_,x,M,b,S){let y=e[t];return y===void 0?(y={id:v.id,object:v,geometry:_,material:x,groupOrder:M,renderOrder:v.renderOrder,z:b,group:S},e[t]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=x,y.groupOrder=M,y.renderOrder=v.renderOrder,y.z=b,y.group=S),t++,y}function f(v,_,x,M,b,S){const y=u(v,_,x,M,b,S);x.transmission>0?a.push(y):x.transparent===!0?s.push(y):n.push(y)}function h(v,_,x,M,b,S){const y=u(v,_,x,M,b,S);x.transmission>0?a.unshift(y):x.transparent===!0?s.unshift(y):n.unshift(y)}function p(v,_){n.length>1&&n.sort(v||xL),a.length>1&&a.sort(_||pS),s.length>1&&s.sort(_||pS)}function m(){for(let v=t,_=e.length;v<_;v++){const x=e[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:s,init:l,push:f,unshift:h,finish:m,sort:p}}function SL(){let e=new WeakMap;function t(a,s){const l=e.get(a);let u;return l===void 0?(u=new mS,e.set(a,[u])):s>=l.length?(u=new mS,l.push(u)):u=l[s],u}function n(){e=new WeakMap}return{get:t,dispose:n}}function ML(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ot,color:new Pe};break;case"SpotLight":n={position:new ot,direction:new ot,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ot,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ot,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":n={color:new Pe,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return e[t.id]=n,n}}}function EL(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let bL=0;function TL(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function AL(e){const t=new ML,n=EL(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ot);const s=new ot,l=new cn,u=new cn;function f(p){let m=0,v=0,_=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let x=0,M=0,b=0,S=0,y=0,L=0,R=0,w=0,N=0,z=0,I=0;p.sort(TL);for(let U=0,D=p.length;U<D;U++){const G=p[U],ct=G.color,lt=G.intensity,mt=G.distance,dt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)m+=ct.r*lt,v+=ct.g*lt,_+=ct.b*lt;else if(G.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(G.sh.coefficients[B],lt);I++}else if(G.isDirectionalLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const j=G.shadow,W=n.get(G);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,a.directionalShadow[x]=W,a.directionalShadowMap[x]=dt,a.directionalShadowMatrix[x]=G.shadow.matrix,L++}a.directional[x]=B,x++}else if(G.isSpotLight){const B=t.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(ct).multiplyScalar(lt),B.distance=mt,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,a.spot[b]=B;const j=G.shadow;if(G.map&&(a.spotLightMap[N]=G.map,N++,j.updateMatrices(G),G.castShadow&&z++),a.spotLightMatrix[b]=j.matrix,G.castShadow){const W=n.get(G);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,a.spotShadow[b]=W,a.spotShadowMap[b]=dt,w++}b++}else if(G.isRectAreaLight){const B=t.get(G);B.color.copy(ct).multiplyScalar(lt),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),a.rectArea[S]=B,S++}else if(G.isPointLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const j=G.shadow,W=n.get(G);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,a.pointShadow[M]=W,a.pointShadowMap[M]=dt,a.pointShadowMatrix[M]=G.shadow.matrix,R++}a.point[M]=B,M++}else if(G.isHemisphereLight){const B=t.get(G);B.skyColor.copy(G.color).multiplyScalar(lt),B.groundColor.copy(G.groundColor).multiplyScalar(lt),a.hemi[y]=B,y++}}S>0&&(e.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pt.LTC_FLOAT_1,a.rectAreaLTC2=Pt.LTC_FLOAT_2):(a.rectAreaLTC1=Pt.LTC_HALF_1,a.rectAreaLTC2=Pt.LTC_HALF_2)),a.ambient[0]=m,a.ambient[1]=v,a.ambient[2]=_;const V=a.hash;(V.directionalLength!==x||V.pointLength!==M||V.spotLength!==b||V.rectAreaLength!==S||V.hemiLength!==y||V.numDirectionalShadows!==L||V.numPointShadows!==R||V.numSpotShadows!==w||V.numSpotMaps!==N||V.numLightProbes!==I)&&(a.directional.length=x,a.spot.length=b,a.rectArea.length=S,a.point.length=M,a.hemi.length=y,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=R,a.pointShadowMap.length=R,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=R,a.spotLightMatrix.length=w+N-z,a.spotLightMap.length=N,a.numSpotLightShadowsWithMaps=z,a.numLightProbes=I,V.directionalLength=x,V.pointLength=M,V.spotLength=b,V.rectAreaLength=S,V.hemiLength=y,V.numDirectionalShadows=L,V.numPointShadows=R,V.numSpotShadows=w,V.numSpotMaps=N,V.numLightProbes=I,a.version=bL++)}function h(p,m){let v=0,_=0,x=0,M=0,b=0;const S=m.matrixWorldInverse;for(let y=0,L=p.length;y<L;y++){const R=p[y];if(R.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(S),v++}else if(R.isSpotLight){const w=a.spot[x];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(S),x++}else if(R.isRectAreaLight){const w=a.rectArea[M];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(S),u.identity(),l.copy(R.matrixWorld),l.premultiply(S),u.extractRotation(l),w.halfWidth.set(R.width*.5,0,0),w.halfHeight.set(0,R.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),M++}else if(R.isPointLight){const w=a.point[_];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(S),_++}else if(R.isHemisphereLight){const w=a.hemi[b];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(S),b++}}}return{setup:f,setupView:h,state:a}}function gS(e){const t=new AL(e),n=[],a=[];function s(m){p.camera=m,n.length=0,a.length=0}function l(m){n.push(m)}function u(m){a.push(m)}function f(){t.setup(n)}function h(m){t.setupView(n,m)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function RL(e){let t=new WeakMap;function n(s,l=0){const u=t.get(s);let f;return u===void 0?(f=new gS(e),t.set(s,[f])):l>=u.length?(f=new gS(e),u.push(f)):f=u[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const CL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DL(e,t,n){let a=new GE;const s=new ke,l=new ke,u=new ln,f=new iw({depthPacking:pC}),h=new aw,p={},m=n.maxTextureSize,v={[br]:ti,[ti]:br,[Ta]:Ta},_=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:CL,fragmentShader:wL}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new Ba;M.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ca(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vE;let y=this.type;this.render=function(z,I,V){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const U=e.getRenderTarget(),D=e.getActiveCubeFace(),G=e.getActiveMipmapLevel(),ct=e.state;ct.setBlending(Mr),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const lt=y!==ba&&this.type===ba,mt=y===ba&&this.type!==ba;for(let dt=0,B=z.length;dt<B;dt++){const j=z[dt],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const Mt=W.getFrameExtents();if(s.multiply(Mt),l.copy(W.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/Mt.x),s.x=l.x*Mt.x,W.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/Mt.y),s.y=l.y*Mt.y,W.mapSize.y=l.y)),W.map===null||lt===!0||mt===!0){const tt=this.type!==ba?{minFilter:Ii,magFilter:Ii}:{};W.map!==null&&W.map.dispose(),W.map=new vs(s.x,s.y,tt),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}e.setRenderTarget(W.map),e.clear();const P=W.getViewportCount();for(let tt=0;tt<P;tt++){const xt=W.getViewport(tt);u.set(l.x*xt.x,l.y*xt.y,l.x*xt.z,l.y*xt.w),ct.viewport(u),W.updateMatrices(j,tt),a=W.getFrustum(),w(I,V,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===ba&&L(W,V),W.needsUpdate=!1}y=this.type,S.needsUpdate=!1,e.setRenderTarget(U,D,G)};function L(z,I){const V=t.update(b);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,x.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new vs(s.x,s.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,e.setRenderTarget(z.mapPass),e.clear(),e.renderBufferDirect(I,null,V,_,b,null),x.uniforms.shadow_pass.value=z.mapPass.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,e.setRenderTarget(z.map),e.clear(),e.renderBufferDirect(I,null,V,x,b,null)}function R(z,I,V,U){let D=null;const G=V.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)D=G;else if(D=V.isPointLight===!0?h:f,e.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ct=D.uuid,lt=I.uuid;let mt=p[ct];mt===void 0&&(mt={},p[ct]=mt);let dt=mt[lt];dt===void 0&&(dt=D.clone(),mt[lt]=dt,I.addEventListener("dispose",N)),D=dt}if(D.visible=I.visible,D.wireframe=I.wireframe,U===ba?D.side=I.shadowSide!==null?I.shadowSide:I.side:D.side=I.shadowSide!==null?I.shadowSide:v[I.side],D.alphaMap=I.alphaMap,D.alphaTest=I.alphaTest,D.map=I.map,D.clipShadows=I.clipShadows,D.clippingPlanes=I.clippingPlanes,D.clipIntersection=I.clipIntersection,D.displacementMap=I.displacementMap,D.displacementScale=I.displacementScale,D.displacementBias=I.displacementBias,D.wireframeLinewidth=I.wireframeLinewidth,D.linewidth=I.linewidth,V.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ct=e.properties.get(D);ct.light=V}return D}function w(z,I,V,U,D){if(z.visible===!1)return;if(z.layers.test(I.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&D===ba)&&(!z.frustumCulled||a.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,z.matrixWorld);const lt=t.update(z),mt=z.material;if(Array.isArray(mt)){const dt=lt.groups;for(let B=0,j=dt.length;B<j;B++){const W=dt[B],Mt=mt[W.materialIndex];if(Mt&&Mt.visible){const P=R(z,Mt,U,D);z.onBeforeShadow(e,z,I,V,lt,P,W),e.renderBufferDirect(V,null,lt,P,z,W),z.onAfterShadow(e,z,I,V,lt,P,W)}}}else if(mt.visible){const dt=R(z,mt,U,D);z.onBeforeShadow(e,z,I,V,lt,dt,null),e.renderBufferDirect(V,null,lt,dt,z,null),z.onAfterShadow(e,z,I,V,lt,dt,null)}}const ct=z.children;for(let lt=0,mt=ct.length;lt<mt;lt++)w(ct[lt],I,V,U,D)}function N(z){z.target.removeEventListener("dispose",N);for(const V in p){const U=p[V],D=z.target.uuid;D in U&&(U[D].dispose(),delete U[D])}}}const LL={[um]:fm,[hm]:mm,[dm]:gm,[bo]:pm,[fm]:um,[mm]:hm,[gm]:dm,[pm]:bo};function UL(e,t){function n(){let X=!1;const Nt=new ln;let ut=null;const vt=new ln(0,0,0,0);return{setMask:function(Bt){ut!==Bt&&!X&&(e.colorMask(Bt,Bt,Bt,Bt),ut=Bt)},setLocked:function(Bt){X=Bt},setClear:function(Bt,Ot,se,je,un){un===!0&&(Bt*=je,Ot*=je,se*=je),Nt.set(Bt,Ot,se,je),vt.equals(Nt)===!1&&(e.clearColor(Bt,Ot,se,je),vt.copy(Nt))},reset:function(){X=!1,ut=null,vt.set(-1,0,0,0)}}}function a(){let X=!1,Nt=!1,ut=null,vt=null,Bt=null;return{setReversed:function(Ot){if(Nt!==Ot){const se=t.get("EXT_clip_control");Ot?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),Nt=Ot;const je=Bt;Bt=null,this.setClear(je)}},getReversed:function(){return Nt},setTest:function(Ot){Ot?Ct(e.DEPTH_TEST):It(e.DEPTH_TEST)},setMask:function(Ot){ut!==Ot&&!X&&(e.depthMask(Ot),ut=Ot)},setFunc:function(Ot){if(Nt&&(Ot=LL[Ot]),vt!==Ot){switch(Ot){case um:e.depthFunc(e.NEVER);break;case fm:e.depthFunc(e.ALWAYS);break;case hm:e.depthFunc(e.LESS);break;case bo:e.depthFunc(e.LEQUAL);break;case dm:e.depthFunc(e.EQUAL);break;case pm:e.depthFunc(e.GEQUAL);break;case mm:e.depthFunc(e.GREATER);break;case gm:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}vt=Ot}},setLocked:function(Ot){X=Ot},setClear:function(Ot){Bt!==Ot&&(Nt&&(Ot=1-Ot),e.clearDepth(Ot),Bt=Ot)},reset:function(){X=!1,ut=null,vt=null,Bt=null,Nt=!1}}}function s(){let X=!1,Nt=null,ut=null,vt=null,Bt=null,Ot=null,se=null,je=null,un=null;return{setTest:function(Ae){X||(Ae?Ct(e.STENCIL_TEST):It(e.STENCIL_TEST))},setMask:function(Ae){Nt!==Ae&&!X&&(e.stencilMask(Ae),Nt=Ae)},setFunc:function(Ae,ii,Mn){(ut!==Ae||vt!==ii||Bt!==Mn)&&(e.stencilFunc(Ae,ii,Mn),ut=Ae,vt=ii,Bt=Mn)},setOp:function(Ae,ii,Mn){(Ot!==Ae||se!==ii||je!==Mn)&&(e.stencilOp(Ae,ii,Mn),Ot=Ae,se=ii,je=Mn)},setLocked:function(Ae){X=Ae},setClear:function(Ae){un!==Ae&&(e.clearStencil(Ae),un=Ae)},reset:function(){X=!1,Nt=null,ut=null,vt=null,Bt=null,Ot=null,se=null,je=null,un=null}}}const l=new n,u=new a,f=new s,h=new WeakMap,p=new WeakMap;let m={},v={},_=new WeakMap,x=[],M=null,b=!1,S=null,y=null,L=null,R=null,w=null,N=null,z=null,I=new Pe(0,0,0),V=0,U=!1,D=null,G=null,ct=null,lt=null,mt=null;const dt=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,j=0;const W=e.getParameter(e.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=j>=2);let Mt=null,P={};const tt=e.getParameter(e.SCISSOR_BOX),xt=e.getParameter(e.VIEWPORT),Et=new ln().fromArray(tt),$=new ln().fromArray(xt);function gt(X,Nt,ut,vt){const Bt=new Uint8Array(4),Ot=e.createTexture();e.bindTexture(X,Ot),e.texParameteri(X,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(X,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let se=0;se<ut;se++)X===e.TEXTURE_3D||X===e.TEXTURE_2D_ARRAY?e.texImage3D(Nt,0,e.RGBA,1,1,vt,0,e.RGBA,e.UNSIGNED_BYTE,Bt):e.texImage2D(Nt+se,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Bt);return Ot}const St={};St[e.TEXTURE_2D]=gt(e.TEXTURE_2D,e.TEXTURE_2D,1),St[e.TEXTURE_CUBE_MAP]=gt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[e.TEXTURE_2D_ARRAY]=gt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),St[e.TEXTURE_3D]=gt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Ct(e.DEPTH_TEST),u.setFunc(bo),ye(!1),re(xx),Ct(e.CULL_FACE),H(Mr);function Ct(X){m[X]!==!0&&(e.enable(X),m[X]=!0)}function It(X){m[X]!==!1&&(e.disable(X),m[X]=!1)}function ce(X,Nt){return v[X]!==Nt?(e.bindFramebuffer(X,Nt),v[X]=Nt,X===e.DRAW_FRAMEBUFFER&&(v[e.FRAMEBUFFER]=Nt),X===e.FRAMEBUFFER&&(v[e.DRAW_FRAMEBUFFER]=Nt),!0):!1}function $t(X,Nt){let ut=x,vt=!1;if(X){ut=_.get(Nt),ut===void 0&&(ut=[],_.set(Nt,ut));const Bt=X.textures;if(ut.length!==Bt.length||ut[0]!==e.COLOR_ATTACHMENT0){for(let Ot=0,se=Bt.length;Ot<se;Ot++)ut[Ot]=e.COLOR_ATTACHMENT0+Ot;ut.length=Bt.length,vt=!0}}else ut[0]!==e.BACK&&(ut[0]=e.BACK,vt=!0);vt&&e.drawBuffers(ut)}function Xe(X){return M!==X?(e.useProgram(X),M=X,!0):!1}const Ve={[os]:e.FUNC_ADD,[VR]:e.FUNC_SUBTRACT,[HR]:e.FUNC_REVERSE_SUBTRACT};Ve[GR]=e.MIN,Ve[kR]=e.MAX;const de={[XR]:e.ZERO,[jR]:e.ONE,[WR]:e.SRC_COLOR,[lm]:e.SRC_ALPHA,[$R]:e.SRC_ALPHA_SATURATE,[ZR]:e.DST_COLOR,[YR]:e.DST_ALPHA,[qR]:e.ONE_MINUS_SRC_COLOR,[cm]:e.ONE_MINUS_SRC_ALPHA,[QR]:e.ONE_MINUS_DST_COLOR,[KR]:e.ONE_MINUS_DST_ALPHA,[JR]:e.CONSTANT_COLOR,[tC]:e.ONE_MINUS_CONSTANT_COLOR,[eC]:e.CONSTANT_ALPHA,[nC]:e.ONE_MINUS_CONSTANT_ALPHA};function H(X,Nt,ut,vt,Bt,Ot,se,je,un,Ae){if(X===Mr){b===!0&&(It(e.BLEND),b=!1);return}if(b===!1&&(Ct(e.BLEND),b=!0),X!==zR){if(X!==S||Ae!==U){if((y!==os||w!==os)&&(e.blendEquation(e.FUNC_ADD),y=os,w=os),Ae)switch(X){case So:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Sx:e.blendFunc(e.ONE,e.ONE);break;case Mx:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ex:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case So:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Sx:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Mx:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ex:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,R=null,N=null,z=null,I.set(0,0,0),V=0,S=X,U=Ae}return}Bt=Bt||Nt,Ot=Ot||ut,se=se||vt,(Nt!==y||Bt!==w)&&(e.blendEquationSeparate(Ve[Nt],Ve[Bt]),y=Nt,w=Bt),(ut!==L||vt!==R||Ot!==N||se!==z)&&(e.blendFuncSeparate(de[ut],de[vt],de[Ot],de[se]),L=ut,R=vt,N=Ot,z=se),(je.equals(I)===!1||un!==V)&&(e.blendColor(je.r,je.g,je.b,un),I.copy(je),V=un),S=X,U=!1}function Wn(X,Nt){X.side===Ta?It(e.CULL_FACE):Ct(e.CULL_FACE);let ut=X.side===ti;Nt&&(ut=!ut),ye(ut),X.blending===So&&X.transparent===!1?H(Mr):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const vt=X.stencilWrite;f.setTest(vt),vt&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ne(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ct(e.SAMPLE_ALPHA_TO_COVERAGE):It(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(X){D!==X&&(X?e.frontFace(e.CW):e.frontFace(e.CCW),D=X)}function re(X){X!==IR?(Ct(e.CULL_FACE),X!==G&&(X===xx?e.cullFace(e.BACK):X===FR?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):It(e.CULL_FACE),G=X}function qt(X){X!==ct&&(B&&e.lineWidth(X),ct=X)}function Ne(X,Nt,ut){X?(Ct(e.POLYGON_OFFSET_FILL),(lt!==Nt||mt!==ut)&&(e.polygonOffset(Nt,ut),lt=Nt,mt=ut)):It(e.POLYGON_OFFSET_FILL)}function Xt(X){X?Ct(e.SCISSOR_TEST):It(e.SCISSOR_TEST)}function O(X){X===void 0&&(X=e.TEXTURE0+dt-1),Mt!==X&&(e.activeTexture(X),Mt=X)}function A(X,Nt,ut){ut===void 0&&(Mt===null?ut=e.TEXTURE0+dt-1:ut=Mt);let vt=P[ut];vt===void 0&&(vt={type:void 0,texture:void 0},P[ut]=vt),(vt.type!==X||vt.texture!==Nt)&&(Mt!==ut&&(e.activeTexture(ut),Mt=ut),e.bindTexture(X,Nt||St[X]),vt.type=X,vt.texture=Nt)}function nt(){const X=P[Mt];X!==void 0&&X.type!==void 0&&(e.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function yt(){try{e.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{e.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{e.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{e.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{e.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{e.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{e.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{e.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ht(){try{e.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{e.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Jt(X){Et.equals(X)===!1&&(e.scissor(X.x,X.y,X.z,X.w),Et.copy(X))}function Ft(X){$.equals(X)===!1&&(e.viewport(X.x,X.y,X.z,X.w),$.copy(X))}function fe(X,Nt){let ut=p.get(Nt);ut===void 0&&(ut=new WeakMap,p.set(Nt,ut));let vt=ut.get(X);vt===void 0&&(vt=e.getUniformBlockIndex(Nt,X.name),ut.set(X,vt))}function ae(X,Nt){const vt=p.get(Nt).get(X);h.get(Nt)!==vt&&(e.uniformBlockBinding(Nt,vt,X.__bindingPointIndex),h.set(Nt,vt))}function Oe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),u.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),m={},Mt=null,P={},v={},_=new WeakMap,x=[],M=null,b=!1,S=null,y=null,L=null,R=null,w=null,N=null,z=null,I=new Pe(0,0,0),V=0,U=!1,D=null,G=null,ct=null,lt=null,mt=null,Et.set(0,0,e.canvas.width,e.canvas.height),$.set(0,0,e.canvas.width,e.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:Ct,disable:It,bindFramebuffer:ce,drawBuffers:$t,useProgram:Xe,setBlending:H,setMaterial:Wn,setFlipSided:ye,setCullFace:re,setLineWidth:qt,setPolygonOffset:Ne,setScissorTest:Xt,activeTexture:O,bindTexture:A,unbindTexture:nt,compressedTexImage2D:yt,compressedTexImage3D:bt,texImage2D:Ht,texImage3D:Zt,updateUBOMapping:fe,uniformBlockBinding:ae,texStorage2D:xe,texStorage3D:Rt,texSubImage2D:ht,texSubImage3D:zt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Dt,scissor:Jt,viewport:Ft,reset:Oe}}function PL(e,t,n,a,s,l,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ke,m=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,A){return x?new OffscreenCanvas(O,A):Lf("canvas")}function b(O,A,nt){let yt=1;const bt=Xt(O);if((bt.width>nt||bt.height>nt)&&(yt=nt/Math.max(bt.width,bt.height)),yt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ht=Math.floor(yt*bt.width),zt=Math.floor(yt*bt.height);v===void 0&&(v=M(ht,zt));const wt=A?M(ht,zt):v;return wt.width=ht,wt.height=zt,wt.getContext("2d").drawImage(O,0,0,ht,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+ht+"x"+zt+")."),wt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),O;return O}function S(O){return O.generateMipmaps}function y(O){e.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?e.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function R(O,A,nt,yt,bt=!1){if(O!==null){if(e[O]!==void 0)return e[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ht=A;if(A===e.RED&&(nt===e.FLOAT&&(ht=e.R32F),nt===e.HALF_FLOAT&&(ht=e.R16F),nt===e.UNSIGNED_BYTE&&(ht=e.R8)),A===e.RED_INTEGER&&(nt===e.UNSIGNED_BYTE&&(ht=e.R8UI),nt===e.UNSIGNED_SHORT&&(ht=e.R16UI),nt===e.UNSIGNED_INT&&(ht=e.R32UI),nt===e.BYTE&&(ht=e.R8I),nt===e.SHORT&&(ht=e.R16I),nt===e.INT&&(ht=e.R32I)),A===e.RG&&(nt===e.FLOAT&&(ht=e.RG32F),nt===e.HALF_FLOAT&&(ht=e.RG16F),nt===e.UNSIGNED_BYTE&&(ht=e.RG8)),A===e.RG_INTEGER&&(nt===e.UNSIGNED_BYTE&&(ht=e.RG8UI),nt===e.UNSIGNED_SHORT&&(ht=e.RG16UI),nt===e.UNSIGNED_INT&&(ht=e.RG32UI),nt===e.BYTE&&(ht=e.RG8I),nt===e.SHORT&&(ht=e.RG16I),nt===e.INT&&(ht=e.RG32I)),A===e.RGB_INTEGER&&(nt===e.UNSIGNED_BYTE&&(ht=e.RGB8UI),nt===e.UNSIGNED_SHORT&&(ht=e.RGB16UI),nt===e.UNSIGNED_INT&&(ht=e.RGB32UI),nt===e.BYTE&&(ht=e.RGB8I),nt===e.SHORT&&(ht=e.RGB16I),nt===e.INT&&(ht=e.RGB32I)),A===e.RGBA_INTEGER&&(nt===e.UNSIGNED_BYTE&&(ht=e.RGBA8UI),nt===e.UNSIGNED_SHORT&&(ht=e.RGBA16UI),nt===e.UNSIGNED_INT&&(ht=e.RGBA32UI),nt===e.BYTE&&(ht=e.RGBA8I),nt===e.SHORT&&(ht=e.RGBA16I),nt===e.INT&&(ht=e.RGBA32I)),A===e.RGB&&nt===e.UNSIGNED_INT_5_9_9_9_REV&&(ht=e.RGB9_E5),A===e.RGBA){const zt=bt?wf:we.getTransfer(yt);nt===e.FLOAT&&(ht=e.RGBA32F),nt===e.HALF_FLOAT&&(ht=e.RGBA16F),nt===e.UNSIGNED_BYTE&&(ht=zt===ze?e.SRGB8_ALPHA8:e.RGBA8),nt===e.UNSIGNED_SHORT_4_4_4_4&&(ht=e.RGBA4),nt===e.UNSIGNED_SHORT_5_5_5_1&&(ht=e.RGB5_A1)}return(ht===e.R16F||ht===e.R32F||ht===e.RG16F||ht===e.RG32F||ht===e.RGBA16F||ht===e.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function w(O,A){let nt;return O?A===null||A===gs||A===Jl?nt=e.DEPTH24_STENCIL8:A===Aa?nt=e.DEPTH32F_STENCIL8:A===$l&&(nt=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===gs||A===Jl?nt=e.DEPTH_COMPONENT24:A===Aa?nt=e.DEPTH_COMPONENT32F:A===$l&&(nt=e.DEPTH_COMPONENT16),nt}function N(O,A){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ii&&O.minFilter!==Wi?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function z(O){const A=O.target;A.removeEventListener("dispose",z),V(A),A.isVideoTexture&&m.delete(A)}function I(O){const A=O.target;A.removeEventListener("dispose",I),D(A)}function V(O){const A=a.get(O);if(A.__webglInit===void 0)return;const nt=O.source,yt=_.get(nt);if(yt){const bt=yt[A.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&U(O),Object.keys(yt).length===0&&_.delete(nt)}a.remove(O)}function U(O){const A=a.get(O);e.deleteTexture(A.__webglTexture);const nt=O.source,yt=_.get(nt);delete yt[A.__cacheKey],u.memory.textures--}function D(O){const A=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(A.__webglFramebuffer[yt]))for(let bt=0;bt<A.__webglFramebuffer[yt].length;bt++)e.deleteFramebuffer(A.__webglFramebuffer[yt][bt]);else e.deleteFramebuffer(A.__webglFramebuffer[yt]);A.__webglDepthbuffer&&e.deleteRenderbuffer(A.__webglDepthbuffer[yt])}else{if(Array.isArray(A.__webglFramebuffer))for(let yt=0;yt<A.__webglFramebuffer.length;yt++)e.deleteFramebuffer(A.__webglFramebuffer[yt]);else e.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&e.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&e.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let yt=0;yt<A.__webglColorRenderbuffer.length;yt++)A.__webglColorRenderbuffer[yt]&&e.deleteRenderbuffer(A.__webglColorRenderbuffer[yt]);A.__webglDepthRenderbuffer&&e.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const nt=O.textures;for(let yt=0,bt=nt.length;yt<bt;yt++){const ht=a.get(nt[yt]);ht.__webglTexture&&(e.deleteTexture(ht.__webglTexture),u.memory.textures--),a.remove(nt[yt])}a.remove(O)}let G=0;function ct(){G=0}function lt(){const O=G;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),G+=1,O}function mt(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function dt(O,A){const nt=a.get(O);if(O.isVideoTexture&&qt(O),O.isRenderTargetTexture===!1&&O.version>0&&nt.__version!==O.version){const yt=O.image;if(yt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(nt,O,A);return}}n.bindTexture(e.TEXTURE_2D,nt.__webglTexture,e.TEXTURE0+A)}function B(O,A){const nt=a.get(O);if(O.version>0&&nt.__version!==O.version){$(nt,O,A);return}n.bindTexture(e.TEXTURE_2D_ARRAY,nt.__webglTexture,e.TEXTURE0+A)}function j(O,A){const nt=a.get(O);if(O.version>0&&nt.__version!==O.version){$(nt,O,A);return}n.bindTexture(e.TEXTURE_3D,nt.__webglTexture,e.TEXTURE0+A)}function W(O,A){const nt=a.get(O);if(O.version>0&&nt.__version!==O.version){gt(nt,O,A);return}n.bindTexture(e.TEXTURE_CUBE_MAP,nt.__webglTexture,e.TEXTURE0+A)}const Mt={[ym]:e.REPEAT,[cs]:e.CLAMP_TO_EDGE,[xm]:e.MIRRORED_REPEAT},P={[Ii]:e.NEAREST,[hC]:e.NEAREST_MIPMAP_NEAREST,[Bu]:e.NEAREST_MIPMAP_LINEAR,[Wi]:e.LINEAR,[cp]:e.LINEAR_MIPMAP_NEAREST,[us]:e.LINEAR_MIPMAP_LINEAR},tt={[vC]:e.NEVER,[EC]:e.ALWAYS,[_C]:e.LESS,[DE]:e.LEQUAL,[yC]:e.EQUAL,[MC]:e.GEQUAL,[xC]:e.GREATER,[SC]:e.NOTEQUAL};function xt(O,A){if(A.type===Aa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Wi||A.magFilter===cp||A.magFilter===Bu||A.magFilter===us||A.minFilter===Wi||A.minFilter===cp||A.minFilter===Bu||A.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(O,e.TEXTURE_WRAP_S,Mt[A.wrapS]),e.texParameteri(O,e.TEXTURE_WRAP_T,Mt[A.wrapT]),(O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY)&&e.texParameteri(O,e.TEXTURE_WRAP_R,Mt[A.wrapR]),e.texParameteri(O,e.TEXTURE_MAG_FILTER,P[A.magFilter]),e.texParameteri(O,e.TEXTURE_MIN_FILTER,P[A.minFilter]),A.compareFunction&&(e.texParameteri(O,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(O,e.TEXTURE_COMPARE_FUNC,tt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ii||A.minFilter!==Bu&&A.minFilter!==us||A.type===Aa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");e.texParameterf(O,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function Et(O,A){let nt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",z));const yt=A.source;let bt=_.get(yt);bt===void 0&&(bt={},_.set(yt,bt));const ht=mt(A);if(ht!==O.__cacheKey){bt[ht]===void 0&&(bt[ht]={texture:e.createTexture(),usedTimes:0},u.memory.textures++,nt=!0),bt[ht].usedTimes++;const zt=bt[O.__cacheKey];zt!==void 0&&(bt[O.__cacheKey].usedTimes--,zt.usedTimes===0&&U(A)),O.__cacheKey=ht,O.__webglTexture=bt[ht].texture}return nt}function $(O,A,nt){let yt=e.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(yt=e.TEXTURE_2D_ARRAY),A.isData3DTexture&&(yt=e.TEXTURE_3D);const bt=Et(O,A),ht=A.source;n.bindTexture(yt,O.__webglTexture,e.TEXTURE0+nt);const zt=a.get(ht);if(ht.version!==zt.__version||bt===!0){n.activeTexture(e.TEXTURE0+nt);const wt=we.getPrimaries(we.workingColorSpace),Dt=A.colorSpace===Sr?null:we.getPrimaries(A.colorSpace),xe=A.colorSpace===Sr||wt===Dt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Rt=b(A.image,!1,s.maxTextureSize);Rt=Ne(A,Rt);const Ht=l.convert(A.format,A.colorSpace),Zt=l.convert(A.type);let Jt=R(A.internalFormat,Ht,Zt,A.colorSpace,A.isVideoTexture);xt(yt,A);let Ft;const fe=A.mipmaps,ae=A.isVideoTexture!==!0,Oe=zt.__version===void 0||bt===!0,X=ht.dataReady,Nt=N(A,Rt);if(A.isDepthTexture)Jt=w(A.format===ec,A.type),Oe&&(ae?n.texStorage2D(e.TEXTURE_2D,1,Jt,Rt.width,Rt.height):n.texImage2D(e.TEXTURE_2D,0,Jt,Rt.width,Rt.height,0,Ht,Zt,null));else if(A.isDataTexture)if(fe.length>0){ae&&Oe&&n.texStorage2D(e.TEXTURE_2D,Nt,Jt,fe[0].width,fe[0].height);for(let ut=0,vt=fe.length;ut<vt;ut++)Ft=fe[ut],ae?X&&n.texSubImage2D(e.TEXTURE_2D,ut,0,0,Ft.width,Ft.height,Ht,Zt,Ft.data):n.texImage2D(e.TEXTURE_2D,ut,Jt,Ft.width,Ft.height,0,Ht,Zt,Ft.data);A.generateMipmaps=!1}else ae?(Oe&&n.texStorage2D(e.TEXTURE_2D,Nt,Jt,Rt.width,Rt.height),X&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,Rt.width,Rt.height,Ht,Zt,Rt.data)):n.texImage2D(e.TEXTURE_2D,0,Jt,Rt.width,Rt.height,0,Ht,Zt,Rt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ae&&Oe&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Nt,Jt,fe[0].width,fe[0].height,Rt.depth);for(let ut=0,vt=fe.length;ut<vt;ut++)if(Ft=fe[ut],A.format!==Oi)if(Ht!==null)if(ae){if(X)if(A.layerUpdates.size>0){const Bt=Wx(Ft.width,Ft.height,A.format,A.type);for(const Ot of A.layerUpdates){const se=Ft.data.subarray(Ot*Bt/Ft.data.BYTES_PER_ELEMENT,(Ot+1)*Bt/Ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ut,0,0,Ot,Ft.width,Ft.height,1,Ht,se)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ut,0,0,0,Ft.width,Ft.height,Rt.depth,Ht,Ft.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ut,Jt,Ft.width,Ft.height,Rt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?X&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,ut,0,0,0,Ft.width,Ft.height,Rt.depth,Ht,Zt,Ft.data):n.texImage3D(e.TEXTURE_2D_ARRAY,ut,Jt,Ft.width,Ft.height,Rt.depth,0,Ht,Zt,Ft.data)}else{ae&&Oe&&n.texStorage2D(e.TEXTURE_2D,Nt,Jt,fe[0].width,fe[0].height);for(let ut=0,vt=fe.length;ut<vt;ut++)Ft=fe[ut],A.format!==Oi?Ht!==null?ae?X&&n.compressedTexSubImage2D(e.TEXTURE_2D,ut,0,0,Ft.width,Ft.height,Ht,Ft.data):n.compressedTexImage2D(e.TEXTURE_2D,ut,Jt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?X&&n.texSubImage2D(e.TEXTURE_2D,ut,0,0,Ft.width,Ft.height,Ht,Zt,Ft.data):n.texImage2D(e.TEXTURE_2D,ut,Jt,Ft.width,Ft.height,0,Ht,Zt,Ft.data)}else if(A.isDataArrayTexture)if(ae){if(Oe&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Nt,Jt,Rt.width,Rt.height,Rt.depth),X)if(A.layerUpdates.size>0){const ut=Wx(Rt.width,Rt.height,A.format,A.type);for(const vt of A.layerUpdates){const Bt=Rt.data.subarray(vt*ut/Rt.data.BYTES_PER_ELEMENT,(vt+1)*ut/Rt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,vt,Rt.width,Rt.height,1,Ht,Zt,Bt)}A.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ht,Zt,Rt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Jt,Rt.width,Rt.height,Rt.depth,0,Ht,Zt,Rt.data);else if(A.isData3DTexture)ae?(Oe&&n.texStorage3D(e.TEXTURE_3D,Nt,Jt,Rt.width,Rt.height,Rt.depth),X&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ht,Zt,Rt.data)):n.texImage3D(e.TEXTURE_3D,0,Jt,Rt.width,Rt.height,Rt.depth,0,Ht,Zt,Rt.data);else if(A.isFramebufferTexture){if(Oe)if(ae)n.texStorage2D(e.TEXTURE_2D,Nt,Jt,Rt.width,Rt.height);else{let ut=Rt.width,vt=Rt.height;for(let Bt=0;Bt<Nt;Bt++)n.texImage2D(e.TEXTURE_2D,Bt,Jt,ut,vt,0,Ht,Zt,null),ut>>=1,vt>>=1}}else if(fe.length>0){if(ae&&Oe){const ut=Xt(fe[0]);n.texStorage2D(e.TEXTURE_2D,Nt,Jt,ut.width,ut.height)}for(let ut=0,vt=fe.length;ut<vt;ut++)Ft=fe[ut],ae?X&&n.texSubImage2D(e.TEXTURE_2D,ut,0,0,Ht,Zt,Ft):n.texImage2D(e.TEXTURE_2D,ut,Jt,Ht,Zt,Ft);A.generateMipmaps=!1}else if(ae){if(Oe){const ut=Xt(Rt);n.texStorage2D(e.TEXTURE_2D,Nt,Jt,ut.width,ut.height)}X&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,Ht,Zt,Rt)}else n.texImage2D(e.TEXTURE_2D,0,Jt,Ht,Zt,Rt);S(A)&&y(yt),zt.__version=ht.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function gt(O,A,nt){if(A.image.length!==6)return;const yt=Et(O,A),bt=A.source;n.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+nt);const ht=a.get(bt);if(bt.version!==ht.__version||yt===!0){n.activeTexture(e.TEXTURE0+nt);const zt=we.getPrimaries(we.workingColorSpace),wt=A.colorSpace===Sr?null:we.getPrimaries(A.colorSpace),Dt=A.colorSpace===Sr||zt===wt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const xe=A.isCompressedTexture||A.image[0].isCompressedTexture,Rt=A.image[0]&&A.image[0].isDataTexture,Ht=[];for(let vt=0;vt<6;vt++)!xe&&!Rt?Ht[vt]=b(A.image[vt],!0,s.maxCubemapSize):Ht[vt]=Rt?A.image[vt].image:A.image[vt],Ht[vt]=Ne(A,Ht[vt]);const Zt=Ht[0],Jt=l.convert(A.format,A.colorSpace),Ft=l.convert(A.type),fe=R(A.internalFormat,Jt,Ft,A.colorSpace),ae=A.isVideoTexture!==!0,Oe=ht.__version===void 0||yt===!0,X=bt.dataReady;let Nt=N(A,Zt);xt(e.TEXTURE_CUBE_MAP,A);let ut;if(xe){ae&&Oe&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Nt,fe,Zt.width,Zt.height);for(let vt=0;vt<6;vt++){ut=Ht[vt].mipmaps;for(let Bt=0;Bt<ut.length;Bt++){const Ot=ut[Bt];A.format!==Oi?Jt!==null?ae?X&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Bt,0,0,Ot.width,Ot.height,Jt,Ot.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Bt,fe,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?X&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Bt,0,0,Ot.width,Ot.height,Jt,Ft,Ot.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Bt,fe,Ot.width,Ot.height,0,Jt,Ft,Ot.data)}}}else{if(ut=A.mipmaps,ae&&Oe){ut.length>0&&Nt++;const vt=Xt(Ht[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Nt,fe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Rt){ae?X&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ht[vt].width,Ht[vt].height,Jt,Ft,Ht[vt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,fe,Ht[vt].width,Ht[vt].height,0,Jt,Ft,Ht[vt].data);for(let Bt=0;Bt<ut.length;Bt++){const se=ut[Bt].image[vt].image;ae?X&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Bt+1,0,0,se.width,se.height,Jt,Ft,se.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Bt+1,fe,se.width,se.height,0,Jt,Ft,se.data)}}else{ae?X&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Jt,Ft,Ht[vt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,fe,Jt,Ft,Ht[vt]);for(let Bt=0;Bt<ut.length;Bt++){const Ot=ut[Bt];ae?X&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Bt+1,0,0,Jt,Ft,Ot.image[vt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Bt+1,fe,Jt,Ft,Ot.image[vt])}}}S(A)&&y(e.TEXTURE_CUBE_MAP),ht.__version=bt.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function St(O,A,nt,yt,bt,ht){const zt=l.convert(nt.format,nt.colorSpace),wt=l.convert(nt.type),Dt=R(nt.internalFormat,zt,wt,nt.colorSpace),xe=a.get(A),Rt=a.get(nt);if(Rt.__renderTarget=A,!xe.__hasExternalTextures){const Ht=Math.max(1,A.width>>ht),Zt=Math.max(1,A.height>>ht);bt===e.TEXTURE_3D||bt===e.TEXTURE_2D_ARRAY?n.texImage3D(bt,ht,Dt,Ht,Zt,A.depth,0,zt,wt,null):n.texImage2D(bt,ht,Dt,Ht,Zt,0,zt,wt,null)}n.bindFramebuffer(e.FRAMEBUFFER,O),re(A)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,yt,bt,Rt.__webglTexture,0,ye(A)):(bt===e.TEXTURE_2D||bt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,yt,bt,Rt.__webglTexture,ht),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ct(O,A,nt){if(e.bindRenderbuffer(e.RENDERBUFFER,O),A.depthBuffer){const yt=A.depthTexture,bt=yt&&yt.isDepthTexture?yt.type:null,ht=w(A.stencilBuffer,bt),zt=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,wt=ye(A);re(A)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,wt,ht,A.width,A.height):nt?e.renderbufferStorageMultisample(e.RENDERBUFFER,wt,ht,A.width,A.height):e.renderbufferStorage(e.RENDERBUFFER,ht,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,zt,e.RENDERBUFFER,O)}else{const yt=A.textures;for(let bt=0;bt<yt.length;bt++){const ht=yt[bt],zt=l.convert(ht.format,ht.colorSpace),wt=l.convert(ht.type),Dt=R(ht.internalFormat,zt,wt,ht.colorSpace),xe=ye(A);nt&&re(A)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe,Dt,A.width,A.height):re(A)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe,Dt,A.width,A.height):e.renderbufferStorage(e.RENDERBUFFER,Dt,A.width,A.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function It(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=a.get(A.depthTexture);yt.__renderTarget=A,(!yt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),dt(A.depthTexture,0);const bt=yt.__webglTexture,ht=ye(A);if(A.depthTexture.format===tc)re(A)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,bt,0,ht):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,bt,0);else if(A.depthTexture.format===ec)re(A)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,bt,0,ht):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function ce(O){const A=a.get(O),nt=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const yt=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),yt){const bt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,yt.removeEventListener("dispose",bt)};yt.addEventListener("dispose",bt),A.__depthDisposeCallback=bt}A.__boundDepthTexture=yt}if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");It(A.__webglFramebuffer,O)}else if(nt){A.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(n.bindFramebuffer(e.FRAMEBUFFER,A.__webglFramebuffer[yt]),A.__webglDepthbuffer[yt]===void 0)A.__webglDepthbuffer[yt]=e.createRenderbuffer(),Ct(A.__webglDepthbuffer[yt],O,!1);else{const bt=O.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer[yt];e.bindRenderbuffer(e.RENDERBUFFER,ht),e.framebufferRenderbuffer(e.FRAMEBUFFER,bt,e.RENDERBUFFER,ht)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=e.createRenderbuffer(),Ct(A.__webglDepthbuffer,O,!1);else{const yt=O.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,bt=A.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,bt),e.framebufferRenderbuffer(e.FRAMEBUFFER,yt,e.RENDERBUFFER,bt)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function $t(O,A,nt){const yt=a.get(O);A!==void 0&&St(yt.__webglFramebuffer,O,O.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),nt!==void 0&&ce(O)}function Xe(O){const A=O.texture,nt=a.get(O),yt=a.get(A);O.addEventListener("dispose",I);const bt=O.textures,ht=O.isWebGLCubeRenderTarget===!0,zt=bt.length>1;if(zt||(yt.__webglTexture===void 0&&(yt.__webglTexture=e.createTexture()),yt.__version=A.version,u.memory.textures++),ht){nt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0){nt.__webglFramebuffer[wt]=[];for(let Dt=0;Dt<A.mipmaps.length;Dt++)nt.__webglFramebuffer[wt][Dt]=e.createFramebuffer()}else nt.__webglFramebuffer[wt]=e.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){nt.__webglFramebuffer=[];for(let wt=0;wt<A.mipmaps.length;wt++)nt.__webglFramebuffer[wt]=e.createFramebuffer()}else nt.__webglFramebuffer=e.createFramebuffer();if(zt)for(let wt=0,Dt=bt.length;wt<Dt;wt++){const xe=a.get(bt[wt]);xe.__webglTexture===void 0&&(xe.__webglTexture=e.createTexture(),u.memory.textures++)}if(O.samples>0&&re(O)===!1){nt.__webglMultisampledFramebuffer=e.createFramebuffer(),nt.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let wt=0;wt<bt.length;wt++){const Dt=bt[wt];nt.__webglColorRenderbuffer[wt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,nt.__webglColorRenderbuffer[wt]);const xe=l.convert(Dt.format,Dt.colorSpace),Rt=l.convert(Dt.type),Ht=R(Dt.internalFormat,xe,Rt,Dt.colorSpace,O.isXRRenderTarget===!0),Zt=ye(O);e.renderbufferStorageMultisample(e.RENDERBUFFER,Zt,Ht,O.width,O.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+wt,e.RENDERBUFFER,nt.__webglColorRenderbuffer[wt])}e.bindRenderbuffer(e.RENDERBUFFER,null),O.depthBuffer&&(nt.__webglDepthRenderbuffer=e.createRenderbuffer(),Ct(nt.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ht){n.bindTexture(e.TEXTURE_CUBE_MAP,yt.__webglTexture),xt(e.TEXTURE_CUBE_MAP,A);for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Dt=0;Dt<A.mipmaps.length;Dt++)St(nt.__webglFramebuffer[wt][Dt],O,A,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Dt);else St(nt.__webglFramebuffer[wt],O,A,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);S(A)&&y(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(zt){for(let wt=0,Dt=bt.length;wt<Dt;wt++){const xe=bt[wt],Rt=a.get(xe);n.bindTexture(e.TEXTURE_2D,Rt.__webglTexture),xt(e.TEXTURE_2D,xe),St(nt.__webglFramebuffer,O,xe,e.COLOR_ATTACHMENT0+wt,e.TEXTURE_2D,0),S(xe)&&y(e.TEXTURE_2D)}n.unbindTexture()}else{let wt=e.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(wt=O.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(wt,yt.__webglTexture),xt(wt,A),A.mipmaps&&A.mipmaps.length>0)for(let Dt=0;Dt<A.mipmaps.length;Dt++)St(nt.__webglFramebuffer[Dt],O,A,e.COLOR_ATTACHMENT0,wt,Dt);else St(nt.__webglFramebuffer,O,A,e.COLOR_ATTACHMENT0,wt,0);S(A)&&y(wt),n.unbindTexture()}O.depthBuffer&&ce(O)}function Ve(O){const A=O.textures;for(let nt=0,yt=A.length;nt<yt;nt++){const bt=A[nt];if(S(bt)){const ht=L(O),zt=a.get(bt).__webglTexture;n.bindTexture(ht,zt),y(ht),n.unbindTexture()}}}const de=[],H=[];function Wn(O){if(O.samples>0){if(re(O)===!1){const A=O.textures,nt=O.width,yt=O.height;let bt=e.COLOR_BUFFER_BIT;const ht=O.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,zt=a.get(O),wt=A.length>1;if(wt)for(let Dt=0;Dt<A.length;Dt++)n.bindFramebuffer(e.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,zt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Dt=0;Dt<A.length;Dt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(bt|=e.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(bt|=e.STENCIL_BUFFER_BIT)),wt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,zt.__webglColorRenderbuffer[Dt]);const xe=a.get(A[Dt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,xe,0)}e.blitFramebuffer(0,0,nt,yt,0,0,nt,yt,bt,e.NEAREST),h===!0&&(de.length=0,H.length=0,de.push(e.COLOR_ATTACHMENT0+Dt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(de.push(ht),H.push(ht),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,H)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,de))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),wt)for(let Dt=0;Dt<A.length;Dt++){n.bindFramebuffer(e.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.RENDERBUFFER,zt.__webglColorRenderbuffer[Dt]);const xe=a.get(A[Dt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,zt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.TEXTURE_2D,xe,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&h){const A=O.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[A])}}}function ye(O){return Math.min(s.maxSamples,O.samples)}function re(O){const A=a.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function qt(O){const A=u.render.frame;m.get(O)!==A&&(m.set(O,A),O.update())}function Ne(O,A){const nt=O.colorSpace,yt=O.format,bt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||nt!==Ro&&nt!==Sr&&(we.getTransfer(nt)===ze?(yt!==Oi||bt!==La)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),A}function Xt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=ct,this.setTexture2D=dt,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=$t,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Wn,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=St,this.useMultisampledRTT=re}function NL(e,t){function n(a,s=Sr){let l;const u=we.getTransfer(s);if(a===La)return e.UNSIGNED_BYTE;if(a===Bg)return e.UNSIGNED_SHORT_4_4_4_4;if(a===zg)return e.UNSIGNED_SHORT_5_5_5_1;if(a===ME)return e.UNSIGNED_INT_5_9_9_9_REV;if(a===xE)return e.BYTE;if(a===SE)return e.SHORT;if(a===$l)return e.UNSIGNED_SHORT;if(a===Fg)return e.INT;if(a===gs)return e.UNSIGNED_INT;if(a===Aa)return e.FLOAT;if(a===dc)return e.HALF_FLOAT;if(a===EE)return e.ALPHA;if(a===bE)return e.RGB;if(a===Oi)return e.RGBA;if(a===TE)return e.LUMINANCE;if(a===AE)return e.LUMINANCE_ALPHA;if(a===tc)return e.DEPTH_COMPONENT;if(a===ec)return e.DEPTH_STENCIL;if(a===RE)return e.RED;if(a===Vg)return e.RED_INTEGER;if(a===CE)return e.RG;if(a===Hg)return e.RG_INTEGER;if(a===Gg)return e.RGBA_INTEGER;if(a===mf||a===gf||a===vf||a===_f)if(u===ze)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===mf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===gf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===vf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===_f)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===mf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===gf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===vf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===_f)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Sm||a===Mm||a===Em||a===bm)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Sm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Mm)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Em)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===bm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Tm||a===Am||a===Rm)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Tm||a===Am)return u===ze?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Rm)return u===ze?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Cm||a===wm||a===Dm||a===Lm||a===Um||a===Pm||a===Nm||a===Om||a===Im||a===Fm||a===Bm||a===zm||a===Vm||a===Hm)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Cm)return u===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===wm)return u===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Dm)return u===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Lm)return u===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Um)return u===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Pm)return u===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Nm)return u===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Om)return u===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Im)return u===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Fm)return u===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Bm)return u===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===zm)return u===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Vm)return u===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Hm)return u===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===yf||a===Gm||a===km)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===yf)return u===ze?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Gm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===km)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===wE||a===Xm||a===jm||a===Wm)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===yf)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Xm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===jm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Wm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Jl?e.UNSIGNED_INT_24_8:e[a]!==void 0?e[a]:null}return{convert:n}}const OL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const s=new ei,l=t.properties.get(s);l.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Tr({vertexShader:OL,fragmentShader:IL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ca(new kf(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BL extends Uo{constructor(t,n){super();const a=this;let s=null,l=1,u=null,f="local-floor",h=1,p=null,m=null,v=null,_=null,x=null,M=null;const b=new FL,S=n.getContextAttributes();let y=null,L=null;const R=[],w=[],N=new ke;let z=null;const I=new Pi;I.viewport=new ln;const V=new Pi;V.viewport=new ln;const U=[I,V],D=new rw;let G=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let gt=R[$];return gt===void 0&&(gt=new Lp,R[$]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function($){let gt=R[$];return gt===void 0&&(gt=new Lp,R[$]=gt),gt.getGripSpace()},this.getHand=function($){let gt=R[$];return gt===void 0&&(gt=new Lp,R[$]=gt),gt.getHandSpace()};function lt($){const gt=w.indexOf($.inputSource);if(gt===-1)return;const St=R[gt];St!==void 0&&(St.update($.inputSource,$.frame,p||u),St.dispatchEvent({type:$.type,data:$.inputSource}))}function mt(){s.removeEventListener("select",lt),s.removeEventListener("selectstart",lt),s.removeEventListener("selectend",lt),s.removeEventListener("squeeze",lt),s.removeEventListener("squeezestart",lt),s.removeEventListener("squeezeend",lt),s.removeEventListener("end",mt),s.removeEventListener("inputsourceschange",dt);for(let $=0;$<R.length;$++){const gt=w[$];gt!==null&&(w[$]=null,R[$].disconnect(gt))}G=null,ct=null,b.reset(),t.setRenderTarget(y),x=null,_=null,v=null,s=null,L=null,Et.stop(),a.isPresenting=!1,t.setPixelRatio(z),t.setSize(N.width,N.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){l=$,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){f=$,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",lt),s.addEventListener("selectstart",lt),s.addEventListener("selectend",lt),s.addEventListener("squeeze",lt),s.addEventListener("squeezestart",lt),s.addEventListener("squeezeend",lt),s.addEventListener("end",mt),s.addEventListener("inputsourceschange",dt),S.xrCompatible!==!0&&await n.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Ct=null,It=null;S.depth&&(It=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,St=S.stencil?ec:tc,Ct=S.stencil?Jl:gs);const ce={colorFormat:n.RGBA8,depthFormat:It,scaleFactor:l};v=new XRWebGLBinding(s,n),_=v.createProjectionLayer(ce),s.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),L=new vs(_.textureWidth,_.textureHeight,{format:Oi,type:La,depthTexture:new XE(_.textureWidth,_.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const St={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(s,n,St),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new vs(x.framebufferWidth,x.framebufferHeight,{format:Oi,type:La,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await s.requestReferenceSpace(f),Et.setContext(s),Et.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function dt($){for(let gt=0;gt<$.removed.length;gt++){const St=$.removed[gt],Ct=w.indexOf(St);Ct>=0&&(w[Ct]=null,R[Ct].disconnect(St))}for(let gt=0;gt<$.added.length;gt++){const St=$.added[gt];let Ct=w.indexOf(St);if(Ct===-1){for(let ce=0;ce<R.length;ce++)if(ce>=w.length){w.push(St),Ct=ce;break}else if(w[ce]===null){w[ce]=St,Ct=ce;break}if(Ct===-1)break}const It=R[Ct];It&&It.connect(St)}}const B=new ot,j=new ot;function W($,gt,St){B.setFromMatrixPosition(gt.matrixWorld),j.setFromMatrixPosition(St.matrixWorld);const Ct=B.distanceTo(j),It=gt.projectionMatrix.elements,ce=St.projectionMatrix.elements,$t=It[14]/(It[10]-1),Xe=It[14]/(It[10]+1),Ve=(It[9]+1)/It[5],de=(It[9]-1)/It[5],H=(It[8]-1)/It[0],Wn=(ce[8]+1)/ce[0],ye=$t*H,re=$t*Wn,qt=Ct/(-H+Wn),Ne=qt*-H;if(gt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ne),$.translateZ(qt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),It[10]===-1)$.projectionMatrix.copy(gt.projectionMatrix),$.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Xt=$t+qt,O=Xe+qt,A=ye-Ne,nt=re+(Ct-Ne),yt=Ve*Xe/O*Xt,bt=de*Xe/O*Xt;$.projectionMatrix.makePerspective(A,nt,yt,bt,Xt,O),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Mt($,gt){gt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(gt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let gt=$.near,St=$.far;b.texture!==null&&(b.depthNear>0&&(gt=b.depthNear),b.depthFar>0&&(St=b.depthFar)),D.near=V.near=I.near=gt,D.far=V.far=I.far=St,(G!==D.near||ct!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),G=D.near,ct=D.far),I.layers.mask=$.layers.mask|2,V.layers.mask=$.layers.mask|4,D.layers.mask=I.layers.mask|V.layers.mask;const Ct=$.parent,It=D.cameras;Mt(D,Ct);for(let ce=0;ce<It.length;ce++)Mt(It[ce],Ct);It.length===2?W(D,I,V):D.projectionMatrix.copy(I.projectionMatrix),P($,D,Ct)};function P($,gt,St){St===null?$.matrix.copy(gt.matrixWorld):($.matrix.copy(St.matrixWorld),$.matrix.invert(),$.matrix.multiply(gt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(gt.projectionMatrix),$.projectionMatrixInverse.copy(gt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=qm*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(_===null&&x===null))return h},this.setFoveation=function($){h=$,_!==null&&(_.fixedFoveation=$),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=$)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(D)};let tt=null;function xt($,gt){if(m=gt.getViewerPose(p||u),M=gt,m!==null){const St=m.views;x!==null&&(t.setRenderTargetFramebuffer(L,x.framebuffer),t.setRenderTarget(L));let Ct=!1;St.length!==D.cameras.length&&(D.cameras.length=0,Ct=!0);for(let $t=0;$t<St.length;$t++){const Xe=St[$t];let Ve=null;if(x!==null)Ve=x.getViewport(Xe);else{const H=v.getViewSubImage(_,Xe);Ve=H.viewport,$t===0&&(t.setRenderTargetTextures(L,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(L))}let de=U[$t];de===void 0&&(de=new Pi,de.layers.enable($t),de.viewport=new ln,U[$t]=de),de.matrix.fromArray(Xe.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(Xe.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),$t===0&&(D.matrix.copy(de.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ct===!0&&D.cameras.push(de)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){const $t=v.getDepthInformation(St[0]);$t&&$t.isValid&&$t.texture&&b.init(t,$t,s.renderState)}}for(let St=0;St<R.length;St++){const Ct=w[St],It=R[St];Ct!==null&&It!==void 0&&It.update(Ct,gt,p||u)}tt&&tt($,gt),gt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:gt}),M=null}const Et=new WE;Et.setAnimationLoop(xt),this.setAnimationLoop=function($){tt=$},this.dispose=function(){}}}const ns=new Ua,zL=new cn;function VL(e,t){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,zE(e)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,L,R,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),v(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y)):y.isMeshStandardMaterial?(l(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,w)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),b(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?h(S,y,L,R):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ti&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ti&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=t.get(y),R=L.envMap,w=L.envMapRotation;R&&(S.envMap.value=R,ns.copy(w),ns.x*=-1,ns.y*=-1,ns.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),S.envMapRotation.value.setFromMatrix4(zL.makeRotationFromEuler(ns)),S.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,L,R){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=R*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ti&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function b(S,y){const L=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function HL(e,t,n,a){let s={},l={},u=[];const f=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,R){const w=R.program;a.uniformBlockBinding(L,w)}function p(L,R){let w=s[L.id];w===void 0&&(M(L),w=m(L),s[L.id]=w,L.addEventListener("dispose",S));const N=R.program;a.updateUBOMapping(L,N);const z=t.render.frame;l[L.id]!==z&&(_(L),l[L.id]=z)}function m(L){const R=v();L.__bindingPointIndex=R;const w=e.createBuffer(),N=L.__size,z=L.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,N,z),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,R,w),w}function v(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const R=s[L.id],w=L.uniforms,N=L.__cache;e.bindBuffer(e.UNIFORM_BUFFER,R);for(let z=0,I=w.length;z<I;z++){const V=Array.isArray(w[z])?w[z]:[w[z]];for(let U=0,D=V.length;U<D;U++){const G=V[U];if(x(G,z,U,N)===!0){const ct=G.__offset,lt=Array.isArray(G.value)?G.value:[G.value];let mt=0;for(let dt=0;dt<lt.length;dt++){const B=lt[dt],j=b(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,e.bufferSubData(e.UNIFORM_BUFFER,ct+mt,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,mt),mt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,ct,G.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function x(L,R,w,N){const z=L.value,I=R+"_"+w;if(N[I]===void 0)return typeof z=="number"||typeof z=="boolean"?N[I]=z:N[I]=z.clone(),!0;{const V=N[I];if(typeof z=="number"||typeof z=="boolean"){if(V!==z)return N[I]=z,!0}else if(V.equals(z)===!1)return V.copy(z),!0}return!1}function M(L){const R=L.uniforms;let w=0;const N=16;for(let I=0,V=R.length;I<V;I++){const U=Array.isArray(R[I])?R[I]:[R[I]];for(let D=0,G=U.length;D<G;D++){const ct=U[D],lt=Array.isArray(ct.value)?ct.value:[ct.value];for(let mt=0,dt=lt.length;mt<dt;mt++){const B=lt[mt],j=b(B),W=w%N,Mt=W%j.boundary,P=W+Mt;w+=Mt,P!==0&&N-P<j.storage&&(w+=N-P),ct.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=w,w+=j.storage}}}const z=w%N;return z>0&&(w+=N-z),L.__size=w,L.__cache={},this}function b(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),R}function S(L){const R=L.target;R.removeEventListener("dispose",S);const w=u.indexOf(R.__bindingPointIndex);u.splice(w,1),e.deleteBuffer(s[R.id]),delete s[R.id],delete l[R.id]}function y(){for(const L in s)e.deleteBuffer(s[L]);u=[],s={},l={}}return{bind:h,update:p,dispose:y}}class GL{constructor(t={}){const{canvas:n=TC(),context:a=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),b=new Int32Array(4);let S=null,y=null;const L=[],R=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let N=!1;this._outputColorSpace=bi;let z=0,I=0,V=null,U=-1,D=null;const G=new ln,ct=new ln;let lt=null;const mt=new Pe(0);let dt=0,B=n.width,j=n.height,W=1,Mt=null,P=null;const tt=new ln(0,0,B,j),xt=new ln(0,0,B,j);let Et=!1;const $=new GE;let gt=!1,St=!1;const Ct=new cn,It=new cn,ce=new ot,$t=new ln,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function de(){return V===null?W:1}let H=a;function Wn(C,Y){return n.getContext(C,Y)}try{const C={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ig}`),n.addEventListener("webglcontextlost",vt,!1),n.addEventListener("webglcontextrestored",Bt,!1),n.addEventListener("webglcontextcreationerror",Ot,!1),H===null){const Y="webgl2";if(H=Wn(Y,C),H===null)throw Wn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ye,re,qt,Ne,Xt,O,A,nt,yt,bt,ht,zt,wt,Dt,xe,Rt,Ht,Zt,Jt,Ft,fe,ae,Oe,X;function Nt(){ye=new $D(H),ye.init(),ae=new NL(H,ye),re=new jD(H,ye,t,ae),qt=new UL(H,ye),re.reverseDepthBuffer&&_&&qt.buffers.depth.setReversed(!0),Ne=new e3(H),Xt=new yL,O=new PL(H,ye,qt,Xt,re,ae,Ne),A=new qD(w),nt=new QD(w),yt=new ow(H),Oe=new kD(H,yt),bt=new JD(H,yt,Ne,Oe),ht=new i3(H,bt,yt,Ne),Jt=new n3(H,re,O),Rt=new WD(Xt),zt=new _L(w,A,nt,ye,re,Oe,Rt),wt=new VL(w,Xt),Dt=new SL,xe=new RL(ye),Zt=new GD(w,A,nt,qt,ht,x,h),Ht=new DL(w,ht,re),X=new HL(H,Ne,re,qt),Ft=new XD(H,ye,Ne),fe=new t3(H,ye,Ne),Ne.programs=zt.programs,w.capabilities=re,w.extensions=ye,w.properties=Xt,w.renderLists=Dt,w.shadowMap=Ht,w.state=qt,w.info=Ne}Nt();const ut=new BL(w,H);this.xr=ut,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ye.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ye.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(B,j,!1))},this.getSize=function(C){return C.set(B,j)},this.setSize=function(C,Y,rt=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,j=Y,n.width=Math.floor(C*W),n.height=Math.floor(Y*W),rt===!0&&(n.style.width=C+"px",n.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(B*W,j*W).floor()},this.setDrawingBufferSize=function(C,Y,rt){B=C,j=Y,W=rt,n.width=Math.floor(C*rt),n.height=Math.floor(Y*rt),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(tt)},this.setViewport=function(C,Y,rt,st){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,Y,rt,st),qt.viewport(G.copy(tt).multiplyScalar(W).round())},this.getScissor=function(C){return C.copy(xt)},this.setScissor=function(C,Y,rt,st){C.isVector4?xt.set(C.x,C.y,C.z,C.w):xt.set(C,Y,rt,st),qt.scissor(ct.copy(xt).multiplyScalar(W).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(C){qt.setScissorTest(Et=C)},this.setOpaqueSort=function(C){Mt=C},this.setTransparentSort=function(C){P=C},this.getClearColor=function(C){return C.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,rt=!0){let st=0;if(C){let Z=!1;if(V!==null){const Tt=V.texture.format;Z=Tt===Gg||Tt===Hg||Tt===Vg}if(Z){const Tt=V.texture.type,Lt=Tt===La||Tt===gs||Tt===$l||Tt===Jl||Tt===Bg||Tt===zg,Ut=Zt.getClearColor(),Vt=Zt.getClearAlpha(),ee=Ut.r,Yt=Ut.g,Wt=Ut.b;Lt?(M[0]=ee,M[1]=Yt,M[2]=Wt,M[3]=Vt,H.clearBufferuiv(H.COLOR,0,M)):(b[0]=ee,b[1]=Yt,b[2]=Wt,b[3]=Vt,H.clearBufferiv(H.COLOR,0,b))}else st|=H.COLOR_BUFFER_BIT}Y&&(st|=H.DEPTH_BUFFER_BIT),rt&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",vt,!1),n.removeEventListener("webglcontextrestored",Bt,!1),n.removeEventListener("webglcontextcreationerror",Ot,!1),Zt.dispose(),Dt.dispose(),xe.dispose(),Xt.dispose(),A.dispose(),nt.dispose(),ht.dispose(),Oe.dispose(),X.dispose(),zt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",mn),ut.removeEventListener("sessionend",Cn),qn.stop()};function vt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=Ne.autoReset,Y=Ht.enabled,rt=Ht.autoUpdate,st=Ht.needsUpdate,Z=Ht.type;Nt(),Ne.autoReset=C,Ht.enabled=Y,Ht.autoUpdate=rt,Ht.needsUpdate=st,Ht.type=Z}function Ot(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function se(C){const Y=C.target;Y.removeEventListener("dispose",se),je(Y)}function je(C){un(C),Xt.remove(C)}function un(C){const Y=Xt.get(C).programs;Y!==void 0&&(Y.forEach(function(rt){zt.releaseProgram(rt)}),C.isShaderMaterial&&zt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,rt,st,Z,Tt){Y===null&&(Y=Xe);const Lt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ut=Nr(C,Y,rt,st,Z);qt.setMaterial(st,Lt);let Vt=rt.index,ee=1;if(st.wireframe===!0){if(Vt=bt.getWireframeAttribute(rt),Vt===void 0)return;ee=2}const Yt=rt.drawRange,Wt=rt.attributes.position;let me=Yt.start*ee,Re=(Yt.start+Yt.count)*ee;Tt!==null&&(me=Math.max(me,Tt.start*ee),Re=Math.min(Re,(Tt.start+Tt.count)*ee)),Vt!==null?(me=Math.max(me,0),Re=Math.min(Re,Vt.count)):Wt!=null&&(me=Math.max(me,0),Re=Math.min(Re,Wt.count));const Ze=Re-me;if(Ze<0||Ze===1/0)return;Oe.setup(Z,st,Ut,rt,Vt);let Se,Me=Ft;if(Vt!==null&&(Se=yt.get(Vt),Me=fe,Me.setIndex(Se)),Z.isMesh)st.wireframe===!0?(qt.setLineWidth(st.wireframeLinewidth*de()),Me.setMode(H.LINES)):Me.setMode(H.TRIANGLES);else if(Z.isLine){let Kt=st.linewidth;Kt===void 0&&(Kt=1),qt.setLineWidth(Kt*de()),Z.isLineSegments?Me.setMode(H.LINES):Z.isLineLoop?Me.setMode(H.LINE_LOOP):Me.setMode(H.LINE_STRIP)}else Z.isPoints?Me.setMode(H.POINTS):Z.isSprite&&Me.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)xf("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Me.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Me.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,tn=Z._multiDrawCounts,Te=Z._multiDrawCount,Nn=Vt?yt.get(Vt).bytesPerElement:1,Xa=Xt.get(st).currentProgram.getUniforms();for(let We=0;We<Te;We++)Xa.setValue(H,"_gl_DrawID",We),Me.render(Kt[We]/Nn,tn[We])}else if(Z.isInstancedMesh)Me.renderInstances(me,Ze,Z.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,tn=Math.min(rt.instanceCount,Kt);Me.renderInstances(me,Ze,tn)}else Me.render(me,Ze)};function Ae(C,Y,rt){C.transparent===!0&&C.side===Ta&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,Ga(C,Y,rt),C.side=br,C.needsUpdate=!0,Ga(C,Y,rt),C.side=Ta):Ga(C,Y,rt)}this.compile=function(C,Y,rt=null){rt===null&&(rt=C),y=xe.get(rt),y.init(Y),R.push(y),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),C!==rt&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),y.setupLights();const st=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){const Ut=Tt[Lt];Ae(Ut,rt,Z),st.add(Ut)}else Ae(Tt,rt,Z),st.add(Tt)}),y=R.pop(),st},this.compileAsync=function(C,Y,rt=null){const st=this.compile(C,Y,rt);return new Promise(Z=>{function Tt(){if(st.forEach(function(Lt){Xt.get(Lt).currentProgram.isReady()&&st.delete(Lt)}),st.size===0){Z(C);return}setTimeout(Tt,10)}ye.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let ii=null;function Mn(C){ii&&ii(C)}function mn(){qn.stop()}function Cn(){qn.start()}const qn=new WE;qn.setAnimationLoop(Mn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(C){ii=C,ut.setAnimationLoop(C),C===null?qn.stop():qn.start()},ut.addEventListener("sessionstart",mn),ut.addEventListener("sessionend",Cn),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(Y),Y=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,Y,V),y=xe.get(C,R.length),y.init(Y),R.push(y),It.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),$.setFromProjectionMatrix(It),St=this.localClippingEnabled,gt=Rt.init(this.clippingPlanes,St),S=Dt.get(C,L.length),S.init(),L.push(S),ut.enabled===!0&&ut.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&Ur(Tt,Y,-1/0,w.sortObjects)}Ur(C,Y,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(Mt,P),Ve=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Ve&&Zt.addToRenderList(S,C),this.info.render.frame++,gt===!0&&Rt.beginShadows();const rt=y.state.shadowsArray;Ht.render(rt,C,Y),gt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=S.opaque,Z=S.transmissive;if(y.setupLights(),Y.isArrayCamera){const Tt=Y.cameras;if(Z.length>0)for(let Lt=0,Ut=Tt.length;Lt<Ut;Lt++){const Vt=Tt[Lt];wc(st,Z,C,Vt)}Ve&&Zt.render(C);for(let Lt=0,Ut=Tt.length;Lt<Ut;Lt++){const Vt=Tt[Lt];Cc(S,C,Vt,Vt.viewport)}}else Z.length>0&&wc(st,Z,C,Y),Ve&&Zt.render(C),Cc(S,C,Y);V!==null&&I===0&&(O.updateMultisampleRenderTarget(V),O.updateRenderTargetMipmap(V)),C.isScene===!0&&C.onAfterRender(w,C,Y),Oe.resetDefaultState(),U=-1,D=null,R.pop(),R.length>0?(y=R[R.length-1],gt===!0&&Rt.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Ur(C,Y,rt,st){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){st&&$t.setFromMatrixPosition(C.matrixWorld).applyMatrix4(It);const Lt=ht.update(C),Ut=C.material;Ut.visible&&S.push(C,Lt,Ut,rt,$t.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){const Lt=ht.update(C),Ut=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$t.copy(C.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),$t.copy(Lt.boundingSphere.center)),$t.applyMatrix4(C.matrixWorld).applyMatrix4(It)),Array.isArray(Ut)){const Vt=Lt.groups;for(let ee=0,Yt=Vt.length;ee<Yt;ee++){const Wt=Vt[ee],me=Ut[Wt.materialIndex];me&&me.visible&&S.push(C,Lt,me,rt,$t.z,Wt)}}else Ut.visible&&S.push(C,Lt,Ut,rt,$t.z,null)}}const Tt=C.children;for(let Lt=0,Ut=Tt.length;Lt<Ut;Lt++)Ur(Tt[Lt],Y,rt,st)}function Cc(C,Y,rt,st){const Z=C.opaque,Tt=C.transmissive,Lt=C.transparent;y.setupLightsView(rt),gt===!0&&Rt.setGlobalState(w.clippingPlanes,rt),st&&qt.viewport(G.copy(st)),Z.length>0&&Pr(Z,Y,rt),Tt.length>0&&Pr(Tt,Y,rt),Lt.length>0&&Pr(Lt,Y,rt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function wc(C,Y,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[st.id]===void 0&&(y.state.transmissionRenderTarget[st.id]=new vs(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?dc:La,minFilter:us,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[st.id],Lt=st.viewport||G;Tt.setSize(Lt.z*w.transmissionResolutionScale,Lt.w*w.transmissionResolutionScale);const Ut=w.getRenderTarget();w.setRenderTarget(Tt),w.getClearColor(mt),dt=w.getClearAlpha(),dt<1&&w.setClearColor(16777215,.5),w.clear(),Ve&&Zt.render(rt);const Vt=w.toneMapping;w.toneMapping=Er;const ee=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),y.setupLightsView(st),gt===!0&&Rt.setGlobalState(w.clippingPlanes,st),Pr(C,rt,st),O.updateMultisampleRenderTarget(Tt),O.updateRenderTargetMipmap(Tt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Wt=0,me=Y.length;Wt<me;Wt++){const Re=Y[Wt],Ze=Re.object,Se=Re.geometry,Me=Re.material,Kt=Re.group;if(Me.side===Ta&&Ze.layers.test(st.layers)){const tn=Me.side;Me.side=ti,Me.needsUpdate=!0,Ha(Ze,rt,st,Se,Me,Kt),Me.side=tn,Me.needsUpdate=!0,Yt=!0}}Yt===!0&&(O.updateMultisampleRenderTarget(Tt),O.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Ut),w.setClearColor(mt,dt),ee!==void 0&&(st.viewport=ee),w.toneMapping=Vt}function Pr(C,Y,rt){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Tt=C.length;Z<Tt;Z++){const Lt=C[Z],Ut=Lt.object,Vt=Lt.geometry,ee=Lt.group;let Yt=Lt.material;Yt.allowOverride===!0&&st!==null&&(Yt=st),Ut.layers.test(rt.layers)&&Ha(Ut,Y,rt,Vt,Yt,ee)}}function Ha(C,Y,rt,st,Z,Tt){C.onBeforeRender(w,Y,rt,st,Z,Tt),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(w,Y,rt,st,C,Tt),Z.transparent===!0&&Z.side===Ta&&Z.forceSinglePass===!1?(Z.side=ti,Z.needsUpdate=!0,w.renderBufferDirect(rt,Y,st,Z,C,Tt),Z.side=br,Z.needsUpdate=!0,w.renderBufferDirect(rt,Y,st,Z,C,Tt),Z.side=Ta):w.renderBufferDirect(rt,Y,st,Z,C,Tt),C.onAfterRender(w,Y,rt,st,Z,Tt)}function Ga(C,Y,rt){Y.isScene!==!0&&(Y=Xe);const st=Xt.get(C),Z=y.state.lights,Tt=y.state.shadowsArray,Lt=Z.state.version,Ut=zt.getParameters(C,Z.state,Tt,Y,rt),Vt=zt.getProgramCacheKey(Ut);let ee=st.programs;st.environment=C.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(C.isMeshStandardMaterial?nt:A).get(C.envMap||st.environment),st.envMapRotation=st.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,ee===void 0&&(C.addEventListener("dispose",se),ee=new Map,st.programs=ee);let Yt=ee.get(Vt);if(Yt!==void 0){if(st.currentProgram===Yt&&st.lightsStateVersion===Lt)return ea(C,Ut),Yt}else Ut.uniforms=zt.getUniforms(C),C.onBeforeCompile(Ut,w),Yt=zt.acquireProgram(Ut,Vt),ee.set(Vt,Yt),st.uniforms=Ut.uniforms;const Wt=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=Rt.uniform),ea(C,Ut),st.needsLights=fn(C),st.lightsStateVersion=Lt,st.needsLights&&(Wt.ambientLightColor.value=Z.state.ambient,Wt.lightProbe.value=Z.state.probe,Wt.directionalLights.value=Z.state.directional,Wt.directionalLightShadows.value=Z.state.directionalShadow,Wt.spotLights.value=Z.state.spot,Wt.spotLightShadows.value=Z.state.spotShadow,Wt.rectAreaLights.value=Z.state.rectArea,Wt.ltc_1.value=Z.state.rectAreaLTC1,Wt.ltc_2.value=Z.state.rectAreaLTC2,Wt.pointLights.value=Z.state.point,Wt.pointLightShadows.value=Z.state.pointShadow,Wt.hemisphereLights.value=Z.state.hemi,Wt.directionalShadowMap.value=Z.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Wt.spotShadowMap.value=Z.state.spotShadowMap,Wt.spotLightMatrix.value=Z.state.spotLightMatrix,Wt.spotLightMap.value=Z.state.spotLightMap,Wt.pointShadowMap.value=Z.state.pointShadowMap,Wt.pointShadowMatrix.value=Z.state.pointShadowMatrix),st.currentProgram=Yt,st.uniformsList=null,Yt}function ta(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Sf.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function ea(C,Y){const rt=Xt.get(C);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function Nr(C,Y,rt,st,Z){Y.isScene!==!0&&(Y=Xe),O.resetTextureUnits();const Tt=Y.fog,Lt=st.isMeshStandardMaterial?Y.environment:null,Ut=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ro,Vt=(st.isMeshStandardMaterial?nt:A).get(st.envMap||Lt),ee=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Yt=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Wt=!!rt.morphAttributes.position,me=!!rt.morphAttributes.normal,Re=!!rt.morphAttributes.color;let Ze=Er;st.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ze=w.toneMapping);const Se=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Me=Se!==void 0?Se.length:0,Kt=Xt.get(st),tn=y.state.lights;if(gt===!0&&(St===!0||C!==D)){const En=C===D&&st.id===U;Rt.setState(st,C,En)}let Te=!1;st.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==tn.state.version||Kt.outputColorSpace!==Ut||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isBatchedMesh&&Kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Kt.instancingMorph===!1&&Z.morphTexture!==null||Kt.envMap!==Vt||st.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Rt.numPlanes||Kt.numIntersection!==Rt.numIntersection)||Kt.vertexAlphas!==ee||Kt.vertexTangents!==Yt||Kt.morphTargets!==Wt||Kt.morphNormals!==me||Kt.morphColors!==Re||Kt.toneMapping!==Ze||Kt.morphTargetsCount!==Me)&&(Te=!0):(Te=!0,Kt.__version=st.version);let Nn=Kt.currentProgram;Te===!0&&(Nn=Ga(st,Y,Z));let Xa=!1,We=!1,ia=!1;const He=Nn.getUniforms(),On=Kt.uniforms;if(qt.useProgram(Nn.program)&&(Xa=!0,We=!0,ia=!0),st.id!==U&&(U=st.id,We=!0),Xa||D!==C){qt.buffers.depth.getReversed()?(Ct.copy(C.projectionMatrix),RC(Ct),CC(Ct),He.setValue(H,"projectionMatrix",Ct)):He.setValue(H,"projectionMatrix",C.projectionMatrix),He.setValue(H,"viewMatrix",C.matrixWorldInverse);const wn=He.map.cameraPosition;wn!==void 0&&wn.setValue(H,ce.setFromMatrixPosition(C.matrixWorld)),re.logarithmicDepthBuffer&&He.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&He.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,We=!0,ia=!0)}if(Z.isSkinnedMesh){He.setOptional(H,Z,"bindMatrix"),He.setOptional(H,Z,"bindMatrixInverse");const En=Z.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),He.setValue(H,"boneTexture",En.boneTexture,O))}Z.isBatchedMesh&&(He.setOptional(H,Z,"batchingTexture"),He.setValue(H,"batchingTexture",Z._matricesTexture,O),He.setOptional(H,Z,"batchingIdTexture"),He.setValue(H,"batchingIdTexture",Z._indirectTexture,O),He.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&He.setValue(H,"batchingColorTexture",Z._colorsTexture,O));const gn=rt.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Jt.update(Z,rt,Nn),(We||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,He.setValue(H,"receiveShadow",Z.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(On.envMap.value=Vt,On.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Y.environment!==null&&(On.envMapIntensity.value=Y.environmentIntensity),We&&(He.setValue(H,"toneMappingExposure",w.toneMappingExposure),Kt.needsLights&&ka(On,ia),Tt&&st.fog===!0&&wt.refreshFogUniforms(On,Tt),wt.refreshMaterialUniforms(On,st,W,j,y.state.transmissionRenderTarget[C.id]),Sf.upload(H,ta(Kt),On,O)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Sf.upload(H,ta(Kt),On,O),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&He.setValue(H,"center",Z.center),He.setValue(H,"modelViewMatrix",Z.modelViewMatrix),He.setValue(H,"normalMatrix",Z.normalMatrix),He.setValue(H,"modelMatrix",Z.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const En=st.uniformsGroups;for(let wn=0,Bi=En.length;wn<Bi;wn++){const aa=En[wn];X.update(aa,Nn),X.bind(aa,Nn)}}return Nn}function ka(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function fn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,Y,rt){const st=Xt.get(C);st.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Xt.get(C.texture).__webglTexture=Y,Xt.get(C.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const rt=Xt.get(C);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const Dc=H.createFramebuffer();this.setRenderTarget=function(C,Y=0,rt=0){V=C,z=Y,I=rt;let st=!0,Z=null,Tt=!1,Lt=!1;if(C){const Vt=Xt.get(C);if(Vt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(H.FRAMEBUFFER,null),st=!1;else if(Vt.__webglFramebuffer===void 0)O.setupRenderTarget(C);else if(Vt.__hasExternalTextures)O.rebindTextures(C,Xt.get(C.texture).__webglTexture,Xt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Wt=C.depthTexture;if(Vt.__boundDepthTexture!==Wt){if(Wt!==null&&Xt.has(Wt)&&(C.width!==Wt.image.width||C.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(C)}}const ee=C.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Lt=!0);const Yt=Xt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Yt[Y])?Z=Yt[Y][rt]:Z=Yt[Y],Tt=!0):C.samples>0&&O.useMultisampledRTT(C)===!1?Z=Xt.get(C).__webglMultisampledFramebuffer:Array.isArray(Yt)?Z=Yt[rt]:Z=Yt,G.copy(C.viewport),ct.copy(C.scissor),lt=C.scissorTest}else G.copy(tt).multiplyScalar(W).floor(),ct.copy(xt).multiplyScalar(W).floor(),lt=Et;if(rt!==0&&(Z=Dc),qt.bindFramebuffer(H.FRAMEBUFFER,Z)&&st&&qt.drawBuffers(C,Z),qt.viewport(G),qt.scissor(ct),qt.setScissorTest(lt),Tt){const Vt=Xt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Vt.__webglTexture,rt)}else if(Lt){const Vt=Xt.get(C.texture),ee=Y;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vt.__webglTexture,rt,ee)}else if(C!==null&&rt!==0){const Vt=Xt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Vt.__webglTexture,rt)}U=-1},this.readRenderTargetPixels=function(C,Y,rt,st,Z,Tt,Lt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Xt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut){qt.bindFramebuffer(H.FRAMEBUFFER,Ut);try{const Vt=C.texture,ee=Vt.format,Yt=Vt.type;if(!re.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-st&&rt>=0&&rt<=C.height-Z&&H.readPixels(Y,rt,st,Z,ae.convert(ee),ae.convert(Yt),Tt)}finally{const Vt=V!==null?Xt.get(V).__webglFramebuffer:null;qt.bindFramebuffer(H.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(C,Y,rt,st,Z,Tt,Lt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Xt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut)if(Y>=0&&Y<=C.width-st&&rt>=0&&rt<=C.height-Z){qt.bindFramebuffer(H.FRAMEBUFFER,Ut);const Vt=C.texture,ee=Vt.format,Yt=Vt.type;if(!re.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Wt),H.bufferData(H.PIXEL_PACK_BUFFER,Tt.byteLength,H.STREAM_READ),H.readPixels(Y,rt,st,Z,ae.convert(ee),ae.convert(Yt),0);const me=V!==null?Xt.get(V).__webglFramebuffer:null;qt.bindFramebuffer(H.FRAMEBUFFER,me);const Re=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await AC(H,Re,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Wt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Tt),H.deleteBuffer(Wt),H.deleteSync(Re),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,rt=0){const st=Math.pow(2,-rt),Z=Math.floor(C.image.width*st),Tt=Math.floor(C.image.height*st),Lt=Y!==null?Y.x:0,Ut=Y!==null?Y.y:0;O.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Lt,Ut,Z,Tt),qt.unbindTexture()};const Lc=H.createFramebuffer(),na=H.createFramebuffer();this.copyTextureToTexture=function(C,Y,rt=null,st=null,Z=0,Tt=null){Tt===null&&(Z!==0?(xf("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Z,Z=0):Tt=0);let Lt,Ut,Vt,ee,Yt,Wt,me,Re,Ze;const Se=C.isCompressedTexture?C.mipmaps[Tt]:C.image;if(rt!==null)Lt=rt.max.x-rt.min.x,Ut=rt.max.y-rt.min.y,Vt=rt.isBox3?rt.max.z-rt.min.z:1,ee=rt.min.x,Yt=rt.min.y,Wt=rt.isBox3?rt.min.z:0;else{const gn=Math.pow(2,-Z);Lt=Math.floor(Se.width*gn),Ut=Math.floor(Se.height*gn),C.isDataArrayTexture?Vt=Se.depth:C.isData3DTexture?Vt=Math.floor(Se.depth*gn):Vt=1,ee=0,Yt=0,Wt=0}st!==null?(me=st.x,Re=st.y,Ze=st.z):(me=0,Re=0,Ze=0);const Me=ae.convert(Y.format),Kt=ae.convert(Y.type);let tn;Y.isData3DTexture?(O.setTexture3D(Y,0),tn=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(O.setTexture2DArray(Y,0),tn=H.TEXTURE_2D_ARRAY):(O.setTexture2D(Y,0),tn=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Te=H.getParameter(H.UNPACK_ROW_LENGTH),Nn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Xa=H.getParameter(H.UNPACK_SKIP_PIXELS),We=H.getParameter(H.UNPACK_SKIP_ROWS),ia=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Se.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Se.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ee),H.pixelStorei(H.UNPACK_SKIP_ROWS,Yt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Wt);const He=C.isDataArrayTexture||C.isData3DTexture,On=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const gn=Xt.get(C),En=Xt.get(Y),wn=Xt.get(gn.__renderTarget),Bi=Xt.get(En.__renderTarget);qt.bindFramebuffer(H.READ_FRAMEBUFFER,wn.__webglFramebuffer),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let aa=0;aa<Vt;aa++)He&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xt.get(C).__webglTexture,Z,Wt+aa),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xt.get(Y).__webglTexture,Tt,Ze+aa)),H.blitFramebuffer(ee,Yt,Lt,Ut,me,Re,Lt,Ut,H.DEPTH_BUFFER_BIT,H.NEAREST);qt.bindFramebuffer(H.READ_FRAMEBUFFER,null),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||Xt.has(C)){const gn=Xt.get(C),En=Xt.get(Y);qt.bindFramebuffer(H.READ_FRAMEBUFFER,Lc),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,na);for(let wn=0;wn<Vt;wn++)He?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,gn.__webglTexture,Z,Wt+wn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,gn.__webglTexture,Z),On?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,En.__webglTexture,Tt,Ze+wn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,En.__webglTexture,Tt),Z!==0?H.blitFramebuffer(ee,Yt,Lt,Ut,me,Re,Lt,Ut,H.COLOR_BUFFER_BIT,H.NEAREST):On?H.copyTexSubImage3D(tn,Tt,me,Re,Ze+wn,ee,Yt,Lt,Ut):H.copyTexSubImage2D(tn,Tt,me,Re,ee,Yt,Lt,Ut);qt.bindFramebuffer(H.READ_FRAMEBUFFER,null),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else On?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(tn,Tt,me,Re,Ze,Lt,Ut,Vt,Me,Kt,Se.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(tn,Tt,me,Re,Ze,Lt,Ut,Vt,Me,Se.data):H.texSubImage3D(tn,Tt,me,Re,Ze,Lt,Ut,Vt,Me,Kt,Se):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Tt,me,Re,Lt,Ut,Me,Kt,Se.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Tt,me,Re,Se.width,Se.height,Me,Se.data):H.texSubImage2D(H.TEXTURE_2D,Tt,me,Re,Lt,Ut,Me,Kt,Se);H.pixelStorei(H.UNPACK_ROW_LENGTH,Te),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Nn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Xa),H.pixelStorei(H.UNPACK_SKIP_ROWS,We),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ia),Tt===0&&Y.generateMipmaps&&H.generateMipmap(tn),qt.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,rt=null,st=null,Z=0){return xf('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Y,rt,st,Z)},this.initRenderTarget=function(C){Xt.get(C).__webglFramebuffer===void 0&&O.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?O.setTextureCube(C,0):C.isData3DTexture?O.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?O.setTexture2DArray(C,0):O.setTexture2D(C,0),qt.unbindTexture()},this.resetState=function(){z=0,I=0,V=null,qt.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),n.unpackColorSpace=we._getUnpackColorSpace()}}const kL=({showedMenu:e="home"})=>{const t=et.useRef(null),n=et.useRef(null),a=et.useRef(new Float32Array(0)),s=2e3;et.useEffect(()=>{const u=t.current;if(!u)return;const f=new JC,h=window.innerWidth/window.innerHeight,p=10,m=new jE(-h*p/2,h*p/2,p/2,-10/2,.1,1e3);m.position.z=5;const v=new GL({antialias:!0});v.setSize(window.innerWidth,window.innerHeight),v.setClearColor(921102,1),u.appendChild(v.domElement);const _=new Ba,x=new Float32Array(s*3);for(let L=0;L<s;L++){const R=L*3;x[R]=(Math.random()-1)*30,x[R+1]=(Math.random()-1)*30,x[R+2]=(Math.random()-1)*30}_.setAttribute("position",new Fi(x,3));const M=new kE({size:1,color:"#48DAFA"}),b=new nw(_,M);f.add(b),n.current={points:b,material:M},l(e);function S(){requestAnimationFrame(S),y(),b.rotation.y+=.001,b.rotation.x+=.001,v.render(f,m)}function y(){const L=b.geometry.attributes.position,R=L.array,w=a.current;for(let N=0;N<s*3;N++)R[N]+=(w[N]-R[N])*.05;L.needsUpdate=!0}return S(),window.addEventListener("resize",()=>{m.updateProjectionMatrix(),v.setSize(window.innerWidth,window.innerHeight)}),()=>{v.dispose(),u.removeChild(v.domElement)}},[]),et.useEffect(()=>{l(e)},[e]);function l(u){const f=new Float32Array(s*3);if(!n.current)return;const h=n.current.material,p=["#FFD700","#41C7E4","#A2FD38","#EE550E","#F62F81","#07EAB2"];h.color.set(p[Math.floor(Math.random()*5)]);const m=3;if(u==="home")for(let v=0;v<s;v++){const _=v*3;f[_]=(Math.random()-.5)*30,f[_+1]=(Math.random()-.5)*30,f[_+2]=(Math.random()-.5)*30}else if(u==="experience")for(let v=0;v<s;v++){const _=v*3,x=Math.acos(1-2*(v+.5)/s),M=Math.PI*(1+Math.sqrt(5))*(v+.5);f[_]=m*Math.sin(x)*Math.cos(M),f[_+1]=m*Math.sin(x)*Math.sin(M),f[_+2]=m*Math.cos(x)}else if(u==="skills")for(let v=0;v<s*10;v++){const _=v*3,x=Math.acos(1-2*(v+.5)/s),M=Math.PI*(1+Math.sqrt(10))*(v+.5);f[_]=m*Math.sin(x)*Math.cos(M),f[_+1]=m*Math.sin(x)*Math.sin(M),f[_+2]=m*Math.cos(x)}else if(u==="project")for(let v=0;v<s*10;v++){const _=v*3,x=Math.acos(1-2*(v+.5)/s),M=Math.PI*(2*Math.sqrt(50))*(v+.5);f[_]=m*Math.sin(x)*Math.cos(M),f[_+1]=m*Math.sin(x)*Math.sin(M),f[_+2]=m*Math.cos(x)}else if(u==="contact")for(let v=0;v<s*10;v++){const _=v*3,x=Math.acos(1-2*(v+.5)/s),M=Math.PI*(Math.random()*Math.sqrt(5))*(v+.5);f[_]=m*Math.sin(x)*Math.cos(M),f[_+1]=m*Math.sin(x)*Math.sin(M),f[_+2]=m*Math.cos(x)}else for(let v=0;v<s;v++){const _=v*3;f[_]=(Math.random()-.5)*5,f[_+1]=(Math.random()-.5)*5,f[_+2]=(Math.random()-.5)*5}a.current=f}return K.jsx("div",{ref:t,className:"mesh-geometry"})},QE=et.createContext({});function XL(e){const t=et.useRef(null);return t.current===null&&(t.current=e()),t.current}const jg=typeof window<"u",jL=jg?et.useLayoutEffect:et.useEffect,Wg=et.createContext(null),$E=et.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function WL(e=!0){const t=et.useContext(Wg);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:a,register:s}=t,l=et.useId();et.useEffect(()=>{if(e)return s(l)},[e]);const u=et.useCallback(()=>e&&a&&a(l),[l,a,e]);return!n&&a?[!1,u]:[!0]}function qg(e,t){e.indexOf(t)===-1&&e.push(t)}function Yg(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Pa=(e,t,n)=>n>t?t:n<e?e:n;let Kg=()=>{};const Na={},JE=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),tb=e=>/^0[^.\s]+$/u.test(e);function Zg(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ti=e=>e,qL=(e,t)=>n=>t(e(n)),yc=(...e)=>e.reduce(qL),nc=(e,t,n)=>{const a=t-e;return a===0?1:(n-e)/a};class Qg{constructor(){this.subscriptions=[]}add(t){return qg(this.subscriptions,t),()=>Yg(this.subscriptions,t)}notify(t,n,a){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,n,a);else for(let l=0;l<s;l++){const u=this.subscriptions[l];u&&u(t,n,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ki=e=>e*1e3,Zi=e=>e/1e3;function eb(e,t){return t?e*(1e3/t):0}const nb=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,YL=1e-7,KL=12;function ZL(e,t,n,a,s){let l,u,f=0;do u=t+(n-t)/2,l=nb(u,a,s)-e,l>0?n=u:t=u;while(Math.abs(l)>YL&&++f<KL);return u}function xc(e,t,n,a){if(e===t&&n===a)return Ti;const s=l=>ZL(l,0,1,e,n);return l=>l===0||l===1?l:nb(s(l),t,a)}const ib=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ab=e=>t=>1-e(1-t),rb=xc(.33,1.53,.69,.99),$g=ab(rb),sb=ib($g),ob=e=>(e*=2)<1?.5*$g(e):.5*(2-Math.pow(2,-10*(e-1))),Jg=e=>1-Math.sin(Math.acos(e)),lb=ab(Jg),cb=ib(Jg),QL=xc(.42,0,1,1),$L=xc(0,0,.58,1),ub=xc(.42,0,.58,1),JL=e=>Array.isArray(e)&&typeof e[0]!="number",fb=e=>Array.isArray(e)&&typeof e[0]=="number",tU={linear:Ti,easeIn:QL,easeInOut:ub,easeOut:$L,circIn:Jg,circInOut:cb,circOut:lb,backIn:$g,backInOut:sb,backOut:rb,anticipate:ob},eU=e=>typeof e=="string",vS=e=>{if(fb(e)){Kg(e.length===4);const[t,n,a,s]=e;return xc(t,n,a,s)}else if(eU(e))return tU[e];return e},cf=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],_S={value:null};function nU(e,t){let n=new Set,a=new Set,s=!1,l=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1},h=0;function p(v){u.has(v)&&(m.schedule(v),e()),h++,v(f)}const m={schedule:(v,_=!1,x=!1)=>{const b=x&&s?n:a;return _&&u.add(v),b.has(v)||b.add(v),v},cancel:v=>{a.delete(v),u.delete(v)},process:v=>{if(f=v,s){l=!0;return}s=!0,[n,a]=[a,n],n.forEach(p),t&&_S.value&&_S.value.frameloop[t].push(h),h=0,n.clear(),s=!1,l&&(l=!1,m.process(v))}};return m}const iU=40;function hb(e,t){let n=!1,a=!0;const s={delta:0,timestamp:0,isProcessing:!1},l=()=>n=!0,u=cf.reduce((R,w)=>(R[w]=nU(l,t?w:void 0),R),{}),{setup:f,read:h,resolveKeyframes:p,preUpdate:m,update:v,preRender:_,render:x,postRender:M}=u,b=()=>{const R=Na.useManualTiming?s.timestamp:performance.now();n=!1,Na.useManualTiming||(s.delta=a?1e3/60:Math.max(Math.min(R-s.timestamp,iU),1)),s.timestamp=R,s.isProcessing=!0,f.process(s),h.process(s),p.process(s),m.process(s),v.process(s),_.process(s),x.process(s),M.process(s),s.isProcessing=!1,n&&t&&(a=!1,e(b))},S=()=>{n=!0,a=!0,s.isProcessing||e(b)};return{schedule:cf.reduce((R,w)=>{const N=u[w];return R[w]=(z,I=!1,V=!1)=>(n||S(),N.schedule(z,I,V)),R},{}),cancel:R=>{for(let w=0;w<cf.length;w++)u[cf[w]].cancel(R)},state:s,steps:u}}const{schedule:Je,cancel:Ar,state:Pn,steps:zp}=hb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ti,!0);let Mf;function aU(){Mf=void 0}const Jn={now:()=>(Mf===void 0&&Jn.set(Pn.isProcessing||Na.useManualTiming?Pn.timestamp:performance.now()),Mf),set:e=>{Mf=e,queueMicrotask(aU)}},db=e=>t=>typeof t=="string"&&t.startsWith(e),tv=db("--"),rU=db("var(--"),ev=e=>rU(e)?sU.test(e.split("/*")[0].trim()):!1,sU=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,No={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ic={...No,transform:e=>Pa(0,1,e)},uf={...No,default:1},Xl=e=>Math.round(e*1e5)/1e5,nv=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function oU(e){return e==null}const lU=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,iv=(e,t)=>n=>!!(typeof n=="string"&&lU.test(n)&&n.startsWith(e)||t&&!oU(n)&&Object.prototype.hasOwnProperty.call(n,t)),pb=(e,t,n)=>a=>{if(typeof a!="string")return a;const[s,l,u,f]=a.match(nv);return{[e]:parseFloat(s),[t]:parseFloat(l),[n]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},cU=e=>Pa(0,255,e),Vp={...No,transform:e=>Math.round(cU(e))},fs={test:iv("rgb","red"),parse:pb("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:a=1})=>"rgba("+Vp.transform(e)+", "+Vp.transform(t)+", "+Vp.transform(n)+", "+Xl(ic.transform(a))+")"};function uU(e){let t="",n="",a="",s="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),a=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),a=e.substring(3,4),s=e.substring(4,5),t+=t,n+=n,a+=a,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(a,16),alpha:s?parseInt(s,16)/255:1}}const Zm={test:iv("#"),parse:uU,transform:fs.transform},Sc=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),xr=Sc("deg"),Qi=Sc("%"),ie=Sc("px"),fU=Sc("vh"),hU=Sc("vw"),yS={...Qi,parse:e=>Qi.parse(e)/100,transform:e=>Qi.transform(e*100)},po={test:iv("hsl","hue"),parse:pb("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:a=1})=>"hsla("+Math.round(e)+", "+Qi.transform(Xl(t))+", "+Qi.transform(Xl(n))+", "+Xl(ic.transform(a))+")"},Vn={test:e=>fs.test(e)||Zm.test(e)||po.test(e),parse:e=>fs.test(e)?fs.parse(e):po.test(e)?po.parse(e):Zm.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?fs.transform(e):po.transform(e)},dU=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function pU(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(nv))==null?void 0:t.length)||0)+(((n=e.match(dU))==null?void 0:n.length)||0)>0}const mb="number",gb="color",mU="var",gU="var(",xS="${}",vU=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ac(e){const t=e.toString(),n=[],a={color:[],number:[],var:[]},s=[];let l=0;const f=t.replace(vU,h=>(Vn.test(h)?(a.color.push(l),s.push(gb),n.push(Vn.parse(h))):h.startsWith(gU)?(a.var.push(l),s.push(mU),n.push(h)):(a.number.push(l),s.push(mb),n.push(parseFloat(h))),++l,xS)).split(xS);return{values:n,split:f,indexes:a,types:s}}function vb(e){return ac(e).values}function _b(e){const{split:t,types:n}=ac(e),a=t.length;return s=>{let l="";for(let u=0;u<a;u++)if(l+=t[u],s[u]!==void 0){const f=n[u];f===mb?l+=Xl(s[u]):f===gb?l+=Vn.transform(s[u]):l+=s[u]}return l}}const _U=e=>typeof e=="number"?0:e;function yU(e){const t=vb(e);return _b(e)(t.map(_U))}const Rr={test:pU,parse:vb,createTransformer:_b,getAnimatableNone:yU};function Hp(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function xU({hue:e,saturation:t,lightness:n,alpha:a}){e/=360,t/=100,n/=100;let s=0,l=0,u=0;if(!t)s=l=u=n;else{const f=n<.5?n*(1+t):n+t-n*t,h=2*n-f;s=Hp(h,f,e+1/3),l=Hp(h,f,e),u=Hp(h,f,e-1/3)}return{red:Math.round(s*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:a}}function Uf(e,t){return n=>n>0?t:e}const $e=(e,t,n)=>e+(t-e)*n,Gp=(e,t,n)=>{const a=e*e,s=n*(t*t-a)+a;return s<0?0:Math.sqrt(s)},SU=[Zm,fs,po],MU=e=>SU.find(t=>t.test(e));function SS(e){const t=MU(e);if(!t)return!1;let n=t.parse(e);return t===po&&(n=xU(n)),n}const MS=(e,t)=>{const n=SS(e),a=SS(t);if(!n||!a)return Uf(e,t);const s={...n};return l=>(s.red=Gp(n.red,a.red,l),s.green=Gp(n.green,a.green,l),s.blue=Gp(n.blue,a.blue,l),s.alpha=$e(n.alpha,a.alpha,l),fs.transform(s))},Qm=new Set(["none","hidden"]);function EU(e,t){return Qm.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function bU(e,t){return n=>$e(e,t,n)}function av(e){return typeof e=="number"?bU:typeof e=="string"?ev(e)?Uf:Vn.test(e)?MS:RU:Array.isArray(e)?yb:typeof e=="object"?Vn.test(e)?MS:TU:Uf}function yb(e,t){const n=[...e],a=n.length,s=e.map((l,u)=>av(l)(l,t[u]));return l=>{for(let u=0;u<a;u++)n[u]=s[u](l);return n}}function TU(e,t){const n={...e,...t},a={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(a[s]=av(e[s])(e[s],t[s]));return s=>{for(const l in a)n[l]=a[l](s);return n}}function AU(e,t){const n=[],a={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const l=t.types[s],u=e.indexes[l][a[l]],f=e.values[u]??0;n[s]=f,a[l]++}return n}const RU=(e,t)=>{const n=Rr.createTransformer(t),a=ac(e),s=ac(t);return a.indexes.var.length===s.indexes.var.length&&a.indexes.color.length===s.indexes.color.length&&a.indexes.number.length>=s.indexes.number.length?Qm.has(e)&&!s.values.length||Qm.has(t)&&!a.values.length?EU(e,t):yc(yb(AU(a,s),s.values),n):Uf(e,t)};function xb(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?$e(e,t,n):av(e)(e,t)}const CU=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Je.update(t,!0),stop:()=>Ar(t),now:()=>Pn.isProcessing?Pn.timestamp:Jn.now()}},Sb=(e,t,n=10)=>{let a="";const s=Math.max(Math.round(t/n),2);for(let l=0;l<s;l++)a+=e(l/(s-1))+", ";return`linear(${a.substring(0,a.length-2)})`},Pf=2e4;function rv(e){let t=0;const n=50;let a=e.next(t);for(;!a.done&&t<Pf;)t+=n,a=e.next(t);return t>=Pf?1/0:t}function wU(e,t=100,n){const a=n({...e,keyframes:[0,t]}),s=Math.min(rv(a),Pf);return{type:"keyframes",ease:l=>a.next(s*l).value/t,duration:Zi(s)}}const DU=5;function Mb(e,t,n){const a=Math.max(t-DU,0);return eb(n-e(a),t-a)}const an={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ES=.001;function LU({duration:e=an.duration,bounce:t=an.bounce,velocity:n=an.velocity,mass:a=an.mass}){let s,l,u=1-t;u=Pa(an.minDamping,an.maxDamping,u),e=Pa(an.minDuration,an.maxDuration,Zi(e)),u<1?(s=p=>{const m=p*u,v=m*e,_=m-n,x=$m(p,u),M=Math.exp(-v);return ES-_/x*M},l=p=>{const v=p*u*e,_=v*n+n,x=Math.pow(u,2)*Math.pow(p,2)*e,M=Math.exp(-v),b=$m(Math.pow(p,2),u);return(-s(p)+ES>0?-1:1)*((_-x)*M)/b}):(s=p=>{const m=Math.exp(-p*e),v=(p-n)*e+1;return-.001+m*v},l=p=>{const m=Math.exp(-p*e),v=(n-p)*(e*e);return m*v});const f=5/e,h=PU(s,l,f);if(e=Ki(e),isNaN(h))return{stiffness:an.stiffness,damping:an.damping,duration:e};{const p=Math.pow(h,2)*a;return{stiffness:p,damping:u*2*Math.sqrt(a*p),duration:e}}}const UU=12;function PU(e,t,n){let a=n;for(let s=1;s<UU;s++)a=a-e(a)/t(a);return a}function $m(e,t){return e*Math.sqrt(1-t*t)}const NU=["duration","bounce"],OU=["stiffness","damping","mass"];function bS(e,t){return t.some(n=>e[n]!==void 0)}function IU(e){let t={velocity:an.velocity,stiffness:an.stiffness,damping:an.damping,mass:an.mass,isResolvedFromDuration:!1,...e};if(!bS(e,OU)&&bS(e,NU))if(e.visualDuration){const n=e.visualDuration,a=2*Math.PI/(n*1.2),s=a*a,l=2*Pa(.05,1,1-(e.bounce||0))*Math.sqrt(s);t={...t,mass:an.mass,stiffness:s,damping:l}}else{const n=LU(e);t={...t,...n,mass:an.mass},t.isResolvedFromDuration=!0}return t}function Nf(e=an.visualDuration,t=an.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:a,restDelta:s}=n;const l=n.keyframes[0],u=n.keyframes[n.keyframes.length-1],f={done:!1,value:l},{stiffness:h,damping:p,mass:m,duration:v,velocity:_,isResolvedFromDuration:x}=IU({...n,velocity:-Zi(n.velocity||0)}),M=_||0,b=p/(2*Math.sqrt(h*m)),S=u-l,y=Zi(Math.sqrt(h/m)),L=Math.abs(S)<5;a||(a=L?an.restSpeed.granular:an.restSpeed.default),s||(s=L?an.restDelta.granular:an.restDelta.default);let R;if(b<1){const N=$m(y,b);R=z=>{const I=Math.exp(-b*y*z);return u-I*((M+b*y*S)/N*Math.sin(N*z)+S*Math.cos(N*z))}}else if(b===1)R=N=>u-Math.exp(-y*N)*(S+(M+y*S)*N);else{const N=y*Math.sqrt(b*b-1);R=z=>{const I=Math.exp(-b*y*z),V=Math.min(N*z,300);return u-I*((M+b*y*S)*Math.sinh(V)+N*S*Math.cosh(V))/N}}const w={calculatedDuration:x&&v||null,next:N=>{const z=R(N);if(x)f.done=N>=v;else{let I=N===0?M:0;b<1&&(I=N===0?Ki(M):Mb(R,N,z));const V=Math.abs(I)<=a,U=Math.abs(u-z)<=s;f.done=V&&U}return f.value=f.done?u:z,f},toString:()=>{const N=Math.min(rv(w),Pf),z=Sb(I=>w.next(N*I).value,N,30);return N+"ms "+z},toTransition:()=>{}};return w}Nf.applyToOptions=e=>{const t=wU(e,100,Nf);return e.ease=t.ease,e.duration=Ki(t.duration),e.type="keyframes",e};function Jm({keyframes:e,velocity:t=0,power:n=.8,timeConstant:a=325,bounceDamping:s=10,bounceStiffness:l=500,modifyTarget:u,min:f,max:h,restDelta:p=.5,restSpeed:m}){const v=e[0],_={done:!1,value:v},x=V=>f!==void 0&&V<f||h!==void 0&&V>h,M=V=>f===void 0?h:h===void 0||Math.abs(f-V)<Math.abs(h-V)?f:h;let b=n*t;const S=v+b,y=u===void 0?S:u(S);y!==S&&(b=y-v);const L=V=>-b*Math.exp(-V/a),R=V=>y+L(V),w=V=>{const U=L(V),D=R(V);_.done=Math.abs(U)<=p,_.value=_.done?y:D};let N,z;const I=V=>{x(_.value)&&(N=V,z=Nf({keyframes:[_.value,M(_.value)],velocity:Mb(R,V,_.value),damping:s,stiffness:l,restDelta:p,restSpeed:m}))};return I(0),{calculatedDuration:null,next:V=>{let U=!1;return!z&&N===void 0&&(U=!0,w(V),I(V)),N!==void 0&&V>=N?z.next(V-N):(!U&&w(V),_)}}}function FU(e,t,n){const a=[],s=n||Na.mix||xb,l=e.length-1;for(let u=0;u<l;u++){let f=s(e[u],e[u+1]);if(t){const h=Array.isArray(t)?t[u]||Ti:t;f=yc(h,f)}a.push(f)}return a}function BU(e,t,{clamp:n=!0,ease:a,mixer:s}={}){const l=e.length;if(Kg(l===t.length),l===1)return()=>t[0];if(l===2&&t[0]===t[1])return()=>t[1];const u=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),t=[...t].reverse());const f=FU(t,a,s),h=f.length,p=m=>{if(u&&m<e[0])return t[0];let v=0;if(h>1)for(;v<e.length-2&&!(m<e[v+1]);v++);const _=nc(e[v],e[v+1],m);return f[v](_)};return n?m=>p(Pa(e[0],e[l-1],m)):p}function zU(e,t){const n=e[e.length-1];for(let a=1;a<=t;a++){const s=nc(0,t,a);e.push($e(n,1,s))}}function VU(e){const t=[0];return zU(t,e.length-1),t}function HU(e,t){return e.map(n=>n*t)}function GU(e,t){return e.map(()=>t||ub).splice(0,e.length-1)}function jl({duration:e=300,keyframes:t,times:n,ease:a="easeInOut"}){const s=JL(a)?a.map(vS):vS(a),l={done:!1,value:t[0]},u=HU(n&&n.length===t.length?n:VU(t),e),f=BU(u,t,{ease:Array.isArray(s)?s:GU(t,s)});return{calculatedDuration:e,next:h=>(l.value=f(h),l.done=h>=e,l)}}const kU=e=>e!==null;function sv(e,{repeat:t,repeatType:n="loop"},a,s=1){const l=e.filter(kU),f=s<0||t&&n!=="loop"&&t%2===1?0:l.length-1;return!f||a===void 0?l[f]:a}const XU={decay:Jm,inertia:Jm,tween:jl,keyframes:jl,spring:Nf};function Eb(e){typeof e.type=="string"&&(e.type=XU[e.type])}class ov{constructor(){this.count=0,this.updateFinished()}get finished(){return this._finished}updateFinished(){this.count++,this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const jU=e=>e/100;class bb extends ov{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:n}=this.options;if(n&&n.updatedAt!==Jn.now()&&this.tick(Jn.now()),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:a}=this.options;a&&a()},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;Eb(t);const{type:n=jl,repeat:a=0,repeatDelay:s=0,repeatType:l,velocity:u=0}=t;let{keyframes:f}=t;const h=n||jl;h!==jl&&typeof f[0]!="number"&&(this.mixKeyframes=yc(jU,xb(f[0],f[1])),f=[0,100]);const p=h({...t,keyframes:f});l==="mirror"&&(this.mirroredGenerator=h({...t,keyframes:[...f].reverse(),velocity:-u})),p.calculatedDuration===null&&(p.calculatedDuration=rv(p));const{calculatedDuration:m}=p;this.calculatedDuration=m,this.resolvedDuration=m+s,this.totalDuration=this.resolvedDuration*(a+1)-s,this.generator=p}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:a,totalDuration:s,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:h}=this;if(this.startTime===null)return a.next(0);const{delay:p=0,keyframes:m,repeat:v,repeatType:_,repeatDelay:x,type:M,onUpdate:b,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-s/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const y=this.currentTime-p*(this.playbackSpeed>=0?1:-1),L=this.playbackSpeed>=0?y<0:y>s;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let R=this.currentTime,w=a;if(v){const V=Math.min(this.currentTime,s)/f;let U=Math.floor(V),D=V%1;!D&&V>=1&&(D=1),D===1&&U--,U=Math.min(U,v+1),!!(U%2)&&(_==="reverse"?(D=1-D,x&&(D-=x/f)):_==="mirror"&&(w=u)),R=Pa(0,1,D)*f}const N=L?{done:!1,value:m[0]}:w.next(R);l&&(N.value=l(N.value));let{done:z}=N;!L&&h!==null&&(z=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&z);return I&&M!==Jm&&(N.value=sv(m,this.options,S,this.speed)),b&&b(N.value),I&&this.finish(),N}then(t,n){return this.finished.then(t,n)}get duration(){return Zi(this.calculatedDuration)}get time(){return Zi(this.currentTime)}set time(t){t=Ki(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Jn.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Zi(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=CU,onPlay:n,startTime:a}=this.options;this.driver||(this.driver=t(l=>this.tick(l))),n&&n();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=a??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Jn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown()}teardown(){this.notifyFinished(),this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),t.observe(this)}}function WU(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const hs=e=>e*180/Math.PI,tg=e=>{const t=hs(Math.atan2(e[1],e[0]));return eg(t)},qU={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:tg,rotateZ:tg,skewX:e=>hs(Math.atan(e[1])),skewY:e=>hs(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},eg=e=>(e=e%360,e<0&&(e+=360),e),TS=tg,AS=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),RS=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),YU={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:AS,scaleY:RS,scale:e=>(AS(e)+RS(e))/2,rotateX:e=>eg(hs(Math.atan2(e[6],e[5]))),rotateY:e=>eg(hs(Math.atan2(-e[2],e[0]))),rotateZ:TS,rotate:TS,skewX:e=>hs(Math.atan(e[4])),skewY:e=>hs(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function CS(e){return e.includes("scale")?1:0}function ng(e,t){if(!e||e==="none")return CS(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,s;if(n)a=YU,s=n;else{const f=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=qU,s=f}if(!s)return CS(t);const l=a[t],u=s[1].split(",").map(ZU);return typeof l=="function"?l(u):u[l]}const KU=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return ng(n,t)};function ZU(e){return parseFloat(e.trim())}const Oo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Io=new Set(Oo),wS=e=>e===No||e===ie,QU=new Set(["x","y","z"]),$U=Oo.filter(e=>!QU.has(e));function JU(e){const t=[];return $U.forEach(n=>{const a=e.getValue(n);a!==void 0&&(t.push([n,a.get()]),a.set(n.startsWith("scale")?1:0))}),t}const wo={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>ng(t,"x"),y:(e,{transform:t})=>ng(t,"y")};wo.translateX=wo.x;wo.translateY=wo.y;const ms=new Set;let ig=!1,ag=!1,rg=!1;function Tb(){if(ag){const e=Array.from(ms).filter(a=>a.needsMeasurement),t=new Set(e.map(a=>a.element)),n=new Map;t.forEach(a=>{const s=JU(a);s.length&&(n.set(a,s),a.render())}),e.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const s=n.get(a);s&&s.forEach(([l,u])=>{var f;(f=a.getValue(l))==null||f.set(u)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}ag=!1,ig=!1,ms.forEach(e=>e.complete(rg)),ms.clear()}function Ab(){ms.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(ag=!0)})}function tP(){rg=!0,Ab(),Tb(),rg=!1}class lv{constructor(t,n,a,s,l,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=a,this.motionValue=s,this.element=l,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ms.add(this),ig||(ig=!0,Je.read(Ab),Je.resolveKeyframes(Tb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:a,motionValue:s}=this;if(t[0]===null){const l=s==null?void 0:s.get(),u=t[t.length-1];if(l!==void 0)t[0]=l;else if(a&&n){const f=a.readValue(n,u);f!=null&&(t[0]=f)}t[0]===void 0&&(t[0]=u),s&&l===void 0&&s.set(t[0])}WU(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),ms.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ms.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const eP=e=>e.startsWith("--");function nP(e,t,n){eP(t)?e.style.setProperty(t,n):e.style[t]=n}const iP=Zg(()=>window.ScrollTimeline!==void 0),aP={};function rP(e,t){const n=Zg(e);return()=>aP[t]??n()}const Rb=rP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Hl=([e,t,n,a])=>`cubic-bezier(${e}, ${t}, ${n}, ${a})`,DS={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Hl([0,.65,.55,1]),circOut:Hl([.55,0,1,.45]),backIn:Hl([.31,.01,.66,-.59]),backOut:Hl([.33,1.53,.69,.99])};function Cb(e,t){if(e)return typeof e=="function"?Rb()?Sb(e,t):"ease-out":fb(e)?Hl(e):Array.isArray(e)?e.map(n=>Cb(n,t)||DS.easeOut):DS[e]}function sP(e,t,n,{delay:a=0,duration:s=300,repeat:l=0,repeatType:u="loop",ease:f="easeOut",times:h}={},p=void 0){const m={[t]:n};h&&(m.offset=h);const v=Cb(f,s);Array.isArray(v)&&(m.easing=v);const _={delay:a,duration:s,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return p&&(_.pseudoElement=p),e.animate(m,_)}function wb(e){return typeof e=="function"&&"applyToOptions"in e}function oP({type:e,...t}){return wb(e)&&Rb()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class lP extends ov{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:n,name:a,keyframes:s,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:f,onComplete:h}=t;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=t,Kg(typeof t.type!="string");const p=oP(t);this.animation=sP(n,a,s,p,l),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const m=sv(s,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(m):nP(n,a,m),this.animation.cancel()}h==null||h(),this.notifyFinished()},this.animation.oncancel=()=>this.notifyFinished()}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,a;const t=((a=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:a.call(n).duration)||0;return Zi(Number(t))}get time(){return Zi(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=Ki(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&iP()?(this.animation.timeline=t,Ti):n(this)}}const Db={anticipate:ob,backInOut:sb,circInOut:cb};function cP(e){return e in Db}function uP(e){typeof e.ease=="string"&&cP(e.ease)&&(e.ease=Db[e.ease])}const LS=10;class fP extends lP{constructor(t){uP(t),Eb(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:a,onComplete:s,element:l,...u}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const f=new bb({...u,autoplay:!1}),h=Ki(this.finishedTime??this.time);n.setWithVelocity(f.sample(h-LS).value,f.sample(h).value,LS),f.stop()}}const US=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Rr.test(e)||e==="0")&&!e.startsWith("url("));function hP(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function dP(e,t,n,a){const s=e[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const l=e[e.length-1],u=US(s,t),f=US(l,t);return!u||!f?!1:hP(e)||(n==="spring"||wb(n))&&a}const pP=new Set(["opacity","clipPath","filter","transform"]),mP=Zg(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function gP(e){const{motionValue:t,name:n,repeatDelay:a,repeatType:s,damping:l,type:u}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:h}=t.owner.getProps();return mP()&&n&&pP.has(n)&&(n!=="transform"||!h)&&!f&&!a&&s!=="mirror"&&l!==0&&u!=="inertia"}const vP=40;class _P extends ov{constructor({autoplay:t=!0,delay:n=0,type:a="keyframes",repeat:s=0,repeatDelay:l=0,repeatType:u="loop",keyframes:f,name:h,motionValue:p,element:m,...v}){var M;super(),this.stop=()=>{var b,S;this._animation?(this._animation.stop(),(b=this.stopTimeline)==null||b.call(this)):(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=Jn.now();const _={autoplay:t,delay:n,type:a,repeat:s,repeatDelay:l,repeatType:u,name:h,motionValue:p,element:m,...v},x=(m==null?void 0:m.KeyframeResolver)||lv;this.keyframeResolver=new x(f,(b,S,y)=>this.onKeyframesResolved(b,S,_,!y),h,p,m),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(t,n,a,s){this.keyframeResolver=void 0;const{name:l,type:u,velocity:f,delay:h,isHandoff:p,onUpdate:m}=a;this.resolvedAt=Jn.now(),dP(t,l,u,f)||((Na.instantAnimations||!h)&&(m==null||m(sv(t,a,n))),t[0]=t[t.length-1],a.duration=0,a.repeat=0);const _={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>vP?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...a,keyframes:t},x=!p&&gP(_)?new fP({..._,element:_.motionValue.owner.current}):new bb(_);x.finished.then(()=>this.notifyFinished()).catch(Ti),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||tP(),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this.animation.cancel()}}const yP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function xP(e){const t=yP.exec(e);if(!t)return[,];const[,n,a,s]=t;return[`--${n??a}`,s]}function Lb(e,t,n=1){const[a,s]=xP(e);if(!a)return;const l=window.getComputedStyle(t).getPropertyValue(a);if(l){const u=l.trim();return JE(u)?parseFloat(u):u}return ev(s)?Lb(s,t,n+1):s}function cv(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const Ub=new Set(["width","height","top","left","right","bottom",...Oo]),SP={test:e=>e==="auto",parse:e=>e},Pb=e=>t=>t.test(e),Nb=[No,ie,Qi,xr,hU,fU,SP],PS=e=>Nb.find(Pb(e));function MP(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||tb(e):!0}const EP=new Set(["brightness","contrast","saturate","opacity"]);function bP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=n.match(nv)||[];if(!a)return e;const s=n.replace(a,"");let l=EP.has(t)?1:0;return a!==n&&(l*=100),t+"("+l+s+")"}const TP=/\b([a-z-]*)\(.*?\)/gu,sg={...Rr,getAnimatableNone:e=>{const t=e.match(TP);return t?t.map(bP).join(" "):e}},NS={...No,transform:Math.round},AP={rotate:xr,rotateX:xr,rotateY:xr,rotateZ:xr,scale:uf,scaleX:uf,scaleY:uf,scaleZ:uf,skew:xr,skewX:xr,skewY:xr,distance:ie,translateX:ie,translateY:ie,translateZ:ie,x:ie,y:ie,z:ie,perspective:ie,transformPerspective:ie,opacity:ic,originX:yS,originY:yS,originZ:ie},uv={borderWidth:ie,borderTopWidth:ie,borderRightWidth:ie,borderBottomWidth:ie,borderLeftWidth:ie,borderRadius:ie,radius:ie,borderTopLeftRadius:ie,borderTopRightRadius:ie,borderBottomRightRadius:ie,borderBottomLeftRadius:ie,width:ie,maxWidth:ie,height:ie,maxHeight:ie,top:ie,right:ie,bottom:ie,left:ie,padding:ie,paddingTop:ie,paddingRight:ie,paddingBottom:ie,paddingLeft:ie,margin:ie,marginTop:ie,marginRight:ie,marginBottom:ie,marginLeft:ie,backgroundPositionX:ie,backgroundPositionY:ie,...AP,zIndex:NS,fillOpacity:ic,strokeOpacity:ic,numOctaves:NS},RP={...uv,color:Vn,backgroundColor:Vn,outlineColor:Vn,fill:Vn,stroke:Vn,borderColor:Vn,borderTopColor:Vn,borderRightColor:Vn,borderBottomColor:Vn,borderLeftColor:Vn,filter:sg,WebkitFilter:sg},Ob=e=>RP[e];function Ib(e,t){let n=Ob(e);return n!==sg&&(n=Rr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const CP=new Set(["auto","none","0"]);function wP(e,t,n){let a=0,s;for(;a<e.length&&!s;){const l=e[a];typeof l=="string"&&!CP.has(l)&&ac(l).values.length&&(s=e[a]),a++}if(s&&n)for(const l of t)e[l]=Ib(n,s)}class DP extends lv{constructor(t,n,a,s,l){super(t,n,a,s,l,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:a}=this;if(!n||!n.current)return;super.readKeyframes();for(let h=0;h<t.length;h++){let p=t[h];if(typeof p=="string"&&(p=p.trim(),ev(p))){const m=Lb(p,n.current);m!==void 0&&(t[h]=m),h===t.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!Ub.has(a)||t.length!==2)return;const[s,l]=t,u=PS(s),f=PS(l);if(u!==f)if(wS(u)&&wS(f))for(let h=0;h<t.length;h++){const p=t[h];typeof p=="string"&&(t[h]=parseFloat(p))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,a=[];for(let s=0;s<t.length;s++)(t[s]===null||MP(t[s]))&&a.push(s);a.length&&wP(t,a,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=wo[a](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const s=n[n.length-1];s!==void 0&&t.getValue(a,s).jump(s,!1)}measureEndState(){var f;const{element:t,name:n,unresolvedKeyframes:a}=this;if(!t||!t.current)return;const s=t.getValue(n);s&&s.jump(this.measuredOrigin,!1);const l=a.length-1,u=a[l];a[l]=wo[n](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([h,p])=>{t.getValue(h).set(p)}),this.resolveNoneKeyframes()}}function LP(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let a=document;const s=(n==null?void 0:n[e])??a.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}const{schedule:fv}=hb(queueMicrotask,!1),Ui={x:!1,y:!1};function Fb(){return Ui.x||Ui.y}function UP(e){return e==="x"||e==="y"?Ui[e]?null:(Ui[e]=!0,()=>{Ui[e]=!1}):Ui.x||Ui.y?null:(Ui.x=Ui.y=!0,()=>{Ui.x=Ui.y=!1})}function Bb(e,t){const n=LP(e),a=new AbortController,s={passive:!0,...t,signal:a.signal};return[n,s,()=>a.abort()]}function OS(e){return!(e.pointerType==="touch"||Fb())}function PP(e,t,n={}){const[a,s,l]=Bb(e,n),u=f=>{if(!OS(f))return;const{target:h}=f,p=t(h,f);if(typeof p!="function"||!h)return;const m=v=>{OS(v)&&(p(v),h.removeEventListener("pointerleave",m))};h.addEventListener("pointerleave",m,s)};return a.forEach(f=>{f.addEventListener("pointerenter",u,s)}),l}const zb=(e,t)=>t?e===t?!0:zb(e,t.parentElement):!1,hv=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,NP=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function OP(e){return NP.has(e.tagName)||e.tabIndex!==-1}const Gl=new WeakSet;function IS(e){return t=>{t.key==="Enter"&&e(t)}}function kp(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const IP=(e,t)=>{const n=e.currentTarget;if(!n)return;const a=IS(()=>{if(Gl.has(n))return;kp(n,"down");const s=IS(()=>{kp(n,"up")}),l=()=>kp(n,"cancel");n.addEventListener("keyup",s,t),n.addEventListener("blur",l,t)});n.addEventListener("keydown",a,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",a),t)};function FS(e){return hv(e)&&!Fb()}function FP(e,t,n={}){const[a,s,l]=Bb(e,n),u=f=>{const h=f.currentTarget;if(!FS(f)||Gl.has(h))return;Gl.add(h);const p=t(h,f),m=(x,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",_),!(!FS(x)||!Gl.has(h))&&(Gl.delete(h),typeof p=="function"&&p(x,{success:M}))},v=x=>{m(x,h===window||h===document||n.useGlobalTarget||zb(h,x.target))},_=x=>{m(x,!1)};window.addEventListener("pointerup",v,s),window.addEventListener("pointercancel",_,s)};return a.forEach(f=>{(n.useGlobalTarget?window:f).addEventListener("pointerdown",u,s),f instanceof HTMLElement&&(f.addEventListener("focus",p=>IP(p,s)),!OP(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),l}const BS=30,BP=e=>!isNaN(parseFloat(e));class zP{constructor(t,n={}){this.version="__VERSION__",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,s=!0)=>{var u,f;const l=Jn.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current)),s&&((f=this.events.renderRequest)==null||f.notify(this.current))},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Jn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=BP(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Qg);const a=this.events[t].add(n);return t==="change"?()=>{a(),Je.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,a){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Jn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>BS)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,BS);return eb(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t;(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rc(e,t){return new zP(e,t)}const VP=[...Nb,Vn,Rr],HP=e=>VP.find(Pb(e)),Vb=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Hb=et.createContext({strict:!1}),zS={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Do={};for(const e in zS)Do[e]={isEnabled:t=>zS[e].some(n=>!!t[n])};function GP(e){for(const t in e)Do[t]={...Do[t],...e[t]}}const kP=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Of(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||kP.has(e)}let Gb=e=>!Of(e);function XP(e){e&&(Gb=t=>t.startsWith("on")?!Of(t):e(t))}try{XP(require("@emotion/is-prop-valid").default)}catch{}function jP(e,t,n){const a={};for(const s in e)s==="values"&&typeof e.values=="object"||(Gb(s)||n===!0&&Of(s)||!t&&!Of(s)||e.draggable&&s.startsWith("onDrag"))&&(a[s]=e[s]);return a}function WP(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...a)=>e(...a);return new Proxy(n,{get:(a,s)=>s==="create"?e:(t.has(s)||t.set(s,e(s)),t.get(s))})}const jf=et.createContext({});function Wf(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function sc(e){return typeof e=="string"||Array.isArray(e)}const dv=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],pv=["initial",...dv];function qf(e){return Wf(e.animate)||pv.some(t=>sc(e[t]))}function kb(e){return!!(qf(e)||e.variants)}function qP(e,t){if(qf(e)){const{initial:n,animate:a}=e;return{initial:n===!1||sc(n)?n:void 0,animate:sc(a)?a:void 0}}return e.inherit!==!1?t:{}}function YP(e){const{initial:t,animate:n}=qP(e,et.useContext(jf));return et.useMemo(()=>({initial:t,animate:n}),[VS(t),VS(n)])}function VS(e){return Array.isArray(e)?e.join(" "):e}const KP=Symbol.for("motionComponentSymbol");function mo(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function ZP(e,t,n){return et.useCallback(a=>{a&&e.onMount&&e.onMount(a),t&&(a?t.mount(a):t.unmount()),n&&(typeof n=="function"?n(a):mo(n)&&(n.current=a))},[t])}const mv=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),QP="framerAppearId",Xb="data-"+mv(QP),jb=et.createContext({});function $P(e,t,n,a,s){var b,S;const{visualElement:l}=et.useContext(jf),u=et.useContext(Hb),f=et.useContext(Wg),h=et.useContext($E).reducedMotion,p=et.useRef(null);a=a||u.renderer,!p.current&&a&&(p.current=a(e,{visualState:t,parent:l,props:n,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:h}));const m=p.current,v=et.useContext(jb);m&&!m.projection&&s&&(m.type==="html"||m.type==="svg")&&JP(p.current,n,s,v);const _=et.useRef(!1);et.useInsertionEffect(()=>{m&&_.current&&m.update(n,f)});const x=n[Xb],M=et.useRef(!!x&&!((b=window.MotionHandoffIsComplete)!=null&&b.call(window,x))&&((S=window.MotionHasOptimisedAnimation)==null?void 0:S.call(window,x)));return jL(()=>{m&&(_.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),fv.render(m.render),M.current&&m.animationState&&m.animationState.animateChanges())}),et.useEffect(()=>{m&&(!M.current&&m.animationState&&m.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)==null||y.call(window,x)}),M.current=!1))}),m}function JP(e,t,n,a){const{layoutId:s,layout:l,drag:u,dragConstraints:f,layoutScroll:h,layoutRoot:p,layoutCrossfade:m}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Wb(e.parent)),e.projection.setOptions({layoutId:s,layout:l,alwaysMeasureLayout:!!u||f&&mo(f),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:a,crossfade:m,layoutScroll:h,layoutRoot:p})}function Wb(e){if(e)return e.options.allowProjection!==!1?e.projection:Wb(e.parent)}function tN({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:a,Component:s}){e&&GP(e);function l(f,h){let p;const m={...et.useContext($E),...f,layoutId:eN(f)},{isStatic:v}=m,_=YP(f),x=a(f,v);if(!v&&jg){nN();const M=iN(m);p=M.MeasureLayout,_.visualElement=$P(s,x,m,t,M.ProjectionNode)}return K.jsxs(jf.Provider,{value:_,children:[p&&_.visualElement?K.jsx(p,{visualElement:_.visualElement,...m}):null,n(s,f,ZP(x,_.visualElement,h),x,v,_.visualElement)]})}l.displayName=`motion.${typeof s=="string"?s:`create(${s.displayName??s.name??""})`}`;const u=et.forwardRef(l);return u[KP]=s,u}function eN({layoutId:e}){const t=et.useContext(QE).id;return t&&e!==void 0?t+"-"+e:e}function nN(e,t){et.useContext(Hb).strict}function iN(e){const{drag:t,layout:n}=Do;if(!t&&!n)return{};const a={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const oc={};function aN(e){for(const t in e)oc[t]=e[t],tv(t)&&(oc[t].isCSSVariable=!0)}function qb(e,{layout:t,layoutId:n}){return Io.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!oc[e]||e==="opacity")}const Hn=e=>!!(e&&e.getVelocity),rN={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},sN=Oo.length;function oN(e,t,n){let a="",s=!0;for(let l=0;l<sN;l++){const u=Oo[l],f=e[u];if(f===void 0)continue;let h=!0;if(typeof f=="number"?h=f===(u.startsWith("scale")?1:0):h=parseFloat(f)===0,!h||n){const p=Vb(f,uv[u]);if(!h){s=!1;const m=rN[u]||u;a+=`${m}(${p}) `}n&&(t[u]=p)}}return a=a.trim(),n?a=n(t,s?"":a):s&&(a="none"),a}function gv(e,t,n){const{style:a,vars:s,transformOrigin:l}=e;let u=!1,f=!1;for(const h in t){const p=t[h];if(Io.has(h)){u=!0;continue}else if(tv(h)){s[h]=p;continue}else{const m=Vb(p,uv[h]);h.startsWith("origin")?(f=!0,l[h]=m):a[h]=m}}if(t.transform||(u||n?a.transform=oN(t,e.transform,n):a.transform&&(a.transform="none")),f){const{originX:h="50%",originY:p="50%",originZ:m=0}=l;a.transformOrigin=`${h} ${p} ${m}`}}const vv=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Yb(e,t,n){for(const a in t)!Hn(t[a])&&!qb(a,n)&&(e[a]=t[a])}function lN({transformTemplate:e},t){return et.useMemo(()=>{const n=vv();return gv(n,t,e),Object.assign({},n.vars,n.style)},[t])}function cN(e,t){const n=e.style||{},a={};return Yb(a,n,e),Object.assign(a,lN(e,t)),a}function uN(e,t){const n={},a=cN(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=a,n}const fN=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function _v(e){return typeof e!="string"||e.includes("-")?!1:!!(fN.indexOf(e)>-1||/[A-Z]/u.test(e))}const hN={offset:"stroke-dashoffset",array:"stroke-dasharray"},dN={offset:"strokeDashoffset",array:"strokeDasharray"};function pN(e,t,n=1,a=0,s=!0){e.pathLength=1;const l=s?hN:dN;e[l.offset]=ie.transform(-a);const u=ie.transform(t),f=ie.transform(n);e[l.array]=`${u} ${f}`}function Kb(e,{attrX:t,attrY:n,attrScale:a,pathLength:s,pathSpacing:l=1,pathOffset:u=0,...f},h,p){if(gv(e,f,p),h){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:m,style:v}=e;m.transform&&(v.transform=m.transform,delete m.transform),(v.transform||m.transformOrigin)&&(v.transformOrigin=m.transformOrigin??"50% 50%",delete m.transformOrigin),v.transform&&(v.transformBox="fill-box",delete m.transformBox),t!==void 0&&(m.x=t),n!==void 0&&(m.y=n),a!==void 0&&(m.scale=a),s!==void 0&&pN(m,s,l,u,!1)}const Zb=()=>({...vv(),attrs:{}}),Qb=e=>typeof e=="string"&&e.toLowerCase()==="svg";function mN(e,t,n,a){const s=et.useMemo(()=>{const l=Zb();return Kb(l,t,Qb(a),e.transformTemplate),{...l.attrs,style:{...l.style}}},[t]);if(e.style){const l={};Yb(l,e.style,e),s.style={...l,...s.style}}return s}function gN(e=!1){return(n,a,s,{latestValues:l},u)=>{const h=(_v(n)?mN:uN)(a,l,u,n),p=jP(a,typeof n=="string",e),m=n!==et.Fragment?{...p,...h,ref:s}:{},{children:v}=a,_=et.useMemo(()=>Hn(v)?v.get():v,[v]);return et.createElement(n,{...m,children:_})}}function HS(e){const t=[{},{}];return e==null||e.values.forEach((n,a)=>{t[0][a]=n.get(),t[1][a]=n.getVelocity()}),t}function yv(e,t,n,a){if(typeof t=="function"){const[s,l]=HS(a);t=t(n!==void 0?n:e.custom,s,l)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[s,l]=HS(a);t=t(n!==void 0?n:e.custom,s,l)}return t}function Ef(e){return Hn(e)?e.get():e}function vN({scrapeMotionValuesFromProps:e,createRenderState:t},n,a,s){return{latestValues:_N(n,a,s,e),renderState:t()}}const $b=e=>(t,n)=>{const a=et.useContext(jf),s=et.useContext(Wg),l=()=>vN(e,t,a,s);return n?l():XL(l)};function _N(e,t,n,a){const s={},l=a(e,{});for(const _ in l)s[_]=Ef(l[_]);let{initial:u,animate:f}=e;const h=qf(e),p=kb(e);t&&p&&!h&&e.inherit!==!1&&(u===void 0&&(u=t.initial),f===void 0&&(f=t.animate));let m=n?n.initial===!1:!1;m=m||u===!1;const v=m?f:u;if(v&&typeof v!="boolean"&&!Wf(v)){const _=Array.isArray(v)?v:[v];for(let x=0;x<_.length;x++){const M=yv(e,_[x]);if(M){const{transitionEnd:b,transition:S,...y}=M;for(const L in y){let R=y[L];if(Array.isArray(R)){const w=m?R.length-1:0;R=R[w]}R!==null&&(s[L]=R)}for(const L in b)s[L]=b[L]}}}return s}function xv(e,t,n){var l;const{style:a}=e,s={};for(const u in a)(Hn(a[u])||t.style&&Hn(t.style[u])||qb(u,e)||((l=n==null?void 0:n.getValue(u))==null?void 0:l.liveStyle)!==void 0)&&(s[u]=a[u]);return s}const yN={useVisualState:$b({scrapeMotionValuesFromProps:xv,createRenderState:vv})};function Jb(e,t,n){const a=xv(e,t,n);for(const s in e)if(Hn(e[s])||Hn(t[s])){const l=Oo.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;a[l]=e[s]}return a}const xN={useVisualState:$b({scrapeMotionValuesFromProps:Jb,createRenderState:Zb})};function SN(e,t){return function(a,{forwardMotionProps:s}={forwardMotionProps:!1}){const u={..._v(a)?xN:yN,preloadedFeatures:e,useRender:gN(s),createVisualElement:t,Component:a};return tN(u)}}function lc(e,t,n){const a=e.getProps();return yv(a,t,n!==void 0?n:a.custom,e)}const og=e=>Array.isArray(e);function MN(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,rc(n))}function EN(e){return og(e)?e[e.length-1]||0:e}function bN(e,t){const n=lc(e,t);let{transitionEnd:a={},transition:s={},...l}=n||{};l={...l,...a};for(const u in l){const f=EN(l[u]);MN(e,u,f)}}function TN(e){return!!(Hn(e)&&e.add)}function lg(e,t){const n=e.getValue("willChange");if(TN(n))return n.add(t);if(!n&&Na.WillChange){const a=new Na.WillChange("auto");e.addValue("willChange",a),a.add(t)}}function tT(e){return e.props[Xb]}const AN=e=>e!==null;function RN(e,{repeat:t,repeatType:n="loop"},a){const s=e.filter(AN),l=t&&n!=="loop"&&t%2===1?0:s.length-1;return s[l]}const CN={type:"spring",stiffness:500,damping:25,restSpeed:10},wN=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),DN={type:"keyframes",duration:.8},LN={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},UN=(e,{keyframes:t})=>t.length>2?DN:Io.has(e)?e.startsWith("scale")?wN(t[1]):CN:LN;function PN({when:e,delay:t,delayChildren:n,staggerChildren:a,staggerDirection:s,repeat:l,repeatType:u,repeatDelay:f,from:h,elapsed:p,...m}){return!!Object.keys(m).length}const Sv=(e,t,n,a={},s,l)=>u=>{const f=cv(a,e)||{},h=f.delay||a.delay||0;let{elapsed:p=0}=a;p=p-Ki(h);const m={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...f,delay:-p,onUpdate:_=>{t.set(_),f.onUpdate&&f.onUpdate(_)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:e,motionValue:t,element:l?void 0:s};PN(f)||Object.assign(m,UN(e,m)),m.duration&&(m.duration=Ki(m.duration)),m.repeatDelay&&(m.repeatDelay=Ki(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let v=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(m.duration=0,m.delay===0&&(v=!0)),(Na.instantAnimations||Na.skipAnimations)&&(v=!0,m.duration=0,m.delay=0),m.allowFlatten=!f.type&&!f.ease,v&&!l&&t.get()!==void 0){const _=RN(m.keyframes,f);if(_!==void 0){Je.update(()=>{m.onUpdate(_),m.onComplete()});return}}return new _P(m)};function NN({protectedKeys:e,needsAnimating:t},n){const a=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,a}function eT(e,t,{delay:n=0,transitionOverride:a,type:s}={}){let{transition:l=e.getDefaultTransition(),transitionEnd:u,...f}=t;a&&(l=a);const h=[],p=s&&e.animationState&&e.animationState.getState()[s];for(const m in f){const v=e.getValue(m,e.latestValues[m]??null),_=f[m];if(_===void 0||p&&NN(p,m))continue;const x={delay:n,...cv(l||{},m)},M=v.get();if(M!==void 0&&!v.isAnimating&&!Array.isArray(_)&&_===M&&!x.velocity)continue;let b=!1;if(window.MotionHandoffAnimation){const y=tT(e);if(y){const L=window.MotionHandoffAnimation(y,m,Je);L!==null&&(x.startTime=L,b=!0)}}lg(e,m),v.start(Sv(m,v,_,e.shouldReduceMotion&&Ub.has(m)?{type:!1}:x,e,b));const S=v.animation;S&&h.push(S)}return u&&Promise.all(h).then(()=>{Je.update(()=>{u&&bN(e,u)})}),h}function cg(e,t,n={}){var h;const a=lc(e,t,n.type==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=a||{};n.transitionOverride&&(s=n.transitionOverride);const l=a?()=>Promise.all(eT(e,a,n)):()=>Promise.resolve(),u=e.variantChildren&&e.variantChildren.size?(p=0)=>{const{delayChildren:m=0,staggerChildren:v,staggerDirection:_}=s;return ON(e,t,m+p,v,_,n)}:()=>Promise.resolve(),{when:f}=s;if(f){const[p,m]=f==="beforeChildren"?[l,u]:[u,l];return p().then(()=>m())}else return Promise.all([l(),u(n.delay)])}function ON(e,t,n=0,a=0,s=1,l){const u=[],f=(e.variantChildren.size-1)*a,h=s===1?(p=0)=>p*a:(p=0)=>f-p*a;return Array.from(e.variantChildren).sort(IN).forEach((p,m)=>{p.notify("AnimationStart",t),u.push(cg(p,t,{...l,delay:n+h(m)}).then(()=>p.notify("AnimationComplete",t)))}),Promise.all(u)}function IN(e,t){return e.sortNodePosition(t)}function FN(e,t,n={}){e.notify("AnimationStart",t);let a;if(Array.isArray(t)){const s=t.map(l=>cg(e,l,n));a=Promise.all(s)}else if(typeof t=="string")a=cg(e,t,n);else{const s=typeof t=="function"?lc(e,t,n.custom):t;a=Promise.all(eT(e,s,n))}return a.then(()=>{e.notify("AnimationComplete",t)})}function nT(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let a=0;a<n;a++)if(t[a]!==e[a])return!1;return!0}const BN=pv.length;function iT(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?iT(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<BN;n++){const a=pv[n],s=e.props[a];(sc(s)||s===!1)&&(t[a]=s)}return t}const zN=[...dv].reverse(),VN=dv.length;function HN(e){return t=>Promise.all(t.map(({animation:n,options:a})=>FN(e,n,a)))}function GN(e){let t=HN(e),n=GS(),a=!0;const s=h=>(p,m)=>{var _;const v=lc(e,m,h==="exit"?(_=e.presenceContext)==null?void 0:_.custom:void 0);if(v){const{transition:x,transitionEnd:M,...b}=v;p={...p,...b,...M}}return p};function l(h){t=h(e)}function u(h){const{props:p}=e,m=iT(e.parent)||{},v=[],_=new Set;let x={},M=1/0;for(let S=0;S<VN;S++){const y=zN[S],L=n[y],R=p[y]!==void 0?p[y]:m[y],w=sc(R),N=y===h?L.isActive:null;N===!1&&(M=S);let z=R===m[y]&&R!==p[y]&&w;if(z&&a&&e.manuallyAnimateOnMount&&(z=!1),L.protectedKeys={...x},!L.isActive&&N===null||!R&&!L.prevProp||Wf(R)||typeof R=="boolean")continue;const I=kN(L.prevProp,R);let V=I||y===h&&L.isActive&&!z&&w||S>M&&w,U=!1;const D=Array.isArray(R)?R:[R];let G=D.reduce(s(y),{});N===!1&&(G={});const{prevResolvedValues:ct={}}=L,lt={...ct,...G},mt=j=>{V=!0,_.has(j)&&(U=!0,_.delete(j)),L.needsAnimating[j]=!0;const W=e.getValue(j);W&&(W.liveStyle=!1)};for(const j in lt){const W=G[j],Mt=ct[j];if(x.hasOwnProperty(j))continue;let P=!1;og(W)&&og(Mt)?P=!nT(W,Mt):P=W!==Mt,P?W!=null?mt(j):_.add(j):W!==void 0&&_.has(j)?mt(j):L.protectedKeys[j]=!0}L.prevProp=R,L.prevResolvedValues=G,L.isActive&&(x={...x,...G}),a&&e.blockInitialAnimation&&(V=!1),V&&(!(z&&I)||U)&&v.push(...D.map(j=>({animation:j,options:{type:y}})))}if(_.size){const S={};if(typeof p.initial!="boolean"){const y=lc(e,Array.isArray(p.initial)?p.initial[0]:p.initial);y&&y.transition&&(S.transition=y.transition)}_.forEach(y=>{const L=e.getBaseTarget(y),R=e.getValue(y);R&&(R.liveStyle=!0),S[y]=L??null}),v.push({animation:S})}let b=!!v.length;return a&&(p.initial===!1||p.initial===p.animate)&&!e.manuallyAnimateOnMount&&(b=!1),a=!1,b?t(v):Promise.resolve()}function f(h,p){var v;if(n[h].isActive===p)return Promise.resolve();(v=e.variantChildren)==null||v.forEach(_=>{var x;return(x=_.animationState)==null?void 0:x.setActive(h,p)}),n[h].isActive=p;const m=u(h);for(const _ in n)n[_].protectedKeys={};return m}return{animateChanges:u,setActive:f,setAnimateFunction:l,getState:()=>n,reset:()=>{n=GS(),a=!0}}}function kN(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!nT(t,e):!1}function is(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function GS(){return{animate:is(!0),whileInView:is(),whileHover:is(),whileTap:is(),whileDrag:is(),whileFocus:is(),exit:is()}}class Lr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class XN extends Lr{constructor(t){super(t),t.animationState||(t.animationState=GN(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Wf(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let jN=0;class WN extends Lr{constructor(){super(...arguments),this.id=jN++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const s=this.node.animationState.setActive("exit",!t);n&&!t&&s.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const qN={animation:{Feature:XN},exit:{Feature:WN}};function cc(e,t,n,a={passive:!0}){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n)}function Mc(e){return{point:{x:e.pageX,y:e.pageY}}}const YN=e=>t=>hv(t)&&e(t,Mc(t));function Wl(e,t,n,a){return cc(e,t,YN(n),a)}function aT({top:e,left:t,right:n,bottom:a}){return{x:{min:t,max:n},y:{min:e,max:a}}}function KN({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function ZN(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),a=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:a.y,right:a.x}}const rT=1e-4,QN=1-rT,$N=1+rT,sT=.01,JN=0-sT,tO=0+sT;function jn(e){return e.max-e.min}function eO(e,t,n){return Math.abs(e-t)<=n}function kS(e,t,n,a=.5){e.origin=a,e.originPoint=$e(t.min,t.max,e.origin),e.scale=jn(n)/jn(t),e.translate=$e(n.min,n.max,e.origin)-e.originPoint,(e.scale>=QN&&e.scale<=$N||isNaN(e.scale))&&(e.scale=1),(e.translate>=JN&&e.translate<=tO||isNaN(e.translate))&&(e.translate=0)}function ql(e,t,n,a){kS(e.x,t.x,n.x,a?a.originX:void 0),kS(e.y,t.y,n.y,a?a.originY:void 0)}function XS(e,t,n){e.min=n.min+t.min,e.max=e.min+jn(t)}function nO(e,t,n){XS(e.x,t.x,n.x),XS(e.y,t.y,n.y)}function jS(e,t,n){e.min=t.min-n.min,e.max=e.min+jn(t)}function Yl(e,t,n){jS(e.x,t.x,n.x),jS(e.y,t.y,n.y)}const WS=()=>({translate:0,scale:1,origin:0,originPoint:0}),go=()=>({x:WS(),y:WS()}),qS=()=>({min:0,max:0}),on=()=>({x:qS(),y:qS()});function Ei(e){return[e("x"),e("y")]}function Xp(e){return e===void 0||e===1}function ug({scale:e,scaleX:t,scaleY:n}){return!Xp(e)||!Xp(t)||!Xp(n)}function ss(e){return ug(e)||oT(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function oT(e){return YS(e.x)||YS(e.y)}function YS(e){return e&&e!=="0%"}function If(e,t,n){const a=e-n,s=t*a;return n+s}function KS(e,t,n,a,s){return s!==void 0&&(e=If(e,s,a)),If(e,n,a)+t}function fg(e,t=0,n=1,a,s){e.min=KS(e.min,t,n,a,s),e.max=KS(e.max,t,n,a,s)}function lT(e,{x:t,y:n}){fg(e.x,t.translate,t.scale,t.originPoint),fg(e.y,n.translate,n.scale,n.originPoint)}const ZS=.999999999999,QS=1.0000000000001;function iO(e,t,n,a=!1){const s=n.length;if(!s)return;t.x=t.y=1;let l,u;for(let f=0;f<s;f++){l=n[f],u=l.projectionDelta;const{visualElement:h}=l.options;h&&h.props.style&&h.props.style.display==="contents"||(a&&l.options.layoutScroll&&l.scroll&&l!==l.root&&_o(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,lT(e,u)),a&&ss(l.latestValues)&&_o(e,l.latestValues))}t.x<QS&&t.x>ZS&&(t.x=1),t.y<QS&&t.y>ZS&&(t.y=1)}function vo(e,t){e.min=e.min+t,e.max=e.max+t}function $S(e,t,n,a,s=.5){const l=$e(e.min,e.max,s);fg(e,t,n,l,a)}function _o(e,t){$S(e.x,t.x,t.scaleX,t.scale,t.originX),$S(e.y,t.y,t.scaleY,t.scale,t.originY)}function cT(e,t){return aT(ZN(e.getBoundingClientRect(),t))}function aO(e,t,n){const a=cT(e,n),{scroll:s}=t;return s&&(vo(a.x,s.offset.x),vo(a.y,s.offset.y)),a}const uT=({current:e})=>e?e.ownerDocument.defaultView:null,JS=(e,t)=>Math.abs(e-t);function rO(e,t){const n=JS(e.x,t.x),a=JS(e.y,t.y);return Math.sqrt(n**2+a**2)}class fT{constructor(t,n,{transformPagePoint:a,contextWindow:s,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Wp(this.lastMoveEventInfo,this.history),_=this.startEvent!==null,x=rO(v.offset,{x:0,y:0})>=3;if(!_&&!x)return;const{point:M}=v,{timestamp:b}=Pn;this.history.push({...M,timestamp:b});const{onStart:S,onMove:y}=this.handlers;_||(S&&S(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,v)},this.handlePointerMove=(v,_)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=jp(_,this.transformPagePoint),Je.update(this.updatePoint,!0)},this.handlePointerUp=(v,_)=>{this.end();const{onEnd:x,onSessionEnd:M,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Wp(v.type==="pointercancel"?this.lastMoveEventInfo:jp(_,this.transformPagePoint),this.history);this.startEvent&&x&&x(v,S),M&&M(v,S)},!hv(t))return;this.dragSnapToOrigin=l,this.handlers=n,this.transformPagePoint=a,this.contextWindow=s||window;const u=Mc(t),f=jp(u,this.transformPagePoint),{point:h}=f,{timestamp:p}=Pn;this.history=[{...h,timestamp:p}];const{onSessionStart:m}=n;m&&m(t,Wp(f,this.history)),this.removeListeners=yc(Wl(this.contextWindow,"pointermove",this.handlePointerMove),Wl(this.contextWindow,"pointerup",this.handlePointerUp),Wl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ar(this.updatePoint)}}function jp(e,t){return t?{point:t(e.point)}:e}function tM(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Wp({point:e},t){return{point:e,delta:tM(e,hT(t)),offset:tM(e,sO(t)),velocity:oO(t,.1)}}function sO(e){return e[0]}function hT(e){return e[e.length-1]}function oO(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,a=null;const s=hT(e);for(;n>=0&&(a=e[n],!(s.timestamp-a.timestamp>Ki(t)));)n--;if(!a)return{x:0,y:0};const l=Zi(s.timestamp-a.timestamp);if(l===0)return{x:0,y:0};const u={x:(s.x-a.x)/l,y:(s.y-a.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function lO(e,{min:t,max:n},a){return t!==void 0&&e<t?e=a?$e(t,e,a.min):Math.max(e,t):n!==void 0&&e>n&&(e=a?$e(n,e,a.max):Math.min(e,n)),e}function eM(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function cO(e,{top:t,left:n,bottom:a,right:s}){return{x:eM(e.x,n,s),y:eM(e.y,t,a)}}function nM(e,t){let n=t.min-e.min,a=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,a]=[a,n]),{min:n,max:a}}function uO(e,t){return{x:nM(e.x,t.x),y:nM(e.y,t.y)}}function fO(e,t){let n=.5;const a=jn(e),s=jn(t);return s>a?n=nc(t.min,t.max-a,e.min):a>s&&(n=nc(e.min,e.max-s,t.min)),Pa(0,1,n)}function hO(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const hg=.35;function dO(e=hg){return e===!1?e=0:e===!0&&(e=hg),{x:iM(e,"left","right"),y:iM(e,"top","bottom")}}function iM(e,t,n){return{min:aM(e,t),max:aM(e,n)}}function aM(e,t){return typeof e=="number"?e:e[t]||0}const pO=new WeakMap;class mO{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=on(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const s=m=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Mc(m).point)},l=(m,v)=>{const{drag:_,dragPropagation:x,onDragStart:M}=this.getProps();if(_&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=UP(_),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ei(S=>{let y=this.getAxisMotionValue(S).get()||0;if(Qi.test(y)){const{projection:L}=this.visualElement;if(L&&L.layout){const R=L.layout.layoutBox[S];R&&(y=jn(R)*(parseFloat(y)/100))}}this.originPoint[S]=y}),M&&Je.postRender(()=>M(m,v)),lg(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},u=(m,v)=>{const{dragPropagation:_,dragDirectionLock:x,onDirectionLock:M,onDrag:b}=this.getProps();if(!_&&!this.openDragLock)return;const{offset:S}=v;if(x&&this.currentDirection===null){this.currentDirection=gO(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",v.point,S),this.updateAxis("y",v.point,S),this.visualElement.render(),b&&b(m,v)},f=(m,v)=>this.stop(m,v),h=()=>Ei(m=>{var v;return this.getAnimationState(m)==="paused"&&((v=this.getAxisMotionValue(m).animation)==null?void 0:v.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new fT(t,{onSessionStart:s,onStart:l,onMove:u,onSessionEnd:f,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,contextWindow:uT(this.visualElement)})}stop(t,n){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:l}=this.getProps();l&&Je.postRender(()=>l(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,a){const{drag:s}=this.getProps();if(!a||!ff(t,s,this.currentDirection))return;const l=this.getAxisMotionValue(t);let u=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(u=lO(u,this.constraints[t],this.elastic[t])),l.set(u)}resolveConstraints(){var l;const{dragConstraints:t,dragElastic:n}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,s=this.constraints;t&&mo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&a?this.constraints=cO(a.layoutBox,t):this.constraints=!1,this.elastic=dO(n),s!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&Ei(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=hO(a.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!mo(t))return!1;const a=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const l=aO(a,s.root,this.visualElement.getTransformPagePoint());let u=uO(s.layout.layoutBox,l);if(n){const f=n(KN(u));this.hasMutatedConstraints=!!f,f&&(u=aT(f))}return u}startAnimation(t){const{drag:n,dragMomentum:a,dragElastic:s,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),h=this.constraints||{},p=Ei(m=>{if(!ff(m,n,this.currentDirection))return;let v=h&&h[m]||{};u&&(v={min:0,max:0});const _=s?200:1e6,x=s?40:1e7,M={type:"inertia",velocity:a?t[m]:0,bounceStiffness:_,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...l,...v};return this.startAxisValueAnimation(m,M)});return Promise.all(p).then(f)}startAxisValueAnimation(t,n){const a=this.getAxisMotionValue(t);return lg(this.visualElement,t),a.start(Sv(t,a,0,n,this.visualElement,!1))}stopAnimation(){Ei(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ei(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),s=a[n];return s||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){Ei(n=>{const{drag:a}=this.getProps();if(!ff(n,a,this.currentDirection))return;const{projection:s}=this.visualElement,l=this.getAxisMotionValue(n);if(s&&s.layout){const{min:u,max:f}=s.layout.layoutBox[n];l.set(t[n]-$e(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:a}=this.visualElement;if(!mo(n)||!a||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Ei(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const h=f.get();s[u]=fO({min:h,max:h},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Ei(u=>{if(!ff(u,t,null))return;const f=this.getAxisMotionValue(u),{min:h,max:p}=this.constraints[u];f.set($e(h,p,s[u]))})}addListeners(){if(!this.visualElement.current)return;pO.set(this.visualElement,this);const t=this.visualElement.current,n=Wl(t,"pointerdown",h=>{const{drag:p,dragListener:m=!0}=this.getProps();p&&m&&this.start(h)}),a=()=>{const{dragConstraints:h}=this.getProps();mo(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,l=s.addEventListener("measure",a);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),Je.read(a);const u=cc(window,"resize",()=>this.scalePositionWithinConstraints()),f=s.addEventListener("didUpdate",({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Ei(m=>{const v=this.getAxisMotionValue(m);v&&(this.originPoint[m]+=h[m].translate,v.set(v.get()+h[m].translate))}),this.visualElement.render())});return()=>{u(),n(),l(),f&&f()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:a=!1,dragPropagation:s=!1,dragConstraints:l=!1,dragElastic:u=hg,dragMomentum:f=!0}=t;return{...t,drag:n,dragDirectionLock:a,dragPropagation:s,dragConstraints:l,dragElastic:u,dragMomentum:f}}}function ff(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function gO(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class vO extends Lr{constructor(t){super(t),this.removeGroupControls=Ti,this.removeListeners=Ti,this.controls=new mO(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ti}unmount(){this.removeGroupControls(),this.removeListeners()}}const rM=e=>(t,n)=>{e&&Je.postRender(()=>e(t,n))};class _O extends Lr{constructor(){super(...arguments),this.removePointerDownListener=Ti}onPointerDown(t){this.session=new fT(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:uT(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:a,onPanEnd:s}=this.node.getProps();return{onSessionStart:rM(t),onStart:rM(n),onMove:a,onEnd:(l,u)=>{delete this.session,s&&Je.postRender(()=>s(l,u))}}}mount(){this.removePointerDownListener=Wl(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const bf={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function sM(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Bl={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(ie.test(e))e=parseFloat(e);else return e;const n=sM(e,t.target.x),a=sM(e,t.target.y);return`${n}% ${a}%`}},yO={correct:(e,{treeScale:t,projectionDelta:n})=>{const a=e,s=Rr.parse(e);if(s.length>5)return a;const l=Rr.createTransformer(e),u=typeof s[0]!="number"?1:0,f=n.x.scale*t.x,h=n.y.scale*t.y;s[0+u]/=f,s[1+u]/=h;const p=$e(f,h,.5);return typeof s[2+u]=="number"&&(s[2+u]/=p),typeof s[3+u]=="number"&&(s[3+u]/=p),l(s)}};class xO extends et.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a,layoutId:s}=this.props,{projection:l}=t;aN(SO),l&&(n.group&&n.group.add(l),a&&a.register&&s&&a.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),bf.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:a,drag:s,isPresent:l}=this.props,u=a.projection;return u&&(u.isPresent=l,s||t.layoutDependency!==n||n===void 0||t.isPresent!==l?u.willUpdate():this.safeToRemove(),t.isPresent!==l&&(l?u.promote():u.relegate()||Je.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),fv.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a}=this.props,{projection:s}=t;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),a&&a.deregister&&a.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function dT(e){const[t,n]=WL(),a=et.useContext(QE);return K.jsx(xO,{...e,layoutGroup:a,switchLayoutGroup:et.useContext(jb),isPresent:t,safeToRemove:n})}const SO={borderRadius:{...Bl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Bl,borderTopRightRadius:Bl,borderBottomLeftRadius:Bl,borderBottomRightRadius:Bl,boxShadow:yO};function MO(e,t,n){const a=Hn(e)?e:rc(e);return a.start(Sv("",a,t,n)),a.animation}function EO(e){return e instanceof SVGElement&&e.tagName!=="svg"}const bO=(e,t)=>e.depth-t.depth;class TO{constructor(){this.children=[],this.isDirty=!1}add(t){qg(this.children,t),this.isDirty=!0}remove(t){Yg(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(bO),this.isDirty=!1,this.children.forEach(t)}}function AO(e,t){const n=Jn.now(),a=({timestamp:s})=>{const l=s-n;l>=t&&(Ar(a),e(l-t))};return Je.setup(a,!0),()=>Ar(a)}const pT=["TopLeft","TopRight","BottomLeft","BottomRight"],RO=pT.length,oM=e=>typeof e=="string"?parseFloat(e):e,lM=e=>typeof e=="number"||ie.test(e);function CO(e,t,n,a,s,l){s?(e.opacity=$e(0,n.opacity??1,wO(a)),e.opacityExit=$e(t.opacity??1,0,DO(a))):l&&(e.opacity=$e(t.opacity??1,n.opacity??1,a));for(let u=0;u<RO;u++){const f=`border${pT[u]}Radius`;let h=cM(t,f),p=cM(n,f);if(h===void 0&&p===void 0)continue;h||(h=0),p||(p=0),h===0||p===0||lM(h)===lM(p)?(e[f]=Math.max($e(oM(h),oM(p),a),0),(Qi.test(p)||Qi.test(h))&&(e[f]+="%")):e[f]=p}(t.rotate||n.rotate)&&(e.rotate=$e(t.rotate||0,n.rotate||0,a))}function cM(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const wO=mT(0,.5,lb),DO=mT(.5,.95,Ti);function mT(e,t,n){return a=>a<e?0:a>t?1:n(nc(e,t,a))}function uM(e,t){e.min=t.min,e.max=t.max}function Mi(e,t){uM(e.x,t.x),uM(e.y,t.y)}function fM(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function hM(e,t,n,a,s){return e-=t,e=If(e,1/n,a),s!==void 0&&(e=If(e,1/s,a)),e}function LO(e,t=0,n=1,a=.5,s,l=e,u=e){if(Qi.test(t)&&(t=parseFloat(t),t=$e(u.min,u.max,t/100)-u.min),typeof t!="number")return;let f=$e(l.min,l.max,a);e===l&&(f-=t),e.min=hM(e.min,t,n,f,s),e.max=hM(e.max,t,n,f,s)}function dM(e,t,[n,a,s],l,u){LO(e,t[n],t[a],t[s],t.scale,l,u)}const UO=["x","scaleX","originX"],PO=["y","scaleY","originY"];function pM(e,t,n,a){dM(e.x,t,UO,n?n.x:void 0,a?a.x:void 0),dM(e.y,t,PO,n?n.y:void 0,a?a.y:void 0)}function mM(e){return e.translate===0&&e.scale===1}function gT(e){return mM(e.x)&&mM(e.y)}function gM(e,t){return e.min===t.min&&e.max===t.max}function NO(e,t){return gM(e.x,t.x)&&gM(e.y,t.y)}function vM(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function vT(e,t){return vM(e.x,t.x)&&vM(e.y,t.y)}function _M(e){return jn(e.x)/jn(e.y)}function yM(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class OO{constructor(){this.members=[]}add(t){qg(this.members,t),t.scheduleRender()}remove(t){if(Yg(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(s=>t===s);if(n===0)return!1;let a;for(let s=n;s>=0;s--){const l=this.members[s];if(l.isPresent!==!1){a=l;break}}return a?(this.promote(a),!0):!1}promote(t,n){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender(),t.resumeFrom=a,n&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;s===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:a}=t;n.onExitComplete&&n.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function IO(e,t,n){let a="";const s=e.x.translate/t.x,l=e.y.translate/t.y,u=(n==null?void 0:n.z)||0;if((s||l||u)&&(a=`translate3d(${s}px, ${l}px, ${u}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:p,rotate:m,rotateX:v,rotateY:_,skewX:x,skewY:M}=n;p&&(a=`perspective(${p}px) ${a}`),m&&(a+=`rotate(${m}deg) `),v&&(a+=`rotateX(${v}deg) `),_&&(a+=`rotateY(${_}deg) `),x&&(a+=`skewX(${x}deg) `),M&&(a+=`skewY(${M}deg) `)}const f=e.x.scale*t.x,h=e.y.scale*t.y;return(f!==1||h!==1)&&(a+=`scale(${f}, ${h})`),a||"none"}const qp=["","X","Y","Z"],FO={visibility:"hidden"},xM=1e3;let BO=0;function Yp(e,t,n,a){const{latestValues:s}=t;s[e]&&(n[e]=s[e],t.setStaticValue(e,0),a&&(a[e]=0))}function _T(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=tT(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:s,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Je,!(s||l))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&_T(a)}function yT({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:a,resetTransform:s}){return class{constructor(u={},f=t==null?void 0:t()){this.id=BO++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(HO),this.nodes.forEach(WO),this.nodes.forEach(qO),this.nodes.forEach(GO)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new TO)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Qg),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const h=this.eventHandlers.get(u);h&&h.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=EO(u),this.instance=u;const{layoutId:h,layout:p,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(p||h)&&(this.isLayoutDirty=!0),e){let v;const _=()=>this.root.updateBlockedByResize=!1;e(u,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=AO(_,250),bf.hasAnimatedSinceResize&&(bf.hasAnimatedSinceResize=!1,this.nodes.forEach(MM))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&m&&(h||p)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:_,hasRelativeLayoutChanged:x,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||m.getDefaultTransition()||$O,{onLayoutAnimationStart:S,onLayoutAnimationComplete:y}=m.getProps(),L=!this.targetLayout||!vT(this.targetLayout,M),R=!_&&x;if(this.options.layoutRoot||this.resumeFrom||R||_&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,R);const w={...cv(b,"layout"),onPlay:S,onComplete:y};(m.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else _||MM(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ar(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(YO),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&_T(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const v=this.path[m];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:h}=this.options;if(f===void 0&&!h)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(SM);return}this.isUpdating||this.nodes.forEach(XO),this.isUpdating=!1,this.nodes.forEach(jO),this.nodes.forEach(zO),this.nodes.forEach(VO),this.clearAllSnapshots();const f=Jn.now();Pn.delta=Pa(0,1e3/60,f-Pn.timestamp),Pn.timestamp=f,Pn.isProcessing=!0,zp.update.process(Pn),zp.preRender.process(Pn),zp.render.process(Pn),Pn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,fv.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(kO),this.sharedNodes.forEach(KO)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Je.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Je.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!jn(this.snapshot.measuredBox.x)&&!jn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=on(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f){const h=a(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:h,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!s)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!gT(this.projectionDelta),h=this.getTransformTemplate(),p=h?h(this.latestValues,""):void 0,m=p!==this.prevTransformTemplateValue;u&&(f||ss(this.latestValues)||m)&&(s(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let h=this.removeElementScroll(f);return u&&(h=this.removeTransform(h)),JO(h),{animationId:this.root.animationId,measuredBox:f,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:u}=this.options;if(!u)return on();const f=u.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(tI))){const{scroll:m}=this.root;m&&(vo(f.x,m.offset.x),vo(f.y,m.offset.y))}return f}removeElementScroll(u){var h;const f=on();if(Mi(f,u),(h=this.scroll)!=null&&h.wasRoot)return f;for(let p=0;p<this.path.length;p++){const m=this.path[p],{scroll:v,options:_}=m;m!==this.root&&v&&_.layoutScroll&&(v.wasRoot&&Mi(f,u),vo(f.x,v.offset.x),vo(f.y,v.offset.y))}return f}applyTransform(u,f=!1){const h=on();Mi(h,u);for(let p=0;p<this.path.length;p++){const m=this.path[p];!f&&m.options.layoutScroll&&m.scroll&&m!==m.root&&_o(h,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),ss(m.latestValues)&&_o(h,m.latestValues)}return ss(this.latestValues)&&_o(h,this.latestValues),h}removeTransform(u){const f=on();Mi(f,u);for(let h=0;h<this.path.length;h++){const p=this.path[h];if(!p.instance||!ss(p.latestValues))continue;ug(p.latestValues)&&p.updateSnapshot();const m=on(),v=p.measurePageBox();Mi(m,v),pM(f,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,m)}return ss(this.latestValues)&&pM(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Pn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var _;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(_=this.parent)!=null&&_.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:v}=this.options;if(!(!this.layout||!(m||v))){if(this.resolvedRelativeTargetAt=Pn.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=on(),this.relativeTargetOrigin=on(),Yl(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),Mi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=on(),this.targetWithTransforms=on()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),nO(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Mi(this.target,this.layout.layoutBox),lT(this.target,this.targetDelta)):Mi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=on(),this.relativeTargetOrigin=on(),Yl(this.relativeTargetOrigin,this.target,x.target),Mi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||ug(this.parent.latestValues)||oT(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var M;const u=this.getLead(),f=!!this.resumingFrom||this!==u;let h=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Pn.timestamp&&(h=!1),h)return;const{layout:p,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||m))return;Mi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,_=this.treeScale.y;iO(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=on());const{target:x}=u;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(fM(this.prevProjectionDelta.x,this.projectionDelta.x),fM(this.prevProjectionDelta.y,this.projectionDelta.y)),ql(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==_||!yM(this.projectionDelta.x,this.prevProjectionDelta.x)||!yM(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),u){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=go(),this.projectionDelta=go(),this.projectionDeltaWithTransform=go()}setAnimationOrigin(u,f=!1){const h=this.snapshot,p=h?h.latestValues:{},m={...this.latestValues},v=go();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const _=on(),x=h?h.source:void 0,M=this.layout?this.layout.source:void 0,b=x!==M,S=this.getStack(),y=!S||S.members.length<=1,L=!!(b&&!y&&this.options.crossfade===!0&&!this.path.some(QO));this.animationProgress=0;let R;this.mixTargetDelta=w=>{const N=w/1e3;EM(v.x,u.x,N),EM(v.y,u.y,N),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Yl(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox),ZO(this.relativeTarget,this.relativeTargetOrigin,_,N),R&&NO(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=on()),Mi(R,this.relativeTarget)),b&&(this.animationValues=m,CO(m,p,this.latestValues,N,L,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ar(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Je.update(()=>{bf.hasAnimatedSinceResize=!0,this.currentAnimation=MO(0,xM,{...u,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(xM),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:h,layout:p,latestValues:m}=u;if(!(!f||!h||!p)){if(this!==u&&this.layout&&p&&xT(this.options.animationType,this.layout.layoutBox,p.layoutBox)){h=this.target||on();const v=jn(this.layout.layoutBox.x);h.x.min=u.target.x.min,h.x.max=h.x.min+v;const _=jn(this.layout.layoutBox.y);h.y.min=u.target.y.min,h.y.max=h.y.min+_}Mi(f,h),_o(f,m),ql(this.projectionDeltaWithTransform,this.layoutCorrected,f,m)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new OO),this.sharedNodes.get(u).add(f);const p=f.options.initialPromotionConfig;f.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var f;const{layoutId:u}=this.options;return u?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:u}=this.options;return u?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:h}={}){const p=this.getStack();p&&p.promote(this,h),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:h}=u;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(f=!0),!f)return;const p={};h.z&&Yp("z",u,p,this.animationValues);for(let m=0;m<qp.length;m++)Yp(`rotate${qp[m]}`,u,p,this.animationValues),Yp(`skew${qp[m]}`,u,p,this.animationValues);u.render();for(const m in p)u.setStaticValue(m,p[m]),this.animationValues&&(this.animationValues[m]=p[m]);u.scheduleRender()}getProjectionStyles(u){if(!this.instance||this.isSVG)return;if(!this.isVisible)return FO;const f={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=Ef(u==null?void 0:u.pointerEvents)||"",f.transform=h?h(this.latestValues,""):"none",f;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Ef(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!ss(this.latestValues)&&(x.transform=h?h({},""):"none",this.hasProjected=!1),x}const m=p.animationValues||p.latestValues;this.applyTransformsToTarget(),f.transform=IO(this.projectionDeltaWithTransform,this.treeScale,m),h&&(f.transform=h(m,f.transform));const{x:v,y:_}=this.projectionDelta;f.transformOrigin=`${v.origin*100}% ${_.origin*100}% 0`,p.animationValues?f.opacity=p===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:f.opacity=p===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const x in oc){if(m[x]===void 0)continue;const{correct:M,applyTo:b,isCSSVariable:S}=oc[x],y=f.transform==="none"?m[x]:M(m[x],p);if(b){const L=b.length;for(let R=0;R<L;R++)f[b[R]]=y}else S?this.options.visualElement.renderState.vars[x]=y:f[x]=y}return this.options.layoutId&&(f.pointerEvents=p===this?Ef(u==null?void 0:u.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(SM),this.root.sharedNodes.clear()}}}function zO(e){e.updateLayout()}function VO(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:s}=e.layout,{animationType:l}=e.options,u=t.source!==e.layout.source;l==="size"?Ei(v=>{const _=u?t.measuredBox[v]:t.layoutBox[v],x=jn(_);_.min=a[v].min,_.max=_.min+x}):xT(l,t.layoutBox,a)&&Ei(v=>{const _=u?t.measuredBox[v]:t.layoutBox[v],x=jn(a[v]);_.max=_.min+x,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[v].max=e.relativeTarget[v].min+x)});const f=go();ql(f,a,t.layoutBox);const h=go();u?ql(h,e.applyTransform(s,!0),t.measuredBox):ql(h,a,t.layoutBox);const p=!gT(f);let m=!1;if(!e.resumeFrom){const v=e.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:_,layout:x}=v;if(_&&x){const M=on();Yl(M,t.layoutBox,_.layoutBox);const b=on();Yl(b,a,x.layoutBox),vT(M,b)||(m=!0),v.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=M,e.relativeParent=v)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:t,delta:h,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:m})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function HO(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function GO(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function kO(e){e.clearSnapshot()}function SM(e){e.clearMeasurements()}function XO(e){e.isLayoutDirty=!1}function jO(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function MM(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function WO(e){e.resolveTargetDelta()}function qO(e){e.calcProjection()}function YO(e){e.resetSkewAndRotation()}function KO(e){e.removeLeadSnapshot()}function EM(e,t,n){e.translate=$e(t.translate,0,n),e.scale=$e(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function bM(e,t,n,a){e.min=$e(t.min,n.min,a),e.max=$e(t.max,n.max,a)}function ZO(e,t,n,a){bM(e.x,t.x,n.x,a),bM(e.y,t.y,n.y,a)}function QO(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const $O={duration:.45,ease:[.4,0,.1,1]},TM=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),AM=TM("applewebkit/")&&!TM("chrome/")?Math.round:Ti;function RM(e){e.min=AM(e.min),e.max=AM(e.max)}function JO(e){RM(e.x),RM(e.y)}function xT(e,t,n){return e==="position"||e==="preserve-aspect"&&!eO(_M(t),_M(n),.2)}function tI(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const eI=yT({attachResizeListener:(e,t)=>cc(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Kp={current:void 0},ST=yT({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Kp.current){const e=new eI({});e.mount(window),e.setOptions({layoutScroll:!0}),Kp.current=e}return Kp.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),nI={pan:{Feature:_O},drag:{Feature:vO,ProjectionNode:ST,MeasureLayout:dT}};function CM(e,t,n){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",n==="Start");const s="onHover"+n,l=a[s];l&&Je.postRender(()=>l(t,Mc(t)))}class iI extends Lr{mount(){const{current:t}=this.node;t&&(this.unmount=PP(t,(n,a)=>(CM(this.node,a,"Start"),s=>CM(this.node,s,"End"))))}unmount(){}}class aI extends Lr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=yc(cc(this.node.current,"focus",()=>this.onFocus()),cc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function wM(e,t,n){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",n==="Start");const s="onTap"+(n==="End"?"":n),l=a[s];l&&Je.postRender(()=>l(t,Mc(t)))}class rI extends Lr{mount(){const{current:t}=this.node;t&&(this.unmount=FP(t,(n,a)=>(wM(this.node,a,"Start"),(s,{success:l})=>wM(this.node,s,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const dg=new WeakMap,Zp=new WeakMap,sI=e=>{const t=dg.get(e.target);t&&t(e)},oI=e=>{e.forEach(sI)};function lI({root:e,...t}){const n=e||document;Zp.has(n)||Zp.set(n,{});const a=Zp.get(n),s=JSON.stringify(t);return a[s]||(a[s]=new IntersectionObserver(oI,{root:e,...t})),a[s]}function cI(e,t,n){const a=lI(t);return dg.set(e,n),a.observe(e),()=>{dg.delete(e),a.unobserve(e)}}const uI={some:0,all:1};class fI extends Lr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:a,amount:s="some",once:l}=t,u={root:n?n.current:void 0,rootMargin:a,threshold:typeof s=="number"?s:uI[s]},f=h=>{const{isIntersecting:p}=h;if(this.isInView===p||(this.isInView=p,l&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:m,onViewportLeave:v}=this.node.getProps(),_=p?m:v;_&&_(h)};return cI(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(hI(t,n))&&this.startObserver()}unmount(){}}function hI({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const dI={inView:{Feature:fI},tap:{Feature:rI},focus:{Feature:aI},hover:{Feature:iI}},pI={layout:{ProjectionNode:ST,MeasureLayout:dT}},pg={current:null},MT={current:!1};function mI(){if(MT.current=!0,!!jg)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>pg.current=e.matches;e.addListener(t),t()}else pg.current=!1}const gI=new WeakMap;function vI(e,t,n){for(const a in t){const s=t[a],l=n[a];if(Hn(s))e.addValue(a,s);else if(Hn(l))e.addValue(a,rc(s,{owner:e}));else if(l!==s)if(e.hasValue(a)){const u=e.getValue(a);u.liveStyle===!0?u.jump(s):u.hasAnimated||u.set(s)}else{const u=e.getStaticValue(a);e.addValue(a,rc(u!==void 0?u:s,{owner:e}))}}for(const a in n)t[a]===void 0&&e.removeValue(a);return t}const DM=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class _I{scrapeMotionValuesFromProps(t,n,a){return{}}constructor({parent:t,props:n,presenceContext:a,reducedMotionConfig:s,blockInitialAnimation:l,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=lv,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=Jn.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,Je.render(this.render,!1,!0))};const{latestValues:h,renderState:p}=u;this.latestValues=h,this.baseTarget={...h},this.initialValues=n.initial?{...h}:{},this.renderState=p,this.parent=t,this.props=n,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=f,this.blockInitialAnimation=!!l,this.isControllingVariants=qf(n),this.isVariantNode=kb(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:m,...v}=this.scrapeMotionValuesFromProps(n,{},this);for(const _ in v){const x=v[_];h[_]!==void 0&&Hn(x)&&x.set(h[_],!1)}}mount(t){this.current=t,gI.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,a)=>this.bindToMotionValue(a,n)),MT.current||mI(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:pg.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),this.projection=void 0,Ar(this.notifyUpdate),Ar(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const a=Io.has(t);a&&this.onBindTransform&&this.onBindTransform();const s=n.on("change",f=>{this.latestValues[t]=f,this.props.onUpdate&&Je.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),l=n.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{s(),l(),u&&u(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Do){const n=Do[t];if(!n)continue;const{isEnabled:a,Feature:s}=n;if(!this.features[t]&&s&&a(this.props)&&(this.features[t]=new s(this)),this.features[t]){const l=this.features[t];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):on()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let a=0;a<DM.length;a++){const s=DM[a];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const l="on"+s,u=t[l];u&&(this.propEventSubscriptions[s]=this.on(s,u))}this.prevMotionValues=vI(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const a=this.values.get(t);n!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&n!==void 0&&(a=rc(n===null?void 0:n,{owner:this}),this.addValue(t,a)),a}readValue(t,n){let a=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return a!=null&&(typeof a=="string"&&(JE(a)||tb(a))?a=parseFloat(a):!HP(a)&&Rr.test(n)&&(a=Ib(t,n)),this.setBaseTarget(t,Hn(a)?a.get():a)),Hn(a)?a.get():a}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var l;const{initial:n}=this.props;let a;if(typeof n=="string"||typeof n=="object"){const u=yv(this.props,n,(l=this.presenceContext)==null?void 0:l.custom);u&&(a=u[t])}if(n&&a!==void 0)return a;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Hn(s)?s:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Qg),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class ET extends _I{constructor(){super(...arguments),this.KeyframeResolver=DP}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:a}){delete n[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Hn(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function bT(e,{style:t,vars:n},a,s){Object.assign(e.style,t,s&&s.getProjectionStyles(a));for(const l in n)e.style.setProperty(l,n[l])}function yI(e){return window.getComputedStyle(e)}class xI extends ET{constructor(){super(...arguments),this.type="html",this.renderInstance=bT}readValueFromInstance(t,n){if(Io.has(n))return KU(t,n);{const a=yI(t),s=(tv(n)?a.getPropertyValue(n):a[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:n}){return cT(t,n)}build(t,n,a){gv(t,n,a.transformTemplate)}scrapeMotionValuesFromProps(t,n,a){return xv(t,n,a)}}const TT=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function SI(e,t,n,a){bT(e,t,void 0,a);for(const s in t.attrs)e.setAttribute(TT.has(s)?s:mv(s),t.attrs[s])}class MI extends ET{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=on}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Io.has(n)){const a=Ob(n);return a&&a.default||0}return n=TT.has(n)?n:mv(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,a){return Jb(t,n,a)}build(t,n,a){Kb(t,n,this.isSVGTag,a.transformTemplate)}renderInstance(t,n,a,s){SI(t,n,a,s)}mount(t){this.isSVGTag=Qb(t.tagName),super.mount(t)}}const EI=(e,t)=>_v(e)?new MI(t):new xI(t,{allowProjection:e!==et.Fragment}),bI=SN({...qN,...dI,...nI,...pI},EI),TI=WP(bI),AI=({ClickMenuEvent:e,currentMenu:t})=>K.jsx(K.Fragment,{children:K.jsxs(TI.ul,{className:"navigation",children:[K.jsx("li",{children:K.jsx("a",{onClick:()=>e("home"),className:t=="home"?"active":"",children:"HOME"})}),K.jsx("li",{children:K.jsx("a",{onClick:()=>e("experience"),className:t=="experience"?"active":"",children:"EXPERIENCE"})}),K.jsx("li",{children:K.jsx("a",{onClick:()=>e("skills"),className:t=="skills"?"active":"",children:"SKILLS"})}),K.jsx("li",{children:K.jsx("a",{onClick:()=>e("project"),className:t=="project"?"active":"",children:"PROJECT"})}),K.jsx("li",{children:K.jsx("a",{onClick:()=>e("contact"),className:t=="contact"?"active":"",children:"CONTACT"})})]})});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const RI={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},CI={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const wI={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function DI(e,t,n){return(t=UI(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function LM(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,a)}return n}function At(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?LM(Object(n),!0).forEach(function(a){DI(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):LM(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function LI(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function UI(e){var t=LI(e,"string");return typeof t=="symbol"?t:t+""}const UM=()=>{};let Mv={},AT={},RT=null,CT={mark:UM,measure:UM};try{typeof window<"u"&&(Mv=window),typeof document<"u"&&(AT=document),typeof MutationObserver<"u"&&(RT=MutationObserver),typeof performance<"u"&&(CT=performance)}catch{}const{userAgent:PM=""}=Mv.navigator||{},Cr=Mv,Ye=AT,NM=RT,hf=CT;Cr.document;const za=!!Ye.documentElement&&!!Ye.head&&typeof Ye.addEventListener=="function"&&typeof Ye.createElement=="function",wT=~PM.indexOf("MSIE")||~PM.indexOf("Trident/");var PI=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,NI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,DT={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},OI={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},LT=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Gn="classic",Yf="duotone",II="sharp",FI="sharp-duotone",UT=[Gn,Yf,II,FI],BI={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},zI={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},VI=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),HI={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},GI=["fak","fa-kit","fakd","fa-kit-duotone"],OM={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},kI=["kit"],XI={kit:{"fa-kit":"fak"}},jI=["fak","fakd"],WI={kit:{fak:"fa-kit"}},IM={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},df={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qI=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],YI=["fak","fa-kit","fakd","fa-kit-duotone"],KI={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ZI={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},QI={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},mg={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},$I=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],gg=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...qI,...$I],JI=["solid","regular","light","thin","duotone","brands"],PT=[1,2,3,4,5,6,7,8,9,10],tF=PT.concat([11,12,13,14,15,16,17,18,19,20]),eF=[...Object.keys(QI),...JI,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",df.GROUP,df.SWAP_OPACITY,df.PRIMARY,df.SECONDARY].concat(PT.map(e=>"".concat(e,"x"))).concat(tF.map(e=>"w-".concat(e))),nF={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Oa="___FONT_AWESOME___",vg=16,NT="fa",OT="svg-inline--fa",_s="data-fa-i2svg",_g="data-fa-pseudo-element",iF="data-fa-pseudo-element-pending",Ev="data-prefix",bv="data-icon",FM="fontawesome-i2svg",aF="async",rF=["HTML","HEAD","STYLE","SCRIPT"],IT=(()=>{try{return!0}catch{return!1}})();function Ec(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[Gn]}})}const FT=At({},DT);FT[Gn]=At(At(At(At({},{"fa-duotone":"duotone"}),DT[Gn]),OM.kit),OM["kit-duotone"]);const sF=Ec(FT),yg=At({},HI);yg[Gn]=At(At(At(At({},{duotone:"fad"}),yg[Gn]),IM.kit),IM["kit-duotone"]);const BM=Ec(yg),xg=At({},mg);xg[Gn]=At(At({},xg[Gn]),WI.kit);const Tv=Ec(xg),Sg=At({},ZI);Sg[Gn]=At(At({},Sg[Gn]),XI.kit);Ec(Sg);const oF=PI,BT="fa-layers-text",lF=NI,cF=At({},BI);Ec(cF);const uF=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Qp=OI,fF=[...kI,...eF],Kl=Cr.FontAwesomeConfig||{};function hF(e){var t=Ye.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function dF(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}Ye&&typeof Ye.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const s=dF(hF(n));s!=null&&(Kl[a]=s)});const zT={styleDefault:"solid",familyDefault:Gn,cssPrefix:NT,replacementClass:OT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Kl.familyPrefix&&(Kl.cssPrefix=Kl.familyPrefix);const Lo=At(At({},zT),Kl);Lo.autoReplaceSvg||(Lo.observeMutations=!1);const kt={};Object.keys(zT).forEach(e=>{Object.defineProperty(kt,e,{enumerable:!0,set:function(t){Lo[e]=t,Zl.forEach(n=>n(kt))},get:function(){return Lo[e]}})});Object.defineProperty(kt,"familyPrefix",{enumerable:!0,set:function(e){Lo.cssPrefix=e,Zl.forEach(t=>t(kt))},get:function(){return Lo.cssPrefix}});Cr.FontAwesomeConfig=kt;const Zl=[];function pF(e){return Zl.push(e),()=>{Zl.splice(Zl.indexOf(e),1)}}const yr=vg,qi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mF(e){if(!e||!za)return;const t=Ye.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=Ye.head.childNodes;let a=null;for(let s=n.length-1;s>-1;s--){const l=n[s],u=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(u)>-1&&(a=l)}return Ye.head.insertBefore(t,a),e}const gF="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function uc(){let e=12,t="";for(;e-- >0;)t+=gF[Math.random()*62|0];return t}function Fo(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Av(e){return e.classList?Fo(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function VT(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vF(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(VT(e[n]),'" '),"").trim()}function Kf(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Rv(e){return e.size!==qi.size||e.x!==qi.x||e.y!==qi.y||e.rotate!==qi.rotate||e.flipX||e.flipY}function _F(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const s={transform:"translate(".concat(n/2," 256)")},l="translate(".concat(t.x*32,", ").concat(t.y*32,") "),u="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),f="rotate(".concat(t.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(f)},p={transform:"translate(".concat(a/2*-1," -256)")};return{outer:s,inner:h,path:p}}function yF(e){let{transform:t,width:n=vg,height:a=vg,startCentered:s=!1}=e,l="";return s&&wT?l+="translate(".concat(t.x/yr-n/2,"em, ").concat(t.y/yr-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/yr,"em), calc(-50% + ").concat(t.y/yr,"em)) "):l+="translate(".concat(t.x/yr,"em, ").concat(t.y/yr,"em) "),l+="scale(".concat(t.size/yr*(t.flipX?-1:1),", ").concat(t.size/yr*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var xF=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function HT(){const e=NT,t=OT,n=kt.cssPrefix,a=kt.replacementClass;let s=xF;if(n!==e||a!==t){const l=new RegExp("\\.".concat(e,"\\-"),"g"),u=new RegExp("\\--".concat(e,"\\-"),"g"),f=new RegExp("\\.".concat(t),"g");s=s.replace(l,".".concat(n,"-")).replace(u,"--".concat(n,"-")).replace(f,".".concat(a))}return s}let zM=!1;function $p(){kt.autoAddCss&&!zM&&(mF(HT()),zM=!0)}var SF={mixout(){return{dom:{css:HT,insertCss:$p}}},hooks(){return{beforeDOMElementCreation(){$p()},beforeI2svg(){$p()}}}};const Ia=Cr||{};Ia[Oa]||(Ia[Oa]={});Ia[Oa].styles||(Ia[Oa].styles={});Ia[Oa].hooks||(Ia[Oa].hooks={});Ia[Oa].shims||(Ia[Oa].shims=[]);var Yi=Ia[Oa];const GT=[],kT=function(){Ye.removeEventListener("DOMContentLoaded",kT),Ff=1,GT.map(e=>e())};let Ff=!1;za&&(Ff=(Ye.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ye.readyState),Ff||Ye.addEventListener("DOMContentLoaded",kT));function MF(e){za&&(Ff?setTimeout(e,0):GT.push(e))}function bc(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?VT(e):"<".concat(t," ").concat(vF(n),">").concat(a.map(bc).join(""),"</").concat(t,">")}function VM(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Jp=function(t,n,a,s){var l=Object.keys(t),u=l.length,f=n,h,p,m;for(a===void 0?(h=1,m=t[l[0]]):(h=0,m=a);h<u;h++)p=l[h],m=f(m,t[p],p,t);return m};function EF(e){const t=[];let n=0;const a=e.length;for(;n<a;){const s=e.charCodeAt(n++);if(s>=55296&&s<=56319&&n<a){const l=e.charCodeAt(n++);(l&64512)==56320?t.push(((s&1023)<<10)+(l&1023)+65536):(t.push(s),n--)}else t.push(s)}return t}function Mg(e){const t=EF(e);return t.length===1?t[0].toString(16):null}function bF(e,t){const n=e.length;let a=e.charCodeAt(t),s;return a>=55296&&a<=56319&&n>t+1&&(s=e.charCodeAt(t+1),s>=56320&&s<=57343)?(a-55296)*1024+s-56320+65536:a}function HM(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function Eg(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,s=HM(t);typeof Yi.hooks.addPack=="function"&&!a?Yi.hooks.addPack(e,HM(t)):Yi.styles[e]=At(At({},Yi.styles[e]||{}),s),e==="fas"&&Eg("fa",t)}const{styles:fc,shims:TF}=Yi,XT=Object.keys(Tv),AF=XT.reduce((e,t)=>(e[t]=Object.keys(Tv[t]),e),{});let Cv=null,jT={},WT={},qT={},YT={},KT={};function RF(e){return~fF.indexOf(e)}function CF(e,t){const n=t.split("-"),a=n[0],s=n.slice(1).join("-");return a===e&&s!==""&&!RF(s)?s:null}const ZT=()=>{const e=a=>Jp(fc,(s,l,u)=>(s[u]=Jp(l,a,{}),s),{});jT=e((a,s,l)=>(s[3]&&(a[s[3]]=l),s[2]&&s[2].filter(f=>typeof f=="number").forEach(f=>{a[f.toString(16)]=l}),a)),WT=e((a,s,l)=>(a[l]=l,s[2]&&s[2].filter(f=>typeof f=="string").forEach(f=>{a[f]=l}),a)),KT=e((a,s,l)=>{const u=s[2];return a[l]=l,u.forEach(f=>{a[f]=l}),a});const t="far"in fc||kt.autoFetchSvg,n=Jp(TF,(a,s)=>{const l=s[0];let u=s[1];const f=s[2];return u==="far"&&!t&&(u="fas"),typeof l=="string"&&(a.names[l]={prefix:u,iconName:f}),typeof l=="number"&&(a.unicodes[l.toString(16)]={prefix:u,iconName:f}),a},{names:{},unicodes:{}});qT=n.names,YT=n.unicodes,Cv=Zf(kt.styleDefault,{family:kt.familyDefault})};pF(e=>{Cv=Zf(e.styleDefault,{family:kt.familyDefault})});ZT();function wv(e,t){return(jT[e]||{})[t]}function wF(e,t){return(WT[e]||{})[t]}function ds(e,t){return(KT[e]||{})[t]}function QT(e){return qT[e]||{prefix:null,iconName:null}}function DF(e){const t=YT[e],n=wv("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function wr(){return Cv}const $T=()=>({prefix:null,iconName:null,rest:[]});function LF(e){let t=Gn;const n=XT.reduce((a,s)=>(a[s]="".concat(kt.cssPrefix,"-").concat(s),a),{});return UT.forEach(a=>{(e.includes(n[a])||e.some(s=>AF[a].includes(s)))&&(t=a)}),t}function Zf(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Gn}=t,a=sF[n][e];if(n===Yf&&!e)return"fad";const s=BM[n][e]||BM[n][a],l=e in Yi.styles?e:null;return s||l||null}function UF(e){let t=[],n=null;return e.forEach(a=>{const s=CF(kt.cssPrefix,a);s?n=s:a&&t.push(a)}),{iconName:n,rest:t}}function GM(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function Qf(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const s=gg.concat(YI),l=GM(e.filter(v=>s.includes(v))),u=GM(e.filter(v=>!gg.includes(v))),f=l.filter(v=>(a=v,!LT.includes(v))),[h=null]=f,p=LF(l),m=At(At({},UF(u)),{},{prefix:Zf(h,{family:p})});return At(At(At({},m),IF({values:e,family:p,styles:fc,config:kt,canonical:m,givenPrefix:a})),PF(n,a,m))}function PF(e,t,n){let{prefix:a,iconName:s}=n;if(e||!a||!s)return{prefix:a,iconName:s};const l=t==="fa"?QT(s):{},u=ds(a,s);return s=l.iconName||u||s,a=l.prefix||a,a==="far"&&!fc.far&&fc.fas&&!kt.autoFetchSvg&&(a="fas"),{prefix:a,iconName:s}}const NF=UT.filter(e=>e!==Gn||e!==Yf),OF=Object.keys(mg).filter(e=>e!==Gn).map(e=>Object.keys(mg[e])).flat();function IF(e){const{values:t,family:n,canonical:a,givenPrefix:s="",styles:l={},config:u={}}=e,f=n===Yf,h=t.includes("fa-duotone")||t.includes("fad"),p=u.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!f&&(h||p||m)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&NF.includes(n)&&(Object.keys(l).find(_=>OF.includes(_))||u.autoFetchSvg)){const _=VI.get(n).defaultShortPrefixId;a.prefix=_,a.iconName=ds(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||s==="fa")&&(a.prefix=wr()||"fas"),a}class FF{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(l=>{this.definitions[l]=At(At({},this.definitions[l]||{}),s[l]),Eg(l,s[l]);const u=Tv[Gn][l];u&&Eg(u,s[l]),ZT()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(s=>{const{prefix:l,iconName:u,icon:f}=a[s],h=f[2];t[l]||(t[l]={}),h.length>0&&h.forEach(p=>{typeof p=="string"&&(t[l][p]=f)}),t[l][u]=f}),t}}let kM=[],yo={};const Eo={},BF=Object.keys(Eo);function zF(e,t){let{mixoutsTo:n}=t;return kM=e,yo={},Object.keys(Eo).forEach(a=>{BF.indexOf(a)===-1&&delete Eo[a]}),kM.forEach(a=>{const s=a.mixout?a.mixout():{};if(Object.keys(s).forEach(l=>{typeof s[l]=="function"&&(n[l]=s[l]),typeof s[l]=="object"&&Object.keys(s[l]).forEach(u=>{n[l]||(n[l]={}),n[l][u]=s[l][u]})}),a.hooks){const l=a.hooks();Object.keys(l).forEach(u=>{yo[u]||(yo[u]=[]),yo[u].push(l[u])})}a.provides&&a.provides(Eo)}),n}function bg(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),s=2;s<n;s++)a[s-2]=arguments[s];return(yo[e]||[]).forEach(u=>{t=u.apply(null,[t,...a])}),t}function ys(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(yo[e]||[]).forEach(l=>{l.apply(null,n)})}function Dr(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Eo[e]?Eo[e].apply(null,t):void 0}function Tg(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||wr();if(t)return t=ds(n,t)||t,VM(JT.definitions,n,t)||VM(Yi.styles,n,t)}const JT=new FF,VF=()=>{kt.autoReplaceSvg=!1,kt.observeMutations=!1,ys("noAuto")},HF={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return za?(ys("beforeI2svg",e),Dr("pseudoElements2svg",e),Dr("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;kt.autoReplaceSvg===!1&&(kt.autoReplaceSvg=!0),kt.observeMutations=!0,MF(()=>{kF({autoReplaceSvgRoot:t}),ys("watch",e)})}},GF={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ds(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Zf(e[0]);return{prefix:n,iconName:ds(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(kt.cssPrefix,"-"))>-1||e.match(oF))){const t=Qf(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||wr(),iconName:ds(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=wr();return{prefix:t,iconName:ds(t,e)||e}}}},di={noAuto:VF,config:kt,dom:HF,parse:GF,library:JT,findIconDefinition:Tg,toHtml:bc},kF=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=Ye}=e;(Object.keys(Yi.styles).length>0||kt.autoFetchSvg)&&za&&kt.autoReplaceSvg&&di.dom.i2svg({node:t})};function $f(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>bc(n))}}),Object.defineProperty(e,"node",{get:function(){if(!za)return;const n=Ye.createElement("div");return n.innerHTML=e.html,n.children}}),e}function XF(e){let{children:t,main:n,mask:a,attributes:s,styles:l,transform:u}=e;if(Rv(u)&&n.found&&!a.found){const{width:f,height:h}=n,p={x:f/h/2,y:.5};s.style=Kf(At(At({},l),{},{"transform-origin":"".concat(p.x+u.x/16,"em ").concat(p.y+u.y/16,"em")}))}return[{tag:"svg",attributes:s,children:t}]}function jF(e){let{prefix:t,iconName:n,children:a,attributes:s,symbol:l}=e;const u=l===!0?"".concat(t,"-").concat(kt.cssPrefix,"-").concat(n):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:At(At({},s),{},{id:u}),children:a}]}]}function Dv(e){const{icons:{main:t,mask:n},prefix:a,iconName:s,transform:l,symbol:u,title:f,maskId:h,titleId:p,extra:m,watchable:v=!1}=e,{width:_,height:x}=n.found?n:t,M=jI.includes(a),b=[kt.replacementClass,s?"".concat(kt.cssPrefix,"-").concat(s):""].filter(N=>m.classes.indexOf(N)===-1).filter(N=>N!==""||!!N).concat(m.classes).join(" ");let S={children:[],attributes:At(At({},m.attributes),{},{"data-prefix":a,"data-icon":s,class:b,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(x)})};const y=M&&!~m.classes.indexOf("fa-fw")?{width:"".concat(_/x*16*.0625,"em")}:{};v&&(S.attributes[_s]=""),f&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(p||uc())},children:[f]}),delete S.attributes.title);const L=At(At({},S),{},{prefix:a,iconName:s,main:t,mask:n,maskId:h,transform:l,symbol:u,styles:At(At({},y),m.styles)}),{children:R,attributes:w}=n.found&&t.found?Dr("generateAbstractMask",L)||{children:[],attributes:{}}:Dr("generateAbstractIcon",L)||{children:[],attributes:{}};return L.children=R,L.attributes=w,u?jF(L):XF(L)}function XM(e){const{content:t,width:n,height:a,transform:s,title:l,extra:u,watchable:f=!1}=e,h=At(At(At({},u.attributes),l?{title:l}:{}),{},{class:u.classes.join(" ")});f&&(h[_s]="");const p=At({},u.styles);Rv(s)&&(p.transform=yF({transform:s,startCentered:!0,width:n,height:a}),p["-webkit-transform"]=p.transform);const m=Kf(p);m.length>0&&(h.style=m);const v=[];return v.push({tag:"span",attributes:h,children:[t]}),l&&v.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),v}function WF(e){const{content:t,title:n,extra:a}=e,s=At(At(At({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),l=Kf(a.styles);l.length>0&&(s.style=l);const u=[];return u.push({tag:"span",attributes:s,children:[t]}),n&&u.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),u}const{styles:tm}=Yi;function Ag(e){const t=e[0],n=e[1],[a]=e.slice(4);let s=null;return Array.isArray(a)?s={tag:"g",attributes:{class:"".concat(kt.cssPrefix,"-").concat(Qp.GROUP)},children:[{tag:"path",attributes:{class:"".concat(kt.cssPrefix,"-").concat(Qp.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(kt.cssPrefix,"-").concat(Qp.PRIMARY),fill:"currentColor",d:a[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:s}}const qF={found:!1,width:512,height:512};function YF(e,t){!IT&&!kt.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Rg(e,t){let n=t;return t==="fa"&&kt.styleDefault!==null&&(t=wr()),new Promise((a,s)=>{if(n==="fa"){const l=QT(e)||{};e=l.iconName||e,t=l.prefix||t}if(e&&t&&tm[t]&&tm[t][e]){const l=tm[t][e];return a(Ag(l))}YF(e,t),a(At(At({},qF),{},{icon:kt.showMissingIcons&&e?Dr("missingIconAbstract")||{}:{}}))})}const jM=()=>{},Cg=kt.measurePerformance&&hf&&hf.mark&&hf.measure?hf:{mark:jM,measure:jM},kl='FA "6.7.2"',KF=e=>(Cg.mark("".concat(kl," ").concat(e," begins")),()=>t1(e)),t1=e=>{Cg.mark("".concat(kl," ").concat(e," ends")),Cg.measure("".concat(kl," ").concat(e),"".concat(kl," ").concat(e," begins"),"".concat(kl," ").concat(e," ends"))};var Lv={begin:KF,end:t1};const Tf=()=>{};function WM(e){return typeof(e.getAttribute?e.getAttribute(_s):null)=="string"}function ZF(e){const t=e.getAttribute?e.getAttribute(Ev):null,n=e.getAttribute?e.getAttribute(bv):null;return t&&n}function QF(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(kt.replacementClass)}function $F(){return kt.autoReplaceSvg===!0?Af.replace:Af[kt.autoReplaceSvg]||Af.replace}function JF(e){return Ye.createElementNS("http://www.w3.org/2000/svg",e)}function tB(e){return Ye.createElement(e)}function e1(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?JF:tB}=t;if(typeof e=="string")return Ye.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(l){a.setAttribute(l,e.attributes[l])}),(e.children||[]).forEach(function(l){a.appendChild(e1(l,{ceFn:n}))}),a}function eB(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Af={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(e1(n),t)}),t.getAttribute(_s)===null&&kt.keepOriginalSource){let n=Ye.createComment(eB(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Av(t).indexOf(kt.replacementClass))return Af.replace(e);const a=new RegExp("".concat(kt.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const l=n[0].attributes.class.split(" ").reduce((u,f)=>(f===kt.replacementClass||f.match(a)?u.toSvg.push(f):u.toNode.push(f),u),{toNode:[],toSvg:[]});n[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",l.toNode.join(" "))}const s=n.map(l=>bc(l)).join(`
`);t.setAttribute(_s,""),t.innerHTML=s}};function qM(e){e()}function n1(e,t){const n=typeof t=="function"?t:Tf;if(e.length===0)n();else{let a=qM;kt.mutateApproach===aF&&(a=Cr.requestAnimationFrame||qM),a(()=>{const s=$F(),l=Lv.begin("mutate");e.map(s),l(),n()})}}let Uv=!1;function i1(){Uv=!0}function wg(){Uv=!1}let Bf=null;function YM(e){if(!NM||!kt.observeMutations)return;const{treeCallback:t=Tf,nodeCallback:n=Tf,pseudoElementsCallback:a=Tf,observeMutationsRoot:s=Ye}=e;Bf=new NM(l=>{if(Uv)return;const u=wr();Fo(l).forEach(f=>{if(f.type==="childList"&&f.addedNodes.length>0&&!WM(f.addedNodes[0])&&(kt.searchPseudoElements&&a(f.target),t(f.target)),f.type==="attributes"&&f.target.parentNode&&kt.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&WM(f.target)&&~uF.indexOf(f.attributeName))if(f.attributeName==="class"&&ZF(f.target)){const{prefix:h,iconName:p}=Qf(Av(f.target));f.target.setAttribute(Ev,h||u),p&&f.target.setAttribute(bv,p)}else QF(f.target)&&n(f.target)})}),za&&Bf.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function nB(){Bf&&Bf.disconnect()}function iB(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,s)=>{const l=s.split(":"),u=l[0],f=l.slice(1);return u&&f.length>0&&(a[u]=f.join(":").trim()),a},{})),n}function aB(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let s=Qf(Av(e));return s.prefix||(s.prefix=wr()),t&&n&&(s.prefix=t,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&a.length>0&&(s.iconName=wF(s.prefix,e.innerText)||wv(s.prefix,Mg(e.innerText))),!s.iconName&&kt.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=e.firstChild.data)),s}function rB(e){const t=Fo(e.attributes).reduce((s,l)=>(s.name!=="class"&&s.name!=="style"&&(s[l.name]=l.value),s),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return kt.autoA11y&&(n?t["aria-labelledby"]="".concat(kt.replacementClass,"-title-").concat(a||uc()):(t["aria-hidden"]="true",t.focusable="false")),t}function sB(){return{iconName:null,title:null,titleId:null,prefix:null,transform:qi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function KM(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:s}=aB(e),l=rB(e),u=bg("parseNodeAttributes",{},e);let f=t.styleParser?iB(e):[];return At({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:qi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:f,attributes:l}},u)}const{styles:oB}=Yi;function a1(e){const t=kt.autoReplaceSvg==="nest"?KM(e,{styleParser:!1}):KM(e);return~t.extra.classes.indexOf(BT)?Dr("generateLayersText",e,t):Dr("generateSvgReplacementMutation",e,t)}function lB(){return[...GI,...gg]}function ZM(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!za)return Promise.resolve();const n=Ye.documentElement.classList,a=m=>n.add("".concat(FM,"-").concat(m)),s=m=>n.remove("".concat(FM,"-").concat(m)),l=kt.autoFetchSvg?lB():LT.concat(Object.keys(oB));l.includes("fa")||l.push("fa");const u=[".".concat(BT,":not([").concat(_s,"])")].concat(l.map(m=>".".concat(m,":not([").concat(_s,"])"))).join(", ");if(u.length===0)return Promise.resolve();let f=[];try{f=Fo(e.querySelectorAll(u))}catch{}if(f.length>0)a("pending"),s("complete");else return Promise.resolve();const h=Lv.begin("onTree"),p=f.reduce((m,v)=>{try{const _=a1(v);_&&m.push(_)}catch(_){IT||_.name==="MissingIcon"&&console.error(_)}return m},[]);return new Promise((m,v)=>{Promise.all(p).then(_=>{n1(_,()=>{a("active"),a("complete"),s("pending"),typeof t=="function"&&t(),h(),m()})}).catch(_=>{h(),v(_)})})}function cB(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;a1(e).then(n=>{n&&n1([n],t)})}function uB(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:Tg(t||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Tg(s||{})),e(a,At(At({},n),{},{mask:s}))}}const fB=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=qi,symbol:a=!1,mask:s=null,maskId:l=null,title:u=null,titleId:f=null,classes:h=[],attributes:p={},styles:m={}}=t;if(!e)return;const{prefix:v,iconName:_,icon:x}=e;return $f(At({type:"icon"},e),()=>(ys("beforeDOMElementCreation",{iconDefinition:e,params:t}),kt.autoA11y&&(u?p["aria-labelledby"]="".concat(kt.replacementClass,"-title-").concat(f||uc()):(p["aria-hidden"]="true",p.focusable="false")),Dv({icons:{main:Ag(x),mask:s?Ag(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:_,transform:At(At({},qi),n),symbol:a,title:u,maskId:l,titleId:f,extra:{attributes:p,styles:m,classes:h}})))};var hB={mixout(){return{icon:uB(fB)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=ZM,e.nodeCallback=cB,e}}},provides(e){e.i2svg=function(t){const{node:n=Ye,callback:a=()=>{}}=t;return ZM(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:s,titleId:l,prefix:u,transform:f,symbol:h,mask:p,maskId:m,extra:v}=n;return new Promise((_,x)=>{Promise.all([Rg(a,u),p.iconName?Rg(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(M=>{let[b,S]=M;_([t,Dv({icons:{main:b,mask:S},prefix:u,iconName:a,transform:f,symbol:h,maskId:m,title:s,titleId:l,extra:v,watchable:!0})])}).catch(x)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:s,transform:l,styles:u}=t;const f=Kf(u);f.length>0&&(a.style=f);let h;return Rv(l)&&(h=Dr("generateAbstractTransformGrouping",{main:s,transform:l,containerWidth:s.width,iconWidth:s.width})),n.push(h||s.icon),{children:n,attributes:a}}}},dB={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return $f({type:"layer"},()=>{ys("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(s=>{Array.isArray(s)?s.map(l=>{a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(kt.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},pB={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:s={},styles:l={}}=t;return $f({type:"counter",content:e},()=>(ys("beforeDOMElementCreation",{content:e,params:t}),WF({content:e.toString(),title:n,extra:{attributes:s,styles:l,classes:["".concat(kt.cssPrefix,"-layers-counter"),...a]}})))}}}},mB={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=qi,title:a=null,classes:s=[],attributes:l={},styles:u={}}=t;return $f({type:"text",content:e},()=>(ys("beforeDOMElementCreation",{content:e,params:t}),XM({content:e,transform:At(At({},qi),n),title:a,extra:{attributes:l,styles:u,classes:["".concat(kt.cssPrefix,"-layers-text"),...s]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:s,extra:l}=n;let u=null,f=null;if(wT){const h=parseInt(getComputedStyle(t).fontSize,10),p=t.getBoundingClientRect();u=p.width/h,f=p.height/h}return kt.autoA11y&&!a&&(l.attributes["aria-hidden"]="true"),Promise.resolve([t,XM({content:t.innerHTML,width:u,height:f,transform:s,title:a,extra:l,watchable:!0})])}}};const gB=new RegExp('"',"ug"),QM=[1105920,1112319],$M=At(At(At(At({},{FontAwesome:{normal:"fas",400:"fas"}}),zI),nF),KI),Dg=Object.keys($M).reduce((e,t)=>(e[t.toLowerCase()]=$M[t],e),{}),vB=Object.keys(Dg).reduce((e,t)=>{const n=Dg[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function _B(e){const t=e.replace(gB,""),n=bF(t,0),a=n>=QM[0]&&n<=QM[1],s=t.length===2?t[0]===t[1]:!1;return{value:Mg(s?t[0]:t),isSecondary:a||s}}function yB(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),s=isNaN(a)?"normal":a;return(Dg[n]||{})[s]||vB[n]}function JM(e,t){const n="".concat(iF).concat(t.replace(":","-"));return new Promise((a,s)=>{if(e.getAttribute(n)!==null)return a();const u=Fo(e.children).filter(_=>_.getAttribute(_g)===t)[0],f=Cr.getComputedStyle(e,t),h=f.getPropertyValue("font-family"),p=h.match(lF),m=f.getPropertyValue("font-weight"),v=f.getPropertyValue("content");if(u&&!p)return e.removeChild(u),a();if(p&&v!=="none"&&v!==""){const _=f.getPropertyValue("content");let x=yB(h,m);const{value:M,isSecondary:b}=_B(_),S=p[0].startsWith("FontAwesome");let y=wv(x,M),L=y;if(S){const R=DF(M);R.iconName&&R.prefix&&(y=R.iconName,x=R.prefix)}if(y&&!b&&(!u||u.getAttribute(Ev)!==x||u.getAttribute(bv)!==L)){e.setAttribute(n,L),u&&e.removeChild(u);const R=sB(),{extra:w}=R;w.attributes[_g]=t,Rg(y,x).then(N=>{const z=Dv(At(At({},R),{},{icons:{main:N,mask:$T()},prefix:x,iconName:L,extra:w,watchable:!0})),I=Ye.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(I,e.firstChild):e.appendChild(I),I.outerHTML=z.map(V=>bc(V)).join(`
`),e.removeAttribute(n),a()}).catch(s)}else a()}else a()})}function xB(e){return Promise.all([JM(e,"::before"),JM(e,"::after")])}function SB(e){return e.parentNode!==document.head&&!~rF.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(_g)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function tE(e){if(za)return new Promise((t,n)=>{const a=Fo(e.querySelectorAll("*")).filter(SB).map(xB),s=Lv.begin("searchPseudoElements");i1(),Promise.all(a).then(()=>{s(),wg(),t()}).catch(()=>{s(),wg(),n()})})}var MB={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=tE,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=Ye}=t;kt.searchPseudoElements&&tE(n)}}};let eE=!1;var EB={mixout(){return{dom:{unwatch(){i1(),eE=!0}}}},hooks(){return{bootstrap(){YM(bg("mutationObserverCallbacks",{}))},noAuto(){nB()},watch(e){const{observeMutationsRoot:t}=e;eE?wg():YM(bg("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const nE=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const s=a.toLowerCase().split("-"),l=s[0];let u=s.slice(1).join("-");if(l&&u==="h")return n.flipX=!0,n;if(l&&u==="v")return n.flipY=!0,n;if(u=parseFloat(u),isNaN(u))return n;switch(l){case"grow":n.size=n.size+u;break;case"shrink":n.size=n.size-u;break;case"left":n.x=n.x-u;break;case"right":n.x=n.x+u;break;case"up":n.y=n.y-u;break;case"down":n.y=n.y+u;break;case"rotate":n.rotate=n.rotate+u;break}return n},t)};var bB={mixout(){return{parse:{transform:e=>nE(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=nE(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:s,iconWidth:l}=t;const u={transform:"translate(".concat(s/2," 256)")},f="translate(".concat(a.x*32,", ").concat(a.y*32,") "),h="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),p="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(f," ").concat(h," ").concat(p)},v={transform:"translate(".concat(l/2*-1," -256)")},_={outer:u,inner:m,path:v};return{tag:"g",attributes:At({},_.outer),children:[{tag:"g",attributes:At({},_.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:At(At({},n.icon.attributes),_.path)}]}]}}}};const em={x:0,y:0,width:"100%",height:"100%"};function iE(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function TB(e){return e.tag==="g"?e.children:[e]}var AB={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?Qf(n.split(" ").map(s=>s.trim())):$T();return a.prefix||(a.prefix=wr()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:s,mask:l,maskId:u,transform:f}=t;const{width:h,icon:p}=s,{width:m,icon:v}=l,_=_F({transform:f,containerWidth:m,iconWidth:h}),x={tag:"rect",attributes:At(At({},em),{},{fill:"white"})},M=p.children?{children:p.children.map(iE)}:{},b={tag:"g",attributes:At({},_.inner),children:[iE(At({tag:p.tag,attributes:At(At({},p.attributes),_.path)},M))]},S={tag:"g",attributes:At({},_.outer),children:[b]},y="mask-".concat(u||uc()),L="clip-".concat(u||uc()),R={tag:"mask",attributes:At(At({},em),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,S]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:TB(v)},R]};return n.push(w,{tag:"rect",attributes:At({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(y,")")},em)}),{children:n,attributes:a}}}},RB={provides(e){let t=!1;Cr.matchMedia&&(t=Cr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:At(At({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=At(At({},s),{},{attributeName:"opacity"}),u={tag:"circle",attributes:At(At({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||u.children.push({tag:"animate",attributes:At(At({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:At(At({},l),{},{values:"1;0;1;1;0;1;"})}),n.push(u),n.push({tag:"path",attributes:At(At({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:At(At({},l),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:At(At({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:At(At({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},CB={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},wB=[SF,hB,dB,pB,mB,MB,EB,bB,AB,RB,CB];zF(wB,{mixoutsTo:di});di.noAuto;di.config;di.library;di.dom;const Lg=di.parse;di.findIconDefinition;di.toHtml;const DB=di.icon;di.layer;di.text;di.counter;var nm={exports:{}},im,aE;function LB(){if(aE)return im;aE=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return im=e,im}var am,rE;function UB(){if(rE)return am;rE=1;var e=LB();function t(){}function n(){}return n.resetWarningCache=t,am=function(){function a(u,f,h,p,m,v){if(v!==e){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}a.isRequired=a;function s(){return a}var l={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:s,element:a,elementType:a,instanceOf:s,node:a,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:n,resetWarningCache:t};return l.PropTypes=l,l},am}var sE;function PB(){return sE||(sE=1,nm.exports=UB()()),nm.exports}var NB=PB();const _e=mE(NB);function oE(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,a)}return n}function ji(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oE(Object(n),!0).forEach(function(a){xo(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oE(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function zf(e){"@babel/helpers - typeof";return zf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zf(e)}function xo(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function OB(e,t){if(e==null)return{};var n={},a=Object.keys(e),s,l;for(l=0;l<a.length;l++)s=a[l],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function IB(e,t){if(e==null)return{};var n=OB(e,t),a,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)a=l[s],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Ug(e){return FB(e)||BB(e)||zB(e)||VB()}function FB(e){if(Array.isArray(e))return Pg(e)}function BB(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zB(e,t){if(e){if(typeof e=="string")return Pg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pg(e,t)}}function Pg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function VB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HB(e){var t,n=e.beat,a=e.fade,s=e.beatFade,l=e.bounce,u=e.shake,f=e.flash,h=e.spin,p=e.spinPulse,m=e.spinReverse,v=e.pulse,_=e.fixedWidth,x=e.inverse,M=e.border,b=e.listItem,S=e.flip,y=e.size,L=e.rotation,R=e.pull,w=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":s,"fa-bounce":l,"fa-shake":u,"fa-flash":f,"fa-spin":h,"fa-spin-reverse":m,"fa-spin-pulse":p,"fa-pulse":v,"fa-fw":_,"fa-inverse":x,"fa-border":M,"fa-li":b,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},xo(t,"fa-".concat(y),typeof y<"u"&&y!==null),xo(t,"fa-rotate-".concat(L),typeof L<"u"&&L!==null&&L!==0),xo(t,"fa-pull-".concat(R),typeof R<"u"&&R!==null),xo(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(N){return w[N]?N:null}).filter(function(N){return N})}function GB(e){return e=e-0,e===e}function r1(e){return GB(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var kB=["style"];function XB(e){return e.charAt(0).toUpperCase()+e.slice(1)}function jB(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),s=r1(n.slice(0,a)),l=n.slice(a+1).trim();return s.startsWith("webkit")?t[XB(s)]=l:t[s]=l,t},{})}function s1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(h){return s1(e,h)}),s=Object.keys(t.attributes||{}).reduce(function(h,p){var m=t.attributes[p];switch(p){case"class":h.attrs.className=m,delete t.attributes.class;break;case"style":h.attrs.style=jB(m);break;default:p.indexOf("aria-")===0||p.indexOf("data-")===0?h.attrs[p.toLowerCase()]=m:h.attrs[r1(p)]=m}return h},{attrs:{}}),l=n.style,u=l===void 0?{}:l,f=IB(n,kB);return s.attrs.style=ji(ji({},s.attrs.style),u),e.apply(void 0,[t.tag,ji(ji({},s.attrs),f)].concat(Ug(a)))}var o1=!1;try{o1=!0}catch{}function WB(){if(!o1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function lE(e){if(e&&zf(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Lg.icon)return Lg.icon(e);if(e===null)return null;if(e&&zf(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function rm(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xo({},e,t):{}}var cE={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ql=gE.forwardRef(function(e,t){var n=ji(ji({},cE),e),a=n.icon,s=n.mask,l=n.symbol,u=n.className,f=n.title,h=n.titleId,p=n.maskId,m=lE(a),v=rm("classes",[].concat(Ug(HB(n)),Ug((u||"").split(" ")))),_=rm("transform",typeof n.transform=="string"?Lg.transform(n.transform):n.transform),x=rm("mask",lE(s)),M=DB(m,ji(ji(ji(ji({},v),_),x),{},{symbol:l,title:f,titleId:h,maskId:p}));if(!M)return WB("Could not find icon",m),null;var b=M.abstract,S={ref:t};return Object.keys(n).forEach(function(y){cE.hasOwnProperty(y)||(S[y]=n[y])}),qB(b[0],S)});Ql.displayName="FontAwesomeIcon";Ql.propTypes={beat:_e.bool,border:_e.bool,beatFade:_e.bool,bounce:_e.bool,className:_e.string,fade:_e.bool,flash:_e.bool,mask:_e.oneOfType([_e.object,_e.array,_e.string]),maskId:_e.string,fixedWidth:_e.bool,inverse:_e.bool,flip:_e.oneOf([!0,!1,"horizontal","vertical","both"]),icon:_e.oneOfType([_e.object,_e.array,_e.string]),listItem:_e.bool,pull:_e.oneOf(["right","left"]),pulse:_e.bool,rotation:_e.oneOf([0,90,180,270]),shake:_e.bool,size:_e.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:_e.bool,spinPulse:_e.bool,spinReverse:_e.bool,symbol:_e.oneOfType([_e.bool,_e.string]),title:_e.string,titleId:_e.string,transform:_e.oneOfType([_e.string,_e.object]),swapOpacity:_e.bool};var qB=s1.bind(null,gE.createElement);const YB=({showedMenu:e="home"})=>K.jsx("section",{id:"home",className:"section section-odd",children:K.jsxs("div",{className:"container",children:[K.jsx("h1",{className:"name",children:"ASHLEY FAJARDO"}),K.jsx("h4",{className:"title",children:"SOFTWARE DEVELOPER"}),K.jsx("p",{className:"paragraph",children:"A Software Developer with 4 years and 6 Months of experience at Algar. I specialize in C# .NET, ASP.NET Core Web API, and ASP.NET MVC. I also have experience with HTML, CSS, JavaScript, JQuery, Bootstrap and SQL Server. I enjoy building both the backend and frontend parts of web applications, focusing on clean code, performance, and user-friendly design. I'm passionate about learning and improving my skills to create better software solutions."}),K.jsx("div",{className:"link",children:K.jsxs("ul",{children:[K.jsx("li",{children:K.jsx("a",{target:"_blank",href:"https://www.linkedin.com/in/ashleyfajardo07",children:K.jsx(Ql,{className:"icon-link",icon:RI})})}),K.jsx("li",{children:K.jsx("a",{target:"_blank",href:"https://github.com/Sstrawhat",children:K.jsx(Ql,{className:"icon-link",icon:CI})})}),K.jsx("li",{children:K.jsx("a",{target:"_blank",href:"../Portfolio/public/resume/Ashley_Fajardo_Resume.pdf",children:K.jsx(Ql,{className:"icon-link",icon:wI})})})]})})]})}),KB=({showedMenu:e="home"})=>K.jsx("section",{id:"experience",className:"section s-experience section-even",children:K.jsxs("div",{className:"container",children:[K.jsx("div",{className:"circle-start"}),K.jsxs("ul",{children:[K.jsxs("li",{children:[K.jsx("span",{className:"exp-year",children:"2023 - Present"}),K.jsx("br",{}),K.jsx("span",{className:"exp-title",children:"Software Development Team Lead"}),K.jsx("br",{}),K.jsx("span",{className:"exp-location",children:"ALGAR Information System, Inc"}),K.jsxs("ul",{children:[K.jsx("li",{className:"exp-list-title",children:"Work Experience"}),K.jsx("li",{children:"Mentored junior developers and supported their technical growth"}),K.jsx("li",{children:"Participated in technical decision-making for project architecture and implementation"}),K.jsx("li",{children:"Provided suggestions and improvements for system functionality and workflow"}),K.jsx("li",{children:"Developed a Laboratory Information Management System (LIMS) for lab data tracking and reporting"}),K.jsx("li",{children:"Developed systems including HR, Admin, and Employee portals"}),K.jsx("li",{children:"Performed debugging, system testing, and ongoing maintenance"}),K.jsx("li",{children:"Continually learning new tools and technologies to improve development skills"})]})]}),K.jsxs("li",{children:[K.jsx("span",{className:"exp-year",children:"2021 - 2023"}),K.jsx("br",{}),K.jsx("span",{className:"exp-title",children:"Junior Software Developer"}),K.jsx("br",{}),K.jsx("span",{className:"exp-location",children:"ALGAR Information System, Inc"}),K.jsxs("ul",{children:[K.jsx("li",{className:"exp-list-title",children:"Work Experience"}),K.jsx("li",{children:"Developed systems including HR, Admin, and Employee portals"}),K.jsx("li",{children:"Performed debugging, system testing, and ongoing maintenance"}),K.jsx("li",{children:"Continually learning new tools and technologies to improve development skills"})]})]}),K.jsxs("li",{children:[K.jsx("span",{className:"exp-year",children:"2016 - 2020"}),K.jsx("br",{}),K.jsx("span",{className:"exp-title",children:"BS - Information System"}),K.jsx("br",{}),K.jsx("span",{className:"exp-location",children:"Immaculate Conception I-College of arts and technology"}),K.jsxs("ul",{children:[K.jsx("li",{className:"exp-list-title",children:"Certificates and Achiements"}),K.jsx("li",{children:"Best in Capstone"}),K.jsx("li",{children:"Best in Practicum"}),K.jsx("li",{children:"Programmer of the year"})]})]})]})]})}),ZB=({showedMenu:e="home"})=>K.jsx("section",{id:"skills",className:"section section-odd",children:K.jsxs("div",{className:"container",children:[K.jsx("div",{className:"widget",children:K.jsx("span",{className:"widget-title",children:"C-SHARP"})}),K.jsx("div",{className:"widget",children:K.jsx("span",{className:"widget-title",children:"ASP.NET CORE/MVC"})}),K.jsx("div",{className:"widget",children:K.jsx("span",{className:"widget-title",children:".NET MAUI"})}),K.jsx("div",{className:"widget",children:K.jsx("span",{className:"widget-title",children:".NET 5+"})}),K.jsx("div",{className:"widget",children:K.jsx("span",{className:"widget-title",children:"ENTITY FRAMEWORK CORE"})}),K.jsx("div",{className:"widget",children:K.jsx("span",{className:"widget-title",children:"SQL"})}),K.jsx("div",{className:"widget",children:K.jsx("span",{className:"widget-title",children:"ASP.NET CORE WEB API"})}),K.jsx("div",{className:"widget",children:K.jsx("span",{className:"widget-title",children:"BLAZOR"})}),K.jsx("div",{className:"widget",children:K.jsx("span",{className:"widget-title",children:"RAZOR"})}),K.jsx("div",{className:"widget",children:K.jsx("span",{className:"widget-title",children:"HTML"})}),K.jsx("div",{className:"widget",children:K.jsx("span",{className:"widget-title",children:"CSS"})}),K.jsx("div",{className:"widget",children:K.jsx("span",{className:"widget-title",children:"JAVASCRIPT"})}),K.jsx("div",{className:"widget",children:K.jsx("span",{className:"widget-title",children:"JQUERY"})}),K.jsx("div",{className:"widget",children:K.jsx("span",{className:"widget-title",children:"BOOTSTRAP"})}),K.jsx("div",{className:"widget",children:K.jsx("span",{className:"widget-title",children:"FIGMA"})})]})}),QB=({showedMenu:e="home"})=>K.jsx("section",{id:"project",className:"section section-odd",children:K.jsxs("div",{className:"container",children:[K.jsx("div",{className:"circle-start"}),K.jsxs("ul",{children:[K.jsxs("li",{children:[K.jsx("span",{className:"exp-year",children:"GARGET (Garbage collector App)"}),K.jsx("p",{className:"exp-location",children:"is a mobile-based application developed to improve waste management operations at the community level. It enables real-time monitoring, scheduling, and reporting of garbage collection activities to ensure a cleaner and more organized environment. The system is designed with three main user roles: Admin, Driver, and Community Residents, each with specific features and responsibilities."}),K.jsxs("p",{className:"exp-location",children:["The Admin panel lets officials schedule garbage collection, assign routes, track drivers live, and respond to reports. ",K.jsx("br",{}),"Drivers can view their routes, start and stop collection, and share their location. ",K.jsx("br",{}),"Community members can check schedules, track trucks, and send reports."]}),K.jsx("span",{className:"project-tool",children:"Clean Architecture (Onion)"}),K.jsx("span",{className:"project-tool",children:"C#"}),K.jsx("span",{className:"project-tool",children:"EF Core"}),K.jsx("span",{className:"project-tool",children:"Asp.Net Core Web API"}),K.jsx("span",{className:"project-tool",children:".Net Maui (Hybrid)"}),K.jsx("br",{}),K.jsx("span",{className:"project-tool",children:"Blazor"}),K.jsx("span",{className:"project-tool",children:"HTML"}),K.jsx("span",{className:"project-tool",children:"CSS"}),K.jsx("span",{className:"project-tool",children:"JQuery"}),K.jsx("span",{className:"project-tool",children:"Bootstrap"}),K.jsx("span",{className:"project-tool",children:"Sql Server"})]}),K.jsxs("li",{children:[K.jsx("span",{className:"exp-year",children:"BMS (Barangay Managment System)"}),K.jsx("p",{className:"exp-location",children:"a computerized or web-based tool that helps barangay officials manage daily tasks and services digitally."}),K.jsx("span",{className:"project-tool",children:"Clean Architecture (Onion)"}),K.jsx("span",{className:"project-tool",children:"C#"}),K.jsx("span",{className:"project-tool",children:"Asp.Net Core MVC"}),K.jsx("span",{className:"project-tool",children:"EF Core"}),K.jsx("span",{className:"project-tool",children:"HTML"}),K.jsx("br",{}),K.jsx("span",{className:"project-tool",children:"CSS"}),K.jsx("span",{className:"project-tool",children:"Javascript"}),K.jsx("span",{className:"project-tool",children:"Jquery"}),K.jsx("span",{className:"project-tool",children:"Bootstrap"}),K.jsx("span",{className:"project-tool",children:"SQL Server"}),K.jsx("div",{className:"gitImage"})]}),K.jsxs("li",{children:[K.jsx("span",{className:"exp-year",children:"BHCS (Barangay Health Center System)"}),K.jsx("p",{className:"exp-location",children:"a computerized or web-based information system designed to help a barangay health center effectively organize, manage, and monitor community healthcare services and medicine inventory."}),K.jsx("span",{className:"project-tool",children:"Clean Architecture (Onion)"}),K.jsx("span",{className:"project-tool",children:"C#"}),K.jsx("span",{className:"project-tool",children:"Asp.Net Core MVC"}),K.jsx("span",{className:"project-tool",children:"EF Core"}),K.jsx("span",{className:"project-tool",children:"HTML"}),K.jsx("br",{}),K.jsx("span",{className:"project-tool",children:"CSS"}),K.jsx("span",{className:"project-tool",children:"Javascript"}),K.jsx("span",{className:"project-tool",children:"Jquery"}),K.jsx("span",{className:"project-tool",children:"Bootstrap"}),K.jsx("span",{className:"project-tool",children:"SQL Server"}),K.jsx("div",{className:"gitImage"})]})]})]})}),$B=({showedMenu:e="home"})=>K.jsx("section",{id:"contact",className:"section section-even",children:"Contact"}),JB=()=>{const[e,t]=et.useState(""),n=et.useRef("home"),a=(s,l=!1)=>{if(n.current=s,t(s),!l){const u=document.getElementById(s);u&&u.scrollIntoView({behavior:"smooth"})}};return et.useEffect(()=>{const s=new IntersectionObserver(u=>{u.forEach(f=>{f.isIntersecting&&a(f.target.id,!0)})},{root:null,rootMargin:"0px",threshold:.5});["home","experience","skills","project","contact"].forEach(u=>{const f=document.getElementById(u);f&&s.observe(f)})},[]),K.jsxs("div",{className:"layout",children:[K.jsx(kL,{showedMenu:n.current}),K.jsx(AI,{ClickMenuEvent:a,currentMenu:n.current}),K.jsxs("div",{className:"content",children:[K.jsx(YB,{showedMenu:n.current}),K.jsx(KB,{showedMenu:n.current}),K.jsx(ZB,{showedMenu:n.current}),K.jsx(QB,{showedMenu:n.current}),K.jsx($B,{showedMenu:n.current})]})]})};function t4(){return K.jsx(K.Fragment,{children:K.jsx(JB,{})})}/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var uE="popstate";function e4(e={}){function t(a,s){let{pathname:l,search:u,hash:f}=a.location;return Ng("",{pathname:l,search:u,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(a,s){return typeof s=="string"?s:hc(s)}return i4(t,n,null,e)}function yn(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $i(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function n4(){return Math.random().toString(36).substring(2,10)}function fE(e,t){return{usr:e.state,key:e.key,idx:t}}function Ng(e,t,n=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Tc(t):t,state:n,key:t&&t.key||a||n4()}}function hc({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Tc(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function i4(e,t,n,a={}){let{window:s=document.defaultView,v5Compat:l=!1}=a,u=s.history,f="POP",h=null,p=m();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function m(){return(u.state||{idx:null}).idx}function v(){f="POP";let S=m(),y=S==null?null:S-p;p=S,h&&h({action:f,location:b.location,delta:y})}function _(S,y){f="PUSH";let L=Ng(b.location,S,y);p=m()+1;let R=fE(L,p),w=b.createHref(L);try{u.pushState(R,"",w)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;s.location.assign(w)}l&&h&&h({action:f,location:b.location,delta:1})}function x(S,y){f="REPLACE";let L=Ng(b.location,S,y);p=m();let R=fE(L,p),w=b.createHref(L);u.replaceState(R,"",w),l&&h&&h({action:f,location:b.location,delta:0})}function M(S){return a4(S)}let b={get action(){return f},get location(){return e(s,u)},listen(S){if(h)throw new Error("A history only accepts one active listener");return s.addEventListener(uE,v),h=S,()=>{s.removeEventListener(uE,v),h=null}},createHref(S){return t(s,S)},createURL:M,encodeLocation(S){let y=M(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:_,replace:x,go(S){return u.go(S)}};return b}function a4(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),yn(n,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:hc(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function l1(e,t,n="/"){return r4(e,t,n,!1)}function r4(e,t,n,a){let s=typeof t=="string"?Tc(t):t,l=Fa(s.pathname||"/",n);if(l==null)return null;let u=c1(e);s4(u);let f=null;for(let h=0;f==null&&h<u.length;++h){let p=v4(l);f=m4(u[h],p,a)}return f}function c1(e,t=[],n=[],a=""){let s=(l,u,f)=>{let h={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};h.relativePath.startsWith("/")&&(yn(h.relativePath.startsWith(a),`Absolute route path "${h.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(a.length));let p=Da([a,h.relativePath]),m=n.concat(h);l.children&&l.children.length>0&&(yn(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),c1(l.children,t,m,p)),!(l.path==null&&!l.index)&&t.push({path:p,score:d4(p,l.index),routesMeta:m})};return e.forEach((l,u)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))s(l,u);else for(let h of u1(l.path))s(l,u,h)}),t}function u1(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,s=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return s?[l,""]:[l];let u=u1(a.join("/")),f=[];return f.push(...u.map(h=>h===""?l:[l,h].join("/"))),s&&f.push(...u),f.map(h=>e.startsWith("/")&&h===""?"/":h)}function s4(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:p4(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var o4=/^:[\w-]+$/,l4=3,c4=2,u4=1,f4=10,h4=-2,hE=e=>e==="*";function d4(e,t){let n=e.split("/"),a=n.length;return n.some(hE)&&(a+=h4),t&&(a+=c4),n.filter(s=>!hE(s)).reduce((s,l)=>s+(o4.test(l)?l4:l===""?u4:f4),a)}function p4(e,t){return e.length===t.length&&e.slice(0,-1).every((a,s)=>a===t[s])?e[e.length-1]-t[t.length-1]:0}function m4(e,t,n=!1){let{routesMeta:a}=e,s={},l="/",u=[];for(let f=0;f<a.length;++f){let h=a[f],p=f===a.length-1,m=l==="/"?t:t.slice(l.length)||"/",v=Vf({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},m),_=h.route;if(!v&&p&&n&&!a[a.length-1].route.index&&(v=Vf({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},m)),!v)return null;Object.assign(s,v.params),u.push({params:s,pathname:Da([l,v.pathname]),pathnameBase:S4(Da([l,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(l=Da([l,v.pathnameBase]))}return u}function Vf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=g4(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let l=s[0],u=l.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:a.reduce((p,{paramName:m,isOptional:v},_)=>{if(m==="*"){let M=f[_]||"";u=l.slice(0,l.length-M.length).replace(/(.)\/+$/,"$1")}const x=f[_];return v&&!x?p[m]=void 0:p[m]=(x||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:e}}function g4(e,t=!1,n=!0){$i(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,h)=>(a.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),a]}function v4(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $i(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Fa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function _4(e,t="/"){let{pathname:n,search:a="",hash:s=""}=typeof e=="string"?Tc(e):e;return{pathname:n?n.startsWith("/")?n:y4(n,t):t,search:M4(a),hash:E4(s)}}function y4(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function sm(e,t,n,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function x4(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function f1(e){let t=x4(e);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function h1(e,t,n,a=!1){let s;typeof e=="string"?s=Tc(e):(s={...e},yn(!s.pathname||!s.pathname.includes("?"),sm("?","pathname","search",s)),yn(!s.pathname||!s.pathname.includes("#"),sm("#","pathname","hash",s)),yn(!s.search||!s.search.includes("#"),sm("#","search","hash",s)));let l=e===""||s.pathname==="",u=l?"/":s.pathname,f;if(u==null)f=n;else{let v=t.length-1;if(!a&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),v-=1;s.pathname=_.join("/")}f=v>=0?t[v]:"/"}let h=_4(s,f),p=u&&u!=="/"&&u.endsWith("/"),m=(l||u===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(p||m)&&(h.pathname+="/"),h}var Da=e=>e.join("/").replace(/\/\/+/g,"/"),S4=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M4=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,E4=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function b4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var d1=["POST","PUT","PATCH","DELETE"];new Set(d1);var T4=["GET",...d1];new Set(T4);var Bo=et.createContext(null);Bo.displayName="DataRouter";var Jf=et.createContext(null);Jf.displayName="DataRouterState";et.createContext(!1);var p1=et.createContext({isTransitioning:!1});p1.displayName="ViewTransition";var A4=et.createContext(new Map);A4.displayName="Fetchers";var R4=et.createContext(null);R4.displayName="Await";var Ji=et.createContext(null);Ji.displayName="Navigation";var th=et.createContext(null);th.displayName="Location";var Va=et.createContext({outlet:null,matches:[],isDataRoute:!1});Va.displayName="Route";var Pv=et.createContext(null);Pv.displayName="RouteError";function C4(e,{relative:t}={}){yn(Ac(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=et.useContext(Ji),{hash:s,pathname:l,search:u}=Rc(e,{relative:t}),f=l;return n!=="/"&&(f=l==="/"?n:Da([n,l])),a.createHref({pathname:f,search:u,hash:s})}function Ac(){return et.useContext(th)!=null}function xs(){return yn(Ac(),"useLocation() may be used only in the context of a <Router> component."),et.useContext(th).location}var m1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function g1(e){et.useContext(Ji).static||et.useLayoutEffect(e)}function w4(){let{isDataRoute:e}=et.useContext(Va);return e?G4():D4()}function D4(){yn(Ac(),"useNavigate() may be used only in the context of a <Router> component.");let e=et.useContext(Bo),{basename:t,navigator:n}=et.useContext(Ji),{matches:a}=et.useContext(Va),{pathname:s}=xs(),l=JSON.stringify(f1(a)),u=et.useRef(!1);return g1(()=>{u.current=!0}),et.useCallback((h,p={})=>{if($i(u.current,m1),!u.current)return;if(typeof h=="number"){n.go(h);return}let m=h1(h,JSON.parse(l),s,p.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Da([t,m.pathname])),(p.replace?n.replace:n.push)(m,p.state,p)},[t,n,l,s,e])}et.createContext(null);function Rc(e,{relative:t}={}){let{matches:n}=et.useContext(Va),{pathname:a}=xs(),s=JSON.stringify(f1(n));return et.useMemo(()=>h1(e,JSON.parse(s),a,t==="path"),[e,s,a,t])}function L4(e,t,n,a){yn(Ac(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=et.useContext(Ji),{matches:l}=et.useContext(Va),u=l[l.length-1],f=u?u.params:{},h=u?u.pathname:"/",p=u?u.pathnameBase:"/",m=u&&u.route;{let y=m&&m.path||"";v1(h,!m||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let v=xs(),_;_=v;let x=_.pathname||"/",M=x;if(p!=="/"){let y=p.replace(/^\//,"").split("/");M="/"+x.replace(/^\//,"").split("/").slice(y.length).join("/")}let b=l1(e,{pathname:M});return $i(m||b!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),$i(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),I4(b&&b.map(y=>Object.assign({},y,{params:Object.assign({},f,y.params),pathname:Da([p,s.encodeLocation?s.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?p:Da([p,s.encodeLocation?s.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),l,n,a)}function U4(){let e=H4(),t=b4(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=et.createElement(et.Fragment,null,et.createElement("p",null,"💿 Hey developer 👋"),et.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",et.createElement("code",{style:l},"ErrorBoundary")," or"," ",et.createElement("code",{style:l},"errorElement")," prop on your route.")),et.createElement(et.Fragment,null,et.createElement("h2",null,"Unexpected Application Error!"),et.createElement("h3",{style:{fontStyle:"italic"}},t),n?et.createElement("pre",{style:s},n):null,u)}var P4=et.createElement(U4,null),N4=class extends et.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?et.createElement(Va.Provider,{value:this.props.routeContext},et.createElement(Pv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function O4({routeContext:e,match:t,children:n}){let a=et.useContext(Bo);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),et.createElement(Va.Provider,{value:e},n)}function I4(e,t=[],n=null,a=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=n==null?void 0:n.errors;if(l!=null){let h=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);yn(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,h+1))}let u=!1,f=-1;if(n)for(let h=0;h<s.length;h++){let p=s[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=h),p.route.id){let{loaderData:m,errors:v}=n,_=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||_){u=!0,f>=0?s=s.slice(0,f+1):s=[s[0]];break}}}return s.reduceRight((h,p,m)=>{let v,_=!1,x=null,M=null;n&&(v=l&&p.route.id?l[p.route.id]:void 0,x=p.route.errorElement||P4,u&&(f<0&&m===0?(v1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,M=null):f===m&&(_=!0,M=p.route.hydrateFallbackElement||null)));let b=t.concat(s.slice(0,m+1)),S=()=>{let y;return v?y=x:_?y=M:p.route.Component?y=et.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=h,et.createElement(O4,{match:p,routeContext:{outlet:h,matches:b,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?et.createElement(N4,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:S(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):S()},null)}function Nv(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function F4(e){let t=et.useContext(Bo);return yn(t,Nv(e)),t}function B4(e){let t=et.useContext(Jf);return yn(t,Nv(e)),t}function z4(e){let t=et.useContext(Va);return yn(t,Nv(e)),t}function Ov(e){let t=z4(e),n=t.matches[t.matches.length-1];return yn(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function V4(){return Ov("useRouteId")}function H4(){var a;let e=et.useContext(Pv),t=B4("useRouteError"),n=Ov("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[n]}function G4(){let{router:e}=F4("useNavigate"),t=Ov("useNavigate"),n=et.useRef(!1);return g1(()=>{n.current=!0}),et.useCallback(async(s,l={})=>{$i(n.current,m1),n.current&&(typeof s=="number"?e.navigate(s):await e.navigate(s,{fromRouteId:t,...l}))},[e,t])}var dE={};function v1(e,t,n){!t&&!dE[e]&&(dE[e]=!0,$i(!1,n))}et.memo(k4);function k4({routes:e,future:t,state:n}){return L4(e,void 0,n,t)}function X4({basename:e="/",children:t=null,location:n,navigationType:a="POP",navigator:s,static:l=!1}){yn(!Ac(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=et.useMemo(()=>({basename:u,navigator:s,static:l,future:{}}),[u,s,l]);typeof n=="string"&&(n=Tc(n));let{pathname:h="/",search:p="",hash:m="",state:v=null,key:_="default"}=n,x=et.useMemo(()=>{let M=Fa(h,u);return M==null?null:{location:{pathname:M,search:p,hash:m,state:v,key:_},navigationType:a}},[u,h,p,m,v,_,a]);return $i(x!=null,`<Router basename="${u}"> is not able to match the URL "${h}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:et.createElement(Ji.Provider,{value:f},et.createElement(th.Provider,{children:t,value:x}))}var Rf="get",Cf="application/x-www-form-urlencoded";function eh(e){return e!=null&&typeof e.tagName=="string"}function j4(e){return eh(e)&&e.tagName.toLowerCase()==="button"}function W4(e){return eh(e)&&e.tagName.toLowerCase()==="form"}function q4(e){return eh(e)&&e.tagName.toLowerCase()==="input"}function Y4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function K4(e,t){return e.button===0&&(!t||t==="_self")&&!Y4(e)}var pf=null;function Z4(){if(pf===null)try{new FormData(document.createElement("form"),0),pf=!1}catch{pf=!0}return pf}var Q4=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function om(e){return e!=null&&!Q4.has(e)?($i(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cf}"`),null):e}function $4(e,t){let n,a,s,l,u;if(W4(e)){let f=e.getAttribute("action");a=f?Fa(f,t):null,n=e.getAttribute("method")||Rf,s=om(e.getAttribute("enctype"))||Cf,l=new FormData(e)}else if(j4(e)||q4(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||f.getAttribute("action");if(a=h?Fa(h,t):null,n=e.getAttribute("formmethod")||f.getAttribute("method")||Rf,s=om(e.getAttribute("formenctype"))||om(f.getAttribute("enctype"))||Cf,l=new FormData(f,e),!Z4()){let{name:p,type:m,value:v}=e;if(m==="image"){let _=p?`${p}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else p&&l.append(p,v)}}else{if(eh(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Rf,a=null,s=Cf,u=e}return l&&s==="text/plain"&&(u=l,l=void 0),{action:a,method:n.toLowerCase(),encType:s,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Iv(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function J4(e,t,n){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname==="/"?a.pathname=`_root.${n}`:t&&Fa(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${n}`,a}async function tz(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ez(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function nz(e,t,n){let a=await Promise.all(e.map(async s=>{let l=t.routes[s.route.id];if(l){let u=await tz(l,n);return u.links?u.links():[]}return[]}));return sz(a.flat(1).filter(ez).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function pE(e,t,n,a,s,l){let u=(h,p)=>n[p]?h.route.id!==n[p].route.id:!0,f=(h,p)=>{var m;return n[p].pathname!==h.pathname||((m=n[p].route.path)==null?void 0:m.endsWith("*"))&&n[p].params["*"]!==h.params["*"]};return l==="assets"?t.filter((h,p)=>u(h,p)||f(h,p)):l==="data"?t.filter((h,p)=>{var v;let m=a.routes[h.route.id];if(!m||!m.hasLoader)return!1;if(u(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let _=h.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((v=n[0])==null?void 0:v.params)||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function iz(e,t,{includeHydrateFallback:n}={}){return az(e.map(a=>{let s=t.routes[a.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function az(e){return[...new Set(e)]}function rz(e){let t={},n=Object.keys(e).sort();for(let a of n)t[a]=e[a];return t}function sz(e,t){let n=new Set;return new Set(t),e.reduce((a,s)=>{let l=JSON.stringify(rz(s));return n.has(l)||(n.add(l),a.push({key:l,link:s})),a},[])}function _1(){let e=et.useContext(Bo);return Iv(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function oz(){let e=et.useContext(Jf);return Iv(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Fv=et.createContext(void 0);Fv.displayName="FrameworkContext";function y1(){let e=et.useContext(Fv);return Iv(e,"You must render this element inside a <HydratedRouter> element"),e}function lz(e,t){let n=et.useContext(Fv),[a,s]=et.useState(!1),[l,u]=et.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:m,onTouchStart:v}=t,_=et.useRef(null);et.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let b=y=>{y.forEach(L=>{u(L.isIntersecting)})},S=new IntersectionObserver(b,{threshold:.5});return _.current&&S.observe(_.current),()=>{S.disconnect()}}},[e]),et.useEffect(()=>{if(a){let b=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(b)}}},[a]);let x=()=>{s(!0)},M=()=>{s(!1),u(!1)};return n?e!=="intent"?[l,_,{}]:[l,_,{onFocus:zl(f,x),onBlur:zl(h,M),onMouseEnter:zl(p,x),onMouseLeave:zl(m,M),onTouchStart:zl(v,x)}]:[!1,_,{}]}function zl(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function cz({page:e,...t}){let{router:n}=_1(),a=et.useMemo(()=>l1(n.routes,e,n.basename),[n.routes,e,n.basename]);return a?et.createElement(fz,{page:e,matches:a,...t}):null}function uz(e){let{manifest:t,routeModules:n}=y1(),[a,s]=et.useState([]);return et.useEffect(()=>{let l=!1;return nz(e,t,n).then(u=>{l||s(u)}),()=>{l=!0}},[e,t,n]),a}function fz({page:e,matches:t,...n}){let a=xs(),{manifest:s,routeModules:l}=y1(),{basename:u}=_1(),{loaderData:f,matches:h}=oz(),p=et.useMemo(()=>pE(e,t,h,s,a,"data"),[e,t,h,s,a]),m=et.useMemo(()=>pE(e,t,h,s,a,"assets"),[e,t,h,s,a]),v=et.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let M=new Set,b=!1;if(t.forEach(y=>{var R;let L=s.routes[y.route.id];!L||!L.hasLoader||(!p.some(w=>w.route.id===y.route.id)&&y.route.id in f&&((R=l[y.route.id])!=null&&R.shouldRevalidate)||L.hasClientLoader?b=!0:M.add(y.route.id))}),M.size===0)return[];let S=J4(e,u,"data");return b&&M.size>0&&S.searchParams.set("_routes",t.filter(y=>M.has(y.route.id)).map(y=>y.route.id).join(",")),[S.pathname+S.search]},[u,f,a,s,p,t,e,l]),_=et.useMemo(()=>iz(m,s),[m,s]),x=uz(m);return et.createElement(et.Fragment,null,v.map(M=>et.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),_.map(M=>et.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),x.map(({key:M,link:b})=>et.createElement("link",{key:M,...b})))}function hz(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var x1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{x1&&(window.__reactRouterVersion="7.7.1")}catch{}function dz({basename:e,children:t,window:n}){let a=et.useRef();a.current==null&&(a.current=e4({window:n,v5Compat:!0}));let s=a.current,[l,u]=et.useState({action:s.action,location:s.location}),f=et.useCallback(h=>{et.startTransition(()=>u(h))},[u]);return et.useLayoutEffect(()=>s.listen(f),[s,f]),et.createElement(X4,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:s})}var S1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M1=et.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:s,reloadDocument:l,replace:u,state:f,target:h,to:p,preventScrollReset:m,viewTransition:v,..._},x){let{basename:M}=et.useContext(Ji),b=typeof p=="string"&&S1.test(p),S,y=!1;if(typeof p=="string"&&b&&(S=p,x1))try{let U=new URL(window.location.href),D=p.startsWith("//")?new URL(U.protocol+p):new URL(p),G=Fa(D.pathname,M);D.origin===U.origin&&G!=null?p=G+D.search+D.hash:y=!0}catch{$i(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=C4(p,{relative:s}),[R,w,N]=lz(a,_),z=vz(p,{replace:u,state:f,target:h,preventScrollReset:m,relative:s,viewTransition:v});function I(U){t&&t(U),U.defaultPrevented||z(U)}let V=et.createElement("a",{..._,...N,href:S||L,onClick:y||l?t:I,ref:hz(x,w),target:h,"data-discover":!b&&n==="render"?"true":void 0});return R&&!b?et.createElement(et.Fragment,null,V,et.createElement(cz,{page:L})):V});M1.displayName="Link";var pz=et.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:s=!1,style:l,to:u,viewTransition:f,children:h,...p},m){let v=Rc(u,{relative:p.relative}),_=xs(),x=et.useContext(Jf),{navigator:M,basename:b}=et.useContext(Ji),S=x!=null&&Mz(v)&&f===!0,y=M.encodeLocation?M.encodeLocation(v).pathname:v.pathname,L=_.pathname,R=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(L=L.toLowerCase(),R=R?R.toLowerCase():null,y=y.toLowerCase()),R&&b&&(R=Fa(R,b)||R);const w=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let N=L===y||!s&&L.startsWith(y)&&L.charAt(w)==="/",z=R!=null&&(R===y||!s&&R.startsWith(y)&&R.charAt(y.length)==="/"),I={isActive:N,isPending:z,isTransitioning:S},V=N?t:void 0,U;typeof a=="function"?U=a(I):U=[a,N?"active":null,z?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let D=typeof l=="function"?l(I):l;return et.createElement(M1,{...p,"aria-current":V,className:U,ref:m,style:D,to:u,viewTransition:f},typeof h=="function"?h(I):h)});pz.displayName="NavLink";var mz=et.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:s,state:l,method:u=Rf,action:f,onSubmit:h,relative:p,preventScrollReset:m,viewTransition:v,..._},x)=>{let M=xz(),b=Sz(f,{relative:p}),S=u.toLowerCase()==="get"?"get":"post",y=typeof f=="string"&&S1.test(f),L=R=>{if(h&&h(R),R.defaultPrevented)return;R.preventDefault();let w=R.nativeEvent.submitter,N=(w==null?void 0:w.getAttribute("formmethod"))||u;M(w||R.currentTarget,{fetcherKey:t,method:N,navigate:n,replace:s,state:l,relative:p,preventScrollReset:m,viewTransition:v})};return et.createElement("form",{ref:x,method:S,action:b,onSubmit:a?h:L,..._,"data-discover":!y&&e==="render"?"true":void 0})});mz.displayName="Form";function gz(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function E1(e){let t=et.useContext(Bo);return yn(t,gz(e)),t}function vz(e,{target:t,replace:n,state:a,preventScrollReset:s,relative:l,viewTransition:u}={}){let f=w4(),h=xs(),p=Rc(e,{relative:l});return et.useCallback(m=>{if(K4(m,t)){m.preventDefault();let v=n!==void 0?n:hc(h)===hc(p);f(e,{replace:v,state:a,preventScrollReset:s,relative:l,viewTransition:u})}},[h,f,p,n,a,t,e,s,l,u])}var _z=0,yz=()=>`__${String(++_z)}__`;function xz(){let{router:e}=E1("useSubmit"),{basename:t}=et.useContext(Ji),n=V4();return et.useCallback(async(a,s={})=>{let{action:l,method:u,encType:f,formData:h,body:p}=$4(a,t);if(s.navigate===!1){let m=s.fetcherKey||yz();await e.fetch(m,n,s.action||l,{preventScrollReset:s.preventScrollReset,formData:h,body:p,formMethod:s.method||u,formEncType:s.encType||f,flushSync:s.flushSync})}else await e.navigate(s.action||l,{preventScrollReset:s.preventScrollReset,formData:h,body:p,formMethod:s.method||u,formEncType:s.encType||f,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[e,t,n])}function Sz(e,{relative:t}={}){let{basename:n}=et.useContext(Ji),a=et.useContext(Va);yn(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),l={...Rc(e||".",{relative:t})},u=xs();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),h=f.getAll("index");if(h.some(m=>m==="")){f.delete("index"),h.filter(v=>v).forEach(v=>f.append("index",v));let m=f.toString();l.search=m?`?${m}`:""}}return(!e||e===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Da([n,l.pathname])),hc(l)}function Mz(e,{relative:t}={}){let n=et.useContext(p1);yn(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=E1("useViewTransitionState"),s=Rc(e,{relative:t});if(!n.isTransitioning)return!1;let l=Fa(n.currentLocation.pathname,a)||n.currentLocation.pathname,u=Fa(n.nextLocation.pathname,a)||n.nextLocation.pathname;return Vf(s.pathname,u)!=null||Vf(s.pathname,l)!=null}OR.createRoot(document.getElementById("root")).render(K.jsx(et.StrictMode,{children:K.jsx(dz,{basename:"/Portfolio",children:K.jsx(t4,{})})}));
