import{n as e}from"./iframe-Baufd4UZ.js";import{a as t,h as n,i as r,m as i,n as a,o,r as s,s as c,v as l}from"./primitives-DpgJp73y.js";import{n as u,r as d}from"./specimen-u4n8q164.js";import{a as f,n as p}from"./deck-parts-DNfPY8S8.js";import{n as m}from"./rolldown-runtime-DkW27tQK.js";var h,g,_,v,y,b,x,S;function C(){return(C=m((()=>{d(),l(),f(),h=e(),g={title:`Report Design System/03 Components`,parameters:{layout:`padded`}},_={render:()=>(0,h.jsx)(u,{n:`01`,name:`Cards`,use:`Panel, accent panel, and dark-inverted panel.`,children:(0,h.jsxs)(`div`,{className:`grid gap-6 md:grid-cols-3`,children:[(0,h.jsxs)(a,{children:[(0,h.jsx)(c,{children:`In your plan`}),(0,h.jsx)(o,{level:3,children:`Revocable living trust`}),(0,h.jsx)(n,{className:`mt-3`,children:`Funded 2019. Pour-over will executed alongside.`})]}),(0,h.jsxs)(a,{accent:!0,children:[(0,h.jsx)(c,{children:`Watch item`}),(0,h.jsx)(o,{level:3,children:`Beneficiary mismatch`}),(0,h.jsx)(n,{className:`mt-3`,children:`Retirement designations still name the 2011 trust.`})]}),(0,h.jsxs)(`div`,{className:`r-dark`,style:{padding:`22px 24px`,borderRadius:`var(--r-radius)`},children:[(0,h.jsx)(c,{children:`Not in your plan`}),(0,h.jsx)(o,{level:3,children:`Charitable lead trust`}),(0,h.jsx)(n,{className:`mt-3`,children:`Modelled, not executed. Revisit at the next valuation.`})]})]})})},v={render:()=>(0,h.jsx)(u,{n:`02`,name:`Reconciling table`,use:`Tabular numerals, hairline rows, accented total line.`,dos:[`Line items that reconcile to a total`,`Paid vs allowed, filed vs planned`],donts:[`More than 14 rows — paginate instead`,`Prose in a cell; move it to Observations`],code:`<DataTable
  head={["Item", "Paid", "Allowed"]}
  rows={rows}
  total={{ item: "Total itemized", paid: "$95,550", allowed: "$50,400" }}
/>`,props:[{name:`head`,type:`string[]`,required:!0},{name:`rows`,type:`Record<string, string>[]`,required:!0},{name:`total`,type:`Record<string, string>`,note:`Rule-topped final line`}],children:(0,h.jsx)(s,{columns:[{key:`item`,head:`Schedule A item`},{key:`paid`,head:`Paid`,numeric:!0},{key:`allowed`,head:`Allowed`,numeric:!0}],rows:[{item:`State income tax`,paid:`$31,900`,allowed:`$10,000`},{item:`Property tax`,paid:`$23,250`,allowed:`$0`},{item:`Mortgage interest`,paid:`$28,400`,allowed:`$28,400`},{item:`Charitable gifts`,paid:`$12,000`,allowed:`$12,000`}],total:{item:`Total itemized`,paid:`$95,550`,allowed:`$50,400`}})})},y={render:()=>(0,h.jsx)(u,{n:`03`,name:`Calculation walk`,use:`Arrow-connected nodes. Every flow in the system uses these connectors — no exceptions.`,dos:[`Three to five steps from input to result`,`Any flow shown on a dark slide (pass ondark)`],donts:[`Branching flows — use EntityTree or SankeyFlow`],code:`<FlowRow
  nodes={[
    { label: "AGI", value: "$358,880" },
    { label: "Deductions", value: "−$50,400", op: "minus" },
    { label: "Taxable", value: "$308,480", accent: true },
  ]}
/>`,props:[{name:`nodes`,type:`{ label; value; op?; accent? }[]`,required:!0},{name:`ondark`,type:`boolean`,note:`Remaps connectors and text for dark slides`}],children:(0,h.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,h.jsx)(t,{nodes:[{title:`Total income`,value:`$357,880`},{title:`Adjustments`,value:`−$29,300`},{title:`Taxable income`,value:`$307,480`},{title:`Federal tax`,value:`$51,505`}]}),(0,h.jsxs)(`div`,{className:`r-dark`,style:{padding:`26px 24px`,borderRadius:`var(--r-radius)`},children:[(0,h.jsx)(r,{children:`Where it goes`}),(0,h.jsx)(t,{nodes:[{title:`Trustors`,note:`John & Jane Doe`},{title:`Doe Family Trust`,value:`$62.4M`},{title:`Marital share`,value:`$31.2M`},{title:`Children, per stirpes`,note:`Three shares`}]})]})]})})},b={name:`Slide frame`,render:()=>(0,h.jsx)(u,{n:`04`,name:`Slide frame`,use:`16:9, container-scaled. Light and inverted, with header and footer slots.`,dos:[`Every slide in both modes`,`Gallery previews of a full slide composition`],donts:[`Nesting frames`,`Hand-setting a width — the viewer scales the stage`],code:`<SlideFrame eyebrow="Section 02" title="Where it goes" footer="Doe Family · Aug 2026" dark>
  <SankeyFlow ... />
</SlideFrame>`,props:[{name:`eyebrow`,type:`string`},{name:`title`,type:`string`},{name:`footer`,type:`string`},{name:`dark`,type:`boolean`,note:`Inverted section; children read on-dark tokens`}],children:(0,h.jsxs)(`div`,{className:`grid gap-7 lg:grid-cols-2`,children:[(0,h.jsxs)(i,{header:[`Tax planning · 2026`,`03`],footer:[`Bob & Sally Jones`,`August 2026`],children:[(0,h.jsx)(r,{children:`2025 federal tax`}),(0,h.jsx)(`div`,{className:`r-num`,style:{fontSize:`8cqw`},children:`$51,505`}),(0,h.jsx)(n,{className:`mt-4 max-w-[42ch]`,children:`An effective rate of 14.4% on $357,880 of total income.`})]}),(0,h.jsxs)(i,{dark:!0,header:[`Estate report`,`11`],footer:[`Doe family`,`August 2026`],children:[(0,h.jsx)(r,{children:`Where it goes`}),(0,h.jsx)(o,{level:2,children:`Three shares, one trustee`}),(0,h.jsx)(n,{className:`mt-4 max-w-[46ch]`,children:`Inverted sections carry their own token overrides, so nested nodes and connectors stay visible on dark fields.`})]})]})})},x={name:`Chips, docs, observations, cards & totals`,render:()=>(0,h.jsx)(p,{})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="01" name="Cards" use="Panel, accent panel, and dark-inverted panel.">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <Label>In your plan</Label>
          <Heading level={3}>Revocable living trust</Heading>
          <Small className="mt-3">Funded 2019. Pour-over will executed alongside.</Small>
        </Card>
        <Card accent>
          <Label>Watch item</Label>
          <Heading level={3}>Beneficiary mismatch</Heading>
          <Small className="mt-3">Retirement designations still name the 2011 trust.</Small>
        </Card>
        <div className="r-dark" style={{
        padding: "22px 24px",
        borderRadius: "var(--r-radius)"
      }}>
          <Label>Not in your plan</Label>
          <Heading level={3}>Charitable lead trust</Heading>
          <Small className="mt-3">Modelled, not executed. Revisit at the next valuation.</Small>
        </div>
      </div>
    </Specimen>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="02" name="Reconciling table" use="Tabular numerals, hairline rows, accented total line." dos={["Line items that reconcile to a total", "Paid vs allowed, filed vs planned"]} donts={["More than 14 rows — paginate instead", "Prose in a cell; move it to Observations"]} code={\`<DataTable
  head={["Item", "Paid", "Allowed"]}
  rows={rows}
  total={{ item: "Total itemized", paid: "$95,550", allowed: "$50,400" }}
/>\`} props={[{
    name: "head",
    type: "string[]",
    required: true
  }, {
    name: "rows",
    type: "Record<string, string>[]",
    required: true
  }, {
    name: "total",
    type: "Record<string, string>",
    note: "Rule-topped final line"
  }]}>
      <DataTable columns={[{
      key: "item",
      head: "Schedule A item"
    }, {
      key: "paid",
      head: "Paid",
      numeric: true
    }, {
      key: "allowed",
      head: "Allowed",
      numeric: true
    }]} rows={[{
      item: "State income tax",
      paid: "$31,900",
      allowed: "$10,000"
    }, {
      item: "Property tax",
      paid: "$23,250",
      allowed: "$0"
    }, {
      item: "Mortgage interest",
      paid: "$28,400",
      allowed: "$28,400"
    }, {
      item: "Charitable gifts",
      paid: "$12,000",
      allowed: "$12,000"
    }]} total={{
      item: "Total itemized",
      paid: "$95,550",
      allowed: "$50,400"
    }} />
    </Specimen>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="03" name="Calculation walk" use="Arrow-connected nodes. Every flow in the system uses these connectors — no exceptions." dos={["Three to five steps from input to result", "Any flow shown on a dark slide (pass ondark)"]} donts={["Branching flows — use EntityTree or SankeyFlow"]} code={\`<FlowRow
  nodes={[
    { label: "AGI", value: "$358,880" },
    { label: "Deductions", value: "−$50,400", op: "minus" },
    { label: "Taxable", value: "$308,480", accent: true },
  ]}
/>\`} props={[{
    name: "nodes",
    type: "{ label; value; op?; accent? }[]",
    required: true
  }, {
    name: "ondark",
    type: "boolean",
    note: "Remaps connectors and text for dark slides"
  }]}>
      <div className="flex flex-col gap-8">
        <FlowRow nodes={[{
        title: "Total income",
        value: "$357,880"
      }, {
        title: "Adjustments",
        value: "−$29,300"
      }, {
        title: "Taxable income",
        value: "$307,480"
      }, {
        title: "Federal tax",
        value: "$51,505"
      }]} />
        <div className="r-dark" style={{
        padding: "26px 24px",
        borderRadius: "var(--r-radius)"
      }}>
          <Eyebrow>Where it goes</Eyebrow>
          <FlowRow nodes={[{
          title: "Trustors",
          note: "John & Jane Doe"
        }, {
          title: "Doe Family Trust",
          value: "$62.4M"
        }, {
          title: "Marital share",
          value: "$31.2M"
        }, {
          title: "Children, per stirpes",
          note: "Three shares"
        }]} />
        </div>
      </div>
    </Specimen>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Slide frame",
  render: () => <Specimen n="04" name="Slide frame" use="16:9, container-scaled. Light and inverted, with header and footer slots." dos={["Every slide in both modes", "Gallery previews of a full slide composition"]} donts={["Nesting frames", "Hand-setting a width — the viewer scales the stage"]} code={\`<SlideFrame eyebrow="Section 02" title="Where it goes" footer="Doe Family · Aug 2026" dark>
  <SankeyFlow ... />
</SlideFrame>\`} props={[{
    name: "eyebrow",
    type: "string"
  }, {
    name: "title",
    type: "string"
  }, {
    name: "footer",
    type: "string"
  }, {
    name: "dark",
    type: "boolean",
    note: "Inverted section; children read on-dark tokens"
  }]}>
      <div className="grid gap-7 lg:grid-cols-2">
        <SlideFrame header={["Tax planning · 2026", "03"]} footer={["Bob & Sally Jones", "August 2026"]}>
          <Eyebrow>2025 federal tax</Eyebrow>
          <div className="r-num" style={{
          fontSize: "8cqw"
        }}>
            $51,505
          </div>
          <Small className="mt-4 max-w-[42ch]">
            An effective rate of 14.4% on $357,880 of total income.
          </Small>
        </SlideFrame>
        <SlideFrame dark header={["Estate report", "11"]} footer={["Doe family", "August 2026"]}>
          <Eyebrow>Where it goes</Eyebrow>
          <Heading level={2}>Three shares, one trustee</Heading>
          <Small className="mt-4 max-w-[46ch]">
            Inverted sections carry their own token overrides, so nested nodes and connectors stay
            visible on dark fields.
          </Small>
        </SlideFrame>
      </div>
    </Specimen>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Chips, docs, observations, cards & totals",
  render: () => <ComponentParts />
}`,...x.parameters?.docs?.source}}},S=[`Cards`,`ReconcilingTable`,`CalculationWalk`,`SlideFrameStory`,`ComponentPartsStory`]})))()}C();export{y as CalculationWalk,_ as Cards,x as ComponentPartsStory,v as ReconcilingTable,b as SlideFrameStory,S as __namedExportsOrder,g as default};