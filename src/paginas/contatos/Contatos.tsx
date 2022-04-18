import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Contatos.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Contatos() {
    return (
        <>
            <Grid>
                <Grid xs={12}>
                    <Grid container justifyContent='center'>
                        <Grid item xs={6} className="logo-integrare">
                            <Box >
                                <img src="https://i.imgur.com/Jbxbkjh.png" alt="logo integrare" style={{ width: "800px", height: "300px" }} />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingRight={7} paddingLeft={7}>
                                <Box paddingBottom={2}>
                                    <Typography variant='h3' component='h3' align='center'>
                                        O que é?
                                    </Typography>
                                </Box>
                                <Box paddingBottom={2} >
                                    <Typography className='espaco-letras' align='center'>
                                        A Integrare é uma rede social de educação inclusiva criada a partir da ODS 4 - Educação de qualidade.

                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingLeft={7} paddingRight={7}>
                                <Box paddingBottom={2}>
                                    <Typography variant='h3' component='h3' align='center'>
                                        Como?
                                    </Typography>
                                </Box>
                                <Typography className='espaco-letras' align='center'>
                                    Te ajudamos a se conectar e compartilhar com educadores especializados.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingRight={7} paddingLeft={7}>
                                <Box paddingBottom={2}>
                                    <Typography variant='h3' component='h3' align='center'>
                                        Para Quem?
                                    </Typography>
                                </Box>

                                <Typography className='espaco-letras' align='center'>
                                    É destinada a alunes e responsáveis de crianças e adolescentes com deficiências e educadores especializados na área.
                                </Typography>

                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingLeft={7} paddingRight={7}>
                                <Box paddingBottom={2} >
                                    <Typography variant='h3' component='h3' align='center'>
                                        Objetivos
                                    </Typography>
                                </Box>
                                <Typography className='espaco-letras' align='center'>
                                    <a href="https://brasil.un.org/pt-br/sdgs/4">ODS 4</a> - Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todas e todos.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs={6} >
                        <Box paddingBottom={7} >
                            <Typography variant='h2' component='h2' align='center' className='box-texto'>
                                Sobre nós
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container xs={12} className="padding-bot" justifyContent='center' alignItems='center' >
                    <Box justifyContent="center" alignItems="center">
                        <Box justifyContent="center" alignItems="center" >
                            <img className='box-fotos' src="https://i.ibb.co/h937w0b/euzinho-1.png" alt="Bruno Requena" />
                        </Box>
                        <Box >
                            <Typography variant='h5' component='h5' align='center'>
                                Bruno Requena
                            </Typography>
                            <Typography variant='h6' component='h6' align='center'>
                                Desenvolvedor Full Stack
                            </Typography>
                        </Box>
                        <Box alignItems="center" justifyContent="center" className='box-icones' >
                            <a href="https://github.com/BrunoRequena" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#8D2E87" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/bruno-requena-2795411a4/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#8D2E87" }} />
                            </a>
                        </Box>

                    </Box>
                    <Box>
                        <Box justifyContent="center" alignItems="center">
                            <img className='box-fotos' src="https://i.ibb.co/K9VCt6f/gustavo-1.png" alt="Gustavo Rodrigues" />
                        </Box>

                        <Box >
                            <Typography variant='h5' component='h5' align='center'>
                                Gustavo Rodrigues
                            </Typography>
                            <Typography variant='h6' component='h6' align='center'>
                                Desenvolvedor Full Stack
                            </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones' >

                            <a href="https://github.com/GuGitt" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#8D2E87" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/gustavo-rodrigues-5824851b6/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#8D2E87" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <img className='box-fotos' src="https://i.ibb.co/rv5s111/joyce-1.png" alt="Joyce Lopes" />
                        </Box>

                        <Box >
                            <Typography variant='h5' component='h5' align='center'>
                                Joyce Lopes
                            </Typography>
                            <Typography variant='h6' component='h6' align='center'>
                                Desenvolvedora Full Stack
                            </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href="https://github.com/joycelopes" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#8D2E87" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/joycecosta-oficial/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#8D2E87" }} />
                            </a>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <img className='box-fotos' src="https://i.ibb.co/TW4RnB4/laura-1.png" alt="Laura Barros" />
                        </Box>

                        <Box >
                            <Typography variant='h5' component='h5' align='center'>
                                Laura Barros
                            </Typography>
                            <Typography variant='h6' component='h6' align='center'>
                                Desenvolvedora Full Stack
                            </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href=" https://github.com/LauraBSouza" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#8D2E87" }} />
                            </a>
                            <a href=" https://www.linkedin.com/in/laura-barros-souza/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#8D2E87" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <img className='box-fotos' src="https://i.ibb.co/jRZ1d2k/lucas-1.png" alt="Lucas Rodrigues" />
                        </Box>

                        <Box >
                            <Typography variant='h5' component='h5' align='center'>
                                Lucas Rodrigues
                            </Typography>
                            <Typography variant='h6' component='h6' align='center'>
                                Desenvolvedor Full Stack
                            </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href="https://github.com/LucasRodriguees" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#8D2E87" }} />
                            </a>
                            <a href=" https://www.linkedin.com/in/lucas-rodrigues-a264111b1/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#8D2E87" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <img className='box-fotos' src="https://i.ibb.co/1RbKbk1/rebecca-1.png" alt="Rebecca Cruz" />
                        </Box>

                        <Box >
                            <Typography variant='h5' component='h5' align='center'>
                                Rebecca Cruz
                            </Typography>
                            <Typography variant='h6' component='h6' align='center'>
                                Desenvolvedora Full Stack
                            </Typography>

                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href="https://github.com/acceberc" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#8D2E87" }} />
                            </a>
                            <a href=" https://www.linkedin.com/in/acceberc/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#8D2E87" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <img className='box-fotos' src="https://i.ibb.co/9VRpp7Z/will-1.png" alt="Willian Menezes" />
                        </Box>

                        <Box >
                            <Typography variant='h5' component='h5' align='center'>
                                Willian Menezes
                            </Typography>
                            <Typography variant='h6' component='h6' align='center'>
                                Desenvolvedor Full Stack
                            </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href="https://github.com/WillMenezesSH" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#8D2E87" }} />
                            </a>
                            <a href=" https://www.linkedin.com/in/willian-menezes-4aa169211/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#8D2E87" }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Contatos;