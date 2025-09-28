export function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    let out = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=Lax";
    document.cookie = out;
};

export function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
};

export async function sendLoginRequest(username, password) {
    return fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: username,
            password
        })
    });
};

export async function sendRegisterRequest(username, password, birthday) {
    return fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: username,
            password,
            birthday
        })
    });
};

export async function sendFetchUserByIdRequest(userId) {
    if (userId === "" || userId === null || userId === "Null") return null;
    const res = await fetch("http://localhost:3001/api/users/" + userId, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data;
}

export async function sendFetchAllUsers() {
    const res = await fetch("http://localhost:3001/api/users/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data;
}