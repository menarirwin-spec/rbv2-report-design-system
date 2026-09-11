import{n as e}from"./iframe-Baufd4UZ.js";import{c as t,f as n,h as r,i,o as a,s as o,t as s,v as c}from"./primitives-DpgJp73y.js";import{n as l,r as u}from"./specimen-u4n8q164.js";import{n as d}from"./rolldown-runtime-DkW27tQK.js";var f,p,m,h,g,_,v,y;function b(){return(b=d((()=>{u(),c(),f=e(),p={title:`Report Design System/01 Foundations`,parameters:{layout:`padded`}},m=[[`--r-paper`,`page field`],[`--r-paper-2`,`secondary field`],[`--r-panel`,`card surface`],[`--r-ink`,`primary text`],[`--r-mut`,`secondary text`],[`--r-line`,`hairlines & rules`],[`--r-accent`,`primary accent`],[`--r-accent-2`,`supporting accent`],[`--r-accent-3`,`highlight / gold`],[`--r-warn`,`negative figures`],[`--r-dark`,`inverted section`],[`--r-dark-accent`,`accent on dark`]],h={render:()=>(0,f.jsx)(l,{n:`01`,name:`Colour tokens`,use:`Semantic, never literal. Components never name a hex.`,children:(0,f.jsx)(`div`,{className:`grid grid-cols-2 gap-5 md:grid-cols-4`,children:m.map(([e,t])=>(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{height:62,background:`var(${e})`,border:`1px solid var(--r-line)`,borderRadius:`var(--r-radius)`}}),(0,f.jsx)(`code`,{style:{display:`block`,marginTop:9,fontFamily:`var(--r-mono)`,fontSize:11.5},children:e}),(0,f.jsx)(r,{style:{fontSize:11.5},children:t})]},e))})})},g={render:()=>(0,f.jsx)(l,{n:`02`,name:`Series palette`,use:`Six ordered chart colours, ranked by emphasis, safe on light and dark.`,children:(0,f.jsx)(`div`,{className:`flex gap-3`,children:n.map((e,t)=>(0,f.jsxs)(`div`,{className:`flex-1`,children:[(0,f.jsx)(`div`,{style:{height:74,background:e,borderRadius:`var(--r-radius)`}}),(0,f.jsxs)(`code`,{style:{fontFamily:`var(--r-mono)`,fontSize:11},children:[`c`,t+1]})]},e))})})},_={render:()=>(0,f.jsx)(l,{n:`03`,name:`Type scale`,use:`Serif for figures and headlines, grotesque for labels and UI. Numerals are always tabular.`,children:(0,f.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,f.jsx)(a,{level:1,children:`$131.1M taxable estate`}),(0,f.jsx)(a,{level:2,children:`Where the money goes`}),(0,f.jsx)(a,{level:3,children:`Doe Family Irrevocable Trust`}),(0,f.jsx)(t,{children:`Lede copy sits at 18px with generous leading and a 64-character measure, so a slide never turns into a paragraph of small print.`}),(0,f.jsxs)(`div`,{className:`flex flex-wrap items-baseline gap-8`,children:[(0,f.jsx)(o,{children:`Label · 11.5px`}),(0,f.jsx)(i,{children:`Eyebrow · 12px`}),(0,f.jsx)(r,{children:`Small · 13.5px caption and footnote text`})]})]})})},v={render:()=>(0,f.jsx)(l,{n:`04`,name:`Vertical rhythm`,use:`Eyebrows and labels carry built-in bottom margin so they can never touch the figure below them.`,children:(0,f.jsxs)(`div`,{className:`grid gap-10 md:grid-cols-2`,children:[(0,f.jsx)(s,{eyebrow:`2025 federal tax`,value:`$51,505`,size:`md`}),(0,f.jsx)(s,{eyebrow:`SALT paid above the cap`,value:`$45,150`,size:`md`,tone:`warn`,caption:`Locked-in clearance under every eyebrow — the collision class of bug, fixed once in the token layer.`})]})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="03" name="Type scale" use="Serif for figures and headlines, grotesque for labels and UI. Numerals are always tabular.">
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="04" name="Vertical rhythm" use="Eyebrows and labels carry built-in bottom margin so they can never touch the figure below them.">
      <div className="grid gap-10 md:grid-cols-2">
        <BigFigure eyebrow="2025 federal tax" value="$51,505" size="md" />
        <BigFigure eyebrow="SALT paid above the cap" value="$45,150" size="md" tone="warn" caption="Locked-in clearance under every eyebrow — the collision class of bug, fixed once in the token layer." />
      </div>
    </Specimen>
}`,...v.parameters?.docs?.source}}},y=[`ColourTokens`,`SeriesPalette`,`TypeScale`,`VerticalRhythm`]})))()}b();export{h as ColourTokens,g as SeriesPalette,_ as TypeScale,v as VerticalRhythm,y as __namedExportsOrder,p as default};