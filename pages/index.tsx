import { useEffect, useState } from "react";
import ColecaoDados from "../backend/db/ColecaoDados";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import ClienteRepositorio from "../core/ClienteRepositorio";

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoDados() 

  const [ clientes, setClientes ] = useState<Client[]>([])
  const [ cliente, setCliente ] = useState<Client>(Client.vazio())
  const [ visivel, setVisivel ] = useState<'tabela' | 'form'>('tabela')

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteSelecionado(cliente: Client) {
    setCliente(cliente)
    setVisivel('form')

  }

  async function clienteExcluido(cliente: Client) {
    await repo.excluir(cliente)
    obterTodos()

  }



  function novoCliente() {
    setCliente(Client.vazio())
    setVisivel('form')
  }

  async function salvarCliente(cliente: Client) {
    await repo.salvar(cliente)
    obterTodos()
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
