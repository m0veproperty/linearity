(() => {
const MAP=window.__LOCAL_CAPTURE_MAP__||{};
const NETLIFY=window.__LOCAL_NETLIFY_FALLBACK__||{};
const BLOCK={json:"/__sitecloner/blocked.json",script:"/__sitecloner/blocked.js",style:"/__sitecloner/blocked.css",image:"/__sitecloner/pixel.svg",frame:"/__sitecloner/blank.html",media:"/__sitecloner/blank.html"};
const raw=v=>String(v&&v.url?v.url:v);
const decode=v=>{try{return decodeURIComponent(v)}catch{return v}};
const queryParam=(href,name)=>{
  const q=(String(href).split("?")[1]||"").replace(/&amp;/g,"&");
  for(const part of q.split("&")){
    const i=part.indexOf("=");
    const k=i<0?part:part.slice(0,i);
    if(k===name)return decode(i<0?"":part.slice(i+1));
  }
  return null;
};
const netlifyFallback=r=>{
  if(!String(r).includes("/.netlify/images"))return null;
  const source=queryParam(r,"url");
  return source&&NETLIFY[source]?NETLIFY[source]:null;
};
const localTarget=(value,kind="json")=>{
  const r=raw(value);
  const nf=netlifyFallback(r);
  if(nf)return nf;
  try{
    const a=document.createElement("a");
    a.href=r;
    if(a.protocol==="data:"||a.protocol==="blob:")return r;
    if(a.origin===location.origin)return a.pathname+a.search+a.hash;
    const exact=MAP[a.href]||MAP[a.origin+a.pathname+a.search];
    if(exact){
      const b=document.createElement("a");
      b.href=exact;
      if(b.origin===location.origin||b.protocol==="data:"||b.protocol==="blob:")return exact;
    }
    return BLOCK[kind]||BLOCK.json;
  }catch{return r}
};

const F=window.fetch.bind(window);
window.fetch=(input,init)=>{
  const mapped=localTarget(input,"json");
  if(mapped===BLOCK.json)return Promise.resolve(new Response("{}",{status:200,headers:{"content-type":"application/json"}}));
  if(typeof Request!=="undefined"&&input instanceof Request){
    try{return F(new Request(mapped,input),init)}catch{}
  }
  return F(mapped,init);
};

const XO=XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open=function(method,url,...rest){return XO.call(this,method,localTarget(url,"json"),...rest)};

try{
  const B=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);
  if(B)navigator.sendBeacon=(url,data)=>{
    const mapped=localTarget(url,"json");
    if(mapped===BLOCK.json)return true;
    return B(mapped,data);
  };
}catch{}

for(const [Ctor,prop,kind] of [
  [HTMLScriptElement,"src","script"],
  [HTMLLinkElement,"href","style"],
  [HTMLImageElement,"src","image"],
  [HTMLIFrameElement,"src","frame"],
  [HTMLVideoElement,"src","media"],
  [HTMLAudioElement,"src","media"],
  [HTMLSourceElement,"src","media"]
]){
  try{
    const d=Object.getOwnPropertyDescriptor(Ctor.prototype,prop);
    if(d&&d.set)Object.defineProperty(Ctor.prototype,prop,{...d,set(value){return d.set.call(this,localTarget(value,kind))}});
  }catch{}
}

const SA=Element.prototype.setAttribute;
Element.prototype.setAttribute=function(name,value){
  const n=String(name).toLowerCase();
  if(n==="src"||n==="data"||(n==="href"&&!(this instanceof HTMLAnchorElement))){
    let kind="json";
    if(this instanceof HTMLScriptElement)kind="script";
    else if(this instanceof HTMLLinkElement)kind="style";
    else if(this instanceof HTMLImageElement)kind="image";
    else if(this instanceof HTMLIFrameElement)kind="frame";
    else if(this instanceof HTMLVideoElement||this instanceof HTMLAudioElement||this instanceof HTMLSourceElement)kind="media";
    value=localTarget(value,kind);
  }else if(n==="srcset"){
    value=String(value).split(",").map(part=>{
      const bits=part.trim().split(/\s+/);
      const url=bits.shift()||"";
      return [localTarget(url,"image"),...bits].join(" ");
    }).join(", ");
  }
  return SA.call(this,name,value);
};

try{const W=window.Worker;if(W)window.Worker=function(url,opts){return new W(localTarget(url,"script"),opts)}}catch{}
try{const SW=window.SharedWorker;if(SW)window.SharedWorker=function(url,opts){return new SW(localTarget(url,"script"),opts)}}catch{}

const sanitizeExisting=()=>{
  const rules=[
    ["script[src]","src","script"],["link[href]","href","style"],["img[src]","src","image"],
    ["iframe[src]","src","frame"],["video[src]","src","media"],["audio[src]","src","media"],["source[src]","src","media"]
  ];
  for(const [selector,attr,kind] of rules){
    document.querySelectorAll(selector).forEach(el=>{
      const v=el.getAttribute(attr);
      if(v)el.setAttribute(attr,localTarget(v,kind));
    });
  }
  document.querySelectorAll("[srcset]").forEach(el=>{
    const v=el.getAttribute("srcset");
    if(v)el.setAttribute("srcset",v);
  });
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",sanitizeExisting,{once:true});
else sanitizeExisting();

window.__LOCAL_ONLY_GUARD__=true;
window.__LOCAL_ONLY_STRICT__=true;
window.__LOCAL_IMAGE_FALLBACK_COUNT__=Object.keys(NETLIFY).length;
})();