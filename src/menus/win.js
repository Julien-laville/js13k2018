export default class Win {
  constructor() {
    this.credits = [
      'Freely inspired by LOSSST by Xem',
      '',
      'Hardcoded by alternative',
      '',
      'Thanks to:',
      'Anouk',
      'Adrien',
      'JB',
      'Antoine',
      'for supporting & testing'
    ]
    this.cd = 100
  }

  d() {
    ctx.font = "22px Arial"
    ctx.fillStyle = '#fff'
    this.cd -= .4
    ctx.fillText('You win', 10, this.cd)
    ctx.font = "18px Arial"
    for(let i = 0; i < this.credits.length; i++) {
      ctx.fillText(this.credits[i], 10, this.cd + i * 40 + 20)
    }
  }
}