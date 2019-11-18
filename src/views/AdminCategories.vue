<template>
    <b-container class="py-5">
        <h1>餐廳後台</h1>
        <AdminNav />
        <b-container class="py-5">
            <AdminCategories :initCategories="initCategories" />
        </b-container>
    </b-container>
</template>

<script>
import AdminNav from '../components/AdminNav.vue';
import AdminCategories from '../components/AdminCategories.vue';
import Request from '../api';
const request = new Request();

export default {
    components: {
        AdminNav,
        AdminCategories
    },
    data() {
        return {
            initCategories: []
        }
    },
    async created() {
        const res = await request.getAdminCategories();
        this.initCategories = res.sort((a, b) => a.value - b.value);
    }
}
</script>