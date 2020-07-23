<template>
  <div class="capstones-index">
    <h1>{{ message }}</h1>

    <div class="container">
      <div class="row row-cols-3">
        <div v-for="capstone in capstones" class="col">
        <div class="card-deck" >
          <div class="card">
            <img v-bind:src="capstone.screenshot_url" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ capstone.name }}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div> 
      </div>
    </div>

     
  </div>
</template>

<style>
img {
  height: 15em;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Capstone Projects",
      capstones: [],
    };
  },
  created: function () {
    axios.get("/api/capstones").then((response) => {
      console.log("All Capstones", response.data);
      this.capstones = response.data;
    });
    console.log("index");
  },
  methods: {},
};
</script>