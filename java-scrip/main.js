(function(){
    // Elementos do DOM 
    let data = document.querySelector(".data")
    

    // Acréscimo da data no footer
    function dataAno(dice){
        let data = new Date()
        let ano = data.getFullYear()
        dice.append(ano)
    }
    dataAno(data)
})()