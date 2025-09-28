import React from 'react';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate, Link } from 'react-router-dom';
import './Login-Register.css';
import MainPage from './MainPage';


function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const nav = useNavigate();
    let shouldRedirect = false;

    const handleLogin = async () => {

        if (username === "teszt" && password === "1234") {

            setIsLoggedIn(true); // sikeres login
        } else {
            alert("Hibás belépési adatok!");
        }
    };

    React.useEffect((shouldRedirect) => {
        if (isLoggedIn) {
            nav("/chats");
        }

    }, [isLoggedIn, nav]);
    return (
        <div className="landing-bg">
            <div className="login-container">
                <h1 className="title">DEIKTALK</h1>
                <input onChange={(e) => setUsername(e.target.value)} className="input" type="text" placeholder="USR" />
                <input onChange={(e) => setPassword(e.target.value)} className="input" type="password" placeholder="PSW" />
                <button onClick={handleLogin} className="login-btn">LOG IN</button>
                <div className="register-link-container"><Link to="/register" className="register-link">Don't have an account? Register now!</Link></div>
            </div>
        </div>
    );
}
export default LoginPage