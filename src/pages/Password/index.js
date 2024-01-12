import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2, FiSearch } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logo from '../../assets/java.png';

export default function Password() {
  const [passwords, setPasswords] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [userId, setUserId] = useState(null);

  const email = localStorage.getItem('email');
  const token = localStorage.getItem('token');

  const history = useNavigate();

  async function logout() {
    localStorage.clear();
    history('/');
  }

  async function deletePassword(id) {
    try {
      await api.delete(`myaccess/v2/password/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPasswords(passwords.filter((password) => password.id !== id));
    } catch (ex) {
      if (ex.response && ex.response.data && ex.response.data.status) {
        alert(`Erro ${ex.response.data.status}, ${ex.response.data.error}`);
      } else {
        alert('Algo deu errado! Tente novamente mais tarde.');
      }
    }
  }

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await api.get(`myaccess/v2/user/email/${email}`);
        setUserId(response.data.id);
      } catch (error) {
        console.error('Erro ao buscar o ID do usuário:', error);
        // Tratar o erro conforme necessário
      }
    };

    fetchUserId();
  }, [email]);

  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        try {
          const response = await api.get(`myaccess/v2/password/user/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setPasswords(response.data);
        } catch (error) {
          console.error('Erro ao buscar senhas:', error);
        }
      };

      fetchData();
    }
  }, [userId, token]);

  const handleSearch = async () => {
    try {
      const response = await api.get(
        `myaccess/v2/password/user/${userId}/description/${searchString}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPasswords(response.data);
    } catch (error) {
      console.error('Erro ao buscar senhas:', error);
    }
  };

  return (
    <div className="password-container">
      <header>
        <img src={logo} alt="Java" />
        <span>
          Bem vindo(a), <strong>{email}</strong>
        </span>
        <Link className="button" to="/newPassword">
          Cadastrar Senha
        </Link>
        <div className="search-container">
          <input
            type="text"
            placeholder="Pesquisar descrição..."
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <button onClick={handleSearch} type="button">
            <FiSearch size={18} color="#251FC5" />
          </button>
        </div>
        <button onClick={logout} type="button">
          <FiPower size={18} color="#251FC5" />
        </button>
      </header>

      <h1>Senhas registradas</h1>
      <ul>
        {passwords.map((password) => (
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

            <button type={'button'}>
              <FiEdit size={20} color="#251FC5" />
            </button>
            <button type={'button'}>
                <FiTrash2 onClick={() => deletePassword(password.id)} size={20} color="#251FC5" />
            </button>
          </li>
          ))}
      </ul>
    </div>
    );
}