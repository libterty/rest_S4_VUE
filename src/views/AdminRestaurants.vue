<template>
    <b-container class="py-5">
        <h1>餐廳後台</h1>
        <AdminNav/>
        <b-container class="py-5" v-if="initRestaurants">
            <AdminRestaurantsTable 
                :initRestaurants="initRestaurants"
                @after-click-delete="afterClickDelete"
            />
        </b-container>
    </b-container>
</template>

<script>
import AdminNav from '../components/AdminNav.vue';
import AdminRestaurantsTable from '../components/AdminRestaurantsTable.vue';
import Request from '../api';
const request = new Request();

export default {
    components: {
        AdminNav,
        AdminRestaurantsTable
    },
    data() {
        return {
            initRestaurants: []
        }
    },
    async created() {
        const res = await request.getAdminRestaurants();
        this.initRestaurants = res.sort((a, b) => a.id - b.id);
    },
    methods: {
        async afterClickDelete(rId) {
            const res = await request.deleteAdminRestaurant(rId);
            if (res.status === 'success') {
                const res = await request.getAdminRestaurants();
                this.initRestaurants = res.sort((a, b) => a.id - b.id);
            }
        }
    }
}
</script>