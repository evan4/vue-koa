<template>
  <div class="container">
    <h1 class="h3 mt-3 font-weight-normal text-center">Please sign in</h1>
    <div v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul class="list-unstyled">
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
    <form  @submit.prevent="onSubmit"
    class="form-signin">

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
            id="exampleInputPassword1"
            placeholder="Password">
        </div>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
    <p class="text-danger text-center"
                    v-if="authFailed">Please check your email or password</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {

    return {
      errors: false,
      formData: {
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
      if ( !this.formData.email ) {

        this.errors.push( 'Email required.' );

      }
      if ( !this.formData.password ) {

        this.errors.push( 'Password required.' );

      }
      if ( !this.errors.length ) {

        this.$store.dispatch( 'admin/singin', this.formData );

      }

    },
  },
  destroyed() {

    this.errors = [];
    this.formData = {
      email: '',
      password: '',
    };
    this.$store.commit( 'admin/authFailed', 'reset' );

  },
};
</script>

<style>
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
    }
    .font-weight-normal {
        font-weight: 400!important;
    }
    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }
</style>
