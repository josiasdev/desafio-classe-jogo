class nivelJogo {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar() {
        if (this.tipo === "mago") {
            this.ataque = "magia"
        }
        else if (this.tipo === "guerreiro"){
            this.ataque = "espada"
        }
        else if (this.tipo === "monge"){
            this.ataque = "artes marciais"
        }
        else if (this.tipo === "ninja"){
            this.ataque = "shuriken"
        }
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let mago = new nivelJogo("Josias", 21, "mago")
let guerreiro = new nivelJogo("Josias", 21, "guerreiro")
let monge = new nivelJogo("Josias", 21, "monge")
let ninja = new nivelJogo("Josias", 21, "ninja")


mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()