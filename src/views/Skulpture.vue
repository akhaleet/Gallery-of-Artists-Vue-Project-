<template>
  <div class="container">
  <div class="section">
    <img src="../assets/mikelandjelo.jpg" alt="Mona Liza">
    <div class="text">
      <h2>David</h2>
      <p>Mikelanđelov "David" je jedan od najpoznatijih skulptura u istoriji umetnosti. Predstavlja biblijskog Davida pre bitke sa Golijatom i simbolizuje renesansni ideal ljudske snage, mladosti i lepote.</p>
      <p class="vrijednost">Procijenjena vrijednost: 200,000,000 EUR <br> Procijenjena starost: Približno 519 godina</p>
      <form action="/action_page.php" class="formaPonuda">
        <label for="ponuda" style="color: red;">Unesi ponudu:</label>
        <input type="text" id="ponuda" name="ponuda" placeholder="Ponuda (€)" style="border: 1px solid black; border-radius: 20px; width: 200px; margin-left: 10px; box-shadow: 2px 2px 5px"><br>
        <input type="text" id="komentar" name="ponuda" placeholder="Komentar" style="border: 1px solid black; border-radius: 20px; width: 200px; box-shadow: 2px 2px 5px"><br>
        <input type="submit" class="btn btn-primary mb-2" value="Posalji" style="border: 1px solid black; border-radius: 20px; width: 200px; margin-top: 10px;">
    </form>
    </div>

    
  </div>

  <div class="section">
    <img src="../assets/mislioc.jpg" alt="Zvezdana noć">
    <div class="text">
      <h2>Mislioc</h2>
      <p>"The Thinker" je jedna od najprepoznatljivijih skulptura u svetu, prikazujući muškarca u dubokom razmišljanju. Rodenov rad simbolizuje ljudsku sposobnost za filozofiju i intelektualnu refleksiju.</p>
      <p class="vrijednost">Procijenjena vrijednost: 10,000,000-50,000,000 EUR <br> Procijenjena starost: Približno 141 godina</p>
      <form action="/action_page.php" class="formaPonuda">
        <label for="ponuda" style="color: red;">Unesi ponudu:</label>
        <input type="text" id="ponuda" name="ponuda" placeholder="Ponuda (€)" style="border: 1px solid black; border-radius: 20px; width: 200px; margin-left: 10px; box-shadow: 2px 2px 5px"><br>
        <input type="text" id="komentar" name="ponuda" placeholder="Komentar" style="border: 1px solid black; border-radius: 20px; width: 200px; box-shadow: 2px 2px 5px"><br>
        <input type="submit" class="btn btn-primary mb-2" value="Posalji" style="border: 1px solid black; border-radius: 20px; width: 200px; margin-top: 10px;">
    </form>
    </div>
    
  </div>

  <div class="section">
    <img src="../assets/apollo.jpg" alt="Tajna večera">
    <div class="text">
      <h2>Apolon i Dafne</h2>
      <p>Berninijeva skulptura "Apollo i Dafne" prikazuje trenutak iz grčke mitologije kada Dafne beži od Apolona i pretvara se u drvo. Ova barokna skulptura je remek-delo u izražavanju pokreta i emocija kroz mermer. </p>
      <p class="vrijednost">Procijenjena vrijednost: 100,000,000 EUR <br> Procijenjena starost: Približno 398 godina</p>
      <form action="/action_page.php" class="formaPonuda">
        <label for="ponuda" style="color: red;">Unesi ponudu:</label>
        <input type="text" id="ponuda" name="ponuda" placeholder="Ponuda (€)" style="border: 1px solid black; border-radius: 20px; width: 200px; margin-left: 10px; box-shadow: 2px 2px 5px"><br>
        <input type="text" id="komentar" name="ponuda" placeholder="Komentar" style="border: 1px solid black; border-radius: 20px; width: 200px; box-shadow: 2px 2px 5px"><br>
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
    margin-bottom: 50px;
}

.section img {
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

.form-control {
    border: 1px solid black; 
    border-radius: 20px; 
    box-shadow: 2px 2px 5px;
    width: 200px;
    margin-bottom: 10px;
}

.btn {
    border: 1px solid black; 
    border-radius: 20px; 
    width: 200px;
    margin-top: 10px;
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
}

.btn-primary:hover {
    background-color: #0056b3;
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