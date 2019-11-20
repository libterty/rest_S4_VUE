<template>
    <div>
        <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-img :src="this.initUser.image | avoidNull" :alt="this.initUser.name | avoidNull" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body :title="this.initUser.name | avoidNull" :sub-title="this.initUser.email | avoidNull">
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
                            <b-button type="button" @click.prevent="setIsShow" variant="info">編輯個人資訊</b-button>
                        </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
            <br>
            <hr>
            <b-row no-gutters v-if="isShow">
                <b-col md="12">
                    <b-form @submit.prevent="onSubmit()" @reset.prevent="onReset">
                        <b-form-group
                            label-cols-lg="2"
                            label="Update Your information"
                            label-size="lg"
                            label-class="font-weight-bold pt-0"
                            class="mb-0"
                        >
                            <b-form-group
                                label-cols-sm="3"
                                label="Name :"
                                label-align-sm="right"
                                label-for="name"
                            >
                                <b-form-input 
                                    id="name"
                                    v-model="form.name"
                                    :state="form.name.length > 0"
                                    type="text"
                                    name="name"
                                    :placeholder="this.initUser.name | avoidNull"
                                    required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                label-cols-sm="3"
                                label="Selet Image :"
                                label-align-sm="right"
                                label-for="image"
                            >
                                <b-form-file
                                    id="image"
                                    @change="onFileChange"
                                    :state="Boolean(form.image)"
                                    :file-name-formatter="formatNames"
                                    :placeholder="this.initUser.image | avoidNull"
                                    accept="image/*"
                                    name="image"
                                ></b-form-file>
                                <div class="mt-3">Selected Image: {{ form.image ? form.image.name : '' }}</div>
                            </b-form-group>
                            <div class="mt-3">
                                <b-button-group>
                                    <b-button type="submit" variant="success">Submit</b-button>
                                    <b-button type="reset" variant="danger">Reset</b-button>
                                    <b-button type="button" @click.prevent="setIsClose" variant="warning">Close</b-button>
                                </b-button-group>
                            </div>
                            <br>
                        </b-form-group>
                    </b-form>
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
        },
        avoidNull(item) {
            if(!item) return 'On Loading';
            return item;
        }
    },
    methods: {
        setIsShow() {
            this.isShow = true;
        },
        setIsClose() {
            this.isShow = false;
        },
        onReset() {
            this.form.name = '';
            this.form.image = null;
        },
        formatNames(files) {
            if (files.length === 1) {
                return files[0].name
            } else {
                return `${files.length} files selected`
            }
        },
        onFileChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0]);
        },
        createImage(file) {
            let reader = new FileReader();
            let vm = this;

            reader.onload = (e) => {
                vm.form.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        onSubmit() {
            const uId = document.location.pathname.replace(/\/users\//, '');
            confirm('Confirm to Change ?');
            if (this.form.name !== '' && this.form.image !== null) {
                const data = JSON.stringify(this.form);
                this.$emit('after-submit-data', uId, data);
            } else {
                alert('Do you forget to input something ?');
            }
        },
    },
    data() {
        return {
            comments: [],
            favoritedRestaurants: [],
            followers: [],
            followings: [],
            isShow: false,
            form: {
                name: '',
                image: null
            }
        }
    },
    created() {
        this.comments = this.initUser.Comments;
        this.favoritedRestaurants = this.initUser.FavoritedRestaurants;
        this.followers = this.initUser.Followers;
        this.followings = this.initUser.Followings;
    },
    watch: {
        initUser: function(updateData) {
            this.initUser = updateData;
        }
    }
}
</script>