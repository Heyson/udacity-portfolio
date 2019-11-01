//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello World!';

//Intersection Observer

const sectionOne = document.querySelector('.section1');
const options = {};
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        console.log(entry.target);
    });
}, options);

observer.observe(sectionOne);
