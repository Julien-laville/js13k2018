import V2c from './lib/v2c'

class W {
  constructor(map) {
    this.w = map.w
    this.h = map.h

    this.vertices = []//[{pos : new V2c(0, 1), id : 0}, {pos : new V2c(1, 1), id : 1}]
    this.optiEdges = []//[{from : new V2c(0, 1), to : new V2c(1, 1)}]
    this.nodes = []//[{from : new V2c(0, 1), to : new V2c(1, 1)}]

    map.vertices.forEach((vertex) => {
      let pos = new V2c(vertex.id % this.w, Math.floor(vertex.id / this.w))
      this.vertices.push({pos : pos, type : vertex.t, opt : vertex.th})
    })

    map.edges.forEach((edge) => {
      let from = new V2c(edge[0] % this.w, Math.floor(edge[0] / this.w))
      let to = new V2c(edge[1] % this.w, Math.floor(edge[1] / this.w))
      this.optiEdges.push({from : from, to : to})
      if(!this.nodes.find((node) => node.x === from.x && node.y === from.y)) {
        this.nodes.push(from)
      }
      if(!this.nodes.find((node) => node.x === to.x && node.y === to.y)) {
        this.nodes.push(to)
      }
    })
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
    this.nodes.forEach((node) => {
      ctx.beginPath()
      ctx.arc(node.x * 30, node.y * 30, 5, 0, Math.PI * 2)
      ctx.fill()
    })
    ctx.fillStyle = '#0ff'
    this.vertices.forEach((vertex) => {
      if(vertex.type === 'data') {
        ctx.fillRect(vertex.pos.x * 30-5, vertex.pos.y * 30-5, 10, 10)
      }
    })
  }
}

export default W

