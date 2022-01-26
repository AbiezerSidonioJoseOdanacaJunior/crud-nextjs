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

  return (
    <div className="flex justify-center items-center 
    h-screen bg-gradient-to-r from-blue-800 to-purple-500 
    text-white ">
      <Layout
      titulo="Cadastro Simples"
       >
         <Table clientes={clientes}></Table>
       </Layout>
    </div>
  );
}
