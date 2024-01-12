import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {FiPower, FiEdit, FiTrash2} from "react-icons/fi";

import api from '../../services/api'

import './styles.css';
import logo from '../../assets/java.png';

export default function Password() {

    const [passwords, setPasswords] = useState([]);

    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    const history = useNavigate();

    useEffect(() => {
        api.get('myaccess/v2/password/user/1', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setPasswords(response.data)
        })
    })

    return (
        <div className="password-container">
            <header>
                <img src={logo} alt= "Java"/>
                <span>Bem vindo(a), <strong>{email}</strong></span>
                <Link className="button" to="/newPassword">Cadastrar Senha</Link>
                <button type="button">
                    <FiPower size={18} color="#251FC5"/>
                </button>
            </header>
            
            <h1>Senhas registradas</h1>
            <ul>
                {passwords.map(password => (
                    <li key={password.id}>
                        <strong>Descrição:</strong>
                        <p>{password.description}</p>
                        <strong>Url:</strong>
                        <p>{password.url}</p>
                        <strong>Usuário:</strong>
                        <p>{password.username}</p>
                        <strong>Senha:</strong>
                        <p>{password.password}</p>
                        <strong>Nota:</strong>
                        <p>{password.notes}</p>

                        <button type={"button"}>
                            <FiEdit size={20} color="#251FC5"/>
                        </button>
                        <button type={"button"}>
                            <FiTrash2 size={20} color="#251FC5"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}