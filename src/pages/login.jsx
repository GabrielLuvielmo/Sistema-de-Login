import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const logar = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:8090/api/login', {
            username: username,
            password: password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const irPara= useNavigate();
    const handleClickCadastro = () => {
      irPara('/cadastro');
    };
    const handleLogin = async () => {
        try {
            const response = await logar(username, password);
            if(response ===true){
            irPara('/home')
            }
            else{
                alert("Não foi possível efetuar o login")
            }
            Navigate('/cadastro');
        } catch (error) {
            console.error('Erro ao se logar:', error);
        }
    };
    return (
        <div>
            <h1>TrêsáNo login SyStem</h1>
            <form>
                <label>
                    Usuário:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Senha:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
            <button onClick={handleClickCadastro}>Cadastrar</button>
        </div>
    );
    }
export default Login;
