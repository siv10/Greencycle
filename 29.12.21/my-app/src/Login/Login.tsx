import React from 'react';
import './Login.css';
export function Login() {
    return (
        <div>
            <div className='form'>
                <h2>My Profile</h2>
                <form className="login-form" id="contactForm" >
                    <input type="text" id="name" name="name" placeholder="username" />
                    <input type="text" id="password" name="password" placeholder="password" />
                    <input id="subMit" type="submit" value={"Login"} />
                </form>
            </div>
        </div>
    )
}
