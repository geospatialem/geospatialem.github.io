"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1843],{15994:(x,r,h)=>{h.d(r,{N:()=>u});const u={convertToGEGeometry:function m(i,t){return null==t?null:i.convertJSONToGeometry(t)},exportPoint:function l(i,t,e){const s=new c(i.getPointX(t),i.getPointY(t),e),n=i.hasZ(t),o=i.hasM(t);return n&&(s.z=i.getPointZ(t)),o&&(s.m=i.getPointM(t)),s},exportPolygon:function M(i,t,e){return new p(i.exportPaths(t),e,i.hasZ(t),i.hasM(t))},exportPolyline:function d(i,t,e){return new v(i.exportPaths(t),e,i.hasZ(t),i.hasM(t))},exportMultipoint:function g(i,t,e){return new f(i.exportPoints(t),e,i.hasZ(t),i.hasM(t))},exportExtent:function _(i,t,e){const s=i.hasZ(t),n=i.hasM(t),o=new Z(i.getXMin(t),i.getYMin(t),i.getXMax(t),i.getYMax(t),e);if(s){const a=i.getZExtent(t);o.zmin=a.vmin,o.zmax=a.vmax}if(n){const a=i.getMExtent(t);o.mmin=a.vmin,o.mmax=a.vmax}return o}};class c{constructor(t,e,s){this.x=t,this.y=e,this.spatialReference=s,this.z=void 0,this.m=void 0}}class p{constructor(t,e,s,n){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,s&&(this.hasZ=s),n&&(this.hasM=n)}}class v{constructor(t,e,s,n){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,s&&(this.hasZ=s),n&&(this.hasM=n)}}class f{constructor(t,e,s,n){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,s&&(this.hasZ=s),n&&(this.hasM=n)}}class Z{constructor(t,e,s,n,o){this.xmin=t,this.ymin=e,this.xmax=s,this.ymax=n,this.spatialReference=o,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},28632:(x,r,h)=>{h.r(r),h.d(r,{executeGEOperation:()=>m});var u=h(7006);function m(c){return(0,u.g[c.operation])(...c.parameters)}}}]);