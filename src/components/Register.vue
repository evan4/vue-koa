<template>
    <div class="container">
    <h1 class="h3 mb-3 font-weight-normal">Sign up</h1>
    <form  @submit.prevent="onSubmit"
    class="form-signin">
        <div v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
        </div>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control"
          placeholder="Email address" required="" autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control"
          placeholder="Password" required="">

        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
    </form>
  </div>
</template>

<script>

export default {
   data(){
      return{
          errors: false,
          formData: {
              email: '',
              password: ''
          }
      }
  },
}
</script>

<style>

</style>
