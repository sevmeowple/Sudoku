import{O as We,s as le,p as Q,k as N,n as W,i as p,o as Ye,P as Ge,Q as ce,R as ae,e as C,t as P,b as O,d as E,f as I,h as V,j as q,v as g,l as v,S as H,T as Xe,m as U,D as Ze,A as ne,U as je,V as Ke,r as xe,W as oe,X as $e,Y as fe,Z as F,_ as J,F as et,$ as de}from"../chunks/scheduler.C77K6qMD.js";import{S as se,i as re,g as tt,a as j,c as lt,t as K,b as Ne,d as Le,m as Be,e as Me}from"../chunks/index.DMZdqBSS.js";import{w as Ie,r as nt}from"../chunks/paths.gmwj-QVc.js";function Y(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}const te="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-";function ot(){const l=Array.from({length:9},()=>Array(9).fill(0));return st(l),Oe(l,0,3),l}function st(l){for(let e=0;e<9;e+=3)rt(l,e,e)}function rt(l,e,t){const o=Array.from({length:9},(n,s)=>s+1);o.sort(()=>Math.random()-.5);for(let n=0;n<3;n++)for(let s=0;s<3;s++)l[e+n][t+s]=o.pop()}function Oe(l,e,t){if(t>=9&&e<8&&(e++,t=0),e>=9&&t>=9)return!0;if(e<3)t<3&&(t=3);else if(e<6)t===Math.floor(e/3)*3&&(t+=3);else if(t===6&&(e++,t=0,e>=9))return!0;for(let o=1;o<=9;o++)if(ie(l,e,t,o)){if(l[e][t]=o,Oe(l,e,t+1))return!0;l[e][t]=0}return!1}function ie(l,e,t,o){for(let h=0;h<=8;h++)if(l[e][h]===o||l[h][t]===o)return!1;const n=Math.floor(e/3)*3,s=Math.floor(t/3)*3;for(let h=0;h<3;h++)for(let u=0;u<3;u++)if(l[h+n][u+s]===o)return!1;return!0}function qe(l){let e=De(l);if(e[0]===-1)return!0;let t=e[0],o=e[1];for(let n=1;n<=9;n++)if(ie(l,t,o,n)){if(l[t][o]=n,qe(l))return!0;l[t][o]=0}return!1}function De(l){for(let e=0;e<9;e++)for(let t=0;t<9;t++)if(l[e][t]===0)return[e,t];return[-1,-1]}function it(l){let e=l.map(t=>t.slice());return Ae(e)}function Ae(l){let e=De(l);if(e[0]===-1)return 1;let t=e[0],o=e[1],n=0;for(let s=1;s<=9;s++)if(ie(l,t,o,s)){if(l[t][o]=s,n+=Ae(l),n>1)return n;l[t][o]=0}return n}function ut(l,e){let t=0;for(;e>0&&t<81;){let o=Math.floor(Math.random()*9),n=Math.floor(Math.random()*9);if(l[o][n]===0){t++;continue}let s=l[o][n];l[o][n]=0;let h=l.map(u=>u.slice());it(h)!==1?(l[o][n]=s,t++):e--}}function ct(l){let e=ot(),t=30;console.log(l),l=="0"&&(t=30),l=="1"&&(t=40),l=="2"&&(t=50),l=="3"&&(t=60);let o=Math.floor(Math.random()*7)-3,n=t+o;return console.log(n),ut(e,n),e}function at(l){let e="";for(let n of l)e+=n.join("");let t=BigInt(e);return ft(t)}function ft(l){let e="";if(l===0n)return te[0];for(;l>0n;)e=te[Number(l%64n)]+e,l=l/64n;return e}function dt(l){let t=ht(l).toString().padStart(81,"0"),o=[];for(let n=0;n<81;n+=9){let s=t.slice(n,n+9).split("").map(Number);o.push(s)}return o}function ht(l){let e=0n;for(let t=0;t<l.length;t++)e=e*64n+BigInt(te.indexOf(l[t]));return e}function x(l){let e=l.map(t=>t.slice());return qe(e),e}const mt=Ie(void 0),$={};function he(l){return l==="local"?localStorage:sessionStorage}function ue(l,e,t){const o=JSON,n="local";function s(h,u){he(n).setItem(h,o.stringify(u))}if(!$[l]){const h=Ie(e,c=>{const a=he(n).getItem(l);a&&c(o.parse(a));{const f=b=>{b.key===l&&c(b.newValue?o.parse(b.newValue):null)};return window.addEventListener("storage",f),()=>window.removeEventListener("storage",f)}}),{subscribe:u,set:r}=h;$[l]={set(c){s(l,c),r(c)},update(c){const a=c(We(h));s(l,a),r(a)},subscribe:u}}return $[l]}ue("modeOsPrefers",!1);ue("modeUserPrefers",void 0);ue("modeCurrent",!1);const Fe="(prefers-reduced-motion: reduce)";function _t(){return window.matchMedia(Fe).matches}nt(_t(),l=>{{const e=o=>{l(o.matches)},t=window.matchMedia(Fe);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}});function bt(l,e){if(!window.isSecureContext)return console.error("Clipboard action failed: app not running in secure context, see: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard"),{};const t=()=>{l.dispatchEvent(new CustomEvent("copyComplete"))},o=()=>{if(typeof e=="object"){if("element"in e){const n=document.querySelector(`[data-clipboard="${e.element}"]`);if(!n)throw new Error(`Missing HTMLElement with an attribute of [data-clipboard="${e.element}"]`);ee(n.innerHTML,"text/html").then(t);return}if("input"in e){const n=document.querySelector(`[data-clipboard="${e.input}"]`);if(!n)throw new Error(`Missing HTMLInputElement with an attribute of [data-clipboard="${e.input}"]`);ee(n.value).then(t);return}}ee(e).then(t)};return l.addEventListener("click",o),{update(n){e=n},destroy(){l.removeEventListener("click",o)}}}async function ee(l,e="text/plain"){navigator.clipboard.write?await navigator.clipboard.write([new ClipboardItem({[e]:new Blob([l],{type:e}),"text/plain":new Blob([l],{type:"text/plain"})})]):await new Promise(t=>{t(navigator.clipboard.writeText(String(l)))})}function me(l){let e,t,o,n=_e(l[0])+"",s,h,u,r=(l[7]?l[4]:l[3])+"",c,a,f,b,_,i,d,T,L,S;function y(m,B){return m[6]?vt:pt}let D=y(l),k=D(l);return{c(){e=C("div"),t=C("header"),o=C("span"),s=P(n),h=O(),u=C("button"),c=P(r),b=O(),_=C("pre"),i=C("code"),k.c(),this.h()},l(m){e=E(m,"DIV",{class:!0,"data-testid":!0});var B=I(e);t=E(B,"HEADER",{class:!0});var R=I(t);o=E(R,"SPAN",{class:!0});var X=I(o);s=V(X,n),X.forEach(p),h=q(R),u=E(R,"BUTTON",{type:!0,class:!0});var z=I(u);c=V(z,r),z.forEach(p),R.forEach(p),b=q(B),_=E(B,"PRE",{class:!0});var G=I(_);i=E(G,"CODE",{class:!0});var Z=I(i);k.l(Z),Z.forEach(p),G.forEach(p),B.forEach(p),this.h()},h(){g(o,"class","codeblock-language"),g(u,"type","button"),g(u,"class",a="codeblock-btn "+l[2]),g(t,"class","codeblock-header "+Ct),g(i,"class",d="codeblock-code language-"+l[0]+" lineNumbers"),g(_,"class","codeblock-pre "+Et),g(e,"class",T="codeblock "+l[8]),g(e,"data-testid","codeblock")},m(m,B){N(m,e,B),v(e,t),v(t,o),v(o,s),v(t,h),v(t,u),v(u,c),v(e,b),v(e,_),v(_,i),k.m(i,null),L||(S=[H(u,"click",l[9]),Xe(f=bt.call(null,u,l[1]))],L=!0)},p(m,B){B&1&&n!==(n=_e(m[0])+"")&&U(s,n),B&152&&r!==(r=(m[7]?m[4]:m[3])+"")&&U(c,r),B&4&&a!==(a="codeblock-btn "+m[2])&&g(u,"class",a),f&&Ze(f.update)&&B&2&&f.update.call(null,m[1]),D===(D=y(m))&&k?k.p(m,B):(k.d(1),k=D(m),k&&(k.c(),k.m(i,null))),B&1&&d!==(d="codeblock-code language-"+m[0]+" lineNumbers")&&g(i,"class",d),B&256&&T!==(T="codeblock "+m[8])&&g(e,"class",T)},d(m){m&&p(e),k.d(),L=!1,ne(S)}}}function pt(l){let e=l[1].trim()+"",t;return{c(){t=P(e)},l(o){t=V(o,e)},m(o,n){N(o,t,n)},p(o,n){n&2&&e!==(e=o[1].trim()+"")&&U(t,e)},d(o){o&&p(t)}}}function vt(l){let e,t;return{c(){e=new je(!1),t=Q(),this.h()},l(o){e=Ke(o,!1),t=Q(),this.h()},h(){e.a=t},m(o,n){e.m(l[5],o,n),N(o,t,n)},p(o,n){n&32&&e.p(o[5])},d(o){o&&(p(t),e.d())}}}function gt(l){let e,t=l[0]&&l[1]&&me(l);return{c(){t&&t.c(),e=Q()},l(o){t&&t.l(o),e=Q()},m(o,n){t&&t.m(o,n),N(o,e,n)},p(o,[n]){o[0]&&o[1]?t?t.p(o,n):(t=me(o),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:W,o:W,d(o){o&&p(e),t&&t.d(o)}}}const kt="overflow-hidden shadow",Ct="text-xs text-white/50 uppercase flex justify-between items-center p-2 pl-4",Et="whitespace-pre-wrap break-all p-4 pt-1";function _e(l){return l==="js"?"javascript":l==="ts"?"typescript":l==="shell"?"terminal":l}function wt(l,e,t){let o,n;Ye(l,mt,m=>t(17,n=m));const s=Ge();let{language:h="plaintext"}=e,{code:u=""}=e,{lineNumbers:r=!1}=e,{background:c="bg-neutral-900/90"}=e,{blur:a=""}=e,{text:f="text-sm"}=e,{color:b="text-white"}=e,{rounded:_="rounded-container-token"}=e,{shadow:i="shadow"}=e,{button:d="btn btn-sm variant-soft !text-white"}=e,{buttonLabel:T="Copy"}=e,{buttonCopied:L="👍"}=e,S=!1,y=u,D=!1;function k(){t(7,D=!0),setTimeout(()=>{t(7,D=!1)},2e3),s("copy")}return l.$$set=m=>{t(19,e=ce(ce({},e),ae(m))),"language"in m&&t(0,h=m.language),"code"in m&&t(1,u=m.code),"lineNumbers"in m&&t(10,r=m.lineNumbers),"background"in m&&t(11,c=m.background),"blur"in m&&t(12,a=m.blur),"text"in m&&t(13,f=m.text),"color"in m&&t(14,b=m.color),"rounded"in m&&t(15,_=m.rounded),"shadow"in m&&t(16,i=m.shadow),"button"in m&&t(2,d=m.button),"buttonLabel"in m&&t(3,T=m.buttonLabel),"buttonCopied"in m&&t(4,L=m.buttonCopied)},l.$$.update=()=>{l.$$.dirty&131075&&n!==void 0&&(t(5,y=n.highlight(u,{language:h}).value.trim()),t(6,S=!0)),l.$$.dirty&1056&&r&&(t(5,y=y.replace(/^/gm,()=>'<span class="line"></span>	')),t(6,S=!0)),t(8,o=`${kt} ${c} ${a} ${f} ${b} ${_} ${i} ${e.class??""}`)},e=ae(e),[h,u,d,T,L,y,S,D,o,k,r,c,a,f,b,_,i,n]}class yt extends se{constructor(e){super(),re(this,e,wt,gt,le,{language:0,code:1,lineNumbers:10,background:11,blur:12,text:13,color:14,rounded:15,shadow:16,button:2,buttonLabel:3,buttonCopied:4})}}function be(l,e,t){const o=l.slice();return o[33]=e[t],o[35]=t,o}function pe(l,e,t){const o=l.slice();return o[36]=e[t],o[38]=t,o}function ve(l,e,t){const o=l.slice();return o[39]=e[t],o}function ge(l){let e,t=l[11][l[2]]+"",o;return{c(){e=C("h1"),o=P(t)},l(n){e=E(n,"H1",{});var s=I(e);o=V(s,t),s.forEach(p)},m(n,s){N(n,e,s),v(e,o)},p(n,s){s[0]&4&&t!==(t=n[11][n[2]]+"")&&U(o,t)},d(n){n&&p(e)}}}function ke(l){let e,t=l[11][4]+"",o;return{c(){e=C("h1"),o=P(t)},l(n){e=E(n,"H1",{});var s=I(e);o=V(s,t),s.forEach(p)},m(n,s){N(n,e,s),v(e,o)},p:W,d(n){n&&p(e)}}}function Ce(l){let e,t,o,n,s,h,u,r,c,a,f=Y(l[6]),b=[];for(let _=0;_<f.length;_+=1)b[_]=Te(be(l,f,_));return{c(){e=C("div"),t=P(l[9]),o=P(" 秒"),n=O(),s=C("div"),h=P("已有"),u=P(l[8]),r=P(" 个错误"),c=O(),a=C("table");for(let _=0;_<b.length;_+=1)b[_].c();this.h()},l(_){e=E(_,"DIV",{class:!0});var i=I(e);t=V(i,l[9]),o=V(i," 秒"),i.forEach(p),n=q(_),s=E(_,"DIV",{class:!0});var d=I(s);h=V(d,"已有"),u=V(d,l[8]),r=V(d," 个错误"),d.forEach(p),c=q(_),a=E(_,"TABLE",{class:!0});var T=I(a);for(let L=0;L<b.length;L+=1)b[L].l(T);T.forEach(p),this.h()},h(){g(e,"class","timer"),g(s,"class","falseNum"),g(a,"class","svelte-1inp6qf")},m(_,i){N(_,e,i),v(e,t),v(e,o),N(_,n,i),N(_,s,i),v(s,h),v(s,u),v(s,r),N(_,c,i),N(_,a,i);for(let d=0;d<b.length;d+=1)b[d]&&b[d].m(a,null)},p(_,i){if(i[0]&512&&U(t,_[9]),i[0]&256&&U(u,_[8]),i[0]&38080){f=Y(_[6]);let d;for(d=0;d<f.length;d+=1){const T=be(_,f,d);b[d]?b[d].p(T,i):(b[d]=Te(T),b[d].c(),b[d].m(a,null))}for(;d<b.length;d+=1)b[d].d(1);b.length=f.length}},d(_){_&&(p(e),p(n),p(s),p(c),p(a)),oe(b,_)}}}function Ee(l){let e,t,o,n="清除",s,h,u=Y(Array.from({length:9},Se)),r=[];for(let c=0;c<u.length;c+=1)r[c]=we(ve(l,u,c));return{c(){e=C("div");for(let c=0;c<r.length;c+=1)r[c].c();t=O(),o=C("div"),o.textContent=n,this.h()},l(c){e=E(c,"DIV",{class:!0});var a=I(e);for(let f=0;f<r.length;f+=1)r[f].l(a);t=q(a),o=E(a,"DIV",{class:!0,"data-svelte-h":!0}),F(o)!=="svelte-68ess0"&&(o.textContent=n),a.forEach(p),this.h()},h(){g(o,"class","clear-button svelte-1inp6qf"),g(e,"class","number-selector svelte-1inp6qf")},m(c,a){N(c,e,a);for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(e,null);v(e,t),v(e,o),s||(h=H(o,"click",l[21]),s=!0)},p(c,a){if(a[0]&32768){u=Y(Array.from({length:9},Se));let f;for(f=0;f<u.length;f+=1){const b=ve(c,u,f);r[f]?r[f].p(b,a):(r[f]=we(b),r[f].c(),r[f].m(e,t))}for(;f<r.length;f+=1)r[f].d(1);r.length=u.length}},d(c){c&&p(e),oe(r,c),s=!1,h()}}}function we(l){let e,t=l[39]+"",o,n,s;function h(){return l[20](l[39])}return{c(){e=C("div"),o=P(t),this.h()},l(u){e=E(u,"DIV",{class:!0});var r=I(e);o=V(r,t),r.forEach(p),this.h()},h(){g(e,"class","svelte-1inp6qf")},m(u,r){N(u,e,r),v(e,o),n||(s=H(e,"click",h),n=!0)},p(u,r){l=u},d(u){u&&p(e),n=!1,s()}}}function ye(l){let e,t=(l[36]===0?"":l[36])+"",o,n,s,h,u,r=l[7].row===l[35]&&l[7].col===l[38]&&Ee(l);function c(){return l[22](l[35],l[38])}return{c(){e=C("td"),o=P(t),n=O(),r&&r.c(),this.h()},l(a){e=E(a,"TD",{id:!0,class:!0});var f=I(e);o=V(f,t),n=q(f),r&&r.l(f),f.forEach(p),this.h()},h(){g(e,"id",`cell-${l[35]}-${l[38]}`),g(e,"class",s=fe(`cell ${l[10][l[35]][l[38]]} 
                    ${l[35]%3===0?"top-bold":""} 
                    ${l[35]%3===2?"bottom-bold":""} 
                    ${l[38]%3===0?"left-bold":""} 
                    ${l[38]%3===2?"right-bold":""}`)+" svelte-1inp6qf")},m(a,f){N(a,e,f),v(e,o),v(e,n),r&&r.m(e,null),h||(u=H(e,"click",c),h=!0)},p(a,f){l=a,f[0]&64&&t!==(t=(l[36]===0?"":l[36])+"")&&U(o,t),l[7].row===l[35]&&l[7].col===l[38]?r?r.p(l,f):(r=Ee(l),r.c(),r.m(e,null)):r&&(r.d(1),r=null),f[0]&1024&&s!==(s=fe(`cell ${l[10][l[35]][l[38]]} 
                    ${l[35]%3===0?"top-bold":""} 
                    ${l[35]%3===2?"bottom-bold":""} 
                    ${l[38]%3===0?"left-bold":""} 
                    ${l[38]%3===2?"right-bold":""}`)+" svelte-1inp6qf")&&g(e,"class",s)},d(a){a&&p(e),r&&r.d(),h=!1,u()}}}function Te(l){let e,t,o=Y(l[33]),n=[];for(let s=0;s<o.length;s+=1)n[s]=ye(pe(l,o,s));return{c(){e=C("tr");for(let s=0;s<n.length;s+=1)n[s].c();t=O()},l(s){e=E(s,"TR",{});var h=I(e);for(let u=0;u<n.length;u+=1)n[u].l(h);t=q(h),h.forEach(p)},m(s,h){N(s,e,h);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(e,null);v(e,t)},p(s,h){if(h[0]&38080){o=Y(s[33]);let u;for(u=0;u<o.length;u+=1){const r=pe(s,o,u);n[u]?n[u].p(r,h):(n[u]=ye(r),n[u].c(),n[u].m(e,t))}for(;u<n.length;u+=1)n[u].d(1);n.length=o.length}},d(s){s&&p(e),oe(n,s)}}}function Tt(l){let e,t,o="投降喵",n,s,h="新开始",u,r,c="获取种子",a,f,b="返回",_,i,d,T,L;return i=new yt({props:{language:"txt",code:l[3],buttonCopied:"复制好了,快去试试分享吧"}}),{c(){e=C("div"),t=C("button"),t.textContent=o,n=O(),s=C("button"),s.textContent=h,u=O(),r=C("button"),r.textContent=c,a=O(),f=C("button"),f.textContent=b,_=O(),Ne(i.$$.fragment),this.h()},l(S){e=E(S,"DIV",{class:!0});var y=I(e);t=E(y,"BUTTON",{class:!0,"data-svelte-h":!0}),F(t)!=="svelte-395nzq"&&(t.textContent=o),n=q(y),s=E(y,"BUTTON",{class:!0,"data-svelte-h":!0}),F(s)!=="svelte-10iujfh"&&(s.textContent=h),u=q(y),r=E(y,"BUTTON",{class:!0,"data-svelte-h":!0}),F(r)!=="svelte-5d3vs"&&(r.textContent=c),a=q(y),f=E(y,"BUTTON",{class:!0,"data-svelte-h":!0}),F(f)!=="svelte-1rbk4t1"&&(f.textContent=b),y.forEach(p),_=q(S),Le(i.$$.fragment,S),this.h()},h(){g(t,"class","btn variant-glass-primary ma_btn svelte-1inp6qf"),g(s,"class","btn variant-glass-primary ma_btn svelte-1inp6qf"),g(r,"class","btn variant-glass-primary ma_btn svelte-1inp6qf"),g(f,"class","btn variant-glass-primary ma_btn svelte-1inp6qf"),g(e,"class","buttons-container svelte-1inp6qf")},m(S,y){N(S,e,y),v(e,t),v(e,n),v(e,s),v(e,u),v(e,r),v(e,a),v(e,f),N(S,_,y),Be(i,S,y),d=!0,T||(L=[H(t,"click",l[17]),H(s,"click",l[13]),H(r,"click",l[18]),H(f,"click",l[16])],T=!0)},p(S,y){const D={};y[0]&8&&(D.code=S[3]),i.$set(D)},i(S){d||(K(i.$$.fragment,S),d=!0)},o(S){j(i.$$.fragment,S),d=!1},d(S){S&&(p(e),p(_)),Me(i,S),T=!1,ne(L)}}}function St(l){let e,t="开始",o,n,s,h="简单",u,r="中等",c,a="困难",f,b="进阶",_,i,d,T,L,S="生成",y,D;return{c(){e=C("button"),e.textContent=t,o=O(),n=C("select"),s=C("option"),s.textContent=h,u=C("option"),u.textContent=r,c=C("option"),c.textContent=a,f=C("option"),f.textContent=b,_=O(),i=C("div"),d=C("input"),T=O(),L=C("button"),L.textContent=S,this.h()},l(k){e=E(k,"BUTTON",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-1yh5sfc"&&(e.textContent=t),o=q(k),n=E(k,"SELECT",{class:!0});var m=I(n);s=E(m,"OPTION",{"data-svelte-h":!0}),F(s)!=="svelte-13ypokf"&&(s.textContent=h),u=E(m,"OPTION",{"data-svelte-h":!0}),F(u)!=="svelte-1y9dlsx"&&(u.textContent=r),c=E(m,"OPTION",{"data-svelte-h":!0}),F(c)!=="svelte-10rcxy0"&&(c.textContent=a),f=E(m,"OPTION",{"data-svelte-h":!0}),F(f)!=="svelte-z3h21k"&&(f.textContent=b),m.forEach(p),_=q(k),i=E(k,"DIV",{class:!0});var B=I(i);d=E(B,"INPUT",{type:!0,class:!0,placeholder:!0}),T=q(B),L=E(B,"BUTTON",{class:!0,"data-svelte-h":!0}),F(L)!=="svelte-pea43r"&&(L.textContent=S),B.forEach(p),this.h()},h(){g(e,"class","btn variant-glass-primary btn_sudo svelte-1inp6qf"),s.__value="0",J(s,s.__value),u.__value="1",J(u,u.__value),c.__value="2",J(c,c.__value),f.__value="3",J(f,f.__value),g(n,"class","select sel_sudo svelte-1inp6qf"),l[5]===void 0&&et(()=>l[23].call(n)),g(d,"type","text"),g(d,"class","variant-glass-primary seed_input svelte-1inp6qf"),g(d,"placeholder","看看你的种子"),g(L,"class","btn variant-glass-primary"),g(i,"class","seed_div svelte-1inp6qf")},m(k,m){N(k,e,m),N(k,o,m),N(k,n,m),v(n,s),v(n,u),v(n,c),v(n,f),de(n,l[5],!0),N(k,_,m),N(k,i,m),v(i,d),J(d,l[3]),v(i,T),v(i,L),y||(D=[H(e,"click",l[13]),H(n,"change",l[23]),H(d,"input",l[24]),H(L,"click",l[14])],y=!0)},p(k,m){m[0]&32&&de(n,k[5]),m[0]&8&&d.value!==k[3]&&J(d,k[3])},i:W,o:W,d(k){k&&(p(e),p(o),p(n),p(_),p(i)),y=!1,ne(D)}}}function Nt(l){let e,t,o,n,s,h,u,r=l[0]&&ge(l),c=l[1]&&ke(l),a=l[4]&&Ce(l);const f=[St,Tt],b=[];function _(i,d){return i[4]===!1?0:1}return n=_(l),s=b[n]=f[n](l),{c(){r&&r.c(),e=O(),c&&c.c(),t=O(),a&&a.c(),o=O(),s.c(),h=Q()},l(i){r&&r.l(i),e=q(i),c&&c.l(i),t=q(i),a&&a.l(i),o=q(i),s.l(i),h=Q()},m(i,d){r&&r.m(i,d),N(i,e,d),c&&c.m(i,d),N(i,t,d),a&&a.m(i,d),N(i,o,d),b[n].m(i,d),N(i,h,d),u=!0},p(i,d){i[0]?r?r.p(i,d):(r=ge(i),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),i[1]?c?c.p(i,d):(c=ke(i),c.c(),c.m(t.parentNode,t)):c&&(c.d(1),c=null),i[4]?a?a.p(i,d):(a=Ce(i),a.c(),a.m(o.parentNode,o)):a&&(a.d(1),a=null);let T=n;n=_(i),n===T?b[n].p(i,d):(tt(),j(b[T],1,1,()=>{b[T]=null}),lt(),s=b[n],s?s.p(i,d):(s=b[n]=f[n](i),s.c()),K(s,1),s.m(h.parentNode,h))},i(i){u||(K(s),u=!0)},o(i){j(s),u=!1},d(i){i&&(p(e),p(t),p(o),p(h)),r&&r.d(i),c&&c.d(i),a&&a.d(i),b[n].d(i)}}}const Se=(l,e)=>e+1;function Lt(l,e,t){let o,n=["小试牛刀,轻松拿下","初窥门径,游刃有余","驾轻就熟,炉火纯青","大师!","即使投降也很棒了"],s=!1,h=!1,u=0,r="",c=!1,a=[],f="0",b=[],_=[],i={row:-1,col:-1},d=0,T,L=0;function S(){T=setInterval(()=>{t(9,L++,L)},1e3)}function y(){clearInterval(T),T=void 0}function D(){y(),t(9,L=0)}function k(w,M){t(7,i={row:w,col:M})}function m(){t(19,a=ct(f)),_=x(a),t(6,b=a.map(w=>w.slice())),t(4,c=!0),t(0,s=!1),t(1,h=!1),t(8,d=0),console.log(_),D(),S(),t(8,d=0)}function B(){t(19,a=dt(r)),_=x(a),t(6,b=a.map(w=>w.slice())),t(4,c=!0),t(0,s=!1),D(),S(),console.log(_)}function R(w,M){const A=document.querySelector(`#cell-${w}-${M}`);return console.log("custonm"),A&&(A.classList.remove("correct"),A.classList.remove("incorrect")),a[w][M]===0?b[w][M]===_[w][M]?"correct":b[w][M]!==0?(t(8,d=d+1),console.log(d),"incorrect"):"empty":"filled"}function X(){for(let w=0;w<a.length;w++)for(let M=0;M<a[w].length;M++)if(b[w][M]!==_[w][M])return!1;return h?t(2,u=4):t(2,u=parseInt(f)),console.log("Congratulations! You have solved the puzzle."),y(),!0}function z(w){if(i.row!==-1&&i.col!==-1){const M=b[i.row][i.col],A=document.querySelector(`#cell-${i.row}-${i.col}`);w===0?(A&&(A.classList.remove("correct"),A.classList.remove("incorrect")),M!==0&&M!==_[i.row][i.col]&&t(8,d=Math.max(0,d-1))):w===_[i.row][i.col]?A&&(A.classList.remove("incorrect"),A.classList.add("correct")):A&&(A.classList.remove("correct"),A.classList.add("incorrect"),t(8,d=d+1)),t(6,b[i.row][i.col]=w,b)}t(0,s=X()),t(7,i={row:-1,col:-1})}function G(w){w.target.closest("td")||t(7,i={row:-1,col:-1})}function Z(){t(4,c=!1),t(0,s=!1),t(1,h=!1),t(3,r="")}function Pe(){t(6,b=_.map(w=>w.slice())),t(1,h=!0),y()}function Ve(){t(3,r=at(a))}xe(()=>(document.addEventListener("click",G),()=>{document.removeEventListener("click",G)}));const He=w=>z(w),Ue=()=>z(0),Re=(w,M)=>k(w,M);function ze(){f=$e(this),t(5,f)}function Je(){r=this.value,t(3,r)}return l.$$.update=()=>{l.$$.dirty[0]&524288&&a.length&&(_=x(a)),l.$$.dirty[0]&524288&&t(10,o=a.map((w,M)=>w.map((A,Qe)=>R(M,Qe))))},[s,h,u,r,c,f,b,i,d,L,o,n,k,m,B,z,Z,Pe,Ve,a,He,Ue,Re,ze,Je]}class Bt extends se{constructor(e){super(),re(this,e,Lt,Nt,le,{},null,[-1,-1])}}function Mt(l){let e,t='<p class="svelte-2wr5xc">Sudoku Game By <a href="https://sevmeowple.github.io" style="color:pink">SevMeowple</a> <a href="https://github.com/sevmeowple" class="git_a svelte-2wr5xc"><button type="button" class="btn-github btn-icon variant-filled btn-icon-sm svelte-2wr5xc"><svg class="icon-github svelte-2wr5xc" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512"><path d="M256 32C132.3 32 32 134.8 32 261.7c0 101.5 64.2 187.5 153.2 217.9 11.2 2.1 15.3-5 15.3-11.1 0-5.5-.2-19.9-.3-39.1-62.3 13.9-75.5-30.8-75.5-30.8-10.2-26.5-24.9-33.6-24.9-33.6-20.3-14.3 1.5-14 1.5-14 22.5 1.6 34.3 23.7 34.3 23.7 20 35.1 52.4 25 65.2 19.1 2-14.8 7.8-25 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 18.8-6.2 61.6 23.5 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 42.8-29.7 61.5-23.5 61.5-23.5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 6.1 4 13.3 15.4 11C415.9 449.1 480 363.1 480 261.7 480 134.8 379.7 32 256 32z" fill-rule="evenodd" clip-rule="evenodd" fill="#ffa1a1" class="fill-000000"></path></svg></button></a></p>',o,n,s,h,u;return h=new Bt({}),{c(){e=C("footer"),e.innerHTML=t,o=O(),n=C("div"),s=C("main"),Ne(h.$$.fragment),this.h()},l(r){e=E(r,"FOOTER",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-6q8oit"&&(e.innerHTML=t),o=q(r),n=E(r,"DIV",{class:!0});var c=I(n);s=E(c,"MAIN",{class:!0});var a=I(s);Le(h.$$.fragment,a),a.forEach(p),c.forEach(p),this.h()},h(){g(e,"class","svelte-2wr5xc"),g(s,"class","board_main svelte-2wr5xc"),g(n,"class","page svelte-2wr5xc")},m(r,c){N(r,e,c),N(r,o,c),N(r,n,c),v(n,s),Be(h,s,null),u=!0},p:W,i(r){u||(K(h.$$.fragment,r),u=!0)},o(r){j(h.$$.fragment,r),u=!1},d(r){r&&(p(e),p(o),p(n)),Me(h)}}}class Dt extends se{constructor(e){super(),re(this,e,null,Mt,le,{})}}export{Dt as component};