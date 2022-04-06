
let startWeight = 6
function setup() {
    createCanvas(800, 600)

}
function draw() {
    background(0)
    translate(width / 2, height)
    stroke(50, 50, 250)
    // for (i=0, i<)
    branch(100, startWeight)
    translate(0, -150)
}
function branch(length, weightIn) {
    let randLen = random(0.5,1)
    let randAngle = random(PI/20, PI/6)
    let weight = weightIn - 1
    strokeWeight(weight)
    line(0,0,0, -length)
    translate(0, -length)
    if (length > 8) {
        push()
            rotate(randAngle)
            branch(length * randLen, weight)
        pop()
        push()
            rotate(-randAngle)
            branch(length * randLen, weight)
        pop()
        push()
            rotate(-randAngle +PI/3)
            branch(length * randLen, weight)
        pop()
    }
    noLoop()
}