import{n as e}from"./iframe-C5oNlvTP.js";import{S as t,T as n,c as r,d as i,h as a,m as o,n as s,p as c,r as l,y as u}from"./specimen-Byy694Pw.js";import{o as d,t as f,u as p,w as m,x as h}from"./deck-parts-D3ExgPo2.js";import{n as g}from"./rolldown-runtime-DkW27tQK.js";var _,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=g((()=>{l(),n(),m(),_=e(),v={title:`Report Design System/01 Foundations`,parameters:{layout:`padded`}},y=[[`--r-paper`,`page field`],[`--r-paper-2`,`secondary field`],[`--r-panel`,`card surface`],[`--r-ink`,`primary text`],[`--r-mut`,`secondary text`],[`--r-line`,`hairlines & rules`],[`--r-accent`,`primary accent`],[`--r-accent-2`,`supporting accent`],[`--r-accent-3`,`highlight / gold`],[`--r-warn`,`negative figures`],[`--r-dark`,`inverted section`],[`--r-dark-accent`,`accent on dark`]],b={render:()=>(0,_.jsx)(s,{n:`01`,name:`Colour tokens`,use:`Semantic, never literal. Components never name a hex.`,children:(0,_.jsx)(`div`,{className:`grid grid-cols-2 gap-5 md:grid-cols-4`,children:y.map(([e,n])=>(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{style:{height:62,background:`var(${e})`,border:`1px solid var(--r-line)`,borderRadius:`var(--r-radius)`}}),(0,_.jsx)(`code`,{style:{display:`block`,marginTop:9,fontFamily:`var(--r-mono)`,fontSize:11.5},children:e}),(0,_.jsx)(t,{style:{fontSize:11.5},children:n})]},e))})})},x={render:()=>(0,_.jsx)(s,{n:`02`,name:`Series palette`,use:`Six ordered chart colours, ranked by emphasis, safe on light and dark.`,children:(0,_.jsx)(`div`,{className:`flex gap-3`,children:u.map((e,t)=>(0,_.jsxs)(`div`,{className:`flex-1`,children:[(0,_.jsx)(`div`,{style:{height:74,background:e,borderRadius:`var(--r-radius)`}}),(0,_.jsxs)(`code`,{style:{fontFamily:`var(--r-mono)`,fontSize:11},children:[`c`,t+1]})]},e))})})},S={render:()=>(0,_.jsx)(s,{n:`03`,name:`Type scale`,use:`Serif for figures and headlines, grotesque for labels and UI. Numerals are always tabular.`,selectors:[`h1`,`h2`,`h3`,`.lede`,`.lbl`,`.eyebrow`,`.small`],children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,_.jsx)(c,{level:1,children:`$131.1M taxable estate`}),(0,_.jsx)(c,{level:2,children:`Where the money goes`}),(0,_.jsx)(c,{level:3,children:`Doe Family Irrevocable Trust`}),(0,_.jsx)(a,{children:`Lede copy sits at 18px with generous leading and a 64-character measure, so a slide never turns into a paragraph of small print.`}),(0,_.jsxs)(`div`,{className:`flex flex-wrap items-baseline gap-8`,children:[(0,_.jsx)(o,{children:`Label · 11.5px`}),(0,_.jsx)(i,{children:`Eyebrow · 12px`}),(0,_.jsx)(t,{children:`Small · 13.5px caption and footnote text`})]})]})})},C={render:()=>(0,_.jsx)(s,{n:`04`,name:`Vertical rhythm`,use:`Eyebrows and labels carry built-in bottom margin so they can never touch the figure below them.`,selectors:[`.eyebrow`,`.num`],children:(0,_.jsxs)(`div`,{className:`grid gap-10 md:grid-cols-2`,children:[(0,_.jsx)(r,{eyebrow:`2025 federal tax`,value:`$51,505`,size:`md`}),(0,_.jsx)(r,{eyebrow:`SALT paid above the cap`,value:`$45,150`,size:`md`,tone:`warn`,caption:`Locked-in clearance under every eyebrow — the collision class of bug, fixed once in the token layer.`})]})})},w={render:()=>(0,_.jsx)(p,{})},T={name:`Type scale in place`,render:()=>(0,_.jsx)(h,{})},E={name:`Cover marks & grounds`,render:()=>(0,_.jsx)(d,{})},D={name:`Accent & series token uses`,render:()=>(0,_.jsx)(f,{})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="01" name="Colour tokens" use="Semantic, never literal. Components never name a hex.">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {TOKENS.map(([v, use]) => <div key={v}>
            <div style={{
          height: 62,
          background: \`var(\${v})\`,
          border: "1px solid var(--r-line)",
          borderRadius: "var(--r-radius)"
        }} />
            <code style={{
          display: "block",
          marginTop: 9,
          fontFamily: "var(--r-mono)",
          fontSize: 11.5
        }}>
              {v}
            </code>
            <Small style={{
          fontSize: 11.5
        }}>{use}</Small>
          </div>)}
      </div>
    </Specimen>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="02" name="Series palette" use="Six ordered chart colours, ranked by emphasis, safe on light and dark.">
      <div className="flex gap-3">
        {SERIES.map((c, i) => <div key={c} className="flex-1">
            <div style={{
          height: 74,
          background: c,
          borderRadius: "var(--r-radius)"
        }} />
            <code style={{
          fontFamily: "var(--r-mono)",
          fontSize: 11
        }}>c{i + 1}</code>
          </div>)}
      </div>
    </Specimen>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="03" name="Type scale" use="Serif for figures and headlines, grotesque for labels and UI. Numerals are always tabular." selectors={["h1", "h2", "h3", ".lede", ".lbl", ".eyebrow", ".small"]}>
      <div className="flex flex-col gap-5">
        <Heading level={1}>$131.1M taxable estate</Heading>
        <Heading level={2}>Where the money goes</Heading>
        <Heading level={3}>Doe Family Irrevocable Trust</Heading>
        <Lede>
          Lede copy sits at 18px with generous leading and a 64-character measure, so a slide never
          turns into a paragraph of small print.
        </Lede>
        <div className="flex flex-wrap items-baseline gap-8">
          <Label>Label · 11.5px</Label>
          <Eyebrow>Eyebrow · 12px</Eyebrow>
          <Small>Small · 13.5px caption and footnote text</Small>
        </div>
      </div>
    </Specimen>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="04" name="Vertical rhythm" use="Eyebrows and labels carry built-in bottom margin so they can never touch the figure below them." selectors={[".eyebrow", ".num"]}>
      <div className="grid gap-10 md:grid-cols-2">
        <BigFigure eyebrow="2025 federal tax" value="$51,505" size="md" />
        <BigFigure eyebrow="SALT paid above the cap" value="$45,150" size="md" tone="warn" caption="Locked-in clearance under every eyebrow — the collision class of bug, fixed once in the token layer." />
      </div>
    </Specimen>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <GridsSpecimen />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Type scale in place",
  render: () => <TypeScaleInPlaceSpecimen />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Cover marks & grounds",
  render: () => <CoverMarksGroundsSpecimen />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Accent & series token uses",
  render: () => <AccentSeriesTokenSpecimen />
}`,...D.parameters?.docs?.source}}},O=[`ColourTokens`,`SeriesPalette`,`TypeScale`,`VerticalRhythm`,`Grids`,`TypeScaleInPlace`,`CoverMarksGrounds`,`AccentSeriesTokenUses`]})))()}k();export{D as AccentSeriesTokenUses,b as ColourTokens,E as CoverMarksGrounds,w as Grids,x as SeriesPalette,S as TypeScale,T as TypeScaleInPlace,C as VerticalRhythm,O as __namedExportsOrder,v as default};