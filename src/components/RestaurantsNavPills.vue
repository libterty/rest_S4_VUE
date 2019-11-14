<template>
    <div>
        <b-card title="nav-pill" no-body>
            <b-card-header header-tag="nav">
                <b-nav card-header tabs>
                    <b-nav-item href="/restaurants" :active="path === ''">
                        全部
                    </b-nav-item>
                    <b-nav-item
                        v-for="category in categories"
                        :key="category.id"
                        :href="'?categoryId='+category.id"
                        :active="isActive(category.id)"
                    >
                        {{category.name}}
                    </b-nav-item>
                </b-nav>
            </b-card-header>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'RestaurantsNavPills',
    props: {
        categories: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            path: document.location.search
        }
    },
    methods: {
        isActive(id) {
            if (!document.location.search) return false;
            if (document.location.search.indexOf(id) > 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>