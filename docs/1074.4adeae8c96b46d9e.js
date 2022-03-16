"use strict";var ee=Object.defineProperty,re=Object.defineProperties,ae=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,V=(L,i,t)=>i in L?ee(L,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):L[i]=t,B=(L,i)=>{for(var t in i||(i={}))te.call(i,t)&&V(L,t,i[t]);if(U)for(var t of U(i))ne.call(i,t)&&V(L,t,i[t]);return L},O=(L,i)=>re(L,ae(i));(self.webpackChunksite=self.webpackChunksite||[]).push([[1074],{71074:(L,i,t)=>{t.r(i),t.d(i,{populateOperationalLayers:()=>h});var s=t(15861),w=t(7093),D=(t(8314),t(10699)),u=t(30164),v=t(55463),R=t(37281);function Z(e,r){return A(e,r,"notes","Map Notes")}function N(e,r){return A(e,r,"route","Route Layer")}function A(e,r,a,n){return f.apply(this,arguments)}function f(){return(f=(0,s.Z)(function*(e,r,a,n){if(!e.layerType||"ArcGISFeatureLayer"!==e.layerType||e.url)return!1;if(e.featureCollectionType&&e.featureCollectionType===a)return!0;if(e.itemId){const l=new v.default({id:e.itemId,portal:r});return yield l.load(),"Feature Collection"===l.type&&(0,R._$)(l,n)}return!1})).apply(this,arguments)}var E=t(7534),J=t(39683);function h(e,r,a){return T.apply(this,arguments)}function T(){return(T=(0,s.Z)(function*(e,r,a){if(!r)return;const n=[];for(const y of r){const o=j(y,a);n.push("GroupLayer"===y.layerType?q(o,y,a):o)}const l=yield(0,D.as)(n);for(const y of l)!y.value||a.filter&&!a.filter(y.value)||e.add(y.value)})).apply(this,arguments)}const K={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"UnsupportedLayer"},P={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},$={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},H={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},k={ArcGISFeatureLayer:"FeatureLayer"},z={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};function j(e,r){return I.apply(this,arguments)}function I(){return(I=(0,s.Z)(function*(e,r){return Q(yield X(e,r),e,r)})).apply(this,arguments)}function Q(e,r,a){return g.apply(this,arguments)}function g(){return(g=(0,s.Z)(function*(e,r,a){const n=new e;return n.read(r,a.context),"group"===n.type&&C(r)&&(yield _(n,r,a.context)),yield(0,J.y)(n,a.context),n})).apply(this,arguments)}function X(e,r){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)(function*(e,r){const a=r.context,n=Y(a);let l=e.layerType||e.type;!l&&r&&r.defaultLayerType&&(l=r.defaultLayerType);const y=n[l];let o=y?u.T[y]:u.T.UnknownLayer;const c=a&&a.portal;if(x(e)){if(e.itemId){const p=new v.default({id:e.itemId,portal:c});yield p.load();const S=(yield(0,E.selectLayerClassPath)(p)).className||"UnknownLayer";o=u.T[S]}}else"ArcGISFeatureLayer"===l?(yield Z(e,c))?o=u.T.MapNotesLayer:(yield N(e,c))?o=u.T.RouteLayer:C(e)&&(o=u.T.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?o=u.T.WMTSLayer:"WFS"===l&&"2.0.0"!==e.wfsInfo.version&&(o=u.T.UnsupportedLayer);return o()})).apply(this,arguments)}function C(e){if("ArcGISFeatureLayer"!==e.layerType||x(e))return!1;const r=e.featureCollection;return!!(r&&r.layers&&r.layers.length>1)}function x(e){return"Feature Collection"===e.type}function Y(e){let r;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":r=$;break;case"ground":r=P;break;default:r=K}else switch(e.layerContainerType){case"basemap":r=z;break;case"tables":r=k;break;default:r=H}return r}function q(e,r,a){return G.apply(this,arguments)}function G(){return(G=(0,s.Z)(function*(e,r,a){const n=new w.Z,l=h(n,Array.isArray(r.layers)?r.layers:[],a),y=yield e;if(yield l,"group"===y.type)return y.layers.addMany(n),y})).apply(this,arguments)}function _(e,r,a){return M.apply(this,arguments)}function M(){return(M=(0,s.Z)(function*(e,r,a){const n=u.T.FeatureLayer,l=yield n(),y=r.featureCollection,o=y.showLegend,c=y.layers.map((p,S)=>{var F,W;const d=new l;d.read(p,a);const b=O(B({},a),{ignoreDefaults:!0});return d.read({id:`${e.id}-sublayer-${S}`,visibility:null==(F=null==(W=r.visibleLayers)?void 0:W.includes(S))||F},b),null!=o&&d.read({showLegend:o},b),d});e.layers.addMany(c)})).apply(this,arguments)}}}]);