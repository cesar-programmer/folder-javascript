function listaOrdenada(lista)
{
   listaOrden = lista.sort((a,b)=>a-b);
   // el motodo sort tiene un pequenno problema ya que al ordenarlos los convierte en string y esto hace que
   //el numero uno siempre este antes que cualquier otro pero para areglar este problema se puede usar
   // una funcion de comparacion por cada elemento que recorre el array con esta funcion flecha que ya tieme unm return por defecto no hace falta ponerselo
}

function calcularPromedio(lista){
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};




function calcularMediana(listaOrden){
    // para encontrar la mitad de la lista hago lo siguiente
    const mitadLista1 = parseInt(listaOrden.length / 2);

    function esPar(numerito){
        if (numerito % 2 === 0){
        return true;
        }
        else{
            return false;
        }
    }
// todo esto se puede simplificar solo con esta parte de codigo: return (numerito % 2 === 0)
// ya que el parentesis devuelve si es falso o verdedero sin utilizar el if
    let mediana;

    if (esPar(listaOrden.length)){
        const elemento1 = listaOrden[mitadLista1];
        const elemento2 = listaOrden[mitadLista1 - 1];
        const promedioElemento1y2 = calcularPromedio([elemento1, elemento2]);
        mediana = promedioElemento1y2;
        return mediana;
        // aqui pregunto al funcion es par si la lista es par y dependiendo el caso obtengo un resultado
        // si se cumple la condicion de que es par obtengo los dos numeros del medio y les saco el promedio
    }
    else{
        mediana = listaOrden[mitadLista1];
        return mediana;
    }
}
