import React from 'react';
import "./leftSidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const LeftSidebar = () => {
    return (
        <div className={"mian"}>
            <div className={"header"}>
                <div className={"porf"}>
                    <img src="./img/user.png" className={"img"}></img>
                    <FontAwesomeIcon icon={faCircle} className={"circle"} />
                    <FontAwesomeIcon icon={faMessage} className={"message"} />
                    <FontAwesomeIcon icon={faEllipsisVertical} className={"fEV"} />
                </div>
            </div>
            <div className={"search-bar"}>
                <button  className={"but"}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                <input className={"input"} placeholder={"search or start new chat"}></input>
            </div>
            <br/>
        </div>
    );
};

export default LeftSidebar;