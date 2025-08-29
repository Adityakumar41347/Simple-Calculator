function buttonclicked(id){
    console.log(id.innerHTML);
    document.getElementById("display").innerHTML+=id.innerHTML;
}
function buttonclickedAC(id){
    console.log(id.innerHTML);
    document.getElementById("display").innerHTML="";
    document.getElementById("answer").innerHTML="Ans";
}
function buttonclickedeql(id){
    console.log(id.innerHTML);
    let text=document.getElementById("display").innerHTML;
    try{let ans=eval(text);
        document.getElementById("answer").innerHTML=ans;
    }
    catch(err){
        document.getElementById("answer").innerHTML="Error";
    }
    

}