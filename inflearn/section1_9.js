// AtoShap: inflearn/javascript/section1-9 complete

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line)=>{
    let str = line.replaceAll('A',"#");
    console.log(str);
    rl.close();
})
rl.on('close', () =>{

    process.exit();
})