
var pecas = ["Placa de vídeo"]


pecas.push("SSD")
pecas.push("Memória 4GB")
pecas.push("Placa Mãe")
pecas.push("Gabinete Gamer")

pecas.splice(2,1)





//imprimir na tela
var grupoEquipamentos = document.getElementById("grupoEquipamentos");

pecas.forEach(element => {
    grupoEquipamentos.innerHTML += `
    <div class="peca">
            <h5>${element}</h5>
            <button class="verMais">Ver Mais</button>
    </div>
`
});




