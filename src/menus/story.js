export default class Story {
  constructor() {
    this.current = 0
    this.active = false
    this.texts = [
      'Ok the system seems to be shut down',
      'To restart it we need to reactivate the core',
      'Beware some link can be used only once'
    ]
  }

  set(level) {
    this.active = false
    this.text = this.texts[this.current]
    this.current++
  }

  k() {
    if(this.active) {
      if(press[k.B]) {
        this.start()
      }
    }
  }

  d() {
    if(this.active) {
      ctx.fillRect()
      ctx.fillText(this.text, 0,0)
    }
  }
}