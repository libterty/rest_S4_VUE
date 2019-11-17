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
                    v-if="authUser.user.isAdmin"
                    :href="'/admin'"
                    class="text-white mr-3"
                >
                    <p>管理員後台</p>
                </b-nav-item>
                <b-nav-item 
                    :href="'/users/'+authUser.user.id" 
                    class="text-white mr-3"
                >
                    <p>{{authUser.user.name | avoidNull}} 您好</p>
                </b-nav-item>
                <b-button 
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
import router from '../router';
export default {
    name: 'Navbar',
    data() {
        return {
            authUser: JSON.parse(localStorage.getItem('credit')) || {}
        }
    },
    methods: {
        logOutUser() {
            if (this.authUser.token) {
                localStorage.clear('credit');
                router.push('/signin');
            }
        }
    },
    filters: {
        avoidNull(name) {
            if(!name) return '使用者';
            return name;
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