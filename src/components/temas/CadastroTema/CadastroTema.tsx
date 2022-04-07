import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import Tema from '../../../models/Tema';
import "./CadastroTema.css";
import { buscaId, post, put } from '../../../services/Services';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function CadastroTema() {
    let history = useHistory();

    const {id} = useParams<{id: string}>();
    
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    const [tema, setTema] = useState<Tema>({
        id: 0,
        disciplinas: "",
        descricao: ""
    })

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

      async function findById(id: string) {
        await buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

      useEffect(()=> {
          if(id !== undefined){
              findById(id)
          }
      }, [id])

      function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
            postagem: [{}]
        })
    }
  
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
     
        if (id !== undefined) {
         
            try {
                await put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })

                toast.success('Tema atualizado com sucesso!', {
                    position: "top-right",
                    autoClose:2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
          
                })

        
            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error('Erro. Por favor verifique a quantidade minima de caracteres!', {
                    position: "top-right",
                    autoClose:2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
          
                })
            }

        } else {
           
            try {
                await post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                
                toast.success('Tema cadastrado com sucesso!', {
                    position: "top-right",
                    autoClose:2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
          
                })
            
            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error('Erro. Por favor verifique a quantidade minima de caracteres!', {
                    position: "top-right",
                    autoClose:2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
          
                })
            }
        }
        
        back()
    }

    function back() {
        history.push('/temas')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField
                    value={tema.disciplinas}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id="disciplinas"
                    label="disciplinas"
                    variant="outlined"
                    name="disciplinas"
                    margin="normal"
                    fullWidth
                />

                    <TextField
                    value={tema.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id="descricao"
                    label="descricao"
                    variant="outlined"
                    name="descricao"
                    margin="normal"
                    fullWidth
                />
                <Button type="submit" className="bootao" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
   
}

export default CadastroTema;