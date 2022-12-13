import Pessoa from "../../components/Pessoa";

export default function exemploTS() {
    return (
        <div>
            <Pessoa nome="Pedro" idade={25} />
            <Pessoa nome="Joana" />
        </div>
    )
}

