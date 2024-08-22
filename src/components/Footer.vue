<template>
    <footer class="footer">
      <p class="tekst">Copyright 2024, Bojan Tomović, Odsjek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu</p>
    </footer>
  </template>


<style>

.footer {
    background: linear-gradient(45deg, var(--start-color) var(--start-percentage), var(--end-color) var(--end-percentage)),
    linear-gradient(to bottom, var(--start-color), var(--end-color));
    padding: 0;
    margin: 0;
    border-top: 1px solid black;
    color: #333; 
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    position: fixed; 
    bottom: 0;
    width: 100%; 
}

.tekst {
    margin-top: 15px;
}
</style>