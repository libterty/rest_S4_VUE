<template>
    <div>
        <div>
            <b-form v-if="isCreate" @submit.stop.prevent="onSubmitCreate">
                <b-form-input v-model="form.name" placeholder="Create New Category"></b-form-input>
                <b-button type="submit" variant="success">Submit</b-button>
                <b-button type="button" variant="warning" @click.prevent="closeWindow">Close</b-button>
            </b-form>
            <b-form v-if="isEdit" @submit.stop.prevent="onSubmitEdit(editItem.value)">
                <b-form-input v-model="form.name" :placeholder="'Edit ' + editItem.text"></b-form-input>
                <b-button type="submit" variant="success">Submit</b-button>
                <b-button type="button" variant="info" @click.prevent="setCreate">Create New Category</b-button>
                <b-button type="button" variant="warning" @click.prevent="closeWindow">Close</b-button>
            </b-form>
        </div>
        <b-table-simple hover small caption-top responsive>
            <b-thead head-variant="dark">
                <b-th colspan="1">#</b-th>
                <b-th colspan="1">Category Name</b-th>
                <b-th colspan="2">#</b-th>
            </b-thead>
            <b-tbody>
                <b-tr
                    v-for="item in this.initCategories"
                    :key="item.value"
                >
                    <b-td class="text-center">{{item.value}}</b-td>
                    <b-td class="text-center">{{item.text}}</b-td>
                    <b-td class="text-center">
                        <b-button-group>
                            <b-button :href="'categories/'+item.value" variant="warning" @click.prevent="setEdit(item.value)">Edit</b-button>
                            <b-button variant="danger" @click.stop.prevent="onClickDelete(item.value)">Delete</b-button>
                        </b-button-group>
                    </b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
    </div>
</template>

<script>
export default {
    props: {
        initCategories: {
            type: Array
        }
    },
    data() {
        return {
            items: [],
            isCreate: false,
            isEdit: false,
            editItem: {},
            form: {
                name
            }
        }
    },
    created() {
        this.items = this.initCategories.sort((a, b) => a.value - b.value);
    },
    methods: {
        setEdit(cId) {
            const data = this.initCategories.filter(i => i.value === cId);
            if (data.length === 1) {
                this.editItem = data[0];
                this.isEdit = true;
            }
        },
        setCreate() {
            this.isEdit = false;
            this.isCreate = true;
        },
        closeWindow() {
            this.isEdit ? this.isEdit = false : this.isCreate = false;
        },
        onSubmitEdit(cId) {
            const data = JSON.stringify(this.form);
            this.$emit('after-submit-edit', data, cId);
            this.isEdit = false;
            this.form.name = '';
        },
        onSubmitCreate() {
            const data = JSON.stringify(this.form);
            this.$emit('after-submit-create', data);
            this.isCreate = false;
            this.form.name = '';
        },
        onClickDelete(cId) {
            this.$emit('after-click-delete', cId);
        }
    },
    watch: {
        initCategories: function(updateData) {
            this.initCategories = updateData;
        }
    }
}
</script>