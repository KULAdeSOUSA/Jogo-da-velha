let board = ["", "", "", "", "", "", "", "", ""]; //posições do tabuleiro
let playerTime = 0; //primeiro jogador
let symbols = ["o", "x"]; //símbolos
let gameOver = false; //o Jogo não acabou
let winStates = [ // Variável dos estados que dão a vitória.
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6], // Arrays com todas as 8 sequências de vitória 
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
    ]

function handleMove(position){ //Coloca um símbolo dentro do board.

    if (gameOver){ // Verifica se o jogo acabou.
        return;
    }

    if (board[position] == ''){ //verifica se a posição está vazia no tabuleiro.
    board[position] = symbols[playerTime]; // Se tiver vazia ela coloca o símbolo do jogador da vez.

    gameOver = isWin(); // Verifrica se houve um vencedor.
    

    if (gameOver == false) { // Só passa para o próximo jogador se o gameOver for falso.

        playerTime = (playerTime == 0) ? 1 : 0; //Passa a jogada para o próximo jogador.
       
    }
}
     return gameOver; //Retorna o fim de jogo.

}

function isWin(){ // Função para saber se temos um vencedor.
    
    for (let i = 0; i < winStates.length; i++){ // Percorrer o array.
        let sequence = winStates[i]; // Cada vez que passar no For, pegar uma das sequências.

        let position1 = sequence[0]; //Pegando as posições.
        let position2 = sequence[1];
        let position3 = sequence[2]; 

        if (board[position1] == board[position2] && // Verifica se os elementos são iguais.
            board[position1] == board[position3] &&
            board[position1] != '') // Verifica se a posição é diferente de vazio.

        return true; // Se a verificação for verdadeira, retorna para a função isWin com um vencendor.
        
    } 

    return false; // Se não houver um vencedor.
    
}