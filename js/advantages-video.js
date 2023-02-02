const posters = document.querySelectorAll('.advantages-poster');
const advantagesBrief = document.getElementById('brief-1');
const advantagesHover = document.getElementById('hover-1');
const advantagesVideoPlay = document.getElementById('navigation-1');
const advantagesVideo = document.querySelector('.advantages-video');
advantagesVideoPlay.addEventListener('click', showMovie);
posters.forEach(poster => poster.addEventListener('mouseenter', showBrief));
posters.forEach(poster => poster.addEventListener('mouseleave', hideBrief));
// posters.forEach(poster => poster.addEventListener('click', showMovie));

function showBrief() {
    advantagesBrief.classList.remove('down')
    advantagesHover.classList.remove('down')
}

function showMovie() {
    advantagesVideo.classList.remove('hidden')
}

function hideBrief() {
    // console.log('event', event)
    advantagesBrief.classList.add('down')
    advantagesHover.classList.add('down')
}
