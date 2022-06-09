//Valid Palindrome: inflearn/javascript/section3-2 Complete
const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line',(line)=>{
   let str =  line.toUpperCase();
   let text = str.replace(/[^A-Z]||\D /gi,"");
   let retext = text.split('').reverse().join('');
   console.log(text===retext?"YES":"NO");
   rl.close();
});