
/*
SCRIPTS

script is an html tag that holds JavaScript
<script>
    enter javascript here
</script>
*/

//to write to console use 
console.log("Hello World!")

/*
Data types and Variables

undefined -> variable which has not been assigned yet
null
boolean
string
symbol
number
object


To declare variable
*/


//catches errors
"use strict";

//use throughout whole program
var name = "samuel";
var age = 20;
age = "Twenty";

// Can only be used in scope of where it was declared
let nickName = "Sam";

// Cannot be changed
const pi = 3.141;

// Semicolons are not required but recommended
console.log("works with semicolon");
console.log("works without semicolon")

// to escape symbols

let introduction = "my name is \"samuel\"";
// or use single quotes/backticks
let introductionSingle = 'my name is "samuel"';
let introductionTick = `my name is "samuel"`;

// to access characters of a string use brackets
console.log(introduction[0]);

let array = ["test", "array", 1];

// To append data to the end of an array use push
console.log(array);
array.push("pushed element");
console.log(array);


console.log("popped element: " + array.pop()) // To remove last element use pop
console.log(array);
console.log("shifted element: " + array.shift()) // To remove first element use shift
console.log(array);

// To add an element to the beginning of an array use unshift()

array.unshift("new unshifted element");
console.log(array);

// A function is a method
function testNewConsoleLineFunction(){
    console.log("\n");
};

testNewConsoleLineFunction();
testNewConsoleLineFunction();
testNewConsoleLineFunction();
console.log("test");

var lookup = {
    "one": 1,
    "two": 2,
    "three": 3
};

console.log(lookup["one"]);

//Javascript objects

var me = {
    "name": "samuel",
    "age": 20,
    "nicknames": [
        "sam",
        "sammy",
        "CheeseGrater77"
    ],
    "inventory": {
        "pockets": "phone",
        "body": "clothes"
    }
};

// To access object inside of an object

console.log(me.name);
console.log(me.inventory["pockets"]);


//to access
var myPlants = [
    {
        //key value pairs
        type: "flower",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "tree",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
]

var secondTree = myPlants[1].list[1];
console.log(secondTree);

const MATH_CONSTANTS= {
    PI: 3.14
};

//makes all fields in an object unchangable
Object.freeze(MATH_CONSTANTS);

//when using anonymous function you can use arrows to shorten

var magic = function() {
    return new Date();
};

var magic = () => {
    return new Date();
};

const magic = () => new Date();


// how to convert normal function to arrow function
var myConcat = function(arr1, arr2){
    return arr1.concat(arr2);
}

const myConcat = (arr1, arr2) => arr1.concat(arr2);

//map, filter, reduce work well with arrow functions
//when one function takes another function as a para mis good time for arrow function




// you can use destructuring to take specific values from an object

const LOCAL_FORECAST = {
    today: 12, 
    tomorrow: 15
};

function getMaxTempTomorrow(forecast) {
    const { tomorrow: tmrHigh } = forecast;

    return tmrHigh;
}


// deconstruction to with nested objects

const LOCAL_FORE = {
    today: { min: 12, max: 21},
    tomorrow: {min: 14, max: 44}
};

function getMaxOfTmrow(forecast){
    "use strict";

    const {tomorrow : {max : tmrMax }} = forecast

    return tmrMax;
}


//temperal literals

const person = {
    name: "samuel",
    age: 20
};

const greeting = `hello ${person.name}, you are ${person.age} years old`;