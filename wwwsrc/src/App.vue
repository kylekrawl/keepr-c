<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-inverse">
      <div class="navbar-header">
        <router-link :to="{name: 'Home'}">
          <a class="navbar-brand main-font">Keepr</a>
        </router-link>
        <div class="text-right" v-if="activeUser.hasOwnProperty('username')">
          <p class="navbar-text">{{activeUser.username}}</p>
          <router-link :to="{name: 'Home'}">
            <button type="button" class="btn btn-primary navbar-btn">Home</button>
          </router-link>
          <router-link :to="{name: 'Dashboard'}">
            <button type="button" class="btn btn-primary navbar-btn">Dashboard</button>
          </router-link>
          <button type="button" class="btn btn-danger navbar-btn right-btn" @click="logout">Logout</button>
        </div>
        <div class="text-right" v-else>
          <button type="button" class="btn btn-primary navbar-btn" data-toggle="modal" data-target="#login">Login</button>
          <button type="button" class="btn btn-alt navbar-btn right-btn" data-toggle="modal" data-target="#signUp">Signup</button>
        </div>
      </div>
    </nav>

    <div id="login" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Login to Your Account</h4>
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

    <div id="signUp" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create an Account</h4>
            <p v-if="error">
              <b>Passwords must match.</b>
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
                <label for="reEnterPassword">Confirm Password:</label>
                <input type="password" name="reEnterPassword" maxlength="20" class="form-control" placeholder="Password" v-model="signUp.rPassword">
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
        if (this.signUp.password == this.signUp.rPassword) {
          this.$store.dispatch('register', {
            username: this.signUp.userName,
            email: this.signUp.email,
            password: this.signUp.password
          })
        } else {
          this.error = true
        }
      },
      logout() {
        this.$store.dispatch('logout')
      },
    }
  }
</script>

<style>
  body {
    font-family: 'PT Sans', sans-serif;
    background: rgba(41, 39, 39, 1);
    background: linear-gradient(rgba(41, 39, 39, 0.5), rgba(41, 39, 39, 0.5)), url("./assets/wall.jpg") no-repeat fixed center;
    background-size: cover;
    color: #f2f2f2;
  }

  .navbar, .navbar-inverse {
    background: #000;
  }

  .dashboard-row {
    min-height: 35vh;
  }

  .dashboard-main {
    min-height: 30vh;
  }

  .empty-message {
    margin-bottom: 30px;
  }

  .search-bar {
    margin-bottom: 40px;
  }

  .keep, .vault {
    border: 1px solid #404040;
    background: #404040;
    background: linear-gradient(rgb(80, 80, 80), rgb(51, 51, 51));
  }

  .main-title {
    font-size: 4em;
    margin: 40px 0 40px;
  }

  .secondary-title {
    font-size: 3em;
    margin: 40px 0 40px;
  }

  .btn {
    border: none;
  }

  .btn-primary {
    background: #737373;
    border: 1px solid #737373;
  }

  .btn-danger {
    background: #b30000;
    background: linear-gradient(rgba(179, 0, 0, 0.6), rgba(179, 0, 0, 0.6)), url("./assets/gem.jpg") no-repeat center;
    background-size: auto;
  }

  .btn-alt {
    background: #ffcc00;
    background: linear-gradient(rgba(255, 204, 0, 0.6), rgba(255, 204, 0, 0.6)), url("./assets/gem.jpg") no-repeat center;
    background-size: auto;
    color: #000;
  }

  .btn-alt-2 {
    background: #00ffff;
    background: linear-gradient(rgba(0, 255, 255, 0.6), rgba(0, 255, 255, 0.6)), url("./assets/gem.jpg") no-repeat center;
    color: #000;
  }

  .btn-alt-3 {
    background: #993399;
    background: linear-gradient(rgba(153, 51, 153, 0.6), rgba(153, 51, 153, 0.6)), url("./assets/gem.jpg") no-repeat center;
    color: #fff;
  }

  .btn-primary:hover,
  .btn-primary:active,
  .btn-primary:focus {
    background: #404040;
    border: 1px solid #404040;
  }

  .btn-danger:hover,
  .btn-danger:active,
  .btn-danger:focus {
    background: #990000;
    background: linear-gradient(rgba(153, 0, 0, 0.6), rgba(153, 0, 0, 0.6)), url("./assets/gem.jpg") no-repeat center;
    color: #fff;
  }

  .btn-alt:hover,
  .btn-alt:active,
  .btn-alt:focus {
    background: #e6b800;
    background: linear-gradient(rgba(230, 184, 0, 0.6), rgba(230, 184, 0, 0.6)), url("./assets/gem.jpg") no-repeat center;
    color: #000;
  }

  .btn-alt-2:hover,
  .btn-alt-2:active,
  .btn-alt-2:focus {
    background: #00e6e6;
    background: linear-gradient(rgba(0, 230, 230, 0.6), rgba(0, 230, 230, 0.6)), url("./assets/gem.jpg") no-repeat center;
    color: #000;
  }

  .btn-alt-3:hover,
  .btn-alt-3:active,
  .btn-alt-3:focus {
    background: #862d86;
    background: linear-gradient(rgba(134, 45, 134, 0.6), rgba(134, 45, 134, 0.6)), url("./assets/gem.jpg") no-repeat center;
    color: #fff;
  }

  .image-wrapper {
    position: relative;
    width: 100%;
  }

  .image-wrapper:hover .keep-image {
    opacity: 0.3;
  }

  .image-wrapper:hover .overlay-content {
    opacity: 1;
  }

  .keep-image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
    border-radius: 1%;
    border: 1px solid #404040;
    margin-bottom: 15px;
  }

  .keep-large-view {
    margin-bottom: 20px;
  }

  .overlay-content {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .glyphicon {
    font-size: 1.5em;
  }

  .small-icon {
    font-size: 0.9em;
  }

  .custom-icon,
  .counter-label {
    font-size: 1.4em;
  }

  .counter {
    margin: 0 5px;
  }

  .btn-icon {
    width: 45px;
    height: 40px;
    border-radius: 20%;
  }

  .add-button {
    width: 42px;
    height: 40px;
    border-radius: 100%;
  }

  .main-font {
    font-family: 'Modern Antiqua', cursive;
  }

  .btn-default {
    width: 100%;
  }

  .navbar ul {
    list-style-type: none;
  }

  .right-btn {
    margin: 0 10px 0 2px;
  }

  @media (max-width: 2000px) {
    .navbar-header {
      float: none;
    }
    .navbar-toggle {
      display: block;
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
  }
</style>