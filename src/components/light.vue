<template>
  <div class="light" :class="color">

  </div>
</template>

<script>

export default {

  name: "light",
  props:[
    "color"
  ]
}
</script>

<style lang="scss" scoped>
$green: #47b447;
$yellow: #ecec40;
$red: #ea4a4a;
$darkGreen: #0a230a;
$darkYellow: #4e4e15;
$darkRed: #581c1c;

.light{
  width: 30px;
  height: 30px;
  border-radius: 10px;
}
.red{
    background: $red;
  }

</style>
