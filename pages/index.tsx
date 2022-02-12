import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const [ cliente, setCliente ] = useState<Client>(Client.vazio())
  const [ visivel, setVisivel ] = useState<'tabela' | 'form'>('tabela')


  const clientes = [
    new Client('Ana', 34, '1'),
    new Client('Maria', 14, '2'),
    new Client('João', 24, '3'),
    new Client('Vinivius', 44, '4'),
    new Client('Victor', 54, '5'),
    new Client('Lucas', 64, '6'),
  ]

  function clienteSelecionado(cliente: Client) {
    setCliente(cliente)
    setVisivel('form')

  }

  function clienteExcluido(cliente: Client) {
    console.log(`Excluir.... ${cliente.nome}`)

  }



  function novoCliente() {
    setCliente(Client.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente: Client) {
    setVisivel('tabela')
  }

  
  return (
    <div className="flex justify-center items-center 
    h-screen bg-gradient-to-r from-blue-800 to-purple-500 
    text-white ">
      <Layout
      titulo="Cadastro Simples"
       >
         {visivel === 'tabela' ? ( 
           <>
           <div className="flex justify-end">
              <Button onClick={novoCliente} cor="green" className="mb-5">Novo CLiente</Button>
           </div>
           <Table clientes={clientes} 
           clienteSelecionada={clienteSelecionado}
           clienteExcluido={clienteExcluido}
          ></Table> 
          </>
         ) : ( 
        <Form cliente={cliente} clienteMudou={salvarCliente} cancelado={() => setVisivel('tabela') } ></Form>
         )}
       </Layout>
    </div>
  );
}
