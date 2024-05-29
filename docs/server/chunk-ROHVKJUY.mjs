import './polyfills.server.mjs';
import{$ as i3,E as Y2,H as J2,I as X2,K as Q2,L as $2,M as K2,N as c3,O as _,P as V1,Q as x,R as C1,S as a3,T as J,U as L,X as e3,a as f2,aa as r3,b as E2,c as I2,ca as s3,d as w,da as n3,e as q2,ea as l3,f as O2,fa as f3,g as F1,ga as D1,h as B1,i as U2,j as S,k as m,l as E,m as j2,n as G2,o as h,p as l,q as o,r as p,s as W2,t as k,u as _2,v as Z2,w as z,x as F,y as A,z as P}from"./chunk-MJBN5WPS.mjs";var T8=a3([x({height:"{{ height }}",opacity:"{{ opacity }}",backgroundColor:"{{ backgroundColor }}"}),_("{{ time }}")]),o3=c3("routeAnimations",[C1("AboutPage <=> ProjectsPage",[x({position:"relative"}),L(":enter, :leave",[x({position:"absolute",top:0,left:0,width:"100%"})],{optional:!0}),L(":enter",[x({left:"-100%"})],{optional:!0}),L(":leave",J(),{optional:!0}),V1([L(":leave",[_("300ms ease-out",x({left:"100%"}))],{optional:!0}),L(":enter",[_("300ms ease-out",x({left:"0%"}))],{optional:!0})]),L(":enter",J(),{optional:!0})]),C1("ProjectsPage <=> CertificatesPage",[x({position:"relative"}),L(":enter, :leave",[x({position:"absolute",top:0,left:0,width:"100%"})],{optional:!0}),L(":enter",[x({left:"-100%"})],{optional:!0}),L(":leave",J(),{optional:!0}),V1([L(":leave",[_("300ms ease-out",x({left:"100%"}))],{optional:!0}),L(":enter",[_("300ms ease-out",x({left:"0%"}))],{optional:!0})]),L(":enter",J(),{optional:!0})]),C1("AboutPage <=> CertificatesPage",[x({position:"relative"}),L(":enter, :leave",[x({position:"absolute",top:0,left:0,width:"100%"})],{optional:!0}),L(":enter",[x({left:"-100%"})],{optional:!0}),L(":leave",J(),{optional:!0}),V1([L(":leave",[_("300ms ease-out",x({left:"100%"}))],{optional:!0}),L(":enter",[_("300ms ease-out",x({left:"0%"}))],{optional:!0})]),L(":enter",J(),{optional:!0})]),C1("* <=> *",[x({position:"relative"}),L(":enter, :leave",[x({position:"absolute",top:0,left:0,width:"100%"})],{optional:!0}),L(":enter",[x({left:"-100%"})],{optional:!0}),L(":leave",J(),{optional:!0}),V1([L(":leave",[_("200ms ease-out",x({left:"100%",opacity:0}))],{optional:!0}),L(":enter",[_("300ms ease-out",x({left:"0%"}))],{optional:!0}),L("@*",J(),{optional:!0})])])]);function t3(c,a){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),s.push.apply(s,e)}return s}function H(c){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?t3(Object(s),!0).forEach(function(e){y(c,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):t3(Object(s)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(s,e))})}return c}function Y1(c){"@babel/helpers - typeof";return Y1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Y1(c)}function R4(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function m3(c,a){for(var s=0;s<a.length;s++){var e=a[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function E4(c,a,s){return a&&m3(c.prototype,a),s&&m3(c,s),Object.defineProperty(c,"prototype",{writable:!1}),c}function y(c,a,s){return a in c?Object.defineProperty(c,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[a]=s,c}function b2(c,a){return q4(c)||U4(c,a)||D3(c,a)||G4()}function k1(c){return I4(c)||O4(c)||D3(c)||j4()}function I4(c){if(Array.isArray(c))return v2(c)}function q4(c){if(Array.isArray(c))return c}function O4(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function U4(c,a){var s=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(s!=null){var e=[],r=!0,i=!1,n,f;try{for(s=s.call(c);!(r=(n=s.next()).done)&&(e.push(n.value),!(a&&e.length===a));r=!0);}catch(t){i=!0,f=t}finally{try{!r&&s.return!=null&&s.return()}finally{if(i)throw f}}return e}}function D3(c,a){if(c){if(typeof c=="string")return v2(c,a);var s=Object.prototype.toString.call(c).slice(8,-1);if(s==="Object"&&c.constructor&&(s=c.constructor.name),s==="Map"||s==="Set")return Array.from(c);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return v2(c,a)}}function v2(c,a){(a==null||a>c.length)&&(a=c.length);for(var s=0,e=new Array(a);s<a;s++)e[s]=c[s];return e}function j4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var z3=function(){},x2={},R3={},E3=null,I3={mark:z3,measure:z3};try{typeof window<"u"&&(x2=window),typeof document<"u"&&(R3=document),typeof MutationObserver<"u"&&(E3=MutationObserver),typeof performance<"u"&&(I3=performance)}catch{}var W4=x2.navigator||{},v3=W4.userAgent,h3=v3===void 0?"":v3,e1=x2,b=R3,H3=E3,R1=I3,B8=!!e1.document,K=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",q3=~h3.indexOf("MSIE")||~h3.indexOf("Trident/"),E1,I1,q1,O1,U1,X="___FONT_AWESOME___",h2=16,O3="fa",U3="svg-inline--fa",o1="data-fa-i2svg",H2="data-fa-pseudo-element",_4="data-fa-pseudo-element-pending",N2="data-prefix",S2="data-icon",p3="fontawesome-i2svg",Z4="async",Y4=["HTML","HEAD","STYLE","SCRIPT"],j3=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),g="classic",N="sharp",k2=[g,N];function y1(c){return new Proxy(c,{get:function(s,e){return e in s?s[e]:s[g]}})}var g1=y1((E1={},y(E1,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),y(E1,N,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),E1)),b1=y1((I1={},y(I1,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),y(I1,N,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),I1)),x1=y1((q1={},y(q1,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),y(q1,N,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),q1)),J4=y1((O1={},y(O1,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),y(O1,N,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),O1)),X4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,G3="fa-layers-text",Q4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$4=y1((U1={},y(U1,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),y(U1,N,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),U1)),W3=[1,2,3,4,5,6,7,8,9,10],K4=W3.concat([11,12,13,14,15,16,17,18,19,20]),c6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],l1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},N1=new Set;Object.keys(b1[g]).map(N1.add.bind(N1));Object.keys(b1[N]).map(N1.add.bind(N1));var a6=[].concat(k2,k1(N1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",l1.GROUP,l1.SWAP_OPACITY,l1.PRIMARY,l1.SECONDARY]).concat(W3.map(function(c){return"".concat(c,"x")})).concat(K4.map(function(c){return"w-".concat(c)})),d1=e1.FontAwesomeConfig||{};function e6(c){var a=b.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function i6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}b&&typeof b.querySelector=="function"&&(M3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],M3.forEach(function(c){var a=b2(c,2),s=a[0],e=a[1],r=i6(e6(s));r!=null&&(d1[e]=r)}));var M3,_3={styleDefault:"solid",familyDefault:"classic",cssPrefix:O3,replacementClass:U3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};d1.familyPrefix&&(d1.cssPrefix=d1.familyPrefix);var H1=H(H({},_3),d1);H1.autoReplaceSvg||(H1.observeMutations=!1);var V={};Object.keys(_3).forEach(function(c){Object.defineProperty(V,c,{enumerable:!0,set:function(s){H1[c]=s,L1.forEach(function(e){return e(V)})},get:function(){return H1[c]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(a){H1.cssPrefix=a,L1.forEach(function(s){return s(V)})},get:function(){return H1.cssPrefix}});e1.FontAwesomeConfig=V;var L1=[];function r6(c){return L1.push(c),function(){L1.splice(L1.indexOf(c),1)}}var a1=h2,Z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function s6(c){if(!(!c||!K)){var a=b.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var s=b.head.childNodes,e=null,r=s.length-1;r>-1;r--){var i=s[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=i)}return b.head.insertBefore(a,e),c}}var n6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function S1(){for(var c=12,a="";c-- >0;)a+=n6[Math.random()*62|0];return a}function p1(c){for(var a=[],s=(c||[]).length>>>0;s--;)a[s]=c[s];return a}function y2(c){return c.classList?p1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Z3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function l6(c){return Object.keys(c||{}).reduce(function(a,s){return a+"".concat(s,'="').concat(Z3(c[s]),'" ')},"").trim()}function Q1(c){return Object.keys(c||{}).reduce(function(a,s){return a+"".concat(s,": ").concat(c[s].trim(),";")},"")}function w2(c){return c.size!==Z.size||c.x!==Z.x||c.y!==Z.y||c.rotate!==Z.rotate||c.flipX||c.flipY}function f6(c){var a=c.transform,s=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(s/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),t={transform:"".concat(i," ").concat(n," ").concat(f)},M={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:t,path:M}}function o6(c){var a=c.transform,s=c.width,e=s===void 0?h2:s,r=c.height,i=r===void 0?h2:r,n=c.startCentered,f=n===void 0?!1:n,t="";return f&&q3?t+="translate(".concat(a.x/a1-e/2,"em, ").concat(a.y/a1-i/2,"em) "):f?t+="translate(calc(-50% + ".concat(a.x/a1,"em), calc(-50% + ").concat(a.y/a1,"em)) "):t+="translate(".concat(a.x/a1,"em, ").concat(a.y/a1,"em) "),t+="scale(".concat(a.size/a1*(a.flipX?-1:1),", ").concat(a.size/a1*(a.flipY?-1:1),") "),t+="rotate(".concat(a.rotate,"deg) "),t}var t6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Y3(){var c=O3,a=U3,s=V.cssPrefix,e=V.replacementClass,r=t6;if(s!==c||e!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(s,"-")).replace(n,"--".concat(s,"-")).replace(f,".".concat(e))}return r}var V3=!1;function o2(){V.autoAddCss&&!V3&&(s6(Y3()),V3=!0)}var m6={mixout:function(){return{dom:{css:Y3,insertCss:o2}}},hooks:function(){return{beforeDOMElementCreation:function(){o2()},beforeI2svg:function(){o2()}}}},Q=e1||{};Q[X]||(Q[X]={});Q[X].styles||(Q[X].styles={});Q[X].hooks||(Q[X].hooks={});Q[X].shims||(Q[X].shims=[]);var j=Q[X],J3=[],z6=function c(){b.removeEventListener("DOMContentLoaded",c),J1=1,J3.map(function(a){return a()})},J1=!1;K&&(J1=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),J1||b.addEventListener("DOMContentLoaded",z6));function v6(c){K&&(J1?setTimeout(c,0):J3.push(c))}function w1(c){var a=c.tag,s=c.attributes,e=s===void 0?{}:s,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?Z3(c):"<".concat(a," ").concat(l6(e),">").concat(i.map(w1).join(""),"</").concat(a,">")}function C3(c,a,s){if(c&&c[a]&&c[a][s])return{prefix:a,iconName:s,icon:c[a][s]}}var h6=function(a,s){return function(e,r,i,n){return a.call(s,e,r,i,n)}},t2=function(a,s,e,r){var i=Object.keys(a),n=i.length,f=r!==void 0?h6(s,r):s,t,M,v;for(e===void 0?(t=1,v=a[i[0]]):(t=0,v=e);t<n;t++)M=i[t],v=f(v,a[M],M,a);return v};function H6(c){for(var a=[],s=0,e=c.length;s<e;){var r=c.charCodeAt(s++);if(r>=55296&&r<=56319&&s<e){var i=c.charCodeAt(s++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),s--)}else a.push(r)}return a}function p2(c){var a=H6(c);return a.length===1?a[0].toString(16):null}function p6(c,a){var s=c.length,e=c.charCodeAt(a),r;return e>=55296&&e<=56319&&s>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function u3(c){return Object.keys(c).reduce(function(a,s){var e=c[s],r=!!e.icon;return r?a[e.iconName]=e.icon:a[s]=e,a},{})}function M2(c,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=s.skipHooks,r=e===void 0?!1:e,i=u3(a);typeof j.hooks.addPack=="function"&&!r?j.hooks.addPack(c,u3(a)):j.styles[c]=H(H({},j.styles[c]||{}),i),c==="fas"&&M2("fa",a)}var j1,G1,W1,z1=j.styles,M6=j.shims,V6=(j1={},y(j1,g,Object.values(x1[g])),y(j1,N,Object.values(x1[N])),j1),A2=null,X3={},Q3={},$3={},K3={},c4={},C6=(G1={},y(G1,g,Object.keys(g1[g])),y(G1,N,Object.keys(g1[N])),G1);function u6(c){return~a6.indexOf(c)}function d6(c,a){var s=a.split("-"),e=s[0],r=s.slice(1).join("-");return e===c&&r!==""&&!u6(r)?r:null}var a4=function(){var a=function(i){return t2(z1,function(n,f,t){return n[t]=t2(f,i,{}),n},{})};X3=a(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var f=i[2].filter(function(t){return typeof t=="number"});f.forEach(function(t){r[t.toString(16)]=n})}return r}),Q3=a(function(r,i,n){if(r[n]=n,i[2]){var f=i[2].filter(function(t){return typeof t=="string"});f.forEach(function(t){r[t]=n})}return r}),c4=a(function(r,i,n){var f=i[2];return r[n]=n,f.forEach(function(t){r[t]=n}),r});var s="far"in z1||V.autoFetchSvg,e=t2(M6,function(r,i){var n=i[0],f=i[1],t=i[2];return f==="far"&&!s&&(f="fas"),typeof n=="string"&&(r.names[n]={prefix:f,iconName:t}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:f,iconName:t}),r},{names:{},unicodes:{}});$3=e.names,K3=e.unicodes,A2=$1(V.styleDefault,{family:V.familyDefault})};r6(function(c){A2=$1(c.styleDefault,{family:V.familyDefault})});a4();function P2(c,a){return(X3[c]||{})[a]}function L6(c,a){return(Q3[c]||{})[a]}function f1(c,a){return(c4[c]||{})[a]}function e4(c){return $3[c]||{prefix:null,iconName:null}}function g6(c){var a=K3[c],s=P2("fas",c);return a||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function i1(){return A2}var T2=function(){return{prefix:null,iconName:null,rest:[]}};function $1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.family,e=s===void 0?g:s,r=g1[e][c],i=b1[e][c]||b1[e][r],n=c in j.styles?c:null;return i||n||null}var d3=(W1={},y(W1,g,Object.keys(x1[g])),y(W1,N,Object.keys(x1[N])),W1);function K1(c){var a,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=s.skipLookups,r=e===void 0?!1:e,i=(a={},y(a,g,"".concat(V.cssPrefix,"-").concat(g)),y(a,N,"".concat(V.cssPrefix,"-").concat(N)),a),n=null,f=g;(c.includes(i[g])||c.some(function(M){return d3[g].includes(M)}))&&(f=g),(c.includes(i[N])||c.some(function(M){return d3[N].includes(M)}))&&(f=N);var t=c.reduce(function(M,v){var C=d6(V.cssPrefix,v);if(z1[v]?(v=V6[f].includes(v)?J4[f][v]:v,n=v,M.prefix=v):C6[f].indexOf(v)>-1?(n=v,M.prefix=$1(v,{family:f})):C?M.iconName=C:v!==V.replacementClass&&v!==i[g]&&v!==i[N]&&M.rest.push(v),!r&&M.prefix&&M.iconName){var u=n==="fa"?e4(M.iconName):{},d=f1(M.prefix,M.iconName);u.prefix&&(n=null),M.iconName=u.iconName||d||M.iconName,M.prefix=u.prefix||M.prefix,M.prefix==="far"&&!z1.far&&z1.fas&&!V.autoFetchSvg&&(M.prefix="fas")}return M},T2());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&f===N&&(z1.fass||V.autoFetchSvg)&&(t.prefix="fass",t.iconName=f1(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||n==="fa")&&(t.prefix=i1()||"fas"),t}var b6=function(){function c(){R4(this,c),this.definitions={}}return E4(c,[{key:"add",value:function(){for(var s=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){s.definitions[f]=H(H({},s.definitions[f]||{}),n[f]),M2(f,n[f]);var t=x1[g][f];t&&M2(t,n[f]),a4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(s,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var n=r[i],f=n.prefix,t=n.iconName,M=n.icon,v=M[2];s[f]||(s[f]={}),v.length>0&&v.forEach(function(C){typeof C=="string"&&(s[f][C]=M)}),s[f][t]=M}),s}}]),c}(),L3=[],v1={},h1={},x6=Object.keys(h1);function N6(c,a){var s=a.mixoutsTo;return L3=c,v1={},Object.keys(h1).forEach(function(e){x6.indexOf(e)===-1&&delete h1[e]}),L3.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(s[n]=r[n]),Y1(r[n])==="object"&&Object.keys(r[n]).forEach(function(f){s[n]||(s[n]={}),s[n][f]=r[n][f]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(n){v1[n]||(v1[n]=[]),v1[n].push(i[n])})}e.provides&&e.provides(h1)}),s}function V2(c,a){for(var s=arguments.length,e=new Array(s>2?s-2:0),r=2;r<s;r++)e[r-2]=arguments[r];var i=v1[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(e))}),a}function t1(c){for(var a=arguments.length,s=new Array(a>1?a-1:0),e=1;e<a;e++)s[e-1]=arguments[e];var r=v1[c]||[];r.forEach(function(i){i.apply(null,s)})}function $(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return h1[c]?h1[c].apply(null,a):void 0}function C2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,s=c.prefix||i1();if(a)return a=f1(s,a)||a,C3(i4.definitions,s,a)||C3(j.styles,s,a)}var i4=new b6,S6=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,t1("noAuto")},k6={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return K?(t1("beforeI2svg",a),$("pseudoElements2svg",a),$("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=a.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,v6(function(){w6({autoReplaceSvgRoot:s}),t1("watch",a)})}},y6={icon:function(a){if(a===null)return null;if(Y1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:f1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var s=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=$1(a[0]);return{prefix:e,iconName:f1(e,s)||s}}if(typeof a=="string"&&(a.indexOf("".concat(V.cssPrefix,"-"))>-1||a.match(X4))){var r=K1(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||i1(),iconName:f1(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=i1();return{prefix:i,iconName:f1(i,a)||a}}}},I={noAuto:S6,config:V,dom:k6,parse:y6,library:i4,findIconDefinition:C2,toHtml:w1},w6=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=a.autoReplaceSvgRoot,e=s===void 0?b:s;(Object.keys(j.styles).length>0||V.autoFetchSvg)&&K&&V.autoReplaceSvg&&I.dom.i2svg({node:e})};function c2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return w1(e)})}}),Object.defineProperty(c,"node",{get:function(){if(K){var e=b.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function A6(c){var a=c.children,s=c.main,e=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(w2(n)&&s.found&&!e.found){var f=s.width,t=s.height,M={x:f/t/2,y:.5};r.style=Q1(H(H({},i),{},{"transform-origin":"".concat(M.x+n.x/16,"em ").concat(M.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function P6(c){var a=c.prefix,s=c.iconName,e=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(V.cssPrefix,"-").concat(s):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:H(H({},r),{},{id:n}),children:e}]}]}function F2(c){var a=c.icons,s=a.main,e=a.mask,r=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,t=c.title,M=c.maskId,v=c.titleId,C=c.extra,u=c.watchable,d=u===void 0?!1:u,B=e.found?e:s,q=B.width,U=B.height,G=r==="fak",T=[V.replacementClass,i?"".concat(V.cssPrefix,"-").concat(i):""].filter(function(c1){return C.classes.indexOf(c1)===-1}).filter(function(c1){return c1!==""||!!c1}).concat(C.classes).join(" "),D={children:[],attributes:H(H({},C.attributes),{},{"data-prefix":r,"data-icon":i,class:T,role:C.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(q," ").concat(U)})},W=G&&!~C.classes.indexOf("fa-fw")?{width:"".concat(q/U*16*.0625,"em")}:{};d&&(D.attributes[o1]=""),t&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(v||S1())},children:[t]}),delete D.attributes.title);var R=H(H({},D),{},{prefix:r,iconName:i,main:s,mask:e,maskId:M,transform:n,symbol:f,styles:H(H({},W),C.styles)}),s1=e.found&&s.found?$("generateAbstractMask",R)||{children:[],attributes:{}}:$("generateAbstractIcon",R)||{children:[],attributes:{}},n1=s1.children,l2=s1.attributes;return R.children=n1,R.attributes=l2,f?P6(R):A6(R)}function g3(c){var a=c.content,s=c.width,e=c.height,r=c.transform,i=c.title,n=c.extra,f=c.watchable,t=f===void 0?!1:f,M=H(H(H({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});t&&(M[o1]="");var v=H({},n.styles);w2(r)&&(v.transform=o6({transform:r,startCentered:!0,width:s,height:e}),v["-webkit-transform"]=v.transform);var C=Q1(v);C.length>0&&(M.style=C);var u=[];return u.push({tag:"span",attributes:M,children:[a]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}function T6(c){var a=c.content,s=c.title,e=c.extra,r=H(H(H({},e.attributes),s?{title:s}:{}),{},{class:e.classes.join(" ")}),i=Q1(e.styles);i.length>0&&(r.style=i);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),s&&n.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),n}var m2=j.styles;function u2(c){var a=c[0],s=c[1],e=c.slice(4),r=b2(e,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(l1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(l1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(l1.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:s,icon:n}}var F6={found:!1,width:512,height:512};function B6(c,a){!j3&&!V.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function d2(c,a){var s=a;return a==="fa"&&V.styleDefault!==null&&(a=i1()),new Promise(function(e,r){var i={found:!1,width:512,height:512,icon:$("missingIconAbstract")||{}};if(s==="fa"){var n=e4(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&m2[a]&&m2[a][c]){var f=m2[a][c];return e(u2(f))}B6(c,a),e(H(H({},F6),{},{icon:V.showMissingIcons&&c?$("missingIconAbstract")||{}:{}}))})}var b3=function(){},L2=V.measurePerformance&&R1&&R1.mark&&R1.measure?R1:{mark:b3,measure:b3},u1='FA "6.5.2"',D6=function(a){return L2.mark("".concat(u1," ").concat(a," begins")),function(){return r4(a)}},r4=function(a){L2.mark("".concat(u1," ").concat(a," ends")),L2.measure("".concat(u1," ").concat(a),"".concat(u1," ").concat(a," begins"),"".concat(u1," ").concat(a," ends"))},B2={begin:D6,end:r4},_1=function(){};function x3(c){var a=c.getAttribute?c.getAttribute(o1):null;return typeof a=="string"}function R6(c){var a=c.getAttribute?c.getAttribute(N2):null,s=c.getAttribute?c.getAttribute(S2):null;return a&&s}function E6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(V.replacementClass)}function I6(){if(V.autoReplaceSvg===!0)return Z1.replace;var c=Z1[V.autoReplaceSvg];return c||Z1.replace}function q6(c){return b.createElementNS("http://www.w3.org/2000/svg",c)}function O6(c){return b.createElement(c)}function s4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.ceFn,e=s===void 0?c.tag==="svg"?q6:O6:s;if(typeof c=="string")return b.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(s4(n,{ceFn:e}))}),r}function U6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var Z1={replace:function(a){var s=a[0];if(s.parentNode)if(a[1].forEach(function(r){s.parentNode.insertBefore(s4(r),s)}),s.getAttribute(o1)===null&&V.keepOriginalSource){var e=b.createComment(U6(s));s.parentNode.replaceChild(e,s)}else s.remove()},nest:function(a){var s=a[0],e=a[1];if(~y2(s).indexOf(V.replacementClass))return Z1.replace(a);var r=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(f,t){return t===V.replacementClass||t.match(r)?f.toSvg.push(t):f.toNode.push(t),f},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",i.toNode.join(" "))}var n=e.map(function(f){return w1(f)}).join(`
`);s.setAttribute(o1,""),s.innerHTML=n}};function N3(c){c()}function n4(c,a){var s=typeof a=="function"?a:_1;if(c.length===0)s();else{var e=N3;V.mutateApproach===Z4&&(e=e1.requestAnimationFrame||N3),e(function(){var r=I6(),i=B2.begin("mutate");c.map(r),i(),s()})}}var D2=!1;function l4(){D2=!0}function g2(){D2=!1}var X1=null;function S3(c){if(H3&&V.observeMutations){var a=c.treeCallback,s=a===void 0?_1:a,e=c.nodeCallback,r=e===void 0?_1:e,i=c.pseudoElementsCallback,n=i===void 0?_1:i,f=c.observeMutationsRoot,t=f===void 0?b:f;X1=new H3(function(M){if(!D2){var v=i1();p1(M).forEach(function(C){if(C.type==="childList"&&C.addedNodes.length>0&&!x3(C.addedNodes[0])&&(V.searchPseudoElements&&n(C.target),s(C.target)),C.type==="attributes"&&C.target.parentNode&&V.searchPseudoElements&&n(C.target.parentNode),C.type==="attributes"&&x3(C.target)&&~c6.indexOf(C.attributeName))if(C.attributeName==="class"&&R6(C.target)){var u=K1(y2(C.target)),d=u.prefix,B=u.iconName;C.target.setAttribute(N2,d||v),B&&C.target.setAttribute(S2,B)}else E6(C.target)&&r(C.target)})}}),K&&X1.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function j6(){X1&&X1.disconnect()}function G6(c){var a=c.getAttribute("style"),s=[];return a&&(s=a.split(";").reduce(function(e,r){var i=r.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(e[n]=f.join(":").trim()),e},{})),s}function W6(c){var a=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=K1(y2(c));return r.prefix||(r.prefix=i1()),a&&s&&(r.prefix=a,r.iconName=s),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=L6(r.prefix,c.innerText)||P2(r.prefix,p2(c.innerText))),!r.iconName&&V.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function _6(c){var a=p1(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),s=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return V.autoA11y&&(s?a["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(e||S1()):(a["aria-hidden"]="true",a.focusable="false")),a}function Z6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function k3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},s=W6(c),e=s.iconName,r=s.prefix,i=s.rest,n=_6(c),f=V2("parseNodeAttributes",{},c),t=a.styleParser?G6(c):[];return H({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:Z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:t,attributes:n}},f)}var Y6=j.styles;function f4(c){var a=V.autoReplaceSvg==="nest"?k3(c,{styleParser:!1}):k3(c);return~a.extra.classes.indexOf(G3)?$("generateLayersText",c,a):$("generateSvgReplacementMutation",c,a)}var r1=new Set;k2.map(function(c){r1.add("fa-".concat(c))});Object.keys(g1[g]).map(r1.add.bind(r1));Object.keys(g1[N]).map(r1.add.bind(r1));r1=k1(r1);function y3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!K)return Promise.resolve();var s=b.documentElement.classList,e=function(C){return s.add("".concat(p3,"-").concat(C))},r=function(C){return s.remove("".concat(p3,"-").concat(C))},i=V.autoFetchSvg?r1:k2.map(function(v){return"fa-".concat(v)}).concat(Object.keys(Y6));i.includes("fa")||i.push("fa");var n=[".".concat(G3,":not([").concat(o1,"])")].concat(i.map(function(v){return".".concat(v,":not([").concat(o1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=p1(c.querySelectorAll(n))}catch{}if(f.length>0)e("pending"),r("complete");else return Promise.resolve();var t=B2.begin("onTree"),M=f.reduce(function(v,C){try{var u=f4(C);u&&v.push(u)}catch(d){j3||d.name==="MissingIcon"&&console.error(d)}return v},[]);return new Promise(function(v,C){Promise.all(M).then(function(u){n4(u,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),t(),v()})}).catch(function(u){t(),C(u)})})}function J6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;f4(c).then(function(s){s&&n4([s],a)})}function X6(c){return function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:C2(a||{}),r=s.mask;return r&&(r=(r||{}).icon?r:C2(r||{})),c(e,H(H({},s),{},{mask:r}))}}var Q6=function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=s.transform,r=e===void 0?Z:e,i=s.symbol,n=i===void 0?!1:i,f=s.mask,t=f===void 0?null:f,M=s.maskId,v=M===void 0?null:M,C=s.title,u=C===void 0?null:C,d=s.titleId,B=d===void 0?null:d,q=s.classes,U=q===void 0?[]:q,G=s.attributes,T=G===void 0?{}:G,D=s.styles,W=D===void 0?{}:D;if(a){var R=a.prefix,s1=a.iconName,n1=a.icon;return c2(H({type:"icon"},a),function(){return t1("beforeDOMElementCreation",{iconDefinition:a,params:s}),V.autoA11y&&(u?T["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(B||S1()):(T["aria-hidden"]="true",T.focusable="false")),F2({icons:{main:u2(n1),mask:t?u2(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:s1,transform:H(H({},Z),r),symbol:n,title:u,maskId:v,titleId:B,extra:{attributes:T,styles:W,classes:U}})})}},$6={mixout:function(){return{icon:X6(Q6)}},hooks:function(){return{mutationObserverCallbacks:function(s){return s.treeCallback=y3,s.nodeCallback=J6,s}}},provides:function(a){a.i2svg=function(s){var e=s.node,r=e===void 0?b:e,i=s.callback,n=i===void 0?function(){}:i;return y3(r,n)},a.generateSvgReplacementMutation=function(s,e){var r=e.iconName,i=e.title,n=e.titleId,f=e.prefix,t=e.transform,M=e.symbol,v=e.mask,C=e.maskId,u=e.extra;return new Promise(function(d,B){Promise.all([d2(r,f),v.iconName?d2(v.iconName,v.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(q){var U=b2(q,2),G=U[0],T=U[1];d([s,F2({icons:{main:G,mask:T},prefix:f,iconName:r,transform:t,symbol:M,maskId:C,title:i,titleId:n,extra:u,watchable:!0})])}).catch(B)})},a.generateAbstractIcon=function(s){var e=s.children,r=s.attributes,i=s.main,n=s.transform,f=s.styles,t=Q1(f);t.length>0&&(r.style=t);var M;return w2(n)&&(M=$("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),e.push(M||i.icon),{children:e,attributes:r}}}},K6={mixout:function(){return{layer:function(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return c2({type:"layer"},function(){t1("beforeDOMElementCreation",{assembler:s,params:e});var n=[];return s(function(f){Array.isArray(f)?f.map(function(t){n=n.concat(t.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(k1(i)).join(" ")},children:n}]})}}}},c8={mixout:function(){return{counter:function(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,n=e.classes,f=n===void 0?[]:n,t=e.attributes,M=t===void 0?{}:t,v=e.styles,C=v===void 0?{}:v;return c2({type:"counter",content:s},function(){return t1("beforeDOMElementCreation",{content:s,params:e}),T6({content:s.toString(),title:i,extra:{attributes:M,styles:C,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(k1(f))}})})}}}},a8={mixout:function(){return{text:function(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?Z:r,n=e.title,f=n===void 0?null:n,t=e.classes,M=t===void 0?[]:t,v=e.attributes,C=v===void 0?{}:v,u=e.styles,d=u===void 0?{}:u;return c2({type:"text",content:s},function(){return t1("beforeDOMElementCreation",{content:s,params:e}),g3({content:s,transform:H(H({},Z),i),title:f,extra:{attributes:C,styles:d,classes:["".concat(V.cssPrefix,"-layers-text")].concat(k1(M))}})})}}},provides:function(a){a.generateLayersText=function(s,e){var r=e.title,i=e.transform,n=e.extra,f=null,t=null;if(q3){var M=parseInt(getComputedStyle(s).fontSize,10),v=s.getBoundingClientRect();f=v.width/M,t=v.height/M}return V.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([s,g3({content:s.innerHTML,width:f,height:t,transform:i,title:r,extra:n,watchable:!0})])}}},e8=new RegExp('"',"ug"),w3=[1105920,1112319];function i8(c){var a=c.replace(e8,""),s=p6(a,0),e=s>=w3[0]&&s<=w3[1],r=a.length===2?a[0]===a[1]:!1;return{value:p2(r?a[0]:a),isSecondary:e||r}}function A3(c,a){var s="".concat(_4).concat(a.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(s)!==null)return e();var i=p1(c.children),n=i.filter(function(n1){return n1.getAttribute(H2)===a})[0],f=e1.getComputedStyle(c,a),t=f.getPropertyValue("font-family").match(Q4),M=f.getPropertyValue("font-weight"),v=f.getPropertyValue("content");if(n&&!t)return c.removeChild(n),e();if(t&&v!=="none"&&v!==""){var C=f.getPropertyValue("content"),u=~["Sharp"].indexOf(t[2])?N:g,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(t[2])?b1[u][t[2].toLowerCase()]:$4[u][M],B=i8(C),q=B.value,U=B.isSecondary,G=t[0].startsWith("FontAwesome"),T=P2(d,q),D=T;if(G){var W=g6(q);W.iconName&&W.prefix&&(T=W.iconName,d=W.prefix)}if(T&&!U&&(!n||n.getAttribute(N2)!==d||n.getAttribute(S2)!==D)){c.setAttribute(s,D),n&&c.removeChild(n);var R=Z6(),s1=R.extra;s1.attributes[H2]=a,d2(T,d).then(function(n1){var l2=F2(H(H({},R),{},{icons:{main:n1,mask:T2()},prefix:d,iconName:D,extra:s1,watchable:!0})),c1=b.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(c1,c.firstChild):c.appendChild(c1),c1.outerHTML=l2.map(function(D4){return w1(D4)}).join(`
`),c.removeAttribute(s),e()}).catch(r)}else e()}else e()})}function r8(c){return Promise.all([A3(c,"::before"),A3(c,"::after")])}function s8(c){return c.parentNode!==document.head&&!~Y4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(H2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function P3(c){if(K)return new Promise(function(a,s){var e=p1(c.querySelectorAll("*")).filter(s8).map(r8),r=B2.begin("searchPseudoElements");l4(),Promise.all(e).then(function(){r(),g2(),a()}).catch(function(){r(),g2(),s()})})}var n8={hooks:function(){return{mutationObserverCallbacks:function(s){return s.pseudoElementsCallback=P3,s}}},provides:function(a){a.pseudoElements2svg=function(s){var e=s.node,r=e===void 0?b:e;V.searchPseudoElements&&P3(r)}}},T3=!1,l8={mixout:function(){return{dom:{unwatch:function(){l4(),T3=!0}}}},hooks:function(){return{bootstrap:function(){S3(V2("mutationObserverCallbacks",{}))},noAuto:function(){j6()},watch:function(s){var e=s.observeMutationsRoot;T3?g2():S3(V2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},F3=function(a){var s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),n=i[0],f=i.slice(1).join("-");if(n&&f==="h")return e.flipX=!0,e;if(n&&f==="v")return e.flipY=!0,e;if(f=parseFloat(f),isNaN(f))return e;switch(n){case"grow":e.size=e.size+f;break;case"shrink":e.size=e.size-f;break;case"left":e.x=e.x-f;break;case"right":e.x=e.x+f;break;case"up":e.y=e.y-f;break;case"down":e.y=e.y+f;break;case"rotate":e.rotate=e.rotate+f;break}return e},s)},f8={mixout:function(){return{parse:{transform:function(s){return F3(s)}}}},hooks:function(){return{parseNodeAttributes:function(s,e){var r=e.getAttribute("data-fa-transform");return r&&(s.transform=F3(r)),s}}},provides:function(a){a.generateAbstractTransformGrouping=function(s){var e=s.main,r=s.transform,i=s.containerWidth,n=s.iconWidth,f={transform:"translate(".concat(i/2," 256)")},t="translate(".concat(r.x*32,", ").concat(r.y*32,") "),M="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),v="rotate(".concat(r.rotate," 0 0)"),C={transform:"".concat(t," ").concat(M," ").concat(v)},u={transform:"translate(".concat(n/2*-1," -256)")},d={outer:f,inner:C,path:u};return{tag:"g",attributes:H({},d.outer),children:[{tag:"g",attributes:H({},d.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:H(H({},e.icon.attributes),d.path)}]}]}}}},z2={x:0,y:0,width:"100%",height:"100%"};function B3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function o8(c){return c.tag==="g"?c.children:[c]}var t8={hooks:function(){return{parseNodeAttributes:function(s,e){var r=e.getAttribute("data-fa-mask"),i=r?K1(r.split(" ").map(function(n){return n.trim()})):T2();return i.prefix||(i.prefix=i1()),s.mask=i,s.maskId=e.getAttribute("data-fa-mask-id"),s}}},provides:function(a){a.generateAbstractMask=function(s){var e=s.children,r=s.attributes,i=s.main,n=s.mask,f=s.maskId,t=s.transform,M=i.width,v=i.icon,C=n.width,u=n.icon,d=f6({transform:t,containerWidth:C,iconWidth:M}),B={tag:"rect",attributes:H(H({},z2),{},{fill:"white"})},q=v.children?{children:v.children.map(B3)}:{},U={tag:"g",attributes:H({},d.inner),children:[B3(H({tag:v.tag,attributes:H(H({},v.attributes),d.path)},q))]},G={tag:"g",attributes:H({},d.outer),children:[U]},T="mask-".concat(f||S1()),D="clip-".concat(f||S1()),W={tag:"mask",attributes:H(H({},z2),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[B,G]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:D},children:o8(u)},W]};return e.push(R,{tag:"rect",attributes:H({fill:"currentColor","clip-path":"url(#".concat(D,")"),mask:"url(#".concat(T,")")},z2)}),{children:e,attributes:r}}}},m8={provides:function(a){var s=!1;e1.matchMedia&&(s=e1.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:H(H({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=H(H({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:H(H({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||f.children.push({tag:"animate",attributes:H(H({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:H(H({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(f),e.push({tag:"path",attributes:H(H({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:H(H({},n),{},{values:"1;0;0;0;0;1;"})}]}),s||e.push({tag:"path",attributes:H(H({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:H(H({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},z8={hooks:function(){return{parseNodeAttributes:function(s,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return s.symbol=i,s}}}},v8=[m6,$6,K6,c8,a8,n8,l8,f8,t8,m8,z8];N6(v8,{mixoutsTo:I});var D8=I.noAuto,o4=I.config,R8=I.library,t4=I.dom,m4=I.parse,E8=I.findIconDefinition,I8=I.toHtml,z4=I.icon,q8=I.layer,h8=I.text,H8=I.counter;var p8=["*"],M8=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},V8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},C8=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(s=>a[s]?s:null).filter(s=>s)},R2=new WeakSet,v4="fa-auto-css";function u8(c,a){if(!a.autoAddCss||R2.has(c))return;if(c.getElementById(v4)!=null){a.autoAddCss=!1,R2.add(c);return}let s=c.createElement("style");s.setAttribute("type","text/css"),s.setAttribute("id",v4),s.innerHTML=t4.css();let e=c.head.childNodes,r=null;for(let i=e.length-1;i>-1;i--){let n=e[i],f=n.nodeName.toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(r=n)}c.head.insertBefore(s,r),a.autoAddCss=!1,R2.add(c)}var d8=c=>c.prefix!==void 0&&c.iconName!==void 0,L8=(c,a)=>d8(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:a,iconName:c},g8=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){o4.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=f2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),b8=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let r of e){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let i of r.icon[2])typeof i=="string"&&(this.definitions[r.prefix][i]=r)}}addIconPacks(...e){for(let r of e){let i=Object.keys(r).map(n=>r[n]);this.addIcons(...i)}}getIconDefinition(e,r){return e in this.definitions&&r in this.definitions[e]?this.definitions[e][r]:null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=f2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),x8=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(r){return new(r||a)},a.\u0275dir=O2({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[F1]});let c=a;return c})(),N8=(()=>{let a=class a{constructor(e,r){this.renderer=e,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(r){return new(r||a)(E(j2),E(B1))},a.\u0275cmp=w({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[F1,P],ngContentSelectors:p8,decls:1,vars:0,template:function(r,i){r&1&&(_2(),Z2(0))},encapsulation:2});let c=a;return c})(),Y=(()=>{let a=class a{constructor(e,r,i,n,f){this.sanitizer=e,this.config=r,this.iconLibrary=i,this.stackItem=n,this.document=I2(X2),f!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){V8();return}if(e){let r=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(r!=null){let i=this.buildParams();u8(this.document,this.config);let n=z4(r,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let r=L8(e,this.config.defaultPrefix);if("icon"in r)return r;let i=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return i??(M8(r),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?m4.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:C8(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}};a.\u0275fac=function(r){return new(r||a)(E($2),E(g8),E(b8),E(x8,8),E(N8,8))},a.\u0275cmp=w({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,i){r&2&&(W2("innerHTML",i.renderedIconHTML,U2),G2("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[F1,P],decls:0,vars:0,template:function(r,i){},encapsulation:2});let c=a;return c})();var O=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=q2({type:a}),a.\u0275inj=E2({});let c=a;return c})();var S8={prefix:"fab",iconName:"square-js",icon:[448,512,["js-square"],"f3b9","M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1V381.4c0 43.6-25.6 63.5-62.9 63.5zm85.8-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6c-39.1 0-64.4-18.6-76.7-43z"]},h4=S8;var H4={prefix:"fab",iconName:"java",icon:[384,512,[],"f4e4","M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"]};var p4={prefix:"fab",iconName:"node",icon:[640,512,[],"f419","M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"]};var M4={prefix:"fab",iconName:"angular",icon:[448,512,[],"f420","M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"]};var V4={prefix:"fab",iconName:"react",icon:[512,512,[],"f41b","M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"]};var C4={prefix:"fab",iconName:"bootstrap",icon:[576,512,[],"f836","M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"]};var a2={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]};var e2={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};var i2={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};var u4={prefix:"fab",iconName:"html5",icon:[384,512,[],"f13b","M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"]};var d4={prefix:"fab",iconName:"sass",icon:[640,512,[],"f41e","M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"]};var L4={prefix:"fab",iconName:"css3",icon:[512,512,[],"f13c","M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"]};var g4={prefix:"fab",iconName:"python",icon:[448,512,[],"f3e2","M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"]};var b4={prefix:"fab",iconName:"git",icon:[512,512,[],"f1d3","M216.29 158.39H137C97 147.9 6.51 150.63 6.51 233.18c0 30.09 15 51.23 35 61-25.1 23-37 33.85-37 49.21 0 11 4.47 21.14 17.89 26.81C8.13 383.61 0 393.35 0 411.65c0 32.11 28.05 50.82 101.63 50.82 70.75 0 111.79-26.42 111.79-73.18 0-58.66-45.16-56.5-151.63-63l13.43-21.55c27.27 7.58 118.7 10 118.7-67.89 0-18.7-7.73-31.71-15-41.07l37.41-2.84zm-63.42 241.9c0 32.06-104.89 32.1-104.89 2.43 0-8.14 5.27-15 10.57-21.54 77.71 5.3 94.32 3.37 94.32 19.11zm-50.81-134.58c-52.8 0-50.46-71.16 1.2-71.16 49.54 0 50.82 71.16-1.2 71.16zm133.3 100.51v-32.1c26.75-3.66 27.24-2 27.24-11V203.61c0-8.5-2.05-7.38-27.24-16.26l4.47-32.92H324v168.71c0 6.51.4 7.32 6.51 8.14l20.73 2.84v32.1zm52.45-244.31c-23.17 0-36.59-13.43-36.59-36.61s13.42-35.77 36.59-35.77c23.58 0 37 12.62 37 35.77s-13.42 36.61-37 36.61zM512 350.46c-17.49 8.53-43.1 16.26-66.28 16.26-48.38 0-66.67-19.5-66.67-65.46V194.75c0-5.42 1.05-4.06-31.71-4.06V154.5c35.78-4.07 50-22 54.47-66.27h38.63c0 65.83-1.34 61.81 3.26 61.81H501v40.65h-60.56v97.15c0 6.92-4.92 51.41 60.57 26.84z"]};var M1={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var r2={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]};var s2={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};var n2={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var P1={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]};var T1={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};var x4={prefix:"fas",iconName:"yin-yang",icon:[512,512,[9775],"f6ad","M256 64c53 0 96 43 96 96s-43 96-96 96s-96 43-96 96s43 96 96 96C150 448 64 362 64 256S150 64 256 64zm0 448A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm32-352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]};var N4=(()=>{let a=class a{constructor(){this.faGithub=M1,this.faLinkedin=e2,this.faTwitter=a2,this.faInstagram=i2,this.faEnvelope=n2,this.faSass=d4,this.faAngular=M4,this.faReact=V4,this.faHtml5=u4,this.faCss3=L4,this.faBootstrap=C4,this.faNode=p4,this.faPython=g4,this.faJava=H4,this.faGit=b4,this.faJs=h4,this.faYY=x4}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=w({type:a,selectors:[["app-about"]],standalone:!0,features:[P],decls:101,vars:18,consts:[[1,"md:p-16","p-8","bg-gray-100","dark:bg-gray-800","text-gray-900","dark:text-gray-100","transition","delay-150","duration-300","ease-in-out"],[1,"container","mx-auto","text-center"],[1,"text-4xl","font-extrabold","mt-16","mb-4","fade-in"],[1,"mt-4","text-lg","font-extrabold","fade-in"],[1,"container","mx-auto","mt-8","grid","grid-cols-1","md:grid-cols-2","gap-8","items-center"],[1,"fade-in-left","font-extrabold","md:flex","flex-col","items-center"],["src","profile-picture.jpg","alt","Profile Picture","id","profile-picture",1,"fade-in","rounded-full","w-60","md:w-80","lg:w-100","mx-auto","md:mx-0"],[1,"text-2xl","mt-2","text-center","md:relative"],[1,"fade-in-right","indent-12","font-bold"],[1,"mb-4"],[1,"container","mx-auto","mt-8"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-8"],[1,"p-6","bg-white","dark:bg-gray-700","rounded-lg","shadow-lg","hover:shadow-xl","transition-shadow","duration-300","ease-in-out","fade-in-up"],[1,"font-extrabold","text-xl","mb-3"],[1,"text-center"],[1,"text-center","font-semibold"],[3,"icon"],[1,"mb-3"],[1,"flex"],["href","https://www.freecodecamp.org/Sotonye",1,"px-2"],["src","https://img.shields.io/badge/-FCC-black?style=flat&logo=freecodecamp&logoColor=white","alt","freecodecamp",1,"pt-1"],["href","https://github.com/bradtraversy",1,"px-2"],["src","traversy-media.jpg","alt","Traversy Media","width","20","height","20",1,"pt-1"],[1,"font-extrabold","text-xl","mb-2"],[1,"mb-3","font-semibold"],["id","tech-stack-links",1,"flex","flex-wrap","gap-4","justify-center"],["href","/projects"],["size","3x",3,"icon"],["href","/projects#frameworks-and-libraries"],["href","/projects#mini-projects_"],["href","/projects#mini-projects"],["id","CV",1,"p-6","bg-white","dark:bg-gray-700","rounded-lg","shadow-lg","hover:shadow-xl","transition-shadow","duration-300","ease-in-out","fade-in-up"],[1,"font-extrabold","text-xl","mb-4"],[1,"grid","grid-cols-2","gap-4","place-content-center"],[1,"font-semibold"],["target","_blank","href","Sotonye_Dagogo_CV.pdf"],["src","CV_preview.jpg","alt","CV Preview","width","150",1,"rounded-md","border-solid","border-2"],["id","contact-links",1,"flex","flex-col","gap-4","items-center","font-bold"],["href","https://github.com/Sotonye0808",1,"flex","items-center","space-x-2","text-gray-700","dark:text-gray-300"],["size","lg",3,"icon"],["href","https://www.linkedin.com/in/sotonye-dagogo-bb6585255",1,"flex","items-center","space-x-2","text-gray-700","dark:text-gray-300"],["href","https://x.com/therealsoshady",1,"flex","items-center","space-x-2","text-gray-700","dark:text-gray-300"],["href","https://instagram.com/_.sotonye._?igshid=YmMyMTA2M2Y=",1,"flex","items-center","space-x-2","text-gray-700","dark:text-gray-300"],["href","mailto:sotydagz@gmail.com",1,"flex","items-center","space-x-2","text-gray-700","dark:text-gray-300"]],template:function(r,i){r&1&&(l(0,"section",0)(1,"div",1)(2,"h2",2),z(3,"About Me"),o(),l(4,"p",3),z(5,"Software Developer"),o()(),l(6,"div",4)(7,"div",5),p(8,"img",6),l(9,"p",7),z(10,"DAGOGO Sotonye A."),o()(),l(11,"div",8)(12,"p",9),z(13,"Welcome to my Portfolio Website! I am a fullstack web developer, specializing in a host of different technologies such as Angular, React, SQL, NodeJS, Python and much more."),o(),l(14,"p",9),z(15,"Experience gathered from working on personal mini-projects, leading a team of developers in production and bulding applications for enterprises enables me to guarantee quality powerful web applications with an aesthetic design"),o(),l(16,"p",9),z(17,"On this portfolio website, one can view a few of the numerous projects I have built, and some certificates gathered over the years. Links to various platforms through which I can be contacted have also been provided."),o()()(),l(18,"div",10)(19,"div",11)(20,"div",12)(21,"h2",13),z(22,"Experience"),o(),l(23,"p",14),z(24,"5 years working as:"),o(),l(25,"ul",15)(26,"li"),p(27,"fa-icon",16),z(28," Project manager"),o(),l(29,"li",17),p(30,"fa-icon",16),z(31," Fullstack developer"),o(),l(32,"li",18),z(33,"Numerous certifications from "),l(34,"a",19),p(35,"img",20),o()(),l(36,"li",18),z(37,"Learnt a lot from "),l(38,"a",21),p(39,"img",22),o()()()(),l(40,"div",12)(41,"h2",23),z(42,"Tech Stack"),o(),l(43,"p",24),z(44,"Including, but not limited to:"),o(),l(45,"div",25)(46,"a",26),p(47,"fa-icon",27),o(),l(48,"a",26),p(49,"fa-icon",27),o(),l(50,"a",28),p(51,"fa-icon",27),o(),l(52,"a",28),p(53,"fa-icon",27),o(),l(54,"a",29),p(55,"fa-icon",27),o(),l(56,"a",26),p(57,"fa-icon",27),o(),l(58,"a",26),p(59,"fa-icon",27),o(),l(60,"a",30),p(61,"fa-icon",27),o(),l(62,"a",26),p(63,"fa-icon",27),o(),l(64,"a",29),p(65,"fa-icon",27),o(),l(66,"a",26),p(67,"fa-icon",27),o()()(),l(68,"div",31)(69,"h2",32),z(70,"CV"),o(),l(71,"div",33)(72,"p",34),z(73,"Have a look at it here:"),o(),l(74,"a",35),p(75,"img",36),z(76," View CV "),o()()(),l(77,"div",12)(78,"h2",32),z(79,"Contact"),o(),l(80,"div",37)(81,"a",38),p(82,"fa-icon",39),l(83,"span"),z(84,"Github"),o()(),l(85,"a",40),p(86,"fa-icon",39),l(87,"span"),z(88,"LinkedIn"),o()(),l(89,"a",41),p(90,"fa-icon",39),l(91,"span"),z(92,"Twitter"),o()(),l(93,"a",42),p(94,"fa-icon",39),l(95,"span"),z(96,"Instagram"),o()(),l(97,"a",43),p(98,"fa-icon",39),l(99,"span"),z(100,"Email"),o()()()()()()()),r&2&&(m(27),h("icon",i.faYY),m(3),h("icon",i.faYY),m(17),h("icon",i.faAngular),m(2),h("icon",i.faReact),m(2),h("icon",i.faHtml5),m(2),h("icon",i.faCss3),m(2),h("icon",i.faJs),m(2),h("icon",i.faSass),m(2),h("icon",i.faBootstrap),m(2),h("icon",i.faPython),m(2),h("icon",i.faNode),m(2),h("icon",i.faGit),m(2),h("icon",i.faJava),m(15),h("icon",i.faGithub),m(4),h("icon",i.faLinkedin),m(4),h("icon",i.faTwitter),m(4),h("icon",i.faInstagram),m(4),h("icon",i.faEnvelope))},dependencies:[O,Y],styles:["@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_fadeInLeft{0%{opacity:0;transform:translate(-20px)}to{opacity:1;transform:translate(0)}}@keyframes _ngcontent-%COMP%_fadeInRight{0%{opacity:0;transform:translate(20px)}to{opacity:1;transform:translate(0)}}@keyframes _ngcontent-%COMP%_fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn 1s ease-in-out}.fade-in-left[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInLeft 1s ease-in-out}.fade-in-right[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInRight 1s ease-in-out}.fade-in-up[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInUp 1s ease-in-out}#contact-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#daa520}#tech-stack-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:green}#CV[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ff6b6b;font-weight:700;transition:transform .3s ease-in-out}#CV[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.2)}"]});let c=a;return c})();var S4=(()=>{let a=class a{constructor(){this.faArrowLeft=s2,this.faArrowRight=r2,this.currentFrontendIndex=0,this.currentBackendIndex=0,this.currentFullstackIndex=0,this.frontendCertificates=[{image:"frontend-cert1.jpg",title:"Responsive Web Design",description:"Comprehensive training on building responsive web pages using HTML, CSS, and media queries.",link:"https://www.freecodecamp.org/certification/Sotonye/responsive-web-design"},{image:"frontend-cert2.jpg",title:"JavaScript Algorithms and Data Structures",description:"In-depth knowledge of JavaScript fundamentals, algorithms, and data structures.",link:"https://www.freecodecamp.org/certification/Sotonye/javascript-algorithms-and-data-structures-v8"},{image:"frontend-cert3.jpg",title:"Front End Development Libraries",description:"Proficiency in popular front end libraries such as React, Bootstrap, and jQuery.",link:"https://www.freecodecamp.org/certification/Sotonye/front-end-development-libraries"}],this.backendCertificates=[{image:"backend-cert1.jpg",title:"Back End Development and APIs",description:"Expertise in building back end applications and RESTful APIs using Node.js and Express.",link:"https://www.freecodecamp.org/certification/Sotonye/back-end-development-and-apis"},{image:"backend-cert2.jpg",title:"Quality Assurance",description:"Skills in quality assurance and testing using Chai and Mocha.",link:"https://www.freecodecamp.org/certification/Sotonye/quality-assurance-v7"}],this.fullstackCertificates=[{image:"fullstack-cert1.jpg",title:"Data Visualization",description:"Ability to create dynamic and interactive data visualizations using D3.js.",link:"https://www.freecodecamp.org/certification/Sotonye/data-visualization"}]}prevCertificate(e){switch(e){case"frontend":this.currentFrontendIndex=this.currentFrontendIndex>0?this.currentFrontendIndex-1:this.frontendCertificates.length-1;break;case"backend":this.currentBackendIndex=this.currentBackendIndex>0?this.currentBackendIndex-1:this.backendCertificates.length-1;break;case"fullstack":this.currentFullstackIndex=this.currentFullstackIndex>0?this.currentFullstackIndex-1:this.fullstackCertificates.length-1;break}}nextCertificate(e){switch(e){case"frontend":this.currentFrontendIndex=this.currentFrontendIndex<this.frontendCertificates.length-1?this.currentFrontendIndex+1:0;break;case"backend":this.currentBackendIndex=this.currentBackendIndex<this.backendCertificates.length-1?this.currentBackendIndex+1:0;break;case"fullstack":this.currentFullstackIndex=this.currentFullstackIndex<this.fullstackCertificates.length-1?this.currentFullstackIndex+1:0;break}}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=w({type:a,selectors:[["app-certificates"]],standalone:!0,features:[P],decls:62,vars:21,consts:[[1,"md:p-16","p-8","bg-gray-100","dark:bg-gray-800","text-gray-900","dark:text-gray-100","transition","delay-150","duration-300","ease-in-out"],[1,"container","mx-auto","text-center"],[1,"text-4xl","font-extrabold","mt-16","mb-8","fade-in"],[1,"container","mx-auto"],[1,"mb-16","fade-in-up"],[1,"text-2xl","font-bold","mb-4"],[1,"bg-white","dark:bg-gray-700","rounded-lg","shadow-lg","p-6","relative","cert-card"],[1,"absolute","mb-4","top-1","right-2","text-sm","font-semibold","text-gray-600","dark:text-gray-300"],[1,"flex","items-center","justify-between"],[1,"p-2","bg-gray-200","dark:bg-gray-600","rounded-full","transition-transform","duration-300","ease-in-out","transform","hover:scale-110",3,"click"],[3,"icon"],[1,"mx-4","text-center","transition-transform","duration-300","ease-in-out","transform","fade-in-out"],["alt","Certificate Image",1,"rounded-lg","w-full","max-w-sm","mx-auto",3,"src"],[1,"text-xl","font-bold","mt-4"],[1,"mt-2","font-semibold"],["target","_blank",1,"text-blue-500","hover:underline","transition-colors","duration-300","ease-in-out",3,"href"],[1,"absolute","top-1","right-2","text-sm","font-semibold","text-gray-600","dark:text-gray-300"]],template:function(r,i){r&1&&(l(0,"section",0)(1,"div",1)(2,"h2",2),z(3,"Certificates"),o()(),l(4,"div",3)(5,"div",4)(6,"h3",5),z(7,"Frontend"),o(),l(8,"div",6)(9,"div",7),z(10),o(),l(11,"div",8)(12,"button",9),k("click",function(){return i.prevCertificate("frontend")}),p(13,"fa-icon",10),o(),l(14,"div",11),p(15,"img",12),l(16,"h4",13),z(17),o(),l(18,"p",14),z(19),o(),l(20,"a",15),z(21,"View Certificate"),o()(),l(22,"button",9),k("click",function(){return i.nextCertificate("frontend")}),p(23,"fa-icon",10),o()()()(),l(24,"div",4)(25,"h3",5),z(26,"Backend"),o(),l(27,"div",6)(28,"div",16),z(29),o(),l(30,"div",8)(31,"button",9),k("click",function(){return i.prevCertificate("backend")}),p(32,"fa-icon",10),o(),l(33,"div",11),p(34,"img",12),l(35,"h4",13),z(36),o(),l(37,"p",14),z(38),o(),l(39,"a",15),z(40,"View Certificate"),o()(),l(41,"button",9),k("click",function(){return i.nextCertificate("backend")}),p(42,"fa-icon",10),o()()()(),l(43,"div",4)(44,"h3",5),z(45,"Fullstack"),o(),l(46,"div",6)(47,"div",16),z(48),o(),l(49,"div",8)(50,"button",9),k("click",function(){return i.prevCertificate("fullstack")}),p(51,"fa-icon",10),o(),l(52,"div",11),p(53,"img",12),l(54,"h4",13),z(55),o(),l(56,"p",14),z(57),o(),l(58,"a",15),z(59,"View Certificate"),o()(),l(60,"button",9),k("click",function(){return i.nextCertificate("fullstack")}),p(61,"fa-icon",10),o()()()()()()),r&2&&(m(10),A("Certificates: ",i.frontendCertificates.length,""),m(3),h("icon",i.faArrowLeft),m(2),h("src",i.frontendCertificates[i.currentFrontendIndex].image,S),m(2),F(i.frontendCertificates[i.currentFrontendIndex].title),m(2),F(i.frontendCertificates[i.currentFrontendIndex].description),m(),h("href",i.frontendCertificates[i.currentFrontendIndex].link,S),m(3),h("icon",i.faArrowRight),m(6),A("Certificates: ",i.backendCertificates.length,""),m(3),h("icon",i.faArrowLeft),m(2),h("src",i.backendCertificates[i.currentBackendIndex].image,S),m(2),F(i.backendCertificates[i.currentBackendIndex].title),m(2),F(i.backendCertificates[i.currentBackendIndex].description),m(),h("href",i.backendCertificates[i.currentBackendIndex].link,S),m(3),h("icon",i.faArrowRight),m(6),A("Certificates: ",i.fullstackCertificates.length,""),m(3),h("icon",i.faArrowLeft),m(2),h("src",i.fullstackCertificates[i.currentFullstackIndex].image,S),m(2),F(i.fullstackCertificates[i.currentFullstackIndex].title),m(2),F(i.fullstackCertificates[i.currentFullstackIndex].description),m(),h("href",i.fullstackCertificates[i.currentFullstackIndex].link,S),m(3),h("icon",i.faArrowRight))},dependencies:[O,Y],styles:["@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_fadeInOut{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn 1s ease-in-out}.fade-in-up[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInUp 1s ease-in-out}.fade-in-out[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInOut .5s ease-in-out}.cert-card[_ngcontent-%COMP%]{box-shadow:0 0 10px #0000001a;transition:transform .3s ease-in-out}.cert-card[_ngcontent-%COMP%]:hover{transform:scale(1.05)}button[_ngcontent-%COMP%]   .fa-icon[_ngcontent-%COMP%]{transition:transform .3s ease-in-out}button[_ngcontent-%COMP%]:hover   .fa-icon[_ngcontent-%COMP%]{transform:scale(1.2)}a[_ngcontent-%COMP%]{color:#ff6b6b;font-weight:700;transition:color .3s ease-in-out}a[_ngcontent-%COMP%]:hover{color:#daa520;text-decoration:none}"]});let c=a;return c})();var k4=(()=>{let a=class a{constructor(){this.faArrowLeft=s2,this.faArrowRight=r2,this.faGithub=M1,this.frameworksLibrariesProjects=[{image:"task-tracker-2.jpg",title:"Task Tracker App",description:"This is a simple task tracker app built using Next.js (A React framework) and styled with Bootstrap. It allows users to track their tasks by adding and deleting them while also tracking their usage statistics.",githubLink:"https://github.com/Sotonye0808/task-tracker-2",githubRepo:"task-tracker-2",liveLink:"https://task-tracker-2.vercel.app/"},{image:"random-quote-machine.jpg",title:"Random Quote Machine",description:"This is a simple random quote machine built using React and styled with Bootstrap. It allows users to generate random quotes and share them on Twitter.",githubLink:"https://github.com/Sotonye0808/randomQuoteMachine",githubRepo:"randomQuoteMachine",liveLink:"https://sotonye0808.github.io/randomQuoteMachine/"},{image:"drum-machine.jpg",title:"Drum Machine",description:"This is a simple drum machine built using React and styled with Bootstrap. It allows users to play drum sounds by clicking on the drum pads or using the keyboard.",githubLink:"https://github.com/Sotonye0808/drumMachine",githubRepo:"drumMachine",liveLink:"https://sotonye0808.github.io/drumMachine/"},{image:"js-clock.jpg",title:"25 + 5 Clock",description:"This is a simple 25 + 5 clock built using React and styled with Bootstrap. It allows users to set a timer for up to 25 minutes and take a break of up to 5 minutes. It also has a pause and reset button.",githubLink:"https://github.com/Sotonye0808/js-clock",githubRepo:"js-clock",liveLink:"https://sotonye0808.github.io/js-clock/"},{image:"javascript-calculator.jpg",title:"JavaScript Calculator",description:"This is a simple calculator built using React and styled with Bootstrap. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication and division. It also has a clear and delete button.",githubLink:"https://github.com/Sotonye0808/javascriptCalculator",githubRepo:"javascriptCalculator",liveLink:"https://sotonye0808.github.io/javascriptCalculator/"},{image:"markdown-previewer.jpg",title:"Markdown Previewer",description:"This is a simple markdown previewer built using React and styled with Bootstrap. It allows users to write markdown in the editor and see the preview in the previewer. It also has a clear button to clear the editor and previewer.",githubLink:"https://github.com/Sotonye0808/markdownPreviewer",githubRepo:"markdownPreviewer",liveLink:"https://sotonye0808.github.io/markdownPreviewer/"},{image:"portfolio-website.jpg",title:"Portfolio Website",description:"This is my portfolio website built using Angular and styled with TailwindCSS and SASS. It showcases my projects, skills, certificates and contact information. It also has a dark mode and light mode.",githubLink:"https://github.com/Sotonye0808/portfolio-website",githubRepo:"portfolio-website",liveLink:"https://sotonye-dagogo.netlify.app/"}],this.basicHtmlCssJsProjects=[{image:"ecommerce-webproj.jpg",title:"E-commerce Website Landing-page",description:"This is a simple e-commerce website landing-page built using basic HTML, CSS and JavaScript. It allows users to view and interact with products.",githubLink:"https://github.com/Sotonye0808/eCommerceWebProj",githubRepo:"eCommerceWebProj",liveLink:"https://sotonye0808.github.io/eCommerceWebProj/"},{image:"countdown-timer.jpg",title:"Countdown Timer",description:"This is a simple countdown timer built using basic HTML, CSS and JavaScript. It counts down seconds, minutes, weeks, months and years till specific events. It also allows users to set a custom timer.",githubLink:"https://github.com/Sotonye0808/valCountdownProject",githubRepo:"valCountdownProject",liveLink:"https://sotonye0808.github.io/valCountdownProject/"},{image:"palindrome-checker.jpg",title:"Palindrome Checker",description:"This is a simple palindrome checker built using basic HTML, CSS and JavaScript. It allows users to check if a word or phrase is a palindrome. It also has a clear button to clear the input field.",githubLink:"https://github.com/Sotonye0808/palindromeChecker",githubRepo:"palindromeChecker",liveLink:"https://sotonye0808.github.io/palindromeChecker/"},{image:"telephone-validator.jpg",title:"Telephone Number Validator",description:"This is a simple telephone number validator built using basic HTML, CSS and JavaScript. It allows users to check if a telephone number (US) is valid. It also has a clear button to clear the input field.",githubLink:"https://github.com/Sotonye0808/telephoneNumberValidator",githubRepo:"telephoneNumberValidator",liveLink:"https://sotonye0808.github.io/telephoneNumberValidator/"},{image:"roman-converter.jpg",title:"Roman Numeral Converter",description:"This is a simple roman numeral converter built using basic HTML, CSS and JavaScript. It allows users to convert numbers [less than 4000] to roman numerals and vice versa. It also has a clear button to clear the input field.",githubLink:"https://github.com/Sotonye0808/romanNumeralConverter",githubRepo:"romanNumeralConverter",liveLink:"https://sotonye0808.github.io/romanNumeralConverter/"},{image:"webdev-practice.jpg",title:"Web Development Practice",description:"This is a simple web development practice project built using basic HTML, CSS and JavaScript. It is a very simple generic landing page.",githubLink:"https://github.com/Sotonye0808/web_dev_practice",githubRepo:"web_dev_practice",liveLink:"https://sotonye0808.github.io/web_dev_practice/"}],this.pythonProjects=[{image:"dbm-package.jpg",title:"MySQL Database Manager Package",description:"This is a simple MySQL database manager package built using Python. It allows users to perform basic CRUD operations on a MySQL database, as well as other complex SQL database queries lik joins. Please take a look at the README file in the GitHub repository for more information on how to use the package",githubLink:"https://github.com/Sotonye0808/DBM_package",githubRepo:"DBM_package",liveLink:"https://sotonye0808.github.io/DBM_package/"}],this.miniProjects=[{image:"pokemon-search.jpg",title:"Pokemon Search App",description:"This is a simple pokemon search app built using basic HTML, CSS and JavaScript. It allows users to search for pokemon by name or id. It also displays the pokemon's image, type and abilities.",githubLink:"https://github.com/Sotonye0808/pokemonSearchApp",githubRepo:"pokemonSearchApp",liveLink:"https://sotonye0808.github.io/pokemonSearchApp/"},{image:"grid-magazine.jpg",title:"FreeCodeCamp Magazine",description:"This is a simple magazine layout built using basic HTML and CSS grid concepts. It is a project from FreeCodeCamp. It allows users to view and interact with articles.",githubLink:"https://github.com/Sotonye0808/gridMagazine",githubRepo:"gridMagazine",liveLink:"https://sotonye0808.github.io/gridMagazine/"},{image:"bar-chart.jpg",title:"Bar Chart",description:"This project aims to visualize the Gross Domestic Product (GDP) data for the United States and Nigeria using a bar chart. The chart is built using HTML, CSS, and JavaScript, with D3.js library utilized for data visualization.",githubLink:"https://github.com/Sotonye0808/barChart",githubRepo:"barChart",liveLink:"https://sotonye0808.github.io/barChart/"},{image:"heat-map.jpg",title:"Heat Map",description:"This project aims to visualize the monthly global land-surface temperature using a heat map. The heat map is built using HTML, CSS, and JavaScript, with D3.js library utilized for data visualization.",githubLink:"https://github.com/Sotonye0808/heatMap",githubRepo:"heatMap",liveLink:"https://sotonye0808.github.io/heatMap/"},{image:"city-skyline.jpg",title:"City Skyline",description:"This is a simple city skyline animation built using basic HTML and CSS. It is a project from FreeCodeCamp. It is responsive as it allows users to view and interact with the city skyline. It also has a day and night mode, which is activated by the screen size.",githubLink:"https://github.com/Sotonye0808/citySkyline",githubRepo:"citySkyline",liveLink:"https://sotonye0808.github.io/citySkyline/"},{image:"penguin-transforms.jpg",title:"Penguin via Transforms",description:"This is a simple penguin animation built using basic HTML and CSS. It is a project from FreeCodeCamp.",githubLink:"https://github.com/Sotonye0808/penquinViaTransforms",githubRepo:"penquinViaTransforms",liveLink:"https://sotonye0808.github.io/penguinViaTransforms/"},{image:"nutrition-label.jpg",title:"Nutrition Label",description:"This is a simple nutrition label built using basic HTML and CSS.",githubLink:"https://github.com/Sotonye0808/nutritionLabel",githubRepo:"nutritionLabel",liveLink:"https://sotonye0808.github.io/nutritionLabel/"},{image:"ferris-wheel.jpg",title:"Ferris Wheel",description:"This is a simple ferris wheel animation built using basic HTML and CSS.",githubLink:"https://github.com/Sotonye0808/ferrisWheel",githubRepo:"ferrisWheel",liveLink:"https://sotonye0808.github.io/ferrisWheel/"}],this.currentFrameworksLibrariesIndex=0,this.currentBasicHtmlCssJsIndex=0,this.currentPythonIndex=0,this.currentMiniProjectsIndex=0}prevProject(e){switch(e){case"frameworksLibraries":this.currentFrameworksLibrariesIndex=this.currentFrameworksLibrariesIndex>0?this.currentFrameworksLibrariesIndex-1:this.frameworksLibrariesProjects.length-1;break;case"basicHtmlCssJs":this.currentBasicHtmlCssJsIndex=this.currentBasicHtmlCssJsIndex>0?this.currentBasicHtmlCssJsIndex-1:this.basicHtmlCssJsProjects.length-1;break;case"python":this.currentPythonIndex=this.currentPythonIndex>0?this.currentPythonIndex-1:this.pythonProjects.length-1;break;case"miniProjects":this.currentMiniProjectsIndex=this.currentMiniProjectsIndex>0?this.currentMiniProjectsIndex-1:this.miniProjects.length-1;break}}nextProject(e){switch(e){case"frameworksLibraries":this.currentFrameworksLibrariesIndex=this.currentFrameworksLibrariesIndex<this.frameworksLibrariesProjects.length-1?this.currentFrameworksLibrariesIndex+1:0;break;case"basicHtmlCssJs":this.currentBasicHtmlCssJsIndex=this.currentBasicHtmlCssJsIndex<this.basicHtmlCssJsProjects.length-1?this.currentBasicHtmlCssJsIndex+1:0;break;case"python":this.currentPythonIndex=this.currentPythonIndex<this.pythonProjects.length-1?this.currentPythonIndex+1:0;break;case"miniProjects":this.currentMiniProjectsIndex=this.currentMiniProjectsIndex<this.miniProjects.length-1?this.currentMiniProjectsIndex+1:0;break}}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=w({type:a,selectors:[["app-projects"]],standalone:!0,features:[P],decls:97,vars:44,consts:[[1,"md:p-16","p-8","bg-gray-100","dark:bg-gray-800","text-gray-900","dark:text-gray-100","transition","delay-150","duration-300","ease-in-out"],[1,"container","mx-auto","text-center"],[1,"text-4xl","font-extrabold","mt-16","mb-8","fade-in"],[1,"container","mx-auto"],["id","frameworks-and-libraries",1,"mb-16","fade-in-up"],[1,"text-2xl","font-bold","mb-4"],[1,"bg-white","dark:bg-gray-700","rounded-lg","shadow-lg","p-6","relative"],[1,"absolute","top-2","right-2","text-sm","font-semibold","text-gray-600","dark:text-gray-300"],[1,"flex","items-center","justify-between"],[1,"p-2","bg-gray-200","dark:bg-gray-600","rounded-full",3,"click"],[3,"icon"],[1,"mx-4","text-center"],["alt","Project Image",1,"rounded-lg","w-full","max-w-sm","mx-auto",3,"src"],[1,"text-xl","font-bold","mt-4"],[1,"mt-2","font-semibold"],[1,"mt-4"],["target","_blank",1,"hover:underline","inline-flex","items-center",3,"href"],[1,"mr-2",3,"icon"],["target","_blank",1,"hover:underline","inline-flex","items-center","ml-4",3,"href"],["id","basic-html-css-js",1,"mb-16","fade-in-up"],["id","python",1,"mb-16","fade-in-up"],["id","mini-projects",1,"mb-16","fade-in-up"],["id","mini-projects_",1,"mt-4"]],template:function(r,i){r&1&&(l(0,"section",0)(1,"div",1)(2,"h2",2),z(3,"Projects"),o()(),l(4,"div",3)(5,"div",4)(6,"h3",5),z(7,"Frameworks and Libraries"),o(),l(8,"div",6)(9,"div",7),z(10),o(),l(11,"div",8)(12,"button",9),k("click",function(){return i.prevProject("frameworksLibraries")}),p(13,"fa-icon",10),o(),l(14,"div",11),p(15,"img",12),l(16,"h4",13),z(17),o(),l(18,"p",14),z(19),o(),l(20,"div",15)(21,"a",16),p(22,"fa-icon",17),z(23),o(),l(24,"a",18),z(25),o()()(),l(26,"button",9),k("click",function(){return i.nextProject("frameworksLibraries")}),p(27,"fa-icon",10),o()()()(),l(28,"div",19)(29,"h3",5),z(30,"Basic HTML, CSS, and JS"),o(),l(31,"div",6)(32,"div",7),z(33),o(),l(34,"div",8)(35,"button",9),k("click",function(){return i.prevProject("basicHtmlCssJs")}),p(36,"fa-icon",10),o(),l(37,"div",11),p(38,"img",12),l(39,"h4",13),z(40),o(),l(41,"p",14),z(42),o(),l(43,"div",15)(44,"a",16),p(45,"fa-icon",17),z(46),o(),l(47,"a",18),z(48),o()()(),l(49,"button",9),k("click",function(){return i.nextProject("basicHtmlCssJs")}),p(50,"fa-icon",10),o()()()(),l(51,"div",20)(52,"h3",5),z(53,"Python"),o(),l(54,"div",6)(55,"div",7),z(56),o(),l(57,"div",8)(58,"button",9),k("click",function(){return i.prevProject("python")}),p(59,"fa-icon",10),o(),l(60,"div",11),p(61,"img",12),l(62,"h4",13),z(63),o(),l(64,"p",14),z(65),o(),l(66,"div",15)(67,"a",16),p(68,"fa-icon",17),z(69),o(),l(70,"a",18),z(71),o()()(),l(72,"button",9),k("click",function(){return i.nextProject("python")}),p(73,"fa-icon",10),o()()()(),l(74,"div",21)(75,"h3",5),z(76,"Mini-projects"),o(),l(77,"div",6)(78,"div",7),z(79),o(),l(80,"div",8)(81,"button",9),k("click",function(){return i.prevProject("miniProjects")}),p(82,"fa-icon",10),o(),l(83,"div",11),p(84,"img",12),l(85,"h4",13),z(86),o(),l(87,"p",14),z(88),o(),l(89,"div",22)(90,"a",16),p(91,"fa-icon",17),z(92),o(),l(93,"a",18),z(94),o()()(),l(95,"button",9),k("click",function(){return i.nextProject("miniProjects")}),p(96,"fa-icon",10),o()()()()()()),r&2&&(m(10),A("Projects: ",i.frameworksLibrariesProjects.length,""),m(3),h("icon",i.faArrowLeft),m(2),h("src",i.frameworksLibrariesProjects[i.currentFrameworksLibrariesIndex].image,S),m(2),F(i.frameworksLibrariesProjects[i.currentFrameworksLibrariesIndex].title),m(2),F(i.frameworksLibrariesProjects[i.currentFrameworksLibrariesIndex].description),m(2),h("href",i.frameworksLibrariesProjects[i.currentFrameworksLibrariesIndex].githubLink,S),m(),h("icon",i.faGithub),m(),A(" ",i.frameworksLibrariesProjects[i.currentFrameworksLibrariesIndex].githubRepo," "),m(),h("href",i.frameworksLibrariesProjects[i.currentFrameworksLibrariesIndex].liveLink,S),m(),A(" View ",i.frameworksLibrariesProjects[i.currentFrameworksLibrariesIndex].title," "),m(2),h("icon",i.faArrowRight),m(6),A("Projects: ",i.basicHtmlCssJsProjects.length,""),m(3),h("icon",i.faArrowLeft),m(2),h("src",i.basicHtmlCssJsProjects[i.currentBasicHtmlCssJsIndex].image,S),m(2),F(i.basicHtmlCssJsProjects[i.currentBasicHtmlCssJsIndex].title),m(2),F(i.basicHtmlCssJsProjects[i.currentBasicHtmlCssJsIndex].description),m(2),h("href",i.basicHtmlCssJsProjects[i.currentBasicHtmlCssJsIndex].githubLink,S),m(),h("icon",i.faGithub),m(),A(" ",i.basicHtmlCssJsProjects[i.currentBasicHtmlCssJsIndex].githubRepo," "),m(),h("href",i.basicHtmlCssJsProjects[i.currentBasicHtmlCssJsIndex].liveLink,S),m(),A(" View ",i.basicHtmlCssJsProjects[i.currentBasicHtmlCssJsIndex].title," "),m(2),h("icon",i.faArrowRight),m(6),A("Projects: ",i.pythonProjects.length,""),m(3),h("icon",i.faArrowLeft),m(2),h("src",i.pythonProjects[i.currentPythonIndex].image,S),m(2),F(i.pythonProjects[i.currentPythonIndex].title),m(2),F(i.pythonProjects[i.currentPythonIndex].description),m(2),h("href",i.pythonProjects[i.currentPythonIndex].githubLink,S),m(),h("icon",i.faGithub),m(),A(" ",i.pythonProjects[i.currentPythonIndex].githubRepo," "),m(),h("href",i.pythonProjects[i.currentPythonIndex].liveLink,S),m(),A(" View ",i.pythonProjects[i.currentPythonIndex].title," "),m(2),h("icon",i.faArrowRight),m(6),A("Projects: ",i.miniProjects.length,""),m(3),h("icon",i.faArrowLeft),m(2),h("src",i.miniProjects[i.currentMiniProjectsIndex].image,S),m(2),F(i.miniProjects[i.currentMiniProjectsIndex].title),m(2),F(i.miniProjects[i.currentMiniProjectsIndex].description),m(2),h("href",i.miniProjects[i.currentMiniProjectsIndex].githubLink,S),m(),h("icon",i.faGithub),m(),A(" ",i.miniProjects[i.currentMiniProjectsIndex].githubRepo," "),m(),h("href",i.miniProjects[i.currentMiniProjectsIndex].liveLink,S),m(),A(" View ",i.miniProjects[i.currentMiniProjectsIndex].title," "),m(2),h("icon",i.faArrowRight))},dependencies:[O,Y],styles:["@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_fadeInOut{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn 1s ease-in-out}.fade-in-up[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInUp 1s ease-in-out}.fade-in-out[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInOut .5s ease-in-out}button[_ngcontent-%COMP%]   .fa-icon[_ngcontent-%COMP%]{transition:transform .3s ease-in-out}button[_ngcontent-%COMP%]:hover   .fa-icon[_ngcontent-%COMP%]{transform:scale(1.2)}a[_ngcontent-%COMP%]{background-color:#ff6b6b;color:#000;font-weight:700;margin-top:.5rem;padding:.5rem;border-radius:30px;transition:color .3s ease-in-out}a[_ngcontent-%COMP%]:hover{background-color:#daa520;text-decoration:none;transition:color .3s ease-in-out}"]});let c=a;return c})();var y4=(()=>{let a=class a{constructor(){this.darkMode=!1,this.faIcon=T1,this.faMoon=T1,this.faSun=P1}ngOnInit(){this.isLocalStorageAvailable()&&this.checkTheme()}isLocalStorageAvailable(){try{let e="__localStorageTest__";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch{return!1}}checkTheme(){let e=localStorage.getItem("theme");e?(this.darkMode=e==="dark",this.darkMode?(document.documentElement.classList.add("dark"),document.body.classList.add("dark"),this.faIcon=P1):(document.documentElement.classList.remove("dark"),document.body.classList.remove("dark"),this.faIcon=T1)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(this.darkMode=!0,document.documentElement.classList.add("dark"),document.body.classList.add("dark"),this.faIcon=P1)}toggleTheme(){this.darkMode=!this.darkMode,this.darkMode?(document.documentElement.classList.add("dark"),document.body.classList.add("dark"),this.faIcon=P1,this.isLocalStorageAvailable()&&localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),document.body.classList.remove("dark"),this.faIcon=T1,this.isLocalStorageAvailable()&&localStorage.setItem("theme","light"))}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=w({type:a,selectors:[["app-theme-toggle"]],standalone:!0,features:[P],decls:2,vars:1,consts:[["aria-label","Toggle Dark Mode",1,"py-2","px-9","text-white","rounded",3,"click"],["size","2x",3,"icon"]],template:function(r,i){r&1&&(l(0,"button",0),k("click",function(){return i.toggleTheme()}),p(1,"fa-icon",1),o()),r&2&&(m(),h("icon",i.faIcon))},dependencies:[O,Y],encapsulation:2});let c=a;return c})();var w4=(()=>{let a=class a{constructor(e,r){this.elementRef=e,this.router=r}toggleMenu(){let e=this.elementRef.nativeElement.querySelector("#menu-btn"),r=this.elementRef.nativeElement.querySelector("#mobile-menu");e.classList.toggle("open"),r.classList.contains("hidden")?(r.classList.remove("hidden"),r.classList.remove("slide-out"),r.classList.add("slide-in")):(r.classList.remove("slide-in"),r.classList.add("slide-out"),setTimeout(()=>{r.classList.add("hidden")},300))}};a.\u0275fac=function(r){return new(r||a)(E(B1),E(s3))},a.\u0275cmp=w({type:a,selectors:[["app-navbar"]],standalone:!0,features:[P],decls:25,vars:0,consts:[[1,"bg-gray-800","dark:bg-gray-900","p-4","transition","delay-150","duration-300","ease-in-out","fixed","w-full","z-50"],[1,"container","mx-auto","flex","justify-between","items-center"],[1,"flex"],["routerLink","/",1,"text-white","text-3xl","font-bold"],[1,"hidden","space-x-6","md:flex"],["routerLink","/about","routerLinkActive","active-link",1,"text-gray-300","dark:text-gray-400","dark:hover:text-white","hover:text-white"],["routerLink","/projects","routerLinkActive","active-link",1,"text-gray-300","dark:text-gray-400","dark:hover:text-white","hover:text-white"],["routerLink","/certificates","routerLinkActive","active-link",1,"text-gray-300","dark:text-gray-400","dark:hover:text-white","hover:text-white"],["id","menu-btn",1,"block","hamburger","md:hidden","focus:outline-none",3,"click"],[1,"hamburger-top","bg-gray-100"],[1,"hamburger-middle","bg-gray-100"],[1,"hamburger-bottom","bg-gray-100"],[1,"md:hidden"],["id","mobile-menu",1,"absolute","flex","flex-col","items-center","hidden","self-end","py-8","space-y-6","font-bold","bg-gray-800","dark:bg-gray-900","sm:w-auto","sm:self-center","left-24","right-0","slide-out","transition-transform","duration-300","ease-in-out"]],template:function(r,i){r&1&&(l(0,"nav",0)(1,"div",1)(2,"div",2)(3,"a",3),z(4,"Sotonye"),o(),p(5,"app-theme-toggle"),o(),l(6,"div",4)(7,"a",5),z(8,"About"),o(),l(9,"a",6),z(10,"Projects"),o(),l(11,"a",7),z(12,"Certificates"),o()(),l(13,"button",8),k("click",function(){return i.toggleMenu()}),p(14,"span",9)(15,"span",10)(16,"span",11),o()(),l(17,"div",12)(18,"div",13)(19,"a",5),z(20,"About"),o(),l(21,"a",6),z(22,"Projects"),o(),l(23,"a",7),z(24,"Certificates"),o()()()())},dependencies:[y4,D1,n3,l3],styles:[".active-link[_ngcontent-%COMP%]{color:#ff6b6b;font-weight:700}.active-link[_ngcontent-%COMP%]:hover{color:#daa520}.hamburger[_ngcontent-%COMP%]{cursor:pointer;width:24px;height:24px;transition:all .25s;position:relative}.hamburger-top[_ngcontent-%COMP%], .hamburger-middle[_ngcontent-%COMP%], .hamburger-bottom[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:24px;height:2px;transform:rotate(0);transition:all .5s}.hamburger-middle[_ngcontent-%COMP%]{transform:translateY(7px)}.hamburger-bottom[_ngcontent-%COMP%]{transform:translateY(14px)}.open[_ngcontent-%COMP%]{transform:rotate(90deg);transform:translateY(0)}.open[_ngcontent-%COMP%]   .hamburger-top[_ngcontent-%COMP%]{transform:rotate(45deg) translateY(6px) translate(6px)}.open[_ngcontent-%COMP%]   .hamburger-middle[_ngcontent-%COMP%]{display:none}.open[_ngcontent-%COMP%]   .hamburger-bottom[_ngcontent-%COMP%]{transform:rotate(-45deg) translateY(6px) translate(-6px)}@keyframes _ngcontent-%COMP%_slideIn{0%{transform:translateY(100%)}to{transform:translatey(0)}}@keyframes _ngcontent-%COMP%_slideOut{0%{transform:translate(0)}to{transform:translate(100%)}}.slide-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideIn .3s forwards}.slide-out[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideOut .3s forwards}"]});let c=a;return c})();var A4=(()=>{let a=class a{constructor(){this.faGithub=M1,this.faInstagram=i2,this.faLinkedin=e2,this.faTwitter=a2,this.faEnvelope=n2}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=w({type:a,selectors:[["app-footer"]],standalone:!0,features:[P],decls:15,vars:5,consts:[["id","footer",1,"bg-gray-800","dark:bg-gray-900","p-4","text-center","text-white","transition","delay-150","duration-300","ease-in-out"],[1,"container","mx-auto"],[1,"flex","justify-center","space-x-4","mt-4"],["target","_blank","href","https://github.com/Sotonye0808",1,"text-white","hover:text-gray-300"],[3,"icon"],["target","_blank","href","https://www.linkedin.com/in/sotonye-dagogo-bb6585255",1,"text-white","hover:text-gray-300"],["target","_blank","href","https://instagram.com/_.sotonye._?igshid=YmMyMTA2M2Y=",1,"text-white","hover:text-gray-300"],["target","_blank","href","https://x.com/therealsoshady",1,"text-white","hover:text-gray-300"],["target","_blank","href","mailto:sotydagz@gmail.com",1,"text-white","hover:text-gray-300"]],template:function(r,i){r&1&&(l(0,"footer",0)(1,"div",1)(2,"p"),z(3,"Sotonye Dagogo \xA9 2024."),o(),l(4,"div",2)(5,"a",3),p(6,"fa-icon",4),o(),l(7,"a",5),p(8,"fa-icon",4),o(),l(9,"a",6),p(10,"fa-icon",4),o(),l(11,"a",7),p(12,"fa-icon",4),o(),l(13,"a",8),p(14,"fa-icon",4),o()()()()),r&2&&(m(6),h("icon",i.faGithub),m(2),h("icon",i.faLinkedin),m(2),h("icon",i.faInstagram),m(2),h("icon",i.faTwitter),m(2),h("icon",i.faEnvelope))},dependencies:[O,Y]});let c=a;return c})();var P4=(()=>{let a=class a{constructor(e){this.contexts=e,this.title="portfolio-website",this.animationsDisabled=!1}getRouteAnimationData(){return this.contexts.getContext("primary")?.route?.snapshot?.data?.animation}};a.\u0275fac=function(r){return new(r||a)(E(i3))},a.\u0275cmp=w({type:a,selectors:[["app-root"]],standalone:!0,features:[P],decls:5,vars:1,consts:[[1,"content"]],template:function(r,i){r&1&&(p(0,"app-navbar"),l(1,"div")(2,"main",0),p(3,"router-outlet"),o()(),p(4,"app-footer")),r&2&&(m(),h("@routeAnimations",i.getRouteAnimationData()))},dependencies:[w4,A4,r3,D1,O],data:{animation:[o3]}});let c=a;return c})();var y8=[{path:"",redirectTo:"about",pathMatch:"full",data:{animation:"AboutPage"}},{path:"about",component:N4,data:{animation:"AboutPage"}},{path:"projects",component:k4,data:{animation:"ProjectsPage"}},{path:"certificates",component:S4,data:{animation:"CertificatesPage"}}];var T4=y8;var F4={providers:[Y2({eventCoalescing:!0}),f3(T4),K2()]};var w8={providers:[e3()]},B4=J2(F4,w8);var A8=()=>Q2(P4,B4),n5=A8;export{n5 as a};
