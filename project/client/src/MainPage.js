import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './MainPage.css';
import { getCookie, sendFetchUserByIdRequest, sendFetchAllUsers } from './Utils';


function constructFriend(Username, Avatar, UserId, onClick) {
    return (
        <div key={UserId} className="chat-item" onClick={() => onClick({ name: Username, id: UserId })}>
            <div className="chat-item-avatar">
                <img className="chat-item-avatar-image" src={Avatar} alt={`img`} />
            </div>
            <div className="chat-item-username">Elérhető: {Username}</div>
        </div>
    );
}

function MainPage() {
    const nav = useNavigate();
    const [username, setUsername] = useState("");
    const [allusers, setAllUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
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
        if (userid !== "" && userid !== null && username !== "" && username !== null) {
            console.log("logged in as: " + userid + ", " + username);
        }
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
    const friendsList = chattableUsers.map((user) =>
        constructFriend(user.name, avatar, user.id, setSelectedUser)
    );


    return (
        <div className="main-page">
            <div className="sidebar">
                <div className="profile">
                    <div className="avatar"></div>
                    <div className="username">Üdvözöljük {username}!</div>
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
                        <div className="chat-user-name">
                            {selectedUser ? `Chattelés vele: ${selectedUser.name}` : "Válassz egy felhasználót a bal oldali listából!"}
                        </div>
                    </div>
                </div>

                <div className="chat-messages">

                </div>
                <div className="chat-input">
                    <input type="text" placeholder="Ide írj egy üzenetet..." className="chat-input-box" />
                    <button className="send-button">Küldés</button>
                </div>
            </div>


        </div>
    );
}
export default MainPage;