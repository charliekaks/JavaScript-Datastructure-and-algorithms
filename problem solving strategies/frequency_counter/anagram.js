//Find if two provided words are anagrams.
function isValidAnagram(first,second){
    if(first.length !== second.length){
        return false;
    }
    let lookup = {};
    for(char of first){
        if(lookup[char] > 0){
            lookup[char] +=1;
        }else{
            lookup[char] = 1;
        }
    }
    for (char of second){
        if(!lookup[char]){
            return false;
        }else{
            lookup[char] -=1;
        }
    }
    return true;
}

isValidAnagram("anagram", "gramana");