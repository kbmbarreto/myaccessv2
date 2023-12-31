import React from 'react';
import './styles.css';

import logo from '../../assets/java.png';

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="Java logo" className="logo-image" />

                <form>
                    <h1>MyAccess V2</h1>
                    <input placeholder="username" />
                    <input type="password" placeholder="password" />

                    <button type="submit">Entrar</button>
                </form>
            </section>
        </div>
        );
}