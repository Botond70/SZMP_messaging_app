import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login-Register.css';

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
            const res = await fetch("http://localhost:3001/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: username,
                    password
                })
            });
            if (res.status === 200) {
                // Optionally store user/token here
                nav("/chats");
            } else if (res.status === 401) {
                setError("Hibás felhasználónév vagy jelszó!");
            } else {
                setError("Ismeretlen hiba!");
            }
        } catch (err) {
            setError("Nem sikerült kapcsolódni a szerverhez.");
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