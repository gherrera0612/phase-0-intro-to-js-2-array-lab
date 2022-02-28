// Write your solution here!
let cats = ["Milo" , "Otis" , "Garfield"];

function destructivelyAppendCat (cat) {
    cats.push(cat);
}
// adds cat name to the end of the array
function destructivelyPrependCat (cat) {
    cats.unshift(cat);
}
//adds cat name to the beginning of the array

function destructivelyRemoveLastCat (cat) {
    cats.pop(cat);
}
//removes the last cat

function destructivelyRemoveFirstCat(cat){
    cats.shift(cat);
}
//removes the first cat

function appendCat(cat){
    return [...cats, cat]
}
// adds a cat to the endand keeps the array the same 
//... is spread operator

function prependCat(cat){
    return [cat, ... cats]
}
//adds a cat to the beginning and keeps the array the same

function removeLastCat (cat) {
    return cats.slice(0, cats.length -1);
}
//removes the last cat in the array

function removeFirstCat (cat){
    return cats.slice(1);
}