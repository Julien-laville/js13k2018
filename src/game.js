import MenuManager from "./menu_manager";
import maps from './maps/maps'
window.C_WIDTH = 800
window.C_HEIGHT = 400
import P from './player'
import W from './network'
import k from './ctrl'
import {Editor} from './editor'
import Background from './background'
import home from './menus/home'
import Win from './menus/win'
import Help from './menus/help'
import Hint from './menus/hint'
window.hint = new Hint()
k()
window.currentLevel = 0

const win = new Win()
const help = new Help()
const editor = new Editor()
let w = new W(maps[currentLevel])
window.p = new P()
window.p.setLevel(maps[currentLevel], w)

window.nextLevel = () => {
  currentLevel++
  if(currentLevel === maps.length) {
    window.gameState = 'win'
    return
  }
  w = new W(maps[currentLevel])
  window.p.setLevel(maps[currentLevel], w)
}

const background = new Background()
window.ctx = c.getContext('2d')

c.width = C_WIDTH
c.height = C_HEIGHT

ctx.fillStyle = '#000'
ctx.fillRect(0,0,C_WIDTH,C_HEIGHT)
window.gameState = 'home'

let homeMenu = new MenuManager('Disssconnected', home)
let selectLevelMenu = new MenuManager('Select Level', maps)
hint.show(2)
let ll = () => {
  c.width+=0
  background.l()
  background.d()
  if(gameState === 'home') {
    homeMenu.k()
    hint.d(2)
    homeMenu.d()
  } else if(gameState === 'level-select') {
    selectLevelMenu.k()
    selectLevelMenu.d()
  } else if(gameState === 'play') {
    p.k()

    w.d()
    p.d()
    hint.d()
  } else if(gameState === 'editor'){
    editor.d()
  } else if(gameState === 'win') {
    win.d()
  } else if(gameState === 'help') {
    help.k().d()
  }

  requestAnimationFrame(ll)
}
ll()


