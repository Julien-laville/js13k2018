import MenuItem from "./menu_item";
import V2c from "./lib/v2c";
import k from "./ctrl";

export default class MenuManager {
  constructor(items) {
    this.current = 0
    this.idle = true
    this.items = []
    items.forEach((item, i) => {
      this.items.push(new MenuItem(item, new V2c(30, i * 30 + 50), i === 0))
    })
  }

  d() {
    this.items.forEach((item) => {
      item.d()
    })
  }
  wait() {
    this.idle = false
    setTimeout(() => {
      this.idle = true
    }, 150)
  }

  k() {
    if(this.idle) {
      if(press[k.UP]) {
        this.current --
        this.wait()
      } if(press[k.DOWN]) {
        this.current ++
        this.wait()
      }
      if(press[k.B]) {
        window.gameState = this.items[this.current].gameState
        this.wait()
      }
    }
    this.items.forEach((item,i) => {
      if(i === this.current) {
        item.current = true
      } else {
        item.current = false
      }
    })
  }
}