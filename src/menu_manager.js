import MenuItem from "./menu_item";
import V2c from "./lib/v2c";
import k from "./ctrl";
window.imageridle = true
export default class MenuManager {
  constructor(title, items, isLevel) {
    this.title = title
    this.isLevel = isLevel
    this.current = 0

    this.items = []
      if(this.isLevel) {
          items.forEach((item, i) => {
              this.items.push(new MenuItem({t:`Level ${i}`}, new V2c(30, i * 50 + 100), i === 0))
          })
      } else {
          items.forEach((item, i) => {
              this.items.push(new MenuItem(item, new V2c(30, i * 50  + 100), i === 0))
          })
      }
  }

  d() {
    ctx.font = '32px Arial'
    ctx.fillStyle = "#fff"
    ctx.fillText(this.title, 40,40)
    this.items.forEach((item) => {
      item.d()
    })
  }
  wait() {
    window.imageridle = false
    setTimeout(() => {
      window.imageridle = true
    }, 150)
  }

  k() {
    if(window.imageridle) {
      if(press[k.UP]) {
        if(this.current > 0) {
          this.current --
        }
        this.wait()
      } if(press[k.DOWN]) {
        if(this.current < this.items.length - 1) {
          this.current ++
        }
        this.wait()
      }
      if(press[k.B]) {
        if(this.isLevel) {
            setLevel(this.current)
            window.gameState = 'play'
        } else if(this.items[this.current].gameState === 'play') {
          setLevel(0)
        } else {
          window.gameState = this.items[this.current].gameState
        }
        if(window.gameState === 'editor') {
          openEdit()
        }
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