var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Scene4 = (function (_super) {
        __extends(Scene4, _super);
        function Scene4() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Scene4.prototype.start = function () {
            // Add objects to the scene
            console.log("Scene 4 started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("SCENE 4", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            //Create button for scene 8
            this._scene8Button = new objects.Button("Choice1", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene8Button);
            this._scene8Button.on("click", this._onScene8ButtonClick, this);
            // Create button for scene 9 and add to Game Scene container. Register for onclick event
            this._scene9Button = new objects.Button("Choice2", config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene9Button);
            this._scene9Button.on("click", this._onScene9ButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Scene4.prototype.update = function () {
            // Update objects
        };
        Scene4.prototype._onScene8ButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE8;
            changeScene();
        };
        Scene4.prototype._onScene9ButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE9;
            changeScene();
        };
        return Scene4;
    }(objects.Scene));
    scenes.Scene4 = Scene4;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene4.js.map