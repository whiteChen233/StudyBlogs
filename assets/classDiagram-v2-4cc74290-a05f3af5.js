import{p as _,d as L,s as I}from"./styles-bd38c0ff-783d5da1.js";import{l as d,g as y,s as v,d as C}from"./transform-49cadac7.js";import{G as M}from"./index-a14a2cac.js";import{r as R}from"./index-64e46a5f-a96b26f7.js";import{u as $,z as g,x,y as B}from"./utils-3cbdbddf-32493294.js";import{s as G}from"./setupGraphViewbox-e1099da8-0b41caab.js";import"./mermaidAPI-a1a81019-a12021ec.js";import"./preload-helper-101896b7.js";import"./errorRenderer-11917bdc-03fe838a.js";import"./commonDb-7528607a-e660faf1.js";import"./isPlainObject-63ae1d35.js";import"./array-9f3ba611.js";import"./path-53f90ab3.js";import"./edges-02da71a2-2bf9a391.js";import"./svgDraw-87c143cd-d68e39e4.js";const D=o=>C.sanitizeText(o,y());let E={dividerMargin:10,padding:5,textHeight:10};const z=function(o,s,f,r){const t=Object.keys(o);d.info("keys:",t),d.info(o),t.forEach(function(l){const e=o[l];let c="";e.cssClasses.length>0&&(c=c+" "+e.cssClasses.join(" "));const a={labelStyle:""};let b=e.text!==void 0?e.text:e.id,i=0,p="";switch(e.type){case"class":p="class_box";break;default:p="class_box"}s.setNode(e.id,{labelStyle:a.labelStyle,shape:p,labelText:D(b),classData:e,rx:i,ry:i,class:c,style:a.style,id:e.id,domId:e.domId,tooltip:r.db.getTooltip(e.id)||"",haveCallback:e.haveCallback,link:e.link,width:e.type==="group"?500:void 0,type:e.type,padding:y().flowchart.padding}),d.info("setNode",{labelStyle:a.labelStyle,shape:p,labelText:b,rx:i,ry:i,class:c,style:a.style,id:e.id,width:e.type==="group"?500:void 0,type:e.type,padding:y().flowchart.padding})})},J=function(o,s,f,r){d.info(o),o.forEach(function(t,l){const e=t;let c="";const a={labelStyle:"",style:""};let b=e.text,i=0,p="note";if(s.setNode(e.id,{labelStyle:a.labelStyle,shape:p,labelText:D(b),noteData:e,rx:i,ry:i,class:c,style:a.style,id:e.id,domId:e.id,tooltip:"",type:"note",padding:y().flowchart.padding}),d.info("setNode",{labelStyle:a.labelStyle,shape:p,labelText:b,rx:i,ry:i,style:a.style,id:e.id,type:"note",padding:y().flowchart.padding}),!e.class||!(e.class in r))return;const h=f+l,n={};n.classes="relation",n.pattern="dotted",n.id=`edgeNote${h}`,n.arrowhead="none",d.info(`Note edge: ${JSON.stringify(n)}, ${JSON.stringify(e)}`),n.startLabelRight="",n.endLabelLeft="",n.arrowTypeStart="none",n.arrowTypeEnd="none";let m="fill:none",w="";n.style=m,n.labelStyle=w,n.curve=g(E.curve,x),s.setEdge(e.id,e.class,n,h)})},q=function(o,s){const f=y().flowchart;let r=0;o.forEach(function(t){r++;const l={};l.classes="relation",l.pattern=t.relation.lineType==1?"dashed":"solid",l.id="id"+r,t.type==="arrow_open"?l.arrowhead="none":l.arrowhead="normal",d.info(l,t),l.startLabelRight=t.relationTitle1==="none"?"":t.relationTitle1,l.endLabelLeft=t.relationTitle2==="none"?"":t.relationTitle2,l.arrowTypeStart=N(t.relation.type1),l.arrowTypeEnd=N(t.relation.type2);let e="",c="";if(t.style!==void 0){const a=B(t.style);e=a.style,c=a.labelStyle}else e="fill:none";l.style=e,l.labelStyle=c,t.interpolate!==void 0?l.curve=g(t.interpolate,x):o.defaultInterpolate!==void 0?l.curve=g(o.defaultInterpolate,x):l.curve=g(f.curve,x),t.text=t.title,t.text===void 0?t.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",y().flowchart.htmlLabels?(l.labelType="html",l.label='<span class="edgeLabel">'+t.text+"</span>"):(l.labelType="text",l.label=t.text.replace(C.lineBreakRegex,`
`),t.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),s.setEdge(t.id1,t.id2,l,r)})},F=function(o){Object.keys(o).forEach(function(f){E[f]=o[f]})},H=function(o,s,f,r){d.info("Drawing class - ",s);const t=y().flowchart,l=y().securityLevel;d.info("config:",t);const e=t.nodeSpacing||50,c=t.rankSpacing||50,a=new M({multigraph:!0,compound:!0}).setGraph({rankdir:r.db.getDirection(),nodesep:e,ranksep:c,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),b=r.db.getClasses(),i=r.db.getRelations(),p=r.db.getNotes();d.info(i),z(b,a,s,r),q(i,a),J(p,a,i.length+1,b);let h;l==="sandbox"&&(h=v("#i"+s));const n=l==="sandbox"?v(h.nodes()[0].contentDocument.body):v("body"),m=n.select(`[id="${s}"]`),w=n.select("#"+s+" g");if(R(w,a,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",s),$.insertTitle(m,"classTitleText",t.titleTopMargin,r.db.getDiagramTitle()),G(a,m,t.diagramPadding,t.useMaxWidth),!t.htmlLabels){const k=l==="sandbox"?h.nodes()[0].contentDocument:document,A=k.querySelectorAll('[id="'+s+'"] .edgeLabel .label');for(const S of A){const T=S.getBBox(),u=k.createElementNS("http://www.w3.org/2000/svg","rect");u.setAttribute("rx",0),u.setAttribute("ry",0),u.setAttribute("width",T.width),u.setAttribute("height",T.height),S.insertBefore(u,S.firstChild)}}};function N(o){let s;switch(o){case 0:s="aggregation";break;case 1:s="extension";break;case 2:s="composition";break;case 3:s="dependency";break;case 4:s="lollipop";break;default:s="none"}return s}const P={setConf:F,draw:H},ae={parser:_,db:L,renderer:P,styles:I,init:o=>{o.class||(o.class={}),o.class.arrowMarkerAbsolute=o.arrowMarkerAbsolute,L.clear()}};export{ae as diagram};
