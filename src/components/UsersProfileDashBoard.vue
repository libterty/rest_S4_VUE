<template>
    <div>
        <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-img :src="this.initUser.image" :alt="this.initUser.name" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body :title="this.initUser.name" :sub-title="this.initUser.email">
                    <b-card-text>
                        <b-list-group>
                            <b-list-group-item class="text-left" disabled>
                                <strong>{{comments | arrLength}}</strong>
                                <small> 則評論</small>
                            </b-list-group-item>
                            <b-list-group-item class="text-left" disabled>
                                <strong>{{favoritedRestaurants | arrLength}}</strong>
                                <small> 則收藏</small>
                            </b-list-group-item>
                            <b-list-group-item class="text-left" disabled>
                                <strong>{{followers | arrLength}}</strong>
                                <small> followers(追蹤者)</small>
                            </b-list-group-item>
                            <b-list-group-item class="text-left" disabled>
                                <strong>{{followings | arrLength}}</strong>
                                <small> followings(追蹤者)</small>
                            </b-list-group-item>
                        </b-list-group>
                        <br>
                        <b-button type="button" :href="'/users/'+this.initUser.id+'/edit'" variant="info">編輯個人資訊</b-button>
                    </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
export default {
    props: {
        initUser: {
            type: Object
        }
    },
    filters: {
        arrLength(arr) {
            if(!arr || arr.length === 0) return '0';
            return arr.length;
        }
    },
    data() {
        return {
            comments: [],
            favoritedRestaurants: [],
            followers: [],
            followings: []
        }
    },
    created() {
        this.comments = this.initUser.Comments;
        this.favoritedRestaurants = this.initUser.FavoritedRestaurants;
        this.followers = this.initUser.Followers;
        this.followings = this.initUser.Followings;
    }
}
</script>