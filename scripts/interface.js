document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

document.addEventListener('DOMContentLoaded',()=>{ //Carregar o html


    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{ //Cria um evento de clique.
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event){ //Função para criar um evento de clique.
    
    let square = event.target; //Representa o elemento que foi clicado.
    let position = square.id; // A posição que receberá o movimento no board.

    if(handleMove(position)){

        setTimeout(()=>{
            alert("Jogador " + playerTime + " Venceu!");
        }, 10)

        
    };
    updateSquares(position);
}

function updateSquares(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position]; //Pega o símbolo do board.
    square.innerHTML = `<div class= '${symbol}'></div>`

}

function atualiza(){ //Função para atualizar o game.

    let squares = document.querySelectorAll(".square");
  
    squares.forEach((square)=>{
        square.innerHTML = '';
          
     
    })
}

function restart(){ //reinicia o jogo
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;
    atualiza();
}
