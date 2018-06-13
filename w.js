import k from './k'
class W {
  constructor(t_size) {
    this.a = 0
    this.tiles = []
    this.t_size = t_size
    log('generate water')
    for(let i = 0; i <10; i ++) {
      for(let j = 0; j < 500; j ++) {
        this.tiles[i+j*10] = Math.random() < 0.1
      }
    }
  }
  k() {
    if(press[k.UP]) {
      this.a++
    }
  }
  d() {
    for(let i = 0; i < 10; i ++) {
      for(let j = 0; j < 500; j ++) {
        ctx.fillStyle = this.tiles[i+j*10] ? '#479' : '#999'
        ctx.fillRect(i*this.t_size,j*this.t_size+this.a, this.t_size, this.t_size)
      }
    }
  }
}

export default W

