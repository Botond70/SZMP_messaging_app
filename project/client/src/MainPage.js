import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './MainPage.css';
import { getCookie, sendFetchUserByIdRequest, sendFetchAllUsers, sendFetchChatHistoryRequest, sendChatMessage } from './Utils';

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
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
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

    console.log("logged in as: " + userid + ", " + username);

    useEffect(() => {
        sendFetchAllUsers().then(users => {
            if (users) {
                setAllUsers(users);
            }
        });
    }, []);

    useEffect(() => {
        if (selectedUser) {
            const fetchMessages = async () => {
                try {
                    const response = await sendFetchChatHistoryRequest(userid, selectedUser.id);
                    if (response && Array.isArray(response.messages)) {
                        setMessages(response.messages);
                    } else {
                        setMessages([]);
                    }
                } catch (error) {
                    console.error("Failed to fetch chat history:", error);
                    setMessages([]);
                }
            };
            fetchMessages();
        }
    }, [selectedUser, userid]);

    const handleSendMessage = async () => {
        if (inputMessage.trim() !== "" && selectedUser) {
            try {
                const newMessage = await sendChatMessage(userid, selectedUser.id, inputMessage);
                if (newMessage) {
                    setMessages(prevMessages => [...prevMessages, newMessage.message]);
                    setInputMessage("");
                }
            } catch (error) {
                console.error("Failed to send message:", error);
            }
        }
    };

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
                        <div className="chat-user-avatar"></div>
                        <div className="chat-user-name">
                            {selectedUser ? `Chatelés vele: ${selectedUser.name}` : "Válassz egy felhasználót a bal oldali listából!"}
                        </div>
                    </div>
                </div>

                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.senderID + "" === userid ? 'my-message' : 'other-message'}`}>
                            <p>
                                {msg.senderID + "" === userid ? "Te" : selectedUser.name}: {msg.content}
                            </p>
                            <span>{new Date(msg.sentTime).toLocaleTimeString()}</span>
                        </div>
                    ))}
                </div>

                <div className="chat-input">
                    <input
                        type="text"
                        placeholder="Ide írj egy üzenetet..."
                        className="chat-input-box"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        disabled={!selectedUser}
                    />
                    <button onClick={handleSendMessage} className="send-button" disabled={!selectedUser}>Küldés</button>
                </div>
            </div>
        </div>
    );
}

export default MainPage;