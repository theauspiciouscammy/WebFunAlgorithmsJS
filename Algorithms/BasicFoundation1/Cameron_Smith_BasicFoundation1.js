// function counter(){
//     var newArray=[]
//     for(var i=1; i<=255; i++){
//         newArray.push(i);
//     }
//     console.log(newArray);
//     return(newArray)
// }
// counter()

// function evens(){
//     var sum=0;
//     for (var i=0; i <= 1000; i++){
//         if ((i % 2) === 0){
//             console.log(i)
//             sum += i;
//         }console.log(sum);
//     }
// }
// evens()

// function odds(){
//     var sum=0;
//     for (var i=0; i <= 1000; i++){
//         if ((i % 2) != 0){
//             sum += i;
//             console.log(sum);
//         }
//     }
// }
// odds()

// function iterate(){
//     var sum= 0
//     var myArr=[5, 10, 15];
//     for( var i=0; i < myArr.length; i++){
//         console.log(myArr[i])
//         sum+= myArr[i];
//     }console.log("Equals:", sum)
// }
// iterate()

// function max(myArr){
//     var max= [0]
//     for( var i= 0; i < myArr.length; i++){
//         if(myArr[i]> max)
//         max = myArr[i];
//     }console.log(max)
// }
// var myArr=[5, 15, 10, 12, 23, 14];
// max(myArr)

// function min(myArr){
//     var min= myArr[0];
//     for( var i= 1; i < myArr.length; i++){
//         if(myArr[i]< min)
//         min = myArr[i];
//     }console.log(min)
// }
// var myArr=[5, 15, 10, 12, 2, 14];
// min(myArr)

// function avg(myArr){
//     var avg=0
//     var sum= 0
//     for( var i=0; i < myArr.length; i++){
//         sum+= myArr[i];
//     }
//     var avg= sum/myArr.length;
//     console.log("Average is:", avg)
// }
// var myArr=[5, 15, 10, 12, 23];
// avg(myArr)

// function oddsArr(){
//     var newArr= [];
//     for (var i= 1; i <= 50; i++){
//         if ((i % 2) != 0)
//         newArr.push(i);
//     }
//         console.log(newArr);
// }
// oddsArr()

// function largerthan(myArr, y){
//     var numGreater=0
//     for(i= 0; i< myArr.length; i++){
//         if (myArr[i]> y)
//         numGreater++;
//     }console.log(numGreater)
// }
// var y= 3;
// var myArr= [1,4,2,6,3];
// largerthan(myArr, y)

// function squares(myArr){
//     var sq = 0;
//     var y= 0;
//     var newArr= []
//     for (i= 0; i<myArr.length; i++){
//         if (y= myArr[i])
//         sq= y*y
//         newArr[i]= sq;
//     }console.log(newArr)
// }
// var myArr= [3,6,4,20];
// squares(myArr)

// function negatives(array){
//     var zero= 0;
//     for(x= 0; x< array.length; x++){
//         if (array[x]<0)
//         array[x]= zero;
//     }console.log(array)
// }
// var array= [1, -3, 12, -6];
// negatives(array)

// function maxminavg(myArr){
//     var max= [0];
//     var min= myArr[0];
//     var sum= 0;
//     for( var x=0; x < myArr.length; x++){
//         myArr[x]> max
//         max= myArr[x];
//         sum+= myArr[x];
//     }
//     for( var i=1; i < myArr.length; i++){
//         if(myArr[i]< min)
//         // console.log(myArr[i])
//         min= myArr[i];
//         // console.log(min)
//     }
//     var avg= sum/myArr.length
//     console.log("Maximum is:", max);
//     console.log("Minimum is:", min);
//     console.log("Average is:", avg);
//     var maxminavg= [max, min, avg];
//     console.log(maxminavg)
// }

// var myArr= [5, 15, 10, 3, 23];
// maxminavg(myArr)

function swap(array){
    var temp= array[0];
    array[0]= array[array.length-1];
    array[array.length-1] = temp;
    console.log(array)
}

var array= [1, 2, 4, 7, 3];
swap(array)

// function string(array){
//     var y= "Dojo";
//     for(x= 0; x< array.length; x++){
//         if (array[x]<0)
//         array[x]= y;
//     }console.log(array)
// }
// var array= [1, -3, 12, -6];
// string(array)
