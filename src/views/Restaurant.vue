<template>
    <div class="container py-5">
        <RestaurantDetail
            @after-add-Favorite="afterAddFavorite"
            @after-delete-Favorite="afterDeleteFavorite"
        />
    </div>
</template>

<script>
import Request from '../api'
import RestaurantDetail from '../components/RestaurantDetail.vue';
const request = new Request();

export default {
    components: {
        RestaurantDetail
    },
    methods: {
        async afterAddFavorite(rId) {
            await request.postFavorite(rId);
        },
        async afterDeleteFavorite(rId) {
            await request.deleteFavorite(rId);
        }
    }
}
</script>