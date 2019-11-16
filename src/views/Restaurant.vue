<template>
    <div class="container py-5">
        <RestaurantDetail
            @after-add-Favorite="afterAddFavorite"
            @after-delete-Favorite="afterDeleteFavorite"
            @after-add-Like="afterAddLiked"
            @after-delete-Like="afterRemoveLiked"
        />
        <br>
        <br>
        <a href="javascript:history.back()">回上一頁</a>
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
        },
        async afterAddLiked(rId) {
            await request.postLike(rId);
        },
        async afterRemoveLiked(rId) {
            await request.deleteLike(rId);
        }
    }
}
</script>