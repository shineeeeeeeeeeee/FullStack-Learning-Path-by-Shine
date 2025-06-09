// classes and default parameters in func

// class is a blue print whose instance is called as object; a logic that defines attributes is called class and when you initiate it it's called object.
// class has properties and functionality

class human{
    // properties
    age = 13;
    wt = 13; // public
    #ht = 13; // private

    // behavior
    walking(){
        console.log("i am walking", this.#ht);
    }
    running(){
        console.log("i am running");
    }
    // use getters-setters to get private variables
    get ht(){
        return this.#ht;
    }
    set height(val){
        this.#ht = val;
    }

    // constructor
    house;
    constructor(value){
        this.house = value;
        console.log("Your house is:", this.house);
    }
}
let obj = new human(103);
obj.walking();
console.log(obj.age);


// default parameters
function MyName(a = "shine") {
    return a
}

function Dependant(a = MyName(), b = a.toUpperCase()) {
    console.log("My name is:", a, b);
}
Dependant();

// function MyName(a = {name: "shine", wt:90}) {
//     console.log("My name is:", a);
// } , arrays and much more can be inserted
