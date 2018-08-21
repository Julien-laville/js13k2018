class Background {
  constructor() {
    this.cells = []
    for(let i = 0; i < 30*30; i++) {
      this.cells.push(
        Math.floor(Math.random() * 100)
      )
    }
  }

  d() {

    for(let i = 0; i < 30 * 30; i ++) {
      ctx.fillStyle = `rgba(150,0,0,${this.cells[i] / 100})`
      ctx.fillRect(i * 30, i * 30 + (i % 30) * 30, 30, 30)
    }

  }


  l() {
    for(let i = 0; i < 30 * 30; i ++) {
      if(this.cells[i] < 100)
        this.cells[i] += 1
      else
        this.cells[i] = 0
    }
  }


}

export default Background