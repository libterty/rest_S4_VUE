<template>
    <div>
        <b-container class="py-5">
            <div class="text-center mb-4">
                <h1 class="h3 mb-3 font-weight-normal">
                Sign Up
                </h1>
            </div>
            <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group
                    id="name"
                    label="Username :"
                    label-for="name"
                    description="We are glad if you are going to join us"
                >
                    <b-form-input
                        id="name-input"
                        v-model="form.name"
                        type="text"
                        required
                        placeholder="Enter username"
                        ></b-form-input>
                </b-form-group>

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

                <b-form-group
                    id="passwordCheck"
                    label="Confirm your password :"
                    label-for="passwordCheck"
                    description="Please confirm Your Password"
                >
                    <b-form-input
                        id="passwordCheck-input"
                        v-model="form.passwordCheck"
                        type="password"
                        required
                        placeholder="Confirm your Password"
                    ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger" style="margin-left: 0.25rem">Reset</b-button>
            </b-form>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                passwordCheck: ''
            }
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            confirm('Confirm to SignIn ?');
            const data = JSON.stringify(this.form);
            console.log('data', data);
        },
        onReset() {
            this.form.name = '',
            this.form.email = '',
            this.form.password = '',
            this.form.passwordCheck = ''
        }
    }
}
</script>