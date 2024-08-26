import{_ as b,o,c,n as x,a as u,t as T,b as m,B as N,A as B,C as E,F as $,u as q,q as p,g as F,s as A,v as D,w,z as s,x as l,y as r}from"./D4crdWAI.js";import{_ as M}from"./ClxWwAwQ.js";const V={};function W(a,e){return o(),c("div")}const j=b(V,[["render",W]]),z={class:"w-20 h-20 border-slate-950 border-spacing-10 rounded-xl"},G=["src"],L=x({__name:"Thumbnail",props:{src:{}},setup(a){const e=a;return(t,n)=>(o(),c("div",z,[u("img",{src:e.src,alt:""},null,8,G)]))}}),P={class:"font-extrabold text-center"},S=x({__name:"Title",props:{txt:{}},setup(a){const e=a;return(t,n)=>(o(),c("div",P,T(e.txt),1))}}),O=u("div",{class:N("my-2")},null,-1),v=x({__name:"index",props:{item:{},customGap:{}},setup(a){const e=a,t=()=>{const n=e.item.link?`&link=${e.item.link}`:"";B(`/content?type=${e.item.type??"website"}&contenttype=${e.item.contentType??"file"}${n}&name=${e.item.title}`)};return(n,i)=>{const _=L,d=S;return o(),c("div",{class:"cursor-pointer min-w-[100px] flex flex-col justify-center items-center",onClick:t},[m(_,{src:e.item.thumbnail},null,8,["src"]),O,m(d,{txt:e.item.title},null,8,["txt"])])}}}),R=x({__name:"index",props:{list:{}},setup(a){const e=a;return(t,n)=>{const i=v;return o(!0),c($,null,E(e.list,(_,d)=>(o(),c("div",null,[m(i,{item:_},null,8,["item"])]))),256)}}}),H={class:"w-full px-auto mx-auto justify-center items-center grid grid-cols-3 gap-4"},J=x({__name:"index",props:{list:{}},setup(a){const e=a;return(t,n)=>{const i=v;return o(!0),c($,null,E(e.list,(_,d)=>(o(),c("div",H,[m(i,{item:_},null,8,["item"])]))),256)}}}),K={};function Q(a,e){return null}const U=b(K,[["render",Q]]),X={},Y=u("div",null," FluxDev ",-1),Z=u("div",null," email: dong5966@naver.com ",-1),tt=u("div",null," kakao: 'fluxhunter' 검색 후 1:1 대화 ",-1),et=[Y,Z,tt];function nt(a,e){return o(),c("div",null,et)}const st=b(X,[["render",nt]]),it={class:"w-full h-full"},ot=u("div",{class:"py-2"},null,-1),at=u("div",{class:"py-2"},null,-1),_t=x({__name:"showcase",setup(a){const e=q(),t=p({tabIdx:Number(e.query.tab??0),isMyInfoExist:!!(e.query.info??!1)}),n=p({isExist:!1,website:[],webgame:[],playablead:[{thumbnail:"logo/playablead/sweetopia.png",title:"SWEETOPIA",type:"playablead",contentType:"file"}],etc:[]}),i=p({isExist:!1,website:[],webgame:[],playablead:[],etc:[]});F(()=>e.query.tab,async f=>{t.tabIdx=Number(f),_(),d()});const _=()=>{if(t.tabIdx===0)return n.isExist=!!n.website.length;if(t.tabIdx===1)return n.isExist=!!n.webgame.length;if(t.tabIdx===2)return n.isExist=!!n.playablead.length;if(t.tabIdx===3)return n.isExist=!!n.etc.length;n.isExist=!1},d=()=>{if(t.tabIdx===0)return i.isExist=!!i.website.length;if(t.tabIdx===1)return i.isExist=!!i.webgame.length;if(t.tabIdx===2)return i.isExist=!!i.playablead.length;if(t.tabIdx===3)return i.isExist=!!i.etc.length;i.isExist=!1};return A(async()=>{await D(),d()}),(f,ct)=>{const h=j,y=R,I=J,g=U,k=M,C=st;return o(),c("div",it,[m(k,{name:"tabcontent",tabIdx:s(t).tabIdx},{default:w(()=>[ot,s(t).tabIdx===0?(o(),l(h,{key:0,list:s(n).website},null,8,["list"])):r("",!0),s(t).tabIdx===1?(o(),l(y,{key:1,list:s(n).webgame},null,8,["list"])):r("",!0),s(t).tabIdx===2?(o(),l(I,{key:2,list:s(n).playablead},null,8,["list"])):r("",!0),s(t).tabIdx===3?(o(),l(g,{key:3,list:s(n).etc},null,8,["list"])):r("",!0),at,m(k,{name:"template",tabIdx:s(t).tabIdx,isExist:s(i).isExist},{default:w(()=>[s(t).tabIdx===0?(o(),l(h,{key:0,list:s(i).website},null,8,["list"])):r("",!0),s(t).tabIdx===1?(o(),l(y,{key:1,list:s(i).webgame},null,8,["list"])):r("",!0),s(t).tabIdx===2?(o(),l(I,{key:2,list:s(i).playablead},null,8,["list"])):r("",!0),s(t).tabIdx===3?(o(),l(g,{key:3,list:s(i).etc},null,8,["list"])):r("",!0)]),_:1},8,["tabIdx","isExist"]),s(t).isMyInfoExist?(o(),l(C,{key:4})):r("",!0)]),_:1},8,["tabIdx"])])}}});export{_t as default};
