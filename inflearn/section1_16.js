// RemoveDuplicateChar: inflearn/javascript/section1-16 complete

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line)=>{
    let str = line.split('');
    let set = new Set(str);
    str = [...set];
    console.log(str.join(''));
    rl.close();
})
rl.on('close', () =>{

    process.exit();
})