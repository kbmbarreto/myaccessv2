import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower, FiEdit, FiTrash2} from "react-icons/fi";

import './styles.css';
import logo from '../../assets/java.png';

export default function Password() {
    return (
        <div className="password-container">
            <header>
                <img src={logo} alt= "Java"/>
                <span>Bem vindo(a), <strong>Kleber</strong>!</span>
                <Link className="button" to="/newPassword">Cadastrar Senha</Link>
                <button type="button">
                    <FiPower size={18} color="#251FC5"/>
                </button>
            </header>
            
            <h1>Senhas registradas</h1>
            <ul>
                <li>
                    <strong>Descrição:</strong>
                    <p>Santander</p>
                    <strong>Url:</strong>
                    <p>https://santander.com.br</p>
                    <strong>Usuário:</strong>
                    <p>teste</p>
                    <strong>Senha:</strong>
                    <p>Teste123</p>
                    <strong>Nota:</strong>
                    <p>Banco da conta corrente</p>
                    
                    <button type={"button"}>
                        <FiEdit size={20} color="#251FC5"/>
                    </button>
                    <button type={"button"}>
                        <FiTrash2 size={20} color="#251FC5"/>
                    </button>
                </li>
                
                <li>
                    <strong>Descrição:</strong>
                    <p>Santander</p>
                    <strong>Url:</strong>
                    <p>https://santander.com.br</p>
                    <strong>Usuário:</strong>
                    <p>teste</p>
                    <strong>Senha:</strong>
                    <p>Teste123</p>
                    <strong>Nota:</strong>
                    <p>Banco da conta corrente</p>
                    
                    <button type={"button"}>
                        <FiEdit size={20} color="#251FC5"/>
                    </button>
                    <button type={"button"}>
                        <FiTrash2 size={20} color="#251FC5"/>
                    </button>
                </li>
            </ul>
        </div>
    )
}