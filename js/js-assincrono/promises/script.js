// const promesa = new Promise((resolve,reject) => {
//     let condicao = false;
//     if(condicao){
//         setTimeout(()=> {

//             resolve({nome: "Andre", idade: 28});
//         }, 1000)
//     }else {
//         reject(Error("Erro na promise"))
//     }
// });
// //método then() passa uma fç de callback, só é ativado qnd a promise é reolvida. O the retorna uma outra promise, ou seja, pode ser usado mais um then()
// const retorno = promesa.then((resolucao)=>{
//     resolucao.profissao = 'Desenvolvedor';
//     return resolucao
// })
// //o método catch() vai servir pra qnd essa promise for rejeitada

// /*.then(resolucao => {
//     console.log(resolucao);
// }).catch(rejeitado => { 
//     console.log(rejeitado);
// });*/

// //o erro pode tb ser passado no then como segundo argumento, sem precisar criar um catch 
// .then(resolucao => {
//     console.log(resolucao);
// }, rejeitado => { 
//     console.log(rejeitado);
// }).finally(() => {
//     console.log('Acabou ');
// });

// console.log(retorno); 


//finally() executa a fç anônima que for passada assimque apromessa acabar. Ele sempre é exxecutado com erro ou com acerto
//MÉTODOS DO OBEJTO PROMISE
/* .all() é possívle passar dentro dele uma array com diferentes promessas e ele tb retorna uma promessa, que só sera resolvida qnd todas as de dentro forem resolvidas ou quando pelo menos uma for rejeitada */

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário Logado')
    }, 1000)
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados')
    }, 1500)
});

// const carregouTudo = Promise.all([login, dados]);

// carregouTudo.then((resolucao) => {
//     console.log(resolucao);

// })

/* .race() parecido com o .all() mas a primeira promise que for resolvida ele já resolve a promise do race, dentro dele vai ter a resposta dessa promise resolvida primeiro*/

const carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolucao) => {
    console.log(resolucao);

})