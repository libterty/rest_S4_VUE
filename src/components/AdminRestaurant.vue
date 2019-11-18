<template>
    <div>
        <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
            <b-col md="6">
                <b-card-img :src="this.initRestaurant.image" :alt="this.initRestaurant.name" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body :title="this.initRestaurant.name" :sub-title="this.initRestaurant.Category.name">
                <b-card-text>
                    <b-list-group flush>
                        <b-list-group-item class="text-left">
                            <strong>Opening Hour : </strong>
                            <small>{{this.initRestaurant.opening_hours}}</small>
                        </b-list-group-item>
                        <b-list-group-item class="text-left">
                            <strong>Tel : </strong>
                            <small>{{this.initRestaurant.tel}}</small>
                        </b-list-group-item>
                        <b-list-group-item class="text-left">
                            <strong>Address : </strong>
                            <small>{{this.initRestaurant.address}}</small>
                        </b-list-group-item>
                    </b-list-group>
                    <br>
                    <p class="card-text mt-2">
                        {{this.initRestaurant.description}}
                    </p>
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
        initRestaurant: {
            type: Object
        }
    }
}
</script>