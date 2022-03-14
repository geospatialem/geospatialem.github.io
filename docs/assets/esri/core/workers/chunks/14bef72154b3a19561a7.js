"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4695],{90344:(e,t,n)=>{n.d(t,{Ze:()=>p,p6:()=>f});var r=n(35454),o=n(70171);const a={year:"numeric",month:"numeric",day:"numeric"},l={year:"numeric",month:"long",day:"numeric"},i={year:"numeric",month:"short",day:"numeric"},s={year:"numeric",month:"long",weekday:"long",day:"numeric"},u={hour:"numeric",minute:"numeric"},h={...u,second:"numeric"},m={"short-date":a,"short-date-short-time":{...a,...u},"short-date-short-time-24":{...a,...u,hour12:!1},"short-date-long-time":{...a,...h},"short-date-long-time-24":{...a,...h,hour12:!1},"short-date-le":a,"short-date-le-short-time":{...a,...u},"short-date-le-short-time-24":{...a,...u,hour12:!1},"short-date-le-long-time":{...a,...h},"short-date-le-long-time-24":{...a,...h,hour12:!1},"long-month-day-year":l,"long-month-day-year-short-time":{...l,...u},"long-month-day-year-short-time-24":{...l,...u,hour12:!1},"long-month-day-year-long-time":{...l,...h},"long-month-day-year-long-time-24":{...l,...h,hour12:!1},"day-short-month-year":i,"day-short-month-year-short-time":{...i,...u},"day-short-month-year-short-time-24":{...i,...u,hour12:!1},"day-short-month-year-long-time":{...i,...h},"day-short-month-year-long-time-24":{...i,...h,hour12:!1},"long-date":s,"long-date-short-time":{...s,...u},"long-date-short-time-24":{...s,...u,hour12:!1},"long-date-long-time":{...s,...h},"long-date-long-time-24":{...s,...h,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":u,"long-time":h},c=(0,r.wY)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),d=(c.apiValues,c.toJSON.bind(c),c.fromJSON.bind(c),{ar:"ar-u-nu-latn-ca-gregory"});let g=new WeakMap,y=m["short-date-short-time"];function p(e){return m[e]||null}function f(e,t){return function(e){const t=e||y;if(!g.has(t)){const e=(0,o.Kd)(),n=d[(0,o.Kd)()]||e;g.set(t,new Intl.DateTimeFormat(n,t))}return g.get(t)}(t).format(e)}(0,o.Ze)((()=>{g=new WeakMap,y=m["short-date-short-time"]}))},70171:(e,t,n)=>{var r,o,a;let l;n.d(t,{Ze:()=>d,Kd:()=>u,qe:()=>m});const i=null!=(r=null==(o=globalThis.esriConfig)?void 0:o.locale)?r:null==(a=globalThis.dojoConfig)?void 0:a.locale;function s(){var e,t;return null!=(e=null!=i?i:null==(t=globalThis.navigator)?void 0:t.language)?e:"en"}function u(){return void 0===l&&(l=s()),l}const h=[];function m(e){return h.push(e),{remove(){h.splice(h.indexOf(e),1)}}}const c=[];function d(e){return c.push(e),{remove(){h.splice(c.indexOf(e),1)}}}null==globalThis.addEventListener||globalThis.addEventListener("languagechange",(function(){const e=null!=undefined?undefined:s();l!==e&&(l=e,[...c].forEach((t=>{t.call(null,e)})),[...h].forEach((t=>{t.call(null,e)})))}))},18848:(e,t,n)=>{n.d(t,{sh:()=>s,uf:()=>u});var r=n(70586),o=n(70171);const a={ar:"ar-u-nu-latn"};let l=new WeakMap,i={};function s(e={}){const t={};return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function u(e,t){return function(e){const t=e||i;if(!l.has(t)){const n=(0,o.Kd)(),r=a[(0,o.Kd)()]||n;l.set(t,new Intl.NumberFormat(r,e))}return(0,r.j0)(l.get(t))}(t).format(e)}(0,o.Ze)((()=>{l=new WeakMap,i={}}))},14695:(e,t,n)=>{n.r(t),n.d(t,{createLabelFunction:()=>d,formatField:()=>g});var r=n(20102),o=n(92604),a=n(90344),l=n(18848),i=n(35671),s=n(8813),u=n(59266);const h=o.Z.getLogger("esri.layers.support.labelFormatUtils"),m={type:"simple",evaluate:()=>null},c={getAttribute:(e,t)=>e.field(t)};async function d(e,t,o){if(!e||!e.symbol)return m;const a=e.where,l=(0,s.hV)(e),i=a?await Promise.resolve().then(n.bind(n,41534)):null;let d;if("arcade"===l.type){const e=await(0,u.WW)(l.expression,o,t);d={type:"arcade",evaluate(t){try{const n=e.evaluate({$feature:"attributes"in t?e.repurposeFeature(t):e.repurposeAdapter(t)});if(null!=n)return n.toString()}catch(e){h.error(new r.Z("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:t,expression:l}))}return null},needsHydrationToEvaluate:()=>null==(0,s.el)(l.expression)}}else d={type:"simple",evaluate:e=>l.expression.replace(/{[^}]*}/g,(n=>{const r=n.slice(1,-1),o=t.get(r);if(!o)return n;let a=null;return"attributes"in e?e&&e.attributes&&(a=e.attributes[o.name]):a=e.field(o.name),null==a?"":g(a,o)}))};if(a){let e;try{e=i.WhereClause.create(a,t)}catch(e){return m}const n=d.evaluate;d.evaluate=t=>{const r="attributes"in t?void 0:c;return e.testFeature(t,r)?n(t):null}}return d}function g(e,t){if(null==e)return"";const n=t.domain;if(n)if("codedValue"===n.type||"coded-value"===n.type){const t=e;for(const e of n.codedValues)if(e.code===t)return e.name}else if("range"===n.type){const t=+e,r="range"in n?n.range[0]:n.minValue,o="range"in n?n.range[1]:n.maxValue;if(r<=t&&t<=o)return n.name}let r=e;return"date"===t.type||"esriFieldTypeDate"===t.type?r=(0,a.p6)(r,(0,a.Ze)("short-date")):(0,i.H7)(t)&&(r=(0,l.uf)(+r)),r||""}},8813:(e,t,n)=>{n.d(t,{dI:()=>g,hV:()=>m,YI:()=>c,UO:()=>d,el:()=>v,z7:()=>h});var r=n(19153);const o="__begin__",a="__end__",l=new RegExp(o,"ig"),i=new RegExp(a,"ig"),s=new RegExp("^"+o,"i"),u=new RegExp(a+"$","i");function h(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function m(e){const t={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(e.labelExpression),t.type="conventional"),t}function c(e){const t=m(e);if(!t)return null;switch(t.type){case"conventional":return g(t.expression);case"arcade":return t.expression}return null}function d(e){const t=m(e);if(!t)return null;switch(t.type){case"conventional":return function(e){const t=e.match(y);return t&&t[1].trim()||null}(t.expression);case"arcade":return v(t.expression)}return null}function g(e){let t;return e?(t=(0,r.gx)(e,(e=>o+'$feature["'+e+'"]'+a)),t=s.test(t)?t.replace(s,""):'"'+t,t=u.test(t)?t.replace(u,""):t+'"',t=t.replace(l,'" + ').replace(i,' + "')):t='""',t}const y=/^\s*\{([^}]+)\}\s*$/i,p=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,f=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,x=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function v(e){if(!e)return null;let t=p.exec(e)||f.exec(e);return t?t[1]||t[3]:(t=x.exec(e),t?t[2]:null)}}}]);