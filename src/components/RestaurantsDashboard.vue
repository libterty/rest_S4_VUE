<template>
    <div>
        <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-img :src="restaurant.image" class="round-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body :title="restaurant.name" :sub-title="restaurant.Category.name">
                        <b-list-group flush>
                            <b-list-group-item>
                                <strong>評論數 : </strong>
                                <small>{{restaurant.Comments | arrLength}}</small>
                            </b-list-group-item>
                            <b-list-group-item>
                                <strong>瀏覽次數 : </strong>
                                <small>{{restaurant.viewCounts | avoidNull}}</small>
                            </b-list-group-item>
                            <b-list-group-item>
                                <strong>收藏次數 : </strong>
                                <small>{{restaurant.FavoriteCount | avoidNull}}</small>
                            </b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
import Request from '../api';
const request = new Request();

export default {
    data() {
        return {
            restaurant: {},
            error: ''
        }
    },
    async created() {
        try {
            this.restaurant = await request.getRestaurantDashboard(document.location.pathname);
            console.log('initRestaurant', this.restaurant);
        } catch (error) {
            this.error = 'Something went wrong during create' + error.message;
        }
    },
    filters: {
        arrLength(a) {
            if (!a) return '0';
            return a.length;
        },
        avoidNull(a) {
            if (!a) return '0';
            return a;
        }
    }
}
</script>

<style scoped>
.list-group-item {
    width: 100%;
}
</style>