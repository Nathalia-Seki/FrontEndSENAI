// VARIÁVEIS
const apiKey = "cffaec2cedc52fd6e47fdb84409ecb8f";
const btnClima = document.querySelector("#btnClima");
const inputCidade = document.querySelector("#cidade");
const climaResultado = document.querySelector("#climaResultado");
var cidade = ""

// FUNCTIONS

const apiClima = async(cidade) => {
    const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`

    const response =await fetch(apiLink);
    const dados =await response.json();

    return dados;
}

// em const também pode usar = const apiURL 

const mostrarClima = async(cidade) => {
    const dados = await apiClima(cidade);
    // para mostrar na tela vai esperar apiClima carregar
    climaResultado.innerHTML = `
        <h3 id="nomeCidade"> ${dados.name}</h3>
        <p id="temperaturaAtual">Temperatura Atual: ${dados.main.temp} ° </p>
        <p id="temperaturaMin">Temperatura Mín.: ${dados.main.temp_min} ° </p>
        <p id="temperaturaMax">Temperatura Max: ${dados.main.temp_max} ° </p>
        <p id="umidade">Umidade: <i class="bi bi-droplet"></i> ${dados.main.humidity} % </p>
        <p id="vento">Vento: ${dados.wind.speed} km/h </p>

    `
}

// EVENTOS
btnClima.addEventListener("click", () => {
    cidade = inputCidade.value;
    mostrarClima(cidade)
})