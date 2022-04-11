import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import { Link } from 'react-router-dom';



function Home() {

    return (
        <>
            <Grid container className='caixa' direction="row" justifyContent="center" alignItems="center" >
                <Grid alignItems="center" item xs={5} className='caixa1'>
                    </Grid>
                 </Grid>
                 
        </>
    );
}

export default Home;

/* <Box className='caixa2' paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>A Integrare ajuda você a se conectar e compartilhar com educadores especializados!</Typography>
                    <Box display="flex" justifyContent="center">
                        <Box>
                            <Link to="/contatos" className="text-decorator-none">
                                <Button variant="outlined" className='botao'>Nos conheça melhor</Button>
                            </Link>
                        </Box>
                    </Box>
                    </Box> */