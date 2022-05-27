// getAminimum: inflearn/javascript/section1-5 complete

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line)=>{
    let str = line.split(' ').map(e => parseInt(e));
    let min = Number.MAX_SAFE_INTEGER;
    min = Math.min(...str);
    for(let i of str){
        if(min > i)min = i;
    }
    console.log(min);

    rl.close();
})
rl.on('close', () =>{

    process.exit();
})