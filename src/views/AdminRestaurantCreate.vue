<template>
    <b-container class="py-5">
        <div v-if="initCategories">
            <AdminRestaurantCreate :initCategories="initCategories" @after-submit-data="afterSubmitData" />
        </div>
        <br>
        <br>
        <a href="javascript:history.back()">回上一頁</a>
    </b-container>
</template>

<script>
import AdminRestaurantCreate from '../components/AdminRestaurantCreate.vue';
import Request from '../api';
const request = new Request();

export default {
    components: {
        AdminRestaurantCreate
    },
    data() {
        return {
            initCategories: []
        }
    },
    async created() {
        this.initCategories = await request.getAdminCategories();
    },
    methods: {
        async afterSubmitData(data) {
            const res = await request.postAdminRestaurant(data);
            if (res.status === 'success') {
                alert('Create Restaurant Success');
            }
        }
    }
}
</script>