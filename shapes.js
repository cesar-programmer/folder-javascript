// code of square
console.group("square");

// con console.group podemos agrupar mensajes en la consola de una manera sencilla y para cerrar la agrupacion se usa console.groupEnd
const sideSquare = 5;
console.log("the sides of the square measure is", sideSquare + "cm");

const contourSquare = sideSquare * 4;
console.log("the contour of the square is", contourSquare + "cm");

const areaSquare = sideSquare * sideSquare;
console.log("the area of the square is", areaSquare + "cm ** 2");

console.groupEnd();

// code of triangle
console.group("triangle");
const sideTriangle = 6;
const sideTriangle2 = 6;
const baseTriangle = 4;

console.log("the sides of the triangle measure are ", sideTriangle + "cm", sideTriangle2 + "cm", baseTriangle + "cm");

const heightTriangle = 5.5;
console.log("The height of the triangle is ", heightTriangle + "cm");

const contourTriangle = sideTriangle + sideTriangle2 + baseTriangle;
console.log("the contour of the triangle is", contourTriangle + "cm");

const areaTriangle = (baseTriangle * heightTriangle) / 2;
console.log("the area of the triangle is", areaTriangle + "cm ** 2");

console.groupEnd();

//code of circle
console.group("circle");

//radio
const radioCircle = 4;
console.log("the radio of circle is " , radioCircle + "cm");

//diametro
const diameterCircle = radioCircle * 2;
console.log("the diameter of circle is " , diameterCircle + "cm");

//pi
const pi = Math.PI;
console.log("pi is", pi);

//circunferencia
const contourCircle = diameterCircle * pi;
console.log("the contour of the circle is ", contourCircle + "cm");

//area
const areaCircle = (radioCircle * radioCircle) * pi;
console.log("the area of the circle is ", areaCircle + "cm ** 2");


console.groupEnd();