// 10-day_rotation_system: inflearn/javascript/section1-7 complete

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let piv = -1;

rl.on("line", (line)=>{
    
    if(piv !== -1){
          let str = line.split(' ').map(e => parseInt(e)).filter(el => piv%10?(el%10)%piv===0:el%10===0);
        console.log(str.length);
        rl.close();
    }else{
        piv = parseInt(line);
    }
    
    
})
rl.on('close', () =>{
    
    process.exit();
})