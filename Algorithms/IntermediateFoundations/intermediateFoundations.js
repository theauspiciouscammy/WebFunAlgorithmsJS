// function Sigma(num){
//     var sum = 0
//     for( var i = 0; i <= num; i++){
//         sum += i
//     }console.log(sum)
// }
// var num = 3
// Sigma(num)

// function factorial(num){
//     var fact = 1
//     for( var i = 1; i <= num; i++){
//         fact = fact * i
//     }console.log(fact)
// }
// var num = 5
// factorial(num)

// function fibonacci(){


// }



// fibonacci()

// function second2Last(x){
//     if(x.length < 2){
//         return(null)
//     }
//     else{
//         return(x[x.length-2])
//     }
// }

// var x = [1,2,3,4,5,6]
// console.log(second2Last(x))

// function nth2Last(x, a){
//     if(y = x[x.length-a]){
//         // return(y);
//         console.log(y);
//     }
//     else{
//         // return(null)
//         console.log(y);
//     }
// }

// var x = [1,"Dojo",3,false,5,6]
// console.log(nth2Last(x, 5)

// function nth2Last(x, a){
//     if(a < x.length){
//         return(x[x.length - a])
//     }
//     else{
//         return(null)
//     }
// }

// var x = [1,"Dojo",3,false,5,6,4,5]
// console.log(nth2Last(x, 5))

// function secondGreatest(myArr){
//     if(myArr.length < 2){
//         return(null)
//     }
//     var max = myArr[0]
//     var max2 = myArr[0]
//     for( var i= 0; i < myArr.length; i++){
//         if(myArr[i]> max){
//             max2 = max
//             max = myArr[i]
//         }
//         else if(myArr[i] > max2){
//             max2 = myArr[i]
//         }
//     }return(max2)
// }
// var myArr = [67, 34, 2, 5, 16, 3, 4];
// console.log(secondGreatest(myArr))

function doubled(array){
    var newarray = []
    for(i = 0; i < array.length; i++){
        newarray.push(array[i])
        newarray.push(array[i])
    }console.log(newarray)

}
var array = [4, "ulysses", 42, false]
doubled(array)