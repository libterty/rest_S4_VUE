<template>
    <b-container class="py-5">
        <NavTabs/>
        <h1 class="mt-5">
        美食達人
        </h1>
        <hr>
        <div class="row text-center">
            <UsersTop 
                v-for="user in users"
                :key="user.id"     
                :initUser="user"   
            />
        </div>
    </b-container>
</template>

<script>
import NavTabs from '../components/NavTabs.vue';
import UsersTop from '../components/UsersTop.vue';
import Request from '../api';
const request = new Request();

export default {
    components: {
        NavTabs,
        UsersTop
    },
    data() {
        return {
            users: [],
            error: ''
        }
    },
    async created() {
        try {
            this.users = await request.getTopUsers();
        } catch (error) {
            this.error = error.message;
        }
    }
}
</script>