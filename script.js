let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");


let string = "";


let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            input.value = eval(string);
            // input.value = string;
        }

        else if (e.target.innerHTML == "AC"){
            // string = "";
            input.value = "";
        }
        else if (e.target.innerHTML == "DEL"){
            // string = string.substring(0, string.length-1);
            input.value = string.substring(0, string.length-1);
        }


  

        else {
            string += e.target.innerHTML;
            input.value = string;

        }

    })
})