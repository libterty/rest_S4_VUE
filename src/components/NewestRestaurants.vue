<template>
    <b-card title="最新餐廳">
        <b-list-group flush>
            <b-list-group-item
                v-for="restaurant in restaurants"
                :key="restaurant.id"
            >
                <h4>
                    <a href="#">{{restaurant.name}}</a>
                    <small>{{restaurant.Category.name}}</small>
                </h4>
                <p>{{restaurant.description}}</p>{{restaurant.createdAt | fromNow}}
                <hr>
            </b-list-group-item>
        </b-list-group>
    </b-card>
</template>

<script>
import moment from 'moment'

export default {
    name: 'NewestRestaurants',
    filters: {
        fromNow(t) {
            if(!t) return '-';
            return moment(t).fromNow();
        }
    },
    props: {
        restaurants: {
            type: Array,
            required: true
        }
    }
}
</script>