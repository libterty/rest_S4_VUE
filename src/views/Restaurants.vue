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
    </b-container>
</template>

<script>
import Request from '../api'
import NavTabs from '../components/NavTabs.vue';
import Restaurants from '../components/Restaurants.vue';
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'; 
const request = new Request();

export default {
    components: {
        NavTabs,
        Restaurants,
        RestaurantsNavPills
    },
    data() {
        return {
            restaurants: [],
            categories: [],
            error: ''
        }
    },
    async created() {
        try {
            this.restaurants = await request.getRestaurants();
            this.categories = await request.getCategories();
        } catch (error) {
            this.error = error.message;
        }
    }
}
</script>