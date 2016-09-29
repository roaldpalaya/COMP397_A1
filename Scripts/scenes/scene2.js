var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Scene2 = (function (_super) {
        __extends(Scene2, _super);
        function Scene2() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Scene2.prototype.start = function () {
            // Add objects to the scene
            console.log("Scene 2 started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("SCENE 2", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            //Create button for scene 4
            this._scene4Button = new objects.Button("Choice1", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene4Button);
            this._scene4Button.on("click", this._onScene4ButtonClick, this);
            // Create button for scene 5 and add to Game Scene container. Register for onclick event
            this._scene5Button = new objects.Button("Choice2", config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene5Button);
            this._scene5Button.on("click", this._onScene5ButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Scene2.prototype.update = function () {
            // Update objects
        };
        Scene2.prototype._onScene4ButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE4;
            changeScene();
        };
        Scene2.prototype._onScene5ButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE5;
            changeScene();
        };
        return Scene2;
    }(objects.Scene));
    scenes.Scene2 = Scene2;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene2.js.map