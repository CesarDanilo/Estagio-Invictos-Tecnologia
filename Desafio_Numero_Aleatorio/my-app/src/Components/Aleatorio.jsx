function Aleatorio(props){
    
    const { min, max } = props;

    const number = parseInt(Math.random() * (max - min)) + min;
    console.log(number)
    return (
        <>
            <h1>Números Aleatorios</h1>
            <h3>Número aleatorio: {parseInt(number)}</h3>
        </>
    );
}

export default Aleatorio;