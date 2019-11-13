<template>
    <div>
        <b-container class="py-5" fluid>
            <div class="text-center mb-4">
                <h1 class="h3 mb-3 font-weight-normal">
                Sign In
                </h1>
            </div>
            <div>
                <b-form @submit="onSubmit" @reset="onReset">
                    <b-form-group
                        id="email"
                        label="Email address:"
                        label-for="email"
                        description="We'll never share your email with anyone else."
                    >
                        <b-form-input
                        id="email-input"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Enter email"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="password"
                        label="Your Password:"
                        label-for="password"
                        description="Please Input Your Password"
                    >
                        <b-form-input
                        id="password-input"
                        v-model="form.password"
                        type="password"
                        required
                        placeholder="Enter password"
                        ></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger" style="margin-left: 0.25rem">Reset</b-button>
                </b-form>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'SignIn',
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            confirm('Confirm to SignIn ?');
            const data = JSON.stringify(this.form);
            console.log('submit data', data);
        },
        onReset() {
            this.form.email = '',
            this.form.password = ''
        }
    }
}
</script>