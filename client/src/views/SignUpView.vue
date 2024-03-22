<script>
    import "../assets/login.css";
import "../router/index.js";
//import router from "../router/index.js";
    export default {
        methods: {
            async handleSignUp() {
                if(this.username === "" || this.email === "" || this.password === ""){
                    console.log("Missing value. Username: " + this.username + " Email: " + this.email + " Password: " + this.password); 
                    return;
                }
                console.log("Username: " + this.username + " Email: " + this.email + " Password: " + this.password); 
                const body = {
                    username : this.username,
                    email : this.email,
                    password : this.password,
                    role: this.userDev
                }
                let route = "http://localhost:7003/user/createAccount";
                const response = await fetch(route, {method: "POST",headers: {"Access-Control-Allow-Origin" : "*",
                                                        "Access-Control-Allow-Methods" : "POST",
                                                        "Content-Type" : "application/json"}, body: JSON.stringify(body)});
                console.log(response);
                if(response.status==201){
                    //router.push("/");
                }
            },
        },
    };
</script>

<template>
    <div id="page-container">
    <div id="login-container">
        <form id="login-form">
            <div id="login-Header">
                <h2>Sign Up</h2>
            </div>
            <div class="form-input">
                <input type="email" v-model="email" placeholder="Email">
            </div>
            <div class="form-input">
                <input type="text" v-model="username" placeholder="Username">
            </div>
            <div class="form-input">
                <input type="password" v-model="password" placeholder="Password">
            </div>
            <div class="form-input" id="user-class-selector">
                <label for="userDev">Which user are you?</label>
                <select v-model="userDev" name="userDev"  id="userDev">
                    <option value="registered" selected>Gamer</option> 
                    <option value="developer">Developer</option>
                </select>
            </div>
            <div id="login-button">
                <button  type="submit" @click="handleSignUp">Sign Up</button>
                <a class="login-link" href="./login"><p>Already have an account? Sign in here</p></a>
            </div>
        </form>
    </div>
    </div>
</template>
