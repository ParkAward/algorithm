//RockScissorPaper: inflearn/javascript/section2_3 Complete
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input_cnt = 0;

let num = 0;
let board = [];
rl.on('line',(line) =>{
    if(input_cnt++ === 0 )
        num = parseInt(line);
    else{
        let temp = line.split(' ').map(e=>parseInt(e));
        board.push(temp);
        if(input_cnt===3)
            rl.close();

    }
});

rl.on('close',()=>{
    for(let v =0;v<num;v++)
        console.log(whoWin(board[0][v],board[1][v]));
    // console.log(board);

});

let whoWin = (a, b) =>{
    // console.log(a,b);
    let winPattern = (n1, n2) =>{
        if(n1 === 1 && n2=== 3)
            return true;
        else if(n1 === 2 && n2 === 1)
            return true;
        else if(n1 === 3 && n2 === 2)
            return true;
        else
            return false;
    }
   if(a === b)
        return "D";
    else{
        if(winPattern(a,b))
            return "A";
        else
            return "B";
    }
}