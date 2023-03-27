function calcularResultado(){
    let numero = document.getElementById('numFactorial').value;
    let n = numFactorial;
    let resultado = 1;
      
    for( let i = 1; i <= numero; i++){
        resultado = resultado * i;
    }
    document.getElementById('textoResultado').innerHTML= `El factorial del numero ${numero} es: ${resultado}`;
    
}
