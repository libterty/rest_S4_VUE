<template>
    <div class="col-md-6 col-lg-4 ">
        <b-card-group deck>
            <b-card
                :title="restaurant.name"
                :img-src="restaurant.image"
                :img-alt="restaurant.name"
                img-top
                class="mb-4"
            >
                <router-link :to="'/restaurants/'+restaurant.id">Visit {{restaurant.name}}</router-link>
                <b-badge class="text-center" variant="light">
                    <span class="sr-only">
                        {{restaurant.Category.name}}
                    </span>
                </b-badge>
                <b-card-text>{{restaurant.description | shortenDesc}}</b-card-text>

                <b-card-footer class="mt-3">
                    <b-button-group>
                        <b-button 
                            type="button"
                            @click="addFavorited(restaurant.id)" 
                            size="sm" 
                            variant="success" 
                            v-if="restaurant.isFavorited"
                        >
                            加到最愛
                        </b-button>
                        <b-button 
                            type="button" 
                            @click="removeFavorited(restaurant.id)" 
                            size="sm" 
                            variant="danger" 
                            v-if="!restaurant.isFavorited"
                        >
                            移除最愛
                        </b-button>
                        <b-button type="button" size="sm" variant="success" v-if="restaurant.isLiked">
                            <i class="far fa-heart"></i>
                        </b-button>
                        <b-button type="button" size="sm" variant="danger" v-if="!restaurant.isLiked">
                            <i class="fas fa-heart"></i>
                        </b-button>
                    </b-button-group>
                </b-card-footer>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
import Request from '../api';
const request = new Request();

export default {
    name: 'Restaurants',
    filters: {
        shortenDesc(d) {
            if (!d) return 'No description yet';
            return d.substring(0, 50);
        }
    },
    props: {
        initialRestaurant: {
            required: true
        }
    },
    data() {
        return {
            restaurant: this.initialRestaurant
        }
    },
    methods: {
        async addFavorited(rId) {
            const res = await request.postFavorite(rId);
            console.log('main page add Favorite res', res);
        },

        async removeFavorited(rId) {
            const res = await request.deleteFavorite(rId);
            console.log('main page remove Favorite res', res);
        }
    }
}
</script>

<style scoped>
button {
    margin-left: 0.25rem;
}
</style>