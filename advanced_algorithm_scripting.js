/*===========================
Validate US Phone Numbers
===========================*/



function telephoneCheck(str) {
  // Good luck!
  
  //case 1 : a country code is provided
  // we check that it matches the country, then remove it
  // cases : "1 ", "1-", "1)", "1555"
  if( (/^1[-\s(]/).test(str) ){
    str = str.substr(1);
  }
  
  // clearing whitespaces and dashes for better testing
  str = str.replace(/[\s-]/gi, "");
  
  //case 2 : no country code
  // testing the area code
  // two cases : 555 and (555)
  if( (/^\d{3}/).test(str) ){
    str = str.substr(3);
  }else if( (/^\(\d{3}\)/).test(str) ){
    str = str.substr(5);
  }else{
    return false;
  }
  
  //testing the remaining string : it must have 7 numbers
  if( (/^\d{7}$/).test(str) ){
    return true;
  }else{
    return false;
  }
  
}

telephoneCheck("155-555-5555");
