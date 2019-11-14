<template>
    <b-card title="最新評論">
        <b-list-group flush>
            <b-list-group-item
                v-for="comment in comments"
                :key="comment.id"
            >
                <h4>
                    <a href="#">{{comment.User.name}}</a>
                </h4>
                <p>{{comment.text}}</p>{{comment.createdAt | fromNow}}
            </b-list-group-item>
        </b-list-group>
    </b-card>
</template>

<script>
import moment from 'moment'

export default {
    name: 'NewestComments',
    filters: {
        fromNow(t) {
            if(!t) return '-';
            return moment(t).fromNow();
        }
    },
    props: {
        comments: {
            type: Array,
            required: true
        }
    }
}
</script>