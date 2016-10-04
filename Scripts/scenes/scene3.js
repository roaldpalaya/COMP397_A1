var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Scene3 = (function (_super) {
        __extends(Scene3, _super);
        function Scene3() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Scene3.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            //BG
            this._bg = new createjs.Bitmap(assets.getResult("Screen3"));
            this.addChild(this._bg);
            //Create button for scene 2
            this._scene6Button = new objects.Button("Choice1", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene6Button);
            this._scene6Button.on("click", this._onScene6ButtonClick, this);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._scene7Button = new objects.Button("Choice2", config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene7Button);
            this._scene7Button.on("click", this._onScene7ButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Scene3.prototype.update = function () {
            // Update objects
        };
        Scene3.prototype._onScene6ButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE6;
            changeScene();
        };
        Scene3.prototype._onScene7ButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE7;
            changeScene();
        };
        return Scene3;
    }(objects.Scene));
    scenes.Scene3 = Scene3;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene3.js.map