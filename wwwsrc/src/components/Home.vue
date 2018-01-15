<template>
  <div class="home container-fluid text-center">
    <h1>Keepr</h1>
    <div class="keep col-sm-3" v-for="keep in keeps">
      <h2>{{keep.name}}</h2>
      <img class="img-responsive" :src="keep.imageUrl" alt="">
      <button type="button" class="btn btn-success" data-toggle="modal" data-target="#add-to-vault-modal" @click="getActiveKeep(keep.id)">K</button>
    </div>

    <div id="add-to-vault-modal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Add to Vault</h4>
            <h3>{{activeKeep.name}}</h3>
          </div>
          <div class="modal-body">
            <div class="row" v-for="vault in vaults">
              <h5 class="pull-left">{{vault.name}}</h5>
              <button type="button" class="btn btn-success pull-right" data-dismiss="modal" @click="addToVault(activeKeep.id, vault.id)">+</button>
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
      this.$store.dispatch('getAllKeeps')
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
      addToVault(keepId, vaultId) {
        this.$store.dispatch('addKeepToVault', { keepId, vaultId })
      },
      getActiveKeep(id) {
        this.$store.dispatch('getActiveKeep', { id })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .keep {
    border: 1px solid #000;
  }
</style>