import V2c from "./lib/v2c";

export default class Part {
  constructor(direction, source, color, speed, lifeSpan = 1000) {
    this.color = color


    this.lifeSpan = lifeSpan * Math.random()
    this.olifeSpan = lifeSpan
    this.pos = new V2c(source.x, source.y)
    this.opos = new V2c(source.x, source.y)
    this.lastUpdate = new Date().getTime()
    /* fast */
    this.d = 0.0


    this.moveVector = new V2c(Math.cos(direction) * speed, Math.sin(direction) * speed)

  }

  dr() {
    let a = 0.7
    if(this.lifeSpan < 300) {
      a = this.lifeSpan / 300
    }
    ctx.fillStyle = `hsla(${this.color}, 50%, 50%, ${a})`
    ctx.fillRect(this.pos.x, this.pos.y, 2,2)
  }

  k() {

    this.d = new Date().getTime() - this.lastUpdate
    this.lastUpdate = new Date().getTime()

    this.lifeSpan = this.lifeSpan - this.d
    /* reset particle */
    if(this.lifeSpan < 0) {
      this.lifeSpan = this.olifeSpan
      this.pos.set(this.opos.x, this.opos.y)
    }
    this.pos.add(this.moveVector)

  }
}