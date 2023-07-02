const colorInput = document.getElementById("color-input");
const copyButton = document.getElementById("copy-button");
const changeButton = document.querySelector(".change-button");

function generateRandomColor() {
    const randomColor = Math.random().toString(16).slice(2, 8);
    return "#" + randomColor;
}

function changeBackgroundColor() {
    const randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorInput.value = randomColor;
}

function copyColor() {
    navigator.clipboard.writeText(colorInput.value)
        .then(() => {
            console.log("Copied to clipboard:", colorInput.value);
            copyButton.textContent = "Copied!";
            copyButton.disabled = true;
            copyButton.style.pointerEvents = "none";
            setTimeout(() => {
                copyButton.textContent = "Copy";
                copyButton.disabled = false;
                copyButton.style.pointerEvents = "auto";
            }, 2000);
        });
}

changeBackgroundColor();
changeButton.addEventListener("click", changeBackgroundColor);
copyButton.addEventListener("click", copyColor);






// let generatedColor = "";

// function generateColor() {
//     generatedColor = "#" + generateRandomHex(6);
//     const colorInput = document.getElementById("color-input");
  
//     colorInput.value = generatedColor;
//   }
  
//   function generateRandomHex(length) {
//     let hex = "";
//     const hexChars = "0123456789ABCDEF";
  
//     for (let i = 0; i < length; i++) {
//       hex += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
//     }
  
//     return hex;
//   }

//   function changeBackgroundColor() {
//     generateColor(); 
//     document.body.style.backgroundColor = generatedColor;
// }

// function copyColor() {
//   const colorInput = document.getElementById("color-input");
//   const copyButton = document.getElementById("copy-button");

//   navigator.clipboard.writeText(colorInput.value)
//     .then(() => {
//       console.log("Copied to clipboard:", colorInput.value);
//       copyButton.textContent = "Copied!";
//       setTimeout(() => {
//         copyButton.textContent = "Copy";
//       }, 2000);
//     })
// }







  
