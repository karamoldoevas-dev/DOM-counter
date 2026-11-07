const btns=document.querySelectorAll('button')
const num=document.querySelector('#num')

let startNum=0
btns[0].onclick=()=>{
    console.log("works");
    if(startNum>=0){
        ++startNum
        num.innerHTML=startNum
        num.style.color='green'
    }
    
}    

btns[1].onclick=()=>{
    console.log("works");
    startNum=0
    num.innerHTML=startNum
    
}
btns[2].onclick=()=>{
    console.log("works");
    if(startNum>0){
        --startNum
        num.innerHTML=startNum
        num.style.color='red'

    }
    
}