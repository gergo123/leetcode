/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  var stack = [];
  for (let i = 0; i < s.length; i++) {
    const chr = s[i];


  }

  return stack.length;
};

console.log(minLength("ABFCACDB"));
console.log(minLength("ACBBD"));
console.log(minLength("BGACACCCCACCACCACACACACCACDBDDBDBDBDBDDBDDBDDDDBDBMANAACCCCCCCDDDDDDDBBAAACCACABDBDDBBB"));
console.log(minLength("NICAAACCACCCCACCAACCCABDDDBBDDBDDDDBDDBBBDAKCACCCACAAAACAACCCCACDBDDDDBBDBBBBDBDDDBDACCABDDBABAB"));
console.log(minLength('TQTCACACACCAACCCCDDDDBBDDBDBDBDMOJLCAACACAAACCCCACCCAAACCCCACACDBDBDDDDBBBDDDBDDDDBBBDBDBBDMCDCDM'));

// van ertelme sorba rendezni a karaktereket? megtorve az eredeti sort
// 
