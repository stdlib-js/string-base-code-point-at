// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
var t=55296,e=56320;function r(r,a,h){var n,o,c;return a<0&&(a+=r.length),(n=r.charCodeAt(a))>=t&&n<=56319&&a<r.length-1?(c=n,o=r.charCodeAt(a+1),e<=o&&o<=57343?1024*(c-t)+(o-e)+65536:c):h&&n>=e&&n<=57343&&a>=1?(c=r.charCodeAt(a-1),o=n,t<=c&&c<=56319?1024*(c-t)+(o-e)+65536:o):n}export{r as default};
//# sourceMappingURL=index.mjs.map