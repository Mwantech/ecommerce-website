document.getElementById('shareButton').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.share-menu').classList.toggle('show');
});

document.getElementById('twitterButton').addEventListener('click', function() {
    window.open('https://twitter.com/intent/tweet?text=Check%20this%20out!', '_blank');
});

document.getElementById('whatsappButton').addEventListener('click', function() {
    window.open('https://api.whatsapp.com/send?text=Check%20this%20out!', '_blank');
});

document.getElementById('facebookButton').addEventListener('click', function() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=https://example.com', '_blank');
});

document.getElementById('instagramButton').addEventListener('click', function() {
    window.open('https://www.instagram.com/', '_blank'); // Instagram does not have a direct share URL
});

document.getElementById('linkedinButton').addEventListener('click', function() {
    window.open('https://www.linkedin.com/shareArticle?mini=true&url=https://example.com&title=Check%20this%20out!', '_blank');
});