<template>
    <b-container class="py-5">
        <!-- <h2>{{comments}}</h2> -->
        <b-list-group>
            <b-list-group-item
                v-for="comment in comments"
                :key="comment.id"
                class="flex-column align-items-start"
            >
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{comment.User.name}}</h5>
                    <b-button 
                        type="submit"
                        variant="danger"
                        v-if="isAdmin"
                        @click.stop.prevent="handleDeleteButtonClick(comment.id)"
                    >
                        DELETE
                    </b-button>
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
const user = JSON.parse(localStorage.getItem('credit')).user;

export default {
    props: {
        initComments: {
            required: true
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
            comments: this.initComments,
            isAdmin: user.isAdmin || false
        }
    },
    methods: {
        handleDeleteButtonClick(commentId) {
            confirm('Do you want to delete the comment?');
            this.$emit('after-del-comment', commentId)
        }
    },
    watch: {
        initComments: function (updateData) {
            this.comments = updateData
        }
    }
}
</script>