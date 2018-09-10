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
      ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)
      ctx.strokeStyle = '#fff'
      ctx.strokeWidth = 2
      ctx.stroke()

      ctx.fillText(this.calcTime(), this.pos.x * 30, this.pos.y * 30)

    }
  }

  calcTime() {
    let d = new Date().getTime() - this.lastUpdate
    this.lastUpdate = new Date()
    this.time = this.time - d
    return (this.time / 1000).toFixed(0)
  }
}
