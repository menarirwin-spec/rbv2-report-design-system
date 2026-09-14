import{n as e}from"./iframe-zRMcptoa.js";import{E as t,S as n,T as r,b as i,l as a,n as o,r as s,v as c,y as l}from"./specimen-B0liDpuY.js";import{C as u,_ as d,f,w as p}from"./deck-parts-C7_heP_G.js";import{n as m,r as h,t as g}from"./fixtures-Cgw8W8hE.js";import{_ as ee,a as _,c as v,d as te,f as ne,g as y,h as re,i as b,l as ie,m as ae,n as oe,o as se,p as ce,r as le,s as ue,t as de,u as fe,v as pe,y as me}from"./charts-narrative-DmAA89b0.js";import{m as he,o as ge,s as _e}from"./structure-fI78U3O1.js";import{n as ve}from"./rolldown-runtime-DkW27tQK.js";function ye(e,t,n,r,i,a){let[o,s]=T(e,t,r,i),[c,l]=T(e,t,r,a),[u,d]=T(e,t,n,a),[f,p]=T(e,t,n,i),m=+(a-i>Math.PI);return`M${o} ${s}A${r} ${r} 0 ${m} 1 ${c} ${l}L${u} ${d}A${n} ${n} 0 ${m} 0 ${f} ${p}Z`}function be({nodes:e,centerLabel:t,centerValue:n}){let r=e.reduce((e,t)=>e+t.value,0),i=0;return(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-10`,children:[(0,x.jsxs)(`svg`,{viewBox:`0 0 460 460`,style:{width:380,maxWidth:`100%`,height:`auto`},children:[e.map((e,t)=>{let n=e.value/r*Math.PI*2,a=i;i+=n;let o=l[t%6],s=a;return(0,x.jsxs)(`g`,{children:[(0,x.jsx)(`path`,{d:ye(230,230,78,138,a,a+n),fill:o}),(e.children??[]).map((t,r)=>{let i=t.value/e.value*n,a=s;return s+=i,(0,x.jsx)(`path`,{d:ye(230,230,142,196,a,a+i),fill:o,opacity:.55+r%3*.15,stroke:`var(--r-panel)`},t.label)})]},e.label)}),n?(0,x.jsx)(`text`,{x:230,y:234,textAnchor:`middle`,style:{...C,fontSize:26,fill:`var(--r-ink)`},children:n}):null,t?(0,x.jsx)(`text`,{x:230,y:256,textAnchor:`middle`,style:{...w,fontSize:9.5},children:t}):null]}),(0,x.jsx)(`div`,{className:`flex flex-col gap-3`,children:e.map((e,t)=>(0,x.jsxs)(`div`,{className:`flex items-baseline gap-3`,children:[(0,x.jsx)(`span`,{style:{width:10,height:10,borderRadius:2,background:l[t%6],display:`inline-block`}}),(0,x.jsx)(`span`,{className:`r-small`,style:{fontSize:12.5,minWidth:150},children:e.label}),(0,x.jsx)(`span`,{className:`r-num`,style:{fontSize:14},children:S(e.value)})]},e.label))})]})}function xe({series:e,periods:t}){let n=t.length,r=t.map((t,n)=>e.reduce((e,t)=>e+(t.values[n]??0),0)),i=Math.max(...r),a=e=>e/(n-1)*900,o=e=>e/i*246,s=r.map(e=>266/2+o(e)/2),c=t.map(()=>0);return(0,x.jsxs)(`svg`,{viewBox:`0 0 900 300`,style:{width:`100%`,height:`auto`},children:[e.map((e,n)=>{let r=[],i=[];return t.forEach((t,n)=>{let l=s[n]-c[n],u=l-o(e.values[n]??0);c[n]=c[n]+o(e.values[n]??0),r.push(`${a(n)} ${u}`),i.unshift(`${a(n)} ${l}`)}),(0,x.jsx)(`path`,{d:`M${r.join(`L`)}L${i.join(`L`)}Z`,fill:l[n%6],opacity:.92},e.label)}),(0,x.jsx)(`line`,{x1:0,x2:900,y1:274,y2:274,stroke:`var(--r-line)`}),t.map((e,t)=>(0,x.jsx)(`text`,{x:a(t),y:292,textAnchor:t===0?`start`:t===n-1?`end`:`middle`,style:w,children:e},e))]})}function Se({items:e,axisLabel:t}){let n=Math.max(...e.map(e=>e.value))*1.08,r=e=>44+e/n*812,i=[...new Set(e.map(e=>e.group??`—`))],a=[...e].sort((e,t)=>e.value-t.value),o=[],s=a.map(e=>{let t=r(e.value),n=o.findIndex(e=>t-e>104);return n===-1&&(n=o.length),o[n]=t,{cx:t,cy:250/2+(n%2==0?-1:1)*Math.ceil((n+1)/2)*30,it:e}});return(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`svg`,{viewBox:`0 0 900 250`,style:{width:`100%`,height:`auto`},children:[(0,x.jsx)(`line`,{x1:44,x2:856,y1:250/2,y2:250/2,stroke:`var(--r-line)`}),s.map(e=>(0,x.jsxs)(`g`,{children:[(0,x.jsx)(`circle`,{cx:e.cx,cy:e.cy,r:9,fill:l[i.indexOf(e.it.group??`—`)%6],stroke:`var(--r-panel)`,strokeWidth:1.5}),(0,x.jsx)(`text`,{x:e.cx+14,y:e.cy+4,style:{...Be,fontSize:10.5},children:e.it.label})]},e.it.label))]}),(0,x.jsxs)(`div`,{className:`mt-2 flex flex-wrap items-baseline gap-x-7 gap-y-2`,children:[t?(0,x.jsx)(`span`,{className:`r-small`,style:{fontSize:12},children:t}):null,i.map((e,t)=>(0,x.jsxs)(`span`,{className:`flex items-baseline gap-2`,children:[(0,x.jsx)(`span`,{style:{width:9,height:9,borderRadius:99,background:l[t%6],display:`inline-block`}}),(0,x.jsx)(`span`,{className:`r-small`,style:{fontSize:12},children:e})]},e))]})]})}function Ce({rows:e,suffix:t}){let n=[...e].sort((e,t)=>t.value-e.value),r=Math.max(...e.map(e=>e.value))*1.1;return(0,x.jsx)(`div`,{className:`flex flex-col gap-4`,children:n.map((e,n)=>(0,x.jsxs)(`div`,{className:`grid items-center gap-4`,style:{gridTemplateColumns:`180px 1fr 78px`},children:[(0,x.jsx)(`span`,{className:`r-small`,style:{fontSize:12.5,color:`var(--r-ink)`},children:e.label}),(0,x.jsxs)(`svg`,{viewBox:`0 0 600 18`,style:{width:`100%`,height:18},preserveAspectRatio:`none`,children:[(0,x.jsx)(`line`,{x1:0,x2:600,y1:9,y2:9,stroke:`var(--r-line)`,strokeDasharray:`2 4`}),(0,x.jsx)(`line`,{x1:0,x2:e.value/r*600,y1:9,y2:9,stroke:n===0?`var(--r-accent)`:`var(--r-c2)`,strokeWidth:2.5})]}),(0,x.jsx)(`span`,{className:`r-num`,style:{fontSize:15,textAlign:`right`},children:t?`${e.value}${t}`:S(e.value)})]},e.label))})}function we({rows:e,cols:t,values:n,unit:r}){let i=n.flat(),a=Math.max(...i);return(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`div`,{className:`grid gap-1`,style:{gridTemplateColumns:`150px repeat(${t.length}, minmax(0,1fr))`},children:[(0,x.jsx)(`span`,{}),t.map(e=>(0,x.jsx)(`span`,{className:`r-small`,style:{fontSize:10.5,letterSpacing:`0.12em`,textTransform:`uppercase`},children:e},e)),e.map((e,r)=>(0,x.jsxs)(`div`,{className:`contents`,children:[(0,x.jsx)(`span`,{className:`r-small self-center`,style:{fontSize:12.5,color:`var(--r-ink)`},children:e}),t.map((e,t)=>{let i=n[r]?.[t]??0,o=a?i/a:0,s=o>=.66;return(0,x.jsx)(`div`,{className:`flex items-center justify-center`,style:{height:46,background:s?`var(--r-accent)`:`color-mix(in srgb, var(--r-accent) ${Math.round(6+o*30)}%, var(--r-paper))`,borderRadius:2},children:(0,x.jsx)(`span`,{style:{...C,fontSize:12.5,color:s?`var(--r-accent-ink)`:`var(--r-ink)`},children:i?i.toLocaleString():`—`})},e)})]},e))]}),r?(0,x.jsx)(`p`,{className:`r-small mt-3`,style:{fontSize:12},children:r}):null]})}function Te({items:e,note:t}){let n=[...e].sort((e,t)=>t.value-e.value),r=n.reduce((e,t)=>e+t.value,0),i=0,a=n.map((e,t)=>(i+=e.value,{x:44+(t+1)/n.length*552,y:276-i/r*232,label:e.label,pct:Math.round(i/r*100)}));return(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-9`,children:[(0,x.jsxs)(`svg`,{viewBox:`0 0 640 320`,style:{width:420,maxWidth:`100%`,height:`auto`},children:[(0,x.jsx)(`line`,{x1:44,x2:44,y1:44,y2:276,stroke:`var(--r-line)`}),(0,x.jsx)(`line`,{x1:44,x2:596,y1:276,y2:276,stroke:`var(--r-line)`}),(0,x.jsx)(`line`,{x1:44,x2:596,y1:276,y2:44,stroke:`var(--r-mut)`,strokeDasharray:`4 4`}),(0,x.jsx)(`path`,{d:`M44 276L${a.map(e=>`${e.x} ${e.y}`).join(`L`)}`,fill:`none`,stroke:`var(--r-accent)`,strokeWidth:2.5}),a.map(e=>(0,x.jsx)(`circle`,{cx:e.x,cy:e.y,r:4.5,fill:`var(--r-accent)`},e.label)),(0,x.jsx)(`text`,{x:44,y:306,style:w,children:`Largest first`}),(0,x.jsx)(`text`,{x:596,y:306,textAnchor:`end`,style:w,children:`All holdings`})]}),(0,x.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[a.map(e=>(0,x.jsxs)(`div`,{className:`flex items-baseline gap-3`,children:[(0,x.jsxs)(`span`,{className:`r-num`,style:{fontSize:15,minWidth:46},children:[e.pct,`%`]}),(0,x.jsxs)(`span`,{className:`r-small`,style:{fontSize:12.5},children:[`through `,e.label]})]},e.label)),t?(0,x.jsx)(`p`,{className:`r-small mt-2 max-w-[34ch]`,style:{fontSize:12},children:t}):null]})]})}function Ee({brackets:e,income:t}){let n=e[e.length-1].to;return(0,x.jsx)(`div`,{className:`flex flex-col-reverse gap-2`,children:e.map(e=>{let r=e.to-e.from,i=Math.max(0,Math.min(t,e.to)-e.from),a=i/r*100,o=t>e.from;return(0,x.jsxs)(`div`,{className:`grid items-center gap-4`,style:{gridTemplateColumns:`62px 1fr 190px`},children:[(0,x.jsxs)(`span`,{className:`r-num`,style:{fontSize:17,color:o?`var(--r-ink)`:`var(--r-mut)`},children:[e.rate,`%`]}),(0,x.jsx)(`div`,{style:{height:26,background:`var(--r-paper-2)`,borderRadius:2,position:`relative`,overflow:`hidden`,width:`${Math.max(12,r/n*100)}%`},children:(0,x.jsx)(`div`,{style:{width:`${a}%`,height:`100%`,background:a>=100?`var(--r-c2)`:`var(--r-accent)`}})}),(0,x.jsxs)(`span`,{className:`r-small`,style:{fontSize:11.5},children:[S(e.from),` – `,e.to>9e5?`up`:S(e.to),i>0&&a<100?` · ${S(i)} in bracket`:``]})]},e.rate)})})}function De({layers:e,unitNote:t}){let n=[...e].sort((e,t)=>t.value-e.value),r=n[0].value;return(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-10`,children:[(0,x.jsx)(`svg`,{viewBox:`0 0 320 320`,style:{width:300,maxWidth:`100%`,height:`auto`},children:n.map((e,t)=>{let n=Math.sqrt(e.value/r)*320;return(0,x.jsx)(`rect`,{x:(320-n)/2,y:320-n,width:n,height:n,fill:t===0?`var(--r-paper-2)`:l[t%6],opacity:t===0?1:.9,stroke:`var(--r-line)`},e.label)})}),(0,x.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[n.map((e,t)=>(0,x.jsxs)(`div`,{className:`flex items-baseline gap-3`,children:[(0,x.jsx)(`span`,{style:{width:10,height:10,background:t===0?`var(--r-paper-2)`:l[t%6],border:`1px solid var(--r-line)`,display:`inline-block`}}),(0,x.jsx)(`span`,{className:`r-small`,style:{fontSize:12.5,minWidth:160},children:e.label}),(0,x.jsx)(`span`,{className:`r-num`,style:{fontSize:15},children:S(e.value)})]},e.label)),t?(0,x.jsx)(`p`,{className:`r-small mt-1 max-w-[34ch]`,style:{fontSize:12},children:t}):null]})]})}function Oe({rows:e,baseLabel:t}){let n=Math.max(...e.flatMap(e=>[Math.abs(e.low),Math.abs(e.high)]))*1.15,r=e=>380+e/n*260;return(0,x.jsx)(`div`,{children:(0,x.jsxs)(`svg`,{viewBox:`0 0 760 ${e.length*62+26}`,style:{width:`100%`,height:`auto`},children:[(0,x.jsx)(`line`,{x1:380,x2:380,y1:0,y2:e.length*62,stroke:`var(--r-line)`,strokeWidth:1.5}),e.map((e,t)=>{let n=t*62+62/2;return(0,x.jsxs)(`g`,{children:[(0,x.jsx)(`rect`,{x:r(e.low),y:n-11,width:380-r(e.low),height:22,fill:`var(--r-warn)`,opacity:.85}),(0,x.jsx)(`rect`,{x:380,y:n-11,width:r(e.high)-380,height:22,fill:`var(--r-c2)`}),(0,x.jsxs)(`text`,{x:r(e.low)-10,y:n+5,textAnchor:`end`,style:{...C,fontSize:13,fill:`var(--r-ink)`},children:[`−`,S(Math.abs(e.low))]}),(0,x.jsxs)(`text`,{x:r(e.high)+10,y:n+5,style:{...C,fontSize:13,fill:`var(--r-ink)`},children:[`+`,S(e.high)]}),(0,x.jsx)(`text`,{x:380,y:n-20,textAnchor:`middle`,style:{...Be,fontSize:11},children:e.label})]},e.label)}),(0,x.jsx)(`text`,{x:380,y:e.length*62+18,textAnchor:`middle`,style:w,children:t??`Base case`})]})})}function ke({months:e,events:t,centerLabel:n}){let r=Math.PI*2/e.length;return(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-10`,children:[(0,x.jsxs)(`svg`,{viewBox:`0 0 460 460`,style:{width:380,maxWidth:`100%`,height:`auto`},children:[(0,x.jsx)(`circle`,{cx:230,cy:230,r:150,fill:`none`,stroke:`var(--r-line)`}),(0,x.jsx)(`circle`,{cx:230,cy:230,r:96,fill:`none`,stroke:`var(--r-line)`,strokeDasharray:`3 5`}),e.map((e,t)=>{let n=t*r,[i,a]=T(230,230,150,n),[o,s]=T(230,230,172,n+r/2);return(0,x.jsxs)(`g`,{children:[(0,x.jsx)(`line`,{x1:230,y1:230,x2:i,y2:a,stroke:`var(--r-line)`,opacity:.5}),(0,x.jsx)(`text`,{x:o,y:s+4,textAnchor:`middle`,style:{...w,fontSize:9},children:e})]},e)}),t.map((e,t)=>{let n=e.month*r+r/2,i=96+(e.weight??1)*16,[a,o]=T(230,230,i,n);return(0,x.jsxs)(`g`,{children:[(0,x.jsx)(`line`,{x1:T(230,230,96,n)[0],y1:T(230,230,96,n)[1],x2:a,y2:o,stroke:l[t%6],strokeWidth:2}),(0,x.jsx)(`circle`,{cx:a,cy:o,r:6,fill:l[t%6]})]},e.label)}),n?(0,x.jsx)(`text`,{x:230,y:234,textAnchor:`middle`,style:{...w,fontSize:9.5},children:n}):null]}),(0,x.jsx)(`div`,{className:`flex flex-col gap-2.5`,children:t.map((t,n)=>(0,x.jsxs)(`div`,{className:`flex items-baseline gap-3`,children:[(0,x.jsx)(`span`,{style:{width:9,height:9,borderRadius:99,background:l[n%6],display:`inline-block`}}),(0,x.jsxs)(`span`,{className:`r-small`,style:{fontSize:12.5},children:[(0,x.jsx)(`strong`,{style:{color:`var(--r-ink)`},children:e[t.month]}),` — `,t.label]})]},t.label))})]})}function Ae({points:e,xLabel:t,yLabel:n,note:r}){let i=e.map(e=>e.x),a=e.map(e=>e.y),o=Math.min(...i),s=Math.max(...i),c=Math.min(...a),l=Math.max(...a),u=(s-o)*.1||1,d=(s-o)*.34||1,f=(l-c)*.28||1,p=o-u,m=s+d,h=c-f,g=l+f,ee=e=>74+(e-p)/(m-p)*652,_=e=>338-(e-h)/(g-h)*304,v=(e,t,n=4)=>Array.from({length:n+1},(r,i)=>e+(t-e)*i/n),te=v(c,l,3),ne=v(o,s,3),y=e.map(e=>[ee(e.x),_(e.y)]),re=e=>`M${y[e][0]} ${y[e][1]}L${y[e+1][0]} ${y[e+1][1]}`,b=e.length-1,ie=[`var(--r-c6)`,`var(--r-c3)`,`var(--r-c2)`,`var(--r-c1)`],ae=e=>ie[Math.min(ie.length-1,Math.round(e/Math.max(1,b)*(ie.length-1)))],oe=e[b].y-e[0].y,se=e[b].x-e[0].x;return(0,x.jsxs)(`svg`,{viewBox:`0 0 760 400`,style:{width:`100%`,height:`auto`},children:[(0,x.jsxs)(`defs`,{children:[(0,x.jsxs)(`linearGradient`,{id:`cs-trail`,gradientUnits:`userSpaceOnUse`,x1:74,y1:0,x2:726,y2:0,children:[(0,x.jsx)(`stop`,{offset:`0%`,stopColor:`var(--r-c6)`,stopOpacity:.45}),(0,x.jsx)(`stop`,{offset:`45%`,stopColor:`var(--r-c3)`,stopOpacity:.85}),(0,x.jsx)(`stop`,{offset:`100%`,stopColor:`var(--r-c1)`,stopOpacity:1})]}),(0,x.jsxs)(`radialGradient`,{id:`cs-halo`,children:[(0,x.jsx)(`stop`,{offset:`0%`,stopColor:`var(--r-accent-3)`,stopOpacity:.45}),(0,x.jsx)(`stop`,{offset:`100%`,stopColor:`var(--r-accent-3)`,stopOpacity:0})]})]}),te.map(e=>(0,x.jsxs)(`g`,{children:[(0,x.jsx)(`line`,{x1:74,x2:726,y1:_(e),y2:_(e),stroke:`var(--r-line)`,strokeDasharray:`1 5`}),(0,x.jsx)(`text`,{x:62,y:_(e)+4,textAnchor:`end`,style:{...C,fontSize:11.5,fill:`var(--r-mut)`},children:e.toFixed(1)})]},`y${e}`)),ne.map(e=>(0,x.jsx)(`text`,{x:ee(e),y:358,textAnchor:`middle`,style:{...C,fontSize:11.5,fill:`var(--r-mut)`},children:Math.round(e)},`x${e}`)),(0,x.jsx)(`line`,{x1:74,x2:726,y1:338,y2:338,stroke:`var(--r-line)`}),y.slice(0,-1).map((e,t)=>(0,x.jsx)(`path`,{d:re(t),fill:`none`,stroke:`url(#cs-trail)`,strokeWidth:1.6+t/Math.max(1,y.length-2)*2.2,strokeLinecap:`round`},`s${t}`)),(0,x.jsx)(`line`,{x1:y[b][0],x2:y[b][0],y1:y[b][1],y2:338,stroke:`var(--r-accent-3)`,strokeOpacity:.6,strokeDasharray:`2 4`}),(0,x.jsx)(`line`,{x1:74,x2:y[b][0],y1:y[b][1],y2:y[b][1],stroke:`var(--r-accent-3)`,strokeOpacity:.6,strokeDasharray:`2 4`}),e.map((e,t)=>{let n=t===b,r=y[t][0],i=y[t][1];return(0,x.jsxs)(`g`,{children:[n&&(0,x.jsx)(`circle`,{cx:r,cy:i,r:19,fill:`url(#cs-halo)`}),(0,x.jsx)(`circle`,{cx:r,cy:i,r:n?8:5.5,fill:n?`var(--r-accent-3)`:`var(--r-panel)`,stroke:n?`var(--r-accent-3)`:ae(t),strokeWidth:n?2.5:2.4}),(0,x.jsx)(`text`,{x:r+13,y:i-20,textAnchor:`start`,style:{...Be,fontSize:12,fontWeight:n?700:600,fill:`var(--r-ink)`},children:e.label}),(0,x.jsx)(`text`,{x:r+13,y:i-6,textAnchor:`start`,style:{...C,fontSize:11,fill:`var(--r-mut)`},children:`${Math.round(e.x)} · ${e.y.toFixed(1)}%`})]},e.label)}),(0,x.jsx)(`text`,{x:726,y:386,textAnchor:`end`,style:w,children:t}),(0,x.jsx)(`text`,{x:74,y:20,style:w,children:n}),(0,x.jsx)(`text`,{x:726,y:20,textAnchor:`end`,style:{...Be,fontSize:12,fill:`var(--r-mut)`},children:r??`${se>=0?`+`:`−`}${Math.abs(Math.round(se))} of income, ${oe>=0?`+`:`−`}${Math.abs(oe).toFixed(1)} pts of rate since ${e[0].label}`})]})}function je({xBands:e,yGridlines:t,xLabel:n,yLabel:r,points:i}){let a=t[t.length-1],o=1050/e.length,s=e=>90+o*(e+.5),c=e=>410-e/a*380,l=Math.max(...i.map(e=>e.value)),u=e=>13+e/l*18,d=e=>e===`accent2`?`var(--r-accent-2)`:e===`accent3`?`var(--r-accent-3)`:e===`muted`?`var(--r-mut)`:`var(--r-accent)`;return(0,x.jsxs)(`svg`,{viewBox:`0 0 1180 470`,style:{width:`100%`,height:`auto`,overflow:`visible`},role:`img`,"aria-label":`${r} versus ${n}: ${i.map(e=>`${e.label} ${S(e.value)}`).join(`, `)}`,children:[t.map(e=>(0,x.jsxs)(`g`,{children:[(0,x.jsx)(`line`,{x1:90,x2:1140,y1:c(e),y2:c(e),stroke:`var(--r-line)`,strokeDasharray:`2 6`}),(0,x.jsx)(`text`,{x:78,y:c(e)+4,textAnchor:`end`,style:{...C,fontSize:12.5,fill:`var(--r-mut)`},children:S(e)})]},e)),e.map((e,t)=>(0,x.jsx)(`text`,{x:s(t),y:436,textAnchor:`middle`,style:{...C,fontSize:13,fill:`var(--r-mut)`},children:e},e)),(0,x.jsx)(`line`,{x1:90,x2:1140,y1:410,y2:410,stroke:`var(--r-line)`}),(0,x.jsx)(`line`,{x1:90,x2:90,y1:30,y2:410,stroke:`var(--r-line)`}),i.map(e=>{let t=s(e.band),n=c(e.value),r=u(e.value),i=d(e.tone);return(0,x.jsxs)(`g`,{children:[(0,x.jsx)(`circle`,{cx:t,cy:n,r,fill:i,fillOpacity:.2}),(0,x.jsx)(`circle`,{cx:t,cy:n,r,fill:`none`,stroke:i,strokeWidth:2}),(0,x.jsx)(`circle`,{cx:t,cy:n,r:2.5,fill:i}),(0,x.jsx)(`text`,{x:t,y:n-r-10,textAnchor:`middle`,style:{...C,fontSize:13,fill:`var(--r-ink)`},children:e.label})]},e.label)}),(0,x.jsx)(`text`,{x:90,y:18,style:w,children:r}),(0,x.jsxs)(`text`,{x:1140,y:462,textAnchor:`end`,style:w,children:[n,` →`]})]})}function Me({items:e,legend:t}){let n=Math.max(...e.map(e=>e.size));return(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`grid gap-8`,style:{gridTemplateColumns:`repeat(auto-fit, minmax(150px, 1fr))`},children:e.map((e,t)=>{let r=20+e.size/n*26;return(0,x.jsxs)(`div`,{className:`flex flex-col items-center text-center`,children:[(0,x.jsxs)(`svg`,{viewBox:`0 0 120 120`,style:{width:118,height:118},children:[(0,x.jsx)(`circle`,{cx:60,cy:60,r,fill:l[t%6],opacity:.9}),Array.from({length:e.effort}).map((e,n)=>(0,x.jsx)(`circle`,{cx:60,cy:60,r:r+6+n*6,fill:`none`,stroke:l[t%6],strokeWidth:1.2,opacity:.55},n)),e.urgent?(0,x.jsx)(`line`,{x1:60,y1:6,x2:60,y2:26,stroke:`var(--r-warn)`,strokeWidth:3}):null]}),(0,x.jsx)(`span`,{className:`r-small mt-2`,style:{fontSize:12,color:`var(--r-ink)`},children:e.label}),e.note?(0,x.jsx)(`span`,{className:`r-small`,style:{fontSize:11},children:e.note}):null]},e.label)})}),t?(0,x.jsx)(`p`,{className:`r-small mt-6`,style:{fontSize:12},children:t}):null]})}function Ne(){return(0,x.jsx)(`svg`,{width:`150`,height:`110`,viewBox:`0 0 150 110`,children:(0,x.jsxs)(`g`,{transform:`translate(75,60)`,children:[(0,x.jsx)(`path`,{d:`M 0 0 L 0 -40 A 40 40 0 0 1 30.6 -25.7 Z`,fill:`var(--r-accent)`}),(0,x.jsx)(`path`,{d:`M 0 0 L 30.6 -25.7 A 40 40 0 0 1 39.4 6.9 Z`,fill:`var(--r-accent-2)`}),(0,x.jsx)(`path`,{d:`M 0 0 L 39.4 6.9 A 40 40 0 0 1 20 34.6 Z`,fill:`var(--r-accent-3)`}),(0,x.jsx)(`path`,{d:`M 0 0 L 20 34.6 A 40 40 0 0 1 -13.7 37.6 Z`,fill:`color-mix(in srgb, var(--r-accent-3) 55%, var(--r-ink))`}),(0,x.jsx)(`circle`,{r:14,fill:`var(--r-bg)`})]})})}function Pe(){return(0,x.jsxs)(`svg`,{width:`150`,height:`110`,viewBox:`0 0 150 110`,children:[(0,x.jsx)(`path`,{d:`M0,20 C60,20 60,30 150,34 L150,76 C60,80 60,90 0,90 Z`,fill:`var(--r-accent)`}),(0,x.jsx)(`path`,{d:`M0,90 C60,90 70,95 150,98 L150,104 C70,104 60,104 0,104 Z`,fill:`var(--r-accent-3)`})]})}function Fe(){let e=Array.from({length:60});return(0,x.jsx)(`svg`,{width:`150`,height:`110`,viewBox:`0 0 150 110`,children:e.map((e,t)=>{let n=t%10,r=Math.floor(t/10);return(0,x.jsx)(`rect`,{x:6+n*14,y:10+r*10,width:10,height:7,fill:r<3.5?`var(--r-accent)`:`var(--r-line)`},t)})})}function Ie(){return(0,x.jsx)(`svg`,{width:`150`,height:`110`,viewBox:`0 0 150 110`,children:(0,x.jsxs)(`g`,{transform:`translate(75,55)`,children:[(0,x.jsx)(`circle`,{r:30,fill:`none`,stroke:`var(--r-line)`}),Array.from({length:8},(e,t)=>{let n=t/8*Math.PI*2-Math.PI/2;return(0,x.jsx)(`line`,{x1:0,y1:0,x2:Math.cos(n)*34,y2:Math.sin(n)*34,stroke:`var(--r-accent-2)`,strokeWidth:2},t)}),(0,x.jsx)(`circle`,{r:16,fill:`var(--r-accent-3)`,fillOpacity:.8})]})})}function Le(){return(0,x.jsx)(`svg`,{width:`150`,height:`110`,viewBox:`0 0 150 110`,children:(0,x.jsxs)(`g`,{transform:`translate(75,55)`,children:[(0,x.jsx)(`circle`,{r:42,fill:`none`,stroke:`var(--r-line)`}),(0,x.jsx)(`path`,{d:`M 0 -42 A 42 42 0 0 1 42 0`,fill:`none`,stroke:`var(--r-accent-2)`,strokeWidth:6}),(0,x.jsx)(`path`,{d:`M 42 0 A 42 42 0 0 1 0 42`,fill:`none`,stroke:`var(--r-accent-3)`,strokeWidth:6}),(0,x.jsx)(`circle`,{r:3,fill:`var(--r-mut)`})]})})}function Re(){return(0,x.jsxs)(`svg`,{width:`150`,height:`110`,viewBox:`0 0 150 110`,children:[[20,32,44,56,68].map((e,t)=>(0,x.jsx)(`rect`,{x:8+t*26,y:e,width:18,height:14,fill:`var(--r-accent-2)`},t)),(0,x.jsx)(`rect`,{x:8,y:6,width:18,height:14,fill:`var(--r-accent)`})]})}function ze({items:e}){return(0,x.jsx)(`div`,{className:`grid gap-6`,style:{gridTemplateColumns:`repeat(3, minmax(0,1fr))`},children:e.map(e=>(0,x.jsxs)(a,{children:[(0,x.jsx)(`div`,{style:{height:110,display:`flex`,alignItems:`center`,justifyContent:`center`},children:e.icon}),(0,x.jsx)(c,{className:`!my-3`}),(0,x.jsx)(`div`,{style:{fontSize:17,fontWeight:600},children:e.name}),(0,x.jsx)(n,{className:`mt-1.5`,children:e.description})]},e.name))})}var x,S,C,w,Be,T;function Ve(){return(Ve=ve((()=>{r(),x=e(),S=e=>e>=1e6?`$${(e/1e6).toFixed(e>=1e7?1:2)}M`:e>=1e3?`$${(e/1e3).toFixed(e>=1e4?0:1)}k`:`$${e.toLocaleString()}`,C={fontFamily:`var(--r-num)`,fontWeight:`var(--r-num-weight)`,fontVariantNumeric:`tabular-nums`},w={fontFamily:`var(--r-sans)`,fontSize:11,letterSpacing:`0.14em`,textTransform:`uppercase`,fontWeight:700,fill:`var(--r-mut)`},Be={fontFamily:`var(--r-sans)`,fontSize:12,fontWeight:600,letterSpacing:`0.02em`,fill:`var(--r-ink)`},T=(e,t,n,r)=>[e+n*Math.cos(r-Math.PI/2),t+n*Math.sin(r-Math.PI/2)],be.__docgenInfo={description:``,methods:[],displayName:`SunburstChart`,props:{nodes:{required:!0,tsType:{name:`Array`,elements:[{name:`Node`}],raw:`Node[]`},description:``},centerLabel:{required:!1,tsType:{name:`string`},description:``},centerValue:{required:!1,tsType:{name:`string`},description:``}}},xe.__docgenInfo={description:``,methods:[],displayName:`StreamGraph`,props:{series:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; values: number[] }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`values`,value:{name:`Array`,elements:[{name:`number`}],raw:`number[]`,required:!0}}]}}],raw:`{ label: string; values: number[] }[]`},description:``},periods:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``}}},Se.__docgenInfo={description:``,methods:[],displayName:`BeeswarmPlot`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; value: number; group?: string }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`number`,required:!0}},{key:`group`,value:{name:`string`,required:!1}}]}}],raw:`{ label: string; value: number; group?: string }[]`},description:``},axisLabel:{required:!1,tsType:{name:`string`},description:``}}},Ce.__docgenInfo={description:``,methods:[],displayName:`LollipopChart`,props:{rows:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; value: number }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`number`,required:!0}}]}}],raw:`{ label: string; value: number }[]`},description:``},suffix:{required:!1,tsType:{name:`string`},description:``}}},we.__docgenInfo={description:``,methods:[],displayName:`HeatMatrix`,props:{rows:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},cols:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},values:{required:!0,tsType:{name:`Array`,elements:[{name:`Array`,elements:[{name:`number`}],raw:`number[]`}],raw:`number[][]`},description:``},unit:{required:!1,tsType:{name:`string`},description:``}}},Te.__docgenInfo={description:``,methods:[],displayName:`CumulativeCurve`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; value: number }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`number`,required:!0}}]}}],raw:`{ label: string; value: number }[]`},description:``},note:{required:!1,tsType:{name:`string`},description:``}}},Ee.__docgenInfo={description:``,methods:[],displayName:`BracketLadder`,props:{brackets:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ rate: number; from: number; to: number }`,signature:{properties:[{key:`rate`,value:{name:`number`,required:!0}},{key:`from`,value:{name:`number`,required:!0}},{key:`to`,value:{name:`number`,required:!0}}]}}],raw:`{ rate: number; from: number; to: number }[]`},description:``},income:{required:!0,tsType:{name:`number`},description:``}}},De.__docgenInfo={description:``,methods:[],displayName:`NestedSquares`,props:{layers:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; value: number }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`number`,required:!0}}]}}],raw:`{ label: string; value: number }[]`},description:``},unitNote:{required:!1,tsType:{name:`string`},description:``}}},Oe.__docgenInfo={description:``,methods:[],displayName:`TornadoChart`,props:{rows:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; low: number; high: number }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`low`,value:{name:`number`,required:!0}},{key:`high`,value:{name:`number`,required:!0}}]}}],raw:`{ label: string; low: number; high: number }[]`},description:``},baseLabel:{required:!1,tsType:{name:`string`},description:``}}},ke.__docgenInfo={description:``,methods:[],displayName:`RadialTimeline`,props:{months:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},events:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ month: number; label: string; weight?: number }`,signature:{properties:[{key:`month`,value:{name:`number`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`weight`,value:{name:`number`,required:!1}}]}}],raw:`{ month: number; label: string; weight?: number }[]`},description:``},centerLabel:{required:!1,tsType:{name:`string`},description:``}}},Ae.__docgenInfo={description:``,methods:[],displayName:`ConnectedScatter`,props:{points:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; x: number; y: number }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`x`,value:{name:`number`,required:!0}},{key:`y`,value:{name:`number`,required:!0}}]}}],raw:`{ label: string; x: number; y: number }[]`},description:``},xLabel:{required:!0,tsType:{name:`string`},description:``},yLabel:{required:!0,tsType:{name:`string`},description:``},note:{required:!1,tsType:{name:`string`},description:``}}},je.__docgenInfo={description:``,methods:[],displayName:`QuadrantScatter`,props:{xBands:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`discrete effort bands along x, e.g. ["Low","Moderate","Involved","Advisor-led"]`},yGridlines:{required:!0,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:`dollar gridlines to draw + label along y, ascending`},xLabel:{required:!0,tsType:{name:`string`},description:``},yLabel:{required:!0,tsType:{name:`string`},description:``},points:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string;
  band: number;
  value: number;
  tone?: "accent" | "accent2" | "accent3" | "muted";
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`band`,value:{name:`number`,required:!0}},{key:`value`,value:{name:`number`,required:!0}},{key:`tone`,value:{name:`union`,raw:`"accent" | "accent2" | "accent3" | "muted"`,elements:[{name:`literal`,value:`"accent"`},{name:`literal`,value:`"accent2"`},{name:`literal`,value:`"accent3"`},{name:`literal`,value:`"muted"`}],required:!1}}]}}],raw:`{
  label: string;
  band: number;
  value: number;
  tone?: "accent" | "accent2" | "accent3" | "muted";
}[]`},description:``}}},Me.__docgenInfo={description:``,methods:[],displayName:`GlyphGrid`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; size: number; effort: number; urgent?: boolean; note?: string }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`size`,value:{name:`number`,required:!0}},{key:`effort`,value:{name:`number`,required:!0}},{key:`urgent`,value:{name:`boolean`,required:!1}},{key:`note`,value:{name:`string`,required:!1}}]}}],raw:`{ label: string; size: number; effort: number; urgent?: boolean; note?: string }[]`},description:``},legend:{required:!1,tsType:{name:`string`},description:``}}},Ne.__docgenInfo={description:``,methods:[],displayName:`MiniSunburstIcon`},Pe.__docgenInfo={description:``,methods:[],displayName:`MiniRibbonIcon`},Fe.__docgenInfo={description:``,methods:[],displayName:`MiniWaffleIcon`},Ie.__docgenInfo={description:``,methods:[],displayName:`MiniGlyphIcon`},Le.__docgenInfo={description:``,methods:[],displayName:`MiniArcCalendarIcon`},Re.__docgenInfo={description:``,methods:[],displayName:`MiniCascadeIcon`},ze.__docgenInfo={description:``,methods:[],displayName:`ChartLegend`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ icon: ReactNode; name: string; description: string }`,signature:{properties:[{key:`icon`,value:{name:`ReactNode`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!0}}]}}],raw:`{ icon: ReactNode; name: string; description: string }[]`},description:``}}}})))()}function He({nodes:e,links:t,caption:n}){let r=e.map((e,n)=>t.reduce((e,t)=>e+(t.from===n||t.to===n?t.value:0),0)),i=r.reduce((e,t)=>e+t,0)||1,a=.045,o=Math.PI*2-a*e.length,s=-Math.PI/2,c=e.map((e,t)=>{let n=s,c=s+r[t]/i*o;return s=c+a,{label:e,a0:n,a1:c,mid:(n+c)/2,i:t}}),u=c.map(e=>e.a0),d=(e,t)=>[380+Math.cos(e)*t,266+Math.sin(e)*t],f=t.map((e,t)=>{let n=e.value/i*o,r=u[e.from];u[e.from]=r+n;let a=u[e.to];u[e.to]=a+n;let[s,c]=d(r,164),[f,p]=d(r+n,164),[m,h]=d(a,164),[g,ee]=d(a+n,164);return{key:t,color:l[e.from%6],d:`M${s},${c}A164,164 0 0 1 ${f},${p}Q380,266 ${m},${h}A164,164 0 0 1 ${g},${ee}Q380,266 ${s},${c}Z`}}),p=(e,t,n,r)=>{let[i,a]=d(e,r),[o,s]=d(t,r),[c,l]=d(t,n),[u,f]=d(e,n);return`M${i},${a}A${r},${r} 0 0 1 ${o},${s}L${c},${l}A${n},${n} 0 0 0 ${u},${f}Z`};return(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`svg`,{viewBox:`0 0 760 520`,...j,role:`img`,"aria-label":`Chord diagram of transfers between entities`,children:[f.map(e=>(0,E.jsx)(`path`,{d:e.d,fill:e.color,fillOpacity:.4,stroke:e.color,strokeOpacity:.5,strokeWidth:.6},e.key)),c.map(e=>{let[t,n]=d(e.mid,200),i=Math.cos(e.mid)>-.05;return(0,E.jsxs)(`g`,{children:[(0,E.jsx)(`path`,{d:p(e.a0,e.a1,166,178),fill:l[e.i%6]}),(0,E.jsx)(`text`,{x:t,y:n,textAnchor:i?`start`:`end`,dominantBaseline:`middle`,style:A,children:e.label}),(0,E.jsx)(`text`,{x:t,y:n+15,textAnchor:i?`start`:`end`,dominantBaseline:`middle`,style:{...O,fontSize:11.5,fill:`var(--r-mut)`},children:D(r[e.i]/2)})]},e.label)})]}),n&&(0,E.jsx)(`p`,{className:`r-small mt-4`,children:n})]})}function Ue({rows:e,xLabels:t}){let n=e.length*62+68,r=Math.max(...e.flatMap(e=>e.values))||1;return(0,E.jsxs)(`svg`,{viewBox:`0 0 900 ${n}`,...j,role:`img`,"aria-label":`Ridgeline distributions by year`,children:[t.map((e,r)=>{let i=118+r/(t.length-1)*686;return(0,E.jsxs)(`g`,{children:[(0,E.jsx)(`line`,{x1:i,x2:i,y1:18,y2:n-46,stroke:`var(--r-line)`,strokeDasharray:`1 6`}),(0,E.jsx)(`text`,{x:i,y:n-24,textAnchor:`middle`,style:{...k,fontSize:10.5},children:e})]},e)}),e.map((e,t)=>{let n=30+t*62+62,i=e.values.map((t,i)=>[118+i/(e.values.length-1)*686,n-t/r*57.04]),a=`M118,${n}`+i.map(([e,t],n)=>{if(n===0)return`L${e},${t}`;let[r,a]=i[n-1],o=(r+e)/2;return`C${o},${a} ${o},${t} ${e},${t}`}).join(``)+`L804,${n}Z`,o=l[t%6];return(0,E.jsxs)(`g`,{children:[(0,E.jsx)(`path`,{d:a,fill:o,fillOpacity:.28,stroke:o,strokeWidth:1.6}),(0,E.jsx)(`text`,{x:102,y:n-4,textAnchor:`end`,style:A,children:e.label}),e.note&&(0,E.jsx)(`text`,{x:818,y:n-4,style:{...O,fontSize:12,fill:`var(--r-mut)`},children:e.note})]},e.label)}),(0,E.jsx)(`line`,{x1:118,x2:804,y1:n-46,y2:n-46,stroke:`var(--r-line)`})]})}function We({steps:e}){let t=e[0].value||1;return(0,E.jsx)(`div`,{className:`flex flex-col gap-2`,children:e.map((n,r)=>{let i=Math.max(14,n.value/t*100),a=r===0?null:e[r-1],o=a?a.value-n.value:0;return(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`div`,{className:`flex items-end justify-between gap-6`,children:[(0,E.jsx)(`span`,{style:A,className:`text-[12px] font-semibold`,children:n.label}),(0,E.jsx)(`span`,{className:`r-num`,style:{fontSize:17},children:D(n.value)})]}),(0,E.jsx)(`div`,{className:`mt-1.5`,style:{width:`${i}%`,height:26,background:`color-mix(in srgb, ${l[r%6]} ${72-r*6}%, var(--r-panel))`,borderRadius:`var(--r-radius)`,transition:`width .4s ease`}}),a&&(0,E.jsxs)(`p`,{className:`r-small mt-1`,style:{fontSize:12},children:[`−`,D(o),` ·`,` `,n.note??`${Math.round(o/a.value*100)}% removed at this step`]})]},n.label)})})}function Ge({root:e}){let n=292/3,r=e.children.reduce((e,t)=>e+t.value,0)||1,a=0;return(0,E.jsxs)(`svg`,{viewBox:`0 0 900 300`,...j,role:`img`,"aria-label":`Icicle partition of estate composition`,children:[(0,E.jsxs)(`g`,{children:[(0,E.jsx)(`rect`,{x:0,y:0,width:900,height:91.33333333333333,fill:`var(--r-accent)`,rx:2}),(0,E.jsx)(`text`,{x:14,y:n/2,dominantBaseline:`middle`,style:{...A,fill:`var(--r-accent-ink)`},children:e.label}),(0,E.jsx)(`text`,{x:886,y:n/2,textAnchor:`end`,dominantBaseline:`middle`,style:{...O,fontSize:14,fill:`var(--r-accent-ink)`},children:D(r)})]}),e.children.map((e,o)=>{let s=e.value/r*900,c=a;a+=s;let u=l[o%6],d=i[o%6],f=c;return(0,E.jsxs)(`g`,{children:[(0,E.jsx)(`rect`,{x:c+1,y:n,width:Math.max(0,s-2),height:91.33333333333333,fill:u,rx:2}),s>92&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`text`,{x:c+12,y:119.33333333333333,style:{...A,fontSize:11.5,fill:d},children:e.label}),(0,E.jsx)(`text`,{x:c+12,y:137.33333333333331,style:{...O,fontSize:13,fill:d},children:D(e.value)})]}),(e.children??[]).map((r,i)=>{let a=r.value/e.value*s,o=f;return f+=a,(0,E.jsxs)(`g`,{children:[(0,E.jsx)(`rect`,{x:o+1,y:n*2,width:Math.max(0,a-2),height:91.33333333333333,fill:t(u,26+i%3*9),rx:2}),a>44&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`text`,{x:o+10,y:214.66666666666666,style:{...A,fontSize:11},children:a>96?r.label:r.label.length>8?`${r.label.slice(0,7)}…`:r.label}),(0,E.jsx)(`text`,{x:o+10,y:231.66666666666666,style:{...O,fontSize:12,fill:`var(--r-ink)`},children:D(r.value)})]})]},r.label)})]},e.label)})]})}function Ke({rows:e}){return(0,E.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[e.map(e=>{let t=e.value/e.max*100,n=e.target/e.max*100,r=e.value>=e.target;return(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`div`,{className:`mb-1.5 flex items-baseline justify-between gap-4`,children:[(0,E.jsx)(`span`,{className:`text-[12px] font-semibold`,style:{color:`var(--r-ink)`},children:e.label}),(0,E.jsxs)(`span`,{className:`r-num`,style:{fontSize:15},children:[e.unit===`%`?`${e.value}%`:D(e.value),(0,E.jsxs)(`span`,{style:{color:`var(--r-mut)`,fontSize:12},children:[`  / `,e.unit===`%`?`${e.target}%`:D(e.target)]})]})]}),(0,E.jsxs)(`div`,{style:{position:`relative`,height:22,background:`color-mix(in srgb, var(--r-ink) 7%, transparent)`,borderRadius:`var(--r-radius)`},children:[(0,E.jsx)(`i`,{style:{position:`absolute`,inset:0,width:`62%`,background:`color-mix(in srgb, var(--r-ink) 5%, transparent)`,borderRadius:`var(--r-radius)`}}),(0,E.jsx)(`i`,{style:{position:`absolute`,top:6,bottom:6,left:0,width:`${Math.min(100,t)}%`,background:r?`var(--r-accent)`:`var(--r-accent-2)`,borderRadius:`var(--r-radius)`}}),(0,E.jsx)(`i`,{style:{position:`absolute`,top:0,bottom:0,left:`calc(${Math.min(100,n)}% - 1px)`,width:2,background:`var(--r-ink)`}})]})]},e.label)}),(0,E.jsx)(`p`,{className:`r-small`,style:{fontSize:12},children:`Bar is actual, tick is target, the pale band is the comfortable range.`})]})}function qe({items:e,caption:t}){let n=[...e].sort((e,t)=>e.value-t.value),r=40+(n.length-1)*28+22/2,i=Math.ceil(r*2+48),a=r+24,o=i/2,s=Math.max(...n.map(e=>e.value))||1,c=Math.PI*1.35,u=a+r+60;return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`svg`,{viewBox:`0 0 760 ${i}`,...j,role:`img`,"aria-label":`Radial bar chart of ranked magnitudes`,children:n.map((e,t)=>{let i=40+t*28,d=e.value/s,f=-Math.PI/2+d*c,p=a,m=o-i,h=a+Math.cos(f)*i,g=o+Math.sin(f)*i,ee=+(d*1.35>1),_=l[(n.length-1-t)%6],v=o-r+14+(n.length-1-t)*30;return(0,E.jsxs)(`g`,{children:[(0,E.jsx)(`circle`,{cx:a,cy:o,r:i,fill:`none`,stroke:`var(--r-ink)`,strokeOpacity:.07,strokeWidth:22}),(0,E.jsx)(`path`,{d:`M${p},${m}A${i},${i} 0 ${ee} 1 ${h},${g}`,fill:`none`,stroke:_,strokeWidth:22,strokeLinecap:`butt`}),(0,E.jsx)(`circle`,{cx:h,cy:g,r:2.6,fill:`var(--r-paper)`}),(0,E.jsx)(`rect`,{x:u,y:v-9,width:9,height:9,rx:1.5,fill:_}),(0,E.jsx)(`text`,{x:u+18,y:v,style:{...A,fontSize:12},children:e.label}),(0,E.jsx)(`text`,{x:740,y:v,textAnchor:`end`,style:{...O,fontSize:13,fill:`var(--r-mut)`},children:D(e.value)})]},e.label)})}),t&&(0,E.jsx)(`p`,{className:`r-small mt-3`,children:t})]})}function Je({years:e,base:t,bands:n,yLabel:r}){let i=Math.max(...t.map((e,t)=>e+Math.max(...n.map(e=>e.spread[t]??0)))),a=Math.min(...t.map((e,t)=>e-Math.max(...n.map(e=>e.spread[t]??0)))),o=t=>86+t/(e.length-1)*718,s=e=>328-(e-a)/(i-a||1)*298,c=e=>{let n=t.map((t,n)=>`${o(n)},${s(t+(e[n]??0))}`),r=t.map((e,t)=>({i:t,b:e})).reverse().map(({i:t,b:n})=>`${o(t)},${s(n-(e[t]??0))}`);return`M${n.join(`L`)}L${r.join(`L`)}Z`};return(0,E.jsxs)(`svg`,{viewBox:`0 0 900 380`,...j,role:`img`,"aria-label":`Projection fan with uncertainty bands`,children:[[0,.5,1].map(e=>{let t=a+(i-a)*e;return(0,E.jsxs)(`g`,{children:[(0,E.jsx)(`line`,{x1:86,x2:804,y1:s(t),y2:s(t),stroke:`var(--r-line)`,strokeDasharray:`1 6`}),(0,E.jsx)(`text`,{x:72,y:s(t)+4,textAnchor:`end`,style:{...O,fontSize:11.5,fill:`var(--r-mut)`},children:D(t)})]},e)}),n.map((e,t)=>(0,E.jsx)(`path`,{d:c(e.spread),fill:`var(--r-accent)`,fillOpacity:e.opacity??.16-t*.05},t)),(0,E.jsx)(`path`,{d:`M${t.map((e,t)=>`${o(t)},${s(e)}`).join(`L`)}`,fill:`none`,stroke:`var(--r-accent)`,strokeWidth:2.4}),t.map((e,n)=>(0,E.jsx)(`circle`,{cx:o(n),cy:s(e),r:n===t.length-1?6:3.6,fill:`var(--r-accent)`},n)),(0,E.jsx)(`text`,{x:o(t.length-1)+14,y:s(t[t.length-1])+4,style:{...O,fontSize:14,fill:`var(--r-ink)`},children:D(t[t.length-1])}),e.map((e,t)=>(0,E.jsx)(`text`,{x:o(t),y:350,textAnchor:`middle`,style:{...k,fontSize:10.5},children:e},e)),(0,E.jsx)(`line`,{x1:86,x2:804,y1:328,y2:328,stroke:`var(--r-line)`}),r&&(0,E.jsx)(`text`,{x:86,y:18,style:k,children:r})]})}function Ye({bins:e,unitLabel:t,caption:n}){let r=Math.max(...e.map(e=>Math.ceil(e.count/6))),i=780/e.length;return(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`svg`,{viewBox:`0 0 900 168`,...j,role:`img`,"aria-label":`Unit histogram, one dot per ${t}`,children:[e.map((e,t)=>{let n=Math.ceil(e.count/6),r=60+t*i+(i-n*15)/2,a=e.highlight?`var(--r-accent)`:l[(t+2)%6];return(0,E.jsxs)(`g`,{children:[Array.from({length:e.count},(t,n)=>{let i=Math.floor(n/6),o=n%6;return(0,E.jsx)(`circle`,{cx:r+i*15+11/2,cy:90-o*15-11/2+12,r:11/2,fill:a,fillOpacity:e.highlight?1:.68},n)}),(0,E.jsx)(`text`,{x:60+t*i+i/2,y:124,textAnchor:`middle`,style:{...k,fontSize:10.5},children:e.label}),(0,E.jsx)(`text`,{x:60+t*i+i/2,y:144,textAnchor:`middle`,style:{...O,fontSize:13,fill:e.highlight?`var(--r-accent)`:`var(--r-mut)`},children:e.count})]},e.label)}),(0,E.jsx)(`line`,{x1:40,x2:870,y1:108,y2:108,stroke:`var(--r-line)`}),(0,E.jsx)(`text`,{x:40,y:14,style:k,children:`1 dot = 1 ${t}`}),r>0&&null]}),n&&(0,E.jsx)(`p`,{className:`r-small mt-3`,children:n})]})}function Xe({axes:e,series:t}){let n=t=>70+t/(e.length-1)*680,r=(t,n)=>{let r=e[t];return 322-(n-r.min)/(r.max-r.min||1)*276},i=e.length-1,a=[...t.map((e,t)=>({si:t,y:r(i,e.values[i])}))].sort((e,t)=>e.y-t.y);for(let e=1;e<a.length;e++){let t=a[e-1],n=a[e];n.y-t.y<17&&(n.y=t.y+17)}let o=[];return a.forEach(e=>{o[e.si]=e.y}),(0,E.jsxs)(`svg`,{viewBox:`0 0 900 380`,...j,role:`img`,"aria-label":`Parallel coordinates comparing strategies across measures`,children:[e.map((e,t)=>(0,E.jsxs)(`g`,{children:[(0,E.jsx)(`line`,{x1:n(t),x2:n(t),y1:46,y2:322,stroke:`var(--r-line)`}),(0,E.jsx)(`text`,{x:n(t),y:24,textAnchor:`middle`,style:{...k,fontSize:10.5},children:e.label}),(0,E.jsx)(`text`,{x:n(t),y:40,textAnchor:`middle`,style:{...O,fontSize:11,fill:`var(--r-mut)`},children:(e.format??(e=>`${e}`))(e.max)}),(0,E.jsx)(`text`,{x:n(t),y:340,textAnchor:`middle`,style:{...O,fontSize:11,fill:`var(--r-mut)`},children:(e.format??(e=>`${e}`))(e.min)})]},e.label)),t.map((e,t)=>{let a=e.emphasize?`var(--r-accent)`:l[(t+1)%6],s=`M${e.values.map((e,t)=>`${n(t)},${r(t,e)}`).join(`L`)}`;return(0,E.jsxs)(`g`,{children:[(0,E.jsx)(`path`,{d:s,fill:`none`,stroke:a,strokeWidth:e.emphasize?3:1.6,strokeOpacity:e.emphasize?1:.55}),e.values.map((t,i)=>(0,E.jsx)(`circle`,{cx:n(i),cy:r(i,t),r:e.emphasize?4.5:3,fill:a},i)),(0,E.jsx)(`path`,{d:`M${n(i)+5},${r(i,e.values[i])}L${n(i)+11},${o[t]}`,stroke:a,strokeOpacity:.5,strokeWidth:1,fill:`none`}),(0,E.jsx)(`text`,{x:n(i)+15,y:o[t]+4,style:{...A,fontSize:12,fill:e.emphasize?`var(--r-accent)`:`var(--r-mut)`},children:e.label})]},e.label)})]})}function Ze({weeks:e,months:t,caption:n}){let r=Math.max(1,t.length),i=Math.ceil(e.length/r),a=`repeat(${r}, minmax(0, 1fr))`,o=Array.from({length:i},(e,t)=>t);return(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`div`,{role:`img`,"aria-label":`Week-by-week planning intensity across the year`,children:[o.map(t=>(0,E.jsx)(`div`,{className:`grid gap-1.5`,style:{gridTemplateColumns:a,marginBottom:6},children:Array.from({length:r},(n,r)=>{let a=e[r*i+t],o=a?.intensity??0;return(0,E.jsx)(`div`,{title:a?.note,style:{aspectRatio:`1 / 1`,borderRadius:3,background:o===0?`color-mix(in srgb, var(--r-ink) 7%, var(--r-paper))`:`color-mix(in srgb, var(--r-accent) ${Math.round(22+o*78)}%, var(--r-paper))`}},r)})},t)),(0,E.jsx)(`div`,{className:`r-rule`,style:{marginTop:12}}),(0,E.jsx)(`div`,{className:`grid gap-1.5`,style:{gridTemplateColumns:a,marginTop:10},children:t.map(e=>(0,E.jsx)(`span`,{className:`text-center`,style:{fontFamily:`var(--r-sans)`,fontSize:10.5,fontWeight:700,letterSpacing:`0.08em`,textTransform:`uppercase`,color:`var(--r-mut)`},children:e.slice(0,3)},e))})]}),n&&(0,E.jsx)(`p`,{className:`r-small mt-4`,children:n})]})}function Qe({roles:e,rows:t,legend:n}){let r=e=>e===`a`?`var(--r-accent)`:e===`b`?`var(--r-accent-2)`:e===`corporate`?`var(--r-accent-3)`:`var(--r-c5)`;return(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`div`,{className:`grid gap-3.5 pb-2.5`,style:{gridTemplateColumns:`210px repeat(${e.length}, 1fr)`,borderBottom:`1px solid var(--r-line)`},children:[(0,E.jsx)(`span`,{}),e.map(e=>(0,E.jsx)(`span`,{style:k,children:e},e))]}),t.map(t=>(0,E.jsxs)(`div`,{className:`grid items-center gap-3.5 py-2.5`,style:{gridTemplateColumns:`210px repeat(${e.length}, 1fr)`,borderBottom:`1px solid var(--r-line)`},children:[(0,E.jsx)(`span`,{className:`r-small`,style:{fontSize:14,fontWeight:600,color:`var(--r-ink)`},children:t.entity}),e.map((e,n)=>{let i=t.holders[n];return(0,E.jsx)(`span`,{title:i?.name??`Not named`,children:i?(0,E.jsx)(`span`,{style:{display:`inline-block`,width:20,height:20,borderRadius:`50%`,background:r(i.tone)}}):(0,E.jsx)(`span`,{style:{display:`inline-block`,width:20,height:20,borderRadius:`50%`,border:`1.5px dashed var(--r-line)`}})},e)})]},t.entity)),(0,E.jsx)(`div`,{className:`mt-4 flex flex-wrap gap-5`,children:n.map(e=>(0,E.jsxs)(`span`,{className:`r-small`,style:{fontSize:12},children:[(0,E.jsx)(`span`,{style:{display:`inline-block`,width:10,height:10,borderRadius:`50%`,background:r(e.tone),marginRight:6}}),e.label]},e.label))})]})}function $e({center:e,ring1:t,ring2:n}){let r=e.map((t,n)=>({...t,x:320+(n-(e.length-1)/2)*90,y:280})),i=t.map((e,n)=>{let r=n/t.length*Math.PI-Math.PI;return{...e,x:320+Math.cos(r)*150,y:280+Math.sin(r)*150}}),a=n.map((e,t)=>{let r=t/n.length*Math.PI-Math.PI;return{...e,x:320+Math.cos(r)*260,y:280+Math.sin(r)*260}});return(0,E.jsxs)(`svg`,{viewBox:`0 0 640 396.8`,style:{width:`100%`,height:`auto`,overflow:`visible`},children:[(0,E.jsx)(`path`,{d:`M 170 280 A 150 150 0 0 1 470 280`,fill:`none`,stroke:`var(--r-line)`}),(0,E.jsx)(`path`,{d:`M 60 280 A 260 260 0 0 1 580 280`,fill:`none`,stroke:`var(--r-line)`}),i.map(e=>(0,E.jsx)(`line`,{x1:r[e.parent].x,y1:r[e.parent].y,x2:e.x,y2:e.y,stroke:`var(--r-line)`},`l1-${e.label}`)),a.map(e=>{let t=i[e.parent];return(0,E.jsx)(`line`,{x1:t.x,y1:t.y,x2:e.x,y2:e.y,stroke:`var(--r-line)`},`l2-${e.label}`)}),r.map(e=>(0,E.jsxs)(`g`,{children:[(0,E.jsx)(`circle`,{cx:e.x,cy:e.y,r:11,fill:`var(--r-accent)`}),(0,E.jsx)(`text`,{x:e.x,y:e.y-20,textAnchor:`middle`,style:{...A,fontSize:13},children:e.label})]},e.label)),i.map(e=>(0,E.jsxs)(`g`,{children:[(0,E.jsx)(`circle`,{cx:e.x,cy:e.y,r:8,fill:`var(--r-accent-2)`}),(0,E.jsx)(`text`,{x:e.x,y:e.y-16,textAnchor:`middle`,style:{...A,fontSize:13},children:e.label})]},e.label)),a.map(e=>(0,E.jsxs)(`g`,{children:[(0,E.jsx)(`circle`,{cx:e.x,cy:e.y,r:6,fill:`var(--r-accent-3)`}),(0,E.jsx)(`text`,{x:e.x,y:e.y-13,textAnchor:e.x>330?`start`:e.x<310?`end`:`middle`,style:{...A,fontSize:12},children:e.label})]},e.label)),(0,E.jsx)(`text`,{x:320,y:320,textAnchor:`middle`,style:k,children:`THREE GENERATIONS`})]})}function et({items:e}){return(0,E.jsx)(`div`,{className:`grid gap-2.5`,style:{gridTemplateColumns:`repeat(5, 1fr)`},children:e.map(e=>(0,E.jsxs)(`div`,{className:`flex flex-col justify-between`,style:{minHeight:108,borderRadius:3,padding:`14px 13px`,background:e.status===`collected`?`color-mix(in srgb, var(--r-accent-2) 16%, var(--r-paper))`:`transparent`,border:e.status===`collected`?`1px solid color-mix(in srgb, var(--r-accent-2) 45%, var(--r-paper))`:`1px dashed var(--r-accent-3)`},children:[(0,E.jsx)(`span`,{style:{...k,fontSize:10,color:e.status===`collected`?`var(--r-accent-2)`:`var(--r-accent-3)`},children:e.status===`collected`?`Collected`:`Outstanding`}),(0,E.jsx)(`span`,{style:{fontFamily:`var(--r-sans)`,fontSize:13.5,fontWeight:600,lineHeight:1.25,color:`var(--r-ink)`},children:e.label})]},e.label))})}var E,D,O,k,A,j;function tt(){return(tt=ve((()=>{r(),E=e(),D=e=>Math.abs(e)>=1e6?`$${(e/1e6).toFixed(Math.abs(e)>=1e7?1:2)}M`:Math.abs(e)>=1e3?`$${(e/1e3).toFixed(Math.abs(e)>=1e4?0:1)}k`:`$${Math.round(e).toLocaleString()}`,O={fontFamily:`var(--r-num)`,fontWeight:`var(--r-num-weight)`,fontVariantNumeric:`tabular-nums`},k={fontFamily:`var(--r-sans)`,fontSize:11,letterSpacing:`0.14em`,textTransform:`uppercase`,fontWeight:700,fill:`var(--r-mut)`},A={fontFamily:`var(--r-sans)`,fontSize:12,fontWeight:600,letterSpacing:`0.02em`,fill:`var(--r-ink)`},j={style:{width:`100%`,height:`auto`,overflow:`visible`}},He.__docgenInfo={description:``,methods:[],displayName:`ChordDiagram`,props:{nodes:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},links:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ from: number; to: number; value: number }`,signature:{properties:[{key:`from`,value:{name:`number`,required:!0}},{key:`to`,value:{name:`number`,required:!0}},{key:`value`,value:{name:`number`,required:!0}}]}}],raw:`{ from: number; to: number; value: number }[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}},Ue.__docgenInfo={description:``,methods:[],displayName:`RidgeLines`,props:{rows:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; values: number[]; note?: string }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`values`,value:{name:`Array`,elements:[{name:`number`}],raw:`number[]`,required:!0}},{key:`note`,value:{name:`string`,required:!1}}]}}],raw:`{ label: string; values: number[]; note?: string }[]`},description:``},xLabels:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``}}},We.__docgenInfo={description:``,methods:[],displayName:`StepFunnel`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; value: number; note?: string }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`number`,required:!0}},{key:`note`,value:{name:`string`,required:!1}}]}}],raw:`{ label: string; value: number; note?: string }[]`},description:``}}},Ge.__docgenInfo={description:``,methods:[],displayName:`IcicleTree`,props:{root:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
  label: string;
  children: { label: string; value: number; children?: { label: string; value: number }[] }[];
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`children`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; value: number; children?: { label: string; value: number }[] }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`number`,required:!0}},{key:`children`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; value: number }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`number`,required:!0}}]}}],raw:`{ label: string; value: number }[]`,required:!1}}]}}],raw:`{ label: string; value: number; children?: { label: string; value: number }[] }[]`,required:!0}}]}},description:``}}},Ke.__docgenInfo={description:``,methods:[],displayName:`BulletBars`,props:{rows:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; value: number; target: number; max: number; unit?: string }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`number`,required:!0}},{key:`target`,value:{name:`number`,required:!0}},{key:`max`,value:{name:`number`,required:!0}},{key:`unit`,value:{name:`string`,required:!1}}]}}],raw:`{ label: string; value: number; target: number; max: number; unit?: string }[]`},description:``}}},qe.__docgenInfo={description:``,methods:[],displayName:`RadialBars`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; value: number }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`number`,required:!0}}]}}],raw:`{ label: string; value: number }[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}},Je.__docgenInfo={description:``,methods:[],displayName:`FanProjection`,props:{years:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},base:{required:!0,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:``},bands:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ spread: number[]; opacity?: number }`,signature:{properties:[{key:`spread`,value:{name:`Array`,elements:[{name:`number`}],raw:`number[]`,required:!0}},{key:`opacity`,value:{name:`number`,required:!1}}]}}],raw:`{ spread: number[]; opacity?: number }[]`},description:``},yLabel:{required:!1,tsType:{name:`string`},description:``}}},Ye.__docgenInfo={description:``,methods:[],displayName:`DotHistogram`,props:{bins:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; count: number; highlight?: boolean }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`count`,value:{name:`number`,required:!0}},{key:`highlight`,value:{name:`boolean`,required:!1}}]}}],raw:`{ label: string; count: number; highlight?: boolean }[]`},description:``},unitLabel:{required:!0,tsType:{name:`string`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}},Xe.__docgenInfo={description:``,methods:[],displayName:`ParallelCoordinates`,props:{axes:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; min: number; max: number; format?: (n: number) => string }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`min`,value:{name:`number`,required:!0}},{key:`max`,value:{name:`number`,required:!0}},{key:`format`,value:{name:`signature`,type:`function`,raw:`(n: number) => string`,signature:{arguments:[{type:{name:`number`},name:`n`}],return:{name:`string`}},required:!1}}]}}],raw:`{ label: string; min: number; max: number; format?: (n: number) => string }[]`},description:``},series:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; values: number[]; emphasize?: boolean }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`values`,value:{name:`Array`,elements:[{name:`number`}],raw:`number[]`,required:!0}},{key:`emphasize`,value:{name:`boolean`,required:!1}}]}}],raw:`{ label: string; values: number[]; emphasize?: boolean }[]`},description:``}}},Ze.__docgenInfo={description:``,methods:[],displayName:`YearStrip`,props:{weeks:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ intensity: number; note?: string }`,signature:{properties:[{key:`intensity`,value:{name:`number`,required:!0}},{key:`note`,value:{name:`string`,required:!1}}]}}],raw:`{ intensity: number; note?: string }[]`},description:``},months:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}},Qe.__docgenInfo={description:``,methods:[],displayName:`FiduciaryMatrix`,props:{roles:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},rows:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ entity: string; holders: (FiduciaryHolder | null)[] }`,signature:{properties:[{key:`entity`,value:{name:`string`,required:!0}},{key:`holders`,value:{name:`Array`,elements:[{name:`unknown`}],raw:`(FiduciaryHolder | null)[]`,required:!0}}]}}],raw:`{ entity: string; holders: (FiduciaryHolder | null)[] }[]`},description:``},legend:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ tone: FiduciaryHolder["tone"]; label: string }`,signature:{properties:[{key:`tone`,value:{name:`FiduciaryHolder["tone"]`,raw:`FiduciaryHolder["tone"]`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}],raw:`{ tone: FiduciaryHolder["tone"]; label: string }[]`},description:``}}},$e.__docgenInfo={description:``,methods:[],displayName:`RadialGenogram`,props:{center:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; sublabel: string }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`sublabel`,value:{name:`string`,required:!0}}]}}],raw:`{ label: string; sublabel: string }[]`},description:``},ring1:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; parent: number }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`parent`,value:{name:`number`,required:!0}}]}}],raw:`{ label: string; parent: number }[]`},description:``},ring2:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; parent: number }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`parent`,value:{name:`number`,required:!0}}]}}],raw:`{ label: string; parent: number }[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}},et.__docgenInfo={description:``,methods:[],displayName:`DocumentRegister`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; status: "collected" | "outstanding" }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`status`,value:{name:`union`,raw:`"collected" | "outstanding"`,elements:[{name:`literal`,value:`"collected"`},{name:`literal`,value:`"outstanding"`}],required:!0}}]}}],raw:`{ label: string; status: "collected" | "outstanding" }[]`},description:``}}}})))()}var M,nt,N,rt,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Q,Ot,kt,At,jt,Mt,Nt,Pt,$,Ft;function It(){return(It=ve((()=>{s(),r(),me(),fe(),Ve(),tt(),p(),he(),h(),M=e(),nt={title:`Report Design System/04 Visualizations`,parameters:{layout:`padded`}},N={render:()=>(0,M.jsx)(o,{n:`01`,name:`Waffle`,use:`Composition as countable units. Reads as a share without a percentage label.`,children:(0,M.jsx)(ee,{parts:m,unitNote:`100 units = $357,880 of total income. Each unit ≈ $3,579.`})})},rt={name:`Proportion band`,render:()=>(0,M.jsx)(o,{n:`02`,name:`Proportion band`,use:`The compact version — one line, inline legend. Use when the slide already has a figure.`,children:(0,M.jsx)(ae,{parts:m})})},P={render:()=>(0,M.jsx)(o,{n:`03`,name:`Waterfall`,use:`How a headline number is built. Ideal for income → adjustments → taxable → tax.`,children:(0,M.jsx)(pe,{items:[{label:`W-2 wages`,value:212400},{label:`Schedule C`,value:78200},{label:`Investment`,value:58080},{label:`Rental`,value:9200},{label:`Adjustments`,value:-29300},{label:`Taxable income`,value:328580,kind:`total`}]})})},F={render:()=>(0,M.jsx)(o,{n:`04`,name:`Bullet`,use:`Actual against a cap or target. The honest way to show a SALT ceiling.`,children:(0,M.jsx)(te,{rows:[{label:`State & local tax`,value:55150,target:1e4,max:6e4,note:`Marker = $10,000 cap. $45,150 paid above it.`},{label:`Solo 401(k) deferral`,value:14500,target:24500,max:3e4,note:`Marker = 2026 employee limit.`},{label:`HSA (family)`,value:8750,target:8750,max:1e4,note:`Fully funded to the 2026 limit.`}]})})},I={render:()=>(0,M.jsx)(o,{n:`05`,name:`Dumbbell`,use:`Filed year versus planned year, line by line. Replaces side-by-side bars.`,children:(0,M.jsx)(ne,{aLabel:`2025 filed`,bLabel:`2026 projected`,rows:[{label:`Federal tax`,a:51505,b:43120},{label:`CA tax`,a:24800,b:21400},{label:`Retirement deferral`,a:14500,b:24500},{label:`Itemized deductions`,a:50400,b:61300}]})})},L={render:()=>(0,M.jsx)(o,{n:`06`,name:`Slope`,use:`Before and after, four lines maximum. The savings story in one gesture.`,children:(0,M.jsx)(y,{fromLabel:`Without planning`,toLabel:`With planning`,series:[{label:`Federal`,from:51505,to:43120},{label:`State`,from:24800,to:21400},{label:`Payroll`,from:18900,to:17650}]})})},R={render:()=>(0,M.jsx)(o,{n:`07`,name:`Marimekko`,use:`Two dimensions at once — entity size across the x-axis, internal mix down the y.`,children:(0,M.jsx)(ce,{columns:[{label:`Operating business`,weight:41,parts:[{label:`Voting`,value:28},{label:`Non-voting`,value:72}]},{label:`Securities`,weight:23,parts:[{label:`Taxable`,value:61},{label:`Deferred`,value:39}]},{label:`Real property`,weight:15,parts:[{label:`Encumbered`,value:44},{label:`Free & clear`,value:56}]},{label:`Other`,weight:12,parts:[{label:`Insurance`,value:66},{label:`Personal`,value:34}]}]})})},z={name:`Radial gauge`,render:()=>(0,M.jsx)(o,{n:`08`,name:`Radial gauge`,use:`A single share, stated once. Never more than one per slide.`,children:(0,M.jsx)(re,{pct:38,value:`$49.8M`,caption:`Share of the taxable estate exposed above the combined 2026 exemption.`})})},B={render:()=>(0,M.jsx)(o,{n:`09`,name:`Sankey ribbons`,use:`Where the money goes. The distribution slide, upgraded from boxes.`,dos:[`One-directional flow from a single total`,`Three to seven destinations`],donts:[`Mutual flows — use ChordDiagram`,`Destinations under 2% of the total; group them`],code:`<SankeyFlow total={{ label: "Gross estate", value: 491800000 }} targets={targets} />`,children:(0,M.jsx)(se,{source:{label:`Doe Family Trust`,value:624e5},targets:[{label:`Marital share`,value:312e5},{label:`Children, per stirpes`,value:187e5},{label:`Grandchildren (GST)`,value:83e5},{label:`Charitable remainder`,value:42e5}]})})},V={render:()=>(0,M.jsx)(o,{n:`10`,name:`Treemap`,use:`Nested magnitudes at a glance. Best for estate composition with six or fewer classes.`,children:(0,M.jsx)(ie,{items:g})})},H={render:()=>(0,M.jsx)(o,{n:`11`,name:`Orbit rings`,use:`Structure around a center — entities held by a trust, sized by value.`,children:(0,M.jsxs)(`div`,{className:`grid items-center gap-10 md:grid-cols-[auto_1fr]`,children:[(0,M.jsx)(_,{center:{label:`Taxable estate`,value:`$131.1M`},nodes:[{label:`Holdco LLC`,value:41},{label:`Brokerage`,value:23},{label:`Ranch LP`,value:15},{label:`IRA / 401(k)`,value:6},{label:`ILIT`,value:4,ring:2},{label:`GRAT I`,value:9,ring:2},{label:`GRAT II`,value:9,ring:2},{label:`DAF`,value:3,ring:2}]}),(0,M.jsx)(n,{className:`max-w-[46ch]`,children:`Inner ring holds directly-owned assets; outer ring holds irrevocable structures. Node area encodes value, so the reader sees concentration before reading a single label.`})]})})},U={name:`Arc diagram`,render:()=>(0,M.jsx)(o,{n:`12`,name:`Arc diagram`,use:`Relationships without a hairball — trustees, beneficiaries and powers on one spine.`,children:(0,M.jsx)(de,{nodes:[`John`,`Jane`,`RLT`,`ILIT`,`GRAT I`,`GRAT II`,`Child A`,`Child B`,`Child C`],links:[[0,2],[1,2],[2,6],[2,7],[2,8],[0,3],[3,6],[1,4],[0,5]]})})},W={name:`Bubble field`,render:()=>(0,M.jsx)(o,{n:`13`,name:`Bubble field`,use:`Magnitude comparison with no axes. Good for opportunity sizing.`,children:(0,M.jsx)(oe,{items:[{label:`Solo 401(k)`,value:4180},{label:`CA PTE election`,value:2950},{label:`Backdoor Roth`,value:1100},{label:`HSA top-up`,value:890},{label:`DAF bunching`,value:650}]})})},G={render:()=>(0,M.jsx)(o,{n:`14`,name:`Isotype`,use:`Countable marks for figures a client should feel, not just read.`,children:(0,M.jsx)(le,{unit:500,unitLabel:`$500 of projected annual savings`,items:[{label:`Solo 401(k)`,value:4180},{label:`CA PTE election`,value:2950},{label:`Backdoor Roth`,value:1100},{label:`HSA top-up`,value:890}]})})},K={name:`Spark grid`,render:()=>(0,M.jsx)(o,{n:`15`,name:`Spark grid`,use:`Small multiples. Five years of history per line item, without five charts.`,children:(0,M.jsx)(ue,{series:[{label:`W-2 wages`,values:[168,179,191,203,212],last:`$212.4k`},{label:`Schedule C`,values:[41,52,60,71,78],last:`$78.2k`},{label:`Capital gains`,values:[12,48,22,31,39],last:`$39.1k`},{label:`Effective rate`,values:[16.9,16.1,15.4,14.9,14.4],last:`14.4%`},{label:`Deductions`,values:[38,41,44,47,50],last:`$50.4k`},{label:`Estate value`,values:[96,104,113,122,131],last:`$131.1M`}]})})},q={name:`Timeline spine`,render:()=>(0,M.jsx)(o,{n:`16`,name:`Timeline spine`,use:`Sequencing and deadlines. Filled dots are already done.`,children:(0,M.jsx)(v,{items:[{period:`Q3 2026 · now`,title:`Open Solo 401(k)`,note:`Plan document by Sept 30.`,done:!0},{period:`Q4 2026`,title:`Fund deferral`,note:`$24,500 employee limit by Dec 31.`},{period:`Q1 2027`,title:`File 2026 return`,note:`Confirm PTE credit lands.`},{period:`Q2 2027`,title:`PTE prepayment`,note:`June 15 for the 2027 election.`}]})})},J={render:()=>(0,M.jsx)(o,{n:`17`,name:`Sunburst`,use:`A hierarchy read middle-out — income category on the inner ring, source on the outer.`,wide:!0,children:(0,M.jsx)(be,{centerLabel:`Total income`,centerValue:`$357.9k`,nodes:[{label:`W-2 wages`,value:212400,children:[{label:`Base`,value:168e3},{label:`Bonus`,value:32400},{label:`RSU vest`,value:12e3}]},{label:`Schedule C`,value:78200,children:[{label:`Consulting`,value:58200},{label:`Royalties`,value:2e4}]},{label:`Capital gains`,value:39100,children:[{label:`Long-term`,value:31100},{label:`Short-term`,value:8e3}]},{label:`Dividends & interest`,value:18980,children:[{label:`Qualified`,value:13980},{label:`Ordinary`,value:5e3}]},{label:`Rental`,value:9200,children:[{label:`Net rents`,value:9200}]}]})})},Y={name:`Stream graph`,render:()=>(0,M.jsx)(o,{n:`18`,name:`Stream graph`,use:`Composition over time when the total also moves. Five years of income mix.`,wide:!0,children:(0,M.jsx)(xe,{periods:[`2022`,`2023`,`2024`,`2025`,`2026e`],series:[{label:`W-2 wages`,values:[168,179,191,203,212]},{label:`Schedule C`,values:[41,52,60,71,78]},{label:`Capital gains`,values:[12,48,22,31,39]},{label:`Dividends`,values:[11,13,15,17,19]},{label:`Rental`,values:[6,7,8,9,9]}]})})},X={render:()=>(0,M.jsx)(o,{n:`19`,name:`Beeswarm`,use:`Every opportunity on one axis, nothing pooled away. Colour carries the owner.`,wide:!0,children:(0,M.jsx)(Se,{axisLabel:`Projected first-year savings, left to right`,items:[{label:`Solo 401(k)`,value:4180,group:`Retirement`},{label:`CA PTE`,value:2950,group:`State`},{label:`Backdoor Roth`,value:1100,group:`Retirement`},{label:`HSA top-up`,value:890,group:`Health`},{label:`DAF bunching`,value:650,group:`Charitable`},{label:`QCD`,value:420,group:`Charitable`},{label:`Loss harvest`,value:380,group:`Investment`},{label:`529 state credit`,value:240,group:`State`}]})})},Z={render:()=>(0,M.jsx)(o,{n:`20`,name:`Lollipop`,use:`Ranked magnitudes with less ink than bars. The leader takes the accent.`,children:(0,M.jsx)(Ce,{rows:[{label:`Solo 401(k)`,value:4180},{label:`CA PTE election`,value:2950},{label:`Backdoor Roth`,value:1100},{label:`HSA top-up`,value:890},{label:`DAF bunching`,value:650}]})})},it={name:`Heat matrix`,render:()=>(0,M.jsx)(o,{n:`21`,name:`Heat matrix`,use:`Two categorical axes with one intensity — deduction type by quarter.`,wide:!0,children:(0,M.jsx)(we,{unit:`Cells show dollars of deductible spend booked in each quarter.`,rows:[`Charitable`,`SALT`,`Mortgage interest`,`Medical`],cols:[`Q1`,`Q2`,`Q3`,`Q4`],values:[[1200,900,400,18400],[13800,13800,13800,13750],[5100,5050,5e3,4950],[0,2400,800,1100]]})})},at={name:`Cumulative curve`,render:()=>(0,M.jsx)(o,{n:`22`,name:`Cumulative curve`,use:`Concentration against an even split. Shows how few holdings carry the estate.`,children:(0,M.jsx)(Te,{items:g,note:`The dashed diagonal is a perfectly even estate. Distance from it is concentration risk.`})})},ot={name:`Bracket ladder`,render:()=>(0,M.jsx)(o,{n:`23`,name:`Bracket ladder`,use:`Marginal brackets with the client's income poured in. Widths are real.`,wide:!0,children:(0,M.jsx)(Ee,{income:328580,brackets:[{rate:10,from:0,to:23850},{rate:12,from:23850,to:96950},{rate:22,from:96950,to:206700},{rate:24,from:206700,to:394600},{rate:32,from:394600,to:501050},{rate:35,from:501050,to:751600},{rate:37,from:751600,to:1e6}]})})},st={name:`Nested squares`,render:()=>(0,M.jsx)(o,{n:`24`,name:`Nested squares`,use:`Tufte-style nesting — exemption inside the estate, sized by area not length.`,children:(0,M.jsx)(De,{unitNote:`Area, not width, encodes value — the exposed slice is the visible remainder.`,layers:[{label:`Gross estate`,value:1311e5},{label:`Combined exemption`,value:3e7},{label:`Illiquid share`,value:558e5},{label:`Projected federal tax`,value:4044e4}]})})},ct={render:()=>(0,M.jsx)(o,{n:`25`,name:`Tornado`,use:`Sensitivity around a base case. Downside left, upside right, ranked by span.`,wide:!0,children:(0,M.jsx)(Oe,{baseLabel:`2026 projected tax · $43,120`,rows:[{label:`Schedule C profit ±20%`,low:-5200,high:5600},{label:`Capital gains realisation`,low:-3100,high:4400},{label:`PTE election timing`,low:-2950,high:0},{label:`Deferral funded in full`,low:-4180,high:900}]})})},lt={name:`Radial timeline`,render:()=>(0,M.jsx)(o,{n:`26`,name:`Radial timeline`,use:`Twelve months on a dial. Spoke length carries urgency, not just position.`,children:(0,M.jsx)(ke,{centerLabel:`Aug 2026 → Jul 2027`,months:[`Aug`,`Sep`,`Oct`,`Nov`,`Dec`,`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`],events:[{month:1,label:`Solo 401(k) plan document`,weight:3},{month:4,label:`Fund employee deferral`,weight:3.4},{month:5,label:`Q4 estimate due`,weight:1.6},{month:7,label:`File 2026 return`,weight:2.2},{month:10,label:`2027 PTE prepayment`,weight:2.8}]})})},ut={name:`Connected scatter`,render:()=>(0,M.jsx)(o,{n:`27`,name:`Connected scatter`,use:`Two measures moving together across years — income against effective rate.`,wide:!0,children:(0,M.jsx)(Ae,{xLabel:`Total income ($k)`,yLabel:`Effective rate (%)`,points:[{label:`2022`,x:238,y:16.9},{label:`2023`,x:299,y:16.1},{label:`2024`,x:296,y:15.4},{label:`2025`,x:331,y:14.9},{label:`2026e`,x:358,y:14.4}]})})},dt={name:`Glyph grid`,render:()=>(0,M.jsx)(o,{n:`28`,name:`Glyph grid`,use:`Dear Data marks: disc area is savings, rings are effort, tick means it closes this year.`,wide:!0,children:(0,M.jsx)(Me,{legend:`Disc area = first-year savings · rings = implementation effort · red tick = deadline inside 2026.`,items:[{label:`Solo 401(k)`,size:4180,effort:3,urgent:!0,note:`$4,180`},{label:`CA PTE`,size:2950,effort:2,urgent:!0,note:`$2,950`},{label:`Backdoor Roth`,size:1100,effort:2,note:`$1,100`},{label:`HSA top-up`,size:890,effort:1,urgent:!0,note:`$890`},{label:`DAF bunching`,size:650,effort:3,note:`$650`}]})})},ft={render:()=>(0,M.jsx)(o,{n:`29`,name:`Chord`,use:`Value moving between entities, both directions at once — trusts, LLCs, beneficiaries.`,wide:!0,children:(0,M.jsx)(He,{caption:`Ribbon width is the annual transfer; arc length is everything an entity touches.`,nodes:[`Doe Family Trust`,`Holdco LLC`,`Marital trust`,`GST trust`,`Charity`],links:[{from:0,to:2,value:312e5},{from:0,to:3,value:83e5},{from:1,to:0,value:146e5},{from:1,to:2,value:52e5},{from:0,to:4,value:42e5},{from:2,to:3,value:26e5}]})})},pt={render:()=>(0,M.jsx)(o,{n:`30`,name:`Ridgeline`,use:`Shape of a year, five years deep. Good for cash-flow or realization seasonality.`,wide:!0,children:(0,M.jsx)(Ue,{xLabels:[`Q1`,`Q2`,`Q3`,`Q4`],rows:[{label:`2022`,values:[42,61,55,88],note:`$246k`},{label:`2023`,values:[51,58,62,104],note:`$299k`},{label:`2024`,values:[48,66,71,96],note:`$296k`},{label:`2025`,values:[56,72,78,118],note:`$331k`},{label:`2026e`,values:[61,79,84,126],note:`$358k`}]})})},mt={name:`Step funnel`,render:()=>(0,M.jsx)(o,{n:`31`,name:`Step funnel`,use:`Gross income narrowed to tax owed, with the loss named at every step.`,children:(0,M.jsx)(We,{steps:[{label:`Total income`,value:357880},{label:`Less adjustments`,value:341300,note:`SE tax, HSA, deferral`},{label:`Less deductions`,value:279150,note:`Schedule A itemized`},{label:`Taxable income`,value:279150,note:`after phase-outs`},{label:`Federal tax`,value:51420,note:`before credits`}]})})},ht={render:()=>(0,M.jsx)(o,{n:`32`,name:`Icicle`,use:`A tree read left to right. Estate, then class, then holding — widths are dollars.`,wide:!0,children:(0,M.jsx)(Ge,{root:{label:`Taxable estate`,children:[{label:`Operating businesses`,value:524e5,children:[{label:`Holdco LLC`,value:341e5},{label:`Minority stakes`,value:183e5}]},{label:`Marketable securities`,value:386e5,children:[{label:`Brokerage`,value:234e5},{label:`Retirement`,value:152e5}]},{label:`Real property`,value:245e5,children:[{label:`Ranch LP`,value:151e5},{label:`Residences`,value:94e5}]},{label:`Other`,value:156e5,children:[{label:`Insurance & cash`,value:156e5}]}]}})})},gt={name:`Bullet (bars)`,render:()=>(0,M.jsx)(o,{n:`33`,name:`Bullet`,use:`Actual against target without a gauge. The most compact progress mark we have.`,children:(0,M.jsx)(Ke,{rows:[{label:`Employee deferral funded`,value:16500,target:24500,max:24500},{label:`HSA funded`,value:5200,target:8750,max:8750},{label:`Charitable bunching`,value:42e3,target:35e3,max:6e4},{label:`Effective rate`,value:14,target:13,max:22,unit:`%`}]})})},_t={name:`Radial bars`,render:()=>(0,M.jsx)(o,{n:`34`,name:`Radial bars`,use:`Ranked magnitudes on a dial. Reads as a family, not a leaderboard.`,children:(0,M.jsx)(qe,{caption:`Arc sweep is proportional to the largest item; rings are ordered outward by size.`,items:[{label:`Wages (W-2)`,value:2e5},{label:`Sch E — S-corp`,value:1e5},{label:`Taxable interest`,value:25e3},{label:`Ordinary dividends`,value:15e3},{label:`Sch C — Sally`,value:11130}]})})},vt={name:`Fan projection`,render:()=>(0,M.jsx)(o,{n:`35`,name:`Fan projection`,use:`A base case with honest uncertainty. Bands widen as the forecast gets braver.`,wide:!0,children:(0,M.jsx)(Je,{yLabel:`Projected federal tax`,years:[`2026e`,`2027`,`2028`,`2029`,`2030`],base:[51420,54200,57800,60400,63900],bands:[{spread:[0,4200,8600,13200,18400],opacity:.12},{spread:[0,2100,4300,6600,9200],opacity:.22}]})})},yt={render:()=>(0,M.jsx)(o,{n:`36`,name:`Unit histogram`,use:`One dot per item. Counts stay countable — no bar-length estimation.`,wide:!0,children:(0,M.jsx)(Ye,{unitLabel:`planning item`,caption:`Twenty-eight open items binned by the quarter they must close in.`,bins:[{label:`Q3 2026`,count:7,highlight:!0},{label:`Q4 2026`,count:11,highlight:!0},{label:`Q1 2027`,count:6},{label:`Q2 2027`,count:4}]})})},bt={name:`Parallel coordinates`,render:()=>(0,M.jsx)(o,{n:`37`,name:`Parallel coordinates`,use:`Four measures, one line per strategy. Crossings show the real trade-offs.`,wide:!0,children:(0,M.jsx)(Xe,{axes:[{label:`Savings`,min:0,max:5e3,format:e=>`$${(e/1e3).toFixed(1)}k`},{label:`Effort`,min:1,max:5,format:e=>`${e}`},{label:`Cash needed`,min:0,max:25e3,format:e=>`$${(e/1e3).toFixed(0)}k`},{label:`Years to payback`,min:0,max:6,format:e=>`${e}y`}],series:[{label:`Solo 401(k)`,values:[4180,3,24500,1],emphasize:!0},{label:`CA PTE`,values:[2950,2,18e3,1]},{label:`Backdoor Roth`,values:[1100,2,15e3,4]},{label:`DAF bunching`,values:[650,3,42e3/2,2]}]})})},xt={name:`Year strip`,render:()=>(0,M.jsx)(o,{n:`38`,name:`Year strip`,use:`Fifty-two weeks as one field. Density shows when the plan actually demands attention.`,wide:!0,children:(0,M.jsx)(Ze,{caption:`Shaded weeks carry a filing, funding or election deadline; the darkest are non-movable.`,months:[`Aug`,`Sep`,`Oct`,`Nov`,`Dec`,`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`],weeks:Array.from({length:52},(e,t)=>({intensity:[3,8,14,19,20,21,32,33,36,45].includes(t)?1:[1,6,11,17,25,29,38,41,48].includes(t)?.6:t%7==0?.35:0}))})})},St={name:`Meter · segmented bar · track`,render:()=>(0,M.jsx)(f,{})},Ct={name:`Stacked column & headroom`,render:()=>(0,M.jsx)(d,{})},wt={name:`Waffle & small multiples`,render:()=>(0,M.jsx)(u,{})},Tt={name:`Beneficiary ribbon`,render:()=>(0,M.jsx)(o,{n:`42`,name:`Beneficiary ribbon`,use:`Every dollar, from today to the second death — one scale across all three columns. The middle column is what the documents create at the first death; the right column is who finally holds it.`,wide:!0,children:(0,M.jsx)(b,{stages:[{caption:`TODAY`,nodes:[{label:`Estimated total estate`,value:4918e5}]},{caption:`AT FIRST DEATH`,nodes:[{label:`Marital Trust`,value:2262e5},{label:`Family / exemption trust`,value:15e6},{label:`Irrevocable trusts (outside)`,value:1478e5},{label:`Charitable (CLAT)`,value:47e5},{label:`Outright & TOD`,value:981e5}],links:[{from:0,to:0,value:2262e5},{from:0,to:1,value:15e6},{from:0,to:2,value:1478e5},{from:0,to:3,value:47e5},{from:0,to:4,value:981e5}]},{caption:`AT SECOND DEATH`,nodes:[{label:`Daniel & Andrew Doe`,value:2105e5},{label:`Grandchildren / dynasty`,value:446e5},{label:`Charity`,value:177e5},{label:`Estate & state tax`,value:1311e5},{label:`Spouse's lifetime use`,value:879e5}],links:[{from:0,to:4,value:879e5},{from:0,to:3,value:1311e5},{from:0,to:0,value:72e5},{from:1,to:1,value:15e6},{from:2,to:0,value:1478e5},{from:3,to:2,value:47e5},{from:4,to:0,value:555e5},{from:4,to:1,value:296e5},{from:4,to:2,value:13e6}]}]})})},Et={name:`Beneficiaries by area`,render:()=>(0,M.jsx)(o,{n:`43`,name:`Beneficiaries by area`,use:`Every second-death recipient scaled by area. Reads for what the tax claim is: larger than either son's share.`,wide:!0,children:(0,M.jsx)(ie,{items:[{label:`Estate & state tax`,value:1311e5},{label:`Andrew Doe`,value:1053e5},{label:`Daniel Doe`,value:1052e5},{label:`Spouse's use`,value:879e5},{label:`Grandchildren`,value:446e5},{label:`Charity`,value:177e5}]})})},Dt={name:`Eight trusts to scale`,render:()=>(0,M.jsx)(o,{n:`44`,name:`Eight trusts to scale`,use:`Dot position is value. The revocable trust dominates the picture — and offers no exclusion at all.`,wide:!0,children:(0,M.jsx)(Ce,{rows:[{label:`Doe Family Trust`,value:2e8},{label:`Doe 2020-A GRAT`,value:384e5},{label:`Doe 2020-B GRAT`,value:317e5},{label:`Daniel Doe Irrevocable`,value:129e5},{label:`Andrew Doe Irrevocable`,value:116e5},{label:`Doe ILIT`,value:98e5},{label:`Doe Dynasty Trust`,value:82e5},{label:`Doe CLAT (2022)`,value:49e5}]})})},Q={name:`Fiduciary matrix`,render:()=>(0,M.jsx)(o,{n:`45`,name:`Fiduciary matrix`,use:`One dot per named fiduciary. Read down a column for single points of failure — no protector is named on six of eight trusts.`,wide:!0,children:(0,M.jsx)(Qe,{roles:[`Trustee`,`Successor`,`Investment`,`Distribution`,`Protector`],legend:[{tone:`a`,label:`John Doe`},{tone:`b`,label:`Jane Doe`},{tone:`corporate`,label:`Corporate trustee`},{tone:`child`,label:`Son`}],rows:[{entity:`Doe Family Trust`,holders:[{name:`John & Jane Doe`,tone:`a`},{name:`Jane Doe`,tone:`b`},{name:`Corporate trustee`,tone:`corporate`},{name:`John Doe`,tone:`a`},null]},{entity:`Doe 2020-A GRAT`,holders:[{name:`John Doe`,tone:`a`},{name:`Jane Doe`,tone:`b`},{name:`John Doe`,tone:`a`},{name:`John Doe`,tone:`a`},null]},{entity:`Doe 2020-B GRAT`,holders:[{name:`Jane Doe`,tone:`b`},{name:`John Doe`,tone:`a`},{name:`Jane Doe`,tone:`b`},{name:`Jane Doe`,tone:`b`},null]},{entity:`Daniel Doe Irrev.`,holders:[{name:`Corporate trustee`,tone:`corporate`},{name:`Son`,tone:`child`},{name:`Corporate trustee`,tone:`corporate`},{name:`Corporate trustee`,tone:`corporate`},null]},{entity:`Andrew Doe Irrev.`,holders:[{name:`Corporate trustee`,tone:`corporate`},{name:`Son`,tone:`child`},{name:`Corporate trustee`,tone:`corporate`},{name:`Corporate trustee`,tone:`corporate`},null]},{entity:`Doe Dynasty Trust`,holders:[{name:`Corporate trustee`,tone:`corporate`},null,{name:`Corporate trustee`,tone:`corporate`},{name:`Corporate trustee`,tone:`corporate`},{name:`Son`,tone:`child`}]},{entity:`Doe CLAT`,holders:[{name:`John Doe`,tone:`a`},{name:`Jane Doe`,tone:`b`},{name:`Corporate trustee`,tone:`corporate`},null,null]},{entity:`Doe ILIT`,holders:[{name:`Jane Doe`,tone:`b`},{name:`Corporate trustee`,tone:`corporate`},{name:`Corporate trustee`,tone:`corporate`},{name:`Jane Doe`,tone:`b`},null]}]})})},Ot={name:`Radial genogram`,render:()=>(0,M.jsx)(o,{n:`46`,name:`Radial genogram`,use:`Distance from centre is generation. Every arc on the outer ring is a GST-exempt taker.`,wide:!0,children:(0,M.jsx)($e,{center:[{label:`John Doe`,sublabel:``},{label:`Jane Doe`,sublabel:``}],ring1:[{label:`Daniel Doe`,parent:0},{label:`Andrew Doe`,parent:0},{label:`Claire Doe-Reyes`,parent:1}],ring2:[{label:`Ella`,parent:0},{label:`Marcus`,parent:0},{label:`Ivy`,parent:1},{label:`Theo`,parent:2},{label:`Ruth`,parent:2}]})})},kt={name:`Document register`,render:()=>(0,M.jsx)(o,{n:`47`,name:`Document register`,use:`One tile per document. Dashed tiles are the difference between an estimate and a plan.`,wide:!0,children:(0,M.jsx)(et,{items:[{label:`Joint revocable trust`,status:`collected`},{label:`Will — John`,status:`collected`},{label:`Will — Jane`,status:`collected`},{label:`2020-A GRAT`,status:`collected`},{label:`2020-B GRAT`,status:`collected`},{label:`Daniel Doe trust`,status:`collected`},{label:`Andrew Doe trust`,status:`collected`},{label:`Dynasty trust`,status:`collected`},{label:`CLAT agreement`,status:`collected`},{label:`POA — John`,status:`collected`},{label:`Form 709 history`,status:`outstanding`},{label:`ILIT policy`,status:`outstanding`},{label:`Healthcare directives`,status:`outstanding`}]})})},At={name:`What's missing`,render:()=>(0,M.jsx)(o,{n:`48`,name:`What's missing`,use:`The pale dot is dollars currently exposed; the accent dot is where they'd sit with the structure in place. The distance is the argument.`,wide:!0,children:(0,M.jsx)(ne,{aLabel:`Exposed today`,bLabel:`With structure in place`,rows:[{label:`QPRT — Illinois residence`,a:363e5,b:279e5},{label:`Spousal lifetime access trust`,a:262e5,b:146e5},{label:`Charitable remainder trust`,a:22e6,b:159e5},{label:`Family LLC recapitalisation`,a:523e5,b:424e5},{label:`Donor-advised fund`,a:6e6,b:36e5},{label:`Directed trust — South Dakota`,a:2e8,b:1873e5}]})})},jt={name:`Twelve-month sequence`,render:()=>(0,M.jsx)(o,{n:`49`,name:`Twelve-month sequence`,use:`A second arc calendar — the document and funding sequence, read clockwise from today.`,wide:!0,children:(0,M.jsx)(ke,{centerLabel:`7 dates · Aug 2026 – Jul 2027`,months:[`Aug`,`Sep`,`Oct`,`Nov`,`Dec`,`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`],events:[{month:0,label:`Request Form 709 history`,weight:1},{month:1,label:`Collect ILIT policy statement`,weight:.85},{month:2,label:`Execute healthcare directives`,weight:.7},{month:4,label:`Annual exclusion gifts — $19k × 10`,weight:.55},{month:4,label:`GRAT term review before 2027`,weight:.95},{month:7,label:`Fund CLAT annuity payment`,weight:.75},{month:10,label:`Revalue closely held interests`,weight:.6}]})})},Mt={name:`Effort vs. impact`,render:()=>(0,M.jsx)(o,{n:`50`,name:`Effort vs. impact`,use:`Upper-left is the prize: real dollars, little friction. Bubble size doubles as a second read of annual dollars saved.`,wide:!0,children:(0,M.jsx)(je,{xLabel:`Effort to implement`,yLabel:`Annual dollars saved`,xBands:[`Low`,`Moderate`,`Involved`,`Advisor-led`],yGridlines:[750,1500,2250,3e3],points:[{label:`CA PTE election`,band:3.2,value:2232,tone:`accent`},{label:`Solo 401(k)`,band:2.6,value:2640,tone:`accent`},{label:`Family HSA`,band:1.3,value:2052,tone:`accent3`},{label:`DAF bunching`,band:1.9,value:1800,tone:`accent3`},{label:`Backdoor Roth`,band:1.6,value:1500,tone:`accent3`},{label:`Loss harvesting`,band:1.1,value:1046,tone:`accent2`},{label:`S-corp comp review`,band:2.5,value:750,tone:`muted`}]})})},Nt={name:`Chart-key legend`,render:()=>(0,M.jsx)(o,{n:`51`,name:`Chart-key legend`,use:`Borrowed from the grammar of Schwabish, Lima, Tufte and Lupi — every chart in a deck uses one of these six encodings, and nothing is decorative. Icons here are illustrative sketches, not live instances of the real components.`,wide:!0,children:(0,M.jsx)(ze,{items:[{icon:(0,M.jsx)(Ne,{}),name:`Sunburst`,description:`Angle is share of income. Ring depth is how far a dollar travels from its source.`},{icon:(0,M.jsx)(Pe,{}),name:`Ribbon flow`,description:`Width equals dollars. Where a ribbon narrows, a deduction removed money from the taxable base.`},{icon:(0,M.jsx)(Fe,{}),name:`Waffle`,description:`One hundred squares, one per percent. Fill tells you what share of a total was actually usable.`},{icon:(0,M.jsx)(Ie,{}),name:`Glyph`,description:`Each move gets a petal per attribute: size = dollars, spokes = effort, ring = deadline pressure.`},{icon:(0,M.jsx)(Le,{}),name:`Arc calendar`,description:`Twelve months bent into a circle. Radius marks the deadline; the arc shows how long you have.`},{icon:(0,M.jsx)(Re,{}),name:`Cascade`,description:`Each bar is one decision. The floor drops step by step from what you paid to what you could pay.`}]})})},Pt={name:`Family tree`,render:()=>(0,M.jsx)(o,{n:`52`,name:`Family tree`,use:`Two or three generations with the same arrow language as every other flow in the system.`,wide:!0,selectors:[`.avatar`,`.vconn`,`.chip`],children:(0,M.jsx)(_e,{couple:[{name:`John Doe`,role:`Grantor · b. 1954`,tone:`accent`},{name:`Jane Doe`,role:`Grantor · b. 1957`,tone:`accent`}],children:[{name:`Michael Doe`,role:`Trustee successor`},{name:`Sarah Doe-Levin`,role:`Beneficiary`},{name:`Thomas Doe`,role:`Beneficiary`}],grandchildren:[{name:`Ava`,role:`GST trust`},{name:`Noah`,role:`GST trust`},{name:`Ruth`,role:`GST trust`}]})})},$={name:`Entity structure`,render:()=>(0,M.jsx)(o,{n:`53`,name:`Entity structure`,use:`Ownership read top-down. Boxes are entities, arrows are control, figures are value.`,dos:[`Ownership and control chains`,`Trust-held entities with values on the node`],donts:[`More than three tiers on one slide — split by branch`],code:`<EntityTree root={{ label: "Doe Family Trust", value: "$131.1M", children: [...] }} />`,wide:!0,selectors:[`.node`,`.vconn`,`.num`],children:(0,M.jsx)(ge,{root:{label:`Doe Family Trust`,value:`$131.1M`,note:`Irrevocable · 2018`,children:[{label:`Holdco LLC`,value:`$52.4M`,children:[{label:`Operating co.`,value:`$34.1M`},{label:`Minority stakes`,value:`$18.3M`}]},{label:`Ranch LP`,value:`$15.1M`,note:`Illinois situs`},{label:`Marital trust`,value:`$38.6M`}]}})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="01" name="Waffle" use="Composition as countable units. Reads as a share without a percentage label.">
      <WaffleChart parts={INCOME} unitNote="100 units = $357,880 of total income. Each unit ≈ $3,579." />
    </Specimen>
}`,...N.parameters?.docs?.source}}},rt.parameters={...rt.parameters,docs:{...rt.parameters?.docs,source:{originalSource:`{
  name: "Proportion band",
  render: () => <Specimen n="02" name="Proportion band" use="The compact version — one line, inline legend. Use when the slide already has a figure.">
      <ProportionBand parts={INCOME} />
    </Specimen>
}`,...rt.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="03" name="Waterfall" use="How a headline number is built. Ideal for income → adjustments → taxable → tax.">
      <WaterfallChart items={[{
      label: "W-2 wages",
      value: 212400
    }, {
      label: "Schedule C",
      value: 78200
    }, {
      label: "Investment",
      value: 58080
    }, {
      label: "Rental",
      value: 9200
    }, {
      label: "Adjustments",
      value: -29300
    }, {
      label: "Taxable income",
      value: 328580,
      kind: "total"
    }]} />
    </Specimen>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="04" name="Bullet" use="Actual against a cap or target. The honest way to show a SALT ceiling.">
      <BulletChart rows={[{
      label: "State & local tax",
      value: 55150,
      target: 10000,
      max: 60000,
      note: "Marker = $10,000 cap. $45,150 paid above it."
    }, {
      label: "Solo 401(k) deferral",
      value: 14500,
      target: 24500,
      max: 30000,
      note: "Marker = 2026 employee limit."
    }, {
      label: "HSA (family)",
      value: 8750,
      target: 8750,
      max: 10000,
      note: "Fully funded to the 2026 limit."
    }]} />
    </Specimen>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="05" name="Dumbbell" use="Filed year versus planned year, line by line. Replaces side-by-side bars.">
      <DumbbellChart aLabel="2025 filed" bLabel="2026 projected" rows={[{
      label: "Federal tax",
      a: 51505,
      b: 43120
    }, {
      label: "CA tax",
      a: 24800,
      b: 21400
    }, {
      label: "Retirement deferral",
      a: 14500,
      b: 24500
    }, {
      label: "Itemized deductions",
      a: 50400,
      b: 61300
    }]} />
    </Specimen>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="06" name="Slope" use="Before and after, four lines maximum. The savings story in one gesture.">
      <SlopeChart fromLabel="Without planning" toLabel="With planning" series={[{
      label: "Federal",
      from: 51505,
      to: 43120
    }, {
      label: "State",
      from: 24800,
      to: 21400
    }, {
      label: "Payroll",
      from: 18900,
      to: 17650
    }]} />
    </Specimen>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="07" name="Marimekko" use="Two dimensions at once — entity size across the x-axis, internal mix down the y.">
      <MarimekkoChart columns={[{
      label: "Operating business",
      weight: 41,
      parts: [{
        label: "Voting",
        value: 28
      }, {
        label: "Non-voting",
        value: 72
      }]
    }, {
      label: "Securities",
      weight: 23,
      parts: [{
        label: "Taxable",
        value: 61
      }, {
        label: "Deferred",
        value: 39
      }]
    }, {
      label: "Real property",
      weight: 15,
      parts: [{
        label: "Encumbered",
        value: 44
      }, {
        label: "Free & clear",
        value: 56
      }]
    }, {
      label: "Other",
      weight: 12,
      parts: [{
        label: "Insurance",
        value: 66
      }, {
        label: "Personal",
        value: 34
      }]
    }]} />
    </Specimen>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Radial gauge",
  render: () => <Specimen n="08" name="Radial gauge" use="A single share, stated once. Never more than one per slide.">
      <RadialGauge pct={38} value="$49.8M" caption="Share of the taxable estate exposed above the combined 2026 exemption." />
    </Specimen>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="09" name="Sankey ribbons" use="Where the money goes. The distribution slide, upgraded from boxes." dos={["One-directional flow from a single total", "Three to seven destinations"]} donts={["Mutual flows — use ChordDiagram", "Destinations under 2% of the total; group them"]} code={\`<SankeyFlow total={{ label: "Gross estate", value: 491800000 }} targets={targets} />\`}>
      <SankeyFlow source={{
      label: "Doe Family Trust",
      value: 62400000
    }} targets={[{
      label: "Marital share",
      value: 31200000
    }, {
      label: "Children, per stirpes",
      value: 18700000
    }, {
      label: "Grandchildren (GST)",
      value: 8300000
    }, {
      label: "Charitable remainder",
      value: 4200000
    }]} />
    </Specimen>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="10" name="Treemap" use="Nested magnitudes at a glance. Best for estate composition with six or fewer classes.">
      <TreemapChart items={ESTATE} />
    </Specimen>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="11" name="Orbit rings" use="Structure around a center — entities held by a trust, sized by value.">
      <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
        <OrbitChart center={{
        label: "Taxable estate",
        value: "$131.1M"
      }} nodes={[{
        label: "Holdco LLC",
        value: 41
      }, {
        label: "Brokerage",
        value: 23
      }, {
        label: "Ranch LP",
        value: 15
      }, {
        label: "IRA / 401(k)",
        value: 6
      }, {
        label: "ILIT",
        value: 4,
        ring: 2
      }, {
        label: "GRAT I",
        value: 9,
        ring: 2
      }, {
        label: "GRAT II",
        value: 9,
        ring: 2
      }, {
        label: "DAF",
        value: 3,
        ring: 2
      }]} />
        <Small className="max-w-[46ch]">
          Inner ring holds directly-owned assets; outer ring holds irrevocable structures. Node area
          encodes value, so the reader sees concentration before reading a single label.
        </Small>
      </div>
    </Specimen>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Arc diagram",
  render: () => <Specimen n="12" name="Arc diagram" use="Relationships without a hairball — trustees, beneficiaries and powers on one spine.">
      <ArcDiagram nodes={["John", "Jane", "RLT", "ILIT", "GRAT I", "GRAT II", "Child A", "Child B", "Child C"]} links={[[0, 2], [1, 2], [2, 6], [2, 7], [2, 8], [0, 3], [3, 6], [1, 4], [0, 5]]} />
    </Specimen>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Bubble field",
  render: () => <Specimen n="13" name="Bubble field" use="Magnitude comparison with no axes. Good for opportunity sizing.">
      <BubbleField items={[{
      label: "Solo 401(k)",
      value: 4180
    }, {
      label: "CA PTE election",
      value: 2950
    }, {
      label: "Backdoor Roth",
      value: 1100
    }, {
      label: "HSA top-up",
      value: 890
    }, {
      label: "DAF bunching",
      value: 650
    }]} />
    </Specimen>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="14" name="Isotype" use="Countable marks for figures a client should feel, not just read.">
      <IsotypeGrid unit={500} unitLabel="$500 of projected annual savings" items={[{
      label: "Solo 401(k)",
      value: 4180
    }, {
      label: "CA PTE election",
      value: 2950
    }, {
      label: "Backdoor Roth",
      value: 1100
    }, {
      label: "HSA top-up",
      value: 890
    }]} />
    </Specimen>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Spark grid",
  render: () => <Specimen n="15" name="Spark grid" use="Small multiples. Five years of history per line item, without five charts.">
      <SparkGrid series={[{
      label: "W-2 wages",
      values: [168, 179, 191, 203, 212],
      last: "$212.4k"
    }, {
      label: "Schedule C",
      values: [41, 52, 60, 71, 78],
      last: "$78.2k"
    }, {
      label: "Capital gains",
      values: [12, 48, 22, 31, 39],
      last: "$39.1k"
    }, {
      label: "Effective rate",
      values: [16.9, 16.1, 15.4, 14.9, 14.4],
      last: "14.4%"
    }, {
      label: "Deductions",
      values: [38, 41, 44, 47, 50],
      last: "$50.4k"
    }, {
      label: "Estate value",
      values: [96, 104, 113, 122, 131],
      last: "$131.1M"
    }]} />
    </Specimen>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Timeline spine",
  render: () => <Specimen n="16" name="Timeline spine" use="Sequencing and deadlines. Filled dots are already done.">
      <TimelineSpine items={[{
      period: "Q3 2026 · now",
      title: "Open Solo 401(k)",
      note: "Plan document by Sept 30.",
      done: true
    }, {
      period: "Q4 2026",
      title: "Fund deferral",
      note: "$24,500 employee limit by Dec 31."
    }, {
      period: "Q1 2027",
      title: "File 2026 return",
      note: "Confirm PTE credit lands."
    }, {
      period: "Q2 2027",
      title: "PTE prepayment",
      note: "June 15 for the 2027 election."
    }]} />
    </Specimen>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="17" name="Sunburst" use="A hierarchy read middle-out — income category on the inner ring, source on the outer." wide>
      <SunburstChart centerLabel="Total income" centerValue="$357.9k" nodes={[{
      label: "W-2 wages",
      value: 212400,
      children: [{
        label: "Base",
        value: 168000
      }, {
        label: "Bonus",
        value: 32400
      }, {
        label: "RSU vest",
        value: 12000
      }]
    }, {
      label: "Schedule C",
      value: 78200,
      children: [{
        label: "Consulting",
        value: 58200
      }, {
        label: "Royalties",
        value: 20000
      }]
    }, {
      label: "Capital gains",
      value: 39100,
      children: [{
        label: "Long-term",
        value: 31100
      }, {
        label: "Short-term",
        value: 8000
      }]
    }, {
      label: "Dividends & interest",
      value: 18980,
      children: [{
        label: "Qualified",
        value: 13980
      }, {
        label: "Ordinary",
        value: 5000
      }]
    }, {
      label: "Rental",
      value: 9200,
      children: [{
        label: "Net rents",
        value: 9200
      }]
    }]} />
    </Specimen>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Stream graph",
  render: () => <Specimen n="18" name="Stream graph" use="Composition over time when the total also moves. Five years of income mix." wide>
      <StreamGraph periods={["2022", "2023", "2024", "2025", "2026e"]} series={[{
      label: "W-2 wages",
      values: [168, 179, 191, 203, 212]
    }, {
      label: "Schedule C",
      values: [41, 52, 60, 71, 78]
    }, {
      label: "Capital gains",
      values: [12, 48, 22, 31, 39]
    }, {
      label: "Dividends",
      values: [11, 13, 15, 17, 19]
    }, {
      label: "Rental",
      values: [6, 7, 8, 9, 9]
    }]} />
    </Specimen>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="19" name="Beeswarm" use="Every opportunity on one axis, nothing pooled away. Colour carries the owner." wide>
      <BeeswarmPlot axisLabel="Projected first-year savings, left to right" items={[{
      label: "Solo 401(k)",
      value: 4180,
      group: "Retirement"
    }, {
      label: "CA PTE",
      value: 2950,
      group: "State"
    }, {
      label: "Backdoor Roth",
      value: 1100,
      group: "Retirement"
    }, {
      label: "HSA top-up",
      value: 890,
      group: "Health"
    }, {
      label: "DAF bunching",
      value: 650,
      group: "Charitable"
    }, {
      label: "QCD",
      value: 420,
      group: "Charitable"
    }, {
      label: "Loss harvest",
      value: 380,
      group: "Investment"
    }, {
      label: "529 state credit",
      value: 240,
      group: "State"
    }]} />
    </Specimen>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="20" name="Lollipop" use="Ranked magnitudes with less ink than bars. The leader takes the accent.">
      <LollipopChart rows={[{
      label: "Solo 401(k)",
      value: 4180
    }, {
      label: "CA PTE election",
      value: 2950
    }, {
      label: "Backdoor Roth",
      value: 1100
    }, {
      label: "HSA top-up",
      value: 890
    }, {
      label: "DAF bunching",
      value: 650
    }]} />
    </Specimen>
}`,...Z.parameters?.docs?.source}}},it.parameters={...it.parameters,docs:{...it.parameters?.docs,source:{originalSource:`{
  name: "Heat matrix",
  render: () => <Specimen n="21" name="Heat matrix" use="Two categorical axes with one intensity — deduction type by quarter." wide>
      <HeatMatrix unit="Cells show dollars of deductible spend booked in each quarter." rows={["Charitable", "SALT", "Mortgage interest", "Medical"]} cols={["Q1", "Q2", "Q3", "Q4"]} values={[[1200, 900, 400, 18400], [13800, 13800, 13800, 13750], [5100, 5050, 5000, 4950], [0, 2400, 800, 1100]]} />
    </Specimen>
}`,...it.parameters?.docs?.source}}},at.parameters={...at.parameters,docs:{...at.parameters?.docs,source:{originalSource:`{
  name: "Cumulative curve",
  render: () => <Specimen n="22" name="Cumulative curve" use="Concentration against an even split. Shows how few holdings carry the estate.">
      <CumulativeCurve items={ESTATE} note="The dashed diagonal is a perfectly even estate. Distance from it is concentration risk." />
    </Specimen>
}`,...at.parameters?.docs?.source}}},ot.parameters={...ot.parameters,docs:{...ot.parameters?.docs,source:{originalSource:`{
  name: "Bracket ladder",
  render: () => <Specimen n="23" name="Bracket ladder" use="Marginal brackets with the client's income poured in. Widths are real." wide>
      <BracketLadder income={328580} brackets={[{
      rate: 10,
      from: 0,
      to: 23850
    }, {
      rate: 12,
      from: 23850,
      to: 96950
    }, {
      rate: 22,
      from: 96950,
      to: 206700
    }, {
      rate: 24,
      from: 206700,
      to: 394600
    }, {
      rate: 32,
      from: 394600,
      to: 501050
    }, {
      rate: 35,
      from: 501050,
      to: 751600
    }, {
      rate: 37,
      from: 751600,
      to: 1000000
    }]} />
    </Specimen>
}`,...ot.parameters?.docs?.source}}},st.parameters={...st.parameters,docs:{...st.parameters?.docs,source:{originalSource:`{
  name: "Nested squares",
  render: () => <Specimen n="24" name="Nested squares" use="Tufte-style nesting — exemption inside the estate, sized by area not length.">
      <NestedSquares unitNote="Area, not width, encodes value — the exposed slice is the visible remainder." layers={[{
      label: "Gross estate",
      value: 131100000
    }, {
      label: "Combined exemption",
      value: 30000000
    }, {
      label: "Illiquid share",
      value: 55800000
    }, {
      label: "Projected federal tax",
      value: 40440000
    }]} />
    </Specimen>
}`,...st.parameters?.docs?.source}}},ct.parameters={...ct.parameters,docs:{...ct.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="25" name="Tornado" use="Sensitivity around a base case. Downside left, upside right, ranked by span." wide>
      <TornadoChart baseLabel="2026 projected tax · $43,120" rows={[{
      label: "Schedule C profit ±20%",
      low: -5200,
      high: 5600
    }, {
      label: "Capital gains realisation",
      low: -3100,
      high: 4400
    }, {
      label: "PTE election timing",
      low: -2950,
      high: 0
    }, {
      label: "Deferral funded in full",
      low: -4180,
      high: 900
    }]} />
    </Specimen>
}`,...ct.parameters?.docs?.source}}},lt.parameters={...lt.parameters,docs:{...lt.parameters?.docs,source:{originalSource:`{
  name: "Radial timeline",
  render: () => <Specimen n="26" name="Radial timeline" use="Twelve months on a dial. Spoke length carries urgency, not just position.">
      <RadialTimeline centerLabel="Aug 2026 → Jul 2027" months={["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]} events={[{
      month: 1,
      label: "Solo 401(k) plan document",
      weight: 3
    }, {
      month: 4,
      label: "Fund employee deferral",
      weight: 3.4
    }, {
      month: 5,
      label: "Q4 estimate due",
      weight: 1.6
    }, {
      month: 7,
      label: "File 2026 return",
      weight: 2.2
    }, {
      month: 10,
      label: "2027 PTE prepayment",
      weight: 2.8
    }]} />
    </Specimen>
}`,...lt.parameters?.docs?.source}}},ut.parameters={...ut.parameters,docs:{...ut.parameters?.docs,source:{originalSource:`{
  name: "Connected scatter",
  render: () => <Specimen n="27" name="Connected scatter" use="Two measures moving together across years — income against effective rate." wide>
      <ConnectedScatter xLabel="Total income ($k)" yLabel="Effective rate (%)" points={[{
      label: "2022",
      x: 238,
      y: 16.9
    }, {
      label: "2023",
      x: 299,
      y: 16.1
    }, {
      label: "2024",
      x: 296,
      y: 15.4
    }, {
      label: "2025",
      x: 331,
      y: 14.9
    }, {
      label: "2026e",
      x: 358,
      y: 14.4
    }]} />
    </Specimen>
}`,...ut.parameters?.docs?.source}}},dt.parameters={...dt.parameters,docs:{...dt.parameters?.docs,source:{originalSource:`{
  name: "Glyph grid",
  render: () => <Specimen n="28" name="Glyph grid" use="Dear Data marks: disc area is savings, rings are effort, tick means it closes this year." wide>
      <GlyphGrid legend="Disc area = first-year savings · rings = implementation effort · red tick = deadline inside 2026." items={[{
      label: "Solo 401(k)",
      size: 4180,
      effort: 3,
      urgent: true,
      note: "$4,180"
    }, {
      label: "CA PTE",
      size: 2950,
      effort: 2,
      urgent: true,
      note: "$2,950"
    }, {
      label: "Backdoor Roth",
      size: 1100,
      effort: 2,
      note: "$1,100"
    }, {
      label: "HSA top-up",
      size: 890,
      effort: 1,
      urgent: true,
      note: "$890"
    }, {
      label: "DAF bunching",
      size: 650,
      effort: 3,
      note: "$650"
    }]} />
    </Specimen>
}`,...dt.parameters?.docs?.source}}},ft.parameters={...ft.parameters,docs:{...ft.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="29" name="Chord" use="Value moving between entities, both directions at once — trusts, LLCs, beneficiaries." wide>
      <ChordDiagram caption="Ribbon width is the annual transfer; arc length is everything an entity touches." nodes={["Doe Family Trust", "Holdco LLC", "Marital trust", "GST trust", "Charity"]} links={[{
      from: 0,
      to: 2,
      value: 31200000
    }, {
      from: 0,
      to: 3,
      value: 8300000
    }, {
      from: 1,
      to: 0,
      value: 14600000
    }, {
      from: 1,
      to: 2,
      value: 5200000
    }, {
      from: 0,
      to: 4,
      value: 4200000
    }, {
      from: 2,
      to: 3,
      value: 2600000
    }]} />
    </Specimen>
}`,...ft.parameters?.docs?.source}}},pt.parameters={...pt.parameters,docs:{...pt.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="30" name="Ridgeline" use="Shape of a year, five years deep. Good for cash-flow or realization seasonality." wide>
      <RidgeLines xLabels={["Q1", "Q2", "Q3", "Q4"]} rows={[{
      label: "2022",
      values: [42, 61, 55, 88],
      note: "$246k"
    }, {
      label: "2023",
      values: [51, 58, 62, 104],
      note: "$299k"
    }, {
      label: "2024",
      values: [48, 66, 71, 96],
      note: "$296k"
    }, {
      label: "2025",
      values: [56, 72, 78, 118],
      note: "$331k"
    }, {
      label: "2026e",
      values: [61, 79, 84, 126],
      note: "$358k"
    }]} />
    </Specimen>
}`,...pt.parameters?.docs?.source}}},mt.parameters={...mt.parameters,docs:{...mt.parameters?.docs,source:{originalSource:`{
  name: "Step funnel",
  render: () => <Specimen n="31" name="Step funnel" use="Gross income narrowed to tax owed, with the loss named at every step.">
      <StepFunnel steps={[{
      label: "Total income",
      value: 357880
    }, {
      label: "Less adjustments",
      value: 341300,
      note: "SE tax, HSA, deferral"
    }, {
      label: "Less deductions",
      value: 279150,
      note: "Schedule A itemized"
    }, {
      label: "Taxable income",
      value: 279150,
      note: "after phase-outs"
    }, {
      label: "Federal tax",
      value: 51420,
      note: "before credits"
    }]} />
    </Specimen>
}`,...mt.parameters?.docs?.source}}},ht.parameters={...ht.parameters,docs:{...ht.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="32" name="Icicle" use="A tree read left to right. Estate, then class, then holding — widths are dollars." wide>
      <IcicleTree root={{
      label: "Taxable estate",
      children: [{
        label: "Operating businesses",
        value: 52400000,
        children: [{
          label: "Holdco LLC",
          value: 34100000
        }, {
          label: "Minority stakes",
          value: 18300000
        }]
      }, {
        label: "Marketable securities",
        value: 38600000,
        children: [{
          label: "Brokerage",
          value: 23400000
        }, {
          label: "Retirement",
          value: 15200000
        }]
      }, {
        label: "Real property",
        value: 24500000,
        children: [{
          label: "Ranch LP",
          value: 15100000
        }, {
          label: "Residences",
          value: 9400000
        }]
      }, {
        label: "Other",
        value: 15600000,
        children: [{
          label: "Insurance & cash",
          value: 15600000
        }]
      }]
    }} />
    </Specimen>
}`,...ht.parameters?.docs?.source}}},gt.parameters={...gt.parameters,docs:{...gt.parameters?.docs,source:{originalSource:`{
  name: "Bullet (bars)",
  render: () => <Specimen n="33" name="Bullet" use="Actual against target without a gauge. The most compact progress mark we have.">
      <BulletBars rows={[{
      label: "Employee deferral funded",
      value: 16500,
      target: 24500,
      max: 24500
    }, {
      label: "HSA funded",
      value: 5200,
      target: 8750,
      max: 8750
    }, {
      label: "Charitable bunching",
      value: 42000,
      target: 35000,
      max: 60000
    }, {
      label: "Effective rate",
      value: 14,
      target: 13,
      max: 22,
      unit: "%"
    }]} />
    </Specimen>
}`,...gt.parameters?.docs?.source}}},_t.parameters={..._t.parameters,docs:{..._t.parameters?.docs,source:{originalSource:`{
  name: "Radial bars",
  render: () => <Specimen n="34" name="Radial bars" use="Ranked magnitudes on a dial. Reads as a family, not a leaderboard.">
      <RadialBars caption="Arc sweep is proportional to the largest item; rings are ordered outward by size." items={[{
      label: "Wages (W-2)",
      value: 200000
    }, {
      label: "Sch E — S-corp",
      value: 100000
    }, {
      label: "Taxable interest",
      value: 25000
    }, {
      label: "Ordinary dividends",
      value: 15000
    }, {
      label: "Sch C — Sally",
      value: 11130
    }]} />
    </Specimen>
}`,..._t.parameters?.docs?.source}}},vt.parameters={...vt.parameters,docs:{...vt.parameters?.docs,source:{originalSource:`{
  name: "Fan projection",
  render: () => <Specimen n="35" name="Fan projection" use="A base case with honest uncertainty. Bands widen as the forecast gets braver." wide>
      <FanProjection yLabel="Projected federal tax" years={["2026e", "2027", "2028", "2029", "2030"]} base={[51420, 54200, 57800, 60400, 63900]} bands={[{
      spread: [0, 4200, 8600, 13200, 18400],
      opacity: 0.12
    }, {
      spread: [0, 2100, 4300, 6600, 9200],
      opacity: 0.22
    }]} />
    </Specimen>
}`,...vt.parameters?.docs?.source}}},yt.parameters={...yt.parameters,docs:{...yt.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="36" name="Unit histogram" use="One dot per item. Counts stay countable — no bar-length estimation." wide>
      <DotHistogram unitLabel="planning item" caption="Twenty-eight open items binned by the quarter they must close in." bins={[{
      label: "Q3 2026",
      count: 7,
      highlight: true
    }, {
      label: "Q4 2026",
      count: 11,
      highlight: true
    }, {
      label: "Q1 2027",
      count: 6
    }, {
      label: "Q2 2027",
      count: 4
    }]} />
    </Specimen>
}`,...yt.parameters?.docs?.source}}},bt.parameters={...bt.parameters,docs:{...bt.parameters?.docs,source:{originalSource:`{
  name: "Parallel coordinates",
  render: () => <Specimen n="37" name="Parallel coordinates" use="Four measures, one line per strategy. Crossings show the real trade-offs." wide>
      <ParallelCoordinates axes={[{
      label: "Savings",
      min: 0,
      max: 5000,
      format: n => \`$\${(n / 1000).toFixed(1)}k\`
    }, {
      label: "Effort",
      min: 1,
      max: 5,
      format: n => \`\${n}\`
    }, {
      label: "Cash needed",
      min: 0,
      max: 25000,
      format: n => \`$\${(n / 1000).toFixed(0)}k\`
    }, {
      label: "Years to payback",
      min: 0,
      max: 6,
      format: n => \`\${n}y\`
    }]} series={[{
      label: "Solo 401(k)",
      values: [4180, 3, 24500, 1],
      emphasize: true
    }, {
      label: "CA PTE",
      values: [2950, 2, 18000, 1]
    }, {
      label: "Backdoor Roth",
      values: [1100, 2, 15000, 4]
    }, {
      label: "DAF bunching",
      values: [650, 3, 42000 / 2, 2]
    }]} />
    </Specimen>
}`,...bt.parameters?.docs?.source}}},xt.parameters={...xt.parameters,docs:{...xt.parameters?.docs,source:{originalSource:`{
  name: "Year strip",
  render: () => <Specimen n="38" name="Year strip" use="Fifty-two weeks as one field. Density shows when the plan actually demands attention." wide>
      <YearStrip caption="Shaded weeks carry a filing, funding or election deadline; the darkest are non-movable." months={["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]} weeks={Array.from({
      length: 52
    }, (_, i) => ({
      intensity: [3, 8, 14, 19, 20, 21, 32, 33, 36, 45].includes(i) ? 1 : [1, 6, 11, 17, 25, 29, 38, 41, 48].includes(i) ? 0.6 : i % 7 === 0 ? 0.35 : 0
    }))} />
    </Specimen>
}`,...xt.parameters?.docs?.source}}},St.parameters={...St.parameters,docs:{...St.parameters?.docs,source:{originalSource:`{
  name: "Meter · segmented bar · track",
  render: () => <MeterSegmentedBarTrackSpecimen />
}`,...St.parameters?.docs?.source}}},Ct.parameters={...Ct.parameters,docs:{...Ct.parameters?.docs,source:{originalSource:`{
  name: "Stacked column & headroom",
  render: () => <StackedColumnHeadroomSpecimen />
}`,...Ct.parameters?.docs?.source}}},wt.parameters={...wt.parameters,docs:{...wt.parameters?.docs,source:{originalSource:`{
  name: "Waffle & small multiples",
  render: () => <WaffleSmallMultiplesSpecimen />
}`,...wt.parameters?.docs?.source}}},Tt.parameters={...Tt.parameters,docs:{...Tt.parameters?.docs,source:{originalSource:`{
  name: "Beneficiary ribbon",
  render: () => <Specimen n="42" name="Beneficiary ribbon" use="Every dollar, from today to the second death — one scale across all three columns. The middle column is what the documents create at the first death; the right column is who finally holds it." wide>
      {/*
        Node totals (both columns) are verified exact against estate-viz.html's
        literal text elements. The stage1→stage2 LINK assignment below is an
        illustrative allocation consistent with those totals (each source and
        target node's links sum exactly to its own value) — the source's SVG
        draws these as genuinely crossing ribbons that aren't decomposable
        into a link list without the original computation, so this is a
        faithful-in-aggregate reconstruction rather than a pixel trace.
       */}
      <MultiStageRibbon stages={[{
      caption: "TODAY",
      nodes: [{
        label: "Estimated total estate",
        value: 491_800_000
      }]
    }, {
      caption: "AT FIRST DEATH",
      nodes: [{
        label: "Marital Trust",
        value: 226_200_000
      }, {
        label: "Family / exemption trust",
        value: 15_000_000
      }, {
        label: "Irrevocable trusts (outside)",
        value: 147_800_000
      }, {
        label: "Charitable (CLAT)",
        value: 4_700_000
      }, {
        label: "Outright & TOD",
        value: 98_100_000
      }],
      links: [{
        from: 0,
        to: 0,
        value: 226_200_000
      }, {
        from: 0,
        to: 1,
        value: 15_000_000
      }, {
        from: 0,
        to: 2,
        value: 147_800_000
      }, {
        from: 0,
        to: 3,
        value: 4_700_000
      }, {
        from: 0,
        to: 4,
        value: 98_100_000
      }]
    }, {
      caption: "AT SECOND DEATH",
      nodes: [{
        label: "Daniel & Andrew Doe",
        value: 210_500_000
      }, {
        label: "Grandchildren / dynasty",
        value: 44_600_000
      }, {
        label: "Charity",
        value: 17_700_000
      }, {
        label: "Estate & state tax",
        value: 131_100_000
      }, {
        label: "Spouse's lifetime use",
        value: 87_900_000
      }],
      links: [{
        from: 0,
        to: 4,
        value: 87_900_000
      },
      // Marital Trust -> Spouse's lifetime use
      {
        from: 0,
        to: 3,
        value: 131_100_000
      },
      // Marital Trust -> Estate & state tax
      {
        from: 0,
        to: 0,
        value: 7_200_000
      },
      // Marital Trust remainder -> Daniel & Andrew
      {
        from: 1,
        to: 1,
        value: 15_000_000
      },
      // Family/exemption trust -> Grandchildren
      {
        from: 2,
        to: 0,
        value: 147_800_000
      },
      // Irrevocable trusts -> Daniel & Andrew
      {
        from: 3,
        to: 2,
        value: 4_700_000
      },
      // CLAT -> Charity
      {
        from: 4,
        to: 0,
        value: 55_500_000
      },
      // Outright & TOD -> Daniel & Andrew
      {
        from: 4,
        to: 1,
        value: 29_600_000
      },
      // Outright & TOD -> Grandchildren
      {
        from: 4,
        to: 2,
        value: 13_000_000
      } // Outright & TOD -> Charity
      ]
    }]} />
    </Specimen>
}`,...Tt.parameters?.docs?.source}}},Et.parameters={...Et.parameters,docs:{...Et.parameters?.docs,source:{originalSource:`{
  name: "Beneficiaries by area",
  render: () => <Specimen n="43" name="Beneficiaries by area" use="Every second-death recipient scaled by area. Reads for what the tax claim is: larger than either son's share." wide>
      <TreemapChart items={[{
      label: "Estate & state tax",
      value: 131_100_000
    }, {
      label: "Andrew Doe",
      value: 105_300_000
    }, {
      label: "Daniel Doe",
      value: 105_200_000
    }, {
      label: "Spouse's use",
      value: 87_900_000
    }, {
      label: "Grandchildren",
      value: 44_600_000
    }, {
      label: "Charity",
      value: 17_700_000
    }]} />
    </Specimen>
}`,...Et.parameters?.docs?.source}}},Dt.parameters={...Dt.parameters,docs:{...Dt.parameters?.docs,source:{originalSource:`{
  name: "Eight trusts to scale",
  render: () => <Specimen n="44" name="Eight trusts to scale" use="Dot position is value. The revocable trust dominates the picture — and offers no exclusion at all." wide>
      <LollipopChart rows={[{
      label: "Doe Family Trust",
      value: 200_000_000
    }, {
      label: "Doe 2020-A GRAT",
      value: 38_400_000
    }, {
      label: "Doe 2020-B GRAT",
      value: 31_700_000
    }, {
      label: "Daniel Doe Irrevocable",
      value: 12_900_000
    }, {
      label: "Andrew Doe Irrevocable",
      value: 11_600_000
    }, {
      label: "Doe ILIT",
      value: 9_800_000
    }, {
      label: "Doe Dynasty Trust",
      value: 8_200_000
    }, {
      label: "Doe CLAT (2022)",
      value: 4_900_000
    }]} />
    </Specimen>
}`,...Dt.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Fiduciary matrix",
  render: () => <Specimen n="45" name="Fiduciary matrix" use="One dot per named fiduciary. Read down a column for single points of failure — no protector is named on six of eight trusts." wide>
      <FiduciaryMatrix roles={["Trustee", "Successor", "Investment", "Distribution", "Protector"]} legend={[{
      tone: "a",
      label: "John Doe"
    }, {
      tone: "b",
      label: "Jane Doe"
    }, {
      tone: "corporate",
      label: "Corporate trustee"
    }, {
      tone: "child",
      label: "Son"
    }]} rows={[{
      entity: "Doe Family Trust",
      holders: [{
        name: "John & Jane Doe",
        tone: "a"
      }, {
        name: "Jane Doe",
        tone: "b"
      }, {
        name: "Corporate trustee",
        tone: "corporate"
      }, {
        name: "John Doe",
        tone: "a"
      }, null]
    }, {
      entity: "Doe 2020-A GRAT",
      holders: [{
        name: "John Doe",
        tone: "a"
      }, {
        name: "Jane Doe",
        tone: "b"
      }, {
        name: "John Doe",
        tone: "a"
      }, {
        name: "John Doe",
        tone: "a"
      }, null]
    }, {
      entity: "Doe 2020-B GRAT",
      holders: [{
        name: "Jane Doe",
        tone: "b"
      }, {
        name: "John Doe",
        tone: "a"
      }, {
        name: "Jane Doe",
        tone: "b"
      }, {
        name: "Jane Doe",
        tone: "b"
      }, null]
    }, {
      entity: "Daniel Doe Irrev.",
      holders: [{
        name: "Corporate trustee",
        tone: "corporate"
      }, {
        name: "Son",
        tone: "child"
      }, {
        name: "Corporate trustee",
        tone: "corporate"
      }, {
        name: "Corporate trustee",
        tone: "corporate"
      }, null]
    }, {
      entity: "Andrew Doe Irrev.",
      holders: [{
        name: "Corporate trustee",
        tone: "corporate"
      }, {
        name: "Son",
        tone: "child"
      }, {
        name: "Corporate trustee",
        tone: "corporate"
      }, {
        name: "Corporate trustee",
        tone: "corporate"
      }, null]
    }, {
      entity: "Doe Dynasty Trust",
      holders: [{
        name: "Corporate trustee",
        tone: "corporate"
      }, null, {
        name: "Corporate trustee",
        tone: "corporate"
      }, {
        name: "Corporate trustee",
        tone: "corporate"
      }, {
        name: "Son",
        tone: "child"
      }]
    }, {
      entity: "Doe CLAT",
      holders: [{
        name: "John Doe",
        tone: "a"
      }, {
        name: "Jane Doe",
        tone: "b"
      }, {
        name: "Corporate trustee",
        tone: "corporate"
      }, null, null]
    }, {
      entity: "Doe ILIT",
      holders: [{
        name: "Jane Doe",
        tone: "b"
      }, {
        name: "Corporate trustee",
        tone: "corporate"
      }, {
        name: "Corporate trustee",
        tone: "corporate"
      }, {
        name: "Jane Doe",
        tone: "b"
      }, null]
    }]} />
    </Specimen>
}`,...Q.parameters?.docs?.source}}},Ot.parameters={...Ot.parameters,docs:{...Ot.parameters?.docs,source:{originalSource:`{
  name: "Radial genogram",
  render: () => <Specimen n="46" name="Radial genogram" use="Distance from centre is generation. Every arc on the outer ring is a GST-exempt taker." wide>
      <RadialGenogram center={[{
      label: "John Doe",
      sublabel: ""
    }, {
      label: "Jane Doe",
      sublabel: ""
    }]} ring1={[{
      label: "Daniel Doe",
      parent: 0
    }, {
      label: "Andrew Doe",
      parent: 0
    }, {
      label: "Claire Doe-Reyes",
      parent: 1
    }]} ring2={[{
      label: "Ella",
      parent: 0
    }, {
      label: "Marcus",
      parent: 0
    }, {
      label: "Ivy",
      parent: 1
    }, {
      label: "Theo",
      parent: 2
    }, {
      label: "Ruth",
      parent: 2
    }]} />
    </Specimen>
}`,...Ot.parameters?.docs?.source}}},kt.parameters={...kt.parameters,docs:{...kt.parameters?.docs,source:{originalSource:`{
  name: "Document register",
  render: () => <Specimen n="47" name="Document register" use="One tile per document. Dashed tiles are the difference between an estimate and a plan." wide>
      <DocumentRegister items={[{
      label: "Joint revocable trust",
      status: "collected"
    }, {
      label: "Will — John",
      status: "collected"
    }, {
      label: "Will — Jane",
      status: "collected"
    }, {
      label: "2020-A GRAT",
      status: "collected"
    }, {
      label: "2020-B GRAT",
      status: "collected"
    }, {
      label: "Daniel Doe trust",
      status: "collected"
    }, {
      label: "Andrew Doe trust",
      status: "collected"
    }, {
      label: "Dynasty trust",
      status: "collected"
    }, {
      label: "CLAT agreement",
      status: "collected"
    }, {
      label: "POA — John",
      status: "collected"
    }, {
      label: "Form 709 history",
      status: "outstanding"
    }, {
      label: "ILIT policy",
      status: "outstanding"
    }, {
      label: "Healthcare directives",
      status: "outstanding"
    }]} />
    </Specimen>
}`,...kt.parameters?.docs?.source}}},At.parameters={...At.parameters,docs:{...At.parameters?.docs,source:{originalSource:`{
  name: "What's missing",
  render: () => <Specimen n="48" name="What's missing" use="The pale dot is dollars currently exposed; the accent dot is where they'd sit with the structure in place. The distance is the argument." wide>
      <DumbbellChart aLabel="Exposed today" bLabel="With structure in place" rows={[{
      label: "QPRT — Illinois residence",
      a: 36_300_000,
      b: 27_900_000
    }, {
      label: "Spousal lifetime access trust",
      a: 26_200_000,
      b: 14_600_000
    }, {
      label: "Charitable remainder trust",
      a: 22_000_000,
      b: 15_900_000
    }, {
      label: "Family LLC recapitalisation",
      a: 52_300_000,
      b: 42_400_000
    }, {
      label: "Donor-advised fund",
      a: 6_000_000,
      b: 3_600_000
    }, {
      label: "Directed trust — South Dakota",
      a: 200_000_000,
      b: 187_300_000
    }]} />
    </Specimen>
}`,...At.parameters?.docs?.source}}},jt.parameters={...jt.parameters,docs:{...jt.parameters?.docs,source:{originalSource:`{
  name: "Twelve-month sequence",
  render: () => <Specimen n="49" name="Twelve-month sequence" use="A second arc calendar — the document and funding sequence, read clockwise from today." wide>
      <RadialTimeline centerLabel="7 dates · Aug 2026 – Jul 2027" months={["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]} events={[{
      month: 0,
      label: "Request Form 709 history",
      weight: 1
    }, {
      month: 1,
      label: "Collect ILIT policy statement",
      weight: 0.85
    }, {
      month: 2,
      label: "Execute healthcare directives",
      weight: 0.7
    }, {
      month: 4,
      label: "Annual exclusion gifts — $19k × 10",
      weight: 0.55
    }, {
      month: 4,
      label: "GRAT term review before 2027",
      weight: 0.95
    }, {
      month: 7,
      label: "Fund CLAT annuity payment",
      weight: 0.75
    }, {
      month: 10,
      label: "Revalue closely held interests",
      weight: 0.6
    }]} />
    </Specimen>
}`,...jt.parameters?.docs?.source}}},Mt.parameters={...Mt.parameters,docs:{...Mt.parameters?.docs,source:{originalSource:`{
  name: "Effort vs. impact",
  render: () => <Specimen n="50" name="Effort vs. impact" use="Upper-left is the prize: real dollars, little friction. Bubble size doubles as a second read of annual dollars saved." wide>
      <QuadrantScatter xLabel="Effort to implement" yLabel="Annual dollars saved" xBands={["Low", "Moderate", "Involved", "Advisor-led"]} yGridlines={[750, 1500, 2250, 3000]} points={[{
      label: "CA PTE election",
      band: 3.2,
      value: 2232,
      tone: "accent"
    }, {
      label: "Solo 401(k)",
      band: 2.6,
      value: 2640,
      tone: "accent"
    }, {
      label: "Family HSA",
      band: 1.3,
      value: 2052,
      tone: "accent3"
    }, {
      label: "DAF bunching",
      band: 1.9,
      value: 1800,
      tone: "accent3"
    }, {
      label: "Backdoor Roth",
      band: 1.6,
      value: 1500,
      tone: "accent3"
    }, {
      label: "Loss harvesting",
      band: 1.1,
      value: 1046,
      tone: "accent2"
    }, {
      label: "S-corp comp review",
      band: 2.5,
      value: 750,
      tone: "muted"
    }]} />
    </Specimen>
}`,...Mt.parameters?.docs?.source}}},Nt.parameters={...Nt.parameters,docs:{...Nt.parameters?.docs,source:{originalSource:`{
  name: "Chart-key legend",
  render: () => <Specimen n="51" name="Chart-key legend" use="Borrowed from the grammar of Schwabish, Lima, Tufte and Lupi — every chart in a deck uses one of these six encodings, and nothing is decorative. Icons here are illustrative sketches, not live instances of the real components." wide>
      <ChartLegend items={[{
      icon: <MiniSunburstIcon />,
      name: "Sunburst",
      description: "Angle is share of income. Ring depth is how far a dollar travels from its source."
    }, {
      icon: <MiniRibbonIcon />,
      name: "Ribbon flow",
      description: "Width equals dollars. Where a ribbon narrows, a deduction removed money from the taxable base."
    }, {
      icon: <MiniWaffleIcon />,
      name: "Waffle",
      description: "One hundred squares, one per percent. Fill tells you what share of a total was actually usable."
    }, {
      icon: <MiniGlyphIcon />,
      name: "Glyph",
      description: "Each move gets a petal per attribute: size = dollars, spokes = effort, ring = deadline pressure."
    }, {
      icon: <MiniArcCalendarIcon />,
      name: "Arc calendar",
      description: "Twelve months bent into a circle. Radius marks the deadline; the arc shows how long you have."
    }, {
      icon: <MiniCascadeIcon />,
      name: "Cascade",
      description: "Each bar is one decision. The floor drops step by step from what you paid to what you could pay."
    }]} />
    </Specimen>
}`,...Nt.parameters?.docs?.source}}},Pt.parameters={...Pt.parameters,docs:{...Pt.parameters?.docs,source:{originalSource:`{
  name: "Family tree",
  render: () => <Specimen n="52" name="Family tree" use="Two or three generations with the same arrow language as every other flow in the system." wide selectors={[".avatar", ".vconn", ".chip"]}>
      <FamilyTree couple={[{
      name: "John Doe",
      role: "Grantor · b. 1954",
      tone: "accent"
    }, {
      name: "Jane Doe",
      role: "Grantor · b. 1957",
      tone: "accent"
    }]} children={[{
      name: "Michael Doe",
      role: "Trustee successor"
    }, {
      name: "Sarah Doe-Levin",
      role: "Beneficiary"
    }, {
      name: "Thomas Doe",
      role: "Beneficiary"
    }]} grandchildren={[{
      name: "Ava",
      role: "GST trust"
    }, {
      name: "Noah",
      role: "GST trust"
    }, {
      name: "Ruth",
      role: "GST trust"
    }]} />
    </Specimen>
}`,...Pt.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "Entity structure",
  render: () => <Specimen n="53" name="Entity structure" use="Ownership read top-down. Boxes are entities, arrows are control, figures are value." dos={["Ownership and control chains", "Trust-held entities with values on the node"]} donts={["More than three tiers on one slide — split by branch"]} code={\`<EntityTree root={{ label: "Doe Family Trust", value: "$131.1M", children: [...] }} />\`} wide selectors={[".node", ".vconn", ".num"]}>
      <EntityTree root={{
      label: "Doe Family Trust",
      value: "$131.1M",
      note: "Irrevocable · 2018",
      children: [{
        label: "Holdco LLC",
        value: "$52.4M",
        children: [{
          label: "Operating co.",
          value: "$34.1M"
        }, {
          label: "Minority stakes",
          value: "$18.3M"
        }]
      }, {
        label: "Ranch LP",
        value: "$15.1M",
        note: "Illinois situs"
      }, {
        label: "Marital trust",
        value: "$38.6M"
      }]
    }} />
    </Specimen>
}`,...$.parameters?.docs?.source}}},Ft=`Waffle.ProportionBandStory.Waterfall.Bullet.Dumbbell.Slope.Marimekko.RadialGaugeStory.SankeyRibbons.Treemap.OrbitRings.ArcDiagramStory.BubbleFieldStory.Isotype.SparkGridStory.TimelineSpineStory.Sunburst.StreamGraphStory.Beeswarm.Lollipop.HeatMatrixStory.CumulativeCurveStory.BracketLadderStory.NestedSquaresStory.Tornado.RadialTimelineStory.ConnectedScatterStory.GlyphGridStory.Chord.Ridgeline.StepFunnelStory.Icicle.BulletBarsStory.RadialBarsStory.FanProjectionStory.UnitHistogram.ParallelCoordinatesStory.YearStripStory.MeterSegmentedBarTrack.StackedColumnHeadroom.WaffleSmallMultiples.BeneficiaryRibbon.BeneficiaryTreemap.EightTrusts.FiduciaryMatrixStory.RadialGenogramStory.DocumentRegisterStory.WhatsMissing.TwelveMonthSequence.EffortVsImpact.ChartKeyLegend.FamilyTreeStory.EntityStructureStory`.split(`.`)})))()}It();export{U as ArcDiagramStory,X as Beeswarm,Tt as BeneficiaryRibbon,Et as BeneficiaryTreemap,ot as BracketLadderStory,W as BubbleFieldStory,F as Bullet,gt as BulletBarsStory,Nt as ChartKeyLegend,ft as Chord,ut as ConnectedScatterStory,at as CumulativeCurveStory,kt as DocumentRegisterStory,I as Dumbbell,Mt as EffortVsImpact,Dt as EightTrusts,$ as EntityStructureStory,Pt as FamilyTreeStory,vt as FanProjectionStory,Q as FiduciaryMatrixStory,dt as GlyphGridStory,it as HeatMatrixStory,ht as Icicle,G as Isotype,Z as Lollipop,R as Marimekko,St as MeterSegmentedBarTrack,st as NestedSquaresStory,H as OrbitRings,bt as ParallelCoordinatesStory,rt as ProportionBandStory,_t as RadialBarsStory,z as RadialGaugeStory,Ot as RadialGenogramStory,lt as RadialTimelineStory,pt as Ridgeline,B as SankeyRibbons,L as Slope,K as SparkGridStory,Ct as StackedColumnHeadroom,mt as StepFunnelStory,Y as StreamGraphStory,J as Sunburst,q as TimelineSpineStory,ct as Tornado,V as Treemap,jt as TwelveMonthSequence,yt as UnitHistogram,N as Waffle,wt as WaffleSmallMultiples,P as Waterfall,At as WhatsMissing,xt as YearStripStory,Ft as __namedExportsOrder,nt as default};