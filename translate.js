function setLanguage(language) {
    localStorage.setItem('language', language);
    translatePage();
    updateLanguageButtons();
}

function getLanguage() {
    return localStorage.getItem('language') || 'en';
}

function translatePage() {
    const language = getLanguage();
    document.querySelectorAll('[data-translate]').forEach(element => {
        element.innerHTML = translations[language][element.getAttribute('data-translate')];
    });
}

function updateLanguageButtons() {
    const language = getLanguage();
    document.getElementById('enButton').classList.remove('active');
    document.getElementById('srButton').classList.remove('active');
    if (language === 'en') {
        document.getElementById('enButton').classList.add('active');
    } else {
        document.getElementById('srButton').classList.add('active');
    }
}

const translations = {
    en: {
        home: 'Home',
        gallery: 'Gallery',
        menu: 'Menu',
        account: 'My Account',
        about: 'About Us',
        welcome: 'Welcome to our restaurant\'s official website',
        topDishes: 'Top Rated Dishes',
        orderNow: 'Order Now',
        galleryTitle: 'Gallery',
        menuTitle: 'Menu',
        accountTitle: 'My Account',
        cartTitle: 'Your Cart',
        checkout: 'Checkout',
        aboutTitle: 'About Us',
        whyChooseUs: 'Why Choose Us',
        contactUs: 'Contact Us',
        location: 'Location',
        phone: 'Phone',
        address: '123 Main Street, Belgrade, Serbia',
        remove: 'Remove',
        springRollsName: 'Spring Rolls',
        springRollsDesc: 'Crispy rolls filled with vegetables and meat.',
        dumplingsName: 'Dumplings',
        dumplingsDesc: 'Steamed dumplings filled with pork and vegetables.',
        hotAndSourSoupName: 'Hot and Sour Soup',
        hotAndSourSoupDesc: 'Spicy and tangy soup with tofu and mushrooms.',
        kungPaoChickenName: 'Kung Pao Chicken',
        kungPaoChickenDesc: 'Stir-fried chicken with peanuts, vegetables, and chili peppers.',
        sweetAndSourPorkName: 'Sweet and Sour Pork',
        sweetAndSourPorkDesc: 'Crispy pork with sweet and tangy sauce.',
        beefWithBroccoliName: 'Beef with Broccoli',
        beefWithBroccoliDesc: 'Tender beef stir-fried with broccoli in a savory sauce.',
        friedIceCreamName: 'Fried Ice Cream',
        friedIceCreamDesc: 'Ice cream coated in batter and deep-fried to perfection.',
        friedChocolateName: 'Fried Chocolate',
        friedChocolateDesc: 'Chocolate bar deep-fried to create a crispy outer shell.',
        bananaRollsName: 'Banana Rolls',
        bananaRollsDesc: 'Banana slices rolled in spring roll wrappers and fried.',
        footerText: '&copy; 2024, Uroš Rajčić i Mihajlo Rajić, Department of Software Engineering, Faculty of Electrical Engineering, University of Belgrade',
        restaurantImages: 'Restaurant Images',
        foodImages: 'Food Images',
        appetizers: 'Appetizers',
        mainCourses: 'Main Courses',
        desserts: 'Desserts',
        currentEvents: 'Current Events',
        event1Title: 'New Year\'s Special',
        event1Desc: 'Celebrate the New Year with our special menu and discounts.',
        event2Title: 'New Chef',
        event2Desc: 'We are excited to welcome our new head chef, bringing innovative recipes to our menu.',
        event3Title: 'Lunar New Year',
        event3Desc: 'Join us in celebrating the Lunar New Year with traditional dishes and performances.',
        price: 'Price:',
        ourRestaurant: 'Our restaurant offers a unique dining experience with authentic Chinese cuisine, a cozy atmosphere, and exceptional service. We have received numerous awards for our culinary excellence and are committed to providing our guests with an unforgettable dining experience.',
        orderHistory: 'Order History',
        dish: 'Dish',
        size: 'Size:',
        quantity: 'Quantity:',
    },
    sr: {
        home: 'Početna',
        gallery: 'Galerija',
        menu: 'Jelovnik',
        account: 'Moj nalog',
        about: 'O nama',
        welcome: 'Dobrodošli na zvaničnu stranicu našeg restorana',
        topDishes: 'Najbolje ocenjena jela',
        orderNow: 'Naruči odmah',
        galleryTitle: 'Galerija',
        menuTitle: 'Jelovnik',
        accountTitle: 'Moj nalog',
        cartTitle: 'Vaša korpa',
        checkout: 'Završi kupovinu',
        aboutTitle: 'O nama',
        whyChooseUs: 'Zašto nas izabrati',
        contactUs: 'Kontaktirajte nas',
        location: 'Lokacija',
        phone: 'Telefon',
        address: 'Ulica 123, Beograd, Srbija',
        remove: 'Ukloni',
        springRollsName: 'Prolećne rolne',
        springRollsDesc: 'Hrskave rolnice punjene povrćem i mesom.',
        dumplingsName: 'Knedle',
        dumplingsDesc: 'Parene knedle punjene svinjetinom i povrćem.',
        hotAndSourSoupName: 'Ljuta i kisela supa',
        hotAndSourSoupDesc: 'Začinjena i kisela supa sa tofuom i pečurkama.',
        kungPaoChickenName: 'Kung Pao piletina',
        kungPaoChickenDesc: 'Pržena piletina sa kikirikijem, povrćem i ljutim paprikama.',
        sweetAndSourPorkName: 'Slatko-kisela svinjetina',
        sweetAndSourPorkDesc: 'Hrskava svinjetina sa slatko-kiselim sosom.',
        beefWithBroccoliName: 'Govedina sa brokolijem',
        beefWithBroccoliDesc: 'Mekana govedina pržena sa brokolijem u slanom sosu.',
        friedIceCreamName: 'Pohovan sladoled',
        friedIceCreamDesc: 'Sladoled uvaljan u testu i pržen do savršenstva.',
        friedChocolateName: 'Pohovana čokolada',
        friedChocolateDesc: 'Čokoladica pržena da bi se stvorila hrskava kora.',
        bananaRollsName: 'Rolnice sa bananom',
        bananaRollsDesc: 'Kolutovi banane uvaljani u kore za rolnice i prženi.',
        footerText: '&copy; 2024, Uroš Rajčić i Mihajlo Rajić, Katedra za softversko inženjerstvo, Elektrotehnički fakultet, Univerzitet u Beogradu',
        restaurantImages: 'Slike restorana',
        foodImages: 'Slike hrane',
        appetizers: 'Predjela',
        mainCourses: 'Glavna jela',
        desserts: 'Deserti',
        currentEvents: 'Aktuelnosti',
        event1Title: 'Novogodišnja ponuda',
        event1Desc: 'Proslavite Novu godinu uz naš specijalni meni i popuste.',
        event2Title: 'Novi šef kuhinje',
        event2Desc: 'Sa uzbuđenjem predstavljamo našeg novog šefa kuhinje koji donosi inovativne recepte u naš meni.',
        event3Title: 'Lunarna Nova godina',
        event3Desc: 'Pridružite nam se u proslavi Lunarna Nova godina uz tradicionalna jela i performanse.',
        price: 'Cena:',
        ourRestaurant: 'Naš restoran nudi jedinstveno gastronomsko iskustvo sa autentičnom kineskom kuhinjom, prijatnom atmosferom i izuzetnom uslugom. Osvojili smo brojne nagrade za našu kulinarsku izvrsnost i posvećeni smo pružanju nezaboravnog iskustva našim gostima.',
        orderHistory: 'Istorija narudžbina',
        dish: 'Jelo',
        size: 'Veličina:',
        quantity: 'Količina:',
    }
};

document.addEventListener('DOMContentLoaded', () => {
    translatePage();
    updateLanguageButtons();
});
