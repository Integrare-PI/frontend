import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid, IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import { busca, put } from '../../services/Services';
import Postagem from '../../models/Postagem';
import './Feed.css';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Perfil from '../Perfil/Perfil';
import { UserState } from '../../store/tokens/UserReducer';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Feed() {
  const [posts, setPosts] = useState<Postagem[]>([])

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  let history = useHistory();
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    assunto: '',
    texto_descricao: '',
    anexo: '',
    video: '',
    resposta: '',
    curtidas: 0,
    data: '',
    tema: null,
    usuario: null
  })

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

  async function curtidas(id: number) {
    await put(`/postagens/curtir/${id}`, postagem, setPostagem, {
      headers: {
        'Authorization': token
      }
    }
    );
    getPost()
  }


  useEffect(() => {

    getPost()

  }, [posts.length])
  return (
    <>
      <Typography variant='h3' component='h3' align='center' className='gambs'>
        ...
      </Typography>
      <Grid container spacing={2}>

        <Grid item xs={4} className='boxuser' alignItems="flex-start">
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
                      <Typography variant="body2" component="p">
                        {post.usuario?.nome_completo}
                        <br />
                        {post.usuario?.tipo_usuario}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {post.assunto}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {post.tema?.descricao}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {post.texto_descricao}
                      </Typography>
                      <Typography variant="body2" component="p">
                        <img src={post.anexo} alt="" className='anexo' />
                      </Typography>
                      <Typography variant="body2" component="p">
                        {post.video}
                      </Typography>

                      <IconButton aria-label="add to favorites" onClick={() => { curtidas(post.id) }} >
                        <FavoriteIcon />
                        <Typography variant="body2" component="p">
                          {post.curtidas}
                        </Typography>
                      </IconButton>
                      <Typography color="textSecondary" gutterBottom>
                        Resposta:
                      </Typography>
                      <Typography variant="body2" component="p" className='reposta'>
                        {post.resposta}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))
            }
          </Box>

        </Grid>
        <Typography variant='h3' component='h3' align='center' className='gambs'>
          ...
        </Typography>
      </Grid>
    </>
  )
}

export default Feed;
