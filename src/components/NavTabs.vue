<template>
    <b-nav tabs justified>
        <b-nav-item
            v-for="tab in tabs"
            :key="tab.id"
            :href="tab.path"
        >
            {{tab.title}}
        </b-nav-item>
    </b-nav>
</template>

<script>
import uuid from 'uuid'

export default {
    data() {
        return {
            tabs: [
                {
                id: uuid(),
                title: '首頁',
                path: '/restaurants'
                },
                {
                id: uuid(),
                title: '最新動態',
                path: '/restaurants/feeds'
                },
                {
                id: uuid(),
                title: 'TOP 10 人氣餐廳',
                path: '/restaurants/top'
                },
                {
                id: uuid(),
                title: '美食達人',
                path: '/users/top'
                }
            ]
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 425px) {
    a.nav-link {
        font-size: small;
    }
}
</style>