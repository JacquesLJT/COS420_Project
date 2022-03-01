import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import "./Login.css"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            // Loading screen?
            return
        }
        if (user) navigate("/dashboard");
    }, [user, loading, navigate]);

    return (
        <div className="login">
            <div className="login-container">
                <input
                    type="text"
                    className='login_textBox'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email Address"
                />
                <input
                    type="password"
                    className='login_textBox'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    className='login_btn'
                    onClick={() => logInWithEmailAndPassword(email, password)}
                >
                    Login
                </button>
                <button className="login_btn login_google" onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;