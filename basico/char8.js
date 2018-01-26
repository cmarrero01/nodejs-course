var myArray = [];

myArray.push('Primer elemento');
myArray.push('Segundo elemento');
myArray.push('Tercero elemento');

function recursiva(index){

    if(index >= myArray.length){
        console.log("Finalizamos")
        return;
    }

    setTimeout(function(){
        console.log(myArray[index]);
        recursiva(++index);
    })

}

recursiva(0);

console.log("Mas script");