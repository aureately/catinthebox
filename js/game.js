
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', { create: create });

function create() {
  var text = "Cat In the Box";

  var style = {
    "font": "10em Helvetica",
    "fill": "#f23232",
    "margin-left":  "auto",
    "margin-right": "auto"
    };

  var t = game.add.text(game.world.centerX-300, 0, text, style);

}
