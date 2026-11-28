(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Yc="183",Xr={ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mm=0,$u=1,Sm=2,$a=1,cd=2,Fs=3,Ei=0,an=1,_n=2,ni=0,Kr=1,Nl=2,Qu=3,eh=4,Tm=5,cr=100,Em=101,wm=102,Am=103,Rm=104,Cm=200,Pm=201,Dm=202,Lm=203,Ol=204,Ul=205,Im=206,Fm=207,Nm=208,Om=209,Um=210,km=211,Bm=212,zm=213,Vm=214,kl=0,Bl=1,zl=2,es=3,Vl=4,Hl=5,Gl=6,Wl=7,ud=0,Hm=1,Gm=2,ii=0,hd=1,fd=2,dd=3,Jc=4,pd=5,md=6,gd=7,th="attached",Wm="detached",_d=300,br=301,ts=302,Uo=303,ko=304,Ao=306,qi=1e3,Qn=1001,co=1002,Lt=1003,bd=1004,Ns=1005,It=1006,Qa=1007,yi=1008,bn=1009,xd=1010,vd=1011,Ys=1012,Zc=1013,si=1014,Pn=1015,Mn=1016,$c=1017,Qc=1018,Js=1020,yd=35902,Md=35899,Sd=1021,Td=1022,Dn=1023,wi=1026,hr=1027,eu=1028,tu=1029,ns=1030,nu=1031,iu=1033,eo=33776,to=33777,no=33778,io=33779,jl=35840,ql=35841,Xl=35842,Kl=35843,Yl=36196,Jl=37492,Zl=37496,$l=37488,Ql=37489,ec=37490,tc=37491,nc=37808,ic=37809,rc=37810,sc=37811,ac=37812,oc=37813,lc=37814,cc=37815,uc=37816,hc=37817,fc=37818,dc=37819,pc=37820,mc=37821,gc=36492,_c=36494,bc=36495,xc=36283,vc=36284,yc=36285,Mc=36286,Zs=2300,$s=2301,Bo=2302,nh=2303,ih=2400,rh=2401,sh=2402,jm=2500,qm=0,Ed=1,Sc=2,Xm=3200,wd=0,Km=1,Bi="",kt="srgb",nn="srgb-linear",uo="linear",it="srgb",Tr=7680,ah=519,Ym=512,Jm=513,Zm=514,ru=515,$m=516,Qm=517,su=518,eg=519,Tc=35044,oh="300 es",ei=2e3,Qs=2001;function tg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ng(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ea(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ig(){const s=ea("canvas");return s.style.display="block",s}const lh={};function ho(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ad(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Pe(...s){s=Ad(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ze(...s){s=Ad(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function fo(...s){const e=s.join(" ");e in lh||(lh[e]=!0,Pe(...s))}function rg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const sg={[kl]:Bl,[zl]:Gl,[Vl]:Wl,[es]:Hl,[Bl]:kl,[Gl]:zl,[Wl]:Vl,[Hl]:es};class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ch=1234567;const zs=Math.PI/180,is=180/Math.PI;function Fn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[s&255]+qt[s>>8&255]+qt[s>>16&255]+qt[s>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Ke(s,e,t){return Math.max(e,Math.min(t,s))}function au(s,e){return(s%e+e)%e}function ag(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function og(s,e,t){return s!==e?(t-s)/(e-s):0}function Vs(s,e,t){return(1-t)*s+t*e}function lg(s,e,t,n){return Vs(s,e,1-Math.exp(-t*n))}function cg(s,e=1){return e-Math.abs(au(s,e*2)-e)}function ug(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function hg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function fg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function dg(s,e){return s+Math.random()*(e-s)}function pg(s){return s*(.5-Math.random())}function mg(s){s!==void 0&&(ch=s);let e=ch+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gg(s){return s*zs}function _g(s){return s*is}function bg(s){return(s&s-1)===0&&s!==0}function xg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yg(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),u=r((e+n)/2),f=a((e+n)/2),l=r((e-n)/2),h=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*f,c*l,c*h,o*u);break;case"YZY":s.set(c*h,o*f,c*l,o*u);break;case"ZXZ":s.set(c*l,c*h,o*f,o*u);break;case"XZX":s.set(o*f,c*g,c*d,o*u);break;case"YXY":s.set(c*d,o*f,c*g,o*u);break;case"ZYZ":s.set(c*g,c*d,o*f,o*u);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const dr={DEG2RAD:zs,RAD2DEG:is,generateUUID:Fn,clamp:Ke,euclideanModulo:au,mapLinear:ag,inverseLerp:og,lerp:Vs,damp:lg,pingpong:cg,smoothstep:ug,smootherstep:hg,randInt:fg,randFloat:dg,randFloatSpread:pg,seededRandom:mg,degToRad:gg,radToDeg:_g,isPowerOfTwo:bg,ceilPowerOfTwo:xg,floorPowerOfTwo:vg,setQuaternionFromProperEuler:yg,normalize:rt,denormalize:zn};class ne{constructor(e=0,t=0){ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],u=n[i+1],f=n[i+2],l=n[i+3],h=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(l!==_||c!==h||u!==d||f!==g){let m=c*h+u*d+f*g+l*_;m<0&&(h=-h,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const b=Math.acos(m),v=Math.sin(b);p=Math.sin(p*b)/v,o=Math.sin(o*b)/v,c=c*p+h*o,u=u*p+d*o,f=f*p+g*o,l=l*p+_*o}else{c=c*p+h*o,u=u*p+d*o,f=f*p+g*o,l=l*p+_*o;const b=1/Math.sqrt(c*c+u*u+f*f+l*l);c*=b,u*=b,f*=b,l*=b}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=l}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],u=n[i+2],f=n[i+3],l=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+f*l+c*d-u*h,e[t+1]=c*g+f*h+u*l-o*d,e[t+2]=u*g+f*d+o*h-c*l,e[t+3]=f*g-o*l-c*h-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),f=o(i/2),l=o(r/2),h=c(n/2),d=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=h*f*l+u*d*g,this._y=u*d*l-h*f*g,this._z=u*f*g+h*d*l,this._w=u*f*l-h*d*g;break;case"YXZ":this._x=h*f*l+u*d*g,this._y=u*d*l-h*f*g,this._z=u*f*g-h*d*l,this._w=u*f*l+h*d*g;break;case"ZXY":this._x=h*f*l-u*d*g,this._y=u*d*l+h*f*g,this._z=u*f*g+h*d*l,this._w=u*f*l-h*d*g;break;case"ZYX":this._x=h*f*l-u*d*g,this._y=u*d*l+h*f*g,this._z=u*f*g-h*d*l,this._w=u*f*l+h*d*g;break;case"YZX":this._x=h*f*l+u*d*g,this._y=u*d*l+h*f*g,this._z=u*f*g-h*d*l,this._w=u*f*l-h*d*g;break;case"XZY":this._x=h*f*l-u*d*g,this._y=u*d*l-h*f*g,this._z=u*f*g+h*d*l,this._w=u*f*l+h*d*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],u=t[2],f=t[6],l=t[10],h=n+o+l;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-c)*d,this._y=(r-u)*d,this._z=(a-i)*d}else if(n>o&&n>l){const d=2*Math.sqrt(1+n-o-l);this._w=(f-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+u)/d}else if(o>l){const d=2*Math.sqrt(1+o-n-l);this._w=(r-u)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+f)/d}else{const d=2*Math.sqrt(1+l-n-o);this._w=(a-i)/d,this._x=(r+u)/d,this._y=(c+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,u=t._z,f=t._w;return this._x=n*f+a*o+i*u-r*c,this._y=i*f+a*c+r*o-n*u,this._z=r*f+a*u+n*c-i*o,this._w=a*f-n*o-i*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const u=Math.acos(o),f=Math.sin(u);c=Math.sin(c*u)/f,t=Math.sin(t*u)/f,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*i-o*n),f=2*(o*t-r*i),l=2*(r*n-a*t);return this.x=t+c*u+a*l-o*f,this.y=n+c*f+o*u-r*l,this.z=i+c*l+r*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zo.copy(this).projectOnVector(e),this.sub(zo)}reflect(e){return this.sub(zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new D,uh=new Nn;class Xe{constructor(e,t,n,i,r,a,o,c,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,u)}set(e,t,n,i,r,a,o,c,u){const f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],f=n[4],l=n[7],h=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],b=i[1],v=i[4],x=i[7],T=i[2],E=i[5],A=i[8];return r[0]=a*_+o*b+c*T,r[3]=a*m+o*v+c*E,r[6]=a*p+o*x+c*A,r[1]=u*_+f*b+l*T,r[4]=u*m+f*v+l*E,r[7]=u*p+f*x+l*A,r[2]=h*_+d*b+g*T,r[5]=h*m+d*v+g*E,r[8]=h*p+d*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8];return t*a*f-t*o*u-n*r*f+n*o*c+i*r*u-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],l=f*a-o*u,h=o*c-f*r,d=u*r-a*c,g=t*l+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=l*_,e[1]=(i*u-f*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(f*t-i*c)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*c-u*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-i*u,i*c,-i*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new Xe,hh=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fh=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mg(){const s={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(i.r=Yr(i.r),i.g=Yr(i.g),i.b=Yr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bi?uo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[nn]:{primaries:e,whitePoint:n,transfer:uo,toXYZ:hh,fromXYZ:fh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:hh,fromXYZ:fh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),s}const Qe=Mg();function Ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Er;class Sg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Er===void 0&&(Er=ea("canvas")),Er.width=e.width,Er.height=e.height;const i=Er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tg=0;class ou{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ho(i[a].image)):r.push(Ho(i[a]))}else r=Ho(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ho(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Eg=0;const Go=new D;class Bt extends vr{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Qn,i=Qn,r=It,a=yi,o=Dn,c=bn,u=Bt.DEFAULT_ANISOTROPY,f=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Fn(),this.name="",this.source=new ou(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Go).x}get height(){return this.source.getSize(Go).y}get depth(){return this.source.getSize(Go).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qi:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qi:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=_d;Bt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,i=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,u=c[0],f=c[4],l=c[8],h=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(f-h)<.01&&Math.abs(l-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(l+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,x=(d+1)/2,T=(p+1)/2,E=(f+h)/4,A=(l+_)/4,y=(g+m)/4;return v>x&&v>T?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=A/n):x>T?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=y/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=A/r,i=y/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(l-_)*(l-_)+(h-f)*(h-f));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(l-_)/b,this.z=(h-f)/b,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wg extends vr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Bt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ou(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends wg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rd extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ag extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ge{constructor(e,t,n,i,r,a,o,c,u,f,l,h,d,g,_,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,u,f,l,h,d,g,_,m)}set(e,t,n,i,r,a,o,c,u,f,l,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=u,p[6]=f,p[10]=l,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/wr.setFromMatrixColumn(e,0).length(),r=1/wr.setFromMatrixColumn(e,1).length(),a=1/wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),u=Math.sin(i),f=Math.cos(r),l=Math.sin(r);if(e.order==="XYZ"){const h=a*f,d=a*l,g=o*f,_=o*l;t[0]=c*f,t[4]=-c*l,t[8]=u,t[1]=d+g*u,t[5]=h-_*u,t[9]=-o*c,t[2]=_-h*u,t[6]=g+d*u,t[10]=a*c}else if(e.order==="YXZ"){const h=c*f,d=c*l,g=u*f,_=u*l;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*u,t[1]=a*l,t[5]=a*f,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*f,d=c*l,g=u*f,_=u*l;t[0]=h-_*o,t[4]=-a*l,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*f,t[9]=_-h*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*f,d=a*l,g=o*f,_=o*l;t[0]=c*f,t[4]=g*u-d,t[8]=h*u+_,t[1]=c*l,t[5]=_*u+h,t[9]=d*u-g,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,d=a*u,g=o*c,_=o*u;t[0]=c*f,t[4]=_-h*l,t[8]=g*l+d,t[1]=l,t[5]=a*f,t[9]=-o*f,t[2]=-u*f,t[6]=d*l+g,t[10]=h-_*l}else if(e.order==="XZY"){const h=a*c,d=a*u,g=o*c,_=o*u;t[0]=c*f,t[4]=-l,t[8]=u*f,t[1]=h*l+_,t[5]=a*f,t[9]=d*l-g,t[2]=g*l-d,t[6]=o*f,t[10]=_*l+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rg,e,Cg)}lookAt(e,t,n){const i=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Di.crossVectors(n,pn),Di.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Di.crossVectors(n,pn)),Di.normalize(),_a.crossVectors(pn,Di),i[0]=Di.x,i[4]=_a.x,i[8]=pn.x,i[1]=Di.y,i[5]=_a.y,i[9]=pn.y,i[2]=Di.z,i[6]=_a.z,i[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],f=n[1],l=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],v=n[7],x=n[11],T=n[15],E=i[0],A=i[4],y=i[8],M=i[12],I=i[1],R=i[5],L=i[9],F=i[13],B=i[2],N=i[6],z=i[10],O=i[14],ee=i[3],Q=i[7],de=i[11],G=i[15];return r[0]=a*E+o*I+c*B+u*ee,r[4]=a*A+o*R+c*N+u*Q,r[8]=a*y+o*L+c*z+u*de,r[12]=a*M+o*F+c*O+u*G,r[1]=f*E+l*I+h*B+d*ee,r[5]=f*A+l*R+h*N+d*Q,r[9]=f*y+l*L+h*z+d*de,r[13]=f*M+l*F+h*O+d*G,r[2]=g*E+_*I+m*B+p*ee,r[6]=g*A+_*R+m*N+p*Q,r[10]=g*y+_*L+m*z+p*de,r[14]=g*M+_*F+m*O+p*G,r[3]=b*E+v*I+x*B+T*ee,r[7]=b*A+v*R+x*N+T*Q,r[11]=b*y+v*L+x*z+T*de,r[15]=b*M+v*F+x*O+T*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],u=e[13],f=e[2],l=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15],b=c*d-u*h,v=o*d-u*l,x=o*h-c*l,T=a*d-u*f,E=a*h-c*f,A=a*l-o*f;return t*(_*b-m*v+p*x)-n*(g*b-m*T+p*E)+i*(g*v-_*T+p*A)-r*(g*x-_*E+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],l=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=t*o-n*a,v=t*c-i*a,x=t*u-r*a,T=n*c-i*o,E=n*u-r*o,A=i*u-r*c,y=f*_-l*g,M=f*m-h*g,I=f*p-d*g,R=l*m-h*_,L=l*p-d*_,F=h*p-d*m,B=b*F-v*L+x*R+T*I-E*M+A*y;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/B;return e[0]=(o*F-c*L+u*R)*N,e[1]=(i*L-n*F-r*R)*N,e[2]=(_*A-m*E+p*T)*N,e[3]=(h*E-l*A-d*T)*N,e[4]=(c*I-a*F-u*M)*N,e[5]=(t*F-i*I+r*M)*N,e[6]=(m*x-g*A-p*v)*N,e[7]=(f*A-h*x+d*v)*N,e[8]=(a*L-o*I+u*y)*N,e[9]=(n*I-t*L-r*y)*N,e[10]=(g*E-_*x+p*b)*N,e[11]=(l*x-f*E-d*b)*N,e[12]=(o*M-a*R-c*y)*N,e[13]=(t*R-n*M+i*y)*N,e[14]=(_*v-g*T-m*b)*N,e[15]=(f*T-l*v+h*b)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,u=r*a,f=r*o;return this.set(u*a+n,u*o-i*c,u*c+i*o,0,u*o+i*c,f*o+n,f*c-i*a,0,u*c-i*o,f*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,u=r+r,f=a+a,l=o+o,h=r*u,d=r*f,g=r*l,_=a*f,m=a*l,p=o*l,b=c*u,v=c*f,x=c*l,T=n.x,E=n.y,A=n.z;return i[0]=(1-(_+p))*T,i[1]=(d+x)*T,i[2]=(g-v)*T,i[3]=0,i[4]=(d-x)*E,i[5]=(1-(h+p))*E,i[6]=(m+b)*E,i[7]=0,i[8]=(g+v)*A,i[9]=(m-b)*A,i[10]=(1-(h+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=wr.set(i[0],i[1],i[2]).length();const o=wr.set(i[4],i[5],i[6]).length(),c=wr.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Un.copy(this);const u=1/a,f=1/o,l=1/c;return Un.elements[0]*=u,Un.elements[1]*=u,Un.elements[2]*=u,Un.elements[4]*=f,Un.elements[5]*=f,Un.elements[6]*=f,Un.elements[8]*=l,Un.elements[9]*=l,Un.elements[10]*=l,t.setFromRotationMatrix(Un),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=ei,c=!1){const u=this.elements,f=2*r/(t-e),l=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===ei)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Qs)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=l,u[9]=d,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ei,c=!1){const u=this.elements,f=2/(t-e),l=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===ei)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Qs)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=l,u[9]=0,u[13]=d,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wr=new D,Un=new Ge,Rg=new D(0,0,0),Cg=new D(1,1,1),Di=new D,_a=new D,pn=new D,dh=new Ge,ph=new Nn;class ai{constructor(e=0,t=0,n=0,i=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],u=i[5],f=i[9],l=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ph.setFromEuler(this),this.setFromQuaternion(ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class lu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pg=0;const mh=new D,Ar=new Nn,di=new Ge,ba=new D,Ms=new D,Dg=new D,Lg=new Nn,gh=new D(1,0,0),_h=new D(0,1,0),bh=new D(0,0,1),xh={type:"added"},Ig={type:"removed"},Rr={type:"childadded",child:null},Wo={type:"childremoved",child:null};class mt extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new D,t=new ai,n=new Nn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Xe}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(gh,e)}rotateY(e){return this.rotateOnAxis(_h,e)}rotateZ(e){return this.rotateOnAxis(bh,e)}translateOnAxis(e,t){return mh.copy(e).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gh,e)}translateY(e){return this.translateOnAxis(_h,e)}translateZ(e){return this.translateOnAxis(bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ba.copy(e):ba.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Ms,ba,this.up):di.lookAt(ba,Ms,this.up),this.quaternion.setFromRotationMatrix(di),i&&(di.extractRotation(i.matrixWorld),Ar.setFromRotationMatrix(di),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xh),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ig),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xh),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,Dg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const l=c[u];r(e.shapes,l)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),f=a(e.images),l=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),l.length>0&&(n.shapes=l),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const u in o){const f=o[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new D(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Mi extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fg={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],h=f.position.distanceTo(l.position),d=.02,g=.005;u.inputState.pinching&&h>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},xa={h:0,s:0,l:0};function qo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=au(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=qo(a,r,e+1/3),this.g=qo(a,r,e),this.b=qo(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,i),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=Cd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Qe.workingToColorSpace(Xt.copy(this),e),Math.round(Ke(Xt.r*255,0,255))*65536+Math.round(Ke(Xt.g*255,0,255))*256+Math.round(Ke(Xt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,r=Xt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,u;const f=(o+a)/2;if(o===a)c=0,u=0;else{const l=a-o;switch(u=f<=.5?l/(a+o):l/(2-a-o),a){case n:c=(i-r)/l+(i<r?6:0);break;case i:c=(r-n)/l+2;break;case r:c=(n-i)/l+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=kt){Qe.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(xa);const n=Vs(Li.h,xa.h,t),i=Vs(Li.s,xa.s,t),r=Vs(Li.l,xa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ve;Ve.NAMES=Cd;class cu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new cu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ng extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const kn=new D,pi=new D,Xo=new D,mi=new D,Cr=new D,Pr=new D,vh=new D,Ko=new D,Yo=new D,Jo=new D,Zo=new gt,$o=new gt,Qo=new gt;class Vn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),kn.subVectors(e,t),i.cross(kn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){kn.subVectors(i,t),pi.subVectors(n,t),Xo.subVectors(e,t);const a=kn.dot(kn),o=kn.dot(pi),c=kn.dot(Xo),u=pi.dot(pi),f=pi.dot(Xo),l=a*u-o*o;if(l===0)return r.set(0,0,0),null;const h=1/l,d=(u*c-o*f)*h,g=(a*f-o*c)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mi.x),c.addScaledVector(a,mi.y),c.addScaledVector(o,mi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Zo.setScalar(0),$o.setScalar(0),Qo.setScalar(0),Zo.fromBufferAttribute(e,t),$o.fromBufferAttribute(e,n),Qo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Zo,r.x),a.addScaledVector($o,r.y),a.addScaledVector(Qo,r.z),a}static isFrontFacing(e,t,n,i){return kn.subVectors(n,t),pi.subVectors(e,t),kn.cross(pi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),kn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Cr.subVectors(i,n),Pr.subVectors(r,n),Ko.subVectors(e,n);const c=Cr.dot(Ko),u=Pr.dot(Ko);if(c<=0&&u<=0)return t.copy(n);Yo.subVectors(e,i);const f=Cr.dot(Yo),l=Pr.dot(Yo);if(f>=0&&l<=f)return t.copy(i);const h=c*l-f*u;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(Cr,a);Jo.subVectors(e,r);const d=Cr.dot(Jo),g=Pr.dot(Jo);if(g>=0&&d<=g)return t.copy(r);const _=d*u-c*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(Pr,o);const m=f*g-d*l;if(m<=0&&l-f>=0&&d-g>=0)return vh.subVectors(r,i),o=(l-f)/(l-f+(d-g)),t.copy(i).addScaledVector(vh,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(Cr,a).addScaledVector(Pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Tn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),va.copy(n.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),ya.subVectors(this.max,Ss),Dr.subVectors(e.a,Ss),Lr.subVectors(e.b,Ss),Ir.subVectors(e.c,Ss),Ii.subVectors(Lr,Dr),Fi.subVectors(Ir,Lr),Qi.subVectors(Dr,Ir);let t=[0,-Ii.z,Ii.y,0,-Fi.z,Fi.y,0,-Qi.z,Qi.y,Ii.z,0,-Ii.x,Fi.z,0,-Fi.x,Qi.z,0,-Qi.x,-Ii.y,Ii.x,0,-Fi.y,Fi.x,0,-Qi.y,Qi.x,0];return!el(t,Dr,Lr,Ir,ya)||(t=[1,0,0,0,1,0,0,0,1],!el(t,Dr,Lr,Ir,ya))?!1:(Ma.crossVectors(Ii,Fi),t=[Ma.x,Ma.y,Ma.z],el(t,Dr,Lr,Ir,ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gi=[new D,new D,new D,new D,new D,new D,new D,new D],Bn=new D,va=new Tn,Dr=new D,Lr=new D,Ir=new D,Ii=new D,Fi=new D,Qi=new D,Ss=new D,ya=new D,Ma=new D,er=new D;function el(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){er.fromArray(s,r);const o=i.x*Math.abs(er.x)+i.y*Math.abs(er.y)+i.z*Math.abs(er.z),c=e.dot(er),u=t.dot(er),f=n.dot(er);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>o)return!1}return!0}const Ct=new D,Sa=new ne;let Og=0;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Og++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tc&&(e.usage=this.usage),e}}class Pd extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dd extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bt extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ug=new Tn,Ts=new D,tl=new D;class li{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ug.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ts,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(tl)),this.expandByPoint(Ts.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kg=0;const An=new Ge,nl=new mt,Fr=new D,mn=new Tn,Es=new Tn,Ut=new D;class Vt extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tg(e)?Dd:Pd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(mn.min,Es.min),mn.expandByPoint(Ut),Ut.addVectors(mn.max,Es.max),mn.expandByPoint(Ut)):(mn.expandByPoint(Es.min),mn.expandByPoint(Es.max))}mn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Ut.fromBufferAttribute(o,u),c&&(Fr.fromBufferAttribute(e,u),Ut.add(Fr)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new D,c[y]=new D;const u=new D,f=new D,l=new D,h=new ne,d=new ne,g=new ne,_=new D,m=new D;function p(y,M,I){u.fromBufferAttribute(n,y),f.fromBufferAttribute(n,M),l.fromBufferAttribute(n,I),h.fromBufferAttribute(r,y),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,I),f.sub(u),l.sub(u),d.sub(h),g.sub(h);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(l,-d.y).multiplyScalar(R),m.copy(l).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(R),o[y].add(_),o[M].add(_),o[I].add(_),c[y].add(m),c[M].add(m),c[I].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,M=b.length;y<M;++y){const I=b[y],R=I.start,L=I.count;for(let F=R,B=R+L;F<B;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new D,x=new D,T=new D,E=new D;function A(y){T.fromBufferAttribute(i,y),E.copy(T);const M=o[y];v.copy(M),v.sub(T.multiplyScalar(T.dot(M))).normalize(),x.crossVectors(E,M);const R=x.dot(c[y])<0?-1:1;a.setXYZW(y,v.x,v.y,v.z,R)}for(let y=0,M=b.length;y<M;++y){const I=b[y],R=I.start,L=I.count;for(let F=R,B=R+L;F<B;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new D,r=new D,a=new D,o=new D,c=new D,u=new D,f=new D,l=new D;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),f.subVectors(a,r),l.subVectors(i,r),f.cross(l),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,m),o.add(f),c.add(f),u.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,r),l.subVectors(i,r),f.cross(l),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,c){const u=o.array,f=o.itemSize,l=o.normalized,h=new u.constructor(c.length*f);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*f;for(let p=0;p<f;p++)h[g++]=u[d++]}return new Gt(h,f,l)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],u=e(c,n);t.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const c=[],u=r[o];for(let f=0,l=u.length;f<l;f++){const h=u[f],d=e(h,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let l=0,h=u.length;l<h;l++){const d=u[l];f.push(d.toJSON(e.data))}f.length>0&&(i[c]=f,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const u in i){const f=i[u];this.setAttribute(u,f.clone(t))}const r=e.morphAttributes;for(const u in r){const f=[],l=r[u];for(let h=0,d=l.length;h<d;h++)f.push(l[h].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tc,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new D;class uu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ho("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new uu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ho("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let zg=0;class ri extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=Kr,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=Ul,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ol&&(n.blendSrc=this.blendSrc),this.blendDst!==Ul&&(n.blendDst=this.blendDst),this.blendEquation!==cr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ah&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _i=new D,il=new D,Ta=new D,Ni=new D,rl=new D,Ea=new D,sl=new D;class gs{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){il.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(il);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ta),o=Ni.dot(this.direction),c=-Ni.dot(Ta),u=Ni.lengthSq(),f=Math.abs(1-a*a);let l,h,d,g;if(f>0)if(l=a*c-o,h=a*o-c,g=r*f,l>=0)if(h>=-g)if(h<=g){const _=1/f;l*=_,h*=_,d=l*(l+a*h+2*o)+h*(a*l+h+2*c)+u}else h=r,l=Math.max(0,-(a*h+o)),d=-l*l+h*(h+2*c)+u;else h=-r,l=Math.max(0,-(a*h+o)),d=-l*l+h*(h+2*c)+u;else h<=-g?(l=Math.max(0,-(-a*r+o)),h=l>0?-r:Math.min(Math.max(-r,-c),r),d=-l*l+h*(h+2*c)+u):h<=g?(l=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+u):(l=Math.max(0,-(a*r+o)),h=l>0?r:Math.min(Math.max(-r,-c),r),d=-l*l+h*(h+2*c)+u);else h=a>0?-r:r,l=Math.max(0,-(a*h+o)),d=-l*l+h*(h+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),i&&i.copy(il).addScaledVector(Ta,h),d}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const n=_i.dot(this.direction),i=_i.dot(_i)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const u=1/this.direction.x,f=1/this.direction.y,l=1/this.direction.z,h=this.origin;return u>=0?(n=(e.min.x-h.x)*u,i=(e.max.x-h.x)*u):(n=(e.max.x-h.x)*u,i=(e.min.x-h.x)*u),f>=0?(r=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),l>=0?(o=(e.min.z-h.z)*l,c=(e.max.z-h.z)*l):(o=(e.max.z-h.z)*l,c=(e.min.z-h.z)*l),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,i,r){rl.subVectors(t,e),Ea.subVectors(n,e),sl.crossVectors(rl,Ea);let a=this.direction.dot(sl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ni.subVectors(this.origin,e);const c=o*this.direction.dot(Ea.crossVectors(Ni,Ea));if(c<0)return null;const u=o*this.direction.dot(rl.cross(Ni));if(u<0||c+u>a)return null;const f=-o*Ni.dot(sl);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hn extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yh=new Ge,tr=new gs,wa=new li,Mh=new D,Aa=new D,Ra=new D,Ca=new D,al=new D,Pa=new D,Sh=new D,Da=new D;class pt extends mt{constructor(e=new Vt,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Pa.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const f=o[c],l=r[c];f!==0&&(al.fromBufferAttribute(l,e),a?Pa.addScaledVector(al,f):Pa.addScaledVector(al.sub(t),f))}t.add(Pa)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(r),tr.copy(e.ray).recast(e.near),!(wa.containsPoint(tr.origin)===!1&&(tr.intersectSphere(wa,Mh)===null||tr.origin.distanceToSquared(Mh)>(e.far-e.near)**2))&&(yh.copy(r).invert(),tr.copy(e.ray).applyMatrix4(yh),!(n.boundingBox!==null&&tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,l=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=b,T=v;x<T;x+=3){const E=o.getX(x),A=o.getX(x+1),y=o.getX(x+2);i=La(this,p,e,n,u,f,l,E,A,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);i=La(this,a,e,n,u,f,l,b,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=b,T=v;x<T;x+=3){const E=x,A=x+1,y=x+2;i=La(this,p,e,n,u,f,l,E,A,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=m,v=m+1,x=m+2;i=La(this,a,e,n,u,f,l,b,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Vg(s,e,t,n,i,r,a,o){let c;if(e.side===an?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Ei,o),c===null)return null;Da.copy(o),Da.applyMatrix4(s.matrixWorld);const u=t.ray.origin.distanceTo(Da);return u<t.near||u>t.far?null:{distance:u,point:Da.clone(),object:s}}function La(s,e,t,n,i,r,a,o,c,u){s.getVertexPosition(o,Aa),s.getVertexPosition(c,Ra),s.getVertexPosition(u,Ca);const f=Vg(s,e,t,n,Aa,Ra,Ca,Sh);if(f){const l=new D;Vn.getBarycoord(Sh,Aa,Ra,Ca,l),i&&(f.uv=Vn.getInterpolatedAttribute(i,o,c,u,l,new ne)),r&&(f.uv1=Vn.getInterpolatedAttribute(r,o,c,u,l,new ne)),a&&(f.normal=Vn.getInterpolatedAttribute(a,o,c,u,l,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:c,c:u,normal:new D,materialIndex:0};Vn.getNormal(Aa,Ra,Ca,h.normal),f.face=h,f.barycoord=l}return f}const Th=new D,Eh=new gt,wh=new gt,Hg=new D,Ah=new Ge,Ia=new D,ol=new li,Rh=new Ge,ll=new gs;class Gg extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=th,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ia),this.boundingBox.expandByPoint(Ia)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ia),this.boundingSphere.expandByPoint(Ia)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ol.copy(this.boundingSphere),ol.applyMatrix4(i),e.ray.intersectsSphere(ol)!==!1&&(Rh.copy(i).invert(),ll.copy(e.ray).applyMatrix4(Rh),!(this.boundingBox!==null&&ll.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ll)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===th?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Eh.fromBufferAttribute(i.attributes.skinIndex,e),wh.fromBufferAttribute(i.attributes.skinWeight,e),Th.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=wh.getComponent(r);if(a!==0){const o=Eh.getComponent(r);Ah.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Hg.copy(Th).applyMatrix4(Ah),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ld extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hu extends Bt{constructor(e=null,t=1,n=1,i,r,a,o,c,u=Lt,f=Lt,l,h){super(null,a,o,c,u,f,i,r,l,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ch=new Ge,Wg=new Ge;class fu{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Wg;Ch.multiplyMatrices(o,t[r]),Ch.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new hu(t,e,e,Dn,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Pe("Skeleton: No bone found with UUID:",r),a=new Ld),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ec extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Nr=new Ge,Ph=new Ge,Fa=[],Dh=new Tn,jg=new Ge,ws=new pt,As=new li;class Id extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ec(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,jg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Nr),Dh.copy(e.boundingBox).applyMatrix4(Nr),this.boundingBox.union(Dh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Nr),As.copy(e.boundingSphere).applyMatrix4(Nr),this.boundingSphere.union(As)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),e.ray.intersectsSphere(As)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Nr),Ph.multiplyMatrices(n,Nr),ws.matrixWorld=Ph,ws.raycast(e,Fa);for(let a=0,o=Fa.length;a<o;a++){const c=Fa[a];c.instanceId=r,c.object=this,t.push(c)}Fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ec(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new hu(new Float32Array(i*this.count),i,this.count,eu,Pn));const r=this.morphTexture.source.data.data;let a=0;for(let u=0;u<n.length;u++)a+=n[u];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const cl=new D,qg=new D,Xg=new Xe;class ki{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=cl.subVectors(n,t).cross(qg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xg.getNormalMatrix(e),i=this.coplanarPoint(cl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new li,Kg=new ne(.5,.5),Na=new D;class du{constructor(e=new ki,t=new ki,n=new ki,i=new ki,r=new ki,a=new ki){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],u=r[3],f=r[4],l=r[5],h=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],b=r[12],v=r[13],x=r[14],T=r[15];if(i[0].setComponents(u-a,d-f,p-g,T-b).normalize(),i[1].setComponents(u+a,d+f,p+g,T+b).normalize(),i[2].setComponents(u+o,d+l,p+_,T+v).normalize(),i[3].setComponents(u-o,d-l,p-_,T-v).normalize(),n)i[4].setComponents(c,h,m,x).normalize(),i[5].setComponents(u-c,d-h,p-m,T-x).normalize();else if(i[4].setComponents(u-c,d-h,p-m,T-x).normalize(),t===ei)i[5].setComponents(u+c,d+h,p+m,T+x).normalize();else if(t===Qs)i[5].setComponents(c,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){nr.center.set(0,0,0);const t=Kg.distanceTo(e.center);return nr.radius=.7071067811865476+t,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Na.x=i.normal.x>0?e.max.x:e.min.x,Na.y=i.normal.y>0?e.max.y:e.min.y,Na.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fd extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const po=new D,mo=new D,Lh=new Ge,Rs=new gs,Oa=new li,ul=new D,Ih=new D;class pu extends mt{constructor(e=new Vt,t=new Fd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)po.fromBufferAttribute(t,i-1),mo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=po.distanceTo(mo);e.setAttribute("lineDistance",new bt(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(i),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;Lh.copy(i).invert(),Rs.copy(e.ray).applyMatrix4(Lh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=u){const p=f.getX(_),b=f.getX(_+1),v=Ua(this,e,Rs,c,p,b,_);v&&t.push(v)}if(this.isLineLoop){const _=f.getX(g-1),m=f.getX(d),p=Ua(this,e,Rs,c,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=u){const p=Ua(this,e,Rs,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Ua(this,e,Rs,c,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ua(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(po.fromBufferAttribute(o,i),mo.fromBufferAttribute(o,r),t.distanceSqToSegment(po,mo,ul,Ih)>n)return;ul.applyMatrix4(s.matrixWorld);const u=e.ray.origin.distanceTo(ul);if(!(u<e.near||u>e.far))return{distance:u,point:Ih.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Fh=new D,Nh=new D;class Yg extends pu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Fh.fromBufferAttribute(t,i),Nh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fh.distanceTo(Nh);e.setAttribute("lineDistance",new bt(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jg extends pu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Nd extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Oh=new Ge,wc=new gs,ka=new li,Ba=new D;class Zg extends mt{constructor(e=new Vt,t=new Nd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(i),ka.radius+=r,e.ray.intersectsSphere(ka)===!1)return;Oh.copy(i).invert(),wc.copy(e.ray).applyMatrix4(Oh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,l=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=h,_=d;g<_;g++){const m=u.getX(g);Ba.fromBufferAttribute(l,m),Uh(Ba,m,c,i,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=h,_=d;g<_;g++)Ba.fromBufferAttribute(l,g),Uh(Ba,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Uh(s,e,t,n,i,r,a){const o=wc.distanceSqToPoint(s);if(o<t){const c=new D;wc.closestPointToPoint(s,c),c.applyMatrix4(n);const u=i.ray.origin.distanceTo(c);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Od extends Bt{constructor(e=[],t=br,n,i,r,a,o,c,u,f){super(e,t,n,i,r,a,o,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ta extends Bt{constructor(e,t,n=si,i,r,a,o=Lt,c=Lt,u,f=wi,l=1){if(f!==wi&&f!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:l};super(h,i,r,a,o,c,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ou(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $g extends ta{constructor(e,t=si,n=br,i,r,a=Lt,o=Lt,c,u=wi){const f={width:e,height:e,depth:1},l=[f,f,f,f,f,f];super(e,e,t,n,i,r,a,o,c,u),this.image=l,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ud extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gn extends Vt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],u=[],f=[],l=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new bt(u,3)),this.setAttribute("normal",new bt(f,3)),this.setAttribute("uv",new bt(l,2));function g(_,m,p,b,v,x,T,E,A,y,M){const I=x/A,R=T/y,L=x/2,F=T/2,B=E/2,N=A+1,z=y+1;let O=0,ee=0;const Q=new D;for(let de=0;de<z;de++){const G=de*R-F;for(let J=0;J<N;J++){const ce=J*I-L;Q[_]=ce*b,Q[m]=G*v,Q[p]=B,u.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=E>0?1:-1,f.push(Q.x,Q.y,Q.z),l.push(J/A),l.push(1-de/y),O+=1}}for(let de=0;de<y;de++)for(let G=0;G<A;G++){const J=h+G+N*de,ce=h+G+N*(de+1),ve=h+(G+1)+N*(de+1),Fe=h+(G+1)+N*de;c.push(J,ce,Fe),c.push(ce,ve,Fe),ee+=6}o.addGroup(d,ee,M),d+=ee,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class go extends Vt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const u=this;i=Math.floor(i),r=Math.floor(r);const f=[],l=[],h=[],d=[];let g=0;const _=[],m=n/2;let p=0;b(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(d,2));function b(){const x=new D,T=new D;let E=0;const A=(t-e)/n;for(let y=0;y<=r;y++){const M=[],I=y/r,R=I*(t-e)+e;for(let L=0;L<=i;L++){const F=L/i,B=F*c+o,N=Math.sin(B),z=Math.cos(B);T.x=R*N,T.y=-I*n+m,T.z=R*z,l.push(T.x,T.y,T.z),x.set(N,A,z).normalize(),h.push(x.x,x.y,x.z),d.push(F,1-I),M.push(g++)}_.push(M)}for(let y=0;y<i;y++)for(let M=0;M<r;M++){const I=_[M][y],R=_[M+1][y],L=_[M+1][y+1],F=_[M][y+1];(e>0||M!==0)&&(f.push(I,R,F),E+=3),(t>0||M!==r-1)&&(f.push(R,L,F),E+=3)}u.addGroup(p,E,0),p+=E}function v(x){const T=g,E=new ne,A=new D;let y=0;const M=x===!0?e:t,I=x===!0?1:-1;for(let L=1;L<=i;L++)l.push(0,m*I,0),h.push(0,I,0),d.push(.5,.5),g++;const R=g;for(let L=0;L<=i;L++){const B=L/i*c+o,N=Math.cos(B),z=Math.sin(B);A.x=M*z,A.y=m*I,A.z=M*N,l.push(A.x,A.y,A.z),h.push(0,I,0),E.x=N*.5+.5,E.y=z*.5*I+.5,d.push(E.x,E.y),g++}for(let L=0;L<i;L++){const F=T+L,B=R+L;x===!0?f.push(B,B+1,F):f.push(B+1,B,F),y+=3}u.addGroup(p,y,x===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,u;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),u=n[i]-a,u<0)o=i+1;else if(u>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const f=n[i],h=n[i+1]-f,d=(a-f)/h;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new ne:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,i=[],r=[],a=[],o=new D,c=new Ge;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let u=Number.MAX_VALUE;const f=Math.abs(i[0].x),l=Math.abs(i[0].y),h=Math.abs(i[0].z);f<=u&&(u=f,n.set(1,0,0)),l<=u&&(u=l,n.set(0,1,0)),h<=u&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ke(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Ke(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class mu extends ci{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ne){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),l=Math.sin(this.aRotation),h=c-this.aX,d=u-this.aY;c=h*f-d*l+this.aX,u=h*l+d*f+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Qg extends mu{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function gu(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,u){i(a,o,u*(o-r),u*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,u,f,l){let h=(a-r)/u-(o-r)/(u+f)+(o-a)/f,d=(o-a)/f-(c-a)/(f+l)+(c-o)/l;h*=f,d*=f,i(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const za=new D,hl=new gu,fl=new gu,dl=new gu;class e_ extends ci{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let u,f;this.closed||o>0?u=i[(o-1)%r]:(za.subVectors(i[0],i[1]).add(i[0]),u=za);const l=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?f=i[(o+2)%r]:(za.subVectors(i[r-1],i[r-2]).add(i[r-1]),f=za),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(l),d),_=Math.pow(l.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(f),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),hl.initNonuniformCatmullRom(u.x,l.x,h.x,f.x,g,_,m),fl.initNonuniformCatmullRom(u.y,l.y,h.y,f.y,g,_,m),dl.initNonuniformCatmullRom(u.z,l.z,h.z,f.z,g,_,m)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(u.x,l.x,h.x,f.x,this.tension),fl.initCatmullRom(u.y,l.y,h.y,f.y,this.tension),dl.initCatmullRom(u.z,l.z,h.z,f.z,this.tension));return n.set(hl.calc(c),fl.calc(c),dl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kh(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function t_(s,e){const t=1-s;return t*t*e}function n_(s,e){return 2*(1-s)*s*e}function i_(s,e){return s*s*e}function Hs(s,e,t,n){return t_(s,e)+n_(s,t)+i_(s,n)}function r_(s,e){const t=1-s;return t*t*t*e}function s_(s,e){const t=1-s;return 3*t*t*s*e}function a_(s,e){return 3*(1-s)*s*s*e}function o_(s,e){return s*s*s*e}function Gs(s,e,t,n,i){return r_(s,e)+s_(s,t)+a_(s,n)+o_(s,i)}class kd extends ci{constructor(e=new ne,t=new ne,n=new ne,i=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ne){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gs(e,i.x,r.x,a.x,o.x),Gs(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class l_ extends ci{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gs(e,i.x,r.x,a.x,o.x),Gs(e,i.y,r.y,a.y,o.y),Gs(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bd extends ci{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class c_ extends ci{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zd extends ci{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Hs(e,i.x,r.x,a.x),Hs(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class u_ extends ci{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Hs(e,i.x,r.x,a.x),Hs(e,i.y,r.y,a.y),Hs(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vd extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],u=i[a],f=i[a>i.length-2?i.length-1:a+1],l=i[a>i.length-3?i.length-1:a+2];return n.set(kh(o,c.x,u.x,f.x,l.x),kh(o,c.y,u.y,f.y,l.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ne().fromArray(i))}return this}}var Ac=Object.freeze({__proto__:null,ArcCurve:Qg,CatmullRomCurve3:e_,CubicBezierCurve:kd,CubicBezierCurve3:l_,EllipseCurve:mu,LineCurve:Bd,LineCurve3:c_,QuadraticBezierCurve:zd,QuadraticBezierCurve3:u_,SplineCurve:Vd});class h_ extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ac[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),u=c===0?0:1-a/c;return o.getPointAt(u,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let u=0;u<c.length;u++){const f=c[u];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ac[i.type]().fromJSON(i))}return this}}class Bh extends h_{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Bd(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new zd(this.currentPoint.clone(),new ne(e,t),new ne(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new kd(this.currentPoint.clone(),new ne(e,t),new ne(n,i),new ne(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Vd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){const u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+u,t+f,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){const u=new mu(e,t,n,i,r,a,o,c);if(this.curves.length>0){const l=u.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(u);const f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Hd extends Bh{constructor(e){super(e),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Bh().fromJSON(i))}return this}}function f_(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Gd(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,u;if(n&&(r=__(s,e,r,t)),s.length>80*t){o=s[0],c=s[1];let f=o,l=c;for(let h=t;h<i;h+=t){const d=s[h],g=s[h+1];d<o&&(o=d),g<c&&(c=g),d>f&&(f=d),g>l&&(l=g)}u=Math.max(f-o,l-c),u=u!==0?32767/u:0}return na(r,a,t,o,c,u,0),a}function Gd(s,e,t,n,i){let r;if(i===R_(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=zh(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=zh(a/n|0,s[a],s[a+1],r);return r&&rs(r,r.next)&&(ra(r),r=r.next),r}function xr(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(rs(t,t.next)||Mt(t.prev,t,t.next)===0)){if(ra(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function na(s,e,t,n,i,r,a){if(!s)return;!a&&r&&M_(s,n,i,r);let o=s;for(;s.prev!==s.next;){const c=s.prev,u=s.next;if(r?p_(s,n,i,r):d_(s)){e.push(c.i,s.i,u.i),ra(s),s=u.next,o=u.next;continue}if(s=u,s===o){a?a===1?(s=m_(xr(s),e),na(s,e,t,n,i,r,2)):a===2&&g_(s,e,t,n,i,r):na(xr(s),e,t,n,i,r,1);break}}}function d_(s){const e=s.prev,t=s,n=s.next;if(Mt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,u=n.y,f=Math.min(i,r,a),l=Math.min(o,c,u),h=Math.max(i,r,a),d=Math.max(o,c,u);let g=n.next;for(;g!==e;){if(g.x>=f&&g.x<=h&&g.y>=l&&g.y<=d&&Os(i,o,r,c,a,u,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function p_(s,e,t,n){const i=s.prev,r=s,a=s.next;if(Mt(i,r,a)>=0)return!1;const o=i.x,c=r.x,u=a.x,f=i.y,l=r.y,h=a.y,d=Math.min(o,c,u),g=Math.min(f,l,h),_=Math.max(o,c,u),m=Math.max(f,l,h),p=Rc(d,g,e,t,n),b=Rc(_,m,e,t,n);let v=s.prevZ,x=s.nextZ;for(;v&&v.z>=p&&x&&x.z<=b;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&Os(o,f,c,l,u,h,v.x,v.y)&&Mt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Os(o,f,c,l,u,h,x.x,x.y)&&Mt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&Os(o,f,c,l,u,h,v.x,v.y)&&Mt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=b;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Os(o,f,c,l,u,h,x.x,x.y)&&Mt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function m_(s,e){let t=s;do{const n=t.prev,i=t.next.next;!rs(n,i)&&jd(n,t,t.next,i)&&ia(n,i)&&ia(i,n)&&(e.push(n.i,t.i,i.i),ra(t),ra(t.next),t=s=i),t=t.next}while(t!==s);return xr(t)}function g_(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&E_(a,o)){let c=qd(a,o);a=xr(a,a.next),c=xr(c,c.next),na(a,e,t,n,i,r,0),na(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function __(s,e,t,n){const i=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,u=Gd(s,o,c,n,!1);u===u.next&&(u.steiner=!0),i.push(T_(u))}i.sort(b_);for(let r=0;r<i.length;r++)t=x_(i[r],t);return t}function b_(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function x_(s,e){const t=v_(s,e);if(!t)return e;const n=qd(t,s);return xr(n,n.next),xr(t,t.next)}function v_(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,a;if(rs(s,t))return t;do{if(rs(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const l=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(l<=n&&l>r&&(r=l,a=t.x<t.next.x?t:t.next,l===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,u=a.y;let f=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Wd(i<u?n:r,i,c,u,i<u?r:n,i,t.x,t.y)){const l=Math.abs(i-t.y)/(n-t.x);ia(t,s)&&(l<f||l===f&&(t.x>a.x||t.x===a.x&&y_(a,t)))&&(a=t,f=l)}t=t.next}while(t!==o);return a}function y_(s,e){return Mt(s.prev,s,e.prev)<0&&Mt(e.next,s,s.next)<0}function M_(s,e,t,n){let i=s;do i.z===0&&(i.z=Rc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,S_(i)}function S_(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let u=0;u<t&&(o++,a=a.nextZ,!!a);u++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Rc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function T_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Wd(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Os(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&Wd(s,e,t,n,i,r,a,o)}function E_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!w_(s,e)&&(ia(s,e)&&ia(e,s)&&A_(s,e)&&(Mt(s.prev,s,e.prev)||Mt(s,e.prev,e))||rs(s,e)&&Mt(s.prev,s,s.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function rs(s,e){return s.x===e.x&&s.y===e.y}function jd(s,e,t,n){const i=Ha(Mt(s,e,t)),r=Ha(Mt(s,e,n)),a=Ha(Mt(t,n,s)),o=Ha(Mt(t,n,e));return!!(i!==r&&a!==o||i===0&&Va(s,t,e)||r===0&&Va(s,n,e)||a===0&&Va(t,s,n)||o===0&&Va(t,e,n))}function Va(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ha(s){return s>0?1:s<0?-1:0}function w_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&jd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ia(s,e){return Mt(s.prev,s,s.next)<0?Mt(s,e,s.next)>=0&&Mt(s,s.prev,e)>=0:Mt(s,e,s.prev)<0||Mt(s,s.next,e)<0}function A_(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function qd(s,e){const t=Cc(s.i,s.x,s.y),n=Cc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function zh(s,e,t,n){const i=Cc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ra(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Cc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function R_(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class C_{static triangulate(e,t,n=2){return f_(e,t,n)}}class Wr{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Wr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Vh(e),Hh(n,e);let a=e.length;t.forEach(Vh);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Hh(n,t[c]);const o=C_.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Vh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Hh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class _u extends Vt{constructor(e=new Hd([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a(u)}this.setAttribute("position",new bt(i,3)),this.setAttribute("uv",new bt(r,2)),this.computeVertexNormals();function a(o){const c=[],u=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,l=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:P_;let v,x=!1,T,E,A,y;if(p){v=p.getSpacedPoints(f),x=!0,h=!1;const $=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(f,$),E=new D,A=new D,y=new D}h||(m=0,d=0,g=0,_=0);const M=o.extractPoints(u);let I=M.shape;const R=M.holes;if(!Wr.isClockWise(I)){I=I.reverse();for(let $=0,re=R.length;$<re;$++){const te=R[$];Wr.isClockWise(te)&&(R[$]=te.reverse())}}function F($){const te=10000000000000001e-36;let me=$[0];for(let P=1;P<=$.length;P++){const Oe=P%$.length,xe=$[Oe],ke=xe.x-me.x,he=xe.y-me.y,C=ke*ke+he*he,S=Math.max(Math.abs(xe.x),Math.abs(xe.y),Math.abs(me.x),Math.abs(me.y)),k=te*S*S;if(C<=k){$.splice(Oe,1),P--;continue}me=xe}}F(I),R.forEach(F);const B=R.length,N=I;for(let $=0;$<B;$++){const re=R[$];I=I.concat(re)}function z($,re,te){return re||ze("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(re,te)}const O=I.length;function ee($,re,te){let me,P,Oe;const xe=$.x-re.x,ke=$.y-re.y,he=te.x-$.x,C=te.y-$.y,S=xe*xe+ke*ke,k=xe*C-ke*he;if(Math.abs(k)>Number.EPSILON){const q=Math.sqrt(S),Z=Math.sqrt(he*he+C*C),K=re.x-ke/q,Te=re.y+xe/q,fe=te.x-C/Z,Le=te.y+he/Z,Be=((fe-K)*C-(Le-Te)*he)/(xe*C-ke*he);me=K+xe*Be-$.x,P=Te+ke*Be-$.y;const ie=me*me+P*P;if(ie<=2)return new ne(me,P);Oe=Math.sqrt(ie/2)}else{let q=!1;xe>Number.EPSILON?he>Number.EPSILON&&(q=!0):xe<-Number.EPSILON?he<-Number.EPSILON&&(q=!0):Math.sign(ke)===Math.sign(C)&&(q=!0),q?(me=-ke,P=xe,Oe=Math.sqrt(S)):(me=xe,P=ke,Oe=Math.sqrt(S/2))}return new ne(me/Oe,P/Oe)}const Q=[];for(let $=0,re=N.length,te=re-1,me=$+1;$<re;$++,te++,me++)te===re&&(te=0),me===re&&(me=0),Q[$]=ee(N[$],N[te],N[me]);const de=[];let G,J=Q.concat();for(let $=0,re=B;$<re;$++){const te=R[$];G=[];for(let me=0,P=te.length,Oe=P-1,xe=me+1;me<P;me++,Oe++,xe++)Oe===P&&(Oe=0),xe===P&&(xe=0),G[me]=ee(te[me],te[Oe],te[xe]);de.push(G),J=J.concat(G)}let ce;if(m===0)ce=Wr.triangulateShape(N,R);else{const $=[],re=[];for(let te=0;te<m;te++){const me=te/m,P=d*Math.cos(me*Math.PI/2),Oe=g*Math.sin(me*Math.PI/2)+_;for(let xe=0,ke=N.length;xe<ke;xe++){const he=z(N[xe],Q[xe],Oe);Ue(he.x,he.y,-P),me===0&&$.push(he)}for(let xe=0,ke=B;xe<ke;xe++){const he=R[xe];G=de[xe];const C=[];for(let S=0,k=he.length;S<k;S++){const q=z(he[S],G[S],Oe);Ue(q.x,q.y,-P),me===0&&C.push(q)}me===0&&re.push(C)}}ce=Wr.triangulateShape($,re)}const ve=ce.length,Fe=g+_;for(let $=0;$<O;$++){const re=h?z(I[$],J[$],Fe):I[$];x?(A.copy(T.normals[0]).multiplyScalar(re.x),E.copy(T.binormals[0]).multiplyScalar(re.y),y.copy(v[0]).add(A).add(E),Ue(y.x,y.y,y.z)):Ue(re.x,re.y,0)}for(let $=1;$<=f;$++)for(let re=0;re<O;re++){const te=h?z(I[re],J[re],Fe):I[re];x?(A.copy(T.normals[$]).multiplyScalar(te.x),E.copy(T.binormals[$]).multiplyScalar(te.y),y.copy(v[$]).add(A).add(E),Ue(y.x,y.y,y.z)):Ue(te.x,te.y,l/f*$)}for(let $=m-1;$>=0;$--){const re=$/m,te=d*Math.cos(re*Math.PI/2),me=g*Math.sin(re*Math.PI/2)+_;for(let P=0,Oe=N.length;P<Oe;P++){const xe=z(N[P],Q[P],me);Ue(xe.x,xe.y,l+te)}for(let P=0,Oe=R.length;P<Oe;P++){const xe=R[P];G=de[P];for(let ke=0,he=xe.length;ke<he;ke++){const C=z(xe[ke],G[ke],me);x?Ue(C.x,C.y+v[f-1].y,v[f-1].x+te):Ue(C.x,C.y,l+te)}}}X(),le();function X(){const $=i.length/3;if(h){let re=0,te=O*re;for(let me=0;me<ve;me++){const P=ce[me];Ne(P[2]+te,P[1]+te,P[0]+te)}re=f+m*2,te=O*re;for(let me=0;me<ve;me++){const P=ce[me];Ne(P[0]+te,P[1]+te,P[2]+te)}}else{for(let re=0;re<ve;re++){const te=ce[re];Ne(te[2],te[1],te[0])}for(let re=0;re<ve;re++){const te=ce[re];Ne(te[0]+O*f,te[1]+O*f,te[2]+O*f)}}n.addGroup($,i.length/3-$,0)}function le(){const $=i.length/3;let re=0;ue(N,re),re+=N.length;for(let te=0,me=R.length;te<me;te++){const P=R[te];ue(P,re),re+=P.length}n.addGroup($,i.length/3-$,1)}function ue($,re){let te=$.length;for(;--te>=0;){const me=te;let P=te-1;P<0&&(P=$.length-1);for(let Oe=0,xe=f+m*2;Oe<xe;Oe++){const ke=O*Oe,he=O*(Oe+1),C=re+me+ke,S=re+P+ke,k=re+P+he,q=re+me+he;He(C,S,k,q)}}}function Ue($,re,te){c.push($),c.push(re),c.push(te)}function Ne($,re,te){at($),at(re),at(te);const me=i.length/3,P=b.generateTopUV(n,i,me-3,me-2,me-1);je(P[0]),je(P[1]),je(P[2])}function He($,re,te,me){at($),at(re),at(me),at(re),at(te),at(me);const P=i.length/3,Oe=b.generateSideWallUV(n,i,P-6,P-3,P-2,P-1);je(Oe[0]),je(Oe[1]),je(Oe[3]),je(Oe[1]),je(Oe[2]),je(Oe[3])}function at($){i.push(c[$*3+0]),i.push(c[$*3+1]),i.push(c[$*3+2])}function je($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return D_(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ac[i.type]().fromJSON(i)),new _u(n,e.options)}}const P_={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],u=e[i*3],f=e[i*3+1];return[new ne(r,a),new ne(o,c),new ne(u,f)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],u=e[n*3],f=e[n*3+1],l=e[n*3+2],h=e[i*3],d=e[i*3+1],g=e[i*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-f)<Math.abs(a-u)?[new ne(a,1-c),new ne(u,1-l),new ne(h,1-g),new ne(_,1-p)]:[new ne(o,1-c),new ne(f,1-l),new ne(d,1-g),new ne(m,1-p)]}};function D_(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ro extends Vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),u=o+1,f=c+1,l=e/o,h=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<f;p++){const b=p*h-a;for(let v=0;v<u;v++){const x=v*l-r;g.push(x,-b,0),_.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const v=b+u*p,x=b+u*(p+1),T=b+1+u*(p+1),E=b+1+u*p;d.push(v,x,E),d.push(x,T,E)}this.setIndex(d),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.width,e.height,e.widthSegments,e.heightSegments)}}class _o extends Vt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const f=[],l=new D,h=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],v=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const E=T/t;l.x=-e*Math.cos(i+E*r)*Math.sin(a+v*o),l.y=e*Math.cos(a+v*o),l.z=e*Math.sin(i+E*r)*Math.sin(a+v*o),g.push(l.x,l.y,l.z),h.copy(l).normalize(),_.push(h.x,h.y,h.z),m.push(E+x,1-v),b.push(u++)}f.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const v=f[p][b+1],x=f[p][b],T=f[p+1][b],E=f[p+1][b+1];(p!==0||a>0)&&d.push(v,x,E),(p!==n-1||c<Math.PI)&&d.push(x,T,E)}this.setIndex(d),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bu extends Vt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],u=[],f=[],l=[],h=new D,d=new D,g=new D;for(let _=0;_<=n;_++){const m=a+_/n*o;for(let p=0;p<=i;p++){const b=p/i*r;d.x=(e+t*Math.cos(m))*Math.cos(b),d.y=(e+t*Math.cos(m))*Math.sin(b),d.z=t*Math.sin(m),u.push(d.x,d.y,d.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),g.subVectors(d,h).normalize(),f.push(g.x,g.y,g.z),l.push(p/i),l.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){const p=(i+1)*_+m-1,b=(i+1)*(_-1)+m-1,v=(i+1)*(_-1)+m,x=(i+1)*_+m;c.push(p,b,x),c.push(b,v,x)}this.setIndex(c),this.setAttribute("position",new bt(u,3)),this.setAttribute("normal",new bt(f,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function ss(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(s){const e={};for(let t=0;t<s.length;t++){const n=ss(s[t]);for(const i in n)e[i]=n[i]}return e}function L_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const bo={clone:ss,merge:Qt};var I_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I_,this.fragmentShader=F_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=L_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class N_ extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jt extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wd,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ui extends Jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class O_ extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U_ extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ga(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function k_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Kd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class _s{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class B_ extends _s{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ih,endingEnd:ih}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case rh:r=e,o=2*t-n;break;case sh:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rh:a=e,c=2*n-t;break;case sh:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const u=(n-t)*.5,f=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,f=this._offsetPrev,l=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,b=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,v=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let T=0;T!==o;++T)r[T]=p*a[f+T]+b*a[u+T]+v*a[c+T]+x*a[l+T];return r}}class z_ extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,f=(n-t)/(i-t),l=1-f;for(let h=0;h!==o;++h)r[h]=a[u+h]*l+a[c+h]*f;return r}}class V_ extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class H_ extends _s{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,f=this.settings||this.DefaultSettings_,l=f.inTangents,h=f.outTangents;if(!l||!h){const _=(n-t)/(i-t),m=1-_;for(let p=0;p!==o;++p)r[p]=a[u+p]*m+a[c+p]*_;return r}const d=o*2,g=e-1;for(let _=0;_!==o;++_){const m=a[u+_],p=a[c+_],b=g*d+_*2,v=h[b],x=h[b+1],T=e*d+_*2,E=l[T],A=l[T+1];let y=(n-t)/(i-t),M,I,R,L,F;for(let B=0;B<8;B++){M=y*y,I=M*y,R=1-y,L=R*R,F=L*R;const z=F*t+3*L*y*v+3*R*M*E+I*i-n;if(Math.abs(z)<1e-10)break;const O=3*L*(v-t)+6*R*y*(E-v)+3*M*(i-E);if(Math.abs(O)<1e-10)break;y=y-z/O,y=Math.max(0,Math.min(1,y))}r[_]=F*m+3*L*y*x+3*R*M*A+I*p}return r}}class Wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ga(t,this.TimeBufferType),this.values=Ga(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ga(e.times,Array),values:Ga(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new V_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new z_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new B_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new H_(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Zs:t=this.InterpolantFactoryMethodDiscrete;break;case $s:t=this.InterpolantFactoryMethodLinear;break;case Bo:t=this.InterpolantFactoryMethodSmooth;break;case nh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return Bo;case this.InterpolantFactoryMethodBezier:return nh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){ze("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ze("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&ng(i))for(let o=0,c=i.length;o!==c;++o){const u=i[o];if(isNaN(u)){ze("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Bo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const u=e[o],f=e[o+1];if(u!==f&&(o!==1||u!==e[0]))if(i)c=!0;else{const l=o*n,h=l-n,d=l+n;for(let g=0;g!==n;++g){const _=t[l+g];if(_!==t[h+g]||_!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const l=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[l+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=$s;class bs extends Wn{constructor(e,t,n){super(e,t,n)}}bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Zs;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Yd extends Wn{constructor(e,t,n,i){super(e,t,n,i)}}Yd.prototype.ValueTypeName="color";class as extends Wn{constructor(e,t,n,i){super(e,t,n,i)}}as.prototype.ValueTypeName="number";class G_ extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let u=e*o;for(let f=u+o;u!==f;u+=4)Nn.slerpFlat(r,0,a,u-o,a,u,c);return r}}class os extends Wn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new G_(this.times,this.values,this.getValueSize(),e)}}os.prototype.ValueTypeName="quaternion";os.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends Wn{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Zs;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends Wn{constructor(e,t,n,i){super(e,t,n,i)}}ls.prototype.ValueTypeName="vector";class W_{constructor(e="",t=-1,n=[],i=jm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Fn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(q_(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],u=[];c.push((o+r-1)%r,o,(o+1)%r),u.push(0,1,0);const f=k_(c);c=Gh(c,1,f),u=Gh(u,1,f),!i&&c[0]===0&&(c.push(r),u.push(u[0])),a.push(new as(".morphTargetInfluences["+t[o].name+"]",c,u).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const u=e[o],f=u.name.match(r);if(f&&f.length>1){const l=f[1];let h=i[l];h||(i[l]=h=[]),h.push(u)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Pe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ze("AnimationClip: No animation in JSONLoader data."),null;const n=function(l,h,d,g,_){if(d.length!==0){const m=[],p=[];Kd(d,m,p,g),m.length!==0&&_.push(new l(h,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let l=0;l<u.length;l++){const h=u[l].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)d[h[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let b=0;b!==h[g].morphTargets.length;++b){const v=h[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new as(".morphTargetInfluence["+_+"]",m,p))}c=d.length*a}else{const d=".bones["+t[l].name+"]";n(ls,d+".position",h,"pos",i),n(os,d+".quaternion",h,"rot",i),n(ls,d+".scale",h,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function j_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return as;case"vector":case"vector2":case"vector3":case"vector4":return ls;case"color":return Yd;case"quaternion":return os;case"bool":case"boolean":return bs;case"string":return xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function q_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=j_(s.type);if(s.times===void 0){const t=[],n=[];Kd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Si={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Wh(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Wh(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Wh(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Jd{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,r===!1&&i.onStart!==void 0&&i.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,l){return u.push(f,l),this},this.removeHandler=function(f){const l=u.indexOf(f);return l!==-1&&u.splice(l,2),this},this.getHandler=function(f){for(let l=0,h=u.length;l<h;l+=2){const d=u[l],g=u[l+1];if(d.global&&(d.lastIndex=0),d.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const X_=new Jd;class vs{constructor(e){this.manager=e!==void 0?e:X_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class K_ extends Error{constructor(e,t){super(e),this.response=t}}class Zd extends vs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Si.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:i});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const f=bi[e],l=u.body.getReader(),h=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){b();function b(){l.read().then(({done:v,value:x})=>{if(v)p.close();else{_+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let E=0,A=f.length;E<A;E++){const y=f[E];y.onProgress&&y.onProgress(T)}p.enqueue(x),b()}},v=>{p.error(v)})}}});return new Response(m)}else throw new K_(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return u.json();default:if(o==="")return u.text();{const l=/charset="?([^;"\s]*)"?/i.exec(o),h=l&&l[1]?l[1].toLowerCase():void 0,d=new TextDecoder(h);return u.arrayBuffer().then(g=>d.decode(g))}}}).then(u=>{Si.add(`file:${e}`,u);const f=bi[e];delete bi[e];for(let l=0,h=f.length;l<h;l++){const d=f[l];d.onLoad&&d.onLoad(u)}}).catch(u=>{const f=bi[e];if(f===void 0)throw this.manager.itemError(e),u;delete bi[e];for(let l=0,h=f.length;l<h;l++){const d=f[l];d.onError&&d.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Or=new WeakMap;class Y_ extends vs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Si.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let l=Or.get(a);l===void 0&&(l=[],Or.set(a,l)),l.push({onLoad:t,onError:i})}return a}const o=ea("img");function c(){f(),t&&t(this);const l=Or.get(this)||[];for(let h=0;h<l.length;h++){const d=l[h];d.onLoad&&d.onLoad(this)}Or.delete(this),r.manager.itemEnd(e)}function u(l){f(),i&&i(l),Si.remove(`image:${e}`);const h=Or.get(this)||[];for(let d=0;d<h.length;d++){const g=h[d];g.onError&&g.onError(l)}Or.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Si.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class $d extends vs{constructor(e){super(e)}load(e,t,n,i){const r=new Bt,a=new Y_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class xu extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const pl=new Ge,jh=new D,qh=new D;class vu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new du,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(jh),qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qh),t.updateMatrixWorld(),pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Qs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wa=new D,ja=new Nn,qn=new D;class Qd extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wa,ja,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,ja,qn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Wa,ja,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,ja,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new D,Xh=new ne,Kh=new ne;class en extends Qd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,Xh,Kh),t.subVectors(Kh,Xh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/u,i*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class J_ extends vu{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=is*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Z_ extends xu{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new J_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class $_ extends vu{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}}class xo extends xu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class fa extends Qd{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Q_ extends vu{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eb extends xu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Q_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ws{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ml=new WeakMap;class tb extends vs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Si.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(u=>{if(ml.has(a)===!0)i&&i(ml.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(u),r.manager.itemEnd(e),u});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return Si.add(`image-bitmap:${e}`,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){i&&i(u),ml.set(c,u),Si.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Si.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ur=-90,kr=1;class nb extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(Ur,kr,e,t);i.layers=this.layers,this.add(i);const r=new en(Ur,kr,e,t);r.layers=this.layers,this.add(r);const a=new en(Ur,kr,e,t);a.layers=this.layers,this.add(a);const o=new en(Ur,kr,e,t);o.layers=this.layers,this.add(o);const c=new en(Ur,kr,e,t);c.layers=this.layers,this.add(c);const u=new en(Ur,kr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const u of t)this.remove(u);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,u,f]=this.children,l=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(l,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ib extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class rb{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=sb.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function sb(){this._document.hidden===!1&&this.reset()}const yu="\\[\\]\\.:\\/",ab=new RegExp("["+yu+"]","g"),Mu="[^"+yu+"]",ob="[^"+yu.replace("\\.","")+"]",lb=/((?:WC+[\/:])*)/.source.replace("WC",Mu),cb=/(WCOD+)?/.source.replace("WCOD",ob),ub=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mu),hb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mu),fb=new RegExp("^"+lb+cb+ub+hb+"$"),db=["material","materials","bones","map"];class pb{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ab,"")}static parseTrackName(e){const t=fb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);db.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===u){u=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const a=e[i];if(a===void 0){const u=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=pb;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Yh=new Ge;class mb{constructor(e,t,n=0,i=1/0){this.ray=new gs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new lu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yh),this}intersectObject(e,t=!0,n=[]){return Pc(e,this,n,t),n.sort(Jh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Pc(e[i],this,n,t);return n.sort(Jh),n}}function Jh(s,e){return s.distance-e.distance}function Pc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Pc(r[a],e,t,!0)}}class Zh{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gb extends vr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Pe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function $h(s,e,t,n){const i=_b(n);switch(t){case Sd:return s*e;case eu:return s*e/i.components*i.byteLength;case tu:return s*e/i.components*i.byteLength;case ns:return s*e*2/i.components*i.byteLength;case nu:return s*e*2/i.components*i.byteLength;case Td:return s*e*3/i.components*i.byteLength;case Dn:return s*e*4/i.components*i.byteLength;case iu:return s*e*4/i.components*i.byteLength;case eo:case to:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ql:case Kl:return Math.max(s,16)*Math.max(e,8)/4;case jl:case Xl:return Math.max(s,8)*Math.max(e,8)/2;case Yl:case Jl:case $l:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zl:case ec:case tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case cc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case uc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case hc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case fc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case dc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case pc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case mc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case gc:case _c:case bc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case xc:case vc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case yc:case Mc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _b(s){switch(s){case bn:case xd:return{byteLength:1,components:1};case Ys:case vd:case Mn:return{byteLength:2,components:1};case $c:case Qc:return{byteLength:2,components:4};case si:case Zc:case Pn:return{byteLength:4,components:1};case yd:case Md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);function ep(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function bb(s){const e=new WeakMap;function t(o,c){const u=o.array,f=o.usage,l=u.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,u,f),o.onUploadCallback();let d;if(u instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)d=s.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=s.SHORT;else if(u instanceof Uint32Array)d=s.UNSIGNED_INT;else if(u instanceof Int32Array)d=s.INT;else if(u instanceof Int8Array)d=s.BYTE;else if(u instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,c,u){const f=c.array,l=c.updateRanges;if(s.bindBuffer(u,o),l.length===0)s.bufferSubData(u,0,f);else{l.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<l.length;d++){const g=l[h],_=l[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,l[h]=_)}l.length=h+1;for(let d=0,g=l.length;d<g;d++){const _=l[d];s.bufferSubData(u,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:i,remove:r,update:a}}var xb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ab=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Db=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ib=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Hb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,h0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,b0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,N0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ix=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ox=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ex=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ax=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ux=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:xb,alphahash_pars_fragment:vb,alphamap_fragment:yb,alphamap_pars_fragment:Mb,alphatest_fragment:Sb,alphatest_pars_fragment:Tb,aomap_fragment:Eb,aomap_pars_fragment:wb,batching_pars_vertex:Ab,batching_vertex:Rb,begin_vertex:Cb,beginnormal_vertex:Pb,bsdfs:Db,iridescence_fragment:Lb,bumpmap_pars_fragment:Ib,clipping_planes_fragment:Fb,clipping_planes_pars_fragment:Nb,clipping_planes_pars_vertex:Ob,clipping_planes_vertex:Ub,color_fragment:kb,color_pars_fragment:Bb,color_pars_vertex:zb,color_vertex:Vb,common:Hb,cube_uv_reflection_fragment:Gb,defaultnormal_vertex:Wb,displacementmap_pars_vertex:jb,displacementmap_vertex:qb,emissivemap_fragment:Xb,emissivemap_pars_fragment:Kb,colorspace_fragment:Yb,colorspace_pars_fragment:Jb,envmap_fragment:Zb,envmap_common_pars_fragment:$b,envmap_pars_fragment:Qb,envmap_pars_vertex:e0,envmap_physical_pars_fragment:h0,envmap_vertex:t0,fog_vertex:n0,fog_pars_vertex:i0,fog_fragment:r0,fog_pars_fragment:s0,gradientmap_pars_fragment:a0,lightmap_pars_fragment:o0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:c0,lights_pars_begin:u0,lights_toon_fragment:f0,lights_toon_pars_fragment:d0,lights_phong_fragment:p0,lights_phong_pars_fragment:m0,lights_physical_fragment:g0,lights_physical_pars_fragment:_0,lights_fragment_begin:b0,lights_fragment_maps:x0,lights_fragment_end:v0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:T0,map_fragment:E0,map_pars_fragment:w0,map_particle_fragment:A0,map_particle_pars_fragment:R0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:P0,morphinstance_vertex:D0,morphcolor_vertex:L0,morphnormal_vertex:I0,morphtarget_pars_vertex:F0,morphtarget_vertex:N0,normal_fragment_begin:O0,normal_fragment_maps:U0,normal_pars_fragment:k0,normal_pars_vertex:B0,normal_vertex:z0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:H0,clearcoat_normal_fragment_maps:G0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:j0,opaque_fragment:q0,packing:X0,premultiplied_alpha_fragment:K0,project_vertex:Y0,dithering_fragment:J0,dithering_pars_fragment:Z0,roughnessmap_fragment:$0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:ex,shadowmap_pars_vertex:tx,shadowmap_vertex:nx,shadowmask_pars_fragment:ix,skinbase_vertex:rx,skinning_pars_vertex:sx,skinning_vertex:ax,skinnormal_vertex:ox,specularmap_fragment:lx,specularmap_pars_fragment:cx,tonemapping_fragment:ux,tonemapping_pars_fragment:hx,transmission_fragment:fx,transmission_pars_fragment:dx,uv_pars_fragment:px,uv_pars_vertex:mx,uv_vertex:gx,worldpos_vertex:_x,background_vert:bx,background_frag:xx,backgroundCube_vert:vx,backgroundCube_frag:yx,cube_vert:Mx,cube_frag:Sx,depth_vert:Tx,depth_frag:Ex,distance_vert:wx,distance_frag:Ax,equirect_vert:Rx,equirect_frag:Cx,linedashed_vert:Px,linedashed_frag:Dx,meshbasic_vert:Lx,meshbasic_frag:Ix,meshlambert_vert:Fx,meshlambert_frag:Nx,meshmatcap_vert:Ox,meshmatcap_frag:Ux,meshnormal_vert:kx,meshnormal_frag:Bx,meshphong_vert:zx,meshphong_frag:Vx,meshphysical_vert:Hx,meshphysical_frag:Gx,meshtoon_vert:Wx,meshtoon_frag:jx,points_vert:qx,points_frag:Xx,shadow_vert:Kx,shadow_frag:Yx,sprite_vert:Jx,sprite_frag:Zx},ge={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Zn={basic:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Qt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Qt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Qt([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Qt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Qt([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Qt([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Qt([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Qt([ge.lights,ge.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Zn.physical={uniforms:Qt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const qa={r:0,b:0,g:0},ir=new ai,$x=new Ge;function Qx(s,e,t,n,i,r){const a=new Ve(0);let o=i===!0?0:1,c,u,f=null,l=0,h=null;function d(b){let v=b.isScene===!0?b.background:null;if(v&&v.isTexture){const x=b.backgroundBlurriness>0;v=e.get(v,x)}return v}function g(b){let v=!1;const x=d(b);x===null?m(a,o):x&&x.isColor&&(m(x,1),v=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(b,v){const x=d(v);x&&(x.isCubeTexture||x.mapping===Ao)?(u===void 0&&(u=new pt(new Gn(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:ss(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),ir.copy(v.backgroundRotation),ir.x*=-1,ir.y*=-1,ir.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($x.makeRotationFromEuler(ir)),u.material.toneMapped=Qe.getTransfer(x.colorSpace)!==it,(f!==x||l!==x.version||h!==s.toneMapping)&&(u.material.needsUpdate=!0,f=x,l=x.version,h=s.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new pt(new Ro(2,2),new Yt({name:"BackgroundMaterial",uniforms:ss(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==it,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||l!==x.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,f=x,l=x.version,h=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,v){b.getRGB(qa,Xd(s)),t.buffers.color.setClear(qa.r,qa.g,qa.b,v,r)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),o=v,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:_,dispose:p}}function ev(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,a=!1;function o(R,L,F,B,N){let z=!1;const O=l(R,B,F,L);r!==O&&(r=O,u(r.object)),z=d(R,B,F,N),z&&g(R,B,F,N),N!==null&&e.update(N,s.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,x(R,L,F,B),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return s.createVertexArray()}function u(R){return s.bindVertexArray(R)}function f(R){return s.deleteVertexArray(R)}function l(R,L,F,B){const N=B.wireframe===!0;let z=n[L.id];z===void 0&&(z={},n[L.id]=z);const O=R.isInstancedMesh===!0?R.id:0;let ee=z[O];ee===void 0&&(ee={},z[O]=ee);let Q=ee[F.id];Q===void 0&&(Q={},ee[F.id]=Q);let de=Q[N];return de===void 0&&(de=h(c()),Q[N]=de),de}function h(R){const L=[],F=[],B=[];for(let N=0;N<t;N++)L[N]=0,F[N]=0,B[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:B,object:R,attributes:{},index:null}}function d(R,L,F,B){const N=r.attributes,z=L.attributes;let O=0;const ee=F.getAttributes();for(const Q in ee)if(ee[Q].location>=0){const G=N[Q];let J=z[Q];if(J===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),G===void 0||G.attribute!==J||J&&G.data!==J.data)return!0;O++}return r.attributesNum!==O||r.index!==B}function g(R,L,F,B){const N={},z=L.attributes;let O=0;const ee=F.getAttributes();for(const Q in ee)if(ee[Q].location>=0){let G=z[Q];G===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(G=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(G=R.instanceColor));const J={};J.attribute=G,G&&G.data&&(J.data=G.data),N[Q]=J,O++}r.attributes=N,r.attributesNum=O,r.index=B}function _(){const R=r.newAttributes;for(let L=0,F=R.length;L<F;L++)R[L]=0}function m(R){p(R,0)}function p(R,L){const F=r.newAttributes,B=r.enabledAttributes,N=r.attributeDivisors;F[R]=1,B[R]===0&&(s.enableVertexAttribArray(R),B[R]=1),N[R]!==L&&(s.vertexAttribDivisor(R,L),N[R]=L)}function b(){const R=r.newAttributes,L=r.enabledAttributes;for(let F=0,B=L.length;F<B;F++)L[F]!==R[F]&&(s.disableVertexAttribArray(F),L[F]=0)}function v(R,L,F,B,N,z,O){O===!0?s.vertexAttribIPointer(R,L,F,N,z):s.vertexAttribPointer(R,L,F,B,N,z)}function x(R,L,F,B){_();const N=B.attributes,z=F.getAttributes(),O=L.defaultAttributeValues;for(const ee in z){const Q=z[ee];if(Q.location>=0){let de=N[ee];if(de===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const G=de.normalized,J=de.itemSize,ce=e.get(de);if(ce===void 0)continue;const ve=ce.buffer,Fe=ce.type,X=ce.bytesPerElement,le=Fe===s.INT||Fe===s.UNSIGNED_INT||de.gpuType===Zc;if(de.isInterleavedBufferAttribute){const ue=de.data,Ue=ue.stride,Ne=de.offset;if(ue.isInstancedInterleavedBuffer){for(let He=0;He<Q.locationSize;He++)p(Q.location+He,ue.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let He=0;He<Q.locationSize;He++)m(Q.location+He);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let He=0;He<Q.locationSize;He++)v(Q.location+He,J/Q.locationSize,Fe,G,Ue*X,(Ne+J/Q.locationSize*He)*X,le)}else{if(de.isInstancedBufferAttribute){for(let ue=0;ue<Q.locationSize;ue++)p(Q.location+ue,de.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ue=0;ue<Q.locationSize;ue++)m(Q.location+ue);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let ue=0;ue<Q.locationSize;ue++)v(Q.location+ue,J/Q.locationSize,Fe,G,J*X,J/Q.locationSize*ue*X,le)}}else if(O!==void 0){const G=O[ee];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(Q.location,G);break;case 3:s.vertexAttrib3fv(Q.location,G);break;case 4:s.vertexAttrib4fv(Q.location,G);break;default:s.vertexAttrib1fv(Q.location,G)}}}}b()}function T(){M();for(const R in n){const L=n[R];for(const F in L){const B=L[F];for(const N in B){const z=B[N];for(const O in z)f(z[O].object),delete z[O];delete B[N]}}delete n[R]}}function E(R){if(n[R.id]===void 0)return;const L=n[R.id];for(const F in L){const B=L[F];for(const N in B){const z=B[N];for(const O in z)f(z[O].object),delete z[O];delete B[N]}}delete n[R.id]}function A(R){for(const L in n){const F=n[L];for(const B in F){const N=F[B];if(N[R.id]===void 0)continue;const z=N[R.id];for(const O in z)f(z[O].object),delete z[O];delete N[R.id]}}}function y(R){for(const L in n){const F=n[L],B=R.isInstancedMesh===!0?R.id:0,N=F[B];if(N!==void 0){for(const z in N){const O=N[z];for(const ee in O)f(O[ee].object),delete O[ee];delete N[z]}delete F[B],Object.keys(F).length===0&&delete n[L]}}}function M(){I(),a=!0,r!==i&&(r=i,u(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:M,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function tv(s,e,t){let n;function i(u){n=u}function r(u,f){s.drawArrays(n,u,f),t.update(f,n,1)}function a(u,f,l){l!==0&&(s.drawArraysInstanced(n,u,f,l),t.update(f,n,l))}function o(u,f,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,l);let d=0;for(let g=0;g<l;g++)d+=f[g];t.update(d,n,1)}function c(u,f,l,h){if(l===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)a(u[g],f[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,u,0,f,0,h,0,l);let g=0;for(let _=0;_<l;_++)g+=f[_]*h[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function nv(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Dn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const y=A===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==bn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pn&&!y)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const f=c(u);f!==u&&(Pe("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const l=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:l,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:x,maxSamples:T,samples:E}}function iv(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ki,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,h){const d=l.length!==0||h||n!==0||i;return i=h,n=l.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,h){t=f(l,h,0)},this.setState=function(l,h,d){const g=l.clippingPlanes,_=l.clipIntersection,m=l.clipShadows,p=s.get(l);if(!i||g===null||g.length===0||r&&!m)r?f(null):u();else{const b=r?0:n,v=b*4;let x=p.clippingState||null;c.value=x,x=f(g,h,v,d);for(let T=0;T!==v;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(l,h,d,g){const _=l!==null?l.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==_;++v,x+=4)a.copy(l[v]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const zi=4,Qh=[.125,.215,.35,.446,.526,.582],ur=20,rv=256,Cs=new fa,ef=new Ve;let gl=null,_l=0,bl=0,xl=!1;const sv=new D;class tf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=sv}=r;gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gl,_l,bl),this._renderer.xr.enabled=xl,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:Mn,format:Dn,colorSpace:nn,depthBuffer:!1},i=nf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nf(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=av(r)),this._blurMaterial=lv(r,e,t),this._ggxMaterial=ov(r,e,t)}return i}_compileMaterial(e){const t=new pt(new Vt,e);this._renderer.compile(t,Cs)}_sceneToCubeUV(e,t,n,i,r){const c=new en(90,1,t,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,d=l.toneMapping;l.getClearColor(ef),l.toneMapping=ii,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new Gn,new Hn({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(ef),p=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(c.up.set(0,u[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[v],r.y,r.z)):x===1?(c.up.set(0,0,u[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[v],r.z)):(c.up.set(0,u[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[v]));const T=this._cubeSize;Br(i,x*T,v>2?T:0,T,T),l.setRenderTarget(i),p&&l.render(_,c),l.render(e,c)}l.toneMapping=d,l.autoClear=h,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===br||e.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rf());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Br(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Cs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,u=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),l=Math.sqrt(u*u-f*f),h=0+u*1.25,d=l*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-zi?n-g+zi:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=g-t,Br(r,m,p,3*_,2*_),i.setRenderTarget(r),i.render(o,Cs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Br(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(o,Cs)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");const f=3,l=this._lodMeshes[i];l.material=u;const h=u.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ur-1),_=r/g,m=isFinite(r)?1+Math.floor(f*_):ur;m>ur&&Pe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ur}`);const p=[];let b=0;for(let A=0;A<ur;++A){const y=A/_,M=Math.exp(-y*y/2);p.push(M),A===0?b+=M:A<m&&(b+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const x=this._sizeLods[i],T=3*x*(i>v-zi?i-v+zi:0),E=4*(this._cubeSize-x);Br(t,T,E,3*x,2*x),c.setRenderTarget(t),c.render(l,Cs)}}function av(s){const e=[],t=[],n=[];let i=s;const r=s-zi+1+Qh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-zi?c=Qh[a-s+zi-1]:a===0&&(c=0),t.push(c);const u=1/(o-2),f=-u,l=1+u,h=[f,f,l,f,l,l,f,f,l,l,f,l],d=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*d),v=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,y=E>2?0:-1,M=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];b.set(M,_*g*E),v.set(h,m*g*E);const I=[E,E,E,E,E,E];x.set(I,p*g*E)}const T=new Vt;T.setAttribute("position",new Gt(b,_)),T.setAttribute("uv",new Gt(v,m)),T.setAttribute("faceIndex",new Gt(x,p)),n.push(new pt(T,null)),i>zi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function nf(s,e,t){const n=new on(s,e,t);return n.texture.mapping=Ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ov(s,e,t){return new Yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Co(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function lv(s,e,t){const n=new Float32Array(ur),i=new D(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function rf(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function sf(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Co(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class tp extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Od(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Gn(5,5,5),r=new Yt({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:ni});r.uniforms.tEquirect.value=t;const a=new pt(i,r),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=It),new nb(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function cv(s){let e=new WeakMap,t=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Uo||d===ko)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new tp(g.height);return _.fromEquirectangularTexture(s,h),e.set(h,_),h.addEventListener("dispose",u),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===Uo||d===ko,_=d===br||d===ts;if(g||_){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new tf(s)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const b=h.image;return g&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new tf(s)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function o(h,d){return d===Uo?h.mapping=br:d===ko&&(h.mapping=ts),h}function c(h){let d=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&d++;return d===g}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(h){const d=h.target;d.removeEventListener("dispose",f);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function l(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:l}}function uv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&fo("WebGLRenderer: "+n+" extension not supported."),i}}}function hv(s,e,t,n){const i={},r=new WeakMap;function a(l){const h=l.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(l,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function c(l){const h=l.attributes;for(const d in h)e.update(h[d],s.ARRAY_BUFFER)}function u(l){const h=[],d=l.index,g=l.attributes.position;let _=0;if(g===void 0)return;if(d!==null){const b=d.array;_=d.version;for(let v=0,x=b.length;v<x;v+=3){const T=b[v+0],E=b[v+1],A=b[v+2];h.push(T,E,E,A,A,T)}}else{const b=g.array;_=g.version;for(let v=0,x=b.length/3-1;v<x;v+=3){const T=v+0,E=v+1,A=v+2;h.push(T,E,E,A,A,T)}}const m=new(g.count>=65535?Dd:Pd)(h,1);m.version=_;const p=r.get(l);p&&e.remove(p),r.set(l,m)}function f(l){const h=r.get(l);if(h){const d=l.index;d!==null&&h.version<d.version&&u(l)}else u(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:f}}function fv(s,e,t){let n;function i(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,d){s.drawElements(n,d,r,h*a),t.update(d,n,1)}function u(h,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,h*a,g),t.update(d,n,g))}function f(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function l(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)u(h[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*_[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=l}function dv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function pv(s,e,t){const n=new WeakMap,i=new gt;function r(a,o,c){const u=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==l){let I=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",I)};var d=I;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let T=o.attributes.position.count*x,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*E*4*l),y=new Rd(A,T,E,l);y.type=Pn,y.needsUpdate=!0;const M=x*4;for(let R=0;R<l;R++){const L=p[R],F=b[R],B=v[R],N=T*E*4*R;for(let z=0;z<L.count;z++){const O=z*M;g===!0&&(i.fromBufferAttribute(L,z),A[N+O+0]=i.x,A[N+O+1]=i.y,A[N+O+2]=i.z,A[N+O+3]=0),_===!0&&(i.fromBufferAttribute(F,z),A[N+O+4]=i.x,A[N+O+5]=i.y,A[N+O+6]=i.z,A[N+O+7]=0),m===!0&&(i.fromBufferAttribute(B,z),A[N+O+8]=i.x,A[N+O+9]=i.y,A[N+O+10]=i.z,A[N+O+11]=B.itemSize===4?i.w:1)}}h={count:l,texture:y,size:new ne(T,E)},n.set(o,h),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",u)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function mv(s,e,t,n,i){let r=new WeakMap;function a(u){const f=i.render.frame,l=u.geometry,h=e.get(u,l);if(r.get(h)!==f&&(e.update(h),r.set(h,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==f&&(t.update(u.instanceMatrix,s.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,s.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const d=u.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return h}function o(){r=new WeakMap}function c(u){const f=u.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const gv={[hd]:"LINEAR_TONE_MAPPING",[fd]:"REINHARD_TONE_MAPPING",[dd]:"CINEON_TONE_MAPPING",[Jc]:"ACES_FILMIC_TONE_MAPPING",[md]:"AGX_TONE_MAPPING",[gd]:"NEUTRAL_TONE_MAPPING",[pd]:"CUSTOM_TONE_MAPPING"};function _v(s,e,t,n,i){const r=new on(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new on(e,t,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),o=new Vt;o.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new bt([0,2,0,0,2,0],2));const c=new N_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new pt(o,c),f=new fa(-1,1,1,-1,0,1);let l=null,h=null,d=!1,g,_=null,m=[],p=!1;this.setSize=function(b,v){r.setSize(b,v),a.setSize(b,v);for(let x=0;x<m.length;x++){const T=m[x];T.setSize&&T.setSize(b,v)}},this.setEffects=function(b){m=b,p=m.length>0&&m[0].isRenderPass===!0;const v=r.width,x=r.height;for(let T=0;T<m.length;T++){const E=m[T];E.setSize&&E.setSize(v,x)}},this.begin=function(b,v){if(d||b.toneMapping===ii&&m.length===0)return!1;if(_=v,v!==null){const x=v.width,T=v.height;(r.width!==x||r.height!==T)&&this.setSize(x,T)}return p===!1&&b.setRenderTarget(r),g=b.toneMapping,b.toneMapping=ii,!0},this.hasRenderPass=function(){return p},this.end=function(b,v){b.toneMapping=g,d=!0;let x=r,T=a;for(let E=0;E<m.length;E++){const A=m[E];if(A.enabled!==!1&&(A.render(b,T,x,v),A.needsSwap!==!1)){const y=x;x=T,T=y}}if(l!==b.outputColorSpace||h!==b.toneMapping){l=b.outputColorSpace,h=b.toneMapping,c.defines={},Qe.getTransfer(l)===it&&(c.defines.SRGB_TRANSFER="");const E=gv[h];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(_),b.render(u,f),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const np=new Bt,Dc=new ta(1,1),ip=new Rd,rp=new Ag,sp=new Od,af=[],of=[],lf=new Float32Array(16),cf=new Float32Array(9),uf=new Float32Array(4);function ys(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=af[i];if(r===void 0&&(r=new Float32Array(i),af[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Nt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Po(s,e){let t=of[e];t===void 0&&(t=new Int32Array(e),of[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function bv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function xv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Nt(t,e)}}function vv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Nt(t,e)}}function yv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Nt(t,e)}}function Mv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,n))return;uf.set(n),s.uniformMatrix2fv(this.addr,!1,uf),Nt(t,n)}}function Sv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,n))return;cf.set(n),s.uniformMatrix3fv(this.addr,!1,cf),Nt(t,n)}}function Tv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,n))return;lf.set(n),s.uniformMatrix4fv(this.addr,!1,lf),Nt(t,n)}}function Ev(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function wv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Nt(t,e)}}function Av(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Nt(t,e)}}function Rv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Nt(t,e)}}function Cv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Pv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Nt(t,e)}}function Dv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Nt(t,e)}}function Lv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Nt(t,e)}}function Iv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Dc.compareFunction=t.isReversedDepthBuffer()?su:ru,r=Dc):r=np,t.setTexture2D(e||r,i)}function Fv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rp,i)}function Nv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sp,i)}function Ov(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ip,i)}function Uv(s){switch(s){case 5126:return bv;case 35664:return xv;case 35665:return vv;case 35666:return yv;case 35674:return Mv;case 35675:return Sv;case 35676:return Tv;case 5124:case 35670:return Ev;case 35667:case 35671:return wv;case 35668:case 35672:return Av;case 35669:case 35673:return Rv;case 5125:return Cv;case 36294:return Pv;case 36295:return Dv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Ov}}function kv(s,e){s.uniform1fv(this.addr,e)}function Bv(s,e){const t=ys(e,this.size,2);s.uniform2fv(this.addr,t)}function zv(s,e){const t=ys(e,this.size,3);s.uniform3fv(this.addr,t)}function Vv(s,e){const t=ys(e,this.size,4);s.uniform4fv(this.addr,t)}function Hv(s,e){const t=ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Gv(s,e){const t=ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Wv(s,e){const t=ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function jv(s,e){s.uniform1iv(this.addr,e)}function qv(s,e){s.uniform2iv(this.addr,e)}function Xv(s,e){s.uniform3iv(this.addr,e)}function Kv(s,e){s.uniform4iv(this.addr,e)}function Yv(s,e){s.uniform1uiv(this.addr,e)}function Jv(s,e){s.uniform2uiv(this.addr,e)}function Zv(s,e){s.uniform3uiv(this.addr,e)}function $v(s,e){s.uniform4uiv(this.addr,e)}function Qv(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Dc:a=np;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function ey(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||rp,r[a])}function ty(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||sp,r[a])}function ny(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ip,r[a])}function iy(s){switch(s){case 5126:return kv;case 35664:return Bv;case 35665:return zv;case 35666:return Vv;case 35674:return Hv;case 35675:return Gv;case 35676:return Wv;case 5124:case 35670:return jv;case 35667:case 35671:return qv;case 35668:case 35672:return Xv;case 35669:case 35673:return Kv;case 5125:return Yv;case 36294:return Jv;case 36295:return Zv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Qv;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ny}}class ry{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uv(t.type)}}class sy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iy(t.type)}}class ay{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const vl=/(\w+)(\])?(\[|\.)?/g;function hf(s,e){s.seq.push(e),s.map[e.id]=e}function oy(s,e,t){const n=s.name,i=n.length;for(vl.lastIndex=0;;){const r=vl.exec(n),a=vl.lastIndex;let o=r[1];const c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===i){hf(t,u===void 0?new ry(o,s,e):new sy(o,s,e));break}else{let l=t.map[o];l===void 0&&(l=new ay(o),hf(t,l)),t=l}}}class ro{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);oy(o,c,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ff(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const ly=37297;let cy=0;function uy(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const df=new Xe;function hy(s){Qe._getMatrix(df,Qe.workingColorSpace,s);const e=`mat3( ${df.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(s)){case uo:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function pf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+uy(s.getShaderSource(e),o)}else return r}function fy(s,e){const t=hy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const dy={[hd]:"Linear",[fd]:"Reinhard",[dd]:"Cineon",[Jc]:"ACESFilmic",[md]:"AgX",[gd]:"Neutral",[pd]:"Custom"};function py(s,e){const t=dy[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xa=new D;function my(){Qe.getLuminanceCoefficients(Xa);const s=Xa.x.toFixed(4),e=Xa.y.toFixed(4),t=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function _y(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function by(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Us(s){return s!==""}function mf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(s){return s.replace(xy,yy)}const vy=new Map;function yy(s,e){let t=Ye[e];if(t===void 0){const n=vy.get(e);if(n!==void 0)t=Ye[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lc(t)}const My=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(s){return s.replace(My,Sy)}function Sy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Ty={[$a]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function Ey(s){return Ty[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wy={[br]:"ENVMAP_TYPE_CUBE",[ts]:"ENVMAP_TYPE_CUBE",[Ao]:"ENVMAP_TYPE_CUBE_UV"};function Ay(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":wy[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ry={[ts]:"ENVMAP_MODE_REFRACTION"};function Cy(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ry[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Py={[ud]:"ENVMAP_BLENDING_MULTIPLY",[Hm]:"ENVMAP_BLENDING_MIX",[Gm]:"ENVMAP_BLENDING_ADD"};function Dy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Py[s.combine]||"ENVMAP_BLENDING_NONE"}function Ly(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Iy(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Ey(t),u=Ay(t),f=Cy(t),l=Dy(t),h=Ly(t),d=gy(t),g=_y(r),_=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Us).join(`
`),p.length>0&&(p+=`
`)):(m=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),p=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+l:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ii?py("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,fy("linearToOutputTexel",t.outputColorSpace),my(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),a=Lc(a),a=mf(a,t),a=gf(a,t),o=Lc(o),o=mf(o,t),o=gf(o,t),a=_f(a),o=_f(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=b+m+a,x=b+p+o,T=ff(i,i.VERTEX_SHADER,v),E=ff(i,i.FRAGMENT_SHADER,x);i.attachShader(_,T),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(R){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(T)||"",B=i.getShaderInfoLog(E)||"",N=L.trim(),z=F.trim(),O=B.trim();let ee=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,E);else{const de=pf(i,T,"vertex"),G=pf(i,E,"fragment");ze("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+de+`
`+G)}else N!==""?Pe("WebGLProgram: Program Info Log:",N):(z===""||O==="")&&(Q=!1);Q&&(R.diagnostics={runnable:ee,programLog:N,vertexShader:{log:z,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(T),i.deleteShader(E),y=new ro(i,_),M=by(i,_)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(_,ly)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}let Fy=0;class Ny{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Oy(e),t.set(e,n)),n}}class Oy{constructor(e){this.id=Fy++,this.code=e,this.usedTimes=0}}function Uy(s,e,t,n,i,r){const a=new lu,o=new Ny,c=new Set,u=[],f=new Map,l=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,M,I,R,L){const F=R.fog,B=L.geometry,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=e.get(y.envMap||N,z),ee=O&&O.mapping===Ao?O.image.height:null,Q=d[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&Pe("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const de=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,G=de!==void 0?de.length:0;let J=0;B.morphAttributes.position!==void 0&&(J=1),B.morphAttributes.normal!==void 0&&(J=2),B.morphAttributes.color!==void 0&&(J=3);let ce,ve,Fe,X;if(Q){const nt=Zn[Q];ce=nt.vertexShader,ve=nt.fragmentShader}else ce=y.vertexShader,ve=y.fragmentShader,o.update(y),Fe=o.getVertexShaderID(y),X=o.getFragmentShaderID(y);const le=s.getRenderTarget(),ue=s.state.buffers.depth.getReversed(),Ue=L.isInstancedMesh===!0,Ne=L.isBatchedMesh===!0,He=!!y.map,at=!!y.matcap,je=!!O,$=!!y.aoMap,re=!!y.lightMap,te=!!y.bumpMap,me=!!y.normalMap,P=!!y.displacementMap,Oe=!!y.emissiveMap,xe=!!y.metalnessMap,ke=!!y.roughnessMap,he=y.anisotropy>0,C=y.clearcoat>0,S=y.dispersion>0,k=y.iridescence>0,q=y.sheen>0,Z=y.transmission>0,K=he&&!!y.anisotropyMap,Te=C&&!!y.clearcoatMap,fe=C&&!!y.clearcoatNormalMap,Le=C&&!!y.clearcoatRoughnessMap,Be=k&&!!y.iridescenceMap,ie=k&&!!y.iridescenceThicknessMap,ae=q&&!!y.sheenColorMap,Ee=q&&!!y.sheenRoughnessMap,Ae=!!y.specularMap,ye=!!y.specularColorMap,Je=!!y.specularIntensityMap,U=Z&&!!y.transmissionMap,pe=Z&&!!y.thicknessMap,oe=!!y.gradientMap,Se=!!y.alphaMap,se=y.alphaTest>0,Y=!!y.alphaHash,we=!!y.extensions;let We=ii;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(We=s.toneMapping);const dt={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:ce,fragmentShader:ve,defines:y.defines,customVertexShaderID:Fe,customFragmentShaderID:X,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Ne,batchingColor:Ne&&L._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&L.instanceColor!==null,instancingMorph:Ue&&L.morphTexture!==null,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:nn,alphaToCoverage:!!y.alphaToCoverage,map:He,matcap:at,envMap:je,envMapMode:je&&O.mapping,envMapCubeUVHeight:ee,aoMap:$,lightMap:re,bumpMap:te,normalMap:me,displacementMap:P,emissiveMap:Oe,normalMapObjectSpace:me&&y.normalMapType===Km,normalMapTangentSpace:me&&y.normalMapType===wd,metalnessMap:xe,roughnessMap:ke,anisotropy:he,anisotropyMap:K,clearcoat:C,clearcoatMap:Te,clearcoatNormalMap:fe,clearcoatRoughnessMap:Le,dispersion:S,iridescence:k,iridescenceMap:Be,iridescenceThicknessMap:ie,sheen:q,sheenColorMap:ae,sheenRoughnessMap:Ee,specularMap:Ae,specularColorMap:ye,specularIntensityMap:Je,transmission:Z,transmissionMap:U,thicknessMap:pe,gradientMap:oe,opaque:y.transparent===!1&&y.blending===Kr&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:se,alphaHash:Y,combine:y.combine,mapUv:He&&g(y.map.channel),aoMapUv:$&&g(y.aoMap.channel),lightMapUv:re&&g(y.lightMap.channel),bumpMapUv:te&&g(y.bumpMap.channel),normalMapUv:me&&g(y.normalMap.channel),displacementMapUv:P&&g(y.displacementMap.channel),emissiveMapUv:Oe&&g(y.emissiveMap.channel),metalnessMapUv:xe&&g(y.metalnessMap.channel),roughnessMapUv:ke&&g(y.roughnessMap.channel),anisotropyMapUv:K&&g(y.anisotropyMap.channel),clearcoatMapUv:Te&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(y.sheenRoughnessMap.channel),specularMapUv:Ae&&g(y.specularMap.channel),specularColorMapUv:ye&&g(y.specularColorMap.channel),specularIntensityMapUv:Je&&g(y.specularIntensityMap.channel),transmissionMapUv:U&&g(y.transmissionMap.channel),thicknessMapUv:pe&&g(y.thicknessMap.channel),alphaMapUv:Se&&g(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(me||he),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(He||Se),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&me===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:l,reversedDepthBuffer:ue,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:J,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:We,decodeVideoTexture:He&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:Oe&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_n,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:we&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&y.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function m(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)M.push(I),M.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(p(M,y),b(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function p(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const M=d[y.type];let I;if(M){const R=Zn[M];I=bo.clone(R.uniforms)}else I=y.uniforms;return I}function x(y,M){let I=f.get(M);return I!==void 0?++I.usedTimes:(I=new Iy(s,M,y,i),u.push(I),f.set(M,I)),I}function T(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),f.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:v,acquireProgram:x,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:A}}function ky(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function By(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function xf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function vf(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,_,m,p){let b=s[e];return b===void 0?(b={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},s[e]=b):(b.id=h.id,b.object=h,b.geometry=d,b.material=g,b.materialVariant=a(h),b.groupOrder=_,b.renderOrder=h.renderOrder,b.z=m,b.group=p),e++,b}function c(h,d,g,_,m,p){const b=o(h,d,g,_,m,p);g.transmission>0?n.push(b):g.transparent===!0?i.push(b):t.push(b)}function u(h,d,g,_,m,p){const b=o(h,d,g,_,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?i.unshift(b):t.unshift(b)}function f(h,d){t.length>1&&t.sort(h||By),n.length>1&&n.sort(d||xf),i.length>1&&i.sort(d||xf)}function l(){for(let h=e,d=s.length;h<d;h++){const g=s[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:u,finish:l,sort:f}}function zy(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new vf,s.set(n,[a])):i>=r.length?(a=new vf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Vy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ve};break;case"SpotLight":t={position:new D,direction:new D,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Hy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Gy=0;function Wy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function jy(s){const e=new Vy,t=Hy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new D);const i=new D,r=new Ge,a=new Ge;function o(u){let f=0,l=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,b=0,v=0,x=0,T=0,E=0,A=0;u.sort(Wy);for(let M=0,I=u.length;M<I;M++){const R=u[M],L=R.color,F=R.intensity,B=R.distance;let N=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ns?N=R.shadow.map.texture:N=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)f+=L.r*F,l+=L.g*F,h+=L.b*F;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],F);A++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const O=R.shadow,ee=t.get(R);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,n.directionalShadow[d]=ee,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=R.shadow.matrix,b++}n.directional[d]=z,d++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(L).multiplyScalar(F),z.distance=B,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[_]=z;const O=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,O.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=O.matrix,R.castShadow){const ee=t.get(R);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,n.spotShadow[_]=ee,n.spotShadowMap[_]=N,x++}_++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(L).multiplyScalar(F),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=z,m++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const O=R.shadow,ee=t.get(R);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,ee.shadowCameraNear=O.camera.near,ee.shadowCameraFar=O.camera.far,n.pointShadow[g]=ee,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=R.shadow.matrix,v++}n.point[g]=z,g++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(F),z.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=l,n.ambient[2]=h;const y=n.hash;(y.directionalLength!==d||y.pointLength!==g||y.spotLength!==_||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==b||y.numPointShadows!==v||y.numSpotShadows!==x||y.numSpotMaps!==T||y.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,y.directionalLength=d,y.pointLength=g,y.spotLength=_,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=b,y.numPointShadows=v,y.numSpotShadows=x,y.numSpotMaps=T,y.numLightProbes=A,n.version=Gy++)}function c(u,f){let l=0,h=0,d=0,g=0,_=0;const m=f.matrixWorldInverse;for(let p=0,b=u.length;p<b;p++){const v=u[p];if(v.isDirectionalLight){const x=n.directional[l];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),l++}else if(v.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function yf(s){const e=new jy(s),t=[],n=[];function i(f){u.camera=f,t.length=0,n.length=0}function r(f){t.push(f)}function a(f){n.push(f)}function o(){e.setup(t)}function c(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function qy(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new yf(s),e.set(i,[o])):r>=a.length?(o=new yf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ky=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Yy=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Jy=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Mf=new Ge,Ps=new D,yl=new D;function Zy(s,e,t){let n=new du;const i=new ne,r=new ne,a=new gt,o=new O_,c=new U_,u={},f=t.maxTextureSize,l={[Ei]:an,[an]:Ei,[_n]:_n},h=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:Xy,fragmentShader:Ky}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$a;let p=this.type;this.render=function(E,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===cd&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$a);const M=s.getRenderTarget(),I=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),L=s.state;L.setBlending(ni),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=p!==this.type;F&&A.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(N=>N.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,N=E.length;B<N;B++){const z=E[B],O=z.shadow;if(O===void 0){Pe("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const ee=O.getFrameExtents();i.multiply(ee),r.copy(O.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(r.x=Math.floor(f/ee.x),i.x=r.x*ee.x,O.mapSize.x=r.x),i.y>f&&(r.y=Math.floor(f/ee.y),i.y=r.y*ee.y,O.mapSize.y=r.y));const Q=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=Q,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Fs){if(z.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new on(i.x,i.y,{format:ns,type:Mn,minFilter:It,magFilter:It,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new ta(i.x,i.y,Pn),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=wi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Lt,O.map.depthTexture.magFilter=Lt}else z.isPointLight?(O.map=new tp(i.x),O.map.depthTexture=new $g(i.x,si)):(O.map=new on(i.x,i.y),O.map.depthTexture=new ta(i.x,i.y,si)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=wi,this.type===$a?(O.map.depthTexture.compareFunction=Q?su:ru,O.map.depthTexture.minFilter=It,O.map.depthTexture.magFilter=It):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Lt,O.map.depthTexture.magFilter=Lt);O.camera.updateProjectionMatrix()}const de=O.map.isWebGLCubeRenderTarget?6:1;for(let G=0;G<de;G++){if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,G),s.clear();else{G===0&&(s.setRenderTarget(O.map),s.clear());const J=O.getViewport(G);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),L.viewport(a)}if(z.isPointLight){const J=O.camera,ce=O.matrix,ve=z.distance||J.far;ve!==J.far&&(J.far=ve,J.updateProjectionMatrix()),Ps.setFromMatrixPosition(z.matrixWorld),J.position.copy(Ps),yl.copy(J.position),yl.add(Yy[G]),J.up.copy(Jy[G]),J.lookAt(yl),J.updateMatrixWorld(),ce.makeTranslation(-Ps.x,-Ps.y,-Ps.z),Mf.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Mf,J.coordinateSystem,J.reversedDepth)}else O.updateMatrices(z);n=O.getFrustum(),x(A,y,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===Fs&&b(O,y),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,I,R)};function b(E,A){const y=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new on(i.x,i.y,{format:ns,type:Mn})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,y,h,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,y,d,_,null)}function v(E,A,y,M){let I=null;const R=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)I=R;else if(I=y.isPointLight===!0?c:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=I.uuid,F=A.uuid;let B=u[L];B===void 0&&(B={},u[L]=B);let N=B[F];N===void 0&&(N=I.clone(),B[F]=N,A.addEventListener("dispose",T)),I=N}if(I.visible=A.visible,I.wireframe=A.wireframe,M===Fs?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:l[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const L=s.properties.get(I);L.light=y}return I}function x(E,A,y,M,I){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Fs)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const F=e.update(E),B=E.material;if(Array.isArray(B)){const N=F.groups;for(let z=0,O=N.length;z<O;z++){const ee=N[z],Q=B[ee.materialIndex];if(Q&&Q.visible){const de=v(E,Q,M,I);E.onBeforeShadow(s,E,A,y,F,de,ee),s.renderBufferDirect(y,null,F,de,E,ee),E.onAfterShadow(s,E,A,y,F,de,ee)}}}else if(B.visible){const N=v(E,B,M,I);E.onBeforeShadow(s,E,A,y,F,N,null),s.renderBufferDirect(y,null,F,N,E,null),E.onAfterShadow(s,E,A,y,F,N,null)}}const L=E.children;for(let F=0,B=L.length;F<B;F++)x(L[F],A,y,M,I)}function T(E){E.target.removeEventListener("dispose",T);for(const y in u){const M=u[y],I=E.target.uuid;I in M&&(M[I].dispose(),delete M[I])}}}function $y(s,e){function t(){let U=!1;const pe=new gt;let oe=null;const Se=new gt(0,0,0,0);return{setMask:function(se){oe!==se&&!U&&(s.colorMask(se,se,se,se),oe=se)},setLocked:function(se){U=se},setClear:function(se,Y,we,We,dt){dt===!0&&(se*=We,Y*=We,we*=We),pe.set(se,Y,we,We),Se.equals(pe)===!1&&(s.clearColor(se,Y,we,We),Se.copy(pe))},reset:function(){U=!1,oe=null,Se.set(-1,0,0,0)}}}function n(){let U=!1,pe=!1,oe=null,Se=null,se=null;return{setReversed:function(Y){if(pe!==Y){const we=e.get("EXT_clip_control");Y?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),pe=Y;const We=se;se=null,this.setClear(We)}},getReversed:function(){return pe},setTest:function(Y){Y?le(s.DEPTH_TEST):ue(s.DEPTH_TEST)},setMask:function(Y){oe!==Y&&!U&&(s.depthMask(Y),oe=Y)},setFunc:function(Y){if(pe&&(Y=sg[Y]),Se!==Y){switch(Y){case kl:s.depthFunc(s.NEVER);break;case Bl:s.depthFunc(s.ALWAYS);break;case zl:s.depthFunc(s.LESS);break;case es:s.depthFunc(s.LEQUAL);break;case Vl:s.depthFunc(s.EQUAL);break;case Hl:s.depthFunc(s.GEQUAL);break;case Gl:s.depthFunc(s.GREATER);break;case Wl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Se=Y}},setLocked:function(Y){U=Y},setClear:function(Y){se!==Y&&(se=Y,pe&&(Y=1-Y),s.clearDepth(Y))},reset:function(){U=!1,oe=null,Se=null,se=null,pe=!1}}}function i(){let U=!1,pe=null,oe=null,Se=null,se=null,Y=null,we=null,We=null,dt=null;return{setTest:function(nt){U||(nt?le(s.STENCIL_TEST):ue(s.STENCIL_TEST))},setMask:function(nt){pe!==nt&&!U&&(s.stencilMask(nt),pe=nt)},setFunc:function(nt,hi,fi){(oe!==nt||Se!==hi||se!==fi)&&(s.stencilFunc(nt,hi,fi),oe=nt,Se=hi,se=fi)},setOp:function(nt,hi,fi){(Y!==nt||we!==hi||We!==fi)&&(s.stencilOp(nt,hi,fi),Y=nt,we=hi,We=fi)},setLocked:function(nt){U=nt},setClear:function(nt){dt!==nt&&(s.clearStencil(nt),dt=nt)},reset:function(){U=!1,pe=null,oe=null,Se=null,se=null,Y=null,we=null,We=null,dt=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,u=new WeakMap;let f={},l={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,v=null,x=null,T=null,E=null,A=new Ve(0,0,0),y=0,M=!1,I=null,R=null,L=null,F=null,B=null;const N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,O=0;const ee=s.getParameter(s.VERSION);ee.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(ee)[1]),z=O>=1):ee.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),z=O>=2);let Q=null,de={};const G=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),ce=new gt().fromArray(G),ve=new gt().fromArray(J);function Fe(U,pe,oe,Se){const se=new Uint8Array(4),Y=s.createTexture();s.bindTexture(U,Y),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let we=0;we<oe;we++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,se):s.texImage2D(pe+we,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,se);return Y}const X={};X[s.TEXTURE_2D]=Fe(s.TEXTURE_2D,s.TEXTURE_2D,1),X[s.TEXTURE_CUBE_MAP]=Fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[s.TEXTURE_2D_ARRAY]=Fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),X[s.TEXTURE_3D]=Fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(s.DEPTH_TEST),a.setFunc(es),te(!1),me($u),le(s.CULL_FACE),$(ni);function le(U){f[U]!==!0&&(s.enable(U),f[U]=!0)}function ue(U){f[U]!==!1&&(s.disable(U),f[U]=!1)}function Ue(U,pe){return l[U]!==pe?(s.bindFramebuffer(U,pe),l[U]=pe,U===s.DRAW_FRAMEBUFFER&&(l[s.FRAMEBUFFER]=pe),U===s.FRAMEBUFFER&&(l[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ne(U,pe){let oe=d,Se=!1;if(U){oe=h.get(pe),oe===void 0&&(oe=[],h.set(pe,oe));const se=U.textures;if(oe.length!==se.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Y=0,we=se.length;Y<we;Y++)oe[Y]=s.COLOR_ATTACHMENT0+Y;oe.length=se.length,Se=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,Se=!0);Se&&s.drawBuffers(oe)}function He(U){return g!==U?(s.useProgram(U),g=U,!0):!1}const at={[cr]:s.FUNC_ADD,[Em]:s.FUNC_SUBTRACT,[wm]:s.FUNC_REVERSE_SUBTRACT};at[Am]=s.MIN,at[Rm]=s.MAX;const je={[Cm]:s.ZERO,[Pm]:s.ONE,[Dm]:s.SRC_COLOR,[Ol]:s.SRC_ALPHA,[Um]:s.SRC_ALPHA_SATURATE,[Nm]:s.DST_COLOR,[Im]:s.DST_ALPHA,[Lm]:s.ONE_MINUS_SRC_COLOR,[Ul]:s.ONE_MINUS_SRC_ALPHA,[Om]:s.ONE_MINUS_DST_COLOR,[Fm]:s.ONE_MINUS_DST_ALPHA,[km]:s.CONSTANT_COLOR,[Bm]:s.ONE_MINUS_CONSTANT_COLOR,[zm]:s.CONSTANT_ALPHA,[Vm]:s.ONE_MINUS_CONSTANT_ALPHA};function $(U,pe,oe,Se,se,Y,we,We,dt,nt){if(U===ni){_===!0&&(ue(s.BLEND),_=!1);return}if(_===!1&&(le(s.BLEND),_=!0),U!==Tm){if(U!==m||nt!==M){if((p!==cr||x!==cr)&&(s.blendEquation(s.FUNC_ADD),p=cr,x=cr),nt)switch(U){case Kr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nl:s.blendFunc(s.ONE,s.ONE);break;case Qu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ze("WebGLState: Invalid blending: ",U);break}else switch(U){case Kr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qu:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",U);break}b=null,v=null,T=null,E=null,A.set(0,0,0),y=0,m=U,M=nt}return}se=se||pe,Y=Y||oe,we=we||Se,(pe!==p||se!==x)&&(s.blendEquationSeparate(at[pe],at[se]),p=pe,x=se),(oe!==b||Se!==v||Y!==T||we!==E)&&(s.blendFuncSeparate(je[oe],je[Se],je[Y],je[we]),b=oe,v=Se,T=Y,E=we),(We.equals(A)===!1||dt!==y)&&(s.blendColor(We.r,We.g,We.b,dt),A.copy(We),y=dt),m=U,M=!1}function re(U,pe){U.side===_n?ue(s.CULL_FACE):le(s.CULL_FACE);let oe=U.side===an;pe&&(oe=!oe),te(oe),U.blending===Kr&&U.transparent===!1?$(ni):$(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Se=U.stencilWrite;o.setTest(Se),Se&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Oe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(U){I!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),I=U)}function me(U){U!==Mm?(le(s.CULL_FACE),U!==R&&(U===$u?s.cullFace(s.BACK):U===Sm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ue(s.CULL_FACE),R=U}function P(U){U!==L&&(z&&s.lineWidth(U),L=U)}function Oe(U,pe,oe){U?(le(s.POLYGON_OFFSET_FILL),(F!==pe||B!==oe)&&(F=pe,B=oe,a.getReversed()&&(pe=-pe),s.polygonOffset(pe,oe))):ue(s.POLYGON_OFFSET_FILL)}function xe(U){U?le(s.SCISSOR_TEST):ue(s.SCISSOR_TEST)}function ke(U){U===void 0&&(U=s.TEXTURE0+N-1),Q!==U&&(s.activeTexture(U),Q=U)}function he(U,pe,oe){oe===void 0&&(Q===null?oe=s.TEXTURE0+N-1:oe=Q);let Se=de[oe];Se===void 0&&(Se={type:void 0,texture:void 0},de[oe]=Se),(Se.type!==U||Se.texture!==pe)&&(Q!==oe&&(s.activeTexture(oe),Q=oe),s.bindTexture(U,pe||X[U]),Se.type=U,Se.texture=pe)}function C(){const U=de[Q];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(U){ze("WebGLState:",U)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(U){ze("WebGLState:",U)}}function q(){try{s.texSubImage2D(...arguments)}catch(U){ze("WebGLState:",U)}}function Z(){try{s.texSubImage3D(...arguments)}catch(U){ze("WebGLState:",U)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(U){ze("WebGLState:",U)}}function Te(){try{s.compressedTexSubImage3D(...arguments)}catch(U){ze("WebGLState:",U)}}function fe(){try{s.texStorage2D(...arguments)}catch(U){ze("WebGLState:",U)}}function Le(){try{s.texStorage3D(...arguments)}catch(U){ze("WebGLState:",U)}}function Be(){try{s.texImage2D(...arguments)}catch(U){ze("WebGLState:",U)}}function ie(){try{s.texImage3D(...arguments)}catch(U){ze("WebGLState:",U)}}function ae(U){ce.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ce.copy(U))}function Ee(U){ve.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),ve.copy(U))}function Ae(U,pe){let oe=u.get(pe);oe===void 0&&(oe=new WeakMap,u.set(pe,oe));let Se=oe.get(U);Se===void 0&&(Se=s.getUniformBlockIndex(pe,U.name),oe.set(U,Se))}function ye(U,pe){const Se=u.get(pe).get(U);c.get(pe)!==Se&&(s.uniformBlockBinding(pe,Se,U.__bindingPointIndex),c.set(pe,Se))}function Je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Q=null,de={},l={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,v=null,x=null,T=null,E=null,A=new Ve(0,0,0),y=0,M=!1,I=null,R=null,L=null,F=null,B=null,ce.set(0,0,s.canvas.width,s.canvas.height),ve.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:ue,bindFramebuffer:Ue,drawBuffers:Ne,useProgram:He,setBlending:$,setMaterial:re,setFlipSided:te,setCullFace:me,setLineWidth:P,setPolygonOffset:Oe,setScissorTest:xe,activeTexture:ke,bindTexture:he,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:Be,texImage3D:ie,updateUBOMapping:Ae,uniformBlockBinding:ye,texStorage2D:fe,texStorage3D:Le,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:K,compressedTexSubImage3D:Te,scissor:ae,viewport:Ee,reset:Je}}function Qy(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ne,f=new WeakMap;let l;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return d?new OffscreenCanvas(C,S):ea("canvas")}function _(C,S,k){let q=1;const Z=he(C);if((Z.width>k||Z.height>k)&&(q=k/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(q*Z.width),Te=Math.floor(q*Z.height);l===void 0&&(l=g(K,Te));const fe=S?g(K,Te):l;return fe.width=K,fe.height=Te,fe.getContext("2d").drawImage(C,0,0,K,Te),Pe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+Te+")."),fe}else return"data"in C&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(C,S,k,q,Z=!1){if(C!==null){if(s[C]!==void 0)return s[C];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=S;if(S===s.RED&&(k===s.FLOAT&&(K=s.R32F),k===s.HALF_FLOAT&&(K=s.R16F),k===s.UNSIGNED_BYTE&&(K=s.R8)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.R8UI),k===s.UNSIGNED_SHORT&&(K=s.R16UI),k===s.UNSIGNED_INT&&(K=s.R32UI),k===s.BYTE&&(K=s.R8I),k===s.SHORT&&(K=s.R16I),k===s.INT&&(K=s.R32I)),S===s.RG&&(k===s.FLOAT&&(K=s.RG32F),k===s.HALF_FLOAT&&(K=s.RG16F),k===s.UNSIGNED_BYTE&&(K=s.RG8)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RG8UI),k===s.UNSIGNED_SHORT&&(K=s.RG16UI),k===s.UNSIGNED_INT&&(K=s.RG32UI),k===s.BYTE&&(K=s.RG8I),k===s.SHORT&&(K=s.RG16I),k===s.INT&&(K=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGB8UI),k===s.UNSIGNED_SHORT&&(K=s.RGB16UI),k===s.UNSIGNED_INT&&(K=s.RGB32UI),k===s.BYTE&&(K=s.RGB8I),k===s.SHORT&&(K=s.RGB16I),k===s.INT&&(K=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),k===s.UNSIGNED_INT&&(K=s.RGBA32UI),k===s.BYTE&&(K=s.RGBA8I),k===s.SHORT&&(K=s.RGBA16I),k===s.INT&&(K=s.RGBA32I)),S===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),S===s.RGBA){const Te=Z?uo:Qe.getTransfer(q);k===s.FLOAT&&(K=s.RGBA32F),k===s.HALF_FLOAT&&(K=s.RGBA16F),k===s.UNSIGNED_BYTE&&(K=Te===it?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(C,S){let k;return C?S===null||S===si||S===Js?k=s.DEPTH24_STENCIL8:S===Pn?k=s.DEPTH32F_STENCIL8:S===Ys&&(k=s.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===si||S===Js?k=s.DEPTH_COMPONENT24:S===Pn?k=s.DEPTH_COMPONENT32F:S===Ys&&(k=s.DEPTH_COMPONENT16),k}function T(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Lt&&C.minFilter!==It?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function E(C){const S=C.target;S.removeEventListener("dispose",E),y(S),S.isVideoTexture&&f.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),I(S)}function y(C){const S=n.get(C);if(S.__webglInit===void 0)return;const k=C.source,q=h.get(k);if(q){const Z=q[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(C),Object.keys(q).length===0&&h.delete(k)}n.remove(C)}function M(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const k=C.source,q=h.get(k);delete q[S.__cacheKey],a.memory.textures--}function I(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let Z=0;Z<S.__webglFramebuffer[q].length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[q][Z]);else s.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)s.deleteFramebuffer(S.__webglFramebuffer[q]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=C.textures;for(let q=0,Z=k.length;q<Z;q++){const K=n.get(k[q]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(k[q])}n.remove(C)}let R=0;function L(){R=0}function F(){const C=R;return C>=i.maxTextures&&Pe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function B(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function N(C,S){const k=n.get(C);if(C.isVideoTexture&&xe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const q=C.image;if(q===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,C,S);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function z(C,S){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){X(k,C,S);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function O(C,S){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){X(k,C,S);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function ee(C,S){const k=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){le(k,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}const Q={[qi]:s.REPEAT,[Qn]:s.CLAMP_TO_EDGE,[co]:s.MIRRORED_REPEAT},de={[Lt]:s.NEAREST,[bd]:s.NEAREST_MIPMAP_NEAREST,[Ns]:s.NEAREST_MIPMAP_LINEAR,[It]:s.LINEAR,[Qa]:s.LINEAR_MIPMAP_NEAREST,[yi]:s.LINEAR_MIPMAP_LINEAR},G={[Ym]:s.NEVER,[eg]:s.ALWAYS,[Jm]:s.LESS,[ru]:s.LEQUAL,[Zm]:s.EQUAL,[su]:s.GEQUAL,[$m]:s.GREATER,[Qm]:s.NOTEQUAL};function J(C,S){if(S.type===Pn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===It||S.magFilter===Qa||S.magFilter===Ns||S.magFilter===yi||S.minFilter===It||S.minFilter===Qa||S.minFilter===Ns||S.minFilter===yi)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Q[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Q[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Q[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,de[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,G[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Lt||S.minFilter!==Ns&&S.minFilter!==yi||S.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ce(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",E));const q=S.source;let Z=h.get(q);Z===void 0&&(Z={},h.set(q,Z));const K=B(S);if(K!==C.__cacheKey){Z[K]===void 0&&(Z[K]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[K].usedTimes++;const Te=Z[C.__cacheKey];Te!==void 0&&(Z[C.__cacheKey].usedTimes--,Te.usedTimes===0&&M(S)),C.__cacheKey=K,C.__webglTexture=Z[K].texture}return k}function ve(C,S,k){return Math.floor(Math.floor(C/k)/S)}function Fe(C,S,k,q){const K=C.updateRanges;if(K.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,k,q,S.data);else{K.sort((ie,ae)=>ie.start-ae.start);let Te=0;for(let ie=1;ie<K.length;ie++){const ae=K[Te],Ee=K[ie],Ae=ae.start+ae.count,ye=ve(Ee.start,S.width,4),Je=ve(ae.start,S.width,4);Ee.start<=Ae+1&&ye===Je&&ve(Ee.start+Ee.count-1,S.width,4)===ye?ae.count=Math.max(ae.count,Ee.start+Ee.count-ae.start):(++Te,K[Te]=Ee)}K.length=Te+1;const fe=s.getParameter(s.UNPACK_ROW_LENGTH),Le=s.getParameter(s.UNPACK_SKIP_PIXELS),Be=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let ie=0,ae=K.length;ie<ae;ie++){const Ee=K[ie],Ae=Math.floor(Ee.start/4),ye=Math.ceil(Ee.count/4),Je=Ae%S.width,U=Math.floor(Ae/S.width),pe=ye,oe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Je),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,Je,U,pe,oe,k,q,S.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,fe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Le),s.pixelStorei(s.UNPACK_SKIP_ROWS,Be)}}function X(C,S,k){let q=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=s.TEXTURE_3D);const Z=ce(C,S),K=S.source;t.bindTexture(q,C.__webglTexture,s.TEXTURE0+k);const Te=n.get(K);if(K.version!==Te.__version||Z===!0){t.activeTexture(s.TEXTURE0+k);const fe=Qe.getPrimaries(Qe.workingColorSpace),Le=S.colorSpace===Bi?null:Qe.getPrimaries(S.colorSpace),Be=S.colorSpace===Bi||fe===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ie=_(S.image,!1,i.maxTextureSize);ie=ke(S,ie);const ae=r.convert(S.format,S.colorSpace),Ee=r.convert(S.type);let Ae=v(S.internalFormat,ae,Ee,S.colorSpace,S.isVideoTexture);J(q,S);let ye;const Je=S.mipmaps,U=S.isVideoTexture!==!0,pe=Te.__version===void 0||Z===!0,oe=K.dataReady,Se=T(S,ie);if(S.isDepthTexture)Ae=x(S.format===hr,S.type),pe&&(U?t.texStorage2D(s.TEXTURE_2D,1,Ae,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Ae,ie.width,ie.height,0,ae,Ee,null));else if(S.isDataTexture)if(Je.length>0){U&&pe&&t.texStorage2D(s.TEXTURE_2D,Se,Ae,Je[0].width,Je[0].height);for(let se=0,Y=Je.length;se<Y;se++)ye=Je[se],U?oe&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,ye.width,ye.height,ae,Ee,ye.data):t.texImage2D(s.TEXTURE_2D,se,Ae,ye.width,ye.height,0,ae,Ee,ye.data);S.generateMipmaps=!1}else U?(pe&&t.texStorage2D(s.TEXTURE_2D,Se,Ae,ie.width,ie.height),oe&&Fe(S,ie,ae,Ee)):t.texImage2D(s.TEXTURE_2D,0,Ae,ie.width,ie.height,0,ae,Ee,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,Ae,Je[0].width,Je[0].height,ie.depth);for(let se=0,Y=Je.length;se<Y;se++)if(ye=Je[se],S.format!==Dn)if(ae!==null)if(U){if(oe)if(S.layerUpdates.size>0){const we=$h(ye.width,ye.height,S.format,S.type);for(const We of S.layerUpdates){const dt=ye.data.subarray(We*we/ye.data.BYTES_PER_ELEMENT,(We+1)*we/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,We,ye.width,ye.height,1,ae,dt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ye.width,ye.height,ie.depth,ae,ye.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Ae,ye.width,ye.height,ie.depth,0,ye.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?oe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ye.width,ye.height,ie.depth,ae,Ee,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,Ae,ye.width,ye.height,ie.depth,0,ae,Ee,ye.data)}else{U&&pe&&t.texStorage2D(s.TEXTURE_2D,Se,Ae,Je[0].width,Je[0].height);for(let se=0,Y=Je.length;se<Y;se++)ye=Je[se],S.format!==Dn?ae!==null?U?oe&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ye.width,ye.height,ae,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,se,Ae,ye.width,ye.height,0,ye.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?oe&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,ye.width,ye.height,ae,Ee,ye.data):t.texImage2D(s.TEXTURE_2D,se,Ae,ye.width,ye.height,0,ae,Ee,ye.data)}else if(S.isDataArrayTexture)if(U){if(pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,Ae,ie.width,ie.height,ie.depth),oe)if(S.layerUpdates.size>0){const se=$h(ie.width,ie.height,S.format,S.type);for(const Y of S.layerUpdates){const we=ie.data.subarray(Y*se/ie.data.BYTES_PER_ELEMENT,(Y+1)*se/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,ie.width,ie.height,1,ae,Ee,we)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ae,Ee,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,ie.width,ie.height,ie.depth,0,ae,Ee,ie.data);else if(S.isData3DTexture)U?(pe&&t.texStorage3D(s.TEXTURE_3D,Se,Ae,ie.width,ie.height,ie.depth),oe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ae,Ee,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,ie.width,ie.height,ie.depth,0,ae,Ee,ie.data);else if(S.isFramebufferTexture){if(pe)if(U)t.texStorage2D(s.TEXTURE_2D,Se,Ae,ie.width,ie.height);else{let se=ie.width,Y=ie.height;for(let we=0;we<Se;we++)t.texImage2D(s.TEXTURE_2D,we,Ae,se,Y,0,ae,Ee,null),se>>=1,Y>>=1}}else if(Je.length>0){if(U&&pe){const se=he(Je[0]);t.texStorage2D(s.TEXTURE_2D,Se,Ae,se.width,se.height)}for(let se=0,Y=Je.length;se<Y;se++)ye=Je[se],U?oe&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,ae,Ee,ye):t.texImage2D(s.TEXTURE_2D,se,Ae,ae,Ee,ye);S.generateMipmaps=!1}else if(U){if(pe){const se=he(ie);t.texStorage2D(s.TEXTURE_2D,Se,Ae,se.width,se.height)}oe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae,Ee,ie)}else t.texImage2D(s.TEXTURE_2D,0,Ae,ae,Ee,ie);m(S)&&p(q),Te.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function le(C,S,k){if(S.image.length!==6)return;const q=ce(C,S),Z=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);const K=n.get(Z);if(Z.version!==K.__version||q===!0){t.activeTexture(s.TEXTURE0+k);const Te=Qe.getPrimaries(Qe.workingColorSpace),fe=S.colorSpace===Bi?null:Qe.getPrimaries(S.colorSpace),Le=S.colorSpace===Bi||Te===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Be=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let Y=0;Y<6;Y++)!Be&&!ie?ae[Y]=_(S.image[Y],!0,i.maxCubemapSize):ae[Y]=ie?S.image[Y].image:S.image[Y],ae[Y]=ke(S,ae[Y]);const Ee=ae[0],Ae=r.convert(S.format,S.colorSpace),ye=r.convert(S.type),Je=v(S.internalFormat,Ae,ye,S.colorSpace),U=S.isVideoTexture!==!0,pe=K.__version===void 0||q===!0,oe=Z.dataReady;let Se=T(S,Ee);J(s.TEXTURE_CUBE_MAP,S);let se;if(Be){U&&pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,Je,Ee.width,Ee.height);for(let Y=0;Y<6;Y++){se=ae[Y].mipmaps;for(let we=0;we<se.length;we++){const We=se[we];S.format!==Dn?Ae!==null?U?oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,we,0,0,We.width,We.height,Ae,We.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,we,Je,We.width,We.height,0,We.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,we,0,0,We.width,We.height,Ae,ye,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,we,Je,We.width,We.height,0,Ae,ye,We.data)}}}else{if(se=S.mipmaps,U&&pe){se.length>0&&Se++;const Y=he(ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,Je,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ie){U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ae[Y].width,ae[Y].height,Ae,ye,ae[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Je,ae[Y].width,ae[Y].height,0,Ae,ye,ae[Y].data);for(let we=0;we<se.length;we++){const dt=se[we].image[Y].image;U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,we+1,0,0,dt.width,dt.height,Ae,ye,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,we+1,Je,dt.width,dt.height,0,Ae,ye,dt.data)}}else{U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ae,ye,ae[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Je,Ae,ye,ae[Y]);for(let we=0;we<se.length;we++){const We=se[we];U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,we+1,0,0,Ae,ye,We.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,we+1,Je,Ae,ye,We.image[Y])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),K.__version=Z.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ue(C,S,k,q,Z,K){const Te=r.convert(k.format,k.colorSpace),fe=r.convert(k.type),Le=v(k.internalFormat,Te,fe,k.colorSpace),Be=n.get(S),ie=n.get(k);if(ie.__renderTarget=S,!Be.__hasExternalTextures){const ae=Math.max(1,S.width>>K),Ee=Math.max(1,S.height>>K);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,K,Le,ae,Ee,S.depth,0,Te,fe,null):t.texImage2D(Z,K,Le,ae,Ee,0,Te,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Oe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,Z,ie.__webglTexture,0,P(S)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,Z,ie.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(C,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const q=S.depthTexture,Z=q&&q.isDepthTexture?q.type:null,K=x(S.stencilBuffer,Z),Te=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Oe(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(S),K,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(S),K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,C)}else{const q=S.textures;for(let Z=0;Z<q.length;Z++){const K=q[Z],Te=r.convert(K.format,K.colorSpace),fe=r.convert(K.type),Le=v(K.internalFormat,Te,fe,K.colorSpace);Oe(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(S),Le,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(S),Le,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Le,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(C,S,k){const q=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",E)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),J(s.TEXTURE_CUBE_MAP,S.depthTexture);const Be=r.convert(S.depthTexture.format),ie=r.convert(S.depthTexture.type);let ae;S.depthTexture.format===wi?ae=s.DEPTH_COMPONENT24:S.depthTexture.format===hr&&(ae=s.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ae,S.width,S.height,0,Be,ie,null)}}else N(S.depthTexture,0);const K=Z.__webglTexture,Te=P(S),fe=q?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,Le=S.depthTexture.format===hr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===wi)Oe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Le,fe,K,0,Te):s.framebufferTexture2D(s.FRAMEBUFFER,Le,fe,K,0);else if(S.depthTexture.format===hr)Oe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Le,fe,K,0,Te):s.framebufferTexture2D(s.FRAMEBUFFER,Le,fe,K,0);else throw new Error("Unknown depthTexture format")}function He(C){const S=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=q}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let q=0;q<6;q++)Ne(S.__webglFramebuffer[q],C,q);else{const q=C.texture.mipmaps;q&&q.length>0?Ne(S.__webglFramebuffer[0],C,0):Ne(S.__webglFramebuffer,C,0)}else if(k){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=s.createRenderbuffer(),Ue(S.__webglDepthbuffer[q],C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,K)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Ue(S.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,K)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function at(C,S,k){const q=n.get(C);S!==void 0&&ue(q.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&He(C)}function je(C){const S=C.texture,k=n.get(C),q=n.get(S);C.addEventListener("dispose",A);const Z=C.textures,K=C.isWebGLCubeRenderTarget===!0,Te=Z.length>1;if(Te||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=S.version,a.memory.textures++),K){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let Le=0;Le<S.mipmaps.length;Le++)k.__webglFramebuffer[fe][Le]=s.createFramebuffer()}else k.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)k.__webglFramebuffer[fe]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Te)for(let fe=0,Le=Z.length;fe<Le;fe++){const Be=n.get(Z[fe]);Be.__webglTexture===void 0&&(Be.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Oe(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<Z.length;fe++){const Le=Z[fe];k.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const Be=r.convert(Le.format,Le.colorSpace),ie=r.convert(Le.type),ae=v(Le.internalFormat,Be,ie,Le.colorSpace,C.isXRRenderTarget===!0),Ee=P(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,ae,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),J(s.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Le=0;Le<S.mipmaps.length;Le++)ue(k.__webglFramebuffer[fe][Le],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le);else ue(k.__webglFramebuffer[fe],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let fe=0,Le=Z.length;fe<Le;fe++){const Be=Z[fe],ie=n.get(Be);let ae=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,ie.__webglTexture),J(ae,Be),ue(k.__webglFramebuffer,C,Be,s.COLOR_ATTACHMENT0+fe,ae,0),m(Be)&&p(ae)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,q.__webglTexture),J(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let Le=0;Le<S.mipmaps.length;Le++)ue(k.__webglFramebuffer[Le],C,S,s.COLOR_ATTACHMENT0,fe,Le);else ue(k.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,fe,0);m(S)&&p(fe),t.unbindTexture()}C.depthBuffer&&He(C)}function $(C){const S=C.textures;for(let k=0,q=S.length;k<q;k++){const Z=S[k];if(m(Z)){const K=b(C),Te=n.get(Z).__webglTexture;t.bindTexture(K,Te),p(K),t.unbindTexture()}}}const re=[],te=[];function me(C){if(C.samples>0){if(Oe(C)===!1){const S=C.textures,k=C.width,q=C.height;let Z=s.COLOR_BUFFER_BIT;const K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(C),fe=S.length>1;if(fe)for(let Be=0;Be<S.length;Be++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Le=C.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Be=0;Be<S.length;Be++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Be]);const ie=n.get(S[Be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,k,q,0,0,k,q,Z,s.NEAREST),c===!0&&(re.length=0,te.length=0,re.push(s.COLOR_ATTACHMENT0+Be),C.depthBuffer&&C.resolveDepthBuffer===!1&&(re.push(K),te.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,te)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Be=0;Be<S.length;Be++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Be]);const ie=n.get(S[Be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function P(C){return Math.min(i.maxSamples,C.samples)}function Oe(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xe(C){const S=a.render.frame;f.get(C)!==S&&(f.set(C,S),C.update())}function ke(C,S){const k=C.colorSpace,q=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==nn&&k!==Bi&&(Qe.getTransfer(k)===it?(q!==Dn||Z!==bn)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",k)),S}function he(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=N,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=ee,this.rebindTextures=at,this.setupRenderTarget=je,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function eM(s,e){function t(n,i=Bi){let r;const a=Qe.getTransfer(i);if(n===bn)return s.UNSIGNED_BYTE;if(n===$c)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Qc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===yd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Md)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===xd)return s.BYTE;if(n===vd)return s.SHORT;if(n===Ys)return s.UNSIGNED_SHORT;if(n===Zc)return s.INT;if(n===si)return s.UNSIGNED_INT;if(n===Pn)return s.FLOAT;if(n===Mn)return s.HALF_FLOAT;if(n===Sd)return s.ALPHA;if(n===Td)return s.RGB;if(n===Dn)return s.RGBA;if(n===wi)return s.DEPTH_COMPONENT;if(n===hr)return s.DEPTH_STENCIL;if(n===eu)return s.RED;if(n===tu)return s.RED_INTEGER;if(n===ns)return s.RG;if(n===nu)return s.RG_INTEGER;if(n===iu)return s.RGBA_INTEGER;if(n===eo||n===to||n===no||n===io)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jl||n===ql||n===Xl||n===Kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yl||n===Jl||n===Zl||n===$l||n===Ql||n===ec||n===tc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yl||n===Jl)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===$l)return r.COMPRESSED_R11_EAC;if(n===Ql)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ec)return r.COMPRESSED_RG11_EAC;if(n===tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===nc||n===ic||n===rc||n===sc||n===ac||n===oc||n===lc||n===cc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gc||n===_c||n===bc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===gc)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===vc||n===yc||n===Mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const tM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ud(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yt({vertexShader:tM,fragmentShader:nM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new Ro(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rM extends vr{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,u=null,f=null,l=null,h=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new iM,p={},b=t.getContextAttributes();let v=null,x=null;const T=[],E=[],A=new ne;let y=null;const M=new en;M.viewport=new gt;const I=new en;I.viewport=new gt;const R=[M,I],L=new ib;let F=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let le=T[X];return le===void 0&&(le=new jo,T[X]=le),le.getTargetRaySpace()},this.getControllerGrip=function(X){let le=T[X];return le===void 0&&(le=new jo,T[X]=le),le.getGripSpace()},this.getHand=function(X){let le=T[X];return le===void 0&&(le=new jo,T[X]=le),le.getHandSpace()};function N(X){const le=E.indexOf(X.inputSource);if(le===-1)return;const ue=T[le];ue!==void 0&&(ue.update(X.inputSource,X.frame,u||a),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",O);for(let X=0;X<T.length;X++){const le=E[X];le!==null&&(E[X]=null,T[X].disconnect(le))}F=null,B=null,m.reset();for(const X in p)delete p[X];e.setRenderTarget(v),d=null,h=null,l=null,i=null,x=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return l===null&&_&&(l=new XRWebGLBinding(i,t)),l},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",z),i.addEventListener("inputsourceschange",O),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Ue=null,Ne=null;b.depth&&(Ne=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=b.stencil?hr:wi,Ue=b.stencil?Js:si);const He={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:r};l=this.getBinding(),h=l.createProjectionLayer(He),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new on(h.textureWidth,h.textureHeight,{format:Dn,type:bn,depthTexture:new ta(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ue={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new on(d.framebufferWidth,d.framebufferHeight,{format:Dn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await i.requestReferenceSpace(o),Fe.setContext(i),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(X){for(let le=0;le<X.removed.length;le++){const ue=X.removed[le],Ue=E.indexOf(ue);Ue>=0&&(E[Ue]=null,T[Ue].disconnect(ue))}for(let le=0;le<X.added.length;le++){const ue=X.added[le];let Ue=E.indexOf(ue);if(Ue===-1){for(let He=0;He<T.length;He++)if(He>=E.length){E.push(ue),Ue=He;break}else if(E[He]===null){E[He]=ue,Ue=He;break}if(Ue===-1)break}const Ne=T[Ue];Ne&&Ne.connect(ue)}}const ee=new D,Q=new D;function de(X,le,ue){ee.setFromMatrixPosition(le.matrixWorld),Q.setFromMatrixPosition(ue.matrixWorld);const Ue=ee.distanceTo(Q),Ne=le.projectionMatrix.elements,He=ue.projectionMatrix.elements,at=Ne[14]/(Ne[10]-1),je=Ne[14]/(Ne[10]+1),$=(Ne[9]+1)/Ne[5],re=(Ne[9]-1)/Ne[5],te=(Ne[8]-1)/Ne[0],me=(He[8]+1)/He[0],P=at*te,Oe=at*me,xe=Ue/(-te+me),ke=xe*-te;if(le.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ke),X.translateZ(xe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ne[10]===-1)X.projectionMatrix.copy(le.projectionMatrix),X.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const he=at+xe,C=je+xe,S=P-ke,k=Oe+(Ue-ke),q=$*je/C*he,Z=re*je/C*he;X.projectionMatrix.makePerspective(S,k,q,Z,he,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function G(X,le){le===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(le.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let le=X.near,ue=X.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),L.near=I.near=M.near=le,L.far=I.far=M.far=ue,(F!==L.near||B!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,B=L.far),L.layers.mask=X.layers.mask|6,M.layers.mask=L.layers.mask&-5,I.layers.mask=L.layers.mask&-3;const Ue=X.parent,Ne=L.cameras;G(L,Ue);for(let He=0;He<Ne.length;He++)G(Ne[He],Ue);Ne.length===2?de(L,M,I):L.projectionMatrix.copy(M.projectionMatrix),J(X,L,Ue)};function J(X,le,ue){ue===null?X.matrix.copy(le.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(le.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(le.projectionMatrix),X.projectionMatrixInverse.copy(le.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=is*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(X){return p[X]};let ce=null;function ve(X,le){if(f=le.getViewerPose(u||a),g=le,f!==null){const ue=f.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ue=!1;ue.length!==L.cameras.length&&(L.cameras.length=0,Ue=!0);for(let je=0;je<ue.length;je++){const $=ue[je];let re=null;if(d!==null)re=d.getViewport($);else{const me=l.getViewSubImage(h,$);re=me.viewport,je===0&&(e.setRenderTargetTextures(x,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(x))}let te=R[je];te===void 0&&(te=new en,te.layers.enable(je),te.viewport=new gt,R[je]=te),te.matrix.fromArray($.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray($.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(re.x,re.y,re.width,re.height),je===0&&(L.matrix.copy(te.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ue===!0&&L.cameras.push(te)}const Ne=i.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){l=n.getBinding();const je=l.getDepthInformation(ue[0]);je&&je.isValid&&je.texture&&m.init(je,i.renderState)}if(Ne&&Ne.includes("camera-access")&&_){e.state.unbindTexture(),l=n.getBinding();for(let je=0;je<ue.length;je++){const $=ue[je].camera;if($){let re=p[$];re||(re=new Ud,p[$]=re);const te=l.getCameraImage($);re.sourceTexture=te}}}}for(let ue=0;ue<T.length;ue++){const Ue=E[ue],Ne=T[ue];Ue!==null&&Ne!==void 0&&Ne.update(Ue,le,u||a)}ce&&ce(X,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}const Fe=new ep;Fe.setAnimationLoop(ve),this.setAnimationLoop=function(X){ce=X},this.dispose=function(){}}}const rr=new ai,sM=new Ge;function aM(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,v,x){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),l(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,v):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),v=b.envMap,x=b.envMapRotation;v&&(m.envMap.value=v,rr.copy(x),rr.x*=-1,rr.y*=-1,rr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),m.envMapRotation.value.setFromMatrix4(sM.makeRotationFromEuler(rr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function oM(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,v){const x=v.program;n.uniformBlockBinding(b,x)}function u(b,v){let x=i[b.id];x===void 0&&(g(b),x=f(b),i[b.id]=x,b.addEventListener("dispose",m));const T=v.program;n.updateUBOMapping(b,T);const E=e.render.frame;r[b.id]!==E&&(h(b),r[b.id]=E)}function f(b){const v=l();b.__bindingPointIndex=v;const x=s.createBuffer(),T=b.__size,E=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,T,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function l(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const v=i[b.id],x=b.uniforms,T=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,A=x.length;E<A;E++){const y=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,I=y.length;M<I;M++){const R=y[M];if(d(R,E,M,T)===!0){const L=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let N=0;N<F.length;N++){const z=F[N],O=_(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,L+B,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,B),B+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,v,x,T){const E=b.value,A=v+"_"+x;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:T[A]=E.clone(),!0;{const y=T[A];if(typeof E=="number"||typeof E=="boolean"){if(y!==E)return T[A]=E,!0}else if(y.equals(E)===!1)return y.copy(E),!0}return!1}function g(b){const v=b.uniforms;let x=0;const T=16;for(let A=0,y=v.length;A<y;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let I=0,R=M.length;I<R;I++){const L=M[I],F=Array.isArray(L.value)?L.value:[L.value];for(let B=0,N=F.length;B<N;B++){const z=F[B],O=_(z),ee=x%T,Q=ee%O.boundary,de=ee+Q;x+=Q,de!==0&&T-de<O.storage&&(x+=T-de),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=O.storage}}}const E=x%T;return E>0&&(x+=T-E),b.__size=x,b.__cache={},this}function _(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:c,update:u,dispose:p}}const lM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xn=null;function cM(){return Xn===null&&(Xn=new hu(lM,16,16,ns,Mn),Xn.name="DFG_LUT",Xn.minFilter=It,Xn.magFilter=It,Xn.wrapS=Qn,Xn.wrapT=Qn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}class uM{constructor(e={}){const{canvas:t=ig(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:l=!1,reversedDepthBuffer:h=!1,outputBufferType:d=bn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=d,m=new Set([iu,nu,tu]),p=new Set([bn,si,Ys,Js,$c,Qc]),b=new Uint32Array(4),v=new Int32Array(4);let x=null,T=null;const E=[],A=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let I=!1;this._outputColorSpace=kt;let R=0,L=0,F=null,B=-1,N=null;const z=new gt,O=new gt;let ee=null;const Q=new Ve(0);let de=0,G=t.width,J=t.height,ce=1,ve=null,Fe=null;const X=new gt(0,0,G,J),le=new gt(0,0,G,J);let ue=!1;const Ue=new du;let Ne=!1,He=!1;const at=new Ge,je=new D,$=new gt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function me(){return F===null?ce:1}let P=n;function Oe(w,V){return t.getContext(w,V)}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yc}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",dt,!1),P===null){const V="webgl2";if(P=Oe(V,w),P===null)throw Oe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw ze("WebGLRenderer: "+w.message),w}let xe,ke,he,C,S,k,q,Z,K,Te,fe,Le,Be,ie,ae,Ee,Ae,ye,Je,U,pe,oe,Se;function se(){xe=new uv(P),xe.init(),pe=new eM(P,xe),ke=new nv(P,xe,e,pe),he=new $y(P,xe),ke.reversedDepthBuffer&&h&&he.buffers.depth.setReversed(!0),C=new dv(P),S=new ky,k=new Qy(P,xe,he,S,ke,pe,C),q=new cv(M),Z=new bb(P),oe=new ev(P,Z),K=new hv(P,Z,C,oe),Te=new mv(P,K,Z,oe,C),ye=new pv(P,ke,k),ae=new iv(S),fe=new Uy(M,q,xe,ke,oe,ae),Le=new aM(M,S),Be=new zy,ie=new qy(xe),Ae=new Qx(M,q,he,Te,g,c),Ee=new Zy(M,Te,ke),Se=new oM(P,C,ke,he),Je=new tv(P,xe,C),U=new fv(P,xe,C),C.programs=fe.programs,M.capabilities=ke,M.extensions=xe,M.properties=S,M.renderLists=Be,M.shadowMap=Ee,M.state=he,M.info=C}se(),_!==bn&&(y=new _v(_,t.width,t.height,i,r));const Y=new rM(M,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=xe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=xe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(w){w!==void 0&&(ce=w,this.setSize(G,J,!1))},this.getSize=function(w){return w.set(G,J)},this.setSize=function(w,V,j=!0){if(Y.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,J=V,t.width=Math.floor(w*ce),t.height=Math.floor(V*ce),j===!0&&(t.style.width=w+"px",t.style.height=V+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(G*ce,J*ce).floor()},this.setDrawingBufferSize=function(w,V,j){G=w,J=V,ce=j,t.width=Math.floor(w*j),t.height=Math.floor(V*j),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(_===bn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(X)},this.setViewport=function(w,V,j,W){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,V,j,W),he.viewport(z.copy(X).multiplyScalar(ce).round())},this.getScissor=function(w){return w.copy(le)},this.setScissor=function(w,V,j,W){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,V,j,W),he.scissor(O.copy(le).multiplyScalar(ce).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(w){he.setScissorTest(ue=w)},this.setOpaqueSort=function(w){ve=w},this.setTransparentSort=function(w){Fe=w},this.getClearColor=function(w){return w.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,j=!0){let W=0;if(w){let H=!1;if(F!==null){const _e=F.texture.format;H=m.has(_e)}if(H){const _e=F.texture.type,Me=p.has(_e),be=Ae.getClearColor(),Re=Ae.getClearAlpha(),De=be.r,qe=be.g,Ze=be.b;Me?(b[0]=De,b[1]=qe,b[2]=Ze,b[3]=Re,P.clearBufferuiv(P.COLOR,0,b)):(v[0]=De,v[1]=qe,v[2]=Ze,v[3]=Re,P.clearBufferiv(P.COLOR,0,v))}else W|=P.COLOR_BUFFER_BIT}V&&(W|=P.DEPTH_BUFFER_BIT),j&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Ae.dispose(),Be.dispose(),ie.dispose(),S.dispose(),q.dispose(),Te.dispose(),oe.dispose(),Se.dispose(),fe.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Wu),Y.removeEventListener("sessionend",ju),Zi.stop()};function we(w){w.preventDefault(),ho("WebGLRenderer: Context Lost."),I=!0}function We(){ho("WebGLRenderer: Context Restored."),I=!1;const w=C.autoReset,V=Ee.enabled,j=Ee.autoUpdate,W=Ee.needsUpdate,H=Ee.type;se(),C.autoReset=w,Ee.enabled=V,Ee.autoUpdate=j,Ee.needsUpdate=W,Ee.type=H}function dt(w){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function nt(w){const V=w.target;V.removeEventListener("dispose",nt),hi(V)}function hi(w){fi(w),S.remove(w)}function fi(w){const V=S.get(w).programs;V!==void 0&&(V.forEach(function(j){fe.releaseProgram(j)}),w.isShaderMaterial&&fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,j,W,H,_e){V===null&&(V=re);const Me=H.isMesh&&H.matrixWorld.determinant()<0,be=gm(w,V,j,W,H);he.setMaterial(W,Me);let Re=j.index,De=1;if(W.wireframe===!0){if(Re=K.getWireframeAttribute(j),Re===void 0)return;De=2}const qe=j.drawRange,Ze=j.attributes.position;let Ie=qe.start*De,ot=(qe.start+qe.count)*De;_e!==null&&(Ie=Math.max(Ie,_e.start*De),ot=Math.min(ot,(_e.start+_e.count)*De)),Re!==null?(Ie=Math.max(Ie,0),ot=Math.min(ot,Re.count)):Ze!=null&&(Ie=Math.max(Ie,0),ot=Math.min(ot,Ze.count));const wt=ot-Ie;if(wt<0||wt===1/0)return;oe.setup(H,W,be,j,Re);let Tt,lt=Je;if(Re!==null&&(Tt=Z.get(Re),lt=U,lt.setIndex(Tt)),H.isMesh)W.wireframe===!0?(he.setLineWidth(W.wireframeLinewidth*me()),lt.setMode(P.LINES)):lt.setMode(P.TRIANGLES);else if(H.isLine){let jt=W.linewidth;jt===void 0&&(jt=1),he.setLineWidth(jt*me()),H.isLineSegments?lt.setMode(P.LINES):H.isLineLoop?lt.setMode(P.LINE_LOOP):lt.setMode(P.LINE_STRIP)}else H.isPoints?lt.setMode(P.POINTS):H.isSprite&&lt.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)fo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))lt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const jt=H._multiDrawStarts,Ce=H._multiDrawCounts,dn=H._multiDrawCount,tt=Re?Z.get(Re).bytesPerElement:1,On=S.get(W).currentProgram.getUniforms();for(let jn=0;jn<dn;jn++)On.setValue(P,"_gl_DrawID",jn),lt.render(jt[jn]/tt,Ce[jn])}else if(H.isInstancedMesh)lt.renderInstances(Ie,wt,H.count);else if(j.isInstancedBufferGeometry){const jt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ce=Math.min(j.instanceCount,jt);lt.renderInstances(Ie,wt,Ce)}else lt.render(Ie,wt)};function Gu(w,V,j){w.transparent===!0&&w.side===_n&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,ga(w,V,j),w.side=Ei,w.needsUpdate=!0,ga(w,V,j),w.side=_n):ga(w,V,j)}this.compile=function(w,V,j=null){j===null&&(j=w),T=ie.get(j),T.init(V),A.push(T),j.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),w!==j&&w.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const W=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _e=H.material;if(_e)if(Array.isArray(_e))for(let Me=0;Me<_e.length;Me++){const be=_e[Me];Gu(be,j,H),W.add(be)}else Gu(_e,j,H),W.add(_e)}),T=A.pop(),W},this.compileAsync=function(w,V,j=null){const W=this.compile(w,V,j);return new Promise(H=>{function _e(){if(W.forEach(function(Me){S.get(Me).currentProgram.isReady()&&W.delete(Me)}),W.size===0){H(w);return}setTimeout(_e,10)}xe.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let No=null;function mm(w){No&&No(w)}function Wu(){Zi.stop()}function ju(){Zi.start()}const Zi=new ep;Zi.setAnimationLoop(mm),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(w){No=w,Y.setAnimationLoop(w),w===null?Zi.stop():Zi.start()},Y.addEventListener("sessionstart",Wu),Y.addEventListener("sessionend",ju),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;const j=Y.enabled===!0&&Y.isPresenting===!0,W=y!==null&&(F===null||j)&&y.begin(M,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(V),V=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,V,F),T=ie.get(w,A.length),T.init(V),A.push(T),at.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ue.setFromProjectionMatrix(at,ei,V.reversedDepth),He=this.localClippingEnabled,Ne=ae.init(this.clippingPlanes,He),x=Be.get(w,E.length),x.init(),E.push(x),Y.enabled===!0&&Y.isPresenting===!0){const Me=M.xr.getDepthSensingMesh();Me!==null&&Oo(Me,V,-1/0,M.sortObjects)}Oo(w,V,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(ve,Fe),te=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,te&&Ae.addToRenderList(x,w),this.info.render.frame++,Ne===!0&&ae.beginShadows();const H=T.state.shadowsArray;if(Ee.render(H,w,V),Ne===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&y.hasRenderPass())===!1){const Me=x.opaque,be=x.transmissive;if(T.setupLights(),V.isArrayCamera){const Re=V.cameras;if(be.length>0)for(let De=0,qe=Re.length;De<qe;De++){const Ze=Re[De];Xu(Me,be,w,Ze)}te&&Ae.render(w);for(let De=0,qe=Re.length;De<qe;De++){const Ze=Re[De];qu(x,w,Ze,Ze.viewport)}}else be.length>0&&Xu(Me,be,w,V),te&&Ae.render(w),qu(x,w,V)}F!==null&&L===0&&(k.updateMultisampleRenderTarget(F),k.updateRenderTargetMipmap(F)),W&&y.end(M),w.isScene===!0&&w.onAfterRender(M,w,V),oe.resetDefaultState(),B=-1,N=null,A.pop(),A.length>0?(T=A[A.length-1],Ne===!0&&ae.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?x=E[E.length-1]:x=null};function Oo(w,V,j,W){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ue.intersectsSprite(w)){W&&$.setFromMatrixPosition(w.matrixWorld).applyMatrix4(at);const Me=Te.update(w),be=w.material;be.visible&&x.push(w,Me,be,j,$.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ue.intersectsObject(w))){const Me=Te.update(w),be=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),$.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),$.copy(Me.boundingSphere.center)),$.applyMatrix4(w.matrixWorld).applyMatrix4(at)),Array.isArray(be)){const Re=Me.groups;for(let De=0,qe=Re.length;De<qe;De++){const Ze=Re[De],Ie=be[Ze.materialIndex];Ie&&Ie.visible&&x.push(w,Me,Ie,j,$.z,Ze)}}else be.visible&&x.push(w,Me,be,j,$.z,null)}}const _e=w.children;for(let Me=0,be=_e.length;Me<be;Me++)Oo(_e[Me],V,j,W)}function qu(w,V,j,W){const{opaque:H,transmissive:_e,transparent:Me}=w;T.setupLightsView(j),Ne===!0&&ae.setGlobalState(M.clippingPlanes,j),W&&he.viewport(z.copy(W)),H.length>0&&ma(H,V,j),_e.length>0&&ma(_e,V,j),Me.length>0&&ma(Me,V,j),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Xu(w,V,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const Ie=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new on(1,1,{generateMipmaps:!0,type:Ie?Mn:bn,minFilter:yi,samples:ke.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const _e=T.state.transmissionRenderTarget[W.id],Me=W.viewport||z;_e.setSize(Me.z*M.transmissionResolutionScale,Me.w*M.transmissionResolutionScale);const be=M.getRenderTarget(),Re=M.getActiveCubeFace(),De=M.getActiveMipmapLevel();M.setRenderTarget(_e),M.getClearColor(Q),de=M.getClearAlpha(),de<1&&M.setClearColor(16777215,.5),M.clear(),te&&Ae.render(j);const qe=M.toneMapping;M.toneMapping=ii;const Ze=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),Ne===!0&&ae.setGlobalState(M.clippingPlanes,W),ma(w,j,W),k.updateMultisampleRenderTarget(_e),k.updateRenderTargetMipmap(_e),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ot=0,wt=V.length;ot<wt;ot++){const Tt=V[ot],{object:lt,geometry:jt,material:Ce,group:dn}=Tt;if(Ce.side===_n&&lt.layers.test(W.layers)){const tt=Ce.side;Ce.side=an,Ce.needsUpdate=!0,Ku(lt,j,W,jt,Ce,dn),Ce.side=tt,Ce.needsUpdate=!0,Ie=!0}}Ie===!0&&(k.updateMultisampleRenderTarget(_e),k.updateRenderTargetMipmap(_e))}M.setRenderTarget(be,Re,De),M.setClearColor(Q,de),Ze!==void 0&&(W.viewport=Ze),M.toneMapping=qe}function ma(w,V,j){const W=V.isScene===!0?V.overrideMaterial:null;for(let H=0,_e=w.length;H<_e;H++){const Me=w[H],{object:be,geometry:Re,group:De}=Me;let qe=Me.material;qe.allowOverride===!0&&W!==null&&(qe=W),be.layers.test(j.layers)&&Ku(be,V,j,Re,qe,De)}}function Ku(w,V,j,W,H,_e){w.onBeforeRender(M,V,j,W,H,_e),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(M,V,j,W,w,_e),H.transparent===!0&&H.side===_n&&H.forceSinglePass===!1?(H.side=an,H.needsUpdate=!0,M.renderBufferDirect(j,V,W,H,w,_e),H.side=Ei,H.needsUpdate=!0,M.renderBufferDirect(j,V,W,H,w,_e),H.side=_n):M.renderBufferDirect(j,V,W,H,w,_e),w.onAfterRender(M,V,j,W,H,_e)}function ga(w,V,j){V.isScene!==!0&&(V=re);const W=S.get(w),H=T.state.lights,_e=T.state.shadowsArray,Me=H.state.version,be=fe.getParameters(w,H.state,_e,V,j),Re=fe.getProgramCacheKey(be);let De=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,W.fog=V.fog;const qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=q.get(w.envMap||W.environment,qe),W.envMapRotation=W.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,De===void 0&&(w.addEventListener("dispose",nt),De=new Map,W.programs=De);let Ze=De.get(Re);if(Ze!==void 0){if(W.currentProgram===Ze&&W.lightsStateVersion===Me)return Ju(w,be),Ze}else be.uniforms=fe.getUniforms(w),w.onBeforeCompile(be,M),Ze=fe.acquireProgram(be,Re),De.set(Re,Ze),W.uniforms=be.uniforms;const Ie=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=ae.uniform),Ju(w,be),W.needsLights=bm(w),W.lightsStateVersion=Me,W.needsLights&&(Ie.ambientLightColor.value=H.state.ambient,Ie.lightProbe.value=H.state.probe,Ie.directionalLights.value=H.state.directional,Ie.directionalLightShadows.value=H.state.directionalShadow,Ie.spotLights.value=H.state.spot,Ie.spotLightShadows.value=H.state.spotShadow,Ie.rectAreaLights.value=H.state.rectArea,Ie.ltc_1.value=H.state.rectAreaLTC1,Ie.ltc_2.value=H.state.rectAreaLTC2,Ie.pointLights.value=H.state.point,Ie.pointLightShadows.value=H.state.pointShadow,Ie.hemisphereLights.value=H.state.hemi,Ie.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ie.spotLightMatrix.value=H.state.spotLightMatrix,Ie.spotLightMap.value=H.state.spotLightMap,Ie.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Ze,W.uniformsList=null,Ze}function Yu(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=ro.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Ju(w,V){const j=S.get(w);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.batchingColor=V.batchingColor,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function gm(w,V,j,W,H){V.isScene!==!0&&(V=re),k.resetTextureUnits();const _e=V.fog,Me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?V.environment:null,be=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:nn,Re=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,De=q.get(W.envMap||Me,Re),qe=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ze=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ie=!!j.morphAttributes.position,ot=!!j.morphAttributes.normal,wt=!!j.morphAttributes.color;let Tt=ii;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Tt=M.toneMapping);const lt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,jt=lt!==void 0?lt.length:0,Ce=S.get(W),dn=T.state.lights;if(Ne===!0&&(He===!0||w!==N)){const Ot=w===N&&W.id===B;ae.setState(W,w,Ot)}let tt=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==dn.state.version||Ce.outputColorSpace!==be||H.isBatchedMesh&&Ce.batching===!1||!H.isBatchedMesh&&Ce.batching===!0||H.isBatchedMesh&&Ce.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ce.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ce.instancing===!1||!H.isInstancedMesh&&Ce.instancing===!0||H.isSkinnedMesh&&Ce.skinning===!1||!H.isSkinnedMesh&&Ce.skinning===!0||H.isInstancedMesh&&Ce.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ce.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ce.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ce.instancingMorph===!1&&H.morphTexture!==null||Ce.envMap!==De||W.fog===!0&&Ce.fog!==_e||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ae.numPlanes||Ce.numIntersection!==ae.numIntersection)||Ce.vertexAlphas!==qe||Ce.vertexTangents!==Ze||Ce.morphTargets!==Ie||Ce.morphNormals!==ot||Ce.morphColors!==wt||Ce.toneMapping!==Tt||Ce.morphTargetsCount!==jt)&&(tt=!0):(tt=!0,Ce.__version=W.version);let On=Ce.currentProgram;tt===!0&&(On=ga(W,V,H));let jn=!1,$i=!1,Mr=!1;const ut=On.getUniforms(),Ht=Ce.uniforms;if(he.useProgram(On.program)&&(jn=!0,$i=!0,Mr=!0),W.id!==B&&(B=W.id,$i=!0),jn||N!==w){he.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ut.setValue(P,"projectionMatrix",w.projectionMatrix),ut.setValue(P,"viewMatrix",w.matrixWorldInverse);const Pi=ut.map.cameraPosition;Pi!==void 0&&Pi.setValue(P,je.setFromMatrixPosition(w.matrixWorld)),ke.logarithmicDepthBuffer&&ut.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ut.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),N!==w&&(N=w,$i=!0,Mr=!0)}if(Ce.needsLights&&(dn.state.directionalShadowMap.length>0&&ut.setValue(P,"directionalShadowMap",dn.state.directionalShadowMap,k),dn.state.spotShadowMap.length>0&&ut.setValue(P,"spotShadowMap",dn.state.spotShadowMap,k),dn.state.pointShadowMap.length>0&&ut.setValue(P,"pointShadowMap",dn.state.pointShadowMap,k)),H.isSkinnedMesh){ut.setOptional(P,H,"bindMatrix"),ut.setOptional(P,H,"bindMatrixInverse");const Ot=H.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),ut.setValue(P,"boneTexture",Ot.boneTexture,k))}H.isBatchedMesh&&(ut.setOptional(P,H,"batchingTexture"),ut.setValue(P,"batchingTexture",H._matricesTexture,k),ut.setOptional(P,H,"batchingIdTexture"),ut.setValue(P,"batchingIdTexture",H._indirectTexture,k),ut.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&ut.setValue(P,"batchingColorTexture",H._colorsTexture,k));const Ci=j.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&ye.update(H,j,On),($i||Ce.receiveShadow!==H.receiveShadow)&&(Ce.receiveShadow=H.receiveShadow,ut.setValue(P,"receiveShadow",H.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&V.environment!==null&&(Ht.envMapIntensity.value=V.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=cM()),$i&&(ut.setValue(P,"toneMappingExposure",M.toneMappingExposure),Ce.needsLights&&_m(Ht,Mr),_e&&W.fog===!0&&Le.refreshFogUniforms(Ht,_e),Le.refreshMaterialUniforms(Ht,W,ce,J,T.state.transmissionRenderTarget[w.id]),ro.upload(P,Yu(Ce),Ht,k)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ro.upload(P,Yu(Ce),Ht,k),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ut.setValue(P,"center",H.center),ut.setValue(P,"modelViewMatrix",H.modelViewMatrix),ut.setValue(P,"normalMatrix",H.normalMatrix),ut.setValue(P,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ot=W.uniformsGroups;for(let Pi=0,Sr=Ot.length;Pi<Sr;Pi++){const Zu=Ot[Pi];Se.update(Zu,On),Se.bind(Zu,On)}}return On}function _m(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function bm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,V,j){const W=S.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),S.get(w.texture).__webglTexture=V,S.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:j,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){const j=S.get(w);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0};const xm=P.createFramebuffer();this.setRenderTarget=function(w,V=0,j=0){F=w,R=V,L=j;let W=null,H=!1,_e=!1;if(w){const be=S.get(w);if(be.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(P.FRAMEBUFFER,be.__webglFramebuffer),z.copy(w.viewport),O.copy(w.scissor),ee=w.scissorTest,he.viewport(z),he.scissor(O),he.setScissorTest(ee),B=-1;return}else if(be.__webglFramebuffer===void 0)k.setupRenderTarget(w);else if(be.__hasExternalTextures)k.rebindTextures(w,S.get(w.texture).__webglTexture,S.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const qe=w.depthTexture;if(be.__boundDepthTexture!==qe){if(qe!==null&&S.has(qe)&&(w.width!==qe.image.width||w.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(w)}}const Re=w.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(_e=!0);const De=S.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[V])?W=De[V][j]:W=De[V],H=!0):w.samples>0&&k.useMultisampledRTT(w)===!1?W=S.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?W=De[j]:W=De,z.copy(w.viewport),O.copy(w.scissor),ee=w.scissorTest}else z.copy(X).multiplyScalar(ce).floor(),O.copy(le).multiplyScalar(ce).floor(),ee=ue;if(j!==0&&(W=xm),he.bindFramebuffer(P.FRAMEBUFFER,W)&&he.drawBuffers(w,W),he.viewport(z),he.scissor(O),he.setScissorTest(ee),H){const be=S.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+V,be.__webglTexture,j)}else if(_e){const be=V;for(let Re=0;Re<w.textures.length;Re++){const De=S.get(w.textures[Re]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Re,De.__webglTexture,j,be)}}else if(w!==null&&j!==0){const be=S.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,be.__webglTexture,j)}B=-1},this.readRenderTargetPixels=function(w,V,j,W,H,_e,Me,be=0){if(!(w&&w.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Re=Re[Me]),Re){he.bindFramebuffer(P.FRAMEBUFFER,Re);try{const De=w.textures[be],qe=De.format,Ze=De.type;if(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be),!ke.textureFormatReadable(qe)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Ze)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-W&&j>=0&&j<=w.height-H&&P.readPixels(V,j,W,H,pe.convert(qe),pe.convert(Ze),_e)}finally{const De=F!==null?S.get(F).__webglFramebuffer:null;he.bindFramebuffer(P.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(w,V,j,W,H,_e,Me,be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Re=Re[Me]),Re)if(V>=0&&V<=w.width-W&&j>=0&&j<=w.height-H){he.bindFramebuffer(P.FRAMEBUFFER,Re);const De=w.textures[be],qe=De.format,Ze=De.type;if(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be),!ke.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ie),P.bufferData(P.PIXEL_PACK_BUFFER,_e.byteLength,P.STREAM_READ),P.readPixels(V,j,W,H,pe.convert(qe),pe.convert(Ze),0);const ot=F!==null?S.get(F).__webglFramebuffer:null;he.bindFramebuffer(P.FRAMEBUFFER,ot);const wt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await rg(P,wt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ie),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,_e),P.deleteBuffer(Ie),P.deleteSync(wt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,j=0){const W=Math.pow(2,-j),H=Math.floor(w.image.width*W),_e=Math.floor(w.image.height*W),Me=V!==null?V.x:0,be=V!==null?V.y:0;k.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,j,0,0,Me,be,H,_e),he.unbindTexture()};const vm=P.createFramebuffer(),ym=P.createFramebuffer();this.copyTextureToTexture=function(w,V,j=null,W=null,H=0,_e=0){let Me,be,Re,De,qe,Ze,Ie,ot,wt;const Tt=w.isCompressedTexture?w.mipmaps[_e]:w.image;if(j!==null)Me=j.max.x-j.min.x,be=j.max.y-j.min.y,Re=j.isBox3?j.max.z-j.min.z:1,De=j.min.x,qe=j.min.y,Ze=j.isBox3?j.min.z:0;else{const Ht=Math.pow(2,-H);Me=Math.floor(Tt.width*Ht),be=Math.floor(Tt.height*Ht),w.isDataArrayTexture?Re=Tt.depth:w.isData3DTexture?Re=Math.floor(Tt.depth*Ht):Re=1,De=0,qe=0,Ze=0}W!==null?(Ie=W.x,ot=W.y,wt=W.z):(Ie=0,ot=0,wt=0);const lt=pe.convert(V.format),jt=pe.convert(V.type);let Ce;V.isData3DTexture?(k.setTexture3D(V,0),Ce=P.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(k.setTexture2DArray(V,0),Ce=P.TEXTURE_2D_ARRAY):(k.setTexture2D(V,0),Ce=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment);const dn=P.getParameter(P.UNPACK_ROW_LENGTH),tt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),On=P.getParameter(P.UNPACK_SKIP_PIXELS),jn=P.getParameter(P.UNPACK_SKIP_ROWS),$i=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Tt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Tt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,De),P.pixelStorei(P.UNPACK_SKIP_ROWS,qe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ze);const Mr=w.isDataArrayTexture||w.isData3DTexture,ut=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const Ht=S.get(w),Ci=S.get(V),Ot=S.get(Ht.__renderTarget),Pi=S.get(Ci.__renderTarget);he.bindFramebuffer(P.READ_FRAMEBUFFER,Ot.__webglFramebuffer),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Sr=0;Sr<Re;Sr++)Mr&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,S.get(w).__webglTexture,H,Ze+Sr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,S.get(V).__webglTexture,_e,wt+Sr)),P.blitFramebuffer(De,qe,Me,be,Ie,ot,Me,be,P.DEPTH_BUFFER_BIT,P.NEAREST);he.bindFramebuffer(P.READ_FRAMEBUFFER,null),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||S.has(w)){const Ht=S.get(w),Ci=S.get(V);he.bindFramebuffer(P.READ_FRAMEBUFFER,vm),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,ym);for(let Ot=0;Ot<Re;Ot++)Mr?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ht.__webglTexture,H,Ze+Ot):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ht.__webglTexture,H),ut?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ci.__webglTexture,_e,wt+Ot):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ci.__webglTexture,_e),H!==0?P.blitFramebuffer(De,qe,Me,be,Ie,ot,Me,be,P.COLOR_BUFFER_BIT,P.NEAREST):ut?P.copyTexSubImage3D(Ce,_e,Ie,ot,wt+Ot,De,qe,Me,be):P.copyTexSubImage2D(Ce,_e,Ie,ot,De,qe,Me,be);he.bindFramebuffer(P.READ_FRAMEBUFFER,null),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ut?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Ce,_e,Ie,ot,wt,Me,be,Re,lt,jt,Tt.data):V.isCompressedArrayTexture?P.compressedTexSubImage3D(Ce,_e,Ie,ot,wt,Me,be,Re,lt,Tt.data):P.texSubImage3D(Ce,_e,Ie,ot,wt,Me,be,Re,lt,jt,Tt):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,_e,Ie,ot,Me,be,lt,jt,Tt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,_e,Ie,ot,Tt.width,Tt.height,lt,Tt.data):P.texSubImage2D(P.TEXTURE_2D,_e,Ie,ot,Me,be,lt,jt,Tt);P.pixelStorei(P.UNPACK_ROW_LENGTH,dn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,tt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,On),P.pixelStorei(P.UNPACK_SKIP_ROWS,jn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,$i),_e===0&&V.generateMipmaps&&P.generateMipmap(Ce),he.unbindTexture()},this.initRenderTarget=function(w){S.get(w).__webglFramebuffer===void 0&&k.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?k.setTextureCube(w,0):w.isData3DTexture?k.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?k.setTexture2DArray(w,0):k.setTexture2D(w,0),he.unbindTexture()},this.resetState=function(){R=0,L=0,F=null,he.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Sf(s,e){if(e===qm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Sc||e===Ed){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Sc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function hM(s){const e=new Map,t=new Map,n=s.clone();return ap(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ap(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)ap(s.children[n],e.children[n],t)}class fM extends vs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _M(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new Tf(t,$e.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Tf(t,$e.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new PM(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const u=Ws.extractUrlBase(e);a=Ws.resolveURL(u,this.path)}else a=Ws.extractUrlBase(e);this.manager.itemStart(e);const o=function(u){i?i(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Zd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{r.parse(u,a,function(f){t(f),r.manager.itemEnd(e)},o)}catch(f){o(f)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===op){try{a[$e.KHR_BINARY_GLTF]=new DM(e)}catch(l){i&&i(l);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new WM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const l=this.pluginCallbacks[f](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[l.name]=l,a[l.name]=!0}if(r.extensionsUsed)for(let f=0;f<r.extensionsUsed.length;++f){const l=r.extensionsUsed[f],h=r.extensionsRequired||[];switch(l){case $e.KHR_MATERIALS_UNLIT:a[l]=new mM;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[l]=new LM(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[l]=new IM;break;case $e.KHR_MESH_QUANTIZATION:a[l]=new FM;break;default:h.indexOf(l)>=0&&o[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function dM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Rt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pM{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const f=new Ve(16777215);c.color!==void 0&&f.setRGB(c.color[0],c.color[1],c.color[2],nn);const l=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new eb(f),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new xo(f),u.distance=l;break;case"spot":u=new Z_(f),u.distance=l,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),Yn(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class mM{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Hn}extendParams(e,t,n){const i=[];e.color=new Ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],nn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,kt))}return Promise.all(i)}}class gM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class _M{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ne(r,r)}return Promise.all(i)}}class bM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class xM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class vM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],nn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,kt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class yM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class MM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(r[0],r[1],r[2],nn),Promise.all(i)}}class SM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class TM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(r[0],r[1],r[2],nn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,kt)),Promise.all(i)}}class EM{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class wM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class AM{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class RM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return n.loadTextureImage(e,a.source,c)}}class CM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return n.loadTextureImage(e,a.source,c)}}class Tf{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,u=i.byteLength||0,f=i.count,l=i.byteStride,h=new Uint8Array(o,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,l,h,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(f*l);return a.decodeGltfBuffer(new Uint8Array(d),f,l,h,i.mode,i.filter),d})})}else return null}}class PM{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==Cn.TRIANGLES&&u.mode!==Cn.TRIANGLE_STRIP&&u.mode!==Cn.TRIANGLE_FAN&&u.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const u in a)o.push(this.parser.getDependency("accessor",a[u]).then(f=>(c[u]=f,c[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{const f=u.pop(),l=f.isGroup?f.children:[f],h=u[0].count,d=[];for(const g of l){const _=new Ge,m=new D,p=new Nn,b=new D(1,1,1),v=new Id(g.geometry,g.material,h);for(let x=0;x<h;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&b.fromBufferAttribute(c.SCALE,x),v.setMatrixAt(x,_.compose(m,p,b));for(const x in c)if(x==="_COLOR_0"){const T=c[x];v.instanceColor=new Ec(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);mt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return f.isGroup?(f.clear(),f.add(...d),f):d[0]}))}}const op="glTF",Ds=12,Ef={JSON:1313821514,BIN:5130562};class DM{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ds),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==op)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ds,r=new DataView(e,Ds);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Ef.JSON){const u=new Uint8Array(e,Ds+a,o);this.content=n.decode(u)}else if(c===Ef.BIN){const u=Ds+a;this.body=e.slice(u,u+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class LM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},u={};for(const f in a){const l=Ic[f]||f.toLowerCase();o[l]=a[f]}for(const f in e.attributes){const l=Ic[f]||f.toLowerCase();if(a[f]!==void 0){const h=n.accessors[e.attributes[f]],d=Jr[h.componentType];u[l]=d.name,c[l]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(f){return new Promise(function(l,h){i.decodeDracoFile(f,function(d){for(const g in d.attributes){const _=d.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}l(d)},o,u,nn,h)})})}}class IM{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class FM{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class lp extends _s{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,u=o*3,f=i-t,l=(n-t)/f,h=l*l,d=h*l,g=e*u,_=g-u,m=-2*d+3*h,p=d-h,b=1-m,v=p-h+l;for(let x=0;x!==o;x++){const T=a[_+x+o],E=a[_+x+c]*f,A=a[g+x+o],y=a[g+x]*f;r[x]=b*T+v*E+m*A+p*y}return r}}const NM=new Nn;class OM extends lp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return NM.fromArray(r).normalize().toArray(r),r}}const Cn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wf={9728:Lt,9729:It,9984:bd,9985:Qa,9986:Ns,9987:yi},Af={33071:Qn,33648:co,10497:qi},Ml={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ic={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},UM={CUBICSPLINE:void 0,LINEAR:$s,STEP:Zs},Sl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Jt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ei})),s.DefaultMaterial}function sr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function BM(s,e,t){let n=!1,i=!1,r=!1;for(let u=0,f=e.length;u<f;u++){const l=e[u];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(i=!0),l.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let u=0,f=e.length;u<f;u++){const l=e[u];if(n){const h=l.POSITION!==void 0?t.getDependency("accessor",l.POSITION):s.attributes.position;a.push(h)}if(i){const h=l.NORMAL!==void 0?t.getDependency("accessor",l.NORMAL):s.attributes.normal;o.push(h)}if(r){const h=l.COLOR_0!==void 0?t.getDependency("accessor",l.COLOR_0):s.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(u){const f=u[0],l=u[1],h=u[2];return n&&(s.morphAttributes.position=f),i&&(s.morphAttributes.normal=l),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function zM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function VM(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Tl(t.attributes):e=s.indices+":"+Tl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Tl(s.targets[n]);return e}function Tl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Fc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function HM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const GM=new Ge;class WM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new $d(this.options.manager):this.textureLoader=new tb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return sr(r,o,i),Yn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[u,f]of a.children.entries())r(f,o.children[u])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Ws.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ml[i.type],o=Jr[i.componentType],c=i.normalized===!0,u=new o(i.count*a);return Promise.resolve(new Gt(u,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Ml[i.type],u=Jr[i.componentType],f=u.BYTES_PER_ELEMENT,l=f*c,h=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==l){const p=Math.floor(h/d),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(b);v||(_=new u(o,p*d,i.count*d/f),v=new Bg(_,d/f),t.cache.add(b,v)),m=new uu(v,c,h%d/f,g)}else o===null?_=new u(i.count*c):_=new u(o,h,i.count*c),m=new Gt(_,c,g);if(i.sparse!==void 0){const p=Ml.SCALAR,b=Jr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,T=new b(a[1],v,i.sparse.count*p),E=new u(a[2],x,i.sparse.count*c);o!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,y=T.length;A<y;A++){const M=T[A];if(m.setX(M,E[A*c]),c>=2&&m.setY(M,E[A*c+1]),c>=3&&m.setZ(M,E[A*c+2]),c>=4&&m.setW(M,E[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=a.name||o.name||"",f.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(f.name=o.uri);const h=(r.samplers||{})[a.sampler]||{};return f.magFilter=wf[h.magFilter]||It,f.minFilter=wf[h.minFilter]||yi,f.wrapS=Af[h.wrapS]||qi,f.wrapT=Af[h.wrapT]||qi,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==Lt&&f.minFilter!==It,i.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(l=>l.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(l){u=!0;const h=new Blob([l],{type:a.mimeType});return c=o.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(c).then(function(l){return new Promise(function(h,d){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Bt(_);m.needsUpdate=!0,h(m)}),t.load(Ws.resolveURL(l,r.path),g,void 0,d)})}).then(function(l){return u===!0&&o.revokeObjectURL(c),Yn(l,a),l.userData.mimeType=a.mimeType||HM(a.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),l});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Nd,ri.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Fd,ri.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Jt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},u=[];if(c[$e.KHR_MATERIALS_UNLIT]){const l=i[$e.KHR_MATERIALS_UNLIT];a=l.getMaterialType(),u.push(l.extendParams(o,r,t))}else{const l=r.pbrMetallicRoughness||{};if(o.color=new Ve(1,1,1),o.opacity=1,Array.isArray(l.baseColorFactor)){const h=l.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],nn),o.opacity=h[3]}l.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",l.baseColorTexture,kt)),o.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,o.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",l.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",l.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=_n);const f=r.alphaMode||Sl.OPAQUE;if(f===Sl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,f===Sl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Hn&&(u.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ne(1,1),r.normalTexture.scale!==void 0)){const l=r.normalTexture.scale;o.normalScale.set(l,l)}if(r.occlusionTexture!==void 0&&a!==Hn&&(u.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Hn){const l=r.emissiveFactor;o.emissive=new Ve().setRGB(l[0],l[1],l[2],nn)}return r.emissiveTexture!==void 0&&a!==Hn&&u.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,kt)),Promise.all(u).then(function(){const l=new a(o);return r.name&&(l.name=r.name),Yn(l,r),t.associations.set(l,{materials:e}),r.extensions&&sr(i,l,r),l})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Rf(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o],f=VM(u),l=i[f];if(l)a.push(l.promise);else{let h;u.extensions&&u.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?h=r(u):h=Rf(new Vt,u,t),i[f]={primitive:u,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,u=a.length;c<u;c++){const f=a[c].material===void 0?kM(this.cache):this.getDependency("material",a[c].material);o.push(f)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const u=c.slice(0,c.length-1),f=c[c.length-1],l=[];for(let d=0,g=f.length;d<g;d++){const _=f[d],m=a[d];let p;const b=u[d];if(m.mode===Cn.TRIANGLES||m.mode===Cn.TRIANGLE_STRIP||m.mode===Cn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Gg(_,b):new pt(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Cn.TRIANGLE_STRIP?p.geometry=Sf(p.geometry,Ed):m.mode===Cn.TRIANGLE_FAN&&(p.geometry=Sf(p.geometry,Sc));else if(m.mode===Cn.LINES)p=new Yg(_,b);else if(m.mode===Cn.LINE_STRIP)p=new pu(_,b);else if(m.mode===Cn.LINE_LOOP)p=new Jg(_,b);else if(m.mode===Cn.POINTS)p=new Zg(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&zM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Yn(p,r),m.extensions&&sr(i,p,m),t.assignFinalMaterial(p),l.push(p)}for(let d=0,g=l.length;d<g;d++)t.associations.set(l[d],{meshes:e,primitives:d});if(l.length===1)return r.extensions&&sr(i,l[0],r),l[0];const h=new Mi;r.extensions&&sr(i,h,r),t.associations.set(h,{meshes:e});for(let d=0,g=l.length;d<g;d++)h.add(l[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(dr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new fa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let u=0,f=a.length;u<f;u++){const l=a[u];if(l){o.push(l);const h=new Ge;r!==null&&h.fromArray(r.array,u*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new fu(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],u=[],f=[];for(let l=0,h=i.channels.length;l<h;l++){const d=i.channels[l],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",b)),u.push(g),f.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(u),Promise.all(f)]).then(function(l){const h=l[0],d=l[1],g=l[2],_=l[3],m=l[4],p=[];for(let v=0,x=h.length;v<x;v++){const T=h[v],E=d[v],A=g[v],y=_[v],M=m[v];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const I=n._createAnimationTracks(T,E,A,y,M);if(I)for(let R=0;R<I.length;R++)p.push(I[R])}const b=new W_(r,void 0,p);return Yn(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,u=i.weights.length;c<u;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let u=0,f=o.length;u<f;u++)a.push(n.getDependency("node",o[u]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(u){const f=u[0],l=u[1],h=u[2];h!==null&&f.traverse(function(d){d.isSkinnedMesh&&d.bind(h,GM)});for(let d=0,g=l.length;d<g;d++)f.add(l[d]);if(f.userData.pivot!==void 0&&l.length>0){const d=f.userData.pivot,g=l[0];f.pivot=new D().fromArray(d),f.position.x-=d[0],f.position.y-=d[1],f.position.z-=d[2],g.position.set(0,0,0),delete f.userData.pivot}return f})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(u){return i._getNodeRef(i.cameraCache,r.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),this.nodeCache[e]=Promise.all(o).then(function(u){let f;if(r.isBone===!0?f=new Ld:u.length>1?f=new Mi:u.length===1?f=u[0]:f=new mt,f!==u[0])for(let l=0,h=u.length;l<h;l++)f.add(u[l]);if(r.name&&(f.userData.name=r.name,f.name=a),Yn(f,r),r.extensions&&sr(n,f,r),r.matrix!==void 0){const l=new Ge;l.fromArray(r.matrix),f.applyMatrix4(l)}else r.translation!==void 0&&f.position.fromArray(r.translation),r.rotation!==void 0&&f.quaternion.fromArray(r.rotation),r.scale!==void 0&&f.scale.fromArray(r.scale);if(!i.associations.has(f))i.associations.set(f,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const l=i.associations.get(f);i.associations.set(f,{...l})}return i.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Mi;n.name&&(r.name=i.createUniqueName(n.name)),Yn(r,n),n.extensions&&sr(t,r,n);const a=n.nodes||[],o=[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let f=0,l=c.length;f<l;f++){const h=c[f];h.parent!==null?r.add(hM(h)):r.add(h)}const u=f=>{const l=new Map;for(const[h,d]of i.associations)(h instanceof ri||h instanceof Bt)&&l.set(h,d);return f.traverse(h=>{const d=i.associations.get(h);d!=null&&l.set(h,d)}),l};return i.associations=u(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];Ui[r.path]===Ui.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(o);let u;switch(Ui[r.path]){case Ui.weights:u=as;break;case Ui.rotation:u=os;break;case Ui.translation:case Ui.scale:u=ls;break;default:n.itemSize===1?u=as:u=ls;break}const f=i.interpolation!==void 0?UM[i.interpolation]:$s,l=this._getArrayFromAccessor(n);for(let h=0,d=c.length;h<d;h++){const g=new u(c[h]+"."+Ui[r.path],t.array,l,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Fc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof os?OM:lp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function jM(s,e,t){const n=e.attributes,i=new Tn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,u=o.max;if(c!==void 0&&u!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(u[0],u[1],u[2])),o.normalized){const f=Fc(Jr[o.componentType]);i.min.multiplyScalar(f),i.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new D,c=new D;for(let u=0,f=r.length;u<f;u++){const l=r[u];if(l.POSITION!==void 0){const h=t.json.accessors[l.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){const _=Fc(Jr[h.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new li;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Rf(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=Ic[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Qe.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Yn(s,e),jM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?BM(s,e.targets,t):s})}const Cf={type:"change"},Su={type:"start"},cp={type:"end"},Ka=new gs,Pf=new ki,qM=Math.cos(70*dr.DEG2RAD),Dt=new D,rn=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},El=1e-6;class XM extends gb{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xr.ROTATE,MIDDLE:Xr.DOLLY,RIGHT:Xr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Nn,this._lastTargetPosition=new D,this._quat=new Nn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zh,this._sphericalDelta=new Zh,this._scale=1,this._panOffset=new D,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new D,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=YM.bind(this),this._onPointerDown=KM.bind(this),this._onPointerUp=JM.bind(this),this._onContextMenu=iS.bind(this),this._onMouseWheel=QM.bind(this),this._onKeyDown=eS.bind(this),this._onTouchStart=tS.bind(this),this._onTouchMove=nS.bind(this),this._onMouseDown=ZM.bind(this),this._onMouseMove=$M.bind(this),this._interceptControlDown=rS.bind(this),this._interceptControlUp=sS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cf),this.update(),this.state=ct.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),i<-Math.PI?i+=rn:i>Math.PI&&(i-=rn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Dt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const u=new D(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ka.origin.copy(this.object.position),Ka.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ka.direction))<qM?this.object.lookAt(this.target):(Pf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ka.intersectPlane(Pf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>El||8*(1-this._lastQuaternion.dot(this.object.quaternion))>El||this._lastTargetPosition.distanceToSquared(this.target)>El?(this.dispatchEvent(Cf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Dt.copy(i).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function KM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function YM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function JM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cp),this.state=ct.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ZM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ct.DOLLY;break;case Xr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ct.ROTATE}break;case Xr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Su)}function $M(s){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function QM(s){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(s.preventDefault(),this.dispatchEvent(Su),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(cp))}function eS(s){this.enabled!==!1&&this._handleKeyDown(s)}function tS(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ct.TOUCH_ROTATE;break;case Gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ct.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Su)}function nS(s){switch(this._trackPointer(s),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ct.NONE}}function iS(s){this.enabled!==!1&&s.preventDefault()}function rS(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sS(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const so={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class da{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const aS=new fa(-1,1,1,-1,0,1);class oS extends Vt{constructor(){super(),this.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new bt([0,2,0,0,2,0],2))}}const lS=new oS;class up{constructor(e){this._mesh=new pt(lS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,aS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class cS extends da{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bo.clone(e.uniforms),this.material=new Yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new up(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Df extends da{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class uS extends da{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ne);this._width=n.width,this._height=n.height,t=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cS(so),this.copyPass.material.blending=ni,this.timer=new rb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Df!==void 0&&(a instanceof Df?n=!0:a instanceof uS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fS extends da{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ve}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const dS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class cs extends da{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new Ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,a,{type:Mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const l=new on(r,a,{type:Mn});l.texture.name="UnrealBloomPass.h"+f,l.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(l);const h=new on(r,a,{type:Mn});h.texture.name="UnrealBloomPass.v"+f,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}const o=dS;this.highPassUniforms=bo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Yt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ne(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=bo.clone(so.uniforms),this.blendMaterial=new Yt({uniforms:this.copyUniforms,vertexShader:so.vertexShader,fragmentShader:so.fragmentShader,premultipliedAlpha:!0,blending:Nl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ve,this._oldClearAlpha=1,this._basic=new Hn,this._fsQuad=new up(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=cs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=cs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new Yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}cs.BlurDirectionX=new ne(1,0);cs.BlurDirectionY=new ne(0,1);const Lf=new D,pS=new Nn,If=new D;class Ff extends mt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const Kn=new Ge,mS=new Ge;class gS{constructor(e={}){const t=this;let n,i,r,a;const o={camera:{style:""},objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c;const u=document.createElement("div");u.style.transformOrigin="0 0",u.style.pointerEvents="none",c.appendChild(u);const f=document.createElement("div");f.style.transformStyle="preserve-3d",u.appendChild(f),this.getSize=function(){return{width:n,height:i}},this.render=function(m,p){const b=p.projectionMatrix.elements[5]*a;p.view&&p.view.enabled?(u.style.transform=`translate( ${-p.view.offsetX*(n/p.view.width)}px, ${-p.view.offsetY*(i/p.view.height)}px )`,u.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):u.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let v,x;p.isOrthographicCamera&&(v=-(p.right+p.left)/2,x=(p.top+p.bottom)/2);const T=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,E=p.isOrthographicCamera?`scale( ${T} )scale(`+b+")translate("+l(v)+"px,"+l(x)+"px)"+h(p.matrixWorldInverse):`scale( ${T} )translateZ(`+b+"px)"+h(p.matrixWorldInverse),y=(p.isPerspectiveCamera?"perspective("+b+"px) ":"")+E+"translate("+r+"px,"+a+"px)";o.camera.style!==y&&(f.style.transform=y,o.camera.style=y),_(m,m,p)},this.setSize=function(m,p){n=m,i=p,r=n/2,a=i/2,c.style.width=m+"px",c.style.height=p+"px",u.style.width=m+"px",u.style.height=p+"px",f.style.width=m+"px",f.style.height=p+"px"};function l(m){return Math.abs(m)<1e-10?0:m}function h(m){const p=m.elements;return"matrix3d("+l(p[0])+","+l(-p[1])+","+l(p[2])+","+l(p[3])+","+l(p[4])+","+l(-p[5])+","+l(p[6])+","+l(p[7])+","+l(p[8])+","+l(-p[9])+","+l(p[10])+","+l(p[11])+","+l(p[12])+","+l(-p[13])+","+l(p[14])+","+l(p[15])+")"}function d(m){const p=m.elements;return"translate(-50%,-50%)"+("matrix3d("+l(p[0])+","+l(p[1])+","+l(p[2])+","+l(p[3])+","+l(-p[4])+","+l(-p[5])+","+l(-p[6])+","+l(-p[7])+","+l(p[8])+","+l(p[9])+","+l(p[10])+","+l(p[11])+","+l(p[12])+","+l(p[13])+","+l(p[14])+","+l(p[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let p=0,b=m.children.length;p<b;p++)g(m.children[p])}function _(m,p,b,v){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){const x=m.layers.test(b.layers)===!0,T=m.element;if(T.style.display=x===!0?"":"none",x===!0){m.onBeforeRender(t,p,b);let E;m.isCSS3DSprite?(Kn.copy(b.matrixWorldInverse),Kn.transpose(),m.rotation2D!==0&&Kn.multiply(mS.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(Lf,pS,If),Kn.setPosition(Lf),Kn.scale(If),Kn.elements[3]=0,Kn.elements[7]=0,Kn.elements[11]=0,Kn.elements[15]=1,E=d(Kn)):E=d(m.matrixWorld);const A=o.objects.get(m);if(A===void 0||A.style!==E){T.style.transform=E;const y={style:E};o.objects.set(m,y)}T.parentNode!==f&&f.appendChild(T),m.onAfterRender(t,p,b)}}for(let x=0,T=m.children.length;x<T;x++)_(m.children[x],p,b)}}}class Tu extends mt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ne(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const zr=new D,Nf=new Ge,Of=new Ge,Uf=new D,kf=new D;class _S{constructor(e={}){const t=this;let n,i,r,a;const o={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.sortObjects=!0,this.getSize=function(){return{width:n,height:i}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Nf.copy(_.matrixWorldInverse),Of.multiplyMatrices(_.projectionMatrix,Nf),f(g,g,_),this.sortObjects&&d(g)},this.setSize=function(g,_){n=g,i=_,r=n/2,a=i/2,c.style.width=g+"px",c.style.height=_+"px"};function u(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,m=g.children.length;_<m;_++)u(g.children[_])}function f(g,_,m){if(g.visible===!1){u(g);return}if(g.isCSS2DObject){zr.setFromMatrixPosition(g.matrixWorld),zr.applyMatrix4(Of);const p=zr.z>=-1&&zr.z<=1&&g.layers.test(m.layers)===!0,b=g.element;b.style.display=p===!0?"":"none",p===!0&&(g.onBeforeRender(t,_,m),b.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(zr.x*r+r)+"px,"+(-zr.y*a+a)+"px)",b.parentNode!==c&&c.appendChild(b),g.onAfterRender(t,_,m));const v={distanceToCameraSquared:l(m,g)};o.objects.set(g,v)}for(let p=0,b=g.children.length;p<b;p++)f(g.children[p],_,m)}function l(g,_){return Uf.setFromMatrixPosition(g.matrixWorld),kf.setFromMatrixPosition(_.matrixWorld),Uf.distanceToSquared(kf)}function h(g){const _=[];return g.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function d(g){const _=h(g).sort(function(p,b){if(p.renderOrder!==b.renderOrder)return b.renderOrder-p.renderOrder;const v=o.objects.get(p).distanceToCameraSquared,x=o.objects.get(b).distanceToCameraSquared;return v-x}),m=_.length;for(let p=0,b=_.length;p<b;p++)_[p].element.style.zIndex=m-p}}}var bS=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuec:W:Odkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq;lZkdbk;jYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbhodnawTmbaxa8Acd4fRbbhokaocFeGh5cbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q1jjbfcj1jjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bbarcwf9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfag9c8F1:NghcKtc8F91aicdfa8J9c8N1:Nfg8KRbbG86bbarcVfcba8KahcjeGcr4fghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fag9c8F1:NgicKtc8F91aha8J9c8N1:NfghRbbG86bbarc96fcbahaicjeGcr4fgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbb83bbarcwfaicwf8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbcbaocl49Rh8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E93aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:XseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbaxcefgOavaiaqaDcsGfRbbgscl49RcsGcdtfydbascz6gPEhDavaias9RcsGcdtfydbaOaPfgzascsGgOEhsaOThOdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiaPfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaOfhiazaOfhxxekaxcbalRbbgHEgAaDc;:eSgDfhzaHcsGhCaHcl4hXdndnaHcs0mbazcefhOxekazhOavaiaX9RcsGcdtfydbhzkdndnaCmbaOcefhxxekaOhxavaiaH9RcsGcdtfydbhOkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhAascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaAhDxekaDcefhDkasce4cbasceG9R7amfgmhAkdndnaXcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhzaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkazhsxekascefhskaPce4cbaPceG9R7amfgmhzkdndnaCcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhOaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkaOhlxekalcefhlkaPce4cbaPceG9R7amfgmhOkdndnadcd9hmbabarcetfgDaA87ebaDclfaO87ebaDcdfaz87ebxekabarcdtfgDaABdbaDcwfaOBdbaDclfazBdbkavc;abfaocitfgDazBdbaDaABdlavaicdtfaABdbavc;abfaocefcsGcitfgDaOBdbaDazBdlavaicefgicsGcdtfazBdbavc;abfaocdfcsGcitfgDaABdbaDaOBdlavaiaHcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnaecvfal9nmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk::ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxabaiarcefciGfcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGfgkcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkabaiarcufciGfcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkabakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K1jjbgeabcifc98GfgbBd:K1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk81dbcjwk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:Kwkl8WNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuec:q:6dkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:Ctklbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:183lYud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxavaialfgmar9Rgoad;8qbbcj;abad9Uc;WFbGcjdadca0EhPdndndnadTmbaoadfhscbhzinaeaz9nmdamax9RaD6miabazad2fhHaxaDfhOaPaeaz9RazaPfae6EgAcsfgocl4cifcd4hCavcj;cbfaoc9WGgXcetfhQavcj;cbfaXci2fhLavcj;cbfaXfhKcbhYaoc;ab6h8AincbhodnawTmbaxaYcd4fRbbhokaocFeGhEcbh3avcj;cbfh5indndndndnaEa3cet4ciGgoc9:fPdebdkamaO9RaX6mwavcj;cbfa3aX2faOaX;8qbbaOaAfhOxdkavcj;cbfa3aX2fcbaX;8kbxekamaO9RaC6moaoclVcbawEhraOaCfhocbhidna8Ambamao9Rc;Gb6mbcbhlina5alfhidndndndndndnaOalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaiaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaiczfaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaicafaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngicitc:q1jjbfpbibaic:q:yjjbfRbbgipsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaiaoclffaqc:q:yjjbfRbbfhoxikaic8Wfaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngicitc:q1jjbfpbibaic:q:yjjbfRbbgipsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaiaocwffaqc:q:yjjbfRbbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitc:q1jjbfpbibaic:q:yjjbfRbbgipsaoRbegqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqc:q:yjjbfRbbfhokalc;abfhialcjefaX0meaihlamao9Rc;Fb0mbkkdnaiaX9pmbaici4hlinamao9RcK6mwa5aifhqdndndndndndnaOaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spkbbaaaoclffahc:q:yjjbfRbbfhoxikaqaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spkbbaaaocwffahc:q:yjjbfRbbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpkbbaaaocdffahc:q:yjjbfRbbfhokalcdfhlaiczfgiaX6mbkkaohOaoTmoka5aXfh5a3cefg3cl9hmbkdndndndnawTmbasaYcd4fRbbglciGPlbedwbkaXTmdavcjdfaYfhlavaYfpbdbhgcbhoinalavcj;cbfaofpblbg8JaKaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaQaofpblbg8MaLaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Ecep9Ta8Epxeeeeeeeeeeeeeeeeg8Fp9op9Hp9rg8Eagp9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8LaypmwDKYqk8AExm35Ps8E8Fg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Ug8Fp9Abbbaladfgla8Fa8Ea8Epmlvorlvorlvorlvorp9Ug8Fp9Abbbaladfgla8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9Ug8Fp9Abbbaladfgla8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9AbbbaladfhlaoczfgoaX6mbxikkaXTmeavcjdfaYfhlavaYfpbdbhgcbhoinalavcj;cbfaofpblbg8JaKaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaQaofpblbg8MaLaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Ecep:nea8Epxebebebebebebebebg8Fp9op:bep9rg8Eagp:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8LaypmwDKYqk8AExm35Ps8E8Fg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeg8Fp9Abbbaladfgla8Fa8Ea8Epmlvorlvorlvorlvorp:oeg8Fp9Abbbaladfgla8Fa8Ea8EpmwDqkwDqkwDqkwDqkp:oeg8Fp9Abbbaladfgla8Fa8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9AbbbaladfhlaoczfgoaX6mbxdkkaXTmbcbhocbalcl4gl9Rc8FGhiavcjdfaYfhravaYfpbdbh8Finaravcj;cbfaofpblbggaKaofpblbg8JpmbzeHdOiAlCvXoQrLg8KaQaofpblbg8LaLaofpblbg8MpmbzeHdOiAlCvXoQrLg8NpmbezHdiOAlvCXorQLg8Eaip:Rea8Ealp:Sep9qg8Ea8Fp9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Fa8Ka8NpmwDKYqk8AExm35Ps8E8Fg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Faga8JpmwKDYq8AkEx3m5P8Es8Fgga8La8MpmwKDYq8AkEx3m5P8Es8Fg8JpmbezHdiOAlvCXorQLg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Faga8JpmwDKYqk8AExm35Ps8E8Fg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9AbbbaradfhraoczfgoaX6mbkkaYclfgYad6mbkaHavcjdfaAad2;8qbbavavcjdfaAcufad2fad;8qbbaAazfhzc9:hoaOhxaOmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdaPaeao9RaoaPfae6Eaofgoae6mbkaial9Rhxkcbc99amax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbk:TseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbaxcefgOavaiaqaDcsGfRbbgscl49RcsGcdtfydbascz6gPEhDavaias9RcsGcdtfydbaOaPfgzascsGgOEhsaOThOdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiaPfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaOfhiazaOfhxxekaxcbalRbbgHEgAaDc;:eSgDfhzaHcsGhCaHcl4hXdndnaHcs0mbazcefhOxekazhOavaiaX9RcsGcdtfydbhzkdndnaCmbaOcefhxxekaOhxavaiaH9RcsGcdtfydbhOkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhAascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaAhDxekaDcefhDkasce4cbasceG9R7amfgmhAkdndnaXcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhzaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkazhsxekascefhskaPce4cbaPceG9R7amfgmhzkdndnaCcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhOaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkaOhlxekalcefhlkaPce4cbaPceG9R7amfgmhOkdndnadcd9hmbabarcetfgDaA87ebaDclfaO87ebaDcdfaz87ebxekabarcdtfgDaABdbaDcwfaOBdbaDclfazBdbkavc;abfaocitfgDazBdbaDaABdlavaicdtfaABdbavc;abfaocefcsGcitfgDaOBdbaDazBdlavaicefgicsGcdtfazBdbavc;abfaocdfcsGcitfgDaABdbaDaOBdlavaiaHcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnaecvfal9nmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:2Pliur97eue978Jjjjjbc8W9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskaipxFubbFubbFubbFubbgxpklbdnalTmbcbhvabhdinadczfgmampbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraipblbaDaopmlvorxmPsCXQL358E8Fp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgPp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;MeawaqawaPp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiczfpxbbbbbbbbbbbbbbbbgopklbaiaopklbaiabalcitfgdaeciGglcitgv;8qbbaiaxpkladnalTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraipblaaDaopmlvorxmPsCXQL358E8Fp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgPp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;MeawaqawaPp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkadaiav;8qbbkk:Iwllue97euo978Jjjjjbca9Rhidnaec98GglTmbcbhvabhoinaocKfpx:ji:1S:ji:1S:ji:1S:ji:1SaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkpxibbbibbbibbbibbbp9qgxp;6ep;Negmaxaxp:1ep;7egxaxp;KearaDpmbediwDqkzHOAKY8AEgxczp:Reczp:Sep;6egrarp;Meaxczp:Sep;6egDaDp;Meaqczp:Reczp:Sep;6egqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gxp;KepxFFbbFFbbFFbbFFbbgPp9oamaDp;Meaxp;Keczp:Rep9qgDamarp;Meaxp;KeaPp9oamaqp;Meaxp;Keczp:Rep9qgxpmwDKYqk8AExm35Ps8E8Fgrp5eakclp:RegmpEi:T:j83ibawarp5bampEd:T:j83ibaocwfaDaxpmbezHdiOAlvCXorQLgxp5eampEe:T:j83ibaoaxp5bampEb:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiczfpxbbbbbbbbbbbbbbbbgmpklbaiampklbaiabalcitfgoaeciGgvcitgw;8qbbdnavTmbaipx:ji:1S:ji:1S:ji:1S:ji:1SaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkpxibbbibbbibbbibbbp9qgxp;6ep;Negmaxaxp:1ep;7egxaxp;KearaDpmbediwDqkzHOAKY8AEgxczp:Reczp:Sep;6egrarp;Meaxczp:Sep;6egDaDp;Meaqczp:Reczp:Sep;6egqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gxp;KepxFFbbFFbbFFbbFFbbgPp9oamaDp;Meaxp;Keczp:Rep9qgDamarp;Meaxp;KeaPp9oamaqp;Meaxp;Keczp:Rep9qgxpmwDKYqk8AExm35Ps8E8Fgrp5eakclp:RegmpEi:T:j83iKaiarp5bampEd:T:j83izaiaDaxpmbezHdiOAlvCXorQLgxp5eampEe:T:j83iwaiaxp5bampEb:T:j83ibkaoaiaw;8qbbkk;uddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaic8WfpxbbbbbbbbbbbbbbbbgopklbaicafaopklbaiczfaopklbaiaopklbaiabavcdtfgdalciGgecdtgv;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkadaiav;8qbbkk:CPvdue97euw97eu8Jjjjjbc8W9Rhiaec98Ghldndnadcl9hmbaipxbbbbbbbbbbbbbbbbgvpklbdnalTmbcbhoabhdinadpbbbhradpxbbuJbbuJbbuJbbuJaipblbarcKp:Tep9qgwcep:Seawp9qgDcdp:SeaDp9qgDclp:SeaDp9qgqp;6ep;NegDarcwp:RecKp:SegkarpxFbbbFbbbFbbbFbbbgxp9ogmp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gPp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oaDamakp:Xearczp:RecKp:Segrp:Uep;6ep;MeaPp;Keaxp9op9qaDamakarp:Uep:Xep;6ep;MeaPp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qaDaqawcep:Rep9oawpxebbbebbbebbbebbbp9op9qp;6ep;MeaPp;KecKp:Rep9qpkbbadczfhdaoclfgoal6mbkkalaeSmeaiavpklaaicafabalcdtfgdaeciGglcdtgo;8qbbaiavpklbdnalTmbaipblahraipxbbuJbbuJbbuJbbuJaipblbarcKp:Tep9qgwcep:Seawp9qgDcdp:SeaDp9qgDclp:SeaDp9qgqp;6ep;NegDarcwp:RecKp:SegkarpxFbbbFbbbFbbbFbbbgxp9ogmp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gPp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oaDamakp:Xearczp:RecKp:Segrp:Uep;6ep;MeaPp;Keaxp9op9qaDamakarp:Uep:Xep;6ep;MeaPp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qaDaqawcep:Rep9oawpxebbbebbbebbbebbbp9op9qp;6ep;MeaPp;KecKp:Rep9qpklakadaicafao;8qbbskaipxbbbbbbbbbbbbbbbbgvpklbdnalTmbcbhoabhdinadczfgspxbFu9hbFu9hbFu9hbFu9hadpbbbgDaspbbbgPpmlvorxmPsCXQL358E8Fgmczp:Teaipblbp9qgrcep:Searp9qgwcdp:Seawp9qgwclp:Seawp9qgwcwp:Seawp9qgqp;6ep;NegwaDaPpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbgPp9ogkaDczp:Segxp:Ueamczp:Reczp:Segmp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gDp;KeaPp9oawakaxamp:Uep:Xep;6ep;MeaDp;Keczp:Rep9qgxawaqarcep:Rep9oarpxebbbebbbebbbebbbp9op9qp;6ep;MeaDp;Keczp:Reawamakp:Uep;6ep;MeaDp;KeaPp9op9qgrpmwDKYqk8AExm35Ps8E8FpkbbadaxarpmbezHdiOAlvCXorQLpkbbadcafhdaoclfgoal6mbkkalaeSmbaiczfpxbbbbbbbbbbbbbbbbgrpklbaiarpklbaiabalcitfgdaeciGglcitgo;8qbbaiavpkladnalTmbaipxbFu9hbFu9hbFu9hbFu9haipblbgDaipblzgPpmlvorxmPsCXQL358E8Fgmczp:Teaipblap9qgrcep:Searp9qgwcdp:Seawp9qgwclp:Seawp9qgwcwp:Seawp9qgqp;6ep;NegwaDaPpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbgPp9ogkaDczp:Segxp:Ueamczp:Reczp:Segmp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gDp;KeaPp9oawakaxamp:Uep:Xep;6ep;MeaDp;Keczp:Rep9qgxawaqarcep:Rep9oarpxebbbebbbebbbebbbp9op9qp;6ep;MeaDp;Keczp:Reawamakp:Uep;6ep;MeaDp;KeaPp9op9qgrpmwDKYqk8AExm35Ps8E8FpklzaiaxarpmbezHdiOAlvCXorQLpklbkadaiao;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var b=new Uint8Array(p.length),v=0;v<p.length;++v){var x=p.charCodeAt(v);b[v]=x>96?x-97:x>64?x-39:x+4}for(var T=0,v=0;v<p.length;++v)b[T++]=b[v]<60?n[b[v]]:(b[v]-60)*64+b[++v];return b.buffer.slice(0,T)}function c(p,b,v,x,T,E,A){var y=p.exports.sbrk,M=x+3&-4,I=y(M*T),R=y(E.length),L=new Uint8Array(p.exports.memory.buffer);L.set(E,R);var F=b(I,x,T,R,E.length);if(F==0&&A&&A(I,M,T),v.set(L.subarray(I,I+x*T)),y(I-y(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var u={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},f={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},l=[],h=0;function d(p){var b={object:new Worker(p),pending:0,requests:{}};return b.object.onmessage=function(v){var x=v.data;b.pending-=x.count,b.requests[x.id][x.action](x.value),delete b.requests[x.id]},b}function g(p){for(var b="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),v=new Blob([b],{type:"text/javascript"}),x=URL.createObjectURL(v),T=l.length;T<p;++T)l[T]=d(x);for(var T=p;T<l.length;++T)l[T].object.postMessage({});l.length=p,URL.revokeObjectURL(x)}function _(p,b,v,x,T){for(var E=l[0],A=1;A<l.length;++A)l[A].pending<E.pending&&(E=l[A]);return new Promise(function(y,M){var I=new Uint8Array(v),R=++h;E.pending+=p,E.requests[R]={resolve:y,reject:M},E.object.postMessage({id:R,count:p,size:b,source:I,mode:x,filter:T},[I.buffer])})}function m(p){var b=p.data;if(!b.id)return self.close();self.ready.then(function(v){try{var x=new Uint8Array(b.count*b.size);c(v,v.exports[b.mode],x,b.count,b.size,b.source,v.exports[b.filter]),self.postMessage({id:b.id,count:b.count,action:"resolve",value:x},[x.buffer])}catch(T){self.postMessage({id:b.id,count:b.count,action:"reject",value:T})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,b,v,x,T){c(r,r.exports.meshopt_decodeVertexBuffer,p,b,v,x,r.exports[u[T]])},decodeIndexBuffer:function(p,b,v,x){c(r,r.exports.meshopt_decodeIndexBuffer,p,b,v,x)},decodeIndexSequence:function(p,b,v,x){c(r,r.exports.meshopt_decodeIndexSequence,p,b,v,x)},decodeGltfBuffer:function(p,b,v,x,T,E){c(r,r.exports[f[T]],p,b,v,x,r.exports[u[E]])},decodeGltfBufferAsync:function(p,b,v,x,T){return l.length>0?_(p,b,v,f[x],u[T]):a.then(function(){var E=new Uint8Array(p*b);return c(r,r.exports[f[x]],E,p,b,v,r.exports[u[T]]),E})}}})(),Ls=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},wl={};var Bf;function xS(){return Bf||(Bf=1,(function(s){(function(){var e=function(){this.init()};e.prototype={init:function(){var l=this||t;return l._counter=1e3,l._html5AudioPool=[],l.html5PoolSize=10,l._codecs={},l._howls=[],l._muted=!1,l._volume=1,l._canPlayEvent="canplaythrough",l._navigator=typeof window<"u"&&window.navigator?window.navigator:null,l.masterGain=null,l.noAudio=!1,l.usingWebAudio=!0,l.autoSuspend=!0,l.ctx=null,l.autoUnlock=!0,l._setup(),l},volume:function(l){var h=this||t;if(l=parseFloat(l),h.ctx||f(),typeof l<"u"&&l>=0&&l<=1){if(h._volume=l,h._muted)return h;h.usingWebAudio&&h.masterGain.gain.setValueAtTime(l,t.ctx.currentTime);for(var d=0;d<h._howls.length;d++)if(!h._howls[d]._webAudio)for(var g=h._howls[d]._getSoundIds(),_=0;_<g.length;_++){var m=h._howls[d]._soundById(g[_]);m&&m._node&&(m._node.volume=m._volume*l)}return h}return h._volume},mute:function(l){var h=this||t;h.ctx||f(),h._muted=l,h.usingWebAudio&&h.masterGain.gain.setValueAtTime(l?0:h._volume,t.ctx.currentTime);for(var d=0;d<h._howls.length;d++)if(!h._howls[d]._webAudio)for(var g=h._howls[d]._getSoundIds(),_=0;_<g.length;_++){var m=h._howls[d]._soundById(g[_]);m&&m._node&&(m._node.muted=l?!0:m._muted)}return h},stop:function(){for(var l=this||t,h=0;h<l._howls.length;h++)l._howls[h].stop();return l},unload:function(){for(var l=this||t,h=l._howls.length-1;h>=0;h--)l._howls[h].unload();return l.usingWebAudio&&l.ctx&&typeof l.ctx.close<"u"&&(l.ctx.close(),l.ctx=null,f()),l},codecs:function(l){return(this||t)._codecs[l.replace(/^x-/,"")]},_setup:function(){var l=this||t;if(l.state=l.ctx&&l.ctx.state||"suspended",l._autoSuspend(),!l.usingWebAudio)if(typeof Audio<"u")try{var h=new Audio;typeof h.oncanplaythrough>"u"&&(l._canPlayEvent="canplay")}catch{l.noAudio=!0}else l.noAudio=!0;try{var h=new Audio;h.muted&&(l.noAudio=!0)}catch{}return l.noAudio||l._setupCodecs(),l},_setupCodecs:function(){var l=this||t,h=null;try{h=typeof Audio<"u"?new Audio:null}catch{return l}if(!h||typeof h.canPlayType!="function")return l;var d=h.canPlayType("audio/mpeg;").replace(/^no$/,""),g=l._navigator?l._navigator.userAgent:"",_=g.match(/OPR\/(\d+)/g),m=_&&parseInt(_[0].split("/")[1],10)<33,p=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,b=g.match(/Version\/(.*?) /),v=p&&b&&parseInt(b[1],10)<15;return l._codecs={mp3:!!(!m&&(d||h.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!h.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(h.canPlayType('audio/wav; codecs="1"')||h.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!h.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!h.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(h.canPlayType("audio/x-m4a;")||h.canPlayType("audio/m4a;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(h.canPlayType("audio/x-m4b;")||h.canPlayType("audio/m4b;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(h.canPlayType("audio/x-mp4;")||h.canPlayType("audio/mp4;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!h.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(h.canPlayType("audio/x-flac;")||h.canPlayType("audio/flac;")).replace(/^no$/,"")},l},_unlockAudio:function(){var l=this||t;if(!(l._audioUnlocked||!l.ctx)){l._audioUnlocked=!1,l.autoUnlock=!1,!l._mobileUnloaded&&l.ctx.sampleRate!==44100&&(l._mobileUnloaded=!0,l.unload()),l._scratchBuffer=l.ctx.createBuffer(1,1,22050);var h=function(d){for(;l._html5AudioPool.length<l.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,l._releaseHtml5Audio(g)}catch{l.noAudio=!0;break}for(var _=0;_<l._howls.length;_++)if(!l._howls[_]._webAudio)for(var m=l._howls[_]._getSoundIds(),p=0;p<m.length;p++){var b=l._howls[_]._soundById(m[p]);b&&b._node&&!b._node._unlocked&&(b._node._unlocked=!0,b._node.load())}l._autoResume();var v=l.ctx.createBufferSource();v.buffer=l._scratchBuffer,v.connect(l.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof l.ctx.resume=="function"&&l.ctx.resume(),v.onended=function(){v.disconnect(0),l._audioUnlocked=!0,document.removeEventListener("touchstart",h,!0),document.removeEventListener("touchend",h,!0),document.removeEventListener("click",h,!0),document.removeEventListener("keydown",h,!0);for(var x=0;x<l._howls.length;x++)l._howls[x]._emit("unlock")}};return document.addEventListener("touchstart",h,!0),document.addEventListener("touchend",h,!0),document.addEventListener("click",h,!0),document.addEventListener("keydown",h,!0),l}},_obtainHtml5Audio:function(){var l=this||t;if(l._html5AudioPool.length)return l._html5AudioPool.pop();var h=new Audio().play();return h&&typeof Promise<"u"&&(h instanceof Promise||typeof h.then=="function")&&h.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(l){var h=this||t;return l._unlocked&&h._html5AudioPool.push(l),h},_autoSuspend:function(){var l=this;if(!(!l.autoSuspend||!l.ctx||typeof l.ctx.suspend>"u"||!t.usingWebAudio)){for(var h=0;h<l._howls.length;h++)if(l._howls[h]._webAudio){for(var d=0;d<l._howls[h]._sounds.length;d++)if(!l._howls[h]._sounds[d]._paused)return l}return l._suspendTimer&&clearTimeout(l._suspendTimer),l._suspendTimer=setTimeout(function(){if(l.autoSuspend){l._suspendTimer=null,l.state="suspending";var g=function(){l.state="suspended",l._resumeAfterSuspend&&(delete l._resumeAfterSuspend,l._autoResume())};l.ctx.suspend().then(g,g)}},3e4),l}},_autoResume:function(){var l=this;if(!(!l.ctx||typeof l.ctx.resume>"u"||!t.usingWebAudio))return l.state==="running"&&l.ctx.state!=="interrupted"&&l._suspendTimer?(clearTimeout(l._suspendTimer),l._suspendTimer=null):l.state==="suspended"||l.state==="running"&&l.ctx.state==="interrupted"?(l.ctx.resume().then(function(){l.state="running";for(var h=0;h<l._howls.length;h++)l._howls[h]._emit("resume")}),l._suspendTimer&&(clearTimeout(l._suspendTimer),l._suspendTimer=null)):l.state==="suspending"&&(l._resumeAfterSuspend=!0),l}};var t=new e,n=function(l){var h=this;if(!l.src||l.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}h.init(l)};n.prototype={init:function(l){var h=this;return t.ctx||f(),h._autoplay=l.autoplay||!1,h._format=typeof l.format!="string"?l.format:[l.format],h._html5=l.html5||!1,h._muted=l.mute||!1,h._loop=l.loop||!1,h._pool=l.pool||5,h._preload=typeof l.preload=="boolean"||l.preload==="metadata"?l.preload:!0,h._rate=l.rate||1,h._sprite=l.sprite||{},h._src=typeof l.src!="string"?l.src:[l.src],h._volume=l.volume!==void 0?l.volume:1,h._xhr={method:l.xhr&&l.xhr.method?l.xhr.method:"GET",headers:l.xhr&&l.xhr.headers?l.xhr.headers:null,withCredentials:l.xhr&&l.xhr.withCredentials?l.xhr.withCredentials:!1},h._duration=0,h._state="unloaded",h._sounds=[],h._endTimers={},h._queue=[],h._playLock=!1,h._onend=l.onend?[{fn:l.onend}]:[],h._onfade=l.onfade?[{fn:l.onfade}]:[],h._onload=l.onload?[{fn:l.onload}]:[],h._onloaderror=l.onloaderror?[{fn:l.onloaderror}]:[],h._onplayerror=l.onplayerror?[{fn:l.onplayerror}]:[],h._onpause=l.onpause?[{fn:l.onpause}]:[],h._onplay=l.onplay?[{fn:l.onplay}]:[],h._onstop=l.onstop?[{fn:l.onstop}]:[],h._onmute=l.onmute?[{fn:l.onmute}]:[],h._onvolume=l.onvolume?[{fn:l.onvolume}]:[],h._onrate=l.onrate?[{fn:l.onrate}]:[],h._onseek=l.onseek?[{fn:l.onseek}]:[],h._onunlock=l.onunlock?[{fn:l.onunlock}]:[],h._onresume=[],h._webAudio=t.usingWebAudio&&!h._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(h),h._autoplay&&h._queue.push({event:"play",action:function(){h.play()}}),h._preload&&h._preload!=="none"&&h.load(),h},load:function(){var l=this,h=null;if(t.noAudio){l._emit("loaderror",null,"No audio support.");return}typeof l._src=="string"&&(l._src=[l._src]);for(var d=0;d<l._src.length;d++){var g,_;if(l._format&&l._format[d])g=l._format[d];else{if(_=l._src[d],typeof _!="string"){l._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(_),g||(g=/\.([^.]+)$/.exec(_.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&t.codecs(g)){h=l._src[d];break}}if(!h){l._emit("loaderror",null,"No codec support for selected audio sources.");return}return l._src=h,l._state="loading",window.location.protocol==="https:"&&h.slice(0,5)==="http:"&&(l._html5=!0,l._webAudio=!1),new i(l),l._webAudio&&a(l),l},play:function(l,h){var d=this,g=null;if(typeof l=="number")g=l,l=null;else{if(typeof l=="string"&&d._state==="loaded"&&!d._sprite[l])return null;if(typeof l>"u"&&(l="__default",!d._playLock)){for(var _=0,m=0;m<d._sounds.length;m++)d._sounds[m]._paused&&!d._sounds[m]._ended&&(_++,g=d._sounds[m]._id);_===1?l=null:g=null}}var p=g?d._soundById(g):d._inactiveSound();if(!p)return null;if(g&&!l&&(l=p._sprite||"__default"),d._state!=="loaded"){p._sprite=l,p._ended=!1;var b=p._id;return d._queue.push({event:"play",action:function(){d.play(b)}}),b}if(g&&!p._paused)return h||d._loadQueue("play"),p._id;d._webAudio&&t._autoResume();var v=Math.max(0,p._seek>0?p._seek:d._sprite[l][0]/1e3),x=Math.max(0,(d._sprite[l][0]+d._sprite[l][1])/1e3-v),T=x*1e3/Math.abs(p._rate),E=d._sprite[l][0]/1e3,A=(d._sprite[l][0]+d._sprite[l][1])/1e3;p._sprite=l,p._ended=!1;var y=function(){p._paused=!1,p._seek=v,p._start=E,p._stop=A,p._loop=!!(p._loop||d._sprite[l][2])};if(v>=A){d._ended(p);return}var M=p._node;if(d._webAudio){var I=function(){d._playLock=!1,y(),d._refreshBuffer(p);var B=p._muted||d._muted?0:p._volume;M.gain.setValueAtTime(B,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof M.bufferSource.start>"u"?p._loop?M.bufferSource.noteGrainOn(0,v,86400):M.bufferSource.noteGrainOn(0,v,x):p._loop?M.bufferSource.start(0,v,86400):M.bufferSource.start(0,v,x),T!==1/0&&(d._endTimers[p._id]=setTimeout(d._ended.bind(d,p),T)),h||setTimeout(function(){d._emit("play",p._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?I():(d._playLock=!0,d.once("resume",I),d._clearTimer(p._id))}else{var R=function(){M.currentTime=v,M.muted=p._muted||d._muted||t._muted||M.muted,M.volume=p._volume*t.volume(),M.playbackRate=p._rate;try{var B=M.play();if(B&&typeof Promise<"u"&&(B instanceof Promise||typeof B.then=="function")?(d._playLock=!0,y(),B.then(function(){d._playLock=!1,M._unlocked=!0,h?d._loadQueue():d._emit("play",p._id)}).catch(function(){d._playLock=!1,d._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):h||(d._playLock=!1,y(),d._emit("play",p._id)),M.playbackRate=p._rate,M.paused){d._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}l!=="__default"||p._loop?d._endTimers[p._id]=setTimeout(d._ended.bind(d,p),T):(d._endTimers[p._id]=function(){d._ended(p),M.removeEventListener("ended",d._endTimers[p._id],!1)},M.addEventListener("ended",d._endTimers[p._id],!1))}catch(N){d._emit("playerror",p._id,N)}};M.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(M.src=d._src,M.load());var L=window&&window.ejecta||!M.readyState&&t._navigator.isCocoonJS;if(M.readyState>=3||L)R();else{d._playLock=!0,d._state="loading";var F=function(){d._state="loaded",R(),M.removeEventListener(t._canPlayEvent,F,!1)};M.addEventListener(t._canPlayEvent,F,!1),d._clearTimer(p._id)}}return p._id},pause:function(l){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"pause",action:function(){h.pause(l)}}),h;for(var d=h._getSoundIds(l),g=0;g<d.length;g++){h._clearTimer(d[g]);var _=h._soundById(d[g]);if(_&&!_._paused&&(_._seek=h.seek(d[g]),_._rateSeek=0,_._paused=!0,h._stopFade(d[g]),_._node))if(h._webAudio){if(!_._node.bufferSource)continue;typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),h._cleanBuffer(_._node)}else(!isNaN(_._node.duration)||_._node.duration===1/0)&&_._node.pause();arguments[1]||h._emit("pause",_?_._id:null)}return h},stop:function(l,h){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(l)}}),d;for(var g=d._getSoundIds(l),_=0;_<g.length;_++){d._clearTimer(g[_]);var m=d._soundById(g[_]);m&&(m._seek=m._start||0,m._rateSeek=0,m._paused=!0,m._ended=!0,d._stopFade(g[_]),m._node&&(d._webAudio?m._node.bufferSource&&(typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),d._cleanBuffer(m._node)):(!isNaN(m._node.duration)||m._node.duration===1/0)&&(m._node.currentTime=m._start||0,m._node.pause(),m._node.duration===1/0&&d._clearSound(m._node))),h||d._emit("stop",m._id))}return d},mute:function(l,h){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(l,h)}}),d;if(typeof h>"u")if(typeof l=="boolean")d._muted=l;else return d._muted;for(var g=d._getSoundIds(h),_=0;_<g.length;_++){var m=d._soundById(g[_]);m&&(m._muted=l,m._interval&&d._stopFade(m._id),d._webAudio&&m._node?m._node.gain.setValueAtTime(l?0:m._volume,t.ctx.currentTime):m._node&&(m._node.muted=t._muted?!0:l),d._emit("mute",m._id))}return d},volume:function(){var l=this,h=arguments,d,g;if(h.length===0)return l._volume;if(h.length===1||h.length===2&&typeof h[1]>"u"){var _=l._getSoundIds(),m=_.indexOf(h[0]);m>=0?g=parseInt(h[0],10):d=parseFloat(h[0])}else h.length>=2&&(d=parseFloat(h[0]),g=parseInt(h[1],10));var p;if(typeof d<"u"&&d>=0&&d<=1){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"volume",action:function(){l.volume.apply(l,h)}}),l;typeof g>"u"&&(l._volume=d),g=l._getSoundIds(g);for(var b=0;b<g.length;b++)p=l._soundById(g[b]),p&&(p._volume=d,h[2]||l._stopFade(g[b]),l._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(d,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=d*t.volume()),l._emit("volume",p._id))}else return p=g?l._soundById(g):l._sounds[0],p?p._volume:0;return l},fade:function(l,h,d,g){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"fade",action:function(){_.fade(l,h,d,g)}}),_;l=Math.min(Math.max(0,parseFloat(l)),1),h=Math.min(Math.max(0,parseFloat(h)),1),d=parseFloat(d),_.volume(l,g);for(var m=_._getSoundIds(g),p=0;p<m.length;p++){var b=_._soundById(m[p]);if(b){if(g||_._stopFade(m[p]),_._webAudio&&!b._muted){var v=t.ctx.currentTime,x=v+d/1e3;b._volume=l,b._node.gain.setValueAtTime(l,v),b._node.gain.linearRampToValueAtTime(h,x)}_._startFadeInterval(b,l,h,d,m[p],typeof g>"u")}}return _},_startFadeInterval:function(l,h,d,g,_,m){var p=this,b=h,v=d-h,x=Math.abs(v/.01),T=Math.max(4,x>0?g/x:g),E=Date.now();l._fadeTo=d,l._interval=setInterval(function(){var A=(Date.now()-E)/g;E=Date.now(),b+=v*A,b=Math.round(b*100)/100,v<0?b=Math.max(d,b):b=Math.min(d,b),p._webAudio?l._volume=b:p.volume(b,l._id,!0),m&&(p._volume=b),(d<h&&b<=d||d>h&&b>=d)&&(clearInterval(l._interval),l._interval=null,l._fadeTo=null,p.volume(d,l._id),p._emit("fade",l._id))},T)},_stopFade:function(l){var h=this,d=h._soundById(l);return d&&d._interval&&(h._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,h.volume(d._fadeTo,l),d._fadeTo=null,h._emit("fade",l)),h},loop:function(){var l=this,h=arguments,d,g,_;if(h.length===0)return l._loop;if(h.length===1)if(typeof h[0]=="boolean")d=h[0],l._loop=d;else return _=l._soundById(parseInt(h[0],10)),_?_._loop:!1;else h.length===2&&(d=h[0],g=parseInt(h[1],10));for(var m=l._getSoundIds(g),p=0;p<m.length;p++)_=l._soundById(m[p]),_&&(_._loop=d,l._webAudio&&_._node&&_._node.bufferSource&&(_._node.bufferSource.loop=d,d&&(_._node.bufferSource.loopStart=_._start||0,_._node.bufferSource.loopEnd=_._stop,l.playing(m[p])&&(l.pause(m[p],!0),l.play(m[p],!0)))));return l},rate:function(){var l=this,h=arguments,d,g;if(h.length===0)g=l._sounds[0]._id;else if(h.length===1){var _=l._getSoundIds(),m=_.indexOf(h[0]);m>=0?g=parseInt(h[0],10):d=parseFloat(h[0])}else h.length===2&&(d=parseFloat(h[0]),g=parseInt(h[1],10));var p;if(typeof d=="number"){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"rate",action:function(){l.rate.apply(l,h)}}),l;typeof g>"u"&&(l._rate=d),g=l._getSoundIds(g);for(var b=0;b<g.length;b++)if(p=l._soundById(g[b]),p){l.playing(g[b])&&(p._rateSeek=l.seek(g[b]),p._playStart=l._webAudio?t.ctx.currentTime:p._playStart),p._rate=d,l._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):p._node&&(p._node.playbackRate=d);var v=l.seek(g[b]),x=(l._sprite[p._sprite][0]+l._sprite[p._sprite][1])/1e3-v,T=x*1e3/Math.abs(p._rate);(l._endTimers[g[b]]||!p._paused)&&(l._clearTimer(g[b]),l._endTimers[g[b]]=setTimeout(l._ended.bind(l,p),T)),l._emit("rate",p._id)}}else return p=l._soundById(g),p?p._rate:l._rate;return l},seek:function(){var l=this,h=arguments,d,g;if(h.length===0)l._sounds.length&&(g=l._sounds[0]._id);else if(h.length===1){var _=l._getSoundIds(),m=_.indexOf(h[0]);m>=0?g=parseInt(h[0],10):l._sounds.length&&(g=l._sounds[0]._id,d=parseFloat(h[0]))}else h.length===2&&(d=parseFloat(h[0]),g=parseInt(h[1],10));if(typeof g>"u")return 0;if(typeof d=="number"&&(l._state!=="loaded"||l._playLock))return l._queue.push({event:"seek",action:function(){l.seek.apply(l,h)}}),l;var p=l._soundById(g);if(p)if(typeof d=="number"&&d>=0){var b=l.playing(g);b&&l.pause(g,!0),p._seek=d,p._ended=!1,l._clearTimer(g),!l._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=d);var v=function(){b&&l.play(g,!0),l._emit("seek",g)};if(b&&!l._webAudio){var x=function(){l._playLock?setTimeout(x,0):v()};setTimeout(x,0)}else v()}else if(l._webAudio){var T=l.playing(g)?t.ctx.currentTime-p._playStart:0,E=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(E+T*Math.abs(p._rate))}else return p._node.currentTime;return l},playing:function(l){var h=this;if(typeof l=="number"){var d=h._soundById(l);return d?!d._paused:!1}for(var g=0;g<h._sounds.length;g++)if(!h._sounds[g]._paused)return!0;return!1},duration:function(l){var h=this,d=h._duration,g=h._soundById(l);return g&&(d=h._sprite[g._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var l=this,h=l._sounds,d=0;d<h.length;d++)h[d]._paused||l.stop(h[d]._id),l._webAudio||(l._clearSound(h[d]._node),h[d]._node.removeEventListener("error",h[d]._errorFn,!1),h[d]._node.removeEventListener(t._canPlayEvent,h[d]._loadFn,!1),h[d]._node.removeEventListener("ended",h[d]._endFn,!1),t._releaseHtml5Audio(h[d]._node)),delete h[d]._node,l._clearTimer(h[d]._id);var g=t._howls.indexOf(l);g>=0&&t._howls.splice(g,1);var _=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===l._src||l._src.indexOf(t._howls[d]._src)>=0){_=!1;break}return r&&_&&delete r[l._src],t.noAudio=!1,l._state="unloaded",l._sounds=[],l=null,null},on:function(l,h,d,g){var _=this,m=_["_on"+l];return typeof h=="function"&&m.push(g?{id:d,fn:h,once:g}:{id:d,fn:h}),_},off:function(l,h,d){var g=this,_=g["_on"+l],m=0;if(typeof h=="number"&&(d=h,h=null),h||d)for(m=0;m<_.length;m++){var p=d===_[m].id;if(h===_[m].fn&&p||!h&&p){_.splice(m,1);break}}else if(l)g["_on"+l]=[];else{var b=Object.keys(g);for(m=0;m<b.length;m++)b[m].indexOf("_on")===0&&Array.isArray(g[b[m]])&&(g[b[m]]=[])}return g},once:function(l,h,d){var g=this;return g.on(l,h,d,1),g},_emit:function(l,h,d){for(var g=this,_=g["_on"+l],m=_.length-1;m>=0;m--)(!_[m].id||_[m].id===h||l==="load")&&(setTimeout((function(p){p.call(this,h,d)}).bind(g,_[m].fn),0),_[m].once&&g.off(l,_[m].fn,_[m].id));return g._loadQueue(l),g},_loadQueue:function(l){var h=this;if(h._queue.length>0){var d=h._queue[0];d.event===l&&(h._queue.shift(),h._loadQueue()),l||d.action()}return h},_ended:function(l){var h=this,d=l._sprite;if(!h._webAudio&&l._node&&!l._node.paused&&!l._node.ended&&l._node.currentTime<l._stop)return setTimeout(h._ended.bind(h,l),100),h;var g=!!(l._loop||h._sprite[d][2]);if(h._emit("end",l._id),!h._webAudio&&g&&h.stop(l._id,!0).play(l._id),h._webAudio&&g){h._emit("play",l._id),l._seek=l._start||0,l._rateSeek=0,l._playStart=t.ctx.currentTime;var _=(l._stop-l._start)*1e3/Math.abs(l._rate);h._endTimers[l._id]=setTimeout(h._ended.bind(h,l),_)}return h._webAudio&&!g&&(l._paused=!0,l._ended=!0,l._seek=l._start||0,l._rateSeek=0,h._clearTimer(l._id),h._cleanBuffer(l._node),t._autoSuspend()),!h._webAudio&&!g&&h.stop(l._id,!0),h},_clearTimer:function(l){var h=this;if(h._endTimers[l]){if(typeof h._endTimers[l]!="function")clearTimeout(h._endTimers[l]);else{var d=h._soundById(l);d&&d._node&&d._node.removeEventListener("ended",h._endTimers[l],!1)}delete h._endTimers[l]}return h},_soundById:function(l){for(var h=this,d=0;d<h._sounds.length;d++)if(l===h._sounds[d]._id)return h._sounds[d];return null},_inactiveSound:function(){var l=this;l._drain();for(var h=0;h<l._sounds.length;h++)if(l._sounds[h]._ended)return l._sounds[h].reset();return new i(l)},_drain:function(){var l=this,h=l._pool,d=0,g=0;if(!(l._sounds.length<h)){for(g=0;g<l._sounds.length;g++)l._sounds[g]._ended&&d++;for(g=l._sounds.length-1;g>=0;g--){if(d<=h)return;l._sounds[g]._ended&&(l._webAudio&&l._sounds[g]._node&&l._sounds[g]._node.disconnect(0),l._sounds.splice(g,1),d--)}}},_getSoundIds:function(l){var h=this;if(typeof l>"u"){for(var d=[],g=0;g<h._sounds.length;g++)d.push(h._sounds[g]._id);return d}else return[l]},_refreshBuffer:function(l){var h=this;return l._node.bufferSource=t.ctx.createBufferSource(),l._node.bufferSource.buffer=r[h._src],l._panner?l._node.bufferSource.connect(l._panner):l._node.bufferSource.connect(l._node),l._node.bufferSource.loop=l._loop,l._loop&&(l._node.bufferSource.loopStart=l._start||0,l._node.bufferSource.loopEnd=l._stop||0),l._node.bufferSource.playbackRate.setValueAtTime(l._rate,t.ctx.currentTime),h},_cleanBuffer:function(l){var h=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!l.bufferSource)return h;if(t._scratchBuffer&&l.bufferSource&&(l.bufferSource.onended=null,l.bufferSource.disconnect(0),d))try{l.bufferSource.buffer=t._scratchBuffer}catch{}return l.bufferSource=null,h},_clearSound:function(l){var h=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);h||(l.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(l){this._parent=l,this.init()};i.prototype={init:function(){var l=this,h=l._parent;return l._muted=h._muted,l._loop=h._loop,l._volume=h._volume,l._rate=h._rate,l._seek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++t._counter,h._sounds.push(l),l.create(),l},create:function(){var l=this,h=l._parent,d=t._muted||l._muted||l._parent._muted?0:l._volume;return h._webAudio?(l._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),l._node.gain.setValueAtTime(d,t.ctx.currentTime),l._node.paused=!0,l._node.connect(t.masterGain)):t.noAudio||(l._node=t._obtainHtml5Audio(),l._errorFn=l._errorListener.bind(l),l._node.addEventListener("error",l._errorFn,!1),l._loadFn=l._loadListener.bind(l),l._node.addEventListener(t._canPlayEvent,l._loadFn,!1),l._endFn=l._endListener.bind(l),l._node.addEventListener("ended",l._endFn,!1),l._node.src=h._src,l._node.preload=h._preload===!0?"auto":h._preload,l._node.volume=d*t.volume(),l._node.load()),l},reset:function(){var l=this,h=l._parent;return l._muted=h._muted,l._loop=h._loop,l._volume=h._volume,l._rate=h._rate,l._seek=0,l._rateSeek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++t._counter,l},_errorListener:function(){var l=this;l._parent._emit("loaderror",l._id,l._node.error?l._node.error.code:0),l._node.removeEventListener("error",l._errorFn,!1)},_loadListener:function(){var l=this,h=l._parent;h._duration=Math.ceil(l._node.duration*10)/10,Object.keys(h._sprite).length===0&&(h._sprite={__default:[0,h._duration*1e3]}),h._state!=="loaded"&&(h._state="loaded",h._emit("load"),h._loadQueue()),l._node.removeEventListener(t._canPlayEvent,l._loadFn,!1)},_endListener:function(){var l=this,h=l._parent;h._duration===1/0&&(h._duration=Math.ceil(l._node.duration*10)/10,h._sprite.__default[1]===1/0&&(h._sprite.__default[1]=h._duration*1e3),h._ended(l)),l._node.removeEventListener("ended",l._endFn,!1)}};var r={},a=function(l){var h=l._src;if(r[h]){l._duration=r[h].duration,u(l);return}if(/^data:[^;]+;base64,/.test(h)){for(var d=atob(h.split(",")[1]),g=new Uint8Array(d.length),_=0;_<d.length;++_)g[_]=d.charCodeAt(_);c(g.buffer,l)}else{var m=new XMLHttpRequest;m.open(l._xhr.method,h,!0),m.withCredentials=l._xhr.withCredentials,m.responseType="arraybuffer",l._xhr.headers&&Object.keys(l._xhr.headers).forEach(function(p){m.setRequestHeader(p,l._xhr.headers[p])}),m.onload=function(){var p=(m.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){l._emit("loaderror",null,"Failed loading audio file with status: "+m.status+".");return}c(m.response,l)},m.onerror=function(){l._webAudio&&(l._html5=!0,l._webAudio=!1,l._sounds=[],delete r[h],l.load())},o(m)}},o=function(l){try{l.send()}catch{l.onerror()}},c=function(l,h){var d=function(){h._emit("loaderror",null,"Decoding audio data failed.")},g=function(_){_&&h._sounds.length>0?(r[h._src]=_,u(h,_)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(l).then(g).catch(d):t.ctx.decodeAudioData(l,g,d)},u=function(l,h){h&&!l._duration&&(l._duration=h.duration),Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue())},f=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var l=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),h=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=h?parseInt(h[1],10):null;if(l&&d&&d<9){var g=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!g&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};s.Howler=t,s.Howl=n,typeof Ls<"u"?(Ls.HowlerGlobal=e,Ls.Howler=t,Ls.Howl=n,Ls.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var r=this;if(!r.ctx||!r.ctx.listener)return r;if(n=typeof n!="number"?r._pos[1]:n,i=typeof i!="number"?r._pos[2]:i,typeof t=="number")r._pos=[t,n,i],typeof r.ctx.listener.positionX<"u"?(r.ctx.listener.positionX.setTargetAtTime(r._pos[0],Howler.ctx.currentTime,.1),r.ctx.listener.positionY.setTargetAtTime(r._pos[1],Howler.ctx.currentTime,.1),r.ctx.listener.positionZ.setTargetAtTime(r._pos[2],Howler.ctx.currentTime,.1)):r.ctx.listener.setPosition(r._pos[0],r._pos[1],r._pos[2]);else return r._pos;return r},HowlerGlobal.prototype.orientation=function(t,n,i,r,a,o){var c=this;if(!c.ctx||!c.ctx.listener)return c;var u=c._orientation;if(n=typeof n!="number"?u[1]:n,i=typeof i!="number"?u[2]:i,r=typeof r!="number"?u[3]:r,a=typeof a!="number"?u[4]:a,o=typeof o!="number"?u[5]:o,typeof t=="number")c._orientation=[t,n,i,r,a,o],typeof c.ctx.listener.forwardX<"u"?(c.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),c.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),c.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),c.ctx.listener.upX.setTargetAtTime(r,Howler.ctx.currentTime,.1),c.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),c.ctx.listener.upZ.setTargetAtTime(o,Howler.ctx.currentTime,.1)):c.ctx.listener.setOrientation(t,n,i,r,a,o);else return u;return c},Howl.prototype.init=(function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}})(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var r=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var a=i._getSoundIds(n),o=0;o<a.length;o++){var c=i._soundById(a[o]);if(c)if(typeof t=="number")c._stereo=t,c._pos=[t,0,0],c._node&&(c._pannerAttr.panningModel="equalpower",(!c._panner||!c._panner.pan)&&e(c,r),r==="spatial"?typeof c._panner.positionX<"u"?(c._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),c._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),c._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):c._panner.setPosition(t,0,0):c._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",c._id);else return c._stereo}return i},Howl.prototype.pos=function(t,n,i,r){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(t,n,i,r)}}),a;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof r>"u")if(typeof t=="number")a._pos=[t,n,i];else return a._pos;for(var o=a._getSoundIds(r),c=0;c<o.length;c++){var u=a._soundById(o[c]);if(u)if(typeof t=="number")u._pos=[t,n,i],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):u._panner.setPosition(t,n,i)),a._emit("pos",u._id);else return u._pos}return a},Howl.prototype.orientation=function(t,n,i,r){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(t,n,i,r)}}),a;if(n=typeof n!="number"?a._orientation[1]:n,i=typeof i!="number"?a._orientation[2]:i,typeof r>"u")if(typeof t=="number")a._orientation=[t,n,i];else return a._orientation;for(var o=a._getSoundIds(r),c=0;c<o.length;c++){var u=a._soundById(o[c]);if(u)if(typeof t=="number")u._orientation=[t,n,i],u._node&&(u._panner||(u._pos||(u._pos=a._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):u._panner.setOrientation(t,n,i)),a._emit("orientation",u._id);else return u._orientation}return a},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,r,a;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof r>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return a=t._soundById(parseInt(n[0],10)),a?a._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],r=parseInt(n[1],10));for(var o=t._getSoundIds(r),c=0;c<o.length;c++)if(a=t._soundById(o[c]),a){var u=a._pannerAttr;u={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:u.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:u.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:u.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:u.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:u.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:u.panningModel};var f=a._panner;f||(a._pos||(a._pos=t._pos||[0,0,-.5]),e(a,"spatial"),f=a._panner),f.coneInnerAngle=u.coneInnerAngle,f.coneOuterAngle=u.coneOuterAngle,f.coneOuterGain=u.coneOuterGain,f.distanceModel=u.distanceModel,f.maxDistance=u.maxDistance,f.refDistance=u.refDistance,f.rolloffFactor=u.rolloffFactor,f.panningModel=u.panningModel}return t},Sound.prototype.init=(function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}})(Sound.prototype.init),Sound.prototype.reset=(function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}})(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(wl)),wl}var js=xS();const Ya=new D;function vS(){const s=document.documentElement.clientWidth||window.innerWidth,e=document.documentElement.clientHeight||window.innerHeight,t=new Ng,n=s<e;t.fog=new cu(0,n?.009:.02),t.background=new Ve(0);const i=new en(75,s/e,.1,1e3);i.position.set(20,15,30);const r=new uM({canvas:document.querySelector("#bg"),antialias:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setSize(s,e,!1),r.outputColorSpace=kt,r.toneMapping=Jc,r.toneMappingExposure=1.2,r.shadowMap.enabled=!0,r.shadowMap.type=cd;const a=new fS(t,i),o=new cs(new ne(window.innerWidth,window.innerHeight),1.5,.4,.85),c=new hS(r);c.addPass(a),c.addPass(o);const u=new gS;u.setSize(s,e),u.domElement.style.position="fixed",u.domElement.style.top="0",u.domElement.style.left="0",u.domElement.style.pointerEvents="none",u.domElement.style.zIndex="2",document.body.appendChild(u.domElement);const f=new _S;f.setSize(s,e),f.domElement.style.position="fixed",f.domElement.style.top="0",f.domElement.style.left="0",f.domElement.style.pointerEvents="none",f.domElement.style.zIndex="5",document.body.appendChild(f.domElement);const l=new XM(i,r.domElement);l.enableDamping=!0,l.dampingFactor=.05,l.maxPolarAngle=Math.PI/2,l.minDistance=8,l.maxDistance=65;const h=new Jd;h.onProgress=(m,p,b)=>{const v=document.getElementById("progress-bar"),x=document.getElementById("loader-percent"),T=document.getElementById("loader-current-asset"),E=b>0?Math.round(p/b*100):0;if(v&&(v.style.width=`${E}%`),x&&(x.textContent=`${E}%`),T&&m){const A=m.replace(/^.*\/(models|textures|audio)\//,"$1/");T.textContent=`loading ${A}`}},h.onLoad=()=>{const m=document.getElementById("loading-screen"),p=document.getElementById("progress-bar"),b=document.getElementById("loader-percent"),v=document.getElementById("loader-asset-tag"),x=document.getElementById("loader-current-asset");p&&(p.style.width="100%"),b&&(b.textContent="100%"),v&&(v.textContent="[OK]",v.className="log-tag-ok"),x&&(x.textContent="world.ready — entering room..."),m&&(g(),setTimeout(()=>{m.style.opacity="0",m.style.transform="scale(1.03)",m.style.pointerEvents="none",setTimeout(()=>{m.style.display="none"},720)},280))};const d=new fM(h);d.setMeshoptDecoder(bS);function g(){const m=document.documentElement.clientWidth||window.innerWidth,p=document.documentElement.clientHeight||window.innerHeight;i.aspect=m/p,i.updateProjectionMatrix(),t.fog.density=m<p?.009:.02,r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setSize(m,p,!1),c.setSize(m,p),o.setSize(m,p),u.setSize(m,p),f.setSize(m,p)}window.visualViewport?.addEventListener("resize",g);function _(){js.Howler.pos(i.position.x,i.position.y,i.position.z),i.getWorldDirection(Ya),js.Howler.orientation(Ya.x,Ya.y,Ya.z,0,1,0)}return{scene:t,camera:i,renderer:r,composer:c,bloomPass:o,cssRenderer:u,css2DRenderer:f,controls:l,loadingManager:h,gltfLoader:d,resizeRenderers:g,updateAudioListener:_}}function Ja(s,e,t,n){return e.map(i=>{const r=s.load(i);return r.wrapS=qi,r.wrapT=qi,r.repeat.set(t,n),r})}function yS(s){const e=new $d(s),[t,n,i]=Ja(e,["./textures/metal_color.jpg","./textures/metal_roughness.jpg","./textures/metal_normal.png"],8,8),r=new Jt({map:t,roughnessMap:n,normalMap:i,roughness:.6,metalness:.1}),[a,o,c]=Ja(e,["./textures/roomFloor_color.jpg","./textures/roomFloor_roughness.jpg","./textures/roomFloor_normal.png"],8,8),u=new Jt({map:a,roughnessMap:o,normalMap:c,roughness:.6,metalness:0}),[f,l,h]=Ja(e,["./textures/grass_BaseColor.jpg","./textures/grass_Roughness.jpg","./textures/grass_Normal.png"],.2,.2),d=new Jt({map:f,roughnessMap:l,normalMap:h,roughness:1,metalness:0,side:_n}),[g,_,m]=Ja(e,["./textures/wood_furniture_color.jpg","./textures/wood_furniture_roughness.jpg","./textures/wood_furniture_normal.jpg"],.2,.2),p=new Jt({map:g,roughnessMap:_,normalMap:m,roughness:1,metalness:0});function b(v){v.material.metalness=.1,v.material.roughness=.8,v.material.side=_n,v.material.needsUpdate=!0}return{floorMaterial:r,roomFloorMaterial:u,outsideFloorMaterial:d,furnitureMaterial:p,applyWallMaterial:b}}function MS(s,e){const t=new Gn(125,1,125),n=new pt(t,e.floorMaterial);n.position.y=-5.5,n.receiveShadow=!0,s.add(n);const i=new Gn(26,3,20.5),r=new pt(i,e.roomFloorMaterial);r.position.set(12.5,-5.5,5.25),r.receiveShadow=!0,s.add(r);const a=new Hd;a.moveTo(-62.5,-62.5),a.lineTo(62.5,-62.5),a.lineTo(62.5,.5),a.lineTo(25.5,.5),a.lineTo(25.5,-5),a.lineTo(-.5,-5),a.lineTo(-.5,62.5),a.lineTo(-62.5,62.5),a.lineTo(-62.5,-62.5);const o=new _u(a,{depth:3,bevelEnabled:!1}),c=new pt(o,e.outsideFloorMaterial);c.rotation.x=Math.PI/2,c.position.y=-4,c.receiveShadow=!0,s.add(c);const u=new Gn(1.48,1,1.48),f=new Jt({color:12887172}),l=new pt(u,f);l.position.set(13.24,-4,-3.73),l.castShadow=!0,l.receiveShadow=!0,s.add(l)}function SS(){const s=new Float32Array([-.06,0,0,.06,0,0,-.048,.33,.015,.048,.33,.015,-.026,.68,.055,.026,.68,.055,0,1,.13]),e=new Float32Array([.35,.38,.35,.35,.38,.35,.65,.7,.62,.65,.7,.62,.9,.96,.84,.9,.96,.84,1,1,.92]),t=[0,1,2,1,3,2,2,3,4,3,5,4,4,5,6],n=new Vt;return n.setAttribute("position",new Gt(s,3)),n.setAttribute("color",new Gt(e,3)),n.setIndex(t),n.computeVertexNormals(),n}function TS(s,e){if(s<-62||s>62||e<-62||e>62||s>-.85&&e>-5.35&&(s<25.85||e>.15))return!1;const t=s- -5,n=e- -4.5;return!(t*t+n*n<.45)}function ES(s){const t=window.innerWidth<=640?9e3:2e4,n=SS(),i={uTime:{value:0}},r=new Jt({color:16777215,vertexColors:!0,roughness:.85,metalness:0,side:_n});r.onBeforeCompile=d=>{d.uniforms.uTime=i.uTime,d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
        uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 instOrigin = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
        float bend = position.y * position.y;
        float wave = sin(uTime * 1.65 + instOrigin.x * 0.35 + instOrigin.z * 0.25) * 0.14
                   + sin(uTime * 2.9 + instOrigin.x * 0.8 - instOrigin.z * 0.6) * 0.05;
        transformed.x += wave * bend;
        transformed.z += wave * 0.55 * bend;`)};const a=new Id(n,r,t);a.receiveShadow=!0,a.castShadow=!1,a.frustumCulled=!1;const o=new mt,c=new Ve,u=-4.02;let f=0,l=0;const h=t*12;for(;f<t&&l<h;){l++;const d=-62+Math.random()*124,g=-62+Math.random()*124;if(!TS(d,g))continue;const _=Math.hypot(d-6,g-2),m=Math.exp(-Math.pow(_/38,2))*.92+.08;if(Math.random()>m)continue;const p=.38+Math.random()*.62,b=.85+Math.random()*.5;o.position.set(d,u,g),o.rotation.set((Math.random()-.5)*.28,Math.random()*Math.PI*2,(Math.random()-.5)*.28),o.scale.set(b,p,1),o.updateMatrix(),a.setMatrixAt(f,o.matrix);const v=.24+Math.random()*.07,x=.42+Math.random()*.22,T=.16+Math.random()*.17;c.setHSL(v,x,T),a.setColorAt(f,c),f++}return a.count=f,a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),s.add(a),{update(d){i.uTime.value=d}}}const wS="./audio/lofi_radio.wav",AS="./audio/radio_on.mp3",RS="./audio/radio_off.mp3",CS=75,zf=.55;function PS(s,e={x:2.1,y:-.55,z:5.8}){let t=!1,n=!1,i=null,r=new D(10,10,10);const a={panningModel:"HRTF",refDistance:12,rolloffFactor:.6,distanceModel:"inverse"},o=new js.Howl({src:[wS],loop:!0,volume:zf});o.pos(e.x,e.y,e.z),o.pannerAttr(a);const c=new js.Howl({src:[AS],volume:.7});c.pos(e.x,e.y,e.z),c.pannerAttr(a);const u=new js.Howl({src:[RS],volume:.7});u.pos(e.x,e.y,e.z),u.pannerAttr(a);const f=document.createElement("div");f.className="radio-notes",f.innerHTML=`
    <span class="radio-note n1">♪</span>
    <span class="radio-note n2">♫</span>
    <span class="radio-note n3">♩</span>
  `;const l=new Tu(f);l.position.set(e.x,e.y+1.4,e.z),l.visible=!1,s.add(l);function h(m){f.classList.toggle("playing",m),l.visible=m,!m&&i&&i.scale.copy(r)}function d(m){i=m,r.copy(m.scale)}function g(){return t=!t,c.off("end"),t?(n=!1,u.stop(),o.stop(),c.stop(),c.once("end",()=>{t&&(n=!0,o.stop(),o.seek(0),o.volume(0),o.play(),o.fade(0,zf,350),h(!0))}),c.play()):(n=!1,c.stop(),o.stop(),u.stop(),u.play(),h(!1)),t}function _(m){if(!n)return;const p=m*(CS/60)*Math.PI*2,b=Math.pow(Math.max(0,Math.sin(p)),3);i&&i.scale.set(r.x*(1+b*.025),r.y*(1+b*.04),r.z*(1+b*.025))}return{attachModel:d,toggle:g,update:_,isPlaying:()=>t}}function xi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function hp(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},us={duration:.5,overwrite:!1,delay:0},Eu,Wt,_t,Ln=1e8,ft=1/Ln,Nc=Math.PI*2,DS=Nc/4,LS=0,fp=Math.sqrt,IS=Math.cos,FS=Math.sin,zt=function(e){return typeof e=="string"},Et=function(e){return typeof e=="function"},Ai=function(e){return typeof e=="number"},wu=function(e){return typeof e>"u"},oi=function(e){return typeof e=="object"},ln=function(e){return e!==!1},Au=function(){return typeof window<"u"},Za=function(e){return Et(e)||zt(e)},dp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Zt=Array.isArray,NS=/random\([^)]+\)/g,OS=/,\s*/g,Vf=/(?:-?\.?\d|\.)+/gi,pp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,jr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Al=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mp=/[+-]=-?[.\d]+/,US=/[^,'"\[\]\s]+/gi,kS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,Jn,Oc,Ru,En={},vo={},gp,_p=function(e){return(vo=hs(e,En))&&fn},Cu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},sa=function(e,t){return!t&&console.warn(e)},bp=function(e,t){return e&&(En[e]=t)&&vo&&(vo[e]=t)||En},aa=function(){return 0},BS={suppressEvents:!0,isStart:!0,kill:!1},ao={suppressEvents:!0,kill:!1},zS={suppressEvents:!0},Pu={},Wi=[],Uc={},xp,gn={},Rl={},Hf=30,oo=[],Du="",Lu=function(e){var t=e[0],n,i;if(oi(t)||Et(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=oo.length;i--&&!oo[i].targetTest(t););n=oo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Gp(e[i],n)))||e.splice(i,1);return e},pr=function(e){return e._gsap||Lu(In(e))[0]._gsap},vp=function(e,t,n){return(n=e[t])&&Et(n)?e[t]():wu(n)&&e.getAttribute&&e.getAttribute(t)||n},cn=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},vt=function(e){return Math.round(e*1e7)/1e7||0},Zr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},VS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},yo=function(){var e=Wi.length,t=Wi.slice(0),n,i;for(Uc={},Wi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Iu=function(e){return!!(e._initted||e._startAt||e.add)},yp=function(e,t,n,i){Wi.length&&!Wt&&yo(),e.render(t,n,!!(Wt&&t<0&&Iu(e))),Wi.length&&!Wt&&yo()},Mp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(US).length<2?t:zt(e)?e.trim():e},Sp=function(e){return e},wn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},HS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},hs=function(e,t){for(var n in t)e[n]=t[n];return e},Gf=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=oi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Mo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},qs=function(e){var t=e.parent||yt,n=e.keyframes?HS(Zt(e.keyframes)):wn;if(ln(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},GS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Tp=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Do=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Xi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},mr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},WS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},kc=function(e,t,n,i){return e._startAt&&(Wt?e._startAt.revert(ao):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},jS=function s(e){return!e||e._ts&&s(e.parent)},Wf=function(e){return e._repeat?fs(e._tTime,e=e.duration()+e._rDelay)*e:0},fs=function(e,t){var n=Math.floor(e=vt(e/t));return e&&n===e?n-1:n},So=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Lo=function(e){return e._end=vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ft)||0))},Io=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=vt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Lo(e),n._dirty||mr(n,e)),e},Ep=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=So(e.rawTime(),t),(!t._dur||pa(0,t.totalDuration(),n)-t._tTime>ft)&&t.render(n,!0)),mr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ft}},$n=function(e,t,n,i){return t.parent&&Xi(t),t._start=vt((Ai(n)?n:n||e!==yt?Rn(e,n,t):e._time)+t._delay),t._end=vt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Tp(e,t,"_first","_last",e._sort?"_start":0),Bc(t)||(e._recent=t),i||Ep(e,t),e._ts<0&&Io(e,e._tTime),e},wp=function(e,t){return(En.ScrollTrigger||Cu("scrollTrigger",t))&&En.ScrollTrigger.create(t,e)},Ap=function(e,t,n,i,r){if(Nu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Wt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&xp!==xn.frame)return Wi.push(e),e._lazy=[r,i],1},qS=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Bc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},XS=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&qS(e)&&!(!e._initted&&Bc(e))||(e._ts<0||e._dp._ts<0)&&!Bc(e))?0:1,o=e._rDelay,c=0,u,f,l;if(o&&e._repeat&&(c=pa(0,e._tDur,t),f=fs(c,o),e._yoyo&&f&1&&(a=1-a),f!==fs(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Wt||i||e._zTime===ft||!t&&e._zTime){if(!e._initted&&Ap(e,t,i,n,c))return;for(l=e._zTime,e._zTime=t||(n?ft:0),n||(n=t&&!l),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,u=e._pt;u;)u.r(a,u.d),u=u._next;t<0&&kc(e,t,n,!0),e._onUpdate&&!n&&vn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&vn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Xi(e,1),!n&&!Wt&&(vn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},KS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ds=function(e,t,n,i){var r=e._repeat,a=vt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:vt(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Io(e,e._tTime=e._tDur*o),e.parent&&Lo(e),n||mr(e.parent,e),e},jf=function(e){return e instanceof tn?mr(e):ds(e,e._dur)},YS={_start:0,endTime:aa,totalDuration:aa},Rn=function s(e,t,n){var i=e.labels,r=e._recent||YS,a=e.duration()>=Ln?r.endTime(!1):e._dur,o,c,u;return zt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),u=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),u&&n&&(c=c/100*(Zt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},Xs=function(e,t,n){var i=Ai(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=ln(c.vars.inherit)&&c.parent;a.immediateRender=ln(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Pt(t[0],a,t[r+1])},Ji=function(e,t){return e||e===0?t(e):t},pa=function(e,t,n){return n<e?e:n>t?t:n},Kt=function(e,t){return!zt(e)||!(t=kS.exec(e))?"":t[1]},JS=function(e,t,n){return Ji(n,function(i){return pa(e,t,i)})},zc=[].slice,Rp=function(e,t){return e&&oi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&oi(e[0]))&&!e.nodeType&&e!==Jn},ZS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return zt(i)&&!t||Rp(i,1)?(r=n).push.apply(r,In(i)):n.push(i)})||n},In=function(e,t,n){return _t&&!t&&_t.selector?_t.selector(e):zt(e)&&!n&&(Oc||!ps())?zc.call((t||Ru).querySelectorAll(e),0):Zt(e)?ZS(e,n):Rp(e)?zc.call(e,0):e?[e]:[]},Vc=function(e){return e=In(e)[0]||sa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return In(t,n.querySelectorAll?n:n===e?sa("Invalid scope")||Ru.createElement("div"):e)}},Cp=function(e){return e.sort(function(){return .5-Math.random()})},Pp=function(e){if(Et(e))return e;var t=oi(e)?e:{each:e},n=gr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,u=t.axis,f=i,l=i;return zt(i)?f=l={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(f=i[0],l=i[1]),function(h,d,g){var _=(g||t).length,m=a[_],p,b,v,x,T,E,A,y,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Ln])[1],!M){for(A=-Ln;A<(A=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=a[_]=[],p=c?Math.min(M,_)*f-.5:i%M,b=M===Ln?0:c?_*l/M-.5:i/M|0,A=0,y=Ln,E=0;E<_;E++)v=E%M-p,x=b-(E/M|0),m[E]=T=u?Math.abs(u==="y"?x:v):fp(v*v+x*x),T>A&&(A=T),T<y&&(y=T);i==="random"&&Cp(m),m.max=A-y,m.min=y,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:u?u==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Kt(t.amount||t.each)||0,n=n&&_<0?zp(n):n}return _=(m[h]-m.min)/m.max||0,vt(m.b+(n?n(_):_)*m.v)+m.u}},Hc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=vt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ai(n)?0:Kt(n))}},Dp=function(e,t){var n=Zt(e),i,r;return!n&&oi(e)&&(i=n=e.radius||Ln,e.values?(e=In(e.values),(r=!Ai(e[0]))&&(i*=i)):e=Hc(e.increment)),Ji(t,n?Et(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),u=Ln,f=0,l=e.length,h,d;l--;)r?(h=e[l].x-o,d=e[l].y-c,h=h*h+d*d):h=Math.abs(e[l]-o),h<u&&(u=h,f=l);return f=!i||u<=i?e[f]:a,r||f===a||Ai(a)?f:f+Kt(a)}:Hc(e))},Lp=function(e,t,n,i){return Ji(Zt(e)?!t:n===!0?!!(n=0):!i,function(){return Zt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},$S=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},QS=function(e,t){return function(n){return e(parseFloat(n))+(t||Kt(n))}},eT=function(e,t,n){return Fp(e,t,0,1,n)},Ip=function(e,t,n){return Ji(n,function(i){return e[~~t(i)]})},tT=function s(e,t,n){var i=t-e;return Zt(e)?Ip(e,s(0,e.length),t):Ji(n,function(r){return(i+(r-e)%i)%i+e})},nT=function s(e,t,n){var i=t-e,r=i*2;return Zt(e)?Ip(e,s(0,e.length-1),t):Ji(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},oa=function(e){return e.replace(NS,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(OS);return Lp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Fp=function(e,t,n,i,r){var a=t-e,o=i-n;return Ji(r,function(c){return n+((c-e)/a*o||0)})},iT=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=zt(e),o={},c,u,f,l,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Zt(e)&&!Zt(t)){for(f=[],l=e.length,h=l-2,u=1;u<l;u++)f.push(s(e[u-1],e[u]));l--,r=function(g){g*=l;var _=Math.min(h,~~g);return f[_](g-_)},n=t}else i||(e=hs(Zt(e)?[]:{},e));if(!f){for(c in t)Fu.call(o,e,c,"get",t[c]);r=function(g){return ku(g,o)||(a?e.p:e)}}}return Ji(n,r)},qf=function(e,t,n){var i=e.labels,r=Ln,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=a,r=o);return c},vn=function(e,t,n){var i=e.vars,r=i[t],a=_t,o=e._ctx,c,u,f;if(r)return c=i[t+"Params"],u=i.callbackScope||e,n&&Wi.length&&yo(),o&&(_t=o),f=c?r.apply(u,c):r.call(u),_t=a,f},ks=function(e){return Xi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Wt),e.progress()<1&&vn(e,"onInterrupt"),e},qr,Np=[],Op=function(e){if(e)if(e=!e.name&&e.default||e,Au()||e.headless){var t=e.name,n=Et(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:aa,render:ku,add:Fu,kill:xT,modifier:bT,rawVars:0},a={targetTest:0,get:0,getSetter:Uu,aliases:{},register:0};if(ps(),e!==i){if(gn[t])return;wn(i,wn(Mo(e,r),a)),hs(i.prototype,hs(r,Mo(e,a))),gn[i.prop=t]=i,e.targetTest&&(oo.push(i),Pu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}bp(t,i),e.register&&e.register(fn,i,un)}else Np.push(e)},ht=255,Bs={aqua:[0,ht,ht],lime:[0,ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ht],navy:[0,0,128],white:[ht,ht,ht],olive:[128,128,0],yellow:[ht,ht,0],orange:[ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ht,0,0],pink:[ht,192,203],cyan:[0,ht,ht],transparent:[ht,ht,ht,0]},Cl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ht+.5|0},Up=function(e,t,n){var i=e?Ai(e)?[e>>16,e>>8&ht,e&ht]:0:Bs.black,r,a,o,c,u,f,l,h,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Bs[e])i=Bs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ht,i&ht,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ht,e&ht]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Vf),!t)c=+i[0]%360/360,u=+i[1]/100,f=+i[2]/100,a=f<=.5?f*(u+1):f+u-f*u,r=f*2-a,i.length>3&&(i[3]*=1),i[0]=Cl(c+1/3,r,a),i[1]=Cl(c,r,a),i[2]=Cl(c-1/3,r,a);else if(~e.indexOf("="))return i=e.match(pp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Vf)||Bs.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/ht,a=i[1]/ht,o=i[2]/ht,l=Math.max(r,a,o),h=Math.min(r,a,o),f=(l+h)/2,l===h?c=u=0:(d=l-h,u=f>.5?d/(2-l-h):d/(l+h),c=l===r?(a-o)/d+(a<o?6:0):l===a?(o-r)/d+2:(r-a)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(u*100+.5),i[2]=~~(f*100+.5)),n&&i.length<4&&(i[3]=1),i},kp=function(e){var t=[],n=[],i=-1;return e.split(ji).forEach(function(r){var a=r.match(jr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Xf=function(e,t,n){var i="",r=(e+i).match(ji),a=t?"hsla(":"rgba(",o=0,c,u,f,l;if(!r)return e;if(r=r.map(function(h){return(h=Up(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(f=kp(e),c=n.c,c.join(i)!==f.c.join(i)))for(u=e.replace(ji,"1").split(jr),l=u.length-1;o<l;o++)i+=u[o]+(~c.indexOf(o)?r.shift()||a+"0,0,0,0)":(f.length?f:r.length?r:n).shift());if(!u)for(u=e.split(ji),l=u.length-1;o<l;o++)i+=u[o]+r[o];return i+u[l]},ji=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Bs)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),rT=/hsl[a]?\(/,Bp=function(e){var t=e.join(" "),n;if(ji.lastIndex=0,ji.test(t))return n=rT.test(t),e[1]=Xf(e[1],n),e[0]=Xf(e[0],n,kp(e[1])),!0},la,xn=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],c,u,f,l,h,d,g=function _(m){var p=s()-i,b=m===!0,v,x,T,E;if((p>e||p<0)&&(n+=p-t),i+=p,T=i-n,v=T-a,(v>0||b)&&(E=++l.frame,h=T-l.time*1e3,l.time=T=T/1e3,a+=v+(v>=r?4:r-v),x=1),b||(c=u(_)),x)for(d=0;d<o.length;d++)o[d](T,h,E,m)};return l={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){gp&&(!Oc&&Au()&&(Jn=Oc=window,Ru=Jn.document||{},En.gsap=fn,(Jn.gsapVersions||(Jn.gsapVersions=[])).push(fn.version),_p(vo||Jn.GreenSockGlobals||!Jn.gsap&&Jn||{}),Np.forEach(Op)),f=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&l.sleep(),u=f||function(m){return setTimeout(m,a-l.time*1e3+1|0)},la=1,g(2))},sleep:function(){(f?cancelAnimationFrame:clearTimeout)(c),la=0,u=aa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),a=l.time*1e3+r},add:function(m,p,b){var v=p?function(x,T,E,A){m(x,T,E,A),l.remove(v)}:m;return l.remove(m),o[b?"unshift":"push"](v),ps(),v},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},l})(),ps=function(){return!la&&xn.wake()},et={},sT=/^[\d.\-M][\d.\-,\s]/,aT=/["']/g,oT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,c,u;r<a;r++)c=n[r],o=r!==a-1?c.lastIndexOf(","):c.length,u=c.substr(0,o),t[i]=isNaN(u)?u.replace(aT,"").trim():+u,i=c.substr(o+1).trim();return t},lT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},cT=function(e){var t=(e+"").split("("),n=et[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[oT(t[1])]:lT(e).split(",").map(Mp)):et._CE&&sT.test(e)?et._CE("",e):n},zp=function(e){return function(t){return 1-e(1-t)}},Vp=function s(e,t){for(var n=e._first,i;n;)n instanceof tn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},gr=function(e,t){return e&&(Et(e)?e:et[e]||cT(e))||t},yr=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return cn(e,function(o){et[o]=En[o]=r,et[a=o.toLowerCase()]=n;for(var c in r)et[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=et[o+"."+c]=r[c]}),r},Hp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Pl=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Nc*(Math.asin(1/i)||0),o=function(f){return f===1?1:i*Math.pow(2,-10*f)*FS((f-a)*r)+1},c=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:Hp(o);return r=Nc/r,c.config=function(u,f){return s(e,u,f)},c},Dl=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Hp(n);return i.config=function(r){return s(e,r)},i};cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;yr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});et.Linear.easeNone=et.none=et.Linear.easeIn;yr("Elastic",Pl("in"),Pl("out"),Pl());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};yr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);yr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});yr("Circ",function(s){return-(fp(1-s*s)-1)});yr("Sine",function(s){return s===1?1:-IS(s*DS)+1});yr("Back",Dl("in"),Dl("out"),Dl());et.SteppedEase=et.steps=En.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-ft;return function(o){return((i*pa(0,a,o)|0)+r)*n}}};us.ease=et["quad.out"];cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Du+=s+","+s+"Params,"});var Gp=function(e,t){this.id=LS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vp,this.set=t?t.getSetter:Uu},ca=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ds(this,+t.duration,1,1),this.data=t.data,_t&&(this._ctx=_t,_t.data.push(this)),la||xn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ds(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ps(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Io(this,n),!r._dp||r.parent||Ep(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$n(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ft||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),yp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Wf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Wf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?fs(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ft?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?So(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ft?0:this._rts,this.totalTime(pa(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Lo(this),WS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ps(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ft&&(this._tTime-=ft)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=vt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&$n(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?So(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=zS);var i=Wt;return Wt=n,Iu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Wt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,jf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,jf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Rn(this,n),ln(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ln(i)),this._dur||(this._zTime=-ft),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ft,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ft)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=Et(n)?n:Sp,c=function(){var f=i.then;i.then=null,r&&r(),Et(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=f),a(o),i.then=f};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},e.kill=function(){ks(this)},s})();wn(ca.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ft,_prom:0,_ps:!1,_rts:1});var tn=(function(s){hp(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ln(n.sortChildren),yt&&$n(n.parent||yt,xi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&wp(xi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Xs(0,arguments,this),this},t.from=function(i,r,a){return Xs(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Xs(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,qs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Pt(i,r,Rn(this,a),1),this},t.call=function(i,r,a){return $n(this,Pt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,c,u,f){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=f,a.parent=this,new Pt(i,a,Rn(this,c)),this},t.staggerFrom=function(i,r,a,o,c,u,f){return a.runBackwards=1,qs(a).immediateRender=ln(a.immediateRender),this.staggerTo(i,r,a,o,c,u,f)},t.staggerFromTo=function(i,r,a,o,c,u,f,l){return o.startAt=a,qs(o).immediateRender=ln(o.immediateRender),this.staggerTo(i,r,o,c,u,f,l)},t.render=function(i,r,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,u=this._dur,f=i<=0?0:vt(i),l=this._zTime<0!=i<0&&(this._initted||!u),h,d,g,_,m,p,b,v,x,T,E,A;if(this!==yt&&f>c&&i>=0&&(f=c),f!==this._tTime||a||l){if(o!==this._time&&u&&(f+=this._time-o,i+=this._time-o),h=f,x=this._start,v=this._ts,p=!v,l&&(u||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(h=vt(f%m),f===c?(_=this._repeat,h=u):(T=vt(f/m),_=~~T,_&&_===T&&(h=u,_--),h>u&&(h=u)),T=fs(this._tTime,m),!o&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),E&&_&1&&(h=u-h,A=1),_!==T&&!this._lock){var y=E&&T&1,M=y===(E&&_&1);if(_<T&&(y=!y),o=y?0:f%u?u:f,this._lock=1,this.render(o||(A?0:vt(_*m)),r,!u)._lock=0,this._tTime=f,!r&&this.parent&&vn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,T=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,c=this._tDur,M&&(this._lock=2,o=y?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Vp(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=KS(this,vt(o),vt(h)),b&&(f-=h-(h=b._start))),this._tTime=f,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&u&&!r&&!T&&(vn(this,"onStart"),this._tTime!==f))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,r,a),h!==this._time||!this._ts&&!p){b=0,g&&(f+=this._zTime=-ft);break}}d=g}else{d=this._last;for(var I=i<0?i:h;d;){if(g=d._prev,(d._act||I<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(I-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(I-d._start)*d._ts,r,a||Wt&&Iu(d)),h!==this._time||!this._ts&&!p){b=0,g&&(f+=this._zTime=I?-ft:ft);break}}d=g}}if(b&&!r&&(this.pause(),b.render(h>=o?0:-ft)._zTime=h>=o?1:-1,this._ts))return this._start=x,Lo(this),this.render(i,r,a);this._onUpdate&&!r&&vn(this,"onUpdate",!0),(f===c&&this._tTime>=this.totalDuration()||!f&&o)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(f===c&&this._ts>0||!f&&this._ts<0)&&Xi(this,1),!r&&!(i<0&&!o)&&(f||o||!c)&&(vn(this,f===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Ai(r)||(r=Rn(this,r,i)),!(i instanceof ca)){if(Zt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(zt(i))return this.addLabel(i,r);if(Et(i))i=Pt.delayedCall(0,i);else return this}return this!==i?$n(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ln);for(var c=[],u=this._first;u;)u._start>=o&&(u instanceof Pt?r&&c.push(u):(a&&c.push(u),i&&c.push.apply(c,u.getChildren(!0,r,a)))),u=u._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return zt(i)?this.removeLabel(i):Et(i)?this.killTweensOf(i):(i.parent===this&&Do(this,i),i===this._recent&&(this._recent=this._last),mr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=vt(xn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Rn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=Pt.delayedCall(0,r||aa,a);return o.data="isPause",this._hasPause=1,$n(this,o,Rn(this,i))},t.removePause=function(i){var r=this._first;for(i=Rn(this,i);r;)r._start===i&&r.data==="isPause"&&Xi(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)Vi!==o[c]&&o[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=In(i),c=this._first,u=Ai(r),f;c;)c instanceof Pt?VS(c._targets,o)&&(u?(!Vi||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(f=c.getTweensOf(o,r)).length&&a.push.apply(a,f),c=c._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=Rn(a,i),c=r,u=c.startAt,f=c.onStart,l=c.onStartParams,h=c.immediateRender,d,g=Pt.to(a,wn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||ft,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());g._dur!==m&&ds(g,m,0,1).render(g._time,!0,!0),d=1}f&&f.apply(g,l||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,wn({startAt:{time:Rn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),qf(this,Rn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),qf(this,Rn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ft)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,c=this.labels,u;for(i=vt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(u in c)c[u]>=a&&(c[u]+=i);return mr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),mr(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,c=Ln,u,f,l;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(l=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),f=o._start,f>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,$n(a,o,f-o._delay,1)._lock=0):c=f,f<0&&o._ts&&(r-=f,(!l&&!a._dp||l&&l.smoothChildTiming)&&(a._start+=vt(f/a._ts),a._time-=f,a._tTime-=f),a.shiftChildren(-f,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=u;ds(a,a===yt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(yt._ts&&(yp(yt,So(i,yt)),xp=xn.frame),xn.frame>=Hf){Hf+=Sn.autoSleep||120;var r=yt._first;if((!r||!r._ts)&&Sn.autoSleep&&xn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||xn.sleep()}}},e})(ca);wn(tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var uT=function(e,t,n,i,r,a,o){var c=new un(this._pt,e,t,0,1,Yp,null,r),u=0,f=0,l,h,d,g,_,m,p,b;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=oa(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),h=n.match(Al)||[];l=Al.exec(i);)g=l[0],_=i.substring(u,l.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[f++]&&(m=parseFloat(h[f-1])||0,c._pt={_next:c._pt,p:_||f===1?_:",",s:m,c:g.charAt(1)==="="?Zr(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},u=Al.lastIndex);return c.c=u<i.length?i.substring(u,i.length):"",c.fp=o,(mp.test(i)||p)&&(c.e=0),this._pt=c,c},Fu=function(e,t,n,i,r,a,o,c,u,f){Et(i)&&(i=i(r||0,e,a));var l=e[t],h=n!=="get"?n:Et(l)?u?e[t.indexOf("set")||!Et(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():l,d=Et(l)?u?mT:Xp:Ou,g;if(zt(i)&&(~i.indexOf("random(")&&(i=oa(i)),i.charAt(1)==="="&&(g=Zr(h,i)+(Kt(h)||0),(g||g===0)&&(i=g))),!f||h!==i||Gc)return!isNaN(h*i)&&i!==""?(g=new un(this._pt,e,t,+h||0,i-(h||0),typeof l=="boolean"?_T:Kp,0,d),u&&(g.fp=u),o&&g.modifier(o,this,e),this._pt=g):(!l&&!(t in e)&&Cu(t,i),uT.call(this,e,t,h,i,d,c||Sn.stringFilter,u))},hT=function(e,t,n,i,r){if(Et(e)&&(e=Ks(e,r,t,n,i)),!oi(e)||e.style&&e.nodeType||Zt(e)||dp(e))return zt(e)?Ks(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=Ks(e[o],r,t,n,i);return a},Wp=function(e,t,n,i,r,a){var o,c,u,f;if(gn[e]&&(o=new gn[e]).init(r,o.rawVars?t[e]:hT(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new un(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==qr))for(u=n._ptLookup[n._targets.indexOf(r)],f=o._props.length;f--;)u[o._props[f]]=c;return o},Vi,Gc,Nu=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,u=i.onUpdate,f=i.runBackwards,l=i.yoyoEase,h=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!Eu,x=e.timeline,T,E,A,y,M,I,R,L,F,B,N,z,O;if(x&&(!h||!r)&&(r="none"),e._ease=gr(r,us.ease),e._yEase=l?zp(gr(l===!0?r:l,us.ease)):0,l&&e._yoyo&&!e._repeat&&(l=e._yEase,e._yEase=e._ease,e._ease=l),e._from=!x&&!!i.runBackwards,!x||h&&!i.stagger){if(L=m[0]?pr(m[0]).harness:0,z=L&&i[L.prop],T=Mo(i,Pu),_&&(_._zTime<0&&_.progress(1),t<0&&f&&o&&!d?_.render(-1,!0):_.revert(f&&g?ao:BS),_._lazy=0),a){if(Xi(e._startAt=Pt.set(m,wn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ln(c),startAt:null,delay:0,onUpdate:u&&function(){return vn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt||!o&&!d)&&e._startAt.revert(ao),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&g&&!_){if(t&&(o=!1),A=wn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ln(c),immediateRender:o,stagger:0,parent:p},T),z&&(A[L.prop]=z),Xi(e._startAt=Pt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt?e._startAt.revert(ao):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,ft,ft);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&ln(c)||c&&!g,E=0;E<m.length;E++){if(M=m[E],R=M._gsap||Lu(m)[E]._gsap,e._ptLookup[E]=B={},Uc[R.id]&&Wi.length&&yo(),N=b===m?E:b.indexOf(M),L&&(F=new L).init(M,z||T,e,N,b)!==!1&&(e._pt=y=new un(e._pt,M,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(ee){B[ee]=y}),F.priority&&(I=1)),!L||z)for(A in T)gn[A]&&(F=Wp(A,T,e,N,M,b))?F.priority&&(I=1):B[A]=y=Fu.call(e,M,A,"get",T[A],N,b,0,i.stringFilter);e._op&&e._op[E]&&e.kill(M,e._op[E]),v&&e._pt&&(Vi=e,yt.killTweensOf(M,B,e.globalTime(t)),O=!e.parent,Vi=0),e._pt&&c&&(Uc[R.id]=1)}I&&Jp(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!O,h&&t<=0&&x.render(Ln,!0,!0)},fT=function(e,t,n,i,r,a,o,c){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],f,l,h,d;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(f=h[d][t],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==t&&f.fp!==t;)f=f._next;if(!f)return Gc=1,e.vars[t]="+=0",Nu(e,o),Gc=0,c?sa(t+" not eligible for reset"):1;u.push(f)}for(d=u.length;d--;)l=u[d],f=l._pt||l,f.s=(i||i===0)&&!r?i:f.s+(i||0)+a*f.c,f.c=n-f.s,l.e&&(l.e=At(n)+Kt(l.e)),l.b&&(l.b=f.s+Kt(l.b))},dT=function(e,t){var n=e[0]?pr(e[0]).harness:0,i=n&&n.aliases,r,a,o,c;if(!i)return t;r=hs({},t);for(a in i)if(a in r)for(c=i[a].split(","),o=c.length;o--;)r[c[o]]=r[a];return r},pT=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Zt(t))o=n[e]||(n[e]=[]),t.forEach(function(c,u){return o.push({t:u/(t.length-1)*100,v:c,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Ks=function(e,t,n,i,r){return Et(e)?e.call(t,n,i,r):zt(e)&&~e.indexOf("random(")?oa(e):e},jp=Du+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",qp={};cn(jp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return qp[s]=1});var Pt=(function(s){hp(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:qs(i))||this;var c=o.vars,u=c.duration,f=c.delay,l=c.immediateRender,h=c.stagger,d=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,b=i.parent||yt,v=(Zt(n)||dp(n)?Ai(n[0]):"length"in i)?[n]:In(n),x,T,E,A,y,M,I,R;if(o._targets=v.length?Lu(v):sa("GSAP target "+n+" not found. https://gsap.com",!Sn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||h||Za(u)||Za(f)){if(i=o.vars,x=o.timeline=new tn({data:"nested",defaults:_||{},targets:b&&b.data==="nested"?b.vars.targets:v}),x.kill(),x.parent=x._dp=xi(o),x._start=0,h||Za(u)||Za(f)){if(A=v.length,I=h&&Pp(h),oi(h))for(y in h)~jp.indexOf(y)&&(R||(R={}),R[y]=h[y]);for(T=0;T<A;T++)E=Mo(i,qp),E.stagger=0,p&&(E.yoyoEase=p),R&&hs(E,R),M=v[T],E.duration=+Ks(u,xi(o),T,M,v),E.delay=(+Ks(f,xi(o),T,M,v)||0)-o._delay,!h&&A===1&&E.delay&&(o._delay=f=E.delay,o._start+=f,E.delay=0),x.to(M,E,I?I(T,M,v):0),x._ease=et.none;x.duration()?u=f=0:o.timeline=0}else if(g){qs(wn(x.vars.defaults,{ease:"none"})),x._ease=gr(g.ease||i.ease||"none");var L=0,F,B,N;if(Zt(g))g.forEach(function(z){return x.to(v,z,">")}),x.duration();else{E={};for(y in g)y==="ease"||y==="easeEach"||pT(y,g[y],E,g.easeEach);for(y in E)for(F=E[y].sort(function(z,O){return z.t-O.t}),L=0,T=0;T<F.length;T++)B=F[T],N={ease:B.e,duration:(B.t-(T?F[T-1].t:0))/100*u},N[y]=B.v,x.to(v,N,L),L+=N.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||o.duration(u=x.duration())}else o.timeline=0;return d===!0&&!Eu&&(Vi=xi(o),yt.killTweensOf(v),Vi=0),$n(b,xi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(l||!u&&!g&&o._start===vt(b._time)&&ln(l)&&jS(xi(o))&&b.data!=="nested")&&(o._tTime=-ft,o.render(Math.max(0,-f)||0)),m&&wp(xi(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,c=this._tDur,u=this._dur,f=i<0,l=i>c-ft&&!f?c:i<ft?0:i,h,d,g,_,m,p,b,v,x;if(!u)XS(this,i,r,a);else if(l!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f||this._lazy){if(h=l,v=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&f)return this.totalTime(_*100+i,r,a);if(h=vt(l%_),l===c?(g=this._repeat,h=u):(m=vt(l/_),g=~~m,g&&g===m?(h=u,g--):h>u&&(h=u)),p=this._yoyo&&g&1,p&&(x=this._yEase,h=u-h),m=fs(this._tTime,_),h===o&&!a&&this._initted&&g===m)return this._tTime=l,this;g!==m&&(v&&this._yEase&&Vp(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(vt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Ap(this,f?i:h,a,r,l))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(i,r,a)}if(this._tTime=l,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(x||this._ease)(h/u),this._from&&(this.ratio=b=1-b),!o&&l&&!r&&!m&&(vn(this,"onStart"),this._tTime!==l))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(f&&kc(this,i,r,a),vn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&vn(this,"onRepeat"),(l===this._tDur||!l)&&this._tTime===l&&(f&&!this._onUpdate&&kc(this,i,!0,!0),(i||!u)&&(l===this._tDur&&this._ts>0||!l&&this._ts<0)&&Xi(this,1),!r&&!(f&&!o)&&(l||o||p)&&(vn(this,l===c?"onComplete":"onReverseComplete",!0),this._prom&&!(l<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,c){la||xn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||Nu(this,u),f=this._ease(u/this._dur),fT(this,i,r,a,o,f,u,c)?this.resetTo(i,r,a,o,1):(Io(this,0),this.parent||Tp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ks(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Wt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Vi&&Vi.vars.overwrite!==!0)._first||ks(this),this.parent&&a!==this.timeline.totalDuration()&&ds(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?In(i):o,u=this._ptLookup,f=this._pt,l,h,d,g,_,m,p;if((!r||r==="all")&&GS(o,c))return r==="all"&&(this._pt=0),ks(this);for(l=this._op=this._op||[],r!=="all"&&(zt(r)&&(_={},cn(r,function(b){return _[b]=1}),r=_),r=dT(o,r)),p=o.length;p--;)if(~c.indexOf(o[p])){h=u[p],r==="all"?(l[p]=r,g=h,d={}):(d=l[p]=l[p]||{},g=r);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Do(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&f&&ks(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Xs(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Xs(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return yt.killTweensOf(i,r,a)},e})(ca);wn(Pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});cn("staggerTo,staggerFrom,staggerFromTo",function(s){Pt[s]=function(){var e=new tn,t=zc.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Ou=function(e,t,n){return e[t]=n},Xp=function(e,t,n){return e[t](n)},mT=function(e,t,n,i){return e[t](i.fp,n)},gT=function(e,t,n){return e.setAttribute(t,n)},Uu=function(e,t){return Et(e[t])?Xp:wu(e[t])&&e.setAttribute?gT:Ou},Kp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},_T=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Yp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ku=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},bT=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},xT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Do(this,t,"_pt"):t.dep||(n=1),t=i;return!n},vT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Jp=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},un=(function(){function s(t,n,i,r,a,o,c,u,f){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Kp,this.d=c||this,this.set=u||Ou,this.pr=f||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=vT,this.m=n,this.mt=r,this.tween=i},s})();cn(Du+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Pu[s]=1});En.TweenMax=En.TweenLite=Pt;En.TimelineLite=En.TimelineMax=tn;yt=new tn({sortChildren:!1,defaults:us,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sn.stringFilter=Bp;var _r=[],lo={},yT=[],Kf=0,MT=0,Ll=function(e){return(lo[e]||yT).map(function(t){return t()})},Wc=function(){var e=Date.now(),t=[];e-Kf>2&&(Ll("matchMediaInit"),_r.forEach(function(n){var i=n.queries,r=n.conditions,a,o,c,u;for(o in i)a=Jn.matchMedia(i[o]).matches,a&&(c=1),a!==r[o]&&(r[o]=a,u=1);u&&(n.revert(),c&&t.push(n))}),Ll("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Kf=e,Ll("matchMedia"))},Zp=(function(){function s(t,n){this.selector=n&&Vc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=MT++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Et(n)&&(r=i,i=n,n=Et);var a=this,o=function(){var u=_t,f=a.selector,l;return u&&u!==a&&u.data.push(a),r&&(a.selector=Vc(r)),_t=a,l=i.apply(a,arguments),Et(l)&&a._r.push(l),_t=u,a.selector=f,a.isReverted=!1,l};return a.last=o,n===Et?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var i=_t;_t=null,n(this),_t=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Pt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),c=r.data.length,u;c--;)u=r.data[c],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(f){return o.splice(o.indexOf(f),1)}));for(o.map(function(f){return{g:f._dur||f._delay||f._sat&&!f._sat.vars.immediateRender?f.globalTime(0):-1/0,t:f}}).sort(function(f,l){return l.g-f.g||-1/0}).forEach(function(f){return f.t.revert(n)}),c=r.data.length;c--;)u=r.data[c],u instanceof tn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Pt)&&u.revert&&u.revert(n);r._r.forEach(function(f){return f(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=_r.length;a--;)_r[a].id===this.id&&_r.splice(a,1)},e.revert=function(n){this.kill(n||{})},s})(),ST=(function(){function s(t){this.contexts=[],this.scope=t,_t&&_t.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){oi(n)||(n={matches:n});var a=new Zp(0,r||this.scope),o=a.conditions={},c,u,f;_t&&!a.selector&&(a.selector=_t.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(u in n)u==="all"?f=1:(c=Jn.matchMedia(n[u]),c&&(_r.indexOf(a)<0&&_r.push(a),(o[u]=c.matches)&&(f=1),c.addListener?c.addListener(Wc):c.addEventListener("change",Wc)));return f&&i(a,function(l){return a.add(null,l)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),To={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Op(i)})},timeline:function(e){return new tn(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,n,i){zt(e)&&(e=In(e)[0]);var r=pr(e||{}).get,a=n?Sp:Mp;return n==="native"&&(n=""),e&&(t?a((gn[t]&&gn[t].get||r)(e,t,n,i)):function(o,c,u){return a((gn[o]&&gn[o].get||r)(e,o,c,u))})},quickSetter:function(e,t,n){if(e=In(e),e.length>1){var i=e.map(function(f){return fn.quickSetter(f,t,n)}),r=i.length;return function(f){for(var l=r;l--;)i[l](f)}}e=e[0]||{};var a=gn[t],o=pr(e),c=o.harness&&(o.harness.aliases||{})[t]||t,u=a?function(f){var l=new a;qr._pt=0,l.init(e,n?f+n:f,qr,0,[e]),l.render(1,l),qr._pt&&ku(1,qr)}:o.set(e,c);return a?u:function(f){return u(e,c,n?f+n:f,o,1)}},quickTo:function(e,t,n){var i,r=fn.to(e,wn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,u,f){return r.resetTo(t,c,u,f)};return a.tween=r,a},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gr(e.ease,us.ease)),Gf(us,e||{})},config:function(e){return Gf(Sn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!gn[o]&&!En[o]&&sa(t+" effect requires "+o+" plugin.")}),Rl[t]=function(o,c,u){return n(In(o),wn(c||{},r),u)},a&&(tn.prototype[t]=function(o,c,u){return this.add(Rl[t](o,oi(c)?c:(u=c)&&{},this),u)})},registerEase:function(e,t){et[e]=gr(t)},parseEase:function(e,t){return arguments.length?gr(e,t):et},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new tn(e),i,r;for(n.smoothChildTiming=ln(e.smoothChildTiming),yt.remove(n),n._dp=0,n._time=n._tTime=yt._time,i=yt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Pt&&i.vars.onComplete===i._targets[0]))&&$n(n,i,i._start-i._delay),i=r;return $n(yt,n,0),n},context:function(e,t){return e?new Zp(e,t):_t},matchMedia:function(e){return new ST(e)},matchMediaRefresh:function(){return _r.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Wc()},addEventListener:function(e,t){var n=lo[e]||(lo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=lo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:tT,wrapYoyo:nT,distribute:Pp,random:Lp,snap:Dp,normalize:eT,getUnit:Kt,clamp:JS,splitColor:Up,toArray:In,selector:Vc,mapRange:Fp,pipe:$S,unitize:QS,interpolate:iT,shuffle:Cp},install:_p,effects:Rl,ticker:xn,updateRoot:tn.updateRoot,plugins:gn,globalTimeline:yt,core:{PropTween:un,globals:bp,Tween:Pt,Timeline:tn,Animation:ca,getCache:pr,_removeLinkedListItem:Do,reverting:function(){return Wt},context:function(e){return e&&_t&&(_t.data.push(e),e._ctx=_t),_t},suppressOverwrites:function(e){return Eu=e}}};cn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return To[s]=Pt[s]});xn.add(tn.updateRoot);qr=To.to({},{duration:0});var TT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ET=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=TT(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Il=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var c,u;if(zt(r)&&(c={},cn(r,function(f){return c[f]=1}),r=c),t){c={};for(u in r)c[u]=t(r[u]);r=c}ET(o,r)}}}},fn=To.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Wt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Il("roundProps",Hc),Il("modifiers"),Il("snap",Dp))||To;Pt.version=tn.version=fn.version="3.14.2";gp=1;Au()&&ps();et.Power0;et.Power1;et.Power2;et.Power3;et.Power4;et.Linear;et.Quad;et.Cubic;et.Quart;et.Quint;et.Strong;et.Elastic;et.Back;et.SteppedEase;et.Bounce;et.Sine;et.Expo;et.Circ;var Yf,Hi,$r,Bu,fr,Jf,zu,wT=function(){return typeof window<"u"},Ri={},lr=180/Math.PI,Qr=Math.PI/180,Vr=Math.atan2,Zf=1e8,Vu=/([A-Z])/g,AT=/(left|right|width|margin|padding|x)/i,RT=/[\s,\(]\S/,ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},CT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},PT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},DT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},LT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},$p=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Qp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},IT=function(e,t,n){return e.style[t]=n},FT=function(e,t,n){return e.style.setProperty(t,n)},NT=function(e,t,n){return e._gsap[t]=n},OT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},UT=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},kT=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},St="transform",hn=St+"Origin",BT=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in Ri&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=vi(i,o)}):this.tfm[e]=a.x?a[e]:vi(i,e),e===hn&&(this.tfm.zOrigin=a.zOrigin);else return ti.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(St)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(hn,t,"")),e=St}(r||t)&&this.props.push(e,t,r[e])},em=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},zT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Vu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=zu(),(!r||!r.isStart)&&!n[St]&&(em(n),i.zOrigin&&n[hn]&&(n[hn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},tm=function(e,t){var n={target:e,props:[],revert:zT,save:BT};return e._gsap||fn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},nm,qc=function(e,t){var n=Hi.createElementNS?Hi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Hi.createElement(e);return n&&n.style?n:Hi.createElement(e)},yn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Vu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,ms(t)||t,1)||""},$f="O,Moz,ms,Ms,Webkit".split(","),ms=function(e,t,n){var i=t||fr,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!($f[a]+e in r););return a<0?null:(a===3?"ms":a>=0?$f[a]:"")+e},Xc=function(){wT()&&window.document&&(Yf=window,Hi=Yf.document,$r=Hi.documentElement,fr=qc("div")||{style:{}},qc("div"),St=ms(St),hn=St+"Origin",fr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",nm=!!ms("perspective"),zu=fn.core.reverting,Bu=1)},Qf=function(e){var t=e.ownerSVGElement,n=qc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),$r.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),$r.removeChild(n),r},ed=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},im=function(e){var t,n;try{t=e.getBBox()}catch{t=Qf(e),n=1}return t&&(t.width||t.height)||n||(t=Qf(e)),t&&!t.width&&!t.x&&!t.y?{x:+ed(e,["x","cx","x1"])||0,y:+ed(e,["y","cy","y1"])||0,width:0,height:0}:t},rm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&im(e))},Ki=function(e,t){if(t){var n=e.style,i;t in Ri&&t!==hn&&(t=St),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Vu,"-$1").toLowerCase())):n.removeAttribute(t)}},Gi=function(e,t,n,i,r,a){var o=new un(e._pt,t,n,0,1,a?Qp:$p);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},td={deg:1,rad:1,turn:1},VT={grid:1,flex:1},Yi=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=fr.style,c=AT.test(t),u=e.tagName.toLowerCase()==="svg",f=(u?"client":"offset")+(c?"Width":"Height"),l=100,h=i==="px",d=i==="%",g,_,m,p;if(i===a||!r||td[i]||td[a])return r;if(a!=="px"&&!h&&(r=s(e,t,n,"px")),p=e.getCTM&&rm(e),(d||a==="%")&&(Ri[t]||~t.indexOf("adius")))return g=p?e.getBBox()[c?"width":"height"]:e[f],At(d?r/g*l:r/100*g);if(o[c?"width":"height"]=l+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Hi||!_.appendChild)&&(_=Hi.body),m=_._gsap,m&&d&&m.width&&c&&m.time===xn.time&&!m.uncache)return At(r/m.width*l);if(d&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=l+i,g=e[f],b?e.style[t]=b:Ki(e,t)}else(d||a==="%")&&!VT[yn(_,"display")]&&(o.position=yn(e,"position")),_===e&&(o.position="static"),_.appendChild(fr),g=fr[f],_.removeChild(fr),o.position="absolute";return c&&d&&(m=pr(_),m.time=xn.time,m.width=_[f]),At(h?g*r/l:g&&r?l/g*r:0)},vi=function(e,t,n,i){var r;return Bu||Xc(),t in ti&&t!=="transform"&&(t=ti[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ri[t]&&t!=="transform"?(r=ha(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:wo(yn(e,hn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Eo[t]&&Eo[t](e,t,n)||yn(e,t)||vp(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Yi(e,t,r,n)+n:r},HT=function(e,t,n,i){if(!n||n==="none"){var r=ms(t,e,1),a=r&&yn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=yn(e,"borderTopColor"))}var o=new un(this._pt,e.style,t,0,1,Yp),c=0,u=0,f,l,h,d,g,_,m,p,b,v,x,T;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=yn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=yn(e,t)||i,_?e.style[t]=_:Ki(e,t)),f=[n,i],Bp(f),n=f[0],i=f[1],h=n.match(jr)||[],T=i.match(jr)||[],T.length){for(;l=jr.exec(i);)m=l[0],b=i.substring(c,l.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(_=h[u++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),m.charAt(1)==="="&&(m=Zr(d,m)+x),p=parseFloat(m),v=m.substr((p+"").length),c=jr.lastIndex-v.length,v||(v=v||Sn.units[t]||x,c===i.length&&(i+=v,o.e+=v)),x!==v&&(d=Yi(e,t,_,v)||0),o._pt={_next:o._pt,p:b||u===1?b:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?Qp:$p;return mp.test(i)&&(o.e=0),this._pt=o,o},nd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},GT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=nd[n]||n,t[1]=nd[i]||i,t.join(" ")},WT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,c,u;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),u=r.length;--u>-1;)o=r[u],Ri[o]&&(c=1,o=o==="transformOrigin"?hn:St),Ki(n,o);c&&(Ki(n,St),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ha(n,1),a.uncache=1,em(i)))}},Eo={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new un(e._pt,t,n,0,0,WT);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},ua=[1,0,0,1,0,0],sm={},am=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},id=function(e){var t=yn(e,St);return am(t)?ua:t.substr(7).match(pp).map(At)},Hu=function(e,t){var n=e._gsap||pr(e),i=e.style,r=id(e),a,o,c,u;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?ua:r):(r===ua&&!e.offsetParent&&e!==$r&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,o=e.nextElementSibling,$r.appendChild(e)),r=id(e),c?i.display=c:Ki(e,"display"),u&&(o?a.insertBefore(e,o):a?a.appendChild(e):$r.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Kc=function(e,t,n,i,r,a){var o=e._gsap,c=r||Hu(e,!0),u=o.xOrigin||0,f=o.yOrigin||0,l=o.xOffset||0,h=o.yOffset||0,d=c[0],g=c[1],_=c[2],m=c[3],p=c[4],b=c[5],v=t.split(" "),x=parseFloat(v[0])||0,T=parseFloat(v[1])||0,E,A,y,M;n?c!==ua&&(A=d*m-g*_)&&(y=x*(m/A)+T*(-_/A)+(_*b-m*p)/A,M=x*(-g/A)+T*(d/A)-(d*b-g*p)/A,x=y,T=M):(E=im(e),x=E.x+(~v[0].indexOf("%")?x/100*E.width:x),T=E.y+(~(v[1]||v[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&o.smooth?(p=x-u,b=T-f,o.xOffset=l+(p*d+b*_)-p,o.yOffset=h+(p*g+b*m)-b):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=T,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[hn]="0px 0px",a&&(Gi(a,o,"xOrigin",u,x),Gi(a,o,"yOrigin",f,T),Gi(a,o,"xOffset",l,o.xOffset),Gi(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+T)},ha=function(e,t){var n=e._gsap||new Gp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),u=yn(e,hn)||"0",f,l,h,d,g,_,m,p,b,v,x,T,E,A,y,M,I,R,L,F,B,N,z,O,ee,Q,de,G,J,ce,ve,Fe;return f=l=h=_=m=p=b=v=x=0,d=g=1,n.svg=!!(e.getCTM&&rm(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[St]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[St]!=="none"?c[St]:"")),i.scale=i.rotate=i.translate="none"),A=Hu(e,n.svg),n.svg&&(n.uncache?(ee=e.getBBox(),u=n.xOrigin-ee.x+"px "+(n.yOrigin-ee.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Kc(e,O||u,!!O||n.originIsAbsolute,n.smooth!==!1,A)),T=n.xOrigin||0,E=n.yOrigin||0,A!==ua&&(R=A[0],L=A[1],F=A[2],B=A[3],f=N=A[4],l=z=A[5],A.length===6?(d=Math.sqrt(R*R+L*L),g=Math.sqrt(B*B+F*F),_=R||L?Vr(L,R)*lr:0,b=F||B?Vr(F,B)*lr+_:0,b&&(g*=Math.abs(Math.cos(b*Qr))),n.svg&&(f-=T-(T*R+E*F),l-=E-(T*L+E*B))):(Fe=A[6],ce=A[7],de=A[8],G=A[9],J=A[10],ve=A[11],f=A[12],l=A[13],h=A[14],y=Vr(Fe,J),m=y*lr,y&&(M=Math.cos(-y),I=Math.sin(-y),O=N*M+de*I,ee=z*M+G*I,Q=Fe*M+J*I,de=N*-I+de*M,G=z*-I+G*M,J=Fe*-I+J*M,ve=ce*-I+ve*M,N=O,z=ee,Fe=Q),y=Vr(-F,J),p=y*lr,y&&(M=Math.cos(-y),I=Math.sin(-y),O=R*M-de*I,ee=L*M-G*I,Q=F*M-J*I,ve=B*I+ve*M,R=O,L=ee,F=Q),y=Vr(L,R),_=y*lr,y&&(M=Math.cos(y),I=Math.sin(y),O=R*M+L*I,ee=N*M+z*I,L=L*M-R*I,z=z*M-N*I,R=O,N=ee),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=At(Math.sqrt(R*R+L*L+F*F)),g=At(Math.sqrt(z*z+Fe*Fe)),y=Vr(N,z),b=Math.abs(y)>2e-4?y*lr:0,x=ve?1/(ve<0?-ve:ve):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!am(yn(e,St)),O&&e.setAttribute("transform",O))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(d*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=f-((n.xPercent=f&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=l-((n.yPercent=l&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-l)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=At(d),n.scaleY=At(g),n.rotation=At(_)+o,n.rotationX=At(m)+o,n.rotationY=At(p)+o,n.skewX=b+o,n.skewY=v+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(u.split(" ")[2])||!t&&n.zOrigin||0)&&(i[hn]=wo(u)),n.xOffset=n.yOffset=0,n.force3D=Sn.force3D,n.renderTransform=n.svg?qT:nm?om:jT,n.uncache=0,n},wo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Fl=function(e,t,n){var i=Kt(t);return At(parseFloat(t)+parseFloat(Yi(e,"x",n+"px",i)))+i},jT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,om(e,t)},ar="0deg",Is="0px",or=") ",om=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.z,u=n.rotation,f=n.rotationY,l=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,v=n.zOrigin,x="",T=p==="auto"&&e&&e!==1||p===!0;if(v&&(l!==ar||f!==ar)){var E=parseFloat(f)*Qr,A=Math.sin(E),y=Math.cos(E),M;E=parseFloat(l)*Qr,M=Math.cos(E),a=Fl(b,a,A*M*-v),o=Fl(b,o,-Math.sin(E)*-v),c=Fl(b,c,y*M*-v+v)}m!==Is&&(x+="perspective("+m+or),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(T||a!==Is||o!==Is||c!==Is)&&(x+=c!==Is||T?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+or),u!==ar&&(x+="rotate("+u+or),f!==ar&&(x+="rotateY("+f+or),l!==ar&&(x+="rotateX("+l+or),(h!==ar||d!==ar)&&(x+="skew("+h+", "+d+or),(g!==1||_!==1)&&(x+="scale("+g+", "+_+or),b.style[St]=x||"translate(0, 0)"},qT=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.rotation,u=n.skewX,f=n.skewY,l=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,v=parseFloat(a),x=parseFloat(o),T,E,A,y,M;c=parseFloat(c),u=parseFloat(u),f=parseFloat(f),f&&(f=parseFloat(f),u+=f,c+=f),c||u?(c*=Qr,u*=Qr,T=Math.cos(c)*l,E=Math.sin(c)*l,A=Math.sin(c-u)*-h,y=Math.cos(c-u)*h,u&&(f*=Qr,M=Math.tan(u-f),M=Math.sqrt(1+M*M),A*=M,y*=M,f&&(M=Math.tan(f),M=Math.sqrt(1+M*M),T*=M,E*=M)),T=At(T),E=At(E),A=At(A),y=At(y)):(T=l,y=h,E=A=0),(v&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(v=Yi(d,"x",a,"px"),x=Yi(d,"y",o,"px")),(g||_||m||p)&&(v=At(v+g-(g*T+_*A)+m),x=At(x+_-(g*E+_*y)+p)),(i||r)&&(M=d.getBBox(),v=At(v+i/100*M.width),x=At(x+r/100*M.height)),M="matrix("+T+","+E+","+A+","+y+","+v+","+x+")",d.setAttribute("transform",M),b&&(d.style[St]=M)},XT=function(e,t,n,i,r){var a=360,o=zt(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?lr:1),u=c-i,f=i+u+"deg",l,h;return o&&(l=r.split("_")[1],l==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),l==="cw"&&u<0?u=(u+a*Zf)%a-~~(u/a)*a:l==="ccw"&&u>0&&(u=(u-a*Zf)%a-~~(u/a)*a)),e._pt=h=new un(e._pt,t,n,i,u,CT),h.e=f,h.u="deg",e._props.push(n),h},rd=function(e,t){for(var n in t)e[n]=t[n];return e},KT=function(e,t,n){var i=rd({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,u,f,l,h,d,g;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),a[St]=t,o=ha(n,1),Ki(n,St),n.setAttribute("transform",u)):(u=getComputedStyle(n)[St],a[St]=t,o=ha(n,1),a[St]=u);for(c in Ri)u=i[c],f=o[c],u!==f&&r.indexOf(c)<0&&(d=Kt(u),g=Kt(f),l=d!==g?Yi(n,c,u,g):parseFloat(u),h=parseFloat(f),e._pt=new un(e._pt,o,c,l,h-l,jc),e._pt.u=g||0,e._props.push(c));rd(o,i)};cn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});Eo[e>1?"border"+s:s]=function(o,c,u,f,l){var h,d;if(arguments.length<4)return h=a.map(function(g){return vi(o,g,u)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(f+"").split(" "),d={},a.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(c,d,l)}});var lm={name:"css",register:Xc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,c=n.vars.startAt,u,f,l,h,d,g,_,m,p,b,v,x,T,E,A,y,M;Bu||Xc(),this.styles=this.styles||tm(e),y=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(f=t[_],!(gn[_]&&Wp(_,t,n,i,e,r)))){if(d=typeof f,g=Eo[_],d==="function"&&(f=f.call(n,i,e,r),d=typeof f),d==="string"&&~f.indexOf("random(")&&(f=oa(f)),g)g(this,e,_,f,n)&&(A=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),f+="",ji.lastIndex=0,ji.test(u)||(m=Kt(u),p=Kt(f),p?m!==p&&(u=Yi(e,_,u,p)+p):m&&(f+=m)),this.add(o,"setProperty",u,f,i,r,0,0,_),a.push(_),y.push(_,0,o[_]);else if(d!=="undefined"){if(c&&_ in c?(u=typeof c[_]=="function"?c[_].call(n,i,e,r):c[_],zt(u)&&~u.indexOf("random(")&&(u=oa(u)),Kt(u+"")||u==="auto"||(u+=Sn.units[_]||Kt(vi(e,_))||""),(u+"").charAt(1)==="="&&(u=vi(e,_))):u=vi(e,_),h=parseFloat(u),b=d==="string"&&f.charAt(1)==="="&&f.substr(0,2),b&&(f=f.substr(2)),l=parseFloat(f),_ in ti&&(_==="autoAlpha"&&(h===1&&vi(e,"visibility")==="hidden"&&l&&(h=0),y.push("visibility",0,o.visibility),Gi(this,o,"visibility",h?"inherit":"hidden",l?"inherit":"hidden",!l)),_!=="scale"&&_!=="transform"&&(_=ti[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Ri,v){if(this.styles.save(_),M=f,d==="string"&&f.substring(0,6)==="var(--"){if(f=yn(e,f.substring(4,f.indexOf(")"))),f.substring(0,5)==="calc("){var I=e.style.perspective;e.style.perspective=f,f=yn(e,"perspective"),I?e.style.perspective=I:Ki(e,"perspective")}l=parseFloat(f)}if(x||(T=e._gsap,T.renderTransform&&!t.parseTransform||ha(e,t.parseTransform),E=t.smoothOrigin!==!1&&T.smooth,x=this._pt=new un(this._pt,o,St,0,1,T.renderTransform,T,0,-1),x.dep=1),_==="scale")this._pt=new un(this._pt,T,"scaleY",T.scaleY,(b?Zr(T.scaleY,b+l):l)-T.scaleY||0,jc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){y.push(hn,0,o[hn]),f=GT(f),T.svg?Kc(e,f,0,E,0,this):(p=parseFloat(f.split(" ")[2])||0,p!==T.zOrigin&&Gi(this,T,"zOrigin",T.zOrigin,p),Gi(this,o,_,wo(u),wo(f)));continue}else if(_==="svgOrigin"){Kc(e,f,1,E,0,this);continue}else if(_ in sm){XT(this,T,_,h,b?Zr(h,b+f):f);continue}else if(_==="smoothOrigin"){Gi(this,T,"smooth",T.smooth,f);continue}else if(_==="force3D"){T[_]=f;continue}else if(_==="transform"){KT(this,f,e);continue}}else _ in o||(_=ms(_)||_);if(v||(l||l===0)&&(h||h===0)&&!RT.test(f)&&_ in o)m=(u+"").substr((h+"").length),l||(l=0),p=Kt(f)||(_ in Sn.units?Sn.units[_]:m),m!==p&&(h=Yi(e,_,u,p)),this._pt=new un(this._pt,v?T:o,_,h,(b?Zr(h,b+l):l)-h,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?LT:jc),this._pt.u=p||0,v&&M!==f?(this._pt.b=u,this._pt.e=M,this._pt.r=DT):m!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=PT);else if(_ in o)HT.call(this,e,_,u,b?b+f:f);else if(_ in e)this.add(e,_,u||e[_],b?b+f:f,i,r);else if(_!=="parseTransform"){Cu(_,f);continue}v||(_ in o?y.push(_,0,o[_]):typeof e[_]=="function"?y.push(_,2,e[_]()):y.push(_,1,u||e[_])),a.push(_)}}A&&Jp(this)},render:function(e,t){if(t.tween._time||!zu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:vi,aliases:ti,getSetter:function(e,t,n){var i=ti[t];return i&&i.indexOf(",")<0&&(t=i),t in Ri&&t!==hn&&(e._gsap.x||vi(e,"x"))?n&&Jf===n?t==="scale"?OT:NT:(Jf=n||{})&&(t==="scale"?UT:kT):e.style&&!wu(e.style[t])?IT:~t.indexOf("-")?FT:Uu(e,t)},core:{_removeProperty:Ki,_getMatrix:Hu}};fn.utils.checkPrefix=ms;fn.core.getStyleSaver=tm;(function(s,e,t,n){var i=cn(s+","+e+","+t,function(r){Ri[r]=1});cn(e,function(r){Sn.units[r]="deg",sm[r]=1}),ti[i[13]]=s+","+e,cn(n,function(r){var a=r.split(":");ti[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Sn.units[s]="px"});fn.registerPlugin(lm);var sn=fn.registerPlugin(lm)||fn;sn.core.Tween;const sd=[{key:"eevee",name:"EEVEE",path:"./models/eevee.glb",position:{x:1.7,y:-.35,z:-2.5},rotationY:.25,targetHeight:1.5},{key:"mew",name:"MEW",path:"./models/mew.glb",position:{x:10,y:9.5,z:5},rotationY:0,targetHeight:1.55,isFlying:!0},{key:"vulpix",name:"VULPIX",path:"./models/vulpix-_super_smash_bros._ultimate.glb",position:{x:2.1,y:-4,z:5.8},rotationY:1.55,targetHeight:1.35},{key:"flareon",name:"FLAREON",path:"./models/flareon.glb",position:{x:11.2,y:-4,z:-2.7},rotationY:-.4,targetHeight:1.7},{key:"jolteon",name:"JOLTEON",path:"./models/jolteon.glb",position:{x:2.1,y:4.15,z:-2.1},rotationY:.35,targetHeight:1.7},{key:"bulbasaur",name:"BULBASAUR",path:"./models/bulbasaur_pokemon.glb",position:{x:21.4,y:-1.54,z:4.5},rotationY:-.65,targetHeight:1.65},{key:"umbreon",name:"UMBREON",path:"./models/umbreon.glb",position:{x:27.6,y:-4,z:-3.2},rotationY:2.2,targetHeight:2},{key:"arcanine",name:"ARCANINE",path:"./models/arcanine.glb",position:{x:-5.8,y:-4,z:.5},rotationY:.85,targetHeight:3.3}];function YT(s){const e={};s.traverse(n=>{n.isBone&&(e[n.name]=n)}),e.Waist_03&&(e.Waist_03.rotation.x+=.22),e.LThigh_05&&(e.LThigh_05.rotation.z-=.75,e.LThigh_05.rotation.x+=.35),e.LLeg_06&&(e.LLeg_06.rotation.z+=.95),e.RThigh_011&&(e.RThigh_011.rotation.z-=.55,e.RThigh_011.rotation.x-=.25),e.RLeg_012&&(e.RLeg_012.rotation.z+=.85),e.LArm_027&&(e.LArm_027.rotation.z-=.55,e.LArm_027.rotation.y+=.4),e.RArm_038&&(e.RArm_038.rotation.z+=.55,e.RArm_038.rotation.y-=.4),e.Head_032&&(e.Head_032.rotation.z+=.15);const t=[];for(let n=1;n<=7;n++){const i=e[`Tail${n}_0${16+n}`];i&&(i.rotation.z+=n<=3?.24:-.22,t.push({bone:i,baseZ:i.rotation.z,baseY:i.rotation.y,idx:n}))}return t}function JT(s){const e={};s.traverse(t=>{t.isBone&&(e[t.name]=t)}),e.LArm_023&&(e.LArm_023.rotation.z-=1.05,e.LArm_023.rotation.x+=.3),e.LForeArm_024&&(e.LForeArm_024.rotation.z+=.65),e.RArm_032&&(e.RArm_032.rotation.z+=1.05,e.RArm_032.rotation.x+=.3),e.RForeArm_033&&(e.RForeArm_033.rotation.z-=.65),e.LThigh_012&&(e.LThigh_012.rotation.z-=1.1),e.LLeg_013&&(e.LLeg_013.rotation.z+=1.35),e.RThigh_016&&(e.RThigh_016.rotation.z-=1.1),e.RLeg_017&&(e.RLeg_017.rotation.z+=1.35),e.Neck_026&&(e.Neck_026.rotation.z+=.35),e.Head_027&&(e.Head_027.rotation.y+=.25,e.Head_027.rotation.z-=.15)}function ZT(){const s=new Mi,e=.42,t=new _o(e,24,16,0,Math.PI*2,0,Math.PI/2),n=new Jt({color:15017249,roughness:.22,metalness:.15});s.add(new pt(t,n));const i=new _o(e,24,16,0,Math.PI*2,Math.PI/2,Math.PI/2),r=new Jt({color:16054008,roughness:.28,metalness:.1});s.add(new pt(i,r));const a=new bu(e*.99,.045,10,32),o=new Jt({color:1382428,roughness:.5}),c=new pt(a,o);c.rotation.x=Math.PI/2,s.add(c);const u=new go(.13,.13,.06,20),f=new pt(u,o);f.rotation.x=Math.PI/2,f.position.z=e*.96,s.add(f);const l=new go(.085,.085,.08,20),h=new Jt({color:16777215,emissive:16777215,emissiveIntensity:.25,roughness:.2}),d=new pt(l,h);return d.rotation.x=Math.PI/2,d.position.z=e*.98,s.add(d),{group:s,btnMat:h}}function $T(s,e,t){const n=new Map,i=new Set;let r=!1,a=null,o=null;const c=sd.length;function u(_,m=!1){const p=document.getElementById("catch-toast");p&&(a&&clearTimeout(a),p.textContent=_,p.classList.toggle("master",m),p.classList.add("visible"),a=setTimeout(()=>{p.classList.remove("visible")},m?5200:3600))}function f(){const _=document.getElementById("pokedex-counter"),m=document.getElementById("pokedex-count");!_||!m||(m.textContent=`${i.size} / ${c}`,i.size>0&&_.classList.add("visible"),i.size===c&&_.classList.add("complete"))}function l(_){const m=document.createElement("div");m.className="poke-stars",m.innerHTML=`
      <span class="poke-star s1">★</span>
      <span class="poke-star s2">✦</span>
      <span class="poke-star s3">★</span>
      <span class="poke-star s4">✦</span>
    `;const p=new Tu(m);p.position.set(_.x,_.y+.6,_.z),e.add(p),setTimeout(()=>{e.remove(p),m.remove()},1100)}sd.forEach(_=>{s.load(_.path,m=>{const p=m.scene;if(_.key==="bulbasaur"){const B=[];p.traverse(N=>{N.isMesh&&N.name.toLowerCase().includes("pplane")&&B.push(N)}),B.forEach(N=>N.parent?.remove(N))}let b=[];_.isFlying?b=YT(p):_.pose==="laying"&&JT(p),p.updateMatrixWorld(!0);const v=new Tn().setFromObject(p),x=new D;v.getSize(x);const T=x.y>0?_.targetHeight/x.y:1;p.scale.setScalar(T),p.rotation.order="YXZ",p.rotation.y=_.rotationY||0,_.rotationX&&(p.rotation.x=_.rotationX),p.updateMatrixWorld(!0);const E=new Tn().setFromObject(p),A=new D,y=new D;E.getCenter(A),E.getSize(y),p.position.set(_.position.x-A.x,_.position.y-E.min.y,_.position.z-A.z);let M=p;if(_.isFlying){const B=new Mi;B.position.set(_.position.x,_.position.y,_.position.z),p.position.sub(B.position),B.add(p),e.add(B),M=B}else e.add(p);const I={id:"pokemon",pokemonKey:_.key};p.userData=I,p.traverse(B=>{B.isMesh&&(B.userData=I,B.castShadow=!0,B.receiveShadow=!1)});const R=new D(Math.max(y.x*1.45,1.5),Math.max(y.y*1.45,1.5),Math.max(y.z*1.45,1.5)),L=new pt(new Gn(R.x,R.y,R.z),new Hn({transparent:!0,opacity:0,depthWrite:!1})),F=new D(_.position.x,_.position.y+y.y*.5,_.position.z);L.position.copy(F),L.userData=I,L.castShadow=!1,L.receiveShadow=!1,e.add(L),n.set(_.key,{cfg:_,model:M,hitbox:L,worldCenter:F,groundY:_.isFlying?-4:_.position.y,caught:!1,tailBones:b})})});function h(_){if(r)return;const m=n.get(_);if(!m||m.caught)return;r=!0,m.caught=!0,e.remove(m.hitbox),m.cfg.isTutorial;const{group:p,btnMat:b}=ZT(),v=new D;t.getWorldDirection(v);const x=t.position.clone().addScaledVector(v,3.2).add(new D(0,-1.2,0)),T=m.worldCenter.clone(),E=new D(T.x,m.groundY+.44,T.z);p.position.copy(x),p.scale.setScalar(.85),p.lookAt(T),e.add(p);const A=new xo(16729173,0,10);A.position.copy(T),e.add(A);const y=Math.max(x.y,T.y)+4.2,M=sn.timeline(),I={t:0};M.to(I,{t:1,duration:.52,ease:"power1.inOut",onUpdate:()=>{const R=I.t;p.position.x=dr.lerp(x.x,T.x,R),p.position.z=dr.lerp(x.z,T.z,R);const L=dr.lerp(x.y,T.y,R),F=4*R*(1-R)*(y-(x.y+T.y)*.5);p.position.y=L+F,p.rotation.x+=.32}}),M.to(A,{intensity:18,duration:.12,ease:"power2.out"},"impact").to(m.model.scale,{x:.001,y:.001,z:.001,duration:.24,ease:"power2.in"},"impact").to(m.model.position,{x:T.x,y:T.y,z:T.z,duration:.24,ease:"power2.in"},"impact").to(A,{intensity:0,duration:.25,ease:"power2.in"},"impact+=0.12").call(()=>{m.model.visible=!1}),M.to(p.position,{y:E.y+.9,duration:.18,ease:"power2.out"}).to(p.position,{y:E.y,duration:.22,ease:"bounce.out"}).call(()=>{p.rotation.set(0,0,0),p.lookAt(t.position.x,E.y,t.position.z)});for(let R=0;R<3;R++)M.call(()=>{b.color.setHex(16724804),b.emissive.setHex(16720435),b.emissiveIntensity=1.8}).to(p.rotation,{z:.45,duration:.12,ease:"power2.out"}).to(p.rotation,{z:-.4,duration:.16,ease:"power2.inOut"}).to(p.rotation,{z:0,duration:.12,ease:"power2.out"}).call(()=>{b.color.setHex(16777215),b.emissive.setHex(16777215),b.emissiveIntensity=.2}).to({},{duration:.16});M.call(()=>{b.color.setHex(65484),b.emissive.setHex(65484),b.emissiveIntensity=2.4,l(E),i.add(_),f();const R=c-i.size;R===0?u(`★ MASTER TRAINER! All ${c} / ${c} Pokémon caught!`,!0):i.size===1?u(`★ Gotcha! ${m.cfg.name} caught! (1 / ${c}) — ${R} more hidden around the room & outside!`):u(`★ Gotcha! ${m.cfg.name} caught! (${i.size} / ${c})`)}).to({},{duration:.55}).to(p.scale,{x:.001,y:.001,z:.001,duration:.3,ease:"back.in(1.8)"}).call(()=>{e.remove(p),e.remove(A),r=!1})}function d(_){}function g(_){const m=n.get("mew");if(m&&!m.caught){const b=_*.52,v=10.5+Math.sin(b)*6.5,x=5+Math.sin(b*2)*3.8,T=9.5+Math.sin(_*2)*1.1,E=Math.cos(b)*6.8*.52,A=Math.cos(b*2)*3.8*2*.52;if(m.model.position.set(v,T,x),m.model.rotation.y=Math.atan2(E,A),m.model.rotation.z=-Math.sin(b)*.18,m.worldCenter.set(v,T,x),m.hitbox.position.set(v,T,x),m.tailBones)for(const y of m.tailBones)y.bone.rotation.y=y.baseY+Math.sin(_*3.5-y.idx*.45)*.16}}return{catchPokemon:h,setHintsTemporarilyHidden:d,update:g,isCatching:()=>r}}function QT(s,e,{path:t,scale:n,position:i,rotation:r,userData:a,materialOverride:o=null,castShadow:c=!0,onLoaded:u=null}){s.load(t,f=>{const l=f.scene;l.scale.set(n.x,n.y,n.z),l.position.set(i.x,i.y,i.z),r&&l.rotation.set(r.x,r.y,r.z),l.userData=a,l.traverse(h=>{h.isMesh&&(h.userData=a,o&&(typeof o=="function"?o(h):o.isMaterial&&(h.material=o)),h.castShadow=c,h.receiveShadow=!0)}),e.add(l),u&&u(l)})}function eE(s,e,t,n=null){const i={computerScreen:null,phone:null,chair:null};return[{path:"./models/lightBulb.glb",scale:{x:10,y:10,z:10},position:{x:10,y:15,z:5},rotation:{x:Math.PI,y:0,z:0},userData:{id:"lightBulb"},castShadow:!1,materialOverride:a=>{const o=a.name.toLowerCase();if(o.includes("object_4")||o.includes("glass")||o.includes("light")){a.material=new Jt({color:16755200,emissive:16755200,emissiveIntensity:.5,toneMapped:!0,roughness:.4,metalness:0,transparent:!0,opacity:.3});const c=new xo(16755200,480,34);c.position.set(0,3,0),c.castShadow=!0,c.shadow.bias=-.001,c.shadow.mapSize.set(1024,1024),a.add(c)}}},{path:"./models/bookcaseClosed.glb",scale:{x:10,y:10,z:10},position:{x:.5,y:-4,z:-1.5},userData:{id:"bookcase"},materialOverride:t.furnitureMaterial},{path:"./models/books.glb",scale:{x:10,y:10,z:10},position:{x:1,y:2.1,z:-2},userData:{id:"book"}},{path:"./models/plantSmall1.glb",scale:{x:10,y:10,z:10},position:{x:3,y:-.3,z:-2.2},userData:{id:"plant"}},{path:"./models/desk.glb",scale:{x:10,y:10,z:10},position:{x:5,y:-4,z:-.5},userData:{id:"desk"},materialOverride:t.furnitureMaterial},{path:"./models/speaker.glb",scale:{x:10,y:10,z:10},position:{x:12.5,y:-3.5,z:-3},userData:{id:"speaker"}},{path:"./models/custom_gaming_pc.glb",scale:{x:.5,y:.5,z:.5},position:{x:9,y:-2.6,z:-2.2},userData:{id:"custom_gaming_pc"}},{path:"./models/speakerSmall.glb",scale:{x:10,y:10,z:10},position:{x:5.5,y:-.2,z:-3},userData:{id:"speakerSmall"}},{path:"./models/chairDesk.glb",scale:{x:10,y:10,z:10},position:{x:11.1,y:-4,z:0},rotation:{x:0,y:Math.PI,z:0},userData:{id:"chair"},onLoaded:a=>{i.chair=a}},{path:"./models/bedSingle.glb",scale:{x:10,y:10,z:10},position:{x:15,y:-4,z:7},userData:{id:"bed"}},{path:"./models/tableCoffeeSquare.glb",scale:{x:10,y:10,z:10},position:{x:19.4,y:-4,z:-1.4},userData:{id:"tableCoffee"},materialOverride:t.furnitureMaterial},{path:"./models/tableCoffee.glb",scale:{x:10,y:10,z:10},position:{x:3.1,y:-4,z:4.5},rotation:{x:0,y:Math.PI/2,z:0},userData:{id:"windowCoffeeTable"},materialOverride:t.furnitureMaterial},{path:"./models/radio.glb",scale:{x:10,y:10,z:10},position:{x:2.6,y:-1.7,z:7.4},rotation:{x:0,y:Math.PI/2,z:0},userData:{id:"radio"},onLoaded:a=>{n?.attachModel(a),a.updateMatrixWorld(!0);const o=new Tn().setFromObject(a),c=new D,u=new D;o.getSize(c),o.getCenter(u);const f=new pt(new Gn(Math.max(c.x*1.25,1.4),Math.max(c.y*1.2,2.2),Math.max(c.z*1.2,3.4)),new Hn({transparent:!0,opacity:0,depthWrite:!1}));f.position.copy(u),f.userData={id:"radio"},f.castShadow=!1,f.receiveShadow=!1,e.add(f)}},{path:"./models/phone2.glb",scale:{x:.8,y:.8,z:.8},position:{x:17,y:-1.7,z:-2},rotation:{x:0,y:Math.PI,z:0},userData:{id:"phone"},materialOverride:a=>{if(a.name.toLowerCase().includes("phonedetails_phonedetails_0")){const o=document.getElementById("phone-interface");if(!o)return;const c=new Ff(o);c.scale.set(.115,.116,.114),c.position.set(-36.2,-40.1,0),c.rotation.y=Math.PI,c.rotation.x=165*(Math.PI/180),c.rotation.z=0,a.add(c),i.phone=c}}},{path:"./models/rugRectangle.glb",scale:{x:10,y:10,z:10},position:{x:2,y:-4,z:14},userData:{id:"rug"}},{path:"./models/monitor.glb",scale:{x:10,y:10,z:10},position:{x:7.5,y:-.25,z:-2.5},userData:{id:"computerScreen"},materialOverride:a=>{if(a.name.toLowerCase().includes("screen")){a.material=new Jt({color:397844,roughness:.15,metalness:.4,emissive:12328,emissiveIntensity:.35});const o=document.getElementById("pc-interface");if(!o)return;const c=new Ff(o);c.rotation.y=Math.PI,c.rotation.x=172*(Math.PI/180),c.rotation.z=Math.PI,c.scale.set(38e-5,31e-5,3e-4),c.position.set(.1975,.1715,-.06),a.add(c),i.computerScreen=c}},onLoaded:a=>{a.updateMatrixWorld(!0);const o=new Tn().setFromObject(a),c=new D,u=new D;o.getSize(c),o.getCenter(u);const f=new pt(new Gn(c.x*1.1,c.y*1.1,Math.max(c.z*1.6,1)),new Hn({transparent:!0,opacity:0,depthWrite:!1}));f.position.copy(u),f.userData={id:"computerScreen"},f.castShadow=!1,f.receiveShadow=!1,e.add(f)}},{path:"./models/computerKeyboard.glb",scale:{x:10,y:10,z:10},position:{x:8,y:-.25,z:-.5},userData:{id:"computerKeyboard"}},{path:"./models/computerMouse.glb",scale:{x:10,y:10,z:10},position:{x:11.5,y:-.25,z:-.7},userData:{id:"computerMouse"}},{path:"./models/wallCornerRond.glb",scale:{x:10,y:10,z:10},position:{x:5,y:-4,z:-5},rotation:{x:0,y:Math.PI,z:0},userData:{id:"wall"},castShadow:!1,materialOverride:t.applyWallMaterial},{path:"./models/wallCornerRond.glb",scale:{x:10,y:10,z:10},position:{x:25.5,y:-4,z:.5},rotation:{x:0,y:Math.PI/2,z:0},userData:{id:"wall"},castShadow:!1,materialOverride:t.applyWallMaterial},{path:"./models/wall.glb",scale:{x:10,y:10,z:10},position:{x:15,y:-4,z:-5},rotation:{x:0,y:Math.PI,z:0},userData:{id:"wall"},castShadow:!1,materialOverride:t.applyWallMaterial},{path:"./models/wall.glb",scale:{x:10,y:10,z:10},position:{x:20,y:-4,z:-5},rotation:{x:0,y:Math.PI,z:0},userData:{id:"wall"},castShadow:!1,materialOverride:t.applyWallMaterial},{path:"./models/wallWindow.glb",scale:{x:10,y:10,z:10},position:{x:-.5,y:-4,z:.5},rotation:{x:0,y:Math.PI*1.5,z:0},userData:{id:"wall"},castShadow:!1,materialOverride:t.applyWallMaterial},{path:"./models/wallHalf.glb",scale:{x:10,y:10,z:10},position:{x:-.5,y:-4,z:10.5},rotation:{x:0,y:Math.PI*1.5,z:0},userData:{id:"wall"},castShadow:!1,materialOverride:t.applyWallMaterial}].forEach(a=>QT(s,e,a)),s.load("./models/streetLight.glb",a=>{const o=a.scene;o.scale.set(20,20,20),o.position.set(-5,-4,-4.5),o.rotation.y=Math.PI/4,o.userData={id:"streetlight"};const c=new xo(16755200,800,100);c.position.set(-.2,.9,0),c.castShadow=!0,c.shadow.bias=-.001,c.shadow.mapSize.set(1024,1024),o.add(c),o.traverse(u=>{if(u.isMesh){u.userData=o.userData,u.castShadow=!0,u.receiveShadow=!0;const f=u.name.toLowerCase();(f.includes("glass")||f.includes("bulb"))&&(u.castShadow=!1,u.material=new Jt({color:16755200,emissive:16755200,emissiveIntensity:4,toneMapped:!1}))}}),e.add(o)}),i}const tE=[{id:"computerScreen",label:"Projects",position:{x:9,y:3.4,z:-2.5}},{id:"phone",label:"Contact",position:{x:17,y:.2,z:-2}},{id:"radio",label:"Radio",position:{x:2.1,y:1.55,z:5.8}}];function nE(s,e){const t=new Map,n=new Set;tE.forEach(({id:a,label:o,position:c})=>{const u=document.createElement("button");u.type="button",u.className="scene-hint",u.dataset.targetId=a,u.setAttribute("aria-label",`Open ${o}`),u.innerHTML=`
      <span class="scene-hint-inner">
        <span class="scene-hint-pill">${o}</span>
        <span class="scene-hint-arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2V13M8 13L3.5 8.5M8 13L12.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </span>
    `,u.addEventListener("click",l=>{l.stopPropagation(),!n.has(a)&&e(a)});const f=new Tu(u);f.position.set(c.x,c.y,c.z),s.add(f),t.set(a,{css2D:f,element:u})});function i(a){if(n.has(a))return;n.add(a);const o=t.get(a);o&&(o.element.classList.add("dismissed"),setTimeout(()=>{o.css2D.visible=!1,o.element.style.display="none"},300))}function r(a){t.forEach((o,c)=>{n.has(c)||o.element.classList.toggle("temporarily-hidden",a)})}return{dismissHint:i,setHintsTemporarilyHidden:r}}const cm={computerScreen:{cameraPos:new D(9,1.3,-.8),lookAt:new D(9,1.3,-2.5),portraitViewDir:new D(0,0,1).normalize(),portraitFitWidth:3.95,portraitPadding:1.08,interfaceId:"pc-interface",navId:"projects"},phone:{cameraPos:new D(17.1,-.1,-2.5),lookAt:new D(17.1,-2.5,-3.5),portraitViewDir:new D(0,2.4,1).normalize(),portraitFitWidth:2.85,portraitPadding:1.12,interfaceId:"phone-interface",navId:"contact"}},ad={position:new D(20,15,30),target:new D(0,0,0)},Hr={lookAt:new D(11.5,-1,4),viewDir:new D(12,17,29).normalize(),fitWidth:32,fitHeight:26,minDistance:46};function iE(){return window.innerWidth<window.innerHeight}function od(s){const e=window.innerWidth/window.innerHeight;if(e<1){const t=dr.degToRad(s.fov),n=Math.tan(t/2),i=Hr.fitHeight/2/n,r=Hr.fitWidth/2/(n*e),a=Math.max(Hr.minDistance,Math.max(i,r)*1.12);return{position:Hr.lookAt.clone().addScaledVector(Hr.viewDir,a),target:Hr.lookAt.clone()}}return{position:ad.position.clone(),target:ad.target.clone()}}function ld(s,e){const t=cm[s],n=window.innerWidth/window.innerHeight;if(n>=1)return{cameraPos:t.cameraPos.clone(),lookAt:t.lookAt.clone()};const i=t.lookAt.clone(),r=t.cameraPos.clone().sub(i).normalize(),a=dr.degToRad(e.fov),o=Math.tan(a/2),u=t.portraitFitWidth/2/(o*n)*t.portraitPadding;return{cameraPos:i.clone().addScaledVector(r,u),lookAt:i}}function rE(s,e,t={},n=null,i=null){const{scene:r,camera:a,renderer:o,controls:c,resizeRenderers:u}=s,f=new Audio("./audio/zoom_sound.mp3"),l=new Audio("./audio/zoom_sound_reverse.mp3"),h=new mb,d=new ne,g=new Set(["computerScreen","phone","radio","pokemon"]);let _=null,m=!1,p={x:0,y:0},b=[],v=[];const x=od(a);a.position.copy(x.position),c.target.copy(x.target),c.maxDistance=95,c.update();function T(G){document.querySelectorAll("[data-nav]").forEach(J=>{J.classList.toggle("active",J.dataset.nav===G)})}function E(G){G.currentTime=0,G.play().catch(()=>{})}function A(){if(!t.chair)return;const G=_==="computerScreen"&&iE();t.chair.visible=!G}function y(){b.forEach(J=>clearTimeout(J)),b=[];const G=document.getElementById("boot-bar-fill");G&&sn.killTweensOf(G)}function M(){y(),B();const G=document.getElementById("pc-boot-screen"),J=document.getElementById("boot-bar-fill"),ce=document.getElementById("boot-status"),ve=document.getElementById("os-workspace"),Fe=document.getElementById("os-topbar");!G||!J||!ce||(ve&&(ve.style.visibility="hidden"),Fe&&(Fe.style.visibility="hidden"),G.classList.remove("fade-out"),G.style.display="flex",J.style.width="0%",ce.textContent="Initializing system...",sn.to(J,{width:"100%",duration:1.85,ease:"power1.inOut"}),b.push(setTimeout(()=>{ce.textContent="Loading portfolio modules..."},650),setTimeout(()=>{ce.textContent="Welcome"},1400),setTimeout(()=>{ve&&(ve.style.visibility="visible"),Fe&&(Fe.style.visibility="visible"),G.classList.add("fade-out")},1900),setTimeout(()=>{G.style.display="none"},2350)))}function I(){v.forEach(J=>clearTimeout(J)),v=[];const G=document.getElementById("phone-connect-fill");G&&sn.killTweensOf(G)}function R(){I();const G=document.getElementById("phone-boot-screen"),J=document.getElementById("phone-connect-fill"),ce=document.getElementById("phone-connect-status"),ve=document.getElementById("phone-topbar"),Fe=document.getElementById("phone-icons"),X=document.getElementById("phone-footer");!G||!J||!ce||(ve&&(ve.style.visibility="hidden"),Fe&&(Fe.style.visibility="hidden"),X&&(X.style.visibility="hidden"),G.classList.remove("fade-out"),G.style.display="flex",J.style.width="0%",ce.textContent="Acquiring signal...",sn.to(J,{width:"100%",duration:1.5,ease:"power1.inOut"}),v.push(setTimeout(()=>{ce.textContent="Syncing directory..."},550),setTimeout(()=>{ce.textContent="Connected — LINE 01"},1150),setTimeout(()=>{ve&&(ve.style.visibility="visible"),Fe&&(Fe.style.visibility="visible"),X&&(X.style.visibility="visible"),G.classList.add("fade-out")},1550),setTimeout(()=>{G.style.display="none"},2e3)))}function L(){y(),I(),document.getElementById("pc-interface")?.classList.remove("active"),document.getElementById("phone-interface")?.classList.remove("active")}function F(G,J="project.html"){if(_!=="computerScreen"||m)return;const ce=document.getElementById("os-workspace"),ve=document.getElementById("project-window"),Fe=document.getElementById("project-frame"),X=document.getElementById("project-title");ce&&(ce.style.display="none"),ve&&(ve.style.display="flex"),X&&(X.textContent=J),Fe&&(Fe.src=G)}function B(){const G=document.getElementById("os-workspace"),J=document.getElementById("project-window"),ce=document.getElementById("project-frame");ce&&(ce.src=""),J&&(J.style.display="none"),G&&(G.style.display="")}function N(){const G=new Date,J=String(G.getHours()).padStart(2,"0"),ce=String(G.getMinutes()).padStart(2,"0"),ve=`${J}:${ce}`,Fe=document.getElementById("os-clock"),X=document.getElementById("phone-clock");Fe&&(Fe.textContent=ve),X&&(X.textContent=ve)}N(),setInterval(N,15e3),window.openProject=F,window.closeProject=B;function z(G){const J=cm[G];if(!J||_===G&&!m)return;e.dismissHint(G),_&&_!==G&&(B(),L()),_=G,m=!0,c.enabled=!1,o.domElement.style.cursor="default",e.setHintsTemporarilyHidden(!0),i?.setHintsTemporarilyHidden(!0),T(J.navId),A(),E(f);const{cameraPos:ce,lookAt:ve}=ld(G,a);sn.killTweensOf(a.position),sn.killTweensOf(c.target),sn.to(a.position,{x:ce.x,y:ce.y,z:ce.z,duration:1.8,ease:"power2.inOut"}),sn.to(c.target,{x:ve.x,y:ve.y,z:ve.z,duration:1.8,ease:"power2.inOut",onUpdate:()=>{a.lookAt(c.target)},onComplete:()=>{m=!1,_===G&&(document.getElementById(J.interfaceId)?.classList.add("active"),G==="computerScreen"?M():G==="phone"&&R())}})}function O(){if(!_&&!m){T("home");return}B(),L(),_=null,m=!0,T("home"),A(),E(l);const G=od(a);sn.killTweensOf(a.position),sn.killTweensOf(c.target),sn.to(a.position,{x:G.position.x,y:G.position.y,z:G.position.z,duration:1.4,ease:"power2.out"}),sn.to(c.target,{x:G.target.x,y:G.target.y,z:G.target.z,duration:1.4,ease:"power2.out",onUpdate:()=>{a.lookAt(c.target)},onComplete:()=>{m=!1,c.enabled=!0,e.setHintsTemporarilyHidden(!1),i?.setHintsTemporarilyHidden(!1)}})}function ee(G,J){d.x=G/window.innerWidth*2-1,d.y=-(J/window.innerHeight)*2+1,h.setFromCamera(d,a);const ce=h.intersectObjects(r.children,!0);for(const ve of ce){const Fe=ve.object?.userData?.id;if(Fe&&g.has(Fe))return ve.object.userData}return null}o.domElement.addEventListener("pointerdown",G=>{p={x:G.clientX,y:G.clientY}}),o.domElement.addEventListener("pointerup",G=>{if(_||m)return;const J=G.clientX-p.x,ce=G.clientY-p.y;if(Math.hypot(J,ce)>6)return;const ve=ee(G.clientX,G.clientY);ve&&(ve.id==="radio"?(e.dismissHint("radio"),n?.toggle()):ve.id==="pokemon"?i?.catchPokemon(ve.pokemonKey):z(ve.id))});let Q=0;o.domElement.addEventListener("pointermove",G=>{if(G.pointerType!=="mouse"||_||m)return;const J=performance.now();if(J-Q<50)return;Q=J;const ce=ee(G.clientX,G.clientY);o.domElement.style.cursor=ce?"pointer":"grab"}),document.querySelectorAll("[data-nav]").forEach(G=>{G.addEventListener("click",J=>{J.stopPropagation();const ce=G.dataset.nav;ce==="home"?O():ce==="projects"?z("computerScreen"):ce==="contact"&&z("phone")})}),document.querySelectorAll(".exit-btn").forEach(G=>{G.addEventListener("click",J=>{J.stopPropagation(),O()})}),window.addEventListener("keydown",G=>{G.key==="Escape"&&_&&O()});const de=document.getElementById("contact-gmail");return de&&de.addEventListener("click",()=>{const G="gafrilatif.aviandi@gmail.com";navigator.clipboard?.writeText&&navigator.clipboard.writeText(G).catch(()=>{});const J=document.getElementById("gmail-copy-pill");J&&(J.textContent="COPIED!",J.classList.add("copied"),setTimeout(()=>{J.textContent="[COPY]",J.classList.remove("copied")},1800)),window.location.href=`mailto:${G}`}),window.addEventListener("resize",()=>{if(u(),A(),_&&!m){const{cameraPos:G,lookAt:J}=ld(_,a);a.position.copy(G),c.target.copy(J),a.lookAt(c.target)}}),T("home"),{zoomToTarget:z,zoomOut:O}}const xt=vS(),um=yS(xt.loadingManager);MS(xt.scene,um);const sE=ES(xt.scene),Fo=PS(xt.scene,{x:2.1,y:-.55,z:5.8}),aE=eE(xt.gltfLoader,xt.scene,um,Fo),hm=$T(xt.gltfLoader,xt.scene,xt.camera);let fm=null;const dm=nE(xt.scene,s=>{s==="radio"?(dm.dismissHint("radio"),Fo.toggle()):fm?.zoomToTarget(s)});fm=rE(xt,dm,aE,Fo,hm);function pm(s){requestAnimationFrame(pm);const e=s*.001;xt.controls.enabled&&xt.controls.update(),sE.update(e),Fo.update(e),hm.update(e),xt.updateAudioListener(),xt.composer.render(xt.scene,xt.camera),xt.cssRenderer.render(xt.scene,xt.camera),xt.css2DRenderer.render(xt.scene,xt.camera)}requestAnimationFrame(pm);
