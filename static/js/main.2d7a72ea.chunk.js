(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{76:function(e,n,c){},80:function(e,n,c){},81:function(e,n,c){},82:function(e,n,c){},86:function(e,n,c){},87:function(e,n,c){},88:function(e,n,c){},89:function(e,n,c){},90:function(e,n,c){"use strict";c.r(n);var a=c(3),s=c(2),t=c.n(s),i=c(24),r=c.n(i),l=(c(76),c(16)),o=(c(80),c(36)),j=(c(81),c(44)),d=c.n(j),b=c(52),h=c.n(b),u=c(53),m=c.n(u),O=c(54),p=c.n(O),x=c(55),f=c.n(x),v=c(106),g=c(56),N=c.n(g),_=c(57),S=c.n(_),I=c(58),C=c.n(I),y=c(27),w=Object(y.b)({name:"app",initialState:{channelId:null,channelName:null},reducers:{setChannelInfo:function(e,n){e.channelId=n.payload.channelId,e.channelName=n.payload.channelName}}}),k=w.actions.setChannelInfo,H=function(e){return e.app.channelId},z=function(e){return e.app.channelName},D=w.reducer;c(82);var E=function(e){var n=e.id,c=e.channelName,s=Object(l.b)();return Object(a.jsx)("div",{className:"sideChannel",onClick:function(){return s(k({channelId:n,channelName:c}))},children:Object(a.jsxs)("h4",{children:[Object(a.jsx)("span",{className:"sidebarChannel_Hash",children:"#"}),c]})})},R=Object(y.b)({name:"user",initialState:{user:null},reducers:{login:function(e,n){e.user=n.payload},logout:function(e){e.user=null}}}),A=R.actions,B=A.login,L=A.logout,M=function(e){return e.user.user},T=R.reducer,G=c(29),J=G.a.initializeApp({apiKey:"AIzaSyCybeLP4XguhQ7y_86Y9gViMiibv6Z5nnU",authDomain:"cordless-8ee2b.firebaseapp.com",projectId:"cordless-8ee2b",storageBucket:"cordless-8ee2b.appspot.com",messagingSenderId:"668181147466",appId:"1:668181147466:web:ef9597286433c8257a9bb3",measurementId:"G-7R8JKR04RK"}).firestore(),K=G.a.auth(),P=new G.a.auth.GoogleAuthProvider,U=J;var V=function(){var e=Object(l.c)(M),n=Object(s.useState)([]),c=Object(o.a)(n,2),t=c[0],i=c[1];return Object(s.useEffect)((function(){U.collection("channels").onSnapshot((function(e){return i(e.docs.map((function(e){return{id:e.id,channel:e.data()}})))}))}),[]),Object(a.jsxs)("div",{className:"sidebar",children:[Object(a.jsxs)("div",{className:"sidebar-Top",children:[Object(a.jsx)("h1",{children:"CORDLESS"}),Object(a.jsx)(d.a,{})]}),Object(a.jsxs)("div",{className:"sidebar-Channel",children:[Object(a.jsxs)("div",{className:"sidebar_ChannelHeader",children:[Object(a.jsxs)("div",{className:"sidebar_Header",children:[Object(a.jsx)(d.a,{}),Object(a.jsx)("h1",{children:"Text Channels"})]}),Object(a.jsx)(h.a,{onClick:function(){var e=prompt("Enter New Channel Name");e&&U.collection("channels").add({channelName:e})},className:"sidebar_addchannel"})]}),Object(a.jsx)("div",{className:"sidebar_channelList",children:t.map((function(e){var n=e.id,c=e.channel;return Object(a.jsx)(E,{id:n,channelName:c.channelName},n)}))})]}),Object(a.jsxs)("div",{className:"sidebar_voice",children:[Object(a.jsx)(m.a,{className:"sidebar_voiceIcon",fontSize:"large"}),Object(a.jsxs)("div",{className:"sidebar_voiceInfro",children:[Object(a.jsx)("h3",{children:"Voice Connected"}),Object(a.jsx)("p",{children:"Stream"})]}),Object(a.jsxs)("div",{className:"sidebar_voiceIcon",children:[Object(a.jsx)(p.a,{}),Object(a.jsx)(f.a,{})]})]}),Object(a.jsxs)("div",{className:"sidebar_profile",children:[Object(a.jsx)(v.a,{onClick:function(){return K.signOut()},src:e.photo}),Object(a.jsxs)("div",{className:"sidebar_profileInfo",children:[Object(a.jsx)("h3",{children:e.displayName}),Object(a.jsxs)("p",{children:["#",e.uid.substring(0,5)]})]}),Object(a.jsxs)("div",{className:"sidebar_profileIcon",children:[Object(a.jsx)(N.a,{}),Object(a.jsx)(S.a,{}),Object(a.jsx)(C.a,{})]})]})]})},W=(c(86),c(87),c(59)),F=c.n(W),Q=c(60),X=c.n(Q),Y=c(61),Z=c.n(Y),$=c(62),q=c.n($),ee=c(63),ne=c.n(ee),ce=c(64),ae=c.n(ce);var se=function(e){var n=e.channelName;return Object(a.jsxs)("div",{className:"chatHeader",children:[Object(a.jsx)("div",{className:"chatHeader_left",children:Object(a.jsxs)("h3",{children:[Object(a.jsx)("span",{className:"chatHeader_hash",children:"#"}),n]})}),Object(a.jsxs)("div",{className:"chatHeader_right",children:[Object(a.jsx)(F.a,{}),Object(a.jsx)(X.a,{}),Object(a.jsx)(Z.a,{}),Object(a.jsxs)("div",{className:"chatHeader_search",children:[Object(a.jsx)("input",{placeholder:"Search"}),Object(a.jsx)(q.a,{})]}),Object(a.jsx)(ne.a,{}),Object(a.jsx)(ae.a,{})]})]})},te=c(65),ie=c.n(te),re=c(66),le=c.n(re),oe=c(67),je=c.n(oe),de=c(68),be=c.n(de);c(88);var he=function(e){var n=e.timestamp,c=e.message,s=e.user;return Object(a.jsxs)("div",{className:"message",children:[Object(a.jsx)(v.a,{src:s.photo}),Object(a.jsxs)("div",{className:"message_info",children:[Object(a.jsxs)("h4",{children:[s.displayName,Object(a.jsx)("span",{className:"message_timestamp",children:new Date(null===n||void 0===n?void 0:n.toDate()).toUTCString()})]}),Object(a.jsx)("p",{children:c})]})]})};var ue=function(){var e=Object(l.c)(M),n=Object(l.c)(H),c=Object(l.c)(z),t=Object(s.useState)(" "),i=Object(o.a)(t,2),r=i[0],j=i[1],d=Object(s.useState)([]),b=Object(o.a)(d,2),h=b[0],u=b[1];return Object(s.useEffect)((function(){n&&U.collection("channels").doc(n).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return u(e.docs.map((function(e){return e.data()})))}))}),[n]),Object(a.jsxs)("div",{className:"chat",children:[Object(a.jsx)(se,{channelName:c}),Object(a.jsx)("div",{className:"chat_messages",children:h.map((function(e){return Object(a.jsx)(he,{timestamp:e.timestamp,message:e.message,user:e.user})}))}),Object(a.jsxs)("div",{className:"chat_input",children:[Object(a.jsx)(ie.a,{fontSize:"large"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{value:r,disabled:!n,onChange:function(e){return j(e.target.value)},placeholder:"Messages"}),Object(a.jsx)("button",{disabled:!n,type:"submit",className:"chat_button",onClick:function(c){c.preventDefault(),U.collection("channels").doc(n).collection("messages").add({timestamp:G.a.firestore.FieldValue.serverTimestamp(),message:r,user:e}),j(" ")},children:"SEND"})]}),Object(a.jsxs)("div",{className:"chat_inputIcon",children:[Object(a.jsx)(le.a,{fontSize:"large"}),Object(a.jsx)(je.a,{fontSize:"large"}),Object(a.jsx)(be.a,{fontSize:"large"})]})]})]})},me=c(105);c(89);var Oe=function(){return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)("div",{className:"login_logo",children:Object(a.jsx)("img",{src:"https://www.freepnglogos.com/uploads/discord-logo-png/discord-branding-2.png",alt:"DiscordIMG"})}),Object(a.jsx)(me.a,{onClick:function(){K.signInWithPopup(P).catch((function(e){return alert(e.message)}))},children:"Sign In"})]})};var pe=function(){var e=Object(l.b)(),n=Object(l.c)(M);return Object(s.useEffect)((function(){K.onAuthStateChanged((function(n){e(n?B({uid:n.uid,photo:n.photoURL,email:n.email,displayName:n.displayName}):L())}))}),[]),Object(a.jsx)("div",{className:"app",children:n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(V,{}),Object(a.jsx)(ue,{})]}):Object(a.jsx)(Oe,{})})},xe=Object(y.a)({reducer:{user:T,app:D}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(a.jsx)(t.a.StrictMode,{children:Object(a.jsx)(l.a,{store:xe,children:Object(a.jsx)(pe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[90,1,2]]]);
//# sourceMappingURL=main.2d7a72ea.chunk.js.map