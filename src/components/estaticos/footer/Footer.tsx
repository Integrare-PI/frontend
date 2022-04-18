import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';

function Footer(){
    return (
        <>
            <Grid container direction="row" className='fixar' style={{ display: "static", justifyContent: "space-between"}}>
                    <Box>
                        <a target="_blank" className='text-decorator-none2' href="https://brasil.generation.org">
                            <Typography variant="subtitle2" gutterBottom style={{ color: "black" }} >© 2022 Copyright: brasil.generation.org</Typography>
                        </a>
                    </Box>
                <Box paddingRight={4}  alignItems="center" justifyContent="center">
                    <a href="https://www.facebook.com/generationbrasil" target="_blank">
                        <FacebookIcon style={{fontSize: 40, color: "black" }} />
                    </a>
                    <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                        <InstagramIcon style={{ fontSize: 40, color: "black" }} />
                    </a>
                    <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                        <LinkedInIcon style={{ fontSize: 40, color: "black" }} />
                    </a>
                </Box>

            </Grid>
        </>
            )
        }
export default Footer;