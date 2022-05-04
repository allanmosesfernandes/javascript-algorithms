

// // function reverseString(str) {
    
// //     //solution 01 
// //     // let word = str.split('');
// //     // console.log(word.reverse().join(' '));

// //     // return word.reverse().join('');

// //     // solution 02 

// //     let reverse = "";
// //     for(alphabet of str) {
// //         reverse = alphabet + reverse;
// //         debugger;
// //         // allan
// //         //  ""= a + ''
// //         //  ""= l + a
// //         //  "" = l + la
// //         //  "" = a + lla
// //         //  "" = n + alla
// //         //  "" =   nalla
// //     }
// //     return reverse;
// // }

// // reverseString('allan');

// //Palindrome
// //plaindrome solutuion 1
// // function palindrome(str) {
// //     let word = str.split('').reverse().join('');
// //     return str === word;
// // }

// //palindrome solutuion 02
// function palindrome(str) {

//     let word = Array.from(str);
//     // Arrow function
//     // every((element) => { /* ... */ } )
//     // every((element, index) => { /* ... */ } )
    
//     // word.every((element, i)=> {
//     //     return element == str[str.length -i -1];
//     // })


// }
// palindrome('abba');


// /////// Reverse Integer

// function reverseInt(number) {
//     let reverseNumber = parseInt(number.toString().split('').reverse().join(''));

//     return reverseNumber * Math.sign(number);

// }

// reverseInt(12123);



///Max Char 
// Given a string return the character that is most commonly used in the string


//- the whole game is to use character maps, take that dumb ass string and convert it into a character map


function maxChar(str) {
    let charMap = {};
    let max = 0;
    let maxChar = "";
    let word = str.toLowerCase().split(' ').join(''); 
    //----------------remove any whitespaces in the entire word---------------------//
    //-----------------loop through string and add characters to charMap{}---------//
    for(alphabet of word) { 

        charMap[alphabet] ? charMap[alphabet]++ : charMap[alphabet] = 1;
        // if(charMap[alphabet]) {
        //     charMap[alphabet]++;
        // }
        // else {
        //     charMap[alphabet] = 1;
        // }
    }
    //check for the highest character

    for(char in charMap) {

        if(charMap[char] > max) {
            max= charMap[char];
            maxChar= char;
        }
    }
    console.log(maxChar);
    console.log(charMap);
    return maxChar;
}

maxChar('Allan Moses Fernandesssssss');

// function maxChar(str) {
//     let charMap = {};
//     let max = 0;
//     let maxChar = '';
    
//     for (let char of str) {
//         // charMap[char] = charMap[char]++ || 1;
//         if(charMap[char]) {
//             charMap[char]++;
//         }

//         else {
//             charMap[char] = 1;
//         }
//     }
//     console.log(charMap);

//     //now we check for the maximum value in the character map
//     //iterate through the object using for IN loop
//     for(let obj in charMap) {
//         if(charMap[obj] > max) {
//             max= charMap[obj];
//             maxChar = obj;
//         }

//     }
//     console.log(`the maximum character is ${maxChar}`);
//     return `the maximum character is ${maxChar}`;
// }


// maxChar('alleeeen');

//FizzBuzz

//write a program that console logs all the numbers from 1 to n, But for mutiples of 3 print fizz,
//and for multiples of 5 print buzz, for numbers that are multiples of both print fizzbuzz

// function fizzbuzz(num) {
//     for(let i=1; i<=num; i++) {
//         if(i%15 === 0) {
//             console.log("fizzbuzz");
//         }
//         else if(i%3 === 0) {
//             console.log("fizz");
//         }
//         else if(i%5 === 0){
//             console.log("buzz");
//         }
//         else{
//             console.log(i);
//         }
//     }
// }

// fizzbuzz(50);

//-----------ARRAY CHUNKING-------------//
// [1,2,3,4,5,5,7,7,78,2] , 3

// very simple if you understand the splice method
// function chunkyBaba(arr, chunkSize) {
//     let chunkyarray = [];
    

//     for(let i =0; i< arr.length; i+=chunkSize) {
//         chunkyarray.push(arr.slice(i,i+chunkSize))
//     }
//     console.log(chunkyarray);
//     // return chunkyarray;
// }


// function chunker(array,chunksize) {
// //    let chunked = [];
// //    for (let element of array) {
// //        const last = chunked[chunked.length - 1];

// //        if ( !last || (last.length === chunksize)){
// //             chunked.push([element]);
// //        }
// //        else {
// //            last.push(element)
// //        }
// //    }

// //    console.log(chunked);
// }