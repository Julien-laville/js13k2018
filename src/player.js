import V2c from "./lib/v2c";
import k from './ctrl'
import {Beacon} from "./beacon";
class P {
  constructor() {
    this.moving = false
    this.beacon = new Beacon()
  }

  setLevel(map, network) {
    this.map = map
    this.w = map.w
    let start = map.vertices.find((vertex) =>
      vertex.t === 'start'
    )
    this.totalDataCount = 0
    map.vertices.forEach((vertex) => {
        if (vertex.t === 'data') {
          this.totalDataCount++
        }
      }
    )

    this.pos = new V2c(start.id % this.w, Math.floor(start.id / this.w))

    this.edges = network.edges
    this.vertices = network.vertices
    this.ttl = map.ttl
    this.network = network
    this.dataCount = 0
    this.beacon.reset()
  }

  reset() {
    this.network.reset()
    this.edges = this.network.edges
    this.vertices = this.network.vertices
    let start = this.map.vertices.find((vertex) =>
      vertex.t === 'start'
    )
    this.pos = new V2c(start.id % this.w, Math.floor(start.id / this.w))
    this.ttl = this.map.ttl
  }

  k() {
    this.beacon.k()
    if(press[k.HELP]) {
      window.gameState = 'help'
    }

    if(press[k.RESET]) {
      this.reset()
    }

    if(press[k.A]) {
      this.beacon.placeBeacon(this.pos)
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
    this.beacon.d()
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

    /* draw ttl */
    for(let i = 0; i < this.ttl; i++) {
      ctx.fillStyle="#3e70ea"
      ctx.fillRect(10 + 8 * i, 10, 4 , 4)
    }
    /* draw data */
    for(let i = 0 ; i < this.totalDataCount; i ++) {
      ctx.fillStyle="#3e70ea"
      if(i >= this.dataCount) {
        ctx.beginPath()
        ctx.rect(10 + 12 * i, 20, 8 , 8)
        ctx.strokeStyle="#4671f7"
        ctx.setLineDash([])
        ctx.stroke()
      } else {
        ctx.fillStyle="#4671f7"
        ctx.fillRect(10 + 12 * i, 20, 8 , 8)
      }
    }


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