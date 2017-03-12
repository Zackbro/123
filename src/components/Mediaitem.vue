<template> 
  <div class="info">
      <f7-link href="/detail"><img :src=item.img></f7-link>
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