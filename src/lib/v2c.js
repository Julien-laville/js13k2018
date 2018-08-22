class V2c {
  constructor(x,y) {
    this.x = x; this.y = y
  }
  fillRect(w,h) {
    ctx.fillRect(this.x - w / 2,this.y - h / 2,w,h)
  }
  set(x,y) {
    this.x=x;this.y=y
    return this
  }
  cadd(x, y) {
    let n = new V2c(this.x, this.y)
    n.add(new V2c(x, y))
    return n
  }
  add(v) {
    this.x+=v.x;this.y+=v.y
    return this
  }
  eq(v) {
    return this.x === v.x && this.y === v.y
  }
}

export  default  V2c