<template>
  <div class="capstones-show">
    <h2>{{ capstone.name }}</h2>
    <p>By: {{ capstone.student.first_name }} {{ capstone.student.last_name }}</p>
    <p>Capstone Description: {{ capstone.description }}</p>
    <router-link :to="capstone.url">Check it out here!</router-link> <br>
    <img :src="capstone.screenshot_url"> 
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      capstone: {},
    };
  },
  created: function () {
    axios.get(`/api/capstones/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.capstone = response.data;
    });
  },
};
</script>