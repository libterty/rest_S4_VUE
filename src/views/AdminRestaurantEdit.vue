<template>
    <b-container class="py-5">
        <div v-if="initRestaurant && initCategories">
            <AdminRestaurantEdit :initRestaurant="initRestaurant" :initCategories="initCategories" @after-submit-data="afterSubmitData" />
        </div>
        <br>
        <br>
        <a href="javascript:history.back()">回上一頁</a>
    </b-container>
</template>

<script>
import AdminRestaurantEdit from '../components/AdminRestaurantEdit.vue';
import Request from '../api';
const request = new Request();

export default {
    components: {
        AdminRestaurantEdit
    },
    data() {
        return {
            initRestaurant: {},
            initCategories: []
        }
    },
    async created() {
        const url = document.location.pathname.replace(/\/edit/gi, '');
        this.initRestaurant = await request.getAdminRestaurant(url);
        this.initCategories = await request.getAdminCategories();
    },
    methods: {
        async afterSubmitData(data) {
            const uId = document.location.pathname.replace(/\/edit/gi, '').replace(/\/admin/, '');
            const res = await request.putAdminRestaurant(uId, data);
            if (res.status === 'success') {
                const url = document.location.pathname.replace(/\/edit/gi, '');
                this.initRestaurant = await request.getAdminRestaurant(url);
            }
        }
    }
}
</script>