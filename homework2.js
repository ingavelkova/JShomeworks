//Exponentiation function

function pow(x,y) {
    let result = 1;
    let temp=1;
   
    if (y>=0) {    
    
        while (y){
            result = x * result;
            y--;
        };
    } else {    
        
        while (y<0) {
            temp = x*temp;
            result = 1/temp;
            y++;
        };
    };
    return result; 
};

console.log('Result of exponentiation: ', pow(2,3));