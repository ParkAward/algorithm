//printBestOfNum: inflearn/javascript/section2-1 Complete
const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let n = 0;
let a = 0;
let str;
rl.on('line',(line)=>{
    if(n++==1){
        str = line;
        rl.close();
    }
    a = parseInt(line);
});

rl.on('close',()=>{
    str = str.split(' ').map(e=>parseInt(e)).filter(e => e>a);
    console.log(str.join(' '));
    process.exit();
});