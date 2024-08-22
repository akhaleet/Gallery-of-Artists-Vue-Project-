<template>
  <div class="onama">
    <div class="content-box">
      <h3>O nama</h3>
      <p class="intro">
        Dobrodošli na naš sajt, jedinstvenu online galeriju umetnika koja neguje umetnost u svakom svom obliku. Ono što nas izdvaja od ostalih jeste naša strast za promocijom i podrškom talentovanih umetnika iz svih krajeva sveta. Naš cilj je da približimo umetnost široj publici, kreirajući platformu koja omogućava da svaka umetnička duša pronađe svoj prostor za izražavanje.
      </p>
    </div>

    <div class="content-box">
      <h3>Zašto smo drugačiji?</h3>
      <ul class="features">
        <li>Kursorski odabrane kolekcije: Naš tim stručnjaka pažljivo bira svaku umetninu kako bi našim posetiocima pružio iskustvo koje nadilazi obično posmatranje umetnosti. Svaka izložba na našem sajtu je kreativno osmišljena da priča priču i izaziva emocije.</li>
        <li>Podrška nezavisnim umetnicima: Posvećeni smo pružanju podrške umetnicima koji još uvek nisu stekli široku publiku, omogućavajući im da se njihovi radovi vide i cene na globalnom nivou. Naš sajt je most između umetnika i ljubitelja umetnosti.</li>
        <li>Interaktivno iskustvo: Sajt je osmišljen tako da pruža interaktivno iskustvo – od virtuelnih obilazaka galerija do detaljnih prikaza umetničkih dela koji omogućavaju da svaki detalj bude uočen i doživljen.</li>
      </ul>
    </div>

    <div class="content-box">
      <h3>Nagrade i priznanja</h3>
      <p>
        Tokom godina, naša galerija je osvojila brojne nagrade za inovacije u prezentaciji umetnosti i podršci mladim umetnicima. Ponosni smo na naš uspeh, ali smo još ponosniji na umetnike sa kojima sarađujemo i kojima je naša platforma pomogla da dosegnu nove visine.
      </p>
    </div>

    <div class="content-box">
      <h3>Kontakt i lokacija</h3>
      <p>
        Naša galerija se nalazi u srcu kulturnog centra grada. Posetite nas na adresi ispod ili nas kontaktirajte putem telefona (+382 69123321). Radujemo se vašem dolasku!
      </p>
      <iframe class="guglmapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1472.6467009908197!2d20.474772351435437!3d44.80077204824124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a707508acd6cd%3A0xcf2b4d2366bb3c04!2z0JrQsNC70LXQvdC40ZvQtdCy0LAg0L_QuNGY0LDRhtCw!5e1!3m2!1ssr!2s!4v1724281061911!5m2!1ssr!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    
  </div>
</template>


<style scoped>


.onama {
  
  text-align: center;
  font-weight: bold;
}

.content-box {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
  max-width: 800px; 
}

h2, h3 {

  text-align: center;
  color: rgb(114, 222, 255);
  font-size: 35px;
  text-shadow: -1px 1px 0 #000,
                1px 1px 0 #000,
                1px -1px 0 #000,
                -1px -1px 0 #000;
                

}

.intro {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.features {
  list-style-type: disc;
  padding-left: 20px;
}

.features li {
  margin-bottom: 10px;
}

.gallery-images {
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  max-width: 800px; 
}

.gallery-images img {
  width: 30%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.guglmapa {

     border: 5px solid red;
}

.guglmapa iframe {
     height: 100%;
     width: 100%;
     left: 0;
     top: 0;
     position: absolute;
}


</style>

<script>

export default {
  mounted() {
    if (typeof google !== 'undefined') {
      this.initMap();
    } else {
      console.error("Google Maps API nije učitan.");
    }
  },
  methods: {
    initMap() {
      const location = { lat: 44.7866, lng: 20.4489 }; // Primer koordinata za Beograd
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
      });
      new google.maps.Marker({
        position: location,
        map: map
      });
    }
  }
}



</script>
