var myArray = [];

myArray.push('Primer Elemento');
myArray.push('Segundo Elemento');
myArray.push('Tercero Elemento');

// var i = 0;
// while (i < myArray.length){
//     console.log(myArray[i]);
//     i++;
// }

var i = 5;
var result = '';

do{
    i++;
    result = result + i;
}while (i < 5);

console.log(result);