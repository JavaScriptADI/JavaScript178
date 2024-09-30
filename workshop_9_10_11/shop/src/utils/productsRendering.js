import { createProductDiv } from "../components/productCard.js";
const productsDiv = document.querySelector('#products');


export function renderProducts(products) {
    return products.map(product => {
        const div = createProductDiv(product)
        productsDiv.appendChild(div);
        return div;
    });
}