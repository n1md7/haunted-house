var io=Object.defineProperty;var so=(r,e,t)=>e in r?io(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var dt=(r,e,t)=>(so(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Os="150",bn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Sn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ro=0,Ys=1,ao=2,ba=1,Sa=2,ii=3,tn=0,St=1,Jt=2,en=0,Bn=1,js=2,Zs=3,Ks=4,oo=5,zn=100,lo=101,co=102,Js=103,Qs=104,ho=200,uo=201,fo=202,po=203,wa=204,Ea=205,mo=206,go=207,_o=208,xo=209,vo=210,yo=0,Mo=1,bo=2,Ts=3,So=4,wo=5,Eo=6,Ao=7,Aa=0,To=1,Co=2,$t=0,Lo=1,Do=2,Po=3,Ro=4,Io=5,Ta=300,Vn=301,Hn=302,Cs=303,Ls=304,Oi=306,Ds=1e3,Dt=1001,Ps=1002,ht=1003,er=1004,Wi=1005,At=1006,Fo=1007,ai=1008,mn=1009,No=1010,Oo=1011,Ca=1012,zo=1013,dn=1014,fn=1015,oi=1016,Uo=1017,Bo=1018,kn=1020,ko=1021,Pt=1023,Go=1024,Vo=1025,pn=1026,Wn=1027,Ho=1028,Wo=1029,Xo=1030,qo=1031,$o=1033,Xi=33776,qi=33777,$i=33778,Yi=33779,tr=35840,nr=35841,ir=35842,sr=35843,Yo=36196,rr=37492,ar=37496,or=37808,lr=37809,cr=37810,hr=37811,ur=37812,dr=37813,fr=37814,pr=37815,mr=37816,gr=37817,_r=37818,xr=37819,vr=37820,yr=37821,ji=36492,jo=36283,Mr=36284,br=36285,Sr=36286,gn=3e3,Ue=3001,Zo=3200,Ko=3201,La=0,Jo=1,Ot="srgb",li="srgb-linear",Da="display-p3",Zi=7680,Qo=519,wr=35044,Er="300 es",Rs=1035;class yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ki=Math.PI/180,Ar=180/Math.PI;function ui(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tt[r&255]+tt[r>>8&255]+tt[r>>16&255]+tt[r>>24&255]+"-"+tt[e&255]+tt[e>>8&255]+"-"+tt[e>>16&15|64]+tt[e>>24&255]+"-"+tt[t&63|128]+tt[t>>8&255]+"-"+tt[t>>16&255]+tt[t>>24&255]+tt[n&255]+tt[n>>8&255]+tt[n>>16&255]+tt[n>>24&255]).toLowerCase()}function ft(r,e,t){return Math.max(e,Math.min(t,r))}function el(r,e){return(r%e+e)%e}function Ji(r,e,t){return(1-t)*r+t*e}function Tr(r){return(r&r-1)===0&&r!==0}function tl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function mi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],m=n[5],_=n[8],p=i[0],f=i[3],g=i[6],w=i[1],x=i[4],b=i[7],E=i[2],L=i[5],I=i[8];return s[0]=o*p+a*w+c*E,s[3]=o*f+a*x+c*L,s[6]=o*g+a*b+c*I,s[1]=l*p+h*w+d*E,s[4]=l*f+h*x+d*L,s[7]=l*g+h*b+d*I,s[2]=u*p+m*w+_*E,s[5]=u*f+m*x+_*L,s[8]=u*g+m*b+_*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*s,m=l*s-o*c,_=t*d+n*u+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=d*p,e[1]=(i*l-h*n)*p,e[2]=(a*n-i*o)*p,e[3]=u*p,e[4]=(h*t-i*c)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qi.makeScale(e,t)),this}rotate(e){return this.premultiply(Qi.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qi.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qi=new ut;function Pa(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ci(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class _n{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],m=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(d!==p||c!==u||l!==m||h!==_){let f=1-a;const g=c*u+l*m+h*_+d*p,w=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const E=Math.sqrt(x),L=Math.atan2(E,g*w);f=Math.sin(f*L)/E,a=Math.sin(a*L)/E}const b=a*w;if(c=c*f+u*b,l=l*f+m*b,h=h*f+_*b,d=d*f+p*b,f===1-a){const E=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=E,l*=E,h*=E,d*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+h*d+c*m-l*u,e[t+1]=c*_+h*u+l*d-a*m,e[t+2]=l*_+h*m+a*u-c*d,e[t+3]=h*_-a*d-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(s/2),u=c(n/2),m=c(i/2),_=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*m*_,this._y=l*m*d-u*h*_,this._z=l*h*_+u*m*d,this._w=l*h*d-u*m*_;break;case"YXZ":this._x=u*h*d+l*m*_,this._y=l*m*d-u*h*_,this._z=l*h*_-u*m*d,this._w=l*h*d+u*m*_;break;case"ZXY":this._x=u*h*d-l*m*_,this._y=l*m*d+u*h*_,this._z=l*h*_+u*m*d,this._w=l*h*d-u*m*_;break;case"ZYX":this._x=u*h*d-l*m*_,this._y=l*m*d+u*h*_,this._z=l*h*_-u*m*d,this._w=l*h*d+u*m*_;break;case"YZX":this._x=u*h*d+l*m*_,this._y=l*m*d+u*h*_,this._z=l*h*_-u*m*d,this._w=l*h*d-u*m*_;break;case"XZY":this._x=u*h*d-l*m*_,this._y=l*m*d-u*h*_,this._z=l*h*_+u*m*d,this._w=l*h*d+u*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,h=c*n+a*t-s*i,d=c*i+s*n-o*t,u=-s*t-o*n-a*i;return this.x=l*c+u*-s+h*-a-d*-o,this.y=h*c+u*-o+d*-s-l*-a,this.z=d*c+u*-a+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return es.copy(this).projectOnVector(e),this.sub(es)}reflect(e){return this.sub(es.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const es=new D,Cr=new _n;function Gn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ts(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const nl=new ut().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),il=new ut().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Qt=new D;function sl(r){return r.convertSRGBToLinear(),Qt.set(r.r,r.g,r.b).applyMatrix3(il),r.setRGB(Qt.x,Qt.y,Qt.z)}function rl(r){return Qt.set(r.r,r.g,r.b).applyMatrix3(nl),r.setRGB(Qt.x,Qt.y,Qt.z).convertLinearToSRGB()}const al={[li]:r=>r,[Ot]:r=>r.convertSRGBToLinear(),[Da]:sl},ol={[li]:r=>r,[Ot]:r=>r.convertLinearToSRGB(),[Da]:rl},lt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return li},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=al[e],i=ol[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let wn;class Ra{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wn===void 0&&(wn=ci("canvas")),wn.width=e.width,wn.height=e.height;const n=wn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ci("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Gn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ia{constructor(e=null){this.isSource=!0,this.uuid=ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ns(i[o].image)):s.push(ns(i[o]))}else s=ns(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ns(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ra.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ll=0;class pt extends yn{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,n=Dt,i=Dt,s=At,o=ai,a=Pt,c=mn,l=pt.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ll++}),this.uuid=ui(),this.name="",this.source=new Ia(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ta)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ds:e.x=e.x-Math.floor(e.x);break;case Dt:e.x=e.x<0?0:1;break;case Ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ds:e.y=e.y-Math.floor(e.y);break;case Dt:e.y=e.y<0?0:1;break;case Ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=Ta;pt.DEFAULT_ANISOTROPY=1;class ke{constructor(e=0,t=0,n=0,i=1){ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],m=c[5],_=c[9],p=c[2],f=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-p)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+p)<.1&&Math.abs(_+f)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,b=(m+1)/2,E=(g+1)/2,L=(h+u)/4,I=(d+p)/4,y=(_+f)/4;return x>b&&x>E?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=L/n,s=I/n):b>E?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=L/i,s=y/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=I/s,i=y/s),this.set(n,i,s,t),this}let w=Math.sqrt((f-_)*(f-_)+(d-p)*(d-p)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(f-_)/w,this.y=(d-p)/w,this.z=(u-h)/w,this.w=Math.acos((l+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xn extends yn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ke(0,0,e,t),this.scissorTest=!1,this.viewport=new ke(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:At,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ia(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fa extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class di{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],d=e[c+1],u=e[c+2];h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>a&&(a=u)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),d=e.getY(c),u=e.getZ(c);h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>a&&(a=u)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)an.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(an)}else n.boundingBox===null&&n.computeBoundingBox(),is.copy(n.boundingBox),is.applyMatrix4(e.matrixWorld),this.union(is);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jn),gi.subVectors(this.max,jn),En.subVectors(e.a,jn),An.subVectors(e.b,jn),Tn.subVectors(e.c,jn),Yt.subVectors(An,En),jt.subVectors(Tn,An),on.subVectors(En,Tn);let t=[0,-Yt.z,Yt.y,0,-jt.z,jt.y,0,-on.z,on.y,Yt.z,0,-Yt.x,jt.z,0,-jt.x,on.z,0,-on.x,-Yt.y,Yt.x,0,-jt.y,jt.x,0,-on.y,on.x,0];return!ss(t,En,An,Tn,gi)||(t=[1,0,0,0,1,0,0,0,1],!ss(t,En,An,Tn,gi))?!1:(_i.crossVectors(Yt,jt),t=[_i.x,_i.y,_i.z],ss(t,En,An,Tn,gi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gt=[new D,new D,new D,new D,new D,new D,new D,new D],an=new D,is=new di,En=new D,An=new D,Tn=new D,Yt=new D,jt=new D,on=new D,jn=new D,gi=new D,_i=new D,ln=new D;function ss(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ln.fromArray(r,s);const a=i.x*Math.abs(ln.x)+i.y*Math.abs(ln.y)+i.z*Math.abs(ln.z),c=e.dot(ln),l=t.dot(ln),h=n.dot(ln);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const hl=new di,Zn=new D,rs=new D;class zi{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hl.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zn.subVectors(e,this.center);const t=Zn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zn,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zn.copy(e.center).add(rs)),this.expandByPoint(Zn.copy(e.center).sub(rs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vt=new D,as=new D,xi=new D,Zt=new D,os=new D,vi=new D,ls=new D;class Na{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vt.copy(this.origin).addScaledVector(this.direction,t),Vt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){as.copy(e).add(t).multiplyScalar(.5),xi.copy(t).sub(e).normalize(),Zt.copy(this.origin).sub(as);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xi),a=Zt.dot(this.direction),c=-Zt.dot(xi),l=Zt.lengthSq(),h=Math.abs(1-o*o);let d,u,m,_;if(h>0)if(d=o*c-a,u=o*a-c,_=s*h,d>=0)if(u>=-_)if(u<=_){const p=1/h;d*=p,u*=p,m=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(as).addScaledVector(xi,u),m}intersectSphere(e,t){Vt.subVectors(e.center,this.origin);const n=Vt.dot(this.direction),i=Vt.dot(Vt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vt)!==null}intersectTriangle(e,t,n,i,s){os.subVectors(t,e),vi.subVectors(n,e),ls.crossVectors(os,vi);let o=this.direction.dot(ls),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zt.subVectors(this.origin,e);const c=a*this.direction.dot(vi.crossVectors(Zt,vi));if(c<0)return null;const l=a*this.direction.dot(os.cross(Zt));if(l<0||c+l>o)return null;const h=-a*Zt.dot(ls);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,h,d,u,m,_,p,f){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=m,g[7]=_,g[11]=p,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Cn.setFromMatrixColumn(e,0).length(),s=1/Cn.setFromMatrixColumn(e,1).length(),o=1/Cn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*h,m=o*d,_=a*h,p=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+_*l,t[5]=u-p*l,t[9]=-a*c,t[2]=p-u*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,m=c*d,_=l*h,p=l*d;t[0]=u+p*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=p+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,m=c*d,_=l*h,p=l*d;t[0]=u-p*a,t[4]=-o*d,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=p-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,m=o*d,_=a*h,p=a*d;t[0]=c*h,t[4]=_*l-m,t[8]=u*l+p,t[1]=c*d,t[5]=p*l+u,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,m=o*l,_=a*c,p=a*l;t[0]=c*h,t[4]=p-u*d,t[8]=_*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*d+_,t[10]=u-p*d}else if(e.order==="XZY"){const u=o*c,m=o*l,_=a*c,p=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+p,t[5]=o*h,t[9]=m*d-_,t[2]=_*d-m,t[6]=a*h,t[10]=p*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ul,e,dl)}lookAt(e,t,n){const i=this.elements;return vt.subVectors(e,t),vt.lengthSq()===0&&(vt.z=1),vt.normalize(),Kt.crossVectors(n,vt),Kt.lengthSq()===0&&(Math.abs(n.z)===1?vt.x+=1e-4:vt.z+=1e-4,vt.normalize(),Kt.crossVectors(n,vt)),Kt.normalize(),yi.crossVectors(vt,Kt),i[0]=Kt.x,i[4]=yi.x,i[8]=vt.x,i[1]=Kt.y,i[5]=yi.y,i[9]=vt.y,i[2]=Kt.z,i[6]=yi.z,i[10]=vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],m=n[13],_=n[2],p=n[6],f=n[10],g=n[14],w=n[3],x=n[7],b=n[11],E=n[15],L=i[0],I=i[4],y=i[8],A=i[12],P=i[1],$=i[5],X=i[9],O=i[13],R=i[2],G=i[6],Y=i[10],J=i[14],q=i[3],Q=i[7],j=i[11],_e=i[15];return s[0]=o*L+a*P+c*R+l*q,s[4]=o*I+a*$+c*G+l*Q,s[8]=o*y+a*X+c*Y+l*j,s[12]=o*A+a*O+c*J+l*_e,s[1]=h*L+d*P+u*R+m*q,s[5]=h*I+d*$+u*G+m*Q,s[9]=h*y+d*X+u*Y+m*j,s[13]=h*A+d*O+u*J+m*_e,s[2]=_*L+p*P+f*R+g*q,s[6]=_*I+p*$+f*G+g*Q,s[10]=_*y+p*X+f*Y+g*j,s[14]=_*A+p*O+f*J+g*_e,s[3]=w*L+x*P+b*R+E*q,s[7]=w*I+x*$+b*G+E*Q,s[11]=w*y+x*X+b*Y+E*j,s[15]=w*A+x*O+b*J+E*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],m=e[14],_=e[3],p=e[7],f=e[11],g=e[15];return _*(+s*c*d-i*l*d-s*a*u+n*l*u+i*a*m-n*c*m)+p*(+t*c*m-t*l*u+s*o*u-i*o*m+i*l*h-s*c*h)+f*(+t*l*d-t*a*m-s*o*d+n*o*m+s*a*h-n*l*h)+g*(-i*a*h-t*c*d+t*a*u+i*o*d-n*o*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],m=e[11],_=e[12],p=e[13],f=e[14],g=e[15],w=d*f*l-p*u*l+p*c*m-a*f*m-d*c*g+a*u*g,x=_*u*l-h*f*l-_*c*m+o*f*m+h*c*g-o*u*g,b=h*p*l-_*d*l+_*a*m-o*p*m-h*a*g+o*d*g,E=_*d*c-h*p*c-_*a*u+o*p*u+h*a*f-o*d*f,L=t*w+n*x+i*b+s*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=w*I,e[1]=(p*u*s-d*f*s-p*i*m+n*f*m+d*i*g-n*u*g)*I,e[2]=(a*f*s-p*c*s+p*i*l-n*f*l-a*i*g+n*c*g)*I,e[3]=(d*c*s-a*u*s-d*i*l+n*u*l+a*i*m-n*c*m)*I,e[4]=x*I,e[5]=(h*f*s-_*u*s+_*i*m-t*f*m-h*i*g+t*u*g)*I,e[6]=(_*c*s-o*f*s-_*i*l+t*f*l+o*i*g-t*c*g)*I,e[7]=(o*u*s-h*c*s+h*i*l-t*u*l-o*i*m+t*c*m)*I,e[8]=b*I,e[9]=(_*d*s-h*p*s-_*n*m+t*p*m+h*n*g-t*d*g)*I,e[10]=(o*p*s-_*a*s+_*n*l-t*p*l-o*n*g+t*a*g)*I,e[11]=(h*a*s-o*d*s-h*n*l+t*d*l+o*n*m-t*a*m)*I,e[12]=E*I,e[13]=(h*p*i-_*d*i+_*n*u-t*p*u-h*n*f+t*d*f)*I,e[14]=(_*a*i-o*p*i-_*n*c+t*p*c+o*n*f-t*a*f)*I,e[15]=(o*d*i-h*a*i+h*n*c-t*d*c-o*n*u+t*a*u)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,d=a+a,u=s*l,m=s*h,_=s*d,p=o*h,f=o*d,g=a*d,w=c*l,x=c*h,b=c*d,E=n.x,L=n.y,I=n.z;return i[0]=(1-(p+g))*E,i[1]=(m+b)*E,i[2]=(_-x)*E,i[3]=0,i[4]=(m-b)*L,i[5]=(1-(u+g))*L,i[6]=(f+w)*L,i[7]=0,i[8]=(_+x)*I,i[9]=(f-w)*I,i[10]=(1-(u+p))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Cn.set(i[0],i[1],i[2]).length();const o=Cn.set(i[4],i[5],i[6]).length(),a=Cn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Tt.copy(this);const l=1/s,h=1/o,d=1/a;return Tt.elements[0]*=l,Tt.elements[1]*=l,Tt.elements[2]*=l,Tt.elements[4]*=h,Tt.elements[5]*=h,Tt.elements[6]*=h,Tt.elements[8]*=d,Tt.elements[9]*=d,Tt.elements[10]*=d,t.setFromRotationMatrix(Tt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),u=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,c=1/(t-e),l=1/(n-i),h=1/(o-s),d=(t+e)*c,u=(n+i)*l,m=(o+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Cn=new D,Tt=new Ve,ul=new D(0,0,0),dl=new D(1,1,1),Kt=new D,yi=new D,vt=new D,Lr=new Ve,Dr=new _n;class Ui{constructor(e=0,t=0,n=0,i=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dr.setFromEuler(this),this.setFromQuaternion(Dr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Oa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fl=0;const Pr=new D,Ln=new _n,Ht=new Ve,Mi=new D,Kn=new D,pl=new D,ml=new _n,Rr=new D(1,0,0),Ir=new D(0,1,0),Fr=new D(0,0,1),gl={type:"added"},Nr={type:"removed"};class et extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fl++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=et.DEFAULT_UP.clone();const e=new D,t=new Ui,n=new _n,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ut}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ln.setFromAxisAngle(e,t),this.quaternion.multiply(Ln),this}rotateOnWorldAxis(e,t){return Ln.setFromAxisAngle(e,t),this.quaternion.premultiply(Ln),this}rotateX(e){return this.rotateOnAxis(Rr,e)}rotateY(e){return this.rotateOnAxis(Ir,e)}rotateZ(e){return this.rotateOnAxis(Fr,e)}translateOnAxis(e,t){return Pr.copy(e).applyQuaternion(this.quaternion),this.position.add(Pr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rr,e)}translateY(e){return this.translateOnAxis(Ir,e)}translateZ(e){return this.translateOnAxis(Fr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ht.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mi.copy(e):Mi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ht.lookAt(Kn,Mi,this.up):Ht.lookAt(Mi,Kn,this.up),this.quaternion.setFromRotationMatrix(Ht),i&&(Ht.extractRotation(i.matrixWorld),Ln.setFromRotationMatrix(Ht),this.quaternion.premultiply(Ln.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nr)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Nr)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ht.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ht.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ht),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,e,pl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,ml,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}et.DEFAULT_UP=new D(0,1,0);et.DEFAULT_MATRIX_AUTO_UPDATE=!0;et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ct=new D,Wt=new D,cs=new D,Xt=new D,Dn=new D,Pn=new D,Or=new D,hs=new D,us=new D,ds=new D;class qt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ct.subVectors(e,t),i.cross(Ct);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ct.subVectors(i,t),Wt.subVectors(n,t),cs.subVectors(e,t);const o=Ct.dot(Ct),a=Ct.dot(Wt),c=Ct.dot(cs),l=Wt.dot(Wt),h=Wt.dot(cs),d=o*l-a*a;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(l*c-a*h)*u,_=(o*h-a*c)*u;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xt),Xt.x>=0&&Xt.y>=0&&Xt.x+Xt.y<=1}static getUV(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Xt),c.set(0,0),c.addScaledVector(s,Xt.x),c.addScaledVector(o,Xt.y),c.addScaledVector(a,Xt.z),c}static isFrontFacing(e,t,n,i){return Ct.subVectors(n,t),Wt.subVectors(e,t),Ct.cross(Wt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ct.subVectors(this.c,this.b),Wt.subVectors(this.a,this.b),Ct.cross(Wt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return qt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Dn.subVectors(i,n),Pn.subVectors(s,n),hs.subVectors(e,n);const c=Dn.dot(hs),l=Pn.dot(hs);if(c<=0&&l<=0)return t.copy(n);us.subVectors(e,i);const h=Dn.dot(us),d=Pn.dot(us);if(h>=0&&d<=h)return t.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Dn,o);ds.subVectors(e,s);const m=Dn.dot(ds),_=Pn.dot(ds);if(_>=0&&m<=_)return t.copy(s);const p=m*l-c*_;if(p<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Pn,a);const f=h*_-m*d;if(f<=0&&d-h>=0&&m-_>=0)return Or.subVectors(s,i),a=(d-h)/(d-h+(m-_)),t.copy(i).addScaledVector(Or,a);const g=1/(f+p+u);return o=p*g,a=u*g,t.copy(n).addScaledVector(Dn,o).addScaledVector(Pn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let _l=0;class qn extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_l++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Bn,this.side=tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=wa,this.blendDst=Ea,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bn&&(n.blending=this.blending),this.side!==tn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const za={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lt={h:0,s:0,l:0},bi={h:0,s:0,l:0};function fs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=el(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=fs(o,s,e+1/3),this.g=fs(o,s,e),this.b=fs(o,s,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,lt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,lt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,lt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,lt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=za[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return lt.fromWorkingColorSpace(nt.copy(this),e),ft(nt.r*255,0,255)<<16^ft(nt.g*255,0,255)<<8^ft(nt.b*255,0,255)<<0}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(nt.copy(this),t);const n=nt.r,i=nt.g,s=nt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(nt.copy(this),t),e.r=nt.r,e.g=nt.g,e.b=nt.b,e}getStyle(e=Ot){lt.fromWorkingColorSpace(nt.copy(this),e);const t=nt.r,n=nt.g,i=nt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Lt),Lt.h+=e,Lt.s+=t,Lt.l+=n,this.setHSL(Lt.h,Lt.s,Lt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Lt),e.getHSL(bi);const n=Ji(Lt.h,bi.h,t),i=Ji(Lt.s,bi.s,t),s=Ji(Lt.l,bi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nt=new Ie;Ie.NAMES=za;class Ua extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xe=new D,Si=new be;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Si.fromBufferAttribute(this,t),Si.applyMatrix3(e),this.setXY(t,Si.x,Si.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix3(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix4(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyNormalMatrix(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.transformDirection(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ba extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ka extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xl=0;const Et=new Ve,ps=new et,Rn=new D,yt=new di,Jn=new di,Qe=new D;class Rt extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pa(e)?ka:Ba)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ut().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Et.makeRotationFromQuaternion(e),this.applyMatrix4(Et),this}rotateX(e){return Et.makeRotationX(e),this.applyMatrix4(Et),this}rotateY(e){return Et.makeRotationY(e),this.applyMatrix4(Et),this}rotateZ(e){return Et.makeRotationZ(e),this.applyMatrix4(Et),this}translate(e,t,n){return Et.makeTranslation(e,t,n),this.applyMatrix4(Et),this}scale(e,t,n){return Et.makeScale(e,t,n),this.applyMatrix4(Et),this}lookAt(e){return ps.lookAt(e),ps.updateMatrix(),this.applyMatrix4(ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rn).negate(),this.translate(Rn.x,Rn.y,Rn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];yt.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,yt.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,yt.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(yt.min),this.boundingBox.expandByPoint(yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(yt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Jn.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(yt.min,Jn.min),yt.expandByPoint(Qe),Qe.addVectors(yt.max,Jn.max),yt.expandByPoint(Qe)):(yt.expandByPoint(Jn.min),yt.expandByPoint(Jn.max))}yt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Qe.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Qe));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Qe.fromBufferAttribute(a,l),c&&(Rn.fromBufferAttribute(e,l),Qe.add(Rn)),i=Math.max(i,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let P=0;P<a;P++)l[P]=new D,h[P]=new D;const d=new D,u=new D,m=new D,_=new be,p=new be,f=new be,g=new D,w=new D;function x(P,$,X){d.fromArray(i,P*3),u.fromArray(i,$*3),m.fromArray(i,X*3),_.fromArray(o,P*2),p.fromArray(o,$*2),f.fromArray(o,X*2),u.sub(d),m.sub(d),p.sub(_),f.sub(_);const O=1/(p.x*f.y-f.x*p.y);isFinite(O)&&(g.copy(u).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(O),w.copy(m).multiplyScalar(p.x).addScaledVector(u,-f.x).multiplyScalar(O),l[P].add(g),l[$].add(g),l[X].add(g),h[P].add(w),h[$].add(w),h[X].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let P=0,$=b.length;P<$;++P){const X=b[P],O=X.start,R=X.count;for(let G=O,Y=O+R;G<Y;G+=3)x(n[G+0],n[G+1],n[G+2])}const E=new D,L=new D,I=new D,y=new D;function A(P){I.fromArray(s,P*3),y.copy(I);const $=l[P];E.copy($),E.sub(I.multiplyScalar(I.dot($))).normalize(),L.crossVectors(y,$);const O=L.dot(h[P])<0?-1:1;c[P*4]=E.x,c[P*4+1]=E.y,c[P*4+2]=E.z,c[P*4+3]=O}for(let P=0,$=b.length;P<$;++P){const X=b[P],O=X.start,R=X.count;for(let G=O,Y=O+R;G<Y;G+=3)A(n[G+0]),A(n[G+1]),A(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new D,s=new D,o=new D,a=new D,c=new D,l=new D,h=new D,d=new D;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),p=e.getX(u+1),f=e.getX(u+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qe.fromBufferAttribute(e,t),Qe.normalize(),e.setXYZ(t,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let m=0,_=0;for(let p=0,f=c.length;p<f;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*h;for(let g=0;g<h;g++)u[_++]=l[m++]}return new Ut(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],m=e(u,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zr=new Ve,Nt=new Na,wi=new zi,Ur=new D,Qn=new D,ei=new D,ti=new D,ms=new D,Ei=new D,Ai=new be,Ti=new be,Ci=new be,gs=new D,Li=new D;class bt extends et{constructor(e=new Rt,t=new Ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ei.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(ms.fromBufferAttribute(d,e),o?Ei.addScaledVector(ms,h):Ei.addScaledVector(ms.sub(t),h))}t.add(Ei)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),wi.copy(n.boundingSphere),wi.applyMatrix4(s),Nt.copy(e.ray).recast(e.near),wi.containsPoint(Nt.origin)===!1&&(Nt.intersectSphere(wi,Ur)===null||Nt.origin.distanceToSquared(Ur)>(e.far-e.near)**2))||(zr.copy(s).invert(),Nt.copy(e.ray).applyMatrix4(zr),n.boundingBox!==null&&Nt.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,_=d.length;m<_;m++){const p=d[m],f=i[p.materialIndex],g=Math.max(p.start,u.start),w=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let x=g,b=w;x<b;x+=3){const E=a.getX(x),L=a.getX(x+1),I=a.getX(x+2);o=Di(this,f,e,Nt,l,h,E,L,I),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=m,f=_;p<f;p+=3){const g=a.getX(p),w=a.getX(p+1),x=a.getX(p+2);o=Di(this,i,e,Nt,l,h,g,w,x),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,_=d.length;m<_;m++){const p=d[m],f=i[p.materialIndex],g=Math.max(p.start,u.start),w=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let x=g,b=w;x<b;x+=3){const E=x,L=x+1,I=x+2;o=Di(this,f,e,Nt,l,h,E,L,I),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let p=m,f=_;p<f;p+=3){const g=p,w=p+1,x=p+2;o=Di(this,i,e,Nt,l,h,g,w,x),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function vl(r,e,t,n,i,s,o,a){let c;if(e.side===St?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===tn,a),c===null)return null;Li.copy(a),Li.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Li);return l<t.near||l>t.far?null:{distance:l,point:Li.clone(),object:r}}function Di(r,e,t,n,i,s,o,a,c){r.getVertexPosition(o,Qn),r.getVertexPosition(a,ei),r.getVertexPosition(c,ti);const l=vl(r,e,t,n,Qn,ei,ti,gs);if(l){i&&(Ai.fromBufferAttribute(i,o),Ti.fromBufferAttribute(i,a),Ci.fromBufferAttribute(i,c),l.uv=qt.getUV(gs,Qn,ei,ti,Ai,Ti,Ci,new be)),s&&(Ai.fromBufferAttribute(s,o),Ti.fromBufferAttribute(s,a),Ci.fromBufferAttribute(s,c),l.uv2=qt.getUV(gs,Qn,ei,ti,Ai,Ti,Ci,new be));const h={a:o,b:a,c,normal:new D,materialIndex:0};qt.getNormal(Qn,ei,ti,h.normal),l.face=h}return l}class Mn extends Rt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(d,2));function _(p,f,g,w,x,b,E,L,I,y,A){const P=b/I,$=E/y,X=b/2,O=E/2,R=L/2,G=I+1,Y=y+1;let J=0,q=0;const Q=new D;for(let j=0;j<Y;j++){const _e=j*$-O;for(let B=0;B<G;B++){const Z=B*P-X;Q[p]=Z*w,Q[f]=_e*x,Q[g]=R,l.push(Q.x,Q.y,Q.z),Q[p]=0,Q[f]=0,Q[g]=L>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(B/I),d.push(1-j/y),J+=1}}for(let j=0;j<y;j++)for(let _e=0;_e<I;_e++){const B=u+_e+G*j,Z=u+_e+G*(j+1),ie=u+(_e+1)+G*(j+1),z=u+(_e+1)+G*j;c.push(B,Z,z),c.push(Z,ie,z),q+=6}a.addGroup(m,q,A),m+=q,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xn(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ct(r){const e={};for(let t=0;t<r.length;t++){const n=Xn(r[t]);for(const i in n)e[i]=n[i]}return e}function yl(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ga(r){return r.getRenderTarget()===null&&r.outputEncoding===Ue?Ot:li}const Ml={clone:Xn,merge:ct};var bl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bl,this.fragmentShader=Sl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xn(e.uniforms),this.uniformsGroups=yl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Va=class extends et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Mt extends Va{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ki*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const In=-90,Fn=1;class wl extends et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Mt(In,Fn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Mt(In,Fn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Mt(In,Fn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Mt(In,Fn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Mt(In,Fn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Mt(In,Fn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=$t,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Ha extends pt{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Vn,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class El extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ha(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:At}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Mn(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:Xn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:en});s.uniforms.tEquirect.value=t;const o=new bt(i,s),a=t.minFilter;return t.minFilter===ai&&(t.minFilter=At),new wl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const _s=new D,Al=new D,Tl=new ut;class cn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_s.subVectors(n,t).cross(Al.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_s),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tl.getNormalMatrix(e),i=this.coplanarPoint(_s).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new zi,Pi=new D;class zs{constructor(e=new cn,t=new cn,n=new cn,i=new cn,s=new cn,o=new cn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7],u=n[8],m=n[9],_=n[10],p=n[11],f=n[12],g=n[13],w=n[14],x=n[15];return t[0].setComponents(a-i,d-c,p-u,x-f).normalize(),t[1].setComponents(a+i,d+c,p+u,x+f).normalize(),t[2].setComponents(a+s,d+l,p+m,x+g).normalize(),t[3].setComponents(a-s,d-l,p-m,x-g).normalize(),t[4].setComponents(a-o,d-h,p-_,x-w).normalize(),t[5].setComponents(a+o,d+h,p+_,x+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Pi.x=i.normal.x>0?e.max.x:e.min.x,Pi.y=i.normal.y>0?e.max.y:e.min.y,Pi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Pi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wa(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Cl(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,d,u),l.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,d){const u=h.array,m=h.updateRange;r.bindBuffer(d,l),m.count===-1?r.bufferSubData(d,0,u):(t?r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,h)):d.version<l.version&&(s(d.buffer,l,h),d.version=l.version)}return{get:o,remove:a,update:c}}class fi extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=e/a,u=t/c,m=[],_=[],p=[],f=[];for(let g=0;g<h;g++){const w=g*u-o;for(let x=0;x<l;x++){const b=x*d-s;_.push(b,-w,0),p.push(0,0,1),f.push(x/a),f.push(1-g/c)}}for(let g=0;g<c;g++)for(let w=0;w<a;w++){const x=w+l*g,b=w+l*(g+1),E=w+1+l*(g+1),L=w+1+l*g;m.push(x,b,L),m.push(b,E,L)}this.setIndex(m),this.setAttribute("position",new it(_,3)),this.setAttribute("normal",new it(p,3)),this.setAttribute("uv",new it(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ll=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Dl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Il=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nl="vec3 transformed = vec3( position );",Ol=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Ul=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Bl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Gl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ql=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$l=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yl=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,jl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Zl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ql=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ec=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tc="gl_FragColor = linearToOutputTexel( gl_FragColor );",nc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ic=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rc=`#ifdef USE_ENVMAP
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
#endif`,ac=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oc=`#ifdef USE_ENVMAP
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
#endif`,lc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dc=`#ifdef USE_GRADIENTMAP
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
}`,fc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_c=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,xc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,vc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,wc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ec=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ac=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Cc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ic=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Gc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Vc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Hc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$c=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Yc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Zc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Kc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,eh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,th=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ih=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ah=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,oh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ch=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,dh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fh=`#ifdef USE_SKINNING
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
#endif`,ph=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_h=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,vh=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,yh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Mh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,bh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Sh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,wh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Eh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ah=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Th=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ch=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ph=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ih=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Fh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Nh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Oh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Vh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Wh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,qh=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$h=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Zh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Jh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,eu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,nu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,su=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ru=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,au=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Se={alphamap_fragment:Ll,alphamap_pars_fragment:Dl,alphatest_fragment:Pl,alphatest_pars_fragment:Rl,aomap_fragment:Il,aomap_pars_fragment:Fl,begin_vertex:Nl,beginnormal_vertex:Ol,bsdfs:zl,iridescence_fragment:Ul,bumpmap_pars_fragment:Bl,clipping_planes_fragment:kl,clipping_planes_pars_fragment:Gl,clipping_planes_pars_vertex:Vl,clipping_planes_vertex:Hl,color_fragment:Wl,color_pars_fragment:Xl,color_pars_vertex:ql,color_vertex:$l,common:Yl,cube_uv_reflection_fragment:jl,defaultnormal_vertex:Zl,displacementmap_pars_vertex:Kl,displacementmap_vertex:Jl,emissivemap_fragment:Ql,emissivemap_pars_fragment:ec,encodings_fragment:tc,encodings_pars_fragment:nc,envmap_fragment:ic,envmap_common_pars_fragment:sc,envmap_pars_fragment:rc,envmap_pars_vertex:ac,envmap_physical_pars_fragment:xc,envmap_vertex:oc,fog_vertex:lc,fog_pars_vertex:cc,fog_fragment:hc,fog_pars_fragment:uc,gradientmap_pars_fragment:dc,lightmap_fragment:fc,lightmap_pars_fragment:pc,lights_lambert_fragment:mc,lights_lambert_pars_fragment:gc,lights_pars_begin:_c,lights_toon_fragment:vc,lights_toon_pars_fragment:yc,lights_phong_fragment:Mc,lights_phong_pars_fragment:bc,lights_physical_fragment:Sc,lights_physical_pars_fragment:wc,lights_fragment_begin:Ec,lights_fragment_maps:Ac,lights_fragment_end:Tc,logdepthbuf_fragment:Cc,logdepthbuf_pars_fragment:Lc,logdepthbuf_pars_vertex:Dc,logdepthbuf_vertex:Pc,map_fragment:Rc,map_pars_fragment:Ic,map_particle_fragment:Fc,map_particle_pars_fragment:Nc,metalnessmap_fragment:Oc,metalnessmap_pars_fragment:zc,morphcolor_vertex:Uc,morphnormal_vertex:Bc,morphtarget_pars_vertex:kc,morphtarget_vertex:Gc,normal_fragment_begin:Vc,normal_fragment_maps:Hc,normal_pars_fragment:Wc,normal_pars_vertex:Xc,normal_vertex:qc,normalmap_pars_fragment:$c,clearcoat_normal_fragment_begin:Yc,clearcoat_normal_fragment_maps:jc,clearcoat_pars_fragment:Zc,iridescence_pars_fragment:Kc,output_fragment:Jc,packing:Qc,premultiplied_alpha_fragment:eh,project_vertex:th,dithering_fragment:nh,dithering_pars_fragment:ih,roughnessmap_fragment:sh,roughnessmap_pars_fragment:rh,shadowmap_pars_fragment:ah,shadowmap_pars_vertex:oh,shadowmap_vertex:lh,shadowmask_pars_fragment:ch,skinbase_vertex:hh,skinning_pars_vertex:uh,skinning_vertex:dh,skinnormal_vertex:fh,specularmap_fragment:ph,specularmap_pars_fragment:mh,tonemapping_fragment:gh,tonemapping_pars_fragment:_h,transmission_fragment:xh,transmission_pars_fragment:vh,uv_pars_fragment:yh,uv_pars_vertex:Mh,uv_vertex:bh,uv2_pars_fragment:Sh,uv2_pars_vertex:wh,uv2_vertex:Eh,worldpos_vertex:Ah,background_vert:Th,background_frag:Ch,backgroundCube_vert:Lh,backgroundCube_frag:Dh,cube_vert:Ph,cube_frag:Rh,depth_vert:Ih,depth_frag:Fh,distanceRGBA_vert:Nh,distanceRGBA_frag:Oh,equirect_vert:zh,equirect_frag:Uh,linedashed_vert:Bh,linedashed_frag:kh,meshbasic_vert:Gh,meshbasic_frag:Vh,meshlambert_vert:Hh,meshlambert_frag:Wh,meshmatcap_vert:Xh,meshmatcap_frag:qh,meshnormal_vert:$h,meshnormal_frag:Yh,meshphong_vert:jh,meshphong_frag:Zh,meshphysical_vert:Kh,meshphysical_frag:Jh,meshtoon_vert:Qh,meshtoon_frag:eu,points_vert:tu,points_frag:nu,shadow_vert:iu,shadow_frag:su,sprite_vert:ru,sprite_frag:au},ne={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ut},uv2Transform:{value:new ut},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ut}}},zt={basic:{uniforms:ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:ct([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:ct([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:ct([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:ct([ne.points,ne.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:ct([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:ct([ne.common,ne.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:ct([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:ct([ne.sprite,ne.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:ct([ne.common,ne.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:ct([ne.lights,ne.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};zt.physical={uniforms:ct([zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Ri={r:0,b:0,g:0};function ou(r,e,t,n,i,s,o){const a=new Ie(0);let c=s===!0?0:1,l,h,d=null,u=0,m=null;function _(f,g){let w=!1,x=g.isScene===!0?g.background:null;x&&x.isTexture&&(x=(g.backgroundBlurriness>0?t:e).get(x));const b=r.xr,E=b.getSession&&b.getSession();E&&E.environmentBlendMode==="additive"&&(x=null),x===null?p(a,c):x&&x.isColor&&(p(x,1),w=!0),(r.autoClear||w)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Oi)?(h===void 0&&(h=new bt(new Mn(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Xn(zt.backgroundCube.uniforms),vertexShader:zt.backgroundCube.vertexShader,fragmentShader:zt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,I,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=x.encoding!==Ue,(d!==x||u!==x.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,m=r.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new bt(new fi(2,2),new vn({name:"BackgroundMaterial",uniforms:Xn(zt.background.uniforms),vertexShader:zt.background.vertexShader,fragmentShader:zt.background.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=x.encoding!==Ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,m=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,g){f.getRGB(Ri,Ga(r)),n.buffers.color.setClear(Ri.r,Ri.g,Ri.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(f,g=1){a.set(f),c=g,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(a,c)},render:_}}function lu(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=f(null);let l=c,h=!1;function d(R,G,Y,J,q){let Q=!1;if(o){const j=p(J,Y,G);l!==j&&(l=j,m(l.object)),Q=g(R,J,Y,q),Q&&w(R,J,Y,q)}else{const j=G.wireframe===!0;(l.geometry!==J.id||l.program!==Y.id||l.wireframe!==j)&&(l.geometry=J.id,l.program=Y.id,l.wireframe=j,Q=!0)}q!==null&&t.update(q,34963),(Q||h)&&(h=!1,y(R,G,Y,J),q!==null&&r.bindBuffer(34963,t.get(q).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function _(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,G,Y){const J=Y.wireframe===!0;let q=a[R.id];q===void 0&&(q={},a[R.id]=q);let Q=q[G.id];Q===void 0&&(Q={},q[G.id]=Q);let j=Q[J];return j===void 0&&(j=f(u()),Q[J]=j),j}function f(R){const G=[],Y=[],J=[];for(let q=0;q<i;q++)G[q]=0,Y[q]=0,J[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:J,object:R,attributes:{},index:null}}function g(R,G,Y,J){const q=l.attributes,Q=G.attributes;let j=0;const _e=Y.getAttributes();for(const B in _e)if(_e[B].location>=0){const ie=q[B];let z=Q[B];if(z===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),ie===void 0||ie.attribute!==z||z&&ie.data!==z.data)return!0;j++}return l.attributesNum!==j||l.index!==J}function w(R,G,Y,J){const q={},Q=G.attributes;let j=0;const _e=Y.getAttributes();for(const B in _e)if(_e[B].location>=0){let ie=Q[B];ie===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const z={};z.attribute=ie,ie&&ie.data&&(z.data=ie.data),q[B]=z,j++}l.attributes=q,l.attributesNum=j,l.index=J}function x(){const R=l.newAttributes;for(let G=0,Y=R.length;G<Y;G++)R[G]=0}function b(R){E(R,0)}function E(R,G){const Y=l.newAttributes,J=l.enabledAttributes,q=l.attributeDivisors;Y[R]=1,J[R]===0&&(r.enableVertexAttribArray(R),J[R]=1),q[R]!==G&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,G),q[R]=G)}function L(){const R=l.newAttributes,G=l.enabledAttributes;for(let Y=0,J=G.length;Y<J;Y++)G[Y]!==R[Y]&&(r.disableVertexAttribArray(Y),G[Y]=0)}function I(R,G,Y,J,q,Q){n.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(R,G,Y,q,Q):r.vertexAttribPointer(R,G,Y,J,q,Q)}function y(R,G,Y,J){if(n.isWebGL2===!1&&(R.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=J.attributes,Q=Y.getAttributes(),j=G.defaultAttributeValues;for(const _e in Q){const B=Q[_e];if(B.location>=0){let Z=q[_e];if(Z===void 0&&(_e==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),_e==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor)),Z!==void 0){const ie=Z.normalized,z=Z.itemSize,le=t.get(Z);if(le===void 0)continue;const ce=le.buffer,ue=le.type,he=le.bytesPerElement;if(Z.isInterleavedBufferAttribute){const ve=Z.data,Me=ve.stride,we=Z.offset;if(ve.isInstancedInterleavedBuffer){for(let Pe=0;Pe<B.locationSize;Pe++)E(B.location+Pe,ve.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Pe=0;Pe<B.locationSize;Pe++)b(B.location+Pe);r.bindBuffer(34962,ce);for(let Pe=0;Pe<B.locationSize;Pe++)I(B.location+Pe,z/B.locationSize,ue,ie,Me*he,(we+z/B.locationSize*Pe)*he)}else{if(Z.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)E(B.location+ve,Z.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ve=0;ve<B.locationSize;ve++)b(B.location+ve);r.bindBuffer(34962,ce);for(let ve=0;ve<B.locationSize;ve++)I(B.location+ve,z/B.locationSize,ue,ie,z*he,z/B.locationSize*ve*he)}}else if(j!==void 0){const ie=j[_e];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(B.location,ie);break;case 3:r.vertexAttrib3fv(B.location,ie);break;case 4:r.vertexAttrib4fv(B.location,ie);break;default:r.vertexAttrib1fv(B.location,ie)}}}}L()}function A(){X();for(const R in a){const G=a[R];for(const Y in G){const J=G[Y];for(const q in J)_(J[q].object),delete J[q];delete G[Y]}delete a[R]}}function P(R){if(a[R.id]===void 0)return;const G=a[R.id];for(const Y in G){const J=G[Y];for(const q in J)_(J[q].object),delete J[q];delete G[Y]}delete a[R.id]}function $(R){for(const G in a){const Y=a[G];if(Y[R.id]===void 0)continue;const J=Y[R.id];for(const q in J)_(J[q].object),delete J[q];delete Y[R.id]}}function X(){O(),h=!0,l!==c&&(l=c,m(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:X,resetDefaultState:O,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:$,initAttributes:x,enableAttribute:b,disableUnusedAttributes:L}}function cu(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,h){r.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,d){if(d===0)return;let u,m;if(i)u=r,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,l,h,d),t.update(h,s,d)}this.setMode=o,this.render=a,this.renderInstances=c}function hu(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),u=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),g=r.getParameter(36348),w=r.getParameter(36349),x=u>0,b=o||e.has("OES_texture_float"),E=x&&b,L=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:w,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:L}}function uu(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new cn,a=new ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){const _=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,g=r.get(d);if(!i||_===null||_.length===0||s&&!f)s?h(null):l();else{const w=s?0:n,x=w*4;let b=g.clippingState||null;c.value=b,b=h(_,u,x,m);for(let E=0;E!==x;++E)b[E]=t[E];g.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,m,_){const p=d!==null?d.length:0;let f=null;if(p!==0){if(f=c.value,_!==!0||f===null){const g=m+p*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<g)&&(f=new Float32Array(g));for(let x=0,b=m;x!==p;++x,b+=4)o.copy(d[x]).applyMatrix4(w,a),o.normal.toArray(f,b),f[b+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function du(r){let e=new WeakMap;function t(o,a){return a===Cs?o.mapping=Vn:a===Ls&&(o.mapping=Hn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Cs||a===Ls)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new El(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Xa extends Va{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Un=4,Br=[.125,.215,.35,.446,.526,.582],un=20,xs=new Xa,kr=new Ie;let vs=null;const hn=(1+Math.sqrt(5))/2,On=1/hn,Gr=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,hn,On),new D(0,hn,-On),new D(On,0,hn),new D(-On,0,hn),new D(hn,On,0),new D(-hn,On,0)];class Vr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){vs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vs),e.scissorTest=!1,Ii(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vn||e.mapping===Hn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:oi,format:Pt,encoding:gn,depthBuffer:!1},i=Hr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hr(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fu(s)),this._blurMaterial=pu(s,e,t)}return i}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,xs)}_sceneToCubeUV(e,t,n,i){const a=new Mt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(kr),h.toneMapping=$t,h.autoClear=!1;const m=new Ua({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),_=new bt(new Mn,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(kr),p=!0);for(let g=0;g<6;g++){const w=g%3;w===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):w===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const x=this._cubeSize;Ii(i,w*x,g>2?x:0,x,x),h.setRenderTarget(i),p&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Vn||e.mapping===Hn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wr());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ii(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,xs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Gr[(i-1)%Gr.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new bt(this._lodPlanes[i],l),u=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*un-1),p=s/_,f=isFinite(s)?1+Math.floor(h*p):un;f>un&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${un}`);const g=[];let w=0;for(let I=0;I<un;++I){const y=I/p,A=Math.exp(-y*y/2);g.push(A),I===0?w+=A:I<f&&(w+=2*A)}for(let I=0;I<g.length;I++)g[I]=g[I]/w;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-n;const b=this._sizeLods[i],E=3*b*(i>x-Un?i-x+Un:0),L=4*(this._cubeSize-b);Ii(t,E,L,3*b,2*b),c.setRenderTarget(t),c.render(d,xs)}}function fu(r){const e=[],t=[],n=[];let i=r;const s=r-Un+1+Br.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Un?c=Br[o-r+Un-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,p=3,f=2,g=1,w=new Float32Array(p*_*m),x=new Float32Array(f*_*m),b=new Float32Array(g*_*m);for(let L=0;L<m;L++){const I=L%3*2/3-1,y=L>2?0:-1,A=[I,y,0,I+2/3,y,0,I+2/3,y+1,0,I,y,0,I+2/3,y+1,0,I,y+1,0];w.set(A,p*_*L),x.set(u,f*_*L);const P=[L,L,L,L,L,L];b.set(P,g*_*L)}const E=new Rt;E.setAttribute("position",new Ut(w,p)),E.setAttribute("uv",new Ut(x,f)),E.setAttribute("faceIndex",new Ut(b,g)),e.push(E),i>Un&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hr(r,e,t){const n=new xn(r,e,t);return n.texture.mapping=Oi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ii(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function pu(r,e,t){const n=new Float32Array(un),i=new D(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:un,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Us(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Wr(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Us(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Xr(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function Us(){return`

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
	`}function mu(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Cs||c===Ls,h=c===Vn||c===Hn;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Vr(r)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Vr(r));const u=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gu(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _u(r,e,t,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete i[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const _ in u)e.update(u[_],34962);const m=d.morphAttributes;for(const _ in m){const p=m[_];for(let f=0,g=p.length;f<g;f++)e.update(p[f],34962)}}function l(d){const u=[],m=d.index,_=d.attributes.position;let p=0;if(m!==null){const w=m.array;p=m.version;for(let x=0,b=w.length;x<b;x+=3){const E=w[x+0],L=w[x+1],I=w[x+2];u.push(E,L,L,I,I,E)}}else{const w=_.array;p=_.version;for(let x=0,b=w.length/3-1;x<b;x+=3){const E=x+0,L=x+1,I=x+2;u.push(E,L,L,I,I,E)}}const f=new(Pa(u)?ka:Ba)(u,1);f.version=p;const g=s.get(d);g&&e.remove(g),s.set(d,f)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function xu(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}let a,c;function l(u){a=u.type,c=u.bytesPerElement}function h(u,m){r.drawElements(s,m,a,u*c),t.update(m,s,1)}function d(u,m,_){if(_===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,u*c,_),t.update(m,s,_)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d}function vu(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function yu(r,e){return r[0]-e[0]}function Mu(r,e){return Math.abs(e[1])-Math.abs(r[1])}function bu(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new ke,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){const u=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=_!==void 0?_.length:0;let f=s.get(h);if(f===void 0||f.count!==p){let G=function(){O.dispose(),s.delete(h),h.removeEventListener("dispose",G)};var m=G;f!==void 0&&f.texture.dispose();const x=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],y=h.morphAttributes.color||[];let A=0;x===!0&&(A=1),b===!0&&(A=2),E===!0&&(A=3);let P=h.attributes.position.count*A,$=1;P>e.maxTextureSize&&($=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const X=new Float32Array(P*$*4*p),O=new Fa(X,P,$,p);O.type=fn,O.needsUpdate=!0;const R=A*4;for(let Y=0;Y<p;Y++){const J=L[Y],q=I[Y],Q=y[Y],j=P*$*4*Y;for(let _e=0;_e<J.count;_e++){const B=_e*R;x===!0&&(o.fromBufferAttribute(J,_e),X[j+B+0]=o.x,X[j+B+1]=o.y,X[j+B+2]=o.z,X[j+B+3]=0),b===!0&&(o.fromBufferAttribute(q,_e),X[j+B+4]=o.x,X[j+B+5]=o.y,X[j+B+6]=o.z,X[j+B+7]=0),E===!0&&(o.fromBufferAttribute(Q,_e),X[j+B+8]=o.x,X[j+B+9]=o.y,X[j+B+10]=o.z,X[j+B+11]=Q.itemSize===4?o.w:1)}}f={count:p,texture:O,size:new be(P,$)},s.set(h,f),h.addEventListener("dispose",G)}let g=0;for(let x=0;x<u.length;x++)g+=u[x];const w=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(r,"morphTargetBaseInfluence",w),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{const _=u===void 0?0:u.length;let p=n[h.id];if(p===void 0||p.length!==_){p=[];for(let b=0;b<_;b++)p[b]=[b,0];n[h.id]=p}for(let b=0;b<_;b++){const E=p[b];E[0]=b,E[1]=u[b]}p.sort(Mu);for(let b=0;b<8;b++)b<_&&p[b][1]?(a[b][0]=p[b][0],a[b][1]=p[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(yu);const f=h.morphAttributes.position,g=h.morphAttributes.normal;let w=0;for(let b=0;b<8;b++){const E=a[b],L=E[0],I=E[1];L!==Number.MAX_SAFE_INTEGER&&I?(f&&h.getAttribute("morphTarget"+b)!==f[L]&&h.setAttribute("morphTarget"+b,f[L]),g&&h.getAttribute("morphNormal"+b)!==g[L]&&h.setAttribute("morphNormal"+b,g[L]),i[b]=I,w+=I):(f&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),g&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),i[b]=0)}const x=h.morphTargetsRelative?1:1-w;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Su(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);return i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const qa=new pt,$a=new Fa,Ya=new cl,ja=new Ha,qr=[],$r=[],Yr=new Float32Array(16),jr=new Float32Array(9),Zr=new Float32Array(4);function $n(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=qr[i];if(s===void 0&&(s=new Float32Array(i),qr[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function qe(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function $e(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Bi(r,e){let t=$r[e];t===void 0&&(t=new Int32Array(e),$r[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function wu(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Eu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qe(t,e))return;r.uniform2fv(this.addr,e),$e(t,e)}}function Au(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qe(t,e))return;r.uniform3fv(this.addr,e),$e(t,e)}}function Tu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qe(t,e))return;r.uniform4fv(this.addr,e),$e(t,e)}}function Cu(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qe(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$e(t,e)}else{if(qe(t,n))return;Zr.set(n),r.uniformMatrix2fv(this.addr,!1,Zr),$e(t,n)}}function Lu(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qe(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$e(t,e)}else{if(qe(t,n))return;jr.set(n),r.uniformMatrix3fv(this.addr,!1,jr),$e(t,n)}}function Du(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qe(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$e(t,e)}else{if(qe(t,n))return;Yr.set(n),r.uniformMatrix4fv(this.addr,!1,Yr),$e(t,n)}}function Pu(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ru(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qe(t,e))return;r.uniform2iv(this.addr,e),$e(t,e)}}function Iu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qe(t,e))return;r.uniform3iv(this.addr,e),$e(t,e)}}function Fu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qe(t,e))return;r.uniform4iv(this.addr,e),$e(t,e)}}function Nu(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ou(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qe(t,e))return;r.uniform2uiv(this.addr,e),$e(t,e)}}function zu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qe(t,e))return;r.uniform3uiv(this.addr,e),$e(t,e)}}function Uu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qe(t,e))return;r.uniform4uiv(this.addr,e),$e(t,e)}}function Bu(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||qa,i)}function ku(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ya,i)}function Gu(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ja,i)}function Vu(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$a,i)}function Hu(r){switch(r){case 5126:return wu;case 35664:return Eu;case 35665:return Au;case 35666:return Tu;case 35674:return Cu;case 35675:return Lu;case 35676:return Du;case 5124:case 35670:return Pu;case 35667:case 35671:return Ru;case 35668:case 35672:return Iu;case 35669:case 35673:return Fu;case 5125:return Nu;case 36294:return Ou;case 36295:return zu;case 36296:return Uu;case 35678:case 36198:case 36298:case 36306:case 35682:return Bu;case 35679:case 36299:case 36307:return ku;case 35680:case 36300:case 36308:case 36293:return Gu;case 36289:case 36303:case 36311:case 36292:return Vu}}function Wu(r,e){r.uniform1fv(this.addr,e)}function Xu(r,e){const t=$n(e,this.size,2);r.uniform2fv(this.addr,t)}function qu(r,e){const t=$n(e,this.size,3);r.uniform3fv(this.addr,t)}function $u(r,e){const t=$n(e,this.size,4);r.uniform4fv(this.addr,t)}function Yu(r,e){const t=$n(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ju(r,e){const t=$n(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Zu(r,e){const t=$n(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ku(r,e){r.uniform1iv(this.addr,e)}function Ju(r,e){r.uniform2iv(this.addr,e)}function Qu(r,e){r.uniform3iv(this.addr,e)}function ed(r,e){r.uniform4iv(this.addr,e)}function td(r,e){r.uniform1uiv(this.addr,e)}function nd(r,e){r.uniform2uiv(this.addr,e)}function id(r,e){r.uniform3uiv(this.addr,e)}function sd(r,e){r.uniform4uiv(this.addr,e)}function rd(r,e,t){const n=this.cache,i=e.length,s=Bi(t,i);qe(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||qa,s[o])}function ad(r,e,t){const n=this.cache,i=e.length,s=Bi(t,i);qe(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ya,s[o])}function od(r,e,t){const n=this.cache,i=e.length,s=Bi(t,i);qe(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ja,s[o])}function ld(r,e,t){const n=this.cache,i=e.length,s=Bi(t,i);qe(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||$a,s[o])}function cd(r){switch(r){case 5126:return Wu;case 35664:return Xu;case 35665:return qu;case 35666:return $u;case 35674:return Yu;case 35675:return ju;case 35676:return Zu;case 5124:case 35670:return Ku;case 35667:case 35671:return Ju;case 35668:case 35672:return Qu;case 35669:case 35673:return ed;case 5125:return td;case 36294:return nd;case 36295:return id;case 36296:return sd;case 35678:case 36198:case 36298:case 36306:case 35682:return rd;case 35679:case 36299:case 36307:return ad;case 35680:case 36300:case 36308:case 36293:return od;case 36289:case 36303:case 36311:case 36292:return ld}}class hd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Hu(t.type)}}class ud{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=cd(t.type)}}class dd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ys=/(\w+)(\])?(\[|\.)?/g;function Kr(r,e){r.seq.push(e),r.map[e.id]=e}function fd(r,e,t){const n=r.name,i=n.length;for(ys.lastIndex=0;;){const s=ys.exec(n),o=ys.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Kr(t,l===void 0?new hd(a,r,e):new ud(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new dd(a),Kr(t,d)),t=d}}}class Ni{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);fd(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Jr(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let pd=0;function md(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function gd(r){switch(r){case gn:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Qr(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+md(r.getShaderSource(e),o)}else return i}function _d(r,e){const t=gd(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function xd(r,e){let t;switch(e){case Lo:t="Linear";break;case Do:t="Reinhard";break;case Po:t="OptimizedCineon";break;case Ro:t="ACESFilmic";break;case Io:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vd(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(si).join(`
`)}function yd(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Md(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function si(r){return r!==""}function ea(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ta(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Is(r){return r.replace(bd,Sd)}function Sd(r,e){const t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Is(t)}const wd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function na(r){return r.replace(wd,Ed)}function Ed(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ia(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ad(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ba?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Sa?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Td(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Vn:case Hn:e="ENVMAP_TYPE_CUBE";break;case Oi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cd(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hn:e="ENVMAP_MODE_REFRACTION";break}return e}function Ld(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Aa:e="ENVMAP_BLENDING_MULTIPLY";break;case To:e="ENVMAP_BLENDING_MIX";break;case Co:e="ENVMAP_BLENDING_ADD";break}return e}function Dd(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pd(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Ad(t),l=Td(t),h=Cd(t),d=Ld(t),u=Dd(t),m=t.isWebGL2?"":vd(t),_=yd(s),p=i.createProgram();let f,g,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[_].filter(si).join(`
`),f.length>0&&(f+=`
`),g=[m,_].filter(si).join(`
`),g.length>0&&(g+=`
`)):(f=[ia(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(si).join(`
`),g=[m,ia(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$t?"#define TONE_MAPPING":"",t.toneMapping!==$t?Se.tonemapping_pars_fragment:"",t.toneMapping!==$t?xd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Se.encodings_pars_fragment,_d("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(si).join(`
`)),o=Is(o),o=ea(o,t),o=ta(o,t),a=Is(a),a=ea(a,t),a=ta(a,t),o=na(o),a=na(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",t.glslVersion===Er?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Er?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=w+f+o,b=w+g+a,E=Jr(i,35633,x),L=Jr(i,35632,b);if(i.attachShader(p,E),i.attachShader(p,L),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(E).trim(),$=i.getShaderInfoLog(L).trim();let X=!0,O=!0;if(i.getProgramParameter(p,35714)===!1){X=!1;const R=Qr(i,E,"vertex"),G=Qr(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+R+`
`+G)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(P===""||$==="")&&(O=!1);O&&(this.diagnostics={runnable:X,programLog:A,vertexShader:{log:P,prefix:f},fragmentShader:{log:$,prefix:g}})}i.deleteShader(E),i.deleteShader(L);let I;this.getUniforms=function(){return I===void 0&&(I=new Ni(i,p)),I};let y;return this.getAttributes=function(){return y===void 0&&(y=Md(i,p)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=pd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=L,this}let Rd=0;class Id{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Fd(e),t.set(e,n)),n}}class Fd{constructor(e){this.id=Rd++,this.code=e,this.usedTimes=0}}function Nd(r,e,t,n,i,s,o){const a=new Oa,c=new Id,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,A,P,$,X){const O=$.fog,R=X.geometry,G=y.isMeshStandardMaterial?$.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),J=Y&&Y.mapping===Oi?Y.image.height:null,q=_[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,j=Q!==void 0?Q.length:0;let _e=0;R.morphAttributes.position!==void 0&&(_e=1),R.morphAttributes.normal!==void 0&&(_e=2),R.morphAttributes.color!==void 0&&(_e=3);let B,Z,ie,z;if(q){const Me=zt[q];B=Me.vertexShader,Z=Me.fragmentShader}else B=y.vertexShader,Z=y.fragmentShader,c.update(y),ie=c.getVertexShaderID(y),z=c.getFragmentShaderID(y);const le=r.getRenderTarget(),ce=y.alphaTest>0,ue=y.clearcoat>0,he=y.iridescence>0;return{isWebGL2:h,shaderID:q,shaderName:y.type,vertexShader:B,fragmentShader:Z,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:u,outputEncoding:le===null?r.outputEncoding:le.isXRRenderTarget===!0?le.texture.encoding:gn,map:!!y.map,matcap:!!y.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:J,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Jo,tangentSpaceNormalMap:y.normalMapType===La,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ue,clearcoat:ue,clearcoatMap:ue&&!!y.clearcoatMap,clearcoatRoughnessMap:ue&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!y.clearcoatNormalMap,iridescence:he,iridescenceMap:he&&!!y.iridescenceMap,iridescenceThicknessMap:he&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Bn,alphaMap:!!y.alphaMap,alphaTest:ce,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!R.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!O,useFog:y.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:_e,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:$t,useLegacyLights:r.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Jt,flipSided:y.side===St,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)A.push(P),A.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(g(A,y),w(A,y),A.push(r.outputEncoding)),A.push(y.customProgramCacheKey),A.join()}function g(y,A){y.push(A.precision),y.push(A.outputEncoding),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.combine),y.push(A.vertexUvs),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function w(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),y.push(a.mask)}function x(y){const A=_[y.type];let P;if(A){const $=zt[A];P=Ml.clone($.uniforms)}else P=y.uniforms;return P}function b(y,A){let P;for(let $=0,X=l.length;$<X;$++){const O=l[$];if(O.cacheKey===A){P=O,++P.usedTimes;break}}return P===void 0&&(P=new Pd(r,A,y,s),l.push(P)),P}function E(y){if(--y.usedTimes===0){const A=l.indexOf(y);l[A]=l[l.length-1],l.pop(),y.destroy()}}function L(y){c.remove(y)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:b,releaseProgram:E,releaseShaderCache:L,programs:l,dispose:I}}function Od(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function zd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function sa(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ra(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,m,_,p,f){let g=r[e];return g===void 0?(g={id:d.id,object:d,geometry:u,material:m,groupOrder:_,renderOrder:d.renderOrder,z:p,group:f},r[e]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=m,g.groupOrder=_,g.renderOrder=d.renderOrder,g.z=p,g.group=f),e++,g}function a(d,u,m,_,p,f){const g=o(d,u,m,_,p,f);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function c(d,u,m,_,p,f){const g=o(d,u,m,_,p,f);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function l(d,u){t.length>1&&t.sort(d||zd),n.length>1&&n.sort(u||sa),i.length>1&&i.sort(u||sa)}function h(){for(let d=e,u=r.length;d<u;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function Ud(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new ra,r.set(n,[o])):i>=s.length?(o=new ra,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Bd(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function kd(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Gd=0;function Vd(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Hd(r,e){const t=new Bd,n=kd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new D);const s=new D,o=new Ve,a=new Ve;function c(h,d){let u=0,m=0,_=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let p=0,f=0,g=0,w=0,x=0,b=0,E=0,L=0,I=0,y=0;h.sort(Vd);const A=d===!0?Math.PI:1;for(let $=0,X=h.length;$<X;$++){const O=h[$],R=O.color,G=O.intensity,Y=O.distance,J=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=R.r*G*A,m+=R.g*G*A,_+=R.b*G*A;else if(O.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(O.sh.coefficients[q],G);else if(O.isDirectionalLight){const q=t.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity*A),O.castShadow){const Q=O.shadow,j=n.get(O);j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=O.shadow.matrix,b++}i.directional[p]=q,p++}else if(O.isSpotLight){const q=t.get(O);q.position.setFromMatrixPosition(O.matrixWorld),q.color.copy(R).multiplyScalar(G*A),q.distance=Y,q.coneCos=Math.cos(O.angle),q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),q.decay=O.decay,i.spot[g]=q;const Q=O.shadow;if(O.map&&(i.spotLightMap[I]=O.map,I++,Q.updateMatrices(O),O.castShadow&&y++),i.spotLightMatrix[g]=Q.matrix,O.castShadow){const j=n.get(O);j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,i.spotShadow[g]=j,i.spotShadowMap[g]=J,L++}g++}else if(O.isRectAreaLight){const q=t.get(O);q.color.copy(R).multiplyScalar(G),q.halfWidth.set(O.width*.5,0,0),q.halfHeight.set(0,O.height*.5,0),i.rectArea[w]=q,w++}else if(O.isPointLight){const q=t.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity*A),q.distance=O.distance,q.decay=O.decay,O.castShadow){const Q=O.shadow,j=n.get(O);j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,i.pointShadow[f]=j,i.pointShadowMap[f]=J,i.pointShadowMatrix[f]=O.shadow.matrix,E++}i.point[f]=q,f++}else if(O.isHemisphereLight){const q=t.get(O);q.skyColor.copy(O.color).multiplyScalar(G*A),q.groundColor.copy(O.groundColor).multiplyScalar(G*A),i.hemi[x]=q,x++}}w>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=_;const P=i.hash;(P.directionalLength!==p||P.pointLength!==f||P.spotLength!==g||P.rectAreaLength!==w||P.hemiLength!==x||P.numDirectionalShadows!==b||P.numPointShadows!==E||P.numSpotShadows!==L||P.numSpotMaps!==I)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=w,i.point.length=f,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=L+I-y,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=y,P.directionalLength=p,P.pointLength=f,P.spotLength=g,P.rectAreaLength=w,P.hemiLength=x,P.numDirectionalShadows=b,P.numPointShadows=E,P.numSpotShadows=L,P.numSpotMaps=I,i.version=Gd++)}function l(h,d){let u=0,m=0,_=0,p=0,f=0;const g=d.matrixWorldInverse;for(let w=0,x=h.length;w<x;w++){const b=h[w];if(b.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),u++}else if(b.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),_++}else if(b.isRectAreaLight){const E=i.rectArea[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),a.identity(),o.copy(b.matrixWorld),o.premultiply(g),a.extractRotation(o),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),m++}else if(b.isHemisphereLight){const E=i.hemi[f];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(g),f++}}}return{setup:c,setupView:l,state:i}}function aa(r,e){const t=new Hd(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Wd(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new aa(r,e),t.set(s,[c])):o>=a.length?(c=new aa(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Xd extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qd extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $d=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jd(r,e,t){let n=new zs;const i=new be,s=new be,o=new ke,a=new Xd({depthPacking:Ko}),c=new qd,l={},h=t.maxTextureSize,d={[tn]:St,[St]:tn,[Jt]:Jt},u=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:$d,fragmentShader:Yd}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new Rt;_.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new bt(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ba,this.render=function(b,E,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const I=r.getRenderTarget(),y=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),P=r.state;P.setBlending(en),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let $=0,X=b.length;$<X;$++){const O=b[$],R=O.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const G=R.getFrameExtents();if(i.multiply(G),s.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/G.x),i.x=s.x*G.x,R.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/G.y),i.y=s.y*G.y,R.mapSize.y=s.y)),R.map===null){const J=this.type!==ii?{minFilter:ht,magFilter:ht}:{};R.map=new xn(i.x,i.y,J),R.map.texture.name=O.name+".shadowMap",R.camera.updateProjectionMatrix()}r.setRenderTarget(R.map),r.clear();const Y=R.getViewportCount();for(let J=0;J<Y;J++){const q=R.getViewport(J);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),P.viewport(o),R.updateMatrices(O,J),n=R.getFrustum(),x(E,L,R.camera,O,this.type)}R.isPointLightShadow!==!0&&this.type===ii&&g(R,L),R.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(I,y,A)};function g(b,E){const L=e.update(p);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new xn(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,L,u,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,L,m,p,null)}function w(b,E,L,I,y,A){let P=null;const $=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if($!==void 0)P=$;else if(P=L.isPointLight===!0?c:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const X=P.uuid,O=E.uuid;let R=l[X];R===void 0&&(R={},l[X]=R);let G=R[O];G===void 0&&(G=P.clone(),R[O]=G),P=G}return P.visible=E.visible,P.wireframe=E.wireframe,A===ii?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:d[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,L.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(L.matrixWorld),P.nearDistance=I,P.farDistance=y),P}function x(b,E,L,I,y){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===ii)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const $=e.update(b),X=b.material;if(Array.isArray(X)){const O=$.groups;for(let R=0,G=O.length;R<G;R++){const Y=O[R],J=X[Y.materialIndex];if(J&&J.visible){const q=w(b,J,I,L.near,L.far,y);r.renderBufferDirect(L,null,$,q,b,Y)}}}else if(X.visible){const O=w(b,X,I,L.near,L.far,y);r.renderBufferDirect(L,null,$,O,b,null)}}const P=b.children;for(let $=0,X=P.length;$<X;$++)x(P[$],E,L,I,y)}}function Zd(r,e,t){const n=t.isWebGL2;function i(){let C=!1;const H=new ke;let K=null;const oe=new ke(0,0,0,0);return{setMask:function(de){K!==de&&!C&&(r.colorMask(de,de,de,de),K=de)},setLocked:function(de){C=de},setClear:function(de,ze,Ke,at,It){It===!0&&(de*=at,ze*=at,Ke*=at),H.set(de,ze,Ke,at),oe.equals(H)===!1&&(r.clearColor(de,ze,Ke,at),oe.copy(H))},reset:function(){C=!1,K=null,oe.set(-1,0,0,0)}}}function s(){let C=!1,H=null,K=null,oe=null;return{setTest:function(de){de?ce(2929):ue(2929)},setMask:function(de){H!==de&&!C&&(r.depthMask(de),H=de)},setFunc:function(de){if(K!==de){switch(de){case yo:r.depthFunc(512);break;case Mo:r.depthFunc(519);break;case bo:r.depthFunc(513);break;case Ts:r.depthFunc(515);break;case So:r.depthFunc(514);break;case wo:r.depthFunc(518);break;case Eo:r.depthFunc(516);break;case Ao:r.depthFunc(517);break;default:r.depthFunc(515)}K=de}},setLocked:function(de){C=de},setClear:function(de){oe!==de&&(r.clearDepth(de),oe=de)},reset:function(){C=!1,H=null,K=null,oe=null}}}function o(){let C=!1,H=null,K=null,oe=null,de=null,ze=null,Ke=null,at=null,It=null;return{setTest:function(Ge){C||(Ge?ce(2960):ue(2960))},setMask:function(Ge){H!==Ge&&!C&&(r.stencilMask(Ge),H=Ge)},setFunc:function(Ge,wt,Ft){(K!==Ge||oe!==wt||de!==Ft)&&(r.stencilFunc(Ge,wt,Ft),K=Ge,oe=wt,de=Ft)},setOp:function(Ge,wt,Ft){(ze!==Ge||Ke!==wt||at!==Ft)&&(r.stencilOp(Ge,wt,Ft),ze=Ge,Ke=wt,at=Ft)},setLocked:function(Ge){C=Ge},setClear:function(Ge){It!==Ge&&(r.clearStencil(Ge),It=Ge)},reset:function(){C=!1,H=null,K=null,oe=null,de=null,ze=null,Ke=null,at=null,It=null}}}const a=new i,c=new s,l=new o,h=new WeakMap,d=new WeakMap;let u={},m={},_=new WeakMap,p=[],f=null,g=!1,w=null,x=null,b=null,E=null,L=null,I=null,y=null,A=!1,P=null,$=null,X=null,O=null,R=null;const G=r.getParameter(35661);let Y=!1,J=0;const q=r.getParameter(7938);q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=J>=1):q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=J>=2);let Q=null,j={};const _e=r.getParameter(3088),B=r.getParameter(2978),Z=new ke().fromArray(_e),ie=new ke().fromArray(B);function z(C,H,K){const oe=new Uint8Array(4),de=r.createTexture();r.bindTexture(C,de),r.texParameteri(C,10241,9728),r.texParameteri(C,10240,9728);for(let ze=0;ze<K;ze++)r.texImage2D(H+ze,0,6408,1,1,0,6408,5121,oe);return de}const le={};le[3553]=z(3553,3553,1),le[34067]=z(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ce(2929),c.setFunc(Ts),je(!1),Ze(Ys),ce(2884),Ye(en);function ce(C){u[C]!==!0&&(r.enable(C),u[C]=!0)}function ue(C){u[C]!==!1&&(r.disable(C),u[C]=!1)}function he(C,H){return m[C]!==H?(r.bindFramebuffer(C,H),m[C]=H,n&&(C===36009&&(m[36160]=H),C===36160&&(m[36009]=H)),!0):!1}function ve(C,H){let K=p,oe=!1;if(C)if(K=_.get(H),K===void 0&&(K=[],_.set(H,K)),C.isWebGLMultipleRenderTargets){const de=C.texture;if(K.length!==de.length||K[0]!==36064){for(let ze=0,Ke=de.length;ze<Ke;ze++)K[ze]=36064+ze;K.length=de.length,oe=!0}}else K[0]!==36064&&(K[0]=36064,oe=!0);else K[0]!==1029&&(K[0]=1029,oe=!0);oe&&(t.isWebGL2?r.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Me(C){return f!==C?(r.useProgram(C),f=C,!0):!1}const we={[zn]:32774,[lo]:32778,[co]:32779};if(n)we[Js]=32775,we[Qs]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(we[Js]=C.MIN_EXT,we[Qs]=C.MAX_EXT)}const Pe={[ho]:0,[uo]:1,[fo]:768,[wa]:770,[vo]:776,[_o]:774,[mo]:772,[po]:769,[Ea]:771,[xo]:775,[go]:773};function Ye(C,H,K,oe,de,ze,Ke,at){if(C===en){g===!0&&(ue(3042),g=!1);return}if(g===!1&&(ce(3042),g=!0),C!==oo){if(C!==w||at!==A){if((x!==zn||L!==zn)&&(r.blendEquation(32774),x=zn,L=zn),at)switch(C){case Bn:r.blendFuncSeparate(1,771,1,771);break;case js:r.blendFunc(1,1);break;case Zs:r.blendFuncSeparate(0,769,0,1);break;case Ks:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Bn:r.blendFuncSeparate(770,771,1,771);break;case js:r.blendFunc(770,1);break;case Zs:r.blendFuncSeparate(0,769,0,1);break;case Ks:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}b=null,E=null,I=null,y=null,w=C,A=at}return}de=de||H,ze=ze||K,Ke=Ke||oe,(H!==x||de!==L)&&(r.blendEquationSeparate(we[H],we[de]),x=H,L=de),(K!==b||oe!==E||ze!==I||Ke!==y)&&(r.blendFuncSeparate(Pe[K],Pe[oe],Pe[ze],Pe[Ke]),b=K,E=oe,I=ze,y=Ke),w=C,A=!1}function st(C,H){C.side===Jt?ue(2884):ce(2884);let K=C.side===St;H&&(K=!K),je(K),C.blending===Bn&&C.transparent===!1?Ye(en):Ye(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const oe=C.stencilWrite;l.setTest(oe),oe&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Oe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ce(32926):ue(32926)}function je(C){P!==C&&(C?r.frontFace(2304):r.frontFace(2305),P=C)}function Ze(C){C!==ro?(ce(2884),C!==$&&(C===Ys?r.cullFace(1029):C===ao?r.cullFace(1028):r.cullFace(1032))):ue(2884),$=C}function Be(C){C!==X&&(Y&&r.lineWidth(C),X=C)}function Oe(C,H,K){C?(ce(32823),(O!==H||R!==K)&&(r.polygonOffset(H,K),O=H,R=K)):ue(32823)}function mt(C){C?ce(3089):ue(3089)}function rt(C){C===void 0&&(C=33984+G-1),Q!==C&&(r.activeTexture(C),Q=C)}function S(C,H,K){K===void 0&&(Q===null?K=33984+G-1:K=Q);let oe=j[K];oe===void 0&&(oe={type:void 0,texture:void 0},j[K]=oe),(oe.type!==C||oe.texture!==H)&&(Q!==K&&(r.activeTexture(K),Q=K),r.bindTexture(C,H||le[C]),oe.type=C,oe.texture=H)}function v(){const C=j[Q];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function V(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function re(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function T(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function F(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(C){Z.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),Z.copy(C))}function pe(C){ie.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),ie.copy(C))}function Te(C,H){let K=d.get(H);K===void 0&&(K=new WeakMap,d.set(H,K));let oe=K.get(C);oe===void 0&&(oe=r.getUniformBlockIndex(H,C.name),K.set(C,oe))}function Re(C,H){const oe=d.get(H).get(C);h.get(H)!==oe&&(r.uniformBlockBinding(H,oe,C.__bindingPointIndex),h.set(H,oe))}function Ne(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,j={},m={},_=new WeakMap,p=[],f=null,g=!1,w=null,x=null,b=null,E=null,L=null,I=null,y=null,A=!1,P=null,$=null,X=null,O=null,R=null,Z.set(0,0,r.canvas.width,r.canvas.height),ie.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ce,disable:ue,bindFramebuffer:he,drawBuffers:ve,useProgram:Me,setBlending:Ye,setMaterial:st,setFlipSided:je,setCullFace:Ze,setLineWidth:Be,setPolygonOffset:Oe,setScissorTest:mt,activeTexture:rt,bindTexture:S,unbindTexture:v,compressedTexImage2D:V,compressedTexImage3D:ee,texImage2D:se,texImage3D:fe,updateUBOMapping:Te,uniformBlockBinding:Re,texStorage2D:F,texStorage3D:ae,texSubImage2D:te,texSubImage3D:re,compressedTexSubImage2D:ge,compressedTexSubImage3D:T,scissor:me,viewport:pe,reset:Ne}}function Kd(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(S,v){return g?new OffscreenCanvas(S,v):ci("canvas")}function x(S,v,V,ee){let te=1;if((S.width>ee||S.height>ee)&&(te=ee/Math.max(S.width,S.height)),te<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const re=v?tl:Math.floor,ge=re(te*S.width),T=re(te*S.height);p===void 0&&(p=w(ge,T));const F=V?w(ge,T):p;return F.width=ge,F.height=T,F.getContext("2d").drawImage(S,0,0,ge,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ge+"x"+T+")."),F}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function b(S){return Tr(S.width)&&Tr(S.height)}function E(S){return a?!1:S.wrapS!==Dt||S.wrapT!==Dt||S.minFilter!==ht&&S.minFilter!==At}function L(S,v){return S.generateMipmaps&&v&&S.minFilter!==ht&&S.minFilter!==At}function I(S){r.generateMipmap(S)}function y(S,v,V,ee,te=!1){if(a===!1)return v;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let re=v;return v===6403&&(V===5126&&(re=33326),V===5131&&(re=33325),V===5121&&(re=33321)),v===33319&&(V===5126&&(re=33328),V===5131&&(re=33327),V===5121&&(re=33323)),v===6408&&(V===5126&&(re=34836),V===5131&&(re=34842),V===5121&&(re=ee===Ue&&te===!1?35907:32856),V===32819&&(re=32854),V===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function A(S,v,V){return L(S,V)===!0||S.isFramebufferTexture&&S.minFilter!==ht&&S.minFilter!==At?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function P(S){return S===ht||S===er||S===Wi?9728:9729}function $(S){const v=S.target;v.removeEventListener("dispose",$),O(v),v.isVideoTexture&&_.delete(v)}function X(S){const v=S.target;v.removeEventListener("dispose",X),G(v)}function O(S){const v=n.get(S);if(v.__webglInit===void 0)return;const V=S.source,ee=f.get(V);if(ee){const te=ee[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(S),Object.keys(ee).length===0&&f.delete(V)}n.remove(S)}function R(S){const v=n.get(S);r.deleteTexture(v.__webglTexture);const V=S.source,ee=f.get(V);delete ee[v.__cacheKey],o.memory.textures--}function G(S){const v=S.texture,V=n.get(S),ee=n.get(v);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)r.deleteFramebuffer(V.__webglFramebuffer[te]),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[te]);else{if(r.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let te=0;te<V.__webglColorRenderbuffer.length;te++)V.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[te]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let te=0,re=v.length;te<re;te++){const ge=n.get(v[te]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(v[te])}n.remove(v),n.remove(S)}let Y=0;function J(){Y=0}function q(){const S=Y;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),Y+=1,S}function Q(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.encoding),v.join()}function j(S,v){const V=n.get(S);if(S.isVideoTexture&&mt(S),S.isRenderTargetTexture===!1&&S.version>0&&V.__version!==S.version){const ee=S.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(V,S,v);return}}t.bindTexture(3553,V.__webglTexture,33984+v)}function _e(S,v){const V=n.get(S);if(S.version>0&&V.__version!==S.version){ue(V,S,v);return}t.bindTexture(35866,V.__webglTexture,33984+v)}function B(S,v){const V=n.get(S);if(S.version>0&&V.__version!==S.version){ue(V,S,v);return}t.bindTexture(32879,V.__webglTexture,33984+v)}function Z(S,v){const V=n.get(S);if(S.version>0&&V.__version!==S.version){he(V,S,v);return}t.bindTexture(34067,V.__webglTexture,33984+v)}const ie={[Ds]:10497,[Dt]:33071,[Ps]:33648},z={[ht]:9728,[er]:9984,[Wi]:9986,[At]:9729,[Fo]:9985,[ai]:9987};function le(S,v,V){if(V?(r.texParameteri(S,10242,ie[v.wrapS]),r.texParameteri(S,10243,ie[v.wrapT]),(S===32879||S===35866)&&r.texParameteri(S,32882,ie[v.wrapR]),r.texParameteri(S,10240,z[v.magFilter]),r.texParameteri(S,10241,z[v.minFilter])):(r.texParameteri(S,10242,33071),r.texParameteri(S,10243,33071),(S===32879||S===35866)&&r.texParameteri(S,32882,33071),(v.wrapS!==Dt||v.wrapT!==Dt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,10240,P(v.magFilter)),r.texParameteri(S,10241,P(v.minFilter)),v.minFilter!==ht&&v.minFilter!==At&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===ht||v.minFilter!==Wi&&v.minFilter!==ai||v.type===fn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===oi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(r.texParameterf(S,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function ce(S,v){let V=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",$));const ee=v.source;let te=f.get(ee);te===void 0&&(te={},f.set(ee,te));const re=Q(v);if(re!==S.__cacheKey){te[re]===void 0&&(te[re]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),te[re].usedTimes++;const ge=te[S.__cacheKey];ge!==void 0&&(te[S.__cacheKey].usedTimes--,ge.usedTimes===0&&R(v)),S.__cacheKey=re,S.__webglTexture=te[re].texture}return V}function ue(S,v,V){let ee=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=35866),v.isData3DTexture&&(ee=32879);const te=ce(S,v),re=v.source;t.bindTexture(ee,S.__webglTexture,33984+V);const ge=n.get(re);if(re.version!==ge.__version||te===!0){t.activeTexture(33984+V),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const T=E(v)&&b(v.image)===!1;let F=x(v.image,T,!1,h);F=rt(v,F);const ae=b(F)||a,se=s.convert(v.format,v.encoding);let fe=s.convert(v.type),me=y(v.internalFormat,se,fe,v.encoding,v.isVideoTexture);le(ee,v,ae);let pe;const Te=v.mipmaps,Re=a&&v.isVideoTexture!==!0,Ne=ge.__version===void 0||te===!0,C=A(v,F,ae);if(v.isDepthTexture)me=6402,a?v.type===fn?me=36012:v.type===dn?me=33190:v.type===kn?me=35056:me=33189:v.type===fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===pn&&me===6402&&v.type!==Ca&&v.type!==dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=dn,fe=s.convert(v.type)),v.format===Wn&&me===6402&&(me=34041,v.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=kn,fe=s.convert(v.type))),Ne&&(Re?t.texStorage2D(3553,1,me,F.width,F.height):t.texImage2D(3553,0,me,F.width,F.height,0,se,fe,null));else if(v.isDataTexture)if(Te.length>0&&ae){Re&&Ne&&t.texStorage2D(3553,C,me,Te[0].width,Te[0].height);for(let H=0,K=Te.length;H<K;H++)pe=Te[H],Re?t.texSubImage2D(3553,H,0,0,pe.width,pe.height,se,fe,pe.data):t.texImage2D(3553,H,me,pe.width,pe.height,0,se,fe,pe.data);v.generateMipmaps=!1}else Re?(Ne&&t.texStorage2D(3553,C,me,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,se,fe,F.data)):t.texImage2D(3553,0,me,F.width,F.height,0,se,fe,F.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Re&&Ne&&t.texStorage3D(35866,C,me,Te[0].width,Te[0].height,F.depth);for(let H=0,K=Te.length;H<K;H++)pe=Te[H],v.format!==Pt?se!==null?Re?t.compressedTexSubImage3D(35866,H,0,0,0,pe.width,pe.height,F.depth,se,pe.data,0,0):t.compressedTexImage3D(35866,H,me,pe.width,pe.height,F.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?t.texSubImage3D(35866,H,0,0,0,pe.width,pe.height,F.depth,se,fe,pe.data):t.texImage3D(35866,H,me,pe.width,pe.height,F.depth,0,se,fe,pe.data)}else{Re&&Ne&&t.texStorage2D(3553,C,me,Te[0].width,Te[0].height);for(let H=0,K=Te.length;H<K;H++)pe=Te[H],v.format!==Pt?se!==null?Re?t.compressedTexSubImage2D(3553,H,0,0,pe.width,pe.height,se,pe.data):t.compressedTexImage2D(3553,H,me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?t.texSubImage2D(3553,H,0,0,pe.width,pe.height,se,fe,pe.data):t.texImage2D(3553,H,me,pe.width,pe.height,0,se,fe,pe.data)}else if(v.isDataArrayTexture)Re?(Ne&&t.texStorage3D(35866,C,me,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,se,fe,F.data)):t.texImage3D(35866,0,me,F.width,F.height,F.depth,0,se,fe,F.data);else if(v.isData3DTexture)Re?(Ne&&t.texStorage3D(32879,C,me,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,se,fe,F.data)):t.texImage3D(32879,0,me,F.width,F.height,F.depth,0,se,fe,F.data);else if(v.isFramebufferTexture){if(Ne)if(Re)t.texStorage2D(3553,C,me,F.width,F.height);else{let H=F.width,K=F.height;for(let oe=0;oe<C;oe++)t.texImage2D(3553,oe,me,H,K,0,se,fe,null),H>>=1,K>>=1}}else if(Te.length>0&&ae){Re&&Ne&&t.texStorage2D(3553,C,me,Te[0].width,Te[0].height);for(let H=0,K=Te.length;H<K;H++)pe=Te[H],Re?t.texSubImage2D(3553,H,0,0,se,fe,pe):t.texImage2D(3553,H,me,se,fe,pe);v.generateMipmaps=!1}else Re?(Ne&&t.texStorage2D(3553,C,me,F.width,F.height),t.texSubImage2D(3553,0,0,0,se,fe,F)):t.texImage2D(3553,0,me,se,fe,F);L(v,ae)&&I(ee),ge.__version=re.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function he(S,v,V){if(v.image.length!==6)return;const ee=ce(S,v),te=v.source;t.bindTexture(34067,S.__webglTexture,33984+V);const re=n.get(te);if(te.version!==re.__version||ee===!0){t.activeTexture(33984+V),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const ge=v.isCompressedTexture||v.image[0].isCompressedTexture,T=v.image[0]&&v.image[0].isDataTexture,F=[];for(let H=0;H<6;H++)!ge&&!T?F[H]=x(v.image[H],!1,!0,l):F[H]=T?v.image[H].image:v.image[H],F[H]=rt(v,F[H]);const ae=F[0],se=b(ae)||a,fe=s.convert(v.format,v.encoding),me=s.convert(v.type),pe=y(v.internalFormat,fe,me,v.encoding),Te=a&&v.isVideoTexture!==!0,Re=re.__version===void 0||ee===!0;let Ne=A(v,ae,se);le(34067,v,se);let C;if(ge){Te&&Re&&t.texStorage2D(34067,Ne,pe,ae.width,ae.height);for(let H=0;H<6;H++){C=F[H].mipmaps;for(let K=0;K<C.length;K++){const oe=C[K];v.format!==Pt?fe!==null?Te?t.compressedTexSubImage2D(34069+H,K,0,0,oe.width,oe.height,fe,oe.data):t.compressedTexImage2D(34069+H,K,pe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?t.texSubImage2D(34069+H,K,0,0,oe.width,oe.height,fe,me,oe.data):t.texImage2D(34069+H,K,pe,oe.width,oe.height,0,fe,me,oe.data)}}}else{C=v.mipmaps,Te&&Re&&(C.length>0&&Ne++,t.texStorage2D(34067,Ne,pe,F[0].width,F[0].height));for(let H=0;H<6;H++)if(T){Te?t.texSubImage2D(34069+H,0,0,0,F[H].width,F[H].height,fe,me,F[H].data):t.texImage2D(34069+H,0,pe,F[H].width,F[H].height,0,fe,me,F[H].data);for(let K=0;K<C.length;K++){const de=C[K].image[H].image;Te?t.texSubImage2D(34069+H,K+1,0,0,de.width,de.height,fe,me,de.data):t.texImage2D(34069+H,K+1,pe,de.width,de.height,0,fe,me,de.data)}}else{Te?t.texSubImage2D(34069+H,0,0,0,fe,me,F[H]):t.texImage2D(34069+H,0,pe,fe,me,F[H]);for(let K=0;K<C.length;K++){const oe=C[K];Te?t.texSubImage2D(34069+H,K+1,0,0,fe,me,oe.image[H]):t.texImage2D(34069+H,K+1,pe,fe,me,oe.image[H])}}}L(v,se)&&I(34067),re.__version=te.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ve(S,v,V,ee,te){const re=s.convert(V.format,V.encoding),ge=s.convert(V.type),T=y(V.internalFormat,re,ge,V.encoding);n.get(v).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,T,v.width,v.height,v.depth,0,re,ge,null):t.texImage2D(te,0,T,v.width,v.height,0,re,ge,null)),t.bindFramebuffer(36160,S),Oe(v)?u.framebufferTexture2DMultisampleEXT(36160,ee,te,n.get(V).__webglTexture,0,Be(v)):(te===3553||te>=34069&&te<=34074)&&r.framebufferTexture2D(36160,ee,te,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Me(S,v,V){if(r.bindRenderbuffer(36161,S),v.depthBuffer&&!v.stencilBuffer){let ee=33189;if(V||Oe(v)){const te=v.depthTexture;te&&te.isDepthTexture&&(te.type===fn?ee=36012:te.type===dn&&(ee=33190));const re=Be(v);Oe(v)?u.renderbufferStorageMultisampleEXT(36161,re,ee,v.width,v.height):r.renderbufferStorageMultisample(36161,re,ee,v.width,v.height)}else r.renderbufferStorage(36161,ee,v.width,v.height);r.framebufferRenderbuffer(36160,36096,36161,S)}else if(v.depthBuffer&&v.stencilBuffer){const ee=Be(v);V&&Oe(v)===!1?r.renderbufferStorageMultisample(36161,ee,35056,v.width,v.height):Oe(v)?u.renderbufferStorageMultisampleEXT(36161,ee,35056,v.width,v.height):r.renderbufferStorage(36161,34041,v.width,v.height),r.framebufferRenderbuffer(36160,33306,36161,S)}else{const ee=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let te=0;te<ee.length;te++){const re=ee[te],ge=s.convert(re.format,re.encoding),T=s.convert(re.type),F=y(re.internalFormat,ge,T,re.encoding),ae=Be(v);V&&Oe(v)===!1?r.renderbufferStorageMultisample(36161,ae,F,v.width,v.height):Oe(v)?u.renderbufferStorageMultisampleEXT(36161,ae,F,v.width,v.height):r.renderbufferStorage(36161,F,v.width,v.height)}}r.bindRenderbuffer(36161,null)}function we(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const ee=n.get(v.depthTexture).__webglTexture,te=Be(v);if(v.depthTexture.format===pn)Oe(v)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,te):r.framebufferTexture2D(36160,36096,3553,ee,0);else if(v.depthTexture.format===Wn)Oe(v)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,te):r.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function Pe(S){const v=n.get(S),V=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");we(v.__webglFramebuffer,S)}else if(V){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]=r.createRenderbuffer(),Me(v.__webglDepthbuffer[ee],S,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),Me(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function Ye(S,v,V){const ee=n.get(S);v!==void 0&&ve(ee.__webglFramebuffer,S,S.texture,36064,3553),V!==void 0&&Pe(S)}function st(S){const v=S.texture,V=n.get(S),ee=n.get(v);S.addEventListener("dispose",X),S.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=v.version,o.memory.textures++);const te=S.isWebGLCubeRenderTarget===!0,re=S.isWebGLMultipleRenderTargets===!0,ge=b(S)||a;if(te){V.__webglFramebuffer=[];for(let T=0;T<6;T++)V.__webglFramebuffer[T]=r.createFramebuffer()}else{if(V.__webglFramebuffer=r.createFramebuffer(),re)if(i.drawBuffers){const T=S.texture;for(let F=0,ae=T.length;F<ae;F++){const se=n.get(T[F]);se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&Oe(S)===!1){const T=re?v:[v];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let F=0;F<T.length;F++){const ae=T[F];V.__webglColorRenderbuffer[F]=r.createRenderbuffer(),r.bindRenderbuffer(36161,V.__webglColorRenderbuffer[F]);const se=s.convert(ae.format,ae.encoding),fe=s.convert(ae.type),me=y(ae.internalFormat,se,fe,ae.encoding,S.isXRRenderTarget===!0),pe=Be(S);r.renderbufferStorageMultisample(36161,pe,me,S.width,S.height),r.framebufferRenderbuffer(36160,36064+F,36161,V.__webglColorRenderbuffer[F])}r.bindRenderbuffer(36161,null),S.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Me(V.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,ee.__webglTexture),le(34067,v,ge);for(let T=0;T<6;T++)ve(V.__webglFramebuffer[T],S,v,36064,34069+T);L(v,ge)&&I(34067),t.unbindTexture()}else if(re){const T=S.texture;for(let F=0,ae=T.length;F<ae;F++){const se=T[F],fe=n.get(se);t.bindTexture(3553,fe.__webglTexture),le(3553,se,ge),ve(V.__webglFramebuffer,S,se,36064+F,3553),L(se,ge)&&I(3553)}t.unbindTexture()}else{let T=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?T=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(T,ee.__webglTexture),le(T,v,ge),ve(V.__webglFramebuffer,S,v,36064,T),L(v,ge)&&I(T),t.unbindTexture()}S.depthBuffer&&Pe(S)}function je(S){const v=b(S)||a,V=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0,te=V.length;ee<te;ee++){const re=V[ee];if(L(re,v)){const ge=S.isWebGLCubeRenderTarget?34067:3553,T=n.get(re).__webglTexture;t.bindTexture(ge,T),I(ge),t.unbindTexture()}}}function Ze(S){if(a&&S.samples>0&&Oe(S)===!1){const v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],V=S.width,ee=S.height;let te=16384;const re=[],ge=S.stencilBuffer?33306:36096,T=n.get(S),F=S.isWebGLMultipleRenderTargets===!0;if(F)for(let ae=0;ae<v.length;ae++)t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ae,36161,null),t.bindFramebuffer(36160,T.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ae,3553,null,0);t.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,T.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){re.push(36064+ae),S.depthBuffer&&re.push(ge);const se=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(se===!1&&(S.depthBuffer&&(te|=256),S.stencilBuffer&&(te|=1024)),F&&r.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[ae]),se===!0&&(r.invalidateFramebuffer(36008,[ge]),r.invalidateFramebuffer(36009,[ge])),F){const fe=n.get(v[ae]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,fe,0)}r.blitFramebuffer(0,0,V,ee,0,0,V,ee,te,9728),m&&r.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let ae=0;ae<v.length;ae++){t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ae,36161,T.__webglColorRenderbuffer[ae]);const se=n.get(v[ae]).__webglTexture;t.bindFramebuffer(36160,T.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ae,3553,se,0)}t.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function Be(S){return Math.min(d,S.samples)}function Oe(S){const v=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function mt(S){const v=o.render.frame;_.get(S)!==v&&(_.set(S,v),S.update())}function rt(S,v){const V=S.encoding,ee=S.format,te=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Rs||V!==gn&&(V===Ue?a===!1?e.has("EXT_sRGB")===!0&&ee===Pt?(S.format=Rs,S.minFilter=At,S.generateMipmaps=!1):v=Ra.sRGBToLinear(v):(ee!==Pt||te!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),v}this.allocateTextureUnit=q,this.resetTextureUnits=J,this.setTexture2D=j,this.setTexture2DArray=_e,this.setTexture3D=B,this.setTextureCube=Z,this.rebindTextures=Ye,this.setupRenderTarget=st,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Oe}function Jd(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===mn)return 5121;if(s===Uo)return 32819;if(s===Bo)return 32820;if(s===No)return 5120;if(s===Oo)return 5122;if(s===Ca)return 5123;if(s===zo)return 5124;if(s===dn)return 5125;if(s===fn)return 5126;if(s===oi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ko)return 6406;if(s===Pt)return 6408;if(s===Go)return 6409;if(s===Vo)return 6410;if(s===pn)return 6402;if(s===Wn)return 34041;if(s===Rs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ho)return 6403;if(s===Wo)return 36244;if(s===Xo)return 33319;if(s===qo)return 33320;if(s===$o)return 36249;if(s===Xi||s===qi||s===$i||s===Yi)if(o===Ue)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Xi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$i)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Xi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qi)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$i)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yi)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===tr||s===nr||s===ir||s===sr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===tr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ir)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yo)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rr||s===ar)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===rr)return o===Ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ar)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===or||s===lr||s===cr||s===hr||s===ur||s===dr||s===fr||s===pr||s===mr||s===gr||s===_r||s===xr||s===vr||s===yr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===or)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===lr)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cr)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hr)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ur)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dr)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fr)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pr)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===mr)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gr)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_r)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xr)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vr)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yr)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ji)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ji)return o===Ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===jo||s===Mr||s===br||s===Sr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ji)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Mr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===br)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===kn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Qd extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ri extends et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ef={type:"move"};class Ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n),g=this._getHandJoint(l,p);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=f.radius),g.visible=f!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,_=.005;l.inputState.pinching&&u>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ef)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tf extends pt{constructor(e,t,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:pn,h!==pn&&h!==Wn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===pn&&(n=dn),n===void 0&&h===Wn&&(n=kn),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ht,this.minFilter=c!==void 0?c:ht,this.flipY=!1,this.generateMipmaps=!1}}class nf extends yn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,m=null,_=null;const p=t.getContextAttributes();let f=null,g=null;const w=[],x=[],b=new Set,E=new Map,L=new Mt;L.layers.enable(1),L.viewport=new ke;const I=new Mt;I.layers.enable(2),I.viewport=new ke;const y=[L,I],A=new Qd;A.layers.enable(1),A.layers.enable(2);let P=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=w[B];return Z===void 0&&(Z=new Ms,w[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=w[B];return Z===void 0&&(Z=new Ms,w[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=w[B];return Z===void 0&&(Z=new Ms,w[B]=Z),Z.getHandSpace()};function X(B){const Z=x.indexOf(B.inputSource);if(Z===-1)return;const ie=w[Z];ie!==void 0&&ie.dispatchEvent({type:B.type,data:B.inputSource})}function O(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",R);for(let B=0;B<w.length;B++){const Z=x[B];Z!==null&&(x[B]=null,w[B].disconnect(Z))}P=null,$=null,e.setRenderTarget(f),m=null,u=null,d=null,i=null,g=null,_e.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",O),i.addEventListener("inputsourceschange",R),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:m}),g=new xn(m.framebufferWidth,m.framebufferHeight,{format:Pt,type:mn,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let Z=null,ie=null,z=null;p.depth&&(z=p.stencil?35056:33190,Z=p.stencil?Wn:pn,ie=p.stencil?kn:dn);const le={colorFormat:32856,depthFormat:z,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(le),i.updateRenderState({layers:[u]}),g=new xn(u.textureWidth,u.textureHeight,{format:Pt,type:mn,depthTexture:new tf(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const ce=e.properties.get(g);ce.__ignoreDepthValues=u.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),_e.setContext(i),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(B){for(let Z=0;Z<B.removed.length;Z++){const ie=B.removed[Z],z=x.indexOf(ie);z>=0&&(x[z]=null,w[z].disconnect(ie))}for(let Z=0;Z<B.added.length;Z++){const ie=B.added[Z];let z=x.indexOf(ie);if(z===-1){for(let ce=0;ce<w.length;ce++)if(ce>=x.length){x.push(ie),z=ce;break}else if(x[ce]===null){x[ce]=ie,z=ce;break}if(z===-1)break}const le=w[z];le&&le.connect(ie)}}const G=new D,Y=new D;function J(B,Z,ie){G.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(ie.matrixWorld);const z=G.distanceTo(Y),le=Z.projectionMatrix.elements,ce=ie.projectionMatrix.elements,ue=le[14]/(le[10]-1),he=le[14]/(le[10]+1),ve=(le[9]+1)/le[5],Me=(le[9]-1)/le[5],we=(le[8]-1)/le[0],Pe=(ce[8]+1)/ce[0],Ye=ue*we,st=ue*Pe,je=z/(-we+Pe),Ze=je*-we;Z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ze),B.translateZ(je),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Be=ue+je,Oe=he+je,mt=Ye-Ze,rt=st+(z-Ze),S=ve*he/Oe*Be,v=Me*he/Oe*Be;B.projectionMatrix.makePerspective(mt,rt,S,v,Be,Oe)}function q(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;A.near=I.near=L.near=B.near,A.far=I.far=L.far=B.far,(P!==A.near||$!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,$=A.far);const Z=B.parent,ie=A.cameras;q(A,Z);for(let le=0;le<ie.length;le++)q(ie[le],Z);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),B.matrix.copy(A.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const z=B.children;for(let le=0,ce=z.length;le<ce;le++)z[le].updateMatrixWorld(!0);ie.length===2?J(A,L,I):A.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(B){c=B,u!==null&&(u.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.getPlanes=function(){return b};let Q=null;function j(B,Z){if(h=Z.getViewerPose(l||o),_=Z,h!==null){const ie=h.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let z=!1;ie.length!==A.cameras.length&&(A.cameras.length=0,z=!0);for(let le=0;le<ie.length;le++){const ce=ie[le];let ue=null;if(m!==null)ue=m.getViewport(ce);else{const ve=d.getViewSubImage(u,ce);ue=ve.viewport,le===0&&(e.setRenderTargetTextures(g,ve.colorTexture,u.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(g))}let he=y[le];he===void 0&&(he=new Mt,he.layers.enable(le),he.viewport=new ke,y[le]=he),he.matrix.fromArray(ce.transform.matrix),he.projectionMatrix.fromArray(ce.projectionMatrix),he.viewport.set(ue.x,ue.y,ue.width,ue.height),le===0&&A.matrix.copy(he.matrix),z===!0&&A.cameras.push(he)}}for(let ie=0;ie<w.length;ie++){const z=x[ie],le=w[ie];z!==null&&le!==void 0&&le.update(z,Z,l||o)}if(Q&&Q(B,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let ie=null;for(const z of b)Z.detectedPlanes.has(z)||(ie===null&&(ie=[]),ie.push(z));if(ie!==null)for(const z of ie)b.delete(z),E.delete(z),n.dispatchEvent({type:"planeremoved",data:z});for(const z of Z.detectedPlanes)if(!b.has(z))b.add(z),E.set(z,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:z});else{const le=E.get(z);z.lastChangedTime>le&&(E.set(z,z.lastChangedTime),n.dispatchEvent({type:"planechanged",data:z}))}}_=null}const _e=new Wa;_e.setAnimationLoop(j),this.setAnimationLoop=function(B){Q=B},this.dispose=function(){}}}function sf(r,e){function t(p,f){f.color.getRGB(p.fogColor.value,Ga(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,g,w,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),d(p,f),f.isMeshPhysicalMaterial&&u(p,f,x)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),_(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,g,w):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===St&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===St&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const g=e.get(f).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const b=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*b}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let w;f.map?w=f.map:f.specularMap?w=f.specularMap:f.displacementMap?w=f.displacementMap:f.normalMap?w=f.normalMap:f.bumpMap?w=f.bumpMap:f.roughnessMap?w=f.roughnessMap:f.metalnessMap?w=f.metalnessMap:f.alphaMap?w=f.alphaMap:f.emissiveMap?w=f.emissiveMap:f.clearcoatMap?w=f.clearcoatMap:f.clearcoatNormalMap?w=f.clearcoatNormalMap:f.clearcoatRoughnessMap?w=f.clearcoatRoughnessMap:f.iridescenceMap?w=f.iridescenceMap:f.iridescenceThicknessMap?w=f.iridescenceThicknessMap:f.specularIntensityMap?w=f.specularIntensityMap:f.specularColorMap?w=f.specularColorMap:f.transmissionMap?w=f.transmissionMap:f.thicknessMap?w=f.thicknessMap:f.sheenColorMap?w=f.sheenColorMap:f.sheenRoughnessMap&&(w=f.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let x;f.aoMap?x=f.aoMap:f.lightMap&&(x=f.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,g,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*g,p.scale.value=w*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let g;f.map?g=f.map:f.alphaMap&&(g=f.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,g){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===St&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function rf(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function c(w,x){const b=x.program;n.uniformBlockBinding(w,b)}function l(w,x){let b=i[w.id];b===void 0&&(_(w),b=h(w),i[w.id]=b,w.addEventListener("dispose",f));const E=x.program;n.updateUBOMapping(w,E);const L=e.render.frame;s[w.id]!==L&&(u(w),s[w.id]=L)}function h(w){const x=d();w.__bindingPointIndex=x;const b=r.createBuffer(),E=w.__size,L=w.usage;return r.bindBuffer(35345,b),r.bufferData(35345,E,L),r.bindBuffer(35345,null),r.bindBufferBase(35345,x,b),b}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const x=i[w.id],b=w.uniforms,E=w.__cache;r.bindBuffer(35345,x);for(let L=0,I=b.length;L<I;L++){const y=b[L];if(m(y,L,E)===!0){const A=y.__offset,P=Array.isArray(y.value)?y.value:[y.value];let $=0;for(let X=0;X<P.length;X++){const O=P[X],R=p(O);typeof O=="number"?(y.__data[0]=O,r.bufferSubData(35345,A+$,y.__data)):O.isMatrix3?(y.__data[0]=O.elements[0],y.__data[1]=O.elements[1],y.__data[2]=O.elements[2],y.__data[3]=O.elements[0],y.__data[4]=O.elements[3],y.__data[5]=O.elements[4],y.__data[6]=O.elements[5],y.__data[7]=O.elements[0],y.__data[8]=O.elements[6],y.__data[9]=O.elements[7],y.__data[10]=O.elements[8],y.__data[11]=O.elements[0]):(O.toArray(y.__data,$),$+=R.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,A,y.__data)}}r.bindBuffer(35345,null)}function m(w,x,b){const E=w.value;if(b[x]===void 0){if(typeof E=="number")b[x]=E;else{const L=Array.isArray(E)?E:[E],I=[];for(let y=0;y<L.length;y++)I.push(L[y].clone());b[x]=I}return!0}else if(typeof E=="number"){if(b[x]!==E)return b[x]=E,!0}else{const L=Array.isArray(b[x])?b[x]:[b[x]],I=Array.isArray(E)?E:[E];for(let y=0;y<L.length;y++){const A=L[y];if(A.equals(I[y])===!1)return A.copy(I[y]),!0}}return!1}function _(w){const x=w.uniforms;let b=0;const E=16;let L=0;for(let I=0,y=x.length;I<y;I++){const A=x[I],P={boundary:0,storage:0},$=Array.isArray(A.value)?A.value:[A.value];for(let X=0,O=$.length;X<O;X++){const R=$[X],G=p(R);P.boundary+=G.boundary,P.storage+=G.storage}if(A.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,I>0){L=b%E;const X=E-L;L!==0&&X-P.boundary<0&&(b+=E-L,A.__offset=b)}b+=P.storage}return L=b%E,L>0&&(b+=E-L),w.__size=b,w.__cache={},this}function p(w){const x={boundary:0,storage:0};return typeof w=="number"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function f(w){const x=w.target;x.removeEventListener("dispose",f);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function g(){for(const w in i)r.deleteBuffer(i[w]);o=[],i={},s={}}return{bind:c,update:l,dispose:g}}function af(){const r=ci("canvas");return r.style.display="block",r}function Bs(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:af(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let d=null,u=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gn,this.useLegacyLights=!0,this.toneMapping=$t,this.toneMappingExposure=1;const p=this;let f=!1,g=0,w=0,x=null,b=-1,E=null;const L=new ke,I=new ke;let y=null,A=e.width,P=e.height,$=1,X=null,O=null;const R=new ke(0,0,A,P),G=new ke(0,0,A,P);let Y=!1;const J=new zs;let q=!1,Q=!1,j=null;const _e=new Ve,B=new D,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return x===null?$:1}let z=t;function le(M,U){for(let k=0;k<M.length;k++){const N=M[k],W=e.getContext(N,U);if(W!==null)return W}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Os}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",pe,!1),z===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),z=le(U,M),z===null)throw le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ce,ue,he,ve,Me,we,Pe,Ye,st,je,Ze,Be,Oe,mt,rt,S,v,V,ee,te,re,ge,T,F;function ae(){ce=new gu(z),ue=new hu(z,ce,r),ce.init(ue),ge=new Jd(z,ce,ue),he=new Zd(z,ce,ue),ve=new vu,Me=new Od,we=new Kd(z,ce,he,Me,ue,ge,ve),Pe=new du(p),Ye=new mu(p),st=new Cl(z,ue),T=new lu(z,ce,st,ue),je=new _u(z,st,ve,T),Ze=new Su(z,je,st,ve),ee=new bu(z,ue,we),S=new uu(Me),Be=new Nd(p,Pe,Ye,ce,ue,T,S),Oe=new sf(p,Me),mt=new Ud,rt=new Wd(ce,ue),V=new ou(p,Pe,Ye,he,Ze,h,o),v=new jd(p,Ze,ue),F=new rf(z,ve,ue,he),te=new cu(z,ce,ve,ue),re=new xu(z,ce,ve,ue),ve.programs=Be.programs,p.capabilities=ue,p.extensions=ce,p.properties=Me,p.renderLists=mt,p.shadowMap=v,p.state=he,p.info=ve}ae();const se=new nf(p,z);this.xr=se,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const M=ce.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ce.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(A,P,!1))},this.getSize=function(M){return M.set(A,P)},this.setSize=function(M,U,k=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=M,P=U,e.width=Math.floor(M*$),e.height=Math.floor(U*$),k===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(A*$,P*$).floor()},this.setDrawingBufferSize=function(M,U,k){A=M,P=U,$=k,e.width=Math.floor(M*k),e.height=Math.floor(U*k),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(R)},this.setViewport=function(M,U,k,N){M.isVector4?R.set(M.x,M.y,M.z,M.w):R.set(M,U,k,N),he.viewport(L.copy(R).multiplyScalar($).floor())},this.getScissor=function(M){return M.copy(G)},this.setScissor=function(M,U,k,N){M.isVector4?G.set(M.x,M.y,M.z,M.w):G.set(M,U,k,N),he.scissor(I.copy(G).multiplyScalar($).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(M){he.setScissorTest(Y=M)},this.setOpaqueSort=function(M){X=M},this.setTransparentSort=function(M){O=M},this.getClearColor=function(M){return M.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(M=!0,U=!0,k=!0){let N=0;M&&(N|=16384),U&&(N|=256),k&&(N|=1024),z.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),mt.dispose(),rt.dispose(),Me.dispose(),Pe.dispose(),Ye.dispose(),Ze.dispose(),T.dispose(),F.dispose(),Be.dispose(),se.dispose(),se.removeEventListener("sessionstart",K),se.removeEventListener("sessionend",oe),j&&(j.dispose(),j=null),de.stop()};function fe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const M=ve.autoReset,U=v.enabled,k=v.autoUpdate,N=v.needsUpdate,W=v.type;ae(),ve.autoReset=M,v.enabled=U,v.autoUpdate=k,v.needsUpdate=N,v.type=W}function pe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Te(M){const U=M.target;U.removeEventListener("dispose",Te),Re(U)}function Re(M){Ne(M),Me.remove(M)}function Ne(M){const U=Me.get(M).programs;U!==void 0&&(U.forEach(function(k){Be.releaseProgram(k)}),M.isShaderMaterial&&Be.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,k,N,W,xe){U===null&&(U=Z);const ye=W.isMesh&&W.matrixWorld.determinant()<0,Ee=Qa(M,U,k,N,W);he.setMaterial(N,ye);let Ae=k.index,Fe=1;N.wireframe===!0&&(Ae=je.getWireframeAttribute(k),Fe=2);const Ce=k.drawRange,Le=k.attributes.position;let He=Ce.start*Fe,gt=(Ce.start+Ce.count)*Fe;xe!==null&&(He=Math.max(He,xe.start*Fe),gt=Math.min(gt,(xe.start+xe.count)*Fe)),Ae!==null?(He=Math.max(He,0),gt=Math.min(gt,Ae.count)):Le!=null&&(He=Math.max(He,0),gt=Math.min(gt,Le.count));const kt=gt-He;if(kt<0||kt===1/0)return;T.setup(W,N,Ee,k,Ae);let nn,We=te;if(Ae!==null&&(nn=st.get(Ae),We=re,We.setIndex(nn)),W.isMesh)N.wireframe===!0?(he.setLineWidth(N.wireframeLinewidth*ie()),We.setMode(1)):We.setMode(4);else if(W.isLine){let De=N.linewidth;De===void 0&&(De=1),he.setLineWidth(De*ie()),W.isLineSegments?We.setMode(1):W.isLineLoop?We.setMode(2):We.setMode(3)}else W.isPoints?We.setMode(0):W.isSprite&&We.setMode(4);if(W.isInstancedMesh)We.renderInstances(He,kt,W.count);else if(k.isInstancedBufferGeometry){const De=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ki=Math.min(k.instanceCount,De);We.renderInstances(He,kt,ki)}else We.render(He,kt)},this.compile=function(M,U){function k(N,W,xe){N.transparent===!0&&N.side===Jt&&N.forceSinglePass===!1?(N.side=St,N.needsUpdate=!0,wt(N,W,xe),N.side=tn,N.needsUpdate=!0,wt(N,W,xe),N.side=Jt):wt(N,W,xe)}u=rt.get(M),u.init(),_.push(u),M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights(p.useLegacyLights),M.traverse(function(N){const W=N.material;if(W)if(Array.isArray(W))for(let xe=0;xe<W.length;xe++){const ye=W[xe];k(ye,M,N)}else k(W,M,N)}),_.pop(),u=null};let C=null;function H(M){C&&C(M)}function K(){de.stop()}function oe(){de.start()}const de=new Wa;de.setAnimationLoop(H),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(M){C=M,se.setAnimationLoop(M),M===null?de.stop():de.start()},se.addEventListener("sessionstart",K),se.addEventListener("sessionend",oe),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(U),U=se.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,U,x),u=rt.get(M,_.length),u.init(),_.push(u),_e.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),J.setFromProjectionMatrix(_e),Q=this.localClippingEnabled,q=S.init(this.clippingPlanes,Q),d=mt.get(M,m.length),d.init(),m.push(d),ze(M,U,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(X,O),q===!0&&S.beginShadows();const k=u.state.shadowsArray;if(v.render(k,M,U),q===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(d,M),u.setupLights(p.useLegacyLights),U.isArrayCamera){const N=U.cameras;for(let W=0,xe=N.length;W<xe;W++){const ye=N[W];Ke(d,M,ye,ye.viewport)}}else Ke(d,M,U);x!==null&&(we.updateMultisampleRenderTarget(x),we.updateRenderTargetMipmap(x)),M.isScene===!0&&M.onAfterRender(p,M,U),T.resetDefaultState(),b=-1,E=null,_.pop(),_.length>0?u=_[_.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function ze(M,U,k,N){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||J.intersectsSprite(M)){N&&B.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_e);const ye=Ze.update(M),Ee=M.material;Ee.visible&&d.push(M,ye,Ee,k,B.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==ve.render.frame&&(M.skeleton.update(),M.skeleton.frame=ve.render.frame),!M.frustumCulled||J.intersectsObject(M))){N&&B.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_e);const ye=Ze.update(M),Ee=M.material;if(Array.isArray(Ee)){const Ae=ye.groups;for(let Fe=0,Ce=Ae.length;Fe<Ce;Fe++){const Le=Ae[Fe],He=Ee[Le.materialIndex];He&&He.visible&&d.push(M,ye,He,k,B.z,Le)}}else Ee.visible&&d.push(M,ye,Ee,k,B.z,null)}}const xe=M.children;for(let ye=0,Ee=xe.length;ye<Ee;ye++)ze(xe[ye],U,k,N)}function Ke(M,U,k,N){const W=M.opaque,xe=M.transmissive,ye=M.transparent;u.setupLightsView(k),q===!0&&S.setGlobalState(p.clippingPlanes,k),xe.length>0&&at(W,U,k),N&&he.viewport(L.copy(N)),W.length>0&&It(W,U,k),xe.length>0&&It(xe,U,k),ye.length>0&&It(ye,U,k),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function at(M,U,k){const N=ue.isWebGL2;j===null&&(j=new xn(1024,1024,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?oi:mn,minFilter:ai,samples:N&&s===!0?4:0}));const W=p.getRenderTarget();p.setRenderTarget(j),p.clear();const xe=p.toneMapping;p.toneMapping=$t,It(M,U,k),p.toneMapping=xe,we.updateMultisampleRenderTarget(j),we.updateRenderTargetMipmap(j),p.setRenderTarget(W)}function It(M,U,k){const N=U.isScene===!0?U.overrideMaterial:null;for(let W=0,xe=M.length;W<xe;W++){const ye=M[W],Ee=ye.object,Ae=ye.geometry,Fe=N===null?ye.material:N,Ce=ye.group;Ee.layers.test(k.layers)&&Ge(Ee,U,k,Ae,Fe,Ce)}}function Ge(M,U,k,N,W,xe){M.onBeforeRender(p,U,k,N,W,xe),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(p,U,k,N,M,xe),W.transparent===!0&&W.side===Jt&&W.forceSinglePass===!1?(W.side=St,W.needsUpdate=!0,p.renderBufferDirect(k,U,N,W,M,xe),W.side=tn,W.needsUpdate=!0,p.renderBufferDirect(k,U,N,W,M,xe),W.side=Jt):p.renderBufferDirect(k,U,N,W,M,xe),M.onAfterRender(p,U,k,N,W,xe)}function wt(M,U,k){U.isScene!==!0&&(U=Z);const N=Me.get(M),W=u.state.lights,xe=u.state.shadowsArray,ye=W.state.version,Ee=Be.getParameters(M,W.state,xe,U,k),Ae=Be.getProgramCacheKey(Ee);let Fe=N.programs;N.environment=M.isMeshStandardMaterial?U.environment:null,N.fog=U.fog,N.envMap=(M.isMeshStandardMaterial?Ye:Pe).get(M.envMap||N.environment),Fe===void 0&&(M.addEventListener("dispose",Te),Fe=new Map,N.programs=Fe);let Ce=Fe.get(Ae);if(Ce!==void 0){if(N.currentProgram===Ce&&N.lightsStateVersion===ye)return Ft(M,Ee),Ce}else Ee.uniforms=Be.getUniforms(M),M.onBuild(k,Ee,p),M.onBeforeCompile(Ee,p),Ce=Be.acquireProgram(Ee,Ae),Fe.set(Ae,Ce),N.uniforms=Ee.uniforms;const Le=N.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=S.uniform),Ft(M,Ee),N.needsLights=to(M),N.lightsStateVersion=ye,N.needsLights&&(Le.ambientLightColor.value=W.state.ambient,Le.lightProbe.value=W.state.probe,Le.directionalLights.value=W.state.directional,Le.directionalLightShadows.value=W.state.directionalShadow,Le.spotLights.value=W.state.spot,Le.spotLightShadows.value=W.state.spotShadow,Le.rectAreaLights.value=W.state.rectArea,Le.ltc_1.value=W.state.rectAreaLTC1,Le.ltc_2.value=W.state.rectAreaLTC2,Le.pointLights.value=W.state.point,Le.pointLightShadows.value=W.state.pointShadow,Le.hemisphereLights.value=W.state.hemi,Le.directionalShadowMap.value=W.state.directionalShadowMap,Le.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Le.spotShadowMap.value=W.state.spotShadowMap,Le.spotLightMatrix.value=W.state.spotLightMatrix,Le.spotLightMap.value=W.state.spotLightMap,Le.pointShadowMap.value=W.state.pointShadowMap,Le.pointShadowMatrix.value=W.state.pointShadowMatrix);const He=Ce.getUniforms(),gt=Ni.seqWithValue(He.seq,Le);return N.currentProgram=Ce,N.uniformsList=gt,Ce}function Ft(M,U){const k=Me.get(M);k.outputEncoding=U.outputEncoding,k.instancing=U.instancing,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Qa(M,U,k,N,W){U.isScene!==!0&&(U=Z),we.resetTextureUnits();const xe=U.fog,ye=N.isMeshStandardMaterial?U.environment:null,Ee=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:gn,Ae=(N.isMeshStandardMaterial?Ye:Pe).get(N.envMap||ye),Fe=N.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ce=!!N.normalMap&&!!k.attributes.tangent,Le=!!k.morphAttributes.position,He=!!k.morphAttributes.normal,gt=!!k.morphAttributes.color,kt=N.toneMapped?p.toneMapping:$t,nn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,We=nn!==void 0?nn.length:0,De=Me.get(N),ki=u.state.lights;if(q===!0&&(Q===!0||M!==E)){const _t=M===E&&N.id===b;S.setState(N,M,_t)}let Je=!1;N.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ki.state.version||De.outputEncoding!==Ee||W.isInstancedMesh&&De.instancing===!1||!W.isInstancedMesh&&De.instancing===!0||W.isSkinnedMesh&&De.skinning===!1||!W.isSkinnedMesh&&De.skinning===!0||De.envMap!==Ae||N.fog===!0&&De.fog!==xe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==S.numPlanes||De.numIntersection!==S.numIntersection)||De.vertexAlphas!==Fe||De.vertexTangents!==Ce||De.morphTargets!==Le||De.morphNormals!==He||De.morphColors!==gt||De.toneMapping!==kt||ue.isWebGL2===!0&&De.morphTargetsCount!==We)&&(Je=!0):(Je=!0,De.__version=N.version);let sn=De.currentProgram;Je===!0&&(sn=wt(N,U,W));let qs=!1,Yn=!1,Gi=!1;const ot=sn.getUniforms(),rn=De.uniforms;if(he.useProgram(sn.program)&&(qs=!0,Yn=!0,Gi=!0),N.id!==b&&(b=N.id,Yn=!0),qs||E!==M){if(ot.setValue(z,"projectionMatrix",M.projectionMatrix),ue.logarithmicDepthBuffer&&ot.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),E!==M&&(E=M,Yn=!0,Gi=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const _t=ot.map.cameraPosition;_t!==void 0&&_t.setValue(z,B.setFromMatrixPosition(M.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ot.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||W.isSkinnedMesh)&&ot.setValue(z,"viewMatrix",M.matrixWorldInverse)}if(W.isSkinnedMesh){ot.setOptional(z,W,"bindMatrix"),ot.setOptional(z,W,"bindMatrixInverse");const _t=W.skeleton;_t&&(ue.floatVertexTextures?(_t.boneTexture===null&&_t.computeBoneTexture(),ot.setValue(z,"boneTexture",_t.boneTexture,we),ot.setValue(z,"boneTextureSize",_t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Vi=k.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0&&ue.isWebGL2===!0)&&ee.update(W,k,sn),(Yn||De.receiveShadow!==W.receiveShadow)&&(De.receiveShadow=W.receiveShadow,ot.setValue(z,"receiveShadow",W.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(rn.envMap.value=Ae,rn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Yn&&(ot.setValue(z,"toneMappingExposure",p.toneMappingExposure),De.needsLights&&eo(rn,Gi),xe&&N.fog===!0&&Oe.refreshFogUniforms(rn,xe),Oe.refreshMaterialUniforms(rn,N,$,P,j),Ni.upload(z,De.uniformsList,rn,we)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ni.upload(z,De.uniformsList,rn,we),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ot.setValue(z,"center",W.center),ot.setValue(z,"modelViewMatrix",W.modelViewMatrix),ot.setValue(z,"normalMatrix",W.normalMatrix),ot.setValue(z,"modelMatrix",W.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const _t=N.uniformsGroups;for(let Hi=0,no=_t.length;Hi<no;Hi++)if(ue.isWebGL2){const $s=_t[Hi];F.update($s,sn),F.bind($s,sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sn}function eo(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function to(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(M,U,k){Me.get(M.texture).__webglTexture=U,Me.get(M.depthTexture).__webglTexture=k;const N=Me.get(M);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=k===void 0,N.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,U){const k=Me.get(M);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,k=0){x=M,g=U,w=k;let N=!0,W=null,xe=!1,ye=!1;if(M){const Ae=Me.get(M);Ae.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),N=!1):Ae.__webglFramebuffer===void 0?we.setupRenderTarget(M):Ae.__hasExternalTextures&&we.rebindTextures(M,Me.get(M.texture).__webglTexture,Me.get(M.depthTexture).__webglTexture);const Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);const Ce=Me.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(W=Ce[U],xe=!0):ue.isWebGL2&&M.samples>0&&we.useMultisampledRTT(M)===!1?W=Me.get(M).__webglMultisampledFramebuffer:W=Ce,L.copy(M.viewport),I.copy(M.scissor),y=M.scissorTest}else L.copy(R).multiplyScalar($).floor(),I.copy(G).multiplyScalar($).floor(),y=Y;if(he.bindFramebuffer(36160,W)&&ue.drawBuffers&&N&&he.drawBuffers(M,W),he.viewport(L),he.scissor(I),he.setScissorTest(y),xe){const Ae=Me.get(M.texture);z.framebufferTexture2D(36160,36064,34069+U,Ae.__webglTexture,k)}else if(ye){const Ae=Me.get(M.texture),Fe=U||0;z.framebufferTextureLayer(36160,36064,Ae.__webglTexture,k||0,Fe)}b=-1},this.readRenderTargetPixels=function(M,U,k,N,W,xe,ye){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){he.bindFramebuffer(36160,Ee);try{const Ae=M.texture,Fe=Ae.format,Ce=Ae.type;if(Fe!==Pt&&ge.convert(Fe)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Ce===oi&&(ce.has("EXT_color_buffer_half_float")||ue.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Ce!==mn&&ge.convert(Ce)!==z.getParameter(35738)&&!(Ce===fn&&(ue.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-N&&k>=0&&k<=M.height-W&&z.readPixels(U,k,N,W,ge.convert(Fe),ge.convert(Ce),xe)}finally{const Ae=x!==null?Me.get(x).__webglFramebuffer:null;he.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(M,U,k=0){const N=Math.pow(2,-k),W=Math.floor(U.image.width*N),xe=Math.floor(U.image.height*N);we.setTexture2D(U,0),z.copyTexSubImage2D(3553,k,0,0,M.x,M.y,W,xe),he.unbindTexture()},this.copyTextureToTexture=function(M,U,k,N=0){const W=U.image.width,xe=U.image.height,ye=ge.convert(k.format),Ee=ge.convert(k.type);we.setTexture2D(k,0),z.pixelStorei(37440,k.flipY),z.pixelStorei(37441,k.premultiplyAlpha),z.pixelStorei(3317,k.unpackAlignment),U.isDataTexture?z.texSubImage2D(3553,N,M.x,M.y,W,xe,ye,Ee,U.image.data):U.isCompressedTexture?z.compressedTexSubImage2D(3553,N,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,ye,U.mipmaps[0].data):z.texSubImage2D(3553,N,M.x,M.y,ye,Ee,U.image),N===0&&k.generateMipmaps&&z.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(M,U,k,N,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=M.max.x-M.min.x+1,ye=M.max.y-M.min.y+1,Ee=M.max.z-M.min.z+1,Ae=ge.convert(N.format),Fe=ge.convert(N.type);let Ce;if(N.isData3DTexture)we.setTexture3D(N,0),Ce=32879;else if(N.isDataArrayTexture)we.setTexture2DArray(N,0),Ce=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,N.flipY),z.pixelStorei(37441,N.premultiplyAlpha),z.pixelStorei(3317,N.unpackAlignment);const Le=z.getParameter(3314),He=z.getParameter(32878),gt=z.getParameter(3316),kt=z.getParameter(3315),nn=z.getParameter(32877),We=k.isCompressedTexture?k.mipmaps[0]:k.image;z.pixelStorei(3314,We.width),z.pixelStorei(32878,We.height),z.pixelStorei(3316,M.min.x),z.pixelStorei(3315,M.min.y),z.pixelStorei(32877,M.min.z),k.isDataTexture||k.isData3DTexture?z.texSubImage3D(Ce,W,U.x,U.y,U.z,xe,ye,Ee,Ae,Fe,We.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ce,W,U.x,U.y,U.z,xe,ye,Ee,Ae,We.data)):z.texSubImage3D(Ce,W,U.x,U.y,U.z,xe,ye,Ee,Ae,Fe,We),z.pixelStorei(3314,Le),z.pixelStorei(32878,He),z.pixelStorei(3316,gt),z.pixelStorei(3315,kt),z.pixelStorei(32877,nn),W===0&&N.generateMipmaps&&z.generateMipmap(Ce),he.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?we.setTextureCube(M,0):M.isData3DTexture?we.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?we.setTexture2DArray(M,0):we.setTexture2D(M,0),he.unbindTexture()},this.resetState=function(){g=0,w=0,x=null,he.reset(),T.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Bs.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class of extends Bs{}of.prototype.isWebGL1Renderer=!0;class ks{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new ks(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}let lf=class extends et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};class Gs extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oa=new D,la=new D,ca=new Ve,bs=new Na,Fi=new zi;class cf extends et{constructor(e=new Rt,t=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)oa.fromBufferAttribute(t,i-1),la.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=oa.distanceTo(la);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fi.copy(n.boundingSphere),Fi.applyMatrix4(i),Fi.radius+=s,e.ray.intersectsSphere(Fi)===!1)return;ca.copy(i).invert(),bs.copy(e.ray).applyMatrix4(ca);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new D,h=new D,d=new D,u=new D,m=this.isLineSegments?2:1,_=n.index,f=n.attributes.position;if(_!==null){const g=Math.max(0,o.start),w=Math.min(_.count,o.start+o.count);for(let x=g,b=w-1;x<b;x+=m){const E=_.getX(x),L=_.getX(x+1);if(l.fromBufferAttribute(f,E),h.fromBufferAttribute(f,L),bs.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(u);y<e.near||y>e.far||t.push({distance:y,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),w=Math.min(f.count,o.start+o.count);for(let x=g,b=w-1;x<b;x+=m){if(l.fromBufferAttribute(f,x),h.fromBufferAttribute(f,x+1),bs.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(u);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ha=new D,ua=new D;class Za extends cf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ha.fromBufferAttribute(t,i),ua.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ha.distanceTo(ua);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vs extends Rt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],m=[];let _=0;const p=[],f=n/2;let g=0;w(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(m,2));function w(){const b=new D,E=new D;let L=0;const I=(t-e)/n;for(let y=0;y<=s;y++){const A=[],P=y/s,$=P*(t-e)+e;for(let X=0;X<=i;X++){const O=X/i,R=O*c+a,G=Math.sin(R),Y=Math.cos(R);E.x=$*G,E.y=-P*n+f,E.z=$*Y,d.push(E.x,E.y,E.z),b.set(G,I,Y).normalize(),u.push(b.x,b.y,b.z),m.push(O,1-P),A.push(_++)}p.push(A)}for(let y=0;y<i;y++)for(let A=0;A<s;A++){const P=p[A][y],$=p[A+1][y],X=p[A+1][y+1],O=p[A][y+1];h.push(P,$,O),h.push($,X,O),L+=6}l.addGroup(g,L,0),g+=L}function x(b){const E=_,L=new be,I=new D;let y=0;const A=b===!0?e:t,P=b===!0?1:-1;for(let X=1;X<=i;X++)d.push(0,f*P,0),u.push(0,P,0),m.push(.5,.5),_++;const $=_;for(let X=0;X<=i;X++){const R=X/i*c+a,G=Math.cos(R),Y=Math.sin(R);I.x=A*Y,I.y=f*P,I.z=A*G,d.push(I.x,I.y,I.z),u.push(0,P,0),L.x=G*.5+.5,L.y=Y*.5*P+.5,m.push(L.x,L.y),_++}for(let X=0;X<i;X++){const O=E+X,R=$+X;b===!0?h.push(R,R+1,O):h.push(R+1,R,O),y+=3}l.addGroup(g,y,b===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hs extends Vs{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Hs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pi extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=La,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const da={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class hf{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const m=l[d],_=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const uf=new hf;class Ka{constructor(e){this.manager=e!==void 0?e:uf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class df extends Ka{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=da.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ci("img");function c(){h(),da.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ff extends Ka{constructor(e){super(e)}load(e,t,n,i){const s=new pt,o=new df(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ws extends et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ss=new Ve,fa=new D,pa=new D;class Ja{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fa.setFromMatrixPosition(e.matrixWorld),t.position.copy(fa),pa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pa),t.updateMatrixWorld(),Ss.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ss),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ss)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ma=new Ve,ni=new D,ws=new D;class pf extends Ja{constructor(){super(new Mt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ni.setFromMatrixPosition(e.matrixWorld),n.position.copy(ni),ws.copy(n.position),ws.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ws),n.updateMatrixWorld(),i.makeTranslation(-ni.x,-ni.y,-ni.z),ma.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma)}}class mf extends Ws{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gf extends Ja{constructor(){super(new Xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _f extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.target=new et,this.shadow=new gf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}let xf=class extends Ws{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};class vf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ga(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ga();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ga(){return(typeof performance>"u"?Date:performance).now()}class _a{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yf extends Za{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ie(n),i=new Ie(i);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let u=0,m=0,_=-a;u<=t;u++,_+=o){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);const p=u===s?n:i;p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3}const h=new Rt;h.setAttribute("position",new it(c,3)),h.setAttribute("color",new it(l,3));const d=new Gs({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Mf extends Za{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Rt;i.setAttribute("position",new it(t,3)),i.setAttribute("color",new it(n,3));const s=new Gs({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Ie,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Os}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Os);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */class Bt{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Bt.nextNameID=Bt.nextNameID||0,this.$name.id=`lil-gui-name-${++Bt.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class bf extends Bt{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Fs(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Sf={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Fs,toHexString:Fs},hi={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},wf={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const n=hi.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return hi.toHexString(i)}},Ef={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=hi.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return hi.toHexString(i)}},Af=[Sf,hi,wf,Ef];function Tf(r){return Af.find(e=>e.match(r))}class Cf extends Bt{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Tf(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Fs(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Es extends Bt{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Lf extends Bt{constructor(e,t,n,i,s,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))},t=g=>{const w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+g),this.$input.value=this.getValue())},n=g=>{g.code==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),t(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),t(this._step*this._arrowKeyMultiplier(g)*-1))},i=g=>{this._inputFocused&&(g.preventDefault(),t(this._step*this._normalizeMouseWheel(g)))};let s=!1,o,a,c,l,h;const d=5,u=g=>{o=g.clientX,a=c=g.clientY,s=!0,l=this.getValue(),h=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",_)},m=g=>{if(s){const w=g.clientX-o,x=g.clientY-a;Math.abs(x)>d?(g.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>d&&_()}if(!s){const w=g.clientY-c;h-=w*this._step*this._arrowKeyMultiplier(g),l+h>this._max?h=this._max-l:l+h<this._min&&(h=this._min-l),this._snapClampSetValue(l+h)}c=g.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",_)},p=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",u),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(g,w,x,b,E)=>(g-w)/(x-w)*(E-b)+b,t=g=>{const w=this.$slider.getBoundingClientRect();let x=e(g,w.left,w.right,this._min,this._max);this._snapClampSetValue(x)},n=g=>{this._setDraggingStyle(!0),t(g.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=g=>{t(g.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,c;const l=g=>{g.preventDefault(),this._setDraggingStyle(!0),t(g.touches[0].clientX),o=!1},h=g=>{g.touches.length>1||(this._hasScrollBar?(a=g.touches[0].clientX,c=g.touches[0].clientY,o=!0):l(g),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=g=>{if(o){const w=g.touches[0].clientX-a,x=g.touches[0].clientY-c;Math.abs(w)>Math.abs(x)?l(g):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else g.preventDefault(),t(g.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},m=this._callOnFinishChange.bind(this),_=400;let p;const f=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const x=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(m,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Df extends Bt{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Pf extends Bt{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Rf=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function If(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let xa=!1;class Xs{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),c&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!xa&&a&&(If(Rf),xa=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o,this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,s){if(Object(n)===n)return new Df(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new Lf(this,e,t,n,i,s);case"boolean":return new bf(this,e,t);case"string":return new Pf(this,e,t);case"function":return new Es(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new Cf(this,e,t,n)}addFolder(e){const t=new Xs({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Es||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Es)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Ff=Xs;class Nf{constructor(){dt(this,"current");this.update()}get delta(){return Date.now()-this.current}update(){this.current=Date.now()}}var Of=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ns={},zf={get exports(){return Ns},set exports(r){Ns=r}};(function(r,e){(function(t,n){r.exports=n()})(Of,function(){var t=function(){function n(m){return o.appendChild(m.dom),m}function i(m){for(var _=0;_<o.children.length;_++)o.children[_].style.display=_===m?"block":"none";s=m}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(m){m.preventDefault(),i(++s%o.children.length)},!1);var a=(performance||Date).now(),c=a,l=0,h=n(new t.Panel("FPS","#0ff","#002")),d=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){l++;var m=(performance||Date).now();if(d.update(m-a,200),m>c+1e3&&(h.update(1e3*l/(m-c),100),c=m,l=0,u)){var _=performance.memory;u.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return m},update:function(){a=this.end()},domElement:o,setMode:i}};return t.Panel=function(n,i,s){var o=1/0,a=0,c=Math.round,l=c(window.devicePixelRatio||1),h=80*l,d=48*l,u=3*l,m=2*l,_=3*l,p=15*l,f=74*l,g=30*l,w=document.createElement("canvas");w.width=h,w.height=d,w.style.cssText="width:80px;height:48px";var x=w.getContext("2d");return x.font="bold "+9*l+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=s,x.fillRect(0,0,h,d),x.fillStyle=i,x.fillText(n,u,m),x.fillRect(_,p,f,g),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(_,p,f,g),{dom:w,update:function(b,E){o=Math.min(o,b),a=Math.max(a,b),x.fillStyle=s,x.globalAlpha=1,x.fillRect(0,0,h,p),x.fillStyle=i,x.fillText(c(b)+" "+n+" ("+c(o)+"-"+c(a)+")",u,m),x.drawImage(w,_+l,p,f-l,g,_,p,f-l,g),x.fillRect(_+f-l,p,l,g),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(_+f-l,p,l,c((1-b/E)*g))}}},t})})(zf);class Uf{constructor(){dt(this,"stats",new Ns)}show(){this.stats.showPanel(0),document.body.appendChild(this.stats.dom)}start(){this.stats.begin()}end(){this.stats.end()}}const va={type:"change"},As={type:"start"},ya={type:"end"};class Bf extends yn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bn.ROTATE,MIDDLE:bn.DOLLY,RIGHT:bn.PAN},this.touches={ONE:Sn.ROTATE,TWO:Sn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",rt),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",rt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(va),n.update(),s=i.NONE},this.update=function(){const T=new D,F=new _n().setFromUnitVectors(e.up,new D(0,1,0)),ae=F.clone().invert(),se=new D,fe=new _n,me=2*Math.PI;return function(){const Te=n.object.position;T.copy(Te).sub(n.target),T.applyQuaternion(F),a.setFromVector3(T),n.autoRotate&&s===i.NONE&&A(I()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Re=n.minAzimuthAngle,Ne=n.maxAzimuthAngle;return isFinite(Re)&&isFinite(Ne)&&(Re<-Math.PI?Re+=me:Re>Math.PI&&(Re-=me),Ne<-Math.PI?Ne+=me:Ne>Math.PI&&(Ne-=me),Re<=Ne?a.theta=Math.max(Re,Math.min(Ne,a.theta)):a.theta=a.theta>(Re+Ne)/2?Math.max(Re,a.theta):Math.min(Ne,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),T.setFromSpherical(a),T.applyQuaternion(ae),Te.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,d||se.distanceToSquared(n.object.position)>o||8*(1-fe.dot(n.object.quaternion))>o?(n.dispatchEvent(va),se.copy(n.object.position),fe.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",Ye),n.domElement.removeEventListener("pointercancel",Ze),n.domElement.removeEventListener("wheel",mt),n.domElement.removeEventListener("pointermove",st),n.domElement.removeEventListener("pointerup",je),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",rt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new _a,c=new _a;let l=1;const h=new D;let d=!1;const u=new be,m=new be,_=new be,p=new be,f=new be,g=new be,w=new be,x=new be,b=new be,E=[],L={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function A(T){c.theta-=T}function P(T){c.phi-=T}const $=function(){const T=new D;return function(ae,se){T.setFromMatrixColumn(se,0),T.multiplyScalar(-ae),h.add(T)}}(),X=function(){const T=new D;return function(ae,se){n.screenSpacePanning===!0?T.setFromMatrixColumn(se,1):(T.setFromMatrixColumn(se,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(ae),h.add(T)}}(),O=function(){const T=new D;return function(ae,se){const fe=n.domElement;if(n.object.isPerspectiveCamera){const me=n.object.position;T.copy(me).sub(n.target);let pe=T.length();pe*=Math.tan(n.object.fov/2*Math.PI/180),$(2*ae*pe/fe.clientHeight,n.object.matrix),X(2*se*pe/fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(ae*(n.object.right-n.object.left)/n.object.zoom/fe.clientWidth,n.object.matrix),X(se*(n.object.top-n.object.bottom)/n.object.zoom/fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(T){n.object.isPerspectiveCamera?l/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(T){n.object.isPerspectiveCamera?l*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(T){u.set(T.clientX,T.clientY)}function J(T){w.set(T.clientX,T.clientY)}function q(T){p.set(T.clientX,T.clientY)}function Q(T){m.set(T.clientX,T.clientY),_.subVectors(m,u).multiplyScalar(n.rotateSpeed);const F=n.domElement;A(2*Math.PI*_.x/F.clientHeight),P(2*Math.PI*_.y/F.clientHeight),u.copy(m),n.update()}function j(T){x.set(T.clientX,T.clientY),b.subVectors(x,w),b.y>0?R(y()):b.y<0&&G(y()),w.copy(x),n.update()}function _e(T){f.set(T.clientX,T.clientY),g.subVectors(f,p).multiplyScalar(n.panSpeed),O(g.x,g.y),p.copy(f),n.update()}function B(T){T.deltaY<0?G(y()):T.deltaY>0&&R(y()),n.update()}function Z(T){let F=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),F=!0;break}F&&(T.preventDefault(),n.update())}function ie(){if(E.length===1)u.set(E[0].pageX,E[0].pageY);else{const T=.5*(E[0].pageX+E[1].pageX),F=.5*(E[0].pageY+E[1].pageY);u.set(T,F)}}function z(){if(E.length===1)p.set(E[0].pageX,E[0].pageY);else{const T=.5*(E[0].pageX+E[1].pageX),F=.5*(E[0].pageY+E[1].pageY);p.set(T,F)}}function le(){const T=E[0].pageX-E[1].pageX,F=E[0].pageY-E[1].pageY,ae=Math.sqrt(T*T+F*F);w.set(0,ae)}function ce(){n.enableZoom&&le(),n.enablePan&&z()}function ue(){n.enableZoom&&le(),n.enableRotate&&ie()}function he(T){if(E.length==1)m.set(T.pageX,T.pageY);else{const ae=ge(T),se=.5*(T.pageX+ae.x),fe=.5*(T.pageY+ae.y);m.set(se,fe)}_.subVectors(m,u).multiplyScalar(n.rotateSpeed);const F=n.domElement;A(2*Math.PI*_.x/F.clientHeight),P(2*Math.PI*_.y/F.clientHeight),u.copy(m)}function ve(T){if(E.length===1)f.set(T.pageX,T.pageY);else{const F=ge(T),ae=.5*(T.pageX+F.x),se=.5*(T.pageY+F.y);f.set(ae,se)}g.subVectors(f,p).multiplyScalar(n.panSpeed),O(g.x,g.y),p.copy(f)}function Me(T){const F=ge(T),ae=T.pageX-F.x,se=T.pageY-F.y,fe=Math.sqrt(ae*ae+se*se);x.set(0,fe),b.set(0,Math.pow(x.y/w.y,n.zoomSpeed)),R(b.y),w.copy(x)}function we(T){n.enableZoom&&Me(T),n.enablePan&&ve(T)}function Pe(T){n.enableZoom&&Me(T),n.enableRotate&&he(T)}function Ye(T){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",st),n.domElement.addEventListener("pointerup",je)),ee(T),T.pointerType==="touch"?S(T):Be(T))}function st(T){n.enabled!==!1&&(T.pointerType==="touch"?v(T):Oe(T))}function je(T){te(T),E.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",st),n.domElement.removeEventListener("pointerup",je)),n.dispatchEvent(ya),s=i.NONE}function Ze(T){te(T)}function Be(T){let F;switch(T.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case bn.DOLLY:if(n.enableZoom===!1)return;J(T),s=i.DOLLY;break;case bn.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;q(T),s=i.PAN}else{if(n.enableRotate===!1)return;Y(T),s=i.ROTATE}break;case bn.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;Y(T),s=i.ROTATE}else{if(n.enablePan===!1)return;q(T),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(As)}function Oe(T){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Q(T);break;case i.DOLLY:if(n.enableZoom===!1)return;j(T);break;case i.PAN:if(n.enablePan===!1)return;_e(T);break}}function mt(T){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(T.preventDefault(),n.dispatchEvent(As),B(T),n.dispatchEvent(ya))}function rt(T){n.enabled===!1||n.enablePan===!1||Z(T)}function S(T){switch(re(T),E.length){case 1:switch(n.touches.ONE){case Sn.ROTATE:if(n.enableRotate===!1)return;ie(),s=i.TOUCH_ROTATE;break;case Sn.PAN:if(n.enablePan===!1)return;z(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Sn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ce(),s=i.TOUCH_DOLLY_PAN;break;case Sn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ue(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(As)}function v(T){switch(re(T),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;he(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ve(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pe(T),n.update();break;default:s=i.NONE}}function V(T){n.enabled!==!1&&T.preventDefault()}function ee(T){E.push(T)}function te(T){delete L[T.pointerId];for(let F=0;F<E.length;F++)if(E[F].pointerId==T.pointerId){E.splice(F,1);return}}function re(T){let F=L[T.pointerId];F===void 0&&(F=new be,L[T.pointerId]=F),F.set(T.pageX,T.pageY)}function ge(T){const F=T.pointerId===E[0].pointerId?E[1]:E[0];return L[F.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",Ye),n.domElement.addEventListener("pointercancel",Ze),n.domElement.addEventListener("wheel",mt,{passive:!1}),this.update()}}class kf{constructor(e,t){dt(this,"orbitControls");this.renderer=e,this.camera=t,this.resize=this.resize.bind(this)}resize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}setupOrbitControls(){this.orbitControls=new Bf(this.camera,this.renderer.domElement),this.orbitControls.target.set(0,0,0),this.orbitControls.enableDamping=!0}controlDumpingUpdate(){this.orbitControls.update()}subscribe(){this.resize(),this.setupOrbitControls(),window.addEventListener("resize",this.resize)}unsubscribe(){window.removeEventListener("resize",this.resize)}}class Gf extends Mt{constructor(){super(75,2,.1,300),this.position.set(0,5,10)}}class Vf extends lf{constructor(e){super(),this.background=new Ie("#262837"),this.fog=new ks("#262837",1,15),this.add(new Mf(20)),this.add(new yf(60,60,8947848,4473924)),e.addFolder("Fog").addColor(this.fog,"color")}}class Hf extends Bs{constructor(){super({canvas:document.querySelector("#canvas")}),this.shadowMap.enabled=!0,this.setSize(window.innerWidth,window.innerHeight),this.shadowMap.type=Sa,this.setPixelRatio(Math.min(window.devicePixelRatio,2))}}class Wf extends xf{constructor(e){super("#B9D5FF",.12),e.add(this,"intensity").min(0).max(1).step(.001)}}class Xf extends _f{constructor(e){super("#B9D5FF",.12),this.position.set(4,5,-2),e.add(this,"intensity").min(0).max(1).step(.001),e.add(this.position,"x").min(-5).max(5).step(.001),e.add(this.position,"y").min(-5).max(5).step(.001),e.add(this.position,"z").min(-5).max(5).step(.001)}}function qf(r,e){const t=r.addFolder("Lights"),n={ambient:t.addFolder("Ambient"),moonlight:t.addFolder("Moonlight")},i=new Wf(n.ambient),s=new Xf(n.moonlight);return e.add(i,s),{ambientLight:i,moonLight:s}}class Ma extends bt{constructor(t=.6,n=.8){super();dt(this,"height");this.height=n,this.geometry=new Mn(t,n,.2),this.material=new pi({color:"#B2B6B1"}),this.position.y=this.absZero}get absZero(){return this.height/2}}class $f extends bt{constructor(t){super();dt(this,"_graves",[]);this.geometry=new fi(20,20),this.material=new pi({color:"#a9c388"}),this.rotation.x=-Math.PI*.5,this.position.y=.01,t.addColor(this.material,"color"),this.populateGraves(32),this.graves.push(new Ma)}get graves(){return this._graves}populateGraves(t){for(let n=0;n<t;n++){const i=new Ma,s=Math.random()*Math.PI*2,o=3+Math.random()*6;i.position.setX(Math.sin(s)*o),i.position.setZ(Math.cos(s)*o),i.rotateY((Math.random()-.5)*.4),i.rotateZ((Math.random()-.5)*.3),this._graves.push(i)}}}function Yf(r,e){const t=r.addFolder("Ground"),n=new $f(t);return e.add(n,...n.graves),n}class jf extends bt{constructor(t,n=2.5,i=4){super();dt(this,"height");dt(this,"width");this.height=n,this.width=i,this.geometry=new Mn(i,n,4),this.material=new pi({color:"#AC8E82"}),this.position.y=this.absZero,t.addColor(this.material,"color");const s=t.addFolder("scale");s.add(this.scale,"x").max(3).min(.5).step(.1),s.add(this.scale,"z").max(2).min(.5).step(.1).onChange(()=>{this.dispatchEvent({type:"onZAxisChange",message:{z:this.scale.z*i/2}})}),s.add(this.scale,"y").max(3).min(1).step(.1).onChange(()=>{this.position.y=this.scale.y*this.absZero,this.dispatchEvent({type:"onYAxisChange",message:{height:this.scale.y*n}})})}get absZero(){return this.height/2}}class Zf extends bt{constructor(t,n,i=1){super();dt(this,"height");this.height=i,this.geometry=new Hs(3.5,i,4),this.material=new pi({color:"#B35F45"}),this.rotateY(Math.PI/4),this.position.y=n+this.absZero,t.addColor(this.material,"color");const s=t.addFolder("scale");s.add(this.scale,"x").max(3).min(.5).step(.1),s.add(this.scale,"z").max(3).min(.5).step(.1),s.add(this.scale,"y").max(8).min(.5).step(.1).onChange(()=>{this.position.y=n+this.absZero*this.scale.y})}get absZero(){return this.height/2}}class Kf extends bt{constructor(t,n,i=2,s=2){super();dt(this,"height");this.height=s,this.geometry=new fi(i,s),this.material=new pi({color:"#AA7B7B"}),this.position.y=this.absZero,this.position.z=n+.01,t.addColor(this.material,"color");const o=t.addFolder("scale");o.add(this.scale,"x").max(2).min(.5).step(.05),o.add(this.scale,"y").max(1.2).min(.6).step(.01).onChange(()=>{this.position.y=this.absZero*this.scale.y})}get absZero(){return this.height/2}}class Jf extends mf{constructor(e){super("#FF7D46",2,7),e.addColor(this,"color"),e.add(this,"intensity").max(5).min(.2).step(.01)}}class Qf extends ri{constructor(t){super();dt(this,"walls");dt(this,"roof");dt(this,"door");dt(this,"doorLight");this.walls=new jf(t.addFolder("Walls")),this.roof=new Zf(t.addFolder("Roof"),this.walls.height),this.door=new Kf(t.addFolder("Door"),this.walls.width/2,2,2),this.doorLight=new Jf(t.addFolder("Door")),this.doorLight.position.setZ(this.door.position.z+.2),this.doorLight.position.setY(this.door.position.y+this.door.height-.5),this.walls.addEventListener("onYAxisChange",n=>{this.roof.position.y=this.roof.absZero*this.roof.scale.y+n.message.height}),this.walls.addEventListener("onZAxisChange",({message:{z:n}})=>{this.door.position.z=n+.01,this.doorLight.position.setZ(this.door.position.z+.2)}),this.add(this.walls,this.roof,this.door,this.doorLight)}}function ep(r,e){const t=r.addFolder("House"),n=new Qf(t);return e.add(n),n}(function(){const e=new Ff,t=new Hf,n=new Gf,i=new Vf(e.addFolder("Scene"));qf(e,i),Yf(e,i),ep(e,i),new ff;{const o=16.666666666666668,a=new vf,c=new Uf,l=new Nf,h=new kf(t,n);(function(){c.show(),h.subscribe()})(),function d(){c.start(),a.getElapsedTime(),l.delta>=o&&(t.render(i,n),l.update()),h.controlDumpingUpdate(),requestAnimationFrame(d),c.end()}()}})();
//# sourceMappingURL=index-bec7aa9f.js.map
