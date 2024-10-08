const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordOneEl = document.getElementById("appPasswordOne")
const passwordTwoEl = document.getElementById("appPasswordTwo")

function generatePasswords() {
    let passwordOne = "";
    let passwordTwo = "";

    
    for (let i = 0; i < characters.length; i++) {
            if (passwordOne.length < 16) {
                passwordOne += characters[Math.floor( Math.random() * characters.length )];
            }
            
            if (passwordTwo.length < 16) {
                passwordTwo += characters[Math.floor(Math.random() * characters.length)];
            }
    }
    
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
}

function copyToClipBoard(passwordEl) {
    if (passwordOneEl.textContent !== "" && passwordTwoEl.textContent !== "") {
        navigator.clipboard.writeText(passwordEl.textContent)
        alert("Copied password!")
    }
}