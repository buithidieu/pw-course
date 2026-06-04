function multiply(a, b){
    const tinh = a * b;
    console.log(`Ket qua (${a}x${b}) = ${tinh}`);
    return tinh;
}
multiply(5,10);
multiply(9,15);

//ham findMin nhan 3 tham so a,b,c tra ve gia tri nho nhat, goi ham va in ra vs 2 bo so khac nhau
function findMin (a,b,c){
   let min = a; //gia su so nho nhat la a
   if (b<min){
    min = b;
   }
   if (c< min){
    min = c;
   }
console.log(`So nho nhat la ${min}`);
   return min;
}
findMin(1,5,7);
findMin(9,5,0);


//topstudent
const students =[
    {name: "Dieu", score: 80},
    {name: "My", score: 105},
    {name: "Pig", score: 90},
    {name: "Linh", score: 100}
];
const threshold = 100;
function getTopStudents (students, threshold){
    let result = [];
    for (let i = 1; i < students.length; i++){
    if (students.score >= threshold){
        console.log(`Danh sach hoc sinh co diem cao la ${students.name}`);
        result.push(students.name);
    }
}
return result;
}

//viet ham calculateInterest 
function calculateInterest(principal, rate, years){
    const lai = principal + principal*rate*years %100;
    console.log(`So tien lai la ${lai}`);
    return lai;
}
calculateInterest(500000,8,10);
calculateInterest(500000,2,10);