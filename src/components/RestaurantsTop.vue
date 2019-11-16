<template>
    <div>
        <b-container
            v-for="restaurant in restaurants"
            :key="restaurant.id"
            class="py-5"
        >
            <b-card no-body class="overflow-hidden">
                <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img 
                            :src="restaurant.image" 
                            :alt="restaurant.name"
                        ></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body :title="restaurant.name">
                            <b-list-group flush>
                                <b-list-group-item>
                                    <strong>收藏次數 : </strong>
                                    <small>{{restaurant.FavoriteCount | avoidNull}}</small>
                                </b-list-group-item>
                                <b-list-group-item>
                                    {{restaurant.description | shortenDesc}}
                                </b-list-group-item>
                            </b-list-group>
                            <br/>
                            <b-button-group>
                                <b-button 
                                    type="button" 
                                    :href="'/restaurants/'+restaurant.id" 
                                    size="sm" 
                                    variant="primary"
                                >
                                    SHOW
                                </b-button>
                                <b-button 
                                    type="submit"
                                    @click="removeFavorited(restaurant.id)"
                                    size="sm" variant="danger"
                                    v-if="restaurant.isFavorited"
                                >
                                    移除最愛
                                </b-button>
                            </b-button-group>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </b-container>
    </div>
</template>

<script>
import Request from '../api';
const request = new Request();

export default {
    data() {
        return {
            restaurants: [],
            error: ''
        }
    },
    async created() {
        try {
            this.restaurants = await request.getTopRestaurants();
        } catch (error) {
            this.error = 'Something went wrong during create' + error.message;
        }
    },
    async updated() {
        try {
            this.restaurants = await request.getTopRestaurants();
        } catch (error) {
            this.error = 'Something went wrong during create' + error.message;
        }
    },
    filters: {
        avoidNull(num) {
            if (!num) return '0';
            return num;
        },
        shortenDesc(t) {
            if (!t) return '-';
            return t.substring(0, )
        }
    },
    methods: {
        async removeFavorited(rId) {
            await request.deleteFavorite(rId);
        }
    }
}
</script>