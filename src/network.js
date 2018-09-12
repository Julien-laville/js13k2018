import V2c from './lib/v2c'
import {Vertex} from "./vertex";
import {Edge} from "./edge";

class W {
  constructor(map) {
    this.map = map
    this.w = map.w
    this.h = map.h

    this.vertices = []//[{pos : new V2c(0, 1), id : 0}, {pos : new V2c(1, 1), id : 1}]
    this.edges = []//[{from : new V2c(0, 1), to : new V2c(1, 1)}]
    this.buildNetwork(this.map)
  }

  reset() {
    this.buildNetwork(this.map)
    this.reboot()
  }

  buildNetwork() {
    this.vertices = []
    this.edges = []
    this.map.vertices.forEach((vertex) => {
      let pos = new V2c(vertex.id % this.w, Math.floor(vertex.id / this.w))
      this.vertices.push(new Vertex(pos, vertex.t, vertex.th))
    })

    this.map.edges.forEach((edge) => {
      let fromPos = new V2c(edge[0] % this.w, Math.floor(edge[0] / this.w))
      let toPos = new V2c(edge[1] % this.w, Math.floor(edge[1] / this.w))
      this.edges.push(new Edge(fromPos, toPos,  edge[2]))

      if(!this.vertices.find((node) => node.pos.eq(fromPos))) {
        this.vertices.push(new Vertex(fromPos, 'n'))
      }
      if(!this.vertices.find((node) => node.pos.eq(toPos))) {
        this.vertices.push(new Vertex(toPos))
      }
    })
  }

  k() {
    this.edges.forEach((edge) => {
      edge.k()
    })
    this.vertices.forEach((vertex) => {
      vertex.k()
    })
  }


  d() {
    this.edges.forEach((edge) => {
      edge.d()
    })
    this.vertices.forEach((vertex) => {
      vertex.d()
    })
  }

  /* sfx */

  reboot() {
    this.edges.forEach((edge) => {
      edge.reboot()
    })
    this.vertices.forEach((vertex) => {
      vertex.reboot()
    })
  }

  boot() {
    this.edges.forEach((edge) => {
      edge.boot()
    })
    this.vertices.forEach((vertex) => {
      vertex.boot()
    })
  }
}

export default W

