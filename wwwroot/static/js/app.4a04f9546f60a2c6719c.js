webpackJsonp([1],{NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),n={name:"app",data:function(){return{login:{email:"",password:""},signUp:{userName:"",email:"",password:"",rPassword:""},error:!1}},components:{},mounted:function(){this.$store.dispatch("authenticate")},computed:{activeUser:function(){return this.$store.state.activeUser}},methods:{submitLogin:function(){this.$store.dispatch("login",this.login),this.login={email:"",password:""}},submitRegister:function(){this.signUp.password==this.signUp.rPassword?this.$store.dispatch("register",{username:this.signUp.userName,email:this.signUp.email,password:this.signUp.password}):(this.error=!0,console.error({error:"Passwords Do Not Match"}))},logout:function(){this.$store.dispatch("logout")}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid",attrs:{id:"app"}},[e("nav",{staticClass:"navbar navbar-inverse"},[e("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),e("a",{staticClass:"navbar-brand",staticStyle:{"font-family":"'Abril Fatface', cursive"}},[t._v("Keepr")]),t._v(" "),t.activeUser.hasOwnProperty("username")?e("div",{staticClass:"text-right"},[e("p",{staticClass:"navbar-text"},[t._v("Welcome, "+t._s(t.activeUser.username))]),t._v(" "),e("router-link",{attrs:{to:{name:"Dashboard"}}},[e("button",{staticClass:"btn btn-primary navbar-btn dashboard-btn",attrs:{type:"button"}},[t._v("Dashboard")])]),t._v(" "),e("button",{staticClass:"btn btn-danger navbar-btn logout-btn",attrs:{type:"button"},on:{click:t.logout}},[t._v("Logout")])],1):e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-primary navbar-btn ",attrs:{type:"button","data-toggle":"modal","data-target":"#login"}},[t._v("Login")]),t._v(" "),e("button",{staticClass:"btn btn-success navbar-btn",attrs:{type:"button","data-toggle":"modal","data-target":"#signUp"}},[t._v("Signup")])])]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse text-center",attrs:{id:"bs-example-navbar-collapse-1"}},[e("ul",[e("li",[e("router-link",{attrs:{to:{name:"Home"}}},[e("button",{staticClass:"btn btn-default nav-drop-btn",attrs:{type:"button","data-toggle":"collapse","data-target":".navbar-collapse.in"}},[t._v("Home")])])],1)]),t._v(" "),e("ul",{staticClass:"nav navbar-nav navbar-right"})])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"login",role:"dialog"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),e("div",{staticClass:"modal-body"},[e("form",{staticClass:"form",attrs:{id:"login"}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Email:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],staticClass:"form-control",attrs:{type:"email",maxlength:"57",name:"email",placeholder:"Email",required:""},domProps:{value:t.login.email},on:{input:function(a){a.target.composing||t.$set(t.login,"email",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[t._v("Password:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",maxlength:"20",placeholder:"password",required:""},domProps:{value:t.login.password},on:{input:function(a){a.target.composing||t.$set(t.login,"password",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-submit btn-success",attrs:{"data-dismiss":"modal",type:"submit"},on:{click:t.submitLogin}},[t._v("Submit")])])])]),t._v(" "),t._m(2)])])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"signUp",role:"dialog"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[t._v("×")]),t._v(" "),e("h4",{staticClass:"modal-title"},[t._v("Create an Account")]),t._v(" "),t.error?e("p",[e("b",[t._v("Your Passwords Do Not Match")])]):t._e()]),t._v(" "),e("div",{staticClass:"modal-body"},[e("form",{staticClass:"form",attrs:{id:"register"}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"userName"}},[t._v("Username:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.userName,expression:"signUp.userName"}],staticClass:"form-control",attrs:{type:"userName",name:"userName",maxlength:"20",placeholder:"user name",required:""},domProps:{value:t.signUp.userName},on:{input:function(a){a.target.composing||t.$set(t.signUp,"userName",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Email:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.email,expression:"signUp.email"}],staticClass:"form-control",attrs:{type:"email",maxlength:"57",name:"email",placeholder:"Email",required:""},domProps:{value:t.signUp.email},on:{input:function(a){a.target.composing||t.$set(t.signUp,"email",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[t._v("Password:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.password,expression:"signUp.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",maxlength:"20",placeholder:"password",required:""},domProps:{value:t.signUp.password},on:{input:function(a){a.target.composing||t.$set(t.signUp,"password",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"reEnterPassword"}},[t._v("Confirm Password:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.rPassword,expression:"signUp.rPassword"}],staticClass:"form-control",attrs:{type:"password",name:"reEnterPassword",maxlength:"20",placeholder:"Password"},domProps:{value:t.signUp.rPassword},on:{input:function(a){a.target.composing||t.$set(t.signUp,"rPassword",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-submit btn-success",attrs:{"data-dismiss":"modal",type:"submit"},on:{click:t.submitRegister}},[t._v("Submit")])])])]),t._v(" "),t._m(3)])])]),t._v(" "),e("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[a("span",{staticClass:"sr-only"},[this._v("Toggle Navigation")]),this._v(" "),a("span",{staticClass:"icon-bar"}),this._v(" "),a("span",{staticClass:"icon-bar"}),this._v(" "),a("span",{staticClass:"icon-bar"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")]),this._v(" "),a("h4",{staticClass:"modal-title"},[this._v("Sign in to your account")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}]};var i=e("VU/8")(n,o,!1,function(t){e("rrmp")},null,null).exports,r=e("/ocq"),l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home container-fluid text-center"},[e("h1",[t._v("Keepr")]),t._v(" "),t._l(t.keeps,function(a){return e("div",{staticClass:"keep col-sm-3"},[e("h2",[t._v(t._s(a.name))]),t._v(" "),e("h4",[t._v(t._s(a.imageUrl))])])})],2)},staticRenderFns:[]};var c=e("VU/8")({name:"Home",data:function(){return{}},components:{},mounted:function(){this.$store.dispatch("authenticate"),this.$store.dispatch("getAllKeeps")},computed:{activeUser:function(){return this.$store.state.activeUser},keeps:function(){return this.$store.state.keeps}},methods:{}},l,!1,function(t){e("rEov")},null,null).exports,d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home container-fluid text-center"},[e("h1",[t._v("My Keeps")]),t._v(" "),t._l(t.keeps,function(a){return e("div",{staticClass:"keep col-sm-3"},[e("h2",[t._v(t._s(a.name))]),t._v(" "),e("h4",[t._v(t._s(a.imageUrl))])])}),t._v(" "),e("h1",[t._v("My Vaults")]),t._v(" "),t._l(t.vaults,function(a){return e("div",{staticClass:"vault col-sm-3"},[e("h2",[t._v(t._s(a.name))]),t._v(" "),e("h4",[t._v(t._s(a.imageUrl))])])})],2)},staticRenderFns:[]};var u=e("VU/8")({name:"Dashboard",data:function(){return{}},components:{},mounted:function(){this.$store.dispatch("authenticate"),this.$store.dispatch("getUserKeeps",{endpoint:this.activeUser.id}),this.$store.dispatch("getUserVaults",{endpoint:this.activeUser.id})},computed:{activeUser:function(){return this.$store.state.activeUser},keeps:function(){return this.$store.state.keeps},vaults:function(){return this.$store.state.vaults}},methods:{}},d,!1,function(t){e("NUM9")},null,null).exports;s.a.use(r.a);var p=new r.a({routes:[{path:"/",name:"Home",component:c},{path:"/dashboard",name:"Dashboard",component:u}]}),m=e("mtWM"),v=e.n(m),h=e("NYxO"),g=window.location.host.indexOf("localhost")>-1?"//localhost:5000/":"/",f=v.a.create({baseURL:g+"api/",timeout:2e3,withCredentials:!0}),b=v.a.create({baseURL:g,timeout:2e3,withCredentials:!0});s.a.use(h.a);var _=new h.a.Store({state:{error:{},activeUser:{},activeVault:{},vaults:[],keeps:[]},mutations:{handleError:function(t,a){t.error=a},setActiveUser:function(t,a){t.activeUser=a},setKeeps:function(t,a){t.keeps=a.data},setVaults:function(t,a){t.vaults=a.data}},actions:{login:function(t,a){var e=t.commit;t.dispatch;b.post("account/login",a).then(function(t){console.log("Successful login."),e("setActiveUser",t.data)}).catch(function(t){e("handleError",t)})},register:function(t,a){var e=t.commit;t.dispatch;b.post("account/register",a).then(function(t){console.log(t),e("setActiveUser",t.data)}).catch(function(t){e("handleError",t)})},authenticate:function(t){var a=t.commit;t.dispatch;b("account/authenticate").then(function(t){a("setActiveUser",t.data)}).catch(function(t){a("handleError",t)})},logout:function(t){var a=t.commit;t.dispatch;b.delete("account/logout").then(function(){a("setActiveUser",{}),p.push({name:"Home"})})},getAllKeeps:function(t,a){var e=t.commit;t.dispatch;f("keeps").then(function(t){e("setKeeps",{data:t.data})}).catch(function(t){e("handleError",t)})},getKeepsInVault:function(t,a){var e=t.commit;t.dispatch;f("keeps/vaults/"+a.endpoint).then(function(t){console.log("endpoint: ",a.endpoint),e("setKeeps",{data:t.data})}).catch(function(t){e("handleError",t)})},getUserKeeps:function(t,a){var e=t.commit,s=t.dispatch;f("keeps/users/"+a.endpoint).then(function(t){console.log("endpoint: ",a.endpoint),e("setKeeps",{data:t.data}),s("authenticate")}).catch(function(t){e("handleError",t)})},getUserVaults:function(t,a){var e=t.commit,s=t.dispatch;f("vaults/users/"+a.endpoint).then(function(t){e("setVaults",{data:t.data}),s("authenticate")}).catch(function(t){e("handleError",t)})},createKeep:function(t,a){var e=t.commit,s=t.dispatch;f.post("keeps",a.data).then(function(t){s("getKeeps")}).catch(function(t){e("handleError",t)})},createVault:function(t,a){var e=t.commit,s=t.dispatch;f.post("vaults",a.data).then(function(t){s("getUserVaults",{endpoint:a.endpoint})}).catch(function(t){e("handleError",t)})},editVault:function(t,a){var e=t.commit,s=t.dispatch;f.put("vaults/"+a.endpoint,a.data).then(function(t){s("getUserVaults",{endpoint:a.endpoint})}).catch(function(t){e("handleError",t)})},deleteUserVault:function(t,a){var e=t.commit,s=t.dispatch;f.delete("vaults/"+a.endpoint).then(function(t){s("getUserVaults",{endpoint:a.endpoint})}).catch(function(t){e("handleError",t)})},deleteUserKeep:function(t,a){var e=t.commit,s=t.dispatch;f.delete("keeps/"+a.endpoint).then(function(t){s("getUserKeeps",{endpoint:a.endpoint})}).catch(function(t){e("handleError",t)})}}});v.a.create({baseURL:window.location.host.includes("localhost")?"//localhost:5000/":"/",timeout:2e3,withCredentials:!0});s.a.config.productionTip=!1,new s.a({el:"#app",router:p,store:_,template:"<App/>",components:{App:i}})},NUM9:function(t,a){},rEov:function(t,a){},rrmp:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.4a04f9546f60a2c6719c.js.map