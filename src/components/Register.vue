<template>
    <div class="container">
    <h1 class="h3 mt-3 font-weight-normal text-center">Sign up</h1>
    <form  @submit.prevent="onSubmit"
    class="form-signin">
        <div v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
        </div>
        <div class="form-group">
          <input type="text"
            v-model.trim="formData.name"
            class="form-control"
            placeholder="Name">
        </div>
        <div class="form-group">
          <input type="email"
            v-model.trim="formData.email"
            class="form-control"
            placeholder="Enter email">
        </div>
        <div class="form-group">
          <input type="password"
            v-model.trim="formData.password"
            class="form-control"
            placeholder="Password">
        </div>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
    </form>

    <p class="text-danger"
                    v-if="authFailed">Something is goes wrong</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {

    return {
      errors: false,
      formData: {
        name: '',
        email: '',
        password: '',
      },
    };

  },
  computed: {
    ...mapGetters( 'admin', [ 'authFailed' ] ),
  },
  methods: {
    onSubmit() {

      this.errors = [];
      if ( !this.formData.name ) {

        this.errors.push( 'Name required.' );

      }
      if ( !this.formData.email ) {

        this.errors.push( 'Email required.' );

      }
      if ( !this.formData.password ) {

        this.errors.push( 'Password required.' );

      }
      if ( !this.errors.length ) {

        this.$store.dispatch( 'admin/singup', this.formData );

      }

    },
  },
  destroyed() {

    this.errors = [];
    this.formData = {
      name: '',
      email: '',
      password: '',
    };
    this.$store.commit( 'admin/authFailed', 'reset' );

  },
};
</script>

<style>

</style>
