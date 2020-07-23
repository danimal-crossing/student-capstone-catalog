<template>
  <div class="capstones-show">
    <h2>{{ capstone.student.first_name }} {{ capstone.student.last_name }}</h2>
    <p>Capstone Name: {{ capstone.name }}</p>
    <p>Capstone Description: {{ capstone.description }}</p>
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
    axios.get(`/api/capstones/1 `).then((response) => {
      console.log(response.data);
      this.capstone = response.data;
    });
  },
};
</script>