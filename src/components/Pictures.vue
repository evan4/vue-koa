<template>
    <div class="container">
        <h1 class=" text-center">Pictures</h1>
        <div class="row">
        <div class="col-lg-4 col-md-6" v-for="(picture, index) in pictures" :key="index">
            <div class="card mb-4 box-shadow">
            <img class="card-img-top img-fluid img-thumbnail" alt="pic"
                :src="`/img/${picture.name}`" data-holder-rendered="true">
            </div>
        </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  created() {

    this.$store.dispatch( 'pictures/getAllPictures' );

  },
  computed: {
    ...mapGetters( 'pictures', [ 'pictures' ] ),
  },
};
</script>

<style>
   
</style>
