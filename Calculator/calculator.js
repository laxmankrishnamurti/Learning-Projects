let string = "";
const buttons = document.querySelectorAll('button');

Array.from(buttons).forEach( (button) => {
    button.addEventListener('click', (e) => {
        
        let display = document.querySelector('input');

        if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }else if(e.target.innerHTML == 'C'){
            string = "";
            display.value = string;
        }else{
            string = (string + (e.target.innerHTML));
            display.value = string;
        }
    })
})