/*===========================
Validate US Phone Numbers
===========================*/



function telephoneCheck(str) {
  // Good luck!
  // numbers can't start with a dash, this could be included in the regexp but complicate it way too much imo
  if( (/^-/).test(str) ){
    return false;
  }
  // clearing whitespaces and dashes for better testing
  str = str.replace(/[\s-]/gi, "");
  
  // the number 1 can be match 0 or 1 time (country code)
  // the area code is 555 or (555)
  // and finally we have 7 digits
  if( (/^1?(\d{3}|\(\d{3}\))\d{7}$/).test(str) ){
    return true;
  }else{
    return false;
  }
  
}

telephoneCheck("155-555-5555");





/*==========================
Symetric Difference
==========================*/


function sym(args) {
  
  args = Array.from(arguments);
  for(var k=0;k<args.length; k++){
    args[k] = cleanArray(args[k]);
  }
  
  var arr = args.reduce(function(a,b){
    return a.concat(b);
  });
  
  
  
  var counts = {};

  for(var i = 0; i< arr.length; i++) {
      var num = arr[i];
      counts[num] = counts[num] ? counts[num]+1 : 1;
  }
  
  arr = [];
  
  for(var prop in counts){
    if(args.length<=2 && counts[prop] === 1){
      arr.push(parseInt(prop));
    }else if(args.length>2 && (counts[prop] === 1 || counts[prop] === 3)){
      arr.push(parseInt(prop));
    }
  }
  
  return arr;
}

//cleanArray removes all duplicated elements
function cleanArray(array) {
  var i, j, len = array.length, out = [], obj = {};
  for (i = 0; i < len; i++) {
    obj[array[i]] = 0;
  }
  for (j in obj) {
    out.push(parseInt(j));
  }
  return out;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);

