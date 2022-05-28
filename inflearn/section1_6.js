// OddNumber: inflearn/javascript/section1-6 complete

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line)=>{
    let str = line.split(' ').map(e=>parseInt(e)).filter(i=>i%2);
    // console.log(str.reduce((p,c) =>p+c));
    // console.log(Math.min(...str))
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for(let i of str)
    {   if(min > i)min = i;
        sum +=i;
    }
    console.log(sum);
    console.log(min);

    rl.close();
})
rl.on('close', () =>{

    process.exit();
})