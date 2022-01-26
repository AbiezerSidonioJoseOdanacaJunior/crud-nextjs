import Client from '../core/Client';
import { EditIcon, TrashIcon } from './Icons';

interface TableProps {
    clientes: Client[]
    clienteSelecionada?: (cliente: Client) => void
    clienteExcluido?: (cliente: Client) => void
}


export default function Table(props: TableProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionada

    function renderizarTabela() {
        return (
            <tr>
                <th className='text-left p-4' >Código</th>
                <th className='text-left p-4' >Nome</th>
                <th className='text-left p-4'  >Idade</th>
                {exibirAcoes ? <th className=' p-4' >Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                  <tr key={cliente.id}
                  className={`${i % 2 === 0 ? 'bg-purple-100' : 'bg-purple-200' }`} > 
                      <td className='text-left p-4'  >{cliente.id}</td>
                      <td className='text-left p-4' >{cliente.nome}</td>
                      <td className='text-left p-4' >{cliente.idade}</td>
                      { exibirAcoes ? renderizarAcoes(cliente) : false}
                  </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Client) {
        return(
            <td className='flex justify-center' >
                {props.clienteSelecionada ? (
                    <button onClick={() => props.clienteSelecionada?.(cliente)}
                     className={`flex justify-center items-center 
                    text-green-600 rounded-full hover:bg-purple-50 p-2 m-1`}
                     >{EditIcon}</button>
                ) : false}

                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)}
                    className={`flex justify-center items-center 
                    text-red-600 rounded-full hover:bg-purple-50 p-2 m-1`}
                    >{TrashIcon}</button>
                ) : false}
            </td>
        )
    }


    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={` text-gray-100 
                bg-gradient-to-r from-purple-500 to-purple-8000
             `}>
            {renderizarTabela()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}