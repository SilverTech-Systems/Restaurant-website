document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    loadOrderHistory();
});

function loadCart() {
    const cartContainer = document.getElementById('cart-container');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartContainer.innerHTML = '';
    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
            <div class="col-md-4 cart-item">
                <img src="dodatno/${item.name.toLowerCase().replace(/ /g, '')}.png" alt="${item.name}">
                <h5>${item.name}</h5>
                <p data-translate="size">Size: ${item.size}</p>
                <p data-translate="price">Price: $${item.price}</p>
                <p data-translate="quantity">Quantity: <input type="number" value="${item.qty}" min="1" onchange="updateCart(${index}, this.value)"></p>
                <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
}

function updateCart(index, qty) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].qty = qty;
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(...cart);
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.removeItem('cart');
    loadCart();
    loadOrderHistory();
    alert('Order placed successfully!');
}

function loadOrderHistory() {
    const orderHistoryContainer = document.getElementById('order-history');
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orderHistoryContainer.innerHTML = '';
    orders.forEach(order => {
        orderHistoryContainer.innerHTML += `
            <div class="col-md-4 order-item">
                <img src="dodatno/${order.name.toLowerCase().replace(/ /g, '')}.png" alt="${order.name}">
                <h5>${order.name}</h5>
                <p data-translate="size">Size: ${order.size}</p>
                <p data-translate="price">Price: $${order.price}</p>
                <p data-translate="quantity">Quantity: ${order.qty}</p>
            </div>
        `;
    });
}
