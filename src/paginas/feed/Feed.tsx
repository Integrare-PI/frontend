import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import { busca } from '../../services/Services';
import Postagem from '../../models/Postagem';
import './Feed.css';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Perfil from '../Perfil/Perfil';
import { UserState } from '../../store/tokens/UserReducer';


function Feed() {
  const [posts, setPosts] = useState<Postagem[]>([])

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  let history = useHistory();

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

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])
  return (
    <>
      <Typography variant='h3' component='h3' align='center' className='gambs'>
        ...
      </Typography>
      <Grid container flex-direction="row" justifyContent="space-around" alignItems="center" className='caixa'>

        <Grid alignItems="flex-start">
          <Box paddingLeft={7} m={2}>
            <Perfil />
          </Box>
        </Grid>

        <Grid alignItems="flex-start" item xs={8} >
          <Box className='box' paddingRight={7}>
            {
              posts.map(post => (
                <Box m={2} >
                  <Card variant="outlined" className='cards'>
                    <CardContent>
                      <Typography color="textSecondary" gutterBottom>
                        Postagens
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {post.assunto}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {post.texto_descricao}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {post.tema?.descricao}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))
            }
          </Box>
        </Grid>
      </Grid>
      <Typography variant='h3' component='h3' align='center' className='gambs'>
          ...
        </Typography>
    </>
  )
}

export default Feed;
