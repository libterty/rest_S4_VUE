<template>
    <b-container class="py-5">
        <NavTabs/>
        <h1 class="mt-5">
            首頁 - 餐廳列表
        </h1>
        <div class="row">
            <Restaurants 
                v-for="restaurant in restaurants"
                :key="restaurant.id"
                :initialRestaurant="restaurant"
            />
        </div>
    </b-container>
</template>

<script>
import Request from '../api'
import NavTabs from '../components/NavTabs.vue';
import Restaurants from '../components/Restaurants.vue'
const request = new Request();

export default {
    components: {
        NavTabs,
        Restaurants
    },
    data() {
        return {
            restaurants: [],
            error: ''
        }
    },
    async created() {
        try {
            this.restaurants = await request.getRestaurants();
            console.log('this.rest', this.restaurants)
        } catch (error) {
            this.error = error.message;
        }
    }
}
</script>