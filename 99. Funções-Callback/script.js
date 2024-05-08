const Fabricantes = ["Mercedes", "Audi", "Bmw"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

Fabricantes.forEach(imprimir); /* Aqui passamos um função de callback para ser executada em cada elemento do array, pelo comando forEach() */
Fabricantes.forEach(Fabricantes => console.log(Fabricantes));
