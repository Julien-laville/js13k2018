export class Edge {
  constructor(from, to, remaining) {
    this.from = from
    this.to = to
    this.remaining = remaining
    this.isUnlimited = remaining === -1
    this.a = 0
    this.fa = 0
  }

  data(h) {
    return [this.from.x + this.from.y * h, this.to.x + this.to.y * h, this.remaining]
  }

  d() {
    ctx.beginPath()
    ctx.moveTo(this.from.x * 30, this.from.y * 30)
    ctx.lineTo(this.to.x * 30, this.to.y * 30)
    if(this.isUnlimited) {
      ctx.strokeStyle = `rgba(152,235,235,${this.a / 3})`
      ctx.lineWidth = 12
      ctx.stroke()
      ctx.strokeStyle = `rgba(255,255,255,${this.a})`
      ctx.lineWidth = 2
      ctx.stroke()
    } else if(this.remaining === 1) {
      ctx.strokeStyle = `rgba(152,235,235,${this.a})`
      ctx.lineWidth = 2
      ctx.stroke()
    } else if(this.remaining === 0){
      ctx.strokeStyle = `rgba(68,17,204,${this.a / 2})`
      ctx.lineWidth = 2
      ctx.stroke()
    }

    ctx.lineWidth = 1
  }

  de() {
    ctx.beginPath()
    ctx.moveTo(this.from.x * 30, this.from.y * 30)
    ctx.lineTo(this.to.x * 30, this.to.y * 30)
    if(this.isUnlimited) {
      ctx.strokeStyle = "#78ff3b"
    } else if(this.remaining === 1) {
      ctx.strokeStyle = "#41c"
    } else if(this.remaining === 0){
      ctx.strokeStyle = "rgba(68,17,204,0.2)"
    }
    ctx.lineWidth = 5
    ctx.stroke()
    ctx.lineWidth = 1
  }

  k() {
    if(this.status === 'booting') {
      let d = new Date().getTime() - this.lastUpdate
      this.fa = this.fa + d / 1000
      if(this.fa > 1) {
        this.a = 1
        this.status = 'on'
      } else {
        this.a = this.fa
      }

      this.lastUpdate  = new Date().getTime()
    }

  }

  consume() {
    this.remaining--
  }

  isAvailable() {
    return this.isUnlimited || this.remaining > 0
  }

  boot() {
    this.status = 'booting'
    this.a = 0
    this.fa = 0
    this.lastUpdate = new Date().getTime()
  }

  finish() {
    this.status = 'finish'
  }

  reboot() {
    this.a = 0
    this.fa = 0
    this.boot()
  }
}