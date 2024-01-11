import React, {useState} from "react";
import {useNavigate, Link} from 'react-router-dom';
import {FiArrowLeft} from "react-icons/fi";

import api from '../../services/api';

import './styles.css';
import logo from '../../assets/java.png'

export default function NewPassword() {

    const [id, setId] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notes, setNotes] = useState('');
    const [userId, setUserId] = useState('');
    
    const token = localStorage.getItem('token');

    const history = useNavigate();

    async function createNewPassword(e) {
        e.preventDefault();

        const data = {
            description,
            url,
            username,
            password,
            notes,
            userId: {
                id: userId
            }
        };

        try {
            await api.post('myaccess/v2/password', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
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
        <div className="new-password-container">
            <div className="content">
                <section className="form">
                    <img src={logo} alt="Logo"/>
                    <h1>Cadastrar Nova Senha</h1>
                    <p>Preencha as informações do cadastro e clique em 'Adicionar'</p>
                    <Link className="back-link" to="/password">
                        <FiArrowLeft size={16} color="251fc5"/>
                        Home
                    </Link>
                </section>
                
                <form onSubmit={createNewPassword}>
                    <input
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Url"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                    />
                    <input
                        placeholder="Usuário"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input
                        placeholder="Nota"
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                    />
                    <input
                        placeholder="Código do usuário"
                        value={userId}
                        onChange={e => setUserId(e.target.value)}
                    />
                    
                    <button className="button" type="submit">Adicionar</button>
                </form>
                
            </div>
        </div>
    );
}