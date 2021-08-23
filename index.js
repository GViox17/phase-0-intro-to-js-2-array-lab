const cats = ["Milo", "Otis", "Garfield"]// Write your solution here!

function destructivelyAppendCat(){
    cats.push('Ralph');
}
function destructivelyPrependCat(){
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(){
    cats.pop('Garfield');
}
function destructivelyRemoveFirstCat(){
    cats.shift('Milo');
}
function appendCat(){
    return[...cats, 'Broom'];
}

function prependCat(){
    return['Arnold',...cats];

}
function removeLastCat() {
    const RemoveLastCatArray = cats.slice(0, cats.length - 1);
    return RemoveLastCatArray;
    
}
function removeFirstCat(){
    const NewFirstCatArray = cats.slice(1);
    return NewFirstCatArray;
}