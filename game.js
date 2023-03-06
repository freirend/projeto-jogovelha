let tab = ['', '', '', '', '', '', '', '', ''];
let vezJogador = 0
jogadorUm = prompt('Nome do jogador um:')
jogadorDois = prompt('Nome do jogador dois:')
let simbolos = ['o', 'x']
let fimJogo = false

function movimentoJogador(position){

    if (fimJogo == true){
        return
    }

    fimJogo = teveVencedor()

    if (fimJogo == false){
        if (tab[position] == ''){
            tab[position] = simbolos[vezJogador];

            if (vezJogador == 0){
                vezJogador = 1
            }else {
                vezJogador = 0
            }
        }
   }
   return fimJogo
}

function teveVencedor(){
    let vencedorStatus = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    for (v = 0; v < vencedorStatus.length; v++){
        let seq = vencedorStatus[v]
        
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (tab[pos1] == tab[pos2] && tab[pos1] == tab[pos3] && tab[pos1] != ''){
            return true
        }
    }

    return false

    }
    


