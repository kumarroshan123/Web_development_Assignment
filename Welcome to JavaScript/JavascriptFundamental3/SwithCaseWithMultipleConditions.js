function classifyAnimal(name) {
    switch(name.toLowerCase()) {
        case 'dog':
        case 'cat':
        case 'whale':
        case 'elephant':
            console.log(name + " is a mammal.");
            break;
        
        case 'eagle':
        case 'sparrow':
        case 'penguin':
            console.log(name + " is a bird.");
            break;
        
        case 'snake':
        case 'lizard':
        case 'crocodile':
            console.log(name + " is a reptile.");
            break;
        
        case 'frog':
        case 'salamander':
            console.log(name + " is an amphibian.");
            break;

        case 'shark':
        case 'salmon':
        case 'goldfish':
            console.log(name + " is a fish.");
            break;

        case 'ant':
        case 'butterfly':
        case 'spider':
            console.log(name + " is an insect or arachnid.");
            break;

        default:
            console.log("Unknown animal type for: " + name);
    }
}


classifyAnimal('dog');    
classifyAnimal('eagle');  
classifyAnimal('snake');  
classifyAnimal('dragon'); 
