export default class Win {
  constructor() {
    this.credits = [
      'Freely inspired by LOSSST by Xem',
      'hardcoded by alternative'
    ]
    this.cd = 100
  }

  d() {
    ctx.fillStyle = '#fff'
    this.cd -= .4
    ctx.fillText('You win', 10, this.cd)
    for(let i = 0; i < this.credits.length; i++) {
      ctx.fillText(this.credits[i], 10, this.cd + i * 20 + 20)
    }
  }
}