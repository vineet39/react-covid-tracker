(this["webpackJsonpreact-covid-tracker"]=this["webpackJsonpreact-covid-tracker"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n.n(a),s=n(7),o=n.n(s),i=(n(95),n(13)),u=n.n(i),l=n(21),j=n(10),d=n(244),f=(n(97),n(233)),b=n(237),h=n(238);n(98);function O(e){return Object(c.jsx)(f.a,{className:"infoBox",children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(h.a,{className:"infoBox_title",color:"textSecondary",children:e.title}),Object(c.jsx)(h.a,{className:"infoBox_cases",children:e.cases}),Object(c.jsxs)(h.a,{className:"infoBox_total",color:"textSecondary",children:[e.total," Total"]})]})})}n(102);function v(e){var t={cases:{title:"Cases",cases:e.countryInfo.todayCases,total:e.countryInfo.cases},recovered:{title:"Recovered",cases:e.countryInfo.todayRecovered,total:e.countryInfo.recovered},deaths:{title:"Deaths",cases:e.countryInfo.todayDeaths,total:e.countryInfo.deaths}},n=Object.keys(t).map((function(e){return Object(c.jsx)(O,{title:t[e].title,cases:t[e].cases,total:t[e].total},e)}));return Object(c.jsx)("div",{className:"app_stats",children:n})}var x=n(239),p=n(245),m=n(241),y=(n(103),n(28)),g=n.n(y),w=n(246),N=n(240),C="cases",I={cases:{title:"New",value:"cases"},recovered:{title:"Recovered",value:"recovered"},deaths:{title:"Death",value:"deaths"}},k="https://disease.sh/v3/covid-19/",S=k+"all",_=k+"countries",T={cases:{hex:"#FFFF00",rgb:"rgb(255,255,0)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:400,name:"yellow"},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:600,name:"green"},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:1e3,name:"red"}},z=Object(a.createContext)(null),D=z.Provider,V=function(e){var t=e.children,n=Object(a.useState)({caseType:C,coordinates:{lat:34.8,lng:-40.47}}),r=Object(j.a)(n,2),s=r[0],o=r[1];return Object(c.jsxs)(D,{value:[s,o],children:[" ",t," "]})};V.context=z;var B=V;var E=function(e,t){var n=T[t].name;return console.log(n),e.map((function(e){return Object(c.jsx)(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:T[t].name,fillColor:T[t].name,fillOpacity:.4,radius:Math.sqrt(e[t])*T[t].multiplier,children:Object(c.jsx)(N.a,{children:Object(c.jsxs)("div",{className:"info-container",children:[Object(c.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(c.jsx)("div",{className:"info-name",children:e.country}),Object(c.jsxs)("div",{className:"info-confirmed",children:["Cases: ",g()(e.cases).format("0,0")]}),Object(c.jsxs)("div",{className:"info-recovered",children:["Recovered: ",g()(e.recovered).format("0,0")]}),Object(c.jsxs)("div",{className:"info-deaths",children:["Deaths: ",g()(e.deaths).format("0,0")]})]})})})}))};function F(e){var t=e.center,n=e.zoom;return Object(m.a)().setView(t,n),null}var M=function(e){var t=Object(a.useContext)(z),n=Object(j.a)(t,2),r=n[0],s=(n[1],r.caseType),o=E(e.countries,s);return Object(c.jsx)("div",{className:"map",children:Object(c.jsxs)(x.a,{center:e.center,zoom:e.zoom,scrollWheelZoom:!1,children:[Object(c.jsx)(F,{center:e.center,zoom:e.zoom}),Object(c.jsx)(p.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),o]})})},R=(n(104),function(e){var t=e;return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t}),A=n(242),L=n(243);function W(e){return Object(c.jsx)(A.a,{children:Object(c.jsx)(L.a,{variant:"outlined",value:e.value,onChange:e.onChange,children:e.items})})}n(105);function J(e){return Object(c.jsxs)("div",{className:"app_header",children:[Object(c.jsx)("h1",{children:"COVID-19 Tracker"}),Object(c.jsx)(W,{className:"dropdown",value:e.countryValue,onChange:e.countryOnChange,items:e.countryItems}),Object(c.jsx)(W,{className:"dropdown",value:e.casesValue,onChange:e.casesOnChange,items:e.casesItems})]})}n(106);function Y(){var e,t,n=Object(a.useContext)(z),r=Object(j.a)(n,2),s=(r[0],r[1]),o=Object(a.useState)([]),i=Object(j.a)(o,2),f=i[0],b=i[1],h=Object(a.useState)("worldwide"),O=Object(j.a)(h,2),x=O[0],p=O[1],m=Object(a.useState)({}),y=Object(j.a)(m,2),g=y[0],w=y[1],N=Object(a.useState)({lat:34.8,lng:-40.47}),C=Object(j.a)(N,2),k=C[0],T=C[1],D=Object(a.useState)(3),V=Object(j.a)(D,2),B=V[0],E=V[1],F=Object(a.useState)([]),R=Object(j.a)(F,2),A=R[0],L=R[1],W=Object(a.useState)(I.cases.value),Y=Object(j.a)(W,2),q=Y[0],P=Y[1],Z=Object.keys(I).map((function(e){return Object(c.jsx)(d.a,{value:I[e].value,children:I[e].title},I[e].title)})),G=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.target.value;case 2:return n=e.sent,P(n),e.next=6,s({caseType:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=f.map((function(e){return Object(c.jsx)(d.a,{value:e.value,children:e.name},e.name)}));e=H,t=Object(c.jsx)(d.a,{value:"worldwide",children:"World Wide"},"worldwide"),e.unshift(t);var K=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,e.next=3,p(n);case 3:return c="worldwide"===n?S:_+"/"+n,e.next=6,fetch(c).then((function(e){return e.json()})).then((function(e){w(e),T(c!==S?[e.countryInfo.lat,e.countryInfo.long]:[34.8,-40.47]),E(4)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){fetch(S).then((function(e){return e.json()})).then((function(e){w(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(_);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,n.map((function(e){return{name:e.country,value:e.countryInfo.iso2}}));case 8:c=e.sent,b(c),L(n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsxs)("div",{className:"app_left",children:[Object(c.jsx)(J,{countryValue:x,countryOnChange:K,countryItems:H,casesValue:q,casesOnChange:G,casesItems:Z}),Object(c.jsx)(v,{countryInfo:g}),Object(c.jsx)(M,{center:k,zoom:B,countries:A})]})}var q=n(84),P={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!0,responsive:!0,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return g()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,n){return g()(e).format("0a")}}}]}},Z=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C,c=[];for(var a in e.cases){if(t){var r={x:a,y:n===C?e[n][a]-t:e[n][a]};c.push(r)}t=e[n][a]}return c};var G=function(e){var t=e.casesType,n=Object(a.useState)({}),r=Object(j.a)(n,2),s=r[0],o=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var n=Z(e,t);o(n)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(c.jsx)("div",{className:"graph",children:(null===s||void 0===s?void 0:s.length)>0&&Object(c.jsx)(q.Line,{data:{datasets:[{backgroundColor:T[t].hex,borderColor:T[t].hex,data:s}]},options:P})})},H=function(e){return e.children};n(203);function K(){var e=Object(a.useContext)(z),t=Object(j.a)(e,2),n=t[0],r=(t[1],n.caseType);return Object(c.jsxs)(H,{children:[Object(c.jsx)("div",{className:"graph_heading",children:Object(c.jsxs)("h3",{className:"title",children:[I[r].title," cases"]})}),Object(c.jsx)(G,{casesType:r})]})}n(204);function Q(e){var t=Object(a.useState)([]),n=Object(j.a)(t,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(_);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,R(n);case 8:c=e.sent,s(c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsxs)(H,{children:[Object(c.jsx)("h3",{children:"Live Cases"}),Object(c.jsx)("div",{className:"table",children:r.map((function(e){var t=e.country,n=e.cases;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:Object(c.jsx)("strong",{children:n})})]})}))})]})}n(205);function U(){return Object(c.jsx)(f.a,{className:"app_right",children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(Q,{}),Object(c.jsx)(K,{})]})})}var X=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(Y,{}),Object(c.jsx)(U,{})]})};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(B,{children:Object(c.jsx)(X,{})})}),document.getElementById("root"))},95:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[206,1,2]]]);
//# sourceMappingURL=main.e9677416.chunk.js.map