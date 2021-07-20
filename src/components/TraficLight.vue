<template>
  <div class="traficLight">
    <light :color="color === 'green'?color:'darkGreen'"></light>
    <light :color="color === 'yellow'?color:'darkYellow'"></light>
    <light :color="color === 'red'?color:'darkRed'"></light>
  </div>
</template>

<script>
import light from "../components/light.vue"
export default {
  name: "TraficLight",
  components:{
    light
  },
  data(){
    return{

    }
  },
  computed:{
    color(){
      return this.$route.params.color
    }
  },
  created(){
    console.log(process.env)
  }
}
</script>

<style lang="scss" scoped>
  .traficLight{
    width: 300px;
    height: 500px;
    margin: 0 auto;
    background: antiquewhite;
  }
</style>
