


function calcularPromedio(lista){
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento){
        // le puedo poner un valor por defecto al parametro de la funcion
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    // aqui para sacar el promedio la suma de la lista la divido emtre la cantidad de espacios que tengo en la lista con .lenght
    return promedioLista;

};