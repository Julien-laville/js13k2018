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
  add(v) {
    this.x+=v.x;this.y+=v.y
    return this
  }
}

export  default  V2c