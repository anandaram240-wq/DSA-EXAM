var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.8`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function D(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function O(e,t){pe++,fe[pe]=e.current,e.current=t}var he=me(null),ge=me(null),_e=me(null),ve=me(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}D(he),O(he,e)}function be(){D(he),D(ge),D(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(D(he),D(ge)),ve.current===e&&(D(ve),Qf._currentValue=de)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,k=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ht])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return Ae.call(Ft,e)?!0:Ae.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(ue(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&nn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&nn(e,a,t[a])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[gt]||null;if(!i)throw Error(s(90));Jt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(h({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function vr(e){if(Wt(Et(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(vn){var xr;if(vn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=vn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Gt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Ed(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};vn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)vi(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=_i(31,n,t,i),e.elementType=ie,e.lanes=a,e;case y:return Si(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=_i(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case te:return e=_i(13,n,t,i),e.elementType=te,e.lanes=a,e;case ne:return e=_i(19,n,t,i),e.elementType=ne,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:o=10;break a;case ee:o=9;break a;case C:o=11;break a;case re:o=14;break a;case w:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=_i(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-Ke(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(s(519));function Ki(e){throw Qi(Di(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=uf(e)}else t===27?(t=A,Zd(e.type)?(e=lf,lf=null,A=e):A=t):A=Hi?cf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=me(null),ea=null,ta=null;function na(e,t,n){O($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,D($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ia(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ia(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function oa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;jr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ve.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(s(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=T.S;T.S=function(e,t){tu=k(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=me(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?O(Ta,Ta.current):O(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(s(460)),Aa=Error(s(474)),ja=Error(s(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(s(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(s(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===w&&Fa(a)===t.type)?(t=i(t,n.props),Ha(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Si(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case w:return t=Fa(t),f(e,t,n)}if(ue(t)||se(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===S)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Fa(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===S)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Fa(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===S)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),j&&Li(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),j&&Li(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Fa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ha(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=Si(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=xi(a.type,a.key,a.props,null,e.mode,c),Ha(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ti(a,e.mode,c),c.return=e,e=c}return o(e);case w:return a=Fa(a),b(e,r,a,c)}if(ue(a))return h(e,r,a,c);if(se(a)){if(l=se(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Va(a),c);if(a.$$typeof===S)return b(e,r,ua(e,a),c);Ua(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Ci(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=me(null),oo=me(0);function so(e,t){e=Gl,O(oo,e),O(ao,t),Gl=e|t.baseLanes}function co(){O(oo,Gl),O(ao,ao.current)}function lo(){Gl=oo.current,D(ao),D(oo)}var uo=me(null),fo=null;function po(e){var t=e.alternate;O(N,N.current&1),O(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){O(N,N.current),O(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(O(N,N.current),O(uo,e),fo===null&&(fo=e)):go(e)}function go(){O(N,N.current),O(uo,uo.current)}function _o(e){D(uo),fo===e&&(fo=null),D(N)}var N=me(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(s(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){T.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(s(300));e===null||z||(e=e.dependencies,e!==null&&sa(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var i=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=i)throw Error(s(301));if(i+=1,I=F=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}T.H=Ks,a=t(n,r)}while(xo);return a}function jo(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(s(467)):Error(s(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===S)return la(e)}throw Error(s(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!jr(a,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);jr(a,t.memoizedState)||(z=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Wo(e,t,n){var r=P,i=R(),a=j;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!jr((F||i).memoizedState,n);if(o&&(i.memoizedState=n,z=!0),i=i.queue,hs(qo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,i,n,t),null),G===null)throw Error(s(349));a||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Yo(e){var t=fi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,i){if(Bs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};T.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,$o(t,a)):(a.next=n.next,t.pending=n.next=a)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(j){var n=G.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=cf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return jr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),jr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,zs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=As(e).queue;Ds(e,i,t,de,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return la(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=di(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),G===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(s(479))}else t=di(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Us={readContext:la,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:la,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,i=Fo();if(j){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||Go(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ms(qo.bind(null,r,a,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ai(e)}function $s(e){console.error(e)}function ec(e){ai(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,i,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(j)return t=uo.current,t===null?(r!==Gi&&(t=Error(s(423),{cause:r}),Qi(Di(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Di(r,n),i=rc(e.stateNode,r,i),$a(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Gi&&(e=Error(s(422),{cause:r}),Qi(Di(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Di(a,n),Zl===null?Zl=[a]:Zl.push(a),Y!==4&&(Y=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(iu===null||!iu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=ic(i),ac(i,e,n,r),$a(n,i),!1}n=n.return}while(n!==null);return!1}var sc=Error(s(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&s&&zi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return hc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(mo(t),i)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(z||oa(e,t,n,!1),i=(n&e.childLanes)!==0,z||i){if(r=G,r!==null&&(o=lt(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,fi(e,o),hu(r,e,o),sc;Du(),t=gc(e,t,n)}else e=a.treeContext,A=cf(o.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return ca(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Xi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(j){if(i?po(t):go(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(go(t),i=t.mode,c=Oc({mode:`hidden`,children:c},i),r=Si(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,i=t.mode,r=Oc({mode:`visible`,children:r.children},i),c=Si(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Qi({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||oa(e,t,n,!1),o=(n&e.childLanes)!==0,z||o){if(o=G,o!==null&&(r=lt(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),hu(o,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=cf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return i?(go(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,i,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(i=c.cachePool,i===null?i=Oa():(l=M._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(N,o),cc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&sa(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),na(t,M,e.memoizedState.cache),Xi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:na(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===C){t.tag=11,t=lc(null,t,e,r,n);break a}else if(i===re){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(s(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Zs(r,t.pendingProps),xc(e,t,r,i,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ya(e,t),no(t,r,null,n);var o=t.memoizedState;if(r=o.cache,na(t,M,r),r!==a.cache&&aa(t,[M],n,!0),to(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==i){i=Di(Error(s(424)),t),Qi(i),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=cf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===i){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[ht]=t,r[gt]=e,Pd(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&j&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Hi=t,Wi=!0,i=A,Zd(t.type)?(lf=i,A=cf(r.firstChild)):A=i),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((i=r=A)&&(r=tf(r,t.type,t.pendingProps,Wi),r===null?i=!1:(t.stateNode=r,Hi=t,A=cf(r.firstChild),Wi=!1,i=!0)),i||Ki(t)),xe(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Oo(e,t,jo,null,null,n),Qf._currentValue=i),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=nf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return Ec(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,ca(t),i=la(i),r=r(i),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(M),e===null?(i=Ea(),i===null&&(i=G,a=ha(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ja(t),na(t,M,i)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,na(t,M,r),r!==i.cache&&aa(t,[M],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),na(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(M),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),B(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Lc(t),a===null?(B(t),Rc(t,i,null,r,n)):(B(t),zc(t,a))):a?a===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,a)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,i,e,r,n)),null;case 27:if(Se(t),n=_e.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}e=he.current,Yi(t)?qi(t,e):(e=ff(i,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(Se(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}if(a=he.current,Yi(t))qi(t,a);else{var o=Bd(_e.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[ht]=t,a[gt]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=_e.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Hi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ki(t,!0)}else e=Bd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(s(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),i=!1}else i=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ra(t.type),B(t),null;case 19:if(D(N),r=t.memoizedState,r===null)return B(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=vo(e),a!==null){for(t.flags|=128,Vc(r,!1),e=a.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return O(N,N.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&k()>nu&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304)}else{if(!i)if(e=vo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!j)return B(t),null}else 2*k()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=k(),e.sibling=null,n=N.current,O(N,i?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&D(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(M),B(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Uc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(M),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(N),null;case 4:return be(),null;case 10:return ra(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&D(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Bi(t),t.tag){case 3:ra(M),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:D(N);break;case 10:ra(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&D(Ta);break;case 24:ra(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ht]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Zs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(s(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(s(160));fl(a,o,i),U=null,ul=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[St]||a[ht]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[ht]=e,Ot(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[ht]=e,Ot(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){i=e.stateNode;try{en(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Qc(e,i,n===null?i:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=k()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||i,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;nl(e,el(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(en(a,``),n.flags&=-33),nl(e,el(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;tl(e,el(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=la(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:T.T===null?ft():dd()}function mu(){if(Yl===0)if(!(q&536870912)||j){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),at(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=a,ql|=a,i=4;break a}a=Ql,Ql=i,a!==null&&(Ql===null?Ql=a:Ql.push.apply(Ql,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=eu+300-k(),10<i)){if(yu(r,t,Yl,!Hl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Nl(t,a,d);var m=(a&62914560)===a?eu-k():(a&4194048)===a?tu-k():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ta=ea=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=yi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=tt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,li(),n}function Cu(e,t){P=null,T.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Di(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=T.H;return T.H=Us,e===null?Us:e}function Eu(){var e=T.A;return T.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,W=r,T.H=i,T.A=a,K===null&&(G=null,q=0,li()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=k()+500,Su(e,t)):Ul=tt(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,a,1);break;case 2:case 9:if(Na(a)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(a)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Wf(o):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,a,5);break;case 6:J=0,Vl=null,Pu(e,t,a,6);break;case 8:xu(),Y=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ta=ea=null,T.H=r,T.A=i,W=n,K===null?(G=null,q=0,li(),Y):0}function ju(){for(;K!==null&&!Ne();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=bi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ta=ea=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Di(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Di(n,e.current)),K=null;return}t.flags&32768?(j||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=ci,ot(e,n,a,o,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,i=E.p,E.p=2,o=W,W|=4;try{sl(e,t,n)}finally{W=o,E.p=i,T.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,E.p=r,T.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,E.p=r,T.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=dt(su),r=T.T,i=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var a=au,o=su;if(X=0,ou=au=null,su=0,W&6)throw Error(s(331));var c=W;if(W|=4,Il(a.current),Ol(a,a.current,o,n),W=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,a)}catch{}return!0}finally{E.p=i,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Di(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Di(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>k()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=fi(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=et(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=k(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=et(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,k()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?je(Ie,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ri.length;hd++){var gd=ri[hd];ii(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=wt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),o=[];a:{var s=ni.get(e);if(s!==void 0){var c=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:c=Jn;break;case`focusin`:u=`focus`,c=zn;break;case`focusout`:u=`blur`,c=zn;break;case`beforeblur`:case`afterblur`:c=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Xn;break;case Yr:case Xr:case Zr:c=Bn;break;case ti:c=Zn;break;case`scroll`:case`scrollend`:c=Mn;break;case`wheel`:c=Qn;break;case`copy`:case`cut`:case`paste`:c=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Yn;break;case`toggle`:case`beforetoggle`:c=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?wt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Et(c),h=u==null?s:Et(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Et(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=yr;else if(pr(s))if(br)v=kr;else{v=Dr;var y=Er}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Xt(s,`number`,s.value)}switch(y=r?Et(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(o,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(o,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,a);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:rn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[gt]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}$t(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ot(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=_e.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Dt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Ot(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,Ot(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),Ot(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,Ot(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Ot(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=hi,e):hi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ut(t);var n=fi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=k()+500,id(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.8`)throw Error(s(527,Lp,`19.2.8`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Qs,a=$s,o=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),f=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),p=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),m=e=>{let t=p(e);return t.charAt(0).toUpperCase()+t.slice(1)},h={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},g=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},_=(0,l.createContext)({}),v=()=>(0,l.useContext)(_),y=(0,l.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:u=24,strokeWidth:f=2,absoluteStrokeWidth:p=!1,color:m=`currentColor`,className:_=``}=v()??{},y=r??p?Number(n??f)*24/Number(t??u):n??f;return(0,l.createElement)(`svg`,{ref:c,...h,width:t??u??h.width,height:t??u??h.height,stroke:e??m,strokeWidth:y,className:d(`lucide`,_,i),...!a&&!g(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,l.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),b=(e,t)=>{let n=(0,l.forwardRef)(({className:n,...r},i)=>(0,l.createElement)(y,{ref:i,iconNode:t,className:d(`lucide-${f(m(e))}`,`lucide-${e}`,n),...r}));return n.displayName=m(e),n},x=b(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),ee=b(`book-open`,[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]),S=b(`brain`,[[`path`,{d:`M12 18V5`,key:`adv99a`}],[`path`,{d:`M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4`,key:`1e3is1`}],[`path`,{d:`M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5`,key:`1gqd8o`}],[`path`,{d:`M17.997 5.125a4 4 0 0 1 2.526 5.77`,key:`iwvgf7`}],[`path`,{d:`M18 18a4 4 0 0 0 2-7.464`,key:`efp6ie`}],[`path`,{d:`M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517`,key:`1gq6am`}],[`path`,{d:`M6 18a4 4 0 0 1-2-7.464`,key:`k1g0md`}],[`path`,{d:`M6.003 5.125a4 4 0 0 0-2.526 5.77`,key:`q97ue3`}]]),C=b(`calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),te=b(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),ne=b(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),re=b(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),w=b(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),ie=b(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),ae=b(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),oe=b(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),se=b(`house`,[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]]),ce=b(`list`,[[`path`,{d:`M3 5h.01`,key:`18ugdj`}],[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M3 19h.01`,key:`noohij`}],[`path`,{d:`M8 5h13`,key:`1pao27`}],[`path`,{d:`M8 12h13`,key:`1za7za`}],[`path`,{d:`M8 19h13`,key:`m83p4d`}]]),le=b(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),ue=b(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),T=b(`trophy`,[[`path`,{d:`M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2`,key:`pwuv1l`}],[`path`,{d:`M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2`,key:`1y54w1`}],[`path`,{d:`M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3`,key:`e30mpu`}],[`path`,{d:`M4 22h16`,key:`57wxv0`}],[`path`,{d:`M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`,key:`1mhfuq`}],[`path`,{d:`M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3`,key:`i0yafy`}]]),E=b(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),de=b(`zap`,[[`path`,{d:`M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z`,key:`1v7up4`}]]),fe=[{id:1,name:`Module 1`,title:`Structures, Pointers, Stack & Infix/Postfix/Prefix`,priority:`CRITICAL`,color:`#ef4444`,syllabusTopics:[`Structures and Pointers revisited`,`Introduction to Data Structures — Classification, Terminology`,`Stack — Definition, Operations, Array Representation`,`Applications of Stack: Infix, Postfix, Prefix`,`Evaluating a Postfix Expression`,`Converting Infix to Postfix (Program in C)`,`Self-Study: Files and its Operations`],topics:[{topic:`Infix to Postfix Conversion using Stack`,frequency:8,marks:10,priority:`HIGH`,years:[`Dec-2019`,`Feb-2025 Makeup`,`Feb/Mar-2025 Supp`,`Mar/Apr-2024`,`Mar-2022`,`Apr/May-2023`,`Sept/Oct-2022`,`Dec-2018`],questions:[{q:`Represent the conversion of the expression A – (B/C + (D% E * F)/G) *H into postfix form in tabular form.`,marks:10,year:`Dec-2019`},{q:`Convert the given infix-expression to postfix using stack. (A+B)*D+E/(F+A*D)+C. Also, evaluate the same using the value A=1, B=2, C=4, D=1, E=4, F=1.`,marks:10,year:`Feb-2025 Makeup`},{q:`Write an algorithm | C function to convert infix expression into postfix form using stack. Also trace the algorithm for the given infix expression (A+B)–C*(D|E))+F`,marks:10,year:`Feb/Mar-2025 Supp`},{q:`Convert the given infix-expression (A+(B–C)*D) to postfix using stack implementation and evaluate the same using the values A=4, B=2, C=3, D=1.`,marks:10,year:`Mar/Apr-2024`},{q:`Write an algorithm to convert infix to postfix form. Apply it to convert the following and represent the tracing in tabular form (A+B)*C-D$E*F`,marks:10,year:`Mar-2022`},{q:`Represent the conversion of the expression (A-B)+C*D/E-F into postfix form in tabular form.`,marks:10,year:`Apr/May-2023`},{q:`Convert the expression (a+b)*d+e/c into postfix form using stack.`,marks:10,year:`Sept/Oct-2022`},{q:`Write an algorithm | C function to convert infix expression into postfix form using stack, and Tabulate the tracing of postfix evaluation algorithm by considering the expression 8 4/8*7 2-+2$`,marks:10,year:`Dec-2018`}]},{topic:`Postfix Expression Evaluation using Stack`,frequency:7,marks:10,priority:`HIGH`,years:[`Feb/Mar-2025 Supp`,`Apr/May-2023`,`Mar/Apr-2024`,`Jul/Aug-2021`,`Jan/Feb-2018`,`Dec-2018`],questions:[{q:`Evaluate the following postfix expression using stack. 2 3 1 * + 9 –`,marks:5,year:`Feb/Mar-2025 Supp`},{q:`Write a C function/algorithm to evaluate the postfix expression. Apply algorithm to evaluate: 9 3 4 * 8 + 4 / -`,marks:10,year:`Apr/May-2023`},{q:`Write a c-function to evaluate a postfix expression.`,marks:10,year:`Mar/Apr-2024, Jul/Aug-2021`},{q:`Develop an algorithm to evaluate a postfix expression considering expression with only single digit non-negative integer numbers.`,marks:10,year:`Jan/Feb-2018`},{q:`Write an algorithm | C function to convert infix expression into postfix form using stack, and Tabulate the tracing of postfix evaluation algorithm by considering the expression 8 4/8*7 2-+2$`,marks:10,year:`Dec-2018`}]},{topic:`Stack — Definition, ADT, Push, Pop, Peek, Display`,frequency:7,marks:10,priority:`HIGH`,years:[`Feb-2025 Makeup`,`Dec-2019`,`Feb/Mar-2025 Supp`,`Mar-2022`,`Apr/May-2023`,`Sept/Oct-2022`,`Dec-2018`,`Jan/Feb-2018`],questions:[{q:`Define Stack. Write C functions to perform Push, Pop and display operations on a stack.`,marks:10,year:`Feb-2025 Makeup`},{q:`Design a C program that implements stack operations using an array.`,marks:10,year:`Dec-2019`},{q:`Write functions/algorithms to implement push(), pop() and peek() operations of stack.`,marks:10,year:`Feb/Mar-2025 Supp`},{q:`Write C functions to implement following stack operations using array: i) Push ii) Pop iii) Peek`,marks:10,year:`Mar-2022, Apr/May-2023`},{q:`Define a stack. Write C functions for push and POP operations.`,marks:10,year:`Sept/Oct-2022`},{q:`Write the ADT for stack.`,marks:5,year:`Dec-2018`},{q:`Representing Stack operations in C, illustrate the working of a stack with examples.`,marks:10,year:`Jan/Feb-2018`}]},{topic:`Structures and Pointers — C Programs`,frequency:5,marks:10,priority:`MEDIUM`,years:[`Dec-2019`,`Feb-2025 Makeup`,`Mar-2022`,`Sept/Oct-2022`,`Jul/Aug-2021`,`Jan/Feb-2018`,`Apr/May-2023`],questions:[{q:`Write a program in C that initializes the members of an employee structure using pointer. Also write a user defined function that prints employee information.`,marks:10,year:`Dec-2019`},{q:`A company ABC: Design a 'C' Program to read the details of 10 employees (empid, name, age, YoE, department, salary) and print empid, name and YoE of employees whose YoE is below 5 years and department is developer.`,marks:10,year:`Feb-2025 Makeup`},{q:`Write a 'c' program to create a structure with [emp-id, name, age, salary]. Then read and print the data for 10 employees.`,marks:10,year:`Mar-2022`},{q:`Write a C program to store the details of ten books (book title, author name and cost).`,marks:10,year:`Sept/Oct-2022`},{q:`What is a pointer? Write a C function to swap two numbers using pointers.`,marks:10,year:`Jul/Aug-2021, Mar-2022, Apr/May-2023`},{q:`What is a Pointer? Illustrate pointer initialization and declaration with examples.`,marks:5,year:`Jan/Feb-2018`},{q:`Develop a C function to store N elements into an array A dynamically and reverse into array B using pointers.`,marks:10,year:`Jan/Feb-2018`},{q:`Differentiate between Structure and a Union with examples.`,marks:6,year:`Jan/Feb-2018`}]},{topic:`Data Structures — Classification, ADT, Terminology`,frequency:4,marks:8,priority:`LOW`,years:[`Dec-2019`,`Feb-2025 Makeup`,`Feb/Mar-2025 Supp`,`Sept/Oct-2022`,`Jan/Feb-2018`],questions:[{q:`Briefly outline the classification of non primitive data structures with suitable examples.`,marks:6,year:`Dec-2019`},{q:`Define data Structure. With a neat diagram, explain the classification of data structure and list the advantages.`,marks:10,year:`Feb-2025 Makeup`},{q:`Define data structure. Briefly explain its classification with examples.`,marks:10,year:`Feb/Mar-2025 Supp`},{q:`Write the classification of data structures and quote an example for each category.`,marks:6,year:`Sept/Oct-2022`},{q:`Define ADT. Develop ADT for natural numbers.`,marks:6,year:`Jan/Feb-2018`},{q:`Design an algorithm to check if given string is palindrome using stack.`,marks:6,year:`Dec-2019`}]},{topic:`Files and its Operations (Self-Study)`,frequency:2,marks:8,priority:`LOW`,years:[`Dec-2019`,`Mar-2022`,`Sept/Oct-2022`],questions:[{q:`Demonstrate the concept of random access to files by writing a C program that prints every fifth character in a given text file with name ABC.txt.`,marks:8,year:`Dec-2019`},{q:`Explain the following file functions: i) fopen() (ii) fclose() (iii) fseek() (iv) ftell() (v) rewind()`,marks:8,year:`Mar-2022`},{q:`With syntax explain fseek() and ftell() functions.`,marks:6,year:`Sept/Oct-2022`}]}]},{id:2,name:`Module 2`,title:`Recursion, Queues, Circular Queue & Singly Linked List`,priority:`CRITICAL`,color:`#f97316`,syllabusTopics:[`Recursion — GCD, Fibonacci Series, Types, Tower of Hanoi, Recursion vs Iteration`,`Queues — Definition, Array Representation, Operations`,`Types of Queues — Circular Queue and its implementation in C`,`Applications of Queues`,`Linked List — Introduction, LL vs Arrays`,`Singly Linked List — Insert, Delete, Display, Search, Traverse`,`Self-Study: Priority Queues`],topics:[{topic:`Recursion — Types, GCD, Fibonacci, Tower of Hanoi`,frequency:7,marks:10,priority:`HIGH`,years:[`Feb-2025 Makeup`,`Feb/Mar-2025 Supp`,`Mar/Apr-2024`,`Jan/Feb-2018`,`Mar-2022`,`Apr/May-2023`,`Sept/Oct-2022`],questions:[{q:`Define Recursion. List and explain the different types of recursion with example.`,marks:10,year:`Feb-2025 Makeup`},{q:`Define recursion. Explain the different types of recursion with examples.`,marks:10,year:`Feb/Mar-2025 Supp, Mar/Apr-2024`},{q:`Define recursion. Outline an algorithm to solve the problem to Tower of Hanoi.`,marks:10,year:`Jan/Feb-2018`},{q:`Define recursion. Analyse the following representation to move the disks from source to destination and write a recursive function for the same.`,marks:10,year:`Mar/Apr-2024`},{q:`Write a recursive function to implement Tower of Hanoi.`,marks:10,year:`Feb/Mar-2025 Supp`},{q:`Consider the following recursive function: int fun(int n){if(n==0) return(0); return(n+fun(n-1));} void main(){int x; x=fun(5); printf("x=%d",x);} Answer: i) Define recursion ii) Compute the output iii) Find the base case iv) Find the recursive case v) What is the type of recursion employed?`,marks:10,year:`Mar-2022`},{q:`Consider the following recursive function: int func(int n){if(n==0) return 0; return(n+func(n-2));} void main(){int x; x=func(6); print("x=%d",x);} i) Compute the output ii) Find the base case iii) Find the recursive case iv) What is the type of recursion employed?`,marks:10,year:`Apr/May-2023`},{q:`Identify the Base and Recursive case for the Fibonacci series and write a C program to print the Fibonacci series using recursion. Hence, trace the same for Fibonacci(5).`,marks:10,year:`Feb-2025 Makeup`},{q:`Demonstrate the application of stacks in executing recursive program by writing a C program for finding aᵇ.`,marks:10,year:`Sept/Oct-2022`},{q:`Write a recursive definition for computing aᵇ. Implement the same using a C program.`,marks:10,year:`Dec-2019`},{q:`With a suitable example differentiate between tail recursion and non-tail recursion.`,marks:6,year:`Dec-2019`}]},{topic:`Queue — Linear Queue, Enqueue, Dequeue, Display`,frequency:5,marks:10,priority:`HIGH`,years:[`Feb/Mar-2025 Supp`,`Dec-2019`,`Dec-2018`,`Jul/Aug-2021`,`Mar/Apr-2024`],questions:[{q:`Write C functions | algorithms to implement display, insert and delete functions of queue.`,marks:10,year:`Feb/Mar-2025 Supp`},{q:`Write user defined functions in C to implement insert and display operations on a linear queue.`,marks:10,year:`Dec-2019`},{q:`How to implement a queue using one dimensional array? Write C functions for enqueue and dequeue operations.`,marks:10,year:`Dec-2018`},{q:`Define queue and linked queue. Explain operations on linked queues along with examples and algorithm.`,marks:10,year:`Jul/Aug-2021`},{q:`Design a C function/program for a toll gate that takes the entry, ticket, and continues the journey using appropriate data structure.`,marks:10,year:`Mar/Apr-2024`},{q:`Define queue. List and write the operations which can be applied on queue along with its applications.`,marks:6,year:`Mar/Apr-2024`},{q:`Identify atleast five applications of queue.`,marks:5,year:`Sept/Oct-2022`}]},{topic:`Circular Queue — Insert, Delete, Display`,frequency:6,marks:10,priority:`HIGH`,years:[`Feb-2025 Makeup`,`Feb/Mar-2025 Supp`,`Mar-2022`,`Apr/May-2023`,`Sept/Oct-2022`],questions:[{q:`List the different types of Queues and write the code fragment for insert, delete and display the contents of Circular Queue.`,marks:10,year:`Feb-2025 Makeup`},{q:`Write C functions | algorithms to implement insertion, deletion and display functions of circular queue.`,marks:10,year:`Feb/Mar-2025 Supp`},{q:`Develop C functions to implement insertion and deletion in a circular queue.`,marks:10,year:`Mar-2022`},{q:`What are dequeues? Explain its variants.`,marks:6,year:`Apr/May-2023`},{q:`Distinguish between linear queue and circular queue. Which one is better and why?`,marks:6,year:`Sept/Oct-2022`},{q:`Draw the queue structure in each case: i) Add A,B,C,D,E,F ii) Delete two letters iii) Add G iv) Delete four letters v) Add H`,marks:6,year:`Apr/May-2023`},{q:`Write two differences: i) Linear queue and circular queue ii) Static memory allocation and dynamic memory allocation iii) Singly linked list and circular linked list`,marks:6,year:`Mar-2022`}]},{topic:`Singly Linked List — Insert, Delete, Display, Search, Traverse`,frequency:8,marks:10,priority:`HIGH`,years:[`Feb-2025 Makeup`,`Feb/Mar-2025 Supp`,`Mar/Apr-2024`,`Jul/Aug-2021`,`Dec-2019`,`Sept/Oct-2022`,`Mar-2022`,`Dec-2018`,`Jan/Feb-2018`],questions:[{q:`Design a C function to insert a node in the beginning of a singly linked list and display the same.`,marks:10,year:`Feb-2025 Makeup`},{q:`Design a C function to delete the first node in a given singly linked list.`,marks:5,year:`Feb-2025 Makeup`},{q:`Write C functions | algorithms to implement: i) Insertion at the beginning of the linked list. ii) Deletion at the end of the linked list.`,marks:10,year:`Feb/Mar-2025 Supp`},{q:`Assume a four node single linked list with data values 15, 25, 40, 50: i) Insert a node with data value 30 in between nodes 25 and 40 ii) Delete node with data value 40`,marks:10,year:`Feb/Mar-2025 Supp`},{q:`Implement a C function to i) Insert a node in the beginning of singly linked list ii) Display the elements in singly linked list`,marks:10,year:`Mar/Apr-2024`},{q:`Write the following algorithm for single linked list: i) Inserting ITEM as the first node. ii) Deleting the node with the given ITEM.`,marks:10,year:`Jul/Aug-2021`},{q:`With appropriate algorithms implement the following on a singly linked list: Print smallest value, Count nodes, Delete last node`,marks:10,year:`Dec-2019`},{q:`Given a singly linked list with start pointer: i) Displaying contents of last node ii) Searching for value x`,marks:10,year:`Sept/Oct-2022`},{q:`Write an algorithm for inserting a new node after the given node in a singly linked list.`,marks:6,year:`Sept/Oct-2022`},{q:`Given a singly linked list of integers, design an algorithm/C function to find the maximum value.`,marks:6,year:`Mar-2022`},{q:`Build C functions: i) Finding the sum of only ODD valued elements ii) Interchanging the first and second element in a SLL`,marks:10,year:`Jan/Feb-2018`},{q:`Design algorithms: i) Deleting the node with a given value ii) Traversing the list`,marks:10,year:`Dec-2018`},{q:`Write a C function to create a linked list and display the linked list. Also count the number of occurrences of a given value.`,marks:10,year:`Apr/May-2023`}]},{topic:`Dynamic Memory Allocation — malloc, calloc, realloc`,frequency:3,marks:6,priority:`MEDIUM`,years:[`Dec-2019`,`Sept/Oct-2022`,`Mar-2022`,`Apr/May-2023`],questions:[{q:`Write a C program to create an array of size N dynamically. Program should also print the biggest element in the array.`,marks:6,year:`Dec-2019`},{q:`Create a dynamic array to hold n integers by using appropriate library functions.`,marks:6,year:`Sept/Oct-2022`},{q:`With syntax, explain the following dynamic memory allocation functions: i) malloc() ii) Calloc() iii) realloc()`,marks:8,year:`Mar-2022`},{q:`List and explain various functions supported by C to carry out dynamic memory allocation.`,marks:8,year:`Apr/May-2023`},{q:`Explain memory allocation and de-allocation for a linked list with example.`,marks:6,year:`Jul/Aug-2021`}]}]},{id:3,name:`Module 3`,title:`Circular List, Doubly Linked List, Linked Stack/Queue & Polynomial`,priority:`HIGH`,color:`#eab308`,syllabusTopics:[`Circular Lists — C Implementation: adding and deleting nodes`,`Doubly Linked List — C implementation: adding and deleting nodes`,`Circular Doubly Linked List`,`Linked List Applications: Linked Implementation of Stacks`,`Linked List Applications: Linked Implementation of Queues`,`Polynomial Representation using Linked List`,`Self-Study: Implementation of Polynomial Addition using Linked Lists`],topics:[{topic:`Circular Linked List — Insert at Beginning/End, Delete First/Last`,frequency:8,marks:10,priority:`HIGH`,years:[`Feb-2025 Makeup`,`Feb/Mar-2025 Supp`,`Apr/May-2023`,`Dec-2019`,`Sept/Oct-2022`,`Mar/Apr-2024`,`Mar-2022`,`Dec-2018`,`Jul/Aug-2021`],questions:[{q:`Write a C function to insert a new node at the beginning and end of a circular linked list.`,marks:10,year:`Feb-2025 Makeup`},{q:`Write C functions | algorithms to implement: i) Insert a new node at the beginning of circular linked list ii) Insert a new node at the end of circular linked list`,marks:10,year:`Feb/Mar-2025 Supp`},{q:`Write C functions to insert a new node at the beginning and end of a circular linked list.`,marks:10,year:`Apr/May-2023`},{q:`With a neat diagram demonstrate the structural details of a circular list. Design C functions to add a node to the beginning of a circular list and delete the last node.`,marks:10,year:`Dec-2019`},{q:`What is a circularly linked list? Write a C program to create a circularly linked list by adding nodes to the end.`,marks:10,year:`Sept/Oct-2022, Mar/Apr-2024`},{q:`Ascertain the advantages of circular linked list over ordinary linked list. Design C functions to delete the first node and last node of the given circular linked list.`,marks:10,year:`Mar-2022`},{q:`Identify the advantage of circularly linked list? Write a C program to create a circular linked list by adding nodes to the front of the list.`,marks:10,year:`Dec-2018`},{q:`Explain the following with respect to circular linked list: i) Inserting a new node ii) Deleting a node`,marks:10,year:`Jul/Aug-2021`},{q:`Write a C function to insert-front in circular doubly linked list and Delete-front in circular doubly linked list`,marks:10,year:`Mar/Apr-2024`}]},{topic:`Doubly Linked List — Insert, Delete, Count Even Nodes`,frequency:6,marks:10,priority:`HIGH`,years:[`Feb-2025 Makeup`,`Feb/Mar-2025 Supp`,`Mar-2022`,`Apr/May-2023`,`Sept/Oct-2022`,`Jul/Aug-2021`,`Jan/Feb-2018`,`Dec-2019`],questions:[{q:`What are the advantages of Doubly linked list over Singly linked list? Write a C function to insert a node in the beginning of a Doubly Linked List.`,marks:10,year:`Feb-2025 Makeup`},{q:`Write C functions | algorithms to implement doubly linked list functions: i) Insert a node at the end of DLL ii) Delete the first node iii) Count the number of nodes which have even values.`,marks:10,year:`Feb/Mar-2025 Supp`},{q:`Write C functions to: i) insert a node at the beginning ii) insert a node at the end iii) insert a node after a given node in a doubly linked list`,marks:10,year:`Mar-2022`},{q:`What are the advantages of Doubly linked list? Also write a C function to insert a node after a given node in the DLL.`,marks:10,year:`Apr/May-2023`},{q:`Consider a doubly linked list: Write algorithm for: i) Deleting a node before the given node ii) Inserting a node after the given node`,marks:10,year:`Sept/Oct-2022`},{q:`Write a C program to create a doubly linked list and perform insertions and deletions in all cases.`,marks:10,year:`Jul/Aug-2021`},{q:`Design an algorithm to delete the last node of a doubly linked list.`,marks:6,year:`Jan/Feb-2018`},{q:`Write a C program to create and display a doubly linked list of integers by adding nodes to the front.`,marks:10,year:`Dec-2019`}]},{topic:`Stack Implementation Using Linked List`,frequency:5,marks:10,priority:`HIGH`,years:[`Feb-2025 Makeup`,`Feb/Mar-2025 Supp`,`Mar/Apr-2024`,`Sept/Oct-2022`],questions:[{q:`Write a C function to implement stack operations using linked list.`,marks:10,year:`Feb-2025 Makeup, Feb/Mar-2025 Supp, Mar/Apr-2024`},{q:`How to represent a stack using linked list. Write the algorithms for push and pop operations on such a representation.`,marks:10,year:`Sept/Oct-2022`}]},{topic:`Queue Implementation Using Linked List`,frequency:4,marks:10,priority:`HIGH`,years:[`Feb-2025 Makeup`,`Apr/May-2023`,`Jul/Aug-2021`,`Dec-2019`],questions:[{q:`Write a C function to perform queue operations using linked list.`,marks:10,year:`Feb-2025 Makeup`},{q:`Implement queue operations using linked list.`,marks:10,year:`Apr/May-2023`},{q:`Write user defined functions to implement operations of linear queue using linked list.`,marks:10,year:`Jul/Aug-2021`},{q:`Identify the advantages of linked implementation of queues. Write C functions for insertion and deletion operation into linked queue.`,marks:10,year:`Dec-2019`}]},{topic:`Polynomial Representation using Linked List`,frequency:2,marks:6,priority:`LOW`,years:[`Dec-2019`,`Dec-2018`,`Apr/May-2023`,`Jan/Feb-2018`],questions:[{q:`Give the linked list representation of the following polynomial 6x³+9x²+7x+1.`,marks:6,year:`Dec-2019, Apr/May-2023`},{q:`Give the linked representation of the following polynomial 6x³+9x²+7x+1. Design a user defined C function that will add two polynomials.`,marks:10,year:`Dec-2018`},{q:`Design an algorithm to add two polynomials.`,marks:6,year:`Jan/Feb-2018`},{q:`Specify the use of header node in header linked list.`,marks:4,year:`Dec-2018`},{q:`Write a program to create a linked list which stores the details of employees (name, empID, designation). Read and print the information.`,marks:10,year:`Apr/May-2023`}]}]},{id:4,name:`Module 4`,title:`Trees, Binary Search Trees & AVL Trees`,priority:`HIGH`,color:`#22c55e`,syllabusTopics:[`Trees — Basic Terminology, Types, Array and Linked Representation`,`Creating a Binary Tree from a General Tree`,`Tree Traversals — In-order, Pre-order, Post-order, Level-order`,`Constructing a Binary Tree from Traversal Results`,`Binary Search Trees — Definition, Create, Insert, Delete, Display`,`BST — Finding Height, Finding Number of Nodes`,`AVL Trees — Definition, Rotations (LL, RR, LR, RL), Constructing AVL Tree`,`Self-Study: Threaded Binary Trees`],topics:[{topic:`AVL Tree — Construct with Rotations (LL, RR, LR, RL)`,frequency:9,marks:10,priority:`HIGH`,years:[`Dec-2019`,`Jul/Aug-2021`,`Dec-2018`,`Mar/Apr-2024`,`Apr/May-2023`,`Mar-2022`,`Feb-2025 Makeup`,`Feb/Mar-2025 Supp`,`Sept/Oct-2022`],questions:[{q:`Construct an AVL tree by inserting the following elements in the given order: 63, 9, 19, 27, 18, 108, 99, 81. Clearly indicate type of rotation in each step.`,marks:10,year:`Dec-2019, Jul/Aug-2021, Dec-2018, Mar/Apr-2024, Apr/May-2023, Mar-2022, Feb-2025 Makeup`},{q:`Construct AVL tree for the given values 63, 9, 19, 27, 18, 108, 99, 81`,marks:10,year:`Feb-2025 Makeup`},{q:`Create an AVL for 25, 26, 28, 23, 22, 24. Clearly indicate type of rotation in each step.`,marks:10,year:`Dec-2019`},{q:`Construct AVL tree for the given values 21, 26, 30, 9, 4, 14, 28, 18, 15`,marks:10,year:`Feb/Mar-2025 Supp`},{q:`Explain: i) Rotate right in AVL (RR) ii) Rotate left right in AVL (RL)`,marks:6,year:`Mar/Apr-2024`},{q:`Explain with examples all four rotations of AVL tree.`,marks:10,year:`Feb/Mar-2025 Supp`},{q:`Clearly outline the four categories of rotations performed in an AVL tree.`,marks:10,year:`Sept/Oct-2022`}]},{topic:`Binary Search Tree — Construct, Insert, Search, Delete`,frequency:6,marks:10,priority:`HIGH`,years:[`Mar-2022`,`Apr/May-2023`,`Dec-2018`,`Feb/Mar-2025 Supp`,`Feb-2025 Makeup`,`Mar/Apr-2024`,`Dec-2019`],questions:[{q:`Construct the binary search tree for the values: 45, 39, 56, 12, 34, 78, 32, 10, 89, 54, 67, 81. Also write the steps to search for 67.`,marks:10,year:`Mar-2022`},{q:`What is a binary search tree? Draw the BST for: 45, 39, 56, 12, 34, 78, 32, 10, 89, 54, 67, 81.`,marks:10,year:`Apr/May-2023`},{q:`Create a Binary search tree using 45, 39, 56, 12, 34, 78, 32, 10, 89, 54. Write the algorithm for searching a value in BST.`,marks:10,year:`Dec-2018`},{q:`Construct Binary search tree for 45, 15, 79, 90, 10, 55, 12, 20, 50.`,marks:10,year:`Feb/Mar-2025 Supp`},{q:`Write a suitable algorithm to i) Insert a node into a binary search tree. ii) Count the number of nodes in BST.`,marks:10,year:`Feb-2025 Makeup`},{q:`Write suitable algorithm: i) Search for a given value in BST ii) Count the number of internal nodes`,marks:10,year:`Feb/Mar-2025 Supp`},{q:`Write C functions: i) Insert a node into a BST ii) Search a node in BST`,marks:10,year:`Mar/Apr-2024`},{q:`Develop C functions: i) Inserting a node into BST ii) Count internal nodes iii) Count external nodes`,marks:10,year:`Mar-2022`},{q:`Create a binary tree for 10, 12, 5, 4, 20, 8, 7, 15, 13 and give inorder, preorder and postorder traversal.`,marks:10,year:`Dec-2019, Mar/Apr-2024`},{q:`How to use a binary search tree for sorting numbers? Write a C program.`,marks:10,year:`Dec-2019`}]},{topic:`Tree Traversals — Inorder, Preorder, Postorder, Level Order`,frequency:5,marks:10,priority:`HIGH`,years:[`Feb/Mar-2025 Supp`,`Mar/Apr-2024`,`Dec-2019`,`Dec-2018`,`Jan/Feb-2018`,`Apr/May-2023`,`Sept/Oct-2022`],questions:[{q:`Write C functions | algorithms to implement inorder, pre-order and post-order tree traversals.`,marks:10,year:`Feb/Mar-2025 Supp`},{q:`Convert the following into a binary tree and traverse it in inorder, preorder and postorder.`,marks:10,year:`Sept/Oct-2022`},{q:`Compose algorithms for all the three traversals of a binary tree. Apply the same on the following binary tree.`,marks:10,year:`Jan/Feb-2018`},{q:`List the various traversal methods on a binary tree and apply them.`,marks:10,year:`Dec-2018`},{q:`Write implementation in C to traverse a binary tree in in-order, pre-order and post-order.`,marks:10,year:`Apr/May-2023`},{q:`Construct a binary tree given: Pre-order A B D H I E C F J K G L, Inorder H D I B E A J F K C G L`,marks:10,year:`Dec-2019`},{q:`Construct a binary tree for a + b / c * d - e.`,marks:6,year:`Dec-2018`}]},{topic:`Tree Terminology — Height, Depth, Siblings, Leaf Nodes`,frequency:3,marks:8,priority:`MEDIUM`,years:[`Dec-2019`,`Apr/May-2023`,`Mar-2022`,`Sept/Oct-2022`],questions:[{q:`Assuming a suitable tree define: Siblings, Height of a tree, Ancestor of a node, Non-leaf nodes, Depth of a node`,marks:6,year:`Dec-2019`},{q:`Consider the tree: i) Obtain the sequential memory representation ii) Give the linked representation iii) Height of tree iv) Depth of node 'I' v) Height of subtree at 'E' vi) Indegree of node A`,marks:10,year:`Mar-2022`},{q:`Consider the tree: i) Name leaf nodes ii) Name ancestors of E iii) Name siblings of C iv) Find height v) Name descendants of G`,marks:10,year:`Apr/May-2023`},{q:`Compare the implicit sequential representation of a binary tree with linked representation.`,marks:6,year:`Sept/Oct-2022, Dec-2018`},{q:`Give an example for each: Binary search tree, Complete Binary tree, Tournament tree, Expression tree, Forest.`,marks:6,year:`Sept/Oct-2022`},{q:`List the rules for converting general tree to a binary tree.`,marks:6,year:`Dec-2019`}]},{topic:`Expression Trees — Infix, Prefix, Postfix from Tree`,frequency:3,marks:8,priority:`MEDIUM`,years:[`Dec-2019`,`Apr/May-2023`,`Sept/Oct-2022`],questions:[{q:`For the given expression tree, do the following: i) Find the height ii) Extract the infix expression iii) Find the corresponding prefix expression iv) Find the corresponding postfix expression v) Evaluate the infix expression given a=30, b=10, c=2, d=30, e=10.`,marks:10,year:`Dec-2019, Apr/May-2023, Sept/Oct-2022`}]},{topic:`Threaded Binary Trees (Self-Study)`,frequency:4,marks:8,priority:`MEDIUM`,years:[`Jul/Aug-2021`,`Sept/Oct-2022`,`Dec-2018`,`Apr/May-2023`],questions:[{q:`What is threaded binary trees? Explain the types of threaded binary tree. What are the advantages of threaded binary tree?`,marks:10,year:`Jul/Aug-2021`},{q:`Why is a threaded binary tree considered as efficient tree? With suitable example demonstrate one way and two way threading, clearly indicating the merits.`,marks:10,year:`Sept/Oct-2022`},{q:`Why are threaded trees considered as efficient trees? Outline the merits of threaded trees.`,marks:6,year:`Dec-2018`},{q:`Briefly explain threaded binary tree with example.`,marks:6,year:`Apr/May-2023`},{q:`Write the algorithm for inorder traversal of a threaded binary tree.`,marks:6,year:`Dec-2018`},{q:`Give the linked representation of the following binary tree with two way threading.`,marks:6,year:`Dec-2019`},{q:`List the advantages of a threaded Binary tree.`,marks:4,year:`Dec-2019`}]}]}],pe=fe.flatMap(e=>e.topics.flatMap(t=>t.questions.map(n=>({...n,module:e.name,moduleTitle:e.title,topic:t.topic,years:t.years,priority:e.priority,color:e.color})))),me=[{day:1,label:`Day 1 — Module 1: Stack & Infix/Postfix`,color:`#ef4444`,module:`Module 1`,tasks:[`Infix→Postfix algorithm + draw trace table (Symbol | Stack | Output)`,`Postfix evaluation algorithm + trace for given expression`,`Stack ADT: Push, Pop, Peek, Display — write C code from memory`,`Practice expression: (A+B)*C-D$E*F → full trace table`,`Palindrome check using stack (bonus)`]},{day:2,label:`Day 2 — Module 1: Structures, Pointers & Prefix`,color:`#ef4444`,module:`Module 1`,tasks:[`Prefix notation — definition, conversion algorithm (right-to-left scan)`,`Employee structure + pointer to struct (read 10 employees, print filtered)`,`Pointer: swap two numbers using pointers (call by reference)`,`Dynamic memory allocation: malloc(), calloc(), realloc() — syntax & use`,`Structure vs Union differences (common 6M question)`]},{day:3,label:`Day 3 — Module 2: Recursion & Queues`,color:`#f97316`,module:`Module 2`,tasks:[`Recursion types: Direct, Indirect, Tail, Non-Tail, Linear, Tree — with examples`,`Tower of Hanoi: write recursive C function + trace for n=3 disks (7 moves)`,`Fibonacci using recursion: write function + trace fib(5)`,`Queue: enqueue, dequeue using array — write C functions`,`Circular Queue: insert, delete, display — write C functions with modulo logic`]},{day:4,label:`Day 4 — Module 2: Singly Linked List (Complete)`,color:`#f97316`,module:`Module 2`,tasks:[`SLL: Insert at beginning — write C function + diagram`,`SLL: Insert at end, Insert after given node`,`SLL: Delete first node, Delete last node, Delete given value`,`SLL: Search for value, Count nodes, Find max/min`,`SLL: Display all elements — traversal using while loop`]},{day:5,label:`Day 5 — Module 3: Circular & Doubly Linked List`,color:`#eab308`,module:`Module 3`,tasks:[`Circular LL: Insert at beginning (update last->next=newNode, head=newNode)`,`Circular LL: Insert at end (find last, last->next=newNode, newNode->next=head)`,`Circular LL: Delete first node and last node — write C functions`,`Doubly LL: Insert at begin, end, after given node (use prev + next pointers)`,`Linked Stack + Linked Queue: write C implementations using struct Node`]},{day:6,label:`Day 6 — Module 4: Trees, BST & AVL Trees`,color:`#22c55e`,module:`Module 4`,tasks:[`Tree basics: terminology (root, leaf, height, depth, siblings, ancestor)`,`BST: Build from 45,39,56,12,34,78,32,10,89,54,67,81 — draw step-by-step`,`BST: Insert and Search algorithms in C`,`Inorder, Preorder, Postorder traversals — write recursive C functions`,`AVL Tree: Insert 63,9,19,27,18,108,99,81 — name each rotation (LL/RR/LR/RL)`]},{day:7,label:`Day 7 — Full Revision + Mock`,color:`#6366f1`,module:`All`,tasks:[`Quick revision: Infix→Postfix trace tables (any expression)`,`Quick revision: AVL 63,9,19,27,18,108,99,81 — all 4 rotation types`,`Quick revision: Circular LL insert begin+end, Doubly LL insert after`,`Exam strategy: read all 8 questions first, pick easiest 5 (1 per module)`,`Partial marks: always write definition + struct + algorithm even if stuck`]}],D=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),O=e(((e,t)=>{t.exports=D()}))();function he(e){let[t,n]=(0,l.useState)({});return(0,l.useEffect)(()=>{function t(){let t=new Date,r=new Date(e)-t;if(r<=0)return n({days:0,hours:0,minutes:0,seconds:0});n({days:Math.floor(r/(1e3*60*60*24)),hours:Math.floor(r/(1e3*60*60)%24),minutes:Math.floor(r/(1e3*60)%60),seconds:Math.floor(r/1e3%60)})}t();let r=setInterval(t,1e3);return()=>clearInterval(r)},[e]),t}function ge({onNavigate:e}){let t=he(`2026-08-02T10:00:00+05:30`),n=[{topic:`AVL Tree: 63,9,19,27,18,108,99,81 (LL/RR/LR/RL rotations)`,marks:10,freq:9,mod:`M4`},{topic:`Infix to Postfix Conversion — Stack trace table`,marks:10,freq:8,mod:`M1`},{topic:`Circular Linked List: Insert at Begin/End`,marks:10,freq:8,mod:`M3`},{topic:`Singly Linked List: Insert, Delete, Search`,marks:10,freq:8,mod:`M2`},{topic:`BST: Construct 45,39,56... + 3 Traversals`,marks:10,freq:6,mod:`M4`}],r=Math.floor((new Date-new Date(`2026-07-26`))/(1e3*60*60*24))+1,i=me[Math.min(Math.max(r-1,0),me.length-1)],a=t.days<=2?`danger`:t.days<=5?`warning`:`info`,o=t.days<=2?`🚨 EXAM IS TOMORROW! Focus ONLY on must-know topics!`:t.days<=5?`⚠️ Less than 5 days! Stick to the 7-day plan!`:`✅ Stay on schedule — follow the 7-day plan!`;return(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`div`,{className:`page-header`,children:[(0,O.jsx)(`h1`,{className:`page-title`,children:`Dashboard`}),(0,O.jsx)(`p`,{className:`page-subtitle`,children:`Data Structures & Algorithms (24CS304) — MCE Hassan`})]}),(0,O.jsxs)(`div`,{className:`alert alert-${a===`info`?`info`:a===`warning`?`warning`:`danger`}`,style:{marginBottom:20},children:[(0,O.jsx)(`span`,{className:`alert-icon`,children:a===`danger`?`🚨`:a===`warning`?`⚠️`:`📋`}),(0,O.jsxs)(`div`,{className:`alert-content`,children:[(0,O.jsx)(`strong`,{children:o}),`Pass = 40/100 marks. Answer any 5 of 8 questions. At least 1 per module.`]})]}),(0,O.jsxs)(`div`,{className:`card mb-20`,style:{background:`linear-gradient(135deg, #0f0f1a 0%, #16161f 100%)`},children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-8 mb-12`,children:[(0,O.jsx)(w,{size:16,color:`var(--accent)`}),(0,O.jsx)(`span`,{style:{fontSize:13,fontWeight:600,color:`var(--accent)`},children:`Time Until DSA Exam — August 2, 2026`})]}),(0,O.jsx)(`div`,{className:`countdown-grid`,children:[{label:`Days`,val:t.days},{label:`Hours`,val:t.hours},{label:`Minutes`,val:t.minutes},{label:`Seconds`,val:t.seconds}].map(({label:e,val:t})=>(0,O.jsxs)(`div`,{className:`countdown-item`,children:[(0,O.jsx)(`div`,{className:`countdown-number`,children:String(t??0).padStart(2,`0`)}),(0,O.jsx)(`div`,{className:`countdown-label`,children:e})]},e))})]}),(0,O.jsxs)(`div`,{className:`stats-row mb-24`,children:[(0,O.jsxs)(`div`,{className:`stat-card`,children:[(0,O.jsx)(`div`,{className:`stat-value`,style:{color:`var(--accent)`},children:`100`}),(0,O.jsx)(`div`,{className:`stat-label`,children:`Total Marks`})]}),(0,O.jsxs)(`div`,{className:`stat-card`,children:[(0,O.jsx)(`div`,{className:`stat-value`,style:{color:`var(--green)`},children:`40`}),(0,O.jsx)(`div`,{className:`stat-label`,children:`Marks to Pass`})]}),(0,O.jsxs)(`div`,{className:`stat-card`,children:[(0,O.jsx)(`div`,{className:`stat-value`,style:{color:`var(--yellow)`},children:`5/8`}),(0,O.jsx)(`div`,{className:`stat-label`,children:`Questions to Answer`})]}),(0,O.jsxs)(`div`,{className:`stat-card`,children:[(0,O.jsx)(`div`,{className:`stat-value`,style:{color:`var(--orange)`},children:`7`}),(0,O.jsx)(`div`,{className:`stat-label`,children:`Days to Prepare`})]})]}),(0,O.jsxs)(`div`,{className:`card-grid card-grid-2 mb-24`,children:[(0,O.jsxs)(`div`,{className:`card`,children:[(0,O.jsxs)(`div`,{className:`flex items-center justify-between mb-16`,children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-8`,children:[(0,O.jsx)(de,{size:16,color:i?.color||`var(--accent)`}),(0,O.jsxs)(`span`,{style:{fontSize:13,fontWeight:600,color:`var(--text-primary)`},children:[`Today — Day `,Math.min(Math.max(r,1),7)]})]}),(0,O.jsxs)(`button`,{className:`btn btn-outline btn-sm`,onClick:()=>e(`plan`),children:[`Full Plan `,(0,O.jsx)(x,{size:12})]})]}),i?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`div`,{style:{display:`inline-block`,padding:`4px 10px`,borderRadius:6,background:i.color+`22`,color:i.color,fontSize:12,fontWeight:600,marginBottom:12},children:i.label}),(0,O.jsx)(`div`,{children:i.tasks.slice(0,4).map((e,t)=>(0,O.jsxs)(`div`,{style:{padding:`7px 0`,borderBottom:t<3?`1px solid rgba(255,255,255,0.04)`:`none`,fontSize:13,color:`var(--text-secondary)`,display:`flex`,gap:8},children:[(0,O.jsx)(`span`,{style:{color:`var(--text-muted)`,flexShrink:0},children:`›`}),e]},t))})]}):(0,O.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:13},children:`Exam day! You're ready. All the best! 🎯`})]}),(0,O.jsxs)(`div`,{className:`card`,children:[(0,O.jsxs)(`div`,{className:`flex items-center justify-between mb-16`,children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-8`,children:[(0,O.jsx)(ue,{size:16,color:`var(--red)`}),(0,O.jsx)(`span`,{style:{fontSize:13,fontWeight:600,color:`var(--text-primary)`},children:`Top 5 — Must Know`})]}),(0,O.jsx)(`span`,{style:{fontSize:11,color:`var(--text-muted)`},children:`= 40+ marks guaranteed`})]}),n.map((e,t)=>(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`8px 0`,borderBottom:t<4?`1px solid rgba(255,255,255,0.04)`:`none`},children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{style:{fontSize:13,color:`var(--text-primary)`,fontWeight:500},children:e.topic}),(0,O.jsxs)(`div`,{style:{fontSize:11,color:`var(--text-muted)`,marginTop:2},children:[e.mod,` · Appeared `,e.freq,`×`]})]}),(0,O.jsxs)(`div`,{style:{background:`var(--red-light)`,color:`var(--red)`,border:`1px solid rgba(239,68,68,0.3)`,borderRadius:6,padding:`2px 8px`,fontSize:11,fontWeight:700,flexShrink:0},children:[e.marks,`M`]})]},t))]})]}),(0,O.jsxs)(`div`,{style:{marginBottom:24},children:[(0,O.jsx)(`h2`,{className:`section-heading`,children:`Module Priority Overview`}),(0,O.jsx)(`div`,{className:`card-grid card-grid-2`,children:fe.map(e=>(0,O.jsxs)(`div`,{className:`card`,style:{borderLeft:`3px solid ${e.color}`},children:[(0,O.jsxs)(`div`,{className:`flex items-center justify-between mb-8`,children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-8`,children:[(0,O.jsx)(`span`,{style:{fontSize:13,fontWeight:700,color:e.color},children:e.name}),(0,O.jsx)(`span`,{className:`badge badge-${e.priority.toLowerCase()}`,children:e.priority})]}),(0,O.jsx)(ee,{size:14,color:e.color})]}),(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:600,color:`var(--text-primary)`,marginBottom:8},children:e.title}),(0,O.jsxs)(`div`,{style:{fontSize:12,color:`var(--text-muted)`,marginBottom:12},children:[e.topics.length,` topics · `,e.topics.reduce((e,t)=>e+t.frequency,0),` total appearances`]}),(0,O.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:4},children:[e.topics.slice(0,3).map((e,t)=>(0,O.jsx)(`span`,{style:{fontSize:11,padding:`2px 7px`,borderRadius:4,background:`rgba(255,255,255,0.05)`,color:`var(--text-muted)`},children:e.topic.split(`—`)[0].trim().substring(0,28)},t)),e.topics.length>3&&(0,O.jsxs)(`span`,{style:{fontSize:11,color:`var(--text-muted)`},children:[`+`,e.topics.length-3,` more`]})]})]},e.id))})]}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`h2`,{className:`section-heading`,children:`Quick Navigation`}),(0,O.jsx)(`div`,{className:`card-grid card-grid-4`,children:[{label:`Study Plan`,sub:`7-day schedule`,page:`plan`,icon:`📅`,color:`var(--green)`},{label:`Quiz Mode`,sub:`Practice PYQs`,page:`quiz`,icon:`🧠`,color:`var(--purple)`},{label:`Programs`,sub:`17 C programs`,page:`programs`,icon:`💻`,color:`var(--blue)`},{label:`Theory`,sub:`DSA concepts`,page:`theory`,icon:`📖`,color:`var(--orange)`}].map(t=>(0,O.jsxs)(`button`,{className:`card`,style:{cursor:`pointer`,textAlign:`left`,border:`none`},onClick:()=>e(t.page),children:[(0,O.jsx)(`div`,{style:{fontSize:24,marginBottom:8},children:t.icon}),(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:600,color:`var(--text-primary)`},children:t.label}),(0,O.jsx)(`div`,{style:{fontSize:12,color:`var(--text-muted)`,marginTop:2},children:t.sub})]},t.page))})]})]})}function _e(){let[e,t]=(0,l.useState)(`all`),n=e===`all`?fe:fe.filter(t=>String(t.id)===e);return(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`div`,{className:`page-header`,children:[(0,O.jsx)(`h1`,{className:`page-title`,children:`PYQ Frequency Analysis`}),(0,O.jsx)(`p`,{className:`page-subtitle`,children:`Which topics appear most often across all DSA exam papers`})]}),(0,O.jsxs)(`div`,{className:`card mb-24`,children:[(0,O.jsx)(`div`,{style:{fontSize:14,fontWeight:700,color:`var(--text-primary)`,marginBottom:16,display:`flex`,alignItems:`center`,gap:8},children:`🏆 Top 5 Most-Repeated Questions (Verbatim)`}),(0,O.jsxs)(`div`,{className:`alert alert-danger mb-16`,children:[(0,O.jsx)(`span`,{className:`alert-icon`,children:`🔥`}),(0,O.jsxs)(`div`,{className:`alert-content`,children:[(0,O.jsx)(`strong`,{children:`Guaranteed to appear — These exact questions repeat every year`}),`Memorize these 5 completely. They alone can get you 40+ marks.`]})]}),[{rank:1,question:`Construct AVL tree: 63, 9, 19, 27, 18, 108, 99, 81`,freq:9,modules:`M2, M4`,badge:`badge-critical`},{rank:2,question:`Infix to Postfix conversion using stack (any expression)`,freq:8,modules:`M1`,badge:`badge-critical`},{rank:3,question:`Circular Linked List — insert at beginning/end, delete`,freq:8,modules:`M3`,badge:`badge-critical`},{rank:4,question:`Singly Linked List — insert, delete, search, display`,freq:8,modules:`M2`,badge:`badge-critical`},{rank:5,question:`BST — construct from given numbers, search algorithm`,freq:6,modules:`M4`,badge:`badge-high`}].map((e,t)=>(0,O.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:`14px 0`,borderBottom:t<4?`1px solid rgba(255,255,255,0.04)`:`none`,alignItems:`flex-start`},children:[(0,O.jsxs)(`div`,{style:{width:32,height:32,borderRadius:10,background:t<3?`var(--red-light)`:`var(--orange-light)`,color:t<3?`var(--red)`:`var(--orange)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:14,fontWeight:800,flexShrink:0},children:[`#`,e.rank]}),(0,O.jsxs)(`div`,{style:{flex:1},children:[(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:600,color:`var(--text-primary)`,lineHeight:1.5,marginBottom:4},children:e.question}),(0,O.jsxs)(`div`,{style:{fontSize:11,color:`var(--text-muted)`},children:[`Modules: `,e.modules]})]}),(0,O.jsxs)(`div`,{style:{background:t<3?`var(--red-light)`:`var(--orange-light)`,color:t<3?`var(--red)`:`var(--orange)`,border:`1px solid ${t<3?`rgba(239,68,68,0.3)`:`rgba(249,115,22,0.3)`}`,borderRadius:8,padding:`4px 10px`,fontSize:12,fontWeight:700,flexShrink:0,textAlign:`center`},children:[e.freq,`×`,(0,O.jsx)(`br`,{}),(0,O.jsx)(`span`,{style:{fontSize:10,fontWeight:400},children:`times`})]})]},t))]}),(0,O.jsxs)(`div`,{className:`tabs mb-20`,children:[(0,O.jsx)(`button`,{className:`tab ${e===`all`?`active`:``}`,onClick:()=>t(`all`),children:`All Modules`}),fe.map(n=>(0,O.jsx)(`button`,{className:`tab ${e===String(n.id)?`active`:``}`,onClick:()=>t(String(n.id)),children:n.name},n.id))]}),n.map(e=>(0,O.jsxs)(`div`,{className:`card mb-16`,children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-8 mb-16`,children:[(0,O.jsx)(`div`,{style:{width:4,height:24,borderRadius:2,background:e.color}}),(0,O.jsx)(`span`,{style:{fontSize:14,fontWeight:700,color:e.color},children:e.name}),(0,O.jsx)(`span`,{style:{fontSize:13,color:`var(--text-secondary)`},children:e.title})]}),[...e.topics].sort((e,t)=>t.frequency-e.frequency).map((t,n)=>{let r=Math.max(...e.topics.map(e=>e.frequency)),i=Math.round(t.frequency/r*100),a=t.frequency>=7?`var(--red)`:t.frequency>=5?`var(--orange)`:t.frequency>=3?`var(--yellow)`:`var(--text-muted)`;return(0,O.jsxs)(`div`,{style:{marginBottom:14},children:[(0,O.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:5},children:[(0,O.jsx)(`span`,{style:{fontSize:13,color:`var(--text-primary)`,fontWeight:500,flex:1,marginRight:12,lineHeight:1.4},children:t.topic}),(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,flexShrink:0},children:[(0,O.jsxs)(`span`,{style:{fontSize:11,color:`var(--text-muted)`},children:[`Up to `,t.marks,`M`]}),(0,O.jsxs)(`span`,{style:{fontSize:12,fontWeight:700,color:a,background:a+`22`,border:`1px solid ${a}44`,borderRadius:5,padding:`1px 7px`},children:[t.frequency,`×`]})]})]}),(0,O.jsx)(`div`,{className:`progress-bar-wrap`,children:(0,O.jsx)(`div`,{className:`progress-bar-fill`,style:{width:`${i}%`,background:a}})}),(0,O.jsxs)(`div`,{className:`year-tags mt-8`,style:{marginTop:6},children:[t.years.slice(0,5).map((e,t)=>(0,O.jsx)(`span`,{className:`year-tag`,children:e},t)),t.years.length>5&&(0,O.jsxs)(`span`,{className:`year-tag`,children:[`+`,t.years.length-5,` more`]})]})]},n)})]},e.id))]})}function ve(){let[e,t]=(0,l.useState)(`all`),[n,r]=(0,l.useState)({}),[i,a]=(0,l.useState)(``),[o,s]=(0,l.useState)(`all`),c=e=>r(t=>({...t,[e]:!t[e]})),u=fe.filter(t=>e===`all`||String(t.id)===e),d=i.toLowerCase();return(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`div`,{className:`page-header`,children:[(0,O.jsx)(`h1`,{className:`page-title`,children:`Question Bank`}),(0,O.jsx)(`p`,{className:`page-subtitle`,children:`All exact PYQ questions from Dec-2018 to Feb/Mar-2025 — grouped by module and topic`})]}),(0,O.jsx)(`input`,{type:`text`,placeholder:`Search questions (e.g. 'AVL', 'postfix', 'circular'...)...`,value:i,onChange:e=>a(e.target.value),style:{width:`100%`,padding:`10px 14px`,borderRadius:8,background:`var(--bg-card)`,border:`1px solid var(--border)`,color:`var(--text-primary)`,fontSize:13,marginBottom:16,outline:`none`,fontFamily:`inherit`}}),(0,O.jsxs)(`div`,{className:`tabs mb-20`,children:[(0,O.jsx)(`button`,{className:`tab ${e===`all`?`active`:``}`,onClick:()=>t(`all`),children:`All`}),fe.map(n=>(0,O.jsx)(`button`,{className:`tab ${e===String(n.id)?`active`:``}`,onClick:()=>t(String(n.id)),children:n.name},n.id))]}),u.map(e=>{let t=e.topics.filter(e=>!d||e.topic.toLowerCase().includes(d)||e.questions.some(e=>e.q.toLowerCase().includes(d)));return t.length===0?null:(0,O.jsxs)(`div`,{className:`mb-24`,children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-12 mb-12`,children:[(0,O.jsx)(`div`,{style:{width:4,height:32,borderRadius:2,background:e.color,flexShrink:0}}),(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-8`,children:[(0,O.jsx)(`span`,{style:{fontSize:15,fontWeight:700,color:e.color},children:e.name}),(0,O.jsx)(`span`,{className:`badge badge-${e.priority.toLowerCase()}`,children:e.priority})]}),(0,O.jsx)(`div`,{style:{fontSize:13,color:`var(--text-secondary)`,marginTop:2},children:e.title})]})]}),t.map((t,r)=>{let a=`${e.id}-${r}`,o=n[a],s=i?t.questions.filter(e=>e.q.toLowerCase().includes(d)):t.questions,l=t.frequency>=7?`var(--red)`:t.frequency>=5?`var(--orange)`:t.frequency>=3?`var(--yellow)`:`var(--text-muted)`,u=t.frequency>=7?`var(--red-light)`:t.frequency>=5?`var(--orange-light)`:t.frequency>=3?`var(--yellow-light)`:`rgba(255,255,255,0.05)`,f=t.frequency>=7?`rgba(239,68,68,0.3)`:t.frequency>=5?`rgba(249,115,22,0.3)`:t.frequency>=3?`rgba(234,179,8,0.3)`:`var(--border)`;return(0,O.jsxs)(`div`,{className:`accordion-item ${o?`open`:``}`,children:[(0,O.jsxs)(`div`,{className:`accordion-header`,onClick:()=>c(a),children:[(0,O.jsxs)(`div`,{style:{flex:1},children:[(0,O.jsx)(`div`,{className:`accordion-title`,children:t.topic}),(0,O.jsxs)(`div`,{style:{fontSize:12,color:`var(--text-muted)`,marginTop:2},children:[t.questions.length,` questions · Appeared `,t.frequency,`× · Up to `,t.marks,`M`]})]}),(0,O.jsxs)(`div`,{className:`accordion-meta`,children:[(0,O.jsxs)(`div`,{style:{background:u,color:l,borderRadius:6,padding:`2px 8px`,fontSize:11,fontWeight:700,border:`1px solid ${f}`},children:[t.frequency,`×`]}),o?(0,O.jsx)(ne,{size:16,color:`var(--text-muted)`}):(0,O.jsx)(re,{size:16,color:`var(--text-muted)`})]})]}),o&&(0,O.jsxs)(`div`,{className:`accordion-body`,children:[(0,O.jsx)(`div`,{className:`year-tags mb-12`,children:t.years.map((e,t)=>(0,O.jsx)(`span`,{className:`year-tag`,children:e},t))}),s.map((e,t)=>(0,O.jsx)(`div`,{style:{padding:`12px`,background:`var(--bg-card)`,borderRadius:8,marginBottom:8,border:`1px solid var(--border)`},children:(0,O.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12,flexWrap:`wrap`,alignItems:`flex-start`},children:[(0,O.jsxs)(`div`,{style:{fontSize:13,color:`var(--text-primary)`,lineHeight:1.7,flex:1},children:[(0,O.jsxs)(`span`,{style:{fontSize:11,fontWeight:700,color:`var(--accent)`,marginRight:8,fontFamily:`var(--font-mono)`},children:[`Q`,t+1,`.`]}),e.q]}),(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`flex-end`,gap:4,flexShrink:0},children:[(0,O.jsxs)(`span`,{style:{background:`var(--accent-light)`,color:`var(--accent)`,border:`1px solid rgba(99,102,241,0.3)`,borderRadius:6,padding:`2px 8px`,fontSize:12,fontWeight:700},children:[e.marks,`M`]}),e.year&&(0,O.jsx)(`span`,{style:{fontSize:10,color:`var(--text-muted)`,fontFamily:`var(--font-mono)`},children:e.year})]})]})},t))]})]},a)})]},e.id)})]})}var ye=[{id:1,title:`Stack — Push, Pop, Display using Array`,module:`Module 1`,topic:`Stack Operations`,frequency:8,explanation:`A stack uses LIFO (Last In First Out) principle. Uses a top pointer to track the topmost element. Push increments top then inserts. Pop reads then decrements top. Peek just reads top without removing.`,code:`#include<stdio.h>
#define MAX 10

int stack[MAX], top = -1;

void push(int item) {
    if (top == MAX - 1)
        printf("Stack Overflow!\\n");
    else {
        top++;
        stack[top] = item;
        printf("Pushed: %d\\n", item);
    }
}

int pop() {
    if (top == -1) {
        printf("Stack Underflow!\\n");
        return -1;
    }
    return stack[top--];
}

int peek() {
    if (top == -1) {
        printf("Stack is empty!\\n");
        return -1;
    }
    return stack[top];
}

void display() {
    int i;
    if (top == -1) {
        printf("Stack is empty!\\n");
        return;
    }
    printf("Stack (top->bottom): ");
    for (i = top; i >= 0; i--)
        printf("%d ", stack[i]);
    printf("\\n");
}

void main() {
    push(10);
    push(20);
    push(30);
    display();
    printf("Popped: %d\\n", pop());
    printf("Peek: %d\\n", peek());
    display();
}`},{id:2,title:`Infix to Postfix Conversion`,module:`Module 1`,topic:`Infix to Postfix Conversion using Stack`,frequency:8,explanation:`Algorithm: Scan infix left to right. If operand → output. If '(' → push. If ')' → pop until '('. If operator → pop operators of >= precedence, then push current. At end, pop all. Precedence: $ > * / % > + -`,code:`#include<stdio.h>
#include<string.h>

char stack[50];
int top = -1;

void push(char c) { stack[++top] = c; }
char pop()        { return stack[top--]; }
char peek()       { return stack[top]; }

int prec(char c) {
    if (c == '$') return 3;
    if (c == '*' || c == '/' || c == '%') return 2;
    if (c == '+' || c == '-') return 1;
    return 0;
}

int isOperand(char c) {
    return (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z');
}

void infixToPostfix(char infix[]) {
    int i, k = 0;
    char postfix[50];
    char ch;
    for (i = 0; infix[i] != '\\0'; i++) {
        ch = infix[i];
        if (isOperand(ch)) {
            postfix[k++] = ch;
        } else if (ch == '(') {
            push(ch);
        } else if (ch == ')') {
            while (top != -1 && peek() != '(')
                postfix[k++] = pop();
            if (top != -1) pop(); /* remove '(' */
        } else { /* operator */
            while (top != -1 && peek() != '(' && prec(peek()) >= prec(ch))
                postfix[k++] = pop();
            push(ch);
        }
    }
    while (top != -1)
        postfix[k++] = pop();
    postfix[k] = '\\0';
    printf("Postfix: %s\\n", postfix);
}

void main() {
    char infix[50];
    printf("Enter infix expression: ");
    scanf("%s", infix);
    infixToPostfix(infix);
}`},{id:3,title:`Postfix Expression Evaluation`,module:`Module 1`,topic:`Postfix Expression Evaluation using Stack`,frequency:7,explanation:`Scan postfix left to right. If operand → push. If operator → pop two operands (b=pop(), a=pop()), compute a OP b, push result. Final stack top is the answer.`,code:`#include<stdio.h>
#include<math.h>

int stack[50];
int top = -1;

void push(int x) { stack[++top] = x; }
int pop()        { return stack[top--]; }

int evaluatePostfix(char expr[]) {
    int i, a, b, result;
    char ch;
    for (i = 0; expr[i] != '\\0'; i++) {
        ch = expr[i];
        if (ch == ' ') continue;
        if (ch >= '0' && ch <= '9') {
            push(ch - '0');
        } else {
            b = pop();
            a = pop();
            if      (ch == '+') result = a + b;
            else if (ch == '-') result = a - b;
            else if (ch == '*') result = a * b;
            else if (ch == '/') result = a / b;
            else if (ch == '$') result = (int)pow(a, b);
            push(result);
        }
    }
    return pop();
}

void main() {
    /* Example: 2 3 1 * + 9 - */
    char expr[] = "231*+9-";
    printf("Postfix: %s\\n", expr);
    printf("Result = %d\\n", evaluatePostfix(expr));
}`},{id:4,title:`Stack using Linked List — Push, Pop`,module:`Module 3`,topic:`Stack Implementation Using Linked List`,frequency:5,explanation:`Linked list stack: each node has data + next pointer. TOP points to head. Push: create new node, point to old top, update top. Pop: save top data, move top to next, free old node.`,code:`#include<stdio.h>
#include<stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* top = NULL;

void push(int item) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = item;
    newNode->next = top;
    top = newNode;
    printf("Pushed: %d\\n", item);
}

int pop() {
    struct Node* temp;
    int item;
    if (top == NULL) {
        printf("Stack Underflow!\\n");
        return -1;
    }
    temp = top;
    item = top->data;
    top = top->next;
    free(temp);
    return item;
}

void display() {
    struct Node* ptr = top;
    printf("Stack: ");
    while (ptr != NULL) {
        printf("%d -> ", ptr->data);
        ptr = ptr->next;
    }
    printf("NULL\\n");
}

void main() {
    push(10);
    push(20);
    push(30);
    display();
    printf("Popped: %d\\n", pop());
    display();
}`},{id:5,title:`Queue — Enqueue, Dequeue using Array`,module:`Module 2`,topic:`Queue and Circular Queue Operations`,frequency:7,explanation:`Queue uses FIFO (First In First Out). front points to deletion end, rear to insertion end. Enqueue: increment rear, insert. Dequeue: read front, increment front. Queue full: rear == MAX-1. Empty: front == -1.`,code:`#include<stdio.h>
#define MAX 5

int queue[MAX], front = -1, rear = -1;

void enqueue(int item) {
    if (rear == MAX - 1) {
        printf("Queue Full!\\n");
        return;
    }
    if (front == -1) front = 0;
    rear++;
    queue[rear] = item;
    printf("Enqueued: %d\\n", item);
}

int dequeue() {
    int item;
    if (front == -1 || front > rear) {
        printf("Queue Empty!\\n");
        return -1;
    }
    item = queue[front];
    front++;
    if (front > rear) front = rear = -1;
    return item;
}

void display() {
    int i;
    if (front == -1) { printf("Queue Empty!\\n"); return; }
    printf("Queue: ");
    for (i = front; i <= rear; i++)
        printf("%d ", queue[i]);
    printf("\\n");
}

void main() {
    enqueue(10); enqueue(20); enqueue(30);
    display();
    printf("Dequeued: %d\\n", dequeue());
    display();
}`},{id:6,title:`Circular Queue — Insert, Delete, Display`,module:`Module 2`,topic:`Queue and Circular Queue Operations`,frequency:6,explanation:`Circular Queue reuses empty front positions. Full condition: (rear+1)%MAX == front. Empty: front == -1. After enqueue/dequeue: rear=(rear+1)%MAX and front=(front+1)%MAX respectively.`,code:`#include<stdio.h>
#define MAX 5

int cq[MAX], front = -1, rear = -1;

void insert(int item) {
    if ((rear + 1) % MAX == front) {
        printf("Circular Queue Full!\\n");
        return;
    }
    if (front == -1) { front = 0; rear = 0; }
    else rear = (rear + 1) % MAX;
    cq[rear] = item;
    printf("Inserted: %d\\n", item);
}

int deleteItem() {
    int item;
    if (front == -1) {
        printf("Circular Queue Empty!\\n");
        return -1;
    }
    item = cq[front];
    if (front == rear) { front = -1; rear = -1; }
    else front = (front + 1) % MAX;
    return item;
}

void display() {
    int i;
    if (front == -1) { printf("Empty!\\n"); return; }
    printf("Circular Queue: ");
    i = front;
    while (1) {
        printf("%d ", cq[i]);
        if (i == rear) break;
        i = (i + 1) % MAX;
    }
    printf("\\n");
}

void main() {
    insert(10); insert(20); insert(30); insert(40);
    display();
    printf("Deleted: %d\\n", deleteItem());
    insert(50); insert(60);
    display();
}`},{id:7,title:`Singly Linked List — Insert at Beginning, Display`,module:`Module 2`,topic:`Singly Linked List — Insert, Delete, Display, Search`,frequency:8,explanation:`SLL: Each node has DATA + NEXT pointer. Insert at beginning: create new node, new->next = head, head = new. Display: traverse from head to NULL. Delete first: save head, move head to head->next, free old.`,code:`#include<stdio.h>
#include<stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* head = NULL;

/* Insert at beginning */
void insertBegin(int item) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = item;
    newNode->next = head;
    head = newNode;
    printf("Inserted %d at beginning\\n", item);
}

/* Delete first node */
void deleteFirst() {
    struct Node* temp;
    if (head == NULL) { printf("List empty!\\n"); return; }
    temp = head;
    head = head->next;
    printf("Deleted: %d\\n", temp->data);
    free(temp);
}

/* Display */
void display() {
    struct Node* ptr = head;
    printf("List: ");
    while (ptr != NULL) {
        printf("%d -> ", ptr->data);
        ptr = ptr->next;
    }
    printf("NULL\\n");
}

/* Count nodes */
int count() {
    struct Node* ptr = head;
    int c = 0;
    while (ptr != NULL) { c++; ptr = ptr->next; }
    return c;
}

void main() {
    insertBegin(30);
    insertBegin(20);
    insertBegin(10);
    display();
    printf("Count: %d\\n", count());
    deleteFirst();
    display();
}`},{id:8,title:`Singly Linked List — Insert After Given Node, Delete Last`,module:`Module 2`,topic:`Singly Linked List — Insert, Delete, Display, Search`,frequency:6,explanation:`Insert after node X: traverse to find X, create new node, new->next = X->next, X->next = new. Delete last: traverse to second-last, set its next = NULL, free last.`,code:`#include<stdio.h>
#include<stdlib.h>

struct Node {
    int data;
    struct Node* next;
};
struct Node* head = NULL;

void insertEnd(int item) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    struct Node* ptr;
    newNode->data = item;
    newNode->next = NULL;
    if (head == NULL) { head = newNode; return; }
    ptr = head;
    while (ptr->next != NULL) ptr = ptr->next;
    ptr->next = newNode;
}

void insertAfter(int key, int item) {
    struct Node* ptr = head;
    struct Node* newNode;
    while (ptr != NULL && ptr->data != key)
        ptr = ptr->next;
    if (ptr == NULL) { printf("Key not found!\\n"); return; }
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = item;
    newNode->next = ptr->next;
    ptr->next = newNode;
    printf("Inserted %d after %d\\n", item, key);
}

void deleteLast() {
    struct Node *ptr, *prev;
    if (head == NULL) { printf("Empty!\\n"); return; }
    if (head->next == NULL) { free(head); head = NULL; return; }
    ptr = head;
    while (ptr->next != NULL) { prev = ptr; ptr = ptr->next; }
    printf("Deleted last: %d\\n", ptr->data);
    prev->next = NULL;
    free(ptr);
}

void display() {
    struct Node* ptr = head;
    while (ptr != NULL) { printf("%d -> ", ptr->data); ptr = ptr->next; }
    printf("NULL\\n");
}

void main() {
    insertEnd(10); insertEnd(20); insertEnd(40); insertEnd(50);
    display();
    insertAfter(20, 30);
    display();
    deleteLast();
    display();
}`},{id:9,title:`Circular Linked List — Insert at Beginning and End`,module:`Module 3`,topic:`Circular Linked List — Insert at Beginning/End, Delete`,frequency:8,explanation:`Circular LL: last node's next points back to head (not NULL). Insert at beginning: new->next = head, traverse to find last, last->next = new, head = new. Insert at end: new->next = head, last->next = new.`,code:`#include<stdio.h>
#include<stdlib.h>

struct Node {
    int data;
    struct Node* next;
};
struct Node* head = NULL;

void insertBegin(int item) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    struct Node* last;
    newNode->data = item;
    if (head == NULL) {
        newNode->next = newNode;
        head = newNode;
        return;
    }
    last = head;
    while (last->next != head) last = last->next;
    newNode->next = head;
    last->next = newNode;
    head = newNode;
    printf("Inserted %d at beginning\\n", item);
}

void insertEnd(int item) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    struct Node* last;
    newNode->data = item;
    if (head == NULL) {
        newNode->next = newNode;
        head = newNode;
        return;
    }
    last = head;
    while (last->next != head) last = last->next;
    newNode->next = head;
    last->next = newNode;
    printf("Inserted %d at end\\n", item);
}

void display() {
    struct Node* ptr = head;
    if (head == NULL) { printf("Empty!\\n"); return; }
    printf("Circular List: ");
    do {
        printf("%d -> ", ptr->data);
        ptr = ptr->next;
    } while (ptr != head);
    printf("(back to head)\\n");
}

void main() {
    insertEnd(10); insertEnd(20); insertEnd(30);
    display();
    insertBegin(5);
    display();
}`},{id:10,title:`Doubly Linked List — Insert at Beginning, End, After Node`,module:`Module 3`,topic:`Doubly Linked List — Insert, Delete, Count`,frequency:6,explanation:`DLL: Each node has prev, data, next. Insert at beginning: new->next = head, head->prev = new, head = new. Insert at end: traverse, last->next = new, new->prev = last. Delete first: head = head->next, head->prev = NULL.`,code:`#include<stdio.h>
#include<stdlib.h>

struct Node {
    struct Node* prev;
    int data;
    struct Node* next;
};
struct Node* head = NULL;

void insertBegin(int item) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = item;
    newNode->prev = NULL;
    newNode->next = head;
    if (head != NULL) head->prev = newNode;
    head = newNode;
}

void insertEnd(int item) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    struct Node* ptr = head;
    newNode->data = item;
    newNode->next = NULL;
    if (head == NULL) { newNode->prev = NULL; head = newNode; return; }
    while (ptr->next != NULL) ptr = ptr->next;
    ptr->next = newNode;
    newNode->prev = ptr;
}

void deleteFirst() {
    struct Node* temp;
    if (head == NULL) { printf("Empty!\\n"); return; }
    temp = head;
    head = head->next;
    if (head != NULL) head->prev = NULL;
    printf("Deleted: %d\\n", temp->data);
    free(temp);
}

void display() {
    struct Node* ptr = head;
    printf("DLL: NULL <-> ");
    while (ptr != NULL) {
        printf("%d <-> ", ptr->data);
        ptr = ptr->next;
    }
    printf("NULL\\n");
}

void main() {
    insertEnd(10); insertEnd(20); insertEnd(30);
    insertBegin(5);
    display();
    deleteFirst();
    display();
}`},{id:11,title:`Queue using Linked List — Enqueue, Dequeue`,module:`Module 3`,topic:`Queue Implementation Using Linked List`,frequency:5,explanation:`Linked Queue: no size limit. front pointer for dequeue (deletion), rear pointer for enqueue (insertion). Enqueue: new node at rear. Dequeue: remove from front. Empty when front == NULL.`,code:`#include<stdio.h>
#include<stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* front = NULL;
struct Node* rear = NULL;

void enqueue(int item) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = item;
    newNode->next = NULL;
    if (rear == NULL) { front = rear = newNode; }
    else { rear->next = newNode; rear = newNode; }
    printf("Enqueued: %d\\n", item);
}

int dequeue() {
    struct Node* temp;
    int item;
    if (front == NULL) { printf("Queue Empty!\\n"); return -1; }
    temp = front;
    item = front->data;
    front = front->next;
    if (front == NULL) rear = NULL;
    free(temp);
    return item;
}

void display() {
    struct Node* ptr = front;
    printf("Queue (front->rear): ");
    while (ptr != NULL) { printf("%d ", ptr->data); ptr = ptr->next; }
    printf("\\n");
}

void main() {
    enqueue(10); enqueue(20); enqueue(30);
    display();
    printf("Dequeued: %d\\n", dequeue());
    display();
}`},{id:12,title:`AVL Tree — Construct with 63,9,19,27,18,108,99,81`,module:`Module 4`,topic:`AVL Tree — Construct and Rotations`,frequency:9,explanation:`AVL Tree: Self-balancing BST where Balance Factor (BF) = height(left) - height(right). BF must be -1, 0, or +1. Four rotations: LL (Right rotate), RR (Left rotate), LR (Left then Right), RL (Right then Left). This is THE most repeated question — appears verbatim in 8+ papers.`,code:`#include<stdio.h>
#include<stdlib.h>

struct Node {
    int data, height;
    struct Node *left, *right;
};

int height(struct Node* n) {
    if (n == NULL) return 0;
    return n->height;
}

int max(int a, int b) { return (a > b) ? a : b; }

int getBalance(struct Node* n) {
    if (n == NULL) return 0;
    return height(n->left) - height(n->right);
}

struct Node* newNode(int key) {
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->data = key;
    node->left = node->right = NULL;
    node->height = 1;
    return node;
}

struct Node* rightRotate(struct Node* y) {
    struct Node* x = y->left;
    struct Node* T2 = x->right;
    x->right = y;
    y->left = T2;
    y->height = max(height(y->left), height(y->right)) + 1;
    x->height = max(height(x->left), height(x->right)) + 1;
    printf("Right Rotate at %d\\n", y->data);
    return x;
}

struct Node* leftRotate(struct Node* x) {
    struct Node* y = x->right;
    struct Node* T2 = y->left;
    y->left = x;
    x->right = T2;
    x->height = max(height(x->left), height(x->right)) + 1;
    y->height = max(height(y->left), height(y->right)) + 1;
    printf("Left Rotate at %d\\n", x->data);
    return y;
}

struct Node* insert(struct Node* node, int key) {
    int balance;
    if (node == NULL) return newNode(key);
    if (key < node->data)
        node->left = insert(node->left, key);
    else if (key > node->data)
        node->right = insert(node->right, key);
    else return node;

    node->height = 1 + max(height(node->left), height(node->right));
    balance = getBalance(node);

    /* LL Case */
    if (balance > 1 && key < node->left->data) {
        printf("LL Rotation\\n");
        return rightRotate(node);
    }
    /* RR Case */
    if (balance < -1 && key > node->right->data) {
        printf("RR Rotation\\n");
        return leftRotate(node);
    }
    /* LR Case */
    if (balance > 1 && key > node->left->data) {
        printf("LR Rotation\\n");
        node->left = leftRotate(node->left);
        return rightRotate(node);
    }
    /* RL Case */
    if (balance < -1 && key < node->right->data) {
        printf("RL Rotation\\n");
        node->right = rightRotate(node->right);
        return leftRotate(node);
    }
    return node;
}

void inorder(struct Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

void main() {
    struct Node* root = NULL;
    int keys[] = {63, 9, 19, 27, 18, 108, 99, 81};
    int i, n = 8;
    printf("Inserting: ");
    for (i = 0; i < n; i++) {
        printf("%d ", keys[i]);
        root = insert(root, keys[i]);
    }
    printf("\\nInorder traversal: ");
    inorder(root);
    printf("\\n");
}`},{id:13,title:`Binary Search Tree — Insert, Search, Traversals`,module:`Module 4`,topic:`Binary Search Tree — Construct, Insert, Search`,frequency:6,explanation:`BST property: left subtree < root < right subtree. Insert: compare with root, go left if smaller, right if larger. Search: same comparison. Inorder traversal of BST gives sorted sequence.`,code:`#include<stdio.h>
#include<stdlib.h>

struct Node {
    int data;
    struct Node *left, *right;
};

struct Node* newNode(int key) {
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->data = key;
    node->left = node->right = NULL;
    return node;
}

struct Node* insert(struct Node* root, int key) {
    if (root == NULL) return newNode(key);
    if (key < root->data)
        root->left = insert(root->left, key);
    else if (key > root->data)
        root->right = insert(root->right, key);
    return root;
}

struct Node* search(struct Node* root, int key) {
    if (root == NULL || root->data == key) return root;
    if (key < root->data) return search(root->left, key);
    return search(root->right, key);
}

int countNodes(struct Node* root) {
    if (root == NULL) return 0;
    return 1 + countNodes(root->left) + countNodes(root->right);
}

void inorder(struct Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

void preorder(struct Node* root) {
    if (root != NULL) {
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

void postorder(struct Node* root) {
    if (root != NULL) {
        postorder(root->left);
        postorder(root->right);
        printf("%d ", root->data);
    }
}

void main() {
    struct Node* root = NULL;
    struct Node* found;
    int keys[] = {45, 39, 56, 12, 34, 78, 32, 10, 89, 54, 67, 81};
    int i;
    for (i = 0; i < 12; i++)
        root = insert(root, keys[i]);

    printf("Inorder:   "); inorder(root);   printf("\\n");
    printf("Preorder:  "); preorder(root);  printf("\\n");
    printf("Postorder: "); postorder(root); printf("\\n");
    printf("Count: %d\\n", countNodes(root));

    found = search(root, 67);
    if (found) printf("Found: %d\\n", found->data);
    else printf("Not found\\n");
}`},{id:14,title:`Tower of Hanoi — Recursive`,module:`Module 2`,topic:`Recursion — Types, Tower of Hanoi, Fibonacci`,frequency:5,explanation:`Tower of Hanoi: Move N disks from Source to Destination using Auxiliary peg. Rule: never place larger disk on smaller. Recursive: move N-1 from S→A, move 1 from S→D, move N-1 from A→D. Total moves = 2^N - 1.`,code:`#include<stdio.h>

void hanoi(int n, char from, char to, char aux) {
    if (n == 0) return;
    hanoi(n - 1, from, aux, to);
    printf("Move disk %d from %c to %c\\n", n, from, to);
    hanoi(n - 1, aux, to, from);
}

void main() {
    int n;
    printf("Enter number of disks: ");
    scanf("%d", &n);
    printf("Steps to move %d disks from A to C:\\n", n);
    hanoi(n, 'A', 'C', 'B');
    printf("Total moves = %d\\n", (1 << n) - 1);
}`},{id:15,title:`Fibonacci Series using Recursion`,module:`Module 2`,topic:`Recursion — Types, Tower of Hanoi, Fibonacci`,frequency:4,explanation:`Fibonacci: F(0)=0, F(1)=1, F(n) = F(n-1) + F(n-2). Base case: n==0 return 0, n==1 return 1. Recursive case: return fib(n-1) + fib(n-2). Trace: fib(5) = fib(4)+fib(3) = ... = 5.`,code:`#include<stdio.h>

int fib(int n) {
    if (n == 0) return 0;  /* Base case 1 */
    if (n == 1) return 1;  /* Base case 2 */
    return fib(n - 1) + fib(n - 2); /* Recursive case */
}

void main() {
    int i, n;
    printf("Enter n: ");
    scanf("%d", &n);
    printf("Fibonacci series: ");
    for (i = 0; i < n; i++)
        printf("%d ", fib(i));
    printf("\\n");
    printf("fib(%d) = %d\\n", n, fib(n));
}`},{id:16,title:`Swap Two Numbers Using Pointers`,module:`Module 1`,topic:`Structures and Pointers — C Programs`,frequency:4,explanation:`Pointers store addresses. *ptr dereferences. Pass &a, &b to function. Inside: use *a and *b to swap values. Call by reference — actual values change in caller.`,code:`#include<stdio.h>

void swap(int *a, int *b) {
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}

void main() {
    int x = 10, y = 20;
    printf("Before swap: x=%d, y=%d\\n", x, y);
    swap(&x, &y);
    printf("After swap:  x=%d, y=%d\\n", x, y);
}`},{id:17,title:`Employee Structure Program`,module:`Module 1`,topic:`Structures and Pointers — C Programs`,frequency:5,explanation:`Structure groups different data types. Define struct, declare array of structs, use dot (.) operator to access members. For pointers to struct, use arrow (->) operator.`,code:`#include<stdio.h>
#include<string.h>

struct Employee {
    int empid;
    char name[30];
    int age;
    float salary;
    int yoe;
    char dept[20];
};

void printEmployee(struct Employee *e) {
    printf("ID: %d, Name: %s, YoE: %d\\n", e->empid, e->name, e->yoe);
}

void main() {
    struct Employee emp[10];
    int i;
    /* Read details of 10 employees */
    for (i = 0; i < 10; i++) {
        printf("Enter empid, name, yoe, dept: ");
        scanf("%d %s %d %s", &emp[i].empid, emp[i].name,
              &emp[i].yoe, emp[i].dept);
    }
    /* Print YoE < 5 and dept == developer */
    printf("Eligible employees (YoE<5, dept=developer):\\n");
    for (i = 0; i < 10; i++) {
        if (emp[i].yoe < 5 && strcmp(emp[i].dept, "developer") == 0)
            printEmployee(&emp[i]);
    }
}`}];function be(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|(#[a-zA-Z_]\w*)|(\"(?:[^\"\\]|\\.)*\")|('(?:[^'\\]|\\.)*')|(\b(?:void|int|float|double|char|long|short|unsigned|signed|return|if|else|while|for|do|switch|case|break|continue|default|struct|union|typedef|sizeof|const|static|extern|printf|scanf|gets|puts|strlen|strcpy|strcmp|strcat|strrev|sqrt|sin|cos|tan|pow|abs|malloc|free|main|NULL)\\b)|(\b\d+\.?\d*[fFlLuU]?\b)/g,(e,t,n,r,i,a,o)=>t?`<span style="color:#6e7681;font-style:italic">${e}</span>`:n?`<span style="color:#c792ea">${e}</span>`:r||i?`<span style="color:#a3be8c">${e}</span>`:a?`<span style="color:#82aaff;font-weight:600">${e}</span>`:o?`<span style="color:#f78c6c">${e}</span>`:e)}function xe({code:e,title:t}){let[n,r]=(0,l.useState)(!1);return(0,O.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #30363d`,borderRadius:10,overflow:`hidden`,margin:`12px 0`},children:[(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`9px 14px`,background:`rgba(255,255,255,0.03)`,borderBottom:`1px solid #30363d`},children:[(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[[`#ff5f57`,`#febc2e`,`#28c840`].map((e,t)=>(0,O.jsx)(`div`,{style:{width:10,height:10,borderRadius:`50%`,background:e}},t)),(0,O.jsx)(`span`,{style:{fontSize:12,color:`#8b949e`,fontFamily:`var(--font-mono)`,marginLeft:4},children:t||`program.c`})]}),(0,O.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})},style:{display:`flex`,alignItems:`center`,gap:5,padding:`4px 10px`,borderRadius:6,border:`1px solid #30363d`,background:n?`rgba(34,197,94,0.15)`:`transparent`,color:n?`#22c55e`:`#8b949e`,fontSize:11,fontWeight:500,cursor:`pointer`,fontFamily:`inherit`,transition:`all 0.15s`},children:n?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(te,{size:11}),` Copied!`]}):(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(ae,{size:11}),` Copy`]})})]}),(0,O.jsx)(`pre`,{style:{padding:`16px 18px`,overflowX:`auto`,fontFamily:`var(--font-mono)`,fontSize:13,lineHeight:1.75,color:`#e6edf3`,margin:0,whiteSpace:`pre`},dangerouslySetInnerHTML:{__html:be(e)}})]})}function Se(){let[e,t]=(0,l.useState)(`all`),[n,r]=(0,l.useState)({1:!0}),i=[`all`,`Module 1`,`Module 2`,`Module 3`,`Module 4`],a=e===`all`?ye:ye.filter(t=>t.module===e),o=e=>r(t=>({...t,[e]:!t[e]}));return(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`div`,{className:`page-header`,children:[(0,O.jsx)(`h1`,{className:`page-title`,children:`Programs`}),(0,O.jsx)(`p`,{className:`page-subtitle`,children:`All 17 must-know DSA C programs — complete, correct, exam-ready`})]}),(0,O.jsxs)(`div`,{className:`alert alert-info mb-20`,children:[(0,O.jsx)(`span`,{className:`alert-icon`,children:`💡`}),(0,O.jsxs)(`div`,{className:`alert-content`,children:[(0,O.jsx)(`strong`,{children:`Partial Marks Rule`}),`Even if logic is wrong — writing correct `,(0,O.jsx)(`code`,{style:{background:`rgba(255,255,255,0.1)`,padding:`1px 5px`,borderRadius:3,fontFamily:`var(--font-mono)`,fontSize:12},children:`#include<stdio.h>`}),` + struct declaration + variable names = 3–4 marks guaranteed.`]})]}),(0,O.jsx)(`div`,{className:`tabs mb-20`,children:i.map(n=>(0,O.jsx)(`button`,{className:`tab ${e===n?`active`:``}`,onClick:()=>t(n),children:n===`all`?`All Programs`:n},n))}),a.map(e=>{let t=n[e.id],r=e.frequency>=6;return(0,O.jsxs)(`div`,{className:`accordion-item mb-12 ${t?`open`:``}`,style:{borderLeft:r?`3px solid var(--red)`:`3px solid var(--border)`},children:[(0,O.jsxs)(`div`,{className:`accordion-header`,onClick:()=>o(e.id),children:[(0,O.jsx)(`div`,{style:{width:30,height:30,borderRadius:8,background:r?`var(--red-light)`:`var(--accent-light)`,color:r?`var(--red)`:`var(--accent)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:12,fontWeight:700,flexShrink:0,fontFamily:`var(--font-mono)`},children:String(e.id).padStart(2,`0`)}),(0,O.jsxs)(`div`,{style:{flex:1},children:[(0,O.jsx)(`div`,{className:`accordion-title`,children:e.title}),(0,O.jsxs)(`div`,{style:{fontSize:12,color:`var(--text-muted)`,marginTop:3},children:[e.module,` \xA0·\xA0 Appeared `,(0,O.jsxs)(`strong`,{style:{color:r?`var(--red)`:`var(--text-muted)`},children:[e.frequency,`×`]})]})]}),(0,O.jsxs)(`div`,{className:`accordion-meta`,children:[r&&(0,O.jsx)(`span`,{className:`badge badge-critical`,children:`🔥 MUST KNOW`}),t?(0,O.jsx)(ne,{size:16,color:`var(--text-muted)`}):(0,O.jsx)(re,{size:16,color:`var(--text-muted)`})]})]}),t&&(0,O.jsxs)(`div`,{className:`accordion-body`,children:[(0,O.jsxs)(`div`,{style:{background:`rgba(99,102,241,0.08)`,border:`1px solid rgba(99,102,241,0.2)`,borderRadius:8,padding:`12px 14px`,marginBottom:14},children:[(0,O.jsx)(`span`,{style:{fontSize:11,fontWeight:700,color:`var(--accent)`,textTransform:`uppercase`,letterSpacing:`0.6px`},children:`Logic / Key Points`}),(0,O.jsx)(`p`,{style:{fontSize:13,color:`var(--text-secondary)`,lineHeight:1.7,marginTop:6},children:e.explanation})]}),(0,O.jsx)(xe,{code:e.code,title:`prog${e.id}.c`})]})]},e.id)})]})}var Ce=[{id:1,title:`Stack — Definition, ADT, Operations`,module:`Module 1`,color:`#ef4444`,frequency:8,content:[{heading:`Definition`,text:`A Stack is a linear data structure that follows the LIFO (Last In First Out) principle. Elements are inserted and removed from the same end called the TOP.`},{heading:`ADT (Abstract Data Type)`,text:`Stack ADT defines:
• Data: A collection of elements + top pointer
• Operations:
  - push(x): Insert element x at top
  - pop(): Remove and return top element
  - peek()/top(): Return top element without removing
  - isEmpty(): Returns true if stack is empty
  - isFull(): Returns true if stack is full`},{heading:`Applications of Stack`,text:`1. Expression evaluation (postfix)
2. Expression conversion (infix→postfix/prefix)
3. Function call management (activation records)
4. Undo/Redo operations
5. Backtracking algorithms
6. Palindrome checking
7. Balanced parentheses checking`}]},{id:2,title:`Infix → Postfix Algorithm (Complete Trace Method)`,module:`Module 1`,color:`#ef4444`,frequency:8,content:[{heading:`Algorithm`,text:`1. Scan infix expression left to right
2. If OPERAND → add to postfix output
3. If '(' → push onto stack
4. If ')' → pop and add to output until '(' is found; discard '('
5. If OPERATOR →
   a. While stack not empty AND top is not '(' AND prec(top) >= prec(current):
      pop and add to output
   b. Push current operator
6. After scanning: pop all remaining operators to output

Precedence (highest to lowest):
  $ (power) → 3
  * / %     → 2
  + -       → 1

Associativity: $ is Right-to-Left, rest are Left-to-Right`},{heading:`Trace Table Format`,text:`For expression: (A+B)*C-D
Symbol | Stack (bottom→top) | Postfix Output
---    | ---                | ---
(      | (                  |
A      | (                  | A
+      | ( +                | A
B      | ( +                | A B
)      | (empty)            | A B +
*      | *                  | A B +
C      | *                  | A B + C
-      | -                  | A B + C *
D      | -                  | A B + C * D
END    | (empty)            | A B + C * D -
Result: AB+C*D-`}]},{id:3,title:`Recursion — Types and Tower of Hanoi`,module:`Module 2`,color:`#f97316`,frequency:6,content:[{heading:`Definition of Recursion`,text:`Recursion is a process where a function calls itself directly or indirectly to solve a problem. Every recursive function must have: 1) Base Case (termination condition), 2) Recursive Case (moves towards base case).`},{heading:`Types of Recursion`,text:`1. Direct Recursion: f() calls f() directly
   Example: int fact(int n){ return n*fact(n-1); }

2. Indirect Recursion: f() calls g() and g() calls f()
   Example: f() → g() → f()

3. Tail Recursion: Recursive call is the LAST statement
   Example: f(n) { if(n==0) return; f(n-1); } ← last operation

4. Non-Tail Recursion: Operations after recursive call
   Example: f(n) { return n + f(n-1); } ← addition after recursion

5. Linear Recursion: Only ONE recursive call per invocation
   Example: factorial, fibonacci (with single call)

6. Tree Recursion: MULTIPLE recursive calls per invocation
   Example: fib(n) = fib(n-1) + fib(n-2) ← TWO calls`},{heading:`Tower of Hanoi Algorithm`,text:`Problem: Move N disks from Source (A) to Destination (C) using Auxiliary (B).
Rule: Never place larger disk on smaller disk.

Algorithm:
hanoi(n, from, to, aux):
  if n == 0: return
  hanoi(n-1, from, aux, to)  // Move n-1 disks A→B
  print "Move disk n from from to to"
  hanoi(n-1, aux, to, from)  // Move n-1 disks B→C

For n=3 disks (7 moves total = 2³-1):
  Move 1: A→C
  Move 2: A→B
  Move 3: C→B
  Move 4: A→C
  Move 5: B→A
  Move 6: B→C
  Move 7: A→C`}]},{id:4,title:`Circular Queue — Complete Algorithm`,module:`Module 2`,color:`#f97316`,frequency:6,content:[{heading:`Why Circular Queue?`,text:`In linear queue, even if front elements are dequeued, rear cannot go beyond MAX-1. This wastes memory. Circular queue reuses the freed slots by wrapping around using modulo arithmetic.`},{heading:`Conditions`,text:`Empty: front == -1
Full:  (rear + 1) % MAX == front
Size:  MAX elements

Insert (Enqueue):
  if full: print overflow
  if empty: front = rear = 0
  else: rear = (rear + 1) % MAX
  cq[rear] = item

Delete (Dequeue):
  if empty: print underflow
  item = cq[front]
  if front == rear: front = rear = -1 (single element)
  else: front = (front + 1) % MAX
  return item`},{heading:`Types of Queues`,text:`1. Linear Queue: Simple FIFO, front/rear only move forward
2. Circular Queue: front/rear wrap around (solves memory waste)
3. Double-Ended Queue (Deque): Insert/delete from BOTH ends
   - Input Restricted Deque: insert at one end, delete from both
   - Output Restricted Deque: insert from both, delete from one
4. Priority Queue: Each element has a priority; highest priority served first`}]},{id:5,title:`Singly Linked List — All Operations`,module:`Module 2`,color:`#f97316`,frequency:8,content:[{heading:`Structure of SLL Node`,text:`struct Node {
    int data;
    struct Node* next;
};

Node has DATA + NEXT pointer (address of next node).
Last node's NEXT = NULL.
HEAD pointer points to first node.`},{heading:`Key Operations Summary`,text:`INSERT AT BEGINNING:
  newNode->next = head
  head = newNode

INSERT AT END:
  Traverse to last (last->next == NULL)
  last->next = newNode

INSERT AFTER NODE X:
  Find node with data==X
  newNode->next = X->next
  X->next = newNode

DELETE FIRST:
  temp = head
  head = head->next
  free(temp)

DELETE LAST:
  Traverse to 2nd-last node
  2nd-last->next = NULL
  free(last)

DELETE NODE WITH VALUE V:
  Find node before V (prev)
  prev->next = targetNode->next
  free(targetNode)

DISPLAY: Traverse from head to NULL, print each data.
SEARCH: Traverse, compare each data with key.
COUNT: Traverse, increment counter.`}]},{id:6,title:`AVL Tree — All 4 Rotations`,module:`Module 4`,color:`#22c55e`,frequency:9,content:[{heading:`What is an AVL Tree?`,text:`AVL (Adelson-Velsky and Landis) tree is a self-balancing BST.
Balance Factor (BF) = Height(Left Subtree) - Height(Right Subtree)
For every node: BF must be -1, 0, or +1
If |BF| > 1 after insertion → perform rotation to rebalance.`},{heading:`LL Case (Left-Left) → Right Rotate`,text:`When: New node inserted in LEFT subtree of LEFT child
Action: Single RIGHT ROTATION at unbalanced node

    z              y
   / \\           /  \\
  y   T4  →    x    z
 / \\          /\\  / \\
x   T3       T1 T2 T3 T4

y becomes new root, z becomes right child of y.`},{heading:`RR Case (Right-Right) → Left Rotate`,text:`When: New node inserted in RIGHT subtree of RIGHT child
Action: Single LEFT ROTATION at unbalanced node

  z                y
 / \\             /  \\
T1  y    →      z    x
   / \\         /\\   /\\
  T2  x       T1 T2 T3 T4
     /\\

y becomes new root, z becomes left child of y.`},{heading:`LR Case (Left-Right) → Left then Right Rotate`,text:`When: New node inserted in RIGHT subtree of LEFT child
Action: First LEFT ROTATE on left child, then RIGHT ROTATE on node

Step 1: Left rotate y (left child of z)
Step 2: Right rotate z

    z               z              x
   /               /             /  \\
  y       →       x      →     y    z
   \\             /
    x            y`},{heading:`RL Case (Right-Left) → Right then Left Rotate`,text:`When: New node inserted in LEFT subtree of RIGHT child
Action: First RIGHT ROTATE on right child, then LEFT ROTATE on node

Step 1: Right rotate y (right child of z)
Step 2: Left rotate z

  z                z              x
   \\                \\           /  \\
    y      →         x    →    z    y
   /                  \\
  x                    y`},{heading:`Insertion Trace: 63, 9, 19, 27, 18, 108, 99, 81`,text:`Insert 63: Tree = 63 (BF=0)
Insert 9:  Tree = 63(L:9) → BF(63)=1 ✓
Insert 19: BF(63)=2, BF(9)=-1 → LR CASE at 63
  Left rotate at 9, Right rotate at 63
  Result: 19(L:9, R:63)

Insert 27: 19(9,63→27) → BF all valid
Insert 18: BF(63)=-2, BF(27)=1 → RL CASE at 63
  Right rotate at 27, Left rotate at 63
  Result: 18 moved up

Insert 108: Simple BST insert, BF valid
Insert 99: BF issues → RL CASE
Insert 81: Causes RR or RL case

Final inorder: 9, 18, 19, 27, 63, 81, 99, 108`}]},{id:7,title:`Binary Search Tree (BST)`,module:`Module 4`,color:`#22c55e`,frequency:6,content:[{heading:`BST Property`,text:`For every node N in BST:
  • All nodes in N's LEFT subtree < N's data
  • All nodes in N's RIGHT subtree > N's data
  • No duplicates

Inorder traversal of BST always gives SORTED sequence.`},{heading:`Construction: 45, 39, 56, 12, 34, 78, 32, 10, 89, 54, 67, 81`,text:`Root = 45
39 < 45 → LEFT of 45
56 > 45 → RIGHT of 45
12 < 45, 12 < 39 → LEFT of 39
34 > 12, 34 < 39 → RIGHT of 12
78 > 45, 78 > 56 → RIGHT of 56
32 < 34 → LEFT of 34
10 < 12 → LEFT of 12
89 > 78 → RIGHT of 78
54 < 56 → LEFT of 56
67 > 56, 67 < 78 → LEFT of 78
81 > 78 → LEFT of 89

Inorder: 10,12,32,34,39,45,54,56,67,78,81,89`},{heading:`Search Algorithm`,text:`search(root, key):
  if root == NULL: return "Not Found"
  if key == root->data: return root
  if key < root->data: return search(root->left, key)
  else: return search(root->right, key)

Time: O(h) where h = height of tree
Best case: O(log n) for balanced BST
Worst case: O(n) for skewed BST`}]},{id:8,title:`Circular & Doubly Linked List`,module:`Module 3`,color:`#eab308`,frequency:7,content:[{heading:`Circular Linked List`,text:`Circular LL: Last node's NEXT points back to HEAD (not NULL).

Advantages over Ordinary LL:
1. Can traverse entire list from any node
2. Efficient for round-robin scheduling
3. No need to check for NULL (use head as sentinel)
4. Easy to implement queues

Types:
• Singly Circular LL: each node has one next pointer
• Doubly Circular LL: each node has prev and next`},{heading:`CLL Insert at Beginning`,text:`insertBegin(item):
  newNode->data = item
  if head == NULL:
    newNode->next = newNode
    head = newNode
    return
  // find last node
  last = head
  while (last->next != head): last = last->next
  newNode->next = head
  last->next = newNode
  head = newNode`},{heading:`Doubly Linked List Advantages`,text:`DLL advantages over SLL:
1. Can traverse in BOTH directions (forward and backward)
2. Delete a node WITHOUT traversing from head (just use prev pointer)
3. Easier insertion before a given node
4. Used in browser history (back/forward)

DLL Node: [PREV | DATA | NEXT]
head->prev = NULL, last->next = NULL`},{heading:`DLL Delete First Node`,text:`deleteFirst():
  if head == NULL: return (empty)
  temp = head
  head = head->next
  if head != NULL:
    head->prev = NULL
  free(temp)

DLL Insert After Given Node (key):
  Find node with data == key
  newNode->next = key->next
  newNode->prev = key
  if key->next != NULL:
    key->next->prev = newNode
  key->next = newNode`}]},{id:9,title:`Tree Traversals — Inorder, Preorder, Postorder`,module:`Module 4`,color:`#22c55e`,frequency:5,content:[{heading:`Three Standard Traversals`,text:`1. INORDER (L → Root → R):
   Visit left subtree, then root, then right subtree
   → For BST: gives elements in SORTED order
   
2. PREORDER (Root → L → R):
   Visit root first, then left, then right
   → Used to: CREATE/COPY a tree
   
3. POSTORDER (L → R → Root):
   Visit left, then right, then root last
   → Used to: DELETE a tree, Evaluate expression trees`},{heading:`Algorithm (C Pseudocode)`,text:`inorder(root):
  if root != NULL:
    inorder(root->left)
    print root->data
    inorder(root->right)

preorder(root):
  if root != NULL:
    print root->data
    preorder(root->left)
    preorder(root->right)

postorder(root):
  if root != NULL:
    postorder(root->left)
    postorder(root->right)
    print root->data`},{heading:`Expression Tree`,text:`Expression tree for: a + b / c * d - e

Traversals:
• Inorder: a + b / c * d - e  (original infix with parentheses)
• Preorder: gives PREFIX (Polish) notation
• Postorder: gives POSTFIX (Reverse Polish) notation

Evaluate: For a=30,b=10,c=2,d=30,e=10:
  b/c = 10/2 = 5
  5*d = 5*30 = 150
  a+150 = 30+150 = 180
  180-e = 180-10 = 170`}]}];function we(){let[e,t]=(0,l.useState)({0:!0}),[n,r]=(0,l.useState)(`all`),i=e=>t(t=>({...t,[e]:!t[e]})),a=n===`all`?Ce:Ce.filter(e=>e.module===n);return(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`div`,{className:`page-header`,children:[(0,O.jsx)(`h1`,{className:`page-title`,children:`Theory`}),(0,O.jsx)(`p`,{className:`page-subtitle`,children:`Complete DSA theory — definitions, algorithms, traces, exam answers`})]}),(0,O.jsx)(`div`,{className:`tabs mb-20`,children:[`all`,`Module 1`,`Module 2`,`Module 3`,`Module 4`].map(e=>(0,O.jsx)(`button`,{className:`tab ${n===e?`active`:``}`,onClick:()=>r(e),children:e===`all`?`All Modules`:e},e))}),a.map((t,n)=>{let r=e[n];return(0,O.jsxs)(`div`,{className:`accordion-item mb-12 ${r?`open`:``}`,style:{borderLeft:`3px solid ${t.color}`},children:[(0,O.jsxs)(`div`,{className:`accordion-header`,onClick:()=>i(n),children:[(0,O.jsxs)(`div`,{style:{flex:1},children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-8`,children:[(0,O.jsx)(`div`,{className:`accordion-title`,children:t.title}),(0,O.jsx)(`span`,{className:`badge badge-muted`,children:t.module})]}),(0,O.jsxs)(`div`,{style:{fontSize:12,color:`var(--text-muted)`,marginTop:2},children:[`Appeared `,t.frequency,`× in papers`]})]}),(0,O.jsxs)(`div`,{className:`accordion-meta`,children:[t.frequency>=7&&(0,O.jsx)(`span`,{className:`badge badge-critical`,children:`🔥 MUST KNOW`}),r?(0,O.jsx)(ne,{size:16,color:`var(--text-muted)`}):(0,O.jsx)(re,{size:16,color:`var(--text-muted)`})]})]}),r&&(0,O.jsx)(`div`,{className:`accordion-body`,children:t.content.map((e,n)=>(0,O.jsxs)(`div`,{style:{marginBottom:n<t.content.length-1?20:0},children:[(0,O.jsx)(`div`,{style:{fontSize:12,fontWeight:700,color:t.color,textTransform:`uppercase`,letterSpacing:`0.6px`,marginBottom:8},children:e.heading}),(0,O.jsx)(`pre`,{style:{fontSize:13,color:`var(--text-secondary)`,lineHeight:1.8,fontFamily:`inherit`,whiteSpace:`pre-wrap`,wordBreak:`break-word`,background:`rgba(255,255,255,0.02)`,borderRadius:8,padding:`12px 14px`,border:`1px solid rgba(255,255,255,0.04)`},children:e.text}),n<t.content.length-1&&(0,O.jsx)(`hr`,{className:`divider`})]},n))})]},n)})]})}var Te=[{id:`stack`,title:`1. Stack — Push, Pop, Peek (Array)`,color:`#ef4444`,mod:`Module 1`,marks:`10M`,simple:`WHAT IS STACK?
  Stack = Like a pile of plates. You add on top, remove from top.
  Rule = LIFO (Last In, First Out)
  TOP = tracks the topmost position. Starts at -1 (empty).`,code:`#include <stdio.h>
#define MAX 5

int stack[MAX];
int top = -1;      // -1 means stack is empty

/* PUSH — add element */
void push(int item) {
    if (top == MAX - 1) {
        printf("Stack is FULL (Overflow)\\n");
        return;
    }
    top++;              // move top up
    stack[top] = item;  // store item
    printf("Pushed: %d\\n", item);
}

/* POP — remove element */
int pop() {
    if (top == -1) {
        printf("Stack is EMPTY (Underflow)\\n");
        return -1;
    }
    int item = stack[top];  // get top item
    top--;                  // move top down
    return item;
}

/* PEEK — see top without removing */
int peek() {
    if (top == -1) {
        printf("Stack is EMPTY\\n");
        return -1;
    }
    return stack[top];
}

/* DISPLAY */
void display() {
    if (top == -1) { printf("Stack empty\\n"); return; }
    printf("Stack: ");
    for (int i = top; i >= 0; i--)
        printf("%d ", stack[i]);
    printf("\\n");
}

void main() {
    push(10);   // stack: [10]
    push(20);   // stack: [10,20]
    push(30);   // stack: [10,20,30]
    display();  // shows: 30 20 10
    printf("Top = %d\\n", peek());  // 30
    printf("Popped = %d\\n", pop()); // 30
    display();  // shows: 20 10
}`,trace:`TRACE:
  push(10) → top=0, stack[0]=10
  push(20) → top=1, stack[1]=20
  push(30) → top=2, stack[2]=30
  peek()   → returns 30 (top not changed)
  pop()    → returns 30, top=1
  Stack now has: 10, 20`},{id:`infix`,title:`2. Infix → Postfix Conversion`,color:`#ef4444`,mod:`Module 1`,marks:`20M ← MOST IMPORTANT`,simple:`WHAT IS INFIX/POSTFIX?
  Infix   = Normal way: A + B  (operator between operands)
  Postfix = Operator comes AFTER: A B +
  
OPERATOR PRIORITY (higher number = higher priority):
  $ or ^  →  3  (power/exponent)
  * and / →  2  (multiply/divide)  
  + and - →  1  (add/subtract)
  (       →  0  (brackets — never pop for normal operators)

SIMPLE RULE:
  • Letter/number → write in OUTPUT directly
  • ( → push to stack
  • ) → pop everything until ( found, throw away both ( and )
  • Operator → pop all operators with SAME or HIGHER priority, then push this one
  • End → pop everything remaining to output`,code:`TABLE FORMAT (write this in exam — each row = marks):

Convert: A * B + C * D

Symbol | Action           | Stack | Output
-------|------------------|-------|----------
  A    | letter → output  | empty | A
  *    | stack empty,push | *     | A
  B    | letter → output  | *     | A B
  +    | +(1) < *(2),     | empty | A B *
       | so pop *, push + | +     | A B *
  C    | letter → output  | +     | A B * C
  *    | *(2) > +(1),     | + *   | A B * C
       | so push *        |       |
  D    | letter → output  | + *   | A B * C D
 END   | pop * then +     | empty | A B * C D * +

ANSWER: A B * C D * +

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Convert: (A + B) * (C - D)

Symbol | Action           | Stack  | Output
-------|------------------|--------|----------
  (    | push (           | (      |
  A    | letter → output  | (      | A
  +    | top is (, push   | ( +    | A
  B    | letter → output  | ( +    | A B
  )    | pop until ( → +  | empty  | A B +
  *    | stack empty,push | *      | A B +
  (    | push (           | * (    | A B +
  C    | letter → output  | * (    | A B + C
  -    | top is (, push   | * ( -  | A B + C
  D    | letter → output  | * ( -  | A B + C D
  )    | pop until ( → -  | *      | A B + C D -
 END   | pop *            | empty  | A B + C D - *

ANSWER: A B + C D - *`,trace:`POSTFIX EVALUATION (also asked frequently):
Evaluate: 9 3 4 * 8 + 4 / -

RULE: number → PUSH. Operator → POP 2 numbers, calculate, PUSH result.
(First popped = RIGHT side, Second popped = LEFT side)

Symbol | Action              | Stack
-------|---------------------|----------
  9    | push 9              | 9
  3    | push 3              | 9 3
  4    | push 4              | 9 3 4
  *    | pop 4,3 → 3*4=12   | 9 12
  8    | push 8              | 9 12 8
  +    | pop 8,12→ 12+8=20  | 9 20
  4    | push 4              | 9 20 4
  /    | pop 4,20→ 20/4=5   | 9 5
  -    | pop 5,9 → 9-5=4    | 4

FINAL ANSWER = 4`},{id:`recursion`,title:`3. Recursion — Types + Tower of Hanoi`,color:`#f97316`,mod:`Module 2`,marks:`20M`,simple:`WHAT IS RECURSION?
  A function that CALLS ITSELF.
  Must have:
  1. BASE CASE  → condition to STOP (prevents infinite loop)
  2. RECURSIVE CASE → calls itself with smaller value

TYPES OF RECURSION:
  1. Direct   → function calls ITSELF directly
  2. Indirect → A calls B, B calls A
  3. Tail     → recursive call is the LAST line (can convert to loop)
  4. Non-Tail → some work done AFTER recursive call returns
  5. Linear   → one recursive call per function call (factorial)
  6. Tree     → two or more recursive calls (fibonacci)`,code:`/* EXAMPLE 1: Factorial — Linear Recursion */
int factorial(int n) {
    if (n == 0)           // BASE CASE: stop here
        return 1;
    return n * factorial(n-1); // RECURSIVE CASE
}
/* factorial(4) = 4 * factorial(3)
                = 4 * 3 * factorial(2)
                = 4 * 3 * 2 * factorial(1)
                = 4 * 3 * 2 * 1 * factorial(0)
                = 4 * 3 * 2 * 1 * 1 = 24 */

/* TOWER OF HANOI (Most asked — write this!) */
/* Problem: Move n disks from Source to Destination using Aux peg.
   Rules:  1) Move one disk at a time
           2) Never put big disk on small disk */

void TOH(int n, char source, char dest, char aux) {
    if (n == 1) {
        // BASE CASE: just move the single disk
        printf("Move disk 1 from %c to %c\\n", source, dest);
        return;
    }
    // Step 1: Move top (n-1) disks from source to aux
    TOH(n-1, source, aux, dest);
    // Step 2: Move nth (bottom) disk from source to dest
    printf("Move disk %d from %c to %c\\n", n, source, dest);
    // Step 3: Move (n-1) disks from aux to dest
    TOH(n-1, aux, dest, source);
}

void main() {
    TOH(3, 'A', 'C', 'B'); // 3 disks: A→C using B
}`,trace:`TRACE for TOH(3, A, C, B):

Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C   ← middle disk (largest)
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C

Total moves = 2³ - 1 = 7 moves

Base case:    n == 1
Recursive case: n > 1 (calls itself twice)
Type: Tree Recursion (because it calls TOH twice per call)`},{id:`sll`,title:`4. Singly Linked List — Insert & Delete`,color:`#f97316`,mod:`Module 2`,marks:`20M ← MOST IMPORTANT`,simple:`WHAT IS LINKED LIST?
  A chain of NODES. Each node has:
  1. data  → stores the value
  2. next  → stores ADDRESS of next node (pointer)
  
  HEAD → [10|→] → [20|→] → [30|NULL]
  
  NULL at the end = no more nodes

NODE STRUCTURE (write this first in every answer):
  struct Node {
      int data;
      struct Node *next;
  };
  struct Node *HEAD = NULL;  // HEAD points to first node`,code:`/* 1. INSERT AT BEGINNING (most asked) */
void insertBegin(int val) {
    // Step 1: Create new node
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = val;
    
    // Step 2: New node points to current first node
    newNode->next = HEAD;
    
    // Step 3: HEAD now points to new node
    HEAD = newNode;
}
/* BEFORE: HEAD→[20]→[30]→NULL
   INSERT 10 at begin
   AFTER:  HEAD→[10]→[20]→[30]→NULL */

/* 2. INSERT AT END */
void insertEnd(int val) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->next = NULL;  // new node is last, so next = NULL
    
    if (HEAD == NULL) {    // if list is empty
        HEAD = newNode;
        return;
    }
    // Travel to the last node
    struct Node* temp = HEAD;
    while (temp->next != NULL)
        temp = temp->next;
    
    temp->next = newNode;  // last node points to new node
}
/* BEFORE: HEAD→[10]→[20]→NULL
   INSERT 30 at end
   AFTER:  HEAD→[10]→[20]→[30]→NULL */

/* 3. DELETE FIRST NODE */
void deleteFirst() {
    if (HEAD == NULL) { printf("List empty\\n"); return; }
    struct Node* temp = HEAD;
    HEAD = HEAD->next;  // HEAD moves to second node
    free(temp);         // free memory of old first node
}
/* BEFORE: HEAD→[10]→[20]→[30]→NULL
   AFTER:  HEAD→[20]→[30]→NULL */

/* 4. DELETE LAST NODE */
void deleteLast() {
    if (HEAD == NULL) { printf("Empty\\n"); return; }
    if (HEAD->next == NULL) { free(HEAD); HEAD=NULL; return; }
    
    struct Node* temp = HEAD;
    while (temp->next->next != NULL)  // stop at second-to-last
        temp = temp->next;
    
    free(temp->next);   // free last node
    temp->next = NULL;  // second-to-last now becomes last
}

/* 5. DISPLAY */
void display() {
    struct Node* temp = HEAD;
    while (temp != NULL) {
        printf("%d → ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}`,trace:`INSERT BETWEEN (Feb/Mar-2025 Supp exact question):
"List is 15→25→40→50. Insert 30 between 25 and 40"

Step 1: Create newNode with data=30
Step 2: Travel to node with data=25 (call it 'temp')
Step 3: newNode->next = temp->next   (30 points to 40)
Step 4: temp->next = newNode         (25 now points to 30)

BEFORE: [15]→[25]→[40]→[50]→NULL
AFTER:  [15]→[25]→[30]→[40]→[50]→NULL ✓`},{id:`cll`,title:`5. Circular Linked List — Insert Begin & End`,color:`#a855f7`,mod:`Module 3`,marks:`20M ← MOST IMPORTANT`,simple:`WHAT IS CIRCULAR LINKED LIST?
  Same as SLL but LAST node's next points back to FIRST node.
  No NULL at the end!
  
  Use LAST pointer (points to last node).
  HEAD = LAST->next  (first node = LAST's next)
  
  DIAGRAM:
  LAST ──→ [D] → [A] → [B] → [C] → back to [D]
            ↑___________________________________|

NODE STRUCTURE:
  struct Node {
      int data;
      struct Node *next;
  };
  struct Node *LAST = NULL;`,code:`/* 1. INSERT AT BEGINNING */
void insertBegin(int val) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = val;
    
    if (LAST == NULL) {           // empty list
        LAST = newNode;
        newNode->next = newNode;  // points to itself
        return;
    }
    // New node points to current first node (LAST->next)
    newNode->next = LAST->next;
    
    // LAST now points to new node (new node becomes first)
    LAST->next = newNode;
}
/* BEFORE: LAST→[C]→[A]→[B]→[C](circular)
   INSERT X at begin
   AFTER:  LAST→[C]→[X]→[A]→[B]→[C](circular)
   X is now the first node */

/* 2. INSERT AT END */
void insertEnd(int val) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = val;
    
    if (LAST == NULL) {           // empty list
        LAST = newNode;
        newNode->next = newNode;  // points to itself
        return;
    }
    // New node points to first node (LAST->next)
    newNode->next = LAST->next;
    
    // Current LAST points to new node
    LAST->next = newNode;
    
    // Update LAST to new node (new node is now the last)
    LAST = newNode;
}
/* BEFORE: LAST→[C]→[A]→[B]→[C](circular)
   INSERT Y at end
   AFTER:  LAST→[Y]→[A]→[B]→[C]→[Y](circular)
   Y is now the last node */

/* 3. DELETE FIRST NODE */
void deleteFirst() {
    if (LAST == NULL) { printf("Empty\\n"); return; }
    struct Node* temp = LAST->next;  // temp = first node
    if (LAST == temp) {              // only one node
        free(temp); LAST = NULL; return;
    }
    LAST->next = temp->next;  // LAST points to second node
    free(temp);
}

/* 4. DISPLAY */
void display() {
    if (LAST == NULL) { printf("Empty\\n"); return; }
    struct Node* temp = LAST->next;  // start from first node
    do {
        printf("%d → ", temp->data);
        temp = temp->next;
    } while (temp != LAST->next);   // stop when back to start
    printf("(circular)\\n");
}`,trace:`KEY DIFFERENCE from SLL:
  SLL:  [A]→[B]→[C]→NULL
  CLL:  [A]→[B]→[C]→[A] (back to start)
  
ADVANTAGE:
  • Can reach any node from any starting point
  • No NULL check needed at end
  • Useful for round-robin (OS scheduling)`},{id:`dll`,title:`6. Doubly Linked List — Insert & Delete`,color:`#06b6d4`,mod:`Module 3`,marks:`10M`,simple:`WHAT IS DOUBLY LINKED LIST?
  Each node has THREE parts:
  1. prev → address of PREVIOUS node
  2. data → stores value
  3. next → address of NEXT node
  
  Can travel BOTH forward and backward!
  
  NULL ← [prev|10|next] ↔ [prev|20|next] ↔ [prev|30|next] → NULL
  
  First node: prev = NULL
  Last node:  next = NULL

NODE STRUCTURE:
  struct Node {
      struct Node *prev;
      int data;
      struct Node *next;
  };
  struct Node *HEAD = NULL;`,code:`/* 1. INSERT AT BEGINNING */
void insertBegin(int val) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->prev = NULL;    // new node has no previous
    newNode->next = HEAD;    // new node points to current first
    
    if (HEAD != NULL)
        HEAD->prev = newNode;  // old first's prev points to new
    
    HEAD = newNode;            // HEAD updated to new node
}
/* BEFORE: HEAD→[10]↔[20]↔[30]→NULL
   INSERT 5 at begin
   AFTER:  HEAD→[5]↔[10]↔[20]↔[30]→NULL */

/* 2. INSERT AT END */
void insertEnd(int val) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->next = NULL;
    
    if (HEAD == NULL) {
        newNode->prev = NULL;
        HEAD = newNode; return;
    }
    struct Node* temp = HEAD;
    while (temp->next != NULL)
        temp = temp->next;       // reach last node
    
    temp->next = newNode;        // last node's next → new
    newNode->prev = temp;        // new node's prev → old last
}

/* 3. DELETE FIRST NODE */
void deleteFirst() {
    if (HEAD == NULL) { printf("Empty\\n"); return; }
    struct Node* temp = HEAD;
    HEAD = HEAD->next;
    if (HEAD != NULL) HEAD->prev = NULL;  // new first has no prev
    free(temp);
}

/* DISPLAY FORWARD */
void displayForward() {
    struct Node* temp = HEAD;
    while (temp != NULL) {
        printf("%d ↔ ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}`,trace:`ADVANTAGES over Singly Linked List:
  1. Can go FORWARD and BACKWARD
  2. Delete a node easily — no need to find previous node
  3. Insert BEFORE a given node is easy
  4. More flexible but uses more memory (extra prev pointer)`},{id:`bst`,title:`7. Binary Search Tree (BST) — Build + Traverse`,color:`#22c55e`,mod:`Module 4`,marks:`20M ← MOST IMPORTANT`,simple:`WHAT IS BST?
  A tree where:
  • LEFT side  = values SMALLER than root
  • RIGHT side = values BIGGER than root
  • Every subtree is also a BST

HOW TO BUILD BST:
  • First value = ROOT
  • Each new value: compare with root
    → smaller? go LEFT
    → bigger? go RIGHT
  • Keep comparing until you find empty spot

3 TRAVERSALS (memorise these):
  INORDER   = Left → Root → Right  (gives SORTED order!)
  PREORDER  = Root → Left → Right
  POSTORDER = Left → Right → Root`,code:`/* BUILD BST: 45, 39, 56, 12, 34, 78 */

Insert 45 → ROOT
Insert 39 → 39 < 45 → goes LEFT of 45
Insert 56 → 56 > 45 → goes RIGHT of 45
Insert 12 → 12 < 45 → left; 12 < 39 → LEFT of 39
Insert 34 → 34 < 45 → left; 34 < 39 → left; 34 > 12 → RIGHT of 12
Insert 78 → 78 > 45 → right; 78 > 56 → RIGHT of 56

TREE DIAGRAM:
           45
          /  \\
        39    56
        /      \\
       12       78
        \\
        34

INORDER   = 12, 34, 39, 45, 56, 78  (sorted! always ascending)
PREORDER  = 45, 39, 12, 34, 56, 78
POSTORDER = 34, 12, 39, 78, 56, 45

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/* C CODE — BST NODE */
struct Node {
    int data;
    struct Node *left;
    struct Node *right;
};

/* INSERT INTO BST */
struct Node* insert(struct Node* root, int val) {
    if (root == NULL) {  // empty spot found — insert here
        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->data = val;
        newNode->left = NULL;
        newNode->right = NULL;
        return newNode;
    }
    if (val < root->data)          // go left
        root->left = insert(root->left, val);
    else if (val > root->data)     // go right
        root->right = insert(root->right, val);
    return root;
}

/* INORDER TRAVERSAL */
void inorder(struct Node* root) {
    if (root == NULL) return;
    inorder(root->left);           // left first
    printf("%d ", root->data);     // then root
    inorder(root->right);          // then right
}

/* PREORDER TRAVERSAL */
void preorder(struct Node* root) {
    if (root == NULL) return;
    printf("%d ", root->data);     // root first
    preorder(root->left);
    preorder(root->right);
}

/* SEARCH IN BST */
void search(struct Node* root, int key) {
    if (root == NULL) { printf("NOT FOUND\\n"); return; }
    if (key == root->data) { printf("FOUND\\n"); return; }
    if (key < root->data) search(root->left, key);
    else search(root->right, key);
}`,trace:`SEARCH for 34 in BST (45,39,56,12,34,78):
  Step 1: 34 < 45 → go LEFT
  Step 2: 34 < 39 → go LEFT
  Step 3: 34 > 12 → go RIGHT
  Step 4: 34 == 34 → FOUND! ✓
  Total comparisons = 4`},{id:`avl`,title:`8. AVL Tree — All 4 Rotations (MOST IMPORTANT)`,color:`#22c55e`,mod:`Module 4`,marks:`20M ← APPEARS IN 9/10 PAPERS`,simple:`WHAT IS AVL TREE?
  AVL = BST + BALANCED
  Balance Factor (BF) = Height(Left) - Height(Right)
  BF must be -1, 0, or +1 for EVERY node.
  If BF becomes +2 or -2 → apply ROTATION to fix it.

  Height of empty tree = -1
  Height of leaf node = 0

4 ROTATIONS — KNOW WHEN TO USE:
  LL rotation → inserted in LEFT of LEFT child  → Right Rotate
  RR rotation → inserted in RIGHT of RIGHT child → Left Rotate
  LR rotation → inserted in RIGHT of LEFT child → Left then Right Rotate
  RL rotation → inserted in LEFT of RIGHT child → Right then Left Rotate`,code:`BUILD AVL: 63, 9, 19, 27, 18, 108, 99, 81
(This exact data comes in EVERY paper!)

STEP 1: Insert 63
    63(BF=0)  ← balanced ✓

STEP 2: Insert 9  (9 < 63 → left)
    63(BF=+1)
   /
  9(BF=0)  ← balanced ✓

STEP 3: Insert 19  (19 < 63 → left; 19 > 9 → right of 9)
    63(BF=+2) ← UNBALANCED!
   /
  9(BF=-1)
   \\
   19

  Inserted in RIGHT of LEFT child of 63 → LR ROTATION!
  LR = Do LEFT rotation on 9, then RIGHT rotation on 63
  
  After LR:
      19(BF=0)
     /  \\
    9    63  ← balanced ✓

STEP 4: Insert 27  (27 > 19 → right; 27 < 63 → left of 63)
      19
     /  \\
    9    63
         /
        27  ← balanced ✓

STEP 5: Insert 18  (18 < 19 → left; 18 > 9 → right of 9)
      19(BF=0)
     /  \\
    9    63
     \\   /
     18  27  ← balanced ✓

STEP 6: Insert 108  (108 > 19,63 → right of 63; 108 > 27 → right of 27? 
        Actually: 108>19→right, 108>63→right of 63, 108>27→right of 27? 
        Wait: 27 is LEFT of 63, 108>63→right subtree of 63 is 27's sibling)
        108 > 63 → right of 63
      19
     /    \\
    9      63
     \\    /  \\
     18  27  108  ← balanced ✓

STEP 7: Insert 99  (99>19, 99>63, 99<108 → left of 108)
      19
     /    \\
    9      63(BF=-1)
     \\    /  \\
     18  27  108(BF=+1)
             /
            99  ← balanced ✓

STEP 8: Insert 81  (81>19, 81>63, 81<108, 81<99 → left of 99)
      19
     /    \\
    9      63(BF=-2) ← UNBALANCED!
     \\    /  \\
     18  27  108(BF=+2) ← also unbalanced
             /
            99(BF=+1)
            /
           81

  Fix at 63: inserted in LEFT of RIGHT child of 63 → RL ROTATION!
  RL = Right rotate on 108, then Left rotate on 63
  
  After RL rotation (99 comes up):
      19
     /    \\
    9      99(BF=0)
     \\    /  \\
     18  63  108
         /  \\
        27   81  ← balanced ✓

FINAL AVL TREE:
           19
          /    \\
         9      99
          \\    /  \\
          18  63  108
             /  \\
            27   81

Rotations used:
  After step 3 (insert 19): LR rotation
  After step 8 (insert 81): RL rotation`,trace:`4 ROTATION DIAGRAMS (write in exam):

LL ROTATION (Right Rotate):      RR ROTATION (Left Rotate):
    A(BF=+2)                         A(BF=-2)
   /                                   \\
  B(BF=+1)    →    B                    B(BF=-1)   →    B
 /                / \\                    \\              / \\
C                C   A                    C            A   C

LR ROTATION (Left then Right):   RL ROTATION (Right then Left):
    A(BF=+2)                         A(BF=-2)
   /                                   \\
  B(BF=-1)    →    C                    B(BF=+1)    →    C
   \\              / \\                  /                / \\
    C            B   A                C                A   B`},{id:`stackll`,title:`9. Stack Using Linked List`,color:`#a855f7`,mod:`Module 3`,marks:`10M`,simple:`STACK USING LINKED LIST = push/pop at the FRONT (HEAD)
  No overflow — dynamic memory.
  TOP = HEAD of linked list.
  
  Push = insert at beginning
  Pop  = delete from beginning`,code:`#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};
struct Node *TOP = NULL;  // TOP = head

/* PUSH — add at front */
void push(int val) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->next = TOP;   // new node → current top
    TOP = newNode;         // TOP updated to new node
    printf("Pushed: %d\\n", val);
}

/* POP — remove from front */
int pop() {
    if (TOP == NULL) {
        printf("Stack Empty! (Underflow)\\n");
        return -1;
    }
    struct Node* temp = TOP;
    int val = temp->data;
    TOP = TOP->next;       // TOP moves to next node
    free(temp);
    return val;
}

/* DISPLAY */
void display() {
    struct Node* temp = TOP;
    printf("Stack (top→bottom): ");
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\\n");
}

void main() {
    push(10);
    push(20);
    push(30);     // TOP→[30]→[20]→[10]→NULL
    display();    // 30 20 10
    printf("Popped: %d\\n", pop()); // 30
    display();    // 20 10
}`,trace:`TRACE:
push(10): TOP → [10|NULL]
push(20): TOP → [20|→] → [10|NULL]
push(30): TOP → [30|→] → [20|→] → [10|NULL]
pop():    removes 30, returns 30
          TOP → [20|→] → [10|NULL]`},{id:`queue`,title:`10. Circular Queue — Insert & Delete`,color:`#eab308`,mod:`Module 2`,marks:`10M`,simple:`WHAT IS CIRCULAR QUEUE?
  Normal queue wastes space (front keeps moving right).
  Circular Queue = rear wraps back to index 0 when it reaches end.
  
  Use MODULO (%) to wrap around:
  rear = (rear + 1) % MAX
  
  FULL condition:  (rear + 1) % MAX == front
  EMPTY condition: front == -1`,code:`#include <stdio.h>
#define MAX 5

int CQ[MAX];
int front = -1, rear = -1;

/* INSERT (Enqueue) */
void enqueue(int val) {
    if ((rear + 1) % MAX == front) {
        printf("Queue FULL (Overflow)\\n"); return;
    }
    if (front == -1)       // first element being inserted
        front = 0;
    rear = (rear + 1) % MAX;  // move rear (wraps around)
    CQ[rear] = val;
    printf("Inserted: %d\\n", val);
}

/* DELETE (Dequeue) */
int dequeue() {
    if (front == -1) {
        printf("Queue EMPTY (Underflow)\\n"); return -1;
    }
    int val = CQ[front];
    if (front == rear)         // last element removed
        front = rear = -1;
    else
        front = (front + 1) % MAX;  // move front (wraps around)
    return val;
}

/* DISPLAY */
void display() {
    if (front == -1) { printf("Empty\\n"); return; }
    printf("Queue: ");
    int i = front;
    while (1) {
        printf("%d ", CQ[i]);
        if (i == rear) break;
        i = (i + 1) % MAX;
    }
    printf("\\n");
}`,trace:`TRACE (MAX=5):
enqueue(10): front=0, rear=0, CQ=[10,_,_,_,_]
enqueue(20): front=0, rear=1, CQ=[10,20,_,_,_]
enqueue(30): front=0, rear=2, CQ=[10,20,30,_,_]
dequeue():   returns 10, front=1, CQ=[_,20,30,_,_]
enqueue(40): front=1, rear=3, CQ=[_,20,30,40,_]
enqueue(50): front=1, rear=4, CQ=[_,20,30,40,50]
enqueue(60): rear wraps! rear=(4+1)%5=0
             CQ=[60,20,30,40,50], rear=0 ← wraps to index 0 ✓`}];function Ee(){let[e,t]=(0,l.useState)(`avl`),[n,r]=(0,l.useState)(`code`);return(0,O.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`14px 12px`},children:[(0,O.jsxs)(`div`,{style:{background:`linear-gradient(135deg,rgba(239,68,68,0.15),rgba(34,197,94,0.08))`,border:`2px solid rgba(239,68,68,0.4)`,borderRadius:14,padding:`14px 18px`,marginBottom:16},children:[(0,O.jsx)(`div`,{style:{fontSize:18,fontWeight:900,color:`#ef4444`,marginBottom:4},children:`📖 SIMPLE ANSWERS — EXAM TOMORROW AUG 19`}),(0,O.jsx)(`div`,{style:{fontSize:12,color:`var(--text-muted)`},children:`Tap any topic below → see simple explanation + exact code + trace. Written for beginners. No complicated words.`}),(0,O.jsx)(`div`,{style:{marginTop:10,padding:`10px 14px`,background:`rgba(34,197,94,0.1)`,border:`1px solid rgba(34,197,94,0.25)`,borderRadius:8,fontSize:13,fontWeight:700,color:`#22c55e`},children:`⭐ Study in this order: AVL → BST → Infix/Postfix → Recursion → SLL → CLL`})]}),Te.map(i=>{let a=e===i.id;return(0,O.jsxs)(`div`,{style:{marginBottom:10,borderRadius:12,border:`2px solid ${a?i.color:i.color+`44`}`,background:`var(--bg-card)`,overflow:`hidden`},children:[(0,O.jsxs)(`div`,{style:{padding:`13px 16px`,cursor:`pointer`,display:`flex`,gap:12,alignItems:`center`},onClick:()=>t(a?null:i.id),children:[(0,O.jsxs)(`div`,{style:{flex:1},children:[(0,O.jsxs)(`div`,{style:{display:`flex`,gap:7,flexWrap:`wrap`,marginBottom:5},children:[(0,O.jsx)(`span`,{style:{background:i.color,color:`white`,padding:`3px 10px`,borderRadius:6,fontSize:11,fontWeight:800},children:i.mod}),(0,O.jsx)(`span`,{style:{background:i.color+`22`,color:i.color,padding:`3px 9px`,borderRadius:6,fontSize:11,fontWeight:700},children:i.marks})]}),(0,O.jsx)(`div`,{style:{fontSize:14,fontWeight:800,color:`var(--text-primary)`},children:i.title})]}),(0,O.jsx)(`span`,{style:{fontSize:22,color:`var(--text-muted)`,flexShrink:0},children:a?`▲`:`▼`})]}),a&&(0,O.jsxs)(`div`,{style:{borderTop:`2px solid ${i.color}33`},children:[(0,O.jsx)(`div`,{style:{display:`flex`,gap:0,borderBottom:`1px solid ${i.color}22`},children:[{id:`simple`,label:`📘 Simple Explanation`},{id:`code`,label:`💻 Code + Answer`},{id:`trace`,label:`📊 Trace / Diagram`}].map(e=>(0,O.jsx)(`button`,{onClick:()=>r(e.id),style:{flex:1,padding:`10px 6px`,border:`none`,borderBottom:n===e.id?`3px solid ${i.color}`:`3px solid transparent`,background:n===e.id?i.color+`15`:`transparent`,color:n===e.id?i.color:`var(--text-muted)`,cursor:`pointer`,fontFamily:`inherit`,fontSize:12,fontWeight:700},children:e.label},e.id))}),(0,O.jsxs)(`div`,{style:{padding:`14px 16px`},children:[n===`simple`&&(0,O.jsx)(`pre`,{style:{fontFamily:`var(--font-mono)`,fontSize:13,lineHeight:2,color:`#86efac`,whiteSpace:`pre-wrap`,background:`rgba(34,197,94,0.05)`,padding:`14px 16px`,borderRadius:10,border:`1px solid rgba(34,197,94,0.2)`,margin:0},children:i.simple}),n===`code`&&(0,O.jsx)(`pre`,{style:{fontFamily:`var(--font-mono)`,fontSize:12,lineHeight:1.95,color:`#e6edf3`,whiteSpace:`pre-wrap`,background:`rgba(0,0,0,0.4)`,padding:`16px 18px`,borderRadius:12,border:`1px solid ${i.color}33`,margin:0,overflowX:`auto`},children:i.code}),n===`trace`&&(0,O.jsx)(`pre`,{style:{fontFamily:`var(--font-mono)`,fontSize:12,lineHeight:1.95,color:`#fde68a`,whiteSpace:`pre-wrap`,background:`rgba(234,179,8,0.05)`,padding:`14px 16px`,borderRadius:10,border:`1px solid rgba(234,179,8,0.2)`,margin:0},children:i.trace})]})]})]},i.id)}),(0,O.jsxs)(`div`,{style:{marginTop:20,padding:`16px`,background:`rgba(239,68,68,0.08)`,border:`2px solid rgba(239,68,68,0.3)`,borderRadius:12},children:[(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:900,color:`#ef4444`,marginBottom:10},children:`⚡ EXAM TIPS — Write These for EASY MARKS`}),[`📝 Always write struct Node definition before any Linked List answer (2 marks free)`,`📊 Always draw a diagram showing boxes with arrows — even rough = 4–6 marks`,`⚖️ In AVL: write BF value beside EVERY node after each insertion`,`📋 In Infix→Postfix: make a table with Symbol | Stack | Output columns`,`🌳 BST Inorder = always sorted ascending (easy 2 marks if you remember this)`,`🔁 For Recursion: always write "Base Case" and "Recursive Case" clearly labeled`,`⏱️ End every answer with Time Complexity: O(n) or O(log n) = 2 easy marks`].map((e,t)=>(0,O.jsx)(`div`,{style:{fontSize:12,color:`var(--text-primary)`,padding:`6px 0`,borderBottom:t<6?`1px solid rgba(255,255,255,0.04)`:`none`,lineHeight:1.7},children:e},t))]})]})}function De(){let[e,t]=(0,l.useState)(`all`),[n,r]=(0,l.useState)(0),[i,a]=(0,l.useState)(!1),[o,s]=(0,l.useState)({correct:0,attempted:0}),c=e===`all`?pe:pe.filter(t=>t.module===e),u=c[n%c.length],d=c.length>0?Math.round(n/c.length*100):0,f=e=>{e!==void 0&&s(t=>({correct:t.correct+ +!!e,attempted:t.attempted+1})),a(!1),r(e=>(e+1)%c.length)},p=()=>{r(0),a(!1),s({correct:0,attempted:0})};return c.length===0?(0,O.jsxs)(`div`,{className:`page-header`,children:[(0,O.jsx)(`h1`,{className:`page-title`,children:`Quiz Mode`}),(0,O.jsx)(`p`,{children:`No questions found for selected filter.`})]}):(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`div`,{className:`page-header`,children:[(0,O.jsx)(`h1`,{className:`page-title`,children:`Quiz Mode`}),(0,O.jsx)(`p`,{className:`page-subtitle`,children:`Practice all DSA PYQs in flash-card style`})]}),(0,O.jsxs)(`div`,{className:`stats-row mb-20`,children:[(0,O.jsxs)(`div`,{className:`stat-card`,children:[(0,O.jsx)(`div`,{className:`stat-value`,style:{color:`var(--accent)`},children:c.length}),(0,O.jsx)(`div`,{className:`stat-label`,children:`Total Questions`})]}),(0,O.jsxs)(`div`,{className:`stat-card`,children:[(0,O.jsx)(`div`,{className:`stat-value`,style:{color:`var(--blue)`},children:n+1}),(0,O.jsx)(`div`,{className:`stat-label`,children:`Current`})]}),(0,O.jsxs)(`div`,{className:`stat-card`,children:[(0,O.jsx)(`div`,{className:`stat-value`,style:{color:`var(--green)`},children:o.correct}),(0,O.jsx)(`div`,{className:`stat-label`,children:`Correct`})]}),(0,O.jsxs)(`div`,{className:`stat-card`,children:[(0,O.jsx)(`div`,{className:`stat-value`,style:{color:`var(--text-muted)`},children:o.attempted}),(0,O.jsx)(`div`,{className:`stat-label`,children:`Attempted`})]})]}),(0,O.jsx)(`div`,{className:`tabs mb-20`,children:[`all`,`Module 1`,`Module 2`,`Module 3`,`Module 4`].map(n=>(0,O.jsx)(`button`,{className:`tab ${e===n?`active`:``}`,onClick:()=>{t(n),p()},children:n===`all`?`All Modules`:n},n))}),(0,O.jsx)(`div`,{className:`progress-bar-wrap mb-20`,children:(0,O.jsx)(`div`,{className:`progress-bar-fill`,style:{width:`${d}%`,background:`var(--accent)`}})}),(0,O.jsxs)(`div`,{className:`quiz-card`,children:[(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:16,flexWrap:`wrap`},children:[(0,O.jsx)(`span`,{className:`badge badge-muted`,children:u.module}),(0,O.jsx)(`span`,{style:{fontSize:11,color:`var(--text-muted)`},children:u.topic}),(0,O.jsxs)(`span`,{style:{marginLeft:`auto`,fontSize:11,color:`var(--text-muted)`},children:[`Q `,n%c.length+1,`/`,c.length]})]}),(0,O.jsxs)(`div`,{style:{background:`rgba(255,255,255,0.03)`,border:`1px solid var(--border)`,borderRadius:10,padding:`16px 18px`,marginBottom:20},children:[(0,O.jsx)(`p`,{className:`quiz-question`,style:{margin:0},children:u.q}),(0,O.jsxs)(`div`,{style:{marginTop:10,display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,O.jsxs)(`span`,{style:{background:`var(--accent-light)`,color:`var(--accent)`,border:`1px solid rgba(99,102,241,0.3)`,borderRadius:5,padding:`2px 8px`,fontSize:11,fontWeight:700},children:[u.marks,`M`]}),u.year&&(0,O.jsx)(`span`,{style:{background:`rgba(255,255,255,0.05)`,color:`var(--text-muted)`,border:`1px solid var(--border)`,borderRadius:5,padding:`2px 8px`,fontSize:11,fontFamily:`var(--font-mono)`},children:u.year})]})]}),i?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`div`,{className:`quiz-answer`,children:[(0,O.jsx)(`div`,{style:{fontSize:11,fontWeight:700,color:`var(--accent)`,textTransform:`uppercase`,letterSpacing:`0.6px`,marginBottom:8},children:`💡 Key Points / How to Approach`}),(0,O.jsx)(`p`,{style:{lineHeight:1.7,color:`var(--text-secondary)`},children:(e=>{let t=e.q.toLowerCase();return t.includes(`avl`)&&(t.includes(`63`)||t.includes(`insert`))?`Insert one by one. Check BF = height(left) - height(right) after each insert. BF must be -1,0,+1. Four rotations: LL→right rotate, RR→left rotate, LR→left then right, RL→right then left. Key rotations: 9,19→LL(RR rotation at 63), 19,27→LR(LR rotation at 9), 18→RL(RL rotation at 27), 99→LL(RR rotation at 108), 81→RL rotation.`:t.includes(`postfix`)&&t.includes(`stack`)&&t.includes(`infix`)?`Algorithm: Scan left→right. Operand→output. (→push. )→pop until (. Operator→pop ≥ precedence then push. End→pop all. Precedence: $ > */% > +-. Trace in table: Symbol | Stack | Output`:t.includes(`postfix`)&&(t.includes(`eval`)||t.includes(`2 3`)||t.includes(`9 3`))?`Scan left→right. Digit→push. Operator→pop b then pop a, compute a OP b, push result. Final stack top = answer. Example: 2 3 1 * + 9 - → push 2,3,1 → *: pop 1,3 → 3, push 3 → push 5 → push 9 → -: 5-9 = -4`:t.includes(`push`)||t.includes(`pop`)||t.includes(`stack`)?`Stack ADT: top=-1 (empty). Push: if(top==MAX-1) overflow; else stack[++top]=item. Pop: if(top==-1) underflow; else return stack[top--]. Peek: return stack[top]. Display: loop from top to 0.`:t.includes(`circular`)&&t.includes(`linked`)?`Circular LL: last->next points to head. Insert at begin: new->next=head, find last, last->next=new, head=new. Insert at end: new->next=head, find last, last->next=new. Display: do-while loop until ptr==head again.`:t.includes(`doubly`)||t.includes(`dll`)?`DLL: Node has prev, data, next. Insert begin: new->next=head, head->prev=new, head=new. Insert end: traverse to last, last->next=new, new->prev=last. Delete first: head=head->next, head->prev=NULL.`:t.includes(`bst`)||t.includes(`binary search tree`)?`BST: left<root<right. Insert: if key<root go left, else go right, insert at NULL. Inorder traversal of BST = sorted order. Build 45,39,56,12,34,78,32,10,89,54,67,81 starting from 45 as root.`:t.includes(`recursion`)||t.includes(`recursive`)?`Recursion types: Direct (f calls f), Indirect (f calls g calls f), Tail (recursive call is last), Non-tail (operations after recursive call), Linear (one recursive call), Tree (multiple recursive calls). Base case stops recursion.`:t.includes(`hanoi`)?`Tower of Hanoi(n, from, to, aux): if n==0 return; hanoi(n-1, from, aux, to); print move n from→to; hanoi(n-1, aux, to, from). Total moves = 2^n - 1. For n=3: 7 moves.`:t.includes(`fibonacci`)?`fib(0)=0, fib(1)=1, fib(n)=fib(n-1)+fib(n-2). Trace fib(5): fib(5)=fib(4)+fib(3)=fib(3)+fib(2)+fib(2)+fib(1)=...=5. Series: 0,1,1,2,3,5,8,13,21...`:t.includes(`queue`)?`Linear Queue: front=-1,rear=-1. Enqueue: if rear==MAX-1 full; queue[++rear]=item; if front==-1 front=0. Dequeue: item=queue[front++]. Circular Queue: full when (rear+1)%MAX==front. Use modulo for wrap-around.`:t.includes(`singly`)||t.includes(`linked list`)?`SLL: head pointer. Insert begin: new->next=head, head=new. Insert end: traverse to last, last->next=new. Delete first: temp=head, head=head->next, free(temp). Delete last: traverse to 2nd-last, 2nd-last->next=NULL.`:t.includes(`traversal`)||t.includes(`inorder`)?`Inorder: L-Root-R (sorted for BST). Preorder: Root-L-R (tree copy). Postorder: L-R-Root (delete tree). All three use recursion: base case if root==NULL return.`:t.includes(`rotation`)||t.includes(`avl`)?`LL: Insert in left of left child → Right Rotate at unbalanced node. RR: Insert in right of right child → Left Rotate. LR: Insert in right of left child → Left rotate left child, then Right rotate. RL: Insert in left of right child → Right rotate right child, then Left rotate.`:`Review this topic in the Theory section. Key points: Definition → Algorithm/Code → Example → Trace.`})(u)})]}),(0,O.jsxs)(`div`,{style:{display:`flex`,gap:10,marginTop:16,flexWrap:`wrap`},children:[(0,O.jsx)(`button`,{className:`btn btn-primary`,style:{background:`var(--green)`},onClick:()=>f(!0),children:`✓ I knew this`}),(0,O.jsx)(`button`,{className:`btn btn-outline`,style:{borderColor:`var(--red)`,color:`var(--red)`},onClick:()=>f(!1),children:`✗ Need to revise`}),(0,O.jsx)(`button`,{className:`btn btn-ghost btn-sm`,onClick:p,style:{marginLeft:`auto`},children:`Reset All`})]})]}):(0,O.jsxs)(`div`,{style:{display:`flex`,gap:10,flexWrap:`wrap`},children:[(0,O.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>a(!0),children:`Show Answer / Hint`}),(0,O.jsx)(`button`,{className:`btn btn-outline`,onClick:()=>f(),children:`Skip →`}),(0,O.jsx)(`button`,{className:`btn btn-ghost btn-sm`,onClick:p,children:`Reset`})]})]}),o.attempted>0&&(0,O.jsxs)(`div`,{className:`card mt-16`,style:{textAlign:`center`},children:[(0,O.jsx)(`div`,{style:{fontSize:13,color:`var(--text-muted)`,marginBottom:8},children:`Session Score`}),(0,O.jsxs)(`div`,{style:{fontSize:28,fontWeight:700,color:`var(--green)`},children:[Math.round(o.correct/o.attempted*100),`%`]}),(0,O.jsxs)(`div`,{style:{fontSize:12,color:`var(--text-muted)`,marginTop:4},children:[o.correct,` correct out of `,o.attempted,` attempted`]})]})]})}function Oe(){return(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`div`,{className:`page-header`,children:[(0,O.jsx)(`h1`,{className:`page-title`,children:`Exam Strategy`}),(0,O.jsx)(`p`,{className:`page-subtitle`,children:`DSA (24CS304) — MCE Hassan · August 2, 2026 · 3 Hours · 100 Marks`})]}),(0,O.jsxs)(`div`,{className:`alert alert-danger mb-20`,children:[(0,O.jsx)(`span`,{className:`alert-icon`,children:`🚨`}),(0,O.jsxs)(`div`,{className:`alert-content`,children:[(0,O.jsx)(`strong`,{children:`LAST ATTEMPT — Stay Calm & Strategic`}),`You need only 40/100 to pass. The 5 must-know topics (AVL, Infix→Postfix, Circular LL, SLL, BST) alone = 40-50 marks. Never leave a question completely blank.`]})]}),(0,O.jsxs)(`div`,{className:`card mb-20`,children:[(0,O.jsxs)(`div`,{style:{fontSize:14,fontWeight:700,color:`var(--text-primary)`,marginBottom:16,display:`flex`,alignItems:`center`,gap:8},children:[(0,O.jsx)(ee,{size:16,color:`var(--accent)`}),` Paper Pattern`]}),(0,O.jsx)(`div`,{style:{overflowX:`auto`},children:(0,O.jsxs)(`table`,{className:`theory-table`,children:[(0,O.jsx)(`thead`,{children:(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`th`,{children:`Feature`}),(0,O.jsx)(`th`,{children:`Details`})]})}),(0,O.jsx)(`tbody`,{children:[[`Duration`,`3 Hours (180 minutes)`],[`Total Marks`,`100`],[`Total Questions`,`8 questions (2 per module × 4 modules)`],[`Questions to Answer`,`Any 5 — but at least 1 from EACH module`],[`Marks per Question`,`20 marks each`],[`Pass Mark`,`40 out of 100 (40%)`],[`Subject Code`,`24CS304`]].map(([e,t],n)=>(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{style:{fontWeight:600,color:`var(--text-primary)`},children:e}),(0,O.jsx)(`td`,{children:t})]},n))})]})})]}),(0,O.jsxs)(`div`,{className:`card mb-20`,children:[(0,O.jsxs)(`div`,{style:{fontSize:14,fontWeight:700,color:`var(--text-primary)`,marginBottom:16,display:`flex`,alignItems:`center`,gap:8},children:[(0,O.jsx)(w,{size:16,color:`var(--orange)`}),` Time Budget — 180 Minutes`]}),(0,O.jsx)(`div`,{className:`card-grid card-grid-2`,children:[{label:`Read all 8 questions`,time:`5 min`,color:`var(--blue)`,tip:`Mark the 5 you will attempt. Plan order.`},{label:`Q from Module 1`,time:`30 min`,color:`var(--red)`,tip:`Infix→Postfix trace OR Stack operations`},{label:`Q from Module 2`,time:`30 min`,color:`var(--orange)`,tip:`Recursion (Tower of Hanoi / Fibonacci) + Queue + SLL operations`},{label:`Q from Module 3`,time:`30 min`,color:`var(--yellow)`,tip:`Circular LL OR Doubly LL OR linked stack/queue`},{label:`Q from Module 4`,time:`30 min`,color:`var(--green)`,tip:`AVL tree 63,9,19,27,18,108,99,81 OR BST construct + Inorder/Preorder/Postorder traversals`},{label:`5th Question (easiest)`,time:`20 min`,color:`var(--purple)`,tip:`Pick from remaining — recursion, queue, theory`},{label:`Revision`,time:`35 min`,color:`var(--accent)`,tip:`Check traces, verify algorithms, add diagrams`}].map((e,t)=>(0,O.jsxs)(`div`,{style:{background:`var(--bg-secondary)`,border:`1px solid var(--border)`,borderRadius:8,padding:`12px 14px`,borderLeft:`3px solid ${e.color}`},children:[(0,O.jsxs)(`div`,{className:`flex items-center justify-between mb-6`,children:[(0,O.jsx)(`span`,{style:{fontSize:13,fontWeight:600,color:`var(--text-primary)`},children:e.label}),(0,O.jsx)(`span`,{style:{background:e.color+`22`,color:e.color,border:`1px solid ${e.color}44`,borderRadius:6,padding:`2px 8px`,fontSize:12,fontWeight:700},children:e.time})]}),(0,O.jsx)(`div`,{style:{fontSize:12,color:`var(--text-muted)`},children:e.tip})]},t))})]}),(0,O.jsxs)(`div`,{className:`card mb-20`,children:[(0,O.jsxs)(`div`,{style:{fontSize:14,fontWeight:700,color:`var(--text-primary)`,marginBottom:16,display:`flex`,alignItems:`center`,gap:8},children:[(0,O.jsx)(ue,{size:16,color:`var(--green)`}),` 5 Topics = Pass Guaranteed (40+ marks)`]}),(0,O.jsxs)(`div`,{className:`alert alert-success mb-12`,children:[(0,O.jsx)(`span`,{className:`alert-icon`,children:`✅`}),(0,O.jsx)(`div`,{className:`alert-content`,children:`Write these 5 correctly: definition + algorithm + trace/diagram → you WILL pass. Each is worth 8-10 marks.`})]}),[{topic:`AVL Tree: 63,9,19,27,18,108,99,81`,mod:`M4`,freq:9,marks:`10M`,tip:`Module 4 ONLY. Insert step-by-step, show BF after each insert, name each rotation (LL/RR/LR/RL)`},{topic:`Infix to Postfix (stack trace table)`,mod:`M1`,freq:8,marks:`10M`,tip:`Draw the table: Symbol | Stack | Output. Use correct precedence rules.`},{topic:`Circular Linked List (insert begin/end)`,mod:`M3`,freq:8,marks:`10M`,tip:`Show last->next=head. Draw diagram. Write C function with do-while display.`},{topic:`Singly Linked List (insert/delete/search)`,mod:`M2`,freq:8,marks:`10M`,tip:`insertBegin, deleteFirst, deleteAfterKey. Use malloc, draw before/after diagrams.`},{topic:`BST: 45,39,56,12,34,78,32,10,89,54,67,81`,mod:`M4`,freq:6,marks:`10M`,tip:`Draw tree step by step. Show inorder, preorder, postorder traversal.`}].map((e,t)=>(0,O.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:`12px 0`,borderBottom:t<4?`1px solid rgba(255,255,255,0.04)`:`none`,flexWrap:`wrap`},children:[(0,O.jsx)(`div`,{style:{width:28,height:28,borderRadius:8,background:`var(--green-light)`,color:`var(--green)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:13,fontWeight:700,flexShrink:0},children:t+1}),(0,O.jsxs)(`div`,{style:{flex:1},children:[(0,O.jsxs)(`div`,{style:{fontSize:13,fontWeight:600,color:`var(--text-primary)`,marginBottom:4},children:[e.topic,(0,O.jsx)(`span`,{style:{fontSize:11,marginLeft:8,padding:`1px 6px`,borderRadius:4,background:`var(--bg-secondary)`,color:`var(--text-muted)`},children:e.mod}),(0,O.jsxs)(`span`,{style:{fontSize:11,marginLeft:4,padding:`1px 6px`,borderRadius:4,background:`var(--red-light)`,color:`var(--red)`,fontWeight:700},children:[`Appeared `,e.freq,`×`]})]}),(0,O.jsxs)(`div`,{style:{fontSize:12,color:`var(--text-muted)`},children:[`💡 `,e.tip]})]}),(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:700,color:`var(--green)`,background:`var(--green-light)`,border:`1px solid rgba(34,197,94,0.3)`,borderRadius:6,padding:`4px 10px`,height:`fit-content`,flexShrink:0},children:e.marks})]},t))]}),(0,O.jsxs)(`div`,{className:`card mb-20`,children:[(0,O.jsx)(`div`,{style:{fontSize:14,fontWeight:700,color:`var(--text-primary)`,marginBottom:16},children:`✍️ Answer Writing Format`}),(0,O.jsxs)(`div`,{className:`card-grid card-grid-2`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{style:{fontSize:12,fontWeight:600,color:`var(--accent)`,marginBottom:10,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`For Algorithm/Theory Questions`}),[`1. Definition (1-2 sentences)`,`2. Algorithm / Pseudocode (numbered steps)`,`3. Trace / Example (tabular form)`,`4. Diagram (box/arrow diagram)`,`5. Time Complexity (mention O(n) or O(log n))`].map((e,t)=>(0,O.jsx)(`div`,{style:{fontSize:13,color:`var(--text-secondary)`,padding:`6px 0`,borderBottom:t<4?`1px solid rgba(255,255,255,0.04)`:`none`},children:e},t))]}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{style:{fontSize:12,fontWeight:600,color:`var(--orange)`,marginBottom:10,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`For C Program Questions`}),[`1. #include<stdio.h>, #include<stdlib.h>`,`2. struct Node definition (if linked list)`,`3. Global variables (head, top, front, rear)`,`4. Function implementations with comments`,`5. void main() to demonstrate usage`].map((e,t)=>(0,O.jsx)(`div`,{style:{fontSize:13,color:`var(--text-secondary)`,padding:`6px 0`,borderBottom:t<4?`1px solid rgba(255,255,255,0.04)`:`none`},children:e},t))]})]})]}),(0,O.jsxs)(`div`,{className:`card mb-20`,children:[(0,O.jsx)(`div`,{style:{fontSize:14,fontWeight:700,color:`var(--text-primary)`,marginBottom:16},children:`⚡ Partial Marks Strategy`}),(0,O.jsxs)(`div`,{className:`alert alert-warning mb-12`,children:[(0,O.jsx)(`span`,{className:`alert-icon`,children:`💰`}),(0,O.jsxs)(`div`,{className:`alert-content`,children:[(0,O.jsx)(`strong`,{children:`Even wrong answers can earn marks!`}),`Examiners award marks for effort. Correct structure + correct variable names + partially correct logic = 5-6 marks.`]})]}),[{action:`Write correct struct definition for linked list`,marks:`2-3 marks`},{action:`Write correct function signature and local variables`,marks:`1-2 marks`},{action:`Write partially correct algorithm/logic`,marks:`3-5 marks`},{action:`Write correct definition and explanation`,marks:`3-4 marks`},{action:`Draw correct diagram (even if code is wrong)`,marks:`2-3 marks`}].map((e,t)=>(0,O.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`10px 0`,borderBottom:t<4?`1px solid rgba(255,255,255,0.04)`:`none`,flexWrap:`wrap`,gap:8},children:[(0,O.jsxs)(`div`,{style:{fontSize:13,color:`var(--text-secondary)`},children:[`✦ `,e.action]}),(0,O.jsxs)(`div`,{style:{fontSize:12,fontWeight:700,color:`var(--yellow)`,background:`var(--yellow-light)`,border:`1px solid rgba(234,179,8,0.3)`,borderRadius:5,padding:`2px 8px`,flexShrink:0},children:[`+`,e.marks]})]},t))]}),(0,O.jsxs)(`div`,{className:`card`,children:[(0,O.jsx)(`div`,{style:{fontSize:14,fontWeight:700,color:`var(--text-primary)`,marginBottom:16},children:`📋 Exam Day Checklist — August 2, 2026`}),[{icon:`📄`,item:`Hall ticket printed and ready`,time:`Night before`},{icon:`🪪`,item:`College ID card`,time:`Night before`},{icon:`🖊️`,item:`2-3 pens + pencil for diagrams (tree drawing)`,time:`Night before`},{icon:`😴`,item:`Sleep by 10 PM on August 1`,time:`Aug 1`},{icon:`🌅`,item:`Wake up early, eat light breakfast`,time:`Aug 2 morning`},{icon:`📖`,item:`Quick revision: AVL 63,9,19... + Infix→Postfix trace ONLY`,time:`1 hour before`},{icon:`⏱️`,item:`Reach exam hall 30 minutes early`,time:`Aug 2`},{icon:`🧘`,item:`Read ALL 8 questions for first 5 minutes, circle which 5 to attempt`,time:`In exam`},{icon:`🚫`,item:`Never spend more than 35 minutes on any one question`,time:`In exam`},{icon:`✅`,item:`Never leave any question completely blank — write definition at minimum`,time:`In exam`}].map((e,t)=>(0,O.jsxs)(`div`,{style:{display:`flex`,gap:10,padding:`10px 0`,borderBottom:t<9?`1px solid rgba(255,255,255,0.04)`:`none`,alignItems:`flex-start`},children:[(0,O.jsx)(`span`,{style:{fontSize:16,flexShrink:0},children:e.icon}),(0,O.jsx)(`div`,{style:{flex:1,fontSize:13,color:`var(--text-primary)`},children:e.item}),(0,O.jsx)(`div`,{style:{fontSize:11,color:`var(--text-muted)`,flexShrink:0},children:e.time})]},t))]})]})}var ke=[{id:1,name:`Module 1`,color:`#ef4444`,title:`Stack, Infix→Postfix, Structures, Pointers`,bestQ:`Infix→Postfix (freq=8) + Stack Push/Pop (freq=7)`,risk:`MEDIUM`,topics:[{t:`Infix→Postfix Conversion`,f:8,y:`ALL 8 papers`},{t:`Postfix Evaluation`,f:7,y:`2025,2024,2023,2021,2018`},{t:`Stack Push/Pop/Peek`,f:7,y:`ALL 7 papers`},{t:`Structures + Pointers`,f:5,y:`2025,2022,2021,2018,2019`},{t:`DS Classification`,f:4,y:`2025,2022,2018,2019`}]},{id:2,name:`Module 2`,color:`#f97316`,title:`Recursion, Queues, Singly Linked List`,bestQ:`Recursion (freq=7) + Circular Queue (freq=6) + SLL (freq=8)`,risk:`MEDIUM`,topics:[{t:`Singly Linked List — Insert/Delete`,f:8,y:`ALL 8 papers`},{t:`Recursion + Tower of Hanoi`,f:7,y:`ALL 7 papers`},{t:`Circular Queue`,f:6,y:`2025,2024,2022,2021,2019,2018`},{t:`Linear Queue`,f:5,y:`2025,2024,2021,2019,2018`}]},{id:3,name:`Module 3`,color:`#a855f7`,title:`Circular LL, Doubly LL, Stack/Queue via LL`,bestQ:`Circular LL (freq=8) + Doubly LL (freq=6)`,risk:`MEDIUM`,topics:[{t:`Circular Linked List`,f:8,y:`ALL 8 papers`},{t:`Doubly Linked List`,f:6,y:`2025,2023,2022,2021,2019,2018`},{t:`Stack using Linked List`,f:5,y:`2025,2024,2022,2019,2018`},{t:`Queue using Linked List`,f:4,y:`2025,2022,2021,2018`}]},{id:4,name:`Module 4`,color:`#22c55e`,title:`AVL Tree, BST, Tree Traversals ← DO FULL`,bestQ:`AVL Tree (freq=9, ALL papers) + BST (freq=6)`,risk:`LOWEST ← BEST FULL MODULE`,topics:[{t:`AVL Tree — All Rotations`,f:9,y:`ALL 9 papers ← CERTAIN`},{t:`BST — Insert/Search/Traverse`,f:6,y:`2025,2024,2023,2022,2019,2018`},{t:`Tree Traversals`,f:5,y:`2025,2024,2023,2022,2019`}]}],Ae=[{id:`avl`,rank:1,color:`#22c55e`,mod:`MODULE 4 — Q7 or Q8`,marks:`20M`,certain:`100% — 9/9 Papers ← NEVER MISSED`,type:`NUMERICAL+DIAGRAM`,icon:`⚖️`,title:`AVL Tree — Construct with All 4 Rotations`,strategy:`Draw tree after EACH insertion. Write BF at each node. Name the rotation. Draw before+after = 20M.`,exactQ:`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFIED EXACT QUESTION — 2025 Makeup:
"Construct an AVL tree by inserting the following elements in the given order:
 63, 9, 19, 27, 18, 108, 99, 81. Clearly indicate type of rotation in each step."

SAME DATA ASKED IN: Dec-2019, Jul/Aug-2021, Mar/Apr-2024, Apr/May-2023, Mar-2022
(This exact data 63,9,19,27,18,108,99,81 appeared in 5+ papers — MEMORISE THIS)

ALSO ASKED — Feb/Mar-2025 Supp:
"Construct AVL tree for the given values: 21, 26, 30, 9, 4, 14, 28, 18, 15"

ALSO ASKED — Dec-2019:
"Create an AVL for 25, 26, 28, 23, 22, 24. Clearly indicate type of rotation in each step."

ALSO ASKED — Sept/Oct-2022:
"Clearly outline the four categories of rotations performed in an AVL tree."

ALSO ASKED — Feb/Mar-2025 Supp:
"Explain with examples all four rotations of AVL tree."`,fullAnswer:`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AVL TREE — WRITE THIS DEFINITION FIRST (2 marks):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  AVL tree = Height-balanced BST where for every node:
  Balance Factor (BF) = Height(Left subtree) − Height(Right subtree)
  BF must be −1, 0, or +1. If BF = ±2 → apply rotation.

4 ROTATION TYPES (know WHEN to apply each):
  LL (Single Right Rotation)  → Node inserted in LEFT of LEFT child
  RR (Single Left Rotation)   → Node inserted in RIGHT of RIGHT child
  LR (Double: Left then Right)→ Node inserted in RIGHT of LEFT child
  RL (Double: Right then Left)→ Node inserted in LEFT of RIGHT child

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP-BY-STEP: 63, 9, 19, 27, 18, 108, 99, 81
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Insert 63:
    63(BF=0)  ← balanced ✓

Insert 9:   (9 < 63 → left)
    63(BF=1)
   /
  9(BF=0)   ← balanced ✓

Insert 19:  (19 < 63 → left; 19 > 9 → right of 9)
    63(BF=2) ← UNBALANCED!
   /
  9(BF=-1)
      19(BF=0)
  TYPE: LR (inserted in RIGHT of LEFT child of 63)
  LR ROTATION on 9-19-63:
  Step 1 — Left rotate on 9: 19 becomes root of left subtree
  Step 2 — Right rotate on 63: 19 becomes new root

  After LR rotation:
      19(BF=0)
     /      9   63   ← balanced ✓

Insert 27:  (27 > 19 → right; 27 < 63 → left of 63)
      19(BF=-1)
     /      9   63(BF=1)
        /
       27(BF=0)   ← balanced ✓

Insert 18:  (18 < 19 → left; 18 > 9 → right of 9)
      19(BF=0→1→2?) Check BFs...
     /      9   63
        /
     18  27
  BF of 9 = -1 (right child 18). BF of 19: left height=2, right height=2 → BF=0 ✓ balanced

  Actually tree is:
      19(BF=0)
     /      9   63(BF=1)
       /
    18  27    ← balanced ✓

Insert 108: (108 > 19 → right; 108 > 63 → right of 63; 108 > 27 → right of 27)
      19(BF=-1)
     /        9      63(BF=-1)
         /       18  27  108   ← balanced ✓

Insert 99:  (99 > 19,63,27 → right of 27? No: 99>63, 99<108 → left of 108)
      19(BF=-2) ← Check: left height=2, right height=3 → BF=-1... 
  Let me recalculate:
  Tree after inserting 108:
      19
     /        9      63
         /       18  27  108

  Insert 99: 99>19→right, 99>63→right, 99<108→left of 108
      19
     /        9      63
         /       18  27  108(BF=1)
             /
            99(BF=0)

  Check BF of 63: left height=1(27), right height=2(108,99) → BF=-1 ✓
  Check BF of 19: left height=2, right height=3 → BF=-1 ✓ (still balanced)

Insert 81:  (81>19,63→right; 81<108→left; 81<99→left of 99)
      19
     /        9      63(BF=-2) ← UNBALANCED!
         /       18  27  108(BF=2)
             /
            99(BF=1)
            /
           81

  TYPE: RL rotation on 63-108-99 subtree:
  (inserted in LEFT of RIGHT child of 63)
  Step 1 — Right rotate on 108: 99 becomes root
  Step 2 — Left rotate on 63: 99 takes 63's place

  After RL rotation at 63:
      19
     /        9      99(BF=0)
         /       18  63  108
         /          27   81  ← balanced ✓ Final AVL Tree

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL AVL TREE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           19(BF=0)
          /                 9(BF=-1)    99(BF=0)
                   /                  18      63(BF=0)   108(BF=0)
                 /                   27      81

Rotations used:
  After 19: LR rotation (at node 63)
  After 81: RL rotation (at node 63→99)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4 ROTATIONS SUMMARY (memorise — asked directly in Sept/Oct-2022):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  LL (Right Rotation):          RR (Left Rotation):
  Imbalance at A (BF=+2):       Imbalance at A (BF=-2):
      A                              A
     /            →  B                        →  B
    B                /               B            /    /                C   A                        A   C
  C                                    C

  LR (Left-Right):              RL (Right-Left):
  Imbalance at A (BF=+2),       Imbalance at A (BF=-2),
  B (left child) has BF=-1:     B (right child) has BF=+1:
      A                              A
     /         → C                             → C
    B             /                  B             /                 B   A               /             A   B
      C                             C`},{id:`bst`,rank:2,color:`#22c55e`,mod:`MODULE 4 — Q7 or Q8`,marks:`20M`,certain:`100% — 6/9 Papers + traversals in 5`,type:`NUMERICAL+DIAGRAM`,icon:`🌳`,title:`BST — Construct, Traverse (Inorder/Pre/Post), Search`,strategy:`Insert one by one drawing tree each step. Write all 3 traversals. Show search comparisons.`,exactQ:`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFIED EXACT QUESTION — Mar-2022, Apr/May-2023:
"Construct the binary search tree for the values:
 45, 39, 56, 12, 34, 78, 32, 10, 89, 54, 67, 81.
 Also write the steps to search for 67."

ALSO ASKED — Dec-2018:
"Create a Binary search tree using 45, 39, 56, 12, 34, 78, 32, 10, 89, 54.
 Write the algorithm for searching a value in BST."

ALSO ASKED — Feb/Mar-2025 Supp:
"Construct Binary search tree for 45, 15, 79, 90, 10, 55, 12, 20, 50."

ALSO ASKED — Dec-2019, Mar/Apr-2024:
"Create a binary tree for 10, 12, 5, 4, 20, 8, 7, 15, 13 and give
 inorder, preorder and postorder traversal."

ALSO ASKED — Feb-2025 Makeup:
"Write a suitable algorithm to: i) Insert a node into a binary search tree.
 ii) Count the number of nodes in BST."

ALSO ASKED — Feb/Mar-2025 Supp:
"Write suitable algorithm: i) Search for a given value in BST
 ii) Count the number of internal nodes"`,fullAnswer:`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BST PROPERTY (write first — 2 marks):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Left subtree: all values LESS THAN root
  Right subtree: all values GREATER THAN root
  Every subtree is itself a BST.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONSTRUCT BST: 45, 39, 56, 12, 34, 78, 32, 10, 89, 54, 67, 81
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Insert 45  → root
  Insert 39  → 39 < 45 → left of 45
  Insert 56  → 56 > 45 → right of 45
  Insert 12  → 12 < 45 → left; 12 < 39 → left of 39
  Insert 34  → 34 < 45 → left; 34 < 39 → left; 34 > 12 → right of 12
  Insert 78  → 78 > 45 → right; 78 > 56 → right of 56
  Insert 32  → 32 < 45; 32 < 39; 32 > 12; 32 < 34 → left of 34
  Insert 10  → 10 < 45; 10 < 39; 10 < 12 → left of 12
  Insert 89  → 89 > 45; 89 > 56; 89 > 78 → right of 78
  Insert 54  → 54 > 45; 54 < 56 → left of 56
  Insert 67  → 67 > 45; 67 > 56; 67 < 78 → left of 78... wait
              67 > 56, 67 < 78, 67 > 54 → check: 54 is left of 56
              Actually: 67 > 56 → right subtree of 56 → 67 < 78 → left of 78
  Insert 81  → 81 > 45; 81 > 56; 81 > 78; 81 < 89 → left of 89

  FINAL BST:
                    45
                 /                     39         56
              /          /                12          54     78
           /                 /             10  34             67    89
              /                   /
             32                  81

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3 TRAVERSALS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  INORDER (L→Root→R) = SORTED ASCENDING:
  10, 12, 32, 34, 39, 45, 54, 56, 67, 78, 81, 89  ✓

  PREORDER (Root→L→R):
  45, 39, 12, 10, 34, 32, 56, 54, 78, 67, 89, 81

  POSTORDER (L→R→Root):
  10, 32, 34, 12, 39, 54, 67, 81, 89, 78, 56, 45

  MEMORY TRICK:
  IN = L Root R  (Root in MIDDLE position)
  PRE = Root L R (Root at BEGINNING/PRE)
  POST = L R Root (Root at END/POST)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEARCH for 67 (step by step — 4 marks):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Step 1: Compare 67 with root 45. 67 > 45 → go RIGHT
  Step 2: Compare 67 with 56. 67 > 56 → go RIGHT
  Step 3: Compare 67 with 78. 67 < 78 → go LEFT
  Step 4: Compare 67 with 67. 67 = 67 → FOUND! ✓
  Total comparisons = 4

BST SEARCH ALGORITHM:
  Search(root, key):
    if root == NULL: return "NOT FOUND"
    if key == root.data: return "FOUND at current node"
    if key < root.data: Search(root.left, key)
    else: Search(root.right, key)`},{id:`infix`,rank:3,color:`#ef4444`,mod:`MODULE 1 — Q1 or Q2`,marks:`20M`,certain:`100% — 8/8 Papers ← NEVER MISSED`,type:`NUMERICAL`,icon:`📊`,title:`Infix → Postfix Conversion using Stack (Full Trace Table)`,strategy:`Operator precedence table first. Then trace table: Symbol | Action | Stack | Output. Every row = marks.`,exactQ:`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFIED EXACT QUESTION — Dec-2018:
"Write an algorithm/C function to convert infix expression into postfix form
 using stack. Tabulate the tracing by considering the expression:
 8 4 / 8 * 7 2 - + 2 $"
 (Note: $ means exponentiation in this context)

VERIFIED EXACT QUESTION — Apr/May-2023, Mar/Apr-2024, Jul/Aug-2021:
"Write a C function/algorithm to evaluate the postfix expression. Apply algorithm
 to evaluate: 9 3 4 * 8 + 4 / -"

VERIFIED EXACT QUESTION — Feb/Mar-2025 Supp:
"Write functions/algorithms to implement push(), pop() and peek() operations
 of stack. Trace the conversion of following infix to postfix:
 A * B + C * D"

VERIFIED — Mar-2022, Apr/May-2023:
"Write C functions to implement push(), pop() and peek() operations of stack.
 Also convert: (A + B) * (C - D)"

ALSO ASKED — Jan/Feb-2018:
"Write an algorithm to evaluate a postfix expression considering expression
 with only single digit non-negative integer numbers."`,fullAnswer:`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OPERATOR PRECEDENCE (write first — 2 marks):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  $ or ^ (exponent)  = Highest (3)
  *, /               = Medium  (2)
  +, -               = Low     (1)
  (                  = Never popped by +,-,*,/

ALGORITHM (write in 5 steps):
  1. Scan infix LEFT to RIGHT
  2. If OPERAND (A,B,1,2...) → write to OUTPUT directly
  3. If '(' → PUSH to stack
  4. If ')' → POP & output until '(' found, discard both parentheses
  5. If OPERATOR → POP operators of HIGHER or EQUAL precedence first,
     then PUSH current operator

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXAMPLE 1: A * B + C * D → Postfix
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ┌─────────┬───────────────────────────────┬───────────┬──────────────┐
  │ Symbol  │ Action                        │ Stack     │ Output       │
  ├─────────┼───────────────────────────────┼───────────┼──────────────┤
  │ A       │ Operand → output              │ (empty)   │ A            │
  │ *       │ Stack empty → push            │ *         │ A            │
  │ B       │ Operand → output              │ *         │ A B          │
  │ +       │ + prec(1) ≤ *(2) → pop *     │ (empty)   │ A B *        │
  │         │ Stack empty → push +          │ +         │ A B *        │
  │ C       │ Operand → output              │ +         │ A B * C      │
  │ *       │ * prec(2) > +(1) → push       │ + *       │ A B * C      │
  │ D       │ Operand → output              │ + *       │ A B * C D    │
  │ END     │ Pop * → output                │ +         │ A B * C D *  │
  │         │ Pop + → output                │ (empty)   │ A B * C D * +│
  └─────────┴───────────────────────────────┴───────────┴──────────────┘
  POSTFIX = A B * C D * +  ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXAMPLE 2: (A + B) * (C - D) → Postfix
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ┌─────────┬───────────────────────────────┬──────────┬──────────────────┐
  │ Symbol  │ Action                        │ Stack    │ Output           │
  ├─────────┼───────────────────────────────┼──────────┼──────────────────┤
  │ (       │ Push (                        │ (        │                  │
  │ A       │ Output                        │ (        │ A                │
  │ +       │ Push (stack top is '(')       │ ( +      │ A                │
  │ B       │ Output                        │ ( +      │ A B              │
  │ )       │ Pop until ( → pop +, discard (│ (empty)  │ A B +            │
  │ *       │ Stack empty → push            │ *        │ A B +            │
  │ (       │ Push (                        │ * (      │ A B +            │
  │ C       │ Output                        │ * (      │ A B + C          │
  │ -       │ Stack top is ( → push -       │ * ( -    │ A B + C          │
  │ D       │ Output                        │ * ( -    │ A B + C D        │
  │ )       │ Pop until ( → pop -, discard (│ *        │ A B + C D -      │
  │ END     │ Pop *                         │ (empty)  │ A B + C D - *    │
  └─────────┴───────────────────────────────┴──────────┴──────────────────┘
  POSTFIX = A B + C D - *  ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
POSTFIX EVALUATION: 9 3 4 * 8 + 4 / -
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  RULE: Operand → PUSH. Operator → POP 2, calculate, PUSH result.
  (Second popped is LEFT operand, first popped is RIGHT operand)

  ┌─────────┬──────────────────────────────────────┬──────────────┐
  │ Symbol  │ Action                               │ Stack        │
  ├─────────┼──────────────────────────────────────┼──────────────┤
  │ 9       │ Push 9                               │ 9            │
  │ 3       │ Push 3                               │ 9  3         │
  │ 4       │ Push 4                               │ 9  3  4      │
  │ *       │ Pop 4,3 → 3*4=12, Push 12           │ 9  12        │
  │ 8       │ Push 8                               │ 9  12  8     │
  │ +       │ Pop 8,12 → 12+8=20, Push 20          │ 9  20        │
  │ 4       │ Push 4                               │ 9  20  4     │
  │ /       │ Pop 4,20 → 20/4=5, Push 5           │ 9  5         │
  │ -       │ Pop 5,9 → 9-5=4, Push 4             │ 4            │
  └─────────┴──────────────────────────────────────┴──────────────┘
  RESULT = 4  ✓`},{id:`sll`,rank:4,color:`#f97316`,mod:`MODULE 2 — Q3 or Q4`,marks:`20M`,certain:`100% — 8/8 Papers ← NEVER MISSED`,type:`DIAGRAM+ALGORITHM`,icon:`🔗`,title:`Singly Linked List — Insert at Begin/End/Position + Delete`,strategy:`Draw boxes with arrows. Show BEFORE → AFTER state for each operation. Write algorithm steps clearly.`,exactQ:`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFIED EXACT QUESTION — Feb-2025 Makeup:
"Design a C function to insert a node in the beginning of a singly linked list
 and display the same."
"Design a C function to delete the first node in a given singly linked list."

VERIFIED EXACT QUESTION — Feb/Mar-2025 Supp:
"Write C functions/algorithms to implement:
 i) Insertion at the beginning of the linked list.
 ii) Deletion at the end of the linked list."
"Assume a four node single linked list with data values 15, 25, 40, 50:
 i) Insert a node with data value 30 in between nodes 25 and 40
 ii) Delete node with data value 40"

VERIFIED — Mar/Apr-2024:
"Implement a C function to: i) Insert a node in the beginning of singly linked list
 ii) Display the elements in singly linked list"

VERIFIED — Jul/Aug-2021:
"Write the following algorithm for single linked list:
 i) Inserting ITEM as the first node. ii) Deleting the node with the given ITEM."

VERIFIED — Sept/Oct-2022:
"Given a singly linked list with start pointer:
 i) Displaying contents of last node ii) Searching for value x"`,fullAnswer:`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SINGLY LINKED LIST NODE STRUCTURE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  struct Node {
    int data;
    struct Node *next;
  };
  
  HEAD → [15|→] → [25|→] → [40|→] → [50|NULL]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INSERT AT BEGINNING (most asked):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  BEFORE: HEAD → [15] → [25] → [40] → [50] → NULL
  Insert node with data = 5:

  ALGORITHM:
  void insertBegin(int val) {
    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->next = HEAD;  // new node points to old head
    HEAD = newNode;        // head now points to new node
  }

  DIAGRAM:
  newNode = [5|?]
  Step 1: newNode->next = HEAD = [5|→]→[15]→[25]→...
  Step 2: HEAD = newNode
  AFTER: HEAD → [5] → [15] → [25] → [40] → [50] → NULL ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INSERT AT END:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  void insertEnd(int val) {
    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->next = NULL;
    if (HEAD == NULL) { HEAD = newNode; return; }
    struct Node* temp = HEAD;
    while (temp->next != NULL)  // traverse to last node
      temp = temp->next;
    temp->next = newNode;       // link last node to new node
  }

  AFTER inserting 60:
  HEAD → [15] → [25] → [40] → [50] → [60] → NULL ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INSERT BETWEEN 25 and 40 (insert 30): Feb/Mar-2025 Supp exact
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  BEFORE: HEAD → [15] → [25] → [40] → [50] → NULL
  Insert 30 after 25:
  
  Step 1: Traverse to node with data=25 (call it prevNode)
  Step 2: newNode = [30|?]
  Step 3: newNode->next = prevNode->next  (30 points to 40)
  Step 4: prevNode->next = newNode        (25 points to 30)
  
  AFTER: HEAD → [15] → [25] → [30] → [40] → [50] → NULL ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DELETE FIRST NODE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  void deleteFirst() {
    if (HEAD == NULL) { print("List empty"); return; }
    struct Node* temp = HEAD;
    HEAD = HEAD->next;  // move head to second node
    free(temp);         // free memory of old first node
  }
  BEFORE: HEAD → [15] → [25] → [40] → NULL
  AFTER:  HEAD → [25] → [40] → NULL ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DELETE AT END:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  void deleteEnd() {
    if(HEAD==NULL) { print("Empty"); return; }
    if(HEAD->next==NULL) { free(HEAD); HEAD=NULL; return; }
    struct Node* temp = HEAD;
    while(temp->next->next != NULL)  // find second-to-last
      temp = temp->next;
    free(temp->next);
    temp->next = NULL;
  }
  BEFORE: HEAD → [15] → [25] → [40] → NULL
  AFTER:  HEAD → [15] → [25] → NULL ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DISPLAY (traverse and print):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  void display() {
    struct Node* temp = HEAD;
    while(temp != NULL) {
      printf("%d → ", temp->data);
      temp = temp->next;
    }
    printf("NULL
");
  }`},{id:`recursion`,rank:5,color:`#a855f7`,mod:`MODULE 2 — Q3`,marks:`20M`,certain:`100% — 7/7 Papers ← NEVER MISSED`,type:`THEORY+NUMERICAL`,icon:`🔁`,title:`Recursion — Types + Tower of Hanoi + Fibonacci Trace`,strategy:`Definition + 4 types + Tower of Hanoi algorithm + trace for n=3 + dry run = 20M.`,exactQ:`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFIED EXACT QUESTION — Feb-2025 Makeup, Feb/Mar-2025 Supp, Mar/Apr-2024:
"Define recursion. Explain the different types of recursion with examples."

VERIFIED EXACT QUESTION — Jan/Feb-2018:
"Define recursion. Outline an algorithm to solve the problem to Tower of Hanoi."

VERIFIED EXACT QUESTION — Feb-2025 Makeup:
"Identify the Base and Recursive case for the Fibonacci series and write a C
 program to print the Fibonacci series using recursion. Hence, trace the same
 for Fibonacci(5)."

VERIFIED EXACT QUESTION — Mar-2022 (TRICKY ONE — study this version):
"Consider the following recursive function:
 int fun(int n){ if(n==0) return(0); return(n+fun(n-1)); }
 void main(){ int x; x=fun(5); printf('x=%d',x); }
 Answer: i) Define recursion ii) Compute the output
         iii) Find the base case iv) Find the recursive case
         v) What is the type of recursion employed?"

VERIFIED — Apr/May-2023 (similar code question):
"int func(int n){ if(n==0) return 0; return(n+func(n-2)); }
 void main(){ int x; x=func(6); print('x=%d',x); }
 i) Compute the output ii) Base case iii) Recursive case iv) Type of recursion"

VERIFIED — Feb/Mar-2025 Supp:
"Write a recursive function to implement Tower of Hanoi."`,fullAnswer:`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEFINITION (2 marks):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Recursion = A function that calls itself directly or indirectly.
  Every recursive function must have:
  1. BASE CASE: Condition where recursion stops
  2. RECURSIVE CASE: Function calls itself with smaller/simpler input

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4 TYPES OF RECURSION (4 marks):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  1. DIRECT RECURSION: Function directly calls itself
     Example: void A(){ A(); }

  2. INDIRECT RECURSION: A calls B, B calls A
     Example: void A(){ B(); } void B(){ A(); }

  3. TAIL RECURSION: Recursive call is the LAST statement
     Example: void print(int n){ if(n==0) return;
               print(n-1); printf("%d",n); }
     (Can be converted to loop easily)

  4. NON-TAIL RECURSION: Work is done AFTER recursive call returns
     Example: void print(int n){ if(n==0) return;
               printf("%d",n); print(n-1); }
     (Cannot easily convert to loop)

  5. LINEAR RECURSION: One recursive call per invocation
     Example: factorial(n) = n * factorial(n-1)

  6. TREE RECURSION: Multiple recursive calls per invocation
     Example: Fibonacci: fib(n) = fib(n-1) + fib(n-2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOWER OF HANOI (most asked — 6 marks):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Problem: Move n disks from Source peg to Destination peg
           using an Auxiliary peg.
  Rules:
  1. Move only one disk at a time
  2. Never place a larger disk on a smaller disk

  ALGORITHM (C function):
  void TOH(int n, char source, char dest, char aux) {
    if (n == 1) {
      printf("Move disk 1 from %c to %c
", source, dest);
      return;
    }
    TOH(n-1, source, aux, dest);  // move n-1 disks to aux
    printf("Move disk %d from %c to %c
", n, source, dest);
    TOH(n-1, aux, dest, source);  // move n-1 disks from aux to dest
  }
  Call: TOH(3, 'A', 'C', 'B')

  TRACE for n=3, Source=A, Dest=C, Aux=B:
  TOH(3,A,C,B)
  ├── TOH(2,A,B,C)
  │   ├── TOH(1,A,C,B) → Move disk 1: A→C
  │   ├──              → Move disk 2: A→B
  │   └── TOH(1,C,B,A) → Move disk 1: C→B
  ├──                  → Move disk 3: A→C
  └── TOH(2,B,C,A)
      ├── TOH(1,B,A,C) → Move disk 1: B→A
      ├──              → Move disk 2: B→C
      └── TOH(1,A,C,B) → Move disk 1: A→C

  All moves: A→C, A→B, C→B, A→C, B→A, B→C, A→C
  Total moves = 2ⁿ - 1 = 2³-1 = 7 moves ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CODE TRACE ANSWER (Mar-2022 exact):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  int fun(int n){ if(n==0) return(0); return(n+fun(n-1)); }
  fun(5) = 5 + fun(4) = 5+4+fun(3) = 5+4+3+fun(2) = 5+4+3+2+fun(1)
         = 5+4+3+2+1+fun(0) = 5+4+3+2+1+0 = 15
  x = 15

  Base case:    if(n==0) return(0)
  Recursive case: return(n + fun(n-1))
  Type: TAIL RECURSION (recursive call is last computation)`},{id:`circular`,rank:6,color:`#a855f7`,mod:`MODULE 3 — Q5 or Q6`,marks:`20M`,certain:`100% — 8/8 Papers ← NEVER MISSED`,type:`DIAGRAM+ALGORITHM`,icon:`🔄`,title:`Circular Linked List — Insert at Begin/End + Delete`,strategy:`Draw circular diagram with arrow from LAST → FIRST. Show LAST pointer technique. Algorithm + diagram = 20M.`,exactQ:`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFIED EXACT QUESTION — Feb-2025 Makeup:
"Write a C function to insert a new node at the beginning and end of a
 circular linked list."

VERIFIED EXACT QUESTION — Feb/Mar-2025 Supp:
"Write C functions/algorithms to implement:
 i) Insert a new node at the beginning of circular linked list
 ii) Insert a new node at the end of circular linked list"

VERIFIED — Apr/May-2023:
"Write C functions to insert a new node at the beginning and end of a
 circular linked list."

VERIFIED — Dec-2019:
"With a neat diagram demonstrate the structural details of a circular list.
 Design C functions to add a node to the beginning of a circular list and
 delete the last node."

VERIFIED — Mar-2022:
"Ascertain the advantages of circular linked list over ordinary linked list.
 Design C functions to delete the first node and last node of the given
 circular linked list."

VERIFIED — Sept/Oct-2022, Mar/Apr-2024:
"What is a circularly linked list? Write a C program to create a circularly
 linked list by adding nodes to the end."`,fullAnswer:`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CIRCULAR LINKED LIST DIAGRAM:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  In CLL, last node's NEXT points back to FIRST node (HEAD).
  We maintain a LAST pointer for O(1) insert at both ends.

  LAST → [D] → [A] → [B] → [C] → [D] (back to first)
           ↑___________________________________|
  
  HEAD = LAST->next (first node always accessible via LAST)

  struct Node {
    int data;
    struct Node *next;
  };

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INSERT AT BEGINNING (between LAST and first node):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  BEFORE:  LAST→[D]→[A]→[B]→[C]→[D] (circular)
  Insert X at beginning:

  void insertBegin(int val) {
    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->data = val;
    if (LAST == NULL) {           // empty list
      LAST = newNode;
      newNode->next = newNode;    // points to itself
      return;
    }
    newNode->next = LAST->next;   // new node → old first
    LAST->next = newNode;         // LAST → new node
  }

  Step 1: newNode(X)->next = LAST->next = A
  Step 2: LAST->next = newNode(X)
  AFTER: LAST→[D]→[X]→[A]→[B]→[C]→[D] (circular) ✓
  (X is now the first/head node)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INSERT AT END (new node becomes new LAST):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  BEFORE:  LAST→[D]→[A]→[B]→[C]→[D] (circular)
  Insert Y at end:

  void insertEnd(int val) {
    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->data = val;
    if (LAST == NULL) {
      LAST = newNode;
      newNode->next = newNode;
      return;
    }
    newNode->next = LAST->next;  // new node → first node
    LAST->next = newNode;        // old LAST → new node
    LAST = newNode;              // LAST updated to new node
  }

  Step 1: newNode(Y)->next = LAST->next = A (first)
  Step 2: LAST(D)->next = Y
  Step 3: LAST = Y
  AFTER: LAST→[Y]→[A]→[B]→[C]→[D]→[Y] (circular) ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DELETE FIRST NODE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  void deleteFirst() {
    if (LAST == NULL) { print("Empty"); return; }
    struct Node* temp = LAST->next;  // temp = first node
    if (LAST == temp) {              // only one node
      free(temp); LAST = NULL; return;
    }
    LAST->next = temp->next;         // LAST → second node
    free(temp);
  }

DELETE LAST NODE:
  void deleteLast() {
    if (LAST == NULL) { print("Empty"); return; }
    if (LAST->next == LAST) { free(LAST); LAST=NULL; return; }
    struct Node* temp = LAST->next;  // temp = first node
    while (temp->next != LAST)       // find node before LAST
      temp = temp->next;
    temp->next = LAST->next;         // second-to-last → first
    free(LAST);
    LAST = temp;                     // update LAST
  }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADVANTAGES over Singly Linked List:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  • Can traverse from any node, need not start from HEAD
  • Efficient for round-robin scheduling (no NULL checks at end)
  • Insertion at both beginning and end is O(1) using LAST pointer
  • No NULL pointer in the list (no wasted link)`}],je=[{id:`stack`,rank:`B1`,color:`#ef4444`,mod:`MODULE 1 — Q1`,marks:`10M`,certain:`100% — Every Paper`,icon:`📚`,title:`Stack — Push, Pop, Peek C Functions (Array)`,exactQ:`VERIFIED — Feb-2025 Makeup:
"Define Stack. Write C functions to perform Push, Pop and display operations on a stack."
VERIFIED — Feb/Mar-2025 Supp:
"Write functions/algorithms to implement push(), pop() and peek() operations of stack."
VERIFIED — Mar-2022, Apr/May-2023:
"Write C functions to implement following stack operations using array: i) Push ii) Pop iii) Peek"`,fullAnswer:`STACK DEFINITION:
  Stack = Linear data structure following LIFO (Last In, First Out).
  TOP points to topmost element. Initially TOP = -1 (empty).

  #define MAX 10
  int stack[MAX], top = -1;

PUSH OPERATION:
  void push(int item) {
    if (top == MAX-1) {
      printf("Stack Overflow! Cannot push.
");
      return;
    }
    top++;
    stack[top] = item;
    printf("Pushed: %d
", item);
  }

POP OPERATION:
  int pop() {
    if (top == -1) {
      printf("Stack Underflow! Cannot pop.
");
      return -1;
    }
    int item = stack[top];
    top--;
    return item;
  }

PEEK OPERATION:
  int peek() {
    if (top == -1) {
      printf("Stack is empty.
");
      return -1;
    }
    return stack[top];
  }

DISPLAY OPERATION:
  void display() {
    if (top == -1) { printf("Stack empty.
"); return; }
    printf("Stack (top to bottom): ");
    for (int i = top; i >= 0; i--)
      printf("%d ", stack[i]);
    printf("
");
  }

TRACE EXAMPLE (Push 10, 20, 30 then Pop):
  push(10): top=0, stack=[10]
  push(20): top=1, stack=[10,20]
  push(30): top=2, stack=[10,20,30]  ← 30 is top
  pop():    returns 30, top=1, stack=[10,20]`},{id:`doubly`,rank:`B2`,color:`#06b6d4`,mod:`MODULE 3 — Q5 or Q6`,marks:`10M`,certain:`6/8 Papers`,icon:`↔️`,title:`Doubly Linked List — Insert + Delete + Advantages`,exactQ:`VERIFIED — Feb-2025 Makeup:
"What are the advantages of Doubly linked list over Singly linked list?
 Write a C function to insert a node in the beginning of a Doubly Linked List."
VERIFIED — Feb/Mar-2025 Supp:
"Write C functions/algorithms to implement DLL:
 i) Insert node at end of DLL ii) Delete first node iii) Count nodes with even values."
VERIFIED — Apr/May-2023:
"What are the advantages of DLL? Write C function to insert a node after a given node in DLL."`,fullAnswer:`NODE STRUCTURE:
  struct Node {
    int data;
    struct Node *prev;
    struct Node *next;
  };

  NULL ← [PREV|10|NEXT] ↔ [PREV|20|NEXT] ↔ [PREV|30|NEXT] → NULL
  First node: prev = NULL  |  Last node: next = NULL

INSERT AT BEGINNING:
  void insertBegin(int val) {
    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->prev = NULL;
    newNode->next = HEAD;
    if (HEAD != NULL) HEAD->prev = newNode;
    HEAD = newNode;
  }
  BEFORE: HEAD → [10] ↔ [20] ↔ [30] → NULL
  AFTER:  HEAD → [5] ↔ [10] ↔ [20] ↔ [30] → NULL ✓

INSERT AT END:
  void insertEnd(int val) {
    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->data = val; newNode->next = NULL;
    if (HEAD == NULL) { newNode->prev=NULL; HEAD=newNode; return; }
    struct Node* temp = HEAD;
    while (temp->next != NULL) temp = temp->next;
    temp->next = newNode;
    newNode->prev = temp;
  }

DELETE FIRST NODE:
  void deleteFirst() {
    if (HEAD == NULL) return;
    struct Node* temp = HEAD;
    HEAD = HEAD->next;
    if (HEAD != NULL) HEAD->prev = NULL;
    free(temp);
  }

ADVANTAGES over SLL:
  1. Can traverse in BOTH directions (forward and backward)
  2. Deletion is easier — no need for previous pointer separately
  3. Can insert BEFORE a given node easily
  4. More efficient for certain operations`},{id:`cqueue`,rank:`B3`,color:`#eab308`,mod:`MODULE 2 — Q3 or Q4`,marks:`10M`,certain:`6/8 Papers`,icon:`🔁`,title:`Circular Queue — Insert, Delete (with diagram)`,exactQ:`VERIFIED — Feb-2025 Makeup:
"List the different types of Queues and write the code fragment for insert,
 delete and display the contents of Circular Queue."
VERIFIED — Feb/Mar-2025 Supp:
"Write C functions/algorithms to implement insertion, deletion and display
 functions of circular queue."
VERIFIED — Mar-2022:
"Develop C functions to implement insertion and deletion in a circular queue."`,fullAnswer:`CIRCULAR QUEUE — WHY NEEDED?
  In linear queue, after dequeue, front moves right. Even if array has
  empty spaces at left side, we can't use them. SOLUTION = Circular Queue.
  Rear wraps around to index 0 when it reaches end.

  #define MAX 5
  int CQ[MAX], front = -1, rear = -1;

INSERT (Enqueue):
  void enqueue(int val) {
    if ((rear + 1) % MAX == front) {
      printf("Queue Full (Overflow)
"); return;
    }
    if (front == -1) front = 0;         // first element
    rear = (rear + 1) % MAX;
    CQ[rear] = val;
  }

DELETE (Dequeue):
  int dequeue() {
    if (front == -1) {
      printf("Queue Empty (Underflow)
"); return -1;
    }
    int val = CQ[front];
    if (front == rear) front = rear = -1;  // last element removed
    else front = (front + 1) % MAX;
    return val;
  }

DIAGRAM (MAX=5):
  After enqueue(10,20,30):
  Index: [0]  [1]  [2]  [3]  [4]
          10   20   30   --   --
          ↑f        ↑r

  After dequeue() → removes 10:
  Index:  --   20   30   --   --
               ↑f   ↑r

  After enqueue(40,50,60):
  Index:  60   20   30   40   50
          ↑r   ↑f           
  (60 wraps to index 0)`},{id:`stackll`,rank:`B4`,color:`#ef4444`,mod:`MODULE 3 — Q5 or Q6`,marks:`10M`,certain:`5/8 Papers`,icon:`📚`,title:`Stack using Linked List — Push + Pop`,exactQ:`VERIFIED — Feb-2025 Makeup, Feb/Mar-2025 Supp, Mar/Apr-2024:
"Write a C function to implement stack operations using linked list."
VERIFIED — Sept/Oct-2022:
"How to represent a stack using linked list. Write the algorithms for push and pop
 operations on such a representation."`,fullAnswer:`STACK USING LINKED LIST:
  TOP = head of linked list (push/pop at front)
  No overflow (dynamic memory). Underflow when TOP==NULL.

  struct Node {
    int data;
    struct Node* next;
  };
  struct Node* TOP = NULL;

PUSH:
  void push(int val) {
    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->next = TOP;  // new node points to current top
    TOP = newNode;        // top updated to new node
    printf("Pushed: %d
", val);
  }

POP:
  int pop() {
    if (TOP == NULL) {
      printf("Stack Underflow!
"); return -1;
    }
    struct Node* temp = TOP;
    int val = temp->data;
    TOP = TOP->next;  // top moves to next node
    free(temp);
    return val;
  }

PEEK:
  int peek() {
    if (TOP == NULL) { printf("Empty
"); return -1; }
    return TOP->data;
  }

TRACE: Push 10, 20, 30 then Pop:
  push(10): TOP→[10|NULL]
  push(20): TOP→[20|→]→[10|NULL]
  push(30): TOP→[30|→]→[20|→]→[10|NULL]
  pop():    removes 30, returns 30. TOP→[20|→]→[10|NULL]`},{id:`trees`,rank:`B5`,color:`#22c55e`,mod:`MODULE 4 — Q7 (sub)`,marks:`8M`,certain:`5/9 Papers`,icon:`🌲`,title:`Tree Traversals — Inorder, Preorder, Postorder (recursive)`,exactQ:`VERIFIED — Dec-2019, Mar/Apr-2024:
"Create a binary tree for 10, 12, 5, 4, 20, 8, 7, 15, 13 and give
 inorder, preorder and postorder traversal."
VERIFIED — Feb/Mar-2025 Supp:
"Write C functions for inorder, preorder and postorder traversal of binary tree."`,fullAnswer:`BINARY TREE: 10, 12, 5, 4, 20, 8, 7, 15, 13
(Insert as BST first, then traverse)

             10
           /              5      12
         /     /          4   8  (11→)  20
           /        /
          7   (9)   15
              Note: construct as given

TRAVERSAL FUNCTIONS (C code — each 3 marks):

INORDER (Left → Root → Right):
  void inorder(struct Node* root) {
    if (root == NULL) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
  }
  Result: 4, 5, 7, 8, 10, 12, 13, 15, 20

PREORDER (Root → Left → Right):
  void preorder(struct Node* root) {
    if (root == NULL) return;
    printf("%d ", root->data);
    preorder(root->left);
    preorder(root->right);
  }
  Result: 10, 5, 4, 8, 7, 12, 20, 15, 13

POSTORDER (Left → Right → Root):
  void postorder(struct Node* root) {
    if (root == NULL) return;
    postorder(root->left);
    postorder(root->right);
    printf("%d ", root->data);
  }
  Result: 4, 7, 8, 5, 13, 15, 20, 12, 10

KEY: INORDER of BST = SORTED ASCENDING (always!)`}],Me=[{day:`Day 1 — Aug 11 (Mon)`,focus:`AVL Tree`,topics:[`Study: 4 rotations (LL,RR,LR,RL)`,`Practice: 63,9,19,27,18,108,99,81 (exact PYQ)`],hours:3,color:`#22c55e`,status:`today`},{day:`Day 2 — Aug 12 (Tue)`,focus:`BST`,topics:[`BST: 45,39,56,12,34,78 (exact PYQ)`,`Traversals: Inorder=sorted, Pre, Post`],hours:3,color:`#22c55e`,status:`upcoming`},{day:`Day 3 — Aug 13 (Wed)`,focus:`Infix→Postfix`,topics:[`Operator precedence table`,`Trace table: (A+B)*(C-D), A*B+C*D`],hours:3,color:`#ef4444`,status:`upcoming`},{day:`Day 4 — Aug 14 (Thu)`,focus:`Recursion`,topics:[`Types: Direct/Indirect/Tail/Non-tail`,`Tower of Hanoi n=3 full trace`],hours:3,color:`#a855f7`,status:`upcoming`},{day:`Day 5 — Aug 15 (Fri)`,focus:`Singly Linked List`,topics:[`Insert Begin/End/Between (with diagram)`,`Delete First/Last/Given node`],hours:3,color:`#f97316`,status:`upcoming`},{day:`Day 6 — Aug 16 (Sat)`,focus:`Circular Linked List`,topics:[`Insert Begin+End (LAST pointer technique)`,`Delete First+Last`],hours:4,color:`#a855f7`,status:`upcoming`},{day:`Day 7 — Aug 17 (Sun)`,focus:`Second Priority`,topics:[`Stack C functions (Push/Pop/Peek)`,`Doubly LL + Circular Queue + Stack via LL`],hours:4,color:`#06b6d4`,status:`upcoming`},{day:`Day 8 — Aug 18 (Mon)`,focus:`FULL REVISION`,topics:[`Write each answer from memory on paper`,`Quick-read all 6 priority topics`],hours:4,color:`#eab308`,status:`upcoming`}];function Ne(){let[e,t]=(0,l.useState)(`avl`),[n,r]=(0,l.useState)({}),[i,a]=(0,l.useState)(`qs`),o=[...Ae,...je].filter(e=>n[e.id]).length,s=Ae.length+je.length;return(0,O.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`14px 12px`},children:[(0,O.jsxs)(`div`,{style:{background:`linear-gradient(135deg,rgba(34,197,94,0.15),rgba(168,85,247,0.08))`,border:`2px solid rgba(34,197,94,0.4)`,borderRadius:16,padding:`16px 20px`,marginBottom:16},children:[(0,O.jsx)(`div`,{style:{fontSize:20,fontWeight:900,color:`#22c55e`,marginBottom:4},children:`📊 DSA ULTIMATE PASS PLAN — Target: 80+ / 100`}),(0,O.jsx)(`div`,{style:{fontSize:12,color:`var(--text-muted)`,marginBottom:10},children:`Based on REAL PYQ analysis: Feb-2025, Feb/Mar-2025, Mar/Apr-2024, Apr/May-2023, Sept/Oct-2022, Mar-2022, Jul/Aug-2021, Dec-2019, Dec-2018, Jan/Feb-2018 (10 papers)`}),(0,O.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`,marginBottom:10},children:[(0,O.jsxs)(`span`,{style:{background:`rgba(34,197,94,0.15)`,border:`1px solid rgba(34,197,94,0.35)`,borderRadius:7,padding:`5px 14px`,fontSize:12,fontWeight:800,color:`#22c55e`},children:[`✓ `,o,`/`,s,` Done`]}),(0,O.jsx)(`span`,{style:{background:`rgba(239,68,68,0.15)`,border:`1px solid rgba(239,68,68,0.35)`,borderRadius:7,padding:`5px 14px`,fontSize:12,fontWeight:800,color:`#ef4444`},children:`8 Days Left`}),(0,O.jsx)(`span`,{style:{background:`rgba(168,85,247,0.15)`,border:`1px solid rgba(168,85,247,0.35)`,borderRadius:7,padding:`5px 14px`,fontSize:12,fontWeight:800,color:`#a855f7`},children:`Last Attempt — Crack It!`})]}),(0,O.jsxs)(`div`,{style:{background:`rgba(34,197,94,0.1)`,border:`1px solid rgba(34,197,94,0.25)`,borderRadius:9,padding:`10px 14px`,fontSize:13,fontWeight:700,color:`var(--text-primary)`,lineHeight:1.8},children:[`⭐ `,(0,O.jsx)(`strong`,{style:{color:`#22c55e`},children:`BEST STRATEGY:`}),` Module 4 FULL (AVL freq=9 + BST freq=6) = `,(0,O.jsx)(`strong`,{style:{color:`#22c55e`},children:`40M`}),(0,O.jsx)(`br`,{}),`+ M1: Infix→Postfix (freq=8) = `,(0,O.jsx)(`strong`,{style:{color:`#ef4444`},children:`20M`}),(0,O.jsx)(`br`,{}),`+ M2: Recursion (freq=7) + SLL (freq=8) = `,(0,O.jsx)(`strong`,{style:{color:`#f97316`},children:`20M`}),(0,O.jsx)(`br`,{}),`+ M3: Circular LL (freq=8) = `,(0,O.jsx)(`strong`,{style:{color:`#a855f7`},children:`20M`}),(0,O.jsx)(`br`,{}),(0,O.jsx)(`strong`,{style:{color:`#eab308`},children:`TOTAL = 100M | Expected with 8-day plan = 82–95M`})]})]}),(0,O.jsxs)(`div`,{className:`card mb-16`,style:{border:`1px solid rgba(6,182,212,0.3)`,background:`rgba(6,182,212,0.04)`,padding:`14px 16px`},children:[(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:800,color:`#06b6d4`,marginBottom:12},children:`📊 PYQ FREQUENCY ANALYSIS — All 10 Papers`}),(0,O.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit,minmax(190px,1fr))`,gap:8},children:ke.map((e,t)=>(0,O.jsxs)(`div`,{style:{background:e.color+`10`,border:`1px solid ${e.color}44`,borderRadius:9,padding:`10px 12px`},children:[(0,O.jsxs)(`div`,{style:{fontSize:12,fontWeight:900,color:e.color,marginBottom:6},children:[e.name,` — `,e.risk]}),e.topics.map((t,n)=>(0,O.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:11,marginBottom:3,color:n===0?`var(--text-primary)`:`var(--text-muted)`},children:[(0,O.jsx)(`span`,{children:t.t}),(0,O.jsxs)(`span`,{style:{background:e.color+`22`,color:e.color,padding:`1px 5px`,borderRadius:4,fontWeight:700,flexShrink:0,marginLeft:4},children:[t.f,`/10`]})]},n))]},t))})]}),(0,O.jsx)(`div`,{style:{display:`flex`,gap:6,marginBottom:14},children:[{id:`qs`,label:`📝 Priority Questions + Exact Answers`},{id:`schedule`,label:`📅 8-Day Plan`},{id:`exam`,label:`🎯 Exam Strategy`}].map(e=>(0,O.jsx)(`button`,{onClick:()=>a(e.id),style:{flex:1,padding:`10px 8px`,borderRadius:10,border:`2px solid ${i===e.id?`var(--accent)`:`var(--border)`}`,background:i===e.id?`var(--accent-light)`:`transparent`,color:i===e.id?`var(--accent)`:`var(--text-muted)`,cursor:`pointer`,fontFamily:`inherit`,fontSize:12,fontWeight:700},children:e.label},e.id))}),i===`qs`&&(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{style:{fontSize:12,color:`var(--text-muted)`,marginBottom:12},children:`All 6 questions verified from actual PYQ papers. Years shown are 100% accurate. Tap to expand exact answer.`}),Ae.map(i=>{let a=e===i.id,o=n[i.id];return(0,O.jsxs)(`div`,{style:{marginBottom:12,borderRadius:14,border:`2px solid ${o?`rgba(34,197,94,0.35)`:i.color+`55`}`,background:`var(--bg-card)`,overflow:`hidden`},children:[(0,O.jsxs)(`div`,{style:{padding:`14px 16px`,cursor:`pointer`,display:`flex`,gap:12,alignItems:`flex-start`},onClick:()=>t(a?null:i.id),children:[(0,O.jsx)(`div`,{onClick:e=>{e.stopPropagation(),r(e=>({...e,[i.id]:!e[i.id]}))},style:{width:26,height:26,borderRadius:8,border:`2px solid ${o?`#22c55e`:i.color}`,background:o?`#22c55e`:`transparent`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,cursor:`pointer`,marginTop:1},children:o&&(0,O.jsx)(`span`,{style:{color:`white`,fontSize:16,fontWeight:900},children:`✓`})}),(0,O.jsxs)(`div`,{style:{flex:1},children:[(0,O.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:5,marginBottom:7},children:[(0,O.jsxs)(`span`,{style:{background:i.color,color:`white`,padding:`4px 12px`,borderRadius:7,fontSize:13,fontWeight:900},children:[i.icon,` P`,i.rank]}),(0,O.jsx)(`span`,{style:{background:i.color+`22`,color:i.color,padding:`3px 9px`,borderRadius:6,fontSize:12,fontWeight:700},children:i.marks}),(0,O.jsx)(`span`,{style:{background:`rgba(255,255,255,0.07)`,color:`var(--text-muted)`,padding:`3px 8px`,borderRadius:6,fontSize:11},children:i.mod}),(0,O.jsx)(`span`,{style:{background:`rgba(34,197,94,0.12)`,color:`#22c55e`,padding:`3px 8px`,borderRadius:6,fontSize:11,fontWeight:700},children:i.certain})]}),(0,O.jsx)(`div`,{style:{fontSize:15,fontWeight:900,color:o?`var(--text-muted)`:`var(--text-primary)`,textDecoration:o?`line-through`:`none`,marginBottom:3},children:i.title}),(0,O.jsx)(`div`,{style:{fontSize:11,color:i.color,fontWeight:600},children:i.strategy})]}),(0,O.jsx)(`span`,{style:{fontSize:22,color:`var(--text-muted)`,flexShrink:0},children:a?`▲`:`▼`})]}),a&&(0,O.jsxs)(`div`,{style:{borderTop:`2px solid ${i.color}33`},children:[(0,O.jsxs)(`div`,{style:{padding:`12px 16px`,background:`rgba(6,182,212,0.05)`,borderBottom:`1px solid ${i.color}22`},children:[(0,O.jsx)(`div`,{style:{fontSize:11,fontWeight:900,color:`#06b6d4`,textTransform:`uppercase`,letterSpacing:1,marginBottom:7},children:`📋 VERIFIED EXACT QUESTIONS FROM PYQ PAPERS (year-checked)`}),(0,O.jsx)(`pre`,{style:{fontFamily:`var(--font-mono)`,fontSize:12,lineHeight:1.85,color:`#7dd3fc`,whiteSpace:`pre-wrap`,background:`rgba(6,182,212,0.06)`,padding:`12px 14px`,borderRadius:9,border:`1px solid rgba(6,182,212,0.2)`,margin:0},children:i.exactQ})]}),(0,O.jsxs)(`div`,{style:{padding:`14px 16px`,borderBottom:`1px solid ${i.color}22`},children:[(0,O.jsx)(`div`,{style:{fontSize:11,fontWeight:900,color:i.color,textTransform:`uppercase`,letterSpacing:1,marginBottom:10},children:`✍️ COMPLETE ANSWER — WRITE EXACTLY LIKE THIS IN EXAM`}),(0,O.jsx)(`pre`,{style:{fontFamily:`var(--font-mono)`,fontSize:12,lineHeight:1.9,color:`#e6edf3`,whiteSpace:`pre-wrap`,background:`rgba(0,0,0,0.35)`,padding:`16px 18px`,borderRadius:12,border:`1px solid ${i.color}33`,margin:0,overflowX:`auto`},children:i.fullAnswer})]}),(0,O.jsx)(`div`,{style:{padding:`10px 16px`,background:`rgba(0,0,0,0.1)`,display:`flex`,justifyContent:`flex-end`},children:(0,O.jsx)(`button`,{onClick:e=>{e.stopPropagation(),r(e=>({...e,[i.id]:!e[i.id]}))},style:{padding:`9px 22px`,borderRadius:9,border:`2px solid ${o?`#22c55e`:i.color}`,background:o?`rgba(34,197,94,0.15)`:i.color+`22`,color:o?`#22c55e`:i.color,fontSize:13,fontWeight:800,cursor:`pointer`,fontFamily:`inherit`},children:o?`✓ P${i.rank} Done`:`Mark P${i.rank} Studied`})})]})]},i.id)}),(0,O.jsxs)(`div`,{style:{margin:`22px 0 12px`,display:`flex`,alignItems:`center`,gap:10},children:[(0,O.jsx)(`div`,{style:{flex:1,height:1,background:`rgba(255,255,255,0.08)`}}),(0,O.jsx)(`span`,{style:{fontSize:13,fontWeight:800,color:`#a855f7`,padding:`6px 18px`,background:`rgba(168,85,247,0.12)`,border:`1px solid rgba(168,85,247,0.35)`,borderRadius:20},children:`🎯 SECOND PRIORITY — Study after P1–P6 (Day 7)`}),(0,O.jsx)(`div`,{style:{flex:1,height:1,background:`rgba(255,255,255,0.08)`}})]}),je.map(i=>{let a=e===i.id,o=n[i.id];return(0,O.jsxs)(`div`,{style:{marginBottom:10,borderRadius:14,border:`2px solid ${o?`rgba(34,197,94,0.35)`:i.color+`44`}`,background:`var(--bg-card)`,overflow:`hidden`},children:[(0,O.jsxs)(`div`,{style:{padding:`13px 16px`,cursor:`pointer`,display:`flex`,gap:12,alignItems:`flex-start`},onClick:()=>t(a?null:i.id),children:[(0,O.jsx)(`div`,{onClick:e=>{e.stopPropagation(),r(e=>({...e,[i.id]:!e[i.id]}))},style:{width:24,height:24,borderRadius:7,border:`2px solid ${o?`#22c55e`:i.color}`,background:o?`#22c55e`:`transparent`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,cursor:`pointer`,marginTop:1},children:o&&(0,O.jsx)(`span`,{style:{color:`white`,fontSize:14,fontWeight:900},children:`✓`})}),(0,O.jsxs)(`div`,{style:{flex:1},children:[(0,O.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:5,marginBottom:5},children:[(0,O.jsxs)(`span`,{style:{background:i.color,color:`white`,padding:`3px 10px`,borderRadius:6,fontSize:12,fontWeight:900},children:[i.icon,` `,i.rank]}),(0,O.jsx)(`span`,{style:{background:i.color+`22`,color:i.color,padding:`2px 8px`,borderRadius:5,fontSize:11,fontWeight:700},children:i.marks}),(0,O.jsx)(`span`,{style:{background:`rgba(34,197,94,0.1)`,color:`#22c55e`,padding:`2px 8px`,borderRadius:5,fontSize:11},children:i.certain})]}),(0,O.jsx)(`div`,{style:{fontSize:14,fontWeight:800,color:o?`var(--text-muted)`:`var(--text-primary)`,textDecoration:o?`line-through`:`none`},children:i.title})]}),(0,O.jsx)(`span`,{style:{fontSize:20,color:`var(--text-muted)`,flexShrink:0},children:a?`▲`:`▼`})]}),a&&(0,O.jsxs)(`div`,{style:{borderTop:`2px solid ${i.color}33`},children:[(0,O.jsxs)(`div`,{style:{padding:`12px 16px`,background:`rgba(6,182,212,0.05)`,borderBottom:`1px solid ${i.color}22`},children:[(0,O.jsx)(`div`,{style:{fontSize:11,fontWeight:900,color:`#06b6d4`,textTransform:`uppercase`,letterSpacing:1,marginBottom:7},children:`📋 VERIFIED EXACT QUESTIONS`}),(0,O.jsx)(`pre`,{style:{fontFamily:`var(--font-mono)`,fontSize:12,lineHeight:1.85,color:`#7dd3fc`,whiteSpace:`pre-wrap`,background:`rgba(6,182,212,0.06)`,padding:`12px 14px`,borderRadius:9,border:`1px solid rgba(6,182,212,0.2)`,margin:0},children:i.exactQ})]}),(0,O.jsx)(`div`,{style:{padding:`14px 16px`},children:(0,O.jsx)(`pre`,{style:{fontFamily:`var(--font-mono)`,fontSize:12,lineHeight:1.9,color:`#e6edf3`,whiteSpace:`pre-wrap`,background:`rgba(0,0,0,0.35)`,padding:`16px 18px`,borderRadius:12,border:`1px solid ${i.color}33`,margin:0,overflowX:`auto`},children:i.fullAnswer})}),(0,O.jsx)(`div`,{style:{padding:`8px 16px`,background:`rgba(0,0,0,0.1)`,display:`flex`,justifyContent:`flex-end`},children:(0,O.jsx)(`button`,{onClick:e=>{e.stopPropagation(),r(e=>({...e,[i.id]:!e[i.id]}))},style:{padding:`8px 20px`,borderRadius:8,border:`2px solid ${o?`#22c55e`:i.color}`,background:o?`rgba(34,197,94,0.15)`:i.color+`22`,color:o?`#22c55e`:i.color,fontSize:12,fontWeight:800,cursor:`pointer`,fontFamily:`inherit`},children:o?`✓ ${i.rank} Done`:`Mark ${i.rank} Studied`})})]})]},i.id)})]}),i===`schedule`&&(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`div`,{className:`card mb-16`,style:{border:`1px solid rgba(234,179,8,0.3)`,background:`rgba(234,179,8,0.04)`,padding:`16px`},children:[(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:800,color:`#eab308`,marginBottom:12},children:`📅 8-Day Guaranteed Pass Schedule`}),Me.map((e,t)=>(0,O.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:`11px 0`,borderBottom:t<7?`1px solid rgba(255,255,255,0.05)`:`none`,alignItems:`flex-start`},children:[(0,O.jsxs)(`div`,{style:{flexShrink:0,minWidth:175},children:[(0,O.jsx)(`div`,{style:{background:e.color+`22`,color:e.color,border:`1px solid ${e.color}44`,borderRadius:6,padding:`4px 9px`,fontSize:11,fontWeight:700},children:e.day}),(0,O.jsxs)(`div`,{style:{fontSize:12,fontWeight:800,color:e.color,marginTop:3},children:[`FOCUS: `,e.focus]})]}),(0,O.jsx)(`div`,{style:{flex:1},children:e.topics.map((e,t)=>(0,O.jsxs)(`div`,{style:{fontSize:12,color:`var(--text-primary)`,marginBottom:2},children:[`• `,e]},t))}),(0,O.jsxs)(`div`,{style:{flexShrink:0,background:e.color+`22`,color:e.color,borderRadius:6,padding:`3px 8px`,fontSize:11,fontWeight:700},children:[e.hours,`h`]})]},t))]}),(0,O.jsxs)(`div`,{className:`card`,style:{border:`1px solid rgba(34,197,94,0.3)`,background:`rgba(34,197,94,0.04)`,padding:`16px`},children:[(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:800,color:`#22c55e`,marginBottom:10},children:`📊 Marks You Will Score (Guaranteed)`}),[{q:`AVL Tree — all rotations with tree at each step`,min:17,max:20},{q:`BST — construct + 3 traversals`,min:16,max:20},{q:`Infix→Postfix — trace table`,min:16,max:20},{q:`Recursion — types + TOH trace`,min:15,max:20},{q:`Singly Linked List — algorithms + diagrams`,min:14,max:20},{q:`Circular LL — insert/delete + diagram`,min:15,max:20}].map((e,t)=>(0,O.jsxs)(`div`,{style:{padding:`9px 0`,borderBottom:t<5?`1px solid rgba(255,255,255,0.05)`:`none`},children:[(0,O.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:8,marginBottom:4},children:[(0,O.jsx)(`div`,{style:{fontSize:12,fontWeight:700,color:`var(--text-primary)`},children:e.q}),(0,O.jsxs)(`div`,{style:{flexShrink:0},children:[(0,O.jsxs)(`span`,{style:{fontSize:18,fontWeight:900,color:`#22c55e`},children:[e.min,`–`,e.max]}),(0,O.jsx)(`span`,{style:{fontSize:11,color:`var(--text-muted)`},children:`M`})]})]}),(0,O.jsx)(`div`,{style:{height:4,background:`rgba(255,255,255,0.07)`,borderRadius:2},children:(0,O.jsx)(`div`,{style:{width:`${e.min/20*100}%`,height:`100%`,background:`#22c55e`,borderRadius:2}})})]},t)),(0,O.jsxs)(`div`,{style:{marginTop:14,padding:`12px 16px`,background:`rgba(34,197,94,0.12)`,borderRadius:9,border:`1px solid rgba(34,197,94,0.3)`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{style:{fontSize:14,fontWeight:800,color:`#22c55e`},children:`Total Expected Score`}),(0,O.jsx)(`div`,{style:{fontSize:11,color:`var(--text-muted)`},children:`With 8-day complete study`})]}),(0,O.jsx)(`div`,{style:{fontSize:30,fontWeight:900,color:`#22c55e`},children:`83–95 / 100`})]})]})]}),i===`exam`&&(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`div`,{className:`card mb-16`,style:{border:`1px solid rgba(239,68,68,0.3)`,background:`rgba(239,68,68,0.04)`,padding:`16px`},children:[(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:800,color:`#ef4444`,marginBottom:12},children:`🎯 3-Hour Exam Hall Plan — Aug 19, 2026`}),[{t:`0:00–0:05`,a:`READ all 8 questions completely. Identify easiest in each module. DO NOT write yet.`,c:`#ef4444`},{t:`0:05–0:10`,a:`DECIDE: Module 4 = Full module (AVL Q7 + BST Q8). Circle both. This is your 40M base.`,c:`#ef4444`},{t:`0:10–0:55`,a:`AVL Tree (20M): Insert one by one. Draw tree after EACH. Write BF at each node. Name rotation type. Draw before+after.`,c:`#22c55e`},{t:`0:55–1:35`,a:`BST (20M): Construct the tree (draw after each insert). Write all 3 traversals. Show search steps one by one.`,c:`#22c55e`},{t:`1:35–2:05`,a:`M1 choice (20M): Infix→Postfix. Write precedence table first, then full trace table with Symbol|Stack|Output columns.`,c:`#ef4444`},{t:`2:05–2:35`,a:`M2 choice (20M): Recursion (types + TOH n=3 trace). OR Singly LL (algorithm + diagrams).`,c:`#a855f7`},{t:`2:35–2:55`,a:`M3 choice (20M): Circular LL (LAST pointer technique + diagrams for insert begin+end).`,c:`#f97316`},{t:`2:55–3:00`,a:`REVIEW: Label all diagrams. Add BF values in AVL. Check traversal order. Never leave any diagram unlabeled.`,c:`#eab308`}].map((e,t)=>(0,O.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:`10px 0`,borderBottom:t<7?`1px solid rgba(255,255,255,0.05)`:`none`,alignItems:`flex-start`},children:[(0,O.jsx)(`span`,{style:{background:e.c+`22`,color:e.c,border:`1px solid ${e.c}44`,borderRadius:7,padding:`4px 9px`,fontSize:11,fontWeight:800,flexShrink:0,minWidth:90,textAlign:`center`},children:e.t}),(0,O.jsx)(`span`,{style:{fontSize:13,color:`var(--text-primary)`,lineHeight:1.7},children:e.a})]},t))]}),(0,O.jsxs)(`div`,{className:`card`,style:{border:`1px solid rgba(234,179,8,0.3)`,background:`rgba(234,179,8,0.04)`,padding:`16px`},children:[(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:800,color:`#eab308`,marginBottom:12},children:`⚡ 10 Golden Rules for DSA Exam`}),[[`🌳`,`DRAW the tree/linked list FIRST before writing any explanation — diagrams = 6–8M alone`],[`📋`,`Use TABLE FORMAT for Infix→Postfix trace — each row = 1-2 marks, never skip steps`],[`⚖️`,`In AVL: write BF at EVERY node after each insertion. Write rotation name before drawing`],[`🔢`,`BST: draw tree state after EACH insertion (not just final) — show your process`],[`🔁`,`Recursion: Identify Base case and Recursive case explicitly — 2 easy marks always`],[`🔗`,`Linked List: always draw the box diagram showing BEFORE and AFTER state of pointers`],[`🔄`,`Circular LL: always use LAST pointer technique — draw the circular arrow clearly`],[`📝`,`Write struct Node definition before every linked list answer — 2 marks always`],[`⏱️`,`End EVERY answer with time complexity — O(n), O(log n) etc. — 2 easy marks`],[`🎯`,`AVL + BST = Module 4 Full (40M) — this is the safest guaranteed marks strategy`]].map(([e,t],n)=>(0,O.jsxs)(`div`,{style:{display:`flex`,gap:10,padding:`8px 0`,borderBottom:n<9?`1px solid rgba(255,255,255,0.04)`:`none`,fontSize:12,color:`var(--text-primary)`,lineHeight:1.6},children:[(0,O.jsx)(`span`,{style:{flexShrink:0,fontSize:15},children:e}),(0,O.jsx)(`span`,{children:t})]},n))]})]})]})}function Pe(){let[e,t]=(0,l.useState)(`compare`);return(0,O.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`12px 10px`},children:[(0,O.jsxs)(`div`,{style:{background:`linear-gradient(135deg,rgba(239,68,68,0.2),rgba(168,85,247,0.1))`,border:`2px solid #ef4444`,borderRadius:14,padding:`14px 18px`,marginBottom:14},children:[(0,O.jsx)(`div`,{style:{fontSize:19,fontWeight:900,color:`#ef4444`},children:`⚡ TRICK PAGE — All DS Same Pattern, Different 2 Lines Only!`}),(0,O.jsx)(`div`,{style:{fontSize:12,color:`#fca5a5`,marginTop:4},children:`🔴 = lines that CHANGE per data structure \xA0|\xA0 ⬜ = same in ALL`})]}),(0,O.jsx)(`div`,{style:{overflowX:`auto`,marginBottom:14},children:(0,O.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:12},children:[(0,O.jsx)(`thead`,{children:(0,O.jsx)(`tr`,{style:{background:`rgba(255,255,255,0.05)`},children:[`Feature`,`SLL`,`CLL`,`DLL`,`Stack(LL)`,`Circular Queue`].map(e=>(0,O.jsx)(`th`,{style:{padding:`8px 10px`,border:`1px solid rgba(255,255,255,0.1)`,color:`var(--accent)`,textAlign:`left`,fontSize:12,fontWeight:800},children:e},e))})}),(0,O.jsx)(`tbody`,{children:[[`Pointers per node`,`1 (next)`,`1 (next)`,`2 (prev+next)`,`1 (next)`,`No pointer (array)`],[`Last node →`,`NULL`,`back to HEAD`,`NULL`,`NULL`,`(rear+1)%MAX`],[`Head/Start`,`HEAD`,`LAST→next`,`HEAD`,`TOP`,`front index`],[`Extra pointer?`,`No`,`Keep LAST ptr`,`No`,`No`,`front & rear`],[`Go backwards?`,`❌ No`,`❌ No`,`✅ Yes`,`❌ No`,`❌ No`],[`Memory type`,`Dynamic`,`Dynamic`,`Dynamic`,`Dynamic`,`Static (array)`],[`Insert Begin`,`newNode→HEAD; HEAD=new`,`new→LAST→next; LAST→next=new`,`new→HEAD; HEAD→prev=new; HEAD=new`,`new→TOP; TOP=new ← PUSH`,`N/A`],[`Insert End`,`traverse to last→new`,`new→LAST→next; LAST→next=new; LAST=new`,`traverse to last; last→new; new←last`,`N/A (stack!)`,`rear=(rear+1)%MAX; CQ[rear]=val`],[`Delete Begin`,`HEAD=HEAD→next`,`LAST→next=first→next`,`HEAD=HEAD→next; HEAD→prev=NULL`,`TOP=TOP→next ← POP`,`front=(front+1)%MAX`]].map((e,t)=>(0,O.jsxs)(`tr`,{style:{background:t%2==0?`rgba(255,255,255,0.02)`:`transparent`},children:[(0,O.jsx)(`td`,{style:{padding:`7px 10px`,border:`1px solid rgba(255,255,255,0.08)`,color:`#7dd3fc`,fontWeight:700,fontSize:11},children:e[0]}),e.slice(1).map((e,t)=>(0,O.jsx)(`td`,{style:{padding:`7px 10px`,border:`1px solid rgba(255,255,255,0.08)`,color:`var(--text-primary)`,fontSize:11},children:e},t))]},t))})]})}),(0,O.jsx)(`div`,{style:{display:`flex`,gap:6,marginBottom:14,flexWrap:`wrap`},children:[{id:`compare`,label:`🔴 What Changes`,color:`#ef4444`},{id:`sll`,label:`🔗 SLL`,color:`#f97316`},{id:`cll`,label:`🔄 CLL`,color:`#a855f7`},{id:`dll`,label:`↔️ DLL`,color:`#06b6d4`},{id:`stack`,label:`📚 Stack`,color:`#ef4444`},{id:`queue`,label:`🔁 Cir.Queue`,color:`#eab308`},{id:`recursion`,label:`🔁 Recursion`,color:`#22c55e`}].map(n=>(0,O.jsx)(`button`,{onClick:()=>t(n.id),style:{padding:`9px 14px`,borderRadius:9,border:`2px solid ${e===n.id?n.color:`rgba(255,255,255,0.1)`}`,background:e===n.id?n.color+`22`:`transparent`,color:e===n.id?n.color:`var(--text-muted)`,cursor:`pointer`,fontFamily:`inherit`,fontSize:12,fontWeight:800},children:n.label},n.id))}),e===`compare`&&(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`div`,{style:{background:`rgba(239,68,68,0.08)`,border:`2px solid rgba(239,68,68,0.4)`,borderRadius:12,padding:`16px`,marginBottom:14},children:[(0,O.jsx)(`div`,{style:{fontSize:14,fontWeight:900,color:`#ef4444`,marginBottom:12},children:`🧠 THE SECRET TRICK — ALL insertions follow SAME 4 steps. Only 🔴 red lines change!`}),(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:800,color:`#fca5a5`,marginBottom:8},children:`TEMPLATE (same for EVERY linked list):`}),(0,O.jsxs)(`pre`,{style:{fontFamily:`var(--font-mono)`,fontSize:13,lineHeight:2.1,whiteSpace:`pre-wrap`,margin:0},children:[(0,O.jsx)(`span`,{style:{color:`#6b7280`},children:`/* Step 1: Create new node — SAME ALWAYS */`}),`
`,(0,O.jsx)(`span`,{style:{color:`#e6edf3`},children:`struct Node* newNode = malloc(sizeof(struct Node));`}),`
`,(0,O.jsx)(`span`,{style:{color:`#e6edf3`},children:`newNode->data = val;`}),`

`,(0,O.jsx)(`span`,{style:{color:`#ef4444`,fontWeight:900},children:`🔴 /* Step 2: Fix pointers — THIS IS WHAT CHANGES */`}),`
`,(0,O.jsx)(`span`,{style:{color:`#fca5a5`,fontWeight:800},children:`newNode->next = ???;    ← DIFFERENT per DS`}),`
`,(0,O.jsx)(`span`,{style:{color:`#fca5a5`,fontWeight:800},children:`newNode->prev = ???;    ← Only DLL has this`}),`

`,(0,O.jsx)(`span`,{style:{color:`#ef4444`,fontWeight:900},children:`🔴 /* Step 3: Update head/last — THIS CHANGES TOO */`}),`
`,(0,O.jsx)(`span`,{style:{color:`#fca5a5`,fontWeight:800},children:`HEAD = newNode;  OR  LAST = newNode;  OR  TOP = newNode;`})]})]}),(0,O.jsx)(`div`,{style:{fontSize:14,fontWeight:900,color:`#7dd3fc`,marginBottom:10},children:`📋 INSERT AT BEGINNING — See exactly what changes:`}),(0,O.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(260px, 1fr))`,gap:10,marginBottom:16},children:[{name:`SLL — Insert Begin`,color:`#f97316`,lines:[{text:`struct Node* n = malloc(...);`,changed:!1},{text:`n->data = val;`,changed:!1},{text:`🔴 n->next = HEAD;   // point to old first`,changed:!0},{text:`🔴 HEAD = n;          // HEAD = new node`,changed:!0}]},{name:`CLL — Insert Begin`,color:`#a855f7`,lines:[{text:`struct Node* n = malloc(...);`,changed:!1},{text:`n->data = val;`,changed:!1},{text:`🔴 n->next = LAST->next;  // → old first`,changed:!0},{text:`🔴 LAST->next = n;         // LAST → new`,changed:!0},{text:`   (LAST stays same — no LAST update)`,changed:!1}]},{name:`CLL — Insert END`,color:`#a855f7`,lines:[{text:`struct Node* n = malloc(...);`,changed:!1},{text:`n->data = val;`,changed:!1},{text:`🔴 n->next = LAST->next;  // → first node`,changed:!0},{text:`🔴 LAST->next = n;         // old last → new`,changed:!0},{text:`🔴 LAST = n;               // update LAST!`,changed:!0}]},{name:`DLL — Insert Begin`,color:`#06b6d4`,lines:[{text:`struct Node* n = malloc(...);`,changed:!1},{text:`n->data = val;`,changed:!1},{text:`🔴 n->prev = NULL;         // no prev for first`,changed:!0},{text:`🔴 n->next = HEAD;          // → old first`,changed:!0},{text:`🔴 if(HEAD) HEAD->prev = n; // old first ← new`,changed:!0},{text:`🔴 HEAD = n;                // update HEAD`,changed:!0}]},{name:`Stack (LL) — PUSH`,color:`#ef4444`,lines:[{text:`struct Node* n = malloc(...);`,changed:!1},{text:`n->data = val;`,changed:!1},{text:`🔴 n->next = TOP;   // same as SLL begin!`,changed:!0},{text:`🔴 TOP = n;          // TOP = new node`,changed:!0},{text:`✅ PUSH = Insert at Begin of SLL!`,changed:!1}]},{name:`Stack (LL) — POP`,color:`#ef4444`,lines:[{text:`if(TOP == NULL) underflow;`,changed:!1},{text:`🔴 Node* tmp = TOP;         // save top`,changed:!0},{text:`🔴 int val = tmp->data;`,changed:!0},{text:`🔴 TOP = TOP->next;          // move top down`,changed:!0},{text:`   free(tmp);`,changed:!1}]}].map((e,t)=>(0,O.jsxs)(`div`,{style:{background:e.color+`10`,border:`2px solid ${e.color}44`,borderRadius:10,padding:`12px 14px`},children:[(0,O.jsx)(`div`,{style:{fontSize:12,fontWeight:900,color:e.color,marginBottom:10},children:e.name}),e.lines.map((e,t)=>(0,O.jsx)(`div`,{style:{fontFamily:`var(--font-mono)`,fontSize:11.5,lineHeight:1.9,color:e.changed?`#fca5a5`:`#6b7280`,background:e.changed?`rgba(239,68,68,0.12)`:`transparent`,borderLeft:e.changed?`3px solid #ef4444`:`3px solid transparent`,paddingLeft:8,marginBottom:2,borderRadius:`0 4px 4px 0`},children:e.text},t))]},t))}),(0,O.jsxs)(`div`,{style:{background:`rgba(34,197,94,0.08)`,border:`2px solid rgba(34,197,94,0.35)`,borderRadius:12,padding:`14px 16px`},children:[(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:900,color:`#22c55e`,marginBottom:10},children:`🧠 MEMORY TRICKS — Never Forget!`}),[[`SLL begin`,`2 lines: newNode→HEAD, HEAD=newNode`,`#f97316`],[`CLL begin`,`2 lines: newNode→LAST→next, LAST→next=newNode (LAST does NOT change)`,`#a855f7`],[`CLL end`,`3 lines: same as begin PLUS "LAST=newNode" at end`,`#a855f7`],[`DLL begin`,`4 lines: prev=NULL, next=HEAD, HEAD→prev=newNode, HEAD=newNode`,`#06b6d4`],[`PUSH (Stack)`,`= SLL insert begin but HEAD is called TOP`,`#ef4444`],[`POP (Stack)`,`= SLL delete first but HEAD is called TOP`,`#ef4444`],[`CirQueue insert`,`rear=(rear+1)%MAX; CQ[rear]=val;`,`#eab308`],[`CirQueue delete`,`front=(front+1)%MAX;`,`#eab308`]].map(([e,t,n],r)=>(0,O.jsxs)(`div`,{style:{display:`flex`,gap:10,padding:`7px 0`,borderBottom:r<7?`1px solid rgba(255,255,255,0.05)`:`none`,alignItems:`flex-start`},children:[(0,O.jsx)(`span`,{style:{background:n+`22`,color:n,padding:`3px 9px`,borderRadius:6,fontSize:11,fontWeight:800,flexShrink:0,minWidth:90,textAlign:`center`},children:e}),(0,O.jsx)(`span`,{style:{fontSize:12,color:`var(--text-primary)`,lineHeight:1.6},children:t})]},r))]})]}),e===`sll`&&(0,O.jsx)(k,{color:`#f97316`,title:`SINGLY LINKED LIST — struct has 1 pointer: next`,code:Fe}),e===`cll`&&(0,O.jsx)(k,{color:`#a855f7`,title:`CIRCULAR LINKED LIST — same as SLL but no NULL at end. Use LAST pointer.`,code:Ie}),e===`dll`&&(0,O.jsx)(k,{color:`#06b6d4`,title:`DOUBLY LINKED LIST — struct has 2 pointers: prev + next`,code:Le}),e===`stack`&&(0,O.jsx)(k,{color:`#ef4444`,title:`STACK using Linked List — PUSH = insert at front, POP = delete from front. TOP = head.`,code:Re}),e===`queue`&&(0,O.jsx)(k,{color:`#eab308`,title:`CIRCULAR QUEUE — Array based. Use % (modulo) to wrap rear back to 0.`,code:ze}),e===`recursion`&&(0,O.jsx)(k,{color:`#22c55e`,title:`RECURSION — Types + Tower of Hanoi. Asked in 7/10 papers!`,code:Be})]})}function k({color:e,title:t,code:n}){return(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{style:{background:e+`15`,border:`2px solid ${e}55`,borderRadius:10,padding:`10px 14px`,marginBottom:12,fontSize:13,fontWeight:800,color:e},children:t}),(0,O.jsx)(`pre`,{style:{fontFamily:`var(--font-mono)`,fontSize:12.5,lineHeight:2,color:`#e6edf3`,whiteSpace:`pre-wrap`,background:`rgba(0,0,0,0.45)`,padding:`18px 20px`,borderRadius:12,border:`1px solid ${e}33`,margin:0,overflowX:`auto`},children:n})]})}var Fe=`/* ── NODE ── */
struct Node {
    int data;
    struct Node *next;   // ← only ONE pointer
};
struct Node *HEAD = NULL;

/* ── 1. INSERT AT BEGINNING ── */
void insertBegin(int val) {
    struct Node* n = (struct Node*)malloc(sizeof(struct Node));
    n->data = val;
    n->next = HEAD;   // 🔴 new node → old first
    HEAD = n;         // 🔴 HEAD = new node
}
// BEFORE: HEAD→[20]→[30]→NULL
// AFTER:  HEAD→[10]→[20]→[30]→NULL

/* ── 2. INSERT AT END ── */
void insertEnd(int val) {
    struct Node* n = (struct Node*)malloc(sizeof(struct Node));
    n->data = val;
    n->next = NULL;           // last node → NULL
    if (HEAD == NULL) { HEAD = n; return; }
    struct Node* temp = HEAD;
    while (temp->next != NULL)    // go to last node
        temp = temp->next;
    temp->next = n;           // 🔴 old last → new node
}
// BEFORE: HEAD→[10]→[20]→NULL
// AFTER:  HEAD→[10]→[20]→[30]→NULL

/* ── 3. INSERT BETWEEN (e.g. after node with value 25) ── */
void insertAfter(int afterVal, int val) {
    struct Node* temp = HEAD;
    while (temp != NULL && temp->data != afterVal)
        temp = temp->next;
    if (temp == NULL) { printf("Not found\\n"); return; }
    struct Node* n = (struct Node*)malloc(sizeof(struct Node));
    n->data = val;
    n->next = temp->next;   // 🔴 new → temp's old next
    temp->next = n;         // 🔴 temp → new node
}
// If list: [15]→[25]→[40], insertAfter(25, 30):
// AFTER: [15]→[25]→[30]→[40] ✓

/* ── 4. DELETE FIRST ── */
void deleteFirst() {
    if (HEAD == NULL) { printf("Empty\\n"); return; }
    struct Node* temp = HEAD;
    HEAD = HEAD->next;    // 🔴 HEAD moves to second node
    free(temp);
}

/* ── 5. DELETE LAST ── */
void deleteLast() {
    if (HEAD == NULL) return;
    if (HEAD->next == NULL) { free(HEAD); HEAD=NULL; return; }
    struct Node* temp = HEAD;
    while (temp->next->next != NULL)   // stop at second-to-last
        temp = temp->next;
    free(temp->next);     // 🔴 free last node
    temp->next = NULL;    // 🔴 second-to-last → NULL (now last)
}

/* ── 6. DISPLAY ── */
void display() {
    struct Node* temp = HEAD;
    while (temp != NULL) {
        printf("%d → ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}`,Ie=`/* ── NODE — same as SLL, but no NULL at end ── */
struct Node {
    int data;
    struct Node *next;   // ← only ONE pointer (same as SLL!)
};
struct Node *LAST = NULL;   // 🔴 use LAST, not HEAD!
                             //    HEAD = LAST->next (first node)

/* ─────────────────────────────────────────────
   DIAGRAM:  LAST → [D] → [A] → [B] → [C] → [D]
              ↑__________________________________↑
   Last node's NEXT points back to FIRST node
───────────────────────────────────────────── */

/* ── 1. INSERT AT BEGINNING ── */
void insertBegin(int val) {
    struct Node* n = (struct Node*)malloc(sizeof(struct Node));
    n->data = val;
    if (LAST == NULL) { LAST=n; n->next=n; return; } // empty list
    n->next = LAST->next;   // 🔴 new → old first node
    LAST->next = n;         // 🔴 LAST → new node
                            //    LAST stays same (not updated!)
}
// BEFORE: LAST→[C]→[A]→[B]→[C]
// AFTER:  LAST→[C]→[X]→[A]→[B]→[C]   (X is new first)

/* ── 2. INSERT AT END ── */
void insertEnd(int val) {
    struct Node* n = (struct Node*)malloc(sizeof(struct Node));
    n->data = val;
    if (LAST == NULL) { LAST=n; n->next=n; return; } // empty list
    n->next = LAST->next;   // 🔴 new → old first node (same line as begin!)
    LAST->next = n;         // 🔴 old LAST → new node  (same line as begin!)
    LAST = n;               // 🔴 update LAST to new node ← ONLY EXTRA LINE!
}
// BEFORE: LAST→[C]→[A]→[B]→[C]
// AFTER:  LAST→[Y]→[A]→[B]→[C]→[Y]   (Y is new last)

// ✅ TRICK: CLL end = CLL begin + one extra line: LAST = n

/* ── 3. DELETE FIRST ── */
void deleteFirst() {
    if (LAST == NULL) { printf("Empty\\n"); return; }
    struct Node* temp = LAST->next;   // temp = first node
    if (LAST == temp) { free(temp); LAST=NULL; return; } // only 1 node
    LAST->next = temp->next;   // 🔴 LAST → second node (skips first)
    free(temp);
}

/* ── 4. DELETE LAST ── */
void deleteLast() {
    if (LAST == NULL) return;
    if (LAST->next == LAST) { free(LAST); LAST=NULL; return; }
    struct Node* temp = LAST->next;     // start from first
    while (temp->next != LAST)          // find node before LAST
        temp = temp->next;
    temp->next = LAST->next;   // 🔴 second-to-last → first
    free(LAST);
    LAST = temp;               // 🔴 update LAST
}

/* ── 5. DISPLAY ── */
void display() {
    if (LAST == NULL) return;
    struct Node* temp = LAST->next;   // start from first
    do {
        printf("%d → ", temp->data);
        temp = temp->next;
    } while (temp != LAST->next);    // stop when back to first
    printf("(circular)\\n");
}`,Le=`/* ── NODE — has TWO pointers: prev and next ── */
struct Node {
    struct Node *prev;   // 🔴 points to PREVIOUS node
    int data;
    struct Node *next;   // points to NEXT node
};
struct Node *HEAD = NULL;

/* DIAGRAM:
   NULL ← [prev|10|next] ↔ [prev|20|next] ↔ [prev|30|next] → NULL
   First: prev=NULL  |  Last: next=NULL                            */

/* ── 1. INSERT AT BEGINNING ── */
void insertBegin(int val) {
    struct Node* n = (struct Node*)malloc(sizeof(struct Node));
    n->data = val;
    n->prev = NULL;          // 🔴 first node has no prev
    n->next = HEAD;          // 🔴 new → old first
    if (HEAD != NULL)
        HEAD->prev = n;      // 🔴 old first's prev → new node
    HEAD = n;                // 🔴 update HEAD
}
// BEFORE: HEAD→[10]↔[20]↔[30]→NULL
// AFTER:  HEAD→[5]↔[10]↔[20]↔[30]→NULL

/* ── 2. INSERT AT END ── */
void insertEnd(int val) {
    struct Node* n = (struct Node*)malloc(sizeof(struct Node));
    n->data = val;
    n->next = NULL;          // last node, no next
    if (HEAD == NULL) { n->prev=NULL; HEAD=n; return; }
    struct Node* temp = HEAD;
    while (temp->next != NULL) temp = temp->next;  // go to last
    temp->next = n;          // 🔴 old last → new
    n->prev = temp;          // 🔴 new's prev → old last
}

/* ── 3. INSERT AFTER GIVEN NODE ── */
void insertAfter(int afterVal, int val) {
    struct Node* temp = HEAD;
    while (temp && temp->data != afterVal) temp = temp->next;
    if (!temp) return;
    struct Node* n = (struct Node*)malloc(sizeof(struct Node));
    n->data = val;
    n->next = temp->next;    // 🔴 new → temp's old next
    n->prev = temp;          // 🔴 new's prev → temp
    if (temp->next) temp->next->prev = n;  // 🔴 next's prev → new
    temp->next = n;          // 🔴 temp → new
}

/* ── 4. DELETE FIRST ── */
void deleteFirst() {
    if (HEAD == NULL) return;
    struct Node* temp = HEAD;
    HEAD = HEAD->next;
    if (HEAD) HEAD->prev = NULL;   // 🔴 new first has no prev
    free(temp);
}

/* ── 5. DELETE LAST ── */
void deleteLast() {
    if (!HEAD) return;
    if (!HEAD->next) { free(HEAD); HEAD=NULL; return; }
    struct Node* temp = HEAD;
    while (temp->next) temp = temp->next;  // go to last
    temp->prev->next = NULL;   // 🔴 second-to-last → NULL
    free(temp);
}

/* ── 6. DISPLAY FORWARD ── */
void displayForward() {
    struct Node* temp = HEAD;
    while (temp) { printf("%d ↔ ", temp->data); temp=temp->next; }
    printf("NULL\\n");
}

/* ── 6. DISPLAY BACKWARD ── */
void displayBackward() {
    struct Node* temp = HEAD;
    while (temp->next) temp = temp->next;  // go to last
    while (temp) { printf("%d ↔ ", temp->data); temp=temp->prev; }
    printf("NULL\\n");
}`,Re=`/* ── STACK = SLL where you only add/remove at FRONT ──
   PUSH = insertBegin    POP = deleteFirst
   TOP  = HEAD  ── */

struct Node {
    int data;
    struct Node *next;
};
struct Node *TOP = NULL;   // 🔴 called TOP, not HEAD

/* ── PUSH (add to top) ── */
void push(int val) {
    struct Node* n = (struct Node*)malloc(sizeof(struct Node));
    n->data = val;
    n->next = TOP;   // 🔴 new → current TOP
    TOP = n;         // 🔴 TOP = new node
    printf("Pushed: %d\\n", val);
}
// push(10): TOP→[10]→NULL
// push(20): TOP→[20]→[10]→NULL
// push(30): TOP→[30]→[20]→[10]→NULL

/* ── POP (remove from top) ── */
int pop() {
    if (TOP == NULL) { printf("Stack Underflow!\\n"); return -1; }
    struct Node* temp = TOP;
    int val = temp->data;
    TOP = TOP->next;    // 🔴 TOP moves to next
    free(temp);
    return val;
}
// pop(): removes 30, TOP→[20]→[10]→NULL

/* ── PEEK (see top without removing) ── */
int peek() {
    if (TOP == NULL) { printf("Empty\\n"); return -1; }
    return TOP->data;
}

/* ── DISPLAY ── */
void display() {
    struct Node* temp = TOP;
    printf("TOP → ");
    while (temp) { printf("%d → ", temp->data); temp=temp->next; }
    printf("NULL\\n");
}

/* ── ARRAY STACK (simpler — use in exam if easier!) ── */
int stack[100], top = -1;

void pushArr(int val) {
    if (top == 99) { printf("Overflow\\n"); return; }
    stack[++top] = val;          // top++ then store
}
int popArr() {
    if (top == -1) { printf("Underflow\\n"); return -1; }
    return stack[top--];         // return then top--
}
int peekArr() { return stack[top]; }`,ze=`/* ── CIRCULAR QUEUE — uses ARRAY + % (modulo) ──
   Normal queue: front moves right, space wasted at left.
   Circular: rear wraps back to 0 using % ── */

#define MAX 5
int CQ[MAX];
int front = -1, rear = -1;

/* FULL?  (rear+1)%MAX == front
   EMPTY? front == -1            */

/* ── INSERT (Enqueue) ── */
void enqueue(int val) {
    if ((rear + 1) % MAX == front) {
        printf("Queue FULL\\n"); return;
    }
    if (front == -1) front = 0;      // first insertion
    rear = (rear + 1) % MAX;         // 🔴 rear moves (wraps!)
    CQ[rear] = val;
    printf("Inserted: %d\\n", val);
}

/* ── DELETE (Dequeue) ── */
int dequeue() {
    if (front == -1) { printf("Queue EMPTY\\n"); return -1; }
    int val = CQ[front];
    if (front == rear)               // last element
        front = rear = -1;
    else
        front = (front + 1) % MAX;   // 🔴 front moves (wraps!)
    return val;
}

/* ── DISPLAY ── */
void display() {
    if (front == -1) { printf("Empty\\n"); return; }
    int i = front;
    printf("Queue: ");
    while (1) {
        printf("[%d] ", CQ[i]);
        if (i == rear) break;
        i = (i + 1) % MAX;
    }
    printf("\\n");
}

/* TRACE (MAX=5):
   enqueue(10): front=0, rear=0  →  [10, _, _, _, _]
   enqueue(20): front=0, rear=1  →  [10, 20, _, _, _]
   enqueue(30): front=0, rear=2  →  [10, 20, 30, _, _]
   dequeue():   returns 10, front=1  →  [_, 20, 30, _, _]
   enqueue(40): front=1, rear=3  →  [_, 20, 30, 40, _]
   enqueue(50): front=1, rear=4  →  [_, 20, 30, 40, 50]
   enqueue(60): rear=(4+1)%5=0   →  [60, 20, 30, 40, 50]
                rear wraps to 0! ← circular ✓            */`,Be=`/* ── RECURSION — Asked in 7/10 Papers! ──

DEFINITION:
  Function that CALLS ITSELF.
  Must have: 1) BASE CASE (when to stop)
             2) RECURSIVE CASE (calls itself)

TYPES (write all 4 in exam):

1. DIRECT — function calls itself directly
   void fun() { fun(); }   // A calls A

2. INDIRECT — A calls B, B calls A
   void A() { B(); }
   void B() { A(); }

3. TAIL — recursive call is the LAST line
   void print(int n) {
       if(n==0) return;
       print(n-1);      // ← recursive call is LAST line
       printf("%d",n);  // wait, this is after → NON-TAIL
   }
   void tail(int n) {
       if(n==0) return;
       printf("%d",n);
       tail(n-1);       // ← THIS is last line → TAIL recursion
   }

4. NON-TAIL — work done AFTER recursive call
   int fact(int n) {
       if(n==0) return 1;
       return n * fact(n-1);  // multiplication done AFTER call
   }                           // → NON-TAIL recursion

5. LINEAR — one call per function (factorial)
6. TREE   — two or more calls (fibonacci: calls fib(n-1) AND fib(n-2))
*/

/* ── TOWER OF HANOI (most asked) ── */
void TOH(int n, char src, char dst, char aux) {
    if (n == 1) {
        printf("Move disk 1: %c → %c\\n", src, dst);
        return;                     // ← BASE CASE
    }
    TOH(n-1, src, aux, dst);       // move n-1 disks to aux
    printf("Move disk %d: %c → %c\\n", n, src, dst);
    TOH(n-1, aux, dst, src);       // move n-1 disks to dst
}
// Call: TOH(3, 'A', 'C', 'B')

/* TRACE for n=3 (A→C using B):
   Move disk 1: A → C
   Move disk 2: A → B
   Move disk 1: C → B
   Move disk 3: A → C   ← biggest disk
   Move disk 1: B → A
   Move disk 2: B → C
   Move disk 1: A → C
   Total = 7 moves = 2³-1 = 2^n - 1  */

/* ── FIBONACCI (also asked) ── */
int fib(int n) {
    if (n <= 1) return n;       // BASE CASE: fib(0)=0, fib(1)=1
    return fib(n-1) + fib(n-2); // TREE recursion (2 calls!)
}
/* fib(5):
   fib(5) = fib(4) + fib(3)
   fib(4) = fib(3) + fib(2)
   fib(3) = fib(2) + fib(1)
   fib(2) = fib(1) + fib(0) = 1+0 = 1
   fib(3) = 1+1 = 2
   fib(4) = 2+1 = 3
   fib(5) = 3+2 = 5
   Output: 0,1,1,2,3,5  */

/* ── CODE TRACE QUESTION (Mar-2022 exact) ──
   int fun(int n){ if(n==0) return(0); return(n+fun(n-1)); }
   fun(5) = 5+fun(4) = 5+4+fun(3) = 5+4+3+fun(2)
          = 5+4+3+2+fun(1) = 5+4+3+2+1+fun(0)
          = 5+4+3+2+1+0 = 15
   Answer: x = 15
   Base case: n==0
   Recursive case: return n+fun(n-1)
   Type: NON-TAIL recursion  */`,Ve=[{time:`11:40 PM – 12:30 AM`,topic:`Recursion Types + Tower of Hanoi`,marks:`+15M (Module 2)`,color:`#22c55e`,reason:`Asked in 7/10 papers. THEORY only. No complex code needed.`,mustWrite:[`Definition: "A function that calls itself with a base case and recursive case"`,`4 Types: Direct, Indirect, Tail, Non-Tail (with 1 line example each)`,`Tower of Hanoi: Write the 4-line C function + trace for n=3 (7 moves)`,`Fibonacci: fib(n) = fib(n-1) + fib(n-2) + trace for fib(5)`],exactQ:[{q:`Define recursion. Explain the different types of recursion with examples.`,year:`Feb-2025, Feb/Mar-2025, Mar/Apr-2024, Mar-2022, Apr/May-2023`,marks:`10M`},{q:`Write a recursive function to implement Tower of Hanoi.`,year:`Feb/Mar-2025 Supp, Jan/Feb-2018`,marks:`10M`},{q:`Identify Base case and Recursive case for Fibonacci. Write C program. Trace fib(5).`,year:`Feb-2025 Makeup`,marks:`10M`},{q:`int fun(int n){ if(n==0) return(0); return(n+fun(n-1)); } — Define recursion, compute output, find base case, type of recursion.`,year:`Mar-2022`,marks:`10M`}]},{time:`12:30 AM – 1:15 AM`,topic:`SLL Insert at Beginning + Delete First (Only 2 functions!)`,marks:`+10M (Module 2)`,color:`#f97316`,reason:`Asked in ALL 8 papers. Only memorise 2 functions = 10M easy.`,mustWrite:[`struct Node { int data; struct Node *next; };`,`insertBegin: n->next = HEAD; HEAD = n; (just 2 lines!)`,`deleteFirst: HEAD = HEAD->next; free(temp); (just 2 lines!)`,`Display: while(temp != NULL) { print; temp=temp->next; }`],exactQ:[{q:`Design a C function to insert a node in the beginning of a singly linked list and display the same.`,year:`Feb-2025 Makeup`,marks:`10M`},{q:`Write C functions: i) Insertion at the beginning ii) Deletion at the end of the linked list.`,year:`Feb/Mar-2025 Supp`,marks:`10M`},{q:`Implement a C function to i) Insert a node at beginning of SLL ii) Display elements.`,year:`Mar/Apr-2024`,marks:`10M`},{q:`Write algorithm for SLL: i) Inserting ITEM as first node ii) Deleting node with given ITEM.`,year:`Jul/Aug-2021`,marks:`10M`}]},{time:`1:15 AM – 1:45 AM`,topic:`Stack Push/Pop (Array) — 15 min only`,marks:`+5M (Module 1 sub-question)`,color:`#ef4444`,reason:`Simple array code. Asked every paper. You likely already know this!`,mustWrite:[`push: if(top==MAX-1) overflow; else stack[++top]=val;`,`pop: if(top==-1) underflow; else return stack[top--];`,`peek: return stack[top];`],exactQ:[{q:`Write C functions to implement Push, Pop and Peek operations of stack.`,year:`ALL papers`,marks:`10M`}]},{time:`1:45 AM – 2:00 AM`,topic:`SLEEP — Minimum 7 hours before exam!`,marks:`= Fresh brain in exam = +10M`,color:`#6366f1`,reason:`Sleep-deprived brain forgets everything. Sleep is more important than studying now.`,mustWrite:[`Set alarm for 8:00 AM`,`Reach exam hall by 9:15 AM`,`Read all 8 questions first before writing anything`],exactQ:[]}],He=[{q:`Module 4 Q7: AVL Tree — 63,9,19,27,18,108,99,81`,marks:20,color:`#22c55e`,status:`✅ STUDIED`},{q:`Module 4 Q8: BST — 45,39,56,12,34,78 + Traversals`,marks:20,color:`#22c55e`,status:`✅ STUDIED`},{q:`Module 1: Infix→Postfix — trace table`,marks:20,color:`#22c55e`,status:`✅ STUDIED`},{q:`Module 2: Recursion types + Tower of Hanoi`,marks:15,color:`#f97316`,status:`📖 STUDY TONIGHT`},{q:`Module 2: SLL insertBegin + deleteFirst`,marks:10,color:`#f97316`,status:`📖 30 MIN ONLY`},{q:`Module 1 sub-Q: Stack Push/Pop/Peek`,marks:5,color:`#eab308`,status:`📖 15 MIN`}],Ue=[{t:`9:30 AM`,a:`Get paper. BREATHE. Read ALL 8 questions. Do not write yet.`},{t:`9:35 AM`,a:`DECIDE: Module 4 = Full (both Q7+Q8). Circle AVL and BST.`},{t:`9:40 AM`,a:`AVL Tree: Insert 63,9,19,27,18,108,99,81. Draw tree after EACH step. Name rotation (LR/RL).`},{t:`10:25 AM`,a:`BST: Construct 45,39,56,12,34,78. Write Inorder+Preorder+Postorder. Show search steps.`},{t:`11:00 AM`,a:`Module 1: Infix→Postfix. Write precedence table. Make trace table: Symbol | Stack | Output.`},{t:`11:35 AM`,a:`Module 2: Recursion — write definition + 4 types + TOH code + n=3 trace.`},{t:`12:10 PM`,a:`REVIEW: Add BF values to AVL. Label all diagrams. Check traversal output.`}],We={recursion:`RECURSION DEFINITION (2M):
A function that calls ITSELF. Must have:
• Base Case  — condition to STOP
• Recursive Case — calls itself with smaller input

4 TYPES (4M):
1. DIRECT   → fun() calls fun()
2. INDIRECT → A() calls B(), B() calls A()
3. TAIL     → recursive call is the LAST statement
4. NON-TAIL → work done AFTER recursive call

TOWER OF HANOI FUNCTION (4M):
void TOH(int n, char src, char dst, char aux) {
    if (n == 1) {
        printf("Move disk 1: %c to %c\\n", src, dst);
        return;
    }
    TOH(n-1, src, aux, dst);
    printf("Move disk %d: %c to %c\\n", n, src, dst);
    TOH(n-1, aux, dst, src);
}

TOH(3,'A','C','B') OUTPUT — 7 moves (2M):
Move disk 1: A → C
Move disk 2: A → B
Move disk 1: C → B
Move disk 3: A → C
Move disk 1: B → A
Move disk 2: B → C
Move disk 1: A → C`,sll:`SLL NODE STRUCTURE (2M):
struct Node {
    int data;
    struct Node *next;
};
struct Node *HEAD = NULL;

INSERT AT BEGINNING (4M):
void insertBegin(int val) {
    struct Node* n = malloc(sizeof(struct Node));
    n->data = val;
    n->next = HEAD;   // new node → old first
    HEAD = n;         // HEAD = new node
}

DELETE FIRST NODE (2M):
void deleteFirst() {
    if (HEAD == NULL) { printf("Empty"); return; }
    struct Node* temp = HEAD;
    HEAD = HEAD->next;
    free(temp);
}

DISPLAY (2M):
void display() {
    struct Node* temp = HEAD;
    while (temp != NULL) {
        printf("%d → ", temp->data);
        temp = temp->next;
    }
    printf("NULL");
}`,stack:`STACK — ARRAY (write this, simpler than LL):
int stack[100], top = -1;

PUSH (3M):
void push(int val) {
    if (top == 99) { printf("Overflow"); return; }
    top++;
    stack[top] = val;
}

POP (3M):
int pop() {
    if (top == -1) { printf("Underflow"); return -1; }
    int val = stack[top];
    top--;
    return val;
}

PEEK (2M):
int peek() { return stack[top]; }

DISPLAY (2M):
void display() {
    for (int i = top; i >= 0; i--)
        printf("%d ", stack[i]);
}`};function Ge(){let[e,t]=(0,l.useState)(null),[n,r]=(0,l.useState)(null);return He.reduce((e,t)=>e+t.marks,0),(0,O.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`12px 10px`},children:[(0,O.jsxs)(`div`,{style:{background:`linear-gradient(135deg,rgba(239,68,68,0.25),rgba(239,68,68,0.1))`,border:`3px solid #ef4444`,borderRadius:14,padding:`16px 18px`,marginBottom:14},children:[(0,O.jsx)(`div`,{style:{fontSize:20,fontWeight:900,color:`#ef4444`,marginBottom:6},children:`🚨 EXAM AT 9:30 AM — TONIGHT PLAN`}),(0,O.jsx)(`div`,{style:{fontSize:13,color:`#fca5a5`,marginBottom:12},children:`Current time: 11:38 PM · Time left to study: ~2 hours · Then SLEEP!`}),(0,O.jsxs)(`div`,{style:{background:`rgba(34,197,94,0.15)`,border:`2px solid rgba(34,197,94,0.4)`,borderRadius:10,padding:`12px 14px`,fontSize:14,fontWeight:800,color:`#22c55e`},children:[`✅ YOU ALREADY HAVE 60M SECURED!`,(0,O.jsxs)(`div`,{style:{fontSize:12,fontWeight:600,color:`#86efac`,marginTop:4},children:[`AVL (20M) + BST (20M) + Infix/Postfix (20M) = 60M from what you already studied!`,(0,O.jsx)(`br`,{}),`Study 2 more hours tonight → reach 75–85M`]})]})]}),(0,O.jsxs)(`div`,{style:{background:`rgba(0,0,0,0.3)`,border:`1px solid rgba(255,255,255,0.1)`,borderRadius:12,padding:`14px 16px`,marginBottom:14},children:[(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:900,color:`#7dd3fc`,marginBottom:12},children:`📊 YOUR SCORE BREAKDOWN — Expected Total: 75–90M`}),He.map((e,t)=>(0,O.jsxs)(`div`,{style:{display:`flex`,gap:10,padding:`9px 0`,borderBottom:t<5?`1px solid rgba(255,255,255,0.05)`:`none`,alignItems:`center`},children:[(0,O.jsxs)(`span`,{style:{background:e.color+`22`,color:e.color,border:`1px solid ${e.color}44`,borderRadius:6,padding:`3px 9px`,fontSize:13,fontWeight:900,flexShrink:0,minWidth:45,textAlign:`center`},children:[e.marks,`M`]}),(0,O.jsx)(`span`,{style:{flex:1,fontSize:12,color:`var(--text-primary)`},children:e.q}),(0,O.jsx)(`span`,{style:{fontSize:11,fontWeight:700,color:e.color,flexShrink:0},children:e.status})]},t)),(0,O.jsxs)(`div`,{style:{marginTop:12,padding:`10px 14px`,background:`rgba(34,197,94,0.12)`,borderRadius:8,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,O.jsx)(`span`,{style:{fontSize:14,fontWeight:800,color:`#22c55e`},children:`Expected Total (writing well)`}),(0,O.jsx)(`span`,{style:{fontSize:26,fontWeight:900,color:`#22c55e`},children:`75–90 / 100`})]})]}),(0,O.jsx)(`div`,{style:{fontSize:14,fontWeight:900,color:`#eab308`,marginBottom:10},children:`⏰ TONIGHT — What to Study Right Now:`}),Ve.map((n,r)=>{let i=e===r;return(0,O.jsxs)(`div`,{style:{marginBottom:10,borderRadius:12,border:`2px solid ${n.color}55`,background:`var(--bg-card)`,overflow:`hidden`},children:[(0,O.jsxs)(`div`,{style:{padding:`13px 16px`,cursor:`pointer`,display:`flex`,gap:12,alignItems:`flex-start`},onClick:()=>t(i?null:r),children:[(0,O.jsx)(`div`,{style:{flexShrink:0},children:(0,O.jsx)(`div`,{style:{background:n.color+`22`,color:n.color,border:`1px solid ${n.color}44`,borderRadius:7,padding:`4px 10px`,fontSize:11,fontWeight:800,marginBottom:4},children:n.time})}),(0,O.jsxs)(`div`,{style:{flex:1},children:[(0,O.jsx)(`div`,{style:{fontSize:14,fontWeight:900,color:`var(--text-primary)`,marginBottom:3},children:n.topic}),(0,O.jsxs)(`div`,{style:{fontSize:12,color:n.color,fontWeight:700},children:[n.marks,` — `,n.reason]})]}),(0,O.jsx)(`span`,{style:{fontSize:20,color:`var(--text-muted)`,flexShrink:0},children:i?`▲`:`▼`})]}),i&&(0,O.jsxs)(`div`,{style:{borderTop:`1px solid ${n.color}33`,padding:`14px 16px`},children:[(0,O.jsx)(`div`,{style:{fontSize:12,fontWeight:800,color:n.color,marginBottom:8},children:`✏️ WHAT TO WRITE IN EXAM (memorise these points):`}),n.mustWrite.map((e,t)=>(0,O.jsxs)(`div`,{style:{padding:`5px 0`,fontSize:12.5,color:`#e6edf3`,lineHeight:1.7},children:[(0,O.jsx)(`span`,{style:{color:n.color,marginRight:6},children:`→`}),e]},t)),n.exactQ.length>0&&(0,O.jsxs)(`div`,{style:{marginTop:12},children:[(0,O.jsx)(`div`,{style:{fontSize:11,fontWeight:900,color:`#7dd3fc`,textTransform:`uppercase`,letterSpacing:1,marginBottom:8},children:`📋 EXACT QUESTIONS FROM PYQ (verified):`}),n.exactQ.map((e,t)=>(0,O.jsxs)(`div`,{style:{background:`rgba(0,0,0,0.3)`,border:`1px solid ${n.color}33`,borderRadius:8,padding:`8px 12px`,marginBottom:6},children:[(0,O.jsxs)(`div`,{style:{fontSize:12,color:`#e6edf3`,lineHeight:1.7,marginBottom:4},children:[`"`,e.q,`"`]}),(0,O.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,O.jsxs)(`span`,{style:{fontSize:10,color:`#7dd3fc`,background:`rgba(6,182,212,0.1)`,padding:`2px 7px`,borderRadius:4},children:[`📅 `,e.year]}),(0,O.jsx)(`span`,{style:{fontSize:10,color:n.color,background:n.color+`15`,padding:`2px 7px`,borderRadius:4,fontWeight:700},children:e.marks})]})]},t))]})]})]},r)}),(0,O.jsx)(`div`,{style:{fontSize:14,fontWeight:900,color:`#a855f7`,margin:`16px 0 10px`},children:`📝 QUICK ANSWERS — Read once, write in exam:`}),[{id:`recursion`,label:`🔁 Recursion + TOH — Full Answer to Copy`,color:`#22c55e`},{id:`sll`,label:`🔗 SLL Insert+Delete — Full Answer to Copy`,color:`#f97316`},{id:`stack`,label:`📚 Stack Push/Pop — Full Answer to Copy`,color:`#ef4444`}].map(({id:e,label:t,color:i})=>(0,O.jsxs)(`div`,{style:{marginBottom:10,borderRadius:10,border:`2px solid ${i}44`,overflow:`hidden`},children:[(0,O.jsxs)(`div`,{style:{padding:`12px 16px`,cursor:`pointer`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,background:i+`10`},onClick:()=>r(n===e?null:e),children:[(0,O.jsx)(`span`,{style:{fontSize:13,fontWeight:800,color:i},children:t}),(0,O.jsx)(`span`,{style:{fontSize:20,color:`var(--text-muted)`},children:n===e?`▲`:`▼`})]}),n===e&&(0,O.jsx)(`pre`,{style:{fontFamily:`var(--font-mono)`,fontSize:12.5,lineHeight:2,color:`#e6edf3`,whiteSpace:`pre-wrap`,background:`rgba(0,0,0,0.4)`,padding:`16px 18px`,borderRadius:`0 0 10px 10px`,margin:0,overflowX:`auto`},children:We[e]})]},e)),(0,O.jsxs)(`div`,{style:{marginTop:16,background:`rgba(239,68,68,0.07)`,border:`2px solid rgba(239,68,68,0.35)`,borderRadius:12,padding:`14px 16px`},children:[(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:900,color:`#ef4444`,marginBottom:12},children:`🎯 TOMORROW 9:30 AM — Minute by Minute`}),Ue.map((e,t)=>(0,O.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:`8px 0`,borderBottom:t<6?`1px solid rgba(255,255,255,0.04)`:`none`,alignItems:`flex-start`},children:[(0,O.jsx)(`span`,{style:{background:`rgba(239,68,68,0.15)`,color:`#ef4444`,borderRadius:6,padding:`3px 9px`,fontSize:11,fontWeight:800,flexShrink:0,minWidth:75,textAlign:`center`},children:e.t}),(0,O.jsx)(`span`,{style:{fontSize:12.5,color:`var(--text-primary)`,lineHeight:1.7},children:e.a})]},t))]}),(0,O.jsxs)(`div`,{style:{marginTop:14,padding:`14px 16px`,background:`rgba(34,197,94,0.08)`,border:`2px solid rgba(34,197,94,0.35)`,borderRadius:12,textAlign:`center`},children:[(0,O.jsx)(`div`,{style:{fontSize:16,fontWeight:900,color:`#22c55e`,marginBottom:6},children:`💪 YOU ALREADY KNOW ENOUGH TO PASS!`}),(0,O.jsxs)(`div`,{style:{fontSize:12,color:`#86efac`,lineHeight:1.8},children:[`AVL + BST + Infix/Postfix = 60M secured. Add Recursion tonight = 75M.`,(0,O.jsx)(`br`,{}),`Write diagrams for every answer. Label everything. Sleep by 2 AM.`,(0,O.jsx)(`br`,{}),(0,O.jsx)(`strong`,{style:{color:`#22c55e`},children:`All the best — you can do this! 🎯`})]})]})]})}var Ke=[{id:`tonight`,label:`🔥 TONIGHT PLAN`,icon:T,group:`Main`,hot:!0},{id:`cheatsheet`,label:`⚡ CHEAT SHEET`,icon:T,group:`Main`,hot:!0},{id:`passplan`,label:`🚨 DSA PASS PLAN`,icon:T,group:`Main`,hot:!0},{id:`home`,label:`Dashboard`,icon:se,group:`Main`},{id:`strategy`,label:`Exam Strategy`,icon:T,group:`Main`},{id:`plan`,label:`Study Plan`,icon:C,group:`Study`},{id:`quiz`,label:`Quiz Mode`,icon:S,group:`Study`},{id:`pyq`,label:`PYQ Frequency`,icon:ce,group:`Content`},{id:`qbank`,label:`Question Bank`,icon:ee,group:`Content`},{id:`programs`,label:`Programs`,icon:ie,group:`Content`},{id:`theory`,label:`Theory`,icon:oe,group:`Content`}],qe=[{id:`tonight`,label:`🔥 Tonight`,icon:T},{id:`cheatsheet`,label:`⚡ Cheat`,icon:T},{id:`passplan`,label:`🚨 Pass`,icon:T},{id:`home`,label:`Home`,icon:se},{id:`plan`,label:`Plan`,icon:C},{id:`quiz`,label:`Quiz`,icon:S},{id:`programs`,label:`Code`,icon:ie}],Je={tonight:Ge,cheatsheet:Pe,passplan:Ne,home:ge,pyq:_e,qbank:ve,programs:Se,theory:we,plan:Ee,quiz:De,strategy:Oe};function Ye(){let[e,t]=(0,l.useState)(`tonight`),[n,r]=(0,l.useState)(!1),i=[...new Set(Ke.map(e=>e.group))],a=Je[e]||ge;return(0,O.jsxs)(`div`,{className:`app-layout`,children:[(0,O.jsxs)(`aside`,{className:`sidebar`,children:[(0,O.jsxs)(`div`,{className:`sidebar-logo`,children:[(0,O.jsx)(`h1`,{children:`🌀 DSA Study`}),(0,O.jsx)(`p`,{children:`MCE Hassan — Aug 2, 2026`})]}),(0,O.jsx)(`nav`,{className:`sidebar-nav`,children:i.map(n=>(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{className:`nav-section-label`,children:n}),Ke.filter(e=>e.group===n).map(n=>(0,O.jsxs)(`button`,{className:`nav-item ${e===n.id?`active`:``}`,onClick:()=>t(n.id),style:n.hot?{background:e===n.id?`rgba(239,68,68,0.2)`:`rgba(239,68,68,0.12)`,color:`#ef4444`,border:`1px solid rgba(239,68,68,0.35)`,fontWeight:800,position:`relative`}:{},children:[(0,O.jsx)(n.icon,{size:16}),n.label,n.hot&&(0,O.jsx)(`span`,{style:{marginLeft:`auto`,background:`#ef4444`,color:`white`,fontSize:10,fontWeight:700,padding:`1px 6px`,borderRadius:4,animation:`pulse 1s infinite`},children:`AUG 19`})]},n.id))]},n))}),(0,O.jsx)(`div`,{style:{padding:`12px 16px`,borderTop:`1px solid var(--border)`},children:(0,O.jsxs)(`div`,{style:{fontSize:`11px`,color:`var(--text-muted)`,lineHeight:1.5},children:[(0,O.jsx)(`span`,{style:{color:`var(--red)`,fontWeight:700},children:`LAST ATTEMPT`}),(0,O.jsx)(`br`,{}),`Pass = 40/100 marks`,(0,O.jsx)(`br`,{}),`Answer any 5 of 8 questions`]})})]}),(0,O.jsxs)(`header`,{className:`mobile-header`,children:[(0,O.jsx)(`div`,{style:{fontWeight:700,color:`var(--accent)`,fontSize:15},children:`🌀 DSA Study`}),(0,O.jsx)(`button`,{className:`btn-ghost btn`,onClick:()=>r(e=>!e),children:n?(0,O.jsx)(E,{size:20}):(0,O.jsx)(le,{size:20})})]}),n&&(0,O.jsx)(`div`,{style:{position:`fixed`,top:56,left:0,right:0,background:`var(--bg-secondary)`,borderBottom:`1px solid var(--border)`,zIndex:199,padding:`8px`,maxHeight:`calc(100vh - 56px)`,overflowY:`auto`},children:Ke.map(n=>(0,O.jsxs)(`button`,{className:`nav-item ${e===n.id?`active`:``}`,onClick:()=>{t(n.id),r(!1)},style:{width:`100%`},children:[(0,O.jsx)(n.icon,{size:16}),` `,n.label]},n.id))}),(0,O.jsx)(`main`,{className:`main-content`,children:(0,O.jsx)(a,{onNavigate:t})}),(0,O.jsx)(`nav`,{className:`mobile-nav`,children:qe.map(n=>(0,O.jsxs)(`button`,{className:`nav-item ${e===n.id?`active`:``}`,onClick:()=>t(n.id),style:{flex:1,flexDirection:`column`,gap:4,padding:`8px 4px`,fontSize:10},children:[(0,O.jsx)(n.icon,{size:18}),n.label]},n.id))})]})}(0,u.createRoot)(document.getElementById(`root`)).render((0,O.jsx)(l.StrictMode,{children:(0,O.jsx)(Ye,{})}));