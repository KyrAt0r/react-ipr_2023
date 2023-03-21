import React, {useState} from 'react';
import './UserInfo.css'
import {useHistory} from "react-router-dom";

// interface UserInfoProps {
//     isLoggedIn: boolean;
// }

function UserInfo() {
    const history = useHistory();
    const [isLoggedIn] = useState(true);
    const handleClick = () => {
        console.log(isLoggedIn);
        history.push('/')
    }

    return (
        <div className="user-info">
            {isLoggedIn ? (
                <div className="user-info__details">
                    <span className="user-info__username">Имя пользователя</span>
                    <button className="user-info__logout-button my-button" onClick={handleClick}>Выйти</button>
                </div>
            ) : (
                <button className="user-info__login-button my-button" onClick={handleClick}>Войти</button>
            )}
        </div>
    );
}

export default UserInfo;
