const advantagesFirstVideo = document.querySelector('.video-1');
const advantagesSecondVideo = document.querySelector('.video-2');
const advantagesThirdVideo = document.querySelector('.video-3');
const advantagesFourthVideo = document.querySelector('.video-4');
const advantagesFirstVideoPlay = document.getElementById('navigation-1');
const advantagesSecondVideoPlay = document.getElementById('navigation-2');
const advantagesThirdVideoPlay = document.getElementById('navigation-3');
const advantagesFourthVideoPlay = document.getElementById('navigation-4');
const advantagesMobileFirstVideoPlay = document.getElementById('mobile-navigation-1');
const advantagesMobileSecondVideoPlay = document.getElementById('mobile-navigation-2');
const advantagesMobileThirdVideoPlay = document.getElementById('mobile-navigation-3');
const advantagesMobileFourthVideoPlay = document.getElementById('mobile-navigation-4');

advantagesFirstVideoPlay.addEventListener('click', showMovie(advantagesFirstVideo));
advantagesMobileFirstVideoPlay.addEventListener('click', showMovie(advantagesFirstVideo));
advantagesSecondVideoPlay.addEventListener('click', showMovie(advantagesSecondVideo));
advantagesMobileSecondVideoPlay.addEventListener('click', showMovie(advantagesSecondVideo));
advantagesThirdVideoPlay.addEventListener('click', showMovie(advantagesThirdVideo));
advantagesMobileThirdVideoPlay.addEventListener('click', showMovie(advantagesThirdVideo));
advantagesFourthVideoPlay.addEventListener('click', showMovie(advantagesFourthVideo));
advantagesMobileFourthVideoPlay.addEventListener('click', showMovie(advantagesFourthVideo));

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