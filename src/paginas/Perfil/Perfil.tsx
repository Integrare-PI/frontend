import React, { useEffect, useState } from 'react'
import { Box, Button } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { TokenState } from '../../store/tokens/tokensReducer'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem' 
import CadastroTema from '../../components/temas/CadastroTema/CadastroTema'

import User from '../../models/User'
import { buscaId } from '../../services/Services'

import './Perfil.css'

function Perfil() {

    let history = useHistory()

    const id = useSelector<TokenState, TokenState["id"]>(
        (state) => state.id
    );

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,
        nome_completo: "",
        usuario: "",
        senha: "",
        foto: "",
        tipo_usuario: ""
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

    return (
        <Box className='card-principal'>
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
            <Box display="flex" justifyContent="space-between">
                <Box marginRight={1} className='cadastro'>
                    <ModalPostagem />
                </Box>

                <Box marginRight={1} className='cadastro'>
                <Link to="/formularioTema" className='novotema'>
                <Button variant="outlined" > Novo Tema</Button>
                </Link>
                    
                </Box>
            </Box>


        </Box>
    )
}

export default Perfil