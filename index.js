var nome = prompt("Qual o seu nome?")
var altura = parseFloat(prompt("Qual a sua altura(m)? Ex: 1.8"))
var peso = parseFloat(prompt("Qual o seu peso(kg)? Ex: 75.5"))
var imc = peso / (altura ** 2)

alert(`${nome}, seu IMC é ${imc}`)