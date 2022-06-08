//palindromeString: inflearn/javascript/section3-1 Complete
const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line',(line)=>{
   let str =  line.toUpperCase()
   let reStr = line.toUpperCase().split('').reverse().join('');
//    console.log(str,reStr);
   console.log(str===reStr?"YES":"NO");
   rl.close();
});