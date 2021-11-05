// import {default as car} from "./productList.js";
import {showProduct} from "./showProduct.js";

//เลือก div ที่มี id ชื่อว่า car ที่อยู่ในหน้า index
export const divCarsEle = document.querySelector("#car");
export const divHeadingEle = document.querySelector("#heading");

export const searchIcon =document.createElement("img")
export const form =document.createElement("form")
export const input =document.createElement("input")
export const button =document.createElement("button")
searchIcon.setAttribute("src","image/searchIcon.png")
searchIcon.setAttribute("height", 20);
searchIcon.setAttribute("width", 20);

button.textContent = "Search";
input.setAttribute("type","text")

form.appendChild(searchIcon)
divHeadingEle.appendChild(form);
form.appendChild(input);
form.appendChild(button);

showProduct();
