"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6240],{16240:(y,l,s)=>{s.r(l),s.d(l,{default:()=>c});var e=s(17626),a=s(26584),d=s(99959),i=s(50618),t=s(77712),u=(s(85931),s(8314),s(90912),s(76898)),p=s(63602),O=s(6647);let r=class extends((0,O.I)((0,d.R)(p.Z))){constructor(_){super(_),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((_,n)=>{(0,i.Os)(()=>{const o=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let E="Unsupported layer type";o&&(E+=" "+o),n(new a.Z("layer:unsupported-layer-type",E,{layerType:o}))})}))}read(_,n){const o={resourceInfo:_};null!=_.id&&(o.id=_.id),null!=_.title&&(o.title=_.title),super.read(o,n)}write(_){return Object.assign(_||{},this.resourceInfo,{id:this.id})}};(0,e._)([(0,t.Cb)({readOnly:!0})],r.prototype,"resourceInfo",void 0),(0,e._)([(0,t.Cb)({type:["show","hide"]})],r.prototype,"listMode",void 0),(0,e._)([(0,t.Cb)({json:{read:!1},readOnly:!0,value:"unsupported"})],r.prototype,"type",void 0),r=(0,e._)([(0,u.j)("esri.layers.UnsupportedLayer")],r);const c=r}}]);