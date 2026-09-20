import{al as Qr,ag as Ca,aS as Np,aj as q_,am as nh,ak as Y_,aT as Zr,O as Kn,aU as Mo,ao as ct,s as Dt,n as bn,f as Ol,ac as Dp,v as hn,av as qn,y as ih,aV as Op,e as Su,o as Oa,c as Up,i as Fp,w as Bp,H as $_,ad as Z_,k as Vp,C as K_,B as zp,aa as J_,N as es,aW as j_,W as Md,F as Q_,aX as bd,_ as e0,a as xs,aC as t0}from"./entry.96bbcec88aa7ef634a27b43d5b2c11d2d4b1e903.js";import{d as ts}from"./index5.96bbcec88aa7ef634a27b43d5b2c11d2d4b1e903.js";import Sr from"./index4.96bbcec88aa7ef634a27b43d5b2c11d2d4b1e903.js";import{u as n0}from"./useAnimationStore.96bbcec88aa7ef634a27b43d5b2c11d2d4b1e903.js";const bo="184",i0={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},r0={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kp=0,Mu=1,Gp=2,s0=3,o0=0,Vs=1,rh=2,Hr=3,di=0,nn=1,Ln=2,Zn=0,sr=1,bu=2,Eu=3,Tu=4,Hp=5,a0=6,wi=100,Wp=101,Xp=102,qp=103,Yp=104,$p=200,Zp=201,Kp=202,Jp=203,Ua=204,Fa=205,jp=206,Qp=207,em=208,tm=209,nm=210,im=211,rm=212,sm=213,om=214,Ba=0,Va=1,za=2,cr=3,ka=4,Ga=5,Ha=6,Wa=7,Eo=0,am=1,lm=2,Dn=0,sh=1,oh=2,ah=3,Ul=4,lh=5,ch=6,uh=7,wu="attached",cm="detached",Fl=300,Jn=301,Pi=302,zs=303,ks=304,hs=306,js=1e3,un=1001,Qs=1002,Pt=1003,hh=1004,l0=1004,Wr=1005,c0=1005,yt=1006,Gs=1007,u0=1007,Yn=1008,h0=1008,cn=1009,dh=1010,fh=1011,ns=1012,Bl=1013,En=1014,en=1015,jn=1016,Vl=1017,zl=1018,is=1020,ph=35902,mh=35899,gh=1021,_h=1022,tn=1023,Qn=1026,Ai=1027,kl=1028,To=1029,Li=1030,Gl=1031,d0=1032,Hl=1033,Hs=33776,Ws=33777,Xs=33778,qs=33779,Xa=35840,qa=35841,Ya=35842,$a=35843,Za=36196,Ka=37492,Ja=37496,ja=37488,Qa=37489,eo=37490,el=37491,tl=37808,nl=37809,il=37810,rl=37811,sl=37812,ol=37813,al=37814,ll=37815,cl=37816,ul=37817,hl=37818,dl=37819,fl=37820,pl=37821,ml=36492,gl=36494,_l=36495,vl=36283,xl=36284,to=36285,yl=36286,um=2200,hm=2201,dm=2202,no=2300,Sl=2301,Ra=2302,Au=2303,nr=2400,ir=2401,io=2402,Wl=2500,vh=2501,f0=0,p0=1,m0=2,fm=3200,g0=3201,_0=3202,v0=3203,fi=0,pm=1,ci="",ln="srgb",ro="srgb-linear",so="linear",ht="srgb",x0="",y0="rg",S0="ga",M0=0,ji=7680,b0=7681,E0=7682,T0=7683,w0=34055,A0=34056,C0=5386,R0=512,I0=513,P0=514,L0=515,N0=516,D0=517,O0=518,Cu=519,mm=512,gm=513,_m=514,Xl=515,vm=516,xm=517,ql=518,ym=519,oo=35044,U0=35048,F0=35040,B0=35045,V0=35049,z0=35041,k0=35046,G0=35050,H0=35042,W0="100",Ru="300 es",vn=2e3,ur=2001,X0={COMPUTE:"compute",RENDER:"render"},q0={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Y0={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},$0={TEXTURE_COMPARE:"depthTextureCompare"};function Z0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}const K0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Xr(i,e){return new K0[i](e)}function Sm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mm(){const i=ao("canvas");return i.style.display="block",i}const Ed={};let Ni=null;function J0(i){Ni=i}function j0(){return Ni}function lo(...i){const e="THREE."+i.shift();Ni?Ni("log",e,...i):console.log(e,...i)}function bm(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function fe(...i){i=bm(i);const e="THREE."+i.shift();if(Ni)Ni("warn",e,...i);else{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ie(...i){i=bm(i);const e="THREE."+i.shift();if(Ni)Ni("error",e,...i);else{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ml(...i){const e=i.join(" ");e in Ed||(Ed[e]=!0,fe(...i))}function Q0(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ev={[Ba]:Va,[za]:Ha,[ka]:Wa,[cr]:Ga,[Va]:Ba,[Ha]:za,[Wa]:ka,[Ga]:cr};class Fn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Td=1234567;const or=Math.PI/180,rs=180/Math.PI;function xn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function xh(i,e){return(i%e+e)%e}function tv(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function nv(i,e,t){return i!==e?(t-i)/(e-i):0}function Ys(i,e,t){return(1-t)*i+t*e}function iv(i,e,t,n){return Ys(i,e,1-Math.exp(-t*n))}function rv(i,e=1){return e-Math.abs(xh(i,e*2)-e)}function sv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ov(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function av(i,e){return i+Math.floor(Math.random()*(e-i+1))}function lv(i,e){return i+Math.random()*(e-i)}function cv(i){return i*(.5-Math.random())}function uv(i){i!==void 0&&(Td=i);let e=Td+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hv(i){return i*or}function dv(i){return i*rs}function fv(i){return(i&i-1)===0&&i!==0}function pv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gv(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),p=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*u,a*c);break;default:fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function je(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Em={DEG2RAD:or,RAD2DEG:rs,generateUUID:xn,clamp:Ve,euclideanModulo:xh,mapLinear:tv,inverseLerp:nv,lerp:Ys,damp:iv,pingpong:rv,smoothstep:sv,smootherstep:ov,randInt:av,randFloat:lv,randFloatSpread:cv,seededRandom:uv,degToRad:hv,radToDeg:dv,isPowerOfTwo:fv,ceilPowerOfTwo:pv,floorPowerOfTwo:mv,setQuaternionFromProperEuler:gv,normalize:je,denormalize:Qt};class K{static{K.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],d=s[o+0],f=s[o+1],p=s[o+2],_=s[o+3];if(h!==_||l!==d||c!==f||u!==p){let g=l*d+c*f+u*p+h*_;g<0&&(d=-d,f=-f,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){const v=Math.acos(g),x=Math.sin(v);m=Math.sin(m*v)/x,a=Math.sin(a*v)/x,l=l*m+d*a,c=c*m+f*a,u=u*m+p*a,h=h*m+_*a}else{l=l*m+d*a,c=c*m+f*a,u=u*m+p*a,h=h*m+_*a;const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),f=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{static{R.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ec=new R,wd=new Vt;class qe{static{qe.prototype.isMatrix3=!0}constructor(e,t,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],_=r[0],g=r[3],m=r[6],v=r[1],x=r[4],y=r[7],w=r[2],M=r[5],C=r[8];return s[0]=o*_+a*v+l*w,s[3]=o*g+a*x+l*M,s[6]=o*m+a*y+l*C,s[1]=c*_+u*v+h*w,s[4]=c*g+u*x+h*M,s[7]=c*m+u*y+h*C,s[2]=d*_+f*v+p*w,s[5]=d*g+f*x+p*M,s[8]=d*m+f*y+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,p=t*h+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tc.makeScale(e,t)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tc=new qe,Ad=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cd=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _v(){const i={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ht&&(r.r=hi(r.r),r.g=hi(r.g),r.b=hi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(r.r=Kr(r.r),r.g=Kr(r.g),r.b=Kr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ci?so:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ml("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ml("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ro]:{primaries:e,whitePoint:n,transfer:so,toXYZ:Ad,fromXYZ:Cd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Ad,fromXYZ:Cd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}const nt=_v();function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mr;class Tm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mr===void 0&&(Mr=ao("canvas")),Mr.width=e.width,Mr.height=e.height;const r=Mr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ao("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vv=0;class Ci{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wc(r[o].image)):s.push(wc(r[o]))}else s=wc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function wc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}let xv=0;const Ac=new R;class Et extends Fn{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=un,r=un,s=yt,o=Yn,a=tn,l=cn,c=Et.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=xn(),this.name="",this.source=new Ci(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ac).x}get height(){return this.source.getSize(Ac).y}get depth(){return this.source.getSize(Ac).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){fe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case Qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case Qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Fl;Et.DEFAULT_ANISOTROPY=1;class ft{static{ft.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(f+1)/2,w=(m+1)/2,M=(u+d)/4,C=(h+_)/4,S=(p+g)/4;return x>y&&x>w?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=M/n,s=C/n):y>w?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=M/r,s=S/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=C/s,r=S/s),this.set(n,r,s,t),this}let v=Math.sqrt((g-p)*(g-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yh extends Fn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Et(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ci(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends yh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yl extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yv extends yn{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Yl(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}}class $l extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sv extends yn{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new $l(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}}class Fe{static{Fe.prototype.isMatrix4=!0}constructor(e,t,n,r,s,o,a,l,c,u,h,d,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,d,f,p,_,g)}set(e,t,n,r,s,o,a,l,c,u,h,d,f,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/br.setFromMatrixColumn(e,0).length(),s=1/br.setFromMatrixColumn(e,1).length(),o=1/br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mv,e,bv)}lookAt(e,t,n){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),xi.crossVectors(n,pn),xi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),xi.crossVectors(n,pn)),xi.normalize(),Oo.crossVectors(pn,xi),r[0]=xi.x,r[4]=Oo.x,r[8]=pn.x,r[1]=xi.y,r[5]=Oo.y,r[9]=pn.y,r[2]=xi.z,r[6]=Oo.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],v=n[3],x=n[7],y=n[11],w=n[15],M=r[0],C=r[4],S=r[8],E=r[12],I=r[1],P=r[5],N=r[9],D=r[13],k=r[2],U=r[6],V=r[10],F=r[14],Q=r[3],j=r[7],oe=r[11],pe=r[15];return s[0]=o*M+a*I+l*k+c*Q,s[4]=o*C+a*P+l*U+c*j,s[8]=o*S+a*N+l*V+c*oe,s[12]=o*E+a*D+l*F+c*pe,s[1]=u*M+h*I+d*k+f*Q,s[5]=u*C+h*P+d*U+f*j,s[9]=u*S+h*N+d*V+f*oe,s[13]=u*E+h*D+d*F+f*pe,s[2]=p*M+_*I+g*k+m*Q,s[6]=p*C+_*P+g*U+m*j,s[10]=p*S+_*N+g*V+m*oe,s[14]=p*E+_*D+g*F+m*pe,s[3]=v*M+x*I+y*k+w*Q,s[7]=v*C+x*P+y*U+w*j,s[11]=v*S+x*N+y*V+w*oe,s[15]=v*E+x*D+y*F+w*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15],v=l*f-c*d,x=a*f-c*h,y=a*d-l*h,w=o*f-c*u,M=o*d-l*u,C=o*h-a*u;return t*(_*v-g*x+m*y)-n*(p*v-g*w+m*M)+r*(p*x-_*w+m*C)-s*(p*y-_*M+g*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],v=t*a-n*o,x=t*l-r*o,y=t*c-s*o,w=n*l-r*a,M=n*c-s*a,C=r*c-s*l,S=u*_-h*p,E=u*g-d*p,I=u*m-f*p,P=h*g-d*_,N=h*m-f*_,D=d*m-f*g,k=v*D-x*N+y*P+w*I-M*E+C*S;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/k;return e[0]=(a*D-l*N+c*P)*U,e[1]=(r*N-n*D-s*P)*U,e[2]=(_*C-g*M+m*w)*U,e[3]=(d*M-h*C-f*w)*U,e[4]=(l*I-o*D-c*E)*U,e[5]=(t*D-r*I+s*E)*U,e[6]=(g*y-p*C-m*x)*U,e[7]=(u*C-d*y+f*x)*U,e[8]=(o*N-a*I+c*S)*U,e[9]=(n*I-t*N-s*S)*U,e[10]=(p*M-_*y+m*v)*U,e[11]=(h*y-u*M-f*v)*U,e[12]=(a*E-o*P-l*S)*U,e[13]=(t*P-n*E+r*S)*U,e[14]=(_*x-p*w-g*v)*U,e[15]=(u*w-h*x+d*v)*U,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,p=s*h,_=o*u,g=o*h,m=a*h,v=l*c,x=l*u,y=l*h,w=n.x,M=n.y,C=n.z;return r[0]=(1-(_+m))*w,r[1]=(f+y)*w,r[2]=(p-x)*w,r[3]=0,r[4]=(f-y)*M,r[5]=(1-(d+m))*M,r[6]=(g+v)*M,r[7]=0,r[8]=(p+x)*C,r[9]=(g-v)*C,r[10]=(1-(d+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=br.set(r[0],r[1],r[2]).length();const a=br.set(r[4],r[5],r[6]).length(),l=br.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Cn.copy(this);const c=1/o,u=1/a,h=1/l;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,t.setFromRotationMatrix(Cn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=vn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===vn)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ur)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=vn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r);let p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===vn)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===ur)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const br=new R,Cn=new Fe,Mv=new R(0,0,0),bv=new R(1,1,1),xi=new R,Oo=new R,pn=new R,Rd=new Fe,Id=new Vt;class Un{constructor(e=0,t=0,n=0,r=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Id.setFromEuler(this),this.setFromQuaternion(Id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class wo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ev=0;const Pd=new R,Er=new Vt,ni=new Fe,Uo=new R,ys=new R,Tv=new R,wv=new Vt,Ld=new R(1,0,0),Nd=new R(0,1,0),Dd=new R(0,0,1),Od={type:"added"},Av={type:"removed"},Tr={type:"childadded",child:null},Cc={type:"childremoved",child:null};class rt extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DEFAULT_UP.clone();const e=new R,t=new Un,n=new Vt,r=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new qe}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(Ld,e)}rotateY(e){return this.rotateOnAxis(Nd,e)}rotateZ(e){return this.rotateOnAxis(Dd,e)}translateOnAxis(e,t){return Pd.copy(e).applyQuaternion(this.quaternion),this.position.add(Pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ld,e)}translateY(e){return this.translateOnAxis(Nd,e)}translateZ(e){return this.translateOnAxis(Dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Uo.copy(e):Uo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(ys,Uo,this.up):ni.lookAt(Uo,ys,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Er.setFromRotationMatrix(ni),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ie("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Od),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Av),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Od),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,Tv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,wv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}rt.DEFAULT_UP=new R(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qr extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cv={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function Rc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=nt.workingColorSpace){if(e=xh(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Rc(o,s,e+1/3),this.g=Rc(o,s,e),this.b=Rc(o,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=ln){function n(s){s!==void 0&&parseFloat(s)<1&&fe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:fe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const n=wm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return nt.workingToColorSpace(Wt.copy(this),e),Math.round(Ve(Wt.r*255,0,255))*65536+Math.round(Ve(Wt.g*255,0,255))*256+Math.round(Ve(Wt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Wt.copy(this),t);const n=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=ln){nt.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,r=Wt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Fo);const n=Ys(yi.h,Fo.h,t),r=Ys(yi.s,Fo.s,t),s=Ys(yi.l,Fo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new be;be.NAMES=wm;class Zl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new Zl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new Kl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jl extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Rn=new R,ii=new R,Ic=new R,ri=new R,wr=new R,Ar=new R,Ud=new R,Pc=new R,Lc=new R,Nc=new R,Dc=new ft,Oc=new ft,Uc=new ft;class Yt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rn.subVectors(e,t),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Rn.subVectors(r,t),ii.subVectors(n,t),Ic.subVectors(e,t);const o=Rn.dot(Rn),a=Rn.dot(ii),l=Rn.dot(Ic),c=ii.dot(ii),u=ii.dot(Ic),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Dc.setScalar(0),Oc.setScalar(0),Uc.setScalar(0),Dc.fromBufferAttribute(e,t),Oc.fromBufferAttribute(e,n),Uc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Dc,s.x),o.addScaledVector(Oc,s.y),o.addScaledVector(Uc,s.z),o}static isFrontFacing(e,t,n,r){return Rn.subVectors(n,t),ii.subVectors(e,t),Rn.cross(ii).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Rn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;wr.subVectors(r,n),Ar.subVectors(s,n),Pc.subVectors(e,n);const l=wr.dot(Pc),c=Ar.dot(Pc);if(l<=0&&c<=0)return t.copy(n);Lc.subVectors(e,r);const u=wr.dot(Lc),h=Ar.dot(Lc);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(wr,o);Nc.subVectors(e,s);const f=wr.dot(Nc),p=Ar.dot(Nc);if(p>=0&&f<=p)return t.copy(s);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Ar,a);const g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return Ud.subVectors(s,r),a=(h-u)/(h-u+(f-p)),t.copy(r).addScaledVector(Ud,a);const m=1/(g+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(wr,o).addScaledVector(Ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $t{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(s,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bo.copy(n.boundingBox)),Bo.applyMatrix4(e.matrixWorld),this.union(Bo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),Vo.subVectors(this.max,Ss),Cr.subVectors(e.a,Ss),Rr.subVectors(e.b,Ss),Ir.subVectors(e.c,Ss),Si.subVectors(Rr,Cr),Mi.subVectors(Ir,Rr),zi.subVectors(Cr,Ir);let t=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-zi.z,zi.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,zi.z,0,-zi.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-zi.y,zi.x,0];return!Fc(t,Cr,Rr,Ir,Vo)||(t=[1,0,0,0,1,0,0,0,1],!Fc(t,Cr,Rr,Ir,Vo))?!1:(zo.crossVectors(Si,Mi),t=[zo.x,zo.y,zo.z],Fc(t,Cr,Rr,Ir,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const si=[new R,new R,new R,new R,new R,new R,new R,new R],In=new R,Bo=new $t,Cr=new R,Rr=new R,Ir=new R,Si=new R,Mi=new R,zi=new R,Ss=new R,Vo=new R,zo=new R,ki=new R;function Fc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ki.fromArray(i,s);const a=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),u=n.dot(ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ui=Rv();function Rv(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function an(i){Math.abs(i)>65504&&fe("DataUtils.toHalfFloat(): Value out of range."),i=Ve(i,-65504,65504),ui.floatView[0]=i;const e=ui.uint32View[0],t=e>>23&511;return ui.baseTable[t]+((e&8388607)>>ui.shiftTable[t])}function Os(i){const e=i>>10;return ui.uint32View[0]=ui.mantissaTable[ui.offsetTable[e]+(i&1023)]+ui.exponentTable[e],ui.floatView[0]}class Iv{static toHalfFloat(e){return an(e)}static fromHalfFloat(e){return Os(e)}}const Lt=new R,ko=new K;let Pv=0;class dt extends Fn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oo,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),r=je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),r=je(r,this.array),s=je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Lv extends dt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Nv extends dt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Dv extends dt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Ov extends dt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Sh extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uv extends dt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Mh extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Fv extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Os(this.array[e*this.itemSize]);return this.normalized&&(t=Qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=an(t),this}getY(e){let t=Os(this.array[e*this.itemSize+1]);return this.normalized&&(t=Qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=an(t),this}getZ(e){let t=Os(this.array[e*this.itemSize+2]);return this.normalized&&(t=Qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=an(t),this}getW(e){let t=Os(this.array[e*this.itemSize+3]);return this.normalized&&(t=Qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=an(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=an(t),this.array[e+1]=an(n),this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),r=je(r,this.array)),this.array[e+0]=an(t),this.array[e+1]=an(n),this.array[e+2]=an(r),this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),r=je(r,this.array),s=je(s,this.array)),this.array[e+0]=an(t),this.array[e+1]=an(n),this.array[e+2]=an(r),this.array[e+3]=an(s),this}}class Ce extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Bv=new $t,Ms=new R,Bc=new R;class zt{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bv.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ms,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(Bc)),this.expandByPoint(Ms.copy(e.center).sub(Bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Vv=0;const Mn=new Fe,Vc=new rt,Pr=new R,mn=new $t,bs=new $t,Ft=new R;class Ze extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z0(e)?Mh:Sh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ce(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(mn.min,bs.min),mn.expandByPoint(Ft),Ft.addVectors(mn.max,bs.max),mn.expandByPoint(Ft)):(mn.expandByPoint(bs.min),mn.expandByPoint(bs.max))}mn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(Pr.fromBufferAttribute(e,c),Ft.add(Pr)),r=Math.max(r,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new R,l[S]=new R;const c=new R,u=new R,h=new R,d=new K,f=new K,p=new K,_=new R,g=new R;function m(S,E,I){c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,I),d.fromBufferAttribute(s,S),f.fromBufferAttribute(s,E),p.fromBufferAttribute(s,I),u.sub(c),h.sub(c),f.sub(d),p.sub(d);const P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(P),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(P),a[S].add(_),a[E].add(_),a[I].add(_),l[S].add(g),l[E].add(g),l[I].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let S=0,E=v.length;S<E;++S){const I=v[S],P=I.start,N=I.count;for(let D=P,k=P+N;D<k;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new R,y=new R,w=new R,M=new R;function C(S){w.fromBufferAttribute(r,S),M.copy(w);const E=a[S];x.copy(E),x.sub(w.multiplyScalar(w.dot(E))).normalize(),y.crossVectors(M,E);const P=y.dot(l[S])<0?-1:1;o.setXYZW(S,x.x,x.y,x.z,P)}for(let S=0,E=v.length;S<E;++S){const I=v[S],P=I.start,N=I.count;for(let D=P,k=P+N;D<k;D+=3)C(e.getX(D+0)),C(e.getX(D+1)),C(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new dt(d,u,h)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ze,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jl{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oo,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new R;class hr{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),r=je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),r=je(r,this.array),s=je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){lo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){lo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let zv=0;class kt extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=sr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Fa,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){fe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Fa&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bh extends kt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Lr;const Es=new R,Nr=new R,Dr=new R,Or=new K,Ts=new K,Am=new Fe,Go=new R,ws=new R,Ho=new R,Fd=new K,zc=new K,Bd=new K;class Cm extends rt{constructor(e=new bh){if(super(),this.isSprite=!0,this.type="Sprite",Lr===void 0){Lr=new Ze;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jl(t,5);Lr.setIndex([0,1,2,0,2,3]),Lr.setAttribute("position",new hr(n,3,0,!1)),Lr.setAttribute("uv",new hr(n,2,3,!1))}this.geometry=Lr,this.material=e,this.center=new K(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),Am.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Dr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Wo(Go.set(-.5,-.5,0),Dr,o,Nr,r,s),Wo(ws.set(.5,-.5,0),Dr,o,Nr,r,s),Wo(Ho.set(.5,.5,0),Dr,o,Nr,r,s),Fd.set(0,0),zc.set(1,0),Bd.set(1,1);let a=e.ray.intersectTriangle(Go,ws,Ho,!1,Es);if(a===null&&(Wo(ws.set(-.5,.5,0),Dr,o,Nr,r,s),zc.set(0,1),a=e.ray.intersectTriangle(Go,Ho,ws,!1,Es),a===null))return;const l=e.ray.origin.distanceTo(Es);l<e.near||l>e.far||t.push({distance:l,point:Es.clone(),uv:Yt.getInterpolation(Es,Go,ws,Ho,Fd,zc,Bd,new K),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Wo(i,e,t,n,r,s){Or.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ts.x=s*Or.x-r*Or.y,Ts.y=r*Or.x+s*Or.y):Ts.copy(Or),i.copy(e),i.x+=Ts.x,i.y+=Ts.y,i.applyMatrix4(Am)}const Xo=new R,Vd=new R;class Rm extends rt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,r=t.length;n<r;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const r=this.levels;let s;for(s=0;s<r.length&&!(t<r[s].distance);s++);return r.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const r=t.splice(n,1);return this.remove(r[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Xo.setFromMatrixPosition(this.matrixWorld);const r=e.ray.origin.distanceTo(Xo);this.getObjectForDistance(r).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Xo.setFromMatrixPosition(e.matrixWorld),Vd.setFromMatrixPosition(this.matrixWorld);const n=Xo.distanceTo(Vd)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s;r++){let o=t[r].distance;if(t[r].object.visible&&(o-=o*t[r].hysteresis),n>=o)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let r=0,s=n.length;r<s;r++){const o=n[r];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const oi=new R,kc=new R,qo=new R,bi=new R,Gc=new R,Yo=new R,Hc=new R;class Di{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){kc.copy(e).add(t).multiplyScalar(.5),qo.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(kc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qo),a=bi.dot(this.direction),l=-bi.dot(qo),c=bi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=s*u,h>=0)if(d>=-p)if(d<=p){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(kc).addScaledVector(qo,d),f}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const n=oi.dot(this.direction),r=oi.dot(oi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,n,r,s){Gc.subVectors(t,e),Yo.subVectors(n,e),Hc.crossVectors(Gc,Yo);let o=this.direction.dot(Hc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(Yo.crossVectors(bi,Yo));if(l<0)return null;const c=a*this.direction.dot(Gc.cross(bi));if(c<0||l+c>o)return null;const u=-a*bi.dot(Hc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mi extends kt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zd=new Fe,Gi=new Di,$o=new zt,kd=new R,Zo=new R,Ko=new R,Jo=new R,Wc=new R,jo=new R,Gd=new R,Qo=new R;class Mt extends rt{constructor(e=new Ze,t=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){jo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Wc.fromBufferAttribute(h,e),o?jo.addScaledVector(Wc,u):jo.addScaledVector(Wc.sub(t),u))}t.add(jo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),Gi.copy(e.ray).recast(e.near),!($o.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere($o,kd)===null||Gi.origin.distanceToSquared(kd)>(e.far-e.near)**2))&&(zd.copy(s).invert(),Gi.copy(e.ray).applyMatrix4(zd),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,w=x;y<w;y+=3){const M=a.getX(y),C=a.getX(y+1),S=a.getX(y+2);r=ea(this,m,e,n,c,u,h,M,C,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);r=ea(this,o,e,n,c,u,h,v,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,w=x;y<w;y+=3){const M=y,C=y+1,S=y+2;r=ea(this,m,e,n,c,u,h,M,C,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=g,x=g+1,y=g+2;r=ea(this,o,e,n,c,u,h,v,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function kv(i,e,t,n,r,s,o,a){let l;if(e.side===nn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===di,a),l===null)return null;Qo.copy(a),Qo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Qo);return c<t.near||c>t.far?null:{distance:c,point:Qo.clone(),object:i}}function ea(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Zo),i.getVertexPosition(l,Ko),i.getVertexPosition(c,Jo);const u=kv(i,e,t,n,Zo,Ko,Jo,Gd);if(u){const h=new R;Yt.getBarycoord(Gd,Zo,Ko,Jo,h),r&&(u.uv=Yt.getInterpolatedAttribute(r,a,l,c,h,new K)),s&&(u.uv1=Yt.getInterpolatedAttribute(s,a,l,c,h,new K)),o&&(u.normal=Yt.getInterpolatedAttribute(o,a,l,c,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new R,materialIndex:0};Yt.getNormal(Zo,Ko,Jo,d.normal),u.face=d,u.barycoord=h}return u}const As=new ft,Hd=new ft,Wd=new ft,Gv=new ft,Xd=new Fe,ta=new R,Xc=new zt,qd=new Fe,qc=new Di;class Im extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wu,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ta),this.boundingBox.expandByPoint(ta)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ta),this.boundingSphere.expandByPoint(ta)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xc.copy(this.boundingSphere),Xc.applyMatrix4(r),e.ray.intersectsSphere(Xc)!==!1&&(qd.copy(r).invert(),qc.copy(e.ray).applyMatrix4(qd),!(this.boundingBox!==null&&qc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cm?this.bindMatrixInverse.copy(this.bindMatrix).invert():fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Hd.fromBufferAttribute(r.attributes.skinIndex,e),Wd.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(As.copy(t),t.set(0,0,0,0)):(As.set(...t,1),t.set(0,0,0)),As.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const o=Wd.getComponent(s);if(o!==0){const a=Hd.getComponent(s);Xd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Gv.copy(As).applyMatrix4(Xd),o)}}return t.isVector4&&(t.w=As.w),t.applyMatrix4(this.bindMatrixInverse)}}class Eh extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class On extends Et{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Pt,u=Pt,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yd=new Fe,Hv=new Fe;class Ql{constructor(e=[],t=[]){this.uuid=xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Hv;Yd.multiplyMatrices(a,t[s]),Yd.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Ql(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new On(t,e,e,tn,en);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(fe("Skeleton: No bone found with UUID:",s),o=new Eh),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class ss extends dt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ur=new Fe,$d=new Fe,na=[],Zd=new $t,Wv=new Fe,Cs=new Mt,Rs=new zt;class Pm extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ss(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Wv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ur),Zd.copy(e.boundingBox).applyMatrix4(Ur),this.boundingBox.union(Zd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ur),Rs.copy(e.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(Rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),e.ray.intersectsSphere(Rs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ur),$d.multiplyMatrices(n,Ur),Cs.matrixWorld=$d,Cs.raycast(e,na);for(let o=0,a=na.length;o<a;o++){const l=na[o];l.instanceId=s,l.object=this,t.push(l)}na.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new On(new Float32Array(r*this.count),r,this.count,kl,en));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Yc=new R,Xv=new R,qv=new qe;class li{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Yc.subVectors(n,t).cross(Xv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Yc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qv.getNormalMatrix(e),r=this.coplanarPoint(Yc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new zt,Yv=new K(.5,.5),ia=new R;class ds{constructor(e=new li,t=new li,n=new li,r=new li,s=new li,o=new li){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],p=s[8],_=s[9],g=s[10],m=s[11],v=s[12],x=s[13],y=s[14],w=s[15];if(r[0].setComponents(c-o,f-u,m-p,w-v).normalize(),r[1].setComponents(c+o,f+u,m+p,w+v).normalize(),r[2].setComponents(c+a,f+h,m+_,w+x).normalize(),r[3].setComponents(c-a,f-h,m-_,w-x).normalize(),n)r[4].setComponents(l,d,g,y).normalize(),r[5].setComponents(c-l,f-d,m-g,w-y).normalize();else if(r[4].setComponents(c-l,f-d,m-g,w-y).normalize(),t===vn)r[5].setComponents(c+l,f+d,m+g,w+y).normalize();else if(t===ur)r[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);const t=Yv.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ia.x=r.normal.x>0?e.max.x:e.min.x,ia.y=r.normal.y>0?e.max.y:e.min.y,ia.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const kn=new Fe,Gn=new ds;class ec{constructor(){this.coordinateSystem=vn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const r=t.cameras[n];if(kn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Gn.setFromProjectionMatrix(kn,r.coordinateSystem,r.reversedDepth),Gn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const r=t.cameras[n];if(kn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Gn.setFromProjectionMatrix(kn,r.coordinateSystem,r.reversedDepth),Gn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const r=t.cameras[n];if(kn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Gn.setFromProjectionMatrix(kn,r.coordinateSystem,r.reversedDepth),Gn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const r=t.cameras[n];if(kn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Gn.setFromProjectionMatrix(kn,r.coordinateSystem,r.reversedDepth),Gn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const r=t.cameras[n];if(kn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Gn.setFromProjectionMatrix(kn,r.coordinateSystem,r.reversedDepth),Gn.containsPoint(e))return!0}return!1}clone(){return new ec}}function $c(i,e){return i-e}function $v(i,e){return i.z-e.z}function Zv(i,e){return e.z-i.z}class Kv{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){const s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const a=s[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=r}reset(){this.list.length=0,this.index=0}}const sn=new Fe,Jv=new be(1,1,1),Kd=new ds,jv=new ec,ra=new $t,Wi=new zt,Is=new R,Jd=new R,Qv=new R,Zc=new Kv,Xt=new Mt,sa=[];function ex(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const r=i.count;for(let s=0;s<r;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,i.getComponent(s,o))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function Xi(i,e){if(i.constructor!==e.constructor){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{const t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}class Lm extends Mt{constructor(e,t,n=t*2,r){super(new Ze,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new On(t,e,e,tn,en);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new On(t,e,e,To,En);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new On(t,e,e,tn,en);n.colorSpace=nt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const o=e.getAttribute(s),{array:a,itemSize:l,normalized:c}=o,u=new a.constructor(n*l),h=new dt(u,l,c);t.setAttribute(s,h)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new dt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const r=e.getAttribute(n),s=t.getAttribute(n);if(r.itemSize!==s.itemSize||r.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,sn),this.getBoundingBoxAt(s,ra).applyMatrix4(sn),e.union(ra)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,sn),this.getBoundingSphereAt(s,Wi).applyMatrix4(sn),e.union(Wi)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let r=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort($c),r=this._availableInstanceIds.shift(),this._instanceInfo[r]=n):(r=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;sn.identity().toArray(s.image.data,r*16),s.needsUpdate=!0;const o=this._colorsTexture;return o&&(Jv.toArray(o.image.data,r*4),o.needsUpdate=!0),this._visibilityChanged=!0,r}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const r={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;r.vertexStart=this._nextVertexStart,r.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(r.indexStart=this._nextIndexStart,r.reservedIndexCount=n===-1?o.count:n),r.indexStart!==-1&&r.indexStart+r.reservedIndexCount>this._maxIndexCount||r.vertexStart+r.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort($c),l=this._availableGeometryIds.shift(),s[l]=r):(l=this._geometryCount,this._geometryCount++,s.push(r)),this.setGeometryAt(l,e),this._nextIndexStart=r.indexStart+r.reservedIndexCount,this._nextVertexStart=r.vertexStart+r.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,r=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(r&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const u in n.attributes){const h=t.getAttribute(u),d=n.getAttribute(u);ex(h,d,l);const f=h.itemSize;for(let p=h.count,_=c;p<_;p++){const g=l+p;for(let m=0;m<f;m++)d.setComponent(g,m,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(r){const u=a.indexStart,h=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let d=0;d<o.count;d++)s.setX(u+d,l+o.getX(d));for(let d=o.count,f=h;d<f;d++)s.setX(u+d,l);s.needsUpdate=!0,s.addUpdateRange(u,a.reservedIndexCount)}return a.start=r?a.indexStart:a.vertexStart,a.count=r?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let r=0,s=n.length;r<s;r++)n[r].active&&n[r].geometryIndex===e&&this.deleteInstance(r);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,r=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),s=this.geometry;for(let o=0,a=n.length;o<a;o++){const l=r[o],c=n[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==t){const{indexStart:u,vertexStart:h,reservedIndexCount:d}=c,f=s.index,p=f.array,_=e-h;for(let g=u;g<u+d;g++)p[g]=p[g]+_;f.array.copyWithin(t,u,u+d),f.addUpdateRange(t,d),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:u,reservedVertexCount:h}=c,d=s.attributes;for(const f in d){const p=d[f],{array:_,itemSize:g}=p;_.copyWithin(e*g,u*g,(u+h)*g),p.addUpdateRange(e*g,h*g),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,r=this._geometryInfo[e];if(r.boundingBox===null){const s=new $t,o=n.index,a=n.attributes.position;for(let l=r.start,c=r.start+r.count;l<c;l++){let u=l;o&&(u=o.getX(u)),s.expandByPoint(Is.fromBufferAttribute(a,u))}r.boundingBox=s}return t.copy(r.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,r=this._geometryInfo[e];if(r.boundingSphere===null){const s=new zt;this.getBoundingBoxAt(e,ra),ra.getCenter(s.center);const o=n.index,a=n.attributes.position;let l=0;for(let c=r.start,u=r.start+r.count;c<u;c++){let h=c;o&&(h=o.getX(h)),Is.fromBufferAttribute(a,h),l=Math.max(l,s.center.distanceToSquared(Is))}s.radius=Math.sqrt(l),r.boundingSphere=s}return t.copy(r.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,r=this._matricesTexture.image.data;return t.toArray(r,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort($c);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const r=new Int32Array(e),s=new Int32Array(e);Xi(this._multiDrawCounts,r),Xi(this._multiDrawStarts,s),this._multiDrawCounts=r,this._multiDrawStarts=s,this._maxInstanceCount=e;const o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Xi(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Xi(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Xi(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ze,this._initializeGeometry(s));const o=this.geometry;s.index&&Xi(s.index.array,o.index.array);for(const a in s.attributes)Xi(s.attributes[a].array,o.attributes[a].array)}raycast(e,t){const n=this._instanceInfo,r=this._geometryInfo,s=this.matrixWorld,o=this.geometry;Xt.material=this.material,Xt.geometry.index=o.index,Xt.geometry.attributes=o.attributes,Xt.geometry.boundingBox===null&&(Xt.geometry.boundingBox=new $t),Xt.geometry.boundingSphere===null&&(Xt.geometry.boundingSphere=new zt);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,u=r[c];Xt.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,Xt.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,Xt.geometry.boundingBox),this.getBoundingSphereAt(c,Xt.geometry.boundingSphere),Xt.raycast(e,sa);for(let h=0,d=sa.length;h<d;h++){const f=sa[h];f.object=this,f.batchId=a,t.push(f)}sa.length=0}Xt.material=null,Xt.geometry.index=null,Xt.geometry.attributes={},Xt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,r,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=r.getIndex();let a=o===null?1:o.array.BYTES_PER_ELEMENT,l=1;s.wireframe&&(l=2,a=r.attributes.position.count>65535?4:2);const c=this._instanceInfo,u=this._multiDrawStarts,h=this._multiDrawCounts,d=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,_=p.image.data,g=n.isArrayCamera?jv:Kd;f&&!n.isArrayCamera&&(sn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Kd.setFromProjectionMatrix(sn,n.coordinateSystem,n.reversedDepth));let m=0;if(this.sortObjects){sn.copy(this.matrixWorld).invert(),Is.setFromMatrixPosition(n.matrixWorld).applyMatrix4(sn),Jd.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(sn);for(let y=0,w=c.length;y<w;y++)if(c[y].visible&&c[y].active){const M=c[y].geometryIndex;this.getMatrixAt(y,sn),this.getBoundingSphereAt(M,Wi).applyMatrix4(sn);let C=!1;if(f&&(C=!g.intersectsSphere(Wi,n)),!C){const S=d[M],E=Qv.subVectors(Wi.center,Is).dot(Jd);Zc.push(S.start,S.count,E,y)}}const v=Zc.list,x=this.customSort;x===null?v.sort(s.transparent?Zv:$v):x.call(this,v,n);for(let y=0,w=v.length;y<w;y++){const M=v[y];u[m]=M.start*a*l,h[m]=M.count*l,_[m]=M.index,m++}Zc.reset()}else for(let v=0,x=c.length;v<x;v++)if(c[v].visible&&c[v].active){const y=c[v].geometryIndex;let w=!1;if(f&&(this.getMatrixAt(v,sn),this.getBoundingSphereAt(y,Wi).applyMatrix4(sn),w=!g.intersectsSphere(Wi,n)),!w){const M=d[y];u[m]=M.start*a*l,h[m]=M.count*l,_[m]=v,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,r,s,o){this.onBeforeRender(e,null,r,s,o)}}class rn extends kt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bl=new R,El=new R,jd=new Fe,Ps=new Di,oa=new zt,Kc=new R,Qd=new R;class Oi extends rt{constructor(e=new Ze,t=new rn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)bl.fromBufferAttribute(t,r-1),El.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=bl.distanceTo(El);e.setAttribute("lineDistance",new Ce(n,1))}else fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),oa.radius+=s,e.ray.intersectsSphere(oa)===!1)return;jd.copy(r).invert(),Ps.copy(e.ray).applyMatrix4(jd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){const m=u.getX(_),v=u.getX(_+1),x=aa(this,e,Ps,l,m,v,_);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(p-1),g=u.getX(f),m=aa(this,e,Ps,l,_,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){const m=aa(this,e,Ps,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=aa(this,e,Ps,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function aa(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(bl.fromBufferAttribute(a,r),El.fromBufferAttribute(a,s),t.distanceSqToSegment(bl,El,Kc,Qd)>n)return;Kc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Kc);if(!(c<e.near||c>e.far))return{distance:c,point:Qd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const ef=new R,tf=new R;class ei extends Oi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)ef.fromBufferAttribute(t,r),tf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ef.distanceTo(tf);e.setAttribute("lineDistance",new Ce(n,1))}else fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nm extends Oi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Th extends kt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nf=new Fe,Iu=new Di,la=new zt,ca=new R;class Dm extends rt{constructor(e=new Ze,t=new Th){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),la.radius+=s,e.ray.intersectsSphere(la)===!1)return;nf.copy(r).invert(),Iu.copy(e.ray).applyMatrix4(nf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){const g=c.getX(p);ca.fromBufferAttribute(h,g),rf(ca,g,l,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,_=f;p<_;p++)ca.fromBufferAttribute(h,p),rf(ca,p,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rf(i,e,t,n,r,s,o){const a=Iu.distanceSqToPoint(i);if(a<t){const l=new R;Iu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Om extends Et{constructor(e,t,n,r,s=yt,o=yt,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class tx extends Om{constructor(e,t,n,r,s,o,a,l){super({},e,t,n,r,s,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class nx extends Et{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Pt,this.minFilter=Pt,this.generateMipmaps=!1,this.needsUpdate=!0}}class tc extends Et{constructor(e,t,n,r,s,o,a,l,c,u,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class ix extends tc{constructor(e,t,n,r,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=un,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rx extends tc{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Jn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Ao extends Et{constructor(e=[],t=Jn,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sx extends Et{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ox extends Et{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const u=e?e.parentNode:null;u!==null&&"requestPaint"in u&&(u.onpaint=()=>{this.needsUpdate=!0},u.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}}class dr extends Et{constructor(e,t,n=En,r,s,o,a=Pt,l=Pt,c,u=Qn,h=1){if(u!==Qn&&u!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ci(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Um extends dr{constructor(e,t=En,n=Jn,r,s,o=Pt,a=Pt,l,c=Qn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wh extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mr extends Ze{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,r,o,2),p("x","z","y",1,-1,e,n,-t,r,o,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(h,2));function p(_,g,m,v,x,y,w,M,C,S,E){const I=y/C,P=w/S,N=y/2,D=w/2,k=M/2,U=C+1,V=S+1;let F=0,Q=0;const j=new R;for(let oe=0;oe<V;oe++){const pe=oe*P-D;for(let xe=0;xe<U;xe++){const Ge=xe*I-N;j[_]=Ge*v,j[g]=pe*x,j[m]=k,c.push(j.x,j.y,j.z),j[_]=0,j[g]=0,j[m]=M>0?1:-1,u.push(j.x,j.y,j.z),h.push(xe/C),h.push(1-oe/S),F+=1}}for(let oe=0;oe<S;oe++)for(let pe=0;pe<C;pe++){const xe=d+pe+U*oe,Ge=d+pe+U*(oe+1),it=d+(pe+1)+U*(oe+1),ze=d+(pe+1)+U*oe;l.push(xe,Ge,ze),l.push(Ge,it,ze),Q+=6}a.addGroup(f,Q,E),f+=Q,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class nc extends Ze{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,p=n*2+s,_=r+1,g=new R,m=new R;for(let v=0;v<=p;v++){let x=0,y=0,w=0,M=0;if(v<=n){const E=v/n,I=E*Math.PI/2;y=-u-e*Math.cos(I),w=e*Math.sin(I),M=-e*Math.cos(I),x=E*h}else if(v<=n+s){const E=(v-n)/s;y=-u+E*t,w=e,M=0,x=h+E*d}else{const E=(v-n-s)/n,I=E*Math.PI/2;y=u+e*Math.sin(I),w=e*Math.cos(I),M=e*Math.sin(I),x=h+d+E*h}const C=Math.max(0,Math.min(1,x/f));let S=0;v===0?S=.5/r:v===p&&(S=-.5/r);for(let E=0;E<=r;E++){const I=E/r,P=I*Math.PI*2,N=Math.sin(P),D=Math.cos(P);m.x=-w*D,m.y=y,m.z=w*N,a.push(m.x,m.y,m.z),g.set(-w*D,M,w*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(I+S,C)}if(v>0){const E=(v-1)*_;for(let I=0;I<r;I++){const P=E+I,N=E+I+1,D=v*_+I,k=v*_+I+1;o.push(P,N,D),o.push(N,k,D)}}}this.setIndex(o),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ic extends Ze{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new R,u=new K;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(a,3)),this.setAttribute("uv",new Ce(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Co extends Ze{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let p=0;const _=[],g=n/2;let m=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ce(h,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(f,2));function v(){const y=new R,w=new R;let M=0;const C=(t-e)/n;for(let S=0;S<=s;S++){const E=[],I=S/s,P=I*(t-e)+e;for(let N=0;N<=r;N++){const D=N/r,k=D*l+a,U=Math.sin(k),V=Math.cos(k);w.x=P*U,w.y=-I*n+g,w.z=P*V,h.push(w.x,w.y,w.z),y.set(U,C,V).normalize(),d.push(y.x,y.y,y.z),f.push(D,1-I),E.push(p++)}_.push(E)}for(let S=0;S<r;S++)for(let E=0;E<s;E++){const I=_[E][S],P=_[E+1][S],N=_[E+1][S+1],D=_[E][S+1];(e>0||E!==0)&&(u.push(I,P,D),M+=3),(t>0||E!==s-1)&&(u.push(P,N,D),M+=3)}c.addGroup(m,M,0),m+=M}function x(y){const w=p,M=new K,C=new R;let S=0;const E=y===!0?e:t,I=y===!0?1:-1;for(let N=1;N<=r;N++)h.push(0,g*I,0),d.push(0,I,0),f.push(.5,.5),p++;const P=p;for(let N=0;N<=r;N++){const k=N/r*l+a,U=Math.cos(k),V=Math.sin(k);C.x=E*V,C.y=g*I,C.z=E*U,h.push(C.x,C.y,C.z),d.push(0,I,0),M.x=U*.5+.5,M.y=V*.5*I+.5,f.push(M.x,M.y),p++}for(let N=0;N<r;N++){const D=w+N,k=P+N;y===!0?u.push(k,k+1,D):u.push(k+1,k,D),S+=3}c.addGroup(m,S,y===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ro extends Co{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ro(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fi extends Ze{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new Ce(s,3)),this.setAttribute("normal",new Ce(s.slice(),3)),this.setAttribute("uv",new Ce(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new R,y=new R,w=new R;for(let M=0;M<t.length;M+=3)f(t[M+0],x),f(t[M+1],y),f(t[M+2],w),l(x,y,w,v)}function l(v,x,y,w){const M=w+1,C=[];for(let S=0;S<=M;S++){C[S]=[];const E=v.clone().lerp(y,S/M),I=x.clone().lerp(y,S/M),P=M-S;for(let N=0;N<=P;N++)N===0&&S===M?C[S][N]=E:C[S][N]=E.clone().lerp(I,N/P)}for(let S=0;S<M;S++)for(let E=0;E<2*(M-S)-1;E++){const I=Math.floor(E/2);E%2===0?(d(C[S][I+1]),d(C[S+1][I]),d(C[S][I])):(d(C[S][I+1]),d(C[S+1][I+1]),d(C[S+1][I]))}}function c(v){const x=new R;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(v),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function u(){const v=new R;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const y=g(v)/2/Math.PI+.5,w=m(v)/Math.PI+.5;o.push(y,1-w)}p(),h()}function h(){for(let v=0;v<o.length;v+=6){const x=o[v+0],y=o[v+2],w=o[v+4],M=Math.max(x,y,w),C=Math.min(x,y,w);M>.9&&C<.1&&(x<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function p(){const v=new R,x=new R,y=new R,w=new R,M=new K,C=new K,S=new K;for(let E=0,I=0;E<s.length;E+=9,I+=6){v.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),M.set(o[I+0],o[I+1]),C.set(o[I+2],o[I+3]),S.set(o[I+4],o[I+5]),w.copy(v).add(x).add(y).divideScalar(3);const P=g(w);_(M,I+0,v,P),_(C,I+2,x,P),_(S,I+4,y,P)}}function _(v,x,y,w){w<0&&v.x===1&&(o[x]=v.x-1),y.x===0&&y.z===0&&(o[x]=w/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.vertices,e.indices,e.radius,e.detail)}}class rc extends Fi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rc(e.radius,e.detail)}}const ua=new R,ha=new R,Jc=new R,da=new Yt;class Fm extends Ze{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(or*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:g,c:m}=da;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),da.getNormal(Jc),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const x=(v+1)%3,y=h[v],w=h[x],M=da[u[v]],C=da[u[x]],S=`${y}_${w}`,E=`${w}_${y}`;E in d&&d[E]?(Jc.dot(d[E].normal)<=s&&(f.push(M.x,M.y,M.z),f.push(C.x,C.y,C.z)),d[E]=null):S in d||(d[S]={index0:c[v],index1:c[x],normal:Jc.clone()})}}for(const p in d)if(d[p]){const{index0:_,index1:g}=d[p];ua.fromBufferAttribute(a,_),ha.fromBufferAttribute(a,g),f.push(ua.x,ua.y,ua.z),f.push(ha.x,ha.y,ha.z)}this.setAttribute("position",new Ce(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],d=n[r+1]-u,f=(o-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new K:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,r=[],s=[],o=[],a=new R,l=new Fe;for(let f=0;f<=e;f++){const p=f/e;r[f]=this.getTangentAt(p,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Ve(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Ve(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],f*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class sc extends Bn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new K){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Bm extends sc{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ah(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const sf=new R,of=new R,jc=new Ah,Qc=new Ah,eu=new Ah;class Vm extends Bn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new R){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(of.subVectors(r[0],r[1]).add(r[0]),c=of);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(sf.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=sf),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),jc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,_,g),Qc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,_,g),eu.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(jc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Qc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),eu.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(jc.calc(l),Qc.calc(l),eu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function af(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function ax(i,e){const t=1-i;return t*t*e}function lx(i,e){return 2*(1-i)*i*e}function cx(i,e){return i*i*e}function $s(i,e,t,n){return ax(i,e)+lx(i,t)+cx(i,n)}function ux(i,e){const t=1-i;return t*t*t*e}function hx(i,e){const t=1-i;return 3*t*t*i*e}function dx(i,e){return 3*(1-i)*i*i*e}function fx(i,e){return i*i*i*e}function Zs(i,e,t,n,r){return ux(i,e)+hx(i,t)+dx(i,n)+fx(i,r)}class Ch extends Bn{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,r.x,s.x,o.x,a.x),Zs(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zm extends Bn{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,r.x,s.x,o.x,a.x),Zs(e,r.y,s.y,o.y,a.y),Zs(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rh extends Bn{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new K){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class km extends Bn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ih extends Bn{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set($s(e,r.x,s.x,o.x),$s(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ph extends Bn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set($s(e,r.x,s.x,o.x),$s(e,r.y,s.y,o.y),$s(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lh extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new K){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(af(a,l.x,c.x,u.x,h.x),af(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new K().fromArray(r))}return this}}var Tl=Object.freeze({__proto__:null,ArcCurve:Bm,CatmullRomCurve3:Vm,CubicBezierCurve:Ch,CubicBezierCurve3:zm,EllipseCurve:sc,LineCurve:Rh,LineCurve3:km,QuadraticBezierCurve:Ih,QuadraticBezierCurve3:Ph,SplineCurve:Lh});class Gm extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Tl[r.type]().fromJSON(r))}return this}}class wl extends Gm{constructor(e){super(),this.type="Path",this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Rh(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Ih(this.currentPoint.clone(),new K(e,t),new K(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Ch(this.currentPoint.clone(),new K(e,t),new K(n,r),new K(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Lh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new sc(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ar extends wl{constructor(e){super(e),this.uuid=xn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new wl().fromJSON(r))}return this}}function px(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Hm(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=xx(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let u=a,h=l;for(let d=t;d<r;d+=t){const f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return co(s,o,t,a,l,c,0),o}function Hm(i,e,t,n,r){let s;if(r===Ix(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=lf(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=lf(o/n|0,i[o],i[o+1],s);return s&&os(s,s.next)&&(ho(s),s=s.next),s}function fr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(os(t,t.next)||bt(t.prev,t,t.next)===0)){if(ho(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function co(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Ex(i,n,r,s);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?gx(i,n,r,s):mx(i)){e.push(l.i,i.i,c.i),ho(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=_x(fr(i),e),co(i,e,t,n,r,s,2)):o===2&&vx(i,e,t,n,r,s):co(fr(i),e,t,n,r,s,1);break}}}function mx(i){const e=i.prev,t=i,n=i.next;if(bt(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(r,s,o),h=Math.min(a,l,c),d=Math.max(r,s,o),f=Math.max(a,l,c);let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Us(r,a,s,l,o,c,p.x,p.y)&&bt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function gx(i,e,t,n){const r=i.prev,s=i,o=i.next;if(bt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,f=Math.min(a,l,c),p=Math.min(u,h,d),_=Math.max(a,l,c),g=Math.max(u,h,d),m=Pu(f,p,e,t,n),v=Pu(_,g,e,t,n);let x=i.prevZ,y=i.nextZ;for(;x&&x.z>=m&&y&&y.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==r&&x!==o&&Us(a,u,l,h,c,d,x.x,x.y)&&bt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==r&&y!==o&&Us(a,u,l,h,c,d,y.x,y.y)&&bt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==r&&x!==o&&Us(a,u,l,h,c,d,x.x,x.y)&&bt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==r&&y!==o&&Us(a,u,l,h,c,d,y.x,y.y)&&bt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function _x(i,e){let t=i;do{const n=t.prev,r=t.next.next;!os(n,r)&&Xm(n,t,t.next,r)&&uo(n,r)&&uo(r,n)&&(e.push(n.i,t.i,r.i),ho(t),ho(t.next),t=i=r),t=t.next}while(t!==i);return fr(t)}function vx(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ax(o,a)){let l=qm(o,a);o=fr(o,o.next),l=fr(l,l.next),co(o,e,t,n,r,s,0),co(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function xx(i,e,t,n){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Hm(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(wx(c))}r.sort(yx);for(let s=0;s<r.length;s++)t=Sx(r[s],t);return t}function yx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Sx(i,e){const t=Mx(i,e);if(!t)return e;const n=qm(t,i);return fr(n,n.next),fr(t,t.next)}function Mx(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;if(os(i,t))return t;do{if(os(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Wm(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){const h=Math.abs(r-t.y)/(n-t.x);uo(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&bx(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function bx(i,e){return bt(i.prev,i,e.prev)<0&&bt(e.next,i,i.next)<0}function Ex(i,e,t,n){let r=i;do r.z===0&&(r.z=Pu(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Tx(r)}function Tx(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function Pu(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function wx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Wm(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Us(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&Wm(i,e,t,n,r,s,o,a)}function Ax(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Cx(i,e)&&(uo(i,e)&&uo(e,i)&&Rx(i,e)&&(bt(i.prev,i,e.prev)||bt(i,e.prev,e))||os(i,e)&&bt(i.prev,i,i.next)>0&&bt(e.prev,e,e.next)>0)}function bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function os(i,e){return i.x===e.x&&i.y===e.y}function Xm(i,e,t,n){const r=pa(bt(i,e,t)),s=pa(bt(i,e,n)),o=pa(bt(t,n,i)),a=pa(bt(t,n,e));return!!(r!==s&&o!==a||r===0&&fa(i,t,e)||s===0&&fa(i,n,e)||o===0&&fa(t,i,n)||a===0&&fa(t,e,n))}function fa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function pa(i){return i>0?1:i<0?-1:0}function Cx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Xm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function uo(i,e){return bt(i.prev,i,i.next)<0?bt(i,e,i.next)>=0&&bt(i,i.prev,e)>=0:bt(i,e,i.prev)<0||bt(i,i.next,e)<0}function Rx(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qm(i,e){const t=Lu(i.i,i.x,i.y),n=Lu(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function lf(i,e,t,n){const r=Lu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Lu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ix(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Px{static triangulate(e,t,n=2){return px(e,t,n)}}class Nn{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Nn.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];cf(e),uf(n,e);let o=e.length;t.forEach(cf);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,uf(n,t[l]);const a=Px.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function cf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function uf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class oc extends Ze{constructor(e=new ar([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ce(r,3)),this.setAttribute("uv",new Ce(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Lx;let x,y=!1,w,M,C,S;if(m){x=m.getSpacedPoints(u),y=!0,d=!1;const J=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(u,J),M=new R,C=new R,S=new R}d||(g=0,f=0,p=0,_=0);const E=a.extractPoints(c);let I=E.shape;const P=E.holes;if(!Nn.isClockWise(I)){I=I.reverse();for(let J=0,ie=P.length;J<ie;J++){const ee=P[J];Nn.isClockWise(ee)&&(P[J]=ee.reverse())}}function D(J){const ee=10000000000000001e-36;let ye=J[0];for(let me=1;me<=J.length;me++){const We=me%J.length,L=J[We],Ye=L.x-ye.x,Pe=L.y-ye.y,Xe=Ye*Ye+Pe*Pe,re=Math.max(Math.abs(L.x),Math.abs(L.y),Math.abs(ye.x),Math.abs(ye.y)),ut=ee*re*re;if(Xe<=ut){J.splice(We,1),me--;continue}ye=L}}D(I),P.forEach(D);const k=P.length,U=I;for(let J=0;J<k;J++){const ie=P[J];I=I.concat(ie)}function V(J,ie,ee){return ie||Ie("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(ie,ee)}const F=I.length;function Q(J,ie,ee){let ye,me,We;const L=J.x-ie.x,Ye=J.y-ie.y,Pe=ee.x-J.x,Xe=ee.y-J.y,re=L*L+Ye*Ye,ut=L*Xe-Ye*Pe;if(Math.abs(ut)>Number.EPSILON){const A=Math.sqrt(re),b=Math.sqrt(Pe*Pe+Xe*Xe),z=ie.x-Ye/A,Y=ie.y+L/A,te=ee.x-Xe/b,se=ee.y+Pe/b,ue=((te-z)*Xe-(se-Y)*Pe)/(L*Xe-Ye*Pe);ye=z+L*ue-J.x,me=Y+Ye*ue-J.y;const X=ye*ye+me*me;if(X<=2)return new K(ye,me);We=Math.sqrt(X/2)}else{let A=!1;L>Number.EPSILON?Pe>Number.EPSILON&&(A=!0):L<-Number.EPSILON?Pe<-Number.EPSILON&&(A=!0):Math.sign(Ye)===Math.sign(Xe)&&(A=!0),A?(ye=-Ye,me=L,We=Math.sqrt(re)):(ye=L,me=Ye,We=Math.sqrt(re/2))}return new K(ye/We,me/We)}const j=[];for(let J=0,ie=U.length,ee=ie-1,ye=J+1;J<ie;J++,ee++,ye++)ee===ie&&(ee=0),ye===ie&&(ye=0),j[J]=Q(U[J],U[ee],U[ye]);const oe=[];let pe,xe=j.concat();for(let J=0,ie=k;J<ie;J++){const ee=P[J];pe=[];for(let ye=0,me=ee.length,We=me-1,L=ye+1;ye<me;ye++,We++,L++)We===me&&(We=0),L===me&&(L=0),pe[ye]=Q(ee[ye],ee[We],ee[L]);oe.push(pe),xe=xe.concat(pe)}let Ge;if(g===0)Ge=Nn.triangulateShape(U,P);else{const J=[],ie=[];for(let ee=0;ee<g;ee++){const ye=ee/g,me=f*Math.cos(ye*Math.PI/2),We=p*Math.sin(ye*Math.PI/2)+_;for(let L=0,Ye=U.length;L<Ye;L++){const Pe=V(U[L],j[L],We);Ne(Pe.x,Pe.y,-me),ye===0&&J.push(Pe)}for(let L=0,Ye=k;L<Ye;L++){const Pe=P[L];pe=oe[L];const Xe=[];for(let re=0,ut=Pe.length;re<ut;re++){const A=V(Pe[re],pe[re],We);Ne(A.x,A.y,-me),ye===0&&Xe.push(A)}ye===0&&ie.push(Xe)}}Ge=Nn.triangulateShape(J,ie)}const it=Ge.length,ze=p+_;for(let J=0;J<F;J++){const ie=d?V(I[J],xe[J],ze):I[J];y?(C.copy(w.normals[0]).multiplyScalar(ie.x),M.copy(w.binormals[0]).multiplyScalar(ie.y),S.copy(x[0]).add(C).add(M),Ne(S.x,S.y,S.z)):Ne(ie.x,ie.y,0)}for(let J=1;J<=u;J++)for(let ie=0;ie<F;ie++){const ee=d?V(I[ie],xe[ie],ze):I[ie];y?(C.copy(w.normals[J]).multiplyScalar(ee.x),M.copy(w.binormals[J]).multiplyScalar(ee.y),S.copy(x[J]).add(C).add(M),Ne(S.x,S.y,S.z)):Ne(ee.x,ee.y,h/u*J)}for(let J=g-1;J>=0;J--){const ie=J/g,ee=f*Math.cos(ie*Math.PI/2),ye=p*Math.sin(ie*Math.PI/2)+_;for(let me=0,We=U.length;me<We;me++){const L=V(U[me],j[me],ye);Ne(L.x,L.y,h+ee)}for(let me=0,We=P.length;me<We;me++){const L=P[me];pe=oe[me];for(let Ye=0,Pe=L.length;Ye<Pe;Ye++){const Xe=V(L[Ye],pe[Ye],ye);y?Ne(Xe.x,Xe.y+x[u-1].y,x[u-1].x+ee):Ne(Xe.x,Xe.y,h+ee)}}}Z(),_e();function Z(){const J=r.length/3;if(d){let ie=0,ee=F*ie;for(let ye=0;ye<it;ye++){const me=Ge[ye];ke(me[2]+ee,me[1]+ee,me[0]+ee)}ie=u+g*2,ee=F*ie;for(let ye=0;ye<it;ye++){const me=Ge[ye];ke(me[0]+ee,me[1]+ee,me[2]+ee)}}else{for(let ie=0;ie<it;ie++){const ee=Ge[ie];ke(ee[2],ee[1],ee[0])}for(let ie=0;ie<it;ie++){const ee=Ge[ie];ke(ee[0]+F*u,ee[1]+F*u,ee[2]+F*u)}}n.addGroup(J,r.length/3-J,0)}function _e(){const J=r.length/3;let ie=0;ae(U,ie),ie+=U.length;for(let ee=0,ye=P.length;ee<ye;ee++){const me=P[ee];ae(me,ie),ie+=me.length}n.addGroup(J,r.length/3-J,1)}function ae(J,ie){let ee=J.length;for(;--ee>=0;){const ye=ee;let me=ee-1;me<0&&(me=J.length-1);for(let We=0,L=u+g*2;We<L;We++){const Ye=F*We,Pe=F*(We+1),Xe=ie+ye+Ye,re=ie+me+Ye,ut=ie+me+Pe,A=ie+ye+Pe;Be(Xe,re,ut,A)}}}function Ne(J,ie,ee){l.push(J),l.push(ie),l.push(ee)}function ke(J,ie,ee){st(J),st(ie),st(ee);const ye=r.length/3,me=v.generateTopUV(n,r,ye-3,ye-2,ye-1);He(me[0]),He(me[1]),He(me[2])}function Be(J,ie,ee,ye){st(J),st(ie),st(ye),st(ie),st(ee),st(ye);const me=r.length/3,We=v.generateSideWallUV(n,r,me-6,me-3,me-2,me-1);He(We[0]),He(We[1]),He(We[3]),He(We[1]),He(We[2]),He(We[3])}function st(J){r.push(l[J*3+0]),r.push(l[J*3+1]),r.push(l[J*3+2])}function He(J){s.push(J.x),s.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Nx(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Tl[r.type]().fromJSON(r)),new oc(n,e.options)}}const Lx={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new K(s,o),new K(a,l),new K(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],f=e[r*3+1],p=e[r*3+2],_=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new K(o,1-l),new K(c,1-h),new K(d,1-p),new K(_,1-m)]:[new K(a,1-l),new K(u,1-h),new K(f,1-p),new K(g,1-m)]}};function Nx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ac extends Fi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ac(e.radius,e.detail)}}class lc extends Ze{constructor(e=[new K(0,-.5),new K(.5,0),new K(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Ve(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new R,d=new K,f=new R,p=new R,_=new R;let g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let v=0;v<=t;v++){const x=n+v*u*r,y=Math.sin(x),w=Math.cos(x);for(let M=0;M<=e.length-1;M++){h.x=e[M].x*y,h.y=e[M].y,h.z=e[M].x*w,o.push(h.x,h.y,h.z),d.x=v/t,d.y=M/(e.length-1),a.push(d.x,d.y);const C=l[3*M+0]*y,S=l[3*M+1],E=l[3*M+0]*w;c.push(C,S,E)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){const y=x+v*e.length,w=y,M=y+e.length,C=y+e.length+1,S=y+1;s.push(w,M,S),s.push(C,S,M)}this.setIndex(s),this.setAttribute("position",new Ce(o,3)),this.setAttribute("uv",new Ce(a,2)),this.setAttribute("normal",new Ce(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.points,e.segments,e.phiStart,e.phiLength)}}class Io extends Fi{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Io(e.radius,e.detail)}}class fs extends Ze{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const v=m*d-o;for(let x=0;x<c;x++){const y=x*h-s;p.push(y,-v,0),_.push(0,0,1),g.push(x/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const x=v+c*m,y=v+c*(m+1),w=v+1+c*(m+1),M=v+1+c*m;f.push(x,y,M),f.push(y,w,M)}this.setIndex(f),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.widthSegments,e.heightSegments)}}class cc extends Ze{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/r,f=new R,p=new K;for(let _=0;_<=r;_++){for(let g=0;g<=n;g++){const m=s+g/n*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let _=0;_<r;_++){const g=_*(n+1);for(let m=0;m<n;m++){const v=m+g,x=v,y=v+n+1,w=v+n+2,M=v+1;a.push(x,y,M),a.push(y,w,M)}}this.setIndex(a),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class uc extends Ze{constructor(e=new ar([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(s,3)),this.setAttribute("uv",new Ce(o,2));function c(u){const h=r.length/3,d=u.extractPoints(t);let f=d.shape;const p=d.holes;Nn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const v=p[g];Nn.isClockWise(v)===!0&&(p[g]=v.reverse())}const _=Nn.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const v=p[g];f=f.concat(v)}for(let g=0,m=f.length;g<m;g++){const v=f[g];r.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let g=0,m=_.length;g<m;g++){const v=_[g],x=v[0]+h,y=v[1]+h,w=v[2]+h;n.push(x,y,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Dx(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}return new uc(n,e.curveSegments)}}function Dx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class ps extends Ze{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new R,d=new R,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const v=[],x=m/n;let y=0;m===0&&o===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const M=w/t;h.x=-e*Math.cos(r+M*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+M*s)*Math.sin(o+x*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(M+y,1-x),v.push(c++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const x=u[m][v+1],y=u[m][v],w=u[m+1][v],M=u[m+1][v+1];(m!==0||o>0)&&f.push(x,y,M),(m!==n-1||l<Math.PI)&&f.push(y,w,M)}this.setIndex(f),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hc extends Fi{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hc(e.radius,e.detail)}}class dc extends Ze{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],u=[],h=[],d=new R,f=new R,p=new R;for(let _=0;_<=n;_++){const g=o+_/n*a;for(let m=0;m<=r;m++){const v=m/r*s;f.x=(e+t*Math.cos(g))*Math.cos(v),f.y=(e+t*Math.cos(g))*Math.sin(v),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),p.subVectors(f,d).normalize(),u.push(p.x,p.y,p.z),h.push(m/r),h.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=r;g++){const m=(r+1)*_+g-1,v=(r+1)*(_-1)+g-1,x=(r+1)*(_-1)+g,y=(r+1)*_+g;l.push(m,v,y),l.push(v,x,y)}this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fc extends Ze{constructor(e=1,t=.4,n=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:o},n=Math.floor(n),r=Math.floor(r);const a=[],l=[],c=[],u=[],h=new R,d=new R,f=new R,p=new R,_=new R,g=new R,m=new R;for(let x=0;x<=n;++x){const y=x/n*s*Math.PI*2;v(y,s,o,e,f),v(y+.01,s,o,e,p),g.subVectors(p,f),m.addVectors(p,f),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let w=0;w<=r;++w){const M=w/r*Math.PI*2,C=-t*Math.cos(M),S=t*Math.sin(M);h.x=f.x+(C*m.x+S*_.x),h.y=f.y+(C*m.y+S*_.y),h.z=f.z+(C*m.z+S*_.z),l.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(x/n),u.push(w/r)}}for(let x=1;x<=n;x++)for(let y=1;y<=r;y++){const w=(r+1)*(x-1)+(y-1),M=(r+1)*x+(y-1),C=(r+1)*x+y,S=(r+1)*(x-1)+y;a.push(w,M,S),a.push(M,C,S)}this.setIndex(a),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(u,2));function v(x,y,w,M,C){const S=Math.cos(x),E=Math.sin(x),I=w/y*x,P=Math.cos(I);C.x=M*(2+P)*.5*S,C.y=M*(2+P)*E*.5,C.z=M*Math.sin(I)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class pc extends Ze{constructor(e=new Ph(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new K;let u=new R;const h=[],d=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ce(h,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(f,2));function _(){for(let x=0;x<t;x++)g(x);g(s===!1?t:0),v(),m()}function g(x){u=e.getPointAt(x/t,u);const y=o.normals[x],w=o.binormals[x];for(let M=0;M<=r;M++){const C=M/r*Math.PI*2,S=Math.sin(C),E=-Math.cos(C);l.x=E*y.x+S*w.x,l.y=E*y.y+S*w.y,l.z=E*y.z+S*w.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=t;x++)for(let y=1;y<=r;y++){const w=(r+1)*(x-1)+(y-1),M=(r+1)*x+(y-1),C=(r+1)*x+y,S=(r+1)*(x-1)+y;p.push(w,M,S),p.push(M,C,S)}}function v(){for(let x=0;x<=t;x++)for(let y=0;y<=r;y++)c.x=x/t,c.y=y/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new pc(new Tl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ym extends Ze{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new R,s=new R;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,f=h.count;for(let p=d,_=d+f;p<_;p+=3)for(let g=0;g<3;g++){const m=a.getX(p+g),v=a.getX(p+(g+1)%3);r.fromBufferAttribute(o,m),s.fromBufferAttribute(o,v),hf(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),hf(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ce(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function hf(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}var df=Object.freeze({__proto__:null,BoxGeometry:mr,CapsuleGeometry:nc,CircleGeometry:ic,ConeGeometry:Ro,CylinderGeometry:Co,DodecahedronGeometry:rc,EdgesGeometry:Fm,ExtrudeGeometry:oc,IcosahedronGeometry:ac,LatheGeometry:lc,OctahedronGeometry:Io,PlaneGeometry:fs,PolyhedronGeometry:Fi,RingGeometry:cc,ShapeGeometry:uc,SphereGeometry:ps,TetrahedronGeometry:hc,TorusGeometry:dc,TorusKnotGeometry:fc,TubeGeometry:pc,WireframeGeometry:Ym});class $m extends kt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function as(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(ff(r))r.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(ff(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=as(i[t]);for(const r in n)e[r]=n[r]}return e}function ff(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ox(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Km={clone:as,merge:Kt};var Ux=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends kt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ux,this.fragmentShader=Fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=Ox(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nh extends Tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dh extends kt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jm extends Dh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class jm extends kt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Eo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qm extends kt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class eg extends kt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class tg extends kt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Eo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oh extends kt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uh extends kt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ng extends kt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new be(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ig extends rn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function rr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function rg(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Nu(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Fh(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}function Bx(i,e,t,n,r=30){const s=i.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*r;if(!(p<t||p>=n)){h.push(c.times[f]);for(let _=0;_<u;++_)d.push(c.values[f*u+_])}}h.length!==0&&(c.times=rr(h,c.times.constructor),c.values=rr(d,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s}function Vx(i,e=0,t=i,n=30){n<=0&&(n=30);const r=t.tracks.length,s=e/n;for(let o=0;o<r;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let _;if(s<=a.times[0]){const m=u,v=h-u;_=a.values.slice(m,v)}else if(s>=a.times[p]){const m=p*h+u,v=m+h-u;_=a.values.slice(m,v)}else{const m=a.createInterpolant(),v=u,x=h-u;m.evaluate(s),_=m.resultBuffer.slice(v,x)}l==="quaternion"&&new Vt().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let m=0;m<g;++m){const v=m*f+d;if(l==="quaternion")Vt.multiplyQuaternionsFlat(c.values,v,_,0,c.values,v);else{const x=f-d*2;for(let y=0;y<x;++y)c.values[v+y]-=_[y]}}}return i.blendMode=vh,i}class zx{static convertArray(e,t){return rr(e,t)}static isTypedArray(e){return Sm(e)}static getKeyframeOrder(e){return rg(e)}static sortedArray(e,t,n){return Nu(e,t,n)}static flattenJSON(e,t,n,r){Fh(e,t,n,r)}static subclip(e,t,n,r,s=30){return Bx(e,t,n,r,s)}static makeClipAdditive(e,t=0,n=e,r=30){return Vx(e,t,n,r)}}class ms{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sg extends ms{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nr,endingEnd:nr}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ir:s=e,a=2*t-n;break;case io:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ir:o=e,l=2*n-t;break;case io:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,x=(-1-f)*g+(1.5+f)*_+.5*p,y=f*g-f*_;for(let w=0;w!==a;++w)s[w]=m*o[u+w]+v*o[c+w]+x*o[l+w]+y*o[h+w];return s}}class Bh extends ms{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class og extends ms{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ag extends ms{interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,h=u.inTangents,d=u.outTangents;if(!h||!d){const _=(n-t)/(r-t),g=1-_;for(let m=0;m!==a;++m)s[m]=o[c+m]*g+o[l+m]*_;return s}const f=a*2,p=e-1;for(let _=0;_!==a;++_){const g=o[c+_],m=o[l+_],v=p*f+_*2,x=d[v],y=d[v+1],w=e*f+_*2,M=h[w],C=h[w+1];let S=(n-t)/(r-t),E,I,P,N,D;for(let k=0;k<8;k++){E=S*S,I=E*S,P=1-S,N=P*P,D=N*P;const V=D*t+3*N*S*x+3*P*E*M+I*r-n;if(Math.abs(V)<1e-10)break;const F=3*N*(x-t)+6*P*S*(M-x)+3*E*(r-M);if(Math.abs(F)<1e-10)break;S=S-V/F,S=Math.max(0,Math.min(1,S))}s[_]=D*g+3*N*S*y+3*P*E*C+I*m}return s}}class wn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rr(t,this.TimeBufferType),this.values=rr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rr(e.times,Array),values:rr(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new og(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new ag(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case no:t=this.InterpolantFactoryMethodDiscrete;break;case Sl:t=this.InterpolantFactoryMethodLinear;break;case Ra:t=this.InterpolantFactoryMethodSmooth;break;case Au:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return no;case this.InterpolantFactoryMethodLinear:return Sl;case this.InterpolantFactoryMethodSmooth:return Ra;case this.InterpolantFactoryMethodBezier:return Au}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ie("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ie("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Sm(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){Ie("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ra,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){const _=t[h+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Sl;class gr extends wn{constructor(e,t,n){super(e,t,n)}}gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=no;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Vh extends wn{constructor(e,t,n,r){super(e,t,n,r)}}Vh.prototype.ValueTypeName="color";class fo extends wn{constructor(e,t,n,r){super(e,t,n,r)}}fo.prototype.ValueTypeName="number";class lg extends ms{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Vt.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Po extends wn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new lg(this.times,this.values,this.getValueSize(),e)}}Po.prototype.ValueTypeName="quaternion";Po.prototype.InterpolantFactoryMethodSmooth=void 0;class _r extends wn{constructor(e,t,n){super(e,t,n)}}_r.prototype.ValueTypeName="string";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=no;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;class po extends wn{constructor(e,t,n,r){super(e,t,n,r)}}po.prototype.ValueTypeName="vector";class mo{constructor(e="",t=-1,n=[],r=Wl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=xn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Gx(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(wn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=rg(l);l=Nu(l,1,u),c=Nu(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new fo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(fe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ie("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,p,_){if(f.length!==0){const g=[],m=[];Fh(f,g,m,p),g.length!==0&&_.push(new h(d,g,m))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let v=0;v!==d[p].morphTargets.length;++v){const x=d[p];g.push(x.time),m.push(x.morphTarget===_?1:0)}r.push(new fo(".morphTargetInfluence["+_+"]",g,m))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(po,f+".position",d,"pos",r),n(Po,f+".quaternion",d,"rot",r),n(po,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function kx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fo;case"vector":case"vector2":case"vector3":case"vector4":return po;case"color":return Vh;case"quaternion":return Po;case"bool":case"boolean":return gr;case"string":return _r}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Gx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=kx(i.type);if(i.times===void 0){const t=[],n=[];Fh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const $n={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(pf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!pf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function pf(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class zh{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cg=new zh;class dn{constructor(e){this.manager=e!==void 0?e:cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}dn.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class Hx extends Error{constructor(e,t){super(e),this.response=t}}class pi extends dn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=$n.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:r});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ai[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){v();function v(){h.read().then(({done:x,value:y})=>{if(x)m.close();else{_+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let M=0,C=u.length;M<C;M++){const S=u[M];S.onProgress&&S.onProgress(w)}m.enqueue(y),v()}},x=>{m.error(x)})}}});return new Response(g)}else throw new Hx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{$n.add(`file:${e}`,c);const u=ai[e];delete ai[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ai[e];if(u===void 0)throw this.manager.itemError(e),c;delete ai[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Wx extends dn{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new pi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){r?r(l):Ie(l),s.manager.itemError(e)}},n,r)}parse(e){const t=[];for(let n=0;n<e.length;n++){const r=mo.parse(e[n]);t.push(r)}return t}}class Xx extends dn{constructor(e){super(e)}load(e,t,n,r){const s=this,o=[],a=new tc,l=new pi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function u(h){l.load(e[h],function(d){const f=s.parse(d,!0);o[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=yt),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,r)}if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)u(h);else l.load(e,function(h){const d=s.parse(h,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)o[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+_]),o[p].format=d.format,o[p].width=d.width,o[p].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=yt),a.format=d.format,a.needsUpdate=!0,t&&t(a)},n,r);return a}}const Fr=new WeakMap;class go extends dn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=$n.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Fr.get(o);h===void 0&&(h=[],Fr.set(o,h)),h.push({onLoad:t,onError:r})}return o}const a=ao("img");function l(){u(),t&&t(this);const h=Fr.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Fr.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),$n.remove(`image:${e}`);const d=Fr.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(h)}Fr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),$n.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class qx extends dn{constructor(e){super(e)}load(e,t,n,r){const s=new Ao;s.colorSpace=ln;const o=new go(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class Yx extends dn{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new On,a=new pi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){r!==void 0?r(u):Ie(u);return}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:un,o.wrapT=c.wrapT!==void 0?c.wrapT:un,o.magFilter=c.magFilter!==void 0?c.magFilter:yt,o.minFilter=c.minFilter!==void 0?c.minFilter:yt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Yn),c.mipmapCount===1&&(o.minFilter=yt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class $x extends dn{constructor(e){super(e)}load(e,t,n,r){const s=new Et,o=new go(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Bi extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ug extends Bi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const tu=new Fe,mf=new R,gf=new R;class kh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;mf.setFromMatrixPosition(e.matrixWorld),t.position.copy(mf),gf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gf),t.updateMatrixWorld(),tu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ur||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ma=new R,ga=new Vt,Hn=new R;class mc extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ma,ga,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,Hn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ma,ga,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new R,_f=new K,vf=new K;class Bt extends mc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,_f,vf),t.subVectors(vf,_f)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(or*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Zx extends kh{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=rs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hg extends Bi{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Zx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Kx extends kh{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0}}class dg extends Bi{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Kx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Lo extends mc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jx extends kh{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fg extends Bi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new Jx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class pg extends Bi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mg extends Bi{constructor(e,t,n=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Gh{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}}class gg extends Bi{constructor(e=new Gh,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class gc extends dn{constructor(e){super(e),this.textures={}}load(e,t,n,r){const s=this,o=new pi(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){r?r(l):Ie(l),s.manager.itemError(e)}},n,r)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&fe("MaterialLoader: Undefined texture",s),t[s]}const r=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=e.sheen),e.sheenColor!==void 0&&(r.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(r.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.specularIntensity!==void 0&&(r.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(r.dispersion=e.dispersion),e.iridescence!==void 0&&(r.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(r.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(r.transmission=e.transmission),e.thickness!==void 0&&(r.thickness=e.thickness),e.attenuationDistance!==void 0&&(r.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(r.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.shadowSide!==void 0&&(r.shadowSide=e.shadowSide),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(r.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(r.depthFunc=e.depthFunc),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(r.blendSrc=e.blendSrc),e.blendDst!==void 0&&(r.blendDst=e.blendDst),e.blendEquation!==void 0&&(r.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(r.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(r.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(r.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&r.blendColor!==void 0&&r.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(r.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==void 0&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(r.dithering=e.dithering),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(r.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(r.allowOverride=e.allowOverride),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(r.uniforms[s]={},o.type){case"t":r.uniforms[s].value=n(o.value);break;case"c":r.uniforms[s].value=new be().setHex(o.value);break;case"v2":r.uniforms[s].value=new K().fromArray(o.value);break;case"v3":r.uniforms[s].value=new R().fromArray(o.value);break;case"v4":r.uniforms[s].value=new ft().fromArray(o.value);break;case"m3":r.uniforms[s].value=new qe().fromArray(o.value);break;case"m4":r.uniforms[s].value=new Fe().fromArray(o.value);break;default:r.uniforms[s].value=o.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(r.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)r.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(r.lights=e.lights),e.clipping!==void 0&&(r.clipping=e.clipping),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=n(e.map)),e.matcap!==void 0&&(r.matcap=n(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new K().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(r.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(r.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(r.envMap=n(e.envMap)),e.envMapRotation!==void 0&&r.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(r.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(r.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(r.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(r.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(r.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(r.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=n(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return gc.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:$m,SpriteMaterial:bh,RawShaderMaterial:Nh,ShaderMaterial:Tn,PointsMaterial:Th,MeshPhysicalMaterial:Jm,MeshStandardMaterial:Dh,MeshPhongMaterial:jm,MeshToonMaterial:Qm,MeshNormalMaterial:eg,MeshLambertMaterial:tg,MeshDepthMaterial:Oh,MeshDistanceMaterial:Uh,MeshBasicMaterial:mi,MeshMatcapMaterial:ng,LineDashedMaterial:ig,LineBasicMaterial:rn,Material:kt};return new t[e]}}class Du{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class _g extends Ze{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class vg extends dn{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new pi(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){r?r(l):Ie(l),s.manager.itemError(e)}},n,r)}parse(e){const t={},n={};function r(f,p){if(t[p]!==void 0)return t[p];const g=f.interleavedBuffers[p],m=s(f,g.buffer),v=Xr(g.type,m),x=new jl(v,g.stride);return x.uuid=g.uuid,t[p]=x,x}function s(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const o=e.isInstancedBufferGeometry?new _g:new Ze,a=e.data.index;if(a!==void 0){const f=Xr(a.type,a.array);o.setIndex(new dt(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let _;if(p.isInterleavedBufferAttribute){const g=r(e.data,p.data);_=new hr(g,p.itemSize,p.offset,p.normalized)}else{const g=Xr(p.type,p.array),m=p.isInstancedBufferAttribute?ss:dt;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),o.setAttribute(f,_)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],_=[];for(let g=0,m=p.length;g<m;g++){const v=p[g];let x;if(v.isInterleavedBufferAttribute){const y=r(e.data,v.data);x=new hr(y,v.itemSize,v.offset,v.normalized)}else{const y=Xr(v.type,v.array);x=new dt(y,v.itemSize,v.normalized)}v.name!==void 0&&(x.name=v.name),_.push(x)}o.morphAttributes[f]=_}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,p=h.length;f!==p;++f){const _=h[f];o.addGroup(_.start,_.count,_.materialIndex)}const d=e.data.boundingSphere;return d!==void 0&&(o.boundingSphere=new zt().fromJSON(d)),e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}const nu={};class jx extends dn{constructor(e){super(e)}load(e,t,n,r){const s=this,o=this.path===""?Du.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new pi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(h){r!==void 0&&r(h),Ie("ObjectLoader: Can't parse "+e+".",h.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),Ie("ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,r)}async loadAsync(e,t){const n=this,r=this.path===""?Du.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const s=new pi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t);let a;try{a=JSON.parse(o)}catch(c){throw new Error("ObjectLoader: Can't parse "+e+". "+c.message)}const l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,s,l,a,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let h=!1;for(const d in o)if(o[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,r,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(e,t){nu[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let n=0,r=e.length;n<r;n++){const s=new ar().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new Ql().fromJSON(e[s],r);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const r=new vg;for(let s=0,o=e.length;s<o;s++){let a;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=r.parse(l);break;default:l.type in df?a=df[l.type].fromJSON(l,t):l.type in nu?a=nu[l.type].fromJSON(l,t):fe(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){const n={},r={};if(e!==void 0){const s=new gc;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){const l=e[o];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),r[l.uuid]=n[l.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const r=e[n],s=mo.parse(r);t[s.uuid]=s}return t}parseImages(e,t){const n=this,r={};let s;function o(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(u)}else return l.data?{data:Xr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new zh(t);s=new go(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const h=e[c],d=h.url;if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new On(m.data,m.width,m.height)))}r[h.uuid]=new Ci(f)}else{const f=a(h.url);r[h.uuid]=new Ci(f)}}}return r}async parseImagesAsync(e){const t=this,n={};let r;async function s(o){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await r.loadAsync(l)}else return o.data?{data:Xr(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){r=new go(this.manager),r.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const l=e[o],c=l.url;if(Array.isArray(c)){const u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=await s(f);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new On(p.data,p.width,p.height)))}n[l.uuid]=new Ci(u)}else{const u=await s(l.url);n[l.uuid]=new Ci(u)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(fe("ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const r={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&fe('ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&fe("ObjectLoader: Undefined image",a.image);const l=t[a.image],c=l.data;let u;Array.isArray(c)?(u=new Ao,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new On:u=new Et,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,Qx)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],xf),u.wrapT=n(a.wrap[1],xf)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,yf)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,yf)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.normalized!==void 0&&(u.normalized=a.normalized),a.userData!==void 0&&(u.userData=a.userData),r[a.uuid]=u}return r}parseObject(e,t,n,r,s){let o;function a(d){return t[d]===void 0&&fe("ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const g=d[p];n[g]===void 0&&fe("ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&fe("ObjectLoader: Undefined material",d),n[d]}}function c(d){return r[d]===void 0&&fe("ObjectLoader: Undefined texture",d),r[d]}let u,h;switch(e.type){case"Scene":o=new Jl,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new be(e.background):o.background=c(e.background)),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new Kl(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new Zl(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new Bt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new Lo(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new pg(e.color,e.intensity);break;case"DirectionalLight":o=new fg(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new dg(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new mg(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new hg(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new ug(e.color,e.groundColor,e.intensity);break;case"LightProbe":const d=new Gh().fromArray(e.sh);o=new gg(d,e.intensity);break;case"SkinnedMesh":u=a(e.geometry),h=l(e.material),o=new Im(u,h),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),h=l(e.material),o=new Mt(u,h);break;case"InstancedMesh":u=a(e.geometry),h=l(e.material);const f=e.count,p=e.instanceMatrix,_=e.instanceColor;o=new Pm(u,h,f),o.instanceMatrix=new ss(new Float32Array(p.array),16),_!==void 0&&(o.instanceColor=new ss(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":u=a(e.geometry),h=l(e.material),o=new Lm(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,h),o.geometry=u,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._geometryInfo=e.geometryInfo.map(g=>{let m=null,v=null;return g.boundingBox!==void 0&&(m=new $t().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(v=new zt().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:v}}),o._instanceInfo=e.instanceInfo,o._availableInstanceIds=e._availableInstanceIds,o._availableGeometryIds=e._availableGeometryIds,o._nextIndexStart=e.nextIndexStart,o._nextVertexStart=e.nextVertexStart,o._geometryCount=e.geometryCount,o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._matricesTexture=c(e.matricesTexture.uuid),o._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(o.boundingSphere=new zt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(o.boundingBox=new $t().fromJSON(e.boundingBox));break;case"LOD":o=new Rm;break;case"Line":o=new Oi(a(e.geometry),l(e.material));break;case"LineLoop":o=new Nm(a(e.geometry),l(e.material));break;case"LineSegments":o=new ei(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new Dm(a(e.geometry),l(e.material));break;case"Sprite":o=new Cm(l(e.material));break;case"Group":o=new qr;break;case"Bone":o=new Eh;break;default:o=new rt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.pivot!==void 0&&(o.pivot=new R().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.static!==void 0&&(o.static=e.static),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],t,n,r,s))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const p=d[f];o.animations.push(s[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const p=d[f],_=o.getObjectByProperty("uuid",p.object);_!==void 0&&o.addLevel(_,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const r=t[n.skeleton];r===void 0?fe("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(r,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,r=e.getObjectByProperty("uuid",n);r!==void 0?t.target=r:t.target=new rt}})}}const Qx={UVMapping:Fl,CubeReflectionMapping:Jn,CubeRefractionMapping:Pi,EquirectangularReflectionMapping:zs,EquirectangularRefractionMapping:ks,CubeUVReflectionMapping:hs},xf={RepeatWrapping:js,ClampToEdgeWrapping:un,MirroredRepeatWrapping:Qs},yf={NearestFilter:Pt,NearestMipmapNearestFilter:hh,NearestMipmapLinearFilter:Wr,LinearFilter:yt,LinearMipmapNearestFilter:Gs,LinearMipmapLinearFilter:Yn},iu=new WeakMap;class ey extends dn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=$n.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{iu.has(o)===!0?(r&&r(iu.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){$n.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){r&&r(c),iu.set(l,c),$n.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});$n.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let _a;class Hh{static getContext(){return _a===void 0&&(_a=new(window.AudioContext||window.webkitAudioContext)),_a}static setContext(e){_a=e}}class ty extends dn{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new pi(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0),u=Hh.getContext(),h=e+"#decode";s.manager.itemStart(h),u.decodeAudioData(c,function(d){t(d),s.manager.itemEnd(h)}).catch(function(d){a(d),s.manager.itemEnd(h)})}catch(c){a(c)}},n,r);function a(l){r?r(l):Ie(l),s.manager.itemError(e)}}}const Sf=new Fe,Mf=new Fe,qi=new Fe;class ny{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Bt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Bt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,qi.copy(e.projectionMatrix);const r=t.eyeSep/2,s=r*t.near/t.focus,o=t.near*Math.tan(or*t.fov*.5)/t.zoom;let a,l;Mf.elements[12]=-r,Sf.elements[12]=r,a=-o*t.aspect+s,l=o*t.aspect+s,qi.elements[0]=2*t.near/(l-a),qi.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(qi),a=-o*t.aspect-s,l=o*t.aspect-s,qi.elements[0]=2*t.near/(l-a),qi.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(qi)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Mf),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Sf)}}const Br=-90,Vr=1;class xg extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bt(Br,Vr,e,t);r.layers=this.layers,this.add(r);const s=new Bt(Br,Vr,e,t);s.layers=this.layers,this.add(s);const o=new Bt(Br,Vr,e,t);o.layers=this.layers,this.add(o);const a=new Bt(Br,Vr,e,t);a.layers=this.layers,this.add(a);const l=new Bt(Br,Vr,e,t);l.layers=this.layers,this.add(l);const c=new Bt(Br,Vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class yg extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Wh{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=iy.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function iy(){this._document.hidden===!1&&this.reset()}const Yi=new R,ru=new Vt,ry=new R,$i=new R,Zi=new R;class sy extends rt{constructor(){super(),this.type="AudioListener",this.context=Hh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Wh}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Yi,ru,ry),$i.set(0,0,-1).applyQuaternion(ru),Zi.set(0,1,0).applyQuaternion(ru),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Yi.x,n),t.positionY.linearRampToValueAtTime(Yi.y,n),t.positionZ.linearRampToValueAtTime(Yi.z,n),t.forwardX.linearRampToValueAtTime($i.x,n),t.forwardY.linearRampToValueAtTime($i.y,n),t.forwardZ.linearRampToValueAtTime($i.z,n),t.upX.linearRampToValueAtTime(Zi.x,n),t.upY.linearRampToValueAtTime(Zi.y,n),t.upZ.linearRampToValueAtTime(Zi.z,n)}else t.setPosition(Yi.x,Yi.y,Yi.z),t.setOrientation($i.x,$i.y,$i.z,Zi.x,Zi.y,Zi.z)}}class Sg extends rt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){fe("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(fe("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(fe("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Ki=new R,bf=new Vt,oy=new R,Ji=new R;class ay extends Sg{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ki,bf,oy),Ji.set(0,0,1).applyQuaternion(bf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ki.x,n),t.positionY.linearRampToValueAtTime(Ki.y,n),t.positionZ.linearRampToValueAtTime(Ki.z,n),t.orientationX.linearRampToValueAtTime(Ji.x,n),t.orientationY.linearRampToValueAtTime(Ji.y,n),t.orientationZ.linearRampToValueAtTime(Ji.z,n)}else t.setPosition(Ki.x,Ki.y,Ki.z),t.setOrientation(Ji.x,Ji.y,Ji.z)}}class ly{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Mg{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){Vt.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const o=this._workIndex*s;Vt.multiplyQuaternionsFlat(e,o,e,t,e,n),Vt.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*r}}}const Xh="\\[\\]\\.:\\/",cy=new RegExp("["+Xh+"]","g"),qh="[^"+Xh+"]",uy="[^"+Xh.replace("\\.","")+"]",hy=/((?:WC+[\/:])*)/.source.replace("WC",qh),dy=/(WCOD+)?/.source.replace("WCOD",uy),fy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qh),py=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qh),my=new RegExp("^"+hy+dy+fy+py+"$"),gy=["material","materials","bones","map"];class _y{constructor(e,t,n){const r=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cy,"")}static parseTrackName(e){const t=my.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);gy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;Ie("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=_y;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class vy{constructor(){this.isAnimationObjectGroup=!0,this.uuid=xn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,r=arguments.length;n!==r;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length;let a,l=e.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const d=arguments[u],f=d.uuid;let p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(d);for(let _=0,g=o;_!==g;++_)s[_].push(new at(d,n[_],r[_]))}else if(p<c){a=e[p];const _=--c,g=e[_];t[g.uuid]=p,e[p]=g,t[f]=_,e[_]=d;for(let m=0,v=o;m!==v;++m){const x=s[m],y=x[_];let w=x[p];x[p]=y,w===void 0&&(w=new at(d,n[m],r[m])),x[_]=w}}else e[p]!==a&&Ie("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){const h=s++,d=e[h];t[d.uuid]=u,e[u]=d,t[c]=h,e[h]=l;for(let f=0,p=r;f!==p;++f){const _=n[f],g=_[h],m=_[u];_[u]=g,_[h]=m}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],u=c.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const d=--s,f=e[d],p=--o,_=e[p];t[f.uuid]=h,e[h]=f,t[_.uuid]=d,e[d]=_,e.pop();for(let g=0,m=r;g!==m;++g){const v=n[g],x=v[d],y=v[p];v[h]=x,v[d]=y,v.pop()}}else{const d=--o,f=e[d];d>0&&(t[f.uuid]=h),e[h]=f,e.pop();for(let p=0,_=r;p!==_;++p){const g=n[p];g[h]=g[d],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let r=n[e];const s=this._bindings;if(r!==void 0)return s[r];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);r=s.length,n[e]=r,o.push(e),a.push(t),s.push(h);for(let d=u,f=l.length;d!==f;++d){const p=l[d];h[d]=new at(p,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const r=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),s[n]=s[a],s.pop(),r[n]=r[a],r.pop()}}}class bg{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:nr,endingEnd:nr};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings&&Object.assign(l,u.settings),u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=hm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case vh:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Wl:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const o=n===dm;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(n===um){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=ir,r.endingEnd=ir):(e?r.endingStart=this.zeroSlopeAtStart?ir:nr:r.endingStart=io,t?r.endingEnd=this.zeroSlopeAtEnd?ir:nr:r.endingEnd=io)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const xy=new Float32Array(1);class yy extends Fn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=r[h],f=d.name;let p=u[f];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;p=new Mg(at.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Bh(new Float32Array(2),new Float32Array(2),1,xy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?mo.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Wl),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new bg(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?mo.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Sy extends yh{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isRenderTarget3D=!0,this.depth=n,this.texture=new $l(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}}class Yh{constructor(e){this.value=e}clone(){return new Yh(this.value.clone===void 0?this.value:this.value.clone())}}let My=0;class by extends Fn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:My++}),this.name="",this.usage=oo,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,r=t.length;n<r;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class Ey extends jl{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Ty{constructor(e,t,n,r,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Ef=new Fe;class Eg{constructor(e,t,n=0,r=1/0){this.ray=new Di(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ie("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ef.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ef),this}intersectObject(e,t=!0,n=[]){return Ou(e,this,n,t),n.sort(Tf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ou(e[r],this,n,t);return n.sort(Tf),n}}function Tf(i,e){return i.distance-e.distance}function Ou(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Ou(s[o],e,t,!0)}}class Tg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,fe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class wy{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ay{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class $h{static{$h.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}}const wf=new K;class Cy{constructor(e=new K(1/0,1/0),t=new K(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Af=new R,va=new R,zr=new R,kr=new R,su=new R,Ry=new R,Iy=new R;class Py{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Af.subVectors(e,this.start),va.subVectors(this.end,this.start);const n=va.dot(va);if(n===0)return 0;let s=va.dot(Af)/n;return t&&(s=Ve(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Ry,n=Iy){const r=10000000000000001e-32;let s,o;const a=this.start,l=e.start,c=this.end,u=e.end;zr.subVectors(c,a),kr.subVectors(u,l),su.subVectors(a,l);const h=zr.dot(zr),d=kr.dot(kr),f=kr.dot(su);if(h<=r&&d<=r)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(h<=r)s=0,o=f/d,o=Ve(o,0,1);else{const p=zr.dot(su);if(d<=r)o=0,s=Ve(-p/h,0,1);else{const _=zr.dot(kr),g=h*d-_*_;g!==0?s=Ve((_*f-p*d)/g,0,1):s=0,o=(_*s+f)/d,o<0?(o=0,s=Ve(-p/h,0,1)):o>1&&(o=1,s=Ve((_-p)/h,0,1))}}return t.copy(a).addScaledVector(zr,s),n.copy(l).addScaledVector(kr,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Cf=new R;class Ly extends rt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Ze,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,u=a/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Ce(r,3));const s=new rn({fog:!1,toneMapped:!1});this.cone=new ei(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Cf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Cf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Ti=new R,xa=new Fe,ou=new Fe;class Ny extends ei{constructor(e){const t=wg(e),n=new Ze,r=[],s=[];for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}n.setAttribute("position",new Ce(r,3)),n.setAttribute("color",new Ce(s,3));const o=new rn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const a=new be(255),l=new be(65280);this.setColors(a,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");ou.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(xa.multiplyMatrices(ou,a.matrixWorld),Ti.setFromMatrixPosition(xa),r.setXYZ(o,Ti.x,Ti.y,Ti.z),xa.multiplyMatrices(ou,a.parent.matrixWorld),Ti.setFromMatrixPosition(xa),r.setXYZ(o+1,Ti.x,Ti.y,Ti.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const r=this.geometry.getAttribute("color");for(let s=0;s<r.count;s+=2)r.setXYZ(s,e.r,e.g,e.b),r.setXYZ(s+1,t.r,t.g,t.b);return r.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function wg(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push(...wg(i.children[t]));return e}class Dy extends Mt{constructor(e,t,n){const r=new ps(t,4,2),s=new mi({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Oy=new R,Rf=new be,If=new be;class Uy extends rt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const r=new Io(t);r.rotateY(Math.PI*.5),this.material=new mi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=r.getAttribute("position"),o=new Float32Array(s.count*3);r.setAttribute("color",new dt(o,3)),this.add(new Mt(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Rf.copy(this.light.color),If.copy(this.light.groundColor);for(let n=0,r=t.count;n<r;n++){const s=n<r/2?Rf:If;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Oy.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Fy extends ei{constructor(e=10,t=10,n=4473924,r=8947848){n=new be(n),r=new be(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const _=d===s?n:r;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new Ze;u.setAttribute("position",new Ce(l,3)),u.setAttribute("color",new Ce(c,3));const h=new rn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class By extends ei{constructor(e=10,t=16,n=8,r=64,s=4473924,o=8947848){s=new be(s),o=new be(o);const a=[],l=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,p);const _=h&1?s:o;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let h=0;h<n;h++){const d=h&1?s:o,f=e-e/n*h;for(let p=0;p<r;p++){let _=p/r*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f;a.push(g,0,m),l.push(d.r,d.g,d.b),_=(p+1)/r*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f,a.push(g,0,m),l.push(d.r,d.g,d.b)}}const c=new Ze;c.setAttribute("position",new Ce(a,3)),c.setAttribute("color",new Ce(l,3));const u=new rn({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Pf=new R,ya=new R,Lf=new R;class Vy extends rt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new Ze;r.setAttribute("position",new Ce([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new rn({fog:!1,toneMapped:!1});this.lightPlane=new Oi(r,s),this.add(this.lightPlane),r=new Ze,r.setAttribute("position",new Ce([0,0,0,0,0,1],3)),this.targetLine=new Oi(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Pf.setFromMatrixPosition(this.light.matrixWorld),ya.setFromMatrixPosition(this.light.target.matrixWorld),Lf.subVectors(ya,Pf),this.lightPlane.lookAt(ya),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ya),this.targetLine.scale.z=Lf.length()}}const Sa=new R,wt=new mc;class zy extends ei{constructor(e){const t=new Ze,n=new rn({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,_){l(p),l(_)}function l(p){r.push(0,0,0),s.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(r.length/3-1)}t.setAttribute("position",new Ce(r,3)),t.setAttribute("color",new Ce(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new be(16755200),u=new be(16711680),h=new be(43775),d=new be(16777215),f=new be(3355443);this.setColors(c,u,h,d,f)}setColors(e,t,n,r,s){const a=this.geometry.getAttribute("color");return a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,r.r,r.g,r.b),a.setXYZ(39,r.r,r.g,r.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,r=1;let s,o;if(wt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,o=0;else if(this.camera.coordinateSystem===vn)s=-1,o=1;else if(this.camera.coordinateSystem===ur)s=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);It("c",t,e,wt,0,0,s),It("t",t,e,wt,0,0,o),It("n1",t,e,wt,-n,-r,s),It("n2",t,e,wt,n,-r,s),It("n3",t,e,wt,-n,r,s),It("n4",t,e,wt,n,r,s),It("f1",t,e,wt,-n,-r,o),It("f2",t,e,wt,n,-r,o),It("f3",t,e,wt,-n,r,o),It("f4",t,e,wt,n,r,o),It("u1",t,e,wt,n*.7,r*1.1,s),It("u2",t,e,wt,-n*.7,r*1.1,s),It("u3",t,e,wt,0,r*2,s),It("cf1",t,e,wt,-n,0,o),It("cf2",t,e,wt,n,0,o),It("cf3",t,e,wt,0,-r,o),It("cf4",t,e,wt,0,r,o),It("cn1",t,e,wt,-n,0,s),It("cn2",t,e,wt,n,0,s),It("cn3",t,e,wt,0,-r,s),It("cn4",t,e,wt,0,r,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function It(i,e,t,n,r,s,o){Sa.set(r,s,o).unproject(n);const a=e[i];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],Sa.x,Sa.y,Sa.z)}}const Ma=new $t;class ky extends ei{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(24),s=new Ze;s.setIndex(new dt(n,1)),s.setAttribute("position",new dt(r,3)),super(s,new rn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Ma.setFromObject(this.object),Ma.isEmpty())return;const e=Ma.min,t=Ma.max,n=this.geometry.attributes.position,r=n.array;r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=e.x,r[4]=t.y,r[5]=t.z,r[6]=e.x,r[7]=e.y,r[8]=t.z,r[9]=t.x,r[10]=e.y,r[11]=t.z,r[12]=t.x,r[13]=t.y,r[14]=e.z,r[15]=e.x,r[16]=t.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=t.x,r[22]=e.y,r[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Gy extends ei{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Ze;s.setIndex(new dt(n,1)),s.setAttribute("position",new Ce(r,3)),super(s,new rn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Hy extends Oi{constructor(e,t=1,n=16776960){const r=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Ze;o.setAttribute("position",new Ce(s,3)),o.computeBoundingSphere(),super(o,new rn({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ze;l.setAttribute("position",new Ce(a,3)),l.computeBoundingSphere(),this.add(new Mt(l,new mi({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Nf=new R;let ba,au;class Wy extends rt{constructor(e=new R(0,0,1),t=new R(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",ba===void 0&&(ba=new Ze,ba.setAttribute("position",new Ce([0,0,0,0,1,0],3)),au=new Ro(.5,1,5,1),au.translate(0,-.5,0)),this.position.copy(t),this.line=new Oi(ba,new rn({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Mt(au,new mi({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Nf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Nf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Xy extends ei{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Ze;r.setAttribute("position",new Ce(t,3)),r.setAttribute("color",new Ce(n,3));const s=new rn({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new be,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class qy{constructor(){this.type="ShapePath",this.color=new be,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new wl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const v=[];for(let x=0,y=m.length;x<y;x++){const w=m[x],M=new ar;M.curves=w.curves,v.push(M)}return v}function n(m,v){const x=v.length;let y=!1;for(let w=x-1,M=0;M<x;w=M++){let C=v[w],S=v[M],E=S.x-C.x,I=S.y-C.y;if(Math.abs(I)>Number.EPSILON){if(I<0&&(C=v[M],E=-E,S=v[w],I=-I),m.y<C.y||m.y>S.y)continue;if(m.y===C.y){if(m.x===C.x)return!0}else{const P=I*(m.x-C.x)-E*(m.y-C.y);if(P===0)return!0;if(P<0)continue;y=!y}}else{if(m.y!==C.y)continue;if(S.x<=m.x&&m.x<=C.x||C.x<=m.x&&m.x<=S.x)return!0}}return y}const r=Nn.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new ar,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],d=[];let f=[],p=0,_;d[p]=void 0,f[p]=[];for(let m=0,v=s.length;m<v;m++)a=s[m],_=a.getPoints(),o=r(_),o=e?!o:o,o?(!u&&d[p]&&p++,d[p]={s:new ar,p:_},d[p].s.curves=a.curves,u&&p++,f[p]=[]):f[p].push({h:a,p:_[0]});if(!d[0])return t(s);if(d.length>1){let m=!1,v=0;for(let x=0,y=d.length;x<y;x++)h[x]=[];for(let x=0,y=d.length;x<y;x++){const w=f[x];for(let M=0;M<w.length;M++){const C=w[M];let S=!0;for(let E=0;E<d.length;E++)n(C.p,d[E].p)&&(x!==E&&v++,S?(S=!1,h[E].push(C)):m=!0);S&&h[x].push(C)}}v>0&&m===!1&&(f=h)}let g;for(let m=0,v=d.length;m<v;m++){l=d[m].s,c.push(l),g=f[m];for(let x=0,y=g.length;x<y;x++)l.holes.push(g[x].h)}return c}}class Yy extends Fn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){fe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function $y(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function Zy(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function Ky(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function Uu(i,e,t,n){const r=Jy(n);switch(t){case gh:return i*e;case kl:return i*e/r.components*r.byteLength;case To:return i*e/r.components*r.byteLength;case Li:return i*e*2/r.components*r.byteLength;case Gl:return i*e*2/r.components*r.byteLength;case _h:return i*e*3/r.components*r.byteLength;case tn:return i*e*4/r.components*r.byteLength;case Hl:return i*e*4/r.components*r.byteLength;case Hs:case Ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:case $a:return Math.max(i,16)*Math.max(e,8)/4;case Xa:case Ya:return Math.max(i,8)*Math.max(e,8)/2;case Za:case Ka:case ja:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ja:case eo:case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ml:case gl:case _l:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vl:case xl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case to:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jy(i){switch(i){case cn:case dh:return{byteLength:1,components:1};case ns:case fh:case jn:return{byteLength:2,components:1};case Vl:case zl:return{byteLength:2,components:4};case En:case Bl:case en:return{byteLength:4,components:1};case ph:case mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}class jy{static contain(e,t){return $y(e,t)}static cover(e,t){return Zy(e,t)}static fill(e){return Ky(e)}static getByteLength(e,t,n,r){return Uu(e,t,n,r)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bo}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bo);function Ag(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Qy(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],_=h[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var eS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tS=`#ifdef USE_ALPHAHASH
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
#endif`,nS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oS=`#ifdef USE_AOMAP
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
#endif`,aS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lS=`#ifdef USE_BATCHING
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
#endif`,cS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fS=`#ifdef USE_IRIDESCENCE
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
#endif`,pS=`#ifdef USE_BUMPMAP
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
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,SS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,MS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bS=`#define PI 3.141592653589793
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
} // validated`,ES=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TS=`vec3 transformedNormal = objectNormal;
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
#endif`,wS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IS="gl_FragColor = linearToOutputTexel( gl_FragColor );",PS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,NS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
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
#endif`,OS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,US=`#ifdef USE_ENVMAP
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
#endif`,FS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kS=`#ifdef USE_GRADIENTMAP
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
}`,GS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XS=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,qS=`#ifdef USE_ENVMAP
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
#endif`,YS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JS=`PhysicalMaterial material;
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
#endif`,jS=`uniform sampler2D dfgLUT;
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
		return 0.5 / max( gv + gl, EPSILON );
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
}`,QS=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eM=`#if defined( RE_IndirectDiffuse )
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
#endif`,tM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,iM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uM=`#if defined( USE_POINTS_UV )
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
#endif`,hM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gM=`#ifdef USE_MORPHTARGETS
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
#endif`,_M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bM=`#ifdef USE_NORMALMAP
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
#endif`,EM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,VM=`float getShadowMask() {
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
}`,zM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kM=`#ifdef USE_SKINNING
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
#endif`,GM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HM=`#ifdef USE_SKINNING
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
#endif`,WM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$M=`#ifdef USE_TRANSMISSION
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
#endif`,ZM=`#ifdef USE_TRANSMISSION
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
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tb=`uniform sampler2D t2D;
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
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`#include <common>
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
}`,ab=`#if DEPTH_PACKING == 3200
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
}`,lb=`#define DISTANCE
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
}`,cb=`#define DISTANCE
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`uniform float scale;
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
}`,fb=`uniform vec3 diffuse;
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
}`,pb=`#include <common>
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#define LAMBERT
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
}`,_b=`#define LAMBERT
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
}`,vb=`#define MATCAP
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
}`,xb=`#define MATCAP
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
}`,yb=`#define NORMAL
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
}`,Sb=`#define NORMAL
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
}`,Mb=`#define PHONG
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
}`,bb=`#define PHONG
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
}`,Eb=`#define STANDARD
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
}`,Tb=`#define STANDARD
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
}`,wb=`#define TOON
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
}`,Ab=`#define TOON
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
}`,Cb=`uniform float size;
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
}`,Rb=`uniform vec3 diffuse;
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
}`,Ib=`#include <common>
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
}`,Pb=`uniform vec3 color;
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
}`,Lb=`uniform float rotation;
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
}`,Nb=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:eS,alphahash_pars_fragment:tS,alphamap_fragment:nS,alphamap_pars_fragment:iS,alphatest_fragment:rS,alphatest_pars_fragment:sS,aomap_fragment:oS,aomap_pars_fragment:aS,batching_pars_vertex:lS,batching_vertex:cS,begin_vertex:uS,beginnormal_vertex:hS,bsdfs:dS,iridescence_fragment:fS,bumpmap_pars_fragment:pS,clipping_planes_fragment:mS,clipping_planes_pars_fragment:gS,clipping_planes_pars_vertex:_S,clipping_planes_vertex:vS,color_fragment:xS,color_pars_fragment:yS,color_pars_vertex:SS,color_vertex:MS,common:bS,cube_uv_reflection_fragment:ES,defaultnormal_vertex:TS,displacementmap_pars_vertex:wS,displacementmap_vertex:AS,emissivemap_fragment:CS,emissivemap_pars_fragment:RS,colorspace_fragment:IS,colorspace_pars_fragment:PS,envmap_fragment:LS,envmap_common_pars_fragment:NS,envmap_pars_fragment:DS,envmap_pars_vertex:OS,envmap_physical_pars_fragment:qS,envmap_vertex:US,fog_vertex:FS,fog_pars_vertex:BS,fog_fragment:VS,fog_pars_fragment:zS,gradientmap_pars_fragment:kS,lightmap_pars_fragment:GS,lights_lambert_fragment:HS,lights_lambert_pars_fragment:WS,lights_pars_begin:XS,lights_toon_fragment:YS,lights_toon_pars_fragment:$S,lights_phong_fragment:ZS,lights_phong_pars_fragment:KS,lights_physical_fragment:JS,lights_physical_pars_fragment:jS,lights_fragment_begin:QS,lights_fragment_maps:eM,lights_fragment_end:tM,lightprobes_pars_fragment:nM,logdepthbuf_fragment:iM,logdepthbuf_pars_fragment:rM,logdepthbuf_pars_vertex:sM,logdepthbuf_vertex:oM,map_fragment:aM,map_pars_fragment:lM,map_particle_fragment:cM,map_particle_pars_fragment:uM,metalnessmap_fragment:hM,metalnessmap_pars_fragment:dM,morphinstance_vertex:fM,morphcolor_vertex:pM,morphnormal_vertex:mM,morphtarget_pars_vertex:gM,morphtarget_vertex:_M,normal_fragment_begin:vM,normal_fragment_maps:xM,normal_pars_fragment:yM,normal_pars_vertex:SM,normal_vertex:MM,normalmap_pars_fragment:bM,clearcoat_normal_fragment_begin:EM,clearcoat_normal_fragment_maps:TM,clearcoat_pars_fragment:wM,iridescence_pars_fragment:AM,opaque_fragment:CM,packing:RM,premultiplied_alpha_fragment:IM,project_vertex:PM,dithering_fragment:LM,dithering_pars_fragment:NM,roughnessmap_fragment:DM,roughnessmap_pars_fragment:OM,shadowmap_pars_fragment:UM,shadowmap_pars_vertex:FM,shadowmap_vertex:BM,shadowmask_pars_fragment:VM,skinbase_vertex:zM,skinning_pars_vertex:kM,skinning_vertex:GM,skinnormal_vertex:HM,specularmap_fragment:WM,specularmap_pars_fragment:XM,tonemapping_fragment:qM,tonemapping_pars_fragment:YM,transmission_fragment:$M,transmission_pars_fragment:ZM,uv_pars_fragment:KM,uv_pars_vertex:JM,uv_vertex:jM,worldpos_vertex:QM,background_vert:eb,background_frag:tb,backgroundCube_vert:nb,backgroundCube_frag:ib,cube_vert:rb,cube_frag:sb,depth_vert:ob,depth_frag:ab,distance_vert:lb,distance_frag:cb,equirect_vert:ub,equirect_frag:hb,linedashed_vert:db,linedashed_frag:fb,meshbasic_vert:pb,meshbasic_frag:mb,meshlambert_vert:gb,meshlambert_frag:_b,meshmatcap_vert:vb,meshmatcap_frag:xb,meshnormal_vert:yb,meshnormal_frag:Sb,meshphong_vert:Mb,meshphong_frag:bb,meshphysical_vert:Eb,meshphysical_frag:Tb,meshtoon_vert:wb,meshtoon_frag:Ab,points_vert:Cb,points_frag:Rb,shadow_vert:Ib,shadow_frag:Pb,sprite_vert:Lb,sprite_frag:Nb},ge={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Pn={basic:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Kt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Kt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new be(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Kt([ge.points,ge.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Kt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Kt([ge.common,ge.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Kt([ge.sprite,ge.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Kt([ge.common,ge.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Kt([ge.lights,ge.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Pn.physical={uniforms:Kt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Ea={r:0,b:0,g:0},Db=new Fe,Cg=new qe;Cg.set(-1,0,0,0,1,0,0,0,1);function Ob(i,e,t,n,r,s){const o=new be(0);let a=r===!0?0:1,l,c,u=null,h=0,d=null;function f(v){let x=v.isScene===!0?v.background:null;if(x&&x.isTexture){const y=v.backgroundBlurriness>0;x=e.get(x,y)}return x}function p(v){let x=!1;const y=f(v);y===null?g(o,a):y&&y.isColor&&(g(y,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,x){const y=f(x);y&&(y.isCubeTexture||y.mapping===hs)?(c===void 0&&(c=new Mt(new mr(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:as(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Db.makeRotationFromEuler(x.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cg),c.material.toneMapped=nt.getTransfer(y.colorSpace)!==ht,(u!==y||h!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Mt(new fs(2,2),new Tn({name:"BackgroundMaterial",uniforms:as(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=nt.getTransfer(y.colorSpace)!==ht,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,x){v.getRGB(Ea,Zm(i)),t.buffers.color.setClear(Ea.r,Ea.g,Ea.b,x,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),a=x,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:p,addToRenderList:_,dispose:m}}function Ub(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(P,N,D,k,U){let V=!1;const F=h(P,k,D,N);s!==F&&(s=F,c(s.object)),V=f(P,k,D,U),V&&p(P,k,D,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(P,N,D,k),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function h(P,N,D,k){const U=k.wireframe===!0;let V=n[N.id];V===void 0&&(V={},n[N.id]=V);const F=P.isInstancedMesh===!0?P.id:0;let Q=V[F];Q===void 0&&(Q={},V[F]=Q);let j=Q[D.id];j===void 0&&(j={},Q[D.id]=j);let oe=j[U];return oe===void 0&&(oe=d(l()),j[U]=oe),oe}function d(P){const N=[],D=[],k=[];for(let U=0;U<t;U++)N[U]=0,D[U]=0,k[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:D,attributeDivisors:k,object:P,attributes:{},index:null}}function f(P,N,D,k){const U=s.attributes,V=N.attributes;let F=0;const Q=D.getAttributes();for(const j in Q)if(Q[j].location>=0){const pe=U[j];let xe=V[j];if(xe===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(xe=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(xe=P.instanceColor)),pe===void 0||pe.attribute!==xe||xe&&pe.data!==xe.data)return!0;F++}return s.attributesNum!==F||s.index!==k}function p(P,N,D,k){const U={},V=N.attributes;let F=0;const Q=D.getAttributes();for(const j in Q)if(Q[j].location>=0){let pe=V[j];pe===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor));const xe={};xe.attribute=pe,pe&&pe.data&&(xe.data=pe.data),U[j]=xe,F++}s.attributes=U,s.attributesNum=F,s.index=k}function _(){const P=s.newAttributes;for(let N=0,D=P.length;N<D;N++)P[N]=0}function g(P){m(P,0)}function m(P,N){const D=s.newAttributes,k=s.enabledAttributes,U=s.attributeDivisors;D[P]=1,k[P]===0&&(i.enableVertexAttribArray(P),k[P]=1),U[P]!==N&&(i.vertexAttribDivisor(P,N),U[P]=N)}function v(){const P=s.newAttributes,N=s.enabledAttributes;for(let D=0,k=N.length;D<k;D++)N[D]!==P[D]&&(i.disableVertexAttribArray(D),N[D]=0)}function x(P,N,D,k,U,V,F){F===!0?i.vertexAttribIPointer(P,N,D,U,V):i.vertexAttribPointer(P,N,D,k,U,V)}function y(P,N,D,k){_();const U=k.attributes,V=D.getAttributes(),F=N.defaultAttributeValues;for(const Q in V){const j=V[Q];if(j.location>=0){let oe=U[Q];if(oe===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),oe!==void 0){const pe=oe.normalized,xe=oe.itemSize,Ge=e.get(oe);if(Ge===void 0)continue;const it=Ge.buffer,ze=Ge.type,Z=Ge.bytesPerElement,_e=ze===i.INT||ze===i.UNSIGNED_INT||oe.gpuType===Bl;if(oe.isInterleavedBufferAttribute){const ae=oe.data,Ne=ae.stride,ke=oe.offset;if(ae.isInstancedInterleavedBuffer){for(let Be=0;Be<j.locationSize;Be++)m(j.location+Be,ae.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Be=0;Be<j.locationSize;Be++)g(j.location+Be);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Be=0;Be<j.locationSize;Be++)x(j.location+Be,xe/j.locationSize,ze,pe,Ne*Z,(ke+xe/j.locationSize*Be)*Z,_e)}else{if(oe.isInstancedBufferAttribute){for(let ae=0;ae<j.locationSize;ae++)m(j.location+ae,oe.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ae=0;ae<j.locationSize;ae++)g(j.location+ae);i.bindBuffer(i.ARRAY_BUFFER,it);for(let ae=0;ae<j.locationSize;ae++)x(j.location+ae,xe/j.locationSize,ze,pe,xe*Z,xe/j.locationSize*ae*Z,_e)}}else if(F!==void 0){const pe=F[Q];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(j.location,pe);break;case 3:i.vertexAttrib3fv(j.location,pe);break;case 4:i.vertexAttrib4fv(j.location,pe);break;default:i.vertexAttrib1fv(j.location,pe)}}}}v()}function w(){E();for(const P in n){const N=n[P];for(const D in N){const k=N[D];for(const U in k){const V=k[U];for(const F in V)u(V[F].object),delete V[F];delete k[U]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;const N=n[P.id];for(const D in N){const k=N[D];for(const U in k){const V=k[U];for(const F in V)u(V[F].object),delete V[F];delete k[U]}}delete n[P.id]}function C(P){for(const N in n){const D=n[N];for(const k in D){const U=D[k];if(U[P.id]===void 0)continue;const V=U[P.id];for(const F in V)u(V[F].object),delete V[F];delete U[P.id]}}}function S(P){for(const N in n){const D=n[N],k=P.isInstancedMesh===!0?P.id:0,U=D[k];if(U!==void 0){for(const V in U){const F=U[V];for(const Q in F)u(F[Q].object),delete F[Q];delete U[V]}delete D[k],Object.keys(D).length===0&&delete n[N]}}}function E(){I(),o=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Fb(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Bb(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==tn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const S=C===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==cn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==en&&!S)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(fe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,maxSamples:w,samples:M}}function Vb(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new li,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{const v=s?0:n,x=v*4;let y=m.clippingState||null;l.value=y,y=u(p,d,x,f);for(let w=0;w!==x;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,y=f;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const Ri=4,Df=[.125,.215,.35,.446,.526,.582],er=20,zb=256,Ls=new Lo,Of=new be;let lu=null,cu=0,uu=0,hu=!1;const kb=new R;class Fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=kb}=s;lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lu,cu,uu),this._renderer.xr.enabled=hu,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jn||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:jn,format:tn,colorSpace:ro,depthBuffer:!1},r=Uf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uf(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Gb(s)),this._blurMaterial=Wb(s,e,t),this._ggxMaterial=Hb(s,e,t)}return r}_compileMaterial(e){const t=new Mt(new Ze,e);this._renderer.compile(t,Ls)}_sceneToCubeUV(e,t,n,r,s){const l=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Of),h.toneMapping=Dn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mt(new mr,new mi({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,m=!0):(g.color.copy(Of),m=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const w=this._cubeSize;Gr(r,y*w,x>2?w:0,w,w),h.setRenderTarget(r),m&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Jn||e.mapping===Pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ff());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ls)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-Ri?n-p+Ri:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Gr(s,g,m,3*_,2*_),r.setRenderTarget(s),r.render(a,Ls),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Gr(e,g,m,3*_,2*_),r.setRenderTarget(e),r.render(a,Ls)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ie("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*er-1),_=s/p,g=isFinite(s)?1+Math.floor(u*_):er;g>er&&fe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${er}`);const m=[];let v=0;for(let C=0;C<er;++C){const S=C/_,E=Math.exp(-S*S/2);m.push(E),C===0?v+=E:C<g&&(v+=2*E)}for(let C=0;C<m.length;C++)m[C]=m[C]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;const y=this._sizeLods[r],w=3*y*(r>x-Ri?r-x+Ri:0),M=4*(this._cubeSize-y);Gr(t,w,M,3*y,2*y),l.setRenderTarget(t),l.render(h,Ls)}}function Gb(i){const e=[],t=[],n=[];let r=i;const s=i-Ri+1+Df.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Ri?l=Df[o-i+Ri-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*f),x=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let M=0;M<f;M++){const C=M%3*2/3-1,S=M>2?0:-1,E=[C,S,0,C+2/3,S,0,C+2/3,S+1,0,C,S,0,C+2/3,S+1,0,C,S+1,0];v.set(E,_*p*M),x.set(d,g*p*M);const I=[M,M,M,M,M,M];y.set(I,m*p*M)}const w=new Ze;w.setAttribute("position",new dt(v,_)),w.setAttribute("uv",new dt(x,g)),w.setAttribute("faceIndex",new dt(y,m)),n.push(new Mt(w,null)),r>Ri&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Uf(i,e,t){const n=new yn(i,e,t);return n.texture.mapping=hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Hb(i,e,t){return new Tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Wb(i,e,t){const n=new Float32Array(er),r=new R(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ff(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Bf(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}class Zh extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ao(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new mr(5,5,5),s=new Tn({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Zn});s.uniforms.tEquirect.value=t;const o=new Mt(r,s),a=t.minFilter;return t.minFilter===Yn&&(t.minFilter=yt),new xg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}function Xb(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,f=!1){return d==null?null:f?o(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===zs||f===ks)if(e.has(d)){const p=e.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new Zh(p.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,p=f===zs||f===ks,_=f===Jn||f===Pi;if(p||_){let g=t.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Fu(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const v=d.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Fu(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d,f){return f===zs?d.mapping=Jn:f===ks&&(d.mapping=Pi),d}function l(d){let f=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function qb(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ml("WebGLRenderer: "+n+" extension not supported."),r}}}function Yb(i,e,t,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,p=h.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const v=f.array;_=f.version;for(let x=0,y=v.length;x<y;x+=3){const w=v[x+0],M=v[x+1],C=v[x+2];d.push(w,M,M,C,C,w)}}else{const v=p.array;_=p.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const w=x+0,M=x+1,C=x+2;d.push(w,M,M,C,C,w)}}const g=new(p.count>=65535?Mh:Sh)(d,1);g.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function $b(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,s,h*o,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];t.update(_,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Zb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:Ie("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Kb(i,e,t){const n=new WeakMap,r=new ft;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let E=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),p===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const M=new Float32Array(y*w*4*h),C=new Yl(M,y,w,h);C.type=en,C.needsUpdate=!0;const S=x*4;for(let I=0;I<h;I++){const P=g[I],N=m[I],D=v[I],k=y*w*4*I;for(let U=0;U<P.count;U++){const V=U*S;f===!0&&(r.fromBufferAttribute(P,U),M[k+V+0]=r.x,M[k+V+1]=r.y,M[k+V+2]=r.z,M[k+V+3]=0),p===!0&&(r.fromBufferAttribute(N,U),M[k+V+4]=r.x,M[k+V+5]=r.y,M[k+V+6]=r.z,M[k+V+7]=0),_===!0&&(r.fromBufferAttribute(D,U),M[k+V+8]=r.x,M[k+V+9]=r.y,M[k+V+10]=r.z,M[k+V+11]=D.itemSize===4?r.w:1)}}d={count:h,texture:C,size:new K(y,w)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Jb(i,e,t,n,r){let s=new WeakMap;function o(c){const u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const jb={[sh]:"LINEAR_TONE_MAPPING",[oh]:"REINHARD_TONE_MAPPING",[ah]:"CINEON_TONE_MAPPING",[Ul]:"ACES_FILMIC_TONE_MAPPING",[ch]:"AGX_TONE_MAPPING",[uh]:"NEUTRAL_TONE_MAPPING",[lh]:"CUSTOM_TONE_MAPPING"};function Qb(i,e,t,n,r){const s=new yn(e,t,{type:i,depthBuffer:n,stencilBuffer:r,depthTexture:n?new dr(e,t):void 0}),o=new yn(e,t,{type:jn,depthBuffer:!1,stencilBuffer:!1}),a=new Ze;a.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ce([0,2,0,0,2,0],2));const l=new Nh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Mt(a,l),u=new Lo(-1,1,1,-1,0,1);let h=null,d=null,f=!1,p,_=null,g=[],m=!1;this.setSize=function(v,x){s.setSize(v,x),o.setSize(v,x);for(let y=0;y<g.length;y++){const w=g[y];w.setSize&&w.setSize(v,x)}},this.setEffects=function(v){g=v,m=g.length>0&&g[0].isRenderPass===!0;const x=s.width,y=s.height;for(let w=0;w<g.length;w++){const M=g[w];M.setSize&&M.setSize(x,y)}},this.begin=function(v,x){if(f||v.toneMapping===Dn&&g.length===0)return!1;if(_=x,x!==null){const y=x.width,w=x.height;(s.width!==y||s.height!==w)&&this.setSize(y,w)}return m===!1&&v.setRenderTarget(s),p=v.toneMapping,v.toneMapping=Dn,!0},this.hasRenderPass=function(){return m},this.end=function(v,x){v.toneMapping=p,f=!0;let y=s,w=o;for(let M=0;M<g.length;M++){const C=g[M];if(C.enabled!==!1&&(C.render(v,w,y,x),C.needsSwap!==!1)){const S=y;y=w,w=S}}if(h!==v.outputColorSpace||d!==v.toneMapping){h=v.outputColorSpace,d=v.toneMapping,l.defines={},nt.getTransfer(h)===ht&&(l.defines.SRGB_TRANSFER="");const M=jb[d];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(_),v.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Rg=new Et,Bu=new dr(1,1),Ig=new Yl,Pg=new $l,Lg=new Ao,Vf=[],zf=[],kf=new Float32Array(16),Gf=new Float32Array(9),Hf=new Float32Array(4);function gs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Vf[r];if(s===void 0&&(s=new Float32Array(r),Vf[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vc(i,e){let t=zf[e];t===void 0&&(t=new Int32Array(e),zf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function eE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function nE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function iE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function rE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,n))return;Hf.set(n),i.uniformMatrix2fv(this.addr,!1,Hf),Ut(t,n)}}function sE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,n))return;Gf.set(n),i.uniformMatrix3fv(this.addr,!1,Gf),Ut(t,n)}}function oE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,n))return;kf.set(n),i.uniformMatrix4fv(this.addr,!1,kf),Ut(t,n)}}function aE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function cE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function uE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function hE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function fE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function pE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function mE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Bu.compareFunction=t.isReversedDepthBuffer()?ql:Xl,s=Bu):s=Rg,t.setTexture2D(e||s,r)}function gE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Pg,r)}function _E(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Lg,r)}function vE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ig,r)}function xE(i){switch(i){case 5126:return eE;case 35664:return tE;case 35665:return nE;case 35666:return iE;case 35674:return rE;case 35675:return sE;case 35676:return oE;case 5124:case 35670:return aE;case 35667:case 35671:return lE;case 35668:case 35672:return cE;case 35669:case 35673:return uE;case 5125:return hE;case 36294:return dE;case 36295:return fE;case 36296:return pE;case 35678:case 36198:case 36298:case 36306:case 35682:return mE;case 35679:case 36299:case 36307:return gE;case 35680:case 36300:case 36308:case 36293:return _E;case 36289:case 36303:case 36311:case 36292:return vE}}function yE(i,e){i.uniform1fv(this.addr,e)}function SE(i,e){const t=gs(e,this.size,2);i.uniform2fv(this.addr,t)}function ME(i,e){const t=gs(e,this.size,3);i.uniform3fv(this.addr,t)}function bE(i,e){const t=gs(e,this.size,4);i.uniform4fv(this.addr,t)}function EE(i,e){const t=gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function TE(i,e){const t=gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wE(i,e){const t=gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function AE(i,e){i.uniform1iv(this.addr,e)}function CE(i,e){i.uniform2iv(this.addr,e)}function RE(i,e){i.uniform3iv(this.addr,e)}function IE(i,e){i.uniform4iv(this.addr,e)}function PE(i,e){i.uniform1uiv(this.addr,e)}function LE(i,e){i.uniform2uiv(this.addr,e)}function NE(i,e){i.uniform3uiv(this.addr,e)}function DE(i,e){i.uniform4uiv(this.addr,e)}function OE(i,e,t){const n=this.cache,r=e.length,s=vc(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Bu:o=Rg;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function UE(i,e,t){const n=this.cache,r=e.length,s=vc(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Pg,s[o])}function FE(i,e,t){const n=this.cache,r=e.length,s=vc(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Lg,s[o])}function BE(i,e,t){const n=this.cache,r=e.length,s=vc(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ig,s[o])}function VE(i){switch(i){case 5126:return yE;case 35664:return SE;case 35665:return ME;case 35666:return bE;case 35674:return EE;case 35675:return TE;case 35676:return wE;case 5124:case 35670:return AE;case 35667:case 35671:return CE;case 35668:case 35672:return RE;case 35669:case 35673:return IE;case 5125:return PE;case 36294:return LE;case 36295:return NE;case 36296:return DE;case 35678:case 36198:case 36298:case 36306:case 35682:return OE;case 35679:case 36299:case 36307:return UE;case 35680:case 36300:case 36308:case 36293:return FE;case 36289:case 36303:case 36311:case 36292:return BE}}class zE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xE(t.type)}}class kE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VE(t.type)}}class GE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const du=/(\w+)(\])?(\[|\.)?/g;function Wf(i,e){i.seq.push(e),i.map[e.id]=e}function HE(i,e,t){const n=i.name,r=n.length;for(du.lastIndex=0;;){const s=du.exec(n),o=du.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wf(t,c===void 0?new zE(a,i,e):new kE(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new GE(a),Wf(t,h)),t=h}}}class Pa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);HE(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Xf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const WE=37297;let XE=0;function qE(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const qf=new qe;function YE(i){nt._getMatrix(qf,nt.workingColorSpace,i);const e=`mat3( ${qf.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case so:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Yf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+qE(i.getShaderSource(e),a)}else return s}function $E(i,e){const t=YE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ZE={[sh]:"Linear",[oh]:"Reinhard",[ah]:"Cineon",[Ul]:"ACESFilmic",[ch]:"AgX",[uh]:"Neutral",[lh]:"Custom"};function KE(i,e){const t=ZE[e];return t===void 0?(fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ta=new R;function JE(){nt.getLuminanceCoefficients(Ta);const i=Ta.x.toFixed(4),e=Ta.y.toFixed(4),t=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function QE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function eT(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Fs(i){return i!==""}function $f(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vu(i){return i.replace(tT,iT)}const nT=new Map;function iT(i,e){let t=et[e];if(t===void 0){const n=nT.get(e);if(n!==void 0)t=et[n],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vu(t)}const rT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kf(i){return i.replace(rT,sT)}function sT(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jf(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const oT={[Vs]:"SHADOWMAP_TYPE_PCF",[Hr]:"SHADOWMAP_TYPE_VSM"};function aT(i){return oT[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lT={[Jn]:"ENVMAP_TYPE_CUBE",[Pi]:"ENVMAP_TYPE_CUBE",[hs]:"ENVMAP_TYPE_CUBE_UV"};function cT(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":lT[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const uT={[Pi]:"ENVMAP_MODE_REFRACTION"};function hT(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":uT[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dT={[Eo]:"ENVMAP_BLENDING_MULTIPLY",[am]:"ENVMAP_BLENDING_MIX",[lm]:"ENVMAP_BLENDING_ADD"};function fT(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":dT[i.combine]||"ENVMAP_BLENDING_NONE"}function pT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function mT(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=aT(t),c=cT(t),u=hT(t),h=fT(t),d=pT(t),f=jE(t),p=QE(s),_=r.createProgram();let g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fs).join(`
`),m.length>0&&(m+=`
`)):(g=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),m=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?et.tonemapping_pars_fragment:"",t.toneMapping!==Dn?KE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,$E("linearToOutputTexel",t.outputColorSpace),JE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),o=Vu(o),o=$f(o,t),o=Zf(o,t),a=Vu(a),a=$f(a,t),a=Zf(a,t),o=Kf(o),a=Kf(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=v+g+o,y=v+m+a,w=Xf(r,r.VERTEX_SHADER,x),M=Xf(r,r.FRAGMENT_SHADER,y);r.attachShader(_,w),r.attachShader(_,M),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(P){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(_)||"",D=r.getShaderInfoLog(w)||"",k=r.getShaderInfoLog(M)||"",U=N.trim(),V=D.trim(),F=k.trim();let Q=!0,j=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,w,M);else{const oe=Yf(r,w,"vertex"),pe=Yf(r,M,"fragment");Ie("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+oe+`
`+pe)}else U!==""?fe("WebGLProgram: Program Info Log:",U):(V===""||F==="")&&(j=!1);j&&(P.diagnostics={runnable:Q,programLog:U,vertexShader:{log:V,prefix:g},fragmentShader:{log:F,prefix:m}})}r.deleteShader(w),r.deleteShader(M),S=new Pa(r,_),E=eT(r,_)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(_,WE)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=M,this}let gT=0;class _T{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vT(e),t.set(e,n)),n}}class vT{constructor(e){this.id=gT++,this.code=e,this.usedTimes=0}}function xT(i){return i===Li||i===eo||i===to}function yT(i,e,t,n,r,s){const o=new wo,a=new _T,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,E,I,P,N,D){const k=P.fog,U=N.geometry,V=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?P.environment:null,F=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,Q=e.get(S.envMap||V,F),j=Q&&Q.mapping===hs?Q.image.height:null,oe=f[S.type];S.precision!==null&&(d=n.getMaxPrecision(S.precision),d!==S.precision&&fe("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const pe=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,xe=pe!==void 0?pe.length:0;let Ge=0;U.morphAttributes.position!==void 0&&(Ge=1),U.morphAttributes.normal!==void 0&&(Ge=2),U.morphAttributes.color!==void 0&&(Ge=3);let it,ze,Z,_e;if(oe){const Ke=Pn[oe];it=Ke.vertexShader,ze=Ke.fragmentShader}else it=S.vertexShader,ze=S.fragmentShader,a.update(S),Z=a.getVertexShaderID(S),_e=a.getFragmentShaderID(S);const ae=i.getRenderTarget(),Ne=i.state.buffers.depth.getReversed(),ke=N.isInstancedMesh===!0,Be=N.isBatchedMesh===!0,st=!!S.map,He=!!S.matcap,J=!!Q,ie=!!S.aoMap,ee=!!S.lightMap,ye=!!S.bumpMap,me=!!S.normalMap,We=!!S.displacementMap,L=!!S.emissiveMap,Ye=!!S.metalnessMap,Pe=!!S.roughnessMap,Xe=S.anisotropy>0,re=S.clearcoat>0,ut=S.dispersion>0,A=S.iridescence>0,b=S.sheen>0,z=S.transmission>0,Y=Xe&&!!S.anisotropyMap,te=re&&!!S.clearcoatMap,se=re&&!!S.clearcoatNormalMap,ue=re&&!!S.clearcoatRoughnessMap,X=A&&!!S.iridescenceMap,$=A&&!!S.iridescenceThicknessMap,Me=b&&!!S.sheenColorMap,we=b&&!!S.sheenRoughnessMap,he=!!S.specularMap,le=!!S.specularColorMap,$e=!!S.specularIntensityMap,Qe=z&&!!S.transmissionMap,lt=z&&!!S.thicknessMap,O=!!S.gradientMap,ce=!!S.alphaMap,q=S.alphaTest>0,Ee=!!S.alphaHash,de=!!S.extensions;let ne=Dn;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ne=i.toneMapping);const De={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:it,fragmentShader:ze,defines:S.defines,customVertexShaderID:Z,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Be,batchingColor:Be&&N._colorsTexture!==null,instancing:ke,instancingColor:ke&&N.instanceColor!==null,instancingMorph:ke&&N.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:st,matcap:He,envMap:J,envMapMode:J&&Q.mapping,envMapCubeUVHeight:j,aoMap:ie,lightMap:ee,bumpMap:ye,normalMap:me,displacementMap:We,emissiveMap:L,normalMapObjectSpace:me&&S.normalMapType===pm,normalMapTangentSpace:me&&S.normalMapType===fi,packedNormalMap:me&&S.normalMapType===fi&&xT(S.normalMap.format),metalnessMap:Ye,roughnessMap:Pe,anisotropy:Xe,anisotropyMap:Y,clearcoat:re,clearcoatMap:te,clearcoatNormalMap:se,clearcoatRoughnessMap:ue,dispersion:ut,iridescence:A,iridescenceMap:X,iridescenceThicknessMap:$,sheen:b,sheenColorMap:Me,sheenRoughnessMap:we,specularMap:he,specularColorMap:le,specularIntensityMap:$e,transmission:z,transmissionMap:Qe,thicknessMap:lt,gradientMap:O,opaque:S.transparent===!1&&S.blending===sr&&S.alphaToCoverage===!1,alphaMap:ce,alphaTest:q,alphaHash:Ee,combine:S.combine,mapUv:st&&p(S.map.channel),aoMapUv:ie&&p(S.aoMap.channel),lightMapUv:ee&&p(S.lightMap.channel),bumpMapUv:ye&&p(S.bumpMap.channel),normalMapUv:me&&p(S.normalMap.channel),displacementMapUv:We&&p(S.displacementMap.channel),emissiveMapUv:L&&p(S.emissiveMap.channel),metalnessMapUv:Ye&&p(S.metalnessMap.channel),roughnessMapUv:Pe&&p(S.roughnessMap.channel),anisotropyMapUv:Y&&p(S.anisotropyMap.channel),clearcoatMapUv:te&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:$&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(S.sheenRoughnessMap.channel),specularMapUv:he&&p(S.specularMap.channel),specularColorMapUv:le&&p(S.specularColorMap.channel),specularIntensityMapUv:$e&&p(S.specularIntensityMap.channel),transmissionMapUv:Qe&&p(S.transmissionMap.channel),thicknessMapUv:lt&&p(S.thicknessMap.channel),alphaMapUv:ce&&p(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(me||Xe),vertexNormals:!!U.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(st||ce),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||U.attributes.normal===void 0&&me===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ne,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ge,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:st&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===ht,decodeVideoTextureEmissive:L&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ln,flipSided:S.side===nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:de&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&S.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function g(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)E.push(I),E.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(m(E,S),v(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function m(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function v(S,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),S.push(o.mask)}function x(S){const E=f[S.type];let I;if(E){const P=Pn[E];I=Km.clone(P.uniforms)}else I=S.uniforms;return I}function y(S,E){let I=u.get(E);return I!==void 0?++I.usedTimes:(I=new mT(i,E,S,r),c.push(I),u.set(E,I)),I}function w(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function M(S){a.remove(S)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:x,acquireProgram:y,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:C}}function ST(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function MT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function jf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qf(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,_,g,m){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=p,v.materialVariant=o(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=g,v.group=m),e++,v}function l(d,f,p,_,g,m){const v=a(d,f,p,_,g,m);p.transmission>0?n.push(v):p.transparent===!0?r.push(v):t.push(v)}function c(d,f,p,_,g,m){const v=a(d,f,p,_,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?r.unshift(v):t.unshift(v)}function u(d,f){t.length>1&&t.sort(d||MT),n.length>1&&n.sort(f||jf),r.length>1&&r.sort(f||jf)}function h(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function bT(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Qf,i.set(n,[o])):r>=s.length?(o=new Qf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ET(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new be};break;case"SpotLight":t={position:new R,direction:new R,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function TT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let wT=0;function AT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function CT(i){const e=new ET,t=TT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const r=new R,s=new Fe,o=new Fe;function a(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,v=0,x=0,y=0,w=0,M=0,C=0;c.sort(AT);for(let E=0,I=c.length;E<I;E++){const P=c[E],N=P.color,D=P.intensity,k=P.distance;let U=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Li?U=P.shadow.map.texture:U=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=N.r*D,h+=N.g*D,d+=N.b*D;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],D);C++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const F=P.shadow,Q=t.get(P);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=V,f++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(N).multiplyScalar(D),V.distance=k,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const F=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,F.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[_]=F.matrix,P.castShadow){const Q=t.get(P);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=U,y++}_++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(N).multiplyScalar(D),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=V,g++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const F=P.shadow,Q=t.get(P);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,Q.shadowCameraNear=F.camera.near,Q.shadowCameraFar=F.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=U,n.pointShadowMatrix[p]=P.shadow.matrix,x++}n.point[p]=V,p++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(D),V.groundColor.copy(P.groundColor).multiplyScalar(D),n.hemi[m]=V,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const S=n.hash;(S.directionalLength!==f||S.pointLength!==p||S.spotLength!==_||S.rectAreaLength!==g||S.hemiLength!==m||S.numDirectionalShadows!==v||S.numPointShadows!==x||S.numSpotShadows!==y||S.numSpotMaps!==w||S.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=C,S.directionalLength=f,S.pointLength=p,S.spotLength=_,S.rectAreaLength=g,S.hemiLength=m,S.numDirectionalShadows=v,S.numPointShadows=x,S.numSpotShadows=y,S.numSpotMaps=w,S.numLightProbes=C,n.version=wT++)}function l(c,u){let h=0,d=0,f=0,p=0,_=0;const g=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const x=c[m];if(x.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function ep(i){const e=new CT(i),t=[],n=[],r=[];function s(d){h.camera=d,t.length=0,n.length=0,r.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function RT(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ep(i),e.set(r,[a])):s>=o.length?(a=new ep(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const IT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PT=`uniform sampler2D shadow_pass;
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
}`,LT=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],NT=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],tp=new Fe,Ns=new R,fu=new R;function DT(i,e,t){let n=new ds;const r=new K,s=new K,o=new ft,a=new Oh,l=new Uh,c={},u=t.maxTextureSize,h={[di]:nn,[nn]:di,[Ln]:Ln},d=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:IT,fragmentShader:PT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ze;p.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vs;let m=this.type;this.render=function(M,C,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===rh&&(fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vs);const E=i.getRenderTarget(),I=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Zn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const D=m!==this.type;D&&C.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(U=>U.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,U=M.length;k<U;k++){const V=M[k],F=V.shadow;if(F===void 0){fe("WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const Q=F.getFrameExtents();r.multiply(Q),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,F.mapSize.y=s.y));const j=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=j,F.map===null||D===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Hr){if(V.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new yn(r.x,r.y,{format:Li,type:jn,minFilter:yt,magFilter:yt,generateMipmaps:!1}),F.map.texture.name=V.name+".shadowMap",F.map.depthTexture=new dr(r.x,r.y,en),F.map.depthTexture.name=V.name+".shadowMapDepth",F.map.depthTexture.format=Qn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Pt,F.map.depthTexture.magFilter=Pt}else V.isPointLight?(F.map=new Zh(r.x),F.map.depthTexture=new Um(r.x,En)):(F.map=new yn(r.x,r.y),F.map.depthTexture=new dr(r.x,r.y,En)),F.map.depthTexture.name=V.name+".shadowMap",F.map.depthTexture.format=Qn,this.type===Vs?(F.map.depthTexture.compareFunction=j?ql:Xl,F.map.depthTexture.minFilter=yt,F.map.depthTexture.magFilter=yt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Pt,F.map.depthTexture.magFilter=Pt);F.camera.updateProjectionMatrix()}const oe=F.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<oe;pe++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,pe),i.clear();else{pe===0&&(i.setRenderTarget(F.map),i.clear());const xe=F.getViewport(pe);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),N.viewport(o)}if(V.isPointLight){const xe=F.camera,Ge=F.matrix,it=V.distance||xe.far;it!==xe.far&&(xe.far=it,xe.updateProjectionMatrix()),Ns.setFromMatrixPosition(V.matrixWorld),xe.position.copy(Ns),fu.copy(xe.position),fu.add(LT[pe]),xe.up.copy(NT[pe]),xe.lookAt(fu),xe.updateMatrixWorld(),Ge.makeTranslation(-Ns.x,-Ns.y,-Ns.z),tp.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),F._frustum.setFromProjectionMatrix(tp,xe.coordinateSystem,xe.reversedDepth)}else F.updateMatrices(V);n=F.getFrustum(),y(C,S,F.camera,V,this.type)}F.isPointLightShadow!==!0&&this.type===Hr&&v(F,S),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,I,P)};function v(M,C){const S=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new yn(r.x,r.y,{format:Li,type:jn})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(C,null,S,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(C,null,S,f,_,null)}function x(M,C,S,E){let I=null;const P=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)I=P;else if(I=S.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=I.uuid,D=C.uuid;let k=c[N];k===void 0&&(k={},c[N]=k);let U=k[D];U===void 0&&(U=I.clone(),k[D]=U,C.addEventListener("dispose",w)),I=U}if(I.visible=C.visible,I.wireframe=C.wireframe,E===Hr?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:h[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const N=i.properties.get(I);N.light=S}return I}function y(M,C,S,E,I){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&I===Hr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);const D=e.update(M),k=M.material;if(Array.isArray(k)){const U=D.groups;for(let V=0,F=U.length;V<F;V++){const Q=U[V],j=k[Q.materialIndex];if(j&&j.visible){const oe=x(M,j,E,I);M.onBeforeShadow(i,M,C,S,D,oe,Q),i.renderBufferDirect(S,null,D,oe,M,Q),M.onAfterShadow(i,M,C,S,D,oe,Q)}}}else if(k.visible){const U=x(M,k,E,I);M.onBeforeShadow(i,M,C,S,D,U,null),i.renderBufferDirect(S,null,D,U,M,null),M.onAfterShadow(i,M,C,S,D,U,null)}}const N=M.children;for(let D=0,k=N.length;D<k;D++)y(N[D],C,S,E,I)}function w(M){M.target.removeEventListener("dispose",w);for(const S in c){const E=c[S],I=M.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function OT(i,e){function t(){let O=!1;const ce=new ft;let q=null;const Ee=new ft(0,0,0,0);return{setMask:function(de){q!==de&&!O&&(i.colorMask(de,de,de,de),q=de)},setLocked:function(de){O=de},setClear:function(de,ne,De,Ke,At){At===!0&&(de*=Ke,ne*=Ke,De*=Ke),ce.set(de,ne,De,Ke),Ee.equals(ce)===!1&&(i.clearColor(de,ne,De,Ke),Ee.copy(ce))},reset:function(){O=!1,q=null,Ee.set(-1,0,0,0)}}}function n(){let O=!1,ce=!1,q=null,Ee=null,de=null;return{setReversed:function(ne){if(ce!==ne){const De=e.get("EXT_clip_control");ne?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),ce=ne;const Ke=de;de=null,this.setClear(Ke)}},getReversed:function(){return ce},setTest:function(ne){ne?ae(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(ne){q!==ne&&!O&&(i.depthMask(ne),q=ne)},setFunc:function(ne){if(ce&&(ne=ev[ne]),Ee!==ne){switch(ne){case Ba:i.depthFunc(i.NEVER);break;case Va:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case Wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=ne}},setLocked:function(ne){O=ne},setClear:function(ne){de!==ne&&(de=ne,ce&&(ne=1-ne),i.clearDepth(ne))},reset:function(){O=!1,q=null,Ee=null,de=null,ce=!1}}}function r(){let O=!1,ce=null,q=null,Ee=null,de=null,ne=null,De=null,Ke=null,At=null;return{setTest:function(pt){O||(pt?ae(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(pt){ce!==pt&&!O&&(i.stencilMask(pt),ce=pt)},setFunc:function(pt,ti,Vn){(q!==pt||Ee!==ti||de!==Vn)&&(i.stencilFunc(pt,ti,Vn),q=pt,Ee=ti,de=Vn)},setOp:function(pt,ti,Vn){(ne!==pt||De!==ti||Ke!==Vn)&&(i.stencilOp(pt,ti,Vn),ne=pt,De=ti,Ke=Vn)},setLocked:function(pt){O=pt},setClear:function(pt){At!==pt&&(i.clearStencil(pt),At=pt)},reset:function(){O=!1,ce=null,q=null,Ee=null,de=null,ne=null,De=null,Ke=null,At=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,v=null,x=null,y=null,w=null,M=null,C=null,S=new be(0,0,0),E=0,I=!1,P=null,N=null,D=null,k=null,U=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Q=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),F=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),F=Q>=2);let oe=null,pe={};const xe=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),it=new ft().fromArray(xe),ze=new ft().fromArray(Ge);function Z(O,ce,q,Ee){const de=new Uint8Array(4),ne=i.createTexture();i.bindTexture(O,ne),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<q;De++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(ce+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return ne}const _e={};_e[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(cr),ye(!1),me(Mu),ae(i.CULL_FACE),ie(Zn);function ae(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Ne(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function ke(O,ce){return d[O]!==ce?(i.bindFramebuffer(O,ce),d[O]=ce,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ce),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Be(O,ce){let q=p,Ee=!1;if(O){q=f.get(ce),q===void 0&&(q=[],f.set(ce,q));const de=O.textures;if(q.length!==de.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,De=de.length;ne<De;ne++)q[ne]=i.COLOR_ATTACHMENT0+ne;q.length=de.length,Ee=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(q)}function st(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const He={[wi]:i.FUNC_ADD,[Wp]:i.FUNC_SUBTRACT,[Xp]:i.FUNC_REVERSE_SUBTRACT};He[qp]=i.MIN,He[Yp]=i.MAX;const J={[$p]:i.ZERO,[Zp]:i.ONE,[Kp]:i.SRC_COLOR,[Ua]:i.SRC_ALPHA,[nm]:i.SRC_ALPHA_SATURATE,[em]:i.DST_COLOR,[jp]:i.DST_ALPHA,[Jp]:i.ONE_MINUS_SRC_COLOR,[Fa]:i.ONE_MINUS_SRC_ALPHA,[tm]:i.ONE_MINUS_DST_COLOR,[Qp]:i.ONE_MINUS_DST_ALPHA,[im]:i.CONSTANT_COLOR,[rm]:i.ONE_MINUS_CONSTANT_COLOR,[sm]:i.CONSTANT_ALPHA,[om]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(O,ce,q,Ee,de,ne,De,Ke,At,pt){if(O===Zn){g===!0&&(Ne(i.BLEND),g=!1);return}if(g===!1&&(ae(i.BLEND),g=!0),O!==Hp){if(O!==m||pt!==I){if((v!==wi||w!==wi)&&(i.blendEquation(i.FUNC_ADD),v=wi,w=wi),pt)switch(O){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bu:i.blendFunc(i.ONE,i.ONE);break;case Eu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ie("WebGLState: Invalid blending: ",O);break}else switch(O){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Eu:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tu:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",O);break}x=null,y=null,M=null,C=null,S.set(0,0,0),E=0,m=O,I=pt}return}de=de||ce,ne=ne||q,De=De||Ee,(ce!==v||de!==w)&&(i.blendEquationSeparate(He[ce],He[de]),v=ce,w=de),(q!==x||Ee!==y||ne!==M||De!==C)&&(i.blendFuncSeparate(J[q],J[Ee],J[ne],J[De]),x=q,y=Ee,M=ne,C=De),(Ke.equals(S)===!1||At!==E)&&(i.blendColor(Ke.r,Ke.g,Ke.b,At),S.copy(Ke),E=At),m=O,I=!1}function ee(O,ce){O.side===Ln?Ne(i.CULL_FACE):ae(i.CULL_FACE);let q=O.side===nn;ce&&(q=!q),ye(q),O.blending===sr&&O.transparent===!1?ie(Zn):ie(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Ee=O.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),L(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function ye(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function me(O){O!==kp?(ae(i.CULL_FACE),O!==N&&(O===Mu?i.cullFace(i.BACK):O===Gp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),N=O}function We(O){O!==D&&(F&&i.lineWidth(O),D=O)}function L(O,ce,q){O?(ae(i.POLYGON_OFFSET_FILL),(k!==ce||U!==q)&&(k=ce,U=q,o.getReversed()&&(ce=-ce),i.polygonOffset(ce,q))):Ne(i.POLYGON_OFFSET_FILL)}function Ye(O){O?ae(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function Pe(O){O===void 0&&(O=i.TEXTURE0+V-1),oe!==O&&(i.activeTexture(O),oe=O)}function Xe(O,ce,q){q===void 0&&(oe===null?q=i.TEXTURE0+V-1:q=oe);let Ee=pe[q];Ee===void 0&&(Ee={type:void 0,texture:void 0},pe[q]=Ee),(Ee.type!==O||Ee.texture!==ce)&&(oe!==q&&(i.activeTexture(q),oe=q),i.bindTexture(O,ce||_e[O]),Ee.type=O,Ee.texture=ce)}function re(){const O=pe[oe];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ut(){try{i.compressedTexImage2D(...arguments)}catch(O){Ie("WebGLState:",O)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(O){Ie("WebGLState:",O)}}function b(){try{i.texSubImage2D(...arguments)}catch(O){Ie("WebGLState:",O)}}function z(){try{i.texSubImage3D(...arguments)}catch(O){Ie("WebGLState:",O)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Ie("WebGLState:",O)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Ie("WebGLState:",O)}}function se(){try{i.texStorage2D(...arguments)}catch(O){Ie("WebGLState:",O)}}function ue(){try{i.texStorage3D(...arguments)}catch(O){Ie("WebGLState:",O)}}function X(){try{i.texImage2D(...arguments)}catch(O){Ie("WebGLState:",O)}}function $(){try{i.texImage3D(...arguments)}catch(O){Ie("WebGLState:",O)}}function Me(O){return h[O]!==void 0?h[O]:i.getParameter(O)}function we(O,ce){h[O]!==ce&&(i.pixelStorei(O,ce),h[O]=ce)}function he(O){it.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),it.copy(O))}function le(O){ze.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ze.copy(O))}function $e(O,ce){let q=c.get(ce);q===void 0&&(q=new WeakMap,c.set(ce,q));let Ee=q.get(O);Ee===void 0&&(Ee=i.getUniformBlockIndex(ce,O.name),q.set(O,Ee))}function Qe(O,ce){const Ee=c.get(ce).get(O);l.get(ce)!==Ee&&(i.uniformBlockBinding(ce,Ee,O.__bindingPointIndex),l.set(ce,Ee))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},oe=null,pe={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,v=null,x=null,y=null,w=null,M=null,C=null,S=new be(0,0,0),E=0,I=!1,P=null,N=null,D=null,k=null,U=null,it.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Ne,bindFramebuffer:ke,drawBuffers:Be,useProgram:st,setBlending:ie,setMaterial:ee,setFlipSided:ye,setCullFace:me,setLineWidth:We,setPolygonOffset:L,setScissorTest:Ye,activeTexture:Pe,bindTexture:Xe,unbindTexture:re,compressedTexImage2D:ut,compressedTexImage3D:A,texImage2D:X,texImage3D:$,pixelStorei:we,getParameter:Me,updateUBOMapping:$e,uniformBlockBinding:Qe,texStorage2D:se,texStorage3D:ue,texSubImage2D:b,texSubImage3D:z,compressedTexSubImage2D:Y,compressedTexSubImage3D:te,scissor:he,viewport:le,reset:lt}}function UT(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new K,u=new WeakMap,h=new Set;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,b){return p?new OffscreenCanvas(A,b):ao("canvas")}function g(A,b,z){let Y=1;const te=ut(A);if((te.width>z||te.height>z)&&(Y=z/Math.max(te.width,te.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(Y*te.width),ue=Math.floor(Y*te.height);d===void 0&&(d=_(se,ue));const X=b?_(se,ue):d;return X.width=se,X.height=ue,X.getContext("2d").drawImage(A,0,0,se,ue),fe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+se+"x"+ue+")."),X}else return"data"in A&&fe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function v(A){i.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,b,z,Y,te,se=!1){if(A!==null){if(i[A]!==void 0)return i[A];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue;Y&&(ue=e.get("EXT_texture_norm16"),ue||fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=b;if(b===i.RED&&(z===i.FLOAT&&(X=i.R32F),z===i.HALF_FLOAT&&(X=i.R16F),z===i.UNSIGNED_BYTE&&(X=i.R8),z===i.UNSIGNED_SHORT&&ue&&(X=ue.R16_EXT),z===i.SHORT&&ue&&(X=ue.R16_SNORM_EXT)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.R8UI),z===i.UNSIGNED_SHORT&&(X=i.R16UI),z===i.UNSIGNED_INT&&(X=i.R32UI),z===i.BYTE&&(X=i.R8I),z===i.SHORT&&(X=i.R16I),z===i.INT&&(X=i.R32I)),b===i.RG&&(z===i.FLOAT&&(X=i.RG32F),z===i.HALF_FLOAT&&(X=i.RG16F),z===i.UNSIGNED_BYTE&&(X=i.RG8),z===i.UNSIGNED_SHORT&&ue&&(X=ue.RG16_EXT),z===i.SHORT&&ue&&(X=ue.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RG8UI),z===i.UNSIGNED_SHORT&&(X=i.RG16UI),z===i.UNSIGNED_INT&&(X=i.RG32UI),z===i.BYTE&&(X=i.RG8I),z===i.SHORT&&(X=i.RG16I),z===i.INT&&(X=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGB8UI),z===i.UNSIGNED_SHORT&&(X=i.RGB16UI),z===i.UNSIGNED_INT&&(X=i.RGB32UI),z===i.BYTE&&(X=i.RGB8I),z===i.SHORT&&(X=i.RGB16I),z===i.INT&&(X=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),z===i.UNSIGNED_INT&&(X=i.RGBA32UI),z===i.BYTE&&(X=i.RGBA8I),z===i.SHORT&&(X=i.RGBA16I),z===i.INT&&(X=i.RGBA32I)),b===i.RGB&&(z===i.UNSIGNED_SHORT&&ue&&(X=ue.RGB16_EXT),z===i.SHORT&&ue&&(X=ue.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),b===i.RGBA){const $=se?so:nt.getTransfer(te);z===i.FLOAT&&(X=i.RGBA32F),z===i.HALF_FLOAT&&(X=i.RGBA16F),z===i.UNSIGNED_BYTE&&(X=$===ht?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ue&&(X=ue.RGBA16_EXT),z===i.SHORT&&ue&&(X=ue.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function w(A,b){let z;return A?b===null||b===En||b===is?z=i.DEPTH24_STENCIL8:b===en?z=i.DEPTH32F_STENCIL8:b===ns&&(z=i.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===En||b===is?z=i.DEPTH_COMPONENT24:b===en?z=i.DEPTH_COMPONENT32F:b===ns&&(z=i.DEPTH_COMPONENT16),z}function M(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pt&&A.minFilter!==yt?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function C(A){const b=A.target;b.removeEventListener("dispose",C),E(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&h.delete(b)}function S(A){const b=A.target;b.removeEventListener("dispose",S),P(b)}function E(A){const b=n.get(A);if(b.__webglInit===void 0)return;const z=A.source,Y=f.get(z);if(Y){const te=Y[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&I(A),Object.keys(Y).length===0&&f.delete(z)}n.remove(A)}function I(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const z=A.source,Y=f.get(z);delete Y[b.__cacheKey],o.memory.textures--}function P(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let te=0;te<b.__webglFramebuffer[Y].length;te++)i.deleteFramebuffer(b.__webglFramebuffer[Y][te]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=A.textures;for(let Y=0,te=z.length;Y<te;Y++){const se=n.get(z[Y]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(z[Y])}n.remove(A)}let N=0;function D(){N=0}function k(){return N}function U(A){N=A}function V(){const A=N;return A>=r.maxTextures&&fe("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),N+=1,A}function F(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function Q(A,b){const z=n.get(A);if(A.isVideoTexture&&Xe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const Y=A.image;if(Y===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(z,A,b);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function j(A,b){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Ne(z,A,b);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function oe(A,b){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Ne(z,A,b);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function pe(A,b){const z=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){ke(z,A,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}const xe={[js]:i.REPEAT,[un]:i.CLAMP_TO_EDGE,[Qs]:i.MIRRORED_REPEAT},Ge={[Pt]:i.NEAREST,[hh]:i.NEAREST_MIPMAP_NEAREST,[Wr]:i.NEAREST_MIPMAP_LINEAR,[yt]:i.LINEAR,[Gs]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},it={[mm]:i.NEVER,[ym]:i.ALWAYS,[gm]:i.LESS,[Xl]:i.LEQUAL,[_m]:i.EQUAL,[ql]:i.GEQUAL,[vm]:i.GREATER,[xm]:i.NOTEQUAL};function ze(A,b){if(b.type===en&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===yt||b.magFilter===Gs||b.magFilter===Wr||b.magFilter===Yn||b.minFilter===yt||b.minFilter===Gs||b.minFilter===Wr||b.minFilter===Yn)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,xe[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,xe[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,xe[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ge[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ge[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,it[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Pt||b.minFilter!==Wr&&b.minFilter!==Yn||b.type===en&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Z(A,b){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",C));const Y=b.source;let te=f.get(Y);te===void 0&&(te={},f.set(Y,te));const se=F(b);if(se!==A.__cacheKey){te[se]===void 0&&(te[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[se].usedTimes++;const ue=te[A.__cacheKey];ue!==void 0&&(te[A.__cacheKey].usedTimes--,ue.usedTimes===0&&I(b)),A.__cacheKey=se,A.__webglTexture=te[se].texture}return z}function _e(A,b,z){return Math.floor(Math.floor(A/z)/b)}function ae(A,b,z,Y){const se=A.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,z,Y,b.data);else{se.sort((we,he)=>we.start-he.start);let ue=0;for(let we=1;we<se.length;we++){const he=se[ue],le=se[we],$e=he.start+he.count,Qe=_e(le.start,b.width,4),lt=_e(he.start,b.width,4);le.start<=$e+1&&Qe===lt&&_e(le.start+le.count-1,b.width,4)===Qe?he.count=Math.max(he.count,le.start+le.count-he.start):(++ue,se[ue]=le)}se.length=ue+1;const X=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),Me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let we=0,he=se.length;we<he;we++){const le=se[we],$e=Math.floor(le.start/4),Qe=Math.ceil(le.count/4),lt=$e%b.width,O=Math.floor($e/b.width),ce=Qe,q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,lt,O,ce,q,z,Y,b.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,X),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function Ne(A,b,z){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);const te=Z(A,b),se=b.source;t.bindTexture(Y,A.__webglTexture,i.TEXTURE0+z);const ue=n.get(se);if(se.version!==ue.__version||te===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const q=nt.getPrimaries(nt.workingColorSpace),Ee=b.colorSpace===ci?null:nt.getPrimaries(b.colorSpace),de=b.colorSpace===ci||q===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let $=g(b.image,!1,r.maxTextureSize);$=re(b,$);const Me=s.convert(b.format,b.colorSpace),we=s.convert(b.type);let he=y(b.internalFormat,Me,we,b.normalized,b.colorSpace,b.isVideoTexture);ze(Y,b);let le;const $e=b.mipmaps,Qe=b.isVideoTexture!==!0,lt=ue.__version===void 0||te===!0,O=se.dataReady,ce=M(b,$);if(b.isDepthTexture)he=w(b.format===Ai,b.type),lt&&(Qe?t.texStorage2D(i.TEXTURE_2D,1,he,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,he,$.width,$.height,0,Me,we,null));else if(b.isDataTexture)if($e.length>0){Qe&&lt&&t.texStorage2D(i.TEXTURE_2D,ce,he,$e[0].width,$e[0].height);for(let q=0,Ee=$e.length;q<Ee;q++)le=$e[q],Qe?O&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,le.width,le.height,Me,we,le.data):t.texImage2D(i.TEXTURE_2D,q,he,le.width,le.height,0,Me,we,le.data);b.generateMipmaps=!1}else Qe?(lt&&t.texStorage2D(i.TEXTURE_2D,ce,he,$.width,$.height),O&&ae(b,$,Me,we)):t.texImage2D(i.TEXTURE_2D,0,he,$.width,$.height,0,Me,we,$.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qe&&lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,he,$e[0].width,$e[0].height,$.depth);for(let q=0,Ee=$e.length;q<Ee;q++)if(le=$e[q],b.format!==tn)if(Me!==null)if(Qe){if(O)if(b.layerUpdates.size>0){const de=Uu(le.width,le.height,b.format,b.type);for(const ne of b.layerUpdates){const De=le.data.subarray(ne*de/le.data.BYTES_PER_ELEMENT,(ne+1)*de/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,ne,le.width,le.height,1,Me,De)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,le.width,le.height,$.depth,Me,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,he,le.width,le.height,$.depth,0,le.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,le.width,le.height,$.depth,Me,we,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,he,le.width,le.height,$.depth,0,Me,we,le.data)}else{Qe&&lt&&t.texStorage2D(i.TEXTURE_2D,ce,he,$e[0].width,$e[0].height);for(let q=0,Ee=$e.length;q<Ee;q++)le=$e[q],b.format!==tn?Me!==null?Qe?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,le.width,le.height,Me,le.data):t.compressedTexImage2D(i.TEXTURE_2D,q,he,le.width,le.height,0,le.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?O&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,le.width,le.height,Me,we,le.data):t.texImage2D(i.TEXTURE_2D,q,he,le.width,le.height,0,Me,we,le.data)}else if(b.isDataArrayTexture)if(Qe){if(lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,he,$.width,$.height,$.depth),O)if(b.layerUpdates.size>0){const q=Uu($.width,$.height,b.format,b.type);for(const Ee of b.layerUpdates){const de=$.data.subarray(Ee*q/$.data.BYTES_PER_ELEMENT,(Ee+1)*q/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,$.width,$.height,1,Me,we,de)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Me,we,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,$.width,$.height,$.depth,0,Me,we,$.data);else if(b.isData3DTexture)Qe?(lt&&t.texStorage3D(i.TEXTURE_3D,ce,he,$.width,$.height,$.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Me,we,$.data)):t.texImage3D(i.TEXTURE_3D,0,he,$.width,$.height,$.depth,0,Me,we,$.data);else if(b.isFramebufferTexture){if(lt)if(Qe)t.texStorage2D(i.TEXTURE_2D,ce,he,$.width,$.height);else{let q=$.width,Ee=$.height;for(let de=0;de<ce;de++)t.texImage2D(i.TEXTURE_2D,de,he,q,Ee,0,Me,we,null),q>>=1,Ee>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){const q=i.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),$.parentNode!==q){q.appendChild($),h.add(b),q.onpaint=Ke=>{const At=Ke.changedElements;for(const pt of h)At.includes(pt.image)&&(pt.needsUpdate=!0)},q.requestPaint();return}const Ee=0,de=i.RGBA,ne=i.RGBA,De=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Ee,de,ne,De,$),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if($e.length>0){if(Qe&&lt){const q=ut($e[0]);t.texStorage2D(i.TEXTURE_2D,ce,he,q.width,q.height)}for(let q=0,Ee=$e.length;q<Ee;q++)le=$e[q],Qe?O&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Me,we,le):t.texImage2D(i.TEXTURE_2D,q,he,Me,we,le);b.generateMipmaps=!1}else if(Qe){if(lt){const q=ut($);t.texStorage2D(i.TEXTURE_2D,ce,he,q.width,q.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,we,$)}else t.texImage2D(i.TEXTURE_2D,0,he,Me,we,$);m(b)&&v(Y),ue.__version=se.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ke(A,b,z){if(b.image.length!==6)return;const Y=Z(A,b),te=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const se=n.get(te);if(te.version!==se.__version||Y===!0){t.activeTexture(i.TEXTURE0+z);const ue=nt.getPrimaries(nt.workingColorSpace),X=b.colorSpace===ci?null:nt.getPrimaries(b.colorSpace),$=b.colorSpace===ci||ue===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const Me=b.isCompressedTexture||b.image[0].isCompressedTexture,we=b.image[0]&&b.image[0].isDataTexture,he=[];for(let ne=0;ne<6;ne++)!Me&&!we?he[ne]=g(b.image[ne],!0,r.maxCubemapSize):he[ne]=we?b.image[ne].image:b.image[ne],he[ne]=re(b,he[ne]);const le=he[0],$e=s.convert(b.format,b.colorSpace),Qe=s.convert(b.type),lt=y(b.internalFormat,$e,Qe,b.normalized,b.colorSpace),O=b.isVideoTexture!==!0,ce=se.__version===void 0||Y===!0,q=te.dataReady;let Ee=M(b,le);ze(i.TEXTURE_CUBE_MAP,b);let de;if(Me){O&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,lt,le.width,le.height);for(let ne=0;ne<6;ne++){de=he[ne].mipmaps;for(let De=0;De<de.length;De++){const Ke=de[De];b.format!==tn?$e!==null?O?q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,0,0,Ke.width,Ke.height,$e,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,lt,Ke.width,Ke.height,0,Ke.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,0,0,Ke.width,Ke.height,$e,Qe,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,lt,Ke.width,Ke.height,0,$e,Qe,Ke.data)}}}else{if(de=b.mipmaps,O&&ce){de.length>0&&Ee++;const ne=ut(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,lt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(we){O?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,he[ne].width,he[ne].height,$e,Qe,he[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,lt,he[ne].width,he[ne].height,0,$e,Qe,he[ne].data);for(let De=0;De<de.length;De++){const At=de[De].image[ne].image;O?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,0,0,At.width,At.height,$e,Qe,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,lt,At.width,At.height,0,$e,Qe,At.data)}}else{O?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,$e,Qe,he[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,lt,$e,Qe,he[ne]);for(let De=0;De<de.length;De++){const Ke=de[De];O?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,0,0,$e,Qe,Ke.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,lt,$e,Qe,Ke.image[ne])}}}m(b)&&v(i.TEXTURE_CUBE_MAP),se.__version=te.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Be(A,b,z,Y,te,se){const ue=s.convert(z.format,z.colorSpace),X=s.convert(z.type),$=y(z.internalFormat,ue,X,z.normalized,z.colorSpace),Me=n.get(b),we=n.get(z);if(we.__renderTarget=b,!Me.__hasExternalTextures){const he=Math.max(1,b.width>>se),le=Math.max(1,b.height>>se);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,se,$,he,le,b.depth,0,ue,X,null):t.texImage2D(te,se,$,he,le,0,ue,X,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Pe(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,te,we.__webglTexture,0,Ye(b)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,te,we.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(A,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const Y=b.depthTexture,te=Y&&Y.isDepthTexture?Y.type:null,se=w(b.stencilBuffer,te),ue=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pe(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye(b),se,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye(b),se,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,se,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,A)}else{const Y=b.textures;for(let te=0;te<Y.length;te++){const se=Y[te],ue=s.convert(se.format,se.colorSpace),X=s.convert(se.type),$=y(se.internalFormat,ue,X,se.normalized,se.colorSpace);Pe(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye(b),$,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye(b),$,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,$,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function He(A,b,z){const Y=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(b.depthTexture);if(te.__renderTarget=b,(!te.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y){if(te.__webglInit===void 0&&(te.__webglInit=!0,b.depthTexture.addEventListener("dispose",C)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),ze(i.TEXTURE_CUBE_MAP,b.depthTexture);const Me=s.convert(b.depthTexture.format),we=s.convert(b.depthTexture.type);let he;b.depthTexture.format===Qn?he=i.DEPTH_COMPONENT24:b.depthTexture.format===Ai&&(he=i.DEPTH24_STENCIL8);for(let le=0;le<6;le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,he,b.width,b.height,0,Me,we,null)}}else Q(b.depthTexture,0);const se=te.__webglTexture,ue=Ye(b),X=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,$=b.depthTexture.format===Ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Qn)Pe(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,X,se,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,$,X,se,0);else if(b.depthTexture.format===Ai)Pe(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,X,se,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,$,X,se,0);else throw new Error("Unknown depthTexture format")}function J(A){const b=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",te)};Y.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=Y}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(z)for(let Y=0;Y<6;Y++)He(b.__webglFramebuffer[Y],A,Y);else{const Y=A.texture.mipmaps;Y&&Y.length>0?He(b.__webglFramebuffer[0],A,0):He(b.__webglFramebuffer,A,0)}else if(z){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),st(b.__webglDepthbuffer[Y],A,!1);else{const te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,se)}}else{const Y=A.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),st(b.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(A,b,z){const Y=n.get(A);b!==void 0&&Be(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&J(A)}function ee(A){const b=A.texture,z=n.get(A),Y=n.get(b);A.addEventListener("dispose",S);const te=A.textures,se=A.isWebGLCubeRenderTarget===!0,ue=te.length>1;if(ue||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,o.memory.textures++),se){z.__webglFramebuffer=[];for(let X=0;X<6;X++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[X]=[];for(let $=0;$<b.mipmaps.length;$++)z.__webglFramebuffer[X][$]=i.createFramebuffer()}else z.__webglFramebuffer[X]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let X=0;X<b.mipmaps.length;X++)z.__webglFramebuffer[X]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ue)for(let X=0,$=te.length;X<$;X++){const Me=n.get(te[X]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Pe(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let X=0;X<te.length;X++){const $=te[X];z.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[X]);const Me=s.convert($.format,$.colorSpace),we=s.convert($.type),he=y($.internalFormat,Me,we,$.normalized,$.colorSpace,A.isXRRenderTarget===!0),le=Ye(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,he,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,z.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),st(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ze(i.TEXTURE_CUBE_MAP,b);for(let X=0;X<6;X++)if(b.mipmaps&&b.mipmaps.length>0)for(let $=0;$<b.mipmaps.length;$++)Be(z.__webglFramebuffer[X][$],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,$);else Be(z.__webglFramebuffer[X],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);m(b)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let X=0,$=te.length;X<$;X++){const Me=te[X],we=n.get(Me);let he=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,we.__webglTexture),ze(he,Me),Be(z.__webglFramebuffer,A,Me,i.COLOR_ATTACHMENT0+X,he,0),m(Me)&&v(he)}t.unbindTexture()}else{let X=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(X=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(X,Y.__webglTexture),ze(X,b),b.mipmaps&&b.mipmaps.length>0)for(let $=0;$<b.mipmaps.length;$++)Be(z.__webglFramebuffer[$],A,b,i.COLOR_ATTACHMENT0,X,$);else Be(z.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,X,0);m(b)&&v(X),t.unbindTexture()}A.depthBuffer&&J(A)}function ye(A){const b=A.textures;for(let z=0,Y=b.length;z<Y;z++){const te=b[z];if(m(te)){const se=x(A),ue=n.get(te).__webglTexture;t.bindTexture(se,ue),v(se),t.unbindTexture()}}}const me=[],We=[];function L(A){if(A.samples>0){if(Pe(A)===!1){const b=A.textures,z=A.width,Y=A.height;let te=i.COLOR_BUFFER_BIT;const se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(A),X=b.length>1;if(X)for(let Me=0;Me<b.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const $=A.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[Me]);const we=n.get(b[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,te,i.NEAREST),l===!0&&(me.length=0,We.length=0,me.push(i.COLOR_ATTACHMENT0+Me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(me.push(se),We.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,We)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let Me=0;Me<b.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,ue.__webglColorRenderbuffer[Me]);const we=n.get(b[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Ye(A){return Math.min(r.maxSamples,A.samples)}function Pe(A){const b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xe(A){const b=o.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function re(A,b){const z=A.colorSpace,Y=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==ro&&z!==ci&&(nt.getTransfer(z)===ht?(Y!==tn||te!==cn)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",z)),b}function ut(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=D,this.getTextureUnits=k,this.setTextureUnits=U,this.setTexture2D=Q,this.setTexture2DArray=j,this.setTexture3D=oe,this.setTextureCube=pe,this.rebindTextures=ie,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ng(i,e){function t(n,r=ci){let s;const o=nt.getTransfer(r);if(n===cn)return i.UNSIGNED_BYTE;if(n===Vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dh)return i.BYTE;if(n===fh)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===Bl)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===_h)return i.RGB;if(n===tn)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===kl)return i.RED;if(n===To)return i.RED_INTEGER;if(n===Li)return i.RG;if(n===Gl)return i.RG_INTEGER;if(n===Hl)return i.RGBA_INTEGER;if(n===Hs||n===Ws||n===Xs||n===qs)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===qa||n===Ya||n===$a)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Xa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ka||n===Ja||n===ja||n===Qa||n===eo||n===el)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Za||n===Ka)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ja)return s.COMPRESSED_R11_EAC;if(n===Qa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===eo)return s.COMPRESSED_RG11_EAC;if(n===el)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tl||n===nl||n===il||n===rl||n===sl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===dl||n===fl||n===pl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===tl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ml||n===gl||n===_l)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ml)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vl||n===xl||n===to||n===yl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===vl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const FT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BT=`
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

}`;class VT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new wh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Tn({vertexShader:FT,fragmentShader:BT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zT extends Fn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",g=new VT,m={},v=t.getContextAttributes();let x=null,y=null;const w=[],M=[],C=new K;let S=null;const E=new Bt;E.viewport=new ft;const I=new Bt;I.viewport=new ft;const P=[E,I],N=new yg;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let _e=w[Z];return _e===void 0&&(_e=new Ia,w[Z]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(Z){let _e=w[Z];return _e===void 0&&(_e=new Ia,w[Z]=_e),_e.getGripSpace()},this.getHand=function(Z){let _e=w[Z];return _e===void 0&&(_e=new Ia,w[Z]=_e),_e.getHandSpace()};function U(Z){const _e=M.indexOf(Z.inputSource);if(_e===-1)return;const ae=w[_e];ae!==void 0&&(ae.update(Z.inputSource,Z.frame,c||o),ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",F);for(let Z=0;Z<w.length;Z++){const _e=M[Z];_e!==null&&(M[Z]=null,w[Z].disconnect(_e))}D=null,k=null,g.reset();for(const Z in m)delete m[Z];e.setRenderTarget(x),f=null,d=null,h=null,r=null,y=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",V),r.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ne=null,ke=null;v.depth&&(ke=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=v.stencil?Ai:Qn,Ne=v.stencil?is:En);const Be={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new yn(d.textureWidth,d.textureHeight,{format:tn,type:cn,depthTexture:new dr(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new yn(f.framebufferWidth,f.framebufferHeight,{format:tn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(Z){for(let _e=0;_e<Z.removed.length;_e++){const ae=Z.removed[_e],Ne=M.indexOf(ae);Ne>=0&&(M[Ne]=null,w[Ne].disconnect(ae))}for(let _e=0;_e<Z.added.length;_e++){const ae=Z.added[_e];let Ne=M.indexOf(ae);if(Ne===-1){for(let Be=0;Be<w.length;Be++)if(Be>=M.length){M.push(ae),Ne=Be;break}else if(M[Be]===null){M[Be]=ae,Ne=Be;break}if(Ne===-1)break}const ke=w[Ne];ke&&ke.connect(ae)}}const Q=new R,j=new R;function oe(Z,_e,ae){Q.setFromMatrixPosition(_e.matrixWorld),j.setFromMatrixPosition(ae.matrixWorld);const Ne=Q.distanceTo(j),ke=_e.projectionMatrix.elements,Be=ae.projectionMatrix.elements,st=ke[14]/(ke[10]-1),He=ke[14]/(ke[10]+1),J=(ke[9]+1)/ke[5],ie=(ke[9]-1)/ke[5],ee=(ke[8]-1)/ke[0],ye=(Be[8]+1)/Be[0],me=st*ee,We=st*ye,L=Ne/(-ee+ye),Ye=L*-ee;if(_e.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ye),Z.translateZ(L),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ke[10]===-1)Z.projectionMatrix.copy(_e.projectionMatrix),Z.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Pe=st+L,Xe=He+L,re=me-Ye,ut=We+(Ne-Ye),A=J*He/Xe*Pe,b=ie*He/Xe*Pe;Z.projectionMatrix.makePerspective(re,ut,A,b,Pe,Xe),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function pe(Z,_e){_e===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(_e.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let _e=Z.near,ae=Z.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),N.near=I.near=E.near=_e,N.far=I.far=E.far=ae,(D!==N.near||k!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),D=N.near,k=N.far),N.layers.mask=Z.layers.mask|6,E.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;const Ne=Z.parent,ke=N.cameras;pe(N,Ne);for(let Be=0;Be<ke.length;Be++)pe(ke[Be],Ne);ke.length===2?oe(N,E,I):N.projectionMatrix.copy(E.projectionMatrix),xe(Z,N,Ne)};function xe(Z,_e,ae){ae===null?Z.matrix.copy(_e.matrixWorld):(Z.matrix.copy(ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(_e.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(_e.projectionMatrix),Z.projectionMatrixInverse.copy(_e.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=rs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(Z){return m[Z]};let Ge=null;function it(Z,_e){if(u=_e.getViewerPose(c||o),p=_e,u!==null){const ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ne=!1;ae.length!==N.cameras.length&&(N.cameras.length=0,Ne=!0);for(let He=0;He<ae.length;He++){const J=ae[He];let ie=null;if(f!==null)ie=f.getViewport(J);else{const ye=h.getViewSubImage(d,J);ie=ye.viewport,He===0&&(e.setRenderTargetTextures(y,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(y))}let ee=P[He];ee===void 0&&(ee=new Bt,ee.layers.enable(He),ee.viewport=new ft,P[He]=ee),ee.matrix.fromArray(J.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(J.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ie.x,ie.y,ie.width,ie.height),He===0&&(N.matrix.copy(ee.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ne===!0&&N.cameras.push(ee)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const He=h.getDepthInformation(ae[0]);He&&He.isValid&&He.texture&&g.init(He,r.renderState)}if(ke&&ke.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let He=0;He<ae.length;He++){const J=ae[He].camera;if(J){let ie=m[J];ie||(ie=new wh,m[J]=ie);const ee=h.getCameraImage(J);ie.sourceTexture=ee}}}}for(let ae=0;ae<w.length;ae++){const Ne=M[ae],ke=w[ae];Ne!==null&&ke!==void 0&&ke.update(Ne,_e,c||o)}Ge&&Ge(Z,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),p=null}const ze=new Ag;ze.setAnimationLoop(it),this.setAnimationLoop=function(Z){Ge=Z},this.dispose=function(){}}}const kT=new Fe,Dg=new qe;Dg.set(-1,0,0,0,1,0,0,0,1);function GT(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Zm(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,v,x,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===nn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===nn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=e.get(m),x=v.envMap,y=v.envMapRotation;x&&(g.envMap.value=x,g.envMapRotation.value.setFromMatrix4(kT.makeRotationFromEuler(y)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Dg),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=x*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function HT(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=r[v.id];y===void 0&&(p(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",g));const w=x.program;n.updateUBOMapping(v,w);const M=e.render.frame;s[v.id]!==M&&(d(v),s[v.id]=M)}function u(v){const x=h();v.__bindingPointIndex=x;const y=i.createBuffer(),w=v.__size,M=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],y=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let M=0,C=y.length;M<C;M++){const S=Array.isArray(y[M])?y[M]:[y[M]];for(let E=0,I=S.length;E<I;E++){const P=S[E];if(f(P,M,E,w)===!0){const N=P.__offset,D=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let U=0;U<D.length;U++){const V=D[U],F=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,N+k,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):ArrayBuffer.isView(V)?P.__data.set(new V.constructor(V.buffer,V.byteOffset,P.__data.length)):(V.toArray(P.__data,k),k+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,y,w){const M=v.value,C=x+"_"+y;if(w[C]===void 0)return typeof M=="number"||typeof M=="boolean"?w[C]=M:ArrayBuffer.isView(M)?w[C]=M.slice():w[C]=M.clone(),!0;{const S=w[C];if(typeof M=="number"||typeof M=="boolean"){if(S!==M)return w[C]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(S.equals(M)===!1)return S.copy(M),!0}}return!1}function p(v){const x=v.uniforms;let y=0;const w=16;for(let C=0,S=x.length;C<S;C++){const E=Array.isArray(x[C])?x[C]:[x[C]];for(let I=0,P=E.length;I<P;I++){const N=E[I],D=Array.isArray(N.value)?N.value:[N.value];for(let k=0,U=D.length;k<U;k++){const V=D[k],F=_(V),Q=y%w,j=Q%F.boundary,oe=Q+j;y+=j,oe!==0&&w-oe<F.storage&&(y+=w-oe),N.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=F.storage}}}const M=y%w;return M>0&&(y+=w-M),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(x.boundary=16,x.storage=v.byteLength):fe("WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function m(){for(const v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}const WT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wn=null;function XT(){return Wn===null&&(Wn=new On(WT,16,16,Li,jn),Wn.name="DFG_LUT",Wn.minFilter=yt,Wn.magFilter=yt,Wn.wrapS=un,Wn.wrapT=un,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}class Kh{constructor(e={}){const{canvas:t=Mm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=cn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=f,g=new Set([Hl,Gl,To]),m=new Set([cn,En,ns,is,Vl,zl]),v=new Uint32Array(4),x=new Int32Array(4),y=new R;let w=null,M=null;const C=[],S=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let P=!1,N=null;this._outputColorSpace=ln;let D=0,k=0,U=null,V=-1,F=null;const Q=new ft,j=new ft;let oe=null;const pe=new be(0);let xe=0,Ge=t.width,it=t.height,ze=1,Z=null,_e=null;const ae=new ft(0,0,Ge,it),Ne=new ft(0,0,Ge,it);let ke=!1;const Be=new ds;let st=!1,He=!1;const J=new Fe,ie=new R,ee=new ft,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function We(){return U===null?ze:1}let L=n;function Ye(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bo}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),L===null){const B="webgl2";if(L=Ye(B,T),L===null)throw Ye(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Ie("WebGLRenderer: "+T.message),T}let Pe,Xe,re,ut,A,b,z,Y,te,se,ue,X,$,Me,we,he,le,$e,Qe,lt,O,ce,q;function Ee(){Pe=new qb(L),Pe.init(),O=new Ng(L,Pe),Xe=new Bb(L,Pe,e,O),re=new OT(L,Pe),Xe.reversedDepthBuffer&&d&&re.buffers.depth.setReversed(!0),ut=new Zb(L),A=new ST,b=new UT(L,Pe,re,A,Xe,O,ut),z=new Xb(I),Y=new Qy(L),ce=new Ub(L,Y),te=new Yb(L,Y,ut,ce),se=new Jb(L,te,Y,ce,ut),$e=new Kb(L,Xe,b),we=new Vb(A),ue=new yT(I,z,Pe,Xe,ce,we),X=new GT(I,A),$=new bT,Me=new RT(Pe),le=new Ob(I,z,re,se,p,l),he=new DT(I,se,Xe),q=new HT(L,ut,Xe,re),Qe=new Fb(L,Pe,ut),lt=new $b(L,Pe,ut),ut.programs=ue.programs,I.capabilities=Xe,I.extensions=Pe,I.properties=A,I.renderLists=$,I.shadowMap=he,I.state=re,I.info=ut}Ee(),_!==cn&&(E=new Qb(_,t.width,t.height,r,s));const de=new zT(I,L);this.xr=de,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(T){T!==void 0&&(ze=T,this.setSize(Ge,it,!1))},this.getSize=function(T){return T.set(Ge,it)},this.setSize=function(T,B,W=!0){if(de.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=T,it=B,t.width=Math.floor(T*ze),t.height=Math.floor(B*ze),W===!0&&(t.style.width=T+"px",t.style.height=B+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Ge*ze,it*ze).floor()},this.setDrawingBufferSize=function(T,B,W){Ge=T,it=B,ze=W,t.width=Math.floor(T*W),t.height=Math.floor(B*W),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(_===cn){Ie("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){fe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Q)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,B,W,G){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,B,W,G),re.viewport(Q.copy(ae).multiplyScalar(ze).round())},this.getScissor=function(T){return T.copy(Ne)},this.setScissor=function(T,B,W,G){T.isVector4?Ne.set(T.x,T.y,T.z,T.w):Ne.set(T,B,W,G),re.scissor(j.copy(Ne).multiplyScalar(ze).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(T){re.setScissorTest(ke=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){_e=T},this.getClearColor=function(T){return T.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,W=!0){let G=0;if(T){let H=!1;if(U!==null){const Se=U.texture.format;H=g.has(Se)}if(H){const Se=U.texture.type,Ae=m.has(Se),ve=le.getClearColor(),Le=le.getClearAlpha(),Oe=ve.r,Je=ve.g,tt=ve.b;Ae?(v[0]=Oe,v[1]=Je,v[2]=tt,v[3]=Le,L.clearBufferuiv(L.COLOR,0,v)):(x[0]=Oe,x[1]=Je,x[2]=tt,x[3]=Le,L.clearBufferiv(L.COLOR,0,x))}else G|=L.COLOR_BUFFER_BIT}B&&(G|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),le.dispose(),$.dispose(),Me.dispose(),A.dispose(),z.dispose(),se.dispose(),ce.dispose(),q.dispose(),ue.dispose(),de.dispose(),de.removeEventListener("sessionstart",pd),de.removeEventListener("sessionend",md),Vi.stop()};function ne(T){T.preventDefault(),lo("WebGLRenderer: Context Lost."),P=!0}function De(){lo("WebGLRenderer: Context Restored."),P=!1;const T=ut.autoReset,B=he.enabled,W=he.autoUpdate,G=he.needsUpdate,H=he.type;Ee(),ut.autoReset=T,he.enabled=B,he.autoUpdate=W,he.needsUpdate=G,he.type=H}function Ke(T){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function At(T){const B=T.target;B.removeEventListener("dispose",At),pt(B)}function pt(T){ti(T),A.remove(T)}function ti(T){const B=A.get(T).programs;B!==void 0&&(B.forEach(function(W){ue.releaseProgram(W)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,W,G,H,Se){B===null&&(B=ye);const Ae=H.isMesh&&H.matrixWorld.determinant()<0,ve=z_(T,B,W,G,H);re.setMaterial(G,Ae);let Le=W.index,Oe=1;if(G.wireframe===!0){if(Le=te.getWireframeAttribute(W),Le===void 0)return;Oe=2}const Je=W.drawRange,tt=W.attributes.position;let Ue=Je.start*Oe,mt=(Je.start+Je.count)*Oe;Se!==null&&(Ue=Math.max(Ue,Se.start*Oe),mt=Math.min(mt,(Se.start+Se.count)*Oe)),Le!==null?(Ue=Math.max(Ue,0),mt=Math.min(mt,Le.count)):tt!=null&&(Ue=Math.max(Ue,0),mt=Math.min(mt,tt.count));const Ct=mt-Ue;if(Ct<0||Ct===1/0)return;ce.setup(H,G,ve,W,Le);let Tt,gt=Qe;if(Le!==null&&(Tt=Y.get(Le),gt=lt,gt.setIndex(Tt)),H.isMesh)G.wireframe===!0?(re.setLineWidth(G.wireframeLinewidth*We()),gt.setMode(L.LINES)):gt.setMode(L.TRIANGLES);else if(H.isLine){let Gt=G.linewidth;Gt===void 0&&(Gt=1),re.setLineWidth(Gt*We()),H.isLineSegments?gt.setMode(L.LINES):H.isLineLoop?gt.setMode(L.LINE_LOOP):gt.setMode(L.LINE_STRIP)}else H.isPoints?gt.setMode(L.POINTS):H.isSprite&&gt.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Gt=H._multiDrawStarts,Te=H._multiDrawCounts,fn=H._multiDrawCount,ot=Le?Y.get(Le).bytesPerElement:1,Sn=A.get(G).currentProgram.getUniforms();for(let zn=0;zn<fn;zn++)Sn.setValue(L,"_gl_DrawID",zn),gt.render(Gt[zn]/ot,Te[zn])}else if(H.isInstancedMesh)gt.renderInstances(Ue,Ct,H.count);else if(W.isInstancedBufferGeometry){const Gt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Te=Math.min(W.instanceCount,Gt);gt.renderInstances(Ue,Ct,Te)}else gt.render(Ue,Ct)};function Vn(T,B,W){T.transparent===!0&&T.side===Ln&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,Do(T,B,W),T.side=di,T.needsUpdate=!0,Do(T,B,W),T.side=Ln):Do(T,B,W)}this.compile=function(T,B,W=null){W===null&&(W=T),M=Me.get(W),M.init(B),S.push(M),W.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),T!==W&&T.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),M.setupLights();const G=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Se=H.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){const ve=Se[Ae];Vn(ve,W,H),G.add(ve)}else Vn(Se,W,H),G.add(Se)}),M=S.pop(),G},this.compileAsync=function(T,B,W=null){const G=this.compile(T,B,W);return new Promise(H=>{function Se(){if(G.forEach(function(Ae){A.get(Ae).currentProgram.isReady()&&G.delete(Ae)}),G.size===0){H(T);return}setTimeout(Se,10)}Pe.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Mc=null;function B_(T){Mc&&Mc(T)}function pd(){Vi.stop()}function md(){Vi.start()}const Vi=new Ag;Vi.setAnimationLoop(B_),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(T){Mc=T,de.setAnimationLoop(T),T===null?Vi.stop():Vi.start()},de.addEventListener("sessionstart",pd),de.addEventListener("sessionend",md),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(T,B);const W=de.enabled===!0&&de.isPresenting===!0,G=E!==null&&(U===null||W)&&E.begin(I,U);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(B),B=de.getCamera()),T.isScene===!0&&T.onBeforeRender(I,T,B,U),M=Me.get(T,S.length),M.init(B),M.state.textureUnits=b.getTextureUnits(),S.push(M),J.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Be.setFromProjectionMatrix(J,vn,B.reversedDepth),He=this.localClippingEnabled,st=we.init(this.clippingPlanes,He),w=$.get(T,C.length),w.init(),C.push(w),de.enabled===!0&&de.isPresenting===!0){const Ae=I.xr.getDepthSensingMesh();Ae!==null&&bc(Ae,B,-1/0,I.sortObjects)}bc(T,B,0,I.sortObjects),w.finish(),I.sortObjects===!0&&w.sort(Z,_e),me=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,me&&le.addToRenderList(w,T),this.info.render.frame++,st===!0&&we.beginShadows();const H=M.state.shadowsArray;if(he.render(H,T,B),st===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&E.hasRenderPass())===!1){const Ae=w.opaque,ve=w.transmissive;if(M.setupLights(),B.isArrayCamera){const Le=B.cameras;if(ve.length>0)for(let Oe=0,Je=Le.length;Oe<Je;Oe++){const tt=Le[Oe];_d(Ae,ve,T,tt)}me&&le.render(T);for(let Oe=0,Je=Le.length;Oe<Je;Oe++){const tt=Le[Oe];gd(w,T,tt,tt.viewport)}}else ve.length>0&&_d(Ae,ve,T,B),me&&le.render(T),gd(w,T,B)}U!==null&&k===0&&(b.updateMultisampleRenderTarget(U),b.updateRenderTargetMipmap(U)),G&&E.end(I),T.isScene===!0&&T.onAfterRender(I,T,B),ce.resetDefaultState(),V=-1,F=null,S.pop(),S.length>0?(M=S[S.length-1],b.setTextureUnits(M.state.textureUnits),st===!0&&we.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,N!==null&&N.renderEnd()};function bc(T,B,W,G){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Be.intersectsSprite(T)){G&&ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);const Ae=se.update(T),ve=T.material;ve.visible&&w.push(T,Ae,ve,W,ee.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Be.intersectsObject(T))){const Ae=se.update(T),ve=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ee.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ee.copy(Ae.boundingSphere.center)),ee.applyMatrix4(T.matrixWorld).applyMatrix4(J)),Array.isArray(ve)){const Le=Ae.groups;for(let Oe=0,Je=Le.length;Oe<Je;Oe++){const tt=Le[Oe],Ue=ve[tt.materialIndex];Ue&&Ue.visible&&w.push(T,Ae,Ue,W,ee.z,tt)}}else ve.visible&&w.push(T,Ae,ve,W,ee.z,null)}}const Se=T.children;for(let Ae=0,ve=Se.length;Ae<ve;Ae++)bc(Se[Ae],B,W,G)}function gd(T,B,W,G){const{opaque:H,transmissive:Se,transparent:Ae}=T;M.setupLightsView(W),st===!0&&we.setGlobalState(I.clippingPlanes,W),G&&re.viewport(Q.copy(G)),H.length>0&&No(H,B,W),Se.length>0&&No(Se,B,W),Ae.length>0&&No(Ae,B,W),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function _d(T,B,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){const Ue=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new yn(1,1,{generateMipmaps:!0,type:Ue?jn:cn,minFilter:Yn,samples:Math.max(4,Xe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const Se=M.state.transmissionRenderTarget[G.id],Ae=G.viewport||Q;Se.setSize(Ae.z*I.transmissionResolutionScale,Ae.w*I.transmissionResolutionScale);const ve=I.getRenderTarget(),Le=I.getActiveCubeFace(),Oe=I.getActiveMipmapLevel();I.setRenderTarget(Se),I.getClearColor(pe),xe=I.getClearAlpha(),xe<1&&I.setClearColor(16777215,.5),I.clear(),me&&le.render(W);const Je=I.toneMapping;I.toneMapping=Dn;const tt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),st===!0&&we.setGlobalState(I.clippingPlanes,G),No(T,W,G),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let mt=0,Ct=B.length;mt<Ct;mt++){const Tt=B[mt],{object:gt,geometry:Gt,material:Te,group:fn}=Tt;if(Te.side===Ln&&gt.layers.test(G.layers)){const ot=Te.side;Te.side=nn,Te.needsUpdate=!0,vd(gt,W,G,Gt,Te,fn),Te.side=ot,Te.needsUpdate=!0,Ue=!0}}Ue===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se))}I.setRenderTarget(ve,Le,Oe),I.setClearColor(pe,xe),tt!==void 0&&(G.viewport=tt),I.toneMapping=Je}function No(T,B,W){const G=B.isScene===!0?B.overrideMaterial:null;for(let H=0,Se=T.length;H<Se;H++){const Ae=T[H],{object:ve,geometry:Le,group:Oe}=Ae;let Je=Ae.material;Je.allowOverride===!0&&G!==null&&(Je=G),ve.layers.test(W.layers)&&vd(ve,B,W,Le,Je,Oe)}}function vd(T,B,W,G,H,Se){T.onBeforeRender(I,B,W,G,H,Se),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(I,B,W,G,T,Se),H.transparent===!0&&H.side===Ln&&H.forceSinglePass===!1?(H.side=nn,H.needsUpdate=!0,I.renderBufferDirect(W,B,G,H,T,Se),H.side=di,H.needsUpdate=!0,I.renderBufferDirect(W,B,G,H,T,Se),H.side=Ln):I.renderBufferDirect(W,B,G,H,T,Se),T.onAfterRender(I,B,W,G,H,Se)}function Do(T,B,W){B.isScene!==!0&&(B=ye);const G=A.get(T),H=M.state.lights,Se=M.state.shadowsArray,Ae=H.state.version,ve=ue.getParameters(T,H.state,Se,B,W,M.state.lightProbeGridArray),Le=ue.getProgramCacheKey(ve);let Oe=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,G.fog=B.fog;const Je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=z.get(T.envMap||G.environment,Je),G.envMapRotation=G.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",At),Oe=new Map,G.programs=Oe);let tt=Oe.get(Le);if(tt!==void 0){if(G.currentProgram===tt&&G.lightsStateVersion===Ae)return yd(T,ve),tt}else ve.uniforms=ue.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,W,ve),T.onBeforeCompile(ve,I),tt=ue.acquireProgram(ve,Le),Oe.set(Le,tt),G.uniforms=ve.uniforms;const Ue=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=we.uniform),yd(T,ve),G.needsLights=G_(T),G.lightsStateVersion=Ae,G.needsLights&&(Ue.ambientLightColor.value=H.state.ambient,Ue.lightProbe.value=H.state.probe,Ue.directionalLights.value=H.state.directional,Ue.directionalLightShadows.value=H.state.directionalShadow,Ue.spotLights.value=H.state.spot,Ue.spotLightShadows.value=H.state.spotShadow,Ue.rectAreaLights.value=H.state.rectArea,Ue.ltc_1.value=H.state.rectAreaLTC1,Ue.ltc_2.value=H.state.rectAreaLTC2,Ue.pointLights.value=H.state.point,Ue.pointLightShadows.value=H.state.pointShadow,Ue.hemisphereLights.value=H.state.hemi,Ue.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ue.spotLightMatrix.value=H.state.spotLightMatrix,Ue.spotLightMap.value=H.state.spotLightMap,Ue.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=M.state.lightProbeGridArray.length>0,G.currentProgram=tt,G.uniformsList=null,tt}function xd(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Pa.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function yd(T,B){const W=A.get(T);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function V_(T,B){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let W=0,G=T.length;W<G;W++){const H=T[W];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function z_(T,B,W,G,H){B.isScene!==!0&&(B=ye),b.resetTextureUnits();const Se=B.fog,Ae=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?B.environment:null,ve=U===null?I.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:nt.workingColorSpace,Le=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Oe=z.get(G.envMap||Ae,Le),Je=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,tt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ue=!!W.morphAttributes.position,mt=!!W.morphAttributes.normal,Ct=!!W.morphAttributes.color;let Tt=Dn;G.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Tt=I.toneMapping);const gt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Gt=gt!==void 0?gt.length:0,Te=A.get(G),fn=M.state.lights;if(st===!0&&(He===!0||T!==F)){const vt=T===F&&G.id===V;we.setState(G,T,vt)}let ot=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==fn.state.version||Te.outputColorSpace!==ve||H.isBatchedMesh&&Te.batching===!1||!H.isBatchedMesh&&Te.batching===!0||H.isBatchedMesh&&Te.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Te.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Te.instancing===!1||!H.isInstancedMesh&&Te.instancing===!0||H.isSkinnedMesh&&Te.skinning===!1||!H.isSkinnedMesh&&Te.skinning===!0||H.isInstancedMesh&&Te.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Te.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Te.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Te.instancingMorph===!1&&H.morphTexture!==null||Te.envMap!==Oe||G.fog===!0&&Te.fog!==Se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==we.numPlanes||Te.numIntersection!==we.numIntersection)||Te.vertexAlphas!==Je||Te.vertexTangents!==tt||Te.morphTargets!==Ue||Te.morphNormals!==mt||Te.morphColors!==Ct||Te.toneMapping!==Tt||Te.morphTargetsCount!==Gt||!!Te.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Te.__version=G.version);let Sn=Te.currentProgram;ot===!0&&(Sn=Do(G,B,H),N&&G.isNodeMaterial&&N.onUpdateProgram(G,Sn,Te));let zn=!1,gi=!1,xr=!1;const _t=Sn.getUniforms(),Rt=Te.uniforms;if(re.useProgram(Sn.program)&&(zn=!0,gi=!0,xr=!0),G.id!==V&&(V=G.id,gi=!0),Te.needsLights){const vt=V_(M.state.lightProbeGridArray,H);Te.lightProbeGrid!==vt&&(Te.lightProbeGrid=vt,gi=!0)}if(zn||F!==T){re.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),_t.setValue(L,"projectionMatrix",T.projectionMatrix),_t.setValue(L,"viewMatrix",T.matrixWorldInverse);const vi=_t.map.cameraPosition;vi!==void 0&&vi.setValue(L,ie.setFromMatrixPosition(T.matrixWorld)),Xe.logarithmicDepthBuffer&&_t.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_t.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),F!==T&&(F=T,gi=!0,xr=!0)}if(Te.needsLights&&(fn.state.directionalShadowMap.length>0&&_t.setValue(L,"directionalShadowMap",fn.state.directionalShadowMap,b),fn.state.spotShadowMap.length>0&&_t.setValue(L,"spotShadowMap",fn.state.spotShadowMap,b),fn.state.pointShadowMap.length>0&&_t.setValue(L,"pointShadowMap",fn.state.pointShadowMap,b)),H.isSkinnedMesh){_t.setOptional(L,H,"bindMatrix"),_t.setOptional(L,H,"bindMatrixInverse");const vt=H.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),_t.setValue(L,"boneTexture",vt.boneTexture,b))}H.isBatchedMesh&&(_t.setOptional(L,H,"batchingTexture"),_t.setValue(L,"batchingTexture",H._matricesTexture,b),_t.setOptional(L,H,"batchingIdTexture"),_t.setValue(L,"batchingIdTexture",H._indirectTexture,b),_t.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&_t.setValue(L,"batchingColorTexture",H._colorsTexture,b));const _i=W.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&$e.update(H,W,Sn),(gi||Te.receiveShadow!==H.receiveShadow)&&(Te.receiveShadow=H.receiveShadow,_t.setValue(L,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&B.environment!==null&&(Rt.envMapIntensity.value=B.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=XT()),gi){if(_t.setValue(L,"toneMappingExposure",I.toneMappingExposure),Te.needsLights&&k_(Rt,xr),Se&&G.fog===!0&&X.refreshFogUniforms(Rt,Se),X.refreshMaterialUniforms(Rt,G,ze,it,M.state.transmissionRenderTarget[T.id]),Te.needsLights&&Te.lightProbeGrid){const vt=Te.lightProbeGrid;Rt.probesSH.value=vt.texture,Rt.probesMin.value.copy(vt.boundingBox.min),Rt.probesMax.value.copy(vt.boundingBox.max),Rt.probesResolution.value.copy(vt.resolution)}Pa.upload(L,xd(Te),Rt,b)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Pa.upload(L,xd(Te),Rt,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_t.setValue(L,"center",H.center),_t.setValue(L,"modelViewMatrix",H.modelViewMatrix),_t.setValue(L,"normalMatrix",H.normalMatrix),_t.setValue(L,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const vt=G.uniformsGroups;for(let vi=0,yr=vt.length;vi<yr;vi++){const Sd=vt[vi];q.update(Sd,Sn),q.bind(Sd,Sn)}}return Sn}function k_(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function G_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,B,W){const G=A.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),A.get(T.texture).__webglTexture=B,A.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const W=A.get(T);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const H_=L.createFramebuffer();this.setRenderTarget=function(T,B=0,W=0){U=T,D=B,k=W;let G=null,H=!1,Se=!1;if(T){const ve=A.get(T);if(ve.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(L.FRAMEBUFFER,ve.__webglFramebuffer),Q.copy(T.viewport),j.copy(T.scissor),oe=T.scissorTest,re.viewport(Q),re.scissor(j),re.setScissorTest(oe),V=-1;return}else if(ve.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(ve.__hasExternalTextures)b.rebindTextures(T,A.get(T.texture).__webglTexture,A.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Je=T.depthTexture;if(ve.__boundDepthTexture!==Je){if(Je!==null&&A.has(Je)&&(T.width!==Je.image.width||T.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Se=!0);const Oe=A.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?G=Oe[B][W]:G=Oe[B],H=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?G=A.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?G=Oe[W]:G=Oe,Q.copy(T.viewport),j.copy(T.scissor),oe=T.scissorTest}else Q.copy(ae).multiplyScalar(ze).floor(),j.copy(Ne).multiplyScalar(ze).floor(),oe=ke;if(W!==0&&(G=H_),re.bindFramebuffer(L.FRAMEBUFFER,G)&&re.drawBuffers(T,G),re.viewport(Q),re.scissor(j),re.setScissorTest(oe),H){const ve=A.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve.__webglTexture,W)}else if(Se){const ve=B;for(let Le=0;Le<T.textures.length;Le++){const Oe=A.get(T.textures[Le]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Le,Oe.__webglTexture,W,ve)}}else if(T!==null&&W!==0){const ve=A.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ve.__webglTexture,W)}V=-1},this.readRenderTargetPixels=function(T,B,W,G,H,Se,Ae,ve=0){if(!(T&&T.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=A.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){re.bindFramebuffer(L.FRAMEBUFFER,Le);try{const Oe=T.textures[ve],Je=Oe.format,tt=Oe.type;if(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve),!Xe.textureFormatReadable(Je)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(tt)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-G&&W>=0&&W<=T.height-H&&L.readPixels(B,W,G,H,O.convert(Je),O.convert(tt),Se)}finally{const Oe=U!==null?A.get(U).__webglFramebuffer:null;re.bindFramebuffer(L.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,B,W,G,H,Se,Ae,ve=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=A.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le)if(B>=0&&B<=T.width-G&&W>=0&&W<=T.height-H){re.bindFramebuffer(L.FRAMEBUFFER,Le);const Oe=T.textures[ve],Je=Oe.format,tt=Oe.type;if(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve),!Xe.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.bufferData(L.PIXEL_PACK_BUFFER,Se.byteLength,L.STREAM_READ),L.readPixels(B,W,G,H,O.convert(Je),O.convert(tt),0);const mt=U!==null?A.get(U).__webglFramebuffer:null;re.bindFramebuffer(L.FRAMEBUFFER,mt);const Ct=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Q0(L,Ct,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Se),L.deleteBuffer(Ue),L.deleteSync(Ct),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,W=0){const G=Math.pow(2,-W),H=Math.floor(T.image.width*G),Se=Math.floor(T.image.height*G),Ae=B!==null?B.x:0,ve=B!==null?B.y:0;b.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,Ae,ve,H,Se),re.unbindTexture()};const W_=L.createFramebuffer(),X_=L.createFramebuffer();this.copyTextureToTexture=function(T,B,W=null,G=null,H=0,Se=0){let Ae,ve,Le,Oe,Je,tt,Ue,mt,Ct;const Tt=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(W!==null)Ae=W.max.x-W.min.x,ve=W.max.y-W.min.y,Le=W.isBox3?W.max.z-W.min.z:1,Oe=W.min.x,Je=W.min.y,tt=W.isBox3?W.min.z:0;else{const Rt=Math.pow(2,-H);Ae=Math.floor(Tt.width*Rt),ve=Math.floor(Tt.height*Rt),T.isDataArrayTexture?Le=Tt.depth:T.isData3DTexture?Le=Math.floor(Tt.depth*Rt):Le=1,Oe=0,Je=0,tt=0}G!==null?(Ue=G.x,mt=G.y,Ct=G.z):(Ue=0,mt=0,Ct=0);const gt=O.convert(B.format),Gt=O.convert(B.type);let Te;B.isData3DTexture?(b.setTexture3D(B,0),Te=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(b.setTexture2DArray(B,0),Te=L.TEXTURE_2D_ARRAY):(b.setTexture2D(B,0),Te=L.TEXTURE_2D),re.activeTexture(L.TEXTURE0),re.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),re.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),re.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const fn=re.getParameter(L.UNPACK_ROW_LENGTH),ot=re.getParameter(L.UNPACK_IMAGE_HEIGHT),Sn=re.getParameter(L.UNPACK_SKIP_PIXELS),zn=re.getParameter(L.UNPACK_SKIP_ROWS),gi=re.getParameter(L.UNPACK_SKIP_IMAGES);re.pixelStorei(L.UNPACK_ROW_LENGTH,Tt.width),re.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Tt.height),re.pixelStorei(L.UNPACK_SKIP_PIXELS,Oe),re.pixelStorei(L.UNPACK_SKIP_ROWS,Je),re.pixelStorei(L.UNPACK_SKIP_IMAGES,tt);const xr=T.isDataArrayTexture||T.isData3DTexture,_t=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const Rt=A.get(T),_i=A.get(B),vt=A.get(Rt.__renderTarget),vi=A.get(_i.__renderTarget);re.bindFramebuffer(L.READ_FRAMEBUFFER,vt.__webglFramebuffer),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let yr=0;yr<Le;yr++)xr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,A.get(T).__webglTexture,H,tt+yr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,A.get(B).__webglTexture,Se,Ct+yr)),L.blitFramebuffer(Oe,Je,Ae,ve,Ue,mt,Ae,ve,L.DEPTH_BUFFER_BIT,L.NEAREST);re.bindFramebuffer(L.READ_FRAMEBUFFER,null),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||A.has(T)){const Rt=A.get(T),_i=A.get(B);re.bindFramebuffer(L.READ_FRAMEBUFFER,W_),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,X_);for(let vt=0;vt<Le;vt++)xr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.__webglTexture,H,tt+vt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Rt.__webglTexture,H),_t?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_i.__webglTexture,Se,Ct+vt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_i.__webglTexture,Se),H!==0?L.blitFramebuffer(Oe,Je,Ae,ve,Ue,mt,Ae,ve,L.COLOR_BUFFER_BIT,L.NEAREST):_t?L.copyTexSubImage3D(Te,Se,Ue,mt,Ct+vt,Oe,Je,Ae,ve):L.copyTexSubImage2D(Te,Se,Ue,mt,Oe,Je,Ae,ve);re.bindFramebuffer(L.READ_FRAMEBUFFER,null),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _t?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Te,Se,Ue,mt,Ct,Ae,ve,Le,gt,Gt,Tt.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,Se,Ue,mt,Ct,Ae,ve,Le,gt,Tt.data):L.texSubImage3D(Te,Se,Ue,mt,Ct,Ae,ve,Le,gt,Gt,Tt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Se,Ue,mt,Ae,ve,gt,Gt,Tt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Se,Ue,mt,Tt.width,Tt.height,gt,Tt.data):L.texSubImage2D(L.TEXTURE_2D,Se,Ue,mt,Ae,ve,gt,Gt,Tt);re.pixelStorei(L.UNPACK_ROW_LENGTH,fn),re.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot),re.pixelStorei(L.UNPACK_SKIP_PIXELS,Sn),re.pixelStorei(L.UNPACK_SKIP_ROWS,zn),re.pixelStorei(L.UNPACK_SKIP_IMAGES,gi),Se===0&&B.generateMipmaps&&L.generateMipmap(Te),re.unbindTexture()},this.initRenderTarget=function(T){A.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),re.unbindTexture()},this.resetState=function(){D=0,k=0,U=null,re.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const qT=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Ul,AddEquation:wi,AddOperation:lm,AdditiveAnimationBlendMode:vh,AdditiveBlending:bu,AgXToneMapping:ch,AlphaFormat:gh,AlwaysCompare:ym,AlwaysDepth:Va,AlwaysStencilFunc:Cu,AmbientLight:pg,AnimationAction:bg,AnimationClip:mo,AnimationLoader:Wx,AnimationMixer:yy,AnimationObjectGroup:vy,AnimationUtils:zx,ArcCurve:Bm,ArrayCamera:yg,ArrowHelper:Wy,AttachedBindMode:wu,Audio:Sg,AudioAnalyser:ly,AudioContext:Hh,AudioListener:sy,AudioLoader:ty,AxesHelper:Xy,BackSide:nn,BasicDepthPacking:fm,BasicShadowMap:o0,BatchedMesh:Lm,BezierInterpolant:ag,Bone:Eh,BooleanKeyframeTrack:gr,Box2:Cy,Box3:$t,Box3Helper:Gy,BoxGeometry:mr,BoxHelper:ky,BufferAttribute:dt,BufferGeometry:Ze,BufferGeometryLoader:vg,ByteType:dh,Cache:$n,Camera:mc,CameraHelper:zy,CanvasTexture:sx,CapsuleGeometry:nc,CatmullRomCurve3:Vm,CineonToneMapping:ah,CircleGeometry:ic,ClampToEdgeWrapping:un,Clock:Tg,Color:be,ColorKeyframeTrack:Vh,ColorManagement:nt,Compatibility:$0,CompressedArrayTexture:ix,CompressedCubeTexture:rx,CompressedTexture:tc,CompressedTextureLoader:Xx,ConeGeometry:Ro,ConstantAlphaFactor:sm,ConstantColorFactor:im,Controls:Yy,CubeCamera:xg,CubeDepthTexture:Um,CubeReflectionMapping:Jn,CubeRefractionMapping:Pi,CubeTexture:Ao,CubeTextureLoader:qx,CubeUVReflectionMapping:hs,CubicBezierCurve:Ch,CubicBezierCurve3:zm,CubicInterpolant:sg,CullFaceBack:Mu,CullFaceFront:Gp,CullFaceFrontBack:s0,CullFaceNone:kp,Curve:Bn,CurvePath:Gm,CustomBlending:Hp,CustomToneMapping:lh,CylinderGeometry:Co,Cylindrical:Ay,Data3DTexture:$l,DataArrayTexture:Yl,DataTexture:On,DataTextureLoader:Yx,DataUtils:Iv,DecrementStencilOp:T0,DecrementWrapStencilOp:A0,DefaultLoadingManager:cg,DepthFormat:Qn,DepthStencilFormat:Ai,DepthTexture:dr,DetachedBindMode:cm,DirectionalLight:fg,DirectionalLightHelper:Vy,DiscreteInterpolant:og,DodecahedronGeometry:rc,DoubleSide:Ln,DstAlphaFactor:jp,DstColorFactor:em,DynamicCopyUsage:G0,DynamicDrawUsage:U0,DynamicReadUsage:V0,EdgesGeometry:Fm,EllipseCurve:sc,EqualCompare:_m,EqualDepth:ka,EqualStencilFunc:P0,EquirectangularReflectionMapping:zs,EquirectangularRefractionMapping:ks,Euler:Un,EventDispatcher:Fn,ExternalTexture:wh,ExtrudeGeometry:oc,FileLoader:pi,Float16BufferAttribute:Fv,Float32BufferAttribute:Ce,FloatType:en,Fog:Kl,FogExp2:Zl,FramebufferTexture:nx,FrontSide:di,Frustum:ds,FrustumArray:ec,GLBufferAttribute:Ty,GLSL1:W0,GLSL3:Ru,GreaterCompare:vm,GreaterDepth:Ha,GreaterEqualCompare:ql,GreaterEqualDepth:Ga,GreaterEqualStencilFunc:O0,GreaterStencilFunc:N0,GridHelper:Fy,Group:qr,HTMLTexture:ox,HalfFloatType:jn,HemisphereLight:ug,HemisphereLightHelper:Uy,IcosahedronGeometry:ac,ImageBitmapLoader:ey,ImageLoader:go,ImageUtils:Tm,IncrementStencilOp:E0,IncrementWrapStencilOp:w0,InstancedBufferAttribute:ss,InstancedBufferGeometry:_g,InstancedInterleavedBuffer:Ey,InstancedMesh:Pm,Int16BufferAttribute:Ov,Int32BufferAttribute:Uv,Int8BufferAttribute:Lv,IntType:Bl,InterleavedBuffer:jl,InterleavedBufferAttribute:hr,Interpolant:ms,InterpolateBezier:Au,InterpolateDiscrete:no,InterpolateLinear:Sl,InterpolateSmooth:Ra,InterpolationSamplingMode:Y0,InterpolationSamplingType:q0,InvertStencilOp:C0,KeepStencilOp:ji,KeyframeTrack:wn,LOD:Rm,LatheGeometry:lc,Layers:wo,LessCompare:gm,LessDepth:za,LessEqualCompare:Xl,LessEqualDepth:cr,LessEqualStencilFunc:L0,LessStencilFunc:I0,Light:Bi,LightProbe:gg,Line:Oi,Line3:Py,LineBasicMaterial:rn,LineCurve:Rh,LineCurve3:km,LineDashedMaterial:ig,LineLoop:Nm,LineSegments:ei,LinearFilter:yt,LinearInterpolant:Bh,LinearMipMapLinearFilter:h0,LinearMipMapNearestFilter:u0,LinearMipmapLinearFilter:Yn,LinearMipmapNearestFilter:Gs,LinearSRGBColorSpace:ro,LinearToneMapping:sh,LinearTransfer:so,Loader:dn,LoaderUtils:Du,LoadingManager:zh,LoopOnce:um,LoopPingPong:dm,LoopRepeat:hm,MOUSE:i0,Material:kt,MaterialBlending:a0,MaterialLoader:gc,MathUtils:Em,Matrix2:$h,Matrix3:qe,Matrix4:Fe,MaxEquation:Yp,Mesh:Mt,MeshBasicMaterial:mi,MeshDepthMaterial:Oh,MeshDistanceMaterial:Uh,MeshLambertMaterial:tg,MeshMatcapMaterial:ng,MeshNormalMaterial:eg,MeshPhongMaterial:jm,MeshPhysicalMaterial:Jm,MeshStandardMaterial:Dh,MeshToonMaterial:Qm,MinEquation:qp,MirroredRepeatWrapping:Qs,MixOperation:am,MultiplyBlending:Tu,MultiplyOperation:Eo,NearestFilter:Pt,NearestMipMapLinearFilter:c0,NearestMipMapNearestFilter:l0,NearestMipmapLinearFilter:Wr,NearestMipmapNearestFilter:hh,NeutralToneMapping:uh,NeverCompare:mm,NeverDepth:Ba,NeverStencilFunc:R0,NoBlending:Zn,NoColorSpace:ci,NoNormalPacking:x0,NoToneMapping:Dn,NormalAnimationBlendMode:Wl,NormalBlending:sr,NormalGAPacking:S0,NormalRGPacking:y0,NotEqualCompare:xm,NotEqualDepth:Wa,NotEqualStencilFunc:D0,NumberKeyframeTrack:fo,Object3D:rt,ObjectLoader:jx,ObjectSpaceNormalMap:pm,OctahedronGeometry:Io,OneFactor:Zp,OneMinusConstantAlphaFactor:om,OneMinusConstantColorFactor:rm,OneMinusDstAlphaFactor:Qp,OneMinusDstColorFactor:tm,OneMinusSrcAlphaFactor:Fa,OneMinusSrcColorFactor:Jp,OrthographicCamera:Lo,PCFShadowMap:Vs,PCFSoftShadowMap:rh,PMREMGenerator:Fu,Path:wl,PerspectiveCamera:Bt,Plane:li,PlaneGeometry:fs,PlaneHelper:Hy,PointLight:dg,PointLightHelper:Dy,Points:Dm,PointsMaterial:Th,PolarGridHelper:By,PolyhedronGeometry:Fi,PositionalAudio:ay,PropertyBinding:at,PropertyMixer:Mg,QuadraticBezierCurve:Ih,QuadraticBezierCurve3:Ph,Quaternion:Vt,QuaternionKeyframeTrack:Po,QuaternionLinearInterpolant:lg,R11_EAC_Format:ja,RED_GREEN_RGTC2_Format:to,RED_RGTC1_Format:vl,REVISION:bo,RG11_EAC_Format:eo,RGBADepthPacking:g0,RGBAFormat:tn,RGBAIntegerFormat:Hl,RGBA_ASTC_10x10_Format:dl,RGBA_ASTC_10x5_Format:cl,RGBA_ASTC_10x6_Format:ul,RGBA_ASTC_10x8_Format:hl,RGBA_ASTC_12x10_Format:fl,RGBA_ASTC_12x12_Format:pl,RGBA_ASTC_4x4_Format:tl,RGBA_ASTC_5x4_Format:nl,RGBA_ASTC_5x5_Format:il,RGBA_ASTC_6x5_Format:rl,RGBA_ASTC_6x6_Format:sl,RGBA_ASTC_8x5_Format:ol,RGBA_ASTC_8x6_Format:al,RGBA_ASTC_8x8_Format:ll,RGBA_BPTC_Format:ml,RGBA_ETC2_EAC_Format:Ja,RGBA_PVRTC_2BPPV1_Format:$a,RGBA_PVRTC_4BPPV1_Format:Ya,RGBA_S3TC_DXT1_Format:Ws,RGBA_S3TC_DXT3_Format:Xs,RGBA_S3TC_DXT5_Format:qs,RGBDepthPacking:_0,RGBFormat:_h,RGBIntegerFormat:d0,RGB_BPTC_SIGNED_Format:gl,RGB_BPTC_UNSIGNED_Format:_l,RGB_ETC1_Format:Za,RGB_ETC2_Format:Ka,RGB_PVRTC_2BPPV1_Format:qa,RGB_PVRTC_4BPPV1_Format:Xa,RGB_S3TC_DXT1_Format:Hs,RGDepthPacking:v0,RGFormat:Li,RGIntegerFormat:Gl,RawShaderMaterial:Nh,Ray:Di,Raycaster:Eg,RectAreaLight:mg,RedFormat:kl,RedIntegerFormat:To,ReinhardToneMapping:oh,RenderTarget:yh,RenderTarget3D:Sy,RepeatWrapping:js,ReplaceStencilOp:b0,ReverseSubtractEquation:Xp,RingGeometry:cc,SIGNED_R11_EAC_Format:Qa,SIGNED_RED_GREEN_RGTC2_Format:yl,SIGNED_RED_RGTC1_Format:xl,SIGNED_RG11_EAC_Format:el,SRGBColorSpace:ln,SRGBTransfer:ht,Scene:Jl,ShaderChunk:et,ShaderLib:Pn,ShaderMaterial:Tn,ShadowMaterial:$m,Shape:ar,ShapeGeometry:uc,ShapePath:qy,ShapeUtils:Nn,ShortType:fh,Skeleton:Ql,SkeletonHelper:Ny,SkinnedMesh:Im,Source:Ci,Sphere:zt,SphereGeometry:ps,Spherical:wy,SphericalHarmonics3:Gh,SplineCurve:Lh,SpotLight:hg,SpotLightHelper:Ly,Sprite:Cm,SpriteMaterial:bh,SrcAlphaFactor:Ua,SrcAlphaSaturateFactor:nm,SrcColorFactor:Kp,StaticCopyUsage:k0,StaticDrawUsage:oo,StaticReadUsage:B0,StereoCamera:ny,StreamCopyUsage:H0,StreamDrawUsage:F0,StreamReadUsage:z0,StringKeyframeTrack:_r,SubtractEquation:Wp,SubtractiveBlending:Eu,TOUCH:r0,TangentSpaceNormalMap:fi,TetrahedronGeometry:hc,Texture:Et,TextureLoader:$x,TextureUtils:jy,Timer:Wh,TimestampQuery:X0,TorusGeometry:dc,TorusKnotGeometry:fc,Triangle:Yt,TriangleFanDrawMode:m0,TriangleStripDrawMode:p0,TrianglesDrawMode:f0,TubeGeometry:pc,UVMapping:Fl,Uint16BufferAttribute:Sh,Uint32BufferAttribute:Mh,Uint8BufferAttribute:Nv,Uint8ClampedBufferAttribute:Dv,Uniform:Yh,UniformsGroup:by,UniformsLib:ge,UniformsUtils:Km,UnsignedByteType:cn,UnsignedInt101111Type:mh,UnsignedInt248Type:is,UnsignedInt5999Type:ph,UnsignedIntType:En,UnsignedShort4444Type:Vl,UnsignedShort5551Type:zl,UnsignedShortType:ns,VSMShadowMap:Hr,Vector2:K,Vector3:R,Vector4:ft,VectorKeyframeTrack:po,VideoFrameTexture:tx,VideoTexture:Om,WebGL3DRenderTarget:Sv,WebGLArrayRenderTarget:yv,WebGLCoordinateSystem:vn,WebGLCubeRenderTarget:Zh,WebGLRenderTarget:yn,WebGLRenderer:Kh,WebGLUtils:Ng,WebGPUCoordinateSystem:ur,WebXRController:Ia,WireframeGeometry:Ym,WrapAroundEnding:io,ZeroCurvatureEnding:nr,ZeroFactor:$p,ZeroSlopeEnding:ir,ZeroStencilOp:M0,createCanvasElement:Mm,error:Ie,getConsoleFunction:j0,log:lo,setConsoleFunction:J0,warn:fe,warnOnce:Ml},Symbol.toStringTag,{value:"Module"}));function ls(i,e){return nh()?(Y_(i,e),!0):!1}function Jr(){const i=new Set,e=s=>{i.delete(s)};return{on:s=>{i.add(s);const o=()=>e(s);return ls(o),{off:o}},off:e,trigger:(...s)=>Promise.all(Array.from(i).map(o=>o(...s))),clear:()=>{i.clear()}}}const jr=new WeakMap,Og=(...i)=>{var e;const t=i[0],n=(e=Qr())===null||e===void 0?void 0:e.proxy,r=n??nh();if(r==null&&!Np())throw new Error("injectLocal must be called in setup");return r&&jr.has(r)&&t in jr.get(r)?jr.get(r)[t]:q_(...i)};function YT(i,e){var t;const n=(t=Qr())===null||t===void 0?void 0:t.proxy,r=n??nh();if(r==null)throw new Error("provideLocal must be called in setup");jr.has(r)||jr.set(r,Object.create(null));const s=jr.get(r);return s[i]=e,Ca(i,e)}function $T(i,e){const t=e?.injectionKey||Symbol(i.name||"InjectionState"),n=e?.defaultValue;return[(...o)=>{const a=i(...o);return YT(t,a),a},()=>Og(t,n)]}const Al=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ZT=Object.prototype.toString,KT=i=>ZT.call(i)==="[object Object]",Cl=()=>{};function JT(i,e){function t(...n){return new Promise((r,s)=>{Promise.resolve(i(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})).then(r).catch(s)})}return t}function jT(i,e={}){let t,n,r=Cl;const s=l=>{clearTimeout(l),r(),r=Cl};let o;return l=>{const c=ct(i),u=ct(e.maxWait);return t&&s(t),c<=0||u!==void 0&&u<=0?(n&&(s(n),n=void 0),Promise.resolve(l())):new Promise((h,d)=>{r=e.rejectOnCancel?d:h,o=l,u&&!n&&(n=setTimeout(()=>{t&&s(t),n=void 0,h(o())},u)),t=setTimeout(()=>{n&&s(n),n=void 0,h(l())},c)})}}function QT(i,e=!1,t="Timeout"){return new Promise((n,r)=>{e?setTimeout(r,i,t):setTimeout(n,i)})}function np(i){return i.endsWith("rem")?Number.parseFloat(i)*16:Number.parseFloat(i)}function La(i){return Array.isArray(i)?i:[i]}function ew(i){return Qr()}function tw(i,e=200,t={}){return JT(jT(e,t),i)}function ip(i,e=200,t={}){const n=bn(ct(i)),r=tw(()=>{n.value=i.value},e,t);return Kn(i,()=>r()),Mo(n)}function Ug(i,e=!0,t){ew()?Ol(i,t):e?i():Dp(i)}function rp(i,e=1e3,t={}){const{immediate:n=!0,immediateCallback:r=!1}=t;let s=null;const o=Dt(!1);function a(){s&&(clearInterval(s),s=null)}function l(){o.value=!1,a()}function c(){const u=ct(e);u<=0||(o.value=!0,r&&i(),a(),o.value&&(s=setInterval(i,u)))}return n&&Al&&c(),(Zr(e)||typeof e=="function")&&ls(Kn(e,()=>{o.value&&Al&&c()})),ls(l),{isActive:Mo(o),pause:l,resume:c}}function nw(i,e,t={}){const{immediate:n=!0,immediateCallback:r=!1}=t,s=Dt(!1);let o;function a(){o&&(clearTimeout(o),o=void 0)}function l(){s.value=!1,a()}function c(...u){r&&i(),a(),s.value=!0,o=setTimeout(()=>{s.value=!1,o=void 0,i(...u)},ct(e))}return n&&(s.value=!0,Al&&c()),ls(l),{isPending:Mo(s),start:c,stop:l}}function iw(i=1e3,e={}){const{controls:t=!1,callback:n}=e,r=nw(n??Cl,i,e),s=hn(()=>!r.isPending.value);return t?{ready:s,...r}:s}function Fg(i,e,t){return Kn(i,e,{...t,immediate:!0})}const vr=Al?window:void 0;function Ii(i){var e;const t=ct(i);return(e=t?.$el)!==null&&e!==void 0?e:t}function zu(...i){const e=(n,r,s,o)=>(n.addEventListener(r,s,o),()=>n.removeEventListener(r,s,o)),t=hn(()=>{const n=La(ct(i[0])).filter(r=>r!=null);return n.every(r=>typeof r!="string")?n:void 0});return Fg(()=>{var n,r;return[(n=(r=t.value)===null||r===void 0?void 0:r.map(s=>Ii(s)))!==null&&n!==void 0?n:[vr].filter(s=>s!=null),La(ct(t.value?i[1]:i[0])),La(ih(t.value?i[2]:i[1])),ct(t.value?i[3]:i[2])]},([n,r,s,o],a,l)=>{if(!n?.length||!r?.length||!s?.length)return;const c=KT(o)?{...o}:o,u=n.flatMap(h=>r.flatMap(d=>s.map(f=>e(h,d,f,c))));l(()=>{u.forEach(h=>h())})},{flush:"post"})}function rw(){const i=Dt(!1),e=Qr();return e&&Ol(()=>{i.value=!0},e),i}function Jh(i){const e=rw();return hn(()=>(e.value,!!i()))}function jh(i,e={}){const{immediate:t=!0,fpsLimit:n=null,window:r=vr,once:s=!1}=e,o=Dt(!1),a=hn(()=>{const f=ct(n);return f?1e3/f:null});let l=0,c=null;function u(f){if(!o.value||!r)return;l||(l=f);const p=f-l;if(a.value&&p<a.value){c=r.requestAnimationFrame(u);return}if(l=f,i({delta:p,timestamp:f}),s){o.value=!1,c=null;return}c=r.requestAnimationFrame(u)}function h(){!o.value&&r&&(o.value=!0,l=0,c=r.requestAnimationFrame(u))}function d(){o.value=!1,c!=null&&r&&(r.cancelAnimationFrame(c),c=null)}return t&&h(),ls(d),{isActive:Mo(o),pause:d,resume:h}}const sw=Symbol("vueuse-ssr-width");function ow(){const i=Np()?Og(sw,null):null;return typeof i=="number"?i:void 0}function Bg(i,e={}){const{window:t=vr,ssrWidth:n=ow()}=e,r=Jh(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function"),s=Dt(typeof n=="number"),o=Dt(),a=Dt(!1),l=c=>{a.value=c.matches};return qn(()=>{if(s.value){s.value=!r.value,a.value=ct(i).split(",").some(c=>{const u=c.includes("not all"),h=c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),d=c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let f=!!(h||d);return h&&f&&(f=n>=np(h[1])),d&&f&&(f=n<=np(d[1])),u?!f:f});return}r.value&&(o.value=t.matchMedia(ct(i)),a.value=o.value.matches)}),zu(o,"change",l,{passive:!0}),hn(()=>a.value)}function aw(i={}){const{window:e=vr}=i,t=Dt(1),n=Bg(()=>`(resolution: ${t.value}dppx)`,i);let r=Cl;return e&&(r=Fg(n,()=>t.value=e.devicePixelRatio)),{pixelRatio:Mo(t),stop:r}}function lw(i,e,t={}){const{window:n=vr,...r}=t;let s;const o=Jh(()=>n&&"ResizeObserver"in n),a=()=>{s&&(s.disconnect(),s=void 0)},l=Kn(hn(()=>{const u=ct(i);return Array.isArray(u)?u.map(h=>Ii(h)):[Ii(u)]}),u=>{if(a(),o.value&&n){s=new ResizeObserver(e);for(const h of u)h&&s.observe(h,r)}},{immediate:!0,flush:"post"}),c=()=>{a(),l()};return ls(c),{isSupported:o,stop:c}}function cw(i,e={width:0,height:0},t={}){const{window:n=vr,box:r="content-box"}=t,s=hn(()=>{var h;return(h=Ii(i))===null||h===void 0||(h=h.namespaceURI)===null||h===void 0?void 0:h.includes("svg")}),o=Dt(e.width),a=Dt(e.height),{stop:l}=lw(i,([h])=>{const d=r==="border-box"?h.borderBoxSize:r==="content-box"?h.contentBoxSize:h.devicePixelContentBoxSize;if(n&&s.value){const f=Ii(i);if(f){const p=f.getBoundingClientRect();o.value=p.width,a.value=p.height}}else if(d){const f=La(d);o.value=f.reduce((p,{inlineSize:_})=>p+_,0),a.value=f.reduce((p,{blockSize:_})=>p+_,0)}else o.value=h.contentRect.width,a.value=h.contentRect.height},t);Ug(()=>{const h=Ii(i);h&&(o.value="offsetWidth"in h?h.offsetWidth:e.width,a.value="offsetHeight"in h?h.offsetHeight:e.height)});const c=Kn(()=>Ii(i),h=>{o.value=h?e.width:0,a.value=h?e.height:0});function u(){l(),c()}return{width:o,height:a,stop:u}}function uw(i){var e;const t=Dt(0);if(typeof performance>"u")return t;const n=(e=i?.every)!==null&&e!==void 0?e:10;let r=performance.now(),s=0;return jh(()=>{if(s+=1,s>=n){const o=performance.now(),a=o-r;t.value=Math.round(1e3/(a/s)),r=o,s=0}}),t}function hw(i){if("interval"in i||"immediate"in i||"immediateCallback"in i){const{interval:e=1e3,immediate:t,immediateCallback:n}=i;return r=>rp(r,e,{immediate:t,immediateCallback:n})}return rp}function dw(i={}){const e=Dt(),t=Jh(()=>typeof performance<"u"&&"memory"in performance);if(t.value){const{scheduler:n=hw}=i;n(()=>{e.value=performance.memory})}return{isSupported:t,memory:e}}function fw(i={}){const{window:e=vr,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:n=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:s=!0,type:o="inner"}=i,a=Dt(t),l=Dt(n),c=()=>{if(e)if(o==="outer")a.value=e.outerWidth,l.value=e.outerHeight;else if(o==="visual"&&e.visualViewport){const{width:h,height:d,scale:f}=e.visualViewport;a.value=Math.round(h*f),l.value=Math.round(d*f)}else s?(a.value=e.innerWidth,l.value=e.innerHeight):(a.value=e.document.documentElement.clientWidth,l.value=e.document.documentElement.clientHeight)};c(),Ug(c);const u={passive:!0};return zu("resize",c,u),e&&o==="visual"&&e.visualViewport&&zu(e.visualViewport,"resize",c,u),r&&Kn(Bg("(orientation: portrait)"),()=>c()),{width:a,height:l}}function sp(i){var e;const t=((e=i?.replace(/([A-Z])+/g,pw))==null?void 0:e.split(/(?=[A-Z])|[\.\-\s_]/).map(n=>n.toLowerCase()))??[];return t.length===0?"":t.length===1?t[0]:t.reduce((n,r)=>`${n}${r.charAt(0).toUpperCase()}${r.slice(1)}`)}function pw(i){if(!i||i.length===0)return"";const e=i.toLowerCase();return e.substring(0,1).toUpperCase()+e.substring(1,e.length)}new Map(Object.entries({Æ:"Ae",Ð:"D",Ø:"O",Þ:"Th",ß:"ss",æ:"ae",ð:"d",ø:"o",þ:"th",Đ:"D",đ:"d",Ħ:"H",ħ:"h",ı:"i",Ĳ:"IJ",ĳ:"ij",ĸ:"k",Ŀ:"L",ŀ:"l",Ł:"L",ł:"l",ŉ:"'n",Ŋ:"N",ŋ:"n",Œ:"Oe",œ:"oe",Ŧ:"T",ŧ:"t",ſ:"s"}));function Vg(i,e){if(Object.is(i,e))return!0;if(i instanceof Date&&e instanceof Date)return i.getTime()===e.getTime();if(i instanceof RegExp&&e instanceof RegExp)return i.toString()===e.toString();if(typeof i!="object"||i===null||typeof e!="object"||e===null)return!1;const t=Reflect.ownKeys(i),n=Reflect.ownKeys(e);if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(!Reflect.has(e,t[r])||!Vg(i[t[r]],e[t[r]]))return!1;return!0}function tr(i){return typeof i=="function"}function zg(i){return typeof i=="number"&&!Number.isNaN(i)}function Qh(i){return mw(i,"[object Object]")}function ed(i){return typeof i=="string"}function mw(i,e){return Object.prototype.toString.call(i)===e}function ku(i){return typeof i>"u"}class gw{nativeEvent;NONE=0;CAPTURING_PHASE=1;AT_TARGET=2;BUBBLING_PHASE=3;relatedTarget=null;get altKey(){return this.getFromNative("altKey",!1)}get button(){return this.getFromNative("button",0)}get buttons(){return this.getFromNative("buttons",0)}get clientX(){return this.getFromNative("clientX",0)}get clientY(){return this.getFromNative("clientY",0)}get ctrlKey(){return this.getFromNative("ctrlKey",!1)}get layerX(){return this.getFromNative("layerX",0)}get layerY(){return this.getFromNative("layerY",0)}get metaKey(){return this.getFromNative("metaKey",!1)}get movementX(){return this.getFromNative("movementX",0)}get movementY(){return this.getFromNative("movementY",0)}get offsetX(){return this.getFromNative("offsetX",0)}get offsetY(){return this.getFromNative("offsetY",0)}get pageX(){return this.getFromNative("pageX",0)}get pageY(){return this.getFromNative("pageY",0)}get screenX(){return this.getFromNative("screenX",0)}get screenY(){return this.getFromNative("screenY",0)}get shiftKey(){return this.getFromNative("shiftKey",!1)}get x(){return this.getFromNative("x",0)}get y(){return this.getFromNative("y",0)}get detail(){return this.getFromNative("detail",0)}get view(){return this.getFromNative("view",null)}get which(){return this.getFromNative("which",0)}get cancelBubble(){return this.getFromNative("cancelBubble",!1)}get composed(){return this.getFromNative("composed",!1)}get eventPhase(){return this.getFromNative("eventPhase",0)}get isTrusted(){return this.getFromNative("isTrusted",!1)}get returnValue(){return this.getFromNative("returnValue",!1)}get timeStamp(){return this.getFromNative("timeStamp",0)}get cancelable(){return this.getFromNative("cancelable",!1)}get defaultPrevented(){return this.getFromNative("defaultPrevented",!1)}constructor(e){this.nativeEvent=e}getFromNative(e,t){return e in this.nativeEvent?this.nativeEvent[e]:t}}const pu=new R;class Jt extends gw{type;bubbles;internalPointer;intersection;camera;currentObject;object;propagationState;get pointerId(){return this.internalPointer.id}get pointerType(){return this.internalPointer.type}get pointerState(){return this.internalPointer.state}get distance(){return this.intersection.distance}get distanceToRay(){return this.intersection.distanceToRay}get point(){return this.intersection.point}get index(){return this.intersection.index}get face(){return this.intersection.face}get faceIndex(){return this.intersection.faceIndex}get uv(){return this.intersection.uv}get uv1(){return this.intersection.uv1}get normal(){return this.intersection.normal}get instanceId(){return this.intersection.instanceId}get pointOnLine(){return this.intersection.pointOnLine}get batchId(){return this.intersection.batchId}get pointerPosition(){return this.intersection.pointerPosition}get pointerQuaternion(){return this.intersection.pointerQuaternion}get pointOnFace(){return this.intersection.pointOnFace}get localPoint(){return this.intersection.localPoint}get details(){return this.intersection.details}get target(){return this.object}get currentTarget(){return this.currentObject}get eventObject(){return this.currentObject}get srcElement(){return this.currentObject}_pointer;get pointer(){return this._pointer==null&&(pu.copy(this.intersection.point).project(this.camera),this._pointer=new K(pu.x,pu.y)),this._pointer}_ray;get ray(){if(this._ray!=null)return this._ray;switch(this.intersection.details.type){case"screen-ray":case"ray":case"sphere":return this._ray=new Di(this.intersection.pointerPosition,new R(0,0,-1).applyQuaternion(this.intersection.pointerQuaternion));case"lines":return this._ray=new Di(this.intersection.details.line.start,this.intersection.details.line.end.clone().sub(this.intersection.details.line.start).normalize())}}_intersections=[];get intersections(){return this._intersections==null&&(this._intersections=[{...this.intersection,eventObject:this.currentObject}]),this._intersections}_unprojectedPoint;get unprojectedPoint(){if(this._unprojectedPoint==null){const e=this.pointer;this._unprojectedPoint=new R(e.x,e.y,0).unproject(this.camera)}return this._unprojectedPoint}get stopped(){return this.propagationState.stoppedImmediate||this.propagationState.stopped}get stoppedImmediate(){return this.propagationState.stoppedImmediate}get delta(){throw new Error("not supported")}constructor(e,t,n,r,s,o,a=s.object,l=a,c={stopped:!t,stoppedImmediate:!1}){super(n),this.type=e,this.bubbles=t,this.internalPointer=r,this.intersection=s,this.camera=o,this.currentObject=a,this.object=l,this.propagationState=c}stopPropagation(){this.propagationState.stopped=!0}stopImmediatePropagation(){this.propagationState.stoppedImmediate=!0}retarget(e){return new Jt(this.type,this.bubbles,this.nativeEvent,this.internalPointer,this.intersection,this.camera,e,this.target,this.propagationState)}}class Rl extends Jt{get deltaX(){return this.nativeEvent.deltaX}get deltaY(){return this.nativeEvent.deltaY}get deltaZ(){return this.nativeEvent.deltaZ}constructor(e,t,n,r,s,o){super("wheel",!0,e,t,n,r,s,o)}retarget(e){return new Rl(this.nativeEvent,this.internalPointer,this.intersection,this.camera,e,this.target)}}function on(i){kg(i,i.currentObject)}function kg(i,e){if(e==null)return;const t=vw(e,i.type);if(t!=null&&t.length>0){const n=i.retarget(e),r=t.length;for(let s=0;s<r&&!n.stoppedImmediate;s++)t[s](n)}i.stopped||kg(i,e.parent)}const Gg={click:"onClick",contextmenu:"onContextMenu",dblclick:"onDoubleClick",pointercancel:"onPointerCancel",pointerdown:"onPointerDown",pointerenter:"onPointerEnter",pointerleave:"onPointerLeave",pointermove:"onPointerMove",pointerout:"onPointerOut",pointerover:"onPointerOver",pointerup:"onPointerUp",wheel:"onWheel"},_w=Object.keys(Gg);function vw(i,e){if(i._listeners!=null&&e in i._listeners)return i._listeners[e];let t;if(i.isVoidObject&&e==="click"&&i.parent?.__r3f!=null&&(t=i.parent.__r3f.root.getState().onPointerMissed),i.__r3f!=null&&(t=i.__r3f.handlers[Gg[e]]),t!=null)return[t]}const xw=1e10,yw=new ps(xw),op=new Map;function Hg(i){let e=op.get(i);return e==null&&(e=new Mt(yw),e.isVoidObject=!0,e.parent=i,e.pointerEventsOrder=-1/0,op.set(i,e)),e}function Sw(i,e,t){const n=e.normal??e.face?.normal;return n==null?!1:(i.setFromNormalAndCoplanarPoint(n,e.localPoint),i.applyMatrix4(t),!0)}function Mw(i,e,t){if(e==="none"||e==="listener"&&!i)return!1;if(t==="all")return!0;if(typeof t=="function")return({id:s,type:o,state:a})=>t(s,o,a);let n,r;return"deny"in t?(r=!0,n=t.deny):(r=!1,n=t.allow),Array.isArray(n)?s=>ap(n.includes(s.type),r):s=>ap(n===s.type,r)}function ap(i,e){return e?!i:i}function Wg(i,e,t,n=!1,r,s,o){const a=n||bw(i,e),l=e.pointerEvents??r,c=l??e.defaultPointerEvents??"listener",u=e.pointerEventsType??s??"all",h=e.pointerEventsOrder??o??0,d=Mw(a,c,u),f=t.length;if(f===1)(d===!0||typeof d=="function"&&d(t[0]))&&mu(t[0],e,c,u,h);else if(d===!0)for(let g=0;g<f;g++)mu(t[g],e,c,u,h);else if(typeof d=="function")for(let g=0;g<f;g++){const m=t[g];d(m)&&mu(m,e,c,u,h)}if(e.children.length===0||e.intersectChildren===!1)return;const p=e.interactableDescendants??e.children,_=p.length;for(let g=0;g<_;g++)Wg(i,p[g],t,a,l,u,h)}function bw(i,e){if(e.ancestorsHaveListeners||i==="pointer"&&e.ancestorsHavePointerListeners||i==="wheel"&&e.ancestorsHaveWheelListeners||e.__r3f!=null&&e.__r3f?.eventCount>0&&(i==="wheel"&&e.__r3f.handlers.onWheel!=null||i==="pointer"&&Object.keys(e.__r3f.handlers).some(r=>r!="onWheel")))return!0;if(e._listeners==null)return!1;if(i==="wheel"){const r=e._listeners.wheel;return r!=null&&r.length>0}const t=Object.entries(e._listeners),n=t.length;for(let r=0;r<n;r++){const s=t[r];if(s[0]!=="wheel"&&_w.includes(s[0])&&s[1]!=null&&s[1].length>0)return!0}return!1}function mu({intersector:i,options:e},t,n,r,s){e.filter?.(t,n,r,s)!==!1&&i.executeIntersection(t,s)}function Ew(i,e,{customSort:t=Tw}={},n){let r,s,o;const a=i.length;for(let l=0;l<a;l++){const c=i[l],u=e?.[l];(r==null||t(c,u,r,s)<0)&&(o=l,r=c,s=u)}return o}function Tw(i,e=0,t,n=0){return e!=n?n-e:i.distance-t.distance}const lp=1e7;function ww(i,e,t,n,r,s=0){const o=e.direction.clone().multiplyScalar(lp),a=lp;return{distance:a+s,object:Hg(i),point:o,normal:e.origin.clone().sub(o).normalize(),details:t(o,a),pointerPosition:n,pointerQuaternion:r,pointOnFace:o,localPoint:o}}function Aw(i,e,t){for(;t>0;)i.push(e),--t}const gu=Symbol("buttonsDownTime"),Cw=Symbol("buttonsClickTime");globalThis.pointerEventspointerMap??=new Map;rt.prototype.setPointerCapture=function(i){td(i)?.setCapture(this)};rt.prototype.releasePointerCapture=function(i){const e=td(i);e==null||!e.hasCaptured(this)||e.setCapture(void 0)};rt.prototype.hasPointerCapture=function(i){return td(i)?.hasCaptured(this)??!1};function td(i){return globalThis.pointerEventspointerMap?.get(i)}class Rw{id;type;state;intersector;getCamera;onMoveCommited;parentSetPointerCapture;parentReleasePointerCapture;options;prevIntersection;intersection;prevEnabled=!0;enabled=!0;wheelIntersection;pointerEntered=[];pointerEnteredHelper=[];pointerCapture;buttonsDownTime=new Map;buttonsDown=new Set;wasMoved=!1;onFirstMove=[];constructor(e,t,n,r,s,o,a,l,c={}){this.id=e,this.type=t,this.state=n,this.intersector=r,this.getCamera=s,this.onMoveCommited=o,this.parentSetPointerCapture=a,this.parentReleasePointerCapture=l,this.options=c,globalThis.pointerEventspointerMap?.set(e,this)}getPointerCapture(){return this.pointerCapture}hasCaptured(e){return this.pointerCapture?.object===e}setCapture(e){this.pointerCapture?.object!==e&&(this.clearPointerCapture(),e!=null&&this.intersection!=null&&(this.pointerCapture={object:e,intersection:this.intersection},this.parentSetPointerCapture?.()))}getButtonsDown(){return this.buttonsDown}getIntersection(){return this.intersection}getEnabled(){return this.enabled}setEnabled(e,t,n=!0){this.enabled!==e&&(!e&&this.pointerCapture!=null&&this.clearPointerCapture(),this.enabled=e,n&&this.commit(t,!1))}computeIntersection(e,t,n){return this.pointerCapture!=null?this.intersector.intersectPointerCapture(this.pointerCapture,n):(this.intersector.startIntersection(n),Wg(e,t,[this]),this.intersector.finalizeIntersection(t))}setIntersection(e){this.intersection=e}commit(e,t){const n=this.getCamera(),r=this.prevEnabled?this.prevIntersection:void 0,s=this.enabled?this.intersection:void 0;r!=null&&r.object!=s?.object&&on(new Jt("pointerout",!0,e,this,r,n));const o=this.pointerEntered;this.pointerEntered=[],this.pointerEnteredHelper.length=0,Xg(s?.object,this.pointerEntered,o,this.pointerEnteredHelper);const a=o.length;for(let l=0;l<a;l++){const c=o[l];on(new Jt("pointerleave",!1,e,this,r,n,c))}s!=null&&r?.object!=s.object&&on(new Jt("pointerover",!0,e,this,s,n));for(let l=this.pointerEnteredHelper.length-1;l>=0;l--){const c=this.pointerEnteredHelper[l];on(new Jt("pointerenter",!1,e,this,s,n,c))}if(t&&s!=null&&on(new Jt("pointermove",!0,e,this,s,n)),this.prevIntersection=this.intersection,this.prevEnabled=this.enabled,!this.wasMoved&&this.intersector.isReady()){this.wasMoved=!0;const l=this.onFirstMove.length;for(let c=0;c<l;c++)this.onFirstMove[c](n);this.onFirstMove.length=0}this.onMoveCommited?.(this)}move(e,t){this.intersection=this.computeIntersection("pointer",e,t),this.commit(t,!0)}over(e,t){this.wasMoved||(this.intersection=this.computeIntersection("pointer",e,t),this.commit(t,!1))}emitMove(e){this.intersection!=null&&on(new Jt("pointermove",!0,e,this,this.intersection,this.getCamera()))}down(e){if(this.buttonsDown.add(e.button),!this.enabled)return;if(!this.wasMoved){this.onFirstMove.push(this.down.bind(this,e));return}if(this.intersection==null)return;on(new Jt("pointerdown",!0,e,this,this.intersection,this.getCamera()));const{object:t}=this.intersection;t[gu]??=new Map,t[gu].set(e.button,e.timeStamp),this.buttonsDownTime.set(e.button,e.timeStamp)}up(e){if(this.buttonsDown.delete(e.button),!this.enabled)return;if(!this.wasMoved){this.onFirstMove.push(this.up.bind(this,e));return}if(this.intersection==null)return;const{clickThesholdMs:t,contextMenuButton:n=2,dblClickThresholdMs:r=500,clickThresholdMs:s=t??300}=this.options;this.clearPointerCapture();const o=Iw(this.buttonsDownTime,this.intersection.object[gu],e.button,e.timeStamp,s),a=this.getCamera();if(o&&e.button===n&&on(new Jt("contextmenu",!0,e,this,this.intersection,a)),on(new Jt("pointerup",!0,e,this,this.intersection,a)),!o||e.button===n)return;on(new Jt("click",!0,e,this,this.intersection,a));const{object:l}=this.intersection,c=l[Cw]??=new Map,u=c.get(e.button);if(u==null||e.timeStamp-u>r){c.set(e.button,e.timeStamp);return}on(new Jt("dblclick",!0,e,this,this.intersection,a)),c.delete(e.button)}cancel(e){this.buttonsDown.clear(),this.buttonsDownTime.clear(),this.clearPointerCapture(),this.onFirstMove.length=0,!(!this.enabled||!this.wasMoved||this.intersection==null)&&on(new Jt("pointercancel",!0,e,this,this.intersection,this.getCamera()))}wheel(e,t,n=!1){if(!this.enabled)return;if(!this.wasMoved&&n){this.onFirstMove.push(this.wheel.bind(this,e,t,n));return}n||(this.wheelIntersection=this.computeIntersection("wheel",e,t));const r=n?this.intersection:this.wheelIntersection;r!=null&&on(new Rl(t,this,r,this.getCamera()))}emitWheel(e,t=!1){if(!this.enabled)return;if(!this.wasMoved&&t){this.onFirstMove.push(this.emitWheel.bind(this,e,t));return}const n=t?this.intersection:this.wheelIntersection;n!=null&&on(new Rl(e,this,n,this.getCamera()))}exit(e){(this.buttonsDown.size>0||this.pointerCapture!=null)&&this.cancel(e),this.wasMoved&&(this.intersection=void 0,this.commit(e,!1)),this.onFirstMove.length=0,this.wasMoved=!1}clearPointerCapture(){this.pointerCapture!=null&&(this.parentReleasePointerCapture?.(),this.pointerCapture=void 0)}}function Xg(i,e,t,n){if(i==null)return;const r=t.indexOf(i);r!=-1?t.splice(r,1):n.push(i),e.push(i),Xg(i.parent,e,t,n)}function Iw(i,e,t,n,r){if(e==null)return!1;const s=e.get(t);return!(s==null||n-s>r||s!=i.get(t))}const Ds=new Yt,_u=new Yt,cp=new K,up=new K,hp=new K,vu=new R,Pw=new Fe,wa=new R;function Lw(i,e,t){wa.copy(e).applyMatrix4(Pw.copy(t.matrixWorld).invert());const n=t.geometry.attributes.uv;if(n==null||!(n instanceof dt))return!1;let r;return Nw(t,(s,o,a)=>{t.getVertexPosition(s,Ds.a),t.getVertexPosition(o,Ds.b),t.getVertexPosition(a,Ds.c);const l=Ds.closestPointToPoint(wa,vu).distanceTo(wa);r!=null&&l>=r||(r=l,_u.copy(Ds),cp.fromBufferAttribute(n,s),up.fromBufferAttribute(n,o),hp.fromBufferAttribute(n,a))}),r==null?!1:(_u.closestPointToPoint(wa,vu),_u.getInterpolation(vu,cp,up,hp,i),!0)}function Nw(i,e){const t=i.geometry.drawRange;if(i.geometry.index!=null){const o=i.geometry.index,a=Math.max(0,t.start),l=Math.min(o.count,t.start+t.count);for(let c=a;c<l;c+=3)e(o.getX(c),o.getX(c+1),o.getX(c+2));return}const n=i.geometry.attributes.position;if(n==null)return;const r=Math.max(0,t.start),s=Math.min(n.count,t.start+t.count);for(let o=r;o<s;o+=3)e(o,o+1,o+2)}new Fe;const dp=new Fe,Dw=new R,fp=new K,Ow=new R;class Uw{prepareTransformation;options;raycaster=new Eg;cameraQuaternion=new Vt;fromPosition=new R;fromQuaternion=new Vt;coords=new K;viewPlane=new li;intersects=[];pointerEventsOrders=[];constructor(e,t){this.prepareTransformation=e,this.options=t}isReady(){return!0}intersectPointerCapture({intersection:e,object:t},n){const r=e.details;if(r.type!="screen-ray")throw new Error(`unable to process a pointer capture of type "${e.details.type}" with a camera ray intersector`);if(!this.startIntersection(n))return e;this.viewPlane.constant-=r.distanceViewPlane;const s=this.raycaster.ray.intersectPlane(this.viewPlane,new R);if(s==null)return e;e.object.updateWorldMatrix(!0,!1),Sw(this.viewPlane,e,e.object.matrixWorld);let o=e.uv;return e.object instanceof Mt&&Lw(fp,s,e.object)&&(o=fp.clone()),{...e,details:{...r,direction:this.raycaster.ray.direction.clone(),screenPoint:this.coords.clone()},uv:o,object:t,point:s,pointOnFace:s,pointerPosition:this.raycaster.ray.origin.clone(),pointerQuaternion:this.cameraQuaternion.clone()}}startIntersection(e){const t=this.prepareTransformation(e,this.coords);return t==null?!1:(t.updateWorldMatrix(!0,!1),t.matrixWorld.decompose(this.fromPosition,this.fromQuaternion,Dw),this.raycaster.setFromCamera(this.coords,t),this.viewPlane.setFromNormalAndCoplanarPoint(t.getWorldDirection(Ow),this.raycaster.ray.origin),!0)}executeIntersection(e,t){const n=this.intersects.length;e.raycast(this.raycaster,this.intersects),Aw(this.pointerEventsOrders,t,this.intersects.length-n)}finalizeIntersection(e){const t=this.fromPosition.clone(),n=this.cameraQuaternion.clone(),r=this.raycaster.ray.direction.clone(),s=Ew(this.intersects,this.pointerEventsOrders,this.options),o=s==null?void 0:this.intersects[s];return this.intersects.length=0,this.pointerEventsOrders.length=0,o==null?ww(e,this.raycaster.ray,(a,l)=>({type:"screen-ray",distanceViewPlane:l,screenPoint:this.coords.clone(),direction:r}),t,n):(o.object.updateWorldMatrix(!0,!1),dp.copy(o.object.matrixWorld).invert(),Object.assign(o,{details:{type:"screen-ray",distanceViewPlane:this.viewPlane.distanceToPoint(o.point),screenPoint:this.coords.clone(),direction:r},pointOnFace:o.point,pointerPosition:t,pointerQuaternion:n,localPoint:o.point.clone().applyMatrix4(dp)}))}}new Fe;new Fe;let Fw=23412;function Bw(){return Fw++}function Vw(i,e,t){if(!(e instanceof globalThis.MouseEvent))return t.set(0,0);const{width:n,height:r,top:s,left:o}=i.getBoundingClientRect(),a=e.clientX-o,l=e.clientY-s;return t.set(a/n*2-1,-(l/r)*2+1)}function zw(i,e,t,n){return kw(i,typeof e=="function"?e:()=>e,t,Vw.bind(null,i),i.setPointerCapture.bind(i),r=>{i.hasPointerCapture(r)&&i.releasePointerCapture(r)},{pointerTypePrefix:"screen-",...n})}function kw(i,e,t,n,r,s,o={}){const a=o?.forwardPointerCapture??!0,l=new Map,c=o.pointerTypePrefix??"forward-",u=(S,E)=>{let I=l.get(S.pointerId);return I!=null||(I=new Rw(Bw(),`${c}${S.pointerType}`,S.pointerState,new Uw((P,N)=>(n(P,N),e()),o),e,void 0,a?r.bind(null,S.pointerId):void 0,a?s.bind(null,S.pointerId):void 0,o),E!="move"&&E!="wheel"&&(I.setIntersection(I.computeIntersection("pointer",t,S)),I.commit(S,!1)),l.set(S.pointerId,I)),I},h=new Map,d=new Map,f=[],p=[],_=(S,E,I)=>{switch(S){case"move":I.move(t,E);return;case"over":I.move(t,E);return;case"wheel":I.wheel(t,E);return;case"cancel":I.cancel(E);return;case"down":if(!pp(E))return;I.down(E);return;case"up":if(!pp(E))return;I.up(E);return;case"exit":d.delete(I),h.delete(I),I.exit(E);return}},g=(S,E)=>{const I=u(E,S);S==="move"&&d.set(I,E),S==="wheel"&&h.set(I,E),o.batchEvents??!0?p.push({type:S,event:E}):_(S,E,I)},m=g.bind(null,"move"),v=g.bind(null,"over"),x=g.bind(null,"cancel"),y=g.bind(null,"down"),w=g.bind(null,"up"),M=g.bind(null,"wheel"),C=g.bind(null,"exit");return i.addEventListener("pointermove",m),i.addEventListener("pointerover",v),i.addEventListener("pointercancel",x),i.addEventListener("pointerdown",y),i.addEventListener("pointerup",w),i.addEventListener("wheel",M),i.addEventListener("pointerleave",C),{destroy(){i.removeEventListener("pointermove",m),i.removeEventListener("pointerover",v),i.removeEventListener("pointercancel",x),i.removeEventListener("pointerdown",y),i.removeEventListener("pointerup",w),i.removeEventListener("wheel",M),i.removeEventListener("pointerleave",C),d.clear(),h.clear()},update(){const S=p.length;for(let E=0;E<S;E++){const{type:I,event:P}=p[E],N=u(P,I);if(I==="move"&&(f.push(N),d.get(N)!=P)){N.emitMove(P);continue}if(I==="wheel"&&h.get(N)!=P){N.emitWheel(P);continue}_(I,P,N)}if(p.length=0,o.intersectEveryFrame??!1)for(const[E,I]of d.entries())f.includes(E)||E.move(t,I);f.length=0}}}function pp(i){return i.button!=null}var Gw=Object.create,qg=Object.defineProperty,Hw=Object.getOwnPropertyDescriptor,Ww=Object.getOwnPropertyNames,Xw=Object.getPrototypeOf,qw=Object.prototype.hasOwnProperty,Yw=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports),$w=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(var r=Ww(e),s=0,o=r.length,a;s<o;s++)a=r[s],!qw.call(i,a)&&a!==t&&qg(i,a,{get:(l=>e[l]).bind(null,a),enumerable:!(n=Hw(e,a))||n.enumerable});return i},Zw=(i,e,t)=>(t=i!=null?Gw(Xw(i)):{},$w(qg(t,"default",{value:i,enumerable:!0}),i));const Yg=typeof navigator<"u",Re=typeof window<"u"?window:typeof globalThis<"u"?globalThis:typeof global<"u"?global:{};typeof Re.chrome<"u"&&Re.chrome.devtools;Yg&&(Re.self,Re.top);typeof navigator<"u"&&navigator.userAgent?.toLowerCase().includes("electron");var Kw=Zw(Yw(((i,e)=>{e.exports=n;function t(s){return s instanceof Buffer?Buffer.from(s):new s.constructor(s.buffer.slice(),s.byteOffset,s.length)}function n(s){if(s=s||{},s.circles)return r(s);const o=new Map;if(o.set(Date,h=>new Date(h)),o.set(Map,(h,d)=>new Map(l(Array.from(h),d))),o.set(Set,(h,d)=>new Set(l(Array.from(h),d))),s.constructorHandlers)for(const h of s.constructorHandlers)o.set(h[0],h[1]);let a=null;return s.proto?u:c;function l(h,d){const f=Object.keys(h),p=new Array(f.length);for(let _=0;_<f.length;_++){const g=f[_],m=h[g];typeof m!="object"||m===null?p[g]=m:m.constructor!==Object&&(a=o.get(m.constructor))?p[g]=a(m,d):ArrayBuffer.isView(m)?p[g]=t(m):p[g]=d(m)}return p}function c(h){if(typeof h!="object"||h===null)return h;if(Array.isArray(h))return l(h,c);if(h.constructor!==Object&&(a=o.get(h.constructor)))return a(h,c);const d={};for(const f in h){if(Object.hasOwnProperty.call(h,f)===!1)continue;const p=h[f];typeof p!="object"||p===null?d[f]=p:p.constructor!==Object&&(a=o.get(p.constructor))?d[f]=a(p,c):ArrayBuffer.isView(p)?d[f]=t(p):d[f]=c(p)}return d}function u(h){if(typeof h!="object"||h===null)return h;if(Array.isArray(h))return l(h,u);if(h.constructor!==Object&&(a=o.get(h.constructor)))return a(h,u);const d={};for(const f in h){const p=h[f];typeof p!="object"||p===null?d[f]=p:p.constructor!==Object&&(a=o.get(p.constructor))?d[f]=a(p,u):ArrayBuffer.isView(p)?d[f]=t(p):d[f]=u(p)}return d}}function r(s){const o=[],a=[],l=new Map;if(l.set(Date,f=>new Date(f)),l.set(Map,(f,p)=>new Map(u(Array.from(f),p))),l.set(Set,(f,p)=>new Set(u(Array.from(f),p))),s.constructorHandlers)for(const f of s.constructorHandlers)l.set(f[0],f[1]);let c=null;return s.proto?d:h;function u(f,p){const _=Object.keys(f),g=new Array(_.length);for(let m=0;m<_.length;m++){const v=_[m],x=f[v];if(typeof x!="object"||x===null)g[v]=x;else if(x.constructor!==Object&&(c=l.get(x.constructor)))g[v]=c(x,p);else if(ArrayBuffer.isView(x))g[v]=t(x);else{const y=o.indexOf(x);y!==-1?g[v]=a[y]:g[v]=p(x)}}return g}function h(f){if(typeof f!="object"||f===null)return f;if(Array.isArray(f))return u(f,h);if(f.constructor!==Object&&(c=l.get(f.constructor)))return c(f,h);const p={};o.push(f),a.push(p);for(const _ in f){if(Object.hasOwnProperty.call(f,_)===!1)continue;const g=f[_];if(typeof g!="object"||g===null)p[_]=g;else if(g.constructor!==Object&&(c=l.get(g.constructor)))p[_]=c(g,h);else if(ArrayBuffer.isView(g))p[_]=t(g);else{const m=o.indexOf(g);m!==-1?p[_]=a[m]:p[_]=h(g)}}return o.pop(),a.pop(),p}function d(f){if(typeof f!="object"||f===null)return f;if(Array.isArray(f))return u(f,d);if(f.constructor!==Object&&(c=l.get(f.constructor)))return c(f,d);const p={};o.push(f),a.push(p);for(const _ in f){const g=f[_];if(typeof g!="object"||g===null)p[_]=g;else if(g.constructor!==Object&&(c=l.get(g.constructor)))p[_]=c(g,d);else if(ArrayBuffer.isView(g))p[_]=t(g);else{const m=o.indexOf(g);m!==-1?p[_]=a[m]:p[_]=d(g)}}return o.pop(),a.pop(),p}}}))());const Jw=/(?:^|[-_/])(\w)/g;function jw(i,e){return e?e.toUpperCase():""}function Qw(i){return i&&`${i}`.replace(Jw,jw)}function eA(i,e){let t=i.replace(/^[a-z]:/i,"").replace(/\\/g,"/");t.endsWith(`index${e}`)&&(t=t.replace(`/index${e}`,e));const n=t.lastIndexOf("/"),r=t.substring(n+1);{const s=r.lastIndexOf(e);return r.substring(0,s)}}const mp=(0,Kw.default)({circles:!0});var tA=Object.create,$g=Object.defineProperty,nA=Object.getOwnPropertyDescriptor,iA=Object.getOwnPropertyNames,rA=Object.getPrototypeOf,sA=Object.prototype.hasOwnProperty,Zg=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports),oA=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(var r=iA(e),s=0,o=r.length,a;s<o;s++)a=r[s],!sA.call(i,a)&&a!==t&&$g(i,a,{get:(l=>e[l]).bind(null,a),enumerable:!(n=nA(e,a))||n.enumerable});return i},aA=(i,e,t)=>(t=i!=null?tA(rA(i)):{},oA($g(t,"default",{value:i,enumerable:!0}),i));function lA(i){if(typeof i=="function")return i.displayName||i.name||i.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__||"";const e=i.name||i._componentTag||i.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__||i.__name;return e==="index"&&i.__file?.endsWith("index.vue")?"":e}function cA(i){const e=i.__file;if(e)return Qw(eA(e,".vue"))}function gp(i,e){return i.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__=e,e}function nd(i){if(i.__VUE_DEVTOOLS_NEXT_APP_RECORD__)return i.__VUE_DEVTOOLS_NEXT_APP_RECORD__;if(i.root)return i.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__}function Kg(i){const e=i.subTree?.type,t=nd(i);return t?t?.types?.Fragment===e:!1}function xc(i){const e=lA(i?.type||{});if(e)return e;if(i?.root===i)return"Root";for(const n in i.parent?.type?.components)if(i.parent.type.components[n]===i?.type)return gp(i,n);for(const n in i.appContext?.components)if(i.appContext.components[n]===i?.type)return gp(i,n);const t=cA(i?.type||{});return t||"Anonymous Component"}function uA(i){return`${i?.appContext?.app?.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__??0}:${i===i?.root?"root":i.uid}`}function Gu(i,e){return e=e||`${i.id}:root`,i.instanceMap.get(e)||i.instanceMap.get(":root")}function hA(){const i={top:0,bottom:0,left:0,right:0,get width(){return i.right-i.left},get height(){return i.bottom-i.top}};return i}let Aa;function dA(i){return Aa||(Aa=document.createRange()),Aa.selectNode(i),Aa.getBoundingClientRect()}function fA(i){const e=hA();if(!i.children)return e;for(let t=0,n=i.children.length;t<n;t++){const r=i.children[t];let s;if(r.component)s=pr(r.component);else if(r.el){const o=r.el;o.nodeType===1||o.getBoundingClientRect?s=o.getBoundingClientRect():o.nodeType===3&&o.data.trim()&&(s=dA(o))}s&&pA(e,s)}return e}function pA(i,e){return(!i.top||e.top<i.top)&&(i.top=e.top),(!i.bottom||e.bottom>i.bottom)&&(i.bottom=e.bottom),(!i.left||e.left<i.left)&&(i.left=e.left),(!i.right||e.right>i.right)&&(i.right=e.right),i}const _p={top:0,left:0,right:0,bottom:0,width:0,height:0};function pr(i){const e=i.subTree.el;return typeof window>"u"?_p:Kg(i)?fA(i.subTree):e?.nodeType===1?e?.getBoundingClientRect():i.subTree.component?pr(i.subTree.component):_p}function id(i){return Kg(i)?mA(i.subTree):i.subTree?[i.subTree.el]:[]}function mA(i){if(!i.children)return[];const e=[];return i.children.forEach(t=>{t.component?e.push(...id(t.component)):t?.el&&e.push(t.el)}),e}const Jg="__vue-devtools-component-inspector__",jg="__vue-devtools-component-inspector__card__",Qg="__vue-devtools-component-inspector__name__",e_="__vue-devtools-component-inspector__indicator__",t_={display:"block",zIndex:2147483640,position:"fixed",backgroundColor:"#42b88325",border:"1px solid #42b88350",borderRadius:"5px",transition:"all 0.1s ease-in",pointerEvents:"none"},gA={fontFamily:"Arial, Helvetica, sans-serif",padding:"5px 8px",borderRadius:"4px",textAlign:"left",position:"absolute",left:0,color:"#e9e9e9",fontSize:"14px",fontWeight:600,lineHeight:"24px",backgroundColor:"#42b883",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},_A={display:"inline-block",fontWeight:400,fontStyle:"normal",fontSize:"12px",opacity:.7};function _s(){return document.getElementById(Jg)}function vA(){return document.getElementById(jg)}function xA(){return document.getElementById(e_)}function yA(){return document.getElementById(Qg)}function rd(i){return{left:`${Math.round(i.left*100)/100}px`,top:`${Math.round(i.top*100)/100}px`,width:`${Math.round(i.width*100)/100}px`,height:`${Math.round(i.height*100)/100}px`}}function sd(i){const e=document.createElement("div");e.id=i.elementId??Jg,Object.assign(e.style,{...t_,...rd(i.bounds),...i.style});const t=document.createElement("span");t.id=jg,Object.assign(t.style,{...gA,top:i.bounds.top<35?0:"-35px"});const n=document.createElement("span");n.id=Qg,n.innerHTML=`&lt;${i.name}&gt;&nbsp;&nbsp;`;const r=document.createElement("i");return r.id=e_,r.innerHTML=`${Math.round(i.bounds.width*100)/100} x ${Math.round(i.bounds.height*100)/100}`,Object.assign(r.style,_A),t.appendChild(n),t.appendChild(r),e.appendChild(t),document.body.appendChild(e),e}function od(i){const e=_s(),t=vA(),n=yA(),r=xA();e&&(Object.assign(e.style,{...t_,...rd(i.bounds)}),Object.assign(t.style,{top:i.bounds.top<35?0:"-35px"}),n.innerHTML=`&lt;${i.name}&gt;&nbsp;&nbsp;`,r.innerHTML=`${Math.round(i.bounds.width*100)/100} x ${Math.round(i.bounds.height*100)/100}`)}function SA(i){const e=pr(i);if(!e.width&&!e.height)return;const t=xc(i);_s()?od({bounds:e,name:t}):sd({bounds:e,name:t})}function n_(){const i=_s();i&&(i.style.display="none")}let Hu=null;function Wu(i){const e=i.target;if(e){const t=e.__vueParentComponent;if(t&&(Hu=t,t.vnode.el)){const n=pr(t),r=xc(t);_s()?od({bounds:n,name:r}):sd({bounds:n,name:r})}}}function MA(i,e){i.preventDefault(),i.stopPropagation(),Hu&&e(uA(Hu))}let Il=null;function bA(){n_(),window.removeEventListener("mouseover",Wu),window.removeEventListener("click",Il,!0),Il=null}function EA(){return window.addEventListener("mouseover",Wu),new Promise(i=>{function e(t){t.preventDefault(),t.stopPropagation(),MA(t,n=>{window.removeEventListener("click",e,!0),Il=null,window.removeEventListener("mouseover",Wu);const r=_s();r&&(r.style.display="none"),i(JSON.stringify({id:n}))})}Il=e,window.addEventListener("click",e,!0)})}function TA(i){const e=Gu(jt.value,i.id);if(e){const[t]=id(e);if(typeof t.scrollIntoView=="function")t.scrollIntoView({behavior:"smooth"});else{const n=pr(e),r=document.createElement("div"),s={...rd(n),position:"absolute"};Object.assign(r.style,s),document.body.appendChild(r),r.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{document.body.removeChild(r)},2e3)}setTimeout(()=>{const n=pr(e);if(n.width||n.height){const r=xc(e),s=_s();s?od({...i,name:r,bounds:n}):sd({...i,name:r,bounds:n}),setTimeout(()=>{s&&(s.style.display="none")},1500)}},1200)}}Re.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__??=!0;function wA(i){let e=0;const t=setInterval(()=>{Re.__VUE_INSPECTOR__&&(clearInterval(t),e+=30,i()),e>=5e3&&clearInterval(t)},30)}function AA(){const i=Re.__VUE_INSPECTOR__,e=i.openInEditor;i.openInEditor=async(...t)=>{i.disable(),e(...t)}}function CA(){return new Promise(i=>{function e(){AA(),i(Re.__VUE_INSPECTOR__)}Re.__VUE_INSPECTOR__?e():wA(()=>{e()})})}let Pl=(function(i){return i.SKIP="__v_skip",i.IS_REACTIVE="__v_isReactive",i.IS_READONLY="__v_isReadonly",i.IS_SHALLOW="__v_isShallow",i.RAW="__v_raw",i})({});function RA(i){return!!(i&&i[Pl.IS_READONLY])}function i_(i){return RA(i)?i_(i[Pl.RAW]):!!(i&&i[Pl.IS_REACTIVE])}function xu(i){return!!(i&&i.__v_isRef===!0)}function Bs(i){const e=i&&i[Pl.RAW];return e?Bs(e):i}var IA=class{constructor(){this.refEditor=new PA}set(i,e,t,n){const r=Array.isArray(e)?e:e.split(".");for(;r.length>1;){const a=r.shift();i instanceof Map?i=i.get(a):i instanceof Set?i=Array.from(i.values())[a]:i=i[a],this.refEditor.isRef(i)&&(i=this.refEditor.get(i))}const s=r[0],o=this.refEditor.get(i)[s];n?n(i,s,t):this.refEditor.isRef(o)?this.refEditor.set(o,t):i[s]=t}get(i,e){const t=Array.isArray(e)?e:e.split(".");for(let n=0;n<t.length;n++)if(i instanceof Map?i=i.get(t[n]):i=i[t[n]],this.refEditor.isRef(i)&&(i=this.refEditor.get(i)),!i)return;return i}has(i,e,t=!1){if(typeof i>"u")return!1;const n=Array.isArray(e)?e.slice():e.split("."),r=t?2:1;for(;i&&n.length>r;){const s=n.shift();i=i[s],this.refEditor.isRef(i)&&(i=this.refEditor.get(i))}return i!=null&&Object.prototype.hasOwnProperty.call(i,n[0])}createDefaultSetCallback(i){return(e,t,n)=>{if((i.remove||i.newKey)&&(Array.isArray(e)?e.splice(t,1):Bs(e)instanceof Map?e.delete(t):Bs(e)instanceof Set?e.delete(Array.from(e.values())[t]):Reflect.deleteProperty(e,t)),!i.remove){const r=e[i.newKey||t];this.refEditor.isRef(r)?this.refEditor.set(r,n):Bs(e)instanceof Map?e.set(i.newKey||t,n):Bs(e)instanceof Set?e.add(n):e[i.newKey||t]=n}}}},PA=class{set(i,e){if(xu(i))i.value=e;else{if(i instanceof Set&&Array.isArray(e)){i.clear(),e.forEach(r=>i.add(r));return}const t=Object.keys(e);if(i instanceof Map){const r=new Set(i.keys());t.forEach(s=>{i.set(s,Reflect.get(e,s)),r.delete(s)}),r.forEach(s=>i.delete(s));return}const n=new Set(Object.keys(i));t.forEach(r=>{Reflect.set(i,r,Reflect.get(e,r)),n.delete(r)}),n.forEach(r=>Reflect.deleteProperty(i,r))}}get(i){return xu(i)?i.value:i}isRef(i){return xu(i)||i_(i)}};const LA="__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";function NA(){if(typeof window>"u"||!Yg||typeof localStorage>"u"||localStorage===null)return{recordingState:!1,mouseEventEnabled:!1,keyboardEventEnabled:!1,componentEventEnabled:!1,performanceEventEnabled:!1,selected:""};const i=typeof localStorage.getItem<"u"?localStorage.getItem(LA):null;return i?JSON.parse(i):{recordingState:!1,mouseEventEnabled:!1,keyboardEventEnabled:!1,componentEventEnabled:!1,performanceEventEnabled:!1,selected:""}}Re.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS??=[];const DA=new Proxy(Re.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS,{get(i,e,t){return Reflect.get(i,e,t)}});function OA(i,e){Nt.timelineLayersState[e.id]=!1,DA.push({...i,descriptorId:e.id,appRecord:nd(e.app)})}Re.__VUE_DEVTOOLS_KIT_INSPECTOR__??=[];const ad=new Proxy(Re.__VUE_DEVTOOLS_KIT_INSPECTOR__,{get(i,e,t){return Reflect.get(i,e,t)}}),r_=ts(()=>{vs.hooks.callHook(lr.SEND_INSPECTOR_TO_CLIENT,s_())});function UA(i,e){ad.push({options:i,descriptor:e,treeFilterPlaceholder:i.treeFilterPlaceholder??"Search tree...",stateFilterPlaceholder:i.stateFilterPlaceholder??"Search state...",treeFilter:"",selectedNodeId:"",appRecord:nd(e.app)}),r_()}function s_(){return ad.filter(i=>i.descriptor.app===jt.value.app).filter(i=>i.descriptor.id!=="components").map(i=>{const e=i.descriptor,t=i.options;return{id:t.id,label:t.label,logo:e.logo,icon:`custom-ic-baseline-${t?.icon?.replace(/_/g,"-")}`,packageName:e.packageName,homepage:e.homepage,pluginId:e.id}})}function Na(i,e){return ad.find(t=>t.options.id===i&&(e?t.descriptor.app===e:!0))}let qt=(function(i){return i.VISIT_COMPONENT_TREE="visitComponentTree",i.INSPECT_COMPONENT="inspectComponent",i.EDIT_COMPONENT_STATE="editComponentState",i.GET_INSPECTOR_TREE="getInspectorTree",i.GET_INSPECTOR_STATE="getInspectorState",i.EDIT_INSPECTOR_STATE="editInspectorState",i.INSPECT_TIMELINE_EVENT="inspectTimelineEvent",i.TIMELINE_CLEARED="timelineCleared",i.SET_PLUGIN_SETTINGS="setPluginSettings",i})({}),St=(function(i){return i.ADD_INSPECTOR="addInspector",i.SEND_INSPECTOR_TREE="sendInspectorTree",i.SEND_INSPECTOR_STATE="sendInspectorState",i.CUSTOM_INSPECTOR_SELECT_NODE="customInspectorSelectNode",i.TIMELINE_LAYER_ADDED="timelineLayerAdded",i.TIMELINE_EVENT_ADDED="timelineEventAdded",i.GET_COMPONENT_INSTANCES="getComponentInstances",i.GET_COMPONENT_BOUNDS="getComponentBounds",i.GET_COMPONENT_NAME="getComponentName",i.COMPONENT_HIGHLIGHT="componentHighlight",i.COMPONENT_UNHIGHLIGHT="componentUnhighlight",i})({}),lr=(function(i){return i.SEND_INSPECTOR_TREE_TO_CLIENT="sendInspectorTreeToClient",i.SEND_INSPECTOR_STATE_TO_CLIENT="sendInspectorStateToClient",i.SEND_TIMELINE_EVENT_TO_CLIENT="sendTimelineEventToClient",i.SEND_INSPECTOR_TO_CLIENT="sendInspectorToClient",i.SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT="sendActiveAppUpdatedToClient",i.DEVTOOLS_STATE_UPDATED="devtoolsStateUpdated",i.DEVTOOLS_CONNECTED_UPDATED="devtoolsConnectedUpdated",i.ROUTER_INFO_UPDATED="routerInfoUpdated",i})({});function FA(){const i=Op();i.hook(St.ADD_INSPECTOR,({inspector:n,plugin:r})=>{UA(n,r.descriptor)});const e=ts(async({inspectorId:n,plugin:r})=>{if(!n||!r?.descriptor?.app||Nt.highPerfModeEnabled)return;const s=Na(n,r.descriptor.app),o={app:r.descriptor.app,inspectorId:n,filter:s?.treeFilter||"",rootNodes:[]};await new Promise(a=>{i.callHookWith(async l=>{await Promise.all(l.map(c=>c(o))),a()},qt.GET_INSPECTOR_TREE)}),i.callHookWith(async a=>{await Promise.all(a.map(l=>l({inspectorId:n,rootNodes:o.rootNodes})))},lr.SEND_INSPECTOR_TREE_TO_CLIENT)},120);i.hook(St.SEND_INSPECTOR_TREE,e);const t=ts(async({inspectorId:n,plugin:r})=>{if(!n||!r?.descriptor?.app||Nt.highPerfModeEnabled)return;const s=Na(n,r.descriptor.app),o={app:r.descriptor.app,inspectorId:n,nodeId:s?.selectedNodeId||"",state:null},a={currentTab:`custom-inspector:${n}`};o.nodeId&&await new Promise(l=>{i.callHookWith(async c=>{await Promise.all(c.map(u=>u(o,a))),l()},qt.GET_INSPECTOR_STATE)}),i.callHookWith(async l=>{await Promise.all(l.map(c=>c({inspectorId:n,nodeId:o.nodeId,state:o.state})))},lr.SEND_INSPECTOR_STATE_TO_CLIENT)},120);return i.hook(St.SEND_INSPECTOR_STATE,t),i.hook(St.CUSTOM_INSPECTOR_SELECT_NODE,({inspectorId:n,nodeId:r,plugin:s})=>{const o=Na(n,s.descriptor.app);o&&(o.selectedNodeId=r)}),i.hook(St.TIMELINE_LAYER_ADDED,({options:n,plugin:r})=>{OA(n,r.descriptor)}),i.hook(St.TIMELINE_EVENT_ADDED,({options:n,plugin:r})=>{Nt.highPerfModeEnabled||!Nt.timelineLayersState?.[r.descriptor.id]&&!["performance","component-event","keyboard","mouse"].includes(n.layerId)||i.callHookWith(async s=>{await Promise.all(s.map(o=>o(n)))},lr.SEND_TIMELINE_EVENT_TO_CLIENT)}),i.hook(St.GET_COMPONENT_INSTANCES,async({app:n})=>{const r=n.__VUE_DEVTOOLS_NEXT_APP_RECORD__;if(!r)return null;const s=r.id.toString();return[...r.instanceMap].filter(([o])=>o.split(":")[0]===s).map(([,o])=>o)}),i.hook(St.GET_COMPONENT_BOUNDS,async({instance:n})=>pr(n)),i.hook(St.GET_COMPONENT_NAME,({instance:n})=>xc(n)),i.hook(St.COMPONENT_HIGHLIGHT,({uid:n})=>{const r=jt.value.instanceMap.get(n);r&&SA(r)}),i.hook(St.COMPONENT_UNHIGHLIGHT,()=>{n_()}),i}Re.__VUE_DEVTOOLS_KIT_APP_RECORDS__??=[];Re.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__??={};Re.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__??="";Re.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__??=[];Re.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__??=[];const Ks="__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";function BA(){return{connected:!1,clientConnected:!1,vitePluginDetected:!0,appRecords:[],activeAppRecordId:"",tabs:[],commands:[],highPerfModeEnabled:!0,devtoolsClientDetected:{},perfUniqueGroupId:0,timelineLayersState:NA()}}Re[Ks]??=BA();const VA=ts(i=>{vs.hooks.callHook(lr.DEVTOOLS_STATE_UPDATED,{state:i})});ts((i,e)=>{vs.hooks.callHook(lr.DEVTOOLS_CONNECTED_UPDATED,{state:i,oldState:e})});const yc=new Proxy(Re.__VUE_DEVTOOLS_KIT_APP_RECORDS__,{get(i,e,t){return e==="value"?Re.__VUE_DEVTOOLS_KIT_APP_RECORDS__:Re.__VUE_DEVTOOLS_KIT_APP_RECORDS__[e]}}),jt=new Proxy(Re.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__,{get(i,e,t){return e==="value"?Re.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__:e==="id"?Re.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__:Re.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[e]}});function o_(){VA({...Re[Ks],appRecords:yc.value,activeAppRecordId:jt.id,tabs:Re.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,commands:Re.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__})}function zA(i){Re.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__=i,o_()}function kA(i){Re.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__=i,o_()}const Nt=new Proxy(Re[Ks],{get(i,e){return e==="appRecords"?yc:e==="activeAppRecordId"?jt.id:e==="tabs"?Re.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__:e==="commands"?Re.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__:Re[Ks][e]},deleteProperty(i,e){return delete i[e],!0},set(i,e,t){return i[e]=t,Re[Ks][e]=t,!0}});function GA(i={}){const{file:e,host:t,baseUrl:n=window.location.origin,line:r=0,column:s=0}=i;if(e){if(t==="chrome-extension"){const o=e.replace(/\\/g,"\\\\"),a=window.VUE_DEVTOOLS_CONFIG?.openInEditorHost??"/";fetch(`${a}__open-in-editor?file=${encodeURI(e)}`).then(l=>{if(!l.ok){const c=`Opening component ${o} failed`;console.log(`%c${c}`,"color:red")}})}else if(Nt.vitePluginDetected){const o=Re.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__??n;Re.__VUE_INSPECTOR__.openInEditor(o,e,r,s)}}}Re.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__??=[];const ld=new Proxy(Re.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__,{get(i,e,t){return Reflect.get(i,e,t)}});function Xu(i){const e={};return Object.keys(i).forEach(t=>{e[t]=i[t].defaultValue}),e}function cd(i){return`__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${i}__`}function HA(i){return(ld.find(e=>e[0].id===i&&!!e[0]?.settings)?.[0]??null)?.settings??null}function a_(i,e){const t=cd(i);if(t){const n=localStorage.getItem(t);if(n)return JSON.parse(n)}return Xu(i?(ld.find(n=>n[0].id===i)?.[0]??null)?.settings??{}:e)}function WA(i,e){const t=cd(i);localStorage.getItem(t)||localStorage.setItem(t,JSON.stringify(Xu(e)))}function XA(i,e,t){const n=cd(i),r=localStorage.getItem(n),s=JSON.parse(r||"{}"),o={...s,[e]:t};localStorage.setItem(n,JSON.stringify(o)),vs.hooks.callHookWith(a=>{a.forEach(l=>l({pluginId:i,key:e,oldValue:s[e],newValue:t,settings:o}))},qt.SET_PLUGIN_SETTINGS)}let gn=(function(i){return i.APP_INIT="app:init",i.APP_UNMOUNT="app:unmount",i.COMPONENT_UPDATED="component:updated",i.COMPONENT_ADDED="component:added",i.COMPONENT_REMOVED="component:removed",i.COMPONENT_EMIT="component:emit",i.PERFORMANCE_START="perf:start",i.PERFORMANCE_END="perf:end",i.ADD_ROUTE="router:add-route",i.REMOVE_ROUTE="router:remove-route",i.RENDER_TRACKED="render:tracked",i.RENDER_TRIGGERED="render:triggered",i.APP_CONNECTED="app:connected",i.SETUP_DEVTOOLS_PLUGIN="devtools-plugin:setup",i})({});const _n=Re.__VUE_DEVTOOLS_HOOK??=Op(),qA={vueAppInit(i){_n.hook(gn.APP_INIT,i)},vueAppUnmount(i){_n.hook(gn.APP_UNMOUNT,i)},vueAppConnected(i){_n.hook(gn.APP_CONNECTED,i)},componentAdded(i){return _n.hook(gn.COMPONENT_ADDED,i)},componentEmit(i){return _n.hook(gn.COMPONENT_EMIT,i)},componentUpdated(i){return _n.hook(gn.COMPONENT_UPDATED,i)},componentRemoved(i){return _n.hook(gn.COMPONENT_REMOVED,i)},setupDevtoolsPlugin(i){_n.hook(gn.SETUP_DEVTOOLS_PLUGIN,i)},perfStart(i){return _n.hook(gn.PERFORMANCE_START,i)},perfEnd(i){return _n.hook(gn.PERFORMANCE_END,i)}},l_={on:qA,setupDevToolsPlugin(i,e){return _n.callHook(gn.SETUP_DEVTOOLS_PLUGIN,i,e)}};var YA=class{constructor({plugin:i,ctx:e}){this.hooks=e.hooks,this.plugin=i}get on(){return{visitComponentTree:i=>{this.hooks.hook(qt.VISIT_COMPONENT_TREE,i)},inspectComponent:i=>{this.hooks.hook(qt.INSPECT_COMPONENT,i)},editComponentState:i=>{this.hooks.hook(qt.EDIT_COMPONENT_STATE,i)},getInspectorTree:i=>{this.hooks.hook(qt.GET_INSPECTOR_TREE,i)},getInspectorState:i=>{this.hooks.hook(qt.GET_INSPECTOR_STATE,i)},editInspectorState:i=>{this.hooks.hook(qt.EDIT_INSPECTOR_STATE,i)},inspectTimelineEvent:i=>{this.hooks.hook(qt.INSPECT_TIMELINE_EVENT,i)},timelineCleared:i=>{this.hooks.hook(qt.TIMELINE_CLEARED,i)},setPluginSettings:i=>{this.hooks.hook(qt.SET_PLUGIN_SETTINGS,i)}}}notifyComponentUpdate(i){if(Nt.highPerfModeEnabled)return;const e=s_().find(t=>t.packageName===this.plugin.descriptor.packageName);if(e?.id){if(i){const t=[i.appContext.app,i.uid,i.parent?.uid,i];_n.callHook(gn.COMPONENT_UPDATED,...t)}else _n.callHook(gn.COMPONENT_UPDATED);this.hooks.callHook(St.SEND_INSPECTOR_STATE,{inspectorId:e.id,plugin:this.plugin})}}addInspector(i){this.hooks.callHook(St.ADD_INSPECTOR,{inspector:i,plugin:this.plugin}),this.plugin.descriptor.settings&&WA(i.id,this.plugin.descriptor.settings)}sendInspectorTree(i){Nt.highPerfModeEnabled||this.hooks.callHook(St.SEND_INSPECTOR_TREE,{inspectorId:i,plugin:this.plugin})}sendInspectorState(i){Nt.highPerfModeEnabled||this.hooks.callHook(St.SEND_INSPECTOR_STATE,{inspectorId:i,plugin:this.plugin})}selectInspectorNode(i,e){this.hooks.callHook(St.CUSTOM_INSPECTOR_SELECT_NODE,{inspectorId:i,nodeId:e,plugin:this.plugin})}visitComponentTree(i){return this.hooks.callHook(qt.VISIT_COMPONENT_TREE,i)}now(){return Nt.highPerfModeEnabled?0:Date.now()}addTimelineLayer(i){this.hooks.callHook(St.TIMELINE_LAYER_ADDED,{options:i,plugin:this.plugin})}addTimelineEvent(i){Nt.highPerfModeEnabled||this.hooks.callHook(St.TIMELINE_EVENT_ADDED,{options:i,plugin:this.plugin})}getSettings(i){return a_(i??this.plugin.descriptor.id,this.plugin.descriptor.settings)}getComponentInstances(i){return this.hooks.callHook(St.GET_COMPONENT_INSTANCES,{app:i})}getComponentBounds(i){return this.hooks.callHook(St.GET_COMPONENT_BOUNDS,{instance:i})}getComponentName(i){return this.hooks.callHook(St.GET_COMPONENT_NAME,{instance:i})}highlightElement(i){const e=i.__VUE_DEVTOOLS_NEXT_UID__;return this.hooks.callHook(St.COMPONENT_HIGHLIGHT,{uid:e})}unhighlightElement(){return this.hooks.callHook(St.COMPONENT_UNHIGHLIGHT)}};const $A=YA,ZA="__vue_devtool_undefined__",KA="__vue_devtool_infinity__",JA="__vue_devtool_negative_infinity__",jA="__vue_devtool_nan__",QA={[ZA]:"undefined",[jA]:"NaN",[KA]:"Infinity",[JA]:"-Infinity"};Object.entries(QA).reduce((i,[e,t])=>(i[t]=e,i),{});Re.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__??=new Set;function e1(i,e){return l_.setupDevToolsPlugin(i,e)}function t1(i,e){const[t,n]=i;if(t.app!==e)return;const r=new $A({plugin:{setupFn:n,descriptor:t},ctx:vs});t.packageName==="vuex"&&r.on.editInspectorState(s=>{r.sendInspectorState(s.inspectorId)}),n(r)}function c_(i,e){Re.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(i)||Nt.highPerfModeEnabled&&!e?.inspectingComponent||(Re.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(i),ld.forEach(t=>{t1(t,i)}))}const Ll="__VUE_DEVTOOLS_ROUTER__",_o="__VUE_DEVTOOLS_ROUTER_INFO__";Re[_o]??={currentRoute:null,routes:[]};Re[Ll]??={};new Proxy(Re[_o],{get(i,e){return Re[_o][e]}});new Proxy(Re[Ll],{get(i,e){if(e==="value")return Re[Ll]}});function n1(i){const e=new Map;return(i?.getRoutes()||[]).filter(t=>!e.has(t.path)&&e.set(t.path,1))}function ud(i){return i.map(e=>{let{path:t,name:n,children:r,meta:s}=e;return r?.length&&(r=ud(r)),{path:t,name:n,children:r,meta:s}})}function i1(i){if(i){const{fullPath:e,hash:t,href:n,path:r,name:s,matched:o,params:a,query:l}=i;return{fullPath:e,hash:t,href:n,path:r,name:s,params:a,query:l,matched:ud(o)}}return i}function r1(i,e){function t(){const n=i.app?.config.globalProperties.$router,r=i1(n?.currentRoute.value),s=ud(n1(n)),o=console.warn;console.warn=()=>{},Re[_o]={currentRoute:r?mp(r):{},routes:mp(s)},Re[Ll]=n,console.warn=o}t(),l_.on.componentUpdated(ts(()=>{e.value?.app===i.app&&(t(),!Nt.highPerfModeEnabled&&vs.hooks.callHook(lr.ROUTER_INFO_UPDATED,{state:Re[_o]}))},200))}function s1(i){return{async getInspectorTree(e){const t={...e,app:jt.value.app,rootNodes:[]};return await new Promise(n=>{i.callHookWith(async r=>{await Promise.all(r.map(s=>s(t))),n()},qt.GET_INSPECTOR_TREE)}),t.rootNodes},async getInspectorState(e){const t={...e,app:jt.value.app,state:null},n={currentTab:`custom-inspector:${e.inspectorId}`};return await new Promise(r=>{i.callHookWith(async s=>{await Promise.all(s.map(o=>o(t,n))),r()},qt.GET_INSPECTOR_STATE)}),t.state},editInspectorState(e){const t=new IA,n={...e,app:jt.value.app,set:(r,s=e.path,o=e.state.value,a)=>{t.set(r,s,o,a||t.createDefaultSetCallback(e.state))}};i.callHookWith(r=>{r.forEach(s=>s(n))},qt.EDIT_INSPECTOR_STATE)},sendInspectorState(e){const t=Na(e);i.callHook(St.SEND_INSPECTOR_STATE,{inspectorId:e,plugin:{descriptor:t.descriptor,setupFn:()=>({})}})},inspectComponentInspector(){return EA()},cancelInspectComponentInspector(){return bA()},getComponentRenderCode(e){const t=Gu(jt.value,e);if(t)return typeof t?.type!="function"?t.render.toString():t.type.toString()},scrollToComponent(e){return TA({id:e})},openInEditor:GA,getVueInspector:CA,toggleApp(e,t){const n=yc.value.find(r=>r.id===e);n&&(kA(e),zA(n),r1(n,jt),r_(),c_(n.app,t))},inspectDOM(e){const t=Gu(jt.value,e);if(t){const[n]=id(t);n&&(Re.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__=n)}},updatePluginSettings(e,t,n){XA(e,t,n)},getPluginSettings(e){return{options:HA(e),values:a_(e)}}}}Re.__VUE_DEVTOOLS_ENV__??={vitePluginDetected:!1};const vp=FA();Re.__VUE_DEVTOOLS_KIT_CONTEXT__??={hooks:vp,get state(){return{...Nt,activeAppRecordId:jt.id,activeAppRecord:jt.value,appRecords:yc.value}},api:s1(vp)};const vs=Re.__VUE_DEVTOOLS_KIT_CONTEXT__;var o1=Zg(((i,e)=>{(function(t){var n={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"Ae",Å:"A",Æ:"AE",Ç:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"Oe",Ő:"O",Ø:"O",Ù:"U",Ú:"U",Û:"U",Ü:"Ue",Ű:"U",Ý:"Y",Þ:"TH",ß:"ss",à:"a",á:"a",â:"a",ã:"a",ä:"ae",å:"a",æ:"ae",ç:"c",è:"e",é:"e",ê:"e",ë:"e",ì:"i",í:"i",î:"i",ï:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"oe",ő:"o",ø:"o",ù:"u",ú:"u",û:"u",ü:"ue",ű:"u",ý:"y",þ:"th",ÿ:"y","ẞ":"SS",ا:"a",أ:"a",إ:"i",آ:"aa",ؤ:"u",ئ:"e",ء:"a",ب:"b",ت:"t",ث:"th",ج:"j",ح:"h",خ:"kh",د:"d",ذ:"th",ر:"r",ز:"z",س:"s",ش:"sh",ص:"s",ض:"dh",ط:"t",ظ:"z",ع:"a",غ:"gh",ف:"f",ق:"q",ك:"k",ل:"l",م:"m",ن:"n",ه:"h",و:"w",ي:"y",ى:"a",ة:"h",ﻻ:"la",ﻷ:"laa",ﻹ:"lai",ﻵ:"laa",گ:"g",چ:"ch",پ:"p",ژ:"zh",ک:"k",ی:"y","َ":"a","ً":"an","ِ":"e","ٍ":"en","ُ":"u","ٌ":"on","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9",က:"k",ခ:"kh",ဂ:"g",ဃ:"ga",င:"ng",စ:"s",ဆ:"sa",ဇ:"z","စျ":"za",ည:"ny",ဋ:"t",ဌ:"ta",ဍ:"d",ဎ:"da",ဏ:"na",တ:"t",ထ:"ta",ဒ:"d",ဓ:"da",န:"n",ပ:"p",ဖ:"pa",ဗ:"b",ဘ:"ba",မ:"m",ယ:"y",ရ:"ya",လ:"l",ဝ:"w",သ:"th",ဟ:"h",ဠ:"la",အ:"a","ြ":"y","ျ":"ya","ွ":"w","ြွ":"yw","ျွ":"ywa","ှ":"h",ဧ:"e","၏":"-e",ဣ:"i",ဤ:"-i",ဉ:"u",ဦ:"-u",ဩ:"aw","သြော":"aw",ဪ:"aw","၀":"0","၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","္":"","့":"","း":"",č:"c",ď:"d",ě:"e",ň:"n",ř:"r",š:"s",ť:"t",ů:"u",ž:"z",Č:"C",Ď:"D",Ě:"E",Ň:"N",Ř:"R",Š:"S",Ť:"T",Ů:"U",Ž:"Z",ހ:"h",ށ:"sh",ނ:"n",ރ:"r",ބ:"b",ޅ:"lh",ކ:"k",އ:"a",ވ:"v",މ:"m",ފ:"f",ދ:"dh",ތ:"th",ލ:"l",ގ:"g",ޏ:"gn",ސ:"s",ޑ:"d",ޒ:"z",ޓ:"t",ޔ:"y",ޕ:"p",ޖ:"j",ޗ:"ch",ޘ:"tt",ޙ:"hh",ޚ:"kh",ޛ:"th",ޜ:"z",ޝ:"sh",ޞ:"s",ޟ:"d",ޠ:"t",ޡ:"z",ޢ:"a",ޣ:"gh",ޤ:"q",ޥ:"w","ަ":"a","ާ":"aa","ި":"i","ީ":"ee","ު":"u","ޫ":"oo","ެ":"e","ޭ":"ey","ޮ":"o","ޯ":"oa","ް":"",ა:"a",ბ:"b",გ:"g",დ:"d",ე:"e",ვ:"v",ზ:"z",თ:"t",ი:"i",კ:"k",ლ:"l",მ:"m",ნ:"n",ო:"o",პ:"p",ჟ:"zh",რ:"r",ს:"s",ტ:"t",უ:"u",ფ:"p",ქ:"k",ღ:"gh",ყ:"q",შ:"sh",ჩ:"ch",ც:"ts",ძ:"dz",წ:"ts",ჭ:"ch",ხ:"kh",ჯ:"j",ჰ:"h",α:"a",β:"v",γ:"g",δ:"d",ε:"e",ζ:"z",η:"i",θ:"th",ι:"i",κ:"k",λ:"l",μ:"m",ν:"n",ξ:"ks",ο:"o",π:"p",ρ:"r",σ:"s",τ:"t",υ:"y",φ:"f",χ:"x",ψ:"ps",ω:"o",ά:"a",έ:"e",ί:"i",ό:"o",ύ:"y",ή:"i",ώ:"o",ς:"s",ϊ:"i",ΰ:"y",ϋ:"y",ΐ:"i",Α:"A",Β:"B",Γ:"G",Δ:"D",Ε:"E",Ζ:"Z",Η:"I",Θ:"TH",Ι:"I",Κ:"K",Λ:"L",Μ:"M",Ν:"N",Ξ:"KS",Ο:"O",Π:"P",Ρ:"R",Σ:"S",Τ:"T",Υ:"Y",Φ:"F",Χ:"X",Ψ:"PS",Ω:"O",Ά:"A",Έ:"E",Ί:"I",Ό:"O",Ύ:"Y",Ή:"I",Ώ:"O",Ϊ:"I",Ϋ:"Y",ā:"a",ē:"e",ģ:"g",ī:"i",ķ:"k",ļ:"l",ņ:"n",ū:"u",Ā:"A",Ē:"E",Ģ:"G",Ī:"I",Ķ:"k",Ļ:"L",Ņ:"N",Ū:"U",Ќ:"Kj",ќ:"kj",Љ:"Lj",љ:"lj",Њ:"Nj",њ:"nj",Тс:"Ts",тс:"ts",ą:"a",ć:"c",ę:"e",ł:"l",ń:"n",ś:"s",ź:"z",ż:"z",Ą:"A",Ć:"C",Ę:"E",Ł:"L",Ń:"N",Ś:"S",Ź:"Z",Ż:"Z",Є:"Ye",І:"I",Ї:"Yi",Ґ:"G",є:"ye",і:"i",ї:"yi",ґ:"g",ă:"a",Ă:"A",ș:"s",Ș:"S",ț:"t",Ț:"T",ţ:"t",Ţ:"T",а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"yo",ж:"zh",з:"z",и:"i",й:"i",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"kh",ц:"c",ч:"ch",ш:"sh",щ:"sh",ъ:"",ы:"y",ь:"",э:"e",ю:"yu",я:"ya",А:"A",Б:"B",В:"V",Г:"G",Д:"D",Е:"E",Ё:"Yo",Ж:"Zh",З:"Z",И:"I",Й:"I",К:"K",Л:"L",М:"M",Н:"N",О:"O",П:"P",Р:"R",С:"S",Т:"T",У:"U",Ф:"F",Х:"Kh",Ц:"C",Ч:"Ch",Ш:"Sh",Щ:"Sh",Ъ:"",Ы:"Y",Ь:"",Э:"E",Ю:"Yu",Я:"Ya",ђ:"dj",ј:"j",ћ:"c",џ:"dz",Ђ:"Dj",Ј:"j",Ћ:"C",Џ:"Dz",ľ:"l",ĺ:"l",ŕ:"r",Ľ:"L",Ĺ:"L",Ŕ:"R",ş:"s",Ş:"S",ı:"i",İ:"I",ğ:"g",Ğ:"G",ả:"a",Ả:"A",ẳ:"a",Ẳ:"A",ẩ:"a",Ẩ:"A",đ:"d",Đ:"D",ẹ:"e",Ẹ:"E",ẽ:"e",Ẽ:"E",ẻ:"e",Ẻ:"E",ế:"e",Ế:"E",ề:"e",Ề:"E",ệ:"e",Ệ:"E",ễ:"e",Ễ:"E",ể:"e",Ể:"E",ỏ:"o",ọ:"o",Ọ:"o",ố:"o",Ố:"O",ồ:"o",Ồ:"O",ổ:"o",Ổ:"O",ộ:"o",Ộ:"O",ỗ:"o",Ỗ:"O",ơ:"o",Ơ:"O",ớ:"o",Ớ:"O",ờ:"o",Ờ:"O",ợ:"o",Ợ:"O",ỡ:"o",Ỡ:"O",Ở:"o",ở:"o",ị:"i",Ị:"I",ĩ:"i",Ĩ:"I",ỉ:"i",Ỉ:"i",ủ:"u",Ủ:"U",ụ:"u",Ụ:"U",ũ:"u",Ũ:"U",ư:"u",Ư:"U",ứ:"u",Ứ:"U",ừ:"u",Ừ:"U",ự:"u",Ự:"U",ữ:"u",Ữ:"U",ử:"u",Ử:"ư",ỷ:"y",Ỷ:"y",ỳ:"y",Ỳ:"Y",ỵ:"y",Ỵ:"Y",ỹ:"y",Ỹ:"Y",ạ:"a",Ạ:"A",ấ:"a",Ấ:"A",ầ:"a",Ầ:"A",ậ:"a",Ậ:"A",ẫ:"a",Ẫ:"A",ắ:"a",Ắ:"A",ằ:"a",Ằ:"A",ặ:"a",Ặ:"A",ẵ:"a",Ẵ:"A","⓪":"0","①":"1","②":"2","③":"3","④":"4","⑤":"5","⑥":"6","⑦":"7","⑧":"8","⑨":"9","⑩":"10","⑪":"11","⑫":"12","⑬":"13","⑭":"14","⑮":"15","⑯":"16","⑰":"17","⑱":"18","⑲":"18","⑳":"18","⓵":"1","⓶":"2","⓷":"3","⓸":"4","⓹":"5","⓺":"6","⓻":"7","⓼":"8","⓽":"9","⓾":"10","⓿":"0","⓫":"11","⓬":"12","⓭":"13","⓮":"14","⓯":"15","⓰":"16","⓱":"17","⓲":"18","⓳":"19","⓴":"20","Ⓐ":"A","Ⓑ":"B","Ⓒ":"C","Ⓓ":"D","Ⓔ":"E","Ⓕ":"F","Ⓖ":"G","Ⓗ":"H","Ⓘ":"I","Ⓙ":"J","Ⓚ":"K","Ⓛ":"L","Ⓜ":"M","Ⓝ":"N","Ⓞ":"O","Ⓟ":"P","Ⓠ":"Q","Ⓡ":"R","Ⓢ":"S","Ⓣ":"T","Ⓤ":"U","Ⓥ":"V","Ⓦ":"W","Ⓧ":"X","Ⓨ":"Y","Ⓩ":"Z","ⓐ":"a","ⓑ":"b","ⓒ":"c","ⓓ":"d","ⓔ":"e","ⓕ":"f","ⓖ":"g","ⓗ":"h","ⓘ":"i","ⓙ":"j","ⓚ":"k","ⓛ":"l","ⓜ":"m","ⓝ":"n","ⓞ":"o","ⓟ":"p","ⓠ":"q","ⓡ":"r","ⓢ":"s","ⓣ":"t","ⓤ":"u","ⓦ":"v","ⓥ":"w","ⓧ":"x","ⓨ":"y","ⓩ":"z","“":'"',"”":'"',"‘":"'","’":"'","∂":"d",ƒ:"f","™":"(TM)","©":"(C)",œ:"oe",Œ:"OE","®":"(R)","†":"+","℠":"(SM)","…":"...","˚":"o",º:"o",ª:"a","•":"*","၊":",","။":".",$:"USD","€":"EUR","₢":"BRN","₣":"FRF","£":"GBP","₤":"ITL","₦":"NGN","₧":"ESP","₩":"KRW","₪":"ILS","₫":"VND","₭":"LAK","₮":"MNT","₯":"GRD","₱":"ARS","₲":"PYG","₳":"ARA","₴":"UAH","₵":"GHS","¢":"cent","¥":"CNY",元:"CNY",円:"YEN","﷼":"IRR","₠":"EWE","฿":"THB","₨":"INR","₹":"INR","₰":"PF","₺":"TRY","؋":"AFN","₼":"AZN",лв:"BGN","៛":"KHR","₡":"CRC","₸":"KZT",ден:"MKD",zł:"PLN","₽":"RUB","₾":"GEL"},r=["်","ް"],s={"ာ":"a","ါ":"a","ေ":"e","ဲ":"e","ိ":"i","ီ":"i","ို":"o","ု":"u","ူ":"u","ေါင်":"aung","ော":"aw","ော်":"aw","ေါ":"aw","ေါ်":"aw","်":"်","က်":"et","ိုက်":"aik","ောက်":"auk","င်":"in","ိုင်":"aing","ောင်":"aung","စ်":"it","ည်":"i","တ်":"at","ိတ်":"eik","ုတ်":"ok","ွတ်":"ut","ေတ်":"it","ဒ်":"d","ိုဒ်":"ok","ုဒ်":"ait","န်":"an","ာန်":"an","ိန်":"ein","ုန်":"on","ွန်":"un","ပ်":"at","ိပ်":"eik","ုပ်":"ok","ွပ်":"ut","န်ုပ်":"nub","မ်":"an","ိမ်":"ein","ုမ်":"on","ွမ်":"un","ယ်":"e","ိုလ်":"ol","ဉ်":"in","ံ":"an","ိံ":"ein","ုံ":"on","ައް":"ah","ަށް":"ah"},o={en:{},az:{ç:"c",ə:"e",ğ:"g",ı:"i",ö:"o",ş:"s",ü:"u",Ç:"C",Ə:"E",Ğ:"G",İ:"I",Ö:"O",Ş:"S",Ü:"U"},cs:{č:"c",ď:"d",ě:"e",ň:"n",ř:"r",š:"s",ť:"t",ů:"u",ž:"z",Č:"C",Ď:"D",Ě:"E",Ň:"N",Ř:"R",Š:"S",Ť:"T",Ů:"U",Ž:"Z"},fi:{ä:"a",Ä:"A",ö:"o",Ö:"O"},hu:{ä:"a",Ä:"A",ö:"o",Ö:"O",ü:"u",Ü:"U",ű:"u",Ű:"U"},lt:{ą:"a",č:"c",ę:"e",ė:"e",į:"i",š:"s",ų:"u",ū:"u",ž:"z",Ą:"A",Č:"C",Ę:"E",Ė:"E",Į:"I",Š:"S",Ų:"U",Ū:"U"},lv:{ā:"a",č:"c",ē:"e",ģ:"g",ī:"i",ķ:"k",ļ:"l",ņ:"n",š:"s",ū:"u",ž:"z",Ā:"A",Č:"C",Ē:"E",Ģ:"G",Ī:"i",Ķ:"k",Ļ:"L",Ņ:"N",Š:"S",Ū:"u",Ž:"Z"},pl:{ą:"a",ć:"c",ę:"e",ł:"l",ń:"n",ó:"o",ś:"s",ź:"z",ż:"z",Ą:"A",Ć:"C",Ę:"e",Ł:"L",Ń:"N",Ó:"O",Ś:"S",Ź:"Z",Ż:"Z"},sv:{ä:"a",Ä:"A",ö:"o",Ö:"O"},sk:{ä:"a",Ä:"A"},sr:{љ:"lj",њ:"nj",Љ:"Lj",Њ:"Nj",đ:"dj",Đ:"Dj"},tr:{Ü:"U",Ö:"O",ü:"u",ö:"o"}},a={ar:{"∆":"delta","∞":"la-nihaya","♥":"hob","&":"wa","|":"aw","<":"aqal-men",">":"akbar-men","∑":"majmou","¤":"omla"},az:{},ca:{"∆":"delta","∞":"infinit","♥":"amor","&":"i","|":"o","<":"menys que",">":"mes que","∑":"suma dels","¤":"moneda"},cs:{"∆":"delta","∞":"nekonecno","♥":"laska","&":"a","|":"nebo","<":"mensi nez",">":"vetsi nez","∑":"soucet","¤":"mena"},de:{"∆":"delta","∞":"unendlich","♥":"Liebe","&":"und","|":"oder","<":"kleiner als",">":"groesser als","∑":"Summe von","¤":"Waehrung"},dv:{"∆":"delta","∞":"kolunulaa","♥":"loabi","&":"aai","|":"noonee","<":"ah vure kuda",">":"ah vure bodu","∑":"jumula","¤":"faisaa"},en:{"∆":"delta","∞":"infinity","♥":"love","&":"and","|":"or","<":"less than",">":"greater than","∑":"sum","¤":"currency"},es:{"∆":"delta","∞":"infinito","♥":"amor","&":"y","|":"u","<":"menos que",">":"mas que","∑":"suma de los","¤":"moneda"},fa:{"∆":"delta","∞":"bi-nahayat","♥":"eshgh","&":"va","|":"ya","<":"kamtar-az",">":"bishtar-az","∑":"majmooe","¤":"vahed"},fi:{"∆":"delta","∞":"aarettomyys","♥":"rakkaus","&":"ja","|":"tai","<":"pienempi kuin",">":"suurempi kuin","∑":"summa","¤":"valuutta"},fr:{"∆":"delta","∞":"infiniment","♥":"Amour","&":"et","|":"ou","<":"moins que",">":"superieure a","∑":"somme des","¤":"monnaie"},ge:{"∆":"delta","∞":"usasruloba","♥":"siqvaruli","&":"da","|":"an","<":"naklebi",">":"meti","∑":"jami","¤":"valuta"},gr:{},hu:{"∆":"delta","∞":"vegtelen","♥":"szerelem","&":"es","|":"vagy","<":"kisebb mint",">":"nagyobb mint","∑":"szumma","¤":"penznem"},it:{"∆":"delta","∞":"infinito","♥":"amore","&":"e","|":"o","<":"minore di",">":"maggiore di","∑":"somma","¤":"moneta"},lt:{"∆":"delta","∞":"begalybe","♥":"meile","&":"ir","|":"ar","<":"maziau nei",">":"daugiau nei","∑":"suma","¤":"valiuta"},lv:{"∆":"delta","∞":"bezgaliba","♥":"milestiba","&":"un","|":"vai","<":"mazak neka",">":"lielaks neka","∑":"summa","¤":"valuta"},my:{"∆":"kwahkhyaet","∞":"asaonasme","♥":"akhyait","&":"nhin","|":"tho","<":"ngethaw",">":"kyithaw","∑":"paungld","¤":"ngwekye"},mk:{},nl:{"∆":"delta","∞":"oneindig","♥":"liefde","&":"en","|":"of","<":"kleiner dan",">":"groter dan","∑":"som","¤":"valuta"},pl:{"∆":"delta","∞":"nieskonczonosc","♥":"milosc","&":"i","|":"lub","<":"mniejsze niz",">":"wieksze niz","∑":"suma","¤":"waluta"},pt:{"∆":"delta","∞":"infinito","♥":"amor","&":"e","|":"ou","<":"menor que",">":"maior que","∑":"soma","¤":"moeda"},ro:{"∆":"delta","∞":"infinit","♥":"dragoste","&":"si","|":"sau","<":"mai mic ca",">":"mai mare ca","∑":"suma","¤":"valuta"},ru:{"∆":"delta","∞":"beskonechno","♥":"lubov","&":"i","|":"ili","<":"menshe",">":"bolshe","∑":"summa","¤":"valjuta"},sk:{"∆":"delta","∞":"nekonecno","♥":"laska","&":"a","|":"alebo","<":"menej ako",">":"viac ako","∑":"sucet","¤":"mena"},sr:{},tr:{"∆":"delta","∞":"sonsuzluk","♥":"ask","&":"ve","|":"veya","<":"kucuktur",">":"buyuktur","∑":"toplam","¤":"para birimi"},uk:{"∆":"delta","∞":"bezkinechnist","♥":"lubov","&":"i","|":"abo","<":"menshe",">":"bilshe","∑":"suma","¤":"valjuta"},vn:{"∆":"delta","∞":"vo cuc","♥":"yeu","&":"va","|":"hoac","<":"nho hon",">":"lon hon","∑":"tong","¤":"tien te"}},l=[";","?",":","@","&","=","+","$",",","/"].join(""),c=[";","?",":","@","&","=","+","$",","].join(""),u=[".","!","~","*","'","(",")"].join(""),h=function(g,m){var v="-",x="",y="",w=!0,M={},C,S,E,I,P,N,D,k,U,V,F,Q,j,oe,pe="";if(typeof g!="string")return"";if(typeof m=="string"&&(v=m),D=a.en,k=o.en,typeof m=="object"){C=m.maintainCase||!1,M=m.custom&&typeof m.custom=="object"?m.custom:M,E=+m.truncate>1&&m.truncate||!1,I=m.uric||!1,P=m.uricNoSlash||!1,N=m.mark||!1,w=!(m.symbols===!1||m.lang===!1),v=m.separator||v,I&&(pe+=l),P&&(pe+=c),N&&(pe+=u),D=m.lang&&a[m.lang]&&w?a[m.lang]:w?a.en:{},k=m.lang&&o[m.lang]?o[m.lang]:m.lang===!1||m.lang===!0?{}:o.en,m.titleCase&&typeof m.titleCase.length=="number"&&Array.prototype.toString.call(m.titleCase)?(m.titleCase.forEach(function(xe){M[xe+""]=xe+""}),S=!0):S=!!m.titleCase,m.custom&&typeof m.custom.length=="number"&&Array.prototype.toString.call(m.custom)&&m.custom.forEach(function(xe){M[xe+""]=xe+""}),Object.keys(M).forEach(function(xe){var Ge;xe.length>1?Ge=new RegExp("\\b"+f(xe)+"\\b","gi"):Ge=new RegExp(f(xe),"gi"),g=g.replace(Ge,M[xe])});for(F in M)pe+=F}for(pe+=v,pe=f(pe),g=g.replace(/(^\s+|\s+$)/g,""),j=!1,oe=!1,V=0,Q=g.length;V<Q;V++)F=g[V],p(F,M)?j=!1:k[F]?(F=j&&k[F].match(/[A-Za-z0-9]/)?" "+k[F]:k[F],j=!1):F in n?(V+1<Q&&r.indexOf(g[V+1])>=0?(y+=F,F=""):oe===!0?(F=s[y]+n[F],y=""):F=j&&n[F].match(/[A-Za-z0-9]/)?" "+n[F]:n[F],j=!1,oe=!1):F in s?(y+=F,F="",V===Q-1&&(F=s[y]),oe=!0):D[F]&&!(I&&l.indexOf(F)!==-1)&&!(P&&c.indexOf(F)!==-1)?(F=j||x.substr(-1).match(/[A-Za-z0-9]/)?v+D[F]:D[F],F+=g[V+1]!==void 0&&g[V+1].match(/[A-Za-z0-9]/)?v:"",j=!0):(oe===!0?(F=s[y]+F,y="",oe=!1):j&&(/[A-Za-z0-9]/.test(F)||x.substr(-1).match(/A-Za-z0-9]/))&&(F=" "+F),j=!1),x+=F.replace(new RegExp("[^\\w\\s"+pe+"_-]","g"),v);return S&&(x=x.replace(/(\w)(\S*)/g,function(xe,Ge,it){var ze=Ge.toUpperCase()+(it!==null?it:"");return Object.keys(M).indexOf(ze.toLowerCase())<0?ze:ze.toLowerCase()})),x=x.replace(/\s+/g,v).replace(new RegExp("\\"+v+"+","g"),v).replace(new RegExp("(^\\"+v+"+|\\"+v+"+$)","g"),""),E&&x.length>E&&(U=x.charAt(E)===v,x=x.slice(0,E),U||(x=x.slice(0,x.lastIndexOf(v)))),!C&&!S&&(x=x.toLowerCase()),x},d=function(g){return function(v){return h(v,g)}},f=function(g){return g.replace(/[-\\^$*+?.()|[\]{}\/]/g,"\\$&")},p=function(_,g){for(var m in g)if(g[m]===_)return!0};if(typeof e<"u"&&e.exports)e.exports=h,e.exports.createSlug=d;else if(typeof define<"u"&&define.amd)define([],function(){return h});else try{if(t.getSlug||t.createSlug)throw"speakingurl: globals exists /(getSlug|createSlug)/";t.getSlug=h,t.createSlug=d}catch{}})(i)}));Zg(((i,e)=>{e.exports=o1()}))();Re.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__??={id:0,appIds:new Set};function a1(i){Nt.highPerfModeEnabled=i??!Nt.highPerfModeEnabled,!i&&jt.value&&c_(jt.value.app)}function l1(i){Nt.devtoolsClientDetected={...Nt.devtoolsClientDetected,...i},a1(!Object.values(Nt.devtoolsClientDetected).some(Boolean))}Re.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__??=l1;var c1=class{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(i,e){this.keyToValue.set(i,e),this.valueToKey.set(e,i)}getByKey(i){return this.keyToValue.get(i)}getByValue(i){return this.valueToKey.get(i)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}},u_=class{constructor(i){this.generateIdentifier=i,this.kv=new c1}register(i,e){this.kv.getByValue(i)||(e||(e=this.generateIdentifier(i)),this.kv.set(e,i))}clear(){this.kv.clear()}getIdentifier(i){return this.kv.getByValue(i)}getValue(i){return this.kv.getByKey(i)}},u1=class extends u_{constructor(){super(i=>i.name),this.classToAllowedProps=new Map}register(i,e){typeof e=="object"?(e.allowProps&&this.classToAllowedProps.set(i,e.allowProps),super.register(i,e.identifier)):super.register(i,e)}getAllowedProps(i){return this.classToAllowedProps.get(i)}};function h1(i){if("values"in Object)return Object.values(i);const e=[];for(const t in i)i.hasOwnProperty(t)&&e.push(i[t]);return e}function d1(i,e){const t=h1(i);if("find"in t)return t.find(e);const n=t;for(let r=0;r<n.length;r++){const s=n[r];if(e(s))return s}}function cs(i,e){Object.entries(i).forEach(([t,n])=>e(n,t))}function Da(i,e){return i.indexOf(e)!==-1}function xp(i,e){for(let t=0;t<i.length;t++){const n=i[t];if(e(n))return n}}var f1=class{constructor(){this.transfomers={}}register(i){this.transfomers[i.name]=i}findApplicable(i){return d1(this.transfomers,e=>e.isApplicable(i))}findByName(i){return this.transfomers[i]}};const p1=i=>Object.prototype.toString.call(i).slice(8,-1),h_=i=>typeof i>"u",m1=i=>i===null,vo=i=>typeof i!="object"||i===null||i===Object.prototype?!1:Object.getPrototypeOf(i)===null?!0:Object.getPrototypeOf(i)===Object.prototype,qu=i=>vo(i)&&Object.keys(i).length===0,Ui=i=>Array.isArray(i),g1=i=>typeof i=="string",_1=i=>typeof i=="number"&&!isNaN(i),v1=i=>typeof i=="boolean",x1=i=>i instanceof RegExp,xo=i=>i instanceof Map,yo=i=>i instanceof Set,d_=i=>p1(i)==="Symbol",y1=i=>i instanceof Date&&!isNaN(i.valueOf()),S1=i=>i instanceof Error,yp=i=>typeof i=="number"&&isNaN(i),M1=i=>v1(i)||m1(i)||h_(i)||_1(i)||g1(i)||d_(i),b1=i=>typeof i=="bigint",E1=i=>i===1/0||i===-1/0,T1=i=>ArrayBuffer.isView(i)&&!(i instanceof DataView),w1=i=>i instanceof URL,f_=i=>i.replace(/\./g,"\\."),yu=i=>i.map(String).map(f_).join("."),Js=i=>{const e=[];let t="";for(let r=0;r<i.length;r++){let s=i.charAt(r);if(s==="\\"&&i.charAt(r+1)==="."){t+=".",r++;continue}if(s==="."){e.push(t),t="";continue}t+=s}const n=t;return e.push(n),e};function Xn(i,e,t,n){return{isApplicable:i,annotation:e,transform:t,untransform:n}}const p_=[Xn(h_,"undefined",()=>null,()=>{}),Xn(b1,"bigint",i=>i.toString(),i=>typeof BigInt<"u"?BigInt(i):(console.error("Please add a BigInt polyfill."),i)),Xn(y1,"Date",i=>i.toISOString(),i=>new Date(i)),Xn(S1,"Error",(i,e)=>{const t={name:i.name,message:i.message};return e.allowedErrorProps.forEach(n=>{t[n]=i[n]}),t},(i,e)=>{const t=new Error(i.message);return t.name=i.name,t.stack=i.stack,e.allowedErrorProps.forEach(n=>{t[n]=i[n]}),t}),Xn(x1,"regexp",i=>""+i,i=>{const e=i.slice(1,i.lastIndexOf("/")),t=i.slice(i.lastIndexOf("/")+1);return new RegExp(e,t)}),Xn(yo,"set",i=>[...i.values()],i=>new Set(i)),Xn(xo,"map",i=>[...i.entries()],i=>new Map(i)),Xn(i=>yp(i)||E1(i),"number",i=>yp(i)?"NaN":i>0?"Infinity":"-Infinity",Number),Xn(i=>i===0&&1/i===-1/0,"number",()=>"-0",Number),Xn(w1,"URL",i=>i.toString(),i=>new URL(i))];function Sc(i,e,t,n){return{isApplicable:i,annotation:e,transform:t,untransform:n}}const m_=Sc((i,e)=>d_(i)?!!e.symbolRegistry.getIdentifier(i):!1,(i,e)=>["symbol",e.symbolRegistry.getIdentifier(i)],i=>i.description,(i,e,t)=>{const n=t.symbolRegistry.getValue(e[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),A1=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((i,e)=>(i[e.name]=e,i),{}),g_=Sc(T1,i=>["typed-array",i.constructor.name],i=>[...i],(i,e)=>{const t=A1[e[1]];if(!t)throw new Error("Trying to deserialize unknown typed array");return new t(i)});function __(i,e){return i?.constructor?!!e.classRegistry.getIdentifier(i.constructor):!1}const v_=Sc(__,(i,e)=>["class",e.classRegistry.getIdentifier(i.constructor)],(i,e)=>{const t=e.classRegistry.getAllowedProps(i.constructor);if(!t)return{...i};const n={};return t.forEach(r=>{n[r]=i[r]}),n},(i,e,t)=>{const n=t.classRegistry.getValue(e[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${e[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),i)}),x_=Sc((i,e)=>!!e.customTransformerRegistry.findApplicable(i),(i,e)=>["custom",e.customTransformerRegistry.findApplicable(i).name],(i,e)=>e.customTransformerRegistry.findApplicable(i).serialize(i),(i,e,t)=>{const n=t.customTransformerRegistry.findByName(e[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(i)}),C1=[v_,m_,x_,g_],Sp=(i,e)=>{const t=xp(C1,r=>r.isApplicable(i,e));if(t)return{value:t.transform(i,e),type:t.annotation(i,e)};const n=xp(p_,r=>r.isApplicable(i,e));if(n)return{value:n.transform(i,e),type:n.annotation}},y_={};p_.forEach(i=>{y_[i.annotation]=i});const R1=(i,e,t)=>{if(Ui(e))switch(e[0]){case"symbol":return m_.untransform(i,e,t);case"class":return v_.untransform(i,e,t);case"custom":return x_.untransform(i,e,t);case"typed-array":return g_.untransform(i,e,t);default:throw new Error("Unknown transformation: "+e)}else{const n=y_[e];if(!n)throw new Error("Unknown transformation: "+e);return n.untransform(i,t)}},Yr=(i,e)=>{if(e>i.size)throw new Error("index out of bounds");const t=i.keys();for(;e>0;)t.next(),e--;return t.next().value};function S_(i){if(Da(i,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(Da(i,"prototype"))throw new Error("prototype is not allowed as a property");if(Da(i,"constructor"))throw new Error("constructor is not allowed as a property")}const I1=(i,e)=>{S_(e);for(let t=0;t<e.length;t++){const n=e[t];if(yo(i))i=Yr(i,+n);else if(xo(i)){const r=+n,s=+e[++t]==0?"key":"value",o=Yr(i,r);switch(s){case"key":i=o;break;case"value":i=i.get(o);break}}else i=i[n]}return i},Yu=(i,e,t)=>{if(S_(e),e.length===0)return t(i);let n=i;for(let s=0;s<e.length-1;s++){const o=e[s];if(Ui(n)){const a=+o;n=n[a]}else if(vo(n))n=n[o];else if(yo(n)){const a=+o;n=Yr(n,a)}else if(xo(n)){if(s===e.length-2)break;const a=+o,l=+e[++s]==0?"key":"value",c=Yr(n,a);switch(l){case"key":n=c;break;case"value":n=n.get(c);break}}}const r=e[e.length-1];if(Ui(n)?n[+r]=t(n[+r]):vo(n)&&(n[r]=t(n[r])),yo(n)){const s=Yr(n,+r),o=t(s);s!==o&&(n.delete(s),n.add(o))}if(xo(n)){const s=+e[e.length-2],o=Yr(n,s);switch(+r==0?"key":"value"){case"key":{const a=t(o);n.set(a,n.get(o)),a!==o&&n.delete(o);break}case"value":n.set(o,t(n.get(o)));break}}return i};function $u(i,e,t=[]){if(!i)return;if(!Ui(i)){cs(i,(s,o)=>$u(s,e,[...t,...Js(o)]));return}const[n,r]=i;r&&cs(r,(s,o)=>{$u(s,e,[...t,...Js(o)])}),e(n,t)}function P1(i,e,t){return $u(e,(n,r)=>{i=Yu(i,r,s=>R1(s,n,t))}),i}function L1(i,e){function t(n,r){const s=I1(i,Js(r));n.map(Js).forEach(o=>{i=Yu(i,o,()=>s)})}if(Ui(e)){const[n,r]=e;n.forEach(s=>{i=Yu(i,Js(s),()=>i)}),r&&cs(r,t)}else cs(e,t);return i}const N1=(i,e)=>vo(i)||Ui(i)||xo(i)||yo(i)||__(i,e);function D1(i,e,t){const n=t.get(i);n?n.push(e):t.set(i,[e])}function O1(i,e){const t={};let n;return i.forEach(r=>{if(r.length<=1)return;e||(r=r.map(a=>a.map(String)).sort((a,l)=>a.length-l.length));const[s,...o]=r;s.length===0?n=o.map(yu):t[yu(s)]=o.map(yu)}),n?qu(t)?[n]:[n,t]:qu(t)?void 0:t}const M_=(i,e,t,n,r=[],s=[],o=new Map)=>{const a=M1(i);if(!a){D1(i,r,e);const f=o.get(i);if(f)return n?{transformedValue:null}:f}if(!N1(i,t)){const f=Sp(i,t),p=f?{transformedValue:f.value,annotations:[f.type]}:{transformedValue:i};return a||o.set(i,p),p}if(Da(s,i))return{transformedValue:null};const l=Sp(i,t),c=l?.value??i,u=Ui(c)?[]:{},h={};cs(c,(f,p)=>{if(p==="__proto__"||p==="constructor"||p==="prototype")throw new Error(`Detected property ${p}. This is a prototype pollution risk, please remove it from your object.`);const _=M_(f,e,t,n,[...r,p],[...s,i],o);u[p]=_.transformedValue,Ui(_.annotations)?h[p]=_.annotations:vo(_.annotations)&&cs(_.annotations,(g,m)=>{h[f_(p)+"."+m]=g})});const d=qu(h)?{transformedValue:u,annotations:l?[l.type]:void 0}:{transformedValue:u,annotations:l?[l.type,h]:h};return a||o.set(i,d),d};function b_(i){return Object.prototype.toString.call(i).slice(8,-1)}function Mp(i){return b_(i)==="Array"}function U1(i){if(b_(i)!=="Object")return!1;const e=Object.getPrototypeOf(i);return!!e&&e.constructor===Object&&e===Object.prototype}function F1(i,e,t,n,r){const s={}.propertyIsEnumerable.call(n,e)?"enumerable":"nonenumerable";s==="enumerable"&&(i[e]=t),r&&s==="nonenumerable"&&Object.defineProperty(i,e,{value:t,enumerable:!1,writable:!0,configurable:!0})}function Zu(i,e={}){if(Mp(i))return i.map(r=>Zu(r,e));if(!U1(i))return i;const t=Object.getOwnPropertyNames(i),n=Object.getOwnPropertySymbols(i);return[...t,...n].reduce((r,s)=>{if(Mp(e.props)&&!e.props.includes(s))return r;const o=i[s];return F1(r,s,Zu(o,e),i,e.nonenumerable),r},{})}var xt=class{constructor({dedupe:i=!1}={}){this.classRegistry=new u1,this.symbolRegistry=new u_(e=>e.description??""),this.customTransformerRegistry=new f1,this.allowedErrorProps=[],this.dedupe=i}serialize(i){const e=new Map,t=M_(i,e,this,this.dedupe),n={json:t.transformedValue};t.annotations&&(n.meta={...n.meta,values:t.annotations});const r=O1(e,this.dedupe);return r&&(n.meta={...n.meta,referentialEqualities:r}),n}deserialize(i){const{json:e,meta:t}=i;let n=Zu(e);return t?.values&&(n=P1(n,t.values,this)),t?.referentialEqualities&&(n=L1(n,t.referentialEqualities)),n}stringify(i){return JSON.stringify(this.serialize(i))}parse(i){return this.deserialize(JSON.parse(i))}registerClass(i,e){this.classRegistry.register(i,e)}registerSymbol(i,e){this.symbolRegistry.register(i,e)}registerCustom(i,e){this.customTransformerRegistry.register({name:e,...i})}allowErrorProps(...i){this.allowedErrorProps.push(...i)}};xt.defaultInstance=new xt;xt.serialize=xt.defaultInstance.serialize.bind(xt.defaultInstance);xt.deserialize=xt.defaultInstance.deserialize.bind(xt.defaultInstance);xt.stringify=xt.defaultInstance.stringify.bind(xt.defaultInstance);xt.parse=xt.defaultInstance.parse.bind(xt.defaultInstance);xt.registerClass=xt.defaultInstance.registerClass.bind(xt.defaultInstance);xt.registerSymbol=xt.defaultInstance.registerSymbol.bind(xt.defaultInstance);xt.registerCustom=xt.defaultInstance.registerCustom.bind(xt.defaultInstance);xt.allowErrorProps=xt.defaultInstance.allowErrorProps.bind(xt.defaultInstance);Re.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__??=[];Re.__VUE_DEVTOOLS_KIT_RPC_CLIENT__??=null;Re.__VUE_DEVTOOLS_KIT_RPC_SERVER__??=null;Re.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__??=null;Re.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__??=null;Re.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__??=null;var B1={},V1="5.8.3";function z1(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const k1="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",G1=z1(k1),An=i=>e=>Qh(e)&&i in e&&!!e[i],Ku=An("isObject3D"),E_=An("isMesh"),T_=An("isCamera"),H1=An("isOrthographicCamera"),w_=An("isPerspectiveCamera"),A_=An("isColor"),W1=i=>ed(i)||zg(i)||A_(i),bp=i=>i instanceof wo,C_=An("isBufferGeometry"),R_=An("isMaterial"),X1=An("isLight"),I_=An("isFog"),hd=An("isScene"),Ju=i=>i!==null&&typeof i=="object"&&"set"in i&&typeof i.set=="function",q1=i=>Ju(i)&&"copy"in i&&typeof i.copy=="function",Y1=i=>!!i?.constructor,$r=i=>T_(i)||H1(i)||w_(i),$1=i=>Ku(i)||C_(i)||R_(i)||I_(i),Z1=An("isPrimitive"),K1=i=>$1(i)&&"__tres"in i,P_=(i,e)=>{let t=0;for(let n=0;n<i.length;n++)e(i[n],n)&&(i[t]=i[n],t++);return i.length=t,i};function J1(){try{const i="production";if(i)return i}catch{}return"production"}J1();const Nl="[TresJS ▲ ■ ●] ";function Ep(...i){typeof i[0]=="string"?i[0]=Nl+i[0]:i.unshift(Nl),console.error(...i)}function j1(...i){typeof i[0]=="string"?i[0]=Nl+i[0]:i.unshift(Nl),console.warn(...i)}function Tp(i){(t=>"map"in t&&!!t.map)(i)&&i.map.dispose(),i.dispose()}function L_(i){if(i.parent&&i.removeFromParent?.(),delete i.__tres,[...i.children].forEach(e=>L_(e)),!(i instanceof Jl)){const e=i;i&&i.dispose?.(),e.geometry&&e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(t=>Tp(t)):e.material&&Tp(e.material)}}function Dl(i,e){let t=i;if(e.includes("-")){const n=e.split("-");let r=n.shift();for(;t&&n.length;)r in t?(t=t[r],r=n.shift()):r=wp(r,n.shift());return{target:t,key:wp(r,...n)}}else return{target:t,key:e}}function wp(...i){return i.map((e,t)=>t===0?e:e.charAt(0).toUpperCase()+e.slice(1)).join("")}function Q1(i,e,t){const n=/-\d+$/;if(ed(t)){if(n.test(t)){const{target:o,key:a}=Dl(i,t.replace(n,""));if(!Array.isArray(o[a])){const l=o[a],c=[];c.__tresDetach=()=>{c.every(u=>ku(u))&&(o[a]=l)},o[a]=c}}const{target:r,key:s}=Dl(i,t);e.__tres.previousAttach=r[s],r[s]=us(e)}else e.__tres.previousAttach=t(i,e)}function eC(i,e,t){if(ed(t)){const{target:n,key:r}=Dl(i,t),s=e.__tres.previousAttach;s===void 0?delete n[r]:n[r]=s,"__tresDetach"in n&&n.__tresDetach()}else e.__tres?.previousAttach?.(i,e);delete e.__tres?.previousAttach}function Qi(i,e,t){const n=i;return n.__tres={type:"unknown",root:t,memoizedProps:{},objects:[],parent:null,previousAttach:null,...e},n.__tres.attach||(R_(n)?n.__tres.attach="material":C_(n)?n.__tres.attach="geometry":I_(n)&&(n.__tres.attach="fog")),n}function ju(i){const e=i?.__tres?.root;e?.renderer&&e.renderer.canBeInvalidated.value&&e.renderer.invalidate()}function tC(i,e,t,n,r){const s=[...e.__tres.objects],o=us(e);if(i=us(i),o===i)return!0;const a=Qi(i,e.__tres??{},r),l=e.parent??e.__tres.parent??null,c={...e.__tres.memoizedProps};delete c.object;for(const u of s)N_(u,r),D_(u,r);o.__tres.objects=[],n.remove(e);for(const[u,h]of Object.entries(c))n.patchProp(a,u,a[u],h);t(i),n.insert(e,l);for(const u of s)n.insert(u,e);return!0}function us(i){if(Z1(i)){const e=i;return e.object.__tres=e.__tres,e.object}else return i}function N_(i,e){const t=i.__tres?.parent||e.scene.value;i.__tres&&(i.__tres.parent=null),t&&t.__tres&&"objects"in t.__tres&&P_(t.__tres.objects,n=>n!==i),i.__tres?.attach?eC(t,i,i.__tres.attach):(i.parent?.remove?.(us(i)),i.parent=null)}function D_(i,e){i.traverse?.(t=>{$r(t)&&e.camera.deregisterCamera(t)}),$r(i)&&e.camera.deregisterCamera(i),ju(i)}const nC=({sizes:i})=>{const e=bn([]),t=hn(()=>e.value[0]),n=o=>{const a=T_(o)?o:e.value.find(l=>l.uuid===o);a&&(e.value=[a,...e.value.filter(({uuid:l})=>l!==a.uuid)])},r=(o,a=!1)=>{e.value.some(({uuid:l})=>l===o.uuid)||(e.value.push(o),a&&n(o.uuid))},s=o=>{e.value=e.value.filter(({uuid:a})=>a!==o.uuid)};return qn(()=>{i.aspectRatio.value&&e.value.forEach(o=>{w_(o)&&(o.aspect=i.aspectRatio.value,o.updateProjectionMatrix())})}),{activeCamera:t,cameras:e,registerCamera:r,deregisterCamera:s,setActiveCamera:n}},Qu=bn({}),eh=i=>Object.assign(Qu.value,i),iC=(i,e,t)=>{if(!tr(i.setPixelRatio))return;let n=0;if(t&&Array.isArray(t)&&t.length>=2){const[r,s]=t;n=Em.clamp(e,r,s)}else zg(t)?n=t:n=e;n!==i.getPixelRatio?.()&&i.setPixelRatio(n)},rC=Number.parseInt(bo.replace("dev","")),sC=179;function oC(){if(rC>=sC){const i=new Wh;return{getDelta:()=>i.getDelta(),getElapsed:()=>i.getElapsed(),update:()=>i.update(),start:()=>{typeof document<"u"&&i.connect(document)},stop:()=>i.disconnect()}}else{const i=new Tg;return{getDelta:()=>i.getDelta(),getElapsed:()=>i.elapsedTime,update:()=>{},start:()=>i.start(),stop:()=>i.stop()}}}const aC=(i,{fpsLimit:e}={})=>{const t=oC(),n={before:Jr(),after:Jr()},{pause:r,resume:s,isActive:o}=jh(()=>{t.update();const c={delta:t.getDelta(),elapsed:t.getElapsed()};n.before.trigger(c),i(),n.after.trigger(c)},{immediate:!1,fpsLimit:e});return{start:()=>{t.start(),s()},stop:()=>{t.stop(),r()},isActive:o,onBeforeLoop:n.before.on,onLoop:n.after.on}};var lC=class extends Error{name="TresRendererError";constructor(i,e,t){super(i,t),this.code=e}};function cC({scene:i,canvas:e,options:t,fpsLimit:n,contextParts:{sizes:r,camera:s}}){const a=tr(t.renderer)?t.renderer({sizes:r,scene:i,camera:s,canvas:e}):new Kh({...t,canvas:Ii(e)}),l=bn(ct(t.renderMode)==="manual"?0:1),c=60,u=hn(()=>ct(t.renderMode)==="on-demand"&&l.value===0),h=()=>i.value.traverse(D=>{D instanceof Mt&&D.material instanceof kt&&(D.material.needsUpdate=!0)}),d=(D=1)=>{u.value&&(l.value=Math.min(c,l.value+D))},f=()=>{if(ct(t.renderMode)!=="manual")throw new Error("advance can only be called in manual render mode.");l.value=1},p=()=>{ct(t.renderMode)==="on-demand"&&d()},_=hn(()=>ct(t.renderMode)==="always"),g=D=>Qh(D)&&"isRenderer"in D&&!!D.isRenderer,m=Jr(),v=Jr();let x=!1;const y=bn(!1),w=bn(null),M=async()=>{try{g(a)&&await a.init(),y.value=!0}catch(D){const k=new lC(D instanceof Error?D.message:"Unknown error","INITIALIZATION_FAILED",{cause:D instanceof Error?D:void 0});w.value=k,console.error(`[TresJS] Renderer initialization failed. This may occur if:
  - WebGPU is not supported by your browser
  - GPU is not available or lacks required features
  - GPU drivers are outdated
Error details: ${k.message}`,k),v.trigger(k)}},C=Jr(),S=()=>{l.value=_.value?1:Math.max(0,l.value-1),C.trigger(a)};let E=D=>{s.activeCamera.value&&(a.render(i.value,s.activeCamera.value),D())};const I=D=>{E=D},P=aC(()=>{l.value&&E(S)},{fpsLimit:n});m.on(()=>{y.value&&P.start()}),Kn([r.width,r.height,y],()=>{y.value&&(a.setSize(r.width.value,r.height.value),!x&&a.domElement.width&&a.domElement.height&&(x=!0,Dp(()=>{m.trigger(a)})),p())},{immediate:!0}),qn(()=>{y.value&&iC(a,r.pixelRatio.value,ct(t.dpr))}),M(),ct(t.renderMode)==="on-demand"&&d(),ct(t.renderMode)==="manual"&&iw(100,{callback:f});const N=hn(()=>{const D=ct(t.clearColor),k=ct(t.clearAlpha),U=typeof D=="string"&&D.length===9&&D.startsWith("#");return U&&k!==void 0&&j1(`clearColor with alpha (e.g. ${D}) and clearAlpha cannot both be set, using clearColor as source of truth`),U?{alpha:Number.parseInt(D.slice(7,9),16)/255,color:D.slice(0,7)}:{alpha:k,color:D}});return qn(()=>{if(!y.value)return;const D=N.value;D.color===void 0||D.alpha===void 0||a.setClearColor(D.color,D.alpha)}),qn(()=>{if(!y.value)return;const D=t.toneMapping;D&&(a.toneMapping=D)}),qn(()=>{if(!y.value)return;const D=t.toneMappingExposure;D&&(a.toneMappingExposure=D)}),qn(()=>{if(!y.value)return;const D=t.outputColorSpace;D&&(a.outputColorSpace=D)}),qn(()=>{if(!y.value)return;const D=t.shadows;D!==void 0&&(a.shadowMap.enabled=D,h())}),qn(()=>{if(!y.value)return;const D=t.shadowMapType;D!==void 0&&(a.shadowMap.type=D,h())}),es(()=>{a.dispose(),"forceContextLoss"in a&&a.forceContextLoss()}),{loop:P,instance:a,advance:f,onReady:m.on,onRender:C.on,onError:v.on,invalidate:d,canBeInvalidated:u,mode:ct(t.renderMode),replaceRenderFunction:I,isInitialized:y,error:w}}function uC(i,e,t=10){const{pixelRatio:n}=aw(),r=ct(i)?fw():cw(hn(()=>ct(e).parentElement)),s=bd(ip(r.width,t)),o=bd(ip(r.height,t));return{width:s,height:o,pixelRatio:n,aspectRatio:hn(()=>s.value/o.value)}}function hC({canvas:i,contextParts:{scene:e,camera:t,renderer:n}}){const{update:r,destroy:s}=zw(ct(i),()=>ct(t.activeCamera),e.value),{off:o}=n.loop.onLoop(r);es(s),es(o);const a=Hg(e.value),l=Jr();return a.addEventListener("click",l.trigger),{onPointerMissed:l.on}}const dC="useTres",[fC]=$T(({scene:i,canvas:e,fpsLimit:t,windowSize:n,rendererOptions:r})=>{const s=Dt(i),o=uC(n,e),a=nC({sizes:o}),l=cC({scene:s,canvas:e,options:r,fpsLimit:t,contextParts:{sizes:o,camera:a}}),c=hC({canvas:e,contextParts:{scene:s,camera:a,renderer:l}}),u={sizes:o,scene:s,camera:a,renderer:l,controls:bn(null),extend:eh,events:c};return u.scene.value.__tres={root:u,objects:[],isUnmounting:!1},u},{injectionKey:"useTres"});function pC(i,e={},t={}){let n=i;const r=o=>{n=o};let s=new Proxy({},{});return s=new Proxy({},{has(o,a){return a in e||a in n},get(o,a,l){return a in e?e[a](n):n[a]},set(o,a,l){return t[a]?t[a](l,n,s,r):n[a]=l,!0}}),s}const mC=["onClick","onContextmenu","onPointermove","onPointerenter","onPointerleave","onPointerover","onPointerout","onDblclick","onPointerdown","onPointerup","onPointercancel","onLostpointercapture","onWheel"],gC={onClick:"click",onContextmenu:"contextmenu",onPointermove:"pointermove",onPointerenter:"pointerenter",onPointerleave:"pointerleave",onPointerover:"pointerover",onPointerout:"pointerout",onDblclick:"dblclick",onPointerdown:"pointerdown",onPointerup:"pointerup",onPointercancel:"pointercancel",onLostpointercapture:"lostpointercapture",onWheel:"wheel"},Ap=i=>mC.includes(i),Cp=Symbol("tresTextNode"),Rp=Symbol("tresComment"),_C=({context:i,options:e={primitivePrefix:""}})=>{const t=i.scene.value,n=()=>{if(!t?.__tres?.isUnmounting)return{[Cp]:!0,__tres:{parent:null}}},r=()=>({[Rp]:!0,__tres:{parent:null}}),s=p=>!!p&&typeof p=="object"&&Cp in p,o=p=>!!p&&typeof p=="object"&&Rp in p;function a(p,_,g,m){if(m||(m={}),m.args||(m.args=[]),G1(p))return null;p.includes("-")&&(p=p.replace(/-([a-z])/g,(y,w)=>w.toUpperCase()).replace(/^[a-z]/,y=>y.toUpperCase()));let v=p.replace("Tres",""),x;if(p===`${e?.primitivePrefix??""}primitive`){(!Qh(m.object)||Zr(m.object))&&Ep("Tres primitives need an 'object' prop, whose value is an object or shallowRef<object>"),v=m.object.type;const y={};x=pC(m.object,{object:w=>w,isPrimitive:()=>!0,__tres:()=>y},{object:(w,M,C,S)=>{tC(w,C,S,{patchProp:u,remove:c,insert:l},i)},__tres:w=>{Object.assign(y,w)}})}else{const y=Qu.value[v];y||Ep(`${v} is not defined on the THREE namespace. Use extend to add it to the catalog.`),x=new y(...m.args)}return x?($r(x)&&(m?.position||x.position.set(3,3,3),m?.lookAt||x.lookAt(0,0,0)),x=Qi(x,{...K1(x)?x.__tres:{},type:v,memoizedProps:m,primitive:p==="primitive",attach:m.attach},i),x):null}function l(p,_,g){if(!p)return;if(_=_||t,s(p)||o(p)){const x=_.__tres?_:Qi(_,{},i);if(p.__tres.parent=x,x.__tres.objects){const y=g?x.__tres.objects.findIndex(w=>w===g):-1;y>=0?x.__tres.objects.splice(y,0,p):x.__tres.objects.push(p)}return}const m=p.__tres?p:Qi(p,{},i),v=_.__tres?_:Qi(_,{},i);if(p=us(m),_=us(v),$r(p)&&i.camera?.registerCamera(p),m.__tres.attach?Q1(v,m,m.__tres.attach):Ku(p)&&Ku(v)&&(v.add(p),p.dispatchEvent({type:"added"})),m.__tres.parent=v,v.__tres.objects&&!v.__tres.objects.includes(m)){const x=g?v.__tres.objects.findIndex(y=>y===g):-1;~x?v.__tres.objects.splice(x,0,m):v.__tres.objects.push(m)}}function c(p,_){if(!p)return;if(s(p)||o(p)){const x=p.__tres.parent;x?.__tres?.objects&&P_(x.__tres.objects,y=>y!==p),p.__tres.parent=null;return}_=ku(_)?"default":_;const g=p.__tres?.dispose;ku(g)||(g===null?_=!1:_=g);const m=p.__tres?.primitive,v=_==="default"?!m:!!_;if(p.__tres&&"objects"in p.__tres&&[...p.__tres.objects].forEach(x=>c(x,_)),v&&p.children&&[...p.children].forEach(x=>c(x,_)),N_(p,i),D_(p,i),v&&!hd(p)){if(tr(_))_(p);else if(tr(p.dispose))try{p.dispose()}catch{}}"__tres"in p&&delete p.__tres}function u(p,_,g,m){if(!p)return;let v=p;const x=_;if(p.__tres&&(p.__tres.memoizedProps[_]=m),_==="attach"){const C=p.__tres?.parent||p.parent;c(p),Qi(p,{attach:m},i),C&&l(p,C);return}if(_==="dispose"){p.__tres||(p=Qi(p,{},i)),p.__tres.dispose=m;return}Ap(_)&&tr(m)&&p.addEventListener(gC[_],m);let y=sp(x),w=v?.[y];if(x==="args"){const C=p,S=g??[],E=m??[],I=p.__tres?.type||p.type;if(I&&S.length&&!Vg(S,E)){const P=new Qu.value[I](...m),N=Object.getOwnPropertyDescriptors(P);Object.entries(N).forEach(([D,k])=>{if(!(!k.writable&&!k.set)&&D in C)try{C[D]=P[D]}catch(U){console.warn(`Could not set property ${D} on ${I}:`,U)}}),v=C}return}if(v.type==="BufferGeometry"){if(x==="args")return;v.setAttribute(sp(x),new dt(...m));return}if(x.includes("-")&&w===void 0){const C=Dl(v,x);if(w=C.target,v=C.target,y=C.key,w&&y){w[y]=m,$r(p)&&p.updateProjectionMatrix(),ju(p);return}}let M=m;if(M===""&&(M=!0),tr(w)){Ap(_)||(Array.isArray(M)?p[y](...M):p[y](M)),y.startsWith("on")&&tr(M)&&(v[y]=M);return}bp(w)&&bp(M)?w.mask=M.mask:A_(w)&&W1(M)?w.set(M):q1(w)&&Y1(M)&&w.constructor===M.constructor?w.copy(M):Ju(w)&&Array.isArray(M)?"fromArray"in w&&typeof w.fromArray=="function"?w.fromArray(M):w.set(...M):Ju(w)&&typeof M=="number"?"setScalar"in w&&typeof w.setScalar=="function"?w.setScalar(M):w.set(M):v[y]=M,$r(p)&&p.updateProjectionMatrix(),ju(p)}function h(p){return p?.__tres?.parent||null}function d(p){if(!p||!("__tres"in p))return null;const _=h(p)?.__tres?.objects||[],g=_.findIndex(m=>m===p);return g<0||g>=_.length-1?null:_[g+1]}const f=()=>{};return{insert:l,remove:c,createElement:a,patchProp:u,parentNode:h,createText:n,createComment:r,setText:f,setElementText:f,nextSibling:d,querySelector:f,setScopeId:f,cloneNode:f,insertStaticContent:f}},dd=new Map,Ip=i=>dd.get(i),vC=(i,e)=>{dd.set(i,e)},xC=i=>dd.delete(i),yC=["asset-load"];var SC=class{subscribers=new Set;messageQueue=[];maxQueueSize=100;send(i,e){const t={type:i,data:e,timestamp:Date.now()};this.subscribers.size>0?this.subscribers.forEach(n=>n(t)):yC.includes(i)&&this.queueMessage(t)}queueMessage(i){this.messageQueue.push(i),this.messageQueue.length>this.maxQueueSize&&this.messageQueue.shift()}flushQueue(){this.messageQueue.length===0||this.subscribers.size===0||(this.messageQueue.forEach(i=>{this.subscribers.forEach(e=>e(i))}),this.messageQueue=[])}subscribe(i){return this.subscribers.add(i),this.flushQueue(),()=>{this.subscribers.delete(i)}}get hasSubscribers(){return this.subscribers.size>0}get queueSize(){return this.messageQueue.length}clearQueue(){this.messageQueue=[]}};function MC(i,e){const t=`▲ ■ ●${i}`;typeof Pp=="function"?Pp(t,e):console.log(t)}function Pp(i,e){throw new Error(i+e)}function fd(i){let e=0;return i.traverse(t=>{if(E_(t)&&t.type!=="HightlightMesh"){const n=t.geometry,r=n.attributes.position.count*3*Float32Array.BYTES_PER_ELEMENT,s=n.index?n.index.count*Uint32Array.BYTES_PER_ELEMENT:0,o=n.attributes.normal?n.attributes.normal.count*3*Float32Array.BYTES_PER_ELEMENT:0,a=n.attributes.uv?n.attributes.uv.count*2*Float32Array.BYTES_PER_ELEMENT:0,l=r+s+o+a;e+=l}}),e}function Lp(i,e,t){i.push(e),i.length>t&&i.shift()}function bC(i){return(i/1024).toFixed(2)}function EC(i){if(!i)return;typeof window<"u"&&!window.__TRES__DEVTOOLS__&&(window.__TRES__DEVTOOLS__=new SC);const e={maxFrames:160,fps:{value:0,accumulator:[]},memory:{currentMem:0,allocatedMem:0,accumulator:[]}},t=100,n=uw({every:t}),{isSupported:r,memory:s}=dw({}),o=160;let a=performance.now(),l=0;const c=1,u=({timestamp:d})=>{i.scene.value&&(e.memory.allocatedMem=fd(i.scene.value)),d-a>=t&&(a=d,Lp(e.fps.accumulator,n.value,o),e.fps.value=n.value,r.value&&s.value?.usedJSHeapSize&&(Lp(e.memory.accumulator,s.value.usedJSHeapSize/1024/1024,o),e.memory.accumulator.length>0&&(e.memory.currentMem=e.memory.accumulator.reduce((f,p)=>f+p,0)/e.memory.accumulator.length)))},{pause:h}=jh(({delta:d})=>{window.__TRES__DEVTOOLS__&&(u({timestamp:performance.now()}),l+=d,l>=c&&(window.__TRES__DEVTOOLS__.send("context",i),window.__TRES__DEVTOOLS__.send("performance",e),l=0))},{immediate:!0});es(()=>{h()})}const O_=(i,e)=>{if(i.uuid===e)return i;for(const t of i.children){const n=O_(t,e);if(n)return n}};var TC=class extends Mt{type="HightlightMesh";createTime;constructor(...i){super(...i),this.createTime=Date.now()}onBeforeRender(){const i=(Date.now()-this.createTime)/1e3,e=1+.07*Math.sin(2.5*i);this.scale.set(e,e,e)}};const U_=i=>{const e={id:`scene-${i.uuid}`,label:i.type,children:[],tags:[]};i.name!==""&&e.tags.push({label:i.name,textColor:5750629,backgroundColor:15793395});const t=fd(i);return t>0&&e.tags.push({label:`${bC(t)} KB`,textColor:15707189,backgroundColor:16775644,tooltip:"Memory usage"}),i.type.includes("Light")&&(X1(i)&&e.tags.push({label:`${i.intensity}`,textColor:9738662,backgroundColor:16316922,tooltip:"Intensity"}),e.tags.push({label:`#${new be(i.color).getHexString()}`,textColor:9738662,backgroundColor:16316922,tooltip:"Color"})),i.type.includes("Camera")&&(e.tags.push({label:`${i.fov}°`,textColor:9738662,backgroundColor:16316922,tooltip:"Field of view"}),e.tags.push({label:`x: ${Math.round(i.position.x)} y: ${Math.round(i.position.y)} z: ${Math.round(i.position.z)}`,textColor:9738662,backgroundColor:16316922,tooltip:"Position"})),e};function wC(i,e,t=""){return{id:`context-${e}-${t?`${t}.${i}`:i}`,label:i,children:[],tags:[]}}function F_(i,e,t=""){i.children.forEach(n=>{if(n.type==="HightlightMesh"||t&&!n.type.includes(t)&&!n.name.includes(t))return;const r=U_(n);e.children.push(r),F_(n,r,t)})}function th(i,e,t=new WeakSet,n=0,r=4,s,o=""){if(n>=r||!i||t.has(i))return;const a=n===0?i?.scene?.value?.uuid||Math.random().toString(36).slice(2,11):s;t.add(i),Object.entries(i).forEach(([l,c])=>{if(l.startsWith("_")||typeof c=="function")return;const u=o?`${o}.${l}`:l,h=wC(l,a,o);l!=="scene"&&(Zr(c)?(h.tags.push({label:`Ref<${typeof c.value}>`,textColor:4372611,backgroundColor:15793395}),c.value&&typeof c.value=="object"?th(c.value,h,t,n+1,r,a,u):h.label=`${l}: ${JSON.stringify(c.value)}`):c&&typeof c=="object"&&!Array.isArray(c)?Object.keys(c).length>0?t.has(c)?h.tags.push({label:"Circular",textColor:16711680,backgroundColor:16773360}):th(c,h,t,n+1,r,a,u):h.label=`${l}: {}`:Array.isArray(c)?(h.label=`${l}: Array(${c.length})`,h.tags.push({label:`length: ${c.length}`,textColor:9738662,backgroundColor:16316922})):h.label=`${l}: ${JSON.stringify(c)}`,e.children.push(h))})}const AC=i=>e=>{if(e.inspectorId===So){const t=U_(i.scene.value);F_(i.scene.value,t,e.filter);const n={id:"context-root",label:"Context",children:[],tags:[]};th(i,n),e.rootNodes=[t,n]}},CC=(i,{highlightMesh:e,prevInstance:t})=>n=>{if(n.inspectorId!==So)return;const r=new mi({color:11003607,transparent:!0,opacity:.2,depthTest:!1,side:Ln});if(n.nodeId.includes("scene")){const s=n.nodeId.match(/^scene-(.+)$/),o=s?s[1]:null;if(!o)return;const[a]=i.scene.value.getObjectsByProperty("uuid",o);if(!a)return;if(t&&e&&e.parent&&t.remove(e),E_(a)){const l=new TC(a.geometry.clone(),r);a.add(l),e=l,t=a}if(n.state={object:Object.entries(a).map(([l,c])=>l==="children"?{key:l,value:c.filter(u=>u.type!=="HightlightMesh")}:{key:l,value:c,editable:!0}).filter(({key:l})=>l!=="parent")},hd(a)){const l={...n.state,state:[{key:"Scene Info",value:{objects:a.children.length,memory:fd(a),calls:i.renderer.instance.info.render.calls,triangles:i.renderer.instance.info.render.triangles,points:i.renderer.instance.info.render.points,lines:i.renderer.instance.info.render.lines}}]};"programs"in i.renderer.instance.info&&l.state.push({key:"Programs",value:i.renderer.instance.info.programs?.map(c=>({...c,programName:c.name}))}),n.state=l}}else if(n.nodeId.includes("context")){const s=n.nodeId.match(/^context-([^-]+(?:-[^-]+)*)-(.+)$/),o=s?s[2]:"context";if(!o||o==="context"){n.state={object:Object.entries(i).filter(([c])=>!c.startsWith("_")&&c!=="parent").map(([c,u])=>({key:c,value:Zr(u)?u.value:u,editable:!1}))};return}const a=o.split(".");let l=i;for(const c of a){if(!l||typeof l!="object")break;l=Zr(l[c])?l[c].value:l[c]}l!==void 0&&(n.state={object:Object.entries(l).filter(([c])=>!c.startsWith("_")&&c!=="parent").map(([c,u])=>Zr(u)?{key:c,value:u.value,editable:!1}:typeof u=="function"?{key:c,value:"ƒ()",editable:!1}:u&&typeof u=="object"?{key:c,value:Array.isArray(u)?`Array(${u.length})`:"Object",editable:!1}:{key:c,value:u,editable:!1})})}},RC=(i,e,t,n)=>{const r=O_(i,e);if(!r){console.warn("Object with UUID not found in the scene.");return}let s=r;for(let a=0;a<t.length-1;a++)if(s[t[a]]!==void 0)s=s[t[a]];else{console.warn(`Property path is not valid: ${t.join(".")}`);return}const o=t[t.length-1];s[o]!==void 0?s[o]=n:console.warn(`Property path is not valid: ${t.join(".")}`)},IC=i=>e=>{if(e.inspectorId===So&&e.nodeId.includes("scene")){const t=e.nodeId.match(/^scene-(.+)$/),n=t?t[1]:null;if(!n)return;RC(i.scene.value,n,e.path,e.state.value)}},So="tres:inspector";function PC(i,e){const t={id:"dev.esm.tres",label:"TresJS 🪐",logo:"https://raw.githubusercontent.com/Tresjs/tres/main/public/favicon.svg",packageName:"tresjs",homepage:"https://docs.tresjs.org",app:i},n=null,r=null;EC(e),e1(t,s=>{typeof s.now!="function"&&MC("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.addInspector({id:So,label:"TresJS 🪐",icon:"account_tree",treeFilterPlaceholder:"Search instances"}),setInterval(()=>{s.sendInspectorTree(So)},1e3),setInterval(()=>{s.notifyComponentUpdate()},5e3),s.on.getInspectorTree(AC(e)),s.on.getInspectorState(CC(e,{highlightMesh:n,prevInstance:r})),s.on.editInspectorState(IC(e))})}var LC=Su({__name:"Context",props:{camera:{type:null,required:!1},windowSize:{type:Boolean,required:!1},fpsLimit:{type:Number,required:!1},enableProvideBridge:{type:Boolean,required:!1},customRendererOptions:{type:Object,required:!1},antialias:{type:Boolean,required:!1},stencil:{type:Boolean,required:!1},depth:{type:Boolean,required:!1},precision:{type:String,required:!1},logarithmicDepthBuffer:{type:Boolean,required:!1},preserveDrawingBuffer:{type:Boolean,required:!1},powerPreference:{type:null,required:!1},alpha:{type:Boolean,required:!1},premultipliedAlpha:{type:Boolean,required:!1},failIfMajorPerformanceCaveat:{type:Boolean,required:!1},clearColor:{type:[Object,String,Number],required:!1},clearAlpha:{type:Number,required:!1},shadows:{type:Boolean,required:!1},toneMapping:{type:null,required:!1},shadowMapType:{type:null,required:!1},useLegacyLights:{type:Boolean,required:!1},outputColorSpace:{type:null,required:!1},toneMappingExposure:{type:Number,required:!1},renderMode:{type:String,required:!1},dpr:{type:[Number,Array],required:!1},renderer:{type:Function,required:!1},canvas:{type:null,required:!0}},emits:["ready","error","pointermissed","render","beforeLoop","loop","click","contextmenu","pointermove","pointerenter","pointerleave","pointerover","pointerout","dblclick","pointerdown","pointerup","pointercancel","lostpointercapture","wheel"],setup(i,{expose:e,emit:t}){const n=i,r=t,s=J_(),o=Dt(new Jl),a=Qr();eh(qT);const l=(y,w)=>Su({setup(){const M=Qr()?.appContext;M&&(M.app=a?.appContext.app);const C={};function S(E){E&&(E.parent&&S(E.parent),E.provides&&Object.assign(C,E.provides))}return a?.parent&&n.enableProvideBridge&&(S(a.parent),Reflect.ownKeys(C).forEach(E=>{Ca(E,C[E])})),Ca(dC,y),Ca("extend",eh),typeof window<"u"&&M?.app&&PC(M?.app,y),()=>(w.value,Md(Q_,null,s.default?.()??[]))}}),c=y=>{const w=n.canvas;if(Ip(w))return;const M=bn(0),C=l(y,M),S=j_(_C({context:y,options:n.customRendererOptions}));S.render(Md(C),o.value),vC(w,{renderer:S,internalComponent:C,hmrTick:M,context:y})},u=(y,w=!1)=>{L_(y.scene.value),w&&(y.renderer.instance.dispose(),y.renderer.instance instanceof Kh&&(y.renderer.instance.renderLists.dispose(),y.renderer.instance.forceContextLoss())),o.value.__tres={root:y,objects:[],isUnmounting:!0}},h=Dt(fC({scene:o.value,canvas:n.canvas,fpsLimit:()=>n.fpsLimit??1/0,windowSize:n.windowSize??!1,rendererOptions:n}));e({context:h,dispose:()=>u(h.value,!0)});const d=()=>{const y=Ip(n.canvas);if(!y)return;(M=>hd(M)&&"__tres"in M)(o.value)&&(o.value.__tres.isUnmounting=!0),y.renderer.render(null,o.value),u(h.value),xC(n.canvas)},{camera:f,renderer:p}=h.value,{registerCamera:_,cameras:g,activeCamera:m,deregisterCamera:v}=f,x=()=>{const y=new Bt(45,window.innerWidth/window.innerHeight,.1,1e3);y.position.set(3,3,3),y.lookAt(0,0,0),_(y);const w=qn(()=>{g.value.length>=2&&(y.removeFromParent(),v(y),w?.())})};return h.value.events.onPointerMissed(y=>{r("pointermissed",y)}),Kn(()=>n.camera,(y,w)=>{y&&_(ct(y),!0),w&&(ct(w).removeFromParent(),v(ct(w)))},{immediate:!0}),p.onRender(()=>{h.value&&r("render",h.value)}),p.loop.onLoop(y=>{h.value&&r("loop",{...h.value,...y})}),p.loop.onBeforeLoop(y=>{h.value&&r("beforeLoop",{...h.value,...y})}),p.onReady(()=>{c(h.value),r("ready",h.value),m.value||x()}),p.onError(y=>{r("error",y)}),Ol(async()=>{await QT(3e3),(!h.value.sizes.width||!h.value.sizes.height.value)&&console.warn("TresCanvas: The canvas has no area, so nothing can be rendered. Set it manually on the parent element or use the prop windowSize.")}),es(d),()=>{}}}),NC=LC;const DC=["data-scene","data-tres"];var OC=Su({__name:"TresCanvas",props:{camera:{type:null,required:!1},windowSize:{type:Boolean,required:!1,default:void 0},fpsLimit:{type:Number,required:!1},enableProvideBridge:{type:Boolean,required:!1,default:!0},customRendererOptions:{type:Object,required:!1},antialias:{type:Boolean,required:!1,default:!0},stencil:{type:Boolean,required:!1,default:void 0},depth:{type:Boolean,required:!1,default:void 0},precision:{type:String,required:!1},logarithmicDepthBuffer:{type:Boolean,required:!1,default:void 0},preserveDrawingBuffer:{type:Boolean,required:!1,default:void 0},powerPreference:{type:null,required:!1},alpha:{type:Boolean,required:!1,default:void 0},premultipliedAlpha:{type:Boolean,required:!1},failIfMajorPerformanceCaveat:{type:Boolean,required:!1,default:void 0},clearColor:{type:[Object,String,Number],required:!1,default:"#000000"},clearAlpha:{type:Number,required:!1,default:1},shadows:{type:Boolean,required:!1,default:void 0},toneMapping:{type:null,required:!1,default:Ul},shadowMapType:{type:null,required:!1,default:rh},useLegacyLights:{type:Boolean,required:!1,default:void 0},outputColorSpace:{type:null,required:!1},toneMappingExposure:{type:Number,required:!1},renderMode:{type:String,required:!1,default:"always"},dpr:{type:[Number,Array],required:!1},renderer:{type:Function,required:!1}},emits:["ready","error","pointermissed","render","beforeLoop","loop","click","contextmenu","pointermove","pointerenter","pointerleave","pointerover","pointerout","dblclick","pointerdown","pointerup","pointercancel","lostpointercapture","wheel"],setup(i,{expose:e,emit:t}){const n=i,r=t,s=bn(),o=Dt();return e({get context(){return o.value?.context},dispose:()=>o.value?.dispose()}),(a,l)=>(Oa(),Up("canvas",{ref_key:"canvasRef",ref:s,"data-scene":o.value?.context?.scene.value.uuid,class:zp(a.$attrs.class),"data-tres":`tresjs ${ih(V1)}`,style:K_({display:"block",width:"100%",height:"100%",position:i.windowSize?"fixed":"relative",top:0,left:0,pointerEvents:"auto",touchAction:"none",...a.$attrs.style})},[s.value?(Oa(),Fp(NC,Z_({key:0,ref_key:"contextRef",ref:o,canvas:s.value},n,{onReady:l[0]||(l[0]=c=>r("ready",c)),onError:l[1]||(l[1]=c=>r("error",c)),onPointermissed:l[2]||(l[2]=c=>r("pointermissed",c)),onRender:l[3]||(l[3]=c=>r("render",c)),onBeforeLoop:l[4]||(l[4]=c=>r("beforeLoop",c)),onLoop:l[5]||(l[5]=c=>r("loop",c)),onClick:l[6]||(l[6]=c=>r("click",c)),onContextmenu:l[7]||(l[7]=c=>r("contextmenu",c)),onPointermove:l[8]||(l[8]=c=>r("pointermove",c)),onPointerenter:l[9]||(l[9]=c=>r("pointerenter",c)),onPointerleave:l[10]||(l[10]=c=>r("pointerleave",c)),onPointerover:l[11]||(l[11]=c=>r("pointerover",c)),onPointerout:l[12]||(l[12]=c=>r("pointerout",c)),onDblclick:l[13]||(l[13]=c=>r("dblclick",c)),onPointerdown:l[14]||(l[14]=c=>r("pointerdown",c)),onPointerup:l[15]||(l[15]=c=>r("pointerup",c)),onPointercancel:l[16]||(l[16]=c=>r("pointercancel",c)),onLostpointercapture:l[17]||(l[17]=c=>r("lostpointercapture",c)),onWheel:l[18]||(l[18]=c=>r("wheel",c))}),{default:Bp(()=>[$_(a.$slots,"default")]),_:3},16,["canvas"])):Vp("v-if",!0)],14,DC))}}),UC=OC;const FC=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,BC=`
  precision highp float;
  varying vec2 vUv;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_pulse;
  uniform float u_activeProgress;

  uniform float u_blendAmount;
  uniform vec3 u_colors[4];
  uniform vec2 u_colorWeights;
  uniform int u_colors_length;
  uniform float u_maskSoftness;
  uniform float u_coldEdgeBleed;
  uniform float u_warmEdgeBleed;
  uniform float u_internalBlend;
  uniform float u_hotspotBlend;
  uniform float u_colorCurve;
  uniform float u_seed;
  uniform float u_waveAmplitude;
  uniform float u_waveAngle;
  uniform float u_waveFreqX;
  uniform float u_waveFreqY;
  uniform float u_waveSpeed;

  #define S(a,b,t) smoothstep(a,b,t)

  mat2 Rot(float a) {
      float s = sin(a), c = cos(a);
      return mat2(c, -s, s, c);
  }

  vec2 hash(vec2 p) {
      float s = u_seed;
      vec2 k1 = vec2(2127.1 + s * 13.37, 81.17 + s * 7.31);
      vec2 k2 = vec2(1269.5 + s * 11.13, 283.37 + s * 5.79);
      p = vec2(dot(p, k1), dot(p, k2));
      return fract(sin(p) * (43758.5453 + s * 1.618));
  }

  float noise(in vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      float n = mix(
          mix(dot(-1.0 + 2.0 * hash(i), f),
              dot(-1.0 + 2.0 * hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
          mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
              dot(-1.0 + 2.0 * hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
          u.y
      );
      return 0.5 + 0.5 * n;
  }

  vec3 getColor(int idx) {
      if (idx == 0) return u_colors[0]; // Teal
      if (idx == 1) return u_colors[1]; // Red
      if (idx == 2) return u_colors[2]; // Yellow
      if (idx == 3) return u_colors[3]; // Orange
      return vec3(0.0);
  }

  float seedF(float base) {
      return base * (1.0 + 0.5 * sin(u_seed * 3.17 + base));
  }

  vec2 warpUV(vec2 uv) {
      // Multiply time offset by frequency to maintain constant physical sliding velocity (v = w / k)
      float tx = u_time * u_waveSpeed * u_waveFreqX;
      float ty = u_time * u_waveSpeed * u_waveFreqY;

      float angleOffset = sin(u_seed * 2.73) * 30.0;
      mat2 dirRot = Rot(radians(u_waveAngle + angleOffset));
      vec2 ruv = dirRot * uv;

      float fxMod = seedF(u_waveFreqX);
      float fyMod = seedF(u_waveFreqY);

      float phaseX = fract(sin(u_seed * 7.19) * 437.58) * 6.2832;
      float phaseY = fract(cos(u_seed * 3.41) * 291.37) * 6.2832;

      // Core wave with seed-dependent harmonics, using scaled time!
      float harmonic = sin(u_seed * 1.23) * 0.5;
      float a = fyMod * ruv.y - sin(ruv.x * fxMod + ruv.y - tx + phaseX);
      a += harmonic * sin(ruv.x * fxMod * 2.0 + ruv.y * 0.5 + tx * 0.7 + phaseY);

      // Smoothstep mask (unchanged)
      a = smoothstep(
          cos(a) * u_maskSoftness,
          sin(a) * u_maskSoftness + 3.0,
          cos(a - fyMod * ruv.y) - sin(a - fxMod * ruv.x)
      );

      // Dynamic wave amplitude scale when active progress is on
      float amp = u_waveAmplitude * (1.0 + u_activeProgress * 0.35);
      a *= amp;

      uv = cos(a) * uv + sin(a) * vec2(-uv.y, uv.x);
      return uv;
  }

  void main() {
      // Magnify effect synced with pulse (zoom in then out)
      float magnify = 1.0 - sin(u_pulse * 3.14159) * 0.15;
      vec2 zoomedUv = (vUv - 0.5) * magnify + 0.5;

      // Apply 3D lens curvature based on u_activeProgress
      if (u_activeProgress > 0.0) {
          vec2 d = zoomedUv - 0.5;
          float r2 = dot(d, d);
          // 3D barrel distortion (creates a spherical 3D lens bulge)
          zoomedUv = 0.5 + d * (1.0 - u_activeProgress * 0.35 * r2);
      }

      vec2 fragCoord = zoomedUv * u_resolution;
      vec2 uv = fragCoord / u_resolution.xy;
      float ratio = u_resolution.x / u_resolution.y;
      float t = u_time * u_waveSpeed;

      vec2 tuv = uv - 0.5;

      vec2 seedShift = vec2(sin(u_seed * 4.37), cos(u_seed * 5.91)) * 100.0;
      float degree = noise(vec2(t * 0.1, tuv.x * tuv.y) + seedShift);
      tuv.y *= 1.0 / ratio;
      tuv *= Rot(radians((degree - 0.5) * 720.0 + 180.0));
      tuv.y *= ratio;

      // Seed-rotate uv2 before warping
      vec2 uv2 = (fragCoord * 2.0 - u_resolution.xy) / (u_resolution.x + u_resolution.y) * 2.0;
      float preRotAngle = fract(sin(u_seed * 5.63) * 173.29) * 6.2832;
      uv2 *= Rot(preRotAngle);
      vec2 warped = warpUV(uv2) * 0.5 + 0.5;

      vec2 blendUV = mix(tuv, warped - 0.5, u_blendAmount);

      vec3 cTeal = getColor(0);
      vec3 cRed = getColor(1);
      vec3 cYellow = getColor(2);
      vec3 cOrange = getColor(3);

      // Define spatial anchor centers in the warped UV space
      float timeAnim = u_time * 0.2;
      vec2 p1 = vec2(-0.4, 0.4) * Rot(sin(u_seed * 1.83) + timeAnim);
      vec2 p2 = vec2(0.4, -0.4) * Rot(cos(u_seed * 2.47) + timeAnim * 0.8);

      // Warm Group Masks (Scaled proportionally off a single heaviness weight)
      float warmWeight = u_colorWeights.y;
      float radiusOuter = warmWeight;        // Red (100% of weight)
      float radiusMid   = warmWeight * 0.75; // Yellow (Top 25% is Red, so Yellow stops at 75%)
      float radiusCore  = warmWeight * 0.55; // Orange (Core is 55%, leaving a 20% Yellow band)
      float radiusHot   = warmWeight * 0.30; // Hotspot (Inner 30% of the warm group)

      vec3 hotColor = vec3(1.0, 0.85, 0.1); // Intense radiant golden-yellow

      float shift = u_activeProgress * 0.018;

      // --- RED CHANNEL ---
      vec2 uvR = blendUV - vec2(shift, 0.0);
      float d1_R = length(uvR - p1);
      float d2_R = length(uvR - p2);
      float wTeal_R = S(u_colorWeights.x + u_coldEdgeBleed, u_colorWeights.x - u_coldEdgeBleed, d1_R);
      float wOuter_R = S(radiusOuter + u_warmEdgeBleed, radiusOuter - u_warmEdgeBleed, d2_R);
      float wMid_R   = S(radiusMid + u_internalBlend, radiusMid - u_internalBlend, d2_R);
      float wCore_R  = S(radiusCore + u_internalBlend, radiusCore - u_internalBlend, d2_R);
      float wHot_R   = S(radiusHot + u_hotspotBlend, 0.0, d2_R);
      wTeal_R  = pow(wTeal_R, u_colorCurve);
      wOuter_R = pow(wOuter_R, u_colorCurve);
      wMid_R   = pow(wMid_R, u_colorCurve);
      wCore_R  = pow(wCore_R, u_colorCurve);
      wHot_R   = pow(wHot_R, u_colorCurve);

      float rVal = 0.0;
      rVal = mix(rVal, cRed.r, wOuter_R);
      rVal = mix(rVal, cYellow.r, wMid_R);
      rVal = mix(rVal, cOrange.r, wCore_R);
      rVal = mix(rVal, hotColor.r, wHot_R * 0.85);
      rVal = mix(rVal, cTeal.r, wTeal_R);

      // --- GREEN CHANNEL ---
      vec2 uvG = blendUV;
      float d1_G = length(uvG - p1);
      float d2_G = length(uvG - p2);
      float wTeal_G = S(u_colorWeights.x + u_coldEdgeBleed, u_colorWeights.x - u_coldEdgeBleed, d1_G);
      float wOuter_G = S(radiusOuter + u_warmEdgeBleed, radiusOuter - u_warmEdgeBleed, d2_G);
      float wMid_G   = S(radiusMid + u_internalBlend, radiusMid - u_internalBlend, d2_G);
      float wCore_G  = S(radiusCore + u_internalBlend, radiusCore - u_internalBlend, d2_G);
      float wHot_G   = S(radiusHot + u_hotspotBlend, 0.0, d2_G);
      wTeal_G  = pow(wTeal_G, u_colorCurve);
      wOuter_G = pow(wOuter_G, u_colorCurve);
      wMid_G   = pow(wMid_G, u_colorCurve);
      wCore_G  = pow(wCore_G, u_colorCurve);
      wHot_G   = pow(wHot_G, u_colorCurve);

      float gVal = 0.0;
      gVal = mix(gVal, cRed.g, wOuter_G);
      gVal = mix(gVal, cYellow.g, wMid_G);
      gVal = mix(gVal, cOrange.g, wCore_G);
      gVal = mix(gVal, hotColor.g, wHot_G * 0.85);
      gVal = mix(gVal, cTeal.g, wTeal_G);

      // --- BLUE CHANNEL ---
      vec2 uvB = blendUV + vec2(shift, 0.0);
      float d1_B = length(uvB - p1);
      float d2_B = length(uvB - p2);
      float wTeal_B = S(u_colorWeights.x + u_coldEdgeBleed, u_colorWeights.x - u_coldEdgeBleed, d1_B);
      float wOuter_B = S(radiusOuter + u_warmEdgeBleed, radiusOuter - u_warmEdgeBleed, d2_B);
      float wMid_B   = S(radiusMid + u_internalBlend, radiusMid - u_internalBlend, d2_B);
      float wCore_B  = S(radiusCore + u_internalBlend, radiusCore - u_internalBlend, d2_B);
      float wHot_B   = S(radiusHot + u_hotspotBlend, 0.0, d2_B);
      wTeal_B  = pow(wTeal_B, u_colorCurve);
      wOuter_B = pow(wOuter_B, u_colorCurve);
      wMid_B   = pow(wMid_B, u_colorCurve);
      wCore_B  = pow(wCore_B, u_colorCurve);
      wHot_B   = pow(wHot_B, u_colorCurve);

      float bVal = 0.0;
      bVal = mix(bVal, cRed.b, wOuter_B);
      bVal = mix(bVal, cYellow.b, wMid_B);
      bVal = mix(bVal, cOrange.b, wCore_B);
      bVal = mix(bVal, hotColor.b, wHot_B * 0.85);
      bVal = mix(bVal, cTeal.b, wTeal_B);

      vec3 col = vec3(rVal, gVal, bVal);

      // Soft tone curve with active contrast boost
      col = mix(col, col * col + 0.5 * sqrt(col), 0.3 + u_activeProgress * 0.15);

      gl_FragColor = vec4(col, 1.0);
  }
`,VC={__name:"WebGLBackgroundCore",setup(i){const{scrollVelocity:e,customStates:t}=n0(),n=bn(!1),r=bn(!1),s=hn(()=>typeof window>"u"?1:window.innerWidth<768?.15:window.innerWidth<1024?.25:1),o=Dt(null),a={default:{colors:["#3bffbd","#8a0000","#ffd400","#ff3300"],colorWeights:[.2,.34]},dark:{colors:["#37ffbc","#940a03","#dfa006","#ff3d00"],colorWeights:[.2,.2]},warm:{colors:["#37ffbc","#940a03","#dfa006","#ff3d00"],colorWeights:[.1,1.2]},split:{colors:["#37ffbc","#940a03","#dfa006","#ff3d00"],colorWeights:[.8,.8]}},l=t0({blendAmount:.34,colors:[...a.default.colors],colorWeights:[...a.default.colorWeights],maskSoftness:.74,coldEdgeBleed:.38,warmEdgeBleed:.45,internalBlend:.23,hotspotBlend:.33,colorCurve:1.28,seed:42,waveAmplitude:3.34,waveAngle:-98,waveFreqX:.2,waveFreqY:4.3,waveSpeed:4.57,scenario:"default"});Kn(()=>l.scenario,v=>{const x=a[v];x&&(l.colors=[...x.colors],l.colorWeights=[...x.colorWeights])}),Kn(l,v=>{if(o.value){const x=o.value.uniforms;x.u_blendAmount.value=v.blendAmount,x.u_maskSoftness.value=v.maskSoftness,x.u_coldEdgeBleed.value=v.coldEdgeBleed,x.u_warmEdgeBleed.value=v.warmEdgeBleed,x.u_internalBlend.value=v.internalBlend,x.u_hotspotBlend.value=v.hotspotBlend,x.u_colorCurve.value=v.colorCurve,x.u_seed.value=v.seed,x.u_waveAmplitude.value=v.waveAmplitude,x.u_waveAngle.value=v.waveAngle,x.u_waveFreqX.value=v.waveFreqX,x.u_waveFreqY.value=v.waveFreqY,x.u_waveSpeed.value=v.waveSpeed,x.u_colorWeights.value=v.colorWeights;const y=v.colors.map(w=>{const M=parseInt(w.slice(1,3),16)/255,C=parseInt(w.slice(3,5),16)/255,S=parseInt(w.slice(5,7),16)/255;return new R(M,C,S)});x.u_colors.value=y}},{deep:!0});const c={u_time:{value:0},u_resolution:{value:[1,1]},u_pulse:{value:0},u_activeProgress:{value:0},u_blendAmount:{value:l.blendAmount},u_colors:{value:l.colors.map(v=>{const x=parseInt(v.slice(1,3),16)/255,y=parseInt(v.slice(3,5),16)/255,w=parseInt(v.slice(5,7),16)/255;return new R(x,y,w)})},u_colorWeights:{value:[...l.colorWeights]},u_colors_length:{value:4},u_maskSoftness:{value:l.maskSoftness},u_coldEdgeBleed:{value:l.coldEdgeBleed},u_warmEdgeBleed:{value:l.warmEdgeBleed},u_internalBlend:{value:l.internalBlend},u_hotspotBlend:{value:l.hotspotBlend},u_colorCurve:{value:l.colorCurve},u_seed:{value:l.seed},u_waveAmplitude:{value:l.waveAmplitude},u_waveAngle:{value:l.waveAngle},u_waveFreqX:{value:l.waveFreqX},u_waveFreqY:{value:l.waveFreqY},u_waveSpeed:{value:l.waveSpeed}},u=()=>{typeof window<"u"&&(c.u_resolution.value=[window.innerWidth,window.innerHeight])},h=bn(0),d=()=>{Sr.to(h,{value:1,duration:1.2,ease:"power2.out"})},f=()=>{Sr.to(h,{value:0,duration:1.2,ease:"power2.out"})};let p=0;const _=(v,x)=>{if(p+=x/1e3+e.value*.0015,o.value){if(o.value.uniforms.u_time.value=p*.4,o.value.uniforms.u_pulse.value=t.value.pulse||0,t.value.colorWeights){const M=t.value.colorWeights,C=1-Math.exp(-x*.005);l.colorWeights[0]+=(M[0]-l.colorWeights[0])*C,l.colorWeights[1]+=(M[1]-l.colorWeights[1])*C}o.value.uniforms.u_colorWeights.value=[l.colorWeights[0],l.colorWeights[1]];const y=Math.abs(e.value),w=Math.min(y*.05,.3);o.value.uniforms.u_maskSoftness.value=l.maskSoftness+w,o.value.uniforms.u_activeProgress.value=h.value}},g=v=>{const x=v.detail?.speed??8,y=v.detail?.duration??1.5;Sr.to(l,{waveSpeed:x,duration:y,ease:"power1.out",overwrite:"auto"})},m=v=>{const x=v.detail?.duration??2;Sr.to(l,{waveSpeed:4.57,duration:x,ease:"power1.inOut",overwrite:"auto"})};return Ol(()=>{typeof window<"u"&&(u(),window.addEventListener("resize",u),window.addEventListener("glowing-edge-show",d),window.addEventListener("glowing-edge-hide",f),window.addEventListener("bg-speed-shift",g),window.addEventListener("bg-speed-reset",m),Sr.ticker.add(_),setTimeout(()=>{n.value=!0,setTimeout(()=>{r.value=!0},50)},100))}),es(()=>{typeof window<"u"&&(window.removeEventListener("resize",u),window.removeEventListener("glowing-edge-show",d),window.removeEventListener("glowing-edge-hide",f),window.removeEventListener("bg-speed-shift",g),window.removeEventListener("bg-speed-reset",m),Sr.ticker.remove(_))}),(v,x)=>(Oa(),Up("div",null,[xs("div",{class:zp(["tres-canvas-container transition-opacity duration-[1500ms] ease-out",r.value?"opacity-100":"opacity-0"])},[n.value?(Oa(),Fp(ih(UC),{key:0,"clear-color":"#050505","window-size":!0,dpr:s.value,alpha:""},{default:Bp(()=>[x[1]||(x[1]=xs("TresOrthographicCamera",{args:[-1,1,1,-1,.1,10],position:[0,0,1]},null,-1)),xs("TresMesh",null,[x[0]||(x[0]=xs("TresPlaneGeometry",{args:[2,2]},null,-1)),xs("TresShaderMaterial",{ref_key:"shaderMaterialRef",ref:o,"vertex-shader":FC,"fragment-shader":BC,uniforms:c,"depth-write":!1,"depth-test":!1},null,512)])]),_:1},8,["dpr"])):Vp("",!0)],2)]))}},WC=e0(VC,[["__scopeId","data-v-3203ad3b"]]);export{WC as default};
