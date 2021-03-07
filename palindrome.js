/* The function below represents a true or false assessment of a variable, as assessed by whether or not it is a palindrome, that is whether the letters are in the same order both frontways and backways. */


function overAll() {

  /* Now we define a variable str that we will later pass into a function. str is the value inputted into the input field. In this case the input data will be the string that is going to be assessed for palindrome status. This string can include any assortment of alphanumeric characters and will accept symbols and spaces though won't include them in palindrome assessments i.e. po-p is equivalent to pop and wo w is equivalent to wow. */

var str = document.getElementById('words').value;


/* Having extracted the value of the input field, we can begin our assessment of the palindrome status of our string. Below you see a series of methods that our variable str is being passed through. str is made equivalent to its lowercase form and this is the form which will later be assessed for truthiness as a match. str is then actually converted to lowercase and and delineated into an array of its single characters, has the order of this array inverted such that 0 becomes n whilst n becomes 0 and finally this array is reconstructed into a string. The product of str being passed to these methods is assessed for equality to str in its original form, which returns a true or false boolean as the product of our palindrome(str) function. */

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

/* The below if else simply clears our assessment when the input field is empty and more importantly prints a string into our HTML element if the passed function is valid or invalid. */

if ((document.getElementById('words').value) == '') {document.getElementById('answer').innerHTML = ''}
else if (palindrome(str)) {document.getElementById('answer').innerHTML = 'This is a palindrome!'}
else {document.getElementById('answer').innerHTML = 'This is not a palindrome.'}
}