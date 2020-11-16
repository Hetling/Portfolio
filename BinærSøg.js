//Implementering af en binær søgefunktion

var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var nGuess = 1;
    while(min <= max){
        guess = Math.floor((max+min) / 2);
        println(guess);
        if(array[guess]===targetValue){
            println(nGuess);
            return guess;
        }
        else if(array[guess]<targetValue){min = guess + 1;}
        else{max = guess - 1;}
        nGuess = nGuess + 1;
    }
    return -1;
    
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);
