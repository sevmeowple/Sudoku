import{n as u,s as d}from"./scheduler.C77K6qMD.js";const n=[];function k(e,r){return{subscribe:h(e,r).subscribe}}function h(e,r=u){let i;const o=new Set;function b(t){if(d(e,t)&&(e=t,i)){const c=!n.length;for(const s of o)s[1](),n.push(s,e);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function a(t){b(t(e))}function _(t,c=u){const s=[t,c];return o.add(s),o.size===1&&(i=r(b,a)||u),t(e),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:b,update:a,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_1ksl9cs)==null?void 0:f.base)??"/Sudoku";var l;const q=((l=globalThis.__sveltekit_1ksl9cs)==null?void 0:l.assets)??p;export{q as a,p as b,k as r,h as w};