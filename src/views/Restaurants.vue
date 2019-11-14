<template>
    <b-container class="py-5">
        <NavTabs/>
        <h1 class="mt-5">
        首頁 - 餐廳列表
        </h1>
        <div class="row">
            <div class="col-md-6">
                <h3>最新餐廳</h3>
                <NewestRestaurants/>
            </div>
            <div class="col-md-6">
                <h3>最新評論</h3>
            </div>
        </div>
    </b-container>
</template>

<script>
import NavTabs from '../components/NavTabs.vue';
import NewestRestaurants from '../components/NewestRestaurants.vue';

export default {
    components: {
        NavTabs,
        NewestRestaurants
    }
}
</script>