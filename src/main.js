import Phaser from 'phaser';
import Animations from './Animations';
const config = {
  type:Phaser.AUTO,
  height :600,
  width:720,
    physics: {
    default: 'arcade',
    arcade: {
      gravity:{y:0},
      debug: false
    }
  },
  scene:[Animations],
  backgroundColor:"#000000"
}
new Phaser.Game(config);