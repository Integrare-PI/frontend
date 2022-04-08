import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Feed.css';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokensReducer';


function Feed() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
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
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={5} className='caixa1'>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>A Integrare ajuda você a se conectar e compartilhar com educadores especializados!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box>
                            <Link to="cadastrousuario" className="text-decorator-none">
                                <Button variant="outlined" className='botao'>Comece aqui</Button>
                            </Link>
                        </Box>

                        <Box>
                            <Link to="/contatos" className="text-decorator-none">
                                <Button variant="outlined" className='botao'>Nos conheça melhor</Button>
                            </Link>
                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={7} className='imagemhome'></Grid>

            </Grid>
        </>
    );
}

export default Feed;