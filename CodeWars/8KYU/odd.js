// Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n) {
    let number = 0;
    for (let i = 0; i < n; i++) {
    if( i % 2 !==0) {
        number +=1
    }
    }
    
    return number
    }
    
    console.log(oddCount(7)) //=> 3, i.e [1, 3, 5]
    console.log(oddCount(15)) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
    
    
    