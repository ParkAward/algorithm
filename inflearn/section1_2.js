// determinning tiangles: inflearn/javascript/section1-2 complete

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line)=>{
    let sum = 0;
    let str = line.split(' ').map(el => parseInt(el));
    str.map(i => sum+=i);
    let max = Math.max(...str);
    console.log(sum>=max*2?"YES":"NO");
    rl.close();
})
rl.on('close', () =>{

    process.exit();
})