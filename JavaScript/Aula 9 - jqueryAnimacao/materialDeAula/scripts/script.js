// vai imprimir o texto na tela e não o botão. Se for o caso precisa colcoar o html, exemplo abaixo.
// $("#botoes").text(`
//     <button onclick="animacao1()" type="button">FECHAR</button>
// `)

$("#botoes").html(`
    <button onclick="animacao1()" type="button">FECHAR</button>
    <button onclick="animacao2()" type="button">ABRIR</button>
    <button onclick="animacao3()" type="button">Animação 3</button>
    <button onclick="animacao4()" type="button">Animação 4</button>
    <button onclick="animacao5()" type="button">Animação 5</button>
    <button onclick="animacao6()" type="button">Animação 6</button>


`)

function animacao1(){
    // $("#caixa").fadeOut(500);
    $("#caixa").slideUp(500);
}

function animacao2(){
    // $("#caixa").fadeIn(500);
    $("#caixa").slideDown(500);
}

// Essa animação é para realizar modificações no css. 
// elemento.animate({}) = aplica uma animação e dentro das chaves nós podemos alterar o css do elemento especificado.
// { atributo : "valor"}
function animacao3(){
    $("#caixa").animate({ borderRadius : "100%", width : "250px"})
    
    // Aplicar imagem
    // elemento.css("backgroundImg","src");
}

// Animação cadeado - aqui faz uma animação de cada vez
// animate().animate() = animação encadeada, espera a etapa anterior finalizar para assim ser efetuada.
function animacao4(){
    $("#caixa").animate({width : "100%"}).animate({height : "500px"})
}

// essa animação faz rotcionar o elemento
// {rotate : "00deg"} = a rotação e quantos graus vai rotacionar.
// {duration : 000milisegundos} = quanto menor o número mais rápido. Aqui é a duração, em quanto tempo.
function animacao5(){
    // animate({},{}) = a segunda chave se refere a opções da animação, e dentro das opções se colocando () => {} poderemos engatilhar uma função!
        $("#caixa").animate({margin: "40px", rotate : "360deg"},{duration : 2000 , complete : () => {
            // Esse abaixo é para alterar o texto que está dentro da caixinha - de teste para essa outra frase.
            $("#caixa").text("CUPOM RELÂMPAGO!!!")
            alert("Dei uma volta :D")
        }})
}

// função para mudar a cor de fundo - nesse o professor usou esse comando porque o .addClass era uma class e não estava modificando porque a cor é um "id" e estava respeitando a hieraquia e não a ordem de mudança. 
function animacao6(){
    $("#caixa").css("backgroundColor","red")
}