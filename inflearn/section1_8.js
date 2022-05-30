// Seven Dwarfs: inflearn/javascript/section1-8 FAIL

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line)=>{
    let nums = line.split(' ').map(e=>parseInt(e));
    const result = dwarf(nums);
    console.log(result);
    rl.close();
})
rl.on('close', () =>{

    process.exit();
})
const dwarf = (nums) =>{
    let list = []
    function dfs(nums,sum, depth){
        // console.log(list,sum);
        if(sum>100){
            list.pop();
            return;
        }
         if(sum === 100){
            console.log(list,sum);
            return list;
        }
    
        for(let i = depth; i < nums.length;i++){
            list.push(nums[i]);
            dfs(nums,sum+nums[i],i+1);
        }
        list.pop();
        return;    
        
        
    }
    
    return dfs(nums,0,0);
}