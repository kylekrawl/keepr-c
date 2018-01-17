<template>
    <div class="home container-fluid text-center">
        <h1>{{activeVault.name}}</h1>
        <h3>{{activeVault.description}}</h3>
        <!-- <div class="keep col-sm-3" v-for="keep in keeps">
            <h2>{{keep.name}}</h2>
            <img class="img-responsive" :src="keep.imageUrl" alt="">
            <button type="button" class="btn btn-danger" @click="removeKeepFromVault(keep.id, activeVault.id)"><span class="glyphicon glyphicon-trash"></span></button>
        </div> -->

        <div class="keep col-sm-4 col-md-3 well" v-for="keep in keeps">
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
                    <button title="Remove" type="button" class="btn btn-danger btn-icon" @click="removeKeepFromVault(keep.id, activeVault.id)">
                        <span class="glyphicon glyphicon-trash"></span>
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
            <button title="Remove" type="button" class="btn btn-danger btn-icon" @click="removeKeepFromVault(keep.id, activeVault.id)">
                <span class="glyphicon glyphicon-trash"></span>
            </button>
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
                        <div v-if="!vaults.length">
                            <h4 class="empty-message">You don't have any vaults. Head to your Dashboard to create one!</h4>
                            <router-link :to="{path: 'Dashboard'}">
                                <button type="button" class="btn btn-primary btn-main" data-dismiss="modal">Dashboard</button>
                            </router-link>
                        </div>
                        <div class="row" v-for="vault in vaults">
                            <div class="col-xs-offset-3 col-xs-6">
                                <h4 class="pull-left">{{vault.name}}</h4>
                                <button title="Add to Vault" type="button" class="btn btn-success add-button pull-right" data-dismiss="modal" @click="addKeepToVault(activeKeep, vault.id)">
                                    <span class="glyphicon glyphicon-plus-sign"></span>
                                </button>
                            </div>
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
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Vault',
        data() {
            return {

            }
        },
        components: {

        },
        mounted() {
            this.$store.dispatch('authenticate')
            this.$store.dispatch('getUserVaults')
            this.$store.dispatch('getActiveVault', { id: this.$route.params.id })
            this.$store.dispatch('getKeepsInVault', { id: this.$route.params.id })
        },
        computed: {
            activeUser() {
                return this.$store.state.activeUser
            },
            activeVault() {
                return this.$store.state.activeVault
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
                this.$store.dispatch('editKeepInVault', { data: updatedKeep, id: keep.id, vaultId: this.$route.params.id })
            },
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
                this.$store.dispatch('editKeepInVault', { data: updatedKeep, id: this.activeKeep.id, vaultId: this.$route.params.id })
            },
            viewKeep(keep) {
                this.getActiveKeep(keep.id)
                this.incrementKeepViews(keep)
            },
            vaultAddView(keep) {
                this.getActiveKeep(keep.id)
            },
            removeKeepFromVault(keepId, vaultId) {
                this.$store.dispatch('removeKeepFromVault', { keepId, vaultId })
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