//Exercicio de interpretação de código
// 1- Leia o código abaixo
//     const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//     ]
//     const novoArrayA = usuarios.map((item, index, array) => {
//     console.log(item, index, array)
//     })
// a) O que vai ser impresso no console?
// Resposta: Vai imprimir o objeto, a posição no array e o array de objeto
// _______________________________________________________________________________
// 2- Leia o código abaixo
//     const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//     ]
//     const novoArrayB = usuarios.map((item, index, array) => {
//     return item.nome
//     })
//     console.log(novoArrayB)
// a) O que vai ser impresso no console?
// Resposta: Vai imprimir a propriedade nome que está dentro do array de objetos "usuários"
// ________________________________________________________________________________
// 3-  Leia o código abaixo
//     const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//     ]
//     const novoArrayC = usuarios.filter((item, index, array) => {
//     return item.apelido !== "Chijo"
//     })
// console.log(novoArrayC)
// a) O que vai ser impresso no console?
// Resposta: Vai imprimir o array de objetos "usuários" excluindo o apelido "Chijo"


// Exercicio escrita de código 
//1) Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:


const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
  const selecionarNomes = (item) =>{
      return item.nome
  }
 const nomesDosProdutos = produtos.map(selecionarNomes)
 console.log(nomesDosProdutos)


