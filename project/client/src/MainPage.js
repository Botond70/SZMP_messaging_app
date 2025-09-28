import React from 'react';
import './MainPage.css';

function MainPage() {
    return (
        <div className="main-page">
            <div className="sidebar">
                <div className="profile">
                    <div className="avatar"></div>
                    <div className="username">Username</div>
                </div>
                <div className="chats">

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