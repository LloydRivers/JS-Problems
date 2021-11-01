// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

function iqTest(numbers){
    const numberArray = numbers.split(' ');
    const mapped = numberArray.map(i => Math.abs(i % 2));
    const sum = mapped.reduce((sum, i) => sum + i)
    const isOdd = sum > (numberArray.length / 2);
    if (isOdd)
    return mapped.indexOf(0) + 1;
    return mapped.indexOf(1) + 1;
    }




