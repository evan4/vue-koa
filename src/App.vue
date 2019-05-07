<template>
  <div id="app">
     <b-navbar toggleable="lg" type="dark" variant="info">
    <router-link class="navbar-brand" to="/">
      <img src="/img/consulting.com_logo@2x.png" alt="logo">
    </router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>

        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <li class="nav-item" v-if="!email">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item" v-if="!email">
          <router-link class="nav-link" to="/register">Singup</router-link>
        </li>
        <li class="nav-item" v-if="email">
          <a href="#" class="nav-link router-link-exact-active router-link-active"
            @click.prevent="logoutuser">Logout</a>
        </li>
        <li class="nav-item" v-if="email">
          <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
        </li>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
      ...mapGetters('admin', ['email'])
  },
  methods: {
      logoutuser(){
          this.$store.commit('admin/logoutuser');
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar-brand{
  img{
      width: 159px;
  }
}
</style>
