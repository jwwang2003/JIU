(this.webpackJsonpjiu=this.webpackJsonpjiu||[]).push([[0],{14:function(e,t,a){e.exports={stage:"Cube_stage__2jwq3",spinner:"Cube_spinner__16GeQ",face1:"Cube_face1__C3kLQ",face2:"Cube_face2__3byMc",face3:"Cube_face3__1Agfa",face4:"Cube_face4__4Viv4",face5:"Cube_face5__3OZIy",face6:"Cube_face6__3jTU7",spincube:"Cube_spincube__3qKNk"}},21:function(e,t,a){e.exports={main_container:"Main_main_container__UY3RL",navbar:"Main_navbar__2pc_z",content:"Main_content__2xAGP"}},3:function(e,t,a){e.exports={container:"Navbar_container__1enFG",item:"Navbar_item__3UZIM",indicator:"Navbar_indicator__3kjLs",anime:"Navbar_anime__1dOfQ",primary:"Navbar_primary__2auwe",secondary:"Navbar_secondary__1SGpL",exit:"Navbar_exit__wiWto",pfp:"Navbar_pfp__2oTjQ"}},32:function(e,t,a){e.exports=a.p+"static/media/logo.8b055b73.png"},33:function(e,t,a){e.exports=a.p+"static/media/google.bfd6437f.svg"},34:function(e,t,a){e.exports=a.p+"static/media/facebook.08676566.svg"},35:function(e,t,a){e.exports=a.p+"static/media/weixin.1dfdc05a.png"},38:function(e,t,a){e.exports=a(57)},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(15),r=a.n(i),l=(a(43),a(37)),o=(a(44),a(7)),s=a(1),m=a(8),u=a(9),p=a(11),h=a(10),d=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.component,t=this.props.isAuthenticated;return console.log(t),t?c.a.createElement(e,null):c.a.createElement(s.a,{to:{pathname:"/login"}})}}]),a}(n.Component),v=(a(49),a(32)),E=a.n(v),f=a(33),b=a.n(f),g=a(34),_=a.n(g),N=a(35),w=a.n(N),y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.lastUpdated;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"container-upper"},c.a.createElement("div",{id:"main",className:"main"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{alt:"",src:E.a})),c.a.createElement("div",{className:"buttonContainer"},c.a.createElement("div",{id:"google-btn",className:"button",onClick:function(){return e.props.signInWithGoogle()}},c.a.createElement("img",{alt:"",src:b.a}),"\u8c37\u6b4c\u767b\u5f55"),c.a.createElement("div",{id:"facebook-btn",className:"button",onClick:function(){return e.props.signInWithFacebook()}},c.a.createElement("img",{alt:"",src:_.a}),"\u8138\u4e66\u767b\u5f55"),c.a.createElement("div",{id:"weixin-btn",className:"button"},c.a.createElement("img",{alt:"",src:w.a}),"\u5fae\u4fe1\u767b\u5f55")))),c.a.createElement("div",{className:"container-lower"},c.a.createElement("div",{className:"item"},"Version ",t),c.a.createElement("div",{className:"item"},"Brought to you by Brian & Jimmy")))}}]),a}(n.Component),O=a(21),C=a.n(O),z=a(14),j=a.n(z),x=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:j.a.stage},c.a.createElement("div",{className:j.a.spinner},c.a.createElement("div",{className:j.a.face1},c.a.createElement("img",{src:this.props.photo1,alt:""})),c.a.createElement("div",{className:j.a.face2},c.a.createElement("img",{src:this.props.photo2,alt:""})),c.a.createElement("div",{className:j.a.face3},c.a.createElement("img",{src:this.props.photo3,alt:""})),c.a.createElement("div",{className:j.a.face4},c.a.createElement("img",{src:this.props.photo4,alt:""})),c.a.createElement("div",{className:j.a.face5},c.a.createElement("img",{src:this.props.photo5,alt:""})),c.a.createElement("div",{className:j.a.face6},c.a.createElement("img",{src:this.props.photo6,alt:""}))))}}]),a}(n.Component),H=a(3),I=a.n(H);function k(e){console.log(e);for(var t=0;t<5;++t)document.getElementById("indi-".concat(t)).className=t!==e?"":"".concat(I.a.indicator)}function M(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"48px",height:"48px"},c.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),c.a.createElement("path",{d:"M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z",opacity:".3",fill:"currentColor",className:I.a.secondary}),c.a.createElement("path",{d:"M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z",fill:"currentColor",className:I.a.primary}))}function V(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"48px",height:"48px"},c.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),c.a.createElement("path",{d:"M20 6H4v12h16V6zm-8 1c1.38 0 2.5 1.12 2.5 2.5S13.38 12 12 12s-2.5-1.12-2.5-2.5S10.62 7 12 7zm5 10H7v-1.01C7 13.9 10.31 13 12 13s5 .9 5 2.99V17z",opacity:".3",fill:"currentColor",className:I.a.secondary}),c.a.createElement("path",{d:"M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 6h16v12H4V6zm0-6h16v2H4zm0 22h16v2H4zm8-10c1.38 0 2.5-1.12 2.5-2.5S13.38 7 12 7 9.5 8.12 9.5 9.5 10.62 12 12 12zm0-3.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4.5c-1.69 0-5 .9-5 2.99V17h10v-1.01C17 13.9 13.69 13 12 13zm-3.19 2.5c.61-.52 2.03-1 3.19-1 1.17 0 2.59.48 3.2 1H8.81z",fill:"currentColor",className:I.a.primary}))}function T(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"48px",height:"48px"},c.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),c.a.createElement("path",{d:"M5 19h14V5H5v14zm2.5-7c0-.2.02-.39.04-.58l-1.27-.99c-.11-.09-.15-.26-.07-.39l1.2-2.07c.08-.13.23-.18.37-.13l1.49.6c.31-.25.66-.44 1.02-.6l.22-1.59c.03-.14.15-.25.3-.25h2.4c.15 0 .27.11.3.25l.22 1.59c.37.15.7.35 1.01.59l1.49-.6c.14-.05.29 0 .37.13l1.2 2.07c.08.13.04.29-.07.39l-1.27.99c.03.2.04.39.04.59 0 .2-.02.39-.04.58l1.27.99c.11.09.15.26.07.39l-1.2 2.07c-.08.13-.23.18-.37.13l-1.49-.6c-.31.24-.65.44-1.01.59l-.22 1.59c-.03.15-.15.26-.3.26h-2.4c-.15 0-.27-.11-.3-.25l-.22-1.59c-.37-.15-.7-.35-1.01-.59l-1.49.6c-.14.05-.29 0-.37-.13l-1.2-2.07c-.08-.13-.04-.29.07-.39l1.27-.99c-.03-.2-.05-.39-.05-.59z",opacity:".3",fill:"currentColor",className:I.a.secondary}),c.a.createElement("path",{d:"M6.21 13.97l1.2 2.07c.08.13.23.18.37.13l1.49-.6c.31.24.64.44 1.01.59l.22 1.59c.03.14.15.25.3.25h2.4c.15 0 .27-.11.3-.26l.22-1.59c.36-.15.7-.35 1.01-.59l1.49.6c.14.05.29 0 .37-.13l1.2-2.07c.08-.13.04-.29-.07-.39l-1.27-.99c.03-.19.04-.39.04-.58 0-.2-.02-.39-.04-.59l1.27-.99c.11-.09.15-.26.07-.39l-1.2-2.07c-.08-.13-.23-.18-.37-.13l-1.49.6c-.31-.24-.64-.44-1.01-.59l-.22-1.59c-.03-.14-.15-.25-.3-.25h-2.4c-.15 0-.27.11-.3.26l-.22 1.59c-.36.15-.71.34-1.01.58l-1.49-.6c-.14-.05-.29 0-.37.13l-1.2 2.07c-.08.13-.04.29.07.39l1.27.99c-.03.2-.05.39-.05.59 0 .2.02.39.04.59l-1.27.99c-.11.1-.14.26-.06.39zM12 10.29c.94 0 1.71.77 1.71 1.71s-.77 1.71-1.71 1.71-1.71-.77-1.71-1.71.77-1.71 1.71-1.71zM19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm0 16H5V5h14v14z",fill:"currentColor",className:I.a.primary}))}function B(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"48px",height:"48px"},c.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),c.a.createElement("path",{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}))}var P=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:I.a.container},c.a.createElement(o.b,{to:"/recents",className:I.a.item,onClick:function(){return k(0)}},c.a.createElement("div",{id:"indi-0",className:"".concat(I.a.indicator)}),c.a.createElement(x,null)),c.a.createElement(o.b,{to:"/chat",className:I.a.item,onClick:function(){return k(1)}},c.a.createElement("div",{id:"indi-1"}),c.a.createElement(M,null),c.a.createElement("div",null,"\u804a\u5929")),c.a.createElement(o.b,{to:"/friends",className:I.a.item,onClick:function(){return k(2)}},c.a.createElement("div",{id:"indi-2"}),c.a.createElement(V,null),c.a.createElement("div",null,"\u670b\u53cb")),c.a.createElement(o.b,{to:"/myself",className:"".concat(I.a.item," ").concat(I.a.pfp," "),onClick:function(){return k(3)}},c.a.createElement("div",{id:"indi-3"}),c.a.createElement("img",{src:this.props.photoURL,alt:""})),c.a.createElement(o.b,{to:"/settings",className:I.a.item,onClick:function(){return k(4)}},c.a.createElement("div",{id:"indi-4"}),c.a.createElement(T,null),c.a.createElement("div",null,"\u8bbe\u7f6e")),c.a.createElement("div",{className:"".concat(I.a.item," ").concat(I.a.exit),onClick:function(){return e.props.handleSignOut()}},c.a.createElement(B,null),c.a.createElement("div",null,"\u767b\u51fa")))}}]),a}(n.Component);function L(){return c.a.createElement("div",null,"This is recents")}function S(){return c.a.createElement("div",null,"This is chat")}function A(){return c.a.createElement("div",null,"This is friends")}function U(){return c.a.createElement("div",null,"This is myself")}function R(){return c.a.createElement("div",null,"This is settings")}var W=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.auth,t=e.currentUser.photoURL;return c.a.createElement("div",{className:C.a.main_container},c.a.createElement(o.a,null,c.a.createElement("div",{className:C.a.navbar},c.a.createElement(P,{photoURL:t,handleSignOut:function(){return e.signOut()}})),c.a.createElement(s.a,{to:{pathname:"/recents"}}),c.a.createElement("div",{className:C.a.content},c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/recents"},c.a.createElement(L,null)),c.a.createElement(s.b,{path:"/chat"},c.a.createElement(S,null)),c.a.createElement(s.b,{path:"/friends"},c.a.createElement(A,null)),c.a.createElement(s.b,{path:"/myself"},c.a.createElement(U,null)),c.a.createElement(s.b,{path:"/settings"},c.a.createElement(R,null))))))}}]),a}(n.Component),G=a(17),J=a.n(G),D=(a(50),a(54),a(36)),F=a(12);a(56);J.a.initializeApp({apiKey:"AIzaSyDdsJkMYTP3zzBeFqbHYJ5Mv3ueKVftUy4",authDomain:"jiu-26817.firebaseapp.com",databaseURL:"https://jiu-26817.firebaseio.com",projectId:"jiu-26817",storageBucket:"jiu-26817.appspot.com",messagingSenderId:"664761226470",appId:"1:664761226470:web:4fdf9480abf6dacd4f5727",measurementId:"G-98J5Z7JTS1"});var Q=J.a.auth();window.loadPromise=new Promise((function(e){window.addEventListener("DOMContentLoaded",e)})),window.loadPromise.then((function(){return console.log("DONE Loading DOM~")}));var q=function(){var e=Object(D.a)(Q),t=Object(l.a)(e,1)[0];return c.a.createElement("div",{className:"App"},c.a.createElement(o.a,null,t?c.a.createElement(s.a,{to:{pathname:"/"}}):c.a.createElement(s.a,{to:{pathname:"/login"}}),c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/login"},c.a.createElement(y,{lastUpdated:"DEV",signInWithGoogle:function(){return function(){document.getElementById("main").className="main main-busy";var e=new J.a.auth.GoogleAuthProvider;Q.signInWithPopup(e).then((function(){F.b.success("Authentication Success!",{position:F.b.POSITION.TOP_CENTER}),document.getElementById("main").className="main"})).catch((function(e){F.b.warn("Authentication Error! ".concat(e),{position:F.b.POSITION.TOP_CENTER}),document.getElementById("main").className="main"}))}()},signInWithFacebook:function(){return function(){document.getElementById("main").className="main main-busy";var e=new J.a.auth.FacebookAuthProvider;Q.signInWithPopup(e).then((function(){F.b.success("Authentication Success!",{position:F.b.POSITION.TOP_CENTER}),document.getElementById("main").className="main"})).catch((function(e){F.b.warn("Authentication Error! ".concat(e),{position:F.b.POSITION.TOP_CENTER}),document.getElementById("main").className="main"}))}()}})),c.a.createElement(d,{exact:!0,path:"/",isAuthenticated:t,component:function(){return c.a.createElement(W,{auth:Q})}}))),c.a.createElement(F.a,{hideProgressBar:!0,closeOnClick:!1}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.05c17ed0.chunk.js.map