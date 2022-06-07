//peaks: inflearn/javascript/section2-7 Complete
const { stdin, stdout } = require('process');
let readline = require('readline');
let rl = readline.createInterface({
    input:stdin,
    output:stdout,
});
let inputCnt = 0;
let num = 0;
let board = [];
rl.on('line',(line)=>{
    if(inputCnt++ === 0)
        num = parseInt(line);
    else{
        let temp = line.split(' ').map(e => parseInt(e));
        board.push(temp);
        if(inputCnt>num)
            rl.close();
    }
});

rl.on('close',()=>{
    let checkPeak = (x,y) =>{
        if(x > 0 && board[x][y]<board[x-1][y])
            return false;
        else if(x < num-1 && board[x][y]<board[x+1][y])
            return false;
        else if(y > 0 && board[x][y]<board[x][y-1])
            return false;
        else if(y < num-1 && board[x][y]<board[x][y+1])
            return false;
        else
            return true;               
    }
    let cnt = 0;
    for(let i = 0; i < num; i++)
        for(let j = 0; j < num; j++)
            if(checkPeak(i,j))
                cnt++;
    console.log(cnt)
    process.exit();
});
