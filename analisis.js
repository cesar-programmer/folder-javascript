// Helpers functios
function calcularPromedio(lista){
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

function esPar(numerito){
    return (numerito % 2 === 0);
 }
 //Aqui pregunto si la lista qeu obtuve es par o impar para poder calcular la mediana


// Calculadora Mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
// aqui obtengo la mitad de mi lista
    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const promedio = calcularPromedio([personaMitad1,personaMitad2])
        return promedio;
    }
    else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


// Mediana General
const salarioCol = colombia.map(function(persona){
    return persona.salary
});
// aqui me traigo todos los salarios

const salariosColSorted = salarioCol.sort(function(salaryA,salaryB){
   return salaryA - salaryB
});
// aqui ordeno de menor a mayor los salarios


const medianaGeneralCol = medianaSalarios(salariosColSorted)


//Mediana del top 10%
const spliceStart = ( (90/100) * salariosColSorted.length);
const spliceCount = salariosColSorted.length - spliceStart;
// aqui obtenemos el top 10% de nuestro array con a formula de porsentaje y el .lenght

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);
// aqui le decimos a la funciom splice que desde el 18 vas a coratar y me vas a dejar 2

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});