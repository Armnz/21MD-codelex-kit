const sounds = new Map([
	['e', new Audio('sounds/ja.mp3')],
	['i', new Audio('sounds/lets-go.mp3')],
	['s', new Audio('sounds/jah-nu-labi.mp3')],
	['d', new Audio('sounds/nu-vot.mp3')],
	['f', new Audio('sounds/nu-pamazam-varam-nakt-varam-sakt.mp3')],
	['k', new Audio('sounds/ok-man-jau-patik.mp3')],
	['l', new Audio('sounds/skaistaka-forma-pasaule.mp3')],
	['c', new Audio('sounds/okey-labi.mp3')],
	['m', new Audio('sounds/okey-okey.mp3')],
	['v', new Audio('sounds/sanak-sanak-kas-samaksajusi.mp3')],
])

// Add click event listener to the set container
document.querySelector('.set')?.addEventListener('click', (event) => {
	const target = event.target
	if (target.classList.contains('drum')) {
		const key = target.className.split(' ')[0]
		playSound(key)
		buttonAnimation(key)
	}
})

// Keydown event listener
document.addEventListener('keydown', (event) => {
	playSound(event.key)
	buttonAnimation(event.key)
})

function buttonAnimation(currentKey) {
	const activeButton = document.querySelector(`.${currentKey}`)
	if (activeButton) {
		activeButton.classList.add('pressed')
		setTimeout(() => {
			activeButton.classList.remove('pressed')
		}, 100)
	}
}

function playSound(key) {
	const sound = sounds.get(key)
	if (sound) {
		sound.currentTime = 0 // Rewind to the start
		sound.play()
	}
}
