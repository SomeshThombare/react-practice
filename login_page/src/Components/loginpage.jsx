import React from 'react';

function LoginForm() {
    return (
        <>
            <div>
                <input className="input-email" type="email" placeholder="Email" />
            </div>

            <div>
                <input className="input-password" type="password" placeholder="Password" />
            </div>

            <div>
                <button className="login-btn">Login</button>
                <button className="sign-in-btn">Sign in</button>
            </div>
        </>
    );
}

export default LoginForm;
