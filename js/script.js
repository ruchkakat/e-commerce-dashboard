document.addEventListener('DOMContentLoaded', function() {

    const searchInput = document.getElementById('search-input');
    const products = document.querySelectorAll('.product-item');

    searchInput.addEventListener('input', function() {

        // get the text from the search field and convert it to lowercase
        const searchTerm = this.value.toLowerCase();

        // go through all the products
        products.forEach(function(product) {

            // find the product name (<h5> inside class "name")
            const productName = product.querySelector('.name h5').textContent.toLowerCase();

            // check if the product name contains the search text
            if (productName.includes(searchTerm)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});