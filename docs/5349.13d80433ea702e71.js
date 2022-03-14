"use strict";var w=Object.defineProperty,q=Object.defineProperties,_=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,rr=Object.prototype.hasOwnProperty,er=Object.prototype.propertyIsEnumerable,O=(i,o,r)=>o in i?w(i,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[o]=r,P=(i,o)=>{for(var r in o||(o={}))rr.call(o,r)&&O(i,r,o[r]);if(J)for(var r of J(o))er.call(o,r)&&O(i,r,o[r]);return i},Z=(i,o)=>q(i,_(o));(self.webpackChunksite=self.webpackChunksite||[]).push([[5349],{65349:(i,o,r)=>{r.r(o),r.d(o,{default:()=>H});var s=r(17626),n=r(77712),C=(r(85931),r(8314),r(90912),r(76898)),T=r(15861),U=r(84792),I=r(38811),E=r(62825),y=r(42043),F=r(2618),h=(r(29132),r(88879)),G=r(86162),S=r(62208),u=r(68653),M=r(65234),V=r(12334),R=r(49672),W=r(55214),z=r(37118),K=r(91179);function N(t){return t.features.map(e=>{const c=M.Z.fromJSON(t.spatialReference),p=h.Z.fromJSON(e);return(0,S.Wg)(p.geometry).spatialReference=c,p})}function B(t){return(0,S.lV)(t.features.map(e=>((0,S.pC)(e.geometry)&&(e.geometry.spatialReference=t.spatialReference),(0,K.im)(e.geometry))))}let a=class extends G.wq{constructor(t){super(t),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(t){return B(t)}readPointBarriers(t,e){return B(e.barriers)}readPolylineBarriers(t){return B(t)}readPolygonBarriers(t){return B(t)}readIncidents(t,e){return N(e.saPolylines)}readServiceAreaPolygons(t,e){return N(e.saPolygons)}};(0,s._)([(0,n.Cb)({type:[R.Z]})],a.prototype,"facilities",void 0),(0,s._)([(0,u.r)("facilities")],a.prototype,"readFacilities",null),(0,s._)([(0,n.Cb)({type:[V.Z]})],a.prototype,"messages",void 0),(0,s._)([(0,n.Cb)({type:[R.Z]})],a.prototype,"pointBarriers",void 0),(0,s._)([(0,u.r)("pointBarriers",["barriers"])],a.prototype,"readPointBarriers",null),(0,s._)([(0,n.Cb)({type:[W.Z]})],a.prototype,"polylineBarriers",void 0),(0,s._)([(0,u.r)("polylineBarriers")],a.prototype,"readPolylineBarriers",null),(0,s._)([(0,n.Cb)({type:[z.Z]})],a.prototype,"polygonBarriers",void 0),(0,s._)([(0,u.r)("polygonBarriers")],a.prototype,"readPolygonBarriers",null),(0,s._)([(0,n.Cb)({type:[h.Z]})],a.prototype,"serviceAreaPolylines",void 0),(0,s._)([(0,u.r)("serviceAreaPolylines",["saPolylines"])],a.prototype,"readIncidents",null),(0,s._)([(0,n.Cb)({type:[h.Z]})],a.prototype,"serviceAreaPolygons",void 0),(0,s._)([(0,u.r)("serviceAreaPolygons",["saPolygons"])],a.prototype,"readServiceAreaPolygons",null),a=(0,s._)([(0,C.j)("esri.rest.support.ServiceAreaSolveResult")],a);const Q=a,X=(0,I.E)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:t=>t.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});function A(){return(A=(0,T.Z)(function*(t,e,c){const p=[],d=[],v={},f={},j=(0,F.en)(t),{path:x}=j;e.facilities&&e.facilities.features&&(0,y.et)(e.facilities.features,d,"facilities.features",v),e.pointBarriers&&e.pointBarriers.features&&(0,y.et)(e.pointBarriers.features,d,"pointBarriers.features",v),e.polylineBarriers&&e.polylineBarriers.features&&(0,y.et)(e.polylineBarriers.features,d,"polylineBarriers.features",v),e.polygonBarriers&&e.polygonBarriers.features&&(0,y.et)(e.polygonBarriers.features,d,"polygonBarriers.features",v);const L=yield(0,E.aX)(d);for(const l in v){const g=v[l];p.push(l),f[l]=L.slice(g[0],g[1])}if((0,y.Wf)(f,p)){let l=null;try{l=yield(0,y.bI)(x,e.apiKey,c)}catch(g){}l&&!l.hasZ&&(0,y.ef)(f,p)}for(const l in f)f[l].forEach((g,k)=>{e.get(l)[k].geometry=g});const Y=Z(P({},c),{query:Z(P(P({},j.query),X.toQueryParams(e)),{f:"json"})}),{data:b}=yield(0,U.default)(`${x}/solveServiceArea`,Y);return Q.fromJSON(b)})).apply(this,arguments)}var D=r(79308);let m=class extends D.Z{constructor(t){super(t),this.url=null}solve(t,e){return function $(t,e,c){return A.apply(this,arguments)}(this.url,t,e)}};(0,s._)([(0,n.Cb)()],m.prototype,"url",void 0),m=(0,s._)([(0,C.j)("esri.tasks.ServiceAreaTask")],m);const H=m}}]);