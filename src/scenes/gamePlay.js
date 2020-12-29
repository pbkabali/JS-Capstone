import bg from "../assets/full-bg.png";
import airplane from "../assets/airplan.png";
import { StrayPlane } from "./entities";

class GamePlay extends Phaser.Scene {
  constructor() {
    super({ key: "GamePlay" });
  }

  preload() {
    this.load.image("bg", bg);
    this.load.image("airplane", airplane);
  }

  create() {
    const bg = this.add.image(
      this.game.config.width / 2,
      this.game.config.height / 2,
      "bg"
    );
    bg.setScale(0.5);

    this.strayPlanes = this.add.group();

    this.time.addEvent({
      delay: 500,
      callback: function () {
        const strayPlane = new StrayPlane(
          this,
          this.game.config.width,
          Phaser.Math.Between(
            this.game.config.height / 15,
            this.game.config.height / 4
          ),
          "airplane",
          200,
          500
        );
        strayPlane.setScale(Phaser.Math.Between(5, 20) * 0.01);
        this.strayPlanes.add(strayPlane);
      },
      callbackScope: this,
      loop: true,
    });
  }
}

export default GamePlay;
