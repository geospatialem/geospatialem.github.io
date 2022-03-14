"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3806],{14180:(L,x,r)=>{r.d(x,{d:()=>c});var y=r(15861),a=r(76210),b=r(91376),d=r(83623);const _={},g={},w={s:16,m:24,l:32};function k(){return(k=(0,y.Z)(function*({icon:n,scale:s}){const u=w[s],l=T(n),p="F"===l.charAt(l.length-1),h=`${p?l.substring(0,l.length-1):l}${u}${p?"F":""}`;if(_[h])return _[h];g[h]||(g[h]=fetch((0,a.K3)(`./assets/calcite-icon/${h}.json`)).then(S=>S.json()).catch(()=>(console.error(`"${h}" is not a valid calcite-ui-icon name`),"")));const E=yield g[h];return _[h]=E,E})).apply(this,arguments)}function T(n){const s=!isNaN(Number(n.charAt(0))),u=n.split("-");return 1===u.length?s?`i${n}`:n:u.map((l,p)=>0===p?s?`i${l.toUpperCase()}`:l:l.charAt(0).toUpperCase()+l.slice(1)).join("")}let v=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){var n;null===(n=this.intersectionObserver)||void 0===n||n.disconnect(),this.intersectionObserver=null}componentWillLoad(){var n=this;return(0,y.Z)(function*(){n.loadIconPathData()})()}render(){const{el:n,flipRtl:s,pathData:u,scale:l,textLabel:p}=this,A=(0,b.a)(n),h=w[l],E=!!p,S=[].concat(u||"");return(0,a.h)(a.AA,{"aria-hidden":(!E).toString(),"aria-label":E?p:null,role:E?"img":null},(0,a.h)("svg",{class:{"flip-rtl":"rtl"===A&&s,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${h} ${h}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},S.map(z=>(0,a.h)("path","string"==typeof z?{d:z}:{d:z.d,opacity:"opacity"in z?z.opacity:1}))))}loadIconPathData(){var n=this;return(0,y.Z)(function*(){const{icon:s,scale:u,visible:l}=n;!a.Z5.isBrowser||!s||!l||(n.pathData=yield function I(n){return k.apply(this,arguments)}({icon:s,scale:u}))})()}waitUntilVisible(n){this.intersectionObserver=(0,d.c)("intersection",s=>{s.forEach(u=>{u.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,n())})},{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):n()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}:host([scale=s]){width:1rem;height:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){width:1.5rem;height:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){width:2rem;height:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}"}};function c(){["calcite-icon"].forEach(s=>{"calcite-icon"===s&&(customElements.get(s)||customElements.define(s,v))})}v=(0,a.GH)(v,[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]),c()},13806:(L,x,r)=>{r.r(x),r.d(x,{CalciteNotice:()=>C,defineCustomElement:()=>v});var y=r(15861),a=r(76210),b=(()=>{return(c=b||(b={})).green="checkCircle",c.yellow="exclamationMarkTriangle",c.red="exclamationMarkTriangle",c.blue="lightbulb",b;var c})(),d=r(91376),D=r(14180);let k=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteNoticeClose=(0,a.yM)(this,"calciteNoticeClose",7),this.calciteNoticeOpen=(0,a.yM)(this,"calciteNoticeOpen",7),this.active=!1,this.color="blue",this.dismissible=!1,this.intlClose="Close",this.scale="m",this.width="auto",this.close=()=>{this.active=!1,this.calciteNoticeClose.emit()}}updateRequestedIcon(){this.requestedIcon=(0,d.s)(b,this.icon,this.color)}componentWillLoad(){this.requestedIcon=(0,d.s)(b,this.icon,this.color)}componentDidLoad(){this.noticeLinkEl=this.el.querySelector("calcite-link")}render(){const{el:c}=this,n=(0,d.a)(c),s=(0,a.h)("button",{"aria-label":this.intlClose,class:"notice-close",onClick:this.close,ref:l=>this.closeButton=l},(0,a.h)("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":"s"})),u=(0,d.b)(c,"actions-end");return(0,a.h)("div",{class:{container:!0,[d.C.rtl]:"rtl"===n}},this.requestedIcon?(0,a.h)("div",{class:"notice-icon"},(0,a.h)("calcite-icon",{icon:this.requestedIcon,scale:"l"===this.scale?"m":"s"})):null,(0,a.h)("div",{class:"notice-content"},(0,a.h)("slot",{name:"title"}),(0,a.h)("slot",{name:"message"}),(0,a.h)("slot",{name:"link"})),u?(0,a.h)("div",{class:"actions-end"},(0,a.h)("slot",{name:"actions-end"})):null,this.dismissible?s:null)}setFocus(){var c=this;return(0,y.Z)(function*(){!c.closeButton&&!c.noticeLinkEl||(c.noticeLinkEl?c.noticeLinkEl.setFocus():c.closeButton&&c.closeButton.focus())})()}get el(){return this}static get watchers(){return{icon:["updateRequestedIcon"],color:["updateRequestedIcon"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) ::slotted(calcite-link){font-size:var(--calcite-font-size--2);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=m]) ::slotted(calcite-link){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size-1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]) ::slotted(calcite-link){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{display:none;margin-left:auto;margin-right:auto;max-width:100%;-ms-flex-align:center;align-items:center;width:var(--calcite-notice-width)}.container{display:none;text-align:left;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;opacity:0;pointer-events:none;background-color:var(--calcite-ui-foreground-1);max-height:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;border-left:0px solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}.notice-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host{display:-ms-flexbox;display:flex}:host([active]) .container{display:-ms-flexbox;display:flex;-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-ms-flex-align:center;align-items:center;opacity:1;max-height:100%;border-width:2px;pointer-events:auto}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){display:inline;margin:0;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-right:var(--calcite-notice-spacing-token-small)}.calcite--rtl slot[name=message]::slotted(*),.calcite--rtl *::slotted([slot=message]){margin-right:0;margin-left:var(--calcite-notice-spacing-token-small)}.notice-content{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;overflow-wrap:break-word;-ms-flex:1 1 0px;flex:1 1 0;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) 0}.notice-content:first-of-type:not(:only-child){padding-left:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}.notice-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}.notice-close{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;background-color:transparent;border-style:none;outline:2px solid transparent;outline-offset:2px;cursor:pointer;color:var(--calcite-ui-text-3);-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch}.calcite--rtl{text-align:right;border-left:none;border-right:0px solid}.calcite--rtl .notice-content{padding:var(--calcite-notice-spacing-token-small) 0 var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small)}.calcite--rtl .notice-content:first-of-type:not(:only-child){padding-right:var(--calcite-notice-spacing-token-large)}.calcite--rtl .notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}:host([color=blue]) .container{border-color:var(--calcite-ui-brand)}:host([color=blue]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([color=red]) .container{border-color:var(--calcite-ui-danger)}:host([color=red]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([color=yellow]) .container{border-color:var(--calcite-ui-warning)}:host([color=yellow]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([color=green]) .container{border-color:var(--calcite-ui-success)}:host([color=green]) .container .notice-icon{color:var(--calcite-ui-success)}"}};function T(){["calcite-notice","calcite-icon"].forEach(n=>{switch(n){case"calcite-notice":customElements.get(n)||customElements.define(n,k);break;case"calcite-icon":customElements.get(n)||(0,D.d)()}})}k=(0,a.GH)(k,[1,"calcite-notice",{active:[1540],color:[513],dismissible:[516],icon:[520],intlClose:[1,"intl-close"],scale:[513],width:[513],setFocus:[64]}]),T();const C=k,v=T},91376:(L,x,r)=>{r.d(x,{C:()=>D,a:()=>k,b:()=>A,f:()=>l,q:()=>n,s:()=>z});var y=r(15861);const D={autoTheme:"calcite-theme-auto",darkTheme:"calcite-theme-dark",lightTheme:"calcite-theme-light",rtl:"calcite--rtl"};function k(t){const e=function s(t,o){return function i(e){return e?e.closest(o)||i(v(C(e))):null}(t)}(t,"[dir]");return e?e.getAttribute("dir"):"ltr"}function C(t){return t.getRootNode()}function v(t){return t.host||null}function n(t,o){return function i(e){if(!e)return null;e.assignedSlot&&(e=e.assignedSlot);const m=C(e),f=m.querySelector(o),O=v(m);return f||(O?i(O):null)}(t)}function u(t){return"function"==typeof(null==t?void 0:t.setFocus)}function l(t){return p.apply(this,arguments)}function p(){return(p=(0,y.Z)(function*(t){if(t)return u(t)?t.setFocus():t.focus()})).apply(this,arguments)}function A(t,o,i){const e=`[slot="${o}"]`;return(null==i?void 0:i.all)?function h(t,o,i){let e=Array.from(t.querySelectorAll(o));e=i&&!1===i.direct?e:e.filter(f=>f.parentElement===t);const m=null==i?void 0:i.selector;return m?e.map(f=>Array.from(f.querySelectorAll(m))).reduce((f,O)=>[...f,...O],[]).filter(f=>!!f):e}(t,e,i):function E(t,o,i){let e=t.querySelector(o);e=i&&!1===i.direct||(null==e?void 0:e.parentElement)===t?e:null;const m=null==i?void 0:i.selector;return m?e.querySelector(m):e}(t,e,i)}function z(t,o,i){return"string"==typeof o&&""!==o?o:""===o?t[i]:void 0}},83623:(L,x,r)=>{r.d(x,{c:()=>a});var y=r(76210);function a(d,D,_){const g=function b(d){return"intersection"===d?IntersectionObserver:"mutation"===d?MutationObserver:ResizeObserver}(d);return y.Z5.isBrowser?new g(D,_):void 0}}}]);