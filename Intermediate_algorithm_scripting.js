/*===================================
      Roman Numeral Converter
===================================*/


function convertToRoman(num) {
  
  var units = [1,2,3,4,5,6,7,8,9],
  roman_units = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  roman_decades = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  roman_hundred = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  roman_thousand = ["M","MM", "MMM", "MMMM", "MMMMM", "MMMMMM", "MMMMMMM", "MMMMMMMM", "MMMMMMMMM", "MMMMMMMMMM"];
  
  
  var arr_num = num.toString().split("");
  var c = arr_num.length;
  var result = arr_num;
 
  for (var i = 0; i < c; i++){
    
    var numeral=arr_num[i],
    position = units.indexOf(parseInt(numeral));
    
    if((c-i)>=4){
      result.splice(i, 1, roman_thousand[position]);
      
    }
    
    switch(c-i){
      case 3:
        result.splice(i, 1, roman_hundred[position]);
        break;
      case 2:
        result.splice(i, 1, roman_decades[position]);
        break;
      case 1:
        result.splice(i, 1, roman_units[position]);
        break;
    }
  }
  
  result = result.join("");
  
 return result;
}

convertToRoman(36);





/*==========================
Convert HTML Entities
==========================*/


function convertHTML(str) {
  var forbiddenChars = ["&","<",">","\"","'"];
  var entities = ["&amp;","&lt;","&gt;","&quot;","&apos;"];
  
  for (var i=0; i<str.length; i++){
    var pos = forbiddenChars.indexOf(str.charAt(i));
    if ( pos !== -1){
      str = str.replace(str.charAt(i), entities[pos]);
    }
  }
  
  return str;
}

convertHTML("Dolce & Gabbana");




/*============================
Sorted Union
============================*/


function uniteUnique(arr) {
  var newArray = [];
  var args = Array.from(arguments);
  
  args.forEach(function(element){
    //var elem = Array.from(element);
    
    for(var i=0; i<element.length; i++){
      
      if (newArray.indexOf(element[i]) === -1){
        
        newArray.push(element[i]);
      }
    }
  });
  
 
  return newArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);




/*===========================
Spinal Tap
===========================*/


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  // replacing spaces and underscores by dashes
  str = str.replace(/[\s_]/g, "-");
  
  // looping trough the string to replace Uppercase chars
  for (var i=0; i<str.length; i++){
    
    var pos = str.charAt(i),
        beforePos = str.charAt(i-1); // this var will be used to test if we have for example spinalTap and replace it with spinal-tap
    
    if ( (/[A-Z]/).test(pos) ){
      str = str.replace(pos, pos.toLowerCase()); // ok, we replace uppercase by lowercase
      
      if ( (/[a-zA-Z]/).test(beforePos) ){ // if an uppercase letter is preceded by a letter instead of a space or an underscore, we had a dash
        var arr = str.split("");
        arr[i-1] = arr[i-1]+"-";
        str = arr.join(""); // let me know if there is a better way to do this
        
      
      }
    }
    
    
    
  }
  return str;
}

spinalCase('thisIsSpinalTap');




/*===============================
Sum All Odd Fibonacci
===============================*/



function sumFibs(num) {
  
      var odd_arr = [],
      sum = 0;
  
  // fibonacci
  var arr = fibonacci(num);
  
  // pushing the odd values
  arr.forEach(function(value){
    if( value % 2 ){
      odd_arr.push(value);
    }
  });
  
  sum = odd_arr.reduce(function(previous, current){
    return previous + current;
  });
  
  return sum;
  
}

function fibonacci(num){
  var arr = [1,1];
  
  for (var i = 0; (arr[i]+arr[i+1]) <= num; i++){
    arr[i+2] = arr[i+1] + arr[i];
  }
  console.log(arr);
  return arr;
}

sumFibs(4);




/*===================
Sum all Primes
===================*/


function sumPrimes(num) {
  var not_primes =[],
      primes = [];
  
  for (var i = 2; i<= num; i++){
    
    for (var j =1; j<=i; j++){
      if( i%j ===0 && i!==j && j!==1 && not_primes.indexOf(i) === -1){
        not_primes.push(i);
      }
    }
    
    if( not_primes.indexOf(i) === -1 ){
      primes.push(i);
    }
  }
  
  var result = primes.reduce(function(prev,curr){
    return prev+curr;
  });
  
  return result;
}

sumPrimes(977);





/*=======================
Smallest Common Multiple
=======================*/
// for this bonfire, I had to desactivate the protection against infinite loops. The calculation takes a little bit of time.

// noprotect

function smallestCommons(arr) {
  // sort array
  arr.sort(function(a,b){
    return a-b;
  });
  
  var full_arr=[], //this will contain all the integers to test
      scm = 0, // this is the smallest common multiple our function will return
      condition = false; //we will use this condition to get out of our while loop
  
  // defining all the integers to test
  for (var i = arr[0]; i<=arr[1];i++){
    full_arr.push(i);
  }
  
  // while we don't have a result for scm, we increase it and test again
  while(!condition){
    scm++;
    
    // the .every method will return true if all the elements in the array pass the test
    condition = full_arr.every( function(element){
      return scm % element === 0;
    } );                   
 }
  
  return scm;
}


smallestCommons([1,5]);




/*===================
Finder Keeper
===================*/


function findElement(arr, func) {
  var num = 0;
  
  var newArray = arr.filter(func);
  num = newArray[0];
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });




/*===================
Drop it !
===================*/



function dropElements(arr, func) {
  // Drop them elements.
  // we set this to check if the arr is untouched
  var newArr = arr;
  
  // iterating trough arr
  for (var i =0; i<arr.length; i++){
    if(func(arr[i])){ //if func return true, then we can slice arr, beginning at the current index and ending at the last item
      arr=arr.slice(i);
      i=arr.length; // and we set i so that we can end the loop immediatly
    }
  }
  
  // we want our function to return [] if arr is untouched
  if (arr === newArr){
    return [];
  }
  
  return arr;
}


dropElements([1, 2, 3, 4], function(n) {return n > 5;});





/*===============
Steamroller
===============*/

 
function steamrollArray(arr) {
  // I'm a steamroller, baby
  
  //this array will get the flattened items
  var newArray = [];
  
  // the recursive function
  var flatten = function(arg){
      
    // if the item is an array, we apply the recursive function
    if(Array.isArray(arg)){
      arg.forEach(function(a){
        flatten(a);
      });
      
    // if it's not, we just push it to our final array
    }else{
      newArray.push(arg);
    }
  };
  
  // calling the recursive function on each item of the initial array
  arr.forEach(flatten);
  
  return newArray;
}

steamrollArray([1, [2], [3, [[4]]]]);





/*=======================
Binary Agent
=======================*/


function binaryAgent(str) {
  var arr = str.split(' ');
  
  arr.forEach(function(i,index){
    arr[index] = String.fromCharCode(parseInt(i,2));
  });
    
  return arr.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");





/*=================
Everything be true
=================*/


function truthCheck(collection, pre) {
  // Is everyone being true?
  
  return collection.every(function(obj){
    
    if( !obj[pre] ){
      return false ;
    }else{
      return true ;
    }
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");




/*=================
Arguments Optionnal
=================*/


function addTogether() {
  
  for (var i = 0; i<arguments.length;i++){
    if(typeof arguments[i] !== "number"){
      return undefined;
    }
  }
  
  if( arguments.length === 2 ){
    
    
    return arguments[0]+arguments[1];
    
  }else{
    
    var args = Array.from(arguments);
    
    return function SumTwoAnd (arg){
      if (typeof arg === "number" && typeof args[0] === "number"){
        return arg+args[0];
      }else{
        return undefined;
      }
    };
    
  }
}

addTogether(2)(3);

