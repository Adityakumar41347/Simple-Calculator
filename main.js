function buttonclicked(id){
    console.log(id);
    document.getElementById("display").innerHTML+=id.innerHTML;
}
function buttonclickedAC(id){
    console.log(id.innerHTML);
    document.getElementById("display").innerHTML="";
    document.getElementById("answer").innerHTML="Ans";
}
let flag=true;
function buttonclickedeql(id){
    
    if(flag){
    let text=document.getElementById("display").innerHTML;
    try{
        let ans=eval(text);
        document.getElementById("answer").innerHTML=ans;
        flag=false;
    }
    catch(err){
        document.getElementById("answer").innerHTML="Error";
    }
   }else{
    document.getElementById("display").innerHTML=document.getElementById("answer").innerHTML
    document.getElementById("answer").innerHTML="Ans";
    flag=true;

   }
    

}
document.addEventListener('keypress',(e)=>
{
    let key=e.key;
    if(!isNaN(key)){
        buttonclicked({innerHTML:key});
    }else if(key==='+'){
        buttonclicked({innerHTML:'+'});
    }else if(key==='-'){
        buttonclicked({innerHTML:'-'}); 
    }else if(key==='*'){
        buttonclicked({innerHTML:'*'});                     
    }else if(key==='/'){
        buttonclicked({innerHTML:'/'});
    }else if(key==='%'){
        buttonclicked({innerHTML:'%'});
    }else if(key==='Enter'){
        buttonclickedeql({innerHTML:'='});
    }else if(key==='.'){
        buttonclicked({innerHTML:'.'});
    }else if(key==='Backspace'){
        let str=document.getElementById("display").innerHTML;
        document.getElementById("display").innerHTML=str.substring(0,str.length-1);
    }else{
        console.log("Invalid Key");
    }
})