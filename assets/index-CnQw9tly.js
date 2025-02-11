(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Po="173",iu=0,ul=1,ru=2,Lc=1,su=2,Fn=3,si=0,Qe=1,On=2,ii=0,Zi=1,dl=2,fl=3,pl=4,au=5,bi=100,ou=101,lu=102,cu=103,hu=104,uu=200,du=201,fu=202,pu=203,Ca=204,Pa=205,_u=206,mu=207,gu=208,wu=209,vu=210,bu=211,xu=212,Su=213,yu=214,Ia=0,Da=1,La=2,Qi=3,Ua=4,Fa=5,Na=6,Oa=7,Uc=0,Mu=1,Eu=2,ri=0,Tu=1,Ru=2,Au=3,Cu=4,Pu=5,Iu=6,Du=7,Fc=300,tr=301,er=302,Es=303,Ba=304,Bs=306,za=1e3,Hn=1001,Ha=1002,sn=1003,Lu=1004,Wr=1005,Ze=1006,$s=1007,ni=1008,Wn=1009,Nc=1010,Oc=1011,Mr=1012,Io=1013,Mi=1014,un=1015,kn=1016,Do=1017,Lo=1018,nr=1020,Bc=35902,zc=1021,Hc=1022,dn=1023,kc=1024,Gc=1025,Ki=1026,ir=1027,Uo=1028,Fo=1029,Vc=1030,No=1031,Oo=1033,vs=33776,bs=33777,xs=33778,Ss=33779,ka=35840,Ga=35841,Va=35842,Wa=35843,Xa=36196,qa=37492,Ya=37496,ja=37808,Za=37809,Ka=37810,$a=37811,Ja=37812,Qa=37813,to=37814,eo=37815,no=37816,io=37817,ro=37818,so=37819,ao=37820,oo=37821,ys=36492,lo=36494,co=36495,Wc=36283,ho=36284,uo=36285,fo=36286,Uu=3200,Fu=3201,Xc=0,Nu=1,Bn="",ln="srgb",ai="srgb-linear",Ts="linear",me="srgb",Ii=7680,_l=519,Ou=512,Bu=513,zu=514,qc=515,Hu=516,ku=517,Gu=518,Vu=519,ml=35044,gl="300 es",Gn=2e3,Rs=2001;class or{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Js=Math.PI/180,po=180/Math.PI;function Pr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function Wu(i,t){return(i%t+t)%t}function Qs(i,t,e){return(1-e)*i+e*t}function pr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ge{constructor(t=0,e=0){ge.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,r,s,a,o,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],g=n[5],b=n[8],y=r[0],w=r[3],m=r[6],U=r[1],P=r[4],R=r[7],X=r[2],O=r[5],z=r[8];return s[0]=a*y+o*U+l*X,s[3]=a*w+o*P+l*O,s[6]=a*m+o*R+l*z,s[1]=c*y+u*U+d*X,s[4]=c*w+u*P+d*O,s[7]=c*m+u*R+d*z,s[2]=f*y+g*U+b*X,s[5]=f*w+g*P+b*O,s[8]=f*m+g*R+b*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,f=o*l-u*s,g=c*s-a*l,b=e*d+n*f+r*g;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/b;return t[0]=d*y,t[1]=(r*c-u*n)*y,t[2]=(o*n-r*a)*y,t[3]=f*y,t[4]=(u*e-r*l)*y,t[5]=(r*s-o*e)*y,t[6]=g*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ta.makeScale(t,e)),this}rotate(t){return this.premultiply(ta.makeRotation(-t)),this}translate(t,e){return this.premultiply(ta.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new $t;function Yc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function As(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xu(){const i=As("canvas");return i.style.display="block",i}const wl={};function Xi(i){i in wl||(wl[i]=!0,console.warn(i))}function qu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Yu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ju(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const vl=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zu(){const i={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===me&&(r.r=Vn(r.r),r.g=Vn(r.g),r.b=Vn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bn?Ts:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ai]:{primaries:t,whitePoint:n,transfer:Ts,toXYZ:vl,fromXYZ:bl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:n,transfer:me,toXYZ:vl,fromXYZ:bl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}const ue=Zu();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Di;class Ku{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=As("canvas")),Di.width=t.width,Di.height=t.height;const n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=As("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Vn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $u=0;class jc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Pr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ea(r[a].image)):s.push(ea(r[a]))}else s=ea(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ku.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ju=0;class Ke extends or{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=Hn,r=Hn,s=Ze,a=ni,o=dn,l=Wn,c=Ke.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Pr(),this.name="",this.source=new jc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case za:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case za:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Fc;Ke.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,n=0,r=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],g=l[5],b=l[9],y=l[2],w=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(b-w)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(b+w)<.1&&Math.abs(c+g+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const P=(c+1)/2,R=(g+1)/2,X=(m+1)/2,O=(u+f)/4,z=(d+y)/4,q=(b+w)/4;return P>R&&P>X?P<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(P),r=O/n,s=z/n):R>X?R<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),n=O/r,s=q/r):X<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(X),n=z/s,r=q/s),this.set(n,r,s,e),this}let U=Math.sqrt((w-b)*(w-b)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(U)<.001&&(U=1),this.x=(w-b)/U,this.y=(d-y)/U,this.z=(f-u)/U,this.w=Math.acos((c+g+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qu extends or{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ke(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new jc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends Qu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zc extends Ke{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class td extends Ke{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Ir=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=s[a+0],g=s[a+1],b=s[a+2],y=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=g,t[e+2]=b,t[e+3]=y;return}if(d!==y||l!==f||c!==g||u!==b){let w=1-o;const m=l*f+c*g+u*b+d*y,U=m>=0?1:-1,P=1-m*m;if(P>Number.EPSILON){const X=Math.sqrt(P),O=Math.atan2(X,m*U);w=Math.sin(w*O)/X,o=Math.sin(o*O)/X}const R=o*U;if(l=l*w+f*R,c=c*w+g*R,u=u*w+b*R,d=d*w+y*R,w===1-o){const X=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=X,c*=X,u*=X,d*=X}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],f=s[a+1],g=s[a+2],b=s[a+3];return t[e]=o*b+u*d+l*g-c*f,t[e+1]=l*b+u*f+c*d-o*g,t[e+2]=c*b+u*g+o*f-l*d,t[e+3]=u*b-o*d-l*f-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),f=l(n/2),g=l(r/2),b=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*g*b,this._y=c*g*d-f*u*b,this._z=c*u*b+f*g*d,this._w=c*u*d-f*g*b;break;case"YXZ":this._x=f*u*d+c*g*b,this._y=c*g*d-f*u*b,this._z=c*u*b-f*g*d,this._w=c*u*d+f*g*b;break;case"ZXY":this._x=f*u*d-c*g*b,this._y=c*g*d+f*u*b,this._z=c*u*b+f*g*d,this._w=c*u*d-f*g*b;break;case"ZYX":this._x=f*u*d-c*g*b,this._y=c*g*d+f*u*b,this._z=c*u*b-f*g*d,this._w=c*u*d+f*g*b;break;case"YZX":this._x=f*u*d+c*g*b,this._y=c*g*d+f*u*b,this._z=c*u*b-f*g*d,this._w=c*u*d-f*g*b;break;case"XZY":this._x=f*u*d-c*g*b,this._y=c*g*d-f*u*b,this._z=c*u*b+f*g*d,this._w=c*u*d+f*g*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+o+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(n>o&&n>d){const g=2*Math.sqrt(1+n-o-d);this._w=(u-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>d){const g=2*Math.sqrt(1+o-n-d);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+d-n-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-e;return this._w=g*a+e*this._w,this._x=g*n+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class Kc{constructor(t=0,e=0,n=0){Kc.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return na.copy(this).projectOnVector(t),this.sub(na)}reflect(t){return this.sub(na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const na=new K,xl=new Ir;class Dr{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(s,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(t.matrixWorld),this.union(Xr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),qr.subVectors(this.max,_r),Li.subVectors(t.a,_r),Ui.subVectors(t.b,_r),Fi.subVectors(t.c,_r),Zn.subVectors(Ui,Li),Kn.subVectors(Fi,Ui),ui.subVectors(Li,Fi);let e=[0,-Zn.z,Zn.y,0,-Kn.z,Kn.y,0,-ui.z,ui.y,Zn.z,0,-Zn.x,Kn.z,0,-Kn.x,ui.z,0,-ui.x,-Zn.y,Zn.x,0,-Kn.y,Kn.x,0,-ui.y,ui.x,0];return!ia(e,Li,Ui,Fi,qr)||(e=[1,0,0,0,1,0,0,0,1],!ia(e,Li,Ui,Fi,qr))?!1:(Yr.crossVectors(Zn,Kn),e=[Yr.x,Yr.y,Yr.z],ia(e,Li,Ui,Fi,qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new K,new K,new K,new K,new K,new K,new K,new K],pn=new K,Xr=new Dr,Li=new K,Ui=new K,Fi=new K,Zn=new K,Kn=new K,ui=new K,_r=new K,qr=new K,Yr=new K,di=new K;function ia(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){di.fromArray(i,s);const o=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),l=t.dot(di),c=e.dot(di),u=n.dot(di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ed=new Dr,mr=new K,ra=new K;class Bo{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ed.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mr.subVectors(t,this.center);const e=mr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(mr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mr.copy(t.center).add(ra)),this.expandByPoint(mr.copy(t.center).sub(ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new K,sa=new K,jr=new K,$n=new K,aa=new K,Zr=new K,oa=new K;let nd=class{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){sa.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(sa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(jr),o=$n.dot(this.direction),l=-$n.dot(jr),c=$n.lengthSq(),u=Math.abs(1-a*a);let d,f,g,b;if(u>0)if(d=a*l-o,f=a*o-l,b=s*u,d>=0)if(f>=-b)if(f<=b){const y=1/u;d*=y,f*=y,g=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*l)+c;else f<=-b?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+c):f<=b?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(sa).addScaledVector(jr,f),g}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),r=Pn.dot(Pn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,r,s){aa.subVectors(e,t),Zr.subVectors(n,t),oa.crossVectors(aa,Zr);let a=this.direction.dot(oa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,t);const l=o*this.direction.dot(Zr.crossVectors($n,Zr));if(l<0)return null;const c=o*this.direction.dot(aa.cross($n));if(c<0||l+c>a)return null;const u=-o*$n.dot(oa);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class De{constructor(t,e,n,r,s,a,o,l,c,u,d,f,g,b,y,w){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,d,f,g,b,y,w)}set(t,e,n,r,s,a,o,l,c,u,d,f,g,b,y,w){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=g,m[7]=b,m[11]=y,m[15]=w,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ni.setFromMatrixColumn(t,0).length(),s=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=a*u,g=a*d,b=o*u,y=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=g+b*c,e[5]=f-y*c,e[9]=-o*l,e[2]=y-f*c,e[6]=b+g*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,g=l*d,b=c*u,y=c*d;e[0]=f+y*o,e[4]=b*o-g,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=g*o-b,e[6]=y+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,g=l*d,b=c*u,y=c*d;e[0]=f-y*o,e[4]=-a*d,e[8]=b+g*o,e[1]=g+b*o,e[5]=a*u,e[9]=y-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,g=a*d,b=o*u,y=o*d;e[0]=l*u,e[4]=b*c-g,e[8]=f*c+y,e[1]=l*d,e[5]=y*c+f,e[9]=g*c-b,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,g=a*c,b=o*l,y=o*c;e[0]=l*u,e[4]=y-f*d,e[8]=b*d+g,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=g*d+b,e[10]=f-y*d}else if(t.order==="XZY"){const f=a*l,g=a*c,b=o*l,y=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+y,e[5]=a*u,e[9]=g*d-b,e[2]=b*d-g,e[6]=o*u,e[10]=y*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(id,t,rd)}lookAt(t,e,n){const r=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),Jn.crossVectors(n,en),Jn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Jn.crossVectors(n,en)),Jn.normalize(),Kr.crossVectors(en,Jn),r[0]=Jn.x,r[4]=Kr.x,r[8]=en.x,r[1]=Jn.y,r[5]=Kr.y,r[9]=en.y,r[2]=Jn.z,r[6]=Kr.z,r[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],g=n[13],b=n[2],y=n[6],w=n[10],m=n[14],U=n[3],P=n[7],R=n[11],X=n[15],O=r[0],z=r[4],q=r[8],T=r[12],S=r[1],N=r[5],tt=r[9],$=r[13],nt=r[2],dt=r[6],et=r[10],ft=r[14],Q=r[3],wt=r[7],bt=r[11],Lt=r[15];return s[0]=a*O+o*S+l*nt+c*Q,s[4]=a*z+o*N+l*dt+c*wt,s[8]=a*q+o*tt+l*et+c*bt,s[12]=a*T+o*$+l*ft+c*Lt,s[1]=u*O+d*S+f*nt+g*Q,s[5]=u*z+d*N+f*dt+g*wt,s[9]=u*q+d*tt+f*et+g*bt,s[13]=u*T+d*$+f*ft+g*Lt,s[2]=b*O+y*S+w*nt+m*Q,s[6]=b*z+y*N+w*dt+m*wt,s[10]=b*q+y*tt+w*et+m*bt,s[14]=b*T+y*$+w*ft+m*Lt,s[3]=U*O+P*S+R*nt+X*Q,s[7]=U*z+P*N+R*dt+X*wt,s[11]=U*q+P*tt+R*et+X*bt,s[15]=U*T+P*$+R*ft+X*Lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],g=t[14],b=t[3],y=t[7],w=t[11],m=t[15];return b*(+s*l*d-r*c*d-s*o*f+n*c*f+r*o*g-n*l*g)+y*(+e*l*g-e*c*f+s*a*f-r*a*g+r*c*u-s*l*u)+w*(+e*c*d-e*o*g-s*a*d+n*a*g+s*o*u-n*c*u)+m*(-r*o*u-e*l*d+e*o*f+r*a*d-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],g=t[11],b=t[12],y=t[13],w=t[14],m=t[15],U=d*w*c-y*f*c+y*l*g-o*w*g-d*l*m+o*f*m,P=b*f*c-u*w*c-b*l*g+a*w*g+u*l*m-a*f*m,R=u*y*c-b*d*c+b*o*g-a*y*g-u*o*m+a*d*m,X=b*d*l-u*y*l-b*o*f+a*y*f+u*o*w-a*d*w,O=e*U+n*P+r*R+s*X;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/O;return t[0]=U*z,t[1]=(y*f*s-d*w*s-y*r*g+n*w*g+d*r*m-n*f*m)*z,t[2]=(o*w*s-y*l*s+y*r*c-n*w*c-o*r*m+n*l*m)*z,t[3]=(d*l*s-o*f*s-d*r*c+n*f*c+o*r*g-n*l*g)*z,t[4]=P*z,t[5]=(u*w*s-b*f*s+b*r*g-e*w*g-u*r*m+e*f*m)*z,t[6]=(b*l*s-a*w*s-b*r*c+e*w*c+a*r*m-e*l*m)*z,t[7]=(a*f*s-u*l*s+u*r*c-e*f*c-a*r*g+e*l*g)*z,t[8]=R*z,t[9]=(b*d*s-u*y*s-b*n*g+e*y*g+u*n*m-e*d*m)*z,t[10]=(a*y*s-b*o*s+b*n*c-e*y*c-a*n*m+e*o*m)*z,t[11]=(u*o*s-a*d*s-u*n*c+e*d*c+a*n*g-e*o*g)*z,t[12]=X*z,t[13]=(u*y*r-b*d*r+b*n*f-e*y*f-u*n*w+e*d*w)*z,t[14]=(b*o*r-a*y*r-b*n*l+e*y*l+a*n*w-e*o*w)*z,t[15]=(a*d*r-u*o*r+u*n*l-e*d*l-a*n*f+e*o*f)*z,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,d=o+o,f=s*c,g=s*u,b=s*d,y=a*u,w=a*d,m=o*d,U=l*c,P=l*u,R=l*d,X=n.x,O=n.y,z=n.z;return r[0]=(1-(y+m))*X,r[1]=(g+R)*X,r[2]=(b-P)*X,r[3]=0,r[4]=(g-R)*O,r[5]=(1-(f+m))*O,r[6]=(w+U)*O,r[7]=0,r[8]=(b+P)*z,r[9]=(w-U)*z,r[10]=(1-(f+y))*z,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ni.set(r[0],r[1],r[2]).length();const a=Ni.set(r[4],r[5],r[6]).length(),o=Ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],_n.copy(this);const c=1/s,u=1/a,d=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,e.setFromRotationMatrix(_n),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Gn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),d=(e+t)/(e-t),f=(n+r)/(n-r);let g,b;if(o===Gn)g=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===Rs)g=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Gn){const l=this.elements,c=1/(e-t),u=1/(n-r),d=1/(a-s),f=(e+t)*c,g=(n+r)*u;let b,y;if(o===Gn)b=(a+s)*d,y=-2*d;else if(o===Rs)b=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ni=new K,_n=new De,id=new K(0,0,0),rd=new K(1,1,1),Jn=new K,Kr=new K,en=new K,Sl=new De,yl=new Ir;class Tn{constructor(t=0,e=0,n=0,r=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yl.setFromEuler(this),this.setFromQuaternion(yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class $c{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sd=0;const Ml=new K,Oi=new Ir,In=new De,$r=new K,gr=new K,ad=new K,od=new Ir,El=new K(1,0,0),Tl=new K(0,1,0),Rl=new K(0,0,1),Al={type:"added"},ld={type:"removed"},Bi={type:"childadded",child:null},la={type:"childremoved",child:null};class an extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const t=new K,e=new Tn,n=new Ir,r=new K(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new De},normalMatrix:{value:new $t}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(El,t)}rotateY(t){return this.rotateOnAxis(Tl,t)}rotateZ(t){return this.rotateOnAxis(Rl,t)}translateOnAxis(t,e){return Ml.copy(t).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(El,t)}translateY(t){return this.translateOnAxis(Tl,t)}translateZ(t){return this.translateOnAxis(Rl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$r.copy(t):$r.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(gr,$r,this.up):In.lookAt($r,gr,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(In),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Al),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ld),la.child=t,this.dispatchEvent(la),la.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Al),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,t,ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),g=a(t.animations),b=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),b.length>0&&(n.nodes=b)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}an.DEFAULT_UP=new K(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new K,Dn=new K,ca=new K,Ln=new K,zi=new K,Hi=new K,Cl=new K,ha=new K,ua=new K,da=new K,fa=new Ce,pa=new Ce,_a=new Ce;let wr=class qi{constructor(t=new K,e=new K,n=new K){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),mn.subVectors(t,e),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){mn.subVectors(r,e),Dn.subVectors(n,e),ca.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(Dn),l=mn.dot(ca),c=Dn.dot(Dn),u=Dn.dot(ca),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,g=(c*l-o*u)*f,b=(a*u-o*l)*f;return s.set(1-g-b,b,g)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return fa.setScalar(0),pa.setScalar(0),_a.setScalar(0),fa.fromBufferAttribute(t,e),pa.fromBufferAttribute(t,n),_a.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(fa,s.x),a.addScaledVector(pa,s.y),a.addScaledVector(_a,s.z),a}static isFrontFacing(t,e,n,r){return mn.subVectors(n,e),Dn.subVectors(t,e),mn.cross(Dn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),mn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return qi.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return qi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;zi.subVectors(r,n),Hi.subVectors(s,n),ha.subVectors(t,n);const l=zi.dot(ha),c=Hi.dot(ha);if(l<=0&&c<=0)return e.copy(n);ua.subVectors(t,r);const u=zi.dot(ua),d=Hi.dot(ua);if(u>=0&&d<=u)return e.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(zi,a);da.subVectors(t,s);const g=zi.dot(da),b=Hi.dot(da);if(b>=0&&g<=b)return e.copy(s);const y=g*c-l*b;if(y<=0&&c>=0&&b<=0)return o=c/(c-b),e.copy(n).addScaledVector(Hi,o);const w=u*b-g*d;if(w<=0&&d-u>=0&&g-b>=0)return Cl.subVectors(s,r),o=(d-u)/(d-u+(g-b)),e.copy(r).addScaledVector(Cl,o);const m=1/(w+y+f);return a=y*m,o=f*m,e.copy(n).addScaledVector(zi,a).addScaledVector(Hi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}};const Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function ma(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class pe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ue.workingColorSpace){if(t=Wu(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ma(a,s,t+1/3),this.g=ma(a,s,t),this.b=ma(a,s,t-1/3)}return ue.toWorkingColorSpace(this,r),this}setStyle(t,e=ln){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const n=Jc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return ue.fromWorkingColorSpace(qe.copy(this),t),Math.round(ae(qe.r*255,0,255))*65536+Math.round(ae(qe.g*255,0,255))*256+Math.round(ae(qe.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,r=qe.g,s=qe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=ln){ue.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,r=qe.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Jr);const n=Qs(Qn.h,Jr.h,e),r=Qs(Qn.s,Jr.s,e),s=Qs(Qn.l,Jr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new pe;pe.NAMES=Jc;let cd=0;class Lr extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=Zi,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qc extends Lr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const zn=hd();function hd(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function ud(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=ae(i,-65504,65504),zn.floatView[0]=i;const t=zn.uint32View[0],e=t>>23&511;return zn.baseTable[e]+((t&8388607)>>zn.shiftTable[e])}function dd(i){const t=i>>10;return zn.uint32View[0]=zn.mantissaTable[zn.offsetTable[t]+(i&1023)]+zn.exponentTable[t],zn.floatView[0]}const Pl={toHalfFloat:ud,fromHalfFloat:dd},Pe=new K,Qr=new ge;let fd=0;class En{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ml,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pr(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pr(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pr(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ml&&(t.usage=this.usage),t}}class th extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class eh extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class yi extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pd=0;const on=new De,ga=new an,ki=new K,nn=new Dr,vr=new Dr,ke=new K;class Ai extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yc(t)?eh:th)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return ga.lookAt(t),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yi(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(nn.min,vr.min),nn.expandByPoint(ke),ke.addVectors(nn.max,vr.max),nn.expandByPoint(ke)):(nn.expandByPoint(vr.min),nn.expandByPoint(vr.max))}nn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)ke.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ke));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ke.fromBufferAttribute(o,c),l&&(ki.fromBufferAttribute(t,c),ke.add(ki)),r=Math.max(r,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let q=0;q<n.count;q++)o[q]=new K,l[q]=new K;const c=new K,u=new K,d=new K,f=new ge,g=new ge,b=new ge,y=new K,w=new K;function m(q,T,S){c.fromBufferAttribute(n,q),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,S),f.fromBufferAttribute(s,q),g.fromBufferAttribute(s,T),b.fromBufferAttribute(s,S),u.sub(c),d.sub(c),g.sub(f),b.sub(f);const N=1/(g.x*b.y-b.x*g.y);isFinite(N)&&(y.copy(u).multiplyScalar(b.y).addScaledVector(d,-g.y).multiplyScalar(N),w.copy(d).multiplyScalar(g.x).addScaledVector(u,-b.x).multiplyScalar(N),o[q].add(y),o[T].add(y),o[S].add(y),l[q].add(w),l[T].add(w),l[S].add(w))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let q=0,T=U.length;q<T;++q){const S=U[q],N=S.start,tt=S.count;for(let $=N,nt=N+tt;$<nt;$+=3)m(t.getX($+0),t.getX($+1),t.getX($+2))}const P=new K,R=new K,X=new K,O=new K;function z(q){X.fromBufferAttribute(r,q),O.copy(X);const T=o[q];P.copy(T),P.sub(X.multiplyScalar(X.dot(T))).normalize(),R.crossVectors(O,T);const N=R.dot(l[q])<0?-1:1;a.setXYZW(q,P.x,P.y,P.z,N)}for(let q=0,T=U.length;q<T;++q){const S=U[q],N=S.start,tt=S.count;for(let $=N,nt=N+tt;$<nt;$+=3)z(t.getX($+0)),z(t.getX($+1)),z(t.getX($+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,c=new K,u=new K,d=new K;if(t)for(let f=0,g=t.count;f<g;f+=3){const b=t.getX(f+0),y=t.getX(f+1),w=t.getX(f+2);r.fromBufferAttribute(e,b),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,w),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,b),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,w),o.add(u),l.add(u),c.add(u),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(w,c.x,c.y,c.z)}else for(let f=0,g=e.count;f<g;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let g=0,b=0;for(let y=0,w=l.length;y<w;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*u;for(let m=0;m<u;m++)f[b++]=c[g++]}return new En(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ai,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],g=t(f,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const g=c[d];u.push(g.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,g=d.length;f<g;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Il=new De,fi=new nd,ts=new Bo,Dl=new K,es=new K,ns=new K,is=new K,wa=new K,rs=new K,Ll=new K,ss=new K;class Mn extends an{constructor(t=new Ai,e=new Qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(wa.fromBufferAttribute(d,t),a?rs.addScaledVector(wa,u):rs.addScaledVector(wa.sub(e),u))}e.add(rs)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(s),fi.copy(t.ray).recast(t.near),!(ts.containsPoint(fi.origin)===!1&&(fi.intersectSphere(ts,Dl)===null||fi.origin.distanceToSquared(Dl)>(t.far-t.near)**2))&&(Il.copy(s).invert(),fi.copy(t.ray).applyMatrix4(Il),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let b=0,y=f.length;b<y;b++){const w=f[b],m=a[w.materialIndex],U=Math.max(w.start,g.start),P=Math.min(o.count,Math.min(w.start+w.count,g.start+g.count));for(let R=U,X=P;R<X;R+=3){const O=o.getX(R),z=o.getX(R+1),q=o.getX(R+2);r=as(this,m,t,n,c,u,d,O,z,q),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=w.materialIndex,e.push(r))}}else{const b=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let w=b,m=y;w<m;w+=3){const U=o.getX(w),P=o.getX(w+1),R=o.getX(w+2);r=as(this,a,t,n,c,u,d,U,P,R),r&&(r.faceIndex=Math.floor(w/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let b=0,y=f.length;b<y;b++){const w=f[b],m=a[w.materialIndex],U=Math.max(w.start,g.start),P=Math.min(l.count,Math.min(w.start+w.count,g.start+g.count));for(let R=U,X=P;R<X;R+=3){const O=R,z=R+1,q=R+2;r=as(this,m,t,n,c,u,d,O,z,q),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=w.materialIndex,e.push(r))}}else{const b=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let w=b,m=y;w<m;w+=3){const U=w,P=w+1,R=w+2;r=as(this,a,t,n,c,u,d,U,P,R),r&&(r.faceIndex=Math.floor(w/3),e.push(r))}}}}function _d(i,t,e,n,r,s,a,o){let l;if(t.side===Qe?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===si,o),l===null)return null;ss.copy(o),ss.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ss);return c<e.near||c>e.far?null:{distance:c,point:ss.clone(),object:i}}function as(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,es),i.getVertexPosition(l,ns),i.getVertexPosition(c,is);const u=_d(i,t,e,n,es,ns,is,Ll);if(u){const d=new K;wr.getBarycoord(Ll,es,ns,is,d),r&&(u.uv=wr.getInterpolatedAttribute(r,o,l,c,d,new ge)),s&&(u.uv1=wr.getInterpolatedAttribute(s,o,l,c,d,new ge)),a&&(u.normal=wr.getInterpolatedAttribute(a,o,l,c,d,new K),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new K,materialIndex:0};wr.getNormal(es,ns,is,f.normal),u.face=f,u.barycoord=d}return u}class Ur extends Ai{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,g=0;b("z","y","x",-1,-1,n,e,t,a,s,0),b("z","y","x",1,-1,n,e,-t,a,s,1),b("x","z","y",1,1,t,n,e,r,a,2),b("x","z","y",1,-1,t,n,-e,r,a,3),b("x","y","z",1,-1,t,e,n,r,s,4),b("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new yi(c,3)),this.setAttribute("normal",new yi(u,3)),this.setAttribute("uv",new yi(d,2));function b(y,w,m,U,P,R,X,O,z,q,T){const S=R/z,N=X/q,tt=R/2,$=X/2,nt=O/2,dt=z+1,et=q+1;let ft=0,Q=0;const wt=new K;for(let bt=0;bt<et;bt++){const Lt=bt*N-$;for(let Wt=0;Wt<dt;Wt++){const ee=Wt*S-tt;wt[y]=ee*U,wt[w]=Lt*P,wt[m]=nt,c.push(wt.x,wt.y,wt.z),wt[y]=0,wt[w]=0,wt[m]=O>0?1:-1,u.push(wt.x,wt.y,wt.z),d.push(Wt/z),d.push(1-bt/q),ft+=1}}for(let bt=0;bt<q;bt++)for(let Lt=0;Lt<z;Lt++){const Wt=f+Lt+dt*bt,ee=f+Lt+dt*(bt+1),it=f+(Lt+1)+dt*(bt+1),_t=f+(Lt+1)+dt*bt;l.push(Wt,ee,_t),l.push(ee,it,_t),Q+=6}o.addGroup(g,Q,T),g+=Q,f+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function je(i){const t={};for(let e=0;e<i.length;e++){const n=rr(i[e]);for(const r in n)t[r]=n[r]}return t}function md(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const gd={clone:rr,merge:je};var wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Lr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=md(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ih extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new K,Ul=new ge,Fl=new ge;class cn extends ih{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=po*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return po*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Ul,Fl),e.subVectors(Fl,Ul)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gi=-90,Vi=1;class bd extends an{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(Gi,Vi,t,e);r.layers=this.layers,this.add(r);const s=new cn(Gi,Vi,t,e);s.layers=this.layers,this.add(s);const a=new cn(Gi,Vi,t,e);a.layers=this.layers,this.add(a);const o=new cn(Gi,Vi,t,e);o.layers=this.layers,this.add(o);const l=new cn(Gi,Vi,t,e);l.layers=this.layers,this.add(l);const c=new cn(Gi,Vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(d,f,g),t.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class rh extends Ke{constructor(t,e,n,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:tr,super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xd extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new rh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ur(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:ii});s.uniforms.tEquirect.value=e;const a=new Mn(r,s),o=e.minFilter;return e.minFilter===ni&&(e.minFilter=Ze),new bd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class os extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sd={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const w=e.getJointPose(y,n),m=this._getHandJoint(c,y);w!==null&&(m.matrix.fromArray(w.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=w.radius),m.visible=w!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),g=.02,b=.005;c.inputState.pinching&&f>g+b?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=g-b&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sd)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new os;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class yd extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Md extends Ke{constructor(t=null,e=1,n=1,r,s,a,o,l,c=sn,u=sn,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ba=new K,Ed=new K,Td=new $t;class wi{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ba.subVectors(n,e).cross(Ed.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ba),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Td.getNormalMatrix(t),r=this.coplanarPoint(ba).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Bo,ls=new K;class sh{constructor(t=new wi,e=new wi,n=new wi,r=new wi,s=new wi,a=new wi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],g=r[8],b=r[9],y=r[10],w=r[11],m=r[12],U=r[13],P=r[14],R=r[15];if(n[0].setComponents(l-s,f-c,w-g,R-m).normalize(),n[1].setComponents(l+s,f+c,w+g,R+m).normalize(),n[2].setComponents(l+a,f+u,w+b,R+U).normalize(),n[3].setComponents(l-a,f-u,w-b,R-U).normalize(),n[4].setComponents(l-o,f-d,w-y,R-P).normalize(),e===Gn)n[5].setComponents(l+o,f+d,w+y,R+P).normalize();else if(e===Rs)n[5].setComponents(o,d,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ls.x=r.normal.x>0?t.max.x:t.min.x,ls.y=r.normal.y>0?t.max.y:t.min.y,ls.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ah extends Ke{constructor(t,e,n,r,s,a,o,l,c,u=Ki){if(u!==Ki&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ki&&(n=Mi),n===void 0&&u===ir&&(n=nr),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Fr extends Ai{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=t/o,f=e/l,g=[],b=[],y=[],w=[];for(let m=0;m<u;m++){const U=m*f-a;for(let P=0;P<c;P++){const R=P*d-s;b.push(R,-U,0),y.push(0,0,1),w.push(P/o),w.push(1-m/l)}}for(let m=0;m<l;m++)for(let U=0;U<o;U++){const P=U+c*m,R=U+c*(m+1),X=U+1+c*(m+1),O=U+1+c*m;g.push(P,R,O),g.push(R,X,O)}this.setIndex(g),this.setAttribute("position",new yi(b,3)),this.setAttribute("normal",new yi(y,3)),this.setAttribute("uv",new yi(w,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Rd extends Lr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ad extends Lr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cd extends Lr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Nl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Pd{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const g=c[d],b=c[d+1];if(g.global&&(g.lastIndex=0),g.test(u))return b}return null}}}const Id=new Pd;class zo{constructor(t){this.manager=t!==void 0?t:Id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}zo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class Dd extends Error{constructor(t,e){super(t),this.response=e}}class Ld extends zo{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Nl.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Un[t]!==void 0){Un[t].push({onLoad:e,onProgress:n,onError:r});return}Un[t]=[],Un[t].push({onLoad:e,onProgress:n,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Un[t],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),g=f?parseInt(f):0,b=g!==0;let y=0;const w=new ReadableStream({start(m){U();function U(){d.read().then(({done:P,value:R})=>{if(P)m.close();else{y+=R.byteLength;const X=new ProgressEvent("progress",{lengthComputable:b,loaded:y,total:g});for(let O=0,z=u.length;O<z;O++){const q=u[O];q.onProgress&&q.onProgress(X)}m.enqueue(R),U()}},P=>{m.error(P)})}}});return new Response(w)}else throw new Dd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,g=new TextDecoder(f);return c.arrayBuffer().then(b=>g.decode(b))}}}).then(c=>{Nl.add(t,c);const u=Un[t];delete Un[t];for(let d=0,f=u.length;d<f;d++){const g=u[d];g.onLoad&&g.onLoad(c)}}).catch(c=>{const u=Un[t];if(u===void 0)throw this.manager.itemError(t),c;delete Un[t];for(let d=0,f=u.length;d<f;d++){const g=u[d];g.onError&&g.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Ud extends zo{constructor(t){super(t)}load(t,e,n,r){const s=this,a=new Md,o=new Ld(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(t,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Hn,a.wrapT=c.wrapT!==void 0?c.wrapT:Hn,a.magFilter=c.magFilter!==void 0?c.magFilter:Ze,a.minFilter=c.minFilter!==void 0?c.minFilter:Ze,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=ni),c.mipmapCount===1&&(a.minFilter=Ze),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,e&&e(a,c)},n,r),a}}class Fd extends ih{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Nd extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function Ol(i,t,e,n){const r=Od(n);switch(e){case zc:return i*t;case kc:return i*t;case Gc:return i*t*2;case Uo:return i*t/r.components*r.byteLength;case Fo:return i*t/r.components*r.byteLength;case Vc:return i*t*2/r.components*r.byteLength;case No:return i*t*2/r.components*r.byteLength;case Hc:return i*t*3/r.components*r.byteLength;case dn:return i*t*4/r.components*r.byteLength;case Oo:return i*t*4/r.components*r.byteLength;case vs:case bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xs:case Ss:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:case Wa:return Math.max(i,16)*Math.max(t,8)/4;case ka:case Va:return Math.max(i,8)*Math.max(t,8)/2;case Xa:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ys:case lo:case co:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wc:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*8;case uo:case fo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Od(i){switch(i){case Wn:case Nc:return{byteLength:1,components:1};case Mr:case Oc:case kn:return{byteLength:2,components:1};case Do:case Lo:return{byteLength:2,components:4};case Mi:case Io:case un:return{byteLength:4,components:1};case Bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function oh(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Bd(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((g,b)=>g.start-b.start);let f=0;for(let g=1;g<d.length;g++){const b=d[f],y=d[g];y.start<=b.start+b.count+1?b.count=Math.max(b.count,y.start+y.count-b.start):(++f,d[f]=y)}d.length=f+1;for(let g=0,b=d.length;g<b;g++){const y=d[g];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hd=`#ifdef USE_ALPHAHASH
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
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
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
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jd=`#ifdef USE_IRIDESCENCE
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
#endif`,Qd=`#ifdef USE_BUMPMAP
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cf=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uf=`vec3 transformedNormal = objectNormal;
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
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rf=`#ifdef USE_GRADIENTMAP
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
}`,Af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,If=`uniform bool receiveShadow;
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
#endif`,Df=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Bf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,zf=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zf=`#if defined( USE_POINTS_UV )
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
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`#ifdef USE_MORPHTARGETS
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
#endif`,np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lp=`#ifdef USE_NORMALMAP
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
#endif`,cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mp=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,Cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hp=`uniform sampler2D t2D;
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`#include <common>
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
}`,qp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yp=`#define DISTANCE
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
}`,jp=`#define DISTANCE
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
	gl_FragColor = packDepthToRGBA( dist );
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`uniform float scale;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Qp=`#include <common>
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
}`,t_=`uniform vec3 diffuse;
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
}`,e_=`#define LAMBERT
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
}`,n_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,i_=`#define MATCAP
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
}`,r_=`#define MATCAP
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
}`,s_=`#define NORMAL
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
}`,a_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o_=`#define PHONG
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
}`,l_=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
}`,c_=`#define STANDARD
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
}`,h_=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,u_=`#define TOON
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
}`,d_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,f_=`uniform float size;
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
}`,p_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,m_=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,g_=`uniform float rotation;
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
}`,w_=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:zd,alphahash_pars_fragment:Hd,alphamap_fragment:kd,alphamap_pars_fragment:Gd,alphatest_fragment:Vd,alphatest_pars_fragment:Wd,aomap_fragment:Xd,aomap_pars_fragment:qd,batching_pars_vertex:Yd,batching_vertex:jd,begin_vertex:Zd,beginnormal_vertex:Kd,bsdfs:$d,iridescence_fragment:Jd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:tf,clipping_planes_pars_fragment:ef,clipping_planes_pars_vertex:nf,clipping_planes_vertex:rf,color_fragment:sf,color_pars_fragment:af,color_pars_vertex:of,color_vertex:lf,common:cf,cube_uv_reflection_fragment:hf,defaultnormal_vertex:uf,displacementmap_pars_vertex:df,displacementmap_vertex:ff,emissivemap_fragment:pf,emissivemap_pars_fragment:_f,colorspace_fragment:mf,colorspace_pars_fragment:gf,envmap_fragment:wf,envmap_common_pars_fragment:vf,envmap_pars_fragment:bf,envmap_pars_vertex:xf,envmap_physical_pars_fragment:Df,envmap_vertex:Sf,fog_vertex:yf,fog_pars_vertex:Mf,fog_fragment:Ef,fog_pars_fragment:Tf,gradientmap_pars_fragment:Rf,lightmap_pars_fragment:Af,lights_lambert_fragment:Cf,lights_lambert_pars_fragment:Pf,lights_pars_begin:If,lights_toon_fragment:Lf,lights_toon_pars_fragment:Uf,lights_phong_fragment:Ff,lights_phong_pars_fragment:Nf,lights_physical_fragment:Of,lights_physical_pars_fragment:Bf,lights_fragment_begin:zf,lights_fragment_maps:Hf,lights_fragment_end:kf,logdepthbuf_fragment:Gf,logdepthbuf_pars_fragment:Vf,logdepthbuf_pars_vertex:Wf,logdepthbuf_vertex:Xf,map_fragment:qf,map_pars_fragment:Yf,map_particle_fragment:jf,map_particle_pars_fragment:Zf,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:$f,morphinstance_vertex:Jf,morphcolor_vertex:Qf,morphnormal_vertex:tp,morphtarget_pars_vertex:ep,morphtarget_vertex:np,normal_fragment_begin:ip,normal_fragment_maps:rp,normal_pars_fragment:sp,normal_pars_vertex:ap,normal_vertex:op,normalmap_pars_fragment:lp,clearcoat_normal_fragment_begin:cp,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:up,iridescence_pars_fragment:dp,opaque_fragment:fp,packing:pp,premultiplied_alpha_fragment:_p,project_vertex:mp,dithering_fragment:gp,dithering_pars_fragment:wp,roughnessmap_fragment:vp,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:Sp,shadowmap_vertex:yp,shadowmask_pars_fragment:Mp,skinbase_vertex:Ep,skinning_pars_vertex:Tp,skinning_vertex:Rp,skinnormal_vertex:Ap,specularmap_fragment:Cp,specularmap_pars_fragment:Pp,tonemapping_fragment:Ip,tonemapping_pars_fragment:Dp,transmission_fragment:Lp,transmission_pars_fragment:Up,uv_pars_fragment:Fp,uv_pars_vertex:Np,uv_vertex:Op,worldpos_vertex:Bp,background_vert:zp,background_frag:Hp,backgroundCube_vert:kp,backgroundCube_frag:Gp,cube_vert:Vp,cube_frag:Wp,depth_vert:Xp,depth_frag:qp,distanceRGBA_vert:Yp,distanceRGBA_frag:jp,equirect_vert:Zp,equirect_frag:Kp,linedashed_vert:$p,linedashed_frag:Jp,meshbasic_vert:Qp,meshbasic_frag:t_,meshlambert_vert:e_,meshlambert_frag:n_,meshmatcap_vert:i_,meshmatcap_frag:r_,meshnormal_vert:s_,meshnormal_frag:a_,meshphong_vert:o_,meshphong_frag:l_,meshphysical_vert:c_,meshphysical_frag:h_,meshtoon_vert:u_,meshtoon_frag:d_,points_vert:f_,points_frag:p_,shadow_vert:__,shadow_frag:m_,sprite_vert:g_,sprite_frag:w_},xt={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},yn={basic:{uniforms:je([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:je([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new pe(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:je([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:je([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:je([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new pe(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:je([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:je([xt.points,xt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:je([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:je([xt.common,xt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:je([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:je([xt.sprite,xt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:je([xt.common,xt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:je([xt.lights,xt.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};yn.physical={uniforms:je([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const cs={r:0,b:0,g:0},_i=new Tn,v_=new De;function b_(i,t,e,n,r,s,a){const o=new pe(0);let l=s===!0?0:1,c,u,d=null,f=0,g=null;function b(P){let R=P.isScene===!0?P.background:null;return R&&R.isTexture&&(R=(P.backgroundBlurriness>0?e:t).get(R)),R}function y(P){let R=!1;const X=b(P);X===null?m(o,l):X&&X.isColor&&(m(X,1),R=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(P,R){const X=b(R);X&&(X.isCubeTexture||X.mapping===Bs)?(u===void 0&&(u=new Mn(new Ur(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:rr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,z,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),_i.copy(R.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),u.material.uniforms.envMap.value=X,u.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(v_.makeRotationFromEuler(_i)),u.material.toneMapped=ue.getTransfer(X.colorSpace)!==me,(d!==X||f!==X.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,d=X,f=X.version,g=i.toneMapping),u.layers.enableAll(),P.unshift(u,u.geometry,u.material,0,0,null)):X&&X.isTexture&&(c===void 0&&(c=new Mn(new Fr(2,2),new oi({name:"BackgroundMaterial",uniforms:rr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=X,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=ue.getTransfer(X.colorSpace)!==me,X.matrixAutoUpdate===!0&&X.updateMatrix(),c.material.uniforms.uvTransform.value.copy(X.matrix),(d!==X||f!==X.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,d=X,f=X.version,g=i.toneMapping),c.layers.enableAll(),P.unshift(c,c.geometry,c.material,0,0,null))}function m(P,R){P.getRGB(cs,nh(i)),n.buffers.color.setClear(cs.r,cs.g,cs.b,R,a)}function U(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(P,R=1){o.set(P),l=R,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(P){l=P,m(o,l)},render:y,addToRenderList:w,dispose:U}}function x_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(S,N,tt,$,nt){let dt=!1;const et=d($,tt,N);s!==et&&(s=et,c(s.object)),dt=g(S,$,tt,nt),dt&&b(S,$,tt,nt),nt!==null&&t.update(nt,i.ELEMENT_ARRAY_BUFFER),(dt||a)&&(a=!1,R(S,N,tt,$),nt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function d(S,N,tt){const $=tt.wireframe===!0;let nt=n[S.id];nt===void 0&&(nt={},n[S.id]=nt);let dt=nt[N.id];dt===void 0&&(dt={},nt[N.id]=dt);let et=dt[$];return et===void 0&&(et=f(l()),dt[$]=et),et}function f(S){const N=[],tt=[],$=[];for(let nt=0;nt<e;nt++)N[nt]=0,tt[nt]=0,$[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:tt,attributeDivisors:$,object:S,attributes:{},index:null}}function g(S,N,tt,$){const nt=s.attributes,dt=N.attributes;let et=0;const ft=tt.getAttributes();for(const Q in ft)if(ft[Q].location>=0){const bt=nt[Q];let Lt=dt[Q];if(Lt===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(Lt=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(Lt=S.instanceColor)),bt===void 0||bt.attribute!==Lt||Lt&&bt.data!==Lt.data)return!0;et++}return s.attributesNum!==et||s.index!==$}function b(S,N,tt,$){const nt={},dt=N.attributes;let et=0;const ft=tt.getAttributes();for(const Q in ft)if(ft[Q].location>=0){let bt=dt[Q];bt===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(bt=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(bt=S.instanceColor));const Lt={};Lt.attribute=bt,bt&&bt.data&&(Lt.data=bt.data),nt[Q]=Lt,et++}s.attributes=nt,s.attributesNum=et,s.index=$}function y(){const S=s.newAttributes;for(let N=0,tt=S.length;N<tt;N++)S[N]=0}function w(S){m(S,0)}function m(S,N){const tt=s.newAttributes,$=s.enabledAttributes,nt=s.attributeDivisors;tt[S]=1,$[S]===0&&(i.enableVertexAttribArray(S),$[S]=1),nt[S]!==N&&(i.vertexAttribDivisor(S,N),nt[S]=N)}function U(){const S=s.newAttributes,N=s.enabledAttributes;for(let tt=0,$=N.length;tt<$;tt++)N[tt]!==S[tt]&&(i.disableVertexAttribArray(tt),N[tt]=0)}function P(S,N,tt,$,nt,dt,et){et===!0?i.vertexAttribIPointer(S,N,tt,nt,dt):i.vertexAttribPointer(S,N,tt,$,nt,dt)}function R(S,N,tt,$){y();const nt=$.attributes,dt=tt.getAttributes(),et=N.defaultAttributeValues;for(const ft in dt){const Q=dt[ft];if(Q.location>=0){let wt=nt[ft];if(wt===void 0&&(ft==="instanceMatrix"&&S.instanceMatrix&&(wt=S.instanceMatrix),ft==="instanceColor"&&S.instanceColor&&(wt=S.instanceColor)),wt!==void 0){const bt=wt.normalized,Lt=wt.itemSize,Wt=t.get(wt);if(Wt===void 0)continue;const ee=Wt.buffer,it=Wt.type,_t=Wt.bytesPerElement,mt=it===i.INT||it===i.UNSIGNED_INT||wt.gpuType===Io;if(wt.isInterleavedBufferAttribute){const vt=wt.data,Ut=vt.stride,ie=wt.offset;if(vt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Q.locationSize;Xt++)m(Q.location+Xt,vt.meshPerAttribute);S.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Xt=0;Xt<Q.locationSize;Xt++)w(Q.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Xt=0;Xt<Q.locationSize;Xt++)P(Q.location+Xt,Lt/Q.locationSize,it,bt,Ut*_t,(ie+Lt/Q.locationSize*Xt)*_t,mt)}else{if(wt.isInstancedBufferAttribute){for(let vt=0;vt<Q.locationSize;vt++)m(Q.location+vt,wt.meshPerAttribute);S.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let vt=0;vt<Q.locationSize;vt++)w(Q.location+vt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let vt=0;vt<Q.locationSize;vt++)P(Q.location+vt,Lt/Q.locationSize,it,bt,Lt*_t,Lt/Q.locationSize*vt*_t,mt)}}else if(et!==void 0){const bt=et[ft];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv(Q.location,bt);break;case 3:i.vertexAttrib3fv(Q.location,bt);break;case 4:i.vertexAttrib4fv(Q.location,bt);break;default:i.vertexAttrib1fv(Q.location,bt)}}}}U()}function X(){q();for(const S in n){const N=n[S];for(const tt in N){const $=N[tt];for(const nt in $)u($[nt].object),delete $[nt];delete N[tt]}delete n[S]}}function O(S){if(n[S.id]===void 0)return;const N=n[S.id];for(const tt in N){const $=N[tt];for(const nt in $)u($[nt].object),delete $[nt];delete N[tt]}delete n[S.id]}function z(S){for(const N in n){const tt=n[N];if(tt[S.id]===void 0)continue;const $=tt[S.id];for(const nt in $)u($[nt].object),delete $[nt];delete tt[S.id]}}function q(){T(),a=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:q,resetDefaultState:T,dispose:X,releaseStatesOfGeometry:O,releaseStatesOfProgram:z,initAttributes:y,enableAttribute:w,disableUnusedAttributes:U}}function S_(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let g=0;for(let b=0;b<d;b++)g+=u[b];e.update(g,n,1)}function l(c,u,d,f){if(d===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let b=0;b<c.length;b++)a(c[b],u[b],f[b]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let b=0;for(let y=0;y<d;y++)b+=u[y]*f[y];e.update(b,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function y_(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(z){return!(z!==dn&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(z){const q=z===kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Wn&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==un&&!q)}function l(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),w=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),U=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),X=b>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:g,maxVertexTextures:b,maxTextureSize:y,maxCubemapSize:w,maxAttributes:m,maxVertexUniforms:U,maxVaryings:P,maxFragmentUniforms:R,vertexTextures:X,maxSamples:O}}function M_(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new wi,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||n!==0||r;return r=f,n=d.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,g){const b=d.clippingPlanes,y=d.clipIntersection,w=d.clipShadows,m=i.get(d);if(!r||b===null||b.length===0||s&&!w)s?u(null):c();else{const U=s?0:n,P=U*4;let R=m.clippingState||null;l.value=R,R=u(b,f,P,g);for(let X=0;X!==P;++X)R[X]=e[X];m.clippingState=R,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=U}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,g,b){const y=d!==null?d.length:0;let w=null;if(y!==0){if(w=l.value,b!==!0||w===null){const m=g+y*4,U=f.matrixWorldInverse;o.getNormalMatrix(U),(w===null||w.length<m)&&(w=new Float32Array(m));for(let P=0,R=g;P!==y;++P,R+=4)a.copy(d[P]).applyMatrix4(U,o),a.normal.toArray(w,R),w[R+3]=a.constant}l.value=w,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,w}}function E_(i){let t=new WeakMap;function e(a,o){return o===Es?a.mapping=tr:o===Ba&&(a.mapping=er),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Es||o===Ba)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new xd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Yi=4,Bl=[.125,.215,.35,.446,.526,.582],xi=20,xa=new Fd,zl=new pe;let Sa=null,ya=0,Ma=0,Ea=!1;const vi=(1+Math.sqrt(5))/2,Wi=1/vi,Hl=[new K(-vi,Wi,0),new K(vi,Wi,0),new K(-Wi,0,vi),new K(Wi,0,vi),new K(0,vi,-Wi),new K(0,vi,Wi),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Sa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,ya,Ma),this._renderer.xr.enabled=Ea,t.scissorTest=!1,hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:kn,format:dn,colorSpace:ai,depthBuffer:!1},r=Gl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T_(s)),this._blurMaterial=R_(s,t,e)}return r}_compileMaterial(t){const e=new Mn(this._lodPlanes[0],t);this._renderer.compile(e,xa)}_sceneToCubeUV(t,e,n,r){const o=new cn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(zl),u.toneMapping=ri,u.autoClear=!1;const g=new Qc({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),b=new Mn(new Ur,g);let y=!1;const w=t.background;w?w.isColor&&(g.color.copy(w),t.background=null,y=!0):(g.color.copy(zl),y=!0);for(let m=0;m<6;m++){const U=m%3;U===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):U===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const P=this._cubeSize;hs(r,U*P,m>2?P:0,P,P),u.setRenderTarget(r),y&&u.render(b,o),u.render(t,o)}b.geometry.dispose(),b.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=w}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===tr||t.mapping===er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Mn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,xa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Hl[(r-s-1)%Hl.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Mn(this._lodPlanes[r],c),f=c.uniforms,g=this._sizeLods[n]-1,b=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*xi-1),y=s/b,w=isFinite(s)?1+Math.floor(u*y):xi;w>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${w} samples when the maximum is set to ${xi}`);const m=[];let U=0;for(let z=0;z<xi;++z){const q=z/y,T=Math.exp(-q*q/2);m.push(T),z===0?U+=T:z<w&&(U+=2*T)}for(let z=0;z<m.length;z++)m[z]=m[z]/U;f.envMap.value=t.texture,f.samples.value=w,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:P}=this;f.dTheta.value=b,f.mipInt.value=P-n;const R=this._sizeLods[r],X=3*R*(r>P-Yi?r-P+Yi:0),O=4*(this._cubeSize-R);hs(e,X,O,3*R,2*R),l.setRenderTarget(e),l.render(d,xa)}}function T_(i){const t=[],e=[],n=[];let r=i;const s=i-Yi+1+Bl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Yi?l=Bl[a-i+Yi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,b=6,y=3,w=2,m=1,U=new Float32Array(y*b*g),P=new Float32Array(w*b*g),R=new Float32Array(m*b*g);for(let O=0;O<g;O++){const z=O%3*2/3-1,q=O>2?0:-1,T=[z,q,0,z+2/3,q,0,z+2/3,q+1,0,z,q,0,z+2/3,q+1,0,z,q+1,0];U.set(T,y*b*O),P.set(f,w*b*O);const S=[O,O,O,O,O,O];R.set(S,m*b*O)}const X=new Ai;X.setAttribute("position",new En(U,y)),X.setAttribute("uv",new En(P,w)),X.setAttribute("faceIndex",new En(R,m)),t.push(X),r>Yi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gl(i,t,e){const n=new Ei(i,t,e);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function R_(i,t,e){const n=new Float32Array(xi),r=new K(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Vl(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Wl(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ho(){return`

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
	`}function A_(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Es||l===Ba,u=l===tr||l===er;if(c||u){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new kl(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const g=o.image;return c&&g&&g.height>0||u&&g&&r(g)?(e===null&&(e=new kl(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function C_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Xi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function P_(i,t,e,n){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const b in f.attributes)t.remove(f.attributes[b]);f.removeEventListener("dispose",a),delete r[f.id];const g=s.get(f);g&&(t.remove(g),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER)}function c(d){const f=[],g=d.index,b=d.attributes.position;let y=0;if(g!==null){const U=g.array;y=g.version;for(let P=0,R=U.length;P<R;P+=3){const X=U[P+0],O=U[P+1],z=U[P+2];f.push(X,O,O,z,z,X)}}else if(b!==void 0){const U=b.array;y=b.version;for(let P=0,R=U.length/3-1;P<R;P+=3){const X=P+0,O=P+1,z=P+2;f.push(X,O,O,z,z,X)}}else return;const w=new(Yc(f)?eh:th)(f,1);w.version=y;const m=s.get(d);m&&t.remove(m),s.set(d,w)}function u(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function I_(i,t,e){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,g){i.drawElements(n,g,s,f*a),e.update(g,n,1)}function c(f,g,b){b!==0&&(i.drawElementsInstanced(n,g,s,f*a,b),e.update(g,n,b))}function u(f,g,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,f,0,b);let w=0;for(let m=0;m<b;m++)w+=g[m];e.update(w,n,1)}function d(f,g,b,y){if(b===0)return;const w=t.get("WEBGL_multi_draw");if(w===null)for(let m=0;m<f.length;m++)c(f[m]/a,g[m],y[m]);else{w.multiDrawElementsInstancedWEBGL(n,g,0,s,f,0,y,0,b);let m=0;for(let U=0;U<b;U++)m+=g[U]*y[U];e.update(m,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function D_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function L_(i,t,e){const n=new WeakMap,r=new Ce;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let T=function(){z.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,w=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],U=o.morphAttributes.color||[];let P=0;g===!0&&(P=1),b===!0&&(P=2),y===!0&&(P=3);let R=o.attributes.position.count*P,X=1;R>t.maxTextureSize&&(X=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const O=new Float32Array(R*X*4*d),z=new Zc(O,R,X,d);z.type=un,z.needsUpdate=!0;const q=P*4;for(let S=0;S<d;S++){const N=w[S],tt=m[S],$=U[S],nt=R*X*4*S;for(let dt=0;dt<N.count;dt++){const et=dt*q;g===!0&&(r.fromBufferAttribute(N,dt),O[nt+et+0]=r.x,O[nt+et+1]=r.y,O[nt+et+2]=r.z,O[nt+et+3]=0),b===!0&&(r.fromBufferAttribute(tt,dt),O[nt+et+4]=r.x,O[nt+et+5]=r.y,O[nt+et+6]=r.z,O[nt+et+7]=0),y===!0&&(r.fromBufferAttribute($,dt),O[nt+et+8]=r.x,O[nt+et+9]=r.y,O[nt+et+10]=r.z,O[nt+et+11]=$.itemSize===4?r.w:1)}}f={count:d,texture:z,size:new ge(R,X)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let y=0;y<c.length;y++)g+=c[y];const b=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",b),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function U_(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const lh=new Ke,Xl=new ah(1,1),ch=new Zc,hh=new td,uh=new rh,ql=[],Yl=[],jl=new Float32Array(16),Zl=new Float32Array(9),Kl=new Float32Array(4);function lr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ql[r];if(s===void 0&&(s=new Float32Array(r),ql[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zs(i,t){let e=Yl[t];e===void 0&&(e=new Int32Array(t),Yl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function F_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function N_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function O_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function B_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function z_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;Kl.set(n),i.uniformMatrix2fv(this.addr,!1,Kl),Oe(e,n)}}function H_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;Zl.set(n),i.uniformMatrix3fv(this.addr,!1,Zl),Oe(e,n)}}function k_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;jl.set(n),i.uniformMatrix4fv(this.addr,!1,jl),Oe(e,n)}}function G_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function V_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function W_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function X_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function q_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function j_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function Z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function K_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Xl.compareFunction=qc,s=Xl):s=lh,e.setTexture2D(t||s,r)}function $_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||hh,r)}function J_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||uh,r)}function Q_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ch,r)}function tm(i){switch(i){case 5126:return F_;case 35664:return N_;case 35665:return O_;case 35666:return B_;case 35674:return z_;case 35675:return H_;case 35676:return k_;case 5124:case 35670:return G_;case 35667:case 35671:return V_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return q_;case 36294:return Y_;case 36295:return j_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return Q_}}function em(i,t){i.uniform1fv(this.addr,t)}function nm(i,t){const e=lr(t,this.size,2);i.uniform2fv(this.addr,e)}function im(i,t){const e=lr(t,this.size,3);i.uniform3fv(this.addr,e)}function rm(i,t){const e=lr(t,this.size,4);i.uniform4fv(this.addr,e)}function sm(i,t){const e=lr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function am(i,t){const e=lr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function om(i,t){const e=lr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function lm(i,t){i.uniform1iv(this.addr,t)}function cm(i,t){i.uniform2iv(this.addr,t)}function hm(i,t){i.uniform3iv(this.addr,t)}function um(i,t){i.uniform4iv(this.addr,t)}function dm(i,t){i.uniform1uiv(this.addr,t)}function fm(i,t){i.uniform2uiv(this.addr,t)}function pm(i,t){i.uniform3uiv(this.addr,t)}function _m(i,t){i.uniform4uiv(this.addr,t)}function mm(i,t,e){const n=this.cache,r=t.length,s=zs(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||lh,s[a])}function gm(i,t,e){const n=this.cache,r=t.length,s=zs(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||hh,s[a])}function wm(i,t,e){const n=this.cache,r=t.length,s=zs(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||uh,s[a])}function vm(i,t,e){const n=this.cache,r=t.length,s=zs(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ch,s[a])}function bm(i){switch(i){case 5126:return em;case 35664:return nm;case 35665:return im;case 35666:return rm;case 35674:return sm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return fm;case 36295:return pm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return vm}}class xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tm(e.type)}}class Sm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bm(e.type)}}class ym{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function $l(i,t){i.seq.push(t),i.map[t.id]=t}function Mm(i,t,e){const n=i.name,r=n.length;for(Ta.lastIndex=0;;){const s=Ta.exec(n),a=Ta.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){$l(e,c===void 0?new xm(o,i,t):new Sm(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new ym(o),$l(e,d)),e=d}}}class Ms{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Mm(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Jl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Em=37297;let Tm=0;function Rm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ql=new $t;function Am(i){ue._getMatrix(Ql,ue.workingColorSpace,i);const t=`mat3( ${Ql.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case Ts:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function tc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Rm(i.getShaderSource(t),a)}else return r}function Cm(i,t){const e=Am(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pm(i,t){let e;switch(t){case Tu:e="Linear";break;case Ru:e="Reinhard";break;case Au:e="Cineon";break;case Cu:e="ACESFilmic";break;case Iu:e="AgX";break;case Du:e="Neutral";break;case Pu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const us=new K;function Im(){ue.getLuminanceCoefficients(us);const i=us.x.toFixed(4),t=us.y.toFixed(4),e=us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function Lm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Um(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function br(i){return i!==""}function ec(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(i){return i.replace(Fm,Om)}const Nm=new Map;function Om(i,t){let e=Qt[t];if(e===void 0){const n=Nm.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _o(e)}const Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(i){return i.replace(Bm,zm)}function zm(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===su?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function km(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case tr:case er:t="ENVMAP_TYPE_CUBE";break;case Bs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case er:t="ENVMAP_MODE_REFRACTION";break}return t}function Vm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uc:t="ENVMAP_BLENDING_MULTIPLY";break;case Mu:t="ENVMAP_BLENDING_MIX";break;case Eu:t="ENVMAP_BLENDING_ADD";break}return t}function Wm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xm(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Hm(e),c=km(e),u=Gm(e),d=Vm(e),f=Wm(e),g=Dm(e),b=Lm(s),y=r.createProgram();let w,m,U=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(w=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(br).join(`
`),w.length>0&&(w+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(br).join(`
`),m.length>0&&(m+=`
`)):(w=[rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),m=[rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ri?Pm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Cm("linearToOutputTexel",e.outputColorSpace),Im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),a=_o(a),a=ec(a,e),a=nc(a,e),o=_o(o),o=ec(o,e),o=nc(o,e),a=ic(a),o=ic(o),e.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,w=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,m=["#define varying in",e.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const P=U+w+a,R=U+m+o,X=Jl(r,r.VERTEX_SHADER,P),O=Jl(r,r.FRAGMENT_SHADER,R);r.attachShader(y,X),r.attachShader(y,O),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function z(N){if(i.debug.checkShaderErrors){const tt=r.getProgramInfoLog(y).trim(),$=r.getShaderInfoLog(X).trim(),nt=r.getShaderInfoLog(O).trim();let dt=!0,et=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(dt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,X,O);else{const ft=tc(r,X,"vertex"),Q=tc(r,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+tt+`
`+ft+`
`+Q)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):($===""||nt==="")&&(et=!1);et&&(N.diagnostics={runnable:dt,programLog:tt,vertexShader:{log:$,prefix:w},fragmentShader:{log:nt,prefix:m}})}r.deleteShader(X),r.deleteShader(O),q=new Ms(r,y),T=Um(r,y)}let q;this.getUniforms=function(){return q===void 0&&z(this),q};let T;this.getAttributes=function(){return T===void 0&&z(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,Em)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tm++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=X,this.fragmentShader=O,this}let qm=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jm(t),e.set(t,n)),n}}class jm{constructor(t){this.id=qm++,this.code=t,this.usedTimes=0}}function Zm(i,t,e,n,r,s,a){const o=new $c,l=new Ym,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function w(T,S,N,tt,$){const nt=tt.fog,dt=$.geometry,et=T.isMeshStandardMaterial?tt.environment:null,ft=(T.isMeshStandardMaterial?e:t).get(T.envMap||et),Q=ft&&ft.mapping===Bs?ft.image.height:null,wt=b[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const bt=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Lt=bt!==void 0?bt.length:0;let Wt=0;dt.morphAttributes.position!==void 0&&(Wt=1),dt.morphAttributes.normal!==void 0&&(Wt=2),dt.morphAttributes.color!==void 0&&(Wt=3);let ee,it,_t,mt;if(wt){const de=yn[wt];ee=de.vertexShader,it=de.fragmentShader}else ee=T.vertexShader,it=T.fragmentShader,l.update(T),_t=l.getVertexShaderID(T),mt=l.getFragmentShaderID(T);const vt=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),ie=$.isInstancedMesh===!0,Xt=$.isBatchedMesh===!0,we=!!T.map,_e=!!T.matcap,Jt=!!ft,F=!!T.aoMap,Ye=!!T.lightMap,re=!!T.bumpMap,se=!!T.normalMap,zt=!!T.displacementMap,ve=!!T.emissiveMap,Ot=!!T.metalnessMap,A=!!T.roughnessMap,v=T.anisotropy>0,Y=T.clearcoat>0,ot=T.dispersion>0,ht=T.iridescence>0,rt=T.sheen>0,Ft=T.transmission>0,St=v&&!!T.anisotropyMap,Et=Y&&!!T.clearcoatMap,oe=Y&&!!T.clearcoatNormalMap,gt=Y&&!!T.clearcoatRoughnessMap,Rt=ht&&!!T.iridescenceMap,It=ht&&!!T.iridescenceThicknessMap,Nt=rt&&!!T.sheenColorMap,Tt=rt&&!!T.sheenRoughnessMap,Yt=!!T.specularMap,Ht=!!T.specularColorMap,jt=!!T.specularIntensityMap,H=Ft&&!!T.transmissionMap,j=Ft&&!!T.thicknessMap,J=!!T.gradientMap,lt=!!T.alphaMap,Mt=T.alphaTest>0,yt=!!T.alphaHash,Zt=!!T.extensions;let Me=ri;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Me=i.toneMapping);const ze={shaderID:wt,shaderType:T.type,shaderName:T.name,vertexShader:ee,fragmentShader:it,defines:T.defines,customVertexShaderID:_t,customFragmentShaderID:mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Xt,batchingColor:Xt&&$._colorsTexture!==null,instancing:ie,instancingColor:ie&&$.instanceColor!==null,instancingMorph:ie&&$.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:ai,alphaToCoverage:!!T.alphaToCoverage,map:we,matcap:_e,envMap:Jt,envMapMode:Jt&&ft.mapping,envMapCubeUVHeight:Q,aoMap:F,lightMap:Ye,bumpMap:re,normalMap:se,displacementMap:f&&zt,emissiveMap:ve,normalMapObjectSpace:se&&T.normalMapType===Nu,normalMapTangentSpace:se&&T.normalMapType===Xc,metalnessMap:Ot,roughnessMap:A,anisotropy:v,anisotropyMap:St,clearcoat:Y,clearcoatMap:Et,clearcoatNormalMap:oe,clearcoatRoughnessMap:gt,dispersion:ot,iridescence:ht,iridescenceMap:Rt,iridescenceThicknessMap:It,sheen:rt,sheenColorMap:Nt,sheenRoughnessMap:Tt,specularMap:Yt,specularColorMap:Ht,specularIntensityMap:jt,transmission:Ft,transmissionMap:H,thicknessMap:j,gradientMap:J,opaque:T.transparent===!1&&T.blending===Zi&&T.alphaToCoverage===!1,alphaMap:lt,alphaTest:Mt,alphaHash:yt,combine:T.combine,mapUv:we&&y(T.map.channel),aoMapUv:F&&y(T.aoMap.channel),lightMapUv:Ye&&y(T.lightMap.channel),bumpMapUv:re&&y(T.bumpMap.channel),normalMapUv:se&&y(T.normalMap.channel),displacementMapUv:zt&&y(T.displacementMap.channel),emissiveMapUv:ve&&y(T.emissiveMap.channel),metalnessMapUv:Ot&&y(T.metalnessMap.channel),roughnessMapUv:A&&y(T.roughnessMap.channel),anisotropyMapUv:St&&y(T.anisotropyMap.channel),clearcoatMapUv:Et&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:oe&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:It&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&y(T.sheenRoughnessMap.channel),specularMapUv:Yt&&y(T.specularMap.channel),specularColorMapUv:Ht&&y(T.specularColorMap.channel),specularIntensityMapUv:jt&&y(T.specularIntensityMap.channel),transmissionMapUv:H&&y(T.transmissionMap.channel),thicknessMapUv:j&&y(T.thicknessMap.channel),alphaMapUv:lt&&y(T.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(se||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!dt.attributes.uv&&(we||lt),fog:!!nt,useFog:T.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ut,skinning:$.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Wt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:we&&T.map.isVideoTexture===!0&&ue.getTransfer(T.map.colorSpace)===me,decodeVideoTextureEmissive:ve&&T.emissiveMap.isVideoTexture===!0&&ue.getTransfer(T.emissiveMap.colorSpace)===me,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===On,flipSided:T.side===Qe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Zt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&T.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function m(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const N in T.defines)S.push(N),S.push(T.defines[N]);return T.isRawShaderMaterial===!1&&(U(S,T),P(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function U(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function P(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),T.push(o.mask)}function R(T){const S=b[T.type];let N;if(S){const tt=yn[S];N=gd.clone(tt.uniforms)}else N=T.uniforms;return N}function X(T,S){let N;for(let tt=0,$=u.length;tt<$;tt++){const nt=u[tt];if(nt.cacheKey===S){N=nt,++N.usedTimes;break}}return N===void 0&&(N=new Xm(i,S,T,s),u.push(N)),N}function O(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function z(T){l.remove(T)}function q(){l.dispose()}return{getParameters:w,getProgramCacheKey:m,getUniforms:R,acquireProgram:X,releaseProgram:O,releaseShaderCache:z,programs:u,dispose:q}}function Km(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function $m(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function sc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ac(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d,f,g,b,y,w){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:f,material:g,groupOrder:b,renderOrder:d.renderOrder,z:y,group:w},i[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=g,m.groupOrder=b,m.renderOrder=d.renderOrder,m.z=y,m.group=w),t++,m}function o(d,f,g,b,y,w){const m=a(d,f,g,b,y,w);g.transmission>0?n.push(m):g.transparent===!0?r.push(m):e.push(m)}function l(d,f,g,b,y,w){const m=a(d,f,g,b,y,w);g.transmission>0?n.unshift(m):g.transparent===!0?r.unshift(m):e.unshift(m)}function c(d,f){e.length>1&&e.sort(d||$m),n.length>1&&n.sort(f||sc),r.length>1&&r.sort(f||sc)}function u(){for(let d=t,f=i.length;d<f;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Jm(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new ac,i.set(n,[a])):r>=s.length?(a=new ac,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Qm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new pe};break;case"SpotLight":e={position:new K,direction:new K,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new K,halfWidth:new K,halfHeight:new K};break}return i[t.id]=e,e}}}function tg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let eg=0;function ng(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ig(i){const t=new Qm,e=tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);const r=new K,s=new De,a=new De;function o(c){let u=0,d=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let g=0,b=0,y=0,w=0,m=0,U=0,P=0,R=0,X=0,O=0,z=0;c.sort(ng);for(let T=0,S=c.length;T<S;T++){const N=c[T],tt=N.color,$=N.intensity,nt=N.distance,dt=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=tt.r*$,d+=tt.g*$,f+=tt.b*$;else if(N.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(N.sh.coefficients[et],$);z++}else if(N.isDirectionalLight){const et=t.get(N);if(et.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ft=N.shadow,Q=e.get(N);Q.shadowIntensity=ft.intensity,Q.shadowBias=ft.bias,Q.shadowNormalBias=ft.normalBias,Q.shadowRadius=ft.radius,Q.shadowMapSize=ft.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=dt,n.directionalShadowMatrix[g]=N.shadow.matrix,U++}n.directional[g]=et,g++}else if(N.isSpotLight){const et=t.get(N);et.position.setFromMatrixPosition(N.matrixWorld),et.color.copy(tt).multiplyScalar($),et.distance=nt,et.coneCos=Math.cos(N.angle),et.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),et.decay=N.decay,n.spot[y]=et;const ft=N.shadow;if(N.map&&(n.spotLightMap[X]=N.map,X++,ft.updateMatrices(N),N.castShadow&&O++),n.spotLightMatrix[y]=ft.matrix,N.castShadow){const Q=e.get(N);Q.shadowIntensity=ft.intensity,Q.shadowBias=ft.bias,Q.shadowNormalBias=ft.normalBias,Q.shadowRadius=ft.radius,Q.shadowMapSize=ft.mapSize,n.spotShadow[y]=Q,n.spotShadowMap[y]=dt,R++}y++}else if(N.isRectAreaLight){const et=t.get(N);et.color.copy(tt).multiplyScalar($),et.halfWidth.set(N.width*.5,0,0),et.halfHeight.set(0,N.height*.5,0),n.rectArea[w]=et,w++}else if(N.isPointLight){const et=t.get(N);if(et.color.copy(N.color).multiplyScalar(N.intensity),et.distance=N.distance,et.decay=N.decay,N.castShadow){const ft=N.shadow,Q=e.get(N);Q.shadowIntensity=ft.intensity,Q.shadowBias=ft.bias,Q.shadowNormalBias=ft.normalBias,Q.shadowRadius=ft.radius,Q.shadowMapSize=ft.mapSize,Q.shadowCameraNear=ft.camera.near,Q.shadowCameraFar=ft.camera.far,n.pointShadow[b]=Q,n.pointShadowMap[b]=dt,n.pointShadowMatrix[b]=N.shadow.matrix,P++}n.point[b]=et,b++}else if(N.isHemisphereLight){const et=t.get(N);et.skyColor.copy(N.color).multiplyScalar($),et.groundColor.copy(N.groundColor).multiplyScalar($),n.hemi[m]=et,m++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const q=n.hash;(q.directionalLength!==g||q.pointLength!==b||q.spotLength!==y||q.rectAreaLength!==w||q.hemiLength!==m||q.numDirectionalShadows!==U||q.numPointShadows!==P||q.numSpotShadows!==R||q.numSpotMaps!==X||q.numLightProbes!==z)&&(n.directional.length=g,n.spot.length=y,n.rectArea.length=w,n.point.length=b,n.hemi.length=m,n.directionalShadow.length=U,n.directionalShadowMap.length=U,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=U,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=R+X-O,n.spotLightMap.length=X,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=z,q.directionalLength=g,q.pointLength=b,q.spotLength=y,q.rectAreaLength=w,q.hemiLength=m,q.numDirectionalShadows=U,q.numPointShadows=P,q.numSpotShadows=R,q.numSpotMaps=X,q.numLightProbes=z,n.version=eg++)}function l(c,u){let d=0,f=0,g=0,b=0,y=0;const w=u.matrixWorldInverse;for(let m=0,U=c.length;m<U;m++){const P=c[m];if(P.isDirectionalLight){const R=n.directional[d];R.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(w),d++}else if(P.isSpotLight){const R=n.spot[g];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(w),R.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(w),g++}else if(P.isRectAreaLight){const R=n.rectArea[b];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(w),a.identity(),s.copy(P.matrixWorld),s.premultiply(w),a.extractRotation(s),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),b++}else if(P.isPointLight){const R=n.point[f];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(w),f++}else if(P.isHemisphereLight){const R=n.hemi[y];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(w),y++}}}return{setup:o,setupView:l,state:n}}function oc(i){const t=new ig(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function rg(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new oc(i),t.set(r,[o])):s>=a.length?(o=new oc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
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
}`;function og(i,t,e){let n=new sh;const r=new ge,s=new ge,a=new Ce,o=new Ad({depthPacking:Fu}),l=new Cd,c={},u=e.maxTextureSize,d={[si]:Qe,[Qe]:si,[On]:On},f=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:sg,fragmentShader:ag}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const b=new Ai;b.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Mn(b,f),w=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let m=this.type;this.render=function(O,z,q){if(w.enabled===!1||w.autoUpdate===!1&&w.needsUpdate===!1||O.length===0)return;const T=i.getRenderTarget(),S=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),tt=i.state;tt.setBlending(ii),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const $=m!==Fn&&this.type===Fn,nt=m===Fn&&this.type!==Fn;for(let dt=0,et=O.length;dt<et;dt++){const ft=O[dt],Q=ft.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ft,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const wt=Q.getFrameExtents();if(r.multiply(wt),s.copy(Q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/wt.x),r.x=s.x*wt.x,Q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/wt.y),r.y=s.y*wt.y,Q.mapSize.y=s.y)),Q.map===null||$===!0||nt===!0){const Lt=this.type!==Fn?{minFilter:sn,magFilter:sn}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ei(r.x,r.y,Lt),Q.map.texture.name=ft.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();const bt=Q.getViewportCount();for(let Lt=0;Lt<bt;Lt++){const Wt=Q.getViewport(Lt);a.set(s.x*Wt.x,s.y*Wt.y,s.x*Wt.z,s.y*Wt.w),tt.viewport(a),Q.updateMatrices(ft,Lt),n=Q.getFrustum(),R(z,q,Q.camera,ft,this.type)}Q.isPointLightShadow!==!0&&this.type===Fn&&U(Q,q),Q.needsUpdate=!1}m=this.type,w.needsUpdate=!1,i.setRenderTarget(T,S,N)};function U(O,z){const q=t.update(y);f.defines.VSM_SAMPLES!==O.blurSamples&&(f.defines.VSM_SAMPLES=O.blurSamples,g.defines.VSM_SAMPLES=O.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ei(r.x,r.y)),f.uniforms.shadow_pass.value=O.map.texture,f.uniforms.resolution.value=O.mapSize,f.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(z,null,q,f,y,null),g.uniforms.shadow_pass.value=O.mapPass.texture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(z,null,q,g,y,null)}function P(O,z,q,T){let S=null;const N=q.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(N!==void 0)S=N;else if(S=q.isPointLight===!0?l:o,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const tt=S.uuid,$=z.uuid;let nt=c[tt];nt===void 0&&(nt={},c[tt]=nt);let dt=nt[$];dt===void 0&&(dt=S.clone(),nt[$]=dt,z.addEventListener("dispose",X)),S=dt}if(S.visible=z.visible,S.wireframe=z.wireframe,T===Fn?S.side=z.shadowSide!==null?z.shadowSide:z.side:S.side=z.shadowSide!==null?z.shadowSide:d[z.side],S.alphaMap=z.alphaMap,S.alphaTest=z.alphaTest,S.map=z.map,S.clipShadows=z.clipShadows,S.clippingPlanes=z.clippingPlanes,S.clipIntersection=z.clipIntersection,S.displacementMap=z.displacementMap,S.displacementScale=z.displacementScale,S.displacementBias=z.displacementBias,S.wireframeLinewidth=z.wireframeLinewidth,S.linewidth=z.linewidth,q.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const tt=i.properties.get(S);tt.light=q}return S}function R(O,z,q,T,S){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&S===Fn)&&(!O.frustumCulled||n.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,O.matrixWorld);const $=t.update(O),nt=O.material;if(Array.isArray(nt)){const dt=$.groups;for(let et=0,ft=dt.length;et<ft;et++){const Q=dt[et],wt=nt[Q.materialIndex];if(wt&&wt.visible){const bt=P(O,wt,T,S);O.onBeforeShadow(i,O,z,q,$,bt,Q),i.renderBufferDirect(q,null,$,bt,O,Q),O.onAfterShadow(i,O,z,q,$,bt,Q)}}}else if(nt.visible){const dt=P(O,nt,T,S);O.onBeforeShadow(i,O,z,q,$,dt,null),i.renderBufferDirect(q,null,$,dt,O,null),O.onAfterShadow(i,O,z,q,$,dt,null)}}const tt=O.children;for(let $=0,nt=tt.length;$<nt;$++)R(tt[$],z,q,T,S)}function X(O){O.target.removeEventListener("dispose",X);for(const q in c){const T=c[q],S=O.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const lg={[Ia]:Da,[La]:Na,[Ua]:Oa,[Qi]:Fa,[Da]:Ia,[Na]:La,[Oa]:Ua,[Fa]:Qi};function cg(i,t){function e(){let H=!1;const j=new Ce;let J=null;const lt=new Ce(0,0,0,0);return{setMask:function(Mt){J!==Mt&&!H&&(i.colorMask(Mt,Mt,Mt,Mt),J=Mt)},setLocked:function(Mt){H=Mt},setClear:function(Mt,yt,Zt,Me,ze){ze===!0&&(Mt*=Me,yt*=Me,Zt*=Me),j.set(Mt,yt,Zt,Me),lt.equals(j)===!1&&(i.clearColor(Mt,yt,Zt,Me),lt.copy(j))},reset:function(){H=!1,J=null,lt.set(-1,0,0,0)}}}function n(){let H=!1,j=!1,J=null,lt=null,Mt=null;return{setReversed:function(yt){if(j!==yt){const Zt=t.get("EXT_clip_control");j?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const Me=Mt;Mt=null,this.setClear(Me)}j=yt},getReversed:function(){return j},setTest:function(yt){yt?vt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(yt){J!==yt&&!H&&(i.depthMask(yt),J=yt)},setFunc:function(yt){if(j&&(yt=lg[yt]),lt!==yt){switch(yt){case Ia:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case La:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Fa:i.depthFunc(i.GEQUAL);break;case Na:i.depthFunc(i.GREATER);break;case Oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=yt}},setLocked:function(yt){H=yt},setClear:function(yt){Mt!==yt&&(j&&(yt=1-yt),i.clearDepth(yt),Mt=yt)},reset:function(){H=!1,J=null,lt=null,Mt=null,j=!1}}}function r(){let H=!1,j=null,J=null,lt=null,Mt=null,yt=null,Zt=null,Me=null,ze=null;return{setTest:function(de){H||(de?vt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(de){j!==de&&!H&&(i.stencilMask(de),j=de)},setFunc:function(de,tn,fn){(J!==de||lt!==tn||Mt!==fn)&&(i.stencilFunc(de,tn,fn),J=de,lt=tn,Mt=fn)},setOp:function(de,tn,fn){(yt!==de||Zt!==tn||Me!==fn)&&(i.stencilOp(de,tn,fn),yt=de,Zt=tn,Me=fn)},setLocked:function(de){H=de},setClear:function(de){ze!==de&&(i.clearStencil(de),ze=de)},reset:function(){H=!1,j=null,J=null,lt=null,Mt=null,yt=null,Zt=null,Me=null,ze=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,g=[],b=null,y=!1,w=null,m=null,U=null,P=null,R=null,X=null,O=null,z=new pe(0,0,0),q=0,T=!1,S=null,N=null,tt=null,$=null,nt=null;const dt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,ft=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(Q)[1]),et=ft>=1):Q.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),et=ft>=2);let wt=null,bt={};const Lt=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),ee=new Ce().fromArray(Lt),it=new Ce().fromArray(Wt);function _t(H,j,J,lt){const Mt=new Uint8Array(4),yt=i.createTexture();i.bindTexture(H,yt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<J;Zt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(j+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return yt}const mt={};mt[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),vt(i.DEPTH_TEST),a.setFunc(Qi),re(!1),se(ul),vt(i.CULL_FACE),F(ii);function vt(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function Ut(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function ie(H,j){return d[H]!==j?(i.bindFramebuffer(H,j),d[H]=j,H===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=j),H===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Xt(H,j){let J=g,lt=!1;if(H){J=f.get(j),J===void 0&&(J=[],f.set(j,J));const Mt=H.textures;if(J.length!==Mt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Zt=Mt.length;yt<Zt;yt++)J[yt]=i.COLOR_ATTACHMENT0+yt;J.length=Mt.length,lt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,lt=!0);lt&&i.drawBuffers(J)}function we(H){return b!==H?(i.useProgram(H),b=H,!0):!1}const _e={[bi]:i.FUNC_ADD,[ou]:i.FUNC_SUBTRACT,[lu]:i.FUNC_REVERSE_SUBTRACT};_e[cu]=i.MIN,_e[hu]=i.MAX;const Jt={[uu]:i.ZERO,[du]:i.ONE,[fu]:i.SRC_COLOR,[Ca]:i.SRC_ALPHA,[vu]:i.SRC_ALPHA_SATURATE,[gu]:i.DST_COLOR,[_u]:i.DST_ALPHA,[pu]:i.ONE_MINUS_SRC_COLOR,[Pa]:i.ONE_MINUS_SRC_ALPHA,[wu]:i.ONE_MINUS_DST_COLOR,[mu]:i.ONE_MINUS_DST_ALPHA,[bu]:i.CONSTANT_COLOR,[xu]:i.ONE_MINUS_CONSTANT_COLOR,[Su]:i.CONSTANT_ALPHA,[yu]:i.ONE_MINUS_CONSTANT_ALPHA};function F(H,j,J,lt,Mt,yt,Zt,Me,ze,de){if(H===ii){y===!0&&(Ut(i.BLEND),y=!1);return}if(y===!1&&(vt(i.BLEND),y=!0),H!==au){if(H!==w||de!==T){if((m!==bi||R!==bi)&&(i.blendEquation(i.FUNC_ADD),m=bi,R=bi),de)switch(H){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.ONE,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}U=null,P=null,X=null,O=null,z.set(0,0,0),q=0,w=H,T=de}return}Mt=Mt||j,yt=yt||J,Zt=Zt||lt,(j!==m||Mt!==R)&&(i.blendEquationSeparate(_e[j],_e[Mt]),m=j,R=Mt),(J!==U||lt!==P||yt!==X||Zt!==O)&&(i.blendFuncSeparate(Jt[J],Jt[lt],Jt[yt],Jt[Zt]),U=J,P=lt,X=yt,O=Zt),(Me.equals(z)===!1||ze!==q)&&(i.blendColor(Me.r,Me.g,Me.b,ze),z.copy(Me),q=ze),w=H,T=!1}function Ye(H,j){H.side===On?Ut(i.CULL_FACE):vt(i.CULL_FACE);let J=H.side===Qe;j&&(J=!J),re(J),H.blending===Zi&&H.transparent===!1?F(ii):F(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),s.setMask(H.colorWrite);const lt=H.stencilWrite;o.setTest(lt),lt&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ve(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(H){S!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),S=H)}function se(H){H!==iu?(vt(i.CULL_FACE),H!==N&&(H===ul?i.cullFace(i.BACK):H===ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),N=H}function zt(H){H!==tt&&(et&&i.lineWidth(H),tt=H)}function ve(H,j,J){H?(vt(i.POLYGON_OFFSET_FILL),($!==j||nt!==J)&&(i.polygonOffset(j,J),$=j,nt=J)):Ut(i.POLYGON_OFFSET_FILL)}function Ot(H){H?vt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function A(H){H===void 0&&(H=i.TEXTURE0+dt-1),wt!==H&&(i.activeTexture(H),wt=H)}function v(H,j,J){J===void 0&&(wt===null?J=i.TEXTURE0+dt-1:J=wt);let lt=bt[J];lt===void 0&&(lt={type:void 0,texture:void 0},bt[J]=lt),(lt.type!==H||lt.texture!==j)&&(wt!==J&&(i.activeTexture(J),wt=J),i.bindTexture(H,j||mt[H]),lt.type=H,lt.texture=j)}function Y(){const H=bt[wt];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function St(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function gt(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Nt(H){ee.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),ee.copy(H))}function Tt(H){it.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),it.copy(H))}function Yt(H,j){let J=c.get(j);J===void 0&&(J=new WeakMap,c.set(j,J));let lt=J.get(H);lt===void 0&&(lt=i.getUniformBlockIndex(j,H.name),J.set(H,lt))}function Ht(H,j){const lt=c.get(j).get(H);l.get(j)!==lt&&(i.uniformBlockBinding(j,lt,H.__bindingPointIndex),l.set(j,lt))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},wt=null,bt={},d={},f=new WeakMap,g=[],b=null,y=!1,w=null,m=null,U=null,P=null,R=null,X=null,O=null,z=new pe(0,0,0),q=0,T=!1,S=null,N=null,tt=null,$=null,nt=null,ee.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:vt,disable:Ut,bindFramebuffer:ie,drawBuffers:Xt,useProgram:we,setBlending:F,setMaterial:Ye,setFlipSided:re,setCullFace:se,setLineWidth:zt,setPolygonOffset:ve,setScissorTest:Ot,activeTexture:A,bindTexture:v,unbindTexture:Y,compressedTexImage2D:ot,compressedTexImage3D:ht,texImage2D:Rt,texImage3D:It,updateUBOMapping:Yt,uniformBlockBinding:Ht,texStorage2D:oe,texStorage3D:gt,texSubImage2D:rt,texSubImage3D:Ft,compressedTexSubImage2D:St,compressedTexSubImage3D:Et,scissor:Nt,viewport:Tt,reset:jt}}function hg(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,u=new WeakMap;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,v){return g?new OffscreenCanvas(A,v):As("canvas")}function y(A,v,Y){let ot=1;const ht=Ot(A);if((ht.width>Y||ht.height>Y)&&(ot=Y/Math.max(ht.width,ht.height)),ot<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const rt=Math.floor(ot*ht.width),Ft=Math.floor(ot*ht.height);d===void 0&&(d=b(rt,Ft));const St=v?b(rt,Ft):d;return St.width=rt,St.height=Ft,St.getContext("2d").drawImage(A,0,0,rt,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+rt+"x"+Ft+")."),St}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),A;return A}function w(A){return A.generateMipmaps}function m(A){i.generateMipmap(A)}function U(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(A,v,Y,ot,ht=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt=v;if(v===i.RED&&(Y===i.FLOAT&&(rt=i.R32F),Y===i.HALF_FLOAT&&(rt=i.R16F),Y===i.UNSIGNED_BYTE&&(rt=i.R8)),v===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.R8UI),Y===i.UNSIGNED_SHORT&&(rt=i.R16UI),Y===i.UNSIGNED_INT&&(rt=i.R32UI),Y===i.BYTE&&(rt=i.R8I),Y===i.SHORT&&(rt=i.R16I),Y===i.INT&&(rt=i.R32I)),v===i.RG&&(Y===i.FLOAT&&(rt=i.RG32F),Y===i.HALF_FLOAT&&(rt=i.RG16F),Y===i.UNSIGNED_BYTE&&(rt=i.RG8)),v===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(rt=i.RG16UI),Y===i.UNSIGNED_INT&&(rt=i.RG32UI),Y===i.BYTE&&(rt=i.RG8I),Y===i.SHORT&&(rt=i.RG16I),Y===i.INT&&(rt=i.RG32I)),v===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),Y===i.UNSIGNED_INT&&(rt=i.RGB32UI),Y===i.BYTE&&(rt=i.RGB8I),Y===i.SHORT&&(rt=i.RGB16I),Y===i.INT&&(rt=i.RGB32I)),v===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),Y===i.UNSIGNED_INT&&(rt=i.RGBA32UI),Y===i.BYTE&&(rt=i.RGBA8I),Y===i.SHORT&&(rt=i.RGBA16I),Y===i.INT&&(rt=i.RGBA32I)),v===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),v===i.RGBA){const Ft=ht?Ts:ue.getTransfer(ot);Y===i.FLOAT&&(rt=i.RGBA32F),Y===i.HALF_FLOAT&&(rt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(rt=Ft===me?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function R(A,v){let Y;return A?v===null||v===Mi||v===nr?Y=i.DEPTH24_STENCIL8:v===un?Y=i.DEPTH32F_STENCIL8:v===Mr&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mi||v===nr?Y=i.DEPTH_COMPONENT24:v===un?Y=i.DEPTH_COMPONENT32F:v===Mr&&(Y=i.DEPTH_COMPONENT16),Y}function X(A,v){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==sn&&A.minFilter!==Ze?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function O(A){const v=A.target;v.removeEventListener("dispose",O),q(v),v.isVideoTexture&&u.delete(v)}function z(A){const v=A.target;v.removeEventListener("dispose",z),S(v)}function q(A){const v=n.get(A);if(v.__webglInit===void 0)return;const Y=A.source,ot=f.get(Y);if(ot){const ht=ot[v.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&T(A),Object.keys(ot).length===0&&f.delete(Y)}n.remove(A)}function T(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const Y=A.source,ot=f.get(Y);delete ot[v.__cacheKey],a.memory.textures--}function S(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(v.__webglFramebuffer[ot]))for(let ht=0;ht<v.__webglFramebuffer[ot].length;ht++)i.deleteFramebuffer(v.__webglFramebuffer[ot][ht]);else i.deleteFramebuffer(v.__webglFramebuffer[ot]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ot])}else{if(Array.isArray(v.__webglFramebuffer))for(let ot=0;ot<v.__webglFramebuffer.length;ot++)i.deleteFramebuffer(v.__webglFramebuffer[ot]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ot=0;ot<v.__webglColorRenderbuffer.length;ot++)v.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ot]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const Y=A.textures;for(let ot=0,ht=Y.length;ot<ht;ot++){const rt=n.get(Y[ot]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(Y[ot])}n.remove(A)}let N=0;function tt(){N=0}function $(){const A=N;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),N+=1,A}function nt(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function dt(A,v){const Y=n.get(A);if(A.isVideoTexture&&zt(A),A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){const ot=A.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(Y,A,v);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+v)}function et(A,v){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){it(Y,A,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+v)}function ft(A,v){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){it(Y,A,v);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+v)}function Q(A,v){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){_t(Y,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+v)}const wt={[za]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},bt={[sn]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[Wr]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[$s]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},Lt={[Ou]:i.NEVER,[Vu]:i.ALWAYS,[Bu]:i.LESS,[qc]:i.LEQUAL,[zu]:i.EQUAL,[Gu]:i.GEQUAL,[Hu]:i.GREATER,[ku]:i.NOTEQUAL};function Wt(A,v){if(v.type===un&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ze||v.magFilter===$s||v.magFilter===Wr||v.magFilter===ni||v.minFilter===Ze||v.minFilter===$s||v.minFilter===Wr||v.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,wt[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,wt[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,wt[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,bt[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,bt[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Lt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===sn||v.minFilter!==Wr&&v.minFilter!==ni||v.type===un&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ee(A,v){let Y=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",O));const ot=v.source;let ht=f.get(ot);ht===void 0&&(ht={},f.set(ot,ht));const rt=nt(v);if(rt!==A.__cacheKey){ht[rt]===void 0&&(ht[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ht[rt].usedTimes++;const Ft=ht[A.__cacheKey];Ft!==void 0&&(ht[A.__cacheKey].usedTimes--,Ft.usedTimes===0&&T(v)),A.__cacheKey=rt,A.__webglTexture=ht[rt].texture}return Y}function it(A,v,Y){let ot=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ot=i.TEXTURE_3D);const ht=ee(A,v),rt=v.source;e.bindTexture(ot,A.__webglTexture,i.TEXTURE0+Y);const Ft=n.get(rt);if(rt.version!==Ft.__version||ht===!0){e.activeTexture(i.TEXTURE0+Y);const St=ue.getPrimaries(ue.workingColorSpace),Et=v.colorSpace===Bn?null:ue.getPrimaries(v.colorSpace),oe=v.colorSpace===Bn||St===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let gt=y(v.image,!1,r.maxTextureSize);gt=ve(v,gt);const Rt=s.convert(v.format,v.colorSpace),It=s.convert(v.type);let Nt=P(v.internalFormat,Rt,It,v.colorSpace,v.isVideoTexture);Wt(ot,v);let Tt;const Yt=v.mipmaps,Ht=v.isVideoTexture!==!0,jt=Ft.__version===void 0||ht===!0,H=rt.dataReady,j=X(v,gt);if(v.isDepthTexture)Nt=R(v.format===ir,v.type),jt&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Nt,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,gt.width,gt.height,0,Rt,It,null));else if(v.isDataTexture)if(Yt.length>0){Ht&&jt&&e.texStorage2D(i.TEXTURE_2D,j,Nt,Yt[0].width,Yt[0].height);for(let J=0,lt=Yt.length;J<lt;J++)Tt=Yt[J],Ht?H&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Tt.width,Tt.height,Rt,It,Tt.data):e.texImage2D(i.TEXTURE_2D,J,Nt,Tt.width,Tt.height,0,Rt,It,Tt.data);v.generateMipmaps=!1}else Ht?(jt&&e.texStorage2D(i.TEXTURE_2D,j,Nt,gt.width,gt.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,Rt,It,gt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,gt.width,gt.height,0,Rt,It,gt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ht&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,j,Nt,Yt[0].width,Yt[0].height,gt.depth);for(let J=0,lt=Yt.length;J<lt;J++)if(Tt=Yt[J],v.format!==dn)if(Rt!==null)if(Ht){if(H)if(v.layerUpdates.size>0){const Mt=Ol(Tt.width,Tt.height,v.format,v.type);for(const yt of v.layerUpdates){const Zt=Tt.data.subarray(yt*Mt/Tt.data.BYTES_PER_ELEMENT,(yt+1)*Mt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,yt,Tt.width,Tt.height,1,Rt,Zt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Tt.width,Tt.height,gt.depth,Rt,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Nt,Tt.width,Tt.height,gt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Tt.width,Tt.height,gt.depth,Rt,It,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Nt,Tt.width,Tt.height,gt.depth,0,Rt,It,Tt.data)}else{Ht&&jt&&e.texStorage2D(i.TEXTURE_2D,j,Nt,Yt[0].width,Yt[0].height);for(let J=0,lt=Yt.length;J<lt;J++)Tt=Yt[J],v.format!==dn?Rt!==null?Ht?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Tt.width,Tt.height,Rt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Nt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?H&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Tt.width,Tt.height,Rt,It,Tt.data):e.texImage2D(i.TEXTURE_2D,J,Nt,Tt.width,Tt.height,0,Rt,It,Tt.data)}else if(v.isDataArrayTexture)if(Ht){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,j,Nt,gt.width,gt.height,gt.depth),H)if(v.layerUpdates.size>0){const J=Ol(gt.width,gt.height,v.format,v.type);for(const lt of v.layerUpdates){const Mt=gt.data.subarray(lt*J/gt.data.BYTES_PER_ELEMENT,(lt+1)*J/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,gt.width,gt.height,1,Rt,It,Mt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Rt,It,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,gt.width,gt.height,gt.depth,0,Rt,It,gt.data);else if(v.isData3DTexture)Ht?(jt&&e.texStorage3D(i.TEXTURE_3D,j,Nt,gt.width,gt.height,gt.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Rt,It,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,gt.width,gt.height,gt.depth,0,Rt,It,gt.data);else if(v.isFramebufferTexture){if(jt)if(Ht)e.texStorage2D(i.TEXTURE_2D,j,Nt,gt.width,gt.height);else{let J=gt.width,lt=gt.height;for(let Mt=0;Mt<j;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Nt,J,lt,0,Rt,It,null),J>>=1,lt>>=1}}else if(Yt.length>0){if(Ht&&jt){const J=Ot(Yt[0]);e.texStorage2D(i.TEXTURE_2D,j,Nt,J.width,J.height)}for(let J=0,lt=Yt.length;J<lt;J++)Tt=Yt[J],Ht?H&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Rt,It,Tt):e.texImage2D(i.TEXTURE_2D,J,Nt,Rt,It,Tt);v.generateMipmaps=!1}else if(Ht){if(jt){const J=Ot(gt);e.texStorage2D(i.TEXTURE_2D,j,Nt,J.width,J.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,It,gt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,Rt,It,gt);w(v)&&m(ot),Ft.__version=rt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function _t(A,v,Y){if(v.image.length!==6)return;const ot=ee(A,v),ht=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+Y);const rt=n.get(ht);if(ht.version!==rt.__version||ot===!0){e.activeTexture(i.TEXTURE0+Y);const Ft=ue.getPrimaries(ue.workingColorSpace),St=v.colorSpace===Bn?null:ue.getPrimaries(v.colorSpace),Et=v.colorSpace===Bn||Ft===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const oe=v.isCompressedTexture||v.image[0].isCompressedTexture,gt=v.image[0]&&v.image[0].isDataTexture,Rt=[];for(let lt=0;lt<6;lt++)!oe&&!gt?Rt[lt]=y(v.image[lt],!0,r.maxCubemapSize):Rt[lt]=gt?v.image[lt].image:v.image[lt],Rt[lt]=ve(v,Rt[lt]);const It=Rt[0],Nt=s.convert(v.format,v.colorSpace),Tt=s.convert(v.type),Yt=P(v.internalFormat,Nt,Tt,v.colorSpace),Ht=v.isVideoTexture!==!0,jt=rt.__version===void 0||ot===!0,H=ht.dataReady;let j=X(v,It);Wt(i.TEXTURE_CUBE_MAP,v);let J;if(oe){Ht&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,j,Yt,It.width,It.height);for(let lt=0;lt<6;lt++){J=Rt[lt].mipmaps;for(let Mt=0;Mt<J.length;Mt++){const yt=J[Mt];v.format!==dn?Nt!==null?Ht?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Mt,0,0,yt.width,yt.height,Nt,yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Mt,Yt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Mt,0,0,yt.width,yt.height,Nt,Tt,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Mt,Yt,yt.width,yt.height,0,Nt,Tt,yt.data)}}}else{if(J=v.mipmaps,Ht&&jt){J.length>0&&j++;const lt=Ot(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,j,Yt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(gt){Ht?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Rt[lt].width,Rt[lt].height,Nt,Tt,Rt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Yt,Rt[lt].width,Rt[lt].height,0,Nt,Tt,Rt[lt].data);for(let Mt=0;Mt<J.length;Mt++){const Zt=J[Mt].image[lt].image;Ht?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Mt+1,0,0,Zt.width,Zt.height,Nt,Tt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Mt+1,Yt,Zt.width,Zt.height,0,Nt,Tt,Zt.data)}}else{Ht?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Nt,Tt,Rt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Yt,Nt,Tt,Rt[lt]);for(let Mt=0;Mt<J.length;Mt++){const yt=J[Mt];Ht?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Mt+1,0,0,Nt,Tt,yt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Mt+1,Yt,Nt,Tt,yt.image[lt])}}}w(v)&&m(i.TEXTURE_CUBE_MAP),rt.__version=ht.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function mt(A,v,Y,ot,ht,rt){const Ft=s.convert(Y.format,Y.colorSpace),St=s.convert(Y.type),Et=P(Y.internalFormat,Ft,St,Y.colorSpace),oe=n.get(v),gt=n.get(Y);if(gt.__renderTarget=v,!oe.__hasExternalTextures){const Rt=Math.max(1,v.width>>rt),It=Math.max(1,v.height>>rt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,rt,Et,Rt,It,v.depth,0,Ft,St,null):e.texImage2D(ht,rt,Et,Rt,It,0,Ft,St,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),se(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,ht,gt.__webglTexture,0,re(v)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,ht,gt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(A,v,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const ot=v.depthTexture,ht=ot&&ot.isDepthTexture?ot.type:null,rt=R(v.stencilBuffer,ht),Ft=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=re(v);se(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,rt,v.width,v.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,rt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,rt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,A)}else{const ot=v.textures;for(let ht=0;ht<ot.length;ht++){const rt=ot[ht],Ft=s.convert(rt.format,rt.colorSpace),St=s.convert(rt.type),Et=P(rt.internalFormat,Ft,St,rt.colorSpace),oe=re(v);Y&&se(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Et,v.width,v.height):se(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Et,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Et,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ot=n.get(v.depthTexture);ot.__renderTarget=v,(!ot.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),dt(v.depthTexture,0);const ht=ot.__webglTexture,rt=re(v);if(v.depthTexture.format===Ki)se(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(v.depthTexture.format===ir)se(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function ie(A){const v=n.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const ot=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ot){const ht=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ot.removeEventListener("dispose",ht)};ot.addEventListener("dispose",ht),v.__depthDisposeCallback=ht}v.__boundDepthTexture=ot}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ut(v.__webglFramebuffer,A)}else if(Y){v.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ot]),v.__webglDepthbuffer[ot]===void 0)v.__webglDepthbuffer[ot]=i.createRenderbuffer(),vt(v.__webglDepthbuffer[ot],A,!1);else{const ht=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),vt(v.__webglDepthbuffer,A,!1);else{const ot=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(A,v,Y){const ot=n.get(A);v!==void 0&&mt(ot.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ie(A)}function we(A){const v=A.texture,Y=n.get(A),ot=n.get(v);A.addEventListener("dispose",z);const ht=A.textures,rt=A.isWebGLCubeRenderTarget===!0,Ft=ht.length>1;if(Ft||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=v.version,a.memory.textures++),rt){Y.__webglFramebuffer=[];for(let St=0;St<6;St++)if(v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer[St]=[];for(let Et=0;Et<v.mipmaps.length;Et++)Y.__webglFramebuffer[St][Et]=i.createFramebuffer()}else Y.__webglFramebuffer[St]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer=[];for(let St=0;St<v.mipmaps.length;St++)Y.__webglFramebuffer[St]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let St=0,Et=ht.length;St<Et;St++){const oe=n.get(ht[St]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&se(A)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let St=0;St<ht.length;St++){const Et=ht[St];Y.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[St]);const oe=s.convert(Et.format,Et.colorSpace),gt=s.convert(Et.type),Rt=P(Et.internalFormat,oe,gt,Et.colorSpace,A.isXRRenderTarget===!0),It=re(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Rt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Y.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(Y.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,v);for(let St=0;St<6;St++)if(v.mipmaps&&v.mipmaps.length>0)for(let Et=0;Et<v.mipmaps.length;Et++)mt(Y.__webglFramebuffer[St][Et],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Et);else mt(Y.__webglFramebuffer[St],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);w(v)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let St=0,Et=ht.length;St<Et;St++){const oe=ht[St],gt=n.get(oe);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),Wt(i.TEXTURE_2D,oe),mt(Y.__webglFramebuffer,A,oe,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,0),w(oe)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let St=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(St=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,ot.__webglTexture),Wt(St,v),v.mipmaps&&v.mipmaps.length>0)for(let Et=0;Et<v.mipmaps.length;Et++)mt(Y.__webglFramebuffer[Et],A,v,i.COLOR_ATTACHMENT0,St,Et);else mt(Y.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,St,0);w(v)&&m(St),e.unbindTexture()}A.depthBuffer&&ie(A)}function _e(A){const v=A.textures;for(let Y=0,ot=v.length;Y<ot;Y++){const ht=v[Y];if(w(ht)){const rt=U(A),Ft=n.get(ht).__webglTexture;e.bindTexture(rt,Ft),m(rt),e.unbindTexture()}}}const Jt=[],F=[];function Ye(A){if(A.samples>0){if(se(A)===!1){const v=A.textures,Y=A.width,ot=A.height;let ht=i.COLOR_BUFFER_BIT;const rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(A),St=v.length>1;if(St)for(let Et=0;Et<v.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Et=0;Et<v.length;Et++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),St){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Et]);const oe=n.get(v[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,Y,ot,0,0,Y,ot,ht,i.NEAREST),l===!0&&(Jt.length=0,F.length=0,Jt.push(i.COLOR_ATTACHMENT0+Et),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Jt.push(rt),F.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let Et=0;Et<v.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Et]);const oe=n.get(v[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function re(A){return Math.min(r.maxSamples,A.samples)}function se(A){const v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function zt(A){const v=a.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function ve(A,v){const Y=A.colorSpace,ot=A.format,ht=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||Y!==ai&&Y!==Bn&&(ue.getTransfer(Y)===me?(ot!==dn||ht!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),v}function Ot(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=tt,this.setTexture2D=dt,this.setTexture2DArray=et,this.setTexture3D=ft,this.setTextureCube=Q,this.rebindTextures=Xt,this.setupRenderTarget=we,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=se}function ug(i,t){function e(n,r=Bn){let s;const a=ue.getTransfer(r);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Do)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===Io)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===kn)return i.HALF_FLOAT;if(n===zc)return i.ALPHA;if(n===Hc)return i.RGB;if(n===dn)return i.RGBA;if(n===kc)return i.LUMINANCE;if(n===Gc)return i.LUMINANCE_ALPHA;if(n===Ki)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===Uo)return i.RED;if(n===Fo)return i.RED_INTEGER;if(n===Vc)return i.RG;if(n===No)return i.RG_INTEGER;if(n===Oo)return i.RGBA_INTEGER;if(n===vs||n===bs||n===xs||n===Ss)if(a===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===Ga||n===Va||n===Wa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ka)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xa||n===qa||n===Ya)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xa||n===qa)return a===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ya)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===Za||n===Ka||n===$a||n===Ja||n===Qa||n===to||n===eo||n===no||n===io||n===ro||n===so||n===ao||n===oo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ja)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===to)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eo)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===no)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===io)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ro)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===so)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ao)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oo)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ys||n===lo||n===co)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ys)return a===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===co)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wc||n===ho||n===uo||n===fo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ys)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ho)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fg=`
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

}`;class pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ke,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new oi({vertexShader:dg,fragmentShader:fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mn(new Fr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _g extends or{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,g=null,b=null;const y=new pg,w=e.getContextAttributes();let m=null,U=null;const P=[],R=[],X=new ge;let O=null;const z=new cn;z.viewport=new Ce;const q=new cn;q.viewport=new Ce;const T=[z,q],S=new Nd;let N=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let _t=P[it];return _t===void 0&&(_t=new va,P[it]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(it){let _t=P[it];return _t===void 0&&(_t=new va,P[it]=_t),_t.getGripSpace()},this.getHand=function(it){let _t=P[it];return _t===void 0&&(_t=new va,P[it]=_t),_t.getHandSpace()};function $(it){const _t=R.indexOf(it.inputSource);if(_t===-1)return;const mt=P[_t];mt!==void 0&&(mt.update(it.inputSource,it.frame,c||a),mt.dispatchEvent({type:it.type,data:it.inputSource}))}function nt(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",nt),r.removeEventListener("inputsourceschange",dt);for(let it=0;it<P.length;it++){const _t=R[it];_t!==null&&(R[it]=null,P[it].disconnect(_t))}N=null,tt=null,y.reset(),t.setRenderTarget(m),g=null,f=null,d=null,r=null,U=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(X.width,X.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){s=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",nt),r.addEventListener("inputsourceschange",dt),w.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(X),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,vt=null,Ut=null;w.depth&&(Ut=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=w.stencil?ir:Ki,vt=w.stencil?nr:Mi);const ie={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:s};d=new XRWebGLBinding(r,e),f=d.createProjectionLayer(ie),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),U=new Ei(f.textureWidth,f.textureHeight,{format:dn,type:Wn,depthTexture:new ah(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const mt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,mt),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),U=new Ei(g.framebufferWidth,g.framebufferHeight,{format:dn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil})}U.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function dt(it){for(let _t=0;_t<it.removed.length;_t++){const mt=it.removed[_t],vt=R.indexOf(mt);vt>=0&&(R[vt]=null,P[vt].disconnect(mt))}for(let _t=0;_t<it.added.length;_t++){const mt=it.added[_t];let vt=R.indexOf(mt);if(vt===-1){for(let ie=0;ie<P.length;ie++)if(ie>=R.length){R.push(mt),vt=ie;break}else if(R[ie]===null){R[ie]=mt,vt=ie;break}if(vt===-1)break}const Ut=P[vt];Ut&&Ut.connect(mt)}}const et=new K,ft=new K;function Q(it,_t,mt){et.setFromMatrixPosition(_t.matrixWorld),ft.setFromMatrixPosition(mt.matrixWorld);const vt=et.distanceTo(ft),Ut=_t.projectionMatrix.elements,ie=mt.projectionMatrix.elements,Xt=Ut[14]/(Ut[10]-1),we=Ut[14]/(Ut[10]+1),_e=(Ut[9]+1)/Ut[5],Jt=(Ut[9]-1)/Ut[5],F=(Ut[8]-1)/Ut[0],Ye=(ie[8]+1)/ie[0],re=Xt*F,se=Xt*Ye,zt=vt/(-F+Ye),ve=zt*-F;if(_t.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ve),it.translateZ(zt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Ut[10]===-1)it.projectionMatrix.copy(_t.projectionMatrix),it.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const Ot=Xt+zt,A=we+zt,v=re-ve,Y=se+(vt-ve),ot=_e*we/A*Ot,ht=Jt*we/A*Ot;it.projectionMatrix.makePerspective(v,Y,ot,ht,Ot,A),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function wt(it,_t){_t===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(_t.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let _t=it.near,mt=it.far;y.texture!==null&&(y.depthNear>0&&(_t=y.depthNear),y.depthFar>0&&(mt=y.depthFar)),S.near=q.near=z.near=_t,S.far=q.far=z.far=mt,(N!==S.near||tt!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,tt=S.far),z.layers.mask=it.layers.mask|2,q.layers.mask=it.layers.mask|4,S.layers.mask=z.layers.mask|q.layers.mask;const vt=it.parent,Ut=S.cameras;wt(S,vt);for(let ie=0;ie<Ut.length;ie++)wt(Ut[ie],vt);Ut.length===2?Q(S,z,q):S.projectionMatrix.copy(z.projectionMatrix),bt(it,S,vt)};function bt(it,_t,mt){mt===null?it.matrix.copy(_t.matrixWorld):(it.matrix.copy(mt.matrixWorld),it.matrix.invert(),it.matrix.multiply(_t.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(_t.projectionMatrix),it.projectionMatrixInverse.copy(_t.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=po*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(it){l=it,f!==null&&(f.fixedFoveation=it),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=it)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let Lt=null;function Wt(it,_t){if(u=_t.getViewerPose(c||a),b=_t,u!==null){const mt=u.views;g!==null&&(t.setRenderTargetFramebuffer(U,g.framebuffer),t.setRenderTarget(U));let vt=!1;mt.length!==S.cameras.length&&(S.cameras.length=0,vt=!0);for(let Xt=0;Xt<mt.length;Xt++){const we=mt[Xt];let _e=null;if(g!==null)_e=g.getViewport(we);else{const F=d.getViewSubImage(f,we);_e=F.viewport,Xt===0&&(t.setRenderTargetTextures(U,F.colorTexture,f.ignoreDepthValues?void 0:F.depthStencilTexture),t.setRenderTarget(U))}let Jt=T[Xt];Jt===void 0&&(Jt=new cn,Jt.layers.enable(Xt),Jt.viewport=new Ce,T[Xt]=Jt),Jt.matrix.fromArray(we.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(we.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(_e.x,_e.y,_e.width,_e.height),Xt===0&&(S.matrix.copy(Jt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),vt===!0&&S.cameras.push(Jt)}const Ut=r.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Xt=d.getDepthInformation(mt[0]);Xt&&Xt.isValid&&Xt.texture&&y.init(t,Xt,r.renderState)}}for(let mt=0;mt<P.length;mt++){const vt=R[mt],Ut=P[mt];vt!==null&&Ut!==void 0&&Ut.update(vt,_t,c||a)}Lt&&Lt(it,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),b=null}const ee=new oh;ee.setAnimationLoop(Wt),this.setAnimationLoop=function(it){Lt=it},this.dispose=function(){}}}const mi=new Tn,mg=new De;function gg(i,t){function e(w,m){w.matrixAutoUpdate===!0&&w.updateMatrix(),m.value.copy(w.matrix)}function n(w,m){m.color.getRGB(w.fogColor.value,nh(i)),m.isFog?(w.fogNear.value=m.near,w.fogFar.value=m.far):m.isFogExp2&&(w.fogDensity.value=m.density)}function r(w,m,U,P,R){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(w,m):m.isMeshToonMaterial?(s(w,m),d(w,m)):m.isMeshPhongMaterial?(s(w,m),u(w,m)):m.isMeshStandardMaterial?(s(w,m),f(w,m),m.isMeshPhysicalMaterial&&g(w,m,R)):m.isMeshMatcapMaterial?(s(w,m),b(w,m)):m.isMeshDepthMaterial?s(w,m):m.isMeshDistanceMaterial?(s(w,m),y(w,m)):m.isMeshNormalMaterial?s(w,m):m.isLineBasicMaterial?(a(w,m),m.isLineDashedMaterial&&o(w,m)):m.isPointsMaterial?l(w,m,U,P):m.isSpriteMaterial?c(w,m):m.isShadowMaterial?(w.color.value.copy(m.color),w.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(w,m){w.opacity.value=m.opacity,m.color&&w.diffuse.value.copy(m.color),m.emissive&&w.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(w.map.value=m.map,e(m.map,w.mapTransform)),m.alphaMap&&(w.alphaMap.value=m.alphaMap,e(m.alphaMap,w.alphaMapTransform)),m.bumpMap&&(w.bumpMap.value=m.bumpMap,e(m.bumpMap,w.bumpMapTransform),w.bumpScale.value=m.bumpScale,m.side===Qe&&(w.bumpScale.value*=-1)),m.normalMap&&(w.normalMap.value=m.normalMap,e(m.normalMap,w.normalMapTransform),w.normalScale.value.copy(m.normalScale),m.side===Qe&&w.normalScale.value.negate()),m.displacementMap&&(w.displacementMap.value=m.displacementMap,e(m.displacementMap,w.displacementMapTransform),w.displacementScale.value=m.displacementScale,w.displacementBias.value=m.displacementBias),m.emissiveMap&&(w.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,w.emissiveMapTransform)),m.specularMap&&(w.specularMap.value=m.specularMap,e(m.specularMap,w.specularMapTransform)),m.alphaTest>0&&(w.alphaTest.value=m.alphaTest);const U=t.get(m),P=U.envMap,R=U.envMapRotation;P&&(w.envMap.value=P,mi.copy(R),mi.x*=-1,mi.y*=-1,mi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),w.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(mi)),w.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,w.reflectivity.value=m.reflectivity,w.ior.value=m.ior,w.refractionRatio.value=m.refractionRatio),m.lightMap&&(w.lightMap.value=m.lightMap,w.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,w.lightMapTransform)),m.aoMap&&(w.aoMap.value=m.aoMap,w.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,w.aoMapTransform))}function a(w,m){w.diffuse.value.copy(m.color),w.opacity.value=m.opacity,m.map&&(w.map.value=m.map,e(m.map,w.mapTransform))}function o(w,m){w.dashSize.value=m.dashSize,w.totalSize.value=m.dashSize+m.gapSize,w.scale.value=m.scale}function l(w,m,U,P){w.diffuse.value.copy(m.color),w.opacity.value=m.opacity,w.size.value=m.size*U,w.scale.value=P*.5,m.map&&(w.map.value=m.map,e(m.map,w.uvTransform)),m.alphaMap&&(w.alphaMap.value=m.alphaMap,e(m.alphaMap,w.alphaMapTransform)),m.alphaTest>0&&(w.alphaTest.value=m.alphaTest)}function c(w,m){w.diffuse.value.copy(m.color),w.opacity.value=m.opacity,w.rotation.value=m.rotation,m.map&&(w.map.value=m.map,e(m.map,w.mapTransform)),m.alphaMap&&(w.alphaMap.value=m.alphaMap,e(m.alphaMap,w.alphaMapTransform)),m.alphaTest>0&&(w.alphaTest.value=m.alphaTest)}function u(w,m){w.specular.value.copy(m.specular),w.shininess.value=Math.max(m.shininess,1e-4)}function d(w,m){m.gradientMap&&(w.gradientMap.value=m.gradientMap)}function f(w,m){w.metalness.value=m.metalness,m.metalnessMap&&(w.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,w.metalnessMapTransform)),w.roughness.value=m.roughness,m.roughnessMap&&(w.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,w.roughnessMapTransform)),m.envMap&&(w.envMapIntensity.value=m.envMapIntensity)}function g(w,m,U){w.ior.value=m.ior,m.sheen>0&&(w.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),w.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(w.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,w.sheenColorMapTransform)),m.sheenRoughnessMap&&(w.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,w.sheenRoughnessMapTransform))),m.clearcoat>0&&(w.clearcoat.value=m.clearcoat,w.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(w.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,w.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(w.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,w.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(w.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,w.clearcoatNormalMapTransform),w.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qe&&w.clearcoatNormalScale.value.negate())),m.dispersion>0&&(w.dispersion.value=m.dispersion),m.iridescence>0&&(w.iridescence.value=m.iridescence,w.iridescenceIOR.value=m.iridescenceIOR,w.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],w.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(w.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,w.iridescenceMapTransform)),m.iridescenceThicknessMap&&(w.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,w.iridescenceThicknessMapTransform))),m.transmission>0&&(w.transmission.value=m.transmission,w.transmissionSamplerMap.value=U.texture,w.transmissionSamplerSize.value.set(U.width,U.height),m.transmissionMap&&(w.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,w.transmissionMapTransform)),w.thickness.value=m.thickness,m.thicknessMap&&(w.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,w.thicknessMapTransform)),w.attenuationDistance.value=m.attenuationDistance,w.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(w.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(w.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,w.anisotropyMapTransform))),w.specularIntensity.value=m.specularIntensity,w.specularColor.value.copy(m.specularColor),m.specularColorMap&&(w.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,w.specularColorMapTransform)),m.specularIntensityMap&&(w.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,w.specularIntensityMapTransform))}function b(w,m){m.matcap&&(w.matcap.value=m.matcap)}function y(w,m){const U=t.get(m).light;w.referencePosition.value.setFromMatrixPosition(U.matrixWorld),w.nearDistance.value=U.shadow.camera.near,w.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function wg(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(U,P){const R=P.program;n.uniformBlockBinding(U,R)}function c(U,P){let R=r[U.id];R===void 0&&(b(U),R=u(U),r[U.id]=R,U.addEventListener("dispose",w));const X=P.program;n.updateUBOMapping(U,X);const O=t.render.frame;s[U.id]!==O&&(f(U),s[U.id]=O)}function u(U){const P=d();U.__bindingPointIndex=P;const R=i.createBuffer(),X=U.__size,O=U.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,X,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,R),R}function d(){for(let U=0;U<o;U++)if(a.indexOf(U)===-1)return a.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(U){const P=r[U.id],R=U.uniforms,X=U.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let O=0,z=R.length;O<z;O++){const q=Array.isArray(R[O])?R[O]:[R[O]];for(let T=0,S=q.length;T<S;T++){const N=q[T];if(g(N,O,T,X)===!0){const tt=N.__offset,$=Array.isArray(N.value)?N.value:[N.value];let nt=0;for(let dt=0;dt<$.length;dt++){const et=$[dt],ft=y(et);typeof et=="number"||typeof et=="boolean"?(N.__data[0]=et,i.bufferSubData(i.UNIFORM_BUFFER,tt+nt,N.__data)):et.isMatrix3?(N.__data[0]=et.elements[0],N.__data[1]=et.elements[1],N.__data[2]=et.elements[2],N.__data[3]=0,N.__data[4]=et.elements[3],N.__data[5]=et.elements[4],N.__data[6]=et.elements[5],N.__data[7]=0,N.__data[8]=et.elements[6],N.__data[9]=et.elements[7],N.__data[10]=et.elements[8],N.__data[11]=0):(et.toArray(N.__data,nt),nt+=ft.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,tt,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(U,P,R,X){const O=U.value,z=P+"_"+R;if(X[z]===void 0)return typeof O=="number"||typeof O=="boolean"?X[z]=O:X[z]=O.clone(),!0;{const q=X[z];if(typeof O=="number"||typeof O=="boolean"){if(q!==O)return X[z]=O,!0}else if(q.equals(O)===!1)return q.copy(O),!0}return!1}function b(U){const P=U.uniforms;let R=0;const X=16;for(let z=0,q=P.length;z<q;z++){const T=Array.isArray(P[z])?P[z]:[P[z]];for(let S=0,N=T.length;S<N;S++){const tt=T[S],$=Array.isArray(tt.value)?tt.value:[tt.value];for(let nt=0,dt=$.length;nt<dt;nt++){const et=$[nt],ft=y(et),Q=R%X,wt=Q%ft.boundary,bt=Q+wt;R+=wt,bt!==0&&X-bt<ft.storage&&(R+=X-bt),tt.__data=new Float32Array(ft.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=R,R+=ft.storage}}}const O=R%X;return O>0&&(R+=X-O),U.__size=R,U.__cache={},this}function y(U){const P={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(P.boundary=4,P.storage=4):U.isVector2?(P.boundary=8,P.storage=8):U.isVector3||U.isColor?(P.boundary=16,P.storage=12):U.isVector4?(P.boundary=16,P.storage=16):U.isMatrix3?(P.boundary=48,P.storage=48):U.isMatrix4?(P.boundary=64,P.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),P}function w(U){const P=U.target;P.removeEventListener("dispose",w);const R=a.indexOf(P.__bindingPointIndex);a.splice(R,1),i.deleteBuffer(r[P.id]),delete r[P.id],delete s[P.id]}function m(){for(const U in r)i.deleteBuffer(r[U]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}class vg{constructor(t={}){const{canvas:e=Xu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const b=new Uint32Array(4),y=new Int32Array(4);let w=null,m=null;const U=[],P=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=ri,this.toneMappingExposure=1;const R=this;let X=!1,O=0,z=0,q=null,T=-1,S=null;const N=new Ce,tt=new Ce;let $=null;const nt=new pe(0);let dt=0,et=e.width,ft=e.height,Q=1,wt=null,bt=null;const Lt=new Ce(0,0,et,ft),Wt=new Ce(0,0,et,ft);let ee=!1;const it=new sh;let _t=!1,mt=!1;this.transmissionResolutionScale=1;const vt=new De,Ut=new De,ie=new K,Xt=new Ce,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function Jt(){return q===null?Q:1}let F=n;function Ye(_,M){return e.getContext(_,M)}try{const _={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Po}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),F===null){const M="webgl2";if(F=Ye(M,_),F===null)throw Ye(M)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let re,se,zt,ve,Ot,A,v,Y,ot,ht,rt,Ft,St,Et,oe,gt,Rt,It,Nt,Tt,Yt,Ht,jt,H;function j(){re=new C_(F),re.init(),Ht=new ug(F,re),se=new y_(F,re,t,Ht),zt=new cg(F,re),se.reverseDepthBuffer&&f&&zt.buffers.depth.setReversed(!0),ve=new D_(F),Ot=new Km,A=new hg(F,re,zt,Ot,se,Ht,ve),v=new E_(R),Y=new A_(R),ot=new Bd(F),jt=new x_(F,ot),ht=new P_(F,ot,ve,jt),rt=new U_(F,ht,ot,ve),Nt=new L_(F,se,A),gt=new M_(Ot),Ft=new Zm(R,v,Y,re,se,jt,gt),St=new gg(R,Ot),Et=new Jm,oe=new rg(re),It=new b_(R,v,Y,zt,rt,g,l),Rt=new og(R,rt,se),H=new wg(F,ve,se,zt),Tt=new S_(F,re,ve),Yt=new I_(F,re,ve),ve.programs=Ft.programs,R.capabilities=se,R.extensions=re,R.properties=Ot,R.renderLists=Et,R.shadowMap=Rt,R.state=zt,R.info=ve}j();const J=new _g(R,F);this.xr=J,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const _=re.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=re.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(_){_!==void 0&&(Q=_,this.setSize(et,ft,!1))},this.getSize=function(_){return _.set(et,ft)},this.setSize=function(_,M,E=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=_,ft=M,e.width=Math.floor(_*Q),e.height=Math.floor(M*Q),E===!0&&(e.style.width=_+"px",e.style.height=M+"px"),this.setViewport(0,0,_,M)},this.getDrawingBufferSize=function(_){return _.set(et*Q,ft*Q).floor()},this.setDrawingBufferSize=function(_,M,E){et=_,ft=M,Q=E,e.width=Math.floor(_*E),e.height=Math.floor(M*E),this.setViewport(0,0,_,M)},this.getCurrentViewport=function(_){return _.copy(N)},this.getViewport=function(_){return _.copy(Lt)},this.setViewport=function(_,M,E,D){_.isVector4?Lt.set(_.x,_.y,_.z,_.w):Lt.set(_,M,E,D),zt.viewport(N.copy(Lt).multiplyScalar(Q).round())},this.getScissor=function(_){return _.copy(Wt)},this.setScissor=function(_,M,E,D){_.isVector4?Wt.set(_.x,_.y,_.z,_.w):Wt.set(_,M,E,D),zt.scissor(tt.copy(Wt).multiplyScalar(Q).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(_){zt.setScissorTest(ee=_)},this.setOpaqueSort=function(_){wt=_},this.setTransparentSort=function(_){bt=_},this.getClearColor=function(_){return _.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(_=!0,M=!0,E=!0){let D=0;if(_){let C=!1;if(q!==null){const B=q.texture.format;C=B===Oo||B===No||B===Fo}if(C){const B=q.texture.type,V=B===Wn||B===Mi||B===Mr||B===nr||B===Do||B===Lo,W=It.getClearColor(),Z=It.getClearAlpha(),st=W.r,at=W.g,ct=W.b;V?(b[0]=st,b[1]=at,b[2]=ct,b[3]=Z,F.clearBufferuiv(F.COLOR,0,b)):(y[0]=st,y[1]=at,y[2]=ct,y[3]=Z,F.clearBufferiv(F.COLOR,0,y))}else D|=F.COLOR_BUFFER_BIT}M&&(D|=F.DEPTH_BUFFER_BIT),E&&(D|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),It.dispose(),Et.dispose(),oe.dispose(),Ot.dispose(),v.dispose(),Y.dispose(),rt.dispose(),jt.dispose(),H.dispose(),Ft.dispose(),J.dispose(),J.removeEventListener("sessionstart",Hr),J.removeEventListener("sessionend",kr),Rn.stop()};function lt(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const _=ve.autoReset,M=Rt.enabled,E=Rt.autoUpdate,D=Rt.needsUpdate,C=Rt.type;j(),ve.autoReset=_,Rt.enabled=M,Rt.autoUpdate=E,Rt.needsUpdate=D,Rt.type=C}function yt(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Zt(_){const M=_.target;M.removeEventListener("dispose",Zt),Me(M)}function Me(_){ze(_),Ot.remove(_)}function ze(_){const M=Ot.get(_).programs;M!==void 0&&(M.forEach(function(E){Ft.releaseProgram(E)}),_.isShaderMaterial&&Ft.releaseShaderCache(_))}this.renderBufferDirect=function(_,M,E,D,C,B){M===null&&(M=we);const V=C.isMesh&&C.matrixWorld.determinant()<0,W=Zs(_,M,E,D,C);zt.setMaterial(D,V);let Z=E.index,st=1;if(D.wireframe===!0){if(Z=ht.getWireframeAttribute(E),Z===void 0)return;st=2}const at=E.drawRange,ct=E.attributes.position;let ut=at.start*st,pt=(at.start+at.count)*st;B!==null&&(ut=Math.max(ut,B.start*st),pt=Math.min(pt,(B.start+B.count)*st)),Z!==null?(ut=Math.max(ut,0),pt=Math.min(pt,Z.count)):ct!=null&&(ut=Math.max(ut,0),pt=Math.min(pt,ct.count));const Ct=pt-ut;if(Ct<0||Ct===1/0)return;jt.setup(C,D,W,E,Z);let kt,Bt=Tt;if(Z!==null&&(kt=ot.get(Z),Bt=Yt,Bt.setIndex(kt)),C.isMesh)D.wireframe===!0?(zt.setLineWidth(D.wireframeLinewidth*Jt()),Bt.setMode(F.LINES)):Bt.setMode(F.TRIANGLES);else if(C.isLine){let At=D.linewidth;At===void 0&&(At=1),zt.setLineWidth(At*Jt()),C.isLineSegments?Bt.setMode(F.LINES):C.isLineLoop?Bt.setMode(F.LINE_LOOP):Bt.setMode(F.LINE_STRIP)}else C.isPoints?Bt.setMode(F.POINTS):C.isSprite&&Bt.setMode(F.TRIANGLES);if(C.isBatchedMesh)if(C._multiDrawInstances!==null)Bt.renderMultiDrawInstances(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount,C._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))Bt.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{const At=C._multiDrawStarts,Kt=C._multiDrawCounts,Pt=C._multiDrawCount,fe=Z?ot.get(Z).bytesPerElement:1,Ue=Ot.get(D).currentProgram.getUniforms();for(let he=0;he<Pt;he++)Ue.setValue(F,"_gl_DrawID",he),Bt.render(At[he]/fe,Kt[he])}else if(C.isInstancedMesh)Bt.renderInstances(ut,Ct,C.count);else if(E.isInstancedBufferGeometry){const At=E._maxInstanceCount!==void 0?E._maxInstanceCount:1/0,Kt=Math.min(E.instanceCount,At);Bt.renderInstances(ut,Ct,Kt)}else Bt.render(ut,Ct)};function de(_,M,E){_.transparent===!0&&_.side===On&&_.forceSinglePass===!1?(_.side=Qe,_.needsUpdate=!0,Pi(_,M,E),_.side=si,_.needsUpdate=!0,Pi(_,M,E),_.side=On):Pi(_,M,E)}this.compile=function(_,M,E=null){E===null&&(E=_),m=oe.get(E),m.init(M),P.push(m),E.traverseVisible(function(C){C.isLight&&C.layers.test(M.layers)&&(m.pushLight(C),C.castShadow&&m.pushShadow(C))}),_!==E&&_.traverseVisible(function(C){C.isLight&&C.layers.test(M.layers)&&(m.pushLight(C),C.castShadow&&m.pushShadow(C))}),m.setupLights();const D=new Set;return _.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;const B=C.material;if(B)if(Array.isArray(B))for(let V=0;V<B.length;V++){const W=B[V];de(W,E,C),D.add(W)}else de(B,E,C),D.add(B)}),P.pop(),m=null,D},this.compileAsync=function(_,M,E=null){const D=this.compile(_,M,E);return new Promise(C=>{function B(){if(D.forEach(function(V){Ot.get(V).currentProgram.isReady()&&D.delete(V)}),D.size===0){C(_);return}setTimeout(B,10)}re.get("KHR_parallel_shader_compile")!==null?B():setTimeout(B,10)})};let tn=null;function fn(_){tn&&tn(_)}function Hr(){Rn.stop()}function kr(){Rn.start()}const Rn=new oh;Rn.setAnimationLoop(fn),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(_){tn=_,J.setAnimationLoop(_),_===null?Rn.stop():Rn.start()},J.addEventListener("sessionstart",Hr),J.addEventListener("sessionend",kr),this.render=function(_,M){if(M!==void 0&&M.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),M.parent===null&&M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(M),M=J.getCamera()),_.isScene===!0&&_.onBeforeRender(R,_,M,q),m=oe.get(_,P.length),m.init(M),P.push(m),Ut.multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse),it.setFromProjectionMatrix(Ut),mt=this.localClippingEnabled,_t=gt.init(this.clippingPlanes,mt),w=Et.get(_,U.length),w.init(),U.push(w),J.enabled===!0&&J.isPresenting===!0){const B=R.xr.getDepthSensingMesh();B!==null&&hr(B,M,-1/0,R.sortObjects)}hr(_,M,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(wt,bt),_e=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,_e&&It.addToRenderList(w,_),this.info.render.frame++,_t===!0&&gt.beginShadows();const E=m.state.shadowsArray;Rt.render(E,_,M),_t===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const D=w.opaque,C=w.transmissive;if(m.setupLights(),M.isArrayCamera){const B=M.cameras;if(C.length>0)for(let V=0,W=B.length;V<W;V++){const Z=B[V];Gr(D,C,_,Z)}_e&&It.render(_);for(let V=0,W=B.length;V<W;V++){const Z=B[V];ur(w,_,Z,Z.viewport)}}else C.length>0&&Gr(D,C,_,M),_e&&It.render(_),ur(w,_,M);q!==null&&z===0&&(A.updateMultisampleRenderTarget(q),A.updateRenderTargetMipmap(q)),_.isScene===!0&&_.onAfterRender(R,_,M),jt.resetDefaultState(),T=-1,S=null,P.pop(),P.length>0?(m=P[P.length-1],_t===!0&&gt.setGlobalState(R.clippingPlanes,m.state.camera)):m=null,U.pop(),U.length>0?w=U[U.length-1]:w=null};function hr(_,M,E,D){if(_.visible===!1)return;if(_.layers.test(M.layers)){if(_.isGroup)E=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(M);else if(_.isLight)m.pushLight(_),_.castShadow&&m.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||it.intersectsSprite(_)){D&&Xt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ut);const V=rt.update(_),W=_.material;W.visible&&w.push(_,V,W,E,Xt.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||it.intersectsObject(_))){const V=rt.update(_),W=_.material;if(D&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Xt.copy(_.boundingSphere.center)):(V.boundingSphere===null&&V.computeBoundingSphere(),Xt.copy(V.boundingSphere.center)),Xt.applyMatrix4(_.matrixWorld).applyMatrix4(Ut)),Array.isArray(W)){const Z=V.groups;for(let st=0,at=Z.length;st<at;st++){const ct=Z[st],ut=W[ct.materialIndex];ut&&ut.visible&&w.push(_,V,ut,E,Xt.z,ct)}}else W.visible&&w.push(_,V,W,E,Xt.z,null)}}const B=_.children;for(let V=0,W=B.length;V<W;V++)hr(B[V],M,E,D)}function ur(_,M,E,D){const C=_.opaque,B=_.transmissive,V=_.transparent;m.setupLightsView(E),_t===!0&&gt.setGlobalState(R.clippingPlanes,E),D&&zt.viewport(N.copy(D)),C.length>0&&Ci(C,M,E),B.length>0&&Ci(B,M,E),V.length>0&&Ci(V,M,E),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function Gr(_,M,E,D){if((E.isScene===!0?E.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[D.id]===void 0&&(m.state.transmissionRenderTarget[D.id]=new Ei(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?kn:Wn,minFilter:ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const B=m.state.transmissionRenderTarget[D.id],V=D.viewport||N;B.setSize(V.z*R.transmissionResolutionScale,V.w*R.transmissionResolutionScale);const W=R.getRenderTarget();R.setRenderTarget(B),R.getClearColor(nt),dt=R.getClearAlpha(),dt<1&&R.setClearColor(16777215,.5),R.clear(),_e&&It.render(E);const Z=R.toneMapping;R.toneMapping=ri;const st=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),m.setupLightsView(D),_t===!0&&gt.setGlobalState(R.clippingPlanes,D),Ci(_,E,D),A.updateMultisampleRenderTarget(B),A.updateRenderTargetMipmap(B),re.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let ct=0,ut=M.length;ct<ut;ct++){const pt=M[ct],Ct=pt.object,kt=pt.geometry,Bt=pt.material,At=pt.group;if(Bt.side===On&&Ct.layers.test(D.layers)){const Kt=Bt.side;Bt.side=Qe,Bt.needsUpdate=!0,Vr(Ct,E,D,kt,Bt,At),Bt.side=Kt,Bt.needsUpdate=!0,at=!0}}at===!0&&(A.updateMultisampleRenderTarget(B),A.updateRenderTargetMipmap(B))}R.setRenderTarget(W),R.setClearColor(nt,dt),st!==void 0&&(D.viewport=st),R.toneMapping=Z}function Ci(_,M,E){const D=M.isScene===!0?M.overrideMaterial:null;for(let C=0,B=_.length;C<B;C++){const V=_[C],W=V.object,Z=V.geometry,st=D===null?V.material:D,at=V.group;W.layers.test(E.layers)&&Vr(W,M,E,Z,st,at)}}function Vr(_,M,E,D,C,B){_.onBeforeRender(R,M,E,D,C,B),_.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),C.onBeforeRender(R,M,E,D,_,B),C.transparent===!0&&C.side===On&&C.forceSinglePass===!1?(C.side=Qe,C.needsUpdate=!0,R.renderBufferDirect(E,M,D,C,_,B),C.side=si,C.needsUpdate=!0,R.renderBufferDirect(E,M,D,C,_,B),C.side=On):R.renderBufferDirect(E,M,D,C,_,B),_.onAfterRender(R,M,E,D,C,B)}function Pi(_,M,E){M.isScene!==!0&&(M=we);const D=Ot.get(_),C=m.state.lights,B=m.state.shadowsArray,V=C.state.version,W=Ft.getParameters(_,C.state,B,M,E),Z=Ft.getProgramCacheKey(W);let st=D.programs;D.environment=_.isMeshStandardMaterial?M.environment:null,D.fog=M.fog,D.envMap=(_.isMeshStandardMaterial?Y:v).get(_.envMap||D.environment),D.envMapRotation=D.environment!==null&&_.envMap===null?M.environmentRotation:_.envMapRotation,st===void 0&&(_.addEventListener("dispose",Zt),st=new Map,D.programs=st);let at=st.get(Z);if(at!==void 0){if(D.currentProgram===at&&D.lightsStateVersion===V)return fr(_,W),at}else W.uniforms=Ft.getUniforms(_),_.onBeforeCompile(W,R),at=Ft.acquireProgram(W,Z),st.set(Z,at),D.uniforms=W.uniforms;const ct=D.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(ct.clippingPlanes=gt.uniform),fr(_,W),D.needsLights=jn(_),D.lightsStateVersion=V,D.needsLights&&(ct.ambientLightColor.value=C.state.ambient,ct.lightProbe.value=C.state.probe,ct.directionalLights.value=C.state.directional,ct.directionalLightShadows.value=C.state.directionalShadow,ct.spotLights.value=C.state.spot,ct.spotLightShadows.value=C.state.spotShadow,ct.rectAreaLights.value=C.state.rectArea,ct.ltc_1.value=C.state.rectAreaLTC1,ct.ltc_2.value=C.state.rectAreaLTC2,ct.pointLights.value=C.state.point,ct.pointLightShadows.value=C.state.pointShadow,ct.hemisphereLights.value=C.state.hemi,ct.directionalShadowMap.value=C.state.directionalShadowMap,ct.directionalShadowMatrix.value=C.state.directionalShadowMatrix,ct.spotShadowMap.value=C.state.spotShadowMap,ct.spotLightMatrix.value=C.state.spotLightMatrix,ct.spotLightMap.value=C.state.spotLightMap,ct.pointShadowMap.value=C.state.pointShadowMap,ct.pointShadowMatrix.value=C.state.pointShadowMatrix),D.currentProgram=at,D.uniformsList=null,at}function dr(_){if(_.uniformsList===null){const M=_.currentProgram.getUniforms();_.uniformsList=Ms.seqWithValue(M.seq,_.uniforms)}return _.uniformsList}function fr(_,M){const E=Ot.get(_);E.outputColorSpace=M.outputColorSpace,E.batching=M.batching,E.batchingColor=M.batchingColor,E.instancing=M.instancing,E.instancingColor=M.instancingColor,E.instancingMorph=M.instancingMorph,E.skinning=M.skinning,E.morphTargets=M.morphTargets,E.morphNormals=M.morphNormals,E.morphColors=M.morphColors,E.morphTargetsCount=M.morphTargetsCount,E.numClippingPlanes=M.numClippingPlanes,E.numIntersection=M.numClipIntersection,E.vertexAlphas=M.vertexAlphas,E.vertexTangents=M.vertexTangents,E.toneMapping=M.toneMapping}function Zs(_,M,E,D,C){M.isScene!==!0&&(M=we),A.resetTextureUnits();const B=M.fog,V=D.isMeshStandardMaterial?M.environment:null,W=q===null?R.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ai,Z=(D.isMeshStandardMaterial?Y:v).get(D.envMap||V),st=D.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,at=!!E.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),ct=!!E.morphAttributes.position,ut=!!E.morphAttributes.normal,pt=!!E.morphAttributes.color;let Ct=ri;D.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ct=R.toneMapping);const kt=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,Bt=kt!==void 0?kt.length:0,At=Ot.get(D),Kt=m.state.lights;if(_t===!0&&(mt===!0||_!==S)){const xe=_===S&&D.id===T;gt.setState(D,_,xe)}let Pt=!1;D.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Kt.state.version||At.outputColorSpace!==W||C.isBatchedMesh&&At.batching===!1||!C.isBatchedMesh&&At.batching===!0||C.isBatchedMesh&&At.batchingColor===!0&&C.colorTexture===null||C.isBatchedMesh&&At.batchingColor===!1&&C.colorTexture!==null||C.isInstancedMesh&&At.instancing===!1||!C.isInstancedMesh&&At.instancing===!0||C.isSkinnedMesh&&At.skinning===!1||!C.isSkinnedMesh&&At.skinning===!0||C.isInstancedMesh&&At.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&At.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&At.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&At.instancingMorph===!1&&C.morphTexture!==null||At.envMap!==Z||D.fog===!0&&At.fog!==B||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==gt.numPlanes||At.numIntersection!==gt.numIntersection)||At.vertexAlphas!==st||At.vertexTangents!==at||At.morphTargets!==ct||At.morphNormals!==ut||At.morphColors!==pt||At.toneMapping!==Ct||At.morphTargetsCount!==Bt)&&(Pt=!0):(Pt=!0,At.__version=D.version);let fe=At.currentProgram;Pt===!0&&(fe=Pi(D,M,C));let Ue=!1,he=!1,le=!1;const Gt=fe.getUniforms(),Re=At.uniforms;if(zt.useProgram(fe.program)&&(Ue=!0,he=!0,le=!0),D.id!==T&&(T=D.id,he=!0),Ue||S!==_){zt.buffers.depth.getReversed()?(vt.copy(_.projectionMatrix),Yu(vt),ju(vt),Gt.setValue(F,"projectionMatrix",vt)):Gt.setValue(F,"projectionMatrix",_.projectionMatrix),Gt.setValue(F,"viewMatrix",_.matrixWorldInverse);const Fe=Gt.map.cameraPosition;Fe!==void 0&&Fe.setValue(F,ie.setFromMatrixPosition(_.matrixWorld)),se.logarithmicDepthBuffer&&Gt.setValue(F,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Gt.setValue(F,"isOrthographic",_.isOrthographicCamera===!0),S!==_&&(S=_,he=!0,le=!0)}if(C.isSkinnedMesh){Gt.setOptional(F,C,"bindMatrix"),Gt.setOptional(F,C,"bindMatrixInverse");const xe=C.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),Gt.setValue(F,"boneTexture",xe.boneTexture,A))}C.isBatchedMesh&&(Gt.setOptional(F,C,"batchingTexture"),Gt.setValue(F,"batchingTexture",C._matricesTexture,A),Gt.setOptional(F,C,"batchingIdTexture"),Gt.setValue(F,"batchingIdTexture",C._indirectTexture,A),Gt.setOptional(F,C,"batchingColorTexture"),C._colorsTexture!==null&&Gt.setValue(F,"batchingColorTexture",C._colorsTexture,A));const He=E.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&Nt.update(C,E,fe),(he||At.receiveShadow!==C.receiveShadow)&&(At.receiveShadow=C.receiveShadow,Gt.setValue(F,"receiveShadow",C.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Re.envMap.value=Z,Re.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1),D.isMeshStandardMaterial&&D.envMap===null&&M.environment!==null&&(Re.envMapIntensity.value=M.environmentIntensity),he&&(Gt.setValue(F,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&An(Re,le),B&&D.fog===!0&&St.refreshFogUniforms(Re,B),St.refreshMaterialUniforms(Re,D,Q,ft,m.state.transmissionRenderTarget[_.id]),Ms.upload(F,dr(At),Re,A)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Ms.upload(F,dr(At),Re,A),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Gt.setValue(F,"center",C.center),Gt.setValue(F,"modelViewMatrix",C.modelViewMatrix),Gt.setValue(F,"normalMatrix",C.normalMatrix),Gt.setValue(F,"modelMatrix",C.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const xe=D.uniformsGroups;for(let Fe=0,Ks=xe.length;Fe<Ks;Fe++){const hi=xe[Fe];H.update(hi,fe),H.bind(hi,fe)}}return fe}function An(_,M){_.ambientLightColor.needsUpdate=M,_.lightProbe.needsUpdate=M,_.directionalLights.needsUpdate=M,_.directionalLightShadows.needsUpdate=M,_.pointLights.needsUpdate=M,_.pointLightShadows.needsUpdate=M,_.spotLights.needsUpdate=M,_.spotLightShadows.needsUpdate=M,_.rectAreaLights.needsUpdate=M,_.hemisphereLights.needsUpdate=M}function jn(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(_,M,E){Ot.get(_.texture).__webglTexture=M,Ot.get(_.depthTexture).__webglTexture=E;const D=Ot.get(_);D.__hasExternalTextures=!0,D.__autoAllocateDepthBuffer=E===void 0,D.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,M){const E=Ot.get(_);E.__webglFramebuffer=M,E.__useDefaultFramebuffer=M===void 0};const p=F.createFramebuffer();this.setRenderTarget=function(_,M=0,E=0){q=_,O=M,z=E;let D=!0,C=null,B=!1,V=!1;if(_){const Z=Ot.get(_);if(Z.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(F.FRAMEBUFFER,null),D=!1;else if(Z.__webglFramebuffer===void 0)A.setupRenderTarget(_);else if(Z.__hasExternalTextures)A.rebindTextures(_,Ot.get(_.texture).__webglTexture,Ot.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const ct=_.depthTexture;if(Z.__boundDepthTexture!==ct){if(ct!==null&&Ot.has(ct)&&(_.width!==ct.image.width||_.height!==ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(_)}}const st=_.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(V=!0);const at=Ot.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(at[M])?C=at[M][E]:C=at[M],B=!0):_.samples>0&&A.useMultisampledRTT(_)===!1?C=Ot.get(_).__webglMultisampledFramebuffer:Array.isArray(at)?C=at[E]:C=at,N.copy(_.viewport),tt.copy(_.scissor),$=_.scissorTest}else N.copy(Lt).multiplyScalar(Q).floor(),tt.copy(Wt).multiplyScalar(Q).floor(),$=ee;if(E!==0&&(C=p),zt.bindFramebuffer(F.FRAMEBUFFER,C)&&D&&zt.drawBuffers(_,C),zt.viewport(N),zt.scissor(tt),zt.setScissorTest($),B){const Z=Ot.get(_.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+M,Z.__webglTexture,E)}else if(V){const Z=Ot.get(_.texture),st=M;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.__webglTexture,E,st)}else if(_!==null&&E!==0){const Z=Ot.get(_.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Z.__webglTexture,E)}T=-1},this.readRenderTargetPixels=function(_,M,E,D,C,B,V){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let W=Ot.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&V!==void 0&&(W=W[V]),W){zt.bindFramebuffer(F.FRAMEBUFFER,W);try{const Z=_.texture,st=Z.format,at=Z.type;if(!se.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}M>=0&&M<=_.width-D&&E>=0&&E<=_.height-C&&F.readPixels(M,E,D,C,Ht.convert(st),Ht.convert(at),B)}finally{const Z=q!==null?Ot.get(q).__webglFramebuffer:null;zt.bindFramebuffer(F.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(_,M,E,D,C,B,V){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let W=Ot.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&V!==void 0&&(W=W[V]),W){const Z=_.texture,st=Z.format,at=Z.type;if(!se.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(M>=0&&M<=_.width-D&&E>=0&&E<=_.height-C){zt.bindFramebuffer(F.FRAMEBUFFER,W);const ct=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ct),F.bufferData(F.PIXEL_PACK_BUFFER,B.byteLength,F.STREAM_READ),F.readPixels(M,E,D,C,Ht.convert(st),Ht.convert(at),0);const ut=q!==null?Ot.get(q).__webglFramebuffer:null;zt.bindFramebuffer(F.FRAMEBUFFER,ut);const pt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await qu(F,pt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ct),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,B),F.deleteBuffer(ct),F.deleteSync(pt),B}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,M=null,E=0){_.isTexture!==!0&&(Xi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),M=arguments[0]||null,_=arguments[1]);const D=Math.pow(2,-E),C=Math.floor(_.image.width*D),B=Math.floor(_.image.height*D),V=M!==null?M.x:0,W=M!==null?M.y:0;A.setTexture2D(_,0),F.copyTexSubImage2D(F.TEXTURE_2D,E,0,0,V,W,C,B),zt.unbindTexture()};const x=F.createFramebuffer(),I=F.createFramebuffer();this.copyTextureToTexture=function(_,M,E=null,D=null,C=0,B=null){_.isTexture!==!0&&(Xi("WebGLRenderer: copyTextureToTexture function signature has changed."),D=arguments[0]||null,_=arguments[1],M=arguments[2],B=arguments[3]||0,E=null),B===null&&(C!==0?(Xi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),B=C,C=0):B=0);let V,W,Z,st,at,ct,ut,pt,Ct;const kt=_.isCompressedTexture?_.mipmaps[B]:_.image;if(E!==null)V=E.max.x-E.min.x,W=E.max.y-E.min.y,Z=E.isBox3?E.max.z-E.min.z:1,st=E.min.x,at=E.min.y,ct=E.isBox3?E.min.z:0;else{const He=Math.pow(2,-C);V=Math.floor(kt.width*He),W=Math.floor(kt.height*He),_.isDataArrayTexture?Z=kt.depth:_.isData3DTexture?Z=Math.floor(kt.depth*He):Z=1,st=0,at=0,ct=0}D!==null?(ut=D.x,pt=D.y,Ct=D.z):(ut=0,pt=0,Ct=0);const Bt=Ht.convert(M.format),At=Ht.convert(M.type);let Kt;M.isData3DTexture?(A.setTexture3D(M,0),Kt=F.TEXTURE_3D):M.isDataArrayTexture||M.isCompressedArrayTexture?(A.setTexture2DArray(M,0),Kt=F.TEXTURE_2D_ARRAY):(A.setTexture2D(M,0),Kt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,M.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,M.unpackAlignment);const Pt=F.getParameter(F.UNPACK_ROW_LENGTH),fe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ue=F.getParameter(F.UNPACK_SKIP_PIXELS),he=F.getParameter(F.UNPACK_SKIP_ROWS),le=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,kt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,kt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,st),F.pixelStorei(F.UNPACK_SKIP_ROWS,at),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ct);const Gt=_.isDataArrayTexture||_.isData3DTexture,Re=M.isDataArrayTexture||M.isData3DTexture;if(_.isDepthTexture){const He=Ot.get(_),xe=Ot.get(M),Fe=Ot.get(He.__renderTarget),Ks=Ot.get(xe.__renderTarget);zt.bindFramebuffer(F.READ_FRAMEBUFFER,Fe.__webglFramebuffer),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ks.__webglFramebuffer);for(let hi=0;hi<Z;hi++)Gt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.get(_).__webglTexture,C,ct+hi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.get(M).__webglTexture,B,Ct+hi)),F.blitFramebuffer(st,at,V,W,ut,pt,V,W,F.DEPTH_BUFFER_BIT,F.NEAREST);zt.bindFramebuffer(F.READ_FRAMEBUFFER,null),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(C!==0||_.isRenderTargetTexture||Ot.has(_)){const He=Ot.get(_),xe=Ot.get(M);zt.bindFramebuffer(F.READ_FRAMEBUFFER,x),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,I);for(let Fe=0;Fe<Z;Fe++)Gt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.__webglTexture,C,ct+Fe):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,He.__webglTexture,C),Re?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.__webglTexture,B,Ct+Fe):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xe.__webglTexture,B),C!==0?F.blitFramebuffer(st,at,V,W,ut,pt,V,W,F.COLOR_BUFFER_BIT,F.NEAREST):Re?F.copyTexSubImage3D(Kt,B,ut,pt,Ct+Fe,st,at,V,W):F.copyTexSubImage2D(Kt,B,ut,pt,st,at,V,W);zt.bindFramebuffer(F.READ_FRAMEBUFFER,null),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Re?_.isDataTexture||_.isData3DTexture?F.texSubImage3D(Kt,B,ut,pt,Ct,V,W,Z,Bt,At,kt.data):M.isCompressedArrayTexture?F.compressedTexSubImage3D(Kt,B,ut,pt,Ct,V,W,Z,Bt,kt.data):F.texSubImage3D(Kt,B,ut,pt,Ct,V,W,Z,Bt,At,kt):_.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,B,ut,pt,V,W,Bt,At,kt.data):_.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,B,ut,pt,kt.width,kt.height,Bt,kt.data):F.texSubImage2D(F.TEXTURE_2D,B,ut,pt,V,W,Bt,At,kt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Pt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ue),F.pixelStorei(F.UNPACK_SKIP_ROWS,he),F.pixelStorei(F.UNPACK_SKIP_IMAGES,le),B===0&&M.generateMipmaps&&F.generateMipmap(Kt),zt.unbindTexture()},this.copyTextureToTexture3D=function(_,M,E=null,D=null,C=0){return _.isTexture!==!0&&(Xi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),E=arguments[0]||null,D=arguments[1]||null,_=arguments[2],M=arguments[3],C=arguments[4]||0),Xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,M,E,D,C)},this.initRenderTarget=function(_){Ot.get(_).__webglFramebuffer===void 0&&A.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?A.setTextureCube(_,0):_.isData3DTexture?A.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?A.setTexture2DArray(_,0):A.setTexture2D(_,0),zt.unbindTexture()},this.resetState=function(){O=0,z=0,q=null,zt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}let h;const ce=new Array(128).fill(void 0);ce.push(void 0,null,!0,!1);let Sr=ce.length;function Ji(i){Sr===ce.length&&ce.push(ce.length+1);const t=Sr;return Sr=ce[t],ce[t]=i,t}function bg(i){return ce[i]}function xg(i){i<132||(ce[i]=Sr,Sr=i)}function Cs(i){const t=bg(i);return xg(i),t}function Dt(i){return i==null}let ds=null;function Ps(){return(ds===null||ds.byteLength===0)&&(ds=new Float64Array(h.memory.buffer)),ds}let fs=null;function qt(){return(fs===null||fs.byteLength===0)&&(fs=new Int32Array(h.memory.buffer)),fs}const Sg=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let dh=new Sg("utf-8",{ignoreBOM:!0,fatal:!0});dh.decode();let ps=null;function yg(){return(ps===null||ps.byteLength===0)&&(ps=new Uint8Array(h.memory.buffer)),ps}function Mg(i,t){return i=i>>>0,dh.decode(yg().subarray(i,i+t))}function Eg(){let i,t;try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.version(r);var e=qt()[r/4+0],n=qt()[r/4+1];return i=e,t=n,Mg(e,n)}finally{h.__wbindgen_add_to_stack_pointer(16),h.__wbindgen_free(i,t,1)}}function L(i,t){if(!(i instanceof t))throw new Error(`expected instance of ${t.name}`);return i.ptr}let _s=null;function Se(){return(_s===null||_s.byteLength===0)&&(_s=new Float32Array(h.memory.buffer)),_s}let be=128;function Ee(i){if(be==1)throw new Error("out of js stack");return ce[--be]=i,be}function lc(i,t){return i=i>>>0,Se().subarray(i/4,i/4+t)}let ms=null;function fh(){return(ms===null||ms.byteLength===0)&&(ms=new Uint32Array(h.memory.buffer)),ms}function Tg(i,t){return i=i>>>0,fh().subarray(i/4,i/4+t)}let rn=0;function gi(i,t){const e=t(i.length*4,4)>>>0;return Se().set(i,e/4),rn=i.length,e}function gs(i,t){const e=t(i.length*4,4)>>>0;return fh().set(i,e/4),rn=i.length,e}const Ve=Object.freeze({Ball:0,0:"Ball",Cuboid:1,1:"Cuboid",Capsule:2,2:"Capsule",Segment:3,3:"Segment",Polyline:4,4:"Polyline",Triangle:5,5:"Triangle",TriMesh:6,6:"TriMesh",HeightField:7,7:"HeightField",Compound:8,8:"Compound",ConvexPolyhedron:9,9:"ConvexPolyhedron",Cylinder:10,10:"Cylinder",Cone:11,11:"Cone",RoundCuboid:12,12:"RoundCuboid",RoundTriangle:13,13:"RoundTriangle",RoundCylinder:14,14:"RoundCylinder",RoundCone:15,15:"RoundCone",RoundConvexPolyhedron:16,16:"RoundConvexPolyhedron",HalfSpace:17,17:"HalfSpace"}),Hs=Object.freeze({LinX:0,0:"LinX",LinY:1,1:"LinY",LinZ:2,2:"LinZ",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"}),bn=Object.freeze({Revolute:0,0:"Revolute",Fixed:1,1:"Fixed",Prismatic:2,2:"Prismatic",Rope:3,3:"Rope",Spring:4,4:"Spring",Spherical:5,5:"Spherical",Generic:6,6:"Generic"}),cc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawbroadphase_free(i>>>0));class Ti{static __wrap(t){t=t>>>0;const e=Object.create(Ti.prototype);return e.__wbg_ptr=t,cc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,cc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawbroadphase_free(t)}constructor(){const t=h.rawbroadphase_new();return this.__wbg_ptr=t>>>0,this}}const Rg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawccdsolver_free(i>>>0));class mo{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Rg.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawccdsolver_free(t)}constructor(){const t=h.rawccdsolver_new();return this.__wbg_ptr=t>>>0,this}}const Ag=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcharactercollision_free(i>>>0));class ph{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ag.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcharactercollision_free(t)}constructor(){const t=h.rawcharactercollision_new();return this.__wbg_ptr=t>>>0,this}handle(){return h.rawcharactercollision_handle(this.__wbg_ptr)}translationDeltaApplied(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return G.__wrap(t)}translationDeltaRemaining(){const t=h.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return G.__wrap(t)}toi(){return h.rawcharactercollision_toi(this.__wbg_ptr)}worldWitness1(){const t=h.rawcharactercollision_worldWitness1(this.__wbg_ptr);return G.__wrap(t)}worldWitness2(){const t=h.rawcharactercollision_worldWitness2(this.__wbg_ptr);return G.__wrap(t)}worldNormal1(){const t=h.rawcharactercollision_worldNormal1(this.__wbg_ptr);return G.__wrap(t)}worldNormal2(){const t=h.rawcharactercollision_worldNormal2(this.__wbg_ptr);return G.__wrap(t)}}const hc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcolliderset_free(i>>>0));class Te{static __wrap(t){t=t>>>0;const e=Object.create(Te.prototype);return e.__wbg_ptr=t,hc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,hc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcolliderset_free(t)}coTranslation(t){const e=h.rawcolliderset_coTranslation(this.__wbg_ptr,t);return G.__wrap(e)}coRotation(t){const e=h.rawcolliderset_coRotation(this.__wbg_ptr,t);return ne.__wrap(e)}coSetTranslation(t,e,n,r){h.rawcolliderset_coSetTranslation(this.__wbg_ptr,t,e,n,r)}coSetTranslationWrtParent(t,e,n,r){h.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr,t,e,n,r)}coSetRotation(t,e,n,r,s){h.rawcolliderset_coSetRotation(this.__wbg_ptr,t,e,n,r,s)}coSetRotationWrtParent(t,e,n,r,s){h.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr,t,e,n,r,s)}coIsSensor(t){return h.rawcolliderset_coIsSensor(this.__wbg_ptr,t)!==0}coShapeType(t){return h.rawcolliderset_coShapeType(this.__wbg_ptr,t)}coHalfspaceNormal(t){const e=h.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr,t);return e===0?void 0:G.__wrap(e)}coHalfExtents(t){const e=h.rawcolliderset_coHalfExtents(this.__wbg_ptr,t);return e===0?void 0:G.__wrap(e)}coSetHalfExtents(t,e){L(e,G),h.rawcolliderset_coSetHalfExtents(this.__wbg_ptr,t,e.__wbg_ptr)}coRadius(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coRadius(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}coSetRadius(t,e){h.rawcolliderset_coSetRadius(this.__wbg_ptr,t,e)}coHalfHeight(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coHalfHeight(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}coSetHalfHeight(t,e){h.rawcolliderset_coSetHalfHeight(this.__wbg_ptr,t,e)}coRoundRadius(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coRoundRadius(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}coSetRoundRadius(t,e){h.rawcolliderset_coSetRoundRadius(this.__wbg_ptr,t,e)}coVertices(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coVertices(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=qt()[r/4+1];let s;return e!==0&&(s=lc(e,n).slice(),h.__wbindgen_free(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coIndices(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coIndices(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=qt()[r/4+1];let s;return e!==0&&(s=Tg(e,n).slice(),h.__wbindgen_free(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coTriMeshFlags(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coTriMeshFlags(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=qt()[r/4+1];return e===0?void 0:n>>>0}finally{h.__wbindgen_add_to_stack_pointer(16)}}coHeightFieldFlags(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coHeightFieldFlags(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=qt()[r/4+1];return e===0?void 0:n>>>0}finally{h.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldHeights(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coHeightfieldHeights(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=qt()[r/4+1];let s;return e!==0&&(s=lc(e,n).slice(),h.__wbindgen_free(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldScale(t){const e=h.rawcolliderset_coHeightfieldScale(this.__wbg_ptr,t);return e===0?void 0:G.__wrap(e)}coHeightfieldNRows(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coHeightfieldNRows(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=qt()[r/4+1];return e===0?void 0:n>>>0}finally{h.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldNCols(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coHeightfieldNCols(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=qt()[r/4+1];return e===0?void 0:n>>>0}finally{h.__wbindgen_add_to_stack_pointer(16)}}coParent(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coParent(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Ps()[r/8+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}coSetEnabled(t,e){h.rawcolliderset_coSetEnabled(this.__wbg_ptr,t,e)}coIsEnabled(t){return h.rawcolliderset_coIsEnabled(this.__wbg_ptr,t)!==0}coSetContactSkin(t,e){h.rawcolliderset_coSetContactSkin(this.__wbg_ptr,t,e)}coContactSkin(t){return h.rawcolliderset_coContactSkin(this.__wbg_ptr,t)}coFriction(t){return h.rawcolliderset_coFriction(this.__wbg_ptr,t)}coRestitution(t){return h.rawcolliderset_coRestitution(this.__wbg_ptr,t)}coDensity(t){return h.rawcolliderset_coDensity(this.__wbg_ptr,t)}coMass(t){return h.rawcolliderset_coMass(this.__wbg_ptr,t)}coVolume(t){return h.rawcolliderset_coVolume(this.__wbg_ptr,t)}coCollisionGroups(t){return h.rawcolliderset_coCollisionGroups(this.__wbg_ptr,t)>>>0}coSolverGroups(t){return h.rawcolliderset_coSolverGroups(this.__wbg_ptr,t)>>>0}coActiveHooks(t){return h.rawcolliderset_coActiveHooks(this.__wbg_ptr,t)>>>0}coActiveCollisionTypes(t){return h.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr,t)}coActiveEvents(t){return h.rawcolliderset_coActiveEvents(this.__wbg_ptr,t)>>>0}coContactForceEventThreshold(t){return h.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr,t)}coContainsPoint(t,e){return L(e,G),h.rawcolliderset_coContainsPoint(this.__wbg_ptr,t,e.__wbg_ptr)!==0}coCastShape(t,e,n,r,s,a,o,l,c){L(e,G),L(n,Vt),L(r,G),L(s,ne),L(a,G);const u=h.rawcolliderset_coCastShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o,l,c);return u===0?void 0:Ws.__wrap(u)}coCastCollider(t,e,n,r,s,a,o){L(e,G),L(r,G);const l=h.rawcolliderset_coCastCollider(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s,a,o);return l===0?void 0:ks.__wrap(l)}coIntersectsShape(t,e,n,r){return L(e,Vt),L(n,G),L(r,ne),h.rawcolliderset_coIntersectsShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr)!==0}coContactShape(t,e,n,r,s){L(e,Vt),L(n,G),L(r,ne);const a=h.rawcolliderset_coContactShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s);return a===0?void 0:Er.__wrap(a)}coContactCollider(t,e,n){const r=h.rawcolliderset_coContactCollider(this.__wbg_ptr,t,e,n);return r===0?void 0:Er.__wrap(r)}coProjectPoint(t,e,n){L(e,G);const r=h.rawcolliderset_coProjectPoint(this.__wbg_ptr,t,e.__wbg_ptr,n);return Gs.__wrap(r)}coIntersectsRay(t,e,n,r){return L(e,G),L(n,G),h.rawcolliderset_coIntersectsRay(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)!==0}coCastRay(t,e,n,r,s){return L(e,G),L(n,G),h.rawcolliderset_coCastRay(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s)}coCastRayAndGetNormal(t,e,n,r,s){L(e,G),L(n,G);const a=h.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s);return a===0?void 0:Vs.__wrap(a)}coSetSensor(t,e){h.rawcolliderset_coSetSensor(this.__wbg_ptr,t,e)}coSetRestitution(t,e){h.rawcolliderset_coSetRestitution(this.__wbg_ptr,t,e)}coSetFriction(t,e){h.rawcolliderset_coSetFriction(this.__wbg_ptr,t,e)}coFrictionCombineRule(t){return h.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr,t)>>>0}coSetFrictionCombineRule(t,e){h.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr,t,e)}coRestitutionCombineRule(t){return h.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr,t)>>>0}coSetRestitutionCombineRule(t,e){h.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr,t,e)}coSetCollisionGroups(t,e){h.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr,t,e)}coSetSolverGroups(t,e){h.rawcolliderset_coSetSolverGroups(this.__wbg_ptr,t,e)}coSetActiveHooks(t,e){h.rawcolliderset_coSetActiveHooks(this.__wbg_ptr,t,e)}coSetActiveEvents(t,e){h.rawcolliderset_coSetActiveEvents(this.__wbg_ptr,t,e)}coSetActiveCollisionTypes(t,e){h.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr,t,e)}coSetShape(t,e){L(e,Vt),h.rawcolliderset_coSetShape(this.__wbg_ptr,t,e.__wbg_ptr)}coSetContactForceEventThreshold(t,e){h.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr,t,e)}coSetDensity(t,e){h.rawcolliderset_coSetDensity(this.__wbg_ptr,t,e)}coSetMass(t,e){h.rawcolliderset_coSetMass(this.__wbg_ptr,t,e)}coSetMassProperties(t,e,n,r,s){L(n,G),L(r,G),L(s,ne),h.rawcolliderset_coSetMassProperties(this.__wbg_ptr,t,e,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}constructor(){const t=h.rawcolliderset_new();return this.__wbg_ptr=t>>>0,this}len(){return h.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(t){return h.rawcolliderset_contains(this.__wbg_ptr,t)!==0}createCollider(t,e,n,r,s,a,o,l,c,u,d,f,g,b,y,w,m,U,P,R,X,O,z,q,T){try{const tt=h.__wbindgen_add_to_stack_pointer(-16);L(e,Vt),L(n,G),L(r,ne),L(o,G),L(l,G),L(c,ne),L(T,Ae),h.rawcolliderset_createCollider(tt,this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,u,d,f,g,b,y,w,m,U,P,R,X,O,z,q,T.__wbg_ptr);var S=qt()[tt/4+0],N=Ps()[tt/8+1];return S===0?void 0:N}finally{h.__wbindgen_add_to_stack_pointer(16)}}remove(t,e,n,r){L(e,qn),L(n,Ae),h.rawcolliderset_remove(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}isHandleValid(t){return h.rawcolliderset_contains(this.__wbg_ptr,t)!==0}forEachColliderHandle(t){try{h.rawcolliderset_forEachColliderHandle(this.__wbg_ptr,Ee(t))}finally{ce[be++]=void 0}}}const uc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcollidershapecasthit_free(i>>>0));class ks{static __wrap(t){t=t>>>0;const e=Object.create(ks.prototype);return e.__wbg_ptr=t,uc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,uc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcollidershapecasthit_free(t)}colliderHandle(){return h.rawcharactercollision_handle(this.__wbg_ptr)}time_of_impact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}witness1(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return G.__wrap(t)}witness2(){const t=h.rawcollidershapecasthit_witness2(this.__wbg_ptr);return G.__wrap(t)}normal1(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return G.__wrap(t)}normal2(){const t=h.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return G.__wrap(t)}}typeof FinalizationRegistry>"u"||new FinalizationRegistry(i=>h.__wbg_rawcontactforceevent_free(i>>>0));const dc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcontactmanifold_free(i>>>0));class ko{static __wrap(t){t=t>>>0;const e=Object.create(ko.prototype);return e.__wbg_ptr=t,dc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,dc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcontactmanifold_free(t)}normal(){const t=h.rawcontactmanifold_normal(this.__wbg_ptr);return G.__wrap(t)}local_n1(){const t=h.rawcontactmanifold_local_n1(this.__wbg_ptr);return G.__wrap(t)}local_n2(){const t=h.rawcontactmanifold_local_n2(this.__wbg_ptr);return G.__wrap(t)}subshape1(){return h.rawcontactmanifold_subshape1(this.__wbg_ptr)>>>0}subshape2(){return h.rawcontactmanifold_subshape2(this.__wbg_ptr)>>>0}num_contacts(){return h.rawcontactmanifold_num_contacts(this.__wbg_ptr)>>>0}contact_local_p1(t){const e=h.rawcontactmanifold_contact_local_p1(this.__wbg_ptr,t);return e===0?void 0:G.__wrap(e)}contact_local_p2(t){const e=h.rawcontactmanifold_contact_local_p2(this.__wbg_ptr,t);return e===0?void 0:G.__wrap(e)}contact_dist(t){return h.rawcontactmanifold_contact_dist(this.__wbg_ptr,t)}contact_fid1(t){return h.rawcontactmanifold_contact_fid1(this.__wbg_ptr,t)>>>0}contact_fid2(t){return h.rawcontactmanifold_contact_fid2(this.__wbg_ptr,t)>>>0}contact_impulse(t){return h.rawcontactmanifold_contact_impulse(this.__wbg_ptr,t)}contact_tangent_impulse_x(t){return h.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr,t)}contact_tangent_impulse_y(t){return h.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr,t)}num_solver_contacts(){return h.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr)>>>0}solver_contact_point(t){const e=h.rawcontactmanifold_solver_contact_point(this.__wbg_ptr,t);return e===0?void 0:G.__wrap(e)}solver_contact_dist(t){return h.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr,t)}solver_contact_friction(t){return h.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr,t)}solver_contact_restitution(t){return h.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr,t)}solver_contact_tangent_velocity(t){const e=h.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr,t);return G.__wrap(e)}}const fc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcontactpair_free(i>>>0));class Go{static __wrap(t){t=t>>>0;const e=Object.create(Go.prototype);return e.__wbg_ptr=t,fc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,fc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcontactpair_free(t)}collider1(){return h.rawcontactpair_collider1(this.__wbg_ptr)}collider2(){return h.rawcontactpair_collider2(this.__wbg_ptr)}numContactManifolds(){return h.rawcontactpair_numContactManifolds(this.__wbg_ptr)>>>0}contactManifold(t){const e=h.rawcontactpair_contactManifold(this.__wbg_ptr,t);return e===0?void 0:ko.__wrap(e)}}const Cg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawdebugrenderpipeline_free(i>>>0));class Pg{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Cg.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawdebugrenderpipeline_free(t)}constructor(){const t=h.rawdebugrenderpipeline_new();return this.__wbg_ptr=t>>>0,this}vertices(){const t=h.rawdebugrenderpipeline_vertices(this.__wbg_ptr);return Cs(t)}colors(){const t=h.rawdebugrenderpipeline_colors(this.__wbg_ptr);return Cs(t)}render(t,e,n,r,s){L(t,Ae),L(e,Te),L(n,Xn),L(r,Yn),L(s,li),h.rawdebugrenderpipeline_render(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}}const pc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawdeserializedworld_free(i>>>0));class Vo{static __wrap(t){t=t>>>0;const e=Object.create(Vo.prototype);return e.__wbg_ptr=t,pc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,pc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawdeserializedworld_free(t)}takeGravity(){const t=h.rawdeserializedworld_takeGravity(this.__wbg_ptr);return t===0?void 0:G.__wrap(t)}takeIntegrationParameters(){const t=h.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);return t===0?void 0:Ri.__wrap(t)}takeIslandManager(){const t=h.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);return t===0?void 0:qn.__wrap(t)}takeBroadPhase(){const t=h.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);return t===0?void 0:Ti.__wrap(t)}takeNarrowPhase(){const t=h.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);return t===0?void 0:li.__wrap(t)}takeBodies(){const t=h.rawdeserializedworld_takeBodies(this.__wbg_ptr);return t===0?void 0:Ae.__wrap(t)}takeColliders(){const t=h.rawdeserializedworld_takeColliders(this.__wbg_ptr);return t===0?void 0:Te.__wrap(t)}takeImpulseJoints(){const t=h.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);return t===0?void 0:Xn.__wrap(t)}takeMultibodyJoints(){const t=h.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);return t===0?void 0:Yn.__wrap(t)}}const Ig=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawdynamicraycastvehiclecontroller_free(i>>>0));class Dg{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ig.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawdynamicraycastvehiclecontroller_free(t)}constructor(t){const e=h.rawdynamicraycastvehiclecontroller_new(t);return this.__wbg_ptr=e>>>0,this}current_vehicle_speed(){return h.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr)}chassis(){return h.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr)}index_up_axis(){return h.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}set_index_up_axis(t){h.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,t)}index_forward_axis(){return h.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr)>>>0}set_index_forward_axis(t){h.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr,t)}add_wheel(t,e,n,r,s){L(t,G),L(e,G),L(n,G),h.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s)}num_wheels(){return h.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr)>>>0}update_vehicle(t,e,n,r,s,a,o){try{L(e,Ae),L(n,Te),L(r,Wo),h.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,!Dt(a),Dt(a)?0:a,Ee(o))}finally{ce[be++]=void 0}}wheel_chassis_connection_point_cs(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr,t);return e===0?void 0:G.__wrap(e)}set_wheel_chassis_connection_point_cs(t,e){L(e,G),h.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_suspension_rest_length(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}set_wheel_suspension_rest_length(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr,t,e)}wheel_max_suspension_travel(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}set_wheel_max_suspension_travel(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr,t,e)}wheel_radius(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_radius(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}set_wheel_radius(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr,t,e)}wheel_suspension_stiffness(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}set_wheel_suspension_stiffness(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr,t,e)}wheel_suspension_compression(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}set_wheel_suspension_compression(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr,t,e)}wheel_suspension_relaxation(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}set_wheel_suspension_relaxation(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr,t,e)}wheel_max_suspension_force(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}set_wheel_max_suspension_force(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr,t,e)}wheel_brake(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_brake(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}set_wheel_brake(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr,t,e)}wheel_steering(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_steering(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}set_wheel_steering(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr,t,e)}wheel_engine_force(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_engine_force(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}set_wheel_engine_force(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr,t,e)}wheel_direction_cs(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr,t);return e===0?void 0:G.__wrap(e)}set_wheel_direction_cs(t,e){L(e,G),h.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_axle_cs(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr,t);return e===0?void 0:G.__wrap(e)}set_wheel_axle_cs(t,e){L(e,G),h.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_friction_slip(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_friction_slip(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}set_wheel_friction_slip(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr,t,e)}wheel_side_friction_stiffness(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}set_wheel_side_friction_stiffness(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr,t,e)}wheel_rotation(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_rotation(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}wheel_forward_impulse(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}wheel_side_impulse(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_side_impulse(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}wheel_suspension_force(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_suspension_force(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}wheel_contact_normal_ws(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr,t);return e===0?void 0:G.__wrap(e)}wheel_contact_point_ws(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr,t);return e===0?void 0:G.__wrap(e)}wheel_suspension_length(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_suspension_length(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Se()[r/4+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}wheel_hard_point_ws(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr,t);return e===0?void 0:G.__wrap(e)}wheel_is_in_contact(t){return h.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr,t)!==0}wheel_ground_object(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_ground_object(r,this.__wbg_ptr,t);var e=qt()[r/4+0],n=Ps()[r/8+1];return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}}const Lg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_raweventqueue_free(i>>>0));class _h{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Lg.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_raweventqueue_free(t)}constructor(t){const e=h.raweventqueue_new(t);return this.__wbg_ptr=e>>>0,this}drainCollisionEvents(t){try{h.raweventqueue_drainCollisionEvents(this.__wbg_ptr,Ee(t))}finally{ce[be++]=void 0}}drainContactForceEvents(t){try{h.raweventqueue_drainContactForceEvents(this.__wbg_ptr,Ee(t))}finally{ce[be++]=void 0}}clear(){h.raweventqueue_clear(this.__wbg_ptr)}}const _c=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawgenericjoint_free(i>>>0));class Ge{static __wrap(t){t=t>>>0;const e=Object.create(Ge.prototype);return e.__wbg_ptr=t,_c.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,_c.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawgenericjoint_free(t)}static generic(t,e,n,r){L(t,G),L(e,G),L(n,G);const s=h.rawgenericjoint_generic(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return s===0?void 0:Ge.__wrap(s)}static spring(t,e,n,r,s){L(r,G),L(s,G);const a=h.rawgenericjoint_spring(t,e,n,r.__wbg_ptr,s.__wbg_ptr);return Ge.__wrap(a)}static rope(t,e,n){L(e,G),L(n,G);const r=h.rawgenericjoint_rope(t,e.__wbg_ptr,n.__wbg_ptr);return Ge.__wrap(r)}static spherical(t,e){L(t,G),L(e,G);const n=h.rawgenericjoint_spherical(t.__wbg_ptr,e.__wbg_ptr);return Ge.__wrap(n)}static prismatic(t,e,n,r,s,a){L(t,G),L(e,G),L(n,G);const o=h.rawgenericjoint_prismatic(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s,a);return o===0?void 0:Ge.__wrap(o)}static fixed(t,e,n,r){L(t,G),L(e,ne),L(n,G),L(r,ne);const s=h.rawgenericjoint_fixed(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr);return Ge.__wrap(s)}static revolute(t,e,n){L(t,G),L(e,G),L(n,G);const r=h.rawgenericjoint_revolute(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr);return r===0?void 0:Ge.__wrap(r)}}const mc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawimpulsejointset_free(i>>>0));class Xn{static __wrap(t){t=t>>>0;const e=Object.create(Xn.prototype);return e.__wbg_ptr=t,mc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,mc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawimpulsejointset_free(t)}jointType(t){return h.rawimpulsejointset_jointType(this.__wbg_ptr,t)}jointBodyHandle1(t){return h.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr,t)}jointBodyHandle2(t){return h.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr,t)}jointFrameX1(t){const e=h.rawimpulsejointset_jointFrameX1(this.__wbg_ptr,t);return ne.__wrap(e)}jointFrameX2(t){const e=h.rawimpulsejointset_jointFrameX2(this.__wbg_ptr,t);return ne.__wrap(e)}jointAnchor1(t){const e=h.rawimpulsejointset_jointAnchor1(this.__wbg_ptr,t);return G.__wrap(e)}jointAnchor2(t){const e=h.rawimpulsejointset_jointAnchor2(this.__wbg_ptr,t);return G.__wrap(e)}jointSetAnchor1(t,e){L(e,G),h.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr,t,e.__wbg_ptr)}jointSetAnchor2(t,e){L(e,G),h.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr,t,e.__wbg_ptr)}jointContactsEnabled(t){return h.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointSetContactsEnabled(t,e){h.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointLimitsEnabled(t,e){return h.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMin(t,e){return h.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointLimitsMax(t,e){return h.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr,t,e)}jointSetLimits(t,e,n,r){h.rawimpulsejointset_jointSetLimits(this.__wbg_ptr,t,e,n,r)}jointConfigureMotorModel(t,e,n){h.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr,t,e,n)}jointConfigureMotorVelocity(t,e,n,r){h.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr,t,e,n,r)}jointConfigureMotorPosition(t,e,n,r,s){h.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr,t,e,n,r,s)}jointConfigureMotor(t,e,n,r,s,a){h.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr,t,e,n,r,s,a)}constructor(){const t=h.rawimpulsejointset_new();return this.__wbg_ptr=t>>>0,this}createJoint(t,e,n,r){return L(t,Ge),h.rawimpulsejointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,n,r)}remove(t,e){h.rawimpulsejointset_remove(this.__wbg_ptr,t,e)}len(){return h.rawimpulsejointset_len(this.__wbg_ptr)>>>0}contains(t){return h.rawimpulsejointset_contains(this.__wbg_ptr,t)!==0}forEachJointHandle(t){try{h.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr,Ee(t))}finally{ce[be++]=void 0}}forEachJointAttachedToRigidBody(t,e){try{h.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,Ee(e))}finally{ce[be++]=void 0}}}const gc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawintegrationparameters_free(i>>>0));class Ri{static __wrap(t){t=t>>>0;const e=Object.create(Ri.prototype);return e.__wbg_ptr=t,gc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,gc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawintegrationparameters_free(t)}constructor(){const t=h.rawintegrationparameters_new();return this.__wbg_ptr=t>>>0,this}get dt(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}get contact_erp(){return h.rawintegrationparameters_contact_erp(this.__wbg_ptr)}get normalizedAllowedLinearError(){return h.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr)}get normalizedPredictionDistance(){return h.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr)}get numSolverIterations(){return h.rawintegrationparameters_numSolverIterations(this.__wbg_ptr)>>>0}get numAdditionalFrictionIterations(){return h.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}get numInternalPgsIterations(){return h.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr)>>>0}get minIslandSize(){return h.rawimpulsejointset_len(this.__wbg_ptr)>>>0}get maxCcdSubsteps(){return h.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr)>>>0}get lengthUnit(){return h.rawintegrationparameters_lengthUnit(this.__wbg_ptr)}set dt(t){h.rawintegrationparameters_set_dt(this.__wbg_ptr,t)}set contact_natural_frequency(t){h.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr,t)}set normalizedAllowedLinearError(t){h.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr,t)}set normalizedPredictionDistance(t){h.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr,t)}set numSolverIterations(t){h.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr,t)}set numAdditionalFrictionIterations(t){h.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,t)}set numInternalPgsIterations(t){h.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr,t)}set minIslandSize(t){h.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr,t)}set maxCcdSubsteps(t){h.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr,t)}set lengthUnit(t){h.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr,t)}switchToStandardPgsSolver(){h.rawintegrationparameters_switchToStandardPgsSolver(this.__wbg_ptr)}switchToSmallStepsPgsSolver(){h.rawintegrationparameters_switchToSmallStepsPgsSolver(this.__wbg_ptr)}switchToSmallStepsPgsSolverWithoutWarmstart(){h.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart(this.__wbg_ptr)}}const wc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawislandmanager_free(i>>>0));class qn{static __wrap(t){t=t>>>0;const e=Object.create(qn.prototype);return e.__wbg_ptr=t,wc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,wc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawislandmanager_free(t)}constructor(){const t=h.rawislandmanager_new();return this.__wbg_ptr=t>>>0,this}forEachActiveRigidBodyHandle(t){try{h.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr,Ee(t))}finally{ce[be++]=void 0}}}const Ug=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawkinematiccharactercontroller_free(i>>>0));class Fg{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ug.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawkinematiccharactercontroller_free(t)}constructor(t){const e=h.rawkinematiccharactercontroller_new(t);return this.__wbg_ptr=e>>>0,this}up(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return G.__wrap(t)}setUp(t){L(t,G),h.rawkinematiccharactercontroller_setUp(this.__wbg_ptr,t.__wbg_ptr)}normalNudgeFactor(){return h.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr)}setNormalNudgeFactor(t){h.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr,t)}offset(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}setOffset(t){h.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr,t)}slideEnabled(){return h.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr)!==0}setSlideEnabled(t){h.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr,t)}autostepMaxHeight(){try{const n=h.__wbindgen_add_to_stack_pointer(-16);h.rawkinematiccharactercontroller_autostepMaxHeight(n,this.__wbg_ptr);var t=qt()[n/4+0],e=Se()[n/4+1];return t===0?void 0:e}finally{h.__wbindgen_add_to_stack_pointer(16)}}autostepMinWidth(){try{const n=h.__wbindgen_add_to_stack_pointer(-16);h.rawkinematiccharactercontroller_autostepMinWidth(n,this.__wbg_ptr);var t=qt()[n/4+0],e=Se()[n/4+1];return t===0?void 0:e}finally{h.__wbindgen_add_to_stack_pointer(16)}}autostepIncludesDynamicBodies(){const t=h.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);return t===16777215?void 0:t!==0}autostepEnabled(){return h.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr)!==0}enableAutostep(t,e,n){h.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr,t,e,n)}disableAutostep(){h.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr)}maxSlopeClimbAngle(){return h.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}setMaxSlopeClimbAngle(t){h.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr,t)}minSlopeSlideAngle(){return h.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr)}setMinSlopeSlideAngle(t){h.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr,t)}snapToGroundDistance(){try{const n=h.__wbindgen_add_to_stack_pointer(-16);h.rawkinematiccharactercontroller_snapToGroundDistance(n,this.__wbg_ptr);var t=qt()[n/4+0],e=Se()[n/4+1];return t===0?void 0:e}finally{h.__wbindgen_add_to_stack_pointer(16)}}enableSnapToGround(t){h.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr,t)}disableSnapToGround(){h.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr)}snapToGroundEnabled(){return h.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr)!==0}computeColliderMovement(t,e,n,r,s,a,o,l,c,u,d){try{L(e,Ae),L(n,Te),L(r,Wo),L(a,G),h.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a.__wbg_ptr,o,!Dt(l),Dt(l)?0:l,c,!Dt(u),Dt(u)?0:u,Ee(d))}finally{ce[be++]=void 0}}computedMovement(){const t=h.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);return G.__wrap(t)}computedGrounded(){return h.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr)!==0}numComputedCollisions(){return h.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr)>>>0}computedCollision(t,e){return L(e,ph),h.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr,t,e.__wbg_ptr)!==0}}const vc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawmultibodyjointset_free(i>>>0));class Yn{static __wrap(t){t=t>>>0;const e=Object.create(Yn.prototype);return e.__wbg_ptr=t,vc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,vc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawmultibodyjointset_free(t)}jointType(t){return h.rawmultibodyjointset_jointType(this.__wbg_ptr,t)}jointFrameX1(t){const e=h.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr,t);return ne.__wrap(e)}jointFrameX2(t){const e=h.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr,t);return ne.__wrap(e)}jointAnchor1(t){const e=h.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr,t);return G.__wrap(e)}jointAnchor2(t){const e=h.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr,t);return G.__wrap(e)}jointContactsEnabled(t){return h.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointSetContactsEnabled(t,e){h.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointLimitsEnabled(t,e){return h.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMin(t,e){return h.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointLimitsMax(t,e){return h.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr,t,e)}constructor(){const t=h.rawmultibodyjointset_new();return this.__wbg_ptr=t>>>0,this}createJoint(t,e,n,r){return L(t,Ge),h.rawmultibodyjointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,n,r)}remove(t,e){h.rawmultibodyjointset_remove(this.__wbg_ptr,t,e)}contains(t){return h.rawmultibodyjointset_contains(this.__wbg_ptr,t)!==0}forEachJointHandle(t){try{h.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr,Ee(t))}finally{ce[be++]=void 0}}forEachJointAttachedToRigidBody(t,e){try{h.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,Ee(e))}finally{ce[be++]=void 0}}}const bc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawnarrowphase_free(i>>>0));class li{static __wrap(t){t=t>>>0;const e=Object.create(li.prototype);return e.__wbg_ptr=t,bc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,bc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawnarrowphase_free(t)}constructor(){const t=h.rawnarrowphase_new();return this.__wbg_ptr=t>>>0,this}contact_pairs_with(t,e){h.rawnarrowphase_contact_pairs_with(this.__wbg_ptr,t,Ji(e))}contact_pair(t,e){const n=h.rawnarrowphase_contact_pair(this.__wbg_ptr,t,e);return n===0?void 0:Go.__wrap(n)}intersection_pairs_with(t,e){h.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr,t,Ji(e))}intersection_pair(t,e){return h.rawnarrowphase_intersection_pair(this.__wbg_ptr,t,e)!==0}}const Ng=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawphysicspipeline_free(i>>>0));class Og{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ng.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawphysicspipeline_free(t)}constructor(){const t=h.rawphysicspipeline_new();return this.__wbg_ptr=t>>>0,this}step(t,e,n,r,s,a,o,l,c,u){L(t,G),L(e,Ri),L(n,qn),L(r,Ti),L(s,li),L(a,Ae),L(o,Te),L(l,Xn),L(c,Yn),L(u,mo),h.rawphysicspipeline_step(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,u.__wbg_ptr)}stepWithEvents(t,e,n,r,s,a,o,l,c,u,d,f,g,b){L(t,G),L(e,Ri),L(n,qn),L(r,Ti),L(s,li),L(a,Ae),L(o,Te),L(l,Xn),L(c,Yn),L(u,mo),L(d,_h),h.rawphysicspipeline_stepWithEvents(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,u.__wbg_ptr,d.__wbg_ptr,Ji(f),Ji(g),Ji(b))}}const xc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawpointcolliderprojection_free(i>>>0));class Is{static __wrap(t){t=t>>>0;const e=Object.create(Is.prototype);return e.__wbg_ptr=t,xc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,xc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawpointcolliderprojection_free(t)}colliderHandle(){return h.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}point(){const t=h.rawpointcolliderprojection_point(this.__wbg_ptr);return G.__wrap(t)}isInside(){return h.rawpointcolliderprojection_isInside(this.__wbg_ptr)!==0}featureType(){return h.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){try{const n=h.__wbindgen_add_to_stack_pointer(-16);h.rawpointcolliderprojection_featureId(n,this.__wbg_ptr);var t=qt()[n/4+0],e=qt()[n/4+1];return t===0?void 0:e>>>0}finally{h.__wbindgen_add_to_stack_pointer(16)}}}const Sc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawpointprojection_free(i>>>0));class Gs{static __wrap(t){t=t>>>0;const e=Object.create(Gs.prototype);return e.__wbg_ptr=t,Sc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Sc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawpointprojection_free(t)}point(){const t=h.rawpointprojection_point(this.__wbg_ptr);return G.__wrap(t)}isInside(){return h.rawpointprojection_isInside(this.__wbg_ptr)!==0}}const Bg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawquerypipeline_free(i>>>0));class Wo{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Bg.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawquerypipeline_free(t)}constructor(){const t=h.rawquerypipeline_new();return this.__wbg_ptr=t>>>0,this}update(t){L(t,Te),h.rawquerypipeline_update(this.__wbg_ptr,t.__wbg_ptr)}castRay(t,e,n,r,s,a,o,l,c,u,d){try{L(t,Ae),L(e,Te),L(n,G),L(r,G);const f=h.rawquerypipeline_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a,o,!Dt(l),Dt(l)?0:l,!Dt(c),Dt(c)?0:c,!Dt(u),Dt(u)?0:u,Ee(d));return f===0?void 0:Xo.__wrap(f)}finally{ce[be++]=void 0}}castRayAndGetNormal(t,e,n,r,s,a,o,l,c,u,d){try{L(t,Ae),L(e,Te),L(n,G),L(r,G);const f=h.rawquerypipeline_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a,o,!Dt(l),Dt(l)?0:l,!Dt(c),Dt(c)?0:c,!Dt(u),Dt(u)?0:u,Ee(d));return f===0?void 0:qo.__wrap(f)}finally{ce[be++]=void 0}}intersectionsWithRay(t,e,n,r,s,a,o,l,c,u,d,f){try{L(t,Ae),L(e,Te),L(n,G),L(r,G),h.rawquerypipeline_intersectionsWithRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a,Ee(o),l,!Dt(c),Dt(c)?0:c,!Dt(u),Dt(u)?0:u,!Dt(d),Dt(d)?0:d,Ee(f))}finally{ce[be++]=void 0,ce[be++]=void 0}}intersectionWithShape(t,e,n,r,s,a,o,l,c,u){try{const g=h.__wbindgen_add_to_stack_pointer(-16);L(t,Ae),L(e,Te),L(n,G),L(r,ne),L(s,Vt),h.rawquerypipeline_intersectionWithShape(g,this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,!Dt(o),Dt(o)?0:o,!Dt(l),Dt(l)?0:l,!Dt(c),Dt(c)?0:c,Ee(u));var d=qt()[g/4+0],f=Ps()[g/8+1];return d===0?void 0:f}finally{h.__wbindgen_add_to_stack_pointer(16),ce[be++]=void 0}}projectPoint(t,e,n,r,s,a,o,l,c){try{L(t,Ae),L(e,Te),L(n,G);const u=h.rawquerypipeline_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s,!Dt(a),Dt(a)?0:a,!Dt(o),Dt(o)?0:o,!Dt(l),Dt(l)?0:l,Ee(c));return u===0?void 0:Is.__wrap(u)}finally{ce[be++]=void 0}}projectPointAndGetFeature(t,e,n,r,s,a,o,l){try{L(t,Ae),L(e,Te),L(n,G);const c=h.rawquerypipeline_projectPointAndGetFeature(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,!Dt(s),Dt(s)?0:s,!Dt(a),Dt(a)?0:a,!Dt(o),Dt(o)?0:o,Ee(l));return c===0?void 0:Is.__wrap(c)}finally{ce[be++]=void 0}}intersectionsWithPoint(t,e,n,r,s,a,o,l,c){try{L(t,Ae),L(e,Te),L(n,G),h.rawquerypipeline_intersectionsWithPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,Ee(r),s,!Dt(a),Dt(a)?0:a,!Dt(o),Dt(o)?0:o,!Dt(l),Dt(l)?0:l,Ee(c))}finally{ce[be++]=void 0,ce[be++]=void 0}}castShape(t,e,n,r,s,a,o,l,c,u,d,f,g,b){try{L(t,Ae),L(e,Te),L(n,G),L(r,ne),L(s,G),L(a,Vt);const y=h.rawquerypipeline_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o,l,c,u,!Dt(d),Dt(d)?0:d,!Dt(f),Dt(f)?0:f,!Dt(g),Dt(g)?0:g,Ee(b));return y===0?void 0:ks.__wrap(y)}finally{ce[be++]=void 0}}intersectionsWithShape(t,e,n,r,s,a,o,l,c,u,d){try{L(t,Ae),L(e,Te),L(n,G),L(r,ne),L(s,Vt),h.rawquerypipeline_intersectionsWithShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,Ee(a),o,!Dt(l),Dt(l)?0:l,!Dt(c),Dt(c)?0:c,!Dt(u),Dt(u)?0:u,Ee(d))}finally{ce[be++]=void 0,ce[be++]=void 0}}collidersWithAabbIntersectingAabb(t,e,n){try{L(t,G),L(e,G),h.rawquerypipeline_collidersWithAabbIntersectingAabb(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,Ee(n))}finally{ce[be++]=void 0}}}const yc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawraycolliderhit_free(i>>>0));class Xo{static __wrap(t){t=t>>>0;const e=Object.create(Xo.prototype);return e.__wbg_ptr=t,yc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,yc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawraycolliderhit_free(t)}colliderHandle(){return h.rawcharactercollision_handle(this.__wbg_ptr)}timeOfImpact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}}const Mc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawraycolliderintersection_free(i>>>0));class qo{static __wrap(t){t=t>>>0;const e=Object.create(qo.prototype);return e.__wbg_ptr=t,Mc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Mc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawraycolliderintersection_free(t)}colliderHandle(){return h.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}normal(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return G.__wrap(t)}time_of_impact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return h.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){try{const n=h.__wbindgen_add_to_stack_pointer(-16);h.rawpointcolliderprojection_featureId(n,this.__wbg_ptr);var t=qt()[n/4+0],e=qt()[n/4+1];return t===0?void 0:e>>>0}finally{h.__wbindgen_add_to_stack_pointer(16)}}}const Ec=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawrayintersection_free(i>>>0));class Vs{static __wrap(t){t=t>>>0;const e=Object.create(Vs.prototype);return e.__wbg_ptr=t,Ec.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ec.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawrayintersection_free(t)}normal(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return G.__wrap(t)}time_of_impact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return h.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){try{const n=h.__wbindgen_add_to_stack_pointer(-16);h.rawpointcolliderprojection_featureId(n,this.__wbg_ptr);var t=qt()[n/4+0],e=qt()[n/4+1];return t===0?void 0:e>>>0}finally{h.__wbindgen_add_to_stack_pointer(16)}}}const Tc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawrigidbodyset_free(i>>>0));class Ae{static __wrap(t){t=t>>>0;const e=Object.create(Ae.prototype);return e.__wbg_ptr=t,Tc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Tc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawrigidbodyset_free(t)}rbTranslation(t){const e=h.rawrigidbodyset_rbTranslation(this.__wbg_ptr,t);return G.__wrap(e)}rbRotation(t){const e=h.rawrigidbodyset_rbRotation(this.__wbg_ptr,t);return ne.__wrap(e)}rbSleep(t){h.rawrigidbodyset_rbSleep(this.__wbg_ptr,t)}rbIsSleeping(t){return h.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr,t)!==0}rbIsMoving(t){return h.rawrigidbodyset_rbIsMoving(this.__wbg_ptr,t)!==0}rbNextTranslation(t){const e=h.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr,t);return G.__wrap(e)}rbNextRotation(t){const e=h.rawrigidbodyset_rbNextRotation(this.__wbg_ptr,t);return ne.__wrap(e)}rbSetTranslation(t,e,n,r,s){h.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr,t,e,n,r,s)}rbSetRotation(t,e,n,r,s,a){h.rawrigidbodyset_rbSetRotation(this.__wbg_ptr,t,e,n,r,s,a)}rbSetLinvel(t,e,n){L(e,G),h.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbSetAngvel(t,e,n){L(e,G),h.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbSetNextKinematicTranslation(t,e,n,r){h.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr,t,e,n,r)}rbSetNextKinematicRotation(t,e,n,r,s){h.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr,t,e,n,r,s)}rbRecomputeMassPropertiesFromColliders(t,e){L(e,Te),h.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr,t,e.__wbg_ptr)}rbSetAdditionalMass(t,e,n){h.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr,t,e,n)}rbSetAdditionalMassProperties(t,e,n,r,s,a){L(n,G),L(r,G),L(s,ne),h.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr,t,e,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a)}rbLinvel(t){const e=h.rawrigidbodyset_rbLinvel(this.__wbg_ptr,t);return G.__wrap(e)}rbAngvel(t){const e=h.rawrigidbodyset_rbAngvel(this.__wbg_ptr,t);return G.__wrap(e)}rbLockTranslations(t,e,n){h.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr,t,e,n)}rbSetEnabledTranslations(t,e,n,r,s){h.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr,t,e,n,r,s)}rbLockRotations(t,e,n){h.rawrigidbodyset_rbLockRotations(this.__wbg_ptr,t,e,n)}rbSetEnabledRotations(t,e,n,r,s){h.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr,t,e,n,r,s)}rbDominanceGroup(t){return h.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr,t)}rbSetDominanceGroup(t,e){h.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr,t,e)}rbEnableCcd(t,e){h.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr,t,e)}rbSetSoftCcdPrediction(t,e){h.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr,t,e)}rbMass(t){return h.rawrigidbodyset_rbMass(this.__wbg_ptr,t)}rbInvMass(t){return h.rawrigidbodyset_rbInvMass(this.__wbg_ptr,t)}rbEffectiveInvMass(t){const e=h.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr,t);return G.__wrap(e)}rbLocalCom(t){const e=h.rawrigidbodyset_rbLocalCom(this.__wbg_ptr,t);return G.__wrap(e)}rbWorldCom(t){const e=h.rawrigidbodyset_rbWorldCom(this.__wbg_ptr,t);return G.__wrap(e)}rbInvPrincipalInertiaSqrt(t){const e=h.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.__wbg_ptr,t);return G.__wrap(e)}rbPrincipalInertiaLocalFrame(t){const e=h.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr,t);return ne.__wrap(e)}rbPrincipalInertia(t){const e=h.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr,t);return G.__wrap(e)}rbEffectiveWorldInvInertiaSqrt(t){const e=h.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.__wbg_ptr,t);return Ds.__wrap(e)}rbEffectiveAngularInertia(t){const e=h.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr,t);return Ds.__wrap(e)}rbWakeUp(t){h.rawrigidbodyset_rbWakeUp(this.__wbg_ptr,t)}rbIsCcdEnabled(t){return h.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr,t)!==0}rbSoftCcdPrediction(t){return h.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr,t)}rbNumColliders(t){return h.rawrigidbodyset_rbNumColliders(this.__wbg_ptr,t)>>>0}rbCollider(t,e){return h.rawrigidbodyset_rbCollider(this.__wbg_ptr,t,e)}rbBodyType(t){return h.rawrigidbodyset_rbBodyType(this.__wbg_ptr,t)}rbSetBodyType(t,e,n){h.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr,t,e,n)}rbIsFixed(t){return h.rawrigidbodyset_rbIsFixed(this.__wbg_ptr,t)!==0}rbIsKinematic(t){return h.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr,t)!==0}rbIsDynamic(t){return h.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr,t)!==0}rbLinearDamping(t){return h.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr,t)}rbAngularDamping(t){return h.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr,t)}rbSetLinearDamping(t,e){h.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr,t,e)}rbSetAngularDamping(t,e){h.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr,t,e)}rbSetEnabled(t,e){h.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr,t,e)}rbIsEnabled(t){return h.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr,t)!==0}rbGravityScale(t){return h.rawrigidbodyset_rbGravityScale(this.__wbg_ptr,t)}rbSetGravityScale(t,e,n){h.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr,t,e,n)}rbResetForces(t,e){h.rawrigidbodyset_rbResetForces(this.__wbg_ptr,t,e)}rbResetTorques(t,e){h.rawrigidbodyset_rbResetTorques(this.__wbg_ptr,t,e)}rbAddForce(t,e,n){L(e,G),h.rawrigidbodyset_rbAddForce(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbApplyImpulse(t,e,n){L(e,G),h.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbAddTorque(t,e,n){L(e,G),h.rawrigidbodyset_rbAddTorque(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbApplyTorqueImpulse(t,e,n){L(e,G),h.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbAddForceAtPoint(t,e,n,r){L(e,G),L(n,G),h.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}rbApplyImpulseAtPoint(t,e,n,r){L(e,G),L(n,G),h.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}rbAdditionalSolverIterations(t){return h.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr,t)>>>0}rbSetAdditionalSolverIterations(t,e){h.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr,t,e)}rbUserData(t){return h.rawrigidbodyset_rbUserData(this.__wbg_ptr,t)>>>0}rbSetUserData(t,e){h.rawrigidbodyset_rbSetUserData(this.__wbg_ptr,t,e)}rbUserForce(t){const e=h.rawrigidbodyset_rbUserForce(this.__wbg_ptr,t);return G.__wrap(e)}rbUserTorque(t){const e=h.rawrigidbodyset_rbUserTorque(this.__wbg_ptr,t);return G.__wrap(e)}constructor(){const t=h.rawrigidbodyset_new();return this.__wbg_ptr=t>>>0,this}createRigidBody(t,e,n,r,s,a,o,l,c,u,d,f,g,b,y,w,m,U,P,R,X,O,z,q,T,S){return L(e,G),L(n,ne),L(o,G),L(l,G),L(c,G),L(u,G),L(d,ne),h.rawrigidbodyset_createRigidBody(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s,a,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,u.__wbg_ptr,d.__wbg_ptr,f,g,b,y,w,m,U,P,R,X,O,z,q,T,S)}remove(t,e,n,r,s){L(e,qn),L(n,Te),L(r,Xn),L(s,Yn),h.rawrigidbodyset_remove(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}len(){return h.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(t){return h.rawrigidbodyset_contains(this.__wbg_ptr,t)!==0}forEachRigidBodyHandle(t){try{h.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr,Ee(t))}finally{ce[be++]=void 0}}propagateModifiedBodyPositionsToColliders(t){L(t,Te),h.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr,t.__wbg_ptr)}}const Rc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawrotation_free(i>>>0));class ne{static __wrap(t){t=t>>>0;const e=Object.create(ne.prototype);return e.__wbg_ptr=t,Rc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Rc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawrotation_free(t)}constructor(t,e,n,r){const s=h.rawrotation_new(t,e,n,r);return this.__wbg_ptr=s>>>0,this}static identity(){const t=h.rawrotation_identity();return ne.__wrap(t)}get x(){return h.rawrotation_x(this.__wbg_ptr)}get y(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}get z(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}get w(){return h.rawrotation_w(this.__wbg_ptr)}}const Ac=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawsdpmatrix3_free(i>>>0));class Ds{static __wrap(t){t=t>>>0;const e=Object.create(Ds.prototype);return e.__wbg_ptr=t,Ac.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ac.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawsdpmatrix3_free(t)}elements(){const t=h.rawsdpmatrix3_elements(this.__wbg_ptr);return Cs(t)}}const zg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawserializationpipeline_free(i>>>0));class Hg{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,zg.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawserializationpipeline_free(t)}constructor(){const t=h.rawserializationpipeline_new();return this.__wbg_ptr=t>>>0,this}serializeAll(t,e,n,r,s,a,o,l,c){L(t,G),L(e,Ri),L(n,qn),L(r,Ti),L(s,li),L(a,Ae),L(o,Te),L(l,Xn),L(c,Yn);const u=h.rawserializationpipeline_serializeAll(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr);return Cs(u)}deserializeAll(t){const e=h.rawserializationpipeline_deserializeAll(this.__wbg_ptr,Ji(t));return e===0?void 0:Vo.__wrap(e)}}const Cc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawshape_free(i>>>0));class Vt{static __wrap(t){t=t>>>0;const e=Object.create(Vt.prototype);return e.__wbg_ptr=t,Cc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Cc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawshape_free(t)}static cuboid(t,e,n){const r=h.rawshape_cuboid(t,e,n);return Vt.__wrap(r)}static roundCuboid(t,e,n,r){const s=h.rawshape_roundCuboid(t,e,n,r);return Vt.__wrap(s)}static ball(t){const e=h.rawshape_ball(t);return Vt.__wrap(e)}static halfspace(t){L(t,G);const e=h.rawshape_halfspace(t.__wbg_ptr);return Vt.__wrap(e)}static capsule(t,e){const n=h.rawshape_capsule(t,e);return Vt.__wrap(n)}static cylinder(t,e){const n=h.rawshape_cylinder(t,e);return Vt.__wrap(n)}static roundCylinder(t,e,n){const r=h.rawshape_roundCylinder(t,e,n);return Vt.__wrap(r)}static cone(t,e){const n=h.rawshape_cone(t,e);return Vt.__wrap(n)}static roundCone(t,e,n){const r=h.rawshape_roundCone(t,e,n);return Vt.__wrap(r)}static polyline(t,e){const n=gi(t,h.__wbindgen_malloc),r=rn,s=gs(e,h.__wbindgen_malloc),a=rn,o=h.rawshape_polyline(n,r,s,a);return Vt.__wrap(o)}static trimesh(t,e,n){const r=gi(t,h.__wbindgen_malloc),s=rn,a=gs(e,h.__wbindgen_malloc),o=rn,l=h.rawshape_trimesh(r,s,a,o,n);return Vt.__wrap(l)}static heightfield(t,e,n,r,s){const a=gi(n,h.__wbindgen_malloc),o=rn;L(r,G);const l=h.rawshape_heightfield(t,e,a,o,r.__wbg_ptr,s);return Vt.__wrap(l)}static segment(t,e){L(t,G),L(e,G);const n=h.rawshape_segment(t.__wbg_ptr,e.__wbg_ptr);return Vt.__wrap(n)}static triangle(t,e,n){L(t,G),L(e,G),L(n,G);const r=h.rawshape_triangle(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr);return Vt.__wrap(r)}static roundTriangle(t,e,n,r){L(t,G),L(e,G),L(n,G);const s=h.rawshape_roundTriangle(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return Vt.__wrap(s)}static convexHull(t){const e=gi(t,h.__wbindgen_malloc),n=rn,r=h.rawshape_convexHull(e,n);return r===0?void 0:Vt.__wrap(r)}static roundConvexHull(t,e){const n=gi(t,h.__wbindgen_malloc),r=rn,s=h.rawshape_roundConvexHull(n,r,e);return s===0?void 0:Vt.__wrap(s)}static convexMesh(t,e){const n=gi(t,h.__wbindgen_malloc),r=rn,s=gs(e,h.__wbindgen_malloc),a=rn,o=h.rawshape_convexMesh(n,r,s,a);return o===0?void 0:Vt.__wrap(o)}static roundConvexMesh(t,e,n){const r=gi(t,h.__wbindgen_malloc),s=rn,a=gs(e,h.__wbindgen_malloc),o=rn,l=h.rawshape_roundConvexMesh(r,s,a,o,n);return l===0?void 0:Vt.__wrap(l)}castShape(t,e,n,r,s,a,o,l,c,u){L(t,G),L(e,ne),L(n,G),L(r,Vt),L(s,G),L(a,ne),L(o,G);const d=h.rawshape_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l,c,u);return d===0?void 0:Ws.__wrap(d)}intersectsShape(t,e,n,r,s){return L(t,G),L(e,ne),L(n,Vt),L(r,G),L(s,ne),h.rawshape_intersectsShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)!==0}contactShape(t,e,n,r,s,a){L(t,G),L(e,ne),L(n,Vt),L(r,G),L(s,ne);const o=h.rawshape_contactShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a);return o===0?void 0:Er.__wrap(o)}containsPoint(t,e,n){return L(t,G),L(e,ne),L(n,G),h.rawshape_containsPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr)!==0}projectPoint(t,e,n,r){L(t,G),L(e,ne),L(n,G);const s=h.rawshape_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return Gs.__wrap(s)}intersectsRay(t,e,n,r,s){return L(t,G),L(e,ne),L(n,G),L(r,G),h.rawshape_intersectsRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s)!==0}castRay(t,e,n,r,s,a){return L(t,G),L(e,ne),L(n,G),L(r,G),h.rawshape_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a)}castRayAndGetNormal(t,e,n,r,s,a){L(t,G),L(e,ne),L(n,G),L(r,G);const o=h.rawshape_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a);return o===0?void 0:Vs.__wrap(o)}}const Pc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawshapecasthit_free(i>>>0));class Ws{static __wrap(t){t=t>>>0;const e=Object.create(Ws.prototype);return e.__wbg_ptr=t,Pc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Pc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawshapecasthit_free(t)}time_of_impact(){return h.rawrotation_x(this.__wbg_ptr)}witness1(){const t=h.rawshapecasthit_witness1(this.__wbg_ptr);return G.__wrap(t)}witness2(){const t=h.rawcontactforceevent_total_force(this.__wbg_ptr);return G.__wrap(t)}normal1(){const t=h.rawshapecasthit_normal1(this.__wbg_ptr);return G.__wrap(t)}normal2(){const t=h.rawshapecasthit_normal2(this.__wbg_ptr);return G.__wrap(t)}}const Ic=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawshapecontact_free(i>>>0));class Er{static __wrap(t){t=t>>>0;const e=Object.create(Er.prototype);return e.__wbg_ptr=t,Ic.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ic.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawshapecontact_free(t)}distance(){return h.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}point1(){const t=h.rawpointprojection_point(this.__wbg_ptr);return G.__wrap(t)}point2(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return G.__wrap(t)}normal1(){const t=h.rawcollidershapecasthit_witness2(this.__wbg_ptr);return G.__wrap(t)}normal2(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return G.__wrap(t)}}const Dc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawvector_free(i>>>0));class G{static __wrap(t){t=t>>>0;const e=Object.create(G.prototype);return e.__wbg_ptr=t,Dc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Dc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawvector_free(t)}static zero(){const t=h.rawvector_zero();return G.__wrap(t)}constructor(t,e,n){const r=h.rawvector_new(t,e,n);return this.__wbg_ptr=r>>>0,this}get x(){return h.rawrotation_x(this.__wbg_ptr)}set x(t){h.rawvector_set_x(this.__wbg_ptr,t)}get y(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}set y(t){h.rawintegrationparameters_set_dt(this.__wbg_ptr,t)}get z(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}set z(t){h.rawvector_set_z(this.__wbg_ptr,t)}xyz(){const t=h.rawvector_xyz(this.__wbg_ptr);return G.__wrap(t)}yxz(){const t=h.rawvector_yxz(this.__wbg_ptr);return G.__wrap(t)}zxy(){const t=h.rawvector_zxy(this.__wbg_ptr);return G.__wrap(t)}xzy(){const t=h.rawvector_xzy(this.__wbg_ptr);return G.__wrap(t)}yzx(){const t=h.rawvector_yzx(this.__wbg_ptr);return G.__wrap(t)}zyx(){const t=h.rawvector_zyx(this.__wbg_ptr);return G.__wrap(t)}}class mh{constructor(t,e,n){this.x=t,this.y=e,this.z=n}}class k{static new(t,e,n){return new mh(t,e,n)}static intoRaw(t){return new G(t.x,t.y,t.z)}static zeros(){return k.new(0,0,0)}static fromRaw(t){if(!t)return null;let e=k.new(t.x,t.y,t.z);return t.free(),e}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z}}class go{constructor(t,e,n,r){this.x=t,this.y=e,this.z=n,this.w=r}}class te{static identity(){return new go(0,0,0,1)}static fromRaw(t){if(!t)return null;let e=new go(t.x,t.y,t.z,t.w);return t.free(),e}static intoRaw(t){return new ne(t.x,t.y,t.z,t.w)}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w}}class gh{constructor(t){this.elements=t}get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}}class wo{static fromRaw(t){const e=new gh(t.elements());return t.free(),e}}var wn;(function(i){i[i.Dynamic=0]="Dynamic",i[i.Fixed=1]="Fixed",i[i.KinematicPositionBased=2]="KinematicPositionBased",i[i.KinematicVelocityBased=3]="KinematicVelocityBased"})(wn||(wn={}));class vo{constructor(t,e,n){this.rawSet=t,this.colliderSet=e,this.handle=n}finalizeDeserialization(t){this.colliderSet=t}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(t,e){return this.rawSet.rbLockTranslations(this.handle,t,e)}lockRotations(t,e){return this.rawSet.rbLockRotations(this.handle,t,e)}setEnabledTranslations(t,e,n,r){return this.rawSet.rbSetEnabledTranslations(this.handle,t,e,n,r)}restrictTranslations(t,e,n,r){this.setEnabledTranslations(t,e,n,r)}setEnabledRotations(t,e,n,r){return this.rawSet.rbSetEnabledRotations(this.handle,t,e,n,r)}restrictRotations(t,e,n,r){this.setEnabledRotations(t,e,n,r)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(t){this.rawSet.rbSetDominanceGroup(this.handle,t)}additionalSolverIterations(){return this.rawSet.rbAdditionalSolverIterations(this.handle)}setAdditionalSolverIterations(t){this.rawSet.rbSetAdditionalSolverIterations(this.handle,t)}enableCcd(t){this.rawSet.rbEnableCcd(this.handle,t)}setSoftCcdPrediction(t){this.rawSet.rbSetSoftCcdPrediction(this.handle,t)}softCcdPrediction(){return this.rawSet.rbSoftCcdPrediction(this.handle)}translation(){let t=this.rawSet.rbTranslation(this.handle);return k.fromRaw(t)}rotation(){let t=this.rawSet.rbRotation(this.handle);return te.fromRaw(t)}nextTranslation(){let t=this.rawSet.rbNextTranslation(this.handle);return k.fromRaw(t)}nextRotation(){let t=this.rawSet.rbNextRotation(this.handle);return te.fromRaw(t)}setTranslation(t,e){this.rawSet.rbSetTranslation(this.handle,t.x,t.y,t.z,e)}setLinvel(t,e){let n=k.intoRaw(t);this.rawSet.rbSetLinvel(this.handle,n,e),n.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(t,e){this.rawSet.rbSetGravityScale(this.handle,t,e)}setRotation(t,e){this.rawSet.rbSetRotation(this.handle,t.x,t.y,t.z,t.w,e)}setAngvel(t,e){let n=k.intoRaw(t);this.rawSet.rbSetAngvel(this.handle,n,e),n.free()}setNextKinematicTranslation(t){this.rawSet.rbSetNextKinematicTranslation(this.handle,t.x,t.y,t.z)}setNextKinematicRotation(t){this.rawSet.rbSetNextKinematicRotation(this.handle,t.x,t.y,t.z,t.w)}linvel(){return k.fromRaw(this.rawSet.rbLinvel(this.handle))}angvel(){return k.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return k.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return k.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return k.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertiaSqrt(){return k.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle))}principalInertia(){return k.fromRaw(this.rawSet.rbPrincipalInertia(this.handle))}principalInertiaLocalFrame(){return te.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle))}effectiveWorldInvInertiaSqrt(){return wo.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle))}effectiveAngularInertia(){return wo.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle))}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(t){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,t))}setEnabled(t){this.rawSet.rbSetEnabled(this.handle,t)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(t,e){return this.rawSet.rbSetBodyType(this.handle,t,e)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(t){this.rawSet.rbSetLinearDamping(this.handle,t)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(t,e){this.rawSet.rbSetAdditionalMass(this.handle,t,e)}setAdditionalMassProperties(t,e,n,r,s){let a=k.intoRaw(e),o=k.intoRaw(n),l=te.intoRaw(r);this.rawSet.rbSetAdditionalMassProperties(this.handle,t,a,o,l,s),a.free(),o.free(),l.free()}setAngularDamping(t){this.rawSet.rbSetAngularDamping(this.handle,t)}resetForces(t){this.rawSet.rbResetForces(this.handle,t)}resetTorques(t){this.rawSet.rbResetTorques(this.handle,t)}addForce(t,e){const n=k.intoRaw(t);this.rawSet.rbAddForce(this.handle,n,e),n.free()}applyImpulse(t,e){const n=k.intoRaw(t);this.rawSet.rbApplyImpulse(this.handle,n,e),n.free()}addTorque(t,e){const n=k.intoRaw(t);this.rawSet.rbAddTorque(this.handle,n,e),n.free()}applyTorqueImpulse(t,e){const n=k.intoRaw(t);this.rawSet.rbApplyTorqueImpulse(this.handle,n,e),n.free()}addForceAtPoint(t,e,n){const r=k.intoRaw(t),s=k.intoRaw(e);this.rawSet.rbAddForceAtPoint(this.handle,r,s,n),r.free(),s.free()}applyImpulseAtPoint(t,e,n){const r=k.intoRaw(t),s=k.intoRaw(e);this.rawSet.rbApplyImpulseAtPoint(this.handle,r,s,n),r.free(),s.free()}userForce(){return k.fromRaw(this.rawSet.rbUserForce(this.handle))}userTorque(){return k.fromRaw(this.rawSet.rbUserTorque(this.handle))}}class Sn{constructor(t){this.enabled=!0,this.status=t,this.translation=k.zeros(),this.rotation=te.identity(),this.gravityScale=1,this.linvel=k.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=k.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=k.zeros(),this.principalAngularInertia=k.zeros(),this.angularInertiaLocalFrame=te.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.softCcdPrediction=0,this.dominanceGroup=0,this.additionalSolverIterations=0}static dynamic(){return new Sn(wn.Dynamic)}static kinematicPositionBased(){return new Sn(wn.KinematicPositionBased)}static kinematicVelocityBased(){return new Sn(wn.KinematicVelocityBased)}static fixed(){return new Sn(wn.Fixed)}static newDynamic(){return new Sn(wn.Dynamic)}static newKinematicPositionBased(){return new Sn(wn.KinematicPositionBased)}static newKinematicVelocityBased(){return new Sn(wn.KinematicVelocityBased)}static newStatic(){return new Sn(wn.Fixed)}setDominanceGroup(t){return this.dominanceGroup=t,this}setAdditionalSolverIterations(t){return this.additionalSolverIterations=t,this}setEnabled(t){return this.enabled=t,this}setTranslation(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:n},this}setRotation(t){return te.copy(this.rotation,t),this}setGravityScale(t){return this.gravityScale=t,this}setAdditionalMass(t){return this.mass=t,this.massOnly=!0,this}setLinvel(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:t,y:e,z:n},this}setAngvel(t){return k.copy(this.angvel,t),this}setAdditionalMassProperties(t,e,n,r){return this.mass=t,k.copy(this.centerOfMass,e),k.copy(this.principalAngularInertia,n),te.copy(this.angularInertiaLocalFrame,r),this.massOnly=!1,this}enabledTranslations(t,e,n){return this.translationsEnabledX=t,this.translationsEnabledY=e,this.translationsEnabledZ=n,this}restrictTranslations(t,e,n){return this.enabledTranslations(t,e,n)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(t,e,n){return this.rotationsEnabledX=t,this.rotationsEnabledY=e,this.rotationsEnabledZ=n,this}restrictRotations(t,e,n){return this.enabledRotations(t,e,n)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(t){return this.linearDamping=t,this}setAngularDamping(t){return this.angularDamping=t,this}setCanSleep(t){return this.canSleep=t,this}setSleeping(t){return this.sleeping=t,this}setCcdEnabled(t){return this.ccdEnabled=t,this}setSoftCcdPrediction(t){return this.softCcdPrediction=t,this}setUserData(t){return this.userData=t,this}}class Xs{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(t,e){let n=this.index(t);for(;this.data.length<=n;)this.data.push(null);this.data[n]==null&&(this.size+=1),this.data[n]=e}len(){return this.size}delete(t){let e=this.index(t);e<this.data.length&&(this.data[e]!=null&&(this.size-=1),this.data[e]=null)}clear(){this.data=new Array}get(t){let e=this.index(t);return e<this.data.length?this.data[e]:null}forEach(t){for(const e of this.data)e!=null&&t(e)}getAll(){return this.data.filter(t=>t!=null)}index(t){return this.fconv[0]=t,this.uconv[0]}}class wh{constructor(t){this.raw=t||new Ae,this.map=new Xs,t&&t.forEachRigidBodyHandle(e=>{this.map.set(e,new vo(t,null,e))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createRigidBody(t,e){let n=k.intoRaw(e.translation),r=te.intoRaw(e.rotation),s=k.intoRaw(e.linvel),a=k.intoRaw(e.centerOfMass),o=k.intoRaw(e.angvel),l=k.intoRaw(e.principalAngularInertia),c=te.intoRaw(e.angularInertiaLocalFrame),u=this.raw.createRigidBody(e.enabled,n,r,e.gravityScale,e.mass,e.massOnly,a,s,o,l,c,e.translationsEnabledX,e.translationsEnabledY,e.translationsEnabledZ,e.rotationsEnabledX,e.rotationsEnabledY,e.rotationsEnabledZ,e.linearDamping,e.angularDamping,e.status,e.canSleep,e.sleeping,e.softCcdPrediction,e.ccdEnabled,e.dominanceGroup,e.additionalSolverIterations);n.free(),r.free(),s.free(),a.free(),o.free(),l.free(),c.free();const d=new vo(this.raw,t,u);return d.userData=e.userData,this.map.set(u,d),d}remove(t,e,n,r,s){for(let a=0;a<this.raw.rbNumColliders(t);a+=1)n.unmap(this.raw.rbCollider(t,a));r.forEachJointHandleAttachedToRigidBody(t,a=>r.unmap(a)),s.forEachJointHandleAttachedToRigidBody(t,a=>s.unmap(a)),this.raw.remove(t,e.raw,n.raw,r.raw,s.raw),this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachActiveRigidBody(t,e){t.forEachActiveRigidBodyHandle(n=>{e(this.get(n))})}getAll(){return this.map.getAll()}}class vh{constructor(t){this.raw=t||new Ri}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get contact_erp(){return this.raw.contact_erp}get lengthUnit(){return this.raw.lengthUnit}get normalizedAllowedLinearError(){return this.raw.normalizedAllowedLinearError}get normalizedPredictionDistance(){return this.raw.normalizedPredictionDistance}get numSolverIterations(){return this.raw.numSolverIterations}get numAdditionalFrictionIterations(){return this.raw.numAdditionalFrictionIterations}get numInternalPgsIterations(){return this.raw.numInternalPgsIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(t){this.raw.dt=t}set contact_natural_frequency(t){this.raw.contact_natural_frequency=t}set lengthUnit(t){this.raw.lengthUnit=t}set normalizedAllowedLinearError(t){this.raw.normalizedAllowedLinearError=t}set normalizedPredictionDistance(t){this.raw.normalizedPredictionDistance=t}set numSolverIterations(t){this.raw.numSolverIterations=t}set numAdditionalFrictionIterations(t){this.raw.numAdditionalFrictionIterations=t}set numInternalPgsIterations(t){this.raw.numInternalPgsIterations=t}set minIslandSize(t){this.raw.minIslandSize=t}set maxCcdSubsteps(t){this.raw.maxCcdSubsteps=t}switchToStandardPgsSolver(){this.raw.switchToStandardPgsSolver()}switchToSmallStepsPgsSolver(){this.raw.switchToSmallStepsPgsSolver()}switchToSmallStepsPgsSolverWithoutWarmstart(){this.raw.switchToSmallStepsPgsSolverWithoutWarmstart()}}var We;(function(i){i[i.Revolute=0]="Revolute",i[i.Fixed=1]="Fixed",i[i.Prismatic=2]="Prismatic",i[i.Rope=3]="Rope",i[i.Spring=4]="Spring",i[i.Spherical=5]="Spherical",i[i.Generic=6]="Generic"})(We||(We={}));var bo;(function(i){i[i.AccelerationBased=0]="AccelerationBased",i[i.ForceBased=1]="ForceBased"})(bo||(bo={}));var xo;(function(i){i[i.LinX=1]="LinX",i[i.LinY=2]="LinY",i[i.LinZ=4]="LinZ",i[i.AngX=8]="AngX",i[i.AngY=16]="AngY",i[i.AngZ=32]="AngZ"})(xo||(xo={}));class xn{constructor(t,e,n){this.rawSet=t,this.bodySet=e,this.handle=n}static newTyped(t,e,n){switch(t.jointType(n)){case bn.Revolute:return new Mh(t,e,n);case bn.Prismatic:return new yh(t,e,n);case bn.Fixed:return new bh(t,e,n);case bn.Spring:return new Sh(t,e,n);case bn.Rope:return new xh(t,e,n);case bn.Spherical:return new Th(t,e,n);case bn.Generic:return new Eh(t,e,n);default:return new xn(t,e,n)}}finalizeDeserialization(t){this.bodySet=t}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return te.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return te.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return k.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return k.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(t){const e=k.intoRaw(t);this.rawSet.jointSetAnchor1(this.handle,e),e.free()}setAnchor2(t){const e=k.intoRaw(t);this.rawSet.jointSetAnchor2(this.handle,e),e.free()}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Yo extends xn{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(t,e){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),t,e)}configureMotorModel(t){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),t)}configureMotorVelocity(t,e){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),t,e)}configureMotorPosition(t,e,n){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),t,e,n)}configureMotor(t,e,n,r){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),t,e,n,r)}}class bh extends xn{}class xh extends xn{}class Sh extends xn{}class yh extends Yo{rawAxis(){return Hs.LinX}}class Mh extends Yo{rawAxis(){return Hs.AngX}}class Eh extends xn{}class Th extends xn{}class Nn{constructor(){}static fixed(t,e,n,r){let s=new Nn;return s.anchor1=t,s.anchor2=n,s.frame1=e,s.frame2=r,s.jointType=We.Fixed,s}static spring(t,e,n,r,s){let a=new Nn;return a.anchor1=r,a.anchor2=s,a.length=t,a.stiffness=e,a.damping=n,a.jointType=We.Spring,a}static rope(t,e,n){let r=new Nn;return r.anchor1=e,r.anchor2=n,r.length=t,r.jointType=We.Rope,r}static generic(t,e,n,r){let s=new Nn;return s.anchor1=t,s.anchor2=e,s.axis=n,s.axesMask=r,s.jointType=We.Generic,s}static spherical(t,e){let n=new Nn;return n.anchor1=t,n.anchor2=e,n.jointType=We.Spherical,n}static prismatic(t,e,n){let r=new Nn;return r.anchor1=t,r.anchor2=e,r.axis=n,r.jointType=We.Prismatic,r}static revolute(t,e,n){let r=new Nn;return r.anchor1=t,r.anchor2=e,r.axis=n,r.jointType=We.Revolute,r}intoRaw(){let t=k.intoRaw(this.anchor1),e=k.intoRaw(this.anchor2),n,r,s=!1,a=0,o=0;switch(this.jointType){case We.Fixed:let l=te.intoRaw(this.frame1),c=te.intoRaw(this.frame2);r=Ge.fixed(t,l,e,c),l.free(),c.free();break;case We.Spring:r=Ge.spring(this.length,this.stiffness,this.damping,t,e);break;case We.Rope:r=Ge.rope(this.length,t,e);break;case We.Prismatic:n=k.intoRaw(this.axis),this.limitsEnabled&&(s=!0,a=this.limits[0],o=this.limits[1]),r=Ge.prismatic(t,e,n,s,a,o),n.free();break;case We.Generic:n=k.intoRaw(this.axis);let u=this.axesMask;r=Ge.generic(t,e,n,u);break;case We.Spherical:r=Ge.spherical(t,e);break;case We.Revolute:n=k.intoRaw(this.axis),r=Ge.revolute(t,e,n),n.free();break}return t.free(),e.free(),r}}class Rh{constructor(t){this.raw=t||new Xn,this.map=new Xs,t&&t.forEachJointHandle(e=>{this.map.set(e,xn.newTyped(t,null,e))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createJoint(t,e,n,r,s){const a=e.intoRaw(),o=this.raw.createJoint(a,n,r,s);a.free();let l=xn.newTyped(this.raw,t,o);return this.map.set(o,l),l}remove(t,e){this.raw.remove(t,e),this.unmap(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}unmap(t){this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}}class ci{constructor(t,e){this.rawSet=t,this.handle=e}static newTyped(t,e){switch(t.jointType(e)){case bn.Revolute:return new Ph(t,e);case bn.Prismatic:return new Ch(t,e);case bn.Fixed:return new Ah(t,e);case bn.Spherical:return new Ih(t,e);default:return new ci(t,e)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class jo extends ci{}class Ah extends ci{}class Ch extends jo{rawAxis(){return Hs.LinX}}class Ph extends jo{rawAxis(){return Hs.AngX}}class Ih extends ci{}class Dh{constructor(t){this.raw=t||new Yn,this.map=new Xs,t&&t.forEachJointHandle(e=>{this.map.set(e,ci.newTyped(this.raw,e))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}createJoint(t,e,n,r){const s=t.intoRaw(),a=this.raw.createJoint(s,e,n,r);s.free();let o=ci.newTyped(this.raw,a);return this.map.set(a,o),o}remove(t,e){this.raw.remove(t,e),this.map.delete(t)}unmap(t){this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}getAll(){return this.map.getAll()}}var Tr;(function(i){i[i.Average=0]="Average",i[i.Min=1]="Min",i[i.Multiply=2]="Multiply",i[i.Max=3]="Max"})(Tr||(Tr={}));class Lh{constructor(t){this.raw=t||new mo}free(){this.raw&&this.raw.free(),this.raw=void 0}}class Uh{constructor(t){this.raw=t||new qn}free(){this.raw&&this.raw.free(),this.raw=void 0}forEachActiveRigidBodyHandle(t){this.raw.forEachActiveRigidBodyHandle(t)}}class Fh{constructor(t){this.raw=t||new Ti}free(){this.raw&&this.raw.free(),this.raw=void 0}}class Nh{constructor(t){this.raw=t||new li,this.tempManifold=new Oh(null)}free(){this.raw&&this.raw.free(),this.raw=void 0}contactPairsWith(t,e){this.raw.contact_pairs_with(t,e)}intersectionPairsWith(t,e){this.raw.intersection_pairs_with(t,e)}contactPair(t,e,n){const r=this.raw.contact_pair(t,e);if(r){const s=r.collider1()!=t;let a;for(a=0;a<r.numContactManifolds();++a)this.tempManifold.raw=r.contactManifold(a),this.tempManifold.raw&&n(this.tempManifold,s),this.tempManifold.free();r.free()}}intersectionPair(t,e){return this.raw.intersection_pair(t,e)}}class Oh{constructor(t){this.raw=t}free(){this.raw&&this.raw.free(),this.raw=void 0}normal(){return k.fromRaw(this.raw.normal())}localNormal1(){return k.fromRaw(this.raw.local_n1())}localNormal2(){return k.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(t){return k.fromRaw(this.raw.contact_local_p1(t))}localContactPoint2(t){return k.fromRaw(this.raw.contact_local_p2(t))}contactDist(t){return this.raw.contact_dist(t)}contactFid1(t){return this.raw.contact_fid1(t)}contactFid2(t){return this.raw.contact_fid2(t)}contactImpulse(t){return this.raw.contact_impulse(t)}contactTangentImpulseX(t){return this.raw.contact_tangent_impulse_x(t)}contactTangentImpulseY(t){return this.raw.contact_tangent_impulse_y(t)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(t){return k.fromRaw(this.raw.solver_contact_point(t))}solverContactDist(t){return this.raw.solver_contact_dist(t)}solverContactFriction(t){return this.raw.solver_contact_friction(t)}solverContactRestitution(t){return this.raw.solver_contact_restitution(t)}solverContactTangentVelocity(t){return k.fromRaw(this.raw.solver_contact_tangent_velocity(t))}}class sr{constructor(t,e,n,r,s){this.distance=t,this.point1=e,this.point2=n,this.normal1=r,this.normal2=s}static fromRaw(t){if(!t)return null;const e=new sr(t.distance(),k.fromRaw(t.point1()),k.fromRaw(t.point2()),k.fromRaw(t.normal1()),k.fromRaw(t.normal2()));return t.free(),e}}var ar;(function(i){i[i.Vertex=0]="Vertex",i[i.Edge=1]="Edge",i[i.Face=2]="Face",i[i.Unknown=3]="Unknown"})(ar||(ar={}));class Nr{constructor(t,e){this.point=t,this.isInside=e}static fromRaw(t){if(!t)return null;const e=new Nr(k.fromRaw(t.point()),t.isInside());return t.free(),e}}class Rr{constructor(t,e,n,r,s){this.featureType=ar.Unknown,this.featureId=void 0,this.collider=t,this.point=e,this.isInside=n,s!==void 0&&(this.featureId=s),r!==void 0&&(this.featureType=r)}static fromRaw(t,e){if(!e)return null;const n=new Rr(t.get(e.colliderHandle()),k.fromRaw(e.point()),e.isInside(),e.featureType(),e.featureId());return e.free(),n}}class kg{constructor(t,e){this.origin=t,this.dir=e}pointAt(t){return{x:this.origin.x+this.dir.x*t,y:this.origin.y+this.dir.y*t,z:this.origin.z+this.dir.z*t}}}class Or{constructor(t,e,n,r){this.featureType=ar.Unknown,this.featureId=void 0,this.timeOfImpact=t,this.normal=e,r!==void 0&&(this.featureId=r),n!==void 0&&(this.featureType=n)}static fromRaw(t){if(!t)return null;const e=new Or(t.time_of_impact(),k.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),e}}class Ar{constructor(t,e,n,r,s){this.featureType=ar.Unknown,this.featureId=void 0,this.collider=t,this.timeOfImpact=e,this.normal=n,s!==void 0&&(this.featureId=s),r!==void 0&&(this.featureType=r)}static fromRaw(t,e){if(!e)return null;const n=new Ar(t.get(e.colliderHandle()),e.time_of_impact(),k.fromRaw(e.normal()),e.featureType(),e.featureId());return e.free(),n}}class qs{constructor(t,e){this.collider=t,this.timeOfImpact=e}static fromRaw(t,e){if(!e)return null;const n=new qs(t.get(e.colliderHandle()),e.timeOfImpact());return e.free(),n}}class cr{constructor(t,e,n,r,s){this.time_of_impact=t,this.witness1=e,this.witness2=n,this.normal1=r,this.normal2=s}static fromRaw(t,e){if(!e)return null;const n=new cr(e.time_of_impact(),k.fromRaw(e.witness1()),k.fromRaw(e.witness2()),k.fromRaw(e.normal1()),k.fromRaw(e.normal2()));return e.free(),n}}class Br extends cr{constructor(t,e,n,r,s,a){super(e,n,r,s,a),this.collider=t}static fromRaw(t,e){if(!e)return null;const n=new Br(t.get(e.colliderHandle()),e.time_of_impact(),k.fromRaw(e.witness1()),k.fromRaw(e.witness2()),k.fromRaw(e.normal1()),k.fromRaw(e.normal2()));return e.free(),n}}class Be{static fromRaw(t,e){const n=t.coShapeType(e);let r,s,a,o,l,c,u;switch(n){case Ve.Ball:return new Zo(t.coRadius(e));case Ve.Cuboid:return r=t.coHalfExtents(e),new Ko(r.x,r.y,r.z);case Ve.RoundCuboid:return r=t.coHalfExtents(e),s=t.coRoundRadius(e),new $o(r.x,r.y,r.z,s);case Ve.Capsule:return l=t.coHalfHeight(e),c=t.coRadius(e),new Jo(l,c);case Ve.Segment:return a=t.coVertices(e),new Qo(k.new(a[0],a[1],a[2]),k.new(a[3],a[4],a[5]));case Ve.Polyline:return a=t.coVertices(e),o=t.coIndices(e),new nl(a,o);case Ve.Triangle:return a=t.coVertices(e),new tl(k.new(a[0],a[1],a[2]),k.new(a[3],a[4],a[5]),k.new(a[6],a[7],a[8]));case Ve.RoundTriangle:return a=t.coVertices(e),s=t.coRoundRadius(e),new el(k.new(a[0],a[1],a[2]),k.new(a[3],a[4],a[5]),k.new(a[6],a[7],a[8]),s);case Ve.HalfSpace:return u=k.fromRaw(t.coHalfspaceNormal(e)),new Bh(u);case Ve.TriMesh:a=t.coVertices(e),o=t.coIndices(e);const d=t.coTriMeshFlags(e);return new il(a,o,d);case Ve.HeightField:const f=t.coHeightfieldScale(e),g=t.coHeightfieldHeights(e),b=t.coHeightfieldNRows(e),y=t.coHeightfieldNCols(e),w=t.coHeightFieldFlags(e);return new rl(b,y,g,f,w);case Ve.ConvexPolyhedron:return a=t.coVertices(e),o=t.coIndices(e),new Ls(a,o);case Ve.RoundConvexPolyhedron:return a=t.coVertices(e),o=t.coIndices(e),s=t.coRoundRadius(e),new Us(a,o,s);case Ve.Cylinder:return l=t.coHalfHeight(e),c=t.coRadius(e),new sl(l,c);case Ve.RoundCylinder:return l=t.coHalfHeight(e),c=t.coRadius(e),s=t.coRoundRadius(e),new al(l,c,s);case Ve.Cone:return l=t.coHalfHeight(e),c=t.coRadius(e),new ol(l,c);case Ve.RoundCone:return l=t.coHalfHeight(e),c=t.coRadius(e),s=t.coRoundRadius(e),new ll(l,c,s);default:throw new Error("unknown shape type: "+n)}}castShape(t,e,n,r,s,a,o,l,c,u){let d=k.intoRaw(t),f=te.intoRaw(e),g=k.intoRaw(n),b=k.intoRaw(s),y=te.intoRaw(a),w=k.intoRaw(o),m=this.intoRaw(),U=r.intoRaw(),P=cr.fromRaw(null,m.castShape(d,f,g,U,b,y,w,l,c,u));return d.free(),f.free(),g.free(),b.free(),y.free(),w.free(),m.free(),U.free(),P}intersectsShape(t,e,n,r,s){let a=k.intoRaw(t),o=te.intoRaw(e),l=k.intoRaw(r),c=te.intoRaw(s),u=this.intoRaw(),d=n.intoRaw(),f=u.intersectsShape(a,o,d,l,c);return a.free(),o.free(),l.free(),c.free(),u.free(),d.free(),f}contactShape(t,e,n,r,s,a){let o=k.intoRaw(t),l=te.intoRaw(e),c=k.intoRaw(r),u=te.intoRaw(s),d=this.intoRaw(),f=n.intoRaw(),g=sr.fromRaw(d.contactShape(o,l,f,c,u,a));return o.free(),l.free(),c.free(),u.free(),d.free(),f.free(),g}containsPoint(t,e,n){let r=k.intoRaw(t),s=te.intoRaw(e),a=k.intoRaw(n),o=this.intoRaw(),l=o.containsPoint(r,s,a);return r.free(),s.free(),a.free(),o.free(),l}projectPoint(t,e,n,r){let s=k.intoRaw(t),a=te.intoRaw(e),o=k.intoRaw(n),l=this.intoRaw(),c=Nr.fromRaw(l.projectPoint(s,a,o,r));return s.free(),a.free(),o.free(),l.free(),c}intersectsRay(t,e,n,r){let s=k.intoRaw(e),a=te.intoRaw(n),o=k.intoRaw(t.origin),l=k.intoRaw(t.dir),c=this.intoRaw(),u=c.intersectsRay(s,a,o,l,r);return s.free(),a.free(),o.free(),l.free(),c.free(),u}castRay(t,e,n,r,s){let a=k.intoRaw(e),o=te.intoRaw(n),l=k.intoRaw(t.origin),c=k.intoRaw(t.dir),u=this.intoRaw(),d=u.castRay(a,o,l,c,r,s);return a.free(),o.free(),l.free(),c.free(),u.free(),d}castRayAndGetNormal(t,e,n,r,s){let a=k.intoRaw(e),o=te.intoRaw(n),l=k.intoRaw(t.origin),c=k.intoRaw(t.dir),u=this.intoRaw(),d=Or.fromRaw(u.castRayAndGetNormal(a,o,l,c,r,s));return a.free(),o.free(),l.free(),c.free(),u.free(),d}}var Le;(function(i){i[i.Ball=0]="Ball",i[i.Cuboid=1]="Cuboid",i[i.Capsule=2]="Capsule",i[i.Segment=3]="Segment",i[i.Polyline=4]="Polyline",i[i.Triangle=5]="Triangle",i[i.TriMesh=6]="TriMesh",i[i.HeightField=7]="HeightField",i[i.ConvexPolyhedron=9]="ConvexPolyhedron",i[i.Cylinder=10]="Cylinder",i[i.Cone=11]="Cone",i[i.RoundCuboid=12]="RoundCuboid",i[i.RoundTriangle=13]="RoundTriangle",i[i.RoundCylinder=14]="RoundCylinder",i[i.RoundCone=15]="RoundCone",i[i.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",i[i.HalfSpace=17]="HalfSpace"})(Le||(Le={}));var So;(function(i){i[i.FIX_INTERNAL_EDGES=1]="FIX_INTERNAL_EDGES"})(So||(So={}));var yo;(function(i){i[i.DELETE_BAD_TOPOLOGY_TRIANGLES=4]="DELETE_BAD_TOPOLOGY_TRIANGLES",i[i.ORIENTED=8]="ORIENTED",i[i.MERGE_DUPLICATE_VERTICES=16]="MERGE_DUPLICATE_VERTICES",i[i.DELETE_DEGENERATE_TRIANGLES=32]="DELETE_DEGENERATE_TRIANGLES",i[i.DELETE_DUPLICATE_TRIANGLES=64]="DELETE_DUPLICATE_TRIANGLES",i[i.FIX_INTERNAL_EDGES=152]="FIX_INTERNAL_EDGES"})(yo||(yo={}));class Zo extends Be{constructor(t){super(),this.type=Le.Ball,this.radius=t}intoRaw(){return Vt.ball(this.radius)}}class Bh extends Be{constructor(t){super(),this.type=Le.HalfSpace,this.normal=t}intoRaw(){let t=k.intoRaw(this.normal),e=Vt.halfspace(t);return t.free(),e}}class Ko extends Be{constructor(t,e,n){super(),this.type=Le.Cuboid,this.halfExtents=k.new(t,e,n)}intoRaw(){return Vt.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class $o extends Be{constructor(t,e,n,r){super(),this.type=Le.RoundCuboid,this.halfExtents=k.new(t,e,n),this.borderRadius=r}intoRaw(){return Vt.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class Jo extends Be{constructor(t,e){super(),this.type=Le.Capsule,this.halfHeight=t,this.radius=e}intoRaw(){return Vt.capsule(this.halfHeight,this.radius)}}class Qo extends Be{constructor(t,e){super(),this.type=Le.Segment,this.a=t,this.b=e}intoRaw(){let t=k.intoRaw(this.a),e=k.intoRaw(this.b),n=Vt.segment(t,e);return t.free(),e.free(),n}}class tl extends Be{constructor(t,e,n){super(),this.type=Le.Triangle,this.a=t,this.b=e,this.c=n}intoRaw(){let t=k.intoRaw(this.a),e=k.intoRaw(this.b),n=k.intoRaw(this.c),r=Vt.triangle(t,e,n);return t.free(),e.free(),n.free(),r}}class el extends Be{constructor(t,e,n,r){super(),this.type=Le.RoundTriangle,this.a=t,this.b=e,this.c=n,this.borderRadius=r}intoRaw(){let t=k.intoRaw(this.a),e=k.intoRaw(this.b),n=k.intoRaw(this.c),r=Vt.roundTriangle(t,e,n,this.borderRadius);return t.free(),e.free(),n.free(),r}}class nl extends Be{constructor(t,e){super(),this.type=Le.Polyline,this.vertices=t,this.indices=e??new Uint32Array(0)}intoRaw(){return Vt.polyline(this.vertices,this.indices)}}class il extends Be{constructor(t,e,n){super(),this.type=Le.TriMesh,this.vertices=t,this.indices=e,this.flags=n}intoRaw(){return Vt.trimesh(this.vertices,this.indices,this.flags)}}class Ls extends Be{constructor(t,e){super(),this.type=Le.ConvexPolyhedron,this.vertices=t,this.indices=e}intoRaw(){return this.indices?Vt.convexMesh(this.vertices,this.indices):Vt.convexHull(this.vertices)}}class Us extends Be{constructor(t,e,n){super(),this.type=Le.RoundConvexPolyhedron,this.vertices=t,this.indices=e,this.borderRadius=n}intoRaw(){return this.indices?Vt.roundConvexMesh(this.vertices,this.indices,this.borderRadius):Vt.roundConvexHull(this.vertices,this.borderRadius)}}class rl extends Be{constructor(t,e,n,r,s){super(),this.type=Le.HeightField,this.nrows=t,this.ncols=e,this.heights=n,this.scale=r,this.flags=s}intoRaw(){let t=k.intoRaw(this.scale),e=Vt.heightfield(this.nrows,this.ncols,this.heights,t,this.flags);return t.free(),e}}class sl extends Be{constructor(t,e){super(),this.type=Le.Cylinder,this.halfHeight=t,this.radius=e}intoRaw(){return Vt.cylinder(this.halfHeight,this.radius)}}class al extends Be{constructor(t,e,n){super(),this.type=Le.RoundCylinder,this.borderRadius=n,this.halfHeight=t,this.radius=e}intoRaw(){return Vt.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class ol extends Be{constructor(t,e){super(),this.type=Le.Cone,this.halfHeight=t,this.radius=e}intoRaw(){return Vt.cone(this.halfHeight,this.radius)}}class ll extends Be{constructor(t,e,n){super(),this.type=Le.RoundCone,this.halfHeight=t,this.radius=e,this.borderRadius=n}intoRaw(){return Vt.roundCone(this.halfHeight,this.radius,this.borderRadius)}}class zh{constructor(t){this.raw=t||new Og}free(){this.raw&&this.raw.free(),this.raw=void 0}step(t,e,n,r,s,a,o,l,c,u,d,f){let g=k.intoRaw(t);d?this.raw.stepWithEvents(g,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,l.raw,c.raw,u.raw,d.raw,f,f?f.filterContactPair:null,f?f.filterIntersectionPair:null):this.raw.step(g,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,l.raw,c.raw,u.raw),g.free()}}var Mo;(function(i){i[i.EXCLUDE_FIXED=1]="EXCLUDE_FIXED",i[i.EXCLUDE_KINEMATIC=2]="EXCLUDE_KINEMATIC",i[i.EXCLUDE_DYNAMIC=4]="EXCLUDE_DYNAMIC",i[i.EXCLUDE_SENSORS=8]="EXCLUDE_SENSORS",i[i.EXCLUDE_SOLIDS=16]="EXCLUDE_SOLIDS",i[i.ONLY_DYNAMIC=3]="ONLY_DYNAMIC",i[i.ONLY_KINEMATIC=5]="ONLY_KINEMATIC",i[i.ONLY_FIXED=6]="ONLY_FIXED"})(Mo||(Mo={}));class Hh{constructor(t){this.raw=t||new Wo}free(){this.raw&&this.raw.free(),this.raw=void 0}update(t){this.raw.update(t.raw)}castRay(t,e,n,r,s,a,o,l,c,u){let d=k.intoRaw(n.origin),f=k.intoRaw(n.dir),g=qs.fromRaw(e,this.raw.castRay(t.raw,e.raw,d,f,r,s,a,o,l,c,u));return d.free(),f.free(),g}castRayAndGetNormal(t,e,n,r,s,a,o,l,c,u){let d=k.intoRaw(n.origin),f=k.intoRaw(n.dir),g=Ar.fromRaw(e,this.raw.castRayAndGetNormal(t.raw,e.raw,d,f,r,s,a,o,l,c,u));return d.free(),f.free(),g}intersectionsWithRay(t,e,n,r,s,a,o,l,c,u,d){let f=k.intoRaw(n.origin),g=k.intoRaw(n.dir),b=y=>a(Ar.fromRaw(e,y));this.raw.intersectionsWithRay(t.raw,e.raw,f,g,r,s,b,o,l,c,u,d),f.free(),g.free()}intersectionWithShape(t,e,n,r,s,a,o,l,c,u){let d=k.intoRaw(n),f=te.intoRaw(r),g=s.intoRaw(),b=this.raw.intersectionWithShape(t.raw,e.raw,d,f,g,a,o,l,c,u);return d.free(),f.free(),g.free(),b}projectPoint(t,e,n,r,s,a,o,l,c){let u=k.intoRaw(n),d=Rr.fromRaw(e,this.raw.projectPoint(t.raw,e.raw,u,r,s,a,o,l,c));return u.free(),d}projectPointAndGetFeature(t,e,n,r,s,a,o,l){let c=k.intoRaw(n),u=Rr.fromRaw(e,this.raw.projectPointAndGetFeature(t.raw,e.raw,c,r,s,a,o,l));return c.free(),u}intersectionsWithPoint(t,e,n,r,s,a,o,l,c){let u=k.intoRaw(n);this.raw.intersectionsWithPoint(t.raw,e.raw,u,r,s,a,o,l,c),u.free()}castShape(t,e,n,r,s,a,o,l,c,u,d,f,g,b){let y=k.intoRaw(n),w=te.intoRaw(r),m=k.intoRaw(s),U=a.intoRaw(),P=Br.fromRaw(e,this.raw.castShape(t.raw,e.raw,y,w,m,U,o,l,c,u,d,f,g,b));return y.free(),w.free(),m.free(),U.free(),P}intersectionsWithShape(t,e,n,r,s,a,o,l,c,u,d){let f=k.intoRaw(n),g=te.intoRaw(r),b=s.intoRaw();this.raw.intersectionsWithShape(t.raw,e.raw,f,g,b,a,o,l,c,u,d),f.free(),g.free(),b.free()}collidersWithAabbIntersectingAabb(t,e,n){let r=k.intoRaw(t),s=k.intoRaw(e);this.raw.collidersWithAabbIntersectingAabb(r,s,n),r.free(),s.free()}}class Eo{constructor(t){this.raw=t||new Hg}free(){this.raw&&this.raw.free(),this.raw=void 0}serializeAll(t,e,n,r,s,a,o,l,c){let u=k.intoRaw(t);const d=this.raw.serializeAll(u,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,l.raw,c.raw);return u.free(),d}deserializeAll(t){return Ys.fromRaw(this.raw.deserializeAll(t))}}class kh{constructor(t,e){this.vertices=t,this.colors=e}}class Gh{constructor(t){this.raw=t||new Pg}free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}render(t,e,n,r,s){this.raw.render(t.raw,e.raw,n.raw,r.raw,s.raw),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class Vh{}class Wh{constructor(t,e,n,r,s){this.params=e,this.bodies=n,this.colliders=r,this.queries=s,this.raw=new Fg(t),this.rawCharacterCollision=new ph,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(t){let e=k.intoRaw(t);return this.raw.setUp(e)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(t){this._applyImpulsesToDynamicBodies=t}characterMass(){return this._characterMass}setCharacterMass(t){this._characterMass=t}offset(){return this.raw.offset()}setOffset(t){this.raw.setOffset(t)}normalNudgeFactor(){return this.raw.normalNudgeFactor()}setNormalNudgeFactor(t){this.raw.setNormalNudgeFactor(t)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(t){this.raw.setSlideEnabled(t)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(t,e,n){this.raw.enableAutostep(t,e,n)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(t){this.raw.setMaxSlopeClimbAngle(t)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(t){this.raw.setMinSlopeSlideAngle(t)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(t){this.raw.enableSnapToGround(t)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(t,e,n,r,s){let a=k.intoRaw(e);this.raw.computeColliderMovement(this.params.dt,this.bodies.raw,this.colliders.raw,this.queries.raw,t.handle,a,this._applyImpulsesToDynamicBodies,this._characterMass,n,r,this.colliders.castClosure(s)),a.free()}computedMovement(){return k.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(t,e){if(this.raw.computedCollision(t,this.rawCharacterCollision)){let n=this.rawCharacterCollision;return e=e??new Vh,e.translationDeltaApplied=k.fromRaw(n.translationDeltaApplied()),e.translationDeltaRemaining=k.fromRaw(n.translationDeltaRemaining()),e.toi=n.toi(),e.witness1=k.fromRaw(n.worldWitness1()),e.witness2=k.fromRaw(n.worldWitness2()),e.normal1=k.fromRaw(n.worldNormal1()),e.normal2=k.fromRaw(n.worldNormal2()),e.collider=this.colliders.get(n.handle()),e}else return null}}class Xh{constructor(t,e,n,r){this.raw=new Dg(t.handle),this.bodies=e,this.colliders=n,this.queries=r,this._chassis=t}free(){this.raw&&this.raw.free(),this.raw=void 0}updateVehicle(t,e,n,r){this.raw.update_vehicle(t,this.bodies.raw,this.colliders.raw,this.queries.raw,e,n,this.colliders.castClosure(r))}currentVehicleSpeed(){return this.raw.current_vehicle_speed()}chassis(){return this._chassis}get indexUpAxis(){return this.raw.index_up_axis()}set indexUpAxis(t){this.raw.set_index_up_axis(t)}get indexForwardAxis(){return this.raw.index_forward_axis()}set setIndexForwardAxis(t){this.raw.set_index_forward_axis(t)}addWheel(t,e,n,r,s){let a=k.intoRaw(t),o=k.intoRaw(e),l=k.intoRaw(n);this.raw.add_wheel(a,o,l,r,s),a.free(),o.free(),l.free()}numWheels(){return this.raw.num_wheels()}wheelChassisConnectionPointCs(t){return k.fromRaw(this.raw.wheel_chassis_connection_point_cs(t))}setWheelChassisConnectionPointCs(t,e){let n=k.intoRaw(e);this.raw.set_wheel_chassis_connection_point_cs(t,n),n.free()}wheelSuspensionRestLength(t){return this.raw.wheel_suspension_rest_length(t)}setWheelSuspensionRestLength(t,e){this.raw.set_wheel_suspension_rest_length(t,e)}wheelMaxSuspensionTravel(t){return this.raw.wheel_max_suspension_travel(t)}setWheelMaxSuspensionTravel(t,e){this.raw.set_wheel_max_suspension_travel(t,e)}wheelRadius(t){return this.raw.wheel_radius(t)}setWheelRadius(t,e){this.raw.set_wheel_radius(t,e)}wheelSuspensionStiffness(t){return this.raw.wheel_suspension_stiffness(t)}setWheelSuspensionStiffness(t,e){this.raw.set_wheel_suspension_stiffness(t,e)}wheelSuspensionCompression(t){return this.raw.wheel_suspension_compression(t)}setWheelSuspensionCompression(t,e){this.raw.set_wheel_suspension_compression(t,e)}wheelSuspensionRelaxation(t){return this.raw.wheel_suspension_relaxation(t)}setWheelSuspensionRelaxation(t,e){this.raw.set_wheel_suspension_relaxation(t,e)}wheelMaxSuspensionForce(t){return this.raw.wheel_max_suspension_force(t)}setWheelMaxSuspensionForce(t,e){this.raw.set_wheel_max_suspension_force(t,e)}wheelBrake(t){return this.raw.wheel_brake(t)}setWheelBrake(t,e){this.raw.set_wheel_brake(t,e)}wheelSteering(t){return this.raw.wheel_steering(t)}setWheelSteering(t,e){this.raw.set_wheel_steering(t,e)}wheelEngineForce(t){return this.raw.wheel_engine_force(t)}setWheelEngineForce(t,e){this.raw.set_wheel_engine_force(t,e)}wheelDirectionCs(t){return k.fromRaw(this.raw.wheel_direction_cs(t))}setWheelDirectionCs(t,e){let n=k.intoRaw(e);this.raw.set_wheel_direction_cs(t,n),n.free()}wheelAxleCs(t){return k.fromRaw(this.raw.wheel_axle_cs(t))}setWheelAxleCs(t,e){let n=k.intoRaw(e);this.raw.set_wheel_axle_cs(t,n),n.free()}wheelFrictionSlip(t){return this.raw.wheel_friction_slip(t)}setWheelFrictionSlip(t,e){this.raw.set_wheel_friction_slip(t,e)}wheelSideFrictionStiffness(t){return this.raw.wheel_side_friction_stiffness(t)}setWheelSideFrictionStiffness(t,e){this.raw.set_wheel_side_friction_stiffness(t,e)}wheelRotation(t){return this.raw.wheel_rotation(t)}wheelForwardImpulse(t){return this.raw.wheel_forward_impulse(t)}wheelSideImpulse(t){return this.raw.wheel_side_impulse(t)}wheelSuspensionForce(t){return this.raw.wheel_suspension_force(t)}wheelContactNormal(t){return k.fromRaw(this.raw.wheel_contact_normal_ws(t))}wheelContactPoint(t){return k.fromRaw(this.raw.wheel_contact_point_ws(t))}wheelSuspensionLength(t){return this.raw.wheel_suspension_length(t)}wheelHardPoint(t){return k.fromRaw(this.raw.wheel_hard_point_ws(t))}wheelIsInContact(t){return this.raw.wheel_is_in_contact(t)}wheelGroundObject(t){return this.colliders.get(this.raw.wheel_ground_object(t))}}class Ys{constructor(t,e,n,r,s,a,o,l,c,u,d,f,g,b){this.gravity=t,this.integrationParameters=new vh(e),this.islands=new Uh(n),this.broadPhase=new Fh(r),this.narrowPhase=new Nh(s),this.bodies=new wh(a),this.colliders=new Yh(o),this.impulseJoints=new Rh(l),this.multibodyJoints=new Dh(c),this.ccdSolver=new Lh(u),this.queryPipeline=new Hh(d),this.physicsPipeline=new zh(f),this.serializationPipeline=new Eo(g),this.debugRenderPipeline=new Gh(b),this.characterControllers=new Set,this.vehicleControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.queryPipeline.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(t=>t.free()),this.vehicleControllers.forEach(t=>t.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.queryPipeline=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0,this.vehicleControllers=void 0}static fromRaw(t){return t?new Ys(k.fromRaw(t.takeGravity()),t.takeIntegrationParameters(),t.takeIslandManager(),t.takeBroadPhase(),t.takeNarrowPhase(),t.takeBodies(),t.takeColliders(),t.takeImpulseJoints(),t.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(t){return new Eo().deserializeAll(t)}debugRender(){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase),new kh(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(t,e){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,t,e),this.queryPipeline.update(this.colliders)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}updateSceneQueries(){this.propagateModifiedBodyPositionsToColliders(),this.queryPipeline.update(this.colliders)}get timestep(){return this.integrationParameters.dt}set timestep(t){this.integrationParameters.dt=t}get lengthUnit(){return this.integrationParameters.lengthUnit}set lengthUnit(t){this.integrationParameters.lengthUnit=t}get numSolverIterations(){return this.integrationParameters.numSolverIterations}set numSolverIterations(t){this.integrationParameters.numSolverIterations=t}get numAdditionalFrictionIterations(){return this.integrationParameters.numAdditionalFrictionIterations}set numAdditionalFrictionIterations(t){this.integrationParameters.numAdditionalFrictionIterations=t}get numInternalPgsIterations(){return this.integrationParameters.numInternalPgsIterations}set numInternalPgsIterations(t){this.integrationParameters.numInternalPgsIterations=t}switchToStandardPgsSolver(){this.integrationParameters.switchToStandardPgsSolver()}switchToSmallStepsPgsSolver(){this.integrationParameters.switchToSmallStepsPgsSolver()}switchToSmallStepsPgsSolverWithoutWarmstart(){this.integrationParameters.switchToSmallStepsPgsSolverWithoutWarmstart()}createRigidBody(t){return this.bodies.createRigidBody(this.colliders,t)}createCharacterController(t){let e=new Wh(t,this.integrationParameters,this.bodies,this.colliders,this.queryPipeline);return this.characterControllers.add(e),e}removeCharacterController(t){this.characterControllers.delete(t),t.free()}createVehicleController(t){let e=new Xh(t,this.bodies,this.colliders,this.queryPipeline);return this.vehicleControllers.add(e),e}removeVehicleController(t){this.vehicleControllers.delete(t),t.free()}createCollider(t,e){let n=e?e.handle:void 0;return this.colliders.createCollider(this.bodies,t,n)}createImpulseJoint(t,e,n,r){return this.impulseJoints.createJoint(this.bodies,t,e.handle,n.handle,r)}createMultibodyJoint(t,e,n,r){return this.multibodyJoints.createJoint(t,e.handle,n.handle,r)}getRigidBody(t){return this.bodies.get(t)}getCollider(t){return this.colliders.get(t)}getImpulseJoint(t){return this.impulseJoints.get(t)}getMultibodyJoint(t){return this.multibodyJoints.get(t)}removeRigidBody(t){this.bodies&&this.bodies.remove(t.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(t,e){this.colliders&&this.colliders.remove(t.handle,this.islands,this.bodies,e)}removeImpulseJoint(t,e){this.impulseJoints&&this.impulseJoints.remove(t.handle,e)}removeMultibodyJoint(t,e){this.impulseJoints&&this.multibodyJoints.remove(t.handle,e)}forEachCollider(t){this.colliders.forEach(t)}forEachRigidBody(t){this.bodies.forEach(t)}forEachActiveRigidBody(t){this.bodies.forEachActiveRigidBody(this.islands,t)}castRay(t,e,n,r,s,a,o,l){return this.queryPipeline.castRay(this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(l))}castRayAndGetNormal(t,e,n,r,s,a,o,l){return this.queryPipeline.castRayAndGetNormal(this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(l))}intersectionsWithRay(t,e,n,r,s,a,o,l,c){this.queryPipeline.intersectionsWithRay(this.bodies,this.colliders,t,e,n,r,s,a,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c))}intersectionWithShape(t,e,n,r,s,a,o,l){let c=this.queryPipeline.intersectionWithShape(this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(l));return c!=null?this.colliders.get(c):null}projectPoint(t,e,n,r,s,a,o){return this.queryPipeline.projectPoint(this.bodies,this.colliders,t,e,n,r,s?s.handle:null,a?a.handle:null,this.colliders.castClosure(o))}projectPointAndGetFeature(t,e,n,r,s,a){return this.queryPipeline.projectPointAndGetFeature(this.bodies,this.colliders,t,e,n,r?r.handle:null,s?s.handle:null,this.colliders.castClosure(a))}intersectionsWithPoint(t,e,n,r,s,a,o){this.queryPipeline.intersectionsWithPoint(this.bodies,this.colliders,t,this.colliders.castClosure(e),n,r,s?s.handle:null,a?a.handle:null,this.colliders.castClosure(o))}castShape(t,e,n,r,s,a,o,l,c,u,d,f){return this.queryPipeline.castShape(this.bodies,this.colliders,t,e,n,r,s,a,o,l,c,u?u.handle:null,d?d.handle:null,this.colliders.castClosure(f))}intersectionsWithShape(t,e,n,r,s,a,o,l,c){this.queryPipeline.intersectionsWithShape(this.bodies,this.colliders,t,e,n,this.colliders.castClosure(r),s,a,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c))}collidersWithAabbIntersectingAabb(t,e,n){this.queryPipeline.collidersWithAabbIntersectingAabb(t,e,this.colliders.castClosure(n))}contactPairsWith(t,e){this.narrowPhase.contactPairsWith(t.handle,this.colliders.castClosure(e))}intersectionPairsWith(t,e){this.narrowPhase.intersectionPairsWith(t.handle,this.colliders.castClosure(e))}contactPair(t,e,n){this.narrowPhase.contactPair(t.handle,e.handle,n)}intersectionPair(t,e){return this.narrowPhase.intersectionPair(t.handle,e.handle)}}var Fs;(function(i){i[i.NONE=0]="NONE",i[i.COLLISION_EVENTS=1]="COLLISION_EVENTS",i[i.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(Fs||(Fs={}));class qh{free(){this.raw&&this.raw.free(),this.raw=void 0}collider1(){return this.raw.collider1()}collider2(){return this.raw.collider2()}totalForce(){return k.fromRaw(this.raw.total_force())}totalForceMagnitude(){return this.raw.total_force_magnitude()}maxForceDirection(){return k.fromRaw(this.raw.max_force_direction())}maxForceMagnitude(){return this.raw.max_force_magnitude()}}class Gg{constructor(t,e){this.raw=e||new _h(t)}free(){this.raw&&this.raw.free(),this.raw=void 0}drainCollisionEvents(t){this.raw.drainCollisionEvents(t)}drainContactForceEvents(t){let e=new qh;this.raw.drainContactForceEvents(n=>{e.raw=n,t(e),e.free()})}clear(){this.raw.clear()}}var Ns;(function(i){i[i.NONE=0]="NONE",i[i.FILTER_CONTACT_PAIRS=1]="FILTER_CONTACT_PAIRS",i[i.FILTER_INTERSECTION_PAIRS=2]="FILTER_INTERSECTION_PAIRS"})(Ns||(Ns={}));var To;(function(i){i[i.EMPTY=0]="EMPTY",i[i.COMPUTE_IMPULSE=1]="COMPUTE_IMPULSE"})(To||(To={}));var Os;(function(i){i[i.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",i[i.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",i[i.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",i[i.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",i[i.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",i[i.FIXED_FIXED=32]="FIXED_FIXED",i[i.DEFAULT=15]="DEFAULT",i[i.ALL=60943]="ALL"})(Os||(Os={}));class Ro{constructor(t,e,n,r){this.colliderSet=t,this.handle=e,this._parent=n,this._shape=r}finalizeDeserialization(t){this.handle!=null&&(this._parent=t.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=Be.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return k.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}rotation(){return te.fromRaw(this.colliderSet.raw.coRotation(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(t){this.colliderSet.raw.coSetSensor(this.handle,t)}setShape(t){let e=t.intoRaw();this.colliderSet.raw.coSetShape(this.handle,e),e.free(),this._shape=t}setEnabled(t){this.colliderSet.raw.coSetEnabled(this.handle,t)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(t){this.colliderSet.raw.coSetRestitution(this.handle,t)}setFriction(t){this.colliderSet.raw.coSetFriction(this.handle,t)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(t){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,t)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(t){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,t)}setCollisionGroups(t){this.colliderSet.raw.coSetCollisionGroups(this.handle,t)}setSolverGroups(t){this.colliderSet.raw.coSetSolverGroups(this.handle,t)}contactSkin(){return this.colliderSet.raw.coContactSkin(this.handle)}setContactSkin(t){return this.colliderSet.raw.coSetContactSkin(this.handle,t)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(t){this.colliderSet.raw.coSetActiveHooks(this.handle,t)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(t){this.colliderSet.raw.coSetActiveEvents(this.handle,t)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(t){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,t)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(t){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,t)}setDensity(t){this.colliderSet.raw.coSetDensity(this.handle,t)}setMass(t){this.colliderSet.raw.coSetMass(this.handle,t)}setMassProperties(t,e,n,r){let s=k.intoRaw(e),a=k.intoRaw(n),o=te.intoRaw(r);this.colliderSet.raw.coSetMassProperties(this.handle,t,s,a,o),s.free(),a.free(),o.free()}setTranslation(t){this.colliderSet.raw.coSetTranslation(this.handle,t.x,t.y,t.z)}setTranslationWrtParent(t){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,t.x,t.y,t.z)}setRotation(t){this.colliderSet.raw.coSetRotation(this.handle,t.x,t.y,t.z,t.w)}setRotationWrtParent(t){this.colliderSet.raw.coSetRotationWrtParent(this.handle,t.x,t.y,t.z,t.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return k.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(t){const e=k.intoRaw(t);this.colliderSet.raw.coSetHalfExtents(this.handle,e)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(t){this.colliderSet.raw.coSetRadius(this.handle,t)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(t){this.colliderSet.raw.coSetRoundRadius(this.handle,t)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(t){this.colliderSet.raw.coSetHalfHeight(this.handle,t)}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let t=this.colliderSet.raw.coHeightfieldScale(this.handle);return k.fromRaw(t)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(t){let e=k.intoRaw(t),n=this.colliderSet.raw.coContainsPoint(this.handle,e);return e.free(),n}projectPoint(t,e){let n=k.intoRaw(t),r=Nr.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,n,e));return n.free(),r}intersectsRay(t,e){let n=k.intoRaw(t.origin),r=k.intoRaw(t.dir),s=this.colliderSet.raw.coIntersectsRay(this.handle,n,r,e);return n.free(),r.free(),s}castShape(t,e,n,r,s,a,o,l){let c=k.intoRaw(t),u=k.intoRaw(n),d=te.intoRaw(r),f=k.intoRaw(s),g=e.intoRaw(),b=cr.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,c,g,u,d,f,a,o,l));return c.free(),u.free(),d.free(),f.free(),g.free(),b}castCollider(t,e,n,r,s,a){let o=k.intoRaw(t),l=k.intoRaw(n),c=Br.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,o,e.handle,l,r,s,a));return o.free(),l.free(),c}intersectsShape(t,e,n){let r=k.intoRaw(e),s=te.intoRaw(n),a=t.intoRaw(),o=this.colliderSet.raw.coIntersectsShape(this.handle,a,r,s);return r.free(),s.free(),a.free(),o}contactShape(t,e,n,r){let s=k.intoRaw(e),a=te.intoRaw(n),o=t.intoRaw(),l=sr.fromRaw(this.colliderSet.raw.coContactShape(this.handle,o,s,a,r));return s.free(),a.free(),o.free(),l}contactCollider(t,e){return sr.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,t.handle,e))}castRay(t,e,n){let r=k.intoRaw(t.origin),s=k.intoRaw(t.dir),a=this.colliderSet.raw.coCastRay(this.handle,r,s,e,n);return r.free(),s.free(),a}castRayAndGetNormal(t,e,n){let r=k.intoRaw(t.origin),s=k.intoRaw(t.dir),a=Or.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,r,s,e,n));return r.free(),s.free(),a}}var Si;(function(i){i[i.Density=0]="Density",i[i.Mass=1]="Mass",i[i.MassProps=2]="MassProps"})(Si||(Si={}));class Ie{constructor(t){this.enabled=!0,this.shape=t,this.massPropsMode=Si.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=te.identity(),this.translation=k.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=Tr.Average,this.restitutionCombineRule=Tr.Average,this.activeCollisionTypes=Os.DEFAULT,this.activeEvents=Fs.NONE,this.activeHooks=Ns.NONE,this.mass=0,this.centerOfMass=k.zeros(),this.contactForceEventThreshold=0,this.contactSkin=0,this.principalAngularInertia=k.zeros(),this.angularInertiaLocalFrame=te.identity()}static ball(t){const e=new Zo(t);return new Ie(e)}static capsule(t,e){const n=new Jo(t,e);return new Ie(n)}static segment(t,e){const n=new Qo(t,e);return new Ie(n)}static triangle(t,e,n){const r=new tl(t,e,n);return new Ie(r)}static roundTriangle(t,e,n,r){const s=new el(t,e,n,r);return new Ie(s)}static polyline(t,e){const n=new nl(t,e);return new Ie(n)}static trimesh(t,e,n){const r=new il(t,e,n);return new Ie(r)}static cuboid(t,e,n){const r=new Ko(t,e,n);return new Ie(r)}static roundCuboid(t,e,n,r){const s=new $o(t,e,n,r);return new Ie(s)}static heightfield(t,e,n,r,s){const a=new rl(t,e,n,r,s);return new Ie(a)}static cylinder(t,e){const n=new sl(t,e);return new Ie(n)}static roundCylinder(t,e,n){const r=new al(t,e,n);return new Ie(r)}static cone(t,e){const n=new ol(t,e);return new Ie(n)}static roundCone(t,e,n){const r=new ll(t,e,n);return new Ie(r)}static convexHull(t){const e=new Ls(t,null);return new Ie(e)}static convexMesh(t,e){const n=new Ls(t,e);return new Ie(n)}static roundConvexHull(t,e){const n=new Us(t,null,e);return new Ie(n)}static roundConvexMesh(t,e,n){const r=new Us(t,e,n);return new Ie(r)}setTranslation(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:n},this}setRotation(t){return te.copy(this.rotation,t),this}setSensor(t){return this.isSensor=t,this}setEnabled(t){return this.enabled=t,this}setContactSkin(t){return this.contactSkin=t,this}setDensity(t){return this.massPropsMode=Si.Density,this.density=t,this}setMass(t){return this.massPropsMode=Si.Mass,this.mass=t,this}setMassProperties(t,e,n,r){return this.massPropsMode=Si.MassProps,this.mass=t,k.copy(this.centerOfMass,e),k.copy(this.principalAngularInertia,n),te.copy(this.angularInertiaLocalFrame,r),this}setRestitution(t){return this.restitution=t,this}setFriction(t){return this.friction=t,this}setFrictionCombineRule(t){return this.frictionCombineRule=t,this}setRestitutionCombineRule(t){return this.restitutionCombineRule=t,this}setCollisionGroups(t){return this.collisionGroups=t,this}setSolverGroups(t){return this.solverGroups=t,this}setActiveHooks(t){return this.activeHooks=t,this}setActiveEvents(t){return this.activeEvents=t,this}setActiveCollisionTypes(t){return this.activeCollisionTypes=t,this}setContactForceEventThreshold(t){return this.contactForceEventThreshold=t,this}}class Yh{constructor(t){this.raw=t||new Te,this.map=new Xs,t&&t.forEachColliderHandle(e=>{this.map.set(e,new Ro(this,e,null))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}castClosure(t){return e=>{if(t)return t(this.get(e))}}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createCollider(t,e,n){let r=n!=null&&n!=null;if(r&&isNaN(n))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let s=e.shape.intoRaw(),a=k.intoRaw(e.translation),o=te.intoRaw(e.rotation),l=k.intoRaw(e.centerOfMass),c=k.intoRaw(e.principalAngularInertia),u=te.intoRaw(e.angularInertiaLocalFrame),d=this.raw.createCollider(e.enabled,s,a,o,e.massPropsMode,e.mass,l,c,u,e.density,e.friction,e.restitution,e.frictionCombineRule,e.restitutionCombineRule,e.isSensor,e.collisionGroups,e.solverGroups,e.activeCollisionTypes,e.activeHooks,e.activeEvents,e.contactForceEventThreshold,e.contactSkin,r,r?n:0,t.raw);s.free(),a.free(),o.free(),l.free(),c.free(),u.free();let f=r?t.get(n):null,g=new Ro(this,d,f,e.shape);return this.map.set(d,g),g}remove(t,e,n,r){this.raw.remove(t,e.raw,n.raw,r),this.unmap(t)}unmap(t){this.map.delete(t)}get(t){return this.map.get(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}}function Vg(){return Eg()}const cl=Object.freeze(Object.defineProperty({__proto__:null,get ActiveCollisionTypes(){return Os},get ActiveEvents(){return Fs},get ActiveHooks(){return Ns},Ball:Zo,BroadPhase:Fh,CCDSolver:Lh,Capsule:Jo,CharacterCollision:Vh,get CoefficientCombineRule(){return Tr},Collider:Ro,ColliderDesc:Ie,ColliderSet:Yh,ColliderShapeCastHit:Br,Cone:ol,ConvexPolyhedron:Ls,Cuboid:Ko,Cylinder:sl,DebugRenderBuffers:kh,DebugRenderPipeline:Gh,DynamicRayCastVehicleController:Xh,EventQueue:Gg,get FeatureType(){return ar},FixedImpulseJoint:bh,FixedMultibodyJoint:Ah,GenericImpulseJoint:Eh,HalfSpace:Bh,get HeightFieldFlags(){return So},Heightfield:rl,ImpulseJoint:xn,ImpulseJointSet:Rh,IntegrationParameters:vh,IslandManager:Uh,get JointAxesMask(){return xo},JointData:Nn,get JointType(){return We},KinematicCharacterController:Wh,get MassPropsMode(){return Si},get MotorModel(){return bo},MultibodyJoint:ci,MultibodyJointSet:Dh,NarrowPhase:Nh,PhysicsPipeline:zh,PointColliderProjection:Rr,PointProjection:Nr,Polyline:nl,PrismaticImpulseJoint:yh,PrismaticMultibodyJoint:Ch,Quaternion:go,get QueryFilterFlags(){return Mo},QueryPipeline:Hh,Ray:kg,RayColliderHit:qs,RayColliderIntersection:Ar,RayIntersection:Or,RevoluteImpulseJoint:Mh,RevoluteMultibodyJoint:Ph,RigidBody:vo,RigidBodyDesc:Sn,RigidBodySet:wh,get RigidBodyType(){return wn},RopeImpulseJoint:xh,RotationOps:te,RoundCone:ll,RoundConvexPolyhedron:Us,RoundCuboid:$o,RoundCylinder:al,RoundTriangle:el,SdpMatrix3:gh,SdpMatrix3Ops:wo,Segment:Qo,SerializationPipeline:Eo,Shape:Be,ShapeCastHit:cr,ShapeContact:sr,get ShapeType(){return Le},get SolverFlags(){return To},SphericalImpulseJoint:Th,SphericalMultibodyJoint:Ih,SpringImpulseJoint:Sh,TempContactForceEvent:qh,TempContactManifold:Oh,TriMesh:il,get TriMeshFlags(){return yo},Triangle:tl,UnitImpulseJoint:Yo,UnitMultibodyJoint:jo,Vector3:mh,VectorOps:k,World:Ys,version:Vg},Symbol.toStringTag,{value:"Module"}));/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var hn=Uint8Array,ji=Uint16Array,Wg=Int32Array,jh=new hn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Zh=new hn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Xg=new hn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Kh=function(i,t){for(var e=new ji(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var r=new Wg(e[30]),n=1;n<30;++n)for(var s=e[n];s<e[n+1];++s)r[s]=s-e[n]<<5|n;return{b:e,r}},$h=Kh(jh,2),Jh=$h.b,qg=$h.r;Jh[28]=258,qg[258]=28;var Yg=Kh(Zh,0),jg=Yg.b,Ao=new ji(32768);for(var ye=0;ye<32768;++ye){var ei=(ye&43690)>>1|(ye&21845)<<1;ei=(ei&52428)>>2|(ei&13107)<<2,ei=(ei&61680)>>4|(ei&3855)<<4,Ao[ye]=((ei&65280)>>8|(ei&255)<<8)>>1}var yr=function(i,t,e){for(var n=i.length,r=0,s=new ji(t);r<n;++r)i[r]&&++s[i[r]-1];var a=new ji(t);for(r=1;r<t;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(e){o=new ji(1<<t);var l=15-t;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=t-i[r],d=a[i[r]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)o[Ao[d]>>l]=c}else for(o=new ji(n),r=0;r<n;++r)i[r]&&(o[r]=Ao[a[i[r]-1]++]>>15-i[r]);return o},zr=new hn(288);for(var ye=0;ye<144;++ye)zr[ye]=8;for(var ye=144;ye<256;++ye)zr[ye]=9;for(var ye=256;ye<280;++ye)zr[ye]=7;for(var ye=280;ye<288;++ye)zr[ye]=8;var Qh=new hn(32);for(var ye=0;ye<32;++ye)Qh[ye]=5;var Zg=yr(zr,9,1),Kg=yr(Qh,5,1),Ra=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},gn=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},Aa=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},$g=function(i){return(i+7)/8|0},Jg=function(i,t,e){return(e==null||e>i.length)&&(e=i.length),new hn(i.subarray(t,e))},Qg=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],vn=function(i,t,e){var n=new Error(t||Qg[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,vn),!e)throw n;return n},tw=function(i,t,e,n){var r=i.length,s=0;if(!r||t.f&&!t.l)return e||new hn(0);var a=!e,o=a||t.i!=2,l=t.i;a&&(e=new hn(r*3));var c=function(we){var _e=e.length;if(we>_e){var Jt=new hn(Math.max(_e*2,we));Jt.set(e),e=Jt}},u=t.f||0,d=t.p||0,f=t.b||0,g=t.l,b=t.d,y=t.m,w=t.n,m=r*8;do{if(!g){u=gn(i,d,1);var U=gn(i,d+1,3);if(d+=3,U)if(U==1)g=Zg,b=Kg,y=9,w=5;else if(U==2){var O=gn(i,d,31)+257,z=gn(i,d+10,15)+4,q=O+gn(i,d+5,31)+1;d+=14;for(var T=new hn(q),S=new hn(19),N=0;N<z;++N)S[Xg[N]]=gn(i,d+N*3,7);d+=z*3;for(var tt=Ra(S),$=(1<<tt)-1,nt=yr(S,tt,1),N=0;N<q;){var dt=nt[gn(i,d,$)];d+=dt&15;var P=dt>>4;if(P<16)T[N++]=P;else{var et=0,ft=0;for(P==16?(ft=3+gn(i,d,3),d+=2,et=T[N-1]):P==17?(ft=3+gn(i,d,7),d+=3):P==18&&(ft=11+gn(i,d,127),d+=7);ft--;)T[N++]=et}}var Q=T.subarray(0,O),wt=T.subarray(O);y=Ra(Q),w=Ra(wt),g=yr(Q,y,1),b=yr(wt,w,1)}else vn(1);else{var P=$g(d)+4,R=i[P-4]|i[P-3]<<8,X=P+R;if(X>r){l&&vn(0);break}o&&c(f+R),e.set(i.subarray(P,X),f),t.b=f+=R,t.p=d=X*8,t.f=u;continue}if(d>m){l&&vn(0);break}}o&&c(f+131072);for(var bt=(1<<y)-1,Lt=(1<<w)-1,Wt=d;;Wt=d){var et=g[Aa(i,d)&bt],ee=et>>4;if(d+=et&15,d>m){l&&vn(0);break}if(et||vn(2),ee<256)e[f++]=ee;else if(ee==256){Wt=d,g=null;break}else{var it=ee-254;if(ee>264){var N=ee-257,_t=jh[N];it=gn(i,d,(1<<_t)-1)+Jh[N],d+=_t}var mt=b[Aa(i,d)&Lt],vt=mt>>4;mt||vn(3),d+=mt&15;var wt=jg[vt];if(vt>3){var _t=Zh[vt];wt+=Aa(i,d)&(1<<_t)-1,d+=_t}if(d>m){l&&vn(0);break}o&&c(f+131072);var Ut=f+it;if(f<wt){var ie=s-wt,Xt=Math.min(wt,Ut);for(ie+f<0&&vn(3);f<Xt;++f)e[f]=n[ie+f]}for(;f<Ut;++f)e[f]=e[f-wt]}}t.l=g,t.p=Wt,t.b=f,t.f=u,g&&(u=1,t.m=y,t.d=b,t.n=w)}while(!u);return f!=e.length&&a?Jg(e,0,f):e.subarray(0,f)},ew=new hn(0),nw=function(i,t){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&vn(6,"invalid zlib data"),(i[1]>>5&1)==1&&vn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function ws(i,t){return tw(i.subarray(nw(i),-4),{i:2},t,t)}var iw=typeof TextDecoder<"u"&&new TextDecoder,rw=0;try{iw.decode(ew,{stream:!0}),rw=1}catch{}class sw extends Ud{constructor(t){super(t),this.type=kn}parse(t){const T=Math.pow(2.7182818,2.2);function S(p,x){let I=0;for(let M=0;M<65536;++M)(M==0||p[M>>3]&1<<(M&7))&&(x[I++]=M);const _=I-1;for(;I<65536;)x[I++]=0;return _}function N(p){for(let x=0;x<16384;x++)p[x]={},p[x].len=0,p[x].lit=0,p[x].p=null}const tt={l:0,c:0,lc:0};function $(p,x,I,_,M){for(;I<p;)x=x<<8|Tt(_,M),I+=8;I-=p,tt.l=x>>I&(1<<p)-1,tt.c=x,tt.lc=I}const nt=new Array(59);function dt(p){for(let I=0;I<=58;++I)nt[I]=0;for(let I=0;I<65537;++I)nt[p[I]]+=1;let x=0;for(let I=58;I>0;--I){const _=x+nt[I]>>1;nt[I]=x,x=_}for(let I=0;I<65537;++I){const _=p[I];_>0&&(p[I]=_|nt[_]++<<6)}}function et(p,x,I,_,M,E){const D=x;let C=0,B=0;for(;_<=M;_++){if(D.value-x.value>I)return!1;$(6,C,B,p,D);const V=tt.l;if(C=tt.c,B=tt.lc,E[_]=V,V==63){if(D.value-x.value>I)throw new Error("Something wrong with hufUnpackEncTable");$(8,C,B,p,D);let W=tt.l+6;if(C=tt.c,B=tt.lc,_+W>M+1)throw new Error("Something wrong with hufUnpackEncTable");for(;W--;)E[_++]=0;_--}else if(V>=59){let W=V-59+2;if(_+W>M+1)throw new Error("Something wrong with hufUnpackEncTable");for(;W--;)E[_++]=0;_--}}dt(E)}function ft(p){return p&63}function Q(p){return p>>6}function wt(p,x,I,_){for(;x<=I;x++){const M=Q(p[x]),E=ft(p[x]);if(M>>E)throw new Error("Invalid table entry");if(E>14){const D=_[M>>E-14];if(D.len)throw new Error("Invalid table entry");if(D.lit++,D.p){const C=D.p;D.p=new Array(D.lit);for(let B=0;B<D.lit-1;++B)D.p[B]=C[B]}else D.p=new Array(1);D.p[D.lit-1]=x}else if(E){let D=0;for(let C=1<<14-E;C>0;C--){const B=_[(M<<14-E)+D];if(B.len||B.p)throw new Error("Invalid table entry");B.len=E,B.lit=x,D++}}}return!0}const bt={c:0,lc:0};function Lt(p,x,I,_){p=p<<8|Tt(I,_),x+=8,bt.c=p,bt.lc=x}const Wt={c:0,lc:0};function ee(p,x,I,_,M,E,D,C,B){if(p==x){_<8&&(Lt(I,_,M,E),I=bt.c,_=bt.lc),_-=8;let V=I>>_;if(V=new Uint8Array([V])[0],C.value+V>B)return!1;const W=D[C.value-1];for(;V-- >0;)D[C.value++]=W}else if(C.value<B)D[C.value++]=p;else return!1;Wt.c=I,Wt.lc=_}function it(p){return p&65535}function _t(p){const x=it(p);return x>32767?x-65536:x}const mt={a:0,b:0};function vt(p,x){const I=_t(p),M=_t(x),E=I+(M&1)+(M>>1),D=E,C=E-M;mt.a=D,mt.b=C}function Ut(p,x){const I=it(p),_=it(x),M=I-(_>>1)&65535,E=_+M-32768&65535;mt.a=E,mt.b=M}function ie(p,x,I,_,M,E,D){const C=D<16384,B=I>M?M:I;let V=1,W,Z;for(;V<=B;)V<<=1;for(V>>=1,W=V,V>>=1;V>=1;){Z=0;const st=Z+E*(M-W),at=E*V,ct=E*W,ut=_*V,pt=_*W;let Ct,kt,Bt,At;for(;Z<=st;Z+=ct){let Kt=Z;const Pt=Z+_*(I-W);for(;Kt<=Pt;Kt+=pt){const fe=Kt+ut,Ue=Kt+at,he=Ue+ut;C?(vt(p[Kt+x],p[Ue+x]),Ct=mt.a,Bt=mt.b,vt(p[fe+x],p[he+x]),kt=mt.a,At=mt.b,vt(Ct,kt),p[Kt+x]=mt.a,p[fe+x]=mt.b,vt(Bt,At),p[Ue+x]=mt.a,p[he+x]=mt.b):(Ut(p[Kt+x],p[Ue+x]),Ct=mt.a,Bt=mt.b,Ut(p[fe+x],p[he+x]),kt=mt.a,At=mt.b,Ut(Ct,kt),p[Kt+x]=mt.a,p[fe+x]=mt.b,Ut(Bt,At),p[Ue+x]=mt.a,p[he+x]=mt.b)}if(I&V){const fe=Kt+at;C?vt(p[Kt+x],p[fe+x]):Ut(p[Kt+x],p[fe+x]),Ct=mt.a,p[fe+x]=mt.b,p[Kt+x]=Ct}}if(M&V){let Kt=Z;const Pt=Z+_*(I-W);for(;Kt<=Pt;Kt+=pt){const fe=Kt+ut;C?vt(p[Kt+x],p[fe+x]):Ut(p[Kt+x],p[fe+x]),Ct=mt.a,p[fe+x]=mt.b,p[Kt+x]=Ct}}W=V,V>>=1}return Z}function Xt(p,x,I,_,M,E,D,C,B){let V=0,W=0;const Z=D,st=Math.trunc(_.value+(M+7)/8);for(;_.value<st;)for(Lt(V,W,I,_),V=bt.c,W=bt.lc;W>=14;){const ct=V>>W-14&16383,ut=x[ct];if(ut.len)W-=ut.len,ee(ut.lit,E,V,W,I,_,C,B,Z),V=Wt.c,W=Wt.lc;else{if(!ut.p)throw new Error("hufDecode issues");let pt;for(pt=0;pt<ut.lit;pt++){const Ct=ft(p[ut.p[pt]]);for(;W<Ct&&_.value<st;)Lt(V,W,I,_),V=bt.c,W=bt.lc;if(W>=Ct&&Q(p[ut.p[pt]])==(V>>W-Ct&(1<<Ct)-1)){W-=Ct,ee(ut.p[pt],E,V,W,I,_,C,B,Z),V=Wt.c,W=Wt.lc;break}}if(pt==ut.lit)throw new Error("hufDecode issues")}}const at=8-M&7;for(V>>=at,W-=at;W>0;){const ct=x[V<<14-W&16383];if(ct.len)W-=ct.len,ee(ct.lit,E,V,W,I,_,C,B,Z),V=Wt.c,W=Wt.lc;else throw new Error("hufDecode issues")}return!0}function we(p,x,I,_,M,E){const D={value:0},C=I.value,B=Nt(x,I),V=Nt(x,I);I.value+=4;const W=Nt(x,I);if(I.value+=4,B<0||B>=65537||V<0||V>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const Z=new Array(65537),st=new Array(16384);N(st);const at=_-(I.value-C);if(et(p,I,at,B,V,Z),W>8*(_-(I.value-C)))throw new Error("Something wrong with hufUncompress");wt(Z,B,V,st),Xt(Z,st,p,I,W,V,E,M,D)}function _e(p,x,I){for(let _=0;_<I;++_)x[_]=p[x[_]]}function Jt(p){for(let x=1;x<p.length;x++){const I=p[x-1]+p[x]-128;p[x]=I}}function F(p,x){let I=0,_=Math.floor((p.length+1)/2),M=0;const E=p.length-1;for(;!(M>E||(x[M++]=p[I++],M>E));)x[M++]=p[_++]}function Ye(p){let x=p.byteLength;const I=new Array;let _=0;const M=new DataView(p);for(;x>0;){const E=M.getInt8(_++);if(E<0){const D=-E;x-=D+1;for(let C=0;C<D;C++)I.push(M.getUint8(_++))}else{const D=E;x-=2;const C=M.getUint8(_++);for(let B=0;B<D+1;B++)I.push(C)}}return I}function re(p,x,I,_,M,E){let D=new DataView(E.buffer);const C=I[p.idx[0]].width,B=I[p.idx[0]].height,V=3,W=Math.floor(C/8),Z=Math.ceil(C/8),st=Math.ceil(B/8),at=C-(Z-1)*8,ct=B-(st-1)*8,ut={value:0},pt=new Array(V),Ct=new Array(V),kt=new Array(V),Bt=new Array(V),At=new Array(V);for(let Pt=0;Pt<V;++Pt)At[Pt]=x[p.idx[Pt]],pt[Pt]=Pt<1?0:pt[Pt-1]+Z*st,Ct[Pt]=new Float32Array(64),kt[Pt]=new Uint16Array(64),Bt[Pt]=new Uint16Array(Z*64);for(let Pt=0;Pt<st;++Pt){let fe=8;Pt==st-1&&(fe=ct);let Ue=8;for(let le=0;le<Z;++le){le==Z-1&&(Ue=at);for(let Gt=0;Gt<V;++Gt)kt[Gt].fill(0),kt[Gt][0]=M[pt[Gt]++],se(ut,_,kt[Gt]),zt(kt[Gt],Ct[Gt]),ve(Ct[Gt]);Ot(Ct);for(let Gt=0;Gt<V;++Gt)A(Ct[Gt],Bt[Gt],le*64)}let he=0;for(let le=0;le<V;++le){const Gt=I[p.idx[le]].type;for(let Re=8*Pt;Re<8*Pt+fe;++Re){he=At[le][Re];for(let He=0;He<W;++He){const xe=He*64+(Re&7)*8;D.setUint16(he+0*2*Gt,Bt[le][xe+0],!0),D.setUint16(he+1*2*Gt,Bt[le][xe+1],!0),D.setUint16(he+2*2*Gt,Bt[le][xe+2],!0),D.setUint16(he+3*2*Gt,Bt[le][xe+3],!0),D.setUint16(he+4*2*Gt,Bt[le][xe+4],!0),D.setUint16(he+5*2*Gt,Bt[le][xe+5],!0),D.setUint16(he+6*2*Gt,Bt[le][xe+6],!0),D.setUint16(he+7*2*Gt,Bt[le][xe+7],!0),he+=8*2*Gt}}if(W!=Z)for(let Re=8*Pt;Re<8*Pt+fe;++Re){const He=At[le][Re]+8*W*2*Gt,xe=W*64+(Re&7)*8;for(let Fe=0;Fe<Ue;++Fe)D.setUint16(He+Fe*2*Gt,Bt[le][xe+Fe],!0)}}}const Kt=new Uint16Array(C);D=new DataView(E.buffer);for(let Pt=0;Pt<V;++Pt){I[p.idx[Pt]].decoded=!0;const fe=I[p.idx[Pt]].type;if(I[Pt].type==2)for(let Ue=0;Ue<B;++Ue){const he=At[Pt][Ue];for(let le=0;le<C;++le)Kt[le]=D.getUint16(he+le*2*fe,!0);for(let le=0;le<C;++le)D.setFloat32(he+le*2*fe,j(Kt[le]),!0)}}}function se(p,x,I){let _,M=1;for(;M<64;)_=x[p.value],_==65280?M=64:_>>8==255?M+=_&255:(I[M]=_,M++),p.value++}function zt(p,x){x[0]=j(p[0]),x[1]=j(p[1]),x[2]=j(p[5]),x[3]=j(p[6]),x[4]=j(p[14]),x[5]=j(p[15]),x[6]=j(p[27]),x[7]=j(p[28]),x[8]=j(p[2]),x[9]=j(p[4]),x[10]=j(p[7]),x[11]=j(p[13]),x[12]=j(p[16]),x[13]=j(p[26]),x[14]=j(p[29]),x[15]=j(p[42]),x[16]=j(p[3]),x[17]=j(p[8]),x[18]=j(p[12]),x[19]=j(p[17]),x[20]=j(p[25]),x[21]=j(p[30]),x[22]=j(p[41]),x[23]=j(p[43]),x[24]=j(p[9]),x[25]=j(p[11]),x[26]=j(p[18]),x[27]=j(p[24]),x[28]=j(p[31]),x[29]=j(p[40]),x[30]=j(p[44]),x[31]=j(p[53]),x[32]=j(p[10]),x[33]=j(p[19]),x[34]=j(p[23]),x[35]=j(p[32]),x[36]=j(p[39]),x[37]=j(p[45]),x[38]=j(p[52]),x[39]=j(p[54]),x[40]=j(p[20]),x[41]=j(p[22]),x[42]=j(p[33]),x[43]=j(p[38]),x[44]=j(p[46]),x[45]=j(p[51]),x[46]=j(p[55]),x[47]=j(p[60]),x[48]=j(p[21]),x[49]=j(p[34]),x[50]=j(p[37]),x[51]=j(p[47]),x[52]=j(p[50]),x[53]=j(p[56]),x[54]=j(p[59]),x[55]=j(p[61]),x[56]=j(p[35]),x[57]=j(p[36]),x[58]=j(p[48]),x[59]=j(p[49]),x[60]=j(p[57]),x[61]=j(p[58]),x[62]=j(p[62]),x[63]=j(p[63])}function ve(p){const x=.5*Math.cos(.7853975),I=.5*Math.cos(3.14159/16),_=.5*Math.cos(3.14159/8),M=.5*Math.cos(3*3.14159/16),E=.5*Math.cos(5*3.14159/16),D=.5*Math.cos(3*3.14159/8),C=.5*Math.cos(7*3.14159/16),B=new Array(4),V=new Array(4),W=new Array(4),Z=new Array(4);for(let st=0;st<8;++st){const at=st*8;B[0]=_*p[at+2],B[1]=D*p[at+2],B[2]=_*p[at+6],B[3]=D*p[at+6],V[0]=I*p[at+1]+M*p[at+3]+E*p[at+5]+C*p[at+7],V[1]=M*p[at+1]-C*p[at+3]-I*p[at+5]-E*p[at+7],V[2]=E*p[at+1]-I*p[at+3]+C*p[at+5]+M*p[at+7],V[3]=C*p[at+1]-E*p[at+3]+M*p[at+5]-I*p[at+7],W[0]=x*(p[at+0]+p[at+4]),W[3]=x*(p[at+0]-p[at+4]),W[1]=B[0]+B[3],W[2]=B[1]-B[2],Z[0]=W[0]+W[1],Z[1]=W[3]+W[2],Z[2]=W[3]-W[2],Z[3]=W[0]-W[1],p[at+0]=Z[0]+V[0],p[at+1]=Z[1]+V[1],p[at+2]=Z[2]+V[2],p[at+3]=Z[3]+V[3],p[at+4]=Z[3]-V[3],p[at+5]=Z[2]-V[2],p[at+6]=Z[1]-V[1],p[at+7]=Z[0]-V[0]}for(let st=0;st<8;++st)B[0]=_*p[16+st],B[1]=D*p[16+st],B[2]=_*p[48+st],B[3]=D*p[48+st],V[0]=I*p[8+st]+M*p[24+st]+E*p[40+st]+C*p[56+st],V[1]=M*p[8+st]-C*p[24+st]-I*p[40+st]-E*p[56+st],V[2]=E*p[8+st]-I*p[24+st]+C*p[40+st]+M*p[56+st],V[3]=C*p[8+st]-E*p[24+st]+M*p[40+st]-I*p[56+st],W[0]=x*(p[st]+p[32+st]),W[3]=x*(p[st]-p[32+st]),W[1]=B[0]+B[3],W[2]=B[1]-B[2],Z[0]=W[0]+W[1],Z[1]=W[3]+W[2],Z[2]=W[3]-W[2],Z[3]=W[0]-W[1],p[0+st]=Z[0]+V[0],p[8+st]=Z[1]+V[1],p[16+st]=Z[2]+V[2],p[24+st]=Z[3]+V[3],p[32+st]=Z[3]-V[3],p[40+st]=Z[2]-V[2],p[48+st]=Z[1]-V[1],p[56+st]=Z[0]-V[0]}function Ot(p){for(let x=0;x<64;++x){const I=p[0][x],_=p[1][x],M=p[2][x];p[0][x]=I+1.5747*M,p[1][x]=I-.1873*_-.4682*M,p[2][x]=I+1.8556*_}}function A(p,x,I){for(let _=0;_<64;++_)x[I+_]=Pl.toHalfFloat(v(p[_]))}function v(p){return p<=1?Math.sign(p)*Math.pow(Math.abs(p),2.2):Math.sign(p)*Math.pow(T,Math.abs(p)-1)}function Y(p){return new DataView(p.array.buffer,p.offset.value,p.size)}function ot(p){const x=p.viewer.buffer.slice(p.offset.value,p.offset.value+p.size),I=new Uint8Array(Ye(x)),_=new Uint8Array(I.length);return Jt(I),F(I,_),new DataView(_.buffer)}function ht(p){const x=p.array.slice(p.offset.value,p.offset.value+p.size),I=ws(x),_=new Uint8Array(I.length);return Jt(I),F(I,_),new DataView(_.buffer)}function rt(p){const x=p.viewer,I={value:p.offset.value},_=new Uint16Array(p.columns*p.lines*(p.inputChannels.length*p.type)),M=new Uint8Array(8192);let E=0;const D=new Array(p.inputChannels.length);for(let ct=0,ut=p.inputChannels.length;ct<ut;ct++)D[ct]={},D[ct].start=E,D[ct].end=D[ct].start,D[ct].nx=p.columns,D[ct].ny=p.lines,D[ct].size=p.type,E+=D[ct].nx*D[ct].ny*D[ct].size;const C=J(x,I),B=J(x,I);if(B>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(C<=B)for(let ct=0;ct<B-C+1;ct++)M[ct+C]=Yt(x,I);const V=new Uint16Array(65536),W=S(M,V),Z=Nt(x,I);we(p.array,x,I,Z,_,E);for(let ct=0;ct<p.inputChannels.length;++ct){const ut=D[ct];for(let pt=0;pt<D[ct].size;++pt)ie(_,ut.start+pt,ut.nx,ut.size,ut.ny,ut.nx*ut.size,W)}_e(V,_,E);let st=0;const at=new Uint8Array(_.buffer.byteLength);for(let ct=0;ct<p.lines;ct++)for(let ut=0;ut<p.inputChannels.length;ut++){const pt=D[ut],Ct=pt.nx*pt.size,kt=new Uint8Array(_.buffer,pt.end*2,Ct*2);at.set(kt,st),st+=Ct*2,pt.end+=Ct}return new DataView(at.buffer)}function Ft(p){const x=p.array.slice(p.offset.value,p.offset.value+p.size),I=ws(x),_=p.inputChannels.length*p.lines*p.columns*p.totalBytes,M=new ArrayBuffer(_),E=new DataView(M);let D=0,C=0;const B=new Array(4);for(let V=0;V<p.lines;V++)for(let W=0;W<p.inputChannels.length;W++){let Z=0;switch(p.inputChannels[W].pixelType){case 1:B[0]=D,B[1]=B[0]+p.columns,D=B[1]+p.columns;for(let at=0;at<p.columns;++at){const ct=I[B[0]++]<<8|I[B[1]++];Z+=ct,E.setUint16(C,Z,!0),C+=2}break;case 2:B[0]=D,B[1]=B[0]+p.columns,B[2]=B[1]+p.columns,D=B[2]+p.columns;for(let at=0;at<p.columns;++at){const ct=I[B[0]++]<<24|I[B[1]++]<<16|I[B[2]++]<<8;Z+=ct,E.setUint32(C,Z,!0),C+=4}break}}return E}function St(p){const x=p.viewer,I={value:p.offset.value},_=new Uint8Array(p.columns*p.lines*(p.inputChannels.length*p.type*2)),M={version:Ht(x,I),unknownUncompressedSize:Ht(x,I),unknownCompressedSize:Ht(x,I),acCompressedSize:Ht(x,I),dcCompressedSize:Ht(x,I),rleCompressedSize:Ht(x,I),rleUncompressedSize:Ht(x,I),rleRawSize:Ht(x,I),totalAcUncompressedCount:Ht(x,I),totalDcUncompressedCount:Ht(x,I),acCompression:Ht(x,I)};if(M.version<2)throw new Error("EXRLoader.parse: "+An.compression+" version "+M.version+" is unsupported");const E=new Array;let D=J(x,I)-2;for(;D>0;){const ut=Et(x.buffer,I),pt=Yt(x,I),Ct=pt>>2&3,kt=(pt>>4)-1,Bt=new Int8Array([kt])[0],At=Yt(x,I);E.push({name:ut,index:Bt,type:At,compression:Ct}),D-=ut.length+3}const C=An.channels,B=new Array(p.inputChannels.length);for(let ut=0;ut<p.inputChannels.length;++ut){const pt=B[ut]={},Ct=C[ut];pt.name=Ct.name,pt.compression=0,pt.decoded=!1,pt.type=Ct.pixelType,pt.pLinear=Ct.pLinear,pt.width=p.columns,pt.height=p.lines}const V={idx:new Array(3)};for(let ut=0;ut<p.inputChannels.length;++ut){const pt=B[ut];for(let Ct=0;Ct<E.length;++Ct){const kt=E[Ct];pt.name==kt.name&&(pt.compression=kt.compression,kt.index>=0&&(V.idx[kt.index]=ut),pt.offset=ut)}}let W,Z,st;if(M.acCompressedSize>0)switch(M.acCompression){case 0:W=new Uint16Array(M.totalAcUncompressedCount),we(p.array,x,I,M.acCompressedSize,W,M.totalAcUncompressedCount);break;case 1:const ut=p.array.slice(I.value,I.value+M.totalAcUncompressedCount),pt=ws(ut);W=new Uint16Array(pt.buffer),I.value+=M.totalAcUncompressedCount;break}if(M.dcCompressedSize>0){const ut={array:p.array,offset:I,size:M.dcCompressedSize};Z=new Uint16Array(ht(ut).buffer),I.value+=M.dcCompressedSize}if(M.rleRawSize>0){const ut=p.array.slice(I.value,I.value+M.rleCompressedSize),pt=ws(ut);st=Ye(pt.buffer),I.value+=M.rleCompressedSize}let at=0;const ct=new Array(B.length);for(let ut=0;ut<ct.length;++ut)ct[ut]=new Array;for(let ut=0;ut<p.lines;++ut)for(let pt=0;pt<B.length;++pt)ct[pt].push(at),at+=B[pt].width*p.type*2;re(V,ct,B,W,Z,_);for(let ut=0;ut<B.length;++ut){const pt=B[ut];if(!pt.decoded)switch(pt.compression){case 2:let Ct=0,kt=0;for(let Bt=0;Bt<p.lines;++Bt){let At=ct[ut][Ct];for(let Kt=0;Kt<pt.width;++Kt){for(let Pt=0;Pt<2*pt.type;++Pt)_[At++]=st[kt+Pt*pt.width*pt.height];kt++}Ct++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(_.buffer)}function Et(p,x){const I=new Uint8Array(p);let _=0;for(;I[x.value+_]!=0;)_+=1;const M=new TextDecoder().decode(I.slice(x.value,x.value+_));return x.value=x.value+_+1,M}function oe(p,x,I){const _=new TextDecoder().decode(new Uint8Array(p).slice(x.value,x.value+I));return x.value=x.value+I,_}function gt(p,x){const I=It(p,x),_=Nt(p,x);return[I,_]}function Rt(p,x){const I=Nt(p,x),_=Nt(p,x);return[I,_]}function It(p,x){const I=p.getInt32(x.value,!0);return x.value=x.value+4,I}function Nt(p,x){const I=p.getUint32(x.value,!0);return x.value=x.value+4,I}function Tt(p,x){const I=p[x.value];return x.value=x.value+1,I}function Yt(p,x){const I=p.getUint8(x.value);return x.value=x.value+1,I}const Ht=function(p,x){let I;return"getBigInt64"in DataView.prototype?I=Number(p.getBigInt64(x.value,!0)):I=p.getUint32(x.value+4,!0)+Number(p.getUint32(x.value,!0)<<32),x.value+=8,I};function jt(p,x){const I=p.getFloat32(x.value,!0);return x.value+=4,I}function H(p,x){return Pl.toHalfFloat(jt(p,x))}function j(p){const x=(p&31744)>>10,I=p&1023;return(p>>15?-1:1)*(x?x===31?I?NaN:1/0:Math.pow(2,x-15)*(1+I/1024):6103515625e-14*(I/1024))}function J(p,x){const I=p.getUint16(x.value,!0);return x.value+=2,I}function lt(p,x){return j(J(p,x))}function Mt(p,x,I,_){const M=I.value,E=[];for(;I.value<M+_-1;){const D=Et(x,I),C=It(p,I),B=Yt(p,I);I.value+=3;const V=It(p,I),W=It(p,I);E.push({name:D,pixelType:C,pLinear:B,xSampling:V,ySampling:W})}return I.value+=1,E}function yt(p,x){const I=jt(p,x),_=jt(p,x),M=jt(p,x),E=jt(p,x),D=jt(p,x),C=jt(p,x),B=jt(p,x),V=jt(p,x);return{redX:I,redY:_,greenX:M,greenY:E,blueX:D,blueY:C,whiteX:B,whiteY:V}}function Zt(p,x){const I=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],_=Yt(p,x);return I[_]}function Me(p,x){const I=It(p,x),_=It(p,x),M=It(p,x),E=It(p,x);return{xMin:I,yMin:_,xMax:M,yMax:E}}function ze(p,x){const I=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],_=Yt(p,x);return I[_]}function de(p,x){const I=["ENVMAP_LATLONG","ENVMAP_CUBE"],_=Yt(p,x);return I[_]}function tn(p,x){const I=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],_=["ROUND_DOWN","ROUND_UP"],M=Nt(p,x),E=Nt(p,x),D=Yt(p,x);return{xSize:M,ySize:E,levelMode:I[D&15],roundingMode:_[D>>4]}}function fn(p,x){const I=jt(p,x),_=jt(p,x);return[I,_]}function Hr(p,x){const I=jt(p,x),_=jt(p,x),M=jt(p,x);return[I,_,M]}function kr(p,x,I,_,M){if(_==="string"||_==="stringvector"||_==="iccProfile")return oe(x,I,M);if(_==="chlist")return Mt(p,x,I,M);if(_==="chromaticities")return yt(p,I);if(_==="compression")return Zt(p,I);if(_==="box2i")return Me(p,I);if(_==="envmap")return de(p,I);if(_==="tiledesc")return tn(p,I);if(_==="lineOrder")return ze(p,I);if(_==="float")return jt(p,I);if(_==="v2f")return fn(p,I);if(_==="v3f")return Hr(p,I);if(_==="int")return It(p,I);if(_==="rational")return gt(p,I);if(_==="timecode")return Rt(p,I);if(_==="preview")return I.value+=M,"skipped";I.value+=M}function Rn(p,x){const I=Math.log2(p);return x=="ROUND_DOWN"?Math.floor(I):Math.ceil(I)}function hr(p,x,I){let _=0;switch(p.levelMode){case"ONE_LEVEL":_=1;break;case"MIPMAP_LEVELS":_=Rn(Math.max(x,I),p.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return _}function ur(p,x,I,_){const M=new Array(p);for(let E=0;E<p;E++){const D=1<<E;let C=x/D|0;_=="ROUND_UP"&&C*D<x&&(C+=1);const B=Math.max(C,1);M[E]=(B+I-1)/I|0}return M}function Gr(){const p=this,x=p.offset,I={value:0};for(let _=0;_<p.tileCount;_++){const M=It(p.viewer,x),E=It(p.viewer,x);x.value+=8,p.size=Nt(p.viewer,x);const D=M*p.blockWidth,C=E*p.blockHeight;p.columns=D+p.blockWidth>p.width?p.width-D:p.blockWidth,p.lines=C+p.blockHeight>p.height?p.height-C:p.blockHeight;const B=p.columns*p.totalBytes,W=p.size<p.lines*B?p.uncompress(p):Y(p);x.value+=p.size;for(let Z=0;Z<p.lines;Z++){const st=Z*p.columns*p.totalBytes;for(let at=0;at<p.inputChannels.length;at++){const ct=An.channels[at].name,ut=p.channelByteOffsets[ct]*p.columns,pt=p.decodeChannels[ct];if(pt===void 0)continue;I.value=st+ut;const Ct=(p.height-(1+C+Z))*p.outLineWidth;for(let kt=0;kt<p.columns;kt++){const Bt=Ct+(kt+D)*p.outputChannels+pt;p.byteArray[Bt]=p.getter(W,I)}}}}}function Ci(){const p=this,x=p.offset,I={value:0};for(let _=0;_<p.height/p.blockHeight;_++){const M=It(p.viewer,x)-An.dataWindow.yMin;p.size=Nt(p.viewer,x),p.lines=M+p.blockHeight>p.height?p.height-M:p.blockHeight;const E=p.columns*p.totalBytes,C=p.size<p.lines*E?p.uncompress(p):Y(p);x.value+=p.size;for(let B=0;B<p.blockHeight;B++){const V=_*p.blockHeight,W=B+p.scanOrder(V);if(W>=p.height)continue;const Z=B*E,st=(p.height-1-W)*p.outLineWidth;for(let at=0;at<p.inputChannels.length;at++){const ct=An.channels[at].name,ut=p.channelByteOffsets[ct]*p.columns,pt=p.decodeChannels[ct];if(pt!==void 0){I.value=Z+ut;for(let Ct=0;Ct<p.columns;Ct++){const kt=st+Ct*p.outputChannels+pt;p.byteArray[kt]=p.getter(C,I)}}}}}}function Vr(p,x,I){const _={};if(p.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");_.version=p.getUint8(4);const M=p.getUint8(5);_.spec={singleTile:!!(M&2),longName:!!(M&4),deepFormat:!!(M&8),multiPart:!!(M&16)},I.value=8;let E=!0;for(;E;){const D=Et(x,I);if(D==0)E=!1;else{const C=Et(x,I),B=Nt(p,I),V=kr(p,x,I,C,B);V===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${C}'.`):_[D]=V}}if(M&-7)throw console.error("THREE.EXRHeader:",_),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return _}function Pi(p,x,I,_,M){const E={size:0,viewer:x,array:I,offset:_,width:p.dataWindow.xMax-p.dataWindow.xMin+1,height:p.dataWindow.yMax-p.dataWindow.yMin+1,inputChannels:p.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:ai};switch(p.compression){case"NO_COMPRESSION":E.blockHeight=1,E.uncompress=Y;break;case"RLE_COMPRESSION":E.blockHeight=1,E.uncompress=ot;break;case"ZIPS_COMPRESSION":E.blockHeight=1,E.uncompress=ht;break;case"ZIP_COMPRESSION":E.blockHeight=16,E.uncompress=ht;break;case"PIZ_COMPRESSION":E.blockHeight=32,E.uncompress=rt;break;case"PXR24_COMPRESSION":E.blockHeight=16,E.uncompress=Ft;break;case"DWAA_COMPRESSION":E.blockHeight=32,E.uncompress=St;break;case"DWAB_COMPRESSION":E.blockHeight=256,E.uncompress=St;break;default:throw new Error("EXRLoader.parse: "+p.compression+" is unsupported")}const D={};for(const W of p.channels)switch(W.name){case"Y":case"R":case"G":case"B":case"A":D[W.name]=!0,E.type=W.pixelType}let C=!1;if(D.R&&D.G&&D.B)C=!D.A,E.outputChannels=4,E.decodeChannels={R:0,G:1,B:2,A:3};else if(D.Y)E.outputChannels=1,E.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(E.type==1)switch(M){case un:E.getter=lt;break;case kn:E.getter=J;break}else if(E.type==2)switch(M){case un:E.getter=jt;break;case kn:E.getter=H}else throw new Error("EXRLoader.parse: unsupported pixelType "+E.type+" for "+p.compression+".");E.columns=E.width;const B=E.width*E.height*E.outputChannels;switch(M){case un:E.byteArray=new Float32Array(B),C&&E.byteArray.fill(1,0,B);break;case kn:E.byteArray=new Uint16Array(B),C&&E.byteArray.fill(15360,0,B);break;default:console.error("THREE.EXRLoader: unsupported type: ",M);break}let V=0;for(const W of p.channels)E.decodeChannels[W.name]!==void 0&&(E.channelByteOffsets[W.name]=V),V+=W.pixelType*2;if(E.totalBytes=V,E.outLineWidth=E.width*E.outputChannels,p.lineOrder==="INCREASING_Y"?E.scanOrder=W=>W:E.scanOrder=W=>E.height-1-W,E.outputChannels==4?(E.format=dn,E.colorSpace=ai):(E.format=Uo,E.colorSpace=Bn),p.spec.singleTile){E.blockHeight=p.tiles.ySize,E.blockWidth=p.tiles.xSize;const W=hr(p.tiles,E.width,E.height),Z=ur(W,E.width,p.tiles.xSize,p.tiles.roundingMode),st=ur(W,E.height,p.tiles.ySize,p.tiles.roundingMode);E.tileCount=Z[0]*st[0];for(let at=0;at<W;at++)for(let ct=0;ct<st[at];ct++)for(let ut=0;ut<Z[at];ut++)Ht(x,_);E.decode=Gr.bind(E)}else{E.blockWidth=E.width;const W=Math.ceil(E.height/E.blockHeight);for(let Z=0;Z<W;Z++)Ht(x,_);E.decode=Ci.bind(E)}return E}const dr={value:0},fr=new DataView(t),Zs=new Uint8Array(t),An=Vr(fr,t,dr),jn=Pi(An,fr,Zs,dr,this.type);return jn.decode(),{header:An,width:jn.width,height:jn.height,data:jn.byteArray,format:jn.format,colorSpace:jn.colorSpace,type:this.type}}setDataType(t){return this.type=t,this}load(t,e,n,r){function s(a,o){a.colorSpace=o.colorSpace,a.minFilter=Ze,a.magFilter=Ze,a.generateMipmaps=!1,a.flipY=!1,e&&e(a,o)}return super.load(t,s,n,r)}}const Je=10,aw=.5,ow=1/Je,Co=document.getElementById("canvas"),lw={x:0,y:0,z:10},hl=new cl.World(lw),js=new yd,cw=new vg({canvas:Co,antialias:!0}),tu=new cn(45,Co.clientWidth/Co.clientHeight),Cr=fw(),xr=pw();_w();const eu=await mw("rosendal_plains_1_2k.exr");eu.mapping=Es;js.background=new pe("grey");js.environment=eu;js.add(Cr);tu.position.z=5;nu();function nu(){requestAnimationFrame(nu),hw(),uw(),dw()}function hw(){hl.step()}function uw(){const i=Cr.geometry.attributes.position;for(let t=0;t<i.count;t++){const e=xr[t].translation();i.setXYZ(t,e.x,e.y,e.z)}i.needsUpdate=!0,Cr.geometry.computeVertexNormals()}function dw(){cw.render(js,tu)}function fw(){const i=new Rd({wireframe:!1,metalness:.1,roughness:.1}),t=new Fr(1,1,Je,Je);return new Mn(t,i)}function pw(){const i=[],t=new K,e=(n,r)=>n%Je===0||r%Je===0;for(let n=0;n<Je+1;n++)for(let r=0;r<Je+1;r++){const s=n*(Je+1)+r;t.fromBufferAttribute(Cr.geometry.attributes.position,s),t.applyMatrix4(Cr.matrixWorld);const a=e(n,r)?"fixed":"dynamic",o=cl.RigidBodyDesc[a]().setAdditionalMass(aw).setTranslation(...t.toArray()),l=hl.createRigidBody(o);i.push(l)}return i}function _w(){const i=[],t=(e,n)=>{const r={x:0,y:0,z:0},s=cl.JointData.spring(ow,100,10,r,r),a=hl.createImpulseJoint(s,e,n,!0);i.push(a)};for(let e=0;e<Je+1;e++)for(let n=0;n<Je+1;n++){const r=e*(Je+1)+n;n<Je&&t(xr[r],xr[r+1]),e<Je&&t(xr[r],xr[r+Je+1])}return i}async function mw(i){const t=new sw;return new Promise((e,n)=>{t.load(i,r=>e(r),void 0,n)})}
