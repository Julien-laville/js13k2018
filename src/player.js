import V2c from "./lib/v2c";
import k from './ctrl'
class P {
  constructor() {
    this.p = new V2c(100,700)
    this.s = new V2c(0,0)



  }
  k() {
    if(press[k.LEFT]) { // up
      this.p.add(this.s.set(30,0))
    }

    if(press[k.RIGHT]) { //left
      this.p.add(this.s.set(-30,0))
    }
  }
  d() {
    ctx.fillStyle='#fff'
    this.p.fillRect(20,20)
  }
}

export default P