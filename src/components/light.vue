<template>
  <div class="light" :class="[color, timer<=3 && active?'flash':'']">
      <div class="number" v-show="active">
        {{timer}}
      </div>
  </div>
</template>

<script>

export default {

  name: "light",
  props:[
    "color",
    "active",
    "time"
  ],
  computed:{
    timer(){
      return this.$store.state.current.timer
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

  .light{
    width: 150px;
    height: 150px;
    border-radius: 50px;
    margin: 20px auto;
    text-align: center;

    .number{
        width: 50%;
        margin: 0 auto;
        padding: 35px 0;
        font-size: 70px;
        color: #333;
    }
  }


  .green{
    background: $green;
  }
  .yellow{
    background: $yellow;
  }
  .red{
      background: $red;
  }
  .darkGreen{
    background: $darkGreen;
    opacity: $opacityDark;
  }
  .darkYellow{
    background: $darkYellow;
    opacity: $opacityDark;
  }
  .darkRed{
    background: $darkRed;
    opacity: $opacityDark;
  }

  .flash {
    animation: flash 1s infinite;
    -webkit-animation: flash 1s infinite;
  }

  @keyframes flash {
    from{
      opacity: 1;
    }
    50%{
      opacity: 0.4;
    }
    to{
      opacity: 1;
    }
  }

  @-webkit-keyframes flash {
    from{
      opacity: 1;
    }
    50%{
      opacity: 0.7;
    }
    to{
      opacity: 1;
    }
  }


</style>
