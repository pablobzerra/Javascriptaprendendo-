const produtos = [
  { nome: "Produto 1", categoria: "Eletrônicos", preco: 200 },
  { nome: "Produto 2", categoria: "Eletrônicos", preco: 100 },                { nome: "Produto 3", categoria: "Livros", preco: 50 },
  { nome: "Produto 4", categoria: "Roupas", preco: 70 },
  { nome: "Produto 5", categoria: "Roupas", preco: 30 },
  { nome: "Produto 6", categoria: "Eletrônicos", preco: 300 }
];





let agrupamento = {}

for (let i = 0;i < produtos.length; i++) {
    let produto =  produtos[i];
    let categoria = produto["categoria"]
    agrupamento[categoria] = 0
}

for (let i = 0; i < produtos.length; i++) {
    let produto =  produtos[i];
    let categoria = produto["categoria"]
    let preco = produto["preco"]

    agrupamento[categoria] = agrupamento[categoria] + preco
}



console.log(agrupamento)
