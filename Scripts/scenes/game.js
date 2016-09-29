/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Game.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("PLAY SCENE", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            //Create button for scene 2
            this._scene2Button = new objects.Button("Choice1", config.Screen.CENTER_X - 180, config.Screen.CENTER_Y + 180);
            this.addChild(this._scene2Button);
            this._scene2Button.on("click", this._onScene2ButtonClick, this);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._scene3Button = new objects.Button("Choice2", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._scene3Button);
            this._scene3Button.on("click", this._onScene3ButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Game.prototype.update = function () {
            // Update objects
        };
        Game.prototype._onScene3ButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE3;
            changeScene();
        };
        Game.prototype._onScene2ButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE2;
            changeScene();
        };
        return Game;
    }(objects.Scene));
    scenes.Game = Game;
})(scenes || (scenes = {}));
//# sourceMappingURL=game.js.map