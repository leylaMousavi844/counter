let count=0;
document.getElementsByClassName("counter")[0].innerText=count;
const increase=()=>{
    count +=1;
    document.getElementsByClassName("counter")[0].innerText=count;
}
const reset=()=>{
    count =0;
    document.getElementsByClassName("counter")[0].innerText=count;
}
const decrease=(e)=>{
    if(count !=0){
        count -=1;
    }

    document.getElementsByClassName("counter")[0].innerText=count;
}
