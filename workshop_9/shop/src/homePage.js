const productsDiv = document.querySelector('#products');
const categoryFiltersDiv = document.querySelector('#category-filters');
const filterForm = document.querySelector('#filter-form');
const loadingSpinner = document.querySelector('#loading');

function setLoading(loading) {
    if (loading) {
        loadingSpinner.style.display = 'block';
        productsDiv.style.display = 'none';
    } else {
        loadingSpinner.style.display = 'none';
        productsDiv.style.display = 'flex';
    }
}

async function fetchProducts() {
    setLoading(true);
    const response = await fetch('https://dummyjson.com/products');
    const {products} = await response.json();
    renderProducts(products);
    setLoading(false);
}

function renderProducts(products) {
    products.forEach(product => productsDiv.appendChild(createProductDiv(product)));
}

async function fetchCategries() {
    const response = await fetch('https://dummyjson.com/products/category-list');
    const data = await response.json();
    data.forEach(category => categoryFiltersDiv.appendChild(createCategoryFilter(category)))
}

function createProductDiv(product) {
    const div = document.createElement('div');
    div.innerHTML = (`
        <div class="card h-100 shadow border-0">
            <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text product-description">${product.description}</p>
                <p>${product.price}$</p>
            </div>
        </div>    
    `)

    return div;
}

function createCategoryFilter(category) {
    const div = document.createElement('div');
    div.classList.add('text-secondary', 'category-link');

    div.addEventListener('click', async () => {
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

        document.querySelectorAll('.category-link').forEach(categoryDiv => {
            if (categoryDiv === div) {
                return;
            }
            categoryDiv.classList.remove('text-primary');
            categoryDiv.classList.add('text-secondary');
        })
        setLoading(false);
    });

    div.innerHTML = (`
        <span style="cursor: pointer">${category}</span>
    `);
    return div;
}

/*
filterForm.allCategory.addEventListener('change', function(e) {
    // console.log('this', this);
    // console.log('e.target', e.target);
    // console.log('filterForm.allCategory', filterForm.allCategory);
    // console.log(this.checked);
    filterForm.querySelectorAll('.form-check-input').forEach(input => input.checked = this.checked);
});
*/


filterForm.minPrice.addEventListener('input', function(e) {
    filterForm.maxPrice.min = this.value;
})


filterForm.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log('Filter');
})

fetchProducts();
fetchCategries();
