import MenuManager from "./menu_manager";

const C_WIDTH = 400
const C_HEIGHT = 800
window.log=(m)=>console.log(m)
import P from './player'
import W from './network'
import k from './ctrl'
import {Editor} from './editor'
import Background from './background'
import home from './menus/home'
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
const editor = new Editor
const w = new W(netork0)
window.p = new P(netork0, w)
const background = new Background(netork0)
window.ctx = c.getContext('2d')
c.width = C_WIDTH
c.height = C_HEIGHT
ctx.fillStyle = '#000'
ctx.fillRect(0,0,C_WIDTH,C_HEIGHT)
let gameState = 'home'

let homeMenu = new MenuManager(home)

let ll = () => {
  c.width+=0
  background.l()
  background.d()
  if(gameState === 'home') {
    homeMenu.k()
    homeMenu.d()
  } else if(gameState === 'level-select') {

  } else if(gameState === 'game') {
    p.k() // player
    w.k() // world

    w.d()
    p.d()
  } else if(gameState === 'editor'){
    editor.d()
  }

  requestAnimationFrame(ll)
}
ll()


