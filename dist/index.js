"use strict";var c=function(t,u){return function(){try{return u||t((u={exports:{}}).exports,u),u.exports}catch(r){throw (u=0, r)}};};var g=c(function(L,b){b.exports=[701,301,132,57,23,10,4,1]});var j=c(function(M,h){
var R=require('@stdlib/math-base-assert-is-negative-zero/dist'),Z=require('@stdlib/math-base-assert-is-nan/dist'),p=g(),_=p.length;function E(t,u,r,a){var i,q,n,e,s,f,o,v;if(t<=0||u===0)return r;for(u<0&&(a*=-1),a<0?i=(1-t)*a:i=0,f=0;f<_;f++)for(n=p[f],o=n;o<t;o++)if(e=r[i+o*a],!Z(e)){for(q=R(e),v=o;v>=n&&(s=r[i+(v-n)*a],!(s<=e&&!(q&&s===e)));v-=n)r[i+v*a]=s;r[i+v*a]=e}return r}h.exports=E
});var A=c(function(N,y){
var O=require('@stdlib/math-base-assert-is-negative-zero/dist'),w=require('@stdlib/math-base-assert-is-nan/dist'),k=g(),z=k.length;function B(t,u,r,a,i){var q,n,e,s,f,o,v;if(t<=0||u===0)return r;for(u<0&&(a*=-1,i-=(t-1)*a),f=0;f<z;f++)for(n=k[f],o=n;o<t;o++)if(e=r[i+o*a],!w(e)){for(q=O(e),v=o;v>=n&&(s=r[i+(v-n)*a],!(s<=e&&!(q&&s===e)));v-=n)r[i+v*a]=s;r[i+v*a]=e}return r}y.exports=B
});var S=c(function(Q,P){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=j(),D=A();C(G,"ndarray",D);P.exports=G
});var F=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=S(),l,m=H(F(__dirname,"./native.js"));I(m)?l=J:l=m;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
