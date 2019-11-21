<template>
    <b-container class="py-5">
        <div v-if="initUser">
            <UsersProfileDashBoard 
                :initUser="initUser"
                @after-submit-data="afterSubmitData"
            />
        </div>
        <br>
        <br>
        <a href="javascript:history.back()">回上一頁</a>
    </b-container>
</template>

<script>
import UsersProfileDashBoard from '../components/UsersProfileDashBoard.vue';
import Request from '../api';
const request = new Request();

export default {
    components: {
        UsersProfileDashBoard
    },
    data() {
        return {
            initUser: {}
        }
    },
    async created() {
        const uId = document.location.pathname.replace(/\/users\//, '');
        const res = await request.getUser(uId);
        this.initUser = res.profile;
    },
    methods: {
        async afterSubmitData(uId, data, file) {
            const res = await request.putUser(uId, data, file);
            console.log('server res', res);
            if (res.status === 'success') {
                const res = await request.getUser(uId);
                this.initUser = res.profile;
            }
        }
    }
}
</script>