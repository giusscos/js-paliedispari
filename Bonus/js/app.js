// // // // // // Palindroma
// Funzione che inverte la stringa
function stringReverse (str) {
    let strReverse = [];
    for(let i = str.length - 1; i >= 0; i--){
        strReverse.push(str[i]);
    }
    return strReverse;
}

// Funzione che controlla se la stringa e' palindroma
function isPalindroma (word) {
    const lenWord = word.length;

    if(lenWord % 2 === 0){
        // inversione della stringa
        let checkWord = stringReverse(word);
        for(let i = 0; i < lenWord; i++){
            // console.log('Word >> ' + word[i]);
            // console.log('checkWord >> ' + checkWord[i]);
            // // controllo dei singoli caratteri 
            if(word[i] !== checkWord[i]){
                return 'No Palindroma'
                // console.log('No Palindroma!');
            }
        }
        return 'Palindroma!';
    } else {
        return 'No palindroma!';
    }
}

// const palWord = prompt('Inserisci una parola (E\' Keys Sensitive!)');
// console.log(isPalindroma(palWord));


// // // // // // Pari e Dispari

// Funzione che genera un numero da 1 a 5
function generatorIntNum (){
    const genIntNum = Math.floor(Math.random() * (5) + 1);
    return genIntNum;
}

// Funzione che stabilisce se pari o dispari
function isEven (num){
    if(num % 2 === 0){
        return 'pari';
    }
    return 'dispari';
}

let choice, pari = false, numPlayer;
// Controllo scelta pari o dispari
// do{
//     // choice = parseInt(prompt('Scegli: Pari >> 0 << <> Dispari >> 1 << [I numeri maggiori di 1 saranno contati come pari]'));
//     if(choice === 0 || choice > 1){
//         pari = true;
//     }
// }while(isNaN(choice)); 

// // Controllo numero giocatore
// do{
//     // numPlayer = parseInt(prompt('Inserisci un numero da 1 a 5'));
//     if(numPlayer > 5 || numPlayer < 1){
//         console.log('La tua mano non ha ' + numPlayer + ' dita!');
//     }
// }while(isNaN(numPlayer));
// const numPc = generatorIntNum();
// const sumNum = numPlayer + numPc;

// console.log('PC >> ' + numPc + '; Player ' + pari + ' >> ' + numPlayer + '; Somma >> ' + sumNum);
// console.log(pari, isEven(sumNum));

// if(pari === isEven(sumNum)){
//     // console.log('Player ha vinto!');
// } else{
//     // console.log('PC ha vinto!');
// }

// // // Bonus 

const buttonEl = document.getElementById('submit');
let resultEl = document.querySelector('.result');

buttonEl.addEventListener('click', function (){
    let choice, numPlayer;

    // Controllo scelta pari o dispari
    choice = document.getElementById('even_or_not').value;
    console.log(choice);

    // Controllo numero giocatore
    do{
        numPlayer = document.getElementById('numPlayer').value;
        if(numPlayer > 5 || numPlayer < 1){
            // console.log('La tua mano non ha ' + numPlayer + ' dita!');
            resultEl.innerHTML = `La tua mano non ha ${numPlayer} dita!`;
        }
    }while(isNaN(numPlayer));
    const numPc = generatorIntNum();
    const sumNum = numPlayer + numPc;

    console.log('PC >> ' + numPc + '; Player ' + choice + ' >> ' + numPlayer + '; Somma >> ' + sumNum);
    console.log(choice, isEven(sumNum));

    if(choice === isEven(sumNum)){
        // console.log('Player ha vinto!');
        resultEl.innerHTML = `Il Player ha Vinto!`;
    } else{
        // console.log('PC ha vinto!');
        resultEl.innerHTML = `Il PC ha Vinto!`;
    }
});
