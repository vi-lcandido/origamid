const cep = fetch('https://viacep.com.br/ws/22250040/json/')

cep.then(resolucao => {
    return resolucao.text().then((body => {
        console.log(body);
        const conteudo = document.querySelector('.conteudo');
        conteudo.innerText = body
    }));
})