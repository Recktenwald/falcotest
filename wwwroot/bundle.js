!function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t),e.d(t,"count",(function(){return yn})),e.d(t,"myButton",(function(){return mn}));function r(n,t){let e=n.toString(10);for(;e.length<t;)e="0"+e;return e}class i{static id(n){return i.idMap.has(n)||i.idMap.set(n,++i.count),i.idMap.get(n)}}i.idMap=new WeakMap,i.count=0;var o;!function(n){n[n.AllowHexSpecifier=512]="AllowHexSpecifier"}(o||(o={}));const u=Symbol("numeric");function s(n){return"number"==typeof n||(null==n?void 0:n[u])}function f(n,t){return"number"==typeof n?n*t:n[u]().multiply(t)}function c(n,t){return"number"==typeof n?n.toFixed(t):n[u]().toFixed(t)}function l(n,t){return"number"==typeof n?n.toPrecision(t):n[u]().toPrecision(t)}function g(n,t){return"number"==typeof n?n.toExponential(t):n[u]().toExponential(t)}function a(n){return"number"==typeof n?(Number(n)>>>0).toString(16):n[u]().toHex()}var h=null;try{h=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(n){}function d(n,t,e){this.low=0|n,this.high=0|t,this.unsigned=!!e}function p(n){return!0===(n&&n.__isLong__)}d.prototype.GetHashCode=function(){let n=this.unsigned?1:0;return n=(n<<5)+n^this.high,n=(n<<5)+n^this.low,n},d.prototype.Equals=function(n){return q(this,n)},d.prototype.CompareTo=function(n){return B(this,n)},d.prototype.toString=function(n){return L(this,n)},d.prototype.toJSON=function(){return L(this)},d.prototype[u]=function(){const n=this;return{multiply:t=>K(n,t),toPrecision:t=>String(n)+(0).toPrecision(t).substr(1),toExponential:t=>String(n)+(0).toExponential(t).substr(1),toFixed:t=>String(n)+(0).toFixed(t).substr(1),toHex:()=>L(n.unsigned?n:rn(en(n),!0),16)}},d.prototype.__isLong__,Object.defineProperty(d.prototype,"__isLong__",{value:!0});var b={},w={};function y(n,t){var e,r,i;return t?(i=0<=(n>>>=0)&&n<256)&&(r=w[n])?r:(e=v(n,(0|n)<0?-1:0,!0),i&&(w[n]=e),e):(i=-128<=(n|=0)&&n<128)&&(r=b[n])?r:(e=v(n,n<0?-1:0,!1),i&&(b[n]=e),e)}function m(n,t){if(isNaN(n))return t?C:N;if(t){if(n<0)return C;if(n>=T)return H}else{if(n<=-_)return P;if(n+1>=_)return U}return n<0?J(m(-n,t)):v(n%O|0,n/O|0,t)}function v(n,t,e){return new d(n,t,e)}var S=Math.pow;function x(n,t,e){if(0===n.length)throw Error("empty string");if("NaN"===n||"Infinity"===n||"+Infinity"===n||"-Infinity"===n)return N;if("number"==typeof t?(e=t,t=!1):t=!!t,(e=e||10)<2||36<e)throw RangeError("radix");var r=n.indexOf("-");if(r>0)throw Error("interior hyphen");if(0===r)return J(x(n.substring(1),t,e));for(var i=m(S(e,8)),o=N,u=0;u<n.length;u+=8){var s=Math.min(8,n.length-u),f=parseInt(n.substring(u,u+s),e);if(s<8)o=X(K(o,m(S(e,s))),m(f));else o=X(o=K(o,i),m(f))}return o.unsigned=t,o}function M(n,t){return"number"==typeof n?m(n,t):"string"==typeof n?x(n,t):v(n.low,n.high,"boolean"==typeof t?t:n.unsigned)}var O=4294967296,T=O*O,_=T/2,k=y(1<<24),N=y(0),C=y(0,!0),E=y(1),I=y(1,!0),j=y(-1),U=v(-1,2147483647,!1),H=v(-1,-1,!0),P=v(0,-2147483648,!1);function D(n){return n.unsigned?n.low>>>0:n.low}function F(n){return n.unsigned?(n.high>>>0)*O+(n.low>>>0):n.high*O+(n.low>>>0)}function L(n,t){if((t=t||10)<2||36<t)throw RangeError("radix");if(A(n))return"0";if(z(n)){if(q(n,P)){var e=m(t),r=Q(n,e),i=Z(K(r,e),n);return L(r,t)+D(i).toString(t)}return"-"+L(J(n),t)}for(var o=m(S(t,6),n.unsigned),u=n,s="";;){var f=Q(u,o),c=(D(Z(u,K(f,o)))>>>0).toString(t);if(A(u=f))return c+s;for(;c.length<6;)c="0"+c;s=""+c+s}}function A(n){return 0===n.high&&0===n.low}function z(n){return!n.unsigned&&n.high<0}function Y(n){return 1==(1&n.low)}function q(n,t){return p(t)||(t=M(t)),(n.unsigned===t.unsigned||n.high>>>31!=1||t.high>>>31!=1)&&(n.high===t.high&&n.low===t.low)}function W(n,t){return B(n,t)<0}function G(n,t){return B(n,t)>0}function R(n,t){return B(n,t)>=0}function B(n,t){if(p(t)||(t=M(t)),q(n,t))return 0;var e=z(n),r=z(t);return e&&!r?-1:!e&&r?1:n.unsigned?t.high>>>0>n.high>>>0||t.high===n.high&&t.low>>>0>n.low>>>0?-1:1:z(Z(n,t))?-1:1}function J(n){return!n.unsigned&&q(n,P)?P:X(V(n),E)}function X(n,t){p(t)||(t=M(t));var e=n.high>>>16,r=65535&n.high,i=n.low>>>16,o=65535&n.low,u=t.high>>>16,s=65535&t.high,f=t.low>>>16,c=0,l=0,g=0,a=0;return g+=(a+=o+(65535&t.low))>>>16,l+=(g+=i+f)>>>16,c+=(l+=r+s)>>>16,c+=e+u,v((g&=65535)<<16|(a&=65535),(c&=65535)<<16|(l&=65535),n.unsigned)}function Z(n,t){return p(t)||(t=M(t)),X(n,J(t))}function K(n,t){if(A(n))return n.unsigned?C:N;if(p(t)||(t=M(t)),h)return v(h.mul(n.low,n.high,t.low,t.high),h.get_high(),n.unsigned);if(A(t))return n.unsigned?C:N;if(q(n,P))return Y(t)?P:N;if(q(t,P))return Y(n)?P:N;if(z(n))return z(t)?K(J(n),J(t)):J(K(J(n),t));if(z(t))return J(K(n,J(t)));if(W(n,k)&&W(t,k))return m(F(n)*F(t),n.unsigned);var e=n.high>>>16,r=65535&n.high,i=n.low>>>16,o=65535&n.low,u=t.high>>>16,s=65535&t.high,f=t.low>>>16,c=65535&t.low,l=0,g=0,a=0,d=0;return a+=(d+=o*c)>>>16,g+=(a+=i*c)>>>16,a&=65535,g+=(a+=o*f)>>>16,l+=(g+=r*c)>>>16,g&=65535,l+=(g+=i*f)>>>16,g&=65535,l+=(g+=o*s)>>>16,l+=e*c+r*f+i*s+o*u,v((a&=65535)<<16|(d&=65535),(l&=65535)<<16|(g&=65535),n.unsigned)}function Q(n,t){if(p(t)||(t=M(t)),A(t))throw Error("division by zero");var e,r,i;if(h)return n.unsigned||-2147483648!==n.high||-1!==t.low||-1!==t.high?v((n.unsigned?h.div_u:h.div_s)(n.low,n.high,t.low,t.high),h.get_high(),n.unsigned):n;if(A(n))return n.unsigned?C:N;if(n.unsigned){if(t.unsigned||(t=function(n){return n.unsigned?n:v(n.low,n.high,!0)}(t)),G(t,n))return C;if(G(t,tn(n,1)))return I;i=C}else{if(q(n,P))return q(t,E)||q(t,j)?P:q(t,P)?E:q(e=$(Q(nn(n,1),t),1),N)?z(t)?E:j:i=X(e,Q(r=Z(n,K(t,e)),t));if(q(t,P))return n.unsigned?C:N;if(z(n))return z(t)?Q(J(n),J(t)):J(Q(J(n),t));if(z(t))return J(Q(n,J(t)));i=N}for(r=n;R(r,t);){e=Math.max(1,Math.floor(F(r)/F(t)));for(var o=Math.ceil(Math.log(e)/Math.LN2),u=o<=48?1:S(2,o-48),s=m(e),f=K(s,t);z(f)||G(f,r);)f=K(s=m(e-=u,n.unsigned),t);A(s)&&(s=E),i=X(i,s),r=Z(r,f)}return i}function V(n){return v(~n.low,~n.high,n.unsigned)}function $(n,t){return p(t)&&(t=D(t)),0==(t&=63)?n:t<32?v(n.low<<t,n.high<<t|n.low>>>32-t,n.unsigned):v(0,n.low<<t-32,n.unsigned)}function nn(n,t){return p(t)&&(t=D(t)),0==(t&=63)?n:t<32?v(n.low>>>t|n.high<<32-t,n.high>>t,n.unsigned):v(n.high>>t-32,n.high>=0?0:-1,n.unsigned)}function tn(n,t){if(p(t)&&(t=D(t)),0===(t&=63))return n;var e=n.high;return t<32?v(n.low>>>t|e<<32-t,e>>>t,n.unsigned):v(32===t?e:e>>>t-32,0,n.unsigned)}function en(n,t){return t?function(n){var t=n.high,e=n.low;return[255&e,e>>>8&255,e>>>16&255,e>>>24,255&t,t>>>8&255,t>>>16&255,t>>>24]}(n):function(n){var t=n.high,e=n.low;return[t>>>24,t>>>16&255,t>>>8&255,255&t,e>>>24,e>>>16&255,e>>>8&255,255&e]}(n)}function rn(n,t,e){return e?function(n,t){return new d(n[0]|n[1]<<8|n[2]<<16|n[3]<<24,n[4]|n[5]<<8|n[6]<<16|n[7]<<24,t)}(n,t):function(n,t){return new d(n[4]<<24|n[5]<<16|n[6]<<8|n[7],n[0]<<24|n[1]<<16|n[2]<<8|n[3],t)}(n,t)}function on(n){const t=n<0,e=(n=Math.abs(n))%36e5/6e4;return(t?"-":"+")+r(~~(n/36e5),2)+":"+r(e,2)}function un(n,t){const e=n.toISOString();return"first"===t?e.substring(0,e.indexOf("T")):e.substring(e.indexOf("T")+1,e.length-1)}function sn(n,t,e){return t.replace(/(\w)\1*/g,t=>{let r=Number.NaN;switch(t.substring(0,1)){case"y":const i=e?n.getUTCFullYear():n.getFullYear();r=t.length<4?i%100:i;break;case"M":r=(e?n.getUTCMonth():n.getMonth())+1;break;case"d":r=e?n.getUTCDate():n.getDate();break;case"H":r=e?n.getUTCHours():n.getHours();break;case"h":const o=e?n.getUTCHours():n.getHours();r=o>12?o%12:o;break;case"m":r=e?n.getUTCMinutes():n.getMinutes();break;case"s":r=e?n.getUTCSeconds():n.getSeconds();break;case"f":r=e?n.getUTCMilliseconds():n.getMilliseconds()}return Number.isNaN(r)?t:r<10&&t.length>1?"0"+r:""+r})}function fn(n,t){var e,r,i;const o=new Date(n.getTime()+(null!==(e=n.offset)&&void 0!==e?e:0));if("string"!=typeof t)return o.toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+on(null!==(r=n.offset)&&void 0!==r?r:0);if(1!==t.length)return sn(o,t,!0);switch(t){case"D":case"d":return un(o,"first");case"T":case"t":return un(o,"second");case"O":case"o":return function(n,t){const e=n.toISOString();return e.substring(0,e.length-1)+on(t)}(o,null!==(i=n.offset)&&void 0!==i?i:0);default:throw new Error("Unrecognized Date print format")}}function cn(n,t){const e=1===n.kind;if("string"!=typeof t)return e?n.toUTCString():n.toLocaleString();if(1!==t.length)return sn(n,t,e);switch(t){case"D":case"d":return e?un(n,"first"):n.toLocaleDateString();case"T":case"t":return e?un(n,"second"):n.toLocaleTimeString();case"O":case"o":return function(n,t){if(t)return n.toISOString();{const t=null==n.kind||2===n.kind;return r(n.getFullYear(),4)+"-"+r(n.getMonth()+1,2)+"-"+r(n.getDate(),2)+"T"+r(n.getHours(),2)+":"+r(n.getMinutes(),2)+":"+r(n.getSeconds(),2)+"."+r(n.getMilliseconds(),3)+(t?on(-6e4*n.getTimezoneOffset()):"")}}(n,e);default:throw new Error("Unrecognized Date print format")}}function ln(n,t,e){return null!=n.offset?fn(n,t):cn(n,t)}function gn(n,t=0){if(null!=n&&"object"==typeof n){if("function"==typeof n.toString)return n.toString();if(Symbol.iterator in n)return function(n){let t=0,e="[";for(const r of n){if(0===t)e+=gn(r);else{if(100===t){e+="; ...";break}e+="; "+gn(r)}t++}return e+"]"}(n);{const e=Object.getPrototypeOf(n).constructor;return e===Object&&t<10?"{ "+Object.entries(n).map(([n,e])=>n+" = "+gn(e,t+1)).join("\n  ")+" }":e.name}}return String(n)}const an=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g;function hn(n,t){return function(n,t){return"number"==typeof n?n<t?-1:n>t?1:0:n.CompareTo(t)}(n,t)<0}function dn(n){return{input:n,cont:(t=n,n=>{an.lastIndex=0;const e=[],r=[];let i=0,o=an.exec(t);for(;o;){const n=o.index+(o[1]||"").length;e.push(t.substring(i,n).replace(/%%/g,"%")),r.push(o),i=an.lastIndex,an.lastIndex-=1,o=an.exec(t)}return 0===e.length?n(t.replace(/%%/g,"%")):(e.push(t.substring(i).replace(/%%/g,"%")),function n(t,e,r,i="",o=-1){return(...u)=>{let s=i;const f=e.slice(),c=r.slice();for(const n of u){const[,,t,e,r,i]=c[0];let u=e;if(o>=0)u=o,o=-1;else if("*"===u){if(n<0)throw new Error("Non-negative number required");o=n;continue}s+=f[0],s+=bn(n,t,u,r,i),f.splice(0,1),c.splice(0,1)}return 0===c.length?(s+=f[0],t(s)):n(t,f,c,s,o)}}(n,e,r))})};var t}function pn(n,t){return"string"==typeof t?n(t):t.cont(n)}function bn(n,t,e,r,i){let o="";if(t=t||"",i=i||"",s(n))switch("x"!==i.toLowerCase()&&(hn(n,0)?(n=f(n,-1),o="-"):t.indexOf(" ")>=0?o=" ":t.indexOf("+")>=0&&(o="+")),r=null==r?null:parseInt(r,10),i){case"f":case"F":n=c(n,r=null!=r?r:6);break;case"g":case"G":n=null!=r?l(n,r):l(n);break;case"e":case"E":n=null!=r?g(n,r):g(n);break;case"x":n=a(n);break;case"X":n=a(n).toUpperCase();break;default:n=String(n)}else n=n instanceof Date?ln(n):gn(n);if(e="number"==typeof e?e:parseInt(e,10),isNaN(e))n=o+n;else{const r=t.indexOf("0")>=0,i=t.indexOf("-")>=0,u=i||!r?" ":"0";n="0"===u?o+(n=wn(n,e-o.length,u,i)):wn(o+n,e,u,i)}return n}function wn(n,t,e,r){e=e||" ",t-=n.length;for(let i=0;i<t;i++)n=r?n+e:e+n;return n}let yn=function(n){let t=n;return(n,e)=>e?void(t=n):t}(0);const mn=document.querySelector(".my-button");mn.onclick=n=>{let t;yn(yn()+1,!0),mn.innerText=(t=0|yn(),pn(n=>n,dn("You clicked: %i time(s)"))(t))}}]);