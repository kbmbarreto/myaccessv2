import React, {useState} from "react";
import {useNavigate, Link} from 'react-router-dom';
import {FiArrowLeft} from "react-icons/fi";

import api from '../../services/api';

import './styles.css';
import logo from '../../assets/java.png'

export default function NewUser() {

    const [id, setId] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useNavigate();

    async function createNewUser(e) {
        e.preventDefault();

        const data = {
            user,
            email,
            password
        };

        try {
            const response = await api.post('myaccess/v2/user/register', data);
            
            const newUserId = response.data.id;
            
            alert(`Usuário cadastrado com sucesso. Seu ID de usuário é ${newUserId}.`);
            history('/');
        } catch (ex) {
            if (ex.response && ex.response.data && ex.response.data.status) {
                alert(`Erro ${ex.response.data.status}, ${ex.response.data.error}`);
            } else {
                alert('Algo deu errado! Tente novamente mais tarde.');
            }
        }
    }

    return (
        <div className="new-user-container">
            <div className="content">
                <section className="form">
                    <img src={logo} alt="Logo"/>
                    <h1>Cadastrar Novo Usuário</h1>
                    <p>Preencha suas informações e clique em 'Adicionar'</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="251fc5"/>
                        Home
                    </Link>
                </section>
                
                <form onSubmit={createNewUser}>
                    <input
                        placeholder="Nome"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                    <input
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    
                    <button className="button" type="submit">Adicionar</button>
                </form>
                
            </div>
        </div>
    );
}