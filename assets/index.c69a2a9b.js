(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="144",ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hh=0,Ml=1,Xh=2,uu=1,qh=2,kr=3,Mr=0,tn=1,Pn=2,Jn=0,pr=1,yl=2,bl=3,Sl=4,jh=5,ur=100,Yh=101,Zh=102,wl=103,Tl=104,$h=200,Kh=201,Jh=202,Qh=203,hu=204,fu=205,tf=206,ef=207,nf=208,rf=209,sf=210,af=0,of=1,lf=2,lo=3,cf=4,uf=5,hf=6,ff=7,Wo=0,df=1,pf=2,Nn=0,mf=1,gf=2,_f=3,xf=4,vf=5,du=300,yr=301,br=302,co=303,uo=304,ia=306,ho=1e3,cn=1001,fo=1002,Se=1003,El=1004,Al=1005,Ye=1006,Mf=1007,ra=1008,Pi=1009,yf=1010,bf=1011,pu=1012,Sf=1013,_i=1014,xi=1015,Yr=1016,wf=1017,Tf=1018,mr=1020,Ef=1021,Af=1022,mn=1023,Cf=1024,Lf=1025,wi=1026,Sr=1027,Pf=1028,Df=1029,Rf=1030,If=1031,Of=1033,va=33776,Ma=33777,ya=33778,ba=33779,Cl=35840,Ll=35841,Pl=35842,Dl=35843,Ff=36196,Rl=37492,Il=37496,Ol=37808,Fl=37809,Nl=37810,zl=37811,Ul=37812,Bl=37813,kl=37814,Gl=37815,Vl=37816,Wl=37817,Hl=37818,Xl=37819,ql=37820,jl=37821,Yl=36492,Di=3e3,Yt=3001,Nf=3200,zf=3201,sa=0,Uf=1,En="srgb",vi="srgb-linear",Sa=7680,Bf=519,Zl=35044,$l="300 es",po=1035;class ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wa=Math.PI/180,Kl=180/Math.PI;function ss(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[o&255]+de[o>>8&255]+de[o>>16&255]+de[o>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function we(o,t,e){return Math.max(t,Math.min(e,o))}function kf(o,t){return(o%t+t)%t}function Ta(o,t,e){return(1-e)*o+e*t}function Jl(o){return(o&o-1)===0&&o!==0}function mo(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function fs(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Re(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,s,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=s,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],M=i[1],b=i[4],y=i[7],x=i[2],A=i[5],L=i[8];return r[0]=a*d+s*M+c*x,r[3]=a*p+s*b+c*A,r[6]=a*_+s*y+c*L,r[1]=l*d+u*M+h*x,r[4]=l*p+u*b+h*A,r[7]=l*_+u*y+h*L,r[2]=f*d+m*M+g*x,r[5]=f*p+m*b+g*A,r[8]=f*_+m*y+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*s*l-n*r*u+n*s*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],c=t[6],l=t[7],u=t[8],h=u*a-s*l,f=s*c-u*r,m=l*r-a*c,g=e*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return t[0]=h*d,t[1]=(i*l-u*n)*d,t[2]=(s*n-i*a)*d,t[3]=f*d,t[4]=(u*e-i*c)*d,t[5]=(i*r-s*e)*d,t[6]=m*d,t[7]=(n*c-l*e)*d,t[8]=(a*e-n*r)*d,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,s){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*s)+a+t,-i*l,i*c,-i*(-l*a+c*s)+s+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],a=i[3],s=i[6],c=i[1],l=i[4],u=i[7];return i[0]=e*r+n*c,i[3]=e*a+n*l,i[6]=e*s+n*u,i[1]=-n*r+e*c,i[4]=-n*a+e*l,i[7]=-n*s+e*u,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function mu(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Zr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ti(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Fs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Ea={[En]:{[vi]:Ti},[vi]:{[En]:Fs}},sn={legacyMode:!0,get workingColorSpace(){return vi},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(Ea[t]&&Ea[t][e]!==void 0){const n=Ea[t][e];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ae={r:0,g:0,b:0},an={h:0,s:0,l:0},ds={h:0,s:0,l:0};function Aa(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function ps(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,sn.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=vi){return this.r=t,this.g=e,this.b=n,sn.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=vi){if(t=kf(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Aa(a,r,t+1/3),this.g=Aa(a,r,t),this.b=Aa(a,r,t-1/3)}return sn.toWorkingColorSpace(this,i),this}setStyle(t,e=En){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,sn.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,sn.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,sn.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,sn.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=En){const n=gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return sn.fromWorkingColorSpace(ps(this,ae),t),we(ae.r*255,0,255)<<16^we(ae.g*255,0,255)<<8^we(ae.b*255,0,255)<<0}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=vi){sn.fromWorkingColorSpace(ps(this,ae),e);const n=ae.r,i=ae.g,r=ae.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let c,l;const u=(s+a)/2;if(s===a)c=0,l=0;else{const h=a-s;switch(l=u<=.5?h/(a+s):h/(2-a-s),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=vi){return sn.fromWorkingColorSpace(ps(this,ae),e),t.r=ae.r,t.g=ae.g,t.b=ae.b,t}getStyle(t=En){return sn.fromWorkingColorSpace(ps(this,ae),t),t!==En?`color(${t} ${ae.r} ${ae.g} ${ae.b})`:`rgb(${ae.r*255|0},${ae.g*255|0},${ae.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(an),an.h+=t,an.s+=e,an.l+=n,this.setHSL(an.h,an.s,an.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(an),t.getHSL(ds);const n=Ta(an.h,ds.h,e),i=Ta(an.s,ds.s,e),r=Ta(an.l,ds.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ot.NAMES=gu;let Zi;class _u{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zi===void 0&&(Zi=Zr("canvas")),Zi.width=t.width,Zi.height=t.height;const n=Zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class xu{constructor(t=null){this.isSource=!0,this.uuid=ss(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Ca(i[a].image)):r.push(Ca(i[a]))}else r=Ca(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ca(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_u.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gf=0;class nn extends ki{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=cn,i=cn,r=Ye,a=ra,s=mn,c=Pi,l=1,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=ss(),this.name="",this.source=new xu(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ho:t.x=t.x-Math.floor(t.x);break;case cn:t.x=t.x<0?0:1;break;case fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ho:t.y=t.y-Math.floor(t.y);break;case cn:t.y=t.y<0?0:1;break;case fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=du;class Ht{constructor(t=0,e=0,n=0,i=1){Ht.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],g=c[9],d=c[2],p=c[6],_=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,y=(m+1)/2,x=(_+1)/2,A=(u+f)/4,L=(h+d)/4,v=(g+p)/4;return b>y&&b>x?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=L/n):y>x?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=v/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=L/r,i=v/r),this.set(n,i,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-d)/M,this.z=(f-u)/M,this.w=Math.acos((l+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ri extends ki{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ht(0,0,t,e),this.scissorTest=!1,this.viewport=new Ht(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ye,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vu extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Se,this.minFilter=Se,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vf extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Se,this.minFilter=Se,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,s){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],m=r[a+1],g=r[a+2],d=r[a+3];if(s===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(s===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=d;return}if(h!==d||c!==f||l!==m||u!==g){let p=1-s;const _=c*f+l*m+u*g+h*d,M=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const x=Math.sqrt(b),A=Math.atan2(x,_*M);p=Math.sin(p*A)/x,s=Math.sin(s*A)/x}const y=s*M;if(c=c*p+f*y,l=l*p+m*y,u=u*p+g*y,h=h*p+d*y,p===1-s){const x=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=x,l*=x,u*=x,h*=x}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){const s=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=s*g+u*h+c*m-l*f,t[e+1]=c*g+u*f+l*h-s*m,t[e+2]=l*g+u*m+s*f-c*h,t[e+3]=u*g-s*h-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,a=t._order,s=Math.cos,c=Math.sin,l=s(n/2),u=s(i/2),h=s(r/2),f=c(n/2),m=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"YZX":this._x=f*u*h+l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h-f*m*g;break;case"XZY":this._x=f*u*h-l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],s=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,s=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*s+i*l-r*c,this._y=i*u+a*c+r*s-n*l,this._z=r*u+a*l+n*c-i*s,this._w=a*u-n*s-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*t._w+n*t._x+i*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,s),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,s=t.z,c=t.w,l=c*e+a*i-s*n,u=c*n+s*e-r*i,h=c*i+r*n-a*e,f=-r*e-a*n-s*i;return this.x=l*c+f*-r+u*-s-h*-a,this.y=u*c+f*-a+h*-r-l*-s,this.z=h*c+f*-s+l*-a-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,s=e.y,c=e.z;return this.x=i*c-r*s,this.y=r*a-n*c,this.z=n*s-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return La.copy(this).projectOnVector(t),this.sub(La)}reflect(t){return this.sub(La.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new R,Ql=new Ii;class as{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let c=0,l=t.length;c<l;c+=3){const u=t[c],h=t[c+1],f=t[c+2];u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let c=0,l=t.count;c<l;c++){const u=t.getX(c),h=t.getY(c),f=t.getZ(c);u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)oi.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(oi)}else n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox),Pa.applyMatrix4(t.matrixWorld),this.union(Pa);const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),ms.subVectors(this.max,Fr),$i.subVectors(t.a,Fr),Ki.subVectors(t.b,Fr),Ji.subVectors(t.c,Fr),Vn.subVectors(Ki,$i),Wn.subVectors(Ji,Ki),li.subVectors($i,Ji);let e=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-li.z,li.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,li.z,0,-li.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-li.y,li.x,0];return!Da(e,$i,Ki,Ji,ms)||(e=[1,0,0,0,1,0,0,0,1],!Da(e,$i,Ki,Ji,ms))?!1:(gs.crossVectors(Vn,Wn),e=[gs.x,gs.y,gs.z],Da(e,$i,Ki,Ji,ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return oi.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new R,new R,new R,new R,new R,new R,new R,new R],oi=new R,Pa=new as,$i=new R,Ki=new R,Ji=new R,Vn=new R,Wn=new R,li=new R,Fr=new R,ms=new R,gs=new R,ci=new R;function Da(o,t,e,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){ci.fromArray(o,r);const s=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),c=t.dot(ci),l=e.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}const Wf=new as,tc=new R,_s=new R,Ra=new R;class Ho{constructor(t=new R,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){Ra.subVectors(t,this.center);const e=Ra.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(Ra.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?_s.set(0,0,1).multiplyScalar(t.radius):_s.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(tc.copy(t.center).add(_s)),this.expandByPoint(tc.copy(t.center).sub(_s)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new R,Ia=new R,xs=new R,Hn=new R,Oa=new R,vs=new R,Fa=new R;class Mu{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.direction).multiplyScalar(e).add(this.origin),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ia.copy(t).add(e).multiplyScalar(.5),xs.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Ia);const r=t.distanceTo(e)*.5,a=-this.direction.dot(xs),s=Hn.dot(this.direction),c=-Hn.dot(xs),l=Hn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*c-s,f=a*s-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+a*f+2*s)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+s)),f=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(h=Math.max(0,-(a*r+s)),f=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(xs).multiplyScalar(f).add(Ia),m}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,c=n+a;return s<0&&c<0?null:s<0?this.at(c,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,s,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),h>=0?(s=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(s=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||s>i)||((s>n||n!==n)&&(n=s),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,i,r){Oa.subVectors(e,t),vs.subVectors(n,t),Fa.crossVectors(Oa,vs);let a=this.direction.dot(Fa),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const c=s*this.direction.dot(vs.crossVectors(Hn,vs));if(c<0)return null;const l=s*this.direction.dot(Oa.cross(Hn));if(l<0||c+l>a)return null;const u=-s*Hn.dot(Fa);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,s,c,l,u,h,f,m,g,d,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=s,_[13]=c,_[2]=l,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),a=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),s=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,m=a*h,g=s*u,d=s*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+g*l,e[5]=f-d*l,e[9]=-s*c,e[2]=d-f*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*u,m=c*h,g=l*u,d=l*h;e[0]=f+d*s,e[4]=g*s-m,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-s,e[2]=m*s-g,e[6]=d+f*s,e[10]=a*c}else if(t.order==="ZXY"){const f=c*u,m=c*h,g=l*u,d=l*h;e[0]=f-d*s,e[4]=-a*h,e[8]=g+m*s,e[1]=m+g*s,e[5]=a*u,e[9]=d-f*s,e[2]=-a*l,e[6]=s,e[10]=a*c}else if(t.order==="ZYX"){const f=a*u,m=a*h,g=s*u,d=s*h;e[0]=c*u,e[4]=g*l-m,e[8]=f*l+d,e[1]=c*h,e[5]=d*l+f,e[9]=m*l-g,e[2]=-l,e[6]=s*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,m=a*l,g=s*c,d=s*l;e[0]=c*u,e[4]=d-f*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-s*u,e[2]=-l*u,e[6]=m*h+g,e[10]=f-d*h}else if(t.order==="XZY"){const f=a*c,m=a*l,g=s*c,d=s*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+d,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=s*u,e[10]=d*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hf,t,Xf)}lookAt(t,e,n){const i=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),Xn.crossVectors(n,Ie),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),Xn.crossVectors(n,Ie)),Xn.normalize(),Ms.crossVectors(Ie,Xn),i[0]=Xn.x,i[4]=Ms.x,i[8]=Ie.x,i[1]=Xn.y,i[5]=Ms.y,i[9]=Ie.y,i[2]=Xn.z,i[6]=Ms.z,i[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],M=n[3],b=n[7],y=n[11],x=n[15],A=i[0],L=i[4],v=i[8],w=i[12],D=i[1],H=i[5],J=i[9],N=i[13],I=i[2],B=i[6],q=i[10],j=i[14],k=i[3],F=i[7],U=i[11],Q=i[15];return r[0]=a*A+s*D+c*I+l*k,r[4]=a*L+s*H+c*B+l*F,r[8]=a*v+s*J+c*q+l*U,r[12]=a*w+s*N+c*j+l*Q,r[1]=u*A+h*D+f*I+m*k,r[5]=u*L+h*H+f*B+m*F,r[9]=u*v+h*J+f*q+m*U,r[13]=u*w+h*N+f*j+m*Q,r[2]=g*A+d*D+p*I+_*k,r[6]=g*L+d*H+p*B+_*F,r[10]=g*v+d*J+p*q+_*U,r[14]=g*w+d*N+p*j+_*Q,r[3]=M*A+b*D+y*I+x*k,r[7]=M*L+b*H+y*B+x*F,r[11]=M*v+b*J+y*q+x*U,r[15]=M*w+b*N+y*j+x*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],s=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],d=t[7],p=t[11],_=t[15];return g*(+r*c*h-i*l*h-r*s*f+n*l*f+i*s*m-n*c*m)+d*(+e*c*m-e*l*f+r*a*f-i*a*m+i*l*u-r*c*u)+p*(+e*l*h-e*s*m-r*a*h+n*a*m+r*s*u-n*l*u)+_*(-i*s*u-e*c*h+e*s*f+i*a*h-n*a*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],d=t[13],p=t[14],_=t[15],M=h*p*l-d*f*l+d*c*m-s*p*m-h*c*_+s*f*_,b=g*f*l-u*p*l-g*c*m+a*p*m+u*c*_-a*f*_,y=u*d*l-g*h*l+g*s*m-a*d*m-u*s*_+a*h*_,x=g*h*c-u*d*c-g*s*f+a*d*f+u*s*p-a*h*p,A=e*M+n*b+i*y+r*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return t[0]=M*L,t[1]=(d*f*r-h*p*r-d*i*m+n*p*m+h*i*_-n*f*_)*L,t[2]=(s*p*r-d*c*r+d*i*l-n*p*l-s*i*_+n*c*_)*L,t[3]=(h*c*r-s*f*r-h*i*l+n*f*l+s*i*m-n*c*m)*L,t[4]=b*L,t[5]=(u*p*r-g*f*r+g*i*m-e*p*m-u*i*_+e*f*_)*L,t[6]=(g*c*r-a*p*r-g*i*l+e*p*l+a*i*_-e*c*_)*L,t[7]=(a*f*r-u*c*r+u*i*l-e*f*l-a*i*m+e*c*m)*L,t[8]=y*L,t[9]=(g*h*r-u*d*r-g*n*m+e*d*m+u*n*_-e*h*_)*L,t[10]=(a*d*r-g*s*r+g*n*l-e*d*l-a*n*_+e*s*_)*L,t[11]=(u*s*r-a*h*r-u*n*l+e*h*l+a*n*m-e*s*m)*L,t[12]=x*L,t[13]=(u*d*i-g*h*i+g*n*f-e*d*f-u*n*p+e*h*p)*L,t[14]=(g*s*i-a*d*i-g*n*c+e*d*c+a*n*p-e*s*p)*L,t[15]=(a*h*i-u*s*i+u*n*c-e*h*c-a*n*f+e*s*f)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,s=t.y,c=t.z,l=r*a,u=r*s;return this.set(l*a+n,l*s-i*c,l*c+i*s,0,l*s+i*c,u*s+n,u*c-i*a,0,l*c-i*s,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,s=e._z,c=e._w,l=r+r,u=a+a,h=s+s,f=r*l,m=r*u,g=r*h,d=a*u,p=a*h,_=s*h,M=c*l,b=c*u,y=c*h,x=n.x,A=n.y,L=n.z;return i[0]=(1-(d+_))*x,i[1]=(m+y)*x,i[2]=(g-b)*x,i[3]=0,i[4]=(m-y)*A,i[5]=(1-(f+_))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(g+b)*L,i[9]=(p-M)*L,i[10]=(1-(f+d))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Qi.set(i[0],i[1],i[2]).length();const a=Qi.set(i[4],i[5],i[6]).length(),s=Qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],on.copy(this);const l=1/r,u=1/a,h=1/s;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,e.setFromRotationMatrix(on),n.x=r,n.y=a,n.z=s,this}makePerspective(t,e,n,i,r,a){const s=this.elements,c=2*r/(e-t),l=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(t,e,n,i,r,a){const s=this.elements,c=1/(e-t),l=1/(n-i),u=1/(a-r),h=(e+t)*c,f=(n+i)*l,m=(a+r)*u;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qi=new R,on=new ie,Hf=new R(0,0,0),Xf=new R(1,1,1),Xn=new R,Ms=new R,Ie=new R,ec=new ie,nc=new Ii;class os{constructor(t=0,e=0,n=0,i=os.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],s=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(we(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ec,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nc.setFromEuler(this),this.setFromQuaternion(nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}os.DefaultOrder="XYZ";os.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Xo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qf=0;const ic=new R,tr=new Ii,Sn=new ie,ys=new R,Nr=new R,jf=new R,Yf=new Ii,rc=new R(1,0,0),sc=new R(0,1,0),ac=new R(0,0,1),Zf={type:"added"},oc={type:"removed"};class ge extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DefaultUp.clone();const t=new R,e=new os,n=new Ii,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new $e}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=ge.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ge.DefaultMatrixWorldAutoUpdate,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(rc,t)}rotateY(t){return this.rotateOnAxis(sc,t)}rotateZ(t){return this.rotateOnAxis(ac,t)}translateOnAxis(t,e){return ic.copy(t).applyQuaternion(this.quaternion),this.position.add(ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rc,t)}translateY(t){return this.translateOnAxis(sc,t)}translateZ(t){return this.translateOnAxis(ac,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ys.copy(t):ys.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Nr,ys,this.up):Sn.lookAt(ys,Nr,this.up),this.quaternion.setFromRotationMatrix(Sn),i&&(Sn.extractRotation(i.matrixWorld),tr.setFromRotationMatrix(Sn),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Zf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(oc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(oc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,t,jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Yf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(r(t.materials,this.material[c]));i.material=s}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];i.animations.push(r(t.animations,c))}}if(e){const s=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const c=[];for(const l in s){const u=s[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DefaultUp=new R(0,1,0);ge.DefaultMatrixAutoUpdate=!0;ge.DefaultMatrixWorldAutoUpdate=!0;const ln=new R,wn=new R,Na=new R,Tn=new R,er=new R,nr=new R,lc=new R,za=new R,Ua=new R,Ba=new R;class Ln{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ln.subVectors(i,e),wn.subVectors(n,e),Na.subVectors(t,e);const a=ln.dot(ln),s=ln.dot(wn),c=ln.dot(Na),l=wn.dot(wn),u=wn.dot(Na),h=a*l-s*s;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(l*c-s*u)*f,g=(a*u-s*c)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(t,e,n,i,r,a,s,c){return this.getBarycoord(t,e,n,i,Tn),c.set(0,0),c.addScaledVector(r,Tn.x),c.addScaledVector(a,Tn.y),c.addScaledVector(s,Tn.z),c}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),wn.subVectors(t,e),ln.cross(wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),ln.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ln.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Ln.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,s;er.subVectors(i,n),nr.subVectors(r,n),za.subVectors(t,n);const c=er.dot(za),l=nr.dot(za);if(c<=0&&l<=0)return e.copy(n);Ua.subVectors(t,i);const u=er.dot(Ua),h=nr.dot(Ua);if(u>=0&&h<=u)return e.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(er,a);Ba.subVectors(t,r);const m=er.dot(Ba),g=nr.dot(Ba);if(g>=0&&m<=g)return e.copy(r);const d=m*l-c*g;if(d<=0&&l>=0&&g<=0)return s=l/(l-g),e.copy(n).addScaledVector(nr,s);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return lc.subVectors(r,i),s=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(lc,s);const _=1/(p+d+f);return a=d*_,s=f*_,e.copy(n).addScaledVector(er,a).addScaledVector(nr,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let $f=0;class Gi extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=pr,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hu,this.blendDst=fu,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==Mr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const c=r[s];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qo extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ee=new R,bs=new bt;class un{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Zl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bs.fromBufferAttribute(this,e),bs.applyMatrix3(t),this.setXY(e,bs.x,bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix3(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix4(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyNormalMatrix(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.transformDirection(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class yu extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bu extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kf=0;const He=new ie,ka=new ge,ir=new R,Oe=new as,zr=new as,ce=new R;class xn extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mu(t)?bu:yu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $e().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return ka.lookAt(t),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _e(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(ce.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(ce),ce.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(ce)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ho);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const s=e[r];zr.setFromBufferAttribute(s),this.morphTargetsRelative?(ce.addVectors(Oe.min,zr.min),Oe.expandByPoint(ce),ce.addVectors(Oe.max,zr.max),Oe.expandByPoint(ce)):(Oe.expandByPoint(zr.min),Oe.expandByPoint(zr.max))}Oe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ce.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ce));if(e)for(let r=0,a=e.length;r<a;r++){const s=e[r],c=this.morphTargetsRelative;for(let l=0,u=s.count;l<u;l++)ce.fromBufferAttribute(s,l),c&&(ir.fromBufferAttribute(t,l),ce.add(ir)),i=Math.max(i,n.distanceToSquared(ce))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let D=0;D<s;D++)l[D]=new R,u[D]=new R;const h=new R,f=new R,m=new R,g=new bt,d=new bt,p=new bt,_=new R,M=new R;function b(D,H,J){h.fromArray(i,D*3),f.fromArray(i,H*3),m.fromArray(i,J*3),g.fromArray(a,D*2),d.fromArray(a,H*2),p.fromArray(a,J*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const N=1/(d.x*p.y-p.x*d.y);!isFinite(N)||(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(N),M.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(N),l[D].add(_),l[H].add(_),l[J].add(_),u[D].add(M),u[H].add(M),u[J].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let D=0,H=y.length;D<H;++D){const J=y[D],N=J.start,I=J.count;for(let B=N,q=N+I;B<q;B+=3)b(n[B+0],n[B+1],n[B+2])}const x=new R,A=new R,L=new R,v=new R;function w(D){L.fromArray(r,D*3),v.copy(L);const H=l[D];x.copy(H),x.sub(L.multiplyScalar(L.dot(H))).normalize(),A.crossVectors(v,H);const N=A.dot(u[D])<0?-1:1;c[D*4]=x.x,c[D*4+1]=x.y,c[D*4+2]=x.z,c[D*4+3]=N}for(let D=0,H=y.length;D<H;++D){const J=y[D],N=J.start,I=J.count;for(let B=N,q=N+I;B<q;B+=3)w(n[B+0]),w(n[B+1]),w(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,a=new R,s=new R,c=new R,l=new R,u=new R,h=new R;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),d=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,d),a.fromBufferAttribute(e,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),l.fromBufferAttribute(n,p),s.add(u),c.add(u),l.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(d,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ce.fromBufferAttribute(t,e),ce.normalize(),t.setXYZ(e,ce.x,ce.y,ce.z)}toNonIndexed(){function t(s,c){const l=s.array,u=s.itemSize,h=s.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let d=0,p=c.length;d<p;d++){s.isInterleavedBufferAttribute?m=c[d]*s.data.stride+s.offset:m=c[d]*u;for(let _=0;_<u;_++)f[g++]=l[m++]}return new un(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xn,n=this.index.array,i=this.attributes;for(const s in i){const c=i[s],l=t(c,n);e.setAttribute(s,l)}const r=this.morphAttributes;for(const s in r){const c=[],l=r[s];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=t(f,n);c.push(m)}e.morphAttributes[s]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,c=a.length;s<c;s++){const l=a[s];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const cc=new ie,rr=new Mu,Ga=new Ho,qn=new R,jn=new R,Yn=new R,Va=new R,Wa=new R,Ha=new R,Ss=new R,ws=new R,Ts=new R,Es=new bt,As=new bt,Cs=new bt,Xa=new R,Ls=new R;class gt extends ge{constructor(t=new xn,e=new qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(r),t.ray.intersectsSphere(Ga)===!1)||(cc.copy(r).invert(),rr.copy(t.ray).applyMatrix4(cc),n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(s!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],M=i[_.materialIndex],b=Math.max(_.start,g.start),y=Math.min(s.count,Math.min(_.start+_.count,g.start+g.count));for(let x=b,A=y;x<A;x+=3){const L=s.getX(x),v=s.getX(x+1),w=s.getX(x+2);a=Ps(this,M,t,rr,c,l,u,h,f,L,v,w),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{const d=Math.max(0,g.start),p=Math.min(s.count,g.start+g.count);for(let _=d,M=p;_<M;_+=3){const b=s.getX(_),y=s.getX(_+1),x=s.getX(_+2);a=Ps(this,i,t,rr,c,l,u,h,f,b,y,x),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],M=i[_.materialIndex],b=Math.max(_.start,g.start),y=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let x=b,A=y;x<A;x+=3){const L=x,v=x+1,w=x+2;a=Ps(this,M,t,rr,c,l,u,h,f,L,v,w),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{const d=Math.max(0,g.start),p=Math.min(c.count,g.start+g.count);for(let _=d,M=p;_<M;_+=3){const b=_,y=_+1,x=_+2;a=Ps(this,i,t,rr,c,l,u,h,f,b,y,x),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}}}function Jf(o,t,e,n,i,r,a,s){let c;if(t.side===tn?c=n.intersectTriangle(a,r,i,!0,s):c=n.intersectTriangle(i,r,a,t.side!==Pn,s),c===null)return null;Ls.copy(s),Ls.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(Ls);return l<e.near||l>e.far?null:{distance:l,point:Ls.clone(),object:o}}function Ps(o,t,e,n,i,r,a,s,c,l,u,h){qn.fromBufferAttribute(i,l),jn.fromBufferAttribute(i,u),Yn.fromBufferAttribute(i,h);const f=o.morphTargetInfluences;if(r&&f){Ss.set(0,0,0),ws.set(0,0,0),Ts.set(0,0,0);for(let g=0,d=r.length;g<d;g++){const p=f[g],_=r[g];p!==0&&(Va.fromBufferAttribute(_,l),Wa.fromBufferAttribute(_,u),Ha.fromBufferAttribute(_,h),a?(Ss.addScaledVector(Va,p),ws.addScaledVector(Wa,p),Ts.addScaledVector(Ha,p)):(Ss.addScaledVector(Va.sub(qn),p),ws.addScaledVector(Wa.sub(jn),p),Ts.addScaledVector(Ha.sub(Yn),p)))}qn.add(Ss),jn.add(ws),Yn.add(Ts)}o.isSkinnedMesh&&(o.boneTransform(l,qn),o.boneTransform(u,jn),o.boneTransform(h,Yn));const m=Jf(o,t,e,n,qn,jn,Yn,Xa);if(m){s&&(Es.fromBufferAttribute(s,l),As.fromBufferAttribute(s,u),Cs.fromBufferAttribute(s,h),m.uv=Ln.getUV(Xa,qn,jn,Yn,Es,As,Cs,new bt)),c&&(Es.fromBufferAttribute(c,l),As.fromBufferAttribute(c,u),Cs.fromBufferAttribute(c,h),m.uv2=Ln.getUV(Xa,qn,jn,Yn,Es,As,Cs,new bt));const g={a:l,b:u,c:h,normal:new R,materialIndex:0};Ln.getNormal(qn,jn,Yn,g.normal),m.face=g}return m}class Vi extends xn{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(h,2));function g(d,p,_,M,b,y,x,A,L,v,w){const D=y/L,H=x/v,J=y/2,N=x/2,I=A/2,B=L+1,q=v+1;let j=0,k=0;const F=new R;for(let U=0;U<q;U++){const Q=U*H-N;for(let $=0;$<B;$++){const K=$*D-J;F[d]=K*M,F[p]=Q*b,F[_]=I,l.push(F.x,F.y,F.z),F[d]=0,F[p]=0,F[_]=A>0?1:-1,u.push(F.x,F.y,F.z),h.push($/L),h.push(1-U/v),j+=1}}for(let U=0;U<v;U++)for(let Q=0;Q<L;Q++){const $=f+Q+B*U,K=f+Q+B*(U+1),at=f+(Q+1)+B*(U+1),dt=f+(Q+1)+B*U;c.push($,K,dt),c.push(K,at,dt),k+=6}s.addGroup(m,k,w),m+=k,f+=j}}static fromJSON(t){return new Vi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wr(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function pe(o){const t={};for(let e=0;e<o.length;e++){const n=wr(o[e]);for(const i in n)t[i]=n[i]}return t}function Qf(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}const td={clone:wr,merge:pe};var ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ed,this.fragmentShader=nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=Qf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Su extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ne extends Su{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Kl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kl*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const sr=90,ar=1;class id extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ne(sr,ar,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new R(1,0,0)),this.add(i);const r=new Ne(sr,ar,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(-1,0,0)),this.add(r);const a=new Ne(sr,ar,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new R(0,1,0)),this.add(a);const s=new Ne(sr,ar,t,e);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new R(0,-1,0)),this.add(s);const c=new Ne(sr,ar,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,1)),this.add(c);const l=new Ne(sr,ar,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,-1)),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,c,l]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=Nn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,s),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class wu extends nn{constructor(t,e,n,i,r,a,s,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:yr,super(t,e,n,i,r,a,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rd extends Ri{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vi(5,5,5),r=new Oi({name:"CubemapFromEquirect",uniforms:wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Jn});r.uniforms.tEquirect.value=e;const a=new gt(i,r),s=e.minFilter;return e.minFilter===ra&&(e.minFilter=Ye),new id(1,10,this).update(t,a),e.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const qa=new R,sd=new R,ad=new $e;class di{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=qa.subVectors(n,e).cross(sd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ad.getNormalMatrix(t),i=this.coplanarPoint(qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Ho,Ds=new R;class jo{constructor(t=new di,e=new di,n=new di,i=new di,r=new di,a=new di){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],s=n[3],c=n[4],l=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],M=n[14],b=n[15];return e[0].setComponents(s-i,h-c,d-f,b-p).normalize(),e[1].setComponents(s+i,h+c,d+f,b+p).normalize(),e[2].setComponents(s+r,h+l,d+m,b+_).normalize(),e[3].setComponents(s-r,h-l,d-m,b-_).normalize(),e[4].setComponents(s-a,h-u,d-g,b-M).normalize(),e[5].setComponents(s+a,h+u,d+g,b+M).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(or)}intersectsSprite(t){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(t.matrixWorld),this.intersectsSphere(or)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ds.x=i.normal.x>0?t.max.x:t.min.x,Ds.y=i.normal.y>0?t.max.y:t.min.y,Ds.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tu(){let o=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){o=r}}}function od(o,t){const e=t.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,f=l.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const f=u.array,m=u.updateRange;o.bindBuffer(h,l),m.count===-1?o.bufferSubData(h,0,f):(e?o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(o.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:a,remove:s,update:c}}class ve extends xn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,s=Math.floor(n),c=Math.floor(i),l=s+1,u=c+1,h=t/s,f=e/c,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const M=_*f-a;for(let b=0;b<l;b++){const y=b*h-r;g.push(y,-M,0),d.push(0,0,1),p.push(b/s),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let M=0;M<s;M++){const b=M+l*_,y=M+l*(_+1),x=M+1+l*(_+1),A=M+1+l*_;m.push(b,y,A),m.push(y,x,A)}this.setIndex(m),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(p,2))}static fromJSON(t){return new ve(t.width,t.height,t.widthSegments,t.heightSegments)}}var ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd="vec3 transformed = vec3( position );",md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,_d=`#ifdef USE_IRIDESCENCE
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
#endif`,xd=`#ifdef USE_BUMPMAP
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
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ad=`#define PI 3.141592653589793
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
}`,Cd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
#endif`,Ld=`vec3 transformedNormal = objectNormal;
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
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Od="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nd=`#ifdef USE_ENVMAP
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
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xd=`#ifdef USE_GRADIENTMAP
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
}`,qd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,$d=`uniform bool receiveShadow;
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
#endif`,Kd=`#if defined( USE_ENVMAP )
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
#endif`,Jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,np=`PhysicalMaterial material;
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
#endif`,ip=`struct PhysicalMaterial {
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
}`,rp=`
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xp=`#ifdef USE_MORPHNORMALS
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
#endif`,vp=`#ifdef USE_MORPHTARGETS
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
#endif`,Mp=`#ifdef USE_MORPHTARGETS
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
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
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
vec3 geometryNormal = normal;`,bp=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
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
#endif`,Ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Vp=`float getShadowMask() {
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
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kp=`#ifdef USE_TRANSMISSION
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
#endif`,Jp=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
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
#endif`,Qp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,tm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,em=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,nm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,im=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,rm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,om=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,um=`#include <common>
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
}`,hm=`#if DEPTH_PACKING == 3200
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
}`,fm=`#define DISTANCE
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
}`,dm=`#define DISTANCE
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gm=`uniform float scale;
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
}`,_m=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,vm=`uniform vec3 diffuse;
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
}`,Mm=`#define LAMBERT
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
}`,ym=`#define LAMBERT
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
}`,bm=`#define MATCAP
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
}`,Sm=`#define MATCAP
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
}`,wm=`#define NORMAL
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
}`,Tm=`#define NORMAL
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
}`,Em=`#define PHONG
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
}`,Am=`#define PHONG
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
}`,Cm=`#define STANDARD
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
}`,Lm=`#define STANDARD
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
}`,Pm=`#define TOON
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
}`,Dm=`#define TOON
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
}`,Rm=`uniform float size;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Nm=`uniform float rotation;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Et={alphamap_fragment:ld,alphamap_pars_fragment:cd,alphatest_fragment:ud,alphatest_pars_fragment:hd,aomap_fragment:fd,aomap_pars_fragment:dd,begin_vertex:pd,beginnormal_vertex:md,bsdfs:gd,iridescence_fragment:_d,bumpmap_pars_fragment:xd,clipping_planes_fragment:vd,clipping_planes_pars_fragment:Md,clipping_planes_pars_vertex:yd,clipping_planes_vertex:bd,color_fragment:Sd,color_pars_fragment:wd,color_pars_vertex:Td,color_vertex:Ed,common:Ad,cube_uv_reflection_fragment:Cd,defaultnormal_vertex:Ld,displacementmap_pars_vertex:Pd,displacementmap_vertex:Dd,emissivemap_fragment:Rd,emissivemap_pars_fragment:Id,encodings_fragment:Od,encodings_pars_fragment:Fd,envmap_fragment:Nd,envmap_common_pars_fragment:zd,envmap_pars_fragment:Ud,envmap_pars_vertex:Bd,envmap_physical_pars_fragment:Kd,envmap_vertex:kd,fog_vertex:Gd,fog_pars_vertex:Vd,fog_fragment:Wd,fog_pars_fragment:Hd,gradientmap_pars_fragment:Xd,lightmap_fragment:qd,lightmap_pars_fragment:jd,lights_lambert_fragment:Yd,lights_lambert_pars_fragment:Zd,lights_pars_begin:$d,lights_toon_fragment:Jd,lights_toon_pars_fragment:Qd,lights_phong_fragment:tp,lights_phong_pars_fragment:ep,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:rp,lights_fragment_maps:sp,lights_fragment_end:ap,logdepthbuf_fragment:op,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:up,map_fragment:hp,map_pars_fragment:fp,map_particle_fragment:dp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphcolor_vertex:_p,morphnormal_vertex:xp,morphtarget_pars_vertex:vp,morphtarget_vertex:Mp,normal_fragment_begin:yp,normal_fragment_maps:bp,normal_pars_fragment:Sp,normal_pars_vertex:wp,normal_vertex:Tp,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:Ap,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Pp,output_fragment:Dp,packing:Rp,premultiplied_alpha_fragment:Ip,project_vertex:Op,dithering_fragment:Fp,dithering_pars_fragment:Np,roughnessmap_fragment:zp,roughnessmap_pars_fragment:Up,shadowmap_pars_fragment:Bp,shadowmap_pars_vertex:kp,shadowmap_vertex:Gp,shadowmask_pars_fragment:Vp,skinbase_vertex:Wp,skinning_pars_vertex:Hp,skinning_vertex:Xp,skinnormal_vertex:qp,specularmap_fragment:jp,specularmap_pars_fragment:Yp,tonemapping_fragment:Zp,tonemapping_pars_fragment:$p,transmission_fragment:Kp,transmission_pars_fragment:Jp,uv_pars_fragment:Qp,uv_pars_vertex:tm,uv_vertex:em,uv2_pars_fragment:nm,uv2_pars_vertex:im,uv2_vertex:rm,worldpos_vertex:sm,background_vert:am,background_frag:om,cube_vert:lm,cube_frag:cm,depth_vert:um,depth_frag:hm,distanceRGBA_vert:fm,distanceRGBA_frag:dm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:_m,meshbasic_vert:xm,meshbasic_frag:vm,meshlambert_vert:Mm,meshlambert_frag:ym,meshmatcap_vert:bm,meshmatcap_frag:Sm,meshnormal_vert:wm,meshnormal_frag:Tm,meshphong_vert:Em,meshphong_frag:Am,meshphysical_vert:Cm,meshphysical_frag:Lm,meshtoon_vert:Pm,meshtoon_frag:Dm,points_vert:Rm,points_frag:Im,shadow_vert:Om,shadow_frag:Fm,sprite_vert:Nm,sprite_frag:zm},it={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new $e},uv2Transform:{value:new $e},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new $e}}},dn={basic:{uniforms:pe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:pe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:pe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:pe([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:pe([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:pe([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:pe([it.points,it.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:pe([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:pe([it.common,it.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:pe([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:pe([it.sprite,it.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},cube:{uniforms:pe([it.envmap,{opacity:{value:1}}]),vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:pe([it.common,it.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:pe([it.lights,it.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};dn.physical={uniforms:pe([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new bt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};function Um(o,t,e,n,i,r){const a=new Ot(0);let s=i===!0?0:1,c,l,u=null,h=0,f=null;function m(d,p){let _=!1,M=p.isScene===!0?p.background:null;M&&M.isTexture&&(M=t.get(M));const b=o.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(M=null),M===null?g(a,s):M&&M.isColor&&(g(M,1),_=!0),(o.autoClear||_)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ia)?(l===void 0&&(l=new gt(new Vi(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:wr(dn.cube.uniforms),vertexShader:dn.cube.vertexShader,fragmentShader:dn.cube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,(u!==M||h!==M.version||f!==o.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,f=o.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new gt(new ve(2,2),new Oi({name:"BackgroundMaterial",uniforms:wr(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,f=o.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function g(d,p){e.buffers.color.setClear(d.r,d.g,d.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),s=p,g(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(d){s=d,g(a,s)},render:m}}function Bm(o,t,e,n){const i=o.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},c=p(null);let l=c,u=!1;function h(I,B,q,j,k){let F=!1;if(a){const U=d(j,q,B);l!==U&&(l=U,m(l.object)),F=_(I,j,q,k),F&&M(I,j,q,k)}else{const U=B.wireframe===!0;(l.geometry!==j.id||l.program!==q.id||l.wireframe!==U)&&(l.geometry=j.id,l.program=q.id,l.wireframe=U,F=!0)}k!==null&&e.update(k,34963),(F||u)&&(u=!1,v(I,B,q,j),k!==null&&o.bindBuffer(34963,e.get(k).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(I){return n.isWebGL2?o.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?o.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function d(I,B,q){const j=q.wireframe===!0;let k=s[I.id];k===void 0&&(k={},s[I.id]=k);let F=k[B.id];F===void 0&&(F={},k[B.id]=F);let U=F[j];return U===void 0&&(U=p(f()),F[j]=U),U}function p(I){const B=[],q=[],j=[];for(let k=0;k<i;k++)B[k]=0,q[k]=0,j[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:j,object:I,attributes:{},index:null}}function _(I,B,q,j){const k=l.attributes,F=B.attributes;let U=0;const Q=q.getAttributes();for(const $ in Q)if(Q[$].location>=0){const at=k[$];let dt=F[$];if(dt===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(dt=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(dt=I.instanceColor)),at===void 0||at.attribute!==dt||dt&&at.data!==dt.data)return!0;U++}return l.attributesNum!==U||l.index!==j}function M(I,B,q,j){const k={},F=B.attributes;let U=0;const Q=q.getAttributes();for(const $ in Q)if(Q[$].location>=0){let at=F[$];at===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(at=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(at=I.instanceColor));const dt={};dt.attribute=at,at&&at.data&&(dt.data=at.data),k[$]=dt,U++}l.attributes=k,l.attributesNum=U,l.index=j}function b(){const I=l.newAttributes;for(let B=0,q=I.length;B<q;B++)I[B]=0}function y(I){x(I,0)}function x(I,B){const q=l.newAttributes,j=l.enabledAttributes,k=l.attributeDivisors;q[I]=1,j[I]===0&&(o.enableVertexAttribArray(I),j[I]=1),k[I]!==B&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),k[I]=B)}function A(){const I=l.newAttributes,B=l.enabledAttributes;for(let q=0,j=B.length;q<j;q++)B[q]!==I[q]&&(o.disableVertexAttribArray(q),B[q]=0)}function L(I,B,q,j,k,F){n.isWebGL2===!0&&(q===5124||q===5125)?o.vertexAttribIPointer(I,B,q,k,F):o.vertexAttribPointer(I,B,q,j,k,F)}function v(I,B,q,j){if(n.isWebGL2===!1&&(I.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;b();const k=j.attributes,F=q.getAttributes(),U=B.defaultAttributeValues;for(const Q in F){const $=F[Q];if($.location>=0){let K=k[Q];if(K===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){const at=K.normalized,dt=K.itemSize,Y=e.get(K);if(Y===void 0)continue;const Ft=Y.buffer,_t=Y.type,Mt=Y.bytesPerElement;if(K.isInterleavedBufferAttribute){const ft=K.data,zt=ft.stride,wt=K.offset;if(ft.isInstancedInterleavedBuffer){for(let mt=0;mt<$.locationSize;mt++)x($.location+mt,ft.meshPerAttribute);I.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let mt=0;mt<$.locationSize;mt++)y($.location+mt);o.bindBuffer(34962,Ft);for(let mt=0;mt<$.locationSize;mt++)L($.location+mt,dt/$.locationSize,_t,at,zt*Mt,(wt+dt/$.locationSize*mt)*Mt)}else{if(K.isInstancedBufferAttribute){for(let ft=0;ft<$.locationSize;ft++)x($.location+ft,K.meshPerAttribute);I.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ft=0;ft<$.locationSize;ft++)y($.location+ft);o.bindBuffer(34962,Ft);for(let ft=0;ft<$.locationSize;ft++)L($.location+ft,dt/$.locationSize,_t,at,dt*Mt,dt/$.locationSize*ft*Mt)}}else if(U!==void 0){const at=U[Q];if(at!==void 0)switch(at.length){case 2:o.vertexAttrib2fv($.location,at);break;case 3:o.vertexAttrib3fv($.location,at);break;case 4:o.vertexAttrib4fv($.location,at);break;default:o.vertexAttrib1fv($.location,at)}}}}A()}function w(){J();for(const I in s){const B=s[I];for(const q in B){const j=B[q];for(const k in j)g(j[k].object),delete j[k];delete B[q]}delete s[I]}}function D(I){if(s[I.id]===void 0)return;const B=s[I.id];for(const q in B){const j=B[q];for(const k in j)g(j[k].object),delete j[k];delete B[q]}delete s[I.id]}function H(I){for(const B in s){const q=s[B];if(q[I.id]===void 0)continue;const j=q[I.id];for(const k in j)g(j[k].object),delete j[k];delete q[I.id]}}function J(){N(),u=!0,l!==c&&(l=c,m(l.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:J,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:H,initAttributes:b,enableAttribute:y,disableUnusedAttributes:A}}function km(o,t,e,n){const i=n.isWebGL2;let r;function a(l){r=l}function s(l,u){o.drawArrays(r,l,u),e.update(u,r,1)}function c(l,u,h){if(h===0)return;let f,m;if(i)f=o,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,l,u,h),e.update(u,r,h)}this.setMode=a,this.render=s,this.renderInstances=c}function Gm(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=e.precision!==void 0?e.precision:"highp";const c=r(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=o.getParameter(34930),f=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),d=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),M=o.getParameter(36349),b=f>0,y=a||t.has("OES_texture_float"),x=b&&y,A=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:x,maxSamples:A}}function Vm(o){const t=this;let e=null,n=0,i=!1,r=!1;const a=new di,s=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,e=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,l()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,_=o.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):l();else{const M=r?0:n,b=M*4;let y=_.clippingState||null;c.value=y,y=u(g,f,b,m);for(let x=0;x!==b;++x)y[x]=e[x];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=c.value,g!==!0||p===null){const _=m+d*4,M=f.matrixWorldInverse;s.getNormalMatrix(M),(p===null||p.length<_)&&(p=new Float32Array(_));for(let b=0,y=m;b!==d;++b,y+=4)a.copy(h[b]).applyMatrix4(M,s),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=d,t.numIntersection=0,p}}function Wm(o){let t=new WeakMap;function e(a,s){return s===co?a.mapping=yr:s===uo&&(a.mapping=br),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===co||s===uo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new rd(c.height/2);return l.fromEquirectangularTexture(o,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const c=t.get(s);c!==void 0&&(t.delete(s),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Eu extends Su{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,s=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,s-=u*this.view.offsetY,c=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const hr=4,uc=[.125,.215,.35,.446,.526,.582],gi=20,ja=new Eu,hc=new Ot;let Ya=null;const pi=(1+Math.sqrt(5))/2,lr=1/pi,fc=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,pi,lr),new R(0,pi,-lr),new R(lr,0,pi),new R(-lr,0,pi),new R(pi,lr,0),new R(-pi,lr,0)];class dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ya=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ya),t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yr||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ya=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Yr,format:mn,encoding:Di,depthBuffer:!1},i=pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hm(r)),this._blurMaterial=Xm(r,t,e)}return i}_compileMaterial(t){const e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,n,i){const s=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(hc),u.toneMapping=Nn,u.autoClear=!1;const m=new qo({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new gt(new Vi,m);let d=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,d=!0):(m.color.copy(hc),d=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(s.up.set(0,c[_],0),s.lookAt(l[_],0,0)):M===1?(s.up.set(0,0,c[_]),s.lookAt(0,l[_],0)):(s.up.set(0,c[_],0),s.lookAt(0,0,l[_]));const b=this._cubeSize;Rs(i,M*b,_>2?b:0,b,b),u.setRenderTarget(i),d&&u.render(g,s),u.render(t,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===yr||t.mapping===br;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const c=this._cubeSize;Rs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ja)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=fc[(i-1)%fc.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,s){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new gt(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*gi-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):gi;p>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gi}`);const _=[];let M=0;for(let L=0;L<gi;++L){const v=L/d,w=Math.exp(-v*v/2);_.push(w),L===0?M+=w:L<p&&(M+=2*w)}for(let L=0;L<_.length;L++)_[L]=_[L]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const y=this._sizeLods[i],x=3*y*(i>b-hr?i-b+hr:0),A=4*(this._cubeSize-y);Rs(e,x,A,3*y,2*y),c.setRenderTarget(e),c.render(h,ja)}}function Hm(o){const t=[],e=[],n=[];let i=o;const r=o-hr+1+uc.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);e.push(s);let c=1/s;a>o-hr?c=uc[a-o+hr-1]:a===0&&(c=0),n.push(c);const l=1/(s-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,_=1,M=new Float32Array(d*g*m),b=new Float32Array(p*g*m),y=new Float32Array(_*g*m);for(let A=0;A<m;A++){const L=A%3*2/3-1,v=A>2?0:-1,w=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];M.set(w,d*g*A),b.set(f,p*g*A);const D=[A,A,A,A,A,A];y.set(D,_*g*A)}const x=new xn;x.setAttribute("position",new un(M,d)),x.setAttribute("uv",new un(b,p)),x.setAttribute("faceIndex",new un(y,_)),t.push(x),i>hr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pc(o,t,e){const n=new Ri(o,t,e);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Xm(o,t,e){const n=new Float32Array(gi),i=new R(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function mc(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function gc(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Yo(){return`

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
	`}function qm(o){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const c=s.mapping,l=c===co||c===uo,u=c===yr||c===br;if(l||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=t.get(s);return e===null&&(e=new dc(o)),h=l?e.fromEquirectangular(s,h):e.fromCubemap(s,h),t.set(s,h),h.texture}else{if(t.has(s))return t.get(s).texture;{const h=s.image;if(l&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new dc(o));const f=l?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let c=0;const l=6;for(let u=0;u<l;u++)s[u]!==void 0&&c++;return c===l}function r(s){const c=s.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function jm(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ym(o,t,e,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function s(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)t.update(d[p],34962)}}function l(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const M=m.array;d=m.version;for(let b=0,y=M.length;b<y;b+=3){const x=M[b+0],A=M[b+1],L=M[b+2];f.push(x,A,A,L,L,x)}}else{const M=g.array;d=g.version;for(let b=0,y=M.length/3-1;b<y;b+=3){const x=b+0,A=b+1,L=b+2;f.push(x,A,A,L,L,x)}}const p=new(mu(f)?bu:yu)(f,1);p.version=d;const _=r.get(h);_&&t.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:s,update:c,getWireframeAttribute:u}}function Zm(o,t,e,n){const i=n.isWebGL2;let r;function a(f){r=f}let s,c;function l(f){s=f.type,c=f.bytesPerElement}function u(f,m){o.drawElements(r,m,s,f*c),e.update(m,r,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=o,p="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,s,f*c,g),e.update(m,r,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function $m(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(e.calls++,a){case 4:e.triangles+=s*(r/3);break;case 1:e.lines+=s*(r/2);break;case 3:e.lines+=s*(r-1);break;case 2:e.lines+=s*r;break;case 0:e.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Km(o,t){return o[0]-t[0]}function Jm(o,t){return Math.abs(t[1])-Math.abs(o[1])}function Qm(o,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new Ht,s=[];for(let l=0;l<8;l++)s[l]=[l,0];function c(l,u,h,f){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let q=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",q)};var g=q;_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let D=0;y===!0&&(D=1),x===!0&&(D=2),A===!0&&(D=3);let H=u.attributes.position.count*D,J=1;H>t.maxTextureSize&&(J=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const N=new Float32Array(H*J*4*p),I=new vu(N,H,J,p);I.type=xi,I.needsUpdate=!0;const B=D*4;for(let j=0;j<p;j++){const k=L[j],F=v[j],U=w[j],Q=H*J*4*j;for(let $=0;$<k.count;$++){const K=$*B;y===!0&&(a.fromBufferAttribute(k,$),N[Q+K+0]=a.x,N[Q+K+1]=a.y,N[Q+K+2]=a.z,N[Q+K+3]=0),x===!0&&(a.fromBufferAttribute(F,$),N[Q+K+4]=a.x,N[Q+K+5]=a.y,N[Q+K+6]=a.z,N[Q+K+7]=0),A===!0&&(a.fromBufferAttribute(U,$),N[Q+K+8]=a.x,N[Q+K+9]=a.y,N[Q+K+10]=a.z,N[Q+K+11]=U.itemSize===4?a.w:1)}}_={count:p,texture:I,size:new bt(H,J)},r.set(u,_),u.addEventListener("dispose",q)}let M=0;for(let y=0;y<m.length;y++)M+=m[y];const b=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(o,"morphTargetBaseInfluence",b),f.getUniforms().setValue(o,"morphTargetInfluences",m),f.getUniforms().setValue(o,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let x=0;x<d;x++)p[x]=[x,0];n[u.id]=p}for(let x=0;x<d;x++){const A=p[x];A[0]=x,A[1]=m[x]}p.sort(Jm);for(let x=0;x<8;x++)x<d&&p[x][1]?(s[x][0]=p[x][0],s[x][1]=p[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(Km);const _=u.morphAttributes.position,M=u.morphAttributes.normal;let b=0;for(let x=0;x<8;x++){const A=s[x],L=A[0],v=A[1];L!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+x)!==_[L]&&u.setAttribute("morphTarget"+x,_[L]),M&&u.getAttribute("morphNormal"+x)!==M[L]&&u.setAttribute("morphNormal"+x,M[L]),i[x]=v,b+=v):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),M&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const y=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(o,"morphTargetBaseInfluence",y),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function tg(o,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);return i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),h}function a(){i=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const Au=new nn,Cu=new vu,Lu=new Vf,Pu=new wu,_c=[],xc=[],vc=new Float32Array(16),Mc=new Float32Array(9),yc=new Float32Array(4);function Rr(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let r=_c[i];if(r===void 0&&(r=new Float32Array(i),_c[i]=r),t!==0){n.toArray(r,0);for(let a=1,s=0;a!==t;++a)s+=e,o[a].toArray(r,s)}return r}function ye(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function be(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function aa(o,t){let e=xc[t];e===void 0&&(e=new Int32Array(t),xc[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function eg(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function ng(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;o.uniform2fv(this.addr,t),be(e,t)}}function ig(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;o.uniform3fv(this.addr,t),be(e,t)}}function rg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;o.uniform4fv(this.addr,t),be(e,t)}}function sg(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(ye(e,n))return;yc.set(n),o.uniformMatrix2fv(this.addr,!1,yc),be(e,n)}}function ag(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(ye(e,n))return;Mc.set(n),o.uniformMatrix3fv(this.addr,!1,Mc),be(e,n)}}function og(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(ye(e,n))return;vc.set(n),o.uniformMatrix4fv(this.addr,!1,vc),be(e,n)}}function lg(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function cg(o,t){const e=this.cache;ye(e,t)||(o.uniform2iv(this.addr,t),be(e,t))}function ug(o,t){const e=this.cache;ye(e,t)||(o.uniform3iv(this.addr,t),be(e,t))}function hg(o,t){const e=this.cache;ye(e,t)||(o.uniform4iv(this.addr,t),be(e,t))}function fg(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function dg(o,t){const e=this.cache;ye(e,t)||(o.uniform2uiv(this.addr,t),be(e,t))}function pg(o,t){const e=this.cache;ye(e,t)||(o.uniform3uiv(this.addr,t),be(e,t))}function mg(o,t){const e=this.cache;ye(e,t)||(o.uniform4uiv(this.addr,t),be(e,t))}function gg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Au,i)}function _g(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Lu,i)}function xg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Pu,i)}function vg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Cu,i)}function Mg(o){switch(o){case 5126:return eg;case 35664:return ng;case 35665:return ig;case 35666:return rg;case 35674:return sg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return ug;case 35669:case 35673:return hg;case 5125:return fg;case 36294:return dg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return vg}}function yg(o,t){o.uniform1fv(this.addr,t)}function bg(o,t){const e=Rr(t,this.size,2);o.uniform2fv(this.addr,e)}function Sg(o,t){const e=Rr(t,this.size,3);o.uniform3fv(this.addr,e)}function wg(o,t){const e=Rr(t,this.size,4);o.uniform4fv(this.addr,e)}function Tg(o,t){const e=Rr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Eg(o,t){const e=Rr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Ag(o,t){const e=Rr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Cg(o,t){o.uniform1iv(this.addr,t)}function Lg(o,t){o.uniform2iv(this.addr,t)}function Pg(o,t){o.uniform3iv(this.addr,t)}function Dg(o,t){o.uniform4iv(this.addr,t)}function Rg(o,t){o.uniform1uiv(this.addr,t)}function Ig(o,t){o.uniform2uiv(this.addr,t)}function Og(o,t){o.uniform3uiv(this.addr,t)}function Fg(o,t){o.uniform4uiv(this.addr,t)}function Ng(o,t,e){const n=t.length,i=aa(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2D(t[r]||Au,i[r])}function zg(o,t,e){const n=t.length,i=aa(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Lu,i[r])}function Ug(o,t,e){const n=t.length,i=aa(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTextureCube(t[r]||Pu,i[r])}function Bg(o,t,e){const n=t.length,i=aa(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||Cu,i[r])}function kg(o){switch(o){case 5126:return yg;case 35664:return bg;case 35665:return Sg;case 35666:return wg;case 35674:return Tg;case 35675:return Eg;case 35676:return Ag;case 5124:case 35670:return Cg;case 35667:case 35671:return Lg;case 35668:case 35672:return Pg;case 35669:case 35673:return Dg;case 5125:return Rg;case 36294:return Ig;case 36295:return Og;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Bg}}class Gg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Mg(e.type)}}class Vg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=kg(e.type)}}class Wg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(t,e[s.id],n)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function bc(o,t){o.seq.push(t),o.map[t.id]=t}function Hg(o,t,e){const n=o.name,i=n.length;for(Za.lastIndex=0;;){const r=Za.exec(n),a=Za.lastIndex;let s=r[1];const c=r[2]==="]",l=r[3];if(c&&(s=s|0),l===void 0||l==="["&&a+2===i){bc(e,l===void 0?new Gg(s,o,t):new Vg(s,o,t));break}else{let h=e.map[s];h===void 0&&(h=new Wg(s),bc(e,h)),e=h}}}class Ns{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Hg(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const s=e[r],c=n[s.id];c.needsUpdate!==!1&&s.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Sc(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}let Xg=0;function qg(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===t?">":" "} ${s}: ${e[a]}`)}return n.join(`
`)}function jg(o){switch(o){case Di:return["Linear","( value )"];case Yt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function wc(o,t,e){const n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+qg(o.getShaderSource(t),a)}else return i}function Yg(o,t){const e=jg(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Zg(o,t){let e;switch(t){case mf:e="Linear";break;case gf:e="Reinhard";break;case _f:e="OptimizedCineon";break;case xf:e="ACESFilmic";break;case vf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $g(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gr).join(`
`)}function Kg(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jg(o,t){const e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(t,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),e[a]={type:r.type,location:o.getAttribLocation(t,a),locationSize:s}}return e}function Gr(o){return o!==""}function Tc(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ec(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(o){return o.replace(Qg,t_)}function t_(o,t){const e=Et[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return go(e)}const e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(o){return o.replace(e_,n_)}function n_(o,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Cc(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function i_(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===uu?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===qh?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===kr&&(t="SHADOWMAP_TYPE_VSM"),t}function r_(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case yr:case br:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function s_(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case br:t="ENVMAP_MODE_REFRACTION";break}return t}function a_(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Wo:t="ENVMAP_BLENDING_MULTIPLY";break;case df:t="ENVMAP_BLENDING_MIX";break;case pf:t="ENVMAP_BLENDING_ADD";break}return t}function o_(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function l_(o,t,e,n){const i=o.getContext(),r=e.defines;let a=e.vertexShader,s=e.fragmentShader;const c=i_(e),l=r_(e),u=s_(e),h=a_(e),f=o_(e),m=e.isWebGL2?"":$g(e),g=Kg(r),d=i.createProgram();let p,_,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Gr).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Gr).join(`
`),_.length>0&&(_+=`
`)):(p=[Cc(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),_=[m,Cc(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Et.tonemapping_pars_fragment:"",e.toneMapping!==Nn?Zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Et.encodings_pars_fragment,Yg("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),a=go(a),a=Tc(a,e),a=Ec(a,e),s=go(s),s=Tc(s,e),s=Ec(s,e),a=Ac(a),s=Ac(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=M+p+a,y=M+_+s,x=Sc(i,35633,b),A=Sc(i,35632,y);if(i.attachShader(d,x),i.attachShader(d,A),e.index0AttributeName!==void 0?i.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),o.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),D=i.getShaderInfoLog(x).trim(),H=i.getShaderInfoLog(A).trim();let J=!0,N=!0;if(i.getProgramParameter(d,35714)===!1){J=!1;const I=wc(i,x,"vertex"),B=wc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+I+`
`+B)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(D===""||H==="")&&(N=!1);N&&(this.diagnostics={runnable:J,programLog:w,vertexShader:{log:D,prefix:p},fragmentShader:{log:H,prefix:_}})}i.deleteShader(x),i.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new Ns(i,d)),L};let v;return this.getAttributes=function(){return v===void 0&&(v=Jg(i,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=e.shaderName,this.id=Xg++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=x,this.fragmentShader=A,this}let c_=0;class u_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new h_(t),e.set(t,n)),n}}class h_{constructor(t){this.id=c_++,this.code=t,this.usedTimes=0}}function f_(o,t,e,n,i,r,a){const s=new Xo,c=new u_,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,w,D,H,J){const N=H.fog,I=J.geometry,B=v.isMeshStandardMaterial?H.environment:null,q=(v.isMeshStandardMaterial?e:t).get(v.envMap||B),j=!!q&&q.mapping===ia?q.image.height:null,k=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const F=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,U=F!==void 0?F.length:0;let Q=0;I.morphAttributes.position!==void 0&&(Q=1),I.morphAttributes.normal!==void 0&&(Q=2),I.morphAttributes.color!==void 0&&(Q=3);let $,K,at,dt;if(k){const zt=dn[k];$=zt.vertexShader,K=zt.fragmentShader}else $=v.vertexShader,K=v.fragmentShader,c.update(v),at=c.getVertexShaderID(v),dt=c.getFragmentShaderID(v);const Y=o.getRenderTarget(),Ft=v.alphaTest>0,_t=v.clearcoat>0,Mt=v.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:v.type,vertexShader:$,fragmentShader:K,defines:v.defines,customVertexShaderID:at,customFragmentShaderID:dt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Y===null?o.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:Di,map:!!v.map,matcap:!!v.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:j,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Uf,tangentSpaceNormalMap:v.normalMapType===sa,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Yt,clearcoat:_t,clearcoatMap:_t&&!!v.clearcoatMap,clearcoatRoughnessMap:_t&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:_t&&!!v.clearcoatNormalMap,iridescence:Mt,iridescenceMap:Mt&&!!v.iridescenceMap,iridescenceThicknessMap:Mt&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===pr,alphaMap:!!v.alphaMap,alphaTest:Ft,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!I.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!N,useFog:v.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:J.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:o.shadowMap.enabled&&D.length>0,shadowMapType:o.shadowMap.type,toneMapping:v.toneMapped?o.toneMapping:Nn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Pn,flipSided:v.side===tn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)w.push(D),w.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(w,v),M(w,v),w.push(o.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),v.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.physicallyCorrectLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),v.push(s.mask)}function b(v){const w=g[v.type];let D;if(w){const H=dn[w];D=td.clone(H.uniforms)}else D=v.uniforms;return D}function y(v,w){let D;for(let H=0,J=l.length;H<J;H++){const N=l[H];if(N.cacheKey===w){D=N,++D.usedTimes;break}}return D===void 0&&(D=new l_(o,w,v,r),l.push(D)),D}function x(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),v.destroy()}}function A(v){c.remove(v)}function L(){c.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:b,acquireProgram:y,releaseProgram:x,releaseShaderCache:A,programs:l,dispose:L}}function d_(){let o=new WeakMap;function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function e(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function p_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Lc(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Pc(){const o=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,m,g,d,p){let _=o[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},o[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=p),t++,_}function s(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function c(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function l(h,f){e.length>1&&e.sort(h||p_),n.length>1&&n.sort(f||Lc),i.length>1&&i.sort(f||Lc)}function u(){for(let h=t,f=o.length;h<f;h++){const m=o[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:s,unshift:c,finish:u,sort:l}}function m_(){let o=new WeakMap;function t(n,i){const r=o.get(n);let a;return r===void 0?(a=new Pc,o.set(n,[a])):i>=r.length?(a=new Pc,r.push(a)):a=r[i],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function g_(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ot};break;case"SpotLight":e={position:new R,direction:new R,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new R,halfWidth:new R,halfHeight:new R};break}return o[t.id]=e,e}}}function __(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let x_=0;function v_(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function M_(o,t){const e=new g_,n=__(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new R);const r=new R,a=new ie,s=new ie;function c(u,h){let f=0,m=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let d=0,p=0,_=0,M=0,b=0,y=0,x=0,A=0,L=0,v=0;u.sort(v_);const w=h!==!0?Math.PI:1;for(let H=0,J=u.length;H<J;H++){const N=u[H],I=N.color,B=N.intensity,q=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=I.r*B*w,m+=I.g*B*w,g+=I.b*B*w;else if(N.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(N.sh.coefficients[k],B);else if(N.isDirectionalLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const F=N.shadow,U=n.get(N);U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,i.directionalShadow[d]=U,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=N.shadow.matrix,y++}i.directional[d]=k,d++}else if(N.isSpotLight){const k=e.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(I).multiplyScalar(B*w),k.distance=q,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,i.spot[_]=k;const F=N.shadow;if(N.map&&(i.spotLightMap[L]=N.map,L++,F.updateMatrices(N),N.castShadow&&v++),i.spotLightMatrix[_]=F.matrix,N.castShadow){const U=n.get(N);U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=j,A++}_++}else if(N.isRectAreaLight){const k=e.get(N);k.color.copy(I).multiplyScalar(B),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),i.rectArea[M]=k,M++}else if(N.isPointLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*w),k.distance=N.distance,k.decay=N.decay,N.castShadow){const F=N.shadow,U=n.get(N);U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,U.shadowCameraNear=F.camera.near,U.shadowCameraFar=F.camera.far,i.pointShadow[p]=U,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=N.shadow.matrix,x++}i.point[p]=k,p++}else if(N.isHemisphereLight){const k=e.get(N);k.skyColor.copy(N.color).multiplyScalar(B*w),k.groundColor.copy(N.groundColor).multiplyScalar(B*w),i.hemi[b]=k,b++}}M>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==d||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==M||D.hemiLength!==b||D.numDirectionalShadows!==y||D.numPointShadows!==x||D.numSpotShadows!==A||D.numSpotMaps!==L)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=M,i.point.length=p,i.hemi.length=b,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=A+L-v,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=v,D.directionalLength=d,D.pointLength=p,D.spotLength=_,D.rectAreaLength=M,D.hemiLength=b,D.numDirectionalShadows=y,D.numPointShadows=x,D.numSpotShadows=A,D.numSpotMaps=L,i.version=x_++)}function l(u,h){let f=0,m=0,g=0,d=0,p=0;const _=h.matrixWorldInverse;for(let M=0,b=u.length;M<b;M++){const y=u[M];if(y.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),f++}else if(y.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const x=i.rectArea[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(_),s.identity(),a.copy(y.matrixWorld),a.premultiply(_),s.extractRotation(a),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),d++}else if(y.isPointLight){const x=i.point[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const x=i.hemi[p];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(_),p++}}}return{setup:c,setupView:l,state:i}}function Dc(o,t){const e=new M_(o,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function s(h){i.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:s}}function y_(o,t){let e=new WeakMap;function n(r,a=0){const s=e.get(r);let c;return s===void 0?(c=new Dc(o,t),e.set(r,[c])):a>=s.length?(c=new Dc(o,t),s.push(c)):c=s[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class b_ extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class S_ extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const w_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
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
}`;function E_(o,t,e){let n=new jo;const i=new bt,r=new bt,a=new Ht,s=new b_({depthPacking:zf}),c=new S_,l={},u=e.maxTextureSize,h={0:tn,1:Mr,2:Pn},f=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:w_,fragmentShader:T_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new xn;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new gt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu,this.render=function(y,x,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const L=o.getRenderTarget(),v=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),D=o.state;D.setBlending(Jn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let H=0,J=y.length;H<J;H++){const N=y[H],I=N.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const B=I.getFrameExtents();if(i.multiply(B),r.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/B.x),i.x=r.x*B.x,I.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/B.y),i.y=r.y*B.y,I.mapSize.y=r.y)),I.map===null){const j=this.type!==kr?{minFilter:Se,magFilter:Se}:{};I.map=new Ri(i.x,i.y,j),I.map.texture.name=N.name+".shadowMap",I.camera.updateProjectionMatrix()}o.setRenderTarget(I.map),o.clear();const q=I.getViewportCount();for(let j=0;j<q;j++){const k=I.getViewport(j);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),D.viewport(a),I.updateMatrices(N,j),n=I.getFrustum(),b(x,A,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===kr&&_(I,A),I.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(L,v,w)};function _(y,x){const A=t.update(d);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ri(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,o.setRenderTarget(y.mapPass),o.clear(),o.renderBufferDirect(x,null,A,f,d,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,o.setRenderTarget(y.map),o.clear(),o.renderBufferDirect(x,null,A,m,d,null)}function M(y,x,A,L,v,w){let D=null;const H=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(H!==void 0?D=H:D=A.isPointLight===!0?c:s,o.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const J=D.uuid,N=x.uuid;let I=l[J];I===void 0&&(I={},l[J]=I);let B=I[N];B===void 0&&(B=D.clone(),I[N]=B),D=B}return D.visible=x.visible,D.wireframe=x.wireframe,w===kr?D.side=x.shadowSide!==null?x.shadowSide:x.side:D.side=x.shadowSide!==null?x.shadowSide:h[x.side],D.alphaMap=x.alphaMap,D.alphaTest=x.alphaTest,D.clipShadows=x.clipShadows,D.clippingPlanes=x.clippingPlanes,D.clipIntersection=x.clipIntersection,D.displacementMap=x.displacementMap,D.displacementScale=x.displacementScale,D.displacementBias=x.displacementBias,D.wireframeLinewidth=x.wireframeLinewidth,D.linewidth=x.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=L,D.farDistance=v),D}function b(y,x,A,L,v){if(y.visible===!1)return;if(y.layers.test(x.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===kr)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const H=t.update(y),J=y.material;if(Array.isArray(J)){const N=H.groups;for(let I=0,B=N.length;I<B;I++){const q=N[I],j=J[q.materialIndex];if(j&&j.visible){const k=M(y,j,L,A.near,A.far,v);o.renderBufferDirect(A,null,H,k,y,q)}}}else if(J.visible){const N=M(y,J,L,A.near,A.far,v);o.renderBufferDirect(A,null,H,N,y,null)}}const D=y.children;for(let H=0,J=D.length;H<J;H++)b(D[H],x,A,L,v)}}function A_(o,t,e){const n=e.isWebGL2;function i(){let P=!1;const rt=new Ht;let G=null;const ht=new Ht(0,0,0,0);return{setMask:function(ct){G!==ct&&!P&&(o.colorMask(ct,ct,ct,ct),G=ct)},setLocked:function(ct){P=ct},setClear:function(ct,Rt,le,Kt,kn){kn===!0&&(ct*=Kt,Rt*=Kt,le*=Kt),rt.set(ct,Rt,le,Kt),ht.equals(rt)===!1&&(o.clearColor(ct,Rt,le,Kt),ht.copy(rt))},reset:function(){P=!1,G=null,ht.set(-1,0,0,0)}}}function r(){let P=!1,rt=null,G=null,ht=null;return{setTest:function(ct){ct?Ft(2929):_t(2929)},setMask:function(ct){rt!==ct&&!P&&(o.depthMask(ct),rt=ct)},setFunc:function(ct){if(G!==ct){if(ct)switch(ct){case af:o.depthFunc(512);break;case of:o.depthFunc(519);break;case lf:o.depthFunc(513);break;case lo:o.depthFunc(515);break;case cf:o.depthFunc(514);break;case uf:o.depthFunc(518);break;case hf:o.depthFunc(516);break;case ff:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);G=ct}},setLocked:function(ct){P=ct},setClear:function(ct){ht!==ct&&(o.clearDepth(ct),ht=ct)},reset:function(){P=!1,rt=null,G=null,ht=null}}}function a(){let P=!1,rt=null,G=null,ht=null,ct=null,Rt=null,le=null,Kt=null,kn=null;return{setTest:function(qt){P||(qt?Ft(2960):_t(2960))},setMask:function(qt){rt!==qt&&!P&&(o.stencilMask(qt),rt=qt)},setFunc:function(qt,Mn,Ve){(G!==qt||ht!==Mn||ct!==Ve)&&(o.stencilFunc(qt,Mn,Ve),G=qt,ht=Mn,ct=Ve)},setOp:function(qt,Mn,Ve){(Rt!==qt||le!==Mn||Kt!==Ve)&&(o.stencilOp(qt,Mn,Ve),Rt=qt,le=Mn,Kt=Ve)},setLocked:function(qt){P=qt},setClear:function(qt){kn!==qt&&(o.clearStencil(qt),kn=qt)},reset:function(){P=!1,rt=null,G=null,ht=null,ct=null,Rt=null,le=null,Kt=null,kn=null}}}const s=new i,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,_=!1,M=null,b=null,y=null,x=null,A=null,L=null,v=null,w=!1,D=null,H=null,J=null,N=null,I=null;const B=o.getParameter(35661);let q=!1,j=0;const k=o.getParameter(7938);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),q=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),q=j>=2);let F=null,U={};const Q=o.getParameter(3088),$=o.getParameter(2978),K=new Ht().fromArray(Q),at=new Ht().fromArray($);function dt(P,rt,G){const ht=new Uint8Array(4),ct=o.createTexture();o.bindTexture(P,ct),o.texParameteri(P,10241,9728),o.texParameteri(P,10240,9728);for(let Rt=0;Rt<G;Rt++)o.texImage2D(rt+Rt,0,6408,1,1,0,6408,5121,ht);return ct}const Y={};Y[3553]=dt(3553,3553,1),Y[34067]=dt(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ft(2929),c.setFunc(lo),re(!1),Le(Ml),Ft(2884),Qt(Jn);function Ft(P){f[P]!==!0&&(o.enable(P),f[P]=!0)}function _t(P){f[P]!==!1&&(o.disable(P),f[P]=!1)}function Mt(P,rt){return m[P]!==rt?(o.bindFramebuffer(P,rt),m[P]=rt,n&&(P===36009&&(m[36160]=rt),P===36160&&(m[36009]=rt)),!0):!1}function ft(P,rt){let G=d,ht=!1;if(P)if(G=g.get(rt),G===void 0&&(G=[],g.set(rt,G)),P.isWebGLMultipleRenderTargets){const ct=P.texture;if(G.length!==ct.length||G[0]!==36064){for(let Rt=0,le=ct.length;Rt<le;Rt++)G[Rt]=36064+Rt;G.length=ct.length,ht=!0}}else G[0]!==36064&&(G[0]=36064,ht=!0);else G[0]!==1029&&(G[0]=1029,ht=!0);ht&&(e.isWebGL2?o.drawBuffers(G):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(G))}function zt(P){return p!==P?(o.useProgram(P),p=P,!0):!1}const wt={[ur]:32774,[Yh]:32778,[Zh]:32779};if(n)wt[wl]=32775,wt[Tl]=32776;else{const P=t.get("EXT_blend_minmax");P!==null&&(wt[wl]=P.MIN_EXT,wt[Tl]=P.MAX_EXT)}const mt={[$h]:0,[Kh]:1,[Jh]:768,[hu]:770,[sf]:776,[nf]:774,[tf]:772,[Qh]:769,[fu]:771,[rf]:775,[ef]:773};function Qt(P,rt,G,ht,ct,Rt,le,Kt){if(P===Jn){_===!0&&(_t(3042),_=!1);return}if(_===!1&&(Ft(3042),_=!0),P!==jh){if(P!==M||Kt!==w){if((b!==ur||A!==ur)&&(o.blendEquation(32774),b=ur,A=ur),Kt)switch(P){case pr:o.blendFuncSeparate(1,771,1,771);break;case yl:o.blendFunc(1,1);break;case bl:o.blendFuncSeparate(0,769,0,1);break;case Sl:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case pr:o.blendFuncSeparate(770,771,1,771);break;case yl:o.blendFunc(770,1);break;case bl:o.blendFuncSeparate(0,769,0,1);break;case Sl:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,x=null,L=null,v=null,M=P,w=Kt}return}ct=ct||rt,Rt=Rt||G,le=le||ht,(rt!==b||ct!==A)&&(o.blendEquationSeparate(wt[rt],wt[ct]),b=rt,A=ct),(G!==y||ht!==x||Rt!==L||le!==v)&&(o.blendFuncSeparate(mt[G],mt[ht],mt[Rt],mt[le]),y=G,x=ht,L=Rt,v=le),M=P,w=null}function he(P,rt){P.side===Pn?_t(2884):Ft(2884);let G=P.side===tn;rt&&(G=!G),re(G),P.blending===pr&&P.transparent===!1?Qt(Jn):Qt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),s.setMask(P.colorWrite);const ht=P.stencilWrite;l.setTest(ht),ht&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ut(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ft(32926):_t(32926)}function re(P){D!==P&&(P?o.frontFace(2304):o.frontFace(2305),D=P)}function Le(P){P!==Hh?(Ft(2884),P!==H&&(P===Ml?o.cullFace(1029):P===Xh?o.cullFace(1028):o.cullFace(1032))):_t(2884),H=P}function se(P){P!==J&&(q&&o.lineWidth(P),J=P)}function Ut(P,rt,G){P?(Ft(32823),(N!==rt||I!==G)&&(o.polygonOffset(rt,G),N=rt,I=G)):_t(32823)}function Ge(P){P?Ft(3089):_t(3089)}function Pe(P){P===void 0&&(P=33984+B-1),F!==P&&(o.activeTexture(P),F=P)}function C(P,rt){F===null&&Pe();let G=U[F];G===void 0&&(G={type:void 0,texture:void 0},U[F]=G),(G.type!==P||G.texture!==rt)&&(o.bindTexture(P,rt||Y[P]),G.type=P,G.texture=rt)}function S(){const P=U[F];P!==void 0&&P.type!==void 0&&(o.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function V(){try{o.compressedTexImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{o.texSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{o.texSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{o.texStorage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function T(){try{o.texStorage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{o.texImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{o.texImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(P){K.equals(P)===!1&&(o.scissor(P.x,P.y,P.z,P.w),K.copy(P))}function st(P){at.equals(P)===!1&&(o.viewport(P.x,P.y,P.z,P.w),at.copy(P))}function vt(P,rt){let G=h.get(rt);G===void 0&&(G=new WeakMap,h.set(rt,G));let ht=G.get(P);ht===void 0&&(ht=o.getUniformBlockIndex(rt,P.name),G.set(P,ht))}function At(P,rt){const ht=h.get(rt).get(P);u.get(P)!==ht&&(o.uniformBlockBinding(rt,ht,P.__bindingPointIndex),u.set(P,ht))}function Wt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},F=null,U={},m={},g=new WeakMap,d=[],p=null,_=!1,M=null,b=null,y=null,x=null,A=null,L=null,v=null,w=!1,D=null,H=null,J=null,N=null,I=null,K.set(0,0,o.canvas.width,o.canvas.height),at.set(0,0,o.canvas.width,o.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:Ft,disable:_t,bindFramebuffer:Mt,drawBuffers:ft,useProgram:zt,setBlending:Qt,setMaterial:he,setFlipSided:re,setCullFace:Le,setLineWidth:se,setPolygonOffset:Ut,setScissorTest:Ge,activeTexture:Pe,bindTexture:C,unbindTexture:S,compressedTexImage2D:V,texImage2D:Z,texImage3D:nt,updateUBOMapping:vt,uniformBlockBinding:At,texStorage2D:xt,texStorage3D:T,texSubImage2D:tt,texSubImage3D:et,compressedTexSubImage2D:ot,scissor:lt,viewport:st,reset:Wt}}function C_(o,t,e,n,i,r,a){const s=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,S){return _?new OffscreenCanvas(C,S):Zr("canvas")}function b(C,S,V,tt){let et=1;if((C.width>tt||C.height>tt)&&(et=tt/Math.max(C.width,C.height)),et<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ot=S?mo:Math.floor,xt=ot(et*C.width),T=ot(et*C.height);d===void 0&&(d=M(xt,T));const Z=V?M(xt,T):d;return Z.width=xt,Z.height=T,Z.getContext("2d").drawImage(C,0,0,xt,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+xt+"x"+T+")."),Z}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return Jl(C.width)&&Jl(C.height)}function x(C){return s?!1:C.wrapS!==cn||C.wrapT!==cn||C.minFilter!==Se&&C.minFilter!==Ye}function A(C,S){return C.generateMipmaps&&S&&C.minFilter!==Se&&C.minFilter!==Ye}function L(C){o.generateMipmap(C)}function v(C,S,V,tt,et=!1){if(s===!1)return S;if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ot=S;return S===6403&&(V===5126&&(ot=33326),V===5131&&(ot=33325),V===5121&&(ot=33321)),S===33319&&(V===5126&&(ot=33328),V===5131&&(ot=33327),V===5121&&(ot=33323)),S===6408&&(V===5126&&(ot=34836),V===5131&&(ot=34842),V===5121&&(ot=tt===Yt&&et===!1?35907:32856),V===32819&&(ot=32854),V===32820&&(ot=32855)),(ot===33325||ot===33326||ot===33327||ot===33328||ot===34842||ot===34836)&&t.get("EXT_color_buffer_float"),ot}function w(C,S,V){return A(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==Se&&C.minFilter!==Ye?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function D(C){return C===Se||C===El||C===Al?9728:9729}function H(C){const S=C.target;S.removeEventListener("dispose",H),N(S),S.isVideoTexture&&g.delete(S)}function J(C){const S=C.target;S.removeEventListener("dispose",J),B(S)}function N(C){const S=n.get(C);if(S.__webglInit===void 0)return;const V=C.source,tt=p.get(V);if(tt){const et=tt[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&I(C),Object.keys(tt).length===0&&p.delete(V)}n.remove(C)}function I(C){const S=n.get(C);o.deleteTexture(S.__webglTexture);const V=C.source,tt=p.get(V);delete tt[S.__cacheKey],a.memory.textures--}function B(C){const S=C.texture,V=n.get(C),tt=n.get(S);if(tt.__webglTexture!==void 0&&(o.deleteTexture(tt.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)o.deleteFramebuffer(V.__webglFramebuffer[et]),V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer[et]);else{if(o.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&o.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let et=0;et<V.__webglColorRenderbuffer.length;et++)V.__webglColorRenderbuffer[et]&&o.deleteRenderbuffer(V.__webglColorRenderbuffer[et]);V.__webglDepthRenderbuffer&&o.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let et=0,ot=S.length;et<ot;et++){const xt=n.get(S[et]);xt.__webglTexture&&(o.deleteTexture(xt.__webglTexture),a.memory.textures--),n.remove(S[et])}n.remove(S),n.remove(C)}let q=0;function j(){q=0}function k(){const C=q;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),q+=1,C}function F(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.encoding),S.join()}function U(C,S){const V=n.get(C);if(C.isVideoTexture&&Ge(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const tt=C.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(V,C,S);return}}e.activeTexture(33984+S),e.bindTexture(3553,V.__webglTexture)}function Q(C,S){const V=n.get(C);if(C.version>0&&V.__version!==C.version){_t(V,C,S);return}e.activeTexture(33984+S),e.bindTexture(35866,V.__webglTexture)}function $(C,S){const V=n.get(C);if(C.version>0&&V.__version!==C.version){_t(V,C,S);return}e.activeTexture(33984+S),e.bindTexture(32879,V.__webglTexture)}function K(C,S){const V=n.get(C);if(C.version>0&&V.__version!==C.version){Mt(V,C,S);return}e.activeTexture(33984+S),e.bindTexture(34067,V.__webglTexture)}const at={[ho]:10497,[cn]:33071,[fo]:33648},dt={[Se]:9728,[El]:9984,[Al]:9986,[Ye]:9729,[Mf]:9985,[ra]:9987};function Y(C,S,V){if(V?(o.texParameteri(C,10242,at[S.wrapS]),o.texParameteri(C,10243,at[S.wrapT]),(C===32879||C===35866)&&o.texParameteri(C,32882,at[S.wrapR]),o.texParameteri(C,10240,dt[S.magFilter]),o.texParameteri(C,10241,dt[S.minFilter])):(o.texParameteri(C,10242,33071),o.texParameteri(C,10243,33071),(C===32879||C===35866)&&o.texParameteri(C,32882,33071),(S.wrapS!==cn||S.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(C,10240,D(S.magFilter)),o.texParameteri(C,10241,D(S.minFilter)),S.minFilter!==Se&&S.minFilter!==Ye&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(S.type===xi&&t.has("OES_texture_float_linear")===!1||s===!1&&S.type===Yr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(C,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Ft(C,S){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",H));const tt=S.source;let et=p.get(tt);et===void 0&&(et={},p.set(tt,et));const ot=F(S);if(ot!==C.__cacheKey){et[ot]===void 0&&(et[ot]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,V=!0),et[ot].usedTimes++;const xt=et[C.__cacheKey];xt!==void 0&&(et[C.__cacheKey].usedTimes--,xt.usedTimes===0&&I(S)),C.__cacheKey=ot,C.__webglTexture=et[ot].texture}return V}function _t(C,S,V){let tt=3553;S.isDataArrayTexture&&(tt=35866),S.isData3DTexture&&(tt=32879);const et=Ft(C,S),ot=S.source;if(e.activeTexture(33984+V),e.bindTexture(tt,C.__webglTexture),ot.version!==ot.__currentVersion||et===!0){o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const xt=x(S)&&y(S.image)===!1;let T=b(S.image,xt,!1,u);T=Pe(S,T);const Z=y(T)||s,nt=r.convert(S.format,S.encoding);let lt=r.convert(S.type),st=v(S.internalFormat,nt,lt,S.encoding,S.isVideoTexture);Y(tt,S,Z);let vt;const At=S.mipmaps,Wt=s&&S.isVideoTexture!==!0,P=ot.__currentVersion===void 0||et===!0,rt=w(S,T,Z);if(S.isDepthTexture)st=6402,s?S.type===xi?st=36012:S.type===_i?st=33190:S.type===mr?st=35056:st=33189:S.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===wi&&st===6402&&S.type!==pu&&S.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=_i,lt=r.convert(S.type)),S.format===Sr&&st===6402&&(st=34041,S.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=mr,lt=r.convert(S.type))),P&&(Wt?e.texStorage2D(3553,1,st,T.width,T.height):e.texImage2D(3553,0,st,T.width,T.height,0,nt,lt,null));else if(S.isDataTexture)if(At.length>0&&Z){Wt&&P&&e.texStorage2D(3553,rt,st,At[0].width,At[0].height);for(let G=0,ht=At.length;G<ht;G++)vt=At[G],Wt?e.texSubImage2D(3553,G,0,0,vt.width,vt.height,nt,lt,vt.data):e.texImage2D(3553,G,st,vt.width,vt.height,0,nt,lt,vt.data);S.generateMipmaps=!1}else Wt?(P&&e.texStorage2D(3553,rt,st,T.width,T.height),e.texSubImage2D(3553,0,0,0,T.width,T.height,nt,lt,T.data)):e.texImage2D(3553,0,st,T.width,T.height,0,nt,lt,T.data);else if(S.isCompressedTexture){Wt&&P&&e.texStorage2D(3553,rt,st,At[0].width,At[0].height);for(let G=0,ht=At.length;G<ht;G++)vt=At[G],S.format!==mn?nt!==null?Wt?e.compressedTexSubImage2D(3553,G,0,0,vt.width,vt.height,nt,vt.data):e.compressedTexImage2D(3553,G,st,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(3553,G,0,0,vt.width,vt.height,nt,lt,vt.data):e.texImage2D(3553,G,st,vt.width,vt.height,0,nt,lt,vt.data)}else if(S.isDataArrayTexture)Wt?(P&&e.texStorage3D(35866,rt,st,T.width,T.height,T.depth),e.texSubImage3D(35866,0,0,0,0,T.width,T.height,T.depth,nt,lt,T.data)):e.texImage3D(35866,0,st,T.width,T.height,T.depth,0,nt,lt,T.data);else if(S.isData3DTexture)Wt?(P&&e.texStorage3D(32879,rt,st,T.width,T.height,T.depth),e.texSubImage3D(32879,0,0,0,0,T.width,T.height,T.depth,nt,lt,T.data)):e.texImage3D(32879,0,st,T.width,T.height,T.depth,0,nt,lt,T.data);else if(S.isFramebufferTexture){if(P)if(Wt)e.texStorage2D(3553,rt,st,T.width,T.height);else{let G=T.width,ht=T.height;for(let ct=0;ct<rt;ct++)e.texImage2D(3553,ct,st,G,ht,0,nt,lt,null),G>>=1,ht>>=1}}else if(At.length>0&&Z){Wt&&P&&e.texStorage2D(3553,rt,st,At[0].width,At[0].height);for(let G=0,ht=At.length;G<ht;G++)vt=At[G],Wt?e.texSubImage2D(3553,G,0,0,nt,lt,vt):e.texImage2D(3553,G,st,nt,lt,vt);S.generateMipmaps=!1}else Wt?(P&&e.texStorage2D(3553,rt,st,T.width,T.height),e.texSubImage2D(3553,0,0,0,nt,lt,T)):e.texImage2D(3553,0,st,nt,lt,T);A(S,Z)&&L(tt),ot.__currentVersion=ot.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Mt(C,S,V){if(S.image.length!==6)return;const tt=Ft(C,S),et=S.source;if(e.activeTexture(33984+V),e.bindTexture(34067,C.__webglTexture),et.version!==et.__currentVersion||tt===!0){o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const ot=S.isCompressedTexture||S.image[0].isCompressedTexture,xt=S.image[0]&&S.image[0].isDataTexture,T=[];for(let G=0;G<6;G++)!ot&&!xt?T[G]=b(S.image[G],!1,!0,l):T[G]=xt?S.image[G].image:S.image[G],T[G]=Pe(S,T[G]);const Z=T[0],nt=y(Z)||s,lt=r.convert(S.format,S.encoding),st=r.convert(S.type),vt=v(S.internalFormat,lt,st,S.encoding),At=s&&S.isVideoTexture!==!0,Wt=et.__currentVersion===void 0||tt===!0;let P=w(S,Z,nt);Y(34067,S,nt);let rt;if(ot){At&&Wt&&e.texStorage2D(34067,P,vt,Z.width,Z.height);for(let G=0;G<6;G++){rt=T[G].mipmaps;for(let ht=0;ht<rt.length;ht++){const ct=rt[ht];S.format!==mn?lt!==null?At?e.compressedTexSubImage2D(34069+G,ht,0,0,ct.width,ct.height,lt,ct.data):e.compressedTexImage2D(34069+G,ht,vt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?e.texSubImage2D(34069+G,ht,0,0,ct.width,ct.height,lt,st,ct.data):e.texImage2D(34069+G,ht,vt,ct.width,ct.height,0,lt,st,ct.data)}}}else{rt=S.mipmaps,At&&Wt&&(rt.length>0&&P++,e.texStorage2D(34067,P,vt,T[0].width,T[0].height));for(let G=0;G<6;G++)if(xt){At?e.texSubImage2D(34069+G,0,0,0,T[G].width,T[G].height,lt,st,T[G].data):e.texImage2D(34069+G,0,vt,T[G].width,T[G].height,0,lt,st,T[G].data);for(let ht=0;ht<rt.length;ht++){const Rt=rt[ht].image[G].image;At?e.texSubImage2D(34069+G,ht+1,0,0,Rt.width,Rt.height,lt,st,Rt.data):e.texImage2D(34069+G,ht+1,vt,Rt.width,Rt.height,0,lt,st,Rt.data)}}else{At?e.texSubImage2D(34069+G,0,0,0,lt,st,T[G]):e.texImage2D(34069+G,0,vt,lt,st,T[G]);for(let ht=0;ht<rt.length;ht++){const ct=rt[ht];At?e.texSubImage2D(34069+G,ht+1,0,0,lt,st,ct.image[G]):e.texImage2D(34069+G,ht+1,vt,lt,st,ct.image[G])}}}A(S,nt)&&L(34067),et.__currentVersion=et.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ft(C,S,V,tt,et){const ot=r.convert(V.format,V.encoding),xt=r.convert(V.type),T=v(V.internalFormat,ot,xt,V.encoding);n.get(S).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,T,S.width,S.height,S.depth,0,ot,xt,null):e.texImage2D(et,0,T,S.width,S.height,0,ot,xt,null)),e.bindFramebuffer(36160,C),Ut(S)?f.framebufferTexture2DMultisampleEXT(36160,tt,et,n.get(V).__webglTexture,0,se(S)):o.framebufferTexture2D(36160,tt,et,n.get(V).__webglTexture,0),e.bindFramebuffer(36160,null)}function zt(C,S,V){if(o.bindRenderbuffer(36161,C),S.depthBuffer&&!S.stencilBuffer){let tt=33189;if(V||Ut(S)){const et=S.depthTexture;et&&et.isDepthTexture&&(et.type===xi?tt=36012:et.type===_i&&(tt=33190));const ot=se(S);Ut(S)?f.renderbufferStorageMultisampleEXT(36161,ot,tt,S.width,S.height):o.renderbufferStorageMultisample(36161,ot,tt,S.width,S.height)}else o.renderbufferStorage(36161,tt,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,C)}else if(S.depthBuffer&&S.stencilBuffer){const tt=se(S);V&&Ut(S)===!1?o.renderbufferStorageMultisample(36161,tt,35056,S.width,S.height):Ut(S)?f.renderbufferStorageMultisampleEXT(36161,tt,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,C)}else{const tt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let et=0;et<tt.length;et++){const ot=tt[et],xt=r.convert(ot.format,ot.encoding),T=r.convert(ot.type),Z=v(ot.internalFormat,xt,T,ot.encoding),nt=se(S);V&&Ut(S)===!1?o.renderbufferStorageMultisample(36161,nt,Z,S.width,S.height):Ut(S)?f.renderbufferStorageMultisampleEXT(36161,nt,Z,S.width,S.height):o.renderbufferStorage(36161,Z,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function wt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);const tt=n.get(S.depthTexture).__webglTexture,et=se(S);if(S.depthTexture.format===wi)Ut(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,et):o.framebufferTexture2D(36160,36096,3553,tt,0);else if(S.depthTexture.format===Sr)Ut(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,et):o.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function mt(C){const S=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");wt(S.__webglFramebuffer,C)}else if(V){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]=o.createRenderbuffer(),zt(S.__webglDepthbuffer[tt],C,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),zt(S.__webglDepthbuffer,C,!1);e.bindFramebuffer(36160,null)}function Qt(C,S,V){const tt=n.get(C);S!==void 0&&ft(tt.__webglFramebuffer,C,C.texture,36064,3553),V!==void 0&&mt(C)}function he(C){const S=C.texture,V=n.get(C),tt=n.get(S);C.addEventListener("dispose",J),C.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture()),tt.__version=S.version,a.memory.textures++);const et=C.isWebGLCubeRenderTarget===!0,ot=C.isWebGLMultipleRenderTargets===!0,xt=y(C)||s;if(et){V.__webglFramebuffer=[];for(let T=0;T<6;T++)V.__webglFramebuffer[T]=o.createFramebuffer()}else{if(V.__webglFramebuffer=o.createFramebuffer(),ot)if(i.drawBuffers){const T=C.texture;for(let Z=0,nt=T.length;Z<nt;Z++){const lt=n.get(T[Z]);lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&C.samples>0&&Ut(C)===!1){const T=ot?S:[S];V.__webglMultisampledFramebuffer=o.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let Z=0;Z<T.length;Z++){const nt=T[Z];V.__webglColorRenderbuffer[Z]=o.createRenderbuffer(),o.bindRenderbuffer(36161,V.__webglColorRenderbuffer[Z]);const lt=r.convert(nt.format,nt.encoding),st=r.convert(nt.type),vt=v(nt.internalFormat,lt,st,nt.encoding),At=se(C);o.renderbufferStorageMultisample(36161,At,vt,C.width,C.height),o.framebufferRenderbuffer(36160,36064+Z,36161,V.__webglColorRenderbuffer[Z])}o.bindRenderbuffer(36161,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=o.createRenderbuffer(),zt(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,tt.__webglTexture),Y(34067,S,xt);for(let T=0;T<6;T++)ft(V.__webglFramebuffer[T],C,S,36064,34069+T);A(S,xt)&&L(34067),e.unbindTexture()}else if(ot){const T=C.texture;for(let Z=0,nt=T.length;Z<nt;Z++){const lt=T[Z],st=n.get(lt);e.bindTexture(3553,st.__webglTexture),Y(3553,lt,xt),ft(V.__webglFramebuffer,C,lt,36064+Z,3553),A(lt,xt)&&L(3553)}e.unbindTexture()}else{let T=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(s?T=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(T,tt.__webglTexture),Y(T,S,xt),ft(V.__webglFramebuffer,C,S,36064,T),A(S,xt)&&L(T),e.unbindTexture()}C.depthBuffer&&mt(C)}function re(C){const S=y(C)||s,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let tt=0,et=V.length;tt<et;tt++){const ot=V[tt];if(A(ot,S)){const xt=C.isWebGLCubeRenderTarget?34067:3553,T=n.get(ot).__webglTexture;e.bindTexture(xt,T),L(xt),e.unbindTexture()}}}function Le(C){if(s&&C.samples>0&&Ut(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,tt=C.height;let et=16384;const ot=[],xt=C.stencilBuffer?33306:36096,T=n.get(C),Z=C.isWebGLMultipleRenderTargets===!0;if(Z)for(let nt=0;nt<S.length;nt++)e.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+nt,36161,null),e.bindFramebuffer(36160,T.__webglFramebuffer),o.framebufferTexture2D(36009,36064+nt,3553,null,0);e.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,T.__webglFramebuffer);for(let nt=0;nt<S.length;nt++){ot.push(36064+nt),C.depthBuffer&&ot.push(xt);const lt=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(lt===!1&&(C.depthBuffer&&(et|=256),C.stencilBuffer&&(et|=1024)),Z&&o.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[nt]),lt===!0&&(o.invalidateFramebuffer(36008,[xt]),o.invalidateFramebuffer(36009,[xt])),Z){const st=n.get(S[nt]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,st,0)}o.blitFramebuffer(0,0,V,tt,0,0,V,tt,et,9728),m&&o.invalidateFramebuffer(36008,ot)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),Z)for(let nt=0;nt<S.length;nt++){e.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+nt,36161,T.__webglColorRenderbuffer[nt]);const lt=n.get(S[nt]).__webglTexture;e.bindFramebuffer(36160,T.__webglFramebuffer),o.framebufferTexture2D(36009,36064+nt,3553,lt,0)}e.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function se(C){return Math.min(h,C.samples)}function Ut(C){const S=n.get(C);return s&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ge(C){const S=a.render.frame;g.get(C)!==S&&(g.set(C,S),C.update())}function Pe(C,S){const V=C.encoding,tt=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===po||V!==Di&&(V===Yt?s===!1?t.has("EXT_sRGB")===!0&&tt===mn?(C.format=po,C.minFilter=Ye,C.generateMipmaps=!1):S=_u.sRGBToLinear(S):(tt!==mn||et!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),S}this.allocateTextureUnit=k,this.resetTextureUnits=j,this.setTexture2D=U,this.setTexture2DArray=Q,this.setTexture3D=$,this.setTextureCube=K,this.rebindTextures=Qt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Ut}function L_(o,t,e){const n=e.isWebGL2;function i(r,a=null){let s;if(r===Pi)return 5121;if(r===wf)return 32819;if(r===Tf)return 32820;if(r===yf)return 5120;if(r===bf)return 5122;if(r===pu)return 5123;if(r===Sf)return 5124;if(r===_i)return 5125;if(r===xi)return 5126;if(r===Yr)return n?5131:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Ef)return 6406;if(r===mn)return 6408;if(r===Cf)return 6409;if(r===Lf)return 6410;if(r===wi)return 6402;if(r===Sr)return 34041;if(r===Pf)return 6403;if(r===Af)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===po)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Df)return 36244;if(r===Rf)return 33319;if(r===If)return 33320;if(r===Of)return 36249;if(r===va||r===Ma||r===ya||r===ba)if(a===Yt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===va)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===va)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ma)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ya)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cl||r===Ll||r===Pl||r===Dl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Cl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ll)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ff)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rl||r===Il)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Rl)return a===Yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Il)return a===Yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ol||r===Fl||r===Nl||r===zl||r===Ul||r===Bl||r===kl||r===Gl||r===Vl||r===Wl||r===Hl||r===Xl||r===ql||r===jl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Ol)return a===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fl)return a===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nl)return a===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zl)return a===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ul)return a===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bl)return a===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kl)return a===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gl)return a===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vl)return a===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wl)return a===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hl)return a===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xl)return a===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ql)return a===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jl)return a===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===Yl)return a===Yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===mr?n?34042:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class P_ extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Is extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D_={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const s=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const d of t.hand.values()){const p=e.getJointPose(d,n);if(l.joints[d.jointName]===void 0){const M=new Is;M.matrixAutoUpdate=!1,M.visible=!1,l.joints[d.jointName]=M,l.add(M)}const _=l.joints[d.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(D_)))}return s!==null&&(s.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}}class R_ extends nn{constructor(t,e,n,i,r,a,s,c,l,u){if(u=u!==void 0?u:wi,u!==wi&&u!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===wi&&(n=_i),n===void 0&&u===Sr&&(n=mr),super(null,i,r,a,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:Se,this.minFilter=c!==void 0?c:Se,this.flipY=!1,this.generateMipmaps=!1}}class I_ extends ki{constructor(t,e){super();const n=this;let i=null,r=1,a=null,s="local-floor",c=null,l=null,u=null,h=null,f=null,m=null;const g=e.getContextAttributes();let d=null,p=null;const _=[],M=[],b=new Ne;b.layers.enable(1),b.viewport=new Ht;const y=new Ne;y.layers.enable(2),y.viewport=new Ht;const x=[b,y],A=new P_;A.layers.enable(1),A.layers.enable(2);let L=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let U=_[F];return U===void 0&&(U=new $a,_[F]=U),U.getTargetRaySpace()},this.getControllerGrip=function(F){let U=_[F];return U===void 0&&(U=new $a,_[F]=U),U.getGripSpace()},this.getHand=function(F){let U=_[F];return U===void 0&&(U=new $a,_[F]=U),U.getHandSpace()};function w(F){const U=M.indexOf(F.inputSource);if(U===-1)return;const Q=_[U];Q!==void 0&&Q.dispatchEvent({type:F.type,data:F.inputSource})}function D(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",H);for(let F=0;F<_.length;F++){const U=M[F];U!==null&&(M[F]=null,_[F].disconnect(U))}L=null,v=null,t.setRenderTarget(d),f=null,h=null,u=null,i=null,p=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",D),i.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const U={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,U),i.updateRenderState({baseLayer:f}),p=new Ri(f.framebufferWidth,f.framebufferHeight,{format:mn,type:Pi,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let U=null,Q=null,$=null;g.depth&&($=g.stencil?35056:33190,U=g.stencil?Sr:wi,Q=g.stencil?mr:_i);const K={colorFormat:32856,depthFormat:$,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(K),i.updateRenderState({layers:[h]}),p=new Ri(h.textureWidth,h.textureHeight,{format:mn,type:Pi,depthTexture:new R_(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const at=t.properties.get(p);at.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await i.requestReferenceSpace(s),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function H(F){for(let U=0;U<F.removed.length;U++){const Q=F.removed[U],$=M.indexOf(Q);$>=0&&(M[$]=null,_[$].dispatchEvent({type:"disconnected",data:Q}))}for(let U=0;U<F.added.length;U++){const Q=F.added[U];let $=M.indexOf(Q);if($===-1){for(let at=0;at<_.length;at++)if(at>=M.length){M.push(Q),$=at;break}else if(M[at]===null){M[at]=Q,$=at;break}if($===-1)break}const K=_[$];K&&K.dispatchEvent({type:"connected",data:Q})}}const J=new R,N=new R;function I(F,U,Q){J.setFromMatrixPosition(U.matrixWorld),N.setFromMatrixPosition(Q.matrixWorld);const $=J.distanceTo(N),K=U.projectionMatrix.elements,at=Q.projectionMatrix.elements,dt=K[14]/(K[10]-1),Y=K[14]/(K[10]+1),Ft=(K[9]+1)/K[5],_t=(K[9]-1)/K[5],Mt=(K[8]-1)/K[0],ft=(at[8]+1)/at[0],zt=dt*Mt,wt=dt*ft,mt=$/(-Mt+ft),Qt=mt*-Mt;U.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Qt),F.translateZ(mt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const he=dt+mt,re=Y+mt,Le=zt-Qt,se=wt+($-Qt),Ut=Ft*Y/re*he,Ge=_t*Y/re*he;F.projectionMatrix.makePerspective(Le,se,Ut,Ge,he,re)}function B(F,U){U===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(U.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;A.near=y.near=b.near=F.near,A.far=y.far=b.far=F.far,(L!==A.near||v!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),L=A.near,v=A.far);const U=F.parent,Q=A.cameras;B(A,U);for(let K=0;K<Q.length;K++)B(Q[K],U);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),F.matrix.copy(A.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const $=F.children;for(let K=0,at=$.length;K<at;K++)$[K].updateMatrixWorld(!0);Q.length===2?I(A,b,y):A.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(F){h!==null&&(h.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)};let q=null;function j(F,U){if(l=U.getViewerPose(c||a),m=U,l!==null){const Q=l.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let $=!1;Q.length!==A.cameras.length&&(A.cameras.length=0,$=!0);for(let K=0;K<Q.length;K++){const at=Q[K];let dt=null;if(f!==null)dt=f.getViewport(at);else{const Ft=u.getViewSubImage(h,at);dt=Ft.viewport,K===0&&(t.setRenderTargetTextures(p,Ft.colorTexture,h.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(p))}let Y=x[K];Y===void 0&&(Y=new Ne,Y.layers.enable(K),Y.viewport=new Ht,x[K]=Y),Y.matrix.fromArray(at.transform.matrix),Y.projectionMatrix.fromArray(at.projectionMatrix),Y.viewport.set(dt.x,dt.y,dt.width,dt.height),K===0&&A.matrix.copy(Y.matrix),$===!0&&A.cameras.push(Y)}}for(let Q=0;Q<_.length;Q++){const $=M[Q],K=_[Q];$!==null&&K!==void 0&&K.update($,U,c||a)}q&&q(F,U),m=null}const k=new Tu;k.setAnimationLoop(j),this.setAnimationLoop=function(F){q=F},this.dispose=function(){}}}function O_(o,t){function e(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,M,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),l(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,b)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?s(d,p,_,M):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===tn&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===tn&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const y=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix));let b;p.aoMap?b=p.aoMap:p.lightMap&&(b=p.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uv2Transform.value.copy(b.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function s(d,p,_,M){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=M*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix))}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function l(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===tn&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function F_(o,t,e,n){let i={},r={},a=[];const s=e.isWebGL2?o.getParameter(35375):0;function c(M,b){const y=b.program;n.uniformBlockBinding(M,y)}function l(M,b){let y=i[M.id];y===void 0&&(g(M),y=u(M),i[M.id]=y,M.addEventListener("dispose",p));const x=b.program;n.updateUBOMapping(M,x);const A=t.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function u(M){const b=h();M.__bindingPointIndex=b;const y=o.createBuffer(),x=M.__size,A=M.usage;return o.bindBuffer(35345,y),o.bufferData(35345,x,A),o.bindBuffer(35345,null),o.bindBufferBase(35345,b,y),y}function h(){for(let M=0;M<s;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const b=i[M.id],y=M.uniforms,x=M.__cache;o.bindBuffer(35345,b);for(let A=0,L=y.length;A<L;A++){const v=y[A];if(m(v,A,x)===!0){const w=v.value,D=v.__offset;typeof w=="number"?(v.__data[0]=w,o.bufferSubData(35345,D,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):w.toArray(v.__data),o.bufferSubData(35345,D,v.__data))}}o.bindBuffer(35345,null)}function m(M,b,y){const x=M.value;if(y[b]===void 0)return typeof x=="number"?y[b]=x:y[b]=x.clone(),!0;if(typeof x=="number"){if(y[b]!==x)return y[b]=x,!0}else{const A=y[b];if(A.equals(x)===!1)return A.copy(x),!0}return!1}function g(M){const b=M.uniforms;let y=0;const x=16;let A=0;for(let L=0,v=b.length;L<v;L++){const w=b[L],D=d(w);if(w.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,L>0){A=y%x;const H=x-A;A!==0&&H-D.boundary<0&&(y+=x-A,w.__offset=y)}y+=D.storage}return A=y%x,A>0&&(y+=x-A),M.__size=y,M.__cache={},this}function d(M){const b=M.value,y={boundary:0,storage:0};return typeof b=="number"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(M){const b=M.target;b.removeEventListener("dispose",p);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),o.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function _(){for(const M in i)o.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:c,update:l,dispose:_}}function N_(){const o=Zr("canvas");return o.style.display="block",o}function Du(o={}){this.isWebGLRenderer=!0;const t=o.canvas!==void 0?o.canvas:N_(),e=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,c=o.powerPreference!==void 0?o.powerPreference:"default",l=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Di,this.physicallyCorrectLights=!1,this.toneMapping=Nn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let p=!1,_=0,M=0,b=null,y=-1,x=null;const A=new Ht,L=new Ht;let v=null,w=t.width,D=t.height,H=1,J=null,N=null;const I=new Ht(0,0,w,D),B=new Ht(0,0,w,D);let q=!1;const j=new jo;let k=!1,F=!1,U=null;const Q=new ie,$=new bt,K=new R,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function dt(){return b===null?H:1}let Y=e;function Ft(E,z){for(let W=0;W<E.length;W++){const O=E[W],X=t.getContext(O,z);if(X!==null)return X}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vo}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",At,!1),t.addEventListener("webglcontextcreationerror",Wt,!1),Y===null){const z=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&z.shift(),Y=Ft(z,E),Y===null)throw Ft(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let _t,Mt,ft,zt,wt,mt,Qt,he,re,Le,se,Ut,Ge,Pe,C,S,V,tt,et,ot,xt,T,Z,nt;function lt(){_t=new jm(Y),Mt=new Gm(Y,_t,o),_t.init(Mt),T=new L_(Y,_t,Mt),ft=new A_(Y,_t,Mt),zt=new $m,wt=new d_,mt=new C_(Y,_t,ft,wt,Mt,T,zt),Qt=new Wm(d),he=new qm(d),re=new od(Y,Mt),Z=new Bm(Y,_t,re,Mt),Le=new Ym(Y,re,zt,Z),se=new tg(Y,Le,re,zt),et=new Qm(Y,Mt,mt),S=new Vm(wt),Ut=new f_(d,Qt,he,_t,Mt,Z,S),Ge=new O_(d,wt),Pe=new m_,C=new y_(_t,Mt),tt=new Um(d,Qt,ft,se,u,a),V=new E_(d,se,Mt),nt=new F_(Y,zt,Mt,ft),ot=new km(Y,_t,zt,Mt),xt=new Zm(Y,_t,zt,Mt),zt.programs=Ut.programs,d.capabilities=Mt,d.extensions=_t,d.properties=wt,d.renderLists=Pe,d.shadowMap=V,d.state=ft,d.info=zt}lt();const st=new I_(d,Y);this.xr=st,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const E=_t.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=_t.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(w,D,!1))},this.getSize=function(E){return E.set(w,D)},this.setSize=function(E,z,W){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=E,D=z,t.width=Math.floor(E*H),t.height=Math.floor(z*H),W!==!1&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(w*H,D*H).floor()},this.setDrawingBufferSize=function(E,z,W){w=E,D=z,H=W,t.width=Math.floor(E*W),t.height=Math.floor(z*W),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,z,W,O){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,z,W,O),ft.viewport(A.copy(I).multiplyScalar(H).floor())},this.getScissor=function(E){return E.copy(B)},this.setScissor=function(E,z,W,O){E.isVector4?B.set(E.x,E.y,E.z,E.w):B.set(E,z,W,O),ft.scissor(L.copy(B).multiplyScalar(H).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(E){ft.setScissorTest(q=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){N=E},this.getClearColor=function(E){return E.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(E=!0,z=!0,W=!0){let O=0;E&&(O|=16384),z&&(O|=256),W&&(O|=1024),Y.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",Wt,!1),Pe.dispose(),C.dispose(),wt.dispose(),Qt.dispose(),he.dispose(),se.dispose(),Z.dispose(),nt.dispose(),Ut.dispose(),st.dispose(),st.removeEventListener("sessionstart",Rt),st.removeEventListener("sessionend",le),U&&(U.dispose(),U=null),Kt.stop()};function vt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=zt.autoReset,z=V.enabled,W=V.autoUpdate,O=V.needsUpdate,X=V.type;lt(),zt.autoReset=E,V.enabled=z,V.autoUpdate=W,V.needsUpdate=O,V.type=X}function Wt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function P(E){const z=E.target;z.removeEventListener("dispose",P),rt(z)}function rt(E){G(E),wt.remove(E)}function G(E){const z=wt.get(E).programs;z!==void 0&&(z.forEach(function(W){Ut.releaseProgram(W)}),E.isShaderMaterial&&Ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,W,O,X,pt){z===null&&(z=at);const yt=X.isMesh&&X.matrixWorld.determinant()<0,Tt=kh(E,z,W,O,X);ft.setMaterial(O,yt);let St=W.index;const Bt=W.attributes.position;if(St===null){if(Bt===void 0||Bt.count===0)return}else if(St.count===0)return;let Pt=1;O.wireframe===!0&&(St=Le.getWireframeAttribute(W),Pt=2),Z.setup(X,O,Tt,W,St);let Dt,jt=ot;St!==null&&(Dt=re.get(St),jt=xt,jt.setIndex(Dt));const si=St!==null?St.count:Bt.count,Hi=W.drawRange.start*Pt,Xi=W.drawRange.count*Pt,fn=pt!==null?pt.start*Pt:0,Nt=pt!==null?pt.count*Pt:1/0,qi=Math.max(Hi,fn),te=Math.min(si,Hi+Xi,fn+Nt)-1,We=Math.max(0,te-qi+1);if(We!==0){if(X.isMesh)O.wireframe===!0?(ft.setLineWidth(O.wireframeLinewidth*dt()),jt.setMode(1)):jt.setMode(4);else if(X.isLine){let Gn=O.linewidth;Gn===void 0&&(Gn=1),ft.setLineWidth(Gn*dt()),X.isLineSegments?jt.setMode(1):X.isLineLoop?jt.setMode(2):jt.setMode(3)}else X.isPoints?jt.setMode(0):X.isSprite&&jt.setMode(4);if(X.isInstancedMesh)jt.renderInstances(qi,We,X.count);else if(W.isInstancedBufferGeometry){const Gn=Math.min(W.instanceCount,W._maxInstanceCount);jt.renderInstances(qi,We,Gn)}else jt.render(qi,We)}},this.compile=function(E,z){function W(O,X,pt){O.transparent===!0&&O.side===Pn?(O.side=tn,O.needsUpdate=!0,hs(O,X,pt),O.side=Mr,O.needsUpdate=!0,hs(O,X,pt),O.side=Pn):hs(O,X,pt)}f=C.get(E),f.init(),g.push(f),E.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(d.physicallyCorrectLights),E.traverse(function(O){const X=O.material;if(X)if(Array.isArray(X))for(let pt=0;pt<X.length;pt++){const yt=X[pt];W(yt,E,O)}else W(X,E,O)}),g.pop(),f=null};let ht=null;function ct(E){ht&&ht(E)}function Rt(){Kt.stop()}function le(){Kt.start()}const Kt=new Tu;Kt.setAnimationLoop(ct),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(E){ht=E,st.setAnimationLoop(E),E===null?Kt.stop():Kt.start()},st.addEventListener("sessionstart",Rt),st.addEventListener("sessionend",le),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(z),z=st.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,z,b),f=C.get(E,g.length),f.init(),g.push(f),Q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),j.setFromProjectionMatrix(Q),F=this.localClippingEnabled,k=S.init(this.clippingPlanes,F,z),h=Pe.get(E,m.length),h.init(),m.push(h),kn(E,z,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(J,N),k===!0&&S.beginShadows();const W=f.state.shadowsArray;if(V.render(W,E,z),k===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(h,E),f.setupLights(d.physicallyCorrectLights),z.isArrayCamera){const O=z.cameras;for(let X=0,pt=O.length;X<pt;X++){const yt=O[X];qt(h,E,yt,yt.viewport)}}else qt(h,E,z);b!==null&&(mt.updateMultisampleRenderTarget(b),mt.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(d,E,z),Z.resetDefaultState(),y=-1,x=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function kn(E,z,W,O){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){O&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Q);const yt=se.update(E),Tt=E.material;Tt.visible&&h.push(E,yt,Tt,W,K.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==zt.render.frame&&(E.skeleton.update(),E.skeleton.frame=zt.render.frame),!E.frustumCulled||j.intersectsObject(E))){O&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Q);const yt=se.update(E),Tt=E.material;if(Array.isArray(Tt)){const St=yt.groups;for(let Bt=0,Pt=St.length;Bt<Pt;Bt++){const Dt=St[Bt],jt=Tt[Dt.materialIndex];jt&&jt.visible&&h.push(E,yt,jt,W,K.z,Dt)}}else Tt.visible&&h.push(E,yt,Tt,W,K.z,null)}}const pt=E.children;for(let yt=0,Tt=pt.length;yt<Tt;yt++)kn(pt[yt],z,W,O)}function qt(E,z,W,O){const X=E.opaque,pt=E.transmissive,yt=E.transparent;f.setupLightsView(W),pt.length>0&&Mn(X,z,W),O&&ft.viewport(A.copy(O)),X.length>0&&Ve(X,z,W),pt.length>0&&Ve(pt,z,W),yt.length>0&&Ve(yt,z,W),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Mn(E,z,W){const O=Mt.isWebGL2;U===null&&(U=new Ri(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?Yr:Pi,minFilter:ra,samples:O&&r===!0?4:0})),d.getDrawingBufferSize($),O?U.setSize($.x,$.y):U.setSize(mo($.x),mo($.y));const X=d.getRenderTarget();d.setRenderTarget(U),d.clear();const pt=d.toneMapping;d.toneMapping=Nn,Ve(E,z,W),d.toneMapping=pt,mt.updateMultisampleRenderTarget(U),mt.updateRenderTargetMipmap(U),d.setRenderTarget(X)}function Ve(E,z,W){const O=z.isScene===!0?z.overrideMaterial:null;for(let X=0,pt=E.length;X<pt;X++){const yt=E[X],Tt=yt.object,St=yt.geometry,Bt=O===null?yt.material:O,Pt=yt.group;Tt.layers.test(W.layers)&&Bh(Tt,z,W,St,Bt,Pt)}}function Bh(E,z,W,O,X,pt){E.onBeforeRender(d,z,W,O,X,pt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(d,z,W,O,E,pt),X.transparent===!0&&X.side===Pn?(X.side=tn,X.needsUpdate=!0,d.renderBufferDirect(W,z,O,X,E,pt),X.side=Mr,X.needsUpdate=!0,d.renderBufferDirect(W,z,O,X,E,pt),X.side=Pn):d.renderBufferDirect(W,z,O,X,E,pt),E.onAfterRender(d,z,W,O,X,pt)}function hs(E,z,W){z.isScene!==!0&&(z=at);const O=wt.get(E),X=f.state.lights,pt=f.state.shadowsArray,yt=X.state.version,Tt=Ut.getParameters(E,X.state,pt,z,W),St=Ut.getProgramCacheKey(Tt);let Bt=O.programs;O.environment=E.isMeshStandardMaterial?z.environment:null,O.fog=z.fog,O.envMap=(E.isMeshStandardMaterial?he:Qt).get(E.envMap||O.environment),Bt===void 0&&(E.addEventListener("dispose",P),Bt=new Map,O.programs=Bt);let Pt=Bt.get(St);if(Pt!==void 0){if(O.currentProgram===Pt&&O.lightsStateVersion===yt)return xl(E,Tt),Pt}else Tt.uniforms=Ut.getUniforms(E),E.onBuild(W,Tt,d),E.onBeforeCompile(Tt,d),Pt=Ut.acquireProgram(Tt,St),Bt.set(St,Pt),O.uniforms=Tt.uniforms;const Dt=O.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Dt.clippingPlanes=S.uniform),xl(E,Tt),O.needsLights=Vh(E),O.lightsStateVersion=yt,O.needsLights&&(Dt.ambientLightColor.value=X.state.ambient,Dt.lightProbe.value=X.state.probe,Dt.directionalLights.value=X.state.directional,Dt.directionalLightShadows.value=X.state.directionalShadow,Dt.spotLights.value=X.state.spot,Dt.spotLightShadows.value=X.state.spotShadow,Dt.rectAreaLights.value=X.state.rectArea,Dt.ltc_1.value=X.state.rectAreaLTC1,Dt.ltc_2.value=X.state.rectAreaLTC2,Dt.pointLights.value=X.state.point,Dt.pointLightShadows.value=X.state.pointShadow,Dt.hemisphereLights.value=X.state.hemi,Dt.directionalShadowMap.value=X.state.directionalShadowMap,Dt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Dt.spotShadowMap.value=X.state.spotShadowMap,Dt.spotLightMatrix.value=X.state.spotLightMatrix,Dt.spotLightMap.value=X.state.spotLightMap,Dt.pointShadowMap.value=X.state.pointShadowMap,Dt.pointShadowMatrix.value=X.state.pointShadowMatrix);const jt=Pt.getUniforms(),si=Ns.seqWithValue(jt.seq,Dt);return O.currentProgram=Pt,O.uniformsList=si,Pt}function xl(E,z){const W=wt.get(E);W.outputEncoding=z.outputEncoding,W.instancing=z.instancing,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function kh(E,z,W,O,X){z.isScene!==!0&&(z=at),mt.resetTextureUnits();const pt=z.fog,yt=O.isMeshStandardMaterial?z.environment:null,Tt=b===null?d.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Di,St=(O.isMeshStandardMaterial?he:Qt).get(O.envMap||yt),Bt=O.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pt=!!O.normalMap&&!!W.attributes.tangent,Dt=!!W.morphAttributes.position,jt=!!W.morphAttributes.normal,si=!!W.morphAttributes.color,Hi=O.toneMapped?d.toneMapping:Nn,Xi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,fn=Xi!==void 0?Xi.length:0,Nt=wt.get(O),qi=f.state.lights;if(k===!0&&(F===!0||E!==x)){const De=E===x&&O.id===y;S.setState(O,E,De)}let te=!1;O.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==qi.state.version||Nt.outputEncoding!==Tt||X.isInstancedMesh&&Nt.instancing===!1||!X.isInstancedMesh&&Nt.instancing===!0||X.isSkinnedMesh&&Nt.skinning===!1||!X.isSkinnedMesh&&Nt.skinning===!0||Nt.envMap!==St||O.fog===!0&&Nt.fog!==pt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==S.numPlanes||Nt.numIntersection!==S.numIntersection)||Nt.vertexAlphas!==Bt||Nt.vertexTangents!==Pt||Nt.morphTargets!==Dt||Nt.morphNormals!==jt||Nt.morphColors!==si||Nt.toneMapping!==Hi||Mt.isWebGL2===!0&&Nt.morphTargetsCount!==fn)&&(te=!0):(te=!0,Nt.__version=O.version);let We=Nt.currentProgram;te===!0&&(We=hs(O,z,X));let Gn=!1,Or=!1,ga=!1;const Me=We.getUniforms(),ai=Nt.uniforms;if(ft.useProgram(We.program)&&(Gn=!0,Or=!0,ga=!0),O.id!==y&&(y=O.id,Or=!0),Gn||x!==E){if(Me.setValue(Y,"projectionMatrix",E.projectionMatrix),Mt.logarithmicDepthBuffer&&Me.setValue(Y,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),x!==E&&(x=E,Or=!0,ga=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const De=Me.map.cameraPosition;De!==void 0&&De.setValue(Y,K.setFromMatrixPosition(E.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Me.setValue(Y,"isOrthographic",E.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||X.isSkinnedMesh)&&Me.setValue(Y,"viewMatrix",E.matrixWorldInverse)}if(X.isSkinnedMesh){Me.setOptional(Y,X,"bindMatrix"),Me.setOptional(Y,X,"bindMatrixInverse");const De=X.skeleton;De&&(Mt.floatVertexTextures?(De.boneTexture===null&&De.computeBoneTexture(),Me.setValue(Y,"boneTexture",De.boneTexture,mt),Me.setValue(Y,"boneTextureSize",De.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const _a=W.morphAttributes;if((_a.position!==void 0||_a.normal!==void 0||_a.color!==void 0&&Mt.isWebGL2===!0)&&et.update(X,W,O,We),(Or||Nt.receiveShadow!==X.receiveShadow)&&(Nt.receiveShadow=X.receiveShadow,Me.setValue(Y,"receiveShadow",X.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(ai.envMap.value=St,ai.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),Or&&(Me.setValue(Y,"toneMappingExposure",d.toneMappingExposure),Nt.needsLights&&Gh(ai,ga),pt&&O.fog===!0&&Ge.refreshFogUniforms(ai,pt),Ge.refreshMaterialUniforms(ai,O,H,D,U),Ns.upload(Y,Nt.uniformsList,ai,mt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ns.upload(Y,Nt.uniformsList,ai,mt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Me.setValue(Y,"center",X.center),Me.setValue(Y,"modelViewMatrix",X.modelViewMatrix),Me.setValue(Y,"normalMatrix",X.normalMatrix),Me.setValue(Y,"modelMatrix",X.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const De=O.uniformsGroups;for(let xa=0,Wh=De.length;xa<Wh;xa++)if(Mt.isWebGL2){const vl=De[xa];nt.update(vl,We),nt.bind(vl,We)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return We}function Gh(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Vh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,z,W){wt.get(E.texture).__webglTexture=z,wt.get(E.depthTexture).__webglTexture=W;const O=wt.get(E);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=W===void 0,O.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,z){const W=wt.get(E);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,W=0){b=E,_=z,M=W;let O=!0;if(E){const St=wt.get(E);St.__useDefaultFramebuffer!==void 0?(ft.bindFramebuffer(36160,null),O=!1):St.__webglFramebuffer===void 0?mt.setupRenderTarget(E):St.__hasExternalTextures&&mt.rebindTextures(E,wt.get(E.texture).__webglTexture,wt.get(E.depthTexture).__webglTexture)}let X=null,pt=!1,yt=!1;if(E){const St=E.texture;(St.isData3DTexture||St.isDataArrayTexture)&&(yt=!0);const Bt=wt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(X=Bt[z],pt=!0):Mt.isWebGL2&&E.samples>0&&mt.useMultisampledRTT(E)===!1?X=wt.get(E).__webglMultisampledFramebuffer:X=Bt,A.copy(E.viewport),L.copy(E.scissor),v=E.scissorTest}else A.copy(I).multiplyScalar(H).floor(),L.copy(B).multiplyScalar(H).floor(),v=q;if(ft.bindFramebuffer(36160,X)&&Mt.drawBuffers&&O&&ft.drawBuffers(E,X),ft.viewport(A),ft.scissor(L),ft.setScissorTest(v),pt){const St=wt.get(E.texture);Y.framebufferTexture2D(36160,36064,34069+z,St.__webglTexture,W)}else if(yt){const St=wt.get(E.texture),Bt=z||0;Y.framebufferTextureLayer(36160,36064,St.__webglTexture,W||0,Bt)}y=-1},this.readRenderTargetPixels=function(E,z,W,O,X,pt,yt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(Tt=Tt[yt]),Tt){ft.bindFramebuffer(36160,Tt);try{const St=E.texture,Bt=St.format,Pt=St.type;if(Bt!==mn&&T.convert(Bt)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Dt=Pt===Yr&&(_t.has("EXT_color_buffer_half_float")||Mt.isWebGL2&&_t.has("EXT_color_buffer_float"));if(Pt!==Pi&&T.convert(Pt)!==Y.getParameter(35738)&&!(Pt===xi&&(Mt.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-O&&W>=0&&W<=E.height-X&&Y.readPixels(z,W,O,X,T.convert(Bt),T.convert(Pt),pt)}finally{const St=b!==null?wt.get(b).__webglFramebuffer:null;ft.bindFramebuffer(36160,St)}}},this.copyFramebufferToTexture=function(E,z,W=0){const O=Math.pow(2,-W),X=Math.floor(z.image.width*O),pt=Math.floor(z.image.height*O);mt.setTexture2D(z,0),Y.copyTexSubImage2D(3553,W,0,0,E.x,E.y,X,pt),ft.unbindTexture()},this.copyTextureToTexture=function(E,z,W,O=0){const X=z.image.width,pt=z.image.height,yt=T.convert(W.format),Tt=T.convert(W.type);mt.setTexture2D(W,0),Y.pixelStorei(37440,W.flipY),Y.pixelStorei(37441,W.premultiplyAlpha),Y.pixelStorei(3317,W.unpackAlignment),z.isDataTexture?Y.texSubImage2D(3553,O,E.x,E.y,X,pt,yt,Tt,z.image.data):z.isCompressedTexture?Y.compressedTexSubImage2D(3553,O,E.x,E.y,z.mipmaps[0].width,z.mipmaps[0].height,yt,z.mipmaps[0].data):Y.texSubImage2D(3553,O,E.x,E.y,yt,Tt,z.image),O===0&&W.generateMipmaps&&Y.generateMipmap(3553),ft.unbindTexture()},this.copyTextureToTexture3D=function(E,z,W,O,X=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pt=E.max.x-E.min.x+1,yt=E.max.y-E.min.y+1,Tt=E.max.z-E.min.z+1,St=T.convert(O.format),Bt=T.convert(O.type);let Pt;if(O.isData3DTexture)mt.setTexture3D(O,0),Pt=32879;else if(O.isDataArrayTexture)mt.setTexture2DArray(O,0),Pt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,O.flipY),Y.pixelStorei(37441,O.premultiplyAlpha),Y.pixelStorei(3317,O.unpackAlignment);const Dt=Y.getParameter(3314),jt=Y.getParameter(32878),si=Y.getParameter(3316),Hi=Y.getParameter(3315),Xi=Y.getParameter(32877),fn=W.isCompressedTexture?W.mipmaps[0]:W.image;Y.pixelStorei(3314,fn.width),Y.pixelStorei(32878,fn.height),Y.pixelStorei(3316,E.min.x),Y.pixelStorei(3315,E.min.y),Y.pixelStorei(32877,E.min.z),W.isDataTexture||W.isData3DTexture?Y.texSubImage3D(Pt,X,z.x,z.y,z.z,pt,yt,Tt,St,Bt,fn.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Pt,X,z.x,z.y,z.z,pt,yt,Tt,St,fn.data)):Y.texSubImage3D(Pt,X,z.x,z.y,z.z,pt,yt,Tt,St,Bt,fn),Y.pixelStorei(3314,Dt),Y.pixelStorei(32878,jt),Y.pixelStorei(3316,si),Y.pixelStorei(3315,Hi),Y.pixelStorei(32877,Xi),X===0&&O.generateMipmaps&&Y.generateMipmap(Pt),ft.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?mt.setTextureCube(E,0):E.isData3DTexture?mt.setTexture3D(E,0):E.isDataArrayTexture?mt.setTexture2DArray(E,0):mt.setTexture2D(E,0),ft.unbindTexture()},this.resetState=function(){_=0,M=0,b=null,ft.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class z_ extends Du{}z_.prototype.isWebGL1Renderer=!0;class U_ extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Zo extends xn{constructor(t=1,e=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],s=[],c=[],l=new R,u=new bt;a.push(0,0,0),s.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const m=n+h/e*i;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),s.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(s,3)),this.setAttribute("uv",new _e(c,2))}static fromJSON(t){return new Zo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class $o extends xn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:s},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+s,Math.PI);let l=0;const u=[],h=new R,f=new R,m=[],g=[],d=[],p=[];for(let _=0;_<=n;_++){const M=[],b=_/n;let y=0;_==0&&a==0?y=.5/e:_==n&&c==Math.PI&&(y=-.5/e);for(let x=0;x<=e;x++){const A=x/e;h.x=-t*Math.cos(i+A*r)*Math.sin(a+b*s),h.y=t*Math.cos(a+b*s),h.z=t*Math.sin(i+A*r)*Math.sin(a+b*s),g.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),p.push(A+y,1-b),M.push(l++)}u.push(M)}for(let _=0;_<n;_++)for(let M=0;M<e;M++){const b=u[_][M+1],y=u[_][M],x=u[_+1][M],A=u[_+1][M+1];(_!==0||a>0)&&m.push(b,y,A),(_!==n-1||c<Math.PI)&&m.push(y,x,A)}this.setIndex(m),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(p,2))}static fromJSON(t){return new $o(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ls extends xn{constructor(t=1,e=.4,n=8,i=6,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],s=[],c=[],l=[],u=new R,h=new R,f=new R;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const d=g/i*r,p=m/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(d),h.y=(t+e*Math.cos(p))*Math.sin(d),h.z=e*Math.sin(p),s.push(h.x,h.y,h.z),u.x=t*Math.cos(d),u.y=t*Math.sin(d),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const d=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,_=(i+1)*(m-1)+g,M=(i+1)*m+g;a.push(d,p,M),a.push(p,_,M)}this.setIndex(a),this.setAttribute("position",new _e(s,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(l,2))}static fromJSON(t){return new ls(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kt extends Gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class B_ extends Gi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ot(16777215),this.specular=new Ot(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ko extends Gi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ot(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Rc={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class k_{constructor(t,e,n){const i=this;let r=!1,a=0,s=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,s),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const G_=new k_;class Ru{constructor(t){this.manager=t!==void 0?t:G_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class V_ extends Ru{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Rc.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const s=Zr("img");function c(){u(),Rc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(t),s.src=t,s}}class It extends Ru{constructor(t){super(t)}load(t,e,n,i){const r=new nn,a=new V_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(s){r.image=s,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Iu extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ic=new ie,Oc=new R,Fc=new R;class Ou{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Oc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oc),Fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fc),e.updateMatrixWorld(),Ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nc=new ie,Ur=new R,Ka=new R;class W_ extends Ou{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new Ht(2,1,1,1),new Ht(0,1,1,1),new Ht(3,1,1,1),new Ht(1,1,1,1),new Ht(3,0,1,1),new Ht(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ur),Ka.copy(n.position),Ka.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ka),n.updateMatrixWorld(),i.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc)}}class Jo extends Iu{constructor(t,e,n=0,i=1){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new W_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class H_ extends Ou{constructor(){super(new Eu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class X_ extends Iu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DefaultUp),this.updateMatrix(),this.target=new ge,this.shadow=new H_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class q_{constructor(t,e,n=0,i=1/0){this.ray=new Mu(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return _o(t,this,n,e),n.sort(zc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)_o(t[i],this,n,e);return n.sort(zc),n}}function zc(o,t){return o.distance-t.distance}function _o(o,t,e,n){if(o.layers.test(t.layers)&&o.raycast(t,e),n===!0){const i=o.children;for(let r=0,a=i.length;r<a;r++)_o(i[r],t,e,!0)}}class Uc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);function An(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Fu(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.11.1
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ue={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Tr={duration:.5,overwrite:!1,delay:0},Qo,en,ne,Ke=1e8,Vt=1/Ke,xo=Math.PI*2,j_=xo/4,Y_=0,Nu=Math.sqrt,Z_=Math.cos,$_=Math.sin,ue=function(t){return typeof t=="string"},$t=function(t){return typeof t=="function"},zn=function(t){return typeof t=="number"},tl=function(t){return typeof t>"u"},_n=function(t){return typeof t=="object"},Ee=function(t){return t!==!1},zu=function(){return typeof window<"u"},Os=function(t){return $t(t)||ue(t)},Uu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xe=Array.isArray,vo=/(?:-?\.?\d|\.)+/gi,Bu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,fr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ja=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ku=/[+-]=-?[.\d]+/,Gu=/[^,'"\[\]\s]+/gi,K_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xt,je,Mo,el,Be={},Bs={},Vu,Wu=function(t){return(Bs=Fi(t,Be))&&ke},nl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ks=function(t,e){return!e&&console.warn(t)},Hu=function(t,e){return t&&(Be[t]=e)&&Bs&&(Bs[t]=e)||Be},$r=function(){return 0},J_={suppressEvents:!0,isStart:!0},Hr={suppressEvents:!0},il={},Qn=[],yo={},Xu,Fe={},Qa={},Bc=30,zs=[],rl="",sl=function(t){var e=t[0],n,i;if(_n(e)||$t(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=zs.length;i--&&!zs[i].targetTest(e););n=zs[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new dh(t[i],n)))||t.splice(i,1);return t},Ei=function(t){return t._gsap||sl(Je(t))[0]._gsap},qu=function(t,e,n){return(n=t[e])&&$t(n)?t[e]():tl(n)&&t.getAttribute&&t.getAttribute(e)||n},Ae=function(t,e){return(t=t.split(",")).forEach(e)||t},Jt=function(t){return Math.round(t*1e5)/1e5||0},fe=function(t){return Math.round(t*1e7)/1e7||0},gr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Q_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Gs=function(){var t=Qn.length,e=Qn.slice(0),n,i;for(yo={},Qn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ju=function(t,e,n,i){Qn.length&&Gs(),t.render(e,n,i||en),Qn.length&&Gs()},Yu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Gu).length<2?e:ue(t)?t.trim():t},Zu=function(t){return t},rn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},t0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Fi=function(t,e){for(var n in e)t[n]=e[n];return t},kc=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=_n(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},Vs=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Xr=function(t){var e=t.parent||Xt,n=t.keyframes?t0(xe(t.keyframes)):rn;if(Ee(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},e0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},$u=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],s;if(r)for(s=e[r];a&&a[r]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},oa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Un=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},Ai=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},n0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},bo=function(t,e,n,i){return t._startAt&&(en?t._startAt.revert(Hr):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},i0=function o(t){return!t||t._ts&&o(t.parent)},Gc=function(t){return t._repeat?Er(t._tTime,t=t.duration()+t._rDelay)*t:0},Er=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Ws=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},la=function(t){return t._end=fe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Vt)||0))},ca=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=fe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),la(t),n._dirty||Ai(n,t)),t},Ku=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Ws(t.rawTime(),e),(!e._dur||cs(0,e.totalDuration(),n)-e._tTime>Vt)&&e.render(n,!0)),Ai(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Vt}},pn=function(t,e,n,i){return e.parent&&Un(e),e._start=fe((zn(n)?n:n||t!==Xt?qe(t,n,e):t._time)+e._delay),e._end=fe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),$u(t,e,"_first","_last",t._sort?"_start":0),So(e)||(t._recent=e),i||Ku(t,e),t._ts<0&&ca(t,t._tTime),t},Ju=function(t,e){return(Be.ScrollTrigger||nl("scrollTrigger",e))&&Be.ScrollTrigger.create(e,t)},Qu=function(t,e,n,i){if(ol(t,e),!t._initted)return 1;if(!n&&t._pt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Xu!==ze.frame)return Qn.push(t),t._lazy=[e,i],1},r0=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},So=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},s0=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&r0(t)&&!(!t._initted&&So(t))||(t._ts<0||t._dp._ts<0)&&!So(t))?0:1,s=t._rDelay,c=0,l,u,h;if(s&&t._repeat&&(c=cs(0,t._tDur,e),u=Er(c,s),t._yoyo&&u&1&&(a=1-a),u!==Er(t._tTime,s)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||en||i||t._zTime===Vt||!e&&t._zTime){if(!t._initted&&Qu(t,e,i,n))return;for(h=t._zTime,t._zTime=e||(n?Vt:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&bo(t,e,n,!0),t._onUpdate&&!n&&Qe(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&Qe(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Un(t,1),!n&&!en&&(Qe(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},a0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ar=function(t,e,n,i){var r=t._repeat,a=fe(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:fe(a*(r+1)+t._rDelay*r):a,s>0&&!i?ca(t,t._tTime=t._tDur*s):t.parent&&la(t),n||Ai(t.parent,t),t},Vc=function(t){return t instanceof Te?Ai(t):Ar(t,t._dur)},o0={_start:0,endTime:$r,totalDuration:$r},qe=function o(t,e,n){var i=t.labels,r=t._recent||o0,a=t.duration()>=Ke?r.endTime(!1):t._dur,s,c,l;return ue(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",s=e.indexOf("="),c==="<"||c===">"?(s>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(s<0?r:n).totalDuration()/100:1)):s<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(s-1)+e.substr(s+1)),l&&n&&(c=c/100*(xe(n)?n[0]:n).totalDuration()),s>1?o(t,e.substr(0,s-1),n)+c:a+c)):e==null?a:+e},qr=function(t,e,n){var i=zn(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],s,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(s=a,c=n;c&&!("immediateRender"in s);)s=c.vars.defaults||{},c=Ee(c.vars.inherit)&&c.parent;a.immediateRender=Ee(s.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new oe(e[0],a,e[r+1])},ri=function(t,e){return t||t===0?e(t):e},cs=function(t,e,n){return n<t?t:n>e?e:n},me=function(t,e){return!ue(t)||!(e=K_.exec(t))?"":e[1]},l0=function(t,e,n){return ri(n,function(i){return cs(t,e,i)})},wo=[].slice,th=function(t,e){return t&&_n(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&_n(t[0]))&&!t.nodeType&&t!==je},c0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ue(i)&&!e||th(i,1)?(r=n).push.apply(r,Je(i)):n.push(i)})||n},Je=function(t,e,n){return ne&&!e&&ne.selector?ne.selector(t):ue(t)&&!n&&(Mo||!Cr())?wo.call((e||el).querySelectorAll(t),0):xe(t)?c0(t,n):th(t)?wo.call(t,0):t?[t]:[]},To=function(t){return t=Je(t)[0]||ks("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Je(e,n.querySelectorAll?n:n===t?ks("Invalid scope")||el.createElement("div"):t)}},eh=function(t){return t.sort(function(){return .5-Math.random()})},nh=function(t){if($t(t))return t;var e=_n(t)?t:{each:t},n=Ci(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},s=i>0&&i<1,c=isNaN(i)||s,l=e.axis,u=i,h=i;return ue(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!s&&c&&(u=i[0],h=i[1]),function(f,m,g){var d=(g||e).length,p=a[d],_,M,b,y,x,A,L,v,w;if(!p){if(w=e.grid==="auto"?0:(e.grid||[1,Ke])[1],!w){for(L=-Ke;L<(L=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(p=a[d]=[],_=c?Math.min(w,d)*u-.5:i%w,M=w===Ke?0:c?d*h/w-.5:i/w|0,L=0,v=Ke,A=0;A<d;A++)b=A%w-_,y=M-(A/w|0),p[A]=x=l?Math.abs(l==="y"?y:b):Nu(b*b+y*y),x>L&&(L=x),x<v&&(v=x);i==="random"&&eh(p),p.max=L-v,p.min=v,p.v=d=(parseFloat(e.amount)||parseFloat(e.each)*(w>d?d-1:l?l==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=me(e.amount||e.each)||0,n=n&&d<0?uh(n):n}return d=(p[f]-p.min)/p.max||0,fe(p.b+(n?n(d):d)*p.v)+p.u}},Eo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=fe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(zn(n)?0:me(n))}},ih=function(t,e){var n=xe(t),i,r;return!n&&_n(t)&&(i=n=t.radius||Ke,t.values?(t=Je(t.values),(r=!zn(t[0]))&&(i*=i)):t=Eo(t.increment)),ri(e,n?$t(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=Ke,u=0,h=t.length,f,m;h--;)r?(f=t[h].x-s,m=t[h].y-c,f=f*f+m*m):f=Math.abs(t[h]-s),f<l&&(l=f,u=h);return u=!i||l<=i?t[u]:a,r||u===a||zn(a)?u:u+me(a)}:Eo(t))},rh=function(t,e,n,i){return ri(xe(t)?!e:n===!0?!!(n=0):!i,function(){return xe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},u0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},h0=function(t,e){return function(n){return t(parseFloat(n))+(e||me(n))}},f0=function(t,e,n){return ah(t,e,0,1,n)},sh=function(t,e,n){return ri(n,function(i){return t[~~e(i)]})},d0=function o(t,e,n){var i=e-t;return xe(t)?sh(t,o(0,t.length),e):ri(n,function(r){return(i+(r-t)%i)%i+t})},p0=function o(t,e,n){var i=e-t,r=i*2;return xe(t)?sh(t,o(0,t.length-1),e):ri(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Kr=function(t){for(var e=0,n="",i,r,a,s;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),s=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(s?Gu:vo),n+=t.substr(e,i-e)+rh(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},ah=function(t,e,n,i,r){var a=e-t,s=i-n;return ri(r,function(c){return n+((c-t)/a*s||0)})},m0=function o(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var a=ue(t),s={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(xe(t)&&!xe(e)){for(u=[],h=t.length,f=h-2,l=1;l<h;l++)u.push(o(t[l-1],t[l]));h--,r=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=e}else i||(t=Fi(xe(t)?[]:{},t));if(!u){for(c in e)al.call(s,t,c,"get",e[c]);r=function(g){return ul(g,s)||(a?t.p:t)}}}return ri(n,r)},Wc=function(t,e,n){var i=t.labels,r=Ke,a,s,c;for(a in i)s=i[a]-e,s<0==!!n&&s&&r>(s=Math.abs(s))&&(c=a,r=s);return c},Qe=function(t,e,n){var i=t.vars,r=i[e],a=ne,s=t._ctx,c,l,u;if(!!r)return c=i[e+"Params"],l=i.callbackScope||t,n&&Qn.length&&Gs(),s&&(ne=s),u=c?r.apply(l,c):r.call(l),ne=a,u},Vr=function(t){return Un(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&Qe(t,"onInterrupt"),t},dr,g0=function(t){t=!t.name&&t.default||t;var e=t.name,n=$t(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:$r,render:ul,add:al,kill:R0,modifier:D0,rawVars:0},a={targetTest:0,get:0,getSetter:cl,aliases:{},register:0};if(Cr(),t!==i){if(Fe[e])return;rn(i,rn(Vs(t,r),a)),Fi(i.prototype,Fi(r,Vs(t,a))),Fe[i.prop=e]=i,t.targetTest&&(zs.push(i),il[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Hu(e,i),t.register&&t.register(ke,i,Ce)},Gt=255,Wr={aqua:[0,Gt,Gt],lime:[0,Gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Gt],navy:[0,0,128],white:[Gt,Gt,Gt],olive:[128,128,0],yellow:[Gt,Gt,0],orange:[Gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Gt,0,0],pink:[Gt,192,203],cyan:[0,Gt,Gt],transparent:[Gt,Gt,Gt,0]},to=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Gt+.5|0},oh=function(t,e,n){var i=t?zn(t)?[t>>16,t>>8&Gt,t&Gt]:0:Wr.black,r,a,s,c,l,u,h,f,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Wr[t])i=Wr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),s=t.charAt(3),t="#"+r+r+a+a+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Gt,i&Gt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Gt,t&Gt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(vo),!e)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=to(c+1/3,r,a),i[1]=to(c,r,a),i[2]=to(c-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Bu),n&&i.length<4&&(i[3]=1),i}else i=t.match(vo)||Wr.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/Gt,a=i[1]/Gt,s=i[2]/Gt,h=Math.max(r,a,s),f=Math.min(r,a,s),u=(h+f)/2,h===f?c=l=0:(m=h-f,l=u>.5?m/(2-h-f):m/(h+f),c=h===r?(a-s)/m+(a<s?6:0):h===a?(s-r)/m+2:(r-a)/m+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},lh=function(t){var e=[],n=[],i=-1;return t.split(ti).forEach(function(r){var a=r.match(fr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Hc=function(t,e,n){var i="",r=(t+i).match(ti),a=e?"hsla(":"rgba(",s=0,c,l,u,h;if(!r)return t;if(r=r.map(function(f){return(f=oh(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=lh(t),c=n.c,c.join(i)!==u.c.join(i)))for(l=t.replace(ti,"1").split(fr),h=l.length-1;s<h;s++)i+=l[s]+(~c.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=t.split(ti),h=l.length-1;s<h;s++)i+=l[s]+r[s];return i+l[h]},ti=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Wr)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),_0=/hsl[a]?\(/,ch=function(t){var e=t.join(" "),n;if(ti.lastIndex=0,ti.test(e))return n=_0.test(e),t[1]=Hc(t[1],n),t[0]=Hc(t[0],n,lh(t[1])),!0},Jr,ze=function(){var o=Date.now,t=500,e=33,n=o(),i=n,r=1e3/240,a=r,s=[],c,l,u,h,f,m,g=function d(p){var _=o()-i,M=p===!0,b,y,x,A;if(_>t&&(n+=_-e),i+=_,x=i-n,b=x-a,(b>0||M)&&(A=++h.frame,f=x-h.time*1e3,h.time=x=x/1e3,a+=b+(b>=r?4:r-b),y=1),M||(c=l(d)),y)for(m=0;m<s.length;m++)s[m](x,f,A,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Vu&&(!Mo&&zu()&&(je=Mo=window,el=je.document||{},Be.gsap=ke,(je.gsapVersions||(je.gsapVersions=[])).push(ke.version),Wu(Bs||je.GreenSockGlobals||!je.gsap&&je||{}),u=je.requestAnimationFrame),c&&h.sleep(),l=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Jr=1,g(2))},sleep:function(){(u?je.cancelAnimationFrame:clearTimeout)(c),Jr=0,l=$r},lagSmoothing:function(p,_){t=p||1/Vt,e=Math.min(_,t,0)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,_,M){var b=_?function(y,x,A,L){p(y,x,A,L),h.remove(b)}:p;return h.remove(p),s[M?"unshift":"push"](b),Cr(),b},remove:function(p,_){~(_=s.indexOf(p))&&s.splice(_,1)&&m>=_&&m--},_listeners:s},h}(),Cr=function(){return!Jr&&ze.wake()},Ct={},x0=/^[\d.\-M][\d.\-,\s]/,v0=/["']/g,M0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,s,c,l;r<a;r++)c=n[r],s=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,s),e[i]=isNaN(l)?l.replace(v0,"").trim():+l,i=c.substr(s+1).trim();return e},y0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},b0=function(t){var e=(t+"").split("("),n=Ct[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[M0(e[1])]:y0(t).split(",").map(Yu)):Ct._CE&&x0.test(t)?Ct._CE("",t):n},uh=function(t){return function(e){return 1-t(1-e)}},hh=function o(t,e){for(var n=t._first,i;n;)n instanceof Te?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ci=function(t,e){return t&&($t(t)?t:Ct[t]||b0(t))||e},Wi=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Ae(t,function(s){Ct[s]=Be[s]=r,Ct[a=s.toLowerCase()]=n;for(var c in r)Ct[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ct[s+"."+c]=r[c]}),r},fh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},eo=function o(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/xo*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*$_((u-a)*r)+1},c=t==="out"?s:t==="in"?function(l){return 1-s(1-l)}:fh(s);return r=xo/r,c.config=function(l,u){return o(t,l,u)},c},no=function o(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:fh(n);return i.config=function(r){return o(t,r)},i};Ae("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;Wi(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ct.Linear.easeNone=Ct.none=Ct.Linear.easeIn;Wi("Elastic",eo("in"),eo("out"),eo());(function(o,t){var e=1/t,n=2*e,i=2.5*e,r=function(s){return s<e?o*s*s:s<n?o*Math.pow(s-1.5/t,2)+.75:s<i?o*(s-=2.25/t)*s+.9375:o*Math.pow(s-2.625/t,2)+.984375};Wi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Wi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Wi("Circ",function(o){return-(Nu(1-o*o)-1)});Wi("Sine",function(o){return o===1?1:-Z_(o*j_)+1});Wi("Back",no("in"),no("out"),no());Ct.SteppedEase=Ct.steps=Be.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-Vt;return function(s){return((i*cs(0,a,s)|0)+r)*n}}};Tr.ease=Ct["quad.out"];Ae("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return rl+=o+","+o+"Params,"});var dh=function(t,e){this.id=Y_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:qu,this.set=e?e.getSetter:cl},Lr=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ar(this,+e.duration,1,1),this.data=e.data,ne&&(this._ctx=ne,ne.data.push(this)),Jr||ze.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ar(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Cr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ca(this,n),!r._dp||r.parent||Ku(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&pn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Vt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ju(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Er(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Vt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ws(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Vt?0:this._rts,this.totalTime(cs(-this._delay,this._tDur,i),!0),la(this),n0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Cr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Vt&&(this._tTime-=Vt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&pn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ee(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ws(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Hr);var i=en;return en=n,this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents),this.data!=="nested"&&Un(this),en=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Vc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Vc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(qe(this,n),Ee(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ee(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Vt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Vt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Vt)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=$t(n)?n:Zu,s=function(){var l=i.then;i.then=null,$t(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=l),r(a),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},t.kill=function(){Vr(this)},o}();rn(Lr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Vt,_prom:0,_ps:!1,_rts:1});var Te=function(o){Fu(t,o);function t(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ee(n.sortChildren),Xt&&pn(n.parent||Xt,An(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Ju(An(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return qr(0,arguments,this),this},e.from=function(i,r,a){return qr(1,arguments,this),this},e.fromTo=function(i,r,a,s){return qr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Xr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new oe(i,r,qe(this,a),1),this},e.call=function(i,r,a){return pn(this,oe.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,s,c,l,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new oe(i,a,qe(this,c)),this},e.staggerFrom=function(i,r,a,s,c,l,u){return a.runBackwards=1,Xr(a).immediateRender=Ee(a.immediateRender),this.staggerTo(i,r,a,s,c,l,u)},e.staggerFromTo=function(i,r,a,s,c,l,u,h){return s.startAt=a,Xr(s).immediateRender=Ee(s.immediateRender),this.staggerTo(i,r,s,c,l,u,h)},e.render=function(i,r,a){var s=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:fe(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,m,g,d,p,_,M,b,y,x,A,L;if(this!==Xt&&u>c&&i>=0&&(u=c),u!==this._tTime||a||h){if(s!==this._time&&l&&(u+=this._time-s,i+=this._time-s),f=u,y=this._start,b=this._ts,_=!b,h&&(l||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=fe(u%p),u===c?(d=this._repeat,f=l):(d=~~(u/p),d&&d===u/p&&(f=l,d--),f>l&&(f=l)),x=Er(this._tTime,p),!s&&this._tTime&&x!==d&&(x=d),A&&d&1&&(f=l-f,L=1),d!==x&&!this._lock){var v=A&&x&1,w=v===(A&&d&1);if(d<x&&(v=!v),s=v?0:l,this._lock=1,this.render(s||(L?0:fe(d*p)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&Qe(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,w&&(this._lock=2,s=v?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;hh(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=a0(this,fe(s),fe(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&f&&!r&&(Qe(this,"onStart"),this._tTime!==u))return this;if(f>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=-Vt);break}}m=g}else{a=a||en,m=this._last;for(var D=i<0?i:f;m;){if(g=m._prev,(m._act||D<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(D-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(D-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=D?-Vt:Vt);break}}m=g}}if(M&&!r&&(this.pause(),M.render(f>=s?0:-Vt)._zTime=f>=s?1:-1,this._ts))return this._start=y,la(this),this.render(i,r,a);this._onUpdate&&!r&&Qe(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&s)&&(y===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Un(this,1),!r&&!(i<0&&!s)&&(u||s||!c)&&(Qe(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(zn(r)||(r=qe(this,r,i)),!(i instanceof Lr)){if(xe(i))return i.forEach(function(s){return a.add(s,r)}),this;if(ue(i))return this.addLabel(i,r);if($t(i))i=oe.delayedCall(0,i);else return this}return this!==i?pn(this,i,r):this},e.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Ke);for(var c=[],l=this._first;l;)l._start>=s&&(l instanceof oe?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return ue(i)?this.removeLabel(i):$t(i)?this.killTweensOf(i):(oa(this,i),i===this._recent&&(this._recent=this._last),Ai(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=fe(ze.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=qe(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var s=oe.delayedCall(0,r||$r,a);return s.data="isPause",this._hasPause=1,pn(this,s,qe(this,i))},e.removePause=function(i){var r=this._first;for(i=qe(this,i);r;)r._start===i&&r.data==="isPause"&&Un(r),r=r._next},e.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),c=s.length;c--;)Zn!==s[c]&&s[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],s=Je(i),c=this._first,l=zn(r),u;c;)c instanceof oe?Q_(c._targets,s)&&(l?(!Zn||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(u=c.getTweensOf(s,r)).length&&a.push.apply(a,u),c=c._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,s=qe(a,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,m,g=oe.to(a,rn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale())||Vt,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==p&&Ar(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,rn({startAt:{time:qe(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Wc(this,qe(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Wc(this,qe(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Vt)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,c=this.labels,l;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return Ai(this)},e.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return o.prototype.invalidate.call(this)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ai(this)},e.totalDuration=function(i){var r=0,a=this,s=a._last,c=Ke,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>c&&a._sort&&s._ts&&!a._lock?(a._lock=1,pn(a,s,u-s._delay,1)._lock=0):c=u,u<0&&s._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),s._end>r&&s._ts&&(r=s._end),s=l;Ar(a,a===Xt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Xt._ts&&(ju(Xt,Ws(i,Xt)),Xu=ze.frame),ze.frame>=Bc){Bc+=Ue.autoSleep||120;var r=Xt._first;if((!r||!r._ts)&&Ue.autoSleep&&ze._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ze.sleep()}}},t}(Lr);rn(Te.prototype,{_lock:0,_hasPause:0,_forcing:0});var S0=function(t,e,n,i,r,a,s){var c=new Ce(this._pt,t,e,0,1,vh,null,r),l=0,u=0,h,f,m,g,d,p,_,M;for(c.b=n,c.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Kr(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),f=n.match(Ja)||[];h=Ja.exec(i);)g=h[0],d=i.substring(l,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?gr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},l=Ja.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=s,(ku.test(i)||_)&&(c.e=0),this._pt=c,c},al=function(t,e,n,i,r,a,s,c,l,u){$t(i)&&(i=i(r||0,t,a));var h=t[e],f=n!=="get"?n:$t(h)?l?t[e.indexOf("set")||!$t(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():h,m=$t(h)?l?C0:_h:ll,g;if(ue(i)&&(~i.indexOf("random(")&&(i=Kr(i)),i.charAt(1)==="="&&(g=gr(f,i)+(me(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Ao)return!isNaN(f*i)&&i!==""?(g=new Ce(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?P0:xh,0,m),l&&(g.fp=l),s&&g.modifier(s,this,t),this._pt=g):(!h&&!(e in t)&&nl(e,i),S0.call(this,t,e,f,i,m,c||Ue.stringFilter,l))},w0=function(t,e,n,i,r){if($t(t)&&(t=jr(t,r,e,n,i)),!_n(t)||t.style&&t.nodeType||xe(t)||Uu(t))return ue(t)?jr(t,r,e,n,i):t;var a={},s;for(s in t)a[s]=jr(t[s],r,e,n,i);return a},ph=function(t,e,n,i,r,a){var s,c,l,u;if(Fe[t]&&(s=new Fe[t]).init(r,s.rawVars?e[t]:w0(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new Ce(n._pt,r,t,0,1,s.render,s,0,s.priority),n!==dr))for(l=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)l[s._props[u]]=c;return s},Zn,Ao,ol=function o(t,e){var n=t.vars,i=n.ease,r=n.startAt,a=n.immediateRender,s=n.lazy,c=n.onUpdate,l=n.onUpdateParams,u=n.callbackScope,h=n.runBackwards,f=n.yoyoEase,m=n.keyframes,g=n.autoRevert,d=t._dur,p=t._startAt,_=t._targets,M=t.parent,b=M&&M.data==="nested"?M.vars.targets:_,y=t._overwrite==="auto"&&!Qo,x=t.timeline,A,L,v,w,D,H,J,N,I,B,q,j,k;if(x&&(!m||!i)&&(i="none"),t._ease=Ci(i,Tr.ease),t._yEase=f?uh(Ci(f===!0?i:f,Tr.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!x&&!!n.runBackwards,!x||m&&!n.stagger){if(N=_[0]?Ei(_[0]).harness:0,j=N&&n[N.prop],A=Vs(n,il),p&&(e<0&&h&&a&&!g?p.render(-1,!0):p.revert(h&&d?Hr:J_),p._lazy=0),r){if(Un(t._startAt=oe.set(_,rn({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:Ee(s),startAt:null,delay:0,onUpdate:c,onUpdateParams:l,callbackScope:u,stagger:0},r))),e<0&&(en||!a&&!g)&&t._startAt.revert(Hr),a&&d&&e<=0){e&&(t._zTime=e);return}}else if(h&&d&&!p){if(e&&(a=!1),v=rn({overwrite:!1,data:"isFromStart",lazy:a&&Ee(s),immediateRender:a,stagger:0,parent:M},A),j&&(v[N.prop]=j),Un(t._startAt=oe.set(_,v)),e<0&&(en?t._startAt.revert(Hr):t._startAt.render(-1,!0)),t._zTime=e,!a)o(t._startAt,Vt);else if(!e)return}for(t._pt=t._ptCache=0,s=d&&Ee(s)||s&&!d,L=0;L<_.length;L++){if(D=_[L],J=D._gsap||sl(_)[L]._gsap,t._ptLookup[L]=B={},yo[J.id]&&Qn.length&&Gs(),q=b===_?L:b.indexOf(D),N&&(I=new N).init(D,j||A,t,q,b)!==!1&&(t._pt=w=new Ce(t._pt,D,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(F){B[F]=w}),I.priority&&(H=1)),!N||j)for(v in A)Fe[v]&&(I=ph(v,A,t,q,D,b))?I.priority&&(H=1):B[v]=w=al.call(t,D,v,"get",A[v],q,b,0,n.stringFilter);t._op&&t._op[L]&&t.kill(D,t._op[L]),y&&t._pt&&(Zn=t,Xt.killTweensOf(D,B,t.globalTime(e)),k=!t.parent,Zn=0),t._pt&&s&&(yo[J.id]=1)}H&&Mh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!k,m&&e<=0&&x.render(Ke,!0,!0)},T0=function(t,e,n,i,r,a,s){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],l,u,h,f;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(l=h[f][e],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==e&&l.fp!==e;)l=l._next;if(!l)return Ao=1,t.vars[e]="+=0",ol(t,s),Ao=0,1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(i||i===0)&&!r?i:l.s+(i||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=Jt(n)+me(u.e)),u.b&&(u.b=l.s+me(u.b))},E0=function(t,e){var n=t[0]?Ei(t[0]).harness:0,i=n&&n.aliases,r,a,s,c;if(!i)return e;r=Fi({},e);for(a in i)if(a in r)for(c=i[a].split(","),s=c.length;s--;)r[c[s]]=r[a];return r},A0=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,s;if(xe(e))s=n[t]||(n[t]=[]),e.forEach(function(c,l){return s.push({t:l/(e.length-1)*100,v:c,e:r})});else for(a in e)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(t),v:e[a],e:r})},jr=function(t,e,n,i,r){return $t(t)?t.call(e,n,i,r):ue(t)&&~t.indexOf("random(")?Kr(t):t},mh=rl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",gh={};Ae(mh+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return gh[o]=1});var oe=function(o){Fu(t,o);function t(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:Xr(i))||this;var c=s.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,m=c.overwrite,g=c.keyframes,d=c.defaults,p=c.scrollTrigger,_=c.yoyoEase,M=i.parent||Xt,b=(xe(n)||Uu(n)?zn(n[0]):"length"in i)?[n]:Je(n),y,x,A,L,v,w,D,H;if(s._targets=b.length?sl(b):ks("GSAP target "+n+" not found. https://greensock.com",!Ue.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||f||Os(l)||Os(u)){if(i=s.vars,y=s.timeline=new Te({data:"nested",defaults:d||{},targets:M&&M.data==="nested"?M.vars.targets:b}),y.kill(),y.parent=y._dp=An(s),y._start=0,f||Os(l)||Os(u)){if(L=b.length,D=f&&nh(f),_n(f))for(v in f)~mh.indexOf(v)&&(H||(H={}),H[v]=f[v]);for(x=0;x<L;x++)A=Vs(i,gh),A.stagger=0,_&&(A.yoyoEase=_),H&&Fi(A,H),w=b[x],A.duration=+jr(l,An(s),x,w,b),A.delay=(+jr(u,An(s),x,w,b)||0)-s._delay,!f&&L===1&&A.delay&&(s._delay=u=A.delay,s._start+=u,A.delay=0),y.to(w,A,D?D(x,w,b):0),y._ease=Ct.none;y.duration()?l=u=0:s.timeline=0}else if(g){Xr(rn(y.vars.defaults,{ease:"none"})),y._ease=Ci(g.ease||i.ease||"none");var J=0,N,I,B;if(xe(g))g.forEach(function(q){return y.to(b,q,">")}),y.duration();else{A={};for(v in g)v==="ease"||v==="easeEach"||A0(v,g[v],A,g.easeEach);for(v in A)for(N=A[v].sort(function(q,j){return q.t-j.t}),J=0,x=0;x<N.length;x++)I=N[x],B={ease:I.e,duration:(I.t-(x?N[x-1].t:0))/100*l},B[v]=I.v,y.to(b,B,J),J+=B.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||s.duration(l=y.duration())}else s.timeline=0;return m===!0&&!Qo&&(Zn=An(s),Xt.killTweensOf(b),Zn=0),pn(M,An(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!l&&!g&&s._start===fe(M._time)&&Ee(h)&&i0(An(s))&&M.data!=="nested")&&(s._tTime=-Vt,s.render(Math.max(0,-u))),p&&Ju(An(s),p),s}var e=t.prototype;return e.render=function(i,r,a){var s=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-Vt&&!u?c:i<Vt?0:i,f,m,g,d,p,_,M,b,y;if(!l)s0(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,b=this.timeline,this._repeat){if(d=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,a);if(f=fe(h%d),h===c?(g=this._repeat,f=l):(g=~~(h/d),g&&g===h/d&&(f=l,g--),f>l&&(f=l)),_=this._yoyo&&g&1,_&&(y=this._yEase,f=l-f),p=Er(this._tTime,d),f===s&&!a&&this._initted)return this._tTime=h,this;g!==p&&(b&&this._yEase&&hh(b,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(fe(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Qu(this,u?i:f,a,r))return this._tTime=0,this;if(s!==this._time)return this;if(l!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(y||this._ease)(f/l),this._from&&(this.ratio=M=1-M),f&&!s&&!r&&(Qe(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;b&&b.render(i<0?i:!f&&_?-Vt:b._dur*b._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&bo(this,i,r,a),Qe(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Qe(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&bo(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Un(this,1),!r&&!(u&&!s)&&(h||s)&&(Qe(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),o.prototype.invalidate.call(this)},e.resetTo=function(i,r,a,s){Jr||ze.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||ol(this,c),l=this._ease(c/this._dur),T0(this,i,r,a,s,l,c)?this.resetTo(i,r,a,s):(ca(this,0),this.parent||$u(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Vr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Zn&&Zn.vars.overwrite!==!0)._first||Vr(this),this.parent&&a!==this.timeline.totalDuration()&&Ar(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,c=i?Je(i):s,l=this._ptLookup,u=this._pt,h,f,m,g,d,p,_;if((!r||r==="all")&&e0(s,c))return r==="all"&&(this._pt=0),Vr(this);for(h=this._op=this._op||[],r!=="all"&&(ue(r)&&(d={},Ae(r,function(M){return d[M]=1}),r=d),r=E0(s,r)),_=s.length;_--;)if(~c.indexOf(s[_])){f=l[_],r==="all"?(h[_]=r,g=f,m={}):(m=h[_]=h[_]||{},g=r);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&oa(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&Vr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return qr(1,arguments)},t.delayedCall=function(i,r,a,s){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},t.fromTo=function(i,r,a){return qr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Xt.killTweensOf(i,r,a)},t}(Lr);rn(oe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ae("staggerTo,staggerFrom,staggerFromTo",function(o){oe[o]=function(){var t=new Te,e=wo.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var ll=function(t,e,n){return t[e]=n},_h=function(t,e,n){return t[e](n)},C0=function(t,e,n,i){return t[e](i.fp,n)},L0=function(t,e,n){return t.setAttribute(e,n)},cl=function(t,e){return $t(t[e])?_h:tl(t[e])&&t.setAttribute?L0:ll},xh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},P0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},vh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},ul=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},D0=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},R0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?oa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},I0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Mh=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Ce=function(){function o(e,n,i,r,a,s,c,l,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||xh,this.d=c||this,this.set=l||ll,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=I0,this.m=n,this.mt=r,this.tween=i},o}();Ae(rl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return il[o]=1});Be.TweenMax=Be.TweenLite=oe;Be.TimelineLite=Be.TimelineMax=Te;Xt=new Te({sortChildren:!1,defaults:Tr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ue.stringFilter=ch;var Pr=[],Us={},O0=[],Xc=0,io=function(t){return(Us[t]||O0).map(function(e){return e()})},Co=function(){var t=Date.now(),e=[];t-Xc>2&&(io("matchMediaInit"),Pr.forEach(function(n){var i=n.queries,r=n.conditions,a,s,c,l;for(s in i)a=je.matchMedia(i[s]).matches,a&&(c=1),a!==r[s]&&(r[s]=a,l=1);l&&(n.revert(),c&&e.push(n))}),io("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Xc=t,io("matchMedia"))},yh=function(){function o(e,n){this.selector=n&&To(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,r){$t(n)&&(r=i,i=n,n=$t);var a=this,s=function(){var l=ne,u=a.selector,h;return l&&l!==a&&l.data.push(a),r&&(a.selector=To(r)),ne=a,h=i.apply(a,arguments),$t(h)&&a._r.push(h),ne=l,a.selector=u,a.isReverted=!1,h};return a.last=s,n===$t?s(a):n?a[n]=s:s},t.ignore=function(n){var i=ne;ne=null,n(this),ne=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof oe&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(this.getTweens().map(function(s){return{g:s.globalTime(0),t:s}}).sort(function(s,c){return c.g-s.g||-1}).forEach(function(s){return s.t.revert(n)}),this.data.forEach(function(s){return!(s instanceof Lr)&&s.revert&&s.revert(n)}),this._r.forEach(function(s){return s(n,r)}),this.isReverted=!0):this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i){var a=Pr.indexOf(this);~a&&Pr.splice(a,1)}},t.revert=function(n){this.kill(n||{})},o}(),F0=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,r){_n(n)||(n={matches:n});var a=new yh(0,r||this.scope),s=a.conditions={},c,l,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=je.matchMedia(n[l]),c&&(Pr.indexOf(a)<0&&Pr.push(a),(s[l]=c.matches)&&(u=1),c.addListener?c.addListener(Co):c.addEventListener("change",Co)));return u&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Hs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return g0(i)})},timeline:function(t){return new Te(t)},getTweensOf:function(t,e){return Xt.getTweensOf(t,e)},getProperty:function(t,e,n,i){ue(t)&&(t=Je(t)[0]);var r=Ei(t||{}).get,a=n?Zu:Yu;return n==="native"&&(n=""),t&&(e?a((Fe[e]&&Fe[e].get||r)(t,e,n,i)):function(s,c,l){return a((Fe[s]&&Fe[s].get||r)(t,s,c,l))})},quickSetter:function(t,e,n){if(t=Je(t),t.length>1){var i=t.map(function(u){return ke.quickSetter(u,e,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}t=t[0]||{};var a=Fe[e],s=Ei(t),c=s.harness&&(s.harness.aliases||{})[e]||e,l=a?function(u){var h=new a;dr._pt=0,h.init(t,n?u+n:u,dr,0,[t]),h.render(1,h),dr._pt&&ul(1,dr)}:s.set(t,c);return a?l:function(u){return l(t,c,n?u+n:u,s,1)}},quickTo:function(t,e,n){var i,r=ke.to(t,Fi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(c,l,u){return r.resetTo(e,c,l,u)};return a.tween=r,a},isTweening:function(t){return Xt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ci(t.ease,Tr.ease)),kc(Tr,t||{})},config:function(t){return kc(Ue,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Fe[s]&&!Be[s]&&ks(e+" effect requires "+s+" plugin.")}),Qa[e]=function(s,c,l){return n(Je(s),rn(c||{},r),l)},a&&(Te.prototype[e]=function(s,c,l){return this.add(Qa[e](s,_n(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Ct[t]=Ci(e)},parseEase:function(t,e){return arguments.length?Ci(t,e):Ct},getById:function(t){return Xt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Te(t),i,r;for(n.smoothChildTiming=Ee(t.smoothChildTiming),Xt.remove(n),n._dp=0,n._time=n._tTime=Xt._time,i=Xt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof oe&&i.vars.onComplete===i._targets[0]))&&pn(n,i,i._start-i._delay),i=r;return pn(Xt,n,0),n},context:function(t,e){return t?new yh(t,e):ne},matchMedia:function(t){return new F0(t)},matchMediaRefresh:function(){return Pr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Co()},addEventListener:function(t,e){var n=Us[t]||(Us[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Us[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:d0,wrapYoyo:p0,distribute:nh,random:rh,snap:ih,normalize:f0,getUnit:me,clamp:l0,splitColor:oh,toArray:Je,selector:To,mapRange:ah,pipe:u0,unitize:h0,interpolate:m0,shuffle:eh},install:Wu,effects:Qa,ticker:ze,updateRoot:Te.updateRoot,plugins:Fe,globalTimeline:Xt,core:{PropTween:Ce,globals:Hu,Tween:oe,Timeline:Te,Animation:Lr,getCache:Ei,_removeLinkedListItem:oa,reverting:function(){return en},context:function(t){return t&&ne&&(ne.data.push(t),t._ctx=ne),ne},suppressOverwrites:function(t){return Qo=t}}};Ae("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Hs[o]=oe[o]});ze.add(Te.updateRoot);dr=Hs.to({},{duration:0});var N0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},z0=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=N0(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},ro=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(s){var c,l;if(ue(r)&&(c={},Ae(r,function(u){return c[u]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}z0(s,r)}}}},ke=Hs.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,s,c;this.tween=n;for(a in e)c=t.getAttribute(a)||"",s=this.add(t,"setAttribute",(c||0)+"",e[a],i,r,0,0,a),s.op=a,s.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)en?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ro("roundProps",Eo),ro("modifiers"),ro("snap",ih))||Hs;oe.version=Te.version=ke.version="3.11.1";Vu=1;zu()&&Cr();Ct.Power0;Ct.Power1;Ct.Power2;Ct.Power3;Ct.Power4;Ct.Linear;Ct.Quad;Ct.Cubic;Ct.Quart;Ct.Quint;Ct.Strong;Ct.Elastic;Ct.Back;Ct.SteppedEase;Ct.Bounce;Ct.Sine;Ct.Expo;Ct.Circ;/*!
 * CSSPlugin 3.11.1
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qc,$n,_r,hl,Mi,jc,fl,U0=function(){return typeof window<"u"},Bn={},mi=180/Math.PI,xr=Math.PI/180,cr=Math.atan2,Yc=1e8,dl=/([A-Z])/g,B0=/(left|right|width|margin|padding|x)/i,k0=/[\s,\(]\S/,Dn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},G0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},V0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},W0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},bh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Sh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},H0=function(t,e,n){return t.style[e]=n},X0=function(t,e,n){return t.style.setProperty(e,n)},q0=function(t,e,n){return t._gsap[e]=n},j0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Y0=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Z0=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Zt="transform",hn=Zt+"Origin",$0=function(t){var e=this,n=this.target,i=n.style;if(t in Bn){if(this.tfm=this.tfm||{},t!=="transform"&&(t=Dn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(r){return e.tfm[r]=Cn(n,r)}):this.tfm[t]=n._gsap.x?n._gsap[t]:Cn(n,t)),this.props.indexOf(Zt)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(hn,"")),t=Zt}i&&this.props.push(t,i[t])},wh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},K0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=2)t[r+1]?n[t[r]]=t[r+1]:n.removeProperty(t[r].replace(dl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=fl(),r&&!r.isStart&&!n[Zt]&&(wh(n),i.uncache=1)}},Th=function(t,e){var n={target:t,props:[],revert:K0,save:$0};return e&&e.split(",").forEach(function(i){return n.save(i)}),n},Eh,Po=function(t,e){var n=$n.createElementNS?$n.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):$n.createElement(t);return n.style?n:$n.createElement(t)},gn=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(dl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,Dr(e)||e,1)||""},Zc="O,Moz,ms,Ms,Webkit".split(","),Dr=function(t,e,n){var i=e||Mi,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Zc[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Zc[a]:"")+t},Do=function(){U0()&&window.document&&(qc=window,$n=qc.document,_r=$n.documentElement,Mi=Po("div")||{style:{}},Po("div"),Zt=Dr(Zt),hn=Zt+"Origin",Mi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Eh=!!Dr("perspective"),fl=ke.core.reverting,hl=1)},so=function o(t){var e=Po("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(_r.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),_r.removeChild(e),this.style.cssText=r,a},$c=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Ah=function(t){var e;try{e=t.getBBox()}catch{e=so.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===so||(e=so.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+$c(t,["x","cx","x1"])||0,y:+$c(t,["y","cy","y1"])||0,width:0,height:0}:e},Ch=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ah(t))},Qr=function(t,e){if(e){var n=t.style;e in Bn&&e!==hn&&(e=Zt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(dl,"-$1").toLowerCase())):n.removeAttribute(e)}},Kn=function(t,e,n,i,r,a){var s=new Ce(t._pt,e,n,0,1,a?Sh:bh);return t._pt=s,s.b=i,s.e=r,t._props.push(n),s},Kc={deg:1,rad:1,turn:1},J0={grid:1,flex:1},ii=function o(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=Mi.style,c=B0.test(e),l=t.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,_;return i===a||!r||Kc[i]||Kc[a]?r:(a!=="px"&&!f&&(r=o(t,e,n,"px")),_=t.getCTM&&Ch(t),(m||a==="%")&&(Bn[e]||~e.indexOf("adius"))?(g=_?t.getBBox()[c?"width":"height"]:t[u],Jt(m?r/g*h:r/100*g)):(s[c?"width":"height"]=h+(f?a:i),d=~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,_&&(d=(t.ownerSVGElement||{}).parentNode),(!d||d===$n||!d.appendChild)&&(d=$n.body),p=d._gsap,p&&m&&p.width&&c&&p.time===ze.time&&!p.uncache?Jt(r/p.width*h):((m||a==="%")&&!J0[gn(d,"display")]&&(s.position=gn(t,"position")),d===t&&(s.position="static"),d.appendChild(Mi),g=Mi[u],d.removeChild(Mi),s.position="absolute",c&&m&&(p=Ei(d),p.time=ze.time,p.width=d[u]),Jt(f?g*r/h:g&&r?h/g*r:0))))},Cn=function(t,e,n,i){var r;return hl||Do(),e in Dn&&e!=="transform"&&(e=Dn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Bn[e]&&e!=="transform"?(r=es(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:qs(gn(t,hn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Xs[e]&&Xs[e](t,e,n)||gn(t,e)||qu(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ii(t,e,r,n)+n:r},Q0=function(t,e,n,i){if(!n||n==="none"){var r=Dr(e,t,1),a=r&&gn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=gn(t,"borderTopColor"))}var s=new Ce(this._pt,t.style,e,0,1,vh),c=0,l=0,u,h,f,m,g,d,p,_,M,b,y,x;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=gn(t,e)||i,t.style[e]=n),u=[n,i],ch(u),n=u[0],i=u[1],f=n.match(fr)||[],x=i.match(fr)||[],x.length){for(;h=fr.exec(i);)p=h[0],M=i.substring(c,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(d=f[l++]||"")&&(m=parseFloat(d)||0,y=d.substr((m+"").length),p.charAt(1)==="="&&(p=gr(m,p)+y),_=parseFloat(p),b=p.substr((_+"").length),c=fr.lastIndex-b.length,b||(b=b||Ue.units[e]||y,c===i.length&&(i+=b,s.e+=b)),y!==b&&(m=ii(t,e,d,b)||0),s._pt={_next:s._pt,p:M||l===1?M:",",s:m,c:_-m,m:g&&g<4||e==="zIndex"?Math.round:0});s.c=c<i.length?i.substring(c,i.length):""}else s.r=e==="display"&&i==="none"?Sh:bh;return ku.test(i)&&(s.e=0),this._pt=s,s},Jc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Jc[n]||n,e[1]=Jc[i]||i,e.join(" ")},ex=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,s,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)s=r[l],Bn[s]&&(c=1,s=s==="transformOrigin"?hn:Zt),Qr(n,s);c&&(Qr(n,Zt),a&&(a.svg&&n.removeAttribute("transform"),es(n,1),a.uncache=1,wh(i)))}},Xs={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Ce(t._pt,e,n,0,0,ex);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},ts=[1,0,0,1,0,0],Lh={},Ph=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Qc=function(t){var e=gn(t,Zt);return Ph(e)?ts:e.substr(7).match(Bu).map(Jt)},pl=function(t,e){var n=t._gsap||Ei(t),i=t.style,r=Qc(t),a,s,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?ts:r):(r===ts&&!t.offsetParent&&t!==_r&&!n.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(l=1,s=t.nextElementSibling,_r.appendChild(t)),r=Qc(t),c?i.display=c:Qr(t,"display"),l&&(s?a.insertBefore(t,s):a?a.appendChild(t):_r.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ro=function(t,e,n,i,r,a){var s=t._gsap,c=r||pl(t,!0),l=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,f=s.yOffset||0,m=c[0],g=c[1],d=c[2],p=c[3],_=c[4],M=c[5],b=e.split(" "),y=parseFloat(b[0])||0,x=parseFloat(b[1])||0,A,L,v,w;n?c!==ts&&(L=m*p-g*d)&&(v=y*(p/L)+x*(-d/L)+(d*M-p*_)/L,w=y*(-g/L)+x*(m/L)-(m*M-g*_)/L,y=v,x=w):(A=Ah(t),y=A.x+(~b[0].indexOf("%")?y/100*A.width:y),x=A.y+(~(b[1]||b[0]).indexOf("%")?x/100*A.height:x)),i||i!==!1&&s.smooth?(_=y-l,M=x-u,s.xOffset=h+(_*m+M*d)-_,s.yOffset=f+(_*g+M*p)-M):s.xOffset=s.yOffset=0,s.xOrigin=y,s.yOrigin=x,s.smooth=!!i,s.origin=e,s.originIsAbsolute=!!n,t.style[hn]="0px 0px",a&&(Kn(a,s,"xOrigin",l,y),Kn(a,s,"yOrigin",u,x),Kn(a,s,"xOffset",h,s.xOffset),Kn(a,s,"yOffset",f,s.yOffset)),t.setAttribute("data-svg-origin",y+" "+x)},es=function(t,e){var n=t._gsap||new dh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",s="deg",c=getComputedStyle(t),l=gn(t,hn)||"0",u,h,f,m,g,d,p,_,M,b,y,x,A,L,v,w,D,H,J,N,I,B,q,j,k,F,U,Q,$,K,at,dt;return u=h=f=d=p=_=M=b=y=0,m=g=1,n.svg=!!(t.getCTM&&Ch(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Zt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+c[Zt]),i.scale=i.rotate=i.translate="none"),L=pl(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),l=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",j=""):j=!e&&t.getAttribute("data-svg-origin"),Ro(t,j||l,!!j||n.originIsAbsolute,n.smooth!==!1,L)),x=n.xOrigin||0,A=n.yOrigin||0,L!==ts&&(H=L[0],J=L[1],N=L[2],I=L[3],u=B=L[4],h=q=L[5],L.length===6?(m=Math.sqrt(H*H+J*J),g=Math.sqrt(I*I+N*N),d=H||J?cr(J,H)*mi:0,M=N||I?cr(N,I)*mi+d:0,M&&(g*=Math.abs(Math.cos(M*xr))),n.svg&&(u-=x-(x*H+A*N),h-=A-(x*J+A*I))):(dt=L[6],K=L[7],U=L[8],Q=L[9],$=L[10],at=L[11],u=L[12],h=L[13],f=L[14],v=cr(dt,$),p=v*mi,v&&(w=Math.cos(-v),D=Math.sin(-v),j=B*w+U*D,k=q*w+Q*D,F=dt*w+$*D,U=B*-D+U*w,Q=q*-D+Q*w,$=dt*-D+$*w,at=K*-D+at*w,B=j,q=k,dt=F),v=cr(-N,$),_=v*mi,v&&(w=Math.cos(-v),D=Math.sin(-v),j=H*w-U*D,k=J*w-Q*D,F=N*w-$*D,at=I*D+at*w,H=j,J=k,N=F),v=cr(J,H),d=v*mi,v&&(w=Math.cos(v),D=Math.sin(v),j=H*w+J*D,k=B*w+q*D,J=J*w-H*D,q=q*w-B*D,H=j,B=k),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=Jt(Math.sqrt(H*H+J*J+N*N)),g=Jt(Math.sqrt(q*q+dt*dt)),v=cr(B,q),M=Math.abs(v)>2e-4?v*mi:0,y=at?1/(at<0?-at:at):0),n.svg&&(j=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Ph(gn(t,Zt)),j&&t.setAttribute("transform",j))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(m*=-1,M+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Jt(m),n.scaleY=Jt(g),n.rotation=Jt(d)+s,n.rotationX=Jt(p)+s,n.rotationY=Jt(_)+s,n.skewX=M+s,n.skewY=b+s,n.transformPerspective=y+a,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[hn]=qs(l)),n.xOffset=n.yOffset=0,n.force3D=Ue.force3D,n.renderTransform=n.svg?ix:Eh?Dh:nx,n.uncache=0,n},qs=function(t){return(t=t.split(" "))[0]+" "+t[1]},ao=function(t,e,n){var i=me(e);return Jt(parseFloat(e)+parseFloat(ii(t,"x",n+"px",i)))+i},nx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Dh(t,e)},ui="0deg",Br="0px",hi=") ",Dh=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,M=n.target,b=n.zOrigin,y="",x=_==="auto"&&t&&t!==1||_===!0;if(b&&(h!==ui||u!==ui)){var A=parseFloat(u)*xr,L=Math.sin(A),v=Math.cos(A),w;A=parseFloat(h)*xr,w=Math.cos(A),a=ao(M,a,L*w*-b),s=ao(M,s,-Math.sin(A)*-b),c=ao(M,c,v*w*-b+b)}p!==Br&&(y+="perspective("+p+hi),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(x||a!==Br||s!==Br||c!==Br)&&(y+=c!==Br||x?"translate3d("+a+", "+s+", "+c+") ":"translate("+a+", "+s+hi),l!==ui&&(y+="rotate("+l+hi),u!==ui&&(y+="rotateY("+u+hi),h!==ui&&(y+="rotateX("+h+hi),(f!==ui||m!==ui)&&(y+="skew("+f+", "+m+hi),(g!==1||d!==1)&&(y+="scale("+g+", "+d+hi),M.style[Zt]=y||"translate(0, 0)"},ix=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,M=n.forceCSS,b=parseFloat(a),y=parseFloat(s),x,A,L,v,w;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=xr,l*=xr,x=Math.cos(c)*h,A=Math.sin(c)*h,L=Math.sin(c-l)*-f,v=Math.cos(c-l)*f,l&&(u*=xr,w=Math.tan(l-u),w=Math.sqrt(1+w*w),L*=w,v*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),x*=w,A*=w)),x=Jt(x),A=Jt(A),L=Jt(L),v=Jt(v)):(x=h,v=f,A=L=0),(b&&!~(a+"").indexOf("px")||y&&!~(s+"").indexOf("px"))&&(b=ii(m,"x",a,"px"),y=ii(m,"y",s,"px")),(g||d||p||_)&&(b=Jt(b+g-(g*x+d*L)+p),y=Jt(y+d-(g*A+d*v)+_)),(i||r)&&(w=m.getBBox(),b=Jt(b+i/100*w.width),y=Jt(y+r/100*w.height)),w="matrix("+x+","+A+","+L+","+v+","+b+","+y+")",m.setAttribute("transform",w),M&&(m.style[Zt]=w)},rx=function(t,e,n,i,r){var a=360,s=ue(r),c=parseFloat(r)*(s&&~r.indexOf("rad")?mi:1),l=c-i,u=i+l+"deg",h,f;return s&&(h=r.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*Yc)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*Yc)%a-~~(l/a)*a)),t._pt=f=new Ce(t._pt,e,n,i,l,G0),f.e=u,f.u="deg",t._props.push(n),f},tu=function(t,e){for(var n in e)t[n]=e[n];return t},sx=function(t,e,n){var i=tu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,c,l,u,h,f,m,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[Zt]=e,s=es(n,1),Qr(n,Zt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Zt],a[Zt]=e,s=es(n,1),a[Zt]=l);for(c in Bn)l=i[c],u=s[c],l!==u&&r.indexOf(c)<0&&(m=me(l),g=me(u),h=m!==g?ii(n,c,l,g):parseFloat(l),f=parseFloat(u),t._pt=new Ce(t._pt,s,c,h,f-h,Lo),t._pt.u=g||0,t._props.push(c));tu(s,i)};Ae("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(s){return t<2?o+s:"border"+s+o});Xs[t>1?"border"+o:o]=function(s,c,l,u,h){var f,m;if(arguments.length<4)return f=a.map(function(g){return Cn(s,g,l)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),s.init(c,m,h)}});var Rh={name:"css",register:Do,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,s=t.style,c=n.vars.startAt,l,u,h,f,m,g,d,p,_,M,b,y,x,A,L,v;hl||Do(),this.styles=this.styles||Th(t),v=this.styles.props,this.tween=n;for(d in e)if(d!=="autoRound"&&(u=e[d],!(Fe[d]&&ph(d,e,n,i,t,r)))){if(m=typeof u,g=Xs[d],m==="function"&&(u=u.call(n,i,t,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Kr(u)),g)g(this,t,d,u,n)&&(L=1);else if(d.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(d)+"").trim(),u+="",ti.lastIndex=0,ti.test(l)||(p=me(l),_=me(u)),_?p!==_&&(l=ii(t,d,l,_)+_):p&&(u+=p),this.add(s,"setProperty",l,u,i,r,0,0,d),a.push(d),v.push(d,s[d]);else if(m!=="undefined"){if(c&&d in c?(l=typeof c[d]=="function"?c[d].call(n,i,t,r):c[d],ue(l)&&~l.indexOf("random(")&&(l=Kr(l)),me(l+"")||(l+=Ue.units[d]||me(Cn(t,d))||""),(l+"").charAt(1)==="="&&(l=Cn(t,d))):l=Cn(t,d),f=parseFloat(l),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),d in Dn&&(d==="autoAlpha"&&(f===1&&Cn(t,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",s.visibility),Kn(this,s,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Dn[d],~d.indexOf(",")&&(d=d.split(",")[0]))),b=d in Bn,b){if(this.styles.save(d),y||(x=t._gsap,x.renderTransform&&!e.parseTransform||es(t,e.parseTransform),A=e.smoothOrigin!==!1&&x.smooth,y=this._pt=new Ce(this._pt,s,Zt,0,1,x.renderTransform,x,0,-1),y.dep=1),d==="scale")this._pt=new Ce(this._pt,x,"scaleY",x.scaleY,(M?gr(x.scaleY,M+h):h)-x.scaleY||0,Lo),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){v.push(hn,s[hn]),u=tx(u),x.svg?Ro(t,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==x.zOrigin&&Kn(this,x,"zOrigin",x.zOrigin,_),Kn(this,s,d,qs(l),qs(u)));continue}else if(d==="svgOrigin"){Ro(t,u,1,A,0,this);continue}else if(d in Lh){rx(this,x,d,f,M?gr(f,M+u):u);continue}else if(d==="smoothOrigin"){Kn(this,x,"smooth",x.smooth,u);continue}else if(d==="force3D"){x[d]=u;continue}else if(d==="transform"){sx(this,u,t);continue}}else d in s||(d=Dr(d)||d);if(b||(h||h===0)&&(f||f===0)&&!k0.test(u)&&d in s)p=(l+"").substr((f+"").length),h||(h=0),_=me(u)||(d in Ue.units?Ue.units[d]:p),p!==_&&(f=ii(t,d,l,_)),this._pt=new Ce(this._pt,b?x:s,d,f,(M?gr(f,M+h):h)-f,!b&&(_==="px"||d==="zIndex")&&e.autoRound!==!1?W0:Lo),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=l,this._pt.r=V0);else if(d in s)Q0.call(this,t,d,l,M?M+u:u);else if(d in t)this.add(t,d,l||t[d],M?M+u:u,i,r);else{nl(d,u);continue}b||v.push(d,s[d]),a.push(d)}}L&&Mh(this)},render:function(t,e){if(e.tween._time||!fl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Cn,aliases:Dn,getSetter:function(t,e,n){var i=Dn[e];return i&&i.indexOf(",")<0&&(e=i),e in Bn&&e!==hn&&(t._gsap.x||Cn(t,"x"))?n&&jc===n?e==="scale"?j0:q0:(jc=n||{})&&(e==="scale"?Y0:Z0):t.style&&!tl(t.style[e])?H0:~e.indexOf("-")?X0:cl(t,e)},core:{_removeProperty:Qr,_getMatrix:pl}};ke.utils.checkPrefix=Dr;ke.core.getStyleSaver=Th;(function(o,t,e,n){var i=Ae(o+","+t+","+e,function(r){Bn[r]=1});Ae(t,function(r){Ue.units[r]="deg",Lh[r]=1}),Dn[i[13]]=o+","+t,Ae(n,function(r){var a=r.split(":");Dn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ae("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ue.units[o]="px"});ke.registerPlugin(Rh);var Ih=ke.registerPlugin(Rh)||ke;Ih.core.Tween;const eu={type:"change"},oo={type:"start"},nu={type:"end"};class ax extends ki{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Pe),this._domElementKeyEvents=T},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(eu),n.update(),r=i.NONE},this.update=function(){const T=new R,Z=new Ii().setFromUnitVectors(t.up,new R(0,1,0)),nt=Z.clone().invert(),lt=new R,st=new Ii,vt=2*Math.PI;return function(){const Wt=n.object.position;T.copy(Wt).sub(n.target),T.applyQuaternion(Z),s.setFromVector3(T),n.autoRotate&&r===i.NONE&&w(L()),n.enableDamping?(s.theta+=c.theta*n.dampingFactor,s.phi+=c.phi*n.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let P=n.minAzimuthAngle,rt=n.maxAzimuthAngle;return isFinite(P)&&isFinite(rt)&&(P<-Math.PI?P+=vt:P>Math.PI&&(P-=vt),rt<-Math.PI?rt+=vt:rt>Math.PI&&(rt-=vt),P<=rt?s.theta=Math.max(P,Math.min(rt,s.theta)):s.theta=s.theta>(P+rt)/2?Math.max(P,s.theta):Math.min(rt,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=l,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),T.setFromSpherical(s),T.applyQuaternion(nt),Wt.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||lt.distanceToSquared(n.object.position)>a||8*(1-st.dot(n.object.quaternion))>a?(n.dispatchEvent(eu),lt.copy(n.object.position),st.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",Qt),n.domElement.removeEventListener("pointercancel",Le),n.domElement.removeEventListener("wheel",Ge),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",re),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Pe)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,s=new Uc,c=new Uc;let l=1;const u=new R;let h=!1;const f=new bt,m=new bt,g=new bt,d=new bt,p=new bt,_=new bt,M=new bt,b=new bt,y=new bt,x=[],A={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function w(T){c.theta-=T}function D(T){c.phi-=T}const H=function(){const T=new R;return function(nt,lt){T.setFromMatrixColumn(lt,0),T.multiplyScalar(-nt),u.add(T)}}(),J=function(){const T=new R;return function(nt,lt){n.screenSpacePanning===!0?T.setFromMatrixColumn(lt,1):(T.setFromMatrixColumn(lt,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(nt),u.add(T)}}(),N=function(){const T=new R;return function(nt,lt){const st=n.domElement;if(n.object.isPerspectiveCamera){const vt=n.object.position;T.copy(vt).sub(n.target);let At=T.length();At*=Math.tan(n.object.fov/2*Math.PI/180),H(2*nt*At/st.clientHeight,n.object.matrix),J(2*lt*At/st.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(nt*(n.object.right-n.object.left)/n.object.zoom/st.clientWidth,n.object.matrix),J(lt*(n.object.top-n.object.bottom)/n.object.zoom/st.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(T){n.object.isPerspectiveCamera?l/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(T){n.object.isPerspectiveCamera?l*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(T){f.set(T.clientX,T.clientY)}function j(T){M.set(T.clientX,T.clientY)}function k(T){d.set(T.clientX,T.clientY)}function F(T){m.set(T.clientX,T.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const Z=n.domElement;w(2*Math.PI*g.x/Z.clientHeight),D(2*Math.PI*g.y/Z.clientHeight),f.copy(m),n.update()}function U(T){b.set(T.clientX,T.clientY),y.subVectors(b,M),y.y>0?I(v()):y.y<0&&B(v()),M.copy(b),n.update()}function Q(T){p.set(T.clientX,T.clientY),_.subVectors(p,d).multiplyScalar(n.panSpeed),N(_.x,_.y),d.copy(p),n.update()}function $(T){T.deltaY<0?B(v()):T.deltaY>0&&I(v()),n.update()}function K(T){let Z=!1;switch(T.code){case n.keys.UP:N(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:N(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:N(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:N(-n.keyPanSpeed,0),Z=!0;break}Z&&(T.preventDefault(),n.update())}function at(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const T=.5*(x[0].pageX+x[1].pageX),Z=.5*(x[0].pageY+x[1].pageY);f.set(T,Z)}}function dt(){if(x.length===1)d.set(x[0].pageX,x[0].pageY);else{const T=.5*(x[0].pageX+x[1].pageX),Z=.5*(x[0].pageY+x[1].pageY);d.set(T,Z)}}function Y(){const T=x[0].pageX-x[1].pageX,Z=x[0].pageY-x[1].pageY,nt=Math.sqrt(T*T+Z*Z);M.set(0,nt)}function Ft(){n.enableZoom&&Y(),n.enablePan&&dt()}function _t(){n.enableZoom&&Y(),n.enableRotate&&at()}function Mt(T){if(x.length==1)m.set(T.pageX,T.pageY);else{const nt=xt(T),lt=.5*(T.pageX+nt.x),st=.5*(T.pageY+nt.y);m.set(lt,st)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const Z=n.domElement;w(2*Math.PI*g.x/Z.clientHeight),D(2*Math.PI*g.y/Z.clientHeight),f.copy(m)}function ft(T){if(x.length===1)p.set(T.pageX,T.pageY);else{const Z=xt(T),nt=.5*(T.pageX+Z.x),lt=.5*(T.pageY+Z.y);p.set(nt,lt)}_.subVectors(p,d).multiplyScalar(n.panSpeed),N(_.x,_.y),d.copy(p)}function zt(T){const Z=xt(T),nt=T.pageX-Z.x,lt=T.pageY-Z.y,st=Math.sqrt(nt*nt+lt*lt);b.set(0,st),y.set(0,Math.pow(b.y/M.y,n.zoomSpeed)),I(y.y),M.copy(b)}function wt(T){n.enableZoom&&zt(T),n.enablePan&&ft(T)}function mt(T){n.enableZoom&&zt(T),n.enableRotate&&Mt(T)}function Qt(T){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",he),n.domElement.addEventListener("pointerup",re)),tt(T),T.pointerType==="touch"?C(T):se(T))}function he(T){n.enabled!==!1&&(T.pointerType==="touch"?S(T):Ut(T))}function re(T){et(T),x.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",re)),n.dispatchEvent(nu),r=i.NONE}function Le(T){et(T)}function se(T){let Z;switch(T.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case ji.DOLLY:if(n.enableZoom===!1)return;j(T),r=i.DOLLY;break;case ji.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;k(T),r=i.PAN}else{if(n.enableRotate===!1)return;q(T),r=i.ROTATE}break;case ji.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;q(T),r=i.ROTATE}else{if(n.enablePan===!1)return;k(T),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(oo)}function Ut(T){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;F(T);break;case i.DOLLY:if(n.enableZoom===!1)return;U(T);break;case i.PAN:if(n.enablePan===!1)return;Q(T);break}}function Ge(T){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(T.preventDefault(),n.dispatchEvent(oo),$(T),n.dispatchEvent(nu))}function Pe(T){n.enabled===!1||n.enablePan===!1||K(T)}function C(T){switch(ot(T),x.length){case 1:switch(n.touches.ONE){case Yi.ROTATE:if(n.enableRotate===!1)return;at(),r=i.TOUCH_ROTATE;break;case Yi.PAN:if(n.enablePan===!1)return;dt(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Yi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ft(),r=i.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_t(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(oo)}function S(T){switch(ot(T),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Mt(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ft(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;wt(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(T),n.update();break;default:r=i.NONE}}function V(T){n.enabled!==!1&&T.preventDefault()}function tt(T){x.push(T)}function et(T){delete A[T.pointerId];for(let Z=0;Z<x.length;Z++)if(x[Z].pointerId==T.pointerId){x.splice(Z,1);return}}function ot(T){let Z=A[T.pointerId];Z===void 0&&(Z=new bt,A[T.pointerId]=Z),Z.set(T.pageX,T.pageY)}function xt(T){const Z=T.pointerId===x[0].pointerId?x[1]:x[0];return A[Z.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",Qt),n.domElement.addEventListener("pointercancel",Le),n.domElement.addEventListener("wheel",Ge,{passive:!1}),this.update()}}const Lt=new U_,ns=new Ne(75,window.innerWidth/window.innerHeight,.1,1e3),ua=new Du({canvas:document.querySelector("#bg")});ua.setPixelRatio(window.devicePixelRatio);ua.setSize(window.innerWidth,window.innerHeight);ns.position.setZ(30);const ox=new ax(ns,ua.domElement),lx=new ls(12,.6,16,100),cx=new Ko({color:16663397}),ux=new ls(9,.6,16,100),hx=new Ko({color:16371117}),fx=new ls(10.5,.6,16,100),dx=new Ko({color:16555418}),ml=new Jo(16777215,1.3,200);ml.position.z=30;ml.decay=0;new Jo(16777215);new Jo(16777215);Lt.add(ml);const px=new X_(16777215,1.5);px.position.set(0,-1,1);const yi=new gt(lx,cx),bi=new gt(ux,hx),Si=new gt(fx,dx),mx=document.body.getBoundingClientRect().top,gx=new ve(42,22,40,40),_x=new It().load("assets/img/for.png"),xx=new kt({map:_x}),is=new gt(gx,xx);Lt.add(is);is.position.x-=20;is.position.z-=10;yi.position.x+=20;bi.position.x+=20;Si.position.x+=20;yi.position.z-=10;bi.position.z-=10;Si.position.z-=10;const vx=new It().load("assets/img/space.jpg");Lt.background=vx;Lt.add(yi);Lt.add(bi);Lt.add(Si);const Mx=new It().load("assets/img/moon.jpg"),yx=new It().load("assets/img/normal.jpg"),bx=new It().load("assets/img/me.png"),vr=new gt(new Vi(11,11,11),new qo({map:bx})),Oh=new gt(new $o(3,32,32),new kt({map:Mx,normalMap:yx}));vr.position.x+=20;vr.position.z-=10;const Ir=new ve(12.5,12.5,40,40),Sx=new It().load("assets/img/1.png"),wx=new kt({map:Sx}),iu=new gt(Ir,wx),Tx=new It().load("assets/img/2.png"),Ex=new kt({map:Tx}),ru=new gt(Ir,Ex),Ax=new It().load("assets/img/3.png"),Cx=new kt({map:Ax}),su=new gt(Ir,Cx),Lx=new It().load("assets/img/4.png"),Px=new kt({map:Lx}),au=new gt(Ir,Px),Dx=new It().load("assets/img/5.png"),Rx=new kt({map:Dx}),ou=new gt(Ir,Rx),Ix=new It().load("assets/img/6.png"),Ox=new kt({map:Ix}),lu=new gt(Ir,Ox),Fx=new ve(52,20,40,40),Nx=new It().load("assets/img/job1.png"),zx=new kt({map:Nx}),Ni=new gt(Fx,zx),Fh=new ve(40,20,40,40),Ux=new It().load("assets/img/job2.png"),Bx=new kt({map:Ux}),zi=new gt(Fh,Bx),kx=new ve(45,20,40,40),Gx=new It().load("assets/img/job3.png"),Vx=new kt({map:Gx}),Ui=new gt(kx,Vx),Wx=new It().load("assets/img/job4.png"),Hx=new kt({map:Wx}),Bi=new gt(Fh,Hx),vn=new Vi(3,3,3),Xx=new It().load("assets/img/e.png"),ha=new kt({map:Xx}),js=new gt(vn,ha),Ys=new gt(vn,ha),Zs=new gt(vn,ha),$s=new gt(vn,ha),qx=new It().load("assets/img/r.png"),jx=new kt({map:qx}),Ks=new gt(vn,jx),Yx=new It().load("assets/img/i.png"),Zx=new kt({map:Yx}),Js=new gt(vn,Zx),$x=new It().load("assets/img/n.png"),Kx=new kt({map:$x}),Qs=new gt(vn,Kx),Jx=new It().load("assets/img/x.png"),Qx=new kt({map:Jx}),ta=new gt(vn,Qx),tv=new It().load("assets/img/p.png"),ev=new kt({map:tv}),ea=new gt(vn,ev),nv=new It().load("assets/img/c.png"),iv=new kt({map:nv}),na=new gt(vn,iv);Lt.add(js);Lt.add(Ys);Lt.add(Zs);Lt.add(Ks);Lt.add(Js);Lt.add(Qs);Lt.add(ta);Lt.add(ea);Lt.add(na);Lt.add($s);const rv=[js,ta,ea,Ys,Ks,Js,Zs,Qs,na,$s];let cu=-27,sv=6;for(let o of rv)o.position.z+=70,o.rotation.x-=3,o.position.y-=23,o.position.x+=cu,cu+=sv;Ni.position.z+=70;Ni.rotation.x-=3;Ni.position.x-=22;Ni.position.y-=8;zi.position.z+=70;zi.rotation.x-=3;zi.position.x+=28;zi.position.y-=8;Ui.position.z+=70;Ui.rotation.x-=3;Ui.position.x+=22;Ui.position.y+=14;Bi.position.z+=70;Bi.rotation.x-=3;Bi.position.x-=24;Bi.position.y+=14;Lt.add(Ni);Lt.add(zi);Lt.add(Ui);Lt.add(Bi);const av=new ve(32,25,40,40),ov=new It().load("assets/img/poker.png"),lv=new kt({map:ov}),Rn=new gt(av,lv);Lt.add(Rn);Rn.position.x+=50;Rn.rotation.x+=1.55;Rn.position.y+=50;Rn.position.z+=42;const cv=new ve(38,38,40,40),uv=new It().load("assets/img/paper.png"),hv=new kt({map:uv}),In=new gt(cv,hv);Lt.add(In);In.position.x-=60;In.rotation.x+=1.55;In.position.y+=60;In.position.z-=2;const fv=new ve(32,48,40,40),dv=new It().load("assets/img/on-night.gif"),pv=new kt({map:dv}),On=new gt(fv,pv);Lt.add(On);On.position.x+=57;On.rotation.x+=1.55;On.position.y+=60;On.position.z+=2;const mv=new ve(25,25,40,40),gv=new It().load("assets/img/evolution_of_music.png"),_v=new kt({map:gv}),Fn=new gt(mv,_v);Lt.add(Fn);Fn.position.x-=39.6;Fn.rotation.x+=1.55;Fn.position.y+=40;Fn.position.z+=37;const xv=new ve(24,24,40,40),vv=new It().load("assets/img/ep.png"),Mv=new kt({map:vv}),Nh=new gt(xv,Mv),yv=new ve(50,54,40,40),bv=new It().load("assets/img/personalprojects.png"),Sv=new kt({map:bv}),fa=new gt(yv,Sv);Lt.add(fa);fa.rotation.x+=1.55;fa.position.y+=40;fa.position.z+=23;const wv=new ve(120,40,40,40),Tv=new It().load("assets/img/ab.png"),Ev=new kt({map:Tv}),us=new gt(wv,Ev);Lt.add(us);us.rotation.x-=1.5;us.position.z+=16;const gl=new Zo(10,32),Av=new It().load("assets/img/linkedin.png"),Cv=new kt({map:Av}),ei=new gt(gl,Cv);Lt.add(ei);ei.rotation.x-=1.5;ei.position.z+=50;ei.position.x-=30;const Lv=new It().load("assets/img/github.png"),Pv=new kt({map:Lv}),Li=new gt(gl,Pv);Lt.add(Li);Li.rotation.x-=1.5;Li.position.z+=50;const Dv=new It().load("assets/img/e-mail.png"),Rv=new kt({map:Dv}),ni=new gt(gl,Rv);Lt.add(ni);ni.rotation.x-=1.5;ni.position.z+=50;ni.position.x+=30;const Xe=new q_,Io={x:void 0,y:void 0};addEventListener("mousemove",o=>{Io.x=o.clientX/innerWidth*2-1,Io.y=-o.clientY/innerHeight*2+1});Nh.position.y=mx*-.06-43;us.position.y=-65;ei.position.y-=65;Li.position.y-=65;ni.position.y-=65;function Iv(){const o=document.body.getBoundingClientRect().top;ns.rotation.x=.005*o}document.body.onscroll=Iv;Oh.position.z=30;Oh.position.setX(-10);Lt.add(vr);const da=new ve(400,400,50,50),pa=new B_({side:Pn,flatShading:!0,vertexColors:!0}),Ze=new gt(da,pa);Lt.add(Ze);Ze.position.z-=40;const rs=new gt(da,pa);Lt.add(rs);rs.rotation.x-=1.57;rs.position.y-=70;const _l=new gt(da,pa);Lt.add(_l);_l.position.z+=100;const ma=new gt(da,pa);Lt.add(ma);ma.rotation.x-=1.57;ma.position.y+=70;const fi=Ze.geometry.attributes.position.array,Oo=[];for(let o=0;o<fi.length;o+=1){if(o%3==0){const t=fi[o],e=fi[o+1],n=fi[o+2];fi[o]=t+Math.random()-.5,fi[o+1]=e+Math.random()-.5,fi[o+2]=n+Math.random()*2}Oo.push(Math.random()-.5)}const zh=[];for(let o=0;o<Ze.geometry.attributes.position.count;o++)zh.push(0,.19,.4);let Fo=!1,No=!1,zo=!1,Uo=!1,Bo=!1,ko=!1,Go=!1;addEventListener("click",o=>{Fo&&window.open("https://github.com/william-toth/lyrical-creativity-score"),Uo&&window.open("https://github.com/william-toth/poker-outs"),No&&window.open("https://github.com/william-toth/Data_Analysis_Evolution_of_Popular_Music"),zo&&window.open("https://apps.apple.com/us/app/onnight/id1612553554"),Bo&&window.open("https://github.com/william-toth"),Go&&window.open("https://www.linkedin.com/in/william-toth-054388198/"),ko&&(window.location.href="mailto:william.a.toth.23@dartmouth.edu")});Ze.geometry.setAttribute("color",new un(new Float32Array(zh),3));Ze.geometry.attributes.position.originalPostion=Ze.geometry.attributes.position.array;let ut=0;function Uh(){ut+=.004,requestAnimationFrame(Uh),Xe.setFromCamera(Io,ns);let o=[];o.push(Xe.intersectObject(Ze)),o.push(Xe.intersectObject(rs)),o.push(Xe.intersectObject(_l)),o.push(Xe.intersectObject(ma));let t=Xe.intersectObject(In);t.length>0?Fo=!0:Fo=!1;let e=Xe.intersectObject(Fn);e.length>0?No=!0:No=!1;let n=Xe.intersectObject(Rn);n.length>0?Uo=!0:Uo=!1;let i=Xe.intersectObject(On);i.length>0?zo=!0:zo=!1;let r=Xe.intersectObject(Li);r.length>0?Bo=!0:Bo=!1;let a=Xe.intersectObject(ni);a.length>0?ko=!0:ko=!1;let s=Xe.intersectObject(ei);s.length>0?Go=!0:Go=!1,t.length>0||n.length>0||e.length>0||i.length>0||r.length>0||s.length>0||a.length>0?document.body.style.cursor="pointer":document.body.style.cursor="default";for(let u of o)if(u.length>0){const{color:h}=u[0].object.geometry.attributes;h.setX(u[0].face.a,.1),h.setY(u[0].face.a,.5),h.setZ(u[0].face.a,1),h.setX(u[0].face.b,.1),h.setY(u[0].face.b,.5),h.setZ(u[0].face.b,1),h.setX(u[0].face.c,.1),h.setY(u[0].face.c,.5),h.setZ(u[0].face.c,1),h.needsUpdate=!0;const f={r:0,g:.19,b:.4},m={r:.1,g:.5,b:1};Ih.to(m,{r:f.r,g:f.g,b:f.b,onUpdate:()=>{h.setX(u[0].face.a,m.r),h.setY(u[0].face.a,m.g),h.setZ(u[0].face.a,m.b),h.setX(u[0].face.b,m.r),h.setY(u[0].face.b,m.g),h.setZ(u[0].face.b,m.b),h.setX(u[0].face.c,m.r),h.setY(u[0].face.c,m.g),h.setZ(u[0].face.c,m.b)}})}yi.rotation.x+=.005,yi.rotation.y+=.0025,yi.rotation.z+=.005,bi.rotation.x+=.0025,bi.rotation.y+=.005,bi.rotation.z+=.005,Si.rotation.x+=.005,Si.rotation.y+=.005,Si.rotation.z+=.0025;const c=Ze.geometry.attributes.position.array,l=Ze.geometry.attributes.position.originalPostion;for(let u=0;u<Ze.geometry.attributes.position.array.length;u+=3)c[u]=l[u]+Math.cos(ut+Oo[u])*.02,c[u+1]=l[u+1]+Math.sin(ut+Oo[u+1])*.02;js.rotation.x+=Math.cos(ut*7)*.001,js.rotation.y+=Math.sin(ut*7)*.001,ta.rotation.x+=Math.cos(ut*4)*.00125,ta.rotation.y+=Math.sin(ut*4)*.00125,ea.rotation.x+=Math.sin(ut*6)*.001,ea.rotation.y+=Math.cos(ut*6)*.001,Ys.rotation.x+=Math.cos(ut*7)*.001,Ys.rotation.y+=Math.sin(ut*7)*.001,Ks.rotation.x+=Math.cos(ut*10)*.001,Ks.rotation.y+=Math.sin(ut*10)*.001,Js.rotation.x+=Math.cos(ut*4)*.00125,Js.rotation.y+=Math.sin(ut*4)*.00125,Zs.rotation.x+=Math.sin(ut*6)*.001,Zs.rotation.y+=Math.cos(ut*6)*.001,Qs.rotation.x+=Math.cos(ut*7)*.001,Qs.rotation.y+=Math.sin(ut*7)*.001,na.rotation.x+=Math.sin(ut*6)*.001,na.rotation.y+=Math.cos(ut*6)*.001,$s.rotation.x+=Math.cos(ut*7)*.001,$s.rotation.y+=Math.sin(ut*7)*.001,iu.rotation.x+=Math.cos(ut*7)*.002,iu.rotation.y+=Math.sin(ut*7)*.002,ru.rotation.x+=Math.cos(ut*10)*.002,ru.rotation.y+=Math.sin(ut*10)*.002,su.rotation.x+=Math.cos(ut*4)*.002,su.rotation.y+=Math.sin(ut*4)*.002,au.rotation.x+=Math.cos(ut*10)*.002,au.rotation.y+=Math.sin(ut*10)*.002,ou.rotation.x+=Math.cos(ut*2)*.002,ou.rotation.y+=Math.sin(ut*2)*.002,lu.rotation.x+=Math.cos(ut*7)*.002,lu.rotation.y+=Math.sin(ut*7)*.002,Rn.rotation.x+=Math.cos(ut*7)*1e-4,Rn.rotation.y+=Math.sin(ut*7)*1e-4,Rn.position.z+=Math.sin(ut*10)*.002,In.rotation.x+=Math.cos(ut*4)*2e-4,In.rotation.y+=Math.sin(ut*4)*2e-4,In.position.z+=Math.sin(ut*10)*.002,On.rotation.x+=Math.cos(ut*4)*2e-4,On.rotation.y+=Math.sin(ut*4)*2e-4,On.position.z+=Math.sin(ut*10)*.002,Fn.rotation.x+=Math.cos(ut*7)*1e-4,Fn.rotation.y+=Math.sin(ut*7)*1e-4,Fn.position.z+=Math.sin(ut*10)*.002,Nh.position.z+=Math.cos(ut*8.5)*.01,us.position.y+=Math.sin(ut*6)*.01,is.rotation.x+=Math.cos(ut*7)*65e-5,is.rotation.y+=Math.sin(ut*7)*65e-5,vr.position.z+=Math.sin(ut*8.5)*.05,yi.position.z+=Math.sin(ut*8.5)*.05,bi.position.z+=Math.sin(ut*8.5)*.05,Si.position.z+=Math.sin(ut*8.5)*.05,Ni.rotation.x+=Math.cos(ut*7)*3e-4,Ni.rotation.y+=Math.sin(ut*7)*3e-4,zi.rotation.x+=Math.sin(ut*6)*3e-4,zi.rotation.y+=Math.cos(ut*6)*3e-4,Ui.rotation.x+=Math.sin(ut*7)*3e-4,Ui.rotation.y+=Math.cos(ut*7)*3e-4,Bi.rotation.x+=Math.cos(ut*4)*3e-4,Bi.rotation.y+=Math.sin(ut*4)*3e-4,Li.rotation.x+=Math.cos(ut*7)*.0012,Li.rotation.y+=Math.sin(ut*7)*.0012,ni.rotation.x+=Math.sin(ut*6)*.0012,ni.rotation.y+=Math.cos(ut*6)*.0012,ei.rotation.x+=Math.sin(ut*7)*.0012,ei.rotation.y+=Math.cos(ut*7)*.0012,Ze.geometry.attributes.position.needsUpdate=!0,rs.geometry.attributes.position.needsUpdate=!0,vr.rotation.y+=.001,vr.rotation.z+=.005,ox.update,ua.render(Lt,ns)}Uh();
