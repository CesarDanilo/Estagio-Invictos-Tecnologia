import { useState } from "react";
import Cards from "./Cards";

function TaskInput() {

    const [produto, setProduto] = useState();
    const [quantidade, setQuantidade] = useState();
    const [preco, setPreco] = useState();

    function Gravar(e) {
        e.preventDefault();

    }

    return (
        <>
            <form action="" method="post">
                <label htmlFor="produto">Produto: </label>
                <input type="text" name="produto" id="produto" onChange={e => setProduto(e.target.value)}/>
                <label htmlFor="quantidade">Quantidade: </label>
                <input type="text" name="quantidade" id="quantidade" onChange={e => setQuantidade(e.target.value)}/>
                <label htmlFor="valor">Valor: </label>
                <input type="text" name="valor" id="valor" onChange={e => setPreco(e.target.value)}/>
                <button type="submit" onClick={(e) => e.preventDefault()}>Gravar</button>
            </form>

            <Cards produto={produto} quantidade={quantidade} preco={preco}/>

        </>
    )
}

export default TaskInput;