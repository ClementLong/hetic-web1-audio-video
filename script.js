// On récupère dans des variables les éléments avec lesquelles on travaille
const video = document.querySelector('.video')
const play = document.querySelector('.play')
const volumeUp = document.querySelector('.volume-up')
const volumeDown = document.querySelector('.volume-down')
const timeNext = document.querySelector('.time-next')
const timeBack = document.querySelector('.time-back')
const bar = document.querySelector('.bar')

// Play/pause
play.addEventListener('click', () => {
	if(video.paused) { // Si la video est en pause
		video.play()
	} else {
		video.pause()
	}
})

// Baisser le volume de 10%
volumeDown.addEventListener('click', () => {
	if(video.volume - 0.10 >= 0) { // Si le volume souhaité est supérieur à 0
		video.volume -= 0.10
	} else {
		video.volume = 0
	}
})

// Augmenter le volume de 10%
volumeUp.addEventListener('click', () => {
	if(video.volume + 0.10 <= 1) { // Si le volume souhaité est inférieur à 1
		video.volume += 0.10
	} else {
		video.volume = 1
	}
})

// Reculer de 10 secondes
timeBack.addEventListener('click', () => {
	if(video.currentTime - 10 >= 0) { // Si le temps souhaité est supérieur a 0
		video.currentTime -= 10
	} else {
		video.currentTime = 0 // Si le temps souhaité est inférieur à la durée de la video, on met 0
	}
})

// Avancer de 10 secondes
timeNext.addEventListener('click', () => {
	if(video.currentTime + 10 <= video.duration) { // Si le temps souhaité est inférieur à la durée de la video
		video.currentTime += 10
	} else {
		video.currentTime = video.duration // Si le temps souhaité est suppérieur à la durée de la video, on met le mixumum
	}
})

// Mettre à jour le progress bar
video.addEventListener('timeupdate', () => {
	const progress = video.currentTime / video.duration // 0 = Début, 1 = Fin
	bar.style.transform = 'scaleX(' + progress + ')' // On applique le nouveau style a notre bar
})