let boxs=document.querySelectorAll(".box")
let resetBtn=document.querySelectorAll("#Reset")
let newgameBtn=document.querySelectorAll("#new")
let msg_container=document.querySelectorAll(".msg_container")
let msg=document.querySelectorAll(".msg")

let turnO=true

const arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
const resetgame=()=>{
  turnO  = true;
  enableBoxes();
  msg_container.classList.add("h");
}
boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box click");
        if(turnO===true){
            box.innerText="O";
            turnO=false
        }
        else{
            box.innerText="X" 
             turnO=true
        }
        box.disabled=true

    })
})
const disableBoxes=()=>{
    for(let box of boxs){
        box.disabled=true
    }
}
const enableBoxes=()=>{
    for(let box of boxs){
        box.disabled=false
        box.innerText=""
    }
}

const showWiner=(winner)=>{
msg.innerText="congratulations winner is ${winner}"
msg_container.classList.remove("h")
disableBoxes();
}


const win=()=>{
    for( let pattern of arr){
        // console.log(pattern[0],pattern[1],pattern[2] );
        // console.log(
        //     boxs[pattern[0]].innerText,
        //     boxs[pattern[1]].innerText,
        //     boxs[pattern[2]].innerText,
        // );
            let posival1=boxs[pattern[0]].innerText;
            let posival2=boxs[pattern[1]].innerText;
            let posival3=boxs[pattern[2]].innerText;
          if(posival1!=""&& posival2!=""&& posival3!=""){
            if(posival1===posival2&&posival2===posival3){
                console.log("winner");
                showWiner(posival1)
            }
          }  

    }
}
newgameBtn.addEventListener("click",resetgame)
resetBtn.addEventListener("click",resetgame)