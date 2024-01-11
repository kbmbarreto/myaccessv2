import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';

import api from '../../services/api';
import logo from '../../assets/java.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleNewUserClick = () => {
      alert("Em implementação, enquanto isso, entre em contato com o suporte.");
  };

  async function login(e) {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    try {
        const response = await api.post('myaccess/v2/authenticate', data);

        localStorage.setItem('email', email);
        localStorage.setItem('token', response.data.token);

        history('/password');
    } catch (ex) {
        if (ex.response && ex.response.data && ex.response.data.status) {
            alert(`Erro ${ex.response.data.status}, ${ex.response.data.error}`);
        } else {
            alert('Algo deu errado! Tente novamente mais tarde.');
        }
    }
  }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="Java logo" className="logo-image" />

                <form onSubmit={login}>
                    <h1>MyAccess V2 - v.1.0.0</h1>
                    <input
                        placeholder="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Entrar</button>
                    <p className="link-container">
                        <Link className="button" to="#" onClick={handleNewUserClick}>Esqueci minha senha</Link>
                    </p>
                    <p className="link-container">
                        <Link className="button" to="/newUser">Criar minha conta</Link>
                    </p>
                </form>
            </section>
        </div>
        );
}