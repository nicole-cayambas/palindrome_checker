const word = document.getElementById('palindrome');

const check = document.getElementById('check');

const result = document.getElementById('result');

check.addEventListener('click', function() {
    const wordToCheck = word.value;
    const wordToCheckArray = wordToCheck.split('');
    const reversedWord = wordToCheckArray.reverse();
    const reversedWordToString = reversedWord.join('');
    changeColor(result);
    if (wordToCheck === reversedWordToString) {
        result.textContent = 'This is a palindrome';
    } else {
        result.textContent = 'This is not a palindrome';
    }
})

function changeColor(result) {
    result.style.color = "rgb("
    + Math.floor(Math.random() * 255) + ","
    + Math.floor(Math.random() * 255) + ","
    + Math.floor(Math.random() * 255)
    + ")"
  }