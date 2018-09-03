import V2c from "./lib/v2c";
import {Vertex} from "./vertex";
import {Edge} from "./edge";

export class Editor {
  constructor() {
    this.w = 10
    this.h = 10
    this.edges = []
    this.vertices = []
    this.pen = null
    this.currentItem = null
    this.penPos = new V2c()
    dataB.onclick = () => {
      this.pen = 'data'
    }
    dataB.onclick = () => {
      this.pen = 'start'
    }
    gateB.onclick = () => {
      this.pen = 'gate'
    }
    c.onclick = (e) => {
      if(this.pStance() < 6) {
        let p = new V2c(Math.floor((e.offsetX + 15) / 30) ,
          Math.floor((e.offsetY + 15) / 30))
        let v = new Vertex(p, this.pen, 0)
        let vfind = this.vertices.find(vertex => (vertex.pos.eq(p)))
        if(vfind) {
          this.currentItem = vfind
        } else {
          this.vertices.push(v)
          this.currentItem = v
        }
        this.updateCurrent()
      }
      /* edges */

      /* h line */

      let xDiff =  this.penPos.x - Math.floor((this.penPos.x) / 30) * 30
      let yDiff =  this.penPos.y - Math.floor((this.penPos.y + 15) / 30) * 30
      if(xDiff > 6 && xDiff < 24 && yDiff < 6 && yDiff > -6) {
        let fx = Math.floor((this.penPos.x) / 30)
        let fy = Math.floor((this.penPos.y + 15) / 30)
        let f = new V2c(fx, fy)
        let to = new V2c(fx + 1, fy)
        let e = new Edge(f, to, 1)
        let efind = this.edges.find(edge => (edge.from.eq(f) && edge.to.eq(to)))
        if(efind) {
          this.currentItem = efind
        } else {
          this.edges.push(e)
          this.currentItem = e
        }

        this.updateCurrent()
      }

      /* v lines */

      xDiff =  this.penPos.x - Math.floor((this.penPos.x + 15) / 30) * 30
      yDiff =  this.penPos.y - Math.floor((this.penPos.y ) / 30) * 30

      if(yDiff > 6 && yDiff < 24 && xDiff > -6 && xDiff < 6) {
        let fx = Math.floor((this.penPos.x + 15) / 30)
        let fy = Math.floor((this.penPos.y ) / 30)
        let f = new V2c(fx, fy)
        let to = new V2c(fx, fy + 1)
        let e = new Edge(f, to, 1)
        this.edges.push(e)
        this.currentItem = e
        this.updateCurrent()
      }

    }

    setting.onchange = () => {
      if(this.currentItem instanceof Edge) {
        this.currentItem.remaining = parseInt(setting.value)
      } else {
        this.currentItem.opt = parseInt(setting.value)
      }
    }


    c.onmousemove = (e) => {
      this.penPos.set(e.offsetX, e.offsetY)
    }
  }

  d() {
    ctx.fillRect(0,0,100,100)
    for(let i = 0; i < this.w; i ++) {
      for(let j = 0; j < this.h; j ++) {
        ctx.beginPath()
        ctx.arc(i * 30, j * 30, 6, 0, Math.PI * 2)
        ctx.strokeStyle = '#fff'
        ctx.stroke()
      }
    }
    for(let i = 0; i < this.w; i ++) {
      ctx.beginPath()
      ctx.moveTo(0, 30 * i)
      ctx.lineTo(this.w * 30 - 30, 30 * i)
      ctx.strokeStyle = 'rgba(255,0,0,0.4)'
      ctx.stroke()
    }

    for(let i = 0; i < this.h; i ++) {
      ctx.beginPath()
      ctx.moveTo(30 * i, 0)
      ctx.lineTo(30 * i, this.h * 30 - 30)
      ctx.strokeStyle = 'rgba(255,0,0,0.4)'
      ctx.stroke()
    }

    ctx.beginPath()

    let s = this.pStance()

    if(s < 6) {
      ctx.arc(Math.floor((this.penPos.x + 15) / 30) * 30, Math.floor((this.penPos.y + 15) / 30) * 30, 8, 0, Math.PI * 2)
      ctx.fillStyle = '#fff'
      ctx.fill()
    }

    /* h lines */
    ctx.fillStyle = '#09c'

    let xDiff =  this.penPos.x - Math.floor((this.penPos.x) / 30) * 30
    let yDiff =  this.penPos.y - Math.floor((this.penPos.y + 15) / 30) * 30
    if(xDiff > 6 && xDiff < 24 && yDiff < 6 && yDiff > -6) {
      ctx.fillRect(Math.floor((this.penPos.x) / 30) * 30, Math.floor((this.penPos.y + 15) / 30) * 30 - 5, 30 , 10)
    }

    /* v lines */

    xDiff =  this.penPos.x - Math.floor((this.penPos.x + 15) / 30) * 30
    yDiff =  this.penPos.y - Math.floor((this.penPos.y ) / 30) * 30

    if(yDiff > 6 && yDiff < 24 && xDiff > -6 && xDiff < 6) {
      ctx.fillRect(Math.floor((this.penPos.x + 15) / 30) * 30 - 5, Math.floor((this.penPos.y ) / 30) * 30, 10 , 30)
    }

    this.vertices.forEach((vertex) => {
      vertex.de()
    })

    this.edges.forEach((edge) => {
      edge.de()
    })


    if(this.currentItem) {
      if(this.currentItem instanceof Edge) {
        ctx.beginPath()
        ctx.moveTo(this.currentItem.from.x * 30, this.currentItem.from.y * 30)
        ctx.lineTo(this.currentItem.to.x * 30, this.currentItem.to.y * 30)
        ctx.strokeStyle = '#ff8919'
        ctx.stroke()
      } else {
        ctx.beginPath()
        ctx.strokeStyle = '#ff8919'
        ctx.arc(this.currentItem.pos.x * 30, this.currentItem.pos.y * 30, 8, 0 , Math.PI * 2)
        ctx.stroke()
      }
    }


  }
  pStance() {
    return new V2c(Math.floor((this.penPos.x + 15) / 30) * 30,
      Math.floor((this.penPos.y + 15) / 30) * 30).stance(new V2c(this.penPos.x, this.penPos.y))
  }


  updateCurrent() {
    if(this.currentItem instanceof Edge) {
      setting.value = this.currentItem.remaining
      type.innerHTML = 'Edge'
    } else {
      setting.value = this.currentItem.opt
      type.innerHTML = 'Vertex'
    }

  }


}

