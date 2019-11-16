<template>
    <div class="col-md-6 col-lg-4">
        <b-card-group deck>
            <b-card
                :title="user.name"
                :img-src="user.image | avoidNull"
                :img-alt="user.name"
                img-top
                class="mb-2"
            >
                <span class="badge badge-secondary">
                    追蹤人數 : {{user.FollowerCount}}
                </span>

                <b-card-footer class="mt-3">
                    <b-button 
                        type="button"
                        @click.stop.prevent="removeFollowing(user.id)"
                        v-if="user.isFollowed"
                        variant="danger"
                    >
                        移除追蹤
                    </b-button>
                    <b-button 
                        type="button"
                        @click.stop.prevent="addFollowing(user.id)"
                        v-if="!user.isFollowed"
                        variant="success"
                    >
                        追蹤
                    </b-button>
                </b-card-footer>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>

export default {
    props: {
        initUser: {
            required: true
        }
    },
    filters: {
        avoidNull(img) {
            if(!img) return '#';
            return img;
        }
    },
    data() {
        return {
            user: this.initUser
        }
    },
    methods: {
        async addFollowing(uId) {
            this.$emit('after-add-following', uId);
        },
        async removeFollowing(uId) {
            this.$emit('after-remove-following', uId);
        }
    }
}
</script>

<style scoped>
img {
    min-height: 348px;
}
</style>