// findCapitalLetters: inflearn/javascript/section1-11 complete

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line)=>{
    let sum =0;
    for(let i = 0; i <line.length; i++)
        if(line.charCodeAt(i)<97)
            sum++;
    console.log(sum);
    rl.close();
})
rl.on('close', () =>{

    process.exit();
})