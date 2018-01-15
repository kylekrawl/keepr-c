<template>
    <div class="home container-fluid text-center">
        <div class="row">
            <div class="col-sm-12">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#create-vault-modal">New Vault</button>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#create-keep-modal">New Keep</button>
            </div>
        </div>
        <div class="row">
            <h1>My Keeps</h1>
            <div class="keep col-sm-3" v-for="keep in keeps">
                <h2>{{keep.name}}</h2>
                <img class="img-responsive" :src="keep.imageUrl" alt="">
                <button type="button" class="btn btn-danger" @click="removeKeep(keep.id)">Remove</button>
            </div>
        </div>
        <div class="row">
            <h1>My Vaults</h1>
            <div class="vault col-sm-3" v-for="vault in vaults">
                <h2>{{vault.name}}</h2>
                <h4>{{vault.description}}</h4>
                <button type="button" class="btn btn-danger" @click="removeVault(vault.id)">Remove</button>
            </div>
        </div>

        <div id="create-vault-modal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
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
                <!-- Modal content-->
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