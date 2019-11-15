<template>
    <div>
        <b-form>
            <b-form-group
                class="mb-0"
                label="Leave with some comments : "
                label-for="userComment"
                description="Leave some of your comment for the restaurant"
            >
                <b-col sm="12">
                    <b-form-textarea
                        id="userComment"
                        v-model="userComment"
                        placeholder="Place your comments here"
                        :state="userComment.length >= 15"
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
export default {
    data() {
        return {
            userComment: ''
        }
    }
}
</script>