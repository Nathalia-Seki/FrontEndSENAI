$("h6").on("click",function(){
    let corpo = $("body");

    // hasClass = é uma verificação que faz, se tiver de tal forma, então faz isso, senão faz o outro
    if(corpo.hasClass("tema-claro")){
    // addClass = adiciona uma classe
    corpo.addClass("tema-escuro");
    // removeClass = remove classe
    corpo.removeClass("tema-claro");
    }else{
    
    corpo.addClass("tema-claro");
    
    corpo.removeClass("tema-escuro");
    }
    
})