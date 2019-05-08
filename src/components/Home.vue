<template>
   <main role="main">

      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Superpowers For Entrepreneurs</h1>
          <p class="lead text-muted">
            <span class="xlarge-line-break">Consulting.com breaks business down to basic
               building blocks</span>
            (like Lego) and tells you how to assemble them for success.
          </p>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <h1 class="jumbotron-heading text-center">Pictures</h1>
          <div class="row">
            <div class="col-md-4" v-for="(picture, index) in pictures" :key="index">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" alt="pic"
                  :src="`/img/${picture.name}`" data-holder-rendered="true">
              </div>
            </div>
          </div>

          <h1 class="jumbotron-heading text-center">Videos</h1>
          <div class="row">
            <div class="col-md-4" v-for="(video, index) in videos" :key="index">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top video-trigger"
                  @click="showVideo(video.id.videoId, video.snippet.title)"
                  :alt="video.snippet.title | convert"
                  :src="video.snippet.thumbnails.medium.url"
                  :width="video.snippet.thumbnails.medium.width"
                  :height="video.snippet.thumbnails.medium.height"
                  data-holder-rendered="true">
                  <div class="card-body">
                    <p class="card-text">{{video.snippet.title | convert }}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <small class="text-muted">{{video.snippet.publishedAt | dateFormat}}</small>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          </div>
        </div>
        <b-modal ref="modal" size="lg" hide-footer>
          <template slot="modal-title">{{title}}</template>
            <div class="videoWrapper">
              <iframe
                class="video"
                  :src="`https://www.youtube.com/embed/${videoId}`"
                  frameBorder="0"
                  width="560"
                  height="349"
                  allowFullScreen
                  className="embed-responsive-item"></iframe>
            </div>
        </b-modal>
    </main>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  data() {

    return {
      title: '',
      videoId: '',
    };

  },
  created() {

    this.$store.dispatch( 'pictures/getPictures', {
      limit: 3,
    } );
    this.$store.dispatch( 'videos/getVideos', {
      limit: 3,
    } );

  },
  methods: {
    showVideo( id, title ) {

      this.$refs.modal.show();
      this.title = title;
      this.videoId = id;

    },
  },
  computed: {
    ...mapGetters( 'pictures', [ 'pictures' ] ),
    ...mapGetters( 'videos', [ 'videos' ] ),
  },
  filters: {
    convert( str ) {

      let strNew = str;
      strNew = str.replace( /&amp;/g, '&' );
      strNew = str.replace( /&gt;>/g, '>' );
      strNew = str.replace( /&lt;/g, '<' );
      strNew = str.replace( /&quot;/g, '"' );
      strNew = str.replace( /&#39;/g, "'" );
      return strNew;

    },
    dateFormat( date ) {

      return date.substring( 0, 10 );

    },
  },
};
</script>

<style>
.video-trigger{
  cursor: pointer;
}
.card-img-top{
  height: 225px;
  width: 100%;
  display: block;
}
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.video{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (min-width: 1200px) {
  .box-shadow{
    max-height: 200px;
  }
}

</style>
