import{n as e}from"./iframe-Baufd4UZ.js";import{n as t,r as n}from"./specimen-u4n8q164.js";import{f as r,i,l as a,u as o,y as s}from"./charts-narrative-BVkbpJww.js";import{_ as c,c as l,x as u}from"./charts-extended-ZbRFNk-_.js";import{m as d,o as f,r as p,u as m}from"./charts-more-BidlV6a3.js";import{n as h}from"./rolldown-runtime-DkW27tQK.js";var g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=h((()=>{n(),s(),o(),u(),d(),g=e(),_={title:`Report Design System/05 Estate Bonus Visualizations`,parameters:{layout:`padded`,docs:{description:{component:`The 8 Estate-only visualizations from the "Presentation Polish (part 2)"
export (public/reports/estate-viz.html, pages 09-16) that go beyond the 5
Tax V2 / 3 Estate V2 shapes ported into the RBV2 narrative decks. These are
one-off deep dives specific to the Doe family estate reference deck, kept
here as Storybook specimens rather than registered RBV2 slides.`}}}},v={name:`Beneficiary ribbon`,render:()=>(0,g.jsx)(t,{n:`39`,name:`Beneficiary ribbon`,use:`Every dollar, from today to the second death — one scale across all three columns. The middle column is what the documents create at the first death; the right column is who finally holds it.`,wide:!0,children:(0,g.jsx)(i,{stages:[{caption:`TODAY`,nodes:[{label:`Estimated total estate`,value:4918e5}]},{caption:`AT FIRST DEATH`,nodes:[{label:`Marital Trust`,value:2262e5},{label:`Family / exemption trust`,value:15e6},{label:`Irrevocable trusts (outside)`,value:1478e5},{label:`Charitable (CLAT)`,value:47e5},{label:`Outright & TOD`,value:981e5}],links:[{from:0,to:0,value:2262e5},{from:0,to:1,value:15e6},{from:0,to:2,value:1478e5},{from:0,to:3,value:47e5},{from:0,to:4,value:981e5}]},{caption:`AT SECOND DEATH`,nodes:[{label:`Daniel & Andrew Doe`,value:2105e5},{label:`Grandchildren / dynasty`,value:446e5},{label:`Charity`,value:177e5},{label:`Estate & state tax`,value:1311e5},{label:`Spouse's lifetime use`,value:879e5}],links:[{from:0,to:4,value:879e5},{from:0,to:3,value:1311e5},{from:0,to:0,value:72e5},{from:1,to:1,value:15e6},{from:2,to:0,value:1478e5},{from:3,to:2,value:47e5},{from:4,to:0,value:555e5},{from:4,to:1,value:296e5},{from:4,to:2,value:13e6}]}]})})},y={name:`Beneficiaries by area`,render:()=>(0,g.jsx)(t,{n:`40`,name:`Beneficiaries by area`,use:`Every second-death recipient scaled by area. Reads for what the tax claim is: larger than either son's share.`,wide:!0,children:(0,g.jsx)(a,{items:[{label:`Estate & state tax`,value:1311e5},{label:`Andrew Doe`,value:1053e5},{label:`Daniel Doe`,value:1052e5},{label:`Spouse's use`,value:879e5},{label:`Grandchildren`,value:446e5},{label:`Charity`,value:177e5}]})})},b={name:`Eight trusts to scale`,render:()=>(0,g.jsx)(t,{n:`41`,name:`Eight trusts to scale`,use:`Dot position is value. The revocable trust dominates the picture — and offers no exclusion at all.`,wide:!0,children:(0,g.jsx)(l,{rows:[{label:`Doe Family Trust`,value:2e8},{label:`Doe 2020-A GRAT`,value:384e5},{label:`Doe 2020-B GRAT`,value:317e5},{label:`Daniel Doe Irrevocable`,value:129e5},{label:`Andrew Doe Irrevocable`,value:116e5},{label:`Doe ILIT`,value:98e5},{label:`Doe Dynasty Trust`,value:82e5},{label:`Doe CLAT (2022)`,value:49e5}]})})},x={name:`Fiduciary matrix`,render:()=>(0,g.jsx)(t,{n:`42`,name:`Fiduciary matrix`,use:`One dot per named fiduciary. Read down a column for single points of failure — no protector is named on six of eight trusts.`,wide:!0,children:(0,g.jsx)(f,{roles:[`Trustee`,`Successor`,`Investment`,`Distribution`,`Protector`],legend:[{tone:`a`,label:`John Doe`},{tone:`b`,label:`Jane Doe`},{tone:`corporate`,label:`Corporate trustee`},{tone:`child`,label:`Son`}],rows:[{entity:`Doe Family Trust`,holders:[{name:`John & Jane Doe`,tone:`a`},{name:`Jane Doe`,tone:`b`},{name:`Corporate trustee`,tone:`corporate`},{name:`John Doe`,tone:`a`},null]},{entity:`Doe 2020-A GRAT`,holders:[{name:`John Doe`,tone:`a`},{name:`Jane Doe`,tone:`b`},{name:`John Doe`,tone:`a`},{name:`John Doe`,tone:`a`},null]},{entity:`Doe 2020-B GRAT`,holders:[{name:`Jane Doe`,tone:`b`},{name:`John Doe`,tone:`a`},{name:`Jane Doe`,tone:`b`},{name:`Jane Doe`,tone:`b`},null]},{entity:`Daniel Doe Irrev.`,holders:[{name:`Corporate trustee`,tone:`corporate`},{name:`Son`,tone:`child`},{name:`Corporate trustee`,tone:`corporate`},{name:`Corporate trustee`,tone:`corporate`},null]},{entity:`Andrew Doe Irrev.`,holders:[{name:`Corporate trustee`,tone:`corporate`},{name:`Son`,tone:`child`},{name:`Corporate trustee`,tone:`corporate`},{name:`Corporate trustee`,tone:`corporate`},null]},{entity:`Doe Dynasty Trust`,holders:[{name:`Corporate trustee`,tone:`corporate`},null,{name:`Corporate trustee`,tone:`corporate`},{name:`Corporate trustee`,tone:`corporate`},{name:`Son`,tone:`child`}]},{entity:`Doe CLAT`,holders:[{name:`John Doe`,tone:`a`},{name:`Jane Doe`,tone:`b`},{name:`Corporate trustee`,tone:`corporate`},null,null]},{entity:`Doe ILIT`,holders:[{name:`Jane Doe`,tone:`b`},{name:`Corporate trustee`,tone:`corporate`},{name:`Corporate trustee`,tone:`corporate`},{name:`Jane Doe`,tone:`b`},null]}]})})},S={name:`Radial genogram`,render:()=>(0,g.jsx)(t,{n:`43`,name:`Radial genogram`,use:`Distance from centre is generation. Every arc on the outer ring is a GST-exempt taker.`,wide:!0,children:(0,g.jsx)(m,{center:[{label:`John Doe`,sublabel:``},{label:`Jane Doe`,sublabel:``}],ring1:[{label:`Daniel Doe`,parent:0},{label:`Andrew Doe`,parent:0},{label:`Claire Doe-Reyes`,parent:1}],ring2:[{label:`Ella`,parent:0},{label:`Marcus`,parent:0},{label:`Ivy`,parent:1},{label:`Theo`,parent:2},{label:`Ruth`,parent:2}]})})},C={name:`Document register`,render:()=>(0,g.jsx)(t,{n:`44`,name:`Document register`,use:`One tile per document. Dashed tiles are the difference between an estimate and a plan.`,wide:!0,children:(0,g.jsx)(p,{items:[{label:`Joint revocable trust`,status:`collected`},{label:`Will — John`,status:`collected`},{label:`Will — Jane`,status:`collected`},{label:`2020-A GRAT`,status:`collected`},{label:`2020-B GRAT`,status:`collected`},{label:`Daniel Doe trust`,status:`collected`},{label:`Andrew Doe trust`,status:`collected`},{label:`Dynasty trust`,status:`collected`},{label:`CLAT agreement`,status:`collected`},{label:`POA — John`,status:`collected`},{label:`Form 709 history`,status:`outstanding`},{label:`ILIT policy`,status:`outstanding`},{label:`Healthcare directives`,status:`outstanding`}]})})},w={name:`What's missing`,render:()=>(0,g.jsx)(t,{n:`45`,name:`What's missing`,use:`The pale dot is dollars currently exposed; the accent dot is where they'd sit with the structure in place. The distance is the argument.`,wide:!0,children:(0,g.jsx)(r,{aLabel:`Exposed today`,bLabel:`With structure in place`,rows:[{label:`QPRT — Illinois residence`,a:363e5,b:279e5},{label:`Spousal lifetime access trust`,a:262e5,b:146e5},{label:`Charitable remainder trust`,a:22e6,b:159e5},{label:`Family LLC recapitalisation`,a:523e5,b:424e5},{label:`Donor-advised fund`,a:6e6,b:36e5},{label:`Directed trust — South Dakota`,a:2e8,b:1873e5}]})})},T={name:`Twelve-month sequence`,render:()=>(0,g.jsx)(t,{n:`46`,name:`Twelve-month sequence`,use:`A second arc calendar — the document and funding sequence, read clockwise from today.`,wide:!0,children:(0,g.jsx)(c,{centerLabel:`7 dates · Aug 2026 – Jul 2027`,months:[`Aug`,`Sep`,`Oct`,`Nov`,`Dec`,`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`],events:[{month:0,label:`Request Form 709 history`,weight:1},{month:1,label:`Collect ILIT policy statement`,weight:.85},{month:2,label:`Execute healthcare directives`,weight:.7},{month:4,label:`Annual exclusion gifts — $19k × 10`,weight:.55},{month:4,label:`GRAT term review before 2027`,weight:.95},{month:7,label:`Fund CLAT annuity payment`,weight:.75},{month:10,label:`Revalue closely held interests`,weight:.6}]})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Beneficiary ribbon",
  render: () => <Specimen n="39" name="Beneficiary ribbon" use="Every dollar, from today to the second death — one scale across all three columns. The middle column is what the documents create at the first death; the right column is who finally holds it." wide>
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Beneficiaries by area",
  render: () => <Specimen n="40" name="Beneficiaries by area" use="Every second-death recipient scaled by area. Reads for what the tax claim is: larger than either son's share." wide>
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Eight trusts to scale",
  render: () => <Specimen n="41" name="Eight trusts to scale" use="Dot position is value. The revocable trust dominates the picture — and offers no exclusion at all." wide>
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Fiduciary matrix",
  render: () => <Specimen n="42" name="Fiduciary matrix" use="One dot per named fiduciary. Read down a column for single points of failure — no protector is named on six of eight trusts." wide>
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Radial genogram",
  render: () => <Specimen n="43" name="Radial genogram" use="Distance from centre is generation. Every arc on the outer ring is a GST-exempt taker." wide>
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Document register",
  render: () => <Specimen n="44" name="Document register" use="One tile per document. Dashed tiles are the difference between an estimate and a plan." wide>
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "What's missing",
  render: () => <Specimen n="45" name="What's missing" use="The pale dot is dollars currently exposed; the accent dot is where they'd sit with the structure in place. The distance is the argument." wide>
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Twelve-month sequence",
  render: () => <Specimen n="46" name="Twelve-month sequence" use="A second arc calendar — the document and funding sequence, read clockwise from today." wide>
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
}`,...T.parameters?.docs?.source}}},E=[`BeneficiaryRibbon`,`BeneficiaryTreemap`,`EightTrusts`,`FiduciaryMatrixStory`,`RadialGenogramStory`,`DocumentRegisterStory`,`WhatsMissing`,`TwelveMonthSequence`]})))()}D();export{v as BeneficiaryRibbon,y as BeneficiaryTreemap,C as DocumentRegisterStory,b as EightTrusts,x as FiduciaryMatrixStory,S as RadialGenogramStory,T as TwelveMonthSequence,w as WhatsMissing,E as __namedExportsOrder,_ as default};