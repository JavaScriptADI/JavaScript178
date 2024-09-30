import { setLoading } from "../utils/loading.js";
import { renderProducts } from "../utils/productsRendering.js";
import { observer } from "../utils/loadMore.js";

const productsDiv = document.querySelector('#products');

export let loadMoreDiv = null;
export const LIMIT_PER_PAGE = 20;
export let page = 0;


export async function fetchProducts(url, intial = false) {
    if (intial) {
        page = 0;
        productsDiv.innerHTML = '';
    }
    setLoading(true);
    const response = await fetch(url);
    const { products, total } = await response.json();
    const productsDivs = renderProducts(products);
    if (loadMoreDiv) {
        observer.unobserve(loadMoreDiv);
    }
    loadMoreDiv = productsDivs[productsDivs.length - 1];
    page++;
    if (total >= LIMIT_PER_PAGE * page) {
        observer.observe(loadMoreDiv);
    }

    setTimeout(() => {
        setLoading(false);
    }, 100);
    return productsDivs;
}