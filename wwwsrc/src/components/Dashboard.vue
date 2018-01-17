<template>
    <div class="home container-fluid text-center">
        <div class="row dashboard-main">
            <div class="col-sm-offset-4 col-sm-4">
                <h1 class="main-font main-title">Dashboard</h1>
                <button type="button" class="btn btn-primary btn-main" data-toggle="modal" data-target="#create-vault-modal">New Vault</button>
                <button type="button" class="btn btn-primary btn-main" data-toggle="modal" data-target="#create-keep-modal">New Keep</button>
            </div>
        </div>
        <div class="row dashboard-row">
            <h2 class="secondary-title">My Keeps</h2>
            <div v-if="!keeps.length">
                <h3 class="empty-message">Looks like you haven't made any keeps yet! Why not make one now?</h3>
                <button type="button" class="btn btn-primary btn-main" data-toggle="modal" data-target="#create-keep-modal">New Keep</button>
            </div>
            <div class="keep col-sm-3 well" v-for="keep in keeps">
                <div class="image-wrapper">
                    <img class="img-responsive center-block keep-image" :src="keep.imageUrl" alt="">
                    <div class="overlay-content" v-if="keep.published">
                        <button title="Make Private" type="button" class="btn btn-primary btn-icon" @click="unpublishKeep(keep)">
                            <span class="glyphicon glyphicon glyphicon-eye-close"></span>
                        </button>
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
                    <div class="overlay-content" v-if v-else>
                        <button title="Make Public" type="button" class="btn btn-primary btn-icon" @click="publishKeep(keep)">
                            <span class="glyphicon glyphicon-eye-open"></span>
                        </button>
                        <button title="Edit" type="button" class="btn btn-alt btn-icon" data-toggle="modal" data-target="#edit-keep-modal" @click="setTargetKeep(keep)">
                            <span class="glyphicon glyphicon-pencil"></span>
                        </button>
                        <button title="Delete" type="button" class="btn btn-danger btn-icon" @click="removeKeep(keep.id)">
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
                <h3>{{keep.name}}</h3>
                <p v-if="keep.published">Public</p>
                <p v-else>Private</p>
                <div v-if="keep.published">
                    <button title="Make Private" type="button" class="btn btn-primary btn-icon" @click="unpublishKeep(keep)">
                        <span class="glyphicon glyphicon glyphicon-eye-close"></span>
                    </button>
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
                <div v-else>
                    <button title="Make Public" type="button" class="btn btn-primary btn-icon" @click="publishKeep(keep)">
                        <span class="glyphicon glyphicon-eye-open"></span>
                    </button>
                    <button title="Edit" type="button" class="btn btn-alt btn-icon" data-toggle="modal" data-target="#edit-keep-modal" @click="setTargetKeep(keep)">
                        <span class="glyphicon glyphicon-pencil"></span>
                    </button>
                    <button title="Delete" type="button" class="btn btn-danger btn-icon" @click="removeKeep(keep.id)">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>
                </div>
            </div>
        </div>

        <div class="row dashboard-row">
            <h2 class="secondary-title">My Vaults</h2>
            <div v-if="!vaults.length">
                <h3 class="empty-message">No vaults to be found. You should add one!</h3>
                <button type="button" class="btn btn-primary btn-main" data-toggle="modal" data-target="#create-vault-modal">New Vault</button>
            </div>
            <div class="vault col-sm-4 well" v-for="vault in vaults">
                <h2>{{vault.name}}</h2>
                <h4>{{vault.description}}</h4>
                <router-link :to="{path: 'my-vaults/' + vault.id}">
                    <button title="View" type="button" class="btn btn-primary btn-icon">
                        <span class="glyphicon glyphicon-zoom-in"></span>
                    </button>
                </router-link>
                <button title="Delete" type="button" class="btn btn-danger btn-icon" @click="removeVault(vault.id)">
                    <span class="glyphicon glyphicon-trash"></span>
                </button>
            </div>
        </div>

        <div id="create-vault-modal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Create Vault</h4>
                    </div>
                    <div class="modal-body">
                        <form id="create-vault-form" class="form">
                            <div class="form-group">
                                <label for="title">Title:</label>
                                <input type="text" maxlength="60" name="text" class="form-control" placeholder="Title" required v-model='newVault.name'>
                            </div>
                            <div class="form-group">
                                <label for="description">Description:</label>
                                <input type="text" name="description" maxlength="200" class="form-control" placeholder="Description" required v-model='newVault.description'>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-submit btn-success" @click="createVault" data-dismiss="modal" type="submit">Create</button>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="create-keep-modal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Create Keep</h4>
                    </div>
                    <div class="modal-body">
                        <form id="create-keep-form" class="form">
                            <div class="form-group">
                                <label for="title">Title:</label>
                                <input type="text" maxlength="60" name="text" class="form-control" placeholder="Title" required v-model='newKeep.name'>
                            </div>
                            <div class="form-group">
                                <label for="description">Image Link:</label>
                                <input type="text" name="image" maxlength="200" class="form-control" placeholder="Image Link" required v-model='newKeep.imageUrl'>
                            </div>
                            <div class="form-group">
                                <label for="description">Article Link:</label>
                                <input type="text" name="article" maxlength="200" class="form-control" placeholder="Article Link" required v-model='newKeep.articleUrl'>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-submit btn-success" @click="createKeep" data-dismiss="modal" type="submit">Create</button>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="edit-keep-modal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Edit Keep</h4>
                    </div>
                    <div class="modal-body">
                        <form id="edit-keep-form" class="form">
                            <div class="form-group">
                                <label for="title">Title:</label>
                                <input type="text" maxlength="60" name="text" class="form-control" placeholder="Title" required v-model='targetKeep.name'>
                            </div>
                            <div class="form-group">
                                <label for="description">Image Link:</label>
                                <input type="text" name="image" maxlength="200" class="form-control" placeholder="Image Link" required v-model='targetKeep.imageUrl'>
                            </div>
                            <div class="form-group">
                                <label for="description">Article Link:</label>
                                <input type="text" name="article" maxlength="200" class="form-control" placeholder="Article Link" required v-model='targetKeep.articleUrl'>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-submit btn-success" @click="editKeep(targetKeep)" data-dismiss="modal" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
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
        name: 'Dashboard',
        data() {
            return {
                newVault: {
                    name: '',
                    description: ''
                },
                newKeep: {
                    name: '',
                    imageUrl: '',
                    articleUrl: null,
                    views: 0,
                    vaultAdds: 0
                },
                targetKeep: {
                    id: null,
                    name: '',
                    userId: null,
                    views: 0,
                    vaultAdds: 0,
                    imageUrl: '',
                    articleUrl: '',
                    published: false
                }
            }
        },
        components: {

        },
        mounted() {
            this.$store.dispatch('authenticate')
            this.$store.dispatch('getUserKeeps')
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
            setTargetKeep(keep) {
                this.targetKeep = {
                    id: keep.id,
                    name: keep.name,
                    userId: keep.userId,
                    views: keep.views,
                    vaultAdds: keep.vaultAdds,
                    imageUrl: keep.imageUrl,
                    articleUrl: keep.articleUrl,
                    published: keep.published
                }
            },
            addKeepToVault(keep, vaultId) {
                this.incrementKeepVaultAdds(keep)
                this.$store.dispatch('addKeepToVault', { keepId: keep.id, vaultId })
            },
            getActiveKeep(id) {
                this.$store.dispatch('getActiveKeep', { id })
            },
            viewKeep(keep) {
                this.getActiveKeep(keep.id)
                this.incrementKeepViews(keep)
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
                this.$store.dispatch('editUserKeep', { data: updatedKeep, id: keep.id })
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
                this.$store.dispatch('editUserKeep', { data: updatedKeep, id: this.activeKeep.id })
            },
            viewKeep(keep) {
                this.getActiveKeep(keep.id)
                this.incrementKeepViews(keep)
            },
            vaultAddView(keep) {
                this.getActiveKeep(keep.id)
            },
            createVault() {
                this.$store.dispatch('createVault', this.newVault)
                this.newVault = {
                    name: '',
                    description: ''
                }
            },
            createKeep() {
                this.$store.dispatch('createKeep', this.newKeep)
                this.newKeep = {
                    name: '',
                    imageUrl: '',
                    articleUrl: null,
                    views: 0,
                    vaultAdds: 0
                }
            },
            removeKeep(id) {
                this.$store.dispatch('removeKeep', { id })
            },
            removeVault(id) {
                this.$store.dispatch('removeVault', { id })
            },
            publishKeep(keep) {
                var updatedKeep = {
                    name: keep.name,
                    userId: keep.userId,
                    views: keep.views,
                    vaultAdds: keep.vaultAdds,
                    imageUrl: keep.imageUrl,
                    articleUrl: keep.articleUrl,
                    published: true
                }
                this.$store.dispatch('editUserKeep', { data: updatedKeep, id: keep.id })
            },
            unpublishKeep(keep) {
                var updatedKeep = {
                    name: keep.name,
                    userId: keep.userId,
                    views: keep.views,
                    vaultAdds: keep.vaultAdds,
                    imageUrl: keep.imageUrl,
                    articleUrl: keep.articleUrl,
                    published: false
                }
                this.$store.dispatch('editUserKeep', { data: updatedKeep, id: keep.id })
            },
            editKeep(keep) {
                var updatedKeep = {
                    name: keep.name,
                    userId: keep.userId,
                    views: keep.views,
                    vaultAdds: keep.vaultAdds,
                    imageUrl: keep.imageUrl,
                    articleUrl: keep.articleUrl,
                    published: keep.published
                }
                this.$store.dispatch('editUserKeep', { data: updatedKeep, id: keep.id })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .keep {
        border: 1px solid #000;
    }

    .vault {
        border: 1px solid #000;
    }
</style>