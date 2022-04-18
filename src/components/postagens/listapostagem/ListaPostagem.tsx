import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography, IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import { busca, buscaId, put } from '../../../services/Services';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import FavoriteIcon from '@material-ui/icons/Favorite';
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

  useEffect(() => {

    getPost()

  }, [posts.length])
  return (
    <>
            <Typography variant='h3' component='h3' align='center' className='gambs'>
              ...
            </Typography>
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
                  {post.tema?.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.texto_descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.video}
                </Typography>
                <Typography variant="body2" component="p">
                <img src={post.anexo} alt="" className='anexo'/>
                </Typography>
                <Typography variant="body2" component="p">
                  {post.usuario?.nome_completo}
                </Typography>

              </CardContent>

              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="primary" className='botao1'>
                        Responder
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="primary" className='botao3'>
                        Editar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary" className='botao2'>
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
                
              </CardActions>
              <Typography variant="body2" component="p" className='reposta'>
                  {post.resposta}
                </Typography>
            </Card>
            
          </Box>
        ))
      }
      <Typography variant='h3' component='h3' align='center' className='gambs'>
        ...
      </Typography>
    </>)
}

export default ListaPostagem;