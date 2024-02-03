//submit event only apply on form not any button.

const form = document.getElementById('form');
let displayResult = document.querySelector('#display-result');
let displayDes = document.querySelector('#weight-guide');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let bmi;

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    // Basic Validation of height and weight 

    if(isNaN(height)){
        alert('Please enter a valid height');
    }else if(isNaN(weight)){
        alert('Please enter a valid weight');
    }else{
        
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        displayResult.innerHTML = `Your BMI is :: ${bmi}`;  

        if(bmi < 18.6){
            displayDes.innerHTML = 'Under Weight';
        }else if(bmi >= 18.6 || bmi <= 24.9){
            displayDes.innerHTML = 'Normal Range';
        }else{
            displayDes.innerHTML = 'Over Weight'
        }
    }



})