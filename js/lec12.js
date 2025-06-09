// error handling
// handling disruption occurring during the flow of execution

// compile error : during parse
    // console.log(1; this is syntax error


// run-time error : during execution
    // console.log(x); runtime error : reference error

try {
    // prob of getting an error
    console.log(x);
} catch (error) {
    // defining error : retry, fallback, logging, custom
    console.log("found error", error);
} finally{
    console.log("works every time!");
}

// custom
try {
    console.log(x);
} catch (error) {
    throw new Error("fix the reference error!");
}

let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid JSON");
}