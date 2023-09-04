// Arrays para armazenar alimentos por categoria
let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];

// Função para adicionar um alimento à lista de compras
function adicionarAlimento(nome, categoria) {
    switch (categoria) {
        case "frutas":
            frutas.push(nome);
            break;
        case "laticínios":
            laticinios.push(nome);
            break;
        case "doces":
            doces.push(nome);
            break;
        case "congelados":
            congelados.push(nome);
            break;
        default:
            console.log("Categoria inválida.");
    }
}

// Loop principal para adicionar alimentos à lista de compras
while (true) {
    const adicionar = prompt("Deseja adicionar um alimento à lista de compras? (sim/não)").toLowerCase();

    if (adicionar === "não") {
        break;
    } else if (adicionar === "sim") {
        const nomeAlimento = prompt("Qual alimento deseja adicionar?");
        const categoriaAlimento = prompt("Em qual categoria esse alimento se encaixa? (frutas, laticínios, doces, congelados)").toLowerCase();

        adicionarAlimento(nomeAlimento, categoriaAlimento);
    } else {
        console.log("Resposta inválida. Por favor, responda com 'sim' ou 'não'.");
    }
}

// Imprimir a lista de compras organizada por categoria
console.log("Lista de compras:");
console.log("  Frutas:", frutas.join(", "));
console.log("  Laticínios:", laticinios.join(", "));
console.log("  Congelados:", congelados.join(", "));
console.log("  Doces:", doces.join(", "));
