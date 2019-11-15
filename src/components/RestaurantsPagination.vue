<template>
    <div class="overflow-auto">
        <b-pagination-nav :link-gen="linkGen" :number-of-pages="length" :base-url="BASE_URL" align="center" use-router></b-pagination-nav>
    </div>
</template>

<script>
import config from '../../config';
import Request from '../api';
const request = new Request();

export default {
    name: 'RestaurantsPagination',
    data() {
        return {
            length: 1,
            obj: {},
            BASE_URL: config.REST_BASE_URL
        }
    },
    async created() {
        this.obj = await request.getRestaurants();
        this.length = this.obj.totalPage.map(p => p).length;
    },
    methods: {
        linkGen(pageNum) {
            return pageNum === 1 ? '' : `?page=${pageNum}`
        }
    }
}
</script>