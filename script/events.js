const events = [
    {
        title: 'Family Gathering',
        description: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
        image: './images/homepage/family-gathering-mobile.jpg'
    },
    {
        title: 'Special Events',
        description: 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
        image: './images/homepage/special-events-mobile.jpg'
    },
    {
        title: 'Social Events',
        description: 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
        image: './images/homepage/social-events-mobile.jpg'
    }
];


//preloads events images to display them without any wait
let images = [];
function preload() {
    for (var i = 0; i < imags.length; i++) {
        images[i] = new Image();
        images[i].src = preload.imgs[i];
    }
}

preload(
    "./images/homepage/family-gathering-mobile.jpg",
    "./images/homepage/special-events-mobile.jpg",
    "./images/homepage/social-events-mobile.jpg"
)


// DOM VARIABLES
const eventImg = document.querySelector('#eventImg');
const eventHeading = document.querySelector('#eventHeading');
const eventText = document.querySelector('#eventText');
const menuItems = document.querySelectorAll('.m-events__item');


// CLICK ON MENU ITEM
menuItems.forEach((item,i) => {
    item.addEventListener('click', function(){
        eventHeading.innerText = events[i].title;
        eventText.innerText = events[i].description;
        eventImg.src = events[i].image;

        //works but it's ugly, must be better way to remove active class:
        menuItems.forEach(item => {
            item.classList.remove('-active');
        })
        item.classList.toggle('-active');
    })
})