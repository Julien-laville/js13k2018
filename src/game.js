const C_WIDTH = 400
const C_HEIGHT = 800
const T_SIZE = 30
window.log=(m)=>console.log(m)
import P from './src/p'
import W from './w'
import k from './src/k'
k()
const p = new P()
const w = new W(T_SIZE)

window.ctx = c.getContext('2d')
c.width = C_WIDTH
c.height = C_HEIGHT
ctx.fillStyle = '#000'
ctx.fillRect(0,0,C_WIDTH,C_HEIGHT)

let ll = () => {
  c.width+=0
  p.k() // player
  w.k() // world

  w.d()
  p.d()

  requestAnimationFrame(ll)
}
ll()


