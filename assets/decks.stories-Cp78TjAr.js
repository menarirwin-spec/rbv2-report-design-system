import{n as e}from"./iframe-D2vVw1nd.js";import{n as t}from"./rolldown-runtime-DkW27tQK.js";function n({src:e}){return(0,r.jsx)(`iframe`,{src:e,title:e,style:{width:`100%`,height:`100vh`,border:`none`}})}var r,i,a,o,s,c,l,u;function d(){return(d=t((()=>{r=e(),i={title:`Report Design System/07 Full Decks`,parameters:{layout:`fullscreen`,docs:{description:{component:`Full-deck previews — the static HTML decks from public/reports, iframed
as-is. These are self-contained pages (own <style>, own theme switching)
rather than React components, so they render outside the report-theme
decorator.`}}}},a={render:()=>(0,r.jsx)(n,{src:`/reports/estate.html`})},o={render:()=>(0,r.jsx)(n,{src:`/reports/tax.html`})},s={name:`Tax (viz)`,render:()=>(0,r.jsx)(n,{src:`/reports/tax-viz.html`})},c={name:`Estate ledger`,render:()=>(0,r.jsx)(n,{src:`/reports/estate-ledger.html`})},l={name:`Tax ledger`,render:()=>(0,r.jsx)(n,{src:`/reports/tax-ledger.html`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <DeckFrame src="/reports/estate.html" />
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <DeckFrame src="/reports/tax.html" />
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Tax (viz)",
  render: () => <DeckFrame src="/reports/tax-viz.html" />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Estate ledger",
  render: () => <DeckFrame src="/reports/estate-ledger.html" />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Tax ledger",
  render: () => <DeckFrame src="/reports/tax-ledger.html" />
}`,...l.parameters?.docs?.source}}},u=[`Estate`,`Tax`,`TaxViz`,`EstateLedger`,`TaxLedger`]})))()}d();export{a as Estate,c as EstateLedger,o as Tax,l as TaxLedger,s as TaxViz,u as __namedExportsOrder,i as default};