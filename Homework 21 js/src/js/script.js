

// task 1 ------------------------------------------

function findNumMean(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    let count = arr.length;
    let average = result / count;
    return average;
}

let numbers = [1,2,3,4,5,6,7,8,9];

console.log("Average number:" , findNumMean(numbers));

//---------------------------------------------------

// task 2 -------------------------------------------

function reversWord(string) {
    let reversWord = "";
    for(let i = string.length -1; i >= 0; i--){
        reversWord += string[i];
    }
    return reversWord;
}

let reversText = reversWord("Mirze");
console.log("Revers Word:",reversText);

//-----------------------------------------------------


// task 3 ----------------------------------------------

function faktorialNum(x) {
    if (x === 0 || x === 1) {
        return 1;
    } else {
        return x * faktorialNum(x - 1);
    }
}

let num = 6;
console.log(num +" "+ "Factorial number:", faktorialNum(num));

//----------------------------------------------------------------


// task 4 --------------------------------------------------------

function longWord(word) {

    let words = word.split(" ");
    let longLength = 0;
    let longWord = 0;
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longWord) {
            longLength = i;
            longWord = words[i].length;
        }
    }
   
    return words[longLength];
}

let word = "apple, strawbery";
console.log("Long word:", longWord(word));

//-----------------------------------------------------------------
