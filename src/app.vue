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
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding></f7-nav-center>
          <f7-nav-right>
            <f7-link icon="icon-bars" open-panel="right"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <!-- Page Content -->
            <f7-searchbar
            cancel-link="Cancel"
            placeholder="Search in items"
            :clear-button="true"
            ></f7-searchbar>

            <div class="media">
                <media></media>
                <media></media>
            </div>



          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>



  </div>
</template>

<script>
import media from './components/Mediaitem'
  export default {
    components: {
      media
    }
  }
</script>