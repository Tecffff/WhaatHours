function carregar(){
    var img = document.getElementById('imagem') // pegando imagem que está section
    var mensagem = document.getElementById('msg') // pegando mensagem q está no top
    var legenda = document.getElementById('legenda') //pegando legenda auxiliar
    var horario = new Date() // pegando data
    var hora = horario.getHours() // pegando horario do navegador do usuario

    
    mensagem.innerHTML = `Agora são ${hora} horas`

    if(hora >= 12 &&  hora < 18){
        img.src = 'tarde.png'
        
    
    } else if( hora >= 1 && hora < 5 ){
        img.src = 'madrugada.png'
        
    }
    
    else if(hora >= 18 &&  hora < 23 ){
        img.src = 'noite.png'
        document.body.style.background = '1, 29, 31'
    
    } else{
        img.src = 'manha.png'
        document.body.style.background = '1, 29, 31'

        
    }

}