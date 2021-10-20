//High Order Function 
//create operator funtion เพื่อรับ array ของตัวเลข เเละชื่อฟังก์ชันที่จะนําไปดําเนินการต่อไป

export function operator(array,fn){
    return fn(array);
}

// function average ทําหน้าที่ในการคํานวณค่าเฉลี่ยของตัวเลขทั้งหมดที่อยู่ใน array โดยใช้ method reduce
// โดย method reduce จะนำค่าเริ่มต้นคือ 0 จาก reduce แล้วมาเป็น previous มาบวกกัน current ที่อยู่ในปัจจุบันก็คือ array index ที่ 0 พอมาบวกกันเสร็จ
// แล้วก็จะมีการเรียกใช้ใหม่เป็น previous คือ current ก่อนหน้านั้น มาบวกกัน current ที่อยู่ในปัจจุบันก็คือ array index ที่ 1 พอมาบวกกันเสร็จ
// อีกครั้งจะการทำแบบนี้ไปเรื่อย ๆ จนกว่าข้อมูล index ของ array จะบวกไปจนหมด
export function average(array){
    let sum = 0;
    sum = array.reduce((previous, current) => previous + current, 0);
    return sum / array.length;
}

//function min ทําหน้าที่ในการหาค่าตํ่าสุด
// ใช้ method Math.min ตามด้วย spread operator ในการนำกรอบของ array ออกเพื่อไปหาค่าต่ำสุดใน method ของ Math
export function min(array){
    return `min: ${Math.min(...array)}`;
}

//function max ทําหน้าที่ในการหาค่าสูงสุด
// ใช้ method Math.max ตามด้วย spread operator ในการนำกรอบของ array ออกเพื่อไปหาค่าสูงสุดใน method ของ Math
export function max(array){
    return `max: ${Math.max(...array)}`;
}

//default & Rest parameter & Closure
// function inner เรียกใช้ parameter ของ outer โดยกำหนดให้ default ของ name 
// เป็น guest และ parameter อื่น ๆ ที่ส่งมาแบบไม่จำกัดจำนวนใน ...friend
export function greeting(name='guest',...friend) {
    function sayHi(message) {
        return `${message} ${name},${friend}`
    }
    return sayHi;
}

//Destructuring
// เปลี่ยนโครงสร้างข้อมูล จาก array 2 อัน เอามา concat (ต่อกัน) เหลือ array เดียว
export function reTeam(team1, team2){
    return team1.concat(team2);
}

