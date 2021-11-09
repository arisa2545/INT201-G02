import {carts} from "./searchProduct.js";

//สร้างfunction showProduct วนลูปเเสดงรายการของรถ
export function showProduct(arr){
    // เลือก div ที่มี id product มาจากหน้า index
    const divProductEle = document.querySelector("#product");
    divProductEle.setAttribute("class","row row-cols-1 row-cols-sm-2 row-cols-md-4")
    divProductEle.textContent = '';
    for (let i = 0; i < arr.length; i++) {
        //สร้าง div กําหนด attribute ของ id เเละตกเเต่ง
        const divCarEle = document.createElement("div");
        divCarEle.setAttribute("class", "card");
        divCarEle.setAttribute("style", "width: 18rem");
        divCarEle.setAttribute("id", arr[i].carId);
    
        //สร้าง tag img กําหนด attribute src เพื่อนํา path file ของรูปภาพมาใส่ เเละกําหนดความกว้างความสูงของรูป
        //กําหนดให้ pCarImageEle เป็น child ของ div divCarEle
        const pCarImageEle = document.createElement("img");
        pCarImageEle.setAttribute("src", arr[i].image);
        pCarImageEle.setAttribute("height", 150);
        pCarImageEle.setAttribute("width", 270);
        pCarImageEle.setAttribute("class","card-img-top");
        
        divCarEle.appendChild(pCarImageEle);
    
        //สร้าง tag h3 เพื่อแสดงชื่อของรถเป็น heading3
        //กําหนดให้ h3CarNameEle เป็น child ของ div divCarEle
        const h3CarNameEle = document.createElement("h3");
        h3CarNameEle.setAttribute("class", "card-title");
        h3CarNameEle.textContent = arr[i].carName;

        divCarEle.appendChild(h3CarNameEle);

        //สร้าง tag p เพื่อแสดง color ของรถเป็น p
        //กําหนดให้ pCarColorEle เป็น child ของ div divCarEle
        const pCarColorEle = document.createElement("p");
        pCarColorEle.textContent = "Color: " + arr[i].color;
        pCarColorEle.setAttribute("class", "card-text");

        divCarEle.appendChild(pCarColorEle);
    
        //สร้าง tag p เพื่อแสดง price ของรถเป็น p
        //กําหนดให้ pCarPriceEle เป็น child ของ div divCarEle
        const pCarPriceEle = document.createElement("p");
        pCarPriceEle.textContent = "Price: " + arr[i].price;
        pCarPriceEle.setAttribute("class", "card-text");

        divCarEle.appendChild(pCarPriceEle);

        //สร้าง tag button เพื่อทำเป็นปุ่มในการเลือกรถเข้าตะกร้า
        //ทำฟังก็ชันให้กับปุ่ม button ให้แสดง id สินค้าออกมาเมื่อทำการกดเพิ่มสินค้าเข้าตะกร้า
        //พร้อมกับทำ condition ไว้ว่า ถ้าเพิ่มสินค้าที่มี id เหมือนกันให้เพื่อจำนวน quantity
        //โดนไม่ต้องสร้างลิสต์สินค้าใหม่ในตะกร้า
        const addCarEle = document.createElement("button");
        addCarEle.setAttribute("id","addToCart");
        addCarEle.textContent = "Add to cart";
        divCarEle.appendChild(addCarEle);

        addCarEle.addEventListener('click', () => {
            alert(`add car name : ${arr[i].carName}`);

            let newItem = {id: arr[i].carId, name: arr[i].carName, color: arr[i].color, qty: 1};

            if(carts.items.length == 0 || carts.itemId.includes(newItem.id) == false) {
                carts.items.push(newItem);
                carts.itemId.push(newItem.id);
            } else {
                for(let i = 0; i < carts.items.length; i++) {
                    if(newItem.id == carts.items[i].id) {
                        carts.items[i].qty += 1;
                    }
                }
            }

            //สร้าง attribute ใหม่ชื่อว่า amount ไว้แสดงจำนวนสินค้าที่ได้ทำการกด add เข้าไปใน cart
            carts.totalQty = carts.items.reduce((sum, item) => {return sum += item.qty}, 0);
            const amount = document.querySelector('#num');
            amount.textContent = carts.totalQty;
            console.log(carts);

        })
    
        //กําหนดให้ divCarEle เป็น child ของ div divProductEle
        divProductEle.appendChild(divCarEle);
    
    } 
}

    