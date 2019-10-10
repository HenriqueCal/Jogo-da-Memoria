var sorteio = [];
var escolhas = [];

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

    let cont = 0;
    let tabela = document.getElementById('tabela');
    tabela.innerHTML = null;

    for(let i=1;i<=4;i++){
        tabela.innerHTML += `<tr id="linha${i}"></tr>`;
        for(let j=1;j<=6;j++){
            let n = sorteio[cont++];
            let classe = n;
            if(n%2==0){
                n -= 1;
            }
            document.getElementById('linha'+i).innerHTML += `<td><img name="${n}" src="../img/${n}.jpg" onclick="seleciona(this)"></td>`;
        }
    }

}

function reset(){
    start()
    document.getElementById('acertos').innerText = 0;
    document.getElementById('erros').innerText = 0;
}

function seleciona(imagem){

    if(escolhas.indexOf(imagem) == -1){
        escolhas.push(imagem);
        imagem.style = "box-shadow: 10px 10px 10px rgba(0, 0, 0);"
        
        if(escolhas.length == 2){
            verifica();

            for(let i in escolhas)
                escolhas[i].style = ""

            escolhas = []
        }
    }
    
}

function verifica(){
    if(escolhas[0].name == escolhas[1].name){
        let acerto =  document.getElementById('acertos');
        acerto.innerText = Number(acerto.innerText) + 1
    } else {
        let acerto =  document.getElementById('erros');
        acerto.innerText = Number(acerto.innerText) + 1
    }
}

start()

