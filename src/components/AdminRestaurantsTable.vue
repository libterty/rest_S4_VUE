<template>
    <div>
        <b-table-simple hover small caption-top responsive>
            <b-thead head-variant="dark">
                <b-th colspan="1">#</b-th>
                <b-th colspan="1">Name</b-th>
                <b-th colspan="1">Category</b-th>
                <b-th colspan="3">#</b-th>
            </b-thead>
            <b-tbody>
                <b-tr
                    v-for="restaurant in this.initRestaurants"
                    :key="restaurant.id"
                >
                    <b-td class="text-center">{{restaurant.id}}</b-td>
                    <b-td class="text-center">{{restaurant.name}}</b-td>
                    <b-td class="text-center">{{restaurant.Category.name}}</b-td>
                    <b-td class="text-center">
                        <b-button-group>
                            <b-button :href="'restaurants/'+restaurant.id" variant="info">Show</b-button>
                            <b-button :href="'admin/restaurants/'+restaurant.id+'/edit'" variant="warning">Edit</b-button>
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
        initRestaurants: {
            type: Array
        }
    }
}
</script>