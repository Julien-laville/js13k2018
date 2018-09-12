export class Vertex {
  constructor(pos, type, opt) {
    this.pos = pos
    this.type = type
    this.opt = opt
    this.consumed = false
    this.fa = 0
    this.a = 0
    this.status = 'off'
    this.acc = 0
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
    this.acc += 0.1

    ctx.fillStyle = `rgba(255,255,255,${this.a})`
    if(this.type === 'data') {
      this.drawData()
    } else if(this.type === 'gate') {
        this.drawGate()
    } else if(this.type === 'start') {

    } else if(this.type === 'end') {
      this.drawEnd()
    } else {
      ctx.beginPath()
      ctx.arc(this.pos.x * 30, this.pos.y * 30, 3, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(255,255,255, 0.8)"
      ctx.strokeWidth = 2
      ctx.fillStyle = "#000"
      ctx.fill()
      ctx.stroke()

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
      this. delta = new Date().getTime() - this.lastUpdate
      this.fa = this.fa + this.delta / 1000
      if(this.fa > 1) {
        this.a = 1
        this.status = 'on'
      } else {
        this.a = this.fa
      }
      this.lastUpdate  = new Date().getTime()
    }
  }

  drawData() {
    ctx.beginPath()
    ctx.moveTo(this.pos.x * 30 - 15, Math.sin(0) * 10 + this.pos.y * 30)
    for(let i = 0; i < 30; i ++) {
      ctx.lineTo( i + this.pos.x * 30 - 15, Math.sin((i +this.acc) / 3) * 10 + this.pos.y * 30)
    }
    ctx.strokeStyle = "rgba(255,255,255, 0.3)"
    ctx.strokeWidth=1
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(this.pos.x * 30, (this.pos.y * 30 - 8) )
    ctx.lineTo( (this.pos.x * 30 + 8), this.pos.y * 30)
    ctx.lineTo(this.pos.x * 30, (this.pos.y * 30 + 8 ) )
    ctx.lineTo((this.pos.x  * 30 - 8) , this.pos.y * 30)
    ctx.lineTo(this.pos.x * 30, (this.pos.y * 30 - 8))

    if(this.consumed) {
      ctx.strokeStyle = `rgba(0,255,255,${this.a})`
      ctx.stroke()
    } else {
      ctx.fillStyle = `rgba(0,255,255,${this.a})`
      ctx.fill()
    }
    ctx.beginPath()
    ctx.arc(this.pos.x * 30, this.pos.y * 30, 18, 0, Math.PI * 2)
    ctx.strokeStyle="rgba(255,255,255,0.3)"
    ctx.stroke()
  }


  drawEnd() {
    ctx.beginPath()
    ctx.fillStyle = `rgba(255,255,255,${this.a})`
    ctx.arc(this.pos.x * 30, this.pos.y * 30, Math.cos(this.acc) * 2 + 5, 0, Math.PI * 2)
    ctx.fill()
  }

  drawGate() {

    for(let i = 0; i < this.opt; i ++) {
      if(p.dataCount > i) {
        ctx.beginPath()
        ctx.arc(Math.cos((2 * Math.PI / this.opt) * i) * 15 + this.pos.x * 30, Math.sin((2 * Math.PI / this.opt) * i) * 15 + this.pos.y * 30, 5, 0, Math.PI * 2)
        ctx.fillStyle= "#fff"
        ctx.fill()
      } else {
        ctx.beginPath()
        ctx.arc(Math.cos((2 * Math.PI / this.opt) * i) * 15 + this.pos.x * 30, Math.sin((2 * Math.PI / this.opt) * i) * 15 + this.pos.y * 30, 5, 0, Math.PI * 2)
        ctx.strokeStyle = "#fff"
        ctx.stroke()
      }
    }
    if (p.dataCount >= this.opt) {
      ctx.fillStyle = `rgba(30,150,170,${this.a})`
      ctx.beginPath()
      ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)
      ctx.strokeStyle = "#fff"
      ctx.stroke()

    } else {
      ctx.beginPath()
      ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)
      ctx.strokeStyle = "#911"
      ctx.fillStyle = `rgba(150,17,17,${this.a})`
      ctx.fill()



    }

  }

  reboot() {
    this.boot()
  }

}