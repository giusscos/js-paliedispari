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

const palWord = prompt('Inserisci una parola (E\' Keys Sensitive!)');

console.log(isPalindroma(palWord));