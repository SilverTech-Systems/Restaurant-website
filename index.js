
function loadTopRatedDishes() {
    const topRatedDishes = JSON.parse(localStorage.getItem('topRatedDishes')) || [];
    const dishes = {
        springRolls: {
            name: "Spring Rolls",
            desc: "Crispy rolls filled with vegetables and meat.",
            img: "dodatno/springrolls.png",
            id: "springRolls"
        },
        dumplings: {
            name: "Dumplings",
            desc: "Steamed dumplings filled with pork and vegetables.",
            img: "dodatno/dumplings.png",
            id: "dumplings"
        },
        hotAndSourSoup: {
            name: "Hot and Sour Soup",
            desc: "Spicy and tangy soup with tofu and mushrooms.",
            img: "dodatno/hotandsoursoup.png",
            id: "hotAndSourSoup"
        },
        kungPaoChicken: {
            name: "Kung Pao Chicken",
            desc: "Stir-fried chicken with peanuts, vegetables, and chili peppers.",
            img: "dodatno/kungpaochicken.png",
            id: "kungPaoChicken"
        },
        sweetAndSourPork: {
            name: "Sweet and Sour Pork",
            desc: "Crispy pork with sweet and tangy sauce.",
            img: "dodatno/sweetandsourpork.png",
            id: "sweetAndSourPork"
        },
        beefWithBroccoli: {
            name: "Beef with Broccoli",
            desc: "Tender beef stir-fried with broccoli in a savory sauce.",
            img: "dodatno/beefwithbroccoli.png",
            id: "beefWithBroccoli"
        },
        friedIceCream: {
            name: "Fried Ice Cream",
            desc: "Ice cream coated in batter and deep-fried to perfection.",
            img: "dodatno/friedicecream.png",
            id: "friedIceCream"
        },
        friedChocolate: {
            name: "Fried Chocolate",
            desc: "Chocolate bar deep-fried to create a crispy outer shell.",
            img: "dodatno/friedchocolate.png",
            id: "friedChocolate"
        },
        bananaRolls: {
            name: "Banana Rolls",
            desc: "Banana slices rolled in spring roll wrappers and fried.",
            img: "dodatno/bananarolls.png",
            id: "bananaRolls"
        }
    };

    const topRatedDishesContainer = document.getElementById('topRatedDishesContainer');
    topRatedDishesContainer.innerHTML = '';
    topRatedDishes.forEach(dishId => {
        const dish = dishes[dishId];
        if (dish) {
            topRatedDishesContainer.innerHTML += `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${dish.img}" class="card-img-top" alt="${dish.name}">
                        <div class="card-body">
                            <h5 class="card-title">${dish.name}</h5>
                            <p class="card-text">${dish.desc}</p>
                            <a href="menu.html#${dish.id}" class="btn btn-primary" data-translate="orderNow">Order Now</a>
                        </div>
                    </div>
                </div>
            `;
        }
    });
}
