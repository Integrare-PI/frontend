import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import { busca } from '../../../services/Services';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';

import './ListaPostagem.css';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/UserReducer';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
    );
  let history = useHistory();

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado!', {
        position: "top-right",
        autoClose:2000,
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
                  {post.anexo}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.tema?.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                {post.usuario?.nome_completo}
              </Typography>
              </CardContent>

              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="primary" className='botao'>
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained"  size='small' color="secondary" className='botao2'>
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