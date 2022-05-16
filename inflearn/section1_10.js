// findLetter: inflearn/javascript/section1-10 complete

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let cnt =0;
let str = '';
rl.on("line", (line)=>{
    if(cnt++ ===0)
        str = line;
    else{
        let t = [...str.matchAll(line)];
        console.log(t.length);
       rl.close();

    }
})
rl.on('close', () =>{

    process.exit();
})