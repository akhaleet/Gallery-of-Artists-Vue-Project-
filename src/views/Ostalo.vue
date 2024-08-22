<template>
  <div class="container">
  <div class="section">
    <img src="../assets/gacbi.jpg" alt="Mona Liza">
    <div class="text">
      <h2>Veliki Getsbi</h2>
      <p>F. Scott Fitzgerald bio je američki romanopisac i pisac kratkih priča, najpoznatiji po svom romanu "Veliki Getsbi" (The Great Gatsby). Rođen je u Saint Paul, Minnesota, i studirao na Univerzitetu Princeton.</p>
      <p class="vrijednost">Procijenjena vrijednost: 100,000-150,000 EUR <br> Procijenjena starost: Približno 99 godina</p>
      <form action="/action_page.php" class="formaPonuda">
        <label for="ponuda" style="color: red;">Unesi ponudu:</label>
        <input type="text" id="ponuda" name="ponuda" placeholder="Ponuda (€)" style="border: 1px solid black; border-radius: 20px; width: 200px; margin-left: 10px; box-shadow: 2px 2px 5px"><br>
        <input type="text" id="komentar" name="ponuda" placeholder="Komentar" style="border: 1px solid black; border-radius: 20px; width: 200px; box-shadow: 2px 2px 5px"><br>
        <input type="submit" class="btn btn-primary mb-2" value="Posalji" style="border: 1px solid black; border-radius: 20px; width: 200px; margin-top: 10px;">
    </form>
    </div>

    
  </div>

  <div class="section">
    <img src="../assets/mockingbird.jpg" alt="Zvezdana noć">
    <div class="text">
      <h2>Ubiti pticu rugalicu</h2>
      <p>Harper Lee bila je američka književnica, najpoznatija po svom romanu "Ubiti pticu rugalicu" (To Kill a Mockingbird). Rođena je u Monroeville, Alabama, i studirala je pravo na Univerzitetu u Alabami pre nego što je posvetila svoj život pisanju.</p>
      <p class="vrijednost">Procijenjena vrijednost: 10,000-20,000 EUR <br> Procijenjena starost: Približno 64 godine</p>
      <form action="/action_page.php" class="formaPonuda">
        <label for="ponuda" style="color: red;">Unesi ponudu:</label>
        <input type="text" id="ponuda" name="ponuda" placeholder="Ponuda (€)" style="border: 1px solid black; border-radius: 20px; width: 200px; margin-left: 10px; box-shadow: 2px 2px 5px"><br>
        <input type="text" id="komentar" name="ponuda" placeholder="Komentar" style="border: 1px solid black; border-radius: 20px; width: 200px; box-shadow: 2px 2px 5px"><br>
        <input type="submit" class="btn btn-primary mb-2" value="Posalji" style="border: 1px solid black; border-radius: 20px; width: 200px; margin-top: 10px;">
    </form>
    </div>
    
  </div>

  <div class="section">
    <img src="../assets/rye.jpg" alt="Tajna večera">
    <div class="text">
      <h2>Lovac u žitu</h2>
      <p>J.D. Salinger je bio američki romanopisac i kratkopisac, najpoznatiji po svom romanu "Lovac u žitu" (The Catcher in the Rye). Salinger je rođen u New Yorku i studirao je na različitim mestima, uključujući Univerzitet u Njujorku i Školu za umetnost u Vermontu.</p>
      <p class="vrijednost">Procijenjena vrijednost: 20,000-30,000 EUR <br> Procijenjena starost: Približno 73 godine</p>
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
    margin-bottom: 55px;
    
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