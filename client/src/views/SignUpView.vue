<script>
    import "../assets/login.css"
</script>

<template>
    <div id="page-container">
    <div id="login-container">
        <form id="login-form">
            <div id="login-Header">
                <h2>Sign Up</h2>
            </div>
            <div class="form-input">
                <input type="email" name="Email" placeholder="Email">
            </div>
            <div class="form-input">
                <input type="text" name="Username" placeholder="Username">
            </div>
            <div class="form-input">
                <input type="password" name="password" placeholder="Password">
            </div>
            <div id="login-button">
                <button>Sign Up</button>
                <a class="login-link" href="./login"><p>Already have an account? Sign in here</p></a>
            </div>
        </form>
    </div>
    </div>
</template>
