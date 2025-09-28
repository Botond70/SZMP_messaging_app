import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './MainPage.css';
import { getCookie, sendFetchUserByIdRequest, sendFetchAllUsers } from './Utils';


function constructFriend(Username, Avatar, Iter) {
    return (
        <div key={4 * Iter} className="chat-item">
            <div key={4 * Iter + 1} className="chat-item-avatar">
                <img key={4 * Iter + 2} className="chat-item-avatar-image" src={Avatar} alt={`img`} />
            </div>
            <div key={4 * Iter + 3} className="chat-item-username">{Username}</div>
        </div>
    );
}

function MainPage() {
    const nav = useNavigate();
    const [username, setUsername] = useState("");
    const [allusers, setAllUsers] = useState([]);
    let userid = getCookie("user");

    useEffect(() => {
        if (userid === "" || userid === null || userid === "Null") {
            nav("/");
        } else {
            sendFetchUserByIdRequest(userid).then(user => {
                if (user && user.name) {
                    setUsername(user.name);
                }
            });
        }
    }, [userid, nav]);

    useEffect(() => {
        console.log("logged in as: " + userid + ", " + username);
    }, [userid, username]);

    useEffect(() => {
        sendFetchAllUsers().then(users => {
            if (users) {
                setAllUsers(users);
            }
        });
    }, []);

    const chattableUsers = allusers.filter(user => user.id + "" !== userid);


    const avatar = "https://cdn-icons-png.flaticon.com/256/983/983929.png";
    const friendsList = chattableUsers.map((user, i) =>
        constructFriend(user.name, avatar, i)
    );


    return (
        <div className="main-page">
            <div className="sidebar">
                <div className="profile">
                    <div className="avatar"></div>
                    <div className="username">{username}</div>
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