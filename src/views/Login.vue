<template>
    <div style="padding: 300px;">

        <h1>Dobrodosao na login/register page!</h1>
        <br>
        <button class="btn btn-primary" @click="openLoginModal()">Sign In</button>
        <hr>

        <div class="login">
         
        <vue-final-modal v-model="showModal" name="loginModal" classes="modal-container" content-class="modal-content">
            <tr>
                    <td><Button class="modal_close" @click="showModal=false" style="display: flex; margin-left: 200px;">X</Button></td>
                </tr>
            <img src="../assets/logo.png" alt="" style="height: 100px; width: 100px; display: flex; margin-left: 60px;"> 
            <table>
                

                <tr>
                    <td style="font-weight: bold;">Username:</td>
                </tr>
                <tr>
                    <td><input type="text" v-model="username" name="username" placeholder="Vase ime ovdje" style="border: 1px solid black; width: 200px;"></td>
                </tr>

                <tr>
                    <td style="font-weight: bold;">Password:</td>
                </tr>
                <tr>
                    <td><input type="password" v-model="password" name="password" placeholder="Vasa sifra ovdje" style="border: 1px solid black; width: 200px;"></td>
                </tr>
                <br>
                <tr>
                    <td><button class="btn btn-success" @click="confirm()" style="margin-right: 5px;">Confirm</button>
                    <button class="btn btn-danger" @click="logout()">Logout</button></td>
                </tr>



            </table>
        </vue-final-modal>
        </div>





        <button class="btn btn-success" @click="openRegisterModal()">Register</button>

        <div>
         
         <vue-final-modal v-model="showModalR" name="RegisterModal" classes="modal-container" content-class="modal-content">
             <tr>
                     <td><Button class="modal_close" @click="showModalR=false" style="display: flex; margin-left: 200px;">X</Button></td>
                 </tr>
             <img src="../assets/logo.png" alt="" style="height: 100px; width: 100px; display: flex; margin-left: 60px;"> 
             <table>
                 
 
                 <tr>
                     <td style="font-weight: bold;">Ime:</td>
                 </tr>
                 <tr>
                     <td><input type="text" v-model="firstnameR" name="firstname" placeholder="Vase ime ovdje" style="border: 1px solid black; width: 200px;" required></td>
                 </tr>
 
                 <tr>
                     <td style="font-weight: bold;">Prezime:</td>
                 </tr>
                 <tr>
                     <td><input type="text" v-model="lastnameR" name="lastname" placeholder="Vase prezime ovdje" style="border: 1px solid black; width: 200px;" required></td>
                 </tr>

                 <tr>
                     <td style="font-weight: bold;">Username:</td>
                 </tr>
                 <tr>
                     <td><input type="text" v-model="usernameR" name="username" placeholder="Vase ime ovdje" style="border: 1px solid black; width: 200px;" required></td>
                 </tr>
 
                 <tr>
                     <td style="font-weight: bold;">Password:</td>
                 </tr>
                 <tr>
                     <td><input type="password" v-model="passwordR" name="password" placeholder="Vasa sifra ovdje" style="border: 1px solid black; width: 200px;" required></td>
                 </tr>
                 <br>
                 <tr>
                     <td colspan="2"><button class="btn btn-success" @click="register()">Confirm</button></td>
                     

                 </tr>
 
 
             </table>
         </vue-final-modal>
         </div>

    </div>

</template>


<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>


<script>
import allUsers from '../data/users.js';
import { VueFinalModal, $vfm } from 'vue-final-modal';
export default {
  components: {VueFinalModal},
  name: 'Login',
  data(){
    return {
        showModal: false,
        showModalR: false,
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        firstnameR: '',
        lastnameR: '',
        usernameR: '',
        passwordR: '',
        addUser: [],

    }
  },

  methods: {
    openLoginModal(){
        $vfm.show('loginModal')
    },
    openRegisterModal(){
        $vfm.show('RegisterModal')
    },
    confirm(){
        var users = JSON.parse(localStorage.getItem('allUsers'));
        let user = users.find(user=>user.username==this.username && user.password==this.password);
        if(user) {
            localStorage.setItem('loggedIn', JSON.stringify(user));
            alert('Dobrodošli, ' + user.firstname + '!');
            this.$router.push('/pocetna');
        }
        else {
        alert('Nema korisnika!');
        }
    },
    register(){
        var addUser = JSON.parse(localStorage.getItem('allUsers'));
        addUser.push({firstname : this.firstnameR, lastname : this.lastnameR, 
        username : this.usernameR, password : this.passwordR})

        localStorage.setItem('allUsers', JSON.stringify(addUser))

        alert(this.firstnameR + ', uspjesno ste se registrovali!');

        this.firstnameR = '';
        this.lastnameR = '';
        this.usernameR = '';
        this.passwordR = '';

        
    },
    logout(){
        localStorage.removeItem('loggedIn')
        this.$router.push('/')
    },
  },
  created(){
    if(localStorage.getItem('allUsers')==null){
        this.allUsers = [{
            firstname: "bojan",
            lastname: "tomovic",
            username: "bojant",
            password: "bojan333"},
            {
            firstname: "nikola",
            lastname: "petric",
            username: "jona3424",
            password: "jona333"  
            }]

            localStorage.setItem('allUsers', JSON.stringify(this.allUsers))
    }
    else {
        this.allUsers = JSON.parse(localStorage.getItem('allUsers'))
    }
}

  
}
</script>