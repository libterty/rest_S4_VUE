<template>
    <div v-if="restaurant.name">
        <b-card-group deck>
            <b-card
                :title="restaurant.name"
                :sub-title="restaurant.Category.name"
                :img-src="restaurant.image"
                img-alt="restaurant image"
            >
                <b-card-text>
                    <b-list-group>
                        <b-list-group-item>opening_hours : {{restaurant.opening_hours}}</b-list-group-item>
                        <b-list-group-item>(TEL) : {{restaurant.tel}}</b-list-group-item>
                        <b-list-group-item>Address : {{restaurant.address}}</b-list-group-item>
                    </b-list-group>
                </b-card-text>
            </b-card>

            <b-card>
                <b-card-text>{{restaurant.description | shortenDesc}} ... </b-card-text>
                <template v-slot:footer>
                    <b-button-group>
                        <b-button href="#" variant="primary">DASHBOARD</b-button>
                        <b-button type="button" size="sm" variant="success" v-if="isFavorited === false">
                            加到最愛
                        </b-button>
                        <b-button type="button" size="sm" variant="danger" v-if="isFavorited === true">
                            移除最愛
                        </b-button>
                        <b-button type="button" size="sm" variant="success" v-if="isLiked === false">
                            <i class="far fa-heart"></i>
                        </b-button>
                        <b-button type="button" size="sm" variant="danger" v-if="isLiked === true">
                            <i class="fas fa-heart"></i>
                        </b-button>
                    </b-button-group>
                </template>
            </b-card>
        </b-card-group>
        <hr>
        <div>
            <RestaurantComments :initComments="initComments" @after-del-comment="afterDelComment"/>
        </div>
        <hr>
        <CreateComment/>
    </div>
</template>

<script>
import Request from '../api';
import RestaurantComments from '../components/RestaurantComments.vue';
import CreateComment from '../components/CreateComment.vue';
const request = new Request();

export default {
    components: {
        RestaurantComments,
        CreateComment
    },
    props: {
        initRestaurant: {
            type: Object
        }
    },
    filters: {
        shortenDesc(d) {
            if (!d) return 'No description yet';
            return d.substring(0, 300);
        },
        init(text) {
            if (text === undefined) return 'Loading ~~';
            return text;
        }
    },
    data() {
        return {
            obj: {},
            error: '',
            isFavorited: Boolean,
            isLiked: Boolean,
            restaurant: {},
            initComments: []
        }
    },
    async created() {
        try {
            this.obj = await request.getRestaurant(document.location.pathname);
            this.restaurant = this.obj.restaurant;
            this.isFavorited = this.obj.isFavorited;
            this.isLiked = this.obj.isLiked;
            this.initComments = this.obj.restaurant.Comments;
        } catch (error) {
            this.error = error.message;
        }
    },
    methods: {
        async afterDelComment(commentId) {
            await request.deleteComment(commentId);
            this.initComments = this.initComments.filter(c => c.id !== commentId);
            console.log('this.initComments', this.initComments);
        }
    }
}
</script>

<style scoped>
a.btn.btn-primary {
    border-radius: 5px !important;
}
button.btn.btn-success.btn-sm {
    margin-left: 0.5rem;
    border-radius: 5px;
}
</style>