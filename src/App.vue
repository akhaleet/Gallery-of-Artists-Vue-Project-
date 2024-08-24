<template>
  <div id="app">
  <Navigacija v-if="!isLoginPage" />
  <Footer />
  <router-view />
</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Navigacija from './components/Navigacija.vue';
import Footer from './components/Footer.vue';

export default {

  head: {
       link: [
             {
                 rel: "icon",
                 href: require("./assets/logo.png")
             },
          ]
       },

  components: {
    Navigacija,
    Footer
  },
  computed: {
    isLoginPage() {
      return this.$route.name === 'Login'; 
    }
  }
};
</script>
