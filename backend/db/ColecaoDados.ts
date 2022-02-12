import firebase from "../config";
import Client from "../../core/Client";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import { query } from "firebase/firestore";

export default class ColecaoDados implements ClienteRepositorio {

    #conversor ={
        toFirestore(cliente: Client) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentShapshot, options: firebase.firestore.SnapshotOprions): Client {
            const dados = snapshot.data(options)
            return new Client(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(cliente: Client): Promise<Client> {
        if(cliente?.id) {
           await this.colecao().doc(cliente).set(cliente)
           return cliente
        } else {
            const docRef = await this.colecao().add(cliente)
           const doc = await docRef.get()
           return doc.data()
        }
        return null
    }

    async excluir(cliente: Client): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Client[]> {
      const query = await this.colecao().get()
        return query.docs.map(doc => doc.data())
    }

    private colecao() {
        return firebase.firestore().collection('clientes').withConverter(this.#conversor)
    }
}