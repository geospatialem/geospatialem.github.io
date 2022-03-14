"use strict";var H=Object.defineProperty,N=Object.defineProperties,X=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,Z=(E,c,s)=>c in E?H(E,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):E[c]=s,A=(E,c)=>{for(var s in c||(c={}))Y.call(c,s)&&Z(E,s,c[s]);if(B)for(var s of B(c))k.call(c,s)&&Z(E,s,c[s]);return E},L=(E,c)=>N(E,X(c));(self.webpackChunksite=self.webpackChunksite||[]).push([[7728],{7728:(E,c,s)=>{s.r(c),s.d(c,{default:()=>V});var v=s(15861),b=s(26584),j=s(62208),O=s(91179),C=s(37053),M=s(82054),U=s(1476),x=s(82708),y=s(82959),I=s(38330),T=s(56554),h=s(35775),R=s(60466),K=s(85),Q=s(36630);const q=C.Zn,G={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:C.Zn},$={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function J(D){return(0,O.wp)(D)?null!=D.m:!!D.hasM}class V{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}load(e){var t=this;return(0,v.Z)(function*(){const n=[],{features:r}=e,l=t._inferLayerProperties(r,e.fields),u=e.fields||[],g=null!=e.hasM?e.hasM:l.hasM,m=null!=e.hasZ?e.hasZ:l.hasZ,d=!e.spatialReference&&!l.spatialReference,a=d?q:e.spatialReference||l.spatialReference,o=d?G:null,_=e.geometryType||l.geometryType;let f=e.objectIdField||l.objectIdField,p=e.timeInfo;if(_&&(d&&n.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!_))throw new b.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!f)throw new b.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(l.objectIdField&&f!==l.objectIdField&&(n.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${f}" doesn't match the field name "${l.objectIdField}", found in the provided fields`}),f=l.objectIdField),f&&!l.objectIdField){let i=null;u.some(P=>P.name===f&&(i=P,!0))?(i.type="esriFieldTypeOID",i.editable=!1,i.nullable=!1):u.unshift({alias:f,name:f,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const i of u){if(null==i.name&&(i.name=i.alias),null==i.alias&&(i.alias=i.name),!i.name)throw new b.Z("feature-layer:invalid-field-name","field name is missing",{field:i});if(i.name===f&&(i.type="esriFieldTypeOID"),-1===K.v.jsonValues.indexOf(i.type))throw new b.Z("feature-layer:invalid-field-type",`invalid type for field "${i.name}"`,{field:i})}const S={};for(const i of u)if("esriFieldTypeOID"!==i.type&&"esriFieldTypeGlobalID"!==i.type){const P=(0,Q.os)(i);void 0!==P&&(S[i.name]=P)}if(t._fieldsIndex=new R.Z(u),t._createDefaultAttributes=(0,T.Dm)(S,f),p){if(p.startTimeField){const i=t._fieldsIndex.get(p.startTimeField);i?(p.startTimeField=i.name,i.type="esriFieldTypeDate"):p.startTimeField=null}if(p.endTimeField){const i=t._fieldsIndex.get(p.endTimeField);i?(p.endTimeField=i.name,i.type="esriFieldTypeDate"):p.endTimeField=null}if(p.trackIdField){const i=t._fieldsIndex.get(p.trackIdField);i?p.trackIdField=i.name:(p.trackIdField=null,n.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:p}}))}p.startTimeField||p.endTimeField||(n.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:p}}),p=null)}const W={warnings:n,featureErrors:[],layerDefinition:L(A({},$),{drawingInfo:(0,T.bU)(_),templates:(0,T.Hq)(S),extent:o,geometryType:_,objectIdField:f,fields:u,hasZ:!!m,hasM:!!g,timeInfo:p}),assignedObjectIds:{}};if(t._queryEngine=new I.Z({fields:u,geometryType:_,hasM:g,hasZ:m,objectIdField:f,spatialReference:a,featureStore:new x.Z({geometryType:_,hasM:g,hasZ:m}),timeInfo:p,cacheSpatialQueries:!0}),!r||!r.length)return t._nextObjectId=U.X,W;const z=(0,U.S)(f,r);return t._nextObjectId=z+1,yield(0,y._W)(r,a),t._loadInitialFeatures(W,r)})()}applyEdits(e){var t=this;return(0,v.Z)(function*(){const{spatialReference:n,geometryType:r}=t._queryEngine;return yield Promise.all([(0,h.b)(n,r),(0,y._W)(e.adds,n),(0,y._W)(e.updates,n)]),t._applyEdits(e)})()}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let n,r,l=null,u=null,g=null;for(const m of e){const d=m.geometry;if(!(0,j.Wi)(d)&&(l||(l=(0,O.Ji)(d)),u||(u=d.spatialReference),null==n&&(n=(0,O.wp)(D=d)?null!=D.z:!!D.hasZ),null==r&&(r=J(d)),l&&u&&null!=n&&null!=r))break}var D;if(t&&t.length){let m=null;t.some(d=>{const a="esriFieldTypeOID"===d.type,o=!d.type&&d.name&&"objectid"===d.name.toLowerCase();return m=d,a||o})&&(g=m.name)}return{geometryType:l,spatialReference:u,objectIdField:g,hasM:r,hasZ:n}}_loadInitialFeatures(e,t){const{geometryType:n,hasM:r,hasZ:l,objectIdField:u,spatialReference:g,featureStore:m}=this._queryEngine,d=[];for(const a of t){if(null!=a.uid&&(e.assignedObjectIds[a.uid]=-1),a.geometry&&n!==(0,O.Ji)(a.geometry)){e.featureErrors.push((0,h.av)("Incorrect geometry type."));continue}const o=this._createDefaultAttributes(),_=(0,h.O0)(this._fieldsIndex,o,a.attributes,!0,e.warnings);_?e.featureErrors.push(_):(this._assignObjectId(o,a.attributes,!0),a.attributes=o,null!=a.uid&&(e.assignedObjectIds[a.uid]=a.attributes[u]),(0,j.pC)(a.geometry)&&(a.geometry=(0,y.iV)(a.geometry,a.geometry.spatialReference,g)),d.push(a))}if(m.addMany((0,M.Yn)([],d,n,l,r,u)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:a,end:o}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[a,o]}return e}_applyEdits(e){const{adds:t,updates:n,deletes:r}=e,l={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(l,t),n&&n.length&&this._applyUpdateEdits(l,n),r&&r.length){for(const u of r)l.deleteResults.push((0,h.d1)(u));this._queryEngine.featureStore.removeManyById(r)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:l}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:r,hasM:l,hasZ:u,objectIdField:g,spatialReference:m,featureStore:d}=this._queryEngine,a=[];for(const o of t){if(o.geometry&&r!==(0,O.Ji)(o.geometry)){n.push((0,h.av)("Incorrect geometry type."));continue}const _=this._createDefaultAttributes(),F=(0,h.O0)(this._fieldsIndex,_,o.attributes);F?n.push(F):(this._assignObjectId(_,o.attributes),o.attributes=_,null!=o.uid&&(e.uidToObjectId[o.uid]=o.attributes[g]),(0,j.pC)(o.geometry)&&(o.geometry=(0,y.iV)((0,h.og)(o.geometry,m),o.geometry.spatialReference,m)),a.push(o),n.push((0,h.d1)(o.attributes[g])))}d.addMany((0,M.Yn)([],a,r,u,l,g))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:r,hasZ:l,objectIdField:u,spatialReference:g,featureStore:m}=this._queryEngine;for(const d of t){const{attributes:a,geometry:o}=d,_=a&&a[u];if(null==_){e.push((0,h.av)(`Identifier field ${u} missing`));continue}if(!m.has(_)){e.push((0,h.av)(`Feature with object id ${_} missing`));continue}const F=(0,M.EI)(m.getFeature(_),n,l,r);if((0,j.pC)(o)){if(n!==(0,O.Ji)(o)){e.push((0,h.av)("Incorrect geometry type."));continue}F.geometry=(0,y.iV)((0,h.og)(o,g),o.spatialReference,g)}if(a){const f=(0,h.O0)(this._fieldsIndex,F.attributes,a);if(f){e.push(f);continue}}m.add((0,M.XA)(F,n,l,r,u)),e.push((0,h.d1)(_))}}_assignObjectId(e,t,n=!1){const r=this._queryEngine.objectIdField;e[r]=n&&t&&isFinite(t[r])?t[r]:this._nextObjectId++}}},56554:(E,c,s)=>{s.d(c,{MS:()=>x,Dm:()=>M,Hq:()=>U,bU:()=>C});var v=s(8314),b=s(58817),j=s(87757),O=s(24837);function C(y){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===y||"esriGeometryMultipoint"===y?O.I4:"esriGeometryPolyline"===y?O.ET:O.lF}}}function M(y,I){if((0,v.Z)("esri-csp-restrictions"))return()=>A({[I]:null},y);try{let T=`this.${I} = null;`;for(const R in y)T+=`this${R.includes(".")?`["${R}"]`:`.${R}`} = ${JSON.stringify(y[R])};`;const h=new Function(T);return()=>new h}catch(T){return()=>A({[I]:null},y)}}function U(y={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,b.d9)(y)}}]}function x(y,I){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:y},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:I,supportsDelete:I,supportsEditing:I,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:I,supportsExceedsLimitStatistics:!0},query:j.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:I,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);