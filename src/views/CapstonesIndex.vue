<template>
  <div class="capstones-index">
    <h1>{{ message }}</h1>

    <div v-for="capstone in capstones">
      <h1>{{ capstone.name }}</h1>
      <img v-bind:src="capstone.screenshot_url" alt="">
      <router-link v-bind:to="capstone.url">View Capstone Project</router-link>
    </div>
  </div>
</template>

<style>
</style>

<script>
// import axios from "axios";
export default {
  data: function() {
    return {
      message: "Capstone Projects",
      capstones: [
        {
          name: "rs-track",
          screenshot_url:
            "https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg"
        }
      ]
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