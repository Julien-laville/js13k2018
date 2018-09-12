import k from '../ctrl'
import {Vertex} from "../vertex";
import V2c from "../lib/v2c";

export default class help {
  constructor() {
    this.data = new Vertex(new V2c(3,3), 'data', 1)
    this.data.consumed = false
    this.data.a = 1
    this.gateOpen = new Vertex(new V2c(3,4), 'gate', 0)
    this.gateOpen.a = 1
    this.gateClosed = new Vertex(new V2c(3,5), 'gate', 2)
    this.gateClosed.a = 1
  }
  d() {
    ctx.font = "16px Arial"
    ctx.fillStyle = 'rgba(0,0,0,.5)'
    ctx.fillRect(20,20, C_WIDTH - 40, C_HEIGHT - 40)
    ctx.fillStyle = '#8f949a'
    ctx.fillText('Data', 120, 95)
    ctx.fillText('Open gate', 120, 125)
    ctx.fillText('Closed gate', 120, 155)
    this.data.d()

    this.gateOpen.d()
    this.gateClosed.d()
  }

  k() {
    if(!press[k.HELP]) {
      window.gameState = 'play'
    }
    return this
  }
}