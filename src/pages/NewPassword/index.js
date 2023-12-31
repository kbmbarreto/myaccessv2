import React from "react";
import {Link} from 'react-router-dom';
import {FiArrowLeft} from "react-icons/fi";

import './styles.css';
import logo from '../../assets/java.png'

export default function NewPassword() {
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
                
                <form>
                    <input placeholder="Descrição"/>
                    <input placeholder="Url"/>
                    <input placeholder="Usuário"/>
                    <input placeholder="Senha"/>
                    <input placeholder="Nota"/>
                    
                    <button className="button" type="submit">Adicionar</button>
                </form>
                
            </div>
        </div>
    );
}