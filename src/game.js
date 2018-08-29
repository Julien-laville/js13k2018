const C_WIDTH = 400
const C_HEIGHT = 800
window.log=(m)=>console.log(m)
import P from './player'
import W from './network'
import k from './ctrl'
import Background from './background'
k()


const netork0 = {
  w:5,
  h:5,
  edges : [
    [2,7,-1],
    [6,7,1],
    [7,8,1],
    [10,11,1],
    [6,11,1],
    [7,12,1],
    [8,13,1],
    [11,12,1],
    [13,14,1],
    [11,16,1],
    [13,18,1],
    [16,17,1],
    [17,18,1],
    [17,22,-1],
  ],
  vertices : [
    {id : 10, t : 'start'},
    {id : 2, t : 'data'},
    {id : 14, t : 'gate', th : 2},
    {id : 22, t : 'data'}
  ]
}

const w = new W(netork0)
window.p = new P(netork0, w)
const background = new Background(netork0)
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


