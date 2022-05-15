// minOfNums: inflearn/javascript/section1-1 complete
function min(a,b,c){
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    if(a>b){
        if(a>c){
            return a;
        }else{
            if(c>b)return c;
            else return b;
        }
    }else{
        if(b>c)return b;
        else{
            if(c>a)return c;
            else a;
        }
    }
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line)=>{
    let str = line.split(' ');
    console.log(min(str[0],str[1],str[2]));
    rl.close();
})
rl.on('close', () =>{

    process.exit();
})