const posters = document.querySelectorAll('.advantage');
// const advantagesBrief = document.getElementById('brief-1');
// const advantagesHover = document.getElementById('hover-1');
const advantagesVideoPlay = document.getElementById('navigation-1');
const advantagesVideo = document.querySelector('.advantages-video');
advantagesVideoPlay.addEventListener('click', showMovie);
posters.forEach(poster => poster.addEventListener('mouseenter', showBrief));
posters.forEach(poster => poster.addEventListener('mouseleave', hideBrief));
// posters.forEach(poster => poster.addEventListener('click', showMovie));

function showBrief(event) {
    const brief = event.target.querySelector('.hover-image-background');
    const hover = event.target.querySelector('.advantages-hover-text');
    brief.classList.remove('down');
    hover.classList.remove('down');

    // advantagesBrief.classList.remove('down')
    // advantagesHover.classList.remove('down')
}

function showMovie() {
    advantagesVideo.classList.remove('hidden')
}

function hideBrief(event) {
    // console.log('event', event)
    const index = event.target.dataset.index;
    document.getElementById(`brief-${index}`).classList.add('down');
    document.getElementById(`hover-${index}`).classList.add('down');
    // advantagesBrief.classList.add('down')
    // advantagesHover.classList.add('down')
}
