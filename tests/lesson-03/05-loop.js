//tinh tong tu 1 den 100
let sum = 0;
for (let i = 1; i <= 100; i++){
    sum += i
}
console.log(sum);

//in bang cuu chuong tu 2 den 9
//let nhan = 0;
//for (let i =2; i <=9; i++){
    
//}

//tao 1 mang chua cac so le tu 1 den 99
for (let i = 1; i <= 99; i ++){
    if (i%2 === 1){
        console.log(`cac so le la ${i}`);
    }
}

//in ra 10 email dua tren ten nguoi dung va so thu tu
const ten = "user";
const email = "@example.com";
for (let i =1; i<=10; i++){
    console.log(`${ten}${i}${email}`);
}

//tinh tong doanh thu cua 12 thang trog nam dua tren mang doanh thu da cho va in ra tong doanh thu

const month = i;
for (let i = 1 ; i <= 12; i++){
     doanhthu += i+100;
}
console.log(doanhthu);