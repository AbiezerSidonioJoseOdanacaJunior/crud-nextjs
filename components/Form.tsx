import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    cliente: Client
}


export default function Form(props: FormProps) {
    const id = props.cliente?.id 
    const [ nome, setNome ] = useState(props.cliente?.nome ?? '')
    const [ idade, setIdade ] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            { id ? (
                <Input somenteLeitua texto="Código" valor={id} />
            ) : false}
            <Input texto="Nome" valor={nome} valorMudou={setNome} className="mb-4" />
            <Input texto="Idade" tipo="number" valor={idade} valorMudou={setIdade} className="mb-4" />
            <div className="mt-2 flex justify-end">
                <Button className="mr-3" cor="blue" > {id ? 'Alterar' : 'Salvar'} </Button>
                <Button className="mr-0">Cancelar</Button>
            </div>
        </div>
    )
}