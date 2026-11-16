import{n as e}from"./iframe-DTRiKOxR.js";import{S as t,T as n,d as r,f as i,l as a,m as o,n as s,p as c,r as l,u,x as d}from"./specimen-DDRFL95L.js";import{O as f,_ as p,a as m,d as h,g,l as _,o as v,r as y,w as b,y as x}from"./deck-parts-5ucLLdM7.js";import{c as S,d as C,l as w,m as T,n as E,p as D,t as O,u as k}from"./structure-p3eZ3qos.js";import{n as A}from"./rolldown-runtime-DkW27tQK.js";var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=A((()=>{l(),n(),f(),T(),j=e(),M={title:`Report Design System/03 Components`,parameters:{layout:`padded`}},N={render:()=>(0,j.jsx)(s,{n:`01`,name:`Cards`,use:`Panel and accent panel. Dark mode (.dark) always inverts the whole slide in the real decks — never a single card amid light siblings — so the dark variant is shown as a full dark ground, not an inline third card.`,selectors:[`.card`,`.r-dark`],children:(0,j.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,j.jsxs)(`div`,{className:`grid gap-6 md:grid-cols-2`,children:[(0,j.jsxs)(a,{children:[(0,j.jsx)(o,{children:`In your plan`}),(0,j.jsx)(c,{level:3,children:`Revocable living trust`}),(0,j.jsx)(t,{className:`mt-3`,children:`Funded 2019. Pour-over will executed alongside.`})]}),(0,j.jsxs)(a,{accent:!0,children:[(0,j.jsx)(o,{children:`Watch item`}),(0,j.jsx)(c,{level:3,children:`Beneficiary mismatch`}),(0,j.jsx)(t,{className:`mt-3`,children:`Retirement designations still name the 2011 trust.`})]})]}),(0,j.jsxs)(`div`,{className:`r-dark grid gap-6 md:grid-cols-2`,style:{padding:`22px 24px`},children:[(0,j.jsxs)(a,{children:[(0,j.jsx)(o,{children:`In your plan`}),(0,j.jsx)(c,{level:3,children:`Revocable living trust`}),(0,j.jsx)(t,{className:`mt-3`,children:`Funded 2019. Pour-over will executed alongside.`})]}),(0,j.jsxs)(a,{accent:!0,children:[(0,j.jsx)(o,{children:`Watch item`}),(0,j.jsx)(c,{level:3,children:`Beneficiary mismatch`}),(0,j.jsx)(t,{className:`mt-3`,children:`Retirement designations still name the 2011 trust.`})]})]})]})})},P={render:()=>(0,j.jsx)(s,{n:`02`,name:`Reconciling table`,use:`Tabular numerals, hairline rows, accented total line.`,dos:[`Line items that reconcile to a total`,`Paid vs allowed, filed vs planned`],donts:[`More than 14 rows — paginate instead`,`Prose in a cell; move it to Observations`],code:`<DataTable
  head={["Item", "Paid", "Allowed"]}
  rows={rows}
  total={{ item: "Total itemized", paid: "$95,550", allowed: "$50,400" }}
/>`,props:[{name:`head`,type:`string[]`,required:!0},{name:`rows`,type:`Record<string, string>[]`,required:!0},{name:`total`,type:`Record<string, string>`,note:`Rule-topped final line`}],selectors:[`th`,`td`,`.n`],children:(0,j.jsx)(u,{columns:[{key:`item`,head:`Schedule A item`},{key:`paid`,head:`Paid`,numeric:!0},{key:`allowed`,head:`Allowed`,numeric:!0}],rows:[{item:`State income tax`,paid:`$31,900`,allowed:`$10,000`},{item:`Property tax`,paid:`$23,250`,allowed:`$0`},{item:`Mortgage interest`,paid:`$28,400`,allowed:`$28,400`},{item:`Charitable gifts`,paid:`$12,000`,allowed:`$12,000`}],total:{item:`Total itemized`,paid:`$95,550`,allowed:`$50,400`}})})},F={render:()=>(0,j.jsx)(s,{n:`03`,name:`Calculation walk`,use:`Arrow-connected nodes. Every flow in the system uses these connectors — no exceptions.`,dos:[`Three to five steps from input to result`,`Any flow shown on a dark slide (pass ondark)`],donts:[`Branching flows — use EntityTree or SankeyFlow`],code:`<FlowRow
  nodes={[
    { label: "AGI", value: "$358,880" },
    { label: "Deductions", value: "−$50,400", op: "minus" },
    { label: "Taxable", value: "$308,480", accent: true },
  ]}
/>`,props:[{name:`nodes`,type:`{ label; value; op?; accent? }[]`,required:!0},{name:`ondark`,type:`boolean`,note:`Remaps connectors and text for dark slides`}],selectors:[`.node`,`.conn`,`.r-dark`],children:(0,j.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,j.jsx)(i,{nodes:[{title:`Total income`,value:`$357,880`},{title:`Adjustments`,value:`−$29,300`},{title:`Taxable income`,value:`$307,480`},{title:`Federal tax`,value:`$51,505`}]}),(0,j.jsxs)(`div`,{className:`r-dark`,style:{padding:`26px 24px`,borderRadius:`var(--r-radius)`},children:[(0,j.jsx)(r,{children:`Where it goes`}),(0,j.jsx)(i,{nodes:[{title:`Trustors`,note:`John & Jane Doe`},{title:`Doe Family Trust`,value:`$62.4M`},{title:`Marital share`,value:`$31.2M`},{title:`Children, per stirpes`,note:`Three shares`}]})]})]})})},I={name:`Slide frame`,render:()=>(0,j.jsx)(s,{n:`04`,name:`Slide frame`,use:`16:9, container-scaled. Light and inverted, with header and footer slots.`,dos:[`Every slide in both modes`,`Gallery previews of a full slide composition`],donts:[`Nesting frames`,`Hand-setting a width — the viewer scales the stage`],code:`<SlideFrame eyebrow="Section 02" title="Where it goes" footer="Doe Family · Aug 2026" dark>
  <SankeyFlow ... />
</SlideFrame>`,props:[{name:`eyebrow`,type:`string`},{name:`title`,type:`string`},{name:`footer`,type:`string`},{name:`dark`,type:`boolean`,note:`Inverted section; children read on-dark tokens`}],selectors:[`.r-dark`],children:(0,j.jsxs)(`div`,{className:`grid gap-7 lg:grid-cols-2`,children:[(0,j.jsxs)(d,{header:[`Tax planning · 2026`,`03`],footer:[`Bob & Sally Jones`,`August 2026`],children:[(0,j.jsx)(r,{children:`2025 federal tax`}),(0,j.jsx)(`div`,{className:`r-num`,style:{fontSize:`8cqw`},children:`$51,505`}),(0,j.jsx)(t,{className:`mt-4 max-w-[42ch]`,children:`An effective rate of 14.4% on $357,880 of total income.`})]}),(0,j.jsxs)(d,{dark:!0,header:[`Estate report`,`11`],footer:[`Doe family`,`August 2026`],children:[(0,j.jsx)(r,{children:`Where it goes`}),(0,j.jsx)(c,{level:2,children:`Three shares, one trustee`}),(0,j.jsx)(t,{className:`mt-4 max-w-[46ch]`,children:`Inverted sections carry their own token overrides, so nested nodes and connectors stay visible on dark fields.`})]})]})})},L={name:`Chips & states`,render:()=>(0,j.jsx)(m,{})},R={name:`Document line`,render:()=>(0,j.jsx)(_,{})},z={name:`Contents item`,render:()=>(0,j.jsx)(v,{})},B={name:`Observation & watch`,render:()=>(0,j.jsx)(g,{})},V={name:`Boxes`,render:()=>(0,j.jsx)(y,{})},H={name:`Totals & zero rows`,render:()=>(0,j.jsx)(b,{})},U={name:`Flow node`,render:()=>(0,j.jsx)(h,{})},W={name:`Scenario card`,render:()=>(0,j.jsx)(x,{})},G={name:`Report panel`,render:()=>(0,j.jsx)(p,{})},K={name:`Step list`,render:()=>(0,j.jsx)(s,{n:`13`,name:`Step list`,use:`Sequenced consequences — what happens first, then next. Values ride on the right rail.`,dos:[`Mortality sequencing — John first, then Jane`,`Any ordered set of consequences`],donts:[`Dated deliverables — use ScheduleTable`],code:`<StepList steps={[{ n: "1", title: "John dies", body: "Marital trust funds", value: "$245.9M" }]} />`,selectors:[`.vconn`,`.num`],children:(0,j.jsx)(D,{steps:[{n:`1`,title:`John dies first`,body:`Revocable trust becomes irrevocable; assets divide.`,value:`$245.9M`},{n:`2`,title:`Marital trust funded`,body:`Unlimited marital deduction defers all federal tax.`,value:`$131.1M`},{n:`3`,title:`Exemption trust funded`,body:`Funded to $15.0M; growth escapes the second estate.`,value:`$15.0M`},{n:`4`,title:`Jane's estate settles`,body:`Combined federal and Illinois tax comes due.`,value:`$65.6M`}]})})},q={render:()=>(0,j.jsx)(s,{n:`14`,name:`Schedule`,use:`Deadline, action, owner, status. Status is a word, never a color alone.`,wide:!0,selectors:[`.lbl`,`.chip`,`.in`],children:(0,j.jsx)(C,{rows:[{when:`Q3 2026 · now`,what:`Open and fund the solo 401(k)`,who:`Client + custodian`,status:`now`},{when:`Q4 2026`,what:`Bunch two years of giving into the DAF`,who:`Advisor`,status:`later`},{when:`Dec 31, 2026`,what:`Make the Illinois PTE election`,who:`CPA`,status:`later`},{when:`Q1 2026`,what:`Restate powers of attorney`,who:`Counsel`,status:`done`}]})})},J={render:()=>(0,j.jsx)(s,{n:`15`,name:`Comparison`,use:`Two vehicles, one decision. Hairline gutter, no cards, no shading.`,wide:!0,selectors:[`.scen`],children:(0,j.jsx)(E,{columns:[{title:`Will`,sub:`Public, court-supervised`,accent:`b`,points:[`Takes effect only at death`,`Passes through probate and becomes public record`,`Cannot hold assets during incapacity`,`Simplest to draft and amend`]},{title:`Revocable trust`,sub:`Private, trustee-administered`,accent:`a`,points:[`Operates during life, incapacity and after death`,`Avoids probate for assets actually titled to it`,`Keeps terms and values private`,`Requires funding — an unfunded trust does nothing`]}]})})},Y={name:`Glossary`,render:()=>(0,j.jsx)(s,{n:`16`,name:`Glossary`,use:`Educational slides use the same hairline rhythm as data slides. Abbreviations get a chip.`,wide:!0,selectors:[`.chip`],children:(0,j.jsx)(S,{terms:[{term:`Grantor retained annuity trust`,abbr:`GRAT`,body:`The grantor keeps an annuity for a term; growth above the §7520 rate passes to beneficiaries free of gift tax.`},{term:`Charitable lead annuity trust`,abbr:`CLAT`,body:`Charity is paid first for a fixed term; whatever remains passes to family, often at a deeply discounted gift value.`},{term:`Qualified personal residence trust`,abbr:`QPRT`,body:`A residence is transferred at a discounted value while the grantor retains the right to live in it for a term.`},{term:`Generation-skipping transfer tax`,abbr:`GST`,body:`A separate 40% tax on transfers that skip a generation, with its own exemption that must be allocated deliberately.`}]})})},X={render:()=>(0,j.jsx)(s,{n:`17`,name:`KPI band & pull quote`,use:`The two openers. A band of headline figures, or one sentence carrying the whole slide.`,wide:!0,selectors:[`.num`,`.lbl`],children:(0,j.jsxs)(`div`,{className:`flex flex-col gap-10`,children:[(0,j.jsx)(w,{items:[{label:`Gross estate`,value:`$491.8M`,tone:`accent`},{label:`Combined tax`,value:`$131.1M`,tone:`warn`},{label:`To heirs`,value:`$347.6M`},{label:`To charity`,value:`$13.1M`,tone:`accent2`}]}),(0,j.jsx)(k,{attribution:`Doe family · estate review 2026`,children:`Twenty-seven percent of everything you have built is currently earmarked for the federal and Illinois treasuries. Most of it is optional.`})]})})},Z={name:`Checklist`,render:()=>(0,j.jsx)(s,{n:`18`,name:`Checklist`,use:`The closing slide of both decks: agreed actions, owners and dates.`,wide:!0,selectors:[`.lbl`,`.small`],children:(0,j.jsx)(O,{items:[{title:`Open and fund the solo 401(k)`,owner:`Client + custodian`,due:`Sep 2026`,done:!0},{title:`Restate financial powers of attorney`,owner:`Counsel`,due:`Oct 2026`},{title:`Bunch charitable giving into the DAF`,owner:`Advisor`,due:`Dec 2026`},{title:`File the Illinois PTE election`,owner:`CPA`,due:`Dec 31, 2026`}]})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="01" name="Cards" use="Panel and accent panel. Dark mode (.dark) always inverts the whole slide in the real decks — never a single card amid light siblings — so the dark variant is shown as a full dark ground, not an inline third card." selectors={[".card", ".r-dark"]}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-6 md:grid-cols-2">
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
        </div>
        <div className="r-dark grid gap-6 md:grid-cols-2" style={{
        padding: "22px 24px"
      }}>
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
        </div>
      </div>
    </Specimen>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
  }]} selectors={["th", "td", ".n"]}>
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
  }]} selectors={[".node", ".conn", ".r-dark"]}>
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
  }]} selectors={[".r-dark"]}>
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Chips & states",
  render: () => <ChipsStatesSpecimen />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Document line",
  render: () => <DocumentLineSpecimen />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Contents item",
  render: () => <ContentsItemSpecimen />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Observation & watch",
  render: () => <ObservationWatchSpecimen />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Boxes",
  render: () => <BoxesSpecimen />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Totals & zero rows",
  render: () => <TotalsZeroRowsSpecimen />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Flow node",
  render: () => <FlowNodeSpecimen />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Scenario card",
  render: () => <ScenarioCardSpecimen />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Report panel",
  render: () => <ReportPanelSpecimen />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Step list",
  render: () => <Specimen n="13" name="Step list" use="Sequenced consequences — what happens first, then next. Values ride on the right rail." dos={["Mortality sequencing — John first, then Jane", "Any ordered set of consequences"]} donts={["Dated deliverables — use ScheduleTable"]} code={\`<StepList steps={[{ n: "1", title: "John dies", body: "Marital trust funds", value: "$245.9M" }]} />\`} selectors={[".vconn", ".num"]}>
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="14" name="Schedule" use="Deadline, action, owner, status. Status is a word, never a color alone." wide selectors={[".lbl", ".chip", ".in"]}>
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="15" name="Comparison" use="Two vehicles, one decision. Hairline gutter, no cards, no shading." wide selectors={[".scen"]}>
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Glossary",
  render: () => <Specimen n="16" name="Glossary" use="Educational slides use the same hairline rhythm as data slides. Abbreviations get a chip." wide selectors={[".chip"]}>
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="17" name="KPI band & pull quote" use="The two openers. A band of headline figures, or one sentence carrying the whole slide." wide selectors={[".num", ".lbl"]}>
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Checklist",
  render: () => <Specimen n="18" name="Checklist" use="The closing slide of both decks: agreed actions, owners and dates." wide selectors={[".lbl", ".small"]}>
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
}`,...Z.parameters?.docs?.source}}},Q=[`Cards`,`ReconcilingTable`,`CalculationWalk`,`SlideFrameStory`,`ChipsStates`,`DocumentLine`,`ContentsItem`,`ObservationWatch`,`Boxes`,`TotalsZeroRows`,`FlowNode`,`ScenarioCard`,`ReportPanel`,`StepListStory`,`Schedule`,`Comparison`,`GlossaryStory`,`KpiBandAndPullQuote`,`ChecklistStory`]})))()}$();export{V as Boxes,F as CalculationWalk,N as Cards,Z as ChecklistStory,L as ChipsStates,J as Comparison,z as ContentsItem,R as DocumentLine,U as FlowNode,Y as GlossaryStory,X as KpiBandAndPullQuote,B as ObservationWatch,P as ReconcilingTable,G as ReportPanel,W as ScenarioCard,q as Schedule,I as SlideFrameStory,K as StepListStory,H as TotalsZeroRows,Q as __namedExportsOrder,M as default};