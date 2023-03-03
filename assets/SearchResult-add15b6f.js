import{a as O,b as P,n as V,c as W,d as _,e as z,m as J,l as K,f as N,y as T,h as X,g as Y,i as Z,r as L,j as ee,k as te,L as ae,H as se}from"./app-7553b1be.js";import{c as le,C as re,I as ue,r as m,h as w,w as Q,o as ne,v as oe,j as t,R as E,E as ce,i as ie}from"./framework-8b16fc6a.js";const ve="search-pro-result-history",o=O(ve,[]),pe=()=>{const{resultHistoryCount:r}=L,c=r>0;return{enabled:c,resultHistory:o,addResultHistory:l=>{c&&(o.value.length<r?o.value=[l,...o.value]:o.value=[l,...o.value.slice(0,r-1)])},removeResultHistory:l=>{o.value=[...o.value.slice(0,l),...o.value.slice(l+1)]}}},he=r=>{const c=P(),l=m(!1),h=m([]);let i;const v=Z(d=>{l.value=!0,i==null||i.terminate(),d?(i=new Worker(`/${L.worker}`,{}),i.addEventListener("message",({data:f})=>{h.value=f,l.value=!1}),i.postMessage({query:d,routeLocale:c.value})):(h.value=[],l.value=!1)},L.delay);return Q([r,c],()=>v(r.value),{immediate:!0}),{searching:l,results:h}};var me=le({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(r,{emit:c}){const l=ee(),h=re(),i=P(),v=V(te),{addQueryHistory:d}=ae(),{enabled:f,resultHistory:S,addResultHistory:b,removeResultHistory:j}=pe(),R=ue(r,"query"),{results:y,searching:x}=he(R),u=m(0),s=m(0),q=m(),C=w(()=>S.value.length>0),k=w(()=>y.value.length>0),$=w(()=>y.value[u.value]||null),M=()=>{u.value=u.value>0?u.value-1:y.value.length-1,s.value=$.value.contents.length-1},I=()=>{u.value=u.value<y.value.length-1?u.value+1:0,s.value=0},U=()=>{s.value<$.value.contents.length-1?s.value=s.value+1:I()},F=()=>{s.value>0?s.value=s.value-1:M()},D=e=>e.map(a=>ie(a)?a:t(a[0],a[1])),A=e=>{if(e.type==="custom"){const a=se[e.index]||"$content",[p,g=""]=ce(a)?a[i.value].split("$content"):a.split("$content");return D([p,...e.display,g])}return D(e.display)},H=()=>{u.value=0,s.value=0,c("updateQuery",""),c("close")};return W("keydown",e=>{if(k.value){if(e.key==="ArrowUp")F();else if(e.key==="ArrowDown")U();else if(e.key==="Enter"){const a=$.value.contents[s.value];l.value.path!==a.path&&(d(r.query),b(a),h.push(a.path),H())}}}),Q([u,s],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),ne(()=>{_(q.value,{reserveScrollBarGap:!0})}),oe(()=>{z()}),()=>t("div",{class:["search-pro-result",{empty:R.value?!k.value:!C.value}],id:"search-pro-results",ref:q},R.value===""?C.value?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},v.value.history),S.value.map((e,a)=>t(E,{to:e.path,class:["search-pro-result-item",{active:s.value===a}],onClick:()=>{H()}},()=>[t(J,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.type==="content"&&e.header?t("div",{class:"content-header"},e.header):null,t("div",A(e))]),t("button",{class:"search-pro-close-icon",onClick:p=>{p.preventDefault(),p.stopPropagation(),j(a)}},t(K))]))])):f?v.value.emptyHistory:v.value.emptyResult:x.value?t(N,{hint:v.value.searching}):k.value?t("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:a},p)=>{const g=u.value===p;return t("li",{class:["search-pro-result-list-item",{active:g}]},[t("div",{class:"search-pro-result-title"},e||"Documentation"),a.map((n,G)=>{const B=g&&s.value===G;return t(E,{to:n.path,class:["search-pro-result-item",{active:B,"aria-selected":B}],onClick:()=>{d(r.query),b(n),H()}},()=>[n.type==="content"?null:t(n.type==="title"?T:n.type==="heading"?X:Y,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="content"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",A(n))])])})])})):v.value.emptyResult)}});export{me as default};
