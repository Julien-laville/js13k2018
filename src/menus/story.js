import k from './../ctrl'

export default class Story {
  constructor() {
    this.current = 0
    this.active = false
    this.currentLine = 0
    this.lastUpdate = 0
    this.dialogs = [[
     'You exprience a network failure',
       'To activate network you have to reach the core',
       'Move with [arrows]',
        'Press [R] to reset the level'
    ],
    [
      'You have to gather data to move across restricted access'
    ],
      [
        'Use [ctrl.] to place a beacon, you will be brought back after 5 seconds',
        'or by pressing [ctrl.] again'
      ],

    ]
  }

  set() {
    this.current = 0
    this.currentLine = 0
    this.active = true
    this.lastUpdate = new Date().getTime()
    this.current = currentLevel
    this.dialog = this.dialogs[this.current]
    if(this.dialog) {
      this.active = true
    } else {
      this.active = false
      this.start()
    }
  }

  k() {

    if(this.active) {
      let d = new Date().getTime() - this.lastUpdate
      this.count = d / 30
      if(this.count > this.dialog[this.currentLine].length && this.dialog.length > this.currentLine + 1) {
        this.currentLine ++
        this.count = 0
        this.lastUpdate = new Date().getTime()
      }

      if(this.dialog.length === this.currentLine + 1 && this.dialog[this.currentLine].length < this.count) {
        this.h = setTimeout(() => {
          this.start()
          this.h = null
        }, 5000)
      }

      if(press[k.ESC]) {
        this.start()
        clearTimeout(this.h)
        this.h = null
      }
    }


  }

  start() {
    this.active = false
    this.currentLetter = 0
    startLevel()
  }

  d() {
    if(this.active) {
      ctx.font = '18px Arial'
      ctx.fillStyle = '#121314'
      ctx.fillRect(0,0, C_WIDTH, 150)
      ctx.fillStyle= '#4ddfe2'

      for(let i = 0; i < this.currentLine; i ++) {
        ctx.fillText(this.dialog[i], 0, 30 + i * 30)
      }

      let text = this.dialog[this.currentLine]
      let subText = text.substr(0, this.count)
      ctx.fillText(subText, 0, 30 + this.currentLine * 30)

      ctx.beginPath()
      ctx.rect(C_WIDTH - 100, 120, 80, 20)
      ctx.strokeStyle = "#fff"
      ctx.strokeWidth= 2
      ctx.stroke()
      ctx.fillStyle = "#fff"
      ctx.font = '14px Arial'
      ctx.fillText('Esc to skip', C_WIDTH - 95, 135)
    }
  }
}