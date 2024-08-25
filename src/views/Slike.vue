<template>
  <div class="container">
    <button class="btn btn-primary" @click="provjeriKorpu()" style="width: 150px; display: flex; justify-content: center; align-self: center; margin-top: 10px;">Provjeri korpu</button>
    <button class="btn btn-primary" @click="isprazniKorpu()" style="width: 150px; display: flex; justify-content: center; align-self: center;">Isprazni korpu</button>
    
    <div class="section">

      <img src="../assets/monaLiza.webp" alt="Mona Liza">

      <div class="text">
        <h2>Mona Liza</h2> 
        <p>Leonardo da Vinci (1452–1519) bio je renesansni umetnik i polimat poznat po svojim inovacijama i dubokom razumevanju umetnosti i nauke. Njegovo najpoznatije delo, "Mona Liza", naslikano je između 1503. i 1506. godine.</p>
        <p class="vrijednost">Procijenjena vrijednost: 780,000,000 EUR <br> Procijenjena starost: Približno 521 godina</p>
        <form class="formaPonuda" @submit.prevent="posalji('Mona Liza')">
          <label for="ponuda" style="color: red;">Unesi ponudu:</label>
          <input type="text" id="ponuda" name="ponuda" v-model="ponuda" placeholder="Ponuda (€)" required style="border: 1px solid black; border-radius: 20px; width: 200px; margin-left: 10px; box-shadow: 2px 2px 5px"><br>
          <input type="text" id="komentar" name="komentar" v-model="komentar" placeholder="Komentar" required style="border: 1px solid black; border-radius: 20px; width: 200px; box-shadow: 2px 2px 5px"><br>
          <input type="submit" class="btn btn-primary mb-2" value="Posalji" style="border: 1px solid black; border-radius: 20px; width: 200px; margin-top: 10px;">
        </form>
      </div>
    </div>


    <div class="section">
      <img src="../assets/zvezdanaNoc.jpg" alt="Zvezdana noć">
      <div class="text">
        <h2>Zvezdana noć</h2>
        <p>Vincent van Gogh (1853–1890) bio je holandski postimpresionista čiji je rad duboko uticao na razvoj moderne umetnosti. "Zvezdana noć" je naslikana u julu 1889. godine iz njegovog prozora bolnice u Saint-Rémy-de-Provence.</p>
        <p class="vrijednost">Procijenjena vrijednost: NIJE NA PRODAJU <br> Procijenjena starost: Približno 135 godina</p>
        <form class="formaPonuda" @submit.prevent="posalji('Zvezdana noć')">
          <label for="ponuda" style="color: red;">Unesi ponudu:</label>
          <input type="text" id="ponuda" name="ponuda" v-model="ponuda" placeholder="Ponuda (€)" style="border: 1px solid black; border-radius: 20px; width: 200px; margin-left: 10px; box-shadow: 2px 2px 5px"><br>
          <input type="text" id="komentar" name="komentar" v-model="komentar" placeholder="Komentar" style="border: 1px solid black; border-radius: 20px; width: 200px; box-shadow: 2px 2px 5px"><br>
          <input type="submit" class="btn btn-primary mb-2" value="Posalji" style="border: 1px solid black; border-radius: 20px; width: 200px; margin-top: 10px;">
        </form>
      </div>
    </div>


    <div class="section">
      <img src="../assets/tajnaVecera.jpg" alt="Tajna večera">
      <div class="text">
        <h2>Tajna večera</h2> 
        <p>Leonardo da Vinci (1452–1519) je autor freske "Tajna večera", naslikane između 1495. i 1498. godine u samostanu Santa Maria delle Grazie u Milanu. Ovo delo prikazuje trenutak kada Isus obznanjuje svojim apostolima da će jedan od njih izneveriti.</p>
        <p class="vrijednost">Procijenjena vrijednost: NIJE NA PRODAJU <br> Procijenjena starost: Približno 525 godina</p>
        <form class="formaPonuda" @submit.prevent="posalji('Tajna večera')">
          <label for="ponuda" style="color: red;">Unesi ponudu:</label>
          <input type="text" id="ponuda" name="ponuda" v-model="ponuda" placeholder="Ponuda (€)" style="border: 1px solid black; border-radius: 20px; width: 200px; margin-left: 10px; box-shadow: 2px 2px 5px"><br>
          <input type="text" id="komentar" name="komentar" v-model="komentar" placeholder="Komentar" style="border: 1px solid black; border-radius: 20px; width: 200px; box-shadow: 2px 2px 5px"><br>
          <input type="submit" class="btn btn-primary mb-2" value="Posalji" style="border: 1px solid black; border-radius: 20px; width: 200px; margin-top: 10px;">
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container {
      display: flex;
      flex-direction: column;
      gap: 20px; 
      max-width: 800px; 
      margin: 0 auto; 
    }

    .section {
      padding-top: 30px;
      display: flex;
      align-items: flex-start;
      gap: 20px;
      margin-bottom: 60px;
      
    }

    .section img {
      width: 300px; 
      height: auto; 
      flex-shrink: 0; 
      width: 250px;
      height: 350px;
      object-fit: cover;
      object-position: top;
      box-shadow: 5px 5px 5px;
      
    }

    .section .text {
      flex-grow: 1; 
      max-width: 400px;
    }

    h2 {
      font-weight: bold;
    }

    .vrijednost {
      color: green;
      font-weight: bold;
    }

    @media (max-width: 768px) {
    .section {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .section img {
        width: 100%;
        max-width: 300px;
        height: auto;
    }

    .section .text {
        max-width: 100%;
    }

    .form-control {
        width: 100%;
    }

    .btn {
        width: 100%;
    }
}

</style>

<script>
export default {
  data() {
    return {
      ponuda: '',
      komentar: '',
      user: null,
      trenutniNaziv: '',
      umjetnickaDjela: [
        {naziv: 'Mona Liza',},
        {naziv: 'Zvezdana noć',},
        {naziv: 'Tajna večera',}
      ],
      informacijeNiz: [], 
    };
  },
  methods: {
    setNaziv(naziv) {
      this.trenutniNaziv = naziv; 
    },
    posalji(naziv) {
      this.trenutniNaziv = naziv; 
      let ulogovan = JSON.parse(localStorage.getItem('loggedIn'));

      if (ulogovan) {
        this.user = ulogovan;

        alert(
          "Ponuda od: " + this.ponuda + "€" + "\n" + 
          "Uz komentar: " + this.komentar + "\n" + 
          "Od korisnika: " + this.user.username + "\n" + 
          "Za djelo: " + this.trenutniNaziv
        );

        let korisnikInfoKey = `korpa_${this.user.username}`;
        let korisnikPodaci = JSON.parse(localStorage.getItem(korisnikInfoKey)) || [];

        korisnikPodaci.push({
          ponuda: this.ponuda,
          komentar: this.komentar,
          username: this.user.username,
          trenutniNaziv: this.trenutniNaziv
        });

        localStorage.setItem(korisnikInfoKey, JSON.stringify(korisnikPodaci));

        let svePonude = JSON.parse(localStorage.getItem('svePonude')) || [];
        svePonude.push({
        ponuda: this.ponuda,
        komentar: this.komentar,
        username: this.user.username,
        trenutniNaziv: this.trenutniNaziv
        });
        localStorage.setItem('svePonude', JSON.stringify(svePonude));


        this.ponuda = '';
        this.komentar = '';
      } else {
        alert("Nema ulogovanog korisnika. Molimo ulogujte se.");
        this.$router.push('/');
      }
    },
    provjeriKorpu(){
      let ulogovan = JSON.parse(localStorage.getItem('loggedIn'));
      if(ulogovan) {
        let korisnikInfoKey = `korpa_${ulogovan.username}`;
        let korisnikPodaci = JSON.parse(localStorage.getItem(korisnikInfoKey)) || [];
      if (korisnikPodaci.length){
        alert(JSON.stringify(korisnikPodaci, null, 2));
      }
      
      else {
        alert('Korpa je prazna!')
      }
    
    }
    },
    isprazniKorpu() {
      let ulogovan = JSON.parse(localStorage.getItem('loggedIn'));
      if (ulogovan) {

        let korisnikInfoKey = `korpa_${ulogovan.username}`;
        let svePonude = JSON.parse(localStorage.getItem('svePonude')) || [];
        svePonude = svePonude.filter(p => p.username !== ulogovan.username);
        localStorage.setItem('svePonude', JSON.stringify(svePonude));
        localStorage.removeItem(korisnikInfoKey);
        this.informacijeNiz = [];
        console.log(this.informacijeNiz);

      } else {
        alert("Nema ulogovanog korisnika. Molimo ulogujte se.");
        this.$router.push('/');
      }
    }
  },
  created() {
    let ulogovan = JSON.parse(localStorage.getItem('loggedIn'));
    if (ulogovan) {
      let korisnikInfoKey = `korpa_${ulogovan.username}`;
      let cuvajNiz = localStorage.getItem(korisnikInfoKey);
      if (cuvajNiz) {
        this.informacijeNiz = JSON.parse(cuvajNiz);
      }
      else {
        this.informacijeNiz = [];
      }
    }
  }
};
</script>