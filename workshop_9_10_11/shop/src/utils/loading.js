const loadingSpinner = document.querySelector('#loading');
const productsDiv = document.querySelector('#products');
export let loadingStatus = true;

export function setLoading(loading) {
    loadingStatus = loading;
    if (loading) {
        loadingSpinner.style.display = 'block';
        // productsDiv.style.display = 'none';  
    } else {
        loadingSpinner.style.display = 'none';
        // productsDiv.style.display = 'flex';
    }
}