var myArray = [];

myArray.push('Primer Elemento');
myArray.push('Segundo Elemento');
myArray.push('Tercero Elemento');

for(var i = 0; i < 2; i++){
 console.log(myArray[i]);
}

for(var my in myArray){
    console.log(myArray[my]);
}