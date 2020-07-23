<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/capstones">Index</router-link> |
      <router-link to="/capstones/:id">Show</router-link> 
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
  
</template>

<style>
</style>
