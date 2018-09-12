import V2c from "./lib/v2c";

export class Beacon {
  constructor() {
    this.active = false
    this.pos = new V2c(0,0)
    this.time = 0
    this.lastUpdate = 0
  }

  placeBeacon(playerPos) {
    this.active = true
    this.lastUpdate = new Date().getTime()
    this.pos.set(playerPos.x, playerPos.y)
    this.time = 5000
  }

  reset() {
    this.active = false
  }

  k() {
    if(this.time < 0 && this.active) {
      p.pos.set(this.pos.x, this.pos.y)
      this.active = false
    }
  }

  d() {
    if(this.active) {
      ctx.beginPath()
      ctx.arc(this.pos.x * 30, this.pos.y * 30, 8, 0, Math.PI * 2)
      ctx.fillStyle = '#fff'
      ctx.strokeWidth = 2
      ctx.fill()
      ctx.fillStyle = '#000'
      ctx.fillText(this.calcTime(), this.pos.x * 30 - 3, this.pos.y * 30 + 3)

      let d = this.time / 200
      ctx.beginPath()
      ctx.arc(Math.cos(d) * 13 + this.pos.x * 30, Math.sin(d ) * 13 + this.pos.y * 30, 3, 0,Math.PI * 2)
      ctx.fillStyle =  `hsla(${(d * 30) % 300}, 100%, 50%, 1)`
      ctx.fill()

    }
  }

  calcTime() {
    let d = new Date().getTime() - this.lastUpdate
    this.lastUpdate = new Date()
    this.time = this.time - d
    return (this.time / 1000).toFixed(0)
  }
}
