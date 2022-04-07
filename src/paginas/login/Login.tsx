import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../services/Services';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { addToken } from '../../store/tokens/actions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Login() {
    let history = useHistory()
    
    const dispatch = useDispatch();

    const [token, setToken] = useState('')

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome_completo: "",
        usuario: "",
        senha: "",
        foto: "",
        token: "",
        tipo_usuario: ""
    })

    useEffect(() => {
        if(token !== ""){
            dispatch(addToken(token));
            history.push('/home')
        }
    }, [token])
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            toast.success('Usuário logado com sucesso!', {
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
            
            toast.error('Dados do usuário inconsistente. Erro ao logar', {
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
    }

    return (
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid alignItems='center' xs={12} className='imagem'>
                    <Box paddingX={60}>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3'  className='textos1'>Entrar</Typography>
                            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth required />
                            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth required />
                            <Box marginTop={2} textAlign='center'>
                                <Button className='botao' type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Box>
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                            </Box>
                            <Link to='/cadastrousuario'>
                                <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                            </Link>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
    );
}

export default Login;