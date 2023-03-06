document.addEventListener('DOMContentLoaded', () => {

let resultado = document.querySelector('.resultado')
let btnResultado = document.querySelector('.btn-resultado')
let quadrados = document.querySelectorAll('.quadrado');

quadrados.forEach((quadrado) => {
    quadrado.addEventListener('click', cliqueJogador)
})

function cliqueJogador(event){
    
    let box = event.target;
    let posicao = box.id;

    if(movimentoJogador(posicao) == true){

        btnResultado.addEventListener('click', ()=>{
            resultado.style.right = '0'
            if (vezJogador == 0){
                resultado.innerHTML = `<p>O vencedor foi o jogador ${jogadorDois}</p>`
            }else{
                resultado.innerHTML = `<p>O vencedor foi o jogador ${jogadorUm}</p>`
            }
        })

    }else if (tab[0] && tab[1] && tab[2] && tab[3] && tab[4] && tab[5] && tab[6] && tab[7] && tab[8] != ''){
        btnResultado.addEventListener('click', ()=>{
        resultado.style.right = '0'
        resultado.innerHTML = `<p>O jogo terminou empatado</p>`
        })
    }

    atualizaQuadrados()

    console.log(fimJogo)
        
}

})


function atualizaQuadrados(){

    let quadrados = document.querySelectorAll('.quadrado');
    let resultado = document.querySelector('.resultado')

    quadrados.forEach((quadrado) => {

        let posicao = quadrado.id;
        let simbolo = tab[posicao];
   
        if (simbolo != ''){
            quadrado.innerHTML = `<div class='${simbolo}'><div/>`
        }
    }
)}
