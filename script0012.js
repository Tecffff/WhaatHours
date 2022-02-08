function carregar(){
    var img = document.getElementById('imagem') // pegando imagem que está section
    var mensagem = document.getElementById('msg') // pegando mensagem q está no top
    var legenda = document.getElementById('legenda') //pegando legenda auxiliar
    var horario = new Date() // pegando data
    // var hora = horario.getHours() // pegando horario do navegador do usuario
    var periodo = document.querySelector('periodo')
    var hora = 1


    mensagem.innerHTML = `Agora são ${hora} horas`

    if(hora >= 12 &&  hora < 18){
        
        img.src = 'tarde.png'
        legenda.innerHTML = 'Vespertino é o período intermediário entre matutino e noturno. Não havendo determinação de hora, pode ser definido como o período que se inicia após o almoço e finda ao anoitecer. <i>Wikipédia</i>'
        periodo.innerHTML = 'Estamos de tarde'
        

    
    } else if( hora >= 1 && hora < 5 ){
        img.src = 'madrugada.png'
        legenda.innerHTML = 'A madrugada é o período do dia que antecede o nascer do sol, finalizando, dessa forma, a noite. Trata-se de um período em que a noite já acabou, mas o dia seguinte ainda não teve início. <i>Wikipédia</i>'
        periodo.innerHTML = 'Estamos de madrugada'
        
    }
    
    else if(hora >= 18 &&  hora < 23 ){
        img.src = 'noite.png'
        legenda.innerHTML = 'tempo que transcorre entre o ocaso e o nascer do sol.<br> Nas regiões terrestres situadas no equador, a noite vai das 18h do dia anterior até as 6h do dia seguinte.<br>nas outras latitudes, só ocorre nos equinócios <i>Wikipédia</i>'
        periodo.innerHTML = 'Estamos de noite'
        
    
    } else{
        img.src = 'manha.png'
        legenda.innerHTML = 'A manhã é o período do dia que vai das 6:00 às 12:00. Situa-se entre a madrugada e o meio-dia. A palavra "manhã" pode se referir ao período imediato após a pessoa acordar, independentemente do atual horário do dia - <i>Wikipédia</i>'

        
    }

}