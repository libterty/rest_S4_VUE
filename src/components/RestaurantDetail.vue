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
                        <b-list-group-item class="text-left">
                            <strong>opening_hours : </strong>
                            <small>{{restaurant.opening_hours}}</small>
                        </b-list-group-item>
                        <b-list-group-item class="text-left">
                            <strong>(TEL) : </strong>
                            <small>{{restaurant.tel}}</small>
                        </b-list-group-item>
                        <b-list-group-item class="text-left">
                            <strong>Address : </strong>
                            <small>{{restaurant.address}}</small>
                        </b-list-group-item>
                    </b-list-group>
                </b-card-text>
            </b-card>

            <b-card>
                <b-card-text>{{restaurant.description | shortenDesc}} ... </b-card-text>
                <template v-slot:footer>
                    <b-button-group>
                        <b-button :href="'/restaurants/'+restaurant.id+'/dashboard'" variant="primary">DASHBOARD</b-button>
                        <b-button 
                            type="button"
                            @click.stop.prevent="addFavorited(restaurant.id)"
                            size="sm" 
                            variant="success" 
                            v-if="isFavorited === false"
                        >
                            加到最愛
                        </b-button>
                        <b-button 
                            type="button"
                            @click.stop.prevent="removeFavorited(restaurant.id)"
                            size="sm" 
                            variant="danger" 
                            v-if="isFavorited === true"
                        >
                            移除最愛
                        </b-button>
                        <b-button 
                            type="button"
                            @click.stop.prevent="addLiked(restaurant.id)"
                            size="sm" 
                            variant="success" 
                            v-if="isLiked === false"
                        >
                            按讚
                        </b-button>
                        <b-button 
                            type="button"
                            @click.stop.prevent="removeLiked(restaurant.id)"
                            size="sm" 
                            variant="danger" 
                            v-if="isLiked === true"
                        >
                            移除讚
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
        <div v-if="restaurantId">
            <CreateComment :initId="restaurantId"/>
        </div>
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
            initComments: [],
            restaurantId: null
        }
    },
    async created() {
        try {
            this.obj = await request.getRestaurant(document.location.pathname);
            this.restaurant = this.obj.restaurant;
            this.isFavorited = this.obj.isFavorited;
            this.isLiked = this.obj.isLiked;
            this.initComments = this.obj.restaurant.Comments;
            this.restaurantId = this.obj.restaurant.id;
        } catch (error) {
            this.error = 'Somthing went wrong during create:' + error.message;
        }
    },
    methods: {
        async afterDelComment(commentId) {
            await request.deleteComment(commentId);
            this.initComments = this.initComments.filter(c => c.id !== commentId);
        },
        addFavorited(rId) {
            this.$emit('after-add-Favorite', rId);
        },

        removeFavorited(rId) {
            this.$emit('after-delete-Favorite', rId);
        },
        addLiked(rId) {
            this.$emit('after-add-Like', rId);
        },
        removeLiked(rId) {
            this.$emit('after-delete-Like', rId);
        }
    },
    async updated() {
        try {
            this.obj = await request.getRestaurant(document.location.pathname);
            this.initComments = this.obj.restaurant.Comments;
        } catch (error) {
            this.error = 'Somthing went wrong during update:' + error.message;
        }
    },
    watch: {
        obj: function(updateData) {
            this.isFavorited = updateData.isFavorited;
            this.isLiked = updateData.isLiked;
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