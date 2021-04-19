'use strict';
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

function fibonacci(input){
    var fib = [0,1]
    for(var i = 0; i < fib[input]; i++){

    }

}
var fibNum = 0;
//console.log(fibonacci(fibNum));

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