<template>

  <div class="pocetna" style="background-color: lightblue;">

      <h2 style="font-weight: bold; color: red; padding-top: 15px;">Poslednje 3 ponude:</h2>
      <hr>
      <div v-if="poslednjaTriElementa.length > 0">
      <div v-for="(item, index) in poslednjaTriElementa" :key="index">
        <p style="font-weight: bold;">Ponuda: {{ item.ponuda }}</p>
        <p style="font-weight: bold;">Komentar: {{ item.komentar }}</p>
        <p style="font-weight: bold;">Username: {{ item.username }}</p>
        <p style="font-weight: bold;">Djelo: {{ item.trenutniNaziv }}</p>
        <hr>
      </div>
    </div>
    <div v-else>
      <p>Trenutno nema ponuda.</p>
    </div>
    </div>
</template>



<style>

body {
  background-image: url('../assets/oNamaBG.jpg'); 
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center center; 
  background-attachment: fixed; 
  min-height: 100vh; 
  width: 100%; 
  align-items: center;
  justify-content: center;
}

</style>


<script>
  export default {

    data(){
      return {
        informacijeNiz: [],
      }
    },
    computed: {
    poslednjaTriElementa() {
      return this.informacijeNiz.slice(-3);
      }
    },
    methods: {
      prikaziInformacije(){
        let svePonude = localStorage.getItem('svePonude');

        if (svePonude) {
  
          this.informacijeNiz = JSON.parse(svePonude);
        } else {
        
          this.informacijeNiz = [];
        }
      }
    },
    created() {
    this.prikaziInformacije(); 
    }

  };



</script>


