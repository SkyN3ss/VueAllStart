webpackJsonp([1],{"67t3":function(t,e){},"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.759157b.png"},EWny:function(t,e){t.exports={"/":{title:"Tecnibilds - Web Development",description:"Empresa de desarrollo web",keywords:"Web, diseño, seo, development, design"},"/about":{title:"Tecnibilds - About us",description:"Empresa de desarrollo web",keywords:"Web, diseño, seo, development, design"}}},L9TK:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a=n("EWny"),i={mixins:[{watch:{$route:function(){this.setMeta()}},created:function(){},mounted:function(){this.setMeta()},methods:{setMeta:function(){if("undefined"!=typeof document){var t=a[this.$route.path]||{};document.title=t.title,document.querySelector('meta[name="description"]').setAttribute("content",t.description),document.querySelector('meta[name="keywords"]').setAttribute("content",t.keywords)}}}}],data:function(){return{appName:this.$configs.appName,appCompany:this.$configs.appCompany,appLogo:this.$configs.appLogo,drawer:null,items:[{icon:"apps",title:"Welcome",to:"/"},{icon:"bubble_chart",title:"About",to:"/about"}]}},props:{source:String}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire",dark:""}},[n("v-navigation-drawer",{attrs:{clipped:"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},t._l(t.items,function(e,o){return n("v-list-tile",{key:o,attrs:{router:"",to:e.to,exact:""}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),t._v(" "),n("v-toolbar",{attrs:{app:"",fixed:"","clipped-left":""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.appName))])],1),t._v(" "),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)],1),t._v(" "),n("v-footer",{attrs:{app:"",fixed:""}},[n("span",[t._v(t._s(t.appCompany)+" © 2017")])])],1)},staticRenderFns:[]},s=n("VU/8")(i,r,!1,function(t){n("qOEz")},null,null).exports,u=n("/ocq"),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",[e("v-flex",{attrs:{"text-xs-center":""}},[e("img",{staticClass:"mb-5",attrs:{src:n("7Otq"),alt:"Vuetify.js",height:"200"}}),this._v(" "),e("blockquote",{staticClass:"blockquote"},[this._v("\n            “First, solve the problem. Then, write the code.”\n            "),e("footer",[e("small",[e("em",[this._v("—John Johnson")])])])])])],1)},staticRenderFns:[]},l=n("VU/8")({},c,!1,function(t){n("ztvf")},null,null).exports,p={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[o("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[o("div",{staticClass:"text-xs-center"},[o("img",{staticClass:"mb-5",attrs:{src:n("7Otq"),alt:"Vuetify.js",height:"200"}})]),t._v(" "),o("v-card",[o("v-card-text",[o("p",[t._v("Welcome to the Webpack SSR template.")]),t._v(" "),o("p",[t._v("Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications. For more information on Vuetify, check out the "),o("a",{attrs:{href:"https://vuetifyjs.com",target:"_blank"}},[t._v("documentation")]),t._v(". If you have questions, please join the official "),o("a",{attrs:{href:"https://gitter.im/vuetifyjs/Lobby",target:"_blank",title:"chat"}},[t._v("gitter")]),t._v(". Find a bug? Report it on the github "),o("a",{attrs:{href:"https://github.com/vuetifyjs/vuetify/issues",target:"_blank",title:"contribute"}},[t._v("issue board")]),t._v(".")]),t._v(" "),o("p",[t._v("Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.")]),t._v(" "),o("div",{staticClass:"text-xs-right"},[o("em",[o("small",[t._v("— John Leider")])])])]),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{color:"primary",flat:"",router:"",to:"/"}},[t._v("Continue")])],1)],1)],1)],1)},staticRenderFns:[]},d=n("VU/8")({},p,!1,function(t){n("L9TK")},null,null).exports,f=n("EWny");o.a.use(u.a);var m=new u.a({routes:[{path:"/",name:"Index",component:l,meta:f["/"]},{path:"/about",name:"About",component:d,meta:f["/about"]},{path:"*",redirect:"/"}]}),v=(n("j1ja"),n("67t3"),n("3EgV")),h=n.n(v),_=n("mtWM"),g=n.n(_),b=n("Rf8U"),k=n.n(b),y=n("NYxO"),w=n("424j"),x=n("//Fk"),E=n.n(x),T="http://192.168.1.100:8000",U="post",S="/oauth/token",A="get",O="/api/user",j="post",N="/api/register",q={state:{tokens:{access_token:null,expires_in:null,refresh_token:null,token_type:null},authenticatedUser:{id:null,name:null,email:null,picture:null,created_at:null,updated_at:null}},mutations:{UPDATE_TOKENS:function(t,e){t.tokens=e},DESTROY_TOKENS:function(t){t.tokens.access_token=null,t.tokens.expires_in=null,t.tokens.refresh_token=null,t.tokens.token_type=null,t.authenticatedUser.id=null,t.authenticatedUser.name=null,t.authenticatedUser.email=null,t.authenticatedUser.picture=null,t.authenticatedUser.created_at=null,t.authenticatedUser.updated_at=null},SET_AUTH_USER:function(t,e){t.authenticatedUser=e}},actions:{login:function(t,e){return new E.a(function(n,o){var a={grant_type:"password",client_id:2,client_secret:"BaPLoB7xK3iyMeaErx9jSQo9mx6uSnbKnh5wGGlH",username:e.email,password:e.password,remember:e.remember,scope:""};g.a[U](T+S,a).then(function(e){var o=e.data,a=Date.now();o.expires_in=o.expires_in+a,t.commit("UPDATE_TOKENS",o),n(e)}).catch(function(t){o(t)})})},setAuthenticatedUser:function(t){var e=t.commit,n=t.getters;return new E.a(function(t,o){g.a[A](T+O,{headers:n.getHeader}).then(function(n){var o=n.data;e("SET_AUTH_USER",o),t(n)}).catch(function(t){o(t)})})},logout:function(t){t.commit("DESTROY_TOKENS"),m.push("/")},register:function(t,e){return new E.a(function(t,n){g.a[j](T+N,e).then(function(e){t(e)}).catch(function(t){n(t)})})}},getters:{getToken:function(t){var e=t.tokens.access_token,n=t.tokens.expires_in;return e&&n?Date.now()>parseInt(n)?(t.commit("DESTROY_TOKENS"),null):e:null},isAuthenticated:function(t,e){return!!e.getToken},getHeader:function(t,e){return{Aceept:"application/json",Authorization:"Bearer "+e.getToken}},getAuthenticatedUser:function(t){return t.authenticatedUser}}};o.a.use(y.a);var C=q,R=new y.a.Store({modules:{users:C},plugins:[Object(w.a)({key:"AppName",paths:["users.tokens","users.theme"]})],strict:!1}),W=n("HSQo"),V=n.n(W);o.a.config.productionTip=!1,o.a.use(h.a),o.a.use(k.a,g.a),o.a.use(function(t){t.configs={appName:"My App",appCompany:"Tecnibilds",appLogo:"",ApiUrl:"http://192.168.1.100:8000"},V()(t.prototype,{$configs:{get:function(){return t.configs}}})}),new o.a({el:"#app",router:m,store:R,template:"<App/>",components:{App:s}})},qOEz:function(t,e){},ztvf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.734e2688b0fcfc41abad.js.map