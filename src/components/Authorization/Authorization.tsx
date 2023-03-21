import { useState } from 'react';
import './Authorization.css';

function Authorization() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setLogin(event.target.value);
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(`Login: ${login}, Пароль: ${password}`);

        setLogin('');
        setPassword('');
    }

    return (
        <form onSubmit={handleSubmit} className="authorization-form">
            <label>
                Логин:
                <input type="login" value={login} onChange={handleEmailChange} />
            </label>
            <br />
            <label>
                Пароль:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button className="my-button" type="submit">Войти</button>
        </form>
    );
}
export default Authorization;