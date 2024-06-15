import style from '../components/style.css'
import logo from '../../imgs/logo.png'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from 'react'



 
function navbar() { 
   const [username,setUserName] = useState("");
 
   async function carregarNomeUsuario(username,token){
    try {
        const resposta = await fetch("/usuarios/"+usuario_id,{
            headers: {
                'x-access-token': token
            }
        })

        const dados = await resposta.json()
        setNome(dados.nome)
    } catch (error) {
        
    }
}

// Função para carregar usuários
async function carregarUsuarios(token) {
    try {
        // Faz a chamada para a API através do proxy
        const resposta = await fetch('/', {
            headers: {
                'x-access-token': token
            }
        })

        if (resposta.status === 401) {
            localStorage.removeItem('token')
            alert("Usuário não autenticado")
            navigate("/logar")
        }
        if (!resposta) {
            throw new Error("Erro requisição:" + resposta.status)
        } else { // Não é necessário o else
            const dados = await resposta.json()
            setUsuarios(dados)
        }
    } catch (error) {
        console.error("Errro ao buscar os usuaários", error)
    }
}

    return (
        <main>
            <nav class="navbar bg-body-tertiary te">
                <div class="container-fluid">
                    <img src={logo} width="8%" />
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Procurar" aria-label="Search" />
                        <button class="btn btn-outline-dark" type="submit">Achar</button>
                    </form>
                </div>
            </nav>
            <div className='col-2 te'>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item">
                        <a class="nav-link active " aria-current="page" href="amigos"> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active bi bi-person" aria-current="page" href="amigos"> Amigos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active bi bi-cursor " aria-current="page" href="feed"> Feed</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active bi bi-chat-left-dots" aria-current="page" href="conversa"> Conversas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active bi bi-people" aria-current="page" href="grupos"> Grupos</a>
                    </li>

                </ul>
            </div>




        </main>
    );
}

export default navbar;