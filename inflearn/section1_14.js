// bestLongString: inflearn/javascript/section1-14 complete

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let n = 32;
let text = '';
let max= 0;
rl.on("line", (line)=>{
    if(n-->30)
        n = parseInt(line);
    else if(n===0)
        rl.close();
    else{
        if(max < line.length){
            max = line.length;
            text = line;            
        }
    }
    
})
rl.on('close', () =>{
    console.log(text);
    process.exit();
})