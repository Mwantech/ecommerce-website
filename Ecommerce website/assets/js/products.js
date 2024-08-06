document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });

    document.getElementById('like-button').addEventListener('click', () => {
        alert('Product liked!');
    });

    document.getElementById('add-to-cart').addEventListener('click', () => {
        alert('Product added to cart!');
    });

    document.getElementById('buy-now').addEventListener('click', () => {
        alert('Proceeding to checkout!');
    });
});
document.getElementById('buyNowBtn').addEventListener('click', function () {
            window.location.href = 'checkout.html';
        });