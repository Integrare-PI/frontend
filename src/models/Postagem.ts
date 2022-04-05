import Tema from './Tema'

interface Postagem{
    id: number;
    assunto: string;
    texto_descricao: string;
    anexo: string;
    data: string;
    tema?: Tema| null
}

export default Postagem;