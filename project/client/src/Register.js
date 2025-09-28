import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login-Register.css';
import { setCookie, sendRegisterRequest } from './Utils';

function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");
    const [error, setError] = useState("");
    const nav = useNavigate();

    const handleReg = async () => {
        setError("");
        if (!username || !password || !birthday) {
            setError("Minden mező kitöltése kötelező!");
            return;
        }
        try {
            const res = await sendRegisterRequest(username, password, birthday);
            if (res.status === 201) {
                let res_json = res.json();
                res_json.then(data => {
                    console.log(data.message);
                    const parsed_user_token = "" + data.userid;
                    setCookie("user", parsed_user_token, 30);
                    nav("/chats");
                });
            } else if (res.status === 400) {
                setError("Hiányzó vagy hibás adat!");
            } else if (res.status === 500) {
                setError("Szerverhiba! Próbáld újra.");
            } else {
                const data = await res.json();
                setError(data.error || "Ismeretlen hiba!");
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
                <input
                    onChange={(e) => setBirthday(e.target.value)}
                    className="input"
                    type="date"
                    placeholder="Birthday"
                    value={birthday}
                />
                <button onClick={handleReg} className="register-btn">Register</button>
                {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
                <div className="login-link-container">
                    <Link to="/" className="login-link">Already have an account? Log in!</Link>
                </div>
            </div>
        </div>
    );
}
export default RegisterPage