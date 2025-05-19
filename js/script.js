document.addEventListener('DOMContentLoaded', function() {

    const searchInput = document.getElementById('search-input');
    const categories = document.querySelectorAll('.category');
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

    categories.forEach(function(category) {
        category.addEventListener('click', function() {
            // get the category name from the <h3> tag
            const categoryName = this.querySelector('h3').textContent.toLowerCase();

            // just like the search form, it goes through all the products and checks if the category name matches the data-category attribute of each product
            products.forEach(function(product) {
                const productCategory = product.getAttribute('data-category');

                // if the category matches (or "all products" is selected), the product remains visible, otherwise, it is hidden
                if (categoryName === 'all products' || categoryName === productCategory) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });

            // highlight active category
            categories.forEach(function(cat) {
                cat.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});