
import {default as car} from "./productList.js";
import {divCarsEle} from "./products.js";
//วนลูปเเสดงรายการของรถ
export function showProduct(){
for (let i = 0; i < car.length; i++) {
    //สร้าง div กําหนด attribute ของ id เเละตกเเต่งจัดระยะด้วย bootstrap
    const divCarEle = document.createElement("div");
    divCarEle.setAttribute("class", "px-1 mx-1 div-link");
    divCarEle.setAttribute("id", car[i].carId);

    //สร้าง tag img กําหนด attribute src เพื่อนํา path file ของรูปภาพมาใส่ เเละกําหนดความกว้างความสูงของรูป
    //กําหนดให้ pCarImageEle เป็น child ของ div divCarEle
    const pCarImageEle = document.createElement("img");
    pCarImageEle.setAttribute("src", car[i].image);
    pCarImageEle.setAttribute("height", 150);
    pCarImageEle.setAttribute("width", 270);
    divCarEle.appendChild(pCarImageEle);

    //สร้าง tag h3 เพื่อแสดงชื่อของรถเป็น heading3
    //กําหนดให้ h3CarNameEle เป็น child ของ div divCarEle
    const h3CarNameEle = document.createElement("h3");
    h3CarNameEle.textContent = car[i].carName;
    divCarEle.appendChild(h3CarNameEle);

    // //สร้าง tag p เพื่อแสดง id ของรถเป็น p
    // //กําหนดให้ pCarIdEle เป็น child ของ div divCarEle
    // const pCarIdEle = document.createElement("p");
    // pCarIdEle.textContent = "Car Id: " + car[i].carId;
    // divCarEle.appendChild(pCarIdEle);

    //สร้าง tag p เพื่อแสดง color ของรถเป็น p
    //กําหนดให้ pCarColorEle เป็น child ของ div divCarEle
    const pCarColorEle = document.createElement("p");
    pCarColorEle.textContent = "Color: " + car[i].color;
    divCarEle.appendChild(pCarColorEle);

    //สร้าง tag p เพื่อแสดง price ของรถเป็น p
    //กําหนดให้ pCarPriceEle เป็น child ของ div divCarEle
    const pCarPriceEle = document.createElement("p");
    pCarPriceEle.textContent = "Price: " + car[i].price;
    divCarEle.appendChild(pCarPriceEle);

    const addCarEle = document.createElement("button");
    // addCarEle.setAttribute("name","add");
    // addCarEle.setAttribute("value","add");
    addCarEle.textContent = "Add to cart";
    divCarEle.appendChild(addCarEle);

    //กําหนดให้ divCarEle เป็น child ของ div divCarsEle
    divCarsEle.appendChild(divCarEle);

}
}
