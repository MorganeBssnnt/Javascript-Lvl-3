/*Saisir un nombre "N". Afficher tous les nombres allant de 0 à "N", avec les particularités suivantes :
Remplacez tous les multiples de 3 par "FIZZ"​
Remplacez tous les multiples de 5 par "BUZZ"​
Remplacez tous les multiples de 3 ET 5 par "FIZZBUZZ"

FIZZBUZZ​
1​
2​
FIZZ​
4​
BUZZ​
FIZZ*/

const ps=require('prompt-sync')();

// Entrer un nombre
const nombreN = Number(ps("Entrez un nombre"));

/*Afficher les nombres allant de 0 à N.*/
for (let i = 0; i <= nombreN; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ");
        } else if (i % 5 === 0) {
        console.log("BUZZ");
        } else if (i % 3 === 0) {
        console.log("FIZZ");
        }  else {
            console.log(i);
    }
}