import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './MainPage.css';
import { getCookie } from './Utils';

let friendChat;

function fetchAllUserData() {
    // Placeholder for API call to fetch user data
    let NamesArray = ["Alice", "Bob", "Charlie"];
    fetch('http://localhost:3001/api/users/')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            data.forEach((user) => {
                let userID = getCookie("user");
                NamesArray = [];
                if (userID != user.id) {
                    NamesArray.push(user.name);
                }
            })
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
    const AvatarsArray = ['avatar1.png', 'avatar2.png', 'avatar3.png'];
    return { usernames: NamesArray, avatars: AvatarsArray };
}

function constructFriend(Username, Avatar, Iter) {
    return (
        <div key={4 * Iter} className="chat-item">
            <div key={4 * Iter + 1} className="chat-item-avatar">
                <img key={4 * Iter + 2} src={Avatar} alt={`img`} />
            </div>
            <div key={4 * Iter + 3} className="chat-item-username">{Username}</div>
        </div>
    );
}

function MainPage() {
    const nav = useNavigate();
    let userid = getCookie("user");
    useEffect(() => {
        if (userid === "" || userid === null || userid === "Null") {
            console.log("Empty userid, please log in again.")
            nav("/");
        };
    }, [userid]);
    console.log("logged in as: " + userid);
    const { usernames, avatars } = fetchAllUserData();
    var friendsList = [];

    for (let i = 0; i < usernames.length; i++) {
        friendsList.push(constructFriend(usernames[i], avatars[i], i));
    }


    return (
        <div className="main-page">
            <div className="sidebar">
                <div className="profile">
                    <div className="avatar"></div>
                    <div className="username">Username</div>
                </div>
                <div className="chats">
                    {friendsList}
                </div>
            </div>
            <div className="open-chat">
                <div className="chat-header">
                    <div className="chat-user-info">
                        <div className="chat-user-avatar">

                        </div>
                        <div className="chat-user-name">Username</div>
                    </div>
                </div>

                <div className="chat-messages">

                </div>
                <div className="chat-input">
                    <input type="text" placeholder="Type your message here" className="chat-input-box" />
                    <button className="send-button">Send</button>
                </div>
            </div>


        </div>
    );
}
export default MainPage;