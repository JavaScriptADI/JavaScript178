import { setLoading } from "../utils/loading.js";
import { renderProducts } from "../utils/productsRendering.js";
import { deselectCategories } from "../utils/filtersActions.js";

const productsDiv = document.querySelector('#products');


export function createCategoryFilter(category) {
    const div = document.createElement('div');
    div.classList.add('text-secondary', 'category-link');

    div.addEventListener('click', async function(event) {
        setLoading(true);
        const url = `https://dummyjson.com/products/category/${category}?limit=0`;
        // console.log(url);
    
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        productsDiv.innerHTML = '';
        renderProducts(data.products);  
        div.classList.remove('text-secondary');
        div.classList.add('text-primary');
        
        deselectCategories(div);
        setLoading(false);
    });

    div.innerHTML = (`
        <span>${category}</span>
    `);
    return div;
}