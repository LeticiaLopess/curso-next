import Titulo from '../../components/Titulo';

export default function usandoTitulo() {
    return (
        <div>
            <Titulo 
                principal = "Página de Cadastro"
                secundario = "Incluir, alterar e excluir conta"
            /> 
            <Titulo 
                principal = "Página de Login"
                secundario = "Informe o seu email e senha"
                pequeno = {true}
            />
            <Titulo 
                principal = "Página de Login"
                secundario = "Informe o seu email e senha"
                pequeno
            />
            
        </div>
    )
}


// Para utilizarmos o componente "Titulo" criado na pasta "components", devemos usar o sistema de módulos do ecmascript. Nesse caso iremos importar com o "import" pois não há como usar diretamente sem importar


// A ideia é utilizarmos componentes que possam ser reusáveis