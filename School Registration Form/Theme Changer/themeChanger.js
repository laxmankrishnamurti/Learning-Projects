const body = document.querySelector('body');
const button = document.getElementById('btn');
const displayValue = document.querySelector('#displayValue');


button.addEventListener('click', (e) => {
    e.preventDefault();

    let red = Math.round(Math.random()*256 + 1);
    let green = Math.round(Math.random()*256 + 1);
    let blue = Math.round(Math.random()*256 + 1);

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    let getColor = `${red}, ${green}, ${blue}`;
    displayValue.textContent = `RGB :: ${getColor}`;

})
