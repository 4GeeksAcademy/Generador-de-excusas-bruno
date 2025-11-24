import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// function getRandomMemberArray(
//   arr
// ) {
//   const randomIndex = Math.floor(Math.random() * arr.length)
//   return arr[randomIndex]
// }

// function generateRandomExcuse() {
//   let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
//   let action = ['ate', 'peed', 'crushed', 'broke'];
//   let what = ['my homework', 'my phone', 'the car'];
//   let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

//   const whoRandomMember = getRandomMemberArray(who)
//   const actionRandomMember = getRandomMemberArray(action)
//   const whatRandomMember = getRandomMemberArray(what)
//   const whenRandomMember = getRandomMemberArray(when)

//   const message = "$(whoRandomMember) $(actionRandomMember) $(whatRandomMember) $(whenRandomMember)"
//   return message
// };

// document.getElementById("excuse").innerHTML = "hola"
// window.onload 




let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// console.log(what[Math.floor(Math.random() * what.length)])


function indiceAleatorio(elemento) {
  const randomIndex = Math.floor(Math.random() * elemento.length)
  
  return randomIndex
  
}

 const aleatorioWhat=what[indiceAleatorio(what)]
 const aleatorioAction=action[indiceAleatorio(action)]
 const aleatorioWho=who[indiceAleatorio(who)]
 const aleatorioWhen=when[indiceAleatorio(when)]

 const message = `${aleatorioWho} ${aleatorioAction} ${aleatorioWhat} ${aleatorioWhen}`

 console.log(message)

 document.getElementById("excuse").innerHTML = message