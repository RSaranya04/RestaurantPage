var mockData = []
const createRestaraunt = () => {
    const menuContainer = document.getElementById('menu-container')
    for (let i = 0; i < mockData.length; i++) {

        const dishCard = document.createElement('div')
        dishCard.className = 'dish-card'

        const dishImage = document.createElement('img')
        dishImage.src = mockData[i].feature_image
        dishImage.alt = 'image'
        dishImage.className = 'dish-image'

        const dishName = document.createElement('div')
        dishName.className = 'dish-name'
        const dishNameText = document.createTextNode(mockData[i].name)
        dishName.appendChild(dishNameText)

        const description = document.createElement('div')
        description.className = 'description'
        const descriptionText = document.createTextNode(mockData[i].cuisines)
        description.appendChild(descriptionText);


        const rating = document.createElement('div')
        rating.className = 'rating'
        const ratingText = document.createTextNode(mockData[i].rating)
        rating.appendChild(ratingText)

        const starIcon = document.createElement('i')
        starIcon.className = 'fa fa-star'
        rating.appendChild(starIcon)

        const reviews = document.createElement('div')
        reviews.className = 'reviews'
        const reviewsText = document.createTextNode(mockData[i].reviews)
        reviews.appendChild(reviewsText)



        dishCard.appendChild(dishImage)
        dishCard.appendChild(dishName)
        dishCard.appendChild(description)
        dishCard.appendChild(rating)
        dishCard.appendChild(reviews)

        menuContainer.appendChild(dishCard)

    }
}

async function getFoodieData() {
    const response = await fetch('https://api.jsonbin.io/v3/b/64cd66bfb89b1e2299cb75af')
        .then(data => data.json())
        .then(response => {
            console.log(response);
            mockData = response.record;
            createRestaraunt();
        });
}


/*const mockData = [

    {
        "id": "66330",
        "name": "Kakada Ramprasad",
        "address": "348/343, Ground Floor, Mint Street, Sowcarpet, Chennai",
        "cuisines": "Mithai, Street Food, North Indian",
        "rating": "4.4",
        "reviews": "865",
        "feature_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?output-format=webp"
    },
    {
        "id": "66330",
        "name": "Kakada Ramprasad",
        "address": "348/343, Ground Floor, Mint Street, Sowcarpet, Chennai",
        "cuisines": "Mithai, Street Food, North Indian",
        "rating": "4.4",
        "reviews": "865",

        "feature_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?output-format=webp"
    },
    {
        "id": "66330",
        "name": "Kakada Ramprasad",
        "address": "348/343, Ground Floor, Mint Street, Sowcarpet, Chennai",
        "cuisines": "Mithai, Street Food, North Indian",
        "rating": "4.4",
        "reviews": "865",
        "feature_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?output-format=webp"
    },
    {
        "id": "66330",
        "name": "Kakada Ramprasad",
        "address": "348/343, Ground Floor, Mint Street, Sowcarpet, Chennai",
        "cuisines": "Mithai, Street Food, North Indian",
        "rating": "4.4",
        "reviews": "865",
        "feature_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?output-format=webp"
    },
    {
        "id": "66330",
        "name": "Kakada Ramprasad",
        "address": "348/343, Ground Floor, Mint Street, Sowcarpet, Chennai",
        "cuisines": "Mithai, Street Food, North Indian",
        "rating": "4.4",
        "reviews": "865",
        "feature_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?output-format=webp"
    },
    {
        "id": "66330",
        "name": "Kakada Ramprasad",
        "address": "348/343, Ground Floor, Mint Street, Sowcarpet, Chennai",
        "cuisines": "Mithai, Street Food, North Indian",
        "rating": "4.4",
        "reviews": "865",
        "feature_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?output-format=webp"
    },
    {
        "id": "66330",
        "name": "Kakada Ramprasad",
        "address": "348/343, Ground Floor, Mint Street, Sowcarpet, Chennai",
        "cuisines": "Mithai, Street Food, North Indian",
        "rating": "4.4",
        "reviews": "865",
        "feature_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?output-format=webp"
    },
    {
        "id": "66330",
        "name": "Kakada Ramprasad",
        "address": "348/343, Ground Floor, Mint Street, Sowcarpet, Chennai",
        "cuisines": "Mithai, Street Food, North Indian",
        "rating": "4.4",
        "reviews": "865",
        "feature_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?output-format=webp"
    }
]*/