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
      let futureRoute
      if(press[k.LEFT]) {
        let p = this.pos.cadd(-1,0)
        futureRoute = {a : this.pos, b : p}
        if(this.isRouteExist(futureRoute)) {
          this.pos = p
          this.move()
        }

      }
      if(press[k.RIGHT]) {
        console.log("right")
        let p = this.pos.cadd(1,0)
        futureRoute = {a : this.pos, b : p}
        console.log(futureRoute)
        if(this.isRouteExist(futureRoute)) {
          console.log("exist")
          this.pos = p
          this.move()
        }
      }
      if(press[k.UP]) {
        let p = this.pos.cadd(0,-1)
        futureRoute = {a : this.pos, b : p}
        if(this.isRouteExist(futureRoute)) {
          this.pos = p
          this.move()
        }
      }
      if(press[k.DOWN]) {
        let p = this.pos.cadd(0,1)
        futureRoute = {a : this.pos, b : p}
        if(this.isRouteExist(futureRoute)) {
          this.pos = p
          this.move()
        }
      }
    }
  }

  isRouteExist(route) {
    return this.optiEdges.find((optiEdge) => {
      return (optiEdge.a.eq(route.a) && optiEdge.b.eq(route.b)) || (optiEdge.a.eq(route.b) && optiEdge.b.eq(route.a))
    })
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
      this.moving = true
      setTimeout(() => {
          this.moving = false
      }, 500)
  }
}

export default P