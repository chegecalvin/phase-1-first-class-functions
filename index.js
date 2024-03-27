function receivesAFunction(greeting){
    greeting()
}
function returnsANamedFunction(){
    return function salute(){
        console.log(salute)
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log()
    }
}