webpackJsonp([1],{GRZg:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-inverse"},[a("div",{staticClass:"navbar-header"},[a("router-link",{attrs:{to:{name:"Home"}}},[a("a",{staticClass:"navbar-brand main-font"},[t._v("Keepr")])]),t._v(" "),t.activeUser.hasOwnProperty("username")?a("div",{staticClass:"text-right"},[a("p",{staticClass:"navbar-text"},[t._v(t._s(t.activeUser.username))]),t._v(" "),a("router-link",{attrs:{to:{name:"Home"}}},[a("button",{staticClass:"btn btn-primary navbar-btn",attrs:{type:"button"}},[t._v("Home")])]),t._v(" "),a("router-link",{attrs:{to:{name:"Dashboard"}}},[a("button",{staticClass:"btn btn-primary navbar-btn",attrs:{type:"button"}},[t._v("Dashboard")])]),t._v(" "),a("button",{staticClass:"btn btn-danger navbar-btn right-btn",attrs:{type:"button"},on:{click:t.logout}},[t._v("Logout")])],1):a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-primary navbar-btn",attrs:{type:"button","data-toggle":"modal","data-target":"#login"}},[t._v("Login")]),t._v(" "),a("button",{staticClass:"btn btn-alt navbar-btn right-btn",attrs:{type:"button","data-toggle":"modal","data-target":"#signUp"}},[t._v("Signup")])])],1)]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"login",role:"dialog"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"form",attrs:{id:"login"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],staticClass:"form-control",attrs:{type:"email",maxlength:"57",name:"email",placeholder:"Email",required:""},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||t.$set(t.login,"email",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",maxlength:"20",placeholder:"password",required:""},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-submit btn-success",attrs:{"data-dismiss":"modal",type:"submit"},on:{click:t.submitLogin}},[t._v("Submit")])])])]),t._v(" "),t._m(1)])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"signUp",role:"dialog"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[t._v("×")]),t._v(" "),a("h4",{staticClass:"modal-title"},[t._v("Create an Account")]),t._v(" "),t.error?a("p",[a("b",[t._v("Passwords must match.")])]):t._e()]),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"form",attrs:{id:"register"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"userName"}},[t._v("Username:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.userName,expression:"signUp.userName"}],staticClass:"form-control",attrs:{type:"userName",name:"userName",maxlength:"20",placeholder:"user name",required:""},domProps:{value:t.signUp.userName},on:{input:function(e){e.target.composing||t.$set(t.signUp,"userName",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.email,expression:"signUp.email"}],staticClass:"form-control",attrs:{type:"email",maxlength:"57",name:"email",placeholder:"Email",required:""},domProps:{value:t.signUp.email},on:{input:function(e){e.target.composing||t.$set(t.signUp,"email",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.password,expression:"signUp.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",maxlength:"20",placeholder:"password",required:""},domProps:{value:t.signUp.password},on:{input:function(e){e.target.composing||t.$set(t.signUp,"password",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"reEnterPassword"}},[t._v("Confirm Password:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.rPassword,expression:"signUp.rPassword"}],staticClass:"form-control",attrs:{type:"password",name:"reEnterPassword",maxlength:"20",placeholder:"Password"},domProps:{value:t.signUp.rPassword},on:{input:function(e){e.target.composing||t.$set(t.signUp,"rPassword",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-submit btn-success",attrs:{"data-dismiss":"modal",type:"submit"},on:{click:t.submitRegister}},[t._v("Submit")])])])]),t._v(" "),t._m(2)])])]),t._v(" "),a("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")]),this._v(" "),e("h4",{staticClass:"modal-title"},[this._v("Login to Your Account")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}]};var n=a("VU/8")({name:"app",data:function(){return{login:{email:"",password:""},signUp:{userName:"",email:"",password:"",rPassword:""},error:!1}},components:{},mounted:function(){this.$store.dispatch("authenticate")},computed:{activeUser:function(){return this.$store.state.activeUser}},methods:{submitLogin:function(){this.$store.dispatch("login",this.login),this.login={email:"",password:""}},submitRegister:function(){this.signUp.password==this.signUp.rPassword?this.$store.dispatch("register",{username:this.signUp.userName,email:this.signUp.email,password:this.signUp.password}):this.error=!0},logout:function(){this.$store.dispatch("logout")}}},i,!1,function(t){a("hZdz")},null,null).exports,o=a("/ocq"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container-fluid text-center"},[a("h1",{staticClass:"main-font main-title"},[t._v("Keepr")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-offset-4 col-sm-4"},[a("form",{staticClass:"form-inline search-bar",on:{submit:function(e){e.preventDefault(),t.searchQuery(e)}}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",name:"query",placeholder:"Search Keeps"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),t._m(0)])])])]),t._v(" "),a("div",{staticClass:"row"},t._l(t.keeps,function(e){return a("div",{staticClass:"keep col-sm-3 well"},[a("div",{staticClass:"image-wrapper"},[a("img",{staticClass:"img-responsive text-center keep-image",attrs:{src:e.imageUrl,alt:""}}),t._v(" "),a("div",{staticClass:"overlay-content"},[a("button",{staticClass:"btn btn-alt btn-icon",attrs:{title:"Keep",type:"button","data-toggle":"modal","data-target":"#add-to-vault-modal"},on:{click:function(a){t.vaultAddView(e)}}},[a("span",{staticClass:"custom-icon main-font"},[t._v("K")])]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-icon",attrs:{title:"View",type:"button","data-toggle":"modal","data-target":"#view-keep-modal"},on:{click:function(a){t.viewKeep(e)}}},[a("span",{staticClass:"glyphicon glyphicon-zoom-in"})])])]),t._v(" "),a("h2",[t._v(t._s(e.name))]),t._v(" "),a("button",{staticClass:"btn btn-alt btn-icon",attrs:{title:"Keep",type:"button","data-toggle":"modal","data-target":"#add-to-vault-modal"},on:{click:function(a){t.vaultAddView(e)}}},[a("span",{staticClass:"custom-icon main-font"},[t._v("K")])]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-icon",attrs:{title:"View",type:"button","data-toggle":"modal","data-target":"#view-keep-modal"},on:{click:function(a){t.viewKeep(e)}}},[a("span",{staticClass:"glyphicon glyphicon-zoom-in"})])])})),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"add-to-vault-modal",role:"dialog"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[t._v("×")]),t._v(" "),a("h4",{staticClass:"modal-title"},[t._v("Add to Vault")]),t._v(" "),a("h3",[t._v(t._s(t.activeKeep.name))])]),t._v(" "),a("div",{staticClass:"modal-body"},[t.vaults.length?t._e():a("div",[a("h4",{staticClass:"empty-message"},[t._v("You don't have any vaults. Head to your Dashboard to create one!")]),t._v(" "),a("router-link",{attrs:{to:{path:"Dashboard"}}},[a("button",{staticClass:"btn btn-primary btn-main",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Dashboard")])])],1),t._v(" "),t._l(t.vaults,function(e){return a("div",{staticClass:"row"},[a("h5",{staticClass:"pull-left"},[t._v(t._s(e.name))]),t._v(" "),a("button",{staticClass:"btn btn-success pull-right",attrs:{title:"Add to Vault",type:"button","data-dismiss":"modal"},on:{click:function(a){t.addKeepToVault(t.activeKeep,e.id)}}},[a("span",{staticClass:"glyphicon glyphicon-plus-sign"})])])})],2),t._v(" "),t._m(1)])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"view-keep-modal",role:"dialog"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[t._v("×")]),t._v(" "),a("h4",{staticClass:"modal-title"},[t._v(t._s(t.activeKeep.name))])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("img",{staticClass:"img-responsive text-center",attrs:{src:t.activeKeep.imageUrl,alt:""}}),t._v(" "),a("h5",[t._v("Views: "+t._s(t.activeKeep.views+1))]),t._v(" "),a("h5",[t._v("Adds: "+t._s(t.activeKeep.vaultAdds))])])])]),t._v(" "),t._m(2)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-alt btn-submit",attrs:{type:"submit",id:"search-button"}},[e("span",{staticClass:"glyphicon glyphicon-search"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}]};var l=a("VU/8")({name:"Home",data:function(){return{query:""}},components:{},mounted:function(){this.$store.dispatch("authenticate"),this.$store.dispatch("getPublicKeeps"),this.$store.dispatch("getUserVaults")},computed:{activeUser:function(){return this.$store.state.activeUser},activeKeep:function(){return this.$store.state.activeKeep},keeps:function(){return this.$store.state.keeps},vaults:function(){return this.$store.state.vaults}},methods:{addKeepToVault:function(t,e){this.incrementKeepVaultAdds(t),this.$store.dispatch("addKeepToVault",{keepId:t.id,vaultId:e})},getActiveKeep:function(t){this.$store.dispatch("getActiveKeep",{id:t})},incrementKeepViews:function(t){var e={name:t.name,userId:t.userId,views:t.views+1,vaultAdds:t.vaultAdds,imageUrl:t.imageUrl,articleUrl:t.articleUrl,published:t.published};this.$store.dispatch("editKeep",{data:e,id:t.id})},incrementKeepVaultAdds:function(){var t={name:this.activeKeep.name,userId:this.activeKeep.userId,views:this.activeKeep.views,vaultAdds:this.activeKeep.vaultAdds+1,imageUrl:this.activeKeep.imageUrl,articleUrl:this.activeKeep.articleUrl,published:this.activeKeep.published};this.$store.dispatch("editKeep",{data:t,id:this.activeKeep.id})},viewKeep:function(t){this.getActiveKeep(t.id),this.incrementKeepViews(t)},vaultAddView:function(t){this.getActiveKeep(t.id)},searchQuery:function(){var t=this.query.split(" ").join("-");""!=t?this.$store.dispatch("getPublicKeepsByQuery",{data:t}):this.$store.dispatch("getPublicKeeps")}}},r,!1,function(t){a("GRZg")},null,null).exports,c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container-fluid text-center"},[t._m(0),t._v(" "),a("div",{staticClass:"row dashboard-row"},[a("h2",{staticClass:"secondary-title"},[t._v("My Keeps")]),t._v(" "),t.keeps.length?t._e():a("div",[a("h3",{staticClass:"empty-message"},[t._v("Looks like you haven't made any keeps yet! Why not make one now?")]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-main",attrs:{type:"button","data-toggle":"modal","data-target":"#create-keep-modal"}},[t._v("New Keep")])]),t._v(" "),t._l(t.keeps,function(e){return a("div",{staticClass:"keep col-sm-3 well"},[a("div",{staticClass:"image-wrapper"},[a("img",{staticClass:"img-responsive text-center keep-image",attrs:{src:e.imageUrl,alt:""}}),t._v(" "),a("div",{staticClass:"overlay-content"},[e.published?a("button",{staticClass:"btn btn-primary btn-icon",attrs:{title:"Make Private",type:"button"},on:{click:function(a){t.unpublishKeep(e)}}},[a("span",{staticClass:"glyphicon glyphicon glyphicon-eye-close"})]):a("button",{staticClass:"btn btn-primary btn-icon",attrs:{title:"Make Public",type:"button"},on:{click:function(a){t.publishKeep(e)}}},[a("span",{staticClass:"glyphicon glyphicon-eye-open"})]),t._v(" "),e.published?t._e():a("button",{staticClass:"btn btn-alt btn-icon",attrs:{title:"Edit",type:"button","data-toggle":"modal","data-target":"#edit-keep-modal"},on:{click:function(a){t.setTargetKeep(e)}}},[a("span",{staticClass:"glyphicon glyphicon-pencil"})]),t._v(" "),e.published?t._e():a("button",{staticClass:"btn btn-danger btn-icon",attrs:{title:"Delete",type:"button"},on:{click:function(a){t.removeKeep(e.id)}}},[a("span",{staticClass:"glyphicon glyphicon-trash"})])])]),t._v(" "),a("h3",[t._v(t._s(e.name))]),t._v(" "),e.published?a("p",[t._v("Public")]):a("p",[t._v("Private")]),t._v(" "),e.published?a("button",{staticClass:"btn btn-primary btn-icon",attrs:{title:"Make Private",type:"button"},on:{click:function(a){t.unpublishKeep(e)}}},[a("span",{staticClass:"glyphicon glyphicon glyphicon-eye-close"})]):a("button",{staticClass:"btn btn-primary btn-icon",attrs:{title:"Make Public",type:"button"},on:{click:function(a){t.publishKeep(e)}}},[a("span",{staticClass:"glyphicon glyphicon-eye-open"})]),t._v(" "),e.published?t._e():a("button",{staticClass:"btn btn-alt btn-icon",attrs:{title:"Edit",type:"button","data-toggle":"modal","data-target":"#edit-keep-modal"},on:{click:function(a){t.setTargetKeep(e)}}},[a("span",{staticClass:"glyphicon glyphicon-pencil"})]),t._v(" "),e.published?t._e():a("button",{staticClass:"btn btn-danger btn-icon",attrs:{title:"Delete",type:"button"},on:{click:function(a){t.removeKeep(e.id)}}},[a("span",{staticClass:"glyphicon glyphicon-trash"})])])})],2),t._v(" "),a("div",{staticClass:"row dashboard-row"},[a("h2",{staticClass:"secondary-title"},[t._v("My Vaults")]),t._v(" "),t.vaults.length?t._e():a("div",[a("h3",{staticClass:"empty-message"},[t._v("No vaults to be found. You should add one!")]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-main",attrs:{type:"button","data-toggle":"modal","data-target":"#create-vault-modal"}},[t._v("New Vault")])]),t._v(" "),t._l(t.vaults,function(e){return a("div",{staticClass:"vault col-sm-4 well"},[a("h2",[t._v(t._s(e.name))]),t._v(" "),a("h4",[t._v(t._s(e.description))]),t._v(" "),a("router-link",{attrs:{to:{path:"my-vaults/"+e.id}}},[a("button",{staticClass:"btn btn-primary btn-icon",attrs:{title:"View",type:"button"}},[a("span",{staticClass:"glyphicon glyphicon-zoom-in"})])]),t._v(" "),a("button",{staticClass:"btn btn-danger btn-icon",attrs:{title:"Delete",type:"button"},on:{click:function(a){t.removeVault(e.id)}}},[a("span",{staticClass:"glyphicon glyphicon-trash"})])],1)})],2),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"create-vault-modal",role:"dialog"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"form",attrs:{id:"create-vault-form"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("Title:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.name,expression:"newVault.name"}],staticClass:"form-control",attrs:{type:"text",maxlength:"60",name:"text",placeholder:"Title",required:""},domProps:{value:t.newVault.name},on:{input:function(e){e.target.composing||t.$set(t.newVault,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("Description:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.description,expression:"newVault.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",maxlength:"200",placeholder:"Description",required:""},domProps:{value:t.newVault.description},on:{input:function(e){e.target.composing||t.$set(t.newVault,"description",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-submit btn-success",attrs:{"data-dismiss":"modal",type:"submit"},on:{click:t.createVault}},[t._v("Create")])])])]),t._v(" "),t._m(2)])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"create-keep-modal",role:"dialog"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"form",attrs:{id:"create-keep-form"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("Title:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.name,expression:"newKeep.name"}],staticClass:"form-control",attrs:{type:"text",maxlength:"60",name:"text",placeholder:"Title",required:""},domProps:{value:t.newKeep.name},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("Image Link:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.imageUrl,expression:"newKeep.imageUrl"}],staticClass:"form-control",attrs:{type:"text",name:"image",maxlength:"200",placeholder:"Image Link",required:""},domProps:{value:t.newKeep.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"imageUrl",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("Article Link:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.articleUrl,expression:"newKeep.articleUrl"}],staticClass:"form-control",attrs:{type:"text",name:"article",maxlength:"200",placeholder:"Article Link",required:""},domProps:{value:t.newKeep.articleUrl},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"articleUrl",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-submit btn-success",attrs:{"data-dismiss":"modal",type:"submit"},on:{click:t.createKeep}},[t._v("Create")])])])]),t._v(" "),t._m(4)])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"edit-keep-modal",role:"dialog"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(5),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"form",attrs:{id:"edit-keep-form"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("Title:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.targetKeep.name,expression:"targetKeep.name"}],staticClass:"form-control",attrs:{type:"text",maxlength:"60",name:"text",placeholder:"Title",required:""},domProps:{value:t.targetKeep.name},on:{input:function(e){e.target.composing||t.$set(t.targetKeep,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("Image Link:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.targetKeep.imageUrl,expression:"targetKeep.imageUrl"}],staticClass:"form-control",attrs:{type:"text",name:"image",maxlength:"200",placeholder:"Image Link",required:""},domProps:{value:t.targetKeep.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.targetKeep,"imageUrl",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("Article Link:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.targetKeep.articleUrl,expression:"targetKeep.articleUrl"}],staticClass:"form-control",attrs:{type:"text",name:"article",maxlength:"200",placeholder:"Article Link",required:""},domProps:{value:t.targetKeep.articleUrl},on:{input:function(e){e.target.composing||t.$set(t.targetKeep,"articleUrl",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-submit btn-success",attrs:{"data-dismiss":"modal",type:"submit"},on:{click:function(e){t.editKeep(t.targetKeep)}}},[t._v("Submit")])])])]),t._v(" "),t._m(6)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row dashboard-main"},[e("div",{staticClass:"col-sm-offset-4 col-sm-4"},[e("h1",{staticClass:"main-font main-title"},[this._v("Dashboard")]),this._v(" "),e("button",{staticClass:"btn btn-primary btn-main",attrs:{type:"button","data-toggle":"modal","data-target":"#create-vault-modal"}},[this._v("New Vault")]),this._v(" "),e("button",{staticClass:"btn btn-primary btn-main",attrs:{type:"button","data-toggle":"modal","data-target":"#create-keep-modal"}},[this._v("New Keep")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")]),this._v(" "),e("h4",{staticClass:"modal-title"},[this._v("Create Vault")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")]),this._v(" "),e("h4",{staticClass:"modal-title"},[this._v("Create Keep")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")]),this._v(" "),e("h4",{staticClass:"modal-title"},[this._v("Edit Keep")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}]};var d=a("VU/8")({name:"Dashboard",data:function(){return{newVault:{name:"",description:""},newKeep:{name:"",imageUrl:"",articleUrl:null,views:0,vaultAdds:0},targetKeep:{id:null,name:"",userId:null,views:0,vaultAdds:0,imageUrl:"",articleUrl:"",published:!1}}},components:{},mounted:function(){this.$store.dispatch("getUserKeeps"),this.$store.dispatch("getUserVaults")},computed:{activeUser:function(){return this.$store.state.activeUser},keeps:function(){return this.$store.state.keeps},vaults:function(){return this.$store.state.vaults}},methods:{setTargetKeep:function(t){this.targetKeep={id:t.id,name:t.name,userId:t.userId,views:t.views,vaultAdds:t.vaultAdds,imageUrl:t.imageUrl,articleUrl:t.articleUrl,published:t.published}},createVault:function(){this.$store.dispatch("createVault",this.newVault)},createKeep:function(){this.$store.dispatch("createKeep",this.newKeep)},removeKeep:function(t){this.$store.dispatch("removeKeep",{id:t})},removeVault:function(t){this.$store.dispatch("removeVault",{id:t})},publishKeep:function(t){var e={name:t.name,userId:t.userId,views:t.views,vaultAdds:t.vaultAdds,imageUrl:t.imageUrl,articleUrl:t.articleUrl,published:!0};this.$store.dispatch("editUserKeep",{data:e,id:t.id})},unpublishKeep:function(t){var e={name:t.name,userId:t.userId,views:t.views,vaultAdds:t.vaultAdds,imageUrl:t.imageUrl,articleUrl:t.articleUrl,published:!1};this.$store.dispatch("editUserKeep",{data:e,id:t.id})},editKeep:function(t){var e={name:t.name,userId:t.userId,views:t.views,vaultAdds:t.vaultAdds,imageUrl:t.imageUrl,articleUrl:t.articleUrl,published:t.published};this.$store.dispatch("editUserKeep",{data:e,id:t.id})}}},c,!1,function(t){a("yqAD")},null,null).exports,u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container-fluid text-center"},[a("h1",[t._v(t._s(t.activeVault.name))]),t._v(" "),a("h3",[t._v(t._s(t.activeVault.description))]),t._v(" "),t._l(t.keeps,function(e){return a("div",{staticClass:"keep col-sm-3"},[a("h2",[t._v(t._s(e.name))]),t._v(" "),a("img",{staticClass:"img-responsive",attrs:{src:e.imageUrl,alt:""}}),t._v(" "),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){t.removeKeepFromVault(e.id,t.activeVault.id)}}},[a("span",{staticClass:"glyphicon glyphicon-trash"})])])})],2)},staticRenderFns:[]};var m=a("VU/8")({name:"Vault",data:function(){return{}},components:{},mounted:function(){this.$store.dispatch("authenticate"),this.$store.dispatch("getActiveVault",{id:this.$route.params.id}),this.$store.dispatch("getKeepsInVault",{id:this.$route.params.id})},computed:{activeUser:function(){return this.$store.state.activeUser},activeVault:function(){return this.$store.state.activeVault},keeps:function(){return this.$store.state.keeps}},methods:{removeKeepFromVault:function(t,e){this.$store.dispatch("removeKeepFromVault",{keepId:t,vaultId:e})}}},u,!1,function(t){a("ddLZ")},null,null).exports;s.a.use(o.a);var p=new o.a({routes:[{path:"/",name:"Home",component:l},{path:"/dashboard",name:"Dashboard",component:d},{path:"/my-vaults/:id",name:"Vault",component:m}]}),v=a("mtWM"),h=a.n(v),g=a("NYxO"),b=window.location.host.indexOf("localhost")>-1?"//localhost:5000/":"/",f=h.a.create({baseURL:b+"api/",timeout:2e3,withCredentials:!0}),_=h.a.create({baseURL:b,timeout:2e3,withCredentials:!0});s.a.use(g.a);var C=new g.a.Store({state:{error:{},activeUser:{},activeKeep:{},activeVault:{},vaults:[],keeps:[]},mutations:{handleError:function(t,e){t.error=e},setActiveUser:function(t,e){t.activeUser=e},setActiveKeep:function(t,e){t.activeKeep=e.data},setActiveVault:function(t,e){t.activeVault=e.data},setKeeps:function(t,e){t.keeps=e.data},setVaults:function(t,e){t.vaults=e.data}},actions:{login:function(t,e){var a=t.commit,s=t.dispatch;_.post("account/login",e).then(function(t){console.log("Successful login."),a("setActiveUser",t.data),s("getUserVaults")}).catch(function(t){a("handleError",t)})},register:function(t,e){var a=t.commit;t.dispatch;_.post("account/register",e).then(function(t){console.log(t),a("setActiveUser",t.data)}).catch(function(t){a("handleError",t)})},authenticate:function(t){var e=t.commit;t.dispatch;_("account/authenticate").then(function(t){e("setActiveUser",t.data)}).catch(function(t){e("handleError",t)})},logout:function(t){var e=t.commit;t.dispatch;_.delete("account/logout").then(function(){e("setActiveUser",{}),p.push({name:"Home"})})},getPublicKeeps:function(t,e){var a=t.commit;t.dispatch;f("keeps").then(function(t){a("setKeeps",{data:t.data})}).catch(function(t){a("handleError",t)})},getPublicKeepsByQuery:function(t,e){var a=t.commit;t.dispatch;f("keeps/search/"+e.data).then(function(t){a("setKeeps",{data:t.data})}).catch(function(t){a("handleError",t)})},getActiveKeep:function(t,e){var a=t.commit;t.dispatch;f("keeps/"+e.id).then(function(t){a("setActiveKeep",{data:t.data})}).catch(function(t){a("handleError",t)})},getActiveVault:function(t,e){var a=t.commit;t.dispatch;f("vaults/"+e.id).then(function(t){a("setActiveVault",{data:t.data})}).catch(function(t){a("handleError",t)})},getKeepsInVault:function(t,e){var a=t.commit;t.dispatch;f("manage/vaults/"+e.id+"/keeps").then(function(t){a("setKeeps",{data:t.data})}).catch(function(t){a("handleError",t)})},getUserKeeps:function(t){var e=t.commit,a=t.dispatch;f("manage/keeps").then(function(t){e("setKeeps",{data:t.data}),a("authenticate")}).catch(function(t){e("handleError",t)})},getUserVaults:function(t){var e=t.commit,a=t.dispatch;f("manage/vaults").then(function(t){e("setVaults",{data:t.data}),a("authenticate")}).catch(function(t){e("handleError",t)})},createKeep:function(t,e){var a=t.commit,s=t.dispatch;f.post("keeps",e).then(function(t){s("getUserKeeps")}).catch(function(t){a("handleError",t)})},createVault:function(t,e){var a=t.commit,s=t.dispatch;f.post("vaults",e).then(function(t){s("getUserVaults")}).catch(function(t){a("handleError",t)})},addKeepToVault:function(t,e){var a=t.commit;t.dispatch;f.post("manage/vaults/"+e.vaultId+"/keeps",e).then(function(t){console.log("Successfully added keep to vault.")}).catch(function(t){a("handleError",t)})},removeKeepFromVault:function(t,e){var a=t.commit,s=t.dispatch;f.delete("manage/vaults/"+e.vaultId+"/keeps/"+e.keepId,e).then(function(t){console.log("Successfully removed keep from vault."),s("getKeepsInVault",{id:e.vaultId})}).catch(function(t){a("handleError",t)})},editVault:function(t,e){var a=t.commit,s=t.dispatch;f.put("vaults/"+e.endpoint,e.data).then(function(t){s("getUserVaults",{endpoint:e.endpoint})}).catch(function(t){a("handleError",t)})},editKeep:function(t,e){var a=t.commit,s=t.dispatch;f.put("keeps/"+e.id,e.data).then(function(t){s("getPublicKeeps")}).catch(function(t){a("handleError",t)})},editUserKeep:function(t,e){var a=t.commit,s=t.dispatch;f.put("keeps/"+e.id,e.data).then(function(t){s("getUserKeeps")}).catch(function(t){a("handleError",t)})},removeKeep:function(t,e){var a=t.commit,s=t.dispatch;f.delete("keeps/"+e.id).then(function(t){s("getUserKeeps")}).catch(function(t){a("handleError",t)})},removeVault:function(t,e){var a=t.commit,s=t.dispatch;f.delete("vaults/"+e.id).then(function(t){s("getUserVaults")}).catch(function(t){a("handleError",t)})}}});h.a.create({baseURL:window.location.host.includes("localhost")?"//localhost:5000/":"/",timeout:2e3,withCredentials:!0});s.a.config.productionTip=!1,new s.a({el:"#app",router:p,store:C,template:"<App/>",components:{App:n}})},ddLZ:function(t,e){},hZdz:function(t,e){},yqAD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4267c35fcc6139b17051.js.map