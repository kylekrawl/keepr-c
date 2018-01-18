<template>
  <div class="home container-fluid text-center">
    <h1 class="main-font main-title">Keepr</h1>
    <div class="row">
      <div class="col-sm-offset-4 col-sm-4">
        <form class="form-inline search-bar" @submit.prevent="searchQuery">
          <div class="form-group">
            <input type="text" class="form-control" name="query" placeholder="Search Keeps" v-model="query">
            <button type="submit" class="btn btn-alt btn-submit" id="search-button">
              <span class="glyphicon glyphicon-search"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="row">

      <HomeKeep v-for="keep in keeps" :key="keep.id" :keep="keep"></HomeKeep>

      <!-- <div class="keep col-sm-3 well" v-for="keep in keeps">
        <div class="image-wrapper">
          <img class="img-responsive center-block keep-image" :src="keep.imageUrl" alt="">
          <div class="overlay-content">
            <button title="Keep" type="button" class="btn btn-alt btn-icon" data-toggle="modal" data-target="#add-to-vault-modal" @click="vaultAddView(keep)">
              <span class="custom-icon main-font">K</span>
            </button>
            <button title="View" type="button" class="btn btn-primary btn-icon" data-toggle="modal" data-target="#view-keep-modal" @click="viewKeep(keep)">
              <span class="glyphicon glyphicon-zoom-in"></span>
            </button>
            <button title="Share" type="button" class="btn btn-alt-2 btn-icon" disabled>
              <span class="glyphicon glyphicon-share-alt"></span>
            </button>
          </div>
        </div>
        <span class="counter">
          <span class="glyphicon glyphicon-eye-open"></span>
          <span class="counter-label">: {{keep.views}}</span>
        </span>
        <span class="counter">
          <span class="custom-icon main-font">K</span>
          <span class="counter-label">: {{keep.vaultAdds}}</span>
        </span>
        <h2>{{keep.name}}</h2>
        <button title="Keep" type="button" class="btn btn-alt btn-icon" data-toggle="modal" data-target="#add-to-vault-modal" @click="vaultAddView(keep)">
          <span class="custom-icon main-font">K</span>
        </button>
        <button title="View" type="button" class="btn btn-primary btn-icon" data-toggle="modal" data-target="#view-keep-modal" @click="viewKeep(keep)">
          <span class="glyphicon glyphicon-zoom-in"></span>
        </button>
        <button title="Share" type="button" class="btn btn-alt-2 btn-icon" disabled>
          <span class="glyphicon glyphicon-share-alt"></span>
        </button>
      </div> -->
    </div>

    <div id="add-to-vault-modal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h3 class="modal-title">Add to Vault</h3>
            <h4>{{activeKeep.name}}</h4>
          </div>
          <div class="modal-body">
            <div v-if="!activeUser.hasOwnProperty('username')">
              <h4 class="empty-message">Sign in or create an account to join the fun!</h4>
            </div>
            <div v-else-if="!vaults.length">
              <h4 class="empty-message">You don't have any vaults. Head to your Dashboard to create one!</h4>
              <router-link :to="{path: 'Dashboard'}">
                <button type="button" class="btn btn-primary btn-main" data-dismiss="modal">Dashboard</button>
              </router-link>
            </div>
            <div class="row" v-for="vault in vaults">
              <div class="col-xs-offset-3 col-xs-6">
                <h4 class="pull-left">{{vault.name}}</h4>
                <button title="Add to Vault" type="button" class="btn btn-alt-2 pull-right" data-dismiss="modal" @click="addKeepToVault(activeKeep, vault.id)">
                  <span class="glyphicon glyphicon-plus"></span>
                </button>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default btn-modal" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div id="view-keep-modal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h3 class="modal-title">{{activeKeep.name}}</h3>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <img class="img-responsive center-block keep-large-view" :src="activeKeep.imageUrl" alt="">
                <span class="counter">
                  <span class="glyphicon glyphicon-eye-open"></span>
                  <span class="counter-label">: {{activeKeep.views + 1}}</span>
                </span>
                <span class="counter">
                  <span class="custom-icon main-font">K</span>
                  <span class="counter-label">: {{activeKeep.vaultAdds}}</span>
                </span>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default btn-modal" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import HomeKeep from './HomeKeep'
  export default {
    name: 'Home',
    data() {
      return {
        query: ""
      }
    },
    components: {
      HomeKeep
    },
    mounted() {
      this.$store.dispatch('authenticate')
      this.$store.dispatch('getPublicKeeps')
      this.$store.dispatch('getUserVaults')
    },
    computed: {
      activeUser() {
        return this.$store.state.activeUser
      },
      activeKeep() {
        return this.$store.state.activeKeep
      },
      keeps() {
        return this.$store.state.keeps
      },
      vaults() {
        return this.$store.state.vaults
      }
    },
    methods: {
      addKeepToVault(keep, vaultId) {
        this.incrementKeepVaultAdds(keep)
        this.$store.dispatch('addKeepToVault', { keepId: keep.id, vaultId })
      },
      incrementKeepVaultAdds() {
        var updatedKeep = {
          name: this.activeKeep.name,
          userId: this.activeKeep.userId,
          views: this.activeKeep.views,
          vaultAdds: this.activeKeep.vaultAdds + 1,
          imageUrl: this.activeKeep.imageUrl,
          articleUrl: this.activeKeep.articleUrl,
          published: this.activeKeep.published
        }
        this.$store.dispatch('editKeep', { data: updatedKeep, id: this.activeKeep.id })
      },
      searchQuery() {
        var query = this.query.split(" ").join("-")
        if (query != "") {
          this.$store.dispatch('getPublicKeepsByQuery', { data: query })
        } else {
          this.$store.dispatch('getPublicKeeps')
        }

      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>