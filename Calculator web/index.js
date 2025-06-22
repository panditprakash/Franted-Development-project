
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){ /*number ke liye javaScript */
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){ /*AC ke liye javaScript code */
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){ /*DEL ke liye javaScript code */
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})