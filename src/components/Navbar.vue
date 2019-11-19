<template>
    <b-navbar type="dark" variant="dark">
        <b-navbar-brand href="/">餐廳評論網</b-navbar-brand>
        <b-navbar-toggle 
            target="nav-collapse"
        >
            <span class="navbar-toggler-icon" />
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item
                    v-if="user.isAdmin"
                    :href="'/admin'"
                    class="text-white mr-3"
                >
                    <p>管理員後台</p>
                </b-nav-item>
                <b-nav-item 
                    :href="'/users/'+user.id" 
                    class="text-white mr-3"
                >
                    <p>{{user.name | avoidNull}} 您好</p>
                </b-nav-item>
                <b-button
                    v-if="user.id"
                    size="sm"
                    @click.stop.prevent="logOutUser"
                    type="button" 
                    variant="outline-primary my-2 my-sm-0"
                >
                    登出
                </b-button>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import { mapState } from 'vuex';
import router from '../router';
import Request from '../api';
const request = new Request();

export default {
    name: 'Navbar',
    data() {
        return {
            authUser: JSON.parse(localStorage.getItem('credit')) || {},
            user: {}
        }
    },
    async created() {
        try {
            this.user = await request.getCurrentUser();
        } catch (error) {
            throw new Error(error.message);
        }
    },
    methods: {
        async logOutUser() {
            try {
                if (Object.keys(this.authUser) !== 0) {
                    localStorage.clear('credit');
                    router.push('/signin');
                    this.user = {}
                }
            } catch (error) {
                throw new Error(error.message);
            }
        }
    },
    filters: {
        avoidNull(name) {
            if(!name) return '使用者';
            return name;
        }
    },
    computed: {
        ...mapState(['currentUser', 'isAuthenticated'])
    },
    watch: {
        authUser: function(updateData) {
            this.authUser = updateData;
        },
        user: function(updateData) {
            this.user = updateData;
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 425px) {
    p {
        margin: 0;
        margin-top: 1rem;
        font-size: small;
        white-space: nowrap;
    }
}
</style>