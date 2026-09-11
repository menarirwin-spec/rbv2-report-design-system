import{n as e}from"./iframe-Baufd4UZ.js";import{h as t,v as ee}from"./primitives-DpgJp73y.js";import{n,r}from"./specimen-u4n8q164.js";import{a as te,i as ne}from"./deck-parts-DNfPY8S8.js";import{n as i,r as re,t as a}from"./fixtures-Cgw8W8hE.js";import{_ as ie,a as ae,c as oe,d as se,f as ce,g as le,h as ue,l as de,m as o,n as fe,o as pe,p as me,r as he,s as ge,t as _e,u as ve,v as ye,y as be}from"./charts-narrative-BVkbpJww.js";import{_ as xe,a as Se,b as Ce,c as we,h as Te,i as Ee,n as De,o as Oe,s as ke,t as Ae,v as je,x as Me,y as Ne}from"./charts-extended-ZbRFNk-_.js";import{a as Pe,c as Fe,d as Ie,f as Le,i as Re,l as s,m as ze,n as Be,p as Ve,s as c,t as l}from"./charts-more-BidlV6a3.js";import{n as u}from"./rolldown-runtime-DkW27tQK.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=u((()=>{r(),ee(),be(),ve(),Me(),ze(),te(),re(),d=e(),f={title:`Report Design System/04 Visualizations`,parameters:{layout:`padded`}},p={render:()=>(0,d.jsx)(n,{n:`01`,name:`Waffle`,use:`Composition as countable units. Reads as a share without a percentage label.`,children:(0,d.jsx)(ie,{parts:i,unitNote:`100 units = $357,880 of total income. Each unit ≈ $3,579.`})})},m={name:`Proportion band`,render:()=>(0,d.jsx)(n,{n:`02`,name:`Proportion band`,use:`The compact version — one line, inline legend. Use when the slide already has a figure.`,children:(0,d.jsx)(o,{parts:i})})},h={render:()=>(0,d.jsx)(n,{n:`03`,name:`Waterfall`,use:`How a headline number is built. Ideal for income → adjustments → taxable → tax.`,children:(0,d.jsx)(ye,{items:[{label:`W-2 wages`,value:212400},{label:`Schedule C`,value:78200},{label:`Investment`,value:58080},{label:`Rental`,value:9200},{label:`Adjustments`,value:-29300},{label:`Taxable income`,value:328580,kind:`total`}]})})},g={render:()=>(0,d.jsx)(n,{n:`04`,name:`Bullet`,use:`Actual against a cap or target. The honest way to show a SALT ceiling.`,children:(0,d.jsx)(se,{rows:[{label:`State & local tax`,value:55150,target:1e4,max:6e4,note:`Marker = $10,000 cap. $45,150 paid above it.`},{label:`Solo 401(k) deferral`,value:14500,target:24500,max:3e4,note:`Marker = 2026 employee limit.`},{label:`HSA (family)`,value:8750,target:8750,max:1e4,note:`Fully funded to the 2026 limit.`}]})})},_={render:()=>(0,d.jsx)(n,{n:`05`,name:`Dumbbell`,use:`Filed year versus planned year, line by line. Replaces side-by-side bars.`,children:(0,d.jsx)(ce,{aLabel:`2025 filed`,bLabel:`2026 projected`,rows:[{label:`Federal tax`,a:51505,b:43120},{label:`CA tax`,a:24800,b:21400},{label:`Retirement deferral`,a:14500,b:24500},{label:`Itemized deductions`,a:50400,b:61300}]})})},v={render:()=>(0,d.jsx)(n,{n:`06`,name:`Slope`,use:`Before and after, four lines maximum. The savings story in one gesture.`,children:(0,d.jsx)(le,{fromLabel:`Without planning`,toLabel:`With planning`,series:[{label:`Federal`,from:51505,to:43120},{label:`State`,from:24800,to:21400},{label:`Payroll`,from:18900,to:17650}]})})},y={render:()=>(0,d.jsx)(n,{n:`07`,name:`Marimekko`,use:`Two dimensions at once — entity size across the x-axis, internal mix down the y.`,children:(0,d.jsx)(me,{columns:[{label:`Operating business`,weight:41,parts:[{label:`Voting`,value:28},{label:`Non-voting`,value:72}]},{label:`Securities`,weight:23,parts:[{label:`Taxable`,value:61},{label:`Deferred`,value:39}]},{label:`Real property`,weight:15,parts:[{label:`Encumbered`,value:44},{label:`Free & clear`,value:56}]},{label:`Other`,weight:12,parts:[{label:`Insurance`,value:66},{label:`Personal`,value:34}]}]})})},b={name:`Radial gauge`,render:()=>(0,d.jsx)(n,{n:`08`,name:`Radial gauge`,use:`A single share, stated once. Never more than one per slide.`,children:(0,d.jsx)(ue,{pct:38,value:`$49.8M`,caption:`Share of the taxable estate exposed above the combined 2026 exemption.`})})},x={render:()=>(0,d.jsx)(n,{n:`09`,name:`Sankey ribbons`,use:`Where the money goes. The distribution slide, upgraded from boxes.`,dos:[`One-directional flow from a single total`,`Three to seven destinations`],donts:[`Mutual flows — use ChordDiagram`,`Destinations under 2% of the total; group them`],code:`<SankeyFlow total={{ label: "Gross estate", value: 491800000 }} targets={targets} />`,children:(0,d.jsx)(pe,{source:{label:`Doe Family Trust`,value:624e5},targets:[{label:`Marital share`,value:312e5},{label:`Children, per stirpes`,value:187e5},{label:`Grandchildren (GST)`,value:83e5},{label:`Charitable remainder`,value:42e5}]})})},S={render:()=>(0,d.jsx)(n,{n:`10`,name:`Treemap`,use:`Nested magnitudes at a glance. Best for estate composition with six or fewer classes.`,children:(0,d.jsx)(de,{items:a})})},C={render:()=>(0,d.jsx)(n,{n:`11`,name:`Orbit rings`,use:`Structure around a center — entities held by a trust, sized by value.`,children:(0,d.jsxs)(`div`,{className:`grid items-center gap-10 md:grid-cols-[auto_1fr]`,children:[(0,d.jsx)(ae,{center:{label:`Taxable estate`,value:`$131.1M`},nodes:[{label:`Holdco LLC`,value:41},{label:`Brokerage`,value:23},{label:`Ranch LP`,value:15},{label:`IRA / 401(k)`,value:6},{label:`ILIT`,value:4,ring:2},{label:`GRAT I`,value:9,ring:2},{label:`GRAT II`,value:9,ring:2},{label:`DAF`,value:3,ring:2}]}),(0,d.jsx)(t,{className:`max-w-[46ch]`,children:`Inner ring holds directly-owned assets; outer ring holds irrevocable structures. Node area encodes value, so the reader sees concentration before reading a single label.`})]})})},w={name:`Arc diagram`,render:()=>(0,d.jsx)(n,{n:`12`,name:`Arc diagram`,use:`Relationships without a hairball — trustees, beneficiaries and powers on one spine.`,children:(0,d.jsx)(_e,{nodes:[`John`,`Jane`,`RLT`,`ILIT`,`GRAT I`,`GRAT II`,`Child A`,`Child B`,`Child C`],links:[[0,2],[1,2],[2,6],[2,7],[2,8],[0,3],[3,6],[1,4],[0,5]]})})},T={name:`Bubble field`,render:()=>(0,d.jsx)(n,{n:`13`,name:`Bubble field`,use:`Magnitude comparison with no axes. Good for opportunity sizing.`,children:(0,d.jsx)(fe,{items:[{label:`Solo 401(k)`,value:4180},{label:`CA PTE election`,value:2950},{label:`Backdoor Roth`,value:1100},{label:`HSA top-up`,value:890},{label:`DAF bunching`,value:650}]})})},E={render:()=>(0,d.jsx)(n,{n:`14`,name:`Isotype`,use:`Countable marks for figures a client should feel, not just read.`,children:(0,d.jsx)(he,{unit:500,unitLabel:`$500 of projected annual savings`,items:[{label:`Solo 401(k)`,value:4180},{label:`CA PTE election`,value:2950},{label:`Backdoor Roth`,value:1100},{label:`HSA top-up`,value:890}]})})},D={name:`Spark grid`,render:()=>(0,d.jsx)(n,{n:`15`,name:`Spark grid`,use:`Small multiples. Five years of history per line item, without five charts.`,children:(0,d.jsx)(ge,{series:[{label:`W-2 wages`,values:[168,179,191,203,212],last:`$212.4k`},{label:`Schedule C`,values:[41,52,60,71,78],last:`$78.2k`},{label:`Capital gains`,values:[12,48,22,31,39],last:`$39.1k`},{label:`Effective rate`,values:[16.9,16.1,15.4,14.9,14.4],last:`14.4%`},{label:`Deductions`,values:[38,41,44,47,50],last:`$50.4k`},{label:`Estate value`,values:[96,104,113,122,131],last:`$131.1M`}]})})},O={name:`Timeline spine`,render:()=>(0,d.jsx)(n,{n:`16`,name:`Timeline spine`,use:`Sequencing and deadlines. Filled dots are already done.`,children:(0,d.jsx)(oe,{items:[{period:`Q3 2026 · now`,title:`Open Solo 401(k)`,note:`Plan document by Sept 30.`,done:!0},{period:`Q4 2026`,title:`Fund deferral`,note:`$24,500 employee limit by Dec 31.`},{period:`Q1 2027`,title:`File 2026 return`,note:`Confirm PTE credit lands.`},{period:`Q2 2027`,title:`PTE prepayment`,note:`June 15 for the 2027 election.`}]})})},k={render:()=>(0,d.jsx)(n,{n:`17`,name:`Sunburst`,use:`A hierarchy read middle-out — income category on the inner ring, source on the outer.`,wide:!0,children:(0,d.jsx)(Ne,{centerLabel:`Total income`,centerValue:`$357.9k`,nodes:[{label:`W-2 wages`,value:212400,children:[{label:`Base`,value:168e3},{label:`Bonus`,value:32400},{label:`RSU vest`,value:12e3}]},{label:`Schedule C`,value:78200,children:[{label:`Consulting`,value:58200},{label:`Royalties`,value:2e4}]},{label:`Capital gains`,value:39100,children:[{label:`Long-term`,value:31100},{label:`Short-term`,value:8e3}]},{label:`Dividends & interest`,value:18980,children:[{label:`Qualified`,value:13980},{label:`Ordinary`,value:5e3}]},{label:`Rental`,value:9200,children:[{label:`Net rents`,value:9200}]}]})})},A={name:`Stream graph`,render:()=>(0,d.jsx)(n,{n:`18`,name:`Stream graph`,use:`Composition over time when the total also moves. Five years of income mix.`,wide:!0,children:(0,d.jsx)(je,{periods:[`2022`,`2023`,`2024`,`2025`,`2026e`],series:[{label:`W-2 wages`,values:[168,179,191,203,212]},{label:`Schedule C`,values:[41,52,60,71,78]},{label:`Capital gains`,values:[12,48,22,31,39]},{label:`Dividends`,values:[11,13,15,17,19]},{label:`Rental`,values:[6,7,8,9,9]}]})})},j={render:()=>(0,d.jsx)(n,{n:`19`,name:`Beeswarm`,use:`Every opportunity on one axis, nothing pooled away. Colour carries the owner.`,wide:!0,children:(0,d.jsx)(Ae,{axisLabel:`Projected first-year savings, left to right`,items:[{label:`Solo 401(k)`,value:4180,group:`Retirement`},{label:`CA PTE`,value:2950,group:`State`},{label:`Backdoor Roth`,value:1100,group:`Retirement`},{label:`HSA top-up`,value:890,group:`Health`},{label:`DAF bunching`,value:650,group:`Charitable`},{label:`QCD`,value:420,group:`Charitable`},{label:`Loss harvest`,value:380,group:`Investment`},{label:`529 state credit`,value:240,group:`State`}]})})},M={render:()=>(0,d.jsx)(n,{n:`20`,name:`Lollipop`,use:`Ranked magnitudes with less ink than bars. The leader takes the accent.`,children:(0,d.jsx)(we,{rows:[{label:`Solo 401(k)`,value:4180},{label:`CA PTE election`,value:2950},{label:`Backdoor Roth`,value:1100},{label:`HSA top-up`,value:890},{label:`DAF bunching`,value:650}]})})},N={name:`Heat matrix`,render:()=>(0,d.jsx)(n,{n:`21`,name:`Heat matrix`,use:`Two categorical axes with one intensity — deduction type by quarter.`,wide:!0,children:(0,d.jsx)(ke,{unit:`Cells show dollars of deductible spend booked in each quarter.`,rows:[`Charitable`,`SALT`,`Mortgage interest`,`Medical`],cols:[`Q1`,`Q2`,`Q3`,`Q4`],values:[[1200,900,400,18400],[13800,13800,13800,13750],[5100,5050,5e3,4950],[0,2400,800,1100]]})})},P={name:`Cumulative curve`,render:()=>(0,d.jsx)(n,{n:`22`,name:`Cumulative curve`,use:`Concentration against an even split. Shows how few holdings carry the estate.`,children:(0,d.jsx)(Se,{items:a,note:`The dashed diagonal is a perfectly even estate. Distance from it is concentration risk.`})})},F={name:`Bracket ladder`,render:()=>(0,d.jsx)(n,{n:`23`,name:`Bracket ladder`,use:`Marginal brackets with the client's income poured in. Widths are real.`,wide:!0,children:(0,d.jsx)(De,{income:328580,brackets:[{rate:10,from:0,to:23850},{rate:12,from:23850,to:96950},{rate:22,from:96950,to:206700},{rate:24,from:206700,to:394600},{rate:32,from:394600,to:501050},{rate:35,from:501050,to:751600},{rate:37,from:751600,to:1e6}]})})},I={name:`Nested squares`,render:()=>(0,d.jsx)(n,{n:`24`,name:`Nested squares`,use:`Tufte-style nesting — exemption inside the estate, sized by area not length.`,children:(0,d.jsx)(Te,{unitNote:`Area, not width, encodes value — the exposed slice is the visible remainder.`,layers:[{label:`Gross estate`,value:1311e5},{label:`Combined exemption`,value:3e7},{label:`Illiquid share`,value:558e5},{label:`Projected federal tax`,value:4044e4}]})})},L={render:()=>(0,d.jsx)(n,{n:`25`,name:`Tornado`,use:`Sensitivity around a base case. Downside left, upside right, ranked by span.`,wide:!0,children:(0,d.jsx)(Ce,{baseLabel:`2026 projected tax · $43,120`,rows:[{label:`Schedule C profit ±20%`,low:-5200,high:5600},{label:`Capital gains realisation`,low:-3100,high:4400},{label:`PTE election timing`,low:-2950,high:0},{label:`Deferral funded in full`,low:-4180,high:900}]})})},R={name:`Radial timeline`,render:()=>(0,d.jsx)(n,{n:`26`,name:`Radial timeline`,use:`Twelve months on a dial. Spoke length carries urgency, not just position.`,children:(0,d.jsx)(xe,{centerLabel:`Aug 2026 → Jul 2027`,months:[`Aug`,`Sep`,`Oct`,`Nov`,`Dec`,`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`],events:[{month:1,label:`Solo 401(k) plan document`,weight:3},{month:4,label:`Fund employee deferral`,weight:3.4},{month:5,label:`Q4 estimate due`,weight:1.6},{month:7,label:`File 2026 return`,weight:2.2},{month:10,label:`2027 PTE prepayment`,weight:2.8}]})})},z={name:`Connected scatter`,render:()=>(0,d.jsx)(n,{n:`27`,name:`Connected scatter`,use:`Two measures moving together across years — income against effective rate.`,wide:!0,children:(0,d.jsx)(Ee,{xLabel:`Total income ($k)`,yLabel:`Effective rate (%)`,points:[{label:`2022`,x:238,y:16.9},{label:`2023`,x:299,y:16.1},{label:`2024`,x:296,y:15.4},{label:`2025`,x:331,y:14.9},{label:`2026e`,x:358,y:14.4}]})})},B={name:`Glyph grid`,render:()=>(0,d.jsx)(n,{n:`28`,name:`Glyph grid`,use:`Dear Data marks: disc area is savings, rings are effort, tick means it closes this year.`,wide:!0,children:(0,d.jsx)(Oe,{legend:`Disc area = first-year savings · rings = implementation effort · red tick = deadline inside 2026.`,items:[{label:`Solo 401(k)`,size:4180,effort:3,urgent:!0,note:`$4,180`},{label:`CA PTE`,size:2950,effort:2,urgent:!0,note:`$2,950`},{label:`Backdoor Roth`,size:1100,effort:2,note:`$1,100`},{label:`HSA top-up`,size:890,effort:1,urgent:!0,note:`$890`},{label:`DAF bunching`,size:650,effort:3,note:`$650`}]})})},V={render:()=>(0,d.jsx)(n,{n:`29`,name:`Chord`,use:`Value moving between entities, both directions at once — trusts, LLCs, beneficiaries.`,wide:!0,children:(0,d.jsx)(Be,{caption:`Ribbon width is the annual transfer; arc length is everything an entity touches.`,nodes:[`Doe Family Trust`,`Holdco LLC`,`Marital trust`,`GST trust`,`Charity`],links:[{from:0,to:2,value:312e5},{from:0,to:3,value:83e5},{from:1,to:0,value:146e5},{from:1,to:2,value:52e5},{from:0,to:4,value:42e5},{from:2,to:3,value:26e5}]})})},H={render:()=>(0,d.jsx)(n,{n:`30`,name:`Ridgeline`,use:`Shape of a year, five years deep. Good for cash-flow or realization seasonality.`,wide:!0,children:(0,d.jsx)(Ie,{xLabels:[`Q1`,`Q2`,`Q3`,`Q4`],rows:[{label:`2022`,values:[42,61,55,88],note:`$246k`},{label:`2023`,values:[51,58,62,104],note:`$299k`},{label:`2024`,values:[48,66,71,96],note:`$296k`},{label:`2025`,values:[56,72,78,118],note:`$331k`},{label:`2026e`,values:[61,79,84,126],note:`$358k`}]})})},U={name:`Step funnel`,render:()=>(0,d.jsx)(n,{n:`31`,name:`Step funnel`,use:`Gross income narrowed to tax owed, with the loss named at every step.`,children:(0,d.jsx)(Le,{steps:[{label:`Total income`,value:357880},{label:`Less adjustments`,value:341300,note:`SE tax, HSA, deferral`},{label:`Less deductions`,value:279150,note:`Schedule A itemized`},{label:`Taxable income`,value:279150,note:`after phase-outs`},{label:`Federal tax`,value:51420,note:`before credits`}]})})},W={render:()=>(0,d.jsx)(n,{n:`32`,name:`Icicle`,use:`A tree read left to right. Estate, then class, then holding — widths are dollars.`,wide:!0,children:(0,d.jsx)(c,{root:{label:`Taxable estate`,children:[{label:`Operating businesses`,value:524e5,children:[{label:`Holdco LLC`,value:341e5},{label:`Minority stakes`,value:183e5}]},{label:`Marketable securities`,value:386e5,children:[{label:`Brokerage`,value:234e5},{label:`Retirement`,value:152e5}]},{label:`Real property`,value:245e5,children:[{label:`Ranch LP`,value:151e5},{label:`Residences`,value:94e5}]},{label:`Other`,value:156e5,children:[{label:`Insurance & cash`,value:156e5}]}]}})})},G={name:`Bullet (bars)`,render:()=>(0,d.jsx)(n,{n:`33`,name:`Bullet`,use:`Actual against target without a gauge. The most compact progress mark we have.`,children:(0,d.jsx)(l,{rows:[{label:`Employee deferral funded`,value:16500,target:24500,max:24500},{label:`HSA funded`,value:5200,target:8750,max:8750},{label:`Charitable bunching`,value:42e3,target:35e3,max:6e4},{label:`Effective rate`,value:14,target:13,max:22,unit:`%`}]})})},K={name:`Radial bars`,render:()=>(0,d.jsx)(n,{n:`34`,name:`Radial bars`,use:`Ranked magnitudes on a dial. Reads as a family, not a leaderboard.`,children:(0,d.jsx)(s,{caption:`Arc sweep is proportional to the largest item; rings are ordered outward by size.`,items:[{label:`Wages (W-2)`,value:2e5},{label:`Sch E — S-corp`,value:1e5},{label:`Taxable interest`,value:25e3},{label:`Ordinary dividends`,value:15e3},{label:`Sch C — Sally`,value:11130}]})})},q={name:`Fan projection`,render:()=>(0,d.jsx)(n,{n:`35`,name:`Fan projection`,use:`A base case with honest uncertainty. Bands widen as the forecast gets braver.`,wide:!0,children:(0,d.jsx)(Pe,{yLabel:`Projected federal tax`,years:[`2026e`,`2027`,`2028`,`2029`,`2030`],base:[51420,54200,57800,60400,63900],bands:[{spread:[0,4200,8600,13200,18400],opacity:.12},{spread:[0,2100,4300,6600,9200],opacity:.22}]})})},J={render:()=>(0,d.jsx)(n,{n:`36`,name:`Unit histogram`,use:`One dot per item. Counts stay countable — no bar-length estimation.`,wide:!0,children:(0,d.jsx)(Re,{unitLabel:`planning item`,caption:`Twenty-eight open items binned by the quarter they must close in.`,bins:[{label:`Q3 2026`,count:7,highlight:!0},{label:`Q4 2026`,count:11,highlight:!0},{label:`Q1 2027`,count:6},{label:`Q2 2027`,count:4}]})})},Y={name:`Parallel coordinates`,render:()=>(0,d.jsx)(n,{n:`37`,name:`Parallel coordinates`,use:`Four measures, one line per strategy. Crossings show the real trade-offs.`,wide:!0,children:(0,d.jsx)(Fe,{axes:[{label:`Savings`,min:0,max:5e3,format:e=>`$${(e/1e3).toFixed(1)}k`},{label:`Effort`,min:1,max:5,format:e=>`${e}`},{label:`Cash needed`,min:0,max:25e3,format:e=>`$${(e/1e3).toFixed(0)}k`},{label:`Years to payback`,min:0,max:6,format:e=>`${e}y`}],series:[{label:`Solo 401(k)`,values:[4180,3,24500,1],emphasize:!0},{label:`CA PTE`,values:[2950,2,18e3,1]},{label:`Backdoor Roth`,values:[1100,2,15e3,4]},{label:`DAF bunching`,values:[650,3,42e3/2,2]}]})})},X={name:`Year strip`,render:()=>(0,d.jsx)(n,{n:`38`,name:`Year strip`,use:`Fifty-two weeks as one field. Density shows when the plan actually demands attention.`,wide:!0,children:(0,d.jsx)(Ve,{caption:`Shaded weeks carry a filing, funding or election deadline; the darkest are non-movable.`,months:[`Aug`,`Sep`,`Oct`,`Nov`,`Dec`,`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`],weeks:Array.from({length:52},(e,t)=>({intensity:[3,8,14,19,20,21,32,33,36,45].includes(t)?1:[1,6,11,17,25,29,38,41,48].includes(t)?.6:t%7==0?.35:0}))})})},Z={name:`Viz frame, meters, waffles & small multiples`,render:()=>(0,d.jsx)(ne,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="01" name="Waffle" use="Composition as countable units. Reads as a share without a percentage label.">
      <WaffleChart parts={INCOME} unitNote="100 units = $357,880 of total income. Each unit ≈ $3,579." />
    </Specimen>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Proportion band",
  render: () => <Specimen n="02" name="Proportion band" use="The compact version — one line, inline legend. Use when the slide already has a figure.">
      <ProportionBand parts={INCOME} />
    </Specimen>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="03" name="Waterfall" use="How a headline number is built. Ideal for income → adjustments → taxable → tax.">
      <WaterfallChart items={[{
      label: "W-2 wages",
      value: 212400
    }, {
      label: "Schedule C",
      value: 78200
    }, {
      label: "Investment",
      value: 58080
    }, {
      label: "Rental",
      value: 9200
    }, {
      label: "Adjustments",
      value: -29300
    }, {
      label: "Taxable income",
      value: 328580,
      kind: "total"
    }]} />
    </Specimen>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="04" name="Bullet" use="Actual against a cap or target. The honest way to show a SALT ceiling.">
      <BulletChart rows={[{
      label: "State & local tax",
      value: 55150,
      target: 10000,
      max: 60000,
      note: "Marker = $10,000 cap. $45,150 paid above it."
    }, {
      label: "Solo 401(k) deferral",
      value: 14500,
      target: 24500,
      max: 30000,
      note: "Marker = 2026 employee limit."
    }, {
      label: "HSA (family)",
      value: 8750,
      target: 8750,
      max: 10000,
      note: "Fully funded to the 2026 limit."
    }]} />
    </Specimen>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="05" name="Dumbbell" use="Filed year versus planned year, line by line. Replaces side-by-side bars.">
      <DumbbellChart aLabel="2025 filed" bLabel="2026 projected" rows={[{
      label: "Federal tax",
      a: 51505,
      b: 43120
    }, {
      label: "CA tax",
      a: 24800,
      b: 21400
    }, {
      label: "Retirement deferral",
      a: 14500,
      b: 24500
    }, {
      label: "Itemized deductions",
      a: 50400,
      b: 61300
    }]} />
    </Specimen>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="06" name="Slope" use="Before and after, four lines maximum. The savings story in one gesture.">
      <SlopeChart fromLabel="Without planning" toLabel="With planning" series={[{
      label: "Federal",
      from: 51505,
      to: 43120
    }, {
      label: "State",
      from: 24800,
      to: 21400
    }, {
      label: "Payroll",
      from: 18900,
      to: 17650
    }]} />
    </Specimen>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="07" name="Marimekko" use="Two dimensions at once — entity size across the x-axis, internal mix down the y.">
      <MarimekkoChart columns={[{
      label: "Operating business",
      weight: 41,
      parts: [{
        label: "Voting",
        value: 28
      }, {
        label: "Non-voting",
        value: 72
      }]
    }, {
      label: "Securities",
      weight: 23,
      parts: [{
        label: "Taxable",
        value: 61
      }, {
        label: "Deferred",
        value: 39
      }]
    }, {
      label: "Real property",
      weight: 15,
      parts: [{
        label: "Encumbered",
        value: 44
      }, {
        label: "Free & clear",
        value: 56
      }]
    }, {
      label: "Other",
      weight: 12,
      parts: [{
        label: "Insurance",
        value: 66
      }, {
        label: "Personal",
        value: 34
      }]
    }]} />
    </Specimen>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Radial gauge",
  render: () => <Specimen n="08" name="Radial gauge" use="A single share, stated once. Never more than one per slide.">
      <RadialGauge pct={38} value="$49.8M" caption="Share of the taxable estate exposed above the combined 2026 exemption." />
    </Specimen>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="09" name="Sankey ribbons" use="Where the money goes. The distribution slide, upgraded from boxes." dos={["One-directional flow from a single total", "Three to seven destinations"]} donts={["Mutual flows — use ChordDiagram", "Destinations under 2% of the total; group them"]} code={\`<SankeyFlow total={{ label: "Gross estate", value: 491800000 }} targets={targets} />\`}>
      <SankeyFlow source={{
      label: "Doe Family Trust",
      value: 62400000
    }} targets={[{
      label: "Marital share",
      value: 31200000
    }, {
      label: "Children, per stirpes",
      value: 18700000
    }, {
      label: "Grandchildren (GST)",
      value: 8300000
    }, {
      label: "Charitable remainder",
      value: 4200000
    }]} />
    </Specimen>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="10" name="Treemap" use="Nested magnitudes at a glance. Best for estate composition with six or fewer classes.">
      <TreemapChart items={ESTATE} />
    </Specimen>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="11" name="Orbit rings" use="Structure around a center — entities held by a trust, sized by value.">
      <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
        <OrbitChart center={{
        label: "Taxable estate",
        value: "$131.1M"
      }} nodes={[{
        label: "Holdco LLC",
        value: 41
      }, {
        label: "Brokerage",
        value: 23
      }, {
        label: "Ranch LP",
        value: 15
      }, {
        label: "IRA / 401(k)",
        value: 6
      }, {
        label: "ILIT",
        value: 4,
        ring: 2
      }, {
        label: "GRAT I",
        value: 9,
        ring: 2
      }, {
        label: "GRAT II",
        value: 9,
        ring: 2
      }, {
        label: "DAF",
        value: 3,
        ring: 2
      }]} />
        <Small className="max-w-[46ch]">
          Inner ring holds directly-owned assets; outer ring holds irrevocable structures. Node area
          encodes value, so the reader sees concentration before reading a single label.
        </Small>
      </div>
    </Specimen>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Arc diagram",
  render: () => <Specimen n="12" name="Arc diagram" use="Relationships without a hairball — trustees, beneficiaries and powers on one spine.">
      <ArcDiagram nodes={["John", "Jane", "RLT", "ILIT", "GRAT I", "GRAT II", "Child A", "Child B", "Child C"]} links={[[0, 2], [1, 2], [2, 6], [2, 7], [2, 8], [0, 3], [3, 6], [1, 4], [0, 5]]} />
    </Specimen>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Bubble field",
  render: () => <Specimen n="13" name="Bubble field" use="Magnitude comparison with no axes. Good for opportunity sizing.">
      <BubbleField items={[{
      label: "Solo 401(k)",
      value: 4180
    }, {
      label: "CA PTE election",
      value: 2950
    }, {
      label: "Backdoor Roth",
      value: 1100
    }, {
      label: "HSA top-up",
      value: 890
    }, {
      label: "DAF bunching",
      value: 650
    }]} />
    </Specimen>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="14" name="Isotype" use="Countable marks for figures a client should feel, not just read.">
      <IsotypeGrid unit={500} unitLabel="$500 of projected annual savings" items={[{
      label: "Solo 401(k)",
      value: 4180
    }, {
      label: "CA PTE election",
      value: 2950
    }, {
      label: "Backdoor Roth",
      value: 1100
    }, {
      label: "HSA top-up",
      value: 890
    }]} />
    </Specimen>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Spark grid",
  render: () => <Specimen n="15" name="Spark grid" use="Small multiples. Five years of history per line item, without five charts.">
      <SparkGrid series={[{
      label: "W-2 wages",
      values: [168, 179, 191, 203, 212],
      last: "$212.4k"
    }, {
      label: "Schedule C",
      values: [41, 52, 60, 71, 78],
      last: "$78.2k"
    }, {
      label: "Capital gains",
      values: [12, 48, 22, 31, 39],
      last: "$39.1k"
    }, {
      label: "Effective rate",
      values: [16.9, 16.1, 15.4, 14.9, 14.4],
      last: "14.4%"
    }, {
      label: "Deductions",
      values: [38, 41, 44, 47, 50],
      last: "$50.4k"
    }, {
      label: "Estate value",
      values: [96, 104, 113, 122, 131],
      last: "$131.1M"
    }]} />
    </Specimen>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Timeline spine",
  render: () => <Specimen n="16" name="Timeline spine" use="Sequencing and deadlines. Filled dots are already done.">
      <TimelineSpine items={[{
      period: "Q3 2026 · now",
      title: "Open Solo 401(k)",
      note: "Plan document by Sept 30.",
      done: true
    }, {
      period: "Q4 2026",
      title: "Fund deferral",
      note: "$24,500 employee limit by Dec 31."
    }, {
      period: "Q1 2027",
      title: "File 2026 return",
      note: "Confirm PTE credit lands."
    }, {
      period: "Q2 2027",
      title: "PTE prepayment",
      note: "June 15 for the 2027 election."
    }]} />
    </Specimen>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="17" name="Sunburst" use="A hierarchy read middle-out — income category on the inner ring, source on the outer." wide>
      <SunburstChart centerLabel="Total income" centerValue="$357.9k" nodes={[{
      label: "W-2 wages",
      value: 212400,
      children: [{
        label: "Base",
        value: 168000
      }, {
        label: "Bonus",
        value: 32400
      }, {
        label: "RSU vest",
        value: 12000
      }]
    }, {
      label: "Schedule C",
      value: 78200,
      children: [{
        label: "Consulting",
        value: 58200
      }, {
        label: "Royalties",
        value: 20000
      }]
    }, {
      label: "Capital gains",
      value: 39100,
      children: [{
        label: "Long-term",
        value: 31100
      }, {
        label: "Short-term",
        value: 8000
      }]
    }, {
      label: "Dividends & interest",
      value: 18980,
      children: [{
        label: "Qualified",
        value: 13980
      }, {
        label: "Ordinary",
        value: 5000
      }]
    }, {
      label: "Rental",
      value: 9200,
      children: [{
        label: "Net rents",
        value: 9200
      }]
    }]} />
    </Specimen>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Stream graph",
  render: () => <Specimen n="18" name="Stream graph" use="Composition over time when the total also moves. Five years of income mix." wide>
      <StreamGraph periods={["2022", "2023", "2024", "2025", "2026e"]} series={[{
      label: "W-2 wages",
      values: [168, 179, 191, 203, 212]
    }, {
      label: "Schedule C",
      values: [41, 52, 60, 71, 78]
    }, {
      label: "Capital gains",
      values: [12, 48, 22, 31, 39]
    }, {
      label: "Dividends",
      values: [11, 13, 15, 17, 19]
    }, {
      label: "Rental",
      values: [6, 7, 8, 9, 9]
    }]} />
    </Specimen>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="19" name="Beeswarm" use="Every opportunity on one axis, nothing pooled away. Colour carries the owner." wide>
      <BeeswarmPlot axisLabel="Projected first-year savings, left to right" items={[{
      label: "Solo 401(k)",
      value: 4180,
      group: "Retirement"
    }, {
      label: "CA PTE",
      value: 2950,
      group: "State"
    }, {
      label: "Backdoor Roth",
      value: 1100,
      group: "Retirement"
    }, {
      label: "HSA top-up",
      value: 890,
      group: "Health"
    }, {
      label: "DAF bunching",
      value: 650,
      group: "Charitable"
    }, {
      label: "QCD",
      value: 420,
      group: "Charitable"
    }, {
      label: "Loss harvest",
      value: 380,
      group: "Investment"
    }, {
      label: "529 state credit",
      value: 240,
      group: "State"
    }]} />
    </Specimen>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="20" name="Lollipop" use="Ranked magnitudes with less ink than bars. The leader takes the accent.">
      <LollipopChart rows={[{
      label: "Solo 401(k)",
      value: 4180
    }, {
      label: "CA PTE election",
      value: 2950
    }, {
      label: "Backdoor Roth",
      value: 1100
    }, {
      label: "HSA top-up",
      value: 890
    }, {
      label: "DAF bunching",
      value: 650
    }]} />
    </Specimen>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Heat matrix",
  render: () => <Specimen n="21" name="Heat matrix" use="Two categorical axes with one intensity — deduction type by quarter." wide>
      <HeatMatrix unit="Cells show dollars of deductible spend booked in each quarter." rows={["Charitable", "SALT", "Mortgage interest", "Medical"]} cols={["Q1", "Q2", "Q3", "Q4"]} values={[[1200, 900, 400, 18400], [13800, 13800, 13800, 13750], [5100, 5050, 5000, 4950], [0, 2400, 800, 1100]]} />
    </Specimen>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Cumulative curve",
  render: () => <Specimen n="22" name="Cumulative curve" use="Concentration against an even split. Shows how few holdings carry the estate.">
      <CumulativeCurve items={ESTATE} note="The dashed diagonal is a perfectly even estate. Distance from it is concentration risk." />
    </Specimen>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Bracket ladder",
  render: () => <Specimen n="23" name="Bracket ladder" use="Marginal brackets with the client's income poured in. Widths are real." wide>
      <BracketLadder income={328580} brackets={[{
      rate: 10,
      from: 0,
      to: 23850
    }, {
      rate: 12,
      from: 23850,
      to: 96950
    }, {
      rate: 22,
      from: 96950,
      to: 206700
    }, {
      rate: 24,
      from: 206700,
      to: 394600
    }, {
      rate: 32,
      from: 394600,
      to: 501050
    }, {
      rate: 35,
      from: 501050,
      to: 751600
    }, {
      rate: 37,
      from: 751600,
      to: 1000000
    }]} />
    </Specimen>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Nested squares",
  render: () => <Specimen n="24" name="Nested squares" use="Tufte-style nesting — exemption inside the estate, sized by area not length.">
      <NestedSquares unitNote="Area, not width, encodes value — the exposed slice is the visible remainder." layers={[{
      label: "Gross estate",
      value: 131100000
    }, {
      label: "Combined exemption",
      value: 30000000
    }, {
      label: "Illiquid share",
      value: 55800000
    }, {
      label: "Projected federal tax",
      value: 40440000
    }]} />
    </Specimen>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="25" name="Tornado" use="Sensitivity around a base case. Downside left, upside right, ranked by span." wide>
      <TornadoChart baseLabel="2026 projected tax · $43,120" rows={[{
      label: "Schedule C profit ±20%",
      low: -5200,
      high: 5600
    }, {
      label: "Capital gains realisation",
      low: -3100,
      high: 4400
    }, {
      label: "PTE election timing",
      low: -2950,
      high: 0
    }, {
      label: "Deferral funded in full",
      low: -4180,
      high: 900
    }]} />
    </Specimen>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Radial timeline",
  render: () => <Specimen n="26" name="Radial timeline" use="Twelve months on a dial. Spoke length carries urgency, not just position.">
      <RadialTimeline centerLabel="Aug 2026 → Jul 2027" months={["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]} events={[{
      month: 1,
      label: "Solo 401(k) plan document",
      weight: 3
    }, {
      month: 4,
      label: "Fund employee deferral",
      weight: 3.4
    }, {
      month: 5,
      label: "Q4 estimate due",
      weight: 1.6
    }, {
      month: 7,
      label: "File 2026 return",
      weight: 2.2
    }, {
      month: 10,
      label: "2027 PTE prepayment",
      weight: 2.8
    }]} />
    </Specimen>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Connected scatter",
  render: () => <Specimen n="27" name="Connected scatter" use="Two measures moving together across years — income against effective rate." wide>
      <ConnectedScatter xLabel="Total income ($k)" yLabel="Effective rate (%)" points={[{
      label: "2022",
      x: 238,
      y: 16.9
    }, {
      label: "2023",
      x: 299,
      y: 16.1
    }, {
      label: "2024",
      x: 296,
      y: 15.4
    }, {
      label: "2025",
      x: 331,
      y: 14.9
    }, {
      label: "2026e",
      x: 358,
      y: 14.4
    }]} />
    </Specimen>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Glyph grid",
  render: () => <Specimen n="28" name="Glyph grid" use="Dear Data marks: disc area is savings, rings are effort, tick means it closes this year." wide>
      <GlyphGrid legend="Disc area = first-year savings · rings = implementation effort · red tick = deadline inside 2026." items={[{
      label: "Solo 401(k)",
      size: 4180,
      effort: 3,
      urgent: true,
      note: "$4,180"
    }, {
      label: "CA PTE",
      size: 2950,
      effort: 2,
      urgent: true,
      note: "$2,950"
    }, {
      label: "Backdoor Roth",
      size: 1100,
      effort: 2,
      note: "$1,100"
    }, {
      label: "HSA top-up",
      size: 890,
      effort: 1,
      urgent: true,
      note: "$890"
    }, {
      label: "DAF bunching",
      size: 650,
      effort: 3,
      note: "$650"
    }]} />
    </Specimen>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="29" name="Chord" use="Value moving between entities, both directions at once — trusts, LLCs, beneficiaries." wide>
      <ChordDiagram caption="Ribbon width is the annual transfer; arc length is everything an entity touches." nodes={["Doe Family Trust", "Holdco LLC", "Marital trust", "GST trust", "Charity"]} links={[{
      from: 0,
      to: 2,
      value: 31200000
    }, {
      from: 0,
      to: 3,
      value: 8300000
    }, {
      from: 1,
      to: 0,
      value: 14600000
    }, {
      from: 1,
      to: 2,
      value: 5200000
    }, {
      from: 0,
      to: 4,
      value: 4200000
    }, {
      from: 2,
      to: 3,
      value: 2600000
    }]} />
    </Specimen>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="30" name="Ridgeline" use="Shape of a year, five years deep. Good for cash-flow or realization seasonality." wide>
      <RidgeLines xLabels={["Q1", "Q2", "Q3", "Q4"]} rows={[{
      label: "2022",
      values: [42, 61, 55, 88],
      note: "$246k"
    }, {
      label: "2023",
      values: [51, 58, 62, 104],
      note: "$299k"
    }, {
      label: "2024",
      values: [48, 66, 71, 96],
      note: "$296k"
    }, {
      label: "2025",
      values: [56, 72, 78, 118],
      note: "$331k"
    }, {
      label: "2026e",
      values: [61, 79, 84, 126],
      note: "$358k"
    }]} />
    </Specimen>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Step funnel",
  render: () => <Specimen n="31" name="Step funnel" use="Gross income narrowed to tax owed, with the loss named at every step.">
      <StepFunnel steps={[{
      label: "Total income",
      value: 357880
    }, {
      label: "Less adjustments",
      value: 341300,
      note: "SE tax, HSA, deferral"
    }, {
      label: "Less deductions",
      value: 279150,
      note: "Schedule A itemized"
    }, {
      label: "Taxable income",
      value: 279150,
      note: "after phase-outs"
    }, {
      label: "Federal tax",
      value: 51420,
      note: "before credits"
    }]} />
    </Specimen>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="32" name="Icicle" use="A tree read left to right. Estate, then class, then holding — widths are dollars." wide>
      <IcicleTree root={{
      label: "Taxable estate",
      children: [{
        label: "Operating businesses",
        value: 52400000,
        children: [{
          label: "Holdco LLC",
          value: 34100000
        }, {
          label: "Minority stakes",
          value: 18300000
        }]
      }, {
        label: "Marketable securities",
        value: 38600000,
        children: [{
          label: "Brokerage",
          value: 23400000
        }, {
          label: "Retirement",
          value: 15200000
        }]
      }, {
        label: "Real property",
        value: 24500000,
        children: [{
          label: "Ranch LP",
          value: 15100000
        }, {
          label: "Residences",
          value: 9400000
        }]
      }, {
        label: "Other",
        value: 15600000,
        children: [{
          label: "Insurance & cash",
          value: 15600000
        }]
      }]
    }} />
    </Specimen>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Bullet (bars)",
  render: () => <Specimen n="33" name="Bullet" use="Actual against target without a gauge. The most compact progress mark we have.">
      <BulletBars rows={[{
      label: "Employee deferral funded",
      value: 16500,
      target: 24500,
      max: 24500
    }, {
      label: "HSA funded",
      value: 5200,
      target: 8750,
      max: 8750
    }, {
      label: "Charitable bunching",
      value: 42000,
      target: 35000,
      max: 60000
    }, {
      label: "Effective rate",
      value: 14,
      target: 13,
      max: 22,
      unit: "%"
    }]} />
    </Specimen>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Radial bars",
  render: () => <Specimen n="34" name="Radial bars" use="Ranked magnitudes on a dial. Reads as a family, not a leaderboard.">
      <RadialBars caption="Arc sweep is proportional to the largest item; rings are ordered outward by size." items={[{
      label: "Wages (W-2)",
      value: 200000
    }, {
      label: "Sch E — S-corp",
      value: 100000
    }, {
      label: "Taxable interest",
      value: 25000
    }, {
      label: "Ordinary dividends",
      value: 15000
    }, {
      label: "Sch C — Sally",
      value: 11130
    }]} />
    </Specimen>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Fan projection",
  render: () => <Specimen n="35" name="Fan projection" use="A base case with honest uncertainty. Bands widen as the forecast gets braver." wide>
      <FanProjection yLabel="Projected federal tax" years={["2026e", "2027", "2028", "2029", "2030"]} base={[51420, 54200, 57800, 60400, 63900]} bands={[{
      spread: [0, 4200, 8600, 13200, 18400],
      opacity: 0.12
    }, {
      spread: [0, 2100, 4300, 6600, 9200],
      opacity: 0.22
    }]} />
    </Specimen>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen n="36" name="Unit histogram" use="One dot per item. Counts stay countable — no bar-length estimation." wide>
      <DotHistogram unitLabel="planning item" caption="Twenty-eight open items binned by the quarter they must close in." bins={[{
      label: "Q3 2026",
      count: 7,
      highlight: true
    }, {
      label: "Q4 2026",
      count: 11,
      highlight: true
    }, {
      label: "Q1 2027",
      count: 6
    }, {
      label: "Q2 2027",
      count: 4
    }]} />
    </Specimen>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Parallel coordinates",
  render: () => <Specimen n="37" name="Parallel coordinates" use="Four measures, one line per strategy. Crossings show the real trade-offs." wide>
      <ParallelCoordinates axes={[{
      label: "Savings",
      min: 0,
      max: 5000,
      format: n => \`$\${(n / 1000).toFixed(1)}k\`
    }, {
      label: "Effort",
      min: 1,
      max: 5,
      format: n => \`\${n}\`
    }, {
      label: "Cash needed",
      min: 0,
      max: 25000,
      format: n => \`$\${(n / 1000).toFixed(0)}k\`
    }, {
      label: "Years to payback",
      min: 0,
      max: 6,
      format: n => \`\${n}y\`
    }]} series={[{
      label: "Solo 401(k)",
      values: [4180, 3, 24500, 1],
      emphasize: true
    }, {
      label: "CA PTE",
      values: [2950, 2, 18000, 1]
    }, {
      label: "Backdoor Roth",
      values: [1100, 2, 15000, 4]
    }, {
      label: "DAF bunching",
      values: [650, 3, 42000 / 2, 2]
    }]} />
    </Specimen>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Year strip",
  render: () => <Specimen n="38" name="Year strip" use="Fifty-two weeks as one field. Density shows when the plan actually demands attention." wide>
      <YearStrip caption="Shaded weeks carry a filing, funding or election deadline; the darkest are non-movable." months={["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]} weeks={Array.from({
      length: 52
    }, (_, i) => ({
      intensity: [3, 8, 14, 19, 20, 21, 32, 33, 36, 45].includes(i) ? 1 : [1, 6, 11, 17, 25, 29, 38, 41, 48].includes(i) ? 0.6 : i % 7 === 0 ? 0.35 : 0
    }))} />
    </Specimen>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Viz frame, meters, waffles & small multiples",
  render: () => <VizParts />
}`,...Z.parameters?.docs?.source}}},Q=`Waffle.ProportionBandStory.Waterfall.Bullet.Dumbbell.Slope.Marimekko.RadialGaugeStory.SankeyRibbons.Treemap.OrbitRings.ArcDiagramStory.BubbleFieldStory.Isotype.SparkGridStory.TimelineSpineStory.Sunburst.StreamGraphStory.Beeswarm.Lollipop.HeatMatrixStory.CumulativeCurveStory.BracketLadderStory.NestedSquaresStory.Tornado.RadialTimelineStory.ConnectedScatterStory.GlyphGridStory.Chord.Ridgeline.StepFunnelStory.Icicle.BulletBarsStory.RadialBarsStory.FanProjectionStory.UnitHistogram.ParallelCoordinatesStory.YearStripStory.VizPartsStory`.split(`.`)})))()}$();export{w as ArcDiagramStory,j as Beeswarm,F as BracketLadderStory,T as BubbleFieldStory,g as Bullet,G as BulletBarsStory,V as Chord,z as ConnectedScatterStory,P as CumulativeCurveStory,_ as Dumbbell,q as FanProjectionStory,B as GlyphGridStory,N as HeatMatrixStory,W as Icicle,E as Isotype,M as Lollipop,y as Marimekko,I as NestedSquaresStory,C as OrbitRings,Y as ParallelCoordinatesStory,m as ProportionBandStory,K as RadialBarsStory,b as RadialGaugeStory,R as RadialTimelineStory,H as Ridgeline,x as SankeyRibbons,v as Slope,D as SparkGridStory,U as StepFunnelStory,A as StreamGraphStory,k as Sunburst,O as TimelineSpineStory,L as Tornado,S as Treemap,J as UnitHistogram,Z as VizPartsStory,p as Waffle,h as Waterfall,X as YearStripStory,Q as __namedExportsOrder,f as default};