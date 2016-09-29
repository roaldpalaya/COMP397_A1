var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Scene5 = (function (_super) {
        __extends(Scene5, _super);
        function Scene5() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Scene5.prototype.start = function () {
            // Add objects to the scene
            console.log("Scene 5 started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("SCENE 5", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            //Create button for scene 4
            this._scene10Button = new objects.Button("Choice1", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene10Button);
            this._scene10Button.on("click", this._onScene10ButtonClick, this);
            // Create button for scene 5 and add to Game Scene container. Register for onclick event
            this._scene11Button = new objects.Button("Choice2", config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene11Button);
            this._scene11Button.on("click", this._onScene11ButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Scene5.prototype.update = function () {
            // Update objects
        };
        Scene5.prototype._onScene10ButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE10;
            changeScene();
        };
        Scene5.prototype._onScene11ButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE11;
            changeScene();
        };
        return Scene5;
    }(objects.Scene));
    scenes.Scene5 = Scene5;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene5.js.map