(this["webpackJsonpcitadel-ui"]=this["webpackJsonpcitadel-ui"]||[]).push([[0],{160:function(e,t,a){e.exports=a(261)},165:function(e,t,a){},261:function(e,t,a){"use strict";a.r(t);var r=a(1);var n=a.n(r);var c=a(62);var o=a.n(c);var l=a(165);var i=a(7);var m=a(65);var u=a(38);var s=a(274);var v=a(23);var d=a(283);var b=a(269);var f=a(281);var E=a(68);var p=a(278);var y=a(280);var O=a(272);var h=a(279);var j=a(50);var C=a(2);var g=Object(i["c"])(m["b"]).withConfig({displayName:"Link"})(["text-decoration:none;color:",";"],Object(C["A"])("colors.primary"));var w=a(271);var S=function e(t){var a=t.timestamp;return n.a.createElement(n.a.Fragment,null,Object(w["a"])(a,"yyyy-MM-dd HH:mm"))};var D=a(276);var k=a(277);var P;(function(e){e["AES"]="AES";e["TDES"]="TDES"})(P||(P={}));var A;(function(e){e["ECB"]="ECB";e["CBC"]="CBC"})(A||(A={}));var _;(function(e){e["NoPadding"]="NO_PADDING";e["ZeroBytePadding"]="ZERO_BYTE_PADDING";e["PKCS7Padding"]="PKCS7_PADDING"})(_||(_={}));var N;(function(e){e["Active"]="ACTIVE";e["Rotated"]="ROTATED"})(N||(N={}));var x;(function(e){e[e["ASC"]=0]="ASC";e[e["DESC"]=1]="DESC";e[e["None"]=2]="None"})(x||(x={}));var B=Object(i["c"])(y["a"].Col).withConfig({displayName:"HeaderCol__Col"})(["display:flex;align-items:center;",""],(function(e){var t=e.isSortable;return t&&Object(i["b"])(["cursor:pointer;"])}));var T=function e(t){var a=t.children,c=t.cols,o=t.onSort;var l=Object(r["useState"])(x.None),i=Object(v["a"])(l,2),m=i[0],u=i[1];var s=Object(r["useCallback"])((function(){if(!o)return;var e=function e(t){u(t);o(t)};switch(m){case x.ASC:e(x.None);break;case x.DESC:e(x.ASC);break;case x.None:e(x.DESC)}}),[o,m]);return n.a.createElement(B,{cols:c,pt:1,pb:1,onClick:s,isSortable:o},n.a.createElement(f["b"],{fontWeight:800,ver:true},a),m===x.DESC&&n.a.createElement(D["a"],null),m===x.ASC&&n.a.createElement(k["a"],null))};var H=Object(i["c"])(y["a"].Row).withConfig({displayName:"DataGrid__HeaderRow"})(["border-bottom:1px solid ",";"],Object(C["A"])("colors.grey-50"));var R=Object(i["c"])(y["a"].Col).withConfig({displayName:"DataGrid___StyledGridCol"})((function(e){return{wordWrap:e._css}}));var G=function e(t){var a=t.children,r=t.cols,c=t.wordWrap,o=t.color;return n.a.createElement(R,{cols:r,pt:1,pb:1,color:o,_css:c?"break-word":"normal"},a)};var I=Object(i["c"])(y["a"].Row).withConfig({displayName:"DataGrid__DataRow"})(["border-bottom:1px solid ",";:nth-child(odd){background-color:",";}:hover{background-color:",";}"],Object(C["A"])("colors.grey-90"),Object(C["A"])("colors.grey-95"),Object(C["A"])("colors.grey-90"));var z=a(282);var W=Object(i["c"])(E["a"]).withConfig({displayName:"styled__TabBarWrapper"})(["border-bottom:1px solid ",";"],Object(C["A"])("colors.grey-80"));var F=Object(i["c"])(f["b"]).withConfig({displayName:"styled__UserNameBox"})(["white-space:nowrap;"]);var V=function e(){return n.a.createElement(W,{mb:3},n.a.createElement(b["a"],{m:"0 auto",width:"1280px"},n.a.createElement(E["a"],{flex:"1"},n.a.createElement(z["a"],null,n.a.createElement(z["a"].Item,{to:"/dictionaries"},"Home"))),n.a.createElement(b["a"],null,n.a.createElement(F,{mr:2,mt:2},"John Doe"))))};var J=V;var K=function e(t){var a=t.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(E["a"],{ml:"2",mr:"2"},n.a.createElement(J,null)),n.a.createElement(E["a"],{ml:"2",mr:"2"},n.a.createElement(E["a"],{m:"0 auto",width:"1280px",pb:2},a)))};var M=K;var Z=a(67);var q=a(153);var L=a.n(q);var U=a(93);var Y=a.n(U);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));a.push.apply(a,r)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,true).forEach((function(t){Object(Z["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var $={123456789e4:{id:"1234567890000",name:"Test",data:[["ph","Biology"],["Atoms","Chemistry"],["Circuit Building","Physics"],["ph","Pharmacy"]]}};var ee=n.a.createContext({data:$,add:Y.a,remove:Y.a,edit:Y.a});var te=function e(t){var a=t.children;var c=Object(r["useState"])($),o=Object(v["a"])(c,2),l=o[0],i=o[1];var m=Object(r["useCallback"])((function(e){return i(X(Object(Z["a"])({},e.id,e),l))}),[l]);var u=Object(r["useCallback"])((function(e){i(L()(l,e))}),[l]);var s=Object(r["useCallback"])((function(e,t){i(X({},l,Object(Z["a"])({},e,X({},l[e],{data:t}))))}),[l]);return n.a.createElement(ee.Provider,{value:{data:l,add:m,remove:u,edit:s}},a)};var ae=function e(){return Object(r["useContext"])(ee)};var re=a(56);var ne=a(273);var ce=function e(t){var a=t.input,r=t.placeholder,c=t.meta,o=t.disabled;return n.a.createElement(ne["a"],{onChange:a.onChange,error:c.touched&&c.error,placeholder:r,value:a.value,disabled:o})};var oe=ce;var le=function e(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return function(e,t){return a.reduce((function(a,r){return a||r(e,t)}),void 0)}};var ie=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Required";return function(e){var a=!e||Array.isArray(e)&&!e.length;return a?t:void 0}};var me=function e(t){var a=t.map((function(e){var t=Object(v["a"])(e,1),a=t[0];return a}));return function(e){return a.includes(e)?"Same entry exists":void 0}};function ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));a.push.apply(a,r)}return a}function se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ue(a,true).forEach((function(t){Object(Z["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ue(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ve=function e(t){var a=t.onCancel,c=t.onSubmit;var o=Object(r["useCallback"])((function(e){return c(se({id:Date.now(),data:[]},e))}),[c]);return n.a.createElement(E["a"],{bg:"white",radius:"popup",elevation:j["a"].Higher,maxWidth:600,p:3,my:3,mx:"auto"},n.a.createElement(f["a"],null,"Create Dictionary"),n.a.createElement(E["a"],{mt:2},n.a.createElement(re["b"],{initialValues:{name:""},onSubmit:o,render:function e(t){var r=t.handleSubmit,c=t.submitError;return n.a.createElement("form",{onSubmit:r},n.a.createElement(re["a"],{name:"name",component:oe,validate:ie(),placeholder:"Name"}),c&&n.a.createElement(f["b"],{color:"error",mt:2},"Submition Error: ",c),n.a.createElement(b["a"],{mt:5},n.a.createElement(p["a"],{size:"sm",width:"10rem",variant:"accent",mr:2,type:"submit"},"Create"),n.a.createElement(p["a"],{size:"sm",width:"10rem",variant:"primary",onClick:function e(){return a()}},"Cancel")))}})))};var de=ve;var be=function e(){var t=Object(r["useState"])(false),a=Object(v["a"])(t,2),c=a[0],o=a[1];var l=Object(r["useState"])(),i=Object(v["a"])(l,2),m=i[0],u=i[1];var s=ae(),C=s.data,w=s.add,D=s.remove;return n.a.createElement(M,null,n.a.createElement(b["a"],{justifyContent:"space-between"},n.a.createElement(f["a"],null,"Dictionaries"),n.a.createElement(E["a"],{width:"14rem"},n.a.createElement(p["a"],{size:"sm",onClick:function e(){return o(true)}},"Create Dictionary"))),n.a.createElement(E["a"],{mt:2},n.a.createElement(y["a"],null,n.a.createElement(H,null,n.a.createElement(T,{cols:6},"Title"),n.a.createElement(T,{cols:6},"Date")),Object.keys(C)&&Object.keys(C).map((function(e){return n.a.createElement(I,{key:e},n.a.createElement(G,{cols:6},n.a.createElement(g,{to:"/dictionaries/".concat(e)},C[e].name)),n.a.createElement(G,{cols:5},n.a.createElement(S,{timestamp:parseInt(e)})),n.a.createElement(G,{cols:1},n.a.createElement(d["a"],{onClick:function t(){return u(e)}})))})))),n.a.createElement(O["a"],{isOpen:!!m},n.a.createElement(h["a"],{in:!!m,offset:-100},n.a.createElement(E["a"],{bg:"white",radius:"popup",elevation:j["a"].Higher,maxWidth:600,p:3,my:3,mx:"auto"},n.a.createElement(f["a"],null,"Are you sure?"),n.a.createElement(b["a"],{mt:5},n.a.createElement(p["a"],{size:"sm",width:"10rem",variant:"accent",mr:2,onClick:function e(){D(m);u(null)}},"Delete"),n.a.createElement(p["a"],{size:"sm",width:"10rem",variant:"primary",onClick:function e(){return u(null)}},"Cancel"))))),n.a.createElement(O["a"],{isOpen:c},n.a.createElement(h["a"],{in:c,offset:-100},n.a.createElement(de,{onSubmit:function e(t){w(t);o(false)},onCancel:function e(){return o(false)}}))))};var fe=be;var Ee=a(154);var pe=i["c"].button.withConfig({displayName:"styled__HiddenFormButton"})(["width:0;height:0;visibility:hidden;position:absolute;"]);var ye=Object(i["c"])(I).withConfig({displayName:"styled__Drow"})(["& .delete{display:none;}&:hover .delete{display:block;}"]);var Oe=function e(){var t=Object(u["g"])(),a=t.id;var c=ae(),o=c.data,l=c.edit;var i=Object(r["useState"])(false),m=Object(v["a"])(i,2),s=m[0],O=m[1];var h=o[a];var j=h.data;var C={};var g=true;var w=false;var S=void 0;try{for(var D=j[Symbol.iterator](),k;!(g=(k=D.next()).done);g=true){var P=k.value;var A=Object(v["a"])(P,1);var _=A[0];C[_]?C[_]+=1:C[_]=1}}catch(x){w=true;S=x}finally{try{g||null==D.return||D.return()}finally{if(w)throw S}}var N=Object(r["useCallback"])((function(e){return!s||1===C[e]}),[C,s]);return n.a.createElement(M,null,n.a.createElement(b["a"],{justifyContent:"space-between"},n.a.createElement(f["a"],null,"Dictionary ",h.name),n.a.createElement(E["a"],{width:"14rem"},n.a.createElement(p["a"],{size:"sm",onClick:function e(){return O(!s)}},"Validate"))),n.a.createElement(E["a"],{mt:2},n.a.createElement(y["a"],null,n.a.createElement(H,null,n.a.createElement(T,{cols:6},"From"),n.a.createElement(T,{cols:6},"To")),j&&j.map((function(e){var t=Object(v["a"])(e,2),r=t[0],c=t[1];return n.a.createElement(ye,{key:r+c},n.a.createElement(G,{cols:6,color:N(r)?"black":"red"},r),n.a.createElement(G,{cols:5},c),n.a.createElement(G,{cols:1},n.a.createElement(d["a"],{className:"delete",onClick:function e(){l(a,h.data.filter((function(e){var t=Object(v["a"])(e,1),a=t[0];return a!==r})))}})))})),n.a.createElement(re["b"],{initialValues:{from:"",to:""},onSubmit:function e(t,r){l(a,[].concat(Object(Ee["a"])(h.data),[[t.from,t.to]]));setTimeout(r.reset)},render:function e(t){var a=t.handleSubmit;return n.a.createElement("form",{onSubmit:a},n.a.createElement(I,null,n.a.createElement(G,{cols:6},n.a.createElement(re["a"],{name:"from",component:oe,validate:le(ie(),me(h.data)),placeholder:"From"})),n.a.createElement(G,{cols:6},n.a.createElement(re["a"],{name:"to",component:oe,validate:ie(),placeholder:"To"}))),n.a.createElement(pe,{type:"submit"}))}}))))};var he=Oe;var je=function e(){return n.a.createElement(m["a"],null,n.a.createElement(i["a"],{theme:s["a"]},n.a.createElement(te,null,n.a.createElement(u["d"],null,n.a.createElement(u["b"],{path:"/dictionaries",component:fe,exact:true}),n.a.createElement(u["b"],{path:"/dictionaries/:id",component:he,exact:true}),n.a.createElement(u["a"],{exact:true,from:"/",to:"/dictionaries"})))))};var Ce=je;o.a.render(n.a.createElement(Ce,null),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.7373b0d4.chunk.js.map