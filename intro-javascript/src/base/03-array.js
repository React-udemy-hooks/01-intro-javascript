
console.log("Hola Mundo")

const arr = new Array();
console.log(arr)

const arr2 =[1]
arr2.push(2)
console.log(arr2)

let arr3 = arr2
arr3.push(5)
console.log(arr2)
console.log(arr3)

let arr4 = [arr2, 5]
console.log(arr2)
console.log(arr4)

let arr5 = [...arr2, 5]
console.log(arr2)
console.log(arr5)


let arr6 = arr5.map(function(number){
    return number * 2
});
console.log(arr6)