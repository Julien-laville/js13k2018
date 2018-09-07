import V2c from "./lib/v2c";
import k from './ctrl'
class P {
  constructor() {
    this.moving = false
  }

  setLevel(map, network) {
    this.w = map.w
    let start = map.vertices.find((vertex) =>
      vertex.t === 'start'
    )
    this.pos = new V2c(start.id % this.w, Math.floor(start.id / this.w))

    this.edges = network.edges
    this.vertices = network.vertices

    this.dataCount = 0
  }

  k() {
    if(press[k.HELP]) {
      window.gameState = 'help'
    }

    if(!this.moving) {
      let futureRoute
      if(press[k.LEFT]) {
        let p = this.pos.cadd(-1,0)
        futureRoute = {from : this.pos, to : p}
        let route = this.isRouteExist(futureRoute)
        if(route && route.isAvailable()) {
          route.consume()
          this.pos = p
          this.move()
        }

      }
      if(press[k.RIGHT]) {
        console.log("right")
        let p = this.pos.cadd(1,0)
        futureRoute = {from : this.pos, to : p}
        let route = this.isRouteExist(futureRoute)
        if(route && route.isAvailable()) {
          route.consume()
          this.pos = p
          this.move()
        }
      }
      if(press[k.UP]) {
        let p = this.pos.cadd(0,-1)
        futureRoute = {from : this.pos, to : p}
        let route = this.isRouteExist(futureRoute)
        if(route && route.isAvailable()) {
          route.consume()
          this.pos = p
          this.move()
        }
      }
      if(press[k.DOWN]) {
        let p = this.pos.cadd(0,1)
        futureRoute = {from : this.pos, to : p}
        let route = this.isRouteExist(futureRoute)
        if(route && route.isAvailable()) {
          route.consume()
          this.pos = p
          this.move()
        }
      }
    }
  }

  isRouteExist(route) {
    let edge =  this.edges.find((edge) => {
      return (edge.from.eq(route.from) && edge.to.eq(route.to)) || (edge.from.eq(route.to) && edge.to.eq(route.from))
    });
    return edge
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
    ctx.fillStyle = "#fff"
    ctx.fillText(this.dataCount, this.pos.x * 30 + 10, this.pos.y * 30 - 10)
  }

  move() {
      this.moving = true
      this.vertices.forEach((vertex) => {
        if(vertex.pos.eq(this.pos) && vertex.type === 'data' && vertex.status !== false) {
          this.dataCount++
          vertex.consume()
        }
        if(vertex.pos.eq(this.pos) && vertex.type === 'end') {
          nextLevel()
        }
      })
      setTimeout(() => {
          this.moving = false
      }, 250)
  }
}

export default P