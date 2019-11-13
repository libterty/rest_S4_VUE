<template>
    <b-navbar type="dark" variant="dark">
        <b-navbar-brand href="#">餐廳評論網</b-navbar-brand>
        <b-navbar-toggle 
            target="nav-collapse"
        >
            <span class="navbar-toggler-icon" />
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item :href="'#'" class="text-white mr-3"><p>管理員後台</p></b-nav-item>
                <b-nav-item :href="'#'" class="text-white mr-3"><p>使用者 您好</p></b-nav-item>
                <b-button size="sm" type="button" variant="outline-primary my-2 my-sm-0">登出</b-button>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navbar'
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