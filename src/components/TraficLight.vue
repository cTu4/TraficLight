<template>
    <div class="traficLight">
      <light
        :color="color === 'red'?color:'darkRed'"
        :time="time.red"
        :active="color === 'red'"
      ></light>
      <light
        :color="color === 'yellow'?color:'darkYellow'"
        :time="time.yellow"
        :active="color === 'yellow'"
      ></light>
      <light
        :color="color === 'green'?color:'darkGreen'"
        :time="time.green"
        :active="color === 'green'"
      ></light>

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
      time:{
        green: 15,
        yellow: 3,
        red: 10
      },
      routes:{
        "green": "red",
        "yellow": "green",
        "red": "yellow"
      },

    }
  },
  computed:{
    color(){
      return this.$route.params.color
    },
    timer(){
      return this.$store.state.current.timer
    }

  },
  methods:{
    Trafic(color,time){
      this.$store.commit('SetTime', {timer: time})
      let Timer = setInterval(()=>{
        this.$store.commit('TicTime', {color: this.color, timer: this.timer})
        this.$store.commit('setCurrent', {color: this.color, timer: this.timer})
        if(this.timer === 0){
          console.log(this.routes[this.color]);
          this.$router.push({path: this.routes[this.color]});
          clearInterval(Timer);

        }
      }, 1000);
    }
  },
  created() {
    this.Trafic(this.color,this.$store.state.current.timer === 0 ? this.time[this.color]:this.$store.state.current.timer);
  },
  beforeRouteUpdate(to, from, next){
    console.log(this.routes[this.color],this.time[this.routes[this.color]])

    this.Trafic(this.routes[this.color],this.time[this.routes[this.color]]);
    next();
  }

}
</script>

<style lang="scss">
  .traficLight{
    width: 200px;
    margin: 0 auto;
    background: #333;
    border-radius: 50px;
    border: 3px solid #000;
  }
</style>
