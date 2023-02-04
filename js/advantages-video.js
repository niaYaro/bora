const advantagesFirstVideo = document.querySelector('.video-1');
const advantagesSecondVideo = document.querySelector('.video-2');
const advantagesThirdVideo = document.querySelector('.video-3');
const advantagesFourthVideo = document.querySelector('.video-4');
const advantagesFirstVideoPlay = document.getElementById('navigation-1');
const advantagesSecondVideoPlay = document.getElementById('navigation-2');
const advantagesThirdVideoPlay = document.getElementById('navigation-3');
const advantagesFourthVideoPlay = document.getElementById('navigation-4');

advantagesFirstVideoPlay.addEventListener('click', showMovie(advantagesFirstVideo));
advantagesSecondVideoPlay.addEventListener('click', showMovie(advantagesSecondVideo));
advantagesThirdVideoPlay.addEventListener('click', showMovie(advantagesThirdVideo));
advantagesFourthVideoPlay.addEventListener('click', showMovie(advantagesFourthVideo));

function showMovie(video) {
    return function() {
        video.classList.remove('hidden');
    }
}

advantagesFirstVideo.addEventListener('mouseout', hideVideo(advantagesFirstVideo));
advantagesSecondVideo.addEventListener('mouseout', hideVideo(advantagesSecondVideo));
advantagesThirdVideo.addEventListener('mouseout', hideVideo(advantagesThirdVideo));
advantagesFourthVideo.addEventListener('mouseout', hideVideo(advantagesFourthVideo));

function hideVideo(video) {
    return function() {
        video.classList.add('hidden');
    }
}