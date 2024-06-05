// catálogo
var catalogo = []

catalogo.push(new ProdutoTurismo("Japão","Visite a terra do sol nascente!",["Metro","Carro","Bicicleta"],3,10000,"images/japão.jpg"))
catalogo.push(new ProdutoTurismo("Cancun","Sol, Mar e Chichén Itzá",["Metro","Carro","Bicicleta"],5,5000,"images/cancun.jpg"))
catalogo.push(new ProdutoTurismo("Machu Picchu","Visite a cidade perdida dos Incas!",["Metro","Carro","Bicicleta"],4,4000,"images/machu picchu.jpg"))

catalogo.forEach((elemento) => {
    document.querySelector("#catalogo").innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${elemento.img}" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column align-items-center">
                <h5 class="card-title">${elemento.nome}</h5>
                <p class="card-text">${elemento.descricaoLocal}</p>
                <h5 class="text-success">R$${elemento.valor}</h5>
                <button class="btn btn-primary">COMPRAR</a>
            </div>
        </div>
    `  
})

// tema
$("#btnTema").on("click",function(){
    if( $("body").attr("data-bs-theme") == "light"){
        $("body").attr("data-bs-theme","dark");
    }else{
        $("body").attr("data-bs-theme","light");
    }
})

// valor
var valor = 0;


