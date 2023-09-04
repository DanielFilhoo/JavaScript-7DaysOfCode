// Objeto para armazenar os itens da lista de compras agrupados por categoria
const listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
  };
  
  // Função para adicionar um item à lista de compras
  function adicionarItem() {
    const resposta = prompt("Deseja adicionar um item à lista de compras? (sim/não)").toLowerCase();
    
    if (resposta === "sim") {
      const nomeItem = prompt("Digite o nome do item:");
      const categoria = prompt("Em qual categoria esse item se encaixa (Frutas, Laticínios, Congelados, Doces, ou outra)?").trim();
      
      if (listaDeCompras[categoria]) {
        listaDeCompras[categoria].push(nomeItem);
        console.log(`${nomeItem} adicionado à categoria ${categoria}.`);
      } else {
        console.log("Categoria inválida. O item não foi adicionado.");
      }
      
      adicionarItem(); // Chama a função novamente para adicionar mais itens
    } else {
      exibirListaDeCompras();
    }
  }
  
  // Função para exibir a lista de compras agrupada por categoria
  function exibirListaDeCompras() {
    console.log("Lista de compras:");
    for (const categoria in listaDeCompras) {
      const itens = listaDeCompras[categoria];
      if (itens.length > 0) {
        console.log(`  ${categoria}: ${itens.join(', ')}`);
      }
    }
  }
  
  // Iniciar o processo de adicionar itens à lista de compras
  adicionarItem();
  