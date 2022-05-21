// printMidLetter: inflearn/javascript/section1-1 complete

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line)=>{
    let str = line;
    let n = Math.floor(line.length/2);
    console.log(str.length%2?str.slice(n,n+1):str.slice(n-1,n+1));
    rl.close();
})
rl.on('close', () =>{

    process.exit();
})