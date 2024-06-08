document.addEventListener('DOMContentLoaded', () => {
    scrollToDish();
    initializeStarRatings();
});

function scrollToDish() {
    const hash = window.location.hash;
    if (hash) {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

function filterDishes() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const dishes = document.querySelectorAll('#dishes-container .col-md-4');
    dishes.forEach(dish => {
        const name = dish.getAttribute('data-name').toLowerCase();
        const price = dish.getAttribute('data-price').toLowerCase();
        if (name.includes(searchValue) || price.includes(searchValue)) {
            dish.style.display = 'block';
        } else {
            dish.style.display = 'none';
        }
    });
}

function sortDishes() {
    const sortValue = document.getElementById('sort').value;
    const container = document.getElementById('dishes-container');
    const dishes = Array.from(container.children);
    dishes.sort((a, b) => {
        const aValue = a.getAttribute(`data-${sortValue}`);
        const bValue = b.getAttribute(`data-${sortValue}`);
        if (sortValue === 'price') {
            return parseFloat(aValue) - parseFloat(bValue);
        } else {
            return aValue.localeCompare(bValue);
        }
    });
    dishes.forEach(dish => container.appendChild(dish));
}

function rateDish(dishId) {
    const ratingInput = document.getElementById(`${dishId}RatingInput`).value;
    const ratingDisplay = document.getElementById(`${dishId}Rating`);
    const ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    ratings[dishId] = ratingInput;
    localStorage.setItem('ratings', JSON.stringify(ratings));
    ratingDisplay.textContent = ratingInput;
    updateTopRatedDishes();
}

function updateTopRatedDishes() {
    const ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    const sortedDishes = Object.keys(ratings).sort((a, b) => ratings[b] - ratings[a]).slice(0, 3);
    localStorage.setItem('topRatedDishes', JSON.stringify(sortedDishes));
}

function addToCart(dishId, dishName, dishPrice) {
    console.log(dishName.toLowerCase().replace(' ', '')+"Qty");
    const qtyElement = document.getElementById(`${dishName.toLowerCase().replace(/ /g, '')}Qty`);

    const sizeElement = document.getElementById(`${dishName.toLowerCase().replace(/ /g, '')}Size`);
    
    console.log('Adding to cart:', dishName);
    console.log('Quantity element:', qtyElement);
    console.log('Size element:', sizeElement);

    if (qtyElement && sizeElement) {
        const qty = qtyElement.value;
        const size = sizeElement.value;
        console.log('Quantity:', qty);
        console.log('Size:', size);
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ id: dishId, name: dishName, price: dishPrice, qty, size });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${dishName} added to cart`);
    } else {
        alert('Error: Unable to add item to cart.');
    }
}


function downloadMenu() {
    window.open('menu.pdf');
}

function initializeStarRatings() {
    const starContainers = document.querySelectorAll('.star-rating');
    starContainers.forEach(container => {
        const stars = container.querySelectorAll('span');
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const value = this.getAttribute('data-value');
                updateStarRating(container, value);
                rateDishWithStars(container.id.replace('RatingStars', ''), value);
            });
        });
    });
}

function updateStarRating(container, value) {
    const stars = container.querySelectorAll('span');
    stars.forEach(star => {
        star.classList.toggle('selected', star.getAttribute('data-value') <= value);
    });
}

function rateDishWithStars(dishId, rating) {
    const ratingDisplay = document.getElementById(`${dishId}Rating`);
    const ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    ratings[dishId] = rating;
    localStorage.setItem('ratings', JSON.stringify(ratings));
    ratingDisplay.textContent = rating;
    updateTopRatedDishes();
}
