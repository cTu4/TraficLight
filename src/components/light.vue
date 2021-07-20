<template>
  <div class="light" :class="color">

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
  created() {
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

  .light{
    width: 30px;
    height: 30px;
    border-radius: 10px;
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


</style>
