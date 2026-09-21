import{n as e}from"./iframe-ZZ8FEgx_.js";import{S as t,T as n,d as r,f as i,l as a,m as o,n as s,p as c,r as l,u,x as d}from"./specimen-ujGfD8_G.js";import{b as f,h as p,i as m,l as h,n as g,p as _,r as v,s as y,w as b}from"./deck-parts-BDNHvTLp.js";import{c as x,d as S,l as C,m as w,n as T,p as E,t as D,u as O}from"./structure-aQdEZ8tF.js";import{n as k}from"./rolldown-runtime-DkW27tQK.js";var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;function Z(){return(Z=k((()=>{l(),n(),b(),w(),A=e(),j={title:`Report Design System/03 Components`,parameters:{layout:`padded`}},M={render:()=>(0,A.jsx)(s,{n:`01`,name:`Cards`,use:`Panel, accent panel, and dark-inverted panel.`,selectors:[`.card`,`.r-dark`],children:(0,A.jsxs)(`div`,{className:`grid gap-6 md:grid-cols-3`,children:[(0,A.jsxs)(a,{children:[(0,A.jsx)(o,{children:`In your plan`}),(0,A.jsx)(c,{level:3,children:`Revocable living trust`}),(0,A.jsx)(t,{className:`mt-3`,children:`Funded 2019. Pour-over will executed alongside.`})]}),(0,A.jsxs)(a,{accent:!0,children:[(0,A.jsx)(o,{children:`Watch item`}),(0,A.jsx)(c,{level:3,children:`Beneficiary mismatch`}),(0,A.jsx)(t,{className:`mt-3`,children:`Retirement designations still name the 2011 trust.`})]}),(0,A.jsxs)(`div`,{className:`r-dark`,style:{padding:`22px 24px`,borderRadius:`var(--r-radius)`},children:[(0,A.jsx)(o,{children:`Not in your plan`}),(0,A.jsx)(c,{level:3,children:`Charitable lead trust`}),(0,A.jsx)(t,{className:`mt-3`,children:`Modelled, not executed. Revisit at the next valuation.`})]})]})})},N={render:()=>(0,A.jsx)(s,{n:`02`,name:`Reconciling table`,use:`Tabular numerals, hairline rows, accented total line.`,dos:[`Line items that reconcile to a total`,`Paid vs allowed, filed vs planned`],donts:[`More than 14 rows — paginate instead`,`Prose in a cell; move it to Observations`],code:`<DataTable
  head={["Item", "Paid", "Allowed"]}
  rows={rows}
  total={{ item: "Total itemized", paid: "$95,550", allowed: "$50,400" }}
/>`,props:[{name:`head`,type:`string[]`,required:!0},{name:`rows`,type:`Record<string, string>[]`,required:!0},{name:`total`,type:`Record<string, string>`,note:`Rule-topped final line`}],selectors:[`th`,`td`,`.n`],children:(0,A.jsx)(u,{columns:[{key:`item`,head:`Schedule A item`},{key:`paid`,head:`Paid`,numeric:!0},{key:`allowed`,head:`Allowed`,numeric:!0}],rows:[{item:`State income tax`,paid:`$31,900`,allowed:`$10,000`},{item:`Property tax`,paid:`$23,250`,allowed:`$0`},{item:`Mortgage interest`,paid:`$28,400`,allowed:`$28,400`},{item:`Charitable gifts`,paid:`$12,000`,allowed:`$12,000`}],total:{item:`Total itemized`,paid:`$95,550`,allowed:`$50,400`}})})},P={render:()=>(0,A.jsx)(s,{n:`03`,name:`Calculation walk`,use:`Arrow-connected nodes. Every flow in the system uses these connectors — no exceptions.`,dos:[`Three to five steps from input to result`,`Any flow shown on a dark slide (pass ondark)`],donts:[`Branching flows — use EntityTree or SankeyFlow`],code:`<FlowRow
  nodes={[
    { label: "AGI", value: "$358,880" },
    { label: "Deductions", value: "−$50,400", op: "minus" },
    { label: "Taxable", value: "$308,480", accent: true },
  ]}
/>`,props:[{name:`nodes`,type:`{ label; value; op?; accent? }[]`,required:!0},{name:`ondark`,type:`boolean`,note:`Remaps connectors and text for dark slides`}],selectors:[`.node`,`.conn`,`.r-dark`],children:(0,A.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,A.jsx)(i,{nodes:[{title:`Total income`,value:`$357,880`},{title:`Adjustments`,value:`−$29,300`},{title:`Taxable income`,value:`$307,480`},{title:`Federal tax`,value:`$51,505`}]}),(0,A.jsxs)(`div`,{className:`r-dark`,style:{padding:`26px 24px`,borderRadius:`var(--r-radius)`},children:[(0,A.jsx)(r,{children:`Where it goes`}),(0,A.jsx)(i,{nodes:[{title:`Trustors`,note:`John & Jane Doe`},{title:`Doe Family Trust`,value:`$62.4M`},{title:`Marital share`,value:`$31.2M`},{title:`Children, per stirpes`,note:`Three shares`}]})]})]})})},F={name:`Slide frame`,render:()=>(0,A.jsx)(s,{n:`04`,name:`Slide frame`,use:`16:9, container-scaled. Light and inverted, with header and footer slots.`,dos:[`Every slide in both modes`,`Gallery previews of a full slide composition`],donts:[`Nesting frames`,`Hand-setting a width — the viewer scales the stage`],code:`<SlideFrame eyebrow="Section 02" title="Where it goes" footer="Doe Family · Aug 2026" dark>
  <SankeyFlow ... />
</SlideFrame>`,props:[{name:`eyebrow`,type:`string`},{name:`title`,type:`string`},{name:`footer`,type:`string`},{name:`dark`,type:`boolean`,note:`Inverted section; children read on-dark tokens`}],selectors:[`.r-dark`],children:(0,A.jsxs)(`div`,{className:`grid gap-7 lg:grid-cols-2`,children:[(0,A.jsxs)(d,{header:[`Tax planning · 2026`,`03`],footer:[`Bob & Sally Jones`,`August 2026`],children:[(0,A.jsx)(r,{children:`2025 federal tax`}),(0,A.jsx)(`div`,{className:`r-num`,style:{fontSize:`8cqw`},children:`$51,505`}),(0,A.jsx)(t,{className:`mt-4 max-w-[42ch]`,children:`An effective rate of 14.4% on $357,880 of total income.`})]}),(0,A.jsxs)(d,{dark:!0,header:[`Estate report`,`11`],footer:[`Doe family`,`August 2026`],children:[(0,A.jsx)(r,{children:`Where it goes`}),(0,A.jsx)(c,{level:2,children:`Three shares, one trustee`}),(0,A.jsx)(t,{className:`mt-4 max-w-[46ch]`,children:`Inverted sections carry their own token overrides, so nested nodes and connectors stay visible on dark fields.`})]})]})})},I={name:`Chips & states`,render:()=>(0,A.jsx)(v,{})},L={name:`Document line`,render:()=>(0,A.jsx)(y,{})},R={name:`Contents item`,render:()=>(0,A.jsx)(m,{})},z={name:`Observation & watch`,render:()=>(0,A.jsx)(_,{})},B={name:`Boxes`,render:()=>(0,A.jsx)(g,{})},V={name:`Totals & zero rows`,render:()=>(0,A.jsx)(f,{})},H={name:`Flow node`,render:()=>(0,A.jsx)(h,{})},U={name:`Scenario card`,render:()=>(0,A.jsx)(p,{})},W={name:`Step list`,render:()=>(0,A.jsx)(s,{n:`13`,name:`Step list`,use:`Sequenced consequences — what happens first, then next. Values ride on the right rail.`,dos:[`Mortality sequencing — John first, then Jane`,`Any ordered set of consequences`],donts:[`Dated deliverables — use ScheduleTable`],code:`<StepList steps={[{ n: "1", title: "John dies", body: "Marital trust funds", value: "$245.9M" }]} />`,selectors:[`.vconn`,`.num`],children:(0,A.jsx)(E,{steps:[{n:`1`,title:`John dies first`,body:`Revocable trust becomes irrevocable; assets divide.`,value:`$245.9M`},{n:`2`,title:`Marital trust funded`,body:`Unlimited marital deduction defers all federal tax.`,value:`$131.1M`},{n:`3`,title:`Exemption trust funded`,body:`Funded to $15.0M; growth escapes the second estate.`,value:`$15.0M`},{n:`4`,title:`Jane's estate settles`,body:`Combined federal and Illinois tax comes due.`,value:`$65.6M`}]})})},G={render:()=>(0,A.jsx)(s,{n:`14`,name:`Schedule`,use:`Deadline, action, owner, status. Status is a word, never a colour alone.`,wide:!0,selectors:[`.lbl`,`.chip`,`.in`],children:(0,A.jsx)(S,{rows:[{when:`Q3 2026 · now`,what:`Open and fund the solo 401(k)`,who:`Client + custodian`,status:`now`},{when:`Q4 2026`,what:`Bunch two years of giving into the DAF`,who:`Advisor`,status:`later`},{when:`Dec 31, 2026`,what:`Make the Illinois PTE election`,who:`CPA`,status:`later`},{when:`Q1 2026`,what:`Restate powers of attorney`,who:`Counsel`,status:`done`}]})})},K={render:()=>(0,A.jsx)(s,{n:`15`,name:`Comparison`,use:`Two vehicles, one decision. Hairline gutter, no cards, no shading.`,wide:!0,selectors:[`.scen`],children:(0,A.jsx)(T,{columns:[{title:`Will`,sub:`Public, court-supervised`,accent:`b`,points:[`Takes effect only at death`,`Passes through probate and becomes public record`,`Cannot hold assets during incapacity`,`Simplest to draft and amend`]},{title:`Revocable trust`,sub:`Private, trustee-administered`,accent:`a`,points:[`Operates during life, incapacity and after death`,`Avoids probate for assets actually titled to it`,`Keeps terms and values private`,`Requires funding — an unfunded trust does nothing`]}]})})},q={name:`Glossary`,render:()=>(0,A.jsx)(s,{n:`16`,name:`Glossary`,use:`Educational slides use the same hairline rhythm as data slides. Abbreviations get a chip.`,wide:!0,selectors:[`.chip`],children:(0,A.jsx)(x,{terms:[{term:`Grantor retained annuity trust`,abbr:`GRAT`,body:`The grantor keeps an annuity for a term; growth above the §7520 rate passes to beneficiaries free of gift tax.`},{term:`Charitable lead annuity trust`,abbr:`CLAT`,body:`Charity is paid first for a fixed term; whatever remains passes to family, often at a deeply discounted gift value.`},{term:`Qualified personal residence trust`,abbr:`QPRT`,body:`A residence is transferred at a discounted value while the grantor retains the right to live in it for a term.`},{term:`Generation-skipping transfer tax`,abbr:`GST`,body:`A separate 40% tax on transfers that skip a generation, with its own exemption that must be allocated deliberately.`}]})})},J={render:()=>(0,A.jsx)(s,{n:`17`,name:`KPI band & pull quote`,use:`The two openers. A band of headline figures, or one sentence carrying the whole slide.`,wide:!0,selectors:[`.num`,`.lbl`],children:(0,A.jsxs)(`div`,{className:`flex flex-col gap-10`,children:[(0,A.jsx)(C,{items:[{label:`Gross estate`,value:`$491.8M`,tone:`accent`},{label:`Combined tax`,value:`$131.1M`,tone:`warn`},{label:`To heirs`,value:`$347.6M`},{label:`To charity`,value:`$13.1M`,tone:`accent2`}]}),(0,A.jsx)(O,{attribution:`Doe family · estate review 2026`,children:`Twenty-seven percent of everything you have built is currently earmarked for the federal and Illinois treasuries. Most of it is optional.`})]})})},Y={name:`Checklist`,render:()=>(0,A.jsx)(s,{n:`18`,name:`Checklist`,use:`The closing slide of both decks: agreed actions, owners and dates.`,wide:!0,selectors:[`.lbl`,`.small`],children:(0,A.jsx)(D,{items:[{title:`Open and fund the solo 401(k)`,owner:`Client + custodian`,due:`Sep 2026`,done:!0},{title:`Restate financial powers of attorney`,owner:`Counsel`,due:`Oct 2026`},{title:`Bunch charitable giving into the DAF`,owner:`Advisor`,due:`Dec 2026`},{title:`File the Illinois PTE election`,owner:`CPA`,due:`Dec 31, 2026`}]})})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="01" name="Cards" use="Panel, accent panel, and dark-inverted panel." selectors={[".card", ".r-dark"]}>
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Chips & states",
  render: () => <ChipsStatesSpecimen />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Document line",
  render: () => <DocumentLineSpecimen />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Contents item",
  render: () => <ContentsItemSpecimen />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Observation & watch",
  render: () => <ObservationWatchSpecimen />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Boxes",
  render: () => <BoxesSpecimen />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Totals & zero rows",
  render: () => <TotalsZeroRowsSpecimen />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Flow node",
  render: () => <FlowNodeSpecimen />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Scenario card",
  render: () => <ScenarioCardSpecimen />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="14" name="Schedule" use="Deadline, action, owner, status. Status is a word, never a colour alone." wide selectors={[".lbl", ".chip", ".in"]}>
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X=[`Cards`,`ReconcilingTable`,`CalculationWalk`,`SlideFrameStory`,`ChipsStates`,`DocumentLine`,`ContentsItem`,`ObservationWatch`,`Boxes`,`TotalsZeroRows`,`FlowNode`,`ScenarioCard`,`StepListStory`,`Schedule`,`Comparison`,`GlossaryStory`,`KpiBandAndPullQuote`,`ChecklistStory`]})))()}Z();export{B as Boxes,P as CalculationWalk,M as Cards,Y as ChecklistStory,I as ChipsStates,K as Comparison,R as ContentsItem,L as DocumentLine,H as FlowNode,q as GlossaryStory,J as KpiBandAndPullQuote,z as ObservationWatch,N as ReconcilingTable,U as ScenarioCard,G as Schedule,F as SlideFrameStory,W as StepListStory,V as TotalsZeroRows,X as __namedExportsOrder,j as default};