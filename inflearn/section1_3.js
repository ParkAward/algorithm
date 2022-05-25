// numofpencils: inflearn/javascript/section1-3 complete


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line)=>{
    let num = parseInt(line);
    let result = parseInt(num%12?num/12+1:num/12);
    console.log(result);
    rl.close();
})
rl.on('close', () =>{

    process.exit();
})