<template>
    <div class="home container-fluid text-center">
        <h1>{{activeVault.name}}</h1>
        <h3>{{activeVault.description}}</h3>
        <div class="keep col-sm-3" v-for="keep in keeps">
            <h2>{{keep.name}}</h2>
            <img class="img-responsive" :src="keep.imageUrl" alt="">
            <button type="button" class="btn btn-danger" @click="removeKeepFromVault(keep.id, activeVault.id)"><span class="glyphicon glyphicon-trash"></span></button>
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
            keeps() {
                return this.$store.state.keeps
            }
        },
        methods: {
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