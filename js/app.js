// Enemies our player must avoid
class Enemy {
  constructor(x,y,speed) {
    // Variables applied to each of our instances go here,***
    // we've provided one for you to get started***
  this.x = x;
  this.y = y;
  this.speed = speed;
    // The image/sprite for our enemies, this uses***
    // a helper we've provided to easily load images***
  this.sprite = 'images/enemy-bug.png';
  }
  // // Update the enemy's position, required method for game***
  // // Parameter: dt, a time delta between ticks***
  // Enemy.prototype.update = function(dt) {***
       // You should multiply any movement by the dt parameter***
       // which will ensure the game runs at the same speed for***
       // all computers.***
  // update(dt) {
  //   this.x += this.speed * dt;
  // }

  update(dt) {
    if (this.x < 505) {
      this.x += this.speed * dt;
    } else {
      this.x = -25;
    }

  }
  // Draw the enemy on the screen, required method for game***
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
};


// Now write your own player class***
// This class requires an update(), render() and***
// a handleInput() method.***
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
  }


  update(dt) {
    this.x += this.speed * dt;
  }

  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput() {

  }

}


// Now instantiate your objects.***
// Place all enemy objects in an array called allEnemies***
// Place the player object in a variable called player ***
let allEnemies = [];
let verticalAxis = [60, 145, 230];
let player = new Player(200,400);

for (let i = 0; i < 3; i++) {
  let horizontalAxis = Math.floor(Math.random() * 500) + 1;
  let speed = Math.floor(Math.random() * 500) + 50;
  let enemyName = 'enemy' + i;
  enemyName = new Enemy(horizontalAxis, verticalAxis[i], speed);

  allEnemies.push(enemyName);
}

// let enemy = new Enemy(0, 230, 500); ///Use 145 for middle space, 60 for top 230 bottom
// allEnemies.push(enemy);

// This listens for key presses and sends the keys to your ***
// Player.handleInput() method. You don't need to modify this.***
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
