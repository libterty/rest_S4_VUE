<template>
    <b-nav tabs justified>
        <b-nav-item href="/restaurants" active>
            首頁
        </b-nav-item>
        <b-nav-item href="/restaurants/feeds">
            最新動態
        </b-nav-item>
        <b-nav-item href="/restaurants/top">
            TOP 10 人氣餐廳
        </b-nav-item>
        <b-nav-item href="/users/top">
            美食達人
        </b-nav-item>
    </b-nav>
</template>

<style scoped>
@media screen and (max-width: 425px) {
    a.nav-link {
        font-size: small;
    }
}
</style>