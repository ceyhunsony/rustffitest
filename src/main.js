var ffi = require('ffi');
var ref = require('ref');
var request = require('request');

var ArrayType = require('ref-array');
var int = ref.types.int;
var byte = ref.types.byte;
var IntArray = ArrayType(int);
var ByteArray = ArrayType(byte);
//var CString = ref.types.CString;

var lib = ffi.Library('target/debug/librustffitest', {
  'testing_array': [ ByteArray, [ int, ByteArray ] ],
  //'testing_string': [ ]
});

function str_to_bytes(input) {
  function s(x) { return x.charCodeAt(0); }
  return input.split('').map(s);
}


request('http://checkip.amazonaws.com', function (err, response, content) {
  var buffer = str_to_bytes(content);
  console.log('typeof buffer', typeof buffer, 'content = ', content, 'buffer = ', buffer);
  var input = new ByteArray(buffer);
  var output = lib.testing_array(buffer.length, input);
  console.log("testing_array(" + input + ") = " + output);
});

// var input = new ByteArray([1,2,3,4]);
// var output = lib.testing_array(3, input);
// console.log("testing_array(" + input + ") = " + output);
