// caixa que guarda o estado que vamos armazenar e queremos compartilhar 
// caixa que vamos guardar os dados do usuario 
// quando aplicação iniciar nao vai ter nada do usuario

interface User {
    name:string;
    email:string;
}

// definindo a tipagem do estado 
interface UserState {
    user: User | null ;
}

const initialState: UserState = {
    user: null, 
}

// Reduce: Guarda o estado  que desejamos compartilhar na aplicação
//         Manipula/ altera estado

interface UserAction {
    type: string;
    payload?: User
}

// inicializando com nulo. 
// essa função é que vai alterar o estado 
export function userReduce(state = initialState, action: UserAction) {
    
}