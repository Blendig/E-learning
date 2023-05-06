(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[19],{512:function(e,t,n){"use strict";var c=n(26),r=n(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=(0,c(n(35)).default)(a.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=i},538:function(e,t,n){"use strict";var c=n(11),r=n(0),a=n(19),i=[];t.a=function(){var e=Object(r.useState)(i),t=Object(c.a)(e,2),n=t[0],o=t[1],s=Object(a.c)((function(e){return e.voiceReducer})),l=s.speed,d=s.voiceURI,u=s.volume,p=n.find((function(e){return e.voiceURI===d}));return Object(r.useEffect)((function(){if(!(i.length>0)){var e=setInterval((function(){var t=window.speechSynthesis.getVoices();t.length>0&&(i=t.filter((function(e){return-1!==e.lang.indexOf("en")})),o(t.filter((function(e){return-1!==e.lang.indexOf("en")}))),clearInterval(e))}),50);return function(){e&&clearInterval(e)}}}),[]),{speed:l,volume:u,voice:p}}},539:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));n.p,n.p;var c=function(e){new Audio(e).play()},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=new SpeechSynthesisUtterance;window.speechSynthesis.cancel(),r.lang="en",r.text=e,r.volume=c,r.voice=t,r.rate=n,window.speechSynthesis.speak(r)}},544:function(e,t,n){"use strict";var c=n(545),r=n.n(c),a=n(539),i=n(538),o=(n(0),n(2));function s(e){var t=e.className,n=e.type,c=e.text,s=e.audioSrc,l=e.isWrap,d=Object(i.a)(),u=d.voice,p=d.speed,f=d.volume,j=function(){n?Object(a.b)(c,u,p,f):Object(a.a)(s)};return Object(o.jsx)(o.Fragment,{children:l?Object(o.jsx)("div",{onClick:j,children:e.children}):Object(o.jsx)(r.a,{className:"dyno-speaker ".concat(t),onClick:j})})}s.defaultProps={audioSrc:"",className:"",text:"",type:!0,isWrap:!1},t.a=s},545:function(e,t,n){"use strict";var c=n(26),r=n(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=(0,c(n(35)).default)(a.createElement("path",{d:"M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Speaker");t.default=i},548:function(e,t,n){"use strict";var c=n(29),r=n.n(c),a="".concat("http://localhost:5000","/api/ipa"),i={getIPA:function(e){return r.a.get("".concat(a,"/get-ipa-by-id/").concat(e))},getIPARelative:function(e,t){return r.a.get("".concat(a,"/get-ipa-relative"),{params:{type:e,phonetic:t}})},getIPAByType:function(e){return r.a.get("".concat(a,"/get-ipa-by-type/").concat(e))},postIPA:function(e,t){return r.a.post("".concat(a,"/post-ipa"),e,{headers:{Authorization:t}})}};t.a=i},556:function(e,t,n){"use strict";var c=n(477);t.a=Object(c.a)((function(){return{groupCollapse:{boxShadow:"var(--box-shadow-2)",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--border-radius)",border:"none",margin:"2.4rem 0"},arrowIcon:{color:"var(--grey)"},gcTitle:{color:"var(--secondary-color)",fontWeight:500,fontSize:"2rem"},gcDetails:{display:"flex-center"},word:{display:"inline-block",fontSize:"2.4rem",color:"var(--accent-color)",margin:"0.8rem 1rem 0.8rem 0"},relative:{display:"inline-block",fontSize:"2.2rem",fontWeight:500,color:"red",margin:"0.8rem 0rem 0rem 0"},gcDesc:{fontSize:"1.7rem",color:"var(--text-color)",marginLeft:"1.2rem0"},flexboxcontainer:{flexDirection:"row",flexFlow:"auto"},example:{"& b":{fontSize:"1.6rem",textDecoration:"underline"},color:"var(--text-color)",fontSize:"1.6rem"},picture:{width:"50rem",height:"30rem",marginLeft:"15rem"},mouthShapeImg:{width:"12rem",height:"12rem",marginLeft:"1rem"},root:{padding:"1.2rem 0",borderBottom:"solid 1px var(--border-color)",cursor:"pointer",transition:"all 0.35s","&:hover, &:active":{borderBottom:"solid 1px var(--accent-color)"}},mobilelist:{height:"115px"},floatleft:{float:"left",margin:"0 10px 10px 0px",padding:"2px"},title:{display:"inline-block",fontSize:"2.0rem",fontWeight:400,color:"blue",margin:"0.8rem 0rem 0rem 0"},tldetail:{fontSize:"1.5rem",fontWeight:400,color:"black"},textlimit:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"500px"}}}))},723:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(496),a=n(28),i=n(6),o=n(501),s=n(492),l=n(19),d=n(22),u=n(517),p=n(690),f=n(544),j=n(556),h=n(16),b=n.n(h),m=n(27),v=n(79),x=n(548),O=n(667),g=n(668),y=n(512),w=n.n(y),I=n(2);var S=function(e){var t=Object(j.a)(),n=Object(l.c)((function(e){return e.ipaReducer.ipas})),r=e.type,o=e.phonetic,s=Object(l.b)();Object(c.useEffect)((function(){return s(function(e,t){return function(){var n=Object(m.a)(b.a.mark((function n(c){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,x.a.getIPARelative(e,t);case 3:200===(r=n.sent).status?c({type:v.a.GET_IPA_RELATIVE,payload:r.data}):c({type:v.a.SET_IPA_ERROR,payload:r.data.message}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c({type:v.a.SET_IPA_ERROR,payload:n.t0.response.message});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}(r,o))}),[s]);var d=[];if(n)for(var u=0;u<n.length;u++)if(n[u].Image){var f=Object(a.a)(n[u].Image?n[u].Image:i.b.IMAGE_SRC,200,200,!0,!0);d[u]=f}return Object(I.jsxs)(O.a,{children:[Object(I.jsx)(g.a,{expandIcon:Object(I.jsx)(w.a,{className:t.arrowIcon}),children:Object(I.jsx)("b",{className:t.relative,children:"Relative Pronunciation"})}),Object(I.jsx)(p.a,{children:Object(I.jsx)("div",{className:"container",children:n&&n.map((function(e,n){return Object(I.jsx)("div",{className:t.mobilelist,children:Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{className:t.floatleft,children:Object(I.jsx)("a",{children:Object(I.jsx)("img",{height:"80px",width:"80px",src:d[n],onClick:function(){return t=e._id,void(window.location.href="".concat(t));var t}})})}),Object(I.jsx)("a",{className:t.title,href:"/ipa/details/".concat(e._id),children:Object(I.jsxs)("u",{children:[" ",e.Title]})}),Object(I.jsx)("br",{}),Object(I.jsx)("div",{className:t.textlimit,children:Object(I.jsx)("span",{className:t.tldetail})})]})})}))})})]})};function R(){var e=Object(j.a)(),t=Object(d.h)().id,n=Object(l.c)((function(e){return e.ipaReducer.ipa})),h=Object(l.b)();Object(c.useEffect)((function(){return h(function(e){return function(){var t=Object(m.a)(b.a.mark((function t(n){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.getIPA(e);case 3:200===(c=t.sent).status?n({type:v.a.GET_IPA,payload:c.data}):n({type:v.a.SET_IPA_ERROR,payload:c.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:v.a.SET_IPA_ERROR,payload:t.t0.response.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[h]);var O=Object(d.f)();var g=null;return n&&(g=Object(a.a)(n.Image?n.Image:i.b.IMAGE_SRC,200,200,!0,!0)),Object(I.jsx)(o.a,{children:n&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(r.a,{variant:"h6",align:"center",children:"Pronunciation"}),Object(I.jsx)(r.a,{variant:"h6",children:n.Title})]}),n.Video?Object(I.jsx)("p",{align:"center",children:Object(I.jsx)("iframe",{src:n.Video,width:"500",height:"300"})}):Object(I.jsx)("img",{className:e.picture,src:g,alt:"photo",align:"center"}),Object(I.jsx)(p.a,{children:Object(I.jsx)(u.a,{container:!0,spacing:3,children:Object(I.jsx)(u.a,{item:!0,className:"flex-center-between",xs:12,lg:6,children:Object(I.jsxs)("div",{children:[Object(I.jsxs)("div",{className:"flex-center--ver",children:[Object(I.jsxs)("b",{className:e.word,children:[" Phonetic: / ",n.Phonetic," /"]}),n.Audio&&Object(I.jsx)(f.a,{type:!1,audioSrc:n.Audio})]}),Object(I.jsxs)("div",{className:e.example,children:[Object(I.jsx)("b",{children:"Example:"}),n.Examples&&n.Examples.map((function(e,t){return Object(I.jsxs)("div",{className:"flex-center--ver my-4",children:[Object(I.jsxs)("span",{className:"mr-4",children:[e.Word,Object(I.jsx)("span",{className:"phonetic px-3",children:e.Phonetic})]}),Object(I.jsx)(f.a,{type:!0,text:e.Word})]},t)}))]})]})})})}),Object(I.jsx)(S,{type:n.Type,phonetic:n.Phonetic}),Object(I.jsx)(r.a,{}),Object(I.jsx)(s.a,{color:"primary",onClick:function(){O.push("/ipa")},children:" GO BACK"})]})})}R.defaultProps={phoneticList:[],title:"",isNoVoice:!1};t.default=R}}]);
//# sourceMappingURL=19.40a7ce62.chunk.js.map