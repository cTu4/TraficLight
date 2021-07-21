<template>
  <div class="sss">
    <h1 class="mainTitle">
      Vue Светофор
    </h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "RouteTrafic",
  created() {
    // console.log({
    //   "route" : this.$route.params.color,
    //   "store": this.$store.state.current
    // })
    if(this.$store.state.current.color === ""){
      if(!this.$route.params.color){
        this.$router.push({path: '/red'});
      }
      else{
        this.$router.push({path: this.$route.params.color});
      }
    }
    else{
      this.$router.push({path: this.$store.state.current.color});
    }
  },

}
</script>

<style scoped>
  .mainTitle{
    text-align: center;
  }
</style>
