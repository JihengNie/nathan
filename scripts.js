
document.addEventListener("DOMContentLoaded", function(e) {
    const nathanPlayBtn = document.querySelector('[js-play-nathan-song]')
    const nathanSong = document.querySelector('[js-nathan-song]')

    nathanPlayBtn.addEventListener('click', (e) => {
        e.preventDefault()
        nathanSong.classList.remove('hidden')
    })
});