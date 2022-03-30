import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Contatos.css';

function Contatos() {
    return (

        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid item xs={12} >
                <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='sobre'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolor amet praesentium placeat asperiores, adipisci enim tempora, ex, consequatur qui assumenda. Et in sint numquam, quis nulla possimus nihil nostrum.</Typography>
                </Grid>
                
                <Grid alignItems="center" container direction="row" justifyContent="center" item xs={12}>
                    <Box className="container">
                        <Box className="box">
                            <Box className="inner">
                                <Box className="front">
                                    <img src='https://media-exp1.licdn.com/dms/image/C4D03AQGBx-x1Q_PPHg/profile-displayphoto-shrink_800_800/0/1646081433562?e=1653523200&v=beta&t=N7e3bF8DwMRYezRZktZtgPV-DdAxHrP0XJya5P1GJUU' alt='foto' />

                                </Box>
                                <Box className="back">
                                    <h3>Bruno</h3>
                                    <p> <a href="https://www.linkedin.com/in/bruno-requena-2795411a4/">Linkedin</a></p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="container">
                        <Box className="box">
                            <Box className="inner">
                                <Box className="front">
                                    <img src='https://media-exp1.licdn.com/dms/image/C4D03AQGCtKttSQ-TBQ/profile-displayphoto-shrink_200_200/0/1642185644393?e=1653523200&v=beta&t=4NDlM717090AUoyXfUkbCdgTdJzY1TzgaW5LEHgiCTQ' alt='foto' />

                                </Box>
                                <Box className="back">
                                    <h3>Gustavo</h3>
                                    <p> <a href="">Linkedin</a></p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="container">
                        <Box className="box">
                            <Box className="inner">
                                <Box className="front">
                                    <img src='https://media-exp1.licdn.com/dms/image/C4E03AQHkBBv_Re2ktQ/profile-displayphoto-shrink_200_200/0/1642720568507?e=1653523200&v=beta&t=Wp3ozfm7reBYxZkzIs98Y8ipaWRmMpycs5ymU0orSkM' alt='foto' />

                                </Box>
                                <Box className="back">
                                    <h3>Joyce</h3>
                                    <p> <a href="https://www.linkedin.com/in/joycecosta-oficial/">Linkedin</a></p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="container">
                        <Box className="box">
                            <Box className="inner">
                                <Box className="front">
                                    <img src='https://media-exp1.licdn.com/dms/image/C4D03AQGmOF54lcRbyQ/profile-displayphoto-shrink_200_200/0/1638384184536?e=1653523200&v=beta&t=Dk9lDfMwJqCoIYm7CThcp0QU4re4bBwfbhg6hq6OsW0' alt='foto' />

                                </Box>
                                <Box className="back">
                                    <h3>Laura</h3>
                                    <p> <a href="https://www.linkedin.com/in/laura-barros-souza/">Linkedin</a></p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="container">
                        <Box className="box">
                            <Box className="inner">
                                <Box className="front">
                                    <img src='https://media-exp1.licdn.com/dms/image/C4D35AQFzVDZq6TuF4Q/profile-framedphoto-shrink_200_200/0/1614459135290?e=1648303200&v=beta&t=JwoTtezTJ6mUbUEN_nGGC2coijUdY5wL4x0ZlHwY-go' alt='foto' />

                                </Box>
                                <Box className="back">
                                    <h3>Lucas</h3>
                                    <p> <a href="https://www.linkedin.com/in/lucas-rodrigues-a264111b1/">Linkedin</a></p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="container">
                        <Box className="box">
                            <Box className="inner">
                                <Box className="front">
                                    <img src='https://media-exp1.licdn.com/dms/image/C4D03AQFRvk7ePCiYaQ/profile-displayphoto-shrink_200_200/0/1641914264472?e=1653523200&v=beta&t=4Gou2yVfwb35615LH776hW9DbNeH9exL2mz4uHNaRFw' alt='foto' />

                                </Box>
                                <Box className="back">
                                    <h3>Rebecca</h3>
                                    <p> <a href="https://www.linkedin.com/in/acceberc/">Linkedin</a></p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="container">
                        <Box className="box">
                            <Box className="inner">
                                <Box className="front">
                                    <img src='https://i.imgur.com//h3bkJ3H.jpg' alt='foto' />

                                </Box>
                                <Box className="back">
                                    <h3>Willian</h3>
                                    <p> <a href="https://www.linkedin.com/in/willian-menezes-4aa169211/">Linkedin</a></p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Grid>

        </>

    );
}

export default Contatos;