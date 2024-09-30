import { createCategoryFilter } from "../components/categoryFilter.js";
const categoryFiltersDiv = document.querySelector('#category-filters');

export async function fetchCategries() {
    const response = await fetch('https://dummyjson.com/products/category-list');
    const data = await response.json();
    data.forEach(category => categoryFiltersDiv.appendChild(createCategoryFilter(category)))
}

export default fetchCategries;
