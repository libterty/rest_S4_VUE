<template>
    <div>
        <b-card bg-variant="light">
            <b-form @submit.prevent="onSubmit()" @reset="onReset">
                <b-form-group
                    label-cols-lg="3"
                    label="Create New Restaurant!!"
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
                            placeholder="Enter restaurant name"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label-cols-sm="3"
                        label="Category :"
                        label-align-sm="right"
                        label-for="categoryId"
                    >
                        <b-form-select
                            id="categoryId"
                            v-model="form.categoryId"
                            :options="this.initCategories"
                            placeholder="Select Category"
                            required
                        ></b-form-select>
                    </b-form-group>

                    <b-form-group
                        label-cols-sm="3"
                        label="Phone Number :"
                        label-align-sm="right"
                        label-for="tel"
                    >
                        <b-form-input
                            id="tel"
                            v-model="form.tel"
                            :state="form.tel.length > 0"
                            placeholder="Enter Restaruant Contact Number"
                            type="text"
                            name="tel"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label-cols-sm="3"
                        label="Address :"
                        label-align-sm="right"
                        label-for="address"
                    >
                        <b-form-input
                            id="address"
                            v-model="form.address"
                            :state="form.address.length > 0"
                            placeholder="Enter Restaurant Address"
                            type="text"
                            name="address"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label-cols-sm="3"
                        label="Opening Hours :"
                        label-align-sm="right"
                        label-for="opening-hours"
                    >
                        <b-form-input
                            id="opening-hours"
                            v-model="form.openingHours"
                            placeholder="Enter Restaurant Opening Hours"
                            type="time"
                            name="opening-hours"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label-cols-sm="3"
                        label="Description :"
                        label-align-sm="right"
                        label-for="description"
                    >
                        <b-form-textarea
                            id="description"
                            v-model="form.description"
                            :state="form.description.length > 0"
                            placeholder="Enter Restaurant Description"
                            type="text"
                            rows="3"
                            max-rows="6"
                            name="description"
                            required
                        ></b-form-textarea>
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
                            placeholder="Place Restaurant Image Here"
                            accept="image/*"
                            name="image"
                        ></b-form-file>
                        <div class="mt-3">Selected Image: {{ form.image ? form.image.name : '' }}</div>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger" style="margin-left: 0.25rem">Reset</b-button>
                </b-form-group>
            </b-form>
        </b-card>
    </div>
</template>

<script>
export default {
    props: {
        initCategories: {
            type: Array
        }
    },
    methods: {
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
        async onSubmit() {
            confirm('Confirm to Create ?');
            const data = JSON.stringify(this.form);
            this.$emit('after-submit-data', data);
        },
        onReset() {
            this.form.name = this.initRestaurant.name,
            this.form.categoryId = this.initRestaurant.Category.id,
            this.form.tel = this.initRestaurant.tel,
            this.form.address = this.initRestaurant.address,
            this.form.openingHours = this.initRestaurant.opening_hours,
            this.form.description = this.initRestaurant.description
        }
    },
    data() {
        return {
            form: {
                name: '',
                categoryId: '',
                tel: '',
                address: '',
                openingHours: '',
                description: '',
                image: null
            }
        }
    }
}
</script>