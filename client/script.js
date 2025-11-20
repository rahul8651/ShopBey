const products = [
    { id: 1, name: "T-Shirt", price: 499, img: "https://picsum.photos/200?1" },
    { id: 2, name: "Shoes", price: 1200, img: "https://picsum.photos/200?2" },
    { id: 3, name: "Watch", price: 999, img: "https://picsum.photos/200?3" },
    { id: 4, name: "Bag", price: 799, img: "https://picsum.photos/200?4" }
];

let cart = [];

function loadProducts() {
    const list = document.getElementById("product-list");
    products.forEach(p => {
        list.innerHTML += `
            <div class="product">
                <img src="${p.img}" />
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const item = cart.find(p => p.id === id);

    if (item) {
        item.qty++;
    } else {
        const product = products.find(p => p.id === id);
        cart.push({ ...product, qty: 1 });
    }

    updateCart();
}

function updateCart() {
    document.getElementById("cart-count").innerText = cart.length;
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name} x ${item.qty}</span>
                <span>₹${item.price * item.qty}</span>
            </div>
        `;
    });

    document.getElementById("total-price").innerText = total;
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("show");
}

loadProducts();
