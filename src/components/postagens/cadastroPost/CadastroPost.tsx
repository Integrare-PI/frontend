import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import { useHistory, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Services';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/UserReducer';



function CadastroPost() {
    let history = useHistory()

    const { id } = useParams<{ id: string }>()

    const [temas, setTemas] = useState<Tema[]>([])

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    const [tema, setTema] = useState<Tema>({
        id: 0,
        disciplinas: "",
        descricao: ""
    })

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        assunto: '',
        texto_descricao: '',
        anexo: "",
        data: "",
        tema: null,
        usuario: null
    })

    useEffect(() => {
        if (token === "") {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,

            })
            history.push("/login")
        }
    }, [token])


    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== '') { // posivell
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {

            await put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,

            })


        } else {

            await post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem cadastrada com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,

            })

        }
        back()
    }

    function back() {
        history.push('/posts')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit} className='formulario'>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>

                <TextField
                    value={postagem.assunto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                    id="assunto" label="assunto" variant="outlined"
                    name="assunto" margin="normal" fullWidth
                />


                <TextField
                    value={postagem.texto_descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                    id="texto_descricao" label="texto_descricao" name="texto_descricao" variant="outlined"
                    margin="normal" fullWidth
                />

                <TextField
                    value={postagem.anexo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                    id="anexo" label="anexo" name="anexo" variant="outlined"
                    margin="normal" fullWidth
                />

                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>

                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"

                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}
                    >

                        {
                            temas.map(item => (
                                <MenuItem value={item.id}>{item.descricao}</MenuItem>
                            ))
                        }

                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" className="botao" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;