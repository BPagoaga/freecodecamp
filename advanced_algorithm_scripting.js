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





/*=====================
Exact Change
=====================*/



function checkCashRegister(price, cash, cid) {
  
  // Here is your change, ma'am.
  var change = parseFloat( (cash-price).toFixed(2) );
  var enoughChange = parseFloat( howMuchMoney(cid) );
  var currencyValue = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.10,
    "NICKEL": 0.05,
    "PENNY": 0.01
  };
  var result = [];
  
  cid.reverse();
  
  //return change;
  // if not enough cash in drawer
  if( enoughChange < change ){
    return "Insufficient Funds";
  }else if( enoughChange === change ){
    return "Closed";
  }else{
    var elem = Object.keys(currencyValue);
      
      for(var i=0; i<elem.length; i++){
        //headache incoming
        var remainder = currencyValue[elem[i]] * Math.floor(change/currencyValue[elem[i]]);
        
        var currencyChange = remainder > cid[i][1] ? cid[i][1] : remainder;
        console.log(change);
        if( change > currencyValue[elem[i]] ){
          result.push( [elem[i], currencyChange] );
          change -= currencyChange;
          change = parseFloat(change.toFixed(2));
        }
      }
    
    return parseFloat( howMuchMoney(result) ) === parseFloat( (cash-price).toFixed(2) ) ? result : "Insufficient Funds" ;
    
  }
}


function howMuchMoney(cid){
  var result = cid.reduce(function(a, b){
    return a+ b[1];
  }, 0).toFixed(2);
  
  return result;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
