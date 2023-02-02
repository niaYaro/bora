const videoButton = document.getElementById('video-poster');
const videoPoster = document.getElementById('poster');
videoButton.addEventListener('click', removePoster);

function removePoster() {
    videoPoster.classList.add('hidden')
}