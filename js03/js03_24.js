let condition = 5 > 10;
condition ? console.log('Left') : console.log('Right');
let result = condition ? (
    console.log("삼향 연산식의 첫 번째 표현식 입니다."),
    "표현식1"
) : (
    console.log("삼향 연산식의 두 번째 표현식 입니다."),
    "표현식2"
    
);
console.log(result);

