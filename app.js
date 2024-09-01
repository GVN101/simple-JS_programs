const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");

const result = document.getElementById("result");
let temp;





function convert(value){
    if(toFahrenheit.checked){
        temp = (textBox.value * 9/5) + 32;
        result.textContent = `${textBox.value}°C is ${temp.toFixed(2)}°F`;
    }
    else if(toCelcius.checked){
        temp = (textBox.value - 32) * 5/9;
        result.textContent = `${textBox.value}°F is ${temp.toFixed(2)}°C`;
    }
    else{
        result.textContent = "Please select a conversion type";
    }
}