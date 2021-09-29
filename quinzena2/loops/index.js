// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
//Resposta1 : Ele esta imprimindo o valor 10.

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
//Resposta2 a) 19, 21, 23, 25, 27, 30
//b) Não, deveria usar o for passando a condição.

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// Resposta3: Iria escalonar os asteriscos em 1,2,3,4.

// const bichinhosVoceTem = Number(prompt("Quantos bichinhos você tem?"))
// if (bichinhosVoceTem === 0){
//     console.log("Que pena! Você pode adotar um pet!")


// 1)// } else if (bichinhosVoceTem > 0){
// let animais =[]
// for (let i = 0; i < bichinhosVoceTem; i++){
// let pet = prompt("Qual o nome do seu bichinho?")
// animais[i] = pet

// } 
// console.log(animais)
// } else {
//     console.log("Entre com um número positivo")
// }

//a) Escreva um programa que **imprime** cada um dos valores do array original.

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original2)

//EXERCICIO 2

//const arrayOriginal = [10,20,30,40,50]

// for (let i =0; i < arrayOriginal.length; i++){

// console.log(arrayOriginal[i])
// }
// Resposta a

// const arrayOriginal = [10,20,30,40,50]

// for (let i =0; i < arrayOriginal.length; i++){

// console.log(arrayOriginal[i]/10)
// }
// Resposta b

// let novoArray = []
// for (let i =0; i < arrayOriginal.length; i++){
//   if (arrayOriginal[i] %2 ==0){
//       novoArray[i] = arrayOriginal[i]

//   } console.log(novoArray)
// }
//Resposta c

// let arrayString = (array) => {
//     crieArray = []
//     for (let i = 0; i < array.length; i++) {
//         crieArray[i] = array[i]
//         console.log(`"O elemento do índex ${i} é: ${crieArray[i]}"`)
//     }
// }
// arrayString(arrayOriginal)
//Resposta d

// let maiorMenor = (array) => {
//     let maior = 0
//     let menor = Infinity
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > maior) {
//             maior = array[i]
//         }
//         if (array[i] < menor) {
//             menor = array[i]
//         }
//     }
//     console.log("O maior elemento é " + maior + " e o menor é " + menor)
// }
// marca_de_verificação_branca
// olhos
// mãos_para_cima

//Resposta e.