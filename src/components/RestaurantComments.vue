<template>
    <b-container class="py-5">
        <h2>所有評論</h2>
        <b-list-group>
            <b-list-group-item
                v-for="comment in comments"
                :key="comment.id"
                class="flex-column align-items-start"
            >
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{comment.User.name}}</h5>
                    <b-button type="submit" variant="danger" v-if="isAdmin">DELETE</b-button>
                </div>
                <div class="d-flex w-100 align-items-start">
                    <p class="mb-1" align-self="start">{{comment.text}}</p>
                </div>
                <div class="d-flex w-100 align-items-start">
                    <small class="text-muted"> - {{comment.createdAt | fromNow}}</small>
                </div>
            </b-list-group-item>
        </b-list-group>
    </b-container>
</template>

<script>
import moment from 'moment'

export default {
    // Set isAdmin default as false , waiting API laster on
    props: {
        initComments: {
            type: Array,
            required: true,
            isAdmin: false
        }
    },
    filters: {
        fromNow(t) {
            if(!t) return '-';
            return moment(t).fromNow();
        }
    },
    data() {
        return {
            comments: this.initComments
        }
    }
}
</script>