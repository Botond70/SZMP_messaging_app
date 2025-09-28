import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login-Register.css';
import { setCookie, sendLoginRequest } from './Utils';

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const nav = useNavigate();


    const handleLogin = async () => {
        setError("");
        if (!username || !password) {
            setError("Minden mező kitöltése kötelező!");
            return;
        }
        try {
            const res = await sendLoginRequest(username, password);
            if (res.status === 200) {
                let res_json = res.json();
                res_json.then(data => {
                    console.log(data.message);
                    const parsed_user_token = "" + data.userid;
                    setCookie("user", parsed_user_token, 30);
                    nav("/chats");
                });

            } else if (res.status === 401) {
                setError("Hibás felhasználónév vagy jelszó!");
            } else {
                setError("Ismeretlen hiba!");
            }
        } catch (err) {
            setError("Nem sikerült kapcsolódni a szerverhez.");
            console.log(err);
        }
    };

    return (
        <div className="landing-bg">
            <div className="register-container">
                <h1 className="title">DEIKTALK</h1>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    className="input"
                    type="text"
                    placeholder="USR"
                    value={username}
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    type="password"
                    placeholder="PSW"
                    value={password}
                />
                <button onClick={handleLogin} className="register-btn">Login</button>
                {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
                <div className="login-link-container">
                    <Link to="/register" className="login-link">Nincs fiókod? Regisztrálj!</Link>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;