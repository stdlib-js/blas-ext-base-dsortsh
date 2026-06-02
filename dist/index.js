"use strict";var c=function(t,o){return function(){return o||t((o={exports:{}}).exports,o),o.exports}};var g=c(function(L,b){b.exports=[701,301,132,57,23,10,4,1]});var j=c(function(M,h){
var R=require('@stdlib/math-base-assert-is-negative-zero/dist'),Z=require('@stdlib/math-base-assert-is-nan/dist'),p=g(),_=p.length;function E(t,o,a,r){var i,q,u,e,s,f,n,v;if(t<=0||o===0)return a;for(o<0&&(r*=-1),r<0?i=(1-t)*r:i=0,f=0;f<_;f++)for(u=p[f],n=u;n<t;n++)if(e=a[i+n*r],!Z(e)){for(q=R(e),v=n;v>=u&&(s=a[i+(v-u)*r],!(s<=e&&!(q&&s===e)));v-=u)a[i+v*r]=s;a[i+v*r]=e}return a}h.exports=E
});var A=c(function(N,y){
var O=require('@stdlib/math-base-assert-is-negative-zero/dist'),w=require('@stdlib/math-base-assert-is-nan/dist'),k=g(),z=k.length;function B(t,o,a,r,i){var q,u,e,s,f,n,v;if(t<=0||o===0)return a;for(o<0&&(r*=-1,i-=(t-1)*r),f=0;f<z;f++)for(u=k[f],n=u;n<t;n++)if(e=a[i+n*r],!w(e)){for(q=O(e),v=n;v>=u&&(s=a[i+(v-u)*r],!(s<=e&&!(q&&s===e)));v-=u)a[i+v*r]=s;a[i+v*r]=e}return a}y.exports=B
});var S=c(function(Q,P){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=j(),D=A();C(G,"ndarray",D);P.exports=G
});var F=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=S(),l,m=H(F(__dirname,"./native.js"));I(m)?l=J:l=m;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
