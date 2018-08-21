import V2c from "./lib/v2c";
import k from './ctrl'
class P {
  constructor(map) {
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
    setTimeout(() => {
      this.moving = false
    }, 1000)
    if(this.moving) {
      if(press[k.LEFT])
        this.pos.add(new V2c(-1,0)); this.moving = true
      if(press[k.RIGHT])
        this.pos.add(new V2c(1,0)); this.moving = true
      if(press[k.UP])
        this.pos.add(new V2c(0,-1)); this.moving = true
      if(press[k.DOWN])
        this.pos.add(new V2c(0,1)); this.moving = true
    }


  }
  d() {
    ctx.beginPath()
    ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)
    ctx.fillStyle='#f0f'
    ctx.fill()
  }

  move(direction) {
    this.optiEdges.forEach(() => {

    })
  }
}

export default P