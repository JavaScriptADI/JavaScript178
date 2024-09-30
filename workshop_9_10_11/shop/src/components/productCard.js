export function createProductDiv(product) {
    const div = document.createElement('div');
    div.id = `product-card-${product.id}`;
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