import{g as Ti,o as zf,e as Gf,a as Vf,s as Hf}from"./app-a1HNOUGm.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Il="175",Wf=0,Tc=1,Xf=2,wh=1,jf=2,kn=3,Wn=0,Jt=1,nn=2,li=0,nr=1,Xr=2,Ec=3,Ac=4,Yf=5,Si=100,qf=101,Kf=102,Zf=103,Jf=104,Qf=200,$f=201,ed=202,td=203,Da=204,Ia=205,nd=206,id=207,rd=208,sd=209,od=210,ad=211,ld=212,cd=213,ud=214,Na=0,Fa=1,Oa=2,sr=3,Ba=4,ka=5,za=6,Ga=7,Nl=0,hd=1,fd=2,ci=0,dd=1,pd=2,md=3,gd=4,vd=5,_d=6,xd=7,wc="attached",yd="detached",Rh=300,or=301,ar=302,Va=303,Ha=304,Ao=306,Ai=1e3,si=1001,xo=1002,Xt=1003,Ch=1004,Gr=1005,Wt=1006,ao=1007,Gn=1008,Xn=1009,Ph=1010,Lh=1011,ts=1012,Fl=1013,wi=1014,Mn=1015,ds=1016,Ol=1017,Bl=1018,ns=1020,Uh=35902,Dh=1021,Ih=1022,un=1023,Nh=1024,Fh=1025,is=1026,rs=1027,kl=1028,zl=1029,Oh=1030,Gl=1031,Vl=1033,lo=33776,co=33777,uo=33778,ho=33779,Wa=35840,Xa=35841,ja=35842,Ya=35843,qa=36196,Ka=37492,Za=37496,Ja=37808,Qa=37809,$a=37810,el=37811,tl=37812,nl=37813,il=37814,rl=37815,sl=37816,ol=37817,al=37818,ll=37819,cl=37820,ul=37821,fo=36492,hl=36494,fl=36495,Bh=36283,dl=36284,pl=36285,ml=36286,ss=2300,os=2301,Go=2302,Rc=2400,Cc=2401,Pc=2402,Md=2500,Sd=0,kh=1,gl=2,bd=3200,zh=3201,wo=0,Td=1,ri="",mt="srgb",kt="srgb-linear",yo="linear",lt="srgb",Ii=7680,Lc=519,Ed=512,Ad=513,wd=514,Gh=515,Rd=516,Cd=517,Pd=518,Ld=519,vl=35044,Uc=35048,Dc="300 es",Vn=2e3,Mo=2001;class pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ic=1234567;const jr=Math.PI/180,lr=180/Math.PI;function fn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[s&255]+Ot[s>>8&255]+Ot[s>>16&255]+Ot[s>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Qe(s,e,t){return Math.max(e,Math.min(t,s))}function Hl(s,e){return(s%e+e)%e}function Ud(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Dd(s,e,t){return s!==e?(t-s)/(e-s):0}function Yr(s,e,t){return(1-t)*s+t*e}function Id(s,e,t,i){return Yr(s,e,1-Math.exp(-t*i))}function Nd(s,e=1){return e-Math.abs(Hl(s,e*2)-e)}function Fd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Od(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Bd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function kd(s,e){return s+Math.random()*(e-s)}function zd(s){return s*(.5-Math.random())}function Gd(s){s!==void 0&&(Ic=s);let e=Ic+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vd(s){return s*jr}function Hd(s){return s*lr}function Wd(s){return(s&s-1)===0&&s!==0}function Xd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function jd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Yd(s,e,t,i,n){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(n){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const bn={DEG2RAD:jr,RAD2DEG:lr,generateUUID:fn,clamp:Qe,euclideanModulo:Hl,mapLinear:Ud,inverseLerp:Dd,lerp:Yr,damp:Id,pingpong:Nd,smoothstep:Fd,smootherstep:Od,randInt:Bd,randFloat:kd,randFloatSpread:zd,seededRandom:Gd,degToRad:Vd,radToDeg:Hd,isPowerOfTwo:Wd,ceilPowerOfTwo:Xd,floorPowerOfTwo:jd,setQuaternionFromProperEuler:Yd,normalize:ot,denormalize:yn};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,n,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c)}set(e,t,i,n,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],v=n[0],m=n[3],p=n[6],x=n[1],y=n[4],_=n[7],A=n[2],w=n[5],E=n[8];return r[0]=o*v+a*x+l*A,r[3]=o*m+a*y+l*w,r[6]=o*p+a*_+l*E,r[1]=c*v+u*x+h*A,r[4]=c*m+u*y+h*w,r[7]=c*p+u*_+h*E,r[2]=f*v+d*x+g*A,r[5]=f*m+d*y+g*w,r[8]=f*p+d*_+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+n*r*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(n*c-u*i)*v,e[2]=(a*i-n*o)*v,e[3]=f*v,e[4]=(u*t-n*l)*v,e[5]=(n*r-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new Ke;function Vh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function as(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qd(){const s=as("canvas");return s.style.display="block",s}const Nc={};function po(s){s in Nc||(Nc[s]=!0,console.warn(s))}function Kd(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Zd(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jd(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fc=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oc=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qd(){const s={enabled:!0,workingColorSpace:kt,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(n.r=Hn(n.r),n.g=Hn(n.g),n.b=Hn(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(n.r=ir(n.r),n.g=ir(n.g),n.b=ir(n.b))),n},fromWorkingColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},toWorkingColorSpace:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ri?yo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[kt]:{primaries:e,whitePoint:i,transfer:yo,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}}),s}const rt=Qd();function Hn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ir(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ni;class $d{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ni===void 0&&(Ni=as("canvas")),Ni.width=e.width,Ni.height=e.height;const n=Ni.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Ni}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=as("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hn(t[i]/255)*255):t[i]=Hn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ep=0;class Wl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Ho(n[o].image)):r.push(Ho(n[o]))}else r=Ho(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ho(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$d.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tp=0;class bt extends pr{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,i=si,n=si,r=Wt,o=Gn,a=un,l=Xn,c=bt.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=fn(),this.name="",this.source=new Wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Rh;bt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,n=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,_=(d+1)/2,A=(p+1)/2,w=(u+f)/4,E=(h+v)/4,C=(g+m)/4;return y>_&&y>A?y<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(y),n=w/i,r=E/i):_>A?_<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(_),i=w/n,r=C/n):A<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(A),i=E/r,n=C/r),this.set(i,n,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-v)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class np extends pr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new bt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new Wl(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends np{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hh extends bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ip extends bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ui{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*v,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),w=Math.atan2(A,p*x);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const _=a*x;if(l=l*m+f*_,c=c*m+d*_,u=u*m+g*_,h=h*m+v*_,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(n/2),h=a(r/2),f=l(i/2),d=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-n)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(n+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-n)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+n*c-r*l,this._y=n*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-n*a,this._w=o*u-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*n+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=n*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),u=2*(a*t-r*n),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=n+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wo.copy(this).projectOnVector(e),this.sub(Wo)}reflect(e){return this.sub(Wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new B,Bc=new ui;class Tn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bs.copy(i.boundingBox)),bs.applyMatrix4(e.matrixWorld),this.union(bs)}const n=e.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),Ts.subVectors(this.max,Rr),Fi.subVectors(e.a,Rr),Oi.subVectors(e.b,Rr),Bi.subVectors(e.c,Rr),Zn.subVectors(Oi,Fi),Jn.subVectors(Bi,Oi),fi.subVectors(Fi,Bi);let t=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-fi.z,fi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,fi.z,0,-fi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-fi.y,fi.x,0];return!Xo(t,Fi,Oi,Bi,Ts)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,Fi,Oi,Bi,Ts))?!1:(Es.crossVectors(Zn,Jn),t=[Es.x,Es.y,Es.z],Xo(t,Fi,Oi,Bi,Ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new B,new B,new B,new B,new B,new B,new B,new B],vn=new B,bs=new Tn,Fi=new B,Oi=new B,Bi=new B,Zn=new B,Jn=new B,fi=new B,Rr=new B,Ts=new B,Es=new B,di=new B;function Xo(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){di.fromArray(s,r);const a=n.x*Math.abs(di.x)+n.y*Math.abs(di.y)+n.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),u=i.dot(di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rp=new Tn,Cr=new B,jo=new B;class En{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rp.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Cr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(jo)),this.expandByPoint(Cr.copy(e.center).sub(jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new B,Yo=new B,As=new B,Qn=new B,qo=new B,ws=new B,Ko=new B;class ps{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Yo.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(Yo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(As),a=Qn.dot(this.direction),l=-Qn.dot(As),c=Qn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Yo).addScaledVector(As,f),d}intersectSphere(e,t){In.subVectors(e.center,this.origin);const i=In.dot(this.direction),n=In.dot(In)-i*i,r=e.radius*e.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,i,n,r){qo.subVectors(t,e),ws.subVectors(i,e),Ko.crossVectors(qo,ws);let o=this.direction.dot(Ko),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,e);const l=a*this.direction.dot(ws.crossVectors(Qn,ws));if(l<0)return null;const c=a*this.direction.dot(qo.cross(Qn));if(c<0||l+c>o)return null;const u=-a*Qn.dot(Ko);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,i,n,r,o,a,l,c,u,h,f,d,g,v,m){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c,u,h,f,d,g,v,m)}set(e,t,i,n,r,o,a,l,c,u,h,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),o=1/ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sp,e,op)}lookAt(e,t,i){const n=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),$n.crossVectors(i,en),$n.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),$n.crossVectors(i,en)),$n.normalize(),Rs.crossVectors(en,$n),n[0]=$n.x,n[4]=Rs.x,n[8]=en.x,n[1]=$n.y,n[5]=Rs.y,n[9]=en.y,n[2]=$n.z,n[6]=Rs.z,n[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],x=i[3],y=i[7],_=i[11],A=i[15],w=n[0],E=n[4],C=n[8],T=n[12],M=n[1],L=n[5],P=n[9],D=n[13],N=n[2],X=n[6],z=n[10],ie=n[14],q=n[3],ee=n[7],J=n[11],I=n[15];return r[0]=o*w+a*M+l*N+c*q,r[4]=o*E+a*L+l*X+c*ee,r[8]=o*C+a*P+l*z+c*J,r[12]=o*T+a*D+l*ie+c*I,r[1]=u*w+h*M+f*N+d*q,r[5]=u*E+h*L+f*X+d*ee,r[9]=u*C+h*P+f*z+d*J,r[13]=u*T+h*D+f*ie+d*I,r[2]=g*w+v*M+m*N+p*q,r[6]=g*E+v*L+m*X+p*ee,r[10]=g*C+v*P+m*z+p*J,r[14]=g*T+v*D+m*ie+p*I,r[3]=x*w+y*M+_*N+A*q,r[7]=x*E+y*L+_*X+A*ee,r[11]=x*C+y*P+_*z+A*J,r[15]=x*T+y*D+_*ie+A*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*h-n*c*h-r*a*f+i*c*f+n*a*d-i*l*d)+v*(+t*l*d-t*c*f+r*o*f-n*o*d+n*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-n*a*u-t*l*h+t*a*f+n*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=h*m*c-v*f*c+v*l*d-a*m*d-h*l*p+a*f*p,y=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,_=u*v*c-g*h*c+g*a*d-o*v*d-u*a*p+o*h*p,A=g*h*l-u*v*l-g*a*f+o*v*f+u*a*m-o*h*m,w=t*x+i*y+n*_+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=x*E,e[1]=(v*f*r-h*m*r-v*n*d+i*m*d+h*n*p-i*f*p)*E,e[2]=(a*m*r-v*l*r+v*n*c-i*m*c-a*n*p+i*l*p)*E,e[3]=(h*l*r-a*f*r-h*n*c+i*f*c+a*n*d-i*l*d)*E,e[4]=y*E,e[5]=(u*m*r-g*f*r+g*n*d-t*m*d-u*n*p+t*f*p)*E,e[6]=(g*l*r-o*m*r-g*n*c+t*m*c+o*n*p-t*l*p)*E,e[7]=(o*f*r-u*l*r+u*n*c-t*f*c-o*n*d+t*l*d)*E,e[8]=_*E,e[9]=(g*h*r-u*v*r-g*i*d+t*v*d+u*i*p-t*h*p)*E,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*p+t*a*p)*E,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*E,e[12]=A*E,e[13]=(u*v*n-g*h*n+g*i*f-t*v*f-u*i*m+t*h*m)*E,e[14]=(g*a*n-o*v*n-g*i*l+t*v*l+o*i*m-t*a*m)*E,e[15]=(o*h*n-u*a*n+u*i*l-t*h*l-o*i*f+t*a*f)*E,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,u*a+i,u*l-n*o,0,c*l-n*a,u*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,v=o*u,m=o*h,p=a*h,x=l*c,y=l*u,_=l*h,A=i.x,w=i.y,E=i.z;return n[0]=(1-(v+p))*A,n[1]=(d+_)*A,n[2]=(g-y)*A,n[3]=0,n[4]=(d-_)*w,n[5]=(1-(f+p))*w,n[6]=(m+x)*w,n[7]=0,n[8]=(g+y)*E,n[9]=(m-x)*E,n[10]=(1-(f+v))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=ki.set(n[0],n[1],n[2]).length();const o=ki.set(n[4],n[5],n[6]).length(),a=ki.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],_n.copy(this);const c=1/r,u=1/o,h=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,o,a=Vn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-n),h=(t+e)/(t-e),f=(i+n)/(i-n);let d,g;if(a===Vn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Mo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,o,a=Vn){const l=this.elements,c=1/(t-e),u=1/(i-n),h=1/(o-r),f=(t+e)*c,d=(i+n)*u;let g,v;if(a===Vn)g=(o+r)*h,v=-2*h;else if(a===Mo)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ki=new B,_n=new qe,sp=new B(0,0,0),op=new B(1,1,1),$n=new B,Rs=new B,en=new B,kc=new qe,zc=new ui;class rn{constructor(e=0,t=0,i=0,n=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zc.setFromEuler(this),this.setFromQuaternion(zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class Xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ap=0;const Gc=new B,zi=new ui,Nn=new qe,Cs=new B,Pr=new B,lp=new B,cp=new ui,Vc=new B(1,0,0),Hc=new B(0,1,0),Wc=new B(0,0,1),Xc={type:"added"},up={type:"removed"},Gi={type:"childadded",child:null},Zo={type:"childremoved",child:null};class dt extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new B,t=new rn,i=new ui,n=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ke}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(Vc,e)}rotateY(e){return this.rotateOnAxis(Hc,e)}rotateZ(e){return this.rotateOnAxis(Wc,e)}translateOnAxis(e,t){return Gc.copy(e).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vc,e)}translateY(e){return this.translateOnAxis(Hc,e)}translateZ(e){return this.translateOnAxis(Wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cs.copy(e):Cs.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Pr,Cs,this.up):Nn.lookAt(Cs,Pr,this.up),this.quaternion.setFromRotationMatrix(Nn),n&&(Nn.extractRotation(n.matrixWorld),zi.setFromRotationMatrix(Nn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xc),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(up),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xc),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}dt.DEFAULT_UP=new B(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new B,Fn=new B,Jo=new B,On=new B,Vi=new B,Hi=new B,jc=new B,Qo=new B,$o=new B,ea=new B,ta=new st,na=new st,ia=new st;class cn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),xn.subVectors(e,t),n.cross(xn);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){xn.subVectors(n,t),Fn.subVectors(i,t),Jo.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(Fn),l=xn.dot(Jo),c=Fn.dot(Fn),u=Fn.dot(Jo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(e,t,i,n,r,o){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,i),ia.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(ta,r.x),o.addScaledVector(na,r.y),o.addScaledVector(ia,r.z),o}static isFrontFacing(e,t,i,n){return xn.subVectors(i,t),Fn.subVectors(e,t),xn.cross(Fn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),xn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return cn.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let o,a;Vi.subVectors(n,i),Hi.subVectors(r,i),Qo.subVectors(e,i);const l=Vi.dot(Qo),c=Hi.dot(Qo);if(l<=0&&c<=0)return t.copy(i);$o.subVectors(e,n);const u=Vi.dot($o),h=Hi.dot($o);if(u>=0&&h<=u)return t.copy(n);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Vi,o);ea.subVectors(e,r);const d=Vi.dot(ea),g=Hi.dot(ea);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Hi,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return jc.subVectors(r,n),a=(h-u)/(h-u+(d-g)),t.copy(n).addScaledVector(jc,a);const p=1/(m+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(Vi,o).addScaledVector(Hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function ra(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=rt.workingColorSpace){if(e=Hl(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ra(o,r,e+1/3),this.g=ra(o,r,e),this.b=ra(o,r,e-1/3)}return rt.toWorkingColorSpace(this,n),this}setStyle(e,t=mt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const i=Wh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return rt.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Qe(Bt.r*255,0,255))*65536+Math.round(Qe(Bt.g*255,0,255))*256+Math.round(Qe(Bt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,n=Bt.g,r=Bt.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-i)/h+2;break;case r:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=mt){rt.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,n=Bt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Ps);const i=Yr(ei.h,Ps.h,t),n=Yr(ei.s,Ps.s,t),r=Yr(ei.l,Ps.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new ke;ke.NAMES=Wh;let hp=0;class jt extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=nr,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ia,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(i.blending=this.blending),this.side!==Wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Da&&(i.blendSrc=this.blendSrc),this.blendDst!==Ia&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oi extends jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new B,Ls=new Ee;let fp=0;class yt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vl,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),n=ot(n,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}}class Xh extends yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class jh extends yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class St extends yt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let dp=0;const on=new qe,sa=new dt,Wi=new B,tn=new Tn,Lr=new Tn,Lt=new B;class Et extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vh(e)?jh:Xh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(tn.min,Lr.min),tn.expandByPoint(Lt),Lt.addVectors(tn.max,Lr.max),tn.expandByPoint(Lt)):(tn.expandByPoint(Lr.min),tn.expandByPoint(Lr.max))}tn.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(e,c),Lt.add(Wi)),n=Math.max(n,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new B,l[C]=new B;const c=new B,u=new B,h=new B,f=new Ee,d=new Ee,g=new Ee,v=new B,m=new B;function p(C,T,M){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(L),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[C].add(v),a[T].add(v),a[M].add(v),l[C].add(m),l[T].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,T=x.length;C<T;++C){const M=x[C],L=M.start,P=M.count;for(let D=L,N=L+P;D<N;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new B,_=new B,A=new B,w=new B;function E(C){A.fromBufferAttribute(n,C),w.copy(A);const T=a[C];y.copy(T),y.sub(A.multiplyScalar(A.dot(T))).normalize(),_.crossVectors(w,T);const L=_.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,L)}for(let C=0,T=x.length;C<T;++C){const M=x[C],L=M.start,P=M.count;for(let D=L,N=L+P;D<N;D+=3)E(e.getX(D+0)),E(e.getX(D+1)),E(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const n=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(n,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(n,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new yt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yc=new qe,pi=new ps,Us=new En,qc=new B,Ds=new B,Is=new B,Ns=new B,oa=new B,Fs=new B,Kc=new B,Os=new B;class vt extends dt{constructor(e=new Et,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(r&&a){Fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(oa.fromBufferAttribute(h,e),o?Fs.addScaledVector(oa,u):Fs.addScaledVector(oa.sub(t),u))}t.add(Fs)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere),Us.applyMatrix4(r),pi.copy(e.ray).recast(e.near),!(Us.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Us,qc)===null||pi.origin.distanceToSquared(qc)>(e.far-e.near)**2))&&(Yc.copy(r).invert(),pi.copy(e.ray).applyMatrix4(Yc),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,i){let n;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,A=y;_<A;_+=3){const w=a.getX(_),E=a.getX(_+1),C=a.getX(_+2);n=Bs(this,p,e,i,c,u,h,w,E,C),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const x=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);n=Bs(this,o,e,i,c,u,h,x,y,_),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,A=y;_<A;_+=3){const w=_,E=_+1,C=_+2;n=Bs(this,p,e,i,c,u,h,w,E,C),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const x=m,y=m+1,_=m+2;n=Bs(this,o,e,i,c,u,h,x,y,_),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function pp(s,e,t,i,n,r,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side===Wn,a),l===null)return null;Os.copy(a),Os.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Os);return c<t.near||c>t.far?null:{distance:c,point:Os.clone(),object:s}}function Bs(s,e,t,i,n,r,o,a,l,c){s.getVertexPosition(a,Ds),s.getVertexPosition(l,Is),s.getVertexPosition(c,Ns);const u=pp(s,e,t,i,Ds,Is,Ns,Kc);if(u){const h=new B;cn.getBarycoord(Kc,Ds,Is,Ns,h),n&&(u.uv=cn.getInterpolatedAttribute(n,a,l,c,h,new Ee)),r&&(u.uv1=cn.getInterpolatedAttribute(r,a,l,c,h,new Ee)),o&&(u.normal=cn.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};cn.getNormal(Ds,Is,Ns,f.normal),u.face=f,u.barycoord=h}return u}class ms extends Et{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(h,2));function g(v,m,p,x,y,_,A,w,E,C,T){const M=_/E,L=A/C,P=_/2,D=A/2,N=w/2,X=E+1,z=C+1;let ie=0,q=0;const ee=new B;for(let J=0;J<z;J++){const I=J*L-D;for(let W=0;W<X;W++){const re=W*M-P;ee[v]=re*x,ee[m]=I*y,ee[p]=N,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[m]=0,ee[p]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(W/E),h.push(1-J/C),ie+=1}}for(let J=0;J<C;J++)for(let I=0;I<E;I++){const W=f+I+X*J,re=f+I+X*(J+1),F=f+(I+1)+X*(J+1),k=f+(I+1)+X*J;l.push(W,re,k),l.push(re,F,k),q+=6}a.addGroup(d,q,T),d+=q,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cr(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Vt(s){const e={};for(let t=0;t<s.length;t++){const i=cr(s[t]);for(const n in i)e[n]=i[n]}return e}function mp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Yh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const qh={clone:cr,merge:Vt};var gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Kh extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new B,Zc=new Ee,Jc=new Ee;class Ht extends Kh{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,Zc,Jc),t.subVectors(Jc,Zc)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xi=-90,ji=1;class _p extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ht(Xi,ji,e,t);n.layers=this.layers,this.add(n);const r=new Ht(Xi,ji,e,t);r.layers=this.layers,this.add(r);const o=new Ht(Xi,ji,e,t);o.layers=this.layers,this.add(o);const a=new Ht(Xi,ji,e,t);a.layers=this.layers,this.add(a);const l=new Ht(Xi,ji,e,t);l.layers=this.layers,this.add(l);const c=new Ht(Xi,ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,a),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Zh extends bt{constructor(e=[],t=or,i,n,r,o,a,l,c,u){super(e,t,i,n,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xp extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Zh(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ms(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:li});r.uniforms.tEquirect.value=t;const o=new vt(n,r),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Wt),new _p(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(r)}}class Sn extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yp={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Mp extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vl,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new B;class ls{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),n=ot(n,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ls(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _l extends jt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Yi;const Ur=new B,qi=new B,Ki=new B,Zi=new Ee,Dr=new Ee,Qh=new qe,ks=new B,Ir=new B,zs=new B,Qc=new Ee,la=new Ee,$c=new Ee;class eu extends dt{constructor(e=new _l){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Jh(t,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new ls(i,3,0,!1)),Yi.setAttribute("uv",new ls(i,2,3,!1))}this.geometry=Yi,this.material=e,this.center=new Ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),Qh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-Ki.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const o=this.center;Gs(ks.set(-.5,-.5,0),Ki,o,qi,n,r),Gs(Ir.set(.5,-.5,0),Ki,o,qi,n,r),Gs(zs.set(.5,.5,0),Ki,o,qi,n,r),Qc.set(0,0),la.set(1,0),$c.set(1,1);let a=e.ray.intersectTriangle(ks,Ir,zs,!1,Ur);if(a===null&&(Gs(Ir.set(-.5,.5,0),Ki,o,qi,n,r),la.set(0,1),a=e.ray.intersectTriangle(ks,zs,Ir,!1,Ur),a===null))return;const l=e.ray.origin.distanceTo(Ur);l<e.near||l>e.far||t.push({distance:l,point:Ur.clone(),uv:cn.getInterpolation(Ur,ks,Ir,zs,Qc,la,$c,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Gs(s,e,t,i,n,r){Zi.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(Dr.x=r*Zi.x-n*Zi.y,Dr.y=n*Zi.x+r*Zi.y):Dr.copy(Zi),s.copy(e),s.x+=Dr.x,s.y+=Dr.y,s.applyMatrix4(Qh)}const tu=new B,nu=new st,iu=new st,Sp=new B,ru=new qe,Vs=new B,ca=new En,su=new qe,ua=new ps;class bp extends vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wc,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Vs),this.boundingBox.expandByPoint(Vs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new En),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Vs),this.boundingSphere.expandByPoint(Vs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(n),e.ray.intersectsSphere(ca)!==!1&&(su.copy(n).invert(),ua.copy(e.ray).applyMatrix4(su),!(this.boundingBox!==null&&ua.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ua)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;nu.fromBufferAttribute(n.attributes.skinIndex,e),iu.fromBufferAttribute(n.attributes.skinWeight,e),tu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=iu.getComponent(r);if(o!==0){const a=nu.getComponent(r);ru.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Sp.copy(tu).applyMatrix4(ru),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $h extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ef extends bt{constructor(e=null,t=1,i=1,n,r,o,a,l,c=Xt,u=Xt,h,f){super(null,o,a,l,c,u,n,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ou=new qe,Tp=new qe;class jl{constructor(e=[],t=[]){this.uuid=fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Tp;ou.multiplyMatrices(a,t[r]),ou.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new jl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new ef(t,e,e,un,Mn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new $h),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){const o=t[n];e.bones.push(o.uuid);const a=i[n];e.boneInverses.push(a.toArray())}return e}}class So extends yt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ji=new qe,au=new qe,Hs=[],lu=new Tn,Ep=new qe,Nr=new vt,Fr=new En;class Ap extends vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new So(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Ep)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ji),lu.copy(e.boundingBox).applyMatrix4(Ji),this.boundingBox.union(lu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ji),Fr.copy(e.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(i),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Ji),au.multiplyMatrices(i,Ji),Nr.matrixWorld=au,Nr.raycast(e,Hs);for(let o=0,a=Hs.length;o<a;o++){const l=Hs[o];l.instanceId=r,l.object=this,t.push(l)}Hs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new So(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new ef(new Float32Array(n*this.count),n,this.count,kl,Mn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=n*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ha=new B,wp=new B,Rp=new Ke;class yi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=ha.subVectors(i,t).cross(wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ha),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Rp.getNormalMatrix(e),n=this.coplanarPoint(ha).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new En,Ws=new B;class Yl{constructor(e=new yi,t=new yi,i=new yi,n=new yi,r=new yi,o=new yi){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn){const i=this.planes,n=e.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],u=n[5],h=n[6],f=n[7],d=n[8],g=n[9],v=n[10],m=n[11],p=n[12],x=n[13],y=n[14],_=n[15];if(i[0].setComponents(l-r,f-c,m-d,_-p).normalize(),i[1].setComponents(l+r,f+c,m+d,_+p).normalize(),i[2].setComponents(l+o,f+u,m+g,_+x).normalize(),i[3].setComponents(l-o,f-u,m-g,_-x).normalize(),i[4].setComponents(l-a,f-h,m-v,_-y).normalize(),t===Vn)i[5].setComponents(l+a,f+h,m+v,_+y).normalize();else if(t===Mo)i[5].setComponents(a,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Ws.x=n.normal.x>0?e.max.x:e.min.x,Ws.y=n.normal.y>0?e.max.y:e.min.y,Ws.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qr extends jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bo=new B,To=new B,cu=new qe,Or=new ps,Xs=new En,fa=new B,uu=new B;class ql extends dt{constructor(e=new Et,t=new qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)bo.fromBufferAttribute(t,n-1),To.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=bo.distanceTo(To);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(n),Xs.radius+=r,e.ray.intersectsSphere(Xs)===!1)return;cu.copy(n).invert(),Or.copy(e.ray).applyMatrix4(cu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const p=u.getX(v),x=u.getX(v+1),y=js(this,e,Or,l,p,x,v);y&&t.push(y)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),p=js(this,e,Or,l,v,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const p=js(this,e,Or,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=js(this,e,Or,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function js(s,e,t,i,n,r,o){const a=s.geometry.attributes.position;if(bo.fromBufferAttribute(a,n),To.fromBufferAttribute(a,r),t.distanceSqToSegment(bo,To,fa,uu)>i)return;fa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(fa);if(!(c<e.near||c>e.far))return{distance:c,point:uu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const hu=new B,fu=new B;class xl extends ql{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)hu.fromBufferAttribute(t,n),fu.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+hu.distanceTo(fu);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cp extends ql{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class er extends jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const du=new qe,yl=new ps,Ys=new En,qs=new B;class mo extends dt{constructor(e=new Et,t=new er){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere),Ys.applyMatrix4(n),Ys.radius+=r,e.ray.intersectsSphere(Ys)===!1)return;du.copy(n).invert(),yl.copy(e.ray).applyMatrix4(du);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const m=c.getX(g);qs.fromBufferAttribute(h,m),pu(qs,m,l,n,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,v=d;g<v;g++)qs.fromBufferAttribute(h,g),pu(qs,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pu(s,e,t,i,n,r,o){const a=yl.distanceSqToPoint(s);if(a<t){const l=new B;yl.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Kl extends bt{constructor(e,t,i,n,r,o,a,l,c){super(e,t,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tf extends bt{constructor(e,t,i=wi,n,r,o,a=Xt,l=Xt,c,u=is){if(u!==is&&u!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,n,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let n=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);const u=i[n],f=i[n+1]-u,d=(o-u)/f;return(n+d)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const o=this.getPoint(n),a=this.getPoint(r),l=t||(o.isVector2?new Ee:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new B,n=[],r=[],o=[],a=new B,l=new qe;for(let d=0;d<=e;d++){const g=d/e;n[d]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(n[d-1],n[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qe(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(n[d],r[d])}if(t===!0){let d=Math.acos(Qe(r[0].dot(r[e]),-1,1));d/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],d*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Zl extends Ln{constructor(e=0,t=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ee){const i=t,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Pp extends Zl{constructor(e,t,i,n,r,o){super(e,t,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Jl(){let s=0,e=0,t=0,i=0;function n(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,n(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+i*a}}}const Ks=new B,da=new Jl,pa=new Jl,ma=new Jl;class Lp extends Ln{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new B){const i=t,n=this.points,r=n.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=n[(a-1)%r]:(Ks.subVectors(n[0],n[1]).add(n[0]),c=Ks);const h=n[a%r],f=n[(a+1)%r];if(this.closed||a+2<r?u=n[(a+2)%r]:(Ks.subVectors(n[r-1],n[r-2]).add(n[r-1]),u=Ks),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),da.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,v,m),pa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,v,m),ma.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(da.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),pa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ma.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(da.calc(l),pa.calc(l),ma.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function mu(s,e,t,i,n){const r=(i-e)*.5,o=(n-t)*.5,a=s*s,l=s*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*s+t}function Up(s,e){const t=1-s;return t*t*e}function Dp(s,e){return 2*(1-s)*s*e}function Ip(s,e){return s*s*e}function Kr(s,e,t,i){return Up(s,e)+Dp(s,t)+Ip(s,i)}function Np(s,e){const t=1-s;return t*t*t*e}function Fp(s,e){const t=1-s;return 3*t*t*s*e}function Op(s,e){return 3*(1-s)*s*s*e}function Bp(s,e){return s*s*s*e}function Zr(s,e,t,i,n){return Np(s,e)+Fp(s,t)+Op(s,i)+Bp(s,n)}class nf extends Ln{constructor(e=new Ee,t=new Ee,i=new Ee,n=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Ee){const i=t,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Zr(e,n.x,r.x,o.x,a.x),Zr(e,n.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kp extends Ln{constructor(e=new B,t=new B,i=new B,n=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new B){const i=t,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Zr(e,n.x,r.x,o.x,a.x),Zr(e,n.y,r.y,o.y,a.y),Zr(e,n.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rf extends Ln{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zp extends Ln{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sf extends Ln{constructor(e=new Ee,t=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ee){const i=t,n=this.v0,r=this.v1,o=this.v2;return i.set(Kr(e,n.x,r.x,o.x),Kr(e,n.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gp extends Ln{constructor(e=new B,t=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new B){const i=t,n=this.v0,r=this.v1,o=this.v2;return i.set(Kr(e,n.x,r.x,o.x),Kr(e,n.y,r.y,o.y),Kr(e,n.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class of extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){const i=t,n=this.points,r=(n.length-1)*e,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],u=n[o>n.length-2?n.length-1:o+1],h=n[o>n.length-3?n.length-1:o+2];return i.set(mu(a,l.x,c.x,u.x,h.x),mu(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new Ee().fromArray(n))}return this}}var Ml=Object.freeze({__proto__:null,ArcCurve:Pp,CatmullRomCurve3:Lp,CubicBezierCurve:nf,CubicBezierCurve3:kp,EllipseCurve:Zl,LineCurve:rf,LineCurve3:zp,QuadraticBezierCurve:sf,QuadraticBezierCurve3:Gp,SplineCurve:of});class Vp extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ml[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const o=r[n],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new Ml[n.type]().fromJSON(n))}return this}}class Eo extends Vp{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new rf(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new sf(this.currentPoint.clone(),new Ee(e,t),new Ee(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,o){const a=new nf(this.currentPoint.clone(),new Ee(e,t),new Ee(i,n),new Ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new of(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,n,r,o),this}absarc(e,t,i,n,r,o){return this.absellipse(e,t,i,i,n,r,o),this}ellipse(e,t,i,n,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,n,r,o,a,l),this}absellipse(e,t,i,n,r,o,a,l){const c=new Zl(e,t,i,n,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class af extends Eo{constructor(e){super(e),this.uuid=fn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new Eo().fromJSON(n))}return this}}function Hp(s,e,t=2){const i=e&&e.length,n=i?e[0]*t:s.length;let r=lf(s,0,n,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=qp(s,e,r,t)),s.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=t;f<n;f+=t){const d=s[f],g=s[f+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return cs(r,o,t,a,l,c,0),o}function lf(s,e,t,i,n){let r;if(n===sm(s,e,t,i)>0)for(let o=e;o<t;o+=i)r=gu(o/i|0,s[o],s[o+1],r);else for(let o=t-i;o>=e;o-=i)r=gu(o/i|0,s[o],s[o+1],r);return r&&ur(r,r.next)&&(hs(r),r=r.next),r}function Ci(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(ur(t,t.next)||gt(t.prev,t,t.next)===0)){if(hs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function cs(s,e,t,i,n,r,o){if(!s)return;!o&&r&&$p(s,i,n,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Xp(s,i,n,r):Wp(s)){e.push(l.i,s.i,c.i),hs(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=jp(Ci(s),e),cs(s,e,t,i,n,r,2)):o===2&&Yp(s,e,t,i,n,r):cs(Ci(s),e,t,i,n,r,1);break}}}function Wp(s){const e=s.prev,t=s,i=s.next;if(gt(e,t,i)>=0)return!1;const n=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(n,r,o),h=Math.min(a,l,c),f=Math.max(n,r,o),d=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Vr(n,a,r,l,o,c,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xp(s,e,t,i){const n=s.prev,r=s,o=s.next;if(gt(n,r,o)>=0)return!1;const a=n.x,l=r.x,c=o.x,u=n.y,h=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(u,h,f),v=Math.max(a,l,c),m=Math.max(u,h,f),p=Sl(d,g,e,t,i),x=Sl(v,m,e,t,i);let y=s.prevZ,_=s.nextZ;for(;y&&y.z>=p&&_&&_.z<=x;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==n&&y!==o&&Vr(a,u,l,h,c,f,y.x,y.y)&&gt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==o&&Vr(a,u,l,h,c,f,_.x,_.y)&&gt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==n&&y!==o&&Vr(a,u,l,h,c,f,y.x,y.y)&&gt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==o&&Vr(a,u,l,h,c,f,_.x,_.y)&&gt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function jp(s,e){let t=s;do{const i=t.prev,n=t.next.next;!ur(i,n)&&uf(i,t,t.next,n)&&us(i,n)&&us(n,i)&&(e.push(i.i,t.i,n.i),hs(t),hs(t.next),t=s=n),t=t.next}while(t!==s);return Ci(t)}function Yp(s,e,t,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nm(o,a)){let l=hf(o,a);o=Ci(o,o.next),l=Ci(l,l.next),cs(o,e,t,i,n,r,0),cs(l,e,t,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function qp(s,e,t,i){const n=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:s.length,c=lf(s,a,l,i,!1);c===c.next&&(c.steiner=!0),n.push(tm(c))}n.sort(Kp);for(let r=0;r<n.length;r++)t=Zp(n[r],t);return t}function Kp(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const i=(s.next.y-s.y)/(s.next.x-s.x),n=(e.next.y-e.y)/(e.next.x-e.x);t=i-n}return t}function Zp(s,e){const t=Jp(s,e);if(!t)return e;const i=hf(t,s);return Ci(i,i.next),Ci(t,t.next)}function Jp(s,e){let t=e;const i=s.x,n=s.y;let r=-1/0,o;if(ur(s,t))return t;do{if(ur(s,t.next))return t.next;if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){const h=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&cf(n<c?i:r,n,l,c,n<c?r:i,n,t.x,t.y)){const h=Math.abs(n-t.y)/(i-t.x);us(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Qp(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Qp(s,e){return gt(s.prev,s,e.prev)<0&&gt(e.next,s,s.next)<0}function $p(s,e,t,i){let n=s;do n.z===0&&(n.z=Sl(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,em(n)}function em(s){let e,t=1;do{let i=s,n;s=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(n=i,i=i.nextZ,a--):(n=o,o=o.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=o}r.nextZ=null,t*=2}while(e>1);return s}function Sl(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function tm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function cf(s,e,t,i,n,r,o,a){return(n-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(n-o)*(i-a)}function Vr(s,e,t,i,n,r,o,a){return!(s===o&&e===a)&&cf(s,e,t,i,n,r,o,a)}function nm(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!im(s,e)&&(us(s,e)&&us(e,s)&&rm(s,e)&&(gt(s.prev,s,e.prev)||gt(s,e.prev,e))||ur(s,e)&&gt(s.prev,s,s.next)>0&&gt(e.prev,e,e.next)>0)}function gt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ur(s,e){return s.x===e.x&&s.y===e.y}function uf(s,e,t,i){const n=Js(gt(s,e,t)),r=Js(gt(s,e,i)),o=Js(gt(t,i,s)),a=Js(gt(t,i,e));return!!(n!==r&&o!==a||n===0&&Zs(s,t,e)||r===0&&Zs(s,i,e)||o===0&&Zs(t,s,i)||a===0&&Zs(t,e,i))}function Zs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Js(s){return s>0?1:s<0?-1:0}function im(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&uf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function us(s,e){return gt(s.prev,s,s.next)<0?gt(s,e,s.next)>=0&&gt(s,s.prev,e)>=0:gt(s,e,s.prev)<0||gt(s,s.next,e)<0}function rm(s,e){let t=s,i=!1;const n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function hf(s,e){const t=bl(s.i,s.x,s.y),i=bl(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function gu(s,e,t,i){const n=bl(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function hs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function bl(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sm(s,e,t,i){let n=0;for(let r=e,o=t-i;r<t;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}class om{static triangulate(e,t,i=2){return Hp(e,t,i)}}class Jr{static area(e){const t=e.length;let i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return Jr.area(e)<0}static triangulateShape(e,t){const i=[],n=[],r=[];vu(e),_u(i,e);let o=e.length;t.forEach(vu);for(let l=0;l<t.length;l++)n.push(o),o+=t[l].length,_u(i,t[l]);const a=om.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function vu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function _u(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Ql extends Et{constructor(e=new af([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new St(n,3)),this.setAttribute("uv",new St(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:am;let y,_=!1,A,w,E,C;p&&(y=p.getSpacedPoints(u),_=!0,f=!1,A=p.computeFrenetFrames(u,!1),w=new B,E=new B,C=new B),f||(m=0,d=0,g=0,v=0);const T=a.extractPoints(c);let M=T.shape;const L=T.holes;if(!Jr.isClockWise(M)){M=M.reverse();for(let te=0,se=L.length;te<se;te++){const V=L[te];Jr.isClockWise(V)&&(L[te]=V.reverse())}}function D(te){const V=10000000000000001e-36;let he=te[0];for(let Q=1;Q<=te.length;Q++){const b=Q%te.length,S=te[b],O=S.x-he.x,K=S.y-he.y,Y=O*O+K*K,oe=Math.max(Math.abs(S.x),Math.abs(S.y),Math.abs(he.x),Math.abs(he.y)),de=V*oe*oe;if(Y<=de){te.splice(b,1),Q--;continue}he=S}}D(M),L.forEach(D);const N=L.length,X=M;for(let te=0;te<N;te++){const se=L[te];M=M.concat(se)}function z(te,se,V){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(se,V)}const ie=M.length;function q(te,se,V){let he,Q,b;const S=te.x-se.x,O=te.y-se.y,K=V.x-te.x,Y=V.y-te.y,oe=S*S+O*O,de=S*Y-O*K;if(Math.abs(de)>Number.EPSILON){const ue=Math.sqrt(oe),me=Math.sqrt(K*K+Y*Y),Le=se.x-O/ue,ve=se.y+S/ue,Ae=V.x-Y/me,we=V.y+K/me,Ce=((Ae-Le)*Y-(we-ve)*K)/(S*Y-O*K);he=Le+S*Ce-te.x,Q=ve+O*Ce-te.y;const pe=he*he+Q*Q;if(pe<=2)return new Ee(he,Q);b=Math.sqrt(pe/2)}else{let ue=!1;S>Number.EPSILON?K>Number.EPSILON&&(ue=!0):S<-Number.EPSILON?K<-Number.EPSILON&&(ue=!0):Math.sign(O)===Math.sign(Y)&&(ue=!0),ue?(he=-O,Q=S,b=Math.sqrt(oe)):(he=S,Q=O,b=Math.sqrt(oe/2))}return new Ee(he/b,Q/b)}const ee=[];for(let te=0,se=X.length,V=se-1,he=te+1;te<se;te++,V++,he++)V===se&&(V=0),he===se&&(he=0),ee[te]=q(X[te],X[V],X[he]);const J=[];let I,W=ee.concat();for(let te=0,se=N;te<se;te++){const V=L[te];I=[];for(let he=0,Q=V.length,b=Q-1,S=he+1;he<Q;he++,b++,S++)b===Q&&(b=0),S===Q&&(S=0),I[he]=q(V[he],V[b],V[S]);J.push(I),W=W.concat(I)}const re=[],F=[];for(let te=0;te<m;te++){const se=te/m,V=d*Math.cos(se*Math.PI/2),he=g*Math.sin(se*Math.PI/2)+v;for(let Q=0,b=X.length;Q<b;Q++){const S=z(X[Q],ee[Q],he);xe(S.x,S.y,-V),se==0&&re.push(S)}for(let Q=0,b=N;Q<b;Q++){const S=L[Q];I=J[Q];const O=[];for(let K=0,Y=S.length;K<Y;K++){const oe=z(S[K],I[K],he);xe(oe.x,oe.y,-V),se==0&&O.push(oe)}se==0&&F.push(O)}}const k=Jr.triangulateShape(re,F),ne=k.length,j=g+v;for(let te=0;te<ie;te++){const se=f?z(M[te],W[te],j):M[te];_?(E.copy(A.normals[0]).multiplyScalar(se.x),w.copy(A.binormals[0]).multiplyScalar(se.y),C.copy(y[0]).add(E).add(w),xe(C.x,C.y,C.z)):xe(se.x,se.y,0)}for(let te=1;te<=u;te++)for(let se=0;se<ie;se++){const V=f?z(M[se],W[se],j):M[se];_?(E.copy(A.normals[te]).multiplyScalar(V.x),w.copy(A.binormals[te]).multiplyScalar(V.y),C.copy(y[te]).add(E).add(w),xe(C.x,C.y,C.z)):xe(V.x,V.y,h/u*te)}for(let te=m-1;te>=0;te--){const se=te/m,V=d*Math.cos(se*Math.PI/2),he=g*Math.sin(se*Math.PI/2)+v;for(let Q=0,b=X.length;Q<b;Q++){const S=z(X[Q],ee[Q],he);xe(S.x,S.y,h+V)}for(let Q=0,b=L.length;Q<b;Q++){const S=L[Q];I=J[Q];for(let O=0,K=S.length;O<K;O++){const Y=z(S[O],I[O],he);_?xe(Y.x,Y.y+y[u-1].y,y[u-1].x+V):xe(Y.x,Y.y,h+V)}}}le(),Se();function le(){const te=n.length/3;if(f){let se=0,V=ie*se;for(let he=0;he<ne;he++){const Q=k[he];fe(Q[2]+V,Q[1]+V,Q[0]+V)}se=u+m*2,V=ie*se;for(let he=0;he<ne;he++){const Q=k[he];fe(Q[0]+V,Q[1]+V,Q[2]+V)}}else{for(let se=0;se<ne;se++){const V=k[se];fe(V[2],V[1],V[0])}for(let se=0;se<ne;se++){const V=k[se];fe(V[0]+ie*u,V[1]+ie*u,V[2]+ie*u)}}i.addGroup(te,n.length/3-te,0)}function Se(){const te=n.length/3;let se=0;ye(X,se),se+=X.length;for(let V=0,he=L.length;V<he;V++){const Q=L[V];ye(Q,se),se+=Q.length}i.addGroup(te,n.length/3-te,1)}function ye(te,se){let V=te.length;for(;--V>=0;){const he=V;let Q=V-1;Q<0&&(Q=te.length-1);for(let b=0,S=u+m*2;b<S;b++){const O=ie*b,K=ie*(b+1),Y=se+he+O,oe=se+Q+O,de=se+Q+K,ue=se+he+K;Ue(Y,oe,de,ue)}}}function xe(te,se,V){l.push(te),l.push(se),l.push(V)}function fe(te,se,V){U(te),U(se),U(V);const he=n.length/3,Q=x.generateTopUV(i,n,he-3,he-2,he-1);Re(Q[0]),Re(Q[1]),Re(Q[2])}function Ue(te,se,V,he){U(te),U(se),U(he),U(se),U(V),U(he);const Q=n.length/3,b=x.generateSideWallUV(i,n,Q-6,Q-3,Q-2,Q-1);Re(b[0]),Re(b[1]),Re(b[3]),Re(b[1]),Re(b[2]),Re(b[3])}function U(te){n.push(l[te*3+0]),n.push(l[te*3+1]),n.push(l[te*3+2])}function Re(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return lm(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Ml[n.type]().fromJSON(n)),new Ql(i,e.options)}}const am={generateTopUV:function(s,e,t,i,n){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[n*3],u=e[n*3+1];return[new Ee(r,o),new Ee(a,l),new Ee(c,u)]},generateSideWallUV:function(s,e,t,i,n,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[n*3],d=e[n*3+1],g=e[n*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ee(o,1-l),new Ee(c,1-h),new Ee(f,1-g),new Ee(v,1-p)]:[new Ee(a,1-l),new Ee(u,1-h),new Ee(d,1-g),new Ee(m,1-p)]}};function lm(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class jn extends Et{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const x=p*f-o;for(let y=0;y<c;y++){const _=y*h-r;g.push(_,-x,0),v.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,_=x+c*(p+1),A=x+1+c*(p+1),w=x+1+c*p;d.push(y,_,w),d.push(_,A,w)}this.setIndex(d),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(v,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.widthSegments,e.heightSegments)}}class $l extends Et{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new B,f=new B,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const x=[],y=p/i;let _=0;p===0&&o===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){const w=A/t;h.x=-e*Math.cos(n+w*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(n+w*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(w+_,1-y),x.push(c++)}u.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const y=u[p][x+1],_=u[p][x],A=u[p+1][x],w=u[p+1][x+1];(p!==0||o>0)&&d.push(y,_,w),(p!==i-1||l<Math.PI)&&d.push(_,A,w)}this.setIndex(d),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(v,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ec extends jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Un extends ec{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class cm extends jt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ke(16777215),this.specular=new ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ff extends jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class df extends jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tl extends jt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ke(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Qs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function um(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function hm(s){function e(n,r){return s[n]-s[r]}const t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function xu(s,e,t){const i=s.length,n=new s.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)n[o++]=s[a+l]}return n}function pf(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[n++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=s[n++];while(r!==void 0)}class gs{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let o=0;o!==n;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class fm extends gs{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,o=e+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cc:r=e,a=2*t-i;break;case Pc:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cc:o=e,l=2*i-t;break;case Pc:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(n-t),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,x=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*v+.5*g,_=d*m-d*v;for(let A=0;A!==a;++A)r[A]=p*o[u+A]+x*o[c+A]+y*o[l+A]+_*o[h+A];return r}}class dm extends gs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(n-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class pm extends gs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class An{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qs(t,this.TimeBufferType),this.values=Qs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qs(e.times,Array),values:Qs(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new pm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ss:t=this.InterpolantFactoryMethodDiscrete;break;case os:t=this.InterpolantFactoryMethodLinear;break;case Go:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ss;case this.InterpolantFactoryMethodLinear:return os;case this.InterpolantFactoryMethodSmooth:return Go}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,o=n-1;for(;r!==n&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&um(n))for(let a=0,l=n.length;a!==l;++a){const c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Go,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(n)l=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const v=t[h+g];if(v!==t[f+g]||v!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=os;class mr extends An{constructor(e,t,i){super(e,t,i)}}mr.prototype.ValueTypeName="bool";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=ss;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;class mf extends An{constructor(e,t,i,n){super(e,t,i,n)}}mf.prototype.ValueTypeName="color";class hr extends An{constructor(e,t,i,n){super(e,t,i,n)}}hr.prototype.ValueTypeName="number";class mm extends gs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ui.slerpFlat(r,0,o,c-a,o,c,l);return r}}class fr extends An{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new mm(this.times,this.values,this.getValueSize(),e)}}fr.prototype.ValueTypeName="quaternion";fr.prototype.InterpolantFactoryMethodSmooth=void 0;class gr extends An{constructor(e,t,i){super(e,t,i)}}gr.prototype.ValueTypeName="string";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=ss;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class dr extends An{constructor(e,t,i,n){super(e,t,i,n)}}dr.prototype.ValueTypeName="vector";class gm{constructor(e="",t=-1,i=[],n=Md){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(_m(i[o]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(An.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=hm(l);l=xu(l,1,u),c=xu(c,1,u),!n&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new hr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=n[h];f||(n[h]=f=[]),f.push(c)}}const o=[];for(const a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,v){if(d.length!==0){const m=[],p=[];pf(d,m,p,g),m.length!==0&&v.push(new h(f,m,p))}},n=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)d[f[g].morphTargets[v]]=-1;for(const v in d){const m=[],p=[];for(let x=0;x!==f[g].morphTargets.length;++x){const y=f[g];m.push(y.time),p.push(y.morphTarget===v?1:0)}n.push(new hr(".morphTargetInfluence["+v+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";i(dr,d+".position",f,"pos",n),i(fr,d+".quaternion",f,"rot",n),i(dr,d+".scale",f,"scl",n)}}return n.length===0?null:new this(r,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hr;case"vector":case"vector2":case"vector3":case"vector4":return dr;case"color":return mf;case"quaternion":return fr;case"bool":case"boolean":return mr;case"string":return gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function _m(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vm(s.type);if(s.times===void 0){const t=[],i=[];pf(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ai={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class xm{constructor(e,t,i){const n=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&n.onStart!==void 0&&n.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,n.onProgress!==void 0&&n.onProgress(u,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const ym=new xm;class hi{constructor(e){this.manager=e!==void 0?e:ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}hi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class Mm extends Error{constructor(e,t){super(e),this.response=t}}class fs extends hi{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ai.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:i,onError:n});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:i,onError:n});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){x();function x(){h.read().then(({done:y,value:_})=>{if(y)p.close();else{v+=_.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let w=0,E=u.length;w<E;w++){const C=u[w];C.onProgress&&C.onProgress(A)}p.enqueue(_),x()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Mm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ai.add(e,c);const u=Bn[e];delete Bn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Bn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Bn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Sm extends hi{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ai.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=as("img");function l(){u(),ai.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),n&&n(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class gf extends hi{constructor(e){super(e)}load(e,t,i,n){const r=new bt,o=new Sm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class tc extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ga=new qe,yu=new B,Mu=new B;class nc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yl,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(yu),Mu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mu),t.updateMatrixWorld(),ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bm extends nc{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=lr*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Tm extends tc{constructor(e,t,i=0,n=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Su=new qe,Br=new B,va=new B;class Em extends nc{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Br.setFromMatrixPosition(e.matrixWorld),i.position.copy(Br),va.copy(i.position),va.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(va),i.updateMatrixWorld(),n.makeTranslation(-Br.x,-Br.y,-Br.z),Su.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su)}}class Am extends tc{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Em}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ic extends Kh{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wm extends nc{constructor(){super(new ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rm extends tc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new wm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Cm extends Et{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Pm extends hi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ai.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ai.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),ai.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ai.add(e,l),r.manager.itemStart(e)}}class Lm extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Um{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bu(){return performance.now()}const rc="\\[\\]\\.:\\/",Dm=new RegExp("["+rc+"]","g"),sc="[^"+rc+"]",Im="[^"+rc.replace("\\.","")+"]",Nm=/((?:WC+[\/:])*)/.source.replace("WC",sc),Fm=/(WCOD+)?/.source.replace("WCOD",Im),Om=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sc),Bm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sc),km=new RegExp("^"+Nm+Fm+Om+Bm+"$"),zm=["material","materials","bones","map"];class Gm{constructor(e,t,i){const n=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class at{constructor(e,t,i){this.path=t,this.parsedPath=i||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,i):new at(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dm,"")}static parseTrackName(e){const t=km.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);zm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[n];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=Gm;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Tu=new qe;class Vm{constructor(e,t,i=0,n=1/0){this.ray=new ps(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Xl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tu),this}intersectObject(e,t=!0,i=[]){return El(e,this,i,t),i.sort(Eu),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)El(e[n],this,i,t);return i.sort(Eu),i}}function Eu(s,e){return s.distance-e.distance}function El(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)El(r[o],e,t,!0)}}function Au(s,e,t,i){const n=Hm(i);switch(t){case Dh:return s*e;case Nh:return s*e;case Fh:return s*e*2;case kl:return s*e/n.components*n.byteLength;case zl:return s*e/n.components*n.byteLength;case Oh:return s*e*2/n.components*n.byteLength;case Gl:return s*e*2/n.components*n.byteLength;case Ih:return s*e*3/n.components*n.byteLength;case un:return s*e*4/n.components*n.byteLength;case Vl:return s*e*4/n.components*n.byteLength;case lo:case co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uo:case ho:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xa:case Ya:return Math.max(s,16)*Math.max(e,8)/4;case Wa:case ja:return Math.max(s,8)*Math.max(e,8)/2;case qa:case Ka:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Za:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case $a:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ol:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case al:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ll:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case fo:case hl:case fl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Bh:case dl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case pl:case ml:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hm(s){switch(s){case Xn:case Ph:return{byteLength:1,components:1};case ts:case Lh:case ds:return{byteLength:2,components:1};case Ol:case Bl:return{byteLength:2,components:4};case wi:case Fl:case Mn:return{byteLength:4,components:1};case Uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vf(){let s=null,e=!1,t=null,i=null;function n(r,o){t(r,o),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Wm(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];s.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var Xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jm=`#ifdef USE_ALPHAHASH
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
#endif`,Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jm=`#ifdef USE_AOMAP
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
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$m=`#ifdef USE_BATCHING
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
#endif`,eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rg=`#ifdef USE_IRIDESCENCE
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
#endif`,sg=`#ifdef USE_BUMPMAP
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pg=`#define PI 3.141592653589793
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
} // validated`,mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gg=`vec3 transformedNormal = objectNormal;
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
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ug=`#ifdef USE_GRADIENTMAP
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
}`,Dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fg=`uniform bool receiveShadow;
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
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,Bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vg=`PhysicalMaterial material;
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
#endif`,Hg=`struct PhysicalMaterial {
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
}`,Wg=`
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
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
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
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e0=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d0=`#ifdef USE_NORMALMAP
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
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C0=`float getShadowMask() {
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
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,U0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,I0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,Q0=`#define DISTANCE
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
}`,$0=`#define DISTANCE
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
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`uniform float scale;
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
}`,iv=`uniform vec3 diffuse;
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
}`,rv=`#include <common>
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
}`,sv=`uniform vec3 diffuse;
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
}`,ov=`#define LAMBERT
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
}`,av=`#define LAMBERT
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
}`,lv=`#define MATCAP
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
}`,cv=`#define MATCAP
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
}`,uv=`#define NORMAL
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
}`,hv=`#define NORMAL
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
}`,fv=`#define PHONG
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
}`,dv=`#define PHONG
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
}`,pv=`#define STANDARD
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
}`,mv=`#define STANDARD
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
}`,gv=`#define TOON
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
}`,vv=`#define TOON
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
}`,_v=`uniform float size;
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
}`,xv=`uniform vec3 diffuse;
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
}`,yv=`#include <common>
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
}`,Mv=`uniform vec3 color;
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
}`,Sv=`uniform float rotation;
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
}`,bv=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Xm,alphahash_pars_fragment:jm,alphamap_fragment:Ym,alphamap_pars_fragment:qm,alphatest_fragment:Km,alphatest_pars_fragment:Zm,aomap_fragment:Jm,aomap_pars_fragment:Qm,batching_pars_vertex:$m,batching_vertex:eg,begin_vertex:tg,beginnormal_vertex:ng,bsdfs:ig,iridescence_fragment:rg,bumpmap_pars_fragment:sg,clipping_planes_fragment:og,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:lg,clipping_planes_vertex:cg,color_fragment:ug,color_pars_fragment:hg,color_pars_vertex:fg,color_vertex:dg,common:pg,cube_uv_reflection_fragment:mg,defaultnormal_vertex:gg,displacementmap_pars_vertex:vg,displacementmap_vertex:_g,emissivemap_fragment:xg,emissivemap_pars_fragment:yg,colorspace_fragment:Mg,colorspace_pars_fragment:Sg,envmap_fragment:bg,envmap_common_pars_fragment:Tg,envmap_pars_fragment:Eg,envmap_pars_vertex:Ag,envmap_physical_pars_fragment:Og,envmap_vertex:wg,fog_vertex:Rg,fog_pars_vertex:Cg,fog_fragment:Pg,fog_pars_fragment:Lg,gradientmap_pars_fragment:Ug,lightmap_pars_fragment:Dg,lights_lambert_fragment:Ig,lights_lambert_pars_fragment:Ng,lights_pars_begin:Fg,lights_toon_fragment:Bg,lights_toon_pars_fragment:kg,lights_phong_fragment:zg,lights_phong_pars_fragment:Gg,lights_physical_fragment:Vg,lights_physical_pars_fragment:Hg,lights_fragment_begin:Wg,lights_fragment_maps:Xg,lights_fragment_end:jg,logdepthbuf_fragment:Yg,logdepthbuf_pars_fragment:qg,logdepthbuf_pars_vertex:Kg,logdepthbuf_vertex:Zg,map_fragment:Jg,map_pars_fragment:Qg,map_particle_fragment:$g,map_particle_pars_fragment:e0,metalnessmap_fragment:t0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:r0,morphnormal_vertex:s0,morphtarget_pars_vertex:o0,morphtarget_vertex:a0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:u0,normal_pars_vertex:h0,normal_vertex:f0,normalmap_pars_fragment:d0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:v0,opaque_fragment:_0,packing:x0,premultiplied_alpha_fragment:y0,project_vertex:M0,dithering_fragment:S0,dithering_pars_fragment:b0,roughnessmap_fragment:T0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:w0,shadowmap_vertex:R0,shadowmask_pars_fragment:C0,skinbase_vertex:P0,skinning_pars_vertex:L0,skinning_vertex:U0,skinnormal_vertex:D0,specularmap_fragment:I0,specularmap_pars_fragment:N0,tonemapping_fragment:F0,tonemapping_pars_fragment:O0,transmission_fragment:B0,transmission_pars_fragment:k0,uv_pars_fragment:z0,uv_pars_vertex:G0,uv_vertex:V0,worldpos_vertex:H0,background_vert:W0,background_frag:X0,backgroundCube_vert:j0,backgroundCube_frag:Y0,cube_vert:q0,cube_frag:K0,depth_vert:Z0,depth_frag:J0,distanceRGBA_vert:Q0,distanceRGBA_frag:$0,equirect_vert:ev,equirect_frag:tv,linedashed_vert:nv,linedashed_frag:iv,meshbasic_vert:rv,meshbasic_frag:sv,meshlambert_vert:ov,meshlambert_frag:av,meshmatcap_vert:lv,meshmatcap_frag:cv,meshnormal_vert:uv,meshnormal_frag:hv,meshphong_vert:fv,meshphong_frag:dv,meshphysical_vert:pv,meshphysical_frag:mv,meshtoon_vert:gv,meshtoon_frag:vv,points_vert:_v,points_frag:xv,shadow_vert:yv,shadow_frag:Mv,sprite_vert:Sv,sprite_frag:bv},De={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Cn={basic:{uniforms:Vt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Vt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ke(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Vt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Vt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Vt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ke(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Vt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Vt([De.points,De.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Vt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Vt([De.common,De.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Vt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Vt([De.sprite,De.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Vt([De.common,De.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Vt([De.lights,De.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Cn.physical={uniforms:Vt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const $s={r:0,b:0,g:0},gi=new rn,Tv=new qe;function Ev(s,e,t,i,n,r,o){const a=new ke(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const A=g(y);A===null?p(a,l):A&&A.isColor&&(p(A,1),_=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===Ao)?(u===void 0&&(u=new vt(new ms(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:cr(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),gi.copy(_.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(gi)),u.material.toneMapped=rt.getTransfer(A.colorSpace)!==lt,(h!==A||f!==A.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,d=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new vt(new jn(2,2),new Pn({name:"BackgroundMaterial",uniforms:cr(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=rt.getTransfer(A.colorSpace)!==lt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB($s,Yh(s)),i.buffers.color.setClear($s.r,$s.g,$s.b,_,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:v,addToRenderList:m,dispose:x}}function Av(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null);let r=n,o=!1;function a(M,L,P,D,N){let X=!1;const z=h(D,P,L);r!==z&&(r=z,c(r.object)),X=d(M,D,P,N),X&&g(M,D,P,N),N!==null&&e.update(N,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,_(M,L,P,D),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,L,P){const D=P.wireframe===!0;let N=i[M.id];N===void 0&&(N={},i[M.id]=N);let X=N[L.id];X===void 0&&(X={},N[L.id]=X);let z=X[D];return z===void 0&&(z=f(l()),X[D]=z),z}function f(M){const L=[],P=[],D=[];for(let N=0;N<t;N++)L[N]=0,P[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:P,attributeDivisors:D,object:M,attributes:{},index:null}}function d(M,L,P,D){const N=r.attributes,X=L.attributes;let z=0;const ie=P.getAttributes();for(const q in ie)if(ie[q].location>=0){const J=N[q];let I=X[q];if(I===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(I=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(I=M.instanceColor)),J===void 0||J.attribute!==I||I&&J.data!==I.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function g(M,L,P,D){const N={},X=L.attributes;let z=0;const ie=P.getAttributes();for(const q in ie)if(ie[q].location>=0){let J=X[q];J===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));const I={};I.attribute=J,J&&J.data&&(I.data=J.data),N[q]=I,z++}r.attributes=N,r.attributesNum=z,r.index=D}function v(){const M=r.newAttributes;for(let L=0,P=M.length;L<P;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const P=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;P[M]=1,D[M]===0&&(s.enableVertexAttribArray(M),D[M]=1),N[M]!==L&&(s.vertexAttribDivisor(M,L),N[M]=L)}function x(){const M=r.newAttributes,L=r.enabledAttributes;for(let P=0,D=L.length;P<D;P++)L[P]!==M[P]&&(s.disableVertexAttribArray(P),L[P]=0)}function y(M,L,P,D,N,X,z){z===!0?s.vertexAttribIPointer(M,L,P,N,X):s.vertexAttribPointer(M,L,P,D,N,X)}function _(M,L,P,D){v();const N=D.attributes,X=P.getAttributes(),z=L.defaultAttributeValues;for(const ie in X){const q=X[ie];if(q.location>=0){let ee=N[ie];if(ee===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const J=ee.normalized,I=ee.itemSize,W=e.get(ee);if(W===void 0)continue;const re=W.buffer,F=W.type,k=W.bytesPerElement,ne=F===s.INT||F===s.UNSIGNED_INT||ee.gpuType===Fl;if(ee.isInterleavedBufferAttribute){const j=ee.data,le=j.stride,Se=ee.offset;if(j.isInstancedInterleavedBuffer){for(let ye=0;ye<q.locationSize;ye++)p(q.location+ye,j.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ye=0;ye<q.locationSize;ye++)m(q.location+ye);s.bindBuffer(s.ARRAY_BUFFER,re);for(let ye=0;ye<q.locationSize;ye++)y(q.location+ye,I/q.locationSize,F,J,le*k,(Se+I/q.locationSize*ye)*k,ne)}else{if(ee.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)p(q.location+j,ee.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let j=0;j<q.locationSize;j++)m(q.location+j);s.bindBuffer(s.ARRAY_BUFFER,re);for(let j=0;j<q.locationSize;j++)y(q.location+j,I/q.locationSize,F,J,I*k,I/q.locationSize*j*k,ne)}}else if(z!==void 0){const J=z[ie];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(q.location,J);break;case 3:s.vertexAttrib3fv(q.location,J);break;case 4:s.vertexAttrib4fv(q.location,J);break;default:s.vertexAttrib1fv(q.location,J)}}}}x()}function A(){C();for(const M in i){const L=i[M];for(const P in L){const D=L[P];for(const N in D)u(D[N].object),delete D[N];delete L[P]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const P in L){const D=L[P];for(const N in D)u(D[N].object),delete D[N];delete L[P]}delete i[M.id]}function E(M){for(const L in i){const P=i[L];if(P[M.id]===void 0)continue;const D=P[M.id];for(const N in D)u(D[N].object),delete D[N];delete P[M.id]}}function C(){T(),o=!0,r!==n&&(r=n,c(r.object))}function T(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:C,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function wv(s,e,t){let i;function n(c){i=c}function r(c,u){s.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Rv(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(E){return!(E!==un&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Xn&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Mn&&!C)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:A,maxSamples:w}}function Cv(s){const e=this;let t=null,i=0,n=!1,r=!1;const o=new yi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||n;return n=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!n||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:i,y=x*4;let _=p.clippingState||null;l.value=_,_=u(g,f,y,d);for(let A=0;A!==y;++A)_[A]=t[A];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==v;++y,_+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Pv(s){let e=new WeakMap;function t(o,a){return a===Va?o.mapping=or:a===Ha&&(o.mapping=ar),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Va||a===Ha)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xp(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const tr=4,wu=[.125,.215,.35,.446,.526,.582],bi=20,_a=new ic,Ru=new ke;let xa=null,ya=0,Ma=0,Sa=!1;const Mi=(1+Math.sqrt(5))/2,Qi=1/Mi,Cu=[new B(-Mi,Qi,0),new B(Mi,Qi,0),new B(-Qi,0,Mi),new B(Qi,0,Mi),new B(0,Mi,-Qi),new B(0,Mi,Qi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Lv=new B;class Pu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100,r={}){const{size:o=256,position:a=Lv}=r;xa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xa,ya,Ma),this._renderer.xr.enabled=Sa,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:ds,format:un,colorSpace:kt,depthBuffer:!1},n=Lu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uv(r)),this._blurMaterial=Dv(r,e,t)}return n}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,i,n,r){const l=new Ht(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ru),h.toneMapping=ci,h.autoClear=!1;const g=new oi({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),v=new vt(new ms,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Ru),m=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));const _=this._cubeSize;eo(n,y*_,x>2?_:0,_,_),h.setRenderTarget(n),m&&h.render(v,l),h.render(e,l)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===or||e.mapping===ar;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uu());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;eo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,_a)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cu[(n-r-1)%Cu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",r),this._halfBlur(o,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new vt(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*bi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const p=[];let x=0;for(let E=0;E<bi;++E){const C=E/v,T=Math.exp(-C*C/2);p.push(T),E===0?x+=T:E<m&&(x+=2*T)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const _=this._sizeLods[n],A=3*_*(n>y-tr?n-y+tr:0),w=4*(this._cubeSize-_);eo(t,A,w,3*_,2*_),l.setRenderTarget(t),l.render(h,_a)}}function Uv(s){const e=[],t=[],i=[];let n=s;const r=s-tr+1+wu.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>s-tr?l=wu[o-s+tr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*d),y=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,C=w>2?0:-1,T=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];x.set(T,v*g*w),y.set(f,m*g*w);const M=[w,w,w,w,w,w];_.set(M,p*g*w)}const A=new Et;A.setAttribute("position",new yt(x,v)),A.setAttribute("uv",new yt(y,m)),A.setAttribute("faceIndex",new yt(_,p)),e.push(A),n>tr&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lu(s,e,t){const i=new Ri(s,e,t);return i.texture.mapping=Ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function eo(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function Dv(s,e,t){const i=new Float32Array(bi),n=new B(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:oc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Uu(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Du(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function Iv(s){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Va||l===Ha,u=l===or||l===ar;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Pu(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new Pu(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function n(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Nv(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&po("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Fv(s,e,t,i){const n={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete n[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let y=0,_=x.length;y<_;y+=3){const A=x[y+0],w=x[y+1],E=x[y+2];f.push(A,w,w,E,E,A)}}else if(g!==void 0){const x=g.array;v=g.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const A=y+0,w=y+1,E=y+2;f.push(A,w,w,E,E,A)}}else return;const m=new(Vh(f)?jh:Xh)(f,1);m.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ov(s,e,t){let i;function n(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*v[x];t.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Bv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function kv(s,e,t){const i=new WeakMap,n=new st;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let T=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let _=a.attributes.position.count*y,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const w=new Float32Array(_*A*4*h),E=new Hh(w,_,A,h);E.type=Mn,E.needsUpdate=!0;const C=y*4;for(let M=0;M<h;M++){const L=m[M],P=p[M],D=x[M],N=_*A*4*M;for(let X=0;X<L.count;X++){const z=X*C;d===!0&&(n.fromBufferAttribute(L,X),w[N+z+0]=n.x,w[N+z+1]=n.y,w[N+z+2]=n.z,w[N+z+3]=0),g===!0&&(n.fromBufferAttribute(P,X),w[N+z+4]=n.x,w[N+z+5]=n.y,w[N+z+6]=n.z,w[N+z+7]=0),v===!0&&(n.fromBufferAttribute(D,X),w[N+z+8]=n.x,w[N+z+9]=n.y,w[N+z+10]=n.z,w[N+z+11]=D.itemSize===4?n.w:1)}}f={count:h,texture:E,size:new Ee(_,A)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function zv(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return h}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const _f=new bt,Iu=new tf(1,1),xf=new Hh,yf=new ip,Mf=new Zh,Nu=[],Fu=[],Ou=new Float32Array(16),Bu=new Float32Array(9),ku=new Float32Array(4);function vr(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=Nu[n];if(r===void 0&&(r=new Float32Array(n),Nu[n]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function At(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function wt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Ro(s,e){let t=Fu[e];t===void 0&&(t=new Int32Array(e),Fu[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Gv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Vv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2fv(this.addr,e),wt(t,e)}}function Hv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;s.uniform3fv(this.addr,e),wt(t,e)}}function Wv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4fv(this.addr,e),wt(t,e)}}function Xv(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;ku.set(i),s.uniformMatrix2fv(this.addr,!1,ku),wt(t,i)}}function jv(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;Bu.set(i),s.uniformMatrix3fv(this.addr,!1,Bu),wt(t,i)}}function Yv(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;Ou.set(i),s.uniformMatrix4fv(this.addr,!1,Ou),wt(t,i)}}function qv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Kv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2iv(this.addr,e),wt(t,e)}}function Zv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3iv(this.addr,e),wt(t,e)}}function Jv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4iv(this.addr,e),wt(t,e)}}function Qv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function $v(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2uiv(this.addr,e),wt(t,e)}}function e_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3uiv(this.addr,e),wt(t,e)}}function t_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4uiv(this.addr,e),wt(t,e)}}function n_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Iu.compareFunction=Gh,r=Iu):r=_f,t.setTexture2D(e||r,n)}function i_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||yf,n)}function r_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Mf,n)}function s_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||xf,n)}function o_(s){switch(s){case 5126:return Gv;case 35664:return Vv;case 35665:return Hv;case 35666:return Wv;case 35674:return Xv;case 35675:return jv;case 35676:return Yv;case 5124:case 35670:return qv;case 35667:case 35671:return Kv;case 35668:case 35672:return Zv;case 35669:case 35673:return Jv;case 5125:return Qv;case 36294:return $v;case 36295:return e_;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return s_}}function a_(s,e){s.uniform1fv(this.addr,e)}function l_(s,e){const t=vr(e,this.size,2);s.uniform2fv(this.addr,t)}function c_(s,e){const t=vr(e,this.size,3);s.uniform3fv(this.addr,t)}function u_(s,e){const t=vr(e,this.size,4);s.uniform4fv(this.addr,t)}function h_(s,e){const t=vr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function f_(s,e){const t=vr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function d_(s,e){const t=vr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function p_(s,e){s.uniform1iv(this.addr,e)}function m_(s,e){s.uniform2iv(this.addr,e)}function g_(s,e){s.uniform3iv(this.addr,e)}function v_(s,e){s.uniform4iv(this.addr,e)}function __(s,e){s.uniform1uiv(this.addr,e)}function x_(s,e){s.uniform2uiv(this.addr,e)}function y_(s,e){s.uniform3uiv(this.addr,e)}function M_(s,e){s.uniform4uiv(this.addr,e)}function S_(s,e,t){const i=this.cache,n=e.length,r=Ro(t,n);At(i,r)||(s.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||_f,r[o])}function b_(s,e,t){const i=this.cache,n=e.length,r=Ro(t,n);At(i,r)||(s.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||yf,r[o])}function T_(s,e,t){const i=this.cache,n=e.length,r=Ro(t,n);At(i,r)||(s.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Mf,r[o])}function E_(s,e,t){const i=this.cache,n=e.length,r=Ro(t,n);At(i,r)||(s.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||xf,r[o])}function A_(s){switch(s){case 5126:return a_;case 35664:return l_;case 35665:return c_;case 35666:return u_;case 35674:return h_;case 35675:return f_;case 35676:return d_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return v_;case 5125:return __;case 36294:return x_;case 36295:return y_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return E_}}class w_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=o_(t.type)}}class R_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A_(t.type)}}class C_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(e,t[a.id],i)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function zu(s,e){s.seq.push(e),s.map[e.id]=e}function P_(s,e,t){const i=s.name,n=i.length;for(ba.lastIndex=0;;){const r=ba.exec(i),o=ba.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){zu(t,c===void 0?new w_(a,s,e):new R_(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new C_(a),zu(t,h)),t=h}}}class go{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),o=e.getUniformLocation(t,r.name);P_(r,o,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function Gu(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const L_=37297;let U_=0;function D_(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Vu=new Ke;function I_(s){rt._getMatrix(Vu,rt.workingColorSpace,s);const e=`mat3( ${Vu.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(s)){case yo:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Hu(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+D_(s.getShaderSource(e),o)}else return n}function N_(s,e){const t=I_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function F_(s,e){let t;switch(e){case dd:t="Linear";break;case pd:t="Reinhard";break;case md:t="Cineon";break;case gd:t="ACESFilmic";break;case _d:t="AgX";break;case xd:t="Neutral";break;case vd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const to=new B;function O_(){rt.getLuminanceCoefficients(to);const s=to.x.toFixed(4),e=to.y.toFixed(4),t=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function k_(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function z_(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Hr(s){return s!==""}function Wu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(s){return s.replace(G_,H_)}const V_=new Map;function H_(s,e){let t=Je[e];if(t===void 0){const i=V_.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}const W_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(s){return s.replace(W_,X_)}function X_(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Yu(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function j_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===jf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function Y_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case Ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function K_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Nl:e="ENVMAP_BLENDING_MULTIPLY";break;case hd:e="ENVMAP_BLENDING_MIX";break;case fd:e="ENVMAP_BLENDING_ADD";break}return e}function Z_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function J_(s,e,t,i){const n=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=j_(t),c=Y_(t),u=q_(t),h=K_(t),f=Z_(t),d=B_(t),g=k_(r),v=n.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hr).join(`
`),p.length>0&&(p+=`
`)):(m=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),p=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Je.tonemapping_pars_fragment:"",t.toneMapping!==ci?F_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,N_("linearToOutputTexel",t.outputColorSpace),O_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),o=Al(o),o=Wu(o,t),o=Xu(o,t),a=Al(a),a=Wu(a,t),a=Xu(a,t),o=ju(o),a=ju(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+o,_=x+p+a,A=Gu(n,n.VERTEX_SHADER,y),w=Gu(n,n.FRAGMENT_SHADER,_);n.attachShader(v,A),n.attachShader(v,w),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function E(L){if(s.debug.checkShaderErrors){const P=n.getProgramInfoLog(v).trim(),D=n.getShaderInfoLog(A).trim(),N=n.getShaderInfoLog(w).trim();let X=!0,z=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,A,w);else{const ie=Hu(n,A,"vertex"),q=Hu(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+P+`
`+ie+`
`+q)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(D===""||N==="")&&(z=!1);z&&(L.diagnostics={runnable:X,programLog:P,vertexShader:{log:D,prefix:m},fragmentShader:{log:N,prefix:p}})}n.deleteShader(A),n.deleteShader(w),C=new go(n,v),T=z_(n,v)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(v,L_)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let Q_=0;class $_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ex(e),t.set(e,i)),i}}class ex{constructor(e){this.id=Q_++,this.code=e,this.usedTimes=0}}function tx(s,e,t,i,n,r,o){const a=new Xl,l=new $_,c=new Set,u=[],h=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,L,P,D){const N=P.fog,X=D.geometry,z=T.isMeshStandardMaterial?P.environment:null,ie=(T.isMeshStandardMaterial?t:e).get(T.envMap||z),q=ie&&ie.mapping===Ao?ie.image.height:null,ee=g[T.type];T.precision!==null&&(d=n.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const J=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,I=J!==void 0?J.length:0;let W=0;X.morphAttributes.position!==void 0&&(W=1),X.morphAttributes.normal!==void 0&&(W=2),X.morphAttributes.color!==void 0&&(W=3);let re,F,k,ne;if(ee){const We=Cn[ee];re=We.vertexShader,F=We.fragmentShader}else re=T.vertexShader,F=T.fragmentShader,l.update(T),k=l.getVertexShaderID(T),ne=l.getFragmentShaderID(T);const j=s.getRenderTarget(),le=s.state.buffers.depth.getReversed(),Se=D.isInstancedMesh===!0,ye=D.isBatchedMesh===!0,xe=!!T.map,fe=!!T.matcap,Ue=!!ie,U=!!T.aoMap,Re=!!T.lightMap,te=!!T.bumpMap,se=!!T.normalMap,V=!!T.displacementMap,he=!!T.emissiveMap,Q=!!T.metalnessMap,b=!!T.roughnessMap,S=T.anisotropy>0,O=T.clearcoat>0,K=T.dispersion>0,Y=T.iridescence>0,oe=T.sheen>0,de=T.transmission>0,ue=S&&!!T.anisotropyMap,me=O&&!!T.clearcoatMap,Le=O&&!!T.clearcoatNormalMap,ve=O&&!!T.clearcoatRoughnessMap,Ae=Y&&!!T.iridescenceMap,we=Y&&!!T.iridescenceThicknessMap,Ce=oe&&!!T.sheenColorMap,pe=oe&&!!T.sheenRoughnessMap,Ge=!!T.specularMap,Fe=!!T.specularColorMap,Ze=!!T.specularIntensityMap,G=de&&!!T.transmissionMap,ge=de&&!!T.thicknessMap,ae=!!T.gradientMap,_e=!!T.alphaMap,be=T.alphaTest>0,Me=!!T.alphaHash,Be=!!T.extensions;let Ye=ci;T.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ye=s.toneMapping);const ze={shaderID:ee,shaderType:T.type,shaderName:T.name,vertexShader:re,fragmentShader:F,defines:T.defines,customVertexShaderID:k,customFragmentShaderID:ne,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:ye,batchingColor:ye&&D._colorsTexture!==null,instancing:Se,instancingColor:Se&&D.instanceColor!==null,instancingMorph:Se&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:kt,alphaToCoverage:!!T.alphaToCoverage,map:xe,matcap:fe,envMap:Ue,envMapMode:Ue&&ie.mapping,envMapCubeUVHeight:q,aoMap:U,lightMap:Re,bumpMap:te,normalMap:se,displacementMap:f&&V,emissiveMap:he,normalMapObjectSpace:se&&T.normalMapType===Td,normalMapTangentSpace:se&&T.normalMapType===wo,metalnessMap:Q,roughnessMap:b,anisotropy:S,anisotropyMap:ue,clearcoat:O,clearcoatMap:me,clearcoatNormalMap:Le,clearcoatRoughnessMap:ve,dispersion:K,iridescence:Y,iridescenceMap:Ae,iridescenceThicknessMap:we,sheen:oe,sheenColorMap:Ce,sheenRoughnessMap:pe,specularMap:Ge,specularColorMap:Fe,specularIntensityMap:Ze,transmission:de,transmissionMap:G,thicknessMap:ge,gradientMap:ae,opaque:T.transparent===!1&&T.blending===nr&&T.alphaToCoverage===!1,alphaMap:_e,alphaTest:be,alphaHash:Me,combine:T.combine,mapUv:xe&&v(T.map.channel),aoMapUv:U&&v(T.aoMap.channel),lightMapUv:Re&&v(T.lightMap.channel),bumpMapUv:te&&v(T.bumpMap.channel),normalMapUv:se&&v(T.normalMap.channel),displacementMapUv:V&&v(T.displacementMap.channel),emissiveMapUv:he&&v(T.emissiveMap.channel),metalnessMapUv:Q&&v(T.metalnessMap.channel),roughnessMapUv:b&&v(T.roughnessMap.channel),anisotropyMapUv:ue&&v(T.anisotropyMap.channel),clearcoatMapUv:me&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Le&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:we&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:pe&&v(T.sheenRoughnessMap.channel),specularMapUv:Ge&&v(T.specularMap.channel),specularColorMapUv:Fe&&v(T.specularColorMap.channel),specularIntensityMapUv:Ze&&v(T.specularIntensityMap.channel),transmissionMapUv:G&&v(T.transmissionMap.channel),thicknessMapUv:ge&&v(T.thicknessMap.channel),alphaMapUv:_e&&v(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(se||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!X.attributes.uv&&(xe||_e),fog:!!N,useFog:T.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:le,skinning:D.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:W,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,decodeVideoTexture:xe&&T.map.isVideoTexture===!0&&rt.getTransfer(T.map.colorSpace)===lt,decodeVideoTextureEmissive:he&&T.emissiveMap.isVideoTexture===!0&&rt.getTransfer(T.emissiveMap.colorSpace)===lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===nn,flipSided:T.side===Jt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Be&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&T.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)M.push(L),M.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(x(M,T),y(M,T),M.push(s.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function x(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function y(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function _(T){const M=g[T.type];let L;if(M){const P=Cn[M];L=qh.clone(P.uniforms)}else L=T.uniforms;return L}function A(T,M){let L;for(let P=0,D=u.length;P<D;P++){const N=u[P];if(N.cacheKey===M){L=N,++L.usedTimes;break}}return L===void 0&&(L=new J_(s,M,T,r),u.push(L)),L}function w(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function E(T){l.remove(T)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:C}}function nx(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function ix(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function qu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ku(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function o(h,f,d,g,v,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function a(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?n.push(p):t.push(p)}function l(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?n.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||ix),i.length>1&&i.sort(f||qu),n.length>1&&n.sort(f||qu)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:u,sort:c}}function rx(){let s=new WeakMap;function e(i,n){const r=s.get(i);let o;return r===void 0?(o=new Ku,s.set(i,[o])):n>=r.length?(o=new Ku,r.push(o)):o=r[n],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function sx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new ke};break;case"SpotLight":t={position:new B,direction:new B,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function ox(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ax=0;function lx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cx(s){const e=new sx,t=ox(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const n=new B,r=new qe,o=new qe;function a(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,x=0,y=0,_=0,A=0,w=0,E=0;c.sort(lx);for(let T=0,M=c.length;T<M;T++){const L=c[T],P=L.color,D=L.intensity,N=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=P.r*D,h+=P.g*D,f+=P.b*D;else if(L.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(L.sh.coefficients[z],D);E++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ie=L.shadow,q=t.get(L);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=X,i.directionalShadowMatrix[d]=L.shadow.matrix,x++}i.directional[d]=z,d++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(P).multiplyScalar(D),z.distance=N,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,i.spot[v]=z;const ie=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,ie.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[v]=ie.matrix,L.castShadow){const q=t.get(L);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=X,_++}v++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(P).multiplyScalar(D),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=z,m++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const ie=L.shadow,q=t.get(L);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,q.shadowCameraNear=ie.camera.near,q.shadowCameraFar=ie.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=z,g++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(D),z.groundColor.copy(L.groundColor).multiplyScalar(D),i.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==_||C.numSpotMaps!==A||C.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,C.directionalLength=d,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=_,C.numSpotMaps=A,C.numLightProbes=E,i.version=ax++)}function l(c,u){let h=0,f=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),h++}else if(y.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Zu(s){const e=new cx(s),t=[],i=[];function n(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ux(s){let e=new WeakMap;function t(n,r=0){const o=e.get(n);let a;return o===void 0?(a=new Zu(s),e.set(n,[a])):r>=o.length?(a=new Zu(s),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
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
}`;function dx(s,e,t){let i=new Yl;const n=new Ee,r=new Ee,o=new st,a=new ff({depthPacking:zh}),l=new df,c={},u=t.maxTextureSize,h={[Wn]:Jt,[Jt]:Wn,[nn]:nn},f=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:hx,fragmentShader:fx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new vt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wh;let p=this.type;this.render=function(w,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const T=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),P=s.state;P.setBlending(li),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const D=p!==kn&&this.type===kn,N=p===kn&&this.type!==kn;for(let X=0,z=w.length;X<z;X++){const ie=w[X],q=ie.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);const ee=q.getFrameExtents();if(n.multiply(ee),r.copy(q.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/ee.x),n.x=r.x*ee.x,q.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/ee.y),n.y=r.y*ee.y,q.mapSize.y=r.y)),q.map===null||D===!0||N===!0){const I=this.type!==kn?{minFilter:Xt,magFilter:Xt}:{};q.map!==null&&q.map.dispose(),q.map=new Ri(n.x,n.y,I),q.map.texture.name=ie.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const J=q.getViewportCount();for(let I=0;I<J;I++){const W=q.getViewport(I);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),P.viewport(o),q.updateMatrices(ie,I),i=q.getFrustum(),_(E,C,q.camera,ie,this.type)}q.isPointLightShadow!==!0&&this.type===kn&&x(q,C),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,M,L)};function x(w,E){const C=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ri(n.x,n.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(E,null,C,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(E,null,C,d,v,null)}function y(w,E,C,T){let M=null;const L=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=C.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const P=M.uuid,D=E.uuid;let N=c[P];N===void 0&&(N={},c[P]=N);let X=N[D];X===void 0&&(X=M.clone(),N[D]=X,E.addEventListener("dispose",A)),M=X}if(M.visible=E.visible,M.wireframe=E.wireframe,T===kn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:h[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const P=s.properties.get(M);P.light=C}return M}function _(w,E,C,T,M){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===kn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const D=e.update(w),N=w.material;if(Array.isArray(N)){const X=D.groups;for(let z=0,ie=X.length;z<ie;z++){const q=X[z],ee=N[q.materialIndex];if(ee&&ee.visible){const J=y(w,ee,T,M);w.onBeforeShadow(s,w,E,C,D,J,q),s.renderBufferDirect(C,null,D,J,w,q),w.onAfterShadow(s,w,E,C,D,J,q)}}}else if(N.visible){const X=y(w,N,T,M);w.onBeforeShadow(s,w,E,C,D,X,null),s.renderBufferDirect(C,null,D,X,w,null),w.onAfterShadow(s,w,E,C,D,X,null)}}const P=w.children;for(let D=0,N=P.length;D<N;D++)_(P[D],E,C,T,M)}function A(w){w.target.removeEventListener("dispose",A);for(const C in c){const T=c[C],M=w.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const px={[Na]:Fa,[Oa]:za,[Ba]:Ga,[sr]:ka,[Fa]:Na,[za]:Oa,[Ga]:Ba,[ka]:sr};function mx(s,e){function t(){let G=!1;const ge=new st;let ae=null;const _e=new st(0,0,0,0);return{setMask:function(be){ae!==be&&!G&&(s.colorMask(be,be,be,be),ae=be)},setLocked:function(be){G=be},setClear:function(be,Me,Be,Ye,ze){ze===!0&&(be*=Ye,Me*=Ye,Be*=Ye),ge.set(be,Me,Be,Ye),_e.equals(ge)===!1&&(s.clearColor(be,Me,Be,Ye),_e.copy(ge))},reset:function(){G=!1,ae=null,_e.set(-1,0,0,0)}}}function i(){let G=!1,ge=!1,ae=null,_e=null,be=null;return{setReversed:function(Me){if(ge!==Me){const Be=e.get("EXT_clip_control");Me?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ge=Me;const Ye=be;be=null,this.setClear(Ye)}},getReversed:function(){return ge},setTest:function(Me){Me?j(s.DEPTH_TEST):le(s.DEPTH_TEST)},setMask:function(Me){ae!==Me&&!G&&(s.depthMask(Me),ae=Me)},setFunc:function(Me){if(ge&&(Me=px[Me]),_e!==Me){switch(Me){case Na:s.depthFunc(s.NEVER);break;case Fa:s.depthFunc(s.ALWAYS);break;case Oa:s.depthFunc(s.LESS);break;case sr:s.depthFunc(s.LEQUAL);break;case Ba:s.depthFunc(s.EQUAL);break;case ka:s.depthFunc(s.GEQUAL);break;case za:s.depthFunc(s.GREATER);break;case Ga:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=Me}},setLocked:function(Me){G=Me},setClear:function(Me){be!==Me&&(ge&&(Me=1-Me),s.clearDepth(Me),be=Me)},reset:function(){G=!1,ae=null,_e=null,be=null,ge=!1}}}function n(){let G=!1,ge=null,ae=null,_e=null,be=null,Me=null,Be=null,Ye=null,ze=null;return{setTest:function(We){G||(We?j(s.STENCIL_TEST):le(s.STENCIL_TEST))},setMask:function(We){ge!==We&&!G&&(s.stencilMask(We),ge=We)},setFunc:function(We,ct,ut){(ae!==We||_e!==ct||be!==ut)&&(s.stencilFunc(We,ct,ut),ae=We,_e=ct,be=ut)},setOp:function(We,ct,ut){(Me!==We||Be!==ct||Ye!==ut)&&(s.stencilOp(We,ct,ut),Me=We,Be=ct,Ye=ut)},setLocked:function(We){G=We},setClear:function(We){ze!==We&&(s.clearStencil(We),ze=We)},reset:function(){G=!1,ge=null,ae=null,_e=null,be=null,Me=null,Be=null,Ye=null,ze=null}}}const r=new t,o=new i,a=new n,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,x=null,y=null,_=null,A=null,w=null,E=new ke(0,0,0),C=0,T=!1,M=null,L=null,P=null,D=null,N=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ie=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=ie>=2);let ee=null,J={};const I=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),re=new st().fromArray(I),F=new st().fromArray(W);function k(G,ge,ae,_e){const be=new Uint8Array(4),Me=s.createTexture();s.bindTexture(G,Me),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<ae;Be++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(ge,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(ge+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Me}const ne={};ne[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(s.DEPTH_TEST),o.setFunc(sr),te(!1),se(Tc),j(s.CULL_FACE),U(li);function j(G){u[G]!==!0&&(s.enable(G),u[G]=!0)}function le(G){u[G]!==!1&&(s.disable(G),u[G]=!1)}function Se(G,ge){return h[G]!==ge?(s.bindFramebuffer(G,ge),h[G]=ge,G===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ge),G===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ge),!0):!1}function ye(G,ge){let ae=d,_e=!1;if(G){ae=f.get(ge),ae===void 0&&(ae=[],f.set(ge,ae));const be=G.textures;if(ae.length!==be.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,Be=be.length;Me<Be;Me++)ae[Me]=s.COLOR_ATTACHMENT0+Me;ae.length=be.length,_e=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,_e=!0);_e&&s.drawBuffers(ae)}function xe(G){return g!==G?(s.useProgram(G),g=G,!0):!1}const fe={[Si]:s.FUNC_ADD,[qf]:s.FUNC_SUBTRACT,[Kf]:s.FUNC_REVERSE_SUBTRACT};fe[Zf]=s.MIN,fe[Jf]=s.MAX;const Ue={[Qf]:s.ZERO,[$f]:s.ONE,[ed]:s.SRC_COLOR,[Da]:s.SRC_ALPHA,[od]:s.SRC_ALPHA_SATURATE,[rd]:s.DST_COLOR,[nd]:s.DST_ALPHA,[td]:s.ONE_MINUS_SRC_COLOR,[Ia]:s.ONE_MINUS_SRC_ALPHA,[sd]:s.ONE_MINUS_DST_COLOR,[id]:s.ONE_MINUS_DST_ALPHA,[ad]:s.CONSTANT_COLOR,[ld]:s.ONE_MINUS_CONSTANT_COLOR,[cd]:s.CONSTANT_ALPHA,[ud]:s.ONE_MINUS_CONSTANT_ALPHA};function U(G,ge,ae,_e,be,Me,Be,Ye,ze,We){if(G===li){v===!0&&(le(s.BLEND),v=!1);return}if(v===!1&&(j(s.BLEND),v=!0),G!==Yf){if(G!==m||We!==T){if((p!==Si||_!==Si)&&(s.blendEquation(s.FUNC_ADD),p=Si,_=Si),We)switch(G){case nr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xr:s.blendFunc(s.ONE,s.ONE);break;case Ec:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ac:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ec:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ac:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}x=null,y=null,A=null,w=null,E.set(0,0,0),C=0,m=G,T=We}return}be=be||ge,Me=Me||ae,Be=Be||_e,(ge!==p||be!==_)&&(s.blendEquationSeparate(fe[ge],fe[be]),p=ge,_=be),(ae!==x||_e!==y||Me!==A||Be!==w)&&(s.blendFuncSeparate(Ue[ae],Ue[_e],Ue[Me],Ue[Be]),x=ae,y=_e,A=Me,w=Be),(Ye.equals(E)===!1||ze!==C)&&(s.blendColor(Ye.r,Ye.g,Ye.b,ze),E.copy(Ye),C=ze),m=G,T=!1}function Re(G,ge){G.side===nn?le(s.CULL_FACE):j(s.CULL_FACE);let ae=G.side===Jt;ge&&(ae=!ae),te(ae),G.blending===nr&&G.transparent===!1?U(li):U(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const _e=G.stencilWrite;a.setTest(_e),_e&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),he(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):le(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(G){M!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),M=G)}function se(G){G!==Wf?(j(s.CULL_FACE),G!==L&&(G===Tc?s.cullFace(s.BACK):G===Xf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):le(s.CULL_FACE),L=G}function V(G){G!==P&&(z&&s.lineWidth(G),P=G)}function he(G,ge,ae){G?(j(s.POLYGON_OFFSET_FILL),(D!==ge||N!==ae)&&(s.polygonOffset(ge,ae),D=ge,N=ae)):le(s.POLYGON_OFFSET_FILL)}function Q(G){G?j(s.SCISSOR_TEST):le(s.SCISSOR_TEST)}function b(G){G===void 0&&(G=s.TEXTURE0+X-1),ee!==G&&(s.activeTexture(G),ee=G)}function S(G,ge,ae){ae===void 0&&(ee===null?ae=s.TEXTURE0+X-1:ae=ee);let _e=J[ae];_e===void 0&&(_e={type:void 0,texture:void 0},J[ae]=_e),(_e.type!==G||_e.texture!==ge)&&(ee!==ae&&(s.activeTexture(ae),ee=ae),s.bindTexture(G,ge||ne[G]),_e.type=G,_e.texture=ge)}function O(){const G=J[ee];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function K(){try{s.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Y(){try{s.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{s.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{s.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{s.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{s.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{s.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{s.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(G){re.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),re.copy(G))}function pe(G){F.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),F.copy(G))}function Ge(G,ge){let ae=c.get(ge);ae===void 0&&(ae=new WeakMap,c.set(ge,ae));let _e=ae.get(G);_e===void 0&&(_e=s.getUniformBlockIndex(ge,G.name),ae.set(G,_e))}function Fe(G,ge){const _e=c.get(ge).get(G);l.get(ge)!==_e&&(s.uniformBlockBinding(ge,_e,G.__bindingPointIndex),l.set(ge,_e))}function Ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ee=null,J={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,x=null,y=null,_=null,A=null,w=null,E=new ke(0,0,0),C=0,T=!1,M=null,L=null,P=null,D=null,N=null,re.set(0,0,s.canvas.width,s.canvas.height),F.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:le,bindFramebuffer:Se,drawBuffers:ye,useProgram:xe,setBlending:U,setMaterial:Re,setFlipSided:te,setCullFace:se,setLineWidth:V,setPolygonOffset:he,setScissorTest:Q,activeTexture:b,bindTexture:S,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:Y,texImage2D:Ae,texImage3D:we,updateUBOMapping:Ge,uniformBlockBinding:Fe,texStorage2D:Le,texStorage3D:ve,texSubImage2D:oe,texSubImage3D:de,compressedTexSubImage2D:ue,compressedTexSubImage3D:me,scissor:Ce,viewport:pe,reset:Ze}}function gx(s,e,t,i,n,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return d?new OffscreenCanvas(b,S):as("canvas")}function v(b,S,O){let K=1;const Y=Q(b);if((Y.width>O||Y.height>O)&&(K=O/Math.max(Y.width,Y.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const oe=Math.floor(K*Y.width),de=Math.floor(K*Y.height);h===void 0&&(h=g(oe,de));const ue=S?g(oe,de):h;return ue.width=oe,ue.height=de,ue.getContext("2d").drawImage(b,0,0,oe,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+oe+"x"+de+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){s.generateMipmap(b)}function x(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(b,S,O,K,Y=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let oe=S;if(S===s.RED&&(O===s.FLOAT&&(oe=s.R32F),O===s.HALF_FLOAT&&(oe=s.R16F),O===s.UNSIGNED_BYTE&&(oe=s.R8)),S===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(oe=s.R8UI),O===s.UNSIGNED_SHORT&&(oe=s.R16UI),O===s.UNSIGNED_INT&&(oe=s.R32UI),O===s.BYTE&&(oe=s.R8I),O===s.SHORT&&(oe=s.R16I),O===s.INT&&(oe=s.R32I)),S===s.RG&&(O===s.FLOAT&&(oe=s.RG32F),O===s.HALF_FLOAT&&(oe=s.RG16F),O===s.UNSIGNED_BYTE&&(oe=s.RG8)),S===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(oe=s.RG8UI),O===s.UNSIGNED_SHORT&&(oe=s.RG16UI),O===s.UNSIGNED_INT&&(oe=s.RG32UI),O===s.BYTE&&(oe=s.RG8I),O===s.SHORT&&(oe=s.RG16I),O===s.INT&&(oe=s.RG32I)),S===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),O===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),O===s.UNSIGNED_INT&&(oe=s.RGB32UI),O===s.BYTE&&(oe=s.RGB8I),O===s.SHORT&&(oe=s.RGB16I),O===s.INT&&(oe=s.RGB32I)),S===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),O===s.UNSIGNED_INT&&(oe=s.RGBA32UI),O===s.BYTE&&(oe=s.RGBA8I),O===s.SHORT&&(oe=s.RGBA16I),O===s.INT&&(oe=s.RGBA32I)),S===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),S===s.RGBA){const de=Y?yo:rt.getTransfer(K);O===s.FLOAT&&(oe=s.RGBA32F),O===s.HALF_FLOAT&&(oe=s.RGBA16F),O===s.UNSIGNED_BYTE&&(oe=de===lt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function _(b,S){let O;return b?S===null||S===wi||S===ns?O=s.DEPTH24_STENCIL8:S===Mn?O=s.DEPTH32F_STENCIL8:S===ts&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===wi||S===ns?O=s.DEPTH_COMPONENT24:S===Mn?O=s.DEPTH_COMPONENT32F:S===ts&&(O=s.DEPTH_COMPONENT16),O}function A(b,S){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Xt&&b.minFilter!==Wt?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function w(b){const S=b.target;S.removeEventListener("dispose",w),C(S),S.isVideoTexture&&u.delete(S)}function E(b){const S=b.target;S.removeEventListener("dispose",E),M(S)}function C(b){const S=i.get(b);if(S.__webglInit===void 0)return;const O=b.source,K=f.get(O);if(K){const Y=K[S.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&T(b),Object.keys(K).length===0&&f.delete(O)}i.remove(b)}function T(b){const S=i.get(b);s.deleteTexture(S.__webglTexture);const O=b.source,K=f.get(O);delete K[S.__cacheKey],o.memory.textures--}function M(b){const S=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let Y=0;Y<S.__webglFramebuffer[K].length;Y++)s.deleteFramebuffer(S.__webglFramebuffer[K][Y]);else s.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)s.deleteFramebuffer(S.__webglFramebuffer[K]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=b.textures;for(let K=0,Y=O.length;K<Y;K++){const oe=i.get(O[K]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(O[K])}i.remove(b)}let L=0;function P(){L=0}function D(){const b=L;return b>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+n.maxTextures),L+=1,b}function N(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function X(b,S){const O=i.get(b);if(b.isVideoTexture&&V(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(O,b,S);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+S)}function z(b,S){const O=i.get(b);if(b.version>0&&O.__version!==b.version){F(O,b,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+S)}function ie(b,S){const O=i.get(b);if(b.version>0&&O.__version!==b.version){F(O,b,S);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+S)}function q(b,S){const O=i.get(b);if(b.version>0&&O.__version!==b.version){k(O,b,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+S)}const ee={[Ai]:s.REPEAT,[si]:s.CLAMP_TO_EDGE,[xo]:s.MIRRORED_REPEAT},J={[Xt]:s.NEAREST,[Ch]:s.NEAREST_MIPMAP_NEAREST,[Gr]:s.NEAREST_MIPMAP_LINEAR,[Wt]:s.LINEAR,[ao]:s.LINEAR_MIPMAP_NEAREST,[Gn]:s.LINEAR_MIPMAP_LINEAR},I={[Ed]:s.NEVER,[Ld]:s.ALWAYS,[Ad]:s.LESS,[Gh]:s.LEQUAL,[wd]:s.EQUAL,[Pd]:s.GEQUAL,[Rd]:s.GREATER,[Cd]:s.NOTEQUAL};function W(b,S){if(S.type===Mn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Wt||S.magFilter===ao||S.magFilter===Gr||S.magFilter===Gn||S.minFilter===Wt||S.minFilter===ao||S.minFilter===Gr||S.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ee[S.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ee[S.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ee[S.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,J[S.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,J[S.minFilter]),S.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,I[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xt||S.minFilter!==Gr&&S.minFilter!==Gn||S.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function re(b,S){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",w));const K=S.source;let Y=f.get(K);Y===void 0&&(Y={},f.set(K,Y));const oe=N(S);if(oe!==b.__cacheKey){Y[oe]===void 0&&(Y[oe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Y[oe].usedTimes++;const de=Y[b.__cacheKey];de!==void 0&&(Y[b.__cacheKey].usedTimes--,de.usedTimes===0&&T(S)),b.__cacheKey=oe,b.__webglTexture=Y[oe].texture}return O}function F(b,S,O){let K=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=s.TEXTURE_3D);const Y=re(b,S),oe=S.source;t.bindTexture(K,b.__webglTexture,s.TEXTURE0+O);const de=i.get(oe);if(oe.version!==de.__version||Y===!0){t.activeTexture(s.TEXTURE0+O);const ue=rt.getPrimaries(rt.workingColorSpace),me=S.colorSpace===ri?null:rt.getPrimaries(S.colorSpace),Le=S.colorSpace===ri||ue===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ve=v(S.image,!1,n.maxTextureSize);ve=he(S,ve);const Ae=r.convert(S.format,S.colorSpace),we=r.convert(S.type);let Ce=y(S.internalFormat,Ae,we,S.colorSpace,S.isVideoTexture);W(K,S);let pe;const Ge=S.mipmaps,Fe=S.isVideoTexture!==!0,Ze=de.__version===void 0||Y===!0,G=oe.dataReady,ge=A(S,ve);if(S.isDepthTexture)Ce=_(S.format===rs,S.type),Ze&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,Ce,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,Ce,ve.width,ve.height,0,Ae,we,null));else if(S.isDataTexture)if(Ge.length>0){Fe&&Ze&&t.texStorage2D(s.TEXTURE_2D,ge,Ce,Ge[0].width,Ge[0].height);for(let ae=0,_e=Ge.length;ae<_e;ae++)pe=Ge[ae],Fe?G&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,pe.width,pe.height,Ae,we,pe.data):t.texImage2D(s.TEXTURE_2D,ae,Ce,pe.width,pe.height,0,Ae,we,pe.data);S.generateMipmaps=!1}else Fe?(Ze&&t.texStorage2D(s.TEXTURE_2D,ge,Ce,ve.width,ve.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve.width,ve.height,Ae,we,ve.data)):t.texImage2D(s.TEXTURE_2D,0,Ce,ve.width,ve.height,0,Ae,we,ve.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&Ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Ce,Ge[0].width,Ge[0].height,ve.depth);for(let ae=0,_e=Ge.length;ae<_e;ae++)if(pe=Ge[ae],S.format!==un)if(Ae!==null)if(Fe){if(G)if(S.layerUpdates.size>0){const be=Au(pe.width,pe.height,S.format,S.type);for(const Me of S.layerUpdates){const Be=pe.data.subarray(Me*be/pe.data.BYTES_PER_ELEMENT,(Me+1)*be/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Me,pe.width,pe.height,1,Ae,Be)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,pe.width,pe.height,ve.depth,Ae,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,Ce,pe.width,pe.height,ve.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,pe.width,pe.height,ve.depth,Ae,we,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,Ce,pe.width,pe.height,ve.depth,0,Ae,we,pe.data)}else{Fe&&Ze&&t.texStorage2D(s.TEXTURE_2D,ge,Ce,Ge[0].width,Ge[0].height);for(let ae=0,_e=Ge.length;ae<_e;ae++)pe=Ge[ae],S.format!==un?Ae!==null?Fe?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,pe.width,pe.height,Ae,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,Ce,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?G&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,pe.width,pe.height,Ae,we,pe.data):t.texImage2D(s.TEXTURE_2D,ae,Ce,pe.width,pe.height,0,Ae,we,pe.data)}else if(S.isDataArrayTexture)if(Fe){if(Ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Ce,ve.width,ve.height,ve.depth),G)if(S.layerUpdates.size>0){const ae=Au(ve.width,ve.height,S.format,S.type);for(const _e of S.layerUpdates){const be=ve.data.subarray(_e*ae/ve.data.BYTES_PER_ELEMENT,(_e+1)*ae/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,ve.width,ve.height,1,Ae,we,be)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ae,we,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ve.width,ve.height,ve.depth,0,Ae,we,ve.data);else if(S.isData3DTexture)Fe?(Ze&&t.texStorage3D(s.TEXTURE_3D,ge,Ce,ve.width,ve.height,ve.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ae,we,ve.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,ve.width,ve.height,ve.depth,0,Ae,we,ve.data);else if(S.isFramebufferTexture){if(Ze)if(Fe)t.texStorage2D(s.TEXTURE_2D,ge,Ce,ve.width,ve.height);else{let ae=ve.width,_e=ve.height;for(let be=0;be<ge;be++)t.texImage2D(s.TEXTURE_2D,be,Ce,ae,_e,0,Ae,we,null),ae>>=1,_e>>=1}}else if(Ge.length>0){if(Fe&&Ze){const ae=Q(Ge[0]);t.texStorage2D(s.TEXTURE_2D,ge,Ce,ae.width,ae.height)}for(let ae=0,_e=Ge.length;ae<_e;ae++)pe=Ge[ae],Fe?G&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Ae,we,pe):t.texImage2D(s.TEXTURE_2D,ae,Ce,Ae,we,pe);S.generateMipmaps=!1}else if(Fe){if(Ze){const ae=Q(ve);t.texStorage2D(s.TEXTURE_2D,ge,Ce,ae.width,ae.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,we,ve)}else t.texImage2D(s.TEXTURE_2D,0,Ce,Ae,we,ve);m(S)&&p(K),de.__version=oe.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function k(b,S,O){if(S.image.length!==6)return;const K=re(b,S),Y=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+O);const oe=i.get(Y);if(Y.version!==oe.__version||K===!0){t.activeTexture(s.TEXTURE0+O);const de=rt.getPrimaries(rt.workingColorSpace),ue=S.colorSpace===ri?null:rt.getPrimaries(S.colorSpace),me=S.colorSpace===ri||de===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Le=S.isCompressedTexture||S.image[0].isCompressedTexture,ve=S.image[0]&&S.image[0].isDataTexture,Ae=[];for(let _e=0;_e<6;_e++)!Le&&!ve?Ae[_e]=v(S.image[_e],!0,n.maxCubemapSize):Ae[_e]=ve?S.image[_e].image:S.image[_e],Ae[_e]=he(S,Ae[_e]);const we=Ae[0],Ce=r.convert(S.format,S.colorSpace),pe=r.convert(S.type),Ge=y(S.internalFormat,Ce,pe,S.colorSpace),Fe=S.isVideoTexture!==!0,Ze=oe.__version===void 0||K===!0,G=Y.dataReady;let ge=A(S,we);W(s.TEXTURE_CUBE_MAP,S);let ae;if(Le){Fe&&Ze&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ge,we.width,we.height);for(let _e=0;_e<6;_e++){ae=Ae[_e].mipmaps;for(let be=0;be<ae.length;be++){const Me=ae[be];S.format!==un?Ce!==null?Fe?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be,0,0,Me.width,Me.height,Ce,Me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be,Ge,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be,0,0,Me.width,Me.height,Ce,pe,Me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be,Ge,Me.width,Me.height,0,Ce,pe,Me.data)}}}else{if(ae=S.mipmaps,Fe&&Ze){ae.length>0&&ge++;const _e=Q(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ge,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ve){Fe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ae[_e].width,Ae[_e].height,Ce,pe,Ae[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ge,Ae[_e].width,Ae[_e].height,0,Ce,pe,Ae[_e].data);for(let be=0;be<ae.length;be++){const Be=ae[be].image[_e].image;Fe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be+1,0,0,Be.width,Be.height,Ce,pe,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be+1,Ge,Be.width,Be.height,0,Ce,pe,Be.data)}}else{Fe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ce,pe,Ae[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ge,Ce,pe,Ae[_e]);for(let be=0;be<ae.length;be++){const Me=ae[be];Fe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be+1,0,0,Ce,pe,Me.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be+1,Ge,Ce,pe,Me.image[_e])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),oe.__version=Y.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ne(b,S,O,K,Y,oe){const de=r.convert(O.format,O.colorSpace),ue=r.convert(O.type),me=y(O.internalFormat,de,ue,O.colorSpace),Le=i.get(S),ve=i.get(O);if(ve.__renderTarget=S,!Le.__hasExternalTextures){const Ae=Math.max(1,S.width>>oe),we=Math.max(1,S.height>>oe);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?t.texImage3D(Y,oe,me,Ae,we,S.depth,0,de,ue,null):t.texImage2D(Y,oe,me,Ae,we,0,de,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),se(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Y,ve.__webglTexture,0,te(S)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Y,ve.__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function j(b,S,O){if(s.bindRenderbuffer(s.RENDERBUFFER,b),S.depthBuffer){const K=S.depthTexture,Y=K&&K.isDepthTexture?K.type:null,oe=_(S.stencilBuffer,Y),de=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=te(S);se(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,oe,S.width,S.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,oe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,oe,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,b)}else{const K=S.textures;for(let Y=0;Y<K.length;Y++){const oe=K[Y],de=r.convert(oe.format,oe.colorSpace),ue=r.convert(oe.type),me=y(oe.internalFormat,de,ue,oe.colorSpace),Le=te(S);O&&se(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,me,S.width,S.height):se(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,me,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,me,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function le(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const Y=K.__webglTexture,oe=te(S);if(S.depthTexture.format===is)se(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(S.depthTexture.format===rs)se(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Se(b){const S=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const Y=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",Y)};K.addEventListener("dispose",Y),S.__depthDisposeCallback=Y}S.__boundDepthTexture=K}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");le(S.__webglFramebuffer,b)}else if(O){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=s.createRenderbuffer(),j(S.__webglDepthbuffer[K],b,!1);else{const Y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),j(S.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Y)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(b,S,O){const K=i.get(b);S!==void 0&&ne(K.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Se(b)}function xe(b){const S=b.texture,O=i.get(b),K=i.get(S);b.addEventListener("dispose",E);const Y=b.textures,oe=b.isWebGLCubeRenderTarget===!0,de=Y.length>1;if(de||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=S.version,o.memory.textures++),oe){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let me=0;me<S.mipmaps.length;me++)O.__webglFramebuffer[ue][me]=s.createFramebuffer()}else O.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)O.__webglFramebuffer[ue]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(de)for(let ue=0,me=Y.length;ue<me;ue++){const Le=i.get(Y[ue]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),o.memory.textures++)}if(b.samples>0&&se(b)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<Y.length;ue++){const me=Y[ue];O.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);const Le=r.convert(me.format,me.colorSpace),ve=r.convert(me.type),Ae=y(me.internalFormat,Le,ve,me.colorSpace,b.isXRRenderTarget===!0),we=te(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,Ae,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),j(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),W(s.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)ne(O.__webglFramebuffer[ue][me],b,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else ne(O.__webglFramebuffer[ue],b,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ue=0,me=Y.length;ue<me;ue++){const Le=Y[ue],ve=i.get(Le);t.bindTexture(s.TEXTURE_2D,ve.__webglTexture),W(s.TEXTURE_2D,Le),ne(O.__webglFramebuffer,b,Le,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),m(Le)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,K.__webglTexture),W(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)ne(O.__webglFramebuffer[me],b,S,s.COLOR_ATTACHMENT0,ue,me);else ne(O.__webglFramebuffer,b,S,s.COLOR_ATTACHMENT0,ue,0);m(S)&&p(ue),t.unbindTexture()}b.depthBuffer&&Se(b)}function fe(b){const S=b.textures;for(let O=0,K=S.length;O<K;O++){const Y=S[O];if(m(Y)){const oe=x(b),de=i.get(Y).__webglTexture;t.bindTexture(oe,de),p(oe),t.unbindTexture()}}}const Ue=[],U=[];function Re(b){if(b.samples>0){if(se(b)===!1){const S=b.textures,O=b.width,K=b.height;let Y=s.COLOR_BUFFER_BIT;const oe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=i.get(b),ue=S.length>1;if(ue)for(let me=0;me<S.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let me=0;me<S.length;me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const Le=i.get(S[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Le,0)}s.blitFramebuffer(0,0,O,K,0,0,O,K,Y,s.NEAREST),l===!0&&(Ue.length=0,U.length=0,Ue.push(s.COLOR_ATTACHMENT0+me),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ue.push(oe),U.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let me=0;me<S.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const Le=i.get(S[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,Le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function te(b){return Math.min(n.maxSamples,b.samples)}function se(b){const S=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function V(b){const S=o.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function he(b,S){const O=b.colorSpace,K=b.format,Y=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==kt&&O!==ri&&(rt.getTransfer(O)===lt?(K!==un||Y!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Q(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=ie,this.setTextureCube=q,this.rebindTextures=ye,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=se}function vx(s,e){function t(i,n=ri){let r;const o=rt.getTransfer(n);if(i===Xn)return s.UNSIGNED_BYTE;if(i===Ol)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Bl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Uh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Ph)return s.BYTE;if(i===Lh)return s.SHORT;if(i===ts)return s.UNSIGNED_SHORT;if(i===Fl)return s.INT;if(i===wi)return s.UNSIGNED_INT;if(i===Mn)return s.FLOAT;if(i===ds)return s.HALF_FLOAT;if(i===Dh)return s.ALPHA;if(i===Ih)return s.RGB;if(i===un)return s.RGBA;if(i===Nh)return s.LUMINANCE;if(i===Fh)return s.LUMINANCE_ALPHA;if(i===is)return s.DEPTH_COMPONENT;if(i===rs)return s.DEPTH_STENCIL;if(i===kl)return s.RED;if(i===zl)return s.RED_INTEGER;if(i===Oh)return s.RG;if(i===Gl)return s.RG_INTEGER;if(i===Vl)return s.RGBA_INTEGER;if(i===lo||i===co||i===uo||i===ho)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wa||i===Xa||i===ja||i===Ya)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qa||i===Ka||i===Za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===qa||i===Ka)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Za)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ja||i===Qa||i===$a||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al||i===ll||i===cl||i===ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ja)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$a)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===el)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===il)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ol)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===al)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ll)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ul)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fo||i===hl||i===fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===fo)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bh||i===dl||i===pl||i===ml)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const _x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xx=`
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

}`;class yx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new bt,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pn({vertexShader:_x,fragmentShader:xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new jn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mx extends pr{constructor(e,t){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const v=new yx,m=t.getContextAttributes();let p=null,x=null;const y=[],_=[],A=new Ee;let w=null;const E=new Ht;E.viewport=new st;const C=new Ht;C.viewport=new st;const T=[E,C],M=new Lm;let L=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let k=y[F];return k===void 0&&(k=new aa,y[F]=k),k.getTargetRaySpace()},this.getControllerGrip=function(F){let k=y[F];return k===void 0&&(k=new aa,y[F]=k),k.getGripSpace()},this.getHand=function(F){let k=y[F];return k===void 0&&(k=new aa,y[F]=k),k.getHandSpace()};function D(F){const k=_.indexOf(F.inputSource);if(k===-1)return;const ne=y[k];ne!==void 0&&(ne.update(F.inputSource,F.frame,c||o),ne.dispatchEvent({type:F.type,data:F.inputSource}))}function N(){n.removeEventListener("select",D),n.removeEventListener("selectstart",D),n.removeEventListener("selectend",D),n.removeEventListener("squeeze",D),n.removeEventListener("squeezestart",D),n.removeEventListener("squeezeend",D),n.removeEventListener("end",N),n.removeEventListener("inputsourceschange",X);for(let F=0;F<y.length;F++){const k=_[F];k!==null&&(_[F]=null,y[F].disconnect(k))}L=null,P=null,v.reset(),e.setRenderTarget(p),d=null,f=null,h=null,n=null,x=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(F){if(n=F,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",N),n.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,j=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?rs:is,j=m.stencil?ns:wi);const Se={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};h=new XRWebGLBinding(n,t),f=h.createProjectionLayer(Se),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Ri(f.textureWidth,f.textureHeight,{format:un,type:Xn,depthTexture:new tf(f.textureWidth,f.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,ne),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ri(d.framebufferWidth,d.framebufferHeight,{format:un,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),re.setContext(n),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(F){for(let k=0;k<F.removed.length;k++){const ne=F.removed[k],j=_.indexOf(ne);j>=0&&(_[j]=null,y[j].disconnect(ne))}for(let k=0;k<F.added.length;k++){const ne=F.added[k];let j=_.indexOf(ne);if(j===-1){for(let Se=0;Se<y.length;Se++)if(Se>=_.length){_.push(ne),j=Se;break}else if(_[Se]===null){_[Se]=ne,j=Se;break}if(j===-1)break}const le=y[j];le&&le.connect(ne)}}const z=new B,ie=new B;function q(F,k,ne){z.setFromMatrixPosition(k.matrixWorld),ie.setFromMatrixPosition(ne.matrixWorld);const j=z.distanceTo(ie),le=k.projectionMatrix.elements,Se=ne.projectionMatrix.elements,ye=le[14]/(le[10]-1),xe=le[14]/(le[10]+1),fe=(le[9]+1)/le[5],Ue=(le[9]-1)/le[5],U=(le[8]-1)/le[0],Re=(Se[8]+1)/Se[0],te=ye*U,se=ye*Re,V=j/(-U+Re),he=V*-U;if(k.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(he),F.translateZ(V),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),le[10]===-1)F.projectionMatrix.copy(k.projectionMatrix),F.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const Q=ye+V,b=xe+V,S=te-he,O=se+(j-he),K=fe*xe/b*Q,Y=Ue*xe/b*Q;F.projectionMatrix.makePerspective(S,O,K,Y,Q,b),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function ee(F,k){k===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(k.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(n===null)return;let k=F.near,ne=F.far;v.texture!==null&&(v.depthNear>0&&(k=v.depthNear),v.depthFar>0&&(ne=v.depthFar)),M.near=C.near=E.near=k,M.far=C.far=E.far=ne,(L!==M.near||P!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,P=M.far),E.layers.mask=F.layers.mask|2,C.layers.mask=F.layers.mask|4,M.layers.mask=E.layers.mask|C.layers.mask;const j=F.parent,le=M.cameras;ee(M,j);for(let Se=0;Se<le.length;Se++)ee(le[Se],j);le.length===2?q(M,E,C):M.projectionMatrix.copy(E.projectionMatrix),J(F,M,j)};function J(F,k,ne){ne===null?F.matrix.copy(k.matrixWorld):(F.matrix.copy(ne.matrixWorld),F.matrix.invert(),F.matrix.multiply(k.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(k.projectionMatrix),F.projectionMatrixInverse.copy(k.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=lr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let I=null;function W(F,k){if(u=k.getViewerPose(c||o),g=k,u!==null){const ne=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let j=!1;ne.length!==M.cameras.length&&(M.cameras.length=0,j=!0);for(let ye=0;ye<ne.length;ye++){const xe=ne[ye];let fe=null;if(d!==null)fe=d.getViewport(xe);else{const U=h.getViewSubImage(f,xe);fe=U.viewport,ye===0&&(e.setRenderTargetTextures(x,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(x))}let Ue=T[ye];Ue===void 0&&(Ue=new Ht,Ue.layers.enable(ye),Ue.viewport=new st,T[ye]=Ue),Ue.matrix.fromArray(xe.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(xe.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(fe.x,fe.y,fe.width,fe.height),ye===0&&(M.matrix.copy(Ue.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),j===!0&&M.cameras.push(Ue)}const le=n.enabledFeatures;if(le&&le.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&h){const ye=h.getDepthInformation(ne[0]);ye&&ye.isValid&&ye.texture&&v.init(e,ye,n.renderState)}}for(let ne=0;ne<y.length;ne++){const j=_[ne],le=y[ne];j!==null&&le!==void 0&&le.update(j,k,c||o)}I&&I(F,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),g=null}const re=new vf;re.setAnimationLoop(W),this.setAnimationLoop=function(F){I=F},this.dispose=function(){}}}const vi=new rn,Sx=new qe;function bx(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Yh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,_=x.envMapRotation;y&&(m.envMap.value=y,vi.copy(_),vi.x*=-1,vi.y*=-1,vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(vi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Tx(s,e,t,i){let n={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const _=y.program;i.uniformBlockBinding(x,_)}function c(x,y){let _=n[x.id];_===void 0&&(g(x),_=u(x),n[x.id]=_,x.addEventListener("dispose",m));const A=y.program;i.updateUBOMapping(x,A);const w=e.render.frame;r[x.id]!==w&&(f(x),r[x.id]=w)}function u(x){const y=h();x.__bindingPointIndex=y;const _=s.createBuffer(),A=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,_),_}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=n[x.id],_=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,E=_.length;w<E;w++){const C=Array.isArray(_[w])?_[w]:[_[w]];for(let T=0,M=C.length;T<M;T++){const L=C[T];if(d(L,w,T,A)===!0){const P=L.__offset,D=Array.isArray(L.value)?L.value:[L.value];let N=0;for(let X=0;X<D.length;X++){const z=D[X],ie=v(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,P+N,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,N),N+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,P,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,y,_,A){const w=x.value,E=y+"_"+_;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const C=A[E];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[E]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(x){const y=x.uniforms;let _=0;const A=16;for(let E=0,C=y.length;E<C;E++){const T=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,L=T.length;M<L;M++){const P=T[M],D=Array.isArray(P.value)?P.value:[P.value];for(let N=0,X=D.length;N<X;N++){const z=D[N],ie=v(z),q=_%A,ee=q%ie.boundary,J=q+ee;_+=ee,J!==0&&A-J<ie.storage&&(_+=A-J),P.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=_,_+=ie.storage}}}const w=_%A;return w>0&&(_+=A-w),x.__size=_,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(n[y.id]),delete n[y.id],delete r[y.id]}function p(){for(const x in n)s.deleteBuffer(n[x]);o=[],n={},r={}}return{bind:l,update:c,dispose:p}}class Ex{constructor(e={}){const{canvas:t=qd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let A=!1;this._outputColorSpace=mt;let w=0,E=0,C=null,T=-1,M=null;const L=new st,P=new st;let D=null;const N=new ke(0);let X=0,z=t.width,ie=t.height,q=1,ee=null,J=null;const I=new st(0,0,z,ie),W=new st(0,0,z,ie);let re=!1;const F=new Yl;let k=!1,ne=!1;const j=new qe,le=new qe,Se=new B,ye=new st,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Ue(){return C===null?q:1}let U=i;function Re(R,Z){return t.getContext(R,Z)}try{const R={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Il}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Me,!1),U===null){const Z="webgl2";if(U=Re(Z,R),U===null)throw Re(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let te,se,V,he,Q,b,S,O,K,Y,oe,de,ue,me,Le,ve,Ae,we,Ce,pe,Ge,Fe,Ze,G;function ge(){te=new Nv(U),te.init(),Fe=new vx(U,te),se=new Rv(U,te,e,Fe),V=new mx(U,te),se.reverseDepthBuffer&&f&&V.buffers.depth.setReversed(!0),he=new Bv(U),Q=new nx,b=new gx(U,te,V,Q,se,Fe,he),S=new Pv(_),O=new Iv(_),K=new Wm(U),Ze=new Av(U,K),Y=new Fv(U,K,he,Ze),oe=new zv(U,Y,K,he),Ce=new kv(U,se,b),ve=new Cv(Q),de=new tx(_,S,O,te,se,Ze,ve),ue=new bx(_,Q),me=new rx,Le=new ux(te),we=new Ev(_,S,O,V,oe,d,l),Ae=new dx(_,oe,se),G=new Tx(U,he,se,V),pe=new wv(U,te,he),Ge=new Ov(U,te,he),he.programs=de.programs,_.capabilities=se,_.extensions=te,_.properties=Q,_.renderLists=me,_.shadowMap=Ae,_.state=V,_.info=he}ge();const ae=new Mx(_,U);this.xr=ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=te.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=te.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(z,ie,!1))},this.getSize=function(R){return R.set(z,ie)},this.setSize=function(R,Z,ce=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,ie=Z,t.width=Math.floor(R*q),t.height=Math.floor(Z*q),ce===!0&&(t.style.width=R+"px",t.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(z*q,ie*q).floor()},this.setDrawingBufferSize=function(R,Z,ce){z=R,ie=Z,q=ce,t.width=Math.floor(R*ce),t.height=Math.floor(Z*ce),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(I)},this.setViewport=function(R,Z,ce,H){R.isVector4?I.set(R.x,R.y,R.z,R.w):I.set(R,Z,ce,H),V.viewport(L.copy(I).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(W)},this.setScissor=function(R,Z,ce,H){R.isVector4?W.set(R.x,R.y,R.z,R.w):W.set(R,Z,ce,H),V.scissor(P.copy(W).multiplyScalar(q).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(R){V.setScissorTest(re=R)},this.setOpaqueSort=function(R){ee=R},this.setTransparentSort=function(R){J=R},this.getClearColor=function(R){return R.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,ce=!0){let H=0;if(R){let $=!1;if(C!==null){const Te=C.texture.format;$=Te===Vl||Te===Gl||Te===zl}if($){const Te=C.texture.type,Pe=Te===Xn||Te===wi||Te===ts||Te===ns||Te===Ol||Te===Bl,Ie=we.getClearColor(),Ne=we.getClearAlpha(),je=Ie.r,Xe=Ie.g,Ve=Ie.b;Pe?(g[0]=je,g[1]=Xe,g[2]=Ve,g[3]=Ne,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=je,v[1]=Xe,v[2]=Ve,v[3]=Ne,U.clearBufferiv(U.COLOR,0,v))}else H|=U.COLOR_BUFFER_BIT}Z&&(H|=U.DEPTH_BUFFER_BIT),ce&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),we.dispose(),me.dispose(),Le.dispose(),Q.dispose(),S.dispose(),O.dispose(),oe.dispose(),Ze.dispose(),G.dispose(),de.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",_t),ae.removeEventListener("sessionend",Yt),Nt.stop()};function _e(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const R=he.autoReset,Z=Ae.enabled,ce=Ae.autoUpdate,H=Ae.needsUpdate,$=Ae.type;ge(),he.autoReset=R,Ae.enabled=Z,Ae.autoUpdate=ce,Ae.needsUpdate=H,Ae.type=$}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Be(R){const Z=R.target;Z.removeEventListener("dispose",Be),Ye(Z)}function Ye(R){ze(R),Q.remove(R)}function ze(R){const Z=Q.get(R).programs;Z!==void 0&&(Z.forEach(function(ce){de.releaseProgram(ce)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,ce,H,$,Te){Z===null&&(Z=xe);const Pe=$.isMesh&&$.matrixWorld.determinant()<0,Ie=Po(R,Z,ce,H,$);V.setMaterial(H,Pe);let Ne=ce.index,je=1;if(H.wireframe===!0){if(Ne=Y.getWireframeAttribute(ce),Ne===void 0)return;je=2}const Xe=ce.drawRange,Ve=ce.attributes.position;let tt=Xe.start*je,nt=(Xe.start+Xe.count)*je;Te!==null&&(tt=Math.max(tt,Te.start*je),nt=Math.min(nt,(Te.start+Te.count)*je)),Ne!==null?(tt=Math.max(tt,0),nt=Math.min(nt,Ne.count)):Ve!=null&&(tt=Math.max(tt,0),nt=Math.min(nt,Ve.count));const pt=nt-tt;if(pt<0||pt===1/0)return;Ze.setup($,H,Ie,ce,Ne);let ht,it=pe;if(Ne!==null&&(ht=K.get(Ne),it=Ge,it.setIndex(ht)),$.isMesh)H.wireframe===!0?(V.setLineWidth(H.wireframeLinewidth*Ue()),it.setMode(U.LINES)):it.setMode(U.TRIANGLES);else if($.isLine){let He=H.linewidth;He===void 0&&(He=1),V.setLineWidth(He*Ue()),$.isLineSegments?it.setMode(U.LINES):$.isLineLoop?it.setMode(U.LINE_LOOP):it.setMode(U.LINE_STRIP)}else $.isPoints?it.setMode(U.POINTS):$.isSprite&&it.setMode(U.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)po("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))it.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const He=$._multiDrawStarts,xt=$._multiDrawCounts,$e=$._multiDrawCount,zt=Ne?K.get(Ne).bytesPerElement:1,Rn=Q.get(H).currentProgram.getUniforms();for(let Ut=0;Ut<$e;Ut++)Rn.setValue(U,"_gl_DrawID",Ut),it.render(He[Ut]/zt,xt[Ut])}else if($.isInstancedMesh)it.renderInstances(tt,pt,$.count);else if(ce.isInstancedBufferGeometry){const He=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,xt=Math.min(ce.instanceCount,He);it.renderInstances(tt,pt,xt)}else it.render(tt,pt)};function We(R,Z,ce){R.transparent===!0&&R.side===nn&&R.forceSinglePass===!1?(R.side=Jt,R.needsUpdate=!0,sn(R,Z,ce),R.side=Wn,R.needsUpdate=!0,sn(R,Z,ce),R.side=nn):sn(R,Z,ce)}this.compile=function(R,Z,ce=null){ce===null&&(ce=R),p=Le.get(ce),p.init(Z),y.push(p),ce.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),R!==ce&&R.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();const H=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Te=$.material;if(Te)if(Array.isArray(Te))for(let Pe=0;Pe<Te.length;Pe++){const Ie=Te[Pe];We(Ie,ce,$),H.add(Ie)}else We(Te,ce,$),H.add(Te)}),p=y.pop(),H},this.compileAsync=function(R,Z,ce=null){const H=this.compile(R,Z,ce);return new Promise($=>{function Te(){if(H.forEach(function(Pe){Q.get(Pe).currentProgram.isReady()&&H.delete(Pe)}),H.size===0){$(R);return}setTimeout(Te,10)}te.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let ct=null;function ut(R){ct&&ct(R)}function _t(){Nt.stop()}function Yt(){Nt.start()}const Nt=new vf;Nt.setAnimationLoop(ut),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(R){ct=R,ae.setAnimationLoop(R),R===null?Nt.stop():Nt.start()},ae.addEventListener("sessionstart",_t),ae.addEventListener("sessionend",Yt),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(Z),Z=ae.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,Z,C),p=Le.get(R,y.length),p.init(Z),y.push(p),le.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F.setFromProjectionMatrix(le),ne=this.localClippingEnabled,k=ve.init(this.clippingPlanes,ne),m=me.get(R,x.length),m.init(),x.push(m),ae.enabled===!0&&ae.isPresenting===!0){const Te=_.xr.getDepthSensingMesh();Te!==null&&Qt(Te,Z,-1/0,_.sortObjects)}Qt(R,Z,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ee,J),fe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,fe&&we.addToRenderList(m,R),this.info.render.frame++,k===!0&&ve.beginShadows();const ce=p.state.shadowsArray;Ae.render(ce,R,Z),k===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,$=m.transmissive;if(p.setupLights(),Z.isArrayCamera){const Te=Z.cameras;if($.length>0)for(let Pe=0,Ie=Te.length;Pe<Ie;Pe++){const Ne=Te[Pe];wn(H,$,R,Ne)}fe&&we.render(R);for(let Pe=0,Ie=Te.length;Pe<Ie;Pe++){const Ne=Te[Pe];dn(m,R,Ne,Ne.viewport)}}else $.length>0&&wn(H,$,R,Z),fe&&we.render(R),dn(m,R,Z);C!==null&&E===0&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(_,R,Z),Ze.resetDefaultState(),T=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],k===!0&&ve.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Qt(R,Z,ce,H){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||F.intersectsSprite(R)){H&&ye.setFromMatrixPosition(R.matrixWorld).applyMatrix4(le);const Pe=oe.update(R),Ie=R.material;Ie.visible&&m.push(R,Pe,Ie,ce,ye.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||F.intersectsObject(R))){const Pe=oe.update(R),Ie=R.material;if(H&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ye.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ye.copy(Pe.boundingSphere.center)),ye.applyMatrix4(R.matrixWorld).applyMatrix4(le)),Array.isArray(Ie)){const Ne=Pe.groups;for(let je=0,Xe=Ne.length;je<Xe;je++){const Ve=Ne[je],tt=Ie[Ve.materialIndex];tt&&tt.visible&&m.push(R,Pe,tt,ce,ye.z,Ve)}}else Ie.visible&&m.push(R,Pe,Ie,ce,ye.z,null)}}const Te=R.children;for(let Pe=0,Ie=Te.length;Pe<Ie;Pe++)Qt(Te[Pe],Z,ce,H)}function dn(R,Z,ce,H){const $=R.opaque,Te=R.transmissive,Pe=R.transparent;p.setupLightsView(ce),k===!0&&ve.setGlobalState(_.clippingPlanes,ce),H&&V.viewport(L.copy(H)),$.length>0&&qt($,Z,ce),Te.length>0&&qt(Te,Z,ce),Pe.length>0&&qt(Pe,Z,ce),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function wn(R,Z,ce,H){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Ri(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?ds:Xn,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const Te=p.state.transmissionRenderTarget[H.id],Pe=H.viewport||L;Te.setSize(Pe.z*_.transmissionResolutionScale,Pe.w*_.transmissionResolutionScale);const Ie=_.getRenderTarget();_.setRenderTarget(Te),_.getClearColor(N),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),fe&&we.render(ce);const Ne=_.toneMapping;_.toneMapping=ci;const je=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),k===!0&&ve.setGlobalState(_.clippingPlanes,H),qt(R,ce,H),b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te),te.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ve=0,tt=Z.length;Ve<tt;Ve++){const nt=Z[Ve],pt=nt.object,ht=nt.geometry,it=nt.material,He=nt.group;if(it.side===nn&&pt.layers.test(H.layers)){const xt=it.side;it.side=Jt,it.needsUpdate=!0,Rt(pt,ce,H,ht,it,He),it.side=xt,it.needsUpdate=!0,Xe=!0}}Xe===!0&&(b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te))}_.setRenderTarget(Ie),_.setClearColor(N,X),je!==void 0&&(H.viewport=je),_.toneMapping=Ne}function qt(R,Z,ce){const H=Z.isScene===!0?Z.overrideMaterial:null;for(let $=0,Te=R.length;$<Te;$++){const Pe=R[$],Ie=Pe.object,Ne=Pe.geometry,je=Pe.group;let Xe=Pe.material;Xe.allowOverride===!0&&H!==null&&(Xe=H),Ie.layers.test(ce.layers)&&Rt(Ie,Z,ce,Ne,Xe,je)}}function Rt(R,Z,ce,H,$,Te){R.onBeforeRender(_,Z,ce,H,$,Te),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(_,Z,ce,H,R,Te),$.transparent===!0&&$.side===nn&&$.forceSinglePass===!1?($.side=Jt,$.needsUpdate=!0,_.renderBufferDirect(ce,Z,H,$,R,Te),$.side=Wn,$.needsUpdate=!0,_.renderBufferDirect(ce,Z,H,$,R,Te),$.side=nn):_.renderBufferDirect(ce,Z,H,$,R,Te),R.onAfterRender(_,Z,ce,H,$,Te)}function sn(R,Z,ce){Z.isScene!==!0&&(Z=xe);const H=Q.get(R),$=p.state.lights,Te=p.state.shadowsArray,Pe=$.state.version,Ie=de.getParameters(R,$.state,Te,Z,ce),Ne=de.getProgramCacheKey(Ie);let je=H.programs;H.environment=R.isMeshStandardMaterial?Z.environment:null,H.fog=Z.fog,H.envMap=(R.isMeshStandardMaterial?O:S).get(R.envMap||H.environment),H.envMapRotation=H.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,je===void 0&&(R.addEventListener("dispose",Be),je=new Map,H.programs=je);let Xe=je.get(Ne);if(Xe!==void 0){if(H.currentProgram===Xe&&H.lightsStateVersion===Pe)return Pi(R,Ie),Xe}else Ie.uniforms=de.getUniforms(R),R.onBeforeCompile(Ie,_),Xe=de.acquireProgram(Ie,Ne),je.set(Ne,Xe),H.uniforms=Ie.uniforms;const Ve=H.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=ve.uniform),Pi(R,Ie),H.needsLights=Li(R),H.lightsStateVersion=Pe,H.needsLights&&(Ve.ambientLightColor.value=$.state.ambient,Ve.lightProbe.value=$.state.probe,Ve.directionalLights.value=$.state.directional,Ve.directionalLightShadows.value=$.state.directionalShadow,Ve.spotLights.value=$.state.spot,Ve.spotLightShadows.value=$.state.spotShadow,Ve.rectAreaLights.value=$.state.rectArea,Ve.ltc_1.value=$.state.rectAreaLTC1,Ve.ltc_2.value=$.state.rectAreaLTC2,Ve.pointLights.value=$.state.point,Ve.pointLightShadows.value=$.state.pointShadow,Ve.hemisphereLights.value=$.state.hemi,Ve.directionalShadowMap.value=$.state.directionalShadowMap,Ve.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ve.spotShadowMap.value=$.state.spotShadowMap,Ve.spotLightMatrix.value=$.state.spotLightMatrix,Ve.spotLightMap.value=$.state.spotLightMap,Ve.pointShadowMap.value=$.state.pointShadowMap,Ve.pointShadowMatrix.value=$.state.pointShadowMatrix),H.currentProgram=Xe,H.uniformsList=null,Xe}function xr(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=go.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Pi(R,Z){const ce=Q.get(R);ce.outputColorSpace=Z.outputColorSpace,ce.batching=Z.batching,ce.batchingColor=Z.batchingColor,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.instancingMorph=Z.instancingMorph,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function Po(R,Z,ce,H,$){Z.isScene!==!0&&(Z=xe),b.resetTextureUnits();const Te=Z.fog,Pe=H.isMeshStandardMaterial?Z.environment:null,Ie=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:kt,Ne=(H.isMeshStandardMaterial?O:S).get(H.envMap||Pe),je=H.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Xe=!!ce.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ve=!!ce.morphAttributes.position,tt=!!ce.morphAttributes.normal,nt=!!ce.morphAttributes.color;let pt=ci;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pt=_.toneMapping);const ht=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,it=ht!==void 0?ht.length:0,He=Q.get(H),xt=p.state.lights;if(k===!0&&(ne===!0||R!==M)){const Pt=R===M&&H.id===T;ve.setState(H,R,Pt)}let $e=!1;H.version===He.__version?(He.needsLights&&He.lightsStateVersion!==xt.state.version||He.outputColorSpace!==Ie||$.isBatchedMesh&&He.batching===!1||!$.isBatchedMesh&&He.batching===!0||$.isBatchedMesh&&He.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&He.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&He.instancing===!1||!$.isInstancedMesh&&He.instancing===!0||$.isSkinnedMesh&&He.skinning===!1||!$.isSkinnedMesh&&He.skinning===!0||$.isInstancedMesh&&He.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&He.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&He.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&He.instancingMorph===!1&&$.morphTexture!==null||He.envMap!==Ne||H.fog===!0&&He.fog!==Te||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ve.numPlanes||He.numIntersection!==ve.numIntersection)||He.vertexAlphas!==je||He.vertexTangents!==Xe||He.morphTargets!==Ve||He.morphNormals!==tt||He.morphColors!==nt||He.toneMapping!==pt||He.morphTargetsCount!==it)&&($e=!0):($e=!0,He.__version=H.version);let zt=He.currentProgram;$e===!0&&(zt=sn(H,Z,$));let Rn=!1,Ut=!1,Ft=!1;const ft=zt.getUniforms(),Dt=He.uniforms;if(V.useProgram(zt.program)&&(Rn=!0,Ut=!0,Ft=!0),H.id!==T&&(T=H.id,Ut=!0),Rn||M!==R){V.buffers.depth.getReversed()?(j.copy(R.projectionMatrix),Zd(j),Jd(j),ft.setValue(U,"projectionMatrix",j)):ft.setValue(U,"projectionMatrix",R.projectionMatrix),ft.setValue(U,"viewMatrix",R.matrixWorldInverse);const Tt=ft.map.cameraPosition;Tt!==void 0&&Tt.setValue(U,Se.setFromMatrixPosition(R.matrixWorld)),se.logarithmicDepthBuffer&&ft.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ft.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,Ut=!0,Ft=!0)}if($.isSkinnedMesh){ft.setOptional(U,$,"bindMatrix"),ft.setOptional(U,$,"bindMatrixInverse");const Pt=$.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ft.setValue(U,"boneTexture",Pt.boneTexture,b))}$.isBatchedMesh&&(ft.setOptional(U,$,"batchingTexture"),ft.setValue(U,"batchingTexture",$._matricesTexture,b),ft.setOptional(U,$,"batchingIdTexture"),ft.setValue(U,"batchingIdTexture",$._indirectTexture,b),ft.setOptional(U,$,"batchingColorTexture"),$._colorsTexture!==null&&ft.setValue(U,"batchingColorTexture",$._colorsTexture,b));const Ct=ce.morphAttributes;if((Ct.position!==void 0||Ct.normal!==void 0||Ct.color!==void 0)&&Ce.update($,ce,zt),(Ut||He.receiveShadow!==$.receiveShadow)&&(He.receiveShadow=$.receiveShadow,ft.setValue(U,"receiveShadow",$.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Dt.envMap.value=Ne,Dt.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&Z.environment!==null&&(Dt.envMapIntensity.value=Z.environmentIntensity),Ut&&(ft.setValue(U,"toneMappingExposure",_.toneMappingExposure),He.needsLights&&vs(Dt,Ft),Te&&H.fog===!0&&ue.refreshFogUniforms(Dt,Te),ue.refreshMaterialUniforms(Dt,H,q,ie,p.state.transmissionRenderTarget[R.id]),go.upload(U,xr(He),Dt,b)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(go.upload(U,xr(He),Dt,b),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ft.setValue(U,"center",$.center),ft.setValue(U,"modelViewMatrix",$.modelViewMatrix),ft.setValue(U,"normalMatrix",$.normalMatrix),ft.setValue(U,"modelMatrix",$.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Pt=H.uniformsGroups;for(let Tt=0,Yn=Pt.length;Tt<Yn;Tt++){const pn=Pt[Tt];G.update(pn,zt),G.bind(pn,zt)}}return zt}function vs(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Li(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,Z,ce){const H=Q.get(R);H.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Q.get(R.texture).__webglTexture=Z,Q.get(R.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:ce,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const ce=Q.get(R);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0};const yr=U.createFramebuffer();this.setRenderTarget=function(R,Z=0,ce=0){C=R,w=Z,E=ce;let H=!0,$=null,Te=!1,Pe=!1;if(R){const Ne=Q.get(R);if(Ne.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(Ne.__webglFramebuffer===void 0)b.setupRenderTarget(R);else if(Ne.__hasExternalTextures)b.rebindTextures(R,Q.get(R.texture).__webglTexture,Q.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ve=R.depthTexture;if(Ne.__boundDepthTexture!==Ve){if(Ve!==null&&Q.has(Ve)&&(R.width!==Ve.image.width||R.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(R)}}const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Pe=!0);const Xe=Q.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[Z])?$=Xe[Z][ce]:$=Xe[Z],Te=!0):R.samples>0&&b.useMultisampledRTT(R)===!1?$=Q.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?$=Xe[ce]:$=Xe,L.copy(R.viewport),P.copy(R.scissor),D=R.scissorTest}else L.copy(I).multiplyScalar(q).floor(),P.copy(W).multiplyScalar(q).floor(),D=re;if(ce!==0&&($=yr),V.bindFramebuffer(U.FRAMEBUFFER,$)&&H&&V.drawBuffers(R,$),V.viewport(L),V.scissor(P),V.setScissorTest(D),Te){const Ne=Q.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ne.__webglTexture,ce)}else if(Pe){const Ne=Q.get(R.texture),je=Z;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ne.__webglTexture,ce,je)}else if(R!==null&&ce!==0){const Ne=Q.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ne.__webglTexture,ce)}T=-1},this.readRenderTargetPixels=function(R,Z,ce,H,$,Te,Pe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){V.bindFramebuffer(U.FRAMEBUFFER,Ie);try{const Ne=R.texture,je=Ne.format,Xe=Ne.type;if(!se.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-H&&ce>=0&&ce<=R.height-$&&U.readPixels(Z,ce,H,$,Fe.convert(je),Fe.convert(Xe),Te)}finally{const Ne=C!==null?Q.get(C).__webglFramebuffer:null;V.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(R,Z,ce,H,$,Te,Pe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie)if(Z>=0&&Z<=R.width-H&&ce>=0&&ce<=R.height-$){V.bindFramebuffer(U.FRAMEBUFFER,Ie);const Ne=R.texture,je=Ne.format,Xe=Ne.type;if(!se.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ve),U.bufferData(U.PIXEL_PACK_BUFFER,Te.byteLength,U.STREAM_READ),U.readPixels(Z,ce,H,$,Fe.convert(je),Fe.convert(Xe),0);const tt=C!==null?Q.get(C).__webglFramebuffer:null;V.bindFramebuffer(U.FRAMEBUFFER,tt);const nt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Kd(U,nt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ve),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Te),U.deleteBuffer(Ve),U.deleteSync(nt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,ce=0){const H=Math.pow(2,-ce),$=Math.floor(R.image.width*H),Te=Math.floor(R.image.height*H),Pe=Z!==null?Z.x:0,Ie=Z!==null?Z.y:0;b.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,ce,0,0,Pe,Ie,$,Te),V.unbindTexture()};const Lo=U.createFramebuffer(),_s=U.createFramebuffer();this.copyTextureToTexture=function(R,Z,ce=null,H=null,$=0,Te=null){Te===null&&($!==0?(po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=$,$=0):Te=0);let Pe,Ie,Ne,je,Xe,Ve,tt,nt,pt;const ht=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(ce!==null)Pe=ce.max.x-ce.min.x,Ie=ce.max.y-ce.min.y,Ne=ce.isBox3?ce.max.z-ce.min.z:1,je=ce.min.x,Xe=ce.min.y,Ve=ce.isBox3?ce.min.z:0;else{const Ct=Math.pow(2,-$);Pe=Math.floor(ht.width*Ct),Ie=Math.floor(ht.height*Ct),R.isDataArrayTexture?Ne=ht.depth:R.isData3DTexture?Ne=Math.floor(ht.depth*Ct):Ne=1,je=0,Xe=0,Ve=0}H!==null?(tt=H.x,nt=H.y,pt=H.z):(tt=0,nt=0,pt=0);const it=Fe.convert(Z.format),He=Fe.convert(Z.type);let xt;Z.isData3DTexture?(b.setTexture3D(Z,0),xt=U.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(b.setTexture2DArray(Z,0),xt=U.TEXTURE_2D_ARRAY):(b.setTexture2D(Z,0),xt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Z.unpackAlignment);const $e=U.getParameter(U.UNPACK_ROW_LENGTH),zt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Rn=U.getParameter(U.UNPACK_SKIP_PIXELS),Ut=U.getParameter(U.UNPACK_SKIP_ROWS),Ft=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ht.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ht.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,je),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve);const ft=R.isDataArrayTexture||R.isData3DTexture,Dt=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const Ct=Q.get(R),Pt=Q.get(Z),Tt=Q.get(Ct.__renderTarget),Yn=Q.get(Pt.__renderTarget);V.bindFramebuffer(U.READ_FRAMEBUFFER,Tt.__webglFramebuffer),V.bindFramebuffer(U.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let pn=0;pn<Ne;pn++)ft&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Q.get(R).__webglTexture,$,Ve+pn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Q.get(Z).__webglTexture,Te,pt+pn)),U.blitFramebuffer(je,Xe,Pe,Ie,tt,nt,Pe,Ie,U.DEPTH_BUFFER_BIT,U.NEAREST);V.bindFramebuffer(U.READ_FRAMEBUFFER,null),V.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||Q.has(R)){const Ct=Q.get(R),Pt=Q.get(Z);V.bindFramebuffer(U.READ_FRAMEBUFFER,Lo),V.bindFramebuffer(U.DRAW_FRAMEBUFFER,_s);for(let Tt=0;Tt<Ne;Tt++)ft?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.__webglTexture,$,Ve+Tt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ct.__webglTexture,$),Dt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.__webglTexture,Te,pt+Tt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pt.__webglTexture,Te),$!==0?U.blitFramebuffer(je,Xe,Pe,Ie,tt,nt,Pe,Ie,U.COLOR_BUFFER_BIT,U.NEAREST):Dt?U.copyTexSubImage3D(xt,Te,tt,nt,pt+Tt,je,Xe,Pe,Ie):U.copyTexSubImage2D(xt,Te,tt,nt,je,Xe,Pe,Ie);V.bindFramebuffer(U.READ_FRAMEBUFFER,null),V.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Dt?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(xt,Te,tt,nt,pt,Pe,Ie,Ne,it,He,ht.data):Z.isCompressedArrayTexture?U.compressedTexSubImage3D(xt,Te,tt,nt,pt,Pe,Ie,Ne,it,ht.data):U.texSubImage3D(xt,Te,tt,nt,pt,Pe,Ie,Ne,it,He,ht):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Te,tt,nt,Pe,Ie,it,He,ht.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Te,tt,nt,ht.width,ht.height,it,ht.data):U.texSubImage2D(U.TEXTURE_2D,Te,tt,nt,Pe,Ie,it,He,ht);U.pixelStorei(U.UNPACK_ROW_LENGTH,$e),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,zt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Rn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ft),Te===0&&Z.generateMipmaps&&U.generateMipmap(xt),V.unbindTexture()},this.copyTextureToTexture3D=function(R,Z,ce=null,H=null,$=0){return po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Z,ce,H,$)},this.initRenderTarget=function(R){Q.get(R).__webglFramebuffer===void 0&&b.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),V.unbindTexture()},this.resetState=function(){w=0,E=0,C=null,V.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const Oe=512;function ac(s){s.beginPath(),s.arc(Oe/2,Oe/2,Oe/2,0,Math.PI*2),s.clip()}function hn(s,e,t,i,n){const r=s.createRadialGradient(e,t,0,e,t,i);for(const[o,a]of n)r.addColorStop(o,a);s.fillStyle=r,s.fillRect(0,0,Oe,Oe)}function Ax(s){s.fillStyle="#0e0e13",s.fillRect(0,0,Oe,Oe),ac(s),hn(s,Oe*.32,Oe*.26,Oe*.55,[[0,"rgba(150,158,186,0.38)"],[.35,"rgba(90,96,126,0.16)"],[.7,"rgba(30,32,44,0.05)"],[1,"rgba(0,0,0,0)"]]),hn(s,Oe*.8,Oe*.84,Oe*.5,[[0,"rgba(106,90,138,0.32)"],[.5,"rgba(74,85,120,0.14)"],[1,"rgba(0,0,0,0)"]]),hn(s,Oe*.14,Oe*.86,Oe*.35,[[0,"rgba(90,110,150,0.22)"],[1,"rgba(0,0,0,0)"]]),hn(s,Oe*.34,Oe*.24,Oe*.09,[[0,"rgba(225,230,246,0.8)"],[.4,"rgba(180,186,214,0.25)"],[1,"rgba(0,0,0,0)"]]),lc(s)}function wx(s){s.fillStyle="#0b0b10",s.fillRect(0,0,Oe,Oe),ac(s),hn(s,Oe*.33,Oe*.27,Oe*.6,[[0,"rgba(140,155,195,0.7)"],[.3,"rgba(74,85,120,0.35)"],[.7,"rgba(20,22,34,0.08)"],[1,"rgba(0,0,0,0)"]]),hn(s,Oe*.8,Oe*.8,Oe*.55,[[0,"rgba(96,80,140,0.55)"],[.6,"rgba(50,58,92,0.2)"],[1,"rgba(0,0,0,0)"]]),hn(s,Oe*.37,Oe*.24,Oe*.07,[[0,"rgba(255,255,255,1)"],[.5,"rgba(220,228,255,0.5)"],[1,"rgba(0,0,0,0)"]]),hn(s,Oe*.62,Oe*.55,Oe*.05,[[0,"rgba(190,200,240,0.6)"],[1,"rgba(0,0,0,0)"]]),lc(s)}function lc(s){const e=s.createRadialGradient(Oe/2,Oe/2,Oe*.3,Oe/2,Oe/2,Oe*.5);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(.72,"rgba(0,0,0,0)"),e.addColorStop(.86,"rgba(150,162,196,0.30)"),e.addColorStop(.94,"rgba(120,128,164,0.12)"),e.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=e,s.fillRect(0,0,Oe,Oe);const t=s.createRadialGradient(Oe/2,Oe/2,Oe*.34,Oe/2,Oe/2,Oe*.5);t.addColorStop(0,"rgba(0,0,0,0)"),t.addColorStop(.9,"rgba(0,0,0,0.18)"),t.addColorStop(1,"rgba(0,0,0,0.55)"),s.fillStyle=t,s.fillRect(0,0,Oe,Oe)}function wl(s){const e=document.createElement("canvas");e.width=e.height=Oe,s(e.getContext("2d"));const t=new Kl(e);return t.colorSpace=mt,t}function Rx(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");t.fillStyle="#808080",t.fillRect(0,0,256,256);for(let l=0;l<900;l++){const c=Math.random()*256,u=20+Math.random()*120,h=Math.random()*256,f=108+Math.floor(Math.random()*40);t.strokeStyle=`rgba(${f},${f},${f},${.25+Math.random()*.5})`,t.lineWidth=Math.random()<.85?1:2,t.beginPath(),t.moveTo(h,c),t.lineTo(h+u,c+(Math.random()-.5)*3),t.stroke()}const i=t.getImageData(0,0,256,256),n=t.createImageData(256,256),r=(l,c)=>i.data[((c+256)%256*256+(l+256)%256)*4]/255,o=1.6;for(let l=0;l<256;l++)for(let c=0;c<256;c++){const u=(r(c+1,l)-r(c-1,l))*o,h=(r(c,l+1)-r(c,l-1))*o,f=1/Math.hypot(u,h,1),d=(l*256+c)*4;n.data[d]=(-u*f*.5+.5)*255,n.data[d+1]=(-h*f*.5+.5)*255,n.data[d+2]=(f*.5+.5)*255,n.data[d+3]=255}t.putImageData(n,0,0);const a=new Kl(e);return a.wrapS=a.wrapT=Ai,a.repeat.set(3,3),a}const Cx=[{name:"graphite",trail:"#39ff14"},{name:"ember",trail:"#ff6a3c",key:"255,150,110",iri:"200,70,45",rim:"255,110,60",spec:"255,225,205"},{name:"ink-blue",trail:"#4aa8ff",key:"120,170,255",iri:"60,95,200",rim:"85,140,255",spec:"215,232,255"},{name:"violet",trail:"#b06aff",key:"185,140,255",iri:"130,85,215",rim:"150,105,255",spec:"236,222,255"}];function Px(s,e){s.fillStyle="#0e0e13",s.fillRect(0,0,Oe,Oe),ac(s),hn(s,Oe*.32,Oe*.26,Oe*.55,[[0,`rgba(${e.key},0.5)`],[.35,`rgba(${e.key},0.2)`],[.7,`rgba(${e.key},0.05)`],[1,"rgba(0,0,0,0)"]]),hn(s,Oe*.8,Oe*.84,Oe*.5,[[0,`rgba(${e.iri},0.42)`],[.5,`rgba(${e.iri},0.18)`],[1,"rgba(0,0,0,0)"]]),hn(s,Oe*.14,Oe*.86,Oe*.35,[[0,`rgba(${e.rim},0.3)`],[1,"rgba(0,0,0,0)"]]),hn(s,Oe*.34,Oe*.24,Oe*.09,[[0,`rgba(${e.spec},0.9)`],[.4,`rgba(${e.spec},0.3)`],[1,"rgba(0,0,0,0)"]]),lc(s)}function Lx(s){return Cx.map(e=>({name:e.name,trail:e.trail,matcap:e.key?wl(t=>Px(t,e)):s}))}function Ju(s){return new Promise(e=>{new gf().load(s,t=>{t.colorSpace=mt,e(t)},void 0,()=>e(null))})}async function Ux(s){const e=s?s("matcaps"):()=>{},[t,i]=await Promise.all([Ju("/assets/matcap/matcap-dark.png"),Ju("/assets/matcap/matcap-inkwet.png")]),n={dark:t||wl(Ax),inkwet:i||wl(wx),normal:Rx()};return e(),n}function Dx(s,e=!1){const t=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Et;let c=0;for(let u=0;u<s.length;++u){const h=s[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const h=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=s[f].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Qu(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let v=0;v<o[u].length;++v)d.push(o[u][v][f]);const g=Qu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Qu(s){let e,t,i,n=-1,r=0;for(let c=0;c<s.length;++c){const u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=u.gpuType),n!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new yt(o,t,i);let l=0;for(let c=0;c<s.length;++c){const u=s[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){const v=u.getComponent(f,g);a.setComponent(f+h,g,v)}}else o.set(u.array,l);l+=u.count*t}return n!==void 0&&(a.gpuType=n),a}function Ix(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=s.getIndex(),n=s.getAttribute("position"),r=i?i.count:n.count;let o=0;const a=Object.keys(s.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let x=0,y=a.length;x<y;x++){const _=a[x],A=s.attributes[_];l[_]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);const w=s.morphAttributes[_];w&&(c[_]||(c[_]=[]),w.forEach((E,C)=>{const T=new E.array.constructor(E.count*E.itemSize);c[_][C]=new E.constructor(T,E.itemSize,E.normalized)}))}const d=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=d*v;for(let x=0;x<r;x++){const y=i?i.getX(x):x;let _="";for(let A=0,w=a.length;A<w;A++){const E=a[A],C=s.getAttribute(E),T=C.itemSize;for(let M=0;M<T;M++)_+=`${~~(C[h[M]](y)*v+m)},`}if(_ in t)u.push(t[_]);else{for(let A=0,w=a.length;A<w;A++){const E=a[A],C=s.getAttribute(E),T=s.morphAttributes[E],M=C.itemSize,L=l[E],P=c[E];for(let D=0;D<M;D++){const N=h[D],X=f[D];if(L[X](o,C[N](y)),T)for(let z=0,ie=T.length;z<ie;z++)P[z][X](o,T[z][N](y))}}t[_]=o,u.push(o),o++}}const p=s.clone();for(const x in s.attributes){const y=l[x];if(p.setAttribute(x,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),x in c)for(let _=0;_<c[x].length;_++){const A=c[x][_];p.morphAttributes[x][_]=new A.constructor(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)}}return p.setIndex(u),p}function $u(s,e){if(e===Sd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===gl||e===kh){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,n=[];if(e===gl)for(let o=1;o<=i;o++)n.push(t.getX(0)),n.push(t.getX(o)),n.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(n.push(t.getX(o)),n.push(t.getX(o+1)),n.push(t.getX(o+2))):(n.push(t.getX(o+2)),n.push(t.getX(o+1)),n.push(t.getX(o)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Nx extends hi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zx(t)}),this.register(function(t){return new Gx(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new Hx(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new Xx(t)}),this.register(function(t){return new jx(t)}),this.register(function(t){return new kx(t)}),this.register(function(t){return new Yx(t)}),this.register(function(t){return new Vx(t)}),this.register(function(t){return new Kx(t)}),this.register(function(t){return new qx(t)}),this.register(function(t){return new Ox(t)}),this.register(function(t){return new $x(t)}),this.register(function(t){return new ey(t)})}load(e,t,i,n){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Qr.extractUrlBase(e);o=Qr.resolveURL(c,this.path)}else o=Qr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new fs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Sf){try{o[et.KHR_BINARY_GLTF]=new ty(e)}catch(h){n&&n(h);return}r=JSON.parse(o[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new py(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case et.KHR_MATERIALS_UNLIT:o[h]=new Bx;break;case et.KHR_DRACO_MESH_COMPRESSION:o[h]=new ny(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:o[h]=new iy;break;case et.KHR_MESH_QUANTIZATION:o[h]=new ry;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function Fx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ox{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],kt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Rm(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Am(u),c.distance=h;break;case"spot":c=new Tm(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),zn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class Bx{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return oi}extendParams(e,t,i){const n=[];e.color=new ke(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],kt),e.opacity=o[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,mt))}return Promise.all(n)}}class kx{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class zx{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(a,a)}return Promise.all(r)}}class Gx{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Vx{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Hx{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=n.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,mt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Wx{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Xx{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(a[0],a[1],a[2],kt),Promise.all(r)}}class jx{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Yx{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(a[0],a[1],a[2],kt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,mt)),Promise.all(r)}}class qx{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Kx{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Zx{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Jx{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=n.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Qx{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=n.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class $x{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=n.byteOffset||0,c=n.byteLength||0,u=n.count,h=n.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,n.mode,n.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,n.mode,n.filter),d})})}else return null}}class ey{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==ln.TRIANGLES&&c.mode!==ln.TRIANGLE_STRIP&&c.mode!==ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const v=new qe,m=new B,p=new ui,x=new B(1,1,1),y=new Ap(g.geometry,g.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&x.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,v.compose(m,p,x));for(const _ in l)if(_==="_COLOR_0"){const A=l[_];y.instanceColor=new So(A.array,A.itemSize,A.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);dt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Sf="glTF",kr=12,eh={JSON:1313821514,BIN:5130562};class ty{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,kr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-kr,r=new DataView(e,kr);let o=0;for(;o<n;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===eh.JSON){const c=new Uint8Array(e,kr+o,a);this.content=i.decode(c)}else if(l===eh.BIN){const c=kr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ny{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Rl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Rl[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],d=rr[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){n.decodeDracoFile(u,function(d){for(const g in d.attributes){const v=d.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(d)},a,c,kt,f)})})}}class iy{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ry{constructor(){this.name=et.KHR_MESH_QUANTIZATION}}class bf extends gs{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let o=0;o!==n;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=n-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,v=g-c,m=-2*d+3*f,p=d-f,x=1-m,y=p-f+h;for(let _=0;_!==a;_++){const A=o[v+_+a],w=o[v+_+l]*u,E=o[g+_+a],C=o[g+_]*u;r[_]=x*A+y*w+m*E+p*C}return r}}const sy=new ui;class oy extends bf{interpolate_(e,t,i,n){const r=super.interpolate_(e,t,i,n);return sy.fromArray(r).normalize().toArray(r),r}}const ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},th={9728:Xt,9729:Wt,9984:Ch,9985:ao,9986:Gr,9987:Gn},nh={33071:si,33648:xo,10497:Ai},Ta={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ay={CUBICSPLINE:void 0,LINEAR:os,STEP:ss},Ea={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ly(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ec({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wn})),s.DefaultMaterial}function _i(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function zn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cy(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(n=!0),h.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(n){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(s.morphAttributes.position=u),n&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function uy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hy(s){let e;const t=s.extensions&&s.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Aa(t.attributes):e=s.indices+":"+Aa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+Aa(s.targets[i]);return e}function Aa(s){let e="";const t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function Cl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const dy=new qe;class py{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Fx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&o<98?this.textureLoader=new gf(this.options.manager):this.textureLoader=new Pm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][n.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:n.asset,parser:i,userData:{}};return _i(r,a,n),zn(a,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){const o=t[n].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let n=0,r=e.length;n<r;n++){const o=e[n];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,o){i.load(Qr.resolveURL(t.uri,n.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const o=Ta[n.type],a=rr[n.componentType],l=n.normalized===!0,c=new a(n.count*o);return Promise.resolve(new yt(c,o,l))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ta[n.type],c=rr[n.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=n.byteOffset||0,d=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let v,m;if(d&&d!==h){const p=Math.floor(f/d),x="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count;let y=t.cache.get(x);y||(v=new c(a,p*d,n.count*d/u),y=new Jh(v,d/u),t.cache.add(x,y)),m=new ls(y,l,f%d/u,g)}else a===null?v=new c(n.count*l):v=new c(a,f,n.count*l),m=new yt(v,l,g);if(n.sparse!==void 0){const p=Ta.SCALAR,x=rr[n.sparse.indices.componentType],y=n.sparse.indices.byteOffset||0,_=n.sparse.values.byteOffset||0,A=new x(o[1],y,n.sparse.count*p),w=new c(o[2],_,n.sparse.count*l);a!==null&&(m=new yt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,C=A.length;E<C;E++){const T=A[E];if(m.setX(T,w[E*l]),l>=2&&m.setY(T,w[E*l+1]),l>=3&&m.setZ(T,w[E*l+2]),l>=4&&m.setW(T,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const n=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=th[f.magFilter]||Wt,u.minFilter=th[f.minFilter]||Gn,u.wrapS=nh[f.wrapS]||Ai,u.wrapT=nh[f.wrapT]||Ai,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Xt&&u.minFilter!==Wt,n.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=n.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(v){const m=new bt(v);m.needsUpdate=!0,f(m)}),t.load(Qr.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),zn(h,o),h.userData.mimeType=o.mimeType||fy(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,n){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[et.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return n!==void 0&&(o.colorSpace=n),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new er,jt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new qr,jt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(n||r||o){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ec}loadMaterial(e){const t=this,i=this.json,n=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[et.KHR_MATERIALS_UNLIT]){const h=n[et.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ke(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],kt),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,mt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=nn);const u=r.alphaMode||Ea.OPAQUE;if(u===Ea.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ea.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==oi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ee(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==oi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==oi){const h=r.emissiveFactor;a.emissive=new ke().setRGB(h[0],h[1],h[2],kt)}return r.emissiveTexture!==void 0&&o!==oi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,mt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),zn(h,r),t.associations.set(h,{materials:e}),r.extensions&&_i(n,h,r),h})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function r(a){return i[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ih(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=hy(c),h=n[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[et.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=ih(new Et,c,t),n[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,n=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?ly(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const v=u[d],m=o[d];let p;const x=c[d];if(m.mode===ln.TRIANGLES||m.mode===ln.TRIANGLE_STRIP||m.mode===ln.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new bp(v,x):new vt(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ln.TRIANGLE_STRIP?p.geometry=$u(p.geometry,kh):m.mode===ln.TRIANGLE_FAN&&(p.geometry=$u(p.geometry,gl));else if(m.mode===ln.LINES)p=new xl(v,x);else if(m.mode===ln.LINE_STRIP)p=new ql(v,x);else if(m.mode===ln.LINE_LOOP)p=new Cp(v,x);else if(m.mode===ln.POINTS)p=new mo(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&uy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),zn(p,r),m.extensions&&_i(n,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&_i(n,h[0],r),h[0];const f=new Sn;r.extensions&&_i(n,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ht(bn.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new ic(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),zn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const r=n.pop(),o=n,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new jl(a,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=n.channels.length;h<f;h++){const d=n.channels[h],g=n.samplers[d.sampler],v=d.target,m=v.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,x=n.parameters!==void 0?n.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],v=h[3],m=h[4],p=[];for(let x=0,y=f.length;x<y;x++){const _=f[x],A=d[x],w=g[x],E=v[x],C=m[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const T=i._createAnimationTracks(_,A,w,E,C);if(T)for(let M=0;M<T.length;M++)p.push(T[M])}return new gm(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=n.weights.length;l<c;l++)a.morphTargetInfluences[l]=n.weights[l]}),o})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=n.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,dy)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?n.createUniqueName(r.name):"",a=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new $h:c.length>1?u=new Sn:c.length===1?u=c[0]:u=new dt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),zn(u,r),r.extensions&&_i(i,u,r),r.matrix!==void 0){const h=new qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return n.associations.has(u)||n.associations.set(u,{}),n.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,r=new Sn;i.name&&(r.name=n.createUniqueName(i.name)),zn(r,i),i.extensions&&_i(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(n.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of n.associations)(f instanceof jt||f instanceof bt)&&h.set(f,d);return u.traverse(f=>{const d=n.associations.get(f);d!=null&&h.set(f,d)}),h};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){const o=[],a=e.name?e.name:e.uuid,l=[];ni[r.path]===ni.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ni[r.path]){case ni.weights:c=hr;break;case ni.rotation:c=fr;break;case ni.translation:case ni.scale:c=dr;break;default:switch(i.itemSize){case 1:c=hr;break;case 2:case 3:default:c=dr;break}break}const u=n.interpolation!==void 0?ay[n.interpolation]:os,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+ni[r.path],t.array,h,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Cl(t.constructor),n=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof fr?oy:bf;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function my(s,e,t){const i=e.attributes,n=new Tn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(n.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const u=Cl(rr[a.componentType]);n.min.multiplyScalar(u),n.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new B,l=new B;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const v=Cl(rr[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}s.boundingBox=n;const o=new En;n.getCenter(o.center),o.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=o}function ih(s,e,t){const i=e.attributes,n=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in i){const a=Rl[o]||o.toLowerCase();a in s.attributes||n.push(r(i[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});n.push(o)}return rt.workingColorSpace!==kt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),zn(s,e),my(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?cy(s,e.targets,t):s})}const wa=new WeakMap;class gy extends hi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,n){const r=new fs(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,n)},i,n)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,mt,i).catch(i)}decodeDracoFile(e,t,i,n,r=kt,o=()=>{}){const a={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const i=JSON.stringify(t);if(wa.has(e)){const l=wa.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(n=l,new Promise((c,u)=>{n._callbacks[r]={resolve:c,reject:u},n.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{n&&r&&this._releaseTask(n,r)}),wa.set(e,{key:i,promise:a}),a}_createGeometry(e){const t=new Et;e.index&&t.setIndex(new yt(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const n=e.attributes[i],r=n.name,o=n.array,a=n.itemSize,l=new yt(o,a);r==="color"&&(this._assignVertexColorSpace(l,n.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==mt)return;const i=new ke;for(let n=0,r=e.count;n<r;n++)i.fromBufferAttribute(e,n),rt.toWorkingColorSpace(i,mt),e.setXYZ(n,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new fs(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((n,r)=>{i.load(e,n,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const n=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const r=vy.toString(),o=["/* draco decoder */",n,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(r){const o=r.data;switch(o.type){case"decode":n._callbacks[o.id].resolve(o);break;case"error":n._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,r){return n._taskLoad>r._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function vy(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),g=d.attributes.map(v=>v.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(g===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const v={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let x,y;if(c.useUniqueIDs)y=u[m],x=a.GetAttributeByUniqueId(f,y);else{if(y=a.GetAttributeId(f,o[u[m]]),y===-1)continue;x=a.GetAttribute(f,y)}const _=n(o,a,f,m,p,x);m==="color"&&(_.vertexColorSpace=c.vertexColorSpace),v.attributes.push(_)}return g===o.TRIANGULAR_MESH&&(v.index=i(o,a,f)),o.destroy(f),v}function i(o,a,l){const u=l.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function n(o,a,l,c,u,h){const f=h.num_components(),g=l.num_points()*f,v=g*u.BYTES_PER_ELEMENT,m=r(o,u),p=o._malloc(v);a.GetAttributeDataArrayForAllPoints(l,h,m,v,p);const x=new u(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:c,array:x,itemSize:f}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const _y=/^[og]\s*(.+)?/,xy=/^mtllib /,yy=/^usemtl /,My=/^usemap /,rh=/\s+/,sh=new B,Ra=new B,oh=new B,ah=new B,an=new B,no=new ke;function Sy(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(n,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:n||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(n){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),n&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return n&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const n=i.clone(0);n.inherited=!0,this.object.materials.push(n)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const n=this.vertices,r=this.object.geometry.vertices;r.push(n[e+0],n[e+1],n[e+2]),r.push(n[t+0],n[t+1],n[t+2]),r.push(n[i+0],n[i+1],n[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const n=this.normals,r=this.object.geometry.normals;r.push(n[e+0],n[e+1],n[e+2]),r.push(n[t+0],n[t+1],n[t+2]),r.push(n[i+0],n[i+1],n[i+2])},addFaceNormal:function(e,t,i){const n=this.vertices,r=this.object.geometry.normals;sh.fromArray(n,e),Ra.fromArray(n,t),oh.fromArray(n,i),an.subVectors(oh,Ra),ah.subVectors(sh,Ra),an.cross(ah),an.normalize(),r.push(an.x,an.y,an.z),r.push(an.x,an.y,an.z),r.push(an.x,an.y,an.z)},addColor:function(e,t,i){const n=this.colors,r=this.object.geometry.colors;n[e]!==void 0&&r.push(n[e+0],n[e+1],n[e+2]),n[t]!==void 0&&r.push(n[t+0],n[t+1],n[t+2]),n[i]!==void 0&&r.push(n[i+0],n[i+1],n[i+2])},addUV:function(e,t,i){const n=this.uvs,r=this.object.geometry.uvs;r.push(n[e+0],n[e+1]),r.push(n[t+0],n[t+1]),r.push(n[i+0],n[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,n,r,o,a,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),d=this.parseVertexIndex(i,u);if(this.addVertex(h,f,d),this.addColor(h,f,d),a!==void 0&&a!==""){const g=this.normals.length;h=this.parseNormalIndex(a,g),f=this.parseNormalIndex(l,g),d=this.parseNormalIndex(c,g),this.addNormal(h,f,d)}else this.addFaceNormal(h,f,d);if(n!==void 0&&n!==""){const g=this.uvs.length;h=this.parseUVIndex(n,g),f=this.parseUVIndex(r,g),d=this.parseUVIndex(o,g),this.addUV(h,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,n=e.length;i<n;i++){const r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,n=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],n))}};return s.startObject("",!1),s}class by extends hi{constructor(e){super(e),this.materials=null}load(e,t,i,n){const r=this,o=new fs(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){n?n(l):console.error(l),r.manager.itemError(e)}},i,n)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Sy;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let n=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split(rh);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(no.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),mt),t.colors.push(no.r,no.g,no.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=c.slice(1).trim().split(rh),d=[];for(let v=0,m=f.length;v<m;v++){const p=f[v];if(p.length>0){const x=p.split("/");d.push(x)}}const g=d[0];for(let v=1,m=d.length-1;v<m;v++){const p=d[v],x=d[v+1];t.addFace(g[0],p[0],x[0],g[1],p[1],x[1],g[2],p[2],x[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let f=[];const d=[];if(c.indexOf("/")===-1)f=h;else for(let g=0,v=h.length;g<v;g++){const m=h[g].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&d.push(m[1])}t.addLineGeometry(f,d)}else if(u==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((n=_y.exec(c))!==null){const h=(" "+n[0].slice(1).trim()).slice(1);t.startObject(h)}else if(yy.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(xy.test(c))t.materialLibraries.push(c.substring(7).trim());else if(My.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(n=c.split(" "),n.length>1){const f=n[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new Sn;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,h=c.materials,f=u.type==="Line",d=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const v=new Et;v.setAttribute("position",new St(u.vertices,3)),u.normals.length>0&&v.setAttribute("normal",new St(u.normals,3)),u.colors.length>0&&(g=!0,v.setAttribute("color",new St(u.colors,3))),u.hasUVIndices===!0&&v.setAttribute("uv",new St(u.uvs,2));const m=[];for(let x=0,y=h.length;x<y;x++){const _=h[x],A=_.name+"_"+_.smooth+"_"+g;let w=t.materials[A];if(this.materials!==null){if(w=this.materials.create(_.name),f&&w&&!(w instanceof qr)){const E=new qr;jt.prototype.copy.call(E,w),E.color.copy(w.color),w=E}else if(d&&w&&!(w instanceof er)){const E=new er({size:10,sizeAttenuation:!1});jt.prototype.copy.call(E,w),E.color.copy(w.color),E.map=w.map,w=E}}w===void 0&&(f?w=new qr:d?w=new er({size:1,sizeAttenuation:!1}):w=new cm,w.name=_.name,w.flatShading=!_.smooth,w.vertexColors=g,t.materials[A]=w),m.push(w)}let p;if(m.length>1){for(let x=0,y=h.length;x<y;x++){const _=h[x];v.addGroup(_.groupStart,_.groupCount,x)}f?p=new xl(v,m):d?p=new mo(v,m):p=new vt(v,m)}else f?p=new xl(v,m[0]):d?p=new mo(v,m[0]):p=new vt(v,m[0]);p.name=c.name,r.add(p)}else if(t.vertices.length>0){const a=new er({size:1,sizeAttenuation:!1}),l=new Et;l.setAttribute("position",new St(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new St(t.colors,3)),a.vertexColors=!0);const c=new mo(l,a);r.add(c)}return r}}const Tf=3;function Ty(){const s=new af;s.moveTo(.045,.02),s.bezierCurveTo(.13,.72,.3,1.34,.47,1.72),s.bezierCurveTo(.54,1.86,.56,1.98,.54,2.12),s.bezierCurveTo(.5,2.5,.43,2.78,.27,2.92),s.bezierCurveTo(.14,3.01,-.14,3.01,-.27,2.92),s.bezierCurveTo(-.43,2.78,-.5,2.5,-.54,2.12),s.bezierCurveTo(-.56,1.98,-.54,1.86,-.47,1.72),s.bezierCurveTo(-.3,1.34,-.13,.72,-.045,.02),s.quadraticCurveTo(0,-.045,.045,.02),s.closePath();const e=new Eo;e.absarc(0,1.5,.125,0,Math.PI*2,!0),s.holes.push(e);const t=new Eo,i=.028;return t.moveTo(-i,.07),t.lineTo(i,.07),t.lineTo(i*.7,1.35),t.lineTo(-i*.7,1.35),t.closePath(),s.holes.push(t),s}function Ey(){let e=new Ql(Ty(),{depth:.045,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:2,curveSegments:28});const t=e.attributes.position,i=.045/2;for(let a=0;a<t.count;a++){let l=t.getX(a),c=t.getY(a),u=t.getZ(a);const h=bn.clamp(c/Tf,0,1);u=i+(u-i)*(.45+.55*h),u-=l*l*.2,u+=Math.sin(h*Math.PI)*.055,l+=Math.sin(c*5.1+.7)*.006*(1-h),u+=Math.sin(l*9+c*3)*.0035,t.setXYZ(a,l,c,u)}e.deleteAttribute("uv"),e.deleteAttribute("normal"),e=Ix(e,1e-4),e.computeVertexNormals(),e.computeBoundingBox();const n=e.boundingBox,r=new B;n.getSize(r);const o=new Float32Array(e.attributes.position.count*2);for(let a=0;a<e.attributes.position.count;a++)o[a*2]=(e.attributes.position.getX(a)-n.min.x)/r.x,o[a*2+1]=(e.attributes.position.getY(a)-n.min.y)/r.y;return e.setAttribute("uv",new yt(o,2)),e.center(),e}function Ef(s){s.attributes.normal||s.computeVertexNormals(),s.center(),s.computeBoundingBox();const e=new B;s.boundingBox.getSize(e),e.z>=e.x&&e.z>=e.y?s.rotateX(-Math.PI/2):e.x>=e.y&&e.x>=e.z&&s.rotateZ(Math.PI/2),s.computeBoundingBox(),s.boundingBox.getSize(e);const t=Tf/Math.max(e.x,e.y,e.z);return s.scale(t,t,t),s}function Af(s){const e=[];if(s.traverse(t=>{if(t.isMesh&&t.geometry){const i=t.geometry.clone();i.applyMatrix4(t.matrixWorld);for(const n of Object.keys(i.attributes))n!=="position"&&n!=="normal"&&n!=="uv"&&i.deleteAttribute(n);e.push(i.index?i.toNonIndexed():i)}}),e.length===0)return null;if(e.length===1)return e[0];try{return Dx(e,!1)||e[0]}catch{return e[0]}}function Ay(s){return new Promise(e=>{const t=new gy().setDecoderPath("/draco/");new Nx().setDRACOLoader(t).load(s,n=>{n.scene.updateMatrixWorld(!0);const r=Af(n.scene);t.dispose(),e(r?Ef(r):null)},void 0,()=>{t.dispose(),e(null)})})}function wy(s){return new Promise(e=>{new by().load(s,t=>{t.updateMatrixWorld(!0);const i=Af(t);e(i?Ef(i):null)},void 0,()=>e(null))})}const Ry=!0;async function Cy(s){const e=s?s("nib"):()=>{},t=await Ay("/assets/model/hero.glb")||await wy("/assets/model/hero.obj");t&&Ry&&t.rotateZ(Math.PI);const i=t||Ey();return e(),i}function Py(){const s=new jn(.78,1.1,8,10),e=s.attributes.position;for(let t=0;t<e.count;t++){const i=e.getX(t),n=e.getY(t),r=Math.sin((i/.78+.5)*Math.PI)*.05+Math.sin(n/1.1*Math.PI*.8+.4)*.03;e.setZ(t,r)}return s.computeVertexNormals(),s}const Ly=[[.4,2.3,-1.4,1,.05],[1.5,2.9,-2.2,1.25,-.04],[2.6,2.1,-.9,.8,.06],[3.8,2.6,-1.8,1.1,-.05],[4.9,3.2,-2.6,1.4,.03],[5.7,2,-.6,.7,-.07]],Uy=[[.9,1.7,-.4,.09],[2.2,2.4,-1.2,.055],[4.3,1.9,-.8,.07],[5.4,2.7,-1.9,.11]];function Dy({dark:s,inkwet:e}){const t=new Sn,i=[],n=Py(),r=new Tl({matcap:s,color:14275782,side:nn});Ly.forEach(([l,c,u,h,f],d)=>{const g=new vt(n,r);g.position.set(Math.cos(l)*c,Math.sin(l)*c*.65,u),g.scale.setScalar(h),g.rotation.set(Math.sin(d*2.1)*.7,Math.cos(d*1.3)*.6,d*.9),t.add(g),i.push({mesh:g,spin:f,axis:d%3,phase:d*1.7})});const o=new $l(1,24,16),a=new Tl({matcap:e,color:1315868});return Uy.forEach(([l,c,u,h],f)=>{const d=new vt(o,a);d.position.set(Math.cos(l)*c,Math.sin(l)*c*.6,u),d.scale.setScalar(h),t.add(d),i.push({mesh:d,spin:.02,axis:1,phase:f*2.3+1})}),{group:t,update(l){for(const c of i){const u=c.mesh.rotation;c.axis===0?u.x+=c.spin*.016:c.axis===1?u.y+=c.spin*.016:u.z+=c.spin*.016,c.mesh.position.y+=Math.sin(l*.4+c.phase)*6e-4}}}}const Iy=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 1.0, 1.0); // fullscreen, ignore camera
  }
`,Ny=`
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uScroll;
  uniform vec3 uColA;   /* ink black  */
  uniform vec3 uColB;   /* midnight ink blue */

  /* value noise + fbm — low frequency, cheap */
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x),
               mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p = p * 2.03 + vec2(1.7, 9.2);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;

    /* 2-stop gradient: charcoal upper-left → blue-black lower-right,
       breathing slowly and drifting with scroll */
    float g = smoothstep(-0.2, 1.15, uv.x * 0.55 + (1.0 - uv.y) * 0.75 + uScroll * 0.25);
    vec3 col = mix(uColA, uColB, g * 0.55);

    /* slow-blooming darker ink plumes */
    float t = uTime * 0.035;
    float plume = fbm(uv * 2.1 + vec2(t * 0.8, -t) + fbm(uv * 3.0 - t) * 0.55);
    col *= 1.0 - smoothstep(0.45, 0.95, plume) * 0.5;

    /* faint blue bloom where plumes thin out */
    col += uColB * smoothstep(0.5, 0.05, plume) * 0.10;

    /* ~3%% film grain */
    float grain = hash(uv * vec2(1920.0, 1080.0) + fract(uTime) * 61.7) - 0.5;
    col += grain * 0.03;

    gl_FragColor = vec4(col, 1.0);
  }
`;function Fy(){const s=new Pn({vertexShader:Iy,fragmentShader:Ny,uniforms:{uTime:{value:0},uScroll:{value:0},uColA:{value:new ke("#101014")},uColB:{value:new ke("#4A5578")}},depthWrite:!1,depthTest:!1}),e=new vt(new jn(2,2),s);return e.frustumCulled=!1,e.renderOrder=-1,{mesh:e,update(t,i){s.uniforms.uTime.value=t,s.uniforms.uScroll.value=i}}}const lh=[-.08,-.15,-.5],Ca=[-.95,-.12,-.6],ch={home:[{at:0,pos:[1.18,.05,0],rot:lh,scale:1},{at:.3,pos:[-1.15,.42,-.5],rot:Ca,scale:.8},{at:.55,pos:[.05,.18,-.55],rot:[-.88,-.05,-.52],scale:.78},{at:.78,pos:[1.15,.4,-.6],rot:[-.98,-.2,-.66],scale:.75},{at:1,pos:[-.55,.15,-1.6],rot:[-.35,.35,-.25],scale:.62}],work:[{at:0,pos:[-1.25,.5,-.9],rot:[-.5,.45,-.3],scale:.7},{at:.5,pos:[-.1,.2,-1],rot:Ca,scale:.62},{at:1,pos:[1.05,.45,-1.3],rot:[-1,-.25,-.7],scale:.58}],craft:[{at:0,pos:[1.25,.35,-.7],rot:[-.3,-.5,-.45],scale:.75},{at:.5,pos:[.3,.05,-.9],rot:Ca,scale:.68},{at:1,pos:[-1,.3,-1.4],rot:[-.6,.4,-.3],scale:.6}],about:[{at:0,pos:[0,.55,-1.4],rot:[-.25,.1,-.5],scale:.55},{at:1,pos:[.4,-.2,-2],rot:[-.5,.6,-.2],scale:.48}],contact:[{at:0,pos:[1.1,.1,-.5],rot:lh,scale:.85},{at:1,pos:[.6,.45,-1],rot:[-1.05,-.2,-.72],scale:.7}]},uh=new B,io=new B;function Oy(s){return s*s*s*(s*(s*6-15)+10)}function By(s,e,t){const i=ch[s]||ch.home,n=bn.clamp(e,0,1);let r=i[0],o=i[i.length-1];for(let c=0;c<i.length-1;c++)if(n>=i[c].at&&n<=i[c+1].at){r=i[c],o=i[c+1];break}const a=Math.max(1e-5,o.at-r.at),l=Oy(bn.clamp((n-r.at)/a,0,1));uh.fromArray(r.pos).lerp(ky.fromArray(o.pos),l),io.fromArray(r.rot).lerp(zy.fromArray(o.rot),l),t.pos.copy(uh),t.rot.set(io.x,io.y,io.z),t.scale=bn.lerp(r.scale,o.scale,l)}const ky=new B,zy=new B;function Gy(){var s=Object.create(null);function e(n,r){var o=n.id,a=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!s[o])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),c=i("<"+a+">.init",c),u&&(u=i("<"+a+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[o]={id:o,value:h,getTransferables:u},r(h)}catch(f){f&&f.noLog||console.error(f),r(f)}}function t(n,r){var o,a=n.id,l=n.args;(!s[a]||typeof s[a].value!="function")&&r(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var c=(o=s[a]).value.apply(o,l);c&&typeof c.then=="function"?c.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){r(h)}function u(h){try{var f=s[a].getTransferables&&s[a].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),r(h,f)}catch(d){console.error(d),r(d)}}}function i(n,r){var o=void 0;self.troikaDefine=function(l){return o=l};var a=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(l){console.error(l)}return URL.revokeObjectURL(a),delete self.troikaDefine,o}self.addEventListener("message",function(n){var r=n.data,o=r.messageId,a=r.action,l=r.data;try{a==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),a==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function Vy(s){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,i=s.init;t=Array.isArray(t)?t.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var wf=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return wf=function(){return s},s},Hy=0,Wy=0,Pa=!1,$r=Object.create(null),es=Object.create(null),Pl=Object.create(null);function _r(s){if((!s||typeof s.init!="function")&&!Pa)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,i=s.getTransferables,n=s.workerId,r=Vy(s);n==null&&(n="#default");var o="workerModule"+ ++Hy,a=s.name||o,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(Pa=!0,u=_r({workerId:n,name:"<"+a+"> function dependency: "+u.name,init:`function(){return (
`+vo(u)+`
)}`}),Pa=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],h=arguments.length;h--;)u[h]=arguments[h];if(!wf())return r.apply(void 0,u);if(!l){l=hh(n,"registerModule",c.workerModuleData);var f=function(){l=null,es[n].delete(f)};(es[n]||(es[n]=new Set)).add(f)}return l.then(function(d){var g=d.isCallable;if(g)return hh(n,"callModule",{id:o,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:o,name:a,dependencies:e,init:vo(t),getTransferables:i&&vo(i)},c.onMainThread=r,c}function Xy(s){es[s]&&es[s].forEach(function(e){e()}),$r[s]&&($r[s].terminate(),delete $r[s])}function vo(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function jy(s){var e=$r[s];if(!e){var t=vo(Gy);e=$r[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,o=Pl[r];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete Pl[r],o(n)}}return e}function hh(s,e,t){return new Promise(function(i,n){var r=++Wy;Pl[r]=function(o){o.success?i(o.result):n(new Error("Error in worker "+e+" call: "+o.error))},jy(s).postMessage({messageId:r,action:e,data:t})})}function Rf(){var s=(function(e){function t(ee,J,I,W,re,F,k,ne){var j=1-k;ne.x=j*j*ee+2*j*k*I+k*k*re,ne.y=j*j*J+2*j*k*W+k*k*F}function i(ee,J,I,W,re,F,k,ne,j,le){var Se=1-j;le.x=Se*Se*Se*ee+3*Se*Se*j*I+3*Se*j*j*re+j*j*j*k,le.y=Se*Se*Se*J+3*Se*Se*j*W+3*Se*j*j*F+j*j*j*ne}function n(ee,J){for(var I=/([MLQCZ])([^MLQCZ]*)/g,W,re,F,k,ne;W=I.exec(ee);){var j=W[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(le){return parseFloat(le)});switch(W[1]){case"M":k=re=j[0],ne=F=j[1];break;case"L":(j[0]!==k||j[1]!==ne)&&J("L",k,ne,k=j[0],ne=j[1]);break;case"Q":{J("Q",k,ne,k=j[2],ne=j[3],j[0],j[1]);break}case"C":{J("C",k,ne,k=j[4],ne=j[5],j[0],j[1],j[2],j[3]);break}case"Z":(k!==re||ne!==F)&&J("L",k,ne,re,F);break}}}function r(ee,J,I){I===void 0&&(I=16);var W={x:0,y:0};n(ee,function(re,F,k,ne,j,le,Se,ye,xe){switch(re){case"L":J(F,k,ne,j);break;case"Q":{for(var fe=F,Ue=k,U=1;U<I;U++)t(F,k,le,Se,ne,j,U/(I-1),W),J(fe,Ue,W.x,W.y),fe=W.x,Ue=W.y;break}case"C":{for(var Re=F,te=k,se=1;se<I;se++)i(F,k,le,Se,ye,xe,ne,j,se/(I-1),W),J(Re,te,W.x,W.y),Re=W.x,te=W.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(ee,J){var I=ee.getContext?ee.getContext("webgl",c):ee,W=l.get(I);if(!W){let Se=function(Re){var te=F[Re];if(!te&&(te=F[Re]=I.getExtension(Re),!te))throw new Error(Re+" not supported");return te},ye=function(Re,te){var se=I.createShader(te);return I.shaderSource(se,Re),I.compileShader(se),se},xe=function(Re,te,se,V){if(!k[Re]){var he={},Q={},b=I.createProgram();I.attachShader(b,ye(te,I.VERTEX_SHADER)),I.attachShader(b,ye(se,I.FRAGMENT_SHADER)),I.linkProgram(b),k[Re]={program:b,transaction:function(O){I.useProgram(b),O({setUniform:function(Y,oe){for(var de=[],ue=arguments.length-2;ue-- >0;)de[ue]=arguments[ue+2];var me=Q[oe]||(Q[oe]=I.getUniformLocation(b,oe));I["uniform"+Y].apply(I,[me].concat(de))},setAttribute:function(Y,oe,de,ue,me){var Le=he[Y];Le||(Le=he[Y]={buf:I.createBuffer(),loc:I.getAttribLocation(b,Y),data:null}),I.bindBuffer(I.ARRAY_BUFFER,Le.buf),I.vertexAttribPointer(Le.loc,oe,I.FLOAT,!1,0,0),I.enableVertexAttribArray(Le.loc),re?I.vertexAttribDivisor(Le.loc,ue):Se("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Le.loc,ue),me!==Le.data&&(I.bufferData(I.ARRAY_BUFFER,me,de),Le.data=me)}})}}}k[Re].transaction(V)},fe=function(Re,te){j++;try{I.activeTexture(I.TEXTURE0+j);var se=ne[Re];se||(se=ne[Re]=I.createTexture(),I.bindTexture(I.TEXTURE_2D,se),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MIN_FILTER,I.NEAREST),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MAG_FILTER,I.NEAREST)),I.bindTexture(I.TEXTURE_2D,se),te(se,j)}finally{j--}},Ue=function(Re,te,se){var V=I.createFramebuffer();le.push(V),I.bindFramebuffer(I.FRAMEBUFFER,V),I.activeTexture(I.TEXTURE0+te),I.bindTexture(I.TEXTURE_2D,Re),I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Re,0);try{se(V)}finally{I.deleteFramebuffer(V),I.bindFramebuffer(I.FRAMEBUFFER,le[--le.length-1]||null)}},U=function(){F={},k={},ne={},j=-1,le.length=0};var re=typeof WebGL2RenderingContext<"u"&&I instanceof WebGL2RenderingContext,F={},k={},ne={},j=-1,le=[];I.canvas.addEventListener("webglcontextlost",function(Re){U(),Re.preventDefault()},!1),l.set(I,W={gl:I,isWebGL2:re,getExtension:Se,withProgram:xe,withTexture:fe,withTextureFramebuffer:Ue,handleContextLoss:U})}J(W)}function h(ee,J,I,W,re,F,k,ne){k===void 0&&(k=15),ne===void 0&&(ne=null),u(ee,function(j){var le=j.gl,Se=j.withProgram,ye=j.withTexture;ye("copy",function(xe,fe){le.texImage2D(le.TEXTURE_2D,0,le.RGBA,re,F,0,le.RGBA,le.UNSIGNED_BYTE,J),Se("copy",o,a,function(Ue){var U=Ue.setUniform,Re=Ue.setAttribute;Re("aUV",2,le.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),U("1i","image",fe),le.bindFramebuffer(le.FRAMEBUFFER,ne||null),le.disable(le.BLEND),le.colorMask(k&8,k&4,k&2,k&1),le.viewport(I,W,re,F),le.scissor(I,W,re,F),le.drawArrays(le.TRIANGLES,0,3)})})})}function f(ee,J,I){var W=ee.width,re=ee.height;u(ee,function(F){var k=F.gl,ne=new Uint8Array(W*re*4);k.readPixels(0,0,W,re,k.RGBA,k.UNSIGNED_BYTE,ne),ee.width=J,ee.height=I,h(k,ne,0,0,W,re)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function g(ee,J,I,W,re,F){F===void 0&&(F=1);var k=new Uint8Array(ee*J),ne=W[2]-W[0],j=W[3]-W[1],le=[];r(I,function(Re,te,se,V){le.push({x1:Re,y1:te,x2:se,y2:V,minX:Math.min(Re,se),minY:Math.min(te,V),maxX:Math.max(Re,se),maxY:Math.max(te,V)})}),le.sort(function(Re,te){return Re.maxX-te.maxX});for(var Se=0;Se<ee;Se++)for(var ye=0;ye<J;ye++){var xe=Ue(W[0]+ne*(Se+.5)/ee,W[1]+j*(ye+.5)/J),fe=Math.pow(1-Math.abs(xe)/re,F)/2;xe<0&&(fe=1-fe),fe=Math.max(0,Math.min(255,Math.round(fe*255))),k[ye*ee+Se]=fe}return k;function Ue(Re,te){for(var se=1/0,V=1/0,he=le.length;he--;){var Q=le[he];if(Q.maxX+V<=Re)break;if(Re+V>Q.minX&&te-V<Q.maxY&&te+V>Q.minY){var b=p(Re,te,Q.x1,Q.y1,Q.x2,Q.y2);b<se&&(se=b,V=Math.sqrt(se))}}return U(Re,te)&&(V=-V),V}function U(Re,te){for(var se=0,V=le.length;V--;){var he=le[V];if(he.maxX<=Re)break;var Q=he.y1>te!=he.y2>te&&Re<(he.x2-he.x1)*(te-he.y1)/(he.y2-he.y1)+he.x1;Q&&(se+=he.y1<he.y2?1:-1)}return se!==0}}function v(ee,J,I,W,re,F,k,ne,j,le){F===void 0&&(F=1),ne===void 0&&(ne=0),j===void 0&&(j=0),le===void 0&&(le=0),m(ee,J,I,W,re,F,k,null,ne,j,le)}function m(ee,J,I,W,re,F,k,ne,j,le,Se){F===void 0&&(F=1),j===void 0&&(j=0),le===void 0&&(le=0),Se===void 0&&(Se=0);for(var ye=g(ee,J,I,W,re,F),xe=new Uint8Array(ye.length*4),fe=0;fe<ye.length;fe++)xe[fe*4+Se]=ye[fe];h(k,xe,j,le,ee,J,1<<3-Se,ne)}function p(ee,J,I,W,re,F){var k=re-I,ne=F-W,j=k*k+ne*ne,le=j?Math.max(0,Math.min(1,((ee-I)*k+(J-W)*ne)/j)):0,Se=ee-(I+le*k),ye=J-(W+le*ne);return Se*Se+ye*ye}var x=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:v,generateIntoFramebuffer:m}),y="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",_="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",A="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),E=null,C=!1,T={},M=new WeakMap;function L(ee){if(!C&&!X(ee))throw new Error("WebGL generation not supported")}function P(ee,J,I,W,re,F,k){if(F===void 0&&(F=1),k===void 0&&(k=null),!k&&(k=E,!k)){var ne=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ne)throw new Error("OffscreenCanvas or DOM canvas not supported");k=E=ne.getContext("webgl",{depth:!1})}L(k);var j=new Uint8Array(ee*J*4);u(k,function(xe){var fe=xe.gl,Ue=xe.withTexture,U=xe.withTextureFramebuffer;Ue("readable",function(Re,te){fe.texImage2D(fe.TEXTURE_2D,0,fe.RGBA,ee,J,0,fe.RGBA,fe.UNSIGNED_BYTE,null),U(Re,te,function(se){N(ee,J,I,W,re,F,fe,se,0,0,0),fe.readPixels(0,0,ee,J,fe.RGBA,fe.UNSIGNED_BYTE,j)})})});for(var le=new Uint8Array(ee*J),Se=0,ye=0;Se<j.length;Se+=4)le[ye++]=j[Se];return le}function D(ee,J,I,W,re,F,k,ne,j,le){F===void 0&&(F=1),ne===void 0&&(ne=0),j===void 0&&(j=0),le===void 0&&(le=0),N(ee,J,I,W,re,F,k,null,ne,j,le)}function N(ee,J,I,W,re,F,k,ne,j,le,Se){F===void 0&&(F=1),j===void 0&&(j=0),le===void 0&&(le=0),Se===void 0&&(Se=0),L(k);var ye=[];r(I,function(xe,fe,Ue,U){ye.push(xe,fe,Ue,U)}),ye=new Float32Array(ye),u(k,function(xe){var fe=xe.gl,Ue=xe.isWebGL2,U=xe.getExtension,Re=xe.withProgram,te=xe.withTexture,se=xe.withTextureFramebuffer,V=xe.handleContextLoss;if(te("rawDistances",function(he,Q){(ee!==he._lastWidth||J!==he._lastHeight)&&fe.texImage2D(fe.TEXTURE_2D,0,fe.RGBA,he._lastWidth=ee,he._lastHeight=J,0,fe.RGBA,fe.UNSIGNED_BYTE,null),Re("main",y,_,function(b){var S=b.setAttribute,O=b.setUniform,K=!Ue&&U("ANGLE_instanced_arrays"),Y=!Ue&&U("EXT_blend_minmax");S("aUV",2,fe.STATIC_DRAW,0,w),S("aLineSegment",4,fe.DYNAMIC_DRAW,1,ye),O.apply(void 0,["4f","uGlyphBounds"].concat(W)),O("1f","uMaxDistance",re),O("1f","uExponent",F),se(he,Q,function(oe){fe.enable(fe.BLEND),fe.colorMask(!0,!0,!0,!0),fe.viewport(0,0,ee,J),fe.scissor(0,0,ee,J),fe.blendFunc(fe.ONE,fe.ONE),fe.blendEquationSeparate(fe.FUNC_ADD,Ue?fe.MAX:Y.MAX_EXT),fe.clear(fe.COLOR_BUFFER_BIT),Ue?fe.drawArraysInstanced(fe.TRIANGLES,0,3,ye.length/4):K.drawArraysInstancedANGLE(fe.TRIANGLES,0,3,ye.length/4)})}),Re("post",o,A,function(b){b.setAttribute("aUV",2,fe.STATIC_DRAW,0,w),b.setUniform("1i","tex",Q),fe.bindFramebuffer(fe.FRAMEBUFFER,ne),fe.disable(fe.BLEND),fe.colorMask(Se===0,Se===1,Se===2,Se===3),fe.viewport(j,le,ee,J),fe.scissor(j,le,ee,J),fe.drawArrays(fe.TRIANGLES,0,3)})}),fe.isContextLost())throw V(),new Error("webgl context lost")})}function X(ee){var J=!ee||ee===E?T:ee.canvas||ee,I=M.get(J);if(I===void 0){C=!0;var W=null;try{var re=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],F=P(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,ee);I=F&&re.length===F.length&&F.every(function(k,ne){return k===re[ne]}),I||(W="bad trial run results",console.info(re,F))}catch(k){I=!1,W=k.message}W&&console.warn("WebGL SDF generation not supported:",W),C=!1,M.set(J,I)}return I}var z=Object.freeze({__proto__:null,generate:P,generateIntoCanvas:D,generateIntoFramebuffer:N,isSupported:X});function ie(ee,J,I,W,re,F){re===void 0&&(re=Math.max(W[2]-W[0],W[3]-W[1])/2),F===void 0&&(F=1);try{return P.apply(z,arguments)}catch(k){return console.info("WebGL SDF generation failed, falling back to JS",k),g.apply(x,arguments)}}function q(ee,J,I,W,re,F,k,ne,j,le){re===void 0&&(re=Math.max(W[2]-W[0],W[3]-W[1])/2),F===void 0&&(F=1),ne===void 0&&(ne=0),j===void 0&&(j=0),le===void 0&&(le=0);try{return D.apply(z,arguments)}catch(Se){return console.info("WebGL SDF generation failed, falling back to JS",Se),v.apply(x,arguments)}}return e.forEachPathCommand=n,e.generate=ie,e.generateIntoCanvas=q,e.javascript=x,e.pathToLineSegments=r,e.webgl=z,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}function Yy(){var s=(function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(V,he){i[V]=1<<he+1,n[i[V]]=V}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,o=i.L|i.R|i.AL,a=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,u=null;function h(){if(!u){u=new Map;var V=function(Q){if(t.hasOwnProperty(Q)){var b=0;t[Q].split(",").forEach(function(S){var O=S.split("+"),K=O[0],Y=O[1];K=parseInt(K,36),Y=Y?parseInt(Y,36):0,u.set(b+=K,i[Q]);for(var oe=0;oe<Y;oe++)u.set(++b,i[Q])})}};for(var he in t)V(he)}}function f(V){return h(),u.get(V.codePointAt(0))||i.L}function d(V){return n[f(V)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(V,he){var Q=36,b=0,S=new Map,O=he&&new Map,K;return V.split(",").forEach(function Y(oe){if(oe.indexOf("+")!==-1)for(var de=+oe;de--;)Y(K);else{K=oe;var ue=oe.split(">"),me=ue[0],Le=ue[1];me=String.fromCodePoint(b+=parseInt(me,Q)),Le=String.fromCodePoint(b+=parseInt(Le,Q)),S.set(me,Le),he&&O.set(Le,me)}}),{map:S,reverseMap:O}}var m,p,x;function y(){if(!m){var V=v(g.pairs,!0),he=V.map,Q=V.reverseMap;m=he,p=Q,x=v(g.canonical,!1).map}}function _(V){return y(),m.get(V)||null}function A(V){return y(),p.get(V)||null}function w(V){return y(),x.get(V)||null}var E=i.L,C=i.R,T=i.EN,M=i.ES,L=i.ET,P=i.AN,D=i.CS,N=i.B,X=i.S,z=i.ON,ie=i.BN,q=i.NSM,ee=i.AL,J=i.LRO,I=i.RLO,W=i.LRE,re=i.RLE,F=i.PDF,k=i.LRI,ne=i.RLI,j=i.FSI,le=i.PDI;function Se(V,he){for(var Q=125,b=new Uint32Array(V.length),S=0;S<V.length;S++)b[S]=f(V[S]);var O=new Map;function K(Kt,gn){var Zt=b[Kt];b[Kt]=gn,O.set(Zt,O.get(Zt)-1),Zt&a&&O.set(a,O.get(a)-1),O.set(gn,(O.get(gn)||0)+1),gn&a&&O.set(a,(O.get(a)||0)+1)}for(var Y=new Uint8Array(V.length),oe=new Map,de=[],ue=null,me=0;me<V.length;me++)ue||de.push(ue={start:me,end:V.length-1,level:he==="rtl"?1:he==="ltr"?0:Sc(me,!1)}),b[me]&N&&(ue.end=me,ue=null);for(var Le=re|W|I|J|r|le|F|N,ve=function(Kt){return Kt+(Kt&1?1:2)},Ae=function(Kt){return Kt+(Kt&1?2:1)},we=0;we<de.length;we++){ue=de[we];var Ce=[{_level:ue.level,_override:0,_isolate:0}],pe=void 0,Ge=0,Fe=0,Ze=0;O.clear();for(var G=ue.start;G<=ue.end;G++){var ge=b[G];if(pe=Ce[Ce.length-1],O.set(ge,(O.get(ge)||0)+1),ge&a&&O.set(a,(O.get(a)||0)+1),ge&Le)if(ge&(re|W)){Y[G]=pe._level;var ae=(ge===re?Ae:ve)(pe._level);ae<=Q&&!Ge&&!Fe?Ce.push({_level:ae,_override:0,_isolate:0}):Ge||Fe++}else if(ge&(I|J)){Y[G]=pe._level;var _e=(ge===I?Ae:ve)(pe._level);_e<=Q&&!Ge&&!Fe?Ce.push({_level:_e,_override:ge&I?C:E,_isolate:0}):Ge||Fe++}else if(ge&r){ge&j&&(ge=Sc(G+1,!0)===1?ne:k),Y[G]=pe._level,pe._override&&K(G,pe._override);var be=(ge===ne?Ae:ve)(pe._level);be<=Q&&Ge===0&&Fe===0?(Ze++,Ce.push({_level:be,_override:0,_isolate:1,_isolInitIndex:G})):Ge++}else if(ge&le){if(Ge>0)Ge--;else if(Ze>0){for(Fe=0;!Ce[Ce.length-1]._isolate;)Ce.pop();var Me=Ce[Ce.length-1]._isolInitIndex;Me!=null&&(oe.set(Me,G),oe.set(G,Me)),Ce.pop(),Ze--}pe=Ce[Ce.length-1],Y[G]=pe._level,pe._override&&K(G,pe._override)}else ge&F?(Ge===0&&(Fe>0?Fe--:!pe._isolate&&Ce.length>1&&(Ce.pop(),pe=Ce[Ce.length-1])),Y[G]=pe._level):ge&N&&(Y[G]=ue.level);else Y[G]=pe._level,pe._override&&ge!==ie&&K(G,pe._override)}for(var Be=[],Ye=null,ze=ue.start;ze<=ue.end;ze++){var We=b[ze];if(!(We&l)){var ct=Y[ze],ut=We&r,_t=We===le;Ye&&ct===Ye._level?(Ye._end=ze,Ye._endsWithIsolInit=ut):Be.push(Ye={_start:ze,_end:ze,_level:ct,_startsWithPDI:_t,_endsWithIsolInit:ut})}}for(var Yt=[],Nt=0;Nt<Be.length;Nt++){var Qt=Be[Nt];if(!Qt._startsWithPDI||Qt._startsWithPDI&&!oe.has(Qt._start)){for(var dn=[Ye=Qt],wn=void 0;Ye&&Ye._endsWithIsolInit&&(wn=oe.get(Ye._end))!=null;)for(var qt=Nt+1;qt<Be.length;qt++)if(Be[qt]._start===wn){dn.push(Ye=Be[qt]);break}for(var Rt=[],sn=0;sn<dn.length;sn++)for(var xr=dn[sn],Pi=xr._start;Pi<=xr._end;Pi++)Rt.push(Pi);for(var Po=Y[Rt[0]],vs=ue.level,Li=Rt[0]-1;Li>=0;Li--)if(!(b[Li]&l)){vs=Y[Li];break}var yr=Rt[Rt.length-1],Lo=Y[yr],_s=ue.level;if(!(b[yr]&r)){for(var R=yr+1;R<=ue.end;R++)if(!(b[R]&l)){_s=Y[R];break}}Yt.push({_seqIndices:Rt,_sosType:Math.max(vs,Po)%2?C:E,_eosType:Math.max(_s,Lo)%2?C:E})}}for(var Z=0;Z<Yt.length;Z++){var ce=Yt[Z],H=ce._seqIndices,$=ce._sosType,Te=ce._eosType,Pe=Y[H[0]]&1?C:E;if(O.get(q))for(var Ie=0;Ie<H.length;Ie++){var Ne=H[Ie];if(b[Ne]&q){for(var je=$,Xe=Ie-1;Xe>=0;Xe--)if(!(b[H[Xe]]&l)){je=b[H[Xe]];break}K(Ne,je&(r|le)?z:je)}}if(O.get(T))for(var Ve=0;Ve<H.length;Ve++){var tt=H[Ve];if(b[tt]&T)for(var nt=Ve-1;nt>=-1;nt--){var pt=nt===-1?$:b[H[nt]];if(pt&o){pt===ee&&K(tt,P);break}}}if(O.get(ee))for(var ht=0;ht<H.length;ht++){var it=H[ht];b[it]&ee&&K(it,C)}if(O.get(M)||O.get(D))for(var He=1;He<H.length-1;He++){var xt=H[He];if(b[xt]&(M|D)){for(var $e=0,zt=0,Rn=He-1;Rn>=0&&($e=b[H[Rn]],!!($e&l));Rn--);for(var Ut=He+1;Ut<H.length&&(zt=b[H[Ut]],!!(zt&l));Ut++);$e===zt&&(b[xt]===M?$e===T:$e&(T|P))&&K(xt,$e)}}if(O.get(T))for(var Ft=0;Ft<H.length;Ft++){var ft=H[Ft];if(b[ft]&T){for(var Dt=Ft-1;Dt>=0&&b[H[Dt]]&(L|l);Dt--)K(H[Dt],T);for(Ft++;Ft<H.length&&b[H[Ft]]&(L|l|T);Ft++)b[H[Ft]]!==T&&K(H[Ft],T)}}if(O.get(L)||O.get(M)||O.get(D))for(var Ct=0;Ct<H.length;Ct++){var Pt=H[Ct];if(b[Pt]&(L|M|D)){K(Pt,z);for(var Tt=Ct-1;Tt>=0&&b[H[Tt]]&l;Tt--)K(H[Tt],z);for(var Yn=Ct+1;Yn<H.length&&b[H[Yn]]&l;Yn++)K(H[Yn],z)}}if(O.get(T))for(var pn=0,uc=$;pn<H.length;pn++){var hc=H[pn],Uo=b[hc];Uo&T?uc===E&&K(hc,E):Uo&o&&(uc=Uo)}if(O.get(a)){var Mr=C|T|P,fc=Mr|E,xs=[];{for(var Ui=[],Di=0;Di<H.length;Di++)if(b[H[Di]]&a){var Sr=V[H[Di]],dc=void 0;if(_(Sr)!==null)if(Ui.length<63)Ui.push({char:Sr,seqIndex:Di});else break;else if((dc=A(Sr))!==null)for(var br=Ui.length-1;br>=0;br--){var Do=Ui[br].char;if(Do===dc||Do===A(w(Sr))||_(w(Do))===Sr){xs.push([Ui[br].seqIndex,Di]),Ui.length=br;break}}}xs.sort(function(Kt,gn){return Kt[0]-gn[0]})}for(var Io=0;Io<xs.length;Io++){for(var pc=xs[Io],ys=pc[0],No=pc[1],mc=!1,mn=0,Fo=ys+1;Fo<No;Fo++){var gc=H[Fo];if(b[gc]&fc){mc=!0;var vc=b[gc]&Mr?C:E;if(vc===Pe){mn=vc;break}}}if(mc&&!mn){mn=$;for(var Oo=ys-1;Oo>=0;Oo--){var _c=H[Oo];if(b[_c]&fc){var xc=b[_c]&Mr?C:E;xc!==Pe?mn=xc:mn=Pe;break}}}if(mn){if(b[H[ys]]=b[H[No]]=mn,mn!==Pe){for(var Tr=ys+1;Tr<H.length;Tr++)if(!(b[H[Tr]]&l)){f(V[H[Tr]])&q&&(b[H[Tr]]=mn);break}}if(mn!==Pe){for(var Er=No+1;Er<H.length;Er++)if(!(b[H[Er]]&l)){f(V[H[Er]])&q&&(b[H[Er]]=mn);break}}}}for(var qn=0;qn<H.length;qn++)if(b[H[qn]]&a){for(var yc=qn,Bo=qn,ko=$,Ar=qn-1;Ar>=0;Ar--)if(b[H[Ar]]&l)yc=Ar;else{ko=b[H[Ar]]&Mr?C:E;break}for(var Mc=Te,wr=qn+1;wr<H.length;wr++)if(b[H[wr]]&(a|l))Bo=wr;else{Mc=b[H[wr]]&Mr?C:E;break}for(var zo=yc;zo<=Bo;zo++)b[H[zo]]=ko===Mc?ko:Pe;qn=Bo}}}for(var $t=ue.start;$t<=ue.end;$t++){var Bf=Y[$t],Ms=b[$t];if(Bf&1?Ms&(E|T|P)&&Y[$t]++:Ms&C?Y[$t]++:Ms&(P|T)&&(Y[$t]+=2),Ms&l&&(Y[$t]=$t===0?ue.level:Y[$t-1]),$t===ue.end||f(V[$t])&(X|N))for(var Ss=$t;Ss>=0&&f(V[Ss])&c;Ss--)Y[Ss]=ue.level}}return{levels:Y,paragraphs:de};function Sc(Kt,gn){for(var Zt=Kt;Zt<V.length;Zt++){var Kn=b[Zt];if(Kn&(C|ee))return 1;if(Kn&(N|E)||gn&&Kn===le)return 0;if(Kn&r){var bc=kf(Zt);Zt=bc===-1?V.length:bc}}return 0}function kf(Kt){for(var gn=1,Zt=Kt+1;Zt<V.length;Zt++){var Kn=b[Zt];if(Kn&N)break;if(Kn&le){if(--gn===0)return Zt}else Kn&r&&gn++}return-1}}var ye="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",xe;function fe(){if(!xe){var V=v(ye,!0),he=V.map,Q=V.reverseMap;Q.forEach(function(b,S){he.set(S,b)}),xe=he}}function Ue(V){return fe(),xe.get(V)||null}function U(V,he,Q,b){var S=V.length;Q=Math.max(0,Q==null?0:+Q),b=Math.min(S-1,b==null?S-1:+b);for(var O=new Map,K=Q;K<=b;K++)if(he[K]&1){var Y=Ue(V[K]);Y!==null&&O.set(K,Y)}return O}function Re(V,he,Q,b){var S=V.length;Q=Math.max(0,Q==null?0:+Q),b=Math.min(S-1,b==null?S-1:+b);var O=[];return he.paragraphs.forEach(function(K){var Y=Math.max(Q,K.start),oe=Math.min(b,K.end);if(Y<oe){for(var de=he.levels.slice(Y,oe+1),ue=oe;ue>=Y&&f(V[ue])&c;ue--)de[ue]=K.level;for(var me=K.level,Le=1/0,ve=0;ve<de.length;ve++){var Ae=de[ve];Ae>me&&(me=Ae),Ae<Le&&(Le=Ae|1)}for(var we=me;we>=Le;we--)for(var Ce=0;Ce<de.length;Ce++)if(de[Ce]>=we){for(var pe=Ce;Ce+1<de.length&&de[Ce+1]>=we;)Ce++;Ce>pe&&O.push([pe+Y,Ce+Y])}}}),O}function te(V,he,Q,b){var S=se(V,he,Q,b),O=[].concat(V);return S.forEach(function(K,Y){O[Y]=(he.levels[K]&1?Ue(V[K]):null)||V[K]}),O.join("")}function se(V,he,Q,b){for(var S=Re(V,he,Q,b),O=[],K=0;K<V.length;K++)O[K]=K;return S.forEach(function(Y){for(var oe=Y[0],de=Y[1],ue=O.slice(oe,de+1),me=ue.length;me--;)O[de-me]=ue[me]}),O}return e.closingToOpeningBracket=A,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=w,e.getEmbeddingLevels=Se,e.getMirroredCharacter=Ue,e.getMirroredCharactersMap=U,e.getReorderSegments=Re,e.getReorderedIndices=se,e.getReorderedString=te,e.openingToClosingBracket=_,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}const Cf=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Ll(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=Je[n];return r?Ll(r):i}return s.replace(e,t)}const It=[];for(let s=0;s<256;s++)It[s]=(s<16?"0":"")+s.toString(16);function qy(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[s&255]+It[s>>8&255]+It[s>>16&255]+It[s>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toUpperCase()}const xi=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(s[n]=i[n])}return s},Ky=Date.now(),fh=new WeakMap,dh=new Map;let Zy=1e10;function Ul(s,e){const t=eM(e);let i=fh.get(s);if(i||fh.set(s,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c,u){s.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=dh[h];if(!f){const d=Jy(this,c,e,t);f=dh[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,xi(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Ky}}),this[n]&&this[n](c)},o=function(){return a(e.chained?s:s.clone())},a=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:Zy++}),u.uuid=qy(),u.uniforms=xi({},c.uniforms,e.uniforms),u.defines=xi({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=xi({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:o},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(xi(this.extensions,c.extensions),xi(this.defines,c.defines),xi(this.uniforms,qh.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Ul(s.isDerivedMaterial?s.getDepthMaterial():new ff({depthPacking:zh}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Ul(s.isDerivedMaterial?s.getDistanceMaterial():new df,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return i[t]=o,new o}function Jy(s,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:o,vertexMainOutro:a,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=i;if(r=r||"",o=o||"",a=a||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=Ll(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Ll(t)),d){let v=d({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(f){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(v.push(m),"")),h=`${f}
${v.join(`
`)}
${h}`}if(g){const v=`
uniform float ${g};
`;r=v+r,c=v+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,r=`${r}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,o=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${o}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,m,p,x)=>/\battribute\s+vec[23]\s+$/.test(x.substr(0,p))?m:`troika_${m}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=ph(e,n,r,o,a),t=ph(t,n,c,u,h),{vertexShader:e,fragmentShader:t}}function ph(s,e,t,i,n){return(i||n||t)&&(s=s.replace(Cf,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),s}function Qy(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let $y=0;const mh=new Map;function eM(s){const e=JSON.stringify(s,Qy);let t=mh.get(e);return t==null&&mh.set(e,t=++$y),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function tM(){return typeof window>"u"&&(self.window=self),(function(s){var e={parse:function(n){var r=e._bin,o=new Uint8Array(n);if(r.readASCII(o,0,4)=="ttcf"){var a=4;r.readUshort(o,a),a+=2,r.readUshort(o,a),a+=2;var l=r.readUint(o,a);a+=4;for(var c=[],u=0;u<l;u++){var h=r.readUint(o,a);a+=4,c.push(e._readFont(o,h))}return c}return[e._readFont(o,0)]},_readFont:function(n,r){var o=e._bin,a=r;o.readFixed(n,r),r+=4;var l=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:a},h={},f=0;f<l;f++){var d=o.readASCII(n,r,4);r+=4,o.readUint(n,r),r+=4;var g=o.readUint(n,r);r+=4;var v=o.readUint(n,r);r+=4,h[d]={offset:g,length:v}}for(f=0;f<c.length;f++){var m=c[f];h[m]&&(u[m.trim()]=e[m.trim()].parse(n,h[m].offset,h[m].length,u))}return u},_tabOffset:function(n,r,o){for(var a=e._bin,l=a.readUshort(n,o+4),c=o+12,u=0;u<l;u++){var h=a.readASCII(n,c,4);c+=4,a.readUint(n,c),c+=4;var f=a.readUint(n,c);if(c+=4,a.readUint(n,c),c+=4,h==r)return f}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(e._bin.readUshort(n,r+2*l));return a},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,o){for(var a="",l=0;l<o;l++)a+=String.fromCharCode(n[r+l]);return a},readUnicode:function(n,r,o){for(var a="",l=0;l<o;l++){var c=n[r++]<<8|n[r++];a+=String.fromCharCode(c)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,o){var a=e._bin._tdec;return a&&r==0&&o==n.length?a.decode(n):e._bin.readASCII(n,r,o)},readBytes:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(n[r+l]);return a},readASCIIArray:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(String.fromCharCode(n[r+l]));return a},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,o,a,l){var c=e._bin,u={},h=r;c.readFixed(n,r),r+=4;var f=c.readUshort(n,r);r+=2;var d=c.readUshort(n,r);r+=2;var g=c.readUshort(n,r);return r+=2,u.scriptList=e._lctf.readScriptList(n,h+f),u.featureList=e._lctf.readFeatureList(n,h+d),u.lookupList=e._lctf.readLookupList(n,h+g,l),u},e._lctf.readLookupList=function(n,r,o){var a=e._bin,l=r,c=[],u=a.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var f=a.readUshort(n,r);r+=2;var d=e._lctf.readLookupTable(n,l+f,o);c.push(d)}return c},e._lctf.readLookupTable=function(n,r,o){var a=e._bin,l=r,c={tabs:[]};c.ltype=a.readUshort(n,r),r+=2,c.flag=a.readUshort(n,r),r+=2;var u=a.readUshort(n,r);r+=2;for(var h=c.ltype,f=0;f<u;f++){var d=a.readUshort(n,r);r+=2;var g=o(n,h,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var r=0,o=0;o<32;o++)(n>>>o&1)!=0&&r++;return r},e._lctf.readClassDef=function(n,r){var o=e._bin,a=[],l=o.readUshort(n,r);if(r+=2,l==1){var c=o.readUshort(n,r);r+=2;var u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++)a.push(c+h),a.push(c+h),a.push(o.readUshort(n,r)),r+=2}if(l==2){var f=o.readUshort(n,r);for(r+=2,h=0;h<f;h++)a.push(o.readUshort(n,r)),r+=2,a.push(o.readUshort(n,r)),r+=2,a.push(o.readUshort(n,r)),r+=2}return a},e._lctf.getInterval=function(n,r){for(var o=0;o<n.length;o+=3){var a=n[o],l=n[o+1];if(n[o+2],a<=r&&r<=l)return o}return-1},e._lctf.readCoverage=function(n,r){var o=e._bin,a={};a.fmt=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);return r+=2,a.fmt==1&&(a.tab=o.readUshorts(n,r,l)),a.fmt==2&&(a.tab=o.readUshorts(n,r,3*l)),a},e._lctf.coverageIndex=function(n,r){var o=n.tab;if(n.fmt==1)return o.indexOf(r);if(n.fmt==2){var a=e._lctf.getInterval(o,r);if(a!=-1)return o[a+2]+(r-o[a])}return-1},e._lctf.readFeatureList=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=o.readASCII(n,r,4);r+=4;var f=o.readUshort(n,r);r+=2;var d=e._lctf.readFeatureTable(n,a+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2,c>0&&(l.featureParams=a+c);var u=o.readUshort(n,r);r+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(o.readUshort(n,r+2*h));return l},e._lctf.readScriptList=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=o.readASCII(n,r,4);r+=4;var f=o.readUshort(n,r);r+=2,l[h.trim()]=e._lctf.readScriptTable(n,a+f)}return l},e._lctf.readScriptTable=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,a+c));var u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var f=o.readASCII(n,r,4);r+=4;var d=o.readUshort(n,r);r+=2,l[f.trim()]=e._lctf.readLangSysTable(n,a+d)}return l},e._lctf.readLangSysTable=function(n,r){var o=e._bin,a={};o.readUshort(n,r),r+=2,a.reqFeature=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);return r+=2,a.features=o.readUshorts(n,r,l),a},e.CFF={},e.CFF.parse=function(n,r,o){var a=e._bin;(n=new Uint8Array(n.buffer,r,o))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(a.readASCII(n,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var h=[];r=e.CFF.readIndex(n,r,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(n,r+h[u],r+h[u+1]));r+=h[h.length-1];var d=f[0],g=[];r=e.CFF.readIndex(n,r,g);var v=[];for(u=0;u<g.length-1;u++)v.push(a.readASCII(n,r+g[u],g[u+1]-g[u]));if(r+=g[g.length-1],e.CFF.readSubrs(n,r,d),d.CharStrings){r=d.CharStrings,g=[],r=e.CFF.readIndex(n,r,g);var m=[];for(u=0;u<g.length-1;u++)m.push(a.readBytes(n,r+g[u],g[u+1]-g[u]));d.CharStrings=m}if(d.ROS){r=d.FDArray;var p=[];for(r=e.CFF.readIndex(n,r,p),d.FDArray=[],u=0;u<p.length-1;u++){var x=e.CFF.readDict(n,r+p[u],r+p[u+1]);e.CFF._readFDict(n,x,v),d.FDArray.push(x)}r+=p[p.length-1],r=d.FDSelect,d.FDSelect=[];var y=n[r];if(r++,y!=3)throw y;var _=a.readUshort(n,r);for(r+=2,u=0;u<_+1;u++)d.FDSelect.push(a.readUshort(n,r),n[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,v),d},e.CFF._readFDict=function(n,r,o){var a;for(var l in r.Private&&(a=r.Private[1],r.Private=e.CFF.readDict(n,a,a+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,a+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=o[r[l]-426+35])},e.CFF.readSubrs=function(n,r,o){var a=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var h=0;h<l.length-1;h++)o.Subrs.push(a.readBytes(n,r+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var o=0;o<n.charset.length;o++)if(n.charset[o]==r)return o;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,o){e._bin;var a=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var u=0;u<c;u++)a.push(n[r+u]);return a},e.CFF.readCharset=function(n,r,o){var a=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var u=0;u<o;u++){var h=a.readUshort(n,r);r+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){h=a.readUshort(n,r),r+=2;var f=0;for(c==1?(f=n[r],r++):(f=a.readUshort(n,r),r+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(n,r,o){var a=e._bin,l=a.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var u=0;u<l;u++)o.push(n[r+u]);else if(c==2)for(u=0;u<l;u++)o.push(a.readUshort(n,r+2*u));else if(c==3)for(u=0;u<l;u++)o.push(16777215&a.readUint(n,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,o){var a=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=a.readShort(n,r+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=a.readInt(n,r+1)/65535,u=5),o.val=f??"o"+h,o.size=u},e.CFF.readCharString=function(n,r,o){for(var a=r+o,l=e._bin,c=[];r<a;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,g=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(g=l.readShort(n,r+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255&&(g=l.readInt(n,r+1)/65535,f=5),c.push(g??"o"+d),r+=f}return c},e.CFF.readDict=function(n,r,o){for(var a=e._bin,l={},c=[];r<o;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,g=null;if(u==28&&(g=a.readShort(n,r+1),f=3),u==29&&(g=a.readInt(n,r+1),f=5),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255)throw g=a.readInt(n,r+1)/65535,f=5,"unknown number";if(u==30){var v=[];for(f=1;;){var m=n[r+f];f++;var p=m>>4,x=15&m;if(p!=15&&v.push(p),x!=15&&v.push(x),x==15)break}for(var y="",_=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],A=0;A<v.length;A++)y+=_[v[A]];g=parseFloat(y)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),r+=f}return l},e.cmap={},e.cmap.parse=function(n,r,o){n=new Uint8Array(n.buffer,r,o),r=0;var a=e._bin,l={};a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=a.readUshort(n,r);r+=2;var d=a.readUshort(n,r);r+=2;var g=a.readUint(n,r);r+=4;var v="p"+f+"e"+d,m=u.indexOf(g);if(m==-1){var p;m=l.tables.length,u.push(g);var x=a.readUshort(n,g);x==0?p=e.cmap.parse0(n,g):x==4?p=e.cmap.parse4(n,g):x==6?p=e.cmap.parse6(n,g):x==12?p=e.cmap.parse12(n,g):console.debug("unknown format: "+x,f,d,g),l.tables.push(p)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=m}return l},e.cmap.parse0=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,a.map=[];for(var c=0;c<l-6;c++)a.map.push(n[r+c]);return a},e.cmap.parse4=function(n,r){var o=e._bin,a=r,l={};l.format=o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2;var u=o.readUshort(n,r);r+=2;var h=u/2;l.searchRange=o.readUshort(n,r),r+=2,l.entrySelector=o.readUshort(n,r),r+=2,l.rangeShift=o.readUshort(n,r),r+=2,l.endCount=o.readUshorts(n,r,h),r+=2*h,r+=2,l.startCount=o.readUshorts(n,r,h),r+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(o.readShort(n,r)),r+=2;for(l.idRangeOffset=o.readUshorts(n,r,h),r+=2*h,l.glyphIdArray=[];r<a+c;)l.glyphIdArray.push(o.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,a.firstCode=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2,a.glyphIdArray=[];for(var c=0;c<l;c++)a.glyphIdArray.push(o.readUshort(n,r)),r+=2;return a},e.cmap.parse12=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2,r+=2,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4;var l=o.readUint(n,r);r+=4,a.groups=[];for(var c=0;c<l;c++){var u=r+12*c,h=o.readUint(n,u+0),f=o.readUint(n,u+4),d=o.readUint(n,u+8);a.groups.push([h,f,d])}return a},e.glyf={},e.glyf.parse=function(n,r,o,a){for(var l=[],c=0;c<a.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var o=e._bin,a=n._data,l=e._tabOffset(a,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=o.readShort(a,l),l+=2,c.xMin=o.readShort(a,l),l+=2,c.yMin=o.readShort(a,l),l+=2,c.xMax=o.readShort(a,l),l+=2,c.yMax=o.readShort(a,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(o.readUshort(a,l)),l+=2;var h=o.readUshort(a,l);if(l+=2,a.length-l<h)return null;c.instructions=o.readBytes(a,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=a[l];if(l++,c.flags.push(d),(8&d)!=0){var g=a[l];l++;for(var v=0;v<g;v++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var m=(2&c.flags[u])!=0,p=(16&c.flags[u])!=0;m?(c.xs.push(p?a[l]:-a[l]),l++):p?c.xs.push(0):(c.xs.push(o.readShort(a,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)m=(4&c.flags[u])!=0,p=(32&c.flags[u])!=0,m?(c.ys.push(p?a[l]:-a[l]),l++):p?c.ys.push(0):(c.ys.push(o.readShort(a,l)),l+=2);var x=0,y=0;for(u=0;u<f;u++)x+=c.xs[u],y+=c.ys[u],c.xs[u]=x,c.ys[u]=y}else{var _;c.parts=[];do{_=o.readUshort(a,l),l+=2;var A={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(A),A.glyphIndex=o.readUshort(a,l),l+=2,1&_){var w=o.readShort(a,l);l+=2;var E=o.readShort(a,l);l+=2}else w=o.readInt8(a,l),l++,E=o.readInt8(a,l),l++;2&_?(A.m.tx=w,A.m.ty=E):(A.p1=w,A.p2=E),8&_?(A.m.a=A.m.d=o.readF2dot14(a,l),l+=2):64&_?(A.m.a=o.readF2dot14(a,l),l+=2,A.m.d=o.readF2dot14(a,l),l+=2):128&_&&(A.m.a=o.readF2dot14(a,l),l+=2,A.m.b=o.readF2dot14(a,l),l+=2,A.m.c=o.readF2dot14(a,l),l+=2,A.m.d=o.readF2dot14(a,l),l+=2)}while(32&_);if(256&_){var C=o.readUshort(a,l);for(l+=2,c.instr=[],u=0;u<C;u++)c.instr.push(a[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,r,o,a){var l=r;r+=4;var c=e._bin.readUshort(n,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,r,o,a){return e._lctf.parse(n,r,o,a,e.GPOS.subt)},e.GPOS.subt=function(n,r,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=l.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,h+c)}if(r==1&&u.fmt==1){var f=l.readUshort(n,o);o+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(n,o,f))}else if(r==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(n,o),o+=2;var d=l.readUshort(n,o);o+=2;var g=e._lctf.numOfOnes(f),v=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(n,o);o+=2;for(var p=0;p<m;p++){var x=c+l.readUshort(n,o);o+=2;var y=l.readUshort(n,x);x+=2;for(var _=[],A=0;A<y;A++){var w=l.readUshort(n,x);x+=2,f!=0&&(P=e.GPOS.readValueRecord(n,x,f),x+=2*g),d!=0&&(D=e.GPOS.readValueRecord(n,x,d),x+=2*v),_.push({gid2:w,val1:P,val2:D})}u.pairsets.push(_)}}if(u.fmt==2){var E=l.readUshort(n,o);o+=2;var C=l.readUshort(n,o);o+=2;var T=l.readUshort(n,o);o+=2;var M=l.readUshort(n,o);for(o+=2,u.classDef1=e._lctf.readClassDef(n,c+E),u.classDef2=e._lctf.readClassDef(n,c+C),u.matrix=[],p=0;p<T;p++){var L=[];for(A=0;A<M;A++){var P=null,D=null;f!=0&&(P=e.GPOS.readValueRecord(n,o,f),o+=2*g),d!=0&&(D=e.GPOS.readValueRecord(n,o,d),o+=2*v),L.push({val1:P,val2:D})}u.matrix.push(L)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,o)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,o+2)+c),u.markClassCount=l.readUshort(n,o+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,o+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,o+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,o)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,o+2)+c),u.markClassCount=l.readUshort(n,o+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,o+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,o+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var N=l.readUshort(n,o);o+=2;var X=l.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=N;else if(a.ltype!=N)throw"invalid extension substitution";return e.GPOS.subt(n,a.ltype,c+X)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,r,o){var a=e._bin,l=[];return l.push(1&o?a.readShort(n,r):0),r+=1&o?2:0,l.push(2&o?a.readShort(n,r):0),r+=2&o?2:0,l.push(4&o?a.readShort(n,r):0),r+=4&o?2:0,l.push(8&o?a.readShort(n,r):0),r+=8&o?2:0,l},e.GPOS.readBaseArray=function(n,r,o){var a=e._bin,l=[],c=r,u=a.readUshort(n,r);r+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<o;d++)f.push(e.GPOS.readAnchorRecord(n,c+a.readUshort(n,r))),r+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(n,r){var o=e._bin,a=[],l=r,c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(n,o.readUshort(n,r+2)+l);h.markClass=o.readUshort(n,r),a.push(h),r+=4}return a},e.GPOS.readAnchorRecord=function(n,r){var o=e._bin,a={};return a.fmt=o.readUshort(n,r),a.x=o.readShort(n,r+2),a.y=o.readShort(n,r+4),a},e.GSUB={},e.GSUB.parse=function(n,r,o,a){return e._lctf.parse(n,r,o,a,e.GSUB.subt)},e.GSUB.subt=function(n,r,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=l.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,c+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,o),o+=2;else if(u.fmt==2){var f=l.readUshort(n,o);o+=2,u.newg=l.readUshorts(n,o,f),o+=2*u.newg.length}}else if(r==2&&u.fmt==1){f=l.readUshort(n,o),o+=2,u.seqs=[];for(var d=0;d<f;d++){var g=l.readUshort(n,o)+c;o+=2;var v=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,v))}}else if(r==4)for(u.vals=[],f=l.readUshort(n,o),o+=2,d=0;d<f;d++){var m=l.readUshort(n,o);o+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+m))}else if(r==5&&u.fmt==2){if(u.fmt==2){var p=l.readUshort(n,o);o+=2,u.cDef=e._lctf.readClassDef(n,c+p),u.scset=[];var x=l.readUshort(n,o);for(o+=2,d=0;d<x;d++){var y=l.readUshort(n,o);o+=2,u.scset.push(y==0?null:e.GSUB.readSubClassSet(n,c+y))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,o),o+=2;for(var _=[],A=0;A<f;A++)_.push(e._lctf.readCoverage(n,c+l.readUshort(n,o+2*A)));o+=2*f,d==0&&(u.backCvg=_),d==1&&(u.inptCvg=_),d==2&&(u.ahedCvg=_)}f=l.readUshort(n,o),o+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,o,f)}}else{if(r==7&&u.fmt==1){var w=l.readUshort(n,o);o+=2;var E=l.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=w;else if(a.ltype!=w)throw"invalid extension substitution";return e.GSUB.subt(n,a.ltype,c+E)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,r){var o=e._bin.readUshort,a=r,l=[],c=o(n,r);r+=2;for(var u=0;u<c;u++){var h=o(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,a+h))}return l},e.GSUB.readSubClassRule=function(n,r){var o=e._bin.readUshort,a={},l=o(n,r),c=o(n,r+=2);r+=2,a.input=[];for(var u=0;u<l-1;u++)a.input.push(o(n,r)),r+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),a},e.GSUB.readSubstLookupRecords=function(n,r,o){for(var a=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(a(n,r),a(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,a+h))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var o=e._bin,a={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=o.readUshort(n,r);r+=2,c==1&&u--,a[l[c]]=o.readUshorts(n,r,u),r+=2*a[l[c]].length}return u=o.readUshort(n,r),r+=2,a.subst=o.readUshorts(n,r,2*u),r+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,a+h))}return l},e.GSUB.readLigature=function(n,r){var o=e._bin,a={chain:[]};a.nglyph=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)a.chain.push(o.readUshort(n,r)),r+=2;return a},e.head={},e.head.parse=function(n,r,o){var a=e._bin,l={};return a.readFixed(n,r),r+=4,l.fontRevision=a.readFixed(n,r),r+=4,a.readUint(n,r),r+=4,a.readUint(n,r),r+=4,l.flags=a.readUshort(n,r),r+=2,l.unitsPerEm=a.readUshort(n,r),r+=2,l.created=a.readUint64(n,r),r+=8,l.modified=a.readUint64(n,r),r+=8,l.xMin=a.readShort(n,r),r+=2,l.yMin=a.readShort(n,r),r+=2,l.xMax=a.readShort(n,r),r+=2,l.yMax=a.readShort(n,r),r+=2,l.macStyle=a.readUshort(n,r),r+=2,l.lowestRecPPEM=a.readUshort(n,r),r+=2,l.fontDirectionHint=a.readShort(n,r),r+=2,l.indexToLocFormat=a.readShort(n,r),r+=2,l.glyphDataFormat=a.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,o){var a=e._bin,l={};return a.readFixed(n,r),r+=4,l.ascender=a.readShort(n,r),r+=2,l.descender=a.readShort(n,r),r+=2,l.lineGap=a.readShort(n,r),r+=2,l.advanceWidthMax=a.readUshort(n,r),r+=2,l.minLeftSideBearing=a.readShort(n,r),r+=2,l.minRightSideBearing=a.readShort(n,r),r+=2,l.xMaxExtent=a.readShort(n,r),r+=2,l.caretSlopeRise=a.readShort(n,r),r+=2,l.caretSlopeRun=a.readShort(n,r),r+=2,l.caretOffset=a.readShort(n,r),r+=2,r+=8,l.metricDataFormat=a.readShort(n,r),r+=2,l.numberOfHMetrics=a.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,o,a){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<a.maxp.numGlyphs;f++)f<a.hhea.numberOfHMetrics&&(u=l.readUshort(n,r),r+=2,h=l.readShort(n,r),r+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(n,r,o,a){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,o,a);var u=l.readUshort(n,r);r+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){r+=2,o=l.readUshort(n,r),r+=2;var d=l.readUshort(n,r);r+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=e.kern.readFormat0(n,r,h)}return h},e.kern.parseV1=function(n,r,o,a){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(n,r),r+=4;var f=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(n,r,u)}return u},e.kern.readFormat0=function(n,r,o){var a=e._bin,l=-1,c=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,r);r+=2;var f=a.readUshort(n,r);r+=2;var d=a.readShort(n,r);r+=2,h!=l&&(o.glyph1.push(h),o.rval.push({glyph2:[],vals:[]}));var g=o.rval[o.rval.length-1];g.glyph2.push(f),g.vals.push(d),l=h}return r},e.loca={},e.loca.parse=function(n,r,o,a){var l=e._bin,c=[],u=a.head.indexToLocFormat,h=a.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(n,r+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(n,r+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,o){var a=e._bin,l={},c=a.readUint(n,r);return r+=4,l.numGlyphs=a.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=a.readUshort(n,r),r+=2,l.maxContours=a.readUshort(n,r),r+=2,l.maxCompositePoints=a.readUshort(n,r),r+=2,l.maxCompositeContours=a.readUshort(n,r),r+=2,l.maxZones=a.readUshort(n,r),r+=2,l.maxTwilightPoints=a.readUshort(n,r),r+=2,l.maxStorage=a.readUshort(n,r),r+=2,l.maxFunctionDefs=a.readUshort(n,r),r+=2,l.maxInstructionDefs=a.readUshort(n,r),r+=2,l.maxStackElements=a.readUshort(n,r),r+=2,l.maxSizeOfInstructions=a.readUshort(n,r),r+=2,l.maxComponentElements=a.readUshort(n,r),r+=2,l.maxComponentDepth=a.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,o){var a=e._bin,l={};a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2,a.readUshort(n,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=r+=2,d=0;d<c;d++){var g=a.readUshort(n,r);r+=2;var v=a.readUshort(n,r);r+=2;var m=a.readUshort(n,r);r+=2;var p=a.readUshort(n,r);r+=2;var x=a.readUshort(n,r);r+=2;var y=a.readUshort(n,r);r+=2;var _,A=h[p],w=f+12*c+y;if(g==0)_=a.readUnicode(n,w,x/2);else if(g==3&&v==0)_=a.readUnicode(n,w,x/2);else if(v==0)_=a.readASCII(n,w,x);else if(v==1)_=a.readUnicode(n,w,x/2);else if(v==3)_=a.readUnicode(n,w,x/2);else{if(g!=1)throw"unknown encoding "+v+", platformID: "+g;_=a.readASCII(n,w,x),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var E="p"+g+","+m.toString(16);l[E]==null&&(l[E]={}),l[E][A!==void 0?A:p]=_,l[E]._lang=m}for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==1033)return l[C];for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==0)return l[C];for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==3084)return l[C];for(var C in l)if(l[C].postScriptName!=null)return l[C];for(var C in l){u=C;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,r,o){var a=e._bin.readUshort(n,r);r+=2;var l={};if(a==0)e["OS/2"].version0(n,r,l);else if(a==1)e["OS/2"].version1(n,r,l);else if(a==2||a==3||a==4)e["OS/2"].version2(n,r,l);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,o){var a=e._bin;return o.xAvgCharWidth=a.readShort(n,r),r+=2,o.usWeightClass=a.readUshort(n,r),r+=2,o.usWidthClass=a.readUshort(n,r),r+=2,o.fsType=a.readUshort(n,r),r+=2,o.ySubscriptXSize=a.readShort(n,r),r+=2,o.ySubscriptYSize=a.readShort(n,r),r+=2,o.ySubscriptXOffset=a.readShort(n,r),r+=2,o.ySubscriptYOffset=a.readShort(n,r),r+=2,o.ySuperscriptXSize=a.readShort(n,r),r+=2,o.ySuperscriptYSize=a.readShort(n,r),r+=2,o.ySuperscriptXOffset=a.readShort(n,r),r+=2,o.ySuperscriptYOffset=a.readShort(n,r),r+=2,o.yStrikeoutSize=a.readShort(n,r),r+=2,o.yStrikeoutPosition=a.readShort(n,r),r+=2,o.sFamilyClass=a.readShort(n,r),r+=2,o.panose=a.readBytes(n,r,10),r+=10,o.ulUnicodeRange1=a.readUint(n,r),r+=4,o.ulUnicodeRange2=a.readUint(n,r),r+=4,o.ulUnicodeRange3=a.readUint(n,r),r+=4,o.ulUnicodeRange4=a.readUint(n,r),r+=4,o.achVendID=[a.readInt8(n,r),a.readInt8(n,r+1),a.readInt8(n,r+2),a.readInt8(n,r+3)],r+=4,o.fsSelection=a.readUshort(n,r),r+=2,o.usFirstCharIndex=a.readUshort(n,r),r+=2,o.usLastCharIndex=a.readUshort(n,r),r+=2,o.sTypoAscender=a.readShort(n,r),r+=2,o.sTypoDescender=a.readShort(n,r),r+=2,o.sTypoLineGap=a.readShort(n,r),r+=2,o.usWinAscent=a.readUshort(n,r),r+=2,o.usWinDescent=a.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,o){var a=e._bin;return r=e["OS/2"].version0(n,r,o),o.ulCodePageRange1=a.readUint(n,r),r+=4,o.ulCodePageRange2=a.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,o){var a=e._bin;return r=e["OS/2"].version1(n,r,o),o.sxHeight=a.readShort(n,r),r+=2,o.sCapHeight=a.readShort(n,r),r+=2,o.usDefault=a.readUshort(n,r),r+=2,o.usBreak=a.readUshort(n,r),r+=2,o.usMaxContext=a.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,o){var a=e._bin;return r=e["OS/2"].version2(n,r,o),o.usLowerOpticalPointSize=a.readUshort(n,r),r+=2,o.usUpperOpticalPointSize=a.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,o){var a=e._bin,l={};return l.version=a.readFixed(n,r),r+=4,l.italicAngle=a.readFixed(n,r),r+=4,l.underlinePosition=a.readShort(n,r),r+=2,l.underlineThickness=a.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var o=n.cmap,a=-1;if(o.p0e4!=null?a=o.p0e4:o.p3e1!=null?a=o.p3e1:o.p1e0!=null?a=o.p1e0:o.p0e3!=null&&(a=o.p0e3),a==-1)throw"no familiar platform and encoding!";var l=o.tables[a];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var o={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var a=n.SVG.entries[r];return a==null?o:(typeof a=="string"&&(a=e.SVG.toPath(a),n.SVG.entries[r]=a),a)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=r;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,u,o)}else n.glyf&&e.U._drawGlyf(r,n,o);return o},e.U._drawGlyf=function(n,r,o){var a=r.glyf[n];a==null&&(a=r.glyf[n]=e.glyf._parseGlyf(r,n)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,o):e.U._compoGlyph(a,r,o))},e.U._simpleGlyph=function(n,r){for(var o=0;o<n.noc;o++){for(var a=o==0?0:n.endPts[o-1]+1,l=n.endPts[o],c=a;c<=l;c++){var u=c==a?l:c-1,h=c==l?a:c+1,f=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[h],v=n.xs[c],m=n.ys[c];if(c==a)if(f){if(!d){e.U.P.moveTo(r,v,m);continue}e.U.P.moveTo(r,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(r,n.xs[u],n.ys[u]):e.U.P.moveTo(r,(n.xs[u]+v)/2,(n.ys[u]+m)/2);f?d&&e.U.P.lineTo(r,v,m):g?e.U.P.qcurveTo(r,v,m,n.xs[h],n.ys[h]):e.U.P.qcurveTo(r,v,m,(v+n.xs[h])/2,(m+n.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,o){for(var a=0;a<n.parts.length;a++){var l={cmds:[],crds:[]},c=n.parts[a];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];o.crds.push(f*u.a+d*u.b+u.tx),o.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)o.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(n,r){var o=e._lctf.getInterval(r,n);return o==-1?0:r[o+2]},e.U._applySubs=function(n,r,o,a){for(var l=n.length-r-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var u,h=o.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[r]))!=-1){if(o.ltype==1)n[r],h.fmt==1?n[r]=n[r]+h.delta:n[r]=h.newg[u];else if(o.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var g=f[d],v=g.chain.length;if(!(v>l)){for(var m=!0,p=0,x=0;x<v;x++){for(;n[r+p+(1+x)]==-1;)p++;g.chain[x]!=n[r+p+(1+x)]&&(m=!1)}if(m){for(n[r]=g.nglyph,x=0;x<v+p;x++)n[r+x+1]=-1;break}}}else if(o.ltype==5&&h.fmt==2)for(var y=e._lctf.getInterval(h.cDef,n[r]),_=h.cDef[y+2],A=h.scset[_],w=0;w<A.length;w++){var E=A[w],C=E.input;if(!(C.length>l)){for(m=!0,x=0;x<C.length;x++){var T=e._lctf.getInterval(h.cDef,n[r+1+x]);if(y==-1&&h.cDef[T+2]!=C[x]){m=!1;break}}if(m){var M=E.substLookupRecords;for(d=0;d<M.length;d+=2)M[d],M[d+1]}}}else if(o.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,r)||!e.U._glsCovered(n,h.ahedCvg,r+h.inptCvg.length))continue;var L=h.lookupRec;for(w=0;w<L.length;w+=2){y=L[w];var P=a[L[w+1]];e.U._applySubs(n,r+y,P,a)}}}}},e.U._glsCovered=function(n,r,o){for(var a=0;a<r.length;a++)if(e._lctf.coverageIndex(r[a],n[o+a])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,o){for(var a={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var h=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,f=e.U.glyphToPath(n,u),d=0;d<f.crds.length;d+=2)a.crds.push(f.crds[d]+l),a.crds.push(f.crds[d+1]);for(o&&a.cmds.push(o),d=0;d<f.cmds.length;d++)a.cmds.push(f.cmds[d]);o&&a.cmds.push("X"),l+=n.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(n,u,h))}}return a},e.U.P={},e.U.P.moveTo=function(n,r,o){n.cmds.push("M"),n.crds.push(r,o)},e.U.P.lineTo=function(n,r,o){n.cmds.push("L"),n.crds.push(r,o)},e.U.P.curveTo=function(n,r,o,a,l,c,u){n.cmds.push("C"),n.crds.push(r,o,a,l,c,u)},e.U.P.qcurveTo=function(n,r,o,a,l){n.cmds.push("Q"),n.crds.push(r,o,a,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,o,a,l){for(var c=r.stack,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open,g=0,v=r.x,m=r.y,p=0,x=0,y=0,_=0,A=0,w=0,E=0,C=0,T=0,M=0,L={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,L);var P=L.val;if(g+=L.size,P=="o1"||P=="o18")c.length%2!=0&&!h&&(f=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(P=="o3"||P=="o23")c.length%2!=0&&!h&&(f=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(P=="o4")c.length>1&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),d&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,v,m),d=!0;else if(P=="o5")for(;c.length>0;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);else if(P=="o6"||P=="o7")for(var D=c.length,N=P=="o6",X=0;X<D;X++){var z=c.shift();N?v+=z:m+=z,N=!N,e.U.P.lineTo(l,v,m)}else if(P=="o8"||P=="o24"){D=c.length;for(var ie=0;ie+6<=D;)p=v+c.shift(),x=m+c.shift(),y=p+c.shift(),_=x+c.shift(),v=y+c.shift(),m=_+c.shift(),e.U.P.curveTo(l,p,x,y,_,v,m),ie+=6;P=="o24"&&(v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m))}else{if(P=="o11")break;if(P=="o1234"||P=="o1235"||P=="o1236"||P=="o1237")P=="o1234"&&(x=m,y=(p=v+c.shift())+c.shift(),M=_=x+c.shift(),w=_,C=m,v=(E=(A=(T=y+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,p,x,y,_,T,M),e.U.P.curveTo(l,A,w,E,C,v,m)),P=="o1235"&&(p=v+c.shift(),x=m+c.shift(),y=p+c.shift(),_=x+c.shift(),T=y+c.shift(),M=_+c.shift(),A=T+c.shift(),w=M+c.shift(),E=A+c.shift(),C=w+c.shift(),v=E+c.shift(),m=C+c.shift(),c.shift(),e.U.P.curveTo(l,p,x,y,_,T,M),e.U.P.curveTo(l,A,w,E,C,v,m)),P=="o1236"&&(p=v+c.shift(),x=m+c.shift(),y=p+c.shift(),M=_=x+c.shift(),w=_,E=(A=(T=y+c.shift())+c.shift())+c.shift(),C=w+c.shift(),v=E+c.shift(),e.U.P.curveTo(l,p,x,y,_,T,M),e.U.P.curveTo(l,A,w,E,C,v,m)),P=="o1237"&&(p=v+c.shift(),x=m+c.shift(),y=p+c.shift(),_=x+c.shift(),T=y+c.shift(),M=_+c.shift(),A=T+c.shift(),w=M+c.shift(),E=A+c.shift(),C=w+c.shift(),Math.abs(E-v)>Math.abs(C-m)?v=E+c.shift():m=C+c.shift(),e.U.P.curveTo(l,p,x,y,_,T,M),e.U.P.curveTo(l,A,w,E,C,v,m));else if(P=="o14"){if(c.length>0&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),c.length==4){var q=c.shift(),ee=c.shift(),J=c.shift(),I=c.shift(),W=e.CFF.glyphBySE(o,J),re=e.CFF.glyphBySE(o,I);e.U._drawCFF(o.CharStrings[W],r,o,a,l),r.x=q,r.y=ee,e.U._drawCFF(o.CharStrings[re],r,o,a,l)}d&&(e.U.P.closePath(l),d=!1)}else if(P=="o19"||P=="o20")c.length%2!=0&&!h&&(f=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(P=="o21")c.length>2&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),m+=c.pop(),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),d=!0;else if(P=="o22")c.length>1&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),d=!0;else if(P=="o25"){for(;c.length>6;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);p=v+c.shift(),x=m+c.shift(),y=p+c.shift(),_=x+c.shift(),v=y+c.shift(),m=_+c.shift(),e.U.P.curveTo(l,p,x,y,_,v,m)}else if(P=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)p=v,x=m+c.shift(),v=y=p+c.shift(),m=(_=x+c.shift())+c.shift(),e.U.P.curveTo(l,p,x,y,_,v,m);else if(P=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)x=m,y=(p=v+c.shift())+c.shift(),_=x+c.shift(),v=y+c.shift(),m=_,e.U.P.curveTo(l,p,x,y,_,v,m);else if(P=="o10"||P=="o29"){var F=P=="o10"?a:o;if(c.length==0)console.debug("error: empty stack");else{var k=c.pop(),ne=F.Subrs[k+F.Bias];r.x=v,r.y=m,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d,e.U._drawCFF(ne,r,o,a,l),v=r.x,m=r.y,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open}}else if(P=="o30"||P=="o31"){var j=c.length,le=(ie=0,P=="o31");for(ie+=j-(D=-3&j);ie<D;)le?(x=m,y=(p=v+c.shift())+c.shift(),m=(_=x+c.shift())+c.shift(),D-ie==5?(v=y+c.shift(),ie++):v=y,le=!1):(p=v,x=m+c.shift(),y=p+c.shift(),_=x+c.shift(),v=y+c.shift(),D-ie==5?(m=_+c.shift(),ie++):m=_,le=!0),e.U.P.curveTo(l,p,x,y,_,v,m),ie+=4}else{if((P+"").charAt(0)=="o")throw console.debug("Unknown operation: "+P,n),P;c.push(P)}}}r.x=v,r.y=m,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d};var t=e,i={Typr:t};return s.Typr=t,s.default=i,Object.defineProperty(s,"__esModule",{value:!0}),s})({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function nM(){return(function(s){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(P,D){for(var N=new t(31),X=0;X<31;++X)N[X]=D+=1<<P[X-1];var z=new i(N[30]);for(X=1;X<30;++X)for(var ie=N[X];ie<N[X+1];++ie)z[ie]=ie-N[X]<<5|X;return[N,z]},l=a(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=a(r,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var v=function(P,D,N){for(var X=P.length,z=0,ie=new t(D);z<X;++z)++ie[P[z]-1];var q,ee=new t(D);for(z=0;z<D;++z)ee[z]=ee[z-1]+ie[z-1]<<1;{q=new t(1<<D);var J=15-D;for(z=0;z<X;++z)if(P[z])for(var I=z<<4|P[z],W=D-P[z],re=ee[P[z]-1]++<<W,F=re|(1<<W)-1;re<=F;++re)q[f[re]>>>J]=I}return q},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new e(32);for(d=0;d<32;++d)p[d]=5;var x=v(m,9),y=v(p,5),_=function(P){for(var D=P[0],N=1;N<P.length;++N)P[N]>D&&(D=P[N]);return D},A=function(P,D,N){var X=D/8|0;return(P[X]|P[X+1]<<8)>>(7&D)&N},w=function(P,D){var N=D/8|0;return(P[N]|P[N+1]<<8|P[N+2]<<16)>>(7&D)},E=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],C=function(P,D,N){var X=new Error(D||E[P]);if(X.code=P,Error.captureStackTrace&&Error.captureStackTrace(X,C),!N)throw X;return X},T=function(P,D,N){var X=P.length;if(!X||N&&!N.l&&X<5)return D||new e(0);var z=!D||N,ie=!N||N.i;N||(N={}),D||(D=new e(3*X));var q,ee=function(pe){var Ge=D.length;if(pe>Ge){var Fe=new e(Math.max(2*Ge,pe));Fe.set(D),D=Fe}},J=N.f||0,I=N.p||0,W=N.b||0,re=N.l,F=N.d,k=N.m,ne=N.n,j=8*X;do{if(!re){N.f=J=A(P,I,1);var le=A(P,I+1,3);if(I+=3,!le){var Se=P[(Q=((q=I)/8|0)+(7&q&&1)+4)-4]|P[Q-3]<<8,ye=Q+Se;if(ye>X){ie&&C(0);break}z&&ee(W+Se),D.set(P.subarray(Q,ye),W),N.b=W+=Se,N.p=I=8*ye;continue}if(le==1)re=x,F=y,k=9,ne=5;else if(le==2){var xe=A(P,I,31)+257,fe=A(P,I+10,15)+4,Ue=xe+A(P,I+5,31)+1;I+=14;for(var U=new e(Ue),Re=new e(19),te=0;te<fe;++te)Re[o[te]]=A(P,I+3*te,7);I+=3*fe;var se=_(Re),V=(1<<se)-1,he=v(Re,se);for(te=0;te<Ue;){var Q,b=he[A(P,I,V)];if(I+=15&b,(Q=b>>>4)<16)U[te++]=Q;else{var S=0,O=0;for(Q==16?(O=3+A(P,I,3),I+=2,S=U[te-1]):Q==17?(O=3+A(P,I,7),I+=3):Q==18&&(O=11+A(P,I,127),I+=7);O--;)U[te++]=S}}var K=U.subarray(0,xe),Y=U.subarray(xe);k=_(K),ne=_(Y),re=v(K,k),F=v(Y,ne)}else C(1);if(I>j){ie&&C(0);break}}z&&ee(W+131072);for(var oe=(1<<k)-1,de=(1<<ne)-1,ue=I;;ue=I){var me=(S=re[w(P,I)&oe])>>>4;if((I+=15&S)>j){ie&&C(0);break}if(S||C(2),me<256)D[W++]=me;else{if(me==256){ue=I,re=null;break}var Le=me-254;if(me>264){var ve=n[te=me-257];Le=A(P,I,(1<<ve)-1)+c[te],I+=ve}var Ae=F[w(P,I)&de],we=Ae>>>4;if(Ae||C(3),I+=15&Ae,Y=h[we],we>3&&(ve=r[we],Y+=w(P,I)&(1<<ve)-1,I+=ve),I>j){ie&&C(0);break}z&&ee(W+131072);for(var Ce=W+Le;W<Ce;W+=4)D[W]=D[W-Y],D[W+1]=D[W+1-Y],D[W+2]=D[W+2-Y],D[W+3]=D[W+3-Y];W=Ce}}N.l=re,N.p=ue,N.b=W,re&&(J=1,N.m=k,N.d=F,N.n=ne)}while(!J);return W==D.length?D:(function(pe,Ge,Fe){(Fe==null||Fe>pe.length)&&(Fe=pe.length);var Ze=new(pe instanceof t?t:pe instanceof i?i:e)(Fe-Ge);return Ze.set(pe.subarray(Ge,Fe)),Ze})(D,0,W)},M=new e(0),L=typeof TextDecoder<"u"&&new TextDecoder;try{L.decode(M,{stream:!0})}catch{}return s.convert_streams=function(P){var D=new DataView(P),N=0;function X(){var xe=D.getUint16(N);return N+=2,xe}function z(){var xe=D.getUint32(N);return N+=4,xe}function ie(xe){Se.setUint16(ye,xe),ye+=2}function q(xe){Se.setUint32(ye,xe),ye+=4}for(var ee={signature:z(),flavor:z(),length:z(),numTables:X(),reserved:X(),totalSfntSize:z(),majorVersion:X(),minorVersion:X(),metaOffset:z(),metaLength:z(),metaOrigLength:z(),privOffset:z(),privLength:z()},J=0;Math.pow(2,J)<=ee.numTables;)J++;J--;for(var I=16*Math.pow(2,J),W=16*ee.numTables-I,re=12,F=[],k=0;k<ee.numTables;k++)F.push({tag:z(),offset:z(),compLength:z(),origLength:z(),origChecksum:z()}),re+=16;var ne,j=new Uint8Array(12+16*F.length+F.reduce((function(xe,fe){return xe+fe.origLength+4}),0)),le=j.buffer,Se=new DataView(le),ye=0;return q(ee.flavor),ie(ee.numTables),ie(I),ie(J),ie(W),F.forEach((function(xe){q(xe.tag),q(xe.origChecksum),q(re),q(xe.origLength),xe.outOffset=re,(re+=xe.origLength)%4!=0&&(re+=4-re%4)})),F.forEach((function(xe){var fe,Ue=P.slice(xe.offset,xe.offset+xe.compLength);if(xe.compLength!=xe.origLength){var U=new Uint8Array(xe.origLength);fe=new Uint8Array(Ue,2),T(fe,U)}else U=new Uint8Array(Ue);j.set(U,xe.outOffset);var Re=0;(re=xe.outOffset+xe.origLength)%4!=0&&(Re=4-re%4),j.set(new Uint8Array(Re).buffer,xe.outOffset+xe.origLength),ne=re+Re})),le.slice(0,ne)},Object.defineProperty(s,"__esModule",{value:!0}),s})({}).convert_streams}function iM(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,o=4,a=8,l=16,c=32;let u;function h(E){if(!u){const C={R:r,L:n,D:o,C:l,U:c,T:a};u=new Map;for(let T in i){let M=0;i[T].split(",").forEach(L=>{let[P,D]=L.split("+");P=parseInt(P,36),D=D?parseInt(D,36):0,u.set(M+=P,C[T]);for(let N=D;N--;)u.set(++M,C[T])})}}return u.get(E)||c}const f=1,d=2,g=3,v=4,m=[null,"isol","init","fina","medi"];function p(E){const C=new Uint8Array(E.length);let T=c,M=f,L=-1;for(let P=0;P<E.length;P++){const D=E.codePointAt(P);let N=h(D)|0,X=f;N&a||(T&(n|o|l)?N&(r|o|l)?(X=g,(M===f||M===g)&&C[L]++):N&(n|c)&&(M===d||M===v)&&C[L]--:T&(r|c)&&(M===d||M===v)&&C[L]--,M=C[P]=X,T=N,L=P,D>65535&&P++)}return C}function x(E,C){const T=[];for(let L=0;L<C.length;L++){const P=C.codePointAt(L);P>65535&&L++,T.push(s.U.codeToGlyph(E,P))}const M=E.GSUB;if(M){const{lookupList:L,featureList:P}=M;let D;const N=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,X=[];P.forEach(z=>{if(N.test(z.tag))for(let ie=0;ie<z.tab.length;ie++){if(X[z.tab[ie]])continue;X[z.tab[ie]]=!0;const q=L[z.tab[ie]],ee=/^(isol|init|fina|medi)$/.test(z.tag);ee&&!D&&(D=p(C));for(let J=0;J<T.length;J++)(!D||!ee||m[D[J]]===z.tag)&&s.U._applySubs(T,J,q,L)}})}return T}function y(E,C){const T=new Int16Array(C.length*3);let M=0;for(;M<C.length;M++){const N=C[M];if(N===-1)continue;T[M*3+2]=E.hmtx.aWidth[N];const X=E.GPOS;if(X){const z=X.lookupList;for(let ie=0;ie<z.length;ie++){const q=z[ie];for(let ee=0;ee<q.tabs.length;ee++){const J=q.tabs[ee];if(q.ltype===1){if(s._lctf.coverageIndex(J.coverage,N)!==-1&&J.pos){D(J.pos,M);break}}else if(q.ltype===2){let I=null,W=L();if(W!==-1){const re=s._lctf.coverageIndex(J.coverage,C[W]);if(re!==-1){if(J.fmt===1){const F=J.pairsets[re];for(let k=0;k<F.length;k++)F[k].gid2===N&&(I=F[k])}else if(J.fmt===2){const F=s.U._getGlyphClass(C[W],J.classDef1),k=s.U._getGlyphClass(N,J.classDef2);I=J.matrix[F][k]}if(I){I.val1&&D(I.val1,W),I.val2&&D(I.val2,M);break}}}}else if(q.ltype===4){const I=s._lctf.coverageIndex(J.markCoverage,N);if(I!==-1){const W=L(P),re=W===-1?-1:s._lctf.coverageIndex(J.baseCoverage,C[W]);if(re!==-1){const F=J.markArray[I],k=J.baseArray[re][F.markClass];T[M*3]=k.x-F.x+T[W*3]-T[W*3+2],T[M*3+1]=k.y-F.y+T[W*3+1];break}}}else if(q.ltype===6){const I=s._lctf.coverageIndex(J.mark1Coverage,N);if(I!==-1){const W=L();if(W!==-1){const re=C[W];if(_(E,re)===3){const F=s._lctf.coverageIndex(J.mark2Coverage,re);if(F!==-1){const k=J.mark1Array[I],ne=J.mark2Array[F][k.markClass];T[M*3]=ne.x-k.x+T[W*3]-T[W*3+2],T[M*3+1]=ne.y-k.y+T[W*3+1];break}}}}}}}}else if(E.kern&&!E.cff){const z=L();if(z!==-1){const ie=E.kern.glyph1.indexOf(C[z]);if(ie!==-1){const q=E.kern.rval[ie].glyph2.indexOf(N);q!==-1&&(T[z*3+2]+=E.kern.rval[ie].vals[q])}}}}return T;function L(N){for(let X=M-1;X>=0;X--)if(C[X]!==-1&&(!N||N(C[X])))return X;return-1}function P(N){return _(E,N)===1}function D(N,X){for(let z=0;z<3;z++)T[X*3+z]+=N[z]||0}}function _(E,C){const T=E.GDEF&&E.GDEF.glyphClassDef;return T?s.U._getGlyphClass(C,T):0}function A(...E){for(let C=0;C<E.length;C++)if(typeof E[C]=="number")return E[C]}function w(E){const C=Object.create(null),T=E["OS/2"],M=E.hhea,L=E.head.unitsPerEm,P=A(T&&T.sTypoAscender,M&&M.ascender,L),D={unitsPerEm:L,ascender:P,descender:A(T&&T.sTypoDescender,M&&M.descender,0),capHeight:A(T&&T.sCapHeight,P),xHeight:A(T&&T.sxHeight,P),lineGap:A(T&&T.sTypoLineGap,M&&M.lineGap),supportsCodePoint(N){return s.U.codeToGlyph(E,N)>0},forEachGlyph(N,X,z,ie){let q=0;const ee=1/D.unitsPerEm*X,J=x(E,N);let I=0;const W=y(E,J);return J.forEach((re,F)=>{if(re!==-1){let k=C[re];if(!k){const{cmds:ne,crds:j}=s.U.glyphToPath(E,re);let le="",Se=0;for(let U=0,Re=ne.length;U<Re;U++){const te=t[ne[U]];le+=ne[U];for(let se=1;se<=te;se++)le+=(se>1?",":"")+j[Se++]}let ye,xe,fe,Ue;if(j.length){ye=xe=1/0,fe=Ue=-1/0;for(let U=0,Re=j.length;U<Re;U+=2){let te=j[U],se=j[U+1];te<ye&&(ye=te),se<xe&&(xe=se),te>fe&&(fe=te),se>Ue&&(Ue=se)}}else ye=fe=xe=Ue=0;k=C[re]={index:re,advanceWidth:E.hmtx.aWidth[re],xMin:ye,yMin:xe,xMax:fe,yMax:Ue,path:le}}ie.call(null,k,q+W[F*3]*ee,W[F*3+1]*ee,I),q+=W[F*3+2]*ee,z&&(q+=z*X)}I+=N.codePointAt(I)>65535?2:1}),q}};return D}return function(C){const T=new Uint8Array(C,0,4),M=s._bin.readASCII(T,0,4);if(M==="wOFF")C=e(C);else if(M==="wOF2")throw new Error("woff2 fonts not supported");return w(s.parse(C)[0])}}const rM=_r({name:"Typr Font Parser",dependencies:[tM,nM,iM],init(s,e,t){const i=s(),n=e();return t(i,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function sM(){return(function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(y){var _=y>>5;this.buckets.set(_,(this.buckets.get(_)||0)|1<<(31&y))},e.prototype.has=function(y){var _=this.buckets.get(y>>5);return _!==void 0&&(_&1<<(31&y))!=0},e.prototype.serialize=function(){var y=[];return this.buckets.forEach((function(_,A){y.push((+A).toString(36)+":"+_.toString(36))})),y.join(",")},e.prototype.deserialize=function(y){var _=this;this.buckets.clear(),y.split(",").forEach((function(A){var w=A.split(":");_.buckets.set(parseInt(w[0],36),parseInt(w[1],36))}))};var t=Math.pow(2,8),i=t-1,n=~i;function r(y){var _=(function(w){return w&n})(y).toString(16),A=(function(w){return(w&n)+t-1})(y).toString(16);return"codepoint-index/plane"+(y>>16)+"/"+_+"-"+A+".json"}function o(y,_){var A=y&i,w=_.codePointAt(A/6|0);return((w=(w||48)-48)&1<<A%6)!=0}function a(y,_){var A;(A=y,A.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(w){return w.split("-").map((function(E){return parseInt(E.trim(),16)}))}))).forEach((function(w){var E=w[0],C=w[1];C===void 0&&(C=E),_(E,C)}))}function l(y,_){a(y,(function(A,w){for(var E=A;E<=w;E++)_(E)}))}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(y){var _=h.get(y);return _||(_=new e,l(y.ranges,(function(A){return _.add(A)})),h.set(y,_)),_}var g,v=new Map;function m(y,_,A){return y[_]?_:y[A]?A:(function(w){for(var E in w)return E})(y)}function p(y,_){var A=_;if(!y.includes(A)){A=1/0;for(var w=0;w<y.length;w++)Math.abs(y[w]-_)<Math.abs(A-_)&&(A=y[w])}return A}function x(y){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(_){g.add(_)}))),g.has(y)}return s.CodePointSet=e,s.clearCache=function(){c={},u={}},s.getFontsForString=function(y,_){_===void 0&&(_={});var A,w=_.lang;w===void 0&&(w=/\p{Script=Hangul}/u.test(A=y)?"ko":/\p{Script=Hiragana}|\p{Script=Katakana}/u.test(A)?"ja":"en");var E=_.category;E===void 0&&(E="sans-serif");var C=_.style;C===void 0&&(C="normal");var T=_.weight;T===void 0&&(T=400);var M=(_.dataUrl||f).replace(/\/$/g,""),L=new Map,P=new Uint8Array(y.length),D={},N={},X=new Array(y.length),z=new Map,ie=!1;function q(I){var W=v.get(I);return W||(W=fetch(M+"/"+I).then((function(re){if(!re.ok)throw new Error(re.statusText);return re.json().then((function(F){if(!Array.isArray(F)||F[0]!==1)throw new Error("Incorrect schema version; need 1, got "+F[0]);return F[1]}))})).catch((function(re){if(M!==f)return ie||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+M+'", trying default CDN. '+re.message),ie=!0),M=f,v.delete(I),q(I);throw re})),v.set(I,W)),W}for(var ee=function(I){var W=y.codePointAt(I),re=r(W);X[I]=re,c[re]||z.has(re)||z.set(re,q(re).then((function(F){c[re]=F}))),W>65535&&(I++,J=I)},J=0;J<y.length;J++)ee(J);return Promise.all(z.values()).then((function(){z.clear();for(var I=function(re){var F=y.codePointAt(re),k=null,ne=c[X[re]],j=void 0;for(var le in ne){var Se=N[le];if(Se===void 0&&(Se=N[le]=new RegExp(le).test(w||"en")),Se){for(var ye in j=le,ne[le])if(o(F,ne[le][ye])){k=ye;break}break}}if(!k){e:for(var xe in ne)if(xe!==j){for(var fe in ne[xe])if(o(F,ne[xe][fe])){k=fe;break e}}}k||(console.debug("No font coverage for U+"+F.toString(16)),k="latin"),X[re]=k,u[k]||z.has(k)||z.set(k,q("font-meta/"+k+".json").then((function(Ue){u[k]=Ue}))),F>65535&&(re++,W=re)},W=0;W<y.length;W++)I(W);return Promise.all(z.values())})).then((function(){for(var I,W=null,re=0;re<y.length;re++){var F=y.codePointAt(re);if(W&&(x(F)||d(W).has(F)))P[re]=P[re-1];else{W=u[X[re]];var k=D[W.id];if(!k){var ne=W.typeforms,j=m(ne,E,"sans-serif"),le=m(ne[j],C,"normal"),Se=p((I=ne[j])===null||I===void 0?void 0:I[le],T);k=D[W.id]=M+"/font-files/"+W.id+"/"+j+"."+le+"."+Se+".woff"}var ye=L.get(k);ye==null&&(ye=L.size,L.set(k,ye)),P[re]=ye}F>65535&&(re++,P[re]=P[re-1])}return{fontUrls:Array.from(L.keys()),chars:P}}))},Object.defineProperty(s,"__esModule",{value:!0}),s})({})}function oM(s,e){const t=Object.create(null),i=Object.create(null);function n(o,a){const l=c=>{console.error(`Failure loading font ${o}`,c)};try{const c=new XMLHttpRequest;c.open("get",o,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=s(c.response);u.src=o,a(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(o,a){let l=t[o];l?a(l):i[o]?i[o].push(a):(i[o]=[a],n(o,c=>{c.src=o,t[o]=c,i[o].forEach(u=>u(c)),delete i[o]}))}return function(o,a,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(o.length),g=[];o.length||x();const v=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(_=>!_.lang||_.lang.test(l)).reverse(),c.length){let E=0;(function C(T=0){for(let M=T,L=o.length;M<L;M++){const P=o.codePointAt(M);if(E===1&&g[d[M-1]].supportsCodePoint(P)||M>0&&/\s/.test(o[M]))d[M]=d[M-1],E===2&&(m[m.length-1][1]=M);else for(let D=d[M],N=c.length;D<=N;D++)if(D===N){const X=E===2?m[m.length-1]:m[m.length]=[M,M];X[1]=M,E=2}else{d[M]=D;const{src:X,unicodeRange:z}=c[D];if(!z||y(P,z)){const ie=t[X];if(!ie){r(X,()=>{C(M)});return}if(ie.supportsCodePoint(P)){let q=v.get(ie);typeof q!="number"&&(q=g.length,g.push(ie),v.set(ie,q)),d[M]=q,E=1;break}}}P>65535&&M+1<L&&(d[M+1]=d[M],M++,E===2&&(m[m.length-1][1]=M))}p()})()}else m.push([0,o.length-1]),p();function p(){if(m.length){const _=m.map(A=>o.substring(A[0],A[1]+1)).join(`
`);e.getFontsForString(_,{lang:l||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:A,chars:w})=>{const E=g.length;let C=0;m.forEach(M=>{for(let L=0,P=M[1]-M[0];L<=P;L++)d[M[0]+L]=w[C++]+E;C++});let T=0;A.forEach((M,L)=>{r(M,P=>{g[L+E]=P,++T===A.length&&x()})})})}else x()}function x(){a({chars:d,fonts:g})}function y(_,A){for(let w=0;w<A.length;w++){const[E,C=E]=A[w];if(E<=_&&_<=C)return!0}return!1}}}const aM=_r({name:"FontResolver",dependencies:[oM,rM,sM],init(s,e,t){return s(e,t())}});function lM(s,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:g,lang:v,fonts:m,style:p,weight:x,preResolvedFonts:y,unicodeFontsURL:_},A){const w=({chars:E,fonts:C})=>{let T,M;const L=[];for(let P=0;P<E.length;P++)E[P]!==M?(M=E[P],L.push(T={start:P,end:P,fontObj:C[E[P]]})):T.end=P;A(L)};y?w(y):s(g,w,{lang:v,fonts:m,style:p,weight:x,unicodeFontsURL:_})}function a({text:g="",font:v,lang:m,sdfGlyphSize:p=64,fontSize:x=400,fontWeight:y=1,fontStyle:_="normal",letterSpacing:A=0,lineHeight:w="normal",maxWidth:E=1/0,direction:C,textAlign:T="left",textIndent:M=0,whiteSpace:L="normal",overflowWrap:P="normal",anchorX:D=0,anchorY:N=0,metricsOnly:X=!1,unicodeFontsURL:z,preResolvedFonts:ie=null,includeCaretPositions:q=!1,chunkedBoundsSize:ee=8192,colorRanges:J=null},I){const W=h(),re={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),x=+x,A=+A,E=+E,w=w||"normal",M=+M,o({text:g,lang:m,style:_,weight:y,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:z,preResolvedFonts:ie},F=>{re.fontLoad=h()-W;const k=isFinite(E);let ne=null,j=null,le=null,Se=null,ye=null,xe=null,fe=null,Ue=null,U=0,Re=0,te=L!=="nowrap";const se=new Map,V=h();let he=M,Q=0,b=new f;const S=[b];F.forEach(de=>{const{fontObj:ue}=de,{ascender:me,descender:Le,unitsPerEm:ve,lineGap:Ae,capHeight:we,xHeight:Ce}=ue;let pe=se.get(ue);if(!pe){const ge=x/ve,ae=w==="normal"?(me-Le+Ae)*ge:w*x,_e=(ae-(me-Le)*ge)/2,be=Math.min(ae,(me-Le)*ge),Me=(me+Le)/2*ge+be/2;pe={index:se.size,src:ue.src,fontObj:ue,fontSizeMult:ge,unitsPerEm:ve,ascender:me*ge,descender:Le*ge,capHeight:we*ge,xHeight:Ce*ge,lineHeight:ae,baseline:-_e-me*ge,caretTop:Me,caretBottom:Me-be},se.set(ue,pe)}const{fontSizeMult:Ge}=pe,Fe=g.slice(de.start,de.end+1);let Ze,G;ue.forEachGlyph(Fe,x,A,(ge,ae,_e,be)=>{ae+=Q,be+=de.start,Ze=ae,G=ge;const Me=g.charAt(be),Be=ge.advanceWidth*Ge,Ye=b.count;let ze;if("isEmpty"in ge||(ge.isWhitespace=!!Me&&new RegExp(n).test(Me),ge.canBreakAfter=!!Me&&r.test(Me),ge.isEmpty=ge.xMin===ge.xMax||ge.yMin===ge.yMax||i.test(Me)),!ge.isWhitespace&&!ge.isEmpty&&Re++,te&&k&&!ge.isWhitespace&&ae+Be+he>E&&Ye){if(b.glyphAt(Ye-1).glyphObj.canBreakAfter)ze=new f,he=-ae;else for(let ct=Ye;ct--;)if(ct===0&&P==="break-word"){ze=new f,he=-ae;break}else if(b.glyphAt(ct).glyphObj.canBreakAfter){ze=b.splitAt(ct+1);const ut=ze.glyphAt(0).x;he-=ut;for(let _t=ze.count;_t--;)ze.glyphAt(_t).x-=ut;break}ze&&(b.isSoftWrapped=!0,b=ze,S.push(b),U=E)}let We=b.glyphAt(b.count);We.glyphObj=ge,We.x=ae+he,We.y=_e,We.width=Be,We.charIndex=be,We.fontData=pe,Me===`
`&&(b=new f,S.push(b),he=-(ae+Be+A*x)+M)}),Q=Ze+G.advanceWidth*Ge+A*x});let O=0;S.forEach(de=>{let ue=!0;for(let me=de.count;me--;){const Le=de.glyphAt(me);ue&&!Le.glyphObj.isWhitespace&&(de.width=Le.x+Le.width,de.width>U&&(U=de.width),ue=!1);let{lineHeight:ve,capHeight:Ae,xHeight:we,baseline:Ce}=Le.fontData;ve>de.lineHeight&&(de.lineHeight=ve);const pe=Ce-de.baseline;pe<0&&(de.baseline+=pe,de.cap+=pe,de.ex+=pe),de.cap=Math.max(de.cap,de.baseline+Ae),de.ex=Math.max(de.ex,de.baseline+we)}de.baseline-=O,de.cap-=O,de.ex-=O,O+=de.lineHeight});let K=0,Y=0;if(D&&(typeof D=="number"?K=-D:typeof D=="string"&&(K=-U*(D==="left"?0:D==="center"?.5:D==="right"?1:c(D)))),N&&(typeof N=="number"?Y=-N:typeof N=="string"&&(Y=N==="top"?0:N==="top-baseline"?-S[0].baseline:N==="top-cap"?-S[0].cap:N==="top-ex"?-S[0].ex:N==="middle"?O/2:N==="bottom"?O:N==="bottom-baseline"?-S[S.length-1].baseline:c(N)*O)),!X){const de=e.getEmbeddingLevels(g,C);ne=new Uint16Array(Re),j=new Uint8Array(Re),le=new Float32Array(Re*2),Se={},fe=[1/0,1/0,-1/0,-1/0],Ue=[],q&&(xe=new Float32Array(g.length*4)),J&&(ye=new Uint8Array(Re*3));let ue=0,me=-1,Le=-1,ve,Ae;if(S.forEach((we,Ce)=>{let{count:pe,width:Ge}=we;if(pe>0){let Fe=0;for(let be=pe;be--&&we.glyphAt(be).glyphObj.isWhitespace;)Fe++;let Ze=0,G=0;if(T==="center")Ze=(U-Ge)/2;else if(T==="right")Ze=U-Ge;else if(T==="justify"&&we.isSoftWrapped){let be=0;for(let Me=pe-Fe;Me--;)we.glyphAt(Me).glyphObj.isWhitespace&&be++;G=(U-Ge)/be}if(G||Ze){let be=0;for(let Me=0;Me<pe;Me++){let Be=we.glyphAt(Me);const Ye=Be.glyphObj;Be.x+=Ze+be,G!==0&&Ye.isWhitespace&&Me<pe-Fe&&(be+=G,Be.width+=G)}}const ge=e.getReorderSegments(g,de,we.glyphAt(0).charIndex,we.glyphAt(we.count-1).charIndex);for(let be=0;be<ge.length;be++){const[Me,Be]=ge[be];let Ye=1/0,ze=-1/0;for(let We=0;We<pe;We++)if(we.glyphAt(We).charIndex>=Me){let ct=We,ut=We;for(;ut<pe;ut++){let _t=we.glyphAt(ut);if(_t.charIndex>Be)break;ut<pe-Fe&&(Ye=Math.min(Ye,_t.x),ze=Math.max(ze,_t.x+_t.width))}for(let _t=ct;_t<ut;_t++){const Yt=we.glyphAt(_t);Yt.x=ze-(Yt.x+Yt.width-Ye)}break}}let ae;const _e=be=>ae=be;for(let be=0;be<pe;be++){const Me=we.glyphAt(be);ae=Me.glyphObj;const Be=ae.index,Ye=de.levels[Me.charIndex]&1;if(Ye){const ze=e.getMirroredCharacter(g[Me.charIndex]);ze&&Me.fontData.fontObj.forEachGlyph(ze,0,0,_e)}if(q){const{charIndex:ze,fontData:We}=Me,ct=Me.x+K,ut=Me.x+Me.width+K;xe[ze*4]=Ye?ut:ct,xe[ze*4+1]=Ye?ct:ut,xe[ze*4+2]=we.baseline+We.caretBottom+Y,xe[ze*4+3]=we.baseline+We.caretTop+Y;const _t=ze-me;_t>1&&u(xe,me,_t),me=ze}if(J){const{charIndex:ze}=Me;for(;ze>Le;)Le++,J.hasOwnProperty(Le)&&(Ae=J[Le])}if(!ae.isWhitespace&&!ae.isEmpty){const ze=ue++,{fontSizeMult:We,src:ct,index:ut}=Me.fontData,_t=Se[ct]||(Se[ct]={});_t[Be]||(_t[Be]={path:ae.path,pathBounds:[ae.xMin,ae.yMin,ae.xMax,ae.yMax]});const Yt=Me.x+K,Nt=Me.y+we.baseline+Y;le[ze*2]=Yt,le[ze*2+1]=Nt;const Qt=Yt+ae.xMin*We,dn=Nt+ae.yMin*We,wn=Yt+ae.xMax*We,qt=Nt+ae.yMax*We;Qt<fe[0]&&(fe[0]=Qt),dn<fe[1]&&(fe[1]=dn),wn>fe[2]&&(fe[2]=wn),qt>fe[3]&&(fe[3]=qt),ze%ee===0&&(ve={start:ze,end:ze,rect:[1/0,1/0,-1/0,-1/0]},Ue.push(ve)),ve.end++;const Rt=ve.rect;if(Qt<Rt[0]&&(Rt[0]=Qt),dn<Rt[1]&&(Rt[1]=dn),wn>Rt[2]&&(Rt[2]=wn),qt>Rt[3]&&(Rt[3]=qt),ne[ze]=Be,j[ze]=ut,J){const sn=ze*3;ye[sn]=Ae>>16&255,ye[sn+1]=Ae>>8&255,ye[sn+2]=Ae&255}}}}}),xe){const we=g.length-me;we>1&&u(xe,me,we)}}const oe=[];se.forEach(({index:de,src:ue,unitsPerEm:me,ascender:Le,descender:ve,lineHeight:Ae,capHeight:we,xHeight:Ce})=>{oe[de]={src:ue,unitsPerEm:me,ascender:Le,descender:ve,lineHeight:Ae,capHeight:we,xHeight:Ce}}),re.typesetting=h()-V,I({glyphIds:ne,glyphFontIndices:j,glyphPositions:le,glyphData:Se,fontData:oe,caretPositions:xe,glyphColors:ye,chunkedBounds:Ue,fontSize:x,topBaseline:Y+S[0].baseline,blockBounds:[K,Y-O,K+U,Y],visibleBounds:fe,timings:re})})}function l(g,v){a({...g,metricsOnly:!0},m=>{const[p,x,y,_]=m.blockBounds;v({width:y-p,height:_-x})})}function c(g){let v=g.match(/^([\d.]+)%$/),m=v?parseFloat(v[1]):NaN;return isNaN(m)?0:m/100}function u(g,v,m){const p=g[v*4],x=g[v*4+1],y=g[v*4+2],_=g[v*4+3],A=(x-p)/m;for(let w=0;w<m;w++){const E=(v+w)*4;g[E]=p+A*w,g[E+1]=p+A*(w+1),g[E+2]=y,g[E+3]=_}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let v=f.flyweight;return v.data=this.data,v.index=g,v},splitAt(g){let v=new f;return v.data=this.data.splice(g*d.length),v}},f.flyweight=d.reduce((g,v,m,p)=>(Object.defineProperty(g,v,{get(){return this.data[this.index*d.length+m]},set(x){this.data[this.index*d.length+m]=x}}),g),{data:null,index:0}),{typeset:a,measure:l}}const Ei=()=>(self.performance||Date).now(),Co=Rf();let gh;function cM(s,e,t,i,n,r,o,a,l,c,u=!0){return u?hM(s,e,t,i,n,r,o,a,l,c).then(null,h=>(gh||(console.warn("WebGL SDF generation failed, falling back to JS",h),gh=!0),_h(s,e,t,i,n,r,o,a,l,c))):_h(s,e,t,i,n,r,o,a,l,c)}const _o=[],uM=5;let Dl=0;function Pf(){const s=Ei();for(;_o.length&&Ei()-s<uM;)_o.shift()();Dl=_o.length?setTimeout(Pf,0):0}const hM=(...s)=>new Promise((e,t)=>{_o.push(()=>{const i=Ei();try{Co.webgl.generateIntoCanvas(...s),e({timing:Ei()-i})}catch(n){t(n)}}),Dl||(Dl=setTimeout(Pf,0))}),fM=4,dM=2e3,vh={};let pM=0;function _h(s,e,t,i,n,r,o,a,l,c){const u="TroikaTextSDFGenerator_JS_"+pM++%fM;let h=vh[u];return h||(h=vh[u]={workerModule:_r({name:u,workerId:u,dependencies:[Rf,Ei],init(f,d){const g=f().javascript.generate;return function(...v){const m=d();return{textureData:g(...v),timing:d()-m}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(s,e,t,i,n,r).then(({textureData:f,timing:d})=>{const g=Ei(),v=new Uint8Array(f.length*4);for(let m=0;m<f.length;m++)v[m*4+c]=f[m];return Co.webglUtils.renderImageData(o,v,a,l,s,e,1<<3-c),d+=Ei()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{Xy(u)},dM)),{timing:d}})}function mM(s){s._warm||(Co.webgl.isSupported(s),s._warm=!0)}const gM=Co.webglUtils.resizeWebGLCanvasWithoutClearing,Wr={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},vM=new ke;function $i(){return(self.performance||Date).now()}const xh=Object.create(null);function _M(s,e){s=yM({},s);const t=$i(),i=[];if(s.font&&i.push({label:"user",src:MM(s.font)}),s.font=i,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||Wr.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||Wr.unicodeFontsURL,s.colorRanges!=null){let f={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let g=s.colorRanges[d];typeof g!="number"&&(g=vM.set(g).getHex()),f[d]=g}s.colorRanges=f}Object.freeze(s);const{textureWidth:n,sdfExponent:r}=Wr,{sdfGlyphSize:o}=s,a=n/o*4;let l=xh[o];if(!l){const f=document.createElement("canvas");f.width=n,f.height=o*256/a,l=xh[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:f,sdfTexture:new bt(f,void 0,void 0,void 0,Wt,Wt),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,xM(l)}const{sdfTexture:c,sdfCanvas:u}=l;Df(s).then(f=>{const{glyphIds:d,glyphFontIndices:g,fontData:v,glyphPositions:m,fontSize:p,timings:x}=f,y=[],_=new Float32Array(d.length*4);let A=0,w=0;const E=$i(),C=v.map(D=>{let N=l.glyphsByFont.get(D.src);return N||l.glyphsByFont.set(D.src,N=new Map),N});d.forEach((D,N)=>{const X=g[N],{src:z,unitsPerEm:ie}=v[X];let q=C[X].get(D);if(!q){const{path:re,pathBounds:F}=f.glyphData[z][D],k=Math.max(F[2]-F[0],F[3]-F[1])/o*(Wr.sdfMargin*o+.5),ne=l.glyphCount++,j=[F[0]-k,F[1]-k,F[2]+k,F[3]+k];C[X].set(D,q={path:re,atlasIndex:ne,sdfViewBox:j}),y.push(q)}const{sdfViewBox:ee}=q,J=m[w++],I=m[w++],W=p/ie;_[A++]=J+ee[0]*W,_[A++]=I+ee[1]*W,_[A++]=J+ee[2]*W,_[A++]=I+ee[3]*W,d[N]=q.atlasIndex}),x.quads=(x.quads||0)+($i()-E);const T=$i();x.sdf={};const M=u.height,L=Math.ceil(l.glyphCount/a),P=Math.pow(2,Math.ceil(Math.log2(L*o)));P>M&&(console.info(`Increasing SDF texture size ${M}->${P}`),gM(u,n,P),c.dispose()),Promise.all(y.map(D=>Lf(D,l,s.gpuAccelerateSDF).then(({timing:N})=>{x.sdf[D.atlasIndex]=N}))).then(()=>{y.length&&!l.contextLost&&(Uf(l),c.needsUpdate=!0),x.sdfTotal=$i()-T,x.total=$i()-t,e(Object.freeze({parameters:s,sdfTexture:c,sdfGlyphSize:o,sdfExponent:r,glyphBounds:_,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||mM(u)})}function Lf({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},o){if(r)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:l}=Wr,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(a/i)*i,f=Math.floor(u/(a/i))*i,d=e%4;return cM(i,i,s,t,c,l,n,h,f,d,o)}function xM(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const i=[];s.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(Lf(r,s,!0))})}),Promise.all(i).then(()=>{Uf(s),s.sdfTexture.needsUpdate=!0})})}function yM(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let ro;function MM(s){return ro||(ro=typeof document>"u"?{}:document.createElement("a")),ro.href=s,ro.href}function Uf(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:i,height:n}=e,r=s.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==i*n*4)&&(o=new Uint8Array(i*n*4),t.image={width:i,height:n,data:o},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,o)}}const SM=_r({name:"Typesetter",dependencies:[lM,aM,Yy],init(s,e,t){return s(e,t())}}),Df=_r({name:"Typesetter",dependencies:[SM],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}});Df.onMainThread;const yh={};function bM(s){let e=yh[s];return e||(e=yh[s]=new jn(1,1,s,s).translate(.5,.5,0)),e}const TM="aTroikaGlyphBounds",Mh="aTroikaGlyphIndex",EM="aTroikaGlyphColor";class AM extends Cm{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new En,this.boundingBox=new Tn}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=bM(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){this.updateAttributeData(TM,e,4),this.updateAttributeData(Mh,t,1),this.updateAttributeData(EM,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:o,max:a,sin:l,cos:c}=Math,u=n/2,h=n*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,v=r((d+u)/h)!==r((g+u)/h)?-f:o(l(d)*f,l(g)*f),m=r((d-u)/h)!==r((g-u)/h)?f:a(l(d)*f,l(g)*f),p=r((d+n)/h)!==r((g+n)/h)?f*2:a(f-c(d)*f,f-c(g)*f);i.min.set(v,e[1],t<0?-p:0),i.max.set(m,e[3],t<0?0:p)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Mh).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,i){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new So(t,i)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const wM=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,RM=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,CM=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,PM=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function LM(s){const e=Ul(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ee},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new st(0,0,0,0)},uTroikaClipRect:{value:new st(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ee},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new ke},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ke},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:wM,vertexTransform:RM,fragmentDefs:CM,fragmentColorTransform:PM,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(Cf,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const cc=new oi({color:16777215,side:nn,transparent:!0}),Sh=8421504,bh=new qe,so=new B,La=new B,zr=[],UM=new B,Ua="+x+y";function Th(s){return Array.isArray(s)?s[0]:s}let If=()=>{const s=new vt(new jn(1,1),cc);return If=()=>s,s},Nf=()=>{const s=new vt(new jn(1,1,32,1),cc);return Nf=()=>s,s};const DM={type:"syncstart"},IM={type:"synccomplete"},Ff=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],NM=Ff.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Of extends vt{constructor(){const e=new AM;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Sh,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Ua,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(DM),_M({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(IM),e&&e()})))}onBeforeRender(e,t,i,n,r,o){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return LM(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=cc.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.hasOutline()){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Th(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return Th(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:a,blockBounds:l}=n;i.uTroikaSDFTexture.value=a,i.uTroikaSDFTextureSize.value.set(a.image.width,a.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,h=0,f,d,g,v=0,m=0;if(t){let{outlineWidth:x,outlineOffsetX:y,outlineOffsetY:_,outlineBlur:A,outlineOpacity:w}=this;c=this._parsePercent(x)||0,u=Math.max(0,this._parsePercent(A)||0),f=w,v=this._parsePercent(y)||0,m=this._parsePercent(_)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,i.uTroikaStrokeColor.value.set(g??Sh),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;i.uTroikaEdgeOffset.value=c,i.uTroikaPositionOffset.value.set(v,m),i.uTroikaBlurRadius.value=u,i.uTroikaStrokeWidth.value=h,i.uTroikaStrokeOpacity.value=d,i.uTroikaFillOpacity.value=f??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)i.uTroikaClipRect.value.fromArray(p);else{const x=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-x,l[1]-x,l[2]+x,l[3]+x)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const a=e.hasOwnProperty("color")?e.color:e.color=new ke;(r!==a._input||typeof r=="object")&&a.set(a._input=r)}let o=this.orientation||Ua;if(o!==e._orientation){let a=i.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let l=o!==Ua&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;so.set(0,0,0)[u]=c==="-"?1:-1,La.set(0,0,0)[f]=h==="-"?-1:1,bh.lookAt(UM,so.cross(La),La),a.setFromMatrix4(bh)}else a.identity();e._orientation=o}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ee){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new Ee){return so.copy(e),this.localPositionToTextCoords(this.worldToLocal(so),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,o=n?Nf():If(),a=o.geometry,{position:l,uv:c}=a.attributes;for(let u=0;u<c.count;u++){let h=r[0]+c.getX(u)*(r[2]-r[0]);const f=r[1]+c.getY(u)*(r[3]-r[1]);let d=0;n&&(d=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),l.setXYZ(u,h,f,d)}a.boundingSphere=this.geometry.boundingSphere,a.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,zr.length=0,o.raycast(e,zr);for(let u=0;u<zr.length;u++)zr[u].object=this,t.push(zr[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,NM.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}Ff.forEach(s=>{const e="_private_"+s;Object.defineProperty(Of.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new Tn;new ke;const FM="/assets/fonts/InstrumentSerif-Regular.ttf",OM="/assets/fonts/InstrumentSerif-Italic.ttf",Eh=[0,5,2,6];function BM(s,e){const t=new Sn;t.renderOrder=0,s.scene.add(t);const i=document.querySelector("[data-gl-headline]"),n=i?[...i.querySelectorAll("[data-line]")].map(h=>({text:h.textContent.trim(),italic:!!h.querySelector(".it")})):[],r=[],o=e?e("headline-font"):()=>{};let a=0;n.forEach((h,f)=>{const d=new Of;d.text=h.text,d.font=h.italic?OM:FM,d.color=15986662,d.anchorX="left",d.anchorY="top",d.material.transparent=!0,d.fillOpacity=0,d.sync(()=>{a+=1,a===n.length&&o()}),t.add(d),r.push(d)}),n.length===0&&o();let l=1;function c(h,f){l=2*s.camera.position.z*Math.tan(bn.degToRad(s.camera.fov/2))/f;const v=Math.min(160,Math.max(42,32+.1*h),f*.78/(r.length*1.02)),m=v*1.02,p=Math.min(Math.max(h*.04,20),64),x=m*r.length,y=-(h/2-p)*l,_=(x/2+v*.38)*l;r.forEach((A,w)=>{A.fontSize=v*l,A.position.x=y+Eh[w%Eh.length]*l,A.position.y=_-w*m*l,A.position.z=-.35,A.sync()}),t.userData.scrollFactor=l}s.addResizeHook(c);let u=!0;return{group:t,texts:r,entrance(){r.forEach((h,f)=>{Ti.to(h,{fillOpacity:1,duration:1.4,delay:.12*f,ease:"power2.out"}),Ti.from(h.position,{y:h.position.y-.35,duration:1.4,delay:.12*f,ease:"expo.out"})})},setPage(h){const f=h==="home";f!==u&&(u=f,r.forEach((d,g)=>{Ti.to(d,{fillOpacity:f?1:0,duration:.5,delay:.05*g,ease:"power2.out"})}))},update(h){t.position.y=h*l;const f=u?Math.max(0,1-h/innerHeight*1.4):0;r.forEach(d=>{d.material.opacity=Math.min(1,f+1e-4)})}}}const kM="#39ff14",oo=72,Ah=2,zM=.065,GM=`
  attribute vec3 aInfo;   /* x: side −1/+1, y: along 0..1, z: age fade */
  varying vec3 vInfo;
  void main() {
    vInfo = aInfo;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,VM=`
  precision highp float;
  uniform vec3 uColor;
  uniform float uIntensity;
  varying vec3 vInfo;
  void main() {
    float across = 1.0 - abs(vInfo.x);           /* 0 edge → 1 core */
    float core = pow(across, 3.0);
    float alpha = across * (1.0 - vInfo.y * 0.7) * vInfo.z * uIntensity;
    /* neon: saturated color body + near-white hot core.
       NOTE: no premultiply — additive blending already scales by srcAlpha */
    vec3 col = uColor * (0.55 + 1.9 * core) + vec3(0.75, 1.0, 0.8) * core * 0.5;
    gl_FragColor = vec4(col, alpha);
  }
`;function HM(){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),i=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return i.addColorStop(0,"rgba(220,255,225,1)"),i.addColorStop(.18,"rgba(90,255,80,0.85)"),i.addColorStop(.5,"rgba(57,255,20,0.25)"),i.addColorStop(1,"rgba(57,255,20,0)"),t.fillStyle=i,t.fillRect(0,0,128,128),new Kl(e)}function WM(s){const e=[],t=new Float32Array(oo*2*3),i=new Float32Array(oo*2*3),n=[];for(let p=0;p<oo-1;p++){const x=p*2;n.push(x,x+1,x+2,x+1,x+3,x+2)}const r=new Et;r.setAttribute("position",new yt(t,3).setUsage(Uc)),r.setAttribute("aInfo",new yt(i,3).setUsage(Uc)),r.setIndex(n),r.setDrawRange(0,0);const o=new Pn({vertexShader:GM,fragmentShader:VM,uniforms:{uColor:{value:new ke(kM)},uIntensity:{value:0}},transparent:!0,blending:Xr,depthWrite:!1,side:nn}),a=new vt(r,o);a.frustumCulled=!1,a.renderOrder=6,s.scene.add(a);const l=new eu(new _l({map:HM(),blending:Xr,depthTest:!1,transparent:!0,opacity:0}));l.renderOrder=7,l.scale.setScalar(.3),s.scene.add(l);const c=new B,u=new B,h=new B,f=new B,d=new B,g=new B(0,1,0);let v=0,m=!1;return{pts:e,mesh:a,setColor(p){const x=new ke(p);o.uniforms.uColor.value.copy(x),l.material.color.copy(x).lerp(new ke("#ffffff"),.35)},burst(p){const x=new eu(new _l({map:l.material.map,color:new ke(p),blending:Xr,depthTest:!1,transparent:!0,opacity:.9}));x.renderOrder=8,x.position.copy(s.nib.position),x.scale.setScalar(.6),s.scene.add(x);const y={v:.6},_={o:.9},A=()=>{y.v+=.14,_.o*=.86,x.scale.setScalar(y.v),x.material.opacity=_.o,_.o>.02?requestAnimationFrame(A):(s.scene.remove(x),x.material.dispose())};A()},update(p,x){s.nib.updateMatrixWorld(),c.set(0,-1.5,0),s.nib.localToWorld(c);const y=m?u.distanceTo(c)/Math.max(x,.001):0;u.copy(c),m=!0;const _=bn.clamp(y*1.6,0,1);for(v+=(_-v)*(1-Math.exp(-6*x)),o.uniforms.uIntensity.value=v,!e.length||e[0].pos.distanceTo(c)>.006?(e.unshift({pos:c.clone(),t:p}),e.length>oo&&e.pop()):e[0].pos.copy(c);e.length&&p-e[e.length-1].t>Ah;)e.pop();const A=e.length;for(let w=0;w<A;w++){const E=e[w].pos,C=e[Math.min(w+1,A-1)].pos;h.subVectors(C,E),h.lengthSq()<1e-8?d.copy(g):(f.subVectors(s.camera.position,E).normalize(),d.crossVectors(h.normalize(),f).normalize(),g.copy(d));const T=A>1?w/(A-1):0,M=bn.clamp(1-(p-e[w].t)/Ah,0,1),L=zM*(1-T*.75),P=w*6;t[P]=E.x+d.x*L,t[P+1]=E.y+d.y*L,t[P+2]=E.z+d.z*L,t[P+3]=E.x-d.x*L,t[P+4]=E.y-d.y*L,t[P+5]=E.z-d.z*L,i[P]=1,i[P+1]=T,i[P+2]=M,i[P+3]=-1,i[P+4]=T,i[P+5]=M}r.attributes.position.needsUpdate=!0,r.attributes.aInfo.needsUpdate=!0,r.setDrawRange(0,Math.max(0,A-1)*6),l.position.copy(c),l.material.opacity=.14+v*.55+Math.sin(p*2.2)*.03,l.scale.setScalar(.22+v*.28)}}}let ii=null;class XM{constructor(e){this.canvas=e,this.renderer=new Ex({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setClearColor(1052692,1),this.scene=new Mp,this.camera=new Ht(35,1,.1,60),this.camera.position.set(0,0,7),this.pointerTarget=new Ee,this.pointer=new Ee,Gf.touch||addEventListener("pointermove",t=>{this.pointerTarget.set((t.clientX/innerWidth-.5)*.5,(t.clientY/innerHeight-.5)*.3)}),this.page=document.querySelector("[data-gl-page]")?.dataset.glPage||"home",this.pose={pos:new B(1.18,.05,0),rot:new rn(-.08,-.15,-.5),scale:1},this.targetPose={pos:new B().copy(this.pose.pos),rot:new rn().copy(this.pose.rot),scale:1},this.lift=0,this.clock=new Um,this.onResize(),addEventListener("resize",()=>this.onResize()),document.addEventListener("visibilitychange",()=>{this.running=!document.hidden}),this.running=!0,this.tick=this.tick.bind(this),Ti.ticker.add(this.tick)}onResize(){const e=innerWidth,t=innerHeight;if(e<2||t<2)return;const i=Math.min(devicePixelRatio||1,2,2560/e);this.renderer.setPixelRatio(i),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.viewport={w:e,h:t},this.resizeHooks?.forEach(n=>n(e,t))}addResizeHook(e){(this.resizeHooks??(this.resizeHooks=[])).push(e),e(innerWidth,innerHeight)}setDim(e){Ti.to(this.canvas.style,{opacity:1-e,duration:.5,ease:"power2.out",overwrite:"auto"})}async build(e){this._onAsset=e;const[t,i]=await Promise.all([Ux(e),Cy(e)]);this.matcaps=t,this.bg=Fy(),this.scene.add(this.bg.mesh),this.hero=new Sn,this.nibMat=new Tl({matcap:t.dark,normalMap:t.normal,normalScale:new Ee(.35,.35)}),this.nib=new vt(i,this.nibMat),this.nib.scale.setScalar(1.15),this.hero.add(this.nib),this.props=Dy(t),this.hero.add(this.props.group),this.scene.add(this.hero),this.headline=BM(this,this._onAsset),this.trail=WM(this),this.variants=Lx(t.dark),this.tintIndex=0,this.raycaster=new Vm,addEventListener("click",n=>{if(n.target.closest("a, button"))return;const r=new Ee(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1);this.raycaster.setFromCamera(r,this.camera),this.raycaster.intersectObject(this.nib).length&&this.cycleTint()}),document.addEventListener("mouseover",n=>{n.target.closest("a, button")&&this.setInkwet(!0)}),document.addEventListener("mouseout",n=>{n.target.closest("a, button")&&this.setInkwet(!1)}),document.addEventListener("mouseover",n=>{n.target.closest(".case-row")&&this.setDim(.2)}),document.addEventListener("mouseout",n=>{n.target.closest(".case-row")&&this.setDim(0)})}currentMatcap(){return this.variants?.[this.tintIndex]?.matcap||this.matcaps.dark}setInkwet(e){!this.nibMat||this._inkwet===e||(this._inkwet=e,this.nibMat.matcap=e?this.matcaps.inkwet:this.currentMatcap(),this.nibMat.needsUpdate=!0)}cycleTint(){this.tintIndex=(this.tintIndex+1)%this.variants.length;const e=this.variants[this.tintIndex];this._inkwet||(this.nibMat.matcap=e.matcap,this.nibMat.needsUpdate=!0),this.trail?.setColor(e.trail),this.trail?.burst(e.trail),this.pop=1.09,Ti.to(this,{pop:1,duration:.9,ease:"elastic.out(1, 0.4)",overwrite:"auto"})}entrance(){this.hero&&(this.headline?.entrance(),Ti.from(this.hero.scale,{x:.96,y:.96,z:.96,duration:1.6,ease:"power3.out"}))}tick(e,t){if(!this.running||!this.hero)return;const i=this.clock.getElapsedTime(),n=Math.min(.1,(t||16.7)/1e3),r=1-Math.exp(-2.6*n),o=1-Math.exp(-3.4*n);this.pointer.x+=(this.pointerTarget.x-this.pointer.x)*r,this.pointer.y+=(this.pointerTarget.y-this.pointer.y)*r;const a=this.scrollProgress||0;this.scrollProgress=Vf(),By(this.page,this.scrollProgress,this.targetPose);const l=(this.scrollProgress-a)/Math.max(n,.001);this.lean=(this.lean||0)+(bn.clamp(l*.55,-.22,.22)-(this.lean||0))*(1-Math.exp(-3*n)),this.pose.pos.lerp(this.targetPose.pos,o),this.pose.rot.x+=(this.targetPose.rot.x-this.pose.rot.x)*o,this.pose.rot.y+=(this.targetPose.rot.y-this.pose.rot.y)*o,this.pose.rot.z+=(this.targetPose.rot.z-this.pose.rot.z)*o,this.pose.scale+=(this.targetPose.scale-this.pose.scale)*o;const c=this.pose,u=this.camera.aspect,h=bn.clamp(u/1.55,.42,1),f=bn.clamp(.55+.45*(u/1.55),.62,1),d=this.lift,g=c.rot.x*(1-d)+-1.35*d,v=c.rot.y*(1-d),m=c.rot.z*(1-d);this.nib.position.set(c.pos.x*h,c.pos.y+d*.9,c.pos.z),this.nib.rotation.set(g+this.pointer.y*.55+Math.sin(i*.5)*.02,v+this.pointer.x*.9,m+Math.sin(i*.35)*.015+(this.lean||0));const p=1.05*c.scale*f*(this.pop||1);this.nib.scale.setScalar(p),this.props.update(i),this.props.group.position.x=c.pos.x*.25+this.pointer.x*-.6,this.props.group.position.y=-this.pointer.y*-.45+Math.sin(i*.2)*.05,this.props.group.rotation.y=this.pointer.x*.12,this.bg?.update(i,this.scrollProgress),this.headline?.update(window.scrollY||0),this.trail?.update(i,n),this.frameHooks?.forEach(x=>x(i)),this.renderer.render(this.scene,this.camera)}addFrameHook(e){(this.frameHooks??(this.frameHooks=[])).push(e)}}async function YM({onAsset:s,onReady:e}){const t=document.getElementById("gl");ii=new XM(t),window.__stage=ii,Hf(i=>ii.setDim(i)),await ii.build(s),ii.renderer.render(ii.scene,ii.camera),document.documentElement.classList.add("gl-ready"),zf(()=>ii.entrance()),e()}export{YM as boot,ii as stage};
