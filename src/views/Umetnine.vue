<template>
    <div class="umetnine">
      <div v-if="!jeLiAktivanSubpage">
      <h2>Umetnine</h2>
      <p>Ovo je glavni sadržaj stranice Umetnine.</p>
      </div>
      <router-view></router-view>
    </div>
  </template>



<script>
export default {
  name: 'Umetnine',
  computed: {
    jeLiAktivanSubpage() {
      return this.$route.path.includes('/umetnine/slike') ||
             this.$route.path.includes('/umetnine/skulpture') ||
             this.$route.path.includes('/umetnine/ostalo');
    }
  }
}


</script>