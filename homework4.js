function checkProbabilityTheory(count) {
    const min = 100;
    const max = 1000;
    let countEven  = 0;
    let countOdd  = 0;
    for ( i = 1; i <= count; i++) {
        ramdomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if ( ramdomNumber % 2 === 0) {
            countEven ++;
        } else {
            countOdd ++;
        };
    }
    console.log(`Кількість сгенерованих чисел: ${count}`);
    console.log(`Кількість парних чисел: ${countEven}`);
    console.log(`Кількість непарних чисел: ${countOdd}`);    
    console.log(`Відсоток парних чисел до непарних: ${(countEven/countOdd*100).toFixed(0)}%`);
}
   
checkProbabilityTheory(200);

/*
Чим більше count, тим співвідношення кількості парних чисел до непарних ближче до 50%50 )))
*/