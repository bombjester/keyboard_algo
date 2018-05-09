var findWords = function(words) {
    var array = [];
    var top = ["q", "w", "e","r","t","y","u","i","o","p"];
    var middle = ["a","s","d","f","g","h","j","k","l"];
    var bottom = ["z","x","c","v","b","n","m"];
    
    for (word in words){
        var topmatch = 0;
        var middlematch = 0;
        var bottommatch = 0;
        for(letter in words[word]){
           
            for(x in middle){
                if (words[word][letter].toLowerCase() == middle[x]){
                   middlematch+= 1 
                }
                
            }
            for (y in top){
                if (words[word][letter].toLowerCase() == top[y]){
                   topmatch += 1 
                }
            }
            
            for (z in bottom){
                if (words[word][letter].toLowerCase() == bottom[z]){
                   bottommatch += 1 
                }
            }
        }
        if (topmatch == words[word].length|| middlematch == words[word].length || bottommatch == words[word].length){
            console.log(" matched", words[word]);
            array.push(words[word]);
        }
        
    }
    return(array);
};