document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramens => displayRamens(ramens));

    const ramenMenu = document.querySelector('#ramen-menu');

    function displayRamens(ramens) {
        ramens.forEach(ramen => {
            const image = document.createElement('img');
            image.setAttribute('src', ramen.image);
            image.addEventListener('click', () => displayDetails(ramen));
            ramenMenu.appendChild(image);
        })
    }

    function displayDetails(ramen) {
        const detailImage = document.querySelector('.detail-image');
        detailImage.setAttribute('src', ramen.image);

        const detailName = document.querySelector('.name');
        detailName.textContent = ramen.name;

        const detailRestaurant = document.querySelector('.restaurant');
        detailRestaurant.textContent = ramen.restaurant;

        const detailRating = document.querySelector('#rating-display');
        detailRating.textContent = ramen.rating;

        const detailComment = document.querySelector('#comment-display');
        detailComment.textContent = ramen.comment;
    }

    const form = document.querySelector('#new-ramen');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const newRamenName = document.querySelector('#new-name').value;
        const newRamenRestaurant = document.querySelector('#new-restaurant').value;
        const newRamenImage = document.querySelector('#new-image').value;
        const newRamenRating = document.querySelector('#new-rating').value;
        const newRamenComment = document.querySelector('#new-comment').value;

        const newRamen = {
            "id": 6,
            "name": newRamenName,
            "restaurant": newRamenRestaurant,
            "image": newRamenImage,
            "rating": newRamenRating,
            "comment": newRamenComment,
        }
        addToMenu(newRamen);
        form.reset(); 
    })

    function addToMenu(ramen) {

        const newImage = document.createElement('img');
        newImage.setAttribute('src', ramen.image);
        ramenMenu.appendChild(newImage);
        newImage.addEventListener('click', () => displayDetails(ramen));
    }
})
