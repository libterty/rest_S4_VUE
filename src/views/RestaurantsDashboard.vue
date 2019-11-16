<template>
    <b-container class="py-5">
        <RestaurantsDashboard />
        <br>
        <br>
        <a href="javascript:history.back()">回上一頁</a>
    </b-container>
</template>

<script>
import RestaurantsDashboard from '../components/RestaurantsDashboard.vue';

export default {
    components: {
        RestaurantsDashboard
    }
}
</script>