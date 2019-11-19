<template>
    <b-container class="py-5">
        <h1>餐廳後台</h1>
        <AdminNav />
        <b-container class="py-5">
            <AdminCategories 
                :initCategories="initCategories"
                @after-submit-edit="afterSubmitEdit"
                @after-submit-create="afterSubmitCreate"
                @after-click-delete="afterClickDelete"
            />
        </b-container>
        <br>
        <br>
        <a href="javascript:history.back()">回上一頁</a>
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
    },
    methods: {
        async afterSubmitEdit(data, cId) {
            const res = await request.putAdminCategory(data, cId);
            if (res.status === 'success') {
                const res = await request.getAdminCategories();
                this.initCategories = res.sort((a, b) => a.value - b.value);
            }
        },
        async afterSubmitCreate(data) {
            const res = await request.postAdminCategory(data);
            if (res.status === 'success') {
                const res = await request.getAdminCategories();
                this.initCategories = res.sort((a, b) => a.value - b.value);
            }
        },
        async afterClickDelete(cId) {
            const res = await request.deleteAdminCategory(cId);
            if (res.status === 'success') {
                const res = await request.getAdminCategories();
                this.initCategories = res.sort((a, b) => a.value - b.value);
            }
        }
    }
}
</script>