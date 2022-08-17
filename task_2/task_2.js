// Guess what answers you would get if you ran this in the Javascript Console.
//Once you have an answer to the questions then check them by copying them and running it in the console yourself line by line 


//Evaluate the below:
/* something! */ //
3 + "65" >> 365 // concatenation
7 - "3" >> 4 // number first, minus has only one function
15 % 5 >> 0
5 % 15 >> 5 // 15 cant divide 5, so computer gives the first no as the remainder.
"Java" + "Script" >> JavaScript
"Java" - "Script" >> NaN
" " + " " >> '  '
" " + 0 >> '0'
true + true >> 2 // true has value 1, false has value 0 as binary
true + false >> 1 // 
false + true >> 1 // 
false - true >> -1 // 
3 - 4 >> -1


//Evaluate the below comparisons:
4 >= 2 >> true
6 === 2 >> false
3 <= 1 >> false
1 != 1 >> false
"A" > "B" >> false // 
"B" < "C" >> true // 
"a" > "A" >> true // alphabetic order, has binary values
"b" < "A" >> false
true === false >> false
true != true >> false


// Make the string: 
// "Go To Helsinki Business College," they said. "It'll Will Be "Fun"," they said.
// by using the + sign:

let newString = '"Go to Helsinki Business College," ' + 'they said.'+'"It will be '+ '"Fun",' + 'they said.'
console.log(newString);

// template string
let string = `"Go to Helsinki Business College," they said. "It'll be "Fun"," they said.`

