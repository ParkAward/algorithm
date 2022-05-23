// delDuplicateWord: inflearn/javascript/section1-17 complete

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let n = 32;
let str = [];
let ll = [];
rl.on("line", (line)=>{
    n--;
    if(n>30)
        n = parseInt(line);
    else{
        str.push(line);
        if(n<=0)
        rl.close();
    }
});
rl.on('close', () =>{
    str=str.filter((v,i) => str.indexOf(v)===i);
    console.log(str);
    process.exit();
});