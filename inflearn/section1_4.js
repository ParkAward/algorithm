// Sum output from 1 to N: inflearn/javascript/section1-4 complete

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line)=>{
    let num = parseInt(line);
    let result = 0;
    for(let i = 1; i <= num; i++)
        result += i;
    console.log(result);
    rl.close();
})
rl.on('close', () =>{

    process.exit();
})