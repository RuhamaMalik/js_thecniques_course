// 1--- Helper Function

// %c applies css style  rules to the output string  as specified by the second parameter.


console.log('%cHello ', 'font-size:20px; color:pink;','World!');

function error(msg) {
console.log('%cError ', 'font-size:20px; color:red; font-weight: bold;',msg);
}
error("It's an error");

function assert(pass, msg) {
  // body...
  if(pass){
    console.log('%cPASS ', 'font-size:20px; color:#75c836; font-weight: bold;',msg);
  }else{
    console.log('%cFAIL ', 'font-size:20px; color:red; font-weight: bold;',msg);

  }
}

assert(true,'Success 👍🏻');
assert(false, 'Failed');
assert(null, "i'll failed");
