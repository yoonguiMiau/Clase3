<template>
  <div>
    <h1> Informacion Per: {{ info }} </h1>
    <img :src="require('../assets/img/megumi.jpg')" alt="megumi" style="width: 200px; height: auto;">
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: 'Karina,20961,5A'
    }
  }
}
</script>
