var sorteio = [];

function numerosAleatorios(){
    while(sorteio.length < 24){
        var aleatorio = Math.floor(Math.random() * (24) + 1);
        if(sorteio.indexOf(aleatorio) == -1){
            sorteio.push(aleatorio);
        }

    }
}

function start(){
    sorteio = [];
    numerosAleatorios();
    // document.getElementById("p").innerHTML = sorteio.toString();

    let cont = 0
    let tabela = document.getElementById('tabela')
    tabela.innerHTML = null

    for(let i=1;i<=4;i++){
        tabela.innerHTML += `<tr id="linha${i}"></tr>`
        for(let j=1;j<=6;j++){
            document.getElementById('linha'+i).innerHTML += `<td><img src="../img/${sorteio[cont++]}.jpg"></td>`
        }
    }
}

function reset(){
    start()
}

start()