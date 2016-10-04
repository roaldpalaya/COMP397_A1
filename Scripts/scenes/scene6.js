var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Scene6 = (function (_super) {
        __extends(Scene6, _super);
        function Scene6() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Scene6.prototype.start = function () {
            // Add objects to the scene
            console.log("Scene 6 started");
            //BG
            this._bg = new createjs.Bitmap(assets.getResult("Screen6"));
            this.addChild(this._bg);
            //Create button for scene 4
            this._scene12Button = new objects.Button("Choice1", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene12Button);
            this._scene12Button.on("click", this._onScene12ButtonClick, this);
            // Create button for scene 5 and add to Game Scene container. Register for onclick event
            this._scene13Button = new objects.Button("Choice2", config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene13Button);
            this._scene13Button.on("click", this._onScene13ButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Scene6.prototype.update = function () {
            // Update objects
        };
        Scene6.prototype._onScene12ButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE12;
            changeScene();
        };
        Scene6.prototype._onScene13ButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE13;
            changeScene();
        };
        return Scene6;
    }(objects.Scene));
    scenes.Scene6 = Scene6;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene6.js.map