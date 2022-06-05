//getRank: inflearn/javascript/section2-5 Complete
const { stdin, stdout } = require('process');
let readline = require('readline');
let rl = readline.createInterface({
    input:stdin,
    output:stdout,
});
let inputCnt = 0;

let num = 0;

let board = [];

let result = [];
rl.on('line',(line)=>{
    if(inputCnt++ === 0)
        num = parseInt(line);
    else{
        board = line.split(' ').map(e => parseInt(e));
        let rank = [...board].sort((a,b)=>b-a);

        for(let i = 0; i < num; i++){
            result.push(board.indexOf(rank[i])+1);
        }

        // console.log(board,rank,result);
        console.log(result.join(' '));
        rl.close();
    }


});