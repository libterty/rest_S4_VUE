<template>
    <b-container class="py-5">
        <NavTabs/>
        <h1 class="mt-5">
            Top10 人氣餐廳
        </h1>
        <RestaurantsTop/>
    </b-container>
</template>

<script>
import NavTabs from '../components/NavTabs.vue';
import RestaurantsTop from '../components/RestaurantsTop'

export default {
    components: {
        NavTabs,
        RestaurantsTop
    }
}
</script>