// checar clase 17 del curso practico de java script

function calcularModa(lista1){
    const lista1Count = {};
// creamos un objeto para darle un indice a cada num en la posicion que se valla guardano y poder acumularlos

    lista1.map(function(elemento){
// aqui utilizo la funcion map para recorrer el array y asignar los elementos al ojeto
        if (lista1Count[elemento]){
// en esta condicion verifico que exista el elemto en el obejo si si existe al elemento le sumo 1 a su indice que quiere decir que si se encuentra en el objeto
         lista1Count[elemento] += 1;
        }
        else{
        lista1Count[elemento] = 1;
// aqui se hace la primera signacion para empezar a contar cuantas veces aparece en el array
        }
    });

    const lista1Array = Object.entries(lista1Count).sort(function(valorAcumulado, nuevoValor){
    return valorAcumulado[1] - nuevoValor[1];
    });
// con esto convierto el objeto en un array

    const moda = lista1Array[lista1Array.length - 1];
// se pone el -1 por que como el array emp[ieza en 0y si tiene 5 elementoss entonces es 0,1,2,3,4 por eso se le resta para entrar en la posicion adecuada
    return moda;
}
