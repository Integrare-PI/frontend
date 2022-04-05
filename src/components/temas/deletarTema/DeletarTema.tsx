import React, { useEffect, useState } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import './DeletarTema.css';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { buscaId, deleteId } from '../../../services/Services';
import { TextFormatSharp } from '@material-ui/icons';


function DeletarTema() {
    let history = useHistory();

    const {id} = useParams<{id: string}>();
    
    const [token, setToken] = useLocalStorage("token");

    const [tema, setTema] = useState<Tema>()
        

    useEffect(() => {
        if (token === "") {
          alert("Você precisa estar logado")
          history.push("/login")
    
        }
      }, [token])

      async function findById(id: string) {
        await buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

      useEffect(()=> {
          if(id !== ""){
              findById(id)
          }
      }, [id])

      async function sim() {
        history.push('/temas')

        try {
            await deleteId(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            });
            
            alert('Tema deletado com sucesso');
            
        } catch (error) {
            alert('Erro ao deletar');
        }

    }

    function nao() {
        history.push('/temas')
    }
    
  return (
    <>
      <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar o Tema:
                            </Typography>
                            <Typography color="textSecondary">
                                { tema?.descricao}
                            </Typography>
                        </Box>
                    </CardContent>

                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant="contained" className='btndeletar' size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>

                </Card>
            </Box>
    </>
  );
}
export default DeletarTema;