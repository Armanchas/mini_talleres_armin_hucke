//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string){
    var words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length > 4) {
            words[i] = word.split('').reverse().join('');
        }
    }
    return words.join(" ");
  }

console.log(spinWords("Just kidding there is still one more")); //"Just gniddik ereht is llits one more"
console.log(spinWords("You are almost to the last test")); //"You are tsomla to the last test"