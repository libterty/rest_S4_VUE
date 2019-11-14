<template>
    <b-container class="py-5">
        <NavTabs/>
        <RestaurantsNavPills :categories="categories"/>
        <div class="row">
            <Restaurants 
                v-for="restaurant in restaurants"
                :key="restaurant.id"
                :initialRestaurant="restaurant"
            />
        </div>
        <RestaurantsPagination />
    </b-container>
</template>

<script>
import Request from '../api'
import NavTabs from '../components/NavTabs.vue';
import Restaurants from '../components/Restaurants.vue';
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue';
import RestaurantsPagination from '../components/RestaurantsPagination.vue';
const request = new Request();

export default {
    components: {
        NavTabs,
        Restaurants,
        RestaurantsNavPills,
        RestaurantsPagination
    },
    data() {
        return {
            restaurants: [],
            categories: [],
            res: {},
            error: ''
        }
    },
    async created() {
        try {
            this.res = await request.getRestaurants();
            this.restaurants = this.res.restaurants.map(rest => rest);
            this.categories = this.res.categories.map(cate => cate);
        } catch (error) {
            this.error = error.message;
        }
    },
    async updated() {
        try {
            this.res = await request.getRestaurants(document.location.search);
            this.restaurants = this.res.restaurants.map(rest => rest);
            this.categories = this.res.categories.map(cate => cate);
        } catch (error) {
            this.error = error.message;
        }
    }
}
</script>