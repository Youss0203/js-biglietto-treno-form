const buttonElement = document.querySelector("button")

buttonElement.addEventListener("click" ,function() {

const userDistance = document.getElementById("distanza").value;
const userAge = document.getElementById("age").value;


let prezzoBiglietto = (userDistance * 0.1976);

if(userAge > 18){
    ((prezzoBiglietto * 17.65)/100)
}else if(userAge <= 65){
    ((prezzoBiglietto*53.27)/100)
}

console.log(parseFloat(prezzoBiglietto.toFixed(2)))

})