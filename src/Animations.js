export default class Animations{
    preload(){
        this.load.image('bg','/assets/bg.png');
        this.load.spritesheet('move','/assets/move.png',{
            frameWidth:16,
            frameHeight:16
        });
    }
    create(){
        this.add.image(210,200,'bg').setOrigin(0.5).setScale(1);
        this.player = this.physics.add.sprite(100, 100, 'move',36).setCollideWorldBounds(true).setDisplaySize(42,42);
        this.cursors=this.input.keyboard.createCursorKeys();
        
        this.anims.create({
            key:'walkleft',
            frames:this.anims.generateFrameNumbers('move',{ frames: [37, 45, 53]}),
            frameRate:8,
            repeat:-1,
        })
        this.anims.create({
            key:'walkdown',
            frames:this.anims.generateFrameNumbers('move',{ frames: [36, 44, 52]}),
            frameRate:8,
            repeat:-1,
        })
        this.anims.create({
            key:'walkright',
            frames:this.anims.generateFrameNumbers('move',{ frames: [37, 45, 53]}),
            frameRate:8,
            repeat:-1,
        })
        this.anims.create({
            key:'walkup',
            frames:this.anims.generateFrameNumbers('move',{ frames: [38, 46, 54]}),
            frameRate:8,
            repeat:-1,
        })
      
    }
    update(){
        this.player.setVelocity(0);
        if(this.cursors.left.isDown){
            this.player.x-=2;
            this.player.flipX=true;
            this.player.anims.play('walkleft',true);
        }
        else if (this.cursors.right.isDown) {
            this.player.x += 2;
            this.player.flipX=false;
            this.player.anims.play('walkright', true);

        }
        else if (this.cursors.up.isDown) {
            this.player.y -= 2;
            this.player.anims.play('walkup', true);
        }
        else if (this.cursors.down.isDown) {
            this.player.y += 2;
            this.player.anims.play('walkdown', true);
        }
        else {
            this.player.anims.stop();
        }      
    }
}