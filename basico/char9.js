var keywords = [];

function addKeyword(word){
    keywords.push(word);
}

addKeyword('Primer elemento');
addKeyword('Segundo elemento');
addKeyword('Tercer elemento');

var wordList = ['Frutas','Verduras','Carnes','Pastas'];

for(var w in wordList){
    keywords.push(wordList[w]);
}

console.log(keywords);

function removeKeywordByIndex(index){
    keywords.splice(index,1);
}

removeKeywordByIndex(3);

console.log(keywords);

function removeKeywordByWord(word){
    keywords.splice(keywords.indexOf(word),1);
}

removeKeywordByWord('Carnes');

console.log(keywords);

function editKeyword(word,newWord,callback){
    setTimeout(function(){
        var index = keywords.indexOf(word);
        keywords[index] = newWord;
        callback();
    },100);
}

editKeyword('Primer elemento','Chocolate',function(){
    console.log(keywords);
});

keywords.sort();

console.log(keywords);

do{
    keywords.reverse();
    console.log(keywords);
    keywords.splice(0,1);
}while (keywords.length > 0);