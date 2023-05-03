// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultCep = document.querySelector('.resultCep')

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = inputCep.value;
    searchCep(cep);
};

function searchCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {response.text()
        .then((body => {
            resultCep.innerText = body
        }));
});
};

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcBuy = document.querySelector('.btcBuy')

function fecthBtc() {
    fetch('https://blockchain.info/ticker')
    .then((response) => {
        return response.json()
        .then((btcJson) => {
            btcBuy.innerText = ('R$ '+ btcJson.BRL.buy).replace('.',',');
            console.log(btcJson.BRL.buy);
        })
    })
}

// setInterval(fecthBtc, 900);
fecthBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnNextJoke = document.querySelector('button')
const randomJokes = document.querySelector('.random-jokes')

btnNextJoke.addEventListener('click', handleButton);

function handleButton(event) {
    event.preventDefault();
    fetchJoke()
}

function fetchJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
        return response.json()
        .then((jokeJson) => {
            randomJokes.innerText = jokeJson.value
        })
    })
}