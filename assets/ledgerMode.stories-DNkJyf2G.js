import{n as e}from"./iframe-Baufd4UZ.js";import{f as t,v as n}from"./primitives-DpgJp73y.js";import{n as r,r as i}from"./specimen-u4n8q164.js";import{i as a,r as o}from"./fixtures-Cgw8W8hE.js";import{a as s,c,d as l,i as u,l as d,m as f,n as p,o as m,p as h,r as g,s as _,t as v,u as y}from"./ledger-ZlearC0N.js";import{n as b}from"./rolldown-runtime-DkW27tQK.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=b((()=>{i(),n(),f(),o(),x=e(),S={title:`Report Design System/05 Ledger Mode`,parameters:{layout:`padded`}},C={name:`Ledger rows`,render:()=>(0,x.jsx)(r,{n:`01`,name:`Ledger rows`,use:`Label left, tabular figure right. Sub-rows indent, operators are captioned, the total carries the only heavy rule on the slide.`,dos:[`The default numeric list in ledger mode`,`Anything that ends in a total`],donts:[`Comparing two years side by side — use ScenarioColumns`],code:`<LedgerRows
  rows={[
    { label: "Wages", value: "$212,400" },
    { label: "Schedule C", value: "$78,200", sub: true },
    { label: "Total income", value: "$358,880", total: true },
  ]}
/>`,props:[{name:`rows`,type:`{ label; value; sub?; op?; total? }[]`,required:!0}],children:(0,x.jsx)(c,{rows:[{k:`Income`,v:``,op:!0},{k:`Wages (W-2)`,v:a(212400)},{k:`Schedule C — net`,v:a(78200)},{k:`Qualified dividends`,v:a(18980),sub:!0},{k:`Rental (Sch E)`,v:a(9200)},{k:`Passive loss carryforward`,v:`—`,zero:!0},{k:`Above-the-line adjustments`,v:`(${a(29300)})`,neg:!0},{k:`Adjusted gross income`,v:a(289480),total:!0}]})})},w={name:`Worksheet`,render:()=>(0,x.jsx)(r,{n:`02`,name:`Worksheet`,use:`A titled reconciliation with a hero figure on top. Three across is the densest arrangement that still reads at the back of a room.`,wide:!0,children:(0,x.jsxs)(`div`,{className:`grid gap-12 md:grid-cols-3`,children:[(0,x.jsx)(h,{label:`Federal — as filed 2025`,figure:a(58177),rows:[{k:`Taxable income`,v:a(279150)},{k:`Tax before credits`,v:a(60977)},{k:`Credits`,v:`(${a(2800)})`,neg:!0},{k:`Total federal`,v:a(58177),total:!0}]}),(0,x.jsx)(h,{label:`Federal — planned 2026`,figure:a(35284),tone:`accent2`,delta:{text:`▼ $22,893 vs. filed`,dir:`down`},rows:[{k:`Taxable income`,v:a(233900)},{k:`Tax before credits`,v:a(38084)},{k:`Credits`,v:`(${a(2800)})`,neg:!0},{k:`Total federal`,v:a(35284),total:!0}]}),(0,x.jsx)(h,{label:`Combined liability`,figure:a(105524),tone:`accent3`,rows:[{k:`Federal`,v:a(58177)},{k:`State (IL)`,v:a(14806)},{k:`Self-employment`,v:a(11041)},{k:`NIIT`,v:a(1500),sub:!0},{k:`All-in`,v:a(105524),total:!0}],footnote:`Marginal rate 32% · effective rate 14.4% · safe-harbour target 110% of prior year.`})]})})},T={name:`Capacity meter`,render:()=>(0,x.jsx)(r,{n:`03`,name:`Capacity meter`,use:`How much of a bracket, a cap or a contribution limit is actually used. Hatching is unused room — never filled with colour.`,dos:[`A statutory cap or contribution limit`,`Bracket headroom before the next threshold`],donts:[`Progress toward a soft goal — use BulletChart`],code:`<CapacityMeter label="HSA contribution" used={4200} limit={8750} note="Family coverage, TY2026" />`,children:(0,x.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,x.jsx)(p,{segments:[{value:11600,color:t[0]},{value:35550,color:t[1]},{value:53250,color:t[2]},{value:46100,color:t[3]}],room:38400,scale:[`10%`,`12%`,`22%`,`24%`,`Room`],caption:`Taxable income poured into the 2026 married-filing-jointly brackets; $38,400 of 24% room is unused.`}),(0,x.jsx)(p,{segments:[{value:16500,color:t[1]}],room:8e3,scale:[`Funded $16,500`,`Remaining $8,000`],caption:`Employee deferral against the $24,500 limit.`})]})})},E={name:`Scenario columns`,render:()=>(0,x.jsx)(r,{n:`04`,name:`Scenario columns`,use:`Two or three futures priced side by side, divided by hairlines rather than cards.`,wide:!0,children:(0,x.jsx)(l,{columns:[{tag:`Scenario A`,title:`Do nothing`,note:`Current withholding and elections carried forward.`,body:(0,x.jsx)(c,{tight:!0,rows:[{k:`Taxable income`,v:a(279150)},{k:`Federal`,v:a(58177)},{k:`State`,v:a(14806)},{k:`All-in`,v:a(83024),total:!0}]})},{tag:`Scenario B`,title:`Fund the plan`,accent:`a`,note:`Solo 401(k), HSA top-up, PTE election.`,body:(0,x.jsx)(c,{tight:!0,rows:[{k:`Taxable income`,v:a(233900)},{k:`Federal`,v:a(35284)},{k:`State`,v:a(11960)},{k:`All-in`,v:a(58285),total:!0}]})},{tag:`Scenario C`,title:`Plan + charitable bunch`,accent:`b`,note:`Two years of giving into a DAF this December.`,body:(0,x.jsx)(c,{tight:!0,rows:[{k:`Taxable income`,v:a(198900)},{k:`Federal`,v:a(27140)},{k:`State`,v:a(11960)},{k:`All-in`,v:a(50141),total:!0}]})}]})})},D={render:()=>(0,x.jsx)(r,{n:`05`,name:`Dense table`,use:`The worksheet table: tighter leading, hairline rows, a highlighted row for the client's own bracket and a rule-topped total.`,children:(0,x.jsxs)(`table`,{className:`r-table dense`,children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{children:`Bracket`}),(0,x.jsx)(`th`,{children:`Range`}),(0,x.jsx)(`th`,{style:{textAlign:`right`},children:`Income in bracket`}),(0,x.jsx)(`th`,{style:{textAlign:`right`},children:`Tax`})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:`10%`}),(0,x.jsx)(`td`,{children:`$0 – $23,850`}),(0,x.jsx)(`td`,{className:`n`,children:a(23850)}),(0,x.jsx)(`td`,{className:`n`,children:a(2385)})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:`12%`}),(0,x.jsx)(`td`,{children:`$23,851 – $96,950`}),(0,x.jsx)(`td`,{className:`n`,children:a(73100)}),(0,x.jsx)(`td`,{className:`n`,children:a(8772)})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:`22%`}),(0,x.jsx)(`td`,{children:`$96,951 – $206,700`}),(0,x.jsx)(`td`,{className:`n`,children:a(109750)}),(0,x.jsx)(`td`,{className:`n`,children:a(24145)})]}),(0,x.jsxs)(`tr`,{className:`hi`,children:[(0,x.jsx)(`td`,{children:`24%`}),(0,x.jsx)(`td`,{children:`$206,701 – $394,600`}),(0,x.jsx)(`td`,{className:`n`,children:a(72450)}),(0,x.jsx)(`td`,{className:`n`,children:a(17388)})]}),(0,x.jsxs)(`tr`,{className:`total`,children:[(0,x.jsx)(`td`,{children:`Total`}),(0,x.jsx)(`td`,{children:`Marginal 24%`}),(0,x.jsx)(`td`,{className:`n`,children:a(279150)}),(0,x.jsx)(`td`,{className:`n`,children:a(52690)})]})]})]})})},O={render:()=>(0,x.jsx)(r,{n:`06`,name:`Observations`,use:`What the advisor says out loud, keyed to the worksheet above. Green is an opportunity, gold a watch item, red a problem.`,wide:!0,children:(0,x.jsx)(y,{items:[{kind:`op`,tag:`Opportunity`,title:`$38,400 of 24% room`,body:`Room to accelerate income or convert to Roth before the bracket closes at year end.`},{kind:`wa`,tag:`Watch`,title:`NIIT threshold crossed`,body:`MAGI sits $39,480 above the $250,000 threshold; investment income carries the 3.8% surtax.`},{kind:`no`,tag:`Exposure`,title:`Underpayment risk`,body:`Withholding covers 91% of prior-year tax — below the 110% safe harbour for this income level.`}]})})},k={render:()=>(0,x.jsx)(r,{n:`07`,name:`Chips & flags`,use:`Status vocabulary. In-estate, out-of-estate, flagged for review — never colour alone, always a word.`,children:(0,x.jsx)(g,{chips:[{label:`In estate`,tone:`in`},{label:`Outside estate`,tone:`out`},{label:`Needs review`,tone:`flag`},{label:`Illinois situs`},{label:`Irrevocable`}]})})},A={render:()=>(0,x.jsx)(r,{n:`08`,name:`Document register`,use:`Vault summary: what exists, when it was signed, what is missing.`,children:(0,x.jsx)(s,{docs:[{name:`Revocable trust — John`,note:`Restated March 2021`,status:`On file`,tone:`in`},{name:`Revocable trust — Jane`,note:`Restated March 2021`,status:`On file`,tone:`in`},{name:`Pour-over wills`,note:`Executed 2021`,status:`On file`,tone:`in`},{name:`Financial powers of attorney`,note:`Last reviewed 2019`,status:`Stale`,tone:`flag`},{name:`Beneficiary designations — 401(k)`,status:`Missing`,tone:`out`}]})})},j={render:()=>(0,x.jsx)(r,{n:`09`,name:`Column set & key lines`,use:`Small multiples for one line item across five years, plus the swatch legend used beneath ledger charts.`,children:(0,x.jsxs)(`div`,{className:`grid gap-12 md:grid-cols-[1.6fr_1fr]`,children:[(0,x.jsx)(u,{items:[{label:`2022`,value:246e3},{label:`2023`,value:299e3},{label:`2024`,value:296e3},{label:`2025`,value:331e3},{label:`2026e`,value:358e3,emphasize:!0}],format:e=>`$${(e/1e3).toFixed(0)}k`}),(0,x.jsx)(_,{items:[{color:t[0],text:`Filed — return as submitted`},{color:t[2],text:`Projected — current-year estimate`},{color:t[3],text:`Planned — after recommendations`}]})]})})},M={name:`Lesser-of worksheet`,render:()=>(0,x.jsx)(r,{n:`10`,name:`Lesser-of worksheet`,use:`A worksheet whose answer is the smaller of two independently-computed tests — bordered and set apart from the reconciling rows above it, not just another total line.`,dos:[`NIIT vs. excess-MAGI comparisons`,`Any 'lesser of' or 'greater of' statutory test`],donts:[`A plain running total — use LedgerRows' total row instead`],code:`<LesserOfBox label="Lesser of the two × 3.8%" value="$1,735" />`,wide:!0,children:(0,x.jsx)(l,{columns:[{tag:`Baseline · 2025`,title:`$1,735 of surtax`,body:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c,{tight:!0,rows:[{k:`Step 1 · net investment income`,v:``,op:!0},{k:`Taxable interest`,v:a(14100),sub:!0},{k:`Ordinary dividends`,v:a(9804),sub:!0},{k:`Net capital gain`,v:a(0),sub:!0,zero:!0},{k:`Passive rental & K-1`,v:a(21754),sub:!0},{k:`Total NII`,v:a(45658),total:!0},{k:`Step 2 · MAGI over threshold`,v:``,op:!0},{k:`MAGI`,v:a(357058),sub:!0},{k:`Less threshold`,v:`(${a(25e4)})`,sub:!0,neg:!0},{k:`Excess MAGI`,v:a(107058),total:!0}]}),(0,x.jsx)(d,{label:`Lesser of the two × 3.8%`,value:a(1735)})]})},{tag:`Scenario 1 · 2026`,title:`$1,734 of surtax`,accent:`a`,body:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c,{tight:!0,rows:[{k:`Step 1 · net investment income`,v:``,op:!0},{k:`Taxable interest`,v:a(14100),sub:!0},{k:`Ordinary dividends`,v:a(9804),sub:!0},{k:`Net capital gain`,v:a(0),sub:!0,zero:!0},{k:`Passive rental & K-1`,v:a(21728),sub:!0},{k:`Total NII`,v:a(45632),total:!0},{k:`Step 2 · MAGI over threshold`,v:``,op:!0},{k:`MAGI`,v:a(333558),sub:!0},{k:`Less threshold`,v:`(${a(25e4)})`,sub:!0,neg:!0},{k:`Excess MAGI`,v:a(83558),total:!0}]}),(0,x.jsx)(d,{label:`Lesser of the two × 3.8%`,value:a(1734),tone:`accent2`})]})},{tag:`Scenario 2 · 2026`,title:`$4,743 of surtax`,accent:`b`,body:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c,{tight:!0,rows:[{k:`Step 1 · net investment income`,v:``,op:!0},{k:`Taxable interest`,v:a(14100),sub:!0},{k:`Ordinary dividends`,v:a(9804),sub:!0},{k:`Net capital gain`,v:a(58474),sub:!0},{k:`Passive rental & K-1`,v:a(21754),sub:!0},{k:`Total NII`,v:a(104132),total:!0},{k:`Step 2 · MAGI over threshold`,v:``,op:!0},{k:`MAGI`,v:a(554900),sub:!0},{k:`Less threshold`,v:`(${a(25e4)})`,sub:!0,neg:!0},{k:`Excess MAGI`,v:a(304900),total:!0}]}),(0,x.jsx)(d,{label:`Lesser of the two × 3.8%`,value:a(3957),tone:`accent3`})]})}]})})},N={render:()=>(0,x.jsx)(r,{n:`11`,name:`Assumptions & footnotes`,use:`Every ledger deck closes here. Assumptions in a key/value grid, sources numbered, disclaimer last.`,wide:!0,children:(0,x.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,x.jsx)(v,{items:[{k:`Valuation date`,v:`August 4, 2026`},{k:`Filing status`,v:`Married filing jointly`},{k:`Domicile`,v:`Illinois`},{k:`Federal exemption`,v:`$15.0M per spouse`},{k:`Growth assumption`,v:`5.5% nominal`},{k:`Discount rate`,v:`4.2% §7520`}]}),(0,x.jsx)(m,{notes:[`Figures are estimates prepared from client-supplied statements and are not a tax return.`,`State estate tax modelled on Illinois rates with no portability of the state exemption.`],disclaimer:`This material is for discussion purposes only and is not legal, tax or investment advice. Projections are illustrative, depend on assumptions that will change, and are not a guarantee of future results.`})]})})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Ledger rows",
  render: () => <Specimen n="01" name="Ledger rows" use="Label left, tabular figure right. Sub-rows indent, operators are captioned, the total carries the only heavy rule on the slide." dos={["The default numeric list in ledger mode", "Anything that ends in a total"]} donts={["Comparing two years side by side — use ScenarioColumns"]} code={\`<LedgerRows
  rows={[
    { label: "Wages", value: "$212,400" },
    { label: "Schedule C", value: "$78,200", sub: true },
    { label: "Total income", value: "$358,880", total: true },
  ]}
/>\`} props={[{
    name: "rows",
    type: "{ label; value; sub?; op?; total? }[]",
    required: true
  }]}>
      <LedgerRows rows={[{
      k: "Income",
      v: "",
      op: true
    }, {
      k: "Wages (W-2)",
      v: usd(212400)
    }, {
      k: "Schedule C — net",
      v: usd(78200)
    }, {
      k: "Qualified dividends",
      v: usd(18980),
      sub: true
    }, {
      k: "Rental (Sch E)",
      v: usd(9200)
    }, {
      k: "Passive loss carryforward",
      v: "—",
      zero: true
    }, {
      k: "Above-the-line adjustments",
      v: \`(\${usd(29300)})\`,
      neg: true
    }, {
      k: "Adjusted gross income",
      v: usd(289480),
      total: true
    }]} />
    </Specimen>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Worksheet",
  render: () => <Specimen n="02" name="Worksheet" use="A titled reconciliation with a hero figure on top. Three across is the densest arrangement that still reads at the back of a room." wide>
      <div className="grid gap-12 md:grid-cols-3">
        <Worksheet label="Federal — as filed 2025" figure={usd(58177)} rows={[{
        k: "Taxable income",
        v: usd(279150)
      }, {
        k: "Tax before credits",
        v: usd(60977)
      }, {
        k: "Credits",
        v: \`(\${usd(2800)})\`,
        neg: true
      }, {
        k: "Total federal",
        v: usd(58177),
        total: true
      }]} />
        <Worksheet label="Federal — planned 2026" figure={usd(35284)} tone="accent2" delta={{
        text: "▼ $22,893 vs. filed",
        dir: "down"
      }} rows={[{
        k: "Taxable income",
        v: usd(233900)
      }, {
        k: "Tax before credits",
        v: usd(38084)
      }, {
        k: "Credits",
        v: \`(\${usd(2800)})\`,
        neg: true
      }, {
        k: "Total federal",
        v: usd(35284),
        total: true
      }]} />
        <Worksheet label="Combined liability" figure={usd(105524)} tone="accent3" rows={[{
        k: "Federal",
        v: usd(58177)
      }, {
        k: "State (IL)",
        v: usd(14806)
      }, {
        k: "Self-employment",
        v: usd(11041)
      }, {
        k: "NIIT",
        v: usd(1500),
        sub: true
      }, {
        k: "All-in",
        v: usd(105524),
        total: true
      }]} footnote="Marginal rate 32% · effective rate 14.4% · safe-harbour target 110% of prior year." />
      </div>
    </Specimen>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Capacity meter",
  render: () => <Specimen n="03" name="Capacity meter" use="How much of a bracket, a cap or a contribution limit is actually used. Hatching is unused room — never filled with colour." dos={["A statutory cap or contribution limit", "Bracket headroom before the next threshold"]} donts={["Progress toward a soft goal — use BulletChart"]} code={\`<CapacityMeter label="HSA contribution" used={4200} limit={8750} note="Family coverage, TY2026" />\`}>
      <div className="flex flex-col gap-8">
        <CapacityMeter segments={[{
        value: 11600,
        color: SERIES[0]!
      }, {
        value: 35550,
        color: SERIES[1]!
      }, {
        value: 53250,
        color: SERIES[2]!
      }, {
        value: 46100,
        color: SERIES[3]!
      }]} room={38400} scale={["10%", "12%", "22%", "24%", "Room"]} caption="Taxable income poured into the 2026 married-filing-jointly brackets; $38,400 of 24% room is unused." />
        <CapacityMeter segments={[{
        value: 16500,
        color: SERIES[1]!
      }]} room={8000} scale={["Funded $16,500", "Remaining $8,000"]} caption="Employee deferral against the $24,500 limit." />
      </div>
    </Specimen>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Scenario columns",
  render: () => <Specimen n="04" name="Scenario columns" use="Two or three futures priced side by side, divided by hairlines rather than cards." wide>
      <ScenarioColumns columns={[{
      tag: "Scenario A",
      title: "Do nothing",
      note: "Current withholding and elections carried forward.",
      body: <LedgerRows tight rows={[{
        k: "Taxable income",
        v: usd(279150)
      }, {
        k: "Federal",
        v: usd(58177)
      }, {
        k: "State",
        v: usd(14806)
      }, {
        k: "All-in",
        v: usd(83024),
        total: true
      }]} />
    }, {
      tag: "Scenario B",
      title: "Fund the plan",
      accent: "a",
      note: "Solo 401(k), HSA top-up, PTE election.",
      body: <LedgerRows tight rows={[{
        k: "Taxable income",
        v: usd(233900)
      }, {
        k: "Federal",
        v: usd(35284)
      }, {
        k: "State",
        v: usd(11960)
      }, {
        k: "All-in",
        v: usd(58285),
        total: true
      }]} />
    }, {
      tag: "Scenario C",
      title: "Plan + charitable bunch",
      accent: "b",
      note: "Two years of giving into a DAF this December.",
      body: <LedgerRows tight rows={[{
        k: "Taxable income",
        v: usd(198900)
      }, {
        k: "Federal",
        v: usd(27140)
      }, {
        k: "State",
        v: usd(11960)
      }, {
        k: "All-in",
        v: usd(50141),
        total: true
      }]} />
    }]} />
    </Specimen>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="05" name="Dense table" use="The worksheet table: tighter leading, hairline rows, a highlighted row for the client's own bracket and a rule-topped total.">
      <table className="r-table dense">
        <thead>
          <tr>
            <th>Bracket</th>
            <th>Range</th>
            <th style={{
            textAlign: "right"
          }}>Income in bracket</th>
            <th style={{
            textAlign: "right"
          }}>Tax</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10%</td>
            <td>$0 – $23,850</td>
            <td className="n">{usd(23850)}</td>
            <td className="n">{usd(2385)}</td>
          </tr>
          <tr>
            <td>12%</td>
            <td>$23,851 – $96,950</td>
            <td className="n">{usd(73100)}</td>
            <td className="n">{usd(8772)}</td>
          </tr>
          <tr>
            <td>22%</td>
            <td>$96,951 – $206,700</td>
            <td className="n">{usd(109750)}</td>
            <td className="n">{usd(24145)}</td>
          </tr>
          <tr className="hi">
            <td>24%</td>
            <td>$206,701 – $394,600</td>
            <td className="n">{usd(72450)}</td>
            <td className="n">{usd(17388)}</td>
          </tr>
          <tr className="total">
            <td>Total</td>
            <td>Marginal 24%</td>
            <td className="n">{usd(279150)}</td>
            <td className="n">{usd(52690)}</td>
          </tr>
        </tbody>
      </table>
    </Specimen>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="06" name="Observations" use="What the advisor says out loud, keyed to the worksheet above. Green is an opportunity, gold a watch item, red a problem." wide>
      <ObservationGrid items={[{
      kind: "op",
      tag: "Opportunity",
      title: "$38,400 of 24% room",
      body: "Room to accelerate income or convert to Roth before the bracket closes at year end."
    }, {
      kind: "wa",
      tag: "Watch",
      title: "NIIT threshold crossed",
      body: "MAGI sits $39,480 above the $250,000 threshold; investment income carries the 3.8% surtax."
    }, {
      kind: "no",
      tag: "Exposure",
      title: "Underpayment risk",
      body: "Withholding covers 91% of prior-year tax — below the 110% safe harbour for this income level."
    }]} />
    </Specimen>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="07" name="Chips & flags" use="Status vocabulary. In-estate, out-of-estate, flagged for review — never colour alone, always a word.">
      <ChipRow chips={[{
      label: "In estate",
      tone: "in"
    }, {
      label: "Outside estate",
      tone: "out"
    }, {
      label: "Needs review",
      tone: "flag"
    }, {
      label: "Illinois situs"
    }, {
      label: "Irrevocable"
    }]} />
    </Specimen>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="08" name="Document register" use="Vault summary: what exists, when it was signed, what is missing.">
      <DocumentList docs={[{
      name: "Revocable trust — John",
      note: "Restated March 2021",
      status: "On file",
      tone: "in"
    }, {
      name: "Revocable trust — Jane",
      note: "Restated March 2021",
      status: "On file",
      tone: "in"
    }, {
      name: "Pour-over wills",
      note: "Executed 2021",
      status: "On file",
      tone: "in"
    }, {
      name: "Financial powers of attorney",
      note: "Last reviewed 2019",
      status: "Stale",
      tone: "flag"
    }, {
      name: "Beneficiary designations — 401(k)",
      status: "Missing",
      tone: "out"
    }]} />
    </Specimen>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="09" name="Column set & key lines" use="Small multiples for one line item across five years, plus the swatch legend used beneath ledger charts.">
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <ColumnSet items={[{
        label: "2022",
        value: 246000
      }, {
        label: "2023",
        value: 299000
      }, {
        label: "2024",
        value: 296000
      }, {
        label: "2025",
        value: 331000
      }, {
        label: "2026e",
        value: 358000,
        emphasize: true
      }]} format={n => \`$\${(n / 1000).toFixed(0)}k\`} />
        <KeyLines items={[{
        color: SERIES[0]!,
        text: "Filed — return as submitted"
      }, {
        color: SERIES[2]!,
        text: "Projected — current-year estimate"
      }, {
        color: SERIES[3]!,
        text: "Planned — after recommendations"
      }]} />
      </div>
    </Specimen>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Lesser-of worksheet",
  render: () => <Specimen n="10" name="Lesser-of worksheet" use="A worksheet whose answer is the smaller of two independently-computed tests — bordered and set apart from the reconciling rows above it, not just another total line." dos={["NIIT vs. excess-MAGI comparisons", "Any 'lesser of' or 'greater of' statutory test"]} donts={["A plain running total — use LedgerRows' total row instead"]} code={\`<LesserOfBox label="Lesser of the two × 3.8%" value="$1,735" />\`} wide>
      <ScenarioColumns columns={[{
      tag: "Baseline · 2025",
      title: "$1,735 of surtax",
      body: <>
                <LedgerRows tight rows={[{
          k: "Step 1 · net investment income",
          v: "",
          op: true
        }, {
          k: "Taxable interest",
          v: usd(14100),
          sub: true
        }, {
          k: "Ordinary dividends",
          v: usd(9804),
          sub: true
        }, {
          k: "Net capital gain",
          v: usd(0),
          sub: true,
          zero: true
        }, {
          k: "Passive rental & K-1",
          v: usd(21754),
          sub: true
        }, {
          k: "Total NII",
          v: usd(45658),
          total: true
        }, {
          k: "Step 2 · MAGI over threshold",
          v: "",
          op: true
        }, {
          k: "MAGI",
          v: usd(357058),
          sub: true
        }, {
          k: "Less threshold",
          v: \`(\${usd(250000)})\`,
          sub: true,
          neg: true
        }, {
          k: "Excess MAGI",
          v: usd(107058),
          total: true
        }]} />
                <LesserOfBox label="Lesser of the two × 3.8%" value={usd(1735)} />
              </>
    }, {
      tag: "Scenario 1 · 2026",
      title: "$1,734 of surtax",
      accent: "a",
      body: <>
                <LedgerRows tight rows={[{
          k: "Step 1 · net investment income",
          v: "",
          op: true
        }, {
          k: "Taxable interest",
          v: usd(14100),
          sub: true
        }, {
          k: "Ordinary dividends",
          v: usd(9804),
          sub: true
        }, {
          k: "Net capital gain",
          v: usd(0),
          sub: true,
          zero: true
        }, {
          k: "Passive rental & K-1",
          v: usd(21728),
          sub: true
        }, {
          k: "Total NII",
          v: usd(45632),
          total: true
        }, {
          k: "Step 2 · MAGI over threshold",
          v: "",
          op: true
        }, {
          k: "MAGI",
          v: usd(333558),
          sub: true
        }, {
          k: "Less threshold",
          v: \`(\${usd(250000)})\`,
          sub: true,
          neg: true
        }, {
          k: "Excess MAGI",
          v: usd(83558),
          total: true
        }]} />
                <LesserOfBox label="Lesser of the two × 3.8%" value={usd(1734)} tone="accent2" />
              </>
    }, {
      tag: "Scenario 2 · 2026",
      title: "$4,743 of surtax",
      accent: "b",
      body: <>
                <LedgerRows tight rows={[{
          k: "Step 1 · net investment income",
          v: "",
          op: true
        }, {
          k: "Taxable interest",
          v: usd(14100),
          sub: true
        }, {
          k: "Ordinary dividends",
          v: usd(9804),
          sub: true
        }, {
          k: "Net capital gain",
          v: usd(58474),
          sub: true
        }, {
          k: "Passive rental & K-1",
          v: usd(21754),
          sub: true
        }, {
          k: "Total NII",
          v: usd(104132),
          total: true
        }, {
          k: "Step 2 · MAGI over threshold",
          v: "",
          op: true
        }, {
          k: "MAGI",
          v: usd(554900),
          sub: true
        }, {
          k: "Less threshold",
          v: \`(\${usd(250000)})\`,
          sub: true,
          neg: true
        }, {
          k: "Excess MAGI",
          v: usd(304900),
          total: true
        }]} />
                <LesserOfBox label="Lesser of the two × 3.8%" value={usd(3957)} tone="accent3" />
              </>
    }]} />
    </Specimen>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="11" name="Assumptions & footnotes" use="Every ledger deck closes here. Assumptions in a key/value grid, sources numbered, disclaimer last." wide>
      <div className="flex flex-col gap-8">
        <AssumptionGrid items={[{
        k: "Valuation date",
        v: "August 4, 2026"
      }, {
        k: "Filing status",
        v: "Married filing jointly"
      }, {
        k: "Domicile",
        v: "Illinois"
      }, {
        k: "Federal exemption",
        v: "$15.0M per spouse"
      }, {
        k: "Growth assumption",
        v: "5.5% nominal"
      }, {
        k: "Discount rate",
        v: "4.2% §7520"
      }]} />
        <Footnotes notes={["Figures are estimates prepared from client-supplied statements and are not a tax return.", "State estate tax modelled on Illinois rates with no portability of the state exemption."]} disclaimer="This material is for discussion purposes only and is not legal, tax or investment advice. Projections are illustrative, depend on assumptions that will change, and are not a guarantee of future results." />
      </div>
    </Specimen>
}`,...N.parameters?.docs?.source}}},P=[`LedgerRowsStory`,`WorksheetStory`,`CapacityMeterStory`,`ScenarioColumnsStory`,`DenseTable`,`Observations`,`ChipsAndFlags`,`DocumentRegister`,`ColumnSetAndKeyLines`,`LesserOfWorksheet`,`AssumptionsAndFootnotes`]})))()}F();export{N as AssumptionsAndFootnotes,T as CapacityMeterStory,k as ChipsAndFlags,j as ColumnSetAndKeyLines,D as DenseTable,A as DocumentRegister,C as LedgerRowsStory,M as LesserOfWorksheet,O as Observations,E as ScenarioColumnsStory,w as WorksheetStory,P as __namedExportsOrder,S as default};