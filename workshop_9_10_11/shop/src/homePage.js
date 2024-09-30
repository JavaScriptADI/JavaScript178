import { deselectCategories } from "./utils/filtersActions.js";
import { fetchProducts, LIMIT_PER_PAGE, loadMoreDiv } from "./data/products.js";
import fetchCategries from "./data/categories.js";
import { observer } from "./utils/loadMore.js";

const productsDiv = document.querySelector('#products');
const filterForm = document.querySelector('#filter-form');
const searchForm = document.querySelector('#search-form');

document.querySelector('#all-products').addEventListener('click', async () => {
    productsDiv.innerHTML = '';
    deselectCategories(null);
    await fetchProducts(`https://dummyjson.com/products?imit=${LIMIT_PER_PAGE}`, true);
});

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const q = searchForm.q.value;
    console.log(q);
    const productsDivs = await fetchProducts(`https://dummyjson.com/products/search/?q=${q}`, true);
    try {   
        observer.unobserve(loadMoreDiv);
    } catch (error) {
    }

    productsDivs.forEach(productDiv => {
        const h5 = productDiv.querySelector('h5');
        const p = productDiv.querySelector('.product-description');
        const re = new RegExp(q, 'gi');
       
        const title = h5.textContent;
        const description = p.textContent;
        console.log(title);

        const newTitle = title.replace(re, (match) => {
            return `<span style="background-color: yellow">${match}</span>`;
        });

        p.innerHTML = description.replace(re, (match) => {
            return `<span style="background-color: yellow">${match}</span>`;
        });
        h5.innerHTML = newTitle;
    })
    console.log(productsDivs);
})


filterForm.minPrice.addEventListener('input', function(e) {
    filterForm.maxPrice.min = this.value;
})


filterForm.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log('Filter');
})

fetchProducts(`https://dummyjson.com/products?imit=${LIMIT_PER_PAGE}`, true);
fetchCategries();

