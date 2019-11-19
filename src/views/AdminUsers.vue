<template>
    <b-container class="py-5">
        <h1>餐廳後台</h1>
        <AdminNav/>
        <b-container class="py-5" v-if="initUsers">
            <AdminUsersTable 
                :initUsers="initUsers"
                @after-submit-IsAdmin="afterSubmitIsAdmin"
            />
        </b-container>
        <br>
        <br>
        <a href="javascript:history.back()">回上一頁</a>
    </b-container>
</template>

<script>
import AdminNav from '../components/AdminNav.vue';
import AdminUsersTable from '../components/AdminUsersTable.vue';
import Request from '../api';
const request = new Request();

export default {
    components: {
        AdminNav,
        AdminUsersTable
    },
    data() {
        return {
            initUsers: []
        }
    },
    async created() {
        const res = await request.getAdminUsers();
        this.initUsers = res.sort((a, b) => a.id - b.id);
    },
    methods: {
        async afterSubmitIsAdmin(cId, isAdmin) {
            const res = await request.putAdminUser(cId, isAdmin);
            if (res.status === 'success') {
                const res = await request.getAdminUsers();
                this.initUsers = res.sort((a, b) => a.id - b.id);
            }
        }
    }
}
</script>