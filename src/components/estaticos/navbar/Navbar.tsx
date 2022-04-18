import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/actions';
import { UserState } from '../../../store/tokens/UserReducer';
import './Navbar.css';
import User from '../../../models/User'
import { buscaId } from '../../../services/Services'

function Navbar() {

    let history = useHistory()

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    const [user, setUser] = useState<User>({
        id: +id,
        usuario: "",
        nome_completo: "",
        senha: "",
        tipo_usuario: "",
        foto: "",
    })

    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }
    
    const dispatch = useDispatch();

    function goLogout() {

        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
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

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    var navbarComponent;

    if (token !== "") {
        if (user.tipo_usuario == "Prof") {
            navbarComponent =
                <AppBar position="static" className='barra'>
                    <Toolbar variant="dense">

                        <Box display="flex" justifyContent="space-between" className='titulos'>

                            <Link to='/feed' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit" className='titulos'>
                                        <img src="https://i.ibb.co/jHhYbvD/Integrare.png" alt="" />
                                    </Typography>
                                </Box>
                            </Link>

                            <Link to="/posts" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit" className='titulos'>
                                        Postagens
                                    </Typography>
                                </Box>
                            </Link>

                            <Link to="/temas" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit" className='titulos'>
                                        Temas
                                    </Typography>
                                </Box>
                            </Link>


                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit" className='titulos'>
                                    Sair
                                </Typography>
                            </Box>


                        </Box>

                    </Toolbar>
                </AppBar>
        } else {
            if (user.tipo_usuario == "Alune") {
                navbarComponent =
                    <AppBar position="static" className='barra'>
                        <Toolbar variant="dense">

                            <Box display="flex" justifyContent="space-between" className='titulos'>

                                <Link to='/feed' className='text-decorator-none'>
                                    <Box mx={1} className='cursor'>
                                        <Typography variant="h6" color="inherit" className='titulos'>
                                            <img src="https://i.ibb.co/jHhYbvD/Integrare.png" alt="" />
                                        </Typography>
                                    </Box>
                                </Link>

                                <Box mx={1} className='cursor' onClick={goLogout}>
                                    <Typography variant="h6" color="inherit" className='titulos'>
                                        Sair
                                    </Typography>
                                </Box>
                            </Box>
                        </Toolbar>
                    </AppBar>
            }
        }
    }
    else {
        navbarComponent = <AppBar className='barra' >
            <Toolbar style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                <Link to='/home'  >
                    <img src="https://i.ibb.co/M94Z8M2/Group-5.png" alt=""></img>
                    <img src="https://i.ibb.co/jHhYbvD/Integrare.png" alt="" />
                </Link>
                <Box paddingRight={5}>
                    <Link to='/login' className='text-decorator-none'>
                        <Button className='entrar' style={{ fontWeight: "bold" }}>Entrar</Button>
                    </Link>
                    <Link to='/cadastrousuario' className='text-decorator-none'>
                        <Button style={{ fontWeight: "bold" }} className='BOTAOO'>Cadastrar</Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar >

    }

    return (
        <>
            {navbarComponent}
        </>
    )

}


export default Navbar;