function buyNow() {
    const quantity = document.getElementById("quantity").value;
    const price = 15;
    const totalPrice = quantity * price;
    document.getElementById("total-price").textContent = `Rs. ${totalPrice}`;
    alert(`You added ${quantity} items to your cart for Rs. ${totalPrice}`);
}

