const e={};function t(t){e.context=t}const n=Symbol("solid-proxy"),r={equals:(e,t)=>e===t};let o=null,s=_;const l={},i={owned:null,cleanups:null,context:null,owner:null},[u,c]=w(!1);var a=null;let d,f=null,h=null,p=null,g=null,v=null,y=0;function m(e,t){const n=h,r=a,o=0===e.length,s=o?i:{owned:null,cleanups:null,context:null,owner:t||r},l=o?e:()=>e((()=>I(s)));a=s,h=null;try{return R(l,!0)}finally{h=n,a=r}}function w(e,t){t=t?Object.assign({},r,t):r;const n={value:e,observers:null,observerSlots:null,pending:l,comparator:t.equals||void 0};return[T.bind(n),e=>("function"==typeof e&&(e=f&&f.running&&f.sources.has(n)?e(n.pending!==l?n.pending:n.tValue):e(n.pending!==l?n.pending:n.value)),q(n,e))]}function b(e,t,n){V(j(e,t,!0,1))}function x(e,t,n){V(j(e,t,!1,1))}function S(e,t,n){n=n?Object.assign({},r,n):r;const o=j(e,t,!0,0);return o.pending=l,o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,V(o),T.bind(o)}function A(e){if(p)return e();let t;const n=p=[];try{t=e()}finally{p=null}return R((()=>{for(let e=0;e<n.length;e+=1){const t=n[e];if(t.pending!==l){const e=t.pending;t.pending=l,q(t,e)}}}),!1),t}function P(e){let t,n=h;return h=null,t=e(),h=n,t}function k(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return n=>{let l;if(r){l=Array(e.length);for(let t=0;t<e.length;t++)l[t]=e[t]()}else l=e();if(s)return void(s=!1);const i=P((()=>t(l,o,n)));return o=l,i}}function C(e){return null===a||(null===a.cleanups?a.cleanups=[e]:a.cleanups.push(e)),e}function $(){return a}function E(e){if(f&&f.running)return e(),f.done;const t=h,n=a;return Promise.resolve().then((()=>{let r;return h=t,a=n,d&&(r=f||(f={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise((e=>r.resolve=e))),r.running=!0),A(e),h=a=null,r?r.done:void 0}))}function N(e){const t=Symbol("context");return{id:t,Provider:W(t),defaultValue:e}}function L(e){let t;return void 0!==(t=K(a,e.id))?t:e.defaultValue}function O(e){const t=S(e);return S((()=>z(t())))}function T(){const e=f&&f.running;if(this.sources&&(!e&&this.state||e&&this.tState)){const t=g;g=null,!e&&1===this.state||e&&1===this.tState?V(this):U(this),g=t}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return e&&f.sources.has(this)?this.tValue:this.value}function q(e,t,n){if(p)return e.pending===l&&p.push(e),e.pending=t,t;if(e.comparator)if(f&&f.running&&f.sources.has(e)){if(e.comparator(e.tValue,t))return t}else if(e.comparator(e.value,t))return t;let r=!1;return f?(r=f.running,(r||!n&&f.sources.has(e))&&(f.sources.add(e),e.tValue=t),r||(e.value=t)):e.value=t,e.observers&&e.observers.length&&R((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];r&&f.disposed.has(n)||((r&&!n.tState||!r&&!n.state)&&(n.pure?g.push(n):v.push(n),n.observers&&D(n)),r?n.tState=1:n.state=1)}if(g.length>1e6)throw g=[],new Error}),!1),t}function V(e){if(!e.fn)return;I(e);const t=a,n=h,r=y;h=a=e,M(e,f&&f.running&&f.sources.has(e)?e.tValue:e.value,r),f&&!f.running&&f.sources.has(e)&&queueMicrotask((()=>{R((()=>{f&&(f.running=!0),M(e,e.tValue,r)}),!1)})),h=n,a=t}function M(e,t,n){let r;try{r=e.fn(t)}catch(o){F(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?q(e,r,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function j(e,t,n,r=1,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:n};return f&&f.running&&(s.state=0,s.tState=r),null===a||a!==i&&(f&&f.running&&a.pure?a.tOwned?a.tOwned.push(s):a.tOwned=[s]:a.owned?a.owned.push(s):a.owned=[s]),s}function B(e){const t=f&&f.running;if(!t&&0===e.state||t&&0===e.tState)return;if(!t&&2===e.state||t&&2===e.tState)return U(e);if(e.suspense&&P(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<y);){if(t&&f.disposed.has(e))return;(!t&&e.state||t&&e.tState)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let t=e,o=n[r+1];for(;(t=t.owner)&&t!==o;)if(f.disposed.has(t))return}if(!t&&1===e.state||t&&1===e.tState)V(e);else if(!t&&2===e.state||t&&2===e.tState){const t=g;g=null,U(e,n[0]),g=t}}}function R(e,t){if(g)return e();let n=!1;t||(g=[]),v?n=!0:v=[],y++;try{const t=e();return function(e){g&&(_(g),g=null);if(e)return;let t;if(f&&f.running){if(f.promises.size||f.queue.size)return f.running=!1,f.effects.push.apply(f.effects,v),v=null,void c(!0);const e=f.sources,n=f.disposed;t=f.resolve;for(const t of v)"tState"in t&&(t.state=t.tState),delete t.tState;f=null,A((()=>{for(const e of n)I(e);for(const t of e){if(t.value=t.tValue,t.owned)for(let e=0,n=t.owned.length;e<n;e++)I(t.owned[e]);t.tOwned&&(t.owned=t.tOwned),delete t.tValue,delete t.tOwned,t.tState=0}c(!1)}))}v.length?A((()=>{s(v),v=null})):v=null;t&&t()}(n),t}catch(r){g||(v=null),F(r)}}function _(e){for(let t=0;t<e.length;t++)B(e[t])}function U(e,t){const n=f&&f.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];o.sources&&(!n&&1===o.state||n&&1===o.tState?o!==t&&B(o):(!n&&2===o.state||n&&2===o.tState)&&U(o,t))}}function D(e){const t=f&&f.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!t&&!r.state||t&&!r.tState)&&(t?r.tState=2:r.state=2,r.pure?g.push(r):v.push(r),r.observers&&D(r))}}function I(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(f&&f.running&&e.pure){if(e.tOwned){for(t=0;t<e.tOwned.length;t++)I(e.tOwned[t]);delete e.tOwned}H(e,!0)}else if(e.owned){for(t=0;t<e.owned.length;t++)I(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0,e.context=null}function H(e,t){if(t||(e.tState=0,f.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)H(e.owned[n])}function F(e){const t=o&&K(a,o);if(!t)throw e;for(const n of t)n(e)}function K(e,t){return e?e.context&&void 0!==e.context[t]?e.context[t]:K(e.owner,t):void 0}function z(e){if("function"==typeof e&&!e.length)return z(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=z(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function W(e){return function(t){let n;return b((()=>n=P((()=>(a.context={[e]:t.value},O((()=>t.children))))))),n}}let X=!1;function Y(n,r){if(X&&e.context){const o=e.context;t({...e.context,id:`${e.context.id}${e.context.count++}-`,count:0});const s=P((()=>n(r||{})));return t(o),s}return P((()=>n(r||{})))}function G(){return!0}const J={get:(e,t,r)=>t===n?r:e.get(t),has:(e,t)=>e.has(t),set:G,deleteProperty:G,getOwnPropertyDescriptor:(e,t)=>({configurable:!0,enumerable:!0,get:()=>e.get(t),set:G,deleteProperty:G}),ownKeys:e=>e.keys()};function Q(e){return null==(e="function"==typeof e?e():e)?{}:e}let Z,ee=0;function te(e){let t=!1;const n=S((()=>e.when),void 0,{equals:(e,n)=>t?e===n:!e==!n});return S((()=>{const r=n();if(r){const n=e.children;return(t="function"==typeof n&&n.length>0)?P((()=>n(r))):n}return e.fallback}))}const ne={};function re(){Z&&[...Z].forEach((e=>e(ne)))}function oe(t){let n=ne;e.context&&e.load&&(n=e.load(e.context.id+e.context.count)||ne);const[r,s]=w(n);return Z||(Z=new Set),Z.add(s),C((()=>Z.delete(s))),S((()=>{let e;if((e=r())!==ne){const n=t.fallback;return"function"==typeof n&&n.length?P((()=>n(e,(()=>s(ne))))):n}var n;return n=s,o||(o=Symbol("error")),null===a||(null===a.context?a.context={[o]:[n]}:a.context[o]?a.context[o].push(n):a.context[o]=[n]),t.children}))}const se=N();function le(n){let r,o,s,l,i,u,c=0;const[a,f]=w(!1),h=d||(d=N({})),p={increment:()=>{1==++c&&f(!0)},decrement:()=>{0==--c&&f(!1)},inFallback:a,effects:[],resolved:!1},g=$();if(e.context&&e.load){const n=e.context.id+e.context.count;if(l=e.load(n),l){"object"==typeof l&&"then"in l||(l=Promise.resolve(l));const[r,o]=w(void 0,{equals:!1});i=r,l.then((r=>{if((u=r)||e.done)return o();e.gather(n),t(s),o(),t()}))}else null===l&&e.gather(n)}const y=L(se);let b;return y&&([r,o]=y.register(p.inFallback)),C((()=>b&&b())),Y(h.Provider,{value:p,get children(){return S((()=>{if(u)throw u;if(s=e.context,i)return i(),i=void 0;s&&void 0===l&&t();const c=S((()=>n.children));return S((()=>{const e=p.inFallback(),i=!r||r(),u=!o||o();return b&&b(),e&&void 0===l||!i?u?m((e=>(b=e,s&&(t({id:s.id+"f",count:0}),s=void 0),n.fallback)),g):void 0:(p.resolved=!0,s=l=void 0,a=p.effects,v.push.apply(v,a),a.length=0,c());var a}))}))}})}const ie=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline","allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"]),ue=new Set(["innerHTML","textContent","innerText","children"]),ce={className:"class",htmlFor:"for"},ae={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},de=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),fe={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function he(e,t,n){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function pe(e,t=window.document){const n=t._$DX_DELEGATE||(t._$DX_DELEGATE=new Set);for(let r=0,o=e.length;r<o;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,Pe))}}function ge(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=t=>r.call(e,n[1],t))}else e.addEventListener(t,n)}function ve(e,t,n,r){"function"==typeof t?x((o=>ke(e,t(),o,n,r))):ke(e,t,void 0,n,r)}function ye(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return Ce(e,t,r,n);x((r=>Ce(e,t(),r,n)),r)}function me(t,n,r={}){e.completed=globalThis._$HY.completed,e.events=globalThis._$HY.events,e.load=globalThis._$HY.load,e.gather=e=>Le(n,e),e.registry=new Map,e.context={id:r.renderId||"",count:0},Le(n,r.renderId);const o=function(e,t,n){let r;return m((o=>{r=o,t===document?e():ye(t,e(),t.firstChild?null:void 0,n)})),()=>{r(),t.textContent=""}}(t,n,[...n.childNodes]);return e.context=null,o}function we(t){let n,r;return e.context&&(n=e.registry.get(r=function(){const t=e.context;return`${t.id}${t.count++}`}()))?(e.completed&&e.completed.add(n),e.registry.delete(r),n):t.cloneNode(!0)}function be(t){let n=t,r=0,o=[];if(e.context)for(;n;){if(8===n.nodeType){const e=n.nodeValue;if("#"===e)r++;else if("/"===e){if(0===r)return[n,o];r--}}o.push(n),n=n.nextSibling}return[n,o]}function xe(){e.events&&!e.events.queued&&(queueMicrotask((()=>{const{completed:t,events:n}=e;for(n.queued=!1;n.length;){const[e,r]=n[0];if(!t.has(e))return;Pe(r),n.shift()}})),e.events.queued=!0)}function Se(e,t,n){const r=t.trim().split(/\s+/);for(let o=0,s=r.length;o<s;o++)e.classList.toggle(r[o],n)}function Ae(e,t,n,r,o,s){let l,i,u;if("style"===t)return function(e,t,n={}){const r=e.style,o="string"==typeof n;if(null==t&&o||"string"==typeof t)return r.cssText=t;let s,l;for(l in o&&(r.cssText=void 0,n={}),t||(t={}),n)null==t[l]&&r.removeProperty(l),delete n[l];for(l in t)s=t[l],s!==n[l]&&(r.setProperty(l,s),n[l]=s);return n}(e,n,r);if("classList"===t)return function(e,t,n={}){const r=Object.keys(t||{}),o=Object.keys(n);let s,l;for(s=0,l=o.length;s<l;s++){const r=o[s];r&&"undefined"!==r&&!t[r]&&(Se(e,r,!1),delete n[r])}for(s=0,l=r.length;s<l;s++){const o=r[s],l=!!t[o];o&&"undefined"!==o&&n[o]!==l&&l&&(Se(e,o,!0),n[o]=l)}return n}(e,n,r);if(n===r)return r;if("ref"===t)s||n(e);else if("on:"===t.slice(0,3)){const o=t.slice(3);r&&e.removeEventListener(o,r),n&&e.addEventListener(o,n)}else if("oncapture:"===t.slice(0,10)){const o=t.slice(10);r&&e.removeEventListener(o,r,!0),n&&e.addEventListener(o,n,!0)}else if("on"===t.slice(0,2)){const o=t.slice(2).toLowerCase(),s=de.has(o);if(!s&&r){const t=Array.isArray(r)?r[0]:r;e.removeEventListener(o,t)}(s||n)&&(ge(e,o,n,s),s&&pe([o]))}else if((u=ue.has(t))||!o&&(ae[t]||(i=ie.has(t)))||(l=e.nodeName.includes("-")))"class"===t||"className"===t?function(e,t){null==t?e.removeAttribute("class"):e.className=t}(e,n):!l||i||u?e[ae[t]||t]=n:e[(c=t,c.toLowerCase().replace(/-([a-z])/g,((e,t)=>t.toUpperCase())))]=n;else{const r=o&&t.indexOf(":")>-1&&fe[t.split(":")[0]];r?function(e,t,n,r){null==r?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}(e,r,t,n):function(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}(e,ce[t]||t,n)}var c;return n}function Pe(t){const n=`$$${t.type}`;let r=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==r&&Object.defineProperty(t,"target",{configurable:!0,value:r}),Object.defineProperty(t,"currentTarget",{configurable:!0,get:()=>r||document}),e.registry&&!e.done&&(e.done=!0,document.querySelectorAll("[id^=pl-]").forEach((e=>e.remove())));null!==r;){const e=r[n];if(e&&!r.disabled){const o=r[`${n}Data`];if(void 0!==o?e.call(r,o,t):e.call(r,t),t.cancelBubble)return}r=r.host&&r.host!==r&&r.host instanceof Node?r.host:r.parentNode}}function ke(e,t,n={},r,o){return t||(t={}),!o&&"children"in t&&x((()=>n.children=Ce(e,t.children,n.children))),t.ref&&t.ref(e),x((()=>function(e,t,n,r,o={},s=!1){t||(t={});for(const l in o)if(!(l in t)){if("children"===l)continue;Ae(e,l,null,o[l],n,s)}for(const l in t){if("children"===l){r||Ce(e,t.children);continue}const i=t[l];o[l]=Ae(e,l,i,o[l],n,s)}}(e,t,r,!0,n,!0))),n}function Ce(t,n,r,o,s){for(e.context&&!r&&(r=[...t.childNodes]);"function"==typeof r;)r=r();if(n===r)return r;const l=typeof n,i=void 0!==o;if(t=i&&r[0]&&r[0].parentNode||t,"string"===l||"number"===l){if(e.context)return r;if("number"===l&&(n=n.toString()),i){let e=r[0];e&&3===e.nodeType?e.data=n:e=document.createTextNode(n),r=Ne(t,r,o,e)}else r=""!==r&&"string"==typeof r?t.firstChild.data=n:t.textContent=n}else if(null==n||"boolean"===l){if(e.context)return r;r=Ne(t,r,o)}else{if("function"===l)return x((()=>{let e=n();for(;"function"==typeof e;)e=e();r=Ce(t,e,r,o)})),()=>r;if(Array.isArray(n)){const l=[],u=r&&Array.isArray(r);if($e(l,n,r,s))return x((()=>r=Ce(t,l,r,o,!0))),()=>r;if(e.context)for(let e=0;e<l.length;e++)if(l[e].parentNode)return r=l;if(0===l.length){if(r=Ne(t,r,o),i)return r}else u?0===r.length?Ee(t,l,o):function(e,t,n){let r=n.length,o=t.length,s=r,l=0,i=0,u=t[o-1].nextSibling,c=null;for(;l<o||i<s;)if(t[l]!==n[i]){for(;t[o-1]===n[s-1];)o--,s--;if(o===l){const t=s<r?i?n[i-1].nextSibling:n[s-i]:u;for(;i<s;)e.insertBefore(n[i++],t)}else if(s===i)for(;l<o;)c&&c.has(t[l])||t[l].remove(),l++;else if(t[l]===n[s-1]&&n[i]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],r),t[o]=n[s]}else{if(!c){c=new Map;let e=i;for(;e<s;)c.set(n[e],e++)}const r=c.get(t[l]);if(null!=r)if(i<r&&r<s){let u,a=l,d=1;for(;++a<o&&a<s&&null!=(u=c.get(t[a]))&&u===r+d;)d++;if(d>r-i){const o=t[l];for(;i<r;)e.insertBefore(n[i++],o)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}else l++,i++}(t,r,l):(r&&Ne(t),Ee(t,l));r=l}else if(n instanceof Node){if(e.context&&n.parentNode)return r=i?[n]:n;if(Array.isArray(r)){if(i)return r=Ne(t,r,o,n);Ne(t,r,null,n)}else null!=r&&""!==r&&t.firstChild?t.replaceChild(n,t.firstChild):t.appendChild(n);r=n}}return r}function $e(e,t,n,r){let o=!1;for(let s=0,l=t.length;s<l;s++){let l=t[s],i=n&&n[s];if(l instanceof Node)e.push(l);else if(null==l||!0===l||!1===l);else if(Array.isArray(l))o=$e(e,l,i)||o;else if("function"==typeof l)if(r){for(;"function"==typeof l;)l=l();o=$e(e,Array.isArray(l)?l:[l],i)||o}else e.push(l),o=!0;else{const t=String(l);i&&3===i.nodeType&&i.data===t?e.push(i):e.push(document.createTextNode(t))}}return o}function Ee(e,t,n){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function Ne(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(o!==l){const t=l.parentNode===e;r||s?t&&l.remove():t?e.replaceChild(o,l):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}function Le(t,n){const r=t.querySelectorAll("*[data-hk]");for(let o=0;o<r.length;o++){const t=r[o],s=t.getAttribute("data-hk");n&&!s.startsWith(n)||e.registry.has(s)||e.registry.set(s,t)}}function Oe(){}function Te(t){return e.context?void 0:t.children}const qe=(...e)=>(X=!0,me(...e)),Ve={};const Me=N(),je=["title","meta"],Be=e=>e.tag+(e.name?`.${e.name}"`:""),Re=e=>{const t=new Map;function n(e){if(e.ref)return e.ref;let t=document.querySelector(`[data-sm="${e.id}"]`);return t?(t.tagName.toLowerCase()!==e.tag&&(t.parentNode&&t.parentNode.removeChild(t),t=document.createElement(e.tag)),t.removeAttribute("data-sm")):t=document.createElement(e.tag),t}const r={addClientTag:e=>{let r=Be(e);if(-1!==je.indexOf(e.tag)){t.has(r)||t.set(r,[]);let s=t.get(r),l=s.length;s=[...s,e],t.set(r,s);{let t=n(e);e.ref=t,ve(t,(()=>e.props));let r=null;for(var o=l-1;o>=0;o--)if(null!=s[o]){r=s[o];break}t.parentNode!=document.head&&document.head.appendChild(t),r&&r.ref&&document.head.removeChild(r.ref)}return l}{let t=n(e);e.ref=t,ve(t,(()=>e.props)),t.parentNode!=document.head&&document.head.appendChild(t)}return-1},removeClientTag:(e,n)=>{const r=Be(e);if(e.ref){const o=t.get(r);if(o){if(e.ref.parentNode){e.ref.parentNode.removeChild(e.ref);for(let e=n-1;e>=0;e--)null!=o[e]&&document.head.appendChild(o[e].ref)}o[n]=null,t.set(r,o)}else e.ref.parentNode&&e.ref.parentNode.removeChild(e.ref)}}};return Y(Me.Provider,{value:r,get children(){return e.children}})},_e=(t,n)=>{const r=function(){const t=e.context;return t?`${t.id}${t.count++}`:"cl-"+ee++}();if(!L(Me))throw new Error("<MetaProvider /> should be in the tree");return function(e){const{addClientTag:t,removeClientTag:n,addServerTag:r}=L(Me);x((()=>{{let r=t(e);C((()=>n(e,r)))}}))}({tag:t,props:n,id:r,get name(){return n.name||n.property}}),null};const Ue=e=>_e("title",e),De=e=>_e("meta",e);function Ie(e,t){const n=function(e){try{return document.querySelector(e)}catch(t){return null}}(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function He(){return function(e,t,n,r){let o=!1;const s=e=>"string"==typeof e?{value:e}:e,l=function([e,t],n,r){return[n?()=>n(e()):e,r?e=>t(r(e)):t]}(w(s(e()),{equals:(e,t)=>e.value===t.value}),void 0,(e=>(!o&&t(e),e)));return n&&C(n(((t=e())=>{o=!0,l[1](s(t)),o=!1}))),{signal:l,utils:r}}((()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state})),(({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Ie(window.location.hash.slice(1),n)}),(e=>{return t=window,n="popstate",r=()=>e(),t.addEventListener(n,r),()=>t.removeEventListener(n,r);var t,n,r}),{go:e=>window.history.go(e)})}const Fe=/^(?:[a-z0-9]+:)?\/\//i,Ke=/^\/+|\/+$/g;function ze(e,t=!1){const n=e.replace(Ke,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function We(e,t,n){if(Fe.test(t))return;const r=ze(e),o=n&&ze(n);let s="";return s=!o||t.startsWith("/")?r:0!==o.toLowerCase().indexOf(r.toLowerCase())?r+o:o,(s||"/")+ze(t,!s)}function Xe(e,t){return ze(e).replace(/\/*(\*.*)?$/g,"")+ze(t)}function Ye(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function Ge(e,t){const[n,r]=e.split("/*",2),o=n.split("/").filter(Boolean),s=o.length;return e=>{const n=e.split("/").filter(Boolean),l=n.length-s;if(l<0||l>0&&void 0===r&&!t)return null;const i={path:s?"":"/",params:{}};for(let t=0;t<s;t++){const e=o[t],r=n[t];if(":"===e[0])i.params[e.slice(1)]=r;else if(0!==e.localeCompare(r,void 0,{sensitivity:"base"}))return null;i.path+=`/${r}`}return r&&(i.params[r]=l?n.slice(-l).join("/"):""),i}}function Je(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce(((e,t)=>e+(t.startsWith(":")?2:3)),r.length-(void 0===n?0:1))}function Qe(e){const t=new Map,n=$();return new Proxy({},{get:(r,o)=>(t.has(o)||function(e,t){const n=a;a=e;try{R(t,!0)}finally{a=n}}(n,(()=>t.set(o,S((()=>e()[o]))))),t.get(o)()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),ownKeys:()=>Reflect.ownKeys(e())})}function Ze(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return Ze(r).reduce(((e,t)=>[...e,...o.map((e=>e+t))]),[])}const et=N(),tt=N(),nt=()=>function(e,t){if(null==e)throw new Error(t);return e}(L(et),"Make sure your app is wrapped in a <Router />");let rt;const ot=()=>rt||L(tt)||nt().base;function st(e,t="",n){const{component:r,data:o,children:s}=e,l=!s||Array.isArray(s)&&!s.length,i={key:e,element:r?()=>Y(r,{}):()=>{const{element:t}=e;return void 0===t&&n?Y(n,{}):t},preload:e.component?r.preload:e.preload,data:o};return it(e.path).reduce(((e,n)=>{for(const r of Ze(n)){const n=Xe(t,r),o=l?n:n.split("/*",1)[0];e.push({...i,originalPath:r,pattern:o,matcher:Ge(o,!l)})}return e}),[])}function lt(e,t=0){return{routes:e,score:1e4*Je(e[e.length-1])-t,matcher(t){const n=[];for(let r=e.length-1;r>=0;r--){const o=e[r],s=o.matcher(t);if(!s)return null;n.unshift({...s,route:o})}return n}}}function it(e){return Array.isArray(e)?e:[e]}function ut(e,t="",n,r=[],o=[]){const s=it(e);for(let l=0,i=s.length;l<i;l++){const e=s[l];if(e&&"object"==typeof e&&e.hasOwnProperty("path")){const s=st(e,t,n);for(const t of s){if(r.push(t),e.children)ut(e.children,t.pattern,n,r,o);else{const e=lt([...r],o.length);o.push(e)}r.pop()}}}return r.length?o:o.sort(((e,t)=>t.score-e.score))}function ct(e,t="",n,r){const{signal:[o,s],utils:l={}}=function(e){return e?Array.isArray(e)?{signal:e}:e:{signal:w({value:""})}}(e),i=l.parsePath||(e=>e),c=l.renderPath||(e=>e),a=We("",t);if(void 0===a)throw new Error(`${a} is not a valid base path`);a&&!o().value&&s({value:a,replace:!0,scroll:!1});const[d,f]=[u,E],[h,p]=w(o().value),[g,v]=w(o().state),y=function(e,t){const n=new URL("http://sar"),r=S((t=>{const r=e();try{return new URL(r,n)}catch(o){return console.error(`Invalid path ${r}`),t}}),n,{equals:(e,t)=>e.href===t.href}),o=S((()=>Ye(r().pathname))),s=S((()=>Ye(r().search,!0))),l=S((()=>Ye(r().hash))),i=S((()=>""));return{get pathname(){return o()},get search(){return s()},get hash(){return l()},get state(){return t()},get key(){return i()},query:Qe(k(s,(()=>function(e){const t={};return e.searchParams.forEach(((e,n)=>{t[n]=e})),t}(r()))))}}(h,g),m=[],b={pattern:a,params:{},path:()=>a,outlet:()=>null,resolvePath:e=>We(a,e)};if(n)try{rt=b,b.data=n({data:void 0,params:{},location:y,navigate:$(b)})}finally{rt=void 0}function A(e,t,n){P((()=>{if("number"==typeof t)return void(t&&(l.go?l.go(t):console.warn("Router integration does not support relative routing")));const{replace:r,resolve:o,scroll:i,state:u}={replace:!1,resolve:!0,scroll:!0,...n},c=o?e.resolvePath(t):We("",t);if(void 0===c)throw new Error(`Path '${t}' is not a routable path`);if(m.length>=100)throw new Error("Too many redirects");const a=h();if(c!==a||u!==g()){const e=m.push({value:a,replace:r,scroll:i,state:g()});f((()=>{p(c),v(u),re()})).then((()=>{m.length===e&&function(e){const t=m[0];t&&(e.value===t.value&&e.state===t.state||s({...e,replace:t.replace,scroll:t.scroll}),m.length=0)}({value:c,state:u})}))}}))}function $(e){return e=e||L(tt)||b,(t,n)=>A(e,t,n)}x((()=>{const{value:e,state:t}=o();P((()=>{e!==h()&&f((()=>{p(e),v(t)}))}))}));{let e=function(e){return"http://www.w3.org/2000/svg"===e.namespaceURI},t=function(t){if(t.defaultPrevented||0!==t.button||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)return;const n=t.composedPath().find((e=>e instanceof Node&&"A"===e.nodeName.toUpperCase()));if(!n)return;const r=e(n),o=r?n.href.baseVal:n.href;if((r?n.target.baseVal:n.target)||!o&&!n.hasAttribute("state"))return;const s=(n.getAttribute("rel")||"").split(/\s+/);if(n.hasAttribute("download")||s&&s.includes("external"))return;const l=r?new URL(o,document.baseURI):new URL(o),u=Ye(l.pathname);if(l.origin!==window.location.origin||a&&u&&!u.toLowerCase().startsWith(a.toLowerCase()))return;const c=i(u+Ye(l.search,!0)+Ye(l.hash)),d=n.getAttribute("state");t.preventDefault(),A(b,c,{resolve:!1,replace:n.hasAttribute("replace"),scroll:!n.hasAttribute("noscroll"),state:d&&JSON.parse(d)})};document.addEventListener("click",t),C((()=>document.removeEventListener("click",t)))}return{base:b,out:void 0,location:y,isRouting:d,renderPath:c,parsePath:i,navigatorFactory:$}}function at(e,t,n,r){const{base:o,location:s,navigatorFactory:l}=e,{pattern:i,element:u,preload:c,data:a}=r().route,d=S((()=>r().path)),f=Qe((()=>r().params));c&&c();const h={parent:t,pattern:i,get child(){return n()},path:d,params:f,data:t.data,outlet:u,resolvePath:e=>We(o.path(),e,d())};if(a)try{rt=h,h.data=a({data:t.data,params:f,location:s,navigate:l(h)})}finally{rt=void 0}return h}const dt=e=>{const{source:t,url:n,base:r,data:o,out:s}=e,l=ct(t||He(),r,o);return Y(et.Provider,{value:l,get children(){return e.children}})},ft=e=>{const t=nt(),n=ot(),r=O((()=>e.children)),o=S((()=>ut(r(),Xe(n.pattern,e.base||""),ht))),s=S((()=>function(e,t){for(let n=0,r=e.length;n<r;n++){const r=e[n].matcher(t);if(r)return r}return[]}(o(),t.location.pathname)));t.out&&t.out.matches.push(s().map((({route:e,path:t,params:n})=>({originalPath:e.originalPath,pattern:e.pattern,path:t,params:n}))));const l=[];let i;const u=S(k(s,((e,r,o)=>{let c=r&&e.length===r.length;const a=[];for(let i=0,d=e.length;i<d;i++){const d=r&&r[i],f=e[i];o&&d&&f.route.key===d.route.key?a[i]=o[i]:(c=!1,l[i]&&l[i](),m((e=>{l[i]=e,a[i]=at(t,a[i-1]||n,(()=>u()[i+1]),(()=>s()[i]))})))}return l.splice(e.length).forEach((e=>e())),o&&c?o:(i=a[0],a)})));return Y(te,{get when(){return u()&&i},children:e=>Y(tt.Provider,{value:e,get children(){return e.outlet()}})})},ht=()=>{const e=ot();return Y(te,{get when(){return e.child},children:e=>Y(tt.Provider,{value:e,get children(){return e.outlet()}})})},pt=N({}),gt=he('<div><div><p id="error-message"></p><button id="reset-errors">Clear errors and retry</button><pre></pre></div></div>');function vt(e){return Y(oe,{fallback:t=>Y(te,{get when(){return!e.fallback},get fallback(){return e.fallback(t)},get children(){return Y(yt,{error:t})}}),get children(){return e.children}})}function yt(e){return(()=>{const t=we(gt),n=t.firstChild,r=n.firstChild,o=r.nextSibling,s=o.nextSibling;return t.style.setProperty("padding","16px"),n.style.setProperty("background-color","rgba(252, 165, 165)"),n.style.setProperty("color","rgb(153, 27, 27)"),n.style.setProperty("border-radius","5px"),n.style.setProperty("overflow","scroll"),n.style.setProperty("padding","16px"),n.style.setProperty("margin-bottom","8px"),r.style.setProperty("font-weight","bold"),ye(r,(()=>e.error.message)),ge(o,"click",re,!0),o.style.setProperty("color","rgba(252, 165, 165)"),o.style.setProperty("background-color","rgb(153, 27, 27)"),o.style.setProperty("border-radius","5px"),o.style.setProperty("padding","4px 8px"),s.style.setProperty("margin-top","8px"),s.style.setProperty("width","100%"),ye(s,(()=>e.error.stack)),xe(),t})()}pe(["click"]);const mt={routes:[{component:function(n){let r,o;const s=s=>{const l=e.context;if(l){const[e,s]=w();(o||(o=n())).then((e=>{t(l),s((()=>e.default)),t()})),r=e}else if(r){const e=r();if(e)return e(s)}else{const[t]=function(t,n,r){2===arguments.length?"object"==typeof n&&(r=n,n=t,t=!0):1===arguments.length&&(n=t,t=!0),r||(r={});const o=new Set,[s,l]=w(r.initialValue),[i,u]=w(void 0,{equals:!1}),[c,p]=w(!1),[g,y]=w();let m,x=null,k=null,C=null,$=!1,E=!1,N="initialValue"in r,L="function"==typeof t&&S(t);function O(e,t,n,o){return x===e&&(x=null,N=!0,k&&(e===k||t===k)&&r.onHydrated&&queueMicrotask((()=>r.onHydrated(o,{value:t}))),k=null,y(m=n),f&&e&&$?(f.promises.delete(e),$=!1,R((()=>{f.running=!0,f.promises.size||(v.push.apply(v,f.effects),f.effects=[]),T(t)}),!1)):T(t)),t}function T(e){A((()=>{l((()=>e)),p(!1);for(const e of o.keys())e.decrement();o.clear()}))}function q(){const e=d&&K(a,d.id),t=s();if(m)throw m;return h&&!h.user&&e&&b((()=>{i(),x&&(e.resolved&&f?f.promises.add(x):o.has(e)||(e.increment(),o.add(e)))})),t}function V(e=!0){if(e&&E)return;E=!1,y(m=void 0);const r=L?L():t;if($=f&&f.running,null==r||!1===r)return void O(x,P(s));f&&x&&f.promises.delete(x);const o=k||P((()=>n(r,{value:s(),refetching:e})));return"object"==typeof o&&"then"in o?(x=o,E=!0,queueMicrotask((()=>E=!1)),A((()=>{p(!0),u()})),o.then((e=>O(o,e,void 0,r)),(e=>O(o,e,e)))):(O(x,o),o)}return e.context&&(C=`${e.context.id}${e.context.count++}`,e.load&&(k=e.load(C))),Object.defineProperties(q,{loading:{get:()=>c()},error:{get:()=>g()},latest:{get(){if(!N)return q();if(m)throw m;return s()}}}),L?b((()=>V(!1))):V(!1),[q,{refetch:V,mutate:l}]}((()=>(o||(o=n())).then((e=>e.default))));r=t}let i;return S((()=>(i=r())&&P((()=>{if(!l)return i(s);const n=e.context;t(l);const r=i(s);return t(n),r}))))};return s.preload=()=>o||((o=n()).then((e=>r=()=>e.default)),o),s}((()=>{return e=()=>import("./index.72900442.js"),(t=[])&&0!==t.length?Promise.all(t.map((e=>{if((e=function(e){return"/"+e}(e))in Ve)return;Ve[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((t,n)=>{r.addEventListener("load",t),r.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())):e();var e,t})),path:"/"}],routeLayouts:{"/":{id:"/",layouts:[]}}}.routes,wt=()=>mt;function bt(){return L(pt),[Y(Oe,{}),false,Y(Te,{get children(){return false}}),false]}function xt(e){return e.children}function St(e){return e.children}function At(e){{let t=O((()=>e.children));return ye(document.body,(()=>{let e=t();if(e){if(Array.isArray(e)){let t=e.filter((e=>Boolean(e)));return t.length?t:null}return e}return null}),null,[...document.body.childNodes]),document.body}}function Pt(e){return Y(ft,{get children(){return e.children}})}function kt(){return Y(xt,{lang:"en",get children(){return[Y(St,{get children(){return[Y(De,{charset:"utf-8"}),Y(De,{name:"viewport",content:"width=device-width, initial-scale=1"})]}}),Y(At,{get children(){return[Y(le,{get children(){return Y(vt,{get children(){return Y(Pt,{get children(){return Y(wt,{})}})}})}}),Y(bt,{})]}})]}})}const Ct=Object.values(Object.assign({}))[0],$t=Ct?Ct.default:void 0,Et=()=>{let e={get request(){},get prevUrl(){},get responseHeaders(){},get tags(){},get env(){},get routerContext(){},setStatusCode(e){},getStatusCode(){},$type:"$FETCH",fetch:fetch};function t(e){return Y(dt,function(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const r=Q(e[n])[t];if(void 0!==r)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in Q(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(Q(e[n])));return[...new Set(t)]}},J)}(e,{get children(){return Y(kt,{})}}))}return Y(pt.Provider,{value:e,get children(){return Y(Re,{get children(){return Y(t,{data:$t,get children(){return Y(kt,{})}})}})}})};var Nt;Nt=document,qe((()=>Y(Et,{})),Nt);export{Ue as T,be as a,Y as b,w as c,pe as d,we as g,ye as i,xe as r,he as t};