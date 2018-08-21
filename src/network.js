import V2c from './lib/v2c'

class W {
  constructor() {
    this.verctrices = [{pos : new V2c(0, 1), id : 0}, {pos : new V2c(1, 1), id : 1}]
    this.optiEdges = [{from : new V2c(0, 1), to : new V2c(1, 1)}]
  }

  k() {

  }

  d() {
    this.optiEdges.forEach((edge) => {
      ctx.beginPath()
      ctx.moveTo(edge.from.x * 30, edge.from.y * 30)
      ctx.lineTo(edge.to.x * 30, edge.to.y * 30)
      ctx.strokeStyle = "#ff0000"
      ctx.lineWidth = 5
      ctx.stroke()
    })

    ctx.fillStyle = '#fff'
    this.verctrices.forEach((vertex) => {
      ctx.beginPath()
      ctx.arc(vertex.pos.x * 30, vertex.pos.y * 30, 5, 0, Math.PI * 2)
      ctx.fill()
    })
  }
}

export default W

