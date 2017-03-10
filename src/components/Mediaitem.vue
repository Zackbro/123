<template> 
  <div class="info">
      <a href="/tv/1402"><img :src=item.img></a>
      <span>
        <div class="content">
          <a class="text" href="/tv/1402">
            <h2>{{item.name}}</h2>
          </a>
          <a class="text">
            <p>New episode airs these days</p>
          </a>
        </div>
      </span>
    </div>
</template>

<script>
  export default {
    props: {
     item: {
      type: Object
    }
  }
}
</script>