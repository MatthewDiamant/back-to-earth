!function(t){var e={};function i(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Sound});var jsfxr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),jsfxr__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(jsfxr__WEBPACK_IMPORTED_MODULE_0__);class Oscillator{constructor(){window.AudioContext=window.AudioContext||window.webkitAudioContext;let t=new AudioContext;this.oscillator=t.createOscillator(),this.gainNode=t.createGain(),this.oscillator.connect(this.gainNode),this.gainNode.connect(t.destination),this.gainNode.gain.value=0,this.oscillator.start(0)}on({frequency:t,type:e,volume:i}){this.oscillator.type=e,this.gainNode.gain.value=i,this.oscillator.frequency.value=t}off(){this.gainNode.gain.value=0}kill(){this.oscillator.stop(0)}play({volume:t,frequency:e,duration:i,type:s}){this.oscillator.type=s,this.oscillator.frequency.value=e,this.gainNode.gain.value=t,setTimeout(()=>this.gainNode.gain.value=0,i)}}class Sound{constructor(){this.state={engine:!1}}engineOn(){this.state.engine||(this.state.engine=!0,this.engine=this.engine||new Oscillator,this.engine.on({frequency:50,type:"triangle",volume:.2}))}engineOff(){this.state.engine&&(this.state.engine=!1,this.engine.off(),this.engine=null)}playSound(url){const soundUrl=jsfxr__WEBPACK_IMPORTED_MODULE_0___default()(eval(url));let player=new Audio;player.src=soundUrl,player.play()}mainLaser(){this.playSound("[2,,0.1749,,0.3063,0.713,0.2,-0.2645,,,,,,0.0543,0.1546,,,,1,,,,,0.5]")}secondaryLaser(){this.playSound("[2,,0.1426,,0.2251,0.7799,0.2555,-0.2285,,,,,,0.7631,-0.4501,,,,1,,,0.0846,,0.5]")}missile(){this.playSound("[3,,0.0937,0.571,0.3803,0.7495,,,,,,,,,,,,,1,,,,,0.5]")}projectileHit(){this.playSound("[3,,0.0867,,0.2283,0.2711,,-0.6853,,,,,,,,,,,1,,,,,0.5]")}enemyLaser(){this.playSound("[0,,0.2934,0.1381,0.2143,0.6919,0.3422,-0.2379,,,,,,0.4281,-0.6711,,,,1,,,0.194,,0.5]")}}},function(t,e,i){function s(){this.setSettings=function(t){for(var e=0;e<24;e++)this[String.fromCharCode(97+e)]=t[e]||0;this.c<.01&&(this.c=.01);var i=this.b+this.c+this.e;if(i<.18){var s=.18/i;this.b*=s,this.c*=s,this.e*=s}}}var a=new function(){var t,e,i,a,r,o,n,h,l,d,c,u;this._params=new s,this.reset=function(){var t=this._params;a=100/(t.f*t.f+.001),r=100/(t.g*t.g+.001),o=1-t.h*t.h*t.h*.01,n=-t.i*t.i*t.i*1e-6,t.a||(c=.5-t.n/2,u=5e-5*-t.o),h=1+t.l*t.l*(t.l>0?-.9:10),l=0,d=1==t.m?0:(1-t.m)*(1-t.m)*2e4+32},this.totalReset=function(){this.reset();var s=this._params;return t=s.b*s.b*1e5,e=s.c*s.c*1e5,i=s.e*s.e*1e5+12,3*((t+e+i)/3|0)},this.synthWave=function(s,y){var f=this._params,p=1!=f.s||f.v,w=f.v*f.v*.1,x=1+3e-4*f.w,m=f.s*f.s*f.s*.1,g=1+1e-4*f.t,v=1!=f.s,M=f.x*f.x,C=f.g,S=f.q||f.r,_=f.r*f.r*f.r*.2,k=f.q*f.q*(f.q<0?-1020:1020),j=f.p?32+((1-f.p)*(1-f.p)*2e4|0):0,b=f.d,E=f.j/2,L=f.k*f.k*.01,A=f.a,D=t,z=1/t,P=1/e,O=1/i,T=5/(1+f.u*f.u*20)*(.01+m);T>.8&&(T=.8),T=1-T;for(var B,q,I,R,F,Y,N=!1,U=0,X=0,W=0,H=0,K=0,G=0,J=0,Q=0,V=0,Z=0,$=new Array(1024),tt=new Array(32),et=$.length;et--;)$[et]=0;for(et=tt.length;et--;)tt[et]=2*Math.random()-1;for(et=0;et<y;et++){if(N)return et;if(j&&++V>=j&&(V=0,this.reset()),d&&++l>=d&&(d=0,a*=h),(a*=o+=n)>r&&(a=r,C>0&&(N=!0)),q=a,E>0&&(Z+=L,q*=1+Math.sin(Z)*E),(q|=0)<8&&(q=8),A||((c+=u)<0?c=0:c>.5&&(c=.5)),++X>D)switch(X=0,++U){case 1:D=e;break;case 2:D=i}switch(U){case 0:W=X*z;break;case 1:W=1+2*(1-X*P)*b;break;case 2:W=1-X*O;break;case 3:W=0,N=!0}S&&((I=0|(k+=_))<0?I=-I:I>1023&&(I=1023)),p&&x&&((w*=x)<1e-5?w=1e-5:w>.1&&(w=.1)),Y=0;for(var it=8;it--;){if(++J>=q&&(J%=q,3==A))for(var st=tt.length;st--;)tt[st]=2*Math.random()-1;switch(A){case 0:F=J/q<c?.5:-.5;break;case 1:F=1-J/q*2;break;case 2:F=.225*(((F=1.27323954*(R=6.28318531*((R=J/q)>.5?R-1:R))+.405284735*R*R*(R<0?1:-1))<0?-1:1)*F*F-F)+F;break;case 3:F=tt[Math.abs(32*J/q|0)]}p&&(B=G,(m*=g)<0?m=0:m>.1&&(m=.1),v?(K+=(F-G)*m,K*=T):(G=F,K=0),H+=(G+=K)-B,F=H*=1-w),S&&($[Q%1024]=F,F+=$[(Q-I+1024)%1024],Q++),Y+=F}Y*=.125*W*M,s[et]=Y>=1?32767:Y<=-1?-32768:32767*Y|0}return y}};t.exports=function(t){a._params.setSettings(t);var e=a.totalReset(),i=new Uint8Array(4*((e+1)/2|0)+44),s=2*a.synthWave(new Uint16Array(i.buffer,44),e),r=new Uint32Array(i.buffer,0,44);r[0]=1179011410,r[1]=s+36,r[2]=1163280727,r[3]=544501094,r[4]=16,r[5]=65537,r[6]=44100,r[7]=88200,r[8]=1048578,r[9]=1635017060,r[10]=s,s+=44;for(var o=0,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h="data:audio/wav;base64,";o<s;o+=3){var l=i[o]<<16|i[o+1]<<8|i[o+2];h+=n[l>>18]+n[l>>12&63]+n[l>>6&63]+n[63&l]}return h}},function(t,e,i){"use strict";i.r(e);let s=null;class a{constructor(t){this.canvas=t,s=this.canvas.getContext("2d"),this.camera={x:0,y:0}}cameraAdjustX(t){return t-this.camera.x+this.canvas.width/2}cameraAdjustY(t){return t-this.camera.y+this.canvas.height/2}draw(t){s.save(),t(),s.restore()}clearBackground(){s.clearRect(0,0,this.canvas.width,this.canvas.height)}drawBackground(t){s.fillStyle=t,s.fillRect(0,0,this.canvas.width,this.canvas.height)}rect({rect:t,fillColor:e,shadowBlur:i,shadowColor:a,adjusted:r=!0,rotation:o,size:n}){r&&(t[0]=this.cameraAdjustX(t[0]),t[1]=this.cameraAdjustY(t[1])),o&&(s.translate(t[0]+n/2,t[1]+n/2),s.rotate(o),s.translate(-1*t[0]-n/2,-1*t[1]-n/2)),s.fillStyle=e,s.shadowBlur=i,s.shadowColor=a,s.fillRect(t[0],t[1],...t.slice(2))}arc({arc:t,fillColor:e,strokeColor:i,shadowBlur:a,shadowColor:r}){s.beginPath(),s.arc(this.cameraAdjustX(t[0]),this.cameraAdjustY(t[1]),...t.slice(2)),s.shadowBlur=a,s.shadowColor=r,e&&(s.fillStyle=e,s.fill()),i&&(s.strokeStyle=i,s.stroke())}text({text:t,x:e,y:i,size:a="14px",font:r="Courier",letterSpacing:o=!1,adjusted:n=!0,filter:h}){n&&(e=this.cameraAdjustX(e),i=this.cameraAdjustY(i)),h&&(s.filter=h),s.font=a+" "+r,t=o?t.split("").join(" "):t,s.fillStyle="#fff",s.fillText(t,e,i)}lines({lines:t,shadowBlur:e=0,shadowColor:i,rotation:a,x:r,y:o,fillColor:n,strokeColor:h}){a&&(s.translate(this.cameraAdjustX(r),this.cameraAdjustY(o)),s.rotate(a),s.translate(-1*this.cameraAdjustX(r),-1*this.cameraAdjustY(o))),s.beginPath(),s.moveTo(this.cameraAdjustX(t[0][0]),this.cameraAdjustY(t[0][1])),t.slice(1).map(t=>s.lineTo(this.cameraAdjustX(t[0]),this.cameraAdjustY(t[1]))),s.closePath(),s.shadowBlur=e,s.shadowColor=i,h&&(s.strokeStyle=h,s.stroke()),n&&(s.fillStyle=n,s.fill())}hitbox({x:t,y:e,size:i}){this.rect({rect:[t-i/2,e-i/2,i,i],color:"#f00"})}}let r=document.getElementById("c");class o{constructor(){this.canvas=r}initialize(){let t=document.querySelector("body");const e=e=>{t.clientWidth/t.clientHeight>640/480?(r.style.height="100vh")&&(r.style.width="auto"):(r.style.height="auto")&&(r.style.width="100vw")};e(),t.onresize=e}}var n=class{constructor(){document.addEventListener("keyup",t=>this.onKeyup(t)),document.addEventListener("keydown",t=>this.onKeydown(t)),this._pressed={},this.ENTER=13,this.SPACE=32,this.LEFT=37,this.UP=38,this.RIGHT=39,this.DOWN=40}isDown(t){return this._pressed[t]}onKeydown(t){this._pressed[t.keyCode]=!0}onKeyup(t){delete this._pressed[t.keyCode]}},h=i(0),l=function(){var t,e,i,s,a,r=function(t){return Math.sin(6.283184*t)},o=function(t){return.003959503758*Math.pow(2,(t-128)/12)},n=function(t,e,i){var s,a,r,n,l,d,c,u=h[t.i[0]],y=t.i[1],f=t.i[3],p=h[t.i[4]],w=t.i[5],x=t.i[8],m=t.i[9],g=t.i[10]*t.i[10]*4,v=t.i[11]*t.i[11]*4,M=t.i[12]*t.i[12]*4,C=1/M,S=t.i[13],_=i*Math.pow(2,2-t.i[14]),k=new Int32Array(g+v+M),j=0,b=0;for(s=0,a=0;s<g+v+M;s++,a++)a>=0&&(a-=_,d=o(e+(15&(S=S>>8|(255&S)<<4))+t.i[2]-128),c=o(e+(15&S)+t.i[6]-128)*(1+8e-4*t.i[7])),r=1,s<g?r=s/g:s>=g+v&&(r-=(s-g-v)*C),n=d,f&&(n*=r*r),l=u(j+=n)*y,n=c,x&&(n*=r*r),l+=p(b+=n)*w,m&&(l+=(2*Math.random()-1)*m),k[s]=80*l*r|0;return k},h=[r,function(t){return t%1<.5?1:-1},function(t){return t%1*2-1},function(t){var e=t%1*4;return e<2?e-1:3-e}];this.init=function(r){t=r,e=r.endPattern,i=0,s=r.rowLen*r.patternLen*(e+1)*2,a=new Int32Array(s)},this.generate=function(){var o,l,d,c,u,y,f,p,w,x,m,g,v,M,C=new Int32Array(s),S=t.songData[i],_=t.rowLen,k=t.patternLen,j=0,b=0,E=!1,L=[];for(d=0;d<=e;++d)for(f=S.p[d],c=0;c<k;++c){var A=f?S.c[f-1].f[c]:0;A&&(S.i[A-1]=S.c[f-1].f[c+k]||0,A<16&&(L=[]));var D=h[S.i[15]],z=S.i[16]/512,P=Math.pow(2,S.i[17]-9)/_,O=S.i[18],T=S.i[19],B=43.23529*S.i[20]*3.141592/44100,q=1-S.i[21]/255,I=1e-5*S.i[22],R=S.i[23]/32,F=S.i[24]/512,Y=6.283184*Math.pow(2,S.i[25]-9)/_,N=S.i[26]/255,U=S.i[27]*_&-2;for(m=(d*k+c)*_,u=0;u<4;++u)if(y=f?S.c[f-1].n[c+u*k]:0){L[y]||(L[y]=n(S,y,_));var X=L[y];for(l=0,o=2*m;l<X.length;l++,o+=2)C[o]+=X[l]}for(l=0;l<_;l++)(x=C[p=2*(m+l)])||E?(g=B,O&&(g*=D(P*p)*z+.5),b+=(g=1.5*Math.sin(g))*(v=q*(x-b)-(j+=g*b)),x=3==T?b:1==T?v:j,I&&(x=(x*=I)<1?x>-1?r(.25*x):-1:1,x/=I),E=(x*=R)*x>1e-5,M=x*(1-(w=Math.sin(Y*p)*F+.5)),x*=w):M=0,p>=U&&(M+=C[p-U+1]*N,x+=C[p-U]*N),C[p]=0|M,C[p+1]=0|x,a[p]+=0|M,a[p+1]+=0|x}return++i/t.numChannels},this.createWave=function(){var t=44+2*s-8,e=t-36,i=new Uint8Array(44+2*s);i.set([82,73,70,70,255&t,t>>8&255,t>>16&255,t>>24&255,87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,255&e,e>>8&255,e>>16&255,e>>24&255]);for(var r=0,o=44;r<s;++r){var n=a[r];n=n<-32767?-32767:n>32767?32767:n,i[o++]=255&n,i[o++]=n>>8&255}return i},this.getData=function(t,e){for(var i=2*Math.floor(44100*t),s=new Array(e),r=0;r<2*e;r+=1){var o=i+r;s[r]=t>0&&o<a.length?a[o]/32768:0}return s}};class d{constructor(){!function(){new Date;let t=new l;t.init(c);let e=!1;setInterval(function(){if(!e&&(e=t.generate()>=1)){new Date;let e=t.createWave(),i=document.createElement("audio");i.src=URL.createObjectURL(new Blob([e],{type:"audio/wav"})),i.volume=.5,i.loop=!0;let s=i.play(),a=new Event("startGame");document.dispatchEvent(a),function t(e){e.then(t=>{}).catch(e=>{setTimeout(()=>{let e=i.play();t(e)},1e3)})}(s)}},10)}()}}let c={songData:[{i:[2,100,128,0,3,201,128,0,0,0,0,6,29,0,0,0,194,4,1,3,25,191,115,244,147,6,84,6],p:[5,1,2,1,1,1,1,3,4,1,2,1,2,1,2,,,7,8,7,8,7,8,7,8,6,9],c:[{n:[123,123,135,128,123,123,135,130,126,125,126,128,123,123,135,128,123,123,135,130,126,125,126,128,123,123,135,128,123,123,135,130],f:[21,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,48]},{n:[123,123,135,128,123,123,135,130,126,125,126,128,123,123,135,128,123,123,135,130,126,125,126,128,123,,99,,,,99,,,,,,,,,,,,,,,,,,,,,,,,,,111],f:[,,,,,,,,,,,,,,,,,,,,,,,,,,,11,13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,31]},{n:[111,,,,,,,,123,,,,,,,,111,,,,,,,,123],f:[]},{n:[114,,,,,,,,126,,,,,,,,114,,,,,,,,114,126,111,123,114,126,118,130],f:[13,,,,,,,,,,,,,,,,,,,,,,,,13,,13,,13,,13,11,29,,,,,,,,,,,,,,,,,,,,,,,,32,,41,,29,,25,15]},{n:[123,123,135,128,123,123,135,130,126,125,126,128,123,123,135,128,123,123,135,130,126,125,126,128,123,,99,,,,99,,,,,,,,,,,,,,,,,,,,,,,,,,111],f:[13,11,21,17,,,,,,,,,,,,,,,,,,,,,,,,,,,,17,29,,25,113,,,,,,,,,,,,,,,,,,,,,,,,,,,,194]},{n:[111,,,,,,,,123,,,,,,,,111,,,,,,,,99],f:[]},{n:[111,123,,123,111,,123,111,111,123,,123,111,,123,111,111,123,,123,111,,123,111,111,123,,123,111,,123,111],f:[]},{n:[114,126,,126,114,,126,114,114,126,,126,114,,126,114,114,126,,126,114,,126,114,116,128,,128,116,,114,121],f:[]},{n:[],f:[]}]},{i:[0,255,117,1,0,255,110,0,1,0,4,6,35,0,0,0,0,0,0,2,14,1,1,39,76,5,0,0],p:[,1,1,1,1,1,1,2,,,,1,1,1,1,1,1,,,1,1,1,1,1,1],c:[{n:[147,,,,,,147,,,,147,,,,,,147,,,,,,147,,,,147,,,,147],f:[]},{n:[147],f:[]}]},{i:[0,0,140,0,0,0,140,0,0,60,4,10,68,0,0,0,187,5,0,1,239,135,0,32,108,5,16,4],p:[,1,1,2,3,2,3,4,,,,2,3,2,3,2,3,,,5,5,5,5,5,5,4],c:[{n:[,,,,147,,,,,,,,148,,,,,,,,147,,,,,,,,147],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,35]},{n:[,,,,147,,,147,,,,,148,,,,,,,,147,,,147,,,147,,,,147],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,35]},{n:[,,,,147,,,147,,,,,148,,,,,,,,147,,,147,,,147,,,147,147,147],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,35]},{n:[147],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,68]},{n:[147,,,147,,,147,,147,,,147,,147,,147,147,,,147,,,147,,147,,,147,,147,,147],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,35]}]},{i:[2,192,128,0,2,192,140,18,0,0,107,115,138,0,0,0,136,5,1,2,8,92,21,56,148,5,85,8],p:[3,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],c:[{n:[111],f:[]},{n:[114],f:[]},{n:[111],f:[24,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,24,5,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,56]}]},{i:[3,0,127,0,3,68,127,0,1,218,4,4,40,0,0,1,55,4,1,2,67,115,124,190,67,6,39,1],p:[,,,1,2,1,2,3,,,,1,2,1,2,1,2,,,1,4,1,4,1,4,3],c:[{n:[,,,,147,,,,,,,,147,,,,,,,,147,,,,,,,,147],f:[]},{n:[,,,,147,,,,,,,,147,,,,,,,,147,,,,,,,,147,,147,147],f:[]},{n:[147],f:[]},{n:[,,,,147,,,,,,,,147,,,,,,,,147,,,,,,,,147,,,147],f:[]}]},{i:[0,91,128,0,0,95,128,12,0,0,12,0,67,0,0,0,0,0,0,2,255,15,0,32,83,3,134,4],p:[,,,1,2,3,2,1,2,,,1,2,3,2,1,2,,,,,4,5,4,5],c:[{n:[159,,147,,154,,147,,157,,147,,154,,150,,159,,147,,154,,147,,162,,147,,154,,150,,123],f:[5,13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,67]},{n:[159,,147,,154,,147,,157,,147,,154,,150,,159,,147,,154,,147,,162,,147,,157,,162,,126],f:[]},{n:[159,,147,,154,,147,,157,,147,,154,,150,,159,,147,,154,,147,,162,,147,,154,,150,,123],f:[5,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,3]},{n:[159,,162,,164,,,,159,,162,164,,,162,,159,,162,,164,,,,159,,162,164,,,162],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,25]},{n:[157,,162,,164,,,,157,,162,164,,,162,,157,,162,,164,,,,157,,162,164,,,162],f:[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,67]}]},{i:[3,146,140,0,1,224,128,3,0,0,92,0,95,0,0,3,179,5,1,3,37,135,63,67,150,3,157,6],p:[,,,,,,,,,1,2,3,,1,2,1,2,3,,4,5,,,,,3],c:[{n:[123,,,,,,,,,,,,,,,,130],f:[11,24,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,92,67]},{n:[133,,,,,,,,,,,,,,,138,126,,,,,,,,,,,,125],f:[11,,,,,,,,,,,,,,,,,,,,,,,,,,,,11,,,,95,,,,,,,,,,,,,,,,,,,,,,,,,,,,29]},{n:[123],f:[24,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,24,52,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,67]},{n:[123,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,138,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,116],f:[11,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,95]},{n:[133,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,126,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,118],f:[]}]},{i:[0,255,106,1,0,255,106,0,1,0,5,7,164,0,0,0,0,0,0,2,255,0,2,16,83,5,53,1],p:[,,,,,,,1,,,,,,,,,,1,,,,,,,,1],c:[{n:[147],f:[]}]}],rowLen:5513,patternLen:32,endPattern:26,numChannels:8};class u{handle(t,e){return!t.exploding&&!e.exploding&&t.x<e.x+e.size/2&&t.x+t.size>e.x-e.size/2&&t.y<e.y+e.size/2&&t.y+t.size>e.y-e.size/2&&(t.destroy(),e.takeDamage(t),!0)}}let y=[];class f{constructor({cw:t,ch:e}){for(let i=0;i<100;i++)y.push([Math.random()*t,Math.random()*e])}draw(t){t.draw(()=>{t.drawBackground("#111"),y.map(e=>t.rect({rect:[e[0],e[1],1,1],fillColor:"#fff",adjusted:!1})),t.text({text:"back to earth",x:-145,y:-95,size:"36px",font:"serif",letterSpacing:!0}),t.text({text:"Arrow keys to move. SPACE to shoot.",x:-145,y:105}),t.text({text:"ENTER to land back on earth.",x:-115,y:130}),t.text({text:"Shoot things. Collect ore. Upgrade weapons.",x:-178,y:155})})}}class p{constructor(){this.compasses=[{x:0,y:0,theta:0,color:"#4f4",visible:!1}]}tick(t){this.compasses=this.compasses.map(e=>(e.visible=Math.sqrt(t.getX()*t.getX()+t.getY()*t.getY())>400,e.theta=Math.atan2(t.getY(),t.getX()),e))}draw(t){this.compasses.forEach(e=>e.visible&&t.draw(()=>{t.rect({rect:[-230*Math.cos(e.theta)+320,-230*Math.sin(e.theta)+240,5,5],fillColor:e.color,adjusted:!1})}))}}class w{constructor(){this.timeout=15}tick(t,e,i,s){if(t.isDown(t.ENTER)&&this.timeout<0&&(this.timeout=15,e.landed=!1,e.timeout=15,e.setDx(0),e.setDy(0),i.initializeAsteroids(),e.heal(),e.level>=1&&s.addEnemy((300+300*Math.random())*(2*Math.round(Math.random())-1)+e.getX(),(300+300*Math.random())*(2*Math.round(Math.random())-1)+e.getY())),this.timeout-=1,t.isDown(t.SPACE)&&this.timeout<0){if(this.timeout=15,e.level>=e.shipLevels.length-1)return;let t=e.shipLevels[e.level+1].cost;e.ore>=t&&(e.ore-=t,e.setLevel(e.level+1))}}draw(t,e){t.draw(()=>{if(t.rect({rect:[0,0,640,480],fillColor:"rgba(0, 0, 0, 0.6)",adjusted:!1}),t.rect({rect:[150,90,340,300],fillColor:"#fff",adjusted:!1}),t.rect({rect:[151,91,338,298],fillColor:"#000",shadowBlur:2,shadowColor:"#fff",adjusted:!1}),t.text({text:"Welcome to Earth",x:210,y:140,size:"20px",font:"serif",letterSpacing:!0,adjusted:!1}),e.level>=e.shipLevels.length-1)t.text({text:"You have all ship upgrades",x:245,y:180,adjusted:!1});else{let i=e.shipLevels[e.level+1].cost;t.text({text:"If you have "+i+" ore,",x:245,y:180,adjusted:!1}),t.text({text:"you may upgrade your ship",x:215,y:205,adjusted:!1}),t.text({text:"by pressing SPACE",x:247,y:230,adjusted:!1}),t.text({text:"You have "+e.ore+" ore",x:260,y:270,adjusted:!1})}t.text({text:"Leave Earth by pressing ENTER",x:195,y:360,adjusted:!1})})}}class x{draw(t){t.draw(()=>{t.text({text:"🌎",x:-65,y:35,size:"100px",color:"blue",filter:"contrast(75%) brightness(60%) saturate(40%) hue-rotate(-10deg)"})})}}let m={"main-laser":{color:"#f66",shadowColor:"#f00",speed:4,lifeSpan:4},"enemy-laser":{color:"#a0f",shadowColor:"#a0f",speed:4,lifeSpan:4},"secondary-laser":{color:"#f6f",shadowColor:"#f0f",speed:10,lifeSpan:1},missile:{type:"missile",color:"#ff0",shadowColor:"#ff0",speed:.8,lifeSpan:10,maxSpeed:5}};class g{constructor({x:t,y:e,yaw:i,damage:s,type:a,owner:r,target:o}){this.type=m[a],this.x=t,this.y=e,this.yaw=i,this.owner=r,this.lifeSpan=1e3*this.type.lifeSpan/60,this.size=1,this.shouldDie=!1,this.damage=s,this.exploding=!1,this.dx=Math.sin(this.yaw)*this.type.speed,this.dy=-Math.cos(this.yaw)*this.type.speed,this.target=o}tick(){if(this.lifeSpan-=1,this.lifeSpan<=0&&(this.shouldDie=!0),!this.exploding){if("missile"===this.type.type){let t,e;if(this.target&&!this.target.exploding&&this.lifeSpan<1e3*(this.type.lifeSpan-.5)/60){t=this.x-this.target.x,e=this.y-this.target.y;let i=Math.sqrt(t*t+e*e);t=t/i*this.type.speed,e=e/i*this.type.speed}else t=this.dx*-this.type.speed,e=this.dy*-this.type.speed;this.dx-=t,this.dy-=e;let i=Math.sqrt(this.dx*this.dx+this.dy*this.dy);i>this.type.maxSpeed&&(this.dx=this.dx/i*this.type.maxSpeed,this.dy=this.dy/i*this.type.maxSpeed)}this.x+=this.dx,this.y+=this.dy}}destroy(){this.exploding=!0,this.lifeSpan=2}draw(t){t.draw(()=>{this.exploding?t.arc({arc:[this.x,this.y,4/this.lifeSpan,0,2*Math.PI],fillColor:"#ff8",shadowBlur:10,shadowColor:"#ff0"}):t.rect({rect:[this.x,this.y,2,2],fillColor:this.type.color,shadowBlur:2,shadowColor:this.type.shadowColor})})}}class v{constructor({x:t,y:e,color:i="#fff"}){this.x=t,this.y=e,this.color=i,this.dx=4*Math.random()-2,this.dy=4*Math.random()-2,this.shouldDie=!1,this.exploding=!1}tick(){this.x+=this.dx,this.y+=this.dy}draw(t){t.draw(()=>{t.rect({rect:[this.x,this.y,2,2],fillColor:this.color,shadowBlur:2,shadowColor:this.color})})}}let M=[{draw:(t,e,i,s,a)=>{t.draw(()=>{t.rect({rect:[e-s/2,i-s/2,s,s],fillColor:"#fff",rotation:a,size:s})})},acceleration:.01,turnSpeed:.05,maxSpeed:1,weapons:["enemy-laser"],mainLaserCooldown:.5,health:5,bounty:100,size:20}];class C{constructor(t,e,i){this.x=e,this.y=i,this.dx=0,this.dy=0,this.yaw=0,this.shouldDie=!1,this.exploding=!1,this.type=t,this.projectiles=[],this.size=t.size,this.acceleration=t.acceleration,this.maxSpeed=t.maxSpeed,this.turnSpeed=t.turnSpeed,this.health=t.health,this.bounty=t.bounty,this.engineOn=!0,this.mainLaserCanFire=t.weapons.includes("enemy-laser"),this.mainLaserCooldown=t.mainLaserCooldown}takeDamage({damage:t,dx:e,dy:i,owner:s}){this.dx+=e/30,this.dy+=i/30,this.health-=t,this.health<=0&&(this.exploding=!0,this.debris=Array(20).fill().map(t=>new v({x:this.x,y:this.y,color:"#aa3"})).concat(Array(20).fill().map(t=>new v({x:this.x,y:this.y,color:"#a33"}))),this.lifeSpan=80,s.ore+=this.bounty)}weaponsTick(t){this.mainLaserCanFire&&(this.projectiles.push(new g({x:this.x,y:this.y,yaw:this.yaw,damage:1,type:"enemy-laser",owner:this})),this.mainLaserCanFire=!1,window.setTimeout(()=>this.mainLaserCanFire=!0,1e3*this.mainLaserCooldown),t.enemyLaser())}tick(t,e){if(this.projectiles.map(t=>t.tick()),this.projectiles=this.projectiles.filter(t=>!t.shouldDie),this.exploding)this.lifeSpan-=1,this.debris.map(t=>t.tick()),this.lifeSpan<=0&&(this.shouldDie=!0);else{let i=Math.atan2(e.getX()-this.x,-e.getY()+this.y);if(this.yaw+=this.yaw-i>0?-this.turnSpeed:this.turnSpeed,this.yaw%=2*Math.PI,this.engineOn=!0,this.engineOn){this.dx+=Math.sin(this.yaw)*this.acceleration,this.dy+=Math.cos(this.yaw)*-this.acceleration;let t=Math.sqrt(this.dx*this.dx+this.dy*this.dy);t>this.maxSpeed&&(this.dx=this.dx/t*this.maxSpeed,this.dy=this.dy/t*this.maxSpeed)}let s=Math.sqrt((this.x-e.x)*(this.x-e.x)+(this.y-e.y)*(this.y-e.y));!e.exploding&&s<320&&this.weaponsTick(t,[e])}this.x+=this.dx,this.y+=this.dy}draw(t){this.projectiles.map(e=>e.draw(t)),this.exploding?(this.debris.map(e=>e.draw(t)),t.draw(()=>{t.arc({arc:[this.x+20*Math.random()-10,this.y+20*Math.random()-10,2+6*Math.random(),0,2*Math.PI],strokeColor:"rgb(255,"+Math.floor(155*Math.random()+100)+","+Math.floor(50*Math.random())+")",shadowBlur:10,shadowColor:"#f00"})})):this.type.draw(t,this.x,this.y,this.size,this.yaw)}}class S{constructor(){this.enemies=[]}addEnemy(t,e){this.enemies.push(new C(M[0],t,e))}tick(t,e){this.enemies.forEach(i=>i.tick(t,e)),this.enemies=this.enemies.filter(t=>!t.shouldDie)}draw(t){this.enemies.forEach(e=>e.draw(t))}}class _{tick(){}draw(t){t.draw(()=>{t.drawBackground("rgba(0,0,0,0.85)"),t.text({text:"game over",x:170,y:200,size:"48px",font:"serif",adjusted:!1,letterSpacing:!0})})}}class k{constructor(){this.ore=0}tick(t){this.ore=t.ore,this.health=t.health}draw(t){t.draw(()=>{this.ore>0&&t.text({text:"ore: "+this.ore,x:"305",y:"20",size:"11px",adjusted:!1}),t.text({text:"health: "+this.health,x:"305",y:"40",size:"11px",adjusted:!1})})}}let j=[{turnSpeed:.05,maxSpeed:1,acceleration:.01,size:10,mainLaserCooldown:.3,mainLaserCanFire:!0,health:10},{cost:100,turnSpeed:.07,maxSpeed:2,acceleration:.03,size:15,mainLaserCooldown:.3,mainLaserCanFire:!0,secondaryLaserCooldown:.2,secondaryLaserCanFire:!0,health:20},{cost:400,turnSpeed:.09,maxSpeed:3,acceleration:.2,size:20,mainLaserCooldown:.3,mainLaserCanFire:!0,secondaryLaserCooldown:.2,secondaryLaserCanFire:!0,missileCooldown:.2,missileCanFire:!0,health:40}],b=3.4,E=.05,L=1,A=.01,D=10,z=.3,P=!0,O=!1,T=1,B=.2,q=!1,I=1,R=.2,F={engineOn:!1},Y=0;function N(t,e,i,s){let a=null,r=99999999;return i.forEach(i=>{if(i.exploding)return;let o=i.x-t,n=i.y-e,h=Math.sqrt(o*o+n*n);h>s||h<r&&(a=i,r=h)}),a}class U{constructor(){this.x=100,this.y=-400,this.dx=-.1,this.dy=.5,this.projectiles=[],this.landed=!1,this.ore=0,this.timeout=0,this.level=0,this.shipLevels=j,this.health=10,this.exploding=!1,this.size=D}getX(){return this.x}getY(){return this.y}setDx(t){this.dx=t}setDy(t){this.dy=t}takeDamage({damage:t,dx1:e,dy1:i}){this.health-=t,this.health<=0&&(this.exploding=!0,this.debris=Array(100).fill().map(t=>new v({x:this.x,y:this.y,color:"#aa3"})).concat(Array(100).fill().map(t=>new v({x:this.x,y:this.y,color:"#a33"}))),this.lifeSpan=80)}heal(){this.health=j[this.level].health}setLevel(t){({turnSpeed:E,maxSpeed:L,acceleration:A,size:D,mainLaserCooldown:z,mainLaserCanFire:P,secondaryLaserCooldown:B,secondaryLaserCanFire:O,missileCooldown:R,missileCanFire:q}=j[t]),this.level=t}weaponsTick(t,e,i){t.isDown(t.SPACE)&&(P&&(this.projectiles.push(new g({x:this.x,y:this.y,yaw:b,damage:1,type:"main-laser",owner:this})),P=!1,window.setTimeout(()=>P=!0,1e3*z),e.mainLaser()),O&&(this.projectiles.push(new g({x:T*Math.cos(b)*(D/2)+this.x,y:T*Math.sin(b)*(D/2)+this.y,yaw:b,damage:1,type:"secondary-laser",owner:this})),T*=-1,O=!1,window.setTimeout(()=>O=!0,1e3*B),e.secondaryLaser()),q&&(this.projectiles.push(new g({x:I*Math.cos(b)*(D/2)+this.x,y:I*Math.sin(b)*(D/2)+this.y,yaw:b+Math.PI/2*I,damage:1,type:"missile",owner:this,target:N(this.x,this.y,i,260)})),I*=-1,q=!1,window.setTimeout(()=>q=!0,1e3*R),e.missile()))}tick(t,e,i,s){if(this.projectiles.map(t=>t.tick()),this.projectiles=this.projectiles.filter(t=>!t.shouldDie),this.exploding)this.lifeSpan-=1,this.debris.map(t=>t.tick()),this.lifeSpan<=0&&(this.death=!0);else{if(this.timeout<0&&t.isDown(t.ENTER)&&(this.landed=!0),this.timeout-=1,Y+=1,t.isDown(t.LEFT)&&(b-=E),t.isDown(t.RIGHT)&&(b+=E),F.engineOn=t.isDown(t.UP),F.engineOn){this.dx+=Math.sin(b)*A,this.dy+=Math.cos(b)*-A;let t=Math.sqrt(this.dx*this.dx+this.dy*this.dy);t>L&&(this.dx=this.dx/t*L,this.dy=this.dy/t*L),e.engineOn()}else e.engineOff();this.weaponsTick(t,e,s),this.x+=this.dx,this.y+=this.dy,i.camera.x=this.x,i.camera.y=this.y}}draw(t){this.projectiles.map(e=>e.draw(t)),this.exploding?(this.debris.map(e=>e.draw(t)),t.draw(()=>{t.arc({arc:[this.x+20*Math.random()-10,this.y+20*Math.random()-10,2+6*Math.random(),0,2*Math.PI],strokeColor:"rgb(255,"+Math.floor(155*Math.random()+100)+","+Math.floor(50*Math.random())+")",shadowBlur:10,shadowColor:"#f00"})})):(F.engineOn&&this.drawEngine(t),this.x*this.x+this.y*this.y<3600&&this.drawHalo(t),t.draw(()=>{t.lines({x:this.x,y:this.y,lines:[[this.x,this.y-7],[this.x+5,this.y+5],[this.x-5,this.y+5]],rotation:b,fillColor:"#070"})}))}drawEngine(t){t.draw(()=>{t.lines({x:this.x,y:this.y,lines:[[this.x+-.5*D,this.y+.5*D],[this.x+.5*D,this.y+.5*D],[this.x,this.y+.5*D+5*Math.random()],[this.x+-.5*D,this.y+.5*D]],rotation:b,fillColor:"orange"})})}drawHalo(t){t.draw(()=>{t.arc({arc:[this.x,this.y,Math.sin(Y/8)+10,0,2*Math.PI],strokeColor:"#aaa",shadowBlur:1,shadowColor:"#aaa"})})}}const X=[[[-6,-10],[2,-10],[10,-7],[10,-5],[2,0],[10,3],[4,10],[1,8],[-6,10],[-10,2],[-10,-5],[-5,-5]],[[-5,-10],[0,-7],[5,-10],[10,-3],[5,0],[9,5],[4,10],[-3,7],[-7,9],[-10,5],[-7,0],[-9,-6]]];class W{constructor({x:t,y:e}){this.x=t,this.y=e,this.dx=0,this.dy=0,this.asteroidStyle=Math.floor(Math.random()*X.length),this.rotation=Math.random()*Math.PI,this.turnSpeed=.03*Math.random(),this.size=20,this.health=3,this.shouldDie=!1,this.exploding=!1}takeDamage({damage:t,dx:e,dy:i,owner:s}){this.dx+=e/30,this.dy+=i/30,this.health-=t,this.health<=0&&(this.exploding=!0,this.debris=Array(20).fill().map(t=>new v({x:this.x,y:this.y})),this.lifeSpan=50,s.ore+=10)}tick(){this.exploding&&(this.lifeSpan-=1,this.debris.map(t=>t.tick()),this.lifeSpan<=0&&(this.shouldDie=!0)),this.x+=this.dx,this.y+=this.dy,this.rotation+=this.turnSpeed}draw(t){t.draw(()=>{this.exploding?this.debris.map(e=>e.draw(t)):t.lines({lines:X[this.asteroidStyle].map(t=>[this.x+t[0],this.y+t[1]]),strokeColor:"#fff",shadowBlur:8,shadowColor:"#fff",rotation:this.rotation,x:this.x,y:this.y})})}}class H{constructor(){this.initializeAsteroids()}initializeAsteroids(){this.asteroids=[];for(let t=0;t<40;t++){let t=Math.random()*Math.PI*2,e=Math.sin(t)*(210+400*Math.random()),i=Math.cos(t)*(210+400*Math.random());this.asteroids.push(new W({x:e,y:i}))}}tick(){this.asteroids.forEach(t=>t.tick()),this.asteroids=this.asteroids.filter(t=>!t.shouldDie)}draw(t){this.asteroids.map(e=>e.draw(t))}}window.onload=()=>{const t=new o,e=new a(t.canvas),i=new n,s=new h.a,r=new u;t.initialize();let l=(new Date).getTime(),c=0,y=0,m=()=>{g(),v(),M()},g=()=>{P.landed?L.tick(i,P,O,D):(E.tick(P),b.tick(P),D.tick(s,P),P.tick(i,s,e,O.asteroids.concat(D.enemies)),O.tick())},v=()=>{P.projectiles.forEach(t=>{O.asteroids.forEach(e=>{r.handle(t,e)&&s.projectileHit()}),D.enemies.forEach(e=>{r.handle(t,e)&&s.projectileHit()})}),D.enemies.forEach(t=>{t.projectiles.forEach(t=>{r.handle(t,P)&&s.projectileHit(),O.asteroids.forEach(e=>{r.handle(t,e)&&s.projectileHit()})})})},M=()=>{window.requestAnimationFrame(m),c=(new Date).getTime(),(y=c-l)>1e3/60&&(e.clearBackground(),C().map(t=>t.draw(e)),P.landed&&L.draw(e,P),P.death&&z.draw(e),l=c-y%(1e3/60))},C=()=>[j,A,O,D,P,b,E];const j=new f({cw:t.canvas.width,ch:t.canvas.height}),b=new p,E=new k,L=new w,A=new x,D=new S,z=new _,P=(new d,new U),O=new H;document.addEventListener("startGame",()=>{document.querySelector("main").className+=" loaded",m()})}}]);