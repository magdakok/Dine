const events = {
    1: {
        title: 'Family Gathering',
        description: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
        image: './images/homepage/family-gathering-mobile.jpg'
    },
    2: {
        title: 'Special Events',
        description: 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
        image: './images/homepage/family-gathering-mobile.jpg'
    },
    3: {
        title: 'Social Events',
        description: 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
        image: './images/homepage/family-gathering-mobile.jpg'
    }
}

console.log(events['1'].title);

// DOM VARIABLES
const eventImg = document.querySelector('#eventImg');
const eventHeading = document.querySelector('#eventHeading');
const eventText = document.querySelector('#eventText');
const menuItems = document.querySelectorAll('.m-events__item');


// CLICK ON MENU ITEM
menuItems.forEach((item,i) => {
    item.addEventListener('click', function(){
        console.log(item.innerHTML);
    })
})