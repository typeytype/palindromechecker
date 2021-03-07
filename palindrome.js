function overAll() {
var str = document.getElementById('words').value;

function palindrome(str) {
    return (
      str.replace(/[\W_]/g, "").toLowerCase() ===
      str
        .replace(/[\W_]/g, "")
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    );
  }
if ((document.getElementById('words').value) == '') {document.getElementById('answer').innerHTML = ''}
else if (palindrome(str)) {document.getElementById('answer').innerHTML = 'This is a palindrome!'}
else {document.getElementById('answer').innerHTML = 'This is not a palindrome.'}
}