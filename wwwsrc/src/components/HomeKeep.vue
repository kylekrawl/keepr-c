<template>
    <div class="keep col-sm-4 col-md-3 col-lg-2 well">
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
    </div>
</template>

<script>
    export default {
        name: 'HomeKeep',
        props: ["keep"],
        data() {
            return {

            }
        },
        components: {

        },
        mounted() {

        },
        computed: {

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
                this.$store.dispatch('editKeep', { data: updatedKeep, id: keep.id })
            },
            viewKeep(keep) {
                this.getActiveKeep(keep.id)
                this.incrementKeepViews(keep)
            },
            vaultAddView(keep) {
                this.getActiveKeep(keep.id)
            },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .keep {
        border: 1px solid #000;
    }
</style>