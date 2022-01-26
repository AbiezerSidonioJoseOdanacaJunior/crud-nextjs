export default class Client {
    #nome: string
    #idade: number
    #id: string

    constructor(nome: string, idade: number, id: string = null) {
        this.#nome = nome
        this.#idade = idade
        this.#id = id 
    }

    static vazio() {
        return new Client('' , 0)
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get idadde() {
        return this.#idade
    }

}
