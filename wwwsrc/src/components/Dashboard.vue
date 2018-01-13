<template>
    <div class="home container-fluid text-center">
        <h1>My Keeps</h1>
        <div class="keep col-sm-3" v-for="keep in keeps">
            <h2>{{keep.name}}</h2>
            <h4>{{keep.imageUrl}}</h4>
        </div>
        <h1>My Vaults</h1>
        <div class="vault col-sm-3" v-for="vault in vaults">
            <h2>{{vault.name}}</h2>
            <h4>{{vault.imageUrl}}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Dashboard',
        data() {
            return {

            }
        },
        components: {

        },
        mounted() {
            this.$store.dispatch('authenticate')
            this.$store.dispatch('getUserKeeps', { endpoint: this.activeUser.id })
            this.$store.dispatch('getUserVaults', { endpoint: this.activeUser.id })
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

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .keep {
        border: 1px solid #000;
    }
</style>