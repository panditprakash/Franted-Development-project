let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let Upercase = document.getElementById("Upercase");
let Numbers = document.getElementById("Numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");

//slider code start
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});
//slider code end

//click to generat password start
genbtn.addEventListener("click", () => {
  passbox.value = gereratePassword();
});
//end

let uperChars = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
//function to generate password code start
function gereratePassword() {
  let genPassword = "";

  // genPassword = Math.floor(Math.random()*41); //  is  method se 0  se 41 ke bitch any  random generat kare ga only decimal value me
  //  genPassword = Math.random()*41; //is method se only float value generat kare ga

  genPassword = uperChars.charAt(math.floor(math.random() * uperChars.length));
  return genPassword;
}
//end



// let inputSlider = document.getElementById("inputSlider");
// let sliderValue = document.getElementById("sliderValue");
// let passBox = document.getElementById("passBox");
// let lowercase = document.getElementById("lowercase");
// let uppercase = document.getElementById("uppercase");
// let numbers = document.getElementById("numbers");
// let symbols = document.getElementById("symbols");
// let genBtn = document.getElementById("genBtn");
// let copyIcon = document.getElementById("copyIcon");


// // Showing input slider value 
// sliderValue.textContent = inputSlider.value;
// inputSlider.addEventListener('input', ()=>{
//     sliderValue.textContent = inputSlider.value;
// });

// genBtn.addEventListener('click', ()=>{
//     passBox.value = generatePassword();
// })

// let lowerChars = "abcdefghijklmnopqrstuvwxyz";
// let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let allNumbers = "0123456789";
// let allSymbols = "~!@#$%^&*"; 

// // Function to generate Password
// function generatePassword(){
//     let genPassword = "";
//     let allChars = "";

//     allChars  += lowercase.checked ? lowerChars : "";
//     allChars  += uppercase.checked ? upperChars : "";
//     allChars  += numbers.checked ? allNumbers : "";
//     allChars  += symbols.checked ? allSymbols : "";


//     if(allChars == "" || allChars.length == 0){
//         return genPassword;
//     }
    

//     let i = 1;
//     while(i<=inputSlider.value){
//         genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
//         i++;
//     }

//     return genPassword;
// }

// copyIcon.addEventListener('click', ()=>{
//     if(passBox.value != "" || passBox.value.length >=1){
//         navigator.clipboard.writeText(passBox.value);
//         copyIcon.innerText = "check";
//         copyIcon.title = "Password Copied";

//         setTimeout(()=>{
//             copyIcon.innerHTML = "content_copy";
//             copyIcon.title = "";
//         }, 3000)
//     }
// });