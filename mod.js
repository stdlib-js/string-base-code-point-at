// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t,e,r){var a,h,n;return e<0&&(e+=t.length),(a=t.charCodeAt(e))>=55296&&a<=56319&&e<t.length-1?(n=a,56320<=(h=t.charCodeAt(e+1))&&h<=57343?1024*(n-55296)+(h-56320)+65536:n):r&&a>=56320&&a<=57343&&e>=1?(h=a,55296<=(n=t.charCodeAt(e-1))&&n<=56319?1024*(n-55296)+(h-56320)+65536:h):a}export{t as default};
//# sourceMappingURL=mod.js.map
