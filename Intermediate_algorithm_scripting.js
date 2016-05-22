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
