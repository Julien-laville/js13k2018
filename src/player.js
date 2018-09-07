import V2c from "./lib/v2c";
import k from './ctrl'
class P {
  constructor() {
    this.moving = false
  }

  setLevel(map, network) {
    this.map = map
    this.w = map.w
    let start = map.vertices.find((vertex) =>
      vertex.t === 'start'
    )
    this.pos = new V2c(start.id % this.w, Math.floor(start.id / this.w))

    this.edges = network.edges
    this.vertices = network.vertices
    this.ttl = map.ttl
    this.network = network
    this.dataCount = 0
  }

  reset() {
    this.network.reset()
    let start = this.map.vertices.find((vertex) =>
      vertex.t === 'start'
    )
    this.pos = new V2c(start.id % this.w, Math.floor(start.id / this.w))
    this.ttl = this.map.ttl
  }

  k() {
    if(press[k.HELP]) {
      window.gameState = 'help'
    }

    if(press[k.RESET]) {
      this.reset()
    }

    if(!this.moving) {
      let futureRoute
      if(press[k.LEFT]) {
        let p = this.pos.cadd(-1,0)
        futureRoute = {from : this.pos, to : p}
        if(this.checkMove(futureRoute)) {
          this.pos = p
          this.move()
        }
      }
      if(press[k.RIGHT]) {
        console.log("right")
        let p = this.pos.cadd(1,0)
        futureRoute = {from : this.pos, to : p}
        if(this.checkMove(futureRoute)) {
          this.pos = p
          this.move()
        }
      }
      if(press[k.UP]) {
        let p = this.pos.cadd(0,-1)
        futureRoute = {from : this.pos, to : p}
        if(this.checkMove(futureRoute)) {
          this.pos = p
          this.move()
        }
      }
      if(press[k.DOWN]) {
        let p = this.pos.cadd(0,1)
        futureRoute = {from : this.pos, to : p}
        if(this.checkMove(futureRoute)) {
          this.pos = p
          this.move()
        }
      }
    }
  }

  getRoute(route) {
    return this.edges.find((edge) => {
      return (edge.from.eq(route.from) && edge.to.eq(route.to)) || (edge.from.eq(route.to) && edge.to.eq(route.from))
    })
  }

  checkMove(route) {
    this.handleMove()
    let availableRoute = this.getRoute(route)
    if(availableRoute && availableRoute.isAvailable()) {

      if(this.ttl < 1) {
        window.hint.show(1)
        return false
      } else {
        this.ttl --
      }
      availableRoute.consume()
      return true
    }
    return false
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
    ctx.fillText(this.ttl, this.pos.x * 30 + 10, this.pos.y * 30 - 10)
  }

  handleMove() {
    this.moving = true
    setTimeout(() => {
      this.moving = false
    }, 250)
  }

  move() {
    this.vertices.forEach((vertex) => {
      if(vertex.pos.eq(this.pos) && vertex.type === 'data' && vertex.status !== false) {
        this.dataCount++
        vertex.consume()
      }
      if(vertex.pos.eq(this.pos) && vertex.type === 'end') {
        nextLevel()
      }
    })

  }
}

export default P