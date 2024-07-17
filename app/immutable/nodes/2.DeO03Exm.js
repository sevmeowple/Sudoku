import{O as Qe,s as le,p as z,k as N,n as J,i as p,o as We,P as Ye,Q as ue,R as ae,e as C,t as F,b as D,d as E,f as I,h as P,j as A,v as k,l as v,S as U,T as Ge,m as V,D as Xe,A as ne,U as Ze,V as je,r as Ke,W as oe,X as xe,Y as fe,Z as H,_ as q,F as $e,$ as de}from"../chunks/scheduler.C77K6qMD.js";import{S as se,i as re,g as et,a as j,c as tt,t as K,b as Ne,d as Be,m as Le,e as Me}from"../chunks/index.DMZdqBSS.js";import{w as Ie,r as lt}from"../chunks/paths.BdnzUf8k.js";function Q(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}const te="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-";function nt(){const l=Array.from({length:9},()=>Array(9).fill(0));return ot(l),Oe(l,0,3),l}function ot(l){for(let e=0;e<9;e+=3)st(l,e,e)}function st(l,e,t){const o=Array.from({length:9},(n,s)=>s+1);o.sort(()=>Math.random()-.5);for(let n=0;n<3;n++)for(let s=0;s<3;s++)l[e+n][t+s]=o.pop()}function Oe(l,e,t){if(t>=9&&e<8&&(e++,t=0),e>=9&&t>=9)return!0;if(e<3)t<3&&(t=3);else if(e<6)t===Math.floor(e/3)*3&&(t+=3);else if(t===6&&(e++,t=0,e>=9))return!0;for(let o=1;o<=9;o++)if(ie(l,e,t,o)){if(l[e][t]=o,Oe(l,e,t+1))return!0;l[e][t]=0}return!1}function ie(l,e,t,o){for(let u=0;u<=8;u++)if(l[e][u]===o||l[u][t]===o)return!1;const n=Math.floor(e/3)*3,s=Math.floor(t/3)*3;for(let u=0;u<3;u++)for(let i=0;i<3;i++)if(l[u+n][i+s]===o)return!1;return!0}function De(l){let e=Ae(l);if(e[0]===-1)return!0;let t=e[0],o=e[1];for(let n=1;n<=9;n++)if(ie(l,t,o,n)){if(l[t][o]=n,De(l))return!0;l[t][o]=0}return!1}function Ae(l){for(let e=0;e<9;e++)for(let t=0;t<9;t++)if(l[e][t]===0)return[e,t];return[-1,-1]}function rt(l){let e=l.map(t=>t.slice());return Fe(e)}function Fe(l){let e=Ae(l);if(e[0]===-1)return 1;let t=e[0],o=e[1],n=0;for(let s=1;s<=9;s++)if(ie(l,t,o,s)){if(l[t][o]=s,n+=Fe(l),n>1)return n;l[t][o]=0}return n}function it(l,e){let t=0;for(;e>0&&t<81;){let o=Math.floor(Math.random()*9),n=Math.floor(Math.random()*9);if(l[o][n]===0){t++;continue}let s=l[o][n];l[o][n]=0;let u=l.map(i=>i.slice());rt(u)!==1?(l[o][n]=s,t++):e--}}function ct(l){let e=nt(),t=30;console.log(l),l=="0"&&(t=30),l=="1"&&(t=40),l=="2"&&(t=50),l=="3"&&(t=60);let o=Math.floor(Math.random()*7)-3,n=t+o;return console.log(n),it(e,n),e}function ut(l){let e="";for(let n of l)e+=n.join("");let t=BigInt(e);return at(t)}function at(l){let e="";if(l===0n)return te[0];for(;l>0n;)e=te[Number(l%64n)]+e,l=l/64n;return e}function ft(l){let t=dt(l).toString().padStart(81,"0"),o=[];for(let n=0;n<81;n+=9){let s=t.slice(n,n+9).split("").map(Number);o.push(s)}return o}function dt(l){let e=0n;for(let t=0;t<l.length;t++)e=e*64n+BigInt(te.indexOf(l[t]));return e}function x(l){let e=l.map(t=>t.slice());return De(e),e}const ht=Ie(void 0),$={};function he(l){return l==="local"?localStorage:sessionStorage}function ce(l,e,t){const o=JSON,n="local";function s(u,i){he(n).setItem(u,o.stringify(i))}if(!$[l]){const u=Ie(e,d=>{const a=he(n).getItem(l);a&&d(o.parse(a));{const _=b=>{b.key===l&&d(b.newValue?o.parse(b.newValue):null)};return window.addEventListener("storage",_),()=>window.removeEventListener("storage",_)}}),{subscribe:i,set:c}=u;$[l]={set(d){s(l,d),c(d)},update(d){const a=d(Qe(u));s(l,a),c(a)},subscribe:i}}return $[l]}ce("modeOsPrefers",!1);ce("modeUserPrefers",void 0);ce("modeCurrent",!1);const Pe="(prefers-reduced-motion: reduce)";function mt(){return window.matchMedia(Pe).matches}lt(mt(),l=>{{const e=o=>{l(o.matches)},t=window.matchMedia(Pe);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}});function _t(l,e){if(!window.isSecureContext)return console.error("Clipboard action failed: app not running in secure context, see: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard"),{};const t=()=>{l.dispatchEvent(new CustomEvent("copyComplete"))},o=()=>{if(typeof e=="object"){if("element"in e){const n=document.querySelector(`[data-clipboard="${e.element}"]`);if(!n)throw new Error(`Missing HTMLElement with an attribute of [data-clipboard="${e.element}"]`);ee(n.innerHTML,"text/html").then(t);return}if("input"in e){const n=document.querySelector(`[data-clipboard="${e.input}"]`);if(!n)throw new Error(`Missing HTMLInputElement with an attribute of [data-clipboard="${e.input}"]`);ee(n.value).then(t);return}}ee(e).then(t)};return l.addEventListener("click",o),{update(n){e=n},destroy(){l.removeEventListener("click",o)}}}async function ee(l,e="text/plain"){navigator.clipboard.write?await navigator.clipboard.write([new ClipboardItem({[e]:new Blob([l],{type:e}),"text/plain":new Blob([l],{type:"text/plain"})})]):await new Promise(t=>{t(navigator.clipboard.writeText(String(l)))})}function me(l){let e,t,o,n=_e(l[0])+"",s,u,i,c=(l[7]?l[4]:l[3])+"",d,a,_,b,m,r,f,T,B,S;function w(h,M){return h[6]?pt:bt}let O=w(l),g=O(l);return{c(){e=C("div"),t=C("header"),o=C("span"),s=F(n),u=D(),i=C("button"),d=F(c),b=D(),m=C("pre"),r=C("code"),g.c(),this.h()},l(h){e=E(h,"DIV",{class:!0,"data-testid":!0});var M=I(e);t=E(M,"HEADER",{class:!0});var R=I(t);o=E(R,"SPAN",{class:!0});var G=I(o);s=P(G,n),G.forEach(p),u=A(R),i=E(R,"BUTTON",{type:!0,class:!0});var W=I(i);d=P(W,c),W.forEach(p),R.forEach(p),b=A(M),m=E(M,"PRE",{class:!0});var Y=I(m);r=E(Y,"CODE",{class:!0});var X=I(r);g.l(X),X.forEach(p),Y.forEach(p),M.forEach(p),this.h()},h(){k(o,"class","codeblock-language"),k(i,"type","button"),k(i,"class",a="codeblock-btn "+l[2]),k(t,"class","codeblock-header "+kt),k(r,"class",f="codeblock-code language-"+l[0]+" lineNumbers"),k(m,"class","codeblock-pre "+Ct),k(e,"class",T="codeblock "+l[8]),k(e,"data-testid","codeblock")},m(h,M){N(h,e,M),v(e,t),v(t,o),v(o,s),v(t,u),v(t,i),v(i,d),v(e,b),v(e,m),v(m,r),g.m(r,null),B||(S=[U(i,"click",l[9]),Ge(_=_t.call(null,i,l[1]))],B=!0)},p(h,M){M&1&&n!==(n=_e(h[0])+"")&&V(s,n),M&152&&c!==(c=(h[7]?h[4]:h[3])+"")&&V(d,c),M&4&&a!==(a="codeblock-btn "+h[2])&&k(i,"class",a),_&&Xe(_.update)&&M&2&&_.update.call(null,h[1]),O===(O=w(h))&&g?g.p(h,M):(g.d(1),g=O(h),g&&(g.c(),g.m(r,null))),M&1&&f!==(f="codeblock-code language-"+h[0]+" lineNumbers")&&k(r,"class",f),M&256&&T!==(T="codeblock "+h[8])&&k(e,"class",T)},d(h){h&&p(e),g.d(),B=!1,ne(S)}}}function bt(l){let e=l[1].trim()+"",t;return{c(){t=F(e)},l(o){t=P(o,e)},m(o,n){N(o,t,n)},p(o,n){n&2&&e!==(e=o[1].trim()+"")&&V(t,e)},d(o){o&&p(t)}}}function pt(l){let e,t;return{c(){e=new Ze(!1),t=z(),this.h()},l(o){e=je(o,!1),t=z(),this.h()},h(){e.a=t},m(o,n){e.m(l[5],o,n),N(o,t,n)},p(o,n){n&32&&e.p(o[5])},d(o){o&&(p(t),e.d())}}}function vt(l){let e,t=l[0]&&l[1]&&me(l);return{c(){t&&t.c(),e=z()},l(o){t&&t.l(o),e=z()},m(o,n){t&&t.m(o,n),N(o,e,n)},p(o,[n]){o[0]&&o[1]?t?t.p(o,n):(t=me(o),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:J,o:J,d(o){o&&p(e),t&&t.d(o)}}}const gt="overflow-hidden shadow",kt="text-xs text-white/50 uppercase flex justify-between items-center p-2 pl-4",Ct="whitespace-pre-wrap break-all p-4 pt-1";function _e(l){return l==="js"?"javascript":l==="ts"?"typescript":l==="shell"?"terminal":l}function Et(l,e,t){let o,n;We(l,ht,h=>t(17,n=h));const s=Ye();let{language:u="plaintext"}=e,{code:i=""}=e,{lineNumbers:c=!1}=e,{background:d="bg-neutral-900/90"}=e,{blur:a=""}=e,{text:_="text-sm"}=e,{color:b="text-white"}=e,{rounded:m="rounded-container-token"}=e,{shadow:r="shadow"}=e,{button:f="btn btn-sm variant-soft !text-white"}=e,{buttonLabel:T="Copy"}=e,{buttonCopied:B="👍"}=e,S=!1,w=i,O=!1;function g(){t(7,O=!0),setTimeout(()=>{t(7,O=!1)},2e3),s("copy")}return l.$$set=h=>{t(19,e=ue(ue({},e),ae(h))),"language"in h&&t(0,u=h.language),"code"in h&&t(1,i=h.code),"lineNumbers"in h&&t(10,c=h.lineNumbers),"background"in h&&t(11,d=h.background),"blur"in h&&t(12,a=h.blur),"text"in h&&t(13,_=h.text),"color"in h&&t(14,b=h.color),"rounded"in h&&t(15,m=h.rounded),"shadow"in h&&t(16,r=h.shadow),"button"in h&&t(2,f=h.button),"buttonLabel"in h&&t(3,T=h.buttonLabel),"buttonCopied"in h&&t(4,B=h.buttonCopied)},l.$$.update=()=>{l.$$.dirty&131075&&n!==void 0&&(t(5,w=n.highlight(i,{language:u}).value.trim()),t(6,S=!0)),l.$$.dirty&1056&&c&&(t(5,w=w.replace(/^/gm,()=>'<span class="line"></span>	')),t(6,S=!0)),t(8,o=`${gt} ${d} ${a} ${_} ${b} ${m} ${r} ${e.class??""}`)},e=ae(e),[u,i,f,T,B,w,S,O,o,g,c,d,a,_,b,m,r,n]}class wt extends se{constructor(e){super(),re(this,e,Et,vt,le,{language:0,code:1,lineNumbers:10,background:11,blur:12,text:13,color:14,rounded:15,shadow:16,button:2,buttonLabel:3,buttonCopied:4})}}function be(l,e,t){const o=l.slice();return o[32]=e[t],o[34]=t,o}function pe(l,e,t){const o=l.slice();return o[35]=e[t],o[37]=t,o}function ve(l,e,t){const o=l.slice();return o[38]=e[t],o}function ge(l){let e,t=l[11][l[2]]+"",o;return{c(){e=C("h1"),o=F(t)},l(n){e=E(n,"H1",{});var s=I(e);o=P(s,t),s.forEach(p)},m(n,s){N(n,e,s),v(e,o)},p(n,s){s[0]&4&&t!==(t=n[11][n[2]]+"")&&V(o,t)},d(n){n&&p(e)}}}function ke(l){let e,t=l[11][4]+"",o;return{c(){e=C("h1"),o=F(t)},l(n){e=E(n,"H1",{});var s=I(e);o=P(s,t),s.forEach(p)},m(n,s){N(n,e,s),v(e,o)},p:J,d(n){n&&p(e)}}}function Ce(l){let e,t,o,n,s,u,i,c,d,a,_=Q(l[6]),b=[];for(let m=0;m<_.length;m+=1)b[m]=Te(be(l,_,m));return{c(){e=C("div"),t=F(l[9]),o=F(" 秒"),n=D(),s=C("div"),u=F("已有"),i=F(l[8]),c=F(" 个错误"),d=D(),a=C("table");for(let m=0;m<b.length;m+=1)b[m].c();this.h()},l(m){e=E(m,"DIV",{class:!0});var r=I(e);t=P(r,l[9]),o=P(r," 秒"),r.forEach(p),n=A(m),s=E(m,"DIV",{class:!0});var f=I(s);u=P(f,"已有"),i=P(f,l[8]),c=P(f," 个错误"),f.forEach(p),d=A(m),a=E(m,"TABLE",{class:!0});var T=I(a);for(let B=0;B<b.length;B+=1)b[B].l(T);T.forEach(p),this.h()},h(){k(e,"class","timer"),k(s,"class","falseNum"),k(a,"class","svelte-195c5cu")},m(m,r){N(m,e,r),v(e,t),v(e,o),N(m,n,r),N(m,s,r),v(s,u),v(s,i),v(s,c),N(m,d,r),N(m,a,r);for(let f=0;f<b.length;f+=1)b[f]&&b[f].m(a,null)},p(m,r){if(r[0]&512&&V(t,m[9]),r[0]&256&&V(i,m[8]),r[0]&38080){_=Q(m[6]);let f;for(f=0;f<_.length;f+=1){const T=be(m,_,f);b[f]?b[f].p(T,r):(b[f]=Te(T),b[f].c(),b[f].m(a,null))}for(;f<b.length;f+=1)b[f].d(1);b.length=_.length}},d(m){m&&(p(e),p(n),p(s),p(d),p(a)),oe(b,m)}}}function Ee(l){let e,t=Q(Array.from({length:9},Se)),o=[];for(let n=0;n<t.length;n+=1)o[n]=we(ve(l,t,n));return{c(){e=C("div");for(let n=0;n<o.length;n+=1)o[n].c();this.h()},l(n){e=E(n,"DIV",{class:!0});var s=I(e);for(let u=0;u<o.length;u+=1)o[u].l(s);s.forEach(p),this.h()},h(){k(e,"class","number-selector svelte-195c5cu")},m(n,s){N(n,e,s);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(e,null)},p(n,s){if(s[0]&32768){t=Q(Array.from({length:9},Se));let u;for(u=0;u<t.length;u+=1){const i=ve(n,t,u);o[u]?o[u].p(i,s):(o[u]=we(i),o[u].c(),o[u].m(e,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=t.length}},d(n){n&&p(e),oe(o,n)}}}function we(l){let e,t=l[38]+"",o,n,s;function u(){return l[20](l[38])}return{c(){e=C("div"),o=F(t),this.h()},l(i){e=E(i,"DIV",{class:!0});var c=I(e);o=P(c,t),c.forEach(p),this.h()},h(){k(e,"class","svelte-195c5cu")},m(i,c){N(i,e,c),v(e,o),n||(s=U(e,"click",u),n=!0)},p(i,c){l=i},d(i){i&&p(e),n=!1,s()}}}function ye(l){let e,t=(l[35]===0?"":l[35])+"",o,n,s,u,i,c=l[7].row===l[34]&&l[7].col===l[37]&&Ee(l);function d(){return l[21](l[34],l[37])}return{c(){e=C("td"),o=F(t),n=D(),c&&c.c(),this.h()},l(a){e=E(a,"TD",{id:!0,class:!0});var _=I(e);o=P(_,t),n=A(_),c&&c.l(_),_.forEach(p),this.h()},h(){k(e,"id",`cell-${l[34]}-${l[37]}`),k(e,"class",s=fe(`cell ${l[10][l[34]][l[37]]} 
                    ${l[34]%3===0?"top-bold":""} 
                    ${l[34]%3===2?"bottom-bold":""} 
                    ${l[37]%3===0?"left-bold":""} 
                    ${l[37]%3===2?"right-bold":""}`)+" svelte-195c5cu")},m(a,_){N(a,e,_),v(e,o),v(e,n),c&&c.m(e,null),u||(i=U(e,"click",d),u=!0)},p(a,_){l=a,_[0]&64&&t!==(t=(l[35]===0?"":l[35])+"")&&V(o,t),l[7].row===l[34]&&l[7].col===l[37]?c?c.p(l,_):(c=Ee(l),c.c(),c.m(e,null)):c&&(c.d(1),c=null),_[0]&1024&&s!==(s=fe(`cell ${l[10][l[34]][l[37]]} 
                    ${l[34]%3===0?"top-bold":""} 
                    ${l[34]%3===2?"bottom-bold":""} 
                    ${l[37]%3===0?"left-bold":""} 
                    ${l[37]%3===2?"right-bold":""}`)+" svelte-195c5cu")&&k(e,"class",s)},d(a){a&&p(e),c&&c.d(),u=!1,i()}}}function Te(l){let e,t,o=Q(l[32]),n=[];for(let s=0;s<o.length;s+=1)n[s]=ye(pe(l,o,s));return{c(){e=C("tr");for(let s=0;s<n.length;s+=1)n[s].c();t=D()},l(s){e=E(s,"TR",{});var u=I(e);for(let i=0;i<n.length;i+=1)n[i].l(u);t=A(u),u.forEach(p)},m(s,u){N(s,e,u);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null);v(e,t)},p(s,u){if(u[0]&38080){o=Q(s[32]);let i;for(i=0;i<o.length;i+=1){const c=pe(s,o,i);n[i]?n[i].p(c,u):(n[i]=ye(c),n[i].c(),n[i].m(e,t))}for(;i<n.length;i+=1)n[i].d(1);n.length=o.length}},d(s){s&&p(e),oe(n,s)}}}function yt(l){let e,t,o="投降喵",n,s,u="新开始",i,c,d="获取种子",a,_,b="返回",m,r,f,T,B;return r=new wt({props:{language:"txt",code:l[3],buttonCopied:"复制好了,快去试试分享吧"}}),{c(){e=C("div"),t=C("button"),t.textContent=o,n=D(),s=C("button"),s.textContent=u,i=D(),c=C("button"),c.textContent=d,a=D(),_=C("button"),_.textContent=b,m=D(),Ne(r.$$.fragment),this.h()},l(S){e=E(S,"DIV",{class:!0});var w=I(e);t=E(w,"BUTTON",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-395nzq"&&(t.textContent=o),n=A(w),s=E(w,"BUTTON",{class:!0,"data-svelte-h":!0}),H(s)!=="svelte-10iujfh"&&(s.textContent=u),i=A(w),c=E(w,"BUTTON",{class:!0,"data-svelte-h":!0}),H(c)!=="svelte-5d3vs"&&(c.textContent=d),a=A(w),_=E(w,"BUTTON",{class:!0,"data-svelte-h":!0}),H(_)!=="svelte-1rbk4t1"&&(_.textContent=b),w.forEach(p),m=A(S),Be(r.$$.fragment,S),this.h()},h(){k(t,"class","btn variant-glass-primary ma_btn svelte-195c5cu"),k(s,"class","btn variant-glass-primary ma_btn svelte-195c5cu"),k(c,"class","btn variant-glass-primary ma_btn svelte-195c5cu"),k(_,"class","btn variant-glass-primary ma_btn svelte-195c5cu"),k(e,"class","buttons-container svelte-195c5cu")},m(S,w){N(S,e,w),v(e,t),v(e,n),v(e,s),v(e,i),v(e,c),v(e,a),v(e,_),N(S,m,w),Le(r,S,w),f=!0,T||(B=[U(t,"click",l[17]),U(s,"click",l[13]),U(c,"click",l[18]),U(_,"click",l[16])],T=!0)},p(S,w){const O={};w[0]&8&&(O.code=S[3]),r.$set(O)},i(S){f||(K(r.$$.fragment,S),f=!0)},o(S){j(r.$$.fragment,S),f=!1},d(S){S&&(p(e),p(m)),Me(r,S),T=!1,ne(B)}}}function Tt(l){let e,t="开始",o,n,s,u="简单",i,c="中等",d,a="困难",_,b="进阶",m,r,f,T,B,S="生成",w,O;return{c(){e=C("button"),e.textContent=t,o=D(),n=C("select"),s=C("option"),s.textContent=u,i=C("option"),i.textContent=c,d=C("option"),d.textContent=a,_=C("option"),_.textContent=b,m=D(),r=C("div"),f=C("input"),T=D(),B=C("button"),B.textContent=S,this.h()},l(g){e=E(g,"BUTTON",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-1yh5sfc"&&(e.textContent=t),o=A(g),n=E(g,"SELECT",{class:!0});var h=I(n);s=E(h,"OPTION",{"data-svelte-h":!0}),H(s)!=="svelte-13ypokf"&&(s.textContent=u),i=E(h,"OPTION",{"data-svelte-h":!0}),H(i)!=="svelte-1y9dlsx"&&(i.textContent=c),d=E(h,"OPTION",{"data-svelte-h":!0}),H(d)!=="svelte-10rcxy0"&&(d.textContent=a),_=E(h,"OPTION",{"data-svelte-h":!0}),H(_)!=="svelte-z3h21k"&&(_.textContent=b),h.forEach(p),m=A(g),r=E(g,"DIV",{class:!0});var M=I(r);f=E(M,"INPUT",{type:!0,class:!0,placeholder:!0}),T=A(M),B=E(M,"BUTTON",{class:!0,"data-svelte-h":!0}),H(B)!=="svelte-pea43r"&&(B.textContent=S),M.forEach(p),this.h()},h(){k(e,"class","btn variant-glass-primary btn_sudo svelte-195c5cu"),s.__value="0",q(s,s.__value),i.__value="1",q(i,i.__value),d.__value="2",q(d,d.__value),_.__value="3",q(_,_.__value),k(n,"class","select sel_sudo svelte-195c5cu"),l[5]===void 0&&$e(()=>l[22].call(n)),k(f,"type","text"),k(f,"class","variant-glass-primary seed_input svelte-195c5cu"),k(f,"placeholder","看看你的种子"),k(B,"class","btn variant-glass-primary"),k(r,"class","seed_div svelte-195c5cu")},m(g,h){N(g,e,h),N(g,o,h),N(g,n,h),v(n,s),v(n,i),v(n,d),v(n,_),de(n,l[5],!0),N(g,m,h),N(g,r,h),v(r,f),q(f,l[3]),v(r,T),v(r,B),w||(O=[U(e,"click",l[13]),U(n,"change",l[22]),U(f,"input",l[23]),U(B,"click",l[14])],w=!0)},p(g,h){h[0]&32&&de(n,g[5]),h[0]&8&&f.value!==g[3]&&q(f,g[3])},i:J,o:J,d(g){g&&(p(e),p(o),p(n),p(m),p(r)),w=!1,ne(O)}}}function St(l){let e,t,o,n,s,u,i,c=l[0]&&ge(l),d=l[1]&&ke(l),a=l[4]&&Ce(l);const _=[Tt,yt],b=[];function m(r,f){return r[4]===!1?0:1}return n=m(l),s=b[n]=_[n](l),{c(){c&&c.c(),e=D(),d&&d.c(),t=D(),a&&a.c(),o=D(),s.c(),u=z()},l(r){c&&c.l(r),e=A(r),d&&d.l(r),t=A(r),a&&a.l(r),o=A(r),s.l(r),u=z()},m(r,f){c&&c.m(r,f),N(r,e,f),d&&d.m(r,f),N(r,t,f),a&&a.m(r,f),N(r,o,f),b[n].m(r,f),N(r,u,f),i=!0},p(r,f){r[0]?c?c.p(r,f):(c=ge(r),c.c(),c.m(e.parentNode,e)):c&&(c.d(1),c=null),r[1]?d?d.p(r,f):(d=ke(r),d.c(),d.m(t.parentNode,t)):d&&(d.d(1),d=null),r[4]?a?a.p(r,f):(a=Ce(r),a.c(),a.m(o.parentNode,o)):a&&(a.d(1),a=null);let T=n;n=m(r),n===T?b[n].p(r,f):(et(),j(b[T],1,1,()=>{b[T]=null}),tt(),s=b[n],s?s.p(r,f):(s=b[n]=_[n](r),s.c()),K(s,1),s.m(u.parentNode,u))},i(r){i||(K(s),i=!0)},o(r){j(s),i=!1},d(r){r&&(p(e),p(t),p(o),p(u)),c&&c.d(r),d&&d.d(r),a&&a.d(r),b[n].d(r)}}}const Se=(l,e)=>e+1;function Nt(l,e,t){let o,n=["小试牛刀,轻松拿下","初窥门径,游刃有余","驾轻就熟,炉火纯青","大师!","即使投降也很棒了"],s=!1,u=!1,i=0,c="",d=!1,a=[],_="0",b=[],m=[],r={row:-1,col:-1},f=0,T,B=0;function S(){T=setInterval(()=>{t(9,B++,B)},1e3)}function w(){clearInterval(T),T=void 0}function O(){w(),t(9,B=0)}function g(y,L){t(7,r={row:y,col:L})}function h(){t(19,a=ct(_)),m=x(a),t(6,b=a.map(y=>y.slice())),t(4,d=!0),t(0,s=!1),t(1,u=!1),t(8,f=0),console.log(m),O(),S(),t(8,f=0)}function M(){t(19,a=ft(c)),m=x(a),t(6,b=a.map(y=>y.slice())),t(4,d=!0),t(0,s=!1),O(),S(),console.log(m)}function R(y,L){const Z=document.querySelector(`#cell-${y}-${L}`);return console.log("custonm"),Z&&(Z.classList.remove("correct"),Z.classList.remove("incorrect")),a[y][L]===0?b[y][L]===m[y][L]?"correct":b[y][L]!==0?(t(8,f=f+1),console.log(f),"incorrect"):"empty":"filled"}function G(){for(let y=0;y<a.length;y++)for(let L=0;L<a[y].length;L++)if(b[y][L]!==m[y][L])return!1;return u?t(2,i=4):t(2,i=parseInt(_)),console.log("Congratulations! You have solved the puzzle."),w(),!0}function W(y){if(r.row!==-1&&r.col!==-1)if(t(6,b[r.row][r.col]=y,b),y===m[r.row][r.col]){const L=document.querySelector(`#cell-${r.row}-${r.col}`);L&&(L.classList.remove("incorrect"),L.classList.add("correct"))}else{const L=document.querySelector(`#cell-${r.row}-${r.col}`);L&&(L.classList.remove("correct"),L.classList.add("incorrect"),t(8,f=f+1))}t(0,s=G()),t(7,r={row:-1,col:-1})}function Y(y){y.target.closest("td")||t(7,r={row:-1,col:-1})}function X(){t(4,d=!1),t(0,s=!1),t(1,u=!1),t(3,c="")}function He(){t(6,b=m.map(y=>y.slice())),t(1,u=!0),w()}function Ue(){t(3,c=ut(a))}Ke(()=>(document.addEventListener("click",Y),()=>{document.removeEventListener("click",Y)}));const Ve=y=>W(y),Re=(y,L)=>g(y,L);function qe(){_=xe(this),t(5,_)}function ze(){c=this.value,t(3,c)}return l.$$.update=()=>{l.$$.dirty[0]&524288&&a.length&&(m=x(a)),l.$$.dirty[0]&524288&&t(10,o=a.map((y,L)=>y.map((Z,Je)=>R(L,Je))))},[s,u,i,c,d,_,b,r,f,B,o,n,g,h,M,W,X,He,Ue,a,Ve,Re,qe,ze]}class Bt extends se{constructor(e){super(),re(this,e,Nt,St,le,{},null,[-1,-1])}}function Lt(l){let e,t='<p class="svelte-2wr5xc">Sudoku Game By <a href="https://sevmeowple.github.io" style="color:pink">SevMeowple</a> <a href="https://github.com/sevmeowple" class="git_a svelte-2wr5xc"><button type="button" class="btn-github btn-icon variant-filled btn-icon-sm svelte-2wr5xc"><svg class="icon-github svelte-2wr5xc" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512"><path d="M256 32C132.3 32 32 134.8 32 261.7c0 101.5 64.2 187.5 153.2 217.9 11.2 2.1 15.3-5 15.3-11.1 0-5.5-.2-19.9-.3-39.1-62.3 13.9-75.5-30.8-75.5-30.8-10.2-26.5-24.9-33.6-24.9-33.6-20.3-14.3 1.5-14 1.5-14 22.5 1.6 34.3 23.7 34.3 23.7 20 35.1 52.4 25 65.2 19.1 2-14.8 7.8-25 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 18.8-6.2 61.6 23.5 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 42.8-29.7 61.5-23.5 61.5-23.5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 6.1 4 13.3 15.4 11C415.9 449.1 480 363.1 480 261.7 480 134.8 379.7 32 256 32z" fill-rule="evenodd" clip-rule="evenodd" fill="#ffa1a1" class="fill-000000"></path></svg></button></a></p>',o,n,s,u,i;return u=new Bt({}),{c(){e=C("footer"),e.innerHTML=t,o=D(),n=C("div"),s=C("main"),Ne(u.$$.fragment),this.h()},l(c){e=E(c,"FOOTER",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-6q8oit"&&(e.innerHTML=t),o=A(c),n=E(c,"DIV",{class:!0});var d=I(n);s=E(d,"MAIN",{class:!0});var a=I(s);Be(u.$$.fragment,a),a.forEach(p),d.forEach(p),this.h()},h(){k(e,"class","svelte-2wr5xc"),k(s,"class","board_main svelte-2wr5xc"),k(n,"class","page svelte-2wr5xc")},m(c,d){N(c,e,d),N(c,o,d),N(c,n,d),v(n,s),Le(u,s,null),i=!0},p:J,i(c){i||(K(u.$$.fragment,c),i=!0)},o(c){j(u.$$.fragment,c),i=!1},d(c){c&&(p(e),p(o),p(n)),Me(u)}}}class Dt extends se{constructor(e){super(),re(this,e,null,Lt,le,{})}}export{Dt as component};