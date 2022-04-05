import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import { busca } from '../../../services/Services';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';

import './ListaPostagem.css';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
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
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className='btndeletar' size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>)
}

export default ListaPostagem;