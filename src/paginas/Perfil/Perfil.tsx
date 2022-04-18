import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem'
import CadastroTema from '../../components/temas/CadastroTema/CadastroTema'

import User from '../../models/User'
import { buscaId } from '../../services/Services'

import './Perfil.css'
import { UserState } from '../../store/tokens/UserReducer'

function Perfil() {

    let history = useHistory()

    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,
        usuario: "",
        nome_completo: "",
        senha: "",
        tipo_usuario: "",
        foto: ""

    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history.push("/login")
        }
    }, [token])

    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])


    var perfilComponent;

    if (user.tipo_usuario == "Prof") {
        perfilComponent =
            <Box className='card-principal'>
                <Box>
                    <Box className='card-container-imagem'>
                        <img className='card-imagem'
                            src={user.foto}
                            alt={user.nome_completo} />
                    </Box>

                    <Box className='card-container-info'>
                        <Box>
                            <h1>{user.nome_completo}</h1>
                            <hr />
                            <h1>{user.tipo_usuario}</h1>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Box display="flex" justifyContent="center" className='cadastro2'>
                       
                        <Box className='cadastro'>
                            <Link to="/formularioTema" className='novotema'>
                                <Button variant="outlined" className='botao3'> Novo Tema</Button>
                            </Link>

                        </Box>
                    </Box>
                </Box>
            </Box>
    } else {
        if (user.tipo_usuario == "Alune") {
            perfilComponent =
                <Box className='card-principal'>
                    <Box>
                        <Box className='card-container-imagem'>
                            <img className='card-imagem'
                                src={user.foto}
                                alt={user.nome_completo} />
                        </Box>

                        <Box className='card-container-info'>
                            <Box>
                                <h1>{user.nome_completo}</h1>
                                <hr />
                                <h1>{user.tipo_usuario}</h1>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Box display="flex" justifyContent="center" className='cadastro2'>
                            <Box className='cadastro'>

                                <Link to="/formularioPostagemAlune" className='novapostagem'>
                                    <Button variant="outlined" className='botao3'> Tenho dúvida</Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
        }
    }

    return (
        <>
            {perfilComponent}
        </>

    )
}

export default Perfil