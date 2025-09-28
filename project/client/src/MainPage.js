import React from 'react';
import './MainPage.css';

function fetchAllUserData() {
    // Placeholder for API call to fetch user data
    let NamesArray = ["Alice", "Bob", "Charlie"];
    const AvatarsArray = ['avatar1.png', 'avatar2.png', 'avatar3.png'];
    return { usernames: NamesArray, avatars: AvatarsArray };
}

function constructFriend(Username, Avatar) {
    return (
        <div className="chat-item">
            <div className="chat-item-avatar">
                <img src={Avatar} alt={`img`} />
            </div>
            <div className="chat-item-username">{Username}</div>
        </div>
    );
}

function MainPage() {
    const { usernames, avatars } = fetchAllUserData();
    var friendsList = [];

    for (let i = 0; i < usernames.length; i++) {
        friendsList.push(constructFriend(usernames[i], avatars[i]));
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