import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Services';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

function CadastroUsuario() {

    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>({
        id: 0,
        usuario: "",
        nome_completo: "",
        senha: "",
        tipo_usuario: "",
        foto: ""
    })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            usuario: "",
            nome_completo: "",
            senha: "",
            tipo_usuario: "",
            foto: ""
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha && user.senha.length >= 8) {
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('Usuário cadastrado com sucesso!', {
                    position: "top-right",
                    autoClose:2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
          
                })

            } catch (error) {
                console.log(`Error: ${error}`)
                
                toast.error('Usuário já existente!', {
                    position: "top-right",
                    autoClose:2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
          
                })
            }
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro!', {
                position: "top-right",
                autoClose:2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
      
            })

            setUser({ ...user, senha: "" })
            setConfirmarSenha("")           
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='body'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastre-se</Typography>

                        <TextField
                            value={user.nome_completo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='nome_completo'
                            label='nome_completo'
                            variant='outlined'
                            name='nome_completo'
                            margin='normal'
                            fullWidth required />

                        <TextField
                            value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='usuario'
                            label='e-mail'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            type='email'
                            fullWidth required />

                        <TextField
                            value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='foto'
                            label='foto'
                            variant='outlined'
                            name='foto'
                            margin='normal'
                            fullWidth />


                        <TextField
                            value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha'
                            label='senha'
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            type='password'
                            placeholder='a senha deve conter no mínimo 8 caracteres'
                            fullWidth required />

                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha'
                            label='confirmarSenha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            type='password'
                            placeholder='a senha deve conter no mínimo 8 caracteres'
                            fullWidth required />

                        <TextField
                            value={user.tipo_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='tipo_usuario'
                            label='tipo_usuario'
                            variant='outlined'
                            name='tipo_usuario'
                            margin='normal'
                            placeholder='aluno ou professor'
                            fullWidth required />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='botao'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );
}

export default CadastroUsuario;