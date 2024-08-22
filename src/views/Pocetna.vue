<template>
  <div class="pocetna">
    <button @click="oNama()" class="btn btn-primary">Idi na O nama page</button>
    
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
    name: 'Pocetna',
    data(){
      return {
            username: '',
            password: '',
            error: '',
            allUsers: [],
            firstnameR: '',
            lastnameR: '',
            usernameR: '',
            passwordR: '',
            typeR: ''
      }
    },
    methods: {
      oNama(){

        this.$router.push('onama')


      }
    }
  }



</script>


