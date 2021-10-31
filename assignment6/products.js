// สร้าง array เก็บ object ของ car 
export let car = [
    {
        carId:'h001',
        carName:'Honda City e:HEV',
        color:'Blue',
        price:'839,000',
        image: 'image/h001.png'
    },

    {
        carId:'h002',
        carName:'Honda Civic 2021',
        color:'Red',
        price:'964,000',
        image: 'image/h002.png'
    },

    {
        carId:'h003',
        carName:'Honda Jazz',
        color:'Black',
        price:'555,000',
        image: 'image/h003.png'
    },

    {
        carId:'h004',
        carName:'Honda Accord',
        color:'White',
        price:'1,475,000',
        image: 'image/h004.png'
    },

    {
        carId:'h005',
        carName:'Honda Civic EG3',
        color:'Red',
        price:'860,000',
        image: 'image/h005.png'
    }
]

//เลือก div ที่มี id ชื่อว่า car ที่อยู่ในหน้า index
export const divCarsEle = document.querySelector("#car");

//วนลูปเเสดงรายการของรถ
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

    //สร้าง tag p เพื่อแสดง id ของรถเป็น p
    //กําหนดให้ pCarIdEle เป็น child ของ div divCarEle
    const pCarIdEle = document.createElement("p");
    pCarIdEle.textContent = "Car Id: " + car[i].carId;
    divCarEle.appendChild(pCarIdEle);

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

    //กําหนดให้ divCarEle เป็น child ของ div divCarsEle
    divCarsEle.appendChild(divCarEle);

}

