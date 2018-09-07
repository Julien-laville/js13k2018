import k from '../ctrl'

export default class help {
  d() {
    ctx.fillStyle = 'rgba(0,0,0,.5)'
    ctx.fillRect(20,20, C_WIDTH - 40, C_HEIGHT - 40)
    ctx.fillStyle = '#85e2ff'
    ctx.fillText('Data', 100, 100)
  }

  k() {
    if(!press[k.HELP]) {
      window.gameState = 'play'
    }
    return this
  }
}