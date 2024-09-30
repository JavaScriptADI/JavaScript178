import { loadingStatus } from "./loading.js";
import { fetchProducts, LIMIT_PER_PAGE, page } from "../data/products.js";

export const observer = new IntersectionObserver(
    () => {
        if (loadingStatus) {
            return;
        }
        const skip = LIMIT_PER_PAGE * page;
        const url = `https://dummyjson.com/products?limit=${LIMIT_PER_PAGE}&skip=${skip}`;
        console.log(url);
        fetchProducts(url);
    },
    {
        root: null,
        rootMargin: '100px',
        threshold: 0.2,
    }
);
