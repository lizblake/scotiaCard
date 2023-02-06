<template>
<div id="app">
    <scotia-card-item></scotia-card-item>
</div>
</template>

<script>
import ScotiaCardItem from './components/ScotiaCardItem.vue';

export default {
  name: "app",
  components: {
    ScotiaCardItem,
  },
};

document.querySelector(".details").addEventListener("click", function (e) {
  var pTag = document.querySelector("p");
  if(pTag.style.display === "none") {
      pTag.style.display = "block";
  } else {
    pTag.style.display = "none";
  }
 }); 
</script>

<style>
</style>
