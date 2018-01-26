var myArray = [];

myArray.push('Primer Elemento');
myArray.push('Segundo Elemento');
myArray.push('Tercero Elemento');

function recursividad(index){

    if(index >= myArray.length){
        console.log("Finalizacion")
        return;
    }

    console.log(myArray[index]);

    recursividad(++index);

}

recursividad(0)