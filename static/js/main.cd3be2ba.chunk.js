(this["webpackJsonpreact-api-crypto-tracker-v1"]=this["webpackJsonpreact-api-crypto-tracker-v1"]||[]).push([[0],{37:function(e,c,t){},38:function(e,c,t){},39:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t(2),r=t.n(n),s=t(13),i=t.n(s),o=t(4),l=t(14),j=t.n(l),m=(t(37),t(38),function(e){var c=e.name,t=e.image,n=e.symbol,r=e.price,s=e.volume,i=(e.priceChange,e.marketcap);return Object(a.jsx)("div",{className:"coin-container",children:Object(a.jsxs)("div",{className:"coin-row",children:[Object(a.jsxs)("div",{className:"coin",children:[Object(a.jsx)("img",{src:t,alt:"crypto"}),Object(a.jsx)("h1",{children:c}),Object(a.jsx)("p",{className:"coin-symbol",children:n})]}),Object(a.jsxs)("div",{className:"coin-data",children:[Object(a.jsxs)("p",{className:"coin-price",children:["$",r]}),Object(a.jsxs)("p",{className:"coin-volume",children:["$",s.toLocaleString()]}),Object(a.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",i.toLocaleString()]})]})]})})});var p=function(){var e=Object(n.useState)([]),c=Object(o.a)(e,2),t=c[0],r=c[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),l=i[0],p=i[1];Object(n.useEffect)((function(){j.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){r(e.data)})).catch((function(e){return console.log(e)}))}),[]);var u=t.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return Object(a.jsxs)("div",{className:"coin-app",children:[Object(a.jsxs)("div",{className:"coin-search",children:[Object(a.jsx)("h1",{className:"coin-text",children:"Search a Currency"}),Object(a.jsx)("form",{children:Object(a.jsx)("input",{type:"text",placeholder:"Search",className:"coin-input",onChange:function(e){p(e.target.value)}})})]}),u.map((function(e){return Object(a.jsx)(m,{name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,volume:e.total_volume},e.id)}))]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.cd3be2ba.chunk.js.map