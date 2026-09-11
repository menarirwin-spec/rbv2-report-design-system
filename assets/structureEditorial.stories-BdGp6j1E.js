import{n as e}from"./iframe-Baufd4UZ.js";import{b as t,h as n,i as r,m as i,s as a,v as o,x as s}from"./primitives-DpgJp73y.js";import{n as c,r as l}from"./specimen-u4n8q164.js";import{a as u,r as d}from"./deck-parts-DNfPY8S8.js";import{f,m as p}from"./ledger-ZlearC0N.js";import{n as m}from"./rolldown-runtime-DkW27tQK.js";function h({rings:e=4}){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`span`,{"aria-hidden":!0,style:{position:`absolute`,right:`-18%`,top:`-30%`,width:`68%`,aspectRatio:`1`,borderRadius:`50%`,background:`radial-gradient(circle at 35% 35%, color-mix(in srgb, var(--r-accent) 26%, transparent), transparent 62%)`,pointerEvents:`none`}}),(0,A.jsx)(`span`,{"aria-hidden":!0,style:{position:`absolute`,right:`6%`,top:`8%`,width:`46%`,aspectRatio:`1`},children:Array.from({length:e}).map((e,t)=>(0,A.jsx)(`span`,{style:{position:`absolute`,inset:`${t*11}%`,border:`1px solid color-mix(in srgb, var(--r-ink) 14%, transparent)`,borderRadius:`50%`}},t))})]})}function g({eyebrow:e,title:t,subtitle:n,meta:i}){return(0,A.jsxs)(`div`,{className:`relative z-10`,children:[(0,A.jsx)(r,{children:e}),(0,A.jsx)(`div`,{style:{fontFamily:`var(--r-serif)`,fontSize:`5.2cqw`,lineHeight:1.02},children:t}),n?(0,A.jsx)(`p`,{className:`r-lede mt-5`,children:n}):null,i?(0,A.jsxs)(`div`,{className:`mt-8 flex gap-12`,children:[(0,A.jsxs)(`span`,{children:[(0,A.jsx)(a,{className:`!mb-1`,children:`Prepared for`}),(0,A.jsx)(`span`,{style:{fontSize:15},children:i[0]})]}),(0,A.jsxs)(`span`,{children:[(0,A.jsx)(a,{className:`!mb-1`,children:`Prepared`}),(0,A.jsx)(`span`,{style:{fontSize:15},children:i[1]})]})]}):null]})}function _({index:e,title:t,blurb:n,numeralSize:r=`20cqw`}){return(0,A.jsxs)(`div`,{className:`relative flex h-full items-center`,children:[(0,A.jsx)(`span`,{"aria-hidden":!0,className:`r-secnum`,style:{position:`absolute`,right:0,bottom:`-10%`,fontSize:r},children:e}),(0,A.jsxs)(`div`,{className:`relative z-10`,children:[(0,A.jsxs)(a,{children:[`Section `,e]}),(0,A.jsx)(`div`,{style:{fontFamily:`var(--r-serif)`,fontSize:`4cqw`,lineHeight:1.05},children:t}),n?(0,A.jsx)(`p`,{className:`r-lede mt-4`,children:n}):null]})]})}function v({items:e,columns:t=2}){return(0,A.jsx)(`div`,{className:`grid gap-x-14`,style:{gridTemplateColumns:`repeat(${t}, minmax(0,1fr))`},children:e.map(e=>(0,A.jsxs)(`div`,{className:`r-toc-item`,children:[(0,A.jsx)(`span`,{className:`i r-num`,children:e.n}),(0,A.jsxs)(`span`,{className:`min-w-0`,children:[(0,A.jsx)(`span`,{children:e.title}),e.note?(0,A.jsx)(n,{className:`mt-1`,children:e.note}):null]})]},e.n))})}function y(e){return e.split(/\s+/).slice(0,2).map(e=>e[0]).join(``)}function b({person:e,compact:t}){let n=e.tone===`accent`?`var(--r-accent)`:e.tone===`accent2`?`var(--r-accent-2)`:e.tone===`accent3`?`var(--r-accent-3)`:void 0,r=e.tone?`var(--r-accent-ink)`:void 0;return(0,A.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,A.jsx)(`span`,{className:`r-avatar`,style:{...n?{background:n,borderColor:`transparent`,color:r}:{},...t?{width:40,height:40,fontSize:12.5}:{}},children:e.initials??y(e.name)}),(0,A.jsxs)(`span`,{className:`min-w-0`,children:[(0,A.jsx)(`span`,{style:{display:`block`,fontSize:t?14.5:16,fontWeight:600},children:e.name}),e.role?(0,A.jsx)(`span`,{style:{display:`block`,fontSize:12.5,color:`var(--r-mut)`,lineHeight:1.35},children:e.role}):null]})]})}function x({couple:e,children:t,grandchildren:n}){return(0,A.jsxs)(`div`,{className:`flex flex-col items-center gap-0`,children:[(0,A.jsx)(`div`,{className:`flex items-center gap-10`,children:e.map(e=>(0,A.jsx)(b,{person:e},e.name))}),(0,A.jsx)(`div`,{className:`r-vconn`,style:{minHeight:34,flex:`none`}}),(0,A.jsx)(`div`,{className:`flex flex-wrap justify-center gap-x-12 gap-y-6`,children:t.map(e=>(0,A.jsx)(b,{person:e,compact:!0},e.name))}),n?.length?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:`r-vconn`,style:{minHeight:30,flex:`none`}}),(0,A.jsx)(`div`,{className:`flex flex-wrap justify-center gap-x-10 gap-y-4`,children:n.map(e=>(0,A.jsxs)(`span`,{className:`r-chip`,children:[e.name,e.role?` · ${e.role}`:``]},e.name))})]}):null]})}function S({root:e}){let t=({n:e,top:n})=>(0,A.jsxs)(`div`,{className:`flex min-w-0 flex-col items-center`,children:[(0,A.jsxs)(`div`,{className:`r-node`,style:{minWidth:176,textAlign:`center`},children:[(0,A.jsx)(`div`,{style:{fontSize:n?16:14.5,fontWeight:600},children:e.label}),e.value?(0,A.jsx)(`div`,{className:`r-num mt-1`,style:{fontSize:19,color:`var(--r-accent)`},children:e.value}):null,e.note?(0,A.jsx)(`div`,{className:`r-small mt-1`,style:{fontSize:12},children:e.note}):null]}),e.children?.length?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:`r-vconn`,style:{minHeight:28,flex:`none`}}),(0,A.jsx)(`div`,{className:`flex items-start gap-8`,children:e.children.map(e=>(0,A.jsx)(t,{n:e},e.label))})]}):null]});return(0,A.jsx)(t,{n:e,top:!0})}function C({steps:e}){return(0,A.jsx)(`div`,{className:`flex flex-col`,children:e.map((t,r)=>(0,A.jsxs)(`div`,{className:`flex gap-6`,style:{paddingBottom:r===e.length-1?0:18},children:[(0,A.jsxs)(`div`,{className:`flex flex-col items-center`,children:[(0,A.jsx)(`span`,{className:`r-num`,style:{width:34,height:34,borderRadius:`50%`,border:`1px solid var(--r-line)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:14,color:`var(--r-accent)`,flex:`none`},children:t.n}),r<e.length-1?(0,A.jsx)(`div`,{className:`r-vconn`,style:{minHeight:22}}):null]}),(0,A.jsxs)(`div`,{className:`min-w-0 flex-1 pt-1`,children:[(0,A.jsxs)(`div`,{className:`flex items-baseline justify-between gap-6`,children:[(0,A.jsx)(`span`,{style:{fontSize:16.5,fontWeight:600},children:t.title}),t.value?(0,A.jsx)(`span`,{className:`r-num`,style:{fontSize:20},children:t.value}):null]}),t.body?(0,A.jsx)(n,{className:`mt-1`,children:t.body}):null]})]},t.n))})}function w({rows:e}){return(0,A.jsx)(`div`,{children:e.map(e=>(0,A.jsxs)(`div`,{className:`grid items-baseline gap-6`,style:{gridTemplateColumns:`150px 1fr 170px 110px`,padding:`14px 0`,borderBottom:`1px solid var(--r-line)`},children:[(0,A.jsx)(a,{className:`!mb-0`,children:e.when}),(0,A.jsx)(`span`,{style:{fontSize:16},children:e.what}),(0,A.jsx)(n,{children:e.who??``}),e.status?(0,A.jsx)(`span`,{className:t(`r-chip`,e.status===`now`?`flag`:e.status===`done`?`in`:void 0),children:e.status===`done`?`Complete`:e.status===`now`?`Now`:`Queued`}):(0,A.jsx)(`span`,{})]},e.when+e.what))})}function T({columns:e}){return(0,A.jsx)(`div`,{className:`r-cols`,style:{gridTemplateColumns:`repeat(${e.length}, minmax(0,1fr))`},children:e.map(e=>(0,A.jsxs)(`div`,{children:[(0,A.jsxs)(`div`,{className:t(`r-scen`,e.accent),children:[(0,A.jsx)(`div`,{style:{fontFamily:`var(--r-serif)`,fontSize:24,lineHeight:1.15},children:e.title}),e.sub?(0,A.jsx)(n,{className:`mt-2`,children:e.sub}):null]}),(0,A.jsx)(`ul`,{className:`flex flex-col gap-3`,children:e.points.map(e=>(0,A.jsxs)(`li`,{className:`flex gap-3`,style:{fontSize:14.5,lineHeight:1.5},children:[(0,A.jsx)(`span`,{style:{color:`var(--r-accent)`},children:`—`}),(0,A.jsx)(`span`,{style:{color:`var(--r-mut)`},children:e})]},e))})]},e.title))})}function E({terms:e,columns:t=2}){return(0,A.jsx)(`div`,{className:`grid gap-x-14 gap-y-8`,style:{gridTemplateColumns:`repeat(${t}, minmax(0,1fr))`},children:e.map(e=>(0,A.jsxs)(`div`,{style:{borderTop:`1px solid var(--r-line)`,paddingTop:14},children:[(0,A.jsxs)(`div`,{className:`flex items-baseline gap-3`,children:[(0,A.jsx)(`span`,{style:{fontFamily:`var(--r-serif)`,fontSize:20},children:e.term}),e.abbr?(0,A.jsx)(`span`,{className:`r-chip`,children:e.abbr}):null]}),(0,A.jsx)(n,{className:`mt-2`,children:e.body})]},e.term))})}function D({children:e,attribution:t}){return(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{style:{fontFamily:`var(--r-serif)`,fontSize:`2.6cqw`,lineHeight:1.25,letterSpacing:`-0.015em`,maxWidth:`42ch`},children:e}),t?(0,A.jsx)(a,{className:`mt-6 !mb-0`,children:t}):null]})}function O({items:e}){return(0,A.jsx)(`div`,{className:`r-cols`,style:{gridTemplateColumns:`repeat(${e.length}, minmax(0,1fr))`},children:e.map(e=>(0,A.jsxs)(`div`,{children:[(0,A.jsx)(a,{className:`!mb-2`,children:e.label}),(0,A.jsx)(`div`,{className:`r-num`,style:{fontSize:38,color:e.tone===`accent`?`var(--r-accent)`:e.tone===`accent2`?`var(--r-accent-2)`:e.tone===`warn`?`var(--r-warn)`:`inherit`},children:e.value}),e.sub?(0,A.jsx)(n,{className:`mt-2`,children:e.sub}):null]},e.label))})}function k({items:e}){return(0,A.jsx)(`div`,{children:e.map(e=>(0,A.jsxs)(`div`,{className:`flex items-center gap-5`,style:{padding:`13px 0`,borderBottom:`1px solid var(--r-line)`},children:[(0,A.jsx)(`span`,{style:{width:18,height:18,flex:`none`,borderRadius:3,border:`1px solid ${e.done?`transparent`:`var(--r-line)`}`,background:e.done?`var(--r-accent)`:`transparent`,color:`var(--r-accent-ink)`,fontSize:12,lineHeight:`17px`,textAlign:`center`},children:e.done?`✓`:``}),(0,A.jsx)(`span`,{className:`flex-1`,style:{fontSize:16},children:e.title}),e.owner?(0,A.jsx)(n,{style:{width:150},children:e.owner}):null,e.due?(0,A.jsx)(a,{className:`!mb-0`,children:e.due}):null]},e.title))})}var A;function j(){return(j=m((()=>{s(),o(),A=e(),h.__docgenInfo={description:`Concentric rings + radial wash used on cover and divider slides.`,methods:[],displayName:`CoverField`,props:{rings:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`4`,computed:!1}}}},g.__docgenInfo={description:`Cover block: eyebrow, client name, subtitle, prepared-by line.`,methods:[],displayName:`CoverBlock`,props:{eyebrow:{required:!0,tsType:{name:`string`},description:``},title:{required:!0,tsType:{name:`string`},description:``},subtitle:{required:!1,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``},meta:{required:!1,tsType:{name:`union`,raw:`[string, string] | undefined`,elements:[{name:`tuple`,raw:`[string, string]`,elements:[{name:`string`},{name:`string`}]},{name:`undefined`}]},description:``}}},_.__docgenInfo={description:`Full-bleed section divider with an oversized ghost numeral.`,methods:[],displayName:`SectionDivider`,props:{index:{required:!0,tsType:{name:`string`},description:``},title:{required:!0,tsType:{name:`string`},description:``},blurb:{required:!1,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``},numeralSize:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"20cqw"`,computed:!1}}}},v.__docgenInfo={description:`Table of contents / agenda.`,methods:[],displayName:`Contents`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ n: string; title: string; note?: string }`,signature:{properties:[{key:`n`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}},{key:`note`,value:{name:`string`,required:!1}}]}}],raw:`{ n: string; title: string; note?: string }[]`},description:``},columns:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}}}},b.__docgenInfo={description:``,methods:[],displayName:`PersonNode`,props:{person:{required:!0,tsType:{name:`Person`},description:``},compact:{required:!1,tsType:{name:`boolean`},description:``}}},x.__docgenInfo={description:`Two generations with a vertical connector — the family tree slide.`,methods:[],displayName:`FamilyTree`,props:{couple:{required:!0,tsType:{name:`Array`,elements:[{name:`Person`}],raw:`Person[]`},description:``},children:{required:!0,tsType:{name:`Array`,elements:[{name:`Person`}],raw:`Person[]`},description:``},grandchildren:{required:!1,tsType:{name:`Array`,elements:[{name:`Person`}],raw:`Person[]`},description:``}}},S.__docgenInfo={description:`Ownership / entity structure chart — boxes, vertical arrows, tiers.`,methods:[],displayName:`EntityTree`,props:{root:{required:!0,tsType:{name:`EntityNode`},description:``}}},C.__docgenInfo={description:`Numbered step list with a running spine — "what happens when John dies first".`,methods:[],displayName:`StepList`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ n: string; title: string; body?: string; value?: string }`,signature:{properties:[{key:`n`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}},{key:`body`,value:{name:`string`,required:!1}},{key:`value`,value:{name:`string`,required:!1}}]}}],raw:`{ n: string; title: string; body?: string; value?: string }[]`},description:``}}},w.__docgenInfo={description:`When / what schedule table — deadlines and owners.`,methods:[],displayName:`ScheduleTable`,props:{rows:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ when: string; what: string; who?: string; status?: "done" | "now" | "later" }`,signature:{properties:[{key:`when`,value:{name:`string`,required:!0}},{key:`what`,value:{name:`string`,required:!0}},{key:`who`,value:{name:`string`,required:!1}},{key:`status`,value:{name:`union`,raw:`"done" | "now" | "later"`,elements:[{name:`literal`,value:`"done"`},{name:`literal`,value:`"now"`},{name:`literal`,value:`"later"`}],required:!1}}]}}],raw:`{ when: string; what: string; who?: string; status?: "done" | "now" | "later" }[]`},description:``}}},T.__docgenInfo={description:`Side-by-side comparison — will vs trust, GRAT vs CLAT.`,methods:[],displayName:`ComparisonColumns`,props:{columns:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ title: string; sub?: string; points: string[]; accent?: "a" | "b" }`,signature:{properties:[{key:`title`,value:{name:`string`,required:!0}},{key:`sub`,value:{name:`string`,required:!1}},{key:`points`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}},{key:`accent`,value:{name:`union`,raw:`"a" | "b"`,elements:[{name:`literal`,value:`"a"`},{name:`literal`,value:`"b"`}],required:!1}}]}}],raw:`{ title: string; sub?: string; points: string[]; accent?: "a" | "b" }[]`},description:``}}},E.__docgenInfo={description:`Glossary / educational definitions.`,methods:[],displayName:`Glossary`,props:{terms:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ term: string; abbr?: string; body: string }`,signature:{properties:[{key:`term`,value:{name:`string`,required:!0}},{key:`abbr`,value:{name:`string`,required:!1}},{key:`body`,value:{name:`string`,required:!0}}]}}],raw:`{ term: string; abbr?: string; body: string }[]`},description:``},columns:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}}}},D.__docgenInfo={description:`A pull quote / single-sentence statement slide.`,methods:[],displayName:`PullQuote`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},attribution:{required:!1,tsType:{name:`string`},description:``}}},O.__docgenInfo={description:`Headline KPI band across the top of a slide.`,methods:[],displayName:`KpiBand`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; value: string; sub?: string; tone?: "accent" | "accent2" | "warn" }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`string`,required:!0}},{key:`sub`,value:{name:`string`,required:!1}},{key:`tone`,value:{name:`union`,raw:`"accent" | "accent2" | "warn"`,elements:[{name:`literal`,value:`"accent"`},{name:`literal`,value:`"accent2"`},{name:`literal`,value:`"warn"`}],required:!1}}]}}],raw:`{ label: string; value: string; sub?: string; tone?: "accent" | "accent2" | "warn" }[]`},description:``}}},k.__docgenInfo={description:`Action checklist — the closing "next steps" slide.`,methods:[],displayName:`Checklist`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ title: string; owner?: string; due?: string; done?: boolean }`,signature:{properties:[{key:`title`,value:{name:`string`,required:!0}},{key:`owner`,value:{name:`string`,required:!1}},{key:`due`,value:{name:`string`,required:!1}},{key:`done`,value:{name:`boolean`,required:!1}}]}}],raw:`{ title: string; owner?: string; due?: string; done?: boolean }[]`},description:``}}}})))()}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=m((()=>{l(),o(),p(),j(),u(),M=e(),N={title:`Report Design System/06 Structure & Editorial`,parameters:{layout:`padded`}},P={render:()=>(0,M.jsx)(c,{n:`01`,name:`Cover`,use:`Rings and a radial wash behind the client name. Inverted by default; the light variant is for cost-sensitive printing.`,wide:!0,children:(0,M.jsxs)(`div`,{className:`flex flex-col gap-10`,children:[(0,M.jsxs)(i,{dark:!0,header:[`Estate report`,`Cover`],footer:[`Confidential`,`August 2026`],children:[(0,M.jsx)(h,{}),(0,M.jsx)(g,{eyebrow:`Estate plan review`,title:`John & Jane Doe`,subtitle:`A read of the estate as it stands today, what passes where, and the tax it triggers.`,meta:[`The Doe family`,`August 4, 2026`]})]}),(0,M.jsxs)(i,{header:[`Tax planning`,`Cover`],footer:[`Confidential`,`August 2026`],children:[(0,M.jsx)(h,{}),(0,M.jsx)(g,{eyebrow:`Tax planning report`,title:`Bob & Sally Jones`,subtitle:`2025 as filed, 2026 as planned, and the seven moves in between.`,meta:[`The Jones family`,`August 4, 2026`]})]})]})})},F={name:`Section divider`,render:()=>(0,M.jsx)(c,{n:`02`,name:`Section divider`,use:`One oversized ghost numeral, one line of intent. The only full-bleed slide type.`,wide:!0,children:(0,M.jsx)(i,{dark:!0,header:[`Estate report`,`Section`],footer:[`Distributions`,`12`],children:(0,M.jsx)(_,{index:`03`,title:`Where it goes`,blurb:`Every dollar traced from the estate to the person or institution that receives it.`})})})},I={name:`Contents`,render:()=>(0,M.jsx)(c,{n:`03`,name:`Contents`,use:`Two columns, hairline rows, serif numerals. Doubles as an agenda slide.`,wide:!0,children:(0,M.jsx)(v,{items:[{n:`01`,title:`Estate overview`,note:`What we hold and where it sits`},{n:`02`,title:`Financial position`,note:`Inside versus outside the estate`},{n:`03`,title:`Where it goes`,note:`Distribution by destination`},{n:`04`,title:`Calculators`,note:`GRAT, CLAT, QPRT, state tax`},{n:`05`,title:`Education`,note:`Vehicles and vocabulary`},{n:`06`,title:`Assumptions`,note:`Sources and disclaimer`}]})})},L={name:`Family tree`,render:()=>(0,M.jsx)(c,{n:`04`,name:`Family tree`,use:`Two or three generations with the same arrow language as every other flow in the system.`,wide:!0,children:(0,M.jsx)(x,{couple:[{name:`John Doe`,role:`Grantor · b. 1954`,tone:`accent`},{name:`Jane Doe`,role:`Grantor · b. 1957`,tone:`accent`}],children:[{name:`Michael Doe`,role:`Trustee successor`},{name:`Sarah Doe-Levin`,role:`Beneficiary`},{name:`Thomas Doe`,role:`Beneficiary`}],grandchildren:[{name:`Ava`,role:`GST trust`},{name:`Noah`,role:`GST trust`},{name:`Ruth`,role:`GST trust`}]})})},R={name:`Entity structure`,render:()=>(0,M.jsx)(c,{n:`05`,name:`Entity structure`,use:`Ownership read top-down. Boxes are entities, arrows are control, figures are value.`,dos:[`Ownership and control chains`,`Trust-held entities with values on the node`],donts:[`More than three tiers on one slide — split by branch`],code:`<EntityTree root={{ label: "Doe Family Trust", value: "$131.1M", children: [...] }} />`,wide:!0,children:(0,M.jsx)(S,{root:{label:`Doe Family Trust`,value:`$131.1M`,note:`Irrevocable · 2018`,children:[{label:`Holdco LLC`,value:`$52.4M`,children:[{label:`Operating co.`,value:`$34.1M`},{label:`Minority stakes`,value:`$18.3M`}]},{label:`Ranch LP`,value:`$15.1M`,note:`Illinois situs`},{label:`Marital trust`,value:`$38.6M`}]}})})},z={name:`Step list`,render:()=>(0,M.jsx)(c,{n:`06`,name:`Step list`,use:`Sequenced consequences — what happens first, then next. Values ride on the right rail.`,dos:[`Mortality sequencing — John first, then Jane`,`Any ordered set of consequences`],donts:[`Dated deliverables — use ScheduleTable`],code:`<StepList steps={[{ n: "1", title: "John dies", body: "Marital trust funds", value: "$245.9M" }]} />`,children:(0,M.jsx)(C,{steps:[{n:`1`,title:`John dies first`,body:`Revocable trust becomes irrevocable; assets divide.`,value:`$245.9M`},{n:`2`,title:`Marital trust funded`,body:`Unlimited marital deduction defers all federal tax.`,value:`$131.1M`},{n:`3`,title:`Exemption trust funded`,body:`Funded to $15.0M; growth escapes the second estate.`,value:`$15.0M`},{n:`4`,title:`Jane's estate settles`,body:`Combined federal and Illinois tax comes due.`,value:`$65.6M`}]})})},B={render:()=>(0,M.jsx)(c,{n:`07`,name:`Schedule`,use:`Deadline, action, owner, status. Status is a word, never a colour alone.`,wide:!0,children:(0,M.jsx)(w,{rows:[{when:`Q3 2026 · now`,what:`Open and fund the solo 401(k)`,who:`Client + custodian`,status:`now`},{when:`Q4 2026`,what:`Bunch two years of giving into the DAF`,who:`Advisor`,status:`later`},{when:`Dec 31, 2026`,what:`Make the Illinois PTE election`,who:`CPA`,status:`later`},{when:`Q1 2026`,what:`Restate powers of attorney`,who:`Counsel`,status:`done`}]})})},V={render:()=>(0,M.jsx)(c,{n:`08`,name:`Comparison`,use:`Two vehicles, one decision. Hairline gutter, no cards, no shading.`,wide:!0,children:(0,M.jsx)(T,{columns:[{title:`Will`,sub:`Public, court-supervised`,accent:`b`,points:[`Takes effect only at death`,`Passes through probate and becomes public record`,`Cannot hold assets during incapacity`,`Simplest to draft and amend`]},{title:`Revocable trust`,sub:`Private, trustee-administered`,accent:`a`,points:[`Operates during life, incapacity and after death`,`Avoids probate for assets actually titled to it`,`Keeps terms and values private`,`Requires funding — an unfunded trust does nothing`]}]})})},H={name:`Glossary`,render:()=>(0,M.jsx)(c,{n:`09`,name:`Glossary`,use:`Educational slides use the same hairline rhythm as data slides. Abbreviations get a chip.`,wide:!0,children:(0,M.jsx)(E,{terms:[{term:`Grantor retained annuity trust`,abbr:`GRAT`,body:`The grantor keeps an annuity for a term; growth above the §7520 rate passes to beneficiaries free of gift tax.`},{term:`Charitable lead annuity trust`,abbr:`CLAT`,body:`Charity is paid first for a fixed term; whatever remains passes to family, often at a deeply discounted gift value.`},{term:`Qualified personal residence trust`,abbr:`QPRT`,body:`A residence is transferred at a discounted value while the grantor retains the right to live in it for a term.`},{term:`Generation-skipping transfer tax`,abbr:`GST`,body:`A separate 40% tax on transfers that skip a generation, with its own exemption that must be allocated deliberately.`}]})})},U={render:()=>(0,M.jsx)(c,{n:`10`,name:`KPI band & pull quote`,use:`The two openers. A band of headline figures, or one sentence carrying the whole slide.`,wide:!0,children:(0,M.jsxs)(`div`,{className:`flex flex-col gap-10`,children:[(0,M.jsx)(O,{items:[{label:`Gross estate`,value:`$491.8M`,tone:`accent`},{label:`Combined tax`,value:`$131.1M`,tone:`warn`},{label:`To heirs`,value:`$347.6M`},{label:`To charity`,value:`$13.1M`,tone:`accent2`}]}),(0,M.jsx)(D,{attribution:`Doe family · estate review 2026`,children:`Twenty-seven percent of everything you have built is currently earmarked for the federal and Illinois treasuries. Most of it is optional.`})]})})},W={name:`Checklist`,render:()=>(0,M.jsx)(c,{n:`11`,name:`Checklist`,use:`The closing slide of both decks: agreed actions, owners and dates.`,wide:!0,children:(0,M.jsx)(k,{items:[{title:`Open and fund the solo 401(k)`,owner:`Client + custodian`,due:`Sep 2026`,done:!0},{title:`Restate financial powers of attorney`,owner:`Counsel`,due:`Oct 2026`},{title:`Bunch charitable giving into the DAF`,owner:`Advisor`,due:`Dec 2026`},{title:`File the Illinois PTE election`,owner:`CPA`,due:`Dec 31, 2026`}]})})},G={name:`Slide intro`,render:()=>(0,M.jsx)(c,{n:`12`,name:`Slide intro`,use:`Eyebrow, heading, lede — the three-line opener that starts every interior slide in both modes.`,children:(0,M.jsx)(f,{eyebrow:`Financial position`,title:`Inside versus outside the estate`,lede:`Only assets titled to the revocable trust or held individually are inside the taxable estate. Everything in the irrevocable vehicles sits outside it — and stays outside as it grows.`})})},K={name:`Slide frame, grids, type scale & cover marks`,render:()=>(0,M.jsx)(d,{})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="01" name="Cover" use="Rings and a radial wash behind the client name. Inverted by default; the light variant is for cost-sensitive printing." wide>
      <div className="flex flex-col gap-10">
        <SlideFrame dark header={["Estate report", "Cover"]} footer={["Confidential", "August 2026"]}>
          <CoverField />
          <CoverBlock eyebrow="Estate plan review" title="John & Jane Doe" subtitle="A read of the estate as it stands today, what passes where, and the tax it triggers." meta={["The Doe family", "August 4, 2026"]} />
        </SlideFrame>
        <SlideFrame header={["Tax planning", "Cover"]} footer={["Confidential", "August 2026"]}>
          <CoverField />
          <CoverBlock eyebrow="Tax planning report" title="Bob & Sally Jones" subtitle="2025 as filed, 2026 as planned, and the seven moves in between." meta={["The Jones family", "August 4, 2026"]} />
        </SlideFrame>
      </div>
    </Specimen>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Section divider",
  render: () => <Specimen n="02" name="Section divider" use="One oversized ghost numeral, one line of intent. The only full-bleed slide type." wide>
      <SlideFrame dark header={["Estate report", "Section"]} footer={["Distributions", "12"]}>
        <SectionDivider index="03" title="Where it goes" blurb="Every dollar traced from the estate to the person or institution that receives it." />
      </SlideFrame>
    </Specimen>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Contents",
  render: () => <Specimen n="03" name="Contents" use="Two columns, hairline rows, serif numerals. Doubles as an agenda slide." wide>
      <Contents items={[{
      n: "01",
      title: "Estate overview",
      note: "What we hold and where it sits"
    }, {
      n: "02",
      title: "Financial position",
      note: "Inside versus outside the estate"
    }, {
      n: "03",
      title: "Where it goes",
      note: "Distribution by destination"
    }, {
      n: "04",
      title: "Calculators",
      note: "GRAT, CLAT, QPRT, state tax"
    }, {
      n: "05",
      title: "Education",
      note: "Vehicles and vocabulary"
    }, {
      n: "06",
      title: "Assumptions",
      note: "Sources and disclaimer"
    }]} />
    </Specimen>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Family tree",
  render: () => <Specimen n="04" name="Family tree" use="Two or three generations with the same arrow language as every other flow in the system." wide>
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Entity structure",
  render: () => <Specimen n="05" name="Entity structure" use="Ownership read top-down. Boxes are entities, arrows are control, figures are value." dos={["Ownership and control chains", "Trust-held entities with values on the node"]} donts={["More than three tiers on one slide — split by branch"]} code={\`<EntityTree root={{ label: "Doe Family Trust", value: "$131.1M", children: [...] }} />\`} wide>
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Step list",
  render: () => <Specimen n="06" name="Step list" use="Sequenced consequences — what happens first, then next. Values ride on the right rail." dos={["Mortality sequencing — John first, then Jane", "Any ordered set of consequences"]} donts={["Dated deliverables — use ScheduleTable"]} code={\`<StepList steps={[{ n: "1", title: "John dies", body: "Marital trust funds", value: "$245.9M" }]} />\`}>
      <StepList steps={[{
      n: "1",
      title: "John dies first",
      body: "Revocable trust becomes irrevocable; assets divide.",
      value: "$245.9M"
    }, {
      n: "2",
      title: "Marital trust funded",
      body: "Unlimited marital deduction defers all federal tax.",
      value: "$131.1M"
    }, {
      n: "3",
      title: "Exemption trust funded",
      body: "Funded to $15.0M; growth escapes the second estate.",
      value: "$15.0M"
    }, {
      n: "4",
      title: "Jane's estate settles",
      body: "Combined federal and Illinois tax comes due.",
      value: "$65.6M"
    }]} />
    </Specimen>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="07" name="Schedule" use="Deadline, action, owner, status. Status is a word, never a colour alone." wide>
      <ScheduleTable rows={[{
      when: "Q3 2026 · now",
      what: "Open and fund the solo 401(k)",
      who: "Client + custodian",
      status: "now"
    }, {
      when: "Q4 2026",
      what: "Bunch two years of giving into the DAF",
      who: "Advisor",
      status: "later"
    }, {
      when: "Dec 31, 2026",
      what: "Make the Illinois PTE election",
      who: "CPA",
      status: "later"
    }, {
      when: "Q1 2026",
      what: "Restate powers of attorney",
      who: "Counsel",
      status: "done"
    }]} />
    </Specimen>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="08" name="Comparison" use="Two vehicles, one decision. Hairline gutter, no cards, no shading." wide>
      <ComparisonColumns columns={[{
      title: "Will",
      sub: "Public, court-supervised",
      accent: "b",
      points: ["Takes effect only at death", "Passes through probate and becomes public record", "Cannot hold assets during incapacity", "Simplest to draft and amend"]
    }, {
      title: "Revocable trust",
      sub: "Private, trustee-administered",
      accent: "a",
      points: ["Operates during life, incapacity and after death", "Avoids probate for assets actually titled to it", "Keeps terms and values private", "Requires funding — an unfunded trust does nothing"]
    }]} />
    </Specimen>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Glossary",
  render: () => <Specimen n="09" name="Glossary" use="Educational slides use the same hairline rhythm as data slides. Abbreviations get a chip." wide>
      <Glossary terms={[{
      term: "Grantor retained annuity trust",
      abbr: "GRAT",
      body: "The grantor keeps an annuity for a term; growth above the §7520 rate passes to beneficiaries free of gift tax."
    }, {
      term: "Charitable lead annuity trust",
      abbr: "CLAT",
      body: "Charity is paid first for a fixed term; whatever remains passes to family, often at a deeply discounted gift value."
    }, {
      term: "Qualified personal residence trust",
      abbr: "QPRT",
      body: "A residence is transferred at a discounted value while the grantor retains the right to live in it for a term."
    }, {
      term: "Generation-skipping transfer tax",
      abbr: "GST",
      body: "A separate 40% tax on transfers that skip a generation, with its own exemption that must be allocated deliberately."
    }]} />
    </Specimen>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="10" name="KPI band & pull quote" use="The two openers. A band of headline figures, or one sentence carrying the whole slide." wide>
      <div className="flex flex-col gap-10">
        <KpiBand items={[{
        label: "Gross estate",
        value: "$491.8M",
        tone: "accent"
      }, {
        label: "Combined tax",
        value: "$131.1M",
        tone: "warn"
      }, {
        label: "To heirs",
        value: "$347.6M"
      }, {
        label: "To charity",
        value: "$13.1M",
        tone: "accent2"
      }]} />
        <PullQuote attribution="Doe family · estate review 2026">
          Twenty-seven percent of everything you have built is currently earmarked for the federal
          and Illinois treasuries. Most of it is optional.
        </PullQuote>
      </div>
    </Specimen>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Checklist",
  render: () => <Specimen n="11" name="Checklist" use="The closing slide of both decks: agreed actions, owners and dates." wide>
      <Checklist items={[{
      title: "Open and fund the solo 401(k)",
      owner: "Client + custodian",
      due: "Sep 2026",
      done: true
    }, {
      title: "Restate financial powers of attorney",
      owner: "Counsel",
      due: "Oct 2026"
    }, {
      title: "Bunch charitable giving into the DAF",
      owner: "Advisor",
      due: "Dec 2026"
    }, {
      title: "File the Illinois PTE election",
      owner: "CPA",
      due: "Dec 31, 2026"
    }]} />
    </Specimen>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Slide intro",
  render: () => <Specimen n="12" name="Slide intro" use="Eyebrow, heading, lede — the three-line opener that starts every interior slide in both modes.">
      <SlideIntro eyebrow="Financial position" title="Inside versus outside the estate" lede="Only assets titled to the revocable trust or held individually are inside the taxable estate. Everything in the irrevocable vehicles sits outside it — and stays outside as it grows." />
    </Specimen>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Slide frame, grids, type scale & cover marks",
  render: () => <StructureParts />
}`,...K.parameters?.docs?.source}}},q=[`Cover`,`SectionDividerStory`,`ContentsStory`,`FamilyTreeStory`,`EntityStructureStory`,`StepListStory`,`Schedule`,`Comparison`,`GlossaryStory`,`KpiBandAndPullQuote`,`ChecklistStory`,`SlideIntroStory`,`StructurePartsStory`]})))()}J();export{W as ChecklistStory,V as Comparison,I as ContentsStory,P as Cover,R as EntityStructureStory,L as FamilyTreeStory,H as GlossaryStory,U as KpiBandAndPullQuote,B as Schedule,F as SectionDividerStory,G as SlideIntroStory,z as StepListStory,K as StructurePartsStory,q as __namedExportsOrder,N as default};