import{n as e}from"./iframe-Baufd4UZ.js";import{h as t,i as n,m as r,v as i}from"./primitives-DpgJp73y.js";import{r as a,t as o}from"./specimen-u4n8q164.js";import{n as s,r as c}from"./fixtures-Cgw8W8hE.js";import{c as l,m as u,o as d,u as f,v as p,y as m}from"./charts-narrative-BVkbpJww.js";import{n as h}from"./rolldown-runtime-DkW27tQK.js";var g,_,v,y;function b(){return(b=h((()=>{a(),i(),m(),f(),c(),g=e(),_={title:`Report Design System/07 Slide Patterns`,parameters:{layout:`padded`}},v={name:`Six recurring layouts`,render:()=>(0,g.jsxs)(`div`,{className:`flex flex-col gap-14`,children:[(0,g.jsx)(o,{index:`07`,title:`Slide patterns`,blurb:`Six recurring layouts, built only from the atoms and charts above. These are the shapes both decks are assembled from — swap the style with the toolbar's Report theme control to see any of them re-skinned.`}),(0,g.jsxs)(`div`,{className:`grid gap-10 xl:grid-cols-2`,children:[(0,g.jsxs)(r,{dark:!0,header:[`Estate report`,`Cover`],footer:[`Doe family`,`August 2026`],children:[(0,g.jsx)(n,{children:`Estate plan review`}),(0,g.jsx)(`div`,{style:{fontFamily:`var(--r-serif)`,fontSize:`5.4cqw`,lineHeight:1.02},children:`John & Jane Doe`}),(0,g.jsx)(t,{className:`mt-5`,children:`Prepared August 2026 · planning year 2026`})]}),(0,g.jsxs)(r,{header:[`Tax planning · 2026`,`Statement`],footer:[`Bob & Sally Jones`,`02`],children:[(0,g.jsx)(n,{children:`Projected annual savings`}),(0,g.jsx)(`div`,{className:`r-num`,style:{fontSize:`9cqw`,color:`var(--r-accent)`},children:`$9,770`}),(0,g.jsx)(t,{className:`mt-4 max-w-[44ch]`,children:`Across seven opportunities, four of which close before December 31.`})]}),(0,g.jsxs)(r,{header:[`Composition`,`04`],footer:[`Total income $357,880`,`03`],children:[(0,g.jsx)(n,{children:`Where it came from`}),(0,g.jsx)(u,{parts:s,height:26})]}),(0,g.jsxs)(r,{header:[`Build-up`,`07`],footer:[`Calculation walk`,`07`],children:[(0,g.jsx)(n,{children:`How the tax is built`}),(0,g.jsx)(p,{items:[{label:`Wages`,value:212400},{label:`Business`,value:78200},{label:`Investment`,value:58080},{label:`Adjustments`,value:-29300},{label:`Taxable`,value:319380,kind:`total`}]})]}),(0,g.jsxs)(r,{dark:!0,header:[`Distribution`,`11`],footer:[`Doe Family Trust`,`11`],children:[(0,g.jsx)(n,{children:`Where it goes`}),(0,g.jsx)(d,{source:{label:`Trust corpus`,value:624e5},targets:[{label:`Marital share`,value:312e5},{label:`Children`,value:187e5},{label:`Grandchildren`,value:83e5},{label:`Charity`,value:42e5}]})]}),(0,g.jsxs)(r,{header:[`Sequencing`,`18`],footer:[`Next twelve months`,`18`],children:[(0,g.jsx)(n,{children:`What happens when`}),(0,g.jsx)(l,{items:[{period:`Q3 2026`,title:`Open plan`,done:!0},{period:`Q4 2026`,title:`Fund deferral`},{period:`Q1 2027`,title:`File return`},{period:`Q2 2027`,title:`PTE prepay`}]})]})]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Six recurring layouts",
  render: () => <div className="flex flex-col gap-14">
      <SectionHead index="07" title="Slide patterns" blurb="Six recurring layouts, built only from the atoms and charts above. These are the shapes both decks are assembled from — swap the style with the toolbar's Report theme control to see any of them re-skinned." />
      <div className="grid gap-10 xl:grid-cols-2">
        <SlideFrame dark header={["Estate report", "Cover"]} footer={["Doe family", "August 2026"]}>
          <Eyebrow>Estate plan review</Eyebrow>
          <div style={{
          fontFamily: "var(--r-serif)",
          fontSize: "5.4cqw",
          lineHeight: 1.02
        }}>
            John &amp; Jane Doe
          </div>
          <Small className="mt-5">Prepared August 2026 · planning year 2026</Small>
        </SlideFrame>

        <SlideFrame header={["Tax planning · 2026", "Statement"]} footer={["Bob & Sally Jones", "02"]}>
          <Eyebrow>Projected annual savings</Eyebrow>
          <div className="r-num" style={{
          fontSize: "9cqw",
          color: "var(--r-accent)"
        }}>
            $9,770
          </div>
          <Small className="mt-4 max-w-[44ch]">
            Across seven opportunities, four of which close before December 31.
          </Small>
        </SlideFrame>

        <SlideFrame header={["Composition", "04"]} footer={["Total income $357,880", "03"]}>
          <Eyebrow>Where it came from</Eyebrow>
          <ProportionBand parts={INCOME} height={26} />
        </SlideFrame>

        <SlideFrame header={["Build-up", "07"]} footer={["Calculation walk", "07"]}>
          <Eyebrow>How the tax is built</Eyebrow>
          <WaterfallChart items={[{
          label: "Wages",
          value: 212400
        }, {
          label: "Business",
          value: 78200
        }, {
          label: "Investment",
          value: 58080
        }, {
          label: "Adjustments",
          value: -29300
        }, {
          label: "Taxable",
          value: 319380,
          kind: "total"
        }]} />
        </SlideFrame>

        <SlideFrame dark header={["Distribution", "11"]} footer={["Doe Family Trust", "11"]}>
          <Eyebrow>Where it goes</Eyebrow>
          <SankeyFlow source={{
          label: "Trust corpus",
          value: 62400000
        }} targets={[{
          label: "Marital share",
          value: 31200000
        }, {
          label: "Children",
          value: 18700000
        }, {
          label: "Grandchildren",
          value: 8300000
        }, {
          label: "Charity",
          value: 4200000
        }]} />
        </SlideFrame>

        <SlideFrame header={["Sequencing", "18"]} footer={["Next twelve months", "18"]}>
          <Eyebrow>What happens when</Eyebrow>
          <TimelineSpine items={[{
          period: "Q3 2026",
          title: "Open plan",
          done: true
        }, {
          period: "Q4 2026",
          title: "Fund deferral"
        }, {
          period: "Q1 2027",
          title: "File return"
        }, {
          period: "Q2 2027",
          title: "PTE prepay"
        }]} />
        </SlideFrame>
      </div>
    </div>
}`,...v.parameters?.docs?.source}}},y=[`SixRecurringLayouts`]})))()}b();export{v as SixRecurringLayouts,y as __namedExportsOrder,_ as default};