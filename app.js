const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

c.fillStyle = "black";
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './assets/palletTown.png'

const playerImage = new Image()
playerImage.src = './assets/player/playerDown.png'

class Sprite {
    constructor({position, velocity, image}) {
        this.position = position
        this.image = image
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const background = new Sprite ({
    position: {
        x: -200,
        y: -250
    },
    image: image
})

function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
}
animate()