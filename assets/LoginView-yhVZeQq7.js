var Fn=Object.defineProperty;var Et=c=>{throw TypeError(c)};var qn=(c,i,l)=>i in c?Fn(c,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[i]=l;var te=(c,i,l)=>qn(c,typeof i!="symbol"?i+"":i,l),jt=(c,i,l)=>i.has(c)||Et("Cannot "+l);var T=(c,i,l)=>(jt(c,i,"read from private field"),l?l.call(c):i.get(c)),z=(c,i,l)=>i.has(c)?Et("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(c):i.set(c,l),$=(c,i,l,p)=>(jt(c,i,"write to private field"),p?p.call(c,l):i.set(c,l),l);import{B as $n,a as Ln,C as Dn,D as Bn,E as Nn,b as Vn,c as Un,F as Ot,K as Hn,R as zn,S as Qn,d as Gn,T as Kn,e as Jn,f as Wn,g as Xn,h as Yn,i as Zn,V as es,j as ts,k as ns,l as ss,m as os,n as rs,o as is,p as as,q as cs,r as ls,s as Rt,t as us,u as de,v as b,w as fs,x as ds,y as ps,z as hs,A as gs,G as ms,H as ke,I as K,J as ys,L as bs,M as pe,N as ws,O as xs,P as Ss,Q as vs,U as Is,W as Cs,X as ks,Y as Ts,Z as Es,_ as js,$ as Ps,a0 as Os,a1 as Rs,a2 as As,a3 as _s,a4 as Ms,a5 as Fs,a6 as qs,a7 as $s,a8 as Ls,a9 as Ds,aa as Bs,ab as Ns,ac as Vs,ad as Us,ae as Hs,af as zs,ag as Qs,ah as Gs,ai as Ks,aj as Js,ak as Ws,al as Xs,am as Ys,an as Zs,ao as eo,ap as to,aq as no,ar as so,as as oo,at as ro,au as io,av as ao,aw as co,ax as lo,ay as uo,az as fo,aA as po,aB as ho,aC as go,aD as mo,aE as yo,aF as bo,aG as wo,aH as xo,aI as So,aJ as vo,aK as se,aL as Io,aM as Co,aN as ko,aO as To,aP as Eo,aQ as jo,aR as Po,aS as U,aT as Oo,aU as Ro,aV as Ao,aW as _o,aX as Mo,aY as Fo,aZ as At,a_ as qo,a$ as $o,b0 as Lo,b1 as Do,b2 as Bo,b3 as No,b4 as Vo,b5 as Uo,b6 as Ho,b7 as zo,b8 as Qo,b9 as Go,ba as Ko,bb as Jo,bc as Wo,bd as Xo,be as Yo,bf as Zo,bg as er,bh as tr,bi as v,bj as nr,bk as sr,bl as or,bm as rr,bn as ir,bo as ar,bp as cr,bq as lr,br as ur,bs as fr,bt as dr,bu as pr,bv as hr,bw as gr,bx as mr,by as fe,bz as oe,bA as yr,bB as br,bC as wr,bD as xr,bE as Sr,bF as vr,bG as Ir,bH as Cr,bI as kr,bJ as N,bK as Tr,bL as Er,bM as jr,bN as Pr,bO as re,bP as Ue,bQ as He}from"./index-BlULwx9G.js";/**
* vue v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Or=()=>{},Rr=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:$n,BaseTransitionPropsValidators:Ln,Comment:Dn,DeprecationTypes:Bn,EffectScope:Nn,ErrorCodes:Vn,ErrorTypeStrings:Un,Fragment:Ot,KeepAlive:Hn,ReactiveEffect:zn,Static:Qn,Suspense:Gn,Teleport:Kn,Text:Jn,TrackOpTypes:Wn,Transition:Xn,TransitionGroup:Yn,TriggerOpTypes:Zn,VueElement:es,assertNumber:ts,callWithAsyncErrorHandling:ns,callWithErrorHandling:ss,camelize:os,capitalize:rs,cloneVNode:is,compatUtils:as,compile:Or,computed:cs,createApp:ls,createBlock:Rt,createCommentVNode:us,createElementBlock:de,createElementVNode:b,createHydrationRenderer:fs,createPropsRestProxy:ds,createRenderer:ps,createSSRApp:hs,createSlots:gs,createStaticVNode:ms,createTextVNode:ke,createVNode:K,customRef:ys,defineAsyncComponent:bs,defineComponent:pe,defineCustomElement:ws,defineEmits:xs,defineExpose:Ss,defineModel:vs,defineOptions:Is,defineProps:Cs,defineSSRCustomElement:ks,defineSlots:Ts,devtools:Es,effect:js,effectScope:Ps,getCurrentInstance:Os,getCurrentScope:Rs,getCurrentWatcher:As,getTransitionRawChildren:_s,guardReactiveProps:Ms,h:Fs,handleError:qs,hasInjectionContext:$s,hydrate:Ls,hydrateOnIdle:Ds,hydrateOnInteraction:Bs,hydrateOnMediaQuery:Ns,hydrateOnVisible:Vs,initCustomFormatter:Us,initDirectivesForSSR:Hs,inject:zs,isMemoSame:Qs,isProxy:Gs,isReactive:Ks,isReadonly:Js,isRef:Ws,isRuntimeOnly:Xs,isShallow:Ys,isVNode:Zs,markRaw:eo,mergeDefaults:to,mergeModels:no,mergeProps:so,nextTick:oo,normalizeClass:ro,normalizeProps:io,normalizeStyle:ao,onActivated:co,onBeforeMount:lo,onBeforeUnmount:uo,onBeforeUpdate:fo,onDeactivated:po,onErrorCaptured:ho,onMounted:go,onRenderTracked:mo,onRenderTriggered:yo,onScopeDispose:bo,onServerPrefetch:wo,onUnmounted:xo,onUpdated:So,onWatcherCleanup:vo,openBlock:se,popScopeId:Io,provide:Co,proxyRefs:ko,pushScopeId:To,queuePostFlushCb:Eo,reactive:jo,readonly:Po,ref:U,registerRuntimeCompiler:Oo,render:Ro,renderList:Ao,renderSlot:_o,resolveComponent:Mo,resolveDirective:Fo,resolveDynamicComponent:At,resolveFilter:qo,resolveTransitionHooks:$o,setBlockTracking:Lo,setDevtoolsHook:Do,setTransitionHooks:Bo,shallowReactive:No,shallowReadonly:Vo,shallowRef:Uo,ssrContextKey:Ho,ssrUtils:zo,stop:Qo,toDisplayString:Go,toHandlerKey:Ko,toHandlers:Jo,toRaw:Wo,toRef:Xo,toRefs:Yo,toValue:Zo,transformVNodeArgs:er,triggerRef:tr,unref:v,useAttrs:nr,useCssModule:sr,useCssVars:or,useHost:rr,useId:ir,useModel:ar,useSSRContext:cr,useShadowRoot:lr,useSlots:ur,useTemplateRef:fr,useTransitionState:dr,vModelCheckbox:pr,vModelDynamic:hr,vModelRadio:gr,vModelSelect:mr,vModelText:fe,vShow:oe,version:yr,warn:br,watch:wr,watchEffect:xr,watchPostEffect:Sr,watchSyncEffect:vr,withAsyncContext:Ir,withCtx:Cr,withDefaults:kr,withDirectives:N,withKeys:Tr,withMemo:Er,withModifiers:jr,withScopeId:Pr},Symbol.toStringTag,{value:"Module"}));var Ar=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _r(c){if(c.__esModule)return c;var i=c.default;if(typeof i=="function"){var l=function p(){return this instanceof p?Reflect.construct(i,arguments,this.constructor):i.apply(this,arguments)};l.prototype=i.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(c).forEach(function(p){var f=Object.getOwnPropertyDescriptor(c,p);Object.defineProperty(l,p,f.get?f:{enumerable:!0,get:function(){return c[p]}})}),l}var Ve={exports:{}};const Mr=_r(Rr);(function(c,i){(function(l,p){p(i,Mr)})(Ar,function(l,p){const f=/^[a-z0-9]+(-[a-z0-9]+)*$/,m=(e,t,n,o="")=>{const s=e.split(":");if(e.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;o=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const u=s.pop(),d=s.pop(),g={provider:s.length>0?s[0]:o,prefix:d,name:u};return t&&!x(g)?null:g}const r=s[0],a=r.split("-");if(a.length>1){const u={provider:o,prefix:a.shift(),name:a.join("-")};return t&&!x(u)?null:u}if(n&&o===""){const u={provider:o,prefix:"",name:r};return t&&!x(u,n)?null:u}return null},x=(e,t)=>e?!!((e.provider===""||e.provider.match(f))&&(t&&e.prefix===""||e.prefix.match(f))&&e.name.match(f)):!1,I=Object.freeze({left:0,top:0,width:16,height:16}),C=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),k=Object.freeze({...I,...C}),R=Object.freeze({...k,body:"",hidden:!1});function y(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const o=((e.rotate||0)+(t.rotate||0))%4;return o&&(n.rotate=o),n}function h(e,t){const n=y(e,t);for(const o in R)o in C?o in e&&!(o in n)&&(n[o]=C[o]):o in t?n[o]=t[o]:o in e&&(n[o]=e[o]);return n}function F(e,t){const n=e.icons,o=e.aliases||Object.create(null),s=Object.create(null);function r(a){if(n[a])return s[a]=[];if(!(a in s)){s[a]=null;const u=o[a]&&o[a].parent,d=u&&r(u);d&&(s[a]=[u].concat(d))}return s[a]}return Object.keys(n).concat(Object.keys(o)).forEach(r),s}function Mt(e,t,n){const o=e.icons,s=e.aliases||Object.create(null);let r={};function a(u){r=h(o[u]||s[u],r)}return a(t),n.forEach(a),h(e,r)}function Ke(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(s=>{t(s,null),n.push(s)});const o=F(e);for(const s in o){const r=o[s];r&&(t(s,Mt(e,s,r)),n.push(s))}return n}const Ft={provider:"",aliases:{},not_found:{},...I};function Te(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Je(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!Te(e,Ft))return null;const n=t.icons;for(const s in n){const r=n[s];if(!s.match(f)||typeof r.body!="string"||!Te(r,R))return null}const o=t.aliases||Object.create(null);for(const s in o){const r=o[s],a=r.parent;if(!s.match(f)||typeof a!="string"||!n[a]&&!o[a]||!Te(r,R))return null}return t}const ge=Object.create(null);function qt(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function H(e,t){const n=ge[e]||(ge[e]=Object.create(null));return n[t]||(n[t]=qt(e,t))}function Ee(e,t){return Je(t)?Ke(t,(n,o)=>{o?e.icons[n]=o:e.missing.add(n)}):[]}function $t(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}function Lt(e,t){let n=[];return(typeof e=="string"?[e]:Object.keys(ge)).forEach(s=>{(typeof s=="string"&&typeof t=="string"?[t]:Object.keys(ge[s]||{})).forEach(a=>{const u=H(s,a);n=n.concat(Object.keys(u.icons).map(d=>(s!==""?"@"+s+":":"")+a+":"+d))})}),n}let ae=!1;function We(e){return typeof e=="boolean"&&(ae=e),ae}function me(e){const t=typeof e=="string"?m(e,!0,ae):e;if(t){const n=H(t.provider,t.prefix),o=t.name;return n.icons[o]||(n.missing.has(o)?null:void 0)}}function Xe(e,t){const n=m(e,!0,ae);if(!n)return!1;const o=H(n.provider,n.prefix);return $t(o,n.name,t)}function Ye(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),ae&&!t&&!e.prefix){let s=!1;return Je(e)&&(e.prefix="",Ke(e,(r,a)=>{a&&Xe(r,a)&&(s=!0)})),s}const n=e.prefix;if(!x({provider:t,prefix:n,name:"a"}))return!1;const o=H(t,n);return!!Ee(o,e)}function Ze(e){return!!me(e)}function Dt(e){const t=me(e);return t?{...k,...t}:null}const et=Object.freeze({width:null,height:null}),tt=Object.freeze({...et,...C}),Bt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Nt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function je(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const o=e.split(Bt);if(o===null||!o.length)return e;const s=[];let r=o.shift(),a=Nt.test(r);for(;;){if(a){const u=parseFloat(r);isNaN(u)?s.push(r):s.push(Math.ceil(u*t*n)/n)}else s.push(r);if(r=o.shift(),r===void 0)return s.join("");a=!a}}function Vt(e,t="defs"){let n="";const o=e.indexOf("<"+t);for(;o>=0;){const s=e.indexOf(">",o),r=e.indexOf("</"+t);if(s===-1||r===-1)break;const a=e.indexOf(">",r);if(a===-1)break;n+=e.slice(s+1,r).trim(),e=e.slice(0,o).trim()+e.slice(a+1)}return{defs:n,content:e}}function Ut(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Ht(e,t,n){const o=Vt(e);return Ut(o.defs,t+o.content+n)}const zt=e=>e==="unset"||e==="undefined"||e==="none";function nt(e,t){const n={...k,...e},o={...tt,...t},s={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,o].forEach(O=>{const S=[],ee=O.hFlip,W=O.vFlip;let q=O.rotate;ee?W?q+=2:(S.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),S.push("scale(-1 1)"),s.top=s.left=0):W&&(S.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),S.push("scale(1 -1)"),s.top=s.left=0);let _;switch(q<0&&(q-=Math.floor(q/4)*4),q=q%4,q){case 1:_=s.height/2+s.top,S.unshift("rotate(90 "+_.toString()+" "+_.toString()+")");break;case 2:S.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:_=s.width/2+s.left,S.unshift("rotate(-90 "+_.toString()+" "+_.toString()+")");break}q%2===1&&(s.left!==s.top&&(_=s.left,s.left=s.top,s.top=_),s.width!==s.height&&(_=s.width,s.width=s.height,s.height=_)),S.length&&(r=Ht(r,'<g transform="'+S.join(" ")+'">',"</g>"))});const a=o.width,u=o.height,d=s.width,g=s.height;let w,E;a===null?(E=u===null?"1em":u==="auto"?g:u,w=je(E,d/g)):(w=a==="auto"?d:a,E=u===null?je(w,g/d):u==="auto"?g:u);const P={},A=(O,S)=>{zt(S)||(P[O]=S.toString())};A("width",w),A("height",E);const V=[s.left,s.top,d,g];return P.viewBox=V.join(" "),{attributes:P,viewBox:V,body:r}}const Qt=/\sid="(\S+)"/g,Gt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Kt=0;function st(e,t=Gt){const n=[];let o;for(;o=Qt.exec(e);)n.push(o[1]);if(!n.length)return e;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(r=>{const a=typeof t=="function"?t(r):t+(Kt++).toString(),u=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+u+')([")]|\\.[a-z])',"g"),"$1"+a+s+"$3")}),e=e.replace(new RegExp(s,"g"),""),e}const Pe=Object.create(null);function ot(e,t){Pe[e]=t}function Oe(e){return Pe[e]||Pe[""]}function Re(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const ye=Object.create(null),ce=["https://api.simplesvg.com","https://api.unisvg.com"],be=[];for(;ce.length>0;)ce.length===1||Math.random()>.5?be.push(ce.shift()):be.push(ce.pop());ye[""]=Re({resources:["https://api.iconify.design"].concat(be)});function rt(e,t){const n=Re(t);return n===null?!1:(ye[e]=n,!0)}function we(e){return ye[e]}function Jt(){return Object.keys(ye)}let xe=(()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}})();function Wt(e){xe=e}function Xt(){return xe}function Yt(e,t){const n=we(e);if(!n)return 0;let o;if(!n.maxURL)o=0;else{let s=0;n.resources.forEach(a=>{s=Math.max(s,a.length)});const r=t+".json?icons=";o=n.maxURL-s-n.path.length-r.length}return o}function Zt(e){return e===404}const en=(e,t,n)=>{const o=[],s=Yt(e,t),r="icons";let a={type:r,provider:e,prefix:t,icons:[]},u=0;return n.forEach((d,g)=>{u+=d.length+1,u>=s&&g>0&&(o.push(a),a={type:r,provider:e,prefix:t,icons:[]},u=d.length),a.icons.push(d)}),o.push(a),o};function tn(e){if(typeof e=="string"){const t=we(e);if(t)return t.path}return"/"}const nn={prepare:en,send:(e,t,n)=>{if(!xe){n("abort",424);return}let o=tn(t.provider);switch(t.type){case"icons":{const r=t.prefix,u=t.icons.join(","),d=new URLSearchParams({icons:u});o+=r+".json?"+d.toString();break}case"custom":{const r=t.uri;o+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let s=503;xe(e+o).then(r=>{const a=r.status;if(a!==200){setTimeout(()=>{n(Zt(a)?"abort":"next",a)});return}return s=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?n("abort",r):n("next",s)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",s)})}};function sn(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((s,r)=>s.provider!==r.provider?s.provider.localeCompare(r.provider):s.prefix!==r.prefix?s.prefix.localeCompare(r.prefix):s.name.localeCompare(r.name));let o={provider:"",prefix:"",name:""};return e.forEach(s=>{if(o.name===s.name&&o.prefix===s.prefix&&o.provider===s.provider)return;o=s;const r=s.provider,a=s.prefix,u=s.name,d=n[r]||(n[r]=Object.create(null)),g=d[a]||(d[a]=H(r,a));let w;u in g.icons?w=t.loaded:a===""||g.missing.has(u)?w=t.missing:w=t.pending;const E={provider:r,prefix:a,name:u};w.push(E)}),t}function it(e,t){e.forEach(n=>{const o=n.loaderCallbacks;o&&(n.loaderCallbacks=o.filter(s=>s.id!==t))})}function on(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const o=e.provider,s=e.prefix;t.forEach(r=>{const a=r.icons,u=a.pending.length;a.pending=a.pending.filter(d=>{if(d.prefix!==s)return!0;const g=d.name;if(e.icons[g])a.loaded.push({provider:o,prefix:s,name:g});else if(e.missing.has(g))a.missing.push({provider:o,prefix:s,name:g});else return n=!0,!0;return!1}),a.pending.length!==u&&(n||it([e],r.id),r.callback(a.loaded.slice(0),a.missing.slice(0),a.pending.slice(0),r.abort))})}))}let rn=0;function an(e,t,n){const o=rn++,s=it.bind(null,n,o);if(!t.pending.length)return s;const r={id:o,icons:t,callback:e,abort:s};return n.forEach(a=>{(a.loaderCallbacks||(a.loaderCallbacks=[])).push(r)}),s}function cn(e,t=!0,n=!1){const o=[];return e.forEach(s=>{const r=typeof s=="string"?m(s,t,n):s;r&&o.push(r)}),o}var ln={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function un(e,t,n,o){const s=e.resources.length,r=e.random?Math.floor(Math.random()*s):e.index;let a;if(e.random){let j=e.resources.slice(0);for(a=[];j.length>1;){const M=Math.floor(Math.random()*j.length);a.push(j[M]),j=j.slice(0,M).concat(j.slice(M+1))}a=a.concat(j)}else a=e.resources.slice(r).concat(e.resources.slice(0,r));const u=Date.now();let d="pending",g=0,w,E=null,P=[],A=[];typeof o=="function"&&A.push(o);function V(){E&&(clearTimeout(E),E=null)}function O(){d==="pending"&&(d="aborted"),V(),P.forEach(j=>{j.status==="pending"&&(j.status="aborted")}),P=[]}function S(j,M){M&&(A=[]),typeof j=="function"&&A.push(j)}function ee(){return{startTime:u,payload:t,status:d,queriesSent:g,queriesPending:P.length,subscribe:S,abort:O}}function W(){d="failed",A.forEach(j=>{j(void 0,w)})}function q(){P.forEach(j=>{j.status==="pending"&&(j.status="aborted")}),P=[]}function _(j,M,ue){const Ie=M!=="success";switch(P=P.filter(X=>X!==j),d){case"pending":break;case"failed":if(Ie||!e.dataAfterTimeout)return;break;default:return}if(M==="abort"){w=ue,W();return}if(Ie){w=ue,P.length||(a.length?Be():W());return}if(V(),q(),!e.random){const X=e.resources.indexOf(j.resource);X!==-1&&X!==e.index&&(e.index=X)}d="completed",A.forEach(X=>{X(ue)})}function Be(){if(d!=="pending")return;V();const j=a.shift();if(j===void 0){if(P.length){E=setTimeout(()=>{V(),d==="pending"&&(q(),W())},e.timeout);return}W();return}const M={status:"pending",resource:j,callback:(ue,Ie)=>{_(M,ue,Ie)}};P.push(M),g++,E=setTimeout(Be,e.rotate),n(j,t,M.callback)}return setTimeout(Be),ee}function at(e){const t={...ln,...e};let n=[];function o(){n=n.filter(u=>u().status==="pending")}function s(u,d,g){const w=un(t,u,d,(E,P)=>{o(),g&&g(E,P)});return n.push(w),w}function r(u){return n.find(d=>u(d))||null}return{query:s,find:r,setIndex:u=>{t.index=u},getIndex:()=>t.index,cleanup:o}}function ct(){}const Ae=Object.create(null);function fn(e){if(!Ae[e]){const t=we(e);if(!t)return;const n=at(t),o={config:t,redundancy:n};Ae[e]=o}return Ae[e]}function lt(e,t,n){let o,s;if(typeof e=="string"){const r=Oe(e);if(!r)return n(void 0,424),ct;s=r.send;const a=fn(e);a&&(o=a.redundancy)}else{const r=Re(e);if(r){o=at(r);const a=e.resources?e.resources[0]:"",u=Oe(a);u&&(s=u.send)}}return!o||!s?(n(void 0,424),ct):o.query(t,s,n)().abort}const ut="iconify2",le="iconify",ft=le+"-count",dt=le+"-version",pt=36e5,dn=168,pn=50;function _e(e,t){try{return e.getItem(t)}catch{}}function Me(e,t,n){try{return e.setItem(t,n),!0}catch{}}function ht(e,t){try{e.removeItem(t)}catch{}}function Fe(e,t){return Me(e,ft,t.toString())}function qe(e){return parseInt(_e(e,ft))||0}const J={local:!0,session:!0},gt={local:new Set,session:new Set};let $e=!1;function hn(e){$e=e}let Se=typeof window>"u"?{}:window;function mt(e){const t=e+"Storage";try{if(Se&&Se[t]&&typeof Se[t].length=="number")return Se[t]}catch{}J[e]=!1}function yt(e,t){const n=mt(e);if(!n)return;const o=_e(n,dt);if(o!==ut){if(o){const u=qe(n);for(let d=0;d<u;d++)ht(n,le+d.toString())}Me(n,dt,ut),Fe(n,0);return}const s=Math.floor(Date.now()/pt)-dn,r=u=>{const d=le+u.toString(),g=_e(n,d);if(typeof g=="string"){try{const w=JSON.parse(g);if(typeof w=="object"&&typeof w.cached=="number"&&w.cached>s&&typeof w.provider=="string"&&typeof w.data=="object"&&typeof w.data.prefix=="string"&&t(w,u))return!0}catch{}ht(n,d)}};let a=qe(n);for(let u=a-1;u>=0;u--)r(u)||(u===a-1?(a--,Fe(n,a)):gt[e].add(u))}function bt(){if(!$e){hn(!0);for(const e in J)yt(e,t=>{const n=t.data,o=t.provider,s=n.prefix,r=H(o,s);if(!Ee(r,n).length)return!1;const a=n.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,a):a,!0})}}function gn(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const o in J)yt(o,s=>{const r=s.data;return s.provider!==e.provider||r.prefix!==e.prefix||r.lastModified===t});return!0}function mn(e,t){$e||bt();function n(o){let s;if(!J[o]||!(s=mt(o)))return;const r=gt[o];let a;if(r.size)r.delete(a=Array.from(r).shift());else if(a=qe(s),a>=pn||!Fe(s,a+1))return;const u={cached:Math.floor(Date.now()/pt),provider:e.provider,data:t};return Me(s,le+a.toString(),JSON.stringify(u))}t.lastModified&&!gn(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function wt(){}function yn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,on(e)}))}function bn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:o}=e,s=e.iconsToLoad;delete e.iconsToLoad;let r;if(!s||!(r=Oe(n)))return;r.prepare(n,o,s).forEach(u=>{lt(n,u,d=>{if(typeof d!="object")u.icons.forEach(g=>{e.missing.add(g)});else try{const g=Ee(e,d);if(!g.length)return;const w=e.pendingIcons;w&&g.forEach(E=>{w.delete(E)}),mn(e,d)}catch(g){console.error(g)}yn(e)})})}))}const Le=(e,t)=>{const n=cn(e,!0,We()),o=sn(n);if(!o.pending.length){let d=!0;return t&&setTimeout(()=>{d&&t(o.loaded,o.missing,o.pending,wt)}),()=>{d=!1}}const s=Object.create(null),r=[];let a,u;return o.pending.forEach(d=>{const{provider:g,prefix:w}=d;if(w===u&&g===a)return;a=g,u=w,r.push(H(g,w));const E=s[g]||(s[g]=Object.create(null));E[w]||(E[w]=[])}),o.pending.forEach(d=>{const{provider:g,prefix:w,name:E}=d,P=H(g,w),A=P.pendingIcons||(P.pendingIcons=new Set);A.has(E)||(A.add(E),s[g][w].push(E))}),r.forEach(d=>{const{provider:g,prefix:w}=d;s[g][w].length&&bn(d,s[g][w])}),t?an(t,o,r):wt},wn=e=>new Promise((t,n)=>{const o=typeof e=="string"?m(e,!0):e;if(!o){n(e);return}Le([o||e],s=>{if(s.length&&o){const r=me(o);if(r){t({...k,...r});return}}n(e)})});function xt(e,t){switch(e){case"local":case"session":J[e]=t;break;case"all":for(const n in J)J[n]=t;break}}function xn(e,t){const n={...e};for(const o in t){const s=t[o],r=typeof s;o in et?(s===null||s&&(r==="string"||r==="number"))&&(n[o]=s):r===typeof n[o]&&(n[o]=o==="rotate"?s%4:s)}return n}const Sn=/[\s,]+/;function vn(e,t){t.split(Sn).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function In(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function o(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(e);return isNaN(s)?0:o(s)}else if(n!==e){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r=r/s,r%1===0?o(r):0)}}return t}function Cn(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in t)n+=" "+o+'="'+t[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function kn(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Tn(e){return"data:image/svg+xml,"+kn(e)}function En(e){return'url("'+Tn(e)+'")'}const St={...tt,inline:!1},jn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Pn={display:"inline-block"},De={backgroundColor:"currentColor"},vt={backgroundColor:"transparent"},It={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Ct={webkitMask:De,mask:De,background:vt};for(const e in Ct){const t=Ct[e];for(const n in It)t[e+n]=It[n]}const ve={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";ve[e+"-flip"]=t,ve[e.slice(0,1)+"-flip"]=t,ve[e+"Flip"]=t});function kt(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const Tt=(e,t)=>{const n=xn(St,t),o={...jn},s=t.mode||"svg",r={},a=t.style,u=typeof a=="object"&&!(a instanceof Array)?a:{};for(let O in t){const S=t[O];if(S!==void 0)switch(O){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[O]=S===!0||S==="true"||S===1;break;case"flip":typeof S=="string"&&vn(n,S);break;case"color":r.color=S;break;case"rotate":typeof S=="string"?n[O]=In(S):typeof S=="number"&&(n[O]=S);break;case"ariaHidden":case"aria-hidden":S!==!0&&S!=="true"&&delete o["aria-hidden"];break;default:{const ee=ve[O];ee?(S===!0||S==="true"||S===1)&&(n[ee]=!0):St[O]===void 0&&(o[O]=S)}}}const d=nt(e,n),g=d.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),s==="svg"){o.style={...r,...u},Object.assign(o,g);let O=0,S=t.id;return typeof S=="string"&&(S=S.replace(/-/g,"_")),o.innerHTML=st(d.body,S?()=>S+"ID"+O++:"iconifyVue"),p.h("svg",o)}const{body:w,width:E,height:P}=e,A=s==="mask"||(s==="bg"?!1:w.indexOf("currentColor")!==-1),V=Cn(w,{...g,width:E+"",height:P+""});return o.style={...r,"--svg":En(V),width:kt(g.width),height:kt(g.height),...Pn,...A?De:vt,...u},p.h("span",o)};function On(e){xt(e,!0)}function Rn(e){xt(e,!1)}if(We(!0),ot("",nn),typeof document<"u"&&typeof window<"u"){bt();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!Ye(o))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const o="IconifyProviders["+n+"] is invalid.";try{const s=t[n];if(typeof s!="object"||!s||s.resources===void 0)continue;rt(n,s)||console.error(o)}catch{console.error(o)}}}}const An={...k,body:""},_n=p.defineComponent({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,t){if(typeof e=="object"&&e!==null&&typeof e.body=="string")return this._name="",this.abortLoading(),{data:e};let n;if(typeof e!="string"||(n=m(e,!1,!0))===null)return this.abortLoading(),null;const o=me(n);if(!o)return(!this._loadingIcon||this._loadingIcon.name!==e)&&(this.abortLoading(),this._name="",o!==null&&(this._loadingIcon={name:e,abort:Le([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==e&&(this._name=e,t&&t(e));const s=["iconify"];return n.prefix!==""&&s.push("iconify--"+n.prefix),n.provider!==""&&s.push("iconify--"+n.provider),{data:o,classes:s}}},render(){this.counter;const e=this.$attrs,t=this.iconMounted||e.ssr?this.getIcon(e.icon,e.onLoad):null;if(!t)return Tt(An,e);let n=e;return t.classes&&(n={...e,class:(typeof e.class=="string"?e.class+" ":"")+t.classes.join(" ")}),Tt({...k,...t.data},n)}}),Mn={getAPIConfig:we,setAPIModule:ot,sendAPIQuery:lt,setFetch:Wt,getFetch:Xt,listAPIProviders:Jt};l.Icon=_n,l._api=Mn,l.addAPIProvider=rt,l.addCollection=Ye,l.addIcon=Xe,l.buildIcon=nt,l.calculateSize=je,l.disableCache=Rn,l.enableCache=On,l.getIcon=Dt,l.iconExists=Ze,l.iconLoaded=Ze,l.listIcons=Lt,l.loadIcon=wn,l.loadIcons=Le,l.replaceIDs=st})})(Ve,Ve.exports);var Y=Ve.exports;const ze="/Netease/5FCFB688BF47CEA5FED5BAB01605BE50.png";class Pt extends Error{constructor(l,p,f){super(f);te(this,"url");te(this,"status");te(this,"statusText");te(this,"body");te(this,"request");this.name="ApiError",this.url=p.url,this.status=p.status,this.statusText=p.statusText,this.body=p.body,this.request=l}}class Fr extends Error{constructor(i){super(i),this.name="CancelError"}get isCancelled(){return!0}}var D,B,L,Q,Z,ne,G;class qr{constructor(i){z(this,D);z(this,B);z(this,L);z(this,Q);z(this,Z);z(this,ne);z(this,G);$(this,D,!1),$(this,B,!1),$(this,L,!1),$(this,Q,[]),$(this,Z,new Promise((l,p)=>{$(this,ne,l),$(this,G,p);const f=I=>{T(this,D)||T(this,B)||T(this,L)||($(this,D,!0),T(this,ne)&&T(this,ne).call(this,I))},m=I=>{T(this,D)||T(this,B)||T(this,L)||($(this,B,!0),T(this,G)&&T(this,G).call(this,I))},x=I=>{T(this,D)||T(this,B)||T(this,L)||T(this,Q).push(I)};return Object.defineProperty(x,"isResolved",{get:()=>T(this,D)}),Object.defineProperty(x,"isRejected",{get:()=>T(this,B)}),Object.defineProperty(x,"isCancelled",{get:()=>T(this,L)}),i(f,m,x)}))}get[Symbol.toStringTag](){return"Cancellable Promise"}then(i,l){return T(this,Z).then(i,l)}catch(i){return T(this,Z).catch(i)}finally(i){return T(this,Z).finally(i)}cancel(){if(!(T(this,D)||T(this,B)||T(this,L))){if($(this,L,!0),T(this,Q).length)try{for(const i of T(this,Q))i()}catch(i){console.warn("Cancellation threw an error",i);return}T(this,Q).length=0,T(this,G)&&T(this,G).call(this,new Fr("Request aborted"))}}get isCancelled(){return T(this,L)}}D=new WeakMap,B=new WeakMap,L=new WeakMap,Q=new WeakMap,Z=new WeakMap,ne=new WeakMap,G=new WeakMap;const Qe=c=>c!=null,he=c=>typeof c=="string",Ne=c=>he(c)&&c!=="",Ge=c=>typeof c=="object"&&typeof c.type=="string"&&typeof c.stream=="function"&&typeof c.arrayBuffer=="function"&&typeof c.constructor=="function"&&typeof c.constructor.name=="string"&&/^(Blob|File)$/.test(c.constructor.name)&&/^(Blob|File)$/.test(c[Symbol.toStringTag]),_t=c=>c instanceof FormData,$r=c=>{try{return btoa(c)}catch{return Buffer.from(c).toString("base64")}},Lr=c=>{const i=[],l=(f,m)=>{i.push(`${encodeURIComponent(f)}=${encodeURIComponent(String(m))}`)},p=(f,m)=>{Qe(m)&&(Array.isArray(m)?m.forEach(x=>{p(f,x)}):typeof m=="object"?Object.entries(m).forEach(([x,I])=>{p(`${f}[${x}]`,I)}):l(f,m))};return Object.entries(c).forEach(([f,m])=>{p(f,m)}),i.length>0?`?${i.join("&")}`:""},Dr=(c,i)=>{const l=encodeURI,p=i.url.replace("{api-version}",c.VERSION).replace(/{(.*?)}/g,(m,x)=>{var I;return(I=i.path)!=null&&I.hasOwnProperty(x)?l(String(i.path[x])):m}),f=`${c.BASE}${p}`;return i.query?`${f}${Lr(i.query)}`:f},Br=c=>{if(c.formData){const i=new FormData,l=(p,f)=>{he(f)||Ge(f)?i.append(p,f):i.append(p,JSON.stringify(f))};return Object.entries(c.formData).filter(([p,f])=>Qe(f)).forEach(([p,f])=>{Array.isArray(f)?f.forEach(m=>l(p,m)):l(p,f)}),i}},Ce=async(c,i)=>i,Nr=async(c,i)=>{const[l,p,f,m]=await Promise.all([Ce(i,c.TOKEN),Ce(i,c.USERNAME),Ce(i,c.PASSWORD),Ce(i,c.HEADERS)]),x=Object.entries({Accept:"application/json",...m,...i.headers}).filter(([I,C])=>Qe(C)).reduce((I,[C,k])=>({...I,[C]:String(k)}),{});if(Ne(l)&&(x.Authorization=`Bearer ${l}`),Ne(p)&&Ne(f)){const I=$r(`${p}:${f}`);x.Authorization=`Basic ${I}`}return i.body!==void 0&&(i.mediaType?x["Content-Type"]=i.mediaType:Ge(i.body)?x["Content-Type"]=i.body.type||"application/octet-stream":he(i.body)?x["Content-Type"]="text/plain":_t(i.body)||(x["Content-Type"]="application/json")),new Headers(x)},Vr=c=>{var i;if(c.body!==void 0)return(i=c.mediaType)!=null&&i.includes("/json")?JSON.stringify(c.body):he(c.body)||Ge(c.body)||_t(c.body)?c.body:JSON.stringify(c.body)},Ur=async(c,i,l,p,f,m,x)=>{const I=new AbortController,C={headers:m,body:p??f,method:i.method,signal:I.signal};return x(()=>I.abort()),await fetch(l,C)},Hr=(c,i)=>{if(i){const l=c.headers.get(i);if(he(l))return l}},zr=async c=>{if(c.status!==204)try{const i=c.headers.get("Content-Type");if(i)return["application/json","application/problem+json"].some(f=>i.toLowerCase().startsWith(f))?await c.json():await c.text()}catch(i){console.error(i)}},Qr=(c,i)=>{const p={400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found",500:"Internal Server Error",502:"Bad Gateway",503:"Service Unavailable",...c.errors}[i.status];if(p)throw new Pt(c,i,p);if(!i.ok){const f=i.status??"unknown",m=i.statusText??"unknown",x=(()=>{try{return JSON.stringify(i.body,null,2)}catch{return}})();throw new Pt(c,i,`Generic Error: status: ${f}; status text: ${m}; body: ${x}`)}},ie=(c,i)=>new qr(async(l,p,f)=>{try{const m=Dr(c,i),x=Br(i),I=Vr(i),C=await Nr(c,i);if(!f.isCancelled){const k=await Ur(c,i,m,I,x,C,f),R=await zr(k),y=Hr(k,i.responseHeader),h={url:m,ok:k.ok,status:k.status,statusText:k.statusText,body:y??R};Qr(i,h),l(h.body)}}catch(m){p(m)}});class Gr{static getQuickKey(){return ie(re,{method:"GET",url:"/login/qr/key"})}}class Kr{static getQuickImg(i,l=!1){return ie(re,{method:"GET",url:"/login/qr/create",query:{key:i,qrimg:l}})}}class Jr{static getPhoneSend(i){return ie(re,{method:"GET",url:"/captcha/sent",query:{phone:i}})}}class Wr{static getPhonePhone(i,l){return ie(re,{method:"GET",url:"/login/cellphone",query:{phone:i,captcha:l}})}}class Xr{static getEmail(i,l){return ie(re,{method:"GET",url:"/login",query:{email:i,password:l}})}}class Yr{static getStatus(i){return ie(re,{method:"GET",url:"/login/qr/check",query:{key:i}})}}const Zr={class:"flex flex-col gap-4"},ei={class:"flex gap-4"},ti={class:"flex flex-col items-center gap-4"},ni={class:"input input-bordered flex items-center gap-2"},si={class:"flex flex-col items-center gap-4"},oi={class:"input input-bordered flex items-center gap-2"},ri=pe({__name:"PhoneView",emits:["qw"],setup(c,{emit:i}){const l=Ue(),p=He();let f=U(!0),m=U({phone:"",captcha:""});const x=async()=>{await Jr.getPhoneSend(m.value.phone).then(y=>{console.log(y)})},I=async()=>{await Wr.getPhonePhone(m.value.phone,m.value.captcha).then(y=>{localStorage.setItem("cookie",y.cookie),localStorage.setItem("id",String(y.account.id));let h=p.query.originPath;typeof h=="string"?l.push(h):(Array.isArray(h)&&h.length>0,l.push("/"))})};let C=()=>(f.value=!1,x()),k=()=>I();const R=i;return(y,h)=>(se(),de("div",Zr,[b("div",ei,[K(v(Y.Icon),{icon:"ic:twotone-arrow-back-ios",class:"w-6 h-6",style:{color:"black"},onClick:h[0]||(h[0]=F=>R("qw"))}),h[5]||(h[5]=b("p",{class:"text-xl"},"手机号登录",-1))]),h[8]||(h[8]=b("div",{class:"fixed bottom-0"},[b("img",{src:ze,alt:""})],-1)),N(b("div",ti,[b("label",ni,[h[6]||(h[6]=b("select",{class:"select w-full max-w-xs"},[b("option",null,"+86"),b("option",null,"+1"),b("option",null,"+2")],-1)),N(b("input",{type:"text",class:"grow",placeholder:" 请输入手机号","onUpdate:modelValue":h[1]||(h[1]=F=>v(m).phone=F)},null,512),[[fe,v(m).phone]])]),b("button",{onClick:h[2]||(h[2]=(...F)=>v(C)&&v(C)(...F)),class:"btn btn-secondary bg-primary rounded-full w-4/5"}," 下一步 ")],512),[[oe,v(f)]]),N(b("div",si,[b("label",oi,[h[7]||(h[7]=ke(" 验证码 ")),N(b("input",{type:"text","onUpdate:modelValue":h[3]||(h[3]=F=>v(m).phone=F),class:"grow",placeholder:"请输入验证码"},null,512),[[fe,v(m).phone]])]),b("button",{onClick:h[4]||(h[4]=(...F)=>v(k)&&v(k)(...F)),class:"btn btn-secondary bg-primary rounded-full w-4/5"}," 登录 ")],512),[[oe,!v(f)]])]))}}),ii={class:"flex flex-col gap-4"},ai={class:"flex gap-4"},ci={class:"flex flex-col items-center gap-4"},li={class:"input input-bordered flex items-center gap-2"},ui={class:"flex flex-col items-center gap-4"},fi={class:"input input-bordered flex items-center gap-2"},di=pe({__name:"EmailView",emits:["qw"],setup(c,{emit:i}){const l=Ue(),p=He();let f=U(!0);const m=async()=>{await Xr.getEmail(I.value.email,I.value.password).then(R=>{localStorage.setItem("cookie",R.cookie),localStorage.setItem("id",String(R.account.id));let y=p.query.originPath;typeof y=="string"?l.push(y):(Array.isArray(y)&&y.length>0,l.push("/"))})},x=i;let I=U({email:"",password:""}),C=()=>m(),k=()=>{f.value=!1};return(R,y)=>(se(),de("div",ii,[b("div",ai,[K(v(Y.Icon),{icon:"ic:twotone-arrow-back-ios",class:"w-6 h-6",style:{color:"black"},onClick:y[0]||(y[0]=h=>x("qw"))}),y[5]||(y[5]=b("p",{class:"text-xl"},"邮箱登录",-1))]),y[8]||(y[8]=b("div",{class:"fixed bottom-0"},[b("img",{src:ze,alt:""})],-1)),N(b("div",ci,[b("label",li,[y[6]||(y[6]=ke(" 邮箱 ")),N(b("input",{type:"text",class:"grow",placeholder:"请输入邮箱@163.com","onUpdate:modelValue":y[1]||(y[1]=h=>v(I).email=h)},null,512),[[fe,v(I).email]])]),b("button",{onClick:y[2]||(y[2]=(...h)=>v(k)&&v(k)(...h)),class:"btn btn-secondary bg-primary rounded-full w-4/5"}," 下一步 ")],512),[[oe,v(f)]]),N(b("div",ui,[b("label",fi,[y[7]||(y[7]=ke(" 密码 ")),N(b("input",{type:"text",class:"grow",placeholder:"请输入密码","onUpdate:modelValue":y[3]||(y[3]=h=>v(I).password=h)},null,512),[[fe,v(I).password]])]),b("button",{onClick:y[4]||(y[4]=(...h)=>v(C)&&v(C)(...h)),class:"btn btn-secondary bg-primary rounded-full w-4/5"}," 登陆 ")],512),[[oe,!v(f)]])]))}}),pi={class:"flex gap-4 flex-col"},hi={class:"flex gap-4"},gi={class:"flex flex-col items-center"},mi=["src"],yi=pe({__name:"QuickView",emits:["qw"],setup(c,{emit:i}){const l=Ue(),p=He();let f=U(""),m=U("");const x=i;(async()=>{await Gr.getQuickKey().then(y=>{console.log(y.data.unikey),f.value=y.data.unikey,console.log(f.value)}),await Kr.getQuickImg(f.value,!0).then(y=>{console.log(f.value),console.log(y.data.qrimg),m.value=y.data.qrimg,console.log(m.value)}),R()})();let C;const k=()=>{C&&(clearInterval(C),C=void 0)},R=()=>{C=setInterval(async()=>{try{const y=await Yr.getStatus(f.value);switch(y.code){case 800:console.log("二维码过期"),k();break;case 801:console.log("等待扫码");break;case 802:console.log("待确认"),k();break;case 803:console.log("登录成功"),console.log(y),alert("登录成功"),localStorage.setItem("user",y.cookie);let h=p.query.originPath;typeof h=="string"?l.push(h):(Array.isArray(h)&&h.length>0,l.push("/")),k();break;default:console.log("接口出错"),k();break}}catch(y){console.error("请求出错:",y),k()}},2e3)};return(y,h)=>(se(),de("div",pi,[b("div",hi,[K(v(Y.Icon),{icon:"ic:twotone-arrow-back-ios",class:"w-6 h-6",style:{color:"black"},onClick:h[0]||(h[0]=F=>x("qw"))}),h[1]||(h[1]=b("p",{class:"text-xl"},"二维码登录",-1))]),b("div",gi,[h[2]||(h[2]=b("div",{class:"text-xl"},"请扫描二维码",-1)),b("img",{src:v(m),alt:""},null,8,mi)]),h[3]||(h[3]=b("div",{class:"fixed bottom-0"},[b("img",{src:ze,alt:""})],-1))]))}}),bi={class:"h-screen flex flex-col gap-4 p-4 bg-primary",id:"type"},wi={class:"flex items-center justify-center h-full"},xi={class:"flex justify-around"},Si={class:"flex justify-around"},Ti=pe({__name:"LoginView",setup(c){let i=U(!0),l=U(null),p=()=>{i.value=!1,l.value=ri},f=()=>{i.value=!1,l.value=di},m=()=>{i.value=!1,l.value=yi},x=()=>{i.value=!0,l.value=null};return(I,C)=>(se(),de(Ot,null,[N(b("div",bi,[b("div",wi,[K(v(Y.Icon),{icon:"simple-icons:neteasecloudmusic",class:"h-28 w-28 text-[white]"})]),b("div",xi,[b("button",{onClick:C[0]||(C[0]=(...k)=>v(p)&&v(p)(...k)),class:"btn btn-outline rounded-full bg-white text-primary"}," 手机号登录 "),b("button",{onClick:C[1]||(C[1]=(...k)=>v(f)&&v(f)(...k)),class:"btn btn-outline rounded-full bg-white text-primary"}," 邮箱登录 "),b("button",{onClick:C[2]||(C[2]=(...k)=>v(m)&&v(m)(...k)),class:"btn btn-outline rounded-full bg-white text-primary"}," 二维码登录 ")]),b("div",Si,[K(v(Y.Icon),{icon:"ic:baseline-wechat",class:"h-9 w-9 text-[white]"}),K(v(Y.Icon),{icon:"mingcute:qq-fill",class:"h-9 w-9 text-[white]"}),K(v(Y.Icon),{icon:"fa:weibo",class:"h-9 w-9 text-[white]"})]),C[3]||(C[3]=b("div",{class:"flex justify-center"},[b("input",{type:"checkbox"}),b("p",{class:"text-xs text-[white]"}," 同意 《用户协议》 《隐私政策》 《儿童隐私政策》 ")],-1))],512),[[oe,v(i)]]),(se(),Rt(At(v(l)),{onQw:v(x)},null,40,["onQw"]))],64))}});export{Ti as default};
