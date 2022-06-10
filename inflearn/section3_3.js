//extract numbers: inflearn/javascript/section3-3 Complete
const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line',(line)=>{
   let text = line.replace(/\D/g,"");
   console.log(parseInt(text));

//    console.log(str===reStr?"YES":"NO");
   rl.close();
});