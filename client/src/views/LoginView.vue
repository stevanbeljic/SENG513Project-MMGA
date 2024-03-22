<script>
import "../assets/login.css";
import "../router/index.js";
import router from "../router/index.js";
    export default {
        methods: {
            async handleLogin() {
                console.log('Button clicked!');
                const route = "http://localhost:7003/user/getAccount?username=" +
                this.username +
                "&password=" +
                this.password;
                console.log(route);
                console.log(this.username);
                console.log(this.password);
                const response = await fetch(route, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(),
                });
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
        <form id="login-form" @submit.prevent="getFormValues">
            <div id="login-Header">
                <h2>Login</h2>
            </div>
            <div class="form-input">
                <input type="text" v-model="username" placeholder="Username" required>
            </div>
            <div class="form-input">
                <input type="password" v-model="password" placeholder="Password" required>
                <a class="login-link" href="https://www.google.com/"><p>Forgot Password</p></a>
            </div>
            <div id="login-button">
                <button @click="handleLogin" type="submit">Login</button>
                <a class="login-link" href="./signup"><p>Not a member? Sign up here</p></a>
            </div>
        </form>
    </div>
    </div>
</template>

