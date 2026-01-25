"use strict";var h=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var f=h(function(l,D){
var F=65536,u=1024,o=55296,c=56319,v=56320,x=57343;function O(t,r,i){var e,a,n;return r<0&&(r+=t.length),e=t.charCodeAt(r),e>=o&&e<=c&&r<t.length-1?(n=e,a=t.charCodeAt(r+1),v<=a&&a<=x?(n-o)*u+(a-v)+F:n):i&&e>=v&&e<=x&&r>=1?(n=t.charCodeAt(r-1),a=e,o<=n&&n<=c?(n-o)*u+(a-v)+F:a):e}D.exports=O
});var C=f();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
