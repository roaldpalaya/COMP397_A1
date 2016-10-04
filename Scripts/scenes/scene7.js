var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Scene7 = (function (_super) {
        __extends(Scene7, _super);
        function Scene7() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Scene7.prototype.start = function () {
            // Add objects to the scene
            console.log("Scene 7 started");
            //BG
            this._bg = new createjs.Bitmap(assets.getResult("Screen7"));
            this.addChild(this._bg);
            //Create button for scene 4
            this._scene14Button = new objects.Button("Choice1", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene14Button);
            this._scene14Button.on("click", this._onScene14ButtonClick, this);
            // Create button for scene 5 and add to Game Scene container. Register for onclick event
            this._scene15Button = new objects.Button("Choice2", config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene15Button);
            this._scene15Button.on("click", this._onScene15ButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Scene7.prototype.update = function () {
            // Update objects
        };
        Scene7.prototype._onScene14ButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE14;
            changeScene();
        };
        Scene7.prototype._onScene15ButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE15;
            changeScene();
        };
        return Scene7;
    }(objects.Scene));
    scenes.Scene7 = Scene7;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene7.js.map