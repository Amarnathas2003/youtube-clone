const menue = document.querySelector('#menue');

const sidebar = document.querySelector('.sidebar');


menue.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar')
})

// circlebar show
const account_icon = document.querySelector('#account_icon');


const circle_sidebar = document.querySelector('.circle_sidebar');

account_icon.addEventListener('click', function () {
    circle_sidebar.classList.toggle('show-circlebar')
})

//notification show
const notification_icon = document.querySelector('#notification-icon');

const not_sidebar = document.querySelector('.not_sidebar');


notification_icon.addEventListener('click', function () {
    not_sidebar.classList.toggle('show-notbar');
})


// video show

const video_icon = document.querySelector('#video_icon');

const video_sidebar = document.querySelector('.video_sidebar');

video_icon.addEventListener('click', function () {
    video_sidebar.classList.toggle('show-videobar');
})



// search button display and on click
function searchClicked() {
    console.log("Search btn clicked")
    var width = window.innerWidth;
    const search = document.getElementById('center-searchBar');
    const header = document.getElementById('header');
    if (width < 769) {
        var x = document.getElementById('search-hide');
        x.style.display = 'none';


        var y = document.getElementById('search-hide2');
        y.style.display = 'none';

        search.style.display = 'block';
        header.style.justifyContent = 'center';
    }
}




