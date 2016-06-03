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
