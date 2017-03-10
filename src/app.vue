<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-left>
            <f7-link open-panel="left" class="icon-menu"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding></f7-nav-center>
          <f7-nav-right>
            <f7-link open-panel="right" class="icon-user"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <!-- Page Content -->
            <f7-searchbar
            placeholder="搜索电影、剧集、人物"
            :clear-button="true"
            ></f7-searchbar>

            <div class="media">
              <div class="index tv">
                <h2><a class="title" href="">在电视上</a></h2>
                <div class="column">
                <media v-for="item in defaultTvData" :item="item"></media>
                </div>
              </div>
              <div class="index moive">
                <h2><a class="title" href="">在影院里</a></h2>
                <div class="column">
                <media v-for="item in defaultMoiveData" :item="item"></media>
                </div>
              </div>
            </div>
            <subMedia></subMedia>
            <myfooter></myfooter>
          </f7-page>
        </f7-pages>
        
      </f7-view>
    </f7-views>

  </div>
</template>

<script>
  import indexData from './utils/constant'
  import media from './components/Mediaitem'
  import subMedia from './components/Recommed'
  import myfooter from './components/Footer'
  export default {
    data() {
      return {
        tvData: indexData.tvData,
        moiveData: indexData.moiveData,
        defaultTvData: indexData.defaultTvData,
        defaultMoiveData: indexData.defaultMoiveData,
      }
    },
    mounted () {
      this.preLoadImg(this.tvData, this.defaultTvData);
      this.preLoadImg(this.moiveData, this.defaultMoiveData);
    },
    methods: {
      // default img => loaded img
      preLoadImg (mediaData, defaultData) {
        let that = this
        for (let i = 0; i < mediaData.length; i++) {
          let newImg = new Image()
          newImg.src = mediaData[i].img;
          newImg.onload = function() {
            defaultData[i].img = mediaData[i].img;
          }
        }
      }
    },
    components: {
      media,
      subMedia,
      myfooter
    }
  }
</script>