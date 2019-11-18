<template>
    <b-container class="py-5">
        <div v-if="initRestaurant">
            <AdminRestaurant :initRestaurant="initRestaurant" />
        </div>
        <br>
        <br>
        <a href="javascript:history.back()">回上一頁</a>
    </b-container>
</template>

<script>
import AdminRestaurant from '../components/AdminRestaurant.vue';
import Request from '../api';
const request = new Request();

export default {
    components: {
        AdminRestaurant
    },
    data() {
        return {
            initRestaurant: {}
        }
    },
    async created() {
        this.initRestaurant = await request.getAdminRestaurant(document.location.pathname);
    }
}
</script>