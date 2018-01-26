var myArray = [];
console.log(typeof myArray);

myArray.push('Primer Elemento');
myArray.push('Segundo Elemento')

console.log(Array.isArray(myArray));

myArray.push('Tercer Elemento');

console.log(myArray);

myArray.shift();

console.log(myArray);

myArray.push('Cuarto Elemento');
myArray.push('Quinto Elemento');

myArray.splice(2,1);

console.log(myArray);

var myObject = {};

myObject[0] = 'Primer elemento';
myObject['segundo'] = 'Segundo Elemento';
myObject.key = 'Valor de la key';

console.log(myObject);

console.log(myArray.length);