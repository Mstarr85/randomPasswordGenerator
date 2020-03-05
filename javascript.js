// Defined variables

var abcDown = "abcdefghijklmnopqrstuvwxyz";
var abcUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specChar = "!#$%^(){}[]=<>?|_-,.`~&*+?@";
var numbers = "1234567890";
var generatedPassword = "";

// Start prompts/alerts
var numCharacters = prompt("How many characters would you like your password to contain?");
if (numCharacters >= 8 && numCharacters <= 128) {

    var confirmSpec = confirm("Click OK to confirm special characters.");
    if (confirmSpec === true) {
        generatedPassword += specChar;
    }
    console.log(generatedPassword);

    var charNum = confirm("Click OK to confirm including numeric Characters.");
    if (charNum === true) {
        generatedPassword += numbers;
    }
    console.log(generatedPassword);

    var lowercase = confirm("Click OK to confirm including lowercase characters.");
    if (lowercase === true) {
        generatedPassword += abcDown;
    }
    console.log(generatedPassword);

    var uppercase = confirm("Click OK to confirm including uppercase characters.");
    if (uppercase === true) {
        generatedPassword += abcUp;
    }
    console.log(generatedPassword);

} else {
    alert("Password length must be between 8 and 128 characters!");
    location.reload();
}
// Generates Password with user input conditions
function createPassword() {
    var passwordGen = "";
    for (i = 1; i <= numCharacters; i++) {
        passwordGen += generatedPassword.charAt(Math.floor(Math.random() * Math.floor(generatedPassword.length)))
    }
    console.log(passwordGen)
    document.getElementById("password").value = passwordGen;
}
// Copies generated password and saves to clipboard
function clipBoard() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);

}
















