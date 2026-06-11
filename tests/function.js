//khai bao ham co tham so name, tra ve chuooi hello <name>
const hello = function(name){
    console.log(`Hello ${name}!`);
}
hello(`Dieu`);

//khai bao ham co tham so price, quantity, discount. tra ve gia tri, biet gia tri = price * quantity - discount
const giatri = function(price, quantity, discount){
    const Sum = price* quantity - discount;
    console.log("Gia tri la", Sum);
}
giatri(100,20,10);

const Totalprice = function(price, quantity, discount){
    return price * quantity - discount;
}
console.log('Tong gia tri la ${Totalprice(200,2,400)}');