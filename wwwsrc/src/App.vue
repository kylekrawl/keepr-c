<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-inverse">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" style="font-family: 'Abril Fatface', cursive">Keepr</a>
        <div class="text-right" v-if="activeUser.hasOwnProperty('username')">
          <p class="navbar-text">Welcome {{activeUser.username}}</p>
          <button type="button" class="btn btn-danger navbar-btn logout-btn" @click="logout">Logout</button>
        </div>
        <div class="text-right" v-else>
          <button type="button" class="btn btn-primary navbar-btn " data-toggle="modal" data-target="#login">Login</button>
          <button type="button" class="btn btn-success navbar-btn" data-toggle="modal" data-target="#signUp">Sign-up</button>
        </div>
      </div>

      <!-- MENU DROWDOWN -->
      <div class="collapse navbar-collapse text-center" id="bs-example-navbar-collapse-1">
        <ul>
          <li>
            <router-link :to="{name: 'Home'}">
              <button type="button" class="btn btn-default nav-drop-btn" data-toggle="collapse" data-target=".navbar-collapse.in">Home</button>
            </router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
        </ul>
      </div>
    </nav>
    <div id="login" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Sign in to your account</h4>
          </div>
          <div class="modal-body">
            <form id="login" class="form">
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" maxlength="57" name="email" class="form-control" placeholder="Email" required v-model='login.email'>
              </div>
              <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" name="password" maxlength="20" class="form-control" placeholder="password" required v-model='login.password'>
              </div>
              <div class="form-group">
                <button class="btn btn-submit btn-success" @click="submitLogin" data-dismiss="modal" type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- SIGN UP MODAL -->
    <div id="signUp" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create an Account</h4>
            <p v-if="error">
              <b>Your Passwords Do Not Match</b>
            </p>
          </div>
          <div class="modal-body">
            <form id="register" class="form">
              <div class="form-group">
                <label for="userName">Username:</label>
                <input type="userName" name="userName" maxlength="20" class="form-control" placeholder="user name" required v-model="signUp.userName">
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" maxlength="57" name="email" class="form-control" placeholder="Email" required v-model="signUp.email">
              </div>
              <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" name="password" maxlength="20" class="form-control" placeholder="password" required v-model="signUp.password">
              </div>
              <div class="form-group">
                <label for="reEnterPassword">Re-enter Password:</label>
                <input type="password" name="reEnterPassword" maxlength="20" class="form-control" placeholder="Re Enter Password" v-model="signUp.rPassword">
              </div>
              <div class="form-group">
                <button class="btn btn-submit btn-success" data-dismiss="modal" type="submit" @click="submitRegister">Submit</button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        login: {
          email: '',
          password: ''
        },
        signUp: {
          userName: '',
          email: '',
          password: '',
          rPassword: ''
        },
        error: false,
      }
    },
    components: {

    },
    mounted() {
      this.$store.dispatch('authenticate')
    },
    computed: {
      activeUser() {
        return this.$store.state.activeUser
      }
    },
    methods: {
      submitLogin() {
        this.$store.dispatch('login', this.login)
        this.login = {
          email: '',
          password: ''
        }
      },
      submitRegister() {
        debugger
        if (this.signUp.password == this.signUp.rPassword) {
          this.$store.dispatch('register', {
            username: this.signUp.userName,
            email: this.signUp.email,
            password: this.signUp.password
          })
        } else {
          this.error = true
          console.error({ error: "Passwords Do Not Match" })
        }
      },
      logout() {
        this.$store.dispatch('logout')
      },
    }
  }
</script>

<style>
  .info-text {
    font-family: 'Source Sans Pro', sans-serif;
  }

  .btn-default {
    width: 100%;
  }

  .screenshot {
    margin-left: 50px;
  }

  .navbar ul {
    list-style-type: none;
  }

  .logout-btn {
    margin-left: 2px;
  }

  @media (max-width: 2000px) {
    .navbar-header {
      float: none;
    }
    .navbar-toggle {
      display: block;
    }
    .navbar-collapse {
      border-top: 1px solid transparent;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    .navbar-collapse.collapse {
      display: none!important;
    }
    .navbar-collapse.collapse.in {
      display: block!important;
    }
    .navbar-nav {
      float: none!important;
      margin: 7.5px -15px;
    }
    .navbar-nav>li {
      float: none;
    }
    .navbar-nav>li>a {
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .state {
      width: 50%
    }
    .nav-drop-btn {
      width: 100%;
      background-color: #FFFFF9;
      margin: 2px;
      font: black;
    }
  }
</style>