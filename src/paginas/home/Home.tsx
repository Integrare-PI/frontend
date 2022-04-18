import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import { Link } from 'react-router-dom';



function Home() {

    return (
        <>
        <Grid container direction='row' justifyContent='flex-start' alignItems='center' className='background'>
            <Grid item xs={8} alignItems='center' className='grid-esquerda'>
                <Box paddingX={10}><div><img src="https://i.imgur.com/nh6JxLp.png" width={600}/></div></Box>
            </Grid>
                <Grid  item xs={4} alignItems='center' justifyContent='center'>
                    <Box className='grid-direita'>
                    <Box className='box-bemVinde'>
                         <Typography className='texto, position-text' component='h3' align='center'><h1 className='fonte1'>Bem Vinde!</h1>
                         <h2 className='fonte'>A Integrare ajuda você a se conectar e compartilhar com educadores especializados!</h2></Typography>
                         <Box>
                    <Link to="/contatos" className="text-decorator-none">
                             <Button className='botao4' variant="outlined">Nos conheça melhor</Button>
                         </Link>
                         <Box >
                             <Typography><p className='text-inf'>NÓS ACREDITAMOS NA EDUCAÇÃO INCLUSIVA E EQUITATIVA DE QUALIDADE</p></Typography>
                         </Box>
                    </Box>
                    </Box>
                    </Box>
                </Grid>
        </Grid>

        </>
    );
}

export default Home;