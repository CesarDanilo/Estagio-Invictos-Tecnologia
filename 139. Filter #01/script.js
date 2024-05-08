const Produtos = [
    { nome: "notebook", preco: 2000.00, fragil: true },
    { nome: "Ipad", preco: 1800.00, fragil: true },
    { nome: "Copo de vidro", preco: 18.00, fragil: false },
    { nome: "teclado", preco: 200.00, fragil: false }
];


// 1° - Opção

function verificar(p) {
    return p.preco > 1000.00 && p.fragil == true ? true : false
}

console.log(Produtos.filter(verificar));


// 2° - Opção

console.log(Produtos.filter(function (p) {
    return p.preco > 1000.00 && p.fragil == true ? true : false
}));


//Filter recebe uma função callback, e vai filtrar os elementos de um array, trazendo a mesma quantidade, ou menos elementos
// Diferente do map que modifica cada um dos elementos, mas trazendo a mesma quantidade