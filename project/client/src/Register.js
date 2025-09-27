import React from 'react';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate, Link } from 'react-router-dom';
import './Login-Register.css';
import MainPage from './MainPage';




function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistered, setISRegistered] = useState(false);
    const [isAvalilable, setIsAvailable] = useState(false);

    const nav = useNavigate();
    let shouldRedirect = false;

    const handleReg = async () => {

        if (isAvalilable) {
            // Placeholder for actual register logic
            setISRegistered(true); // sikeres register
        } else {
            alert("Ezen a néven már létezik felhasználó!");
        }
    };

    React.useEffect((shouldRedirect) => {
        if (isRegistered) {
            nav("/chats");
        }

    }, [isRegistered, nav]);
    return (
        <div className="landing-bg">
            <div className="register-container">
                <h1 className="title">DEIKTALK</h1>
                <input onChange={(e) => setUsername(e.target.value)} className="input" type="text" placeholder="USR" />
                <input onChange={(e) => setPassword(e.target.value)} className="input" type="password" placeholder="PSW" />
                <button onClick={handleReg} className="register-btn">Register</button>
                <div className="login-link"><Link to="/">Already have an account? Log in!</Link></div>
            </div>
        </div>
    );
}
export default RegisterPage