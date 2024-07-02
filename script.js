document.addEventListener('DOMContentLoaded', () => {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');
    let carouselDom = document.querySelector('.carousel');
    let listItemDom = document.querySelector('.carousel .list');
    let thumbnailDom = document.querySelector('.carousel .thumbnail');

    nextDom.onclick = function() {
        showSlider('next');
    }

    prevDom.onclick = function() {
        showSlider('prev');
    }

    let timeRunning = 3000;
    let runTimeOut;

    function showSlider(type) {
        let itemSlider = document.querySelectorAll('.carousel .list .item');
        let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

        if (type === 'next') {
            listItemDom.appendChild(itemSlider[0]);
            thumbnailDom.appendChild(itemThumbnail[0]);
            carouselDom.classList.add('next');
        } else {
            let positionLastItem = itemSlider.length - 1;
            listItemDom.prepend(itemSlider[positionLastItem]);
            thumbnailDom.prepend(itemThumbnail[positionLastItem]);
            carouselDom.classList.add('prev');
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audio-player');
    var playButton = document.getElementById('play-button');

    playButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play().catch(function(error) {
                console.log('Error playing audio:', error);
            });
            playButton.textContent = 'pause';
        } else {
            audioPlayer.pause();
            playButton.textContent = 'play';
        }
    });
});


