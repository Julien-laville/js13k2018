import MenuManager from "./menu_manager";
import maps from './maps/maps'
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
window.currentLevel = 0


const editor = new Editor
const w = new W(maps[currentLevel])
window.p = new P(maps[currentLevel], w)

const background = new Background()
window.ctx = c.getContext('2d')

c.width = C_WIDTH
c.height = C_HEIGHT

ctx.fillStyle = '#000'
ctx.fillRect(0,0,C_WIDTH,C_HEIGHT)
window.gameState = 'home'

let homeMenu = new MenuManager('Disssconnected', home)
let selectLevelMenu = new MenuManager('', home, 2)

let ll = () => {
  c.width+=0
  background.l()
  background.d()
  if(gameState === 'home') {
    homeMenu.k()
    homeMenu.d()
  } else if(gameState === 'level-select') {

  } else if(gameState === 'play') {
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


