<template>
    <b-container class="py-5">
        <div v-if="initUser">
            <UsersProfileDashBoard :initUser="initUser" />
        </div>
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
        this.initUser = res.profile
    }
}
</script>