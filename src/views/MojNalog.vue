<template>
    <div class="mojnalog" style="background-color: lightblue;">
      <div v-if="informacijeNiz.length > 0">
      <div v-for="(item, index) in informacijeNiz" :key="index">
        <p style="font-weight: bold;">Ponuda: {{ item.ponuda }}</p>
        <p style="font-weight: bold;">Komentar: {{ item.komentar }}</p>
        <p style="font-weight: bold;">Username: {{ item.username }}</p>
        <p style="font-weight: bold;">Djelo: {{ item.trenutniNaziv }}</p>
        <hr>
      </div>
    </div>
    <div v-else>
      <p>Korpa je prazna!</p>
    </div>
    </div>

  </template>

  <script>

  export default {
    data(){
      return {
        informacijeNiz: [],

      }
    },
    methods: {
      prikaziInformacije(){
        let cuvajNiz = localStorage.getItem('informacijeNiz');
        if (cuvajNiz) {
  
          this.informacijeNiz = JSON.parse(cuvajNiz);
        } else {
        
          this.informacijeNiz = [];
        }
      }
    },
    created() {
    this.prikaziInformacije(); 
    }
  }


</script>


