"use strict";var G=Object.defineProperty,R=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,O=(h,u,d)=>u in h?G(h,u,{enumerable:!0,configurable:!0,writable:!0,value:d}):h[u]=d,A=(h,u)=>{for(var d in u||(u={}))k.call(u,d)&&O(h,d,u[d]);if(R)for(var d of R(u))z.call(u,d)&&O(h,d,u[d]);return h};(self.webpackChunksite=self.webpackChunksite||[]).push([[1913],{81913:(h,u,d)=>{d.r(u),d.d(u,{applyEdits:()=>D});var m=d(15861),S=d(88879),g=d(7093),i=d(26584),$=d(58817),v=d(62208),U=d(21726),M=d(62825);function P(e){return e&&null!=e.applyEdits}function D(e,t,a){return f.apply(this,arguments)}function f(){return(f=(0,m.Z)(function*(e,t,a,l={}){let n,o;const r={edits:a,result:new Promise((s,E)=>{n=s,o=E})};e.emit("apply-edits",r);try{var p;const{results:s,edits:E}=yield C(e,t,a,l),y=j=>j.filter(K=>!K.error).map($.d9),c={edits:E,addedFeatures:y(s.addFeatureResults),updatedFeatures:y(s.updateFeatureResults),deletedFeatures:y(s.deleteFeatureResults),addedAttachments:y(s.addAttachmentResults),updatedAttachments:y(s.updateAttachmentResults),deletedAttachments:y(s.deleteAttachmentResults)};return null!=(p=s.editedFeatureResults)&&p.length&&(c.editedFeatures=s.editedFeatureResults),(c.addedFeatures.length||c.updatedFeatures.length||c.deletedFeatures.length||c.addedAttachments.length||c.updatedAttachments.length||c.deletedAttachments.length)&&e.emit("edits",c),n(c),s}catch(s){throw o(s),s}})).apply(this,arguments)}function C(e,t,a,l){return b.apply(this,arguments)}function b(){return(b=(0,m.Z)(function*(e,t,a,l){if(yield e.load(),!P(t))return Promise.reject(new i.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e}));if(!e.editingEnabled)throw new i.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:n,options:o}=yield L(e,a,l);return n.addFeatures.length||n.updateFeatures.length||n.deleteFeatures.length||n.addAttachments.length||n.updateAttachments.length||n.deleteAttachments.length?{edits:n,results:yield t.applyEdits(n,o)}:{edits:n,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}})).apply(this,arguments)}function L(e,t,a){return _.apply(this,arguments)}function _(){return(_=(0,m.Z)(function*(e,t,a){const n=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments);if(!(t&&(t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures)||n)))throw new i.Z(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&a&&a.gdbVersion)throw new i.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&a&&a.rollbackOnFailureEnabled)throw new i.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&a&&a.globalIdUsed)throw new i.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&n)throw new i.Z(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!a||!a.globalIdUsed)&&n)throw new i.Z(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const o=A({},a);if(null!=o.rollbackOnFailureEnabled||e.capabilities.editing.supportsRollbackOnFailure||(o.rollbackOnFailureEnabled=!0),!1===o.rollbackOnFailureEnabled&&"original-and-current-features"===o.returnServiceEditsOption)throw new i.Z(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!e.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference&&o.returnServiceEditsInSourceSR)throw new i.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(o.returnServiceEditsInSourceSR&&"original-and-current-features"!==o.returnServiceEditsOption)throw new i.Z(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const r=A({},t);if(r.addFeatures=t&&g.Z.isCollection(t.addFeatures)?t.addFeatures.toArray():r.addFeatures||[],r.updateFeatures=t&&g.Z.isCollection(t.updateFeatures)?t.updateFeatures.toArray():r.updateFeatures||[],r.deleteFeatures=t&&g.Z.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():r.deleteFeatures||[],r.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new i.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(r.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new i.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(r.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new i.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");r.addAttachments=r.addAttachments||[],r.updateAttachments=r.updateAttachments||[],r.deleteAttachments=r.deleteAttachments||[],r.addFeatures=r.addFeatures.map(Z),r.updateFeatures=r.updateFeatures.map(Z);const p=a&&a.globalIdUsed;return r.addFeatures.forEach(s=>B(s,e,p)),r.updateFeatures.forEach(s=>W(s,e,p)),r.deleteFeatures.forEach(s=>T(s,e,p)),r.addAttachments.forEach(s=>I(s,e)),r.updateAttachments.forEach(s=>I(s,e)),{edits:yield x(r),options:o}})).apply(this,arguments)}function F(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new i.Z(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new i.Z(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&(0,v.pC)(e.geometry)){if(e.geometry.hasZ&&!1===t.capabilities.data.supportsZ)throw new i.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities.data.supportsM)throw new i.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function B(e,t,a){F(e,t,a)}function T(e,t,a){F(e,t,a)}function W(e,t,a){if(F(e,t,a),"geometry"in e&&(0,v.pC)(e.geometry)&&!t.capabilities.editing.supportsGeometryUpdate)throw new i.Z(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function I(e,t){const{feature:a,attachment:l}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new i.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new i.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!l.globalId)throw new i.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!l.data&&!l.uploadId)throw new i.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(l.data instanceof File&&l.data.name||l.name))throw new i.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&l.uploadId)throw new i.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof l.data){const n=(0,U.sJ)(l.data);if(n&&!n.isBase64)throw new i.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function x(e){return w.apply(this,arguments)}function w(){return(w=(0,m.Z)(function*(e){const t=e.addFeatures,a=e.updateFeatures,l=t.concat(a).map(p=>p.geometry),n=yield(0,M.aX)(l),o=t.length,r=a.length;return n.slice(0,o).forEach((p,s)=>e.addFeatures[s].geometry=p),n.slice(o,o+r).forEach((p,s)=>e.updateFeatures[s].geometry=p),e})).apply(this,arguments)}function Z(e){const t=new S.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}}}]);