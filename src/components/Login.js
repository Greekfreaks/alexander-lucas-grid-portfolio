import React from "react";
import "./global-style.css"
import "./Login.css"

function Login() {
    return (
        <section id="login">
        <h2>Login</h2>
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"></input>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"></input>
            <button type="submit">Submit</button>
        </form>
        </section>
    );
    }

export default Login;