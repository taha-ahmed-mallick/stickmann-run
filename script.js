let canvas = document.getElementsByTagName("canvas")[0];
let ctx = canvas.getContext('2d');
let blockSize, numBlox = 13;

// resize
function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      blockSize = canvas.height / numBlox;
}

resize();
window.addEventListener('resize', resize);

let blocks = [
      {
            name: 'air',
            type: "hollow"
      },
      {
            name: 'ground',
            type: "block"
      },
      {
            name: 'ground-left-curve',
            type: "block"
      },
      {
            name: 'ground-right-curve',
            type: "block"
      },
      {
            name: 'ground-curved',
            type: "block"
      }
];

for (let i = 0; i < blocks.length; i++) {
      let block = blocks[i];
      block.img = new Image();
      block.img.src = `./imgs/${block.name}.png`;
}

let map = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3]
];

function drawMap() {
      for (let i = 0; i < numBlox; i++) {
            for (let j = 0; j < map[i].length; j++) {
                  ctx.drawImage(blocks[map[i][j]].img, blockSize * j, blockSize * i, blockSize, blockSize);
            }
      }
}

class Player {
      constructor() {
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.pX = this.x / canvas.width;
            this.pY = this.y / canvas.height;
            this.w = blockSize;
            this.h = blockSize * 1.5;
            this.size = 's';
            this.direction = 'r';
            this.bombAvailable = false;
            this.blockLvl = Math.floor((this.y + this.h / 2) / blockSize);
            this.blockLvlTop = Math.floor((this.y - this.h / 2) / blockSize);
            this.blockSideLeft = Math.floor((this.x - this.w / 2) / blockSize);
            this.blockSideRight = Math.floor((this.x + this.w / 2) / blockSize);
            this.movement = [0, 0, 0];
            console.log(this.blockSideLeft, this.blockSideRight);
      }
      drawCharacter() {
            ctx.fillStyle = '#000000';
            ctx.fillRect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
            // guiders
            // ctx.fillStyle = '#ff0000';
            // ctx.fillRect(this.x - this.w / 2 - 10, this.y + this.h / 2, this.w + 20, 1);
            // ctx.fillRect(this.x - this.w / 2 - 10, this.y - this.h / 2, this.w + 20, 1);
            // ctx.fillRect(this.x - this.w / 2, this.y - this.h / 2 - 10, 1, this.h + 20);
            // ctx.fillRect(this.x + this.w / 2, this.y - this.h / 2 - 10, 1, this.h + 20);
            this.blockLvl = Math.floor((this.y + this.h / 2) / blockSize);
            this.blockLvlTop = Math.floor((this.y - this.h / 2) / blockSize);
            this.blockSideLeft = Math.floor((this.x - this.w / 2) / blockSize);
            this.blockSideRight = Math.floor((this.x + this.w / 2) / blockSize);
      }
      backward() {
            if (this.movement[0] == 0) {
                  this.movement[0] = 1;
                  let interval = setInterval(() => {
                        this.movement[0] == 0 ? clearInterval(interval) : null;
                        this.x--;
                  }, 1);
            }
      }
      forward() {
            if (this.movement[2] == 0) {
                  this.movement[2] = 1;
                  let interval = setInterval(() => {
                        this.movement[2] == 0 ? clearInterval(interval) : null;
                        this.x++;
                  }, 1);
            }
      }
      jump() {
            if (this.movement[1] == 0 && blocks[map[this.blockLvl][this.blockSideLeft]].type == 'block' || blocks[map[this.blockLvl][this.blockSideRight]].type == 'block') {
                  let distance = blockSize * 3;
                  this.movement[1] = 1;
                  let interval = setInterval(() => {
                        this.y -= 2;
                        distance -= 2;
                        if (distance <= 0) {
                              this.movement[1] = 0;
                              clearInterval(interval);
                        }
                  }, 1);
            }
      }
      gravity() {
            if (this.movement[1] == 0) {
                  this.y += 10;
                  if (this.blockLvl < numBlox - 1) {
                        if (blocks[map[this.blockLvl][this.blockSideLeft]].type == 'block' || blocks[map[this.blockLvl][this.blockSideRight]].type == 'block') {
                              this.y = this.blockLvl * blockSize - this.h / 2;
                        }
                        // if (blocks[map[this.blockLvl + 1][this.blockSideLeft]].type == 'block') {
                        //       if (this.y >= (this.blockLvl + 1) * blockSize) {
                        //             this.y = (this.blockLvl + 1) * blockSize - this.h / 2;
                        //       }
                        // }
                  } else if (blocks[map[this.blockLvl][this.blockSideLeft]].type == 'block' || blocks[map[this.blockLvl][this.blockSideRight]].type == 'block') {
                        this.y = this.blockLvl * blockSize - this.h / 2;
                  }
            }
      }
}

let player = new Player();
window.addEventListener('keydown', e => {
      if (e.key == 'ArrowLeft' || e.keyCode == 37) player.backward();
      if (e.key == 'ArrowUp' || e.keyCode == 38) player.jump();
      if (e.key == 'ArrowRight' || e.keyCode == 39) player.forward();
});

window.addEventListener('keyup', e => {
      if (e.key == 'ArrowLeft' || e.keyCode == 37) player.movement[0] = 0;
      if (e.key == 'ArrowRight' || e.keyCode == 39) player.movement[2] = 0;
});

function drawFrames() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawMap();
      player.gravity();
      player.drawCharacter();
      requestAnimationFrame(drawFrames);
}

drawFrames();