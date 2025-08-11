function dnaStrand(dna){
  return  dna.split("").map(mapf).join("");
  
}

function mapf(a)
{
    switch(a){
        case "T" : return "A";
        case "A" : return "T";
        case "G" : return "C";
        case "C" : return "G";
    }
}

