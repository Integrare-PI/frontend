interface UserLogin {
    id: number;
    usuario: string;
    nome_completo: string;
    senha: string;
    tipo_usuario: string;
    foto: string;
    token?: string | null 
}

export default UserLogin