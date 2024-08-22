<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 mb-3">
        <div class="artist">
          <img src="../assets/daVinci.jpg" alt="Leonardo da Vinci">
          <div class="text">
            <h3>Leonardo da Vinci</h3>
            <p>Leonardo da Vinci (1452–1519) bio je italijanski renesansni umetnik, slikar, vajar, inženjer, arhitekta i naučnik. Njegova najpoznatija djela uključuju „Mona Liza“ i „Tajna večera“. Da Vinci je bio poznat po svom inovativnom pristupu i raznovrsnim interesovanjima.</p>
            <a href="https://www.holybooks.com/wp-content/uploads/The-Complete-Works-of-Leonardo-Da-Vinci.pdf" class="btn" target="_blank">Pregled djela</a>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <div class="artist">
          <img src="../assets/vanGogh.webp" alt="Vincent van Gogh">
          <div class="text">
            <h3>Vincent van Gogh</h3>
            <p>Vincent Willem van Gogh (1853–1890) bio je holandski postimpresionistički umetnik poznat po svojoj živahnoj paleti boja i impulsivnom stilu. Njegova najpoznatija djela uključuju „Zvezdana noć“ i „Suncokreti“.</p>
            <a href="https://ia903207.us.archive.org/24/items/in.ernet.dli.2015.184765/2015.184765.Lust-For-Life.pdf" class="btn" target="_blank">Pregled djela</a>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <div class="artist">
          <img src="../assets/mikelandjeloizgled.jpg" alt="Michelangelo">
          <div class="text">
            <h3>Michelangelo</h3>
            <p>Michelangelo Buonarroti (1475–1564) bio je italijanski renesansni umetnik, skulptor, slikar, arhitekta i pesnik. Poznat je po svojim monumentalim delima kao što su „David“ i „Stvaranje Adama“ na plafonu Sikstinske kapele.</p>
            <a href="https://archive.org/details/michelangelo0000unse_s6e4" class="btn" target="_blank">Pregled djela</a>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <div class="artist">
          <img src="../assets/lorenzo.jpg" alt="Lorenzo Bernini">
          <div class="text">
            <h3>Lorenzo Bernini</h3>
            <p>Gian Lorenzo Bernini (1598–1680) bio je italijanski barokni vajar, arhitekta i scenograf. Njegova najpoznatija djela uključuju skulpture poput „Apollo i Dafne“ i „David“.</p>
            <a href="https://archive.org/details/sculptorofromanb0000unse" class="btn" target="_blank">Pregled djela</a>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <div class="artist">
          <img src="../assets/rodin.jpg" alt="Auguste Rodin">
          <div class="text">
            <h3>Auguste Rodin</h3>
            <p>François-Auguste-René Rodin (1840–1917) bio je francuski skulptor poznat po svojim inovativnim pristupima u skulpturi. Njegova najpoznatija djela uključuju „Mislioca“ i „Kapija pakla“.</p>
            <a href="https://archive.org/details/augusterodin00traugoog" class="btn" target="_blank">Pregled djela</a>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <div class="artist">
          <img src="../assets/scott.jpg" alt="F. Scott Fitzgerald">
          <div class="text">
            <h3>F. Scott Fitzgerald</h3>
            <p>Francis Scott Key Fitzgerald (1896–1940) bio je američki romanopisac poznat po svom delu „Veliki Getsbi“, koje je postalo klasično delo američke književnosti.</p>
            <a href="https://archive.org/details/fscottfitzgerald0000unse_c8h2" class="btn" target="_blank">Pregled djela</a>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <div class="artist">
          <img src="../assets/harperlee.webp" alt="Harper Lee">
          <div class="text">
            <h3>Harper Lee</h3>
            <p>Nelle Harper Lee (1926–2016) bila je američka spisateljica, najpoznatija po svom romanu „Ubiti pticu rugalicu“, koji se bavi temama rasizma i pravde.</p>
            <a href="https://ia902807.us.archive.org/25/items/dli.bengal.10689.12863/10689.12863_text.pdf" class="btn" target="_blank">Pregled djela</a>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <div class="artist">
          <img src="../assets/catcher.jpg" alt="J.D. Salinger">
          <div class="text">
            <h3>J.D. Salinger</h3>
            <p>Jerome David Salinger (1919–2010) bio je američki romanopisac, najpoznatiji po svom romanu „Lovac u žitu“, koji je postao klasično delo američke književnosti i istražuje teme izolacije i adolescencije.</p>
            <a href="https://archive.org/details/jdsalinger0000unse_z6t6" class="btn" target="_blank">Pregled djela</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.artist {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgb(0, 0, 0, 0.2);
  border: 3px solid lightblue;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.artist img {
  width: 250px;
  height: 350px;
  object-fit: cover;
  object-position: top;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
  margin-bottom: 10px;
}

.artist .text {
  text-align: center;
}

.artist h3 {
  font-size: 25px;
  margin-top: 0;
}

.artist p {
  font-size: 15px;
  color: #333;
}

.btn {
  display: inline-block;
  padding: 8px 12px;
  margin-top: 10px;
  background-color: #007BFF;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

.btn:hover {
  background-color: #0056b3;
}

</style>