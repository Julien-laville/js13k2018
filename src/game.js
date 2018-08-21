const C_WIDTH = 400
const C_HEIGHT = 800
const T_SIZE = 30
window.log=(m)=>console.log(m)
import P from './player'
import W from './network'
import k from './ctrl'
import Background from './background'
k()
const p = new P()
const w = new W(T_SIZE)
const background = new Background()
window.ctx = c.getContext('2d')
c.width = C_WIDTH
c.height = C_HEIGHT
ctx.fillStyle = '#000'
ctx.fillRect(0,0,C_WIDTH,C_HEIGHT)

let ll = () => {
  c.width+=0
  background.l()
  p.k() // player
  w.k() // world

  background.d()
  w.d()
  p.d()

  requestAnimationFrame(ll)
}
ll()


