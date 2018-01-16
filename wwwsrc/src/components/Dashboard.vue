<template>
    <div class="home container-fluid text-center">
        <div class="row">
            <div class="col-sm-offset-4 col-sm-4">
                <h1 class="main-font main-title">Dashboard</h1>
                <button type="button" class="btn btn-primary btn-main" data-toggle="modal" data-target="#create-vault-modal">New Vault</button>
                <button type="button" class="btn btn-primary btn-main" data-toggle="modal" data-target="#create-keep-modal">New Keep</button>
            </div>
        </div>
        <div class="row">
            <h2 class="secondary-title">My Keeps</h2>
            <div class="keep col-sm-3 well" v-for="keep in keeps">
                <div class="image-wrapper">
                    <img class="img-responsive text-center keep-image" :src="keep.imageUrl" alt="">
                    <div class="overlay-content">
                        <button title="Make Public" v-if="!keep.published" type="button" class="btn btn-primary btn-icon" @click="publishKeep(keep)">
                            <span class="glyphicon glyphicon-eye-open"></span>
                        </button>
                        <button title="Make Private" v-else type="button" class="btn btn-primary btn-icon" @click="unpublishKeep(keep)">
                            <span class="glyphicon glyphicon glyphicon-eye-close"></span>
                        </button>
                        <button title="Edit" v-if="!keep.published" type="button" class="btn btn-alt btn-icon" data-toggle="modal" data-target="#edit-keep-modal"
                            @click="setTargetKeep(keep)">
                            <span class="glyphicon glyphicon-pencil"></span>
                        </button>
                        <button title="Delete" v-if="!keep.published" type="button" class="btn btn-danger btn-icon" @click="removeKeep(keep.id)">
                            <span class="glyphicon glyphicon-trash"></span>
                        </button>
                    </div>
                </div>
                <h3>{{keep.name}}</h3>
                <p v-if="keep.published">Public</p>
                <p v-else>Private</p>
                <button title="Make Public" v-if="!keep.published" type="button" class="btn btn-primary btn-icon" @click="publishKeep(keep)">
                    <span class="glyphicon glyphicon-eye-open"></span>
                </button>
                <button title="Make Private" v-else type="button" class="btn btn-primary btn-icon" @click="unpublishKeep(keep)">
                    <span class="glyphicon glyphicon glyphicon-eye-close"></span>
                </button>
                <button title="Edit" v-if="!keep.published" type="button" class="btn btn-alt btn-icon" data-toggle="modal" data-target="#edit-keep-modal"
                    @click="setTargetKeep(keep)">
                    <span class="glyphicon glyphicon-pencil"></span>
                </button>
                <button title="Delete" v-if="!keep.published" type="button" class="btn btn-danger btn-icon" @click="removeKeep(keep.id)">
                    <span class="glyphicon glyphicon-trash"></span>
                </button>
            </div>
        </div>
        <div class="row">
            <h2 class="secondary-title">My Vaults</h2>
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

        <div id="edit-keep-modal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Edit Keep</h4>
                    </div>
                    <div class="modal-body">
                        <form id="create-keep-form" class="form">
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
            //this.$store.dispatch('authenticate')
            this.$store.dispatch('getUserKeeps')
            this.$store.dispatch('getUserVaults')
        },
        computed: {
            activeUser() {
                return this.$store.state.activeUser
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
            createVault() {
                this.$store.dispatch('createVault', this.newVault)
            },
            createKeep() {
                this.$store.dispatch('createKeep', this.newKeep)
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