import Tema from './Tema'
import User from "./User";

interface Postagem{
    id: number;
    assunto: string;
    texto_descricao: string;
    anexo: string;
    video: string;
    resposta: string;
    data: string;
    curtidas: number;
    tema?: Tema| null
    usuario: User | null  
}

export default Postagem;