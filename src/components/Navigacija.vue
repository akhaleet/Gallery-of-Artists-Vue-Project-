<template>
    <header>
    <div class="container-fluid">
      <h1 class="logo"><img src="../assets/logo.png" alt=""></h1>

      <nav>
        <ul>
          <li class="bezDropdownaPocetna"><router-link to="/pocetna">Početna</router-link></li>
          <li class="dropdown"><router-link to="/umetnine">Umjetnine</router-link>
                <ul class="dropdown-content">
                    <li><router-link to="/umetnine/slike">Slike</router-link></li>
                    <li><router-link to="/umetnine/skulpture">Skulpture</router-link></li>
                    <li><router-link to="/umetnine/ostalo">Ostale umjetnine</router-link></li>
                </ul>
          </li>
          <li class="bezDropdowna"><router-link to="/umetnici">Umjetnici</router-link></li>
          <li class="bezDropdowna"><router-link to="/mojnalog">Moj Nalog</router-link></li>
          <li class="bezDropdowna"><router-link to="/onama">O nama</router-link></li>
          <li class="bezDropdowna" style="color: red;"><router-link to="/">Odjavi se</router-link></li>
          <li class="bezDropdowna">
            <form id="forma" role="search">
            <input type="search" id="query" name="q"
            placeholder="Search..."
            aria-label="Search through site content">
            </form>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  </template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Work+Sans:400,600');




.container {
	width: 80%;

}

:root {
  --start-color: #55d6aa;
  --end-color: #ffffff; 
  --start-percentage: 0%; 
  --end-percentage: 100%; 
}


header {
    background: linear-gradient(45deg, var(--start-color) var(--start-percentage), var(--end-color) var(--end-percentage)),
    linear-gradient(to bottom, var(--start-color), var(--end-color));
    padding: 0;
    margin: 0;
    border-bottom: 1px solid black;
}

header::after {
  content: '';
  display: table;
  clear: both;
}

h1.logo {
    padding: 0;
    margin: 0;

}

.logo img{
    padding-top: 15px;
    width: 90px;
    height: 100px;
    float: left;
}

nav {
  float: right;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li.bezDropdowna {
  display: inline-block;
  margin-left: 70px;
  padding-top: 10px;
  position: relative;
}

nav li.bezDropdownaPocetna {
  display: inline-block;
  
  margin-right: 70px;
  
  padding-top: 10px;

  position: relative;
}

nav a {
  color: #444;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
}

nav a:hover {
  color: #000;
}

nav a::before {
  content: '';
  display: block;
  height: 5px;
  background-color: #444;

  position: absolute;
  top: 0;
  width: 0%;

  transition: all ease-in-out 250ms;
}

nav a:hover::before {
  width: 100%;
}

#forma {
  border: 1px solid black;
  background-color: lightblue;
  width: 300px;
  height: 44px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

input {
  all: unset;
  font: 16px system-ui;
  color: black;
  height: 100%;
  width: 100%;
  padding: 6px 10px;
}


.dropdown {
  position: relative;
  display: inline-block;
  padding-top: 10px;
  
  
}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 50px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border: 1px solid black;
}


.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  position: relative;
  display: inline-block;
}


.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.hoverUmetnine {
  pointer-events: none;
}

@media (max-width: 768px) {
    header {
        text-align: center;
    }

    .logo img {
        float: none;
        display: block;
        margin: 0 auto;
    }

    nav {
        float: none;
        clear: both;
    }

    nav ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
    }

    nav li.bezDropdowna, nav li.bezDropdownaPocetna {
        margin: 10px 0;
        padding-top: 0;
    }

    nav a {
        font-size: 16px;
    }

    #forma {
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
    }
}

</style>



<script>
export default {
  name: "Navigacija",
};
</script>