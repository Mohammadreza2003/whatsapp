import React from 'react';
import "./chat.css";
import "./leftSidebar.css";
const Chat = () => {
    return (
        <div className={"back-chat"}>
            <div className={"chats"}>
                <div className={"contacts"}>
                <img src="./img/Tehran.jpg" className={"avatar"}></img>
                <p className={"name"}>Tehran</p>
                </div>
                <br />
                <div className={"contacts"}>
                <img src="./img/New York.jpg" className={"avatar"}></img>
                <p className={"name"}>New York</p>
                </div>
                <br />
                <div className={"contacts"}>
                <img src="./img/London.jpg" className={"avatar"}></img>
                <p className={"name"}>London</p>
                </div>
                <br />
                <div className={"contacts"}>
                <img src="./img/Paris.jpg" className={"avatar"}></img>
                <p className={"name"}>Paris</p>
                </div>
            </div>
        </div>
    );
};

export default Chat;