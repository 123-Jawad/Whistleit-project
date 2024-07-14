<template>
  <div>
    <v-container>
      <h1 class="font-weight-bold pt-14">Log in</h1>
      <p class="mt-2">Enter your Credential to proceed</p>
      <v-form
        ref="form"
        @submit.prevent="handleFormSubmit"
        class="mt-8"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          class="pb-3"
          v-model="email"
          label="Email Address*"
          :rules="emailrules"
          required
          outlined
          dense
        ></v-text-field>
        <v-text-field
          :append-icon="password ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="password ? 'text' : 'password'"
          v-model="Password"
          label="Password*"
          outlined
          dense
          hint="At least 8 characters"
          class="input-group--focused"
          @click:append="password = !password"
        ></v-text-field>
        <v-checkbox
          class="mb-8 mt-0 pb-3"
          color="primary"
          value="primary"
          hide-details
        >
          <template v-slot:label>
            <span>Remember Me</span>
          </template>
        </v-checkbox>
        <v-btn
          :disabled="!valid"
          @click="validate"
          class="ml-12 pa-6 text-md-body-1 text-capitalize"
          width="75%"
          color="primary"
          type="submit"
          >Create Account</v-btn
        >
        <p class="text-center mt-3">
          Don't have an account?
          <span>
            <router-link to="/" class="text-decoration-none font-weight-bold"
              >Sign Up?</router-link
            >
          </span>
        </p>
      </v-form>
      <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        :color="snackbarColor"
        dense
        right
        top
      >
        {{ snackbarMessage }}
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: null,
      email: "",
      emailrules: [(v) => !!v || "E-mail is required"],
      Password: "",
      password: false,
      snackbar: false,
      snackbarMessage: "",
      snackbarColor: "primary",
      timeout: 6000,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    /**
     * this below handlformsubmit handle the form submission dispatch the
     * loginUser action here to check the email and password of login user
     * if it match with the success that return from login user then this 
     * will redirected the dashboard
     */
    async handleFormSubmit() {
      try {
        const response = await this.$store.dispatch("loginUser", {
          email: this.email,
          Password: this.Password,
        });
        if (response === "success") {
          this.$router.push({ name: "dashboard" });
        } else {
          this.showSnackbar("Invalid email or password", "error");
        }
      } catch (error) {
        this.showSnackbar("An error occurred. Please try again.", "error");
      }
    },
    showSnackbar(message, color) {
      this.snackbarMessage = message;
      this.snackbarColor = color;
      this.snackbar = true;
    },
  },
};
</script>

<style scoped></style>

