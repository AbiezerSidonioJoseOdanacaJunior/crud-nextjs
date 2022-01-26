import Button from "../components/Button";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const clientes = [
    new Client('Ana', 34, '1'),
    new Client('Maria', 14, '2'),
    new Client('João', 24, '3'),
    new Client('Vinivius', 44, '4'),
    new Client('Victor', 54, '5'),
    new Client('Lucas', 64, '6'),
  ]

  function clienteSelecionado(cliente: Client) {
    console.log(cliente.nome)
    console.log(cliente.idade)
    console.log(cliente.id)

  }

  function clienteExcluido(cliente: Client) {
    console.log(`Excluir.... ${cliente.nome}`)

  }

  return (
    <div className="flex justify-center items-center 
    h-screen bg-gradient-to-r from-blue-800 to-purple-500 
    text-white ">
      <Layout
      titulo="Cadastro Simples"
       >
         <div className="flex justify-end">
            <Button className="mb-5">Novo CLiente</Button>
         </div>
         <Table clientes={clientes} 
         clienteSelecionada={clienteSelecionado}
         clienteExcluido={clienteExcluido}
          ></Table>
       </Layout>
    </div>
  );
}
