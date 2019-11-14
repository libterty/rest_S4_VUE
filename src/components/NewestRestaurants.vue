<template>
    <b-card title="最新餐廳">
        <h1>{{title}}</h1>
        <b-list-group flush>
            <b-list-group-item
                v-for="feed in feeds"
                :key="feed.id"
            >
                <h4>
                    <a href="#">{{feed.name}}</a>
                    <small>{{feed.Category.name}}</small>
                </h4>
                <p>{{feed.description}}</p>
                <hr>
            </b-list-group-item>
        </b-list-group>
    </b-card>
</template>

<script>
import Request from '../api';
const request = new Request();

export default {
    name: 'NewestRestaurants',
    data() {
        return {
            title: process.env.TOKEN,
            feeds: [],
            error: ''
        }
    },
    async created() {
        try {
            this.feeds = await request.getFeeds();
        } catch (error) {
            this.error = error.message;
        }
    }
}
</script>