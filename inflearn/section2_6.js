//grating maximum: inflearn/javascript/section2-6 Complete
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
    let max = 0;

    for(let i = 0; i < num;i++){
        let hz= 0;
        let vt = 0;
        for(let j = 0; j < num; j++){
            hz+=board[i][j];
            vt+=board[j][i];
        }
        // console.log(hz,vt);
        if(hz>max)
            max = hz;
        if(vt>max)
            max = vt
    }
    let c_1 = 0;
    let c_2 = 0;
    for(let i = 0; i < num; i++){
        c_2 += board[i][num-i-1];
        c_1 += board[i][i];

    }
    if(c_1>max)
        max = c_1;
    if(c_2>max)
        max = c_2;
    console.log(max);
    process.exit();
});
