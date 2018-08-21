import V2c from "./lib/v2c";
import k from './ctrl'
class P {
  constructor(map) {
    this.moving = false
    this.w = map.w
    let start = map.vertices.find((vertex) =>
      vertex.t === 'start'
    )
    this.pos = new V2c(start.id % this.w, Math.floor(start.id / this.w))
    this.optiEdges = []

    map.edges.forEach((edge) => {
      let a = new V2c(edge[0] % this.w, Math.floor(edge[0] / this.w))
      let b = new V2c(edge[1] % this.w, Math.floor(edge[1] / this.w))
      this.optiEdges.push({a : a, b : b})
    })

  }
  k() {

    if(!this.moving) {
      if(press[k.LEFT])
        this.pos.add(new V2c(-1,0)), this.move()
      if(press[k.RIGHT])
        this.pos.add(new V2c(1,0)),  this.move()
      if(press[k.UP])
        this.pos.add(new V2c(0,-1)), this.move()
      if(press[k.DOWN])
        this.pos.add(new V2c(0,1)), this.move()
    }


  }
  d() {
    ctx.beginPath()
    ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)
      if(this.move) {
          ctx.fillStyle='#f0f'
      } else {
          ctx.fillStyle='#0f0'
      }

    ctx.fill()
  }

  move() {
    log("test")
      this.moving = true
      setTimeout(() => {
          this.moving = false
      }, 500)
  }
}

export default P