function duplicateEncode(word){
    word = word.toUpperCase();
    retorno = [];
    

    for  (let char of word) {

    if (word.indexOf(char) === word.lastIndexOf(char)) {
      retorno += "(";
    } else {
      retorno += ")";
    }
  }
  return retorno;

}

duplicateEncode("holos");
