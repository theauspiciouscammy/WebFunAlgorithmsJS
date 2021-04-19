
function Sigma(num){
    var sum = 0;
    for(var i = 0; i <= num; i++){
        sum += i;
    }
    return sum;
}
var sigmaNum = 3
//console.log(Sigma(sigmaNum));

function factorial(num){
    var fact = 1;
    for(var i = 1; i <= num; i++){
        fact *= i;
    }
    return fact;
}
var factNum = 3;
//console.log(factorial(factNum));

function forFibonacci(input){
    console.log("Fibonacci("+input+")");
    var num1 = 0;
    var num2 = 1;
    var sum;
    console.log("num1: "+num1+"/ num2: "+num2);
    for(var i = 1; i < input; i++){
        sum = num1 + num2;
        console.log("sum: "+sum);
        num1 = num2;
        num2 = sum;
        console.log("num1: "+num1+"/ num2: "+num2);
    }
    return num2
}
var fibNum = 0;
//console.log(forFibonacci(fibNum));

function whileFibonacci(input){
    if(input == 1 || input == 0){
        return 0;
    }
    if(input == 2){
        return 1;
    }
    var num1 = 0;
    var num2 = 1;
    var sum;
    var i = 1;
    while(i < input){
        sum = num1 + num2;
        console.log("sum: "+sum);
        num1 = num2;
        num2 = sum;
        console.log("num1: "+num1+"/ num2: "+num2);
        i += 1;
    }
    return num2;
}
//console.log(whileFibonacci(fibNum));

function recursiveFibonacci(num){
    if(num < 2){
        return 1;
    }
    return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}
//console.log(recursiveFibonacci(fibNum)); //this one works

function second2Last(array){
    if(array.length < 2){
        return null;
    }
    return array[array.length-2];
}
var arrayS2L = [1,2,3,4,5,6];
//console.log(second2Last(arrayS2L));

function nth2Last(input, index){
    if(index > input.length){
        return null;
    }
    return input[input.length-index];

}
var myArray = [1,"Dojo",3,false,5,6];
var index = 5;
//console.log(nth2Last(myArray, index));

function secondGreatest(arr){
    if(arr.length < 2){
        return null;
    }
    for(var i = 0; i < arr.length; i++){
        var min = i;
        for(var x = i+1; x < arr.length; x++){
            if(arr[min] > arr[x]){
                min = x;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    var almostMax = arr[arr.length-2];
    return almostMax;
}
var myArr = [57,24,35,-3,2,46];
//console.log(secondGreatest(myArr))

function doubled(input){
    var newArray = [];
    for(var i = 0; i < input.length; i++){
        newArray.push(input[i], input[i]);
    }
    return newArray;
}
var array = [4, "ulysses", 42, false]
//console.log(doubled(array));