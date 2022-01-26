import Client from '../core/Client';

interface TableProps {
    clientes: Client[]
}


export default function Table(props: TableProps) {

    function renderizarTabela() {
        return (
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                  <tr key={cliente.id}> 
                      <td>{cliente.id}</td>
                      <td>{cliente.nome}</td>
                      <td>{cliente.idade}</td>
                  </tr>
            )
        })
    }


    return (
        <table>
            <thead>
            {renderizarTabela()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}