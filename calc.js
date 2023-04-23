function displayNum(n){
    
    ip1.value+=n

}

function allclear(){
    ip1.value=""
}


function evalexprsn(){
    // n=ip1.value
    // out=eval(n)
    // ip1.value=out
    ip1.value=eval(ip1.value)
}

function backSpace(){
    ip1.value=ip1.value.slice(0,-1)
    
}

