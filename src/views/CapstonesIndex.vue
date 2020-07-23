<template>
  <div class="capstones-index">
    <h1>{{ message }}</h1>

    <div v-for="capstone in capstones">
      <h1>{{ capstone.name }}</h1>
      <img v-bind:src="capstone.screenshot_url" alt=""> <br>
      <router-link v-bind:to="capstone.url">View Capstone Website</router-link>
      <router-link :to="`/capstones/${capstone.id}`">More Details</router-link>


    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Capstone Projects",
      capstones: []
    };
  },
  created: function() {
    axios.get("/api/capstones").then(response => {
      console.log("All Capstones", response.data);
      this.capstones = response.data;
    });
  },
  methods: {}
};
</script>