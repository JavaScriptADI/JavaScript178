fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {console.log(error)})