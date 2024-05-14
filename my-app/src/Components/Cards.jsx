import './css/Cards.css'

function Cards(produto, quantidade, preco) {
    let Produtos = [
        { nome: "notebook", preco: 2000.00, quantidade: 13 },
        { nome: "Ipad", preco: 1800.00, quantidade: 22 },
        { nome: "Copo de vidro", preco: 18.00, quantidade: 20 },
        { nome: "teclado", preco: 200.00, quantidade: 10 }
    ];

    Produtos.push([{ nome: produto, preco: quantidade, quantidade: preco }]);

    return (
        <>
            {
                Produtos.map((e) => {
                    return (
                        <div className="lista">
                            <h4>Produto: {e.nome}</h4>
                            <p>Quantidade: {e.preco}</p>
                            <p>R${e.quantidade}</p>
                        </div>
                    )
                })
            }
        </>

    );
}

export default Cards