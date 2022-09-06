


export class Player {
  // better not to hard code values
  // name = 'mick'
  // score = 0
  // 
  // let values be created on Player Creation
  constructor(name, score) {
    this.name = name
    this.score = score
  }

  scorePoint() {
    this.score++
    console.log(this.name, 'scored a point', this.score)
  }

  get Template() {
    return `
    <div class="col-md-6 text-center p-2 bg-light elevation-2">
      <h3>${this.name}</h3>
      <h3 class="text-warning">${this.score}</h3>
      <button class="btn btn-primary w-100" onclick="app.playersController.scorePoint('${this.name}')">+</button>
    </div>
    `
  }

}