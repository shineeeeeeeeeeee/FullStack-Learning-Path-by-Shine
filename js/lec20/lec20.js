// Closure: gives a function access to outer source or a function being bind by the required data
// or a combination of function and it's lexical scope
// lexical scope or surrounding scope
var name = "shinesuri";
function outer(){
    var name = "shine"; // block scope
    function inner(name){
        var name = "suri";
        console.log(name);
    }
    inner();
}
outer();