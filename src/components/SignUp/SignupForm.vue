<template>
  <div>
    <v-container>
      <h1>Create Account</h1>
      <p>Fill the form below to create an account</p>
      <v-form @submit.prevent="handleSubmitForm" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          class="pb-3"
          v-model="name"
          outlined
          dense
          label="Full Name*"
          :rules="namerules"
          required
        ></v-text-field>
        <v-text-field
          class="pb-3"
          v-model="companyName"
          outlined
          dense
          label="Company Name*"
          :rules="companyNamerules"
          required
        ></v-text-field>
        <v-text-field
          class="pb-3"
          v-model="email"
          label="Email*"
          :rules="emailrules"
          required
          outlined
          dense
        ></v-text-field>

        <v-text-field
          :append-icon="newpassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="newpassword ? 'text' : 'password'"
          v-model="password"
          label="Password*"
          outlined
          dense
          hint="At least 8 characters"
          class="input-group--focused pb-3"
          @click:append="newpassword = !newpassword"
        ></v-text-field>

        <v-text-field
          :append-icon="confirmNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min, rules.passwordMatch]"
          :type="confirmNewPassword ? 'text' : 'password'"
          v-model="confirmPassword"
          outlined
          dense
          label="Confirm Password*"
          hint="At least 8 characters"
          class="input-group--focused pb-3"
          @click:append="confirmNewPassword = !confirmNewPassword"
        ></v-text-field>
        <v-checkbox
          class="mt-0 mb-8 ml-12 pb-3"
          color="primary"
          v-model="acceptTerms"
          :rules="[rules.required]"
          hide-details
        >
          <template v-slot:label>
            <span class="black--text">
              I accept the <b>Terms of Use</b> and <b>Privacy Policy.</b>
            </span>
          </template>
        </v-checkbox>

        <v-btn
          :disabled="!valid"
          @click="validate"
          class="ml-12 pa-6 text-md-body-1 text-capitalize"
          width="75%"
          color="primary"
          type="submit"
        >
          Create Account
        </v-btn>

        <p class="text-center mt-3">
          Already have an account?
          <span>
            <router-link to="/login" class="text-decoration-none font-weight-bold">Login</router-link>
          </span>
        </p>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "SignupForm",
  data() {
    return {
      valid: null,
      newpassword: false,
      confirmNewPassword: false,
      acceptTerms: false,

      /* the below rules are for the password to match with confirm password and min-8 characters */

      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        passwordMatch: () =>
          this.password === this.confirmPassword || "Passwords don't match",
      },

      /* the 'namerules' 'companyrules' etc are used to validate the other text-fields */

      name: "",
      namerules: [(v) => !!v || "Full Name is required"],

      companyName: "",
      companyNamerules: [(v) => !!v || "Company Name is required"],
      email: "",
      emailrules: [(v) => !!v || "E-mail is required"],
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    handleSubmitForm() {
      const user = {
        name: this.name,
        companyname: this.companyName,
        email: this.email,
        password: this.password,
      };
      this.registerUser(user);

      /* Clear the form when submit the form data*/
      this.name = "";
      this.companyName = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      this.acceptTerms = false;
      this.$refs.form.resetValidation();
    },
    ...mapActions([
      'registerUser'
    ])
  },
};
</script>
