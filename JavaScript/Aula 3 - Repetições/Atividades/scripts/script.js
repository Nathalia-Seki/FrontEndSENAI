var filmes = [
    ["Harry Potter","Um jovem bruxo"],
    ["Shrek","Um ogro e sua princesa"],
    ["Poderoso Chefão","Filme mafioso"],
    ["Star Wars","Guerra nas estrelas"],
    ["Senhor dos Anéis","Uma jornada de Hobbits"],
    ["Vingadores","Os heróis mais poderos da terra"],
]

var grupoFilmes = document.getElementById("grupoFilmes");
//grupoFilmes.innerHTML = "Olha que legal!" para testar se vai dar certo de aparecer na tela.
//forEach é um array
//é possível fazer lista dentro de outra lista quando usa [] e o número dentro como está representado abaixo. Os números representam uma ordem que o próprio computador coloca.
//filme = 0: titulo, 1: descrição e se fosse colocar mais informações, então seria o 3 e por ai em diante.


filmes.forEach(element => {
    grupoFilmes.innerHTML += `
    <div class="filme">
            <h5>${element[0]}</h5>
            <p>${element[1]}</p>
            <button class="verMais">Ver Mais</button>
    </div>
`
});




