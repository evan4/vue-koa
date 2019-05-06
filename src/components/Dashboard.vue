<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>@{{user.role}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  created() {
    this.$store.dispatch('admin/getUsers');
  },
  computed: {
    ...mapGetters('admin', ['users']),
  },
};
</script>

<style>

</style>
