import React from 'react';
import './UserInfo.css'

interface UserInfoProps {
    isLoggedIn: boolean;
}

function UserInfo({isLoggedIn}: UserInfoProps) {
    const handleClick = () => {
        console.log(isLoggedIn);
    }

    return (
        <div className="user-info">
            {isLoggedIn ? (
                <div className="user-info__details">
                    <span className="user-info__username">Имя пользователя</span>
                    <button className="user-info__logout-button" onClick={handleClick}>Выйти</button>
                </div>
            ) : (
                <button className="user-info__login-button" onClick={handleClick}>Войти</button>
            )}
        </div>
    );
}

export default UserInfo;
