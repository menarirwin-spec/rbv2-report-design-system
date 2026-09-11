import{n as e}from"./iframe-Baufd4UZ.js";import{n as t,r as n}from"./specimen-u4n8q164.js";import{d as r,f as i,g as a,l as o,m as s,p as c,r as l,u,x as d}from"./charts-extended-ZbRFNk-_.js";import{n as f}from"./rolldown-runtime-DkW27tQK.js";var p,m,h,g,_;function v(){return(v=f((()=>{n(),d(),p=e(),m={title:`Report Design System/09 Tax Bonus Visualizations`,parameters:{layout:`padded`,docs:{description:{component:`Two Tax V2 visualizations from the "Presentation Polish (part 2)" export
(public/reports/tax-viz.html) that weren't reproduced anywhere else in
this catalog: the effort-vs-impact quadrant scatter ("Where to start")
and the composed six-glyph legend slide ("How to read this deck"). Kept
here as Storybook specimens rather than registered RBV2 slides, matching
the estateBonusViz.stories.tsx precedent for one-off source deep dives.`}}}},h={name:`Effort vs. impact`,render:()=>(0,p.jsx)(t,{n:`47`,name:`Effort vs. impact`,use:`Upper-left is the prize: real dollars, little friction. Bubble size doubles as a second read of annual dollars saved.`,wide:!0,children:(0,p.jsx)(a,{xLabel:`Effort to implement`,yLabel:`Annual dollars saved`,xBands:[`Low`,`Moderate`,`Involved`,`Advisor-led`],yGridlines:[750,1500,2250,3e3],points:[{label:`CA PTE election`,band:3.2,value:2232,tone:`accent`},{label:`Solo 401(k)`,band:2.6,value:2640,tone:`accent`},{label:`Family HSA`,band:1.3,value:2052,tone:`accent3`},{label:`DAF bunching`,band:1.9,value:1800,tone:`accent3`},{label:`Backdoor Roth`,band:1.6,value:1500,tone:`accent3`},{label:`Loss harvesting`,band:1.1,value:1046,tone:`accent2`},{label:`S-corp comp review`,band:2.5,value:750,tone:`muted`}]})})},g={name:`Chart-key legend`,render:()=>(0,p.jsx)(t,{n:`48`,name:`Chart-key legend`,use:`Borrowed from the grammar of Schwabish, Lima, Tufte and Lupi — every chart in a deck uses one of these six encodings, and nothing is decorative. Icons here are illustrative sketches, not live instances of the real components.`,wide:!0,children:(0,p.jsx)(l,{items:[{icon:(0,p.jsx)(c,{}),name:`Sunburst`,description:`Angle is share of income. Ring depth is how far a dollar travels from its source.`},{icon:(0,p.jsx)(i,{}),name:`Ribbon flow`,description:`Width equals dollars. Where a ribbon narrows, a deduction removed money from the taxable base.`},{icon:(0,p.jsx)(s,{}),name:`Waffle`,description:`One hundred squares, one per percent. Fill tells you what share of a total was actually usable.`},{icon:(0,p.jsx)(r,{}),name:`Glyph`,description:`Each move gets a petal per attribute: size = dollars, spokes = effort, ring = deadline pressure.`},{icon:(0,p.jsx)(o,{}),name:`Arc calendar`,description:`Twelve months bent into a circle. Radius marks the deadline; the arc shows how long you have.`},{icon:(0,p.jsx)(u,{}),name:`Cascade`,description:`Each bar is one decision. The floor drops step by step from what you paid to what you could pay.`}]})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Effort vs. impact",
  render: () => <Specimen n="47" name="Effort vs. impact" use="Upper-left is the prize: real dollars, little friction. Bubble size doubles as a second read of annual dollars saved." wide>
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Chart-key legend",
  render: () => <Specimen n="48" name="Chart-key legend" use="Borrowed from the grammar of Schwabish, Lima, Tufte and Lupi — every chart in a deck uses one of these six encodings, and nothing is decorative. Icons here are illustrative sketches, not live instances of the real components." wide>
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
}`,...g.parameters?.docs?.source}}},_=[`EffortVsImpact`,`ChartKeyLegend`]})))()}v();export{g as ChartKeyLegend,h as EffortVsImpact,_ as __namedExportsOrder,m as default};