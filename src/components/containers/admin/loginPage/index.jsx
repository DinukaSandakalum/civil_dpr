import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchUserRequest } from '../../../../redux/actions/user/userActions';
import TopBar from "../../../templates/topBar";
import './index.css';

const LoginPage = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const user = useSelector(state => state.user);

    const handleLogin = () => {
        if (username && password) {
            dispatch(fetchUserRequest(username, password))
        } else {
            setShowError(true);
        }
    };

    return (
        <>
            <TopBar/>
            <div className="begin"></div>
            <div className="login-container">
                <h2>Login</h2>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleLogin}>Login</button>
                {showError && <p>Please enter both username and password.</p>}
            </div>

        </>
    );
};

export default LoginPage;
