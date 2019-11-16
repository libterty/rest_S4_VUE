<template>
    <div>
        <b-form @submit="onSubmit">
            <b-form-group
                class="mb-0"
                label="Leave with some comments : "
                label-for="userComment"
                description="Please input your Comments here (Minimum comments required 15 words)"
            >
                <b-col sm="12">
                    <b-form-textarea
                        id="text"
                        v-model="form.text"
                        placeholder="Place your comments here"
                        :state="form.text.length >= 15"
                        rows="3"
                        max-rows="8"
                    ></b-form-textarea>
                    <b-button
                        variant="primary"
                        type="submit"
                        class="float-left"
                        style="margin-top:0.5em;"
                    >
                        Submit
                    </b-button>
                </b-col>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
import Request from '../api';
const request = new Request();

export default {
    props: {
        initId: {
            required: true
        }
    },
    data() {
        return {
            form: {
                text: '',
                restaurantId: this.initId
            }
        }
    },
    methods: {
        async onSubmit(evt) {
            evt.preventDefault();
            if (!this.form.text) {
                alert('Empty Input');
            } else if (this.form.text.length < 15) {
                alert('Insufficient content, please leave your comment with more then 15 words');
            } else {
                const data = JSON.stringify(this.form);
                const res = await request.postComment(data);
                res.status === 'error' ? alert(res.message) : alert(`Create ${res.status}`);
            }
        }
    }
}
</script>