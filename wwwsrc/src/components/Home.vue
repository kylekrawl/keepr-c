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
      <div class="keep col-sm-3 well" v-for="keep in keeps">
        <div class="image-wrapper">
          <img class="img-responsive text-center keep-image" :src="keep.imageUrl" alt="">
          <div class="overlay-content">
            <button title="Keep" type="button" class="btn btn-alt btn-icon" data-toggle="modal" data-target="#add-to-vault-modal" @click="vaultAddView(keep)">
              <span class="custom-icon main-font">K</span>
            </button>
            <button title="View" type="button" class="btn btn-primary btn-icon" data-toggle="modal" data-target="#view-keep-modal" @click="viewKeep(keep)">
              <span class="glyphicon glyphicon-zoom-in"></span>
            </button>
          </div>
        </div>
        <h2>{{keep.name}}</h2>
        <button title="Keep" type="button" class="btn btn-alt btn-icon" data-toggle="modal" data-target="#add-to-vault-modal" @click="vaultAddView(keep)">
          <span class="custom-icon main-font">K</span>
        </button>
        <button title="View" type="button" class="btn btn-primary btn-icon" data-toggle="modal" data-target="#view-keep-modal" @click="viewKeep(keep)">
          <span class="glyphicon glyphicon-zoom-in"></span>
        </button>
      </div>
    </div>


    <div id="add-to-vault-modal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Add to Vault</h4>
            <h3>{{activeKeep.name}}</h3>
          </div>
          <div class="modal-body">
            <div v-if="!vaults.length">
              <h4 class="empty-message">You don't have any vaults. Head to your Dashboard to create one!</h4>
              <router-link :to="{path: 'Dashboard'}">
                <button type="button" class="btn btn-primary btn-main" data-dismiss="modal">Dashboard</button>
              </router-link>
            </div>
            <div class="row" v-for="vault in vaults">
              <h5 class="pull-left">{{vault.name}}</h5>
              <button title="Add to Vault" type="button" class="btn btn-success pull-right" data-dismiss="modal" @click="addKeepToVault(activeKeep, vault.id)">
                <span class="glyphicon glyphicon-plus-sign"></span>
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div id="view-keep-modal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">{{activeKeep.name}}</h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <img class="img-responsive text-center" :src="activeKeep.imageUrl" alt="">
                <h5>Views: {{activeKeep.views + 1}}</h5>
                <h5>Adds: {{activeKeep.vaultAdds}}</h5>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        query: ""
      }
    },
    components: {

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
      getActiveKeep(id) {
        this.$store.dispatch('getActiveKeep', { id })
      },
      incrementKeepViews(keep) {
        var updatedKeep = {
          name: keep.name,
          userId: keep.userId,
          views: keep.views + 1,
          vaultAdds: keep.vaultAdds,
          imageUrl: keep.imageUrl,
          articleUrl: keep.articleUrl,
          published: keep.published
        }
        this.$store.dispatch('editKeep', { data: updatedKeep, id: keep.id })
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
      viewKeep(keep) {
        this.getActiveKeep(keep.id)
        this.incrementKeepViews(keep)
      },
      vaultAddView(keep) {
        this.getActiveKeep(keep.id)
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