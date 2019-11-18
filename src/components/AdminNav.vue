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
import uuid from 'uuid/v1';


export default {
    data() {
        return {
            tabs: [
                {
                id: uuid(),
                title: 'New Restaurant',
                path: '/admin/restaurants/create'
                },
                {
                id: uuid(),
                title: 'Categories',
                path: '/admin/categories'
                },
                {
                id: uuid(),
                title: 'Users Information',
                path: '/admin/users'
                },
                {
                id: uuid(),
                title: '到餐廳前台',
                path: '/restaurants'
                }
            ]
        }
    }
}
</script>