// code of square
console.group("square");
// con console.group podemos agrupar mensajes en la consola de una manera sencilla y para cerrar la agrupacion se usa console.groupEnd

function contourSquare(sideSquare) {
    return sideSquare * 4;
}

function areaSquare(sideSquare){
     return sideSquare * sideSquare;
}

console.groupEnd();

// code of triangle
console.group("triangle");

function contourTriangle(side1, side2, base) {
    return side1 + side2 + base;
};


function areaTriangle(base, height){
   return (base * height) / 2;
}

console.groupEnd();

//code of circle

// //diametro
function diameterCircle(radio){
    return radio * 2;
}

//pi
const pi = Math.PI;
console.log("pi is", pi);

//circunferencia
function contourCircle(radio){
    const diameter = diameterCircle(radio);
    return diameter * pi;
}

//area
function areaCircle(radio){
    return (radio * radio) * pi;
}

//code isosceles triangle
function alturaIsoseles(side1, side2 ,base){
    if(side1 === side2){
        if(side1 && side2 < base){
            alert("la base no puede ser mas grande que los lados");
        }
        let h = (side1 * side2) - ((base * base) /4);
        return Math.sqrt(h);
    }
    else{
        alert("Los lados del triangulo isoseles deben de ser iguales");
    }
}




//here i started interact whit html

// Function of the square
function calculateContourSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;
    const contour = contourSquare(value);
    alert("the contour of the square is: " + contour + "cm");
}

function calculateAreaSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;
    const area = areaSquare(value);
    alert("the area of the square is: " + area + "cm");
}

//Function of the triangle
function calculateContourTriangle(){
    const side1 = document.getElementById("inputSide1");
    const side2 = document.getElementById("inputSide2");
    const base = document.getElementById("inputBase");
    const value1 = Number(side1.value);
    const value2 = Number(side2.value);
    const value3 = Number(base.value);
    const contour = contourTriangle(value1,value2,value3);
    alert("the contour of the triangle is: " + contour+ "cm");
}

function calculateAreaTriangle(){
    const base1 = document.getElementById("inputBase1");
    const altura = document.getElementById("altura");
    const value2 = Number(base1.value);
    const value3= Number(altura.value);
    const area = areaTriangle(value2,value3,);
    alert("the area of the triangle is: " + area + "cm");
}

// Function of the circle
function calculateRadio(){
    const radio1 = document.getElementById("radio");
    const value = Number(radio1.value);
    const radio = diameterCircle(value);
    alert("the diameter of the circle is: " + radio + "cm");
}

function calculateContourCircle(){
    const radio1 = document.getElementById("radio");
    const value = Number(radio1.value);
    const contour = contourCircle(value);
    alert("the contour of the circle is: " + contour + "cm")
}

function calculateAreaCircle(){
    const radio1 = document.getElementById("radio");
    const value = Number(radio1.value);
    const area = areaCircle(value);
    alert("the area of the circle is: " + area + "cm");
}

//Funciot of triangle isoseles
function calculateHeightTriangle(){
    const side1 = document.getElementById("inputlado1");
    const side2 = document.getElementById("inputlado2");
    const base = document.getElementById("inputBase5");
    const value1 = Number(side1.value);
    const value2 = Number(side2.value);
    const value3 = Number(base.value);
    const altura = alturaIsoseles(value1,value2,value3);
    alert("The height of the triangle is :" + altura + "cm")
}


console.groupEnd();