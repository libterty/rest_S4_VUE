<template>
    <div class="col-md-6 col-lg-4">
        <b-card-group deck>
            <b-card
                :title="user.name"
                :img-src="user.image"
                :img-alt="user.name"
                img-top
                class="mb-2"
            >
                <span class="badge badge-secondary">
                    追蹤人數 : {{user.FollowerCount}}
                </span>

                <b-card-footer class="mt-3">
                    <b-form v-if="user.isFollowed">
                        <b-button type="submit" variant="danger">移除追蹤</b-button>
                    </b-form>
                    <b-form v-if="!user.isFollowed">
                        <b-button type="submit" variant="success">追蹤</b-button>
                    </b-form>
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
    data() {
        return {
            user: this.initUser
        }
    }
}
</script>