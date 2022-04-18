import { Typography, Grid, Button } from '@material-ui/core';
import './Home.css';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';


function Home() {

    return (
        <>
            <Grid container className='background'>
                <Grid item xs={8} alignItems='center' className='grid-esquerda'>
                    <Box paddingX={5}><div>< img src="https://i.imgur.com/nh6JxLp.png" className='foto-D' /></div></Box>
                </Grid>
                <Grid item xs={4} alignItems='center' justifyContent='center' className='grid-direita'>
                    <Box className='box-bemVinde' >
                        <Typography className='texto' component='h3' align='center'><h1 className='fonte1'>Bem Vinde!</h1>
                            <h2 className='fonte'>A Integrare ajuda você a se conectar e compartilhar com educadores especializados!</h2></Typography>
                        <Link to="/contatos" className='position-button' >
                            <Button className='botao4' >Nos conheça melhor</Button>
                        </Link>
                    </Box>
                    <Box className='align-texto' >
                        <Typography><p className='text-inf'>NÓS ACREDITAMOS NA EDUCAÇÃO INCLUSIVA E EQUITATIVA DE QUALIDADE</p></Typography>
                    </Box>
                </Grid>
            </Grid>

        </>
    );
}

export default Home;