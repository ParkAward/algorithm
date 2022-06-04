// calcScore: inflearn/javascript/section2-4 Complete

const { stdin, stdout } = require('process');
let readline = require('readline');

let rl = readline.createInterface({
    input:stdin,
    output:stdout,
})
let iCnt = 0;
let num = 0;
let board = [];
rl.on('line', (line)=>{
    if(iCnt++ === 0)
        num = parseInt(line);
    else{
        let score = 0;
        let cnt = 0;
        board = line.split(' ').map(e => parseInt(e));
        for(let i = 0; i < num ; i++){
            if(board[i] === 1){    
                score += ++cnt;
            }else
                cnt = 0;
        }
        console.log(score);
        rl.close();
    }

});