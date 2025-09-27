import React from 'react';
import './MainPage.css';

function MainPage() {
    return (
        <div className="main-page">
            <div className="sidebar">
                <div className="profile"></div>
                <div className="chats"></div>
            </div>
            <div className="open-chat">
                <div className="chat-header"></div>
                <div className="chat-messages"></div>
                <div className="chat-input"></div>
            </div>


        </div>
    );
}
export default MainPage;