challenge.fibonacci=function(n){
    if(n === 0){
        return 0;
    }
    else if(n ===1){
        return 1;
    }
    else{
        return (challenge.fibonacci(n-1))+(challenge.fibonacci(n-2));
    }
}