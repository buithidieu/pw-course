//in bang cuu chuong tu 2 den 9
for (let i =2; i<=9; i++){
    console.log(`Bang cuu chuong ${i}`); // chi so thu tu cua bang cuu chuong
    for (let j = 1; j<= 9; j++){ // chay tu 1 den 9, phep tinh cua i va j 
       const ketqua = i * j;
       console.log(`${i}*${j} = ${ketqua}`);
    }
    console.log('');
}