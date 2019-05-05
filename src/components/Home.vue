<template>
   <main role="main">

      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Superpowers For Entrepreneurs</h1>
          <p class="lead text-muted"><span class="xlarge-line-break">Consulting.com breaks business down to basic building blocks</span> (like Lego) and tells you how to assemble them for success.</p>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <h1 class="jumbotron-heading">Pictures</h1>
          <div class="row">
            <div class="col-md-4" v-for="(picture, index) in pictures" :key="index">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" alt="pic"
                  :src="`/img/${picture.name}`" data-holder-rendered="true">
              </div>
            </div>
          </div>

          <h1 class="jumbotron-heading">Videos</h1>
          <div class="row">
            
          </div>
          </div>
        </div>
      </div>

    </main>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  created(){
      this.$store.dispatch('pictures/getPictures', {
            limit: 3
        });
  },
  computed: {
      ...mapGetters('pictures', ['pictures'])
  },
};
</script>

<style>
.card-img-top{
  height: 225px; 
  width: 100%; 
  display: block;
}
</style>
