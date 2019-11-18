<template>
    <div>
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
                            <b-button :href="'categories/'+item.value" variant="warning">Edit</b-button>
                            <b-button variant="danger">Delete</b-button>
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
            items: []
        }
    },
    created() {
        this.items = this.initCategories.sort((a, b) => a.value - b.value);
    }
}
</script>