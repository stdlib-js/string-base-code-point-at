"use strict";var h=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(F){throw (r=0, F)}};};var i=h(function(l,f){
var u=65536,c=1024,o=55296,x=56319,v=56320,D=57343;function O(t,r,F){var e,a,n;return r<0&&(r+=t.length),e=t.charCodeAt(r),e>=o&&e<=x&&r<t.length-1?(n=e,a=t.charCodeAt(r+1),v<=a&&a<=D?(n-o)*c+(a-v)+u:n):F&&e>=v&&e<=D&&r>=1?(n=t.charCodeAt(r-1),a=e,o<=n&&n<=x?(n-o)*c+(a-v)+u:a):e}f.exports=O
});var C=i();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
