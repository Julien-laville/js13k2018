import Particle from './particle'
import V2c from "./lib/v2c";
export default class ParticlePool {
  constructor() {
    this.particles = []
  }

  addInToOut(pos) {
    this.particles = []
    for(let i = 0; i < 100; i ++) {
      let particle = new Particle(Math.random() * 2 * Math.PI, pos, 188, 0.4, 1000)
      this.particles.push(particle)
    }
  }

  addOutToIn(pos) {
    for(let i = 0; i < 100; i ++) {
      let angle = Math.random() * 2 * Math.PI
      let particle = new Particle(-angle, new V2c(pos.x + 15 * Math.cos(angle), pos.y + 15 * Math.sin(angle)), 354, 0.4, 1000)
      this.particles.push(particle)
    }
  }

  d() {
    for(let i = 0; i < this.particles.length; i ++) {
      this.particles[i].dr()
    }
  }

  k() {
    for(let i = 0; i < this.particles.length; i ++) {
      this.particles[i].k()
    }
  }

}