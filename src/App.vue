<template>
  <div id="app">
    <img :src="`${publicPath}imgs/cover-1-lg.png`" />
    <h1>font awesome</h1>
    <i class="fa fas-heart"></i>
    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert!
    </b-alert>
    <div id="my_name"></div>
    <button class="btn btn-primary" v-on:click="changeMyName()">
      change my name
    </button>
    <b-button @click="showDismissibleAlert = true" variant="info" class="m-1"
      >Show dismissible alert ({{
        showDismissibleAlert ? "visible" : "hidden"
      }})</b-button
    >
    <div class="alert alert-primary" role="alert">
      <strong>Heads up!</strong> This alert needs your attention, but it's not
      super important.
    </div>

    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        >
        <span aria-hidden="true"><i class="fal fa-times"></i></span>
      </button>
      <strong>Well Done!</strong> You successfully read this important alert
      message.
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
/*eslint-disable*/
import Vue from "vue";

export default {
  data() {
    return {
      showDismissibleAlert: false,
      publicPath: process.env.BASE_URL
    };
  },
  methods: {
    changeMyName() {
      console.log("changeMyName");
      var app = new Vue({
        el: '#my_name',
        data: {
          message: 'Hello Vue!'
        }
      })
    }
  }
};
</script>
<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
