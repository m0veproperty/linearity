import{u as he}from"./useAnimationStore.96bbcec88aa7ef634a27b43d5b2c11d2d4b1e903.js";import Q from"./index4.96bbcec88aa7ef634a27b43d5b2c11d2d4b1e903.js";import{_ as Se,O as ge,f as Be,N as Fe,o as Ce,c as Me,a as Ue,B as Ae,s as ve,n as pe,aC as Le}from"./entry.96bbcec88aa7ef634a27b43d5b2c11d2d4b1e903.js";const L=8,J=`
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,De=`
  precision highp float;
  uniform float u_padding;
  uniform vec2 u_resolution;
  uniform vec2 u_coverAspect;
  uniform float u_time;
  uniform float u_amount;
  uniform float u_pulse;
  uniform vec2 u_pulseCenter;
  uniform vec3 u_c0;
  uniform vec3 u_c1;
  uniform vec3 u_c2;
  uniform vec3 u_c3;
  uniform sampler2D u_blueNoiseTexture;
  uniform vec2 u_blueNoiseCoordOffset;
  uniform float u_rotSpeed;
  uniform float u_alphaMul;
  uniform float u_squircle;
  uniform float u_debugBlob;
  uniform float u_debugMask;
  varying vec2 v_uv;

  #define MAX_COLORS 8
  #define MAX_COLORS_MINUS_ONE 7
  uniform int u_gradientMode;
  uniform int u_colorCount;
  uniform vec3 u_colors[MAX_COLORS];
  uniform float u_stops[MAX_COLORS];
  uniform vec2 u_positions[MAX_COLORS];
  uniform float u_influences[MAX_COLORS];

  // Specific uniforms to avoid dynamic array indexing in WebGL 1.0
  uniform vec3 u_lastColor;
  uniform float u_lastStop;

  float linearstep(float edge0, float edge1, float x) {
    return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
  }
  float sdSquircle(in vec2 p, in vec2 b) {
    vec2 d = abs(p) - b;
    vec2 m = max(d, 0.0);
    float l = pow(pow(m.x, u_squircle) + pow(m.y, u_squircle), 1.0 / u_squircle);
    return l + min(max(d.x, d.y), 0.0);
  }
  vec3 getBlueNoise(vec2 coord) {
    return texture2D(u_blueNoiseTexture, coord * (1.0 / 128.0) + u_blueNoiseCoordOffset).rgb;
  }

  vec3 getConicColor(vec2 uv) {
    float angle = atan(uv.y - 0.5, uv.x - 0.5);
    float t = fract(angle / 6.283185307 + 0.5);
    
    vec3 color = u_colors[0];
    for (int i = 0; i < MAX_COLORS_MINUS_ONE; i++) {
      if (i >= u_colorCount - 1) break;
      float s1 = u_stops[i];
      float s2 = u_stops[i+1];
      if (t >= s1 && t <= s2) {
        float f = (t - s1) / (s2 - s1 + 0.0001);
        color = mix(u_colors[i], u_colors[i+1], f);
      }
    }
    // Handle wrap around from last color to first color
    if (u_colorCount > 1) {
      if (t > u_lastStop) {
        float f = (t - u_lastStop) / (1.0 - u_lastStop + u_stops[0] + 0.0001);
        color = mix(u_lastColor, u_colors[0], f);
      }
      if (t < u_stops[0]) {
        float f = (t + 1.0 - u_lastStop) / (1.0 - u_lastStop + u_stops[0] + 0.0001);
        color = mix(u_lastColor, u_colors[0], f);
      }
    }
    return color;
  }

  vec3 getMeshColor(vec2 uv) {
    vec3 colorSum = vec3(0.0);
    float weightSum = 0.0;
    for (int i = 0; i < MAX_COLORS; i++) {
      if (i >= u_colorCount) break;
      float d = length(uv - u_positions[i]);
      float w = 1.0 / pow(d + 0.001, u_influences[i]);
      colorSum += u_colors[i] * w;
      weightSum += w;
    }
    return colorSum / weightSum;
  }

  void main() {
    vec3 bnoise = getBlueNoise(gl_FragCoord.xy);
    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);

    // Rotating color field (note.js LMS approach)
    vec2 glowUv = (v_uv - 0.5) * u_coverAspect * 2.0;
    float angle = u_time * u_rotSpeed;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    glowUv = rot * glowUv;
    glowUv = glowUv * 0.5 + 0.5;
    glowUv = clamp(glowUv, vec2(0.0), vec2(1.0));

    vec3 glowColor = vec3(0.0);
    if (u_gradientMode == 0) {
      vec3 colorT = mix(u_c0, u_c1, glowUv.x);
      vec3 colorB = mix(u_c3, u_c2, glowUv.x);
      glowColor = mix(colorB, colorT, glowUv.y);
    } else if (u_gradientMode == 1) {
      glowColor = getConicColor(glowUv);
    } else {
      glowColor = getMeshColor(glowUv);
    }
    glowColor *= glowColor * glowColor * 2.0;

    if (u_debugBlob > 0.5) {
      gl_FragColor = vec4(pow(min(glowColor, 1.0), vec3(1.0 / 2.2)), 1.0);
      return;
    }

    vec2 wp = (v_uv - u_pulseCenter) * aspect;
    float wl = length(aspect);
    float wpl = wl - length(wp);
    float wsl = 0.5 * wl;
    float wel = 0.5 * wl;
    float wtl = wl + wsl + wel;
    float wt = u_pulse * wtl - wl + wpl;
    float w0 = smoothstep(0.0, wsl, wt);
    float w1 = smoothstep(wsl + wel, wsl, wt);
    float wave = w0 * w1 * u_amount;
    vec2 waveDir = length(wp) > 0.001 ? normalize(wp) : vec2(1.0, 0.0);

    vec2 borderUv = (v_uv - 0.5) * u_resolution + waveDir * wave * 0.01 * u_resolution.x;
    float d = sdSquircle(borderUv, u_resolution * 0.5 - u_padding * 2.0) - u_padding;
    d = linearstep(0.0, u_padding * 2.5, d);
    float test = d;
    d = pow(d, 3.0);

    float d2 = sdSquircle(borderUv, u_resolution * 0.5 - u_padding * 3.0) - u_padding * 1.5;
    d2 = linearstep(0.0, u_padding * 5.5, d2);
    test += d2;
    d2 = pow(d2, 5.0);

    float glow = (0.001 + d + d2 * 0.5) * 5.0;
    vec3 color = u_amount * glowColor * glow;
    
    // Boost wave visibility (moderated)
    color += wave * (d * 0.35 + d2 * 0.35 + glowColor * 0.15);

    // For our transparent overlay, using raw glow gives the correct thickness.
    float alpha = min(1.0, glow + wave * (d * 0.35 + d2 * 0.35 + 0.15));

    if (u_debugMask > 0.5) {
      gl_FragColor = vec4(vec3(alpha * u_alphaMul), 1.0);
      return;
    }

    color = color + bnoise * 0.004;
    gl_FragColor = vec4(color, alpha * u_alphaMul);
  }
`,Oe=`
  precision highp float;
  uniform sampler2D u_texture;
  uniform vec2 u_direction; // (1/w, 0) or (0, 1/h)
  varying vec2 v_uv;

  void main() {
    // 9-tap Gaussian blur (preserves alpha)
    vec4 color = vec4(0.0);
    color += texture2D(u_texture, v_uv - 4.0 * u_direction) * 0.0162;
    color += texture2D(u_texture, v_uv - 3.0 * u_direction) * 0.0540;
    color += texture2D(u_texture, v_uv - 2.0 * u_direction) * 0.1218;
    color += texture2D(u_texture, v_uv - 1.0 * u_direction) * 0.1950;
    color += texture2D(u_texture, v_uv) * 0.2260;
    color += texture2D(u_texture, v_uv + 1.0 * u_direction) * 0.1950;
    color += texture2D(u_texture, v_uv + 2.0 * u_direction) * 0.1218;
    color += texture2D(u_texture, v_uv + 3.0 * u_direction) * 0.0540;
    color += texture2D(u_texture, v_uv + 4.0 * u_direction) * 0.0162;
    gl_FragColor = color;
  }
`,Pe=`
  precision highp float;
  uniform sampler2D u_glowTexture;
  uniform sampler2D u_bloomTexture;
  uniform float u_bloomStrength;
  uniform float u_debugBloom;
  uniform float u_debugBlob;
  uniform float u_debugMask;
  varying vec2 v_uv;

  void main() {
    vec4 glow = texture2D(u_glowTexture, v_uv);

    // Bypass completely for base debug views so they don't get double-gamma'd
    if (u_debugBlob > 0.5 || u_debugMask > 0.5) {
      gl_FragColor = glow;
      return;
    }

    vec4 bloom = texture2D(u_bloomTexture, v_uv);
    
    vec3 color;
    float alpha;
    if (u_debugBloom > 0.5) {
      color = bloom.rgb * u_bloomStrength;
      alpha = bloom.a * u_bloomStrength;
    } else {
      color = glow.rgb + bloom.rgb * u_bloomStrength;
      alpha = min(1.0, glow.a + bloom.a * u_bloomStrength);
    }
    
    // Pure digital ceiling to preserve raw, highly-saturated neon punch
    color = min(color, 1.0);
    
    // Apply sRGB curve after all additive blending to preserve deep, vibrant colors
    color = pow(color, vec3(1.0 / 2.2));
    
    gl_FragColor = vec4(color, alpha);
  }
`,ye={__name:"GlowingEdgeOverlayCore",props:{absolute:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},setup(Z){const be=Z,{setCustomState:we,scrollVelocity:ee}=he(),h=ve(null),oe=ve(null),S=pe(0),N=()=>{Q.to(S,{value:1,duration:1,ease:"power2.out"}),ce(1,.5)},G=()=>{Q.to(S,{value:0,duration:1.5,ease:"power2.out"})},te=o=>{Q.killTweensOf(S),S.value=o.detail.progress};ge(()=>be.active,o=>{o?N():G()},{immediate:!0});const l=Le({mainShow:!0,mainRotSpeed:-5,mainBlurPasses:5,mainBlurSpread:2,mainBloomStrength:2,mainAlpha:.7,mainRadius:50,mainSquircle:3.8,mainPulseSpeed:.65,gradientMode:"bilinear",bilinearColors:["#ff9cff","#ff9638","#ffff22","#54ffff"],conicColors:[{hex:"#ff9cff",stop:0},{hex:"#ff9638",stop:25},{hex:"#ffff22",stop:50},{hex:"#54ffff",stop:75}],meshBlobs:[{hex:"#ff9cff",x:.2,y:.2,influence:1.5},{hex:"#ff9638",x:.8,y:.2,influence:1.5},{hex:"#ffff22",x:.8,y:.8,influence:1.5},{hex:"#54ffff",x:.2,y:.8,influence:1.5}],mainDebugBlob:!1,mainDebugMask:!1,mainDebugBloom:!1});ge(()=>l.mainPulseSpeed,()=>{m=0});let e=null,d=null,b=null,_=null,D=null,re=0,ue=0;const le=pe(!1);let O=null,k=null,w=null;const c=[null,null];let q=null;const t={},E={},f={};function W(o){return o<=.04045?o/12.92:Math.pow((o+.055)/1.055,2.4)}function g(o){const u=parseInt(o.slice(1,3),16)/255,i=parseInt(o.slice(3,5),16)/255,n=parseInt(o.slice(5,7),16)/255;return[W(u),W(i),W(n)]}const B=[g("#ff9cff"),g("#ff9638"),g("#ffff22"),g("#54ffff")],P=new Float32Array(L*3),ie=new Float32Array(L),H=new Float32Array(L*2),ne=new Float32Array(L);function Ee(){for(let r=0;r<4;r++)B[r]=g(l.bilinearColors[r]);if(!e||!d)return;e.useProgram(d),t.u_c0&&e.uniform3fv(t.u_c0,B[0]),t.u_c1&&e.uniform3fv(t.u_c1,B[1]),t.u_c2&&e.uniform3fv(t.u_c2,B[2]),t.u_c3&&e.uniform3fv(t.u_c3,B[3]);const o=l.gradientMode==="conic"?l.conicColors:l.meshBlobs,u=o.length,i=[...o];l.gradientMode==="conic"&&i.sort((r,a)=>r.stop-a.stop);for(let r=0;r<L;r++)if(r<u){const a=i[r],R=g(a.hex);P[r*3+0]=R[0],P[r*3+1]=R[1],P[r*3+2]=R[2],l.gradientMode==="conic"?ie[r]=a.stop/100:(H[r*2+0]=a.x,H[r*2+1]=a.y,ne[r]=a.influence)}let n=0;l.gradientMode==="conic"?n=1:l.gradientMode==="mesh"&&(n=2);let s=[0,0,0],x=0;if(u>0){const r=i[u-1];s=g(r.hex),l.gradientMode==="conic"&&(x=r.stop/100)}t.u_gradientMode&&e.uniform1i(t.u_gradientMode,n),t.u_colorCount&&e.uniform1i(t.u_colorCount,u),t.u_colors&&e.uniform3fv(t.u_colors,P),t.u_stops&&e.uniform1fv(t.u_stops,ie),t.u_positions&&e.uniform2fv(t.u_positions,H),t.u_influences&&e.uniform1fv(t.u_influences,ne),t.u_lastColor&&e.uniform3fv(t.u_lastColor,s),t.u_lastStop&&e.uniform1f(t.u_lastStop,x)}function Y(o,u){const i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,u,0,e.RGBA,k,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const n=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.bindFramebuffer(e.FRAMEBUFFER,null),{fb:n,tex:i,w:o,h:u}}function T(o){o&&(e.deleteTexture(o.tex),e.deleteFramebuffer(o.fb))}function z(o,u){const i=ae(e.VERTEX_SHADER,o),n=ae(e.FRAGMENT_SHADER,u),s=e.createProgram();return e.attachShader(s,i),e.attachShader(s,n),e.linkProgram(s),e.getProgramParameter(s,e.LINK_STATUS)||console.error("Link error:",e.getProgramInfoLog(s)),s}function ae(o,u){const i=e.createShader(o);return e.shaderSource(i,u),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)||console.error("Shader error:",e.getShaderInfoLog(i)),i}function y(){e.bindBuffer(e.ARRAY_BUFFER,q);const o=0;e.enableVertexAttribArray(o),e.vertexAttribPointer(o,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let v=1,p=1,X=1,I=1,F=1,C=1;function Te(o){if(e=o.getContext("webgl",{alpha:!0,premultipliedAlpha:!1,antialias:!1}),!e)return!1;O=e.createTexture();const u=e.getExtension("OES_texture_half_float"),i=e.getExtension("OES_texture_half_float_linear"),n=e.getExtension("EXT_color_buffer_half_float");u&&i&&n?k=u.HALF_FLOAT_OES:k=e.UNSIGNED_BYTE,e.bindTexture(e.TEXTURE_2D,O),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]));const s=new Image;s.src="/textures/LDR_RGB1_0.png",s.onload=()=>{e&&(e.bindTexture(e.TEXTURE_2D,O),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,s))},q=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,q),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW),d=z(J,De),b=z(J,Oe),_=z(J,Pe),e.bindAttribLocation(d,0,"a_position"),e.bindAttribLocation(b,0,"a_position"),e.bindAttribLocation(_,0,"a_position"),e.useProgram(d);const x=["u_resolution","u_time","u_amount","u_padding","u_pulse","u_pulseCenter","u_coverAspect","u_c0","u_c1","u_c2","u_c3","u_blueNoiseTexture","u_blueNoiseCoordOffset","u_rotSpeed","u_alphaMul","u_squircle","u_debugBlob","u_debugMask","u_gradientMode","u_colorCount","u_colors","u_stops","u_positions","u_influences","u_lastColor","u_lastStop"];for(const r of x)t[r]=e.getUniformLocation(d,r);return e.useProgram(b),E.u_texture=e.getUniformLocation(b,"u_texture"),E.u_direction=e.getUniformLocation(b,"u_direction"),e.useProgram(_),f.u_glowTexture=e.getUniformLocation(_,"u_glowTexture"),f.u_bloomTexture=e.getUniformLocation(_,"u_bloomTexture"),f.u_bloomStrength=e.getUniformLocation(_,"u_bloomStrength"),f.u_debugBloom=e.getUniformLocation(_,"u_debugBloom"),f.u_debugBlob=e.getUniformLocation(_,"u_debugBlob"),f.u_debugMask=e.getUniformLocation(_,"u_debugMask"),e.disable(e.BLEND),!0}function se(){return 1}function fe(){const o=se();v=Math.floor(X*o),p=Math.floor(I*o),F=Math.max(1,Math.floor(v/4)),C=Math.max(1,Math.floor(p/4)),T(w),T(c[0]),T(c[1]),w=Y(v,p),c[0]=Y(F,C),c[1]=Y(F,C)}function V(){if(!h.value)return;const o=se(),u=h.value;X=u.clientWidth,I=u.clientHeight,u.width=X*o,u.height=I*o,e&&fe()}let m=1,$=[1.001,.5],M=0;function ce(o=1.001,u=.5){m=0,$=[o,u]}function _e(o){const u=o.detail||{};ce(u.x??1.001,u.y??.5)}let j=!1;function me(o){if(D=requestAnimationFrame(me),!e||!d)return;const u=S.value;if(u===0&&m>=1){j||(e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,v,p),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),j=!0),M=o;return}j=!1;const i=(o-re)/1e3,n=M?(o-M)/1e3:.016;M=o;const x=1+Math.min(ee.value*.004,3);ue+=n*x;const r=X,a=I;Ee();const R=window.innerWidth<1024,xe=(R?Math.min(l.mainRadius,Math.min(r,a)*.04):l.mainRadius)*u;m+=n*l.mainPulseSpeed,m>1&&(m=1),we("pulse",m);const de=Math.min(a/r,1)/Math.sqrt(r*r+a*a)*Math.max(r,a);if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,v,p),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),l.mainShow){e.bindFramebuffer(e.FRAMEBUFFER,w.fb),e.viewport(0,0,v,p),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(d),e.uniform2f(t.u_resolution,r,a),e.uniform1f(t.u_time,ue),e.uniform1f(t.u_amount,u),e.uniform1f(t.u_padding,xe),e.uniform1f(t.u_pulse,m),e.uniform1f(t.u_rotSpeed,l.mainRotSpeed),e.uniform1f(t.u_alphaMul,l.mainAlpha),e.uniform1f(t.u_squircle,l.mainSquircle),e.uniform1f(t.u_debugBlob,l.mainDebugBlob?1:0),e.uniform1f(t.u_debugMask,l.mainDebugMask?1:0),e.uniform2f(t.u_pulseCenter,$[0],$[1]),e.uniform2f(t.u_coverAspect,r/a*de,de),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,O),e.uniform1i(t.u_blueNoiseTexture,0),e.uniform2f(t.u_blueNoiseCoordOffset,Math.random(),Math.random()),y(),e.useProgram(b),e.viewport(0,0,F,C);const U=R?2:l.mainBlurPasses;for(let A=0;A<U;A++)e.bindFramebuffer(e.FRAMEBUFFER,c[0].fb),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,A===0?w.tex:c[1].tex),e.uniform1i(E.u_texture,0),e.uniform2f(E.u_direction,l.mainBlurSpread/F,0),y(),e.bindFramebuffer(e.FRAMEBUFFER,c[1].fb),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,c[0].tex),e.uniform1i(E.u_texture,0),e.uniform2f(E.u_direction,0,l.mainBlurSpread/C),y();e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,v,p),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(_),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,w.tex),e.uniform1i(f.u_glowTexture,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,c[1].tex),e.uniform1i(f.u_bloomTexture,1);const K=Math.min(ee.value*.02,3);e.uniform1f(f.u_bloomStrength,l.mainBloomStrength+K),e.uniform1f(f.u_debugBloom,l.mainDebugBloom?1:0),e.uniform1f(f.u_debugBlob,l.mainDebugBlob?1:0),e.uniform1f(f.u_debugMask,l.mainDebugMask?1:0),y()}if(oe.value){const U=i*3,K=Math.sin(U)*50,A=Math.cos(U*2+Math.PI*.5)*5,Re=Math.cos(U)*-6;oe.value.style.transform=`translate3d(${K}%, ${A}%, 0) rotate(${Re}deg)`}}return Be(()=>{if(typeof window<"u"){if(!h.value)return;V();const o=()=>{Te(h.value)&&(fe(),re=performance.now(),M=0,m=1,D=requestAnimationFrame(me),setTimeout(()=>{le.value=!0},50))};window.requestIdleCallback?setTimeout(o,100):setTimeout(o,500),window.addEventListener("resize",V),window.addEventListener("glowing-edge-trigger-pulse",_e),window.addEventListener("glowing-edge-show",N),window.addEventListener("glowing-edge-hide",G),window.addEventListener("glowing-edge-progress",te)}}),Fe(()=>{typeof window<"u"&&(D&&cancelAnimationFrame(D),window.removeEventListener("resize",V),window.removeEventListener("glowing-edge-trigger-pulse",_e),window.removeEventListener("glowing-edge-show",N),window.removeEventListener("glowing-edge-hide",G),window.removeEventListener("glowing-edge-progress",te),e&&(T(w),T(c[0]),T(c[1]),e.getExtension("WEBGL_lose_context")?.loseContext(),e=null))}),(o,u)=>(Ce(),Me("div",{class:Ae(["glow-wrapper transition-opacity duration-[1500ms] ease-out",[le.value?"opacity-100":"opacity-0",Z.absolute?"is-absolute":""]])},[Ue("canvas",{ref_key:"canvasRef",ref:h,class:"glow-overlay"},null,512)],2))}},ke=Se(ye,[["__scopeId","data-v-cacc04d2"]]);export{ke as default};
