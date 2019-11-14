<template>
    <b-container class="py-5">
        <NavTabs/>
        <h1 class="mt-5">
        首頁 - 餐廳列表
        </h1>
        <div class="row">
            <div class="col-md-6">
                <h3>最新餐廳</h3>
                <NewestRestaurants :restaurants="restaurants"/>
            </div>
            <div class="col-md-6">
                <h3>最新評論</h3>
                <NewestCommments :comments="comments"/>
            </div>
        </div>
    </b-container>
</template>

<script>
import Request from '../api'
import NavTabs from '../components/NavTabs.vue';
import NewestRestaurants from '../components/NewestRestaurants.vue';
import NewestCommments from '../components/NewestComments.vue';
const request = new Request();

export default {
    components: {
        NavTabs,
        NewestRestaurants,
        NewestCommments
    },
    data() {
        return {
            restaurants: [],
            comments: [],
            error: ''
        }
    },
    async created() {
        try {
            this.restaurants = await request.getFeeds();
            this.comments = await request.getComments();
        } catch (error) {
            this.error = error.message;
        }
    }
}
</script>