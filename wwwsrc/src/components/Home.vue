<template>
  <div class="home container-fluid text-center">
    <h1 class="main-font">Keepr</h1>
    <div class="keep col-sm-3 well" v-for="keep in keeps">
      <div class="image-wrapper">
        <img class="img-responsive text-center keep-image" :src="keep.imageUrl" alt="">
        <div class="overlay-content">
          <button title="Keep" type="button" class="btn btn-alt btn-icon" data-toggle="modal" data-target="#add-to-vault-modal"><span class="custom-icon main-font">K</span></button>
          <button title="View" type="button" class="btn btn-primary btn-icon" data-toggle="modal" data-target="#view-keep-modal" @click="viewKeep(keep)"><span class="glyphicon glyphicon-zoom-in"></span></button>
        </div>
      </div>
      <h3>{{keep.name}}</h3>
      <button title="Keep" type="button" class="btn btn-alt btn-icon" data-toggle="modal" data-target="#add-to-vault-modal"><span class="custom-icon main-font">K</span></button>
      <button title="View" type="button" class="btn btn-primary btn-icon" data-toggle="modal" data-target="#view-keep-modal" @click="viewKeep(keep)"><span class="glyphicon glyphicon-zoom-in"></span></button>
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
            <div class="row" v-for="vault in vaults">
              <h5 class="pull-left">{{vault.name}}</h5>
              <button title="Add to Vault" type="button" class="btn btn-success pull-right" data-dismiss="modal" @click="addKeepToVault(activeKeep, vault.id)"><span class="glyphicon glyphicon-plus-sign"></span></button>
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
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>