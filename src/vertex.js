export class Vertex {
  constructor(pos, type, opt) {
    this.pos = pos
    this.type = type
    this.opt = opt
    this.consumed = false
    this.fa = 0
    this.a = 0
    this.status = 'off'
  }

  de() {
    ctx.fillStyle = '#fff'
    if(this.type === 'data') {
      ctx.fillStyle = "#3ae2ff"
    } else if(this.type === 'gate') {
        ctx.fillStyle = "#50ff2b"
    } else if(this.type === 'end') {
        ctx.fillStyle = "#001eff"
    } else if(this.type === 'start') {
        ctx.fillStyle = "#fffa1c"
    } else if(this.type === 'ttl') {
        ctx.fillStyle = "#ff00a3"
    } else {
      ctx.fillStyle = "#ff9200"
    }
    ctx.beginPath()
    ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)
    ctx.fill()
  }

  data(w) {
    return {id : this.pos.x + this.pos.y * w, t : this.type, th : this.opt}
  }

  d() {
    ctx.fillStyle = `rgba(255,255,255,${this.a})`
    if(this.type === 'data') {
      if(this.consumed) {
        ctx.fillStyle = `rgba(150,17,17,${this.a})`
      } else {
        ctx.fillStyle = `rgba(0,255,255,${this.a})`
      }
      ctx.fillRect(this.pos.x * 30-5, this.pos.y * 30-5, 10, 10)
    } else if(this.type === 'gate') {
        ctx.beginPath()
        ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)
        if (p.dataCount >= this.opt) {
            ctx.strokeStyle = "#294"
            ctx.fillStyle = `rgba(30,150,170,${this.a})`
        } else {
            ctx.strokeStyle = "#911"
            ctx.fillStyle = `rgba(150,17,17,${this.a})`
        }
        ctx.fill()
        ctx.beginPath()
        ctx.arc(this.pos.x * 30, this.pos.y * 30, 10, 0, Math.PI * 2)
        ctx.setLineDash([4, 2, 2, 2])
        ctx.stroke()
    } else if(this.type === 'end') {
      ctx.fillStyle = `rgba(9,18,127,${this.a})`
      ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)
      ctx.fill()
    } else {
      ctx.beginPath()
      ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)
      ctx.fill()
    }

  }
  consume() {
    this.consumed = true
  }

  boot() {
    this.a = 0
    this.fa = 0
    this.lastUpdate = new Date().getTime()
    this.status = 'booting'
  }

  finish() {
    this.status = 'finish'
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

  reboot() {
    this.boot()
  }

}