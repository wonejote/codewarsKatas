function narcissistic(value) {
  return value === Array.from(String(value), Number).map(a => Math.pow(a,String(value).length)).reduce((a,b) => a +b,0);
  
}

narcissistic(153);